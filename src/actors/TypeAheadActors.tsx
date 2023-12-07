import {ActorMovieDTO} from "./actors.model";
import {Typeahead} from "react-bootstrap-typeahead";
import {testDataActorMovies} from "../utils/testData/actors.testdata";
import {ReactElement} from "react";

export default function TypeAheadActors(props: TypeAheadActorsProps) {
  const actors: ActorMovieDTO[] = testDataActorMovies;
  const selected: ActorMovieDTO[] = [];

  return (
    <div className="mb-3">
      <label>{props.displayName}</label>
      <Typeahead
        id="typeahead"
        onChange={(selectedOptions) => {
          const selectedActors = selectedOptions as ActorMovieDTO[];
          if (props.actors.findIndex(x => x.id === selectedActors[0].id) === -1) {
            // selectedActors[0].character = ''; // This is in the final version, not sure if we add it yet.
            props.onAdd([...props.actors, selectedActors[0]]);
          }
          console.log(selectedActors);
        }}
        options={actors}
        labelKey={'name'}
        filterBy={['name']}
        placeholder="Write the name of the actor..."
        minLength={1}
        flip={true}
        selected={selected}
        renderMenuItemChildren={actor => (
          <>
            <img alt="actor" src={(actor as ActorMovieDTO).picture}
                 style={{
                   height: '64px',
                   marginRight: '10px',
                   width: '64px'
                 }}
            />
            <span>{(actor as ActorMovieDTO).name}</span>
          </>
        )}
      />
      <ul className="list-group">
        {props.actors.map(actor =>
          <li key={actor.id} className="list-group-item list-group-item-action">
            {props.listUI(actor)}
            <span
              className="badge badge-primary badge-pill pointer text-dark"
              style={{marginLeft: '0.5rem'}}
              onClick={() => props.onRemove(actor)}
            >X</span>
          </li>)}
      </ul>
    </div>
  )
}

interface TypeAheadActorsProps {
  displayName: string;
  actors: ActorMovieDTO[];

  onAdd(actors: ActorMovieDTO[]): void;

  onRemove(actor: ActorMovieDTO): void;

  listUI(actor: ActorMovieDTO): ReactElement;
}

