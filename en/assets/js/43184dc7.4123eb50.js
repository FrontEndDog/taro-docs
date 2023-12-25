"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[46433],{79874:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(93106);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u[p]="string"==typeof e?e:o,l[1]=u;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},91264:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(93106),o=t(4706),a={tabItem:"tabItem_FBI3"};function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l.apply(this,arguments)}function u({children:e,hidden:n,className:t}){return r.createElement("div",l({role:"tabpanel",className:(0,o.Z)(a.tabItem,t)},{hidden:n}),e)}},8602:function(e,n,t){t.d(n,{Z:function(){return x}});var r=t(93106),o=t(4706),a=t(29369),l=t(27907),u=t(3111),i=t(65009),s=t(42615);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e){return function(e){var n,t;return null!==(t=null===(n=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}(e).map((({props:{value:e,label:n,attributes:t,default:r}})=>({value:e,label:n,attributes:t,default:r})))}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:p(t);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m({value:e,tabValues:n}){return n.some((n=>n.value===e))}function f({queryString:e=!1,groupId:n}){const t=(0,l.k6)(),o=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n}),a=(0,u._X)(o),i=(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(t.location.search);n.set(o,e),t.replace(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){c(e,n,t[n])}))}return e}({},t.location,{search:n.toString()}))}),[o,t]);return[a,i]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,a=d(e),[l,u]=(0,r.useState)((()=>function({defaultValue:e,tabValues:n}){if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var t;const r=null!==(t=n.find((e=>e.default)))&&void 0!==t?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[i,c]=f({queryString:t,groupId:o}),[p,h]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,o]=(0,s.Nk)(n);return[t,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:o}),g=(()=>{const e=null!=i?i:p;return m({value:e,tabValues:a})?e:null})();(0,r.useLayoutEffect)((()=>{g&&u(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);u(e),c(e),h(e)}),[c,h,a]),tabValues:a}}var g=t(81600),b={tabList:"tabList_qAna",tabItem:"tabItem_ulzt"};function v(){return v=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},v.apply(this,arguments)}function y({className:e,block:n,selectedValue:t,selectValue:l,tabValues:u}){const i=[],{blockElementScrollPositionUntilNextRender:s}=(0,a.o5)(),c=e=>{const n=e.currentTarget,r=i.indexOf(n),o=u[r].value;o!==t&&(s(n),l(o))},p=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;var t;n=null!==(t=i[r])&&void 0!==t?t:i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;var r;n=null!==(r=i[t])&&void 0!==r?r:i[i.length-1];break}}null==n||n.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},e)},u.map((({value:e,label:n,attributes:a})=>r.createElement("li",v({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,key:e,ref:e=>i.push(e),onKeyDown:p,onClick:c},a,{className:(0,o.Z)("tabs__item",b.tabItem,null==a?void 0:a.className,{"tabs__item--active":t===e})}),null!=n?n:e))))}function k({lazy:e,children:n,selectedValue:t}){const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=o.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function w(e){const n=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(y,v({},e,n)),r.createElement(k,v({},e,n)))}function x(e){const n=(0,g.Z)();return r.createElement(w,v({key:String(n)},e))}},3260:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});t(93106);var r=t(79874),o=t(91264),a=t(8602);function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l.apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={title:"\u9519\u8bef\u5904\u7406"},s=void 0,c={unversionedId:"react-error-handling",id:"version-3.x/react-error-handling",title:"\u9519\u8bef\u5904\u7406",description:"React \u548c\u5c0f\u7a0b\u5e8f\u90fd\u63d0\u4f9b\u4e86\u5404\u81ea\u7684\u9519\u8bef\u5904\u7406\u65b9\u6cd5\uff0c\u672c\u8282\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728 Taro \u4e2d\u7ed3\u5408\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-3.x/react-error-handling.mdx",sourceDirName:".",slug:"/react-error-handling",permalink:"/taro-docs/en/docs/react-error-handling",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/react-error-handling.mdx",tags:[],version:"3.x",frontMatter:{title:"\u9519\u8bef\u5904\u7406"},sidebar:"docs",previous:{title:"Hooks",permalink:"/taro-docs/en/docs/hooks"},next:{title:"React DevTools",permalink:"/taro-docs/en/docs/react-devtools"}},p={},d=[{value:"\u9519\u8bef\u8fb9\u754c",id:"\u9519\u8bef\u8fb9\u754c",level:2},{value:"\u9875\u9762\u7ec4\u4ef6\u81ea\u8eab\u4f5c\u4e3a\u9519\u8bef\u8fb9\u754c",id:"\u9875\u9762\u7ec4\u4ef6\u81ea\u8eab\u4f5c\u4e3a\u9519\u8bef\u8fb9\u754c",level:3},{value:"\u6355\u83b7\u9875\u9762\u7ec4\u4ef6\u81ea\u8eab\u7684\u9519\u8bef",id:"\u6355\u83b7\u9875\u9762\u7ec4\u4ef6\u81ea\u8eab\u7684\u9519\u8bef",level:3},{value:"App onError",id:"app-onerror",level:2}],m={toc:d},f="wrapper";function h(e){var{components:n}=e,t=u(e,["components"]);return(0,r.kt)(f,l({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"React \u548c\u5c0f\u7a0b\u5e8f\u90fd\u63d0\u4f9b\u4e86\u5404\u81ea\u7684\u9519\u8bef\u5904\u7406\u65b9\u6cd5\uff0c\u672c\u8282\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728 Taro \u4e2d\u7ed3\u5408\u4f7f\u7528\u3002"),(0,r.kt)("h2",l({},{id:"\u9519\u8bef\u8fb9\u754c"}),"\u9519\u8bef\u8fb9\u754c"),(0,r.kt)("p",null,"React 16 \u5f15\u5165\u4e86",(0,r.kt)("a",l({parentName:"p"},{href:"https://reactjs.org/docs/error-boundaries.html"}),"\u9519\u8bef\u8fb9\u754c"),"\u7684\u6982\u5ff5\uff0c\u76f8\u6bd4\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"try catch")," \u548c\u5c0f\u7a0b\u5e8f\u7684\u5168\u5c40\u9519\u8bef\u76d1\u542c\u56de\u8c03 ",(0,r.kt)("inlineCode",{parentName:"p"},"App onError"),"\uff0c\u5b83\u7684\u4f18\u70b9\u5728\u4e8e\u80fd\u6355\u83b7 React \u6e32\u67d3\u8fc7\u7a0b\u4e2d\u7684\u9519\u8bef\u548c\u663e\u793a\u515c\u5e95\u754c\u9762\u3002"),(0,r.kt)("admonition",l({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"\u9519\u8bef\u8fb9\u754c\u4e0d\u80fd\u6355\u83b7\u4ee5\u4e0b\u9519\u8bef\uff1a"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u56de\u8c03"),(0,r.kt)("li",{parentName:"ul"},"\u5f02\u6b65\u4ee3\u7801\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"setTimeout")," \u56de\u8c03"),(0,r.kt)("li",{parentName:"ul"},"\u9519\u8bef\u8fb9\u754c\u7ec4\u4ef6\u81ea\u8eab\u7684\u6e32\u67d3\u9519\u8bef")),(0,r.kt)("p",{parentName:"admonition"},"\u524d\u4e24\u70b9\u5efa\u8bae\u76f4\u63a5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"try catch")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"App onError")," \u8fdb\u884c\u5904\u7406\uff0c\u7b2c\u4e09\u70b9\u5c06\u5728\u540e\u6587\u4e2d\u4ecb\u7ecd\u3002")),(0,r.kt)("h3",l({},{id:"\u9875\u9762\u7ec4\u4ef6\u81ea\u8eab\u4f5c\u4e3a\u9519\u8bef\u8fb9\u754c"}),"\u9875\u9762\u7ec4\u4ef6\u81ea\u8eab\u4f5c\u4e3a\u9519\u8bef\u8fb9\u754c"),(0,r.kt)("p",null,"\u6b63\u5982 React \u6587\u6863\u6240\u6307\u51fa\u7684\uff0c\u9519\u8bef\u8fb9\u754c\u7684\u9897\u7c92\u5ea6\u53ef\u4ee5\u7531\u5f00\u53d1\u8005\u81ea\u884c\u9009\u62e9\u3002\u5982\u679c\u8981\u6355\u83b7",(0,r.kt)("strong",{parentName:"p"},"\u9875\u9762\u5185\u5b50\u7ec4\u4ef6"),"\u7684\u9519\u8bef\uff0c\u53ef\u4ee5\u628a\u9875\u9762\u7ec4\u4ef6\u81ea\u8eab\u4f5c\u4e3a\u9519\u8bef\u8fb9\u754c\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-jsx",metastring:'title="pages/index/index.jsx"',title:'"pages/index/index.jsx"'}),"class BuggyCounter extends Component {\n  state = {\n    counter: 0,\n  }\n\n  handleClick = () => {\n    this.setState(({ counter }) => ({\n      counter: counter + 1,\n    }))\n  }\n\n  render() {\n    if (this.state.counter === 2) {\n      // \u6a21\u62df JS \u62a5\u9519\n      throw new Error('I crashed!')\n    }\n    return <Button onClick={this.handleClick}>{this.state.counter}</Button>\n  }\n}\n\n// \u9875\u9762\u7ec4\u4ef6\u81ea\u8eab\u4f5c\u4e3a\u9519\u8bef\u8fb9\u754c\nexport default class Index extends Component {\n  state = {\n    hasError: null,\n  }\n\n  static getDerivedStateFromError() {\n    return {\n      hasError: true,\n    }\n  }\n\n  componentDidCatch(error, errorInfo) {\n    console.log(error, errorInfo)\n  }\n\n  render() {\n    return this.state.hasError ? (\n      // \u5f02\u5e38\u65f6\u663e\u793a\u515c\u5e95 UI\n      <View>Something went wrong.</View>\n    ) : (\n      // \u6b63\u5e38\u663e\u793a\n      <BuggyCounter></BuggyCounter>\n    )\n  }\n}\n")),(0,r.kt)("h3",l({},{id:"\u6355\u83b7\u9875\u9762\u7ec4\u4ef6\u81ea\u8eab\u7684\u9519\u8bef"}),"\u6355\u83b7\u9875\u9762\u7ec4\u4ef6\u81ea\u8eab\u7684\u9519\u8bef"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u76f8\u5173\u8ba8\u8bba\uff1a",(0,r.kt)("a",l({parentName:"p"},{href:"https://github.com/NervJS/taro/pull/8191"}),"#8191"))),(0,r.kt)("p",null,"\u8fd8\u8bb0\u5f97\u9519\u8bef\u8fb9\u754c\u7684\u7b2c\u4e09\u4e2a\u9650\u5236",(0,r.kt)("strong",{parentName:"p"},"\u201c\u4e0d\u80fd\u6355\u83b7\u9519\u8bef\u8fb9\u754c\u7ec4\u4ef6\u81ea\u8eab\u7684\u6e32\u67d3\u9519\u8bef\u201d"),"\u5417\uff1f\u5982\u679c\u6211\u4eec\u628a\u9875\u9762\u7ec4\u4ef6\u81ea\u8eab\u4f5c\u4e3a\u9519\u8bef\u8fb9\u754c\uff0c\u8fd9\u65f6\u662f\u4e0d\u80fd\u6355\u83b7\u5176\u81ea\u8eab\u7684\u9519\u8bef\u7684\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u518d\u521b\u5efa\u4e00\u4e2a\u9519\u8bef\u8fb9\u754c\u7ec4\u4ef6\u4ee5\u5305\u88f9\u6211\u4eec\u7684\u9875\u9762\u7ec4\u4ef6\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u9ad8\u9636\u7ec4\u4ef6\u4e3a\u9875\u9762\u7ec4\u4ef6\u5d4c\u5957\u9519\u8bef\u8fb9\u754c\uff0c\u5982\u679c\u9875\u9762\u7ec4\u4ef6\u4e3a Class Component\uff0c\u8fd8\u9700\u8981\u5bf9 Taro \u7684\u751f\u547d\u5468\u671f\u8fdb\u884c\u989d\u5916\u5904\u7406\u3002\u56e0\u6b64\u5efa\u8bae\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u9875\u9762\u7ec4\u4ef6\u4f7f\u7528 Functional Component \u7684\u5199\u6cd5\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,r.kt)(a.Z,{defaultValue:"class",values:[{label:"Class Component",value:"class"},{label:"Functional Component",value:"functional"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"class",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-jsx",metastring:'title="pages/index/index.jsx"',title:'"pages/index/index.jsx"'}),"import React, { Component } from 'react'\nimport { View, Button } from '@tarojs/components'\n\n// \u9875\u9762\u7ec4\u4ef6\nclass Index extends Component {\n  state = {\n    counter: 0,\n  }\n\n  componentDidShow() {\n    console.log('show')\n  }\n\n  componentDidHide() {\n    console.log('hide')\n  }\n\n  onShareAppMessage() {\n    return {\n      title: 'myShareTitle',\n    }\n  }\n\n  handleClick = () => {\n    this.setState(({ counter }) => ({\n      counter: counter + 1,\n    }))\n  }\n\n  render() {\n    if (this.state.counter === 2) {\n      // \u6a21\u62df JS \u62a5\u9519\n      throw new Error('I crashed!')\n    }\n    return <Button onClick={this.handleClick}>{this.state.counter}</Button>\n  }\n}\n\n// \u4f7f\u7528 HOC \u4ee5\u65b9\u4fbf\u4e3a\u5404\u4e2a\u9875\u9762\u590d\u7528\u8fd9\u6bb5\u903b\u8f91\nfunction createErrorBoundary(Page) {\n  return class ErrorBoundary extends Component {\n    el = React.createRef()\n    state = {\n      hasError: null,\n    }\n\n    static getDerivedStateFromError() {\n      return {\n        hasError: true,\n      }\n    }\n\n    componentDidCatch(error, errorInfo) {\n      console.log(error, errorInfo)\n    }\n\n    /* Start \u9700\u8981\u624b\u52a8\u8c03\u7528\u9875\u9762\u7ec4\u4ef6\u4e0a\u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5 **/\n    componentDidShow() {\n      return this.el.current?.componentDidShow?.()\n    }\n\n    componentDidHide() {\n      return this.el.current?.componentDidHide?.()\n    }\n\n    onShareAppMessage() {\n      return this.el.current?.onShareAppMessage?.()\n    }\n\n    //...\n\n    /* End \u9700\u8981\u624b\u52a8\u8c03\u7528\u9875\u9762\u7ec4\u4ef6\u4e0a\u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5 **/\n\n    render() {\n      return this.state.hasError ? <View>Something went wrong.</View> : <Page ref={this.el} />\n    }\n  }\n}\n\nexport default createErrorBoundary(Index)\n"))),(0,r.kt)(o.Z,{value:"functional",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-jsx",metastring:'title="pages/index/index.jsx"',title:'"pages/index/index.jsx"'}),"import { Component, useEffect, useState } from 'react'\nimport { View, Button } from '@tarojs/components'\nimport { useDidShow, useDidHide, useShareAppMessage } from '@tarojs/taro'\n\nfunction Index() {\n  const [counter, setCounter] = useState(0)\n\n  useDidShow(() => console.log('show'))\n\n  useDidHide(() => console.log('hide'))\n\n  useShareAppMessage(() => ({ title: 'myShareTitle' }))\n\n  function handleClick() {\n    setCounter(counter + 1)\n  }\n\n  useEffect(() => {\n    if (counter === 2) {\n      // \u6a21\u62df JS \u62a5\u9519\n      throw new Error('I crashed!')\n    }\n  })\n\n  return <Button onClick={handleClick}>{counter}</Button>\n}\n\n// \u4f7f\u7528 HOC \u4ee5\u65b9\u4fbf\u4e3a\u5404\u4e2a\u9875\u9762\u590d\u7528\u8fd9\u6bb5\u903b\u8f91\nfunction createErrorBoundary(Page) {\n  return class ErrorBoundary extends Component {\n    state = {\n      hasError: null,\n    }\n\n    static getDerivedStateFromError() {\n      return {\n        hasError: true,\n      }\n    }\n\n    componentDidCatch(error, errorInfo) {\n      console.log(error, errorInfo)\n    }\n\n    render() {\n      return this.state.hasError ? <View>Something went wrong.</View> : <Page />\n    }\n  }\n}\n\nexport default createErrorBoundary(Index)\n")))),(0,r.kt)("h2",l({},{id:"app-onerror"}),"App onError"),(0,r.kt)("admonition",l({},{type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"Taro v3.5+ \u5f00\u59cb\u652f\u6301")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"React \u6e32\u67d3\u6d41\u7a0b\u4e4b\u5916\u7684 JS \u9519\u8bef\u90fd\u80fd\u88ab\u5176\u76d1\u542c\u5230\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5f53\u6e32\u67d3\u9519\u8bef\u6ca1\u6709\u88ab\u5f00\u53d1\u8005\u8bbe\u7f6e\u7684\u9519\u8bef\u8fb9\u754c\u6355\u83b7\u65f6\uff0c\u6e32\u67d3\u62a5\u9519\u90fd\u53ef\u4ee5\u88ab\u76d1\u542c\u5230\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,r.kt)(a.Z,{defaultValue:"class",values:[{label:"Class Component",value:"class"},{label:"Functional Component",value:"functional"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"class",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-jsx",metastring:'title="app.js"',title:'"app.js"'}),"import { Component } from 'react'\n\nexport default class App extends Component {\n  onError(error) {\n    console.log(error)\n  }\n\n  render() {\n    return this.props.children\n  }\n}\n"))),(0,r.kt)(o.Z,{value:"functional",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-jsx",metastring:'title="app.js"',title:'"app.js"'}),"import { useError } from '@tarojs/taro'\n\nexport default function App(props) {\n  useError((error) => console.log(error))\n\n  return props.children\n}\n")))))}h.isMDXComponent=!0}}]);