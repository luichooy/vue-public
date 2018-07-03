/**
 * Created by Administrator on 2018/7/3.
 */

import Layout from 'views/Layout';

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    children: [
      {
        path: '/about',
        name: 'about',
        component: () => import('views/About')
      }
    ]
  }
];

export default routes;
