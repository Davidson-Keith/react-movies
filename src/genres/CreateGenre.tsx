import Button from "../utils/Button";
import {Link} from "react-router-dom";
import {Formik, Form} from "formik";
import * as Yup from 'yup';
import TextField from "../forms/TextField";

export default function CreateGenre() {
  // const navigate = useNavigate();
  return (
    <>
      <h3>Create Genre</h3>
      <Formik
        initialValues={{name: ''}}
        onSubmit={async values => {
          await new Promise(r => setTimeout(r, 500));
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required.").firstLetterUppercase()
        })}
      >
        {(formikProps) => (
          <Form>
            <TextField label="Name" field="name"/>
            <Button disabled={formikProps.isSubmitting} type="submit">Save Changes</Button>
            <Link className="btn btn-secondary ms-3" to="/genres">Cancel</Link>
          </Form>
        )}
      </Formik>
    </>
  )
}
