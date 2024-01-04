import MovieForm from "./MovieForm";
import {testDataCreateMovie} from "../utils/testData/movies.testdata";
import {GenreDTO} from "../genres/genres.model";
import {testDataSelectedGenres, testDataNonSelectedGenres} from "../utils/testData/genres.testdata";
import {testDataSelectedTheaters, testDataNonNonSelectedTheaters} from "../utils/testData/theaters.testdata";
import {TheaterDTO} from "../theaters/theater.model";
import {ActorMovieDTO} from "../actors/actors.model";
import {testDataActorMovies} from "../utils/testData/actors.testdata";

/*
url: movies/edit/[id]
 */
export default function EditMovie() {
  const selectedGenres: GenreDTO[] = testDataSelectedGenres;
  const nonSelectedGenres: GenreDTO[] = testDataNonSelectedGenres;
  const selectedTheaters: TheaterDTO[] = testDataSelectedTheaters;
  const nonSelectedTheaters: TheaterDTO[] = testDataNonNonSelectedTheaters;
  const selectedActors: ActorMovieDTO[] = testDataActorMovies;

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
        selectedActors={selectedActors}
      />

    </>
  )
}
