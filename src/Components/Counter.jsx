import React from 'react'
import { Button } from './Button'
import { Message } from './Message'

export const Counter = () => {
  return (
    <div>
      <Button name={'+'}/>
      <Button name={'-'}/>
      <Message/>
    </div>
  )
}
