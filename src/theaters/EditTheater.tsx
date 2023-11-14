import TheaterForm from "./TheaterForm";
import {testDataTheaters} from "../testData/theaters.testdata";

export default function EditTheater() {
  return (
    <>
      <h3>Edit Theater</h3>
      <TheaterForm
        model={{name: ''}}
        // model={testDataTheaters[0]} // test
        onSubmit={values => console.log(values)}
      />
    </>
  )
}
