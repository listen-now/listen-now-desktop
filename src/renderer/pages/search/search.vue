<template>
    <div class="searchPageWrapper">
        <music-list height="500px">
            
        </music-list>
    </div>
</template>

<script>
    import MusicList from '../../components/common/musicList/musicList';
    export default {
        name:'search-page',
        components:{
            MusicList
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
    .searchPageWrapper {
        overflow: hidden;
    }
</style>