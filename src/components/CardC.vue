<template>
<!--    <div class="uk-card uk-card-default hover uk-card-body ">-->
<!--        <h3 class="uk-card-title">{{ title }}</h3>-->
<!--    </div>-->
    <div class="uk-card uk-card-default hover">
        <div class="uk-card-header">
            <h3 class="uk-card-title">{{ title }}</h3>
        </div>
        <div class="uk-card-body">
            <div class="container">
                <div class="column">
                    <div class="col-sm-12col-md-12">
                        <img src="https://cdn.oboi7.com/8ddd6d3d36aa610d0e108d63df5161096586a331/oblaka-pejzazhi-derevya-trava-ozera-nebo.jpg" alt="">
                    </div>
                    <div class="col-sm-12 col-md-12">
                        <p>{{ body }}</p>
                    </div>
                </div>
            </div>
<!--            <div class="img-div">-->
<!--                -->
<!--            </div>-->
<!--            <div class="body-div">-->
<!--                -->
<!--            </div>-->
        </div>
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
            //display: inline-block;

            img {
                margin-bottom: 10px;
            }

            .img-div {
                /*float: left;*/
                /*width: content-box;*/

                /*img {*/
                /*    width: 50%;*/
                /*    height: 50%;*/
                /*    float: left;*/
                /*    margin-right: 15px;*/
                /*    margin-bottom: 5px;*/
                /*}*/
            }
            
            /*.body-div {*/
            /*    position: relative;*/
            /*    float: right;*/
            /*}*/
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
