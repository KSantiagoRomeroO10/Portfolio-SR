import Styles from './Login.module.css'

import Form from '../Components/Forms/Form'
import Info from '../Components/Forms/Info'
import Inputs from '../Components/Forms/Inputs'

import Button2 from '../Components/Buttons/Button2'

export const metadata = {
  title: 'Login'
}

const Login = () => {

  const InputsProps = [
    { Type: 'text', Name: 'Username', Placeholder: 'Nombre de usuario', NameLabel: 'Nombre de usuario:'  },
    { Type: 'password', Name: 'Password', Placeholder: 'Contraseña', NameLabel: 'Contraseña:'  },
    { Type: 'button', Value: 'Iniciar Sesión'}
  ]

  const Option = {
    Value: 'Registrarse', Route: 'Singup'
  }

  const Buttons = [
    { Text: 'Google', PreText:'' },
    { Text: 'Facebook', PreText:'' },
    { Text: 'Github', PreText:'' },
    { Text: 'Microsoft', PreText:'' },
  ]
  
  return(
    <div className={Styles.Login}>
      <Form
        Title={'Iniciar sesión'}
        Inputs={
          InputsProps.map((Input, Index) => (
            <Inputs 
              Type={ Input.Type }
              Name={ Input.Name }
              Placeholder={ Input.Placeholder }
              Value={ Input.Value }
              NameLabel={Input.NameLabel}
              Validation={false}
              key={Index}
            />
          ))
        }
        Option={Option}
      />
      <Info H1='¡Funciones nuevas!' Info='Enim class senectus scelerisque laoreet tempor libero leo, lacus ultrices nullam 
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

export default Login
