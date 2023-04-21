<script>
import { state } from "../state"
export default {
    name: "MovieList",
    data() {
        return {
            state
        }
    },
    mounted() {
        this.state.fetchMovies(state.movieBaseUrl)
    }
}
</script>

<template>
    <div class="col-4 g-3" v-for="movie in state.results">
        <div class="card h-100 p-4 d-flex justify-content-start">
            <h3>Titolo:</h3><p>{{ movie.title }}</p>
            <h3>Titolo originale:</h3><p>{{ movie.original_title }}</p>
            <h3>Lingua originale:</h3><p>{{ movie.original_language }}</p>
            <h3>Voto:</h3><p>{{ movie.vote_average }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>