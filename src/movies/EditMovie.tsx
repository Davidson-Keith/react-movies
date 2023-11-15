import MovieForm from "./MovieForm";
import {testDataCreateMovie} from "../testData/movies.testdata";
import {genreDTO} from "../genres/genres.model";
import {testDataSelectedGenres, testDataNonSelectedGenres} from "../testData/genres.testdata";

export default function EditMovie() {
  const selectedGenres: genreDTO[] = testDataSelectedGenres;
  const nonSelectedGenres: genreDTO[] = testDataNonSelectedGenres;

  return (
    <>
      <h3>Edit Movie</h3>
      <MovieForm
        // model={{title: '', inTheaters: false, trailer: ''}}
        model={testDataCreateMovie} // test
        onSubmit={values => console.log(values)}
        selectedGenres={selectedGenres}
        nonSelectedGenres={nonSelectedGenres}
      />

    </>
  )
}
