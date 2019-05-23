<template>
    <div class="goodslist-container">
        <div class="goods-item" v-for="item in goodsList" :key="item.id">
            <img :src="item.imgurl" alt="">
            <h3>{{ item.title }}</h3>
            <div class="goods-info">
               <p><span class="newprice">￥{{  item.nowprice}}</span> <span class="oldprice">￥{{ item.oldprice }}</span></p>
              <div><span>热卖中</span> <span>{{ item.count }}</span></div>
            </div>
        </div>
        <mt-button type="danger" size="large">加载更多</mt-button>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            goodsList:[]
        }
    },
    methods: {
        getGoodsList(){
            axios.get('http://127.0.0.1:3000/getgoodslist').then(ret=>{
                this.goodsList = ret.data.message;
            })
        }
    },
    created(){
        this.getGoodsList();
    }
}
</script>
<style lang="less" scoped>
    .goodslist-container{
        padding: 0 4px;
         display: flex;
         flex-wrap: wrap;
         justify-content: space-between;
        .goods-item{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 240px;
            margin-top: 10px;
            width: 49%;
            border: 1px solid #ccc;
            box-shadow: 0  0 6px #ccc;
            img{
                width: 100%;
            }
            h3{
                font-size: 12px;
            }
            .goods-info{
                padding-left: 4px;
                background-color: #ccc;
                p{
                    font-size: 12px;
                    margin: 0;
                    .newprice{
                        font-size: 13px;
                        color: red;
                    }
                    .oldprice{
                        font-size: 12px;
                        text-decoration: line-through;
                    }

                }
                div{
                    display: flex;
                    justify-content: space-between;
                    font-size: 12px;
                    color: #666;
                }
            }
        }
    }
</style>
