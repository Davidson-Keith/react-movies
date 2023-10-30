import React, {useEffect, useState} from "react";

export default function ClockExample() {
  const [myDate, myDateUpdate] = useState(new Date());

  useEffect(() => {
    // Equivalent to componentDidMount() - create the interval
    const intervalId = setInterval(() => {
      myDateUpdate(new Date());
    }, 1000);
    // Equivalent to componentWillUnmount() - destroy the interval
    return () => clearInterval(intervalId);
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
  );}
