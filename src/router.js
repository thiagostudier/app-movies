import Vue from 'vue';
import Router from 'vue-router';

import Home from './pages/Home';
import Movie from './pages/Movie';
import Saved from './pages/Saved';
import Erro from './pages/Error';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/movie/:id',
            component: Movie,
            props: true
        },
        {
            path: '/saved',
            component: Saved,
        },
        {
            path: '*',
            component: Erro,
        }
    ]
})

export default router;