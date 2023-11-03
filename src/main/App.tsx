import '../App.css';
import Menu from "./Menu";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routes} from "./routes-config";

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
      </BrowserRouter>
    </>
  )
}

export default App;
