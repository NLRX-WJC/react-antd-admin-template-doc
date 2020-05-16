const path = require("path");
module.exports = {
  base: "/react-antd-admin-template-doc/",
  dest: "dist",
  title: "react-antd-admin-template",
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "public", "assets")
      }
    }
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        href: `/logo.png`
      }
    ],
    [
      "meta",
      {
        name: "theme-color",
        content: "#3eaf7c"
      }
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-capable",
        content: "yes"
      }
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black"
      }
    ],
    [
      "meta",
      {
        name: "msapplication-TileColor",
        content: "#000000"
      }
    ]
  ],
  themeConfig: {
    repo: "NLRX-WJC/react-antd-admin-template-doc",
    editLinks: true,
    docsDir: "docs",
    editLinkText: "在 GitHub 上编辑此页",
    lastUpdated: "上次更新",
    sidebarDepth: 1,
    sidebar: [
      ['introduce/', '介绍'],
      ['layout/', '基础布局'],
      ['router/', '路由配置'],
      // {
      //   title: "介绍",
      //   collapsable: false,
      //   children: [
      //     ["start/", ""]
      //   ]
      // },
      // {
      //   title: "变化侦测篇",
      //   collapsable: false,
      //   children: [
      //     ["reactive/", "综述"],
      //     ["reactive/object", "Object的变化侦测"],
      //     ["reactive/array", "Array的变化侦测"]
      //   ]
      // },
      // {
      //   title: "虚拟DOM篇",
      //   collapsable: false,
      //   children: [
      //     ["virtualDOM/", "Vue中的虚拟DOM"],
      //     ["virtualDOM/patch", "Vue中的DOM-Diff"],
      //     ["virtualDOM/updataChildren", "更新子节点"],
      //     ["virtualDOM/optimizeUpdataChildren", "优化更新子节点"]
      //   ]
      // },
      // {
      //   title: "模板编译篇",
      //   collapsable: false,
      //   children: [
      //     ["complie/", "综述"],
      //     ["complie/parse", "模板解析阶段(整体运行流程)"],
      //     ["complie/HTMLParse", "模板解析阶段(HTML解析器)"],
      //     ["complie/textParse", "模板解析阶段(文本解析器)"],
      //     ["complie/optimize", "优化阶段"],
      //     ["complie/codegen", "代码生成阶段"],
      //     ["complie/summary", "总结"]
      //   ]
      // },
      // {
      //   title: "生命周期篇",
      //   collapsable: false,
      //   children: [
      //     ["lifecycle/", "综述"],
      //     ["lifecycle/newVue", "初始化阶段(new Vue)"],
      //     ["lifecycle/initLifecycle", "初始化阶段(initLifecycle)"],
      //     ["lifecycle/initEvents", "初始化阶段(initEvents)"],
      //     ["lifecycle/initInjections", "初始化阶段(initInjections)"],
      //     ["lifecycle/initState", "初始化阶段(initState)"],
      //     ["lifecycle/templateComplie", "模板编译阶段"],
      //     ["lifecycle/mount", "挂载阶段"],
      //     ["lifecycle/destory", "销毁阶段"]
      //   ]
      // },
      // {
      //   title: "实例方法篇",
      //   collapsable: false,
      //   children: [
      //     ["instanceMethods/data", "数据相关的方法"],
      //     ["instanceMethods/event", "事件相关的方法"],
      //     ["instanceMethods/lifecycle", "生命周期相关的方法"]
      //   ]
      // },
      // {
      //   title: "全局API篇",
      //   collapsable: false,
      //   children: [["globalAPI/", "全局API分析"]]
      // },
      // {
      //   title: "过滤器篇",
      //   collapsable: false,
      //   children: [
      //     ["filter/", "用法回顾"],
      //     ["filter/filterPrinciple", "工作原理"],
      //     ["filter/parseFilters", "解析过滤器"]
      //   ]
      // },
      // {
      //   title: "指令篇",
      //   collapsable: false,
      //   children: [["directives/customDirectives", "自定义指令"]]
      // },
      // {
      //   title: "内置组件篇",
      //   collapsable: false,
      //   children: [["BuiltInComponents/keep-alive", "keep-alive"]]
      // }
    ]
  },
  plugins: [
    ["@vuepress/back-to-top", true],
    [
      "vuepress-plugin-medium-zoom",
      {
        options: {
          margin: 24,
          background: "white",
          scrollOffset: 0
        }
      }
    ],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          message: "文档内容有更新，点击刷新立即查看新内容。",
          buttonText: "刷新"
        }
      }
    ]
  ]
};
