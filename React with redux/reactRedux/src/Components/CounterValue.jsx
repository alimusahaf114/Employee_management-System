import React from 'react'
import { useSelector } from 'react-redux'

const CounterValue = () => {
  const counterState = useSelector(state => state.counter)
  return (
    <div>
      <p className="lead mb-4">Current Value is : {counterState}</p>
    </div>
  )
}

export default CounterValue
