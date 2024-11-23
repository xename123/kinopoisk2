import { endpoints } from "@/backend/constansts/filmsURL";
import FilmList from "@/components/FIlmList/FilmList";
import "./genres.css";
import "./index.css";
function App() {
  return (
    <main className="page">
      <FilmList title={"Все фильмы"} path={endpoints.films} />
    </main>
  );
}

export default App;
