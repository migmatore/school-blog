<template>
    <div id="detail">
        <HeaderC/>
        <div class="title">
            <h1>{{ postDetail.title }}</h1>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    import HeaderC from "@/components/HeaderC.vue";

    import store from "@/store";

    import axios from 'axios';

    @Component({
        components: {
            HeaderC
        }
    })
    export default class PostDetail extends Vue {
        public postDetail: string[] = [];

        beforeCreate() {
            axios.get(store.state.baseUrl + '/api/post', {
                params: {
                    id: this.$route.params.slug
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
