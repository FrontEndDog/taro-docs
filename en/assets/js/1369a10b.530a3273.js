"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[68299],{79874:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,f=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73340:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={title:"Implementation Details"},l=void 0,p={unversionedId:"implement-note",id:"version-3.x/implement-note",title:"Implementation Details",description:"This article will introduce some of the implementation details of Taro, drive developers to understand the specific functions of Taro related dependency packages, and give developers a better understanding of the Taro project.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/implement-note.md",sourceDirName:".",slug:"/implement-note",permalink:"/taro-docs/en/docs/implement-note",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/implement-note.md",tags:[],version:"3.x",frontMatter:{title:"Implementation Details"},sidebar:"docs",previous:{title:"Single-step Debugging Configuration",permalink:"/taro-docs/en/docs/debug-config"},next:{title:"Taro DOM Reference",permalink:"/taro-docs/en/docs/taro-dom"}},s={},m=[{value:"CLI",id:"cli",level:2},{value:"Mini Program",id:"mini-program",level:2},{value:"Compile time",id:"compile-time",level:3},{value:"Runtime",id:"runtime",level:2},{value:"Platfrom Plugin",id:"platfrom-plugin",level:3},{value:"H5",id:"h5",level:2},{value:"Compile time",id:"compile-time-1",level:3},{value:"Component Library",id:"component-library",level:3},{value:"API",id:"api",level:3},{value:"Router",id:"router",level:3},{value:"Typings",id:"typings",level:2},{value:"Reverse conversion",id:"reverse-conversion",level:2}],c={toc:m},u="wrapper";function d(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(u,a({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This article will introduce some of the implementation details of Taro, drive developers to understand the specific functions of Taro related dependency packages, and give developers a better understanding of the Taro project."),(0,r.kt)("admonition",a({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"Occasional updates.")),(0,r.kt)("h2",a({},{id:"cli"}),"CLI"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/cli")," is the Taro CLI tool, which is based on the plug-in kernel implementation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/service")," package."),(0,r.kt)("p",null,"The CLI is pre-mounted with a set of built-in plugins, each command and each build platform is a separate Taro plugin."),(0,r.kt)("h2",a({},{id:"mini-program"}),"Mini Program"),(0,r.kt)("h3",a({},{id:"compile-time"}),"Compile time"),(0,r.kt)("p",null,"When compiling mini program, the CLI calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/mini-runner")," package. The ",(0,r.kt)("inlineCode",{parentName:"p"},"mini-runner")," mainly does these things."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"It is responsible for adapting Webpack to the developer's ",(0,r.kt)("a",a({parentName:"li"},{href:"./config"}),"build configuration")," to adjust the Webpack configuration. 2."),(0,r.kt)("li",{parentName:"ol"},"Injects custom PostCSS plugins. (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"postcss-pxtransform"),")"),(0,r.kt)("li",{parentName:"ol"},"Inject custom Webpack plugins. 4."),(0,r.kt)("li",{parentName:"ol"},"Inject custom Webpack Loaders. (Loaders are located in the ",(0,r.kt)("inlineCode",{parentName:"li"},"@tarojs/taro-loader")," package)"),(0,r.kt)("li",{parentName:"ol"},"Call Webpack to start the build."),(0,r.kt)("li",{parentName:"ol"},"Modify the Webpack build product to adjust the final build result.")),(0,r.kt)("h2",a({},{id:"runtime"}),"Runtime"),(0,r.kt)("p",null,"In order for frameworks like React, Vue, etc. to run directly on the mini program side, we need to ",(0,r.kt)("strong",{parentName:"p"},"emulate the browser environment")," in the logic layer of the mini program, including implementing the DOM, BOM API, etc."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/runtime")," is the core of Taro's runtime adapter, which implements a streamlined DOM, BOM API, event system, bridge layer for web framework and mini program framework, etc."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ReactDOM is large and contains a lot of compatibility code. So Taro has implemented a custom renderer instead of ReactDOM with react-reconciler, which is located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/react")," package.")),(0,r.kt)("p",null,"At this point the web framework can render a Taro DOM tree using the Taro mockup API, but ",(0,r.kt)("strong",{parentName:"p"},"this all runs at the logic level of the mini program"),". How does Taro use a static template file to render a dynamic Taro DOM tree when the mini program xml template needs to be written dead ahead of time?"),(0,r.kt)("p",null,"Taro chose to take advantage of the fact that mini program ",(0,r.kt)("inlineCode",{parentName:"p"},"<template>"),"s can reference other ",(0,r.kt)("inlineCode",{parentName:"p"},"<templates>")," by rendering each DOM node of the Taro DOM tree as a ",(0,r.kt)("inlineCode",{parentName:"p"},"<template>"),". This is done by simply ",(0,r.kt)("inlineCode",{parentName:"p"},"setData"),"ing the serialized data of the Taro DOM tree, which triggers the cross-referencing of ",(0,r.kt)("inlineCode",{parentName:"p"},"<template>")," and renders the final UI."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The project's ",(0,r.kt)("inlineCode",{parentName:"p"},"dist/base.xml")," file is a collection of these ",(0,r.kt)("inlineCode",{parentName:"p"},"<templates>"),".")),(0,r.kt)("h3",a({},{id:"platfrom-plugin"}),"Platfrom Plugin"),(0,r.kt)("p",null,"Taro internally supports 6 mini program platforms by default, since ",(0,r.kt)("a",a({parentName:"p"},{href:"/blog/2021-03-10-taro-3-1-lts#1-%E5%BC%80%E6%94%BE%E5%BC%8F%E6%9E%B6%E6%9E%84"}),"Taro v3.1")," support for each mini program platform is available as a Taro plugin."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@tarojs/plugin-platform-weapp")," Wechat mini program plugin"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@tarojs/plugin-platform-alipay")," Alipay mini program plugin"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@tarojs/plugin-platform-swan")," Baidu smart program plugin"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@tarojs/plugin-platform-tt")," ByteDance mini program plugin"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@tarojs/plugin-platform-qq")," QQ mini program plugin"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@tarojs/plugin-platform-jd")," Jingdong mini program plugin")),(0,r.kt)("p",null,"Platform plugins are platform specific and inject logic for compile-time and run-time respectively, see ",(0,r.kt)("a",a({parentName:"p"},{href:"./platform-plugin"}),"Platform Plug-ins Overview")," for details\u3002"),(0,r.kt)("h2",a({},{id:"h5"}),"H5"),(0,r.kt)("h3",a({},{id:"compile-time-1"}),"Compile time"),(0,r.kt)("p",null,"When compiling H5, the CLI calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/webpack-runner")," package. The ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack-runner")," does these main things."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"It is responsible for adjusting the Webpack configuration based on the developer's ",(0,r.kt)("a",a({parentName:"li"},{href:"./config"}),"compile configuration")," to adjust the Webpack configuration."),(0,r.kt)("li",{parentName:"ol"},"Injects custom PostCSS plugins. (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"postcss-pxtransform"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"postcss-plugin-constparse"),")"),(0,r.kt)("li",{parentName:"ol"},"Inject custom Webpack plugins."),(0,r.kt)("li",{parentName:"ol"},"Inject custom Webpack Loaders. (Loaders are located in the ",(0,r.kt)("inlineCode",{parentName:"li"},"@tarojs/taro-loader")," package)"),(0,r.kt)("li",{parentName:"ol"},"Call Webpack to start the build."),(0,r.kt)("li",{parentName:"ol"},"Modify the Webpack build product to adjust the final build result.")),(0,r.kt)("h3",a({},{id:"component-library"}),"Component Library"),(0,r.kt)("p",null,"Taro implements a base component library on the H5 side that follows the WeChat mini program specification."),(0,r.kt)("p",null,"By default, the Web Components component library provided by ",(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/components")," is used."),(0,r.kt)("p",null,"When developing with React, developers can also use the ",(0,r.kt)("a",a({parentName:"p"},{href:"./h5#react-compatible-components-library"}),"compatibility component library"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/components-react")," will replace ",(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/components"),"."),(0,r.kt)("h3",a({},{id:"api"}),"API"),(0,r.kt)("p",null,"Developers refer to the Taro object from ",(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/taro")," and use the API it provides."),(0,r.kt)("p",null,"In H5 environments, ",(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/taro")," takes platform-independent APIs from ",(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/api")," and APIs that follow the mini program specification from ",(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/taro-h5"),", and finally aggregates them into a Taro object to expose to developers."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Developers typically call the API as ",(0,r.kt)("inlineCode",{parentName:"p"},"Taro.xxx"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-plugin-transform-taroapi")," plugin converts this to ",(0,r.kt)("inlineCode",{parentName:"p"},"import { xxx } from '@tarojs/taro';")," and then calls it again to ensure that Tree Shaking takes effect.")),(0,r.kt)("h3",a({},{id:"router"}),"Router"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/router")," Implemented a routing library that follows the mini program specification."),(0,r.kt)("h2",a({},{id:"typings"}),"Typings"),(0,r.kt)("p",null,"Taro's Typings file is located in ",(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/taro/types"),"."),(0,r.kt)("p",null,"Because the APIs for the various mini program are updated quickly, Typings are very much in need of community help to maintain them."),(0,r.kt)("h2",a({},{id:"reverse-conversion"}),"Reverse conversion"),(0,r.kt)("p",null,"Reverse conversion, native WeChat mini program conversion to Taro, currently supports conversion to React."),(0,r.kt)("p",null,"Reverse conversion is divided into two modules, compile-time and runtime, located in ",(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/taroize")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/with-weapp")," respectively."))}d.isMDXComponent=!0}}]);