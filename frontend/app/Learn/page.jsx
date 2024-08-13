import Navbar from '../Components/Navbar/Navbar';
import Button1 from '../Components/Buttons/Button1';

export const metadata = {
  title: 'Learn'
}

const Learn = () => {

  const Buttons = [
    { Text: 'About', Route: 'About' },
    { Text: 'Projects', Route: 'Projects' },
    { Text: 'Learn', Route: 'Learn', StylesButton: 'Selected' },
    { Text: 'Login', Route: 'Login', StylesButton: 'Right' },
  ]

  return (

    <Navbar buttons={
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
