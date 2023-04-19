<template>
    <header>
        <div class="container">
            <div class="row p-3 ">
                <div class="boolflix d-flex align-items-center justify-content-between">
                    <h1>BoolFlix</h1>
                    <div class="input_search d-flex align-items-center">
                        <i class="fa-solid fa-magnifying-glass me-3"></i>
                        <input class="w-100" type="text" placeholder="  Cerca qui">
                       
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "AppHeader",
    setup() {

        return {}
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as*;

h1 {
    color: red;
}
</style>