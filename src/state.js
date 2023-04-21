
import axios from 'axios'
import { reactive } from "vue";
export const state = reactive({
    searchText: '',
    error: null,
    loading: true,
    results: null,
    pagination: null,
    movieBaseUrl:'https://api.themoviedb.org/3/',
    apiKey:'edd3839ffafac261797d7e156df34aba',
    resourcePath: 'search/movie',

    fetchMovies(URL) {
        const url = `${this.movieBaseUrl + this.resourcePath}?api_key=${this.apiKey}&query=${this.searchText}`
        console.log(url);
        axios
            .get(URL)
            .then(response => {
                console.log(response.data.results);
                this.results = response.data.results;
                this.loading = false
            })
            .catch(error => {
                console.log(error.message)
            })
    }

})


