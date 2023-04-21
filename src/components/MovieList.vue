<script>
import LangFlag from 'vue-lang-code-flags';
import { state } from "../state"
export default {
    name: "MovieList",
    components: {
    LangFlag,
    },
    data() {
        return {
            state,

        }
    },methods:{

    },
    mounted() {
        this.state.fetchMovies(state.movieBaseUrl)
    }
}
</script>

<template>
<!--      <span>Total movies: <strong>{{ state.results.lenght }}</strong></span> -->
    <div class="col-4 g-3" v-for="movie in state.results">
        <div class="card h-100 p-4 d-flex justify-content-start">
            <h5 class="text-center">Titolo</h5><p class="text-center">{{ movie.title }}</p>
            <h5 class="text-center">Titolo originale</h5><p class="text-center">{{ movie.original_title }}</p>
            <h5 class="text-center">Lingua originale</h5><p class="text-center">{{ movie.original_language }}</p><LangFlag>{{ movie.original_language }}</LangFlag>
            <h5 class="text-center">Voto</h5><p class="text-center">{{ movie.vote_average }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>