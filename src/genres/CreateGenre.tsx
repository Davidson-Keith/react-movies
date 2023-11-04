import Button from "../utils/Button";
import {Link} from "react-router-dom";
import {Field, Formik, Form} from "formik";

export default function CreateGenre() {
  // const navigate = useNavigate();
  return (
    <>
      <h3>Create Genre</h3>
      <Formik
        initialValues={{name: ''}}
        onSubmit={values => {
          console.log(values);
        }}
      >
        <Form>
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <Field name="name" id="name" className="form-control"/>
          </div>
          <Button type="submit">Save Changes</Button>
          <Link className="btn btn-secondary ms-3" to="/genres">Cancel</Link>
        </Form>
      </Formik>
    </>
  )
}
