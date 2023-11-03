import IndexGenres from "../genres/IndexGenres";
import LandingPage from "./LandingPage";
import CreateGenre from "../genres/CreateGenre";
import EditGenre from "../genres/EditGenre";
import IndexActors from "../actors/IndexActors";
import CreateActor from "../actors/CreateActor";
import EditActor from "../actors/EditActor";
import IndexTheaters from "../theaters/IndexTheaters";
import CreateTheater from "../theaters/CreateTheater";
import EditTheater from "../theaters/EditTheater";
import FilterMovies from "../movies/FilterMovies";
import CreateMovie from "../movies/CreateMovie";
import EditMovie from "../movies/EditMovie";
import RedirectToLandingPage from "../utils/RedirectToLandingPage";

export const routes = [
  {path: '/', Component: LandingPage}, // Bizarrely, it doesn't work if "component" instead of "Component"!!!

  {path: '/genres', Component: IndexGenres},
  {path: '/genres/create', Component: CreateGenre},
  {path: '/genres/edit/:id', Component: EditGenre}, // path: '/genres/edit/:id(\\d+)'. d+ = must be a number. However doesn't work

  {path: '/actors', Component: IndexActors},
  {path: '/actors/create', Component: CreateActor},
  {path: '/actors/edit/:id', Component: EditActor},

  {path: '/theaters', Component: IndexTheaters},
  {path: '/theaters/create', Component: CreateTheater},
  {path: '/theaters/edit/:id', Component: EditTheater},

  {path: '/movies/create', Component: CreateMovie},
  {path: '/movies/edit/:id', Component: EditMovie},
  {path: '/movies/filter', Component: FilterMovies},

  {path: '*', Component: RedirectToLandingPage} // Catches any urls that don't fit anything above.
]

