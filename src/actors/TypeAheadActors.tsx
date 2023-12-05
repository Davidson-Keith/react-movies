import {ActorMovieDTO} from "./actors.model";
import {Typeahead} from "react-bootstrap-typeahead";
import {testDataActorMovies} from "../utils/testData/actors.testdata";

export default function TypeAheadActors(props: TypeAheadActorsProps) {
  const actors: ActorMovieDTO[] = testDataActorMovies;
  return (
    <div className="mb-3">
      <label>{props.displayName}</label>
      <Typeahead
        id="typeahead"
        onChange={selectedActors => {
          console.log(selectedActors);
        }}
        options={actors}
        labelKey={'name'}
        filterBy={['name']}
        placeholder="Write the name of the actor..."
        minLength={1}
      />
    </div>
  )
}

interface TypeAheadActorsProps {
  displayName: string;
  actors: ActorMovieDTO[];
}
