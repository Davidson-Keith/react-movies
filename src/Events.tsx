import React from "react";

export default function Events() {
  let canSEE = true;

  const handleCheckBoxChanged = () => {
    canSEE = !canSEE; // doesn't work. Need to use state.
  };

  const handleKeyUp = ({e}: { e: React.KeyboardEvent<HTMLInputElement> }) => {
    // console.log(`The following key was pressed: ${e.key}`); // or e.currentTarget.value
    console.log(e.currentTarget.value); // the entire text input content
    // console.log(e.key); // just the single key is output
  };

  return (
    <>
      <h1>Events Example</h1>
      <div>
        <input type="checkbox" onChange={handleCheckBoxChanged}/>
      </div>
      <div>
        {canSEE ? <div>You are seeing the secret</div> : <div>You are not allowed to see the secret</div>}
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
