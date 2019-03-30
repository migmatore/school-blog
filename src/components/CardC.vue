<template>
    <div class="uk-card uk-card-default hover uk-card-body ">
        <h3 class="uk-card-title">{{ title }}</h3>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue } from 'vue-property-decorator'

    @Component
    export default class CardC extends Vue{
        @Prop()
        private title!: String;
    }
</script>

<style lang="scss" scoped>
    .uk-card {
        margin-bottom: 20px;
        border-radius: 5px;
        text-align: center;
    }

    .hover {
        transition: .3s;

        &:hover {
            box-shadow: 0 5px 25px rgba(0, 0, 0, .1);
        }
    }
</style>
