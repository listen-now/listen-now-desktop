<template>
    <div class="leftMainWrapper">
        <p class="leftMainCharacter">欢迎！</p>
    </div>
</template>

<script>
    export default {
        name: "left-main"
    }
</script>

<style scoped>
    .leftMainWrapper {
        border-radius: 10px;    /*圆角*/
        box-shadow: 0px 3px 6px 1px rgba(0,0,0,0.1);    /*投影效果*/
        border:0px; /*边框*/
        background-color: rgba(249,251,253,0.9);
        height: 322px;   /*高度*/
        width: 200px;   /*宽度*/
        cursor: pointer;    /*cursor属性定义了鼠标指针放在一个元素边界范围内时所用的光标形状*/
        margin: 10px;
    }
    .leftMainWrapper:hover {
        background-color: rgba(28,28,28,.1);
        transition: background-color .5s ease-in-out;
    }
    
    @import url(//fonts.googleapis.com/earlyaccess/notosanstc.css); /*外部导入字体*/
    .leftMainCharacter {
        font-size: 32px; /*文字大小*/
        color: #282828; /*文字颜色*/
        font-family: "Noto Sans TC";    /*CSS3加入的自定义字体*/
        letter-spacing: 0.5px;   /*字间距*/
        text-align: center;
        /*以下部分保证了垂直水平居中*/
        height: 322px;
        line-height: 322px;
        margin: auto;
    }

</style>