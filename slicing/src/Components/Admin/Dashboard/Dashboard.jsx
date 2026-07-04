import React, { useState } from 'react';

const initialBarbers = [
  { id: 1, name: 'Sam', specialty: 'Styling & Premium Haircuts', status: 'Active', performanceLog: 42 },
  { id: 2, name: 'Alex', specialty: 'Senior Hair Stylist', status: 'Active', performanceLog: 55 },
  { id: 3, name: 'David', specialty: 'Hair Wash & Grooming', status: 'Active', performanceLog: 12 },
];

const initialServices = [
  { id: 1, name: 'Premium Haircut', price: 25, duration: 30 },
  { id: 2, name: 'Deep Cleansing Hair Wash', price: 15, duration: 15 },
  { id: 3, name: 'Beard Trim & Shape', price: 20, duration: 20 },
];

const initialAppointments = [
  { id: 'B101', customer: 'Alex', barber: 'Sam', service: 'Premium Haircut & Wash', time: '03:00 PM', status: 'Completed', amount: 40 },
  { id: 'B102', customer: 'John Doe', barber: 'Alex', service: 'Beard Trim', time: '04:15 PM', status: 'Pending', amount: 20 },
  { id: 'B103', customer: 'Sarah M.', barber: 'David', service: 'Deep Cleansing Hair Wash', time: '05:00 PM', status: 'Completed', amount: 15 },
];

const Dashboard = () => {

  



  const [activeTab, setActiveTab] = useState('overview');

  // Core States
  const [barbers, setBarbers] = useState(initialBarbers);
  const [services, setServices] = useState(initialServices);
  const [appointments, setAppointments] = useState(initialAppointments);

  // Form States for CRUD
  const [newBarber, setNewBarber] = useState({ name: '', specialty: '', status: 'Active' });
  const [newService, setNewService] = useState({ name: '', price: '', duration: '' });

  // --- HANDLERS: STAFF MANAGEMENT ---
  const handleAddBarber = (e) => {
    e.preventDefault();
    if (!newBarber.name || !newBarber.specialty) return;
    setBarbers([...barbers, { ...newBarber, id: Date.now(), performanceLog: 0 }]);
    setNewBarber({ name: '', specialty: '', status: 'Active' });
  };

  const handleDeleteBarber = (id) => {
    setBarbers(barbers.filter((b) => b.id !== id));
  };

  const toggleBarberStatus = (id) => {
    setBarbers(barbers.map(b => b.id === id ? { ...b, status: b.status === 'Active' ? 'Inactive' : 'Active' } : b));
  };

  // --- HANDLERS: SERVICE CONTROL ---
  const handleAddService = (e) => {
    e.preventDefault();
    if (!newService.name || !newService.price || !newService.duration) return;
    setServices([...services, { 
      id: Date.now(), 
      name: newService.name, 
      price: parseFloat(newService.price), 
      duration: parseInt(newService.duration) 
    }]);
    setNewService({ name: '', price: '', duration: '' });
  };

  const handleDeleteService = (id) => {
    setServices(services.filter((s) => s.id !== id));
  };

  // --- CALCULATION FOR OVERVIEW ---
  const totalRevenue = appointments
    .filter(app => app.status === 'Completed')
    .reduce((sum, app) => sum + app.amount, 0);

  return (
    <div className="container-fluid p-0">
        {/* Page Header Start */}
  <div className="page-header">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>Admin Dashboard</h2>
        </div>
        <div className="col-12">
          <a href="">Home</a>
          <a href="">Admin Dashboard</a>
        </div>
      </div>
    </div>
  </div>
  {/* Page Header End */}

      <div className="d-flex" style={{ height: 'calc(100vh - 62px)' }}>
        {/* SIDEBAR NAVIGATION */}
        <div className="bg-dark text-white p-3 d-flex flex-column justify-content-between" style={{ width: '260px', minWidth: '260px' }}>
          <div>
            <div className="d-flex align-items-center gap-2 mb-4 px-2">
              <span className="h3 mb-0 text-warning font-weight-black tracking-wider">GlowUp</span>
              <span className="badge bg-secondary text-light text-uppercase ms-2" style={{ fontSize: '0.7rem' }}>Admin</span>
            </div>
            <nav className="nav flex-column gap-1">
              <button
                onClick={() => setActiveTab('overview')}
                className={`nav-link text-start border-0 rounded-3 py-2.5 px-3 mb-1 w-100 ${activeTab === 'overview' ? 'bg-warning text-dark font-weight-medium' : 'bg-transparent text-light opacity-75'}`}
                style={{ transition: 'all 0.2s' }}
              >
                📊 Operational Overview
              </button>
              <button
                onClick={() => setActiveTab('roster')}
                className={`nav-link text-start border-0 rounded-3 py-2.5 px-3 mb-1 w-100 ${activeTab === 'roster' ? 'bg-warning text-dark font-weight-medium' : 'bg-transparent text-light opacity-75'}`}
                style={{ transition: 'all 0.2s' }}
              >
                👥 Staff Roster
              </button>
              <button
                onClick={() => setActiveTab('services')}
                className={`nav-link text-start border-0 rounded-3 py-2.5 px-3 w-100 ${activeTab === 'services' ? 'bg-warning text-dark font-weight-medium' : 'bg-transparent text-light opacity-75'}`}
                style={{ transition: 'all 0.2s' }}
              >
                ✂️ Service Control
              </button>
            </nav>
          </div>
          <div className="text-muted border-top border-secondary pt-3 px-2" style={{ fontSize: '0.75rem' }}>
            Logged in as Lisa (Manager)
          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="flex-grow-1 overflow-auto p-4 bg-light">
          
          {/* TAB 1: OPERATIONAL OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="container-fluid p-0">
              <div className="mb-4">
                <h1 className="h2 text-dark font-weight-bold mb-1">Operational Overview</h1>
                <p className="text-muted small">Real-time breakdown of today's salon performance metrics.</p>
              </div>

              {/* METRICS CARDS */}
              <div className="row g-4 mb-4">
                <div className="col-12 col-md-4">
                  <div className="card h-100 border-0 shadow-sm p-4 rounded-3 bg-white">
                    <span className="text-muted text-uppercase small font-weight-bold tracking-wider">Total Revenue Today</span>
                    <div className="h2 font-weight-bold text-dark mt-2">${totalRevenue}.00</div>
                    <span className="text-success small mt-1">↑ 12% from last Saturday</span>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="card h-100 border-0 shadow-sm p-4 rounded-3 bg-white">
                    <span className="text-muted text-uppercase small font-weight-bold tracking-wider">Appointments</span>
                    <div className="h2 font-weight-bold text-dark mt-2">{appointments.length}</div>
                    <span className="text-muted small mt-1">{appointments.filter(a => a.status === 'Pending').length} Pending execution</span>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="card h-100 border-0 shadow-sm p-4 rounded-3 bg-white">
                    <span className="text-muted text-uppercase small font-weight-bold tracking-wider">Active Staff On Duty</span>
                    <div className="h2 font-weight-bold text-dark mt-2">{barbers.filter(b => b.status === 'Active').length} Barbers</div>
                    <span className="text-warning small mt-1">Fully booked until 6:00 PM</span>
                  </div>
                </div>
              </div>

              {/* APPOINTMENT LOGS & PERFORMANCE */}
              <div className="row g-4">
                {/* Daily Appointments */}
                <div className="col-12 col-lg-8">
                  <div className="card border-0 shadow-sm p-4 rounded-3 bg-white">
                    <h3 className="h5 font-weight-bold text-dark mb-3">Daily Appointment Feed</h3>
                    <div className="table-responsive">
                      <table className="table table-hover align-middle mb-0">
                        <thead>
                          <tr className="text-muted small text-uppercase font-weight-bold border-bottom">
                            <th className="pb-3">ID</th>
                            <th className="pb-3">Customer</th>
                            <th className="pb-3">Barber</th>
                            <th className="pb-3">Time</th>
                            <th className="pb-3 text-end">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          {appointments.map((app) => (
                            <tr key={app.id}>
                              <td className="py-3 font-monospace text-warning font-weight-medium">{app.id}</td>
                              <td className="py-3 font-weight-bold text-dark">{app.customer}</td>
                              <td className="py-3 text-secondary">{app.barber}</td>
                              <td className="py-3 text-muted">{app.time}</td>
                              <td className="py-3 text-end font-weight-bold text-dark">${app.amount}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Barber Performance Logs */}
                <div className="col-12 col-lg-4">
                  <div className="card border-0 shadow-sm p-4 rounded-3 bg-white">
                    <h3 className="h5 font-weight-bold text-dark mb-3">Barber Performance Logs</h3>
                    <div className="d-flex flex-column gap-3">
                      {barbers.map((barber) => (
                        <div key={barber.id} className="d-flex justify-content-between align-items-center border-bottom pb-2 last-border-0">
                          <div>
                            <div className="font-weight-bold text-dark">{barber.name}</div>
                            <div className="text-muted small">{barber.specialty}</div>
                          </div>
                          <div className="text-end">
                            <div className="font-weight-bold text-dark">{barber.performanceLog} jobs</div>
                            <span className="badge bg-success-subtle text-success small">Active</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: STAFF ROSTER MANAGEMENT (CRUD) */}
          {activeTab === 'roster' && (
            <div className="container-fluid p-0">
              <div className="mb-4">
                <h1 className="h2 text-dark font-weight-bold mb-1">Staff Roster Management</h1>
                <p className="text-muted small">Add, update, or remove barbers and control their operational dispatch status.</p>
              </div>

              {/* ADD NEW BARBER FORM */}
              <form onSubmit={handleAddBarber} className="card border-0 shadow-sm p-4 rounded-3 bg-white mb-4">
                <div className="row g-3 align-items-end">
                  <div className="col-12 col-md-5">
                    <label className="form-label text-muted small font-weight-bold text-uppercase mb-2">Barber Name</label>
                    <input
                      type="text"
                      placeholder="e.g. David"
                      value={newBarber.name}
                      onChange={(e) => setNewBarber({ ...newBarber, name: e.target.value })}
                      className="form-control rounded-3 py-2 px-3 text-sm"
                    />
                  </div>
                  <div className="col-12 col-md-5">
                    <label className="form-label text-muted small font-weight-bold text-uppercase mb-2">Specialty Tag</label>
                    <input
                      type="text"
                      placeholder="e.g. Hair Wash duties"
                      value={newBarber.specialty}
                      onChange={(e) => setNewBarber({ ...newBarber, specialty: e.target.value })}
                      className="form-control rounded-3 py-2 px-3 text-sm"
                    />
                  </div>
                  <div className="col-12 col-md-2">
                    <button type="submit" className="btn btn-dark w-100 rounded-3 py-2 font-weight-medium">
                      + Add Barber
                    </button>
                  </div>
                </div>
              </form>

              {/* ROSTER DATABASE LIST */}
              <div className="card border-0 shadow-sm rounded-3 bg-white overflow-hidden">
                <div className="table-responsive">
                  <table className="table table-hover align-middle mb-0">
                    <thead className="table-light">
                      <tr className="text-muted small text-uppercase font-weight-bold border-bottom">
                        <th className="p-3 ps-4">Barber ID</th>
                        <th className="p-3">Name</th>
                        <th className="p-3">Specialty Assignment</th>
                        <th className="p-3">Status</th>
                        <th className="p-3 pe-4 text-end">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {barbers.map((barber) => (
                        <tr key={barber.id}>
                          <td className="p-3 ps-4 font-monospace text-muted">#00{barber.id}</td>
                          <td className="p-3 font-weight-bold text-dark">{barber.name}</td>
                          <td className="p-3 text-secondary">{barber.specialty}</td>
                          <td className="p-3">
                            <button 
                              type="button"
                              onClick={() => toggleBarberStatus(barber.id)}
                              className={`btn btn-sm rounded-pill font-weight-bold px-3 ${barber.status === 'Active' ? 'btn-light text-success border border-success-subtle bg-success-subtle' : 'btn-light text-danger border border-danger-subtle bg-danger-subtle'}`}
                            >
                              {barber.status}
                            </button>
                          </td>
                          <td className="p-3 pe-4 text-end">
                            <button 
                              type="button"
                              onClick={() => handleDeleteBarber(barber.id)} 
                              className="btn btn-link text-danger text-decoration-none small p-0 font-weight-medium"
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SERVICE CONTROL (CRUD) */}
          {activeTab === 'services' && (
            <div className="container-fluid p-0">
              <div className="mb-4">
                <h1 className="h2 text-dark font-weight-bold mb-1">Service Control Center</h1>
                <p className="text-muted small">Manage global menus, adjust pricing structures, or edit operational calculation runtimes.</p>
              </div>

              {/* ADD NEW SERVICE FORM */}
              <form onSubmit={handleAddService} className="card border-0 shadow-sm p-4 rounded-3 bg-white mb-4">
                <div className="row g-3 align-items-end">
                  <div className="col-12 col-md-4">
                    <label className="form-label text-muted small font-weight-bold text-uppercase mb-2">Service Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Beard Trim & Shape"
                      value={newService.name}
                      onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                      className="form-control rounded-3 py-2 px-3 text-sm"
                    />
                  </div>
                  <div className="col-12 col-md-3">
                    <label className="form-label text-muted small font-weight-bold text-uppercase mb-2">Price ($)</label>
                    <input
                      type="number"
                      placeholder="25"
                      value={newService.price}
                      onChange={(e) => setNewService({ ...newService, price: e.target.value })}
                      className="form-control rounded-3 py-2 px-3 text-sm"
                    />
                  </div>
                  <div className="col-12 col-md-3">
                    <label className="form-label text-muted small font-weight-bold text-uppercase mb-2">Duration (Mins)</label>
                    <input
                      type="number"
                      placeholder="30"
                      value={newService.duration}
                      onChange={(e) => setNewService({ ...newService, duration: e.target.value })}
                      className="form-control rounded-3 py-2 px-3 text-sm"
                    />
                  </div>
                  <div className="col-12 col-md-2">
                    <button type="submit" className="btn btn-dark w-100 rounded-3 py-2 font-weight-medium">
                      + Publish Service
                    </button>
                  </div>
                </div>
              </form>

              {/* SERVICES DATABASE LIST */}
              <div className="card border-0 shadow-sm rounded-3 bg-white overflow-hidden mb-4">
                <div className="table-responsive">
                  <table className="table table-hover align-middle mb-0">
                    <thead className="table-light">
                      <tr className="text-muted small text-uppercase font-weight-bold border-bottom">
                        <th className="p-3 ps-4">Service Offering</th>
                        <th className="p-3">Price Structure</th>
                        <th className="p-3">Dynamic Compute Block</th>
                        <th className="p-3 pe-4 text-end">Action Grid</th>
                      </tr>
                    </thead>
                    <tbody>
                      {services.map((service) => (
                        <tr key={service.id}>
                          <td className="p-3 ps-4 font-weight-bold text-dark">{service.name}</td>
                          <td className="p-3 font-monospace text-success font-weight-bold">${service.price}.00</td>
                          <td className="p-3">
                            <span className="badge bg-warning-subtle text-warning-tight px-2.5 py-1.5 rounded font-weight-medium border border-warning-subtle">
                              {service.duration} minutes runtime
                            </span>
                          </td>
                          <td className="p-3 pe-4 text-end">
                            <button 
                              type="button"
                              onClick={() => handleDeleteService(service.id)}
                              className="btn btn-link text-danger text-decoration-none small p-0 font-weight-medium"
                            >
                              Delete Service
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="alert alert-warning border-0 rounded-3 p-3 shadow-sm" role="alert" style={{ borderLeft: '4px solid #ffc107 !important' }}>
                <small className="text-dark">
                  💡 <strong>Dynamic Computing Notice:</strong> Adjusting the estimated duration dynamically shifts how continuous time slots are parsed on the client customer application layout during simultaneous selections.
                </small>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Dashboard;