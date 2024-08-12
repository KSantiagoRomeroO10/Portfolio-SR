'use client'

import './Inputs.css'

import React, { useState } from 'react';

const Inputs = ({ type, name, placeholder, value, nameLabel }) => {
  const [valueInput, setValueInput] = useState(value || '');

  const handleChange = (event) => {
    setValueInput(event.target.value);
  };

  return (
    <>
      <label htmlFor={name ?? type}>
        <p>{nameLabel ?? ''}</p>
      </label>
      <input
        type={type}
        name={name ?? type}
        placeholder={placeholder ?? ''}
        id={name ?? type}
        value={type === 'button' ? value : valueInput}
        onChange={handleChange}
      />
    </>
  );
};

export default Inputs;
