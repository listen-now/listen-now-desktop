<template>
    <div class="searchPageWrapper">
        <platform-tabs @onChange="onChange"></platform-tabs>
        <music-list height="500px">
            
        </music-list>
    </div>
</template>

<script>
    import MusicList from '../../components/common/musicList/musicList';
    import PlatformTabs from './platformTabs';
    import {mapGetters} from 'vuex';

    export default {
        name:'search-page',
        components:{
            MusicList,
            PlatformTabs
        },
        computed:{
            ...mapGetters({
                token:'token'
            })
        },
        data(){
            return {

            }
        },
        methods:{
            onChange(platform) {
                console.log('platform:', platform)
            },
            search() {

            }
        }
    }
</script>

<style>
    .searchPageWrapper {
        overflow: hidden;
    }
</style>