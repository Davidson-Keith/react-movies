import {ActorMovieDTO} from "./actors.model";
import {Typeahead} from "react-bootstrap-typeahead";
import {testDataActorMovies} from "../utils/testData/actors.testdata";
import {ReactElement, useState} from "react";

/*
Typeahead function for selecting actors in a particular movie (ActorMovieDTO)
 */
export default function TypeAheadMovieActors(props: TypeAheadActorsProps) {
  const actors: ActorMovieDTO[] = testDataActorMovies;
  const selected: ActorMovieDTO[] = [];
  const [draggedElement, setDraggedElement] = useState<ActorMovieDTO | undefined>(undefined);

  function handleDragStart(actor: ActorMovieDTO) {
    setDraggedElement(actor);
  }

  function handleDragOver(actor: ActorMovieDTO) {
    if (!draggedElement) {
      return;
    }
    if (actor.id !== draggedElement.id) { // don't bother if dragged over itself
      const draggedElementIndex = props.actors.findIndex(x => x.id === draggedElement.id);
      const actorIndex = props.actors.findIndex(x=>x.id===actor.id);
      const actors = [...props.actors];
      actors[actorIndex] = draggedElement;
      actors[draggedElementIndex] = actor;
      props.onAdd(actors);
    }
  }

  return (
    <div className="mb-3">
      <label>{props.displayName}</label>
      <Typeahead
        id="typeahead"
        onChange={(selectedOptions) => {
          const selectedActors = selectedOptions as ActorMovieDTO[];
          // If there are any existing actors already attached to this movie, they will be in props. So we don't want to double up and
          // add the same ones again if the user selects them. So, if the selected actor isn't already attached to the movie, then add it.
          // NB: if there are no actors already attached, then this will always be -1, and thus the selected actor will be added.
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
                   // width: '64px'
                 }}
            />
            <span>{(actor as ActorMovieDTO).name}</span>
          </>
        )}
      />
      <ul className="list-group">
        {props.actors.map(actor =>
          <li
            key={actor.id}
            draggable={true}
            onDragStart={() => handleDragStart(actor)}
            onDragOver={() => handleDragOver(actor)}
            className="list-group-item list-group-item-action">
            {props.actorListUI(actor)}

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

  actorListUI(actor: ActorMovieDTO): ReactElement;
}

