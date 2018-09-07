<template>
    <div class="music-list">
        <music-list-item isheader />
        <div class="music-list-items" :style={height:height}>
            <music-list-item v-for="(item, index) in musicList" :item="item" :index="index" :key="item.id"/>
        </div>
    </div>
</template>

<script>
import musicListItem from '../musicListItem/musicListItem'

export default {
    name: "music-list",
    props:{
        height:{
            type:String,
            default:"377px"
        },
        musicList:{
            type:Array,
        }
    },
    data () {
        return {
            // musicList:[]
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

        }
    }
}
</script>

<style lang="stylus" scoped>
.music-list {
    background-color:#fff;/* 明天装个sass-loader*/
    width: 910px;
    height:407px;
    padding:0 10px;
    .music-list-items {
        height:377px;
        overflow:auto;
    }
    .music-list-items::-webkit-scrollbar {
        display:none;
    }
}

</style>