export default function MapExample(){
  const arr = Array(10).fill(0); // [0, 0, ...,0] - we only use the index.
  return(
    <>
      <h1>Map Example</h1>
      <select onChange={(e) => {
        console.log(e.currentTarget.value)
      }}>
        {arr.map((val, index) =>
          <option key={index} value={index+1}>{index+1}</option>
        )}
      </select>

    </>
  )
}