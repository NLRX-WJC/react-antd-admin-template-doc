---
title: 路由配置
---

## 1. 配置文件

在本项目中，除了登录页面路由之外，所有的主功能页面路由信息均在 [routeMap.js](https://github.com/NLRX-WJC/react-antd-admin-template/blob/master/src/config/routeMap.js) 文件中进行配置。

## 2. 配置说明

在 `routeMap.js` 中，你需要将项目中所有的路由信息均配置在此文件中，每条路由信息有三个配置项，分别是：

- path:必填项，路由跳转路径。
- component:必填项，路由跳转加载的组件，该组件会被渲染在布局中的 `content` 中。
- roles:可选，设置可进入该路由的角色权限，支持多个角色叠加。如果不设置该选项，则表示该条路由为公开路由，任何角色均可进入。

示例如下：

```javascript

{ 
  path: "/dashboard", 
  component: Dashboard, 
  roles: ["admin","editor","guest"] 
}

```

配置好所有的路由信息后，当用户登入系统时，会根据当前所登录用户的角色权限动态的生成符合该角色权限的路由表。