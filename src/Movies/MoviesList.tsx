import {movieDTO} from "./movies.model";
import IndividualMovie from "./IndividualMovie";
import css from './MoviesList.module.css';
import Loading from "../Utils/Loading";
import GenericList from "../Utils/GenericList";

export default function MoviesList(props: moviesListProps) {
  return (
    <>
      <h3>Hi Keith 2</h3>
      <GenericList list={props.movies} emptyListUI={<>There are no movies to display.</>}>
        <div className={css.div}>
          {props.movies?.map(movie =>
            <IndividualMovie {...movie} key={movie.id}/>)}
        </div>
      </GenericList>
    </>
  )
}

interface moviesListProps {
  movies?: movieDTO[];
}