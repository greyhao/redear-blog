---
sidebar_position: 2  # 侧边栏位置
slug: webview # 访问路径
title: WebView 使用 # 侧边栏显示名字
tags: [Android] # 所有 tag 见 tags.yml 中定义
---

# WebView 使用

## 基础用法，加载 url

加载 `url` 之前需要设置 `WebSettings` 中的一些属性

```kotlin 
mWebView.settings.apply {
    javaScriptEnabled = true
    allowUniversalAccessFromFileURLs = true
    mixedContentMode = WebSettings.MIXED_CONTENT_ALWAYS_ALLOW
    useWideViewPort = true
    loadWithOverviewMode = true
    allowFileAccess = true
    layoutAlgorithm = WebSettings.LayoutAlgorithm.NORMAL
    domStorageEnabled = true
    mediaPlaybackRequiresUserGesture = false
    setSupportZoom(true)
    builtInZoomControls = true
    displayZoomControls = false
}

// 加载制定 url
mWebView.loadUrl("https://greyhao.github.io/redear-blog/")
```


## 在 WebView 中播放网页视频，支持横屏、选集、输入弹幕等功能
横屏需要设置定义 view，输入框需要支持焦点可获取

### 布局部分
布局中添加 `FrameLayout` 用来添加横屏播放的 `view`

```xml
<!-- 布局 -->
<LinearLayout
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">
    <!-- 用来承载横屏播放视频 view -->
    <FrameLayout
        android:id="@+id/fl_full"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:visibility="gone" />

    <WebView
        android:id="@+id/wv_url"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:layerType="hardware" />
</LinearLayout>
```

### 代码部分
主要通过设置自定义 `WebChromeClient` 来实现

```kotlin
private val customWebChromeClient = object : WebChromeClient() {

    // 解决加载时候显示默认图标问题
    override fun getDefaultVideoPoster(): Bitmap? {
        return Bitmap.createBitmap(1, 1, Bitmap.Config.ARGB_8888)
    }

    // 横屏播放主要逻辑
    override fun onShowCustomView(view: View?, callback: CustomViewCallback?) {
        if (customView != null) {
            callback?.onCustomViewHidden()
            return
        }
        customView = view
        customViewContainer.addView(customView)
        customViewCallback = callback
        mWebView.visibility = View.GONE
        customViewContainer.visibility = View.VISIBLE
        binding.swipeRefreshLayout.isEnabled = false
        requestedOrientation = ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE
        enableFullScreenMode(true)
    }

    // 退出横屏播放
    override fun onHideCustomView() {
        if (customView == null) {
            return
        }
        exitFull()
    }

    // 显示软键盘
    override fun onRequestFocus(view: WebView?) {
        super.onRequestFocus(view)
        val inputMethodManager = getSystemService(INPUT_METHOD_SERVICE) as InputMethodManager
        inputMethodManager.showSoftInput(view, InputMethodManager.SHOW_IMPLICIT)
    }
}

// 退出横屏播放
private fun exitFull() {
    customViewContainer.removeView(customView)
    customView = null
    customViewContainer.visibility = View.GONE
    customViewCallback?.onCustomViewHidden()
    mWebView.visibility = View.VISIBLE
    requestedOrientation = ActivityInfo.SCREEN_ORIENTATION_PORTRAIT
}

mWebView.setOnTouchListener { _, _ ->
    mWebView.requestFocus(View.FOCUS_DOWN)
    false
}

// 设置 webChromeClient
mWebView.webChromeClient = customWebChromeClient

```


## 下拉刷新滑动冲突问题

SwipeRefreshLayout 嵌套 WebView 导致的滑动冲突，通过添加滚动位置判断解决冲突

``` kotlin
mWebView.setOnScrollChangeListener { _, _, scrollY, _, _ ->
    binding.swipeRefreshLayout.isEnabled = (scrollY == 0)
}
```