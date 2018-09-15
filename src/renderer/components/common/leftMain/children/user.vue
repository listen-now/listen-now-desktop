<template>
    <div>
        <div id="leftMainOption">
            <span class="iconfont icon-faxian2"></span>
            我的收藏
        </div>
        <div id="leftMainOption">
            <span class="iconfont icon-yinfu1"></span>
            我的歌单
        </div>
        <div id="leftMainOption">
            <span class="iconfont icon-erji2"></span>
            播放历史
        </div>
        <div id="leftMainOption">
            <span class="iconfont icon-xiaoxi2"></span>
            消息
        </div>
    </div>
</template>

<script>
    export default {
        name: "left-main-user"
    }
</script>

<style scoped>
    .iconfont {
        font-size: 16px;
    }
    
    #leftMainOption {
        padding: 0 0 0 10px;
        font-size: 16px; /*文字大小*/
        color: #282828; /*文字颜色*/
        letter-spacing: 0.5px;   /*字间距*/
        text-align: left;
        /*以下部分保证了垂直水平居中*/
        height: 36px;
        line-height: 36x;
        margin: auto;
    }
    #leftMainOption:hover {
        text-shadow: 0px 0px 1px #282828;
        transition: background-color .5s ease-in-out;
    }
</style>