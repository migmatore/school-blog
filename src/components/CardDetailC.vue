<template>
    {{ post.title }}
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class CardDetailC extends Vue {
        @Prop()
        public post!: object;
    }
</script>

<style scoped>

</style>
