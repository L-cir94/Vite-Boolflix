<script>
import LangFlag from 'vue-lang-code-flags';
import { state } from "../state"
import {
    VueCollapsiblePanelGroup,
    VueCollapsiblePanel,
} from '@dafcoe/vue-collapsible-panel'
export default {
    name: "MovieList",
    components: {
        LangFlag,
        VueCollapsiblePanelGroup,
        VueCollapsiblePanel,
    },
    data() {
        return {
            state,

        }
    }, methods: {
        getImageUrl(name) {
            return new URL(`../assets/img/${name}`, import.meta.url).href
        },
        setVote(vote) {
            if (vote) {
                let normalizedVote = Math.ceil(vote / 2);
                let stars = [];
                let counter = 0;
                for (let i = 0; i < 5; i++) {
                    if (counter < normalizedVote) {
                        stars.push('fa-solid fa-star');
                    } else {
                        stars.push('fa-regular fa-star');
                    }
                    counter++
                }
                return stars;
            }
        },
    },
    mounted() {
        this.state.fetchMovies(state.movieBaseUrl)
    }
}
</script>

<template>
    <div class="col-3 g-3" v-for="movie in state.results">
        <div class="card h-100 p-4 text-center d-flex justify-content-space-between">
            <h5 class="text-center">Titolo</h5>
            <p class="text-center">{{ movie.title }}</p>
            <div wid class="copertina">
                <img v-if="movie.poster_path === null" class="img-fluid" src="../assets/img/2748558.png" alt="">
                <img v-else class="img-fluid" :src="`${state.postPic}${movie.poster_path}`" alt="">
            </div>
            <h5 class="text-center">Titolo originale</h5>
            <p class="text-center">{{ movie.original_title }}</p>
            <h5 class="text-center">Lingua originale</h5>
            <p class="text-center"><lang-flag :iso="movie.original_language" /></p>
            <h5 class="text-center">Voto</h5>
            <p class="text-center">{{ movie.vote_average }}</p>
            <span class="overview text-center">{{ movie.overview }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>