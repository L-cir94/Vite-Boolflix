<script>
import { state } from "../state"
export default {
    name: "MovieList",
    props: ['movie'],
    data() {
        return {
            state
        }
    },

    
}
</script>

<template>
    <div class="row">
            <div class="col-2">
                <div class="movie my-5">
                    <h3>{{movie.title}}</h3>
                    <h3>{{movie.original_title}}</h3>
                    <h3>{{movie.original_language}}</h3>
                    <h3>{{movie.vote_average}}</h3>
                </div>
            </div>
        <div class="col-2">
            <div class="card">

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>