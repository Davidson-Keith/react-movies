import './App.css';
import IndividualMovie from "./Movies/IndividualMovie";
import {landingPageDTO, movieDTO} from "./Movies/movies.model";
import MoviesList from "./Movies/MoviesList";
import {useEffect, useState} from "react";

function App() {
  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters: [
          {
            id: 1,
            title: 'No time To Die',
            poster: 'https://upload.wikimedia.org/wikipedia/en/f/fe/No_Time_to_Die_poster.jpg'
          }, {
            id: 2,
            title: 'Luca',
            poster: 'https://upload.wikimedia.org/wikipedia/en/3/33/Luca_%282021_film%29.png'
          }
        ],
        upcomingReleases: [
          {
            id: 3,
            title: 'Soul',
            poster: 'https://upload.wikimedia.org/wikipedia/en/3/39/Soul_%282020_film%29_poster.jpg'
          }, {
            id: 4,
            title: 'Midnight in Paris',
            poster: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Midnight_in_Paris_Poster.jpg'
          }
        ]
      });
    }, 1000);
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

export default App;
