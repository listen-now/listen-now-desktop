<template>
    <transition name="fade">
        <div class="albumPageWrapper">
            <div class="albumBadge">
                <Card :title="albumInfo.dissname"
                      :url="albumInfo.image_url"
                      :content="albumInfo.nickname"
                      width="910px"
                      :details="albumInfo.info"
                     ></Card>
            </div>
            <div class="albumMusicList">
                <music-list height="400"
                            :musicList="musicList">   
                </music-list>
            </div>
        </div>
    </transition>
</template>

<script>
    import MusicList from '../../components/common/musicList/musicList';
    import Card from '../../components/common/card/card';
    import apiTool from '../../renderUtil/api.js';
    export default {
      name: 'album-page',
      components: {
        MusicList,
        Card,
      },
      data() {
        return {
          albumId: '',
          albumInfo: {},
          musicList: [],
        };
      },
      methods: {
        getMusicList() {
          let songs = this.albumInfo.song.list;
          let flag = 1;
          songs = songs.map((song) => {
            song.songId = song.id;
            song.id = flag;
            song.name = song.music_name;
            song.singer = song.artists;

            /**
                     * 因为目前只有酷狗音乐可以拿到歌单，故暂时固定为酷狗音乐
                     */
            song.platform = 'Kugoumusic';
            song.islike = false;
            flag += 1;
            return song;
          });
          this.musicList = songs;
        },
      },
      async beforeMount() {
        this.albumId = this.$route.params.id;
        apiTool.setAuth(window.localStorage.getItem('token'));
        this.albumInfo = await apiTool.api.getSongList(this.albumId, apiTool.getCurrentPlatform('酷狗音乐'), 1);
        this.getMusicList();
      },
    };
</script>

<style>
    .albumPageWrapper {
        overflow: hidden;
    }
    .albumBadge {
        margin-bottom:30px;
    }
</style>