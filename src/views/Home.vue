<template>
    <div class="home">
        <HeaderC/>
<!--        <div id="posts">-->
<!--            <div class="post"-->
<!--                 v-for="(post, index) in posts"-->
<!--                 :key="post.title + '_' + index">-->
<!--                <router-link :to="'/blog/' + post.id">-->
<!--                    <CardC :title="post.title"/>-->
<!--                </router-link>-->
<!--            </div>-->
<!--        </div>-->
        <div class="container">
            <div class="column">
                <div class="col-md-12"
                     v-for="(post, index) in posts"
                     :key="post.title + '_' + index">
                    <router-link :to="'/blog/post/' + post.id">
                        <CardC :title="post.title" :body="post.body"/>
                    </router-link>
                </div>
            </div>
        </div>
        <ActionC/>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    import HeaderC from "@/components/HeaderC.vue";
    import CardC from "@/components/CardC.vue"; // @ is an alias to /src
    import ActionC from "@/components/ActionC.vue";

    import { HTTP, HTTPS } from '@/http-common';

    @Component({
        components: {
            ActionC,
            CardC,
            HeaderC,
        },
    })
    export default class Home extends Vue {
        public posts: string[] = [];

        beforeCreate() {
            HTTPS.get('/api/posts')
                .then(response =>
                    this.posts = response.data["data"])
                .catch(err => console.log(err))
        }
    }
</script>

<style lang="scss">
    .link {
        text-decoration: none;
    }

    .container .column .col-sm-6 .col-md-12 a {
        text-decoration: none;
    }

    .col-md-6 {
        position: relative;
        top: 0;
    }
</style>
