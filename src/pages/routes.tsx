import App from "../App";
import FilmPage from "./FilmPage/FilmPage";
import FilmsByGenre from "./FilmsByGenre/FilmsByGenre";

export const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/film/:filmId",
    element: <FilmPage />,
  },
  {
    path: "/:genre",
    element: <FilmsByGenre />,
  },
];
