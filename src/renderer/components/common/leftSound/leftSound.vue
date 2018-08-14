<template>
    <div :style="{width:width}" class="leftSoundWrapper">
        <div class="decrease-button">-</div>
        <div class="increase-button">+</div>
        <div style="width:calc(100% - 30px);margin-left:15px;margin-right: 15px;">
            <Slider :tip-format="hideFormat" input-size="small"></Slider>
        </div>
    </div>
</template>

<script>
    export default {
        name: "left-sound",
        props:['width'],
        methods:{
            hideFormat () {
                return null;
            }
        }
    }
</script>

<style>
    .leftSoundWrapper {
        border-radius:20px;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        border:1px solid rgba(0, 0, 0, 0.1);
        height: 24px;
        padding-top: 0px;
        padding-bottom: 0px;
        padding-left: 2px;
        padding-right: 2px;
    }
    .ivu-slider-button {
        background-color: rgba(0, 0, 0, 0.8);
        border:0px;
    }
    .ivu-slider-bar {
        background-color: darkgrey;
    }
    .ivu-slider-wrap {
        margin:10px 0;
    }
    .decrease-button {
        width:15px;
        text-align: center;
        float:left;
        height: 24px;
        line-height: 24px;
        margin:0 auto;
        cursor: pointer;
    }
    .ivu-slider-button-wrap {
        top:-7px;
    }
    .ivu-slider-button {
        width:5px;
        height: 5px;
    }
    .decrease-button:hover {
        transform: scale(2,2);
        transition: all .4s;
    }
    .increase-button {
        width:15px;
        text-align: center;
        float:right;
        height: 24px;
        line-height: 24px;
        margin:0 auto;
        cursor: pointer;
    }
    .increase-button:hover {
        transform: scale(2,2);
        transition: all .4s;
    }
</style>