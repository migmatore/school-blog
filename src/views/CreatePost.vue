<template>
    <div id="create">
        <HeaderC/>
<!--        <form method="post">-->
<!--            <div class="container">-->
<!--                <div class="column">-->
<!--                    <div class="col-sm-12">-->
<!--                        <p class="title">Title:</p>-->
<!--                        <input type="text" name="title" placeholder="title">-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </form>-->
        <div class="create">
            <form method="post" @submit="this.createPost">
                <p>Title: </p>
                <input type="text" v-model="title" placeholder="title"><br>
                <button class="btn-c btn-s">Create</button>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'

    import HeaderC from "@/components/HeaderC.vue";

    import {HTTP, HTTPS} from "@/http-common";

    @Component({
        components: {HeaderC}
    })
    export default class CreatePost extends Vue {
        private static valid: boolean = true;

        title: string = '';

        public createPost(e: any) {
            e.preventDefault();

            const formData = new FormData();

            formData.append("title", this.title);

            HTTP.post('/api/post', formData)
                .then(response => console.log(response))
                .catch(err => console.log(err))
        }
    }
</script>

<style lang="scss">
    @import "../style.scss";

    .create {
        display: flex;
        justify-content: center;
        align-items: center;

        input[type="text"] {
            outline: 0;
            padding: 5px;
            margin-bottom: 15px;
            border: none;
            border-radius: 5px;
            box-shadow: 0 2px 10px #c8e6c9;
            transition: .3s;

            &:focus {
                box-shadow:  0 2px 15px #c8e6c9;
            }
        }
    }

    .title {
        margin-bottom: 5px;
    }
</style>
