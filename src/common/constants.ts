export const TMD_IMG_URL: string = "https://image.tmdb.org/t/p/w400/";
export const REACT_APP_MOVIE_DB_KEY: string = "fd6b754c480c6fda64edeba8f043fa46"

export const discoverList = [
  '/discover/movie?sort_by=popularity.desc',
  '/discover/movie?certification_country=US&with_genres=16&certification.lte=G&sort_by=popularity.desc', //kids
  '/discover/movie?primary_release_year=2010&sort_by=vote_average.desc&with_genres=10751&language=en-US',//family
  '/discover/movie?primary_release_year=1980&with_genres=10752&sort_by=vote_average.desc&vote_count.gte=10',//drama
  '/discover/movie/?sort_by=popularity.desc&primary_release_year=2010&with_genres=10770', //rated R
];

export const discoverTitle = [
  'Most popular',
  'Best kids friendly',
  'Best family movies',
  "Best War movies from the 80's",
  'Best TV Releases',
];