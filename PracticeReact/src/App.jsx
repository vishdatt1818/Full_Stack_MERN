
import Navbar from './Navbar'
import Carosel from './Carosel'
import RandomPokemon from './RandomPokemon'
import "./App.css"
import Image from './Image'
import Slots from './Slots'
import PropertyList from './PropertyList'
import Clicker from './components/clicker'
import ColorBox from './components/Customer/ColorBox'

// const properties = [
//   { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
//   { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
//   { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
//   { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
//   { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
//   { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
// ];


function App() {

  return (
    <>
      <Navbar/>
      <Clicker buttonText="hello" message="hello" />


    <ColorBox/>
    
      {/* <Carosel/> */}

      {/* <div className='box'>
      <RandomPokemon/>
      <RandomPokemon/>
      <RandomPokemon/>
      </div>

      <Image/>
      <Slots a="d" b="d" c="d"/> */}

      {/* <div>
        <PropertyList proper={properties}/>
      </div>
     */}
    </>
  )
}

export default App
