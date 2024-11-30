import { Film, FilmDetailed } from "@/types/types";
import { configureStore } from "@reduxjs/toolkit";
import { act } from "react";

interface IStore {
  featuredFilms: Film[];
}

export type AddNewFilm = {
  type: "addNewFilm";
  film: Film | FilmDetailed;
};
export type ToggleFilm = {
  type: "toggleFilm";
  id: number;
};
type Action = AddNewFilm | ToggleFilm;

const initialState: IStore = {
  featuredFilms: [],
};

const reducer = (state = initialState, action: Action): IStore => {
  switch (action.type) {
    case "addNewFilm":
      console.log(action.film);
      return { ...state, featuredFilms: [...state.featuredFilms, action.film] };
    case "toggleFilm":
      return { ...state, featuredFilms: [] };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: reducer,
});
