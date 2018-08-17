<template>
    <div class="albumListWrap"  v-bind:style="{width: width}">
        <div class="albumListTitle">
            <span>{{title}}</span>
        </div>
        <div class="albumListSpan"></div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "album-list",
        props:['title', 'width'],
    }
</script>

<style scoped>
    .albumListWrap {
        width:633px;
    }
    .albumListTitle {
        height: 32px;
        font-size: 16.75px;
    }
    .albumListSpan {
        height: 1pt;
        width: 100%;
        background-color: rgb(14, 14, 14);
        box-shadow: 0px 0px 1px rgba(36, 34, 45, 0.3);
    }
    .albumListWrap:after {
        clear:both;
        content:'';
        display:block;
        width:0;
        height:0;
        visibility:hidden;
    }
</style>