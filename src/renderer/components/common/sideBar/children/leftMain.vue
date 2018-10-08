<template id="leftMain">
    <div id="leftMainWrapper">
        <div id="leftMainWrapperTitle">
            <!--
                顶上那一栏，一共三个按钮
                第一个：假装是个返回钮。
                第二个：正在播放钮。
                第三个：设置页面钮。
            -->
            <div class="tab" title="伪·返回" @click="toggleTab('index')">
                <span class="iconfont icon-fanhui"></span>
            </div>
            <div class="tab" title="正在播放" @click="toggleTab('nowPlaying')">
                <span class="iconfont icon-erji1"></span>
            </div>
            <div class="tab" title="设置" @click="toggleTab('setting')">
                <span class="iconfont icon-xuanxiang1"></span>
            </div>
        </div>
        <hr style="height:1px;width:90%;
            margin:auto;border-width:0;
            color:#cccccc;background-color:#cccccc" />
        <div id="leftMainWrapperFunction">
            <prince :is="currentTab" keep-alive></prince>
        </div>
    </div>
    <!--
    子组件，显示不同的 tab
    is 特性动态绑定子组件
    keep-alive 将切换出去的组件保留在内存中
    
    之前会报错：Component template should 
    contain exactly one root element.
    是因为 vue.js 2.0要求每个template只能有一个根元素。
    可以在最外层包一个div来解决这个问题。
    -->
</template>

<script>
    // 引入子组件
    import index from './children/index';
    import nowPlaying from './children/nowPlaying';
    import setting from './children/setting';

    export default {
      name: 'left-main',
      data() {
        return {
          currentTab: 'index', // currentTab 用于标识当前触发的子组件
        };
      },
      // 声明子组件
      components: { index, nowPlaying, setting },
      methods: {
        toggleTab(tab) {
          this.currentTab = tab; // tab 为当前触发标签页的组件名
        },
      },
    };
</script>

<style scoped>
    #leftMainWrapper {
        border-radius: 10px;    /*圆角*/
        box-shadow: 0px 3px 6px 1px rgba(0,0,0,0.1);    /*投影效果*/
        border:0px; /*边框*/
        background-color: rgba(249,251,253,0.9);
        height: 322px;   /*高度*/
        width: 200px;   /*宽度*/
        cursor: pointer;    /*cursor属性定义了鼠标指针放在一个元素边界范围内时所用的光标形状*/
        margin: 10px;
    }
    #leftMainWrapper:hover {
        /*background-color: rgba(28,28,28,.1);*/
        box-shadow: 0px 3px 3px 1px rgba(255,255,255,0.1);
        transition: background-color .5s ease-in-out;
    }

    #leftMainWrapperTitle {
        height: 50px;
        padding: 10px;
    }

    .tab {
        float: left;
        width: 60px;
        text-align: center;
        line-height: 35px;
        margin: auto;
        font-size: 10px;
    }
    .tab:hover {
        text-shadow: 0px 0px 1px #282828;
        transition: background-color .5s ease-in-out;
    }

    .iconfont {
        /*所有按钮的设置*/
        font-size: 20px; /*大小*/
        color: #363636; /*颜色*/
    }

    .icon-fanhui { 
        /*返回按钮的具体设置*/
        font-size: 12px; /*大小*/
        color: #363636; /*颜色*/
    }
    .icon-xuanxiang1 { 
        /*选项按钮的具体设置*/
        font-size: 10px; /*大小*/
        color: #363636; /*颜色*/
    }

    #leftMainWrapperFunction {
        height: 262px;
        padding: 10px;
    }

</style>