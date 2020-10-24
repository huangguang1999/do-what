# Vue动画







# 响应式布局

## 需求

开发一个在 pc 端和移动端都有较好的体验的平台



## 思路

做到移动端和PC端同时适配，一般有两个大思路：

1. 一套资源，根据判断是否是移动设备而选择加载不同的css。
2. 两套资源，pc和mobile各一套，分开维护，在入口处进入不同的路由。

**两种方式的差别体现在，前者是样式层面分为pc和mobile，后者是页面分为pc和mobile**

两个做法各自的特点：
1.前者适用于两端交互和布局差别不大，交互比较简单的项目。只有一套资源，代码量少，维护起来比较简单。
2.后者则适用于两端交互方式和布局差别大，对设计要求高，拓展性要求高的项目。两套资源，代码量大，前期配置比较复杂，但是两端不相互影响，开发起来不用考虑太多。



## 解决方案

### 一套资源

#### 步骤

##### 1 判断终端设备类型

main.js 中配置，在页面加载前，判断终端设备类型。

```javascript
/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent)
```



##### 2 拆分两套css文件

pc采用px为单位，mobile采用rem和vw结合，并在mobile的css文件中，设置项目font-size，例如设计稿为375px的情况下，`html {font-size: calc(100vw/37.5)}`这时候，当移动设备可视窗口大小为375px时，html的font-size为10px，则1rem=10px。

styles结构如下：将css拆分为pc和mobile两套,每个开发人员都有自己的两套css文件。

![image-20201024104014896](https://gitee.com/huangguang1999/blog-image/raw/master/img/image-20201024104014896.png)

```javascript
// mobile.scss
@import './mobile/hm-mobile.scss';
@import './mobile/tf-mobile.scss';

.no-mobile {
  display: none;
}
html {
  font-size: calc(100vw/37.5);
}
```

```javascript
// pc.scss
@import './pc/hm-pc.scss';
@import './pc/tf-pc.scss';
.no-pc {
  display: none;
}
```



##### 3 加载两套 css 文件

通过判断终端类型，加载不同的 css 文件

```javascript
// main.js配置
import { _isMobile } from '@/utils/utils';
...
...
...
if (_isMobile()) {
  require('./styles/mobile.scss');
  console.log('mobile');
} else {
  console.log('pc');
  require('./styles/pc.scss');
}
```

> **为什么不使用媒体查询，靠一套CSS同时搞定PC和移动端？**考虑到同一套CSS会使得耦合性太高，后期两端维护起来很麻烦，并且若两端项目都要拆分起来成本增加。因此，可以在两套CSS的前提下，针对其中一端，进行响应式实现，比如针对PC端可做大中小屏的响应式，而不是直接从pc横跨到移动端的响应式。



### 两套资源方案

1. [配置两端分开](https://blog.csdn.net/ZFL_123456/article/details/86651316)
2. [**两套资源+判断客户端类型+路由守卫**](https://juejin.im/post/6844904078053474312)



#### 步骤



##### 1 限制路由的规范

* 设置meta的type属性为pc或mobile，path规范为，pc由p\_开头，移动由m\_开头

![image-20201024104629098](https://gitee.com/huangguang1999/blog-image/raw/master/img/image-20201024104629098.png)

* 根路由采用重定位，分别指向移动端和PC端的路由，具体走哪边，由终端类型决定。

![image.png](https://gitee.com/huangguang1999/blog-image/raw/master/img/171115ea2e9a09f0)

![image.png](https://gitee.com/huangguang1999/blog-image/raw/master/img/171115ea2fb83e25)

* 采用按需加载的方式。



##### 2 路由守卫

通过meta的type来对跳转的页面进行拦截，防止直接输入网址造成的跨端访问，当进行跨端访问时，强制拦截，跳转到属于本端类型的相同页面。比如当用手机访问p_index时，跳转到m_index，因此不但meta要设置，两端的页面路由也要保证有一定的规律。这里可做可不做，可以只是拦截跳转到本端首页就可以了。

![image-20201024104808195](https://gitee.com/huangguang1999/blog-image/raw/master/img/image-20201024104808195.png)



##### 3 按端类型动态添加网页meta和使用三方插件

![image-20201024104904234](https://gitee.com/huangguang1999/blog-image/raw/master/img/image-20201024104904234.png)

这里做了移动端适配，所以 m 端的样式开发要以 rem 为准了，或者另外一种方案就是使用 px ，但是最后需要使用 postcss-pxtorem 配置下