<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import apiTool from './renderUtil/api';
  import tokenUtil from './renderUtil/token';
  import errMesage from './renderUtil/errorMessage';
  import $ from 'jquery';
  export default {
    name: 'listen-now-desktop',
  };
  tokenUtil.getToken()
      .then(res => {
          let {signature, token_message} = res.data;
          // console.log(tokenUtil.verify(token_message, signature));
          token_message = token_message.substring(2, token_message.length - 1);
          // token_message = token_message.replace("\\n", "\n");
          apiTool.setAuth(token_message);
          tokenUtil.getExistToken(1, token_message).then(res => console.log(res));
          return token_message;
      }).then(() => {
          apiTool.api.search("周传雄", apiTool.platform("网易云音乐"));
      }).catch(err => {
          console.log(err);
      });
</script>

<style>
  /* CSS */
  *{
    -webkit-font-smoothing:subpixel-antialiased;
    /*全局抗锯齿*/
  }
</style>
