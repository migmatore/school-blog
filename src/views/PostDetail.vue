<template>
    <div id="detail">
        <HeaderC/>
        <div class="title">
            <h1>{{ postDetail.title }}</h1>
        </div>
        <ActionC/>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    import HeaderC from "@/components/HeaderC.vue";

    import { HTTP } from "@/http-common";
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
            HTTP.get('/api/post', {
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
        text-align: center;
    }
</style>
