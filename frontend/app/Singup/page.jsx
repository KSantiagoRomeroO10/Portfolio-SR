import Styles from './Singup.module.css'

import Form from '../Components/Forms/Form'
import Info from '../Components/Forms/Info'
import Inputs from '../Components/Forms/Inputs'

import Button2 from '../Components/Buttons/Button2'

export const metadata = {
  title: 'Projects'
}

const Singup = () => {

  const InputsProps = [
    { Type: 'email', Name: 'Email', Placeholder: 'Correo', NameLabel: 'Correo:' },
    { Type: 'text', Name: 'Username', Placeholder: 'Nombre de usuario', NameLabel: 'Nombre de usuario:' },
    { Type: 'password', Name: 'Password', Placeholder: 'Contraseña', NameLabel: 'Contraseña:' },
    { Type: 'password', Name: 'VerifyPassword', Placeholder: 'Verificar contraseña', NameLabel: 'Verificar contraseña:' },
    { Type: 'button', Name: 'Singup', Value: 'Registrarse'}
  ]

  const Option = {
    Value: 'Iniciar Sesión', Route: 'Login'
  }

  const Buttons = [
    { Text: 'Google', PreText:'' },
    { Text: 'Facebook', PreText:'' },
    { Text: 'Github', PreText:'' },
    { Text: 'Microsoft', PreText:'' },
  ]
  
  return(
    <div className={Styles.Singup}>
      <Form
        Title={'Registrarse'}
        Inputs={
          InputsProps.map((Input, index) => (
            <Inputs 
              Type={ Input.Type }
              Name={ Input.Name }
              Placeholder={ Input.Placeholder }
              Value={ Input.Value }
              NameLabel={Input.NameLabel}
              key={index}
            />
          ))
        }
        Option={Option}
      />
      <Info H1='¡Bienvenido!' Info='Enim class senectus scelerisque laoreet tempor libero leo, lacus ultrices nullam 
      fusce sollicitudin cras et felis, inceptos ligula quam vitae in aliquet. Congue nostra torquent blandit habitant 
      lobortis litora, curabitur pretium turpis natoque praesent leo, habitasse ut nec at eros. Justo fusce lacinia montes 
      donec nunc phasellus laoreet, sed cubilia erat magnis vehicula maecenas ad euismod, suscipit malesuada dictum dis 
      duis feugiat.' 
      Buttons={ 
        Buttons.map((Button, Index) => (
          <Button2 
            Text={Button.Text} 
            PreText={Button.PreText} 
            key={Index}
          />
        ))
      }/>
    </div>
  )

}

export default Singup