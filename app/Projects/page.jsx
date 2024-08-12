import Navbar from '../Components/Navbar/Navbar'
import Button1 from '../Components/Buttons/Button1'

export const metadata = {
  title: 'Projects'
}

const Projects = () => {

  const Buttons = [
    { text: 'About', route: 'About' },
    { text: 'Projects', route: 'Projects', styles: 'selected'  },
    { text: 'Learn', route: 'Learn' },
  ]

  return(

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

export default Projects
