import {Link} from "react-router-dom";

export default function IndexTheaters() {
  return (
    <>
      <h3>Theaters</h3>
      <Link className="btn btn-primary" to="/theaters/create">Create Theater</Link>
    </>
  )
}
