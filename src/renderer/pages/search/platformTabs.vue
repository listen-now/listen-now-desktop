<template>
    <div class="platform-tabs">
      <div v-for="(platform, index) of platforms" 
        :key="platform.name" class="platform-tabs-item" 
        :class="{[platform.class]: true, selected: platform.selected }" 
        @click="selectPlatform(platform)">
      <i class="iconfont" :class="{[`icon-${platform.class}`]: true}"></i>
          <span>{{ platform.name }}</span>
      </div>
    </div>
</template>

<script>
    /**
     * api
     * 事件：
     * onChange(platform)
     */
    import apiTool from '../../renderUtil/api.js';

    export default {
      name: 'platform-tabs',
      data() {
        return {
          platforms: [ // 平台信息
            {
              name: '百度音乐',
              class: 'baidu',
              selected: true,
              iconClass: 'icon-baidu',
            },
            {
              name: '酷狗音乐',
              class: 'kugou',
              selected: false,
              iconClass: 'icon-kugou',
            },
            {
              name: '酷我音乐',
              class: 'kuwo',
              selected: false,
              iconClass: 'icon-kuwo',
            },
            {
              name: '网易云音乐',
              class: 'wangyiyun',
              selected: false,
              iconClass: 'icon-wangyiyun',
            },
            {
              name: 'QQ音乐',
              class: 'qq',
              selected: false,
              iconClass: 'icon-qq',
            },
            {
              name: '虾米',
              class: 'xiami',
              selected: false,
              iconClass: 'icon-xiami',
            },
          ],
        };
      },
      mounted() {
        // 默认选择第一个platform
        const params = apiTool.getCurrentPlatform(this.platforms[0].name);
        this.$store.commit('SET_PLATFORM', params);
      },
      methods: {
        selectPlatform(platform) {
          const index = this.platforms.findIndex(pf => pf.name === platform.name);
          this.platforms.forEach(platform => platform.selected = false);
          platform.selected = true;
          this.platforms.fill(platform, index, index + 1);
          const params = apiTool.getCurrentPlatform(platform.name);
          this.$emit('onChange', params);
        },
      },
    };
</script>

<style scoped>
    @import url('http://at.alicdn.com/t/font_821168_v5p3qgg93tm.css');
    .platform-tabs {
      line-height: 30px;
      display: flex;
      font-size: 14px;
    }
    .platform-tabs-item {
      width: 100px;
      color: #fff;
      display: flex;
      justify-content: center;
      cursor: pointer;
      box-shadow: 2px 0 4px 0px #333;
      transition: 0.2s;
    }
    .platform-tabs-item:hover {
      box-shadow: none;
    }
    .platform-tabs-item.selected {
      box-shadow: none;
    }
    .iconfont {
      margin-right: 4px;
      font-size: 18px;
    }
    .baidu {
      background: #28b6ff;
    }
    .kugou {
      background: #0087da;
    }
    .kuwo {
      background: #ff892e;
    }
    .wangyiyun {
      background: #f70000;
    }
    .qq {
      background: #00b74a;
    }
    .xiami {
      background: #ff8000;
    }
</style>