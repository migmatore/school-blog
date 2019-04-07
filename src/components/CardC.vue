<template>
<!--    <div class="uk-card uk-card-default hover uk-card-body ">-->
<!--        <h3 class="uk-card-title">{{ title }}</h3>-->
<!--    </div>-->
    <div class="uk-card uk-card-default hover">
        <div class="uk-card-header">
            <h3 class="uk-card-title">{{ title }}</h3>
        </div>
        <div class="uk-card-body">{{ body }}</div>
        <div class="uk-card-footer"></div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue } from 'vue-property-decorator'

    @Component
    export default class CardC extends Vue{
        @Prop()
        private title!: String;
        @Prop()
        private body!: String;
    }
</script>

<style lang="scss" scoped>
    .uk-card {
        margin-bottom: 20px;
        border-radius: 5px;
        text-align: center;

        .uk-card-header {
            cursor: default;

            .uk-card-title {
                cursor: pointer;
                word-wrap: break-word;
            }
        }

        .uk-card-body {
            text-align: left;
            cursor: default;
            word-wrap: break-word;
        }
        
        .uk-card-footer {
            cursor: default;
        }
    }

    .hover {
        transition: .3s;

        &:hover {
            box-shadow: 0 5px 25px rgba(0, 0, 0, .1);
        }
    }
</style>
