<template>
    <div class="albumPageWrapper">
        <div class="albumBadge">
            <Card></Card>
        </div>
        <div class="albumMusicList">
            <music-list height="500px">   
            </music-list>
        </div>
    </div>
</template>

<script>
    import MusicList from '../../components/common/musicList/musicList';
    import Card from '../../components/common/card/card';
    export default {
        name:'album-page',
        components:{
            MusicList,
            Card
        },
        data(){
            return {

            }
        },
        methods:{

        }
    }
</script>

<style>
    .albumPageWrapper {
        overflow: hidden;
    }
    .albumBadge {
        margin-bottom:30px;
    }
</style>