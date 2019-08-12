import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

// 一级路由
import Home from "@/Page/Home/index.vue"
import Me from "@/Page/Me/index.vue"
import Recommend from "@/Page/Recommend/index.vue"
import Search from "@/Page/Search/index.vue"
import Shopping from "@/Page/Shopping/index.vue"
// 二级路由 home
import Bag from "./../Page/Home/Bag/Bag.vue"
import Beauty from "./../Page/Home/Beauty/Beauty.vue"
import Boy from "./../Page/Home/Boy/Boy.vue"
import Electric from "./../Page/Home/Electric/Electric.vue"
import Food from "./../Page/Home/Food/Food.vue"
import Girl from "./../Page/Home/Girl/Girl.vue"
import Mother from "./../Page/Home/Mother/Mother.vue"
import Phone from "./../Page/Home/Phone/Phone.vue"
import Store from "./../Page/Home/Store/Store.vue"
import Underwear from "./../Page/Home/Underwear/Underwear.vue"

export default new Router({
    mode: "history",
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/me', name: 'me', component: Me },
        { path: '/recommend', name: 'recommend', component: Recommend },
        { path: '/search', name: 'search', component: Search },
        { path: '/shopping', name: 'shopping', component: Shopping },
        { path: '/', redirect: '/home' }
    ]
})