<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-3">
            </div>
            <div class="col-lg-6">
                <navbar></navbar>
            </div>
            <div class="col-3">
            </div>
        </div>
    </div>
</template>

<script>
    import navbar from './navbar.vue'

    export default {
        name: 'Homepage',
        components: {
            navbar
        }

    }
</script>
<style></style>