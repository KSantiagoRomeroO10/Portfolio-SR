'use client'

import Navbar from '../Components/Navbar/Navbar'
import Button1 from '../Components/Buttons/Button1'

import UseUserStore from '../Stores/UseUserStore'

const Learn = () => {

  const User = UseUserStore((state) => state.User)

  const Buttons = [
    { Text: 'About', Route: 'About' },
    { Text: 'Projects', Route: 'Projects' },
    { Text: 'Learn', Route: 'Learn', StylesButton: 'Selected' },
  ]

  if(!User || Object.values(User).every(Value => !Value)){
    Buttons.push({ Text: 'Login', Route: 'Login', StylesButton: 'Right' })
  }

  return (
    <Navbar Buttons={
      Buttons.map((button, index) => (
        <Button1 
          Text={button.Text} 
          Route={button.Route} 
          StylesButton={button.StylesButton} 
          key={index}
        />
      ))
    }/>
  )

} 

export default Learn
