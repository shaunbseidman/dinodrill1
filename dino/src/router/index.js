import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import header from '@/components/header';
import footer from '@/components/footer';
import joblists from '@/components/joblists';
import addjob from '@/components/addjob';

Vue.component('job-listing', joblists)
Vue.component('add-job', addjob)
Vue.component('header-photo', header)
Vue.component('footer-info', footer)
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
});
