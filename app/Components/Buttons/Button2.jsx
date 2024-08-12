import './Button2.css';


const Button2 = ({ text, preText }) => {
  return (
    <div className="conection">
      <br />
      <p className="preText">{preText}</p>
      <p className="button2">{text}</p>
    </div>
  );
};

export default Button2;
