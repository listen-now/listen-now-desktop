<template>
    <div class="leftLogoWrapper" href="https://github.com/listen-now/listen-now-desktop">
        <div width="50px" height="50px" style="float:left">
            <img src="../../../../assets/Listen-now_Logo.png" 
            alt="Listen-now" width="36px" height="36px"
            style="margin:7px" >
        </div>
        <div width="150px" height="50px" style="float:left">
            <p class="leftLogoCharacter">Listen-now</p>
        </div>
    </div>
</template>

<script>
    export default {
      name: 'left-logo',
    };
</script>

<style scoped>
    .leftLogoWrapper {
        border-radius: 10px;    /*圆角*/
        box-shadow: 0px 3px 6px 1px rgba(0,0,0,0.1);    /*投影效果*/
        border:0px; /*边框*/
        background-color: white;
        height: 50px;   /*高度*/
        width: 200px;   /*宽度*/
        cursor: pointer;    /*cursor属性定义了鼠标指针放在一个元素边界范围内时所用的光标形状*/
        margin: 0px 10px;
    }
    .leftLogoWrapper:hover {
        background-color: rgba(28,28,28,.1);
        transition: background-color .5s ease-in-out;
    }
    
    @import url(//fonts.googleapis.com/earlyaccess/notosanstc.css); /*外部导入字体*/
    .leftLogoCharacter {
        font-size: 24px; /*文字大小*/
        color: #282828; /*文字颜色*/
        font-family: "Noto Sans TC";    /*CSS3加入的自定义字体*/
        letter-spacing: 0.5px;   /*字间距*/
        /*以下部分保证了垂直水平居中*/
        height: 50px;
        line-height: 50px;
        margin: auto;
    }

</style>