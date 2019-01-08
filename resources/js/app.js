import Vue from 'vue'
import VueRouter from 'vue-router'

require('./bootstrap');

window.Vue = require('vue');
Vue.use(VueRouter)

let MyHeader = Vue.component('MyHeader', require('./components/MyHeader.vue').default);
let MyFooter = Vue.component('MyFooter', require('./components/MyFooter.vue').default);

let Home = Vue.component('Home', require('./components/Home.vue').default);
let About = Vue.component('About', require('./components/About.vue').default);

const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/about', component: About }
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    el: '#app',
    router,
    components: {MyHeader,MyFooter}
});
