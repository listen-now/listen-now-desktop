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
        width:700px;
    }
    .albumListTitle {
        height: 40px;
        font-size:20px;
        padding-top: 5px;
        padding-left: 5px;
    }
    .albumListSpan {
        height: 1px;
        background-color: rgb(36, 34, 45);
        box-shadow: 1px 1px 1px rgba(36, 34, 45, 0.3);
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