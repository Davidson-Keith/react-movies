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
import {theaterDTO} from "../theaters/theater.model";

export default function MovieForm(props: movieFormProps) {
  const [selectedGenres, setSelectedGenres] = useState(mapDTOToMultipleSelectorModel(props.selectedGenres));
  const [nonSelectedGenres, setNonSelectedGenres] = useState(mapDTOToMultipleSelectorModel(props.nonSelectedGenres));
  const [selectedTheaters, setSelectedTheaters] = useState(mapDTOToMultipleSelectorModel(props.selectedTheaters));
  const [nonSelectedTheaters, setNonSelectedTheaters] = useState(mapDTOToMultipleSelectorModel(props.nonSelectedTheaters));

  // Converts an array of id-name pairs of either genreDTO's, or theaterDTO's to and array of key-value pairs of the
  // MultipleSelector component's selected and non-selected lists.
  // E.g., converts a genreDTO[] to a multipleSelectorModel[], or:
  // {id: number, name: string}[] =>
  // {key: number, value: string}[]
  // E.g., converts a theaterDTO[] to a multipleSelectorModel[], or:
  // {id: number, name: string, latitude?: number, longitude?: number}[] =>
  // {key: number, value: string}[]
  function mapDTOToMultipleSelectorModel(items: { id: number, name: string }[]): multipleSelectorModel[] {
    return items.map(item => {
      return {key: item.id, value: item.name}
    })
  }

  return (
    <Formik
      initialValues={props.model}
      onSubmit={(values, actions) => {
        values.genresIds = selectedGenres.map(item=> item.key)
        values.theaterIds = selectedTheaters.map(item=> item.key)
        props.onSubmit(values, actions)
      }}
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
          <MultipleSelector
            displayName="Theaters"
            selected={selectedTheaters}
            nonSelected={nonSelectedTheaters}
            onChange={(selected, nonSelected) => {
              setSelectedTheaters(selected);
              setNonSelectedTheaters(nonSelected);
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
  selectedTheaters: theaterDTO[];
  nonSelectedTheaters: theaterDTO[];
}

// export interface movieCreationDTO {
//   title: string;
//   inTheaters: boolean;
//   trailer:string;
//   releaseDate?:Date;
//   poster?: File;
//   posterURL?: string;
//   genresIds?:number[];
//   actorIds?:number[];
//   theaterIds?:number[];
// }
// From movies.model.d.ts

// export interface multipleSelectorModel {
//   key: number;
//   value: string;
// }
// From MultipleSelector.tsx

// export interface genreDTO {
//   id: number;
//   name: string;
// }
// From genres.model.d.ts

// export interface theaterDTO {
//   id: number;
//   name: string;
//   latitude?: number;
//   longitude?: number;
// }
// From theaters.model.d.ts
