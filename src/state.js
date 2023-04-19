
import axios from 'axios'
import { reactive } from "vue";
export const state = reactive({
    movieList: null,
    movie_base_URL: 'https://api.themoviedb.org/3/search/movie?api_key=edd3839ffafac261797d7e156df34aba&language=it-US&query=super&page=1&include_adult=true',
    popular_movies_URL: 'https://api.themoviedb.org/3/movie/popular?api_key=edd3839ffafac261797d7e156df34aba&language=it-IT&page=1',
    query: null,

    fetchMovies(URL) {
        axios
            .get(URL)
            .then(response => {
                this.movieList = response.data.results;
                console.log(this.movieList);
            })
            .catch(error => {
                console.error(error)
            })
    }

})


