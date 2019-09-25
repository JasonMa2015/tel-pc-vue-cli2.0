[TOC]

# 项目介绍

> 为了提高前后端人员开发前端效率以及规范前端开发流程，特别编写了一套前端开发环境模板。该模板是一套基于vue2.5.2、vue-router3.0.1、vuex3.0.1、iview3.1.0、iview-loader、iview主题定制、axios0.18.0以及jquery3.3.1的开发模板，同时配置了eslint4.15规范以及跨域代理（跨域代理修改url后面会详细介绍）。

## 使用说明

``` bash
第一步：安装依赖（只要是通过webpack打包的项目都要先安装依赖，这一步只需要执行下面代码即可，其他不用管）
npm install

第二步：启动项目（启动项目开始开发，所有的开发都在这部进行，项目启动成功后就可以开发了）
npm run dev

第三步：打包上线（这一步打包出来的文件都放在dist文件夹下面，直接把dist文件夹部署到服务器即可）
npm run build

```

## 目录结构

``` bash
.
├── build                             项目构建(webpack)相关代码
│    ├── build.js                     生产环境构建代码
│    ├── check-version.js             检查node、npm等版本
│    ├── utils.js                     构建工具相关
│    ├── vue-loader.conf.js           css加载器配置
│    ├── webpack.base.conf.js         webpack基础配置
│    ├── webpack.dev.conf.js          webpack开发环境配置
│    ├── webpack.prod.conf.js         webpack生产环境配置
├── config                            项目开发环境配置
│    ├── dev.env.js                   开发环境变量
│    ├── index.js                     项目一些配置变量
│    ├── prod.env.js                  生产环境变量
│    ├── test.env.js                  测试环境变量
├── doc                               项目相关文档
├── src                               源码目录
│    ├── api                          后端接口api
│    ├── assets                       存放项目中需要用到的资源文件，css、js、images等
│    ├── components                   vue公共组件
│    ├── config                       基础路径配置
│    ├── libs                         工具函数
│    ├── router                       路由配置
│    ├── store                        vuex的状态管理
│    ├── theme                        自定义主题（iview、vux等第三方库自定义主题）
│    ├── views                        项目所有页面
│    ├── App.vue                      页面入口文件
│    ├── main.js                      程序入口文件，加载各种公共组件
├── static                            静态文件，比如一些图片，json数据等不需要打包的文件
│    ├── config                       全局配置文件（打包后可修改）
│    │   ├── config.js                全局baseURL
│    ├── css                          静态样式
│    ├── img                          静态图片
│    ├── js                           js文件
├── ui                                设计图
├── .babelrc                          ES6语法编译配置
├── .editorconfig                     定义代码格式
├── .eslintrc.js                      代码规范配置文件
├── .gitignore                        git上传需要忽略的文件格式
├── README.md                         项目说明
├── index.html                        入口页面
├── package.json                      项目基本信息
.

```

vue.js[官网](https://cn.vuejs.org/)

