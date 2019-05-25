<template>
  <div class="swiper-container">
    <mt-swipe :auto="2000" :show-indicators="false">
      <mt-swipe-item v-for="item in swiperData" :key="item.imgurl">
        <img :src="item.imgurl" alt  :class="[isfull?'isfull':'' ]">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  props: ["swiperData", "isfull"],
  data() {
    return {
      
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.isfull {
  width: 100%;
  height: 100%;
}
.swiper-container {
  height: 200px !important;
  .mint-swipe-item {
    text-align: center;
  }
}
</style>
