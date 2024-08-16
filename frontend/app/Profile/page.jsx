'use client'

import Styles from './Profile.module.css'

import Navbar from '../Components/Navbar/Navbar'
import Button1 from '../Components/Buttons/Button1'

import UseUserStore from '../Stores/UseUserStore'

const Profile = () => {
  const User = UseUserStore((state) => state.User)

  const Buttons = [
    { Text: 'Sobre mi', Route: 'About' },
    { Text: 'Proyectos', Route: 'Projects' },
    { Text: 'Aprendizaje', Route: 'Learn' },
    { Text: `${User.Username}`, Route: 'Profile', StylesButton: 'Right', StylesButton: 'SelectedRight'  }
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
      <h1 className={Styles.Welcome}>Bienvendido {User.Username}</h1>
      <table className={Styles.Table}>
        <thead>
          <tr>
            <th colSpan={2}>Información del usuario</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Username: </th>
            <td>{User.Username}</td>
          </tr>
          <tr>
            <th>Name: </th>
            <td>{User.Name}</td>
          </tr>
          <tr>
            <th>Email: </th>
            <td>{User.Email}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Profile
