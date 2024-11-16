import axios from "axios";

export async function getRequestToFilmApi(path: string) {
  return await axios.get(path, {
    headers: {
      "X-API-KEY": import.meta.env.VITE_kinopois_api,
      "Content-Type": "application/json",
    },
  });
}
