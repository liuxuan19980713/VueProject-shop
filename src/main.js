import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import App from './App.vue';

import Vuex from 'vuex';
Vue.use(Vuex);
import './css/mui.css';
import './css/icons-extra.css';
import './css/global.css';
import moment from 'moment';
import MintUI from 'mint-ui';
Vue.use(MintUI);
import VuePreview from 'vue-preview';
Vue.use(VuePreview);
Vue.filter('dataFormat', function (dataStr, pattern = 'MMMM Do YYYY, h:mm:ss a') {
    return moment(dataStr).format(pattern);
})
import router from './router'

//获取本地的数据
var car = JSON.parse(localStorage.getItem('car'))||[];
const store = new Vuex.Store({
    state: {
        cart: car
    },
    mutations: {
        //加入购物车时候,把数据同步到cart上
        addToShopcar(state, obj) {
            var flag = false;
            state.cart.some(item => {
                //遍历数组中的每一项，看看有没有当前传递过来的这项
                if (parseInt(item.id) === parseInt(obj.id)) {
                    item.counts += parseInt(obj.counts);
                    flag = true;
                    return true;
                }
            });
            if (!flag) {
                state.cart.push(obj);
            }
            //将加入购物车的数据保存到本地
            localStorage.setItem('car', JSON.stringify(state.cart))
        }
    },
    //getters相当于计算属性，只要对应state上的数据发生改变了 getters上党法就会重新去计算出需要的值
    getters: {
        //实现徽标的自动更新
        countsTotal: (state) => {
            let sum = 0;
            state.cart.forEach(item => {
                sum += item.counts;
            })
            return sum;
        }
    }
})


var vm = new Vue({
    el: "#app",
    data: {
        msg: '消息msg'
    },
    methods: {

    },
    router,
    render: (c) => c(App),
    store
})