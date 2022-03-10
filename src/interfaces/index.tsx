export interface Collection {
  [type: string]: string;
}
export interface GenreDict {
  [key: string]: string;
}

export interface ApiResponse {
  dates: object;
  page: number;
  results: Array<MovieItem>;
  total_pages: number;
  total_results: number;
  genres?: Array<GenreDict>;
}

export interface MovieItem {
  adult: boolean;
  backgroundImage: string;
  posterImage: string;
  backdrop_path: string;
  genre_ids: Array<number>;
  genre_name: Array<string>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
