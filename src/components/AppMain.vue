<script>
import MovieList from "./MovieList.vue"
import { state } from '../state';
export default {
    name: "AppMain",
    components: {
        MovieList
    },
    setup() {

        return {
            state
        }
    }
}
</script>

<template>
    <main>
        <div class="container pt-2">
            <div class="row d-flex flex-wrap">
                <MovieList></MovieList>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/partials/variables' as*;
</style>