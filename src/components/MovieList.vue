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
            <div class="card">

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>