<template>
    <div class="leftSearchWrapper"  v-on:click="$emit('click')">
        <!-- <router-link to="/search" class="leftSearchCharacter" >搜索</router-link> -->
        <p class="leftSearchCharacter" v-if="!isSearching" @click="toSearch">
            <span class="iconfont icon-sousuo"></span>
            &nbsp;&nbsp;搜索
        </p>
       
       <div v-else>
           <input type="text" 
                ref="searchbox"
                placeholder=" Searching..." 
                v-model="title" 
                @keypress="search"
            >
            <span class="cancel" @click="backtoIndex">取消</span>
       </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
      name: 'left-search',
      data() {
        return {
          isSearching: false,
        };
      },
      computed: {
        ...mapGetters({
          token: 'token',
        }),
        title: {
          get() {
            return this.$store.getters.title;
          },
          set(val) {
            this.$store.commit('SET_TITLE', val);
          },
        },
      },
      methods: {
        toSearch() {
          this.isSearching = true;
          this.$nextTick(() => {
            // 自动获取输入框焦点
            this.$refs.searchbox.focus();
          });
        },
        search() {
          const page = 10;
          const token = this.token;
          this.$store.dispatch('search', { page, token }).then((res) => {
            console.log(res);
          }).catch((error) => {
            console.log('搜索失败！错误原因：', error);
          });
        },
        backtoIndex() {
          this.isSearching = false;
          this.title = '';
          this.$router.back();
        },
      },
    };
</script>

<style lang="stylus" scoped>
    .leftSearchWrapper {
        position: relative;
        border-radius: 10px;    /*圆角*/
        box-shadow: 0px 3px 6px 1px rgba(0,0,0,0.1);    /*投影效果*/
        border:0px; /*边框*/
        background-color: rgba(0,0,0,0.9);
        height: 20px;   /*高度*/
        width: 200px;   /*宽度*/
        cursor: pointer;    /*cursor属性定义了鼠标指针放在一个元素边界范围内时所用的光标形状*/
        margin: 15px 10px 15px 10px;
        input {
            width: 65%;
            height: 100%;
            margin: 0 0 0 15px;
            background-color: rgba(0,0,0,0.1);
            border:none;
            outline:none;
            color: #aaaaaa;
            font-size: 10px;
            line-height: 20px;
        }
        .cancel {
            position: absolute;
            right: 10px;
            top: 0;
            line-height: 20px;
        }
    }
    .leftSearchWrapper:hover {
        box-shadow: 0px 2px 6px 1px rgba(0,0,0,0.2);
        transition: background-color .5s ease-in-out;
    }
    
    .icon-sousuo {
        font-size: 10px;
        color: #fefefe;
    }

    .leftSearchCharacter {
        font-size: 10px; /*文字大小*/
        color: #aaaaaa; /*文字颜色*/
        letter-spacing: 0.5px;   /*字间距*/
        /*以下部分保证了垂直水平居中*/
        height: 20px;
        line-height: 20px;
        margin: auto;
        padding: 0 0 0 10px;
        text-align: left;
    }

</style>