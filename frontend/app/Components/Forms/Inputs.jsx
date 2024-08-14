'use client'

import './Inputs.css'

import { useState } from 'react'

const Inputs = ({ Type, Name, Placeholder, Value, NameLabel }) => {
  const [ValueInput, setValueInput] = useState(Value || '')

  const handleChange = (event) => {
    setValueInput(event.target.value)
  }

  return (
    <>
      <label htmlFor={Name ?? Type}>
        <p>{NameLabel ?? ''}</p>
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
