import Navbar from '../Components/Navbar/Navbar';
import Button1 from '../Components/Buttons/Button1';

export const metadata = {
  title: 'Learn'
}

const Learn = () => {

  const Buttons = [
    { text: 'About', route: 'About' },
    { text: 'Projects', route: 'Projects' },
    { text: 'Learn', route: 'Learn', styles: 'selected' },
    { text: 'Login', route: 'Login', styles: 'right' },
    { text: 'Singup', route: 'Singup', styles: 'left' }
  ]

  return (

    <Navbar buttons={
      Buttons.map((button, index) => (
        <Button1 
          text={button.text} 
          route={button.route} 
          styles={button.styles} 
          key={index}
        />
      ))
    }/>

  )

} 

export default Learn
