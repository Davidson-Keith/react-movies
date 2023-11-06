import {Form, Formik, FormikHelpers} from "formik";
import * as Yup from "yup";
import TextField from "../utils/forms/TextField";
import Button from "../utils/Button";
import {Link} from "react-router-dom";
import {genreCreationDTO} from "./genres.model";

export default function GenreForm(props: genreFormProps) {
  return (
    <>
      <Formik
        initialValues={props.model}
        onSubmit={props.onSubmit}
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

interface genreFormProps {
  model: genreCreationDTO;

  onSubmit(values: genreCreationDTO, action: FormikHelpers<genreCreationDTO>): void;
}


// export default function GenreForm(props: genreFormProps) {
//   return (
//     <>
//       <Formik
//         initialValues={{name: ''}}
//         onSubmit={async (values) => {
//           await new Promise(r => setTimeout(r, 500));
//           console.log(values);
//         }}
//         validationSchema={Yup.object({
//           name: Yup.string().required("Name is required.").firstLetterUppercase()
//         })}
//       >
//         {(formikProps) => (
//           <Form>
//             <TextField label="Name" field="name"/>
//             <Button disabled={formikProps.isSubmitting} type="submit">Save Changes</Button>
//             <Link className="btn btn-secondary ms-3" to="/genres">Cancel</Link>
//           </Form>
//         )}
//       </Formik>
//     </>
//   )
// }
