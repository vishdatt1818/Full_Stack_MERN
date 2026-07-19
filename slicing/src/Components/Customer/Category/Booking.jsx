import { useEffect, useState } from "react";
import ServiceOfBarber from "../../../Services/ServiceOfBarber";
import { useNavigate, Link, useParams } from "react-router-dom";
import BookingService from "../../../Services/BookingService";
import { toast } from "react-toastify";
import AuthService from "../../../Services/AuthService";
// import ServiceOfBarber from "../../../Services/ServiceOfBarber";

const Booking = () => {
  const [ser, setServices] = useState({});
  const [Date, setDate] = useState();
  const [Note, setnote] = useState("");



  const { id } = useParams();

  async function getServices() {
    let res = await ServiceOfBarber.single(id);
    // console.log(res);
    setServices(res);
   
  }
  useEffect(() => {
    getServices();
  }, []);

  let uid=AuthService.getUid()

  const nav= useNavigate()

  const handleBooking=()=>{
    if(!Date){
        return toast.error("Enter Booking Date")
    }

    let data={
        notes:Note || "NO Note",
        appointmentDate:Date,
        customerId:uid,
        serviceId:ser.id,
        totalAmount:ser.price,
        time:ser.duration

    }
    nav(-1)
    toast.success("Appointment Book Successfully")

    console.log(data);
    BookingService.add(data)
    
  }

  return (
    <>
      {/* Page Header Start */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Bookings</h2>
            </div>
            <div className="col-12">
              <a href="">Home</a>
              <a href="">Bookings</a>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}
      {/* Service Start */}
      <div className="service">
        <div className="container">
          <div className="section-header text-center">
            <p>Bookings</p>
            {/* <h2>Best Salon and Barber Services for You</h2> */}
          </div>
          <div className=" container   ">
            <div className="row  d-flex justify-content-around">
                {console.log("Card data", ser)
                }
               <div
                  className="card my-4 text-center"
                  style={{ width: "18rem" }}
                >
                  <img
                    src={ser?.image}
                    style={{ height: "250px", objectFit: "cover" }}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{ser.serviceName}</h5>
                    <p className="card-text">
                      Price
                      {ser.price}
                    </p>
                    <p className="card-text">{ser.duration}</p>
                    <div className="control-group">
                      <input
                        type="date"
                        className="form-control"
                        id="note"
                        placeholder="Enter your Appointment Date"
                        value={Date}
                        onChange={(e) => {
                          setDate(e.target.value);
                        }}
                        required="required"
                        data-validation-required-message="Please enter your name"
                      />
                      <p className="help-block text-danger" />
                    </div>

                    <div className="control-group">
                      <input
                        type="text"
                        className="form-control"
                        id="note"
                        placeholder="Enter your notes"
                        value={Note}
                        onChange={(e) => {
                          setnote(e.target.value);
                        }}
                        required="required"
                        data-validation-required-message="Please enter your name"
                      />
                      <p className="help-block text-danger" />
                    </div>

                    <button onClick={handleBooking} className="btn newbtn btn-primary">
                      Book Service
                    </button>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}
    </>
  );
};

export default Booking;
