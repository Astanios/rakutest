export interface Movie {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path?: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string
  original_title: string
  genres: {
    id: number,
    name: string
  }[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
}

export interface MovieThumb {
  poster_path: string;
  title: string;
  id: number;
  release_date: string;
}