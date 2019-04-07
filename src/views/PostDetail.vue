<template>
    <div id="detail">
        <HeaderC/>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="title">
                        <h1>{{ postDetail.title }}</h1>
                    </div>
                    <div class="body">
                        <p>{{ postDetail.body }}</p>
                    </div>
                </div>
            </div>
        </div>
        <ActionC/>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    import HeaderC from "@/components/HeaderC.vue";

    import { HTTP, HTTPS } from "@/http-common";
    import ActionC from "@/components/ActionC.vue";

    @Component({
        components: {
            ActionC,
            HeaderC
        }
    })
    export default class PostDetail extends Vue {
        public postDetail: string[] = [];

        beforeCreate() {
            HTTPS.get('/api/post', {
                    params: {
                        id: this.$route.params.id
                    }
                })
                .then(response =>
                    this.postDetail = response.data["data"])
                .catch(err => console.log(err))
        }
    }
</script>

<style scoped>
    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .body {
        word-wrap: break-word;
    }
</style>
