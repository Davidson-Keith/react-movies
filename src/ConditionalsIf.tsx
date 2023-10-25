import {useState} from "react";
import Simple from "./Simple";

export default function ConditionalsIf() {
  const [rating, setRating] = useState(5);

  const displayResult = ()=>{
    if(rating === 1){
      return <span>Nooo!</span>
    } else if(rating === 2){
      return (
        <>
          <span>What, why?</span>
          <input type="text"/>
        </>
      )
    } else if(rating === 3){
      return (
        <Simple/>
      )
    } else if(rating === 4){
      return <span>I'll try harder next time</span>
    } else if(rating === 5){
      return <span>Yesss!!!  </span>
    }
  }

  return (
    <>
      <h1>Conditionals If Example</h1>
      <div>Rate this site</div>
      <select value={rating} onChange={(e) => {
        console.log(e.currentTarget.value)
        setRating(parseInt(e.currentTarget.value));
      }}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <div>Your rating: {rating}</div>
      <div>{displayResult()}</div>
    </>
  )
}