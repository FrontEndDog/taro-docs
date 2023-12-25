"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[4964],{79874:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return g}});var a=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},c="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=d(n),u=r,g=c["".concat(p,".").concat(u)]||c[u]||s[u]||i;return n?a.createElement(g,l(l({ref:e},m),{},{components:n})):a.createElement(g,l({ref:e},m))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[c]="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50746:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});n(93106);var a=n(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r.apply(this,arguments)}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const l={title:"Taro.navigateToMiniProgram(option)",sidebar_label:"navigateToMiniProgram"},o=void 0,p={unversionedId:"apis/navigate/navigateToMiniProgram",id:"version-3.x/apis/navigate/navigateToMiniProgram",title:"Taro.navigateToMiniProgram(option)",description:"\u6253\u5f00\u53e6\u4e00\u4e2a\u5c0f\u7a0b\u5e8f",source:"@site/versioned_docs/version-3.x/apis/navigate/navigateToMiniProgram.md",sourceDirName:"apis/navigate",slug:"/apis/navigate/navigateToMiniProgram",permalink:"/taro-docs/docs/apis/navigate/navigateToMiniProgram",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/navigate/navigateToMiniProgram.md",tags:[],version:"3.x",frontMatter:{title:"Taro.navigateToMiniProgram(option)",sidebar_label:"navigateToMiniProgram"},sidebar:"API",previous:{title:"openEmbeddedMiniProgram",permalink:"/taro-docs/docs/apis/navigate/openEmbeddedMiniProgram"},next:{title:"navigateBackMiniProgram",permalink:"/taro-docs/docs/apis/navigate/navigateBackMiniProgram"}},d={},m=[{value:"\u9700\u8981\u7528\u6237\u89e6\u53d1\u8df3\u8f6c",id:"\u9700\u8981\u7528\u6237\u89e6\u53d1\u8df3\u8f6c",level:5},{value:"\u9700\u8981\u7528\u6237\u786e\u8ba4\u8df3\u8f6c",id:"\u9700\u8981\u7528\u6237\u786e\u8ba4\u8df3\u8f6c",level:5},{value:"\u6bcf\u4e2a\u5c0f\u7a0b\u5e8f\u53ef\u8df3\u8f6c\u7684\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u6570\u91cf\u9650\u5236\u4e3a\u4e0d\u8d85\u8fc7 10 \u4e2a",id:"\u6bcf\u4e2a\u5c0f\u7a0b\u5e8f\u53ef\u8df3\u8f6c\u7684\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u6570\u91cf\u9650\u5236\u4e3a\u4e0d\u8d85\u8fc7-10-\u4e2a",level:5},{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"EnvVersion",id:"envversion",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],c={toc:m},s="wrapper";function u(t){var{components:e}=t,l=i(t,["components"]);return(0,a.kt)(s,r({},c,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6253\u5f00\u53e6\u4e00\u4e2a\u5c0f\u7a0b\u5e8f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u9650\u5236")),(0,a.kt)("h5",r({},{id:"\u9700\u8981\u7528\u6237\u89e6\u53d1\u8df3\u8f6c"}),"\u9700\u8981\u7528\u6237\u89e6\u53d1\u8df3\u8f6c"),(0,a.kt)("p",null,"\u4ece 2.3.0 \u7248\u672c\u5f00\u59cb\uff0c\u82e5\u7528\u6237\u672a\u70b9\u51fb\u5c0f\u7a0b\u5e8f\u9875\u9762\u4efb\u610f\u4f4d\u7f6e\uff0c\u5219\u5f00\u53d1\u8005\u5c06\u65e0\u6cd5\u8c03\u7528\u6b64\u63a5\u53e3\u81ea\u52a8\u8df3\u8f6c\u81f3\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u3002"),(0,a.kt)("h5",r({},{id:"\u9700\u8981\u7528\u6237\u786e\u8ba4\u8df3\u8f6c"}),"\u9700\u8981\u7528\u6237\u786e\u8ba4\u8df3\u8f6c"),(0,a.kt)("p",null,"\u4ece 2.3.0 \u7248\u672c\u5f00\u59cb\uff0c\u5728\u8df3\u8f6c\u81f3\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u524d\uff0c\u5c06\u7edf\u4e00\u589e\u52a0\u5f39\u7a97\uff0c\u8be2\u95ee\u662f\u5426\u8df3\u8f6c\uff0c\u7528\u6237\u786e\u8ba4\u540e\u624d\u53ef\u4ee5\u8df3\u8f6c\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u3002\u5982\u679c\u7528\u6237\u70b9\u51fb\u53d6\u6d88\uff0c\u5219\u56de\u8c03 ",(0,a.kt)("inlineCode",{parentName:"p"},"fail cancel"),"\u3002"),(0,a.kt)("h5",r({},{id:"\u6bcf\u4e2a\u5c0f\u7a0b\u5e8f\u53ef\u8df3\u8f6c\u7684\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u6570\u91cf\u9650\u5236\u4e3a\u4e0d\u8d85\u8fc7-10-\u4e2a"}),"\u6bcf\u4e2a\u5c0f\u7a0b\u5e8f\u53ef\u8df3\u8f6c\u7684\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u6570\u91cf\u9650\u5236\u4e3a\u4e0d\u8d85\u8fc7 10 \u4e2a"),(0,a.kt)("p",null,"\u4ece 2.4.0 \u7248\u672c\u4ee5\u53ca\u6307\u5b9a\u65e5\u671f\uff08\u5177\u4f53\u5f85\u5b9a\uff09\u5f00\u59cb\uff0c\u5f00\u53d1\u8005\u63d0\u4ea4\u65b0\u7248\u5c0f\u7a0b\u5e8f\u4ee3\u7801\u65f6\uff0c\u5982\u4f7f\u7528\u4e86\u8df3\u8f6c\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u529f\u80fd\uff0c\u5219\u9700\u8981\u5728\u4ee3\u7801\u914d\u7f6e\u4e2d\u58f0\u660e\u5c06\u8981\u8df3\u8f6c\u7684\u5c0f\u7a0b\u5e8f\u540d\u5355\uff0c\u9650\u5b9a\u4e0d\u8d85\u8fc7 10 \u4e2a\uff0c\u5426\u5219\u5c06\u65e0\u6cd5\u901a\u8fc7\u5ba1\u6838\u3002\u8be5\u540d\u5355\u53ef\u5728\u53d1\u5e03\u65b0\u7248\u65f6\u66f4\u65b0\uff0c\u4e0d\u652f\u6301\u52a8\u6001\u4fee\u6539\u3002\u914d\u7f6e\u65b9\u6cd5\u8be6\u89c1 ",(0,a.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html"}),"\u5c0f\u7a0b\u5e8f\u5168\u5c40\u914d\u7f6e"),"\u3002\u8c03\u7528\u6b64\u63a5\u53e3\u65f6\uff0c\u6240\u8df3\u8f6c\u7684 appId \u5fc5\u987b\u5728\u914d\u7f6e\u5217\u8868\u4e2d\uff0c\u5426\u5219\u56de\u8c03 ",(0,a.kt)("inlineCode",{parentName:"p"},'fail appId "${appId}" is not in navigateToMiniProgramAppIdList'),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5173\u4e8e\u8c03\u8bd5")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u5f00\u53d1\u8005\u5de5\u5177\u4e0a\u8c03\u7528\u6b64 API \u5e76\u4e0d\u4f1a\u771f\u5b9e\u7684\u8df3\u8f6c\u5230\u53e6\u5916\u7684\u5c0f\u7a0b\u5e8f\uff0c\u4f46\u662f\u5f00\u53d1\u8005\u5de5\u5177\u4f1a\u6821\u9a8c\u672c\u6b21\u8c03\u7528\u8df3\u8f6c\u662f\u5426\u6210\u529f\u3002",(0,a.kt)("a",r({parentName:"li"},{href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/different.html#%E8%B7%B3%E8%BD%AC%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B0%83%E8%AF%95%E6%94%AF%E6%8C%81"}),"\u8be6\u60c5")),(0,a.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u8005\u5de5\u5177\u4e0a\u652f\u6301\u88ab\u8df3\u8f6c\u7684\u5c0f\u7a0b\u5e8f\u5904\u7406\u63a5\u6536\u53c2\u6570\u7684\u8c03\u8bd5\u3002",(0,a.kt)("a",r({parentName:"li"},{href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/different.html#%E8%B7%B3%E8%BD%AC%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B0%83%E8%AF%95%E6%94%AF%E6%8C%81"}),"\u8be6\u60c5"))),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(72369).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u6296\u97f3\u5c0f\u7a0b\u5e8f",src:n(58939).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:n(83190).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:n(519).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"Harmony",src:n(75e3).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/miniprogram-navigate/wx.navigateToMiniProgram.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",r({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<TaroGeneral.CallbackResult>\n")),(0,a.kt)("h2",r({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"option"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,a.kt)("h3",r({},{id:"option"}),"Option"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"appId"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u8981\u6253\u5f00\u7684\u5c0f\u7a0b\u5e8f appId")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"path"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u6253\u5f00\u7684\u9875\u9762\u8def\u5f84\uff0c\u5982\u679c\u4e3a\u7a7a\u5219\u6253\u5f00\u9996\u9875\u3002path \u4e2d ? \u540e\u9762\u7684\u90e8\u5206\u4f1a\u6210\u4e3a query\uff0c\u5728\u5c0f\u7a0b\u5e8f\u7684 ",(0,a.kt)("inlineCode",{parentName:"td"},"App.onLaunch"),"\u3001",(0,a.kt)("inlineCode",{parentName:"td"},"App.onShow")," \u548c ",(0,a.kt)("inlineCode",{parentName:"td"},"Page.onLoad")," \u7684\u56de\u8c03\u51fd\u6570\u6216\u5c0f\u6e38\u620f\u7684 ",(0,a.kt)("a",r({parentName:"td"},{href:"#"}),"Taro.onShow")," \u56de\u8c03\u51fd\u6570\u3001",(0,a.kt)("a",r({parentName:"td"},{href:"/docs/apis/base/weapp/life-cycle/getLaunchOptionsSync"}),"Taro.getLaunchOptionsSync"),' \u4e2d\u53ef\u4ee5\u83b7\u53d6\u5230 query \u6570\u636e\u3002\u5bf9\u4e8e\u5c0f\u6e38\u620f\uff0c\u53ef\u4ee5\u53ea\u4f20\u5165 query \u90e8\u5206\uff0c\u6765\u5b9e\u73b0\u4f20\u53c2\u6548\u679c\uff0c\u5982\uff1a\u4f20\u5165 "?foo=bar"\u3002')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"extraData"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"TaroGeneral.IAnyObject")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u9700\u8981\u4f20\u9012\u7ed9\u76ee\u6807\u5c0f\u7a0b\u5e8f\u7684\u6570\u636e\uff0c\u76ee\u6807\u5c0f\u7a0b\u5e8f\u53ef\u5728 ",(0,a.kt)("inlineCode",{parentName:"td"},"App.onLaunch"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"td"},"App.onShow")," \u4e2d\u83b7\u53d6\u5230\u8fd9\u4efd\u6570\u636e\u3002\u5982\u679c\u8df3\u8f6c\u7684\u662f\u5c0f\u6e38\u620f\uff0c\u53ef\u4ee5\u5728 ",(0,a.kt)("a",r({parentName:"td"},{href:"#"}),"Taro.onShow"),"\u3001",(0,a.kt)("a",r({parentName:"td"},{href:"/docs/apis/base/weapp/life-cycle/getLaunchOptionsSync"}),"Taro.getLaunchOptionsSync")," \u4e2d\u53ef\u4ee5\u83b7\u53d6\u5230\u8fd9\u4efd\u6570\u636e\u6570\u636e\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"envVersion"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"keyof EnvVersion")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u8981\u6253\u5f00\u7684\u5c0f\u7a0b\u5e8f\u7248\u672c\u3002\u4ec5\u5728\u5f53\u524d\u5c0f\u7a0b\u5e8f\u4e3a\u5f00\u53d1\u7248\u6216\u4f53\u9a8c\u7248\u65f6\u6b64\u53c2\u6570\u6709\u6548\u3002\u5982\u679c\u5f53\u524d\u5c0f\u7a0b\u5e8f\u662f\u6b63\u5f0f\u7248\uff0c\u5219\u6253\u5f00\u7684\u5c0f\u7a0b\u5e8f\u5fc5\u5b9a\u662f\u6b63\u5f0f\u7248\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"shortLink"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5c0f\u7a0b\u5e8f\u94fe\u63a5\uff0c\u5f53\u4f20\u9012\u8be5\u53c2\u6570\u540e\uff0c\u53ef\u4ee5\u4e0d\u4f20 appId \u548c path\u3002\u94fe\u63a5\u53ef\u4ee5\u901a\u8fc7\u3010\u5c0f\u7a0b\u5e8f\u83dc\u5355\u3011->\u3010\u590d\u5236\u94fe\u63a5\u3011\u83b7\u53d6\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"success"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"fail"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"complete"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),(0,a.kt)("h3",r({},{id:"envversion"}),"EnvVersion"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"develop"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5f00\u53d1\u7248")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"trial"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u4f53\u9a8c\u7248")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"release"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u6b63\u5f0f\u7248")))),(0,a.kt)("h2",r({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Taro.navigateToMiniProgram({\n  appId: '',\n  path: 'page/index/index?id=123',\n  extraData: {\n    foo: 'bar'\n  },\n  envVersion: 'develop',\n  success: function(res) {\n    // \u6253\u5f00\u6210\u529f\n  }\n})\n")))}u.isMDXComponent=!0},83190:function(t,e,n){e.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},75e3:function(t,e,n){e.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},519:function(t,e,n){e.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},58939:function(t,e,n){e.Z=n.p+"assets/images/tt-f4ec120e570f924e7ef763dcaf7fc69d.png"},72369:function(t,e,n){e.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);