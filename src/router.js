
import Vue from 'vue'
import VueRouter from 'vue-router'


import homepage from './components/Homepage.vue';

Vue.use(VueRouter);

export const routes = [
    {
        path: '/',
        name: 'homepage',
        component: homepage
    },
];



export default new VueRouter({mode: 'history', routes})