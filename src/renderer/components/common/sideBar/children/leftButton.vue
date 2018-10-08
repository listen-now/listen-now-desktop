<template>
    <div class="leftButtonWrapper"
         :title="title"
         :style="{width:size + 'px', height:size + 'px'}"
         v-on:click="$emit('click')">
        <Icon v-bind:type="type" v-bind:size="size - 8" v-bind:color="color"/>
    </div>
</template>

<script>
    export default {
      name: 'left-button',
      props: ['type', 'size', 'color', 'title'],
    };
</script>

<style scoped>
    .leftButtonWrapper {
        border-radius: 50%;
        border:0px;
        background-color: white;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        cursor: pointer;
        text-align: center;
        padding:2px;
    }
    .leftButtonWrapper:hover {
        background-color: rgb(193, 193, 193);
        transition: background-color .5s ease-in-out;
    }
</style>