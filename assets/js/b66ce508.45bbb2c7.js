"use strict";(self.webpackChunkredear_blog=self.webpackChunkredear_blog||[]).push([[6016],{9596:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var a=e(4848),r=e(8453);const i={sidebar_position:3,slug:"maps",title:"\u8c03\u8d77\u5730\u56fe App \u5bfc\u822a\u529f\u80fd",tags:["android"]},o="\u8c03\u8d77\u5df2\u5b89\u88c5\u5730\u56fe App \u5bfc\u822a\u529f\u80fd\uff08\u4e0d\u7528\u63a5\u5165\u5730\u56fe SDK\uff09",d={id:"Android/third_maps",title:"\u8c03\u8d77\u5730\u56fe App \u5bfc\u822a\u529f\u80fd",description:"\u529f\u80fd\u8bf4\u660e\uff1a\u6709\u8d77\u59cb\u70b9\u7ecf\u7eac\u5ea6\u548c\u76ee\u6807\u70b9\u7ecf\u7eac\u5ea6\uff0c\u6253\u5f00\u624b\u673a\u5df2\u5b89\u88c5\u7684\u5730\u56fe\uff0c\u76f4\u63a5\u8df3\u5230\u8def\u5f84\u89c4\u5212\u529f\u80fd\uff08\u9009\u62e9\u51fa\u884c\u65b9\u5f0f\u540e\u53ef\u4ee5\u8fdb\u884c\u5bfc\u822a\uff09",source:"@site/docs/Android/third_maps.md",sourceDirName:"Android",slug:"/Android/maps",permalink:"/redear-blog/docs/Android/maps",draft:!1,unlisted:!1,tags:[{inline:!0,label:"android",permalink:"/redear-blog/docs/tags/android"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"maps",title:"\u8c03\u8d77\u5730\u56fe App \u5bfc\u822a\u529f\u80fd",tags:["android"]},sidebar:"tutorialSidebar",previous:{title:"WebView \u4f7f\u7528",permalink:"/redear-blog/docs/Android/webview"},next:{title:"\u521b\u5efa Android \u9879\u76ee",permalink:"/redear-blog/docs/Android/create"}},s={},l=[{value:"\u9ad8\u5fb7\u5730\u56fe\u5b9e\u73b0\u4e3b\u8981\u4ee3\u7801",id:"\u9ad8\u5fb7\u5730\u56fe\u5b9e\u73b0\u4e3b\u8981\u4ee3\u7801",level:2},{value:"\u767e\u5ea6\u5730\u56fe\u5b9e\u73b0\u4e3b\u8981\u4ee3\u7801",id:"\u767e\u5ea6\u5730\u56fe\u5b9e\u73b0\u4e3b\u8981\u4ee3\u7801",level:2},{value:"\u5750\u6807\u7cfb\u8f6c\u6362\u4ee3\u7801",id:"\u5750\u6807\u7cfb\u8f6c\u6362\u4ee3\u7801",level:2},{value:"\u5728\u7ebf\u5de5\u5177",id:"\u5728\u7ebf\u5de5\u5177",level:2}];function c(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"\u8c03\u8d77\u5df2\u5b89\u88c5\u5730\u56fe-app-\u5bfc\u822a\u529f\u80fd\u4e0d\u7528\u63a5\u5165\u5730\u56fe-sdk",children:"\u8c03\u8d77\u5df2\u5b89\u88c5\u5730\u56fe App \u5bfc\u822a\u529f\u80fd\uff08\u4e0d\u7528\u63a5\u5165\u5730\u56fe SDK\uff09"}),"\n",(0,a.jsx)(t.p,{children:"\u529f\u80fd\u8bf4\u660e\uff1a\u6709\u8d77\u59cb\u70b9\u7ecf\u7eac\u5ea6\u548c\u76ee\u6807\u70b9\u7ecf\u7eac\u5ea6\uff0c\u6253\u5f00\u624b\u673a\u5df2\u5b89\u88c5\u7684\u5730\u56fe\uff0c\u76f4\u63a5\u8df3\u5230\u8def\u5f84\u89c4\u5212\u529f\u80fd\uff08\u9009\u62e9\u51fa\u884c\u65b9\u5f0f\u540e\u53ef\u4ee5\u8fdb\u884c\u5bfc\u822a\uff09"}),"\n",(0,a.jsx)(t.p,{children:"\u8be5\u5b9e\u73b0\u65b9\u5f0f\uff1a\u4e0d\u9700\u8981\u63a5\u5165\u5730\u56fe SDK"}),"\n",(0,a.jsx)(t.p,{children:"\u6ce8\u610f\uff1a\u7ecf\u7eac\u5ea6\u7edf\u4e00\u4f7f\u7528 gcj02 \u5750\u6807\u7cfb"}),"\n",(0,a.jsx)(t.h2,{id:"\u9ad8\u5fb7\u5730\u56fe\u5b9e\u73b0\u4e3b\u8981\u4ee3\u7801",children:"\u9ad8\u5fb7\u5730\u56fe\u5b9e\u73b0\u4e3b\u8981\u4ee3\u7801"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-kotlin",children:'val intent = Intent().apply {\n        action = Intent.ACTION_VIEW\n        addCategory(Intent.CATEGORY_DEFAULT)\n        setData(Uri.parse("amapuri://route/plan/?sid=&slat=$sLat&slon=$sLon&dlat=$dLat&dlon=$dLon&dname=$dName&dev=0&t=0"))\n        setPackage("com.autonavi.minimap")\n    }\n    startActivity(intent)\n'})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://lbs.amap.com/api/amap-mobile/guide/android/route",children:"\u9ad8\u5fb7\u5b98\u65b9\u6587\u6863"})}),"\n",(0,a.jsx)(t.h2,{id:"\u767e\u5ea6\u5730\u56fe\u5b9e\u73b0\u4e3b\u8981\u4ee3\u7801",children:"\u767e\u5ea6\u5730\u56fe\u5b9e\u73b0\u4e3b\u8981\u4ee3\u7801"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-kotlin",children:'val intent = Intent().apply {\n        setData(Uri.parse("baidumap://map/direction?origin=$sLan,$sLon&destination=$dLan,$dLon&coord_type=gcj02&mode=driving&src=andr.baidu.openAPIdemo"));\n    }\n    startActivity(intent)\n'})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://lbs.baidu.com/faq/api?title=webapi/uri/andriod",children:"\u767e\u5ea6\u5b98\u65b9\u6587\u6863"})}),"\n",(0,a.jsx)(t.h2,{id:"\u5750\u6807\u7cfb\u8f6c\u6362\u4ee3\u7801",children:"\u5750\u6807\u7cfb\u8f6c\u6362\u4ee3\u7801"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"// wgs84ToGcj02 \u5750\u6807\u7cfb\u8f6c\u6362\nclass CoordinateConverter {\n \n    private static final double a = 6378245.0;\n    private static final double ee = 0.00669342162296594323;\n \n    public static double[] wgs84ToGcj02(double lat, double lon) {\n        if (outOfChina(lat, lon)) {\n            return new double[]{lat, lon};\n        }\n        double dLat = transformLat(lon - 105.0, lat - 35.0);\n        double dLon = transformLon(lon - 105.0, lat - 35.0);\n        double radLat = lat / 180.0 * Math.PI;\n        double magic = Math.sin(radLat);\n        magic = 1 - ee * magic * magic;\n        double sqrtMagic = Math.sqrt(magic);\n        dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * Math.PI);\n        dLon = (dLon * 180.0) / (a / sqrtMagic * Math.cos(radLat) * Math.PI);\n        double newLat = lat + dLat;\n        double newLon = lon + dLon;\n        return new double[]{newLat, newLon};\n    }\n \n    private static boolean outOfChina(double lat, double lon) {\n        if (lon < 72.004 || lon > 137.8347) {\n            return true;\n        }\n        if (lat < 0.8293 || lat > 55.8271) {\n            return true;\n        }\n        return false;\n    }\n \n    private static double transformLat(double x, double y) {\n        double ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x));\n        ret += (20.0 * Math.sin(6.0 * x * Math.PI) + 20.0 * Math.sin(2.0 * x * Math.PI)) * 2.0 / 3.0;\n        ret += (20.0 * Math.sin(y * Math.PI) + 40.0 * Math.sin(y / 3.0 * Math.PI)) * 2.0 / 3.0;\n        ret += (160.0 * Math.sin(y / 12.0 * Math.PI) + 320 * Math.sin(y * Math.PI / 30.0)) * 2.0 / 3.0;\n        return ret;\n    }\n \n    private static double transformLon(double x, double y) {\n        double ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));\n        ret += (20.0 * Math.sin(6.0 * x * Math.PI) + 20.0 * Math.sin(2.0 * x * Math.PI)) * 2.0 / 3.0;\n        ret += (20.0 * Math.sin(x * Math.PI) + 40.0 * Math.sin(x / 3.0 * Math.PI)) * 2.0 / 3.0;\n        ret += (150.0 * Math.sin(x / 12.0 * Math.PI) + 300.0 * Math.sin(x / 30.0 * Math.PI)) * 2.0 / 3.0;\n        return ret;\n    }\n\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"\u5728\u7ebf\u5de5\u5177",children:"\u5728\u7ebf\u5de5\u5177"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"http://www.wmksj.com/tool/coordinate.html",children:"\u5728\u7ebf\u5750\u6807\u7cfb\u8f6c\u6362"})})]})}function u(n={}){const{wrapper:t}={...(0,r.R)(),...n.components};return t?(0,a.jsx)(t,{...n,children:(0,a.jsx)(c,{...n})}):c(n)}},8453:(n,t,e)=>{e.d(t,{R:()=>o,x:()=>d});var a=e(6540);const r={},i=a.createContext(r);function o(n){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function d(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),a.createElement(i.Provider,{value:t},n.children)}}}]);