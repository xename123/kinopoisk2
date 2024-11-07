import { endpoints } from "@/backend/constansts/filmsURL";
import { Film } from "@/types/types";
import axios from "axios";

type filmData = {
  items: Film[];
  total: number;
  totalPages: number;
};

export default async function getFilmByPage(page: number): Promise<filmData> {
  const response = await axios.get(`${endpoints.films}?page=${page}`, {
    headers: {
      "X-API-KEY": import.meta.env.VITE_kinopois_api,
      "Content-Type": "application/json",
    },
  });
  return response.data;
}
