<template>
  <div class="photolist-container">
    <div
      id="sliderSegmentedControl"
      class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
    >
      <div class="mui-scroll">
        <a
          v-for="item in navDates"
          :key="item.id"
          :class="['mui-control-item',item.id==0?'mui-active':'']"
          href="#item1mobile"
          data-wid="tab-top-subpage-1.html"
        >{{ item.title }}</a>
      </div>
    </div>

    <!-- 图片区域 -->
    <ul>
      <router-link tag="li" v-for="item in picture" :key="item.id" :to="'/home/photoinfo/'+item.id">
        <img v-lazy="item.imgurl">
        <div class="text">
          <p>{{ item.title }}</p>
          <p>{{ item.zhaiyao }}</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
import mui from "../../js/mui.js";

export default {
  data() {
    return {
      navDates: [],
      picture: []
    };
  },
  created() {
    this.getNavDates();
    this.getPictureList();
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005,
      scrollY: false, //是否竖向滚动
      scrollX: true //是否横向滚动
    });
  },
  methods: {
    getNavDates() {
      axios.get("http://127.0.0.1:3000/getNavDates").then(ret => {
        this.navDates = ret.data.message;
        this.navDates.unshift({
          title: "全部",
          id: 0
        });
      });
    },
    getPictureList() {
      axios.get("http://127.0.0.1:3000/pictureList").then(ret => {
        this.picture = ret.data.message;
      });
    }
  }
};
</script>
<style lang="less" scoped>
* {
  touch-action: none;
}

.photolist-container {
  width: 100%;
  height: 100%;
  padding: 0 5px;
  
  ul {
    width: 100%;
    height: 100%;
    padding: 0;
    li {
      width: 100%;
      height: 200px;
      list-style: none;
      position: relative;
      margin-top: 15px;
      img {
        width: 100%;
        height: 200px;
      }
      img[lazy="loading"] {
        width: 100%;
        height: 100%;
      }
      .text {
        width: 100%;
        height: 80px;
        background-color: rgba(0, 0, 0, 0.4);
        position: absolute;
        left: 0;
        bottom: 0;

        p {
          margin: 0;
          color: #fff;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
