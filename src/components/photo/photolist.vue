<template>
  <div>
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
  </div>
</template>
<script>
import axios from "axios";
import mui from "../../js/mui.js";

export default {
  data() {
    return {
      navDates: []
    };
  },
  created() {
    this.getNavDates();
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
    }
  }
};
</script>
<style lang="less" scoped>
* {
  touch-action: none;
}
</style>
