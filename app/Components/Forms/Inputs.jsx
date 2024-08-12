'use client'

import './Inputs.css'

import { useState } from 'react';

const Inputs = ({ Type, Name, placeholder, value, NameLabel }) => {
  const [valueInput, setValueInput] = useState(value || '');

  const handleChange = (event) => {
    setValueInput(event.target.value);
  };

  return (
    <>
      <label htmlFor={Name ?? Type}>
        <p>{NameLabel ?? ''}</p>
      </label>
      <input
        type={Type}
        name={Name ?? Type}
        placeholder={placeholder ?? ''}
        id={Name ?? Type}
        value={Type === 'button' ? value : valueInput}
        onChange={handleChange}
      />
    </>
  );
};

export default Inputs;
