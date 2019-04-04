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
                <input type="text" :class="this.inputClass" v-model="title" placeholder="title"><br>
                <textarea v-model="body" placeholder="body"></textarea><br>
                <div class="button-div">
                    <button class="btn-c btn-s">Create</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator'

    import HeaderC from "@/components/HeaderC.vue";

    import {HTTP, HTTPS} from "@/http-common";

    @Component({
        components: {HeaderC}
    })
    export default class CreatePost extends Vue {
        private valid: boolean = true;

        title: string = '';
        body: string = '';

        inputClass: string = "input-c";

        beforeCreate() {

        }

        public createPost(e: any) {
            e.preventDefault();

            const formData = new FormData();

            if (this.isValid()) {
                formData.append("title", this.title);
                formData.append("body", this.body);

                HTTP.post('/api/post', formData)
                    .then(response => console.log(response))
                    .catch(err => console.log(err));
            } else {
                this.inputClass = "input-c input-e";
            }
        }

        public isValid() {
            return this.title && this.body != "";
        }

        @Watch("title")
        public onTitleChange(value: string) {
            if (value != '') {
                this.inputClass = "input-c input-s"
            } else if (value == '') {
                this.inputClass = "input-c input-e"
            }
        }

        @Watch("body")
        public onBodyChange(value: string) {

        }
    }
</script>

<style lang="scss">
    @import "../style.scss";

    .create {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 50px 20px 20px;

        input[type="text"] {
            width: 400px
        }

        .button-div {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 15px;
        }
    }
</style>
