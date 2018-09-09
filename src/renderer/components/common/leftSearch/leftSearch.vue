<template>
    <div class="leftSearchWrapper"  v-on:click="$emit('click')">
        <!-- <router-link to="/search" class="leftSearchCharacter" >搜索</router-link> -->
        <p class="leftSearchCharacter" v-if="!isSearching" @click="toSearch">搜索</p>
        <input type="text" 
            placeholder="搜索" 
            v-model="title" 
            @keypress="search" 
            v-else
        >
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "left-search",
        data() {
            return {
                isSearching:false
            }
        },
        computed:{
            ...mapGetters({
                token:'token',
            }),
            title:{
                get: function () {
                    return this.$store.getters['title']
                },
                set: function (val) {
                    if(!val) {
                        this.isSearching = false
                        this.$router.push('/')
                    }
                    this.$store.commit('SET_TITLE',val)
                }
            }
        },
        methods:{
            toSearch() {
                this.isSearching = true
            },
            search() {
                const page = 10
                const token = this.token
                this.$store.dispatch('search', {page, token} ).then(res => {
                    console.log(res)
                }).catch(error => {
                    console.log('搜索失败！错误原因：', error)
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .leftSearchWrapper {
        border-radius: 10px;    /*圆角*/
        box-shadow: 0px 3px 6px 1px rgba(0,0,0,0.1);    /*投影效果*/
        border:0px; /*边框*/
        background-color: rgba(0,0,0,0.9);
        height: 20px;   /*高度*/
        width: 200px;   /*宽度*/
        cursor: pointer;    /*cursor属性定义了鼠标指针放在一个元素边界范围内时所用的光标形状*/
        margin: 15px 10px 15px 10px;
        input {
            width: 100%;
            height: 100%;
        }
    }
    .leftSearchWrapper:hover {
        background-color: rgba(28,28,28,.1);
        transition: background-color .5s ease-in-out;
    }
    
    @import url(//fonts.googleapis.com/earlyaccess/notosanstc.css); /*外部导入字体*/
    .leftSearchCharacter {
        font-size: 10px; /*文字大小*/
        color: #ffffff; /*文字颜色*/
        font-family: "Noto Sans TC";    /*CSS3加入的自定义字体*/
        letter-spacing: 0.5px;   /*字间距*/
        /*以下部分保证了垂直水平居中*/
        height: 20px;
        line-height: 20px;
        margin: auto;
        text-align: center;
    }

</style>