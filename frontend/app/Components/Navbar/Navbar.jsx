import Styles from './Navbar.module.css'

const Navbar = ({ buttons }) => {
  return (
    <nav className={Styles.Navbar}>
      {buttons}
    </nav>
  )
}

export default Navbar

