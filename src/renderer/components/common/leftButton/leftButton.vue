<template>
    <div class="leftButtonWrapper"
         :style="{width:size, height:size}"
         v-on:click="$emit('click-button')">
        <Icon v-bind:type="type" v-bind:size="size" v-bind:color="color"/>
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
    }
    .leftButtonWrapper:hover {
        background-color: rgba(100,100,100,.1);
        transition: background-color .5s ease-in-out;
    }
</style>