"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[49536],{79874:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return b}});var a=r(93106);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),c=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),u=c(r),m=n,b=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(b,i(i({ref:e},s),{},{components:r})):a.createElement(b,i({ref:e},s))}));function b(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[u]="string"==typeof t?t:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62396:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});r(93106);var a=r(79874);function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},n.apply(this,arguments)}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}const i={title:"Taro.showTabBarRedDot(option)",sidebar_label:"showTabBarRedDot"},l=void 0,p={unversionedId:"apis/ui/tab-bar/showTabBarRedDot",id:"version-3.x/apis/ui/tab-bar/showTabBarRedDot",title:"Taro.showTabBarRedDot(option)",description:"\u663e\u793a tabBar \u67d0\u4e00\u9879\u7684\u53f3\u4e0a\u89d2\u7684\u7ea2\u70b9",source:"@site/versioned_docs/version-3.x/apis/ui/tab-bar/showTabBarRedDot.md",sourceDirName:"apis/ui/tab-bar",slug:"/apis/ui/tab-bar/showTabBarRedDot",permalink:"/taro-docs/docs/apis/ui/tab-bar/showTabBarRedDot",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/ui/tab-bar/showTabBarRedDot.md",tags:[],version:"3.x",frontMatter:{title:"Taro.showTabBarRedDot(option)",sidebar_label:"showTabBarRedDot"},sidebar:"API",previous:{title:"setBackgroundColor",permalink:"/taro-docs/docs/apis/ui/background/setBackgroundColor"},next:{title:"showTabBar",permalink:"/taro-docs/docs/apis/ui/tab-bar/showTabBar"}},c={},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3}],u={toc:s},d="wrapper";function m(t){var{components:e}=t,i=o(t,["components"]);return(0,a.kt)(d,n({},u,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u663e\u793a tabBar \u67d0\u4e00\u9879\u7684\u53f3\u4e0a\u89d2\u7684\u7ea2\u70b9"),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(41524).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u6296\u97f3\u5c0f\u7a0b\u5e8f",src:r(24997).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:r(34208).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:r(20303).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"Harmony",src:r(83025).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"Harmony hybrid",src:r(46315).Z,className:"icon_platform",width:"25px"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.showTabBarRedDot.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",n({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<TaroGeneral.CallbackResult>\n")),(0,a.kt)("h2",n({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"option"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,a.kt)("h3",n({},{id:"option"}),"Option"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"index"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u662f"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"tabBar \u7684\u54ea\u4e00\u9879\uff0c\u4ece\u5de6\u8fb9\u7b97\u8d77")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"complete"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"fail"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"success"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))))}m.isMDXComponent=!0},34208:function(t,e,r){e.Z=r.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},83025:function(t,e,r){e.Z=r.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},46315:function(t,e,r){e.Z=r.p+"assets/images/harmonyHybrid-6863e1846520e53fd5c12455c07147cd.png"},20303:function(t,e,r){e.Z=r.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},24997:function(t,e,r){e.Z=r.p+"assets/images/tt-f4ec120e570f924e7ef763dcaf7fc69d.png"},41524:function(t,e,r){e.Z=r.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);