# 这是vue商城项目的说明文件

### 需要用到的知识

+ html+css+js+less
+ mint-ui+mui
+ webpack
+ nodejs
+ vuejs
+ git/github

### 项目的结构说明

###########目录结构描述
├── dist                //webpack打包的bundle.js所在的文件
├── images                         // 项目的演示图片
├── src// 配置
│   ├── components   //项目中用到的一些组件，全部定义在这
│   ├── css                // 用到的第三方css文件
│   ├── js                  // 用到的第三方js文件
│   ├── fonts                // 字体图标对应的字体文件
│   ├── images              // 项目中用到的静态图片资源
│   ├── App.vue          // 根组件
│   └── route.js              // 路由匹配模块

│   └── main.js              // 项目的入口文件

├── webpack.config.js  //webpack的配置文件

├── .babelrc			//babel的配置文件

├── package.json		//开发环境中安装包的记录文件

### 项目的接口说明

项目的接口的根路径是 http:127.0.0.1:3000   使用本地的localhost来模拟后台的接口数据

###项目的描述

具体效果请看images文件

```js
首先进入首页，可以点击新闻资讯和图片分享和商品购买可以去往不同的页面，新闻资讯可以查看新闻，你也可以发表您的评论，图片分享可以看到一些实物的图片，商品购买页面，可以根据展示的商品，查看商品的详情，加入购物车，可以在tabbar中的购物车中看到您选购的商品
```







