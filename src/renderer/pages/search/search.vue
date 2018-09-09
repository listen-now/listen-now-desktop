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
    import { mapGetters } from 'vuex';

    export default {
        name:'search-page',
        components:{
            MusicList,
            PlatformTabs
        },
        computed:{
            ...mapGetters({
                musicList:'getMusicList',
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
                this.$store.commit('SET_PLATFORM', platform)
                //重新搜索
                const page = 10
                const token = this.token
                this.$store.dispatch('search', {page, token} ).then(res => {
                    //console.log(res)
                }).catch(error => {
                    console.log('搜索失败！错误原因：', error)
                })
            }
        }
    }
</script>

<style>
    .searchPageWrapper {
        overflow: hidden;
    }
</style>