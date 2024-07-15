---
slug: gradle
title: Gradle 常用配置
tags: [Android]
---

# Gradle 配置记录

## 支持使用 viewBinding

### 配置 gradle
在 app/build.gradle.kts 中添加下面内容

``` 
android {
    ...

    buildFeatures {
      // 添加
      viewBinding = true
    }
}
```

### Activity 中代码
``` kotlin
// 定义
private lateinit var binding: ActivityMainBinding

// 初始化
override fun onCreate(savedInstanceState: Bundle?) {
    binding = ActivityMainBinding.inflate(layoutInflater)
    // 设置给当前页面
    setContentView(binding.root)

    // 操作控件
    binding.tvText.text = "Hello Android"
}
```
