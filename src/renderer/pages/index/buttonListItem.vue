<template>
    <div class="buttonList-item" v-on:click="$emit('click-button')">
        <div class="buttonList-avatar">
            <Avatar v-bind:icon="type" v-bind:style="{backgroundColor: backgroundColor}"/>
        </div>
        <div class="buttonList-text">
            {{text}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "button-list-item",
        props:['text', 'backgroundColor', 'type']
    }
</script>

<style scoped>
    .buttonList-item {
        margin-top:5px;
        height:45px;
    }
    .buttonList-item:hover {
        background-color: rgba(0, 0, 0, 0.1);
        transition:all .2s ease-in-out;
        cursor: pointer;
    }
    .buttonList-avatar {
        padding-top: 6px;
        width:50px;
        float:left;
        text-align: center;
    }
    .buttonList-item {
        width:100%;
    }
    .buttonList-avatar>span {
        /*此处强行打补丁*/
        color:white !important;
    }
    .buttonList-text {
        line-height: 45px;
        font-size: 18px;
    }
</style>