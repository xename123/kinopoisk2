export type Countries = {
  country: string;
};
export type Genres = {
  genre: string;
};

export type Film = {
  countries?: Countries[];
  genres?: Genres[];
  imdbId?: string;
  kinopoiskId?: number;
  nameEn?: string;
  nameOriginal?: string;
  nameRu?: string;
  posterUrl?: string;
  posterUrlPreview?: string;
  ratingImdb?: number;
  ratingKinopoisk?: number;
  type?: string;
  year?: number;
};
