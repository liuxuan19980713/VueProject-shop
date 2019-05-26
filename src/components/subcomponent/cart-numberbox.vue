<template>
    <div>
        <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
              <button class="mui-btn mui-btn-numbox-minus" type="button" >-</button>
              <input id="test" class="mui-input-numbox" ref="inputbox" type="number" value="1" @change="changeHandle">
              <button class="mui-btn mui-btn-numbox-plus" type="button" >+</button>
              
            </div>
           
    </div>
    
</template>
<script>
    export default {
        methods: {
            changeHandle(){
                
            }
        },
    }
</script>