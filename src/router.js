
import VueRouter from 'vue-router';
import tabbarComponentMember from './components/tabbar/member.vue';
import tabbarComponentSearch from './components/tabbar/search.vue';
import tabbarComponentShopcart from './components/tabbar/shopcart.vue';
import tabbarComponentHome from './components/tabbar/home.vue';
import newsInfo from './components/news/newsInfo.vue';
import newsDetail from './components/news/newsDetail.vue';
import photolist from './components/photo/photolist.vue';
import photoinfo from './components/photo/photoinfo.vue';
import goodslist from './components/goods/goodslist.vue';


const router = new VueRouter({
    routes: [
        { path: '/member', component: tabbarComponentMember },
        { path: '/search', component: tabbarComponentSearch },
        { path: '/shopcart', component: tabbarComponentShopcart },
        { path: '/home', component: tabbarComponentHome },
        { path: '/', redirect:'/home' },
        { path: '/newsinfo', component: newsInfo },
        { path: '/home/newsinfo/:id',component:newsDetail},
        { path: '/home/photolist',component:photolist},
        { path: '/home/photoinfo/:id',component:photoinfo},
        { path:　'/goodslist',component:goodslist}
    ],
    linkActiveClass:'myclass'
})

export default router;