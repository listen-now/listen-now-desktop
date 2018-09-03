<template>
    <div class="albumList-item" v-on:click="$emit('click-button')" >
        <!-- v-bind:style="{backgroundColor: backgroundColor}" -->
        <div class="albumListItemFront">
            <img src="../../assets/DEMO-3.jpg" alt="" style="width:85px;height:85px;">
        </div>
        <div class="albumListItemBack">
            <div class="albumListItemMessage">
                <p>1234</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "album-list-item",
        props:['text', 'backgroundColor', 'type']
    }
</script>

<style scoped>
    .albumList-item {
        transform-style: preserve-3d;
        width:85px;
        height:85px;
        float:left;
        margin-top:10px;
        margin-right:10px;
        perspective: 800px;
    }
    .albumListItemFront,.albumListItemBack {
        position: absolute;
        transition: all 1s;
    }
    .albumListItemBack {
        transform: rotateY(180deg);
        background-color: rgba(72, 72, 72, 0.8);
        width:85px;
        height: 85px;
    }
    .albumList-item:hover .albumListItemFront{
        transform: rotateY(180deg);
    }
    .albumList-item:hover .albumListItemBack{
        transform: rotateY(360deg);
    }
    .albumList-item:nth-child(7n) {
        margin-right:0px;
    }
    .albumList-avatar>span {
        /*此处强行打补丁*/
        color:white !important;
    }
    .albumList-text {
        line-height: 20px;
        font-size: 14px;
        width:100%;
        text-align: center;
        color:white;
    }
    .albumListItemMessage {
        color:white;
    }
</style>