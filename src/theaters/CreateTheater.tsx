import TheaterForm from "./TheaterForm";

export default function CreateTheater() {
  return (
    <>
      <h3>Create Theater</h3>
      <TheaterForm
        model={{name: ''}}
        onSubmit={values => console.log(values)}
      />
    </>
  )
}

