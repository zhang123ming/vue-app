<template>
  <div id="tabbar">
    <ul>
      <router-link tag="li" to="/">
        <img :src="$route.path.includes('/home')?tabBarArr[0].sel:tabBarArr[0].nor" alt />
        <span :class="{current:$route.path.includes('/')}">首页</span>
      </router-link>
      <router-link tag="li" to="/recommend">
        <img :src="$route.path.includes('/recommend')?tabBarArr[1].sel:tabBarArr[1].nor" alt />
        <span :class="{current:$route.path.includes('/recommend')}">推荐</span>
      </router-link>
      <router-link tag="li" to="/search">
        <img :src="$route.path.includes('/search')?tabBarArr[2].sel:tabBarArr[2].nor" alt />
        <span :class="{current:$route.path.includes('/search')}">搜索</span>
      </router-link>
      <router-link tag="li" to="/shopping">
        <img :src="$route.path.includes('/shopping')?tabBarArr[3].sel:tabBarArr[3].nor" alt />
        <span :class="{current:$route.path.includes('/shopping')}">购物车</span>
      </router-link>
      <router-link tag="li" to="/me">
        <img :src="$route.path.includes('/me')?tabBarArr[4].sel:tabBarArr[4].nor" alt />
        <span :class="{current:$route.path.includes('/me')}">个人中心</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cur: 0,
      tabBarArr: [
        {
          nor:require("@/assets/img/Tabbar/index.svg"),
          sel: require("@/assets/img/Tabbar/index_s.svg")
        },
        {
          nor: require("@/assets/img/Tabbar/tui.svg"),
          sel:require ("@/assets/img/Tabbar/tui_s.svg")
        },
        {
          nor:require ("@/assets/img/Tabbar/search.svg"),
          sel:require ("@/assets/img/Tabbar/search_s.svg")
        },
        {
          nor: require("@/assets/img/Tabbar/shop.svg"),
          sel: require("@/assets/img/Tabbar/shop_s.svg")
        },
        {
          nor: require("@/assets/img/Tabbar/me.svg"),
          sel: require("@/assets/img/Tabbar/me_s.svg")
        }
      ]
    };
  },

  methods: {
    currentHandel(i) {
      console.log(i);
      this.isCurrent = i;
    }
  }
};
</script>
<style  scoped>
#tabbar {
  width: 100%;
  height: 50px;
  background: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 100;
  border-top: 1px solid #bdbfc2;
}

#tabbar ul {
  width: 100%;
  height: 100%;
  display: flex;
}
#tabbar ul li {
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  list-style: none;
}
#tabbar ul li img {
  width: 25px;
  height: 25px;
}
#tabbar ul li span {
  font-size: 12px;
}
#tabbar ul li span.current {
  color: #1084b2;
}
</style>