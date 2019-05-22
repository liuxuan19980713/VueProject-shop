<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <router-link :to="'/home/newsinfo/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.imgurl">
          <div class="mui-media-body">
            <p class="pfirst">{{ item.title }}</p>
            <p class="mui-ellipsis">
              发表时间：{{ item.add_time | dataFormat}}
              <span>点击次数：{{ item.click }}</span>
            </p>
          </div>
         
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      newsList: []
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      axios.get("http://127.0.0.1:3000/getnewslist").then(res => {
        this.newsList = res.data.message;
      });
    }
  }
};
</script>
<style lang="less" scoped>
.mui-media-body {
  .pfirst {
    font-size: 16px;
    color: #000;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .mui-ellipsis {
    font-size: 12px;
    color: #26a2ff;
  }
}
</style>