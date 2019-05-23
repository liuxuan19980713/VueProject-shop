import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import App from './App.vue';

import './css/mui.css';
import './css/icons-extra.css';

//m;int-ui导入组件区域
import { Header,Tabbar, TabItem ,Swipe, SwipeItem,Toast,Button   } from 'mint-ui';

import moment from 'moment';
Vue.component(Header.name, Header,Tabbar.name, Tabbar,TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

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