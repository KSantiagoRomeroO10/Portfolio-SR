'use client'

import Navbar from '../Components/Navbar/Navbar'
import Button1 from '../Components/Buttons/Button1'

import UseUserStore from '../Stores/UseUserStore'

const Learn = () => {

  const User = UseUserStore((state) => state.User)

  const Buttons = [
    { Text: 'Sobre mi', Route: 'About' },
    { Text: 'Proyectos', Route: 'Projects' },
    { Text: 'Aprendizaje', Route: 'Learn', StylesButton: 'Selected'},
  ]
  
  if(!Object.values(User).every(Value => Value)) Buttons.push({ Text: 'Iniciar Sesión', Route: 'Login', StylesButton: 'Right' })
  else Buttons.push({ Text: `${User.Username}`, Route: 'Profile', StylesButton: 'Right' })

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
