import Navbar from '../Components/Navbar/Navbar'
import Button1 from '../Components/Buttons/Button1'

export const metadata = {
  title: 'Projects'
}

const Projects = () => {

  const Buttons = [
    { Text: 'About', Route: 'About' },
    { Text: 'Projects', Route: 'Projects', StylesButton: 'Selected'  },
    { Text: 'Learn', Route: 'Learn' },
  ]

  return(

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

export default Projects
