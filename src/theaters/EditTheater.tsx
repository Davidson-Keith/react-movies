import TheaterForm from "./TheaterForm";

export default function EditTheater() {
  return (
    <>
      <h3>Edit Theater</h3>
      <TheaterForm
        model={{name: ''}}
        onSubmit={values => console.log(values)}
      />
    </>
  )
}
