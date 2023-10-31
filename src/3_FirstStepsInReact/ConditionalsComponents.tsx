import React, {useState} from "react";
import Simple from "./Simple";
import SelectNumber from "./SelectNumber";
import ProjectContent from "./ProjectContent";

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
      <SelectNumber currentValue={rating}
                    onSelected={setRating}
                    selectOptionDisplayContent={(value) => `Select ${value}`}/>
      <div>Your rating: {rating}</div>
      <div>{displayResult()}</div>
      <div>
        <ProjectContent otherPart={<><span>This is the other part</span></>}>
          <>
            <button onClick={() => console.log('I was clicked')}>This is a button as a parameter</button>
            <Simple/>
          </>
        </ProjectContent>
      </div>
    </>
  )
}