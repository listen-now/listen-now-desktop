<template>
    <div class="buttonListWrap"  v-bind:style="{width: width}">
        <div class="buttonListTitle">
            <span>{{title}}</span>
        </div>
        <div class="buttonListSpan"></div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "button-list",
        props:['title', 'width'],
    }
</script>

<style scoped>
    .buttonListWrap {
        width:200px;
    }
    .buttonListTitle {
        height: 40px;
        font-size:20px;
        padding-top: 5px;
        padding-left: 5px;
    }
    /*.buttonListTitle>span {*/
        /*position: relative;*/
        /*left:10px;*/
    /*}*/
    .buttonListSpan {
        height: 1px;
        background-color: rgb(36, 34, 45);
        box-shadow: 1px 1px 1px rgba(36, 34, 45, 0.3);
    }
</style>