<template>
    <div>
        <div id="lyric">
            <p>歌词被吃掉惹_(:з)∠)_</p>
        </div>
        <hr style="height:1px;width:90%;
            margin:auto;border-width:0;
            color:#cccccc;background-color:#aaaaaa" />
        <div id="optionsArea">
            <p style="float: left;color: #cccccc">正在播放</p>
            <div id="option" title="分享">
                <span class="iconfont icon-faxian2"></span>
            </div>
            <div id="option" title="调整">
                <span class="iconfont icon-yinfu1"></span>
            </div>
            <div id="option" title="评论">
                <span class="iconfont icon-xiaoxi2"></span>
            </div>
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
    
    #lyric {
        padding: 0 0 0 5px;
        font-size: 12px; /*文字大小*/
        color: #acacac; /*文字颜色*/
        letter-spacing: 0.1px;   /*字间距*/
        text-align: center;
        /*以下部分保证了垂直水平居中*/
        height: 212px;
        line-height: 212px;
        margin: auto;
    }
    #lyric:hover {
        text-shadow: 0px 0px 1px #282828;
        transition: background-color .5s ease-in-out;
    }

    #optionsArea {
        height: 50px;
        width: 90%;
        line-height: 50px;
        margin: auto;
    }

    #option {
        color: #282828;
        float: right;
        margin: 0px 5px;
    }
    #option:hover {
        text-shadow: 0px 0px 1px #282828;
        transition: background-color .5s ease-in-out;
    }

</style>