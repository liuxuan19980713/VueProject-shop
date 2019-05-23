<template>
  <div class="homeSwiper">
    <mt-swipe :auto="2000" :show-indicators="false">
      <mt-swipe-item v-for="item in swiperData" :key="item.imgurl">
        <img :src="item.imgurl" alt>
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/newsinfo">
          <img src="../../images/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
           <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/goodslist">
           <img src="../../images/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
           <img src="../../images/menu4.png" alt="">
          <div class="mui-media-body">热门推荐</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      swiperData: []
    };
  },
  methods: {
    getLunboList() {
      axios.get("http://127.0.0.1:3000/getlunbo").then(res => {
        
        if (res.data.status == 0) {
          this.swiperData = res.data.message;
        } else {
          Toast("获取轮播图数据失败");
        }
      });
    }
  },
  created() {
    this.getLunboList();
  }
};
</script>
<style lang="less" scoped>
.homeSwiper {
  height: 200px;
  .mint-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
  }
  ul{
      background-color: #fff;
      .mui-table-view-cell{
          border: none;
      }
      img{
          width: 60px;
          height: 60px;
      }
  }
}
</style>