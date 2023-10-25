import {useState} from "react";
import Simple from "./Simple";
import SelectNumber from "./SelectNumber";

export default function ConditionalsComponents() {
  const [rating, setRating] = useState(5);

  const displayResult = () => {
    if (rating === 1) {
      return <span>Nooo!</span>
    } else if (rating === 2) {
      return (
        <>
          <span>What, why?</span>
          <input type="text"/>
        </>
      )
    } else if (rating === 3) {
      return (
        <Simple/>
      )
    } else if (rating === 4) {
      return <span>I'll try harder next time</span>
    } else if (rating === 5) {
      return <span>Yesss!!!  </span>
    }
  }

  return (
    <>
      <h1>Conditionals If Example</h1>
      <div>Rate this site</div>
      <SelectNumber currentValue={rating} onSelected={setRating}/>
      <div>Your rating: {rating}</div>
      <div>{displayResult()}</div>
    </>
  )
}