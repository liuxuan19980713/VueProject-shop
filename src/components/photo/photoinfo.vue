<template>
  <div class="photoinfo-container">
    <div class="info_title">
      <h4>小米手机9-高通晓龙855</h4>
      <div class="father">
        <span>发表时间:2019-04-27</span>
        <span>点击:100次</span>
      </div>
    </div>
    <hr>
    <div class="thumbs">
      <vue-preview :slides="thumimages"></vue-preview>
    </div>
    <p>
      “放上去，就充电”很方便，漫长的充电等待却让人望而却步。小米9 创新性地提高功率，将以往
      数小时的时间，提速至 90 分钟充满，这个速度与小米8 的有线快充一致。有线充电同步提速，
      27W 功率 60 分钟充满*。
    </p>
    <combox></combox>
  </div>
</template>
<script>
import axios from "axios";
import combox from "../comment/comments.vue";
export default {
  data() {
    return {
      thumimages: []
    };
  },
  methods: {
    getThumImages() {
      axios.get("http://127.0.0.1:3000/getthumimages").then(ret => {
        this.thumimages = ret.data.message;
        this.thumimages.forEach(item => {
          item.w = 600;
          item.h = 400;
          item.msrc = item.imgurl;
        });
      });
    }
  },
  components: {
    combox: combox
  },
  created() {
    this.getThumImages();
  }
};
</script>
<style lang="less" scoped>
.photoinfo-container {
  padding: 0 4px;
  h4 {
    margin-top: 15px;
    color: #26a2ff;
    font-size: 14px;
    text-align: center;
  }
  .father {
    display: flex;
    justify-content: space-between;
    span {
      font-size: 12px;
      color: #666;
    }
  }
  p {
    clear: both;
  }
}
</style>
