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
          // signature = signature.substring(2, signature.length - 1);
          token_message = token_message.substring(2, token_message.length - 1);
          console.log(token_message.length);
          console.log(token_message.split(''));
          apiTool.setAuth(token_message);
          tokenUtil.getExistToken(1, token_message).then(res => console.log(res));
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
