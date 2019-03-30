<template>
    <div id="create">
        <HeaderC/>
        <form method="post">
            <label>
                Title:
                <input type="text" name="title" placeholder="title">
            </label>
        </form>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import HeaderC from "@/components/HeaderC.vue";
    @Component({
        components: {HeaderC}
    })
    export default class CreatePost extends Vue {

    }
</script>

<style lang="scss">

</style>
