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
      name: 'button-list',
      props: ['title', 'width'],
    };
</script>

<style scoped>
    .buttonListWrap {
        width: 100%;
    }
    .buttonListTitle {
        height: 32px;
        font-size: 17.65px;
        color: #070707;
    }
    /*.buttonListTitle>span {*/
        /*position: relative;*/
        /*left:10px;*/
    /*}*/
    .buttonListSpan {
        height: 1pt;
        background-color: rgb(14, 14, 14);
        box-shadow: 0px 0px 1px rgba(36, 34, 45, 0.3);
    }
    .buttonListWrap:after {
        clear:both;
        content:'';
        display:block;
        width:0;
        height:0;
        visibility:hidden;
    }
</style>