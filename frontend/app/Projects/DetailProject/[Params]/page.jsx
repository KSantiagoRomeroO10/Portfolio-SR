'use client'
import Styles from './DetailProject.module.css'
import { useSearchParams, useRouter } from 'next/navigation'

const DetailProject = () =>{
  const Params = useSearchParams()
  const NameProyect = Params.get('NameProyect')
  const Description = Params.get('Description')
  const TechnologiesParam = Params.get('Technologies')
  const URLGit = Params.get('URLGit')
  const URLDeployment = Params.get('URLDeployment')

  const Technologies = TechnologiesParam.split(',')

  const Router = useRouter()

  return(
    <div>
      <div className={Styles.Back} onClick={() => Router.push('/Projects')}><p>{'<'}</p></div>
      <div className={Styles.Container}>
        <h2>{ NameProyect }</h2>
        <br />
        <p>{ Description }</p>
        <br />
        <span className={ Styles.Technologies }>
          { 
            Technologies.map((Technologie, Key)=>(
              <p key={Key}>{ Technologie }</p>
            )) 
          }
        </span>
        <br />
        <p>{ URLGit }</p>
        <br />
        <p>{ URLDeployment }</p>
      </div>
    </div>
  )
}

export default DetailProject
