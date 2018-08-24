import Vue from 'vue';
import Router from 'vue-router';
const Index = () => import('@/view/index');
const Example = () => import('@/view/example');
const Params = () => import('@/view/params');
const Methods = () => import('@/view/methods');
const Upload = () => import('@/view/upload');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children: [
        {
          path: 'example',
          component: Example
        },
        {
          path: 'params',
          component: Params
        },
        {
          path: 'methods',
          component: Methods
        },
        {
          path: 'upload',
          component: Upload
        }
      ]
    }
  ],
  linkActiveClass: 'active'
})
