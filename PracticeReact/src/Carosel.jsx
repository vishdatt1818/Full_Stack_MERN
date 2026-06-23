
import"./Carosel.css"

export default function  Carosel(){
    return(
        <>
 <div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="carousel-img" src="https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3fHxsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img className="carousel-img" src="https://images.unsplash.com/photo-1627213742863-46b836499634?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img className="carousel-img"  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFuZHNjYXBlfGVufDB8fDB8fHww" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleFade"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleFade"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>


        </>
    )
}