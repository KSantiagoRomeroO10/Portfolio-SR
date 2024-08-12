'use client'

import './Button1.css'
import { useRouter } from 'next/navigation'

const Button1 = ({ text, route, styles = null }) => {
  const router = useRouter()

  return (
    <p
      className={`button1 ${styles === 'right' ? 'button1Right' : styles === 'left' ? 'button1Left' : styles === 'selected' ? 'button1Selected' : ''}`}
      onClick={() => router.push(route)}
    >
      {text}
    </p>
  )
}

export default Button1
