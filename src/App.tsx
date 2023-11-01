import './App.css';
import IndividualMovie from "./Movies/IndividualMovie";
import {movieDTO} from "./Movies/movies.model";
import MoviesList from "./Movies/MoviesList";

function App() {
  const inTheatres: movieDTO[] = [
    {
      id: 1,
      title: 'No time To Die',
      poster: 'https://upload.wikimedia.org/wikipedia/en/f/fe/No_Time_to_Die_poster.jpg'
    }, {
      id: 2,
      title: 'Luca',
      poster: 'https://upload.wikimedia.org/wikipedia/en/3/33/Luca_%282021_film%29.png'
    }
  ];
  const upcomingMovies: movieDTO[] = [
    {
      id: 3,
      title: 'Soul',
      poster: 'https://upload.wikimedia.org/wikipedia/en/3/39/Soul_%282020_film%29_poster.jpg'
    }, {
      id: 4,
      title: 'Midnight in Paris',
      poster: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Midnight_in_Paris_Poster.jpg'
    }
  ];

  return (
    <>
      <h3>In Theaters</h3>
      <MoviesList movies={inTheatres}/>
      <h3>Upcoming Movies</h3>
      <MoviesList movies={upcomingMovies}/>
    </>
  )
}

export default App;
