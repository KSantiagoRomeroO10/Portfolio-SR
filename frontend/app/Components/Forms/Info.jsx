import Styles from './Info.module.css'

const Info = ({ H1, Info, Buttons }) => {
  return (
    <div className={Styles.Information}>
      <div className={Styles.Info}>
        <h1>{H1}</h1>
        <p>{Info}</p>
      </div>
      {Buttons}
    </div>
  )
}

export default Info
