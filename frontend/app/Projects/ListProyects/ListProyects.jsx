'use client'
import Styles from './ListProyects.module.css'
import { useRouter } from 'next/navigation'

const ListProyects = ({ NameProyect, Description, Technologies, URLGit, URLDeployment }) => {
  const Router = useRouter()

  return(
    <div className={ Styles.Item } onClick={
        () => Router.push(`/Projects/DetailProject/params?NameProyect=${NameProyect}&Description=${Description}&Technologies=${Technologies}&URLGit=${URLGit}&URLDeployment=${URLDeployment}`)
      }>
      <h2>{ NameProyect }</h2>
      <span className={ Styles.Technologies }>
        { 
          Technologies.map((Technologie, Key)=>(
            <p key={Key}>{ Technologie }</p>
          )) 
        }
      </span>
    </div>
  )
}

export default ListProyects
