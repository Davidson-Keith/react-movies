import MovieForm from "./MovieForm";
import {testDataCreateMovie} from "../utils/testData/movies.testdata";
import {genreDTO} from "../genres/genres.model";
import {testDataSelectedGenres, testDataNonSelectedGenres} from "../utils/testData/genres.testdata";
import {testDataSelectedTheaters, testDataNonNonSelectedTheaters} from "../utils/testData/theaters.testdata";
import {theaterDTO} from "../theaters/theater.model";

export default function EditMovie() {
  const selectedGenres: genreDTO[] = testDataSelectedGenres;
  const nonSelectedGenres: genreDTO[] = testDataNonSelectedGenres;
  const selectedTheaters: theaterDTO[] = testDataSelectedTheaters;
  const nonSelectedTheaters: theaterDTO[] = testDataNonNonSelectedTheaters;

  return (
    <>
      <h3>Edit Movie</h3>
      <MovieForm
        // model={{title: '', inTheaters: false, trailer: ''}}
        model={testDataCreateMovie} // test
        onSubmit={values => console.log(values)}
        selectedGenres={selectedGenres}
        nonSelectedGenres={nonSelectedGenres}
        selectedTheaters={selectedTheaters}
        nonSelectedTheaters={nonSelectedTheaters}
      />

    </>
  )
}
