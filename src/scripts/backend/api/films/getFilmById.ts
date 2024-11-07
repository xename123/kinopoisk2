import { endpoints } from "@/backend/constansts/filmsURL";
import axios from "axios";

export default async function getFilmById(id: number): Promise<any> {
  let data = await axios.get(`${endpoints.films}/${id}`, {
    headers: {
      "X-API-KEY": import.meta.env.VITE_kinopois_api,
      "Content-Type": "application/json",
    },
  });
  console.log(data);
  data = await data.data;
  return data;
}
