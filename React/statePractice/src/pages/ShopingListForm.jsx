import React, { useState } from 'react'

const ShopingListForm = () => {

    const [formData, setFormData] = useState({product:"", quantity:0})

    const handleChange = (e) =>{
        setFormData((curData) =>{
            return {
                ...curData,[e.target.name]: e.target.value,
            }
        })
    }

  return (
    <form action="">
        <h1>Product is: {formData.product} and Quantity is {formData.quantity}</h1>
        <label htmlFor="product">Product Name</label>
        <input type="text" placeholder='Product Name' name='product' id='product'
                    onChange={handleChange} value={formData.product} />

         <label htmlFor="quantity">Quantity</label>
        <input type="number" placeholder='Quantity' name='quantity' id='quantity'
                    onChange={handleChange} value={formData.quantity} />
                    <button>Add Item</button>
    </form>
  )
}

export default ShopingListForm
