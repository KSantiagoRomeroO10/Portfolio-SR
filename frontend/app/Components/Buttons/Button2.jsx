import Styles from './Button2.module.css';

const Button2 = ({ Text, PreText }) => {
  return (
    <div className={Styles.Conection}>
      <br />
      <p className={Styles.PreText}>{PreText}</p>
      <p className={Styles.Button2}>{Text}</p>
    </div>
  );
};

export default Button2;
