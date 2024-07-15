---
sidebar_position: 3  #侧边栏位置
slug: maps # 访问路径
title: 调起地图 App 导航功能 # 侧边栏显示名字
tags: [Android] # 所有 tag 见 tags.yml 中定义
---

# 调起已安装地图 App 导航功能（不用接入地图 SDK）

功能说明：有起始点经纬度和目标点经纬度，打开手机已安装的地图，直接跳到路径规划功能（选择出行方式后可以进行导航）

该实现方式：不需要接入地图 SDK

注意：经纬度统一使用 gcj02 坐标系


## 高德地图实现主要代码

``` kotlin
val intent = Intent().apply {
        action = Intent.ACTION_VIEW
        addCategory(Intent.CATEGORY_DEFAULT)
        setData(Uri.parse("amapuri://route/plan/?sid=&slat=$sLat&slon=$sLon&dlat=$dLat&dlon=$dLon&dname=$dName&dev=0&t=0"))
        setPackage("com.autonavi.minimap")
    }
    startActivity(intent)
```

[高德官方文档](https://lbs.amap.com/api/amap-mobile/guide/android/route)



## 百度地图实现主要代码

``` kotlin
val intent = Intent().apply {
        setData(Uri.parse("baidumap://map/direction?origin=$sLan,$sLon&destination=$dLan,$dLon&coord_type=gcj02&mode=driving&src=andr.baidu.openAPIdemo"));
    }
    startActivity(intent)
```

[百度官方文档](https://lbs.baidu.com/faq/api?title=webapi/uri/andriod)


## 坐标系转换代码

``` java
// wgs84ToGcj02 坐标系转换
class CoordinateConverter {
 
    private static final double a = 6378245.0;
    private static final double ee = 0.00669342162296594323;
 
    public static double[] wgs84ToGcj02(double lat, double lon) {
        if (outOfChina(lat, lon)) {
            return new double[]{lat, lon};
        }
        double dLat = transformLat(lon - 105.0, lat - 35.0);
        double dLon = transformLon(lon - 105.0, lat - 35.0);
        double radLat = lat / 180.0 * Math.PI;
        double magic = Math.sin(radLat);
        magic = 1 - ee * magic * magic;
        double sqrtMagic = Math.sqrt(magic);
        dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * Math.PI);
        dLon = (dLon * 180.0) / (a / sqrtMagic * Math.cos(radLat) * Math.PI);
        double newLat = lat + dLat;
        double newLon = lon + dLon;
        return new double[]{newLat, newLon};
    }
 
    private static boolean outOfChina(double lat, double lon) {
        if (lon < 72.004 || lon > 137.8347) {
            return true;
        }
        if (lat < 0.8293 || lat > 55.8271) {
            return true;
        }
        return false;
    }
 
    private static double transformLat(double x, double y) {
        double ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x));
        ret += (20.0 * Math.sin(6.0 * x * Math.PI) + 20.0 * Math.sin(2.0 * x * Math.PI)) * 2.0 / 3.0;
        ret += (20.0 * Math.sin(y * Math.PI) + 40.0 * Math.sin(y / 3.0 * Math.PI)) * 2.0 / 3.0;
        ret += (160.0 * Math.sin(y / 12.0 * Math.PI) + 320 * Math.sin(y * Math.PI / 30.0)) * 2.0 / 3.0;
        return ret;
    }
 
    private static double transformLon(double x, double y) {
        double ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));
        ret += (20.0 * Math.sin(6.0 * x * Math.PI) + 20.0 * Math.sin(2.0 * x * Math.PI)) * 2.0 / 3.0;
        ret += (20.0 * Math.sin(x * Math.PI) + 40.0 * Math.sin(x / 3.0 * Math.PI)) * 2.0 / 3.0;
        ret += (150.0 * Math.sin(x / 12.0 * Math.PI) + 300.0 * Math.sin(x / 30.0 * Math.PI)) * 2.0 / 3.0;
        return ret;
    }

}
```

## 在线工具
[在线坐标系转换](http://www.wmksj.com/tool/coordinate.html)

