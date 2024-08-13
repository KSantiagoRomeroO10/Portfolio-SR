import './Info.css';

const Info = ({ h1, info, buttons }) => {
  return (
    <div className='information'>
      <div className='info'>
        <h1>{h1}</h1>
        <p>{info}</p>
      </div>
      {buttons}
    </div>
  );
};

export default Info;
