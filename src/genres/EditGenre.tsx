import {useParams} from "react-router-dom";
import GenreForm from "./GenreForm"; // URL parameters

export default function EditGenre() {
  let {id}: any = useParams();
  return (
    <>
      <h3>Edit Genre</h3>
      {/*The ID is {id} */}
      <GenreForm
        model={{name: 'Action'}}
        onSubmit={async (values) => {
          await new Promise(r => setTimeout(r, 500));
          console.log(values);
          console.log(id);
        }}
      />
    </>
  )
}
