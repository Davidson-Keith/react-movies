import React, {useContext, useEffect, useState} from 'react';

import GrandParent from "./GrandParent";
import ValueContext from "./ValueContext";

function UseContextApp() {
  const [hide, setHide] = useState(false);
  const value = useContext(ValueContext)

  return (
    <>
      <input type="checkbox" onChange={() => setHide(!hide)}/> Hide
      {hide ? <div>hidden</div> : <div>not hidden</div>}

      <div>The value is {value.toString()} - this won't update, as it is not within the ValueContext.Provider</div>

      <ValueContext.Provider value={hide}>
        <GrandParent/>
      </ValueContext.Provider>
    </>
  )
}

export default UseContextApp;
