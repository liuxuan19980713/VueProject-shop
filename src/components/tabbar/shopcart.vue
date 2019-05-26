<template>
  <div class="shopcart-container">
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mt-switch></mt-switch>
          <img src="https://i1.mifile.cn/a1/pms_1550646283.24414368!220x220.jpg" alt>
          <div class="info">
            <h3>小米9-高通晓龙855</h3>
            <p>
              <span></span>
              <numbox></numbox>
              <a href="#" @click.prevent="delect">删除</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner"></div>
      </div>
    </div>
  </div>
</template>
    <script>
import numbox from "../subcomponent/cart-numberbox.vue";
export default {
  data() {
    return {};
  },
  components: {
    numbox: numbox
  },
  methods: {
    delect() {}
  }
};
</script>
    <style lang="less" scoped>
.shopcart-container {
  .mui-card-content-inner {
    display: flex;
    justify-content: space-between;
  }

  img {
    width: 40px;
    height: 40px;
  }
}
</style>