

export default function About(){
    return(
        <>
  {/* Page Header Start */}
  <div className="page-header">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>About Us</h2>
        </div>
        <div className="col-12">
          <a href="">Home</a>
          <a href="">About Us</a>
        </div>
      </div>
    </div>
  </div>
  {/* Page Header End */}
  {/* About Start */}
  <div className="about">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5 col-md-6">
          <div className="about-img">
            <img src="img/about.jpg" alt="Image" />
          </div>
        </div>
        <div className="col-lg-7 col-md-6">
          <div className="section-header text-left">
            <p>Learn About Us</p>
            <h2>25 Years Experience</h2>
          </div>
          <div className="about-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec pretium mi. Curabitur facilisis ornare velit non vulputate.
              Aliquam metus tortor, auctor id gravida condimentum, viverra quis
              sem.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec pretium mi. Curabitur facilisis ornare velit non vulputate.
              Aliquam metus tortor, auctor id gravida condimentum, viverra quis
              sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean
              consectetur convallis porttitor. Aliquam interdum at lacus non
              blandit.
            </p>
            <a className="btn" href="">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Team Start */}
  <div className="team">
    <div className="container">
      <div className="section-header text-center">
        <p>Our Barber Team</p>
        <h2>Meet Our Hair Cut Expert Barber</h2>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="team-item">
            <div className="team-img">
              <img src="img/team-1.jpg" alt="Team Image" />
            </div>
            <div className="team-text">
              <h2>Adam Phillips</h2>
              <p>Master Barber</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="team-item">
            <div className="team-img">
              <img src="img/team-2.jpg" alt="Team Image" />
            </div>
            <div className="team-text">
              <h2>Dylan Adams</h2>
              <p>Hair Expert</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="team-item">
            <div className="team-img">
              <img src="img/team-3.jpg" alt="Team Image" />
            </div>
            <div className="team-text">
              <h2>Gloria Edwards</h2>
              <p>Beard Expert</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="team-item">
            <div className="team-img">
              <img src="img/team-4.jpg" alt="Team Image" />
            </div>
            <div className="team-text">
              <h2>Josh Dunn</h2>
              <p>Color Expert</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
</>

    )
}