<template>
    <div>
        <div id="leftMainWrapperFunctionOption">背景设置</div>
        <div id="leftMainWrapperFunctionOption">账户设置</div>
        <div id="leftMainWrapperFunctionOption">播放设置</div>
        <div id="leftMainWrapperFunctionOption">关于我们</div>
    </div>
</template>

<script>
    export default {
        name: "left-main-setting"
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