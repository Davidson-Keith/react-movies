import {useEffect, useState} from "react";

export default function UseEffectExample() {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    // Executed immediately.
    console.log('Component loaded');
    return () => {
      console.log('the component will be destroyed')
    }
  }, []); // The "deps" array is the list of dependencies that, if any of them change, then only then, will
  // the effect run. An empty array means it will only run when the entire component loads and is destroyed.

  return (
    <>
      <h1>Use Effect Examples</h1>
      <div>
        <button onClick={() => setClicks(clicks + 1)}>
          You have clicked {clicks} times
        </button>
      </div>
    </>
  )
}
