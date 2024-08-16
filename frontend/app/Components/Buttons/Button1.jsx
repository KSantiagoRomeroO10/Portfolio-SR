'use client'

import Styles from './Button1.module.css'
import { useRouter } from 'next/navigation'

const Button1 = ({ Text, Route, StylesButton = null, StylesButton2 = null }) => {
  const Router = useRouter()

  return (
    <p
    className={`${Styles.Button1} ${ StylesButton === 'Right' ? Styles.Button1Right : StylesButton === 'Left' ? Styles.Button1Left : StylesButton === 'Selected' ? Styles.Button1Selected : StylesButton === 'SelectedRight' ? Styles.SelectedRight : ''}`}
      onClick={() => Router.push(Route)}
    >
      {Text}
    </p>
  )
}

export default Button1
