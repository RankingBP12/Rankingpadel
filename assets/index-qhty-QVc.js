const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CargarBannerButton-DrjHhwhg.js","assets/CargarBannerButton-D_Zn8y1v.css","assets/AgendaTorneoButton-DuNh6C-K.js","assets/AgendaTorneoButton-BiKADMRM.css","assets/AgregarJugadorButton-BsuGMQcy.js","assets/AgregarJugadorButton-BYSvOtnj.css","assets/AgregarClubButton-Cur2Vcs4.js","assets/AgregarClubButton-BODDAt3a.css","assets/BannerModal-Bp2hUddT.js","assets/BannerModal-DfO0ywug.css","assets/AgendaTorneoModal-B4CFMZRr.js","assets/AgendaTorneoModal-BgQ-TdnX.css","assets/AgregarJugadorModal-nB73R3GE.js","assets/nombre-BYGSWZGL.js","assets/AgregarJugadorModal-D_8F9ZJf.css","assets/AgregarClubModal-CyTtH7-j.js","assets/AgregarClubModal-DSNttflx.css","assets/PlayerTable-CVeuRdJ1.js","assets/PlayerTable-nM8KOFTZ.css"])))=>i.map(i=>d[i]);
function hw(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function xm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Pm={exports:{}},Ma={},Am={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ds=Symbol.for("react.element"),fw=Symbol.for("react.portal"),pw=Symbol.for("react.fragment"),mw=Symbol.for("react.strict_mode"),gw=Symbol.for("react.profiler"),_w=Symbol.for("react.provider"),vw=Symbol.for("react.context"),yw=Symbol.for("react.forward_ref"),ww=Symbol.for("react.suspense"),Ew=Symbol.for("react.memo"),Sw=Symbol.for("react.lazy"),zh=Symbol.iterator;function Cw(t){return t===null||typeof t!="object"?null:(t=zh&&t[zh]||t["@@iterator"],typeof t=="function"?t:null)}var Om={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bm=Object.assign,Lm={};function ui(t,e,n){this.props=t,this.context=e,this.refs=Lm,this.updater=n||Om}ui.prototype.isReactComponent={};ui.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ui.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Dm(){}Dm.prototype=ui.prototype;function Fu(t,e,n){this.props=t,this.context=e,this.refs=Lm,this.updater=n||Om}var Uu=Fu.prototype=new Dm;Uu.constructor=Fu;bm(Uu,ui.prototype);Uu.isPureReactComponent=!0;var Bh=Array.isArray,Mm=Object.prototype.hasOwnProperty,ju={current:null},Fm={key:!0,ref:!0,__self:!0,__source:!0};function Um(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Mm.call(e,r)&&!Fm.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ds,type:t,key:s,ref:o,props:i,_owner:ju.current}}function Iw(t,e){return{$$typeof:Ds,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function zu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ds}function Tw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Wh=/\/+/g;function Rl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Tw(""+t.key):e.toString(36)}function Eo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ds:case fw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Rl(o,0):r,Bh(i)?(n="",t!=null&&(n=t.replace(Wh,"$&/")+"/"),Eo(i,e,n,"",function(c){return c})):i!=null&&(zu(i)&&(i=Iw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Wh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Bh(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Rl(s,a);o+=Eo(s,e,n,l,i)}else if(l=Cw(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Rl(s,a++),o+=Eo(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xs(t,e,n){if(t==null)return t;var r=[],i=0;return Eo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function kw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Me={current:null},So={transition:null},Rw={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:So,ReactCurrentOwner:ju};function jm(){throw Error("act(...) is not supported in production builds of React.")}j.Children={map:Xs,forEach:function(t,e,n){Xs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xs(t,function(){e++}),e},toArray:function(t){return Xs(t,function(e){return e})||[]},only:function(t){if(!zu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};j.Component=ui;j.Fragment=pw;j.Profiler=gw;j.PureComponent=Fu;j.StrictMode=mw;j.Suspense=ww;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rw;j.act=jm;j.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=bm({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ju.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Mm.call(e,l)&&!Fm.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ds,type:t.type,key:i,ref:s,props:r,_owner:o}};j.createContext=function(t){return t={$$typeof:vw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:_w,_context:t},t.Consumer=t};j.createElement=Um;j.createFactory=function(t){var e=Um.bind(null,t);return e.type=t,e};j.createRef=function(){return{current:null}};j.forwardRef=function(t){return{$$typeof:yw,render:t}};j.isValidElement=zu;j.lazy=function(t){return{$$typeof:Sw,_payload:{_status:-1,_result:t},_init:kw}};j.memo=function(t,e){return{$$typeof:Ew,type:t,compare:e===void 0?null:e}};j.startTransition=function(t){var e=So.transition;So.transition={};try{t()}finally{So.transition=e}};j.unstable_act=jm;j.useCallback=function(t,e){return Me.current.useCallback(t,e)};j.useContext=function(t){return Me.current.useContext(t)};j.useDebugValue=function(){};j.useDeferredValue=function(t){return Me.current.useDeferredValue(t)};j.useEffect=function(t,e){return Me.current.useEffect(t,e)};j.useId=function(){return Me.current.useId()};j.useImperativeHandle=function(t,e,n){return Me.current.useImperativeHandle(t,e,n)};j.useInsertionEffect=function(t,e){return Me.current.useInsertionEffect(t,e)};j.useLayoutEffect=function(t,e){return Me.current.useLayoutEffect(t,e)};j.useMemo=function(t,e){return Me.current.useMemo(t,e)};j.useReducer=function(t,e,n){return Me.current.useReducer(t,e,n)};j.useRef=function(t){return Me.current.useRef(t)};j.useState=function(t){return Me.current.useState(t)};j.useSyncExternalStore=function(t,e,n){return Me.current.useSyncExternalStore(t,e,n)};j.useTransition=function(){return Me.current.useTransition()};j.version="18.3.1";Am.exports=j;var E=Am.exports;const Ht=xm(E),Nw=hw({__proto__:null,default:Ht},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xw=E,Pw=Symbol.for("react.element"),Aw=Symbol.for("react.fragment"),Ow=Object.prototype.hasOwnProperty,bw=xw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lw={key:!0,ref:!0,__self:!0,__source:!0};function zm(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Ow.call(e,r)&&!Lw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Pw,type:t,key:s,ref:o,props:i,_owner:bw.current}}Ma.Fragment=Aw;Ma.jsx=zm;Ma.jsxs=zm;Pm.exports=Ma;var f=Pm.exports,Bm={exports:{}},et={},Wm={exports:{}},$m={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,L){var D=P.length;P.push(L);e:for(;0<D;){var ae=D-1>>>1,ge=P[ae];if(0<i(ge,L))P[ae]=L,P[D]=ge,D=ae;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var L=P[0],D=P.pop();if(D!==L){P[0]=D;e:for(var ae=0,ge=P.length,Ys=ge>>>1;ae<Ys;){var zn=2*(ae+1)-1,kl=P[zn],Bn=zn+1,Js=P[Bn];if(0>i(kl,D))Bn<ge&&0>i(Js,kl)?(P[ae]=Js,P[Bn]=D,ae=Bn):(P[ae]=kl,P[zn]=D,ae=zn);else if(Bn<ge&&0>i(Js,D))P[ae]=Js,P[Bn]=D,ae=Bn;else break e}}return L}function i(P,L){var D=P.sortIndex-L.sortIndex;return D!==0?D:P.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,u=null,h=3,_=!1,m=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(P){for(var L=n(c);L!==null;){if(L.callback===null)r(c);else if(L.startTime<=P)r(c),L.sortIndex=L.expirationTime,e(l,L);else break;L=n(c)}}function w(P){if(y=!1,v(P),!m)if(n(l)!==null)m=!0,Il(T);else{var L=n(c);L!==null&&Tl(w,L.startTime-P)}}function T(P,L){m=!1,y&&(y=!1,g(N),N=-1),_=!0;var D=h;try{for(v(L),u=n(l);u!==null&&(!(u.expirationTime>L)||P&&!ht());){var ae=u.callback;if(typeof ae=="function"){u.callback=null,h=u.priorityLevel;var ge=ae(u.expirationTime<=L);L=t.unstable_now(),typeof ge=="function"?u.callback=ge:u===n(l)&&r(l),v(L)}else r(l);u=n(l)}if(u!==null)var Ys=!0;else{var zn=n(c);zn!==null&&Tl(w,zn.startTime-L),Ys=!1}return Ys}finally{u=null,h=D,_=!1}}var R=!1,k=null,N=-1,V=5,b=-1;function ht(){return!(t.unstable_now()-b<V)}function wi(){if(k!==null){var P=t.unstable_now();b=P;var L=!0;try{L=k(!0,P)}finally{L?Ei():(R=!1,k=null)}}else R=!1}var Ei;if(typeof p=="function")Ei=function(){p(wi)};else if(typeof MessageChannel<"u"){var jh=new MessageChannel,dw=jh.port2;jh.port1.onmessage=wi,Ei=function(){dw.postMessage(null)}}else Ei=function(){S(wi,0)};function Il(P){k=P,R||(R=!0,Ei())}function Tl(P,L){N=S(function(){P(t.unstable_now())},L)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){m||_||(m=!0,Il(T))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var D=h;h=L;try{return P()}finally{h=D}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,L){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var D=h;h=P;try{return L()}finally{h=D}},t.unstable_scheduleCallback=function(P,L,D){var ae=t.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?ae+D:ae):D=ae,P){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=D+ge,P={id:d++,callback:L,priorityLevel:P,startTime:D,expirationTime:ge,sortIndex:-1},D>ae?(P.sortIndex=D,e(c,P),n(l)===null&&P===n(c)&&(y?(g(N),N=-1):y=!0,Tl(w,D-ae))):(P.sortIndex=ge,e(l,P),m||_||(m=!0,Il(T))),P},t.unstable_shouldYield=ht,t.unstable_wrapCallback=function(P){var L=h;return function(){var D=h;h=L;try{return P.apply(this,arguments)}finally{h=D}}}})($m);Wm.exports=$m;var Dw=Wm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mw=E,Ze=Dw;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vm=new Set,ns={};function mr(t,e){Qr(t,e),Qr(t+"Capture",e)}function Qr(t,e){for(ns[t]=e,t=0;t<e.length;t++)Vm.add(e[t])}var Kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yc=Object.prototype.hasOwnProperty,Fw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$h={},Vh={};function Uw(t){return yc.call(Vh,t)?!0:yc.call($h,t)?!1:Fw.test(t)?Vh[t]=!0:($h[t]=!0,!1)}function jw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function zw(t,e,n,r){if(e===null||typeof e>"u"||jw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Fe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ie[t]=new Fe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ie[e]=new Fe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ie[t]=new Fe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ie[t]=new Fe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ie[t]=new Fe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ie[t]=new Fe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ie[t]=new Fe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ie[t]=new Fe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ie[t]=new Fe(t,5,!1,t.toLowerCase(),null,!1,!1)});var Bu=/[\-:]([a-z])/g;function Wu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Bu,Wu);Ie[e]=new Fe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Bu,Wu);Ie[e]=new Fe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Bu,Wu);Ie[e]=new Fe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ie[t]=new Fe(t,1,!1,t.toLowerCase(),null,!1,!1)});Ie.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ie[t]=new Fe(t,1,!1,t.toLowerCase(),null,!0,!0)});function $u(t,e,n,r){var i=Ie.hasOwnProperty(e)?Ie[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(zw(e,n,i,r)&&(n=null),r||i===null?Uw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var tn=Mw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zs=Symbol.for("react.element"),Tr=Symbol.for("react.portal"),kr=Symbol.for("react.fragment"),Vu=Symbol.for("react.strict_mode"),wc=Symbol.for("react.profiler"),Hm=Symbol.for("react.provider"),Gm=Symbol.for("react.context"),Hu=Symbol.for("react.forward_ref"),Ec=Symbol.for("react.suspense"),Sc=Symbol.for("react.suspense_list"),Gu=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),qm=Symbol.for("react.offscreen"),Hh=Symbol.iterator;function Si(t){return t===null||typeof t!="object"?null:(t=Hh&&t[Hh]||t["@@iterator"],typeof t=="function"?t:null)}var te=Object.assign,Nl;function Di(t){if(Nl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Nl=e&&e[1]||""}return`
`+Nl+t}var xl=!1;function Pl(t,e){if(!t||xl)return"";xl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{xl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Di(t):""}function Bw(t){switch(t.tag){case 5:return Di(t.type);case 16:return Di("Lazy");case 13:return Di("Suspense");case 19:return Di("SuspenseList");case 0:case 2:case 15:return t=Pl(t.type,!1),t;case 11:return t=Pl(t.type.render,!1),t;case 1:return t=Pl(t.type,!0),t;default:return""}}function Cc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case kr:return"Fragment";case Tr:return"Portal";case wc:return"Profiler";case Vu:return"StrictMode";case Ec:return"Suspense";case Sc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Gm:return(t.displayName||"Context")+".Consumer";case Hm:return(t._context.displayName||"Context")+".Provider";case Hu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Gu:return e=t.displayName||null,e!==null?e:Cc(t.type)||"Memo";case an:e=t._payload,t=t._init;try{return Cc(t(e))}catch{}}return null}function Ww(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cc(e);case 8:return e===Vu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function An(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Km(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $w(t){var e=Km(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function eo(t){t._valueTracker||(t._valueTracker=$w(t))}function Qm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Km(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function jo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ic(t,e){var n=e.checked;return te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Gh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=An(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ym(t,e){e=e.checked,e!=null&&$u(t,"checked",e,!1)}function Tc(t,e){Ym(t,e);var n=An(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?kc(t,e.type,n):e.hasOwnProperty("defaultValue")&&kc(t,e.type,An(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function qh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function kc(t,e,n){(e!=="number"||jo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Mi=Array.isArray;function Ur(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+An(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Rc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Kh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(Mi(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:An(n)}}function Jm(t,e){var n=An(e.value),r=An(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Qh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Xm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Xm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var to,Zm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(to=to||document.createElement("div"),to.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=to.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function rs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ji={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vw=["Webkit","ms","Moz","O"];Object.keys(ji).forEach(function(t){Vw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ji[e]=ji[t]})});function eg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ji.hasOwnProperty(t)&&ji[t]?(""+e).trim():e+"px"}function tg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=eg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Hw=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xc(t,e){if(e){if(Hw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function Pc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ac=null;function qu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Oc=null,jr=null,zr=null;function Yh(t){if(t=Us(t)){if(typeof Oc!="function")throw Error(C(280));var e=t.stateNode;e&&(e=Ba(e),Oc(t.stateNode,t.type,e))}}function ng(t){jr?zr?zr.push(t):zr=[t]:jr=t}function rg(){if(jr){var t=jr,e=zr;if(zr=jr=null,Yh(t),e)for(t=0;t<e.length;t++)Yh(e[t])}}function ig(t,e){return t(e)}function sg(){}var Al=!1;function og(t,e,n){if(Al)return t(e,n);Al=!0;try{return ig(t,e,n)}finally{Al=!1,(jr!==null||zr!==null)&&(sg(),rg())}}function is(t,e){var n=t.stateNode;if(n===null)return null;var r=Ba(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var bc=!1;if(Kt)try{var Ci={};Object.defineProperty(Ci,"passive",{get:function(){bc=!0}}),window.addEventListener("test",Ci,Ci),window.removeEventListener("test",Ci,Ci)}catch{bc=!1}function Gw(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var zi=!1,zo=null,Bo=!1,Lc=null,qw={onError:function(t){zi=!0,zo=t}};function Kw(t,e,n,r,i,s,o,a,l){zi=!1,zo=null,Gw.apply(qw,arguments)}function Qw(t,e,n,r,i,s,o,a,l){if(Kw.apply(this,arguments),zi){if(zi){var c=zo;zi=!1,zo=null}else throw Error(C(198));Bo||(Bo=!0,Lc=c)}}function gr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ag(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Jh(t){if(gr(t)!==t)throw Error(C(188))}function Yw(t){var e=t.alternate;if(!e){if(e=gr(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Jh(i),t;if(s===r)return Jh(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function lg(t){return t=Yw(t),t!==null?cg(t):null}function cg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=cg(t);if(e!==null)return e;t=t.sibling}return null}var ug=Ze.unstable_scheduleCallback,Xh=Ze.unstable_cancelCallback,Jw=Ze.unstable_shouldYield,Xw=Ze.unstable_requestPaint,le=Ze.unstable_now,Zw=Ze.unstable_getCurrentPriorityLevel,Ku=Ze.unstable_ImmediatePriority,dg=Ze.unstable_UserBlockingPriority,Wo=Ze.unstable_NormalPriority,eE=Ze.unstable_LowPriority,hg=Ze.unstable_IdlePriority,Fa=null,At=null;function tE(t){if(At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(Fa,t,void 0,(t.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:iE,nE=Math.log,rE=Math.LN2;function iE(t){return t>>>=0,t===0?32:31-(nE(t)/rE|0)|0}var no=64,ro=4194304;function Fi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $o(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Fi(a):(s&=o,s!==0&&(r=Fi(s)))}else o=n&~i,o!==0?r=Fi(o):s!==0&&(r=Fi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-yt(e),i=1<<n,r|=t[n],e&=~i;return r}function sE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-yt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=sE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Dc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function fg(){var t=no;return no<<=1,!(no&4194240)&&(no=64),t}function Ol(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ms(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-yt(e),t[e]=n}function aE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-yt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Qu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-yt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var $=0;function pg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var mg,Yu,gg,_g,vg,Mc=!1,io=[],yn=null,wn=null,En=null,ss=new Map,os=new Map,cn=[],lE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zh(t,e){switch(t){case"focusin":case"focusout":yn=null;break;case"dragenter":case"dragleave":wn=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":ss.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":os.delete(e.pointerId)}}function Ii(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Us(e),e!==null&&Yu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function cE(t,e,n,r,i){switch(e){case"focusin":return yn=Ii(yn,t,e,n,r,i),!0;case"dragenter":return wn=Ii(wn,t,e,n,r,i),!0;case"mouseover":return En=Ii(En,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ss.set(s,Ii(ss.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,os.set(s,Ii(os.get(s)||null,t,e,n,r,i)),!0}return!1}function yg(t){var e=Gn(t.target);if(e!==null){var n=gr(e);if(n!==null){if(e=n.tag,e===13){if(e=ag(n),e!==null){t.blockedOn=e,vg(t.priority,function(){gg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Co(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Fc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ac=r,n.target.dispatchEvent(r),Ac=null}else return e=Us(n),e!==null&&Yu(e),t.blockedOn=n,!1;e.shift()}return!0}function ef(t,e,n){Co(t)&&n.delete(e)}function uE(){Mc=!1,yn!==null&&Co(yn)&&(yn=null),wn!==null&&Co(wn)&&(wn=null),En!==null&&Co(En)&&(En=null),ss.forEach(ef),os.forEach(ef)}function Ti(t,e){t.blockedOn===e&&(t.blockedOn=null,Mc||(Mc=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,uE)))}function as(t){function e(i){return Ti(i,t)}if(0<io.length){Ti(io[0],t);for(var n=1;n<io.length;n++){var r=io[n];r.blockedOn===t&&(r.blockedOn=null)}}for(yn!==null&&Ti(yn,t),wn!==null&&Ti(wn,t),En!==null&&Ti(En,t),ss.forEach(e),os.forEach(e),n=0;n<cn.length;n++)r=cn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<cn.length&&(n=cn[0],n.blockedOn===null);)yg(n),n.blockedOn===null&&cn.shift()}var Br=tn.ReactCurrentBatchConfig,Vo=!0;function dE(t,e,n,r){var i=$,s=Br.transition;Br.transition=null;try{$=1,Ju(t,e,n,r)}finally{$=i,Br.transition=s}}function hE(t,e,n,r){var i=$,s=Br.transition;Br.transition=null;try{$=4,Ju(t,e,n,r)}finally{$=i,Br.transition=s}}function Ju(t,e,n,r){if(Vo){var i=Fc(t,e,n,r);if(i===null)Wl(t,e,r,Ho,n),Zh(t,r);else if(cE(i,t,e,n,r))r.stopPropagation();else if(Zh(t,r),e&4&&-1<lE.indexOf(t)){for(;i!==null;){var s=Us(i);if(s!==null&&mg(s),s=Fc(t,e,n,r),s===null&&Wl(t,e,r,Ho,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Wl(t,e,r,null,n)}}var Ho=null;function Fc(t,e,n,r){if(Ho=null,t=qu(r),t=Gn(t),t!==null)if(e=gr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ag(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ho=t,null}function wg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zw()){case Ku:return 1;case dg:return 4;case Wo:case eE:return 16;case hg:return 536870912;default:return 16}default:return 16}}var mn=null,Xu=null,Io=null;function Eg(){if(Io)return Io;var t,e=Xu,n=e.length,r,i="value"in mn?mn.value:mn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Io=i.slice(t,1<r?1-r:void 0)}function To(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function so(){return!0}function tf(){return!1}function tt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?so:tf,this.isPropagationStopped=tf,this}return te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=so)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=so)},persist:function(){},isPersistent:so}),e}var di={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zu=tt(di),Fs=te({},di,{view:0,detail:0}),fE=tt(Fs),bl,Ll,ki,Ua=te({},Fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ed,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ki&&(ki&&t.type==="mousemove"?(bl=t.screenX-ki.screenX,Ll=t.screenY-ki.screenY):Ll=bl=0,ki=t),bl)},movementY:function(t){return"movementY"in t?t.movementY:Ll}}),nf=tt(Ua),pE=te({},Ua,{dataTransfer:0}),mE=tt(pE),gE=te({},Fs,{relatedTarget:0}),Dl=tt(gE),_E=te({},di,{animationName:0,elapsedTime:0,pseudoElement:0}),vE=tt(_E),yE=te({},di,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),wE=tt(yE),EE=te({},di,{data:0}),rf=tt(EE),SE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},CE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},IE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function TE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=IE[t])?!!e[t]:!1}function ed(){return TE}var kE=te({},Fs,{key:function(t){if(t.key){var e=SE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=To(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?CE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ed,charCode:function(t){return t.type==="keypress"?To(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?To(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),RE=tt(kE),NE=te({},Ua,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sf=tt(NE),xE=te({},Fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ed}),PE=tt(xE),AE=te({},di,{propertyName:0,elapsedTime:0,pseudoElement:0}),OE=tt(AE),bE=te({},Ua,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),LE=tt(bE),DE=[9,13,27,32],td=Kt&&"CompositionEvent"in window,Bi=null;Kt&&"documentMode"in document&&(Bi=document.documentMode);var ME=Kt&&"TextEvent"in window&&!Bi,Sg=Kt&&(!td||Bi&&8<Bi&&11>=Bi),of=" ",af=!1;function Cg(t,e){switch(t){case"keyup":return DE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ig(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Rr=!1;function FE(t,e){switch(t){case"compositionend":return Ig(e);case"keypress":return e.which!==32?null:(af=!0,of);case"textInput":return t=e.data,t===of&&af?null:t;default:return null}}function UE(t,e){if(Rr)return t==="compositionend"||!td&&Cg(t,e)?(t=Eg(),Io=Xu=mn=null,Rr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Sg&&e.locale!=="ko"?null:e.data;default:return null}}var jE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jE[t.type]:e==="textarea"}function Tg(t,e,n,r){ng(r),e=Go(e,"onChange"),0<e.length&&(n=new Zu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Wi=null,ls=null;function zE(t){Mg(t,0)}function ja(t){var e=Pr(t);if(Qm(e))return t}function BE(t,e){if(t==="change")return e}var kg=!1;if(Kt){var Ml;if(Kt){var Fl="oninput"in document;if(!Fl){var cf=document.createElement("div");cf.setAttribute("oninput","return;"),Fl=typeof cf.oninput=="function"}Ml=Fl}else Ml=!1;kg=Ml&&(!document.documentMode||9<document.documentMode)}function uf(){Wi&&(Wi.detachEvent("onpropertychange",Rg),ls=Wi=null)}function Rg(t){if(t.propertyName==="value"&&ja(ls)){var e=[];Tg(e,ls,t,qu(t)),og(zE,e)}}function WE(t,e,n){t==="focusin"?(uf(),Wi=e,ls=n,Wi.attachEvent("onpropertychange",Rg)):t==="focusout"&&uf()}function $E(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ja(ls)}function VE(t,e){if(t==="click")return ja(e)}function HE(t,e){if(t==="input"||t==="change")return ja(e)}function GE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ct=typeof Object.is=="function"?Object.is:GE;function cs(t,e){if(Ct(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!yc.call(e,i)||!Ct(t[i],e[i]))return!1}return!0}function df(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hf(t,e){var n=df(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=df(n)}}function Ng(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ng(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function xg(){for(var t=window,e=jo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=jo(t.document)}return e}function nd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function qE(t){var e=xg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ng(n.ownerDocument.documentElement,n)){if(r!==null&&nd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=hf(n,s);var o=hf(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var KE=Kt&&"documentMode"in document&&11>=document.documentMode,Nr=null,Uc=null,$i=null,jc=!1;function ff(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jc||Nr==null||Nr!==jo(r)||(r=Nr,"selectionStart"in r&&nd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$i&&cs($i,r)||($i=r,r=Go(Uc,"onSelect"),0<r.length&&(e=new Zu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Nr)))}function oo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var xr={animationend:oo("Animation","AnimationEnd"),animationiteration:oo("Animation","AnimationIteration"),animationstart:oo("Animation","AnimationStart"),transitionend:oo("Transition","TransitionEnd")},Ul={},Pg={};Kt&&(Pg=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);function za(t){if(Ul[t])return Ul[t];if(!xr[t])return t;var e=xr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Pg)return Ul[t]=e[n];return t}var Ag=za("animationend"),Og=za("animationiteration"),bg=za("animationstart"),Lg=za("transitionend"),Dg=new Map,pf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mn(t,e){Dg.set(t,e),mr(e,[t])}for(var jl=0;jl<pf.length;jl++){var zl=pf[jl],QE=zl.toLowerCase(),YE=zl[0].toUpperCase()+zl.slice(1);Mn(QE,"on"+YE)}Mn(Ag,"onAnimationEnd");Mn(Og,"onAnimationIteration");Mn(bg,"onAnimationStart");Mn("dblclick","onDoubleClick");Mn("focusin","onFocus");Mn("focusout","onBlur");Mn(Lg,"onTransitionEnd");Qr("onMouseEnter",["mouseout","mouseover"]);Qr("onMouseLeave",["mouseout","mouseover"]);Qr("onPointerEnter",["pointerout","pointerover"]);Qr("onPointerLeave",["pointerout","pointerover"]);mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),JE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ui));function mf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Qw(r,e,void 0,t),t.currentTarget=null}function Mg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;mf(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;mf(i,a,c),s=l}}}if(Bo)throw t=Lc,Bo=!1,Lc=null,t}function Y(t,e){var n=e[Vc];n===void 0&&(n=e[Vc]=new Set);var r=t+"__bubble";n.has(r)||(Fg(e,t,2,!1),n.add(r))}function Bl(t,e,n){var r=0;e&&(r|=4),Fg(n,t,r,e)}var ao="_reactListening"+Math.random().toString(36).slice(2);function us(t){if(!t[ao]){t[ao]=!0,Vm.forEach(function(n){n!=="selectionchange"&&(JE.has(n)||Bl(n,!1,t),Bl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ao]||(e[ao]=!0,Bl("selectionchange",!1,e))}}function Fg(t,e,n,r){switch(wg(e)){case 1:var i=dE;break;case 4:i=hE;break;default:i=Ju}n=i.bind(null,e,n,t),i=void 0,!bc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Wl(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Gn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}og(function(){var c=s,d=qu(n),u=[];e:{var h=Dg.get(t);if(h!==void 0){var _=Zu,m=t;switch(t){case"keypress":if(To(n)===0)break e;case"keydown":case"keyup":_=RE;break;case"focusin":m="focus",_=Dl;break;case"focusout":m="blur",_=Dl;break;case"beforeblur":case"afterblur":_=Dl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=nf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=mE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=PE;break;case Ag:case Og:case bg:_=vE;break;case Lg:_=OE;break;case"scroll":_=fE;break;case"wheel":_=LE;break;case"copy":case"cut":case"paste":_=wE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=sf}var y=(e&4)!==0,S=!y&&t==="scroll",g=y?h!==null?h+"Capture":null:h;y=[];for(var p=c,v;p!==null;){v=p;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,g!==null&&(w=is(p,g),w!=null&&y.push(ds(p,w,v)))),S)break;p=p.return}0<y.length&&(h=new _(h,m,null,n,d),u.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",h&&n!==Ac&&(m=n.relatedTarget||n.fromElement)&&(Gn(m)||m[Qt]))break e;if((_||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,_?(m=n.relatedTarget||n.toElement,_=c,m=m?Gn(m):null,m!==null&&(S=gr(m),m!==S||m.tag!==5&&m.tag!==6)&&(m=null)):(_=null,m=c),_!==m)){if(y=nf,w="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=sf,w="onPointerLeave",g="onPointerEnter",p="pointer"),S=_==null?h:Pr(_),v=m==null?h:Pr(m),h=new y(w,p+"leave",_,n,d),h.target=S,h.relatedTarget=v,w=null,Gn(d)===c&&(y=new y(g,p+"enter",m,n,d),y.target=v,y.relatedTarget=S,w=y),S=w,_&&m)t:{for(y=_,g=m,p=0,v=y;v;v=Cr(v))p++;for(v=0,w=g;w;w=Cr(w))v++;for(;0<p-v;)y=Cr(y),p--;for(;0<v-p;)g=Cr(g),v--;for(;p--;){if(y===g||g!==null&&y===g.alternate)break t;y=Cr(y),g=Cr(g)}y=null}else y=null;_!==null&&gf(u,h,_,y,!1),m!==null&&S!==null&&gf(u,S,m,y,!0)}}e:{if(h=c?Pr(c):window,_=h.nodeName&&h.nodeName.toLowerCase(),_==="select"||_==="input"&&h.type==="file")var T=BE;else if(lf(h))if(kg)T=HE;else{T=$E;var R=WE}else(_=h.nodeName)&&_.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=VE);if(T&&(T=T(t,c))){Tg(u,T,n,d);break e}R&&R(t,h,c),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&kc(h,"number",h.value)}switch(R=c?Pr(c):window,t){case"focusin":(lf(R)||R.contentEditable==="true")&&(Nr=R,Uc=c,$i=null);break;case"focusout":$i=Uc=Nr=null;break;case"mousedown":jc=!0;break;case"contextmenu":case"mouseup":case"dragend":jc=!1,ff(u,n,d);break;case"selectionchange":if(KE)break;case"keydown":case"keyup":ff(u,n,d)}var k;if(td)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Rr?Cg(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Sg&&n.locale!=="ko"&&(Rr||N!=="onCompositionStart"?N==="onCompositionEnd"&&Rr&&(k=Eg()):(mn=d,Xu="value"in mn?mn.value:mn.textContent,Rr=!0)),R=Go(c,N),0<R.length&&(N=new rf(N,t,null,n,d),u.push({event:N,listeners:R}),k?N.data=k:(k=Ig(n),k!==null&&(N.data=k)))),(k=ME?FE(t,n):UE(t,n))&&(c=Go(c,"onBeforeInput"),0<c.length&&(d=new rf("onBeforeInput","beforeinput",null,n,d),u.push({event:d,listeners:c}),d.data=k))}Mg(u,e)})}function ds(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Go(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=is(t,n),s!=null&&r.unshift(ds(t,s,i)),s=is(t,e),s!=null&&r.push(ds(t,s,i))),t=t.return}return r}function Cr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function gf(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=is(n,s),l!=null&&o.unshift(ds(n,l,a))):i||(l=is(n,s),l!=null&&o.push(ds(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var XE=/\r\n?/g,ZE=/\u0000|\uFFFD/g;function _f(t){return(typeof t=="string"?t:""+t).replace(XE,`
`).replace(ZE,"")}function lo(t,e,n){if(e=_f(e),_f(t)!==e&&n)throw Error(C(425))}function qo(){}var zc=null,Bc=null;function Wc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $c=typeof setTimeout=="function"?setTimeout:void 0,eS=typeof clearTimeout=="function"?clearTimeout:void 0,vf=typeof Promise=="function"?Promise:void 0,tS=typeof queueMicrotask=="function"?queueMicrotask:typeof vf<"u"?function(t){return vf.resolve(null).then(t).catch(nS)}:$c;function nS(t){setTimeout(function(){throw t})}function $l(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),as(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);as(e)}function Sn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function yf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var hi=Math.random().toString(36).slice(2),Nt="__reactFiber$"+hi,hs="__reactProps$"+hi,Qt="__reactContainer$"+hi,Vc="__reactEvents$"+hi,rS="__reactListeners$"+hi,iS="__reactHandles$"+hi;function Gn(t){var e=t[Nt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Qt]||n[Nt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=yf(t);t!==null;){if(n=t[Nt])return n;t=yf(t)}return e}t=n,n=t.parentNode}return null}function Us(t){return t=t[Nt]||t[Qt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Pr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function Ba(t){return t[hs]||null}var Hc=[],Ar=-1;function Fn(t){return{current:t}}function J(t){0>Ar||(t.current=Hc[Ar],Hc[Ar]=null,Ar--)}function Q(t,e){Ar++,Hc[Ar]=t.current,t.current=e}var On={},xe=Fn(On),Be=Fn(!1),rr=On;function Yr(t,e){var n=t.type.contextTypes;if(!n)return On;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function We(t){return t=t.childContextTypes,t!=null}function Ko(){J(Be),J(xe)}function wf(t,e,n){if(xe.current!==On)throw Error(C(168));Q(xe,e),Q(Be,n)}function Ug(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,Ww(t)||"Unknown",i));return te({},n,r)}function Qo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||On,rr=xe.current,Q(xe,t),Q(Be,Be.current),!0}function Ef(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=Ug(t,e,rr),r.__reactInternalMemoizedMergedChildContext=t,J(Be),J(xe),Q(xe,t)):J(Be),Q(Be,n)}var Ft=null,Wa=!1,Vl=!1;function jg(t){Ft===null?Ft=[t]:Ft.push(t)}function sS(t){Wa=!0,jg(t)}function Un(){if(!Vl&&Ft!==null){Vl=!0;var t=0,e=$;try{var n=Ft;for($=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ft=null,Wa=!1}catch(i){throw Ft!==null&&(Ft=Ft.slice(t+1)),ug(Ku,Un),i}finally{$=e,Vl=!1}}return null}var Or=[],br=0,Yo=null,Jo=0,nt=[],rt=0,ir=null,Ut=1,jt="";function Wn(t,e){Or[br++]=Jo,Or[br++]=Yo,Yo=t,Jo=e}function zg(t,e,n){nt[rt++]=Ut,nt[rt++]=jt,nt[rt++]=ir,ir=t;var r=Ut;t=jt;var i=32-yt(r)-1;r&=~(1<<i),n+=1;var s=32-yt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ut=1<<32-yt(e)+i|n<<i|r,jt=s+t}else Ut=1<<s|n<<i|r,jt=t}function rd(t){t.return!==null&&(Wn(t,1),zg(t,1,0))}function id(t){for(;t===Yo;)Yo=Or[--br],Or[br]=null,Jo=Or[--br],Or[br]=null;for(;t===ir;)ir=nt[--rt],nt[rt]=null,jt=nt[--rt],nt[rt]=null,Ut=nt[--rt],nt[rt]=null}var Je=null,Qe=null,X=!1,gt=null;function Bg(t,e){var n=it(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Sf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Je=t,Qe=Sn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Je=t,Qe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ir!==null?{id:Ut,overflow:jt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=it(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Je=t,Qe=null,!0):!1;default:return!1}}function Gc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qc(t){if(X){var e=Qe;if(e){var n=e;if(!Sf(t,e)){if(Gc(t))throw Error(C(418));e=Sn(n.nextSibling);var r=Je;e&&Sf(t,e)?Bg(r,n):(t.flags=t.flags&-4097|2,X=!1,Je=t)}}else{if(Gc(t))throw Error(C(418));t.flags=t.flags&-4097|2,X=!1,Je=t}}}function Cf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Je=t}function co(t){if(t!==Je)return!1;if(!X)return Cf(t),X=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Wc(t.type,t.memoizedProps)),e&&(e=Qe)){if(Gc(t))throw Wg(),Error(C(418));for(;e;)Bg(t,e),e=Sn(e.nextSibling)}if(Cf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Qe=Sn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Qe=null}}else Qe=Je?Sn(t.stateNode.nextSibling):null;return!0}function Wg(){for(var t=Qe;t;)t=Sn(t.nextSibling)}function Jr(){Qe=Je=null,X=!1}function sd(t){gt===null?gt=[t]:gt.push(t)}var oS=tn.ReactCurrentBatchConfig;function Ri(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function uo(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function If(t){var e=t._init;return e(t._payload)}function $g(t){function e(g,p){if(t){var v=g.deletions;v===null?(g.deletions=[p],g.flags|=16):v.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=kn(g,p),g.index=0,g.sibling=null,g}function s(g,p,v){return g.index=v,t?(v=g.alternate,v!==null?(v=v.index,v<p?(g.flags|=2,p):v):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,p,v,w){return p===null||p.tag!==6?(p=Jl(v,g.mode,w),p.return=g,p):(p=i(p,v),p.return=g,p)}function l(g,p,v,w){var T=v.type;return T===kr?d(g,p,v.props.children,w,v.key):p!==null&&(p.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===an&&If(T)===p.type)?(w=i(p,v.props),w.ref=Ri(g,p,v),w.return=g,w):(w=Oo(v.type,v.key,v.props,null,g.mode,w),w.ref=Ri(g,p,v),w.return=g,w)}function c(g,p,v,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=Xl(v,g.mode,w),p.return=g,p):(p=i(p,v.children||[]),p.return=g,p)}function d(g,p,v,w,T){return p===null||p.tag!==7?(p=Zn(v,g.mode,w,T),p.return=g,p):(p=i(p,v),p.return=g,p)}function u(g,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Jl(""+p,g.mode,v),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Zs:return v=Oo(p.type,p.key,p.props,null,g.mode,v),v.ref=Ri(g,null,p),v.return=g,v;case Tr:return p=Xl(p,g.mode,v),p.return=g,p;case an:var w=p._init;return u(g,w(p._payload),v)}if(Mi(p)||Si(p))return p=Zn(p,g.mode,v,null),p.return=g,p;uo(g,p)}return null}function h(g,p,v,w){var T=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return T!==null?null:a(g,p,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Zs:return v.key===T?l(g,p,v,w):null;case Tr:return v.key===T?c(g,p,v,w):null;case an:return T=v._init,h(g,p,T(v._payload),w)}if(Mi(v)||Si(v))return T!==null?null:d(g,p,v,w,null);uo(g,v)}return null}function _(g,p,v,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(v)||null,a(p,g,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Zs:return g=g.get(w.key===null?v:w.key)||null,l(p,g,w,T);case Tr:return g=g.get(w.key===null?v:w.key)||null,c(p,g,w,T);case an:var R=w._init;return _(g,p,v,R(w._payload),T)}if(Mi(w)||Si(w))return g=g.get(v)||null,d(p,g,w,T,null);uo(p,w)}return null}function m(g,p,v,w){for(var T=null,R=null,k=p,N=p=0,V=null;k!==null&&N<v.length;N++){k.index>N?(V=k,k=null):V=k.sibling;var b=h(g,k,v[N],w);if(b===null){k===null&&(k=V);break}t&&k&&b.alternate===null&&e(g,k),p=s(b,p,N),R===null?T=b:R.sibling=b,R=b,k=V}if(N===v.length)return n(g,k),X&&Wn(g,N),T;if(k===null){for(;N<v.length;N++)k=u(g,v[N],w),k!==null&&(p=s(k,p,N),R===null?T=k:R.sibling=k,R=k);return X&&Wn(g,N),T}for(k=r(g,k);N<v.length;N++)V=_(k,g,N,v[N],w),V!==null&&(t&&V.alternate!==null&&k.delete(V.key===null?N:V.key),p=s(V,p,N),R===null?T=V:R.sibling=V,R=V);return t&&k.forEach(function(ht){return e(g,ht)}),X&&Wn(g,N),T}function y(g,p,v,w){var T=Si(v);if(typeof T!="function")throw Error(C(150));if(v=T.call(v),v==null)throw Error(C(151));for(var R=T=null,k=p,N=p=0,V=null,b=v.next();k!==null&&!b.done;N++,b=v.next()){k.index>N?(V=k,k=null):V=k.sibling;var ht=h(g,k,b.value,w);if(ht===null){k===null&&(k=V);break}t&&k&&ht.alternate===null&&e(g,k),p=s(ht,p,N),R===null?T=ht:R.sibling=ht,R=ht,k=V}if(b.done)return n(g,k),X&&Wn(g,N),T;if(k===null){for(;!b.done;N++,b=v.next())b=u(g,b.value,w),b!==null&&(p=s(b,p,N),R===null?T=b:R.sibling=b,R=b);return X&&Wn(g,N),T}for(k=r(g,k);!b.done;N++,b=v.next())b=_(k,g,N,b.value,w),b!==null&&(t&&b.alternate!==null&&k.delete(b.key===null?N:b.key),p=s(b,p,N),R===null?T=b:R.sibling=b,R=b);return t&&k.forEach(function(wi){return e(g,wi)}),X&&Wn(g,N),T}function S(g,p,v,w){if(typeof v=="object"&&v!==null&&v.type===kr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Zs:e:{for(var T=v.key,R=p;R!==null;){if(R.key===T){if(T=v.type,T===kr){if(R.tag===7){n(g,R.sibling),p=i(R,v.props.children),p.return=g,g=p;break e}}else if(R.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===an&&If(T)===R.type){n(g,R.sibling),p=i(R,v.props),p.ref=Ri(g,R,v),p.return=g,g=p;break e}n(g,R);break}else e(g,R);R=R.sibling}v.type===kr?(p=Zn(v.props.children,g.mode,w,v.key),p.return=g,g=p):(w=Oo(v.type,v.key,v.props,null,g.mode,w),w.ref=Ri(g,p,v),w.return=g,g=w)}return o(g);case Tr:e:{for(R=v.key;p!==null;){if(p.key===R)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(g,p.sibling),p=i(p,v.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=Xl(v,g.mode,w),p.return=g,g=p}return o(g);case an:return R=v._init,S(g,p,R(v._payload),w)}if(Mi(v))return m(g,p,v,w);if(Si(v))return y(g,p,v,w);uo(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,v),p.return=g,g=p):(n(g,p),p=Jl(v,g.mode,w),p.return=g,g=p),o(g)):n(g,p)}return S}var Xr=$g(!0),Vg=$g(!1),Xo=Fn(null),Zo=null,Lr=null,od=null;function ad(){od=Lr=Zo=null}function ld(t){var e=Xo.current;J(Xo),t._currentValue=e}function Kc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Wr(t,e){Zo=t,od=Lr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(je=!0),t.firstContext=null)}function at(t){var e=t._currentValue;if(od!==t)if(t={context:t,memoizedValue:e,next:null},Lr===null){if(Zo===null)throw Error(C(308));Lr=t,Zo.dependencies={lanes:0,firstContext:t}}else Lr=Lr.next=t;return e}var qn=null;function cd(t){qn===null?qn=[t]:qn.push(t)}function Hg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,cd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Yt(t,r)}function Yt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ln=!1;function ud(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Cn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Yt(t,n)}return i=r.interleaved,i===null?(e.next=e,cd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Yt(t,n)}function ko(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Qu(t,n)}}function Tf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ea(t,e,n,r){var i=t.updateQueue;ln=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var u=i.baseState;o=0,d=c=l=null,a=s;do{var h=a.lane,_=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,y=a;switch(h=e,_=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){u=m.call(_,u,h);break e}u=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,h=typeof m=="function"?m.call(_,u,h):m,h==null)break e;u=te({},u,h);break e;case 2:ln=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else _={eventTime:_,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=_,l=u):d=d.next=_,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(l=u),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);or|=o,t.lanes=o,t.memoizedState=u}}function kf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var js={},Ot=Fn(js),fs=Fn(js),ps=Fn(js);function Kn(t){if(t===js)throw Error(C(174));return t}function dd(t,e){switch(Q(ps,e),Q(fs,t),Q(Ot,js),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Nc(e,t)}J(Ot),Q(Ot,e)}function Zr(){J(Ot),J(fs),J(ps)}function qg(t){Kn(ps.current);var e=Kn(Ot.current),n=Nc(e,t.type);e!==n&&(Q(fs,t),Q(Ot,n))}function hd(t){fs.current===t&&(J(Ot),J(fs))}var Z=Fn(0);function ta(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Hl=[];function fd(){for(var t=0;t<Hl.length;t++)Hl[t]._workInProgressVersionPrimary=null;Hl.length=0}var Ro=tn.ReactCurrentDispatcher,Gl=tn.ReactCurrentBatchConfig,sr=0,ee=null,de=null,ve=null,na=!1,Vi=!1,ms=0,aS=0;function ke(){throw Error(C(321))}function pd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ct(t[n],e[n]))return!1;return!0}function md(t,e,n,r,i,s){if(sr=s,ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ro.current=t===null||t.memoizedState===null?dS:hS,t=n(r,i),Vi){s=0;do{if(Vi=!1,ms=0,25<=s)throw Error(C(301));s+=1,ve=de=null,e.updateQueue=null,Ro.current=fS,t=n(r,i)}while(Vi)}if(Ro.current=ra,e=de!==null&&de.next!==null,sr=0,ve=de=ee=null,na=!1,e)throw Error(C(300));return t}function gd(){var t=ms!==0;return ms=0,t}function Rt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?ee.memoizedState=ve=t:ve=ve.next=t,ve}function lt(){if(de===null){var t=ee.alternate;t=t!==null?t.memoizedState:null}else t=de.next;var e=ve===null?ee.memoizedState:ve.next;if(e!==null)ve=e,de=t;else{if(t===null)throw Error(C(310));de=t,t={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},ve===null?ee.memoizedState=ve=t:ve=ve.next=t}return ve}function gs(t,e){return typeof e=="function"?e(t):e}function ql(t){var e=lt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=de,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((sr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var u={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=u,o=r):l=l.next=u,ee.lanes|=d,or|=d}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,Ct(r,e.memoizedState)||(je=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ee.lanes|=s,or|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Kl(t){var e=lt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ct(s,e.memoizedState)||(je=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Kg(){}function Qg(t,e){var n=ee,r=lt(),i=e(),s=!Ct(r.memoizedState,i);if(s&&(r.memoizedState=i,je=!0),r=r.queue,_d(Xg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,_s(9,Jg.bind(null,n,r,i,e),void 0,null),we===null)throw Error(C(349));sr&30||Yg(n,e,i)}return i}function Yg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ee.updateQueue,e===null?(e={lastEffect:null,stores:null},ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Jg(t,e,n,r){e.value=n,e.getSnapshot=r,Zg(e)&&e_(t)}function Xg(t,e,n){return n(function(){Zg(e)&&e_(t)})}function Zg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ct(t,n)}catch{return!0}}function e_(t){var e=Yt(t,1);e!==null&&wt(e,t,1,-1)}function Rf(t){var e=Rt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:gs,lastRenderedState:t},e.queue=t,t=t.dispatch=uS.bind(null,ee,t),[e.memoizedState,t]}function _s(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ee.updateQueue,e===null?(e={lastEffect:null,stores:null},ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function t_(){return lt().memoizedState}function No(t,e,n,r){var i=Rt();ee.flags|=t,i.memoizedState=_s(1|e,n,void 0,r===void 0?null:r)}function $a(t,e,n,r){var i=lt();r=r===void 0?null:r;var s=void 0;if(de!==null){var o=de.memoizedState;if(s=o.destroy,r!==null&&pd(r,o.deps)){i.memoizedState=_s(e,n,s,r);return}}ee.flags|=t,i.memoizedState=_s(1|e,n,s,r)}function Nf(t,e){return No(8390656,8,t,e)}function _d(t,e){return $a(2048,8,t,e)}function n_(t,e){return $a(4,2,t,e)}function r_(t,e){return $a(4,4,t,e)}function i_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function s_(t,e,n){return n=n!=null?n.concat([t]):null,$a(4,4,i_.bind(null,e,t),n)}function vd(){}function o_(t,e){var n=lt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&pd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function a_(t,e){var n=lt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&pd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function l_(t,e,n){return sr&21?(Ct(n,e)||(n=fg(),ee.lanes|=n,or|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,je=!0),t.memoizedState=n)}function lS(t,e){var n=$;$=n!==0&&4>n?n:4,t(!0);var r=Gl.transition;Gl.transition={};try{t(!1),e()}finally{$=n,Gl.transition=r}}function c_(){return lt().memoizedState}function cS(t,e,n){var r=Tn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},u_(t))d_(e,n);else if(n=Hg(t,e,n,r),n!==null){var i=be();wt(n,t,r,i),h_(n,e,r)}}function uS(t,e,n){var r=Tn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(u_(t))d_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ct(a,o)){var l=e.interleaved;l===null?(i.next=i,cd(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Hg(t,e,i,r),n!==null&&(i=be(),wt(n,t,r,i),h_(n,e,r))}}function u_(t){var e=t.alternate;return t===ee||e!==null&&e===ee}function d_(t,e){Vi=na=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function h_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Qu(t,n)}}var ra={readContext:at,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},dS={readContext:at,useCallback:function(t,e){return Rt().memoizedState=[t,e===void 0?null:e],t},useContext:at,useEffect:Nf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,No(4194308,4,i_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return No(4194308,4,t,e)},useInsertionEffect:function(t,e){return No(4,2,t,e)},useMemo:function(t,e){var n=Rt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Rt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=cS.bind(null,ee,t),[r.memoizedState,t]},useRef:function(t){var e=Rt();return t={current:t},e.memoizedState=t},useState:Rf,useDebugValue:vd,useDeferredValue:function(t){return Rt().memoizedState=t},useTransition:function(){var t=Rf(!1),e=t[0];return t=lS.bind(null,t[1]),Rt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ee,i=Rt();if(X){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),we===null)throw Error(C(349));sr&30||Yg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Nf(Xg.bind(null,r,s,t),[t]),r.flags|=2048,_s(9,Jg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Rt(),e=we.identifierPrefix;if(X){var n=jt,r=Ut;n=(r&~(1<<32-yt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ms++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=aS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},hS={readContext:at,useCallback:o_,useContext:at,useEffect:_d,useImperativeHandle:s_,useInsertionEffect:n_,useLayoutEffect:r_,useMemo:a_,useReducer:ql,useRef:t_,useState:function(){return ql(gs)},useDebugValue:vd,useDeferredValue:function(t){var e=lt();return l_(e,de.memoizedState,t)},useTransition:function(){var t=ql(gs)[0],e=lt().memoizedState;return[t,e]},useMutableSource:Kg,useSyncExternalStore:Qg,useId:c_,unstable_isNewReconciler:!1},fS={readContext:at,useCallback:o_,useContext:at,useEffect:_d,useImperativeHandle:s_,useInsertionEffect:n_,useLayoutEffect:r_,useMemo:a_,useReducer:Kl,useRef:t_,useState:function(){return Kl(gs)},useDebugValue:vd,useDeferredValue:function(t){var e=lt();return de===null?e.memoizedState=t:l_(e,de.memoizedState,t)},useTransition:function(){var t=Kl(gs)[0],e=lt().memoizedState;return[t,e]},useMutableSource:Kg,useSyncExternalStore:Qg,useId:c_,unstable_isNewReconciler:!1};function pt(t,e){if(t&&t.defaultProps){e=te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Qc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Va={isMounted:function(t){return(t=t._reactInternals)?gr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=be(),i=Tn(t),s=Gt(r,i);s.payload=e,n!=null&&(s.callback=n),e=Cn(t,s,i),e!==null&&(wt(e,t,i,r),ko(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=be(),i=Tn(t),s=Gt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Cn(t,s,i),e!==null&&(wt(e,t,i,r),ko(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=be(),r=Tn(t),i=Gt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Cn(t,i,r),e!==null&&(wt(e,t,r,n),ko(e,t,r))}};function xf(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!cs(n,r)||!cs(i,s):!0}function f_(t,e,n){var r=!1,i=On,s=e.contextType;return typeof s=="object"&&s!==null?s=at(s):(i=We(e)?rr:xe.current,r=e.contextTypes,s=(r=r!=null)?Yr(t,i):On),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Va,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Pf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Va.enqueueReplaceState(e,e.state,null)}function Yc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ud(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=at(s):(s=We(e)?rr:xe.current,i.context=Yr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Qc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Va.enqueueReplaceState(i,i.state,null),ea(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ei(t,e){try{var n="",r=e;do n+=Bw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ql(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Jc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var pS=typeof WeakMap=="function"?WeakMap:Map;function p_(t,e,n){n=Gt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){sa||(sa=!0,au=r),Jc(t,e)},n}function m_(t,e,n){n=Gt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Jc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Jc(t,e),typeof r!="function"&&(In===null?In=new Set([this]):In.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Af(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new pS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=NS.bind(null,t,e,n),e.then(t,t))}function Of(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function bf(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Gt(-1,1),e.tag=2,Cn(n,e,1))),n.lanes|=1),t)}var mS=tn.ReactCurrentOwner,je=!1;function Ae(t,e,n,r){e.child=t===null?Vg(e,null,n,r):Xr(e,t.child,n,r)}function Lf(t,e,n,r,i){n=n.render;var s=e.ref;return Wr(e,i),r=md(t,e,n,r,s,i),n=gd(),t!==null&&!je?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Jt(t,e,i)):(X&&n&&rd(e),e.flags|=1,Ae(t,e,r,i),e.child)}function Df(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!kd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,g_(t,e,s,r,i)):(t=Oo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:cs,n(o,r)&&t.ref===e.ref)return Jt(t,e,i)}return e.flags|=1,t=kn(s,r),t.ref=e.ref,t.return=e,e.child=t}function g_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(cs(s,r)&&t.ref===e.ref)if(je=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(je=!0);else return e.lanes=t.lanes,Jt(t,e,i)}return Xc(t,e,n,r,i)}function __(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(Mr,Ge),Ge|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Q(Mr,Ge),Ge|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Q(Mr,Ge),Ge|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Q(Mr,Ge),Ge|=r;return Ae(t,e,i,n),e.child}function v_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Xc(t,e,n,r,i){var s=We(n)?rr:xe.current;return s=Yr(e,s),Wr(e,i),n=md(t,e,n,r,s,i),r=gd(),t!==null&&!je?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Jt(t,e,i)):(X&&r&&rd(e),e.flags|=1,Ae(t,e,n,i),e.child)}function Mf(t,e,n,r,i){if(We(n)){var s=!0;Qo(e)}else s=!1;if(Wr(e,i),e.stateNode===null)xo(t,e),f_(e,n,r),Yc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=at(c):(c=We(n)?rr:xe.current,c=Yr(e,c));var d=n.getDerivedStateFromProps,u=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";u||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Pf(e,o,r,c),ln=!1;var h=e.memoizedState;o.state=h,ea(e,r,o,i),l=e.memoizedState,a!==r||h!==l||Be.current||ln?(typeof d=="function"&&(Qc(e,n,d,r),l=e.memoizedState),(a=ln||xf(e,n,a,r,h,l,c))?(u||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Gg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:pt(e.type,a),o.props=c,u=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=at(l):(l=We(n)?rr:xe.current,l=Yr(e,l));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==u||h!==l)&&Pf(e,o,r,l),ln=!1,h=e.memoizedState,o.state=h,ea(e,r,o,i);var m=e.memoizedState;a!==u||h!==m||Be.current||ln?(typeof _=="function"&&(Qc(e,n,_,r),m=e.memoizedState),(c=ln||xf(e,n,c,r,h,m,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=m),o.props=r,o.state=m,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Zc(t,e,n,r,s,i)}function Zc(t,e,n,r,i,s){v_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ef(e,n,!1),Jt(t,e,s);r=e.stateNode,mS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Xr(e,t.child,null,s),e.child=Xr(e,null,a,s)):Ae(t,e,a,s),e.memoizedState=r.state,i&&Ef(e,n,!0),e.child}function y_(t){var e=t.stateNode;e.pendingContext?wf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&wf(t,e.context,!1),dd(t,e.containerInfo)}function Ff(t,e,n,r,i){return Jr(),sd(i),e.flags|=256,Ae(t,e,n,r),e.child}var eu={dehydrated:null,treeContext:null,retryLane:0};function tu(t){return{baseLanes:t,cachePool:null,transitions:null}}function w_(t,e,n){var r=e.pendingProps,i=Z.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Q(Z,i&1),t===null)return qc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=qa(o,r,0,null),t=Zn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=tu(n),e.memoizedState=eu,t):yd(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return gS(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=kn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=kn(a,s):(s=Zn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?tu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=eu,r}return s=t.child,t=s.sibling,r=kn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function yd(t,e){return e=qa({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ho(t,e,n,r){return r!==null&&sd(r),Xr(e,t.child,null,n),t=yd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function gS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ql(Error(C(422))),ho(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=qa({mode:"visible",children:r.children},i,0,null),s=Zn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Xr(e,t.child,null,o),e.child.memoizedState=tu(o),e.memoizedState=eu,s);if(!(e.mode&1))return ho(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(C(419)),r=Ql(s,r,void 0),ho(t,e,o,r)}if(a=(o&t.childLanes)!==0,je||a){if(r=we,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Yt(t,i),wt(r,t,i,-1))}return Td(),r=Ql(Error(C(421))),ho(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=xS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Qe=Sn(i.nextSibling),Je=e,X=!0,gt=null,t!==null&&(nt[rt++]=Ut,nt[rt++]=jt,nt[rt++]=ir,Ut=t.id,jt=t.overflow,ir=e),e=yd(e,r.children),e.flags|=4096,e)}function Uf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Kc(t.return,e,n)}function Yl(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function E_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ae(t,e,r.children,n),r=Z.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Uf(t,n,e);else if(t.tag===19)Uf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Q(Z,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ta(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Yl(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ta(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Yl(e,!0,n,null,s);break;case"together":Yl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function xo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Jt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),or|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=kn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=kn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function _S(t,e,n){switch(e.tag){case 3:y_(e),Jr();break;case 5:qg(e);break;case 1:We(e.type)&&Qo(e);break;case 4:dd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Q(Xo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Q(Z,Z.current&1),e.flags|=128,null):n&e.child.childLanes?w_(t,e,n):(Q(Z,Z.current&1),t=Jt(t,e,n),t!==null?t.sibling:null);Q(Z,Z.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return E_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(Z,Z.current),r)break;return null;case 22:case 23:return e.lanes=0,__(t,e,n)}return Jt(t,e,n)}var S_,nu,C_,I_;S_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nu=function(){};C_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Kn(Ot.current);var s=null;switch(n){case"input":i=Ic(t,i),r=Ic(t,r),s=[];break;case"select":i=te({},i,{value:void 0}),r=te({},r,{value:void 0}),s=[];break;case"textarea":i=Rc(t,i),r=Rc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=qo)}xc(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ns.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ns.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Y("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};I_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ni(t,e){if(!X)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Re(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function vS(t,e,n){var r=e.pendingProps;switch(id(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(e),null;case 1:return We(e.type)&&Ko(),Re(e),null;case 3:return r=e.stateNode,Zr(),J(Be),J(xe),fd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(co(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,gt!==null&&(uu(gt),gt=null))),nu(t,e),Re(e),null;case 5:hd(e);var i=Kn(ps.current);if(n=e.type,t!==null&&e.stateNode!=null)C_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return Re(e),null}if(t=Kn(Ot.current),co(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Nt]=e,r[hs]=s,t=(e.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(i=0;i<Ui.length;i++)Y(Ui[i],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":Gh(r,s),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Y("invalid",r);break;case"textarea":Kh(r,s),Y("invalid",r)}xc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&lo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&lo(r.textContent,a,t),i=["children",""+a]):ns.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Y("scroll",r)}switch(n){case"input":eo(r),qh(r,s,!0);break;case"textarea":eo(r),Qh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=qo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Xm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Nt]=e,t[hs]=r,S_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Pc(n,r),n){case"dialog":Y("cancel",t),Y("close",t),i=r;break;case"iframe":case"object":case"embed":Y("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ui.length;i++)Y(Ui[i],t);i=r;break;case"source":Y("error",t),i=r;break;case"img":case"image":case"link":Y("error",t),Y("load",t),i=r;break;case"details":Y("toggle",t),i=r;break;case"input":Gh(t,r),i=Ic(t,r),Y("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=te({},r,{value:void 0}),Y("invalid",t);break;case"textarea":Kh(t,r),i=Rc(t,r),Y("invalid",t);break;default:i=r}xc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?tg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Zm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&rs(t,l):typeof l=="number"&&rs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ns.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Y("scroll",t):l!=null&&$u(t,s,l,o))}switch(n){case"input":eo(t),qh(t,r,!1);break;case"textarea":eo(t),Qh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+An(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ur(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ur(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=qo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Re(e),null;case 6:if(t&&e.stateNode!=null)I_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=Kn(ps.current),Kn(Ot.current),co(e)){if(r=e.stateNode,n=e.memoizedProps,r[Nt]=e,(s=r.nodeValue!==n)&&(t=Je,t!==null))switch(t.tag){case 3:lo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&lo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Nt]=e,e.stateNode=r}return Re(e),null;case 13:if(J(Z),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(X&&Qe!==null&&e.mode&1&&!(e.flags&128))Wg(),Jr(),e.flags|=98560,s=!1;else if(s=co(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(C(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[Nt]=e}else Jr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Re(e),s=!1}else gt!==null&&(uu(gt),gt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Z.current&1?pe===0&&(pe=3):Td())),e.updateQueue!==null&&(e.flags|=4),Re(e),null);case 4:return Zr(),nu(t,e),t===null&&us(e.stateNode.containerInfo),Re(e),null;case 10:return ld(e.type._context),Re(e),null;case 17:return We(e.type)&&Ko(),Re(e),null;case 19:if(J(Z),s=e.memoizedState,s===null)return Re(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ni(s,!1);else{if(pe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ta(t),o!==null){for(e.flags|=128,Ni(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Q(Z,Z.current&1|2),e.child}t=t.sibling}s.tail!==null&&le()>ti&&(e.flags|=128,r=!0,Ni(s,!1),e.lanes=4194304)}else{if(!r)if(t=ta(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ni(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!X)return Re(e),null}else 2*le()-s.renderingStartTime>ti&&n!==1073741824&&(e.flags|=128,r=!0,Ni(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=le(),e.sibling=null,n=Z.current,Q(Z,r?n&1|2:n&1),e):(Re(e),null);case 22:case 23:return Id(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ge&1073741824&&(Re(e),e.subtreeFlags&6&&(e.flags|=8192)):Re(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function yS(t,e){switch(id(e),e.tag){case 1:return We(e.type)&&Ko(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Zr(),J(Be),J(xe),fd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hd(e),null;case 13:if(J(Z),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));Jr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return J(Z),null;case 4:return Zr(),null;case 10:return ld(e.type._context),null;case 22:case 23:return Id(),null;case 24:return null;default:return null}}var fo=!1,Ne=!1,wS=typeof WeakSet=="function"?WeakSet:Set,x=null;function Dr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(t,e,r)}else n.current=null}function ru(t,e,n){try{n()}catch(r){ne(t,e,r)}}var jf=!1;function ES(t,e){if(zc=Vo,t=xg(),nd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,u=t,h=null;t:for(;;){for(var _;u!==n||i!==0&&u.nodeType!==3||(a=o+i),u!==s||r!==0&&u.nodeType!==3||(l=o+r),u.nodeType===3&&(o+=u.nodeValue.length),(_=u.firstChild)!==null;)h=u,u=_;for(;;){if(u===t)break t;if(h===n&&++c===i&&(a=o),h===s&&++d===r&&(l=o),(_=u.nextSibling)!==null)break;u=h,h=u.parentNode}u=_}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bc={focusedElem:t,selectionRange:n},Vo=!1,x=e;x!==null;)if(e=x,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,x=t;else for(;x!==null;){e=x;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,S=m.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?y:pt(e.type,y),S);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(w){ne(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,x=t;break}x=e.return}return m=jf,jf=!1,m}function Hi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ru(e,n,s)}i=i.next}while(i!==r)}}function Ha(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function iu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function T_(t){var e=t.alternate;e!==null&&(t.alternate=null,T_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Nt],delete e[hs],delete e[Vc],delete e[rS],delete e[iS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function k_(t){return t.tag===5||t.tag===3||t.tag===4}function zf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||k_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function su(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=qo));else if(r!==4&&(t=t.child,t!==null))for(su(t,e,n),t=t.sibling;t!==null;)su(t,e,n),t=t.sibling}function ou(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ou(t,e,n),t=t.sibling;t!==null;)ou(t,e,n),t=t.sibling}var Ee=null,mt=!1;function sn(t,e,n){for(n=n.child;n!==null;)R_(t,e,n),n=n.sibling}function R_(t,e,n){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(Fa,n)}catch{}switch(n.tag){case 5:Ne||Dr(n,e);case 6:var r=Ee,i=mt;Ee=null,sn(t,e,n),Ee=r,mt=i,Ee!==null&&(mt?(t=Ee,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ee.removeChild(n.stateNode));break;case 18:Ee!==null&&(mt?(t=Ee,n=n.stateNode,t.nodeType===8?$l(t.parentNode,n):t.nodeType===1&&$l(t,n),as(t)):$l(Ee,n.stateNode));break;case 4:r=Ee,i=mt,Ee=n.stateNode.containerInfo,mt=!0,sn(t,e,n),Ee=r,mt=i;break;case 0:case 11:case 14:case 15:if(!Ne&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ru(n,e,o),i=i.next}while(i!==r)}sn(t,e,n);break;case 1:if(!Ne&&(Dr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ne(n,e,a)}sn(t,e,n);break;case 21:sn(t,e,n);break;case 22:n.mode&1?(Ne=(r=Ne)||n.memoizedState!==null,sn(t,e,n),Ne=r):sn(t,e,n);break;default:sn(t,e,n)}}function Bf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new wS),e.forEach(function(r){var i=PS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ft(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ee=a.stateNode,mt=!1;break e;case 3:Ee=a.stateNode.containerInfo,mt=!0;break e;case 4:Ee=a.stateNode.containerInfo,mt=!0;break e}a=a.return}if(Ee===null)throw Error(C(160));R_(s,o,i),Ee=null,mt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){ne(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)N_(e,t),e=e.sibling}function N_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ft(e,t),kt(t),r&4){try{Hi(3,t,t.return),Ha(3,t)}catch(y){ne(t,t.return,y)}try{Hi(5,t,t.return)}catch(y){ne(t,t.return,y)}}break;case 1:ft(e,t),kt(t),r&512&&n!==null&&Dr(n,n.return);break;case 5:if(ft(e,t),kt(t),r&512&&n!==null&&Dr(n,n.return),t.flags&32){var i=t.stateNode;try{rs(i,"")}catch(y){ne(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ym(i,s),Pc(a,o);var c=Pc(a,s);for(o=0;o<l.length;o+=2){var d=l[o],u=l[o+1];d==="style"?tg(i,u):d==="dangerouslySetInnerHTML"?Zm(i,u):d==="children"?rs(i,u):$u(i,d,u,c)}switch(a){case"input":Tc(i,s);break;case"textarea":Jm(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Ur(i,!!s.multiple,_,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ur(i,!!s.multiple,s.defaultValue,!0):Ur(i,!!s.multiple,s.multiple?[]:"",!1))}i[hs]=s}catch(y){ne(t,t.return,y)}}break;case 6:if(ft(e,t),kt(t),r&4){if(t.stateNode===null)throw Error(C(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){ne(t,t.return,y)}}break;case 3:if(ft(e,t),kt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{as(e.containerInfo)}catch(y){ne(t,t.return,y)}break;case 4:ft(e,t),kt(t);break;case 13:ft(e,t),kt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Sd=le())),r&4&&Bf(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ne=(c=Ne)||d,ft(e,t),Ne=c):ft(e,t),kt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(x=t,d=t.child;d!==null;){for(u=x=d;x!==null;){switch(h=x,_=h.child,h.tag){case 0:case 11:case 14:case 15:Hi(4,h,h.return);break;case 1:Dr(h,h.return);var m=h.stateNode;if(typeof m.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(y){ne(r,n,y)}}break;case 5:Dr(h,h.return);break;case 22:if(h.memoizedState!==null){$f(u);continue}}_!==null?(_.return=h,x=_):$f(u)}d=d.sibling}e:for(d=null,u=t;;){if(u.tag===5){if(d===null){d=u;try{i=u.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=u.stateNode,l=u.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=eg("display",o))}catch(y){ne(t,t.return,y)}}}else if(u.tag===6){if(d===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(y){ne(t,t.return,y)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===t)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;d===u&&(d=null),u=u.return}d===u&&(d=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:ft(e,t),kt(t),r&4&&Bf(t);break;case 21:break;default:ft(e,t),kt(t)}}function kt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(k_(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(rs(i,""),r.flags&=-33);var s=zf(t);ou(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=zf(t);su(t,a,o);break;default:throw Error(C(161))}}catch(l){ne(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function SS(t,e,n){x=t,x_(t)}function x_(t,e,n){for(var r=(t.mode&1)!==0;x!==null;){var i=x,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||fo;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ne;a=fo;var c=Ne;if(fo=o,(Ne=l)&&!c)for(x=i;x!==null;)o=x,l=o.child,o.tag===22&&o.memoizedState!==null?Vf(i):l!==null?(l.return=o,x=l):Vf(i);for(;s!==null;)x=s,x_(s),s=s.sibling;x=i,fo=a,Ne=c}Wf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,x=s):Wf(t)}}function Wf(t){for(;x!==null;){var e=x;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ne||Ha(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ne)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:pt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&kf(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}kf(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var u=d.dehydrated;u!==null&&as(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Ne||e.flags&512&&iu(e)}catch(h){ne(e,e.return,h)}}if(e===t){x=null;break}if(n=e.sibling,n!==null){n.return=e.return,x=n;break}x=e.return}}function $f(t){for(;x!==null;){var e=x;if(e===t){x=null;break}var n=e.sibling;if(n!==null){n.return=e.return,x=n;break}x=e.return}}function Vf(t){for(;x!==null;){var e=x;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ha(4,e)}catch(l){ne(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ne(e,i,l)}}var s=e.return;try{iu(e)}catch(l){ne(e,s,l)}break;case 5:var o=e.return;try{iu(e)}catch(l){ne(e,o,l)}}}catch(l){ne(e,e.return,l)}if(e===t){x=null;break}var a=e.sibling;if(a!==null){a.return=e.return,x=a;break}x=e.return}}var CS=Math.ceil,ia=tn.ReactCurrentDispatcher,wd=tn.ReactCurrentOwner,ot=tn.ReactCurrentBatchConfig,z=0,we=null,ue=null,Ce=0,Ge=0,Mr=Fn(0),pe=0,vs=null,or=0,Ga=0,Ed=0,Gi=null,Ue=null,Sd=0,ti=1/0,Mt=null,sa=!1,au=null,In=null,po=!1,gn=null,oa=0,qi=0,lu=null,Po=-1,Ao=0;function be(){return z&6?le():Po!==-1?Po:Po=le()}function Tn(t){return t.mode&1?z&2&&Ce!==0?Ce&-Ce:oS.transition!==null?(Ao===0&&(Ao=fg()),Ao):(t=$,t!==0||(t=window.event,t=t===void 0?16:wg(t.type)),t):1}function wt(t,e,n,r){if(50<qi)throw qi=0,lu=null,Error(C(185));Ms(t,n,r),(!(z&2)||t!==we)&&(t===we&&(!(z&2)&&(Ga|=n),pe===4&&un(t,Ce)),$e(t,r),n===1&&z===0&&!(e.mode&1)&&(ti=le()+500,Wa&&Un()))}function $e(t,e){var n=t.callbackNode;oE(t,e);var r=$o(t,t===we?Ce:0);if(r===0)n!==null&&Xh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Xh(n),e===1)t.tag===0?sS(Hf.bind(null,t)):jg(Hf.bind(null,t)),tS(function(){!(z&6)&&Un()}),n=null;else{switch(pg(r)){case 1:n=Ku;break;case 4:n=dg;break;case 16:n=Wo;break;case 536870912:n=hg;break;default:n=Wo}n=F_(n,P_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function P_(t,e){if(Po=-1,Ao=0,z&6)throw Error(C(327));var n=t.callbackNode;if($r()&&t.callbackNode!==n)return null;var r=$o(t,t===we?Ce:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=aa(t,r);else{e=r;var i=z;z|=2;var s=O_();(we!==t||Ce!==e)&&(Mt=null,ti=le()+500,Xn(t,e));do try{kS();break}catch(a){A_(t,a)}while(!0);ad(),ia.current=s,z=i,ue!==null?e=0:(we=null,Ce=0,e=pe)}if(e!==0){if(e===2&&(i=Dc(t),i!==0&&(r=i,e=cu(t,i))),e===1)throw n=vs,Xn(t,0),un(t,r),$e(t,le()),n;if(e===6)un(t,r);else{if(i=t.current.alternate,!(r&30)&&!IS(i)&&(e=aa(t,r),e===2&&(s=Dc(t),s!==0&&(r=s,e=cu(t,s))),e===1))throw n=vs,Xn(t,0),un(t,r),$e(t,le()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:$n(t,Ue,Mt);break;case 3:if(un(t,r),(r&130023424)===r&&(e=Sd+500-le(),10<e)){if($o(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){be(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=$c($n.bind(null,t,Ue,Mt),e);break}$n(t,Ue,Mt);break;case 4:if(un(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-yt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*CS(r/1960))-r,10<r){t.timeoutHandle=$c($n.bind(null,t,Ue,Mt),r);break}$n(t,Ue,Mt);break;case 5:$n(t,Ue,Mt);break;default:throw Error(C(329))}}}return $e(t,le()),t.callbackNode===n?P_.bind(null,t):null}function cu(t,e){var n=Gi;return t.current.memoizedState.isDehydrated&&(Xn(t,e).flags|=256),t=aa(t,e),t!==2&&(e=Ue,Ue=n,e!==null&&uu(e)),t}function uu(t){Ue===null?Ue=t:Ue.push.apply(Ue,t)}function IS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ct(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function un(t,e){for(e&=~Ed,e&=~Ga,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-yt(e),r=1<<n;t[n]=-1,e&=~r}}function Hf(t){if(z&6)throw Error(C(327));$r();var e=$o(t,0);if(!(e&1))return $e(t,le()),null;var n=aa(t,e);if(t.tag!==0&&n===2){var r=Dc(t);r!==0&&(e=r,n=cu(t,r))}if(n===1)throw n=vs,Xn(t,0),un(t,e),$e(t,le()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,$n(t,Ue,Mt),$e(t,le()),null}function Cd(t,e){var n=z;z|=1;try{return t(e)}finally{z=n,z===0&&(ti=le()+500,Wa&&Un())}}function ar(t){gn!==null&&gn.tag===0&&!(z&6)&&$r();var e=z;z|=1;var n=ot.transition,r=$;try{if(ot.transition=null,$=1,t)return t()}finally{$=r,ot.transition=n,z=e,!(z&6)&&Un()}}function Id(){Ge=Mr.current,J(Mr)}function Xn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,eS(n)),ue!==null)for(n=ue.return;n!==null;){var r=n;switch(id(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ko();break;case 3:Zr(),J(Be),J(xe),fd();break;case 5:hd(r);break;case 4:Zr();break;case 13:J(Z);break;case 19:J(Z);break;case 10:ld(r.type._context);break;case 22:case 23:Id()}n=n.return}if(we=t,ue=t=kn(t.current,null),Ce=Ge=e,pe=0,vs=null,Ed=Ga=or=0,Ue=Gi=null,qn!==null){for(e=0;e<qn.length;e++)if(n=qn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}qn=null}return t}function A_(t,e){do{var n=ue;try{if(ad(),Ro.current=ra,na){for(var r=ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}na=!1}if(sr=0,ve=de=ee=null,Vi=!1,ms=0,wd.current=null,n===null||n.return===null){pe=1,vs=e,ue=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ce,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,u=d.tag;if(!(d.mode&1)&&(u===0||u===11||u===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=Of(o);if(_!==null){_.flags&=-257,bf(_,o,a,s,e),_.mode&1&&Af(s,c,e),e=_,l=c;var m=e.updateQueue;if(m===null){var y=new Set;y.add(l),e.updateQueue=y}else m.add(l);break e}else{if(!(e&1)){Af(s,c,e),Td();break e}l=Error(C(426))}}else if(X&&a.mode&1){var S=Of(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),bf(S,o,a,s,e),sd(ei(l,a));break e}}s=l=ei(l,a),pe!==4&&(pe=2),Gi===null?Gi=[s]:Gi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=p_(s,l,e);Tf(s,g);break e;case 1:a=l;var p=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(In===null||!In.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=m_(s,a,e);Tf(s,w);break e}}s=s.return}while(s!==null)}L_(n)}catch(T){e=T,ue===n&&n!==null&&(ue=n=n.return);continue}break}while(!0)}function O_(){var t=ia.current;return ia.current=ra,t===null?ra:t}function Td(){(pe===0||pe===3||pe===2)&&(pe=4),we===null||!(or&268435455)&&!(Ga&268435455)||un(we,Ce)}function aa(t,e){var n=z;z|=2;var r=O_();(we!==t||Ce!==e)&&(Mt=null,Xn(t,e));do try{TS();break}catch(i){A_(t,i)}while(!0);if(ad(),z=n,ia.current=r,ue!==null)throw Error(C(261));return we=null,Ce=0,pe}function TS(){for(;ue!==null;)b_(ue)}function kS(){for(;ue!==null&&!Jw();)b_(ue)}function b_(t){var e=M_(t.alternate,t,Ge);t.memoizedProps=t.pendingProps,e===null?L_(t):ue=e,wd.current=null}function L_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=yS(n,e),n!==null){n.flags&=32767,ue=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{pe=6,ue=null;return}}else if(n=vS(n,e,Ge),n!==null){ue=n;return}if(e=e.sibling,e!==null){ue=e;return}ue=e=t}while(e!==null);pe===0&&(pe=5)}function $n(t,e,n){var r=$,i=ot.transition;try{ot.transition=null,$=1,RS(t,e,n,r)}finally{ot.transition=i,$=r}return null}function RS(t,e,n,r){do $r();while(gn!==null);if(z&6)throw Error(C(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(aE(t,s),t===we&&(ue=we=null,Ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||po||(po=!0,F_(Wo,function(){return $r(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ot.transition,ot.transition=null;var o=$;$=1;var a=z;z|=4,wd.current=null,ES(t,n),N_(n,t),qE(Bc),Vo=!!zc,Bc=zc=null,t.current=n,SS(n),Xw(),z=a,$=o,ot.transition=s}else t.current=n;if(po&&(po=!1,gn=t,oa=i),s=t.pendingLanes,s===0&&(In=null),tE(n.stateNode),$e(t,le()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(sa)throw sa=!1,t=au,au=null,t;return oa&1&&t.tag!==0&&$r(),s=t.pendingLanes,s&1?t===lu?qi++:(qi=0,lu=t):qi=0,Un(),null}function $r(){if(gn!==null){var t=pg(oa),e=ot.transition,n=$;try{if(ot.transition=null,$=16>t?16:t,gn===null)var r=!1;else{if(t=gn,gn=null,oa=0,z&6)throw Error(C(331));var i=z;for(z|=4,x=t.current;x!==null;){var s=x,o=s.child;if(x.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(x=c;x!==null;){var d=x;switch(d.tag){case 0:case 11:case 15:Hi(8,d,s)}var u=d.child;if(u!==null)u.return=d,x=u;else for(;x!==null;){d=x;var h=d.sibling,_=d.return;if(T_(d),d===c){x=null;break}if(h!==null){h.return=_,x=h;break}x=_}}}var m=s.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}x=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,x=o;else e:for(;x!==null;){if(s=x,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Hi(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,x=g;break e}x=s.return}}var p=t.current;for(x=p;x!==null;){o=x;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,x=v;else e:for(o=p;x!==null;){if(a=x,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ha(9,a)}}catch(T){ne(a,a.return,T)}if(a===o){x=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,x=w;break e}x=a.return}}if(z=i,Un(),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(Fa,t)}catch{}r=!0}return r}finally{$=n,ot.transition=e}}return!1}function Gf(t,e,n){e=ei(n,e),e=p_(t,e,1),t=Cn(t,e,1),e=be(),t!==null&&(Ms(t,1,e),$e(t,e))}function ne(t,e,n){if(t.tag===3)Gf(t,t,n);else for(;e!==null;){if(e.tag===3){Gf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(In===null||!In.has(r))){t=ei(n,t),t=m_(e,t,1),e=Cn(e,t,1),t=be(),e!==null&&(Ms(e,1,t),$e(e,t));break}}e=e.return}}function NS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=be(),t.pingedLanes|=t.suspendedLanes&n,we===t&&(Ce&n)===n&&(pe===4||pe===3&&(Ce&130023424)===Ce&&500>le()-Sd?Xn(t,0):Ed|=n),$e(t,e)}function D_(t,e){e===0&&(t.mode&1?(e=ro,ro<<=1,!(ro&130023424)&&(ro=4194304)):e=1);var n=be();t=Yt(t,e),t!==null&&(Ms(t,e,n),$e(t,n))}function xS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),D_(t,n)}function PS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),D_(t,n)}var M_;M_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Be.current)je=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return je=!1,_S(t,e,n);je=!!(t.flags&131072)}else je=!1,X&&e.flags&1048576&&zg(e,Jo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;xo(t,e),t=e.pendingProps;var i=Yr(e,xe.current);Wr(e,n),i=md(null,e,r,t,i,n);var s=gd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,We(r)?(s=!0,Qo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ud(e),i.updater=Va,e.stateNode=i,i._reactInternals=e,Yc(e,r,t,n),e=Zc(null,e,r,!0,s,n)):(e.tag=0,X&&s&&rd(e),Ae(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(xo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=OS(r),t=pt(r,t),i){case 0:e=Xc(null,e,r,t,n);break e;case 1:e=Mf(null,e,r,t,n);break e;case 11:e=Lf(null,e,r,t,n);break e;case 14:e=Df(null,e,r,pt(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),Xc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),Mf(t,e,r,i,n);case 3:e:{if(y_(e),t===null)throw Error(C(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Gg(t,e),ea(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ei(Error(C(423)),e),e=Ff(t,e,r,n,i);break e}else if(r!==i){i=ei(Error(C(424)),e),e=Ff(t,e,r,n,i);break e}else for(Qe=Sn(e.stateNode.containerInfo.firstChild),Je=e,X=!0,gt=null,n=Vg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jr(),r===i){e=Jt(t,e,n);break e}Ae(t,e,r,n)}e=e.child}return e;case 5:return qg(e),t===null&&qc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Wc(r,i)?o=null:s!==null&&Wc(r,s)&&(e.flags|=32),v_(t,e),Ae(t,e,o,n),e.child;case 6:return t===null&&qc(e),null;case 13:return w_(t,e,n);case 4:return dd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Xr(e,null,r,n):Ae(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),Lf(t,e,r,i,n);case 7:return Ae(t,e,e.pendingProps,n),e.child;case 8:return Ae(t,e,e.pendingProps.children,n),e.child;case 12:return Ae(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Q(Xo,r._currentValue),r._currentValue=o,s!==null)if(Ct(s.value,o)){if(s.children===i.children&&!Be.current){e=Jt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Gt(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Kc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Kc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ae(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Wr(e,n),i=at(i),r=r(i),e.flags|=1,Ae(t,e,r,n),e.child;case 14:return r=e.type,i=pt(r,e.pendingProps),i=pt(r.type,i),Df(t,e,r,i,n);case 15:return g_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),xo(t,e),e.tag=1,We(r)?(t=!0,Qo(e)):t=!1,Wr(e,n),f_(e,r,i),Yc(e,r,i,n),Zc(null,e,r,!0,t,n);case 19:return E_(t,e,n);case 22:return __(t,e,n)}throw Error(C(156,e.tag))};function F_(t,e){return ug(t,e)}function AS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(t,e,n,r){return new AS(t,e,n,r)}function kd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function OS(t){if(typeof t=="function")return kd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Hu)return 11;if(t===Gu)return 14}return 2}function kn(t,e){var n=t.alternate;return n===null?(n=it(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Oo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")kd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case kr:return Zn(n.children,i,s,e);case Vu:o=8,i|=8;break;case wc:return t=it(12,n,e,i|2),t.elementType=wc,t.lanes=s,t;case Ec:return t=it(13,n,e,i),t.elementType=Ec,t.lanes=s,t;case Sc:return t=it(19,n,e,i),t.elementType=Sc,t.lanes=s,t;case qm:return qa(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Hm:o=10;break e;case Gm:o=9;break e;case Hu:o=11;break e;case Gu:o=14;break e;case an:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=it(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Zn(t,e,n,r){return t=it(7,t,r,e),t.lanes=n,t}function qa(t,e,n,r){return t=it(22,t,r,e),t.elementType=qm,t.lanes=n,t.stateNode={isHidden:!1},t}function Jl(t,e,n){return t=it(6,t,null,e),t.lanes=n,t}function Xl(t,e,n){return e=it(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function bS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ol(0),this.expirationTimes=Ol(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ol(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Rd(t,e,n,r,i,s,o,a,l){return t=new bS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=it(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ud(s),t}function LS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Tr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function U_(t){if(!t)return On;t=t._reactInternals;e:{if(gr(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(We(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(We(n))return Ug(t,n,e)}return e}function j_(t,e,n,r,i,s,o,a,l){return t=Rd(n,r,!0,t,i,s,o,a,l),t.context=U_(null),n=t.current,r=be(),i=Tn(n),s=Gt(r,i),s.callback=e??null,Cn(n,s,i),t.current.lanes=i,Ms(t,i,r),$e(t,r),t}function Ka(t,e,n,r){var i=e.current,s=be(),o=Tn(i);return n=U_(n),e.context===null?e.context=n:e.pendingContext=n,e=Gt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Cn(i,e,o),t!==null&&(wt(t,i,o,s),ko(t,i,o)),o}function la(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Nd(t,e){qf(t,e),(t=t.alternate)&&qf(t,e)}function DS(){return null}var z_=typeof reportError=="function"?reportError:function(t){console.error(t)};function xd(t){this._internalRoot=t}Qa.prototype.render=xd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));Ka(t,e,null,null)};Qa.prototype.unmount=xd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ar(function(){Ka(null,t,null,null)}),e[Qt]=null}};function Qa(t){this._internalRoot=t}Qa.prototype.unstable_scheduleHydration=function(t){if(t){var e=_g();t={blockedOn:null,target:t,priority:e};for(var n=0;n<cn.length&&e!==0&&e<cn[n].priority;n++);cn.splice(n,0,t),n===0&&yg(t)}};function Pd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ya(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Kf(){}function MS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=la(o);s.call(c)}}var o=j_(e,r,t,0,null,!1,!1,"",Kf);return t._reactRootContainer=o,t[Qt]=o.current,us(t.nodeType===8?t.parentNode:t),ar(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=la(l);a.call(c)}}var l=Rd(t,0,!1,null,null,!1,!1,"",Kf);return t._reactRootContainer=l,t[Qt]=l.current,us(t.nodeType===8?t.parentNode:t),ar(function(){Ka(e,l,n,r)}),l}function Ja(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=la(o);a.call(l)}}Ka(e,o,t,i)}else o=MS(n,e,t,i,r);return la(o)}mg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Fi(e.pendingLanes);n!==0&&(Qu(e,n|1),$e(e,le()),!(z&6)&&(ti=le()+500,Un()))}break;case 13:ar(function(){var r=Yt(t,1);if(r!==null){var i=be();wt(r,t,1,i)}}),Nd(t,1)}};Yu=function(t){if(t.tag===13){var e=Yt(t,134217728);if(e!==null){var n=be();wt(e,t,134217728,n)}Nd(t,134217728)}};gg=function(t){if(t.tag===13){var e=Tn(t),n=Yt(t,e);if(n!==null){var r=be();wt(n,t,e,r)}Nd(t,e)}};_g=function(){return $};vg=function(t,e){var n=$;try{return $=t,e()}finally{$=n}};Oc=function(t,e,n){switch(e){case"input":if(Tc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ba(r);if(!i)throw Error(C(90));Qm(r),Tc(r,i)}}}break;case"textarea":Jm(t,n);break;case"select":e=n.value,e!=null&&Ur(t,!!n.multiple,e,!1)}};ig=Cd;sg=ar;var FS={usingClientEntryPoint:!1,Events:[Us,Pr,Ba,ng,rg,Cd]},xi={findFiberByHostInstance:Gn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},US={bundleType:xi.bundleType,version:xi.version,rendererPackageName:xi.rendererPackageName,rendererConfig:xi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=lg(t),t===null?null:t.stateNode},findFiberByHostInstance:xi.findFiberByHostInstance||DS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mo.isDisabled&&mo.supportsFiber)try{Fa=mo.inject(US),At=mo}catch{}}et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=FS;et.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pd(e))throw Error(C(200));return LS(t,e,null,n)};et.createRoot=function(t,e){if(!Pd(t))throw Error(C(299));var n=!1,r="",i=z_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Rd(t,1,!1,null,null,n,!1,r,i),t[Qt]=e.current,us(t.nodeType===8?t.parentNode:t),new xd(e)};et.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=lg(e),t=t===null?null:t.stateNode,t};et.flushSync=function(t){return ar(t)};et.hydrate=function(t,e,n){if(!Ya(e))throw Error(C(200));return Ja(null,t,e,!0,n)};et.hydrateRoot=function(t,e,n){if(!Pd(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=z_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=j_(e,null,t,1,n??null,i,!1,s,o),t[Qt]=e.current,us(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Qa(e)};et.render=function(t,e,n){if(!Ya(e))throw Error(C(200));return Ja(null,t,e,!1,n)};et.unmountComponentAtNode=function(t){if(!Ya(t))throw Error(C(40));return t._reactRootContainer?(ar(function(){Ja(null,null,t,!1,function(){t._reactRootContainer=null,t[Qt]=null})}),!0):!1};et.unstable_batchedUpdates=Cd;et.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ya(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return Ja(t,e,n,!1,r)};et.version="18.3.1-next-f1338f8080-20240426";function B_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(B_)}catch(t){console.error(t)}}B_(),Bm.exports=et;var jS=Bm.exports,W_,Qf=jS;W_=Qf.createRoot,Qf.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ys(){return ys=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ys.apply(this,arguments)}var _n;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(_n||(_n={}));const Yf="popstate";function zS(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=_r(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),du("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,c=l.indexOf("#");a=c===-1?l:l.slice(0,c)}return a+"#"+(typeof s=="string"?s:$_(s))}function r(i,s){Ad(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return WS(e,n,r,t)}function me(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ad(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function BS(){return Math.random().toString(36).substr(2,8)}function Jf(t,e){return{usr:t.state,key:t.key,idx:e}}function du(t,e,n,r){return n===void 0&&(n=null),ys({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?_r(e):e,{state:n,key:e&&e.key||r||BS()})}function $_(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function _r(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function WS(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=_n.Pop,l=null,c=d();c==null&&(c=0,o.replaceState(ys({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function u(){a=_n.Pop;let S=d(),g=S==null?null:S-c;c=S,l&&l({action:a,location:y.location,delta:g})}function h(S,g){a=_n.Push;let p=du(y.location,S,g);n&&n(p,S),c=d()+1;let v=Jf(p,c),w=y.createHref(p);try{o.pushState(v,"",w)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(w)}s&&l&&l({action:a,location:y.location,delta:1})}function _(S,g){a=_n.Replace;let p=du(y.location,S,g);n&&n(p,S),c=d();let v=Jf(p,c),w=y.createHref(p);o.replaceState(v,"",w),s&&l&&l({action:a,location:y.location,delta:0})}function m(S){let g=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof S=="string"?S:$_(S);return p=p.replace(/ $/,"%20"),me(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let y={get action(){return a},get location(){return t(i,o)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Yf,u),l=S,()=>{i.removeEventListener(Yf,u),l=null}},createHref(S){return e(i,S)},createURL:m,encodeLocation(S){let g=m(S);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:_,go(S){return o.go(S)}};return y}var Xf;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Xf||(Xf={}));function $S(t,e,n){return n===void 0&&(n="/"),VS(t,e,n,!1)}function VS(t,e,n,r){let i=typeof e=="string"?_r(e):e,s=G_(i.pathname||"/",n);if(s==null)return null;let o=V_(t);HS(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=nC(s);a=eC(o[l],c,r)}return a}function V_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(me(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=er([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(me(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),V_(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:XS(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of H_(s.path))i(s,o,l)}),e}function H_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=H_(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function HS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:ZS(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const GS=/^:[\w-]+$/,qS=3,KS=2,QS=1,YS=10,JS=-2,Zf=t=>t==="*";function XS(t,e){let n=t.split("/"),r=n.length;return n.some(Zf)&&(r+=JS),e&&(r+=KS),n.filter(i=>!Zf(i)).reduce((i,s)=>i+(GS.test(s)?qS:s===""?QS:YS),r)}function ZS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function eC(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",u=ep({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),h=l.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=ep({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:er([s,u.pathname]),pathnameBase:lC(er([s,u.pathnameBase])),route:h}),u.pathnameBase!=="/"&&(s=er([s,u.pathnameBase]))}return o}function ep(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=tC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,u)=>{let{paramName:h,isOptional:_}=d;if(h==="*"){let y=a[u]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const m=a[u];return _&&!m?c[h]=void 0:c[h]=(m||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function tC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ad(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function nC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ad(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function G_(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function rC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?_r(t):t;return{pathname:n?n.startsWith("/")?n:iC(n,e):e,search:cC(r),hash:uC(i)}}function iC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Zl(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function sC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function oC(t,e){let n=sC(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function aC(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=_r(t):(i=ys({},t),me(!i.pathname||!i.pathname.includes("?"),Zl("?","pathname","search",i)),me(!i.pathname||!i.pathname.includes("#"),Zl("#","pathname","hash",i)),me(!i.search||!i.search.includes("#"),Zl("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let u=e.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),u-=1;i.pathname=h.join("/")}a=u>=0?e[u]:"/"}let l=rC(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const er=t=>t.join("/").replace(/\/\/+/g,"/"),lC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),cC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,uC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function dC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const q_=["post","put","patch","delete"];new Set(q_);const hC=["get",...q_];new Set(hC);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ws(){return ws=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ws.apply(this,arguments)}const Od=E.createContext(null),fC=E.createContext(null),Xa=E.createContext(null),Za=E.createContext(null),fi=E.createContext({outlet:null,matches:[],isDataRoute:!1}),K_=E.createContext(null);function el(){return E.useContext(Za)!=null}function Q_(){return el()||me(!1),E.useContext(Za).location}function Y_(t){E.useContext(Xa).static||E.useLayoutEffect(t)}function J_(){let{isDataRoute:t}=E.useContext(fi);return t?kC():pC()}function pC(){el()||me(!1);let t=E.useContext(Od),{basename:e,future:n,navigator:r}=E.useContext(Xa),{matches:i}=E.useContext(fi),{pathname:s}=Q_(),o=JSON.stringify(oC(i,n.v7_relativeSplatPath)),a=E.useRef(!1);return Y_(()=>{a.current=!0}),E.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let u=aC(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(u.pathname=u.pathname==="/"?e:er([e,u.pathname])),(d.replace?r.replace:r.push)(u,d.state,d)},[e,r,o,s,t])}function mC(t,e){return gC(t,e)}function gC(t,e,n,r){el()||me(!1);let{navigator:i}=E.useContext(Xa),{matches:s}=E.useContext(fi),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Q_(),d;if(e){var u;let S=typeof e=="string"?_r(e):e;l==="/"||(u=S.pathname)!=null&&u.startsWith(l)||me(!1),d=S}else d=c;let h=d.pathname||"/",_=h;if(l!=="/"){let S=l.replace(/^\//,"").split("/");_="/"+h.replace(/^\//,"").split("/").slice(S.length).join("/")}let m=$S(t,{pathname:_}),y=EC(m&&m.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:er([l,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:er([l,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),s,n,r);return e&&y?E.createElement(Za.Provider,{value:{location:ws({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:_n.Pop}},y):y}function _C(){let t=TC(),e=dC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),n?E.createElement("pre",{style:i},n):null,null)}const vC=E.createElement(_C,null);class yC extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?E.createElement(fi.Provider,{value:this.props.routeContext},E.createElement(K_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function wC(t){let{routeContext:e,match:n,children:r}=t,i=E.useContext(Od);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(fi.Provider,{value:e},r)}function EC(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(u=>u.route.id&&(a==null?void 0:a[u.route.id])!==void 0);d>=0||me(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let u=o[d];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(c=d),u.route.id){let{loaderData:h,errors:_}=n,m=u.route.loader&&h[u.route.id]===void 0&&(!_||_[u.route.id]===void 0);if(u.route.lazy||m){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,u,h)=>{let _,m=!1,y=null,S=null;n&&(_=a&&u.route.id?a[u.route.id]:void 0,y=u.route.errorElement||vC,l&&(c<0&&h===0?(m=!0,S=null):c===h&&(m=!0,S=u.route.hydrateFallbackElement||null)));let g=e.concat(o.slice(0,h+1)),p=()=>{let v;return _?v=y:m?v=S:u.route.Component?v=E.createElement(u.route.Component,null):u.route.element?v=u.route.element:v=d,E.createElement(wC,{match:u,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:v})};return n&&(u.route.ErrorBoundary||u.route.errorElement||h===0)?E.createElement(yC,{location:n.location,revalidation:n.revalidation,component:y,error:_,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var X_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(X_||{}),ca=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ca||{});function SC(t){let e=E.useContext(Od);return e||me(!1),e}function CC(t){let e=E.useContext(fC);return e||me(!1),e}function IC(t){let e=E.useContext(fi);return e||me(!1),e}function Z_(t){let e=IC(),n=e.matches[e.matches.length-1];return n.route.id||me(!1),n.route.id}function TC(){var t;let e=E.useContext(K_),n=CC(ca.UseRouteError),r=Z_(ca.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function kC(){let{router:t}=SC(X_.UseNavigateStable),e=Z_(ca.UseNavigateStable),n=E.useRef(!1);return Y_(()=>{n.current=!0}),E.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ws({fromRouteId:e},s)))},[t,e])}function bo(t){me(!1)}function RC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=_n.Pop,navigator:s,static:o=!1,future:a}=t;el()&&me(!1);let l=e.replace(/^\/*/,"/"),c=E.useMemo(()=>({basename:l,navigator:s,static:o,future:ws({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=_r(r));let{pathname:d="/",search:u="",hash:h="",state:_=null,key:m="default"}=r,y=E.useMemo(()=>{let S=G_(d,l);return S==null?null:{location:{pathname:S,search:u,hash:h,state:_,key:m},navigationType:i}},[l,d,u,h,_,m,i]);return y==null?null:E.createElement(Xa.Provider,{value:c},E.createElement(Za.Provider,{children:n,value:y}))}function NC(t){let{children:e,location:n}=t;return mC(hu(e),n)}new Promise(()=>{});function hu(t,e){e===void 0&&(e=[]);let n=[];return E.Children.forEach(t,(r,i)=>{if(!E.isValidElement(r))return;let s=[...e,i];if(r.type===E.Fragment){n.push.apply(n,hu(r.props.children,s));return}r.type!==bo&&me(!1),!r.props.index||!r.props.children||me(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=hu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const xC="6";try{window.__reactRouterVersion=xC}catch{}const PC="startTransition",tp=Nw[PC];function AC(t){let{basename:e,children:n,future:r,window:i}=t,s=E.useRef();s.current==null&&(s.current=zS({window:i,v5Compat:!0}));let o=s.current,[a,l]=E.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=E.useCallback(u=>{c&&tp?tp(()=>l(u)):l(u)},[l,c]);return E.useLayoutEffect(()=>o.listen(d),[o,d]),E.createElement(RC,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var np;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(np||(np={}));var rp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(rp||(rp={}));var ip={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(t,e){if(!t)throw pi(e)},pi=function(t){return new Error("Firebase Database ("+ev.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},OC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},bd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=s>>2,u=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(h=64)),r.push(n[d],n[u],n[h],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(tv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):OC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||u==null)throw new bC;const h=s<<2|a>>4;if(r.push(h),c!==64){const _=a<<4&240|c>>2;if(r.push(_),u!==64){const m=c<<6&192|u;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class bC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nv=function(t){const e=tv(t);return bd.encodeByteArray(e,!0)},ua=function(t){return nv(t).replace(/\./g,"")},da=function(t){try{return bd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LC(t){return rv(void 0,t)}function rv(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!DC(n)||(t[n]=rv(t[n],e[n]));return t}function DC(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC=()=>MC().__FIREBASE_DEFAULTS__,UC=()=>{if(typeof process>"u"||typeof ip>"u")return;const t=ip.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&da(t[1]);return e&&JSON.parse(e)},Ld=()=>{try{return FC()||UC()||jC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},iv=t=>{var e,n;return(n=(e=Ld())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},sv=t=>{const e=iv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ov=()=>{var t;return(t=Ld())===null||t===void 0?void 0:t.config},av=t=>{var e;return(e=Ld())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ua(JSON.stringify(n)),ua(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Dd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function cv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function uv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zC(){const t=De();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function dv(){return ev.NODE_ADMIN===!0}function hv(){try{return typeof indexedDB=="object"}catch{return!1}}function fv(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function BC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC="FirebaseError";class Tt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=WC,Object.setPrototypeOf(this,Tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vr.prototype.create)}}class vr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?$C(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Tt(i,a,r)}}function $C(t,e){return t.replace(VC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const VC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(t){return JSON.parse(t)}function fe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Es(da(s[0])||""),n=Es(da(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},HC=function(t){const e=pv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},GC=function(t){const e=pv(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ni(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function fu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ha(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Ss(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(sp(s)&&sp(o)){if(!Ss(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function sp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)r[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)r[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const h=r[u-3]^r[u-8]^r[u-14]^r[u-16];r[u]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let u=0;u<80;u++){u<40?u<20?(c=a^s&(o^a),d=1518500249):(c=s^o^a,d=1859775393):u<60?(c=s&o|a&(s|o),d=2400959708):(c=s^o^a,d=3395469782);const h=(i<<5|i>>>27)+c+l+d+r[u]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function KC(t,e){const n=new QC(t,e);return n.subscribe.bind(n)}class QC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");YC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ec),i.error===void 0&&(i.error=ec),i.complete===void 0&&(i.complete=ec);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function YC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ec(){}function tl(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,I(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},nl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC=1e3,ZC=2,e1=4*60*60*1e3,t1=.5;function op(t,e=XC,n=ZC){const r=e*Math.pow(n,t),i=Math.round(t1*r*(Math.random()-.5)*2);return Math.min(e1,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t){return t&&t._delegate?t._delegate:t}class ct{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zs;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(i1(e))try{this.getOrInitializeService({instanceIdentifier:Vn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Vn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vn){return this.instances.has(e)}getOptions(e=Vn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:r1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vn){return this.component?this.component.multipleInstances?e:Vn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function r1(t){return t===Vn?void 0:t}function i1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new n1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(H||(H={}));const o1={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},a1=H.INFO,l1={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},c1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=l1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rl{constructor(e){this.name=e,this._logLevel=a1,this._logHandler=c1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?o1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const u1=(t,e)=>e.some(n=>t instanceof n);let ap,lp;function d1(){return ap||(ap=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function h1(){return lp||(lp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mv=new WeakMap,pu=new WeakMap,gv=new WeakMap,tc=new WeakMap,Md=new WeakMap;function f1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Rn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&mv.set(n,t)}).catch(()=>{}),Md.set(e,t),e}function p1(t){if(pu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});pu.set(t,e)}let mu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function m1(t){mu=t(mu)}function g1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(nc(this),e,...n);return gv.set(r,e.sort?e.sort():[e]),Rn(r)}:h1().includes(t)?function(...e){return t.apply(nc(this),e),Rn(mv.get(this))}:function(...e){return Rn(t.apply(nc(this),e))}}function _1(t){return typeof t=="function"?g1(t):(t instanceof IDBTransaction&&p1(t),u1(t,d1())?new Proxy(t,mu):t)}function Rn(t){if(t instanceof IDBRequest)return f1(t);if(tc.has(t))return tc.get(t);const e=_1(t);return e!==t&&(tc.set(t,e),Md.set(e,t)),e}const nc=t=>Md.get(t);function _v(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Rn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Rn(o.result),l.oldVersion,l.newVersion,Rn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const v1=["get","getKey","getAll","getAllKeys","count"],y1=["put","add","delete","clear"],rc=new Map;function cp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(rc.get(e))return rc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=y1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||v1.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return rc.set(e,s),s}m1(t=>({...t,get:(e,n,r)=>cp(e,n)||t.get(e,n,r),has:(e,n)=>!!cp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(E1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function E1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gu="@firebase/app",up="0.10.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=new rl("@firebase/app"),S1="@firebase/app-compat",C1="@firebase/analytics-compat",I1="@firebase/analytics",T1="@firebase/app-check-compat",k1="@firebase/app-check",R1="@firebase/auth",N1="@firebase/auth-compat",x1="@firebase/database",P1="@firebase/database-compat",A1="@firebase/functions",O1="@firebase/functions-compat",b1="@firebase/installations",L1="@firebase/installations-compat",D1="@firebase/messaging",M1="@firebase/messaging-compat",F1="@firebase/performance",U1="@firebase/performance-compat",j1="@firebase/remote-config",z1="@firebase/remote-config-compat",B1="@firebase/storage",W1="@firebase/storage-compat",$1="@firebase/firestore",V1="@firebase/vertexai-preview",H1="@firebase/firestore-compat",G1="firebase",q1="10.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u="[DEFAULT]",K1={[gu]:"fire-core",[S1]:"fire-core-compat",[I1]:"fire-analytics",[C1]:"fire-analytics-compat",[k1]:"fire-app-check",[T1]:"fire-app-check-compat",[R1]:"fire-auth",[N1]:"fire-auth-compat",[x1]:"fire-rtdb",[P1]:"fire-rtdb-compat",[A1]:"fire-fn",[O1]:"fire-fn-compat",[b1]:"fire-iid",[L1]:"fire-iid-compat",[D1]:"fire-fcm",[M1]:"fire-fcm-compat",[F1]:"fire-perf",[U1]:"fire-perf-compat",[j1]:"fire-rc",[z1]:"fire-rc-compat",[B1]:"fire-gcs",[W1]:"fire-gcs-compat",[$1]:"fire-fst",[H1]:"fire-fst-compat",[V1]:"fire-vertex","fire-js":"fire-js",[G1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa=new Map,Q1=new Map,vu=new Map;function dp(t,e){try{t.container.addComponent(e)}catch(n){Xt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function It(t){const e=t.name;if(vu.has(e))return Xt.debug(`There were multiple attempts to register component ${e}.`),!1;vu.set(e,t);for(const n of fa.values())dp(n,t);for(const n of Q1.values())dp(n,t);return!0}function jn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function zt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nn=new vr("app","Firebase",Y1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ct("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=q1;function vv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:_u,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Nn.create("bad-app-name",{appName:String(i)});if(n||(n=ov()),!n)throw Nn.create("no-options");const s=fa.get(i);if(s){if(Ss(n,s.options)&&Ss(r,s.config))return s;throw Nn.create("duplicate-app",{appName:i})}const o=new s1(i);for(const l of vu.values())o.addComponent(l);const a=new J1(n,r,o);return fa.set(i,a),a}function il(t=_u){const e=fa.get(t);if(!e&&t===_u&&ov())return vv();if(!e)throw Nn.create("no-app",{appName:t});return e}function Ve(t,e,n){var r;let i=(r=K1[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xt.warn(a.join(" "));return}It(new ct(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1="firebase-heartbeat-database",Z1=1,Cs="firebase-heartbeat-store";let ic=null;function yv(){return ic||(ic=_v(X1,Z1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Cs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Nn.create("idb-open",{originalErrorMessage:t.message})})),ic}async function eI(t){try{const n=(await yv()).transaction(Cs),r=await n.objectStore(Cs).get(wv(t));return await n.done,r}catch(e){if(e instanceof Tt)Xt.warn(e.message);else{const n=Nn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xt.warn(n.message)}}}async function hp(t,e){try{const r=(await yv()).transaction(Cs,"readwrite");await r.objectStore(Cs).put(e,wv(t)),await r.done}catch(n){if(n instanceof Tt)Xt.warn(n.message);else{const r=Nn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Xt.warn(r.message)}}}function wv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI=1024,nI=30*24*60*60*1e3;class rI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=fp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=nI}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Xt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=fp(),{heartbeatsToSend:r,unsentEntries:i}=iI(this._heartbeatsCache.heartbeats),s=ua(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Xt.warn(n),""}}}function fp(){return new Date().toISOString().substring(0,10)}function iI(t,e=tI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),pp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),pp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class sI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hv()?fv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await eI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return hp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return hp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function pp(t){return ua(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(t){It(new ct("platform-logger",e=>new w1(e),"PRIVATE")),It(new ct("heartbeat",e=>new rI(e),"PRIVATE")),Ve(gu,up,t),Ve(gu,up,"esm2017"),Ve("fire-js","")}oI("");var mp={};const gp="@firebase/database",_p="1.0.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ev="";function aI(t){Ev=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),fe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Es(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Dt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new lI(e)}}catch{}return new cI},Qn=Sv("localStorage"),uI=Sv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=new rl("@firebase/database"),dI=function(){let t=1;return function(){return t++}}(),Cv=function(t){const e=JC(t),n=new qC;n.update(e);const r=n.digest();return bd.encodeByteArray(r)},Bs=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Bs.apply(null,r):typeof r=="object"?e+=fe(r):e+=r,e+=" "}return e};let Ki=null,vp=!0;const hI=function(t,e){I(!e,"Can't turn on custom loggers persistently."),Vr.logLevel=H.VERBOSE,Ki=Vr.log.bind(Vr)},Se=function(...t){if(vp===!0&&(vp=!1,Ki===null&&uI.get("logging_enabled")===!0&&hI()),Ki){const e=Bs.apply(null,t);Ki(e)}},Ws=function(t){return function(...e){Se(t,...e)}},yu=function(...t){const e="FIREBASE INTERNAL ERROR: "+Bs(...t);Vr.error(e)},Zt=function(...t){const e=`FIREBASE FATAL ERROR: ${Bs(...t)}`;throw Vr.error(e),new Error(e)},Le=function(...t){const e="FIREBASE WARNING: "+Bs(...t);Vr.warn(e)},fI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Le("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Fd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},pI=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ri="[MIN_NAME]",lr="[MAX_NAME]",wr=function(t,e){if(t===e)return 0;if(t===ri||e===lr)return-1;if(e===ri||t===lr)return 1;{const n=yp(t),r=yp(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},mI=function(t,e){return t===e?0:t<e?-1:1},Pi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+fe(e))},Ud=function(t){if(typeof t!="object"||t===null)return fe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=fe(e[r]),n+=":",n+=Ud(t[e[r]]);return n+="}",n},Iv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Te(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Tv=function(t){I(!Fd(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let u="";for(l=0;l<64;l+=8){let h=parseInt(d.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),u=u+h}return u.toLowerCase()},gI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},_I=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function vI(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const yI=new RegExp("^-?(0*)\\d{1,10}$"),wI=-2147483648,EI=2147483647,yp=function(t){if(yI.test(t)){const e=Number(t);if(e>=wI&&e<=EI)return e}return null},gi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Le("Exception was thrown by user callback.",n),e},Math.floor(0))}},SI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Qi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Le(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Se("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Le(e)}}class Lo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Lo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd="5",kv="v",Rv="s",Nv="r",xv="f",Pv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Av="ls",Ov="p",wu="ac",bv="websocket",Lv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Qn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Qn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function TI(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Mv(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let r;if(e===bv)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Lv)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);TI(t)&&(n.ns=t.namespace);const i=[];return Te(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(){this.counters_={}}incrementCounter(e,n=1){Dt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return LC(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc={},oc={};function zd(t){const e=t.toString();return sc[e]||(sc[e]=new kI),sc[e]}function RI(t,e){const n=t.toString();return oc[n]||(oc[n]=e()),oc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&gi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp="start",xI="close",PI="pLPCommand",AI="pRTLPCB",Fv="id",Uv="pw",jv="ser",OI="cb",bI="seg",LI="ts",DI="d",MI="dframe",zv=1870,Bv=30,FI=zv-Bv,UI=25e3,jI=3e4;class Fr{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ws(e),this.stats_=zd(n),this.urlFn=l=>(this.appCheckToken&&(l[wu]=this.appCheckToken),Mv(n,Lv,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new NI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(jI)),pI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Bd((...s)=>{const[o,a,l,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===wp)this.id=a,this.password=l;else if(o===xI)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[wp]="t",r[jv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[OI]=this.scriptTagHolder.uniqueCallbackIdentifier),r[kv]=jd,this.transportSessionId&&(r[Rv]=this.transportSessionId),this.lastSessionId&&(r[Av]=this.lastSessionId),this.applicationId&&(r[Ov]=this.applicationId),this.appCheckToken&&(r[wu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Pv.test(location.hostname)&&(r[Nv]=xv);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Fr.forceAllow_=!0}static forceDisallow(){Fr.forceDisallow_=!0}static isAvailable(){return Fr.forceAllow_?!0:!Fr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!gI()&&!_I()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=nv(n),i=Iv(r,FI);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[MI]="t",r[Fv]=e,r[Uv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=fe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Bd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=dI(),window[PI+this.uniqueCallbackIdentifier]=e,window[AI+this.uniqueCallbackIdentifier]=n,this.myIFrame=Bd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Se("frame writing exception"),a.stack&&Se(a.stack),Se(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Se("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Fv]=this.myID,e[Uv]=this.myPW,e[jv]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Bv+r.length<=zv;){const o=this.pendingSegs.shift();r=r+"&"+bI+i+"="+o.seg+"&"+LI+i+"="+o.ts+"&"+DI+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(UI)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Se("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI=16384,BI=45e3;let pa=null;typeof MozWebSocket<"u"?pa=MozWebSocket:typeof WebSocket<"u"&&(pa=WebSocket);class _t{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ws(this.connId),this.stats_=zd(n),this.connURL=_t.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[kv]=jd,typeof location<"u"&&location.hostname&&Pv.test(location.hostname)&&(o[Nv]=xv),n&&(o[Rv]=n),r&&(o[Av]=r),i&&(o[wu]=i),s&&(o[Ov]=s),Mv(e,bv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Qn.set("previous_websocket_failure",!0);try{let r;dv(),this.mySock=new pa(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){_t.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&pa!==null&&!_t.forceDisallow_}static previouslyFailed(){return Qn.isInMemoryStorage||Qn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Qn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Es(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Iv(n,zI);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(BI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}_t.responsesRequiredToBeHealthy=2;_t.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Fr,_t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=_t&&_t.isAvailable();let r=n&&!_t.previouslyFailed();if(e.webSocketOnly&&(n||Le("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[_t];else{const i=this.transports_=[];for(const s of Is.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Is.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Is.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI=6e4,$I=5e3,VI=10*1024,HI=100*1024,ac="t",Ep="d",GI="s",Sp="r",qI="e",Cp="o",Ip="a",Tp="n",kp="p",KI="h";class QI{constructor(e,n,r,i,s,o,a,l,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ws("c:"+this.id+":"),this.transportManager_=new Is(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Qi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>HI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>VI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ac in e){const n=e[ac];n===Ip?this.upgradeIfSecondaryHealthy_():n===Sp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Cp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Pi("t",e),r=Pi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:kp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ip,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Tp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Pi("t",e),r=Pi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Pi(ac,e);if(Ep in e){const r=e[Ep];if(n===KI){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Tp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===GI?this.onConnectionShutdown_(r):n===Sp?this.onReset_(r):n===qI?yu("Server Error: "+r):n===Cp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):yu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),jd!==r&&Le("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Qi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(WI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Qi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor($I))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:kp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Qn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma extends $v{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Dd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ma}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp=32,Np=768;class G{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function B(){return new G("")}function M(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function bn(t){return t.pieces_.length-t.pieceNum_}function K(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new G(t.pieces_,e)}function Wd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function YI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ts(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Vv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new G(e,0)}function re(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof G)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new G(n,0)}function U(t){return t.pieceNum_>=t.pieces_.length}function Oe(t,e){const n=M(t),r=M(e);if(n===null)return e;if(n===r)return Oe(K(t),K(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function JI(t,e){const n=Ts(t,0),r=Ts(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=wr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function $d(t,e){if(bn(t)!==bn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function st(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(bn(t)>bn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class XI{constructor(e,n){this.errorPrefix_=n,this.parts_=Ts(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=nl(this.parts_[r]);Hv(this)}}function ZI(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=nl(e),Hv(t)}function eT(t){const e=t.parts_.pop();t.byteLength_-=nl(e),t.parts_.length>0&&(t.byteLength_-=1)}function Hv(t){if(t.byteLength_>Np)throw new Error(t.errorPrefix_+"has a key path longer than "+Np+" bytes ("+t.byteLength_+").");if(t.parts_.length>Rp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Rp+") or object contains a cycle "+Hn(t))}function Hn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd extends $v{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Vd}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=1e3,tT=60*5*1e3,xp=30*1e3,nT=1.3,rT=3e4,iT="server_kill",Pp=3;class qt extends Wv{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=qt.nextPersistentConnectionId_++,this.log_=Ws("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ai,this.maxReconnectDelay_=tT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!dv())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Vd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ma.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(fe(s)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new zs,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;qt.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Dt(e,"w")){const r=ni(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Le(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||GC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=xp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=HC(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+fe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):yu("Unrecognized action received from server: "+fe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ai,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ai,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>rT&&(this.reconnectDelay_=Ai),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*nT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+qt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(u){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Se("getToken() completed but was canceled"):(Se("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=h&&h.token,a=new QI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Le(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(iT)},s))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&Le(u),l())}}}interrupt(e){Se("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Se("Resuming connection for reason: "+e),delete this.interruptReasons_[e],fu(this.interruptReasons_)&&(this.reconnectDelay_=Ai,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Ud(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new G(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Se("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Pp&&(this.reconnectDelay_=xp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Se("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Pp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ev.replace(/\./g,"-")]=1,Dd()?e["framework.cordova"]=1:uv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ma.getInstance().currentlyOnline();return fu(this.interruptReasons_)&&e}}qt.nextPersistentConnectionId_=0;qt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new F(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new F(ri,e),i=new F(ri,n);return this.compare(r,i)!==0}minPost(){return F.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let go;class Gv extends sl{static get __EMPTY_NODE(){return go}static set __EMPTY_NODE(e){go=e}compare(e,n){return wr(e.name,n.name)}isDefinedOn(e){throw pi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(lr,go)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,go)}toString(){return".key"}}const Hr=new Gv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ye{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ye.RED,this.left=i??ze.EMPTY_NODE,this.right=s??ze.EMPTY_NODE}copy(e,n,r,i,s){return new ye(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ze.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return ze.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ye.RED=!0;ye.BLACK=!1;class sT{copy(e,n,r,i,s){return this}insert(e,n,r){return new ye(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ze{constructor(e,n=ze.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ze(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ye.BLACK,null,null))}remove(e){return new ze(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ye.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new _o(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new _o(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new _o(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new _o(this.root_,null,this.comparator_,!0,e)}}ze.EMPTY_NODE=new sT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(t,e){return wr(t.name,e.name)}function Hd(t,e){return wr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eu;function aT(t){Eu=t}const qv=function(t){return typeof t=="number"?"number:"+Tv(t):"string:"+t},Kv=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Dt(e,".sv"),"Priority must be a string or number.")}else I(t===Eu||t.isEmpty(),"priority of unexpected type.");I(t===Eu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ap;class _e{constructor(e,n=_e.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Kv(this.priorityNode_)}static set __childrenNodeConstructor(e){Ap=e}static get __childrenNodeConstructor(){return Ap}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new _e(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:_e.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:M(e)===".priority"?this.priorityNode_:_e.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:_e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=M(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(I(r!==".priority"||bn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,_e.__childrenNodeConstructor.EMPTY_NODE.updateChild(K(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+qv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Tv(this.value_):e+=this.value_,this.lazyHash_=Cv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===_e.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof _e.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=_e.VALUE_TYPE_ORDER.indexOf(n),s=_e.VALUE_TYPE_ORDER.indexOf(r);return I(i>=0,"Unknown leaf type: "+n),I(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}_e.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qv,Yv;function lT(t){Qv=t}function cT(t){Yv=t}class uT extends sl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?wr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(lr,new _e("[PRIORITY-POST]",Yv))}makePost(e,n){const r=Qv(e);return new F(n,new _e("[PRIORITY-POST]",r))}toString(){return".priority"}}const ie=new uT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT=Math.log(2);class hT{constructor(e){const n=s=>parseInt(Math.log(s)/dT,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ga=function(t,e,n,r){t.sort(e);const i=function(l,c){const d=c-l;let u,h;if(d===0)return null;if(d===1)return u=t[l],h=n?n(u):u,new ye(h,u.node,ye.BLACK,null,null);{const _=parseInt(d/2,10)+l,m=i(l,_),y=i(_+1,c);return u=t[_],h=n?n(u):u,new ye(h,u.node,ye.BLACK,m,y)}},s=function(l){let c=null,d=null,u=t.length;const h=function(m,y){const S=u-m,g=u;u-=m;const p=i(S+1,g),v=t[S],w=n?n(v):v;_(new ye(w,v.node,y,null,p))},_=function(m){c?(c.left=m,c=m):(d=m,c=m)};for(let m=0;m<l.count;++m){const y=l.nextBitIsOne(),S=Math.pow(2,l.count-(m+1));y?h(S,ye.BLACK):(h(S,ye.BLACK),h(S,ye.RED))}return d},o=new hT(t.length),a=s(o);return new ze(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lc;const Ir={};class Bt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(Ir&&ie,"ChildrenNode.ts has not been loaded"),lc=lc||new Bt({".priority":Ir},{".priority":ie}),lc}get(e){const n=ni(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ze?n:null}hasIndex(e){return Dt(this.indexSet_,e.toString())}addIndex(e,n){I(e!==Hr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(F.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=ga(r,e.getCompare()):a=Ir;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new Bt(d,c)}addToIndexes(e,n){const r=ha(this.indexes_,(i,s)=>{const o=ni(this.indexSet_,s);if(I(o,"Missing index implementation for "+s),i===Ir)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(F.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),ga(a,o.getCompare())}else return Ir;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new F(e.name,a))),l.insert(e,e.node)}});return new Bt(r,this.indexSet_)}removeFromIndexes(e,n){const r=ha(this.indexes_,i=>{if(i===Ir)return i;{const s=n.get(e.name);return s?i.remove(new F(e.name,s)):i}});return new Bt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oi;class A{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Kv(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Oi||(Oi=new A(new ze(Hd),null,Bt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Oi}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Oi:n}}getChild(e){const n=M(e);return n===null?this:this.getImmediateChild(n).getChild(K(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new F(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Oi:this.priorityNode_;return new A(i,o,s)}}updateChild(e,n){const r=M(e);if(r===null)return n;{I(M(e)!==".priority"||bn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(K(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ie,(o,a)=>{n[o]=a.val(e),r++,s&&A.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+qv(this.getPriority().val())+":"),this.forEachChild(ie,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Cv(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new F(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===$s?-1:0}withIndex(e){if(e===Hr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Hr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ie),i=n.getIterator(ie);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Hr?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class fT extends A{constructor(){super(new ze(Hd),A.EMPTY_NODE,Bt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const $s=new fT;Object.defineProperties(F,{MIN:{value:new F(ri,A.EMPTY_NODE)},MAX:{value:new F(lr,$s)}});Gv.__EMPTY_NODE=A.EMPTY_NODE;_e.__childrenNodeConstructor=A;aT($s);cT($s);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT=!0;function he(t,e=null){if(t===null)return A.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new _e(n,he(e))}if(!(t instanceof Array)&&pT){const n=[];let r=!1;if(Te(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=he(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new F(o,l)))}}),n.length===0)return A.EMPTY_NODE;const s=ga(n,oT,o=>o.name,Hd);if(r){const o=ga(n,ie.getCompare());return new A(s,he(e),new Bt({".priority":o},{".priority":ie}))}else return new A(s,he(e),Bt.Default)}else{let n=A.EMPTY_NODE;return Te(t,(r,i)=>{if(Dt(t,r)&&r.substring(0,1)!=="."){const s=he(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(he(e))}}lT(he);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT extends sl{constructor(e){super(),this.indexPath_=e,I(!U(e)&&M(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?wr(e.name,n.name):s}makePost(e,n){const r=he(e),i=A.EMPTY_NODE.updateChild(this.indexPath_,r);return new F(n,i)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,$s);return new F(lr,e)}toString(){return Ts(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT extends sl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?wr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const r=he(e);return new F(n,r)}toString(){return".value"}}const _T=new gT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(t){return{type:"value",snapshotNode:t}}function ii(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ks(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Rs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function vT(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ks(n,a)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ii(n,r)):o.trackChildChange(Rs(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ie,(i,s)=>{n.hasChild(i)||r.trackChildChange(ks(i,s))}),n.isLeafNode()||n.forEachChild(ie,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Rs(i,s,o))}else r.trackChildChange(ii(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e){this.indexedFilter_=new Gd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ns.getStartPost_(e),this.endPost_=Ns.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new F(n,r))||(r=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=A.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const s=this;return n.forEachChild(ie,(o,a)=>{s.matches(new F(o,a))||(i=i.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ns(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new F(n,r))||(r=A.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const u=this.index_.getCompare();o=(h,_)=>u(_,h)}else o=this.index_.getCompare();const a=e;I(a.numChildren()===this.limit_,"");const l=new F(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const u=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const _=h==null?1:o(h,l);if(d&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(Rs(n,r,u)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ks(n,u));const y=a.updateImmediateChild(n,A.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(ii(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return r.isEmpty()?e:d&&o(c,l)>=0?(s!=null&&(s.trackChildChange(ks(c.name,c.node)),s.trackChildChange(ii(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,A.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ie}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ri}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:lr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ie}copy(){const e=new qd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function wT(t){return t.loadsAllData()?new Gd(t.getIndex()):t.hasLimit()?new yT(t):new Ns(t)}function ET(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function Op(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ie?n="$priority":t.index_===_T?n="$value":t.index_===Hr?n="$key":(I(t.index_ instanceof mT,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=fe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=fe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+fe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=fe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+fe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function bp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ie&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a extends Wv{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ws("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=_a.getListenId_(e,r),a={};this.listens_[o]=a;const l=Op(e._queryParams);this.restRequest_(s+".json",l,(c,d)=>{let u=d;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(s,u,!1,r),ni(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const r=_a.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Op(e._queryParams),r=e._path.toString(),i=new zs;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+mi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Es(a.responseText)}catch{Le("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Le("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(){return{value:null,children:new Map}}function Xv(t,e,n){if(U(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=M(e);t.children.has(r)||t.children.set(r,va());const i=t.children.get(r);e=K(e),Xv(i,e,n)}}function Su(t,e,n){t.value!==null?n(e,t.value):CT(t,(r,i)=>{const s=new G(e.toString()+"/"+r);Su(i,s,n)})}function CT(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Te(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp=10*1e3,TT=30*1e3,kT=5*60*1e3;class RT{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new IT(e);const r=Lp+(TT-Lp)*Math.random();Qi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Te(e,(i,s)=>{s>0&&Dt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Qi(this.reportStats_.bind(this),Math.floor(Math.random()*2*kT))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(vt||(vt={}));function Kd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Qd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Yd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=vt.ACK_USER_WRITE,this.source=Kd()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new G(e));return new ya(B(),n,this.revert)}}else return I(M(this.path)===e,"operationForChild called for unrelated child."),new ya(K(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n){this.source=e,this.path=n,this.type=vt.LISTEN_COMPLETE}operationForChild(e){return U(this.path)?new xs(this.source,B()):new xs(this.source,K(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=vt.OVERWRITE}operationForChild(e){return U(this.path)?new cr(this.source,B(),this.snap.getImmediateChild(e)):new cr(this.source,K(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=vt.MERGE}operationForChild(e){if(U(this.path)){const n=this.children.subtree(new G(e));return n.isEmpty()?null:n.value?new cr(this.source,B(),n.value):new si(this.source,B(),n)}else return I(M(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new si(this.source,K(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const n=M(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function xT(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(vT(o.childName,o.snapshotNode))}),bi(t,i,"child_removed",e,r,n),bi(t,i,"child_added",e,r,n),bi(t,i,"child_moved",s,r,n),bi(t,i,"child_changed",e,r,n),bi(t,i,"value",e,r,n),i}function bi(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>AT(t,a,l)),o.forEach(a=>{const l=PT(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function PT(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function AT(t,e,n){if(e.childName==null||n.childName==null)throw pi("Should only compare child_ events.");const r=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(t,e){return{eventCache:t,serverCache:e}}function Yi(t,e,n,r){return ol(new Ln(e,n,r),t.serverCache)}function Zv(t,e,n,r){return ol(t.eventCache,new Ln(e,n,r))}function wa(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ur(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cc;const OT=()=>(cc||(cc=new ze(mI)),cc);class q{constructor(e,n=OT()){this.value=e,this.children=n}static fromObject(e){let n=new q(null);return Te(e,(r,i)=>{n=n.set(new G(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:B(),value:this.value};if(U(e))return null;{const r=M(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(K(e),n);return s!=null?{path:re(new G(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const n=M(e),r=this.children.get(n);return r!==null?r.subtree(K(e)):new q(null)}}set(e,n){if(U(e))return new q(n,this.children);{const r=M(e),s=(this.children.get(r)||new q(null)).set(K(e),n),o=this.children.insert(r,s);return new q(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new q(null):new q(null,this.children);{const n=M(e),r=this.children.get(n);if(r){const i=r.remove(K(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new q(null):new q(this.value,s)}else return this}}get(e){if(U(e))return this.value;{const n=M(e),r=this.children.get(n);return r?r.get(K(e)):null}}setTree(e,n){if(U(e))return n;{const r=M(e),s=(this.children.get(r)||new q(null)).setTree(K(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new q(this.value,o)}}fold(e){return this.fold_(B(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(re(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,B(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(U(e))return null;{const s=M(e),o=this.children.get(s);return o?o.findOnPath_(K(e),re(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,B(),n)}foreachOnPath_(e,n,r){if(U(e))return this;{this.value&&r(n,this.value);const i=M(e),s=this.children.get(i);return s?s.foreachOnPath_(K(e),re(n,i),r):new q(null)}}foreach(e){this.foreach_(B(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(re(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.writeTree_=e}static empty(){return new Et(new q(null))}}function Ji(t,e,n){if(U(e))return new Et(new q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Oe(i,e);return s=s.updateChild(o,n),new Et(t.writeTree_.set(i,s))}else{const i=new q(n),s=t.writeTree_.setTree(e,i);return new Et(s)}}}function Cu(t,e,n){let r=t;return Te(n,(i,s)=>{r=Ji(r,re(e,i),s)}),r}function Dp(t,e){if(U(e))return Et.empty();{const n=t.writeTree_.setTree(e,new q(null));return new Et(n)}}function Iu(t,e){return Er(t,e)!=null}function Er(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Oe(n.path,e)):null}function Mp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ie,(r,i)=>{e.push(new F(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new F(r,i.value))}),e}function xn(t,e){if(U(e))return t;{const n=Er(t,e);return n!=null?new Et(new q(n)):new Et(t.writeTree_.subtree(e))}}function Tu(t){return t.writeTree_.isEmpty()}function oi(t,e){return ey(B(),t.writeTree_,e)}function ey(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(I(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=ey(re(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(re(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(t,e){return iy(e,t)}function bT(t,e,n,r,i){I(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ji(t.visibleWrites,e,n)),t.lastWriteId=r}function LT(t,e,n,r){I(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Cu(t.visibleWrites,e,n),t.lastWriteId=r}function DT(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function MT(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&FT(a,r.path)?i=!1:st(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return UT(t),!0;if(r.snap)t.visibleWrites=Dp(t.visibleWrites,r.path);else{const a=r.children;Te(a,l=>{t.visibleWrites=Dp(t.visibleWrites,re(r.path,l))})}return!0}else return!1}function FT(t,e){if(t.snap)return st(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&st(re(t.path,n),e))return!0;return!1}function UT(t){t.visibleWrites=ty(t.allWrites,jT,B()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function jT(t){return t.visible}function ty(t,e,n){let r=Et.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)st(n,o)?(a=Oe(n,o),r=Ji(r,a,s.snap)):st(o,n)&&(a=Oe(o,n),r=Ji(r,B(),s.snap.getChild(a)));else if(s.children){if(st(n,o))a=Oe(n,o),r=Cu(r,a,s.children);else if(st(o,n))if(a=Oe(o,n),U(a))r=Cu(r,B(),s.children);else{const l=ni(s.children,M(a));if(l){const c=l.getChild(K(a));r=Ji(r,B(),c)}}}else throw pi("WriteRecord should have .snap or .children")}}return r}function ny(t,e,n,r,i){if(!r&&!i){const s=Er(t.visibleWrites,e);if(s!=null)return s;{const o=xn(t.visibleWrites,e);if(Tu(o))return n;if(n==null&&!Iu(o,B()))return null;{const a=n||A.EMPTY_NODE;return oi(o,a)}}}else{const s=xn(t.visibleWrites,e);if(!i&&Tu(s))return n;if(!i&&n==null&&!Iu(s,B()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(st(c.path,e)||st(e,c.path))},a=ty(t.allWrites,o,e),l=n||A.EMPTY_NODE;return oi(a,l)}}}function zT(t,e,n){let r=A.EMPTY_NODE;const i=Er(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ie,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=xn(t.visibleWrites,e);return n.forEachChild(ie,(o,a)=>{const l=oi(xn(s,new G(o)),a);r=r.updateImmediateChild(o,l)}),Mp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=xn(t.visibleWrites,e);return Mp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function BT(t,e,n,r,i){I(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=re(e,n);if(Iu(t.visibleWrites,s))return null;{const o=xn(t.visibleWrites,s);return Tu(o)?i.getChild(n):oi(o,i.getChild(n))}}function WT(t,e,n,r){const i=re(e,n),s=Er(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=xn(t.visibleWrites,i);return oi(o,r.getNode().getImmediateChild(n))}else return null}function $T(t,e){return Er(t.visibleWrites,e)}function VT(t,e,n,r,i,s,o){let a;const l=xn(t.visibleWrites,e),c=Er(l,B());if(c!=null)a=c;else if(n!=null)a=oi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=h.getNext();for(;_&&d.length<i;)u(_,r)!==0&&d.push(_),_=h.getNext();return d}else return[]}function HT(){return{visibleWrites:Et.empty(),allWrites:[],lastWriteId:-1}}function Ea(t,e,n,r){return ny(t.writeTree,t.treePath,e,n,r)}function Jd(t,e){return zT(t.writeTree,t.treePath,e)}function Fp(t,e,n,r){return BT(t.writeTree,t.treePath,e,n,r)}function Sa(t,e){return $T(t.writeTree,re(t.treePath,e))}function GT(t,e,n,r,i,s){return VT(t.writeTree,t.treePath,e,n,r,i,s)}function Xd(t,e,n){return WT(t.writeTree,t.treePath,e,n)}function ry(t,e){return iy(re(t.treePath,e),t.writeTree)}function iy(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Rs(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ks(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ii(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Rs(r,e.snapshotNode,i.oldSnap));else throw pi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const sy=new KT;class Zd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Ln(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Xd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ur(this.viewCache_),s=GT(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(t){return{filter:t}}function YT(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function JT(t,e,n,r,i){const s=new qT;let o,a;if(n.type===vt.OVERWRITE){const c=n;c.source.fromUser?o=ku(t,e,c.path,c.snap,r,i,s):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!U(c.path),o=Ca(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===vt.MERGE){const c=n;c.source.fromUser?o=ZT(t,e,c.path,c.children,r,i,s):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Ru(t,e,c.path,c.children,r,i,a,s))}else if(n.type===vt.ACK_USER_WRITE){const c=n;c.revert?o=nk(t,e,c.path,r,i,s):o=ek(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===vt.LISTEN_COMPLETE)o=tk(t,e,n.path,r,s);else throw pi("Unknown operation type: "+n.type);const l=s.getChanges();return XT(e,o,l),{viewCache:o,changes:l}}function XT(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=wa(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Jv(wa(e)))}}function oy(t,e,n,r,i,s){const o=e.eventCache;if(Sa(r,n)!=null)return e;{let a,l;if(U(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ur(e),d=c instanceof A?c:A.EMPTY_NODE,u=Jd(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const c=Ea(r,ur(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=M(n);if(c===".priority"){I(bn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const u=Fp(r,n,d,l);u!=null?a=t.filter.updatePriority(d,u):a=o.getNode()}else{const d=K(n);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Fp(r,n,o.getNode(),l);h!=null?u=o.getNode().getImmediateChild(c).updateChild(d,h):u=o.getNode().getImmediateChild(c)}else u=Xd(r,c,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),c,u,d,i,s):a=o.getNode()}}return Yi(e,a,o.isFullyInitialized()||U(n),t.filter.filtersNodes())}}function Ca(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(U(n))c=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,r);c=d.updateFullNode(l.getNode(),_,null)}else{const _=M(n);if(!l.isCompleteForPath(n)&&bn(n)>1)return e;const m=K(n),S=l.getNode().getImmediateChild(_).updateChild(m,r);_===".priority"?c=d.updatePriority(l.getNode(),S):c=d.updateChild(l.getNode(),_,S,m,sy,null)}const u=Zv(e,c,l.isFullyInitialized()||U(n),d.filtersNodes()),h=new Zd(i,u,s);return oy(t,u,n,i,h,a)}function ku(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const d=new Zd(i,e,s);if(U(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Yi(e,c,!0,t.filter.filtersNodes());else{const u=M(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Yi(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=K(n),_=a.getNode().getImmediateChild(u);let m;if(U(h))m=r;else{const y=d.getCompleteChild(u);y!=null?Wd(h)===".priority"&&y.getChild(Vv(h)).isEmpty()?m=y:m=y.updateChild(h,r):m=A.EMPTY_NODE}if(_.equals(m))l=e;else{const y=t.filter.updateChild(a.getNode(),u,m,h,d,o);l=Yi(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Up(t,e){return t.eventCache.isCompleteForChild(e)}function ZT(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const d=re(n,l);Up(e,M(d))&&(a=ku(t,a,d,c,i,s,o))}),r.foreach((l,c)=>{const d=re(n,l);Up(e,M(d))||(a=ku(t,a,d,c,i,s,o))}),a}function jp(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Ru(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;U(n)?c=r:c=new q(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((u,h)=>{if(d.hasChild(u)){const _=e.serverCache.getNode().getImmediateChild(u),m=jp(t,_,h);l=Ca(t,l,new G(u),m,i,s,o,a)}}),c.children.inorderTraversal((u,h)=>{const _=!e.serverCache.isCompleteForChild(u)&&h.value===null;if(!d.hasChild(u)&&!_){const m=e.serverCache.getNode().getImmediateChild(u),y=jp(t,m,h);l=Ca(t,l,new G(u),y,i,s,o,a)}}),l}function ek(t,e,n,r,i,s,o){if(Sa(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(U(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ca(t,e,n,l.getNode().getChild(n),i,s,a,o);if(U(n)){let c=new q(null);return l.getNode().forEachChild(Hr,(d,u)=>{c=c.set(new G(d),u)}),Ru(t,e,n,c,i,s,a,o)}else return e}else{let c=new q(null);return r.foreach((d,u)=>{const h=re(n,d);l.isCompleteForPath(h)&&(c=c.set(d,l.getNode().getChild(h)))}),Ru(t,e,n,c,i,s,a,o)}}function tk(t,e,n,r,i){const s=e.serverCache,o=Zv(e,s.getNode(),s.isFullyInitialized()||U(n),s.isFiltered());return oy(t,o,n,r,sy,i)}function nk(t,e,n,r,i,s){let o;if(Sa(r,n)!=null)return e;{const a=new Zd(r,e,i),l=e.eventCache.getNode();let c;if(U(n)||M(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Ea(r,ur(e));else{const u=e.serverCache.getNode();I(u instanceof A,"serverChildren would be complete if leaf node"),d=Jd(r,u)}d=d,c=t.filter.updateFullNode(l,d,s)}else{const d=M(n);let u=Xd(r,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=l.getImmediateChild(d)),u!=null?c=t.filter.updateChild(l,d,u,K(n),a,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(l,d,A.EMPTY_NODE,K(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ea(r,ur(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Sa(r,B())!=null,Yi(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Gd(r.getIndex()),s=wT(r);this.processor_=QT(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(A.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(A.EMPTY_NODE,a.getNode(),null),d=new Ln(l,o.isFullyInitialized(),i.filtersNodes()),u=new Ln(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=ol(u,d),this.eventGenerator_=new NT(this.query_)}get query(){return this.query_}}function ik(t){return t.viewCache_.serverCache.getNode()}function sk(t){return wa(t.viewCache_)}function ok(t,e){const n=ur(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!U(e)&&!n.getImmediateChild(M(e)).isEmpty())?n.getChild(e):null}function zp(t){return t.eventRegistrations_.length===0}function ak(t,e){t.eventRegistrations_.push(e)}function Bp(t,e,n){const r=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Wp(t,e,n,r){e.type===vt.MERGE&&e.source.queryId!==null&&(I(ur(t.viewCache_),"We should always have a full cache before handling merges"),I(wa(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=JT(t.processor_,i,e,n,r);return YT(t.processor_,s.viewCache),I(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,ay(t,s.changes,s.viewCache.eventCache.getNode(),null)}function lk(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ie,(s,o)=>{r.push(ii(s,o))}),n.isFullyInitialized()&&r.push(Jv(n.getNode())),ay(t,r,n.getNode(),e)}function ay(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return xT(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ia;class ly{constructor(){this.views=new Map}}function ck(t){I(!Ia,"__referenceConstructor has already been defined"),Ia=t}function uk(){return I(Ia,"Reference.ts has not been loaded"),Ia}function dk(t){return t.views.size===0}function eh(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return I(s!=null,"SyncTree gave us an op for an invalid query."),Wp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Wp(o,e,n,r));return s}}function cy(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Ea(n,i?r:null),l=!1;a?l=!0:r instanceof A?(a=Jd(n,r),l=!1):(a=A.EMPTY_NODE,l=!1);const c=ol(new Ln(a,l,!1),new Ln(r,i,!1));return new rk(e,c)}return o}function hk(t,e,n,r,i,s){const o=cy(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),ak(o,n),lk(o,n)}function fk(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Dn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Bp(c,n,r)),zp(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Bp(l,n,r)),zp(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Dn(t)&&s.push(new(uk())(e._repo,e._path)),{removed:s,events:o}}function uy(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Pn(t,e){let n=null;for(const r of t.views.values())n=n||ok(r,e);return n}function dy(t,e){if(e._queryParams.loadsAllData())return ll(t);{const r=e._queryIdentifier;return t.views.get(r)}}function hy(t,e){return dy(t,e)!=null}function Dn(t){return ll(t)!=null}function ll(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ta;function pk(t){I(!Ta,"__referenceConstructor has already been defined"),Ta=t}function mk(){return I(Ta,"Reference.ts has not been loaded"),Ta}let gk=1;class $p{constructor(e){this.listenProvider_=e,this.syncPointTree_=new q(null),this.pendingWriteTree_=HT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function fy(t,e,n,r,i){return bT(t.pendingWriteTree_,e,n,r,i),i?_i(t,new cr(Kd(),e,n)):[]}function _k(t,e,n,r){LT(t.pendingWriteTree_,e,n,r);const i=q.fromObject(n);return _i(t,new si(Kd(),e,i))}function vn(t,e,n=!1){const r=DT(t.pendingWriteTree_,e);if(MT(t.pendingWriteTree_,e)){let s=new q(null);return r.snap!=null?s=s.set(B(),!0):Te(r.children,o=>{s=s.set(new G(o),!0)}),_i(t,new ya(r.path,s,n))}else return[]}function Vs(t,e,n){return _i(t,new cr(Qd(),e,n))}function vk(t,e,n){const r=q.fromObject(n);return _i(t,new si(Qd(),e,r))}function yk(t,e){return _i(t,new xs(Qd(),e))}function wk(t,e,n){const r=nh(t,n);if(r){const i=rh(r),s=i.path,o=i.queryId,a=Oe(s,e),l=new xs(Yd(o),a);return ih(t,s,l)}else return[]}function ka(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||hy(o,e))){const l=fk(o,e,n,r);dk(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const d=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(s,(h,_)=>Dn(_));if(d&&!u){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const _=Ck(h);for(let m=0;m<_.length;++m){const y=_[m],S=y.query,g=_y(t,y);t.listenProvider_.startListening(Xi(S),Ps(t,S),g.hashFn,g.onComplete)}}}!u&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(Xi(e),null):c.forEach(h=>{const _=t.queryToTagMap.get(cl(h));t.listenProvider_.stopListening(Xi(h),_)}))}Ik(t,c)}return a}function py(t,e,n,r){const i=nh(t,r);if(i!=null){const s=rh(i),o=s.path,a=s.queryId,l=Oe(o,e),c=new cr(Yd(a),l,n);return ih(t,o,c)}else return[]}function Ek(t,e,n,r){const i=nh(t,r);if(i){const s=rh(i),o=s.path,a=s.queryId,l=Oe(o,e),c=q.fromObject(n),d=new si(Yd(a),l,c);return ih(t,o,d)}else return[]}function Nu(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,_)=>{const m=Oe(h,i);s=s||Pn(_,m),o=o||Dn(_)});let a=t.syncPointTree_.get(i);a?(o=o||Dn(a),s=s||Pn(a,B())):(a=new ly,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=A.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,m)=>{const y=Pn(m,B());y&&(s=s.updateImmediateChild(_,y))}));const c=hy(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=cl(e);I(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const _=Tk();t.queryToTagMap.set(h,_),t.tagToQueryMap.set(_,h)}const d=al(t.pendingWriteTree_,i);let u=hk(a,e,n,d,s,l);if(!c&&!o&&!r){const h=dy(a,e);u=u.concat(kk(t,e,h))}return u}function th(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Oe(o,e),c=Pn(a,l);if(c)return c});return ny(i,e,s,n,!0)}function Sk(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,d)=>{const u=Oe(c,n);r=r||Pn(d,u)});let i=t.syncPointTree_.get(n);i?r=r||Pn(i,B()):(i=new ly,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Ln(r,!0,!1):null,a=al(t.pendingWriteTree_,e._path),l=cy(i,e,a,s?o.getNode():A.EMPTY_NODE,s);return sk(l)}function _i(t,e){return my(e,t.syncPointTree_,null,al(t.pendingWriteTree_,B()))}function my(t,e,n,r){if(U(t.path))return gy(t,e,n,r);{const i=e.get(B());n==null&&i!=null&&(n=Pn(i,B()));let s=[];const o=M(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,d=ry(r,o);s=s.concat(my(a,l,c,d))}return i&&(s=s.concat(eh(i,t,r,n))),s}}function gy(t,e,n,r){const i=e.get(B());n==null&&i!=null&&(n=Pn(i,B()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=ry(r,o),d=t.operationForChild(o);d&&(s=s.concat(gy(d,a,l,c)))}),i&&(s=s.concat(eh(i,t,r,n))),s}function _y(t,e){const n=e.query,r=Ps(t,n);return{hashFn:()=>(ik(e)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?wk(t,n._path,r):yk(t,n._path);{const s=vI(i,n);return ka(t,n,null,s)}}}}function Ps(t,e){const n=cl(e);return t.queryToTagMap.get(n)}function cl(t){return t._path.toString()+"$"+t._queryIdentifier}function nh(t,e){return t.tagToQueryMap.get(e)}function rh(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new G(t.substr(0,e))}}function ih(t,e,n){const r=t.syncPointTree_.get(e);I(r,"Missing sync point for query tag that we're tracking");const i=al(t.pendingWriteTree_,e);return eh(r,n,i,null)}function Ck(t){return t.fold((e,n,r)=>{if(n&&Dn(n))return[ll(n)];{let i=[];return n&&(i=uy(n)),Te(r,(s,o)=>{i=i.concat(o)}),i}})}function Xi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(mk())(t._repo,t._path):t}function Ik(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=cl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function Tk(){return gk++}function kk(t,e,n){const r=e._path,i=Ps(t,e),s=_y(t,n),o=t.listenProvider_.startListening(Xi(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)I(!Dn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,u)=>{if(!U(c)&&d&&Dn(d))return[ll(d).query];{let h=[];return d&&(h=h.concat(uy(d).map(_=>_.query))),Te(u,(_,m)=>{h=h.concat(m)}),h}});for(let c=0;c<l.length;++c){const d=l[c];t.listenProvider_.stopListening(Xi(d),Ps(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new sh(n)}node(){return this.node_}}class oh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=re(this.path_,e);return new oh(this.syncTree_,n)}node(){return th(this.syncTree_,this.path_)}}const Rk=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Vp=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Nk(t[".sv"],e,n);if(typeof t[".sv"]=="object")return xk(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Nk=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},xk=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&I(!1,"Unexpected increment value: "+r);const i=e.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},vy=function(t,e,n,r){return ah(e,new oh(n,t),r)},yy=function(t,e,n){return ah(t,new sh(e),n)};function ah(t,e,n){const r=t.getPriority().val(),i=Vp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Vp(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new _e(a,he(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new _e(i))),o.forEachChild(ie,(a,l)=>{const c=ah(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function ch(t,e){let n=e instanceof G?e:new G(e),r=t,i=M(n);for(;i!==null;){const s=ni(r.node.children,i)||{children:{},childCount:0};r=new lh(i,r,s),n=K(n),i=M(n)}return r}function vi(t){return t.node.value}function wy(t,e){t.node.value=e,xu(t)}function Ey(t){return t.node.childCount>0}function Pk(t){return vi(t)===void 0&&!Ey(t)}function ul(t,e){Te(t.node.children,(n,r)=>{e(new lh(n,t,r))})}function Sy(t,e,n,r){n&&!r&&e(t),ul(t,i=>{Sy(i,e,!0,r)}),n&&r&&e(t)}function Ak(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Hs(t){return new G(t.parent===null?t.name:Hs(t.parent)+"/"+t.name)}function xu(t){t.parent!==null&&Ok(t.parent,t.name,t)}function Ok(t,e,n){const r=Pk(n),i=Dt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,xu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,xu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bk=/[\[\].#$\/\u0000-\u001F\u007F]/,Lk=/[\[\].#$\u0000-\u001F\u007F]/,uc=10*1024*1024,uh=function(t){return typeof t=="string"&&t.length!==0&&!bk.test(t)},Cy=function(t){return typeof t=="string"&&t.length!==0&&!Lk.test(t)},Dk=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Cy(t)},Mk=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Fd(t)||t&&typeof t=="object"&&Dt(t,".sv")},Iy=function(t,e,n,r){r&&e===void 0||dl(tl(t,"value"),e,n)},dl=function(t,e,n){const r=n instanceof G?new XI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Hn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Hn(r)+" with contents = "+e.toString());if(Fd(e))throw new Error(t+"contains "+e.toString()+" "+Hn(r));if(typeof e=="string"&&e.length>uc/3&&nl(e)>uc)throw new Error(t+"contains a string greater than "+uc+" utf8 bytes "+Hn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Te(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!uh(o)))throw new Error(t+" contains an invalid key ("+o+") "+Hn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ZI(r,o),dl(t,a,r),eT(r)}),i&&s)throw new Error(t+' contains ".value" child '+Hn(r)+" in addition to actual children.")}},Fk=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Ts(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!uh(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(JI);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&st(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},Uk=function(t,e,n,r){const i=tl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Te(e,(o,a)=>{const l=new G(o);if(dl(i,a,re(n,l)),Wd(l)===".priority"&&!Mk(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),Fk(i,s)},Ty=function(t,e,n,r){if(!Cy(n))throw new Error(tl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},jk=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ty(t,e,n)},dh=function(t,e){if(M(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},zk=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!uh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Dk(n))throw new Error(tl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function hl(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!$d(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function ky(t,e,n){hl(t,n),Ry(t,r=>$d(r,e))}function ut(t,e,n){hl(t,n),Ry(t,r=>st(r,e)||st(e,r))}function Ry(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(Wk(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Wk(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ki&&Se("event: "+n.toString()),gi(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k="repo_interrupt",Vk=25;class Hk{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Bk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=va(),this.transactionQueueTree_=new lh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Gk(t,e,n){if(t.stats_=zd(t.repoInfo_),t.forceRestClient_||SI())t.server_=new _a(t.repoInfo_,(r,i,s,o)=>{Hp(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Gp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{fe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new qt(t.repoInfo_,e,(r,i,s,o)=>{Hp(t,r,i,s,o)},r=>{Gp(t,r)},r=>{qk(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=RI(t.repoInfo_,()=>new RT(t.stats_,t.server_)),t.infoData_=new ST,t.infoSyncTree_=new $p({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Vs(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),hh(t,"connected",!1),t.serverSyncTree_=new $p({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);ut(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Ny(t){const n=t.infoData_.getNode(new G(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function fl(t){return Rk({timestamp:Ny(t)})}function Hp(t,e,n,r,i){t.dataUpdateCount++;const s=new G(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=ha(n,c=>he(c));o=Ek(t.serverSyncTree_,s,l,i)}else{const l=he(n);o=py(t.serverSyncTree_,s,l,i)}else if(r){const l=ha(n,c=>he(c));o=vk(t.serverSyncTree_,s,l)}else{const l=he(n);o=Vs(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=ai(t,s)),ut(t.eventQueue_,a,o)}function Gp(t,e){hh(t,"connected",e),e===!1&&Jk(t)}function qk(t,e){Te(e,(n,r)=>{hh(t,n,r)})}function hh(t,e,n){const r=new G("/.info/"+e),i=he(n);t.infoData_.updateSnapshot(r,i);const s=Vs(t.infoSyncTree_,r,i);ut(t.eventQueue_,r,s)}function fh(t){return t.nextWriteId_++}function Kk(t,e,n){const r=Sk(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=he(i).withIndex(e._queryParams.getIndex());Nu(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Vs(t.serverSyncTree_,e._path,s);else{const a=Ps(t.serverSyncTree_,e);o=py(t.serverSyncTree_,e._path,s,a)}return ut(t.eventQueue_,e._path,o),ka(t.serverSyncTree_,e,n,null,!0),s},i=>(Gs(t,"get for query "+fe(e)+" failed: "+i),Promise.reject(new Error(i))))}function Qk(t,e,n,r,i){Gs(t,"set",{path:e.toString(),value:n,priority:r});const s=fl(t),o=he(n,r),a=th(t.serverSyncTree_,e),l=yy(o,a,s),c=fh(t),d=fy(t.serverSyncTree_,e,l,c,!0);hl(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,_)=>{const m=h==="ok";m||Le("set at "+e+" failed: "+h);const y=vn(t.serverSyncTree_,c,!m);ut(t.eventQueue_,e,y),Pu(t,i,h,_)});const u=mh(t,e);ai(t,u),ut(t.eventQueue_,u,[])}function Yk(t,e,n,r){Gs(t,"update",{path:e.toString(),value:n});let i=!0;const s=fl(t),o={};if(Te(n,(a,l)=>{i=!1,o[a]=vy(re(e,a),he(l),t.serverSyncTree_,s)}),i)Se("update() called with empty data.  Don't do anything."),Pu(t,r,"ok",void 0);else{const a=fh(t),l=_k(t.serverSyncTree_,e,o,a);hl(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,d)=>{const u=c==="ok";u||Le("update at "+e+" failed: "+c);const h=vn(t.serverSyncTree_,a,!u),_=h.length>0?ai(t,e):e;ut(t.eventQueue_,_,h),Pu(t,r,c,d)}),Te(n,c=>{const d=mh(t,re(e,c));ai(t,d)}),ut(t.eventQueue_,e,[])}}function Jk(t){Gs(t,"onDisconnectEvents");const e=fl(t),n=va();Su(t.onDisconnect_,B(),(i,s)=>{const o=vy(i,s,t.serverSyncTree_,e);Xv(n,i,o)});let r=[];Su(n,B(),(i,s)=>{r=r.concat(Vs(t.serverSyncTree_,i,s));const o=mh(t,i);ai(t,o)}),t.onDisconnect_=va(),ut(t.eventQueue_,B(),r)}function Xk(t,e,n){let r;M(e._path)===".info"?r=Nu(t.infoSyncTree_,e,n):r=Nu(t.serverSyncTree_,e,n),ky(t.eventQueue_,e._path,r)}function Zk(t,e,n){let r;M(e._path)===".info"?r=ka(t.infoSyncTree_,e,n):r=ka(t.serverSyncTree_,e,n),ky(t.eventQueue_,e._path,r)}function eR(t){t.persistentConnection_&&t.persistentConnection_.interrupt($k)}function Gs(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Se(n,...e)}function Pu(t,e,n,r){e&&gi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function xy(t,e,n){return th(t.serverSyncTree_,e,n)||A.EMPTY_NODE}function ph(t,e=t.transactionQueueTree_){if(e||pl(t,e),vi(e)){const n=Ay(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&tR(t,Hs(e),n)}else Ey(e)&&ul(e,n=>{ph(t,n)})}function tR(t,e,n){const r=n.map(c=>c.currentWriteId),i=xy(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];I(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=Oe(e,d.path);s=s.updateChild(u,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Gs(t,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const u=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(vn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&u.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();pl(t,ch(t.transactionQueueTree_,e)),ph(t,t.transactionQueueTree_),ut(t.eventQueue_,e,d);for(let h=0;h<u.length;h++)gi(u[h])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{Le("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}ai(t,e)}},o)}function ai(t,e){const n=Py(t,e),r=Hs(n),i=Ay(t,n);return nR(t,i,r),r}function nR(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Oe(n,l.path);let d=!1,u;if(I(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,u=l.abortReason,i=i.concat(vn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Vk)d=!0,u="maxretry",i=i.concat(vn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=xy(t,l.path,o);l.currentInputSnapshot=h;const _=e[a].update(h.val());if(_!==void 0){dl("transaction failed: Data returned ",_,l.path);let m=he(_);typeof _=="object"&&_!=null&&Dt(_,".priority")||(m=m.updatePriority(h.getPriority()));const S=l.currentWriteId,g=fl(t),p=yy(m,h,g);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=p,l.currentWriteId=fh(t),o.splice(o.indexOf(S),1),i=i.concat(fy(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(vn(t.serverSyncTree_,S,!0))}else d=!0,u="nodata",i=i.concat(vn(t.serverSyncTree_,l.currentWriteId,!0))}ut(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(u),!1,null))))}pl(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)gi(r[a]);ph(t,t.transactionQueueTree_)}function Py(t,e){let n,r=t.transactionQueueTree_;for(n=M(e);n!==null&&vi(r)===void 0;)r=ch(r,n),e=K(e),n=M(e);return r}function Ay(t,e){const n=[];return Oy(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Oy(t,e,n){const r=vi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ul(e,i=>{Oy(t,i,n)})}function pl(t,e){const n=vi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,wy(e,n.length>0?n:void 0)}ul(e,r=>{pl(t,r)})}function mh(t,e){const n=Hs(Py(t,e)),r=ch(t.transactionQueueTree_,e);return Ak(r,i=>{dc(t,i)}),dc(t,r),Sy(r,i=>{dc(t,i)}),n}function dc(t,e){const n=vi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(vn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?wy(e,void 0):n.length=s+1,ut(t.eventQueue_,Hs(e),i);for(let o=0;o<r.length;o++)gi(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rR(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function iR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Le(`Invalid query segment '${n}' in query '${t}'`)}return e}const qp=function(t,e){const n=sR(t),r=n.namespace;n.domain==="firebase.com"&&Zt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Zt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||fI();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Dv(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new G(n.pathString)}},sR=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(d,u)),d<u&&(i=rR(t.substring(d,u)));const h=iR(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");r=e.substring(0,m).toLowerCase(),n=e.substring(m+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",oR=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Kp.charAt(n%64),n=Math.floor(n/64);I(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Kp.charAt(e[i]);return I(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+fe(this.snapshot.exportVal())}}class lR{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return U(this._path)?null:Wd(this._path)}get ref(){return new nn(this._repo,this._path)}get _queryIdentifier(){const e=bp(this._queryParams),n=Ud(e);return n==="{}"?"default":n}get _queryObject(){return bp(this._queryParams)}isEqual(e){if(e=ce(e),!(e instanceof ml))return!1;const n=this._repo===e._repo,r=$d(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+YI(this._path)}}class nn extends ml{constructor(e,n){super(e,n,new qd,!1)}get parent(){const e=Vv(this._path);return e===null?null:new nn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class As{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new G(e),r=Os(this.ref,e);return new As(this._node.getChild(n),r,ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new As(i,Os(this.ref,r),ie)))}hasChild(e){const n=new G(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function qe(t,e){return t=ce(t),t._checkNotDeleted("ref"),e!==void 0?Os(t._root,e):t._root}function Os(t,e){return t=ce(t),M(t._path)===null?jk("child","path",e):Ty("child","path",e),new nn(t._repo,re(t._path,e))}function KO(t,e){t=ce(t),dh("push",t._path),Iy("push",e,t._path,!0);const n=Ny(t._repo),r=oR(n),i=Os(t,r),s=Os(t,r);let o;return e!=null?o=bs(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function cR(t){return dh("remove",t._path),bs(t,null)}function bs(t,e){t=ce(t),dh("set",t._path),Iy("set",e,t._path,!1);const n=new zs;return Qk(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function QO(t,e){Uk("update",e,t._path);const n=new zs;return Yk(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function li(t){t=ce(t);const e=new by(()=>{}),n=new gl(e);return Kk(t._repo,t,n).then(r=>new As(r,new nn(t._repo,t._path),t._queryParams.getIndex()))}class gl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new aR("value",this,new As(e.snapshotNode,new nn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new lR(this,e,n):null}matches(e){return e instanceof gl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function uR(t,e,n,r,i){const s=new by(n,void 0),o=new gl(s);return Xk(t._repo,t,o),()=>Zk(t._repo,t,o)}function YO(t,e,n,r){return uR(t,"value",e)}class dR{}class hR extends dR{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new ml(e._repo,e._path,ET(e._queryParams,this._limit),e._orderByCalled)}}function fR(t){if(Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new hR(t)}function pR(t,...e){let n=ce(t);for(const r of e)n=r._apply(n);return n}ck(nn);pk(nn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR="FIREBASE_DATABASE_EMULATOR_HOST",Au={};let gR=!1;function _R(t,e,n,r){t.repoInfo_=new Dv(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function vR(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Zt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Se("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=qp(s,i),a=o.repoInfo,l;typeof process<"u"&&mp&&(l=mp[mR]),l?(s=`http://${l}?ns=${a.namespace}`,o=qp(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new II(t.name,t.options,e);zk("Invalid Firebase Database URL",o),U(o.path)||Zt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=wR(a,t,c,new CI(t.name,n));return new ER(d,t)}function yR(t,e){const n=Au[e];(!n||n[t.key]!==t)&&Zt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),eR(t),delete n[t.key]}function wR(t,e,n,r){let i=Au[e.name];i||(i={},Au[e.name]=i);let s=i[t.toURLString()];return s&&Zt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Hk(t,gR,n,r),i[t.toURLString()]=s,s}class ER{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Gk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new nn(this._repo,B())),this._rootInternal}_delete(){return this._rootInternal!==null&&(yR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Zt("Cannot call "+e+" on a deleted database.")}}function SR(t=il(),e){const n=jn(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=sv("database");r&&CR(n,...r)}return n}function CR(t,e,n,r={}){t=ce(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Zt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Zt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Lo(Lo.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:lv(r.mockUserToken,t.app.options.projectId);s=new Lo(o)}_R(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IR(t){aI(yr),It(new ct("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return vR(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Ve(gp,_p,t),Ve(gp,_p,"esm2017")}qt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};qt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};IR();var TR="firebase",kR="10.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ve(TR,kR,"app");const Ly="@firebase/installations",gh="0.6.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy=1e4,My=`w:${gh}`,Fy="FIS_v2",RR="https://firebaseinstallations.googleapis.com/v1",NR=60*60*1e3,xR="installations",PR="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},dr=new vr(xR,PR,AR);function Uy(t){return t instanceof Tt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy({projectId:t}){return`${RR}/projects/${t}/installations`}function zy(t){return{token:t.token,requestStatus:2,expiresIn:bR(t.expiresIn),creationTime:Date.now()}}async function By(t,e){const r=(await e.json()).error;return dr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Wy({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function OR(t,{refreshToken:e}){const n=Wy(t);return n.append("Authorization",LR(e)),n}async function $y(t){const e=await t();return e.status>=500&&e.status<600?t():e}function bR(t){return Number(t.replace("s","000"))}function LR(t){return`${Fy} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DR({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=jy(t),i=Wy(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:Fy,appId:t.appId,sdkVersion:My},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await $y(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:zy(c.authToken)}}else throw await By("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MR(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR=/^[cdef][\w-]{21}$/,Ou="";function UR(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=jR(t);return FR.test(n)?n:Ou}catch{return Ou}}function jR(t){return MR(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy=new Map;function Gy(t,e){const n=_l(t);qy(n,e),zR(n,e)}function qy(t,e){const n=Hy.get(t);if(n)for(const r of n)r(e)}function zR(t,e){const n=BR();n&&n.postMessage({key:t,fid:e}),WR()}let Yn=null;function BR(){return!Yn&&"BroadcastChannel"in self&&(Yn=new BroadcastChannel("[Firebase] FID Change"),Yn.onmessage=t=>{qy(t.data.key,t.data.fid)}),Yn}function WR(){Hy.size===0&&Yn&&(Yn.close(),Yn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $R="firebase-installations-database",VR=1,hr="firebase-installations-store";let hc=null;function _h(){return hc||(hc=_v($R,VR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(hr)}}})),hc}async function Ra(t,e){const n=_l(t),i=(await _h()).transaction(hr,"readwrite"),s=i.objectStore(hr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Gy(t,e.fid),e}async function Ky(t){const e=_l(t),r=(await _h()).transaction(hr,"readwrite");await r.objectStore(hr).delete(e),await r.done}async function vl(t,e){const n=_l(t),i=(await _h()).transaction(hr,"readwrite"),s=i.objectStore(hr),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Gy(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vh(t){let e;const n=await vl(t.appConfig,r=>{const i=HR(r),s=GR(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Ou?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function HR(t){const e=t||{fid:UR(),registrationStatus:0};return Qy(e)}function GR(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(dr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=qR(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:KR(t)}:{installationEntry:e}}async function qR(t,e){try{const n=await DR(t,e);return Ra(t.appConfig,n)}catch(n){throw Uy(n)&&n.customData.serverCode===409?await Ky(t.appConfig):await Ra(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function KR(t){let e=await Qp(t.appConfig);for(;e.registrationStatus===1;)await Vy(100),e=await Qp(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await vh(t);return r||n}return e}function Qp(t){return vl(t,e=>{if(!e)throw dr.create("installation-not-found");return Qy(e)})}function Qy(t){return QR(t)?{fid:t.fid,registrationStatus:0}:t}function QR(t){return t.registrationStatus===1&&t.registrationTime+Dy<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YR({appConfig:t,heartbeatServiceProvider:e},n){const r=JR(t,n),i=OR(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:My,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await $y(()=>fetch(r,a));if(l.ok){const c=await l.json();return zy(c)}else throw await By("Generate Auth Token",l)}function JR(t,{fid:e}){return`${jy(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yh(t,e=!1){let n;const r=await vl(t.appConfig,s=>{if(!Yy(s))throw dr.create("not-registered");const o=s.authToken;if(!e&&eN(o))return s;if(o.requestStatus===1)return n=XR(t,e),s;{if(!navigator.onLine)throw dr.create("app-offline");const a=nN(s);return n=ZR(t,a),a}});return n?await n:r.authToken}async function XR(t,e){let n=await Yp(t.appConfig);for(;n.authToken.requestStatus===1;)await Vy(100),n=await Yp(t.appConfig);const r=n.authToken;return r.requestStatus===0?yh(t,e):r}function Yp(t){return vl(t,e=>{if(!Yy(e))throw dr.create("not-registered");const n=e.authToken;return rN(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ZR(t,e){try{const n=await YR(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Ra(t.appConfig,r),n}catch(n){if(Uy(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ky(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ra(t.appConfig,r)}throw n}}function Yy(t){return t!==void 0&&t.registrationStatus===2}function eN(t){return t.requestStatus===2&&!tN(t)}function tN(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+NR}function nN(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function rN(t){return t.requestStatus===1&&t.requestTime+Dy<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iN(t){const e=t,{installationEntry:n,registrationPromise:r}=await vh(e);return r?r.catch(console.error):yh(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sN(t,e=!1){const n=t;return await oN(n),(await yh(n,e)).token}async function oN(t){const{registrationPromise:e}=await vh(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aN(t){if(!t||!t.options)throw fc("App Configuration");if(!t.name)throw fc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw fc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function fc(t){return dr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy="installations",lN="installations-internal",cN=t=>{const e=t.getProvider("app").getImmediate(),n=aN(e),r=jn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},uN=t=>{const e=t.getProvider("app").getImmediate(),n=jn(e,Jy).getImmediate();return{getId:()=>iN(n),getToken:i=>sN(n,i)}};function dN(){It(new ct(Jy,cN,"PUBLIC")),It(new ct(lN,uN,"PRIVATE"))}dN();Ve(Ly,gh);Ve(Ly,gh,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na="analytics",hN="firebase_id",fN="origin",pN=60*1e3,mN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",wh="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=new rl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Xe=new vr("analytics","Analytics",gN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _N(t){if(!t.startsWith(wh)){const e=Xe.create("invalid-gtag-resource",{gtagURL:t});return He.warn(e.message),""}return t}function Xy(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function vN(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function yN(t,e){const n=vN("firebase-js-sdk-policy",{createScriptURL:_N}),r=document.createElement("script"),i=`${wh}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function wN(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function EN(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await Xy(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){He.error(a)}t("config",i,s)}async function SN(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Xy(n);for(const l of o){const c=a.find(u=>u.measurementId===l),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){He.error(s)}}function CN(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await SN(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await EN(t,e,n,r,a,l)}else if(s==="consent"){const[a,l]=o;t("consent",a,l)}else if(s==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){He.error(a)}}return i}function IN(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=CN(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function TN(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(wh)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kN=30,RN=1e3;class NN{constructor(e={},n=RN){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Zy=new NN;function xN(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function PN(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:xN(r)},s=mN.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Xe.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function AN(t,e=Zy,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Xe.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Xe.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new LN;return setTimeout(async()=>{a.abort()},pN),e0({appId:r,apiKey:i,measurementId:s},o,a,e)}async function e0(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Zy){var s;const{appId:o,measurementId:a}=t;try{await ON(r,e)}catch(l){if(a)return He.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await PN(t);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!bN(c)){if(i.deleteThrottleMetadata(o),a)return He.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const d=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?op(n,i.intervalMillis,kN):op(n,i.intervalMillis),u={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,u),He.debug(`Calling attemptFetch again in ${d} millis`),e0(t,u,r,i)}}function ON(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Xe.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function bN(t){if(!(t instanceof Tt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class LN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function DN(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MN(){if(hv())try{await fv()}catch(t){return He.warn(Xe.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return He.warn(Xe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function FN(t,e,n,r,i,s,o){var a;const l=AN(t);l.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&He.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>He.error(_)),e.push(l);const c=MN().then(_=>{if(_)return r.getId()}),[d,u]=await Promise.all([l,c]);TN(s)||yN(s,d.measurementId),i("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[fN]="firebase",h.update=!0,u!=null&&(h[hN]=u),i("config",d.measurementId,h),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(e){this.app=e}_delete(){return delete Zi[this.app.options.appId],Promise.resolve()}}let Zi={},Jp=[];const Xp={};let pc="dataLayer",jN="gtag",Zp,t0,em=!1;function zN(){const t=[];if(cv()&&t.push("This is a browser extension environment."),BC()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Xe.create("invalid-analytics-context",{errorInfo:e});He.warn(n.message)}}function BN(t,e,n){zN();const r=t.options.appId;if(!r)throw Xe.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)He.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Xe.create("no-api-key");if(Zi[r]!=null)throw Xe.create("already-exists",{id:r});if(!em){wN(pc);const{wrappedGtag:s,gtagCore:o}=IN(Zi,Jp,Xp,pc,jN);t0=s,Zp=o,em=!0}return Zi[r]=FN(t,Jp,Xp,e,Zp,pc,n),new UN(t)}function WN(t=il()){t=ce(t);const e=jn(t,Na);return e.isInitialized()?e.getImmediate():$N(t)}function $N(t,e={}){const n=jn(t,Na);if(n.isInitialized()){const i=n.getImmediate();if(Ss(e,n.getOptions()))return i;throw Xe.create("already-initialized")}return n.initialize({options:e})}function VN(t,e,n,r){t=ce(t),DN(t0,Zi[t.app.options.appId],e,n,r).catch(i=>He.error(i))}const tm="@firebase/analytics",nm="0.10.7";function HN(){It(new ct(Na,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return BN(r,i,n)},"PUBLIC")),It(new ct("analytics-internal",t,"PRIVATE")),Ve(tm,nm),Ve(tm,nm,"esm2017");function t(e){try{const n=e.getProvider(Na).getImmediate();return{logEvent:(r,i,s)=>VN(n,r,i,s)}}catch(n){throw Xe.create("interop-component-reg-failed",{reason:n})}}}HN();function Eh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function n0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const GN=n0,r0=new vr("auth","Firebase",n0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa=new rl("@firebase/auth");function qN(t,...e){xa.logLevel<=H.WARN&&xa.warn(`Auth (${yr}): ${t}`,...e)}function Do(t,...e){xa.logLevel<=H.ERROR&&xa.error(`Auth (${yr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t,...e){throw Ch(t,...e)}function St(t,...e){return Ch(t,...e)}function Sh(t,e,n){const r=Object.assign(Object.assign({},GN()),{[e]:n});return new vr("auth","Firebase",r).create(e,{appName:t.name})}function tr(t){return Sh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function KN(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Lt(t,"argument-error"),Sh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ch(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return r0.create(t,...e)}function O(t,e,...n){if(!t)throw Ch(e,...n)}function Wt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Do(e),new Error(e)}function en(t,e){t||Wt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function QN(){return rm()==="http:"||rm()==="https:"}function rm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(QN()||cv()||"connection"in navigator)?navigator.onLine:!0}function JN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,n){this.shortDelay=e,this.longDelay=n,en(n>e,"Short delay should be less than long delay!"),this.isMobile=Dd()||uv()}get(){return YN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(t,e){en(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN=new qs(3e4,6e4);function Th(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function yi(t,e,n,r,i={}){return s0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=mi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),i0.fetch()(o0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function s0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},XN),e);try{const i=new tx(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw vo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw vo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw vo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw vo(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Sh(t,d,c);Lt(t,d)}}catch(i){if(i instanceof Tt)throw i;Lt(t,"network-request-failed",{message:String(i)})}}async function ex(t,e,n,r,i={}){const s=await yi(t,e,n,r,i);return"mfaPendingCredential"in s&&Lt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function o0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ih(t.config,i):`${t.config.apiScheme}://${i}`}class tx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(St(this.auth,"network-request-failed")),ZN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=St(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nx(t,e){return yi(t,"POST","/v1/accounts:delete",e)}async function a0(t,e){return yi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rx(t,e=!1){const n=ce(t),r=await n.getIdToken(e),i=kh(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:es(mc(i.auth_time)),issuedAtTime:es(mc(i.iat)),expirationTime:es(mc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function mc(t){return Number(t)*1e3}function kh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Do("JWT malformed, contained fewer than 3 sections"),null;try{const i=da(n);return i?JSON.parse(i):(Do("Failed to decode base64 JWT payload"),null)}catch(i){return Do("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function im(t){const e=kh(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ls(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Tt&&ix(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ix({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=es(this.lastLoginAt),this.creationTime=es(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pa(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ls(t,a0(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?l0(s.providerUserInfo):[],a=ax(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Lu(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,u)}async function ox(t){const e=ce(t);await Pa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ax(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function l0(t){return t.map(e=>{var{providerId:n}=e,r=Eh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lx(t,e){const n=await s0(t,{},async()=>{const r=mi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=o0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",i0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function cx(t,e){return yi(t,"POST","/v2/accounts:revokeToken",Th(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):im(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){O(e.length!==0,"internal-error");const n=im(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await lx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Gr;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gr,this.toJSON())}_performRefresh(){return Wt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $t{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Eh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Lu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ls(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return rx(this,e)}reload(){return ox(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Pa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zt(this.auth.app))return Promise.reject(tr(this.auth));const e=await this.getIdToken();return await Ls(this,nx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,d;const u=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(c=n.createdAt)!==null&&c!==void 0?c:void 0,p=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:v,emailVerified:w,isAnonymous:T,providerData:R,stsTokenManager:k}=n;O(v&&k,e,"internal-error");const N=Gr.fromJSON(this.name,k);O(typeof v=="string",e,"internal-error"),on(u,e.name),on(h,e.name),O(typeof w=="boolean",e,"internal-error"),O(typeof T=="boolean",e,"internal-error"),on(_,e.name),on(m,e.name),on(y,e.name),on(S,e.name),on(g,e.name),on(p,e.name);const V=new $t({uid:v,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:T,photoURL:m,phoneNumber:_,tenantId:y,stsTokenManager:N,createdAt:g,lastLoginAt:p});return R&&Array.isArray(R)&&(V.providerData=R.map(b=>Object.assign({},b))),S&&(V._redirectEventId=S),V}static async _fromIdTokenResponse(e,n,r=!1){const i=new Gr;i.updateFromServerResponse(n);const s=new $t({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Pa(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];O(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?l0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Gr;a.updateFromIdToken(r);const l=new $t({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Lu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm=new Map;function Vt(t){en(t instanceof Function,"Expected a class definition");let e=sm.get(t);return e?(en(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,sm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}c0.type="NONE";const om=c0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(t,e,n){return`firebase:${t}:${e}:${n}`}class qr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Mo(this.userKey,i.apiKey,s),this.fullPersistenceKey=Mo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$t._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qr(Vt(om),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Vt(om);const o=Mo(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const u=$t._fromJSON(e,d);c!==s&&(a=u),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new qr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new qr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(f0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(u0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(m0(e))return"Blackberry";if(g0(e))return"Webos";if(d0(e))return"Safari";if((e.includes("chrome/")||h0(e))&&!e.includes("edge/"))return"Chrome";if(p0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function u0(t=De()){return/firefox\//i.test(t)}function d0(t=De()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function h0(t=De()){return/crios\//i.test(t)}function f0(t=De()){return/iemobile/i.test(t)}function p0(t=De()){return/android/i.test(t)}function m0(t=De()){return/blackberry/i.test(t)}function g0(t=De()){return/webos/i.test(t)}function Rh(t=De()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ux(t=De()){var e;return Rh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dx(){return zC()&&document.documentMode===10}function _0(t=De()){return Rh(t)||p0(t)||g0(t)||m0(t)||/windows phone/i.test(t)||f0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(t,e=[]){let n;switch(t){case"Browser":n=am(De());break;case"Worker":n=`${am(De())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fx(t,e={}){return yi(t,"GET","/v2/passwordPolicy",Th(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const px=6;class mx{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:px,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lm(this),this.idTokenSubscription=new lm(this),this.beforeStateQueue=new hx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=r0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await qr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await a0(this,{idToken:e}),r=await $t._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(zt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Pa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=JN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(zt(this.app))return Promise.reject(tr(this));const n=e?ce(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return zt(this.app)?Promise.reject(tr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return zt(this.app)?Promise.reject(tr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await fx(this),n=new mx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await cx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vt(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await qr.create(this,[Vt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=v0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&qN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function yl(t){return ce(t)}class lm{constructor(e){this.auth=e,this.observer=null,this.addObserver=KC(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _x(t){Nh=t}function vx(t){return Nh.loadJS(t)}function yx(){return Nh.gapiScript}function wx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ex(t,e){const n=jn(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ss(s,e??{}))return i;Lt(i,"already-initialized")}return n.initialize({options:e})}function Sx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Vt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Cx(t,e,n){const r=yl(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=y0(e),{host:o,port:a}=Ix(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Tx()}function y0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ix(t){const e=y0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:cm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:cm(o)}}}function cm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Tx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wt("not implemented")}_getIdTokenResponse(e){return Wt("not implemented")}_linkToIdToken(e,n){return Wt("not implemented")}_getReauthenticationResolver(e){return Wt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kr(t,e){return ex(t,"POST","/v1/accounts:signInWithIdp",Th(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kx="http://localhost";class fr extends w0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Lt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Eh(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new fr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Kr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Kr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Kr(e,n)}buildRequest(){const e={requestUri:kx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=mi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks extends xh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends Ks{constructor(){super("facebook.com")}static credential(e){return fr._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";dn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends Ks{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fr._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return xt.credential(n,r)}catch{return null}}}xt.GOOGLE_SIGN_IN_METHOD="google.com";xt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends Ks{constructor(){super("github.com")}static credential(e){return fr._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.GITHUB_SIGN_IN_METHOD="github.com";hn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends Ks{constructor(){super("twitter.com")}static credential(e,n){return fr._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return fn.credential(n,r)}catch{return null}}}fn.TWITTER_SIGN_IN_METHOD="twitter.com";fn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await $t._fromIdTokenResponse(e,r,i),o=um(r);return new ci({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=um(r);return new ci({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function um(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa extends Tt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Aa.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Aa(e,n,r,i)}}function E0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Aa._fromErrorAndOperation(t,s,e,r):s})}async function Rx(t,e,n=!1){const r=await Ls(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ci._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nx(t,e,n=!1){const{auth:r}=t;if(zt(r.app))return Promise.reject(tr(r));const i="reauthenticate";try{const s=await Ls(t,E0(r,i,e,t),n);O(s.idToken,r,"internal-error");const o=kh(s.idToken);O(o,r,"internal-error");const{sub:a}=o;return O(t.uid===a,r,"user-mismatch"),ci._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Lt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xx(t,e,n=!1){if(zt(t.app))return Promise.reject(tr(t));const r="signIn",i=await E0(t,r,e),s=await ci._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function Px(t,e,n,r){return ce(t).onIdTokenChanged(e,n,r)}function Ax(t,e,n){return ce(t).beforeAuthStateChanged(e,n)}const Oa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Oa,"1"),this.storage.removeItem(Oa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ox=1e3,bx=10;class C0 extends S0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);dx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,bx):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ox)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}C0.type="LOCAL";const Lx=C0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0 extends S0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}I0.type="SESSION";const T0=I0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new wl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await Dx(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Ph("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(u){const h=u;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){return window}function Fx(t){bt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k0(){return typeof bt().WorkerGlobalScope<"u"&&typeof bt().importScripts=="function"}async function Ux(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function zx(){return k0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0="firebaseLocalStorageDb",Bx=1,ba="firebaseLocalStorage",N0="fbase_key";class Qs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function El(t,e){return t.transaction([ba],e?"readwrite":"readonly").objectStore(ba)}function Wx(){const t=indexedDB.deleteDatabase(R0);return new Qs(t).toPromise()}function Du(){const t=indexedDB.open(R0,Bx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ba,{keyPath:N0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ba)?e(r):(r.close(),await Wx(),e(await Du()))})})}async function dm(t,e,n){const r=El(t,!0).put({[N0]:e,value:n});return new Qs(r).toPromise()}async function $x(t,e){const n=El(t,!1).get(e),r=await new Qs(n).toPromise();return r===void 0?null:r.value}function hm(t,e){const n=El(t,!0).delete(e);return new Qs(n).toPromise()}const Vx=800,Hx=3;class x0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Du(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Hx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return k0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wl._getInstance(zx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ux(),!this.activeServiceWorker)return;this.sender=new Mx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Du();return await dm(e,Oa,"1"),await hm(e,Oa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>dm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$x(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>hm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=El(i,!1).getAll();return new Qs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Vx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}x0.type="LOCAL";const Gx=x0;new qs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P0(t,e){return e?Vt(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah extends w0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Kr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Kr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function qx(t){return xx(t.auth,new Ah(t),t.bypassAuthState)}function Kx(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),Nx(n,new Ah(t),t.bypassAuthState)}async function Qx(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),Rx(n,new Ah(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qx;case"linkViaPopup":case"linkViaRedirect":return Qx;case"reauthViaPopup":case"reauthViaRedirect":return Kx;default:Lt(this.auth,"internal-error")}}resolve(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yx=new qs(2e3,1e4);async function Jx(t,e,n){if(zt(t.app))return Promise.reject(St(t,"operation-not-supported-in-this-environment"));const r=yl(t);KN(t,e,xh);const i=P0(r,n);return new Jn(r,"signInViaPopup",e,i).executeNotNull()}class Jn extends A0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Jn.currentPopupAction&&Jn.currentPopupAction.cancel(),Jn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){en(this.filter.length===1,"Popup operations only handle one event");const e=Ph();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(St(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(St(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(St(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Yx.get())};e()}}Jn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xx="pendingRedirect",Fo=new Map;class Zx extends A0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Fo.get(this.auth._key());if(!e){try{const r=await eP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Fo.set(this.auth._key(),e)}return this.bypassAuthState||Fo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eP(t,e){const n=rP(e),r=nP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function tP(t,e){Fo.set(t._key(),e)}function nP(t){return Vt(t._redirectPersistence)}function rP(t){return Mo(Xx,t.config.apiKey,t.name)}async function iP(t,e,n=!1){if(zt(t.app))return Promise.reject(tr(t));const r=yl(t),i=P0(r,e),o=await new Zx(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sP=10*60*1e3;class oP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!aP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!O0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(St(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sP&&this.cachedEventUids.clear(),this.cachedEventUids.has(fm(e))}saveEventToCache(e){this.cachedEventUids.add(fm(e)),this.lastProcessedEventTime=Date.now()}}function fm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function O0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function aP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return O0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lP(t,e={}){return yi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uP=/^https?/;async function dP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lP(t);for(const n of e)try{if(hP(n))return}catch{}Lt(t,"unauthorized-domain")}function hP(t){const e=bu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!uP.test(n))return!1;if(cP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP=new qs(3e4,6e4);function pm(){const t=bt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function pP(t){return new Promise((e,n)=>{var r,i,s;function o(){pm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pm(),n(St(t,"network-request-failed"))},timeout:fP.get()})}if(!((i=(r=bt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=bt().gapi)===null||s===void 0)&&s.load)o();else{const a=wx("iframefcb");return bt()[a]=()=>{gapi.load?o():n(St(t,"network-request-failed"))},vx(`${yx()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Uo=null,e})}let Uo=null;function mP(t){return Uo=Uo||pP(t),Uo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gP=new qs(5e3,15e3),_P="__/auth/iframe",vP="emulator/auth/iframe",yP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function EP(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ih(e,vP):`https://${t.config.authDomain}/${_P}`,r={apiKey:e.apiKey,appName:t.name,v:yr},i=wP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${mi(r).slice(1)}`}async function SP(t){const e=await mP(t),n=bt().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:EP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=St(t,"network-request-failed"),a=bt().setTimeout(()=>{s(o)},gP.get());function l(){bt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},IP=500,TP=600,kP="_blank",RP="http://localhost";class mm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NP(t,e,n,r=IP,i=TP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},CP),{width:r.toString(),height:i.toString(),top:s,left:o}),c=De().toLowerCase();n&&(a=h0(c)?kP:n),u0(c)&&(e=e||RP,l.scrollbars="yes");const d=Object.entries(l).reduce((h,[_,m])=>`${h}${_}=${m},`,"");if(ux(c)&&a!=="_self")return xP(e||"",a),new mm(null);const u=window.open(e||"",a,d);O(u,t,"popup-blocked");try{u.focus()}catch{}return new mm(u)}function xP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP="__/auth/handler",AP="emulator/auth/handler",OP=encodeURIComponent("fac");async function gm(t,e,n,r,i,s){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:yr,eventId:i};if(e instanceof xh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",fu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries({}))o[d]=u}if(e instanceof Ks){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${OP}=${encodeURIComponent(l)}`:"";return`${bP(t)}?${mi(a).slice(1)}${c}`}function bP({config:t}){return t.emulator?Ih(t,AP):`https://${t.authDomain}/${PP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc="webStorageSupport";class LP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=T0,this._completeRedirectFn=iP,this._overrideRedirectResult=tP}async _openPopup(e,n,r,i){var s;en((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await gm(e,n,r,bu(),i);return NP(e,o,Ph())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await gm(e,n,r,bu(),i);return Fx(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(en(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await SP(e),r=new oP(e);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(gc,{type:gc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[gc];o!==void 0&&n(!!o),Lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _0()||d0()||Rh()}}const DP=LP;var _m="@firebase/auth",vm="1.7.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function UP(t){It(new ct("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:v0(t)},c=new gx(r,i,s,l);return Sx(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),It(new ct("auth-internal",e=>{const n=yl(e.getProvider("auth").getImmediate());return(r=>new MP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ve(_m,vm,FP(t)),Ve(_m,vm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jP=5*60,zP=av("authIdTokenMaxAge")||jP;let ym=null;const BP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>zP)return;const i=n==null?void 0:n.token;ym!==i&&(ym=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function WP(t=il()){const e=jn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ex(t,{popupRedirectResolver:DP,persistence:[Gx,Lx,T0]}),r=av("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=BP(s.toString());Ax(n,o,()=>o(n.currentUser)),Px(n,a=>o(a))}}const i=iv("auth");return i&&Cx(n,`http://${i}`),n}function $P(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}_x({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=St("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",$P().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});UP("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0="firebasestorage.googleapis.com",L0="storageBucket",VP=2*60*1e3,HP=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe extends Tt{constructor(e,n,r=0){super(_c(e),`Firebase Storage: ${n} (${_c(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,oe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return _c(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var se;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(se||(se={}));function _c(t){return"storage/"+t}function Oh(){const t="An unknown error occurred, please check the error payload for server response.";return new oe(se.UNKNOWN,t)}function GP(t){return new oe(se.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function qP(t){return new oe(se.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function KP(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new oe(se.UNAUTHENTICATED,t)}function QP(){return new oe(se.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function YP(t){return new oe(se.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function JP(){return new oe(se.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function XP(){return new oe(se.CANCELED,"User canceled the upload/download.")}function ZP(t){return new oe(se.INVALID_URL,"Invalid URL '"+t+"'.")}function eA(t){return new oe(se.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function tA(){return new oe(se.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+L0+"' property when initializing the app?")}function nA(){return new oe(se.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function rA(){return new oe(se.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function iA(t){return new oe(se.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Mu(t){return new oe(se.INVALID_ARGUMENT,t)}function D0(){return new oe(se.APP_DELETED,"The Firebase app was deleted.")}function sA(t){return new oe(se.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ts(t,e){return new oe(se.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Li(t){throw new oe(se.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ye.makeFromUrl(e,n)}catch{return new Ye(e,"")}if(r.path==="")return r;throw eA(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(w){w.path_=decodeURIComponent(w.path)}const d="v[A-Za-z0-9_]+",u=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",_=new RegExp(`^https?://${u}/${d}/b/${i}/o${h}`,"i"),m={bucket:1,path:3},y=n===b0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",g=new RegExp(`^https?://${y}/${i}/${S}`,"i"),v=[{regex:a,indices:l,postModify:s},{regex:_,indices:m,postModify:c},{regex:g,indices:{bucket:1,path:2},postModify:c}];for(let w=0;w<v.length;w++){const T=v[w],R=T.regex.exec(e);if(R){const k=R[T.indices.bucket];let N=R[T.indices.path];N||(N=""),r=new Ye(k,N),T.postModify(r);break}}if(r==null)throw ZP(e);return r}}class oA{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aA(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function d(...S){c||(c=!0,e.apply(null,S))}function u(S){i=setTimeout(()=>{i=null,t(_,l())},S)}function h(){s&&clearTimeout(s)}function _(S,...g){if(c){h();return}if(S){h(),d.call(null,S,...g);return}if(l()||o){h(),d.call(null,S,...g);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,u(v)}let m=!1;function y(S){m||(m=!0,h(),!c&&(i!==null?(S||(a=2),clearTimeout(i),u(0)):S||(a=1)))}return u(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function lA(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(t){return t!==void 0}function uA(t){return typeof t=="object"&&!Array.isArray(t)}function bh(t){return typeof t=="string"||t instanceof String}function wm(t){return Lh()&&t instanceof Blob}function Lh(){return typeof Blob<"u"}function Em(t,e,n,r){if(r<e)throw Mu(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Mu(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function M0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var nr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(nr||(nr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dA(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e,n,r,i,s,o,a,l,c,d,u,h=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,m)=>{this.resolve_=_,this.reject_=m,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new yo(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===nr.NO_ERROR,l=s.getStatus();if(!a||dA(l,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===nr.ABORT;r(!1,new yo(!1,null,d));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new yo(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());cA(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Oh();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?D0():XP();o(l)}else{const l=JP();o(l)}};this.canceled_?n(!1,new yo(!1,null,!0)):this.backoffId_=aA(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&lA(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class yo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function fA(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function pA(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function mA(t,e){e&&(t["X-Firebase-GMPID"]=e)}function gA(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function _A(t,e,n,r,i,s,o=!0){const a=M0(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return mA(c,e),fA(c,n),pA(c,s),gA(c,r),new hA(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vA(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function yA(...t){const e=vA();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Lh())return new Blob(t);throw new oe(se.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function wA(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EA(t){if(typeof atob>"u")throw iA("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class vc{constructor(e,n){this.data=e,this.contentType=n||null}}function SA(t,e){switch(t){case Pt.RAW:return new vc(F0(e));case Pt.BASE64:case Pt.BASE64URL:return new vc(U0(t,e));case Pt.DATA_URL:return new vc(IA(e),TA(e))}throw Oh()}function F0(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function CA(t){let e;try{e=decodeURIComponent(t)}catch{throw ts(Pt.DATA_URL,"Malformed data URL.")}return F0(e)}function U0(t,e){switch(t){case Pt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ts(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Pt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ts(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=EA(e)}catch(i){throw i.message.includes("polyfill")?i:ts(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class j0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ts(Pt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=kA(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function IA(t){const e=new j0(t);return e.base64?U0(Pt.BASE64,e.rest):CA(e.rest)}function TA(t){return new j0(t).contentType}function kA(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,n){let r=0,i="";wm(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(wm(this.data_)){const r=this.data_,i=wA(r,e,n);return i===null?null:new pn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new pn(r,!0)}}static getBlob(...e){if(Lh()){const n=e.map(r=>r instanceof pn?r.data_:r);return new pn(yA.apply(null,n))}else{const n=e.map(o=>bh(o)?SA(Pt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new pn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z0(t){let e;try{e=JSON.parse(t)}catch{return null}return uA(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RA(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function NA(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function B0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xA(t,e){return e}class Pe{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||xA}}let wo=null;function PA(t){return!bh(t)||t.length<2?t:B0(t)}function W0(){if(wo)return wo;const t=[];t.push(new Pe("bucket")),t.push(new Pe("generation")),t.push(new Pe("metageneration")),t.push(new Pe("name","fullPath",!0));function e(s,o){return PA(o)}const n=new Pe("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Pe("size");return i.xform=r,t.push(i),t.push(new Pe("timeCreated")),t.push(new Pe("updated")),t.push(new Pe("md5Hash",null,!0)),t.push(new Pe("cacheControl",null,!0)),t.push(new Pe("contentDisposition",null,!0)),t.push(new Pe("contentEncoding",null,!0)),t.push(new Pe("contentLanguage",null,!0)),t.push(new Pe("contentType",null,!0)),t.push(new Pe("metadata","customMetadata",!0)),wo=t,wo}function AA(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Ye(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function OA(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return AA(r,t),r}function $0(t,e,n){const r=z0(e);return r===null?null:OA(t,r,n)}function bA(t,e,n,r){const i=z0(e);if(i===null||!bh(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,u=t.fullPath,h="/b/"+o(d)+"/o/"+o(u),_=Sl(h,n,r),m=M0({alt:"media",token:c});return _+m})[0]}function LA(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Dh{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V0(t){if(!t)throw Oh()}function DA(t,e){function n(r,i){const s=$0(t,i,e);return V0(s!==null),s}return n}function MA(t,e){function n(r,i){const s=$0(t,i,e);return V0(s!==null),bA(s,i,t.host,t._protocol)}return n}function H0(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=QP():i=KP():n.getStatus()===402?i=qP(t.bucket):n.getStatus()===403?i=YP(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function G0(t){const e=H0(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=GP(t.path)),s.serverResponse=i.serverResponse,s}return n}function FA(t,e,n){const r=e.fullServerUrl(),i=Sl(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Dh(i,s,MA(t,n),o);return a.errorHandler=G0(e),a}function UA(t,e){const n=e.fullServerUrl(),r=Sl(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,c){}const a=new Dh(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=G0(e),a}function jA(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function zA(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=jA(null,e)),r}function BA(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let v="";for(let w=0;w<2;w++)v=v+Math.random().toString().slice(2);return v}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=zA(e,r,i),d=LA(c,n),u="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,h=`\r
--`+l+"--",_=pn.getBlob(u,r,h);if(_===null)throw nA();const m={name:c.fullPath},y=Sl(s,t.host,t._protocol),S="POST",g=t.maxUploadRetryTime,p=new Dh(y,S,DA(t,n),g);return p.urlParams=m,p.headers=o,p.body=_.uploadData(),p.errorHandler=H0(e),p}class WA{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=nr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=nr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=nr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Li("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Li("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Li("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Li("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Li("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class $A extends WA{initXhr(){this.xhr_.responseType="text"}}function Mh(){return new $A}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n){this._service=e,n instanceof Ye?this._location=n:this._location=Ye.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new pr(e,n)}get root(){const e=new Ye(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return B0(this._location.path)}get storage(){return this._service}get parent(){const e=RA(this._location.path);if(e===null)return null;const n=new Ye(this._location.bucket,e);return new pr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw sA(e)}}function VA(t,e,n){t._throwIfRoot("uploadBytes");const r=BA(t.storage,t._location,W0(),new pn(e,!0),n);return t.storage.makeRequestWithTokens(r,Mh).then(i=>({metadata:i,ref:t}))}function HA(t){t._throwIfRoot("getDownloadURL");const e=FA(t.storage,t._location,W0());return t.storage.makeRequestWithTokens(e,Mh).then(n=>{if(n===null)throw rA();return n})}function GA(t){t._throwIfRoot("deleteObject");const e=UA(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Mh)}function qA(t,e){const n=NA(t._location.path,e),r=new Ye(t._location.bucket,n);return new pr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(t){return/^[A-Za-z]+:\/\//.test(t)}function QA(t,e){return new pr(t,e)}function q0(t,e){if(t instanceof Fh){const n=t;if(n._bucket==null)throw tA();const r=new pr(n,n._bucket);return e!=null?q0(r,e):r}else return e!==void 0?qA(t,e):t}function YA(t,e){if(e&&KA(e)){if(t instanceof Fh)return QA(t,e);throw Mu("To use ref(service, url), the first argument must be a Storage instance.")}else return q0(t,e)}function Sm(t,e){const n=e==null?void 0:e[L0];return n==null?null:Ye.makeFromBucketSpec(n,t)}function JA(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:lv(i,t.app.options.projectId))}class Fh{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=b0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=VP,this._maxUploadRetryTime=HP,this._requests=new Set,i!=null?this._bucket=Ye.makeFromBucketSpec(i,this._host):this._bucket=Sm(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ye.makeFromBucketSpec(this._url,e):this._bucket=Sm(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Em("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Em("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new pr(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new oA(D0());{const o=_A(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Cm="@firebase/storage",Im="0.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0="storage";function XA(t,e,n){return t=ce(t),VA(t,e,n)}function ZA(t){return t=ce(t),HA(t)}function JO(t){return t=ce(t),GA(t)}function eO(t,e){return t=ce(t),YA(t,e)}function tO(t=il(),e){t=ce(t);const r=jn(t,K0).getImmediate({identifier:e}),i=sv("storage");return i&&nO(r,...i),r}function nO(t,e,n,r={}){JA(t,e,n,r)}function rO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Fh(n,r,i,e,yr)}function iO(){It(new ct(K0,rO,"PUBLIC").setMultipleInstances(!0)),Ve(Cm,Im,""),Ve(Cm,Im,"esm2017")}iO();const sO={apiKey:"AIzaSyBJm9fkGNwaMtHi5ChRDULA2UgLrFT8nvI",authDomain:"ranking-bp.firebaseapp.com",projectId:"ranking-bp",storageBucket:"ranking-bp.appspot.com",messagingSenderId:"1045536295453",appId:"1:1045536295453:web:27da7bdeee70b6ac8894f4",measurementId:"G-9HBZ9LWGLH"},Cl=vv(sO),Q0=WP(Cl);WN(Cl);new xt;const Ke=SR(Cl),oO=tO(Cl),aO=({isOpen:t,closeModal:e})=>{const[n,r]=E.useState(null);return E.useEffect(()=>{t&&(async()=>{try{const s=qe(Ke,"reglamentos"),o=await li(s);if(o.exists()){const a=o.val(),l=Object.values(a).pop();r(l.fileURL)}else console.log("No se encontró ningún reglamento.")}catch(s){console.error("Error al obtener el reglamento:",s)}})()},[t]),t?f.jsx("div",{className:"modal-overlay",children:f.jsxs("div",{className:"modal-content",children:[f.jsx("h2",{children:"Reglamento"}),n?f.jsx("iframe",{src:n,title:"Reglamento",width:"100%",height:"600px",style:{border:"none"}}):f.jsx("p",{children:"Cargando reglamento..."}),f.jsx("button",{className:"close-button",onClick:e,children:"Cerrar"})]})}):null},lO="/assets/logo-HnVQbui9.png",Y0=()=>{const[t,e]=E.useState(!1),n=()=>{e(!0)},r=()=>{e(!1)},i=(s,o)=>{s.preventDefault();const a=document.getElementById(o);a&&a.scrollIntoView({behavior:"smooth"})};return f.jsxs("header",{className:"header",children:[f.jsxs("div",{className:"logo",children:[f.jsx("img",{src:lO,alt:"Logo",className:"logo-img"}),f.jsx("span",{className:"neon-text",children:"RANKING PADEL"})]}),f.jsxs("nav",{className:"nav",children:[f.jsx("button",{onClick:s=>i(s,"canchas"),className:"nav-button",children:"Canchas"}),f.jsx("button",{onClick:s=>i(s,"torneos"),className:"nav-button",children:"Torneos"}),f.jsx("button",{onClick:s=>i(s,"jugadores"),className:"nav-button",children:"Jugadores"}),f.jsx("button",{onClick:s=>i(s,"ranking"),className:"nav-button",children:"Ranking"}),f.jsx("button",{onClick:n,className:"nav-button",children:"Reglamento"})]}),f.jsx(aO,{isOpen:t,closeModal:r})]})},Sr=E.createContext(),cO=Ht.memo(({children:t})=>{const[e,n]=E.useState([]),[r,i]=E.useState([]),[s,o]=E.useState([]),[a,l]=E.useState([]);return E.useEffect(()=>{const c=async()=>{const m=qe(Ke,"banners"),y=qe(Ke,"jugadores"),S=qe(Ke,"torneos"),g=qe(Ke,"clubs"),p=async(v,w,T)=>{const k=(await li(w)).val(),N=k?Array.isArray(k)?k:Object.values(k):[];N.length>0&&localStorage.setItem(v,JSON.stringify(N)),T(N)};await p("banners",m,n),await p("jugadores",y,i),await p("torneos",S,o),await p("clubs",g,l)},d=JSON.parse(localStorage.getItem("banners"))||[],u=JSON.parse(localStorage.getItem("jugadores"))||[],h=JSON.parse(localStorage.getItem("torneos"))||[],_=JSON.parse(localStorage.getItem("clubs"))||[];d.length&&n(d),u.length&&i(u),h.length&&o(h),_.length&&l(_),c()},[]),E.useEffect(()=>{const c=async()=>{const d=new Date().toISOString().split("T")[0],u=s.filter(m=>m.fecha.split("/").reverse().join("-")>=d),h=qe(Ke,"torneos");(await li(h)).forEach(m=>{m.val().fecha.split("/").reverse().join("-")<d&&cR(qe(Ke,`torneos/${m.key}`))}),o(u)};s.length&&c()},[s]),f.jsx(Sr.Provider,{value:{banners:e,jugadores:r,setJugadores:i,torneos:s,clubes:a},children:t})}),uO=()=>{const{banners:t}=E.useContext(Sr),[e,n]=E.useState(0),[r,i]=E.useState(!0),s=E.useRef(null),o=E.useRef(null),a=E.useRef(null);E.useEffect(()=>{if(!t||t.length===0)return;const u=S=>{const g=s.current;S>=t.length&&n(0),S<0&&n(t.length-1),g.style.transform=`translateX(${-e*100}%)`,h()},h=()=>{o.current.querySelectorAll(".dot").forEach((g,p)=>{g.classList.toggle("active",p===e)})},_=()=>{a.current=setInterval(()=>{r&&n(S=>(S+1)%t.length)},3e3)},m=()=>{let S=0,g=0,p=0,v=!1;const w=s.current,T=N=>{S=N.clientX,w.style.transition="none",v=!0,i(!1)},R=N=>{v&&(g=N.clientX-S,w.style.transform=`translateX(${g+p}px)`)},k=N=>{if(!v)return;const V=N.clientX-S;let b=e;V<-50?b=(e+1)%t.length:V>50&&(b=(e-1+t.length)%t.length),n(b),u(b),p+=g,w.style.transition="transform 0.3s ease-out",v=!1,i(!0),S=void 0,g=0};return w.addEventListener("pointerdown",T),w.addEventListener("pointermove",R),w.addEventListener("pointerup",k),w.addEventListener("pointercancel",()=>{v=!1}),()=>{w.removeEventListener("pointerdown",T),w.removeEventListener("pointermove",R),w.removeEventListener("pointerup",k)}};u(e),_();const y=m();return()=>{clearInterval(a.current),y()}},[e,r,t]);const l=()=>{n(u=>(u+1)%t.length)},c=()=>{n(u=>(u-1+t.length)%t.length)},d=u=>{n(u)};return f.jsxs("div",{className:"banner-slider",children:[f.jsx("div",{className:"slides",ref:s,children:t&&t.length>0?t.map((u,h)=>f.jsx("div",{className:"slide",children:f.jsx("a",{href:u.link,children:f.jsx("img",{src:u.photoURL,alt:u.title,className:"banner-slide-image",onError:_=>{_.target.onerror=null,_.target.src="https://via.placeholder.com/150"}})})},h)):f.jsx("div",{children:"No banners available"})}),f.jsx("div",{className:"dots",ref:o,children:t&&t.map((u,h)=>f.jsx("span",{className:`dot ${h===e?"active":""}`,onClick:()=>d(h)},h))}),f.jsx("button",{className:"prev",onClick:c,children:"❮"}),f.jsx("button",{className:"next",onClick:l,children:"❯"})]})};var J0={exports:{}},dO="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",hO=dO,fO=hO;function X0(){}function Z0(){}Z0.resetWarningCache=X0;var pO=function(){function t(r,i,s,o,a,l){if(l!==fO){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Z0,resetWarningCache:X0};return n.PropTypes=n,n};J0.exports=pO();var mO=J0.exports;const W=xm(mO);var ew={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Tm=Ht.createContext&&Ht.createContext(ew),gO=["attr","size","title"];function _O(t,e){if(t==null)return{};var n=vO(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function vO(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function La(){return La=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},La.apply(this,arguments)}function km(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Da(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?km(Object(n),!0).forEach(function(r){yO(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):km(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function yO(t,e,n){return e=wO(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function wO(t){var e=EO(t,"string");return typeof e=="symbol"?e:e+""}function EO(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function tw(t){return t&&t.map((e,n)=>Ht.createElement(e.tag,Da({key:n},e.attr),tw(e.child)))}function dt(t){return e=>Ht.createElement(SO,La({attr:Da({},t.attr)},e),tw(t.child))}function SO(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=_O(t,gO),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Ht.createElement("svg",La({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Da(Da({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Ht.createElement("title",null,s),t.children)};return Tm!==void 0?Ht.createElement(Tm.Consumer,null,n=>e(n)):e(ew)}function CO(t){return dt({tag:"svg",attr:{viewBox:"0 0 488 512"},child:[{tag:"path",attr:{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"},child:[]}]})(t)}function nw(t){return dt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(t)}function IO(t){return dt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(t)}function XO(t){return dt({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(t)}function ZO(t){return dt({tag:"svg",attr:{viewBox:"0 0 256 512"},child:[{tag:"path",attr:{d:"M128 0c35.346 0 64 28.654 64 64s-28.654 64-64 64c-35.346 0-64-28.654-64-64S92.654 0 128 0m119.283 354.179l-48-192A24 24 0 0 0 176 144h-11.36c-22.711 10.443-49.59 10.894-73.28 0H80a24 24 0 0 0-23.283 18.179l-48 192C4.935 369.305 16.383 384 32 384h56v104c0 13.255 10.745 24 24 24h32c13.255 0 24-10.745 24-24V384h56c15.591 0 27.071-14.671 23.283-29.821z"},child:[]}]})(t)}function eb(t){return dt({tag:"svg",attr:{viewBox:"0 0 192 512"},child:[{tag:"path",attr:{d:"M96 0c35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64S60.654 0 96 0m48 144h-11.36c-22.711 10.443-49.59 10.894-73.28 0H48c-26.51 0-48 21.49-48 48v136c0 13.255 10.745 24 24 24h16v136c0 13.255 10.745 24 24 24h64c13.255 0 24-10.745 24-24V352h16c13.255 0 24-10.745 24-24V192c0-26.51-21.49-48-48-48z"},child:[]}]})(t)}function rw(t){return dt({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(t)}function iw(t){return dt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"},child:[]}]})(t)}function tb(t){return dt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},child:[]}]})(t)}function nb(t){return dt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(t)}function rb(t){return dt({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(t)}function ib(t){return dt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(t)}const sw=({torneo:t,onClose:e})=>t?f.jsx("div",{className:"modal-overlay",onClick:e,children:f.jsxs("div",{className:"modal-content",onClick:n=>n.stopPropagation(),children:[f.jsx("h3",{children:t.nombre}),f.jsxs("p",{children:[f.jsx(IO,{})," ",t.fecha]}),f.jsxs("p",{children:[f.jsx(rw,{})," ",t.direccion]}),f.jsxs("p",{children:[f.jsx(iw,{})," ",f.jsx("a",{href:`tel:${t.whatsapp}`,children:t.whatsapp})]}),f.jsxs("p",{children:["Hora: ",t.hora]}),t.archivoURL&&f.jsx("p",{children:f.jsx("img",{src:t.archivoURL,alt:t.nombre,className:"torneo-image"})})]})}):null;sw.propTypes={torneo:W.shape({nombre:W.string.isRequired,fecha:W.string.isRequired,hora:W.string,telefono:W.string,ubicacion:W.string,archivoURL:W.string}),onClose:W.func.isRequired};const TO=()=>{const{torneos:t}=E.useContext(Sr),[e,n]=E.useState(null),[r,i]=E.useState([]);E.useEffect(()=>{const a=new Date().toISOString().split("T")[0],l=t.filter(c=>c.fecha.split("/").reverse().join("-")>=a);i(l)},[t]);const s=a=>{n({nombre:a.nombre||"Nombre no disponible",fecha:a.fecha||"Fecha no disponible",direccion:a.ubicacion||"Ubicación no disponible",lugar:"",whatsapp:a.telefono||"Número no disponible",archivoURL:a.archivoURL||"",hora:a.hora||"Hora no disponible"})},o=()=>{n(null)};return f.jsxs("div",{className:"cards-torneos-container",children:[r.length>0?r.map(a=>f.jsxs("div",{className:"card-torneo",children:[f.jsx("h3",{className:"card-title",children:a.nombre}),f.jsx("p",{className:"card-date",children:a.fecha}),f.jsx("p",{className:"card-description",children:a.descripcion||"Descripción no disponible"}),f.jsx("button",{className:"btn-inscribir",onClick:()=>s(a),children:"Inscribirse"})]},a.id)):f.jsx("p",{children:"No hay torneos disponibles."}),f.jsx(sw,{torneo:e,onClose:o})]})},ow=({jugadores:t,onClose:e,genero:n})=>{const[r,i]=E.useState("conPuntos"),s=t.filter(l=>l.points>0).sort((l,c)=>c.points-l.points),o=t.filter(l=>l.points===0).sort((l,c)=>l.name.localeCompare(c.name)),a=l=>{l.target.className.includes("modal-gnr")&&e()};return f.jsx("div",{className:"modal-gnr",onClick:a,children:f.jsxs("div",{className:"modal-gnr-content",onClick:l=>l.stopPropagation(),children:[f.jsx("h2",{className:"modal-gnr-title",children:n==="masculino"?"Jugadores Masculinos":"Jugadoras Femeninas"}),f.jsxs("div",{className:"modal-gnr-player-list",children:[r==="conPuntos"&&s.map(l=>f.jsxs("div",{className:"modal-gnr-player-card",children:[f.jsx("img",{src:l.photoURL,alt:l.name,className:"modal-gnr-player-photo"}),f.jsxs("div",{className:"modal-gnr-player-info",children:[f.jsx("h4",{children:l.name}),f.jsxs("p",{children:[l.points," puntos"]})]})]},l.id)),r==="sinPuntos"&&o.map(l=>f.jsxs("div",{className:"modal-gnr-player-card",children:[f.jsx("img",{src:l.photoURL,alt:l.name,className:"modal-gnr-player-photo"}),f.jsxs("div",{className:"modal-gnr-player-info",children:[f.jsx("h4",{children:l.name}),f.jsx("p",{children:"Sin puntos"})]})]},l.id))]}),f.jsxs("div",{className:"modal-gnr-tabs-container",children:[f.jsx("button",{className:`modal-gnr-tab ${r==="conPuntos"?"active":""}`,onClick:()=>i("conPuntos"),children:"Con Puntos"}),f.jsx("button",{className:`modal-gnr-tab ${r==="sinPuntos"?"active":""}`,onClick:()=>i("sinPuntos"),children:"Sin Puntos"})]})]})})};ow.propTypes={jugadores:W.arrayOf(W.shape({id:W.string.isRequired,name:W.string.isRequired,points:W.number.isRequired,photoURL:W.string.isRequired})).isRequired,onClose:W.func.isRequired,genero:W.string.isRequired};const kO=()=>{const{jugadores:t}=E.useContext(Sr),[e,n]=E.useState(!1),[r,i]=E.useState([]),[s,o]=E.useState(""),a=d=>t.filter(u=>u.gender===d),l=d=>{const u=a(d);i(u),o(d),n(!0)},c=()=>{n(!1),o("")};return f.jsxs("div",{className:"container-jugadores",children:[f.jsx("div",{className:"player-box male",onClick:()=>l("masculino"),children:f.jsx("h2",{children:"Jugadores Masculinos"})}),f.jsx("div",{className:"player-box female",onClick:()=>l("femenino"),children:f.jsx("h2",{children:"Jugadoras Femeninas"})}),e&&f.jsx(ow,{jugadores:r,onClose:c,genero:s})]})},aw=({club:t,onClose:e})=>t?f.jsx("div",{className:"modal-clubes-overlay",onClick:e,children:f.jsxs("div",{className:"modal-clubes-content",onClick:n=>n.stopPropagation(),children:[f.jsx("h3",{children:t.name}),f.jsxs("p",{children:[f.jsx(rw,{})," ",t.location]}),f.jsxs("p",{children:[f.jsx(iw,{})," ",f.jsx("a",{href:`tel:${t.phone}`,children:t.phone})]}),f.jsx("img",{src:t.logoURL,alt:"Logo del Club",className:"modal-clubes-logo"}),f.jsx("button",{className:"modal-clubes-close",onClick:e,children:"Cerrar"})]})}):null;aw.propTypes={club:W.shape({name:W.string.isRequired,location:W.string,phone:W.string,logoURL:W.string}),onClose:W.func.isRequired};const RO=()=>{const{clubes:t}=E.useContext(Sr),[e,n]=E.useState([]),[r,i]=E.useState(null),[s,o]=E.useState(!1);E.useEffect(()=>{if(console.log("Datos de clubes recibidos:",t),t){const c=Array.isArray(t)?t:Object.values(t),d=c.filter(u=>u.logoURL).map(u=>({...u,logoURL:u.logoURL}));console.log("Clubes en el contexto:",c),console.log("Logos filtrados:",d),n(d)}else n([])},[t]);const a=c=>{i(c),o(!0)},l=()=>{o(!1),i(null)};return f.jsxs("div",{className:"carousel-container",children:[f.jsx("h1",{className:"title",children:"Canchas Belgranenses"}),f.jsx("div",{className:"carousel",children:f.jsx("div",{className:"carousel-inner",children:e.length>0?e.map((c,d)=>f.jsx("div",{className:"logo-circle",onClick:()=>a(e[d]),children:f.jsx("img",{src:c.logoURL,alt:`Logo ${d+1}`,onError:u=>{u.target.onerror=null,u.target.src="https://via.placeholder.com/150"}})},d)):f.jsx("p",{children:"No hay logos disponibles."})})}),s&&f.jsx(aw,{club:r,onClose:l})]})},Uh=({isOpen:t,onClose:e,participants:n})=>t?f.jsx("div",{className:"modal-overlay",children:f.jsxs("div",{className:"modal-content",children:[f.jsxs("div",{className:"modal-header",children:[f.jsx("h2",{children:"Ranking Completo"}),f.jsx("button",{className:"close-btn",onClick:e,children:"Cerrar"})]}),f.jsxs("table",{children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:"#"}),f.jsx("th",{children:"Nombre"}),f.jsx("th",{children:"Puntos"})]})}),f.jsx("tbody",{children:n.map(r=>f.jsxs("tr",{style:r.rank===1?{backgroundColor:"#5c5be5",color:"#fff",fontWeight:"bold"}:{},children:[f.jsx("td",{children:r.rank}),f.jsx("td",{children:r.name}),f.jsxs("td",{className:"points-cell",children:[r.points,r.rank===1&&f.jsx("img",{className:"gold-medal",src:"https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true",alt:"gold medal"})]})]},r.id))})]})]})}):null;Uh.propTypes={isOpen:W.bool.isRequired,onClose:W.func.isRequired,participants:W.arrayOf(W.shape({id:W.number.isRequired,rank:W.number.isRequired,name:W.string.isRequired,points:W.string.isRequired})).isRequired};const Rm="/assets/tennis-rZAVwrir.ico",lw=({selectedCategory:t,onCategoryChange:e,categories:n})=>{const[r,i]=E.useState(!1),s=o=>{e(o),i(!1)};return f.jsxs("div",{className:`select-menu ${r?"active":""}`,children:[f.jsxs("div",{className:"select-btn",onClick:()=>i(!r),children:[f.jsx("img",{src:Rm,alt:"Tennis Icon",className:"select-icon"}),f.jsx("span",{className:"sBtn-text",children:t||"Selecciona una categoría"})]}),f.jsx("ul",{className:"options",children:n.map((o,a)=>f.jsxs("li",{className:"option",onClick:()=>s(o),children:[f.jsx("img",{src:Rm,alt:"Tennis Icon",className:"category-icon"}),f.jsx("span",{className:"option-text",children:o})]},a))})]})},NO=()=>{const{jugadores:t}=E.useContext(Sr),[e,n]=E.useState(!1),[r,i]=E.useState("Septima"),o=(Array.isArray(t)?t:[]).filter(m=>m!=null),a=o.filter(m=>m.gender==="femenino").map(m=>m.category),l=[...new Set(a)],c=l.length>0,d=o.filter(m=>m.gender==="femenino"&&(r==="Selecciona una categoría"?m.category==="Septima":m.category===r)).sort((m,y)=>y.points-m.points).map((m,y)=>({...m,rank:y+1})),u=()=>n(!0),h=()=>n(!1),_=m=>i(m);return f.jsxs("div",{className:"ranking-column",children:[f.jsx("div",{id:"header",children:f.jsx("h1",{children:"Ranking Femenino"})}),f.jsxs("div",{className:"select-container",children:[f.jsx("div",{className:"arrow-bounce",children:f.jsx(nw,{color:"green",size:24})}),f.jsx(lw,{selectedCategory:r,onCategoryChange:_,categories:c?l:["No hay categorías disponibles"],placeholder:"Selecciona una categoría"})]}),f.jsxs("div",{id:"leaderboard",children:[f.jsx("div",{className:"ribbon"}),f.jsx("table",{children:f.jsx("tbody",{children:d.length>0?d.slice(0,5).map((m,y)=>f.jsxs("tr",{className:y===0?"highlight-row":"",children:[f.jsx("td",{className:"number",children:m.rank}),f.jsx("td",{className:"name",children:m.name}),f.jsxs("td",{className:"points",children:[m.points,y===0&&f.jsx("img",{className:"gold-medal",src:"https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true",alt:"gold medal"})]})]},m.id)):f.jsx("tr",{children:f.jsx("td",{colSpan:"3",children:"No hay jugadoras disponibles."})})})}),f.jsx("button",{className:"ver-mas-btn",onClick:u,children:"Ver más"})]}),f.jsx(Uh,{isOpen:e,onClose:h,participants:d})]})},xO=()=>{const{jugadores:t}=E.useContext(Sr),[e,n]=E.useState(!1),[r,i]=E.useState("Septima"),o=(Array.isArray(t)?t:[]).filter(m=>m!=null),a=o.filter(m=>m.gender==="masculino").map(m=>m.category),l=[...new Set(a)],c=l.length>0,d=o.filter(m=>m.gender==="masculino"&&(r==="Selecciona una categoría"?m.category==="Septima":m.category===r)).sort((m,y)=>y.points-m.points).map((m,y)=>({...m,rank:y+1})),u=()=>n(!0),h=()=>n(!1),_=m=>i(m);return f.jsxs("div",{className:"ranking-column",children:[f.jsx("div",{id:"header",children:f.jsx("h1",{children:"Ranking Masculino"})}),f.jsxs("div",{className:"select-container",children:[f.jsx("div",{className:"arrow-bounce",children:f.jsx(nw,{color:"green",size:24})}),f.jsx(lw,{selectedCategory:r,onCategoryChange:_,categories:c?l:["No hay categorías disponibles"],placeholder:"Selecciona una categoría"})]}),f.jsxs("div",{id:"leaderboard",children:[f.jsx("div",{className:"ribbon"}),f.jsx("table",{children:f.jsx("tbody",{children:d.length>0?d.slice(0,5).map((m,y)=>f.jsxs("tr",{className:y===0?"highlight-row":"",children:[f.jsx("td",{className:"number",children:m.rank}),f.jsx("td",{className:"name",children:m.name}),f.jsxs("td",{className:"points",children:[m.points,y===0&&f.jsx("img",{className:"gold-medal",src:"https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true",alt:"gold medal"})]})]},m.id)):f.jsx("tr",{children:f.jsx("td",{colSpan:"3",children:"No hay jugadores disponibles."})})})}),f.jsx("button",{className:"ver-mas-btn",onClick:u,children:"Ver más"})]}),f.jsx(Uh,{isOpen:e,onClose:h,participants:d})]})},PO=()=>f.jsxs("div",{className:"ranking-container",children:[f.jsx(NO,{}),f.jsx(xO,{})]}),cw=()=>{const[t,e]=E.useState(""),n=async()=>{try{const r=qe(Ke,"whatsappNumber"),i=await li(r);i.exists()?e(i.val()):console.log("No se encontró el número de WhatsApp en Firebase.")}catch(r){console.error("Error al obtener el número de WhatsApp:",r)}};return E.useEffect(()=>{n()},[]),f.jsxs("div",{className:"wh-api wh-fixed",children:[f.jsx("a",{href:`https://wa.me/${t}`,target:"_blank",rel:"noopener noreferrer",children:f.jsx("button",{className:"wh-ap-btn"})}),f.jsx("span",{className:"wh-ap-tooltip",children:"CONTACTANOS"})]})},AO=()=>f.jsxs("div",{children:[f.jsx(Y0,{}),f.jsx(uO,{}),f.jsx("section",{id:"canchas",children:f.jsx(RO,{})}),f.jsx("section",{id:"torneos",children:f.jsx(TO,{})}),f.jsx("section",{id:"jugadores",children:f.jsx(kO,{})}),f.jsx("div",{className:"rankings-container",children:f.jsx("div",{className:"ranking-container",children:f.jsx("section",{id:"ranking",children:f.jsx(PO,{})})})}),f.jsx(cw,{})]}),OO=()=>{const t=J_(),e=new xt,n=async()=>{try{const i=(await Jx(Q0,e)).user;console.log("User Info:",i),t("/admin")}catch(r){console.error("Error al iniciar sesión:",r.message)}};return f.jsxs("div",{className:"admin-login-container",children:[f.jsx("h1",{className:"admin-login-title",children:"Admin Login"}),f.jsxs("button",{className:"admin-login-button",onClick:n,children:[f.jsx(CO,{className:"admin-google-icon"}),f.jsx("span",{children:"Login with Google"})]})]})},bO="modulepreload",LO=function(t){return"/"+t},Nm={},rn=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.allSettled(n.map(a=>{if(a=LO(a),a in Nm)return;Nm[a]=!0;const l=a.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${c}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":bO,l||(d.as="script"),d.crossOrigin="",d.href=a,o&&d.setAttribute("nonce",o),document.head.appendChild(d),l)return new Promise((u,h)=>{d.addEventListener("load",u),d.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${a}`)))})}))}return i.then(s=>{for(const o of s||[]){if(o.status!=="rejected")continue;const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o.reason,window.dispatchEvent(a),!a.defaultPrevented)throw o.reason}return e()})},DO=()=>{const[t,e]=E.useState(""),[n,r]=E.useState(""),i=async()=>{try{const a=qe(Ke,"whatsappNumber"),l=await li(a);l.exists()&&e(l.val())}catch(a){console.error("Error al obtener el número de WhatsApp:",a)}};E.useEffect(()=>{i()},[]);const s=a=>{r(a.target.value)},o=async()=>{if(n.trim()===""){alert("Por favor, ingresa un número de WhatsApp válido.");return}try{const a=qe(Ke,"whatsappNumber");await bs(a,n),e(n),r(""),alert("Número de WhatsApp actualizado con éxito")}catch(a){console.error("Error al actualizar el número de WhatsApp:",a),alert("Hubo un error al actualizar el número de WhatsApp.")}};return f.jsxs("div",{className:"whatsapp-settings",children:[f.jsxs("h2",{children:["Número de WhatsApp Actual: ",t]}),f.jsx("input",{type:"text",value:n,onChange:s,placeholder:"Nuevo número de WhatsApp"}),f.jsx("button",{onClick:o,children:"Actualizar Número"})]})},MO=({onClick:t})=>f.jsx("button",{className:"agregar-reglamento-button",onClick:t,children:"Agregar Reglamento"}),uw=({onClose:t})=>{const[e,n]=E.useState(""),[r,i]=E.useState(null),[s,o]=E.useState(null),a=async()=>{try{const u=qe(Ke,"reglamentos"),h=pR(u,fR(1)),_=await li(h);if(_.exists()){const m=_.val(),y=Object.keys(m)[0];o(y)}}catch(u){console.error("Error al obtener el último reglamento:",u)}};E.useState(()=>{a()},[]);const l=u=>{i(u.target.files[0])},c=async u=>{if(u.preventDefault(),!e||!r){alert("Por favor, ingrese un título y seleccione un archivo.");return}try{const h=eO(oO,`reglamentos/${r.name}`);await XA(h,r);const _=await ZA(h);if(s){const m=qe(Ke,`reglamentos/${s}`);await bs(m,{title:e,fileURL:_})}else{const m=qe(Ke,"reglamentos");await bs(m,{title:e,fileURL:_})}alert("Reglamento guardado con éxito"),t()}catch(h){console.error("Error al guardar el reglamento:",h),alert("Hubo un error al guardar el reglamento.")}},d=u=>{u.target.classList.contains("reglamento-modal__overlay")&&t()};return f.jsx("div",{className:"reglamento-modal__overlay",onClick:d,children:f.jsxs("div",{className:"reglamento-modal__content",children:[f.jsx("h2",{className:"reglamento-modal__title",children:"Cargar Reglamento de Padel"}),f.jsxs("form",{className:"reglamento-modal__form",onSubmit:c,children:[f.jsxs("div",{className:"reglamento-modal__form-group",children:[f.jsx("label",{htmlFor:"title",className:"reglamento-modal__label",children:"Título"}),f.jsx("textarea",{id:"title",value:e,onChange:u=>n(u.target.value),placeholder:"Ingrese el título",className:"reglamento-modal__textarea"})]}),f.jsxs("div",{className:"reglamento-modal__form-group",children:[f.jsx("label",{htmlFor:"file",className:"reglamento-modal__label",children:"Archivo del Reglamento"}),f.jsx("input",{type:"file",id:"file",onChange:l,className:"reglamento-modal__input-file"})]}),f.jsxs("div",{className:"reglamento-modal__actions",children:[f.jsx("button",{type:"submit",className:"reglamento-modal__button reglamento-modal__button--save",children:"Guardar"}),f.jsx("button",{type:"button",onClick:t,className:"reglamento-modal__button reglamento-modal__button--cancel",children:"Cancelar"})]})]})]})})};uw.propTypes={onClose:W.func.isRequired};const FO=E.lazy(()=>rn(()=>import("./CargarBannerButton-DrjHhwhg.js"),__vite__mapDeps([0,1]))),UO=E.lazy(()=>rn(()=>import("./AgendaTorneoButton-DuNh6C-K.js"),__vite__mapDeps([2,3]))),jO=E.lazy(()=>rn(()=>import("./AgregarJugadorButton-BsuGMQcy.js"),__vite__mapDeps([4,5]))),zO=E.lazy(()=>rn(()=>import("./AgregarClubButton-Cur2Vcs4.js"),__vite__mapDeps([6,7]))),BO=E.lazy(()=>rn(()=>import("./BannerModal-Bp2hUddT.js"),__vite__mapDeps([8,9]))),WO=E.lazy(()=>rn(()=>import("./AgendaTorneoModal-B4CFMZRr.js"),__vite__mapDeps([10,11]))),$O=E.lazy(()=>rn(()=>import("./AgregarJugadorModal-nB73R3GE.js"),__vite__mapDeps([12,13,14]))),VO=E.lazy(()=>rn(()=>import("./AgregarClubModal-CyTtH7-j.js"),__vite__mapDeps([15,16]))),HO=E.lazy(()=>rn(()=>import("./PlayerTable-CVeuRdJ1.js"),__vite__mapDeps([17,13,18]))),GO=()=>{const t=J_(),[e,n]=E.useState(!1),[r,i]=E.useState(!1),[s,o]=E.useState(!1),[a,l]=E.useState(!1),[c,d]=E.useState(!1),[u,h]=E.useState("1234567890");return E.useEffect(()=>{const _=Q0.onAuthStateChanged(m=>{m||t("/admin-login")});return()=>_()},[t]),f.jsxs("div",{children:[f.jsx("h1",{children:"Admin Panel"}),f.jsx(cw,{phoneNumber:u}),f.jsxs("div",{className:"admin-panel-buttons",children:[f.jsx(E.Suspense,{fallback:f.jsx("div",{children:"Loading CargaBannerButton..."}),children:f.jsx(FO,{onClick:()=>n(!0)})}),f.jsx(E.Suspense,{fallback:f.jsx("div",{children:"Loading AgendaTorneoButton..."}),children:f.jsx(UO,{onClick:()=>i(!0)})}),f.jsx(E.Suspense,{fallback:f.jsx("div",{children:"Loading AgregarJugadorButton..."}),children:f.jsx(jO,{onClick:()=>o(!0)})}),f.jsx(E.Suspense,{fallback:f.jsx("div",{children:"Loading AgregarClubButton..."}),children:f.jsx(zO,{onClick:()=>l(!0)})}),f.jsx(E.Suspense,{fallback:f.jsx("div",{children:"Loading AgregarReglamentoButton..."}),children:f.jsx(MO,{onClick:()=>d(!0)})})]}),f.jsx(DO,{currentWhatsAppNumber:u}),f.jsx(E.Suspense,{fallback:f.jsx("div",{children:"Loading BannerModal..."}),children:e&&f.jsx(BO,{onClose:()=>n(!1)})}),f.jsx(E.Suspense,{fallback:f.jsx("div",{children:"Loading AgendaTorneoModal..."}),children:r&&f.jsx(WO,{onClose:()=>i(!1)})}),f.jsx(E.Suspense,{fallback:f.jsx("div",{children:"Loading AgregarJugadorModal..."}),children:s&&f.jsx($O,{onClose:()=>o(!1)})}),f.jsx(E.Suspense,{fallback:f.jsx("div",{children:"Loading AgregarClubModal..."}),children:a&&f.jsx(VO,{onClose:()=>l(!1)})}),f.jsx(E.Suspense,{fallback:f.jsx("div",{children:"Loading ReglamentoModal..."}),children:c&&f.jsx(uw,{onClose:()=>d(!1)})}),f.jsx(E.Suspense,{fallback:f.jsx("div",{children:"Loading PlayerTable..."}),children:f.jsx(HO,{})})]})},qO=()=>f.jsx(cO,{children:f.jsxs(AC,{children:[f.jsx(Y0,{}),f.jsxs(NC,{children:[f.jsx(bo,{path:"/",element:f.jsx(AO,{})}),f.jsx(bo,{path:"/admin-login",element:f.jsx(OO,{})}),f.jsx(bo,{path:"/admin",element:f.jsx(GO,{})})]})]})});W_(document.getElementById("root")).render(f.jsx(E.StrictMode,{children:f.jsx(qO,{})}));export{Sr as A,nb as F,W as P,qe as a,eO as b,ZA as c,Ke as d,JO as e,cR as f,li as g,bs as h,xm as i,f as j,eb as k,ZO as l,tb as m,rb as n,YO as o,KO as p,XO as q,E as r,oO as s,ib as t,XA as u,QO as v};
