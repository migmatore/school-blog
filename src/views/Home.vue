<template>
    <div class="home">
        <HeaderC/>
        <div id="posts">
            <CardC v-for="post in posts"
                   :key="post.id"
                   :title="post.title"
                   @click.native="getId(post.id)"/>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HeaderC from "@/components/HeaderC.vue";
    import CardC from "@/components/CardC.vue"; // @ is an alias to /src

    import store from "@/store";

    import axios from 'axios'

    @Component({
        components: {
            CardC,
            HeaderC,
        },
    })
    export default class Home extends Vue {
        public posts: string[] = [];

        beforeCreate() {
            axios.get('https://school-api-app.herokuapp.com/api/posts')
                .then(response =>
                    this.posts = response.data["data"])
                .catch(err => console.log(err))
        }

        getId(id: any) {
            console.log(id)
        }
    }
</script>

<style lang="scss">
    #posts {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 30px;
    }
</style>
