import {Form, Formik, FormikHelpers} from "formik";
import TextField from "../utils/forms/TextField";
import Button from "../utils/Button";
import {Link} from "react-router-dom";
import {ActorCreationDTO} from "./actors.model";
import * as Yup from 'yup';
import DateField from "../utils/forms/DateField";
import ImageField from "../utils/forms/ImageField";
import MarkdownField from "../utils/forms/MarkdownField";

export default function ActorForm(props: ActorFormProps) {
  return (
    <>
      <Formik
        initialValues={props.model}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
          name: Yup.string().required('Name is required').firstLetterUppercase(),
          dateOfBirth: Yup.date().nullable().required('Date of Birth is required')
        })}
      >
        {(formikProps) => (
          <Form>
            <TextField displayName="Name" field="name"/>
            <DateField field="dateOfBirth" displayName="Date of Birth"/>
            <ImageField field="picture" displayName="Picture" imageURL={props.model.pictureURL}/>
            <MarkdownField displayName="Biography" field="biography"/>
            <Button
              disabled={formikProps.isSubmitting}
              type="submit"
            >Save Changes</Button>
            <Link to="/actors" className="btn btn-secondary ms-3">Cancel</Link>
          </Form>
        )}
      </Formik>
    </>
  )
}

interface ActorFormProps {
  model: ActorCreationDTO;

  onSubmit(values: ActorCreationDTO, action: FormikHelpers<ActorCreationDTO>): void;
}