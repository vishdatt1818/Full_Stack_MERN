import React, { useState } from 'react'

const ShopingList = () => {
    const [item, setItem] = useState([{id:1, product:"apple", quantity:8}])
  return (
    <div>
      <h1>Shoping List</h1>

        <ul>
            {item.map(i => <li>{i.product} - {i.quantity} </li>)}
        </ul>
    </div>
  )
}

export default ShopingList
