<template>
    <div>
        <div id="leftMainOption">
            <span class="iconfont icon-kongjian"></span>
            背景设置
        </div>
        <div id="leftMainOption">
            <span class="iconfont icon-gedan"></span>
            账户设置
        </div>
        <div id="leftMainOption">
            <span class="iconfont icon-erji2"></span>
            播放设置
        </div>
        <div id="leftMainOption">
            <span class="iconfont icon-xiaoxi1"></span>
            关于我们
        </div>
    </div>
</template>

<script>
    export default {
      name: 'left-main-setting',
    };
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