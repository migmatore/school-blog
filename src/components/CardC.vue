<template>
    <div class="uk-card uk-card-default hover uk-card-body uk-width-1-2@m">
        <h3 class="uk-card-title">{{ title }}</h3>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator'

    @Component
    export default class CardC extends Vue {
        @Prop()
        private title!: String;
    }
</script>

<style lang="scss" scoped>
    .uk-card {
        margin-bottom: 20px;
    }

    .hover {
        &:hover {
            box-shadow: 0 5px 25px rgba(0, 0, 0, .1);
        }
    }
</style>
