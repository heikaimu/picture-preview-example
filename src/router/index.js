import Vue from 'vue';
import Router from 'vue-router';
const Index = () => import('@/view/index');
const Example = () => import('@/view/example/index');
const Params = () => import('@/view/params/index');
const Methods = () => import('@/view/methods/index');
const Upload = () => import('@/view/upload/index');
const Other = () => import('@/view/other');

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
        },
        {
          path: 'other',
          component: Other
        }
      ]
    }
  ],
  linkActiveClass: 'active'
})
