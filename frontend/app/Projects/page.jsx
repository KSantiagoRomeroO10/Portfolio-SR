import Navbar from '../Components/Navbar/Navbar'
import Button1 from '../Components/Buttons/Button1'
import ListProyects from './ListProyects/ListProyects'

export const metadata = {
  title: 'Projects'
}

const Projects = () => {

  const Buttons = [
    { Text: 'Sobre mi', Route: 'About' },
    { Text: 'Proyectos', Route: 'Projects', StylesButton: 'Selected'  }
  ]

  const Projects = [
    {
      Title: 'Proyecto 1',
      Description: 'Descripción del proyecto 1.',
      Technologies: ['JavaScript', 'React', 'Node.js'],
      URLGit: 'www.santiago.dev',
      URLDeployment: 'www.santiago.dev'
    },
    {
      Title: 'Proyecto 2',
      Description: 'Descripción del proyecto 2.',
      Technologies: ['C#', '.NET', 'SQL Server'],
      URLGit: 'www.santiago.dev',
      URLDeployment: 'www.santiago.dev'
    },
    {
      Title: 'Proyecto 3',
      Description: 'Descripción del proyecto 3.',
      Technologies: ['Python', 'Django', 'PostgreSQL'],
      URLGit: 'www.santiago.dev',
      URLDeployment: 'www.santiago.dev'
    }
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
      {
        Projects.map((Project, Key) => (
          <ListProyects key={Key} NameProyect={Project.Title} Description={Project.Description} Technologies={Project.Technologies} URLGit={Project.URLGit} URLDeployment={Project.URLDeployment} />
        ))
      }      
    </>
  )
}

export default Projects
