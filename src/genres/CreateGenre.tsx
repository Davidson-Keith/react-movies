import GenreForm from "./GenreForm";
import {genreCreationDTO} from "./genres.model";
import {genresUrl} from "../main/endpoints";
import axios from "axios";
import errorBoundary from "../3_FirstStepsInReact/ErrorBoundaries/ErrorBoundary";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {useNavigate} from "react-router-dom";

export default function CreateGenre() {
  // react-router-dom V6 replaces useHistory with useNavigate
  // https://reacttraining.com/blog/react-router-v6-pre
  const navigate = useNavigate();


  // Arrow function technique of creating an async function and calling axios.
  const create = async (genre: genreCreationDTO) => {
    // env.development.REACT_APP_API_URL = http://localhost:5233/api
    // export const baseUrl = process.env.REACT_APP_API_URL; // baseUrl = http://localhost:5233/api
    // export const genresUrl = `${baseUrl}/genres`; // genresUrl = http://localhost:5233/api/genres
    console.log('CreateGenre.create: genresUrl: ' + genresUrl); // CreateGenre.create: genresUrl: http://localhost:5233/api/genres
    await axios.post(genresUrl, genre) // genresURL = ${baseUrl}/genres = api/genres
      .then((response) => {
        navigate('success'); // replaces history.push('/genres');
        console.log('CreateGenre.create: response: ' + JSON.stringify(response.data)); // CreateGenre.create: response: [object Object] gah, useless.
      })
      .catch((error) => {
        console.log('CreateGenre.create: error: ' + error);
      })
  }

  // Old school technique of creating an async function and calling axios.
  // async function createOldSchool(genre: genreCreationDTO) {
  //   try {
  //     await axios.post(genresUrl, genre); // genresURL = ${baseUrl}/genres = api/genres/genres
  //     navigate('success'); // replaces history.push('/genres');
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  axios.get('/user?ID=12345')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  return (
    <>
      <h3>Create Genre</h3>
      <GenreForm
        model={{name: ''}}
        onSubmit={async (data) => {
          await create(data);
        }}
      />
    </>
  )
}
