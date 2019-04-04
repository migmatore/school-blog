<template>
    <div id="actions">
        <button class="btn-c btn-d" @click="deletePost">Delete</button><br>
        <button class="btn-c btn-p">Update</button>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    import { HTTP } from "@/http-common";

    @Component
    export default class ActionC extends Vue {
        @Prop()
        private postId!: string;

        public deletePost() {
            HTTP.delete('/api/delete', {
                    params: {
                        id: this.$route.params.id
                    }
                })
                .then(response => console.log(response))
                .catch(err => console.log(err));
        }
    }
</script>

<style lang="scss" scoped>
    @import "../style.scss";

    #actions {
        position: fixed;
        bottom: 0;
        right: 0;
        padding: 10px;
        margin-bottom: 15px;
        margin-right: 15px;
        border: 1px solid silver;

        button:first-child {
            margin-bottom: 10px;
            width: 100%;
        }
    }
</style>
