import './App.css';
import {landingPageDTO} from "./Movies/movies.model";
import MoviesList from "./Movies/MoviesList";
import {useEffect, useState} from "react";
import {testData} from "./Movies/movies.testdata";

function App() {
  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(() => setMovies(testData), 1000);
    return () => clearTimeout(timerId);
  });

  return (
    <div className="container">
      <h3>In Theaters</h3>
      <MoviesList movies={movies.inTheaters}/>
      <h3>Upcoming Movies</h3>
      <MoviesList movies={movies.upcomingReleases}/>
    </div>
  )
}

export default App;
