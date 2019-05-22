<template>
  <div class="comments-container">
    <h4>发表评论</h4>
    <hr>
    <textarea placeholder="请输入您要评论的内容(120字内)" maxlength="120" v-model="msg" ref="myref"></textarea>
    <mt-button size="large" type="primary" @click="submit">发表评论</mt-button>
    <div class="comments-list" v-for="item in commentList" :key="item.comment">
      <div class="comments-item">
        <span>第一楼用户:{{ item.username }} 发表时间: {{ item.add_time |dataFormat }}</span>
      </div>
      <div class="comments-content">
        <span>{{ item.comment }}</span>
      </div>
    </div>

    <mt-button size="large" type="danger" @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      commentList: [],
      pageIndex: 1,
      msg: ""
    };
  },
  methods: {
    getCommentsList() {
      axios.get("http://127.0.0.1:3000/getcomments/13").then(res => {
        this.commentList = res.data.message;
      });
    },
    getMore() {
      axios.get("http://127.0.0.1:3000/getcomments/14").then(res => {
        this.commentList = this.commentList.concat(res.data.message);
      });
    },
    submit() {
      // axios.post("http://127.0.0.1:3000/submitcomments",{
      //        username:'匿名用户',
      //        add_time:new Date(),
      //        comment:this.msg
      // },(res)=>{
      //     console.log(111);
      // })
      this.commentList.unshift({
        username: "匿名用户",
        add_time: new Date(),
        comment: this.msg
      });
      this.msg = "";
    }
  },
  props: ["id"],
  created() {
    this.getCommentsList();
  }
};
</script>
<style lang="less" scoped>
.comments-container {
  textarea {
    font-size: 12px;
    height: 85px;
  }
  .comments-list {
    font-size: 12px;
    .comments-item {
      height: 30px;
      background-color: #ccc;
      line-height: 30px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .comments-content {
      height: 35px;
      text-indent: 2em;
      line-height: 35px;
    }
  }
}
</style>
