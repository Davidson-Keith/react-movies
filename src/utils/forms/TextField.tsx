import {ErrorMessage, Field} from "formik";

export default function TextField(props: TextFieldProps) {
  return (
    <>
      <div className="mb-3">
        <label htmlFor={props.field}>{props.label}</label>
        <Field name={props.field} id={props.field} className="form-control"/>
        <ErrorMessage name={props.field}>{msg =>
          <div className="text-danger">{msg}</div>
        }</ErrorMessage>
      </div>
    </>
  )
}

interface TextFieldProps {
  label: string;
  field: string;
}
