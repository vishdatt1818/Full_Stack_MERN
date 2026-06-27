import "./RandomPokemon.css";

export default function RandomPokemon() {
  const pokeNum = Math.floor(Math.random() * 151);
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeNum}.png`;


  return (
    <>
      {/* <div className="pokemon">
        <h1>Pokemon #{pokeNum}</h1>
        <img src={url} alt="" />
      </div> */}
      {/* <div className="parent"> */}

      <div className="card">
        <img src={url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-text">
           Refresh for new Img of Pokemon # {pokeNum}
          </h3>
        </div>
      </div>

      {/* <div className="card" style={{ width: "18rem" }}>
        <img src={url} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
           Refresh for new Img of Pokemon # {pokeNum}
          </p>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img src={url} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            Refresh for new Img of Pokemon # {pokeNum}
          </p>
        </div>
      </div> */}


      {/* </div> */}
    </>
  );
}
