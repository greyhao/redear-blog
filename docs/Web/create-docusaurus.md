---
slug: docusaurus
sidebar_position: 0
---
# 使用 docusaurus + GitHub 搭建个人网站

## 创建 docusaurus 项目

```
npx create-docusaurus@latest my-website classic --typescript // my-website 项目名
```

## 运行

`cd my-website` 进入项目所在目录

`npm start` 启动项目，启动成功会自动打开浏览器页面


## 结构说明

主要目录说明
```
/blog  // 访问路径：/blog，用来放单独的文章，首页blog 点击看效果
/docs // 访问路径：/docs，用来放连续的文档，首页docs 点击看效果
/src // 项目主要代码，可以调页面元素和样式
  -/pages // 这个目录里可以写 .md 或 .ts 文件，访问路径就是文件的名字
```

### 修改显示效果
可以初步在文件 `docusaurus.config.ts` 中进行修改

## 部署在 github
项目提交到 github，然后按实际情况修改 `docusaurus.config.ts` 中内容
```ts
  // xxx 为github账户名
  url: 'https://xxx.github.io',
  // 根访问路径：/github 仓库名/
  baseUrl: '/redear-blog/',
  // github 用户名或组织名
  organizationName: 'xxx',
  // 代码所在仓库名
  projectName: 'redear-blog',
  trailingSlash: false,
```

### 部署命令
`# GIT_USER=<github_username> yarn deploy`
或
`USE_SSH=true yarn deploy` // 使用 ssh 进行登录


## 网站添加其他服务

### 网站统计
使用 [beamanalytics](https://beamanalytics.io/) 提供的服务，接入很简单。

`docusaurus.config.ts` 中配置

```ts
  scripts: [
    // beamanalytics config
    {
      src: 'https://beamanalytics.b-cdn.net/beam.min.js',
      'data-token': 'xxx-xx-xx-xx-xxx', // beamanalytics 注册成功之后可以看到
      async: true,
    },
  ],
```


## 常用命令

  `npm start`
    Starts the development server.

  `npm run build`
    Bundles your website into static files for production.

  `npm run serve`
    Serves the built website locally.

  `npm run deploy`
    Publishes the website to GitHub pages.
