import * as views from './view';

export default [
    {
        path: '/',
        exact: true,
        component: views.Main,
        hasMenu: false,
    },
    {
        path: '/menu',
        exact: true,
        component: views.Menu,
        hasMenu: false,
    }
];