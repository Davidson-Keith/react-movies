import {useEffect, useState} from "react";
import {landingPageDTO} from "../movies/movies.model";
import {testDataMovies} from "../utils/testData/movies.testdata";
import MoviesList from "../movies/MoviesList";

export default function LandingPage() {
  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(() => setMovies(testDataMovies), 1000);
    return () => clearTimeout(timerId);
  });

  return (
    <>
      <h3>In Theaters</h3>
      <MoviesList movies={movies.inTheaters}/>
      <h3>Upcoming Movies</h3>
      <MoviesList movies={movies.upcomingReleases}/>
    </>
  )
}
