import '../App.css';
import Menu from "./Menu";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routes} from "./routes-config";
import configureValidations from "../utils/forms/Validations";

configureValidations();

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu/>
        <div className="container">
          <Routes>
            {routes.map(({path,Component}, index) =>
              <Route key={index} path={path} element={<Component />} />
            )}
          </Routes>
        </div>
        <footer className="bd-footer py-5 mt-5 bg-light">
          <div className="container">
            React Movies {new Date().getFullYear().toString()} - Dead Set Legends Inc.
          </div>
        </footer>
      </BrowserRouter>
    </>
  )
}

export default App;
