"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[17125],{79874:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return u}});var n=a(93106);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},c="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),c=m(a),s=r,u=c["".concat(o,".").concat(s)]||c[s]||k[s]||l;return a?n.createElement(u,i(i({ref:e},d),{},{components:a})):n.createElement(u,i({ref:e},d))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[c]="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},40844:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return d}});a(93106);var n=a(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const i={title:"Taro.canvasToTempFilePath(option, component)",sidebar_label:"canvasToTempFilePath"},p=void 0,o={unversionedId:"apis/canvas/canvasToTempFilePath",id:"version-3.x/apis/canvas/canvasToTempFilePath",title:"Taro.canvasToTempFilePath(option, component)",description:"\u628a\u5f53\u524d\u753b\u5e03\u6307\u5b9a\u533a\u57df\u7684\u5185\u5bb9\u5bfc\u51fa\u751f\u6210\u6307\u5b9a\u5927\u5c0f\u7684\u56fe\u7247\u3002\u5728 draw() \u56de\u8c03\u91cc\u8c03\u7528\u8be5\u65b9\u6cd5\u624d\u80fd\u4fdd\u8bc1\u56fe\u7247\u5bfc\u51fa\u6210\u529f\u3002",source:"@site/versioned_docs/version-3.x/apis/canvas/canvasToTempFilePath.md",sourceDirName:"apis/canvas",slug:"/apis/canvas/canvasToTempFilePath",permalink:"/taro-docs/docs/apis/canvas/canvasToTempFilePath",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/canvas/canvasToTempFilePath.md",tags:[],version:"3.x",frontMatter:{title:"Taro.canvasToTempFilePath(option, component)",sidebar_label:"canvasToTempFilePath"},sidebar:"API",previous:{title:"createCanvasContext",permalink:"/taro-docs/docs/apis/canvas/createCanvasContext"},next:{title:"canvasPutImageData",permalink:"/taro-docs/docs/apis/canvas/canvasPutImageData"}},m={},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",level:3},{value:"FileType",id:"filetype",level:3},{value:"CanvasProps",id:"canvasprops",level:3},{value:"onErrorEventDetail",id:"onerroreventdetail",level:4},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],c={toc:d},k="wrapper";function s(t){var{components:e}=t,i=l(t,["components"]);return(0,n.kt)(k,r({},c,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u628a\u5f53\u524d\u753b\u5e03\u6307\u5b9a\u533a\u57df\u7684\u5185\u5bb9\u5bfc\u51fa\u751f\u6210\u6307\u5b9a\u5927\u5c0f\u7684\u56fe\u7247\u3002\u5728 ",(0,n.kt)("inlineCode",{parentName:"p"},"draw()")," \u56de\u8c03\u91cc\u8c03\u7528\u8be5\u65b9\u6cd5\u624d\u80fd\u4fdd\u8bc1\u56fe\u7247\u5bfc\u51fa\u6210\u529f\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Bug & Tip\uff1a")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"tip"),": \u5728 ",(0,n.kt)("inlineCode",{parentName:"li"},"draw")," \u56de\u8c03\u91cc\u8c03\u7528\u8be5\u65b9\u6cd5\u624d\u80fd\u4fdd\u8bc1\u56fe\u7247\u5bfc\u51fa\u6210\u529f\u3002")),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(41524).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:a(26443).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:a(79046).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u6296\u97f3\u5c0f\u7a0b\u5e8f",src:a(24997).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"QQ \u5c0f\u7a0b\u5e8f",src:a(49182).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f",src:a(24238).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:a(34208).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:a(20303).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony",src:a(83025).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony hybrid",src:a(46315).Z,className:"icon_platform",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasToTempFilePath.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",r({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(option: Option, component?: TaroGeneral.IAnyObject) => Promise<SuccessCallbackResult>\n")),(0,n.kt)("h2",r({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"option"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Option")),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"component"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"TaroGeneral.IAnyObject")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e0b\uff0c\u5f53\u524d\u7ec4\u4ef6\u5b9e\u4f8b\u7684this\uff0c\u4ee5\u64cd\u4f5c\u7ec4\u4ef6\u5185 ",(0,n.kt)("a",r({parentName:"td"},{href:"/docs/components/canvas"}),"canvas")," \u7ec4\u4ef6")))),(0,n.kt)("h3",r({},{id:"option"}),"Option"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"canvas"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Canvas")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u753b\u5e03\u6807\u8bc6\uff0c\u4f20\u5165 ",(0,n.kt)("a",r({parentName:"td"},{href:"/docs/components/canvas"}),"canvas"),' \u7ec4\u4ef6\u5b9e\u4f8b \uff08canvas type="2d" \u65f6\u4f7f\u7528\u8be5\u5c5e\u6027\uff09\u3002')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"canvasId"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u753b\u5e03\u6807\u8bc6\uff0c\u4f20\u5165 ",(0,n.kt)("a",r({parentName:"td"},{href:"/docs/components/canvas"}),"canvas")," \u7ec4\u4ef6\u7684 canvas-id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"quality"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u56fe\u7247\u7684\u8d28\u91cf\uff0c\u76ee\u524d\u4ec5\u5bf9 jpg \u6709\u6548\u3002\u53d6\u503c\u8303\u56f4\u4e3a (0, 1]\uff0c\u4e0d\u5728\u8303\u56f4\u5185\u65f6\u5f53\u4f5c 1.0 \u5904\u7406\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"complete"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"destHeight"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u8f93\u51fa\u7684\u56fe\u7247\u7684\u9ad8\u5ea6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"destWidth"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u8f93\u51fa\u7684\u56fe\u7247\u7684\u5bbd\u5ea6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"fail"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"fileType"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"keyof FileType")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},'"png"')),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u76ee\u6807\u6587\u4ef6\u7684\u7c7b\u578b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"height"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u6307\u5b9a\u7684\u753b\u5e03\u533a\u57df\u7684\u9ad8\u5ea6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"success"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"(result: SuccessCallbackResult) => void")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"width"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u6307\u5b9a\u7684\u753b\u5e03\u533a\u57df\u7684\u5bbd\u5ea6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"x"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u6307\u5b9a\u7684\u753b\u5e03\u533a\u57df\u7684\u5de6\u4e0a\u89d2\u6a2a\u5750\u6807")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"y"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u6307\u5b9a\u7684\u753b\u5e03\u533a\u57df\u7684\u5de6\u4e0a\u89d2\u7eb5\u5750\u6807")))),(0,n.kt)("h3",r({},{id:"successcallbackresult"}),"SuccessCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"tempFilePath"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u751f\u6210\u6587\u4ef6\u7684\u4e34\u65f6\u8def\u5f84")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"apFilePath"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u56fe\u7247\u8def\u5f84(\u672c\u5730\u4e34\u65f6\u6587\u4ef6)\u3002",(0,n.kt)("br",null),"API \u652f\u6301\u5ea6: alipay")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"errMsg"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u8c03\u7528\u7ed3\u679c")))),(0,n.kt)("h3",r({},{id:"filetype"}),"FileType"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"jpg"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"jpg \u56fe\u7247")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"png"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"png \u56fe\u7247")))),(0,n.kt)("h3",r({},{id:"canvasprops"}),"CanvasProps"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"type"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u6307\u5b9a canvas \u7c7b\u578b\uff0c\u652f\u6301 2d \u548c webgl")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"canvasId"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"canvas \u7ec4\u4ef6\u7684\u552f\u4e00\u6807\u8bc6\u7b26\uff0c\u82e5\u6307\u5b9a\u4e86 type \u5219\u65e0\u9700\u518d\u6307\u5b9a\u8be5\u5c5e\u6027")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"disableScroll"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u5f53\u5728 canvas \u4e2d\u79fb\u52a8\u65f6\u4e14\u6709\u7ed1\u5b9a\u624b\u52bf\u4e8b\u4ef6\u65f6\uff0c\u7981\u6b62\u5c4f\u5e55\u6eda\u52a8\u4ee5\u53ca\u4e0b\u62c9\u5237\u65b0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"onTouchStart"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"TaroGeneral.CommonEventFunction")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u624b\u6307\u89e6\u6478\u52a8\u4f5c\u5f00\u59cb")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"onTouchMove"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"TaroGeneral.CommonEventFunction")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u624b\u6307\u89e6\u6478\u540e\u79fb\u52a8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"onTouchEnd"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"TaroGeneral.CommonEventFunction")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u624b\u6307\u89e6\u6478\u52a8\u4f5c\u7ed3\u675f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"onTouchCancel"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"TaroGeneral.CommonEventFunction")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u624b\u6307\u89e6\u6478\u52a8\u4f5c\u88ab\u6253\u65ad\uff0c\u5982\u6765\u7535\u63d0\u9192\uff0c\u5f39\u7a97")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"onLongTap"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"TaroGeneral.CommonEventFunction")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u624b\u6307\u957f\u6309 500ms \u4e4b\u540e\u89e6\u53d1\uff0c\u89e6\u53d1\u4e86\u957f\u6309\u4e8b\u4ef6\u540e\u8fdb\u884c\u79fb\u52a8\u4e0d\u4f1a\u89e6\u53d1\u5c4f\u5e55\u7684\u6eda\u52a8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"onError"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"TaroGeneral.CommonEventFunction<onErrorEventDetail>")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u5f53\u53d1\u751f\u9519\u8bef\u65f6\u89e6\u53d1 error \u4e8b\u4ef6\uff0cdetail = {errMsg: 'something wrong'}")))),(0,n.kt)("h4",r({},{id:"onerroreventdetail"}),"onErrorEventDetail"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"errMsg"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string"))))),(0,n.kt)("h2",r({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Taro.canvasToTempFilePath({\n  x: 100,\n  y: 200,\n  width: 50,\n  height: 50,\n  destWidth: 100,\n  destHeight: 100,\n  canvasId: 'myCanvas',\n  success: function (res) {\n    console.log(res.tempFilePath)\n  }\n})\n")))}s.isMDXComponent=!0},79046:function(t,e,a){e.Z=a.p+"assets/images/alipay-ee5545de747ce1ad6e17faec10358975.png"},34208:function(t,e,a){e.Z=a.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},83025:function(t,e,a){e.Z=a.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},46315:function(t,e,a){e.Z=a.p+"assets/images/harmonyHybrid-6863e1846520e53fd5c12455c07147cd.png"},24238:function(t,e,a){e.Z=a.p+"assets/images/jd-03cf3bd618bc6274dd94e14928e325c3.png"},49182:function(t,e,a){e.Z=a.p+"assets/images/qq-3f77e6fbb490848ab8aa8183e9399110.png"},20303:function(t,e,a){e.Z=a.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},26443:function(t,e,a){e.Z=a.p+"assets/images/swan-566f56d360909d0457073b67b8f48958.png"},24997:function(t,e,a){e.Z=a.p+"assets/images/tt-f4ec120e570f924e7ef763dcaf7fc69d.png"},41524:function(t,e,a){e.Z=a.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);