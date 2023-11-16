import {movieCreationDTO} from "../../movies/movies.model";

export const testDataMovies = {
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
}

export const testDataCreateMovie: movieCreationDTO = {
  title: 'No time To Die',
  inTheaters: true,
  posterURL: 'https://upload.wikimedia.org/wikipedia/en/f/fe/No_Time_to_Die_poster.jpg',
  trailer: 'Sux as usual',
  releaseDate: new Date('2019-01-01T00:00:00'),
}
