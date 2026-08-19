import React from 'react'

const Home = () => {
  return (
    <>
      {/* START HOME / HERO */}
      <section
        className="home_bg hb_height"
        style={{
          backgroundImage: "url(assets/img/bg/home-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="hero-text ht_top">
                <h1>
                  <span>Smart Careers</span> Where Talent Meets Opportunity
                </h1>
                <p>
                  Discover thousands of job vacancies, top hiring companies, and career resources to accelerate your professional growth.
                </p>
              </div>
              <div className="home_sb">
                <form action="#" className="banner_subs">
                  <input
                    type="text"
                    className="form-control home_si"
                    placeholder="Search jobs, skills, or companies"
                    required="required"
                  />
                  <button type="button" className="subscribe__btn">
                    Search Jobs <i className="fa fa-paper-plane-o" />
                  </button>
                </form>
              </div>
            </div>
            {/* END COL */}
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="hero-text-img">
                <img src="assets/img/home-img2.png" className="img-fluid" alt="Job Seeker" />
                <div className="home_ps">
                  <span className="ti-user" />
                  <h2>4500+</h2>
                  <p>Active Candidates</p>
                </div>
              </div>
            </div>
            {/* END COL */}
          </div>
          {/* END ROW */}
        </div>
        {/* END CONTAINER */}
      </section>
      {/* END HOME / HERO */}

      {/* START COUNTER */}
      <section className="count_area counter_feature">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single-counter">
                <span className="ti-briefcase sc_one" />
                <h2 className="counter-num">1,340</h2>
                <p>Live Job Listings</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single-counter">
                <span className="ti-location-pin sc_two" />
                <h2 className="counter-num">299</h2>
                <p>Global Locations</p>
              </div>
            </div>
            {/* END COL */}
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single-counter">
                <span className="ti-check-box sc_three" />
                <h2 className="counter-num">6,840</h2>
                <p>Hired Candidates</p>
              </div>
            </div>
            {/* END COL */}
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single-counter">
                <span className="ti-layout-grid2 sc_four" />
                <h2 className="counter-num">941</h2>
                <p>Partner Companies</p>
              </div>
            </div>
            {/* END COL */}
          </div>
          {/* END ROW */}
        </div>
        {/* END CONTAINER */}
      </section>
      {/* END COUNTER */}

      {/* START HOW IT WORKS */}
      <section
        className="top_cat__area section-padding"
        style={{
          backgroundImage: "url(assets/img/bg/shape-1.png)",
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}
      >
        <div className="container">
          <div className="section-title text-center">
            <h2>How It Works For Candidates</h2>
            <p>
              Landing your dream role is simple. Follow these four basic steps to get noticed by leading tech, design, and business recruiters.
            </p>
          </div>
          <div className="row">
            <div
              className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset={0}
            >
              <div className="single_tp">
                <span className="sc_one">01</span>
                <h3>
                  Create <br />
                  Profile
                </h3>
                <p>
                  Build your professional candidate profile and upload your latest resume.
                </p>
              </div>
            </div>
            {/* END COL */}
            <div
              className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
              data-wow-offset={0}
            >
              <div className="single_tp">
                <span className="sc_two">02</span>
                <h3>
                  Search <br />
                  Jobs
                </h3>
                <p>
                  Filter open positions by salary, remote work options, industry, and locations.
                </p>
              </div>
            </div>
            {/* END COL */}
            <div
              className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.4s"
              data-wow-offset={0}
            >
              <div className="single_tp">
                <span className="sc_three">03</span>
                <h3>
                  Apply <br />
                  Directly
                </h3>
                <p>
                  Submit 1-click applications directly to verified hiring managers.
                </p>
              </div>
            </div>
            {/* END COL */}
            <div
              className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.4s"
              data-wow-offset={0}
            >
              <div className="single_tp">
                <span className="sc_four">04</span>
                <h3>
                  Get <br />
                  Hired
                </h3>
                <p>
                  Schedule interviews, negotiate offers, and start your next career milestone.
                </p>
              </div>
            </div>
            {/* END COL */}
          </div>
          {/* END ROW */}
        </div>
        {/* END CONTAINER */}
      </section>
      {/* END HOW IT WORKS */}

      {/* START ABOUT RECRUITMENT */}
      <section className="ab_area section-padding">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset={0}
            >
              <div className="ab_img">
                <img
                  src="assets/img/about1.png"
                  className="img-fluid"
                  alt="Recruitment"
                />
              </div>
            </div>
            {/* END COL */}
            <div
              className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
              data-wow-offset={0}
            >
              <div className="ab_content">
                <h2>Connecting Top Talent with Global Tech & Enterprise Leaders</h2>
                <p>
                  Our smart matching algorithms pair job candidates with opportunities matching their exact skillsets, compensation goals, and workplace values.
                </p>
                <p>
                  Whether you are seeking remote work, full-time local positions, or contract roles, we streamline the talent discovery and hiring journey.
                </p>
                <ul>
                  <li>
                    <span className="ti-check" /> Access <b>12,000+</b> verified corporate &amp; startup vacancies
                  </li>
                  <li>
                    <span className="ti-check" /> Receive real-time job alerts &amp; application updates
                  </li>
                  <li>
                    <span className="ti-check" /> Connect directly with headhunters and internal talent leads
                  </li>
                </ul>
                <a className="btn_one" href="jobs.html">
                  Browse Open Positions <i className="ti-arrow-top-right" />
                </a>
              </div>
            </div>
            {/* END COL */}
          </div>
          {/* END ROW */}
        </div>
        {/* END CONTAINER */}
      </section>
      {/* END ABOUT RECRUITMENT */}

      {/* START JOB CATEGORIES */}
      <section
        className="top_cat__area section-padding"
        style={{
          backgroundImage: "url(assets/img/bg/section-2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}
      >
        <div className="container">
          <div className="section-title text-center">
            <h2>Explore Positions by Industry Category</h2>
            <p>
              Select your specialty to view all active openings and market salary insights.
            </p>
          </div>
          <div className="row">
            <div
              className="col-lg-12 col-sm-12 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
              data-wow-offset={0}
            >
              <div className="cat_list">
                <ul>
                  <li>
                    <a href="#">
                      <img src="assets/img/e1.png" alt="category-image" /> Digital Marketing
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/e2.png" alt="category-image" /> UI/UX Design
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/e3.png" alt="category-image" /> Product Design
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/e4.png" alt="category-image" /> Content Writing
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/e5.png" alt="category-image" /> Media &amp; Video
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/e6.png" alt="category-image" /> Human Resources
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/e7.png" alt="category-image" /> Software Engineering
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/e8.png" alt="category-image" /> Finance &amp; Accounting
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/e9.png" alt="category-image" /> Data Science &amp; AI
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/e2.png" alt="category-image" /> Frontend Development
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/e3.png" alt="category-image" /> DevOps &amp; Cloud
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/e7.png" alt="category-image" /> Project Management
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* END COL */}
          </div>
          {/* END ROW */}
        </div>
        {/* END CONTAINER */}
      </section>
      {/* END JOB CATEGORIES */}

      {/* START FEATURED JOBS */}
      <section className="home_course section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-6 col-xs-12">
              <div className="section-title">
                <h2>
                  Explore top jobs from <b>80,000+ </b> <br />
                  Hiring companies worldwide.
                </h2>
              </div>
            </div>
            {/* END COL */}
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="cour_btn">
                <a href="jobs.html" className="btn_one">
                  View All Jobs <i className="ti-arrow-top-right" />
                </a>
              </div>
            </div>
            {/* END COL */}
          </div>
          {/* END ROW */}
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="single_course">
                <div className="single_c_img">
                  <img
                    src="assets/img/course/1.png"
                    className="img-fluid"
                    alt="job-image"
                  />
                  <span>Full-Time</span>
                </div>
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <h4>
                  <a href="job-detail.html">
                    Senior Lead Frontend Developer (React / Next.js)
                  </a>
                </h4>
                <p>
                  <span className="ti-location-pin"> </span> New York, USA (Remote)
                </p>
                <p>
                  <span className="ti-time"> </span> Posted 2 days ago
                </p>
                <div className="price">$120k - $140k / year</div>
              </div>
            </div>
            {/* END COL */}
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="single_course">
                <div className="single_c_img">
                  <img
                    src="assets/img/course/2.png"
                    className="img-fluid"
                    alt="job-image"
                  />
                  <span>Remote</span>
                </div>
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <h4>
                  <a href="job-detail.html">
                    Lead Product UI/UX Designer
                  </a>
                </h4>
                <p>
                  <span className="ti-location-pin"> </span> London, UK
                </p>
                <p>
                  <span className="ti-time"> </span> Posted 1 day ago
                </p>
                <div className="price">$95k - $110k / year</div>
              </div>
            </div>
            {/* END COL */}
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="single_course">
                <div className="single_c_img">
                  <img
                    src="assets/img/course/3.png"
                    className="img-fluid"
                    alt="job-image"
                  />
                  <span>Contract</span>
                </div>
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <h4>
                  <a href="job-detail.html">Full-Stack JavaScript Engineer</a>
                </h4>
                <p>
                  <span className="ti-location-pin"> </span> San Francisco, CA
                </p>
                <p>
                  <span className="ti-time"> </span> Posted 3 hours ago
                </p>
                <div className="price">$80 - $100 / hour</div>
              </div>
            </div>
            {/* END COL */}
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="single_course">
                <div className="single_c_img">
                  <img
                    src="assets/img/course/4.png"
                    className="img-fluid"
                    alt="job-image"
                  />
                  <span>Full-Time</span>
                </div>
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <h4>
                  <a href="job-detail.html">
                    Senior Data Scientist &amp; AI Specialist
                  </a>
                </h4>
                <p>
                  <span className="ti-location-pin"> </span> Austin, TX (Hybrid)
                </p>
                <p>
                  <span className="ti-time"> </span> Posted 5 days ago
                </p>
                <div className="price">$150k - $175k / year</div>
              </div>
            </div>
            {/* END COL */}
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="single_course">
                <div className="single_c_img">
                  <img
                    src="assets/img/course/5.png"
                    className="img-fluid"
                    alt="job-image"
                  />
                  <span>Full-Time</span>
                </div>
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <h4>
                  <a href="job-detail.html">
                    Growth Digital Marketing Manager
                  </a>
                </h4>
                <p>
                  <span className="ti-location-pin"> </span> Chicago, IL
                </p>
                <p>
                  <span className="ti-time"> </span> Posted 4 days ago
                </p>
                <div className="price">$85k - $95k / year</div>
              </div>
            </div>
            {/* END COL */}
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="single_course">
                <div className="single_c_img">
                  <img
                    src="assets/img/course/6.png"
                    className="img-fluid"
                    alt="job-image"
                  />
                  <span>Part-Time</span>
                </div>
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <h4>
                  <a href="job-detail.html">
                    Cloud DevOps &amp; Systems Infrastructure Engineer
                  </a>
                </h4>
                <p>
                  <span className="ti-location-pin"> </span> Remote
                </p>
                <p>
                  <span className="ti-time"> </span> Posted 1 week ago
                </p>
                <div className="price">$60 - $75 / hour</div>
              </div>
            </div>
            {/* END COL */}
          </div>
          {/* END ROW */}
        </div>
        {/* END CONTAINER */}
      </section>
      {/* END FEATURED JOBS */}

      {/* START HIRING PARTNERS */}
      <div className="partner-logo section-padding">
        <div className="container">
          <div className="row part_bg">
            <div className="col-lg-4 col-sm-4 col-xs-12">
              <div className="partner_title">
                <h3>
                  Helping <span>86,000+</span> companies build world-class teams{" "}
                </h3>
              </div>
            </div>
            {/* END COL */}
            <div className="col-lg-8 col-sm-8 col-xs-12 text-center">
              <div className="partner">
                <a href="#">
                  <img src="assets/img/clients/1.png" alt="company-logo" />
                </a>
                <a href="#">
                  <img src="assets/img/clients/2.png" alt="company-logo" />
                </a>
                <a href="#">
                  <img src="assets/img/clients/3.png" alt="company-logo" />
                </a>
                <a href="#">
                  <img src="assets/img/clients/4.png" alt="company-logo" />
                </a>
                <a href="#">
                  <img src="assets/img/clients/5.png" alt="company-logo" />
                </a>
                <a href="#">
                  <img src="assets/img/clients/2.png" alt="company-logo" />
                </a>
                <a href="#">
                  <img src="assets/img/clients/1.png" alt="company-logo" />
                </a>
                <a href="#">
                  <img src="assets/img/clients/3.png" alt="company-logo" />
                </a>
                <a href="#">
                  <img src="assets/img/clients/4.png" alt="company-logo" />
                </a>
              </div>
            </div>
            {/* END COL */}
          </div>
          {/* END ROW */}
        </div>
        {/* END CONTAINER */}
      </div>
      {/* END HIRING PARTNERS */}

      {/* START FEATURED RECRUITERS / RECRUITMENT TEAM */}
      <section className="team_area section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h2>Featured Recruiters &amp; Advisors</h2>
            <p>
              Connect directly with verified recruiters and talent advisors ready to place candidates in top-tier positions.
            </p>
          </div>
          <div className="row">
            <div
              className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
              data-wow-offset={0}
            >
              <div className="our-team">
                <div className="team-content">
                  <a href="#">
                    <img src="assets/img/team/team1.jpg" alt="Recruiter" />
                  </a>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-x" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-prof">
                  <h3>Bilkis Vabi</h3>
                  <span>Tech Talent Partner</span>
                </div>
                <div className="sth_det2">
                  <span className="ti-briefcase">
                    {" "}
                    <u>14 Openings</u>
                  </span>
                  <span className="ti-user">
                    {" "}
                    <u>120 Hired</u>
                  </span>
                </div>
              </div>
            </div>
            {/* END COL */}
            <div
              className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
              data-wow-offset={0}
            >
              <div className="our-team">
                <div className="team-content">
                  <a href="#">
                    <img src="assets/img/team/team2.jpg" alt="Recruiter" />
                  </a>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-x" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-prof">
                  <h3>Mood Wasim</h3>
                  <span>Design &amp; Creative Lead</span>
                </div>
                <div className="sth_det2">
                  <span className="ti-briefcase">
                    {" "}
                    <u>08 Openings</u>
                  </span>
                  <span className="ti-user">
                    {" "}
                    <u>85 Hired</u>
                  </span>
                </div>
              </div>
            </div>
            {/* END COL */}
            <div
              className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
              data-wow-offset={0}
            >
              <div className="our-team">
                <div className="team-content">
                  <a href="#">
                    <img src="assets/img/team/team3.jpg" alt="Recruiter" />
                  </a>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-x" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-prof">
                  <h3>Shyinn Tim</h3>
                  <span>Executive Headhunter</span>
                </div>
                <div className="sth_det2">
                  <span className="ti-briefcase">
                    {" "}
                    <u>22 Openings</u>
                  </span>
                  <span className="ti-user">
                    {" "}
                    <u>310 Hired</u>
                  </span>
                </div>
              </div>
            </div>
            {/* END COL */}
            <div
              className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
              data-wow-offset={0}
            >
              <div className="our-team">
                <div className="team-content">
                  <a href="#">
                    <img src="assets/img/team/team4.jpg" alt="Recruiter" />
                  </a>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-x" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-prof">
                  <h3>Shorif Shorifa</h3>
                  <span>Marketing Hiring Manager</span>
                </div>
                <div className="sth_det2">
                  <span className="ti-briefcase">
                    {" "}
                    <u>11 Openings</u>
                  </span>
                  <span className="ti-user">
                    {" "}
                    <u>94 Hired</u>
                  </span>
                </div>
              </div>
            </div>
            {/* END COL */}
          </div>
          {/* END ROW */}
        </div>
        {/* END CONTAINER */}
      </section>
      {/* END FEATURED RECRUITERS */}

      {/* START EMPLOYER PROMO */}
      <section className="ab_area section-padding">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
              data-wow-offset={0}
            >
              <div className="ab_content">
                <h2>Are You Hiring? Post Jobs &amp; Reach Top Talent Fast</h2>
                <p>
                  Accelerate your hiring pipeline with our AI-powered candidate sourcing platform. Post openings, manage applicants, and interview top talent seamlessly.
                </p>
                <p>
                  Reach over 4,500+ active candidates looking for their next full-time, remote, or contract position across engineering, design, and management.
                </p>
                <ul>
                  <li>
                    <span className="ti-check" /> Targeted distribution to <b>12,000+</b> active job seekers
                  </li>
                  <li>
                    <span className="ti-check" /> Built-in candidate tracking system &amp; automated screening
                  </li>
                  <li>
                    <span className="ti-check" /> Dedicated talent acquisition support for fast placement
                  </li>
                </ul>
                <a className="btn_one" href="post-job.html">
                  Post a Job Opening <i className="ti-arrow-top-right" />
                </a>
              </div>
            </div>
            {/* END COL */}
            <div
              className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset={0}
            >
              <div className="ab_img">
                <img
                  src="assets/img/about3.png"
                  className="img-fluid"
                  alt="Employer Promo"
                />
                <div className="home_ps2">
                  <span className="ti-briefcase" />
                  <h2>3300+</h2>
                  <p>Active Jobs</p>
                </div>
              </div>
            </div>
            {/* END COL */}
          </div>
          {/* END ROW */}
        </div>
        {/* END CONTAINER */}
      </section>
      {/* END EMPLOYER PROMO */}

      {/* START CAREER BLOG */}
      <section id="blog" className="blog_area section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h2>Career Advice &amp; Industry Insights</h2>
            <p>
              Stay ahead with expert interview tips, resume optimization guides, and salary trends across major industries.
            </p>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
              data-wow-offset={0}
            >
              <div className="single_blog">
                <img
                  src="assets/img/blog/1.jpg"
                  className="img-fluid"
                  alt="blog"
                />
                <div className="content_box">
                  <span>
                    May 10, 2026 | <a href="blog.html">Career Advice</a>
                  </span>
                  <h2>
                    <a href="blog.html">
                      How to Ace Tech Interviews &amp; Negotiate Top Salary Packages
                    </a>
                  </h2>
                  <a className="btn_one" href="blog.html">
                    Read Article <i className="ti-arrow-top-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* END COL */}
            <div
              className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset={0}
            >
              <div className="single_blog">
                <img
                  src="assets/img/blog/2.jpg"
                  className="img-fluid"
                  alt="blog"
                />
                <div className="content_box">
                  <span>
                    May 12, 2026 | <a href="blog.html">Resume Tips</a>
                  </span>
                  <h2>
                    <a href="blog.html">
                      Building an ATS-Friendly Portfolio for UX Designers
                    </a>
                  </h2>
                  <a className="btn_one" href="blog.html">
                    Read Article <i className="ti-arrow-top-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* END COL */}
            <div
              className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
              data-wow-offset={0}
            >
              <div className="single_blog">
                <img
                  src="assets/img/blog/3.jpg"
                  className="img-fluid"
                  alt="blog"
                />
                <div className="content_box">
                  <span>
                    May 15, 2026 | <a href="blog.html">Remote Work</a>
                  </span>
                  <h2>
                    <a href="blog.html">
                      The Remote Hiring Guide: Strategies for High-Growth Teams
                    </a>
                  </h2>
                  <a className="btn_one" href="blog.html">
                    Read Article <i className="ti-arrow-top-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* END COL */}
          </div>
          {/* END ROW */}
        </div>
        {/* END CONTAINER */}
      </section>
      {/* END CAREER BLOG */}
    </>
  )
}

export default Home