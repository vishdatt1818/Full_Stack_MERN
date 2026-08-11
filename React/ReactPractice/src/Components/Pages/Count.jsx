import React, { useState } from 'react'

const Count = () => {

  const [count, setCount] =useState(0)

  function plus(){
    setCount(count+1) 
  }
  function minus(){
    setCount(count-1) 
    if(count === 0){
      setCount(0)
    }
  }
  function reset(){
    setCount(0) 
  }
  return (
   <>
   <div className="box d-flex justify-content-center m-5">
   <div className="contaner ">

    <h1>Counter : {count}</h1>
    <button onClick={plus} className='btn btn-outline-success '>Plus +</button>
    <button onClick={minus} className='btn btn-outline-danger mx-5'>Minus -</button>
    <button onClick={reset} className='btn btn-outline-primary'>Reset</button>
   </div>
   </div>
   </>
  )
}

export default Count
