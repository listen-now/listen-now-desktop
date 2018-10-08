import Vue from 'vue';
import Router from 'vue-router';
import index from '../pages/index/index';
import album from '../pages/album/album';
import search from '../pages/search/search';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index-page',
      component: index,
    },
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/album/:id',
      name: 'album-page',
      component: album,
    },
    {
      path: '/search',
      name: 'search-page',
      component: search,
    },
  ],
});
