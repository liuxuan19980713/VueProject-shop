import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import App from './App.vue';

import './css/mui.css';
import './css/icons-extra.css';
import './css/global.css';
import moment from 'moment';
import MintUI from 'mint-ui';
Vue.use(MintUI);
import VuePreview from 'vue-preview';
Vue.use(VuePreview);
Vue.filter('dataFormat',function(dataStr,pattern='MMMM Do YYYY, h:mm:ss a'){
    return  moment(dataStr).format(pattern);
})
import router from './router'

var vm =new Vue({
    el:"#app",
    data:{
        msg:'消息msg'
    },
    methods:{

    },
    router,
    render:(c)=>c(App)
})