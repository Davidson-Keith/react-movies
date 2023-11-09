import {Form, Formik, FormikHelpers} from "formik";
import * as Yup from "yup";
import TextField from "../utils/forms/TextField";
import Button from "../utils/Button";
import {Link} from "react-router-dom";
import {theaterCreationDTO} from "./theater.model";
import InteractiveMap from "../utils/InteractiveMap";

export default function TheaterForm(props: theaterFormProps) {
  return (
    <>
      <Formik
        initialValues={props.model}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
          name: Yup.string().required('Name is required').firstLetterUppercase(),
          // dateOfBirth: Yup.date().nullable().required('Date of Birth is required')
        })}
      >
        {(formikProps) => (
          <Form>
            <TextField displayName="Name" field="name"/>
            <div style={{marginBottom: '1rem'}}>
              <InteractiveMap/>
            </div>
            <Button
              disabled={formikProps.isSubmitting}
              type="submit"
            >Save Changes</Button>
            <Link to="/theaters" className="btn btn-secondary ms-3">Cancel</Link>
          </Form>
        )}
      </Formik>    </>
  )
}

interface theaterFormProps {
  model: theaterCreationDTO;

  onSubmit(values: theaterCreationDTO, action: FormikHelpers<theaterCreationDTO>): void;

}