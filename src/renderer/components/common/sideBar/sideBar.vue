<template>
    <div id="leftPart"> 
        <div id="leftLogo" @click="goHome">
            <left-logo></left-logo>
        </div>
        <div id="leftSearch">
            <left-search @click="goToSearch" ref="leftSearch"></left-search>
        </div>
        <div id="leftMain">
            <left-main></left-main>
        </div>
        <div id="leftButton" style="padding:15px 10px 15px 10px">
        </div>
        <div id="leftMiniPlay">
            <left-player></left-player>
        </div>
    </div>
</template>

<script>
  import leftLogo from './children/leftLogo';
  import leftSearch from './children/leftSearch';
  import leftMain from './children/leftMain';
  import leftSound from './children/leftSound';
  import leftButton from './children/leftButton';
  import leftPlayer from './children/leftPlayer';

  export default {
    name: 'sideBar',
    components: {
      leftLogo, leftSearch, leftMain, leftPlayer, leftButton, leftSound,
    },
    methods: {
      goToSearch() {
        this.$router.push('./search');
      },
      goHome() {
        this.$refs.leftSearch.backtoIndex();
        this.$router.push('./pages/index');
      },
    },
  };
</script>

<style>
    /* CSS */
    #leftLogo {
        width: 220px;
        height: 50px;
        float: left;
    }
    #leftSearch {
        width: 220px;
        height: 50px;
        float: left;
    }
    #leftMain {
        width: 220px;
        height: 342px;
        float: left;
    }
    #leftMiniPlay {
        width: 220px;
        height: 178px;
        float: left;
        overflow: hidden;
    }
</style>
