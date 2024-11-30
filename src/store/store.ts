import { Film } from "@/types/types";
import { configureStore } from "@reduxjs/toolkit";

interface IStore {
  featuredFilms: Film[];
}

type AddNewFilm = {
  type: "addNewFilm";
};
type ToggleFilm = {
  type: "toggleFilm";
};
type Action = AddNewFilm | ToggleFilm;

const initialState: IStore = {
  featuredFilms: [],
};

const reducer = (state = initialState, action: Action): IStore => {
  switch (action.type) {
    case "addNewFilm":
      return { ...state, featuredFilms: [] };
    case "toggleFilm":
      return { ...state, featuredFilms: [] };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: reducer,
});
