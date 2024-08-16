'use client'

import './Inputs.css'

import { useState, useEffect } from 'react'

import Validate from './Validations/Validate'
import Input from './Validations/Input'

const Inputs = ({ Type, Name, Placeholder, Value, NameLabel, Validation = true }) => {
  const [ValueInput, SetValueInput] = useState(Value || '')
  const [Result, SetResult] = useState(true)

  const [ListenerChange, SetListenerChange] = useState(false)

  const handleChange = (event) => {
    SetValueInput(event.target.value)
    SetListenerChange(true)
  }

  const { Error, Rules } = Input(Name)

  useEffect(() => { 
    if(ListenerChange && Validation){
      SetResult(Validate(ValueInput, Rules))
    }
  }, [ValueInput, ListenerChange])

  return (
    <>
      <label htmlFor={Name ?? Type}>
        <p className={Result ? '' : 'Red'}>{Result ? NameLabel : Error}</p>
      </label>
      <input
        type={Type}
        name={Name ?? Type}
        placeholder={Placeholder ?? ''}
        id={Name ?? Type}
        value={Type === 'button' ? Value : ValueInput}
        onChange={handleChange}
      />
    </>
  )
}

export default Inputs
