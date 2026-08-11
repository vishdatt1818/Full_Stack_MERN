import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <h1>Header</h1>
    <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', padding: 0 }}>
       <li ><Link to="/">Home</Link></li>
        <li ><Link to="/">About</Link></li>
        <li ><Link to="/counter">Counter</Link></li>
        <li ><Link to="/form">Form</Link></li>
        <li ><Link to="/formhook">FormHook</Link></li>
   
    </ul>
    </>
  )
}

export default Header
