const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CargarBannerButton-D1F6uNve.js","assets/CargarBannerButton-D_Zn8y1v.css","assets/AgendaTorneoButton-BUG596JW.js","assets/AgendaTorneoButton-BiKADMRM.css","assets/AgregarJugadorButton-CKN-P0xn.js","assets/AgregarJugadorButton-BYSvOtnj.css","assets/AgregarClubButton-CL2vujON.js","assets/AgregarClubButton-BODDAt3a.css","assets/BannerModal-Bgmyfq8N.js","assets/BannerModal-G-EZahX6.css","assets/AgendaTorneoModal-DcEJ_RKk.js","assets/AgendaTorneoModal-BgQ-TdnX.css","assets/AgregarJugadorModal-YGqom93x.js","assets/AgregarJugadorModal-cqR10tkx.css","assets/AgregarClubModal-BwcJCqZK.js","assets/AgregarClubModal-DZwRqFFw.css","assets/PlayerTable-B-zsJdUi.js","assets/PlayerTable-nM8KOFTZ.css"])))=>i.map(i=>d[i]);
function lw(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Tm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var km={exports:{}},Da={},Rm={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bs=Symbol.for("react.element"),uw=Symbol.for("react.portal"),cw=Symbol.for("react.fragment"),dw=Symbol.for("react.strict_mode"),hw=Symbol.for("react.profiler"),fw=Symbol.for("react.provider"),pw=Symbol.for("react.context"),mw=Symbol.for("react.forward_ref"),gw=Symbol.for("react.suspense"),_w=Symbol.for("react.memo"),vw=Symbol.for("react.lazy"),Mh=Symbol.iterator;function yw(t){return t===null||typeof t!="object"?null:(t=Mh&&t[Mh]||t["@@iterator"],typeof t=="function"?t:null)}var Nm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pm=Object.assign,xm={};function ui(t,e,n){this.props=t,this.context=e,this.refs=xm,this.updater=n||Nm}ui.prototype.isReactComponent={};ui.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ui.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Am(){}Am.prototype=ui.prototype;function bc(t,e,n){this.props=t,this.context=e,this.refs=xm,this.updater=n||Nm}var Dc=bc.prototype=new Am;Dc.constructor=bc;Pm(Dc,ui.prototype);Dc.isPureReactComponent=!0;var Fh=Array.isArray,Om=Object.prototype.hasOwnProperty,Lc={current:null},bm={key:!0,ref:!0,__self:!0,__source:!0};function Dm(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Om.call(e,r)&&!bm.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:bs,type:t,key:s,ref:o,props:i,_owner:Lc.current}}function ww(t,e){return{$$typeof:bs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Mc(t){return typeof t=="object"&&t!==null&&t.$$typeof===bs}function Ew(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Uh=/\/+/g;function Cl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ew(""+t.key):e.toString(36)}function yo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case bs:case uw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Cl(o,0):r,Fh(i)?(n="",t!=null&&(n=t.replace(Uh,"$&/")+"/"),yo(i,e,n,"",function(u){return u})):i!=null&&(Mc(i)&&(i=ww(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Uh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Fh(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Cl(s,a);o+=yo(s,e,n,l,i)}else if(l=yw(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Cl(s,a++),o+=yo(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ys(t,e,n){if(t==null)return t;var r=[],i=0;return yo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Sw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Me={current:null},wo={transition:null},Cw={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:wo,ReactCurrentOwner:Lc};function Lm(){throw Error("act(...) is not supported in production builds of React.")}j.Children={map:Ys,forEach:function(t,e,n){Ys(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ys(t,function(){e++}),e},toArray:function(t){return Ys(t,function(e){return e})||[]},only:function(t){if(!Mc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};j.Component=ui;j.Fragment=cw;j.Profiler=hw;j.PureComponent=bc;j.StrictMode=dw;j.Suspense=gw;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cw;j.act=Lm;j.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Pm({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Lc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Om.call(e,l)&&!bm.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:bs,type:t.type,key:i,ref:s,props:r,_owner:o}};j.createContext=function(t){return t={$$typeof:pw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:fw,_context:t},t.Consumer=t};j.createElement=Dm;j.createFactory=function(t){var e=Dm.bind(null,t);return e.type=t,e};j.createRef=function(){return{current:null}};j.forwardRef=function(t){return{$$typeof:mw,render:t}};j.isValidElement=Mc;j.lazy=function(t){return{$$typeof:vw,_payload:{_status:-1,_result:t},_init:Sw}};j.memo=function(t,e){return{$$typeof:_w,type:t,compare:e===void 0?null:e}};j.startTransition=function(t){var e=wo.transition;wo.transition={};try{t()}finally{wo.transition=e}};j.unstable_act=Lm;j.useCallback=function(t,e){return Me.current.useCallback(t,e)};j.useContext=function(t){return Me.current.useContext(t)};j.useDebugValue=function(){};j.useDeferredValue=function(t){return Me.current.useDeferredValue(t)};j.useEffect=function(t,e){return Me.current.useEffect(t,e)};j.useId=function(){return Me.current.useId()};j.useImperativeHandle=function(t,e,n){return Me.current.useImperativeHandle(t,e,n)};j.useInsertionEffect=function(t,e){return Me.current.useInsertionEffect(t,e)};j.useLayoutEffect=function(t,e){return Me.current.useLayoutEffect(t,e)};j.useMemo=function(t,e){return Me.current.useMemo(t,e)};j.useReducer=function(t,e,n){return Me.current.useReducer(t,e,n)};j.useRef=function(t){return Me.current.useRef(t)};j.useState=function(t){return Me.current.useState(t)};j.useSyncExternalStore=function(t,e,n){return Me.current.useSyncExternalStore(t,e,n)};j.useTransition=function(){return Me.current.useTransition()};j.version="18.3.1";Rm.exports=j;var S=Rm.exports;const gn=Tm(S),Iw=lw({__proto__:null,default:gn},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tw=S,kw=Symbol.for("react.element"),Rw=Symbol.for("react.fragment"),Nw=Object.prototype.hasOwnProperty,Pw=Tw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xw={key:!0,ref:!0,__self:!0,__source:!0};function Mm(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Nw.call(e,r)&&!xw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:kw,type:t,key:s,ref:o,props:i,_owner:Pw.current}}Da.Fragment=Rw;Da.jsx=Mm;Da.jsxs=Mm;km.exports=Da;var g=km.exports,Fm={exports:{}},Xe={},Um={exports:{}},jm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(x,D){var L=x.length;x.push(D);e:for(;0<L;){var ae=L-1>>>1,ge=x[ae];if(0<i(ge,D))x[ae]=D,x[L]=ge,L=ae;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var D=x[0],L=x.pop();if(L!==D){x[0]=L;e:for(var ae=0,ge=x.length,Ks=ge>>>1;ae<Ks;){var Un=2*(ae+1)-1,Sl=x[Un],jn=Un+1,Qs=x[jn];if(0>i(Sl,L))jn<ge&&0>i(Qs,Sl)?(x[ae]=Qs,x[jn]=L,ae=jn):(x[ae]=Sl,x[Un]=L,ae=Un);else if(jn<ge&&0>i(Qs,L))x[ae]=Qs,x[jn]=L,ae=jn;else break e}}return D}function i(x,D){var L=x.sortIndex-D.sortIndex;return L!==0?L:x.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,c=null,h=3,v=!1,p=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(x){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=x)r(u),D.sortIndex=D.expirationTime,e(l,D);else break;D=n(u)}}function w(x){if(y=!1,_(x),!p)if(n(l)!==null)p=!0,wl(T);else{var D=n(u);D!==null&&El(w,D.startTime-x)}}function T(x,D){p=!1,y&&(y=!1,m(P),P=-1),v=!0;var L=h;try{for(_(D),c=n(l);c!==null&&(!(c.expirationTime>D)||x&&!ct());){var ae=c.callback;if(typeof ae=="function"){c.callback=null,h=c.priorityLevel;var ge=ae(c.expirationTime<=D);D=t.unstable_now(),typeof ge=="function"?c.callback=ge:c===n(l)&&r(l),_(D)}else r(l);c=n(l)}if(c!==null)var Ks=!0;else{var Un=n(u);Un!==null&&El(w,Un.startTime-D),Ks=!1}return Ks}finally{c=null,h=L,v=!1}}var k=!1,N=null,P=-1,W=5,b=-1;function ct(){return!(t.unstable_now()-b<W)}function yi(){if(N!==null){var x=t.unstable_now();b=x;var D=!0;try{D=N(!0,x)}finally{D?wi():(k=!1,N=null)}}else k=!1}var wi;if(typeof f=="function")wi=function(){f(yi)};else if(typeof MessageChannel<"u"){var Lh=new MessageChannel,aw=Lh.port2;Lh.port1.onmessage=yi,wi=function(){aw.postMessage(null)}}else wi=function(){E(yi,0)};function wl(x){N=x,k||(k=!0,wi())}function El(x,D){P=E(function(){x(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(x){x.callback=null},t.unstable_continueExecution=function(){p||v||(p=!0,wl(T))},t.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<x?Math.floor(1e3/x):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(x){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var L=h;h=D;try{return x()}finally{h=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(x,D){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var L=h;h=x;try{return D()}finally{h=L}},t.unstable_scheduleCallback=function(x,D,L){var ae=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?ae+L:ae):L=ae,x){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=L+ge,x={id:d++,callback:D,priorityLevel:x,startTime:L,expirationTime:ge,sortIndex:-1},L>ae?(x.sortIndex=L,e(u,x),n(l)===null&&x===n(u)&&(y?(m(P),P=-1):y=!0,El(w,L-ae))):(x.sortIndex=ge,e(l,x),p||v||(p=!0,wl(T))),x},t.unstable_shouldYield=ct,t.unstable_wrapCallback=function(x){var D=h;return function(){var L=h;h=D;try{return x.apply(this,arguments)}finally{h=L}}}})(jm);Um.exports=jm;var Aw=Um.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ow=S,Je=Aw;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zm=new Set,ts={};function fr(t,e){Qr(t,e),Qr(t+"Capture",e)}function Qr(t,e){for(ts[t]=e,t=0;t<e.length;t++)zm.add(e[t])}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mu=Object.prototype.hasOwnProperty,bw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jh={},zh={};function Dw(t){return mu.call(zh,t)?!0:mu.call(jh,t)?!1:bw.test(t)?zh[t]=!0:(jh[t]=!0,!1)}function Lw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Mw(t,e,n,r){if(e===null||typeof e>"u"||Lw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Fe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ie[t]=new Fe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ie[e]=new Fe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ie[t]=new Fe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ie[t]=new Fe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ie[t]=new Fe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ie[t]=new Fe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ie[t]=new Fe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ie[t]=new Fe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ie[t]=new Fe(t,5,!1,t.toLowerCase(),null,!1,!1)});var Fc=/[\-:]([a-z])/g;function Uc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Fc,Uc);Ie[e]=new Fe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Fc,Uc);Ie[e]=new Fe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Fc,Uc);Ie[e]=new Fe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ie[t]=new Fe(t,1,!1,t.toLowerCase(),null,!1,!1)});Ie.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ie[t]=new Fe(t,1,!1,t.toLowerCase(),null,!0,!0)});function jc(t,e,n,r){var i=Ie.hasOwnProperty(e)?Ie[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Mw(e,n,i,r)&&(n=null),r||i===null?Dw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Xt=Ow.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Js=Symbol.for("react.element"),Tr=Symbol.for("react.portal"),kr=Symbol.for("react.fragment"),zc=Symbol.for("react.strict_mode"),gu=Symbol.for("react.profiler"),Bm=Symbol.for("react.provider"),$m=Symbol.for("react.context"),Bc=Symbol.for("react.forward_ref"),_u=Symbol.for("react.suspense"),vu=Symbol.for("react.suspense_list"),$c=Symbol.for("react.memo"),rn=Symbol.for("react.lazy"),Vm=Symbol.for("react.offscreen"),Bh=Symbol.iterator;function Ei(t){return t===null||typeof t!="object"?null:(t=Bh&&t[Bh]||t["@@iterator"],typeof t=="function"?t:null)}var te=Object.assign,Il;function Di(t){if(Il===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Il=e&&e[1]||""}return`
`+Il+t}var Tl=!1;function kl(t,e){if(!t||Tl)return"";Tl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Tl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Di(t):""}function Fw(t){switch(t.tag){case 5:return Di(t.type);case 16:return Di("Lazy");case 13:return Di("Suspense");case 19:return Di("SuspenseList");case 0:case 2:case 15:return t=kl(t.type,!1),t;case 11:return t=kl(t.type.render,!1),t;case 1:return t=kl(t.type,!0),t;default:return""}}function yu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case kr:return"Fragment";case Tr:return"Portal";case gu:return"Profiler";case zc:return"StrictMode";case _u:return"Suspense";case vu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case $m:return(t.displayName||"Context")+".Consumer";case Bm:return(t._context.displayName||"Context")+".Provider";case Bc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $c:return e=t.displayName||null,e!==null?e:yu(t.type)||"Memo";case rn:e=t._payload,t=t._init;try{return yu(t(e))}catch{}}return null}function Uw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yu(e);case 8:return e===zc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Pn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Wm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function jw(t){var e=Wm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xs(t){t._valueTracker||(t._valueTracker=jw(t))}function Hm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Wm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Fo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wu(t,e){var n=e.checked;return te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function $h(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Pn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Gm(t,e){e=e.checked,e!=null&&jc(t,"checked",e,!1)}function Eu(t,e){Gm(t,e);var n=Pn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Su(t,e.type,n):e.hasOwnProperty("defaultValue")&&Su(t,e.type,Pn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Vh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Su(t,e,n){(e!=="number"||Fo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Li=Array.isArray;function Ur(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Pn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Cu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Wh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(Li(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Pn(n)}}function qm(t,e){var n=Pn(e.value),r=Pn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Hh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Km(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Iu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Km(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Zs,Qm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Zs=Zs||document.createElement("div"),Zs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Zs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ns(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ui={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zw=["Webkit","ms","Moz","O"];Object.keys(Ui).forEach(function(t){zw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ui[e]=Ui[t]})});function Ym(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ui.hasOwnProperty(t)&&Ui[t]?(""+e).trim():e+"px"}function Jm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ym(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Bw=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Tu(t,e){if(e){if(Bw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function ku(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ru=null;function Vc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nu=null,jr=null,zr=null;function Gh(t){if(t=Ms(t)){if(typeof Nu!="function")throw Error(C(280));var e=t.stateNode;e&&(e=ja(e),Nu(t.stateNode,t.type,e))}}function Xm(t){jr?zr?zr.push(t):zr=[t]:jr=t}function Zm(){if(jr){var t=jr,e=zr;if(zr=jr=null,Gh(t),e)for(t=0;t<e.length;t++)Gh(e[t])}}function eg(t,e){return t(e)}function tg(){}var Rl=!1;function ng(t,e,n){if(Rl)return t(e,n);Rl=!0;try{return eg(t,e,n)}finally{Rl=!1,(jr!==null||zr!==null)&&(tg(),Zm())}}function rs(t,e){var n=t.stateNode;if(n===null)return null;var r=ja(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var Pu=!1;if(Ht)try{var Si={};Object.defineProperty(Si,"passive",{get:function(){Pu=!0}}),window.addEventListener("test",Si,Si),window.removeEventListener("test",Si,Si)}catch{Pu=!1}function $w(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var ji=!1,Uo=null,jo=!1,xu=null,Vw={onError:function(t){ji=!0,Uo=t}};function Ww(t,e,n,r,i,s,o,a,l){ji=!1,Uo=null,$w.apply(Vw,arguments)}function Hw(t,e,n,r,i,s,o,a,l){if(Ww.apply(this,arguments),ji){if(ji){var u=Uo;ji=!1,Uo=null}else throw Error(C(198));jo||(jo=!0,xu=u)}}function pr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function rg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function qh(t){if(pr(t)!==t)throw Error(C(188))}function Gw(t){var e=t.alternate;if(!e){if(e=pr(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return qh(i),t;if(s===r)return qh(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function ig(t){return t=Gw(t),t!==null?sg(t):null}function sg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=sg(t);if(e!==null)return e;t=t.sibling}return null}var og=Je.unstable_scheduleCallback,Kh=Je.unstable_cancelCallback,qw=Je.unstable_shouldYield,Kw=Je.unstable_requestPaint,le=Je.unstable_now,Qw=Je.unstable_getCurrentPriorityLevel,Wc=Je.unstable_ImmediatePriority,ag=Je.unstable_UserBlockingPriority,zo=Je.unstable_NormalPriority,Yw=Je.unstable_LowPriority,lg=Je.unstable_IdlePriority,La=null,Pt=null;function Jw(t){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(La,t,void 0,(t.current.flags&128)===128)}catch{}}var _t=Math.clz32?Math.clz32:eE,Xw=Math.log,Zw=Math.LN2;function eE(t){return t>>>=0,t===0?32:31-(Xw(t)/Zw|0)|0}var eo=64,to=4194304;function Mi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Bo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Mi(a):(s&=o,s!==0&&(r=Mi(s)))}else o=n&~i,o!==0?r=Mi(o):s!==0&&(r=Mi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-_t(e),i=1<<n,r|=t[n],e&=~i;return r}function tE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-_t(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=tE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Au(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ug(){var t=eo;return eo<<=1,!(eo&4194240)&&(eo=64),t}function Nl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ds(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-_t(e),t[e]=n}function rE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-_t(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Hc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-_t(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var V=0;function cg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var dg,Gc,hg,fg,pg,Ou=!1,no=[],_n=null,vn=null,yn=null,is=new Map,ss=new Map,on=[],iE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qh(t,e){switch(t){case"focusin":case"focusout":_n=null;break;case"dragenter":case"dragleave":vn=null;break;case"mouseover":case"mouseout":yn=null;break;case"pointerover":case"pointerout":is.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ss.delete(e.pointerId)}}function Ci(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ms(e),e!==null&&Gc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function sE(t,e,n,r,i){switch(e){case"focusin":return _n=Ci(_n,t,e,n,r,i),!0;case"dragenter":return vn=Ci(vn,t,e,n,r,i),!0;case"mouseover":return yn=Ci(yn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return is.set(s,Ci(is.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ss.set(s,Ci(ss.get(s)||null,t,e,n,r,i)),!0}return!1}function mg(t){var e=Wn(t.target);if(e!==null){var n=pr(e);if(n!==null){if(e=n.tag,e===13){if(e=rg(n),e!==null){t.blockedOn=e,pg(t.priority,function(){hg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Eo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ru=r,n.target.dispatchEvent(r),Ru=null}else return e=Ms(n),e!==null&&Gc(e),t.blockedOn=n,!1;e.shift()}return!0}function Yh(t,e,n){Eo(t)&&n.delete(e)}function oE(){Ou=!1,_n!==null&&Eo(_n)&&(_n=null),vn!==null&&Eo(vn)&&(vn=null),yn!==null&&Eo(yn)&&(yn=null),is.forEach(Yh),ss.forEach(Yh)}function Ii(t,e){t.blockedOn===e&&(t.blockedOn=null,Ou||(Ou=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,oE)))}function os(t){function e(i){return Ii(i,t)}if(0<no.length){Ii(no[0],t);for(var n=1;n<no.length;n++){var r=no[n];r.blockedOn===t&&(r.blockedOn=null)}}for(_n!==null&&Ii(_n,t),vn!==null&&Ii(vn,t),yn!==null&&Ii(yn,t),is.forEach(e),ss.forEach(e),n=0;n<on.length;n++)r=on[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<on.length&&(n=on[0],n.blockedOn===null);)mg(n),n.blockedOn===null&&on.shift()}var Br=Xt.ReactCurrentBatchConfig,$o=!0;function aE(t,e,n,r){var i=V,s=Br.transition;Br.transition=null;try{V=1,qc(t,e,n,r)}finally{V=i,Br.transition=s}}function lE(t,e,n,r){var i=V,s=Br.transition;Br.transition=null;try{V=4,qc(t,e,n,r)}finally{V=i,Br.transition=s}}function qc(t,e,n,r){if($o){var i=bu(t,e,n,r);if(i===null)Ul(t,e,r,Vo,n),Qh(t,r);else if(sE(i,t,e,n,r))r.stopPropagation();else if(Qh(t,r),e&4&&-1<iE.indexOf(t)){for(;i!==null;){var s=Ms(i);if(s!==null&&dg(s),s=bu(t,e,n,r),s===null&&Ul(t,e,r,Vo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ul(t,e,r,null,n)}}var Vo=null;function bu(t,e,n,r){if(Vo=null,t=Vc(r),t=Wn(t),t!==null)if(e=pr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=rg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Vo=t,null}function gg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qw()){case Wc:return 1;case ag:return 4;case zo:case Yw:return 16;case lg:return 536870912;default:return 16}default:return 16}}var hn=null,Kc=null,So=null;function _g(){if(So)return So;var t,e=Kc,n=e.length,r,i="value"in hn?hn.value:hn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return So=i.slice(t,1<r?1-r:void 0)}function Co(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ro(){return!0}function Jh(){return!1}function Ze(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ro:Jh,this.isPropagationStopped=Jh,this}return te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),e}var ci={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qc=Ze(ci),Ls=te({},ci,{view:0,detail:0}),uE=Ze(Ls),Pl,xl,Ti,Ma=te({},Ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ti&&(Ti&&t.type==="mousemove"?(Pl=t.screenX-Ti.screenX,xl=t.screenY-Ti.screenY):xl=Pl=0,Ti=t),Pl)},movementY:function(t){return"movementY"in t?t.movementY:xl}}),Xh=Ze(Ma),cE=te({},Ma,{dataTransfer:0}),dE=Ze(cE),hE=te({},Ls,{relatedTarget:0}),Al=Ze(hE),fE=te({},ci,{animationName:0,elapsedTime:0,pseudoElement:0}),pE=Ze(fE),mE=te({},ci,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gE=Ze(mE),_E=te({},ci,{data:0}),Zh=Ze(_E),vE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function EE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=wE[t])?!!e[t]:!1}function Yc(){return EE}var SE=te({},Ls,{key:function(t){if(t.key){var e=vE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Co(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yc,charCode:function(t){return t.type==="keypress"?Co(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Co(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),CE=Ze(SE),IE=te({},Ma,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ef=Ze(IE),TE=te({},Ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yc}),kE=Ze(TE),RE=te({},ci,{propertyName:0,elapsedTime:0,pseudoElement:0}),NE=Ze(RE),PE=te({},Ma,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),xE=Ze(PE),AE=[9,13,27,32],Jc=Ht&&"CompositionEvent"in window,zi=null;Ht&&"documentMode"in document&&(zi=document.documentMode);var OE=Ht&&"TextEvent"in window&&!zi,vg=Ht&&(!Jc||zi&&8<zi&&11>=zi),tf=" ",nf=!1;function yg(t,e){switch(t){case"keyup":return AE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Rr=!1;function bE(t,e){switch(t){case"compositionend":return wg(e);case"keypress":return e.which!==32?null:(nf=!0,tf);case"textInput":return t=e.data,t===tf&&nf?null:t;default:return null}}function DE(t,e){if(Rr)return t==="compositionend"||!Jc&&yg(t,e)?(t=_g(),So=Kc=hn=null,Rr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return vg&&e.locale!=="ko"?null:e.data;default:return null}}var LE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!LE[t.type]:e==="textarea"}function Eg(t,e,n,r){Xm(r),e=Wo(e,"onChange"),0<e.length&&(n=new Qc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Bi=null,as=null;function ME(t){Og(t,0)}function Fa(t){var e=xr(t);if(Hm(e))return t}function FE(t,e){if(t==="change")return e}var Sg=!1;if(Ht){var Ol;if(Ht){var bl="oninput"in document;if(!bl){var sf=document.createElement("div");sf.setAttribute("oninput","return;"),bl=typeof sf.oninput=="function"}Ol=bl}else Ol=!1;Sg=Ol&&(!document.documentMode||9<document.documentMode)}function of(){Bi&&(Bi.detachEvent("onpropertychange",Cg),as=Bi=null)}function Cg(t){if(t.propertyName==="value"&&Fa(as)){var e=[];Eg(e,as,t,Vc(t)),ng(ME,e)}}function UE(t,e,n){t==="focusin"?(of(),Bi=e,as=n,Bi.attachEvent("onpropertychange",Cg)):t==="focusout"&&of()}function jE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fa(as)}function zE(t,e){if(t==="click")return Fa(e)}function BE(t,e){if(t==="input"||t==="change")return Fa(e)}function $E(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Et=typeof Object.is=="function"?Object.is:$E;function ls(t,e){if(Et(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!mu.call(e,i)||!Et(t[i],e[i]))return!1}return!0}function af(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lf(t,e){var n=af(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=af(n)}}function Ig(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ig(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Tg(){for(var t=window,e=Fo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Fo(t.document)}return e}function Xc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function VE(t){var e=Tg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ig(n.ownerDocument.documentElement,n)){if(r!==null&&Xc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=lf(n,s);var o=lf(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var WE=Ht&&"documentMode"in document&&11>=document.documentMode,Nr=null,Du=null,$i=null,Lu=!1;function uf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lu||Nr==null||Nr!==Fo(r)||(r=Nr,"selectionStart"in r&&Xc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$i&&ls($i,r)||($i=r,r=Wo(Du,"onSelect"),0<r.length&&(e=new Qc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Nr)))}function io(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Pr={animationend:io("Animation","AnimationEnd"),animationiteration:io("Animation","AnimationIteration"),animationstart:io("Animation","AnimationStart"),transitionend:io("Transition","TransitionEnd")},Dl={},kg={};Ht&&(kg=document.createElement("div").style,"AnimationEvent"in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),"TransitionEvent"in window||delete Pr.transitionend.transition);function Ua(t){if(Dl[t])return Dl[t];if(!Pr[t])return t;var e=Pr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in kg)return Dl[t]=e[n];return t}var Rg=Ua("animationend"),Ng=Ua("animationiteration"),Pg=Ua("animationstart"),xg=Ua("transitionend"),Ag=new Map,cf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dn(t,e){Ag.set(t,e),fr(e,[t])}for(var Ll=0;Ll<cf.length;Ll++){var Ml=cf[Ll],HE=Ml.toLowerCase(),GE=Ml[0].toUpperCase()+Ml.slice(1);Dn(HE,"on"+GE)}Dn(Rg,"onAnimationEnd");Dn(Ng,"onAnimationIteration");Dn(Pg,"onAnimationStart");Dn("dblclick","onDoubleClick");Dn("focusin","onFocus");Dn("focusout","onBlur");Dn(xg,"onTransitionEnd");Qr("onMouseEnter",["mouseout","mouseover"]);Qr("onMouseLeave",["mouseout","mouseover"]);Qr("onPointerEnter",["pointerout","pointerover"]);Qr("onPointerLeave",["pointerout","pointerover"]);fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fi));function df(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Hw(r,e,void 0,t),t.currentTarget=null}function Og(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;df(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;df(i,a,u),s=l}}}if(jo)throw t=xu,jo=!1,xu=null,t}function Y(t,e){var n=e[zu];n===void 0&&(n=e[zu]=new Set);var r=t+"__bubble";n.has(r)||(bg(e,t,2,!1),n.add(r))}function Fl(t,e,n){var r=0;e&&(r|=4),bg(n,t,r,e)}var so="_reactListening"+Math.random().toString(36).slice(2);function us(t){if(!t[so]){t[so]=!0,zm.forEach(function(n){n!=="selectionchange"&&(qE.has(n)||Fl(n,!1,t),Fl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[so]||(e[so]=!0,Fl("selectionchange",!1,e))}}function bg(t,e,n,r){switch(gg(e)){case 1:var i=aE;break;case 4:i=lE;break;default:i=qc}n=i.bind(null,e,n,t),i=void 0,!Pu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ul(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Wn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}ng(function(){var u=s,d=Vc(n),c=[];e:{var h=Ag.get(t);if(h!==void 0){var v=Qc,p=t;switch(t){case"keypress":if(Co(n)===0)break e;case"keydown":case"keyup":v=CE;break;case"focusin":p="focus",v=Al;break;case"focusout":p="blur",v=Al;break;case"beforeblur":case"afterblur":v=Al;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Xh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=dE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=kE;break;case Rg:case Ng:case Pg:v=pE;break;case xg:v=NE;break;case"scroll":v=uE;break;case"wheel":v=xE;break;case"copy":case"cut":case"paste":v=gE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ef}var y=(e&4)!==0,E=!y&&t==="scroll",m=y?h!==null?h+"Capture":null:h;y=[];for(var f=u,_;f!==null;){_=f;var w=_.stateNode;if(_.tag===5&&w!==null&&(_=w,m!==null&&(w=rs(f,m),w!=null&&y.push(cs(f,w,_)))),E)break;f=f.return}0<y.length&&(h=new v(h,p,null,n,d),c.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",h&&n!==Ru&&(p=n.relatedTarget||n.fromElement)&&(Wn(p)||p[Gt]))break e;if((v||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,v?(p=n.relatedTarget||n.toElement,v=u,p=p?Wn(p):null,p!==null&&(E=pr(p),p!==E||p.tag!==5&&p.tag!==6)&&(p=null)):(v=null,p=u),v!==p)){if(y=Xh,w="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=ef,w="onPointerLeave",m="onPointerEnter",f="pointer"),E=v==null?h:xr(v),_=p==null?h:xr(p),h=new y(w,f+"leave",v,n,d),h.target=E,h.relatedTarget=_,w=null,Wn(d)===u&&(y=new y(m,f+"enter",p,n,d),y.target=_,y.relatedTarget=E,w=y),E=w,v&&p)t:{for(y=v,m=p,f=0,_=y;_;_=Er(_))f++;for(_=0,w=m;w;w=Er(w))_++;for(;0<f-_;)y=Er(y),f--;for(;0<_-f;)m=Er(m),_--;for(;f--;){if(y===m||m!==null&&y===m.alternate)break t;y=Er(y),m=Er(m)}y=null}else y=null;v!==null&&hf(c,h,v,y,!1),p!==null&&E!==null&&hf(c,E,p,y,!0)}}e:{if(h=u?xr(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var T=FE;else if(rf(h))if(Sg)T=BE;else{T=jE;var k=UE}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=zE);if(T&&(T=T(t,u))){Eg(c,T,n,d);break e}k&&k(t,h,u),t==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&Su(h,"number",h.value)}switch(k=u?xr(u):window,t){case"focusin":(rf(k)||k.contentEditable==="true")&&(Nr=k,Du=u,$i=null);break;case"focusout":$i=Du=Nr=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,uf(c,n,d);break;case"selectionchange":if(WE)break;case"keydown":case"keyup":uf(c,n,d)}var N;if(Jc)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Rr?yg(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(vg&&n.locale!=="ko"&&(Rr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Rr&&(N=_g()):(hn=d,Kc="value"in hn?hn.value:hn.textContent,Rr=!0)),k=Wo(u,P),0<k.length&&(P=new Zh(P,t,null,n,d),c.push({event:P,listeners:k}),N?P.data=N:(N=wg(n),N!==null&&(P.data=N)))),(N=OE?bE(t,n):DE(t,n))&&(u=Wo(u,"onBeforeInput"),0<u.length&&(d=new Zh("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=N))}Og(c,e)})}function cs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Wo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=rs(t,n),s!=null&&r.unshift(cs(t,s,i)),s=rs(t,e),s!=null&&r.push(cs(t,s,i))),t=t.return}return r}function Er(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hf(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=rs(n,s),l!=null&&o.unshift(cs(n,l,a))):i||(l=rs(n,s),l!=null&&o.push(cs(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var KE=/\r\n?/g,QE=/\u0000|\uFFFD/g;function ff(t){return(typeof t=="string"?t:""+t).replace(KE,`
`).replace(QE,"")}function oo(t,e,n){if(e=ff(e),ff(t)!==e&&n)throw Error(C(425))}function Ho(){}var Mu=null,Fu=null;function Uu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ju=typeof setTimeout=="function"?setTimeout:void 0,YE=typeof clearTimeout=="function"?clearTimeout:void 0,pf=typeof Promise=="function"?Promise:void 0,JE=typeof queueMicrotask=="function"?queueMicrotask:typeof pf<"u"?function(t){return pf.resolve(null).then(t).catch(XE)}:ju;function XE(t){setTimeout(function(){throw t})}function jl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),os(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);os(e)}function wn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function mf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var di=Math.random().toString(36).slice(2),kt="__reactFiber$"+di,ds="__reactProps$"+di,Gt="__reactContainer$"+di,zu="__reactEvents$"+di,ZE="__reactListeners$"+di,e1="__reactHandles$"+di;function Wn(t){var e=t[kt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Gt]||n[kt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=mf(t);t!==null;){if(n=t[kt])return n;t=mf(t)}return e}t=n,n=t.parentNode}return null}function Ms(t){return t=t[kt]||t[Gt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function ja(t){return t[ds]||null}var Bu=[],Ar=-1;function Ln(t){return{current:t}}function J(t){0>Ar||(t.current=Bu[Ar],Bu[Ar]=null,Ar--)}function Q(t,e){Ar++,Bu[Ar]=t.current,t.current=e}var xn={},Pe=Ln(xn),Be=Ln(!1),tr=xn;function Yr(t,e){var n=t.type.contextTypes;if(!n)return xn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function $e(t){return t=t.childContextTypes,t!=null}function Go(){J(Be),J(Pe)}function gf(t,e,n){if(Pe.current!==xn)throw Error(C(168));Q(Pe,e),Q(Be,n)}function Dg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,Uw(t)||"Unknown",i));return te({},n,r)}function qo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||xn,tr=Pe.current,Q(Pe,t),Q(Be,Be.current),!0}function _f(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=Dg(t,e,tr),r.__reactInternalMemoizedMergedChildContext=t,J(Be),J(Pe),Q(Pe,t)):J(Be),Q(Be,n)}var Lt=null,za=!1,zl=!1;function Lg(t){Lt===null?Lt=[t]:Lt.push(t)}function t1(t){za=!0,Lg(t)}function Mn(){if(!zl&&Lt!==null){zl=!0;var t=0,e=V;try{var n=Lt;for(V=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Lt=null,za=!1}catch(i){throw Lt!==null&&(Lt=Lt.slice(t+1)),og(Wc,Mn),i}finally{V=e,zl=!1}}return null}var Or=[],br=0,Ko=null,Qo=0,et=[],tt=0,nr=null,Mt=1,Ft="";function zn(t,e){Or[br++]=Qo,Or[br++]=Ko,Ko=t,Qo=e}function Mg(t,e,n){et[tt++]=Mt,et[tt++]=Ft,et[tt++]=nr,nr=t;var r=Mt;t=Ft;var i=32-_t(r)-1;r&=~(1<<i),n+=1;var s=32-_t(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Mt=1<<32-_t(e)+i|n<<i|r,Ft=s+t}else Mt=1<<s|n<<i|r,Ft=t}function Zc(t){t.return!==null&&(zn(t,1),Mg(t,1,0))}function ed(t){for(;t===Ko;)Ko=Or[--br],Or[br]=null,Qo=Or[--br],Or[br]=null;for(;t===nr;)nr=et[--tt],et[tt]=null,Ft=et[--tt],et[tt]=null,Mt=et[--tt],et[tt]=null}var Qe=null,qe=null,X=!1,pt=null;function Fg(t,e){var n=nt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function vf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Qe=t,qe=wn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Qe=t,qe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=nr!==null?{id:Mt,overflow:Ft}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=nt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Qe=t,qe=null,!0):!1;default:return!1}}function $u(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Vu(t){if(X){var e=qe;if(e){var n=e;if(!vf(t,e)){if($u(t))throw Error(C(418));e=wn(n.nextSibling);var r=Qe;e&&vf(t,e)?Fg(r,n):(t.flags=t.flags&-4097|2,X=!1,Qe=t)}}else{if($u(t))throw Error(C(418));t.flags=t.flags&-4097|2,X=!1,Qe=t}}}function yf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Qe=t}function ao(t){if(t!==Qe)return!1;if(!X)return yf(t),X=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Uu(t.type,t.memoizedProps)),e&&(e=qe)){if($u(t))throw Ug(),Error(C(418));for(;e;)Fg(t,e),e=wn(e.nextSibling)}if(yf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){qe=wn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}qe=null}}else qe=Qe?wn(t.stateNode.nextSibling):null;return!0}function Ug(){for(var t=qe;t;)t=wn(t.nextSibling)}function Jr(){qe=Qe=null,X=!1}function td(t){pt===null?pt=[t]:pt.push(t)}var n1=Xt.ReactCurrentBatchConfig;function ki(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function lo(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function wf(t){var e=t._init;return e(t._payload)}function jg(t){function e(m,f){if(t){var _=m.deletions;_===null?(m.deletions=[f],m.flags|=16):_.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=In(m,f),m.index=0,m.sibling=null,m}function s(m,f,_){return m.index=_,t?(_=m.alternate,_!==null?(_=_.index,_<f?(m.flags|=2,f):_):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,_,w){return f===null||f.tag!==6?(f=ql(_,m.mode,w),f.return=m,f):(f=i(f,_),f.return=m,f)}function l(m,f,_,w){var T=_.type;return T===kr?d(m,f,_.props.children,w,_.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===rn&&wf(T)===f.type)?(w=i(f,_.props),w.ref=ki(m,f,_),w.return=m,w):(w=xo(_.type,_.key,_.props,null,m.mode,w),w.ref=ki(m,f,_),w.return=m,w)}function u(m,f,_,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==_.containerInfo||f.stateNode.implementation!==_.implementation?(f=Kl(_,m.mode,w),f.return=m,f):(f=i(f,_.children||[]),f.return=m,f)}function d(m,f,_,w,T){return f===null||f.tag!==7?(f=Jn(_,m.mode,w,T),f.return=m,f):(f=i(f,_),f.return=m,f)}function c(m,f,_){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ql(""+f,m.mode,_),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Js:return _=xo(f.type,f.key,f.props,null,m.mode,_),_.ref=ki(m,null,f),_.return=m,_;case Tr:return f=Kl(f,m.mode,_),f.return=m,f;case rn:var w=f._init;return c(m,w(f._payload),_)}if(Li(f)||Ei(f))return f=Jn(f,m.mode,_,null),f.return=m,f;lo(m,f)}return null}function h(m,f,_,w){var T=f!==null?f.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return T!==null?null:a(m,f,""+_,w);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Js:return _.key===T?l(m,f,_,w):null;case Tr:return _.key===T?u(m,f,_,w):null;case rn:return T=_._init,h(m,f,T(_._payload),w)}if(Li(_)||Ei(_))return T!==null?null:d(m,f,_,w,null);lo(m,_)}return null}function v(m,f,_,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(_)||null,a(f,m,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Js:return m=m.get(w.key===null?_:w.key)||null,l(f,m,w,T);case Tr:return m=m.get(w.key===null?_:w.key)||null,u(f,m,w,T);case rn:var k=w._init;return v(m,f,_,k(w._payload),T)}if(Li(w)||Ei(w))return m=m.get(_)||null,d(f,m,w,T,null);lo(f,w)}return null}function p(m,f,_,w){for(var T=null,k=null,N=f,P=f=0,W=null;N!==null&&P<_.length;P++){N.index>P?(W=N,N=null):W=N.sibling;var b=h(m,N,_[P],w);if(b===null){N===null&&(N=W);break}t&&N&&b.alternate===null&&e(m,N),f=s(b,f,P),k===null?T=b:k.sibling=b,k=b,N=W}if(P===_.length)return n(m,N),X&&zn(m,P),T;if(N===null){for(;P<_.length;P++)N=c(m,_[P],w),N!==null&&(f=s(N,f,P),k===null?T=N:k.sibling=N,k=N);return X&&zn(m,P),T}for(N=r(m,N);P<_.length;P++)W=v(N,m,P,_[P],w),W!==null&&(t&&W.alternate!==null&&N.delete(W.key===null?P:W.key),f=s(W,f,P),k===null?T=W:k.sibling=W,k=W);return t&&N.forEach(function(ct){return e(m,ct)}),X&&zn(m,P),T}function y(m,f,_,w){var T=Ei(_);if(typeof T!="function")throw Error(C(150));if(_=T.call(_),_==null)throw Error(C(151));for(var k=T=null,N=f,P=f=0,W=null,b=_.next();N!==null&&!b.done;P++,b=_.next()){N.index>P?(W=N,N=null):W=N.sibling;var ct=h(m,N,b.value,w);if(ct===null){N===null&&(N=W);break}t&&N&&ct.alternate===null&&e(m,N),f=s(ct,f,P),k===null?T=ct:k.sibling=ct,k=ct,N=W}if(b.done)return n(m,N),X&&zn(m,P),T;if(N===null){for(;!b.done;P++,b=_.next())b=c(m,b.value,w),b!==null&&(f=s(b,f,P),k===null?T=b:k.sibling=b,k=b);return X&&zn(m,P),T}for(N=r(m,N);!b.done;P++,b=_.next())b=v(N,m,P,b.value,w),b!==null&&(t&&b.alternate!==null&&N.delete(b.key===null?P:b.key),f=s(b,f,P),k===null?T=b:k.sibling=b,k=b);return t&&N.forEach(function(yi){return e(m,yi)}),X&&zn(m,P),T}function E(m,f,_,w){if(typeof _=="object"&&_!==null&&_.type===kr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Js:e:{for(var T=_.key,k=f;k!==null;){if(k.key===T){if(T=_.type,T===kr){if(k.tag===7){n(m,k.sibling),f=i(k,_.props.children),f.return=m,m=f;break e}}else if(k.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===rn&&wf(T)===k.type){n(m,k.sibling),f=i(k,_.props),f.ref=ki(m,k,_),f.return=m,m=f;break e}n(m,k);break}else e(m,k);k=k.sibling}_.type===kr?(f=Jn(_.props.children,m.mode,w,_.key),f.return=m,m=f):(w=xo(_.type,_.key,_.props,null,m.mode,w),w.ref=ki(m,f,_),w.return=m,m=w)}return o(m);case Tr:e:{for(k=_.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===_.containerInfo&&f.stateNode.implementation===_.implementation){n(m,f.sibling),f=i(f,_.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=Kl(_,m.mode,w),f.return=m,m=f}return o(m);case rn:return k=_._init,E(m,f,k(_._payload),w)}if(Li(_))return p(m,f,_,w);if(Ei(_))return y(m,f,_,w);lo(m,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,_),f.return=m,m=f):(n(m,f),f=ql(_,m.mode,w),f.return=m,m=f),o(m)):n(m,f)}return E}var Xr=jg(!0),zg=jg(!1),Yo=Ln(null),Jo=null,Dr=null,nd=null;function rd(){nd=Dr=Jo=null}function id(t){var e=Yo.current;J(Yo),t._currentValue=e}function Wu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function $r(t,e){Jo=t,nd=Dr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(je=!0),t.firstContext=null)}function st(t){var e=t._currentValue;if(nd!==t)if(t={context:t,memoizedValue:e,next:null},Dr===null){if(Jo===null)throw Error(C(308));Dr=t,Jo.dependencies={lanes:0,firstContext:t}}else Dr=Dr.next=t;return e}var Hn=null;function sd(t){Hn===null?Hn=[t]:Hn.push(t)}function Bg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,sd(e)):(n.next=i.next,i.next=n),e.interleaved=n,qt(t,r)}function qt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var sn=!1;function od(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $g(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Vt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function En(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,qt(t,n)}return i=r.interleaved,i===null?(e.next=e,sd(r)):(e.next=i.next,i.next=e),r.interleaved=e,qt(t,n)}function Io(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Hc(t,n)}}function Ef(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Xo(t,e,n,r){var i=t.updateQueue;sn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var c=i.baseState;o=0,d=u=l=null,a=s;do{var h=a.lane,v=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=t,y=a;switch(h=e,v=n,y.tag){case 1:if(p=y.payload,typeof p=="function"){c=p.call(v,c,h);break e}c=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=y.payload,h=typeof p=="function"?p.call(v,c,h):p,h==null)break e;c=te({},c,h);break e;case 2:sn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else v={eventTime:v,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=v,l=c):d=d.next=v,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ir|=o,t.lanes=o,t.memoizedState=c}}function Sf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var Fs={},xt=Ln(Fs),hs=Ln(Fs),fs=Ln(Fs);function Gn(t){if(t===Fs)throw Error(C(174));return t}function ad(t,e){switch(Q(fs,e),Q(hs,t),Q(xt,Fs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Iu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Iu(e,t)}J(xt),Q(xt,e)}function Zr(){J(xt),J(hs),J(fs)}function Vg(t){Gn(fs.current);var e=Gn(xt.current),n=Iu(e,t.type);e!==n&&(Q(hs,t),Q(xt,n))}function ld(t){hs.current===t&&(J(xt),J(hs))}var Z=Ln(0);function Zo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bl=[];function ud(){for(var t=0;t<Bl.length;t++)Bl[t]._workInProgressVersionPrimary=null;Bl.length=0}var To=Xt.ReactCurrentDispatcher,$l=Xt.ReactCurrentBatchConfig,rr=0,ee=null,ce=null,ve=null,ea=!1,Vi=!1,ps=0,r1=0;function ke(){throw Error(C(321))}function cd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Et(t[n],e[n]))return!1;return!0}function dd(t,e,n,r,i,s){if(rr=s,ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,To.current=t===null||t.memoizedState===null?a1:l1,t=n(r,i),Vi){s=0;do{if(Vi=!1,ps=0,25<=s)throw Error(C(301));s+=1,ve=ce=null,e.updateQueue=null,To.current=u1,t=n(r,i)}while(Vi)}if(To.current=ta,e=ce!==null&&ce.next!==null,rr=0,ve=ce=ee=null,ea=!1,e)throw Error(C(300));return t}function hd(){var t=ps!==0;return ps=0,t}function Tt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?ee.memoizedState=ve=t:ve=ve.next=t,ve}function ot(){if(ce===null){var t=ee.alternate;t=t!==null?t.memoizedState:null}else t=ce.next;var e=ve===null?ee.memoizedState:ve.next;if(e!==null)ve=e,ce=t;else{if(t===null)throw Error(C(310));ce=t,t={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},ve===null?ee.memoizedState=ve=t:ve=ve.next=t}return ve}function ms(t,e){return typeof e=="function"?e(t):e}function Vl(t){var e=ot(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=ce,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((rr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,o=r):l=l.next=c,ee.lanes|=d,ir|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Et(r,e.memoizedState)||(je=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ee.lanes|=s,ir|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Wl(t){var e=ot(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Et(s,e.memoizedState)||(je=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Wg(){}function Hg(t,e){var n=ee,r=ot(),i=e(),s=!Et(r.memoizedState,i);if(s&&(r.memoizedState=i,je=!0),r=r.queue,fd(Kg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,gs(9,qg.bind(null,n,r,i,e),void 0,null),we===null)throw Error(C(349));rr&30||Gg(n,e,i)}return i}function Gg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ee.updateQueue,e===null?(e={lastEffect:null,stores:null},ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function qg(t,e,n,r){e.value=n,e.getSnapshot=r,Qg(e)&&Yg(t)}function Kg(t,e,n){return n(function(){Qg(e)&&Yg(t)})}function Qg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Et(t,n)}catch{return!0}}function Yg(t){var e=qt(t,1);e!==null&&vt(e,t,1,-1)}function Cf(t){var e=Tt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ms,lastRenderedState:t},e.queue=t,t=t.dispatch=o1.bind(null,ee,t),[e.memoizedState,t]}function gs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ee.updateQueue,e===null?(e={lastEffect:null,stores:null},ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Jg(){return ot().memoizedState}function ko(t,e,n,r){var i=Tt();ee.flags|=t,i.memoizedState=gs(1|e,n,void 0,r===void 0?null:r)}function Ba(t,e,n,r){var i=ot();r=r===void 0?null:r;var s=void 0;if(ce!==null){var o=ce.memoizedState;if(s=o.destroy,r!==null&&cd(r,o.deps)){i.memoizedState=gs(e,n,s,r);return}}ee.flags|=t,i.memoizedState=gs(1|e,n,s,r)}function If(t,e){return ko(8390656,8,t,e)}function fd(t,e){return Ba(2048,8,t,e)}function Xg(t,e){return Ba(4,2,t,e)}function Zg(t,e){return Ba(4,4,t,e)}function e_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function t_(t,e,n){return n=n!=null?n.concat([t]):null,Ba(4,4,e_.bind(null,e,t),n)}function pd(){}function n_(t,e){var n=ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&cd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function r_(t,e){var n=ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&cd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function i_(t,e,n){return rr&21?(Et(n,e)||(n=ug(),ee.lanes|=n,ir|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,je=!0),t.memoizedState=n)}function i1(t,e){var n=V;V=n!==0&&4>n?n:4,t(!0);var r=$l.transition;$l.transition={};try{t(!1),e()}finally{V=n,$l.transition=r}}function s_(){return ot().memoizedState}function s1(t,e,n){var r=Cn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},o_(t))a_(e,n);else if(n=Bg(t,e,n,r),n!==null){var i=be();vt(n,t,r,i),l_(n,e,r)}}function o1(t,e,n){var r=Cn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(o_(t))a_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Et(a,o)){var l=e.interleaved;l===null?(i.next=i,sd(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Bg(t,e,i,r),n!==null&&(i=be(),vt(n,t,r,i),l_(n,e,r))}}function o_(t){var e=t.alternate;return t===ee||e!==null&&e===ee}function a_(t,e){Vi=ea=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function l_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Hc(t,n)}}var ta={readContext:st,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},a1={readContext:st,useCallback:function(t,e){return Tt().memoizedState=[t,e===void 0?null:e],t},useContext:st,useEffect:If,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ko(4194308,4,e_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ko(4194308,4,t,e)},useInsertionEffect:function(t,e){return ko(4,2,t,e)},useMemo:function(t,e){var n=Tt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Tt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=s1.bind(null,ee,t),[r.memoizedState,t]},useRef:function(t){var e=Tt();return t={current:t},e.memoizedState=t},useState:Cf,useDebugValue:pd,useDeferredValue:function(t){return Tt().memoizedState=t},useTransition:function(){var t=Cf(!1),e=t[0];return t=i1.bind(null,t[1]),Tt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ee,i=Tt();if(X){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),we===null)throw Error(C(349));rr&30||Gg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,If(Kg.bind(null,r,s,t),[t]),r.flags|=2048,gs(9,qg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Tt(),e=we.identifierPrefix;if(X){var n=Ft,r=Mt;n=(r&~(1<<32-_t(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ps++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=r1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},l1={readContext:st,useCallback:n_,useContext:st,useEffect:fd,useImperativeHandle:t_,useInsertionEffect:Xg,useLayoutEffect:Zg,useMemo:r_,useReducer:Vl,useRef:Jg,useState:function(){return Vl(ms)},useDebugValue:pd,useDeferredValue:function(t){var e=ot();return i_(e,ce.memoizedState,t)},useTransition:function(){var t=Vl(ms)[0],e=ot().memoizedState;return[t,e]},useMutableSource:Wg,useSyncExternalStore:Hg,useId:s_,unstable_isNewReconciler:!1},u1={readContext:st,useCallback:n_,useContext:st,useEffect:fd,useImperativeHandle:t_,useInsertionEffect:Xg,useLayoutEffect:Zg,useMemo:r_,useReducer:Wl,useRef:Jg,useState:function(){return Wl(ms)},useDebugValue:pd,useDeferredValue:function(t){var e=ot();return ce===null?e.memoizedState=t:i_(e,ce.memoizedState,t)},useTransition:function(){var t=Wl(ms)[0],e=ot().memoizedState;return[t,e]},useMutableSource:Wg,useSyncExternalStore:Hg,useId:s_,unstable_isNewReconciler:!1};function ht(t,e){if(t&&t.defaultProps){e=te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Hu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var $a={isMounted:function(t){return(t=t._reactInternals)?pr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=be(),i=Cn(t),s=Vt(r,i);s.payload=e,n!=null&&(s.callback=n),e=En(t,s,i),e!==null&&(vt(e,t,i,r),Io(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=be(),i=Cn(t),s=Vt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=En(t,s,i),e!==null&&(vt(e,t,i,r),Io(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=be(),r=Cn(t),i=Vt(n,r);i.tag=2,e!=null&&(i.callback=e),e=En(t,i,r),e!==null&&(vt(e,t,r,n),Io(e,t,r))}};function Tf(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ls(n,r)||!ls(i,s):!0}function u_(t,e,n){var r=!1,i=xn,s=e.contextType;return typeof s=="object"&&s!==null?s=st(s):(i=$e(e)?tr:Pe.current,r=e.contextTypes,s=(r=r!=null)?Yr(t,i):xn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=$a,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function kf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&$a.enqueueReplaceState(e,e.state,null)}function Gu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},od(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=st(s):(s=$e(e)?tr:Pe.current,i.context=Yr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Hu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&$a.enqueueReplaceState(i,i.state,null),Xo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ei(t,e){try{var n="",r=e;do n+=Fw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Hl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function qu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var c1=typeof WeakMap=="function"?WeakMap:Map;function c_(t,e,n){n=Vt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ra||(ra=!0,rc=r),qu(t,e)},n}function d_(t,e,n){n=Vt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){qu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){qu(t,e),typeof r!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Rf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new c1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=I1.bind(null,t,e,n),e.then(t,t))}function Nf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Pf(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Vt(-1,1),e.tag=2,En(n,e,1))),n.lanes|=1),t)}var d1=Xt.ReactCurrentOwner,je=!1;function Ae(t,e,n,r){e.child=t===null?zg(e,null,n,r):Xr(e,t.child,n,r)}function xf(t,e,n,r,i){n=n.render;var s=e.ref;return $r(e,i),r=dd(t,e,n,r,s,i),n=hd(),t!==null&&!je?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Kt(t,e,i)):(X&&n&&Zc(e),e.flags|=1,Ae(t,e,r,i),e.child)}function Af(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Sd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,h_(t,e,s,r,i)):(t=xo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ls,n(o,r)&&t.ref===e.ref)return Kt(t,e,i)}return e.flags|=1,t=In(s,r),t.ref=e.ref,t.return=e,e.child=t}function h_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ls(s,r)&&t.ref===e.ref)if(je=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(je=!0);else return e.lanes=t.lanes,Kt(t,e,i)}return Ku(t,e,n,r,i)}function f_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(Mr,Ge),Ge|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Q(Mr,Ge),Ge|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Q(Mr,Ge),Ge|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Q(Mr,Ge),Ge|=r;return Ae(t,e,i,n),e.child}function p_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ku(t,e,n,r,i){var s=$e(n)?tr:Pe.current;return s=Yr(e,s),$r(e,i),n=dd(t,e,n,r,s,i),r=hd(),t!==null&&!je?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Kt(t,e,i)):(X&&r&&Zc(e),e.flags|=1,Ae(t,e,n,i),e.child)}function Of(t,e,n,r,i){if($e(n)){var s=!0;qo(e)}else s=!1;if($r(e,i),e.stateNode===null)Ro(t,e),u_(e,n,r),Gu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=st(u):(u=$e(n)?tr:Pe.current,u=Yr(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&kf(e,o,r,u),sn=!1;var h=e.memoizedState;o.state=h,Xo(e,r,o,i),l=e.memoizedState,a!==r||h!==l||Be.current||sn?(typeof d=="function"&&(Hu(e,n,d,r),l=e.memoizedState),(a=sn||Tf(e,n,a,r,h,l,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,$g(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:ht(e.type,a),o.props=u,c=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=st(l):(l=$e(n)?tr:Pe.current,l=Yr(e,l));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||h!==l)&&kf(e,o,r,l),sn=!1,h=e.memoizedState,o.state=h,Xo(e,r,o,i);var p=e.memoizedState;a!==c||h!==p||Be.current||sn?(typeof v=="function"&&(Hu(e,n,v,r),p=e.memoizedState),(u=sn||Tf(e,n,u,r,h,p,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,p,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,p,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=p),o.props=r,o.state=p,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Qu(t,e,n,r,s,i)}function Qu(t,e,n,r,i,s){p_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&_f(e,n,!1),Kt(t,e,s);r=e.stateNode,d1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Xr(e,t.child,null,s),e.child=Xr(e,null,a,s)):Ae(t,e,a,s),e.memoizedState=r.state,i&&_f(e,n,!0),e.child}function m_(t){var e=t.stateNode;e.pendingContext?gf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&gf(t,e.context,!1),ad(t,e.containerInfo)}function bf(t,e,n,r,i){return Jr(),td(i),e.flags|=256,Ae(t,e,n,r),e.child}var Yu={dehydrated:null,treeContext:null,retryLane:0};function Ju(t){return{baseLanes:t,cachePool:null,transitions:null}}function g_(t,e,n){var r=e.pendingProps,i=Z.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Q(Z,i&1),t===null)return Vu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ha(o,r,0,null),t=Jn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ju(n),e.memoizedState=Yu,t):md(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return h1(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=In(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=In(a,s):(s=Jn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ju(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Yu,r}return s=t.child,t=s.sibling,r=In(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function md(t,e){return e=Ha({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function uo(t,e,n,r){return r!==null&&td(r),Xr(e,t.child,null,n),t=md(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function h1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Hl(Error(C(422))),uo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ha({mode:"visible",children:r.children},i,0,null),s=Jn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Xr(e,t.child,null,o),e.child.memoizedState=Ju(o),e.memoizedState=Yu,s);if(!(e.mode&1))return uo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(C(419)),r=Hl(s,r,void 0),uo(t,e,o,r)}if(a=(o&t.childLanes)!==0,je||a){if(r=we,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,qt(t,i),vt(r,t,i,-1))}return Ed(),r=Hl(Error(C(421))),uo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=T1.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,qe=wn(i.nextSibling),Qe=e,X=!0,pt=null,t!==null&&(et[tt++]=Mt,et[tt++]=Ft,et[tt++]=nr,Mt=t.id,Ft=t.overflow,nr=e),e=md(e,r.children),e.flags|=4096,e)}function Df(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Wu(t.return,e,n)}function Gl(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function __(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ae(t,e,r.children,n),r=Z.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Df(t,n,e);else if(t.tag===19)Df(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Q(Z,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Zo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Gl(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Zo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Gl(e,!0,n,null,s);break;case"together":Gl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ro(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Kt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ir|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=In(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=In(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function f1(t,e,n){switch(e.tag){case 3:m_(e),Jr();break;case 5:Vg(e);break;case 1:$e(e.type)&&qo(e);break;case 4:ad(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Q(Yo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Q(Z,Z.current&1),e.flags|=128,null):n&e.child.childLanes?g_(t,e,n):(Q(Z,Z.current&1),t=Kt(t,e,n),t!==null?t.sibling:null);Q(Z,Z.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return __(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(Z,Z.current),r)break;return null;case 22:case 23:return e.lanes=0,f_(t,e,n)}return Kt(t,e,n)}var v_,Xu,y_,w_;v_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xu=function(){};y_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Gn(xt.current);var s=null;switch(n){case"input":i=wu(t,i),r=wu(t,r),s=[];break;case"select":i=te({},i,{value:void 0}),r=te({},r,{value:void 0}),s=[];break;case"textarea":i=Cu(t,i),r=Cu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ho)}Tu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ts.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ts.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Y("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};w_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ri(t,e){if(!X)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Re(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function p1(t,e,n){var r=e.pendingProps;switch(ed(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(e),null;case 1:return $e(e.type)&&Go(),Re(e),null;case 3:return r=e.stateNode,Zr(),J(Be),J(Pe),ud(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ao(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,pt!==null&&(oc(pt),pt=null))),Xu(t,e),Re(e),null;case 5:ld(e);var i=Gn(fs.current);if(n=e.type,t!==null&&e.stateNode!=null)y_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return Re(e),null}if(t=Gn(xt.current),ao(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[kt]=e,r[ds]=s,t=(e.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(i=0;i<Fi.length;i++)Y(Fi[i],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":$h(r,s),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Y("invalid",r);break;case"textarea":Wh(r,s),Y("invalid",r)}Tu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&oo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&oo(r.textContent,a,t),i=["children",""+a]):ts.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Y("scroll",r)}switch(n){case"input":Xs(r),Vh(r,s,!0);break;case"textarea":Xs(r),Hh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ho)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Km(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[kt]=e,t[ds]=r,v_(t,e,!1,!1),e.stateNode=t;e:{switch(o=ku(n,r),n){case"dialog":Y("cancel",t),Y("close",t),i=r;break;case"iframe":case"object":case"embed":Y("load",t),i=r;break;case"video":case"audio":for(i=0;i<Fi.length;i++)Y(Fi[i],t);i=r;break;case"source":Y("error",t),i=r;break;case"img":case"image":case"link":Y("error",t),Y("load",t),i=r;break;case"details":Y("toggle",t),i=r;break;case"input":$h(t,r),i=wu(t,r),Y("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=te({},r,{value:void 0}),Y("invalid",t);break;case"textarea":Wh(t,r),i=Cu(t,r),Y("invalid",t);break;default:i=r}Tu(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Jm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Qm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ns(t,l):typeof l=="number"&&ns(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ts.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Y("scroll",t):l!=null&&jc(t,s,l,o))}switch(n){case"input":Xs(t),Vh(t,r,!1);break;case"textarea":Xs(t),Hh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Pn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ur(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ur(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ho)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Re(e),null;case 6:if(t&&e.stateNode!=null)w_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=Gn(fs.current),Gn(xt.current),ao(e)){if(r=e.stateNode,n=e.memoizedProps,r[kt]=e,(s=r.nodeValue!==n)&&(t=Qe,t!==null))switch(t.tag){case 3:oo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&oo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kt]=e,e.stateNode=r}return Re(e),null;case 13:if(J(Z),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(X&&qe!==null&&e.mode&1&&!(e.flags&128))Ug(),Jr(),e.flags|=98560,s=!1;else if(s=ao(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(C(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[kt]=e}else Jr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Re(e),s=!1}else pt!==null&&(oc(pt),pt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Z.current&1?fe===0&&(fe=3):Ed())),e.updateQueue!==null&&(e.flags|=4),Re(e),null);case 4:return Zr(),Xu(t,e),t===null&&us(e.stateNode.containerInfo),Re(e),null;case 10:return id(e.type._context),Re(e),null;case 17:return $e(e.type)&&Go(),Re(e),null;case 19:if(J(Z),s=e.memoizedState,s===null)return Re(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ri(s,!1);else{if(fe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Zo(t),o!==null){for(e.flags|=128,Ri(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Q(Z,Z.current&1|2),e.child}t=t.sibling}s.tail!==null&&le()>ti&&(e.flags|=128,r=!0,Ri(s,!1),e.lanes=4194304)}else{if(!r)if(t=Zo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ri(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!X)return Re(e),null}else 2*le()-s.renderingStartTime>ti&&n!==1073741824&&(e.flags|=128,r=!0,Ri(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=le(),e.sibling=null,n=Z.current,Q(Z,r?n&1|2:n&1),e):(Re(e),null);case 22:case 23:return wd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ge&1073741824&&(Re(e),e.subtreeFlags&6&&(e.flags|=8192)):Re(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function m1(t,e){switch(ed(e),e.tag){case 1:return $e(e.type)&&Go(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Zr(),J(Be),J(Pe),ud(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ld(e),null;case 13:if(J(Z),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));Jr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return J(Z),null;case 4:return Zr(),null;case 10:return id(e.type._context),null;case 22:case 23:return wd(),null;case 24:return null;default:return null}}var co=!1,Ne=!1,g1=typeof WeakSet=="function"?WeakSet:Set,R=null;function Lr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(t,e,r)}else n.current=null}function Zu(t,e,n){try{n()}catch(r){ne(t,e,r)}}var Lf=!1;function _1(t,e){if(Mu=$o,t=Tg(),Xc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var v;c!==n||i!==0&&c.nodeType!==3||(a=o+i),c!==s||r!==0&&c.nodeType!==3||(l=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(v=c.firstChild)!==null;)h=c,c=v;for(;;){if(c===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++d===r&&(l=o),(v=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fu={focusedElem:t,selectionRange:n},$o=!1,R=e;R!==null;)if(e=R,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,R=t;else for(;R!==null;){e=R;try{var p=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var y=p.memoizedProps,E=p.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:ht(e.type,y),E);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(w){ne(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,R=t;break}R=e.return}return p=Lf,Lf=!1,p}function Wi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Zu(e,n,s)}i=i.next}while(i!==r)}}function Va(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ec(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function E_(t){var e=t.alternate;e!==null&&(t.alternate=null,E_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[kt],delete e[ds],delete e[zu],delete e[ZE],delete e[e1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function S_(t){return t.tag===5||t.tag===3||t.tag===4}function Mf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||S_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ho));else if(r!==4&&(t=t.child,t!==null))for(tc(t,e,n),t=t.sibling;t!==null;)tc(t,e,n),t=t.sibling}function nc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(nc(t,e,n),t=t.sibling;t!==null;)nc(t,e,n),t=t.sibling}var Ee=null,ft=!1;function tn(t,e,n){for(n=n.child;n!==null;)C_(t,e,n),n=n.sibling}function C_(t,e,n){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(La,n)}catch{}switch(n.tag){case 5:Ne||Lr(n,e);case 6:var r=Ee,i=ft;Ee=null,tn(t,e,n),Ee=r,ft=i,Ee!==null&&(ft?(t=Ee,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ee.removeChild(n.stateNode));break;case 18:Ee!==null&&(ft?(t=Ee,n=n.stateNode,t.nodeType===8?jl(t.parentNode,n):t.nodeType===1&&jl(t,n),os(t)):jl(Ee,n.stateNode));break;case 4:r=Ee,i=ft,Ee=n.stateNode.containerInfo,ft=!0,tn(t,e,n),Ee=r,ft=i;break;case 0:case 11:case 14:case 15:if(!Ne&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Zu(n,e,o),i=i.next}while(i!==r)}tn(t,e,n);break;case 1:if(!Ne&&(Lr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ne(n,e,a)}tn(t,e,n);break;case 21:tn(t,e,n);break;case 22:n.mode&1?(Ne=(r=Ne)||n.memoizedState!==null,tn(t,e,n),Ne=r):tn(t,e,n);break;default:tn(t,e,n)}}function Ff(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new g1),e.forEach(function(r){var i=k1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function dt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ee=a.stateNode,ft=!1;break e;case 3:Ee=a.stateNode.containerInfo,ft=!0;break e;case 4:Ee=a.stateNode.containerInfo,ft=!0;break e}a=a.return}if(Ee===null)throw Error(C(160));C_(s,o,i),Ee=null,ft=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ne(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)I_(e,t),e=e.sibling}function I_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(dt(e,t),It(t),r&4){try{Wi(3,t,t.return),Va(3,t)}catch(y){ne(t,t.return,y)}try{Wi(5,t,t.return)}catch(y){ne(t,t.return,y)}}break;case 1:dt(e,t),It(t),r&512&&n!==null&&Lr(n,n.return);break;case 5:if(dt(e,t),It(t),r&512&&n!==null&&Lr(n,n.return),t.flags&32){var i=t.stateNode;try{ns(i,"")}catch(y){ne(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Gm(i,s),ku(a,o);var u=ku(a,s);for(o=0;o<l.length;o+=2){var d=l[o],c=l[o+1];d==="style"?Jm(i,c):d==="dangerouslySetInnerHTML"?Qm(i,c):d==="children"?ns(i,c):jc(i,d,c,u)}switch(a){case"input":Eu(i,s);break;case"textarea":qm(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Ur(i,!!s.multiple,v,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ur(i,!!s.multiple,s.defaultValue,!0):Ur(i,!!s.multiple,s.multiple?[]:"",!1))}i[ds]=s}catch(y){ne(t,t.return,y)}}break;case 6:if(dt(e,t),It(t),r&4){if(t.stateNode===null)throw Error(C(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){ne(t,t.return,y)}}break;case 3:if(dt(e,t),It(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{os(e.containerInfo)}catch(y){ne(t,t.return,y)}break;case 4:dt(e,t),It(t);break;case 13:dt(e,t),It(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(vd=le())),r&4&&Ff(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ne=(u=Ne)||d,dt(e,t),Ne=u):dt(e,t),It(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(R=t,d=t.child;d!==null;){for(c=R=d;R!==null;){switch(h=R,v=h.child,h.tag){case 0:case 11:case 14:case 15:Wi(4,h,h.return);break;case 1:Lr(h,h.return);var p=h.stateNode;if(typeof p.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,p.props=e.memoizedProps,p.state=e.memoizedState,p.componentWillUnmount()}catch(y){ne(r,n,y)}}break;case 5:Lr(h,h.return);break;case 22:if(h.memoizedState!==null){jf(c);continue}}v!==null?(v.return=h,R=v):jf(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=c.stateNode,l=c.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ym("display",o))}catch(y){ne(t,t.return,y)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){ne(t,t.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:dt(e,t),It(t),r&4&&Ff(t);break;case 21:break;default:dt(e,t),It(t)}}function It(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(S_(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ns(i,""),r.flags&=-33);var s=Mf(t);nc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Mf(t);tc(t,a,o);break;default:throw Error(C(161))}}catch(l){ne(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function v1(t,e,n){R=t,T_(t)}function T_(t,e,n){for(var r=(t.mode&1)!==0;R!==null;){var i=R,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||co;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ne;a=co;var u=Ne;if(co=o,(Ne=l)&&!u)for(R=i;R!==null;)o=R,l=o.child,o.tag===22&&o.memoizedState!==null?zf(i):l!==null?(l.return=o,R=l):zf(i);for(;s!==null;)R=s,T_(s),s=s.sibling;R=i,co=a,Ne=u}Uf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,R=s):Uf(t)}}function Uf(t){for(;R!==null;){var e=R;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ne||Va(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ne)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ht(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Sf(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Sf(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&os(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Ne||e.flags&512&&ec(e)}catch(h){ne(e,e.return,h)}}if(e===t){R=null;break}if(n=e.sibling,n!==null){n.return=e.return,R=n;break}R=e.return}}function jf(t){for(;R!==null;){var e=R;if(e===t){R=null;break}var n=e.sibling;if(n!==null){n.return=e.return,R=n;break}R=e.return}}function zf(t){for(;R!==null;){var e=R;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Va(4,e)}catch(l){ne(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ne(e,i,l)}}var s=e.return;try{ec(e)}catch(l){ne(e,s,l)}break;case 5:var o=e.return;try{ec(e)}catch(l){ne(e,o,l)}}}catch(l){ne(e,e.return,l)}if(e===t){R=null;break}var a=e.sibling;if(a!==null){a.return=e.return,R=a;break}R=e.return}}var y1=Math.ceil,na=Xt.ReactCurrentDispatcher,gd=Xt.ReactCurrentOwner,it=Xt.ReactCurrentBatchConfig,z=0,we=null,ue=null,Ce=0,Ge=0,Mr=Ln(0),fe=0,_s=null,ir=0,Wa=0,_d=0,Hi=null,Ue=null,vd=0,ti=1/0,Dt=null,ra=!1,rc=null,Sn=null,ho=!1,fn=null,ia=0,Gi=0,ic=null,No=-1,Po=0;function be(){return z&6?le():No!==-1?No:No=le()}function Cn(t){return t.mode&1?z&2&&Ce!==0?Ce&-Ce:n1.transition!==null?(Po===0&&(Po=ug()),Po):(t=V,t!==0||(t=window.event,t=t===void 0?16:gg(t.type)),t):1}function vt(t,e,n,r){if(50<Gi)throw Gi=0,ic=null,Error(C(185));Ds(t,n,r),(!(z&2)||t!==we)&&(t===we&&(!(z&2)&&(Wa|=n),fe===4&&an(t,Ce)),Ve(t,r),n===1&&z===0&&!(e.mode&1)&&(ti=le()+500,za&&Mn()))}function Ve(t,e){var n=t.callbackNode;nE(t,e);var r=Bo(t,t===we?Ce:0);if(r===0)n!==null&&Kh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Kh(n),e===1)t.tag===0?t1(Bf.bind(null,t)):Lg(Bf.bind(null,t)),JE(function(){!(z&6)&&Mn()}),n=null;else{switch(cg(r)){case 1:n=Wc;break;case 4:n=ag;break;case 16:n=zo;break;case 536870912:n=lg;break;default:n=zo}n=b_(n,k_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function k_(t,e){if(No=-1,Po=0,z&6)throw Error(C(327));var n=t.callbackNode;if(Vr()&&t.callbackNode!==n)return null;var r=Bo(t,t===we?Ce:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=sa(t,r);else{e=r;var i=z;z|=2;var s=N_();(we!==t||Ce!==e)&&(Dt=null,ti=le()+500,Yn(t,e));do try{S1();break}catch(a){R_(t,a)}while(!0);rd(),na.current=s,z=i,ue!==null?e=0:(we=null,Ce=0,e=fe)}if(e!==0){if(e===2&&(i=Au(t),i!==0&&(r=i,e=sc(t,i))),e===1)throw n=_s,Yn(t,0),an(t,r),Ve(t,le()),n;if(e===6)an(t,r);else{if(i=t.current.alternate,!(r&30)&&!w1(i)&&(e=sa(t,r),e===2&&(s=Au(t),s!==0&&(r=s,e=sc(t,s))),e===1))throw n=_s,Yn(t,0),an(t,r),Ve(t,le()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:Bn(t,Ue,Dt);break;case 3:if(an(t,r),(r&130023424)===r&&(e=vd+500-le(),10<e)){if(Bo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){be(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ju(Bn.bind(null,t,Ue,Dt),e);break}Bn(t,Ue,Dt);break;case 4:if(an(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-_t(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*y1(r/1960))-r,10<r){t.timeoutHandle=ju(Bn.bind(null,t,Ue,Dt),r);break}Bn(t,Ue,Dt);break;case 5:Bn(t,Ue,Dt);break;default:throw Error(C(329))}}}return Ve(t,le()),t.callbackNode===n?k_.bind(null,t):null}function sc(t,e){var n=Hi;return t.current.memoizedState.isDehydrated&&(Yn(t,e).flags|=256),t=sa(t,e),t!==2&&(e=Ue,Ue=n,e!==null&&oc(e)),t}function oc(t){Ue===null?Ue=t:Ue.push.apply(Ue,t)}function w1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Et(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function an(t,e){for(e&=~_d,e&=~Wa,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-_t(e),r=1<<n;t[n]=-1,e&=~r}}function Bf(t){if(z&6)throw Error(C(327));Vr();var e=Bo(t,0);if(!(e&1))return Ve(t,le()),null;var n=sa(t,e);if(t.tag!==0&&n===2){var r=Au(t);r!==0&&(e=r,n=sc(t,r))}if(n===1)throw n=_s,Yn(t,0),an(t,e),Ve(t,le()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Bn(t,Ue,Dt),Ve(t,le()),null}function yd(t,e){var n=z;z|=1;try{return t(e)}finally{z=n,z===0&&(ti=le()+500,za&&Mn())}}function sr(t){fn!==null&&fn.tag===0&&!(z&6)&&Vr();var e=z;z|=1;var n=it.transition,r=V;try{if(it.transition=null,V=1,t)return t()}finally{V=r,it.transition=n,z=e,!(z&6)&&Mn()}}function wd(){Ge=Mr.current,J(Mr)}function Yn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,YE(n)),ue!==null)for(n=ue.return;n!==null;){var r=n;switch(ed(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Go();break;case 3:Zr(),J(Be),J(Pe),ud();break;case 5:ld(r);break;case 4:Zr();break;case 13:J(Z);break;case 19:J(Z);break;case 10:id(r.type._context);break;case 22:case 23:wd()}n=n.return}if(we=t,ue=t=In(t.current,null),Ce=Ge=e,fe=0,_s=null,_d=Wa=ir=0,Ue=Hi=null,Hn!==null){for(e=0;e<Hn.length;e++)if(n=Hn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Hn=null}return t}function R_(t,e){do{var n=ue;try{if(rd(),To.current=ta,ea){for(var r=ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ea=!1}if(rr=0,ve=ce=ee=null,Vi=!1,ps=0,gd.current=null,n===null||n.return===null){fe=1,_s=e,ue=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ce,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Nf(o);if(v!==null){v.flags&=-257,Pf(v,o,a,s,e),v.mode&1&&Rf(s,u,e),e=v,l=u;var p=e.updateQueue;if(p===null){var y=new Set;y.add(l),e.updateQueue=y}else p.add(l);break e}else{if(!(e&1)){Rf(s,u,e),Ed();break e}l=Error(C(426))}}else if(X&&a.mode&1){var E=Nf(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Pf(E,o,a,s,e),td(ei(l,a));break e}}s=l=ei(l,a),fe!==4&&(fe=2),Hi===null?Hi=[s]:Hi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=c_(s,l,e);Ef(s,m);break e;case 1:a=l;var f=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Sn===null||!Sn.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=d_(s,a,e);Ef(s,w);break e}}s=s.return}while(s!==null)}x_(n)}catch(T){e=T,ue===n&&n!==null&&(ue=n=n.return);continue}break}while(!0)}function N_(){var t=na.current;return na.current=ta,t===null?ta:t}function Ed(){(fe===0||fe===3||fe===2)&&(fe=4),we===null||!(ir&268435455)&&!(Wa&268435455)||an(we,Ce)}function sa(t,e){var n=z;z|=2;var r=N_();(we!==t||Ce!==e)&&(Dt=null,Yn(t,e));do try{E1();break}catch(i){R_(t,i)}while(!0);if(rd(),z=n,na.current=r,ue!==null)throw Error(C(261));return we=null,Ce=0,fe}function E1(){for(;ue!==null;)P_(ue)}function S1(){for(;ue!==null&&!qw();)P_(ue)}function P_(t){var e=O_(t.alternate,t,Ge);t.memoizedProps=t.pendingProps,e===null?x_(t):ue=e,gd.current=null}function x_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=m1(n,e),n!==null){n.flags&=32767,ue=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{fe=6,ue=null;return}}else if(n=p1(n,e,Ge),n!==null){ue=n;return}if(e=e.sibling,e!==null){ue=e;return}ue=e=t}while(e!==null);fe===0&&(fe=5)}function Bn(t,e,n){var r=V,i=it.transition;try{it.transition=null,V=1,C1(t,e,n,r)}finally{it.transition=i,V=r}return null}function C1(t,e,n,r){do Vr();while(fn!==null);if(z&6)throw Error(C(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(rE(t,s),t===we&&(ue=we=null,Ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ho||(ho=!0,b_(zo,function(){return Vr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=it.transition,it.transition=null;var o=V;V=1;var a=z;z|=4,gd.current=null,_1(t,n),I_(n,t),VE(Fu),$o=!!Mu,Fu=Mu=null,t.current=n,v1(n),Kw(),z=a,V=o,it.transition=s}else t.current=n;if(ho&&(ho=!1,fn=t,ia=i),s=t.pendingLanes,s===0&&(Sn=null),Jw(n.stateNode),Ve(t,le()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ra)throw ra=!1,t=rc,rc=null,t;return ia&1&&t.tag!==0&&Vr(),s=t.pendingLanes,s&1?t===ic?Gi++:(Gi=0,ic=t):Gi=0,Mn(),null}function Vr(){if(fn!==null){var t=cg(ia),e=it.transition,n=V;try{if(it.transition=null,V=16>t?16:t,fn===null)var r=!1;else{if(t=fn,fn=null,ia=0,z&6)throw Error(C(331));var i=z;for(z|=4,R=t.current;R!==null;){var s=R,o=s.child;if(R.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(R=u;R!==null;){var d=R;switch(d.tag){case 0:case 11:case 15:Wi(8,d,s)}var c=d.child;if(c!==null)c.return=d,R=c;else for(;R!==null;){d=R;var h=d.sibling,v=d.return;if(E_(d),d===u){R=null;break}if(h!==null){h.return=v,R=h;break}R=v}}}var p=s.alternate;if(p!==null){var y=p.child;if(y!==null){p.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}R=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,R=o;else e:for(;R!==null;){if(s=R,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Wi(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,R=m;break e}R=s.return}}var f=t.current;for(R=f;R!==null;){o=R;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,R=_;else e:for(o=f;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Va(9,a)}}catch(T){ne(a,a.return,T)}if(a===o){R=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,R=w;break e}R=a.return}}if(z=i,Mn(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(La,t)}catch{}r=!0}return r}finally{V=n,it.transition=e}}return!1}function $f(t,e,n){e=ei(n,e),e=c_(t,e,1),t=En(t,e,1),e=be(),t!==null&&(Ds(t,1,e),Ve(t,e))}function ne(t,e,n){if(t.tag===3)$f(t,t,n);else for(;e!==null;){if(e.tag===3){$f(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sn===null||!Sn.has(r))){t=ei(n,t),t=d_(e,t,1),e=En(e,t,1),t=be(),e!==null&&(Ds(e,1,t),Ve(e,t));break}}e=e.return}}function I1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=be(),t.pingedLanes|=t.suspendedLanes&n,we===t&&(Ce&n)===n&&(fe===4||fe===3&&(Ce&130023424)===Ce&&500>le()-vd?Yn(t,0):_d|=n),Ve(t,e)}function A_(t,e){e===0&&(t.mode&1?(e=to,to<<=1,!(to&130023424)&&(to=4194304)):e=1);var n=be();t=qt(t,e),t!==null&&(Ds(t,e,n),Ve(t,n))}function T1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),A_(t,n)}function k1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),A_(t,n)}var O_;O_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Be.current)je=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return je=!1,f1(t,e,n);je=!!(t.flags&131072)}else je=!1,X&&e.flags&1048576&&Mg(e,Qo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ro(t,e),t=e.pendingProps;var i=Yr(e,Pe.current);$r(e,n),i=dd(null,e,r,t,i,n);var s=hd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,$e(r)?(s=!0,qo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,od(e),i.updater=$a,e.stateNode=i,i._reactInternals=e,Gu(e,r,t,n),e=Qu(null,e,r,!0,s,n)):(e.tag=0,X&&s&&Zc(e),Ae(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ro(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=N1(r),t=ht(r,t),i){case 0:e=Ku(null,e,r,t,n);break e;case 1:e=Of(null,e,r,t,n);break e;case 11:e=xf(null,e,r,t,n);break e;case 14:e=Af(null,e,r,ht(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ht(r,i),Ku(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ht(r,i),Of(t,e,r,i,n);case 3:e:{if(m_(e),t===null)throw Error(C(387));r=e.pendingProps,s=e.memoizedState,i=s.element,$g(t,e),Xo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ei(Error(C(423)),e),e=bf(t,e,r,n,i);break e}else if(r!==i){i=ei(Error(C(424)),e),e=bf(t,e,r,n,i);break e}else for(qe=wn(e.stateNode.containerInfo.firstChild),Qe=e,X=!0,pt=null,n=zg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jr(),r===i){e=Kt(t,e,n);break e}Ae(t,e,r,n)}e=e.child}return e;case 5:return Vg(e),t===null&&Vu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Uu(r,i)?o=null:s!==null&&Uu(r,s)&&(e.flags|=32),p_(t,e),Ae(t,e,o,n),e.child;case 6:return t===null&&Vu(e),null;case 13:return g_(t,e,n);case 4:return ad(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Xr(e,null,r,n):Ae(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ht(r,i),xf(t,e,r,i,n);case 7:return Ae(t,e,e.pendingProps,n),e.child;case 8:return Ae(t,e,e.pendingProps.children,n),e.child;case 12:return Ae(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Q(Yo,r._currentValue),r._currentValue=o,s!==null)if(Et(s.value,o)){if(s.children===i.children&&!Be.current){e=Kt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Vt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Wu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Wu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ae(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,$r(e,n),i=st(i),r=r(i),e.flags|=1,Ae(t,e,r,n),e.child;case 14:return r=e.type,i=ht(r,e.pendingProps),i=ht(r.type,i),Af(t,e,r,i,n);case 15:return h_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ht(r,i),Ro(t,e),e.tag=1,$e(r)?(t=!0,qo(e)):t=!1,$r(e,n),u_(e,r,i),Gu(e,r,i,n),Qu(null,e,r,!0,t,n);case 19:return __(t,e,n);case 22:return f_(t,e,n)}throw Error(C(156,e.tag))};function b_(t,e){return og(t,e)}function R1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(t,e,n,r){return new R1(t,e,n,r)}function Sd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function N1(t){if(typeof t=="function")return Sd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Bc)return 11;if(t===$c)return 14}return 2}function In(t,e){var n=t.alternate;return n===null?(n=nt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Sd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case kr:return Jn(n.children,i,s,e);case zc:o=8,i|=8;break;case gu:return t=nt(12,n,e,i|2),t.elementType=gu,t.lanes=s,t;case _u:return t=nt(13,n,e,i),t.elementType=_u,t.lanes=s,t;case vu:return t=nt(19,n,e,i),t.elementType=vu,t.lanes=s,t;case Vm:return Ha(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Bm:o=10;break e;case $m:o=9;break e;case Bc:o=11;break e;case $c:o=14;break e;case rn:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=nt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Jn(t,e,n,r){return t=nt(7,t,r,e),t.lanes=n,t}function Ha(t,e,n,r){return t=nt(22,t,r,e),t.elementType=Vm,t.lanes=n,t.stateNode={isHidden:!1},t}function ql(t,e,n){return t=nt(6,t,null,e),t.lanes=n,t}function Kl(t,e,n){return e=nt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function P1(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nl(0),this.expirationTimes=Nl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Cd(t,e,n,r,i,s,o,a,l){return t=new P1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=nt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},od(s),t}function x1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Tr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function D_(t){if(!t)return xn;t=t._reactInternals;e:{if(pr(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if($e(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if($e(n))return Dg(t,n,e)}return e}function L_(t,e,n,r,i,s,o,a,l){return t=Cd(n,r,!0,t,i,s,o,a,l),t.context=D_(null),n=t.current,r=be(),i=Cn(n),s=Vt(r,i),s.callback=e??null,En(n,s,i),t.current.lanes=i,Ds(t,i,r),Ve(t,r),t}function Ga(t,e,n,r){var i=e.current,s=be(),o=Cn(i);return n=D_(n),e.context===null?e.context=n:e.pendingContext=n,e=Vt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=En(i,e,o),t!==null&&(vt(t,i,o,s),Io(t,i,o)),o}function oa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Vf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Id(t,e){Vf(t,e),(t=t.alternate)&&Vf(t,e)}function A1(){return null}var M_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Td(t){this._internalRoot=t}qa.prototype.render=Td.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));Ga(t,e,null,null)};qa.prototype.unmount=Td.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;sr(function(){Ga(null,t,null,null)}),e[Gt]=null}};function qa(t){this._internalRoot=t}qa.prototype.unstable_scheduleHydration=function(t){if(t){var e=fg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<on.length&&e!==0&&e<on[n].priority;n++);on.splice(n,0,t),n===0&&mg(t)}};function kd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ka(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Wf(){}function O1(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=oa(o);s.call(u)}}var o=L_(e,r,t,0,null,!1,!1,"",Wf);return t._reactRootContainer=o,t[Gt]=o.current,us(t.nodeType===8?t.parentNode:t),sr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=oa(l);a.call(u)}}var l=Cd(t,0,!1,null,null,!1,!1,"",Wf);return t._reactRootContainer=l,t[Gt]=l.current,us(t.nodeType===8?t.parentNode:t),sr(function(){Ga(e,l,n,r)}),l}function Qa(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=oa(o);a.call(l)}}Ga(e,o,t,i)}else o=O1(n,e,t,i,r);return oa(o)}dg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Mi(e.pendingLanes);n!==0&&(Hc(e,n|1),Ve(e,le()),!(z&6)&&(ti=le()+500,Mn()))}break;case 13:sr(function(){var r=qt(t,1);if(r!==null){var i=be();vt(r,t,1,i)}}),Id(t,1)}};Gc=function(t){if(t.tag===13){var e=qt(t,134217728);if(e!==null){var n=be();vt(e,t,134217728,n)}Id(t,134217728)}};hg=function(t){if(t.tag===13){var e=Cn(t),n=qt(t,e);if(n!==null){var r=be();vt(n,t,e,r)}Id(t,e)}};fg=function(){return V};pg=function(t,e){var n=V;try{return V=t,e()}finally{V=n}};Nu=function(t,e,n){switch(e){case"input":if(Eu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ja(r);if(!i)throw Error(C(90));Hm(r),Eu(r,i)}}}break;case"textarea":qm(t,n);break;case"select":e=n.value,e!=null&&Ur(t,!!n.multiple,e,!1)}};eg=yd;tg=sr;var b1={usingClientEntryPoint:!1,Events:[Ms,xr,ja,Xm,Zm,yd]},Ni={findFiberByHostInstance:Wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},D1={bundleType:Ni.bundleType,version:Ni.version,rendererPackageName:Ni.rendererPackageName,rendererConfig:Ni.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ig(t),t===null?null:t.stateNode},findFiberByHostInstance:Ni.findFiberByHostInstance||A1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fo.isDisabled&&fo.supportsFiber)try{La=fo.inject(D1),Pt=fo}catch{}}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b1;Xe.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kd(e))throw Error(C(200));return x1(t,e,null,n)};Xe.createRoot=function(t,e){if(!kd(t))throw Error(C(299));var n=!1,r="",i=M_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Cd(t,1,!1,null,null,n,!1,r,i),t[Gt]=e.current,us(t.nodeType===8?t.parentNode:t),new Td(e)};Xe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=ig(e),t=t===null?null:t.stateNode,t};Xe.flushSync=function(t){return sr(t)};Xe.hydrate=function(t,e,n){if(!Ka(e))throw Error(C(200));return Qa(null,t,e,!0,n)};Xe.hydrateRoot=function(t,e,n){if(!kd(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=M_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=L_(e,null,t,1,n??null,i,!1,s,o),t[Gt]=e.current,us(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new qa(e)};Xe.render=function(t,e,n){if(!Ka(e))throw Error(C(200));return Qa(null,t,e,!1,n)};Xe.unmountComponentAtNode=function(t){if(!Ka(t))throw Error(C(40));return t._reactRootContainer?(sr(function(){Qa(null,null,t,!1,function(){t._reactRootContainer=null,t[Gt]=null})}),!0):!1};Xe.unstable_batchedUpdates=yd;Xe.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ka(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return Qa(t,e,n,!1,r)};Xe.version="18.3.1-next-f1338f8080-20240426";function F_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(F_)}catch(t){console.error(t)}}F_(),Fm.exports=Xe;var L1=Fm.exports,U_,Hf=L1;U_=Hf.createRoot,Hf.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vs(){return vs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vs.apply(this,arguments)}var pn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(pn||(pn={}));const Gf="popstate";function M1(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=mr(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),ac("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:j_(s))}function r(i,s){Rd(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return U1(e,n,r,t)}function pe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Rd(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function F1(){return Math.random().toString(36).substr(2,8)}function qf(t,e){return{usr:t.state,key:t.key,idx:e}}function ac(t,e,n,r){return n===void 0&&(n=null),vs({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?mr(e):e,{state:n,key:e&&e.key||r||F1()})}function j_(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function mr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function U1(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=pn.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(vs({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function c(){a=pn.Pop;let E=d(),m=E==null?null:E-u;u=E,l&&l({action:a,location:y.location,delta:m})}function h(E,m){a=pn.Push;let f=ac(y.location,E,m);n&&n(f,E),u=d()+1;let _=qf(f,u),w=y.createHref(f);try{o.pushState(_,"",w)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(w)}s&&l&&l({action:a,location:y.location,delta:1})}function v(E,m){a=pn.Replace;let f=ac(y.location,E,m);n&&n(f,E),u=d();let _=qf(f,u),w=y.createHref(f);o.replaceState(_,"",w),s&&l&&l({action:a,location:y.location,delta:0})}function p(E){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof E=="string"?E:j_(E);return f=f.replace(/ $/,"%20"),pe(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let y={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Gf,c),l=E,()=>{i.removeEventListener(Gf,c),l=null}},createHref(E){return e(i,E)},createURL:p,encodeLocation(E){let m=p(E);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:v,go(E){return o.go(E)}};return y}var Kf;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Kf||(Kf={}));function j1(t,e,n){return n===void 0&&(n="/"),z1(t,e,n,!1)}function z1(t,e,n,r){let i=typeof e=="string"?mr(e):e,s=$_(i.pathname||"/",n);if(s==null)return null;let o=z_(t);B1(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=X1(s);a=Y1(o[l],u,r)}return a}function z_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(pe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Xn([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(pe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),z_(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:K1(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of B_(s.path))i(s,o,l)}),e}function B_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=B_(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function B1(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Q1(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const $1=/^:[\w-]+$/,V1=3,W1=2,H1=1,G1=10,q1=-2,Qf=t=>t==="*";function K1(t,e){let n=t.split("/"),r=n.length;return n.some(Qf)&&(r+=q1),e&&(r+=W1),n.filter(i=>!Qf(i)).reduce((i,s)=>i+($1.test(s)?V1:s===""?H1:G1),r)}function Q1(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Y1(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",c=Yf({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),h=l.route;if(!c&&u&&n&&!r[r.length-1].route.index&&(c=Yf({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!c)return null;Object.assign(i,c.params),o.push({params:i,pathname:Xn([s,c.pathname]),pathnameBase:iS(Xn([s,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(s=Xn([s,c.pathnameBase]))}return o}function Yf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=J1(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:h,isOptional:v}=d;if(h==="*"){let y=a[c]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const p=a[c];return v&&!p?u[h]=void 0:u[h]=(p||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function J1(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Rd(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function X1(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Rd(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function $_(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Z1(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?mr(t):t;return{pathname:n?n.startsWith("/")?n:eS(n,e):e,search:sS(r),hash:oS(i)}}function eS(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ql(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function tS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function nS(t,e){let n=tS(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function rS(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=mr(t):(i=vs({},t),pe(!i.pathname||!i.pathname.includes("?"),Ql("?","pathname","search",i)),pe(!i.pathname||!i.pathname.includes("#"),Ql("#","pathname","hash",i)),pe(!i.search||!i.search.includes("#"),Ql("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let c=e.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),c-=1;i.pathname=h.join("/")}a=c>=0?e[c]:"/"}let l=Z1(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Xn=t=>t.join("/").replace(/\/\/+/g,"/"),iS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),sS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,oS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function aS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const V_=["post","put","patch","delete"];new Set(V_);const lS=["get",...V_];new Set(lS);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ys(){return ys=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ys.apply(this,arguments)}const Nd=S.createContext(null),uS=S.createContext(null),Ya=S.createContext(null),Ja=S.createContext(null),hi=S.createContext({outlet:null,matches:[],isDataRoute:!1}),W_=S.createContext(null);function Xa(){return S.useContext(Ja)!=null}function H_(){return Xa()||pe(!1),S.useContext(Ja).location}function G_(t){S.useContext(Ya).static||S.useLayoutEffect(t)}function q_(){let{isDataRoute:t}=S.useContext(hi);return t?SS():cS()}function cS(){Xa()||pe(!1);let t=S.useContext(Nd),{basename:e,future:n,navigator:r}=S.useContext(Ya),{matches:i}=S.useContext(hi),{pathname:s}=H_(),o=JSON.stringify(nS(i,n.v7_relativeSplatPath)),a=S.useRef(!1);return G_(()=>{a.current=!0}),S.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=rS(u,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Xn([e,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[e,r,o,s,t])}function dS(t,e){return hS(t,e)}function hS(t,e,n,r){Xa()||pe(!1);let{navigator:i}=S.useContext(Ya),{matches:s}=S.useContext(hi),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=H_(),d;if(e){var c;let E=typeof e=="string"?mr(e):e;l==="/"||(c=E.pathname)!=null&&c.startsWith(l)||pe(!1),d=E}else d=u;let h=d.pathname||"/",v=h;if(l!=="/"){let E=l.replace(/^\//,"").split("/");v="/"+h.replace(/^\//,"").split("/").slice(E.length).join("/")}let p=j1(t,{pathname:v}),y=_S(p&&p.map(E=>Object.assign({},E,{params:Object.assign({},a,E.params),pathname:Xn([l,i.encodeLocation?i.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?l:Xn([l,i.encodeLocation?i.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),s,n,r);return e&&y?S.createElement(Ja.Provider,{value:{location:ys({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:pn.Pop}},y):y}function fS(){let t=ES(),e=aS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,null)}const pS=S.createElement(fS,null);class mS extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?S.createElement(hi.Provider,{value:this.props.routeContext},S.createElement(W_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function gS(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(Nd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(hi.Provider,{value:e},r)}function _S(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id])!==void 0);d>=0||pe(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let c=o[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:h,errors:v}=n,p=c.route.loader&&h[c.route.id]===void 0&&(!v||v[c.route.id]===void 0);if(c.route.lazy||p){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,c,h)=>{let v,p=!1,y=null,E=null;n&&(v=a&&c.route.id?a[c.route.id]:void 0,y=c.route.errorElement||pS,l&&(u<0&&h===0?(p=!0,E=null):u===h&&(p=!0,E=c.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,h+1)),f=()=>{let _;return v?_=y:p?_=E:c.route.Component?_=S.createElement(c.route.Component,null):c.route.element?_=c.route.element:_=d,S.createElement(gS,{match:c,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:_})};return n&&(c.route.ErrorBoundary||c.route.errorElement||h===0)?S.createElement(mS,{location:n.location,revalidation:n.revalidation,component:y,error:v,children:f(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):f()},null)}var K_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(K_||{}),aa=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(aa||{});function vS(t){let e=S.useContext(Nd);return e||pe(!1),e}function yS(t){let e=S.useContext(uS);return e||pe(!1),e}function wS(t){let e=S.useContext(hi);return e||pe(!1),e}function Q_(t){let e=wS(),n=e.matches[e.matches.length-1];return n.route.id||pe(!1),n.route.id}function ES(){var t;let e=S.useContext(W_),n=yS(aa.UseRouteError),r=Q_(aa.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function SS(){let{router:t}=vS(K_.UseNavigateStable),e=Q_(aa.UseNavigateStable),n=S.useRef(!1);return G_(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ys({fromRouteId:e},s)))},[t,e])}function Ao(t){pe(!1)}function CS(t){let{basename:e="/",children:n=null,location:r,navigationType:i=pn.Pop,navigator:s,static:o=!1,future:a}=t;Xa()&&pe(!1);let l=e.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:l,navigator:s,static:o,future:ys({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=mr(r));let{pathname:d="/",search:c="",hash:h="",state:v=null,key:p="default"}=r,y=S.useMemo(()=>{let E=$_(d,l);return E==null?null:{location:{pathname:E,search:c,hash:h,state:v,key:p},navigationType:i}},[l,d,c,h,v,p,i]);return y==null?null:S.createElement(Ya.Provider,{value:u},S.createElement(Ja.Provider,{children:n,value:y}))}function IS(t){let{children:e,location:n}=t;return dS(lc(e),n)}new Promise(()=>{});function lc(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let s=[...e,i];if(r.type===S.Fragment){n.push.apply(n,lc(r.props.children,s));return}r.type!==Ao&&pe(!1),!r.props.index||!r.props.children||pe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=lc(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const TS="6";try{window.__reactRouterVersion=TS}catch{}const kS="startTransition",Jf=Iw[kS];function RS(t){let{basename:e,children:n,future:r,window:i}=t,s=S.useRef();s.current==null&&(s.current=M1({window:i,v5Compat:!0}));let o=s.current,[a,l]=S.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=S.useCallback(c=>{u&&Jf?Jf(()=>l(c)):l(c)},[l,u]);return S.useLayoutEffect(()=>o.listen(d),[o,d]),S.createElement(CS,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var Xf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Xf||(Xf={}));var Zf;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Zf||(Zf={}));const NS="/assets/logo-HnVQbui9.png",Y_=()=>g.jsxs("header",{className:"header",children:[g.jsxs("div",{className:"logo",children:[g.jsx("img",{src:NS,alt:"Logo",className:"logo-img"}),g.jsx("span",{className:"neon-text",children:"RANKING PADEL"})]}),g.jsxs("nav",{className:"nav",children:[g.jsx("a",{href:"#canchas",className:"nav-link",children:"Canchas"}),g.jsx("a",{href:"#torneos",className:"nav-link",children:"Torneos"}),g.jsx("a",{href:"#jugadores",className:"nav-link",children:"Jugadores"}),g.jsx("a",{href:"#ranking",className:"nav-link",children:"Ranking"})]})]});var ep={};/**
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
 */const J_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const I=function(t,e){if(!t)throw fi(e)},fi=function(t){return new Error("Firebase Database ("+J_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const X_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},PS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Pd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=s>>2,c=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,v=u&63;l||(v=64,o||(h=64)),r.push(n[d],n[c],n[h],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(X_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):PS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||c==null)throw new xS;const h=s<<2|a>>4;if(r.push(h),u!==64){const v=a<<4&240|u>>2;if(r.push(v),c!==64){const p=u<<6&192|c;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Z_=function(t){const e=X_(t);return Pd.encodeByteArray(e,!0)},la=function(t){return Z_(t).replace(/\./g,"")},ua=function(t){try{return Pd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function AS(t){return ev(void 0,t)}function ev(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!OS(n)||(t[n]=ev(t[n],e[n]));return t}function OS(t){return t!=="__proto__"}/**
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
 */function bS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const DS=()=>bS().__FIREBASE_DEFAULTS__,LS=()=>{if(typeof process>"u"||typeof ep>"u")return;const t=ep.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},MS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ua(t[1]);return e&&JSON.parse(e)},xd=()=>{try{return DS()||LS()||MS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},tv=t=>{var e,n;return(n=(e=xd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},nv=t=>{const e=tv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},rv=()=>{var t;return(t=xd())===null||t===void 0?void 0:t.config},iv=t=>{var e;return(e=xd())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Us{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function sv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[la(JSON.stringify(n)),la(JSON.stringify(o)),""].join(".")}/**
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
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ad(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function ov(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function av(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function FS(){const t=Le();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function lv(){return J_.NODE_ADMIN===!0}function uv(){try{return typeof indexedDB=="object"}catch{return!1}}function cv(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function US(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const jS="FirebaseError";class Ct extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=jS,Object.setPrototypeOf(this,Ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gr.prototype.create)}}class gr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?zS(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ct(i,a,r)}}function zS(t,e){return t.replace(BS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const BS=/\{\$([^}]+)}/g;/**
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
 */function ws(t){return JSON.parse(t)}function he(t){return JSON.stringify(t)}/**
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
 */const dv=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ws(ua(s[0])||""),n=ws(ua(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},$S=function(t){const e=dv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},VS=function(t){const e=dv(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function bt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ni(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function uc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ca(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Es(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(tp(s)&&tp(o)){if(!Es(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function tp(t){return t!==null&&typeof t=="object"}/**
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
 */function pi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class WS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=a^s&(o^a),d=1518500249):(u=s^o^a,d=1859775393):c<60?(u=s&o|a&(s|o),d=2400959708):(u=s^o^a,d=3395469782);const h=(i<<5|i>>>27)+u+l+d+r[c]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function HS(t,e){const n=new GS(t,e);return n.subscribe.bind(n)}class GS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");qS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Yl),i.error===void 0&&(i.error=Yl),i.complete===void 0&&(i.complete=Yl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Yl(){}function Za(t,e){return`${t} failed: ${e} argument `}/**
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
 */const KS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,I(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},el=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const QS=1e3,YS=2,JS=4*60*60*1e3,XS=.5;function np(t,e=QS,n=YS){const r=e*Math.pow(n,t),i=Math.round(XS*r*(Math.random()-.5)*2);return Math.min(JS,r+i)}/**
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
 */function me(t){return t&&t._delegate?t._delegate:t}class at{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const $n="[DEFAULT]";/**
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
 */class ZS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Us;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tC(e))try{this.getOrInitializeService({instanceIdentifier:$n})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=$n){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$n){return this.instances.has(e)}getOptions(e=$n){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:eC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=$n){return this.component?this.component.multipleInstances?e:$n:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eC(t){return t===$n?void 0:t}function tC(t){return t.instantiationMode==="EAGER"}/**
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
 */class nC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ZS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var H;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(H||(H={}));const rC={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},iC=H.INFO,sC={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},oC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=sC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tl{constructor(e){this.name=e,this._logLevel=iC,this._logHandler=oC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const aC=(t,e)=>e.some(n=>t instanceof n);let rp,ip;function lC(){return rp||(rp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uC(){return ip||(ip=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hv=new WeakMap,cc=new WeakMap,fv=new WeakMap,Jl=new WeakMap,Od=new WeakMap;function cC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Tn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hv.set(n,t)}).catch(()=>{}),Od.set(e,t),e}function dC(t){if(cc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});cc.set(t,e)}let dc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hC(t){dc=t(dc)}function fC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Xl(this),e,...n);return fv.set(r,e.sort?e.sort():[e]),Tn(r)}:uC().includes(t)?function(...e){return t.apply(Xl(this),e),Tn(hv.get(this))}:function(...e){return Tn(t.apply(Xl(this),e))}}function pC(t){return typeof t=="function"?fC(t):(t instanceof IDBTransaction&&dC(t),aC(t,lC())?new Proxy(t,dc):t)}function Tn(t){if(t instanceof IDBRequest)return cC(t);if(Jl.has(t))return Jl.get(t);const e=pC(t);return e!==t&&(Jl.set(t,e),Od.set(e,t)),e}const Xl=t=>Od.get(t);function pv(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Tn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Tn(o.result),l.oldVersion,l.newVersion,Tn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const mC=["get","getKey","getAll","getAllKeys","count"],gC=["put","add","delete","clear"],Zl=new Map;function sp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zl.get(e))return Zl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=gC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||mC.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Zl.set(e,s),s}hC(t=>({...t,get:(e,n,r)=>sp(e,n)||t.get(e,n,r),has:(e,n)=>!!sp(e,n)||t.has(e,n)}));/**
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
 */class _C{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function vC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hc="@firebase/app",op="0.10.10";/**
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
 */const Qt=new tl("@firebase/app"),yC="@firebase/app-compat",wC="@firebase/analytics-compat",EC="@firebase/analytics",SC="@firebase/app-check-compat",CC="@firebase/app-check",IC="@firebase/auth",TC="@firebase/auth-compat",kC="@firebase/database",RC="@firebase/database-compat",NC="@firebase/functions",PC="@firebase/functions-compat",xC="@firebase/installations",AC="@firebase/installations-compat",OC="@firebase/messaging",bC="@firebase/messaging-compat",DC="@firebase/performance",LC="@firebase/performance-compat",MC="@firebase/remote-config",FC="@firebase/remote-config-compat",UC="@firebase/storage",jC="@firebase/storage-compat",zC="@firebase/firestore",BC="@firebase/vertexai-preview",$C="@firebase/firestore-compat",VC="firebase",WC="10.13.1";/**
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
 */const fc="[DEFAULT]",HC={[hc]:"fire-core",[yC]:"fire-core-compat",[EC]:"fire-analytics",[wC]:"fire-analytics-compat",[CC]:"fire-app-check",[SC]:"fire-app-check-compat",[IC]:"fire-auth",[TC]:"fire-auth-compat",[kC]:"fire-rtdb",[RC]:"fire-rtdb-compat",[NC]:"fire-fn",[PC]:"fire-fn-compat",[xC]:"fire-iid",[AC]:"fire-iid-compat",[OC]:"fire-fcm",[bC]:"fire-fcm-compat",[DC]:"fire-perf",[LC]:"fire-perf-compat",[MC]:"fire-rc",[FC]:"fire-rc-compat",[UC]:"fire-gcs",[jC]:"fire-gcs-compat",[zC]:"fire-fst",[$C]:"fire-fst-compat",[BC]:"fire-vertex","fire-js":"fire-js",[VC]:"fire-js-all"};/**
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
 */const da=new Map,GC=new Map,pc=new Map;function ap(t,e){try{t.container.addComponent(e)}catch(n){Qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function St(t){const e=t.name;if(pc.has(e))return Qt.debug(`There were multiple attempts to register component ${e}.`),!1;pc.set(e,t);for(const n of da.values())ap(n,t);for(const n of GC.values())ap(n,t);return!0}function Fn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ut(t){return t.settings!==void 0}/**
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
 */const qC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},kn=new gr("app","Firebase",qC);/**
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
 */class KC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new at("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kn.create("app-deleted",{appName:this._name})}}/**
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
 */const _r=WC;function mv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:fc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw kn.create("bad-app-name",{appName:String(i)});if(n||(n=rv()),!n)throw kn.create("no-options");const s=da.get(i);if(s){if(Es(n,s.options)&&Es(r,s.config))return s;throw kn.create("duplicate-app",{appName:i})}const o=new nC(i);for(const l of pc.values())o.addComponent(l);const a=new KC(n,r,o);return da.set(i,a),a}function nl(t=fc){const e=da.get(t);if(!e&&t===fc&&rv())return mv();if(!e)throw kn.create("no-app",{appName:t});return e}function We(t,e,n){var r;let i=(r=HC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qt.warn(a.join(" "));return}St(new at(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const QC="firebase-heartbeat-database",YC=1,Ss="firebase-heartbeat-store";let eu=null;function gv(){return eu||(eu=pv(QC,YC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ss)}catch(n){console.warn(n)}}}}).catch(t=>{throw kn.create("idb-open",{originalErrorMessage:t.message})})),eu}async function JC(t){try{const n=(await gv()).transaction(Ss),r=await n.objectStore(Ss).get(_v(t));return await n.done,r}catch(e){if(e instanceof Ct)Qt.warn(e.message);else{const n=kn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qt.warn(n.message)}}}async function lp(t,e){try{const r=(await gv()).transaction(Ss,"readwrite");await r.objectStore(Ss).put(e,_v(t)),await r.done}catch(n){if(n instanceof Ct)Qt.warn(n.message);else{const r=kn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qt.warn(r.message)}}}function _v(t){return`${t.name}!${t.options.appId}`}/**
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
 */const XC=1024,ZC=30*24*60*60*1e3;class eI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=up();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=ZC}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Qt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=up(),{heartbeatsToSend:r,unsentEntries:i}=tI(this._heartbeatsCache.heartbeats),s=la(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Qt.warn(n),""}}}function up(){return new Date().toISOString().substring(0,10)}function tI(t,e=XC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),cp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),cp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class nI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uv()?cv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await JC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return lp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return lp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function cp(t){return la(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function rI(t){St(new at("platform-logger",e=>new _C(e),"PRIVATE")),St(new at("heartbeat",e=>new eI(e),"PRIVATE")),We(hc,op,t),We(hc,op,"esm2017"),We("fire-js","")}rI("");var dp={};const hp="@firebase/database",fp="1.0.7";/**
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
 */let vv="";function iI(t){vv=t}/**
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
 */class sI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),he(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ws(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class oI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return bt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const yv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new sI(e)}}catch{}return new oI},qn=yv("localStorage"),aI=yv("sessionStorage");/**
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
 */const Wr=new tl("@firebase/database"),lI=function(){let t=1;return function(){return t++}}(),wv=function(t){const e=KS(t),n=new WS;n.update(e);const r=n.digest();return Pd.encodeByteArray(r)},js=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=js.apply(null,r):typeof r=="object"?e+=he(r):e+=r,e+=" "}return e};let qi=null,pp=!0;const uI=function(t,e){I(!e,"Can't turn on custom loggers persistently."),Wr.logLevel=H.VERBOSE,qi=Wr.log.bind(Wr)},Se=function(...t){if(pp===!0&&(pp=!1,qi===null&&aI.get("logging_enabled")===!0&&uI()),qi){const e=js.apply(null,t);qi(e)}},zs=function(t){return function(...e){Se(t,...e)}},mc=function(...t){const e="FIREBASE INTERNAL ERROR: "+js(...t);Wr.error(e)},Yt=function(...t){const e=`FIREBASE FATAL ERROR: ${js(...t)}`;throw Wr.error(e),new Error(e)},De=function(...t){const e="FIREBASE WARNING: "+js(...t);Wr.warn(e)},cI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&De("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},bd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},dI=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ri="[MIN_NAME]",or="[MAX_NAME]",vr=function(t,e){if(t===e)return 0;if(t===ri||e===or)return-1;if(e===ri||t===or)return 1;{const n=mp(t),r=mp(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},hI=function(t,e){return t===e?0:t<e?-1:1},Pi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+he(e))},Dd=function(t){if(typeof t!="object"||t===null)return he(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=he(e[r]),n+=":",n+=Dd(t[e[r]]);return n+="}",n},Ev=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Te(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Sv=function(t){I(!bd(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(l=0;l<64;l+=8){let h=parseInt(d.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},fI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},pI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function mI(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const gI=new RegExp("^-?(0*)\\d{1,10}$"),_I=-2147483648,vI=2147483647,mp=function(t){if(gI.test(t)){const e=Number(t);if(e>=_I&&e<=vI)return e}return null},mi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw De("Exception was thrown by user callback.",n),e},Math.floor(0))}},yI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ki=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class wI{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){De(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class EI{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Se("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',De(e)}}class Oo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Oo.OWNER="owner";/**
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
 */const Ld="5",Cv="v",Iv="s",Tv="r",kv="f",Rv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Nv="ls",Pv="p",gc="ac",xv="websocket",Av="long_polling";/**
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
 */class Ov{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=qn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&qn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function SI(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function bv(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let r;if(e===xv)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Av)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);SI(t)&&(n.ns=t.namespace);const i=[];return Te(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class CI{constructor(){this.counters_={}}incrementCounter(e,n=1){bt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return AS(this.counters_)}}/**
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
 */const tu={},nu={};function Md(t){const e=t.toString();return tu[e]||(tu[e]=new CI),tu[e]}function II(t,e){const n=t.toString();return nu[n]||(nu[n]=e()),nu[n]}/**
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
 */class TI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&mi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const gp="start",kI="close",RI="pLPCommand",NI="pRTLPCB",Dv="id",Lv="pw",Mv="ser",PI="cb",xI="seg",AI="ts",OI="d",bI="dframe",Fv=1870,Uv=30,DI=Fv-Uv,LI=25e3,MI=3e4;class Fr{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=zs(e),this.stats_=Md(n),this.urlFn=l=>(this.appCheckToken&&(l[gc]=this.appCheckToken),bv(n,Av,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new TI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(MI)),dI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fd((...s)=>{const[o,a,l,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===gp)this.id=a,this.password=l;else if(o===kI)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[gp]="t",r[Mv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[PI]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Cv]=Ld,this.transportSessionId&&(r[Iv]=this.transportSessionId),this.lastSessionId&&(r[Nv]=this.lastSessionId),this.applicationId&&(r[Pv]=this.applicationId),this.appCheckToken&&(r[gc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Rv.test(location.hostname)&&(r[Tv]=kv);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Fr.forceAllow_=!0}static forceDisallow(){Fr.forceDisallow_=!0}static isAvailable(){return Fr.forceAllow_?!0:!Fr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!fI()&&!pI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=he(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Z_(n),i=Ev(r,DI);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[bI]="t",r[Dv]=e,r[Lv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=he(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Fd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=lI(),window[RI+this.uniqueCallbackIdentifier]=e,window[NI+this.uniqueCallbackIdentifier]=n,this.myIFrame=Fd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Se("frame writing exception"),a.stack&&Se(a.stack),Se(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Se("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Dv]=this.myID,e[Lv]=this.myPW,e[Mv]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Uv+r.length<=Fv;){const o=this.pendingSegs.shift();r=r+"&"+xI+i+"="+o.seg+"&"+AI+i+"="+o.ts+"&"+OI+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(LI)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Se("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const FI=16384,UI=45e3;let ha=null;typeof MozWebSocket<"u"?ha=MozWebSocket:typeof WebSocket<"u"&&(ha=WebSocket);class mt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=zs(this.connId),this.stats_=Md(n),this.connURL=mt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Cv]=Ld,typeof location<"u"&&location.hostname&&Rv.test(location.hostname)&&(o[Tv]=kv),n&&(o[Iv]=n),r&&(o[Nv]=r),i&&(o[gc]=i),s&&(o[Pv]=s),bv(e,xv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,qn.set("previous_websocket_failure",!0);try{let r;lv(),this.mySock=new ha(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){mt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&ha!==null&&!mt.forceDisallow_}static previouslyFailed(){return qn.isInMemoryStorage||qn.get("previous_websocket_failure")===!0}markConnectionHealthy(){qn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ws(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=he(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Ev(n,FI);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(UI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}mt.responsesRequiredToBeHealthy=2;mt.healthyTimeout=3e4;/**
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
 */class Cs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Fr,mt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=mt&&mt.isAvailable();let r=n&&!mt.previouslyFailed();if(e.webSocketOnly&&(n||De("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[mt];else{const i=this.transports_=[];for(const s of Cs.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Cs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Cs.globalTransportInitialized_=!1;/**
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
 */const jI=6e4,zI=5e3,BI=10*1024,$I=100*1024,ru="t",_p="d",VI="s",vp="r",WI="e",yp="o",wp="a",Ep="n",Sp="p",HI="h";class GI{constructor(e,n,r,i,s,o,a,l,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=zs("c:"+this.id+":"),this.transportManager_=new Cs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ki(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>$I?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>BI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ru in e){const n=e[ru];n===wp?this.upgradeIfSecondaryHealthy_():n===vp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===yp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Pi("t",e),r=Pi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Sp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:wp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ep,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Pi("t",e),r=Pi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Pi(ru,e);if(_p in e){const r=e[_p];if(n===HI){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Ep){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===VI?this.onConnectionShutdown_(r):n===vp?this.onReset_(r):n===WI?mc("Server Error: "+r):n===yp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):mc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ld!==r&&De("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ki(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(jI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ki(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(zI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Sp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(qn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class jv{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class zv{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class fa extends zv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ad()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new fa}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Cp=32,Ip=768;class G{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function B(){return new G("")}function M(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function An(t){return t.pieces_.length-t.pieceNum_}function K(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new G(t.pieces_,e)}function Ud(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function qI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Is(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Bv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new G(e,0)}function re(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof G)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new G(n,0)}function U(t){return t.pieceNum_>=t.pieces_.length}function Oe(t,e){const n=M(t),r=M(e);if(n===null)return e;if(n===r)return Oe(K(t),K(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function KI(t,e){const n=Is(t,0),r=Is(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=vr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function jd(t,e){if(An(t)!==An(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function rt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(An(t)>An(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class QI{constructor(e,n){this.errorPrefix_=n,this.parts_=Is(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=el(this.parts_[r]);$v(this)}}function YI(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=el(e),$v(t)}function JI(t){const e=t.parts_.pop();t.byteLength_-=el(e),t.parts_.length>0&&(t.byteLength_-=1)}function $v(t){if(t.byteLength_>Ip)throw new Error(t.errorPrefix_+"has a key path longer than "+Ip+" bytes ("+t.byteLength_+").");if(t.parts_.length>Cp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Cp+") or object contains a cycle "+Vn(t))}function Vn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class zd extends zv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new zd}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const xi=1e3,XI=60*5*1e3,Tp=30*1e3,ZI=1.3,eT=3e4,tT="server_kill",kp=3;class Wt extends jv{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Wt.nextPersistentConnectionId_++,this.log_=zs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=xi,this.maxReconnectDelay_=XI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!lv())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");zd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&fa.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(he(s)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Us,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Wt.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&bt(e,"w")){const r=ni(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();De(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||VS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Tp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=$S(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+he(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):mc("Unrecognized action received from server: "+he(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=xi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=xi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>eT&&(this.reconnectDelay_=xi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ZI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Wt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(c){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(c)};this.realtime_={close:l,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Se("getToken() completed but was canceled"):(Se("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,a=new GI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,v=>{De(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(tT)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&De(c),l())}}}interrupt(e){Se("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Se("Resuming connection for reason: "+e),delete this.interruptReasons_[e],uc(this.interruptReasons_)&&(this.reconnectDelay_=xi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Dd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new G(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Se("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=kp&&(this.reconnectDelay_=Tp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Se("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=kp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+vv.replace(/\./g,"-")]=1,Ad()?e["framework.cordova"]=1:av()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=fa.getInstance().currentlyOnline();return uc(this.interruptReasons_)&&e}}Wt.nextPersistentConnectionId_=0;Wt.nextConnectionId_=0;/**
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
 */class rl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new F(ri,e),i=new F(ri,n);return this.compare(r,i)!==0}minPost(){return F.MIN}}/**
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
 */let po;class Vv extends rl{static get __EMPTY_NODE(){return po}static set __EMPTY_NODE(e){po=e}compare(e,n){return vr(e.name,n.name)}isDefinedOn(e){throw fi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(or,po)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,po)}toString(){return".key"}}const Hr=new Vv;/**
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
 */class mo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ye{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ye.RED,this.left=i??ze.EMPTY_NODE,this.right=s??ze.EMPTY_NODE}copy(e,n,r,i,s){return new ye(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ze.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return ze.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ye.RED=!0;ye.BLACK=!1;class nT{copy(e,n,r,i,s){return this}insert(e,n,r){return new ye(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ze{constructor(e,n=ze.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ze(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ye.BLACK,null,null))}remove(e){return new ze(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ye.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new mo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new mo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new mo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new mo(this.root_,null,this.comparator_,!0,e)}}ze.EMPTY_NODE=new nT;/**
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
 */function rT(t,e){return vr(t.name,e.name)}function Bd(t,e){return vr(t,e)}/**
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
 */let _c;function iT(t){_c=t}const Wv=function(t){return typeof t=="number"?"number:"+Sv(t):"string:"+t},Hv=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&bt(e,".sv"),"Priority must be a string or number.")}else I(t===_c||t.isEmpty(),"priority of unexpected type.");I(t===_c||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Rp;class _e{constructor(e,n=_e.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Hv(this.priorityNode_)}static set __childrenNodeConstructor(e){Rp=e}static get __childrenNodeConstructor(){return Rp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new _e(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:_e.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:M(e)===".priority"?this.priorityNode_:_e.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:_e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=M(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(I(r!==".priority"||An(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,_e.__childrenNodeConstructor.EMPTY_NODE.updateChild(K(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Wv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Sv(this.value_):e+=this.value_,this.lazyHash_=wv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===_e.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof _e.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=_e.VALUE_TYPE_ORDER.indexOf(n),s=_e.VALUE_TYPE_ORDER.indexOf(r);return I(i>=0,"Unknown leaf type: "+n),I(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}_e.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Gv,qv;function sT(t){Gv=t}function oT(t){qv=t}class aT extends rl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?vr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(or,new _e("[PRIORITY-POST]",qv))}makePost(e,n){const r=Gv(e);return new F(n,new _e("[PRIORITY-POST]",r))}toString(){return".priority"}}const ie=new aT;/**
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
 */const lT=Math.log(2);class uT{constructor(e){const n=s=>parseInt(Math.log(s)/lT,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const pa=function(t,e,n,r){t.sort(e);const i=function(l,u){const d=u-l;let c,h;if(d===0)return null;if(d===1)return c=t[l],h=n?n(c):c,new ye(h,c.node,ye.BLACK,null,null);{const v=parseInt(d/2,10)+l,p=i(l,v),y=i(v+1,u);return c=t[v],h=n?n(c):c,new ye(h,c.node,ye.BLACK,p,y)}},s=function(l){let u=null,d=null,c=t.length;const h=function(p,y){const E=c-p,m=c;c-=p;const f=i(E+1,m),_=t[E],w=n?n(_):_;v(new ye(w,_.node,y,null,f))},v=function(p){u?(u.left=p,u=p):(d=p,u=p)};for(let p=0;p<l.count;++p){const y=l.nextBitIsOne(),E=Math.pow(2,l.count-(p+1));y?h(E,ye.BLACK):(h(E,ye.BLACK),h(E,ye.RED))}return d},o=new uT(t.length),a=s(o);return new ze(r||e,a)};/**
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
 */let iu;const Sr={};class jt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(Sr&&ie,"ChildrenNode.ts has not been loaded"),iu=iu||new jt({".priority":Sr},{".priority":ie}),iu}get(e){const n=ni(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ze?n:null}hasIndex(e){return bt(this.indexSet_,e.toString())}addIndex(e,n){I(e!==Hr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(F.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=pa(r,e.getCompare()):a=Sr;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new jt(d,u)}addToIndexes(e,n){const r=ca(this.indexes_,(i,s)=>{const o=ni(this.indexSet_,s);if(I(o,"Missing index implementation for "+s),i===Sr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(F.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),pa(a,o.getCompare())}else return Sr;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new F(e.name,a))),l.insert(e,e.node)}});return new jt(r,this.indexSet_)}removeFromIndexes(e,n){const r=ca(this.indexes_,i=>{if(i===Sr)return i;{const s=n.get(e.name);return s?i.remove(new F(e.name,s)):i}});return new jt(r,this.indexSet_)}}/**
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
 */let Ai;class A{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Hv(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ai||(Ai=new A(new ze(Bd),null,jt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ai}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ai:n}}getChild(e){const n=M(e);return n===null?this:this.getImmediateChild(n).getChild(K(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new F(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ai:this.priorityNode_;return new A(i,o,s)}}updateChild(e,n){const r=M(e);if(r===null)return n;{I(M(e)!==".priority"||An(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(K(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ie,(o,a)=>{n[o]=a.val(e),r++,s&&A.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Wv(this.getPriority().val())+":"),this.forEachChild(ie,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":wv(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new F(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Bs?-1:0}withIndex(e){if(e===Hr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Hr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ie),i=n.getIterator(ie);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Hr?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class cT extends A{constructor(){super(new ze(Bd),A.EMPTY_NODE,jt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const Bs=new cT;Object.defineProperties(F,{MIN:{value:new F(ri,A.EMPTY_NODE)},MAX:{value:new F(or,Bs)}});Vv.__EMPTY_NODE=A.EMPTY_NODE;_e.__childrenNodeConstructor=A;iT(Bs);oT(Bs);/**
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
 */const dT=!0;function de(t,e=null){if(t===null)return A.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new _e(n,de(e))}if(!(t instanceof Array)&&dT){const n=[];let r=!1;if(Te(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=de(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new F(o,l)))}}),n.length===0)return A.EMPTY_NODE;const s=pa(n,rT,o=>o.name,Bd);if(r){const o=pa(n,ie.getCompare());return new A(s,de(e),new jt({".priority":o},{".priority":ie}))}else return new A(s,de(e),jt.Default)}else{let n=A.EMPTY_NODE;return Te(t,(r,i)=>{if(bt(t,r)&&r.substring(0,1)!=="."){const s=de(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(de(e))}}sT(de);/**
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
 */class hT extends rl{constructor(e){super(),this.indexPath_=e,I(!U(e)&&M(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?vr(e.name,n.name):s}makePost(e,n){const r=de(e),i=A.EMPTY_NODE.updateChild(this.indexPath_,r);return new F(n,i)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,Bs);return new F(or,e)}toString(){return Is(this.indexPath_,0).join("/")}}/**
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
 */class fT extends rl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?vr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const r=de(e);return new F(n,r)}toString(){return".value"}}const pT=new fT;/**
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
 */function Kv(t){return{type:"value",snapshotNode:t}}function ii(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ts(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ks(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function mT(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class $d{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ts(n,a)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ii(n,r)):o.trackChildChange(ks(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ie,(i,s)=>{n.hasChild(i)||r.trackChildChange(Ts(i,s))}),n.isLeafNode()||n.forEachChild(ie,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ks(i,s,o))}else r.trackChildChange(ii(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Rs{constructor(e){this.indexedFilter_=new $d(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Rs.getStartPost_(e),this.endPost_=Rs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new F(n,r))||(r=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=A.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const s=this;return n.forEachChild(ie,(o,a)=>{s.matches(new F(o,a))||(i=i.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class gT{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Rs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new F(n,r))||(r=A.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,v)=>c(v,h)}else o=this.index_.getCompare();const a=e;I(a.numChildren()===this.limit_,"");const l=new F(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const c=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const v=h==null?1:o(h,l);if(d&&!r.isEmpty()&&v>=0)return s!=null&&s.trackChildChange(ks(n,r,c)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Ts(n,c));const y=a.updateImmediateChild(n,A.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(ii(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return r.isEmpty()?e:d&&o(u,l)>=0?(s!=null&&(s.trackChildChange(Ts(u.name,u.node)),s.trackChildChange(ii(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,A.EMPTY_NODE)):e}}/**
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
 */class Vd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ie}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ri}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:or}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ie}copy(){const e=new Vd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function _T(t){return t.loadsAllData()?new $d(t.getIndex()):t.hasLimit()?new gT(t):new Rs(t)}function Np(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ie?n="$priority":t.index_===pT?n="$value":t.index_===Hr?n="$key":(I(t.index_ instanceof hT,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=he(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=he(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+he(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=he(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+he(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Pp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ie&&(e.i=t.index_.toString()),e}/**
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
 */class ma extends jv{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=zs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ma.getListenId_(e,r),a={};this.listens_[o]=a;const l=Np(e._queryParams);this.restRequest_(s+".json",l,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),ni(this.listens_,o)===a){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=ma.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Np(e._queryParams),r=e._path.toString(),i=new Us;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+pi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ws(a.responseText)}catch{De("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&De("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class vT{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function ga(){return{value:null,children:new Map}}function Qv(t,e,n){if(U(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=M(e);t.children.has(r)||t.children.set(r,ga());const i=t.children.get(r);e=K(e),Qv(i,e,n)}}function vc(t,e,n){t.value!==null?n(e,t.value):yT(t,(r,i)=>{const s=new G(e.toString()+"/"+r);vc(i,s,n)})}function yT(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class wT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Te(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const xp=10*1e3,ET=30*1e3,ST=5*60*1e3;class CT{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new wT(e);const r=xp+(ET-xp)*Math.random();Ki(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Te(e,(i,s)=>{s>0&&bt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ki(this.reportStats_.bind(this),Math.floor(Math.random()*2*ST))}}/**
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
 */var gt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(gt||(gt={}));function Wd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Hd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Gd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class _a{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=gt.ACK_USER_WRITE,this.source=Wd()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new G(e));return new _a(B(),n,this.revert)}}else return I(M(this.path)===e,"operationForChild called for unrelated child."),new _a(K(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ns{constructor(e,n){this.source=e,this.path=n,this.type=gt.LISTEN_COMPLETE}operationForChild(e){return U(this.path)?new Ns(this.source,B()):new Ns(this.source,K(this.path))}}/**
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
 */class ar{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=gt.OVERWRITE}operationForChild(e){return U(this.path)?new ar(this.source,B(),this.snap.getImmediateChild(e)):new ar(this.source,K(this.path),this.snap)}}/**
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
 */class si{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=gt.MERGE}operationForChild(e){if(U(this.path)){const n=this.children.subtree(new G(e));return n.isEmpty()?null:n.value?new ar(this.source,B(),n.value):new si(this.source,B(),n)}else return I(M(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new si(this.source,K(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class On{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const n=M(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class IT{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function TT(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(mT(o.childName,o.snapshotNode))}),Oi(t,i,"child_removed",e,r,n),Oi(t,i,"child_added",e,r,n),Oi(t,i,"child_moved",s,r,n),Oi(t,i,"child_changed",e,r,n),Oi(t,i,"value",e,r,n),i}function Oi(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>RT(t,a,l)),o.forEach(a=>{const l=kT(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function kT(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function RT(t,e,n){if(e.childName==null||n.childName==null)throw fi("Should only compare child_ events.");const r=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function il(t,e){return{eventCache:t,serverCache:e}}function Qi(t,e,n,r){return il(new On(e,n,r),t.serverCache)}function Yv(t,e,n,r){return il(t.eventCache,new On(e,n,r))}function va(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function lr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let su;const NT=()=>(su||(su=new ze(hI)),su);class q{constructor(e,n=NT()){this.value=e,this.children=n}static fromObject(e){let n=new q(null);return Te(e,(r,i)=>{n=n.set(new G(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:B(),value:this.value};if(U(e))return null;{const r=M(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(K(e),n);return s!=null?{path:re(new G(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const n=M(e),r=this.children.get(n);return r!==null?r.subtree(K(e)):new q(null)}}set(e,n){if(U(e))return new q(n,this.children);{const r=M(e),s=(this.children.get(r)||new q(null)).set(K(e),n),o=this.children.insert(r,s);return new q(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new q(null):new q(null,this.children);{const n=M(e),r=this.children.get(n);if(r){const i=r.remove(K(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new q(null):new q(this.value,s)}else return this}}get(e){if(U(e))return this.value;{const n=M(e),r=this.children.get(n);return r?r.get(K(e)):null}}setTree(e,n){if(U(e))return n;{const r=M(e),s=(this.children.get(r)||new q(null)).setTree(K(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new q(this.value,o)}}fold(e){return this.fold_(B(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(re(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,B(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(U(e))return null;{const s=M(e),o=this.children.get(s);return o?o.findOnPath_(K(e),re(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,B(),n)}foreachOnPath_(e,n,r){if(U(e))return this;{this.value&&r(n,this.value);const i=M(e),s=this.children.get(i);return s?s.foreachOnPath_(K(e),re(n,i),r):new q(null)}}foreach(e){this.foreach_(B(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(re(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class yt{constructor(e){this.writeTree_=e}static empty(){return new yt(new q(null))}}function Yi(t,e,n){if(U(e))return new yt(new q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Oe(i,e);return s=s.updateChild(o,n),new yt(t.writeTree_.set(i,s))}else{const i=new q(n),s=t.writeTree_.setTree(e,i);return new yt(s)}}}function yc(t,e,n){let r=t;return Te(n,(i,s)=>{r=Yi(r,re(e,i),s)}),r}function Ap(t,e){if(U(e))return yt.empty();{const n=t.writeTree_.setTree(e,new q(null));return new yt(n)}}function wc(t,e){return yr(t,e)!=null}function yr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Oe(n.path,e)):null}function Op(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ie,(r,i)=>{e.push(new F(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new F(r,i.value))}),e}function Rn(t,e){if(U(e))return t;{const n=yr(t,e);return n!=null?new yt(new q(n)):new yt(t.writeTree_.subtree(e))}}function Ec(t){return t.writeTree_.isEmpty()}function oi(t,e){return Jv(B(),t.writeTree_,e)}function Jv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(I(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Jv(re(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(re(t,".priority"),r)),n}}/**
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
 */function sl(t,e){return ty(e,t)}function PT(t,e,n,r,i){I(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Yi(t.visibleWrites,e,n)),t.lastWriteId=r}function xT(t,e,n,r){I(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=yc(t.visibleWrites,e,n),t.lastWriteId=r}function AT(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function OT(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&bT(a,r.path)?i=!1:rt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return DT(t),!0;if(r.snap)t.visibleWrites=Ap(t.visibleWrites,r.path);else{const a=r.children;Te(a,l=>{t.visibleWrites=Ap(t.visibleWrites,re(r.path,l))})}return!0}else return!1}function bT(t,e){if(t.snap)return rt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&rt(re(t.path,n),e))return!0;return!1}function DT(t){t.visibleWrites=Xv(t.allWrites,LT,B()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function LT(t){return t.visible}function Xv(t,e,n){let r=yt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)rt(n,o)?(a=Oe(n,o),r=Yi(r,a,s.snap)):rt(o,n)&&(a=Oe(o,n),r=Yi(r,B(),s.snap.getChild(a)));else if(s.children){if(rt(n,o))a=Oe(n,o),r=yc(r,a,s.children);else if(rt(o,n))if(a=Oe(o,n),U(a))r=yc(r,B(),s.children);else{const l=ni(s.children,M(a));if(l){const u=l.getChild(K(a));r=Yi(r,B(),u)}}}else throw fi("WriteRecord should have .snap or .children")}}return r}function Zv(t,e,n,r,i){if(!r&&!i){const s=yr(t.visibleWrites,e);if(s!=null)return s;{const o=Rn(t.visibleWrites,e);if(Ec(o))return n;if(n==null&&!wc(o,B()))return null;{const a=n||A.EMPTY_NODE;return oi(o,a)}}}else{const s=Rn(t.visibleWrites,e);if(!i&&Ec(s))return n;if(!i&&n==null&&!wc(s,B()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(rt(u.path,e)||rt(e,u.path))},a=Xv(t.allWrites,o,e),l=n||A.EMPTY_NODE;return oi(a,l)}}}function MT(t,e,n){let r=A.EMPTY_NODE;const i=yr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ie,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Rn(t.visibleWrites,e);return n.forEachChild(ie,(o,a)=>{const l=oi(Rn(s,new G(o)),a);r=r.updateImmediateChild(o,l)}),Op(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Rn(t.visibleWrites,e);return Op(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function FT(t,e,n,r,i){I(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=re(e,n);if(wc(t.visibleWrites,s))return null;{const o=Rn(t.visibleWrites,s);return Ec(o)?i.getChild(n):oi(o,i.getChild(n))}}function UT(t,e,n,r){const i=re(e,n),s=yr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Rn(t.visibleWrites,i);return oi(o,r.getNode().getImmediateChild(n))}else return null}function jT(t,e){return yr(t.visibleWrites,e)}function zT(t,e,n,r,i,s,o){let a;const l=Rn(t.visibleWrites,e),u=yr(l,B());if(u!=null)a=u;else if(n!=null)a=oi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],c=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let v=h.getNext();for(;v&&d.length<i;)c(v,r)!==0&&d.push(v),v=h.getNext();return d}else return[]}function BT(){return{visibleWrites:yt.empty(),allWrites:[],lastWriteId:-1}}function ya(t,e,n,r){return Zv(t.writeTree,t.treePath,e,n,r)}function qd(t,e){return MT(t.writeTree,t.treePath,e)}function bp(t,e,n,r){return FT(t.writeTree,t.treePath,e,n,r)}function wa(t,e){return jT(t.writeTree,re(t.treePath,e))}function $T(t,e,n,r,i,s){return zT(t.writeTree,t.treePath,e,n,r,i,s)}function Kd(t,e,n){return UT(t.writeTree,t.treePath,e,n)}function ey(t,e){return ty(re(t.treePath,e),t.writeTree)}function ty(t,e){return{treePath:t,writeTree:e}}/**
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
 */class VT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ks(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ts(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ii(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ks(r,e.snapshotNode,i.oldSnap));else throw fi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class WT{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const ny=new WT;class Qd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new On(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Kd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:lr(this.viewCache_),s=$T(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function HT(t){return{filter:t}}function GT(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function qT(t,e,n,r,i){const s=new VT;let o,a;if(n.type===gt.OVERWRITE){const u=n;u.source.fromUser?o=Sc(t,e,u.path,u.snap,r,i,s):(I(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!U(u.path),o=Ea(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===gt.MERGE){const u=n;u.source.fromUser?o=QT(t,e,u.path,u.children,r,i,s):(I(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Cc(t,e,u.path,u.children,r,i,a,s))}else if(n.type===gt.ACK_USER_WRITE){const u=n;u.revert?o=XT(t,e,u.path,r,i,s):o=YT(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===gt.LISTEN_COMPLETE)o=JT(t,e,n.path,r,s);else throw fi("Unknown operation type: "+n.type);const l=s.getChanges();return KT(e,o,l),{viewCache:o,changes:l}}function KT(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=va(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Kv(va(e)))}}function ry(t,e,n,r,i,s){const o=e.eventCache;if(wa(r,n)!=null)return e;{let a,l;if(U(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=lr(e),d=u instanceof A?u:A.EMPTY_NODE,c=qd(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=ya(r,lr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=M(n);if(u===".priority"){I(An(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const c=bp(r,n,d,l);c!=null?a=t.filter.updatePriority(d,c):a=o.getNode()}else{const d=K(n);let c;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const h=bp(r,n,o.getNode(),l);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=Kd(r,u,e.serverCache);c!=null?a=t.filter.updateChild(o.getNode(),u,c,d,i,s):a=o.getNode()}}return Qi(e,a,o.isFullyInitialized()||U(n),t.filter.filtersNodes())}}function Ea(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(U(n))u=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const v=l.getNode().updateChild(n,r);u=d.updateFullNode(l.getNode(),v,null)}else{const v=M(n);if(!l.isCompleteForPath(n)&&An(n)>1)return e;const p=K(n),E=l.getNode().getImmediateChild(v).updateChild(p,r);v===".priority"?u=d.updatePriority(l.getNode(),E):u=d.updateChild(l.getNode(),v,E,p,ny,null)}const c=Yv(e,u,l.isFullyInitialized()||U(n),d.filtersNodes()),h=new Qd(i,c,s);return ry(t,c,n,i,h,a)}function Sc(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const d=new Qd(i,e,s);if(U(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Qi(e,u,!0,t.filter.filtersNodes());else{const c=M(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Qi(e,u,a.isFullyInitialized(),a.isFiltered());else{const h=K(n),v=a.getNode().getImmediateChild(c);let p;if(U(h))p=r;else{const y=d.getCompleteChild(c);y!=null?Ud(h)===".priority"&&y.getChild(Bv(h)).isEmpty()?p=y:p=y.updateChild(h,r):p=A.EMPTY_NODE}if(v.equals(p))l=e;else{const y=t.filter.updateChild(a.getNode(),c,p,h,d,o);l=Qi(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Dp(t,e){return t.eventCache.isCompleteForChild(e)}function QT(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const d=re(n,l);Dp(e,M(d))&&(a=Sc(t,a,d,u,i,s,o))}),r.foreach((l,u)=>{const d=re(n,l);Dp(e,M(d))||(a=Sc(t,a,d,u,i,s,o))}),a}function Lp(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Cc(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;U(n)?u=r:u=new q(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const v=e.serverCache.getNode().getImmediateChild(c),p=Lp(t,v,h);l=Ea(t,l,new G(c),p,i,s,o,a)}}),u.children.inorderTraversal((c,h)=>{const v=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!v){const p=e.serverCache.getNode().getImmediateChild(c),y=Lp(t,p,h);l=Ea(t,l,new G(c),y,i,s,o,a)}}),l}function YT(t,e,n,r,i,s,o){if(wa(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(U(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ea(t,e,n,l.getNode().getChild(n),i,s,a,o);if(U(n)){let u=new q(null);return l.getNode().forEachChild(Hr,(d,c)=>{u=u.set(new G(d),c)}),Cc(t,e,n,u,i,s,a,o)}else return e}else{let u=new q(null);return r.foreach((d,c)=>{const h=re(n,d);l.isCompleteForPath(h)&&(u=u.set(d,l.getNode().getChild(h)))}),Cc(t,e,n,u,i,s,a,o)}}function JT(t,e,n,r,i){const s=e.serverCache,o=Yv(e,s.getNode(),s.isFullyInitialized()||U(n),s.isFiltered());return ry(t,o,n,r,ny,i)}function XT(t,e,n,r,i,s){let o;if(wa(r,n)!=null)return e;{const a=new Qd(r,e,i),l=e.eventCache.getNode();let u;if(U(n)||M(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=ya(r,lr(e));else{const c=e.serverCache.getNode();I(c instanceof A,"serverChildren would be complete if leaf node"),d=qd(r,c)}d=d,u=t.filter.updateFullNode(l,d,s)}else{const d=M(n);let c=Kd(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=l.getImmediateChild(d)),c!=null?u=t.filter.updateChild(l,d,c,K(n),a,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(l,d,A.EMPTY_NODE,K(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ya(r,lr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||wa(r,B())!=null,Qi(e,u,o,t.filter.filtersNodes())}}/**
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
 */class ZT{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new $d(r.getIndex()),s=_T(r);this.processor_=HT(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(A.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(A.EMPTY_NODE,a.getNode(),null),d=new On(l,o.isFullyInitialized(),i.filtersNodes()),c=new On(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=il(c,d),this.eventGenerator_=new IT(this.query_)}get query(){return this.query_}}function ek(t){return t.viewCache_.serverCache.getNode()}function tk(t){return va(t.viewCache_)}function nk(t,e){const n=lr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!U(e)&&!n.getImmediateChild(M(e)).isEmpty())?n.getChild(e):null}function Mp(t){return t.eventRegistrations_.length===0}function rk(t,e){t.eventRegistrations_.push(e)}function Fp(t,e,n){const r=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Up(t,e,n,r){e.type===gt.MERGE&&e.source.queryId!==null&&(I(lr(t.viewCache_),"We should always have a full cache before handling merges"),I(va(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=qT(t.processor_,i,e,n,r);return GT(t.processor_,s.viewCache),I(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,iy(t,s.changes,s.viewCache.eventCache.getNode(),null)}function ik(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ie,(s,o)=>{r.push(ii(s,o))}),n.isFullyInitialized()&&r.push(Kv(n.getNode())),iy(t,r,n.getNode(),e)}function iy(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return TT(t.eventGenerator_,e,n,i)}/**
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
 */let Sa;class sy{constructor(){this.views=new Map}}function sk(t){I(!Sa,"__referenceConstructor has already been defined"),Sa=t}function ok(){return I(Sa,"Reference.ts has not been loaded"),Sa}function ak(t){return t.views.size===0}function Yd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return I(s!=null,"SyncTree gave us an op for an invalid query."),Up(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Up(o,e,n,r));return s}}function oy(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=ya(n,i?r:null),l=!1;a?l=!0:r instanceof A?(a=qd(n,r),l=!1):(a=A.EMPTY_NODE,l=!1);const u=il(new On(a,l,!1),new On(r,i,!1));return new ZT(e,u)}return o}function lk(t,e,n,r,i,s){const o=oy(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),rk(o,n),ik(o,n)}function uk(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=bn(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(Fp(u,n,r)),Mp(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(Fp(l,n,r)),Mp(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!bn(t)&&s.push(new(ok())(e._repo,e._path)),{removed:s,events:o}}function ay(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Nn(t,e){let n=null;for(const r of t.views.values())n=n||nk(r,e);return n}function ly(t,e){if(e._queryParams.loadsAllData())return ol(t);{const r=e._queryIdentifier;return t.views.get(r)}}function uy(t,e){return ly(t,e)!=null}function bn(t){return ol(t)!=null}function ol(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ca;function ck(t){I(!Ca,"__referenceConstructor has already been defined"),Ca=t}function dk(){return I(Ca,"Reference.ts has not been loaded"),Ca}let hk=1;class jp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new q(null),this.pendingWriteTree_=BT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function cy(t,e,n,r,i){return PT(t.pendingWriteTree_,e,n,r,i),i?gi(t,new ar(Wd(),e,n)):[]}function fk(t,e,n,r){xT(t.pendingWriteTree_,e,n,r);const i=q.fromObject(n);return gi(t,new si(Wd(),e,i))}function mn(t,e,n=!1){const r=AT(t.pendingWriteTree_,e);if(OT(t.pendingWriteTree_,e)){let s=new q(null);return r.snap!=null?s=s.set(B(),!0):Te(r.children,o=>{s=s.set(new G(o),!0)}),gi(t,new _a(r.path,s,n))}else return[]}function $s(t,e,n){return gi(t,new ar(Hd(),e,n))}function pk(t,e,n){const r=q.fromObject(n);return gi(t,new si(Hd(),e,r))}function mk(t,e){return gi(t,new Ns(Hd(),e))}function gk(t,e,n){const r=Xd(t,n);if(r){const i=Zd(r),s=i.path,o=i.queryId,a=Oe(s,e),l=new Ns(Gd(o),a);return eh(t,s,l)}else return[]}function Ia(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||uy(o,e))){const l=uk(o,e,n,r);ak(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,v)=>bn(v));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const v=yk(h);for(let p=0;p<v.length;++p){const y=v[p],E=y.query,m=py(t,y);t.listenProvider_.startListening(Ji(E),Ps(t,E),m.hashFn,m.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(Ji(e),null):u.forEach(h=>{const v=t.queryToTagMap.get(al(h));t.listenProvider_.stopListening(Ji(h),v)}))}wk(t,u)}return a}function dy(t,e,n,r){const i=Xd(t,r);if(i!=null){const s=Zd(i),o=s.path,a=s.queryId,l=Oe(o,e),u=new ar(Gd(a),l,n);return eh(t,o,u)}else return[]}function _k(t,e,n,r){const i=Xd(t,r);if(i){const s=Zd(i),o=s.path,a=s.queryId,l=Oe(o,e),u=q.fromObject(n),d=new si(Gd(a),l,u);return eh(t,o,d)}else return[]}function Ic(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,v)=>{const p=Oe(h,i);s=s||Nn(v,p),o=o||bn(v)});let a=t.syncPointTree_.get(i);a?(o=o||bn(a),s=s||Nn(a,B())):(a=new sy,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=A.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((v,p)=>{const y=Nn(p,B());y&&(s=s.updateImmediateChild(v,y))}));const u=uy(a,e);if(!u&&!e._queryParams.loadsAllData()){const h=al(e);I(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const v=Ek();t.queryToTagMap.set(h,v),t.tagToQueryMap.set(v,h)}const d=sl(t.pendingWriteTree_,i);let c=lk(a,e,n,d,s,l);if(!u&&!o&&!r){const h=ly(a,e);c=c.concat(Sk(t,e,h))}return c}function Jd(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Oe(o,e),u=Nn(a,l);if(u)return u});return Zv(i,e,s,n,!0)}function vk(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=Oe(u,n);r=r||Nn(d,c)});let i=t.syncPointTree_.get(n);i?r=r||Nn(i,B()):(i=new sy,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new On(r,!0,!1):null,a=sl(t.pendingWriteTree_,e._path),l=oy(i,e,a,s?o.getNode():A.EMPTY_NODE,s);return tk(l)}function gi(t,e){return hy(e,t.syncPointTree_,null,sl(t.pendingWriteTree_,B()))}function hy(t,e,n,r){if(U(t.path))return fy(t,e,n,r);{const i=e.get(B());n==null&&i!=null&&(n=Nn(i,B()));let s=[];const o=M(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,d=ey(r,o);s=s.concat(hy(a,l,u,d))}return i&&(s=s.concat(Yd(i,t,r,n))),s}}function fy(t,e,n,r){const i=e.get(B());n==null&&i!=null&&(n=Nn(i,B()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=ey(r,o),d=t.operationForChild(o);d&&(s=s.concat(fy(d,a,l,u)))}),i&&(s=s.concat(Yd(i,t,r,n))),s}function py(t,e){const n=e.query,r=Ps(t,n);return{hashFn:()=>(ek(e)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?gk(t,n._path,r):mk(t,n._path);{const s=mI(i,n);return Ia(t,n,null,s)}}}}function Ps(t,e){const n=al(e);return t.queryToTagMap.get(n)}function al(t){return t._path.toString()+"$"+t._queryIdentifier}function Xd(t,e){return t.tagToQueryMap.get(e)}function Zd(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new G(t.substr(0,e))}}function eh(t,e,n){const r=t.syncPointTree_.get(e);I(r,"Missing sync point for query tag that we're tracking");const i=sl(t.pendingWriteTree_,e);return Yd(r,n,i,null)}function yk(t){return t.fold((e,n,r)=>{if(n&&bn(n))return[ol(n)];{let i=[];return n&&(i=ay(n)),Te(r,(s,o)=>{i=i.concat(o)}),i}})}function Ji(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(dk())(t._repo,t._path):t}function wk(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=al(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function Ek(){return hk++}function Sk(t,e,n){const r=e._path,i=Ps(t,e),s=py(t,n),o=t.listenProvider_.startListening(Ji(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)I(!bn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,d,c)=>{if(!U(u)&&d&&bn(d))return[ol(d).query];{let h=[];return d&&(h=h.concat(ay(d).map(v=>v.query))),Te(c,(v,p)=>{h=h.concat(p)}),h}});for(let u=0;u<l.length;++u){const d=l[u];t.listenProvider_.stopListening(Ji(d),Ps(t,d))}}return o}/**
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
 */class th{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new th(n)}node(){return this.node_}}class nh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=re(this.path_,e);return new nh(this.syncTree_,n)}node(){return Jd(this.syncTree_,this.path_)}}const Ck=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},zp=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Ik(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Tk(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Ik=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},Tk=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&I(!1,"Unexpected increment value: "+r);const i=e.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},my=function(t,e,n,r){return rh(e,new nh(n,t),r)},gy=function(t,e,n){return rh(t,new th(e),n)};function rh(t,e,n){const r=t.getPriority().val(),i=zp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=zp(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new _e(a,de(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new _e(i))),o.forEachChild(ie,(a,l)=>{const u=rh(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class ih{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function sh(t,e){let n=e instanceof G?e:new G(e),r=t,i=M(n);for(;i!==null;){const s=ni(r.node.children,i)||{children:{},childCount:0};r=new ih(i,r,s),n=K(n),i=M(n)}return r}function _i(t){return t.node.value}function _y(t,e){t.node.value=e,Tc(t)}function vy(t){return t.node.childCount>0}function kk(t){return _i(t)===void 0&&!vy(t)}function ll(t,e){Te(t.node.children,(n,r)=>{e(new ih(n,t,r))})}function yy(t,e,n,r){n&&!r&&e(t),ll(t,i=>{yy(i,e,!0,r)}),n&&r&&e(t)}function Rk(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Vs(t){return new G(t.parent===null?t.name:Vs(t.parent)+"/"+t.name)}function Tc(t){t.parent!==null&&Nk(t.parent,t.name,t)}function Nk(t,e,n){const r=kk(n),i=bt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Tc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Tc(t))}/**
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
 */const Pk=/[\[\].#$\/\u0000-\u001F\u007F]/,xk=/[\[\].#$\u0000-\u001F\u007F]/,ou=10*1024*1024,oh=function(t){return typeof t=="string"&&t.length!==0&&!Pk.test(t)},wy=function(t){return typeof t=="string"&&t.length!==0&&!xk.test(t)},Ak=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),wy(t)},Ok=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!bd(t)||t&&typeof t=="object"&&bt(t,".sv")},Ey=function(t,e,n,r){r&&e===void 0||ul(Za(t,"value"),e,n)},ul=function(t,e,n){const r=n instanceof G?new QI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Vn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Vn(r)+" with contents = "+e.toString());if(bd(e))throw new Error(t+"contains "+e.toString()+" "+Vn(r));if(typeof e=="string"&&e.length>ou/3&&el(e)>ou)throw new Error(t+"contains a string greater than "+ou+" utf8 bytes "+Vn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Te(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!oh(o)))throw new Error(t+" contains an invalid key ("+o+") "+Vn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);YI(r,o),ul(t,a,r),JI(r)}),i&&s)throw new Error(t+' contains ".value" child '+Vn(r)+" in addition to actual children.")}},bk=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Is(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!oh(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(KI);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&rt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},Dk=function(t,e,n,r){const i=Za(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Te(e,(o,a)=>{const l=new G(o);if(ul(i,a,re(n,l)),Ud(l)===".priority"&&!Ok(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),bk(i,s)},Sy=function(t,e,n,r){if(!wy(n))throw new Error(Za(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Lk=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Sy(t,e,n)},ah=function(t,e){if(M(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Mk=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!oh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Ak(n))throw new Error(Za(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Fk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function cl(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!jd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Cy(t,e,n){cl(t,n),Iy(t,r=>jd(r,e))}function lt(t,e,n){cl(t,n),Iy(t,r=>rt(r,e)||rt(e,r))}function Iy(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(Uk(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Uk(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();qi&&Se("event: "+n.toString()),mi(r)}}}/**
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
 */const jk="repo_interrupt",zk=25;class Bk{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Fk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ga(),this.transactionQueueTree_=new ih,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function $k(t,e,n){if(t.stats_=Md(t.repoInfo_),t.forceRestClient_||yI())t.server_=new ma(t.repoInfo_,(r,i,s,o)=>{Bp(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>$p(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{he(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Wt(t.repoInfo_,e,(r,i,s,o)=>{Bp(t,r,i,s,o)},r=>{$p(t,r)},r=>{Vk(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=II(t.repoInfo_,()=>new CT(t.stats_,t.server_)),t.infoData_=new vT,t.infoSyncTree_=new jp({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=$s(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),lh(t,"connected",!1),t.serverSyncTree_=new jp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);lt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Ty(t){const n=t.infoData_.getNode(new G(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function dl(t){return Ck({timestamp:Ty(t)})}function Bp(t,e,n,r,i){t.dataUpdateCount++;const s=new G(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=ca(n,u=>de(u));o=_k(t.serverSyncTree_,s,l,i)}else{const l=de(n);o=dy(t.serverSyncTree_,s,l,i)}else if(r){const l=ca(n,u=>de(u));o=pk(t.serverSyncTree_,s,l)}else{const l=de(n);o=$s(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=ai(t,s)),lt(t.eventQueue_,a,o)}function $p(t,e){lh(t,"connected",e),e===!1&&qk(t)}function Vk(t,e){Te(e,(n,r)=>{lh(t,n,r)})}function lh(t,e,n){const r=new G("/.info/"+e),i=de(n);t.infoData_.updateSnapshot(r,i);const s=$s(t.infoSyncTree_,r,i);lt(t.eventQueue_,r,s)}function uh(t){return t.nextWriteId_++}function Wk(t,e,n){const r=vk(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=de(i).withIndex(e._queryParams.getIndex());Ic(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=$s(t.serverSyncTree_,e._path,s);else{const a=Ps(t.serverSyncTree_,e);o=dy(t.serverSyncTree_,e._path,s,a)}return lt(t.eventQueue_,e._path,o),Ia(t.serverSyncTree_,e,n,null,!0),s},i=>(Ws(t,"get for query "+he(e)+" failed: "+i),Promise.reject(new Error(i))))}function Hk(t,e,n,r,i){Ws(t,"set",{path:e.toString(),value:n,priority:r});const s=dl(t),o=de(n,r),a=Jd(t.serverSyncTree_,e),l=gy(o,a,s),u=uh(t),d=cy(t.serverSyncTree_,e,l,u,!0);cl(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,v)=>{const p=h==="ok";p||De("set at "+e+" failed: "+h);const y=mn(t.serverSyncTree_,u,!p);lt(t.eventQueue_,e,y),kc(t,i,h,v)});const c=dh(t,e);ai(t,c),lt(t.eventQueue_,c,[])}function Gk(t,e,n,r){Ws(t,"update",{path:e.toString(),value:n});let i=!0;const s=dl(t),o={};if(Te(n,(a,l)=>{i=!1,o[a]=my(re(e,a),de(l),t.serverSyncTree_,s)}),i)Se("update() called with empty data.  Don't do anything."),kc(t,r,"ok",void 0);else{const a=uh(t),l=fk(t.serverSyncTree_,e,o,a);cl(t.eventQueue_,l),t.server_.merge(e.toString(),n,(u,d)=>{const c=u==="ok";c||De("update at "+e+" failed: "+u);const h=mn(t.serverSyncTree_,a,!c),v=h.length>0?ai(t,e):e;lt(t.eventQueue_,v,h),kc(t,r,u,d)}),Te(n,u=>{const d=dh(t,re(e,u));ai(t,d)}),lt(t.eventQueue_,e,[])}}function qk(t){Ws(t,"onDisconnectEvents");const e=dl(t),n=ga();vc(t.onDisconnect_,B(),(i,s)=>{const o=my(i,s,t.serverSyncTree_,e);Qv(n,i,o)});let r=[];vc(n,B(),(i,s)=>{r=r.concat($s(t.serverSyncTree_,i,s));const o=dh(t,i);ai(t,o)}),t.onDisconnect_=ga(),lt(t.eventQueue_,B(),r)}function Kk(t,e,n){let r;M(e._path)===".info"?r=Ic(t.infoSyncTree_,e,n):r=Ic(t.serverSyncTree_,e,n),Cy(t.eventQueue_,e._path,r)}function Qk(t,e,n){let r;M(e._path)===".info"?r=Ia(t.infoSyncTree_,e,n):r=Ia(t.serverSyncTree_,e,n),Cy(t.eventQueue_,e._path,r)}function Yk(t){t.persistentConnection_&&t.persistentConnection_.interrupt(jk)}function Ws(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Se(n,...e)}function kc(t,e,n,r){e&&mi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function ky(t,e,n){return Jd(t.serverSyncTree_,e,n)||A.EMPTY_NODE}function ch(t,e=t.transactionQueueTree_){if(e||hl(t,e),_i(e)){const n=Ny(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Jk(t,Vs(e),n)}else vy(e)&&ll(e,n=>{ch(t,n)})}function Jk(t,e,n){const r=n.map(u=>u.currentWriteId),i=ky(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];I(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Oe(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Ws(t,"transaction put response",{path:l.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(mn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();hl(t,sh(t.transactionQueueTree_,e)),ch(t,t.transactionQueueTree_),lt(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)mi(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{De("transaction at "+l.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}ai(t,e)}},o)}function ai(t,e){const n=Ry(t,e),r=Vs(n),i=Ny(t,n);return Xk(t,i,r),r}function Xk(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Oe(n,l.path);let d=!1,c;if(I(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,c=l.abortReason,i=i.concat(mn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=zk)d=!0,c="maxretry",i=i.concat(mn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=ky(t,l.path,o);l.currentInputSnapshot=h;const v=e[a].update(h.val());if(v!==void 0){ul("transaction failed: Data returned ",v,l.path);let p=de(v);typeof v=="object"&&v!=null&&bt(v,".priority")||(p=p.updatePriority(h.getPriority()));const E=l.currentWriteId,m=dl(t),f=gy(p,h,m);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=f,l.currentWriteId=uh(t),o.splice(o.indexOf(E),1),i=i.concat(cy(t.serverSyncTree_,l.path,f,l.currentWriteId,l.applyLocally)),i=i.concat(mn(t.serverSyncTree_,E,!0))}else d=!0,c="nodata",i=i.concat(mn(t.serverSyncTree_,l.currentWriteId,!0))}lt(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(c==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(c),!1,null))))}hl(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)mi(r[a]);ch(t,t.transactionQueueTree_)}function Ry(t,e){let n,r=t.transactionQueueTree_;for(n=M(e);n!==null&&_i(r)===void 0;)r=sh(r,n),e=K(e),n=M(e);return r}function Ny(t,e){const n=[];return Py(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Py(t,e,n){const r=_i(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ll(e,i=>{Py(t,i,n)})}function hl(t,e){const n=_i(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,_y(e,n.length>0?n:void 0)}ll(e,r=>{hl(t,r)})}function dh(t,e){const n=Vs(Ry(t,e)),r=sh(t.transactionQueueTree_,e);return Rk(r,i=>{au(t,i)}),au(t,r),yy(r,i=>{au(t,i)}),n}function au(t,e){const n=_i(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(mn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?_y(e,void 0):n.length=s+1,lt(t.eventQueue_,Vs(e),i);for(let o=0;o<r.length;o++)mi(r[o])}}/**
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
 */function Zk(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function eR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):De(`Invalid query segment '${n}' in query '${t}'`)}return e}const Vp=function(t,e){const n=tR(t),r=n.namespace;n.domain==="firebase.com"&&Yt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Yt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||cI();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ov(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new G(n.pathString)}},tR=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=Zk(t.substring(d,c)));const h=eR(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const v=e.slice(0,u);if(v.toLowerCase()==="localhost")n="localhost";else if(v.split(".").length<=2)n=v;else{const p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),n=e.substring(p+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */const Wp="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",nR=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Wp.charAt(n%64),n=Math.floor(n/64);I(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Wp.charAt(e[i]);return I(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class rR{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+he(this.snapshot.exportVal())}}class iR{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class xy{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class hh{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return U(this._path)?null:Ud(this._path)}get ref(){return new Zt(this._repo,this._path)}get _queryIdentifier(){const e=Pp(this._queryParams),n=Dd(e);return n==="{}"?"default":n}get _queryObject(){return Pp(this._queryParams)}isEqual(e){if(e=me(e),!(e instanceof hh))return!1;const n=this._repo===e._repo,r=jd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+qI(this._path)}}class Zt extends hh{constructor(e,n){super(e,n,new Vd,!1)}get parent(){const e=Bv(this._path);return e===null?null:new Zt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class xs{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new G(e),r=As(this.ref,e);return new xs(this._node.getChild(n),r,ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new xs(i,As(this.ref,r),ie)))}hasChild(e){const n=new G(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Cr(t,e){return t=me(t),t._checkNotDeleted("ref"),e!==void 0?As(t._root,e):t._root}function As(t,e){return t=me(t),M(t._path)===null?Lk("child","path",e):Sy("child","path",e),new Zt(t._repo,re(t._path,e))}function bO(t,e){t=me(t),ah("push",t._path),Ey("push",e,t._path,!0);const n=Ty(t._repo),r=nR(n),i=As(t,r),s=As(t,r);let o;return e!=null?o=Ay(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function sR(t){return ah("remove",t._path),Ay(t,null)}function Ay(t,e){t=me(t),ah("set",t._path),Ey("set",e,t._path,!1);const n=new Us;return Hk(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function DO(t,e){Dk("update",e,t._path);const n=new Us;return Gk(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function oR(t){t=me(t);const e=new xy(()=>{}),n=new fl(e);return Wk(t._repo,t,n).then(r=>new xs(r,new Zt(t._repo,t._path),t._queryParams.getIndex()))}class fl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new rR("value",this,new xs(e.snapshotNode,new Zt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new iR(this,e,n):null}matches(e){return e instanceof fl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function aR(t,e,n,r,i){const s=new xy(n,void 0),o=new fl(s);return Kk(t._repo,t,o),()=>Qk(t._repo,t,o)}function lR(t,e,n,r){return aR(t,"value",e)}sk(Zt);ck(Zt);/**
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
 */const uR="FIREBASE_DATABASE_EMULATOR_HOST",Rc={};let cR=!1;function dR(t,e,n,r){t.repoInfo_=new Ov(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function hR(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Yt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Se("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Vp(s,i),a=o.repoInfo,l;typeof process<"u"&&dp&&(l=dp[uR]),l?(s=`http://${l}?ns=${a.namespace}`,o=Vp(s,i),a=o.repoInfo):o.repoInfo.secure;const u=new EI(t.name,t.options,e);Mk("Invalid Firebase Database URL",o),U(o.path)||Yt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=pR(a,t,u,new wI(t.name,n));return new mR(d,t)}function fR(t,e){const n=Rc[e];(!n||n[t.key]!==t)&&Yt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Yk(t),delete n[t.key]}function pR(t,e,n,r){let i=Rc[e.name];i||(i={},Rc[e.name]=i);let s=i[t.toURLString()];return s&&Yt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Bk(t,cR,n,r),i[t.toURLString()]=s,s}class mR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||($k(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Zt(this._repo,B())),this._rootInternal}_delete(){return this._rootInternal!==null&&(fR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Yt("Cannot call "+e+" on a deleted database.")}}function gR(t=nl(),e){const n=Fn(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=nv("database");r&&_R(n,...r)}return n}function _R(t,e,n,r={}){t=me(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Yt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Yt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Oo(Oo.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:sv(r.mockUserToken,t.app.options.projectId);s=new Oo(o)}dR(i,e,n,s)}/**
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
 */function vR(t){iI(_r),St(new at("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return hR(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),We(hp,fp,t),We(hp,fp,"esm2017")}Wt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Wt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};vR();var yR="firebase",wR="10.13.1";/**
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
 */We(yR,wR,"app");const Oy="@firebase/installations",fh="0.6.8";/**
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
 */const by=1e4,Dy=`w:${fh}`,Ly="FIS_v2",ER="https://firebaseinstallations.googleapis.com/v1",SR=60*60*1e3,CR="installations",IR="Installations";/**
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
 */const TR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ur=new gr(CR,IR,TR);function My(t){return t instanceof Ct&&t.code.includes("request-failed")}/**
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
 */function Fy({projectId:t}){return`${ER}/projects/${t}/installations`}function Uy(t){return{token:t.token,requestStatus:2,expiresIn:RR(t.expiresIn),creationTime:Date.now()}}async function jy(t,e){const r=(await e.json()).error;return ur.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function zy({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function kR(t,{refreshToken:e}){const n=zy(t);return n.append("Authorization",NR(e)),n}async function By(t){const e=await t();return e.status>=500&&e.status<600?t():e}function RR(t){return Number(t.replace("s","000"))}function NR(t){return`${Ly} ${t}`}/**
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
 */async function PR({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Fy(t),i=zy(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Ly,appId:t.appId,sdkVersion:Dy},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await By(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Uy(u.authToken)}}else throw await jy("Create Installation",l)}/**
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
 */function $y(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function xR(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const AR=/^[cdef][\w-]{21}$/,Nc="";function OR(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=bR(t);return AR.test(n)?n:Nc}catch{return Nc}}function bR(t){return xR(t).substr(0,22)}/**
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
 */function pl(t){return`${t.appName}!${t.appId}`}/**
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
 */const Vy=new Map;function Wy(t,e){const n=pl(t);Hy(n,e),DR(n,e)}function Hy(t,e){const n=Vy.get(t);if(n)for(const r of n)r(e)}function DR(t,e){const n=LR();n&&n.postMessage({key:t,fid:e}),MR()}let Kn=null;function LR(){return!Kn&&"BroadcastChannel"in self&&(Kn=new BroadcastChannel("[Firebase] FID Change"),Kn.onmessage=t=>{Hy(t.data.key,t.data.fid)}),Kn}function MR(){Vy.size===0&&Kn&&(Kn.close(),Kn=null)}/**
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
 */const FR="firebase-installations-database",UR=1,cr="firebase-installations-store";let lu=null;function ph(){return lu||(lu=pv(FR,UR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(cr)}}})),lu}async function Ta(t,e){const n=pl(t),i=(await ph()).transaction(cr,"readwrite"),s=i.objectStore(cr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Wy(t,e.fid),e}async function Gy(t){const e=pl(t),r=(await ph()).transaction(cr,"readwrite");await r.objectStore(cr).delete(e),await r.done}async function ml(t,e){const n=pl(t),i=(await ph()).transaction(cr,"readwrite"),s=i.objectStore(cr),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Wy(t,a.fid),a}/**
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
 */async function mh(t){let e;const n=await ml(t.appConfig,r=>{const i=jR(r),s=zR(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Nc?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function jR(t){const e=t||{fid:OR(),registrationStatus:0};return qy(e)}function zR(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ur.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=BR(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:$R(t)}:{installationEntry:e}}async function BR(t,e){try{const n=await PR(t,e);return Ta(t.appConfig,n)}catch(n){throw My(n)&&n.customData.serverCode===409?await Gy(t.appConfig):await Ta(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function $R(t){let e=await Hp(t.appConfig);for(;e.registrationStatus===1;)await $y(100),e=await Hp(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await mh(t);return r||n}return e}function Hp(t){return ml(t,e=>{if(!e)throw ur.create("installation-not-found");return qy(e)})}function qy(t){return VR(t)?{fid:t.fid,registrationStatus:0}:t}function VR(t){return t.registrationStatus===1&&t.registrationTime+by<Date.now()}/**
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
 */async function WR({appConfig:t,heartbeatServiceProvider:e},n){const r=HR(t,n),i=kR(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Dy,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await By(()=>fetch(r,a));if(l.ok){const u=await l.json();return Uy(u)}else throw await jy("Generate Auth Token",l)}function HR(t,{fid:e}){return`${Fy(t)}/${e}/authTokens:generate`}/**
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
 */async function gh(t,e=!1){let n;const r=await ml(t.appConfig,s=>{if(!Ky(s))throw ur.create("not-registered");const o=s.authToken;if(!e&&KR(o))return s;if(o.requestStatus===1)return n=GR(t,e),s;{if(!navigator.onLine)throw ur.create("app-offline");const a=YR(s);return n=qR(t,a),a}});return n?await n:r.authToken}async function GR(t,e){let n=await Gp(t.appConfig);for(;n.authToken.requestStatus===1;)await $y(100),n=await Gp(t.appConfig);const r=n.authToken;return r.requestStatus===0?gh(t,e):r}function Gp(t){return ml(t,e=>{if(!Ky(e))throw ur.create("not-registered");const n=e.authToken;return JR(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function qR(t,e){try{const n=await WR(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Ta(t.appConfig,r),n}catch(n){if(My(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Gy(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ta(t.appConfig,r)}throw n}}function Ky(t){return t!==void 0&&t.registrationStatus===2}function KR(t){return t.requestStatus===2&&!QR(t)}function QR(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+SR}function YR(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function JR(t){return t.requestStatus===1&&t.requestTime+by<Date.now()}/**
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
 */async function XR(t){const e=t,{installationEntry:n,registrationPromise:r}=await mh(e);return r?r.catch(console.error):gh(e).catch(console.error),n.fid}/**
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
 */async function ZR(t,e=!1){const n=t;return await eN(n),(await gh(n,e)).token}async function eN(t){const{registrationPromise:e}=await mh(t);e&&await e}/**
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
 */function tN(t){if(!t||!t.options)throw uu("App Configuration");if(!t.name)throw uu("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw uu(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function uu(t){return ur.create("missing-app-config-values",{valueName:t})}/**
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
 */const Qy="installations",nN="installations-internal",rN=t=>{const e=t.getProvider("app").getImmediate(),n=tN(e),r=Fn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},iN=t=>{const e=t.getProvider("app").getImmediate(),n=Fn(e,Qy).getImmediate();return{getId:()=>XR(n),getToken:i=>ZR(n,i)}};function sN(){St(new at(Qy,rN,"PUBLIC")),St(new at(nN,iN,"PRIVATE"))}sN();We(Oy,fh);We(Oy,fh,"esm2017");/**
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
 */const ka="analytics",oN="firebase_id",aN="origin",lN=60*1e3,uN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",_h="https://www.googletagmanager.com/gtag/js";/**
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
 */const He=new tl("@firebase/analytics");/**
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
 */const cN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ye=new gr("analytics","Analytics",cN);/**
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
 */function dN(t){if(!t.startsWith(_h)){const e=Ye.create("invalid-gtag-resource",{gtagURL:t});return He.warn(e.message),""}return t}function Yy(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function hN(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function fN(t,e){const n=hN("firebase-js-sdk-policy",{createScriptURL:dN}),r=document.createElement("script"),i=`${_h}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function pN(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function mN(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await Yy(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){He.error(a)}t("config",i,s)}async function gN(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Yy(n);for(const l of o){const u=a.find(c=>c.measurementId===l),d=u&&e[u.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){He.error(s)}}function _N(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await gN(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await mN(t,e,n,r,a,l)}else if(s==="consent"){const[a,l]=o;t("consent",a,l)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){He.error(a)}}return i}function vN(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=_N(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function yN(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(_h)&&n.src.includes(t))return n;return null}/**
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
 */const wN=30,EN=1e3;class SN{constructor(e={},n=EN){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Jy=new SN;function CN(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function IN(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:CN(r)},s=uN.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Ye.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function TN(t,e=Jy,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Ye.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ye.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new NN;return setTimeout(async()=>{a.abort()},lN),Xy({appId:r,apiKey:i,measurementId:s},o,a,e)}async function Xy(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Jy){var s;const{appId:o,measurementId:a}=t;try{await kN(r,e)}catch(l){if(a)return He.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await IN(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!RN(u)){if(i.deleteThrottleMetadata(o),a)return He.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const d=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?np(n,i.intervalMillis,wN):np(n,i.intervalMillis),c={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,c),He.debug(`Calling attemptFetch again in ${d} millis`),Xy(t,c,r,i)}}function kN(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Ye.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function RN(t){if(!(t instanceof Ct)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class NN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function PN(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function xN(){if(uv())try{await cv()}catch(t){return He.warn(Ye.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return He.warn(Ye.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function AN(t,e,n,r,i,s,o){var a;const l=TN(t);l.then(v=>{n[v.measurementId]=v.appId,t.options.measurementId&&v.measurementId!==t.options.measurementId&&He.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>He.error(v)),e.push(l);const u=xN().then(v=>{if(v)return r.getId()}),[d,c]=await Promise.all([l,u]);yN(s)||fN(s,d.measurementId),i("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[aN]="firebase",h.update=!0,c!=null&&(h[oN]=c),i("config",d.measurementId,h),d.measurementId}/**
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
 */class ON{constructor(e){this.app=e}_delete(){return delete Xi[this.app.options.appId],Promise.resolve()}}let Xi={},qp=[];const Kp={};let cu="dataLayer",bN="gtag",Qp,Zy,Yp=!1;function DN(){const t=[];if(ov()&&t.push("This is a browser extension environment."),US()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ye.create("invalid-analytics-context",{errorInfo:e});He.warn(n.message)}}function LN(t,e,n){DN();const r=t.options.appId;if(!r)throw Ye.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)He.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ye.create("no-api-key");if(Xi[r]!=null)throw Ye.create("already-exists",{id:r});if(!Yp){pN(cu);const{wrappedGtag:s,gtagCore:o}=vN(Xi,qp,Kp,cu,bN);Zy=s,Qp=o,Yp=!0}return Xi[r]=AN(t,qp,Kp,e,Qp,cu,n),new ON(t)}function MN(t=nl()){t=me(t);const e=Fn(t,ka);return e.isInitialized()?e.getImmediate():FN(t)}function FN(t,e={}){const n=Fn(t,ka);if(n.isInitialized()){const i=n.getImmediate();if(Es(e,n.getOptions()))return i;throw Ye.create("already-initialized")}return n.initialize({options:e})}function UN(t,e,n,r){t=me(t),PN(Zy,Xi[t.app.options.appId],e,n,r).catch(i=>He.error(i))}const Jp="@firebase/analytics",Xp="0.10.7";function jN(){St(new at(ka,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return LN(r,i,n)},"PUBLIC")),St(new at("analytics-internal",t,"PRIVATE")),We(Jp,Xp),We(Jp,Xp,"esm2017");function t(e){try{const n=e.getProvider(ka).getImmediate();return{logEvent:(r,i,s)=>UN(n,r,i,s)}}catch(n){throw Ye.create("interop-component-reg-failed",{reason:n})}}}jN();function vh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function e0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zN=e0,t0=new gr("auth","Firebase",e0());/**
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
 */const Ra=new tl("@firebase/auth");function BN(t,...e){Ra.logLevel<=H.WARN&&Ra.warn(`Auth (${_r}): ${t}`,...e)}function bo(t,...e){Ra.logLevel<=H.ERROR&&Ra.error(`Auth (${_r}): ${t}`,...e)}/**
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
 */function Ot(t,...e){throw wh(t,...e)}function wt(t,...e){return wh(t,...e)}function yh(t,e,n){const r=Object.assign(Object.assign({},zN()),{[e]:n});return new gr("auth","Firebase",r).create(e,{appName:t.name})}function Zn(t){return yh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $N(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ot(t,"argument-error"),yh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function wh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return t0.create(t,...e)}function O(t,e,...n){if(!t)throw wh(e,...n)}function zt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw bo(e),new Error(e)}function Jt(t,e){t||zt(e)}/**
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
 */function Pc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function VN(){return Zp()==="http:"||Zp()==="https:"}function Zp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function WN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(VN()||ov()||"connection"in navigator)?navigator.onLine:!0}function HN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Hs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Jt(n>e,"Short delay should be less than long delay!"),this.isMobile=Ad()||av()}get(){return WN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Eh(t,e){Jt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class n0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const GN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const qN=new Hs(3e4,6e4);function Sh(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function vi(t,e,n,r,i={}){return r0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=pi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),n0.fetch()(i0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function r0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},GN),e);try{const i=new QN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw go(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw go(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw go(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw go(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw yh(t,d,u);Ot(t,d)}}catch(i){if(i instanceof Ct)throw i;Ot(t,"network-request-failed",{message:String(i)})}}async function KN(t,e,n,r,i={}){const s=await vi(t,e,n,r,i);return"mfaPendingCredential"in s&&Ot(t,"multi-factor-auth-required",{_serverResponse:s}),s}function i0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Eh(t.config,i):`${t.config.apiScheme}://${i}`}class QN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wt(this.auth,"network-request-failed")),qN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function go(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=wt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function YN(t,e){return vi(t,"POST","/v1/accounts:delete",e)}async function s0(t,e){return vi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Zi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function JN(t,e=!1){const n=me(t),r=await n.getIdToken(e),i=Ch(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Zi(du(i.auth_time)),issuedAtTime:Zi(du(i.iat)),expirationTime:Zi(du(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function du(t){return Number(t)*1e3}function Ch(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return bo("JWT malformed, contained fewer than 3 sections"),null;try{const i=ua(n);return i?JSON.parse(i):(bo("Failed to decode base64 JWT payload"),null)}catch(i){return bo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function em(t){const e=Ch(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Os(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ct&&XN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function XN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ZN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class xc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zi(this.lastLoginAt),this.creationTime=Zi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Na(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Os(t,s0(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?o0(s.providerUserInfo):[],a=tP(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new xc(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function eP(t){const e=me(t);await Na(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function o0(t){return t.map(e=>{var{providerId:n}=e,r=vh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function nP(t,e){const n=await r0(t,{},async()=>{const r=pi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=i0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",n0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function rP(t,e){return vi(t,"POST","/v2/accounts:revokeToken",Sh(t,e))}/**
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
 */class Gr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):em(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){O(e.length!==0,"internal-error");const n=em(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await nP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Gr;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gr,this.toJSON())}_performRefresh(){return zt("not implemented")}}/**
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
 */function nn(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Bt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=vh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ZN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new xc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Os(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return JN(this,e)}reload(){return eP(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Bt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Na(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ut(this.auth.app))return Promise.reject(Zn(this.auth));const e=await this.getIdToken();return await Os(this,YN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:_,emailVerified:w,isAnonymous:T,providerData:k,stsTokenManager:N}=n;O(_&&N,e,"internal-error");const P=Gr.fromJSON(this.name,N);O(typeof _=="string",e,"internal-error"),nn(c,e.name),nn(h,e.name),O(typeof w=="boolean",e,"internal-error"),O(typeof T=="boolean",e,"internal-error"),nn(v,e.name),nn(p,e.name),nn(y,e.name),nn(E,e.name),nn(m,e.name),nn(f,e.name);const W=new Bt({uid:_,auth:e,email:h,emailVerified:w,displayName:c,isAnonymous:T,photoURL:p,phoneNumber:v,tenantId:y,stsTokenManager:P,createdAt:m,lastLoginAt:f});return k&&Array.isArray(k)&&(W.providerData=k.map(b=>Object.assign({},b))),E&&(W._redirectEventId=E),W}static async _fromIdTokenResponse(e,n,r=!1){const i=new Gr;i.updateFromServerResponse(n);const s=new Bt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Na(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];O(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?o0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Gr;a.updateFromIdToken(r);const l=new Bt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new xc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
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
 */const tm=new Map;function $t(t){Jt(t instanceof Function,"Expected a class definition");let e=tm.get(t);return e?(Jt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,tm.set(t,e),e)}/**
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
 */class a0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}a0.type="NONE";const nm=a0;/**
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
 */function Do(t,e,n){return`firebase:${t}:${e}:${n}`}class qr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Do(this.userKey,i.apiKey,s),this.fullPersistenceKey=Do("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Bt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qr($t(nm),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||$t(nm);const o=Do(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const c=Bt._fromJSON(e,d);u!==s&&(a=c),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new qr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new qr(s,e,r))}}/**
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
 */function rm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(d0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(l0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(f0(e))return"Blackberry";if(p0(e))return"Webos";if(u0(e))return"Safari";if((e.includes("chrome/")||c0(e))&&!e.includes("edge/"))return"Chrome";if(h0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function l0(t=Le()){return/firefox\//i.test(t)}function u0(t=Le()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function c0(t=Le()){return/crios\//i.test(t)}function d0(t=Le()){return/iemobile/i.test(t)}function h0(t=Le()){return/android/i.test(t)}function f0(t=Le()){return/blackberry/i.test(t)}function p0(t=Le()){return/webos/i.test(t)}function Ih(t=Le()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function iP(t=Le()){var e;return Ih(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sP(){return FS()&&document.documentMode===10}function m0(t=Le()){return Ih(t)||h0(t)||p0(t)||f0(t)||/windows phone/i.test(t)||d0(t)}/**
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
 */function g0(t,e=[]){let n;switch(t){case"Browser":n=rm(Le());break;case"Worker":n=`${rm(Le())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_r}/${r}`}/**
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
 */class oP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function aP(t,e={}){return vi(t,"GET","/v2/passwordPolicy",Sh(t,e))}/**
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
 */const lP=6;class uP{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:lP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class cP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new im(this),this.idTokenSubscription=new im(this),this.beforeStateQueue=new oP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=t0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=$t(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await qr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await s0(this,{idToken:e}),r=await Bt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ut(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Na(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=HN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ut(this.app))return Promise.reject(Zn(this));const n=e?me(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ut(this.app)?Promise.reject(Zn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ut(this.app)?Promise.reject(Zn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($t(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await aP(this),n=new uP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new gr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await rP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&$t(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await qr.create(this,[$t(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=g0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&BN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function gl(t){return me(t)}class im{constructor(e){this.auth=e,this.observer=null,this.addObserver=HS(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Th={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dP(t){Th=t}function hP(t){return Th.loadJS(t)}function fP(){return Th.gapiScript}function pP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function mP(t,e){const n=Fn(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Es(s,e??{}))return i;Ot(i,"already-initialized")}return n.initialize({options:e})}function gP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map($t);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function _P(t,e,n){const r=gl(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=_0(e),{host:o,port:a}=vP(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),yP()}function _0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function vP(t){const e=_0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:sm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:sm(o)}}}function sm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function yP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class v0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return zt("not implemented")}_getIdTokenResponse(e){return zt("not implemented")}_linkToIdToken(e,n){return zt("not implemented")}_getReauthenticationResolver(e){return zt("not implemented")}}/**
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
 */async function Kr(t,e){return KN(t,"POST","/v1/accounts:signInWithIdp",Sh(t,e))}/**
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
 */const wP="http://localhost";class dr extends v0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new dr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=vh(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new dr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Kr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Kr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Kr(e,n)}buildRequest(){const e={requestUri:wP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=pi(n)}return e}}/**
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
 */class kh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Gs extends kh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ln extends Gs{constructor(){super("facebook.com")}static credential(e){return dr._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ln.credential(e.oauthAccessToken)}catch{return null}}}ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";ln.PROVIDER_ID="facebook.com";/**
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
 */class Rt extends Gs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return dr._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Rt.credential(n,r)}catch{return null}}}Rt.GOOGLE_SIGN_IN_METHOD="google.com";Rt.PROVIDER_ID="google.com";/**
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
 */class un extends Gs{constructor(){super("github.com")}static credential(e){return dr._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return un.credential(e.oauthAccessToken)}catch{return null}}}un.GITHUB_SIGN_IN_METHOD="github.com";un.PROVIDER_ID="github.com";/**
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
 */class cn extends Gs{constructor(){super("twitter.com")}static credential(e,n){return dr._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return cn.credential(n,r)}catch{return null}}}cn.TWITTER_SIGN_IN_METHOD="twitter.com";cn.PROVIDER_ID="twitter.com";/**
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
 */class li{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Bt._fromIdTokenResponse(e,r,i),o=om(r);return new li({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=om(r);return new li({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function om(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Pa extends Ct{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Pa.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Pa(e,n,r,i)}}function y0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Pa._fromErrorAndOperation(t,s,e,r):s})}async function EP(t,e,n=!1){const r=await Os(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return li._forOperation(t,"link",r)}/**
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
 */async function SP(t,e,n=!1){const{auth:r}=t;if(Ut(r.app))return Promise.reject(Zn(r));const i="reauthenticate";try{const s=await Os(t,y0(r,i,e,t),n);O(s.idToken,r,"internal-error");const o=Ch(s.idToken);O(o,r,"internal-error");const{sub:a}=o;return O(t.uid===a,r,"user-mismatch"),li._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ot(r,"user-mismatch"),s}}/**
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
 */async function CP(t,e,n=!1){if(Ut(t.app))return Promise.reject(Zn(t));const r="signIn",i=await y0(t,r,e),s=await li._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function IP(t,e,n,r){return me(t).onIdTokenChanged(e,n,r)}function TP(t,e,n){return me(t).beforeAuthStateChanged(e,n)}const xa="__sak";/**
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
 */class w0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xa,"1"),this.storage.removeItem(xa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const kP=1e3,RP=10;class E0 extends w0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=m0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);sP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,RP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},kP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}E0.type="LOCAL";const NP=E0;/**
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
 */class S0 extends w0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}S0.type="SESSION";const C0=S0;/**
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
 */function PP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class _l{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new _l(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await PP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_l.receivers=[];/**
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
 */function Rh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class xP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Rh("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function At(){return window}function AP(t){At().location.href=t}/**
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
 */function I0(){return typeof At().WorkerGlobalScope<"u"&&typeof At().importScripts=="function"}async function OP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function DP(){return I0()?self:null}/**
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
 */const T0="firebaseLocalStorageDb",LP=1,Aa="firebaseLocalStorage",k0="fbase_key";class qs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vl(t,e){return t.transaction([Aa],e?"readwrite":"readonly").objectStore(Aa)}function MP(){const t=indexedDB.deleteDatabase(T0);return new qs(t).toPromise()}function Ac(){const t=indexedDB.open(T0,LP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Aa,{keyPath:k0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Aa)?e(r):(r.close(),await MP(),e(await Ac()))})})}async function am(t,e,n){const r=vl(t,!0).put({[k0]:e,value:n});return new qs(r).toPromise()}async function FP(t,e){const n=vl(t,!1).get(e),r=await new qs(n).toPromise();return r===void 0?null:r.value}function lm(t,e){const n=vl(t,!0).delete(e);return new qs(n).toPromise()}const UP=800,jP=3;class R0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ac(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>jP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return I0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_l._getInstance(DP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await OP(),!this.activeServiceWorker)return;this.sender=new xP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ac();return await am(e,xa,"1"),await lm(e,xa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>am(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>FP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>lm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=vl(i,!1).getAll();return new qs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),UP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}R0.type="LOCAL";const zP=R0;new Hs(3e4,6e4);/**
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
 */function N0(t,e){return e?$t(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Nh extends v0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Kr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Kr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function BP(t){return CP(t.auth,new Nh(t),t.bypassAuthState)}function $P(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),SP(n,new Nh(t),t.bypassAuthState)}async function VP(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),EP(n,new Nh(t),t.bypassAuthState)}/**
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
 */class P0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return BP;case"linkViaPopup":case"linkViaRedirect":return VP;case"reauthViaPopup":case"reauthViaRedirect":return $P;default:Ot(this.auth,"internal-error")}}resolve(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const WP=new Hs(2e3,1e4);async function HP(t,e,n){if(Ut(t.app))return Promise.reject(wt(t,"operation-not-supported-in-this-environment"));const r=gl(t);$N(t,e,kh);const i=N0(r,n);return new Qn(r,"signInViaPopup",e,i).executeNotNull()}class Qn extends P0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Qn.currentPopupAction&&Qn.currentPopupAction.cancel(),Qn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){Jt(this.filter.length===1,"Popup operations only handle one event");const e=Rh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,WP.get())};e()}}Qn.currentPopupAction=null;/**
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
 */const GP="pendingRedirect",Lo=new Map;class qP extends P0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Lo.get(this.auth._key());if(!e){try{const r=await KP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Lo.set(this.auth._key(),e)}return this.bypassAuthState||Lo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function KP(t,e){const n=JP(e),r=YP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function QP(t,e){Lo.set(t._key(),e)}function YP(t){return $t(t._redirectPersistence)}function JP(t){return Do(GP,t.config.apiKey,t.name)}async function XP(t,e,n=!1){if(Ut(t.app))return Promise.reject(Zn(t));const r=gl(t),i=N0(r,e),o=await new qP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const ZP=10*60*1e3;class ex{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!x0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(wt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ZP&&this.cachedEventUids.clear(),this.cachedEventUids.has(um(e))}saveEventToCache(e){this.cachedEventUids.add(um(e)),this.lastProcessedEventTime=Date.now()}}function um(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function x0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return x0(t);default:return!1}}/**
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
 */async function nx(t,e={}){return vi(t,"GET","/v1/projects",e)}/**
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
 */const rx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ix=/^https?/;async function sx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await nx(t);for(const n of e)try{if(ox(n))return}catch{}Ot(t,"unauthorized-domain")}function ox(t){const e=Pc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ix.test(n))return!1;if(rx.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const ax=new Hs(3e4,6e4);function cm(){const t=At().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function lx(t){return new Promise((e,n)=>{var r,i,s;function o(){cm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cm(),n(wt(t,"network-request-failed"))},timeout:ax.get()})}if(!((i=(r=At().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=At().gapi)===null||s===void 0)&&s.load)o();else{const a=pP("iframefcb");return At()[a]=()=>{gapi.load?o():n(wt(t,"network-request-failed"))},hP(`${fP()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Mo=null,e})}let Mo=null;function ux(t){return Mo=Mo||lx(t),Mo}/**
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
 */const cx=new Hs(5e3,15e3),dx="__/auth/iframe",hx="emulator/auth/iframe",fx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},px=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mx(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Eh(e,hx):`https://${t.config.authDomain}/${dx}`,r={apiKey:e.apiKey,appName:t.name,v:_r},i=px.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${pi(r).slice(1)}`}async function gx(t){const e=await ux(t),n=At().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:mx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fx,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=wt(t,"network-request-failed"),a=At().setTimeout(()=>{s(o)},cx.get());function l(){At().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const _x={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vx=500,yx=600,wx="_blank",Ex="http://localhost";class dm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Sx(t,e,n,r=vx,i=yx){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},_x),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Le().toLowerCase();n&&(a=c0(u)?wx:n),l0(u)&&(e=e||Ex,l.scrollbars="yes");const d=Object.entries(l).reduce((h,[v,p])=>`${h}${v}=${p},`,"");if(iP(u)&&a!=="_self")return Cx(e||"",a),new dm(null);const c=window.open(e||"",a,d);O(c,t,"popup-blocked");try{c.focus()}catch{}return new dm(c)}function Cx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Ix="__/auth/handler",Tx="emulator/auth/handler",kx=encodeURIComponent("fac");async function hm(t,e,n,r,i,s){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:_r,eventId:i};if(e instanceof kh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",uc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries({}))o[d]=c}if(e instanceof Gs){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),u=l?`#${kx}=${encodeURIComponent(l)}`:"";return`${Rx(t)}?${pi(a).slice(1)}${u}`}function Rx({config:t}){return t.emulator?Eh(t,Tx):`https://${t.authDomain}/${Ix}`}/**
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
 */const hu="webStorageSupport";class Nx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=C0,this._completeRedirectFn=XP,this._overrideRedirectResult=QP}async _openPopup(e,n,r,i){var s;Jt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await hm(e,n,r,Pc(),i);return Sx(e,o,Rh())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await hm(e,n,r,Pc(),i);return AP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Jt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await gx(e),r=new ex(e);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(hu,{type:hu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[hu];o!==void 0&&n(!!o),Ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return m0()||u0()||Ih()}}const Px=Nx;var fm="@firebase/auth",pm="1.7.8";/**
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
 */class xx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ax(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ox(t){St(new at("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:g0(t)},u=new cP(r,i,s,l);return gP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),St(new at("auth-internal",e=>{const n=gl(e.getProvider("auth").getImmediate());return(r=>new xx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),We(fm,pm,Ax(t)),We(fm,pm,"esm2017")}/**
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
 */const bx=5*60,Dx=iv("authIdTokenMaxAge")||bx;let mm=null;const Lx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Dx)return;const i=n==null?void 0:n.token;mm!==i&&(mm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Mx(t=nl()){const e=Fn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=mP(t,{popupRedirectResolver:Px,persistence:[zP,NP,C0]}),r=iv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Lx(s.toString());TP(n,o,()=>o(n.currentUser)),IP(n,a=>o(a))}}const i=tv("auth");return i&&_P(n,`http://${i}`),n}function Fx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}dP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=wt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Fx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ox("Browser");/**
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
 */const A0="firebasestorage.googleapis.com",O0="storageBucket",Ux=2*60*1e3,jx=10*60*1e3;/**
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
 */class oe extends Ct{constructor(e,n,r=0){super(fu(e),`Firebase Storage: ${n} (${fu(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,oe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return fu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var se;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(se||(se={}));function fu(t){return"storage/"+t}function Ph(){const t="An unknown error occurred, please check the error payload for server response.";return new oe(se.UNKNOWN,t)}function zx(t){return new oe(se.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Bx(t){return new oe(se.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function $x(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new oe(se.UNAUTHENTICATED,t)}function Vx(){return new oe(se.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Wx(t){return new oe(se.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Hx(){return new oe(se.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Gx(){return new oe(se.CANCELED,"User canceled the upload/download.")}function qx(t){return new oe(se.INVALID_URL,"Invalid URL '"+t+"'.")}function Kx(t){return new oe(se.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Qx(){return new oe(se.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+O0+"' property when initializing the app?")}function Yx(){return new oe(se.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Jx(){return new oe(se.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Xx(t){return new oe(se.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Oc(t){return new oe(se.INVALID_ARGUMENT,t)}function b0(){return new oe(se.APP_DELETED,"The Firebase app was deleted.")}function Zx(t){return new oe(se.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function es(t,e){return new oe(se.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function bi(t){throw new oe(se.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Ke{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ke.makeFromUrl(e,n)}catch{return new Ke(e,"")}if(r.path==="")return r;throw Kx(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(w){w.path_=decodeURIComponent(w.path)}const d="v[A-Za-z0-9_]+",c=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",v=new RegExp(`^https?://${c}/${d}/b/${i}/o${h}`,"i"),p={bucket:1,path:3},y=n===A0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",m=new RegExp(`^https?://${y}/${i}/${E}`,"i"),_=[{regex:a,indices:l,postModify:s},{regex:v,indices:p,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let w=0;w<_.length;w++){const T=_[w],k=T.regex.exec(e);if(k){const N=k[T.indices.bucket];let P=k[T.indices.path];P||(P=""),r=new Ke(N,P),T.postModify(r);break}}if(r==null)throw qx(e);return r}}class eA{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function tA(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function d(...E){u||(u=!0,e.apply(null,E))}function c(E){i=setTimeout(()=>{i=null,t(v,l())},E)}function h(){s&&clearTimeout(s)}function v(E,...m){if(u){h();return}if(E){h(),d.call(null,E,...m);return}if(l()||o){h(),d.call(null,E,...m);return}r<64&&(r*=2);let _;a===1?(a=2,_=0):_=(r+Math.random())*1e3,c(_)}let p=!1;function y(E){p||(p=!0,h(),!u&&(i!==null?(E||(a=2),clearTimeout(i),c(0)):E||(a=1)))}return c(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function nA(t){t(!1)}/**
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
 */function rA(t){return t!==void 0}function iA(t){return typeof t=="object"&&!Array.isArray(t)}function xh(t){return typeof t=="string"||t instanceof String}function gm(t){return Ah()&&t instanceof Blob}function Ah(){return typeof Blob<"u"}function _m(t,e,n,r){if(r<e)throw Oc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Oc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Oh(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function D0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var er;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(er||(er={}));/**
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
 */function sA(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class oA{constructor(e,n,r,i,s,o,a,l,u,d,c,h=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=c,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,p)=>{this.resolve_=v,this.reject_=p,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new _o(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===er.NO_ERROR,l=s.getStatus();if(!a||sA(l,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===er.ABORT;r(!1,new _o(!1,null,d));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new _o(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());rA(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Ph();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?b0():Gx();o(l)}else{const l=Hx();o(l)}};this.canceled_?n(!1,new _o(!1,null,!0)):this.backoffId_=tA(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&nA(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class _o{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function aA(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function lA(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function uA(t,e){e&&(t["X-Firebase-GMPID"]=e)}function cA(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function dA(t,e,n,r,i,s,o=!0){const a=D0(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return uA(u,e),aA(u,n),lA(u,s),cA(u,r),new oA(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function hA(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function fA(...t){const e=hA();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Ah())return new Blob(t);throw new oe(se.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function pA(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function mA(t){if(typeof atob>"u")throw Xx("base-64");return atob(t)}/**
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
 */const Nt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class pu{constructor(e,n){this.data=e,this.contentType=n||null}}function gA(t,e){switch(t){case Nt.RAW:return new pu(L0(e));case Nt.BASE64:case Nt.BASE64URL:return new pu(M0(t,e));case Nt.DATA_URL:return new pu(vA(e),yA(e))}throw Ph()}function L0(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function _A(t){let e;try{e=decodeURIComponent(t)}catch{throw es(Nt.DATA_URL,"Malformed data URL.")}return L0(e)}function M0(t,e){switch(t){case Nt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw es(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Nt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw es(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=mA(e)}catch(i){throw i.message.includes("polyfill")?i:es(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class F0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw es(Nt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=wA(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function vA(t){const e=new F0(t);return e.base64?M0(Nt.BASE64,e.rest):_A(e.rest)}function yA(t){return new F0(t).contentType}function wA(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class dn{constructor(e,n){let r=0,i="";gm(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(gm(this.data_)){const r=this.data_,i=pA(r,e,n);return i===null?null:new dn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new dn(r,!0)}}static getBlob(...e){if(Ah()){const n=e.map(r=>r instanceof dn?r.data_:r);return new dn(fA.apply(null,n))}else{const n=e.map(o=>xh(o)?gA(Nt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new dn(i,!0)}}uploadData(){return this.data_}}/**
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
 */function U0(t){let e;try{e=JSON.parse(t)}catch{return null}return iA(e)?e:null}/**
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
 */function EA(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function SA(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function j0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function CA(t,e){return e}class xe{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||CA}}let vo=null;function IA(t){return!xh(t)||t.length<2?t:j0(t)}function z0(){if(vo)return vo;const t=[];t.push(new xe("bucket")),t.push(new xe("generation")),t.push(new xe("metageneration")),t.push(new xe("name","fullPath",!0));function e(s,o){return IA(o)}const n=new xe("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new xe("size");return i.xform=r,t.push(i),t.push(new xe("timeCreated")),t.push(new xe("updated")),t.push(new xe("md5Hash",null,!0)),t.push(new xe("cacheControl",null,!0)),t.push(new xe("contentDisposition",null,!0)),t.push(new xe("contentEncoding",null,!0)),t.push(new xe("contentLanguage",null,!0)),t.push(new xe("contentType",null,!0)),t.push(new xe("metadata","customMetadata",!0)),vo=t,vo}function TA(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Ke(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function kA(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return TA(r,t),r}function B0(t,e,n){const r=U0(e);return r===null?null:kA(t,r,n)}function RA(t,e,n,r){const i=U0(e);if(i===null||!xh(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const d=t.bucket,c=t.fullPath,h="/b/"+o(d)+"/o/"+o(c),v=Oh(h,n,r),p=D0({alt:"media",token:u});return v+p})[0]}function NA(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class $0{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function V0(t){if(!t)throw Ph()}function PA(t,e){function n(r,i){const s=B0(t,i,e);return V0(s!==null),s}return n}function xA(t,e){function n(r,i){const s=B0(t,i,e);return V0(s!==null),RA(s,i,t.host,t._protocol)}return n}function W0(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=Vx():i=$x():n.getStatus()===402?i=Bx(t.bucket):n.getStatus()===403?i=Wx(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function AA(t){const e=W0(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=zx(t.path)),s.serverResponse=i.serverResponse,s}return n}function OA(t,e,n){const r=e.fullServerUrl(),i=Oh(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new $0(i,s,xA(t,n),o);return a.errorHandler=AA(e),a}function bA(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function DA(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=bA(null,e)),r}function LA(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let _="";for(let w=0;w<2;w++)_=_+Math.random().toString().slice(2);return _}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=DA(e,r,i),d=NA(u,n),c="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,h=`\r
--`+l+"--",v=dn.getBlob(c,r,h);if(v===null)throw Yx();const p={name:u.fullPath},y=Oh(s,t.host,t._protocol),E="POST",m=t.maxUploadRetryTime,f=new $0(y,E,PA(t,n),m);return f.urlParams=p,f.headers=o,f.body=v.uploadData(),f.errorHandler=W0(e),f}class MA{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=er.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=er.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=er.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw bi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw bi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw bi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw bi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw bi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class FA extends MA{initXhr(){this.xhr_.responseType="text"}}function H0(){return new FA}/**
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
 */class hr{constructor(e,n){this._service=e,n instanceof Ke?this._location=n:this._location=Ke.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new hr(e,n)}get root(){const e=new Ke(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return j0(this._location.path)}get storage(){return this._service}get parent(){const e=EA(this._location.path);if(e===null)return null;const n=new Ke(this._location.bucket,e);return new hr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Zx(e)}}function UA(t,e,n){t._throwIfRoot("uploadBytes");const r=LA(t.storage,t._location,z0(),new dn(e,!0),n);return t.storage.makeRequestWithTokens(r,H0).then(i=>({metadata:i,ref:t}))}function jA(t){t._throwIfRoot("getDownloadURL");const e=OA(t.storage,t._location,z0());return t.storage.makeRequestWithTokens(e,H0).then(n=>{if(n===null)throw Jx();return n})}function zA(t,e){const n=SA(t._location.path,e),r=new Ke(t._location.bucket,n);return new hr(t.storage,r)}/**
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
 */function BA(t){return/^[A-Za-z]+:\/\//.test(t)}function $A(t,e){return new hr(t,e)}function G0(t,e){if(t instanceof bh){const n=t;if(n._bucket==null)throw Qx();const r=new hr(n,n._bucket);return e!=null?G0(r,e):r}else return e!==void 0?zA(t,e):t}function VA(t,e){if(e&&BA(e)){if(t instanceof bh)return $A(t,e);throw Oc("To use ref(service, url), the first argument must be a Storage instance.")}else return G0(t,e)}function vm(t,e){const n=e==null?void 0:e[O0];return n==null?null:Ke.makeFromBucketSpec(n,t)}function WA(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:sv(i,t.app.options.projectId))}class bh{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=A0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ux,this._maxUploadRetryTime=jx,this._requests=new Set,i!=null?this._bucket=Ke.makeFromBucketSpec(i,this._host):this._bucket=vm(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ke.makeFromBucketSpec(this._url,e):this._bucket=vm(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){_m("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){_m("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new hr(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new eA(b0());{const o=dA(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const ym="@firebase/storage",wm="0.13.1";/**
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
 */const q0="storage";function LO(t,e,n){return t=me(t),UA(t,e,n)}function MO(t){return t=me(t),jA(t)}function FO(t,e){return t=me(t),VA(t,e)}function HA(t=nl(),e){t=me(t);const r=Fn(t,q0).getImmediate({identifier:e}),i=nv("storage");return i&&GA(r,...i),r}function GA(t,e,n,r={}){WA(t,e,n,r)}function qA(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new bh(n,r,i,e,_r)}function KA(){St(new at(q0,qA,"PUBLIC").setMultipleInstances(!0)),We(ym,wm,""),We(ym,wm,"esm2017")}KA();const QA={apiKey:"AIzaSyBJm9fkGNwaMtHi5ChRDULA2UgLrFT8nvI",authDomain:"ranking-bp.firebaseapp.com",projectId:"ranking-bp",storageBucket:"ranking-bp.appspot.com",messagingSenderId:"1045536295453",appId:"1:1045536295453:web:27da7bdeee70b6ac8894f4",measurementId:"G-9HBZ9LWGLH"},yl=mv(QA),K0=Mx(yl);MN(yl);new Rt;const Ir=gR(yl),UO=HA(yl),wr=S.createContext(),YA=({children:t})=>{const[e,n]=S.useState([]),[r,i]=S.useState([]),[s,o]=S.useState([]),[a,l]=S.useState([]);return S.useEffect(()=>{(async()=>{const d=Cr(Ir,"banners"),c=Cr(Ir,"jugadores"),h=Cr(Ir,"torneos"),v=Cr(Ir,"clubs"),p=(y,E,m)=>{lR(E,f=>{const _=f.val(),w=_?Array.isArray(_)?_:Object.values(_):[];localStorage.setItem(y,JSON.stringify(w)),m(w)})};p("banners",d,n),p("jugadores",c,i),p("torneos",h,o),p("clubs",v,l)})()},[]),S.useEffect(()=>{const u=JSON.parse(localStorage.getItem("banners"))||[],d=JSON.parse(localStorage.getItem("jugadores"))||[],c=JSON.parse(localStorage.getItem("torneos"))||[],h=JSON.parse(localStorage.getItem("clubs"))||[];n(u),i(d),o(c),l(h)},[]),S.useEffect(()=>{(async()=>{const d=new Date().toISOString().split("T")[0],c=s.filter(p=>p.fecha.split("/").reverse().join("-")>=d),h=Cr(Ir,"torneos");(await oR(h)).forEach(p=>{p.val().fecha.split("/").reverse().join("-")<d&&sR(Cr(Ir,`torneos/${p.key}`))}),o(c)})()},[s]),g.jsx(wr.Provider,{value:{banners:e,jugadores:r,setJugadores:i,torneos:s,clubes:a},children:t})},JA=()=>{const{banners:t}=S.useContext(wr),[e,n]=S.useState(0),[r,i]=S.useState(!0),s=S.useRef(null),o=S.useRef(null),a=S.useRef(null);S.useEffect(()=>{if(!t||t.length===0)return;const c=E=>{const m=s.current;E>=t.length&&n(0),E<0&&n(t.length-1),m.style.transform=`translateX(${-e*100}%)`,h()},h=()=>{o.current.querySelectorAll(".dot").forEach((m,f)=>{m.classList.toggle("active",f===e)})},v=()=>{a.current=setInterval(()=>{r&&n(E=>(E+1)%t.length)},3e3)},p=()=>{let E=0,m=0,f=0,_=!1;const w=s.current,T=P=>{E=P.clientX,w.style.transition="none",_=!0,i(!1)},k=P=>{_&&(m=P.clientX-E,w.style.transform=`translateX(${m+f}px)`)},N=P=>{if(!_)return;const W=P.clientX-E;let b=e;W<-50?b=(e+1)%t.length:W>50&&(b=(e-1+t.length)%t.length),n(b),c(b),f+=m,w.style.transition="transform 0.3s ease-out",_=!1,i(!0),E=void 0,m=0};return w.addEventListener("pointerdown",T),w.addEventListener("pointermove",k),w.addEventListener("pointerup",N),w.addEventListener("pointercancel",()=>{_=!1}),()=>{w.removeEventListener("pointerdown",T),w.removeEventListener("pointermove",k),w.removeEventListener("pointerup",N)}};c(e),v();const y=p();return()=>{clearInterval(a.current),y()}},[e,r,t]);const l=()=>{n(c=>(c+1)%t.length)},u=()=>{n(c=>(c-1+t.length)%t.length)},d=c=>{n(c)};return g.jsxs("div",{className:"banner-slider",children:[g.jsx("div",{className:"slides",ref:s,children:t&&t.length>0?t.map((c,h)=>g.jsx("div",{className:"slide",children:g.jsx("a",{href:c.link,children:g.jsx("img",{src:c.photoURL,alt:c.title,className:"banner-slide-image",onError:v=>{v.target.onerror=null,v.target.src="https://via.placeholder.com/150"}})})},h)):g.jsx("div",{children:"No banners available"})}),g.jsx("div",{className:"dots",ref:o,children:t&&t.map((c,h)=>g.jsx("span",{className:`dot ${h===e?"active":""}`,onClick:()=>d(h)},h))}),g.jsx("button",{className:"prev",onClick:u,children:"❮"}),g.jsx("button",{className:"next",onClick:l,children:"❯"})]})};var Q0={exports:{}},XA="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ZA=XA,eO=ZA;function Y0(){}function J0(){}J0.resetWarningCache=Y0;var tO=function(){function t(r,i,s,o,a,l){if(l!==eO){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:J0,resetWarningCache:Y0};return n.PropTypes=n,n};Q0.exports=tO();var nO=Q0.exports;const $=Tm(nO);var X0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Em=gn.createContext&&gn.createContext(X0),rO=["attr","size","title"];function iO(t,e){if(t==null)return{};var n=sO(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function sO(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function Oa(){return Oa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Oa.apply(this,arguments)}function Sm(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ba(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Sm(Object(n),!0).forEach(function(r){oO(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Sm(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function oO(t,e,n){return e=aO(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function aO(t){var e=lO(t,"string");return typeof e=="symbol"?e:e+""}function lO(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Z0(t){return t&&t.map((e,n)=>gn.createElement(e.tag,ba({key:n},e.attr),Z0(e.child)))}function ut(t){return e=>gn.createElement(uO,Oa({attr:ba({},t.attr)},e),Z0(t.child))}function uO(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=iO(t,rO),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),gn.createElement("svg",Oa({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:ba(ba({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&gn.createElement("title",null,s),t.children)};return Em!==void 0?gn.createElement(Em.Consumer,null,n=>e(n)):e(X0)}function cO(t){return ut({tag:"svg",attr:{viewBox:"0 0 488 512"},child:[{tag:"path",attr:{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"},child:[]}]})(t)}function ew(t){return ut({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(t)}function dO(t){return ut({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(t)}function jO(t){return ut({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(t)}function zO(t){return ut({tag:"svg",attr:{viewBox:"0 0 256 512"},child:[{tag:"path",attr:{d:"M128 0c35.346 0 64 28.654 64 64s-28.654 64-64 64c-35.346 0-64-28.654-64-64S92.654 0 128 0m119.283 354.179l-48-192A24 24 0 0 0 176 144h-11.36c-22.711 10.443-49.59 10.894-73.28 0H80a24 24 0 0 0-23.283 18.179l-48 192C4.935 369.305 16.383 384 32 384h56v104c0 13.255 10.745 24 24 24h32c13.255 0 24-10.745 24-24V384h56c15.591 0 27.071-14.671 23.283-29.821z"},child:[]}]})(t)}function BO(t){return ut({tag:"svg",attr:{viewBox:"0 0 192 512"},child:[{tag:"path",attr:{d:"M96 0c35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64S60.654 0 96 0m48 144h-11.36c-22.711 10.443-49.59 10.894-73.28 0H48c-26.51 0-48 21.49-48 48v136c0 13.255 10.745 24 24 24h16v136c0 13.255 10.745 24 24 24h64c13.255 0 24-10.745 24-24V352h16c13.255 0 24-10.745 24-24V192c0-26.51-21.49-48-48-48z"},child:[]}]})(t)}function tw(t){return ut({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(t)}function nw(t){return ut({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"},child:[]}]})(t)}function $O(t){return ut({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},child:[]}]})(t)}function VO(t){return ut({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(t)}function WO(t){return ut({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(t)}function HO(t){return ut({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(t)}const rw=({torneo:t,onClose:e})=>t?g.jsx("div",{className:"modal-overlay",onClick:e,children:g.jsxs("div",{className:"modal-content",onClick:n=>n.stopPropagation(),children:[g.jsx("h3",{children:t.nombre}),g.jsxs("p",{children:[g.jsx(dO,{})," ",t.fecha]}),g.jsxs("p",{children:[g.jsx(tw,{})," ",t.direccion]}),g.jsxs("p",{children:[g.jsx(nw,{})," ",g.jsx("a",{href:`tel:${t.whatsapp}`,children:t.whatsapp})]}),g.jsxs("p",{children:["Hora: ",t.hora]}),t.archivoURL&&g.jsx("p",{children:g.jsx("img",{src:t.archivoURL,alt:t.nombre,className:"torneo-image"})})]})}):null;rw.propTypes={torneo:$.shape({nombre:$.string.isRequired,fecha:$.string.isRequired,hora:$.string,telefono:$.string,ubicacion:$.string,archivoURL:$.string}),onClose:$.func.isRequired};const hO=()=>{const{torneos:t}=S.useContext(wr),[e,n]=S.useState(null),[r,i]=S.useState([]);S.useEffect(()=>{const a=new Date().toISOString().split("T")[0],l=t.filter(u=>u.fecha.split("/").reverse().join("-")>=a);i(l)},[t]);const s=a=>{n({nombre:a.nombre||"Nombre no disponible",fecha:a.fecha||"Fecha no disponible",direccion:a.ubicacion||"Ubicación no disponible",lugar:"",whatsapp:a.telefono||"Número no disponible",archivoURL:a.archivoURL||"",hora:a.hora||"Hora no disponible"})},o=()=>{n(null)};return g.jsxs("div",{className:"cards-torneos-container",children:[r.length>0?r.map(a=>g.jsxs("div",{className:"card-torneo",children:[g.jsx("h3",{className:"card-title",children:a.nombre}),g.jsx("p",{className:"card-date",children:a.fecha}),g.jsx("p",{className:"card-description",children:a.descripcion||"Descripción no disponible"}),g.jsx("button",{className:"btn-inscribir",onClick:()=>s(a),children:"Inscribirse"})]},a.id)):g.jsx("p",{children:"No hay torneos disponibles."}),g.jsx(rw,{torneo:e,onClose:o})]})},iw=({jugadores:t,onClose:e,genero:n})=>{const[r,i]=S.useState("conPuntos"),s=t.filter(l=>l.points>0).sort((l,u)=>u.points-l.points),o=t.filter(l=>l.points===0).sort((l,u)=>l.name.localeCompare(u.name)),a=l=>{l.target.className.includes("modal-gnr")&&e()};return g.jsx("div",{className:"modal-gnr",onClick:a,children:g.jsxs("div",{className:"modal-gnr-content",onClick:l=>l.stopPropagation(),children:[g.jsx("h2",{className:"modal-gnr-title",children:n==="masculino"?"Jugadores Masculinos":"Jugadoras Femeninas"}),g.jsxs("div",{className:"modal-gnr-player-list",children:[r==="conPuntos"&&s.map(l=>g.jsxs("div",{className:"modal-gnr-player-card",children:[g.jsx("img",{src:l.photoURL,alt:l.name,className:"modal-gnr-player-photo"}),g.jsxs("div",{className:"modal-gnr-player-info",children:[g.jsx("h4",{children:l.name}),g.jsxs("p",{children:[l.points," puntos"]})]})]},l.id)),r==="sinPuntos"&&o.map(l=>g.jsxs("div",{className:"modal-gnr-player-card",children:[g.jsx("img",{src:l.photoURL,alt:l.name,className:"modal-gnr-player-photo"}),g.jsxs("div",{className:"modal-gnr-player-info",children:[g.jsx("h4",{children:l.name}),g.jsx("p",{children:"Sin puntos"})]})]},l.id))]}),g.jsxs("div",{className:"modal-gnr-tabs-container",children:[g.jsx("button",{className:`modal-gnr-tab ${r==="conPuntos"?"active":""}`,onClick:()=>i("conPuntos"),children:"Con Puntos"}),g.jsx("button",{className:`modal-gnr-tab ${r==="sinPuntos"?"active":""}`,onClick:()=>i("sinPuntos"),children:"Sin Puntos"})]})]})})};iw.propTypes={jugadores:$.arrayOf($.shape({id:$.string.isRequired,name:$.string.isRequired,points:$.number.isRequired,photoURL:$.string.isRequired})).isRequired,onClose:$.func.isRequired,genero:$.string.isRequired};const fO=()=>{const{jugadores:t}=S.useContext(wr),[e,n]=S.useState(!1),[r,i]=S.useState([]),[s,o]=S.useState(""),a=d=>t.filter(c=>c.gender===d),l=d=>{const c=a(d);i(c),o(d),n(!0)},u=()=>{n(!1),o("")};return g.jsxs("div",{className:"container-jugadores",children:[g.jsx("div",{className:"player-box male",onClick:()=>l("masculino"),children:g.jsx("h2",{children:"Jugadores Masculinos"})}),g.jsx("div",{className:"player-box female",onClick:()=>l("femenino"),children:g.jsx("h2",{children:"Jugadoras Femeninas"})}),e&&g.jsx(iw,{jugadores:r,onClose:u,genero:s})]})},sw=({club:t,onClose:e})=>t?g.jsx("div",{className:"modal-clubes-overlay",onClick:e,children:g.jsxs("div",{className:"modal-clubes-content",onClick:n=>n.stopPropagation(),children:[g.jsx("h3",{children:t.name}),g.jsxs("p",{children:[g.jsx(tw,{})," ",t.location]}),g.jsxs("p",{children:[g.jsx(nw,{})," ",g.jsx("a",{href:`tel:${t.phone}`,children:t.phone})]}),g.jsx("img",{src:t.logoURL,alt:"Logo del Club",className:"modal-clubes-logo"}),g.jsx("button",{className:"modal-clubes-close",onClick:e,children:"Cerrar"})]})}):null;sw.propTypes={club:$.shape({name:$.string.isRequired,location:$.string,phone:$.string,logoURL:$.string}),onClose:$.func.isRequired};const pO=()=>{const{clubes:t}=S.useContext(wr),[e,n]=S.useState([]),[r,i]=S.useState(null),[s,o]=S.useState(!1);S.useEffect(()=>{if(console.log("Datos de clubes recibidos:",t),t){const u=Array.isArray(t)?t:Object.values(t),d=u.filter(c=>c.logoURL).map(c=>({...c,logoURL:c.logoURL}));console.log("Clubes en el contexto:",u),console.log("Logos filtrados:",d),n(d)}else n([])},[t]);const a=u=>{i(u),o(!0)},l=()=>{o(!1),i(null)};return g.jsxs("div",{className:"carousel-container",children:[g.jsx("h1",{className:"title",children:"Canchas Belgranenses"}),g.jsx("div",{className:"carousel",children:g.jsx("div",{className:"carousel-inner",children:e.length>0?e.map((u,d)=>g.jsx("div",{className:"logo-circle",onClick:()=>a(e[d]),children:g.jsx("img",{src:u.logoURL,alt:`Logo ${d+1}`,onError:c=>{c.target.onerror=null,c.target.src="https://via.placeholder.com/150"}})},d)):g.jsx("p",{children:"No hay logos disponibles."})})}),s&&g.jsx(sw,{club:r,onClose:l})]})},Dh=({isOpen:t,onClose:e,participants:n})=>t?g.jsx("div",{className:"modal-overlay",children:g.jsxs("div",{className:"modal-content",children:[g.jsxs("div",{className:"modal-header",children:[g.jsx("h2",{children:"Ranking Completo"}),g.jsx("button",{className:"close-btn",onClick:e,children:"Cerrar"})]}),g.jsxs("table",{children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{children:"#"}),g.jsx("th",{children:"Nombre"}),g.jsx("th",{children:"Puntos"})]})}),g.jsx("tbody",{children:n.map(r=>g.jsxs("tr",{style:r.rank===1?{backgroundColor:"#5c5be5",color:"#fff",fontWeight:"bold"}:{},children:[g.jsx("td",{children:r.rank}),g.jsx("td",{children:r.name}),g.jsxs("td",{className:"points-cell",children:[r.points,r.rank===1&&g.jsx("img",{className:"gold-medal",src:"https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true",alt:"gold medal"})]})]},r.id))})]})]})}):null;Dh.propTypes={isOpen:$.bool.isRequired,onClose:$.func.isRequired,participants:$.arrayOf($.shape({id:$.number.isRequired,rank:$.number.isRequired,name:$.string.isRequired,points:$.string.isRequired})).isRequired};const Cm="/assets/tennis-rZAVwrir.ico",ow=({selectedCategory:t,onCategoryChange:e,categories:n})=>{const[r,i]=S.useState(!1),s=o=>{e(o),i(!1)};return g.jsxs("div",{className:`select-menu ${r?"active":""}`,children:[g.jsxs("div",{className:"select-btn",onClick:()=>i(!r),children:[g.jsx("img",{src:Cm,alt:"Tennis Icon",className:"select-icon"}),g.jsx("span",{className:"sBtn-text",children:t||"Selecciona una categoría"})]}),g.jsx("ul",{className:"options",children:n.map((o,a)=>g.jsxs("li",{className:"option",onClick:()=>s(o),children:[g.jsx("img",{src:Cm,alt:"Tennis Icon",className:"category-icon"}),g.jsx("span",{className:"option-text",children:o})]},a))})]})},mO=()=>{const{jugadores:t}=S.useContext(wr),[e,n]=S.useState(!1),[r,i]=S.useState("Septima"),o=(Array.isArray(t)?t:[]).filter(p=>p!=null),a=o.filter(p=>p.gender==="femenino").map(p=>p.category),l=[...new Set(a)],u=l.length>0,d=o.filter(p=>p.gender==="femenino"&&(r==="Selecciona una categoría"?p.category==="Septima":p.category===r)).sort((p,y)=>y.points-p.points).map((p,y)=>({...p,rank:y+1})),c=()=>n(!0),h=()=>n(!1),v=p=>i(p);return g.jsxs("div",{className:"ranking-column",children:[g.jsx("div",{id:"header",children:g.jsx("h1",{children:"Ranking Femenino"})}),g.jsxs("div",{className:"select-container",children:[g.jsx("div",{className:"arrow-bounce",children:g.jsx(ew,{color:"green",size:24})}),g.jsx(ow,{selectedCategory:r,onCategoryChange:v,categories:u?l:["No hay categorías disponibles"],placeholder:"Selecciona una categoría"})]}),g.jsxs("div",{id:"leaderboard",children:[g.jsx("div",{className:"ribbon"}),g.jsx("table",{children:g.jsx("tbody",{children:d.length>0?d.slice(0,5).map((p,y)=>g.jsxs("tr",{className:y===0?"highlight-row":"",children:[g.jsx("td",{className:"number",children:p.rank}),g.jsx("td",{className:"name",children:p.name}),g.jsxs("td",{className:"points",children:[p.points,y===0&&g.jsx("img",{className:"gold-medal",src:"https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true",alt:"gold medal"})]})]},p.id)):g.jsx("tr",{children:g.jsx("td",{colSpan:"3",children:"No hay jugadoras disponibles."})})})}),g.jsx("button",{className:"ver-mas-btn",onClick:c,children:"Ver más"})]}),g.jsx(Dh,{isOpen:e,onClose:h,participants:d})]})},gO=()=>{const{jugadores:t}=S.useContext(wr),[e,n]=S.useState(!1),[r,i]=S.useState("Septima"),o=(Array.isArray(t)?t:[]).filter(p=>p!=null),a=o.filter(p=>p.gender==="masculino").map(p=>p.category),l=[...new Set(a)],u=l.length>0,d=o.filter(p=>p.gender==="masculino"&&(r==="Selecciona una categoría"?p.category==="Septima":p.category===r)).sort((p,y)=>y.points-p.points).map((p,y)=>({...p,rank:y+1})),c=()=>n(!0),h=()=>n(!1),v=p=>i(p);return g.jsxs("div",{className:"ranking-column",children:[g.jsx("div",{id:"header",children:g.jsx("h1",{children:"Ranking Masculino"})}),g.jsxs("div",{className:"select-container",children:[g.jsx("div",{className:"arrow-bounce",children:g.jsx(ew,{color:"green",size:24})}),g.jsx(ow,{selectedCategory:r,onCategoryChange:v,categories:u?l:["No hay categorías disponibles"],placeholder:"Selecciona una categoría"})]}),g.jsxs("div",{id:"leaderboard",children:[g.jsx("div",{className:"ribbon"}),g.jsx("table",{children:g.jsx("tbody",{children:d.length>0?d.slice(0,5).map((p,y)=>g.jsxs("tr",{className:y===0?"highlight-row":"",children:[g.jsx("td",{className:"number",children:p.rank}),g.jsx("td",{className:"name",children:p.name}),g.jsxs("td",{className:"points",children:[p.points,y===0&&g.jsx("img",{className:"gold-medal",src:"https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true",alt:"gold medal"})]})]},p.id)):g.jsx("tr",{children:g.jsx("td",{colSpan:"3",children:"No hay jugadores disponibles."})})})}),g.jsx("button",{className:"ver-mas-btn",onClick:c,children:"Ver más"})]}),g.jsx(Dh,{isOpen:e,onClose:h,participants:d})]})},_O=()=>g.jsxs("div",{className:"ranking-container",children:[g.jsx(mO,{}),g.jsx(gO,{})]}),vO=()=>g.jsxs("div",{children:[g.jsx(Y_,{}),g.jsx(JA,{}),g.jsx("section",{id:"canchas",children:g.jsx(pO,{})}),g.jsx("section",{id:"torneos",children:g.jsx(hO,{})}),g.jsx("section",{id:"jugadores",children:g.jsx(fO,{})}),g.jsx("div",{className:"rankings-container",children:g.jsx("div",{className:"ranking-container",children:g.jsx("section",{id:"ranking",children:g.jsx(_O,{})})})})]}),yO=()=>{const t=q_(),e=new Rt,n=async()=>{try{const i=(await HP(K0,e)).user;console.log("User Info:",i),t("/admin")}catch(r){console.error("Error al iniciar sesión:",r.message)}};return g.jsxs("div",{className:"admin-login-container",children:[g.jsx("h1",{className:"admin-login-title",children:"Admin Login"}),g.jsxs("button",{className:"admin-login-button",onClick:n,children:[g.jsx(cO,{className:"admin-google-icon"}),g.jsx("span",{children:"Login with Google"})]})]})},wO="modulepreload",EO=function(t){return"/"+t},Im={},en=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.allSettled(n.map(a=>{if(a=EO(a),a in Im)return;Im[a]=!0;const l=a.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${u}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":wO,l||(d.as="script"),d.crossOrigin="",d.href=a,o&&d.setAttribute("nonce",o),document.head.appendChild(d),l)return new Promise((c,h)=>{d.addEventListener("load",c),d.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${a}`)))})}))}return i.then(s=>{for(const o of s||[]){if(o.status!=="rejected")continue;const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o.reason,window.dispatchEvent(a),!a.defaultPrevented)throw o.reason}return e()})},SO=S.lazy(()=>en(()=>import("./CargarBannerButton-D1F6uNve.js"),__vite__mapDeps([0,1]))),CO=S.lazy(()=>en(()=>import("./AgendaTorneoButton-BUG596JW.js"),__vite__mapDeps([2,3]))),IO=S.lazy(()=>en(()=>import("./AgregarJugadorButton-CKN-P0xn.js"),__vite__mapDeps([4,5]))),TO=S.lazy(()=>en(()=>import("./AgregarClubButton-CL2vujON.js"),__vite__mapDeps([6,7]))),kO=S.lazy(()=>en(()=>import("./BannerModal-Bgmyfq8N.js"),__vite__mapDeps([8,9]))),RO=S.lazy(()=>en(()=>import("./AgendaTorneoModal-DcEJ_RKk.js"),__vite__mapDeps([10,11]))),NO=S.lazy(()=>en(()=>import("./AgregarJugadorModal-YGqom93x.js"),__vite__mapDeps([12,13]))),PO=S.lazy(()=>en(()=>import("./AgregarClubModal-BwcJCqZK.js"),__vite__mapDeps([14,15]))),xO=S.lazy(()=>en(()=>import("./PlayerTable-B-zsJdUi.js"),__vite__mapDeps([16,17]))),AO=()=>{const t=q_(),[e,n]=S.useState(!1),[r,i]=S.useState(!1),[s,o]=S.useState(!1),[a,l]=S.useState(!1);S.useEffect(()=>{const m=K0.onAuthStateChanged(f=>{f||t("/admin-login")});return()=>m()},[t]);const u=()=>n(!0),d=()=>n(!1),c=()=>i(!0),h=()=>i(!1),v=()=>o(!0),p=()=>o(!1),y=()=>l(!0),E=()=>l(!1);return g.jsxs("div",{children:[g.jsx("h1",{children:"Admin Panel"}),g.jsxs("div",{className:"admin-panel-buttons",children:[g.jsx(S.Suspense,{fallback:g.jsx("div",{children:"Loading CargaBannerButton..."}),children:g.jsx(SO,{onClick:u})}),g.jsx(S.Suspense,{fallback:g.jsx("div",{children:"Loading AgendaTorneoButton..."}),children:g.jsx(CO,{onClick:c})}),g.jsx(S.Suspense,{fallback:g.jsx("div",{children:"Loading AgregarJugadorButton..."}),children:g.jsx(IO,{onClick:v})}),g.jsx(S.Suspense,{fallback:g.jsx("div",{children:"Loading AgregarClubButton..."}),children:g.jsx(TO,{onClick:y})})]}),g.jsx(S.Suspense,{fallback:g.jsx("div",{children:"Loading BannerModal..."}),children:e&&g.jsx(kO,{onClose:d})}),g.jsx(S.Suspense,{fallback:g.jsx("div",{children:"Loading AgendaTorneoModal..."}),children:r&&g.jsx(RO,{onClose:h})}),g.jsx(S.Suspense,{fallback:g.jsx("div",{children:"Loading AgregarJugadorModal..."}),children:s&&g.jsx(NO,{onClose:p})}),g.jsx(S.Suspense,{fallback:g.jsx("div",{children:"Loading AgregarClubModal..."}),children:a&&g.jsx(PO,{onClose:E})}),g.jsx(S.Suspense,{fallback:g.jsx("div",{children:"Loading PlayerTable..."}),children:g.jsx(xO,{})})]})},OO=()=>g.jsx(YA,{children:g.jsxs(RS,{children:[g.jsx(Y_,{}),g.jsxs(IS,{children:[g.jsx(Ao,{path:"/",element:g.jsx(vO,{})}),g.jsx(Ao,{path:"/admin-login",element:g.jsx(yO,{})}),g.jsx(Ao,{path:"/admin",element:g.jsx(AO,{})})]})]})});U_(document.getElementById("root")).render(g.jsx(S.StrictMode,{children:g.jsx(OO,{})}));export{wr as A,VO as F,$ as P,FO as a,Cr as b,oR as c,Ir as d,Ay as e,Tm as f,MO as g,BO as h,zO as i,g as j,$O as k,WO as l,jO as m,HO as n,DO as o,bO as p,sR as q,S as r,UO as s,LO as u};
