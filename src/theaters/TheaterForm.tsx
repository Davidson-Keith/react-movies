import {Form, Formik, FormikHelpers} from "formik";
import * as Yup from "yup";
import TextField from "../utils/forms/TextField";
import Button from "../utils/Button";
import {Link} from "react-router-dom";
import {theaterCreationDTO} from "./theater.model";
import MapField from "../utils/forms/MapField";
import coordinatesDTO from "../utils/coordinates.model";

export default function TheaterForm(props: theaterFormProps) {
  function transformCoordinates(): coordinatesDTO[] | undefined {
    if (props.model.latitude && props.model.longitude) {
      const response: coordinatesDTO = {
        lat: props.model.latitude,
        lng: props.model.longitude
      }
      return [response];
    }
    return undefined;
  }

  return (
    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        name: Yup.string().required('Name is required').firstLetterUppercase(),
      })}
    >
      {(formikProps) => (
        <Form>
          <TextField displayName="Name" field="name"/>
          <div style={{marginBottom: '1rem'}}>
            <MapField
              latField="latitude"
              lngField="longitude"
              coordinates={transformCoordinates()}
            />
          </div>

          <Button
            disabled={formikProps.isSubmitting}
            type="submit"
          >Save Changes</Button>
          <Link to="/theaters" className="btn btn-secondary ms-3">Cancel</Link>
        </Form>
      )}
    </Formik>
  )
}

interface theaterFormProps {
  model: theaterCreationDTO;

  onSubmit(values: theaterCreationDTO, action: FormikHelpers<theaterCreationDTO>): void;
}

// export interface theaterCreationDTO {
//   name: string;
//   latitude?: number;
//   longitude?: number;
// }
// From theaters.model.d.ts

// export interface theaterDTO {
//   id: number;
//   name: string;
//   latitude?: number;
//   longitude?: number;
// }
// From theaters.model.d.ts
