/**
 * platform 请求音乐平台，目前提供如下：
 。Neteasymusic
 。Xiamimusic
 。QQmusic
 */
import axios from 'axios';
const platforms = {
  网易云音乐: 'Neteasymusic',
  虾米: 'Xiamimusic',
  QQ音乐: 'QQmusic',
  酷狗音乐: 'Kugoumusic',
  酷我音乐: 'Kuwomusic',
  百度音乐: 'Baidumusic',
  咪咕音乐: 'Migumusic',
};

const getCurrentPlatform = pf => platforms[pf];
/**
 * 设置token
 * @param TOKEN
 */
function setAuth(TOKEN) {
  axios.defaults.headers.common.token = TOKEN;
}


const api = {

  /**
     * 通过关键字搜索歌曲,后端会返回歌曲搜索详情，不包括播放地址，歌词，评论。开放网易，QQ，虾米
     * 请求参数说明:
     * 参数 可选 描述
     1.title 否 关键字，主要的内容是歌手名/歌曲名，例如:纸短情长，张学友
     2.platform 否 音乐平台，为通用参数platform列出字段
     3.page 是 搜索页，不加入该参数默认返回第一页10首，通过增加page来改变搜索信息
     *请求示例:
     {
         "title":"成都",
         "platform":"Neteasymusic"
     }
     *
     *
     * @returns {Promise<any>}
     */
  search(...args) {
    const params = args;
    return new Promise((resolve, reject) => {
      if (params.length < 2) {
        console.error('[API]:wrong param length');
        reject();
      } else {
        const title = params[0];
        const platform = params[1];
        if (params.length === 2) {
          axios.post('http://www.zlclclc.cn/search', {
            title,
            platform,
          }).then((res) => {
            resolve(res.data);
          }).catch((err) => {
            reject(err);
          });
        } else {
          const page = params[2];
          axios.post('http://www.zlclclc.cn/search', {
            title,
            platform,
            page,
          }).then((res) => {
            resolve(res.data);
          }).catch((err) => {
            reject(err);
          });
        }
      }
    });
  },
  /**
     * http://zlclclc.cn/id 通过id获取某一首歌曲的详细信息，包括播放地址，歌词，评论，发放网易，QQ，虾米
     * 请求参数说明:

     参数 可选 描述
     id 否 歌曲识别码，各平台的歌曲识别码格式不一样，需要请求获取
     platform 否 音乐平台，通用参数
     请求示例:

     {
         "id":"0015H75B1NvYzl",
         "platform":"QQmusic"
     }
     * @returns {Promise<any>}
     */
  getMusicById(id, platform) {
    return new Promise((resolve, reject) => {
      axios.post('http://www.zlclclc.cn/id', {
        id,
        platform,
      }).then((res) => {
        resolve(res.data);
      }).catch((err) => {
        reject(err);
      });
    });
  },

  /**
     *  http://zlclclc.cn/song_list_requests 通过歌单地址，歌单id来获取某一个歌单详情，目前开放了网易，QQ音乐，即将开发虾米
     * API [C]
     请求地址:

     http://zlclclc.cn/song_list_requests
     请求参数说明:

     参数  可选  描述
     id 否 歌单id
     platform    否       音乐平台，通用参数
     * @param id
     * @param platform
     * @param page
     * @returns {Promise<any>}
     */
  getSongList(id, platform, page) {
    return new Promise((resolve, reject) => {
      axios.post('http://www.zlclclc.cn/song_list_requests', {
        id,
        platform,
        page,
      }).then((res) => {
        resolve(res.data);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  /**
     * http://zlclclc.cn/user_song_list 通过用户识别码[uid/uin]获取用户详情，目前开放网易，QQ音乐
     * API [D]
     请求地址:

     http://zlclclc.cn/user_song_list
     请求参数说明:

     参数 可选  描述
     uid   否 用户识别码，目前只支持网易，QQ
     platform    否       确认用户同步的平台选择
     * @param uid
     * @param platform
     * @returns {Promise<any>}
     */
  getSongListByUser(uid, platform) {
    return new Promise((resolve, reject) => {
      axios.post('http://www.zlclclc.cn/user_song_list', {
        uid,
        platform,
      }).then(res => resolve(res.data))
        .catch(err => reject(err));
    });
  },

  getTopSongList() {
    return new Promise((resolve, reject) => {
      axios.get('http://www.zlclclc.cn/TopSongList')
        .then((res) => {
          resolve(res.data);
        }).catch((err) => {
          reject(err);
        });
    });
  },
};
export default {
  api,
  setAuth,
  getCurrentPlatform,
};
