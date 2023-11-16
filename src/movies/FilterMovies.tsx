import {Field, Form, Formik} from "formik";
import {testDataGenres} from "../utils/testData/genres.testdata";
import Button from "../utils/Button";

export default function FilterMovies() {
  const initialValues: filterMoviesForm = {
    title: '',
    genreId: 0,
    upcomingReleases: false,
    inTheaters: false,
  }

  return (
    <>
      <h3>Filter Movies</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={values => console.log(values)}
      >
        {(formikProps) => (
          <Form>
            <div className="row gx-3 align-items-center">
              <div className="col-auto">
                <input type="text" className="form-control" id="title"
                       placeholder="Title of the movie"
                       {...formikProps.getFieldProps("title")}
                />
              </div>
              <div className="col-auto">
                <select className="form-control"
                        {...formikProps.getFieldProps("genreId")}
                >
                  <option value="0">--Choose a genre--</option>
                  {testDataGenres.map(genre =>
                    <option key={genre.id} value={genre.name}>{genre.name}</option>)
                  }
                </select>
              </div>
              <div className="form-check">
                <Field
                  className="form-check-input"
                  id="upcomingReleases"
                  name="upcomingReleases"
                  type="checkbox"
                />
                <label className="form-check-label" htmlFor="upcomingReleases">Upcoming Releases</label>
              </div>
              <div className="form-check">
                <Field
                  className="form-check-input"
                  id="inTheaters"
                  name="inTheaters"
                  type="checkbox"
                />
                <label className="form-check-label" htmlFor="inTheaters">In Theaters</label>
              </div>
              <div className="col-auto">
                <Button
                  onClick={() => formikProps.submitForm()}
                >Filter</Button>
                <Button
                  className="btn btn-danger ms-3"
                  onClick={() => formikProps.setValues(initialValues)}
                >Clear</Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

interface filterMoviesForm {
  title: string;
  genreId: number;
  upcomingReleases: boolean;
  inTheaters: boolean;
}