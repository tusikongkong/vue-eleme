# vue.js + Element-ui 高仿饿了么外卖APP界面

### 📃项目简介
此项目是个人基于vue@2.x对原项目的重构，[原项目地址](https://github.com/ustbhuangyi/vue-sell)。

### 📃说明
项目正在开发中，尚有细节需要完善，预计2020/5/1完成。

### 📃主要依赖
* 基于vue@2.6
* 使用vue-cli@4.3搭建项目框架
* 使用vue-router@3.1进行页面路由切换
* 使用element-ui@2.13组件
* 使用eslint进行js代码的规范

### 📃环境配置
* 通过npm安装 **vue-cli**：
```
npm i -g @vue/cli
```
* 基于·图形化界面创建新版 vue 项目：
```
vue ui
```
* 基于图形化界面自动安装 **element-ui**:
  * 1.运行 vue ui命令，打开图形化界面
  * 2.通过 Vue项目管理器，进入集体的项目配置面板
  * 3.点击 插件 -> 添加插件，进入插件查询面板
  * 4.搜索 `vue-cli-plugin-element` 并安装
  * 5.配置插件，右侧 `fully import` 应改成 `import on demand`（按需导入），从而减少打包后项目的体积
