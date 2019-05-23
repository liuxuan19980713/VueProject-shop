# 这是vue商城项目的说明文件

### 需要用到的技术

+ html
+ css
+
+ js
+ vue
+ nodejs
+ webpack
+ mui
+ mint-ui

### 项目的结构说明

+ dist 存放的是我们打包的bundle.js文件
+ src 是我们项目开发用到的资源和书写的业务逻辑

### 项目的接口说明

项目的接口的根路径是 http:127.0.0.1:3000   使用本地的localhost来模拟后台的接口数据

###项目的每一个功能实现步骤

####day05/23
#####使用mui的 tab-top-webview-main带来的bug
+ 解决webpack默认打包时候的严格模式
+ tabbar无法切换 是由于mui-tab-item和muijs冲突的 ,使用之前在bootstrap的时候找到源码复制替换
+ [Intervention] Unable to preventDefault inside passive event listener due to target being treated as passive（由于目标被视为被动的，无法在被动事件侦听器内预防默认值）





