<template>
  <div class="shopcart-container">
    <div class="mui-card" v-for="item in goodsinfo" :key="item.id">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mt-switch  v-model="$store.getters.getSwitchState[item.id]" @change="changeHandle(item.id,$store.getters.getSwitchState[item.id])"></mt-switch>
          <img src="https://i1.mifile.cn/a1/pms_1550646283.24414368!220x220.jpg" alt>
          <div class="info">
            <h3>{{ item.title }}</h3>
            <p>
              <span>￥{{ item.price }}</span>
              <numbox class="number" :initcount="$store.getters.localAsyncToNumberbox[item.id]"></numbox>
              <a href="#" @click.prevent="delect(item.id)">删除</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner muicard">
          <div>
            <p>总计(不含运费)</p>
            <p>
              已经购买商品：
              <span>{{ $store.getters.computedTotal.count }}</span>件 总价:￥
              <span>{{ $store.getters.computedTotal.price }}</span>
            </p>
          </div>
          <mt-button type="danger" >去结算</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>
    <script>
import mui from "../../js/mui.js";
import numbox from "../subcomponent/cart-numberbox.vue";
export default {
  data() {
    return {
      goodsinfo: [
        {
          id: 86,
          title: "小米9-高通晓龙855",
          price: "2999"
        }
      ]
    };
  },
  components: {
    numbox: numbox
  },
  methods: {
    delect(id) {
     //根据id删除store上的数据
     this.$store.commit('deleteById',id)
    },

    changeHandle(id,value){
      //把最新的选中状态同步到store中去
      this.$store.commit('switchChange',{id:id,value:value});
    }
  },
  mounted() {
    mui(".mui-numbox").numbox();
  }
};
</script>
<style lang="less" scoped>
.mui-numbox {
  height: 30px !important;
  line-height: 30px;
}
.number {
  line-height: 25px !important;
}
.shopcart-container {
  .mui-card-content-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
    }
    .info {
      p {
        display: flex;
        font-size: 12px;
        text-align: center;
        line-height: 25px;
        justify-content: space-between;
        span {
          color: red;
        }
        a {
          white-space: nowrap;
        }
      }

      h3 {
        text-align: center;
        font-size: 14px;
        margin-bottom: 10px;
      }
    }
  }
  .muicard {
    p {
      font-size: 12px;
      span {
        color: red;
        font-weight: bold;
      }
    }
  }
}
</style>