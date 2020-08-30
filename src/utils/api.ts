import axios from "axios";

class WebService {
  private client: any;
  private params: any;

  constructor() {
    this.client = axios.create({
      baseURL: 'https://api.themoviedb.org/3'
    });
    this.params = { api_key: process.env.REACT_APP_MOVIE_DB_KEY };
  }

  getMovies() {
    return this.client.get('/discover/movie?sort_by=popularity.desc', this.params);
  }

  searchMovie(query: any) {
    return this.client.get('/search/movie', { params: { ...this.params, query } });
  }
  getMovieById(query: any) {
    return this.client.get('/movie/' + query, this.params);
  }
}

const webservice = new WebService();
export default webservice;