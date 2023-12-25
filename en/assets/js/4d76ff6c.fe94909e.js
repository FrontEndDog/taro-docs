"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[28271],{79874:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return u}});var r=t(93106);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),v=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=v(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",E={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=v(t),d=i,u=p["".concat(s,".").concat(d)]||p[d]||E[d]||o;return t?r.createElement(u,a(a({ref:n},m),{},{components:t})):r.createElement(u,a({ref:n},m))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var v=2;v<o;v++)a[v]=t[v];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},60088:function(e,n,t){t.r(n),t.d(n,{assets:function(){return v},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return m}});t(93106);var r=t(79874);function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const a={title:"\u4e8b\u4ef6\u76f8\u5173 API"},l=void 0,s={unversionedId:"test-utils/fire-event",id:"version-4.x/test-utils/fire-event",title:"\u4e8b\u4ef6\u76f8\u5173 API",description:"fireEvent",source:"@site/versioned_docs/version-4.x/test-utils/fire-event.md",sourceDirName:"test-utils",slug:"/test-utils/fire-event",permalink:"/taro-docs/en/docs/4.x/test-utils/fire-event",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-4.x/test-utils/fire-event.md",tags:[],version:"4.x",frontMatter:{title:"\u4e8b\u4ef6\u76f8\u5173 API"},sidebar:"docs",previous:{title:"\u67e5\u8be2\u76f8\u5173 API",permalink:"/taro-docs/en/docs/4.x/test-utils/queries"},next:{title:"\u751f\u547d\u5468\u671f API",permalink:"/taro-docs/en/docs/4.x/test-utils/life-cycle"}},v={},m=[{value:"fireEvent",id:"fireevent",level:2},{value:"\u5185\u7f6e\u4e8b\u4ef6",id:"\u5185\u7f6e\u4e8b\u4ef6",level:3},{value:"\u6784\u9020\u4e8b\u4ef6",id:"\u6784\u9020\u4e8b\u4ef6",level:3}],p={toc:m},E="wrapper";function d(e){var{components:n}=e,t=o(e,["components"]);return(0,r.kt)(E,i({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",i({},{id:"fireevent"}),"fireEvent"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/test-utils"),"\u76ee\u7684\u662f\u5173\u6ce8\u7ec4\u4ef6\u7684",(0,r.kt)("strong",{parentName:"p"},"\u7528\u6237\u884c\u4e3a\u548c\u5916\u90e8\u8868\u73b0\uff0c\u800c\u4e0d\u662f\u5185\u90e8\u5b9e\u73b0\u7ec6\u8282"),"\uff0c\u6240\u4ee5\u65e0\u8bba\u662f",(0,r.kt)("strong",{parentName:"p"},"vue"),"\u8fd8\u662f",(0,r.kt)("strong",{parentName:"p"},"react"),"\uff0c\u672c\u8d28\u90fd\u662f\u5728\u6e32\u67d3\u5b8c\u6210\u540e\uff0c\u901a\u8fc7\u89e6\u53d1\u5143\u7d20\u7684\u4e8b\u4ef6\uff0c\u4ece\u800c\u54cd\u5e94\u5230\u5185\u90e8\u5b9e\u73b0\u7684\u56de\u8c03\u51fd\u6570\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"fireEvent"),"\u5185\u7f6e\u4e86\u5e38\u7528\u7684\u4e8b\u4ef6\u89e6\u53d1\u5668\uff0c\u901a\u8fc7\u83b7\u53d6\u5143\u7d20 => \u89e6\u53d1\u4e8b\u4ef6 => \u4e8b\u4ef6\u54cd\u5e94 \u6765\u5bf9\u6d4b\u8bd5\u7ed3\u679c\u8fdb\u884c\u65ad\u8a00\u3002"),(0,r.kt)("h3",i({},{id:"\u5185\u7f6e\u4e8b\u4ef6"}),"\u5185\u7f6e\u4e8b\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-js"}),"// \u83b7\u53d6\u5143\u7d20\nconst ele = testUtils.queries.querySelector('input')\n// \u89e6\u53d1keyPress\u4e8b\u4ef6\ntestUtils.fireEvent.keyPress(ele, {\n  key: 'A',\n  code: 'A',\n})\n")),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-ts"}),"export interface FireEvent {\n  // Clipboard Events\n  copy(ele: Element, params?: ClipboardEventInit): void\n  cut(ele: Element, params?: ClipboardEventInit): void\n  paste(ele: Element, params?: ClipboardEventInit): void\n  // Composition Events\n  compositionEnd(ele: Element, params?: CompositionEventInit): void\n  compositionStart(ele: Element, params?: CompositionEventInit): void\n  compositionUpdate(ele: Element, params?: CompositionEventInit): void\n  // Keyboard Events\n  keyDown(ele: Element, params?: KeyboardEventInit): void\n  keyPress(ele: Element, params?: KeyboardEventInit): void\n  keyUp(ele: Element, params?: KeyboardEventInit): void\n  // Focus Events\n  focus(ele: Element, params?: FocusEventInit): void\n  blur(ele: Element, params?: FocusEventInit): void\n  focusIn(ele: Element, params?: FocusEventInit): void\n  focusOut(ele: Element, params?: FocusEventInit): void\n  // Form Events\n  change(ele: Element, params?: EventInit): void\n  input(ele: Element, params?: InputEventInit): void\n  invalid(ele: Element, params?: EventInit): void\n  submit(ele: Element, params?: EventInit): void\n  reset(ele: Element, params?: EventInit): void\n  // Mouse Events\n  click(ele: Element, params?: MouseEventInit): void\n  contextMenu(ele: Element, params?: MouseEventInit): void\n  dblClick(ele: Element, params?: MouseEventInit): void\n  doubleClick(ele: Element, params?: MouseEventInit): void\n  drag(ele: Element, params?: MouseEventInit): void\n  dragEnd(ele: Element, params?: MouseEventInit): void\n  dragEnter(ele: Element, params?: MouseEventInit): void\n  dragExit(ele: Element, params?: MouseEventInit): void\n  dragLeave(ele: Element, params?: MouseEventInit): void\n  dragOver(ele: Element, params?: MouseEventInit): void\n  drop(ele: Element, params?: MouseEventInit): void\n  mouseDown(ele: Element, params?: MouseEventInit): void\n  mouseEnter(ele: Element, params?: MouseEventInit): void\n  mouseLeave(ele: Element, params?: MouseEventInit): void\n  mouseMove(ele: Element, params?: MouseEventInit): void\n  mouseOut(ele: Element, params?: MouseEventInit): void\n  mouseOver(ele: Element, params?: MouseEventInit): void\n  mouseUp(ele: Element, params?: MouseEventInit): void\n  // Selection Events\n  select(ele: Element, params?: EventInit): void\n  // Touch Events\n  touchCancel(ele: Element, params?: TouchEventInit): void\n  touchEnd(ele: Element, params?: TouchEventInit): void\n  touchMove(ele: Element, params?: TouchEventInit): void\n  touchStart(ele: Element, params?: TouchEventInit): void\n  // UI Events\n  resize(ele: Element, params?: UIEventInit): void\n  scroll(ele: Element, params?: UIEventInit): void\n  // Wheel Events\n  wheel(ele: Element, params?: WheelEventInit): void\n  // Media Events\n  abort(ele: Element, params?: EventInit): void\n  canPlay(ele: Element, params?: EventInit): void\n  canPlayThrough(ele: Element, params?: EventInit): void\n  durationChange(ele: Element, params?: EventInit): void\n  emptied(ele: Element, params?: EventInit): void\n  encrypted(ele: Element, params?: EventInit): void\n  ended(ele: Element, params?: EventInit): void\n  loadedData(ele: Element, params?: EventInit): void\n  loadedMetadata(ele: Element, params?: EventInit): void\n  loadStart(ele: Element, params?: ProgressEventInit): void\n  pause(ele: Element, params?: EventInit): void\n  play(ele: Element, params?: EventInit): void\n  playing(ele: Element, params?: EventInit): void\n  progress(ele: Element, params?: ProgressEventInit): void\n  rateChange(ele: Element, params?: EventInit): void\n  seeked(ele: Element, params?: EventInit): void\n  seeking(ele: Element, params?: EventInit): void\n  stalled(ele: Element, params?: EventInit): void\n  suspend(ele: Element, params?: EventInit): void\n  timeUpdate(ele: Element, params?: EventInit): void\n  volumeChange(ele: Element, params?: EventInit): void\n  waiting(ele: Element, params?: EventInit): void\n  // Events\n  load(ele: Element, params?: EventInit): void\n  error(ele: Element, params?: EventInit): void\n  // Animation Events\n  animationStart(ele: Element, params?: AnimationEventInit): void\n  animationEnd(ele: Element, params?: AnimationEventInit): void\n  animationIteration(ele: Element, params?: AnimationEventInit): void\n  // Transition Events\n  transitionCancel(ele: Element, params?: TransitionEventInit): void\n  transitionEnd(ele: Element, params?: TransitionEventInit): void\n  transitionRun(ele: Element, params?: TransitionEventInit): void\n  transitionStart(ele: Element, params?: TransitionEventInit): void\n  // pointer events\n  pointerOver(ele: Element, params?: PointerEventInit): void\n  pointerEnter(ele: Element, params?: PointerEventInit): void\n  pointerDown(ele: Element, params?: PointerEventInit): void\n  pointerMove(ele: Element, params?: PointerEventInit): void\n  pointerUp(ele: Element, params?: PointerEventInit): void\n  pointerCancel(ele: Element, params?: PointerEventInit): void\n  pointerOut(ele: Element, params?: PointerEventInit): void\n  pointerLeave(ele: Element, params?: PointerEventInit): void\n  gotPointerCapture(ele: Element, params?: PointerEventInit): void\n  lostPointerCapture(ele: Element, params?: PointerEventInit): void\n  // history events\n  popState(ele: Element, params?: PopStateEventInit): void\n  // window events\n  offline(ele: Element, params?: EventInit): void\n  online(ele: Element, params?: EventInit): void\n}\n")),(0,r.kt)("h3",i({},{id:"\u6784\u9020\u4e8b\u4ef6"}),"\u6784\u9020\u4e8b\u4ef6"),(0,r.kt)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u7684\u5185\u7f6e\u4e8b\u4ef6\u5916\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"new Event()"),"\u6765\u6784\u9020\u4e00\u4e2a\u65b0\u7684\u4e8b\u4ef6\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-ts"}),"function fireEvent(ele: Element, event: Event)\n")),(0,r.kt)("p",null,"\u4f7f\u7528\u6848\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-js"}),"// \u83b7\u53d6\u5143\u7d20\nconst ele = testUtils.queries.querySelector('.text')\n// \u89e6\u53d1\u4e00\u4e2a\u5fc3\u7684\u4e8b\u4ef6\ntestUtils.fireEvent(ele, new Event())\ntestUtils.fireEvent(ele, new PointerEvent())\n")))}d.isMDXComponent=!0}}]);