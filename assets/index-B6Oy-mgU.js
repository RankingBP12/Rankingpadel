const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/PopupInicio-CpBVvWMz.js","assets/PopupInicio-BjE_NvpB.css","assets/CargarBannerButton-Tc5Ic1oR.js","assets/CargarBannerButton-D_Zn8y1v.css","assets/AgendaTorneoButton-BNDp81p5.js","assets/AgendaTorneoButton-BiKADMRM.css","assets/AgregarJugadorButton-D741J6Ca.js","assets/AgregarJugadorButton-BYSvOtnj.css","assets/AgregarClubButton-Cxvs8MUg.js","assets/AgregarClubButton-BODDAt3a.css","assets/BannerModal-Cw_fxU7o.js","assets/BannerModal-C8_v_Q7y.css","assets/AgendaTorneoModal-BbtHBDPn.js","assets/AgendaTorneoModal-BgQ-TdnX.css","assets/AgregarJugadorModal-B2d_iuqf.js","assets/nombre-BYGSWZGL.js","assets/AgregarJugadorModal-D_8F9ZJf.css","assets/AgregarClubModal-BSmg4GHl.js","assets/AgregarClubModal-DSNttflx.css","assets/PlayerTable-BStHVNUV.js","assets/PlayerTable-nM8KOFTZ.css"])))=>i.map(i=>d[i]);
function yw(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Uc(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Dm={exports:{}},Ba={},Mm={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ws=Symbol.for("react.element"),ww=Symbol.for("react.portal"),Ew=Symbol.for("react.fragment"),Sw=Symbol.for("react.strict_mode"),Cw=Symbol.for("react.profiler"),Iw=Symbol.for("react.provider"),Tw=Symbol.for("react.context"),kw=Symbol.for("react.forward_ref"),Rw=Symbol.for("react.suspense"),Nw=Symbol.for("react.memo"),Pw=Symbol.for("react.lazy"),Hh=Symbol.iterator;function xw(t){return t===null||typeof t!="object"?null:(t=Hh&&t[Hh]||t["@@iterator"],typeof t=="function"?t:null)}var jm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fm=Object.assign,Um={};function yi(t,e,n){this.props=t,this.context=e,this.refs=Um,this.updater=n||jm}yi.prototype.isReactComponent={};yi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};yi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function zm(){}zm.prototype=yi.prototype;function zc(t,e,n){this.props=t,this.context=e,this.refs=Um,this.updater=n||jm}var Bc=zc.prototype=new zm;Bc.constructor=zc;Fm(Bc,yi.prototype);Bc.isPureReactComponent=!0;var Gh=Array.isArray,Bm=Object.prototype.hasOwnProperty,Wc={current:null},Wm={key:!0,ref:!0,__self:!0,__source:!0};function $m(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Bm.call(e,r)&&!Wm.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ws,type:t,key:s,ref:o,props:i,_owner:Wc.current}}function Aw(t,e){return{$$typeof:Ws,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $c(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ws}function bw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var qh=/\/+/g;function Pl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?bw(""+t.key):e.toString(36)}function ko(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ws:case ww:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Pl(o,0):r,Gh(i)?(n="",t!=null&&(n=t.replace(qh,"$&/")+"/"),ko(i,e,n,"",function(u){return u})):i!=null&&($c(i)&&(i=Aw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(qh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Gh(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Pl(s,a);o+=ko(s,e,n,l,i)}else if(l=xw(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Pl(s,a++),o+=ko(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ro(t,e,n){if(t==null)return t;var r=[],i=0;return ko(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Ow(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var We={current:null},Ro={transition:null},Lw={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:Ro,ReactCurrentOwner:Wc};function Vm(){throw Error("act(...) is not supported in production builds of React.")}G.Children={map:ro,forEach:function(t,e,n){ro(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ro(t,function(){e++}),e},toArray:function(t){return ro(t,function(e){return e})||[]},only:function(t){if(!$c(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};G.Component=yi;G.Fragment=Ew;G.Profiler=Cw;G.PureComponent=zc;G.StrictMode=Sw;G.Suspense=Rw;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lw;G.act=Vm;G.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Fm({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Wc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Bm.call(e,l)&&!Wm.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ws,type:t.type,key:i,ref:s,props:r,_owner:o}};G.createContext=function(t){return t={$$typeof:Tw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Iw,_context:t},t.Consumer=t};G.createElement=$m;G.createFactory=function(t){var e=$m.bind(null,t);return e.type=t,e};G.createRef=function(){return{current:null}};G.forwardRef=function(t){return{$$typeof:kw,render:t}};G.isValidElement=$c;G.lazy=function(t){return{$$typeof:Pw,_payload:{_status:-1,_result:t},_init:Ow}};G.memo=function(t,e){return{$$typeof:Nw,type:t,compare:e===void 0?null:e}};G.startTransition=function(t){var e=Ro.transition;Ro.transition={};try{t()}finally{Ro.transition=e}};G.unstable_act=Vm;G.useCallback=function(t,e){return We.current.useCallback(t,e)};G.useContext=function(t){return We.current.useContext(t)};G.useDebugValue=function(){};G.useDeferredValue=function(t){return We.current.useDeferredValue(t)};G.useEffect=function(t,e){return We.current.useEffect(t,e)};G.useId=function(){return We.current.useId()};G.useImperativeHandle=function(t,e,n){return We.current.useImperativeHandle(t,e,n)};G.useInsertionEffect=function(t,e){return We.current.useInsertionEffect(t,e)};G.useLayoutEffect=function(t,e){return We.current.useLayoutEffect(t,e)};G.useMemo=function(t,e){return We.current.useMemo(t,e)};G.useReducer=function(t,e,n){return We.current.useReducer(t,e,n)};G.useRef=function(t){return We.current.useRef(t)};G.useState=function(t){return We.current.useState(t)};G.useSyncExternalStore=function(t,e,n){return We.current.useSyncExternalStore(t,e,n)};G.useTransition=function(){return We.current.useTransition()};G.version="18.3.1";Mm.exports=G;var w=Mm.exports;const en=Uc(w),Dw=yw({__proto__:null,default:en},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mw=w,jw=Symbol.for("react.element"),Fw=Symbol.for("react.fragment"),Uw=Object.prototype.hasOwnProperty,zw=Mw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bw={key:!0,ref:!0,__self:!0,__source:!0};function Hm(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Uw.call(e,r)&&!Bw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:jw,type:t,key:s,ref:o,props:i,_owner:zw.current}}Ba.Fragment=Fw;Ba.jsx=Hm;Ba.jsxs=Hm;Dm.exports=Ba;var f=Dm.exports,Gm={exports:{}},at={},qm={exports:{}},Km={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(S,R){var M=S.length;S.push(R);e:for(;0<M;){var B=M-1>>>1,V=S[B];if(0<i(V,R))S[B]=R,S[M]=V,M=B;else break e}}function n(S){return S.length===0?null:S[0]}function r(S){if(S.length===0)return null;var R=S[0],M=S.pop();if(M!==R){S[0]=M;e:for(var B=0,V=S.length,ue=V>>>1;B<ue;){var se=2*(B+1)-1,br=S[se],bt=se+1,Vt=S[bt];if(0>i(br,M))bt<V&&0>i(Vt,br)?(S[B]=Vt,S[bt]=M,B=bt):(S[B]=br,S[se]=M,B=se);else if(bt<V&&0>i(Vt,M))S[B]=Vt,S[bt]=M,B=bt;else break e}}return R}function i(S,R){var M=S.sortIndex-R.sortIndex;return M!==0?M:S.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,c=null,h=3,g=!1,m=!1,y=!1,I=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(S){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=S)r(u),R.sortIndex=R.expirationTime,e(l,R);else break;R=n(u)}}function E(S){if(y=!1,v(S),!m)if(n(l)!==null)m=!0,T(A);else{var R=n(u);R!==null&&k(E,R.startTime-S)}}function A(S,R){m=!1,y&&(y=!1,_(L),L=-1),g=!0;var M=h;try{for(v(R),c=n(l);c!==null&&(!(c.expirationTime>R)||S&&!et());){var B=c.callback;if(typeof B=="function"){c.callback=null,h=c.priorityLevel;var V=B(c.expirationTime<=R);R=t.unstable_now(),typeof V=="function"?c.callback=V:c===n(l)&&r(l),v(R)}else r(l);c=n(l)}if(c!==null)var ue=!0;else{var se=n(u);se!==null&&k(E,se.startTime-R),ue=!1}return ue}finally{c=null,h=M,g=!1}}var O=!1,b=null,L=-1,F=5,z=-1;function et(){return!(t.unstable_now()-z<F)}function fn(){if(b!==null){var S=t.unstable_now();z=S;var R=!0;try{R=b(!0,S)}finally{R?Qn():(O=!1,b=null)}}else O=!1}var Qn;if(typeof p=="function")Qn=function(){p(fn)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,C=P.port2;P.port1.onmessage=fn,Qn=function(){C.postMessage(null)}}else Qn=function(){I(fn,0)};function T(S){b=S,O||(O=!0,Qn())}function k(S,R){L=I(function(){S(t.unstable_now())},R)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(S){S.callback=null},t.unstable_continueExecution=function(){m||g||(m=!0,T(A))},t.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<S?Math.floor(1e3/S):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(S){switch(h){case 1:case 2:case 3:var R=3;break;default:R=h}var M=h;h=R;try{return S()}finally{h=M}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(S,R){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var M=h;h=S;try{return R()}finally{h=M}},t.unstable_scheduleCallback=function(S,R,M){var B=t.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?B+M:B):M=B,S){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=M+V,S={id:d++,callback:R,priorityLevel:S,startTime:M,expirationTime:V,sortIndex:-1},M>B?(S.sortIndex=M,e(u,S),n(l)===null&&S===n(u)&&(y?(_(L),L=-1):y=!0,k(E,M-B))):(S.sortIndex=V,e(l,S),m||g||(m=!0,T(A))),S},t.unstable_shouldYield=et,t.unstable_wrapCallback=function(S){var R=h;return function(){var M=h;h=R;try{return S.apply(this,arguments)}finally{h=M}}}})(Km);qm.exports=Km;var Ww=qm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $w=w,ot=Ww;function N(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qm=new Set,us={};function Ir(t,e){si(t,e),si(t+"Capture",e)}function si(t,e){for(us[t]=e,t=0;t<e.length;t++)Qm.add(e[t])}var rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eu=Object.prototype.hasOwnProperty,Vw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Kh={},Qh={};function Hw(t){return Eu.call(Qh,t)?!0:Eu.call(Kh,t)?!1:Vw.test(t)?Qh[t]=!0:(Kh[t]=!0,!1)}function Gw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function qw(t,e,n,r){if(e===null||typeof e>"u"||Gw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $e(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){xe[t]=new $e(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];xe[e]=new $e(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){xe[t]=new $e(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){xe[t]=new $e(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){xe[t]=new $e(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){xe[t]=new $e(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){xe[t]=new $e(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){xe[t]=new $e(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){xe[t]=new $e(t,5,!1,t.toLowerCase(),null,!1,!1)});var Vc=/[\-:]([a-z])/g;function Hc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Vc,Hc);xe[e]=new $e(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Vc,Hc);xe[e]=new $e(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Vc,Hc);xe[e]=new $e(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){xe[t]=new $e(t,1,!1,t.toLowerCase(),null,!1,!1)});xe.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){xe[t]=new $e(t,1,!1,t.toLowerCase(),null,!0,!0)});function Gc(t,e,n,r){var i=xe.hasOwnProperty(e)?xe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(qw(e,n,i,r)&&(n=null),r||i===null?Hw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var dn=$w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,io=Symbol.for("react.element"),Dr=Symbol.for("react.portal"),Mr=Symbol.for("react.fragment"),qc=Symbol.for("react.strict_mode"),Su=Symbol.for("react.profiler"),Ym=Symbol.for("react.provider"),Jm=Symbol.for("react.context"),Kc=Symbol.for("react.forward_ref"),Cu=Symbol.for("react.suspense"),Iu=Symbol.for("react.suspense_list"),Qc=Symbol.for("react.memo"),gn=Symbol.for("react.lazy"),Xm=Symbol.for("react.offscreen"),Yh=Symbol.iterator;function Pi(t){return t===null||typeof t!="object"?null:(t=Yh&&t[Yh]||t["@@iterator"],typeof t=="function"?t:null)}var le=Object.assign,xl;function Wi(t){if(xl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);xl=e&&e[1]||""}return`
`+xl+t}var Al=!1;function bl(t,e){if(!t||Al)return"";Al=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Al=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Wi(t):""}function Kw(t){switch(t.tag){case 5:return Wi(t.type);case 16:return Wi("Lazy");case 13:return Wi("Suspense");case 19:return Wi("SuspenseList");case 0:case 2:case 15:return t=bl(t.type,!1),t;case 11:return t=bl(t.type.render,!1),t;case 1:return t=bl(t.type,!0),t;default:return""}}function Tu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Mr:return"Fragment";case Dr:return"Portal";case Su:return"Profiler";case qc:return"StrictMode";case Cu:return"Suspense";case Iu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Jm:return(t.displayName||"Context")+".Consumer";case Ym:return(t._context.displayName||"Context")+".Provider";case Kc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qc:return e=t.displayName||null,e!==null?e:Tu(t.type)||"Memo";case gn:e=t._payload,t=t._init;try{return Tu(t(e))}catch{}}return null}function Qw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tu(e);case 8:return e===qc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function zn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Yw(t){var e=Zm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function so(t){t._valueTracker||(t._valueTracker=Yw(t))}function eg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Zm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Vo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ku(t,e){var n=e.checked;return le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Jh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=zn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function tg(t,e){e=e.checked,e!=null&&Gc(t,"checked",e,!1)}function Ru(t,e){tg(t,e);var n=zn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Nu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Nu(t,e.type,zn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Xh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Nu(t,e,n){(e!=="number"||Vo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var $i=Array.isArray;function Kr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+zn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Pu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(N(91));return le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Zh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(N(92));if($i(n)){if(1<n.length)throw Error(N(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:zn(n)}}function ng(t,e){var n=zn(e.value),r=zn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ef(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function rg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?rg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var oo,ig=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(oo=oo||document.createElement("div"),oo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=oo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function cs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Gi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jw=["Webkit","ms","Moz","O"];Object.keys(Gi).forEach(function(t){Jw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Gi[e]=Gi[t]})});function sg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Gi.hasOwnProperty(t)&&Gi[t]?(""+e).trim():e+"px"}function og(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=sg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Xw=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Au(t,e){if(e){if(Xw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(N(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(N(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(N(61))}if(e.style!=null&&typeof e.style!="object")throw Error(N(62))}}function bu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ou=null;function Yc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Lu=null,Qr=null,Yr=null;function tf(t){if(t=Hs(t)){if(typeof Lu!="function")throw Error(N(280));var e=t.stateNode;e&&(e=Ga(e),Lu(t.stateNode,t.type,e))}}function ag(t){Qr?Yr?Yr.push(t):Yr=[t]:Qr=t}function lg(){if(Qr){var t=Qr,e=Yr;if(Yr=Qr=null,tf(t),e)for(t=0;t<e.length;t++)tf(e[t])}}function ug(t,e){return t(e)}function cg(){}var Ol=!1;function dg(t,e,n){if(Ol)return t(e,n);Ol=!0;try{return ug(t,e,n)}finally{Ol=!1,(Qr!==null||Yr!==null)&&(cg(),lg())}}function ds(t,e){var n=t.stateNode;if(n===null)return null;var r=Ga(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(N(231,e,typeof n));return n}var Du=!1;if(rn)try{var xi={};Object.defineProperty(xi,"passive",{get:function(){Du=!0}}),window.addEventListener("test",xi,xi),window.removeEventListener("test",xi,xi)}catch{Du=!1}function Zw(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var qi=!1,Ho=null,Go=!1,Mu=null,eE={onError:function(t){qi=!0,Ho=t}};function tE(t,e,n,r,i,s,o,a,l){qi=!1,Ho=null,Zw.apply(eE,arguments)}function nE(t,e,n,r,i,s,o,a,l){if(tE.apply(this,arguments),qi){if(qi){var u=Ho;qi=!1,Ho=null}else throw Error(N(198));Go||(Go=!0,Mu=u)}}function Tr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function hg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function nf(t){if(Tr(t)!==t)throw Error(N(188))}function rE(t){var e=t.alternate;if(!e){if(e=Tr(t),e===null)throw Error(N(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return nf(i),t;if(s===r)return nf(i),e;s=s.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?t:e}function fg(t){return t=rE(t),t!==null?pg(t):null}function pg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=pg(t);if(e!==null)return e;t=t.sibling}return null}var mg=ot.unstable_scheduleCallback,rf=ot.unstable_cancelCallback,iE=ot.unstable_shouldYield,sE=ot.unstable_requestPaint,me=ot.unstable_now,oE=ot.unstable_getCurrentPriorityLevel,Jc=ot.unstable_ImmediatePriority,gg=ot.unstable_UserBlockingPriority,qo=ot.unstable_NormalPriority,aE=ot.unstable_LowPriority,_g=ot.unstable_IdlePriority,Wa=null,Ft=null;function lE(t){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(Wa,t,void 0,(t.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:dE,uE=Math.log,cE=Math.LN2;function dE(t){return t>>>=0,t===0?32:31-(uE(t)/cE|0)|0}var ao=64,lo=4194304;function Vi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ko(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Vi(a):(s&=o,s!==0&&(r=Vi(s)))}else o=n&~i,o!==0?r=Vi(o):s!==0&&(r=Vi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Tt(e),i=1<<n,r|=t[n],e&=~i;return r}function hE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Tt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=hE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ju(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function vg(){var t=ao;return ao<<=1,!(ao&4194240)&&(ao=64),t}function Ll(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function $s(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Tt(e),t[e]=n}function pE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Tt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Xc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Tt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Y=0;function yg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var wg,Zc,Eg,Sg,Cg,Fu=!1,uo=[],Nn=null,Pn=null,xn=null,hs=new Map,fs=new Map,vn=[],mE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sf(t,e){switch(t){case"focusin":case"focusout":Nn=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":hs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fs.delete(e.pointerId)}}function Ai(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Hs(e),e!==null&&Zc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function gE(t,e,n,r,i){switch(e){case"focusin":return Nn=Ai(Nn,t,e,n,r,i),!0;case"dragenter":return Pn=Ai(Pn,t,e,n,r,i),!0;case"mouseover":return xn=Ai(xn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return hs.set(s,Ai(hs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,fs.set(s,Ai(fs.get(s)||null,t,e,n,r,i)),!0}return!1}function Ig(t){var e=er(t.target);if(e!==null){var n=Tr(e);if(n!==null){if(e=n.tag,e===13){if(e=hg(n),e!==null){t.blockedOn=e,Cg(t.priority,function(){Eg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function No(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Uu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ou=r,n.target.dispatchEvent(r),Ou=null}else return e=Hs(n),e!==null&&Zc(e),t.blockedOn=n,!1;e.shift()}return!0}function of(t,e,n){No(t)&&n.delete(e)}function _E(){Fu=!1,Nn!==null&&No(Nn)&&(Nn=null),Pn!==null&&No(Pn)&&(Pn=null),xn!==null&&No(xn)&&(xn=null),hs.forEach(of),fs.forEach(of)}function bi(t,e){t.blockedOn===e&&(t.blockedOn=null,Fu||(Fu=!0,ot.unstable_scheduleCallback(ot.unstable_NormalPriority,_E)))}function ps(t){function e(i){return bi(i,t)}if(0<uo.length){bi(uo[0],t);for(var n=1;n<uo.length;n++){var r=uo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Nn!==null&&bi(Nn,t),Pn!==null&&bi(Pn,t),xn!==null&&bi(xn,t),hs.forEach(e),fs.forEach(e),n=0;n<vn.length;n++)r=vn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<vn.length&&(n=vn[0],n.blockedOn===null);)Ig(n),n.blockedOn===null&&vn.shift()}var Jr=dn.ReactCurrentBatchConfig,Qo=!0;function vE(t,e,n,r){var i=Y,s=Jr.transition;Jr.transition=null;try{Y=1,ed(t,e,n,r)}finally{Y=i,Jr.transition=s}}function yE(t,e,n,r){var i=Y,s=Jr.transition;Jr.transition=null;try{Y=4,ed(t,e,n,r)}finally{Y=i,Jr.transition=s}}function ed(t,e,n,r){if(Qo){var i=Uu(t,e,n,r);if(i===null)Vl(t,e,r,Yo,n),sf(t,r);else if(gE(i,t,e,n,r))r.stopPropagation();else if(sf(t,r),e&4&&-1<mE.indexOf(t)){for(;i!==null;){var s=Hs(i);if(s!==null&&wg(s),s=Uu(t,e,n,r),s===null&&Vl(t,e,r,Yo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Vl(t,e,r,null,n)}}var Yo=null;function Uu(t,e,n,r){if(Yo=null,t=Yc(r),t=er(t),t!==null)if(e=Tr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=hg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Yo=t,null}function Tg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(oE()){case Jc:return 1;case gg:return 4;case qo:case aE:return 16;case _g:return 536870912;default:return 16}default:return 16}}var In=null,td=null,Po=null;function kg(){if(Po)return Po;var t,e=td,n=e.length,r,i="value"in In?In.value:In.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Po=i.slice(t,1<r?1-r:void 0)}function xo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function co(){return!0}function af(){return!1}function lt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?co:af,this.isPropagationStopped=af,this}return le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=co)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=co)},persist:function(){},isPersistent:co}),e}var wi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nd=lt(wi),Vs=le({},wi,{view:0,detail:0}),wE=lt(Vs),Dl,Ml,Oi,$a=le({},Vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Oi&&(Oi&&t.type==="mousemove"?(Dl=t.screenX-Oi.screenX,Ml=t.screenY-Oi.screenY):Ml=Dl=0,Oi=t),Dl)},movementY:function(t){return"movementY"in t?t.movementY:Ml}}),lf=lt($a),EE=le({},$a,{dataTransfer:0}),SE=lt(EE),CE=le({},Vs,{relatedTarget:0}),jl=lt(CE),IE=le({},wi,{animationName:0,elapsedTime:0,pseudoElement:0}),TE=lt(IE),kE=le({},wi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),RE=lt(kE),NE=le({},wi,{data:0}),uf=lt(NE),PE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},AE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=AE[t])?!!e[t]:!1}function rd(){return bE}var OE=le({},Vs,{key:function(t){if(t.key){var e=PE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rd,charCode:function(t){return t.type==="keypress"?xo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),LE=lt(OE),DE=le({},$a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cf=lt(DE),ME=le({},Vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rd}),jE=lt(ME),FE=le({},wi,{propertyName:0,elapsedTime:0,pseudoElement:0}),UE=lt(FE),zE=le({},$a,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),BE=lt(zE),WE=[9,13,27,32],id=rn&&"CompositionEvent"in window,Ki=null;rn&&"documentMode"in document&&(Ki=document.documentMode);var $E=rn&&"TextEvent"in window&&!Ki,Rg=rn&&(!id||Ki&&8<Ki&&11>=Ki),df=" ",hf=!1;function Ng(t,e){switch(t){case"keyup":return WE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var jr=!1;function VE(t,e){switch(t){case"compositionend":return Pg(e);case"keypress":return e.which!==32?null:(hf=!0,df);case"textInput":return t=e.data,t===df&&hf?null:t;default:return null}}function HE(t,e){if(jr)return t==="compositionend"||!id&&Ng(t,e)?(t=kg(),Po=td=In=null,jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Rg&&e.locale!=="ko"?null:e.data;default:return null}}var GE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ff(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!GE[t.type]:e==="textarea"}function xg(t,e,n,r){ag(r),e=Jo(e,"onChange"),0<e.length&&(n=new nd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Qi=null,ms=null;function qE(t){Bg(t,0)}function Va(t){var e=zr(t);if(eg(e))return t}function KE(t,e){if(t==="change")return e}var Ag=!1;if(rn){var Fl;if(rn){var Ul="oninput"in document;if(!Ul){var pf=document.createElement("div");pf.setAttribute("oninput","return;"),Ul=typeof pf.oninput=="function"}Fl=Ul}else Fl=!1;Ag=Fl&&(!document.documentMode||9<document.documentMode)}function mf(){Qi&&(Qi.detachEvent("onpropertychange",bg),ms=Qi=null)}function bg(t){if(t.propertyName==="value"&&Va(ms)){var e=[];xg(e,ms,t,Yc(t)),dg(qE,e)}}function QE(t,e,n){t==="focusin"?(mf(),Qi=e,ms=n,Qi.attachEvent("onpropertychange",bg)):t==="focusout"&&mf()}function YE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Va(ms)}function JE(t,e){if(t==="click")return Va(e)}function XE(t,e){if(t==="input"||t==="change")return Va(e)}function ZE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Pt=typeof Object.is=="function"?Object.is:ZE;function gs(t,e){if(Pt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Eu.call(e,i)||!Pt(t[i],e[i]))return!1}return!0}function gf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _f(t,e){var n=gf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gf(n)}}function Og(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Og(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Lg(){for(var t=window,e=Vo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Vo(t.document)}return e}function sd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function eS(t){var e=Lg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Og(n.ownerDocument.documentElement,n)){if(r!==null&&sd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=_f(n,s);var o=_f(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var tS=rn&&"documentMode"in document&&11>=document.documentMode,Fr=null,zu=null,Yi=null,Bu=!1;function vf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bu||Fr==null||Fr!==Vo(r)||(r=Fr,"selectionStart"in r&&sd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yi&&gs(Yi,r)||(Yi=r,r=Jo(zu,"onSelect"),0<r.length&&(e=new nd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Fr)))}function ho(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ur={animationend:ho("Animation","AnimationEnd"),animationiteration:ho("Animation","AnimationIteration"),animationstart:ho("Animation","AnimationStart"),transitionend:ho("Transition","TransitionEnd")},zl={},Dg={};rn&&(Dg=document.createElement("div").style,"AnimationEvent"in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),"TransitionEvent"in window||delete Ur.transitionend.transition);function Ha(t){if(zl[t])return zl[t];if(!Ur[t])return t;var e=Ur[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Dg)return zl[t]=e[n];return t}var Mg=Ha("animationend"),jg=Ha("animationiteration"),Fg=Ha("animationstart"),Ug=Ha("transitionend"),zg=new Map,yf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hn(t,e){zg.set(t,e),Ir(e,[t])}for(var Bl=0;Bl<yf.length;Bl++){var Wl=yf[Bl],nS=Wl.toLowerCase(),rS=Wl[0].toUpperCase()+Wl.slice(1);Hn(nS,"on"+rS)}Hn(Mg,"onAnimationEnd");Hn(jg,"onAnimationIteration");Hn(Fg,"onAnimationStart");Hn("dblclick","onDoubleClick");Hn("focusin","onFocus");Hn("focusout","onBlur");Hn(Ug,"onTransitionEnd");si("onMouseEnter",["mouseout","mouseover"]);si("onMouseLeave",["mouseout","mouseover"]);si("onPointerEnter",["pointerout","pointerover"]);si("onPointerLeave",["pointerout","pointerover"]);Ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hi));function wf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,nE(r,e,void 0,t),t.currentTarget=null}function Bg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;wf(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;wf(i,a,u),s=l}}}if(Go)throw t=Mu,Go=!1,Mu=null,t}function ne(t,e){var n=e[Gu];n===void 0&&(n=e[Gu]=new Set);var r=t+"__bubble";n.has(r)||(Wg(e,t,2,!1),n.add(r))}function $l(t,e,n){var r=0;e&&(r|=4),Wg(n,t,r,e)}var fo="_reactListening"+Math.random().toString(36).slice(2);function _s(t){if(!t[fo]){t[fo]=!0,Qm.forEach(function(n){n!=="selectionchange"&&(iS.has(n)||$l(n,!1,t),$l(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fo]||(e[fo]=!0,$l("selectionchange",!1,e))}}function Wg(t,e,n,r){switch(Tg(e)){case 1:var i=vE;break;case 4:i=yE;break;default:i=ed}n=i.bind(null,e,n,t),i=void 0,!Du||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Vl(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=er(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}dg(function(){var u=s,d=Yc(n),c=[];e:{var h=zg.get(t);if(h!==void 0){var g=nd,m=t;switch(t){case"keypress":if(xo(n)===0)break e;case"keydown":case"keyup":g=LE;break;case"focusin":m="focus",g=jl;break;case"focusout":m="blur",g=jl;break;case"beforeblur":case"afterblur":g=jl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=lf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=SE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=jE;break;case Mg:case jg:case Fg:g=TE;break;case Ug:g=UE;break;case"scroll":g=wE;break;case"wheel":g=BE;break;case"copy":case"cut":case"paste":g=RE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=cf}var y=(e&4)!==0,I=!y&&t==="scroll",_=y?h!==null?h+"Capture":null:h;y=[];for(var p=u,v;p!==null;){v=p;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,_!==null&&(E=ds(p,_),E!=null&&y.push(vs(p,E,v)))),I)break;p=p.return}0<y.length&&(h=new g(h,m,null,n,d),c.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==Ou&&(m=n.relatedTarget||n.fromElement)&&(er(m)||m[sn]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(m=n.relatedTarget||n.toElement,g=u,m=m?er(m):null,m!==null&&(I=Tr(m),m!==I||m.tag!==5&&m.tag!==6)&&(m=null)):(g=null,m=u),g!==m)){if(y=lf,E="onMouseLeave",_="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=cf,E="onPointerLeave",_="onPointerEnter",p="pointer"),I=g==null?h:zr(g),v=m==null?h:zr(m),h=new y(E,p+"leave",g,n,d),h.target=I,h.relatedTarget=v,E=null,er(d)===u&&(y=new y(_,p+"enter",m,n,d),y.target=v,y.relatedTarget=I,E=y),I=E,g&&m)t:{for(y=g,_=m,p=0,v=y;v;v=Or(v))p++;for(v=0,E=_;E;E=Or(E))v++;for(;0<p-v;)y=Or(y),p--;for(;0<v-p;)_=Or(_),v--;for(;p--;){if(y===_||_!==null&&y===_.alternate)break t;y=Or(y),_=Or(_)}y=null}else y=null;g!==null&&Ef(c,h,g,y,!1),m!==null&&I!==null&&Ef(c,I,m,y,!0)}}e:{if(h=u?zr(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var A=KE;else if(ff(h))if(Ag)A=XE;else{A=YE;var O=QE}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(A=JE);if(A&&(A=A(t,u))){xg(c,A,n,d);break e}O&&O(t,h,u),t==="focusout"&&(O=h._wrapperState)&&O.controlled&&h.type==="number"&&Nu(h,"number",h.value)}switch(O=u?zr(u):window,t){case"focusin":(ff(O)||O.contentEditable==="true")&&(Fr=O,zu=u,Yi=null);break;case"focusout":Yi=zu=Fr=null;break;case"mousedown":Bu=!0;break;case"contextmenu":case"mouseup":case"dragend":Bu=!1,vf(c,n,d);break;case"selectionchange":if(tS)break;case"keydown":case"keyup":vf(c,n,d)}var b;if(id)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else jr?Ng(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Rg&&n.locale!=="ko"&&(jr||L!=="onCompositionStart"?L==="onCompositionEnd"&&jr&&(b=kg()):(In=d,td="value"in In?In.value:In.textContent,jr=!0)),O=Jo(u,L),0<O.length&&(L=new uf(L,t,null,n,d),c.push({event:L,listeners:O}),b?L.data=b:(b=Pg(n),b!==null&&(L.data=b)))),(b=$E?VE(t,n):HE(t,n))&&(u=Jo(u,"onBeforeInput"),0<u.length&&(d=new uf("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=b))}Bg(c,e)})}function vs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Jo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ds(t,n),s!=null&&r.unshift(vs(t,s,i)),s=ds(t,e),s!=null&&r.push(vs(t,s,i))),t=t.return}return r}function Or(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ef(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ds(n,s),l!=null&&o.unshift(vs(n,l,a))):i||(l=ds(n,s),l!=null&&o.push(vs(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var sS=/\r\n?/g,oS=/\u0000|\uFFFD/g;function Sf(t){return(typeof t=="string"?t:""+t).replace(sS,`
`).replace(oS,"")}function po(t,e,n){if(e=Sf(e),Sf(t)!==e&&n)throw Error(N(425))}function Xo(){}var Wu=null,$u=null;function Vu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hu=typeof setTimeout=="function"?setTimeout:void 0,aS=typeof clearTimeout=="function"?clearTimeout:void 0,Cf=typeof Promise=="function"?Promise:void 0,lS=typeof queueMicrotask=="function"?queueMicrotask:typeof Cf<"u"?function(t){return Cf.resolve(null).then(t).catch(uS)}:Hu;function uS(t){setTimeout(function(){throw t})}function Hl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ps(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ps(e)}function An(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function If(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ei=Math.random().toString(36).slice(2),Dt="__reactFiber$"+Ei,ys="__reactProps$"+Ei,sn="__reactContainer$"+Ei,Gu="__reactEvents$"+Ei,cS="__reactListeners$"+Ei,dS="__reactHandles$"+Ei;function er(t){var e=t[Dt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[sn]||n[Dt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=If(t);t!==null;){if(n=t[Dt])return n;t=If(t)}return e}t=n,n=t.parentNode}return null}function Hs(t){return t=t[Dt]||t[sn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function zr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(N(33))}function Ga(t){return t[ys]||null}var qu=[],Br=-1;function Gn(t){return{current:t}}function re(t){0>Br||(t.current=qu[Br],qu[Br]=null,Br--)}function te(t,e){Br++,qu[Br]=t.current,t.current=e}var Bn={},De=Gn(Bn),Qe=Gn(!1),dr=Bn;function oi(t,e){var n=t.type.contextTypes;if(!n)return Bn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ye(t){return t=t.childContextTypes,t!=null}function Zo(){re(Qe),re(De)}function Tf(t,e,n){if(De.current!==Bn)throw Error(N(168));te(De,e),te(Qe,n)}function $g(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(N(108,Qw(t)||"Unknown",i));return le({},n,r)}function ea(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Bn,dr=De.current,te(De,t),te(Qe,Qe.current),!0}function kf(t,e,n){var r=t.stateNode;if(!r)throw Error(N(169));n?(t=$g(t,e,dr),r.__reactInternalMemoizedMergedChildContext=t,re(Qe),re(De),te(De,t)):re(Qe),te(Qe,n)}var Gt=null,qa=!1,Gl=!1;function Vg(t){Gt===null?Gt=[t]:Gt.push(t)}function hS(t){qa=!0,Vg(t)}function qn(){if(!Gl&&Gt!==null){Gl=!0;var t=0,e=Y;try{var n=Gt;for(Y=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Gt=null,qa=!1}catch(i){throw Gt!==null&&(Gt=Gt.slice(t+1)),mg(Jc,qn),i}finally{Y=e,Gl=!1}}return null}var Wr=[],$r=0,ta=null,na=0,ut=[],ct=0,hr=null,qt=1,Kt="";function Yn(t,e){Wr[$r++]=na,Wr[$r++]=ta,ta=t,na=e}function Hg(t,e,n){ut[ct++]=qt,ut[ct++]=Kt,ut[ct++]=hr,hr=t;var r=qt;t=Kt;var i=32-Tt(r)-1;r&=~(1<<i),n+=1;var s=32-Tt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,qt=1<<32-Tt(e)+i|n<<i|r,Kt=s+t}else qt=1<<s|n<<i|r,Kt=t}function od(t){t.return!==null&&(Yn(t,1),Hg(t,1,0))}function ad(t){for(;t===ta;)ta=Wr[--$r],Wr[$r]=null,na=Wr[--$r],Wr[$r]=null;for(;t===hr;)hr=ut[--ct],ut[ct]=null,Kt=ut[--ct],ut[ct]=null,qt=ut[--ct],ut[ct]=null}var it=null,nt=null,ie=!1,St=null;function Gg(t,e){var n=dt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Rf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,it=t,nt=An(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,it=t,nt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=hr!==null?{id:qt,overflow:Kt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=dt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,it=t,nt=null,!0):!1;default:return!1}}function Ku(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qu(t){if(ie){var e=nt;if(e){var n=e;if(!Rf(t,e)){if(Ku(t))throw Error(N(418));e=An(n.nextSibling);var r=it;e&&Rf(t,e)?Gg(r,n):(t.flags=t.flags&-4097|2,ie=!1,it=t)}}else{if(Ku(t))throw Error(N(418));t.flags=t.flags&-4097|2,ie=!1,it=t}}}function Nf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;it=t}function mo(t){if(t!==it)return!1;if(!ie)return Nf(t),ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Vu(t.type,t.memoizedProps)),e&&(e=nt)){if(Ku(t))throw qg(),Error(N(418));for(;e;)Gg(t,e),e=An(e.nextSibling)}if(Nf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(N(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){nt=An(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}nt=null}}else nt=it?An(t.stateNode.nextSibling):null;return!0}function qg(){for(var t=nt;t;)t=An(t.nextSibling)}function ai(){nt=it=null,ie=!1}function ld(t){St===null?St=[t]:St.push(t)}var fS=dn.ReactCurrentBatchConfig;function Li(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,t))}return t}function go(t,e){throw t=Object.prototype.toString.call(e),Error(N(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Pf(t){var e=t._init;return e(t._payload)}function Kg(t){function e(_,p){if(t){var v=_.deletions;v===null?(_.deletions=[p],_.flags|=16):v.push(p)}}function n(_,p){if(!t)return null;for(;p!==null;)e(_,p),p=p.sibling;return null}function r(_,p){for(_=new Map;p!==null;)p.key!==null?_.set(p.key,p):_.set(p.index,p),p=p.sibling;return _}function i(_,p){return _=Dn(_,p),_.index=0,_.sibling=null,_}function s(_,p,v){return _.index=v,t?(v=_.alternate,v!==null?(v=v.index,v<p?(_.flags|=2,p):v):(_.flags|=2,p)):(_.flags|=1048576,p)}function o(_){return t&&_.alternate===null&&(_.flags|=2),_}function a(_,p,v,E){return p===null||p.tag!==6?(p=Zl(v,_.mode,E),p.return=_,p):(p=i(p,v),p.return=_,p)}function l(_,p,v,E){var A=v.type;return A===Mr?d(_,p,v.props.children,E,v.key):p!==null&&(p.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===gn&&Pf(A)===p.type)?(E=i(p,v.props),E.ref=Li(_,p,v),E.return=_,E):(E=jo(v.type,v.key,v.props,null,_.mode,E),E.ref=Li(_,p,v),E.return=_,E)}function u(_,p,v,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=eu(v,_.mode,E),p.return=_,p):(p=i(p,v.children||[]),p.return=_,p)}function d(_,p,v,E,A){return p===null||p.tag!==7?(p=ar(v,_.mode,E,A),p.return=_,p):(p=i(p,v),p.return=_,p)}function c(_,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Zl(""+p,_.mode,v),p.return=_,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case io:return v=jo(p.type,p.key,p.props,null,_.mode,v),v.ref=Li(_,null,p),v.return=_,v;case Dr:return p=eu(p,_.mode,v),p.return=_,p;case gn:var E=p._init;return c(_,E(p._payload),v)}if($i(p)||Pi(p))return p=ar(p,_.mode,v,null),p.return=_,p;go(_,p)}return null}function h(_,p,v,E){var A=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return A!==null?null:a(_,p,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case io:return v.key===A?l(_,p,v,E):null;case Dr:return v.key===A?u(_,p,v,E):null;case gn:return A=v._init,h(_,p,A(v._payload),E)}if($i(v)||Pi(v))return A!==null?null:d(_,p,v,E,null);go(_,v)}return null}function g(_,p,v,E,A){if(typeof E=="string"&&E!==""||typeof E=="number")return _=_.get(v)||null,a(p,_,""+E,A);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case io:return _=_.get(E.key===null?v:E.key)||null,l(p,_,E,A);case Dr:return _=_.get(E.key===null?v:E.key)||null,u(p,_,E,A);case gn:var O=E._init;return g(_,p,v,O(E._payload),A)}if($i(E)||Pi(E))return _=_.get(v)||null,d(p,_,E,A,null);go(p,E)}return null}function m(_,p,v,E){for(var A=null,O=null,b=p,L=p=0,F=null;b!==null&&L<v.length;L++){b.index>L?(F=b,b=null):F=b.sibling;var z=h(_,b,v[L],E);if(z===null){b===null&&(b=F);break}t&&b&&z.alternate===null&&e(_,b),p=s(z,p,L),O===null?A=z:O.sibling=z,O=z,b=F}if(L===v.length)return n(_,b),ie&&Yn(_,L),A;if(b===null){for(;L<v.length;L++)b=c(_,v[L],E),b!==null&&(p=s(b,p,L),O===null?A=b:O.sibling=b,O=b);return ie&&Yn(_,L),A}for(b=r(_,b);L<v.length;L++)F=g(b,_,L,v[L],E),F!==null&&(t&&F.alternate!==null&&b.delete(F.key===null?L:F.key),p=s(F,p,L),O===null?A=F:O.sibling=F,O=F);return t&&b.forEach(function(et){return e(_,et)}),ie&&Yn(_,L),A}function y(_,p,v,E){var A=Pi(v);if(typeof A!="function")throw Error(N(150));if(v=A.call(v),v==null)throw Error(N(151));for(var O=A=null,b=p,L=p=0,F=null,z=v.next();b!==null&&!z.done;L++,z=v.next()){b.index>L?(F=b,b=null):F=b.sibling;var et=h(_,b,z.value,E);if(et===null){b===null&&(b=F);break}t&&b&&et.alternate===null&&e(_,b),p=s(et,p,L),O===null?A=et:O.sibling=et,O=et,b=F}if(z.done)return n(_,b),ie&&Yn(_,L),A;if(b===null){for(;!z.done;L++,z=v.next())z=c(_,z.value,E),z!==null&&(p=s(z,p,L),O===null?A=z:O.sibling=z,O=z);return ie&&Yn(_,L),A}for(b=r(_,b);!z.done;L++,z=v.next())z=g(b,_,L,z.value,E),z!==null&&(t&&z.alternate!==null&&b.delete(z.key===null?L:z.key),p=s(z,p,L),O===null?A=z:O.sibling=z,O=z);return t&&b.forEach(function(fn){return e(_,fn)}),ie&&Yn(_,L),A}function I(_,p,v,E){if(typeof v=="object"&&v!==null&&v.type===Mr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case io:e:{for(var A=v.key,O=p;O!==null;){if(O.key===A){if(A=v.type,A===Mr){if(O.tag===7){n(_,O.sibling),p=i(O,v.props.children),p.return=_,_=p;break e}}else if(O.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===gn&&Pf(A)===O.type){n(_,O.sibling),p=i(O,v.props),p.ref=Li(_,O,v),p.return=_,_=p;break e}n(_,O);break}else e(_,O);O=O.sibling}v.type===Mr?(p=ar(v.props.children,_.mode,E,v.key),p.return=_,_=p):(E=jo(v.type,v.key,v.props,null,_.mode,E),E.ref=Li(_,p,v),E.return=_,_=E)}return o(_);case Dr:e:{for(O=v.key;p!==null;){if(p.key===O)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(_,p.sibling),p=i(p,v.children||[]),p.return=_,_=p;break e}else{n(_,p);break}else e(_,p);p=p.sibling}p=eu(v,_.mode,E),p.return=_,_=p}return o(_);case gn:return O=v._init,I(_,p,O(v._payload),E)}if($i(v))return m(_,p,v,E);if(Pi(v))return y(_,p,v,E);go(_,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(_,p.sibling),p=i(p,v),p.return=_,_=p):(n(_,p),p=Zl(v,_.mode,E),p.return=_,_=p),o(_)):n(_,p)}return I}var li=Kg(!0),Qg=Kg(!1),ra=Gn(null),ia=null,Vr=null,ud=null;function cd(){ud=Vr=ia=null}function dd(t){var e=ra.current;re(ra),t._currentValue=e}function Yu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Xr(t,e){ia=t,ud=Vr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(qe=!0),t.firstContext=null)}function pt(t){var e=t._currentValue;if(ud!==t)if(t={context:t,memoizedValue:e,next:null},Vr===null){if(ia===null)throw Error(N(308));Vr=t,ia.dependencies={lanes:0,firstContext:t}}else Vr=Vr.next=t;return e}var tr=null;function hd(t){tr===null?tr=[t]:tr.push(t)}function Yg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,hd(e)):(n.next=i.next,i.next=n),e.interleaved=n,on(t,r)}function on(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var _n=!1;function fd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function tn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function bn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,on(t,n)}return i=r.interleaved,i===null?(e.next=e,hd(r)):(e.next=i.next,i.next=e),r.interleaved=e,on(t,n)}function Ao(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xc(t,n)}}function xf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function sa(t,e,n,r){var i=t.updateQueue;_n=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var c=i.baseState;o=0,d=u=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,y=a;switch(h=e,g=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){c=m.call(g,c,h);break e}c=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,h=typeof m=="function"?m.call(g,c,h):m,h==null)break e;c=le({},c,h);break e;case 2:_n=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=g,l=c):d=d.next=g,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);pr|=o,t.lanes=o,t.memoizedState=c}}function Af(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var Gs={},Ut=Gn(Gs),ws=Gn(Gs),Es=Gn(Gs);function nr(t){if(t===Gs)throw Error(N(174));return t}function pd(t,e){switch(te(Es,e),te(ws,t),te(Ut,Gs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:xu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=xu(e,t)}re(Ut),te(Ut,e)}function ui(){re(Ut),re(ws),re(Es)}function Xg(t){nr(Es.current);var e=nr(Ut.current),n=xu(e,t.type);e!==n&&(te(ws,t),te(Ut,n))}function md(t){ws.current===t&&(re(Ut),re(ws))}var oe=Gn(0);function oa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ql=[];function gd(){for(var t=0;t<ql.length;t++)ql[t]._workInProgressVersionPrimary=null;ql.length=0}var bo=dn.ReactCurrentDispatcher,Kl=dn.ReactCurrentBatchConfig,fr=0,ae=null,ve=null,Ie=null,aa=!1,Ji=!1,Ss=0,pS=0;function be(){throw Error(N(321))}function _d(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Pt(t[n],e[n]))return!1;return!0}function vd(t,e,n,r,i,s){if(fr=s,ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,bo.current=t===null||t.memoizedState===null?vS:yS,t=n(r,i),Ji){s=0;do{if(Ji=!1,Ss=0,25<=s)throw Error(N(301));s+=1,Ie=ve=null,e.updateQueue=null,bo.current=wS,t=n(r,i)}while(Ji)}if(bo.current=la,e=ve!==null&&ve.next!==null,fr=0,Ie=ve=ae=null,aa=!1,e)throw Error(N(300));return t}function yd(){var t=Ss!==0;return Ss=0,t}function Lt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?ae.memoizedState=Ie=t:Ie=Ie.next=t,Ie}function mt(){if(ve===null){var t=ae.alternate;t=t!==null?t.memoizedState:null}else t=ve.next;var e=Ie===null?ae.memoizedState:Ie.next;if(e!==null)Ie=e,ve=t;else{if(t===null)throw Error(N(310));ve=t,t={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},Ie===null?ae.memoizedState=Ie=t:Ie=Ie.next=t}return Ie}function Cs(t,e){return typeof e=="function"?e(t):e}function Ql(t){var e=mt(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=ve,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((fr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,o=r):l=l.next=c,ae.lanes|=d,pr|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Pt(r,e.memoizedState)||(qe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ae.lanes|=s,pr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Yl(t){var e=mt(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Pt(s,e.memoizedState)||(qe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Zg(){}function e_(t,e){var n=ae,r=mt(),i=e(),s=!Pt(r.memoizedState,i);if(s&&(r.memoizedState=i,qe=!0),r=r.queue,wd(r_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ie!==null&&Ie.memoizedState.tag&1){if(n.flags|=2048,Is(9,n_.bind(null,n,r,i,e),void 0,null),ke===null)throw Error(N(349));fr&30||t_(n,e,i)}return i}function t_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function n_(t,e,n,r){e.value=n,e.getSnapshot=r,i_(e)&&s_(t)}function r_(t,e,n){return n(function(){i_(e)&&s_(t)})}function i_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Pt(t,n)}catch{return!0}}function s_(t){var e=on(t,1);e!==null&&kt(e,t,1,-1)}function bf(t){var e=Lt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Cs,lastRenderedState:t},e.queue=t,t=t.dispatch=_S.bind(null,ae,t),[e.memoizedState,t]}function Is(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function o_(){return mt().memoizedState}function Oo(t,e,n,r){var i=Lt();ae.flags|=t,i.memoizedState=Is(1|e,n,void 0,r===void 0?null:r)}function Ka(t,e,n,r){var i=mt();r=r===void 0?null:r;var s=void 0;if(ve!==null){var o=ve.memoizedState;if(s=o.destroy,r!==null&&_d(r,o.deps)){i.memoizedState=Is(e,n,s,r);return}}ae.flags|=t,i.memoizedState=Is(1|e,n,s,r)}function Of(t,e){return Oo(8390656,8,t,e)}function wd(t,e){return Ka(2048,8,t,e)}function a_(t,e){return Ka(4,2,t,e)}function l_(t,e){return Ka(4,4,t,e)}function u_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function c_(t,e,n){return n=n!=null?n.concat([t]):null,Ka(4,4,u_.bind(null,e,t),n)}function Ed(){}function d_(t,e){var n=mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_d(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function h_(t,e){var n=mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_d(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function f_(t,e,n){return fr&21?(Pt(n,e)||(n=vg(),ae.lanes|=n,pr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,qe=!0),t.memoizedState=n)}function mS(t,e){var n=Y;Y=n!==0&&4>n?n:4,t(!0);var r=Kl.transition;Kl.transition={};try{t(!1),e()}finally{Y=n,Kl.transition=r}}function p_(){return mt().memoizedState}function gS(t,e,n){var r=Ln(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},m_(t))g_(e,n);else if(n=Yg(t,e,n,r),n!==null){var i=Ue();kt(n,t,r,i),__(n,e,r)}}function _S(t,e,n){var r=Ln(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(m_(t))g_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Pt(a,o)){var l=e.interleaved;l===null?(i.next=i,hd(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Yg(t,e,i,r),n!==null&&(i=Ue(),kt(n,t,r,i),__(n,e,r))}}function m_(t){var e=t.alternate;return t===ae||e!==null&&e===ae}function g_(t,e){Ji=aa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function __(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xc(t,n)}}var la={readContext:pt,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},vS={readContext:pt,useCallback:function(t,e){return Lt().memoizedState=[t,e===void 0?null:e],t},useContext:pt,useEffect:Of,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Oo(4194308,4,u_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Oo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Oo(4,2,t,e)},useMemo:function(t,e){var n=Lt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Lt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=gS.bind(null,ae,t),[r.memoizedState,t]},useRef:function(t){var e=Lt();return t={current:t},e.memoizedState=t},useState:bf,useDebugValue:Ed,useDeferredValue:function(t){return Lt().memoizedState=t},useTransition:function(){var t=bf(!1),e=t[0];return t=mS.bind(null,t[1]),Lt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ae,i=Lt();if(ie){if(n===void 0)throw Error(N(407));n=n()}else{if(n=e(),ke===null)throw Error(N(349));fr&30||t_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Of(r_.bind(null,r,s,t),[t]),r.flags|=2048,Is(9,n_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Lt(),e=ke.identifierPrefix;if(ie){var n=Kt,r=qt;n=(r&~(1<<32-Tt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ss++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=pS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},yS={readContext:pt,useCallback:d_,useContext:pt,useEffect:wd,useImperativeHandle:c_,useInsertionEffect:a_,useLayoutEffect:l_,useMemo:h_,useReducer:Ql,useRef:o_,useState:function(){return Ql(Cs)},useDebugValue:Ed,useDeferredValue:function(t){var e=mt();return f_(e,ve.memoizedState,t)},useTransition:function(){var t=Ql(Cs)[0],e=mt().memoizedState;return[t,e]},useMutableSource:Zg,useSyncExternalStore:e_,useId:p_,unstable_isNewReconciler:!1},wS={readContext:pt,useCallback:d_,useContext:pt,useEffect:wd,useImperativeHandle:c_,useInsertionEffect:a_,useLayoutEffect:l_,useMemo:h_,useReducer:Yl,useRef:o_,useState:function(){return Yl(Cs)},useDebugValue:Ed,useDeferredValue:function(t){var e=mt();return ve===null?e.memoizedState=t:f_(e,ve.memoizedState,t)},useTransition:function(){var t=Yl(Cs)[0],e=mt().memoizedState;return[t,e]},useMutableSource:Zg,useSyncExternalStore:e_,useId:p_,unstable_isNewReconciler:!1};function wt(t,e){if(t&&t.defaultProps){e=le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ju(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Qa={isMounted:function(t){return(t=t._reactInternals)?Tr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ue(),i=Ln(t),s=tn(r,i);s.payload=e,n!=null&&(s.callback=n),e=bn(t,s,i),e!==null&&(kt(e,t,i,r),Ao(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ue(),i=Ln(t),s=tn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=bn(t,s,i),e!==null&&(kt(e,t,i,r),Ao(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ue(),r=Ln(t),i=tn(n,r);i.tag=2,e!=null&&(i.callback=e),e=bn(t,i,r),e!==null&&(kt(e,t,r,n),Ao(e,t,r))}};function Lf(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!gs(n,r)||!gs(i,s):!0}function v_(t,e,n){var r=!1,i=Bn,s=e.contextType;return typeof s=="object"&&s!==null?s=pt(s):(i=Ye(e)?dr:De.current,r=e.contextTypes,s=(r=r!=null)?oi(t,i):Bn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Qa,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Df(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Qa.enqueueReplaceState(e,e.state,null)}function Xu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},fd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=pt(s):(s=Ye(e)?dr:De.current,i.context=oi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ju(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Qa.enqueueReplaceState(i,i.state,null),sa(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ci(t,e){try{var n="",r=e;do n+=Kw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Jl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Zu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ES=typeof WeakMap=="function"?WeakMap:Map;function y_(t,e,n){n=tn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ca||(ca=!0,uc=r),Zu(t,e)},n}function w_(t,e,n){n=tn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Zu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Zu(t,e),typeof r!="function"&&(On===null?On=new Set([this]):On.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Mf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ES;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=DS.bind(null,t,e,n),e.then(t,t))}function jf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ff(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=tn(-1,1),e.tag=2,bn(n,e,1))),n.lanes|=1),t)}var SS=dn.ReactCurrentOwner,qe=!1;function je(t,e,n,r){e.child=t===null?Qg(e,null,n,r):li(e,t.child,n,r)}function Uf(t,e,n,r,i){n=n.render;var s=e.ref;return Xr(e,i),r=vd(t,e,n,r,s,i),n=yd(),t!==null&&!qe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,an(t,e,i)):(ie&&n&&od(e),e.flags|=1,je(t,e,r,i),e.child)}function zf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Pd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,E_(t,e,s,r,i)):(t=jo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:gs,n(o,r)&&t.ref===e.ref)return an(t,e,i)}return e.flags|=1,t=Dn(s,r),t.ref=e.ref,t.return=e,e.child=t}function E_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(gs(s,r)&&t.ref===e.ref)if(qe=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(qe=!0);else return e.lanes=t.lanes,an(t,e,i)}return ec(t,e,n,r,i)}function S_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(Gr,tt),tt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,te(Gr,tt),tt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,te(Gr,tt),tt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,te(Gr,tt),tt|=r;return je(t,e,i,n),e.child}function C_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ec(t,e,n,r,i){var s=Ye(n)?dr:De.current;return s=oi(e,s),Xr(e,i),n=vd(t,e,n,r,s,i),r=yd(),t!==null&&!qe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,an(t,e,i)):(ie&&r&&od(e),e.flags|=1,je(t,e,n,i),e.child)}function Bf(t,e,n,r,i){if(Ye(n)){var s=!0;ea(e)}else s=!1;if(Xr(e,i),e.stateNode===null)Lo(t,e),v_(e,n,r),Xu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=pt(u):(u=Ye(n)?dr:De.current,u=oi(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Df(e,o,r,u),_n=!1;var h=e.memoizedState;o.state=h,sa(e,r,o,i),l=e.memoizedState,a!==r||h!==l||Qe.current||_n?(typeof d=="function"&&(Ju(e,n,d,r),l=e.memoizedState),(a=_n||Lf(e,n,a,r,h,l,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Jg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:wt(e.type,a),o.props=u,c=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=pt(l):(l=Ye(n)?dr:De.current,l=oi(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||h!==l)&&Df(e,o,r,l),_n=!1,h=e.memoizedState,o.state=h,sa(e,r,o,i);var m=e.memoizedState;a!==c||h!==m||Qe.current||_n?(typeof g=="function"&&(Ju(e,n,g,r),m=e.memoizedState),(u=_n||Lf(e,n,u,r,h,m,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=m),o.props=r,o.state=m,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return tc(t,e,n,r,s,i)}function tc(t,e,n,r,i,s){C_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&kf(e,n,!1),an(t,e,s);r=e.stateNode,SS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=li(e,t.child,null,s),e.child=li(e,null,a,s)):je(t,e,a,s),e.memoizedState=r.state,i&&kf(e,n,!0),e.child}function I_(t){var e=t.stateNode;e.pendingContext?Tf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Tf(t,e.context,!1),pd(t,e.containerInfo)}function Wf(t,e,n,r,i){return ai(),ld(i),e.flags|=256,je(t,e,n,r),e.child}var nc={dehydrated:null,treeContext:null,retryLane:0};function rc(t){return{baseLanes:t,cachePool:null,transitions:null}}function T_(t,e,n){var r=e.pendingProps,i=oe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),te(oe,i&1),t===null)return Qu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Xa(o,r,0,null),t=ar(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=rc(n),e.memoizedState=nc,t):Sd(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return CS(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Dn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Dn(a,s):(s=ar(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?rc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=nc,r}return s=t.child,t=s.sibling,r=Dn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Sd(t,e){return e=Xa({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function _o(t,e,n,r){return r!==null&&ld(r),li(e,t.child,null,n),t=Sd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function CS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Jl(Error(N(422))),_o(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Xa({mode:"visible",children:r.children},i,0,null),s=ar(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&li(e,t.child,null,o),e.child.memoizedState=rc(o),e.memoizedState=nc,s);if(!(e.mode&1))return _o(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(N(419)),r=Jl(s,r,void 0),_o(t,e,o,r)}if(a=(o&t.childLanes)!==0,qe||a){if(r=ke,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,on(t,i),kt(r,t,i,-1))}return Nd(),r=Jl(Error(N(421))),_o(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=MS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,nt=An(i.nextSibling),it=e,ie=!0,St=null,t!==null&&(ut[ct++]=qt,ut[ct++]=Kt,ut[ct++]=hr,qt=t.id,Kt=t.overflow,hr=e),e=Sd(e,r.children),e.flags|=4096,e)}function $f(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Yu(t.return,e,n)}function Xl(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function k_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(je(t,e,r.children,n),r=oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$f(t,n,e);else if(t.tag===19)$f(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(te(oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&oa(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Xl(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&oa(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Xl(e,!0,n,null,s);break;case"together":Xl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Lo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function an(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),pr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(N(153));if(e.child!==null){for(t=e.child,n=Dn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Dn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function IS(t,e,n){switch(e.tag){case 3:I_(e),ai();break;case 5:Xg(e);break;case 1:Ye(e.type)&&ea(e);break;case 4:pd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;te(ra,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(te(oe,oe.current&1),e.flags|=128,null):n&e.child.childLanes?T_(t,e,n):(te(oe,oe.current&1),t=an(t,e,n),t!==null?t.sibling:null);te(oe,oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return k_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),te(oe,oe.current),r)break;return null;case 22:case 23:return e.lanes=0,S_(t,e,n)}return an(t,e,n)}var R_,ic,N_,P_;R_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ic=function(){};N_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,nr(Ut.current);var s=null;switch(n){case"input":i=ku(t,i),r=ku(t,r),s=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),s=[];break;case"textarea":i=Pu(t,i),r=Pu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Xo)}Au(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(us.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(us.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ne("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};P_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Di(t,e){if(!ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Oe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function TS(t,e,n){var r=e.pendingProps;switch(ad(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(e),null;case 1:return Ye(e.type)&&Zo(),Oe(e),null;case 3:return r=e.stateNode,ui(),re(Qe),re(De),gd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(mo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,St!==null&&(hc(St),St=null))),ic(t,e),Oe(e),null;case 5:md(e);var i=nr(Es.current);if(n=e.type,t!==null&&e.stateNode!=null)N_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(N(166));return Oe(e),null}if(t=nr(Ut.current),mo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Dt]=e,r[ys]=s,t=(e.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(i=0;i<Hi.length;i++)ne(Hi[i],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":Jh(r,s),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ne("invalid",r);break;case"textarea":Zh(r,s),ne("invalid",r)}Au(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&po(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&po(r.textContent,a,t),i=["children",""+a]):us.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ne("scroll",r)}switch(n){case"input":so(r),Xh(r,s,!0);break;case"textarea":so(r),ef(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Xo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=rg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Dt]=e,t[ys]=r,R_(t,e,!1,!1),e.stateNode=t;e:{switch(o=bu(n,r),n){case"dialog":ne("cancel",t),ne("close",t),i=r;break;case"iframe":case"object":case"embed":ne("load",t),i=r;break;case"video":case"audio":for(i=0;i<Hi.length;i++)ne(Hi[i],t);i=r;break;case"source":ne("error",t),i=r;break;case"img":case"image":case"link":ne("error",t),ne("load",t),i=r;break;case"details":ne("toggle",t),i=r;break;case"input":Jh(t,r),i=ku(t,r),ne("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),ne("invalid",t);break;case"textarea":Zh(t,r),i=Pu(t,r),ne("invalid",t);break;default:i=r}Au(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?og(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ig(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&cs(t,l):typeof l=="number"&&cs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(us.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ne("scroll",t):l!=null&&Gc(t,s,l,o))}switch(n){case"input":so(t),Xh(t,r,!1);break;case"textarea":so(t),ef(t);break;case"option":r.value!=null&&t.setAttribute("value",""+zn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Kr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Kr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Xo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Oe(e),null;case 6:if(t&&e.stateNode!=null)P_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(N(166));if(n=nr(Es.current),nr(Ut.current),mo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Dt]=e,(s=r.nodeValue!==n)&&(t=it,t!==null))switch(t.tag){case 3:po(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&po(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Dt]=e,e.stateNode=r}return Oe(e),null;case 13:if(re(oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ie&&nt!==null&&e.mode&1&&!(e.flags&128))qg(),ai(),e.flags|=98560,s=!1;else if(s=mo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(N(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(N(317));s[Dt]=e}else ai(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Oe(e),s=!1}else St!==null&&(hc(St),St=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||oe.current&1?Ee===0&&(Ee=3):Nd())),e.updateQueue!==null&&(e.flags|=4),Oe(e),null);case 4:return ui(),ic(t,e),t===null&&_s(e.stateNode.containerInfo),Oe(e),null;case 10:return dd(e.type._context),Oe(e),null;case 17:return Ye(e.type)&&Zo(),Oe(e),null;case 19:if(re(oe),s=e.memoizedState,s===null)return Oe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Di(s,!1);else{if(Ee!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=oa(t),o!==null){for(e.flags|=128,Di(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return te(oe,oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&me()>di&&(e.flags|=128,r=!0,Di(s,!1),e.lanes=4194304)}else{if(!r)if(t=oa(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Di(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ie)return Oe(e),null}else 2*me()-s.renderingStartTime>di&&n!==1073741824&&(e.flags|=128,r=!0,Di(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=me(),e.sibling=null,n=oe.current,te(oe,r?n&1|2:n&1),e):(Oe(e),null);case 22:case 23:return Rd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?tt&1073741824&&(Oe(e),e.subtreeFlags&6&&(e.flags|=8192)):Oe(e),null;case 24:return null;case 25:return null}throw Error(N(156,e.tag))}function kS(t,e){switch(ad(e),e.tag){case 1:return Ye(e.type)&&Zo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ui(),re(Qe),re(De),gd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return md(e),null;case 13:if(re(oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(N(340));ai()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return re(oe),null;case 4:return ui(),null;case 10:return dd(e.type._context),null;case 22:case 23:return Rd(),null;case 24:return null;default:return null}}var vo=!1,Le=!1,RS=typeof WeakSet=="function"?WeakSet:Set,D=null;function Hr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(t,e,r)}else n.current=null}function sc(t,e,n){try{n()}catch(r){ce(t,e,r)}}var Vf=!1;function NS(t,e){if(Wu=Qo,t=Lg(),sd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var g;c!==n||i!==0&&c.nodeType!==3||(a=o+i),c!==s||r!==0&&c.nodeType!==3||(l=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(g=c.firstChild)!==null;)h=c,c=g;for(;;){if(c===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++d===r&&(l=o),(g=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for($u={focusedElem:t,selectionRange:n},Qo=!1,D=e;D!==null;)if(e=D,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,D=t;else for(;D!==null;){e=D;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,I=m.memoizedState,_=e.stateNode,p=_.getSnapshotBeforeUpdate(e.elementType===e.type?y:wt(e.type,y),I);_.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(E){ce(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,D=t;break}D=e.return}return m=Vf,Vf=!1,m}function Xi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&sc(e,n,s)}i=i.next}while(i!==r)}}function Ya(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function oc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function x_(t){var e=t.alternate;e!==null&&(t.alternate=null,x_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Dt],delete e[ys],delete e[Gu],delete e[cS],delete e[dS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function A_(t){return t.tag===5||t.tag===3||t.tag===4}function Hf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||A_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ac(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Xo));else if(r!==4&&(t=t.child,t!==null))for(ac(t,e,n),t=t.sibling;t!==null;)ac(t,e,n),t=t.sibling}function lc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(lc(t,e,n),t=t.sibling;t!==null;)lc(t,e,n),t=t.sibling}var Re=null,Et=!1;function pn(t,e,n){for(n=n.child;n!==null;)b_(t,e,n),n=n.sibling}function b_(t,e,n){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(Wa,n)}catch{}switch(n.tag){case 5:Le||Hr(n,e);case 6:var r=Re,i=Et;Re=null,pn(t,e,n),Re=r,Et=i,Re!==null&&(Et?(t=Re,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Re.removeChild(n.stateNode));break;case 18:Re!==null&&(Et?(t=Re,n=n.stateNode,t.nodeType===8?Hl(t.parentNode,n):t.nodeType===1&&Hl(t,n),ps(t)):Hl(Re,n.stateNode));break;case 4:r=Re,i=Et,Re=n.stateNode.containerInfo,Et=!0,pn(t,e,n),Re=r,Et=i;break;case 0:case 11:case 14:case 15:if(!Le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&sc(n,e,o),i=i.next}while(i!==r)}pn(t,e,n);break;case 1:if(!Le&&(Hr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ce(n,e,a)}pn(t,e,n);break;case 21:pn(t,e,n);break;case 22:n.mode&1?(Le=(r=Le)||n.memoizedState!==null,pn(t,e,n),Le=r):pn(t,e,n);break;default:pn(t,e,n)}}function Gf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new RS),e.forEach(function(r){var i=jS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function yt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Re=a.stateNode,Et=!1;break e;case 3:Re=a.stateNode.containerInfo,Et=!0;break e;case 4:Re=a.stateNode.containerInfo,Et=!0;break e}a=a.return}if(Re===null)throw Error(N(160));b_(s,o,i),Re=null,Et=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ce(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)O_(e,t),e=e.sibling}function O_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(yt(e,t),Ot(t),r&4){try{Xi(3,t,t.return),Ya(3,t)}catch(y){ce(t,t.return,y)}try{Xi(5,t,t.return)}catch(y){ce(t,t.return,y)}}break;case 1:yt(e,t),Ot(t),r&512&&n!==null&&Hr(n,n.return);break;case 5:if(yt(e,t),Ot(t),r&512&&n!==null&&Hr(n,n.return),t.flags&32){var i=t.stateNode;try{cs(i,"")}catch(y){ce(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&tg(i,s),bu(a,o);var u=bu(a,s);for(o=0;o<l.length;o+=2){var d=l[o],c=l[o+1];d==="style"?og(i,c):d==="dangerouslySetInnerHTML"?ig(i,c):d==="children"?cs(i,c):Gc(i,d,c,u)}switch(a){case"input":Ru(i,s);break;case"textarea":ng(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Kr(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Kr(i,!!s.multiple,s.defaultValue,!0):Kr(i,!!s.multiple,s.multiple?[]:"",!1))}i[ys]=s}catch(y){ce(t,t.return,y)}}break;case 6:if(yt(e,t),Ot(t),r&4){if(t.stateNode===null)throw Error(N(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){ce(t,t.return,y)}}break;case 3:if(yt(e,t),Ot(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ps(e.containerInfo)}catch(y){ce(t,t.return,y)}break;case 4:yt(e,t),Ot(t);break;case 13:yt(e,t),Ot(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Td=me())),r&4&&Gf(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Le=(u=Le)||d,yt(e,t),Le=u):yt(e,t),Ot(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(D=t,d=t.child;d!==null;){for(c=D=d;D!==null;){switch(h=D,g=h.child,h.tag){case 0:case 11:case 14:case 15:Xi(4,h,h.return);break;case 1:Hr(h,h.return);var m=h.stateNode;if(typeof m.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(y){ce(r,n,y)}}break;case 5:Hr(h,h.return);break;case 22:if(h.memoizedState!==null){Kf(c);continue}}g!==null?(g.return=h,D=g):Kf(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=c.stateNode,l=c.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=sg("display",o))}catch(y){ce(t,t.return,y)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){ce(t,t.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:yt(e,t),Ot(t),r&4&&Gf(t);break;case 21:break;default:yt(e,t),Ot(t)}}function Ot(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(A_(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(cs(i,""),r.flags&=-33);var s=Hf(t);lc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Hf(t);ac(t,a,o);break;default:throw Error(N(161))}}catch(l){ce(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function PS(t,e,n){D=t,L_(t)}function L_(t,e,n){for(var r=(t.mode&1)!==0;D!==null;){var i=D,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||vo;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Le;a=vo;var u=Le;if(vo=o,(Le=l)&&!u)for(D=i;D!==null;)o=D,l=o.child,o.tag===22&&o.memoizedState!==null?Qf(i):l!==null?(l.return=o,D=l):Qf(i);for(;s!==null;)D=s,L_(s),s=s.sibling;D=i,vo=a,Le=u}qf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,D=s):qf(t)}}function qf(t){for(;D!==null;){var e=D;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Le||Ya(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Le)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:wt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Af(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Af(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&ps(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}Le||e.flags&512&&oc(e)}catch(h){ce(e,e.return,h)}}if(e===t){D=null;break}if(n=e.sibling,n!==null){n.return=e.return,D=n;break}D=e.return}}function Kf(t){for(;D!==null;){var e=D;if(e===t){D=null;break}var n=e.sibling;if(n!==null){n.return=e.return,D=n;break}D=e.return}}function Qf(t){for(;D!==null;){var e=D;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ya(4,e)}catch(l){ce(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ce(e,i,l)}}var s=e.return;try{oc(e)}catch(l){ce(e,s,l)}break;case 5:var o=e.return;try{oc(e)}catch(l){ce(e,o,l)}}}catch(l){ce(e,e.return,l)}if(e===t){D=null;break}var a=e.sibling;if(a!==null){a.return=e.return,D=a;break}D=e.return}}var xS=Math.ceil,ua=dn.ReactCurrentDispatcher,Cd=dn.ReactCurrentOwner,ft=dn.ReactCurrentBatchConfig,q=0,ke=null,_e=null,Pe=0,tt=0,Gr=Gn(0),Ee=0,Ts=null,pr=0,Ja=0,Id=0,Zi=null,Ve=null,Td=0,di=1/0,Ht=null,ca=!1,uc=null,On=null,yo=!1,Tn=null,da=0,es=0,cc=null,Do=-1,Mo=0;function Ue(){return q&6?me():Do!==-1?Do:Do=me()}function Ln(t){return t.mode&1?q&2&&Pe!==0?Pe&-Pe:fS.transition!==null?(Mo===0&&(Mo=vg()),Mo):(t=Y,t!==0||(t=window.event,t=t===void 0?16:Tg(t.type)),t):1}function kt(t,e,n,r){if(50<es)throw es=0,cc=null,Error(N(185));$s(t,n,r),(!(q&2)||t!==ke)&&(t===ke&&(!(q&2)&&(Ja|=n),Ee===4&&yn(t,Pe)),Je(t,r),n===1&&q===0&&!(e.mode&1)&&(di=me()+500,qa&&qn()))}function Je(t,e){var n=t.callbackNode;fE(t,e);var r=Ko(t,t===ke?Pe:0);if(r===0)n!==null&&rf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&rf(n),e===1)t.tag===0?hS(Yf.bind(null,t)):Vg(Yf.bind(null,t)),lS(function(){!(q&6)&&qn()}),n=null;else{switch(yg(r)){case 1:n=Jc;break;case 4:n=gg;break;case 16:n=qo;break;case 536870912:n=_g;break;default:n=qo}n=W_(n,D_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function D_(t,e){if(Do=-1,Mo=0,q&6)throw Error(N(327));var n=t.callbackNode;if(Zr()&&t.callbackNode!==n)return null;var r=Ko(t,t===ke?Pe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ha(t,r);else{e=r;var i=q;q|=2;var s=j_();(ke!==t||Pe!==e)&&(Ht=null,di=me()+500,or(t,e));do try{OS();break}catch(a){M_(t,a)}while(!0);cd(),ua.current=s,q=i,_e!==null?e=0:(ke=null,Pe=0,e=Ee)}if(e!==0){if(e===2&&(i=ju(t),i!==0&&(r=i,e=dc(t,i))),e===1)throw n=Ts,or(t,0),yn(t,r),Je(t,me()),n;if(e===6)yn(t,r);else{if(i=t.current.alternate,!(r&30)&&!AS(i)&&(e=ha(t,r),e===2&&(s=ju(t),s!==0&&(r=s,e=dc(t,s))),e===1))throw n=Ts,or(t,0),yn(t,r),Je(t,me()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(N(345));case 2:Jn(t,Ve,Ht);break;case 3:if(yn(t,r),(r&130023424)===r&&(e=Td+500-me(),10<e)){if(Ko(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ue(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Hu(Jn.bind(null,t,Ve,Ht),e);break}Jn(t,Ve,Ht);break;case 4:if(yn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Tt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xS(r/1960))-r,10<r){t.timeoutHandle=Hu(Jn.bind(null,t,Ve,Ht),r);break}Jn(t,Ve,Ht);break;case 5:Jn(t,Ve,Ht);break;default:throw Error(N(329))}}}return Je(t,me()),t.callbackNode===n?D_.bind(null,t):null}function dc(t,e){var n=Zi;return t.current.memoizedState.isDehydrated&&(or(t,e).flags|=256),t=ha(t,e),t!==2&&(e=Ve,Ve=n,e!==null&&hc(e)),t}function hc(t){Ve===null?Ve=t:Ve.push.apply(Ve,t)}function AS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Pt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yn(t,e){for(e&=~Id,e&=~Ja,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Tt(e),r=1<<n;t[n]=-1,e&=~r}}function Yf(t){if(q&6)throw Error(N(327));Zr();var e=Ko(t,0);if(!(e&1))return Je(t,me()),null;var n=ha(t,e);if(t.tag!==0&&n===2){var r=ju(t);r!==0&&(e=r,n=dc(t,r))}if(n===1)throw n=Ts,or(t,0),yn(t,e),Je(t,me()),n;if(n===6)throw Error(N(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Jn(t,Ve,Ht),Je(t,me()),null}function kd(t,e){var n=q;q|=1;try{return t(e)}finally{q=n,q===0&&(di=me()+500,qa&&qn())}}function mr(t){Tn!==null&&Tn.tag===0&&!(q&6)&&Zr();var e=q;q|=1;var n=ft.transition,r=Y;try{if(ft.transition=null,Y=1,t)return t()}finally{Y=r,ft.transition=n,q=e,!(q&6)&&qn()}}function Rd(){tt=Gr.current,re(Gr)}function or(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,aS(n)),_e!==null)for(n=_e.return;n!==null;){var r=n;switch(ad(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zo();break;case 3:ui(),re(Qe),re(De),gd();break;case 5:md(r);break;case 4:ui();break;case 13:re(oe);break;case 19:re(oe);break;case 10:dd(r.type._context);break;case 22:case 23:Rd()}n=n.return}if(ke=t,_e=t=Dn(t.current,null),Pe=tt=e,Ee=0,Ts=null,Id=Ja=pr=0,Ve=Zi=null,tr!==null){for(e=0;e<tr.length;e++)if(n=tr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}tr=null}return t}function M_(t,e){do{var n=_e;try{if(cd(),bo.current=la,aa){for(var r=ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}aa=!1}if(fr=0,Ie=ve=ae=null,Ji=!1,Ss=0,Cd.current=null,n===null||n.return===null){Ee=1,Ts=e,_e=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Pe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=jf(o);if(g!==null){g.flags&=-257,Ff(g,o,a,s,e),g.mode&1&&Mf(s,u,e),e=g,l=u;var m=e.updateQueue;if(m===null){var y=new Set;y.add(l),e.updateQueue=y}else m.add(l);break e}else{if(!(e&1)){Mf(s,u,e),Nd();break e}l=Error(N(426))}}else if(ie&&a.mode&1){var I=jf(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Ff(I,o,a,s,e),ld(ci(l,a));break e}}s=l=ci(l,a),Ee!==4&&(Ee=2),Zi===null?Zi=[s]:Zi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var _=y_(s,l,e);xf(s,_);break e;case 1:a=l;var p=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(On===null||!On.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=w_(s,a,e);xf(s,E);break e}}s=s.return}while(s!==null)}U_(n)}catch(A){e=A,_e===n&&n!==null&&(_e=n=n.return);continue}break}while(!0)}function j_(){var t=ua.current;return ua.current=la,t===null?la:t}function Nd(){(Ee===0||Ee===3||Ee===2)&&(Ee=4),ke===null||!(pr&268435455)&&!(Ja&268435455)||yn(ke,Pe)}function ha(t,e){var n=q;q|=2;var r=j_();(ke!==t||Pe!==e)&&(Ht=null,or(t,e));do try{bS();break}catch(i){M_(t,i)}while(!0);if(cd(),q=n,ua.current=r,_e!==null)throw Error(N(261));return ke=null,Pe=0,Ee}function bS(){for(;_e!==null;)F_(_e)}function OS(){for(;_e!==null&&!iE();)F_(_e)}function F_(t){var e=B_(t.alternate,t,tt);t.memoizedProps=t.pendingProps,e===null?U_(t):_e=e,Cd.current=null}function U_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=kS(n,e),n!==null){n.flags&=32767,_e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ee=6,_e=null;return}}else if(n=TS(n,e,tt),n!==null){_e=n;return}if(e=e.sibling,e!==null){_e=e;return}_e=e=t}while(e!==null);Ee===0&&(Ee=5)}function Jn(t,e,n){var r=Y,i=ft.transition;try{ft.transition=null,Y=1,LS(t,e,n,r)}finally{ft.transition=i,Y=r}return null}function LS(t,e,n,r){do Zr();while(Tn!==null);if(q&6)throw Error(N(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(N(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(pE(t,s),t===ke&&(_e=ke=null,Pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yo||(yo=!0,W_(qo,function(){return Zr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ft.transition,ft.transition=null;var o=Y;Y=1;var a=q;q|=4,Cd.current=null,NS(t,n),O_(n,t),eS($u),Qo=!!Wu,$u=Wu=null,t.current=n,PS(n),sE(),q=a,Y=o,ft.transition=s}else t.current=n;if(yo&&(yo=!1,Tn=t,da=i),s=t.pendingLanes,s===0&&(On=null),lE(n.stateNode),Je(t,me()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ca)throw ca=!1,t=uc,uc=null,t;return da&1&&t.tag!==0&&Zr(),s=t.pendingLanes,s&1?t===cc?es++:(es=0,cc=t):es=0,qn(),null}function Zr(){if(Tn!==null){var t=yg(da),e=ft.transition,n=Y;try{if(ft.transition=null,Y=16>t?16:t,Tn===null)var r=!1;else{if(t=Tn,Tn=null,da=0,q&6)throw Error(N(331));var i=q;for(q|=4,D=t.current;D!==null;){var s=D,o=s.child;if(D.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(D=u;D!==null;){var d=D;switch(d.tag){case 0:case 11:case 15:Xi(8,d,s)}var c=d.child;if(c!==null)c.return=d,D=c;else for(;D!==null;){d=D;var h=d.sibling,g=d.return;if(x_(d),d===u){D=null;break}if(h!==null){h.return=g,D=h;break}D=g}}}var m=s.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var I=y.sibling;y.sibling=null,y=I}while(y!==null)}}D=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,D=o;else e:for(;D!==null;){if(s=D,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Xi(9,s,s.return)}var _=s.sibling;if(_!==null){_.return=s.return,D=_;break e}D=s.return}}var p=t.current;for(D=p;D!==null;){o=D;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,D=v;else e:for(o=p;D!==null;){if(a=D,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ya(9,a)}}catch(A){ce(a,a.return,A)}if(a===o){D=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,D=E;break e}D=a.return}}if(q=i,qn(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(Wa,t)}catch{}r=!0}return r}finally{Y=n,ft.transition=e}}return!1}function Jf(t,e,n){e=ci(n,e),e=y_(t,e,1),t=bn(t,e,1),e=Ue(),t!==null&&($s(t,1,e),Je(t,e))}function ce(t,e,n){if(t.tag===3)Jf(t,t,n);else for(;e!==null;){if(e.tag===3){Jf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(On===null||!On.has(r))){t=ci(n,t),t=w_(e,t,1),e=bn(e,t,1),t=Ue(),e!==null&&($s(e,1,t),Je(e,t));break}}e=e.return}}function DS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ue(),t.pingedLanes|=t.suspendedLanes&n,ke===t&&(Pe&n)===n&&(Ee===4||Ee===3&&(Pe&130023424)===Pe&&500>me()-Td?or(t,0):Id|=n),Je(t,e)}function z_(t,e){e===0&&(t.mode&1?(e=lo,lo<<=1,!(lo&130023424)&&(lo=4194304)):e=1);var n=Ue();t=on(t,e),t!==null&&($s(t,e,n),Je(t,n))}function MS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),z_(t,n)}function jS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(e),z_(t,n)}var B_;B_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Qe.current)qe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return qe=!1,IS(t,e,n);qe=!!(t.flags&131072)}else qe=!1,ie&&e.flags&1048576&&Hg(e,na,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Lo(t,e),t=e.pendingProps;var i=oi(e,De.current);Xr(e,n),i=vd(null,e,r,t,i,n);var s=yd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ye(r)?(s=!0,ea(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fd(e),i.updater=Qa,e.stateNode=i,i._reactInternals=e,Xu(e,r,t,n),e=tc(null,e,r,!0,s,n)):(e.tag=0,ie&&s&&od(e),je(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Lo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=US(r),t=wt(r,t),i){case 0:e=ec(null,e,r,t,n);break e;case 1:e=Bf(null,e,r,t,n);break e;case 11:e=Uf(null,e,r,t,n);break e;case 14:e=zf(null,e,r,wt(r.type,t),n);break e}throw Error(N(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wt(r,i),ec(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wt(r,i),Bf(t,e,r,i,n);case 3:e:{if(I_(e),t===null)throw Error(N(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Jg(t,e),sa(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ci(Error(N(423)),e),e=Wf(t,e,r,n,i);break e}else if(r!==i){i=ci(Error(N(424)),e),e=Wf(t,e,r,n,i);break e}else for(nt=An(e.stateNode.containerInfo.firstChild),it=e,ie=!0,St=null,n=Qg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ai(),r===i){e=an(t,e,n);break e}je(t,e,r,n)}e=e.child}return e;case 5:return Xg(e),t===null&&Qu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Vu(r,i)?o=null:s!==null&&Vu(r,s)&&(e.flags|=32),C_(t,e),je(t,e,o,n),e.child;case 6:return t===null&&Qu(e),null;case 13:return T_(t,e,n);case 4:return pd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=li(e,null,r,n):je(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wt(r,i),Uf(t,e,r,i,n);case 7:return je(t,e,e.pendingProps,n),e.child;case 8:return je(t,e,e.pendingProps.children,n),e.child;case 12:return je(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,te(ra,r._currentValue),r._currentValue=o,s!==null)if(Pt(s.value,o)){if(s.children===i.children&&!Qe.current){e=an(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=tn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Yu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(N(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Yu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}je(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Xr(e,n),i=pt(i),r=r(i),e.flags|=1,je(t,e,r,n),e.child;case 14:return r=e.type,i=wt(r,e.pendingProps),i=wt(r.type,i),zf(t,e,r,i,n);case 15:return E_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wt(r,i),Lo(t,e),e.tag=1,Ye(r)?(t=!0,ea(e)):t=!1,Xr(e,n),v_(e,r,i),Xu(e,r,i,n),tc(null,e,r,!0,t,n);case 19:return k_(t,e,n);case 22:return S_(t,e,n)}throw Error(N(156,e.tag))};function W_(t,e){return mg(t,e)}function FS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(t,e,n,r){return new FS(t,e,n,r)}function Pd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function US(t){if(typeof t=="function")return Pd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kc)return 11;if(t===Qc)return 14}return 2}function Dn(t,e){var n=t.alternate;return n===null?(n=dt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function jo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Pd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Mr:return ar(n.children,i,s,e);case qc:o=8,i|=8;break;case Su:return t=dt(12,n,e,i|2),t.elementType=Su,t.lanes=s,t;case Cu:return t=dt(13,n,e,i),t.elementType=Cu,t.lanes=s,t;case Iu:return t=dt(19,n,e,i),t.elementType=Iu,t.lanes=s,t;case Xm:return Xa(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ym:o=10;break e;case Jm:o=9;break e;case Kc:o=11;break e;case Qc:o=14;break e;case gn:o=16,r=null;break e}throw Error(N(130,t==null?t:typeof t,""))}return e=dt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ar(t,e,n,r){return t=dt(7,t,r,e),t.lanes=n,t}function Xa(t,e,n,r){return t=dt(22,t,r,e),t.elementType=Xm,t.lanes=n,t.stateNode={isHidden:!1},t}function Zl(t,e,n){return t=dt(6,t,null,e),t.lanes=n,t}function eu(t,e,n){return e=dt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function zS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ll(0),this.expirationTimes=Ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ll(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function xd(t,e,n,r,i,s,o,a,l){return t=new zS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=dt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fd(s),t}function BS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function $_(t){if(!t)return Bn;t=t._reactInternals;e:{if(Tr(t)!==t||t.tag!==1)throw Error(N(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ye(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(N(171))}if(t.tag===1){var n=t.type;if(Ye(n))return $g(t,n,e)}return e}function V_(t,e,n,r,i,s,o,a,l){return t=xd(n,r,!0,t,i,s,o,a,l),t.context=$_(null),n=t.current,r=Ue(),i=Ln(n),s=tn(r,i),s.callback=e??null,bn(n,s,i),t.current.lanes=i,$s(t,i,r),Je(t,r),t}function Za(t,e,n,r){var i=e.current,s=Ue(),o=Ln(i);return n=$_(n),e.context===null?e.context=n:e.pendingContext=n,e=tn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=bn(i,e,o),t!==null&&(kt(t,i,o,s),Ao(t,i,o)),o}function fa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Xf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ad(t,e){Xf(t,e),(t=t.alternate)&&Xf(t,e)}function WS(){return null}var H_=typeof reportError=="function"?reportError:function(t){console.error(t)};function bd(t){this._internalRoot=t}el.prototype.render=bd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(N(409));Za(t,e,null,null)};el.prototype.unmount=bd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;mr(function(){Za(null,t,null,null)}),e[sn]=null}};function el(t){this._internalRoot=t}el.prototype.unstable_scheduleHydration=function(t){if(t){var e=Sg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<vn.length&&e!==0&&e<vn[n].priority;n++);vn.splice(n,0,t),n===0&&Ig(t)}};function Od(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function tl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Zf(){}function $S(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=fa(o);s.call(u)}}var o=V_(e,r,t,0,null,!1,!1,"",Zf);return t._reactRootContainer=o,t[sn]=o.current,_s(t.nodeType===8?t.parentNode:t),mr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=fa(l);a.call(u)}}var l=xd(t,0,!1,null,null,!1,!1,"",Zf);return t._reactRootContainer=l,t[sn]=l.current,_s(t.nodeType===8?t.parentNode:t),mr(function(){Za(e,l,n,r)}),l}function nl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=fa(o);a.call(l)}}Za(e,o,t,i)}else o=$S(n,e,t,i,r);return fa(o)}wg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Vi(e.pendingLanes);n!==0&&(Xc(e,n|1),Je(e,me()),!(q&6)&&(di=me()+500,qn()))}break;case 13:mr(function(){var r=on(t,1);if(r!==null){var i=Ue();kt(r,t,1,i)}}),Ad(t,1)}};Zc=function(t){if(t.tag===13){var e=on(t,134217728);if(e!==null){var n=Ue();kt(e,t,134217728,n)}Ad(t,134217728)}};Eg=function(t){if(t.tag===13){var e=Ln(t),n=on(t,e);if(n!==null){var r=Ue();kt(n,t,e,r)}Ad(t,e)}};Sg=function(){return Y};Cg=function(t,e){var n=Y;try{return Y=t,e()}finally{Y=n}};Lu=function(t,e,n){switch(e){case"input":if(Ru(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ga(r);if(!i)throw Error(N(90));eg(r),Ru(r,i)}}}break;case"textarea":ng(t,n);break;case"select":e=n.value,e!=null&&Kr(t,!!n.multiple,e,!1)}};ug=kd;cg=mr;var VS={usingClientEntryPoint:!1,Events:[Hs,zr,Ga,ag,lg,kd]},Mi={findFiberByHostInstance:er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},HS={bundleType:Mi.bundleType,version:Mi.version,rendererPackageName:Mi.rendererPackageName,rendererConfig:Mi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=fg(t),t===null?null:t.stateNode},findFiberByHostInstance:Mi.findFiberByHostInstance||WS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wo.isDisabled&&wo.supportsFiber)try{Wa=wo.inject(HS),Ft=wo}catch{}}at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=VS;at.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Od(e))throw Error(N(200));return BS(t,e,null,n)};at.createRoot=function(t,e){if(!Od(t))throw Error(N(299));var n=!1,r="",i=H_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=xd(t,1,!1,null,null,n,!1,r,i),t[sn]=e.current,_s(t.nodeType===8?t.parentNode:t),new bd(e)};at.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(N(188)):(t=Object.keys(t).join(","),Error(N(268,t)));return t=fg(e),t=t===null?null:t.stateNode,t};at.flushSync=function(t){return mr(t)};at.hydrate=function(t,e,n){if(!tl(e))throw Error(N(200));return nl(null,t,e,!0,n)};at.hydrateRoot=function(t,e,n){if(!Od(t))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=H_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=V_(e,null,t,1,n??null,i,!1,s,o),t[sn]=e.current,_s(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new el(e)};at.render=function(t,e,n){if(!tl(e))throw Error(N(200));return nl(null,t,e,!1,n)};at.unmountComponentAtNode=function(t){if(!tl(t))throw Error(N(40));return t._reactRootContainer?(mr(function(){nl(null,null,t,!1,function(){t._reactRootContainer=null,t[sn]=null})}),!0):!1};at.unstable_batchedUpdates=kd;at.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!tl(n))throw Error(N(200));if(t==null||t._reactInternals===void 0)throw Error(N(38));return nl(t,e,n,!1,r)};at.version="18.3.1-next-f1338f8080-20240426";function G_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(G_)}catch(t){console.error(t)}}G_(),Gm.exports=at;var GS=Gm.exports,q_,ep=GS;q_=ep.createRoot,ep.hydrateRoot;var K_={},Q_={},Y_={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=function(){for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];if(typeof window<"u"){var a;typeof window.gtag>"u"&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)}),(a=window).gtag.apply(a,s)}},n=e;t.default=n})(Y_);var J_={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var e=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function n(a){return a.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,function(l,u,d){return u>0&&u+l.length!==d.length&&l.search(e)>-1&&d.charAt(u-2)!==":"&&(d.charAt(u+l.length)!=="-"||d.charAt(u-1)==="-")&&d.charAt(u-1).search(/[^\s-]/)<0?l.toLowerCase():l.substr(1).search(/[A-Z]|\../)>-1?l:l.charAt(0).toUpperCase()+l.substr(1)})}function r(a){return typeof a=="string"&&a.indexOf("@")!==-1}var i="REDACTED (Potential Email Address)";function s(a){return r(a)?(console.warn("This arg looks like an email address, redacting."),i):a}function o(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,d=a||"";return l&&(d=n(a)),u&&(d=s(d)),d}})(J_);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.GA4=void 0;var e=o(Y_),n=o(J_),r=["eventCategory","eventAction","eventLabel","eventValue","hitType"],i=["title","location"],s=["page","hitType"];function o(P){return P&&P.__esModule?P:{default:P}}function a(P,C){if(P==null)return{};var T=l(P,C),k,S;if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(P);for(S=0;S<R.length;S++)k=R[S],!(C.indexOf(k)>=0)&&Object.prototype.propertyIsEnumerable.call(P,k)&&(T[k]=P[k])}return T}function l(P,C){if(P==null)return{};var T={},k=Object.keys(P),S,R;for(R=0;R<k.length;R++)S=k[R],!(C.indexOf(S)>=0)&&(T[S]=P[S]);return T}function u(P){"@babel/helpers - typeof";return u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C},u(P)}function d(P){return g(P)||h(P)||p(P)||c()}function c(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(P){if(typeof Symbol<"u"&&P[Symbol.iterator]!=null||P["@@iterator"]!=null)return Array.from(P)}function g(P){if(Array.isArray(P))return v(P)}function m(P,C){var T=Object.keys(P);if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(P);C&&(k=k.filter(function(S){return Object.getOwnPropertyDescriptor(P,S).enumerable})),T.push.apply(T,k)}return T}function y(P){for(var C=1;C<arguments.length;C++){var T=arguments[C]!=null?arguments[C]:{};C%2?m(Object(T),!0).forEach(function(k){F(P,k,T[k])}):Object.getOwnPropertyDescriptors?Object.defineProperties(P,Object.getOwnPropertyDescriptors(T)):m(Object(T)).forEach(function(k){Object.defineProperty(P,k,Object.getOwnPropertyDescriptor(T,k))})}return P}function I(P,C){return A(P)||E(P,C)||p(P,C)||_()}function _(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(P,C){if(P){if(typeof P=="string")return v(P,C);var T=Object.prototype.toString.call(P).slice(8,-1);if(T==="Object"&&P.constructor&&(T=P.constructor.name),T==="Map"||T==="Set")return Array.from(P);if(T==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T))return v(P,C)}}function v(P,C){(C==null||C>P.length)&&(C=P.length);for(var T=0,k=new Array(C);T<C;T++)k[T]=P[T];return k}function E(P,C){var T=P==null?null:typeof Symbol<"u"&&P[Symbol.iterator]||P["@@iterator"];if(T!=null){var k,S,R,M,B=[],V=!0,ue=!1;try{if(R=(T=T.call(P)).next,C!==0)for(;!(V=(k=R.call(T)).done)&&(B.push(k.value),B.length!==C);V=!0);}catch(se){ue=!0,S=se}finally{try{if(!V&&T.return!=null&&(M=T.return(),Object(M)!==M))return}finally{if(ue)throw S}}return B}}function A(P){if(Array.isArray(P))return P}function O(P,C){if(!(P instanceof C))throw new TypeError("Cannot call a class as a function")}function b(P,C){for(var T=0;T<C.length;T++){var k=C[T];k.enumerable=k.enumerable||!1,k.configurable=!0,"value"in k&&(k.writable=!0),Object.defineProperty(P,z(k.key),k)}}function L(P,C,T){return C&&b(P.prototype,C),Object.defineProperty(P,"prototype",{writable:!1}),P}function F(P,C,T){return C=z(C),C in P?Object.defineProperty(P,C,{value:T,enumerable:!0,configurable:!0,writable:!0}):P[C]=T,P}function z(P){var C=et(P,"string");return u(C)==="symbol"?C:String(C)}function et(P,C){if(u(P)!=="object"||P===null)return P;var T=P[Symbol.toPrimitive];if(T!==void 0){var k=T.call(P,C||"default");if(u(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return(C==="string"?String:Number)(P)}var fn=function(){function P(){var C=this;O(this,P),F(this,"reset",function(){C.isInitialized=!1,C._testMode=!1,C._currentMeasurementId,C._hasLoadedGA=!1,C._isQueuing=!1,C._queueGtag=[]}),F(this,"_gtag",function(){for(var T=arguments.length,k=new Array(T),S=0;S<T;S++)k[S]=arguments[S];C._testMode||C._isQueuing?C._queueGtag.push(k):e.default.apply(void 0,k)}),F(this,"_loadGA",function(T,k){var S=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"https://www.googletagmanager.com/gtag/js";if(!(typeof window>"u"||typeof document>"u")&&!C._hasLoadedGA){var R=document.createElement("script");R.async=!0,R.src="".concat(S,"?id=").concat(T),k&&R.setAttribute("nonce",k),document.body.appendChild(R),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},C._hasLoadedGA=!0}}),F(this,"_toGtagOptions",function(T){if(T){var k={cookieUpdate:"cookie_update",cookieExpires:"cookie_expires",cookieDomain:"cookie_domain",cookieFlags:"cookie_flags",userId:"user_id",clientId:"client_id",anonymizeIp:"anonymize_ip",contentGroup1:"content_group1",contentGroup2:"content_group2",contentGroup3:"content_group3",contentGroup4:"content_group4",contentGroup5:"content_group5",allowAdFeatures:"allow_google_signals",allowAdPersonalizationSignals:"allow_ad_personalization_signals",nonInteraction:"non_interaction",page:"page_path",hitCallback:"event_callback"},S=Object.entries(T).reduce(function(R,M){var B=I(M,2),V=B[0],ue=B[1];return k[V]?R[k[V]]=ue:R[V]=ue,R},{});return S}}),F(this,"initialize",function(T){var k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!T)throw new Error("Require GA_MEASUREMENT_ID");var S=typeof T=="string"?[{trackingId:T}]:T;C._currentMeasurementId=S[0].trackingId;var R=k.gaOptions,M=k.gtagOptions,B=k.nonce,V=k.testMode,ue=V===void 0?!1:V,se=k.gtagUrl;if(C._testMode=ue,ue||C._loadGA(C._currentMeasurementId,B,se),C.isInitialized||(C._gtag("js",new Date),S.forEach(function(Vt){var Vh=y(y(y({},C._toGtagOptions(y(y({},R),Vt.gaOptions))),M),Vt.gtagOptions);Object.keys(Vh).length?C._gtag("config",Vt.trackingId,Vh):C._gtag("config",Vt.trackingId)})),C.isInitialized=!0,!ue){var br=d(C._queueGtag);for(C._queueGtag=[],C._isQueuing=!1;br.length;){var bt=br.shift();C._gtag.apply(C,d(bt)),bt[0]==="get"&&(C._isQueuing=!0)}}}),F(this,"set",function(T){if(!T){console.warn("`fieldsObject` is required in .set()");return}if(u(T)!=="object"){console.warn("Expected `fieldsObject` arg to be an Object");return}Object.keys(T).length===0&&console.warn("empty `fieldsObject` given to .set()"),C._gaCommand("set",T)}),F(this,"_gaCommandSendEvent",function(T,k,S,R,M){C._gtag("event",k,y(y({event_category:T,event_label:S,value:R},M&&{non_interaction:M.nonInteraction}),C._toGtagOptions(M)))}),F(this,"_gaCommandSendEventParameters",function(){for(var T=arguments.length,k=new Array(T),S=0;S<T;S++)k[S]=arguments[S];if(typeof k[0]=="string")C._gaCommandSendEvent.apply(C,d(k.slice(1)));else{var R=k[0],M=R.eventCategory,B=R.eventAction,V=R.eventLabel,ue=R.eventValue;R.hitType;var se=a(R,r);C._gaCommandSendEvent(M,B,V,ue,se)}}),F(this,"_gaCommandSendTiming",function(T,k,S,R){C._gtag("event","timing_complete",{name:k,value:S,event_category:T,event_label:R})}),F(this,"_gaCommandSendPageview",function(T,k){if(k&&Object.keys(k).length){var S=C._toGtagOptions(k),R=S.title,M=S.location,B=a(S,i);C._gtag("event","page_view",y(y(y(y({},T&&{page_path:T}),R&&{page_title:R}),M&&{page_location:M}),B))}else T?C._gtag("event","page_view",{page_path:T}):C._gtag("event","page_view")}),F(this,"_gaCommandSendPageviewParameters",function(){for(var T=arguments.length,k=new Array(T),S=0;S<T;S++)k[S]=arguments[S];if(typeof k[0]=="string")C._gaCommandSendPageview.apply(C,d(k.slice(1)));else{var R=k[0],M=R.page;R.hitType;var B=a(R,s);C._gaCommandSendPageview(M,B)}}),F(this,"_gaCommandSend",function(){for(var T=arguments.length,k=new Array(T),S=0;S<T;S++)k[S]=arguments[S];var R=typeof k[0]=="string"?k[0]:k[0].hitType;switch(R){case"event":C._gaCommandSendEventParameters.apply(C,k);break;case"pageview":C._gaCommandSendPageviewParameters.apply(C,k);break;case"timing":C._gaCommandSendTiming.apply(C,d(k.slice(1)));break;case"screenview":case"transaction":case"item":case"social":case"exception":console.warn("Unsupported send command: ".concat(R));break;default:console.warn("Send command doesn't exist: ".concat(R))}}),F(this,"_gaCommandSet",function(){for(var T=arguments.length,k=new Array(T),S=0;S<T;S++)k[S]=arguments[S];typeof k[0]=="string"&&(k[0]=F({},k[0],k[1])),C._gtag("set",C._toGtagOptions(k[0]))}),F(this,"_gaCommand",function(T){for(var k=arguments.length,S=new Array(k>1?k-1:0),R=1;R<k;R++)S[R-1]=arguments[R];switch(T){case"send":C._gaCommandSend.apply(C,S);break;case"set":C._gaCommandSet.apply(C,S);break;default:console.warn("Command doesn't exist: ".concat(T))}}),F(this,"ga",function(){for(var T=arguments.length,k=new Array(T),S=0;S<T;S++)k[S]=arguments[S];if(typeof k[0]=="string")C._gaCommand.apply(C,k);else{var R=k[0];C._gtag("get",C._currentMeasurementId,"client_id",function(M){C._isQueuing=!1;var B=C._queueGtag;for(R({get:function(se){return se==="clientId"?M:se==="trackingId"?C._currentMeasurementId:se==="apiVersion"?"1":void 0}});B.length;){var V=B.shift();C._gtag.apply(C,d(V))}}),C._isQueuing=!0}return C.ga}),F(this,"event",function(T,k){if(typeof T=="string")C._gtag("event",T,C._toGtagOptions(k));else{var S=T.action,R=T.category,M=T.label,B=T.value,V=T.nonInteraction,ue=T.transport;if(!R||!S){console.warn("args.category AND args.action are required in event()");return}var se={hitType:"event",eventCategory:(0,n.default)(R),eventAction:(0,n.default)(S)};M&&(se.eventLabel=(0,n.default)(M)),typeof B<"u"&&(typeof B!="number"?console.warn("Expected `args.value` arg to be a Number."):se.eventValue=B),typeof V<"u"&&(typeof V!="boolean"?console.warn("`args.nonInteraction` must be a boolean."):se.nonInteraction=V),typeof ue<"u"&&(typeof ue!="string"?console.warn("`args.transport` must be a string."):(["beacon","xhr","image"].indexOf(ue)===-1&&console.warn("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),se.transport=ue)),C._gaCommand("send",se)}}),F(this,"send",function(T){C._gaCommand("send",T)}),this.reset()}return L(P,[{key:"gtag",value:function(){this._gtag.apply(this,arguments)}}]),P}();t.GA4=fn;var Qn=new fn;t.default=Qn})(Q_);(function(t){function e(a){"@babel/helpers - typeof";return e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},e(a)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ReactGAImplementation=void 0;var n=i(Q_);function r(a){if(typeof WeakMap!="function")return null;var l=new WeakMap,u=new WeakMap;return(r=function(c){return c?u:l})(a)}function i(a,l){if(a&&a.__esModule)return a;if(a===null||e(a)!=="object"&&typeof a!="function")return{default:a};var u=r(l);if(u&&u.has(a))return u.get(a);var d={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in a)if(h!=="default"&&Object.prototype.hasOwnProperty.call(a,h)){var g=c?Object.getOwnPropertyDescriptor(a,h):null;g&&(g.get||g.set)?Object.defineProperty(d,h,g):d[h]=a[h]}return d.default=a,u&&u.set(a,d),d}var s=n.GA4;t.ReactGAImplementation=s;var o=n.default;t.default=o})(K_);const X_=Uc(K_);/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ks(){return ks=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ks.apply(this,arguments)}var kn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(kn||(kn={}));const tp="popstate";function qS(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=kr(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),fc("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:Z_(s))}function r(i,s){Ld(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return QS(e,n,r,t)}function Se(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ld(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function KS(){return Math.random().toString(36).substr(2,8)}function np(t,e){return{usr:t.state,key:t.key,idx:e}}function fc(t,e,n,r){return n===void 0&&(n=null),ks({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?kr(e):e,{state:n,key:e&&e.key||r||KS()})}function Z_(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function kr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function QS(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=kn.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(ks({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function c(){a=kn.Pop;let I=d(),_=I==null?null:I-u;u=I,l&&l({action:a,location:y.location,delta:_})}function h(I,_){a=kn.Push;let p=fc(y.location,I,_);n&&n(p,I),u=d()+1;let v=np(p,u),E=y.createHref(p);try{o.pushState(v,"",E)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;i.location.assign(E)}s&&l&&l({action:a,location:y.location,delta:1})}function g(I,_){a=kn.Replace;let p=fc(y.location,I,_);n&&n(p,I),u=d();let v=np(p,u),E=y.createHref(p);o.replaceState(v,"",E),s&&l&&l({action:a,location:y.location,delta:0})}function m(I){let _=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof I=="string"?I:Z_(I);return p=p.replace(/ $/,"%20"),Se(_,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,_)}let y={get action(){return a},get location(){return t(i,o)},listen(I){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(tp,c),l=I,()=>{i.removeEventListener(tp,c),l=null}},createHref(I){return e(i,I)},createURL:m,encodeLocation(I){let _=m(I);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:h,replace:g,go(I){return o.go(I)}};return y}var rp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(rp||(rp={}));function YS(t,e,n){return n===void 0&&(n="/"),JS(t,e,n,!1)}function JS(t,e,n,r){let i=typeof e=="string"?kr(e):e,s=nv(i.pathname||"/",n);if(s==null)return null;let o=ev(t);XS(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=uC(s);a=aC(o[l],u,r)}return a}function ev(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Se(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=lr([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(Se(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),ev(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:sC(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of tv(s.path))i(s,o,l)}),e}function tv(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=tv(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function XS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:oC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ZS=/^:[\w-]+$/,eC=3,tC=2,nC=1,rC=10,iC=-2,ip=t=>t==="*";function sC(t,e){let n=t.split("/"),r=n.length;return n.some(ip)&&(r+=iC),e&&(r+=tC),n.filter(i=>!ip(i)).reduce((i,s)=>i+(ZS.test(s)?eC:s===""?nC:rC),r)}function oC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function aC(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",c=sp({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),h=l.route;if(!c&&u&&n&&!r[r.length-1].route.index&&(c=sp({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!c)return null;Object.assign(i,c.params),o.push({params:i,pathname:lr([s,c.pathname]),pathnameBase:mC(lr([s,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(s=lr([s,c.pathnameBase]))}return o}function sp(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=lC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:h,isOptional:g}=d;if(h==="*"){let y=a[c]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const m=a[c];return g&&!m?u[h]=void 0:u[h]=(m||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function lC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ld(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function uC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ld(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function nv(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function cC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?kr(t):t;return{pathname:n?n.startsWith("/")?n:dC(n,e):e,search:gC(r),hash:_C(i)}}function dC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function tu(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function hC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function fC(t,e){let n=hC(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function pC(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=kr(t):(i=ks({},t),Se(!i.pathname||!i.pathname.includes("?"),tu("?","pathname","search",i)),Se(!i.pathname||!i.pathname.includes("#"),tu("#","pathname","hash",i)),Se(!i.search||!i.search.includes("#"),tu("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let c=e.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),c-=1;i.pathname=h.join("/")}a=c>=0?e[c]:"/"}let l=cC(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const lr=t=>t.join("/").replace(/\/\/+/g,"/"),mC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),gC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,_C=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function vC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const rv=["post","put","patch","delete"];new Set(rv);const yC=["get",...rv];new Set(yC);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rs(){return Rs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Rs.apply(this,arguments)}const Dd=w.createContext(null),wC=w.createContext(null),rl=w.createContext(null),il=w.createContext(null),Si=w.createContext({outlet:null,matches:[],isDataRoute:!1}),iv=w.createContext(null);function sl(){return w.useContext(il)!=null}function Md(){return sl()||Se(!1),w.useContext(il).location}function sv(t){w.useContext(rl).static||w.useLayoutEffect(t)}function jd(){let{isDataRoute:t}=w.useContext(Si);return t?OC():EC()}function EC(){sl()||Se(!1);let t=w.useContext(Dd),{basename:e,future:n,navigator:r}=w.useContext(rl),{matches:i}=w.useContext(Si),{pathname:s}=Md(),o=JSON.stringify(fC(i,n.v7_relativeSplatPath)),a=w.useRef(!1);return sv(()=>{a.current=!0}),w.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=pC(u,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:lr([e,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[e,r,o,s,t])}function SC(t,e){return CC(t,e)}function CC(t,e,n,r){sl()||Se(!1);let{navigator:i}=w.useContext(rl),{matches:s}=w.useContext(Si),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Md(),d;if(e){var c;let I=typeof e=="string"?kr(e):e;l==="/"||(c=I.pathname)!=null&&c.startsWith(l)||Se(!1),d=I}else d=u;let h=d.pathname||"/",g=h;if(l!=="/"){let I=l.replace(/^\//,"").split("/");g="/"+h.replace(/^\//,"").split("/").slice(I.length).join("/")}let m=YS(t,{pathname:g}),y=NC(m&&m.map(I=>Object.assign({},I,{params:Object.assign({},a,I.params),pathname:lr([l,i.encodeLocation?i.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?l:lr([l,i.encodeLocation?i.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),s,n,r);return e&&y?w.createElement(il.Provider,{value:{location:Rs({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:kn.Pop}},y):y}function IC(){let t=bC(),e=vC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},e),n?w.createElement("pre",{style:i},n):null,null)}const TC=w.createElement(IC,null);class kC extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?w.createElement(Si.Provider,{value:this.props.routeContext},w.createElement(iv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function RC(t){let{routeContext:e,match:n,children:r}=t,i=w.useContext(Dd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(Si.Provider,{value:e},r)}function NC(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id])!==void 0);d>=0||Se(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let c=o[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:h,errors:g}=n,m=c.route.loader&&h[c.route.id]===void 0&&(!g||g[c.route.id]===void 0);if(c.route.lazy||m){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,c,h)=>{let g,m=!1,y=null,I=null;n&&(g=a&&c.route.id?a[c.route.id]:void 0,y=c.route.errorElement||TC,l&&(u<0&&h===0?(m=!0,I=null):u===h&&(m=!0,I=c.route.hydrateFallbackElement||null)));let _=e.concat(o.slice(0,h+1)),p=()=>{let v;return g?v=y:m?v=I:c.route.Component?v=w.createElement(c.route.Component,null):c.route.element?v=c.route.element:v=d,w.createElement(RC,{match:c,routeContext:{outlet:d,matches:_,isDataRoute:n!=null},children:v})};return n&&(c.route.ErrorBoundary||c.route.errorElement||h===0)?w.createElement(kC,{location:n.location,revalidation:n.revalidation,component:y,error:g,children:p(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):p()},null)}var ov=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(ov||{}),pa=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(pa||{});function PC(t){let e=w.useContext(Dd);return e||Se(!1),e}function xC(t){let e=w.useContext(wC);return e||Se(!1),e}function AC(t){let e=w.useContext(Si);return e||Se(!1),e}function av(t){let e=AC(),n=e.matches[e.matches.length-1];return n.route.id||Se(!1),n.route.id}function bC(){var t;let e=w.useContext(iv),n=xC(pa.UseRouteError),r=av(pa.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function OC(){let{router:t}=PC(ov.UseNavigateStable),e=av(pa.UseNavigateStable),n=w.useRef(!1);return sv(()=>{n.current=!0}),w.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Rs({fromRouteId:e},s)))},[t,e])}function Fo(t){Se(!1)}function LC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=kn.Pop,navigator:s,static:o=!1,future:a}=t;sl()&&Se(!1);let l=e.replace(/^\/*/,"/"),u=w.useMemo(()=>({basename:l,navigator:s,static:o,future:Rs({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=kr(r));let{pathname:d="/",search:c="",hash:h="",state:g=null,key:m="default"}=r,y=w.useMemo(()=>{let I=nv(d,l);return I==null?null:{location:{pathname:I,search:c,hash:h,state:g,key:m},navigationType:i}},[l,d,c,h,g,m,i]);return y==null?null:w.createElement(rl.Provider,{value:u},w.createElement(il.Provider,{children:n,value:y}))}function DC(t){let{children:e,location:n}=t;return SC(pc(e),n)}new Promise(()=>{});function pc(t,e){e===void 0&&(e=[]);let n=[];return w.Children.forEach(t,(r,i)=>{if(!w.isValidElement(r))return;let s=[...e,i];if(r.type===w.Fragment){n.push.apply(n,pc(r.props.children,s));return}r.type!==Fo&&Se(!1),!r.props.index||!r.props.children||Se(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=pc(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const MC="6";try{window.__reactRouterVersion=MC}catch{}const jC="startTransition",op=Dw[jC];function FC(t){let{basename:e,children:n,future:r,window:i}=t,s=w.useRef();s.current==null&&(s.current=qS({window:i,v5Compat:!0}));let o=s.current,[a,l]=w.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=w.useCallback(c=>{u&&op?op(()=>l(c)):l(c)},[l,u]);return w.useLayoutEffect(()=>o.listen(d),[o,d]),w.createElement(LC,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var ap;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(ap||(ap={}));var lp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(lp||(lp={}));const UC="modulepreload",zC=function(t){return"/"+t},up={},Wt=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.allSettled(n.map(a=>{if(a=zC(a),a in up)return;up[a]=!0;const l=a.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${u}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":UC,l||(d.as="script"),d.crossOrigin="",d.href=a,o&&d.setAttribute("nonce",o),document.head.appendChild(d),l)return new Promise((c,h)=>{d.addEventListener("load",c),d.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${a}`)))})}))}return i.then(s=>{for(const o of s||[]){if(o.status!=="rejected")continue;const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o.reason,window.dispatchEvent(a),!a.defaultPrevented)throw o.reason}return e()})};var cp={};/**
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
 */const lv={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const x=function(t,e){if(!t)throw Ci(e)},Ci=function(t){return new Error("Firebase Database ("+lv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const uv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},BC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Fd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=s>>2,c=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(h=64)),r.push(n[d],n[c],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(uv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):BC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||c==null)throw new WC;const h=s<<2|a>>4;if(r.push(h),u!==64){const g=a<<4&240|u>>2;if(r.push(g),c!==64){const m=u<<6&192|c;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class WC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cv=function(t){const e=uv(t);return Fd.encodeByteArray(e,!0)},ma=function(t){return cv(t).replace(/\./g,"")},ga=function(t){try{return Fd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function $C(t){return dv(void 0,t)}function dv(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!VC(n)||(t[n]=dv(t[n],e[n]));return t}function VC(t){return t!=="__proto__"}/**
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
 */function HC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const GC=()=>HC().__FIREBASE_DEFAULTS__,qC=()=>{if(typeof process>"u"||typeof cp>"u")return;const t=cp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},KC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ga(t[1]);return e&&JSON.parse(e)},Ud=()=>{try{return GC()||qC()||KC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},hv=t=>{var e,n;return(n=(e=Ud())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},fv=t=>{const e=hv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},pv=()=>{var t;return(t=Ud())===null||t===void 0?void 0:t.config},mv=t=>{var e;return(e=Ud())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class qs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function gv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ma(JSON.stringify(n)),ma(JSON.stringify(o)),""].join(".")}/**
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
 */function Be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function _v(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function vv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function QC(){const t=Be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function yv(){return lv.NODE_ADMIN===!0}function wv(){try{return typeof indexedDB=="object"}catch{return!1}}function Ev(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function YC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const JC="FirebaseError";class At extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=JC,Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rr.prototype.create)}}class Rr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?XC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new At(i,a,r)}}function XC(t,e){return t.replace(ZC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ZC=/\{\$([^}]+)}/g;/**
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
 */function Ns(t){return JSON.parse(t)}function we(t){return JSON.stringify(t)}/**
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
 */const Sv=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ns(ga(s[0])||""),n=Ns(ga(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},e1=function(t){const e=Sv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},t1=function(t){const e=Sv(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function $t(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function hi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function mc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function _a(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Ps(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(dp(s)&&dp(o)){if(!Ps(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function dp(t){return t!==null&&typeof t=="object"}/**
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
 */function Ii(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class n1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=a^s&(o^a),d=1518500249):(u=s^o^a,d=1859775393):c<60?(u=s&o|a&(s|o),d=2400959708):(u=s^o^a,d=3395469782);const h=(i<<5|i>>>27)+u+l+d+r[c]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function r1(t,e){const n=new i1(t,e);return n.subscribe.bind(n)}class i1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");s1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=nu),i.error===void 0&&(i.error=nu),i.complete===void 0&&(i.complete=nu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function s1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function nu(){}function ol(t,e){return`${t} failed: ${e} argument `}/**
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
 */const o1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,x(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},al=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const a1=1e3,l1=2,u1=4*60*60*1e3,c1=.5;function hp(t,e=a1,n=l1){const r=e*Math.pow(n,t),i=Math.round(c1*r*(Math.random()-.5)*2);return Math.min(u1,r+i)}/**
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
 */function ge(t){return t&&t._delegate?t._delegate:t}class gt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Xn="[DEFAULT]";/**
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
 */class d1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new qs;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(f1(e))try{this.getOrInitializeService({instanceIdentifier:Xn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Xn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xn){return this.instances.has(e)}getOptions(e=Xn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:h1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Xn){return this.component?this.component.multipleInstances?e:Xn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function h1(t){return t===Xn?void 0:t}function f1(t){return t.instantiationMode==="EAGER"}/**
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
 */class p1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new d1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const m1={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},g1=J.INFO,_1={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},v1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=_1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ll{constructor(e){this.name=e,this._logLevel=g1,this._logHandler=v1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?m1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const y1=(t,e)=>e.some(n=>t instanceof n);let fp,pp;function w1(){return fp||(fp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function E1(){return pp||(pp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cv=new WeakMap,gc=new WeakMap,Iv=new WeakMap,ru=new WeakMap,Bd=new WeakMap;function S1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Mn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Cv.set(n,t)}).catch(()=>{}),Bd.set(e,t),e}function C1(t){if(gc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});gc.set(t,e)}let _c={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Iv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function I1(t){_c=t(_c)}function T1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(iu(this),e,...n);return Iv.set(r,e.sort?e.sort():[e]),Mn(r)}:E1().includes(t)?function(...e){return t.apply(iu(this),e),Mn(Cv.get(this))}:function(...e){return Mn(t.apply(iu(this),e))}}function k1(t){return typeof t=="function"?T1(t):(t instanceof IDBTransaction&&C1(t),y1(t,w1())?new Proxy(t,_c):t)}function Mn(t){if(t instanceof IDBRequest)return S1(t);if(ru.has(t))return ru.get(t);const e=k1(t);return e!==t&&(ru.set(t,e),Bd.set(e,t)),e}const iu=t=>Bd.get(t);function Tv(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Mn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Mn(o.result),l.oldVersion,l.newVersion,Mn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const R1=["get","getKey","getAll","getAllKeys","count"],N1=["put","add","delete","clear"],su=new Map;function mp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(su.get(e))return su.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=N1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||R1.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return su.set(e,s),s}I1(t=>({...t,get:(e,n,r)=>mp(e,n)||t.get(e,n,r),has:(e,n)=>!!mp(e,n)||t.has(e,n)}));/**
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
 */class P1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(x1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function x1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vc="@firebase/app",gp="0.10.10";/**
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
 */const ln=new ll("@firebase/app"),A1="@firebase/app-compat",b1="@firebase/analytics-compat",O1="@firebase/analytics",L1="@firebase/app-check-compat",D1="@firebase/app-check",M1="@firebase/auth",j1="@firebase/auth-compat",F1="@firebase/database",U1="@firebase/database-compat",z1="@firebase/functions",B1="@firebase/functions-compat",W1="@firebase/installations",$1="@firebase/installations-compat",V1="@firebase/messaging",H1="@firebase/messaging-compat",G1="@firebase/performance",q1="@firebase/performance-compat",K1="@firebase/remote-config",Q1="@firebase/remote-config-compat",Y1="@firebase/storage",J1="@firebase/storage-compat",X1="@firebase/firestore",Z1="@firebase/vertexai-preview",eI="@firebase/firestore-compat",tI="firebase",nI="10.13.1";/**
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
 */const yc="[DEFAULT]",rI={[vc]:"fire-core",[A1]:"fire-core-compat",[O1]:"fire-analytics",[b1]:"fire-analytics-compat",[D1]:"fire-app-check",[L1]:"fire-app-check-compat",[M1]:"fire-auth",[j1]:"fire-auth-compat",[F1]:"fire-rtdb",[U1]:"fire-rtdb-compat",[z1]:"fire-fn",[B1]:"fire-fn-compat",[W1]:"fire-iid",[$1]:"fire-iid-compat",[V1]:"fire-fcm",[H1]:"fire-fcm-compat",[G1]:"fire-perf",[q1]:"fire-perf-compat",[K1]:"fire-rc",[Q1]:"fire-rc-compat",[Y1]:"fire-gcs",[J1]:"fire-gcs-compat",[X1]:"fire-fst",[eI]:"fire-fst-compat",[Z1]:"fire-vertex","fire-js":"fire-js",[tI]:"fire-js-all"};/**
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
 */const va=new Map,iI=new Map,wc=new Map;function _p(t,e){try{t.container.addComponent(e)}catch(n){ln.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xt(t){const e=t.name;if(wc.has(e))return ln.debug(`There were multiple attempts to register component ${e}.`),!1;wc.set(e,t);for(const n of va.values())_p(n,t);for(const n of iI.values())_p(n,t);return!0}function Kn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Qt(t){return t.settings!==void 0}/**
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
 */const sI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jn=new Rr("app","Firebase",sI);/**
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
 */class oI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jn.create("app-deleted",{appName:this._name})}}/**
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
 */const Nr=nI;function kv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:yc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw jn.create("bad-app-name",{appName:String(i)});if(n||(n=pv()),!n)throw jn.create("no-options");const s=va.get(i);if(s){if(Ps(n,s.options)&&Ps(r,s.config))return s;throw jn.create("duplicate-app",{appName:i})}const o=new p1(i);for(const l of wc.values())o.addComponent(l);const a=new oI(n,r,o);return va.set(i,a),a}function ul(t=yc){const e=va.get(t);if(!e&&t===yc&&pv())return kv();if(!e)throw jn.create("no-app",{appName:t});return e}function Xe(t,e,n){var r;let i=(r=rI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ln.warn(a.join(" "));return}xt(new gt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const aI="firebase-heartbeat-database",lI=1,xs="firebase-heartbeat-store";let ou=null;function Rv(){return ou||(ou=Tv(aI,lI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(xs)}catch(n){console.warn(n)}}}}).catch(t=>{throw jn.create("idb-open",{originalErrorMessage:t.message})})),ou}async function uI(t){try{const n=(await Rv()).transaction(xs),r=await n.objectStore(xs).get(Nv(t));return await n.done,r}catch(e){if(e instanceof At)ln.warn(e.message);else{const n=jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ln.warn(n.message)}}}async function vp(t,e){try{const r=(await Rv()).transaction(xs,"readwrite");await r.objectStore(xs).put(e,Nv(t)),await r.done}catch(n){if(n instanceof At)ln.warn(n.message);else{const r=jn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ln.warn(r.message)}}}function Nv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const cI=1024,dI=30*24*60*60*1e3;class hI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=yp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=dI}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ln.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=yp(),{heartbeatsToSend:r,unsentEntries:i}=fI(this._heartbeatsCache.heartbeats),s=ma(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return ln.warn(n),""}}}function yp(){return new Date().toISOString().substring(0,10)}function fI(t,e=cI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),wp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),wp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class pI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wv()?Ev().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await uI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return vp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return vp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function wp(t){return ma(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function mI(t){xt(new gt("platform-logger",e=>new P1(e),"PRIVATE")),xt(new gt("heartbeat",e=>new hI(e),"PRIVATE")),Xe(vc,gp,t),Xe(vc,gp,"esm2017"),Xe("fire-js","")}mI("");var Ep={};const Sp="@firebase/database",Cp="1.0.7";/**
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
 */let Pv="";function gI(t){Pv=t}/**
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
 */class _I{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),we(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ns(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class vI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return $t(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const xv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new _I(e)}}catch{}return new vI},rr=xv("localStorage"),yI=xv("sessionStorage");/**
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
 */const ei=new ll("@firebase/database"),wI=function(){let t=1;return function(){return t++}}(),Av=function(t){const e=o1(t),n=new n1;n.update(e);const r=n.digest();return Fd.encodeByteArray(r)},Ks=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ks.apply(null,r):typeof r=="object"?e+=we(r):e+=r,e+=" "}return e};let ts=null,Ip=!0;const EI=function(t,e){x(!e,"Can't turn on custom loggers persistently."),ei.logLevel=J.VERBOSE,ts=ei.log.bind(ei)},Ne=function(...t){if(Ip===!0&&(Ip=!1,ts===null&&yI.get("logging_enabled")===!0&&EI()),ts){const e=Ks.apply(null,t);ts(e)}},Qs=function(t){return function(...e){Ne(t,...e)}},Ec=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ks(...t);ei.error(e)},un=function(...t){const e=`FIREBASE FATAL ERROR: ${Ks(...t)}`;throw ei.error(e),new Error(e)},ze=function(...t){const e="FIREBASE WARNING: "+Ks(...t);ei.warn(e)},SI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ze("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Wd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},CI=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},fi="[MIN_NAME]",gr="[MAX_NAME]",Pr=function(t,e){if(t===e)return 0;if(t===fi||e===gr)return-1;if(e===fi||t===gr)return 1;{const n=Tp(t),r=Tp(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},II=function(t,e){return t===e?0:t<e?-1:1},ji=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+we(e))},$d=function(t){if(typeof t!="object"||t===null)return we(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=we(e[r]),n+=":",n+=$d(t[e[r]]);return n+="}",n},bv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ae(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Ov=function(t){x(!Wd(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(l=0;l<64;l+=8){let h=parseInt(d.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},TI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},kI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function RI(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const NI=new RegExp("^-?(0*)\\d{1,10}$"),PI=-2147483648,xI=2147483647,Tp=function(t){if(NI.test(t)){const e=Number(t);if(e>=PI&&e<=xI)return e}return null},Ti=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ze("Exception was thrown by user callback.",n),e},Math.floor(0))}},AI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ns=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class bI{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ze(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class OI{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ne("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ze(e)}}class Uo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Uo.OWNER="owner";/**
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
 */const Vd="5",Lv="v",Dv="s",Mv="r",jv="f",Fv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Uv="ls",zv="p",Sc="ac",Bv="websocket",Wv="long_polling";/**
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
 */class $v{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=rr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&rr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function LI(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Vv(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let r;if(e===Bv)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Wv)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);LI(t)&&(n.ns=t.namespace);const i=[];return Ae(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class DI{constructor(){this.counters_={}}incrementCounter(e,n=1){$t(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return $C(this.counters_)}}/**
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
 */const au={},lu={};function Hd(t){const e=t.toString();return au[e]||(au[e]=new DI),au[e]}function MI(t,e){const n=t.toString();return lu[n]||(lu[n]=e()),lu[n]}/**
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
 */class jI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ti(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const kp="start",FI="close",UI="pLPCommand",zI="pRTLPCB",Hv="id",Gv="pw",qv="ser",BI="cb",WI="seg",$I="ts",VI="d",HI="dframe",Kv=1870,Qv=30,GI=Kv-Qv,qI=25e3,KI=3e4;class qr{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Qs(e),this.stats_=Hd(n),this.urlFn=l=>(this.appCheckToken&&(l[Sc]=this.appCheckToken),Vv(n,Wv,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new jI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(KI)),CI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Gd((...s)=>{const[o,a,l,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===kp)this.id=a,this.password=l;else if(o===FI)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[kp]="t",r[qv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[BI]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Lv]=Vd,this.transportSessionId&&(r[Dv]=this.transportSessionId),this.lastSessionId&&(r[Uv]=this.lastSessionId),this.applicationId&&(r[zv]=this.applicationId),this.appCheckToken&&(r[Sc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Fv.test(location.hostname)&&(r[Mv]=jv);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){qr.forceAllow_=!0}static forceDisallow(){qr.forceDisallow_=!0}static isAvailable(){return qr.forceAllow_?!0:!qr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!TI()&&!kI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=we(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=cv(n),i=bv(r,GI);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[HI]="t",r[Hv]=e,r[Gv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=we(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Gd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=wI(),window[UI+this.uniqueCallbackIdentifier]=e,window[zI+this.uniqueCallbackIdentifier]=n,this.myIFrame=Gd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ne("frame writing exception"),a.stack&&Ne(a.stack),Ne(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ne("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Hv]=this.myID,e[Gv]=this.myPW,e[qv]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Qv+r.length<=Kv;){const o=this.pendingSegs.shift();r=r+"&"+WI+i+"="+o.seg+"&"+$I+i+"="+o.ts+"&"+VI+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(qI)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ne("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const QI=16384,YI=45e3;let ya=null;typeof MozWebSocket<"u"?ya=MozWebSocket:typeof WebSocket<"u"&&(ya=WebSocket);class Ct{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Qs(this.connId),this.stats_=Hd(n),this.connURL=Ct.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Lv]=Vd,typeof location<"u"&&location.hostname&&Fv.test(location.hostname)&&(o[Mv]=jv),n&&(o[Dv]=n),r&&(o[Uv]=r),i&&(o[Sc]=i),s&&(o[zv]=s),Vv(e,Bv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,rr.set("previous_websocket_failure",!0);try{let r;yv(),this.mySock=new ya(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ct.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&ya!==null&&!Ct.forceDisallow_}static previouslyFailed(){return rr.isInMemoryStorage||rr.get("previous_websocket_failure")===!0}markConnectionHealthy(){rr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ns(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=we(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=bv(n,QI);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(YI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ct.responsesRequiredToBeHealthy=2;Ct.healthyTimeout=3e4;/**
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
 */class As{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[qr,Ct]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ct&&Ct.isAvailable();let r=n&&!Ct.previouslyFailed();if(e.webSocketOnly&&(n||ze("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Ct];else{const i=this.transports_=[];for(const s of As.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);As.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}As.globalTransportInitialized_=!1;/**
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
 */const JI=6e4,XI=5e3,ZI=10*1024,eT=100*1024,uu="t",Rp="d",tT="s",Np="r",nT="e",Pp="o",xp="a",Ap="n",bp="p",rT="h";class iT{constructor(e,n,r,i,s,o,a,l,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Qs("c:"+this.id+":"),this.transportManager_=new As(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ns(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>eT?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ZI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(uu in e){const n=e[uu];n===xp?this.upgradeIfSecondaryHealthy_():n===Np?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Pp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ji("t",e),r=ji("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:bp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:xp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ap,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ji("t",e),r=ji("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ji(uu,e);if(Rp in e){const r=e[Rp];if(n===rT){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Ap){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===tT?this.onConnectionShutdown_(r):n===Np?this.onReset_(r):n===nT?Ec("Server Error: "+r):n===Pp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ec("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Vd!==r&&ze("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ns(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(JI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ns(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(XI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:bp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(rr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Yv{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Jv{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class wa extends Jv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!zd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new wa}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Op=32,Lp=768;class X{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function K(){return new X("")}function W(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Wn(t){return t.pieces_.length-t.pieceNum_}function ee(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new X(t.pieces_,e)}function qd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function sT(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function bs(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Xv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new X(e,0)}function de(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof X)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new X(n,0)}function H(t){return t.pieceNum_>=t.pieces_.length}function Fe(t,e){const n=W(t),r=W(e);if(n===null)return e;if(n===r)return Fe(ee(t),ee(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function oT(t,e){const n=bs(t,0),r=bs(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Pr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Kd(t,e){if(Wn(t)!==Wn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ht(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Wn(t)>Wn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class aT{constructor(e,n){this.errorPrefix_=n,this.parts_=bs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=al(this.parts_[r]);Zv(this)}}function lT(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=al(e),Zv(t)}function uT(t){const e=t.parts_.pop();t.byteLength_-=al(e),t.parts_.length>0&&(t.byteLength_-=1)}function Zv(t){if(t.byteLength_>Lp)throw new Error(t.errorPrefix_+"has a key path longer than "+Lp+" bytes ("+t.byteLength_+").");if(t.parts_.length>Op)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Op+") or object contains a cycle "+Zn(t))}function Zn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Qd extends Jv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Qd}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Fi=1e3,cT=60*5*1e3,Dp=30*1e3,dT=1.3,hT=3e4,fT="server_kill",Mp=3;class nn extends Yv{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=nn.nextPersistentConnectionId_++,this.log_=Qs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Fi,this.maxReconnectDelay_=cT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!yv())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Qd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&wa.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(we(s)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new qs,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;nn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&$t(e,"w")){const r=hi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();ze(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||t1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Dp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=e1(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+we(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ec("Unrecognized action received from server: "+we(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Fi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Fi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>hT&&(this.reconnectDelay_=Fi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*dT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+nn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(c){x(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(c)};this.realtime_={close:l,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ne("getToken() completed but was canceled"):(Ne("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,a=new iT(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{ze(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(fT)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&ze(c),l())}}}interrupt(e){Ne("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ne("Resuming connection for reason: "+e),delete this.interruptReasons_[e],mc(this.interruptReasons_)&&(this.reconnectDelay_=Fi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>$d(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new X(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ne("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Mp&&(this.reconnectDelay_=Dp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ne("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Mp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Pv.replace(/\./g,"-")]=1,zd()?e["framework.cordova"]=1:vv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=wa.getInstance().currentlyOnline();return mc(this.interruptReasons_)&&e}}nn.nextPersistentConnectionId_=0;nn.nextConnectionId_=0;/**
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
 */class ${constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new $(e,n)}}/**
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
 */class cl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new $(fi,e),i=new $(fi,n);return this.compare(r,i)!==0}minPost(){return $.MIN}}/**
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
 */let Eo;class ey extends cl{static get __EMPTY_NODE(){return Eo}static set __EMPTY_NODE(e){Eo=e}compare(e,n){return Pr(e.name,n.name)}isDefinedOn(e){throw Ci("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return $.MIN}maxPost(){return new $(gr,Eo)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new $(e,Eo)}toString(){return".key"}}const ti=new ey;/**
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
 */class So{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Te{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Te.RED,this.left=i??Ke.EMPTY_NODE,this.right=s??Ke.EMPTY_NODE}copy(e,n,r,i,s){return new Te(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ke.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ke.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Te.RED=!0;Te.BLACK=!1;class pT{copy(e,n,r,i,s){return this}insert(e,n,r){return new Te(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ke{constructor(e,n=Ke.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ke(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Te.BLACK,null,null))}remove(e){return new Ke(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Te.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new So(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new So(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new So(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new So(this.root_,null,this.comparator_,!0,e)}}Ke.EMPTY_NODE=new pT;/**
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
 */function mT(t,e){return Pr(t.name,e.name)}function Yd(t,e){return Pr(t,e)}/**
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
 */let Cc;function gT(t){Cc=t}const ty=function(t){return typeof t=="number"?"number:"+Ov(t):"string:"+t},ny=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&$t(e,".sv"),"Priority must be a string or number.")}else x(t===Cc||t.isEmpty(),"priority of unexpected type.");x(t===Cc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let jp;class Ce{constructor(e,n=Ce.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ny(this.priorityNode_)}static set __childrenNodeConstructor(e){jp=e}static get __childrenNodeConstructor(){return jp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ce(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return H(e)?this:W(e)===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ce.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=W(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(x(r!==".priority"||Wn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ce.__childrenNodeConstructor.EMPTY_NODE.updateChild(ee(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ty(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Ov(this.value_):e+=this.value_,this.lazyHash_=Av(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ce.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ce.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ce.VALUE_TYPE_ORDER.indexOf(n),s=Ce.VALUE_TYPE_ORDER.indexOf(r);return x(i>=0,"Unknown leaf type: "+n),x(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ce.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let ry,iy;function _T(t){ry=t}function vT(t){iy=t}class yT extends cl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Pr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return $.MIN}maxPost(){return new $(gr,new Ce("[PRIORITY-POST]",iy))}makePost(e,n){const r=ry(e);return new $(n,new Ce("[PRIORITY-POST]",r))}toString(){return".priority"}}const he=new yT;/**
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
 */const wT=Math.log(2);class ET{constructor(e){const n=s=>parseInt(Math.log(s)/wT,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ea=function(t,e,n,r){t.sort(e);const i=function(l,u){const d=u-l;let c,h;if(d===0)return null;if(d===1)return c=t[l],h=n?n(c):c,new Te(h,c.node,Te.BLACK,null,null);{const g=parseInt(d/2,10)+l,m=i(l,g),y=i(g+1,u);return c=t[g],h=n?n(c):c,new Te(h,c.node,Te.BLACK,m,y)}},s=function(l){let u=null,d=null,c=t.length;const h=function(m,y){const I=c-m,_=c;c-=m;const p=i(I+1,_),v=t[I],E=n?n(v):v;g(new Te(E,v.node,y,null,p))},g=function(m){u?(u.left=m,u=m):(d=m,u=m)};for(let m=0;m<l.count;++m){const y=l.nextBitIsOne(),I=Math.pow(2,l.count-(m+1));y?h(I,Te.BLACK):(h(I,Te.BLACK),h(I,Te.RED))}return d},o=new ET(t.length),a=s(o);return new Ke(r||e,a)};/**
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
 */let cu;const Lr={};class Yt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return x(Lr&&he,"ChildrenNode.ts has not been loaded"),cu=cu||new Yt({".priority":Lr},{".priority":he}),cu}get(e){const n=hi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ke?n:null}hasIndex(e){return $t(this.indexSet_,e.toString())}addIndex(e,n){x(e!==ti,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator($.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Ea(r,e.getCompare()):a=Lr;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new Yt(d,u)}addToIndexes(e,n){const r=_a(this.indexes_,(i,s)=>{const o=hi(this.indexSet_,s);if(x(o,"Missing index implementation for "+s),i===Lr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator($.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Ea(a,o.getCompare())}else return Lr;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new $(e.name,a))),l.insert(e,e.node)}});return new Yt(r,this.indexSet_)}removeFromIndexes(e,n){const r=_a(this.indexes_,i=>{if(i===Lr)return i;{const s=n.get(e.name);return s?i.remove(new $(e.name,s)):i}});return new Yt(r,this.indexSet_)}}/**
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
 */let Ui;class j{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&ny(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ui||(Ui=new j(new Ke(Yd),null,Yt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ui}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ui:n}}getChild(e){const n=W(e);return n===null?this:this.getImmediateChild(n).getChild(ee(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new $(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ui:this.priorityNode_;return new j(i,o,s)}}updateChild(e,n){const r=W(e);if(r===null)return n;{x(W(e)!==".priority"||Wn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ee(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(he,(o,a)=>{n[o]=a.val(e),r++,s&&j.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ty(this.getPriority().val())+":"),this.forEachChild(he,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Av(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new $(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new $(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new $(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,$.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,$.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ys?-1:0}withIndex(e){if(e===ti||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ti||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(he),i=n.getIterator(he);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ti?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ST extends j{constructor(){super(new Ke(Yd),j.EMPTY_NODE,Yt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const Ys=new ST;Object.defineProperties($,{MIN:{value:new $(fi,j.EMPTY_NODE)},MAX:{value:new $(gr,Ys)}});ey.__EMPTY_NODE=j.EMPTY_NODE;Ce.__childrenNodeConstructor=j;gT(Ys);vT(Ys);/**
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
 */const CT=!0;function ye(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ce(n,ye(e))}if(!(t instanceof Array)&&CT){const n=[];let r=!1;if(Ae(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ye(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new $(o,l)))}}),n.length===0)return j.EMPTY_NODE;const s=Ea(n,mT,o=>o.name,Yd);if(r){const o=Ea(n,he.getCompare());return new j(s,ye(e),new Yt({".priority":o},{".priority":he}))}else return new j(s,ye(e),Yt.Default)}else{let n=j.EMPTY_NODE;return Ae(t,(r,i)=>{if($t(t,r)&&r.substring(0,1)!=="."){const s=ye(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ye(e))}}_T(ye);/**
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
 */class IT extends cl{constructor(e){super(),this.indexPath_=e,x(!H(e)&&W(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Pr(e.name,n.name):s}makePost(e,n){const r=ye(e),i=j.EMPTY_NODE.updateChild(this.indexPath_,r);return new $(n,i)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,Ys);return new $(gr,e)}toString(){return bs(this.indexPath_,0).join("/")}}/**
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
 */class TT extends cl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Pr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return $.MIN}maxPost(){return $.MAX}makePost(e,n){const r=ye(e);return new $(n,r)}toString(){return".value"}}const kT=new TT;/**
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
 */function sy(t){return{type:"value",snapshotNode:t}}function pi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Os(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ls(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function RT(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Jd{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){x(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Os(n,a)):x(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(pi(n,r)):o.trackChildChange(Ls(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(he,(i,s)=>{n.hasChild(i)||r.trackChildChange(Os(i,s))}),n.isLeafNode()||n.forEachChild(he,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Ls(i,s,o))}else r.trackChildChange(pi(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ds{constructor(e){this.indexedFilter_=new Jd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ds.getStartPost_(e),this.endPost_=Ds.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new $(n,r))||(r=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=j.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(j.EMPTY_NODE);const s=this;return n.forEachChild(he,(o,a)=>{s.matches(new $(o,a))||(i=i.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class NT{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ds(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new $(n,r))||(r=j.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=j.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(j.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,g)=>c(g,h)}else o=this.index_.getCompare();const a=e;x(a.numChildren()===this.limit_,"");const l=new $(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const c=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,l);if(d&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(Ls(n,r,c)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Os(n,c));const y=a.updateImmediateChild(n,j.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(pi(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return r.isEmpty()?e:d&&o(u,l)>=0?(s!=null&&(s.trackChildChange(Os(u.name,u.node)),s.trackChildChange(pi(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,j.EMPTY_NODE)):e}}/**
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
 */class Xd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=he}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:fi}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:gr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===he}copy(){const e=new Xd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function PT(t){return t.loadsAllData()?new Jd(t.getIndex()):t.hasLimit()?new NT(t):new Ds(t)}function xT(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function Fp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===he?n="$priority":t.index_===kT?n="$value":t.index_===ti?n="$key":(x(t.index_ instanceof IT,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=we(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=we(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+we(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=we(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+we(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Up(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==he&&(e.i=t.index_.toString()),e}/**
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
 */class Sa extends Yv{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Qs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Sa.getListenId_(e,r),a={};this.listens_[o]=a;const l=Fp(e._queryParams);this.restRequest_(s+".json",l,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),hi(this.listens_,o)===a){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=Sa.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Fp(e._queryParams),r=e._path.toString(),i=new qs;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ii(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ns(a.responseText)}catch{ze("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&ze("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class AT{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ca(){return{value:null,children:new Map}}function oy(t,e,n){if(H(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=W(e);t.children.has(r)||t.children.set(r,Ca());const i=t.children.get(r);e=ee(e),oy(i,e,n)}}function Ic(t,e,n){t.value!==null?n(e,t.value):bT(t,(r,i)=>{const s=new X(e.toString()+"/"+r);Ic(i,s,n)})}function bT(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class OT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ae(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const zp=10*1e3,LT=30*1e3,DT=5*60*1e3;class MT{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new OT(e);const r=zp+(LT-zp)*Math.random();ns(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ae(e,(i,s)=>{s>0&&$t(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ns(this.reportStats_.bind(this),Math.floor(Math.random()*2*DT))}}/**
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
 */var It;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(It||(It={}));function Zd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function eh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function th(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ia{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=It.ACK_USER_WRITE,this.source=Zd()}operationForChild(e){if(H(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new X(e));return new Ia(K(),n,this.revert)}}else return x(W(this.path)===e,"operationForChild called for unrelated child."),new Ia(ee(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ms{constructor(e,n){this.source=e,this.path=n,this.type=It.LISTEN_COMPLETE}operationForChild(e){return H(this.path)?new Ms(this.source,K()):new Ms(this.source,ee(this.path))}}/**
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
 */class _r{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=It.OVERWRITE}operationForChild(e){return H(this.path)?new _r(this.source,K(),this.snap.getImmediateChild(e)):new _r(this.source,ee(this.path),this.snap)}}/**
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
 */class mi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=It.MERGE}operationForChild(e){if(H(this.path)){const n=this.children.subtree(new X(e));return n.isEmpty()?null:n.value?new _r(this.source,K(),n.value):new mi(this.source,K(),n)}else return x(W(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new mi(this.source,ee(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class $n{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(H(e))return this.isFullyInitialized()&&!this.filtered_;const n=W(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class jT{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function FT(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(RT(o.childName,o.snapshotNode))}),zi(t,i,"child_removed",e,r,n),zi(t,i,"child_added",e,r,n),zi(t,i,"child_moved",s,r,n),zi(t,i,"child_changed",e,r,n),zi(t,i,"value",e,r,n),i}function zi(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>zT(t,a,l)),o.forEach(a=>{const l=UT(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function UT(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function zT(t,e,n){if(e.childName==null||n.childName==null)throw Ci("Should only compare child_ events.");const r=new $(e.childName,e.snapshotNode),i=new $(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function dl(t,e){return{eventCache:t,serverCache:e}}function rs(t,e,n,r){return dl(new $n(e,n,r),t.serverCache)}function ay(t,e,n,r){return dl(t.eventCache,new $n(e,n,r))}function Ta(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function vr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let du;const BT=()=>(du||(du=new Ke(II)),du);class Z{constructor(e,n=BT()){this.value=e,this.children=n}static fromObject(e){let n=new Z(null);return Ae(e,(r,i)=>{n=n.set(new X(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:K(),value:this.value};if(H(e))return null;{const r=W(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ee(e),n);return s!=null?{path:de(new X(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(H(e))return this;{const n=W(e),r=this.children.get(n);return r!==null?r.subtree(ee(e)):new Z(null)}}set(e,n){if(H(e))return new Z(n,this.children);{const r=W(e),s=(this.children.get(r)||new Z(null)).set(ee(e),n),o=this.children.insert(r,s);return new Z(this.value,o)}}remove(e){if(H(e))return this.children.isEmpty()?new Z(null):new Z(null,this.children);{const n=W(e),r=this.children.get(n);if(r){const i=r.remove(ee(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Z(null):new Z(this.value,s)}else return this}}get(e){if(H(e))return this.value;{const n=W(e),r=this.children.get(n);return r?r.get(ee(e)):null}}setTree(e,n){if(H(e))return n;{const r=W(e),s=(this.children.get(r)||new Z(null)).setTree(ee(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Z(this.value,o)}}fold(e){return this.fold_(K(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(de(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,K(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(H(e))return null;{const s=W(e),o=this.children.get(s);return o?o.findOnPath_(ee(e),de(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,K(),n)}foreachOnPath_(e,n,r){if(H(e))return this;{this.value&&r(n,this.value);const i=W(e),s=this.children.get(i);return s?s.foreachOnPath_(ee(e),de(n,i),r):new Z(null)}}foreach(e){this.foreach_(K(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(de(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Rt{constructor(e){this.writeTree_=e}static empty(){return new Rt(new Z(null))}}function is(t,e,n){if(H(e))return new Rt(new Z(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Fe(i,e);return s=s.updateChild(o,n),new Rt(t.writeTree_.set(i,s))}else{const i=new Z(n),s=t.writeTree_.setTree(e,i);return new Rt(s)}}}function Tc(t,e,n){let r=t;return Ae(n,(i,s)=>{r=is(r,de(e,i),s)}),r}function Bp(t,e){if(H(e))return Rt.empty();{const n=t.writeTree_.setTree(e,new Z(null));return new Rt(n)}}function kc(t,e){return xr(t,e)!=null}function xr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Fe(n.path,e)):null}function Wp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(he,(r,i)=>{e.push(new $(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new $(r,i.value))}),e}function Fn(t,e){if(H(e))return t;{const n=xr(t,e);return n!=null?new Rt(new Z(n)):new Rt(t.writeTree_.subtree(e))}}function Rc(t){return t.writeTree_.isEmpty()}function gi(t,e){return ly(K(),t.writeTree_,e)}function ly(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(x(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=ly(de(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(de(t,".priority"),r)),n}}/**
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
 */function hl(t,e){return hy(e,t)}function WT(t,e,n,r,i){x(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=is(t.visibleWrites,e,n)),t.lastWriteId=r}function $T(t,e,n,r){x(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Tc(t.visibleWrites,e,n),t.lastWriteId=r}function VT(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function HT(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&GT(a,r.path)?i=!1:ht(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return qT(t),!0;if(r.snap)t.visibleWrites=Bp(t.visibleWrites,r.path);else{const a=r.children;Ae(a,l=>{t.visibleWrites=Bp(t.visibleWrites,de(r.path,l))})}return!0}else return!1}function GT(t,e){if(t.snap)return ht(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ht(de(t.path,n),e))return!0;return!1}function qT(t){t.visibleWrites=uy(t.allWrites,KT,K()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function KT(t){return t.visible}function uy(t,e,n){let r=Rt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)ht(n,o)?(a=Fe(n,o),r=is(r,a,s.snap)):ht(o,n)&&(a=Fe(o,n),r=is(r,K(),s.snap.getChild(a)));else if(s.children){if(ht(n,o))a=Fe(n,o),r=Tc(r,a,s.children);else if(ht(o,n))if(a=Fe(o,n),H(a))r=Tc(r,K(),s.children);else{const l=hi(s.children,W(a));if(l){const u=l.getChild(ee(a));r=is(r,K(),u)}}}else throw Ci("WriteRecord should have .snap or .children")}}return r}function cy(t,e,n,r,i){if(!r&&!i){const s=xr(t.visibleWrites,e);if(s!=null)return s;{const o=Fn(t.visibleWrites,e);if(Rc(o))return n;if(n==null&&!kc(o,K()))return null;{const a=n||j.EMPTY_NODE;return gi(o,a)}}}else{const s=Fn(t.visibleWrites,e);if(!i&&Rc(s))return n;if(!i&&n==null&&!kc(s,K()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(ht(u.path,e)||ht(e,u.path))},a=uy(t.allWrites,o,e),l=n||j.EMPTY_NODE;return gi(a,l)}}}function QT(t,e,n){let r=j.EMPTY_NODE;const i=xr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(he,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Fn(t.visibleWrites,e);return n.forEachChild(he,(o,a)=>{const l=gi(Fn(s,new X(o)),a);r=r.updateImmediateChild(o,l)}),Wp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Fn(t.visibleWrites,e);return Wp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function YT(t,e,n,r,i){x(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=de(e,n);if(kc(t.visibleWrites,s))return null;{const o=Fn(t.visibleWrites,s);return Rc(o)?i.getChild(n):gi(o,i.getChild(n))}}function JT(t,e,n,r){const i=de(e,n),s=xr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Fn(t.visibleWrites,i);return gi(o,r.getNode().getImmediateChild(n))}else return null}function XT(t,e){return xr(t.visibleWrites,e)}function ZT(t,e,n,r,i,s,o){let a;const l=Fn(t.visibleWrites,e),u=xr(l,K());if(u!=null)a=u;else if(n!=null)a=gi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],c=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=h.getNext();for(;g&&d.length<i;)c(g,r)!==0&&d.push(g),g=h.getNext();return d}else return[]}function ek(){return{visibleWrites:Rt.empty(),allWrites:[],lastWriteId:-1}}function ka(t,e,n,r){return cy(t.writeTree,t.treePath,e,n,r)}function nh(t,e){return QT(t.writeTree,t.treePath,e)}function $p(t,e,n,r){return YT(t.writeTree,t.treePath,e,n,r)}function Ra(t,e){return XT(t.writeTree,de(t.treePath,e))}function tk(t,e,n,r,i,s){return ZT(t.writeTree,t.treePath,e,n,r,i,s)}function rh(t,e,n){return JT(t.writeTree,t.treePath,e,n)}function dy(t,e){return hy(de(t.treePath,e),t.writeTree)}function hy(t,e){return{treePath:t,writeTree:e}}/**
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
 */class nk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Ls(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Os(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,pi(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Ls(r,e.snapshotNode,i.oldSnap));else throw Ci("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class rk{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const fy=new rk;class ih{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new $n(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return rh(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:vr(this.viewCache_),s=tk(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function ik(t){return{filter:t}}function sk(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function ok(t,e,n,r,i){const s=new nk;let o,a;if(n.type===It.OVERWRITE){const u=n;u.source.fromUser?o=Nc(t,e,u.path,u.snap,r,i,s):(x(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!H(u.path),o=Na(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===It.MERGE){const u=n;u.source.fromUser?o=lk(t,e,u.path,u.children,r,i,s):(x(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Pc(t,e,u.path,u.children,r,i,a,s))}else if(n.type===It.ACK_USER_WRITE){const u=n;u.revert?o=dk(t,e,u.path,r,i,s):o=uk(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===It.LISTEN_COMPLETE)o=ck(t,e,n.path,r,s);else throw Ci("Unknown operation type: "+n.type);const l=s.getChanges();return ak(e,o,l),{viewCache:o,changes:l}}function ak(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Ta(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(sy(Ta(e)))}}function py(t,e,n,r,i,s){const o=e.eventCache;if(Ra(r,n)!=null)return e;{let a,l;if(H(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=vr(e),d=u instanceof j?u:j.EMPTY_NODE,c=nh(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=ka(r,vr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=W(n);if(u===".priority"){x(Wn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const c=$p(r,n,d,l);c!=null?a=t.filter.updatePriority(d,c):a=o.getNode()}else{const d=ee(n);let c;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const h=$p(r,n,o.getNode(),l);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=rh(r,u,e.serverCache);c!=null?a=t.filter.updateChild(o.getNode(),u,c,d,i,s):a=o.getNode()}}return rs(e,a,o.isFullyInitialized()||H(n),t.filter.filtersNodes())}}function Na(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(H(n))u=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);u=d.updateFullNode(l.getNode(),g,null)}else{const g=W(n);if(!l.isCompleteForPath(n)&&Wn(n)>1)return e;const m=ee(n),I=l.getNode().getImmediateChild(g).updateChild(m,r);g===".priority"?u=d.updatePriority(l.getNode(),I):u=d.updateChild(l.getNode(),g,I,m,fy,null)}const c=ay(e,u,l.isFullyInitialized()||H(n),d.filtersNodes()),h=new ih(i,c,s);return py(t,c,n,i,h,a)}function Nc(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const d=new ih(i,e,s);if(H(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=rs(e,u,!0,t.filter.filtersNodes());else{const c=W(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=rs(e,u,a.isFullyInitialized(),a.isFiltered());else{const h=ee(n),g=a.getNode().getImmediateChild(c);let m;if(H(h))m=r;else{const y=d.getCompleteChild(c);y!=null?qd(h)===".priority"&&y.getChild(Xv(h)).isEmpty()?m=y:m=y.updateChild(h,r):m=j.EMPTY_NODE}if(g.equals(m))l=e;else{const y=t.filter.updateChild(a.getNode(),c,m,h,d,o);l=rs(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Vp(t,e){return t.eventCache.isCompleteForChild(e)}function lk(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const d=de(n,l);Vp(e,W(d))&&(a=Nc(t,a,d,u,i,s,o))}),r.foreach((l,u)=>{const d=de(n,l);Vp(e,W(d))||(a=Nc(t,a,d,u,i,s,o))}),a}function Hp(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Pc(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;H(n)?u=r:u=new Z(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const g=e.serverCache.getNode().getImmediateChild(c),m=Hp(t,g,h);l=Na(t,l,new X(c),m,i,s,o,a)}}),u.children.inorderTraversal((c,h)=>{const g=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!g){const m=e.serverCache.getNode().getImmediateChild(c),y=Hp(t,m,h);l=Na(t,l,new X(c),y,i,s,o,a)}}),l}function uk(t,e,n,r,i,s,o){if(Ra(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(H(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Na(t,e,n,l.getNode().getChild(n),i,s,a,o);if(H(n)){let u=new Z(null);return l.getNode().forEachChild(ti,(d,c)=>{u=u.set(new X(d),c)}),Pc(t,e,n,u,i,s,a,o)}else return e}else{let u=new Z(null);return r.foreach((d,c)=>{const h=de(n,d);l.isCompleteForPath(h)&&(u=u.set(d,l.getNode().getChild(h)))}),Pc(t,e,n,u,i,s,a,o)}}function ck(t,e,n,r,i){const s=e.serverCache,o=ay(e,s.getNode(),s.isFullyInitialized()||H(n),s.isFiltered());return py(t,o,n,r,fy,i)}function dk(t,e,n,r,i,s){let o;if(Ra(r,n)!=null)return e;{const a=new ih(r,e,i),l=e.eventCache.getNode();let u;if(H(n)||W(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=ka(r,vr(e));else{const c=e.serverCache.getNode();x(c instanceof j,"serverChildren would be complete if leaf node"),d=nh(r,c)}d=d,u=t.filter.updateFullNode(l,d,s)}else{const d=W(n);let c=rh(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=l.getImmediateChild(d)),c!=null?u=t.filter.updateChild(l,d,c,ee(n),a,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(l,d,j.EMPTY_NODE,ee(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ka(r,vr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Ra(r,K())!=null,rs(e,u,o,t.filter.filtersNodes())}}/**
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
 */class hk{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Jd(r.getIndex()),s=PT(r);this.processor_=ik(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(j.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(j.EMPTY_NODE,a.getNode(),null),d=new $n(l,o.isFullyInitialized(),i.filtersNodes()),c=new $n(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=dl(c,d),this.eventGenerator_=new jT(this.query_)}get query(){return this.query_}}function fk(t){return t.viewCache_.serverCache.getNode()}function pk(t){return Ta(t.viewCache_)}function mk(t,e){const n=vr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!H(e)&&!n.getImmediateChild(W(e)).isEmpty())?n.getChild(e):null}function Gp(t){return t.eventRegistrations_.length===0}function gk(t,e){t.eventRegistrations_.push(e)}function qp(t,e,n){const r=[];if(n){x(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Kp(t,e,n,r){e.type===It.MERGE&&e.source.queryId!==null&&(x(vr(t.viewCache_),"We should always have a full cache before handling merges"),x(Ta(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=ok(t.processor_,i,e,n,r);return sk(t.processor_,s.viewCache),x(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,my(t,s.changes,s.viewCache.eventCache.getNode(),null)}function _k(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(he,(s,o)=>{r.push(pi(s,o))}),n.isFullyInitialized()&&r.push(sy(n.getNode())),my(t,r,n.getNode(),e)}function my(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return FT(t.eventGenerator_,e,n,i)}/**
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
 */let Pa;class gy{constructor(){this.views=new Map}}function vk(t){x(!Pa,"__referenceConstructor has already been defined"),Pa=t}function yk(){return x(Pa,"Reference.ts has not been loaded"),Pa}function wk(t){return t.views.size===0}function sh(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return x(s!=null,"SyncTree gave us an op for an invalid query."),Kp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Kp(o,e,n,r));return s}}function _y(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=ka(n,i?r:null),l=!1;a?l=!0:r instanceof j?(a=nh(n,r),l=!1):(a=j.EMPTY_NODE,l=!1);const u=dl(new $n(a,l,!1),new $n(r,i,!1));return new hk(e,u)}return o}function Ek(t,e,n,r,i,s){const o=_y(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),gk(o,n),_k(o,n)}function Sk(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Vn(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(qp(u,n,r)),Gp(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(qp(l,n,r)),Gp(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Vn(t)&&s.push(new(yk())(e._repo,e._path)),{removed:s,events:o}}function vy(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Un(t,e){let n=null;for(const r of t.views.values())n=n||mk(r,e);return n}function yy(t,e){if(e._queryParams.loadsAllData())return fl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function wy(t,e){return yy(t,e)!=null}function Vn(t){return fl(t)!=null}function fl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let xa;function Ck(t){x(!xa,"__referenceConstructor has already been defined"),xa=t}function Ik(){return x(xa,"Reference.ts has not been loaded"),xa}let Tk=1;class Qp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Z(null),this.pendingWriteTree_=ek(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ey(t,e,n,r,i){return WT(t.pendingWriteTree_,e,n,r,i),i?ki(t,new _r(Zd(),e,n)):[]}function kk(t,e,n,r){$T(t.pendingWriteTree_,e,n,r);const i=Z.fromObject(n);return ki(t,new mi(Zd(),e,i))}function Rn(t,e,n=!1){const r=VT(t.pendingWriteTree_,e);if(HT(t.pendingWriteTree_,e)){let s=new Z(null);return r.snap!=null?s=s.set(K(),!0):Ae(r.children,o=>{s=s.set(new X(o),!0)}),ki(t,new Ia(r.path,s,n))}else return[]}function Js(t,e,n){return ki(t,new _r(eh(),e,n))}function Rk(t,e,n){const r=Z.fromObject(n);return ki(t,new mi(eh(),e,r))}function Nk(t,e){return ki(t,new Ms(eh(),e))}function Pk(t,e,n){const r=ah(t,n);if(r){const i=lh(r),s=i.path,o=i.queryId,a=Fe(s,e),l=new Ms(th(o),a);return uh(t,s,l)}else return[]}function Aa(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||wy(o,e))){const l=Sk(o,e,n,r);wk(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,g)=>Vn(g));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const g=bk(h);for(let m=0;m<g.length;++m){const y=g[m],I=y.query,_=Ty(t,y);t.listenProvider_.startListening(ss(I),js(t,I),_.hashFn,_.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(ss(e),null):u.forEach(h=>{const g=t.queryToTagMap.get(pl(h));t.listenProvider_.stopListening(ss(h),g)}))}Ok(t,u)}return a}function Sy(t,e,n,r){const i=ah(t,r);if(i!=null){const s=lh(i),o=s.path,a=s.queryId,l=Fe(o,e),u=new _r(th(a),l,n);return uh(t,o,u)}else return[]}function xk(t,e,n,r){const i=ah(t,r);if(i){const s=lh(i),o=s.path,a=s.queryId,l=Fe(o,e),u=Z.fromObject(n),d=new mi(th(a),l,u);return uh(t,o,d)}else return[]}function xc(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,g)=>{const m=Fe(h,i);s=s||Un(g,m),o=o||Vn(g)});let a=t.syncPointTree_.get(i);a?(o=o||Vn(a),s=s||Un(a,K())):(a=new gy,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=j.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,m)=>{const y=Un(m,K());y&&(s=s.updateImmediateChild(g,y))}));const u=wy(a,e);if(!u&&!e._queryParams.loadsAllData()){const h=pl(e);x(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=Lk();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const d=hl(t.pendingWriteTree_,i);let c=Ek(a,e,n,d,s,l);if(!u&&!o&&!r){const h=yy(a,e);c=c.concat(Dk(t,e,h))}return c}function oh(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Fe(o,e),u=Un(a,l);if(u)return u});return cy(i,e,s,n,!0)}function Ak(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=Fe(u,n);r=r||Un(d,c)});let i=t.syncPointTree_.get(n);i?r=r||Un(i,K()):(i=new gy,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new $n(r,!0,!1):null,a=hl(t.pendingWriteTree_,e._path),l=_y(i,e,a,s?o.getNode():j.EMPTY_NODE,s);return pk(l)}function ki(t,e){return Cy(e,t.syncPointTree_,null,hl(t.pendingWriteTree_,K()))}function Cy(t,e,n,r){if(H(t.path))return Iy(t,e,n,r);{const i=e.get(K());n==null&&i!=null&&(n=Un(i,K()));let s=[];const o=W(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,d=dy(r,o);s=s.concat(Cy(a,l,u,d))}return i&&(s=s.concat(sh(i,t,r,n))),s}}function Iy(t,e,n,r){const i=e.get(K());n==null&&i!=null&&(n=Un(i,K()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=dy(r,o),d=t.operationForChild(o);d&&(s=s.concat(Iy(d,a,l,u)))}),i&&(s=s.concat(sh(i,t,r,n))),s}function Ty(t,e){const n=e.query,r=js(t,n);return{hashFn:()=>(fk(e)||j.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?Pk(t,n._path,r):Nk(t,n._path);{const s=RI(i,n);return Aa(t,n,null,s)}}}}function js(t,e){const n=pl(e);return t.queryToTagMap.get(n)}function pl(t){return t._path.toString()+"$"+t._queryIdentifier}function ah(t,e){return t.tagToQueryMap.get(e)}function lh(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new X(t.substr(0,e))}}function uh(t,e,n){const r=t.syncPointTree_.get(e);x(r,"Missing sync point for query tag that we're tracking");const i=hl(t.pendingWriteTree_,e);return sh(r,n,i,null)}function bk(t){return t.fold((e,n,r)=>{if(n&&Vn(n))return[fl(n)];{let i=[];return n&&(i=vy(n)),Ae(r,(s,o)=>{i=i.concat(o)}),i}})}function ss(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Ik())(t._repo,t._path):t}function Ok(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=pl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function Lk(){return Tk++}function Dk(t,e,n){const r=e._path,i=js(t,e),s=Ty(t,n),o=t.listenProvider_.startListening(ss(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)x(!Vn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,d,c)=>{if(!H(u)&&d&&Vn(d))return[fl(d).query];{let h=[];return d&&(h=h.concat(vy(d).map(g=>g.query))),Ae(c,(g,m)=>{h=h.concat(m)}),h}});for(let u=0;u<l.length;++u){const d=l[u];t.listenProvider_.stopListening(ss(d),js(t,d))}}return o}/**
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
 */class ch{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ch(n)}node(){return this.node_}}class dh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=de(this.path_,e);return new dh(this.syncTree_,n)}node(){return oh(this.syncTree_,this.path_)}}const Mk=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Yp=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return jk(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Fk(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},jk=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},Fk=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&x(!1,"Unexpected increment value: "+r);const i=e.node();if(x(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},ky=function(t,e,n,r){return hh(e,new dh(n,t),r)},Ry=function(t,e,n){return hh(t,new ch(e),n)};function hh(t,e,n){const r=t.getPriority().val(),i=Yp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Yp(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ce(a,ye(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ce(i))),o.forEachChild(he,(a,l)=>{const u=hh(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class fh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function ph(t,e){let n=e instanceof X?e:new X(e),r=t,i=W(n);for(;i!==null;){const s=hi(r.node.children,i)||{children:{},childCount:0};r=new fh(i,r,s),n=ee(n),i=W(n)}return r}function Ri(t){return t.node.value}function Ny(t,e){t.node.value=e,Ac(t)}function Py(t){return t.node.childCount>0}function Uk(t){return Ri(t)===void 0&&!Py(t)}function ml(t,e){Ae(t.node.children,(n,r)=>{e(new fh(n,t,r))})}function xy(t,e,n,r){n&&!r&&e(t),ml(t,i=>{xy(i,e,!0,r)}),n&&r&&e(t)}function zk(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Xs(t){return new X(t.parent===null?t.name:Xs(t.parent)+"/"+t.name)}function Ac(t){t.parent!==null&&Bk(t.parent,t.name,t)}function Bk(t,e,n){const r=Uk(n),i=$t(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Ac(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Ac(t))}/**
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
 */const Wk=/[\[\].#$\/\u0000-\u001F\u007F]/,$k=/[\[\].#$\u0000-\u001F\u007F]/,hu=10*1024*1024,mh=function(t){return typeof t=="string"&&t.length!==0&&!Wk.test(t)},Ay=function(t){return typeof t=="string"&&t.length!==0&&!$k.test(t)},Vk=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ay(t)},Hk=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Wd(t)||t&&typeof t=="object"&&$t(t,".sv")},by=function(t,e,n,r){r&&e===void 0||gl(ol(t,"value"),e,n)},gl=function(t,e,n){const r=n instanceof X?new aT(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Zn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Zn(r)+" with contents = "+e.toString());if(Wd(e))throw new Error(t+"contains "+e.toString()+" "+Zn(r));if(typeof e=="string"&&e.length>hu/3&&al(e)>hu)throw new Error(t+"contains a string greater than "+hu+" utf8 bytes "+Zn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ae(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!mh(o)))throw new Error(t+" contains an invalid key ("+o+") "+Zn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);lT(r,o),gl(t,a,r),uT(r)}),i&&s)throw new Error(t+' contains ".value" child '+Zn(r)+" in addition to actual children.")}},Gk=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=bs(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!mh(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(oT);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&ht(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},qk=function(t,e,n,r){const i=ol(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ae(e,(o,a)=>{const l=new X(o);if(gl(i,a,de(n,l)),qd(l)===".priority"&&!Hk(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),Gk(i,s)},Oy=function(t,e,n,r){if(!Ay(n))throw new Error(ol(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Kk=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Oy(t,e,n)},gh=function(t,e){if(W(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Qk=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!mh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Vk(n))throw new Error(ol(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Yk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function _l(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Kd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ly(t,e,n){_l(t,n),Dy(t,r=>Kd(r,e))}function _t(t,e,n){_l(t,n),Dy(t,r=>ht(r,e)||ht(e,r))}function Dy(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(Jk(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Jk(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ts&&Ne("event: "+n.toString()),Ti(r)}}}/**
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
 */const Xk="repo_interrupt",Zk=25;class eR{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Yk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ca(),this.transactionQueueTree_=new fh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function tR(t,e,n){if(t.stats_=Hd(t.repoInfo_),t.forceRestClient_||AI())t.server_=new Sa(t.repoInfo_,(r,i,s,o)=>{Jp(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Xp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{we(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new nn(t.repoInfo_,e,(r,i,s,o)=>{Jp(t,r,i,s,o)},r=>{Xp(t,r)},r=>{nR(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=MI(t.repoInfo_,()=>new MT(t.stats_,t.server_)),t.infoData_=new AT,t.infoSyncTree_=new Qp({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Js(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),_h(t,"connected",!1),t.serverSyncTree_=new Qp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);_t(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function My(t){const n=t.infoData_.getNode(new X(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function vl(t){return Mk({timestamp:My(t)})}function Jp(t,e,n,r,i){t.dataUpdateCount++;const s=new X(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=_a(n,u=>ye(u));o=xk(t.serverSyncTree_,s,l,i)}else{const l=ye(n);o=Sy(t.serverSyncTree_,s,l,i)}else if(r){const l=_a(n,u=>ye(u));o=Rk(t.serverSyncTree_,s,l)}else{const l=ye(n);o=Js(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=_i(t,s)),_t(t.eventQueue_,a,o)}function Xp(t,e){_h(t,"connected",e),e===!1&&oR(t)}function nR(t,e){Ae(e,(n,r)=>{_h(t,n,r)})}function _h(t,e,n){const r=new X("/.info/"+e),i=ye(n);t.infoData_.updateSnapshot(r,i);const s=Js(t.infoSyncTree_,r,i);_t(t.eventQueue_,r,s)}function vh(t){return t.nextWriteId_++}function rR(t,e,n){const r=Ak(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=ye(i).withIndex(e._queryParams.getIndex());xc(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Js(t.serverSyncTree_,e._path,s);else{const a=js(t.serverSyncTree_,e);o=Sy(t.serverSyncTree_,e._path,s,a)}return _t(t.eventQueue_,e._path,o),Aa(t.serverSyncTree_,e,n,null,!0),s},i=>(Zs(t,"get for query "+we(e)+" failed: "+i),Promise.reject(new Error(i))))}function iR(t,e,n,r,i){Zs(t,"set",{path:e.toString(),value:n,priority:r});const s=vl(t),o=ye(n,r),a=oh(t.serverSyncTree_,e),l=Ry(o,a,s),u=vh(t),d=Ey(t.serverSyncTree_,e,l,u,!0);_l(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,g)=>{const m=h==="ok";m||ze("set at "+e+" failed: "+h);const y=Rn(t.serverSyncTree_,u,!m);_t(t.eventQueue_,e,y),bc(t,i,h,g)});const c=wh(t,e);_i(t,c),_t(t.eventQueue_,c,[])}function sR(t,e,n,r){Zs(t,"update",{path:e.toString(),value:n});let i=!0;const s=vl(t),o={};if(Ae(n,(a,l)=>{i=!1,o[a]=ky(de(e,a),ye(l),t.serverSyncTree_,s)}),i)Ne("update() called with empty data.  Don't do anything."),bc(t,r,"ok",void 0);else{const a=vh(t),l=kk(t.serverSyncTree_,e,o,a);_l(t.eventQueue_,l),t.server_.merge(e.toString(),n,(u,d)=>{const c=u==="ok";c||ze("update at "+e+" failed: "+u);const h=Rn(t.serverSyncTree_,a,!c),g=h.length>0?_i(t,e):e;_t(t.eventQueue_,g,h),bc(t,r,u,d)}),Ae(n,u=>{const d=wh(t,de(e,u));_i(t,d)}),_t(t.eventQueue_,e,[])}}function oR(t){Zs(t,"onDisconnectEvents");const e=vl(t),n=Ca();Ic(t.onDisconnect_,K(),(i,s)=>{const o=ky(i,s,t.serverSyncTree_,e);oy(n,i,o)});let r=[];Ic(n,K(),(i,s)=>{r=r.concat(Js(t.serverSyncTree_,i,s));const o=wh(t,i);_i(t,o)}),t.onDisconnect_=Ca(),_t(t.eventQueue_,K(),r)}function aR(t,e,n){let r;W(e._path)===".info"?r=xc(t.infoSyncTree_,e,n):r=xc(t.serverSyncTree_,e,n),Ly(t.eventQueue_,e._path,r)}function lR(t,e,n){let r;W(e._path)===".info"?r=Aa(t.infoSyncTree_,e,n):r=Aa(t.serverSyncTree_,e,n),Ly(t.eventQueue_,e._path,r)}function uR(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Xk)}function Zs(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ne(n,...e)}function bc(t,e,n,r){e&&Ti(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function jy(t,e,n){return oh(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function yh(t,e=t.transactionQueueTree_){if(e||yl(t,e),Ri(e)){const n=Uy(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&cR(t,Xs(e),n)}else Py(e)&&ml(e,n=>{yh(t,n)})}function cR(t,e,n){const r=n.map(u=>u.currentWriteId),i=jy(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];x(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Fe(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Zs(t,"transaction put response",{path:l.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(Rn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();yl(t,ph(t.transactionQueueTree_,e)),yh(t,t.transactionQueueTree_),_t(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)Ti(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{ze("transaction at "+l.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}_i(t,e)}},o)}function _i(t,e){const n=Fy(t,e),r=Xs(n),i=Uy(t,n);return dR(t,i,r),r}function dR(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Fe(n,l.path);let d=!1,c;if(x(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,c=l.abortReason,i=i.concat(Rn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Zk)d=!0,c="maxretry",i=i.concat(Rn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=jy(t,l.path,o);l.currentInputSnapshot=h;const g=e[a].update(h.val());if(g!==void 0){gl("transaction failed: Data returned ",g,l.path);let m=ye(g);typeof g=="object"&&g!=null&&$t(g,".priority")||(m=m.updatePriority(h.getPriority()));const I=l.currentWriteId,_=vl(t),p=Ry(m,h,_);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=p,l.currentWriteId=vh(t),o.splice(o.indexOf(I),1),i=i.concat(Ey(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(Rn(t.serverSyncTree_,I,!0))}else d=!0,c="nodata",i=i.concat(Rn(t.serverSyncTree_,l.currentWriteId,!0))}_t(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(c==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(c),!1,null))))}yl(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ti(r[a]);yh(t,t.transactionQueueTree_)}function Fy(t,e){let n,r=t.transactionQueueTree_;for(n=W(e);n!==null&&Ri(r)===void 0;)r=ph(r,n),e=ee(e),n=W(e);return r}function Uy(t,e){const n=[];return zy(t,e,n),n.sort((r,i)=>r.order-i.order),n}function zy(t,e,n){const r=Ri(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ml(e,i=>{zy(t,i,n)})}function yl(t,e){const n=Ri(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Ny(e,n.length>0?n:void 0)}ml(e,r=>{yl(t,r)})}function wh(t,e){const n=Xs(Fy(t,e)),r=ph(t.transactionQueueTree_,e);return zk(r,i=>{fu(t,i)}),fu(t,r),xy(r,i=>{fu(t,i)}),n}function fu(t,e){const n=Ri(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Rn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Ny(e,void 0):n.length=s+1,_t(t.eventQueue_,Xs(e),i);for(let o=0;o<r.length;o++)Ti(r[o])}}/**
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
 */function hR(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function fR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ze(`Invalid query segment '${n}' in query '${t}'`)}return e}const Zp=function(t,e){const n=pR(t),r=n.namespace;n.domain==="firebase.com"&&un(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&un("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||SI();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new $v(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new X(n.pathString)}},pR=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=hR(t.substring(d,c)));const h=fR(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const m=e.indexOf(".");r=e.substring(0,m).toLowerCase(),n=e.substring(m+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */const em="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",mR=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=em.charAt(n%64),n=Math.floor(n/64);x(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=em.charAt(e[i]);return x(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class gR{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+we(this.snapshot.exportVal())}}class _R{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class By{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return x(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class wl{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return H(this._path)?null:qd(this._path)}get ref(){return new hn(this._repo,this._path)}get _queryIdentifier(){const e=Up(this._queryParams),n=$d(e);return n==="{}"?"default":n}get _queryObject(){return Up(this._queryParams)}isEqual(e){if(e=ge(e),!(e instanceof wl))return!1;const n=this._repo===e._repo,r=Kd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+sT(this._path)}}class hn extends wl{constructor(e,n){super(e,n,new Xd,!1)}get parent(){const e=Xv(this._path);return e===null?null:new hn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Fs{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new X(e),r=Us(this.ref,e);return new Fs(this._node.getChild(n),r,he)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Fs(i,Us(this.ref,r),he)))}hasChild(e){const n=new X(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function He(t,e){return t=ge(t),t._checkNotDeleted("ref"),e!==void 0?Us(t._root,e):t._root}function Us(t,e){return t=ge(t),W(t._path)===null?Kk("child","path",e):Oy("child","path",e),new hn(t._repo,de(t._path,e))}function iO(t,e){t=ge(t),gh("push",t._path),by("push",e,t._path,!0);const n=My(t._repo),r=mR(n),i=Us(t,r),s=Us(t,r);let o;return e!=null?o=zs(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function vR(t){return gh("remove",t._path),zs(t,null)}function zs(t,e){t=ge(t),gh("set",t._path),by("set",e,t._path,!1);const n=new qs;return iR(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function sO(t,e){qk("update",e,t._path);const n=new qs;return sR(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function yr(t){t=ge(t);const e=new By(()=>{}),n=new El(e);return rR(t._repo,t,n).then(r=>new Fs(r,new hn(t._repo,t._path),t._queryParams.getIndex()))}class El{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new gR("value",this,new Fs(e.snapshotNode,new hn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new _R(this,e,n):null}matches(e){return e instanceof El?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function yR(t,e,n,r,i){const s=new By(n,void 0),o=new El(s);return aR(t._repo,t,o),()=>lR(t._repo,t,o)}function oO(t,e,n,r){return yR(t,"value",e)}class wR{}class ER extends wR{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new wl(e._repo,e._path,xT(e._queryParams,this._limit),e._orderByCalled)}}function SR(t){if(Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new ER(t)}function CR(t,...e){let n=ge(t);for(const r of e)n=r._apply(n);return n}vk(hn);Ck(hn);/**
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
 */const IR="FIREBASE_DATABASE_EMULATOR_HOST",Oc={};let TR=!1;function kR(t,e,n,r){t.repoInfo_=new $v(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function RR(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||un("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ne("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Zp(s,i),a=o.repoInfo,l;typeof process<"u"&&Ep&&(l=Ep[IR]),l?(s=`http://${l}?ns=${a.namespace}`,o=Zp(s,i),a=o.repoInfo):o.repoInfo.secure;const u=new OI(t.name,t.options,e);Qk("Invalid Firebase Database URL",o),H(o.path)||un("Database URL must point to the root of a Firebase Database (not including a child path).");const d=PR(a,t,u,new bI(t.name,n));return new xR(d,t)}function NR(t,e){const n=Oc[e];(!n||n[t.key]!==t)&&un(`Database ${e}(${t.repoInfo_}) has already been deleted.`),uR(t),delete n[t.key]}function PR(t,e,n,r){let i=Oc[e.name];i||(i={},Oc[e.name]=i);let s=i[t.toURLString()];return s&&un("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new eR(t,TR,n,r),i[t.toURLString()]=s,s}class xR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(tR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new hn(this._repo,K())),this._rootInternal}_delete(){return this._rootInternal!==null&&(NR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&un("Cannot call "+e+" on a deleted database.")}}function AR(t=ul(),e){const n=Kn(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=fv("database");r&&bR(n,...r)}return n}function bR(t,e,n,r={}){t=ge(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&un("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&un('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Uo(Uo.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:gv(r.mockUserToken,t.app.options.projectId);s=new Uo(o)}kR(i,e,n,s)}/**
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
 */function OR(t){gI(Nr),xt(new gt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return RR(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Xe(Sp,Cp,t),Xe(Sp,Cp,"esm2017")}nn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};nn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};OR();var LR="firebase",DR="10.13.1";/**
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
 */Xe(LR,DR,"app");const Wy="@firebase/installations",Eh="0.6.8";/**
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
 */const $y=1e4,Vy=`w:${Eh}`,Hy="FIS_v2",MR="https://firebaseinstallations.googleapis.com/v1",jR=60*60*1e3,FR="installations",UR="Installations";/**
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
 */const zR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},wr=new Rr(FR,UR,zR);function Gy(t){return t instanceof At&&t.code.includes("request-failed")}/**
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
 */function qy({projectId:t}){return`${MR}/projects/${t}/installations`}function Ky(t){return{token:t.token,requestStatus:2,expiresIn:WR(t.expiresIn),creationTime:Date.now()}}async function Qy(t,e){const r=(await e.json()).error;return wr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Yy({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function BR(t,{refreshToken:e}){const n=Yy(t);return n.append("Authorization",$R(e)),n}async function Jy(t){const e=await t();return e.status>=500&&e.status<600?t():e}function WR(t){return Number(t.replace("s","000"))}function $R(t){return`${Hy} ${t}`}/**
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
 */async function VR({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=qy(t),i=Yy(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Hy,appId:t.appId,sdkVersion:Vy},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Jy(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Ky(u.authToken)}}else throw await Qy("Create Installation",l)}/**
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
 */function Xy(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function HR(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const GR=/^[cdef][\w-]{21}$/,Lc="";function qR(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=KR(t);return GR.test(n)?n:Lc}catch{return Lc}}function KR(t){return HR(t).substr(0,22)}/**
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
 */function Sl(t){return`${t.appName}!${t.appId}`}/**
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
 */const Zy=new Map;function e0(t,e){const n=Sl(t);t0(n,e),QR(n,e)}function t0(t,e){const n=Zy.get(t);if(n)for(const r of n)r(e)}function QR(t,e){const n=YR();n&&n.postMessage({key:t,fid:e}),JR()}let ir=null;function YR(){return!ir&&"BroadcastChannel"in self&&(ir=new BroadcastChannel("[Firebase] FID Change"),ir.onmessage=t=>{t0(t.data.key,t.data.fid)}),ir}function JR(){Zy.size===0&&ir&&(ir.close(),ir=null)}/**
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
 */const XR="firebase-installations-database",ZR=1,Er="firebase-installations-store";let pu=null;function Sh(){return pu||(pu=Tv(XR,ZR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Er)}}})),pu}async function ba(t,e){const n=Sl(t),i=(await Sh()).transaction(Er,"readwrite"),s=i.objectStore(Er),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&e0(t,e.fid),e}async function n0(t){const e=Sl(t),r=(await Sh()).transaction(Er,"readwrite");await r.objectStore(Er).delete(e),await r.done}async function Cl(t,e){const n=Sl(t),i=(await Sh()).transaction(Er,"readwrite"),s=i.objectStore(Er),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&e0(t,a.fid),a}/**
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
 */async function Ch(t){let e;const n=await Cl(t.appConfig,r=>{const i=eN(r),s=tN(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Lc?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function eN(t){const e=t||{fid:qR(),registrationStatus:0};return r0(e)}function tN(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(wr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=nN(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:rN(t)}:{installationEntry:e}}async function nN(t,e){try{const n=await VR(t,e);return ba(t.appConfig,n)}catch(n){throw Gy(n)&&n.customData.serverCode===409?await n0(t.appConfig):await ba(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function rN(t){let e=await tm(t.appConfig);for(;e.registrationStatus===1;)await Xy(100),e=await tm(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ch(t);return r||n}return e}function tm(t){return Cl(t,e=>{if(!e)throw wr.create("installation-not-found");return r0(e)})}function r0(t){return iN(t)?{fid:t.fid,registrationStatus:0}:t}function iN(t){return t.registrationStatus===1&&t.registrationTime+$y<Date.now()}/**
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
 */async function sN({appConfig:t,heartbeatServiceProvider:e},n){const r=oN(t,n),i=BR(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Vy,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Jy(()=>fetch(r,a));if(l.ok){const u=await l.json();return Ky(u)}else throw await Qy("Generate Auth Token",l)}function oN(t,{fid:e}){return`${qy(t)}/${e}/authTokens:generate`}/**
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
 */async function Ih(t,e=!1){let n;const r=await Cl(t.appConfig,s=>{if(!i0(s))throw wr.create("not-registered");const o=s.authToken;if(!e&&uN(o))return s;if(o.requestStatus===1)return n=aN(t,e),s;{if(!navigator.onLine)throw wr.create("app-offline");const a=dN(s);return n=lN(t,a),a}});return n?await n:r.authToken}async function aN(t,e){let n=await nm(t.appConfig);for(;n.authToken.requestStatus===1;)await Xy(100),n=await nm(t.appConfig);const r=n.authToken;return r.requestStatus===0?Ih(t,e):r}function nm(t){return Cl(t,e=>{if(!i0(e))throw wr.create("not-registered");const n=e.authToken;return hN(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function lN(t,e){try{const n=await sN(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await ba(t.appConfig,r),n}catch(n){if(Gy(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await n0(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ba(t.appConfig,r)}throw n}}function i0(t){return t!==void 0&&t.registrationStatus===2}function uN(t){return t.requestStatus===2&&!cN(t)}function cN(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+jR}function dN(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function hN(t){return t.requestStatus===1&&t.requestTime+$y<Date.now()}/**
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
 */async function fN(t){const e=t,{installationEntry:n,registrationPromise:r}=await Ch(e);return r?r.catch(console.error):Ih(e).catch(console.error),n.fid}/**
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
 */async function pN(t,e=!1){const n=t;return await mN(n),(await Ih(n,e)).token}async function mN(t){const{registrationPromise:e}=await Ch(t);e&&await e}/**
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
 */function gN(t){if(!t||!t.options)throw mu("App Configuration");if(!t.name)throw mu("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw mu(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function mu(t){return wr.create("missing-app-config-values",{valueName:t})}/**
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
 */const s0="installations",_N="installations-internal",vN=t=>{const e=t.getProvider("app").getImmediate(),n=gN(e),r=Kn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},yN=t=>{const e=t.getProvider("app").getImmediate(),n=Kn(e,s0).getImmediate();return{getId:()=>fN(n),getToken:i=>pN(n,i)}};function wN(){xt(new gt(s0,vN,"PUBLIC")),xt(new gt(_N,yN,"PRIVATE"))}wN();Xe(Wy,Eh);Xe(Wy,Eh,"esm2017");/**
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
 */const Oa="analytics",EN="firebase_id",SN="origin",CN=60*1e3,IN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Th="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ze=new ll("@firebase/analytics");/**
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
 */const TN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},st=new Rr("analytics","Analytics",TN);/**
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
 */function kN(t){if(!t.startsWith(Th)){const e=st.create("invalid-gtag-resource",{gtagURL:t});return Ze.warn(e.message),""}return t}function o0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function RN(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function NN(t,e){const n=RN("firebase-js-sdk-policy",{createScriptURL:kN}),r=document.createElement("script"),i=`${Th}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function PN(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function xN(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await o0(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){Ze.error(a)}t("config",i,s)}async function AN(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await o0(n);for(const l of o){const u=a.find(c=>c.measurementId===l),d=u&&e[u.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Ze.error(s)}}function bN(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await AN(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await xN(t,e,n,r,a,l)}else if(s==="consent"){const[a,l]=o;t("consent",a,l)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Ze.error(a)}}return i}function ON(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=bN(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function LN(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Th)&&n.src.includes(t))return n;return null}/**
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
 */const DN=30,MN=1e3;class jN{constructor(e={},n=MN){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const a0=new jN;function FN(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function UN(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:FN(r)},s=IN.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw st.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function zN(t,e=a0,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw st.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw st.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new $N;return setTimeout(async()=>{a.abort()},CN),l0({appId:r,apiKey:i,measurementId:s},o,a,e)}async function l0(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=a0){var s;const{appId:o,measurementId:a}=t;try{await BN(r,e)}catch(l){if(a)return Ze.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await UN(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!WN(u)){if(i.deleteThrottleMetadata(o),a)return Ze.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const d=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?hp(n,i.intervalMillis,DN):hp(n,i.intervalMillis),c={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,c),Ze.debug(`Calling attemptFetch again in ${d} millis`),l0(t,c,r,i)}}function BN(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(st.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function WN(t){if(!(t instanceof At)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class $N{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function VN(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function HN(){if(wv())try{await Ev()}catch(t){return Ze.warn(st.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ze.warn(st.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function GN(t,e,n,r,i,s,o){var a;const l=zN(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&Ze.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Ze.error(g)),e.push(l);const u=HN().then(g=>{if(g)return r.getId()}),[d,c]=await Promise.all([l,u]);LN(s)||NN(s,d.measurementId),i("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[SN]="firebase",h.update=!0,c!=null&&(h[EN]=c),i("config",d.measurementId,h),d.measurementId}/**
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
 */class qN{constructor(e){this.app=e}_delete(){return delete os[this.app.options.appId],Promise.resolve()}}let os={},rm=[];const im={};let gu="dataLayer",KN="gtag",sm,u0,om=!1;function QN(){const t=[];if(_v()&&t.push("This is a browser extension environment."),YC()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=st.create("invalid-analytics-context",{errorInfo:e});Ze.warn(n.message)}}function YN(t,e,n){QN();const r=t.options.appId;if(!r)throw st.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ze.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw st.create("no-api-key");if(os[r]!=null)throw st.create("already-exists",{id:r});if(!om){PN(gu);const{wrappedGtag:s,gtagCore:o}=ON(os,rm,im,gu,KN);u0=s,sm=o,om=!0}return os[r]=GN(t,rm,im,e,sm,gu,n),new qN(t)}function JN(t=ul()){t=ge(t);const e=Kn(t,Oa);return e.isInitialized()?e.getImmediate():XN(t)}function XN(t,e={}){const n=Kn(t,Oa);if(n.isInitialized()){const i=n.getImmediate();if(Ps(e,n.getOptions()))return i;throw st.create("already-initialized")}return n.initialize({options:e})}function ZN(t,e,n,r){t=ge(t),VN(u0,os[t.app.options.appId],e,n,r).catch(i=>Ze.error(i))}const am="@firebase/analytics",lm="0.10.7";function eP(){xt(new gt(Oa,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return YN(r,i,n)},"PUBLIC")),xt(new gt("analytics-internal",t,"PRIVATE")),Xe(am,lm),Xe(am,lm,"esm2017");function t(e){try{const n=e.getProvider(Oa).getImmediate();return{logEvent:(r,i,s)=>ZN(n,r,i,s)}}catch(n){throw st.create("interop-component-reg-failed",{reason:n})}}}eP();function kh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function c0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tP=c0,d0=new Rr("auth","Firebase",c0());/**
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
 */const La=new ll("@firebase/auth");function nP(t,...e){La.logLevel<=J.WARN&&La.warn(`Auth (${Nr}): ${t}`,...e)}function zo(t,...e){La.logLevel<=J.ERROR&&La.error(`Auth (${Nr}): ${t}`,...e)}/**
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
 */function Bt(t,...e){throw Nh(t,...e)}function Nt(t,...e){return Nh(t,...e)}function Rh(t,e,n){const r=Object.assign(Object.assign({},tP()),{[e]:n});return new Rr("auth","Firebase",r).create(e,{appName:t.name})}function ur(t){return Rh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function rP(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Bt(t,"argument-error"),Rh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Nh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return d0.create(t,...e)}function U(t,e,...n){if(!t)throw Nh(e,...n)}function Jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw zo(e),new Error(e)}function cn(t,e){t||Jt(e)}/**
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
 */function Dc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function iP(){return um()==="http:"||um()==="https:"}function um(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function sP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iP()||_v()||"connection"in navigator)?navigator.onLine:!0}function oP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class eo{constructor(e,n){this.shortDelay=e,this.longDelay=n,cn(n>e,"Short delay should be less than long delay!"),this.isMobile=zd()||vv()}get(){return sP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ph(t,e){cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class h0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const aP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const lP=new eo(3e4,6e4);function xh(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ni(t,e,n,r,i={}){return f0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ii(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),h0.fetch()(p0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function f0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},aP),e);try{const i=new cP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Co(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Co(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Co(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Co(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Rh(t,d,u);Bt(t,d)}}catch(i){if(i instanceof At)throw i;Bt(t,"network-request-failed",{message:String(i)})}}async function uP(t,e,n,r,i={}){const s=await Ni(t,e,n,r,i);return"mfaPendingCredential"in s&&Bt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function p0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ph(t.config,i):`${t.config.apiScheme}://${i}`}class cP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Nt(this.auth,"network-request-failed")),lP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Co(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Nt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function dP(t,e){return Ni(t,"POST","/v1/accounts:delete",e)}async function m0(t,e){return Ni(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function as(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hP(t,e=!1){const n=ge(t),r=await n.getIdToken(e),i=Ah(r);U(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:as(_u(i.auth_time)),issuedAtTime:as(_u(i.iat)),expirationTime:as(_u(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function _u(t){return Number(t)*1e3}function Ah(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return zo("JWT malformed, contained fewer than 3 sections"),null;try{const i=ga(n);return i?JSON.parse(i):(zo("Failed to decode base64 JWT payload"),null)}catch(i){return zo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function cm(t){const e=Ah(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Bs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof At&&fP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function fP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class pP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Mc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=as(this.lastLoginAt),this.creationTime=as(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Da(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Bs(t,m0(n,{idToken:r}));U(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?g0(s.providerUserInfo):[],a=gP(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Mc(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function mP(t){const e=ge(t);await Da(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function g0(t){return t.map(e=>{var{providerId:n}=e,r=kh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function _P(t,e){const n=await f0(t,{},async()=>{const r=Ii({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=p0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",h0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function vP(t,e){return Ni(t,"POST","/v2/accounts:revokeToken",xh(t,e))}/**
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
 */class ni{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){U(e.length!==0,"internal-error");const n=cm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await _P(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ni;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ni,this.toJSON())}_performRefresh(){return Jt("not implemented")}}/**
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
 */function mn(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Xt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=kh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Mc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Bs(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return hP(this,e)}reload(){return mP(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Xt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Da(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qt(this.auth.app))return Promise.reject(ur(this.auth));const e=await this.getIdToken();return await Bs(this,dP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,_=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:v,emailVerified:E,isAnonymous:A,providerData:O,stsTokenManager:b}=n;U(v&&b,e,"internal-error");const L=ni.fromJSON(this.name,b);U(typeof v=="string",e,"internal-error"),mn(c,e.name),mn(h,e.name),U(typeof E=="boolean",e,"internal-error"),U(typeof A=="boolean",e,"internal-error"),mn(g,e.name),mn(m,e.name),mn(y,e.name),mn(I,e.name),mn(_,e.name),mn(p,e.name);const F=new Xt({uid:v,auth:e,email:h,emailVerified:E,displayName:c,isAnonymous:A,photoURL:m,phoneNumber:g,tenantId:y,stsTokenManager:L,createdAt:_,lastLoginAt:p});return O&&Array.isArray(O)&&(F.providerData=O.map(z=>Object.assign({},z))),I&&(F._redirectEventId=I),F}static async _fromIdTokenResponse(e,n,r=!1){const i=new ni;i.updateFromServerResponse(n);const s=new Xt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Da(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];U(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?g0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ni;a.updateFromIdToken(r);const l=new Xt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Mc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
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
 */const dm=new Map;function Zt(t){cn(t instanceof Function,"Expected a class definition");let e=dm.get(t);return e?(cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,dm.set(t,e),e)}/**
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
 */class _0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}_0.type="NONE";const hm=_0;/**
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
 */function Bo(t,e,n){return`firebase:${t}:${e}:${n}`}class ri{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Bo(this.userKey,i.apiKey,s),this.fullPersistenceKey=Bo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ri(Zt(hm),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Zt(hm);const o=Bo(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const c=Xt._fromJSON(e,d);u!==s&&(a=c),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ri(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ri(s,e,r))}}/**
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
 */function fm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(E0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(v0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(C0(e))return"Blackberry";if(I0(e))return"Webos";if(y0(e))return"Safari";if((e.includes("chrome/")||w0(e))&&!e.includes("edge/"))return"Chrome";if(S0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function v0(t=Be()){return/firefox\//i.test(t)}function y0(t=Be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function w0(t=Be()){return/crios\//i.test(t)}function E0(t=Be()){return/iemobile/i.test(t)}function S0(t=Be()){return/android/i.test(t)}function C0(t=Be()){return/blackberry/i.test(t)}function I0(t=Be()){return/webos/i.test(t)}function bh(t=Be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function yP(t=Be()){var e;return bh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function wP(){return QC()&&document.documentMode===10}function T0(t=Be()){return bh(t)||S0(t)||I0(t)||C0(t)||/windows phone/i.test(t)||E0(t)}/**
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
 */function k0(t,e=[]){let n;switch(t){case"Browser":n=fm(Be());break;case"Worker":n=`${fm(Be())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Nr}/${r}`}/**
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
 */class EP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function SP(t,e={}){return Ni(t,"GET","/v2/passwordPolicy",xh(t,e))}/**
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
 */const CP=6;class IP{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:CP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class TP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pm(this),this.idTokenSubscription=new pm(this),this.beforeStateQueue=new EP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=d0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Zt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ri.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await m0(this,{idToken:e}),r=await Xt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Qt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Da(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qt(this.app))return Promise.reject(ur(this));const n=e?ge(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qt(this.app)?Promise.reject(ur(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qt(this.app)?Promise.reject(ur(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Zt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await SP(this),n=new IP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Rr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await vP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Zt(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await ri.create(this,[Zt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=k0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&nP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Il(t){return ge(t)}class pm{constructor(e){this.auth=e,this.observer=null,this.addObserver=r1(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Oh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kP(t){Oh=t}function RP(t){return Oh.loadJS(t)}function NP(){return Oh.gapiScript}function PP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function xP(t,e){const n=Kn(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ps(s,e??{}))return i;Bt(i,"already-initialized")}return n.initialize({options:e})}function AP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Zt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function bP(t,e,n){const r=Il(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=R0(e),{host:o,port:a}=OP(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),LP()}function R0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function OP(t){const e=R0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:mm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:mm(o)}}}function mm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function LP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class N0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Jt("not implemented")}_getIdTokenResponse(e){return Jt("not implemented")}_linkToIdToken(e,n){return Jt("not implemented")}_getReauthenticationResolver(e){return Jt("not implemented")}}/**
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
 */async function ii(t,e){return uP(t,"POST","/v1/accounts:signInWithIdp",xh(t,e))}/**
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
 */const DP="http://localhost";class Sr extends N0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Sr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=kh(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Sr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ii(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ii(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ii(e,n)}buildRequest(){const e={requestUri:DP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ii(n)}return e}}/**
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
 */class Lh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class to extends Lh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class wn extends to{constructor(){super("facebook.com")}static credential(e){return Sr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";wn.PROVIDER_ID="facebook.com";/**
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
 */class Mt extends to{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Sr._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Mt.credential(n,r)}catch{return null}}}Mt.GOOGLE_SIGN_IN_METHOD="google.com";Mt.PROVIDER_ID="google.com";/**
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
 */class En extends to{constructor(){super("github.com")}static credential(e){return Sr._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.GITHUB_SIGN_IN_METHOD="github.com";En.PROVIDER_ID="github.com";/**
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
 */class Sn extends to{constructor(){super("twitter.com")}static credential(e,n){return Sr._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Sn.credential(n,r)}catch{return null}}}Sn.TWITTER_SIGN_IN_METHOD="twitter.com";Sn.PROVIDER_ID="twitter.com";/**
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
 */class vi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Xt._fromIdTokenResponse(e,r,i),o=gm(r);return new vi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=gm(r);return new vi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function gm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ma extends At{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ma.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ma(e,n,r,i)}}function P0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ma._fromErrorAndOperation(t,s,e,r):s})}async function MP(t,e,n=!1){const r=await Bs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vi._forOperation(t,"link",r)}/**
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
 */async function jP(t,e,n=!1){const{auth:r}=t;if(Qt(r.app))return Promise.reject(ur(r));const i="reauthenticate";try{const s=await Bs(t,P0(r,i,e,t),n);U(s.idToken,r,"internal-error");const o=Ah(s.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(t.uid===a,r,"user-mismatch"),vi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Bt(r,"user-mismatch"),s}}/**
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
 */async function FP(t,e,n=!1){if(Qt(t.app))return Promise.reject(ur(t));const r="signIn",i=await P0(t,r,e),s=await vi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function UP(t,e,n,r){return ge(t).onIdTokenChanged(e,n,r)}function zP(t,e,n){return ge(t).beforeAuthStateChanged(e,n)}const ja="__sak";/**
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
 */class x0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ja,"1"),this.storage.removeItem(ja),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const BP=1e3,WP=10;class A0 extends x0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=T0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);wP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,WP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},BP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}A0.type="LOCAL";const $P=A0;/**
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
 */class b0 extends x0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}b0.type="SESSION";const O0=b0;/**
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
 */function VP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Tl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Tl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await VP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Tl.receivers=[];/**
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
 */function Dh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class HP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Dh("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function zt(){return window}function GP(t){zt().location.href=t}/**
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
 */function L0(){return typeof zt().WorkerGlobalScope<"u"&&typeof zt().importScripts=="function"}async function qP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function KP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function QP(){return L0()?self:null}/**
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
 */const D0="firebaseLocalStorageDb",YP=1,Fa="firebaseLocalStorage",M0="fbase_key";class no{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kl(t,e){return t.transaction([Fa],e?"readwrite":"readonly").objectStore(Fa)}function JP(){const t=indexedDB.deleteDatabase(D0);return new no(t).toPromise()}function jc(){const t=indexedDB.open(D0,YP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Fa,{keyPath:M0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Fa)?e(r):(r.close(),await JP(),e(await jc()))})})}async function _m(t,e,n){const r=kl(t,!0).put({[M0]:e,value:n});return new no(r).toPromise()}async function XP(t,e){const n=kl(t,!1).get(e),r=await new no(n).toPromise();return r===void 0?null:r.value}function vm(t,e){const n=kl(t,!0).delete(e);return new no(n).toPromise()}const ZP=800,ex=3;class j0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ex)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return L0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tl._getInstance(QP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await qP(),!this.activeServiceWorker)return;this.sender=new HP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||KP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jc();return await _m(e,ja,"1"),await vm(e,ja),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_m(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>XP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=kl(i,!1).getAll();return new no(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ZP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}j0.type="LOCAL";const tx=j0;new eo(3e4,6e4);/**
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
 */function F0(t,e){return e?Zt(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Mh extends N0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ii(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ii(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ii(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function nx(t){return FP(t.auth,new Mh(t),t.bypassAuthState)}function rx(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),jP(n,new Mh(t),t.bypassAuthState)}async function ix(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),MP(n,new Mh(t),t.bypassAuthState)}/**
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
 */class U0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nx;case"linkViaPopup":case"linkViaRedirect":return ix;case"reauthViaPopup":case"reauthViaRedirect":return rx;default:Bt(this.auth,"internal-error")}}resolve(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const sx=new eo(2e3,1e4);async function ox(t,e,n){if(Qt(t.app))return Promise.reject(Nt(t,"operation-not-supported-in-this-environment"));const r=Il(t);rP(t,e,Lh);const i=F0(r,n);return new sr(r,"signInViaPopup",e,i).executeNotNull()}class sr extends U0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,sr.currentPopupAction&&sr.currentPopupAction.cancel(),sr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){cn(this.filter.length===1,"Popup operations only handle one event");const e=Dh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sx.get())};e()}}sr.currentPopupAction=null;/**
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
 */const ax="pendingRedirect",Wo=new Map;class lx extends U0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Wo.get(this.auth._key());if(!e){try{const r=await ux(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Wo.set(this.auth._key(),e)}return this.bypassAuthState||Wo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ux(t,e){const n=hx(e),r=dx(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function cx(t,e){Wo.set(t._key(),e)}function dx(t){return Zt(t._redirectPersistence)}function hx(t){return Bo(ax,t.config.apiKey,t.name)}async function fx(t,e,n=!1){if(Qt(t.app))return Promise.reject(ur(t));const r=Il(t),i=F0(r,e),o=await new lx(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const px=10*60*1e3;class mx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!z0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Nt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=px&&this.cachedEventUids.clear(),this.cachedEventUids.has(ym(e))}saveEventToCache(e){this.cachedEventUids.add(ym(e)),this.lastProcessedEventTime=Date.now()}}function ym(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function z0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return z0(t);default:return!1}}/**
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
 */async function _x(t,e={}){return Ni(t,"GET","/v1/projects",e)}/**
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
 */const vx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yx=/^https?/;async function wx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _x(t);for(const n of e)try{if(Ex(n))return}catch{}Bt(t,"unauthorized-domain")}function Ex(t){const e=Dc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!yx.test(n))return!1;if(vx.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Sx=new eo(3e4,6e4);function wm(){const t=zt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Cx(t){return new Promise((e,n)=>{var r,i,s;function o(){wm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wm(),n(Nt(t,"network-request-failed"))},timeout:Sx.get()})}if(!((i=(r=zt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=zt().gapi)===null||s===void 0)&&s.load)o();else{const a=PP("iframefcb");return zt()[a]=()=>{gapi.load?o():n(Nt(t,"network-request-failed"))},RP(`${NP()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw $o=null,e})}let $o=null;function Ix(t){return $o=$o||Cx(t),$o}/**
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
 */const Tx=new eo(5e3,15e3),kx="__/auth/iframe",Rx="emulator/auth/iframe",Nx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Px=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xx(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ph(e,Rx):`https://${t.config.authDomain}/${kx}`,r={apiKey:e.apiKey,appName:t.name,v:Nr},i=Px.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ii(r).slice(1)}`}async function Ax(t){const e=await Ix(t),n=zt().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:xx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Nx,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Nt(t,"network-request-failed"),a=zt().setTimeout(()=>{s(o)},Tx.get());function l(){zt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const bx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ox=500,Lx=600,Dx="_blank",Mx="http://localhost";class Em{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jx(t,e,n,r=Ox,i=Lx){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},bx),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Be().toLowerCase();n&&(a=w0(u)?Dx:n),v0(u)&&(e=e||Mx,l.scrollbars="yes");const d=Object.entries(l).reduce((h,[g,m])=>`${h}${g}=${m},`,"");if(yP(u)&&a!=="_self")return Fx(e||"",a),new Em(null);const c=window.open(e||"",a,d);U(c,t,"popup-blocked");try{c.focus()}catch{}return new Em(c)}function Fx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Ux="__/auth/handler",zx="emulator/auth/handler",Bx=encodeURIComponent("fac");async function Sm(t,e,n,r,i,s){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Nr,eventId:i};if(e instanceof Lh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",mc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries({}))o[d]=c}if(e instanceof to){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),u=l?`#${Bx}=${encodeURIComponent(l)}`:"";return`${Wx(t)}?${Ii(a).slice(1)}${u}`}function Wx({config:t}){return t.emulator?Ph(t,zx):`https://${t.authDomain}/${Ux}`}/**
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
 */const vu="webStorageSupport";class $x{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=O0,this._completeRedirectFn=fx,this._overrideRedirectResult=cx}async _openPopup(e,n,r,i){var s;cn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Sm(e,n,r,Dc(),i);return jx(e,o,Dh())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Sm(e,n,r,Dc(),i);return GP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(cn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ax(e),r=new mx(e);return n.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(vu,{type:vu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[vu];o!==void 0&&n(!!o),Bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=wx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return T0()||y0()||bh()}}const Vx=$x;var Cm="@firebase/auth",Im="1.7.8";/**
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
 */class Hx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Gx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qx(t){xt(new gt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:k0(t)},u=new TP(r,i,s,l);return AP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xt(new gt("auth-internal",e=>{const n=Il(e.getProvider("auth").getImmediate());return(r=>new Hx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xe(Cm,Im,Gx(t)),Xe(Cm,Im,"esm2017")}/**
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
 */const Kx=5*60,Qx=mv("authIdTokenMaxAge")||Kx;let Tm=null;const Yx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Qx)return;const i=n==null?void 0:n.token;Tm!==i&&(Tm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Jx(t=ul()){const e=Kn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=xP(t,{popupRedirectResolver:Vx,persistence:[tx,$P,O0]}),r=mv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Yx(s.toString());zP(n,o,()=>o(n.currentUser)),UP(n,a=>o(a))}}const i=hv("auth");return i&&bP(n,`http://${i}`),n}function Xx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}kP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Nt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Xx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qx("Browser");/**
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
 */const B0="firebasestorage.googleapis.com",W0="storageBucket",Zx=2*60*1e3,eA=10*60*1e3;/**
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
 */class pe extends At{constructor(e,n,r=0){super(yu(e),`Firebase Storage: ${n} (${yu(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,pe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return yu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var fe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(fe||(fe={}));function yu(t){return"storage/"+t}function jh(){const t="An unknown error occurred, please check the error payload for server response.";return new pe(fe.UNKNOWN,t)}function tA(t){return new pe(fe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function nA(t){return new pe(fe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function rA(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new pe(fe.UNAUTHENTICATED,t)}function iA(){return new pe(fe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function sA(t){return new pe(fe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function oA(){return new pe(fe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function aA(){return new pe(fe.CANCELED,"User canceled the upload/download.")}function lA(t){return new pe(fe.INVALID_URL,"Invalid URL '"+t+"'.")}function uA(t){return new pe(fe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function cA(){return new pe(fe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+W0+"' property when initializing the app?")}function dA(){return new pe(fe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function hA(){return new pe(fe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function fA(t){return new pe(fe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Fc(t){return new pe(fe.INVALID_ARGUMENT,t)}function $0(){return new pe(fe.APP_DELETED,"The Firebase app was deleted.")}function pA(t){return new pe(fe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ls(t,e){return new pe(fe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Bi(t){throw new pe(fe.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class rt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=rt.makeFromUrl(e,n)}catch{return new rt(e,"")}if(r.path==="")return r;throw uA(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const d="v[A-Za-z0-9_]+",c=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",g=new RegExp(`^https?://${c}/${d}/b/${i}/o${h}`,"i"),m={bucket:1,path:3},y=n===B0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,I="([^?#]*)",_=new RegExp(`^https?://${y}/${i}/${I}`,"i"),v=[{regex:a,indices:l,postModify:s},{regex:g,indices:m,postModify:u},{regex:_,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<v.length;E++){const A=v[E],O=A.regex.exec(e);if(O){const b=O[A.indices.bucket];let L=O[A.indices.path];L||(L=""),r=new rt(b,L),A.postModify(r);break}}if(r==null)throw lA(e);return r}}class mA{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function gA(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function d(...I){u||(u=!0,e.apply(null,I))}function c(I){i=setTimeout(()=>{i=null,t(g,l())},I)}function h(){s&&clearTimeout(s)}function g(I,..._){if(u){h();return}if(I){h(),d.call(null,I,..._);return}if(l()||o){h(),d.call(null,I,..._);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,c(v)}let m=!1;function y(I){m||(m=!0,h(),!u&&(i!==null?(I||(a=2),clearTimeout(i),c(0)):I||(a=1)))}return c(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function _A(t){t(!1)}/**
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
 */function vA(t){return t!==void 0}function yA(t){return typeof t=="object"&&!Array.isArray(t)}function Fh(t){return typeof t=="string"||t instanceof String}function km(t){return Uh()&&t instanceof Blob}function Uh(){return typeof Blob<"u"}function Rm(t,e,n,r){if(r<e)throw Fc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Fc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Rl(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function V0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var cr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(cr||(cr={}));/**
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
 */function wA(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class EA{constructor(e,n,r,i,s,o,a,l,u,d,c,h=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=c,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,m)=>{this.resolve_=g,this.reject_=m,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Io(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===cr.NO_ERROR,l=s.getStatus();if(!a||wA(l,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===cr.ABORT;r(!1,new Io(!1,null,d));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Io(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());vA(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=jh();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?$0():aA();o(l)}else{const l=oA();o(l)}};this.canceled_?n(!1,new Io(!1,null,!0)):this.backoffId_=gA(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&_A(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Io{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function SA(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function CA(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function IA(t,e){e&&(t["X-Firebase-GMPID"]=e)}function TA(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function kA(t,e,n,r,i,s,o=!0){const a=V0(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return IA(u,e),SA(u,n),CA(u,s),TA(u,r),new EA(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function RA(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function NA(...t){const e=RA();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Uh())return new Blob(t);throw new pe(fe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function PA(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function xA(t){if(typeof atob>"u")throw fA("base-64");return atob(t)}/**
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
 */const jt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class wu{constructor(e,n){this.data=e,this.contentType=n||null}}function AA(t,e){switch(t){case jt.RAW:return new wu(H0(e));case jt.BASE64:case jt.BASE64URL:return new wu(G0(t,e));case jt.DATA_URL:return new wu(OA(e),LA(e))}throw jh()}function H0(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function bA(t){let e;try{e=decodeURIComponent(t)}catch{throw ls(jt.DATA_URL,"Malformed data URL.")}return H0(e)}function G0(t,e){switch(t){case jt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ls(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case jt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ls(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=xA(e)}catch(i){throw i.message.includes("polyfill")?i:ls(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class q0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ls(jt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=DA(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function OA(t){const e=new q0(t);return e.base64?G0(jt.BASE64,e.rest):bA(e.rest)}function LA(t){return new q0(t).contentType}function DA(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Cn{constructor(e,n){let r=0,i="";km(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(km(this.data_)){const r=this.data_,i=PA(r,e,n);return i===null?null:new Cn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Cn(r,!0)}}static getBlob(...e){if(Uh()){const n=e.map(r=>r instanceof Cn?r.data_:r);return new Cn(NA.apply(null,n))}else{const n=e.map(o=>Fh(o)?AA(jt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Cn(i,!0)}}uploadData(){return this.data_}}/**
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
 */function K0(t){let e;try{e=JSON.parse(t)}catch{return null}return yA(e)?e:null}/**
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
 */function MA(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function jA(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Q0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function FA(t,e){return e}class Me{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||FA}}let To=null;function UA(t){return!Fh(t)||t.length<2?t:Q0(t)}function Y0(){if(To)return To;const t=[];t.push(new Me("bucket")),t.push(new Me("generation")),t.push(new Me("metageneration")),t.push(new Me("name","fullPath",!0));function e(s,o){return UA(o)}const n=new Me("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Me("size");return i.xform=r,t.push(i),t.push(new Me("timeCreated")),t.push(new Me("updated")),t.push(new Me("md5Hash",null,!0)),t.push(new Me("cacheControl",null,!0)),t.push(new Me("contentDisposition",null,!0)),t.push(new Me("contentEncoding",null,!0)),t.push(new Me("contentLanguage",null,!0)),t.push(new Me("contentType",null,!0)),t.push(new Me("metadata","customMetadata",!0)),To=t,To}function zA(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new rt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function BA(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return zA(r,t),r}function J0(t,e,n){const r=K0(e);return r===null?null:BA(t,r,n)}function WA(t,e,n,r){const i=K0(e);if(i===null||!Fh(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const d=t.bucket,c=t.fullPath,h="/b/"+o(d)+"/o/"+o(c),g=Rl(h,n,r),m=V0({alt:"media",token:u});return g+m})[0]}function $A(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class zh{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function X0(t){if(!t)throw jh()}function VA(t,e){function n(r,i){const s=J0(t,i,e);return X0(s!==null),s}return n}function HA(t,e){function n(r,i){const s=J0(t,i,e);return X0(s!==null),WA(s,i,t.host,t._protocol)}return n}function Z0(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=iA():i=rA():n.getStatus()===402?i=nA(t.bucket):n.getStatus()===403?i=sA(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function ew(t){const e=Z0(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=tA(t.path)),s.serverResponse=i.serverResponse,s}return n}function GA(t,e,n){const r=e.fullServerUrl(),i=Rl(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new zh(i,s,HA(t,n),o);return a.errorHandler=ew(e),a}function qA(t,e){const n=e.fullServerUrl(),r=Rl(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,u){}const a=new zh(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=ew(e),a}function KA(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function QA(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=KA(null,e)),r}function YA(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let v="";for(let E=0;E<2;E++)v=v+Math.random().toString().slice(2);return v}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=QA(e,r,i),d=$A(u,n),c="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,h=`\r
--`+l+"--",g=Cn.getBlob(c,r,h);if(g===null)throw dA();const m={name:u.fullPath},y=Rl(s,t.host,t._protocol),I="POST",_=t.maxUploadRetryTime,p=new zh(y,I,VA(t,n),_);return p.urlParams=m,p.headers=o,p.body=g.uploadData(),p.errorHandler=Z0(e),p}class JA{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=cr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=cr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=cr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Bi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Bi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Bi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Bi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Bi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class XA extends JA{initXhr(){this.xhr_.responseType="text"}}function Bh(){return new XA}/**
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
 */class Cr{constructor(e,n){this._service=e,n instanceof rt?this._location=n:this._location=rt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Cr(e,n)}get root(){const e=new rt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Q0(this._location.path)}get storage(){return this._service}get parent(){const e=MA(this._location.path);if(e===null)return null;const n=new rt(this._location.bucket,e);return new Cr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw pA(e)}}function ZA(t,e,n){t._throwIfRoot("uploadBytes");const r=YA(t.storage,t._location,Y0(),new Cn(e,!0),n);return t.storage.makeRequestWithTokens(r,Bh).then(i=>({metadata:i,ref:t}))}function eb(t){t._throwIfRoot("getDownloadURL");const e=GA(t.storage,t._location,Y0());return t.storage.makeRequestWithTokens(e,Bh).then(n=>{if(n===null)throw hA();return n})}function tb(t){t._throwIfRoot("deleteObject");const e=qA(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Bh)}function nb(t,e){const n=jA(t._location.path,e),r=new rt(t._location.bucket,n);return new Cr(t.storage,r)}/**
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
 */function rb(t){return/^[A-Za-z]+:\/\//.test(t)}function ib(t,e){return new Cr(t,e)}function tw(t,e){if(t instanceof Wh){const n=t;if(n._bucket==null)throw cA();const r=new Cr(n,n._bucket);return e!=null?tw(r,e):r}else return e!==void 0?nb(t,e):t}function sb(t,e){if(e&&rb(e)){if(t instanceof Wh)return ib(t,e);throw Fc("To use ref(service, url), the first argument must be a Storage instance.")}else return tw(t,e)}function Nm(t,e){const n=e==null?void 0:e[W0];return n==null?null:rt.makeFromBucketSpec(n,t)}function ob(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:gv(i,t.app.options.projectId))}class Wh{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=B0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Zx,this._maxUploadRetryTime=eA,this._requests=new Set,i!=null?this._bucket=rt.makeFromBucketSpec(i,this._host):this._bucket=Nm(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=rt.makeFromBucketSpec(this._url,e):this._bucket=Nm(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Rm("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Rm("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Cr(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new mA($0());{const o=kA(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Pm="@firebase/storage",xm="0.13.1";/**
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
 */const nw="storage";function ab(t,e,n){return t=ge(t),ZA(t,e,n)}function lb(t){return t=ge(t),eb(t)}function aO(t){return t=ge(t),tb(t)}function ub(t,e){return t=ge(t),sb(t,e)}function cb(t=ul(),e){t=ge(t);const r=Kn(t,nw).getImmediate({identifier:e}),i=fv("storage");return i&&db(r,...i),r}function db(t,e,n,r={}){ob(t,e,n,r)}function hb(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Wh(n,r,i,e,Nr)}function fb(){xt(new gt(nw,hb,"PUBLIC").setMultipleInstances(!0)),Xe(Pm,xm,""),Xe(Pm,xm,"esm2017")}fb();const pb={apiKey:"AIzaSyBJm9fkGNwaMtHi5ChRDULA2UgLrFT8nvI",authDomain:"ranking-bp.firebaseapp.com",projectId:"ranking-bp",storageBucket:"ranking-bp.appspot.com",messagingSenderId:"1045536295453",appId:"1:1045536295453:web:27da7bdeee70b6ac8894f4",measurementId:"G-9HBZ9LWGLH"},Nl=kv(pb),rw=Jx(Nl);JN(Nl);new Mt;const Ge=AR(Nl),mb=cb(Nl),gb=({isOpen:t,closeModal:e})=>{const[n,r]=w.useState(null);w.useEffect(()=>{t&&(async()=>{try{const a=He(Ge,"reglamentos"),l=await yr(a);if(l.exists()){const u=l.val(),d=Object.values(u).pop();r(d.fileURL)}else console.log("No se encontró ningún reglamento.")}catch(a){console.error("Error al obtener el reglamento:",a)}})();const o=a=>{a.key==="Escape"&&e()};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[t,e]);const i=s=>{s.target===s.currentTarget&&e()};return t?f.jsx("div",{className:"modal-overlay",onClick:i,children:f.jsxs("div",{className:"modal-content",children:[f.jsx("h2",{children:"Reglamento"}),n?f.jsx("iframe",{src:n,title:"Reglamento",width:"100%",height:"600px",style:{border:"none"}}):f.jsx("p",{children:"Cargando reglamento..."}),f.jsx("button",{className:"close-button",onClick:e,children:"Cerrar"})]})}):null},_b="/assets/logo-HnVQbui9.png",iw=()=>{const[t,e]=w.useState(!1),[n,r]=w.useState(!1),i=w.useRef(null),s=Md(),o=["/admin"];if(!s.pathname||o.includes(s.pathname))return null;const a=()=>{e(!0)},l=()=>{e(!1)},u=(h,g)=>{h.preventDefault();const m=document.getElementById(g);m&&m.scrollIntoView({behavior:"smooth"})},d=h=>{h.stopPropagation(),r(!n)},c=()=>{r(!1)};return w.useEffect(()=>{const h=g=>{i.current&&!i.current.contains(g.target)&&n&&c()};return document.addEventListener("click",h),()=>{document.removeEventListener("click",h)}},[n]),f.jsxs("header",{className:"header",children:[f.jsxs("div",{className:"logo",children:[f.jsx("img",{src:_b,alt:"Logo",className:"logo-img"}),f.jsx("span",{className:"neon-text",children:"RANKING PADEL"})]}),f.jsxs("button",{className:`hamburger-menu ${n?"open":""}`,onClick:d,children:[f.jsx("div",{className:"bar"}),f.jsx("div",{className:"bar"}),f.jsx("div",{className:"bar"})]}),f.jsxs("nav",{ref:i,className:`nav ${n?"open":""}`,children:[f.jsx("button",{onClick:h=>{u(h,"canchas"),c()},className:"nav-button",children:"Canchas"}),f.jsx("button",{onClick:h=>{u(h,"torneos"),c()},className:"nav-button",children:"Torneos"}),f.jsx("button",{onClick:h=>{u(h,"jugadores"),c()},className:"nav-button",children:"Jugadores"}),f.jsx("button",{onClick:h=>{u(h,"ranking"),c()},className:"nav-button",children:"Ranking"}),f.jsx("button",{onClick:()=>{a(),c()},className:"nav-button",children:"Reglamento"})]}),f.jsx(gb,{isOpen:t,closeModal:l})]})},Ar=w.createContext(),vb=en.memo(({children:t})=>{const[e,n]=w.useState([]),[r,i]=w.useState([]),[s,o]=w.useState([]),[a,l]=w.useState([]);return w.useEffect(()=>{const u=async()=>{const m=He(Ge,"banners"),y=He(Ge,"jugadores"),I=He(Ge,"torneos"),_=He(Ge,"clubs"),p=async(v,E,A)=>{const b=(await yr(E)).val(),L=b?Array.isArray(b)?b:Object.values(b):[];L.length>0&&localStorage.setItem(v,JSON.stringify(L)),A(L)};await p("banners",m,n),await p("jugadores",y,i),await p("torneos",I,o),await p("clubs",_,l)},d=JSON.parse(localStorage.getItem("banners"))||[],c=JSON.parse(localStorage.getItem("jugadores"))||[],h=JSON.parse(localStorage.getItem("torneos"))||[],g=JSON.parse(localStorage.getItem("clubs"))||[];d.length&&n(d),c.length&&i(c),h.length&&o(h),g.length&&l(g),u()},[]),w.useEffect(()=>{const u=async()=>{const d=new Date().toISOString().split("T")[0],c=s.filter(m=>m.fecha.split("/").reverse().join("-")>=d),h=He(Ge,"torneos");(await yr(h)).forEach(m=>{m.val().fecha.split("/").reverse().join("-")<d&&vR(He(Ge,`torneos/${m.key}`))}),o(c)};s.length&&u()},[s]),f.jsx(Ar.Provider,{value:{banners:e,jugadores:r,setJugadores:i,torneos:s,clubes:a},children:t})}),yb=()=>{const{banners:t}=w.useContext(Ar),[e,n]=w.useState(0),[r,i]=w.useState(!0),s=w.useRef(null),o=w.useRef(null),a=w.useRef(null);w.useEffect(()=>{if(!t||t.length===0)return;const c=I=>{const _=s.current;I>=t.length&&n(0),I<0&&n(t.length-1),_.style.transform=`translateX(${-e*100}%)`,h()},h=()=>{o.current.querySelectorAll(".dot").forEach((_,p)=>{_.classList.toggle("active",p===e)})},g=()=>{a.current=setInterval(()=>{r&&n(I=>(I+1)%t.length)},3e3)},m=()=>{let I=0,_=0,p=0,v=!1;const E=s.current,A=L=>{I=L.clientX,E.style.transition="none",v=!0,i(!1)},O=L=>{v&&(_=L.clientX-I,E.style.transform=`translateX(${_+p}px)`)},b=L=>{if(!v)return;const F=L.clientX-I;let z=e;F<-50?z=(e+1)%t.length:F>50&&(z=(e-1+t.length)%t.length),n(z),c(z),p+=_,E.style.transition="transform 0.3s ease-out",v=!1,i(!0),I=void 0,_=0};return E.addEventListener("pointerdown",A),E.addEventListener("pointermove",O),E.addEventListener("pointerup",b),E.addEventListener("pointercancel",()=>{v=!1}),()=>{E.removeEventListener("pointerdown",A),E.removeEventListener("pointermove",O),E.removeEventListener("pointerup",b)}};c(e),g();const y=m();return()=>{clearInterval(a.current),y()}},[e,r,t]);const l=()=>{n(c=>(c+1)%t.length)},u=()=>{n(c=>(c-1+t.length)%t.length)},d=c=>{n(c)};return f.jsxs("div",{className:"banner-slider",children:[f.jsx("div",{className:"slides",ref:s,children:t&&t.length>0?t.map((c,h)=>f.jsx("div",{className:"slide",children:f.jsx("a",{href:c.link,children:f.jsx("img",{src:c.photoURL,alt:c.title,className:"banner-slide-image",onError:g=>{g.target.onerror=null,g.target.src="https://via.placeholder.com/150"}})})},h)):f.jsx("div",{children:"No banners available"})}),f.jsx("div",{className:"dots",ref:o,children:t&&t.map((c,h)=>f.jsx("span",{className:`dot ${h===e?"active":""}`,onClick:()=>d(h)},h))}),f.jsx("button",{className:"prev",onClick:u,children:"❮"}),f.jsx("button",{className:"next",onClick:l,children:"❯"})]})};var sw={exports:{}},wb="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Eb=wb,Sb=Eb;function ow(){}function aw(){}aw.resetWarningCache=ow;var Cb=function(){function t(r,i,s,o,a,l){if(l!==Sb){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:aw,resetWarningCache:ow};return n.PropTypes=n,n};sw.exports=Cb();var Ib=sw.exports;const Q=Uc(Ib);var lw={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Am=en.createContext&&en.createContext(lw),Tb=["attr","size","title"];function kb(t,e){if(t==null)return{};var n=Rb(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Rb(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function Ua(){return Ua=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ua.apply(this,arguments)}function bm(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function za(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?bm(Object(n),!0).forEach(function(r){Nb(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):bm(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Nb(t,e,n){return e=Pb(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Pb(t){var e=xb(t,"string");return typeof e=="symbol"?e:e+""}function xb(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function uw(t){return t&&t.map((e,n)=>en.createElement(e.tag,za({key:n},e.attr),uw(e.child)))}function vt(t){return e=>en.createElement(Ab,Ua({attr:za({},t.attr)},e),uw(t.child))}function Ab(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=kb(t,Tb),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),en.createElement("svg",Ua({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:za(za({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&en.createElement("title",null,s),t.children)};return Am!==void 0?en.createElement(Am.Consumer,null,n=>e(n)):e(lw)}function bb(t){return vt({tag:"svg",attr:{viewBox:"0 0 488 512"},child:[{tag:"path",attr:{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"},child:[]}]})(t)}function cw(t){return vt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(t)}function Ob(t){return vt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(t)}function lO(t){return vt({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(t)}function uO(t){return vt({tag:"svg",attr:{viewBox:"0 0 256 512"},child:[{tag:"path",attr:{d:"M128 0c35.346 0 64 28.654 64 64s-28.654 64-64 64c-35.346 0-64-28.654-64-64S92.654 0 128 0m119.283 354.179l-48-192A24 24 0 0 0 176 144h-11.36c-22.711 10.443-49.59 10.894-73.28 0H80a24 24 0 0 0-23.283 18.179l-48 192C4.935 369.305 16.383 384 32 384h56v104c0 13.255 10.745 24 24 24h32c13.255 0 24-10.745 24-24V384h56c15.591 0 27.071-14.671 23.283-29.821z"},child:[]}]})(t)}function cO(t){return vt({tag:"svg",attr:{viewBox:"0 0 192 512"},child:[{tag:"path",attr:{d:"M96 0c35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64S60.654 0 96 0m48 144h-11.36c-22.711 10.443-49.59 10.894-73.28 0H48c-26.51 0-48 21.49-48 48v136c0 13.255 10.745 24 24 24h16v136c0 13.255 10.745 24 24 24h64c13.255 0 24-10.745 24-24V352h16c13.255 0 24-10.745 24-24V192c0-26.51-21.49-48-48-48z"},child:[]}]})(t)}function dw(t){return vt({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(t)}function hw(t){return vt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"},child:[]}]})(t)}function dO(t){return vt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},child:[]}]})(t)}function hO(t){return vt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(t)}function fO(t){return vt({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(t)}function pO(t){return vt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(t)}const fw=({torneo:t,onClose:e})=>t?f.jsx("div",{className:"modal-overlay",onClick:e,children:f.jsxs("div",{className:"modal-content",onClick:n=>n.stopPropagation(),children:[f.jsx("h3",{children:t.nombre}),f.jsxs("p",{children:[f.jsx(Ob,{})," ",t.fecha]}),f.jsxs("p",{children:[f.jsx(dw,{})," ",t.direccion]}),f.jsxs("p",{children:[f.jsx(hw,{})," ",f.jsx("a",{href:`tel:${t.whatsapp}`,children:t.whatsapp})]}),f.jsxs("p",{children:["Hora: ",t.hora]}),t.archivoURL&&f.jsx("p",{children:f.jsx("img",{src:t.archivoURL,alt:t.nombre,className:"torneo-image"})})]})}):null;fw.propTypes={torneo:Q.shape({nombre:Q.string.isRequired,fecha:Q.string.isRequired,hora:Q.string,telefono:Q.string,ubicacion:Q.string,archivoURL:Q.string}),onClose:Q.func.isRequired};const Lb=()=>{const{torneos:t}=w.useContext(Ar),[e,n]=w.useState(null),[r,i]=w.useState([]);w.useEffect(()=>{const a=new Date().toISOString().split("T")[0],l=t.filter(u=>u.fecha.split("/").reverse().join("-")>=a);i(l)},[t]);const s=a=>{n({nombre:a.nombre||"Nombre no disponible",fecha:a.fecha||"Fecha no disponible",direccion:a.ubicacion||"Ubicación no disponible",lugar:"",whatsapp:a.telefono||"Número no disponible",archivoURL:a.archivoURL||"",hora:a.hora||"Hora no disponible"})},o=()=>{n(null)};return f.jsxs("div",{className:"cards-torneos-container",children:[r.length>0?r.map(a=>f.jsxs("div",{className:"card-torneo",children:[f.jsx("h3",{className:"card-title",children:a.nombre}),f.jsx("p",{className:"card-date",children:a.fecha}),f.jsx("p",{className:"card-description",children:a.descripcion||"Descripción no disponible"}),f.jsx("button",{className:"btn-inscribir",onClick:()=>s(a),children:"Inscribirse"})]},a.id)):f.jsx("p",{children:"No hay torneos disponibles."}),f.jsx(fw,{torneo:e,onClose:o})]})},pw=({jugadores:t,onClose:e,genero:n})=>{const[r,i]=w.useState("conPuntos"),s=jd();w.useEffect(()=>{const u=()=>(e(),!1);return window.history.pushState(null,"",window.location.href),window.addEventListener("popstate",u),()=>{window.removeEventListener("popstate",u)}},[e]);const o=t.filter(u=>u.points>0).sort((u,d)=>d.points-u.points),a=t.filter(u=>u.points===0).sort((u,d)=>u.name.localeCompare(d.name)),l=u=>{u.target.className.includes("modal-gnr")&&(e(),s(-1))};return f.jsx("div",{className:"modal-gnr",onClick:l,children:f.jsxs("div",{className:"modal-gnr-content",onClick:u=>u.stopPropagation(),children:[f.jsx("h2",{className:"modal-gnr-title",children:n==="masculino"?"Jugadores Masculinos":"Jugadoras Femeninas"}),f.jsxs("div",{className:"modal-gnr-player-list",children:[r==="conPuntos"&&o.map(u=>f.jsxs("div",{className:"modal-gnr-player-card",children:[f.jsx("img",{src:u.photoURL,alt:u.name,className:"modal-gnr-player-photo"}),f.jsxs("div",{className:"modal-gnr-player-info",children:[f.jsx("h4",{children:u.name}),f.jsxs("p",{children:[u.points," puntos"]})]})]},u.id)),r==="sinPuntos"&&a.map(u=>f.jsxs("div",{className:"modal-gnr-player-card",children:[f.jsx("img",{src:u.photoURL,alt:u.name,className:"modal-gnr-player-photo"}),f.jsxs("div",{className:"modal-gnr-player-info",children:[f.jsx("h4",{children:u.name}),f.jsx("p",{children:"Sin puntos"})]})]},u.id))]}),f.jsxs("div",{className:"modal-gnr-tabs-container",children:[f.jsx("button",{className:`modal-gnr-tab ${r==="conPuntos"?"active":""}`,onClick:()=>i("conPuntos"),children:"Con Puntos"}),f.jsx("button",{className:`modal-gnr-tab ${r==="sinPuntos"?"active":""}`,onClick:()=>i("sinPuntos"),children:"Sin Puntos"})]})]})})};pw.propTypes={jugadores:Q.arrayOf(Q.shape({id:Q.string.isRequired,name:Q.string.isRequired,points:Q.number.isRequired,photoURL:Q.string.isRequired})).isRequired,onClose:Q.func.isRequired,genero:Q.string.isRequired};const Db=()=>{const{jugadores:t}=w.useContext(Ar),[e,n]=w.useState(!1),[r,i]=w.useState([]),[s,o]=w.useState(""),a=d=>t.filter(c=>c.gender===d),l=d=>{const c=a(d);i(c),o(d),n(!0)},u=()=>{n(!1),o("")};return f.jsxs("div",{className:"container-jugadores",children:[f.jsx("div",{className:"player-box male",onClick:()=>l("masculino"),children:f.jsx("h2",{children:"Jugadores Masculinos"})}),f.jsx("div",{className:"player-box female",onClick:()=>l("femenino"),children:f.jsx("h2",{children:"Jugadoras Femeninas"})}),e&&f.jsx(pw,{jugadores:r,onClose:u,genero:s})]})},mw=({club:t,onClose:e})=>{if(!t)return null;w.useEffect(()=>{const r=()=>(e(),!1);return window.history.pushState(null,"",window.location.href),window.addEventListener("popstate",r),()=>{window.removeEventListener("popstate",r)}},[e]);const n=r=>{r.target.className.includes("modal-clubes-overlay")&&e()};return f.jsx("div",{className:"modal-clubes-overlay",onClick:n,children:f.jsxs("div",{className:"modal-clubes-content",onClick:r=>r.stopPropagation(),children:[f.jsx("h3",{children:t.name}),f.jsxs("p",{children:[f.jsx(dw,{})," ",t.location]}),f.jsxs("p",{children:[f.jsx(hw,{})," ",f.jsx("a",{href:`tel:${t.phone}`,children:t.phone})]}),f.jsx("img",{src:t.logoURL,alt:"Logo del Club",className:"modal-clubes-logo"}),f.jsx("button",{className:"modal-clubes-close",onClick:e,children:"Cerrar"})]})})};mw.propTypes={club:Q.shape({name:Q.string.isRequired,location:Q.string,phone:Q.string,logoURL:Q.string}),onClose:Q.func.isRequired};const Mb=()=>{const{clubes:t}=w.useContext(Ar),[e,n]=w.useState([]),[r,i]=w.useState(null),[s,o]=w.useState(!1);w.useEffect(()=>{if(console.log("Datos de clubes recibidos:",t),t){const u=Array.isArray(t)?t:Object.values(t),d=u.filter(c=>c.logoURL).map(c=>({...c,logoURL:c.logoURL}));console.log("Clubes en el contexto:",u),console.log("Logos filtrados:",d),n(d)}else n([])},[t]);const a=u=>{i(u),o(!0)},l=()=>{o(!1),i(null)};return f.jsxs("div",{className:"carousel-container",children:[f.jsx("h1",{className:"title",children:"Canchas Belgranenses"}),f.jsx("div",{className:"carousel",children:f.jsx("div",{className:"carousel-inner",children:e.length>0?e.map((u,d)=>f.jsx("div",{className:"logo-circle",onClick:()=>a(e[d]),children:f.jsx("img",{src:u.logoURL,alt:`Logo ${d+1}`,onError:c=>{c.target.onerror=null,c.target.src="https://via.placeholder.com/150"}})},d)):f.jsx("p",{children:"No hay logos disponibles."})})}),s&&f.jsx(mw,{club:r,onClose:l})]})},$h=({isOpen:t,onClose:e,participants:n})=>{const[r,i]=w.useState(""),[s,o]=w.useState(n);return w.useEffect(()=>{if(!t)return;const a=()=>(e(),!1);return window.history.pushState(null,"",window.location.href),window.addEventListener("popstate",a),()=>{window.removeEventListener("popstate",a)}},[t,e]),w.useEffect(()=>{const a=n.filter(l=>l.name.toLowerCase().includes(r.toLowerCase()));o(a)},[r,n]),t?f.jsx("div",{className:"modal-overlay",onClick:e,children:f.jsxs("div",{className:"modal-content",onClick:a=>a.stopPropagation(),children:[f.jsxs("div",{className:"modal-header",children:[f.jsx("h2",{children:"Ranking Completo"}),f.jsx("button",{className:"close-btn",onClick:e,children:"Cerrar"})]}),f.jsx("div",{className:"search-bar",children:f.jsx("input",{type:"text",placeholder:"Buscar por nombre...",value:r,onChange:a=>i(a.target.value)})}),f.jsxs("table",{children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:"#"}),f.jsx("th",{children:"Nombre"}),f.jsx("th",{children:"Puntos"})]})}),f.jsx("tbody",{children:s.map(a=>f.jsxs("tr",{style:a.rank===1?{backgroundColor:"#5c5be5",color:"#fff",fontWeight:"bold"}:{},children:[f.jsx("td",{children:a.rank}),f.jsxs("td",{children:[a.name,a.tournamentsPlayed>0&&f.jsxs("div",{style:{fontWeight:"bold",color:"violet",marginTop:"4px"},children:["Torneos jugados: ",a.tournamentsPlayed]})]}),f.jsxs("td",{className:"points-cell",children:[a.points,a.rank===1&&f.jsx("img",{className:"gold-medal",src:"https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true",alt:"gold medal"})]})]},a.id))})]})]})}):null};$h.propTypes={isOpen:Q.bool.isRequired,onClose:Q.func.isRequired,participants:Q.arrayOf(Q.shape({id:Q.number.isRequired,rank:Q.number.isRequired,name:Q.string.isRequired,points:Q.string.isRequired})).isRequired};const Om="/assets/tennis-rZAVwrir.ico",gw=({selectedCategory:t,onCategoryChange:e,categories:n})=>{const[r,i]=w.useState(!1),s=o=>{e(o),i(!1)};return f.jsxs("div",{className:`select-menu ${r?"active":""}`,children:[f.jsxs("div",{className:"select-btn",onClick:()=>i(!r),children:[f.jsx("img",{src:Om,alt:"Tennis Icon",className:"select-icon"}),f.jsx("span",{className:"sBtn-text",children:t||"Selecciona una categoría"})]}),f.jsx("ul",{className:"options",children:n.map((o,a)=>f.jsxs("li",{className:"option",onClick:()=>s(o),children:[f.jsx("img",{src:Om,alt:"Tennis Icon",className:"category-icon"}),f.jsx("span",{className:"option-text",children:o})]},a))})]})},jb=()=>{const{jugadores:t}=w.useContext(Ar),[e,n]=w.useState(!1),[r,i]=w.useState("Septima"),o=(Array.isArray(t)?t:[]).filter(m=>m!=null),a=o.filter(m=>m.gender==="femenino").map(m=>m.category),l=[...new Set(a)],u=l.length>0,d=o.filter(m=>m.gender==="femenino"&&(r==="Selecciona una categoría"?m.category==="Septima":m.category===r)).sort((m,y)=>y.points-m.points).map((m,y)=>({...m,rank:y+1})),c=()=>n(!0),h=()=>n(!1),g=m=>i(m);return f.jsxs("div",{className:"ranking-column",children:[f.jsx("div",{id:"header",children:f.jsx("h1",{children:"Ranking Femenino"})}),f.jsxs("div",{className:"select-container",children:[f.jsx("div",{className:"arrow-bounce",children:f.jsx(cw,{color:"green",size:24})}),f.jsx(gw,{selectedCategory:r,onCategoryChange:g,categories:u?l:["No hay categorías disponibles"],placeholder:"Selecciona una categoría"})]}),f.jsxs("div",{id:"leaderboard",children:[f.jsx("div",{className:"ribbon"}),f.jsx("table",{children:f.jsx("tbody",{children:d.length>0?d.slice(0,5).map((m,y)=>f.jsxs("tr",{className:y===0?"highlight-row":"",children:[f.jsx("td",{className:"number",children:m.rank}),f.jsxs("td",{className:"name",children:[m.name,m.tournamentsPlayed>0&&f.jsxs("div",{style:{fontWeight:"bold",color:"violet"},children:["Torneos jugados: ",m.tournamentsPlayed]})]}),f.jsxs("td",{className:"points",children:[m.points,y===0&&f.jsx("img",{className:"gold-medal",src:"https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true",alt:"gold medal"})]})]},m.id)):f.jsx("tr",{children:f.jsx("td",{colSpan:"3",children:"No hay jugadoras disponibles."})})})}),f.jsx("button",{className:"ver-mas-btn",onClick:c,children:"Ver más"})]}),f.jsx($h,{isOpen:e,onClose:h,participants:d})]})},Fb=()=>{const{jugadores:t}=w.useContext(Ar),[e,n]=w.useState(!1),[r,i]=w.useState("Septima"),o=(Array.isArray(t)?t:[]).filter(m=>m!=null),a=o.filter(m=>m.gender==="masculino").map(m=>m.category),l=[...new Set(a)],u=l.length>0,d=o.filter(m=>m.gender==="masculino"&&(r==="Selecciona una categoría"?m.category==="Septima":m.category===r)).sort((m,y)=>y.points-m.points).map((m,y)=>({...m,rank:y+1})),c=()=>n(!0),h=()=>n(!1),g=m=>i(m);return f.jsxs("div",{className:"ranking-column",children:[f.jsx("div",{id:"header",children:f.jsx("h1",{children:"Ranking Masculino"})}),f.jsxs("div",{className:"select-container",children:[f.jsx("div",{className:"arrow-bounce",children:f.jsx(cw,{color:"green",size:24})}),f.jsx(gw,{selectedCategory:r,onCategoryChange:g,categories:u?l:["No hay categorías disponibles"],placeholder:"Selecciona una categoría"})]}),f.jsxs("div",{id:"leaderboard",children:[f.jsx("div",{className:"ribbon"}),f.jsx("table",{children:f.jsx("tbody",{children:d.length>0?d.slice(0,5).map((m,y)=>f.jsxs("tr",{className:y===0?"highlight-row":"",children:[f.jsx("td",{className:"number",children:m.rank}),f.jsxs("td",{className:"name",children:[m.name,m.tournamentsPlayed>0&&f.jsxs("div",{style:{fontWeight:"bold",color:"violet"},children:["Torneos jugados: ",m.tournamentsPlayed]})]}),f.jsxs("td",{className:"points",children:[m.points,y===0&&f.jsx("img",{className:"gold-medal",src:"https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true",alt:"gold medal"})]})]},m.id)):f.jsx("tr",{children:f.jsx("td",{colSpan:"3",children:"No hay jugadores disponibles."})})})}),f.jsx("button",{className:"ver-mas-btn",onClick:c,children:"Ver más"})]}),f.jsx($h,{isOpen:e,onClose:h,participants:d})]})},Ub=()=>f.jsxs("div",{className:"ranking-container",children:[f.jsx(Fb,{}),f.jsx(jb,{})]}),Lm=()=>{const[t,e]=w.useState([]),[n,r]=w.useState(0);w.useEffect(()=>{(async()=>{try{const o=He(Ge,"containers/"),a=await yr(o);if(a.exists()){const l=a.val(),u=[];Object.keys(l).forEach(d=>{const c=Object.keys(l[d]).map(h=>({id:h,...l[d][h]}));u.push({containerKey:d,containerItems:c,currentImageIndex:0})}),e(u)}else console.log("No data available")}catch(o){console.error("Error al obtener los contenedores:",o)}})()},[]);const i=s=>{e(o=>o.map(a=>{if(a.containerKey===s){const l=(a.currentImageIndex+1)%a.containerItems.length;return{...a,currentImageIndex:l}}return a}))};return w.useEffect(()=>{const s=setInterval(()=>{var a,l;const o=(n+1)%t.length;r(o),((l=(a=t[o])==null?void 0:a.containerItems)==null?void 0:l.length)>1&&i(t[o].containerKey)},1500);return()=>clearInterval(s)},[n,t]),f.jsx("div",{className:"slider-container",children:t.length>0?f.jsx("div",{className:"slider",children:t.map(s=>f.jsx("div",{className:"container-item",children:s.containerItems.length>0?s.containerItems.length===1?f.jsx(zb,{image:s.containerItems[0]}):f.jsx(Bb,{containerKey:s.containerKey,images:s.containerItems,currentImageIndex:s.currentImageIndex}):f.jsx("p",{children:"No hay imágenes disponibles"})},s.containerKey))}):f.jsx("p",{children:"Cargando contenedores..."})})},zb=({image:t})=>f.jsx("a",{href:t.link||"#",target:t.link?"_blank":"",rel:"noopener noreferrer",children:t.photoURL?f.jsx("img",{src:t.photoURL,alt:t.title||"Imagen no disponible",style:{width:"250px",height:"250px",objectFit:"cover"}}):null}),Bb=({containerKey:t,images:e,currentImageIndex:n})=>{const r=e[n];return f.jsx("div",{className:"container-item",children:f.jsx("a",{href:r.link||"#",target:r.link?"_blank":"",rel:"noopener noreferrer",children:r.photoURL?f.jsx("img",{src:r.photoURL,alt:r.title||"Imagen no disponible",className:"show",style:{objectFit:"cover"}}):null})})},_w=()=>{const[t,e]=w.useState(""),n=async()=>{try{const r=He(Ge,"whatsappNumber"),i=await yr(r);i.exists()?e(i.val()):console.log("No se encontró el número de WhatsApp en Firebase.")}catch(r){console.error("Error al obtener el número de WhatsApp:",r)}};return w.useEffect(()=>{n()},[]),f.jsxs("div",{className:"wh-api wh-fixed",children:[f.jsx("a",{href:`https://wa.me/${t}`,target:"_blank",rel:"noopener noreferrer",children:f.jsx("button",{className:"wh-ap-btn"})}),f.jsx("span",{className:"wh-ap-tooltip",children:"CONTACTANOS"})]})},Wb=w.lazy(()=>Wt(()=>import("./PopupInicio-CpBVvWMz.js"),__vite__mapDeps([0,1]))),$b=()=>f.jsxs("div",{children:[f.jsx(w.Suspense,{fallback:f.jsx("div",{children:"Loading popup..."}),children:f.jsx(Wb,{})}),f.jsx(iw,{}),f.jsx(yb,{}),f.jsx("section",{id:"canchas",children:f.jsx(Mb,{})}),f.jsx("section",{id:"torneos",children:f.jsx(Lb,{})}),f.jsx("section",{children:f.jsx(Lm,{})}),f.jsx("section",{id:"jugadores",children:f.jsx(Db,{})}),f.jsxs("div",{className:"rankings-container",children:[f.jsx("div",{className:"ranking-container",children:f.jsx("section",{id:"ranking",children:f.jsx(Ub,{})})}),f.jsx("section",{children:f.jsx(Lm,{})})]}),f.jsx(_w,{})]}),Vb=()=>{const t=jd(),e=new Mt,n=async()=>{try{const i=(await ox(rw,e)).user;console.log("User Info:",i),t("/admin")}catch(r){console.error("Error al iniciar sesión:",r.message)}};return f.jsxs("div",{className:"admin-login-container",children:[f.jsx("h1",{className:"admin-login-title",children:"Admin Login"}),f.jsxs("button",{className:"admin-login-button",onClick:n,children:[f.jsx(bb,{className:"admin-google-icon"}),f.jsx("span",{children:"Login with Google"})]})]})},Hb=()=>{const[t,e]=w.useState(""),[n,r]=w.useState(""),i=async()=>{try{const a=He(Ge,"whatsappNumber"),l=await yr(a);l.exists()&&e(l.val())}catch(a){console.error("Error al obtener el número de WhatsApp:",a)}};w.useEffect(()=>{i()},[]);const s=a=>{r(a.target.value)},o=async()=>{if(n.trim()===""){alert("Por favor, ingresa un número de WhatsApp válido.");return}try{const a=He(Ge,"whatsappNumber");await zs(a,n),e(n),r(""),alert("Número de WhatsApp actualizado con éxito")}catch(a){console.error("Error al actualizar el número de WhatsApp:",a),alert("Hubo un error al actualizar el número de WhatsApp.")}};return f.jsxs("div",{className:"whatsapp-settings",children:[f.jsxs("h2",{children:["Número de WhatsApp Actual: ",t]}),f.jsx("input",{type:"text",value:n,onChange:s,placeholder:"Nuevo número de WhatsApp"}),f.jsx("button",{onClick:o,children:"Actualizar Número"})]})},Gb=({onClick:t})=>f.jsx("button",{className:"agregar-reglamento-button",onClick:t,children:"Agregar Reglamento"}),vw=({onClose:t})=>{const[e,n]=w.useState(""),[r,i]=w.useState(null),[s,o]=w.useState(null),a=async()=>{try{const c=He(Ge,"reglamentos"),h=CR(c,SR(1)),g=await yr(h);if(g.exists()){const m=g.val(),y=Object.keys(m)[0];o(y)}}catch(c){console.error("Error al obtener el último reglamento:",c)}};w.useEffect(()=>{a(),window.history.pushState({modalOpen:!0},"");const c=h=>{h.state&&h.state.modalOpen&&t()};return window.addEventListener("popstate",c),()=>{var h;window.removeEventListener("popstate",c),(h=window.history.state)!=null&&h.modalOpen&&window.history.back()}},[]);const l=c=>{i(c.target.files[0])},u=async c=>{if(c.preventDefault(),!e||!r){alert("Por favor, ingrese un título y seleccione un archivo.");return}try{const h=ub(mb,`reglamentos/${r.name}`);await ab(h,r);const g=await lb(h);if(s){const m=He(Ge,`reglamentos/${s}`);await zs(m,{title:e,fileURL:g})}else{const m=He(Ge,"reglamentos");await zs(m,{title:e,fileURL:g})}alert("Reglamento guardado con éxito"),t()}catch(h){console.error("Error al guardar el reglamento:",h),alert("Hubo un error al guardar el reglamento.")}},d=c=>{c.target.classList.contains("reglamento-modal__overlay")&&t()};return f.jsx("div",{className:"reglamento-modal__overlay",onClick:d,children:f.jsxs("div",{className:"reglamento-modal__content",children:[f.jsx("h2",{className:"reglamento-modal__title",children:"Cargar Reglamento de Padel"}),f.jsxs("form",{className:"reglamento-modal__form",onSubmit:u,children:[f.jsxs("div",{className:"reglamento-modal__form-group",children:[f.jsx("label",{htmlFor:"title",className:"reglamento-modal__label",children:"Título"}),f.jsx("textarea",{id:"title",value:e,onChange:c=>n(c.target.value),placeholder:"Ingrese el título",className:"reglamento-modal__textarea"})]}),f.jsxs("div",{className:"reglamento-modal__form-group",children:[f.jsx("label",{htmlFor:"file",className:"reglamento-modal__label",children:"Archivo del Reglamento"}),f.jsx("input",{type:"file",id:"file",onChange:l,className:"reglamento-modal__input-file"})]}),f.jsxs("div",{className:"reglamento-modal__actions",children:[f.jsx("button",{type:"submit",className:"reglamento-modal__button reglamento-modal__button--save",children:"Guardar"}),f.jsx("button",{type:"button",onClick:t,className:"reglamento-modal__button reglamento-modal__button--cancel",children:"Cancelar"})]})]})]})})};vw.propTypes={onClose:Q.func.isRequired};const qb=w.lazy(()=>Wt(()=>import("./CargarBannerButton-Tc5Ic1oR.js"),__vite__mapDeps([2,3]))),Kb=w.lazy(()=>Wt(()=>import("./AgendaTorneoButton-BNDp81p5.js"),__vite__mapDeps([4,5]))),Qb=w.lazy(()=>Wt(()=>import("./AgregarJugadorButton-D741J6Ca.js"),__vite__mapDeps([6,7]))),Yb=w.lazy(()=>Wt(()=>import("./AgregarClubButton-Cxvs8MUg.js"),__vite__mapDeps([8,9]))),Jb=w.lazy(()=>Wt(()=>import("./BannerModal-Cw_fxU7o.js"),__vite__mapDeps([10,11]))),Xb=w.lazy(()=>Wt(()=>import("./AgendaTorneoModal-BbtHBDPn.js"),__vite__mapDeps([12,13]))),Zb=w.lazy(()=>Wt(()=>import("./AgregarJugadorModal-B2d_iuqf.js"),__vite__mapDeps([14,15,16]))),eO=w.lazy(()=>Wt(()=>import("./AgregarClubModal-BSmg4GHl.js"),__vite__mapDeps([17,18]))),tO=w.lazy(()=>Wt(()=>import("./PlayerTable-BStHVNUV.js"),__vite__mapDeps([19,15,20]))),nO=()=>{const t=jd(),[e,n]=w.useState(!1),[r,i]=w.useState(!1),[s,o]=w.useState(!1),[a,l]=w.useState(!1),[u,d]=w.useState(!1),[c,h]=w.useState("1234567890");return w.useEffect(()=>{const g=rw.onAuthStateChanged(m=>{m||t("/admin-login")});return()=>g()},[t]),f.jsxs("div",{children:[f.jsx("h1",{children:"Admin Panel"}),f.jsx(_w,{phoneNumber:c}),f.jsxs("div",{className:"admin-panel-buttons",children:[f.jsx(w.Suspense,{fallback:f.jsx("div",{children:"Loading CargaBannerButton..."}),children:f.jsx(qb,{onClick:()=>n(!0)})}),f.jsx(w.Suspense,{fallback:f.jsx("div",{children:"Loading AgendaTorneoButton..."}),children:f.jsx(Kb,{onClick:()=>i(!0)})}),f.jsx(w.Suspense,{fallback:f.jsx("div",{children:"Loading AgregarJugadorButton..."}),children:f.jsx(Qb,{onClick:()=>o(!0)})}),f.jsx(w.Suspense,{fallback:f.jsx("div",{children:"Loading AgregarClubButton..."}),children:f.jsx(Yb,{onClick:()=>l(!0)})}),f.jsx(w.Suspense,{fallback:f.jsx("div",{children:"Loading AgregarReglamentoButton..."}),children:f.jsx(Gb,{onClick:()=>d(!0)})})]}),f.jsx(Hb,{currentWhatsAppNumber:c}),f.jsx(w.Suspense,{fallback:f.jsx("div",{children:"Loading BannerModal..."}),children:e&&f.jsx(Jb,{onClose:()=>n(!1)})}),f.jsx(w.Suspense,{fallback:f.jsx("div",{children:"Loading AgendaTorneoModal..."}),children:r&&f.jsx(Xb,{onClose:()=>i(!1)})}),f.jsx(w.Suspense,{fallback:f.jsx("div",{children:"Loading AgregarJugadorModal..."}),children:s&&f.jsx(Zb,{onClose:()=>o(!1)})}),f.jsx(w.Suspense,{fallback:f.jsx("div",{children:"Loading AgregarClubModal..."}),children:a&&f.jsx(eO,{onClose:()=>l(!1)})}),f.jsx(w.Suspense,{fallback:f.jsx("div",{children:"Loading ReglamentoModal..."}),children:u&&f.jsx(vw,{onClose:()=>d(!1)})}),f.jsx(w.Suspense,{fallback:f.jsx("div",{children:"Loading PlayerTable..."}),children:f.jsx(tO,{})})]})},rO=()=>f.jsx(vb,{children:f.jsxs(FC,{children:[f.jsx(iw,{}),f.jsxs(DC,{children:[f.jsx(Fo,{path:"/",element:f.jsx($b,{})}),f.jsx(Fo,{path:"/admin-login",element:f.jsx(Vb,{})}),f.jsx(Fo,{path:"/admin",element:f.jsx(nO,{})})]})]})});X_.initialize("G-7J7GSZ5GPR");X_.send("pageview");q_(document.getElementById("root")).render(f.jsx(w.StrictMode,{children:f.jsx(rO,{})}));export{Ar as A,hO as F,Q as P,He as a,ub as b,lb as c,Ge as d,aO as e,vR as f,yr as g,zs as h,Uc as i,f as j,cO as k,uO as l,dO as m,fO as n,oO as o,iO as p,lO as q,w as r,mb as s,pO as t,ab as u,sO as v};
