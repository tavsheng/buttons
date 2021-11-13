import React, {useState} from 'react';
import './App.css';



function App() {
  const [buttonStatus, setButtonStatus] = useState(false);
  const [buttonNumber, setButtonNumber] = useState(1);

  const button2Click = () => {setButtonNumber(2)}
  const button3Click = () => {setButtonNumber(3)}
  const buttonF1Click = () => {setButtonStatus(value => !value)}
  const buttonF2Click = () => {setButtonNumber(1)}

  return (
    <div>
      <button onClick={()=>{ buttonF1Click(); buttonF2Click() }} >{buttonNumber}</button>
     {buttonStatus
     ? <div><button onClick = {buttonF2Click}>1</button>
     <button onClick = {button2Click}>2</button>
     <button onClick = {button3Click}>3</button>
     </div>
      :null
      
  }
    </div>
  );
}

export default App;
