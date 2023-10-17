import React, {useEffect, useState} from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [myDate, myDateUpdate] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      myDateUpdate(new Date());
    }, 1000);
    return () => clearInterval(intervalID);
  });

  return (
    <div>
      <h3>Example React</h3>
      <input/>
      <div>${myDate.toString()}</div>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload!!
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
