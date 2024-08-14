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
    { Type: 'email', Placeholder: 'Email', NameLabel: 'Email:' },
    { Type: 'text', Name: 'username', Placeholder: 'Username', NameLabel: 'Username:' },
    { Type: 'password', Placeholder: 'Password', NameLabel: 'Password:' },
    { Type: 'password', Name: 'verifyPassword', Placeholder: 'Verify Password', NameLabel: 'Verify Password:' },
    { Type: 'button', Name: 'singup', Value: 'Singup'}
  ]

  const Buttons = [
    { Text: 'Google', PreText:'Singup with: ' },
    { Text: 'Facebook', PreText:'Singup with: ' },
    { Text: 'Github', PreText:'Singup with: ' },
    { Text: 'Microsoft', PreText:'Singup with: ' },
  ]
  
  return(
    <div className={Styles.Singup}>
      <Form
        Title={'Singup'}
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
        Option={'Login'}
      />
      <Info H1='Welcome!' Info='Enim class senectus scelerisque laoreet tempor libero leo, lacus ultrices nullam 
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