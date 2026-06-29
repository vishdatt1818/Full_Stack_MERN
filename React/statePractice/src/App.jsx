

import './App.css'
import ShopingList from './pages/ShopingList'
import ShopingListForm from './pages/ShopingListForm'
import State from './pages/State'

const colors = ["#000000", "#FFA500", "#FF0000", "#0000FF", "#00FF00", "#FFFF00", "#800080", "#FFA500", "#D05340", "#A52A2A"]


function App() {
 

  return (
    <>
    <div className='appParent'>
    <State colors={colors}/>
    <ShopingListForm/>
    <ShopingList/>
    </div>
    </>
  )
}

export default App
