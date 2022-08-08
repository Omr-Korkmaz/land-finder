import './confirm.css';

const  Confirm = ({ text, open, handleConfirm, id }) => {
    return (
      <>
        <div className={open ? 'confirm show' : 'confirm'}>
          <div className="confirm-content">
            <h4>CONFIRM</h4>
            <div>
              <h2>{text}</h2>
              <p>This action is final...</p>
            </div>
          </div>
          <div className="confirm-btns">
            <button onClick={() => handleConfirm(true, id)}>YES</button>
            <button onClick={() => handleConfirm(false, id)}>NO</button>
          </div>
        </div>
        <div 
          className="overlay" 
          onClick={() => handleConfirm(false, id)} 
        />
      </>
    )
  }

  export default Confirm;
  
