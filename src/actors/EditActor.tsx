import ActorForm from "./ActorForm";
import {testDataActors} from "../testData/actors.testdata";

export default function EditActor() {
  return (
    <>
      <h3>Edit Actor</h3>
      <ActorForm
        model={testDataActors[0]}
        onSubmit={values => console.log(values)}
      />
    </>
  )
}
