import './singup.css'

import Form from '../Components/Forms/Form'
import Info from '../Components/Forms/Info'
import Inputs from '../Components/Forms/Inputs'

import Button2 from '../Components/Buttons/Button2'

export const metadata = {
  title: 'Projects'
}

const Singup = () => {

  const InputsProps = [
    { type: 'email', placeholder: 'Email', nameLabel: 'Email:' },
    { type: 'text', name: 'username', placeholder: 'Username', nameLabel: 'Username:' },
    { type: 'password', placeholder: 'Password', nameLabel: 'Password:' },
    { type: 'password', name: 'verifyPassword', placeholder: 'Verify Password', nameLabel: 'Verify Password:' },
    { type: 'button', name: 'singup', value: 'Singup'}
  ]

  const Buttons = [
    { text: 'Google', preText:'Singup with: ' },
    { text: 'Facebook', preText:'Singup with: ' },
    { text: 'Github', preText:'Singup with: ' },
    { text: 'Microsoft', preText:'Singup with: ' },
  ]
  
  return(
    <div className='Singup'>
      <Form
        title={'Singup'}
        inputs={
        InputsProps.map((input, index) => (
          <Inputs 
            type={ input.type }
            name={ input.name }
            placeholder={ input.placeholder }
            value={ input.value }
            nameLabel={input.nameLabel}
            key={index}
          />
        ))
      }
      />
      <Info h1='Welcome!' info='Enim class senectus scelerisque laoreet tempor libero leo, lacus ultrices nullam 
      fusce sollicitudin cras et felis, inceptos ligula quam vitae in aliquet. Congue nostra torquent blandit habitant 
      lobortis litora, curabitur pretium turpis natoque praesent leo, habitasse ut nec at eros. Justo fusce lacinia montes 
      donec nunc phasellus laoreet, sed cubilia erat magnis vehicula maecenas ad euismod, suscipit malesuada dictum dis 
      duis feugiat.' 
      buttons={ 
        Buttons.map((button, index) => (
          <Button2 
            text={button.text} 
            preText={button.preText} 
            key={index}
          />
        ))
      }/>
    </div>
  )

}

export default Singup