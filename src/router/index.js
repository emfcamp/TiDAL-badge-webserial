import Vue from 'vue';
import Router from 'vue-router';
import Welcome from '@/components/Welcome';
import Apps from '@/components/Apps';
import Programming from '@/components/Programming';
import Update from '@/components/Update';
import Settings from '@/components/Settings';
import Recover from '@/components/Recover';
import BadGateway from '@/components/BadGateway';
import {device} from '../badgecomm';

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/welcome',
      name: 'Welcome',
      props: { page: 0 },
      meta: { page: 0 },
      component: Welcome,
      alias: '/'
    },
    {
      path: '/apps',
      name: 'Apps',
      component: Apps,
      props: { page: 1 },
      meta: { page: 1 },
    },
    {
      path: '/programming',
      name: 'Programming & Files',
      props: { page: 2 },
      meta: { page: 2 },
      component: Programming,
    },
    {
      path: '/update',
      name: 'Update',
      props: { page: 3 },
      meta: { page: 3 },
      component: Update,
    },
    {
      path: '/settings',
      name: 'Settings',
      props: { page: 4 },
      meta: { page: 4 },
      component: Settings,
    },
    {
      path: '/recover',
      name: 'Recover',
      props: { page: 5 },
      meta: { page: 5 },
      component: Recover,
    },
    {
      path: '/404',
      name: 'BadGateway',
      props: { page: 6 },
      meta: { page: 6 },
      component: BadGateway,
    },
    {
      path: '*',
      props: { page: 6 },
      meta: { page: 6 },
      redirect: '/404',
    }
  ]
})

router.beforeEach((to, from, next) => {
  // console.log("router.beforeEach", to, from, next);
  if (to.name != 'Welcome') {
    if (device !== undefined && device.opened) {
      next();
    } else {
      next('/');
    }
  } else {
    next();
  }
});

export default router;
