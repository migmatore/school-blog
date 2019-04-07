<template>
    <div id="actions">
        <button class="btn-c btn-d" @click="deletePost">Delete</button><br>
        <button class="btn-c btn-p">Update</button>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    import { HTTP, HTTPS } from "@/http-common";

    @Component
    export default class ActionC extends Vue {
        @Prop()
        private postId!: string;

        public deletePost() {
            HTTPS.delete('/api/delete', {
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
        padding: 25px;
        margin-bottom: 25px;
        margin-right: 25px;
        border: 1px solid white;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, .08);
        background: white;
        transition: .3s ease-in-out;

        &:hover {
            box-shadow: 0 5px 25px rgba(0, 0, 0, .1);
        }

        button:first-child {
            margin-bottom: 10px;
            width: 100%;
        }
    }
</style>
