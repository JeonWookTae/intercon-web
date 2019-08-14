import * as views from './view';

export default [
    {
        path: '/',
        exact: true,
        component: views.StartMain,
        hasMenu: false
    },
    {
        path: '/contents',
        exact: true,
        component: views.ContentList,
        hasMenu: false
    },
    {
        path: '/context',
        exact: true,
        component: views.ContentContext,
        hasMenu: false
    }
];