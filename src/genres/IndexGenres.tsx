import {Link} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";
import {GenreDTO} from "./genres.model";
import {genresUrl} from "../main/endpoints";

export default function IndexGenres() {
  // test Axios
  useEffect(() => {
    axios({
      method: 'get',
      url: genresUrl,
    })
      .then((response) => {
        console.log('data = ', response.data);
        console.log('status = ', response.status);
        console.log('statusText = ', response.statusText);
        console.log('headers = ', response.headers);
        console.log('config = ', response.config);
      })
      .catch((error) => {
        // handle error
        console.log('error = ', error);
      })
      .finally(() => {
        console.log('finally called.');
      });

    // axios.get('http://localhost:5233/api/genres')
    //   .then((AxiosResponse<GenreDTO[]>)=>{
    //     console.log(response.data)
    // })
  }, []);

  return (
    <>
      <h3>Genres</h3>
      <Link className="btn btn-primary" to="/genres/create">Create Genre</Link>
    </>
  )
}
