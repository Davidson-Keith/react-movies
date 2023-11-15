import MovieForm from "./MovieForm";
import {genreDTO} from "../genres/genres.model";
import {testDataGenres} from "../testData/genres.testdata";

export default function CreateMovie() {
  const nonSelectedGenres: genreDTO[] = testDataGenres;

  return (
    <>
      <h3>Create Movie</h3>
      <MovieForm
        model={{title: '', inTheaters: false, trailer: ''}}
        // model={testDataMovies[0]} // test
        onSubmit={values => console.log(values)}
        selectedGenres={[]}
        nonSelectedGenres={nonSelectedGenres}
      />

    </>
  )
}
