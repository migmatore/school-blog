<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <div id="posts">
            <CardC class="card"
                   v-for="post in posts"
                   :title="post.title"/>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import CardC from "@/components/CardC.vue";

    import store from "@/store"; // @ is an alias to /src

    import axios from 'axios';

    @Component({
        components: {
            CardC,
        },
    })
    export default class Home extends Vue {
        posts: string[] = [];

        beforeCreate () {
            axios.get(store.state.url + "/api/posts")
                .then(result =>
                    this.posts = result.data["data"])
                .catch(err => console.log(err))
        }
    }
</script>

<style lang="scss">
    #posts {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>
