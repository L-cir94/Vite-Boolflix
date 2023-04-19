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
        <div class="container_small pt-2">
            <MovieList></MovieList>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/partials/variables' as*;
</style>