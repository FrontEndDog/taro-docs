"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[70717],{79874:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return u}});var r=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=d(n),s=a,u=m["".concat(p,".").concat(s)]||m[s]||k[s]||o;return n?r.createElement(u,i(i({ref:e},c),{},{components:n})):r.createElement(u,i({ref:e},c))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[m]="string"==typeof t?t:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},39046:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const i={title:"OpenContainer",sidebar_label:"OpenContainer"},l=void 0,p={unversionedId:"components/skyline/open-container",id:"version-3.x/components/skyline/open-container",title:"OpenContainer",description:"\u5bb9\u5668\u8f6c\u573a\u52a8\u753b\u7ec4\u4ef6",source:"@site/versioned_docs/version-3.x/components/skyline/open-container.md",sourceDirName:"components/skyline",slug:"/components/skyline/open-container",permalink:"/taro-docs/docs/components/skyline/open-container",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/components/skyline/open-container.md",tags:[],version:"3.x",frontMatter:{title:"OpenContainer",sidebar_label:"OpenContainer"},sidebar:"components",previous:{title:"NestedScrollHeader",permalink:"/taro-docs/docs/components/skyline/nested-scroll-header"},next:{title:"ShareElement",permalink:"/taro-docs/docs/components/skyline/share-element"}},d={},c=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"OpenContainerProps",id:"opencontainerprops",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:3}],m={toc:c},k="wrapper";function s(t){var{components:e}=t,i=o(t,["components"]);return(0,r.kt)(k,a({},m,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5bb9\u5668\u8f6c\u573a\u52a8\u753b\u7ec4\u4ef6\n\u70b9\u51fb OpenContainer \u7ec4\u4ef6\uff0c\u5f53\u4f7f\u7528 wx.navigateTo \u8df3\u8f6c\u4e0b\u4e00\u9875\u9762\u65f6\uff0c\u5bf9\u5176\u5b50\u8282\u70b9\u548c\u4e0b\u4e00\u4e2a\u9875\u9762\u8fdb\u884c\u8fc7\u6e21\u3002\n\u4e0b\u4e2a\u9875\u9762\u4ece OpenContainer \u6240\u5728\u4f4d\u7f6e\u5927\u5c0f\u6e10\u663e\u653e\u5927\uff0c\u540c\u65f6 OpenContainer \u5185\u5bb9\u6e10\u9690\uff0c\u8fc7\u6e21\u6548\u679c\u5305\u542b\u80cc\u666f\u8272\u3001\u5706\u89d2\u548c\u9634\u5f71\u3002\n\u6e90\u9875\u9762 OpenContainer \u4e3a closed \u72b6\u6001\uff0c\u8f6c\u573a\u52a8\u753b\u540e\u4e3a open \u72b6\u6001\u3002"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(41524).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:n(34208).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:n(20303).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"Harmony",src:n(83025).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/open-container.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"ComponentType<OpenContainerProps>\n")),(0,r.kt)("h2",a({},{id:"opencontainerprops"}),"OpenContainerProps"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"transitionType"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'"fade" or "fadeThrough"'),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},'"fade"<br /><br />\u53ef\u9009\u503c:<br />- fade: \u5c06\u4f20\u5165\u5143\u7d20\u6de1\u5165\u4f20\u51fa\u5143\u7d20\u4e4b\u4e0a<br />- fadeThrough: \u9996\u5148\u6de1\u51fa\u4f20\u51fa\u5143\u7d20\uff0c\u5e76\u5728\u4f20\u51fa\u5143\u7d20\u5b8c\u5168\u6de1\u51fa\u540e\u5f00\u59cb\u6de1\u5165\u4f20\u5165\u5143\u7d20')),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u52a8\u753b\u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"transitionDuration"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},"300")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u52a8\u753b\u65f6\u957f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"closedColor"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},'"white"')),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u521d\u59cb\u5bb9\u5668\u80cc\u666f\u8272")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"closedElevation"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u521d\u59cb\u5bb9\u5668\u5f71\u6df1\u5927\u5c0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"closeBorderRadius"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u521d\u59cb\u5bb9\u5668\u5706\u89d2\u5927\u5c0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"middleColor"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},'""')),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"fadeThrough \u6a21\u5f0f\u4e0b\u7684\u8fc7\u6e21\u80cc\u666f\u8272")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"openColor"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},'"white"')),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u6253\u5f00\u72b6\u6001\u4e0b\u5bb9\u5668\u80cc\u666f\u8272")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"openElevation"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u6253\u5f00\u72b6\u6001\u4e0b\u5bb9\u5668\u5f71\u6df1\u5927\u5c0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"openBorderRadius"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u6253\u5f00\u72b6\u6001\u4e0b\u5bb9\u5668\u5706\u89d2\u5927\u5c0f")))),(0,r.kt)("h3",a({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"Harmony"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"OpenContainerProps.transitionType"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"OpenContainerProps.transitionDuration"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"OpenContainerProps.closedColor"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"OpenContainerProps.closedElevation"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"OpenContainerProps.closeBorderRadius"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"OpenContainerProps.middleColor"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"OpenContainerProps.openColor"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"OpenContainerProps.openElevation"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"OpenContainerProps.openBorderRadius"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))))))}s.isMDXComponent=!0},34208:function(t,e,n){e.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},83025:function(t,e,n){e.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},20303:function(t,e,n){e.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},41524:function(t,e,n){e.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);