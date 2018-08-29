<template>
    <div class="music-list">
        <music-list-item isheader />
        <div class="music-list-items">
            <music-list-item v-for="(item, index) in musiclist" :item="item" :index="index" :key="item.id"/>
        </div>
    </div>
</template>

<script>
import musicListItem from '../musicListItem/musicListItem'

export default {
    name: "music-list",
    data () {
        return {
            musiclist:[
                {id:'1', islike:true, name:'夏天要吃瓜', singer:'astar', album:'astar的夏天', source:'网易云', duration:'120s', playamount:100},
                {id:'2', islike:false, name:'冬天穿长袖', singer:'astar', album:'astar的夏天', source:'网易云', duration:'120s', playamount:100},
                {id:'4', islike:false, name:'冬天穿长袖', singer:'astar', album:'astar的夏天', source:'网易云', duration:'120s', playamount:100},
                {id:'5', islike:false, name:'冬天穿长袖', singer:'astar', album:'astar的夏天', source:'网易云', duration:'120s', playamount:100},
                {id:'6', islike:false, name:'冬天穿长袖', singer:'astar', album:'astar的夏天', source:'网易云', duration:'120s', playamount:100},
                {id:'7', islike:false, name:'冬天穿长袖', singer:'astar', album:'astar的夏天', source:'网易云', duration:'120s', playamount:100},
                {id:'8', islike:false, name:'冬天穿长袖', singer:'astar', album:'astar的夏天', source:'网易云', duration:'120s', playamount:100},
                {id:'9', islike:false, name:'冬天穿长袖', singer:'astar', album:'astar的夏天', source:'网易云', duration:'120s', playamount:100},
                {id:'10', islike:true, name:'冬天穿长袖', singer:'astar', album:'astar的夏天', source:'网易云', duration:'120s', playamount:100},
                {id:'8', islike:false, name:'冬天穿长袖', singer:'astar', album:'astar的夏天', source:'网易云', duration:'120s', playamount:100},
                {id:'9', islike:false, name:'冬天穿长袖', singer:'astar', album:'astar的夏天', source:'网易云', duration:'120s', playamount:100},
                {id:'10', islike:true, name:'冬天穿长袖', singer:'astar', album:'astar的夏天', source:'网易云', duration:'120s', playamount:100},
                {id:'8', islike:false, name:'冬天穿长袖', singer:'astar', album:'astar的夏天', source:'网易云', duration:'120s', playamount:100},
                {id:'9', islike:false, name:'冬天穿长袖', singer:'astar', album:'astar的夏天', source:'网易云', duration:'120s', playamount:100},
                {id:'10', islike:true, name:'冬天穿长袖', singer:'astar', album:'astar的夏天', source:'网易云', duration:'120s', playamount:100},
                {id:'10', islike:true, name:'冬天穿长袖', singer:'astar', album:'astar的夏天', source:'网易云', duration:'120s', playamount:100},
                {id:'10', islike:true, name:'冬天穿长袖', singer:'astar', album:'astar的夏天', source:'网易云', duration:'120s', playamount:100},
                {id:'10', islike:true, name:'冬天穿长袖', singer:'astar', album:'astar的夏天', source:'网易云', duration:'120s', playamount:100},

            ]
        }
    },
    components:{
        musicListItem
    }
}
</script>

<style lang="stylus" scoped>
.music-list {
    background-color:#fff;/* 明天装个sass-loader*/
    width: 860px;
    height:407px;
    padding:0 29px;
    .music-list-items {
        height:377px;
        overflow:auto;
    }
    .music-list-items::-webkit-scrollbar {
        display:none;
    }
}

</style>