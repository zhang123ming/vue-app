<template>
  <div id="home">
    <div class="hearder">这是头部</div>
    <div
      class="content"
      ref="content"
      @touchstart="touchstart"
      @touchmove="touchmove"
      @touchend="touchend"
    >
      <ul class="box" ref="box">
        <div class="hea" v-if="xiala">下拉更新</div>
        <div class="hea" v-if="songkai">松开更新</div>
        <div class="hea" v-if="okShow">更新完毕</div>
        <!-- <div class="casual">
    
        </div>-->
        <li v-for="item in userinfo" :key="item.id">
          <img :src="item.img" alt />
          <h3>{{item.title}}</h3>
        </li>
        <div class="refres" v-if="!fooder">上拉加载更多。。。</div>
        <div class="footer" v-if="fooder">已经到底了</div>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      userinfo: [],
      isShow: false,
      xiala: true,
      songkai: false,
      okShow: false,
      count: 0,
      fooder: false
    };
  },
  components: {},
  created() {
    this.getuserinfo();
  },
  mounted() {
    this.$nextTick(() => {
      this._initScroll();
    });
  },
  methods: {
    // 触摸
    touchstart(event) {
      this._initBottom();
      // console.log("触摸");
    },
    // 触摸中
    touchmove(event) {
      // console.log("触摸中");
    },
    // 松开
    touchend(event) {
      // console.log("松开");
      this.songkai = false;
      this.xiala = true;
    },

    _initBottom() {
      this.contentScroll.on("scroll", pos => {
        // console.log(pos.y);
        if (pos.y > 40) {
          // console.log("xial")
          this.xiala = false;
          this.songkai = true;
        }
      });
    },
    _initScroll() {
      if (!this.contentScroll) {
        this.contentScroll = new BScroll(this.$refs.content, {
          scrollY: true,
          probeType: 3,
          click: true,
          useTransition: false, // 防止iphone微信滑动卡顿
          pullUpLoad: {
            threshold: -30 // 当上拉距离超过30px时触发 pullingUp 事件
          }
        });

        this.contentScroll.on("pullingUp", () => {
          this.count++;
          this.getuserinfo();
          this.contentScroll.finishPullUp(); // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则上拉事件只会执行一次
        });
      } else {
        this.contentScroll.refresh();
      }
    },
    async getuserinfo() {
      await this.$axios.get("/api/home_list.json").then(res => {
        if (res.data.message.length < (this.count + 1) * 6) {
          this.fooder = true;
          return false;
        }
        this.userinfo = this.userinfo.concat(
          res.data.message.slice(this.count * 6, (this.count + 1) * 6)
        );
        // console.log(this.userinfo);
      });
    }
  }
};
</script>
<style  scoped>
#home {
  width: 100%;
  height: 100%;
  /* background: #fafafa; */
  background: darkkhaki;
  position: relative;
}

.hearder {
  width: 100%;
  height: 55px;
  background: darkred;
  font-size: 20px;
  text-align: center;
  position: fixed;
  line-height: 55px;
  color: #fff;
  z-index: 100;
}
.content {
  width: 100%;
  height: auto;
  background: #f5f5f5;
  position: absolute;
  top: 10px;
  bottom: 50px;
  overflow: hidden;
}
.box {
  width: 100%;
  /* position: absolute; */
  background: #f5f5f5;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
}
.box li {
  width: 47%;
  height: 300px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 8px;
  border-radius: 3px;
  overflow: hidden;
}
.box li:nth-of-type(odd) {
  background: #fff;
  margin-left: 2%;
}
.box li:nth-of-type(even) {
  margin-left: 2%;
}
.box li img {
  width: 100%;
  height: 200px;
}
.refres {
  width: 100%;
  height: 50px;
  background: darkgoldenrod;
  text-align: center;
  line-height: 50px;
}
.footer {
  width: 100%;
  height: 50px;
  background: darkcyan;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
}
.hea {
  width: 100%;
  height: 50px;
  background: #fafafa;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
}
.casual {
  width: 100%;
  height: 200px;
}
</style>