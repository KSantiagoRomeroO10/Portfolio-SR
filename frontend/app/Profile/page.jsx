'use client'

import Navbar from '../Components/Navbar/Navbar'
import Button1 from '../Components/Buttons/Button1'

import UseUserStore from '../Stores/UseUserStore'

const Profile = () => {
  const User = UseUserStore((state) => state.User)

  const Buttons = [
    { Text: 'About', Route: 'About' },
    { Text: 'Projects', Route: 'Projects' },
    { Text: 'Learn', Route: 'Learn', StylesButton: 'Selected' },
    { Text: `${User.Username}`, Route: 'Profile', StylesButton: 'Right' }
  ]

  return(
    <>
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
      <h1>Datos del usuario</h1>
      <p>Id: {User.Id}</p>
      <p>Username: {User.Username}</p>
      <p>Name: {User.Name}</p>
      <p>Email: {User.Email}</p>
    </>
  )
}

export default Profile
