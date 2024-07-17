---
sidebar_position: 1  # 侧边栏位置
slug: nrm # 访问路径
title: 更方便的管理 npm 源 # 侧边栏显示名字
tags: [web] # 所有 tag 见 tags.yml 中定义
---

# 使用 nrm 管理 npm 源

## 安装 nrm
`npm install -g nrm`

## 查看可用源
`nrm ls`

`
npm ---------- https://registry.npmjs.org/
yarn --------- https://registry.yarnpkg.com/
tencent ------ https://mirrors.cloud.tencent.com/npm/
cnpm --------- https://r.cnpmjs.org/
* taobao ------- https://registry.npmmirror.com/
npmMirror ---- https://skimdb.npmjs.com/registry/
`

带星号代表当前的源

## 切换到指定源

`nrm use npm`