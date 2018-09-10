<template>
    <div>
        <div id="leftMainWrapperFunctionOption">我的收藏</div>
        <div id="leftMainWrapperFunctionOption">我的歌单</div>
        <div id="leftMainWrapperFunctionOption">播放历史</div>
        <div id="leftMainWrapperFunctionOption">消息</div>
    </div>
</template>

<script>
    export default {
        name: "left-main-user"
    }
</script>

<style scoped>
    #leftMainWrapperFunctionOption {
        font-size: 20px; /*文字大小*/
        color: #282828; /*文字颜色*/
        letter-spacing: 0.5px;   /*字间距*/
        text-align: center;
        /*以下部分保证了垂直水平居中*/
        height: 40px;
        line-height: 40px;
        margin: auto;
    }
    #leftMainWrapperFunctionOption:hover {
        text-shadow: 0px 0px 1px #282828;
        transition: background-color .5s ease-in-out;
    }
</style>