<template>
    <div id="header">
        <nav class="uk-navbar-container" uk-navbar uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
            <div class="uk-navbar-left">
                <ul class="uk-navbar-nav">
                    <li class="uk-active">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/blog/create">Create post</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'

    @Component
    export default class HeaderC extends Vue { }
</script>

<style lang="scss" scoped>
    .uk-navbar-container {
        background: white;
        box-shadow: 0 5px 20px rgba(0, 0, 0, .08);

    }

    #header {
        margin-bottom: 20px;
    }
</style>
