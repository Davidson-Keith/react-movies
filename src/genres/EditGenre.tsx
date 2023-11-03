import {useParams} from "react-router-dom";

export default function EditGenre() {
  let {id}: any = useParams();
  return (
    <>
      <h3>Edit Genre</h3>
      The ID is {id}
    </>
  )
}
