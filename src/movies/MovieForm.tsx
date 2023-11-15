import {Form, Formik, FormikHelpers} from "formik";
import {movieCreationDTO} from "./movies.model";
import * as Yup from 'yup';
import TextField from "../utils/forms/TextField";
import Button from "../utils/Button";
import {Link} from "react-router-dom";
import DateField from "../utils/forms/DateField";
import ImageField from "../utils/forms/ImageField";
import CheckBoxField from "../utils/forms/CheckBoxField";
import MultipleSelector, {multipleSelectorModel} from "../utils/forms/MultipleSelector";
import {useState} from "react";
import {genreDTO} from "../genres/genres.model";

export default function MovieForm(props: movieFormProps) {
  const [selectedGenres, setSelectedGenres] = useState(mapToModel(props.selectedGenres));
  const [nonSelectedGenres, setNonSelectedGenres] = useState(mapToModel(props.nonSelectedGenres));

  function mapToModel(items: { id: number, name: string }[]): multipleSelectorModel[] {
    return items.map(item => {
      return {key: item.id, value: item.name}
    })
  }

  return (
    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        title: Yup.string().required('Title is required').firstLetterUppercase()
      })}
    >
      {(formikProps) => (
        <Form>
          <TextField displayName="Title" field="title"/>
          <CheckBoxField displayName="In Theaters" field="inTheaters"/>
          {/*defaultChecked={props.model.inTheaters}*/}
          <TextField displayName="Trailer" field="trailer"/>
          <DateField displayName="Release Date" field="releaseDate"/>
          <ImageField displayName="Poster URL" field="posterURL" imageURL={props.model.posterURL}/>
          <MultipleSelector
            displayName="Genres"
            selected={selectedGenres}
            nonSelected={nonSelectedGenres}
            onChange={(selected, nonSelected) => {
              setSelectedGenres(selected);
              setNonSelectedGenres(nonSelected);
            }}
          />

          <Button disabled={formikProps.isSubmitting} type="submit">Save Changes</Button>
          <Link className="btn btn-secondary ms-3" to="/genres">Cancel</Link>
        </Form>
      )}
    </Formik>
  )
}

interface movieFormProps {
  model: movieCreationDTO;

  onSubmit(values: movieCreationDTO, actions: FormikHelpers<movieCreationDTO>): void;

  selectedGenres: genreDTO[];
  nonSelectedGenres: genreDTO[];
}
