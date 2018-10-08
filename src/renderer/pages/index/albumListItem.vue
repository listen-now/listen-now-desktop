<template>
    <div class="albumList-item" v-on:click="gotoAlbumDetailPage" >
        <div class="albumListItemFront">
            <img :src="album.image_url" alt="" style="width:85px;height:85px;">
        </div>
        <div class="albumListItemBack">
            <div class="albumListItemMessage">
                <p class="albumName">{{album.item_name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      name: 'album-list-item',
      props: ['text', 'backgroundColor', 'type', 'album'],
      methods: {
        gotoAlbumDetailPage() {
          this.$router.push({ path: `/album/${this.album.item_id}`,
            params: {
              id: this.album.item_id,
            } });
        },
      },
    };
</script>

<style scoped>
    .albumList-item {
        transform-style: preserve-3d;
        width:85px;
        height:85px;
        float:left;
        margin-top:10px;
        margin-right:10px;
        perspective: 800px;
    }
    .albumList-item:hover {
        cursor: pointer;
    }
    .albumListItemFront,.albumListItemBack {
        position: absolute;
        transition: all 1s;
    }
    .albumListItemBack {
        transform: rotateY(180deg);
        background-color: rgba(72, 72, 72, 0.8);
        width:85px;
        height: 85px;
    }
    .albumList-item:hover .albumListItemFront{
        transform: rotateY(180deg);
    }
    .albumList-item:hover .albumListItemBack{
        transform: rotateY(360deg);
    }
    .albumList-item:nth-child(7n) {
        margin-right:0px;
    }
    .albumList-avatar>span {
        /*此处强行打补丁*/
        color:white !important;
    }
    .albumList-text {
        line-height: 20px;
        font-size: 14px;
        width:100%;
        text-align: center;
        color:white;
    }
    .albumListItemMessage {
        vertical-align:middle;
        height: 85px;
        color:white;
        display: table-cell;
        padding:5px;
        /* vertical-align: center; */

        /* 超出的话，可以滑动，滑动条自定义 */
        /* overflow: scroll; */
    }
    .albumName {
        text-align: center;
        /* margin-top:15px; */
        font-weight: 800;
    }
    .albumDesc {
        vertical-align:middle;
        text-align: center;
    }
</style>