<template id="leftMain">
    <div class="leftMainWrapper">
        <div id="leftMainWrapperTitle">
            <div class="tab" @click="toggleTab('index')"><a>首页</a></div>
            <div class="tab" @click="toggleTab('user')"><a>我的</a></div>
            <div class="tab" @click="toggleTab('setting')"><a>设定</a></div>
        </div>
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
    import user from './children/user';
    import setting from './children/setting';

    export default {
        name: "left-main",
        data () {
            return {
                currentTab: 'index'  // currentTab 用于标识当前触发的子组件
            };
        },
        // 声明子组件
        components: { index,user,setting },
        methods:{
            toggleTab: function(tab) {
                this.currentTab = tab;  // tab 为当前触发标签页的组件名
            }
        }
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
        /*background-color: rgba(28,28,28,.1);*/
        box-shadow: 0px 3px 3px 1px rgba(255,255,255,0.1);
        transition: background-color .5s ease-in-out;
    }

    #leftMainWrapperTitle {
        border-radius: 10px 10px 0px 0px;
        height: 50px;
        background-color: #dddddd;
        box-shadow: 0px 2px 4px 1px rgba(0,0,0,0.2);
        padding: 10px;
    }

    .tab {
        float: left;
        width: 60px;
        text-align: center;
        line-height: 40px;
        margin: auto;
        background-color: #dddddd;
    }
    .tab:hover {
        text-shadow: 0px 0px 1px #282828;
        transition: background-color .5s ease-in-out;
    }

    #leftMainWrapperFunction {
        height: 262px;
        padding: 10px;
    }

</style>