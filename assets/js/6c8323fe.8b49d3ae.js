"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[98708],{79874:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(93106);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91264:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(93106),r=n(4706),l={tabItem:"tabItem_FBI3"};function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function o({children:e,hidden:t,className:n}){return a.createElement("div",i({role:"tabpanel",className:(0,r.Z)(l.tabItem,n)},{hidden:t}),e)}},8602:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(93106),r=n(4706),l=n(29369),i=n(27907),o=n(3111),c=n(65009),s=n(42615);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){return function(e){var t,n;return null!==(n=null===(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}(e).map((({props:{value:e,label:t,attributes:n,default:a}})=>({value:e,label:t,attributes:n,default:a})))}function u(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m({value:e,tabValues:t}){return t.some((t=>t.value===e))}function g({queryString:e=!1,groupId:t}){const n=(0,i.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),l=(0,o._X)(r),c=(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){p(e,t,n[t])}))}return e}({},n.location,{search:t.toString()}))}),[r,n]);return[l,c]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=u(e),[i,o]=(0,a.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var n;const a=null!==(n=t.find((e=>e.default)))&&void 0!==n?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[c,p]=g({queryString:n,groupId:r}),[d,k]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,r]=(0,s.Nk)(t);return[n,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),f=(()=>{const e=null!=c?c:d;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),k(e)}),[p,k,l]),tabValues:l}}var f=n(81600),h={tabList:"tabList_qAna",tabItem:"tabItem_ulzt"};function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},v.apply(this,arguments)}function N({className:e,block:t,selectedValue:n,selectValue:i,tabValues:o}){const c=[],{blockElementScrollPositionUntilNextRender:s}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),r=o[a].value;r!==n&&(s(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;var n;t=null!==(n=c[a])&&void 0!==n?n:c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;var a;t=null!==(a=c[n])&&void 0!==a?a:c[c.length-1];break}}null==t||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e)},o.map((({value:e,label:t,attributes:l})=>a.createElement("li",v({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>c.push(e),onKeyDown:d,onClick:p},l,{className:(0,r.Z)("tabs__item",h.tabItem,null==l?void 0:l.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function b({lazy:e,children:t,selectedValue:n}){const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=k(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",h.tabList)},a.createElement(N,v({},e,t)),a.createElement(b,v({},e,t)))}function w(e){const t=(0,f.Z)();return a.createElement(y,v({key:String(t)},e))}},2071:function(e,t,n){n.d(t,{gQ:function(){return c},hn:function(){return i},p6:function(){return o}});var a=n(93106);const r="#61dafb",l="#4fc08d",i=()=>a.createElement("span",{className:"footer_link_connect_wrap"},a.createElement("span",{className:"footer_link_connect footer_link_wechat"},"\u5fae\u4fe1\u5f00\u53d1\u8005\u7fa4",a.createElement("span",{className:"wechat_qrcode_icon"},a.createElement("svg",{className:"icon svgicon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"https://www.w3.org/2000/svg","data-spm-anchor-id":"a313x.7781069.0.i0"},a.createElement("path",{d:"M240.071 241.095h59.278v59.278h-59.278v-59.278z",fill:""}),a.createElement("path",{d:"M405.959 134.485h-272.611v272.611h106.723v47.445h59.278v-47.445h106.723v-59.278h47.445v-47.445h-47.445l-0.114-165.888zM346.795 347.819h-154.169v-154.055h154.055v154.055h0.114zM240.071 727.154h59.278v59.278h-59.278v-59.278zM726.016 241.095h59.278v59.278h-59.278v-59.278zM512.683 509.042v63.943h59.278v-59.165h47.445v-59.278h-47.445v-47.445h-59.278v101.945zM512.683 725.789v60.643h59.278v-106.723h47.445v-59.278h-106.723v105.358zM571.961 786.432h47.445v47.445h-47.445v-47.445zM453.405 833.877v59.165h118.557v-59.165h-118.557z",fill:""}),a.createElement("path",{d:"M678.685 679.709h-59.278v106.723h106.61v-59.278h-47.331v-47.445zM726.016 893.042h166.002v-59.165h-106.723v-47.445h-59.278v106.61zM892.018 513.821v-59.278h-106.723v59.278h106.723zM832.739 727.154h59.278v59.278h-59.278v-59.278zM453.405 347.819h59.278v59.278h-59.278v-59.278zM726.016 454.542v-47.445h166.002v-272.611h-272.611v59.278h-106.723v47.445h106.723v59.165h-47.445v47.445h47.445v59.278h59.278v47.445h47.331zM678.685 193.763h154.055v154.055h-154.055v-154.055zM678.685 572.985h47.331v47.445h-47.331v-47.445zM785.294 679.709h-59.278v47.445h106.723v-106.723h59.278v-47.445h-106.723v106.723zM453.405 241.095h59.278v59.278h-59.278v-59.278zM299.349 513.821h47.445v59.165h-47.445v-59.165zM453.405 454.542h-106.61v59.278h59.165v59.165h47.445v-118.443z",fill:""}),a.createElement("path",{d:"M405.959 786.432v-106.723h47.445v-59.278h-213.333v-106.61h-106.723v59.278h59.278v47.445h-59.278v272.611h272.611v-59.278h47.445v-47.445h-47.445zM346.795 833.877h-154.169v-154.169h154.055v154.169h0.114zM453.405 572.985h59.278v47.445h-59.278v-47.445zM619.406 513.821h59.278v59.165h-59.278v-59.165zM726.016 513.821h59.278v59.165h-59.278v-59.165z",fill:""})))),a.createElement("span",{className:"footer_link_wechat_img inline"},a.createElement("img",{src:"https://camo.githubusercontent.com/10834a234b99a5880b5dff7c0ca7235e2a0772e7/687474703a2f2f696d6732302e333630627579696d672e636f6d2f7562612f6a66732f7432303139372f3238332f313638373136383837342f3133363034322f32623464383131662f35623330613635634e39643166303366312e706e67"})));function o({version:e=""}){return a.createElement("span",null,a.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},a.createElement("defs",null,a.createElement("style",null)),a.createElement("path",{fill:"#41B883",d:"M615.6 123.6h165.5L512 589.7 242.9 123.6H63.5L512 900.4l448.5-776.9z"}),a.createElement("path",{fill:"#34495E",d:"M781.1 123.6H615.6L512 303 408.4 123.6H242.9L512 589.7z"})),a.createElement("span",{style:{color:l}},"Vue",e?` ${e}`:""))}function c(){return a.createElement("span",null,a.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",width:"200",height:"200",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},a.createElement("defs",null,a.createElement("style",null)),a.createElement("path",{fill:"#61DAFB",d:"M432 511.8a80 80 0 10160 0 80 80 0 10-160 0z"}),a.createElement("path",{fill:"#61DAFB",d:"M960.5 511.8c0-62.8-73.8-117.2-188.5-150.1 28.9-115.8 18.7-206.9-35.7-238.3-54.5-31.4-138.5 5.3-224.3 88.2-85.8-82.9-169.8-119.6-224.3-88.2-54.4 31.4-64.6 122.6-35.7 238.3C137.3 394.6 63.5 449 63.5 511.8S137.3 629 252 661.9c-28.9 115.7-18.7 206.9 35.7 238.3 13.4 7.8 28.6 11.6 45.2 11.6 39.7 0 87.8-21.8 140-64.2 13-10.6 26.1-22.6 39.1-35.2 13 12.6 26.1 24.6 39.1 35.2 52.2 42.4 100.2 64.2 140 64.2 16.6 0 31.8-3.8 45.2-11.6 54.4-31.4 64.6-122.5 35.7-238.3 114.7-32.9 188.5-87.3 188.5-150.1zM716.8 157.2c35.3 20.4 42.7 94.3 17.6 194.8-36.7-8.4-76.7-14.7-119.3-18.6-24.7-34.9-50.2-66.4-75.8-94 59.2-57.3 114.2-88.4 152-88.4 9.6-.1 18.2 2 25.5 6.2zM637 584c-13.8 24-28.4 47-43.3 69-26.1 2-53.3 3.1-81.7 3.1-28.3 0-55.5-1.1-81.6-3.1-15-22-29.5-45.1-43.3-69-14.1-24.5-26.7-48.6-38.1-72.2 11.4-23.6 24-47.7 38.1-72.2 14.1-24.5 28.7-47.4 43.4-69.1 26.1-2 53.3-3.1 81.6-3.1 28.3 0 55.5 1.1 81.6 3.1 14.7 21.6 29.3 44.6 43.4 69 14.1 24.5 26.7 48.6 38.1 72.2-11.5 23.7-24.1 47.8-38.2 72.3zm58.8-26.4c11.2 26.6 20.4 52.1 28 76.5-24.9 5.6-51.7 10.4-80.3 14 9.3-14.5 18.4-29.3 27.3-44.6 8.8-15.4 17.1-30.7 25-45.9zM512 756.5c-17.7-19.2-35.1-40.1-52.2-62.6 17.1.8 34.5 1.3 52.2 1.3 17.7 0 35.1-.5 52.2-1.3-17.1 22.5-34.5 43.4-52.2 62.6zM380.5 648.1c-28.6-3.6-55.3-8.4-80.3-14 7.6-24.4 16.8-49.9 28-76.5 7.9 15.2 16.1 30.5 25 45.9 8.9 15.2 18 30 27.3 44.6zM328.2 466c-11.2-26.6-20.4-52.1-28-76.5 24.9-5.6 51.6-10.4 80.2-14-9.2 14.4-18.4 29.2-27.2 44.6-8.8 15.4-17.1 30.7-25 45.9zM512 267.1c17.3 18.7 34.8 39.8 52.1 62.7-17.1-.8-34.4-1.3-52.1-1.3-17.7 0-35 .5-52.1 1.3 17.3-22.9 34.8-44 52.1-62.7zm158.7 153c-8.9-15.3-18-30.1-27.2-44.6 28.6 3.6 55.3 8.4 80.2 14-7.6 24.4-16.8 49.9-28 76.5-7.8-15.2-16.1-30.5-25-45.9zM307.2 157.2c7.2-4.2 15.8-6.2 25.6-6.2 37.8 0 92.7 31.1 151.9 88.4-25.6 27.6-51.1 59.2-75.8 94-42.5 3.9-82.6 10.2-119.3 18.6-25.1-100.6-17.6-174.5 17.6-194.8zM102.5 511.8c0-40.8 60.3-84.2 160-112.6 11.1 36 25.6 73.8 43.5 112.6-17.8 38.8-32.4 76.6-43.5 112.6-99.7-28.4-160-71.9-160-112.6zm345.8 305.5c-59.7 48.5-111.1 66.4-141.1 49.2-35.3-20.4-42.7-94.3-17.6-194.8 36.7 8.4 76.7 14.7 119.3 18.6 24.4 34.5 49.9 66.1 75.8 94.2-12.1 11.7-24.2 22.9-36.4 32.8zm268.5 49.2c-29.9 17.3-81.4-.6-141.1-49.2-12.1-9.9-24.3-21.1-36.5-32.8 26-28.1 51.4-59.7 75.8-94.2 42.5-3.9 82.6-10.2 119.3-18.7 25.2 100.6 17.7 174.5-17.5 194.9zm44.8-242.1c-11.1-36-25.6-73.8-43.5-112.6 17.8-38.8 32.4-76.6 43.5-112.6 99.7 28.5 160 71.9 160 112.6-.1 40.7-60.4 84.2-160 112.6z"})),a.createElement("span",{style:{color:r}},"React"))}},48528:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});n(93106);var a=n(79874),r=n(2071),l=n(8602),i=n(91264);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"Radio",sidebar_label:"Radio"},p=void 0,d={unversionedId:"components/forms/radio",id:"version-3.x/components/forms/radio",title:"Radio",description:"\u5355\u9009\u9879\u76ee",source:"@site/versioned_docs/version-3.x/components/forms/radio.md",sourceDirName:"components/forms",slug:"/components/forms/radio",permalink:"/taro-docs/docs/components/forms/radio",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/components/forms/radio.md",tags:[],version:"3.x",frontMatter:{title:"Radio",sidebar_label:"Radio"},sidebar:"components",previous:{title:"PickerViewColumn",permalink:"/taro-docs/docs/components/forms/picker-view-column"},next:{title:"RadioGroup",permalink:"/taro-docs/docs/components/forms/radio-group"}},u={},m=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"RadioProps",id:"radioprops",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:3}],g={toc:m},k="wrapper";function f(e){var{components:t}=e,s=c(e,["components"]);return(0,a.kt)(k,o({},g,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5355\u9009\u9879\u76ee"),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(72369).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:n(55899).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:n(68525).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u6296\u97f3\u5c0f\u7a0b\u5e8f",src:n(58939).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"QQ \u5c0f\u7a0b\u5e8f",src:n(30174).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:n(83190).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:n(519).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"Harmony",src:n(75e3).Z,className:"icon_platform",width:"25px"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/radio.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",o({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"ComponentType<RadioProps>\n")),(0,a.kt)("h2",o({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)(l.Z,{defaultValue:"React",values:[{label:(0,a.kt)(r.gQ,{mdxType:"ReactIcon"}),value:"React"},{label:(0,a.kt)(r.p6,{mdxType:"VueIcon"}),value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"export default class PageRadio extends Component {\n  state = {\n    list: [\n      {\n        value: '\u7f8e\u56fd',\n        text: '\u7f8e\u56fd',\n        checked: false\n      },\n      {\n        value: '\u4e2d\u56fd',\n        text: '\u4e2d\u56fd',\n        checked: true\n      },\n      {\n        value: '\u5df4\u897f',\n        text: '\u5df4\u897f',\n        checked: false\n      },\n      {\n        value: '\u65e5\u672c',\n        text: '\u65e5\u672c',\n        checked: false\n      },\n      {\n        value: '\u82f1\u56fd',\n        text: '\u82f1\u56fd',\n        checked: false\n      },\n      {\n        value: '\u6cd5\u56fd',\n        text: '\u6cd5\u56fd',\n        checked: false\n      }\n    ]\n  }\n  render () {\n    return (\n      <View className='container'>\n        <Head title='Radio' />\n        <View className='page-body'>\n          <View className='page-section'>\n            <Text>\u9ed8\u8ba4\u6837\u5f0f</Text>\n            <Radio value='\u9009\u4e2d' checked>\u9009\u4e2d</Radio>\n            <Radio style='margin-left: 20rpx' value='\u672a\u9009\u4e2d'>\u672a\u9009\u4e2d</Radio>\n          </View>\n          <View className='page-section'>\n            <Text>\u63a8\u8350\u5c55\u793a\u6837\u5f0f</Text>\n            <View className='radio-list'>\n              <RadioGroup>\n                {this.state.list.map((item, i) => {\n                  return (\n                    <Label className='radio-list__label' for={i} key={i}>\n                      <Radio className='radio-list__radio' value={item.value} checked={item.checked}>{item.text}</Radio>\n                    </Label>\n                  )\n                })}\n              </RadioGroup>\n            </View>\n          </View>\n        </View>\n      </View>\n    )\n  }\n}\n"))),(0,a.kt)(i.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-html"}),"<template>\n  <view class=\"container\">\n    <view class=\"page-section\">\n      <text>\u9ed8\u8ba4\u6837\u5f0f</text>\n      <radio value=\"\u9009\u4e2d\" :checked=\"true\">\u9009\u4e2d</radio>\n      <radio style=\"margin-left: 20rpx;\" value=\"\u672a\u9009\u4e2d\">\u672a\u9009\u4e2d</radio>\n    </view>\n    <view class=\"page-section\">\n      <text>\u63a8\u8350\u5c55\u793a\u6837\u5f0f(Taro \u56e2\u961f\u6210\u5458):</text>\n        <radio-group @change=\"onChange\">\n          <label v-for=\"item in list\" class=\"checkbox-list__label\">\n            <radio class=\"checkbox-list__checkbox\" :value=\"item.value\" :checked=\"item.checked\">{{ item.text }}</radio>\n          </label>\n        </radio-group>\n    </view>\n  </view>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      list: [\n        {\n          value: 'yuche',\n          text: 'yuche',\n          checked: false\n        },\n        {\n          value: 'cjj',\n          text: 'cjj',\n          checked: false\n        },\n        {\n          value: 'xiexiaoli',\n          text: 'xiexiaoli',\n          checked: false\n        },\n        {\n          value: 'honly',\n          text: 'honly',\n          checked: false\n        },\n        {\n          value: 'cs',\n          text: 'cs',\n          checked: false\n        },\n        {\n          value: 'zhutianjian',\n          text: 'zhutianjian',\n          checked: false\n        },\n        {\n          value: '\u9694\u58c1\u8001\u674e',\n          text: '\u9694\u58c1\u8001\u674e',\n          checked: true\n        }\n      ]\n    }\n  },\n  methods: {\n    onChange: function(e) {\n      console.log(e.detail.value)\n    }\n  }\n}\n<\/script>\n")))),(0,a.kt)("h2",o({},{id:"radioprops"}),"RadioProps"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"value"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"<Radio/>")," \u6807\u8bc6\u3002\u5f53\u8be5",(0,a.kt)("inlineCode",{parentName:"td"},"<Radio/>")," \u9009\u4e2d\u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"td"},"<RadioGroup/>"),"\u7684 change \u4e8b\u4ef6\u4f1a\u643a\u5e26",(0,a.kt)("inlineCode",{parentName:"td"},"<Radio/>"),"\u7684 value")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"checked"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u5f53\u524d\u662f\u5426\u9009\u4e2d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"disabled"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u662f\u5426\u7981\u7528")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"color"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},'"#09BB07"')),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Radio \u7684\u989c\u8272\uff0c\u540c css \u7684 color")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"name"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Radio \u7684\u540d\u5b57")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"nativeProps"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Record<string, unknown>")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u7528\u4e8e\u900f\u4f20 ",(0,a.kt)("inlineCode",{parentName:"td"},"WebComponents")," \u4e0a\u7684\u5c5e\u6027\u5230\u5185\u90e8 H5 \u6807\u7b7e\u4e0a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"ariaLabel"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u65e0\u969c\u788d\u8bbf\u95ee\uff0c\uff08\u5c5e\u6027\uff09\u5143\u7d20\u7684\u989d\u5916\u63cf\u8ff0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"onChange"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CommonEventFunction<{ value?: string; }>")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("radio-group",null)," \u4e2d\u7684\u9009\u4e2d\u9879\u53d1\u751f\u53d8\u5316\u65f6\u89e6\u53d1 change \u4e8b\u4ef6")))),(0,a.kt)("h3",o({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"\u6296\u97f3\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"QQ \u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"Harmony"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"RadioProps.value"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"RadioProps.checked"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"RadioProps.disabled"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"RadioProps.color"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"RadioProps.name"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"RadioProps.nativeProps"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"RadioProps.ariaLabel"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"RadioProps.onChange"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}))))))}f.isMDXComponent=!0},68525:function(e,t,n){t.Z=n.p+"assets/images/alipay-ee5545de747ce1ad6e17faec10358975.png"},83190:function(e,t,n){t.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},75e3:function(e,t,n){t.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},30174:function(e,t,n){t.Z=n.p+"assets/images/qq-3f77e6fbb490848ab8aa8183e9399110.png"},519:function(e,t,n){t.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},55899:function(e,t,n){t.Z=n.p+"assets/images/swan-566f56d360909d0457073b67b8f48958.png"},58939:function(e,t,n){t.Z=n.p+"assets/images/tt-f4ec120e570f924e7ef763dcaf7fc69d.png"},72369:function(e,t,n){t.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);