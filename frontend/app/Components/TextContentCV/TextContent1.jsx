import './TextContent1.css'

const TextContent1 = ({ InfoBasic }) => {
  return (
    <aside className='TextContent1 adaptation'>
      <div className='imageMain'></div>

      <br />
      <hr className='bordeInferior' />
      <br />

      <p>{InfoBasic.name}</p>
      <p>{InfoBasic.developer}</p>
      <p>{InfoBasic.residencia}</p>

      <br />
      <h2>Contact me</h2>
      <br />
      
      <p>{InfoBasic.correo}</p>
      <p>{InfoBasic.telefono}</p>

      <br />
      
      <p>Linkedin</p>
      <p>GitHub</p>

    </aside>
  )
}

export default TextContent1
