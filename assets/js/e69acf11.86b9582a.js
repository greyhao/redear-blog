"use strict";(self.webpackChunkredear_blog=self.webpackChunkredear_blog||[]).push([[8765],{6218:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var t=i(4848),r=i(8453);const o={sidebar_position:2,slug:"webview",title:"WebView \u4f7f\u7528",tags:["Android"]},l="WebView \u4f7f\u7528",a={id:"Android/webview",title:"WebView \u4f7f\u7528",description:"\u57fa\u7840\u7528\u6cd5\uff0c\u52a0\u8f7d url",source:"@site/docs/Android/webview.md",sourceDirName:"Android",slug:"/Android/webview",permalink:"/redear-blog/docs/Android/webview",draft:!1,unlisted:!1,tags:[{inline:!0,label:"Android",permalink:"/redear-blog/docs/tags/android"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"webview",title:"WebView \u4f7f\u7528",tags:["Android"]},sidebar:"tutorialSidebar",previous:{title:"Android",permalink:"/redear-blog/docs/category/android"},next:{title:"\u8c03\u8d77\u5730\u56fe App \u5bfc\u822a\u529f\u80fd",permalink:"/redear-blog/docs/Android/maps"}},d={},s=[{value:"\u57fa\u7840\u7528\u6cd5\uff0c\u52a0\u8f7d url",id:"\u57fa\u7840\u7528\u6cd5\u52a0\u8f7d-url",level:2},{value:"\u5728 WebView \u4e2d\u64ad\u653e\u7f51\u9875\u89c6\u9891\uff0c\u652f\u6301\u6a2a\u5c4f\u3001\u9009\u96c6\u3001\u8f93\u5165\u5f39\u5e55\u7b49\u529f\u80fd",id:"\u5728-webview-\u4e2d\u64ad\u653e\u7f51\u9875\u89c6\u9891\u652f\u6301\u6a2a\u5c4f\u9009\u96c6\u8f93\u5165\u5f39\u5e55\u7b49\u529f\u80fd",level:2},{value:"\u5e03\u5c40\u90e8\u5206",id:"\u5e03\u5c40\u90e8\u5206",level:3},{value:"\u4ee3\u7801\u90e8\u5206",id:"\u4ee3\u7801\u90e8\u5206",level:3},{value:"\u4e0b\u62c9\u5237\u65b0\u6ed1\u52a8\u51b2\u7a81\u95ee\u9898",id:"\u4e0b\u62c9\u5237\u65b0\u6ed1\u52a8\u51b2\u7a81\u95ee\u9898",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"webview-\u4f7f\u7528",children:"WebView \u4f7f\u7528"}),"\n",(0,t.jsx)(n.h2,{id:"\u57fa\u7840\u7528\u6cd5\u52a0\u8f7d-url",children:"\u57fa\u7840\u7528\u6cd5\uff0c\u52a0\u8f7d url"}),"\n",(0,t.jsxs)(n.p,{children:["\u52a0\u8f7d ",(0,t.jsx)(n.code,{children:"url"})," \u4e4b\u524d\u9700\u8981\u8bbe\u7f6e ",(0,t.jsx)(n.code,{children:"WebSettings"})," \u4e2d\u7684\u4e00\u4e9b\u5c5e\u6027"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'mWebView.settings.apply {\n    javaScriptEnabled = true\n    allowUniversalAccessFromFileURLs = true\n    mixedContentMode = WebSettings.MIXED_CONTENT_ALWAYS_ALLOW\n    useWideViewPort = true\n    loadWithOverviewMode = true\n    allowFileAccess = true\n    layoutAlgorithm = WebSettings.LayoutAlgorithm.NORMAL\n    domStorageEnabled = true\n    mediaPlaybackRequiresUserGesture = false\n    setSupportZoom(true)\n    builtInZoomControls = true\n    displayZoomControls = false\n}\n\n// \u52a0\u8f7d\u5236\u5b9a url\nmWebView.loadUrl("https://greyhao.github.io/redear-blog/")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u5728-webview-\u4e2d\u64ad\u653e\u7f51\u9875\u89c6\u9891\u652f\u6301\u6a2a\u5c4f\u9009\u96c6\u8f93\u5165\u5f39\u5e55\u7b49\u529f\u80fd",children:"\u5728 WebView \u4e2d\u64ad\u653e\u7f51\u9875\u89c6\u9891\uff0c\u652f\u6301\u6a2a\u5c4f\u3001\u9009\u96c6\u3001\u8f93\u5165\u5f39\u5e55\u7b49\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u6a2a\u5c4f\u9700\u8981\u8bbe\u7f6e\u5b9a\u4e49 view\uff0c\u8f93\u5165\u6846\u9700\u8981\u652f\u6301\u7126\u70b9\u53ef\u83b7\u53d6"}),"\n",(0,t.jsx)(n.h3,{id:"\u5e03\u5c40\u90e8\u5206",children:"\u5e03\u5c40\u90e8\u5206"}),"\n",(0,t.jsxs)(n.p,{children:["\u5e03\u5c40\u4e2d\u6dfb\u52a0 ",(0,t.jsx)(n.code,{children:"FrameLayout"})," \u7528\u6765\u6dfb\u52a0\u6a2a\u5c4f\u64ad\u653e\u7684 ",(0,t.jsx)(n.code,{children:"view"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'\x3c!-- \u5e03\u5c40 --\x3e\n<LinearLayout\n    android:layout_width="match_parent"\n    android:layout_height="match_parent"\n    android:orientation="vertical">\n    \x3c!-- \u7528\u6765\u627f\u8f7d\u6a2a\u5c4f\u64ad\u653e\u89c6\u9891 view --\x3e\n    <FrameLayout\n        android:id="@+id/fl_full"\n        android:layout_width="match_parent"\n        android:layout_height="match_parent"\n        android:visibility="gone" />\n\n    <WebView\n        android:id="@+id/wv_url"\n        android:layout_width="match_parent"\n        android:layout_height="match_parent"\n        android:layerType="hardware" />\n</LinearLayout>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u4ee3\u7801\u90e8\u5206",children:"\u4ee3\u7801\u90e8\u5206"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e3b\u8981\u901a\u8fc7\u8bbe\u7f6e\u81ea\u5b9a\u4e49 ",(0,t.jsx)(n.code,{children:"WebChromeClient"})," \u6765\u5b9e\u73b0"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"private val customWebChromeClient = object : WebChromeClient() {\n\n    // \u89e3\u51b3\u52a0\u8f7d\u65f6\u5019\u663e\u793a\u9ed8\u8ba4\u56fe\u6807\u95ee\u9898\n    override fun getDefaultVideoPoster(): Bitmap? {\n        return Bitmap.createBitmap(1, 1, Bitmap.Config.ARGB_8888)\n    }\n\n    // \u6a2a\u5c4f\u64ad\u653e\u4e3b\u8981\u903b\u8f91\n    override fun onShowCustomView(view: View?, callback: CustomViewCallback?) {\n        if (customView != null) {\n            callback?.onCustomViewHidden()\n            return\n        }\n        customView = view\n        customViewContainer.addView(customView)\n        customViewCallback = callback\n        mWebView.visibility = View.GONE\n        customViewContainer.visibility = View.VISIBLE\n        binding.swipeRefreshLayout.isEnabled = false\n        requestedOrientation = ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE\n        enableFullScreenMode(true)\n    }\n\n    // \u9000\u51fa\u6a2a\u5c4f\u64ad\u653e\n    override fun onHideCustomView() {\n        if (customView == null) {\n            return\n        }\n        exitFull()\n    }\n\n    // \u663e\u793a\u8f6f\u952e\u76d8\n    override fun onRequestFocus(view: WebView?) {\n        super.onRequestFocus(view)\n        val inputMethodManager = getSystemService(INPUT_METHOD_SERVICE) as InputMethodManager\n        inputMethodManager.showSoftInput(view, InputMethodManager.SHOW_IMPLICIT)\n    }\n}\n\n// \u9000\u51fa\u6a2a\u5c4f\u64ad\u653e\nprivate fun exitFull() {\n    customViewContainer.removeView(customView)\n    customView = null\n    customViewContainer.visibility = View.GONE\n    customViewCallback?.onCustomViewHidden()\n    mWebView.visibility = View.VISIBLE\n    requestedOrientation = ActivityInfo.SCREEN_ORIENTATION_PORTRAIT\n}\n\nmWebView.setOnTouchListener { _, _ ->\n    mWebView.requestFocus(View.FOCUS_DOWN)\n    false\n}\n\n// \u8bbe\u7f6e webChromeClient\nmWebView.webChromeClient = customWebChromeClient\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u4e0b\u62c9\u5237\u65b0\u6ed1\u52a8\u51b2\u7a81\u95ee\u9898",children:"\u4e0b\u62c9\u5237\u65b0\u6ed1\u52a8\u51b2\u7a81\u95ee\u9898"}),"\n",(0,t.jsx)(n.p,{children:"SwipeRefreshLayout \u5d4c\u5957 WebView \u5bfc\u81f4\u7684\u6ed1\u52a8\u51b2\u7a81\uff0c\u901a\u8fc7\u6dfb\u52a0\u6eda\u52a8\u4f4d\u7f6e\u5224\u65ad\u89e3\u51b3\u51b2\u7a81"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"mWebView.setOnScrollChangeListener { _, _, scrollY, _, _ ->\n    binding.swipeRefreshLayout.isEnabled = (scrollY == 0)\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>a});var t=i(6540);const r={},o=t.createContext(r);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);