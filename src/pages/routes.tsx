import App from "../App";
import Film from "./Film/Film";
import FilmsByGenre from "./FilmsByGenre/FilmsByGenre";

export const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/film/:filmId",
    element: <Film />,
  },
  {
    path: "/:genre",
    element: <FilmsByGenre />,
  },
];
