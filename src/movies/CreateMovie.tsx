import MovieForm from "./MovieForm";
import {GenreDTO} from "../genres/genres.model";
import {testDataGenres} from "../utils/testData/genres.testdata";
import {TheaterDTO} from "../theaters/theater.model";
import {testDataTheaters} from "../utils/testData/theaters.testdata";

export default function CreateMovie() {
  const nonSelectedGenres: GenreDTO[] = testDataGenres;
  const nonSelectedTheaters: TheaterDTO[] = testDataTheaters;

  return (
    <>
      <h3>Create Movie</h3>
      <MovieForm
        model={{title: '', inTheaters: false, trailer: ''}}
        // model={testDataMovies[0]} // test
        onSubmit={values => console.log(values)}
        selectedGenres={[]}
        nonSelectedGenres={nonSelectedGenres}
        selectedTheaters={[]}
        nonSelectedTheaters={nonSelectedTheaters}
        selectedActors={[]}
      />

    </>
  )
}
