import React from 'react'
// import { Button } from './Button'
import {useSelector} from 'react-redux'
export const Message = () => {
  const state = useSelector(state=>state.counterSlice)
  console.log('state is ' , state)
  return (
    <div>
        <h2>Counter is {state.counter} </h2>
        </div>
  )
}
