import App from "../App";
import Film from "./Film/Film";

export const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/film/:filmId",
    element: <Film />,
  },
];
