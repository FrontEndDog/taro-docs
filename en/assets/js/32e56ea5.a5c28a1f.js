"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[79137],{79874:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,k=s["".concat(p,".").concat(m)]||s[m]||u[m]||i;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85778:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={title:"Taro.requestDeviceVoIP(option)",sidebar_label:"requestDeviceVoIP"},o=void 0,p={unversionedId:"apis/open-api/device-voip/requestDeviceVoIP",id:"version-4.x/apis/open-api/device-voip/requestDeviceVoIP",title:"Taro.requestDeviceVoIP(option)",description:"\u8bf7\u6c42\u7528\u6237\u6388\u6743\u4e0e\u8bbe\u5907\uff08\u7ec4\uff09\u95f4\u8fdb\u884c\u97f3\u89c6\u9891\u901a\u8bdd",source:"@site/versioned_docs/version-4.x/apis/open-api/device-voip/requestDeviceVoIP.md",sourceDirName:"apis/open-api/device-voip",slug:"/apis/open-api/device-voip/requestDeviceVoIP",permalink:"/taro-docs/en/docs/4.x/apis/open-api/device-voip/requestDeviceVoIP",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-4.x/apis/open-api/device-voip/requestDeviceVoIP.md",tags:[],version:"4.x",frontMatter:{title:"Taro.requestDeviceVoIP(option)",sidebar_label:"requestDeviceVoIP"},sidebar:"API",previous:{title:"getChannelsLiveInfo",permalink:"/taro-docs/en/docs/4.x/apis/open-api/channels/getChannelsLiveInfo"},next:{title:"getDeviceVoIPList",permalink:"/taro-docs/en/docs/4.x/apis/open-api/device-voip/getDeviceVoIPList"}},c={},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3}],s={toc:d},u="wrapper";function m(e){var{components:t}=e,l=i(e,["components"]);return(0,r.kt)(u,a({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8bf7\u6c42\u7528\u6237\u6388\u6743\u4e0e\u8bbe\u5907\uff08\u7ec4\uff09\u95f4\u8fdb\u884c\u97f3\u89c6\u9891\u901a\u8bdd"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(72369).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:n(83190).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:n(519).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"Harmony",src:n(75e3).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/device-voip/wx.requestDeviceVoIP.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<TaroGeneral.CallbackResult>\n")),(0,r.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"option"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,r.kt)("h3",a({},{id:"option"}),"Option"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"sn"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u662f"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u8bbe\u5907\u552f\u4e00\u5e8f\u5217\u53f7\u3002\u7531\u5382\u5546\u5206\u914d\uff0c\u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc7128\u5b57\u8282\u3002\u5b57\u7b26\u53ea\u63a5\u53d7\u6570\u5b57\uff0c\u5927\u5c0f\u5199\u5b57\u6bcd\uff0c\u4e0b\u5212\u7ebf\uff08_\uff09\u548c\u8fde\u5b57\u7b26\uff08-\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"snTicket"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u662f"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u8bbe\u5907\u7968\u636e\uff0c5\u5206\u949f\u5185\u6709\u6548")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"modelId"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u662f"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u8bbe\u5907\u578b\u53f7 id\u3002\u901a\u8fc7\u5fae\u4fe1\u516c\u4f17\u5e73\u53f0\u6ce8\u518c\u8bbe\u5907\u83b7\u5f97\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"deviceName"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u662f"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u8bbe\u5907\u540d\u79f0\uff0c\u5c06\u663e\u793a\u5728\u6388\u6743\u5f39\u7a97\u5185\uff08\u957f\u5ea6\u4e0d\u8d85\u8fc713\uff09\u3002\u6388\u6743\u6846\u4e2d\u300c\u8bbe\u5907\u540d\u5b57\u300d= \u300cdeviceName\u300d + \u300cmodelId \u5bf9\u5e94\u8bbe\u5907\u578b\u53f7\u300d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"isGroup"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u662f\u5426\u4e3a\u6388\u6743\u8bbe\u5907\u7ec4\uff0c\u9ed8\u8ba4 false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"groupId"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u662f"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u8bbe\u5907\u7ec4\u7684\u552f\u4e00\u6807\u8bc6 id \u3002isGroup \u4e3a true \u65f6\u53ea\u9700\u8981\u4f20\u8be5\u53c2\u6570\uff0cisGroup \u4e3a false \u65f6\u4e0d\u9700\u8981\u4f20\u8be5\u53c2\u6570\uff0c\u4f46\u9700\u8981\u4f20 sn\u3001snTicket\u3001modelId\u3001deviceName \u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"complete"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"fail"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"success"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"(result: TaroGeneral.CallbackResult) => void")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))))}m.isMDXComponent=!0},83190:function(e,t,n){t.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},75e3:function(e,t,n){t.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},519:function(e,t,n){t.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},72369:function(e,t,n){t.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);