import Styles from './Navbar.module.css'

const Navbar = ({ Buttons }) => {
  return (
    <nav className={Styles.Navbar}>
      {Buttons}
    </nav>
  )
}

export default Navbar

