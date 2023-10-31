import Child from "./Child";
import {useContext} from "react";
import ValueContext from "./ValueContext";

export default function Parent() {
  const value = useContext(ValueContext)
  return (
    <>
      <h3>Parent component</h3>
      <h4>
        {value ? 'The value is true' : 'The value is false'}
      </h4>
      <Child/>
    </>
  )
}
