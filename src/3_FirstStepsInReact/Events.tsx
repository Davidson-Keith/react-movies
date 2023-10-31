import React, {useState} from "react";

export default function Events() {
  const [canSee, setCanSee ] = useState(false);
  const [textVal, setTextVal] = useState('');

  const handleCheckBoxChanged = () => {
    setCanSee(!canSee);
  };

  const handleKeyUp = ({e}: { e: React.KeyboardEvent<HTMLInputElement> }) => {
    setTextVal(e.currentTarget.value);
  };

  return (
    <>
      <h1>Events Example</h1>
      <div>
        <input type="checkbox" onChange={handleCheckBoxChanged}/>
      </div>
      <div>
        {canSee ? <div>Checked: {textVal}</div> : <div>Not checked</div>}
      </div>
      <div>
        <button onClick={() => {
          alert('clicked')
        }}>Click Me
        </button>
      </div>
      <input type="text" onKeyUp={(e) => handleKeyUp({e: e})}/>
    </>
  )
}
