<template>
  <div class="info-container">
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @afterEnter="afterEnter"
      @after-leave="afterLeave"
    >
      <div class="ball" v-show="flag" ref="myball"></div>
    </transition>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :swiperData="swiperData" :isfull="isfull"></swiper>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">小米9 战斗天使</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价:&nbsp;&nbsp;&nbsp;
            <del>￥2699</del>&nbsp;&nbsp;&nbsp;
            销售价:&nbsp;&nbsp;&nbsp;
            <span>￥2199</span>
          </p>
          <div class="counts">
            购买数量:
            <number @number="getCounts"></number>
          </div>
          <mt-button type="primary">立即购买</mt-button>
          <mt-button type="danger" @click="clickHandle">加入购物车</mt-button>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号:xw201905251001010</p>
          <p>库存情况:6件</p>
          <p>上架时间:2019-04-30</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import swiper from "../swiper/swiper.vue";
import number from "./number.vue";
import mui from "../../js/mui.js";
window.ismove = true;
export default {
  data() {
    return {
      id: this.$route.params.userId,
      swiperData: [],
      isfull: false,
      flag: false,
      counts: 0
    };
  },
  methods: {
    getLunboList() {
      axios.get("http://127.0.0.1:3000/getlunbo/" + this.id).then(res => {
        if (res.data.status == 0) {
          this.swiperData = res.data.message;
        } else {
          Toast("获取轮播图数据失败");
        }
      });
    },
    afterLeave() {
      ismove = true;
    },
    beforeEnter(el) {
      el.style.transform = "translate(0px,0px)";
    },
    enter(el, done) {
      this.ismove = false;
      //获取页面上元素的位置
      var ball = this.$refs.myball.getBoundingClientRect();
      var point = document.getElementById("number").getBoundingClientRect();
      let x = point.left - ball.left + "px";
      let y = point.top - ball.top + "px";
      el.offsetWidth;
      el.style.transform = `translate(${x},${y})`;
      el.style.transition = "all 1.4s ease";

      done();
    },
    afterEnter(el) {
      this.flag = !this.flag;
    },
    clickHandle() {
      if (ismove) {
        ismove = false;
        this.flag = !this.flag;
      }

      var obj = {
        id: this.id,
        price: 2999,
        counts: parseInt(this.counts),
        isSelected:true
      };
      this.$store.commit("addToShopcar", obj);

     
    },
    //拿到numbox中的值
    getCounts(id) {
      this.counts = id;
    }
  },
  created() {
    this.getLunboList();
  },
  components: {
    swiper,
    number
  },
  mounted() {
    mui(".mui-numbox").numbox();
  }
};
</script>
 <style lang="less" scoped>
.info-container {
  background-color: #ccc;
  overflow: hidden;
  .ball {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    left: 78px;
    top: 410px;
    z-index: 100000;
  }
  .mui-card {
    .mui-card-header {
      font-size: 14px;
      color: #000;
      text-shadow: 0 0 6px #ccc;
    }
  }
  .mui-card-content-inner {
    .price {
      font-size: 14px;
      color: #000;
      span {
        font-size: 15px;
        color: red;
      }
    }
    .counts {
      margin-bottom: 15px;
      position: relative;
    }
  }
}
</style>
