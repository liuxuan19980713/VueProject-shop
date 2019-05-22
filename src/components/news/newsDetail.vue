<template>
  <div class="newsDetail-container">
    <div class="mui-media-body" v-for="item in newsDetailList" :key="item.id">
      <p class="pfirst">{{ item.title }}</p>
      <hr>
      <div class="subtitle">
        <span class="mui-ellipsis">发表时间：{{ item.add_time | dataFormat}}</span>
        <span>点击次数：{{item.click}}</span>
      </div>
      <hr>
      <p class="pcontent">{{ item.content }}</p>

      <cmtboxs :id="id"></cmtboxs>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import combox from '../comment/comments.vue';
export default {
  data() {
    return {
      newsDetailList: [],
      id: parseInt(this.$route.params.id)
    };
  },
  methods: {
    getNewsDetail() {
      axios.get("http://127.0.0.1:3000/newsinfo/" + this.id).then(res => {
        this.newsDetailList = res.data.message;
      });
    }
  },
  created() {
    this.getNewsDetail();
  },
  components:{
      'cmtboxs':combox
  }
};
</script>

<style lang="less" scoped>
.newsDetail-container {
    background-color: #fff;
  padding: 0 6px;
  .mui-media-body {
    .pfirst {
      text-align: center;
      margin: 5px 0 0 0;
      line-height: 30px;
      font-size: 16px;
      color: #000;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .subtitle {
      display: flex;
      justify-content: space-between;
      span {
        font-size: 12px;
      }
    }
    .pcontent{
        font-size: 14px;
        color: #000;
        text-indent: 2em;
    }
  }
}
</style>