<template>
  <div>
    <div class="mui-numbox" data-numbox-min="1" data-numbox-max="90000" style="height:25px">
      <button class="mui-btn mui-btn-numbox-minus numberbox" type="button">-</button>
      <input
        id="test"
        class="mui-input-numbox"
        ref="inputbox"
        type="number"
        :value="initcount"
        @change="changeHandle"
      >
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    changeHandle() {
        this.$store.commit('numboxTostore',{id:86,value:this.$refs.inputbox.value})
       
    }
  },
  props:['initcount']
};
</script>
<style>
.numberbox {
  line-height: 25px !important;
  border: none !important;
  height: 25px !important;
}
</style>