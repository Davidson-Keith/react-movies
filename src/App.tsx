import React, {useEffect, useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import UseEffectExample from "./UseEffectExample";

function App() {
  const [hide, setHide] = useState(false);

  return (
    <>
      <input type="checkbox" onChange={() => setHide(!hide)}/> Hide
      {hide ? <div>hidden</div> : <UseEffectExample/>}
    </>
  )
}

export default App;
