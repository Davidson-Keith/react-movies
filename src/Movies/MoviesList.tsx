import {movieDTO} from "./movies.model";
import IndividualMovie from "./IndividualMovie";
import css from './MoviesList.module.css';
import Loading from "../Utils/Loading";

export default function MoviesList(props: moviesListProps) {
  if (!props.movies) {
    return (
      <Loading/>
    )
  } else if (props.movies.length === 0) {
    return (
      <div>There are no movies to display.</div>
    )
  } else {
    return (
      <div className={css.div}>
        {props.movies.map(movie =>
          <IndividualMovie {...movie} key={movie.id}/>)}
      </div>
    )
  }
}

interface moviesListProps {
  movies?: movieDTO[];
}