import Styles from './TextContent1.module.css'

const TextContent1 = ({ InfoBasic }) => {
  return (
    <aside className={`${Styles.TextContent1} ${Styles.Adaptation}`}>
      <div className={Styles.ImageMain}></div>

      <br />
      <hr className={Styles.BorderBottom} />
      <br />

      <p>{InfoBasic.Name}</p>
      <p>{InfoBasic.Developer}</p>
      <p>{InfoBasic.Residencia}</p>

      <br />
      <h2>Contact me</h2>
      <br />
      
      <p>{InfoBasic.Correo}</p>
      <p>{InfoBasic.Telefono}</p>

      <br />
      
      <p>Linkedin</p>
      <p>GitHub</p>

    </aside>
  )
}

export default TextContent1
