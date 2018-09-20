<template>
    <div class="music-list" :style="{height:height}">
        <music-list-item isheader />
        <div class="music-list-items">
            <music-list-item v-for="(item, index) in musicList" 
                class="music-list__item"
                :item="item" 
                :index="index" 
                :key="item.id"
                :class="{'bottom-border': index === musicList.length - 1 && !(index % 2 === 0)}"
                @dblclick="playOrstop(item)"
            />
        </div>
    </div>
</template>

<script>
import musicListItem from '../musicListItem/musicListItem'
import Api from '../../../renderUtil/api.js'

export default {
    name: "music-list",
    props:{
        height:{
            type:String,
            default:"377px"
        },
        musicList:{
            type:Array,
            default:[]
        }
    },
    data () {
        return {
        }
    },
    components:{
        musicListItem
    },
    methods:{

        /**
         * 当显示的文字内容过长时滚动
         */
        scroll () {

        },
        //双击播放或者停止
        playOrstop (item) {
            console.log("双击歌曲");
            console.log(item);
            Api.setAuth(window.localStorage.getItem('token'));
            Api.api.getMusicById(item.id, item.platform).then(res => {
                this.$store.commit('SET_PLAYINGMUSIC', res);
                this.$store.commit('SET_MUSICLIST', [res]);
                console.log(res);
            })
            //this.$emit('playOrstop', item)
        }
    }
}
</script>

<style lang="stylus" scoped>
.music-list {
    background-color:#fff;
    width: 910px;
    height:407px;
    padding:0 10px;
    .music-list-items {
        height:377px;
        overflow: auto;
        .bottom-border {
            border-bottom: 1px solid #eee;
        }
        // .music-list__item {
        //     &:hover {
        //         background-color : rgba(0, 0, 0, 0.5);
        //     }
        // }
    }
    .music-list-items::-webkit-scrollbar {
        display:none;
    }
}

</style>