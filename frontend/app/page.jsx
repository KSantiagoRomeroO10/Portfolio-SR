'use client'

import './page.css'

import { useRouter } from 'next/navigation'

const Home = () => {
  
  const router = useRouter()

  return (
    <main className='container'>
      
      <section className="presentation">
        <div className='hs'>
          <h1 className='h1' onClick={() => router.push('/About')}>Hola mundo!</h1>
          <h1 className='h2' onClick={() => router.push('/About')}>Soy</h1>
          <h1 className='h3' onClick={() => router.push('/About')}>Santiago R.</h1>
        </div>
      </section>

      <section className='description'>
        <p>
          Soy desarrollador FullStack. Mi pasión por la tecnología se intensificó cuando descubrí 
          la programación. Me encantaba el reto de crear algo nuevo a partir de cero. Me sentía 
          como un mago, capaz de transformar mis ideas en realidad.
          <br />
          <br />
          Como desarrollador FullStack, tengo la oportunidad de trabajar en ambos lados del 
          desarrollo web: el frontend y el backend. Esto me permite tener una visión completa 
          del proceso de desarrollo y crear aplicaciones que sean tanto funcionales como atractivas.
        </p>
      </section>

    </main>
  )

}
export default Home