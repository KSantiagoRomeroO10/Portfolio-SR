import React from 'react'

import Navbar from '../Components/Navbar/Navbar'
import Button1 from '../Components/Buttons/Button1'
import Index from '../Components/TextContentCV/Index'

import Sections from './Sections'
import InfoBasic from './InfoBasic'

export const metadata = {
  title: 'About me',
}

const CV = () => {
  const Buttons = [
    { Text: 'Sobre mi', Route: 'About', StylesButton: 'Selected' },
    { Text: 'Proyectos', Route: 'Projects' }
  ]

  return (
    <>
      <Navbar Buttons={Buttons.map((button, index) => (
        <Button1 key={index} {...button} />
      ))} />
      <Index Sections={Sections} InfoBasic={InfoBasic} />
    </>
  )
}

export default CV
