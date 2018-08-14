<template>
    <div class="leftButtonWrapper"
         :style="{width:size + 'px', height:size + 'px'}"
         v-on:click="$emit('click-button')">
        <Icon v-bind:type="type" v-bind:size="size - 12" v-bind:color="color"/>
    </div>
</template>

<script>
    export default {
        name: "left-button",
        props:['type', 'size', 'color'],
    }
</script>

<style scoped>
    .leftButtonWrapper {
        border-radius: 50%;
        border:0px;
        background-color: white;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        cursor: pointer;
        text-align: center;
        padding:6px;
    }
    .leftButtonWrapper:hover {
        background-color: rgba(100,100,100,.1);
        transition: background-color .5s ease-in-out;
    }
</style>