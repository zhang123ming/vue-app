// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/**
 * axios
 * 
 */
import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = "./static"
    // axios.defaults.baseURL = "http://localhost:3000"


/**
 * mint-ui
 *  */
// 轮播图
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})