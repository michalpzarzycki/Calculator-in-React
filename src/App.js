import React, { useState } from 'react';
import CalculatorKeys from './components/CalculatorKeys';
import Result from './components/Result';
import './App.css';

function App() {

const [ result, setResult ] = useState(""); 

const onClick = button => {

  if(button === "="){
      calculate()
  }

  else if(button === "C"){
      reset()
  }
  else if(button === "CE"){
      backspace()
  }

  else {
     
      setResult(result+button)
  }
};

const calculate = () => {
  try {
   
      setResult( (eval(result) || "" ) + "")
  } catch (e) {
setResult("error")
  }
};

const reset = () => {
  setResult("")
};

const backspace = () => {
  setResult(result.slice(0, -1));
};



  return (
   
        <div className="mainDiv">
          <h1>CALCULATOR</h1>
          <Result result={result}/>
          <CalculatorKeys onClick={onClick}/>
        </div>
   
  );
}

export default App;
