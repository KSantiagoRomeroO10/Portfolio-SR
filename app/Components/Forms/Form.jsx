import './Form.css';

const Form = ({ title, inputs }) => {
  return (
    <form className="form">
      <h1>{title}</h1>
      <br />
      <hr />
      <br />
      {inputs}
    </form>
  );
};

export default Form;
