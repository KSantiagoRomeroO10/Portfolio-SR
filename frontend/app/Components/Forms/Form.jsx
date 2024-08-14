'use client'
import Styles from './Form.module.css'

import { useRouter } from 'next/navigation'

const Form = ({ Title, Inputs, Option }) => {
  const router = useRouter()
  return (
    <form className={Styles.Form}>
      <h1 className={Styles.H1}>{Title}</h1>
      <br />
      <hr />
      <br />
      {Inputs}
      <br />
      {Option ? <p className={Styles.Option} onClick={() => router.push(`/${Option}`)}>{Option}</p> : ''}
      
    </form>
  )
}

export default Form
