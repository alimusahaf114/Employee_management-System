import React from 'react'
import { useDispatch } from 'react-redux'

const Buttons = () => {
 const dispatchValue =   useDispatch()
 const handleIncreament = () =>{
    dispatchValue({type: "INCREAMENT"})
}
const handleDecreament = () =>{
     dispatchValue({type: "DECREAMENT"})
    
 }
  return (
    <div className='d-flex gap-4'>
      <button type="button" class="btn btn-primary " onClick={handleIncreament}>+1</button> 
    <button type="button" class="btn btn-success " onClick={handleDecreament}>-1</button> 
               
    </div>
  )
}

export default Buttons
