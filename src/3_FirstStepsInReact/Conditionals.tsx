export default function Conditionals(){
  const canSEE = true;
  return(
    <>
      <h1>Conditionals Example</h1>
      {canSEE ? <div>You are seeing the secret</div> : <span>You are not allowed to see the secret</span>}
    </>
  )
}