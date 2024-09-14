function Iw(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function zu(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Om={exports:{}},Fa={},Dm={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ms=Symbol.for("react.element"),Tw=Symbol.for("react.portal"),kw=Symbol.for("react.fragment"),Nw=Symbol.for("react.strict_mode"),Rw=Symbol.for("react.profiler"),xw=Symbol.for("react.provider"),Pw=Symbol.for("react.context"),bw=Symbol.for("react.forward_ref"),Aw=Symbol.for("react.suspense"),Ow=Symbol.for("react.memo"),Dw=Symbol.for("react.lazy"),Hh=Symbol.iterator;function Lw(t){return t===null||typeof t!="object"?null:(t=Hh&&t[Hh]||t["@@iterator"],typeof t=="function"?t:null)}var Lm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mm=Object.assign,jm={};function pi(t,e,n){this.props=t,this.context=e,this.refs=jm,this.updater=n||Lm}pi.prototype.isReactComponent={};pi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};pi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Fm(){}Fm.prototype=pi.prototype;function Bu(t,e,n){this.props=t,this.context=e,this.refs=jm,this.updater=n||Lm}var $u=Bu.prototype=new Fm;$u.constructor=Bu;Mm($u,pi.prototype);$u.isPureReactComponent=!0;var Gh=Array.isArray,Um=Object.prototype.hasOwnProperty,Wu={current:null},zm={key:!0,ref:!0,__self:!0,__source:!0};function Bm(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Um.call(e,r)&&!zm.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ms,type:t,key:s,ref:o,props:i,_owner:Wu.current}}function Mw(t,e){return{$$typeof:Ms,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ms}function jw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var qh=/\/+/g;function xl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?jw(""+t.key):e.toString(36)}function Co(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ms:case Tw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+xl(o,0):r,Gh(i)?(n="",t!=null&&(n=t.replace(qh,"$&/")+"/"),Co(i,e,n,"",function(c){return c})):i!=null&&(Vu(i)&&(i=Mw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(qh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Gh(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+xl(s,a);o+=Co(s,e,n,l,i)}else if(l=Lw(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+xl(s,a++),o+=Co(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Zs(t,e,n){if(t==null)return t;var r=[],i=0;return Co(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Fw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ze={current:null},So={transition:null},Uw={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:So,ReactCurrentOwner:Wu};function $m(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:Zs,forEach:function(t,e,n){Zs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Zs(t,function(){e++}),e},toArray:function(t){return Zs(t,function(e){return e})||[]},only:function(t){if(!Vu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$.Component=pi;$.Fragment=kw;$.Profiler=Rw;$.PureComponent=Bu;$.StrictMode=Nw;$.Suspense=Aw;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uw;$.act=$m;$.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Mm({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Wu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Um.call(e,l)&&!zm.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ms,type:t.type,key:i,ref:s,props:r,_owner:o}};$.createContext=function(t){return t={$$typeof:Pw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:xw,_context:t},t.Consumer=t};$.createElement=Bm;$.createFactory=function(t){var e=Bm.bind(null,t);return e.type=t,e};$.createRef=function(){return{current:null}};$.forwardRef=function(t){return{$$typeof:bw,render:t}};$.isValidElement=Vu;$.lazy=function(t){return{$$typeof:Dw,_payload:{_status:-1,_result:t},_init:Fw}};$.memo=function(t,e){return{$$typeof:Ow,type:t,compare:e===void 0?null:e}};$.startTransition=function(t){var e=So.transition;So.transition={};try{t()}finally{So.transition=e}};$.unstable_act=$m;$.useCallback=function(t,e){return ze.current.useCallback(t,e)};$.useContext=function(t){return ze.current.useContext(t)};$.useDebugValue=function(){};$.useDeferredValue=function(t){return ze.current.useDeferredValue(t)};$.useEffect=function(t,e){return ze.current.useEffect(t,e)};$.useId=function(){return ze.current.useId()};$.useImperativeHandle=function(t,e,n){return ze.current.useImperativeHandle(t,e,n)};$.useInsertionEffect=function(t,e){return ze.current.useInsertionEffect(t,e)};$.useLayoutEffect=function(t,e){return ze.current.useLayoutEffect(t,e)};$.useMemo=function(t,e){return ze.current.useMemo(t,e)};$.useReducer=function(t,e,n){return ze.current.useReducer(t,e,n)};$.useRef=function(t){return ze.current.useRef(t)};$.useState=function(t){return ze.current.useState(t)};$.useSyncExternalStore=function(t,e,n){return ze.current.useSyncExternalStore(t,e,n)};$.useTransition=function(){return ze.current.useTransition()};$.version="18.3.1";Dm.exports=$;var E=Dm.exports;const Sn=zu(E),zw=Iw({__proto__:null,default:Sn},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bw=E,$w=Symbol.for("react.element"),Ww=Symbol.for("react.fragment"),Vw=Object.prototype.hasOwnProperty,Hw=Bw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gw={key:!0,ref:!0,__self:!0,__source:!0};function Wm(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Vw.call(e,r)&&!Gw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:$w,type:t,key:s,ref:o,props:i,_owner:Hw.current}}Fa.Fragment=Ww;Fa.jsx=Wm;Fa.jsxs=Wm;Om.exports=Fa;var f=Om.exports,Vm={exports:{}},ot={},Hm={exports:{}},Gm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,M){var F=P.length;P.push(M);e:for(;0<F;){var ce=F-1>>>1,ve=P[ce];if(0<i(ve,M))P[ce]=M,P[F]=ve,F=ce;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var M=P[0],F=P.pop();if(F!==M){P[0]=F;e:for(var ce=0,ve=P.length,Js=ve>>>1;ce<Js;){var Gn=2*(ce+1)-1,Rl=P[Gn],qn=Gn+1,Xs=P[qn];if(0>i(Rl,F))qn<ve&&0>i(Xs,Rl)?(P[ce]=Xs,P[qn]=F,ce=qn):(P[ce]=Rl,P[Gn]=F,ce=Gn);else if(qn<ve&&0>i(Xs,F))P[ce]=Xs,P[qn]=F,ce=qn;else break e}}return M}function i(P,M){var F=P.sortIndex-M.sortIndex;return F!==0?F:P.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,h=3,_=!1,v=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var M=n(c);M!==null;){if(M.callback===null)r(c);else if(M.startTime<=P)r(c),M.sortIndex=M.expirationTime,e(l,M);else break;M=n(c)}}function y(P){if(w=!1,g(P),!v)if(n(l)!==null)v=!0,J(S);else{var M=n(c);M!==null&&Bt(y,M.startTime-P)}}function S(P,M){v=!1,w&&(w=!1,m(R),R=-1),_=!0;var F=h;try{for(g(M),d=n(l);d!==null&&(!(d.expirationTime>M)||P&&!D());){var ce=d.callback;if(typeof ce=="function"){d.callback=null,h=d.priorityLevel;var ve=ce(d.expirationTime<=M);M=t.unstable_now(),typeof ve=="function"?d.callback=ve:d===n(l)&&r(l),g(M)}else r(l);d=n(l)}if(d!==null)var Js=!0;else{var Gn=n(c);Gn!==null&&Bt(y,Gn.startTime-M),Js=!1}return Js}finally{d=null,h=F,_=!1}}var k=!1,N=null,R=-1,j=5,A=-1;function D(){return!(t.unstable_now()-A<j)}function Se(){if(N!==null){var P=t.unstable_now();A=P;var M=!0;try{M=N(!0,P)}finally{M?$e():(k=!1,N=null)}}else k=!1}var $e;if(typeof p=="function")$e=function(){p(Se)};else if(typeof MessageChannel<"u"){var We=new MessageChannel,xe=We.port2;We.port1.onmessage=Se,$e=function(){xe.postMessage(null)}}else $e=function(){C(Se,0)};function J(P){N=P,k||(k=!0,$e())}function Bt(P,M){R=C(function(){P(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){v||_||(v=!0,J(S))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var F=h;h=M;try{return P()}finally{h=F}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,M){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var F=h;h=P;try{return M()}finally{h=F}},t.unstable_scheduleCallback=function(P,M,F){var ce=t.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?ce+F:ce):F=ce,P){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=F+ve,P={id:u++,callback:M,priorityLevel:P,startTime:F,expirationTime:ve,sortIndex:-1},F>ce?(P.sortIndex=F,e(c,P),n(l)===null&&P===n(c)&&(w?(m(R),R=-1):w=!0,Bt(y,F-ce))):(P.sortIndex=ve,e(l,P),v||_||(v=!0,J(S))),P},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(P){var M=h;return function(){var F=h;h=M;try{return P.apply(this,arguments)}finally{h=F}}}})(Gm);Hm.exports=Gm;var qw=Hm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kw=E,st=qw;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qm=new Set,is={};function Er(t,e){ei(t,e),ei(t+"Capture",e)}function ei(t,e){for(is[t]=e,t=0;t<e.length;t++)qm.add(e[t])}var Zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cc=Object.prototype.hasOwnProperty,Qw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Kh={},Qh={};function Yw(t){return Cc.call(Qh,t)?!0:Cc.call(Kh,t)?!1:Qw.test(t)?Qh[t]=!0:(Kh[t]=!0,!1)}function Jw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Xw(t,e,n,r){if(e===null||typeof e>"u"||Jw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Be(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ne[t]=new Be(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ne[e]=new Be(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ne[t]=new Be(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ne[t]=new Be(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ne[t]=new Be(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ne[t]=new Be(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ne[t]=new Be(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ne[t]=new Be(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ne[t]=new Be(t,5,!1,t.toLowerCase(),null,!1,!1)});var Hu=/[\-:]([a-z])/g;function Gu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Hu,Gu);Ne[e]=new Be(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Hu,Gu);Ne[e]=new Be(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Hu,Gu);Ne[e]=new Be(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ne[t]=new Be(t,1,!1,t.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ne[t]=new Be(t,1,!1,t.toLowerCase(),null,!0,!0)});function qu(t,e,n,r){var i=Ne.hasOwnProperty(e)?Ne[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Xw(e,n,i,r)&&(n=null),r||i===null?Yw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var an=Kw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,eo=Symbol.for("react.element"),Pr=Symbol.for("react.portal"),br=Symbol.for("react.fragment"),Ku=Symbol.for("react.strict_mode"),Sc=Symbol.for("react.profiler"),Km=Symbol.for("react.provider"),Qm=Symbol.for("react.context"),Qu=Symbol.for("react.forward_ref"),Ic=Symbol.for("react.suspense"),Tc=Symbol.for("react.suspense_list"),Yu=Symbol.for("react.memo"),dn=Symbol.for("react.lazy"),Ym=Symbol.for("react.offscreen"),Yh=Symbol.iterator;function Ii(t){return t===null||typeof t!="object"?null:(t=Yh&&t[Yh]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,Pl;function ji(t){if(Pl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Pl=e&&e[1]||""}return`
`+Pl+t}var bl=!1;function Al(t,e){if(!t||bl)return"";bl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{bl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ji(t):""}function Zw(t){switch(t.tag){case 5:return ji(t.type);case 16:return ji("Lazy");case 13:return ji("Suspense");case 19:return ji("SuspenseList");case 0:case 2:case 15:return t=Al(t.type,!1),t;case 11:return t=Al(t.type.render,!1),t;case 1:return t=Al(t.type,!0),t;default:return""}}function kc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case br:return"Fragment";case Pr:return"Portal";case Sc:return"Profiler";case Ku:return"StrictMode";case Ic:return"Suspense";case Tc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qm:return(t.displayName||"Context")+".Consumer";case Km:return(t._context.displayName||"Context")+".Provider";case Qu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Yu:return e=t.displayName||null,e!==null?e:kc(t.type)||"Memo";case dn:e=t._payload,t=t._init;try{return kc(t(e))}catch{}}return null}function eE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kc(e);case 8:return e===Ku?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Mn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function tE(t){var e=Jm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function to(t){t._valueTracker||(t._valueTracker=tE(t))}function Xm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Jm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function zo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nc(t,e){var n=e.checked;return re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Jh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Mn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Zm(t,e){e=e.checked,e!=null&&qu(t,"checked",e,!1)}function Rc(t,e){Zm(t,e);var n=Mn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?xc(t,e.type,n):e.hasOwnProperty("defaultValue")&&xc(t,e.type,Mn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Xh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function xc(t,e,n){(e!=="number"||zo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Fi=Array.isArray;function Wr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Mn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Pc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Zh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(Fi(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Mn(n)}}function eg(t,e){var n=Mn(e.value),r=Mn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ef(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function tg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?tg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var no,ng=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(no=no||document.createElement("div"),no.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=no.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ss(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Bi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nE=["Webkit","ms","Moz","O"];Object.keys(Bi).forEach(function(t){nE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Bi[e]=Bi[t]})});function rg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Bi.hasOwnProperty(t)&&Bi[t]?(""+e).trim():e+"px"}function ig(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=rg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var rE=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ac(t,e){if(e){if(rE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function Oc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dc=null;function Ju(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Lc=null,Vr=null,Hr=null;function tf(t){if(t=Us(t)){if(typeof Lc!="function")throw Error(I(280));var e=t.stateNode;e&&(e=Wa(e),Lc(t.stateNode,t.type,e))}}function sg(t){Vr?Hr?Hr.push(t):Hr=[t]:Vr=t}function og(){if(Vr){var t=Vr,e=Hr;if(Hr=Vr=null,tf(t),e)for(t=0;t<e.length;t++)tf(e[t])}}function ag(t,e){return t(e)}function lg(){}var Ol=!1;function cg(t,e,n){if(Ol)return t(e,n);Ol=!0;try{return ag(t,e,n)}finally{Ol=!1,(Vr!==null||Hr!==null)&&(lg(),og())}}function os(t,e){var n=t.stateNode;if(n===null)return null;var r=Wa(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var Mc=!1;if(Zt)try{var Ti={};Object.defineProperty(Ti,"passive",{get:function(){Mc=!0}}),window.addEventListener("test",Ti,Ti),window.removeEventListener("test",Ti,Ti)}catch{Mc=!1}function iE(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var $i=!1,Bo=null,$o=!1,jc=null,sE={onError:function(t){$i=!0,Bo=t}};function oE(t,e,n,r,i,s,o,a,l){$i=!1,Bo=null,iE.apply(sE,arguments)}function aE(t,e,n,r,i,s,o,a,l){if(oE.apply(this,arguments),$i){if($i){var c=Bo;$i=!1,Bo=null}else throw Error(I(198));$o||($o=!0,jc=c)}}function Cr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ug(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function nf(t){if(Cr(t)!==t)throw Error(I(188))}function lE(t){var e=t.alternate;if(!e){if(e=Cr(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return nf(i),t;if(s===r)return nf(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function dg(t){return t=lE(t),t!==null?hg(t):null}function hg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=hg(t);if(e!==null)return e;t=t.sibling}return null}var fg=st.unstable_scheduleCallback,rf=st.unstable_cancelCallback,cE=st.unstable_shouldYield,uE=st.unstable_requestPaint,ue=st.unstable_now,dE=st.unstable_getCurrentPriorityLevel,Xu=st.unstable_ImmediatePriority,pg=st.unstable_UserBlockingPriority,Wo=st.unstable_NormalPriority,hE=st.unstable_LowPriority,mg=st.unstable_IdlePriority,Ua=null,Mt=null;function fE(t){if(Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(Ua,t,void 0,(t.current.flags&128)===128)}catch{}}var It=Math.clz32?Math.clz32:gE,pE=Math.log,mE=Math.LN2;function gE(t){return t>>>=0,t===0?32:31-(pE(t)/mE|0)|0}var ro=64,io=4194304;function Ui(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ui(a):(s&=o,s!==0&&(r=Ui(s)))}else o=n&~i,o!==0?r=Ui(o):s!==0&&(r=Ui(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-It(e),i=1<<n,r|=t[n],e&=~i;return r}function _E(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-It(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=_E(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Fc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gg(){var t=ro;return ro<<=1,!(ro&4194240)&&(ro=64),t}function Dl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function js(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-It(e),t[e]=n}function yE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-It(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Zu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-It(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var H=0;function _g(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var vg,ed,yg,wg,Eg,Uc=!1,so=[],In=null,Tn=null,kn=null,as=new Map,ls=new Map,fn=[],wE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sf(t,e){switch(t){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":as.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ls.delete(e.pointerId)}}function ki(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Us(e),e!==null&&ed(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function EE(t,e,n,r,i){switch(e){case"focusin":return In=ki(In,t,e,n,r,i),!0;case"dragenter":return Tn=ki(Tn,t,e,n,r,i),!0;case"mouseover":return kn=ki(kn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return as.set(s,ki(as.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ls.set(s,ki(ls.get(s)||null,t,e,n,r,i)),!0}return!1}function Cg(t){var e=Xn(t.target);if(e!==null){var n=Cr(e);if(n!==null){if(e=n.tag,e===13){if(e=ug(n),e!==null){t.blockedOn=e,Eg(t.priority,function(){yg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Io(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=zc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Dc=r,n.target.dispatchEvent(r),Dc=null}else return e=Us(n),e!==null&&ed(e),t.blockedOn=n,!1;e.shift()}return!0}function of(t,e,n){Io(t)&&n.delete(e)}function CE(){Uc=!1,In!==null&&Io(In)&&(In=null),Tn!==null&&Io(Tn)&&(Tn=null),kn!==null&&Io(kn)&&(kn=null),as.forEach(of),ls.forEach(of)}function Ni(t,e){t.blockedOn===e&&(t.blockedOn=null,Uc||(Uc=!0,st.unstable_scheduleCallback(st.unstable_NormalPriority,CE)))}function cs(t){function e(i){return Ni(i,t)}if(0<so.length){Ni(so[0],t);for(var n=1;n<so.length;n++){var r=so[n];r.blockedOn===t&&(r.blockedOn=null)}}for(In!==null&&Ni(In,t),Tn!==null&&Ni(Tn,t),kn!==null&&Ni(kn,t),as.forEach(e),ls.forEach(e),n=0;n<fn.length;n++)r=fn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<fn.length&&(n=fn[0],n.blockedOn===null);)Cg(n),n.blockedOn===null&&fn.shift()}var Gr=an.ReactCurrentBatchConfig,Ho=!0;function SE(t,e,n,r){var i=H,s=Gr.transition;Gr.transition=null;try{H=1,td(t,e,n,r)}finally{H=i,Gr.transition=s}}function IE(t,e,n,r){var i=H,s=Gr.transition;Gr.transition=null;try{H=4,td(t,e,n,r)}finally{H=i,Gr.transition=s}}function td(t,e,n,r){if(Ho){var i=zc(t,e,n,r);if(i===null)Vl(t,e,r,Go,n),sf(t,r);else if(EE(i,t,e,n,r))r.stopPropagation();else if(sf(t,r),e&4&&-1<wE.indexOf(t)){for(;i!==null;){var s=Us(i);if(s!==null&&vg(s),s=zc(t,e,n,r),s===null&&Vl(t,e,r,Go,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Vl(t,e,r,null,n)}}var Go=null;function zc(t,e,n,r){if(Go=null,t=Ju(r),t=Xn(t),t!==null)if(e=Cr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ug(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Go=t,null}function Sg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dE()){case Xu:return 1;case pg:return 4;case Wo:case hE:return 16;case mg:return 536870912;default:return 16}default:return 16}}var yn=null,nd=null,To=null;function Ig(){if(To)return To;var t,e=nd,n=e.length,r,i="value"in yn?yn.value:yn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return To=i.slice(t,1<r?1-r:void 0)}function ko(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function oo(){return!0}function af(){return!1}function at(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?oo:af,this.isPropagationStopped=af,this}return re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oo)},persist:function(){},isPersistent:oo}),e}var mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rd=at(mi),Fs=re({},mi,{view:0,detail:0}),TE=at(Fs),Ll,Ml,Ri,za=re({},Fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:id,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ri&&(Ri&&t.type==="mousemove"?(Ll=t.screenX-Ri.screenX,Ml=t.screenY-Ri.screenY):Ml=Ll=0,Ri=t),Ll)},movementY:function(t){return"movementY"in t?t.movementY:Ml}}),lf=at(za),kE=re({},za,{dataTransfer:0}),NE=at(kE),RE=re({},Fs,{relatedTarget:0}),jl=at(RE),xE=re({},mi,{animationName:0,elapsedTime:0,pseudoElement:0}),PE=at(xE),bE=re({},mi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),AE=at(bE),OE=re({},mi,{data:0}),cf=at(OE),DE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},LE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ME={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ME[t])?!!e[t]:!1}function id(){return jE}var FE=re({},Fs,{key:function(t){if(t.key){var e=DE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ko(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?LE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:id,charCode:function(t){return t.type==="keypress"?ko(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ko(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),UE=at(FE),zE=re({},za,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uf=at(zE),BE=re({},Fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:id}),$E=at(BE),WE=re({},mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),VE=at(WE),HE=re({},za,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),GE=at(HE),qE=[9,13,27,32],sd=Zt&&"CompositionEvent"in window,Wi=null;Zt&&"documentMode"in document&&(Wi=document.documentMode);var KE=Zt&&"TextEvent"in window&&!Wi,Tg=Zt&&(!sd||Wi&&8<Wi&&11>=Wi),df=" ",hf=!1;function kg(t,e){switch(t){case"keyup":return qE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ng(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ar=!1;function QE(t,e){switch(t){case"compositionend":return Ng(e);case"keypress":return e.which!==32?null:(hf=!0,df);case"textInput":return t=e.data,t===df&&hf?null:t;default:return null}}function YE(t,e){if(Ar)return t==="compositionend"||!sd&&kg(t,e)?(t=Ig(),To=nd=yn=null,Ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Tg&&e.locale!=="ko"?null:e.data;default:return null}}var JE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ff(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!JE[t.type]:e==="textarea"}function Rg(t,e,n,r){sg(r),e=qo(e,"onChange"),0<e.length&&(n=new rd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Vi=null,us=null;function XE(t){Ug(t,0)}function Ba(t){var e=Lr(t);if(Xm(e))return t}function ZE(t,e){if(t==="change")return e}var xg=!1;if(Zt){var Fl;if(Zt){var Ul="oninput"in document;if(!Ul){var pf=document.createElement("div");pf.setAttribute("oninput","return;"),Ul=typeof pf.oninput=="function"}Fl=Ul}else Fl=!1;xg=Fl&&(!document.documentMode||9<document.documentMode)}function mf(){Vi&&(Vi.detachEvent("onpropertychange",Pg),us=Vi=null)}function Pg(t){if(t.propertyName==="value"&&Ba(us)){var e=[];Rg(e,us,t,Ju(t)),cg(XE,e)}}function eC(t,e,n){t==="focusin"?(mf(),Vi=e,us=n,Vi.attachEvent("onpropertychange",Pg)):t==="focusout"&&mf()}function tC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ba(us)}function nC(t,e){if(t==="click")return Ba(e)}function rC(t,e){if(t==="input"||t==="change")return Ba(e)}function iC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Rt=typeof Object.is=="function"?Object.is:iC;function ds(t,e){if(Rt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Cc.call(e,i)||!Rt(t[i],e[i]))return!1}return!0}function gf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _f(t,e){var n=gf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gf(n)}}function bg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?bg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ag(){for(var t=window,e=zo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=zo(t.document)}return e}function od(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sC(t){var e=Ag(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&bg(n.ownerDocument.documentElement,n)){if(r!==null&&od(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=_f(n,s);var o=_f(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var oC=Zt&&"documentMode"in document&&11>=document.documentMode,Or=null,Bc=null,Hi=null,$c=!1;function vf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$c||Or==null||Or!==zo(r)||(r=Or,"selectionStart"in r&&od(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hi&&ds(Hi,r)||(Hi=r,r=qo(Bc,"onSelect"),0<r.length&&(e=new rd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Or)))}function ao(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Dr={animationend:ao("Animation","AnimationEnd"),animationiteration:ao("Animation","AnimationIteration"),animationstart:ao("Animation","AnimationStart"),transitionend:ao("Transition","TransitionEnd")},zl={},Og={};Zt&&(Og=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);function $a(t){if(zl[t])return zl[t];if(!Dr[t])return t;var e=Dr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Og)return zl[t]=e[n];return t}var Dg=$a("animationend"),Lg=$a("animationiteration"),Mg=$a("animationstart"),jg=$a("transitionend"),Fg=new Map,yf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bn(t,e){Fg.set(t,e),Er(e,[t])}for(var Bl=0;Bl<yf.length;Bl++){var $l=yf[Bl],aC=$l.toLowerCase(),lC=$l[0].toUpperCase()+$l.slice(1);Bn(aC,"on"+lC)}Bn(Dg,"onAnimationEnd");Bn(Lg,"onAnimationIteration");Bn(Mg,"onAnimationStart");Bn("dblclick","onDoubleClick");Bn("focusin","onFocus");Bn("focusout","onBlur");Bn(jg,"onTransitionEnd");ei("onMouseEnter",["mouseout","mouseover"]);ei("onMouseLeave",["mouseout","mouseover"]);ei("onPointerEnter",["pointerout","pointerover"]);ei("onPointerLeave",["pointerout","pointerover"]);Er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Er("onBeforeInput",["compositionend","keypress","textInput","paste"]);Er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cC=new Set("cancel close invalid load scroll toggle".split(" ").concat(zi));function wf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,aE(r,e,void 0,t),t.currentTarget=null}function Ug(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;wf(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;wf(i,a,c),s=l}}}if($o)throw t=jc,$o=!1,jc=null,t}function X(t,e){var n=e[qc];n===void 0&&(n=e[qc]=new Set);var r=t+"__bubble";n.has(r)||(zg(e,t,2,!1),n.add(r))}function Wl(t,e,n){var r=0;e&&(r|=4),zg(n,t,r,e)}var lo="_reactListening"+Math.random().toString(36).slice(2);function hs(t){if(!t[lo]){t[lo]=!0,qm.forEach(function(n){n!=="selectionchange"&&(cC.has(n)||Wl(n,!1,t),Wl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[lo]||(e[lo]=!0,Wl("selectionchange",!1,e))}}function zg(t,e,n,r){switch(Sg(e)){case 1:var i=SE;break;case 4:i=IE;break;default:i=td}n=i.bind(null,e,n,t),i=void 0,!Mc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Vl(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Xn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}cg(function(){var c=s,u=Ju(n),d=[];e:{var h=Fg.get(t);if(h!==void 0){var _=rd,v=t;switch(t){case"keypress":if(ko(n)===0)break e;case"keydown":case"keyup":_=UE;break;case"focusin":v="focus",_=jl;break;case"focusout":v="blur",_=jl;break;case"beforeblur":case"afterblur":_=jl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=lf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=NE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=$E;break;case Dg:case Lg:case Mg:_=PE;break;case jg:_=VE;break;case"scroll":_=TE;break;case"wheel":_=GE;break;case"copy":case"cut":case"paste":_=AE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=uf}var w=(e&4)!==0,C=!w&&t==="scroll",m=w?h!==null?h+"Capture":null:h;w=[];for(var p=c,g;p!==null;){g=p;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,m!==null&&(y=os(p,m),y!=null&&w.push(fs(p,y,g)))),C)break;p=p.return}0<w.length&&(h=new _(h,v,null,n,u),d.push({event:h,listeners:w}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",h&&n!==Dc&&(v=n.relatedTarget||n.fromElement)&&(Xn(v)||v[en]))break e;if((_||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,_?(v=n.relatedTarget||n.toElement,_=c,v=v?Xn(v):null,v!==null&&(C=Cr(v),v!==C||v.tag!==5&&v.tag!==6)&&(v=null)):(_=null,v=c),_!==v)){if(w=lf,y="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(w=uf,y="onPointerLeave",m="onPointerEnter",p="pointer"),C=_==null?h:Lr(_),g=v==null?h:Lr(v),h=new w(y,p+"leave",_,n,u),h.target=C,h.relatedTarget=g,y=null,Xn(u)===c&&(w=new w(m,p+"enter",v,n,u),w.target=g,w.relatedTarget=C,y=w),C=y,_&&v)t:{for(w=_,m=v,p=0,g=w;g;g=Rr(g))p++;for(g=0,y=m;y;y=Rr(y))g++;for(;0<p-g;)w=Rr(w),p--;for(;0<g-p;)m=Rr(m),g--;for(;p--;){if(w===m||m!==null&&w===m.alternate)break t;w=Rr(w),m=Rr(m)}w=null}else w=null;_!==null&&Ef(d,h,_,w,!1),v!==null&&C!==null&&Ef(d,C,v,w,!0)}}e:{if(h=c?Lr(c):window,_=h.nodeName&&h.nodeName.toLowerCase(),_==="select"||_==="input"&&h.type==="file")var S=ZE;else if(ff(h))if(xg)S=rC;else{S=tC;var k=eC}else(_=h.nodeName)&&_.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=nC);if(S&&(S=S(t,c))){Rg(d,S,n,u);break e}k&&k(t,h,c),t==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&xc(h,"number",h.value)}switch(k=c?Lr(c):window,t){case"focusin":(ff(k)||k.contentEditable==="true")&&(Or=k,Bc=c,Hi=null);break;case"focusout":Hi=Bc=Or=null;break;case"mousedown":$c=!0;break;case"contextmenu":case"mouseup":case"dragend":$c=!1,vf(d,n,u);break;case"selectionchange":if(oC)break;case"keydown":case"keyup":vf(d,n,u)}var N;if(sd)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Ar?kg(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Tg&&n.locale!=="ko"&&(Ar||R!=="onCompositionStart"?R==="onCompositionEnd"&&Ar&&(N=Ig()):(yn=u,nd="value"in yn?yn.value:yn.textContent,Ar=!0)),k=qo(c,R),0<k.length&&(R=new cf(R,t,null,n,u),d.push({event:R,listeners:k}),N?R.data=N:(N=Ng(n),N!==null&&(R.data=N)))),(N=KE?QE(t,n):YE(t,n))&&(c=qo(c,"onBeforeInput"),0<c.length&&(u=new cf("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=N))}Ug(d,e)})}function fs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function qo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=os(t,n),s!=null&&r.unshift(fs(t,s,i)),s=os(t,e),s!=null&&r.push(fs(t,s,i))),t=t.return}return r}function Rr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ef(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=os(n,s),l!=null&&o.unshift(fs(n,l,a))):i||(l=os(n,s),l!=null&&o.push(fs(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var uC=/\r\n?/g,dC=/\u0000|\uFFFD/g;function Cf(t){return(typeof t=="string"?t:""+t).replace(uC,`
`).replace(dC,"")}function co(t,e,n){if(e=Cf(e),Cf(t)!==e&&n)throw Error(I(425))}function Ko(){}var Wc=null,Vc=null;function Hc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gc=typeof setTimeout=="function"?setTimeout:void 0,hC=typeof clearTimeout=="function"?clearTimeout:void 0,Sf=typeof Promise=="function"?Promise:void 0,fC=typeof queueMicrotask=="function"?queueMicrotask:typeof Sf<"u"?function(t){return Sf.resolve(null).then(t).catch(pC)}:Gc;function pC(t){setTimeout(function(){throw t})}function Hl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),cs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);cs(e)}function Nn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function If(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var gi=Math.random().toString(36).slice(2),Ot="__reactFiber$"+gi,ps="__reactProps$"+gi,en="__reactContainer$"+gi,qc="__reactEvents$"+gi,mC="__reactListeners$"+gi,gC="__reactHandles$"+gi;function Xn(t){var e=t[Ot];if(e)return e;for(var n=t.parentNode;n;){if(e=n[en]||n[Ot]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=If(t);t!==null;){if(n=t[Ot])return n;t=If(t)}return e}t=n,n=t.parentNode}return null}function Us(t){return t=t[Ot]||t[en],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Lr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function Wa(t){return t[ps]||null}var Kc=[],Mr=-1;function $n(t){return{current:t}}function Z(t){0>Mr||(t.current=Kc[Mr],Kc[Mr]=null,Mr--)}function Y(t,e){Mr++,Kc[Mr]=t.current,t.current=e}var jn={},Oe=$n(jn),Qe=$n(!1),cr=jn;function ti(t,e){var n=t.type.contextTypes;if(!n)return jn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ye(t){return t=t.childContextTypes,t!=null}function Qo(){Z(Qe),Z(Oe)}function Tf(t,e,n){if(Oe.current!==jn)throw Error(I(168));Y(Oe,e),Y(Qe,n)}function Bg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,eE(t)||"Unknown",i));return re({},n,r)}function Yo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||jn,cr=Oe.current,Y(Oe,t),Y(Qe,Qe.current),!0}function kf(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=Bg(t,e,cr),r.__reactInternalMemoizedMergedChildContext=t,Z(Qe),Z(Oe),Y(Oe,t)):Z(Qe),Y(Qe,n)}var Wt=null,Va=!1,Gl=!1;function $g(t){Wt===null?Wt=[t]:Wt.push(t)}function _C(t){Va=!0,$g(t)}function Wn(){if(!Gl&&Wt!==null){Gl=!0;var t=0,e=H;try{var n=Wt;for(H=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Wt=null,Va=!1}catch(i){throw Wt!==null&&(Wt=Wt.slice(t+1)),fg(Xu,Wn),i}finally{H=e,Gl=!1}}return null}var jr=[],Fr=0,Jo=null,Xo=0,lt=[],ct=0,ur=null,Vt=1,Ht="";function Kn(t,e){jr[Fr++]=Xo,jr[Fr++]=Jo,Jo=t,Xo=e}function Wg(t,e,n){lt[ct++]=Vt,lt[ct++]=Ht,lt[ct++]=ur,ur=t;var r=Vt;t=Ht;var i=32-It(r)-1;r&=~(1<<i),n+=1;var s=32-It(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Vt=1<<32-It(e)+i|n<<i|r,Ht=s+t}else Vt=1<<s|n<<i|r,Ht=t}function ad(t){t.return!==null&&(Kn(t,1),Wg(t,1,0))}function ld(t){for(;t===Jo;)Jo=jr[--Fr],jr[Fr]=null,Xo=jr[--Fr],jr[Fr]=null;for(;t===ur;)ur=lt[--ct],lt[ct]=null,Ht=lt[--ct],lt[ct]=null,Vt=lt[--ct],lt[ct]=null}var rt=null,tt=null,ee=!1,Et=null;function Vg(t,e){var n=ut(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Nf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,rt=t,tt=Nn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,rt=t,tt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ur!==null?{id:Vt,overflow:Ht}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ut(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,rt=t,tt=null,!0):!1;default:return!1}}function Qc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yc(t){if(ee){var e=tt;if(e){var n=e;if(!Nf(t,e)){if(Qc(t))throw Error(I(418));e=Nn(n.nextSibling);var r=rt;e&&Nf(t,e)?Vg(r,n):(t.flags=t.flags&-4097|2,ee=!1,rt=t)}}else{if(Qc(t))throw Error(I(418));t.flags=t.flags&-4097|2,ee=!1,rt=t}}}function Rf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;rt=t}function uo(t){if(t!==rt)return!1;if(!ee)return Rf(t),ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hc(t.type,t.memoizedProps)),e&&(e=tt)){if(Qc(t))throw Hg(),Error(I(418));for(;e;)Vg(t,e),e=Nn(e.nextSibling)}if(Rf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){tt=Nn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}tt=null}}else tt=rt?Nn(t.stateNode.nextSibling):null;return!0}function Hg(){for(var t=tt;t;)t=Nn(t.nextSibling)}function ni(){tt=rt=null,ee=!1}function cd(t){Et===null?Et=[t]:Et.push(t)}var vC=an.ReactCurrentBatchConfig;function xi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function ho(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function xf(t){var e=t._init;return e(t._payload)}function Gg(t){function e(m,p){if(t){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=bn(m,p),m.index=0,m.sibling=null,m}function s(m,p,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,g,y){return p===null||p.tag!==6?(p=Zl(g,m.mode,y),p.return=m,p):(p=i(p,g),p.return=m,p)}function l(m,p,g,y){var S=g.type;return S===br?u(m,p,g.props.children,y,g.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===dn&&xf(S)===p.type)?(y=i(p,g.props),y.ref=xi(m,p,g),y.return=m,y):(y=Oo(g.type,g.key,g.props,null,m.mode,y),y.ref=xi(m,p,g),y.return=m,y)}function c(m,p,g,y){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=ec(g,m.mode,y),p.return=m,p):(p=i(p,g.children||[]),p.return=m,p)}function u(m,p,g,y,S){return p===null||p.tag!==7?(p=sr(g,m.mode,y,S),p.return=m,p):(p=i(p,g),p.return=m,p)}function d(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Zl(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case eo:return g=Oo(p.type,p.key,p.props,null,m.mode,g),g.ref=xi(m,null,p),g.return=m,g;case Pr:return p=ec(p,m.mode,g),p.return=m,p;case dn:var y=p._init;return d(m,y(p._payload),g)}if(Fi(p)||Ii(p))return p=sr(p,m.mode,g,null),p.return=m,p;ho(m,p)}return null}function h(m,p,g,y){var S=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:a(m,p,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case eo:return g.key===S?l(m,p,g,y):null;case Pr:return g.key===S?c(m,p,g,y):null;case dn:return S=g._init,h(m,p,S(g._payload),y)}if(Fi(g)||Ii(g))return S!==null?null:u(m,p,g,y,null);ho(m,g)}return null}function _(m,p,g,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return m=m.get(g)||null,a(p,m,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case eo:return m=m.get(y.key===null?g:y.key)||null,l(p,m,y,S);case Pr:return m=m.get(y.key===null?g:y.key)||null,c(p,m,y,S);case dn:var k=y._init;return _(m,p,g,k(y._payload),S)}if(Fi(y)||Ii(y))return m=m.get(g)||null,u(p,m,y,S,null);ho(p,y)}return null}function v(m,p,g,y){for(var S=null,k=null,N=p,R=p=0,j=null;N!==null&&R<g.length;R++){N.index>R?(j=N,N=null):j=N.sibling;var A=h(m,N,g[R],y);if(A===null){N===null&&(N=j);break}t&&N&&A.alternate===null&&e(m,N),p=s(A,p,R),k===null?S=A:k.sibling=A,k=A,N=j}if(R===g.length)return n(m,N),ee&&Kn(m,R),S;if(N===null){for(;R<g.length;R++)N=d(m,g[R],y),N!==null&&(p=s(N,p,R),k===null?S=N:k.sibling=N,k=N);return ee&&Kn(m,R),S}for(N=r(m,N);R<g.length;R++)j=_(N,m,R,g[R],y),j!==null&&(t&&j.alternate!==null&&N.delete(j.key===null?R:j.key),p=s(j,p,R),k===null?S=j:k.sibling=j,k=j);return t&&N.forEach(function(D){return e(m,D)}),ee&&Kn(m,R),S}function w(m,p,g,y){var S=Ii(g);if(typeof S!="function")throw Error(I(150));if(g=S.call(g),g==null)throw Error(I(151));for(var k=S=null,N=p,R=p=0,j=null,A=g.next();N!==null&&!A.done;R++,A=g.next()){N.index>R?(j=N,N=null):j=N.sibling;var D=h(m,N,A.value,y);if(D===null){N===null&&(N=j);break}t&&N&&D.alternate===null&&e(m,N),p=s(D,p,R),k===null?S=D:k.sibling=D,k=D,N=j}if(A.done)return n(m,N),ee&&Kn(m,R),S;if(N===null){for(;!A.done;R++,A=g.next())A=d(m,A.value,y),A!==null&&(p=s(A,p,R),k===null?S=A:k.sibling=A,k=A);return ee&&Kn(m,R),S}for(N=r(m,N);!A.done;R++,A=g.next())A=_(N,m,R,A.value,y),A!==null&&(t&&A.alternate!==null&&N.delete(A.key===null?R:A.key),p=s(A,p,R),k===null?S=A:k.sibling=A,k=A);return t&&N.forEach(function(Se){return e(m,Se)}),ee&&Kn(m,R),S}function C(m,p,g,y){if(typeof g=="object"&&g!==null&&g.type===br&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case eo:e:{for(var S=g.key,k=p;k!==null;){if(k.key===S){if(S=g.type,S===br){if(k.tag===7){n(m,k.sibling),p=i(k,g.props.children),p.return=m,m=p;break e}}else if(k.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===dn&&xf(S)===k.type){n(m,k.sibling),p=i(k,g.props),p.ref=xi(m,k,g),p.return=m,m=p;break e}n(m,k);break}else e(m,k);k=k.sibling}g.type===br?(p=sr(g.props.children,m.mode,y,g.key),p.return=m,m=p):(y=Oo(g.type,g.key,g.props,null,m.mode,y),y.ref=xi(m,p,g),y.return=m,m=y)}return o(m);case Pr:e:{for(k=g.key;p!==null;){if(p.key===k)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=i(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=ec(g,m.mode,y),p.return=m,m=p}return o(m);case dn:return k=g._init,C(m,p,k(g._payload),y)}if(Fi(g))return v(m,p,g,y);if(Ii(g))return w(m,p,g,y);ho(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,g),p.return=m,m=p):(n(m,p),p=Zl(g,m.mode,y),p.return=m,m=p),o(m)):n(m,p)}return C}var ri=Gg(!0),qg=Gg(!1),Zo=$n(null),ea=null,Ur=null,ud=null;function dd(){ud=Ur=ea=null}function hd(t){var e=Zo.current;Z(Zo),t._currentValue=e}function Jc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function qr(t,e){ea=t,ud=Ur=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(qe=!0),t.firstContext=null)}function ft(t){var e=t._currentValue;if(ud!==t)if(t={context:t,memoizedValue:e,next:null},Ur===null){if(ea===null)throw Error(I(308));Ur=t,ea.dependencies={lanes:0,firstContext:t}}else Ur=Ur.next=t;return e}var Zn=null;function fd(t){Zn===null?Zn=[t]:Zn.push(t)}function Kg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,fd(e)):(n.next=i.next,i.next=n),e.interleaved=n,tn(t,r)}function tn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var hn=!1;function pd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Jt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Rn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,tn(t,n)}return i=r.interleaved,i===null?(e.next=e,fd(r)):(e.next=i.next,i.next=e),r.interleaved=e,tn(t,n)}function No(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zu(t,n)}}function Pf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ta(t,e,n,r){var i=t.updateQueue;hn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,_=a.eventTime;if((r&h)===h){u!==null&&(u=u.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,w=a;switch(h=e,_=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){d=v.call(_,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,h=typeof v=="function"?v.call(_,d,h):v,h==null)break e;d=re({},d,h);break e;case 2:hn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else _={eventTime:_,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=_,l=d):u=u.next=_,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(u===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);hr|=o,t.lanes=o,t.memoizedState=d}}function bf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var zs={},jt=$n(zs),ms=$n(zs),gs=$n(zs);function er(t){if(t===zs)throw Error(I(174));return t}function md(t,e){switch(Y(gs,e),Y(ms,t),Y(jt,zs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:bc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=bc(e,t)}Z(jt),Y(jt,e)}function ii(){Z(jt),Z(ms),Z(gs)}function Yg(t){er(gs.current);var e=er(jt.current),n=bc(e,t.type);e!==n&&(Y(ms,t),Y(jt,n))}function gd(t){ms.current===t&&(Z(jt),Z(ms))}var te=$n(0);function na(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ql=[];function _d(){for(var t=0;t<ql.length;t++)ql[t]._workInProgressVersionPrimary=null;ql.length=0}var Ro=an.ReactCurrentDispatcher,Kl=an.ReactCurrentBatchConfig,dr=0,ne=null,he=null,we=null,ra=!1,Gi=!1,_s=0,yC=0;function Pe(){throw Error(I(321))}function vd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Rt(t[n],e[n]))return!1;return!0}function yd(t,e,n,r,i,s){if(dr=s,ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ro.current=t===null||t.memoizedState===null?SC:IC,t=n(r,i),Gi){s=0;do{if(Gi=!1,_s=0,25<=s)throw Error(I(301));s+=1,we=he=null,e.updateQueue=null,Ro.current=TC,t=n(r,i)}while(Gi)}if(Ro.current=ia,e=he!==null&&he.next!==null,dr=0,we=he=ne=null,ra=!1,e)throw Error(I(300));return t}function wd(){var t=_s!==0;return _s=0,t}function At(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?ne.memoizedState=we=t:we=we.next=t,we}function pt(){if(he===null){var t=ne.alternate;t=t!==null?t.memoizedState:null}else t=he.next;var e=we===null?ne.memoizedState:we.next;if(e!==null)we=e,he=t;else{if(t===null)throw Error(I(310));he=t,t={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},we===null?ne.memoizedState=we=t:we=we.next=t}return we}function vs(t,e){return typeof e=="function"?e(t):e}function Ql(t){var e=pt(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=he,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((dr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,ne.lanes|=u,hr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,Rt(r,e.memoizedState)||(qe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ne.lanes|=s,hr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Yl(t){var e=pt(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Rt(s,e.memoizedState)||(qe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Jg(){}function Xg(t,e){var n=ne,r=pt(),i=e(),s=!Rt(r.memoizedState,i);if(s&&(r.memoizedState=i,qe=!0),r=r.queue,Ed(t_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,ys(9,e_.bind(null,n,r,i,e),void 0,null),Ce===null)throw Error(I(349));dr&30||Zg(n,e,i)}return i}function Zg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ne.updateQueue,e===null?(e={lastEffect:null,stores:null},ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function e_(t,e,n,r){e.value=n,e.getSnapshot=r,n_(e)&&r_(t)}function t_(t,e,n){return n(function(){n_(e)&&r_(t)})}function n_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Rt(t,n)}catch{return!0}}function r_(t){var e=tn(t,1);e!==null&&Tt(e,t,1,-1)}function Af(t){var e=At();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vs,lastRenderedState:t},e.queue=t,t=t.dispatch=CC.bind(null,ne,t),[e.memoizedState,t]}function ys(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ne.updateQueue,e===null?(e={lastEffect:null,stores:null},ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function i_(){return pt().memoizedState}function xo(t,e,n,r){var i=At();ne.flags|=t,i.memoizedState=ys(1|e,n,void 0,r===void 0?null:r)}function Ha(t,e,n,r){var i=pt();r=r===void 0?null:r;var s=void 0;if(he!==null){var o=he.memoizedState;if(s=o.destroy,r!==null&&vd(r,o.deps)){i.memoizedState=ys(e,n,s,r);return}}ne.flags|=t,i.memoizedState=ys(1|e,n,s,r)}function Of(t,e){return xo(8390656,8,t,e)}function Ed(t,e){return Ha(2048,8,t,e)}function s_(t,e){return Ha(4,2,t,e)}function o_(t,e){return Ha(4,4,t,e)}function a_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function l_(t,e,n){return n=n!=null?n.concat([t]):null,Ha(4,4,a_.bind(null,e,t),n)}function Cd(){}function c_(t,e){var n=pt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function u_(t,e){var n=pt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function d_(t,e,n){return dr&21?(Rt(n,e)||(n=gg(),ne.lanes|=n,hr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,qe=!0),t.memoizedState=n)}function wC(t,e){var n=H;H=n!==0&&4>n?n:4,t(!0);var r=Kl.transition;Kl.transition={};try{t(!1),e()}finally{H=n,Kl.transition=r}}function h_(){return pt().memoizedState}function EC(t,e,n){var r=Pn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},f_(t))p_(e,n);else if(n=Kg(t,e,n,r),n!==null){var i=je();Tt(n,t,r,i),m_(n,e,r)}}function CC(t,e,n){var r=Pn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(f_(t))p_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Rt(a,o)){var l=e.interleaved;l===null?(i.next=i,fd(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Kg(t,e,i,r),n!==null&&(i=je(),Tt(n,t,r,i),m_(n,e,r))}}function f_(t){var e=t.alternate;return t===ne||e!==null&&e===ne}function p_(t,e){Gi=ra=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function m_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zu(t,n)}}var ia={readContext:ft,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},SC={readContext:ft,useCallback:function(t,e){return At().memoizedState=[t,e===void 0?null:e],t},useContext:ft,useEffect:Of,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xo(4194308,4,a_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xo(4194308,4,t,e)},useInsertionEffect:function(t,e){return xo(4,2,t,e)},useMemo:function(t,e){var n=At();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=At();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=EC.bind(null,ne,t),[r.memoizedState,t]},useRef:function(t){var e=At();return t={current:t},e.memoizedState=t},useState:Af,useDebugValue:Cd,useDeferredValue:function(t){return At().memoizedState=t},useTransition:function(){var t=Af(!1),e=t[0];return t=wC.bind(null,t[1]),At().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ne,i=At();if(ee){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),Ce===null)throw Error(I(349));dr&30||Zg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Of(t_.bind(null,r,s,t),[t]),r.flags|=2048,ys(9,e_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=At(),e=Ce.identifierPrefix;if(ee){var n=Ht,r=Vt;n=(r&~(1<<32-It(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=_s++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=yC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},IC={readContext:ft,useCallback:c_,useContext:ft,useEffect:Ed,useImperativeHandle:l_,useInsertionEffect:s_,useLayoutEffect:o_,useMemo:u_,useReducer:Ql,useRef:i_,useState:function(){return Ql(vs)},useDebugValue:Cd,useDeferredValue:function(t){var e=pt();return d_(e,he.memoizedState,t)},useTransition:function(){var t=Ql(vs)[0],e=pt().memoizedState;return[t,e]},useMutableSource:Jg,useSyncExternalStore:Xg,useId:h_,unstable_isNewReconciler:!1},TC={readContext:ft,useCallback:c_,useContext:ft,useEffect:Ed,useImperativeHandle:l_,useInsertionEffect:s_,useLayoutEffect:o_,useMemo:u_,useReducer:Yl,useRef:i_,useState:function(){return Yl(vs)},useDebugValue:Cd,useDeferredValue:function(t){var e=pt();return he===null?e.memoizedState=t:d_(e,he.memoizedState,t)},useTransition:function(){var t=Yl(vs)[0],e=pt().memoizedState;return[t,e]},useMutableSource:Jg,useSyncExternalStore:Xg,useId:h_,unstable_isNewReconciler:!1};function yt(t,e){if(t&&t.defaultProps){e=re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Xc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ga={isMounted:function(t){return(t=t._reactInternals)?Cr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=je(),i=Pn(t),s=Jt(r,i);s.payload=e,n!=null&&(s.callback=n),e=Rn(t,s,i),e!==null&&(Tt(e,t,i,r),No(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=je(),i=Pn(t),s=Jt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Rn(t,s,i),e!==null&&(Tt(e,t,i,r),No(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=je(),r=Pn(t),i=Jt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Rn(t,i,r),e!==null&&(Tt(e,t,r,n),No(e,t,r))}};function Df(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ds(n,r)||!ds(i,s):!0}function g_(t,e,n){var r=!1,i=jn,s=e.contextType;return typeof s=="object"&&s!==null?s=ft(s):(i=Ye(e)?cr:Oe.current,r=e.contextTypes,s=(r=r!=null)?ti(t,i):jn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ga,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Lf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ga.enqueueReplaceState(e,e.state,null)}function Zc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},pd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ft(s):(s=Ye(e)?cr:Oe.current,i.context=ti(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Xc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ga.enqueueReplaceState(i,i.state,null),ta(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function si(t,e){try{var n="",r=e;do n+=Zw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Jl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function eu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var kC=typeof WeakMap=="function"?WeakMap:Map;function __(t,e,n){n=Jt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){oa||(oa=!0,uu=r),eu(t,e)},n}function v_(t,e,n){n=Jt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){eu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){eu(t,e),typeof r!="function"&&(xn===null?xn=new Set([this]):xn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Mf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new kC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=zC.bind(null,t,e,n),e.then(t,t))}function jf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ff(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Jt(-1,1),e.tag=2,Rn(n,e,1))),n.lanes|=1),t)}var NC=an.ReactCurrentOwner,qe=!1;function Le(t,e,n,r){e.child=t===null?qg(e,null,n,r):ri(e,t.child,n,r)}function Uf(t,e,n,r,i){n=n.render;var s=e.ref;return qr(e,i),r=yd(t,e,n,r,s,i),n=wd(),t!==null&&!qe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,nn(t,e,i)):(ee&&n&&ad(e),e.flags|=1,Le(t,e,r,i),e.child)}function zf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Pd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,y_(t,e,s,r,i)):(t=Oo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ds,n(o,r)&&t.ref===e.ref)return nn(t,e,i)}return e.flags|=1,t=bn(s,r),t.ref=e.ref,t.return=e,e.child=t}function y_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ds(s,r)&&t.ref===e.ref)if(qe=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(qe=!0);else return e.lanes=t.lanes,nn(t,e,i)}return tu(t,e,n,r,i)}function w_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(Br,et),et|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Y(Br,et),et|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Y(Br,et),et|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Y(Br,et),et|=r;return Le(t,e,i,n),e.child}function E_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function tu(t,e,n,r,i){var s=Ye(n)?cr:Oe.current;return s=ti(e,s),qr(e,i),n=yd(t,e,n,r,s,i),r=wd(),t!==null&&!qe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,nn(t,e,i)):(ee&&r&&ad(e),e.flags|=1,Le(t,e,n,i),e.child)}function Bf(t,e,n,r,i){if(Ye(n)){var s=!0;Yo(e)}else s=!1;if(qr(e,i),e.stateNode===null)Po(t,e),g_(e,n,r),Zc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ft(c):(c=Ye(n)?cr:Oe.current,c=ti(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Lf(e,o,r,c),hn=!1;var h=e.memoizedState;o.state=h,ta(e,r,o,i),l=e.memoizedState,a!==r||h!==l||Qe.current||hn?(typeof u=="function"&&(Xc(e,n,u,r),l=e.memoizedState),(a=hn||Df(e,n,a,r,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Qg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:yt(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ft(l):(l=Ye(n)?cr:Oe.current,l=ti(e,l));var _=n.getDerivedStateFromProps;(u=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Lf(e,o,r,l),hn=!1,h=e.memoizedState,o.state=h,ta(e,r,o,i);var v=e.memoizedState;a!==d||h!==v||Qe.current||hn?(typeof _=="function"&&(Xc(e,n,_,r),v=e.memoizedState),(c=hn||Df(e,n,c,r,h,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return nu(t,e,n,r,s,i)}function nu(t,e,n,r,i,s){E_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&kf(e,n,!1),nn(t,e,s);r=e.stateNode,NC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ri(e,t.child,null,s),e.child=ri(e,null,a,s)):Le(t,e,a,s),e.memoizedState=r.state,i&&kf(e,n,!0),e.child}function C_(t){var e=t.stateNode;e.pendingContext?Tf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Tf(t,e.context,!1),md(t,e.containerInfo)}function $f(t,e,n,r,i){return ni(),cd(i),e.flags|=256,Le(t,e,n,r),e.child}var ru={dehydrated:null,treeContext:null,retryLane:0};function iu(t){return{baseLanes:t,cachePool:null,transitions:null}}function S_(t,e,n){var r=e.pendingProps,i=te.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Y(te,i&1),t===null)return Yc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Qa(o,r,0,null),t=sr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=iu(n),e.memoizedState=ru,t):Sd(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return RC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=bn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=bn(a,s):(s=sr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?iu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ru,r}return s=t.child,t=s.sibling,r=bn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Sd(t,e){return e=Qa({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function fo(t,e,n,r){return r!==null&&cd(r),ri(e,t.child,null,n),t=Sd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function RC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Jl(Error(I(422))),fo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Qa({mode:"visible",children:r.children},i,0,null),s=sr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ri(e,t.child,null,o),e.child.memoizedState=iu(o),e.memoizedState=ru,s);if(!(e.mode&1))return fo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(I(419)),r=Jl(s,r,void 0),fo(t,e,o,r)}if(a=(o&t.childLanes)!==0,qe||a){if(r=Ce,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,tn(t,i),Tt(r,t,i,-1))}return xd(),r=Jl(Error(I(421))),fo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=BC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,tt=Nn(i.nextSibling),rt=e,ee=!0,Et=null,t!==null&&(lt[ct++]=Vt,lt[ct++]=Ht,lt[ct++]=ur,Vt=t.id,Ht=t.overflow,ur=e),e=Sd(e,r.children),e.flags|=4096,e)}function Wf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Jc(t.return,e,n)}function Xl(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function I_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Le(t,e,r.children,n),r=te.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wf(t,n,e);else if(t.tag===19)Wf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Y(te,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&na(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Xl(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&na(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Xl(e,!0,n,null,s);break;case"together":Xl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Po(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function nn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),hr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=bn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=bn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function xC(t,e,n){switch(e.tag){case 3:C_(e),ni();break;case 5:Yg(e);break;case 1:Ye(e.type)&&Yo(e);break;case 4:md(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Y(Zo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Y(te,te.current&1),e.flags|=128,null):n&e.child.childLanes?S_(t,e,n):(Y(te,te.current&1),t=nn(t,e,n),t!==null?t.sibling:null);Y(te,te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return I_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(te,te.current),r)break;return null;case 22:case 23:return e.lanes=0,w_(t,e,n)}return nn(t,e,n)}var T_,su,k_,N_;T_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};su=function(){};k_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,er(jt.current);var s=null;switch(n){case"input":i=Nc(t,i),r=Nc(t,r),s=[];break;case"select":i=re({},i,{value:void 0}),r=re({},r,{value:void 0}),s=[];break;case"textarea":i=Pc(t,i),r=Pc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ko)}Ac(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(is.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(is.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&X("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};N_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Pi(t,e){if(!ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function be(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function PC(t,e,n){var r=e.pendingProps;switch(ld(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(e),null;case 1:return Ye(e.type)&&Qo(),be(e),null;case 3:return r=e.stateNode,ii(),Z(Qe),Z(Oe),_d(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(uo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Et!==null&&(fu(Et),Et=null))),su(t,e),be(e),null;case 5:gd(e);var i=er(gs.current);if(n=e.type,t!==null&&e.stateNode!=null)k_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return be(e),null}if(t=er(jt.current),uo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ot]=e,r[ps]=s,t=(e.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(i=0;i<zi.length;i++)X(zi[i],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":Jh(r,s),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},X("invalid",r);break;case"textarea":Zh(r,s),X("invalid",r)}Ac(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&co(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&co(r.textContent,a,t),i=["children",""+a]):is.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&X("scroll",r)}switch(n){case"input":to(r),Xh(r,s,!0);break;case"textarea":to(r),ef(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ko)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=tg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ot]=e,t[ps]=r,T_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Oc(n,r),n){case"dialog":X("cancel",t),X("close",t),i=r;break;case"iframe":case"object":case"embed":X("load",t),i=r;break;case"video":case"audio":for(i=0;i<zi.length;i++)X(zi[i],t);i=r;break;case"source":X("error",t),i=r;break;case"img":case"image":case"link":X("error",t),X("load",t),i=r;break;case"details":X("toggle",t),i=r;break;case"input":Jh(t,r),i=Nc(t,r),X("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=re({},r,{value:void 0}),X("invalid",t);break;case"textarea":Zh(t,r),i=Pc(t,r),X("invalid",t);break;default:i=r}Ac(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ig(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ng(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ss(t,l):typeof l=="number"&&ss(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(is.hasOwnProperty(s)?l!=null&&s==="onScroll"&&X("scroll",t):l!=null&&qu(t,s,l,o))}switch(n){case"input":to(t),Xh(t,r,!1);break;case"textarea":to(t),ef(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Mn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Wr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Wr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ko)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return be(e),null;case 6:if(t&&e.stateNode!=null)N_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=er(gs.current),er(jt.current),uo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ot]=e,(s=r.nodeValue!==n)&&(t=rt,t!==null))switch(t.tag){case 3:co(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&co(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ot]=e,e.stateNode=r}return be(e),null;case 13:if(Z(te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ee&&tt!==null&&e.mode&1&&!(e.flags&128))Hg(),ni(),e.flags|=98560,s=!1;else if(s=uo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(I(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[Ot]=e}else ni(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;be(e),s=!1}else Et!==null&&(fu(Et),Et=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||te.current&1?me===0&&(me=3):xd())),e.updateQueue!==null&&(e.flags|=4),be(e),null);case 4:return ii(),su(t,e),t===null&&hs(e.stateNode.containerInfo),be(e),null;case 10:return hd(e.type._context),be(e),null;case 17:return Ye(e.type)&&Qo(),be(e),null;case 19:if(Z(te),s=e.memoizedState,s===null)return be(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Pi(s,!1);else{if(me!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=na(t),o!==null){for(e.flags|=128,Pi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Y(te,te.current&1|2),e.child}t=t.sibling}s.tail!==null&&ue()>oi&&(e.flags|=128,r=!0,Pi(s,!1),e.lanes=4194304)}else{if(!r)if(t=na(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Pi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ee)return be(e),null}else 2*ue()-s.renderingStartTime>oi&&n!==1073741824&&(e.flags|=128,r=!0,Pi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ue(),e.sibling=null,n=te.current,Y(te,r?n&1|2:n&1),e):(be(e),null);case 22:case 23:return Rd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?et&1073741824&&(be(e),e.subtreeFlags&6&&(e.flags|=8192)):be(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function bC(t,e){switch(ld(e),e.tag){case 1:return Ye(e.type)&&Qo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ii(),Z(Qe),Z(Oe),_d(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return gd(e),null;case 13:if(Z(te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));ni()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Z(te),null;case 4:return ii(),null;case 10:return hd(e.type._context),null;case 22:case 23:return Rd(),null;case 24:return null;default:return null}}var po=!1,Ae=!1,AC=typeof WeakSet=="function"?WeakSet:Set,x=null;function zr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(t,e,r)}else n.current=null}function ou(t,e,n){try{n()}catch(r){ie(t,e,r)}}var Vf=!1;function OC(t,e){if(Wc=Ho,t=Ag(),od(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var _;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(_=d.firstChild)!==null;)h=d,d=_;for(;;){if(d===t)break t;if(h===n&&++c===i&&(a=o),h===s&&++u===r&&(l=o),(_=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=_}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vc={focusedElem:t,selectionRange:n},Ho=!1,x=e;x!==null;)if(e=x,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,x=t;else for(;x!==null;){e=x;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,C=v.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?w:yt(e.type,w),C);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(y){ie(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,x=t;break}x=e.return}return v=Vf,Vf=!1,v}function qi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ou(e,n,s)}i=i.next}while(i!==r)}}function qa(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function au(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function R_(t){var e=t.alternate;e!==null&&(t.alternate=null,R_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ot],delete e[ps],delete e[qc],delete e[mC],delete e[gC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function x_(t){return t.tag===5||t.tag===3||t.tag===4}function Hf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||x_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function lu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ko));else if(r!==4&&(t=t.child,t!==null))for(lu(t,e,n),t=t.sibling;t!==null;)lu(t,e,n),t=t.sibling}function cu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(cu(t,e,n),t=t.sibling;t!==null;)cu(t,e,n),t=t.sibling}var Ie=null,wt=!1;function cn(t,e,n){for(n=n.child;n!==null;)P_(t,e,n),n=n.sibling}function P_(t,e,n){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(Ua,n)}catch{}switch(n.tag){case 5:Ae||zr(n,e);case 6:var r=Ie,i=wt;Ie=null,cn(t,e,n),Ie=r,wt=i,Ie!==null&&(wt?(t=Ie,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(wt?(t=Ie,n=n.stateNode,t.nodeType===8?Hl(t.parentNode,n):t.nodeType===1&&Hl(t,n),cs(t)):Hl(Ie,n.stateNode));break;case 4:r=Ie,i=wt,Ie=n.stateNode.containerInfo,wt=!0,cn(t,e,n),Ie=r,wt=i;break;case 0:case 11:case 14:case 15:if(!Ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ou(n,e,o),i=i.next}while(i!==r)}cn(t,e,n);break;case 1:if(!Ae&&(zr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ie(n,e,a)}cn(t,e,n);break;case 21:cn(t,e,n);break;case 22:n.mode&1?(Ae=(r=Ae)||n.memoizedState!==null,cn(t,e,n),Ae=r):cn(t,e,n);break;default:cn(t,e,n)}}function Gf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new AC),e.forEach(function(r){var i=$C.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function vt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ie=a.stateNode,wt=!1;break e;case 3:Ie=a.stateNode.containerInfo,wt=!0;break e;case 4:Ie=a.stateNode.containerInfo,wt=!0;break e}a=a.return}if(Ie===null)throw Error(I(160));P_(s,o,i),Ie=null,wt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){ie(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)b_(e,t),e=e.sibling}function b_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(vt(e,t),bt(t),r&4){try{qi(3,t,t.return),qa(3,t)}catch(w){ie(t,t.return,w)}try{qi(5,t,t.return)}catch(w){ie(t,t.return,w)}}break;case 1:vt(e,t),bt(t),r&512&&n!==null&&zr(n,n.return);break;case 5:if(vt(e,t),bt(t),r&512&&n!==null&&zr(n,n.return),t.flags&32){var i=t.stateNode;try{ss(i,"")}catch(w){ie(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Zm(i,s),Oc(a,o);var c=Oc(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?ig(i,d):u==="dangerouslySetInnerHTML"?ng(i,d):u==="children"?ss(i,d):qu(i,u,d,c)}switch(a){case"input":Rc(i,s);break;case"textarea":eg(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Wr(i,!!s.multiple,_,!1):h!==!!s.multiple&&(s.defaultValue!=null?Wr(i,!!s.multiple,s.defaultValue,!0):Wr(i,!!s.multiple,s.multiple?[]:"",!1))}i[ps]=s}catch(w){ie(t,t.return,w)}}break;case 6:if(vt(e,t),bt(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){ie(t,t.return,w)}}break;case 3:if(vt(e,t),bt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{cs(e.containerInfo)}catch(w){ie(t,t.return,w)}break;case 4:vt(e,t),bt(t);break;case 13:vt(e,t),bt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(kd=ue())),r&4&&Gf(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Ae=(c=Ae)||u,vt(e,t),Ae=c):vt(e,t),bt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(x=t,u=t.child;u!==null;){for(d=x=u;x!==null;){switch(h=x,_=h.child,h.tag){case 0:case 11:case 14:case 15:qi(4,h,h.return);break;case 1:zr(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){ie(r,n,w)}}break;case 5:zr(h,h.return);break;case 22:if(h.memoizedState!==null){Kf(d);continue}}_!==null?(_.return=h,x=_):Kf(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=rg("display",o))}catch(w){ie(t,t.return,w)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(w){ie(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:vt(e,t),bt(t),r&4&&Gf(t);break;case 21:break;default:vt(e,t),bt(t)}}function bt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(x_(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ss(i,""),r.flags&=-33);var s=Hf(t);cu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Hf(t);lu(t,a,o);break;default:throw Error(I(161))}}catch(l){ie(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function DC(t,e,n){x=t,A_(t)}function A_(t,e,n){for(var r=(t.mode&1)!==0;x!==null;){var i=x,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||po;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ae;a=po;var c=Ae;if(po=o,(Ae=l)&&!c)for(x=i;x!==null;)o=x,l=o.child,o.tag===22&&o.memoizedState!==null?Qf(i):l!==null?(l.return=o,x=l):Qf(i);for(;s!==null;)x=s,A_(s),s=s.sibling;x=i,po=a,Ae=c}qf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,x=s):qf(t)}}function qf(t){for(;x!==null;){var e=x;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ae||qa(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ae)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:yt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&bf(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}bf(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&cs(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}Ae||e.flags&512&&au(e)}catch(h){ie(e,e.return,h)}}if(e===t){x=null;break}if(n=e.sibling,n!==null){n.return=e.return,x=n;break}x=e.return}}function Kf(t){for(;x!==null;){var e=x;if(e===t){x=null;break}var n=e.sibling;if(n!==null){n.return=e.return,x=n;break}x=e.return}}function Qf(t){for(;x!==null;){var e=x;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{qa(4,e)}catch(l){ie(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ie(e,i,l)}}var s=e.return;try{au(e)}catch(l){ie(e,s,l)}break;case 5:var o=e.return;try{au(e)}catch(l){ie(e,o,l)}}}catch(l){ie(e,e.return,l)}if(e===t){x=null;break}var a=e.sibling;if(a!==null){a.return=e.return,x=a;break}x=e.return}}var LC=Math.ceil,sa=an.ReactCurrentDispatcher,Id=an.ReactCurrentOwner,ht=an.ReactCurrentBatchConfig,W=0,Ce=null,de=null,ke=0,et=0,Br=$n(0),me=0,ws=null,hr=0,Ka=0,Td=0,Ki=null,Ve=null,kd=0,oi=1/0,$t=null,oa=!1,uu=null,xn=null,mo=!1,wn=null,aa=0,Qi=0,du=null,bo=-1,Ao=0;function je(){return W&6?ue():bo!==-1?bo:bo=ue()}function Pn(t){return t.mode&1?W&2&&ke!==0?ke&-ke:vC.transition!==null?(Ao===0&&(Ao=gg()),Ao):(t=H,t!==0||(t=window.event,t=t===void 0?16:Sg(t.type)),t):1}function Tt(t,e,n,r){if(50<Qi)throw Qi=0,du=null,Error(I(185));js(t,n,r),(!(W&2)||t!==Ce)&&(t===Ce&&(!(W&2)&&(Ka|=n),me===4&&pn(t,ke)),Je(t,r),n===1&&W===0&&!(e.mode&1)&&(oi=ue()+500,Va&&Wn()))}function Je(t,e){var n=t.callbackNode;vE(t,e);var r=Vo(t,t===Ce?ke:0);if(r===0)n!==null&&rf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&rf(n),e===1)t.tag===0?_C(Yf.bind(null,t)):$g(Yf.bind(null,t)),fC(function(){!(W&6)&&Wn()}),n=null;else{switch(_g(r)){case 1:n=Xu;break;case 4:n=pg;break;case 16:n=Wo;break;case 536870912:n=mg;break;default:n=Wo}n=z_(n,O_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function O_(t,e){if(bo=-1,Ao=0,W&6)throw Error(I(327));var n=t.callbackNode;if(Kr()&&t.callbackNode!==n)return null;var r=Vo(t,t===Ce?ke:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=la(t,r);else{e=r;var i=W;W|=2;var s=L_();(Ce!==t||ke!==e)&&($t=null,oi=ue()+500,ir(t,e));do try{FC();break}catch(a){D_(t,a)}while(!0);dd(),sa.current=s,W=i,de!==null?e=0:(Ce=null,ke=0,e=me)}if(e!==0){if(e===2&&(i=Fc(t),i!==0&&(r=i,e=hu(t,i))),e===1)throw n=ws,ir(t,0),pn(t,r),Je(t,ue()),n;if(e===6)pn(t,r);else{if(i=t.current.alternate,!(r&30)&&!MC(i)&&(e=la(t,r),e===2&&(s=Fc(t),s!==0&&(r=s,e=hu(t,s))),e===1))throw n=ws,ir(t,0),pn(t,r),Je(t,ue()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:Qn(t,Ve,$t);break;case 3:if(pn(t,r),(r&130023424)===r&&(e=kd+500-ue(),10<e)){if(Vo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){je(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Gc(Qn.bind(null,t,Ve,$t),e);break}Qn(t,Ve,$t);break;case 4:if(pn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-It(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*LC(r/1960))-r,10<r){t.timeoutHandle=Gc(Qn.bind(null,t,Ve,$t),r);break}Qn(t,Ve,$t);break;case 5:Qn(t,Ve,$t);break;default:throw Error(I(329))}}}return Je(t,ue()),t.callbackNode===n?O_.bind(null,t):null}function hu(t,e){var n=Ki;return t.current.memoizedState.isDehydrated&&(ir(t,e).flags|=256),t=la(t,e),t!==2&&(e=Ve,Ve=n,e!==null&&fu(e)),t}function fu(t){Ve===null?Ve=t:Ve.push.apply(Ve,t)}function MC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Rt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pn(t,e){for(e&=~Td,e&=~Ka,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-It(e),r=1<<n;t[n]=-1,e&=~r}}function Yf(t){if(W&6)throw Error(I(327));Kr();var e=Vo(t,0);if(!(e&1))return Je(t,ue()),null;var n=la(t,e);if(t.tag!==0&&n===2){var r=Fc(t);r!==0&&(e=r,n=hu(t,r))}if(n===1)throw n=ws,ir(t,0),pn(t,e),Je(t,ue()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Qn(t,Ve,$t),Je(t,ue()),null}function Nd(t,e){var n=W;W|=1;try{return t(e)}finally{W=n,W===0&&(oi=ue()+500,Va&&Wn())}}function fr(t){wn!==null&&wn.tag===0&&!(W&6)&&Kr();var e=W;W|=1;var n=ht.transition,r=H;try{if(ht.transition=null,H=1,t)return t()}finally{H=r,ht.transition=n,W=e,!(W&6)&&Wn()}}function Rd(){et=Br.current,Z(Br)}function ir(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,hC(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(ld(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qo();break;case 3:ii(),Z(Qe),Z(Oe),_d();break;case 5:gd(r);break;case 4:ii();break;case 13:Z(te);break;case 19:Z(te);break;case 10:hd(r.type._context);break;case 22:case 23:Rd()}n=n.return}if(Ce=t,de=t=bn(t.current,null),ke=et=e,me=0,ws=null,Td=Ka=hr=0,Ve=Ki=null,Zn!==null){for(e=0;e<Zn.length;e++)if(n=Zn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Zn=null}return t}function D_(t,e){do{var n=de;try{if(dd(),Ro.current=ia,ra){for(var r=ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ra=!1}if(dr=0,we=he=ne=null,Gi=!1,_s=0,Id.current=null,n===null||n.return===null){me=1,ws=e,de=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ke,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var _=jf(o);if(_!==null){_.flags&=-257,Ff(_,o,a,s,e),_.mode&1&&Mf(s,c,e),e=_,l=c;var v=e.updateQueue;if(v===null){var w=new Set;w.add(l),e.updateQueue=w}else v.add(l);break e}else{if(!(e&1)){Mf(s,c,e),xd();break e}l=Error(I(426))}}else if(ee&&a.mode&1){var C=jf(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Ff(C,o,a,s,e),cd(si(l,a));break e}}s=l=si(l,a),me!==4&&(me=2),Ki===null?Ki=[s]:Ki.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=__(s,l,e);Pf(s,m);break e;case 1:a=l;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(xn===null||!xn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=v_(s,a,e);Pf(s,y);break e}}s=s.return}while(s!==null)}j_(n)}catch(S){e=S,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function L_(){var t=sa.current;return sa.current=ia,t===null?ia:t}function xd(){(me===0||me===3||me===2)&&(me=4),Ce===null||!(hr&268435455)&&!(Ka&268435455)||pn(Ce,ke)}function la(t,e){var n=W;W|=2;var r=L_();(Ce!==t||ke!==e)&&($t=null,ir(t,e));do try{jC();break}catch(i){D_(t,i)}while(!0);if(dd(),W=n,sa.current=r,de!==null)throw Error(I(261));return Ce=null,ke=0,me}function jC(){for(;de!==null;)M_(de)}function FC(){for(;de!==null&&!cE();)M_(de)}function M_(t){var e=U_(t.alternate,t,et);t.memoizedProps=t.pendingProps,e===null?j_(t):de=e,Id.current=null}function j_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=bC(n,e),n!==null){n.flags&=32767,de=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{me=6,de=null;return}}else if(n=PC(n,e,et),n!==null){de=n;return}if(e=e.sibling,e!==null){de=e;return}de=e=t}while(e!==null);me===0&&(me=5)}function Qn(t,e,n){var r=H,i=ht.transition;try{ht.transition=null,H=1,UC(t,e,n,r)}finally{ht.transition=i,H=r}return null}function UC(t,e,n,r){do Kr();while(wn!==null);if(W&6)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(yE(t,s),t===Ce&&(de=Ce=null,ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||mo||(mo=!0,z_(Wo,function(){return Kr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ht.transition,ht.transition=null;var o=H;H=1;var a=W;W|=4,Id.current=null,OC(t,n),b_(n,t),sC(Vc),Ho=!!Wc,Vc=Wc=null,t.current=n,DC(n),uE(),W=a,H=o,ht.transition=s}else t.current=n;if(mo&&(mo=!1,wn=t,aa=i),s=t.pendingLanes,s===0&&(xn=null),fE(n.stateNode),Je(t,ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(oa)throw oa=!1,t=uu,uu=null,t;return aa&1&&t.tag!==0&&Kr(),s=t.pendingLanes,s&1?t===du?Qi++:(Qi=0,du=t):Qi=0,Wn(),null}function Kr(){if(wn!==null){var t=_g(aa),e=ht.transition,n=H;try{if(ht.transition=null,H=16>t?16:t,wn===null)var r=!1;else{if(t=wn,wn=null,aa=0,W&6)throw Error(I(331));var i=W;for(W|=4,x=t.current;x!==null;){var s=x,o=s.child;if(x.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(x=c;x!==null;){var u=x;switch(u.tag){case 0:case 11:case 15:qi(8,u,s)}var d=u.child;if(d!==null)d.return=u,x=d;else for(;x!==null;){u=x;var h=u.sibling,_=u.return;if(R_(u),u===c){x=null;break}if(h!==null){h.return=_,x=h;break}x=_}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}x=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,x=o;else e:for(;x!==null;){if(s=x,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qi(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,x=m;break e}x=s.return}}var p=t.current;for(x=p;x!==null;){o=x;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,x=g;else e:for(o=p;x!==null;){if(a=x,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:qa(9,a)}}catch(S){ie(a,a.return,S)}if(a===o){x=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,x=y;break e}x=a.return}}if(W=i,Wn(),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(Ua,t)}catch{}r=!0}return r}finally{H=n,ht.transition=e}}return!1}function Jf(t,e,n){e=si(n,e),e=__(t,e,1),t=Rn(t,e,1),e=je(),t!==null&&(js(t,1,e),Je(t,e))}function ie(t,e,n){if(t.tag===3)Jf(t,t,n);else for(;e!==null;){if(e.tag===3){Jf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xn===null||!xn.has(r))){t=si(n,t),t=v_(e,t,1),e=Rn(e,t,1),t=je(),e!==null&&(js(e,1,t),Je(e,t));break}}e=e.return}}function zC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=je(),t.pingedLanes|=t.suspendedLanes&n,Ce===t&&(ke&n)===n&&(me===4||me===3&&(ke&130023424)===ke&&500>ue()-kd?ir(t,0):Td|=n),Je(t,e)}function F_(t,e){e===0&&(t.mode&1?(e=io,io<<=1,!(io&130023424)&&(io=4194304)):e=1);var n=je();t=tn(t,e),t!==null&&(js(t,e,n),Je(t,n))}function BC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),F_(t,n)}function $C(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),F_(t,n)}var U_;U_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Qe.current)qe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return qe=!1,xC(t,e,n);qe=!!(t.flags&131072)}else qe=!1,ee&&e.flags&1048576&&Wg(e,Xo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Po(t,e),t=e.pendingProps;var i=ti(e,Oe.current);qr(e,n),i=yd(null,e,r,t,i,n);var s=wd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ye(r)?(s=!0,Yo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,pd(e),i.updater=Ga,e.stateNode=i,i._reactInternals=e,Zc(e,r,t,n),e=nu(null,e,r,!0,s,n)):(e.tag=0,ee&&s&&ad(e),Le(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Po(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=VC(r),t=yt(r,t),i){case 0:e=tu(null,e,r,t,n);break e;case 1:e=Bf(null,e,r,t,n);break e;case 11:e=Uf(null,e,r,t,n);break e;case 14:e=zf(null,e,r,yt(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yt(r,i),tu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yt(r,i),Bf(t,e,r,i,n);case 3:e:{if(C_(e),t===null)throw Error(I(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Qg(t,e),ta(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=si(Error(I(423)),e),e=$f(t,e,r,n,i);break e}else if(r!==i){i=si(Error(I(424)),e),e=$f(t,e,r,n,i);break e}else for(tt=Nn(e.stateNode.containerInfo.firstChild),rt=e,ee=!0,Et=null,n=qg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ni(),r===i){e=nn(t,e,n);break e}Le(t,e,r,n)}e=e.child}return e;case 5:return Yg(e),t===null&&Yc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Hc(r,i)?o=null:s!==null&&Hc(r,s)&&(e.flags|=32),E_(t,e),Le(t,e,o,n),e.child;case 6:return t===null&&Yc(e),null;case 13:return S_(t,e,n);case 4:return md(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ri(e,null,r,n):Le(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yt(r,i),Uf(t,e,r,i,n);case 7:return Le(t,e,e.pendingProps,n),e.child;case 8:return Le(t,e,e.pendingProps.children,n),e.child;case 12:return Le(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Y(Zo,r._currentValue),r._currentValue=o,s!==null)if(Rt(s.value,o)){if(s.children===i.children&&!Qe.current){e=nn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Jt(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Jc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(I(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Jc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Le(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,qr(e,n),i=ft(i),r=r(i),e.flags|=1,Le(t,e,r,n),e.child;case 14:return r=e.type,i=yt(r,e.pendingProps),i=yt(r.type,i),zf(t,e,r,i,n);case 15:return y_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yt(r,i),Po(t,e),e.tag=1,Ye(r)?(t=!0,Yo(e)):t=!1,qr(e,n),g_(e,r,i),Zc(e,r,i,n),nu(null,e,r,!0,t,n);case 19:return I_(t,e,n);case 22:return w_(t,e,n)}throw Error(I(156,e.tag))};function z_(t,e){return fg(t,e)}function WC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(t,e,n,r){return new WC(t,e,n,r)}function Pd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function VC(t){if(typeof t=="function")return Pd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qu)return 11;if(t===Yu)return 14}return 2}function bn(t,e){var n=t.alternate;return n===null?(n=ut(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Oo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Pd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case br:return sr(n.children,i,s,e);case Ku:o=8,i|=8;break;case Sc:return t=ut(12,n,e,i|2),t.elementType=Sc,t.lanes=s,t;case Ic:return t=ut(13,n,e,i),t.elementType=Ic,t.lanes=s,t;case Tc:return t=ut(19,n,e,i),t.elementType=Tc,t.lanes=s,t;case Ym:return Qa(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Km:o=10;break e;case Qm:o=9;break e;case Qu:o=11;break e;case Yu:o=14;break e;case dn:o=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=ut(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function sr(t,e,n,r){return t=ut(7,t,r,e),t.lanes=n,t}function Qa(t,e,n,r){return t=ut(22,t,r,e),t.elementType=Ym,t.lanes=n,t.stateNode={isHidden:!1},t}function Zl(t,e,n){return t=ut(6,t,null,e),t.lanes=n,t}function ec(t,e,n){return e=ut(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function HC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dl(0),this.expirationTimes=Dl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function bd(t,e,n,r,i,s,o,a,l){return t=new HC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ut(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pd(s),t}function GC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function B_(t){if(!t)return jn;t=t._reactInternals;e:{if(Cr(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ye(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(Ye(n))return Bg(t,n,e)}return e}function $_(t,e,n,r,i,s,o,a,l){return t=bd(n,r,!0,t,i,s,o,a,l),t.context=B_(null),n=t.current,r=je(),i=Pn(n),s=Jt(r,i),s.callback=e??null,Rn(n,s,i),t.current.lanes=i,js(t,i,r),Je(t,r),t}function Ya(t,e,n,r){var i=e.current,s=je(),o=Pn(i);return n=B_(n),e.context===null?e.context=n:e.pendingContext=n,e=Jt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Rn(i,e,o),t!==null&&(Tt(t,i,o,s),No(t,i,o)),o}function ca(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Xf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ad(t,e){Xf(t,e),(t=t.alternate)&&Xf(t,e)}function qC(){return null}var W_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Od(t){this._internalRoot=t}Ja.prototype.render=Od.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));Ya(t,e,null,null)};Ja.prototype.unmount=Od.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;fr(function(){Ya(null,t,null,null)}),e[en]=null}};function Ja(t){this._internalRoot=t}Ja.prototype.unstable_scheduleHydration=function(t){if(t){var e=wg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fn.length&&e!==0&&e<fn[n].priority;n++);fn.splice(n,0,t),n===0&&Cg(t)}};function Dd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Zf(){}function KC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ca(o);s.call(c)}}var o=$_(e,r,t,0,null,!1,!1,"",Zf);return t._reactRootContainer=o,t[en]=o.current,hs(t.nodeType===8?t.parentNode:t),fr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=ca(l);a.call(c)}}var l=bd(t,0,!1,null,null,!1,!1,"",Zf);return t._reactRootContainer=l,t[en]=l.current,hs(t.nodeType===8?t.parentNode:t),fr(function(){Ya(e,l,n,r)}),l}function Za(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ca(o);a.call(l)}}Ya(e,o,t,i)}else o=KC(n,e,t,i,r);return ca(o)}vg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ui(e.pendingLanes);n!==0&&(Zu(e,n|1),Je(e,ue()),!(W&6)&&(oi=ue()+500,Wn()))}break;case 13:fr(function(){var r=tn(t,1);if(r!==null){var i=je();Tt(r,t,1,i)}}),Ad(t,1)}};ed=function(t){if(t.tag===13){var e=tn(t,134217728);if(e!==null){var n=je();Tt(e,t,134217728,n)}Ad(t,134217728)}};yg=function(t){if(t.tag===13){var e=Pn(t),n=tn(t,e);if(n!==null){var r=je();Tt(n,t,e,r)}Ad(t,e)}};wg=function(){return H};Eg=function(t,e){var n=H;try{return H=t,e()}finally{H=n}};Lc=function(t,e,n){switch(e){case"input":if(Rc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Wa(r);if(!i)throw Error(I(90));Xm(r),Rc(r,i)}}}break;case"textarea":eg(t,n);break;case"select":e=n.value,e!=null&&Wr(t,!!n.multiple,e,!1)}};ag=Nd;lg=fr;var QC={usingClientEntryPoint:!1,Events:[Us,Lr,Wa,sg,og,Nd]},bi={findFiberByHostInstance:Xn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},YC={bundleType:bi.bundleType,version:bi.version,rendererPackageName:bi.rendererPackageName,rendererConfig:bi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:an.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=dg(t),t===null?null:t.stateNode},findFiberByHostInstance:bi.findFiberByHostInstance||qC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!go.isDisabled&&go.supportsFiber)try{Ua=go.inject(YC),Mt=go}catch{}}ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QC;ot.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dd(e))throw Error(I(200));return GC(t,e,null,n)};ot.createRoot=function(t,e){if(!Dd(t))throw Error(I(299));var n=!1,r="",i=W_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=bd(t,1,!1,null,null,n,!1,r,i),t[en]=e.current,hs(t.nodeType===8?t.parentNode:t),new Od(e)};ot.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=dg(e),t=t===null?null:t.stateNode,t};ot.flushSync=function(t){return fr(t)};ot.hydrate=function(t,e,n){if(!Xa(e))throw Error(I(200));return Za(null,t,e,!0,n)};ot.hydrateRoot=function(t,e,n){if(!Dd(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=W_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=$_(e,null,t,1,n??null,i,!1,s,o),t[en]=e.current,hs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ja(e)};ot.render=function(t,e,n){if(!Xa(e))throw Error(I(200));return Za(null,t,e,!1,n)};ot.unmountComponentAtNode=function(t){if(!Xa(t))throw Error(I(40));return t._reactRootContainer?(fr(function(){Za(null,null,t,!1,function(){t._reactRootContainer=null,t[en]=null})}),!0):!1};ot.unstable_batchedUpdates=Nd;ot.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Xa(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return Za(t,e,n,!1,r)};ot.version="18.3.1-next-f1338f8080-20240426";function V_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(V_)}catch(t){console.error(t)}}V_(),Vm.exports=ot;var JC=Vm.exports,H_,ep=JC;H_=ep.createRoot,ep.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Es(){return Es=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Es.apply(this,arguments)}var En;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(En||(En={}));const tp="popstate";function XC(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=Sr(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),pu("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,c=l.indexOf("#");a=c===-1?l:l.slice(0,c)}return a+"#"+(typeof s=="string"?s:G_(s))}function r(i,s){Ld(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return eS(e,n,r,t)}function ge(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ld(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ZC(){return Math.random().toString(36).substr(2,8)}function np(t,e){return{usr:t.state,key:t.key,idx:e}}function pu(t,e,n,r){return n===void 0&&(n=null),Es({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Sr(e):e,{state:n,key:e&&e.key||r||ZC()})}function G_(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Sr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function eS(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=En.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(Es({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function d(){a=En.Pop;let C=u(),m=C==null?null:C-c;c=C,l&&l({action:a,location:w.location,delta:m})}function h(C,m){a=En.Push;let p=pu(w.location,C,m);n&&n(p,C),c=u()+1;let g=np(p,c),y=w.createHref(p);try{o.pushState(g,"",y)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(y)}s&&l&&l({action:a,location:w.location,delta:1})}function _(C,m){a=En.Replace;let p=pu(w.location,C,m);n&&n(p,C),c=u();let g=np(p,c),y=w.createHref(p);o.replaceState(g,"",y),s&&l&&l({action:a,location:w.location,delta:0})}function v(C){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof C=="string"?C:G_(C);return p=p.replace(/ $/,"%20"),ge(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let w={get action(){return a},get location(){return t(i,o)},listen(C){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(tp,d),l=C,()=>{i.removeEventListener(tp,d),l=null}},createHref(C){return e(i,C)},createURL:v,encodeLocation(C){let m=v(C);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:_,go(C){return o.go(C)}};return w}var rp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(rp||(rp={}));function tS(t,e,n){return n===void 0&&(n="/"),nS(t,e,n,!1)}function nS(t,e,n,r){let i=typeof e=="string"?Sr(e):e,s=Q_(i.pathname||"/",n);if(s==null)return null;let o=q_(t);rS(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=pS(s);a=hS(o[l],c,r)}return a}function q_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ge(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=or([r,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(ge(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),q_(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:uS(c,s.index),routesMeta:u})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of K_(s.path))i(s,o,l)}),e}function K_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=K_(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function rS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:dS(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const iS=/^:[\w-]+$/,sS=3,oS=2,aS=1,lS=10,cS=-2,ip=t=>t==="*";function uS(t,e){let n=t.split("/"),r=n.length;return n.some(ip)&&(r+=cS),e&&(r+=oS),n.filter(i=>!ip(i)).reduce((i,s)=>i+(iS.test(s)?sS:s===""?aS:lS),r)}function dS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function hS(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,u=s==="/"?e:e.slice(s.length)||"/",d=sp({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),h=l.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=sp({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:or([s,d.pathname]),pathnameBase:wS(or([s,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(s=or([s,d.pathnameBase]))}return o}function sp(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=fS(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,u,d)=>{let{paramName:h,isOptional:_}=u;if(h==="*"){let w=a[d]||"";o=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const v=a[d];return _&&!v?c[h]=void 0:c[h]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function fS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ld(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function pS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ld(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Q_(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function mS(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Sr(t):t;return{pathname:n?n.startsWith("/")?n:gS(n,e):e,search:ES(r),hash:CS(i)}}function gS(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function tc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _S(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function vS(t,e){let n=_S(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function yS(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Sr(t):(i=Es({},t),ge(!i.pathname||!i.pathname.includes("?"),tc("?","pathname","search",i)),ge(!i.pathname||!i.pathname.includes("#"),tc("#","pathname","hash",i)),ge(!i.search||!i.search.includes("#"),tc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=mS(i,a),c=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const or=t=>t.join("/").replace(/\/\/+/g,"/"),wS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),ES=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,CS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function SS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Y_=["post","put","patch","delete"];new Set(Y_);const IS=["get",...Y_];new Set(IS);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cs(){return Cs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Cs.apply(this,arguments)}const Md=E.createContext(null),TS=E.createContext(null),el=E.createContext(null),tl=E.createContext(null),_i=E.createContext({outlet:null,matches:[],isDataRoute:!1}),J_=E.createContext(null);function nl(){return E.useContext(tl)!=null}function X_(){return nl()||ge(!1),E.useContext(tl).location}function Z_(t){E.useContext(el).static||E.useLayoutEffect(t)}function ev(){let{isDataRoute:t}=E.useContext(_i);return t?FS():kS()}function kS(){nl()||ge(!1);let t=E.useContext(Md),{basename:e,future:n,navigator:r}=E.useContext(el),{matches:i}=E.useContext(_i),{pathname:s}=X_(),o=JSON.stringify(vS(i,n.v7_relativeSplatPath)),a=E.useRef(!1);return Z_(()=>{a.current=!0}),E.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let d=yS(c,JSON.parse(o),s,u.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:or([e,d.pathname])),(u.replace?r.replace:r.push)(d,u.state,u)},[e,r,o,s,t])}function NS(t,e){return RS(t,e)}function RS(t,e,n,r){nl()||ge(!1);let{navigator:i}=E.useContext(el),{matches:s}=E.useContext(_i),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=X_(),u;if(e){var d;let C=typeof e=="string"?Sr(e):e;l==="/"||(d=C.pathname)!=null&&d.startsWith(l)||ge(!1),u=C}else u=c;let h=u.pathname||"/",_=h;if(l!=="/"){let C=l.replace(/^\//,"").split("/");_="/"+h.replace(/^\//,"").split("/").slice(C.length).join("/")}let v=tS(t,{pathname:_}),w=OS(v&&v.map(C=>Object.assign({},C,{params:Object.assign({},a,C.params),pathname:or([l,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?l:or([l,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),s,n,r);return e&&w?E.createElement(tl.Provider,{value:{location:Cs({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:En.Pop}},w):w}function xS(){let t=jS(),e=SS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),n?E.createElement("pre",{style:i},n):null,null)}const PS=E.createElement(xS,null);class bS extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?E.createElement(_i.Provider,{value:this.props.routeContext},E.createElement(J_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function AS(t){let{routeContext:e,match:n,children:r}=t,i=E.useContext(Md);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(_i.Provider,{value:e},r)}function OS(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let u=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);u>=0||ge(!1),o=o.slice(0,Math.min(o.length,u+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<o.length;u++){let d=o[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=u),d.route.id){let{loaderData:h,errors:_}=n,v=d.route.loader&&h[d.route.id]===void 0&&(!_||_[d.route.id]===void 0);if(d.route.lazy||v){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,d,h)=>{let _,v=!1,w=null,C=null;n&&(_=a&&d.route.id?a[d.route.id]:void 0,w=d.route.errorElement||PS,l&&(c<0&&h===0?(v=!0,C=null):c===h&&(v=!0,C=d.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,h+1)),p=()=>{let g;return _?g=w:v?g=C:d.route.Component?g=E.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=u,E.createElement(AS,{match:d,routeContext:{outlet:u,matches:m,isDataRoute:n!=null},children:g})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?E.createElement(bS,{location:n.location,revalidation:n.revalidation,component:w,error:_,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var tv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(tv||{}),ua=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ua||{});function DS(t){let e=E.useContext(Md);return e||ge(!1),e}function LS(t){let e=E.useContext(TS);return e||ge(!1),e}function MS(t){let e=E.useContext(_i);return e||ge(!1),e}function nv(t){let e=MS(),n=e.matches[e.matches.length-1];return n.route.id||ge(!1),n.route.id}function jS(){var t;let e=E.useContext(J_),n=LS(ua.UseRouteError),r=nv(ua.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function FS(){let{router:t}=DS(tv.UseNavigateStable),e=nv(ua.UseNavigateStable),n=E.useRef(!1);return Z_(()=>{n.current=!0}),E.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Cs({fromRouteId:e},s)))},[t,e])}function Do(t){ge(!1)}function US(t){let{basename:e="/",children:n=null,location:r,navigationType:i=En.Pop,navigator:s,static:o=!1,future:a}=t;nl()&&ge(!1);let l=e.replace(/^\/*/,"/"),c=E.useMemo(()=>({basename:l,navigator:s,static:o,future:Cs({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Sr(r));let{pathname:u="/",search:d="",hash:h="",state:_=null,key:v="default"}=r,w=E.useMemo(()=>{let C=Q_(u,l);return C==null?null:{location:{pathname:C,search:d,hash:h,state:_,key:v},navigationType:i}},[l,u,d,h,_,v,i]);return w==null?null:E.createElement(el.Provider,{value:c},E.createElement(tl.Provider,{children:n,value:w}))}function zS(t){let{children:e,location:n}=t;return NS(mu(e),n)}new Promise(()=>{});function mu(t,e){e===void 0&&(e=[]);let n=[];return E.Children.forEach(t,(r,i)=>{if(!E.isValidElement(r))return;let s=[...e,i];if(r.type===E.Fragment){n.push.apply(n,mu(r.props.children,s));return}r.type!==Do&&ge(!1),!r.props.index||!r.props.children||ge(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=mu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const BS="6";try{window.__reactRouterVersion=BS}catch{}const $S="startTransition",op=zw[$S];function WS(t){let{basename:e,children:n,future:r,window:i}=t,s=E.useRef();s.current==null&&(s.current=XC({window:i,v5Compat:!0}));let o=s.current,[a,l]=E.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},u=E.useCallback(d=>{c&&op?op(()=>l(d)):l(d)},[l,c]);return E.useLayoutEffect(()=>o.listen(u),[o,u]),E.createElement(US,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var ap;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(ap||(ap={}));var lp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(lp||(lp={}));const rv=()=>f.jsxs("header",{className:"header",children:[f.jsx("div",{className:"logo",children:"LOGO"}),f.jsx("nav",{className:"nav",children:f.jsx("a",{href:"/",className:"nav-link",children:"Inicio"})})]});var cp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=function(t,e){if(!t)throw vi(e)},vi=function(t){return new Error("Firebase Database ("+iv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},VS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},jd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(h=64)),r.push(n[u],n[d],n[h],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):VS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw new HS;const h=s<<2|a>>4;if(r.push(h),c!==64){const _=a<<4&240|c>>2;if(r.push(_),d!==64){const v=c<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class HS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ov=function(t){const e=sv(t);return jd.encodeByteArray(e,!0)},da=function(t){return ov(t).replace(/\./g,"")},ha=function(t){try{return jd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GS(t){return av(void 0,t)}function av(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!qS(n)||(t[n]=av(t[n],e[n]));return t}function qS(t){return t!=="__proto__"}/**
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
 */function KS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const QS=()=>KS().__FIREBASE_DEFAULTS__,YS=()=>{if(typeof process>"u"||typeof cp>"u")return;const t=cp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},JS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ha(t[1]);return e&&JSON.parse(e)},Fd=()=>{try{return QS()||YS()||JS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},lv=t=>{var e,n;return(n=(e=Fd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},cv=t=>{const e=lv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},uv=()=>{var t;return(t=Fd())===null||t===void 0?void 0:t.config},dv=t=>{var e;return(e=Fd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function hv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[da(JSON.stringify(n)),da(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ud(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ue())}function fv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function XS(){const t=Ue();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function mv(){return iv.NODE_ADMIN===!0}function gv(){try{return typeof indexedDB=="object"}catch{return!1}}function _v(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function ZS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1="FirebaseError";class Pt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=e1,Object.setPrototypeOf(this,Pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ir.prototype.create)}}class Ir{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?t1(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Pt(i,a,r)}}function t1(t,e){return t.replace(n1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const n1=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(t){return JSON.parse(t)}function pe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ss(ha(s[0])||""),n=Ss(ha(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},r1=function(t){const e=vv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},i1=function(t){const e=vv(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ai(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function gu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fa(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Is(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(up(s)&&up(o)){if(!Is(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function up(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):d<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function o1(t,e){const n=new a1(t,e);return n.subscribe.bind(n)}class a1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");l1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=nc),i.error===void 0&&(i.error=nc),i.complete===void 0&&(i.complete=nc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function l1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function nc(){}function rl(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,T(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},il=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const u1=1e3,d1=2,h1=4*60*60*1e3,f1=.5;function dp(t,e=u1,n=d1){const r=e*Math.pow(n,t),i=Math.round(f1*r*(Math.random()-.5)*2);return Math.min(h1,r+i)}/**
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
 */function _e(t){return t&&t._delegate?t._delegate:t}class mt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yn="[DEFAULT]";/**
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
 */class p1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Bs;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(g1(e))try{this.getOrInitializeService({instanceIdentifier:Yn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yn){return this.instances.has(e)}getOptions(e=Yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:m1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yn){return this.component?this.component.multipleInstances?e:Yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function m1(t){return t===Yn?void 0:t}function g1(t){return t.instantiationMode==="EAGER"}/**
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
 */class _1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new p1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const v1={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},y1=G.INFO,w1={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},E1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=w1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sl{constructor(e){this.name=e,this._logLevel=y1,this._logHandler=E1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?v1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const C1=(t,e)=>e.some(n=>t instanceof n);let hp,fp;function S1(){return hp||(hp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function I1(){return fp||(fp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yv=new WeakMap,_u=new WeakMap,wv=new WeakMap,rc=new WeakMap,zd=new WeakMap;function T1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(An(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&yv.set(n,t)}).catch(()=>{}),zd.set(e,t),e}function k1(t){if(_u.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});_u.set(t,e)}let vu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _u.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return An(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function N1(t){vu=t(vu)}function R1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ic(this),e,...n);return wv.set(r,e.sort?e.sort():[e]),An(r)}:I1().includes(t)?function(...e){return t.apply(ic(this),e),An(yv.get(this))}:function(...e){return An(t.apply(ic(this),e))}}function x1(t){return typeof t=="function"?R1(t):(t instanceof IDBTransaction&&k1(t),C1(t,S1())?new Proxy(t,vu):t)}function An(t){if(t instanceof IDBRequest)return T1(t);if(rc.has(t))return rc.get(t);const e=x1(t);return e!==t&&(rc.set(t,e),zd.set(e,t)),e}const ic=t=>zd.get(t);function Ev(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=An(o);return r&&o.addEventListener("upgradeneeded",l=>{r(An(o.result),l.oldVersion,l.newVersion,An(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const P1=["get","getKey","getAll","getAllKeys","count"],b1=["put","add","delete","clear"],sc=new Map;function pp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(sc.get(e))return sc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=b1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||P1.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return sc.set(e,s),s}N1(t=>({...t,get:(e,n,r)=>pp(e,n)||t.get(e,n,r),has:(e,n)=>!!pp(e,n)||t.has(e,n)}));/**
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
 */class A1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(O1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function O1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yu="@firebase/app",mp="0.10.10";/**
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
 */const rn=new sl("@firebase/app"),D1="@firebase/app-compat",L1="@firebase/analytics-compat",M1="@firebase/analytics",j1="@firebase/app-check-compat",F1="@firebase/app-check",U1="@firebase/auth",z1="@firebase/auth-compat",B1="@firebase/database",$1="@firebase/database-compat",W1="@firebase/functions",V1="@firebase/functions-compat",H1="@firebase/installations",G1="@firebase/installations-compat",q1="@firebase/messaging",K1="@firebase/messaging-compat",Q1="@firebase/performance",Y1="@firebase/performance-compat",J1="@firebase/remote-config",X1="@firebase/remote-config-compat",Z1="@firebase/storage",eI="@firebase/storage-compat",tI="@firebase/firestore",nI="@firebase/vertexai-preview",rI="@firebase/firestore-compat",iI="firebase",sI="10.13.1";/**
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
 */const wu="[DEFAULT]",oI={[yu]:"fire-core",[D1]:"fire-core-compat",[M1]:"fire-analytics",[L1]:"fire-analytics-compat",[F1]:"fire-app-check",[j1]:"fire-app-check-compat",[U1]:"fire-auth",[z1]:"fire-auth-compat",[B1]:"fire-rtdb",[$1]:"fire-rtdb-compat",[W1]:"fire-fn",[V1]:"fire-fn-compat",[H1]:"fire-iid",[G1]:"fire-iid-compat",[q1]:"fire-fcm",[K1]:"fire-fcm-compat",[Q1]:"fire-perf",[Y1]:"fire-perf-compat",[J1]:"fire-rc",[X1]:"fire-rc-compat",[Z1]:"fire-gcs",[eI]:"fire-gcs-compat",[tI]:"fire-fst",[rI]:"fire-fst-compat",[nI]:"fire-vertex","fire-js":"fire-js",[iI]:"fire-js-all"};/**
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
 */const pa=new Map,aI=new Map,Eu=new Map;function gp(t,e){try{t.container.addComponent(e)}catch(n){rn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xt(t){const e=t.name;if(Eu.has(e))return rn.debug(`There were multiple attempts to register component ${e}.`),!1;Eu.set(e,t);for(const n of pa.values())gp(n,t);for(const n of aI.values())gp(n,t);return!0}function Vn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Gt(t){return t.settings!==void 0}/**
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
 */const lI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},On=new Ir("app","Firebase",lI);/**
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
 */class cI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw On.create("app-deleted",{appName:this._name})}}/**
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
 */const Tr=sI;function Cv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw On.create("bad-app-name",{appName:String(i)});if(n||(n=uv()),!n)throw On.create("no-options");const s=pa.get(i);if(s){if(Is(n,s.options)&&Is(r,s.config))return s;throw On.create("duplicate-app",{appName:i})}const o=new _1(i);for(const l of Eu.values())o.addComponent(l);const a=new cI(n,r,o);return pa.set(i,a),a}function ol(t=wu){const e=pa.get(t);if(!e&&t===wu&&uv())return Cv();if(!e)throw On.create("no-app",{appName:t});return e}function Xe(t,e,n){var r;let i=(r=oI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rn.warn(a.join(" "));return}xt(new mt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const uI="firebase-heartbeat-database",dI=1,Ts="firebase-heartbeat-store";let oc=null;function Sv(){return oc||(oc=Ev(uI,dI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ts)}catch(n){console.warn(n)}}}}).catch(t=>{throw On.create("idb-open",{originalErrorMessage:t.message})})),oc}async function hI(t){try{const n=(await Sv()).transaction(Ts),r=await n.objectStore(Ts).get(Iv(t));return await n.done,r}catch(e){if(e instanceof Pt)rn.warn(e.message);else{const n=On.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rn.warn(n.message)}}}async function _p(t,e){try{const r=(await Sv()).transaction(Ts,"readwrite");await r.objectStore(Ts).put(e,Iv(t)),await r.done}catch(n){if(n instanceof Pt)rn.warn(n.message);else{const r=On.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});rn.warn(r.message)}}}function Iv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const fI=1024,pI=30*24*60*60*1e3;class mI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _I(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=vp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=pI}),this._storage.overwrite(this._heartbeatsCache))}catch(r){rn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=vp(),{heartbeatsToSend:r,unsentEntries:i}=gI(this._heartbeatsCache.heartbeats),s=da(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return rn.warn(n),""}}}function vp(){return new Date().toISOString().substring(0,10)}function gI(t,e=fI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),yp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),yp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _I{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gv()?_v().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await hI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _p(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _p(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function yp(t){return da(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function vI(t){xt(new mt("platform-logger",e=>new A1(e),"PRIVATE")),xt(new mt("heartbeat",e=>new mI(e),"PRIVATE")),Xe(yu,mp,t),Xe(yu,mp,"esm2017"),Xe("fire-js","")}vI("");var wp={};const Ep="@firebase/database",Cp="1.0.7";/**
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
 */let Tv="";function yI(t){Tv=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),pe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ss(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return zt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new wI(e)}}catch{}return new EI},tr=kv("localStorage"),CI=kv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=new sl("@firebase/database"),SI=function(){let t=1;return function(){return t++}}(),Nv=function(t){const e=c1(t),n=new s1;n.update(e);const r=n.digest();return jd.encodeByteArray(r)},$s=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=$s.apply(null,r):typeof r=="object"?e+=pe(r):e+=r,e+=" "}return e};let Yi=null,Sp=!0;const Rv=function(t,e){T(!e,"Can't turn on custom loggers persistently."),Qr.logLevel=G.VERBOSE,Yi=Qr.log.bind(Qr)},Te=function(...t){if(Sp===!0&&(Sp=!1,Yi===null&&CI.get("logging_enabled")===!0&&Rv()),Yi){const e=$s.apply(null,t);Yi(e)}},Ws=function(t){return function(...e){Te(t,...e)}},Cu=function(...t){const e="FIREBASE INTERNAL ERROR: "+$s(...t);Qr.error(e)},sn=function(...t){const e=`FIREBASE FATAL ERROR: ${$s(...t)}`;throw Qr.error(e),new Error(e)},Fe=function(...t){const e="FIREBASE WARNING: "+$s(...t);Qr.warn(e)},II=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Fe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Bd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},TI=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},li="[MIN_NAME]",pr="[MAX_NAME]",kr=function(t,e){if(t===e)return 0;if(t===li||e===pr)return-1;if(e===li||t===pr)return 1;{const n=Ip(t),r=Ip(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},kI=function(t,e){return t===e?0:t<e?-1:1},Ai=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+pe(e))},$d=function(t){if(typeof t!="object"||t===null)return pe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=pe(e[r]),n+=":",n+=$d(t[e[r]]);return n+="}",n},xv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Re(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Pv=function(t){T(!Bd(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},NI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},RI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function xI(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const PI=new RegExp("^-?(0*)\\d{1,10}$"),bI=-2147483648,AI=2147483647,Ip=function(t){if(PI.test(t)){const e=Number(t);if(e>=bI&&e<=AI)return e}return null},wi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Fe("Exception was thrown by user callback.",n),e},Math.floor(0))}},OI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ji=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class DI{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Fe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Te("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Fe(e)}}class Lo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Lo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd="5",bv="v",Av="s",Ov="r",Dv="f",Lv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Mv="ls",jv="p",Su="ac",Fv="websocket",Uv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=tr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&tr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function MI(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Bv(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let r;if(e===Fv)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Uv)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);MI(t)&&(n.ns=t.namespace);const i=[];return Re(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(){this.counters_={}}incrementCounter(e,n=1){zt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return GS(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac={},lc={};function Vd(t){const e=t.toString();return ac[e]||(ac[e]=new jI),ac[e]}function FI(t,e){const n=t.toString();return lc[n]||(lc[n]=e()),lc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&wi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp="start",zI="close",BI="pLPCommand",$I="pRTLPCB",$v="id",Wv="pw",Vv="ser",WI="cb",VI="seg",HI="ts",GI="d",qI="dframe",Hv=1870,Gv=30,KI=Hv-Gv,QI=25e3,YI=3e4;class $r{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ws(e),this.stats_=Vd(n),this.urlFn=l=>(this.appCheckToken&&(l[Su]=this.appCheckToken),Bv(n,Uv,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new UI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(YI)),TI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Hd((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Tp)this.id=a,this.password=l;else if(o===zI)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Tp]="t",r[Vv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[WI]=this.scriptTagHolder.uniqueCallbackIdentifier),r[bv]=Wd,this.transportSessionId&&(r[Av]=this.transportSessionId),this.lastSessionId&&(r[Mv]=this.lastSessionId),this.applicationId&&(r[jv]=this.applicationId),this.appCheckToken&&(r[Su]=this.appCheckToken),typeof location<"u"&&location.hostname&&Lv.test(location.hostname)&&(r[Ov]=Dv);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){$r.forceAllow_=!0}static forceDisallow(){$r.forceDisallow_=!0}static isAvailable(){return $r.forceAllow_?!0:!$r.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!NI()&&!RI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ov(n),i=xv(r,KI);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[qI]="t",r[$v]=e,r[Wv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Hd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=SI(),window[BI+this.uniqueCallbackIdentifier]=e,window[$I+this.uniqueCallbackIdentifier]=n,this.myIFrame=Hd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Te("frame writing exception"),a.stack&&Te(a.stack),Te(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Te("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[$v]=this.myID,e[Wv]=this.myPW,e[Vv]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Gv+r.length<=Hv;){const o=this.pendingSegs.shift();r=r+"&"+VI+i+"="+o.seg+"&"+HI+i+"="+o.ts+"&"+GI+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(QI)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Te("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI=16384,XI=45e3;let ma=null;typeof MozWebSocket<"u"?ma=MozWebSocket:typeof WebSocket<"u"&&(ma=WebSocket);class Ct{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ws(this.connId),this.stats_=Vd(n),this.connURL=Ct.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[bv]=Wd,typeof location<"u"&&location.hostname&&Lv.test(location.hostname)&&(o[Ov]=Dv),n&&(o[Av]=n),r&&(o[Mv]=r),i&&(o[Su]=i),s&&(o[jv]=s),Bv(e,Fv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,tr.set("previous_websocket_failure",!0);try{let r;mv(),this.mySock=new ma(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ct.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&ma!==null&&!Ct.forceDisallow_}static previouslyFailed(){return tr.isInMemoryStorage||tr.get("previous_websocket_failure")===!0}markConnectionHealthy(){tr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ss(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=xv(n,JI);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(XI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ct.responsesRequiredToBeHealthy=2;Ct.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[$r,Ct]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ct&&Ct.isAvailable();let r=n&&!Ct.previouslyFailed();if(e.webSocketOnly&&(n||Fe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Ct];else{const i=this.transports_=[];for(const s of ks.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ks.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ks.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=6e4,eT=5e3,tT=10*1024,nT=100*1024,cc="t",kp="d",rT="s",Np="r",iT="e",Rp="o",xp="a",Pp="n",bp="p",sT="h";class oT{constructor(e,n,r,i,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ws("c:"+this.id+":"),this.transportManager_=new ks(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ji(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>nT?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>tT?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(cc in e){const n=e[cc];n===xp?this.upgradeIfSecondaryHealthy_():n===Np?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Rp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ai("t",e),r=Ai("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:bp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:xp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Pp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ai("t",e),r=Ai("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ai(cc,e);if(kp in e){const r=e[kp];if(n===sT){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Pp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===rT?this.onConnectionShutdown_(r):n===Np?this.onReset_(r):n===iT?Cu("Server Error: "+r):n===Rp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Cu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Wd!==r&&Fe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ji(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ZI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ji(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(eT))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:bp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(tr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga extends Kv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ud()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ga}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap=32,Op=768;class q{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function V(){return new q("")}function U(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Fn(t){return t.pieces_.length-t.pieceNum_}function Q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new q(t.pieces_,e)}function Gd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function aT(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ns(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Qv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new q(e,0)}function se(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof q)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new q(n,0)}function B(t){return t.pieceNum_>=t.pieces_.length}function Me(t,e){const n=U(t),r=U(e);if(n===null)return e;if(n===r)return Me(Q(t),Q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function lT(t,e){const n=Ns(t,0),r=Ns(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=kr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function qd(t,e){if(Fn(t)!==Fn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function dt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Fn(t)>Fn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class cT{constructor(e,n){this.errorPrefix_=n,this.parts_=Ns(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=il(this.parts_[r]);Yv(this)}}function uT(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=il(e),Yv(t)}function dT(t){const e=t.parts_.pop();t.byteLength_-=il(e),t.parts_.length>0&&(t.byteLength_-=1)}function Yv(t){if(t.byteLength_>Op)throw new Error(t.errorPrefix_+"has a key path longer than "+Op+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ap)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ap+") or object contains a cycle "+Jn(t))}function Jn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd extends Kv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Kd}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=1e3,hT=60*5*1e3,Dp=30*1e3,fT=1.3,pT=3e4,mT="server_kill",Lp=3;class Xt extends qv{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Xt.nextPersistentConnectionId_++,this.log_=Ws("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Oi,this.maxReconnectDelay_=hT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!mv())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Kd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ga.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(pe(s)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Bs,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Xt.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&zt(e,"w")){const r=ai(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Fe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||i1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Dp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=r1(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+pe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Cu("Unrecognized action received from server: "+pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Oi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Oi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>pT&&(this.reconnectDelay_=Oi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*fT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Xt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(d){T(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Te("getToken() completed but was canceled"):(Te("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new oT(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Fe(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(mT)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Fe(d),l())}}}interrupt(e){Te("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Te("Resuming connection for reason: "+e),delete this.interruptReasons_[e],gu(this.interruptReasons_)&&(this.reconnectDelay_=Oi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>$d(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new q(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Te("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Lp&&(this.reconnectDelay_=Dp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Te("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Lp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Tv.replace(/\./g,"-")]=1,Ud()?e["framework.cordova"]=1:pv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ga.getInstance().currentlyOnline();return gu(this.interruptReasons_)&&e}}Xt.nextPersistentConnectionId_=0;Xt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new z(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new z(li,e),i=new z(li,n);return this.compare(r,i)!==0}minPost(){return z.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _o;class Jv extends al{static get __EMPTY_NODE(){return _o}static set __EMPTY_NODE(e){_o=e}compare(e,n){return kr(e.name,n.name)}isDefinedOn(e){throw vi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return z.MIN}maxPost(){return new z(pr,_o)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,_o)}toString(){return".key"}}const Yr=new Jv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ee{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ee.RED,this.left=i??Ke.EMPTY_NODE,this.right=s??Ke.EMPTY_NODE}copy(e,n,r,i,s){return new Ee(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ke.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ke.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ee.RED=!0;Ee.BLACK=!1;class gT{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ee(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ke{constructor(e,n=Ke.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ke(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ee.BLACK,null,null))}remove(e){return new Ke(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ee.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new vo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new vo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new vo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new vo(this.root_,null,this.comparator_,!0,e)}}Ke.EMPTY_NODE=new gT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _T(t,e){return kr(t.name,e.name)}function Qd(t,e){return kr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Iu;function vT(t){Iu=t}const Xv=function(t){return typeof t=="number"?"number:"+Pv(t):"string:"+t},Zv=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&zt(e,".sv"),"Priority must be a string or number.")}else T(t===Iu||t.isEmpty(),"priority of unexpected type.");T(t===Iu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mp;class ye{constructor(e,n=ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Zv(this.priorityNode_)}static set __childrenNodeConstructor(e){Mp=e}static get __childrenNodeConstructor(){return Mp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return B(e)?this:U(e)===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=U(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(T(r!==".priority"||Fn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(Q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Pv(this.value_):e+=this.value_,this.lazyHash_=Nv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ye.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ye.VALUE_TYPE_ORDER.indexOf(n),s=ye.VALUE_TYPE_ORDER.indexOf(r);return T(i>=0,"Unknown leaf type: "+n),T(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ey,ty;function yT(t){ey=t}function wT(t){ty=t}class ET extends al{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?kr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return z.MIN}maxPost(){return new z(pr,new ye("[PRIORITY-POST]",ty))}makePost(e,n){const r=ey(e);return new z(n,new ye("[PRIORITY-POST]",r))}toString(){return".priority"}}const oe=new ET;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=Math.log(2);class ST{constructor(e){const n=s=>parseInt(Math.log(s)/CT,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const _a=function(t,e,n,r){t.sort(e);const i=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new Ee(h,d.node,Ee.BLACK,null,null);{const _=parseInt(u/2,10)+l,v=i(l,_),w=i(_+1,c);return d=t[_],h=n?n(d):d,new Ee(h,d.node,Ee.BLACK,v,w)}},s=function(l){let c=null,u=null,d=t.length;const h=function(v,w){const C=d-v,m=d;d-=v;const p=i(C+1,m),g=t[C],y=n?n(g):g;_(new Ee(y,g.node,w,null,p))},_=function(v){c?(c.left=v,c=v):(u=v,c=v)};for(let v=0;v<l.count;++v){const w=l.nextBitIsOne(),C=Math.pow(2,l.count-(v+1));w?h(C,Ee.BLACK):(h(C,Ee.BLACK),h(C,Ee.RED))}return u},o=new ST(t.length),a=s(o);return new Ke(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uc;const xr={};class qt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return T(xr&&oe,"ChildrenNode.ts has not been loaded"),uc=uc||new qt({".priority":xr},{".priority":oe}),uc}get(e){const n=ai(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ke?n:null}hasIndex(e){return zt(this.indexSet_,e.toString())}addIndex(e,n){T(e!==Yr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(z.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=_a(r,e.getCompare()):a=xr;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new qt(u,c)}addToIndexes(e,n){const r=fa(this.indexes_,(i,s)=>{const o=ai(this.indexSet_,s);if(T(o,"Missing index implementation for "+s),i===xr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(z.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),_a(a,o.getCompare())}else return xr;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new z(e.name,a))),l.insert(e,e.node)}});return new qt(r,this.indexSet_)}removeFromIndexes(e,n){const r=fa(this.indexes_,i=>{if(i===xr)return i;{const s=n.get(e.name);return s?i.remove(new z(e.name,s)):i}});return new qt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Di;class b{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Zv(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Di||(Di=new b(new Ke(Qd),null,qt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Di}updatePriority(e){return this.children_.isEmpty()?this:new b(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Di:n}}getChild(e){const n=U(e);return n===null?this:this.getImmediateChild(n).getChild(Q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new z(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Di:this.priorityNode_;return new b(i,o,s)}}updateChild(e,n){const r=U(e);if(r===null)return n;{T(U(e)!==".priority"||Fn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Q(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(oe,(o,a)=>{n[o]=a.val(e),r++,s&&b.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xv(this.getPriority().val())+":"),this.forEachChild(oe,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Nv(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new z(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new z(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Vs?-1:0}withIndex(e){if(e===Yr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new b(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Yr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(oe),i=n.getIterator(oe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Yr?null:this.indexMap_.get(e.toString())}}b.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class IT extends b{constructor(){super(new Ke(Qd),b.EMPTY_NODE,qt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return b.EMPTY_NODE}isEmpty(){return!1}}const Vs=new IT;Object.defineProperties(z,{MIN:{value:new z(li,b.EMPTY_NODE)},MAX:{value:new z(pr,Vs)}});Jv.__EMPTY_NODE=b.EMPTY_NODE;ye.__childrenNodeConstructor=b;vT(Vs);wT(Vs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=!0;function fe(t,e=null){if(t===null)return b.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ye(n,fe(e))}if(!(t instanceof Array)&&TT){const n=[];let r=!1;if(Re(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=fe(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new z(o,l)))}}),n.length===0)return b.EMPTY_NODE;const s=_a(n,_T,o=>o.name,Qd);if(r){const o=_a(n,oe.getCompare());return new b(s,fe(e),new qt({".priority":o},{".priority":oe}))}else return new b(s,fe(e),qt.Default)}else{let n=b.EMPTY_NODE;return Re(t,(r,i)=>{if(zt(t,r)&&r.substring(0,1)!=="."){const s=fe(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(fe(e))}}yT(fe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT extends al{constructor(e){super(),this.indexPath_=e,T(!B(e)&&U(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?kr(e.name,n.name):s}makePost(e,n){const r=fe(e),i=b.EMPTY_NODE.updateChild(this.indexPath_,r);return new z(n,i)}maxPost(){const e=b.EMPTY_NODE.updateChild(this.indexPath_,Vs);return new z(pr,e)}toString(){return Ns(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT extends al{compare(e,n){const r=e.node.compareTo(n.node);return r===0?kr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,n){const r=fe(e);return new z(n,r)}toString(){return".value"}}const RT=new NT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ny(t){return{type:"value",snapshotNode:t}}function ci(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Rs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function xs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function xT(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Rs(n,a)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ci(n,r)):o.trackChildChange(xs(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(oe,(i,s)=>{n.hasChild(i)||r.trackChildChange(Rs(i,s))}),n.isLeafNode()||n.forEachChild(oe,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(xs(i,s,o))}else r.trackChildChange(ci(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?b.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this.indexedFilter_=new Yd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ps.getStartPost_(e),this.endPost_=Ps.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new z(n,r))||(r=b.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=b.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(b.EMPTY_NODE);const s=this;return n.forEachChild(oe,(o,a)=>{s.matches(new z(o,a))||(i=i.updateImmediateChild(o,b.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ps(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new z(n,r))||(r=b.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=b.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=b.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(b.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,b.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,_)=>d(_,h)}else o=this.index_.getCompare();const a=e;T(a.numChildren()===this.limit_,"");const l=new z(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const _=h==null?1:o(h,l);if(u&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(xs(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Rs(n,d));const w=a.updateImmediateChild(n,b.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(ci(h.name,h.node)),w.updateImmediateChild(h.name,h.node)):w}}else return r.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(Rs(c.name,c.node)),s.trackChildChange(ci(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,b.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=oe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:li}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:pr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===oe}copy(){const e=new Jd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function bT(t){return t.loadsAllData()?new Yd(t.getIndex()):t.hasLimit()?new PT(t):new Ps(t)}function jp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===oe?n="$priority":t.index_===RT?n="$value":t.index_===Yr?n="$key":(T(t.index_ instanceof kT,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=pe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=pe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+pe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=pe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+pe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Fp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==oe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va extends qv{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ws("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=va.getListenId_(e,r),a={};this.listens_[o]=a;const l=jp(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,r),ai(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const r=va.getListenId_(e,n);delete this.listens_[r]}get(e){const n=jp(e._queryParams),r=e._path.toString(),i=new Bs;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+yi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ss(a.responseText)}catch{Fe("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Fe("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(){this.rootNode_=b.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(){return{value:null,children:new Map}}function ry(t,e,n){if(B(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=U(e);t.children.has(r)||t.children.set(r,ya());const i=t.children.get(r);e=Q(e),ry(i,e,n)}}function Tu(t,e,n){t.value!==null?n(e,t.value):OT(t,(r,i)=>{const s=new q(e.toString()+"/"+r);Tu(i,s,n)})}function OT(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Re(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up=10*1e3,LT=30*1e3,MT=5*60*1e3;class jT{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new DT(e);const r=Up+(LT-Up)*Math.random();Ji(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Re(e,(i,s)=>{s>0&&zt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ji(this.reportStats_.bind(this),Math.floor(Math.random()*2*MT))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var St;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(St||(St={}));function Xd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Zd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function eh(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=St.ACK_USER_WRITE,this.source=Xd()}operationForChild(e){if(B(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new q(e));return new wa(V(),n,this.revert)}}else return T(U(this.path)===e,"operationForChild called for unrelated child."),new wa(Q(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n){this.source=e,this.path=n,this.type=St.LISTEN_COMPLETE}operationForChild(e){return B(this.path)?new bs(this.source,V()):new bs(this.source,Q(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=St.OVERWRITE}operationForChild(e){return B(this.path)?new mr(this.source,V(),this.snap.getImmediateChild(e)):new mr(this.source,Q(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=St.MERGE}operationForChild(e){if(B(this.path)){const n=this.children.subtree(new q(e));return n.isEmpty()?null:n.value?new mr(this.source,V(),n.value):new ui(this.source,V(),n)}else return T(U(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ui(this.source,Q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(B(e))return this.isFullyInitialized()&&!this.filtered_;const n=U(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function UT(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(xT(o.childName,o.snapshotNode))}),Li(t,i,"child_removed",e,r,n),Li(t,i,"child_added",e,r,n),Li(t,i,"child_moved",s,r,n),Li(t,i,"child_changed",e,r,n),Li(t,i,"value",e,r,n),i}function Li(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>BT(t,a,l)),o.forEach(a=>{const l=zT(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function zT(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function BT(t,e,n){if(e.childName==null||n.childName==null)throw vi("Should only compare child_ events.");const r=new z(e.childName,e.snapshotNode),i=new z(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(t,e){return{eventCache:t,serverCache:e}}function Xi(t,e,n,r){return ll(new Un(e,n,r),t.serverCache)}function iy(t,e,n,r){return ll(t.eventCache,new Un(e,n,r))}function Ea(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function gr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dc;const $T=()=>(dc||(dc=new Ke(kI)),dc);class K{constructor(e,n=$T()){this.value=e,this.children=n}static fromObject(e){let n=new K(null);return Re(e,(r,i)=>{n=n.set(new q(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:V(),value:this.value};if(B(e))return null;{const r=U(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Q(e),n);return s!=null?{path:se(new q(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(B(e))return this;{const n=U(e),r=this.children.get(n);return r!==null?r.subtree(Q(e)):new K(null)}}set(e,n){if(B(e))return new K(n,this.children);{const r=U(e),s=(this.children.get(r)||new K(null)).set(Q(e),n),o=this.children.insert(r,s);return new K(this.value,o)}}remove(e){if(B(e))return this.children.isEmpty()?new K(null):new K(null,this.children);{const n=U(e),r=this.children.get(n);if(r){const i=r.remove(Q(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new K(null):new K(this.value,s)}else return this}}get(e){if(B(e))return this.value;{const n=U(e),r=this.children.get(n);return r?r.get(Q(e)):null}}setTree(e,n){if(B(e))return n;{const r=U(e),s=(this.children.get(r)||new K(null)).setTree(Q(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new K(this.value,o)}}fold(e){return this.fold_(V(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(se(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,V(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(B(e))return null;{const s=U(e),o=this.children.get(s);return o?o.findOnPath_(Q(e),se(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,V(),n)}foreachOnPath_(e,n,r){if(B(e))return this;{this.value&&r(n,this.value);const i=U(e),s=this.children.get(i);return s?s.foreachOnPath_(Q(e),se(n,i),r):new K(null)}}foreach(e){this.foreach_(V(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(se(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.writeTree_=e}static empty(){return new kt(new K(null))}}function Zi(t,e,n){if(B(e))return new kt(new K(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Me(i,e);return s=s.updateChild(o,n),new kt(t.writeTree_.set(i,s))}else{const i=new K(n),s=t.writeTree_.setTree(e,i);return new kt(s)}}}function ku(t,e,n){let r=t;return Re(n,(i,s)=>{r=Zi(r,se(e,i),s)}),r}function zp(t,e){if(B(e))return kt.empty();{const n=t.writeTree_.setTree(e,new K(null));return new kt(n)}}function Nu(t,e){return Nr(t,e)!=null}function Nr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Me(n.path,e)):null}function Bp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(oe,(r,i)=>{e.push(new z(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new z(r,i.value))}),e}function Dn(t,e){if(B(e))return t;{const n=Nr(t,e);return n!=null?new kt(new K(n)):new kt(t.writeTree_.subtree(e))}}function Ru(t){return t.writeTree_.isEmpty()}function di(t,e){return sy(V(),t.writeTree_,e)}function sy(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(T(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=sy(se(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(se(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(t,e){return cy(e,t)}function WT(t,e,n,r,i){T(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Zi(t.visibleWrites,e,n)),t.lastWriteId=r}function VT(t,e,n,r){T(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=ku(t.visibleWrites,e,n),t.lastWriteId=r}function HT(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function GT(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&qT(a,r.path)?i=!1:dt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return KT(t),!0;if(r.snap)t.visibleWrites=zp(t.visibleWrites,r.path);else{const a=r.children;Re(a,l=>{t.visibleWrites=zp(t.visibleWrites,se(r.path,l))})}return!0}else return!1}function qT(t,e){if(t.snap)return dt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&dt(se(t.path,n),e))return!0;return!1}function KT(t){t.visibleWrites=oy(t.allWrites,QT,V()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function QT(t){return t.visible}function oy(t,e,n){let r=kt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)dt(n,o)?(a=Me(n,o),r=Zi(r,a,s.snap)):dt(o,n)&&(a=Me(o,n),r=Zi(r,V(),s.snap.getChild(a)));else if(s.children){if(dt(n,o))a=Me(n,o),r=ku(r,a,s.children);else if(dt(o,n))if(a=Me(o,n),B(a))r=ku(r,V(),s.children);else{const l=ai(s.children,U(a));if(l){const c=l.getChild(Q(a));r=Zi(r,V(),c)}}}else throw vi("WriteRecord should have .snap or .children")}}return r}function ay(t,e,n,r,i){if(!r&&!i){const s=Nr(t.visibleWrites,e);if(s!=null)return s;{const o=Dn(t.visibleWrites,e);if(Ru(o))return n;if(n==null&&!Nu(o,V()))return null;{const a=n||b.EMPTY_NODE;return di(o,a)}}}else{const s=Dn(t.visibleWrites,e);if(!i&&Ru(s))return n;if(!i&&n==null&&!Nu(s,V()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(dt(c.path,e)||dt(e,c.path))},a=oy(t.allWrites,o,e),l=n||b.EMPTY_NODE;return di(a,l)}}}function YT(t,e,n){let r=b.EMPTY_NODE;const i=Nr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(oe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Dn(t.visibleWrites,e);return n.forEachChild(oe,(o,a)=>{const l=di(Dn(s,new q(o)),a);r=r.updateImmediateChild(o,l)}),Bp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Dn(t.visibleWrites,e);return Bp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function JT(t,e,n,r,i){T(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=se(e,n);if(Nu(t.visibleWrites,s))return null;{const o=Dn(t.visibleWrites,s);return Ru(o)?i.getChild(n):di(o,i.getChild(n))}}function XT(t,e,n,r){const i=se(e,n),s=Nr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Dn(t.visibleWrites,i);return di(o,r.getNode().getImmediateChild(n))}else return null}function ZT(t,e){return Nr(t.visibleWrites,e)}function ek(t,e,n,r,i,s,o){let a;const l=Dn(t.visibleWrites,e),c=Nr(l,V());if(c!=null)a=c;else if(n!=null)a=di(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=h.getNext();for(;_&&u.length<i;)d(_,r)!==0&&u.push(_),_=h.getNext();return u}else return[]}function tk(){return{visibleWrites:kt.empty(),allWrites:[],lastWriteId:-1}}function Ca(t,e,n,r){return ay(t.writeTree,t.treePath,e,n,r)}function th(t,e){return YT(t.writeTree,t.treePath,e)}function $p(t,e,n,r){return JT(t.writeTree,t.treePath,e,n,r)}function Sa(t,e){return ZT(t.writeTree,se(t.treePath,e))}function nk(t,e,n,r,i,s){return ek(t.writeTree,t.treePath,e,n,r,i,s)}function nh(t,e,n){return XT(t.writeTree,t.treePath,e,n)}function ly(t,e){return cy(se(t.treePath,e),t.writeTree)}function cy(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,xs(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Rs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ci(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,xs(r,e.snapshotNode,i.oldSnap));else throw vi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const uy=new ik;class rh{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Un(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return nh(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:gr(this.viewCache_),s=nk(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(t){return{filter:t}}function ok(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function ak(t,e,n,r,i){const s=new rk;let o,a;if(n.type===St.OVERWRITE){const c=n;c.source.fromUser?o=xu(t,e,c.path,c.snap,r,i,s):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!B(c.path),o=Ia(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===St.MERGE){const c=n;c.source.fromUser?o=ck(t,e,c.path,c.children,r,i,s):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Pu(t,e,c.path,c.children,r,i,a,s))}else if(n.type===St.ACK_USER_WRITE){const c=n;c.revert?o=hk(t,e,c.path,r,i,s):o=uk(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===St.LISTEN_COMPLETE)o=dk(t,e,n.path,r,s);else throw vi("Unknown operation type: "+n.type);const l=s.getChanges();return lk(e,o,l),{viewCache:o,changes:l}}function lk(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Ea(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(ny(Ea(e)))}}function dy(t,e,n,r,i,s){const o=e.eventCache;if(Sa(r,n)!=null)return e;{let a,l;if(B(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=gr(e),u=c instanceof b?c:b.EMPTY_NODE,d=th(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=Ca(r,gr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=U(n);if(c===".priority"){T(Fn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=$p(r,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=Q(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=$p(r,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=nh(r,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,s):a=o.getNode()}}return Xi(e,a,o.isFullyInitialized()||B(n),t.filter.filtersNodes())}}function Ia(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(B(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),_,null)}else{const _=U(n);if(!l.isCompleteForPath(n)&&Fn(n)>1)return e;const v=Q(n),C=l.getNode().getImmediateChild(_).updateChild(v,r);_===".priority"?c=u.updatePriority(l.getNode(),C):c=u.updateChild(l.getNode(),_,C,v,uy,null)}const d=iy(e,c,l.isFullyInitialized()||B(n),u.filtersNodes()),h=new rh(i,d,s);return dy(t,d,n,i,h,a)}function xu(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const u=new rh(i,e,s);if(B(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Xi(e,c,!0,t.filter.filtersNodes());else{const d=U(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Xi(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=Q(n),_=a.getNode().getImmediateChild(d);let v;if(B(h))v=r;else{const w=u.getCompleteChild(d);w!=null?Gd(h)===".priority"&&w.getChild(Qv(h)).isEmpty()?v=w:v=w.updateChild(h,r):v=b.EMPTY_NODE}if(_.equals(v))l=e;else{const w=t.filter.updateChild(a.getNode(),d,v,h,u,o);l=Xi(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Wp(t,e){return t.eventCache.isCompleteForChild(e)}function ck(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const u=se(n,l);Wp(e,U(u))&&(a=xu(t,a,u,c,i,s,o))}),r.foreach((l,c)=>{const u=se(n,l);Wp(e,U(u))||(a=xu(t,a,u,c,i,s,o))}),a}function Vp(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Pu(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;B(n)?c=r:c=new K(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),v=Vp(t,_,h);l=Ia(t,l,new q(d),v,i,s,o,a)}}),c.children.inorderTraversal((d,h)=>{const _=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!_){const v=e.serverCache.getNode().getImmediateChild(d),w=Vp(t,v,h);l=Ia(t,l,new q(d),w,i,s,o,a)}}),l}function uk(t,e,n,r,i,s,o){if(Sa(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(B(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ia(t,e,n,l.getNode().getChild(n),i,s,a,o);if(B(n)){let c=new K(null);return l.getNode().forEachChild(Yr,(u,d)=>{c=c.set(new q(u),d)}),Pu(t,e,n,c,i,s,a,o)}else return e}else{let c=new K(null);return r.foreach((u,d)=>{const h=se(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),Pu(t,e,n,c,i,s,a,o)}}function dk(t,e,n,r,i){const s=e.serverCache,o=iy(e,s.getNode(),s.isFullyInitialized()||B(n),s.isFiltered());return dy(t,o,n,r,uy,i)}function hk(t,e,n,r,i,s){let o;if(Sa(r,n)!=null)return e;{const a=new rh(r,e,i),l=e.eventCache.getNode();let c;if(B(n)||U(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ca(r,gr(e));else{const d=e.serverCache.getNode();T(d instanceof b,"serverChildren would be complete if leaf node"),u=th(r,d)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=U(n);let d=nh(r,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,Q(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,b.EMPTY_NODE,Q(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ca(r,gr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Sa(r,V())!=null,Xi(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Yd(r.getIndex()),s=bT(r);this.processor_=sk(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(b.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(b.EMPTY_NODE,a.getNode(),null),u=new Un(l,o.isFullyInitialized(),i.filtersNodes()),d=new Un(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=ll(d,u),this.eventGenerator_=new FT(this.query_)}get query(){return this.query_}}function pk(t){return t.viewCache_.serverCache.getNode()}function mk(t){return Ea(t.viewCache_)}function gk(t,e){const n=gr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!B(e)&&!n.getImmediateChild(U(e)).isEmpty())?n.getChild(e):null}function Hp(t){return t.eventRegistrations_.length===0}function _k(t,e){t.eventRegistrations_.push(e)}function Gp(t,e,n){const r=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function qp(t,e,n,r){e.type===St.MERGE&&e.source.queryId!==null&&(T(gr(t.viewCache_),"We should always have a full cache before handling merges"),T(Ea(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=ak(t.processor_,i,e,n,r);return ok(t.processor_,s.viewCache),T(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,hy(t,s.changes,s.viewCache.eventCache.getNode(),null)}function vk(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(oe,(s,o)=>{r.push(ci(s,o))}),n.isFullyInitialized()&&r.push(ny(n.getNode())),hy(t,r,n.getNode(),e)}function hy(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return UT(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ta;class fy{constructor(){this.views=new Map}}function yk(t){T(!Ta,"__referenceConstructor has already been defined"),Ta=t}function wk(){return T(Ta,"Reference.ts has not been loaded"),Ta}function Ek(t){return t.views.size===0}function ih(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return T(s!=null,"SyncTree gave us an op for an invalid query."),qp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(qp(o,e,n,r));return s}}function py(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Ca(n,i?r:null),l=!1;a?l=!0:r instanceof b?(a=th(n,r),l=!1):(a=b.EMPTY_NODE,l=!1);const c=ll(new Un(a,l,!1),new Un(r,i,!1));return new fk(e,c)}return o}function Ck(t,e,n,r,i,s){const o=py(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),_k(o,n),vk(o,n)}function Sk(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=zn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Gp(c,n,r)),Hp(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Gp(l,n,r)),Hp(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!zn(t)&&s.push(new(wk())(e._repo,e._path)),{removed:s,events:o}}function my(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ln(t,e){let n=null;for(const r of t.views.values())n=n||gk(r,e);return n}function gy(t,e){if(e._queryParams.loadsAllData())return ul(t);{const r=e._queryIdentifier;return t.views.get(r)}}function _y(t,e){return gy(t,e)!=null}function zn(t){return ul(t)!=null}function ul(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ka;function Ik(t){T(!ka,"__referenceConstructor has already been defined"),ka=t}function Tk(){return T(ka,"Reference.ts has not been loaded"),ka}let kk=1;class Kp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new K(null),this.pendingWriteTree_=tk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function vy(t,e,n,r,i){return WT(t.pendingWriteTree_,e,n,r,i),i?Ei(t,new mr(Xd(),e,n)):[]}function Nk(t,e,n,r){VT(t.pendingWriteTree_,e,n,r);const i=K.fromObject(n);return Ei(t,new ui(Xd(),e,i))}function Cn(t,e,n=!1){const r=HT(t.pendingWriteTree_,e);if(GT(t.pendingWriteTree_,e)){let s=new K(null);return r.snap!=null?s=s.set(V(),!0):Re(r.children,o=>{s=s.set(new q(o),!0)}),Ei(t,new wa(r.path,s,n))}else return[]}function Hs(t,e,n){return Ei(t,new mr(Zd(),e,n))}function Rk(t,e,n){const r=K.fromObject(n);return Ei(t,new ui(Zd(),e,r))}function xk(t,e){return Ei(t,new bs(Zd(),e))}function Pk(t,e,n){const r=oh(t,n);if(r){const i=ah(r),s=i.path,o=i.queryId,a=Me(s,e),l=new bs(eh(o),a);return lh(t,s,l)}else return[]}function Na(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||_y(o,e))){const l=Sk(o,e,n,r);Ek(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,_)=>zn(_));if(u&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const _=Ok(h);for(let v=0;v<_.length;++v){const w=_[v],C=w.query,m=Cy(t,w);t.listenProvider_.startListening(es(C),As(t,C),m.hashFn,m.onComplete)}}}!d&&c.length>0&&!r&&(u?t.listenProvider_.stopListening(es(e),null):c.forEach(h=>{const _=t.queryToTagMap.get(dl(h));t.listenProvider_.stopListening(es(h),_)}))}Dk(t,c)}return a}function yy(t,e,n,r){const i=oh(t,r);if(i!=null){const s=ah(i),o=s.path,a=s.queryId,l=Me(o,e),c=new mr(eh(a),l,n);return lh(t,o,c)}else return[]}function bk(t,e,n,r){const i=oh(t,r);if(i){const s=ah(i),o=s.path,a=s.queryId,l=Me(o,e),c=K.fromObject(n),u=new ui(eh(a),l,c);return lh(t,o,u)}else return[]}function bu(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,_)=>{const v=Me(h,i);s=s||Ln(_,v),o=o||zn(_)});let a=t.syncPointTree_.get(i);a?(o=o||zn(a),s=s||Ln(a,V())):(a=new fy,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=b.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,v)=>{const w=Ln(v,V());w&&(s=s.updateImmediateChild(_,w))}));const c=_y(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=dl(e);T(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const _=Lk();t.queryToTagMap.set(h,_),t.tagToQueryMap.set(_,h)}const u=cl(t.pendingWriteTree_,i);let d=Ck(a,e,n,u,s,l);if(!c&&!o&&!r){const h=gy(a,e);d=d.concat(Mk(t,e,h))}return d}function sh(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Me(o,e),c=Ln(a,l);if(c)return c});return ay(i,e,s,n,!0)}function Ak(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=Me(c,n);r=r||Ln(u,d)});let i=t.syncPointTree_.get(n);i?r=r||Ln(i,V()):(i=new fy,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Un(r,!0,!1):null,a=cl(t.pendingWriteTree_,e._path),l=py(i,e,a,s?o.getNode():b.EMPTY_NODE,s);return mk(l)}function Ei(t,e){return wy(e,t.syncPointTree_,null,cl(t.pendingWriteTree_,V()))}function wy(t,e,n,r){if(B(t.path))return Ey(t,e,n,r);{const i=e.get(V());n==null&&i!=null&&(n=Ln(i,V()));let s=[];const o=U(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=ly(r,o);s=s.concat(wy(a,l,c,u))}return i&&(s=s.concat(ih(i,t,r,n))),s}}function Ey(t,e,n,r){const i=e.get(V());n==null&&i!=null&&(n=Ln(i,V()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=ly(r,o),u=t.operationForChild(o);u&&(s=s.concat(Ey(u,a,l,c)))}),i&&(s=s.concat(ih(i,t,r,n))),s}function Cy(t,e){const n=e.query,r=As(t,n);return{hashFn:()=>(pk(e)||b.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?Pk(t,n._path,r):xk(t,n._path);{const s=xI(i,n);return Na(t,n,null,s)}}}}function As(t,e){const n=dl(e);return t.queryToTagMap.get(n)}function dl(t){return t._path.toString()+"$"+t._queryIdentifier}function oh(t,e){return t.tagToQueryMap.get(e)}function ah(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new q(t.substr(0,e))}}function lh(t,e,n){const r=t.syncPointTree_.get(e);T(r,"Missing sync point for query tag that we're tracking");const i=cl(t.pendingWriteTree_,e);return ih(r,n,i,null)}function Ok(t){return t.fold((e,n,r)=>{if(n&&zn(n))return[ul(n)];{let i=[];return n&&(i=my(n)),Re(r,(s,o)=>{i=i.concat(o)}),i}})}function es(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Tk())(t._repo,t._path):t}function Dk(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=dl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function Lk(){return kk++}function Mk(t,e,n){const r=e._path,i=As(t,e),s=Cy(t,n),o=t.listenProvider_.startListening(es(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)T(!zn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!B(c)&&u&&zn(u))return[ul(u).query];{let h=[];return u&&(h=h.concat(my(u).map(_=>_.query))),Re(d,(_,v)=>{h=h.concat(v)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(es(u),As(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ch(n)}node(){return this.node_}}class uh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=se(this.path_,e);return new uh(this.syncTree_,n)}node(){return sh(this.syncTree_,this.path_)}}const jk=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Qp=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Fk(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Uk(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Fk=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},Uk=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&T(!1,"Unexpected increment value: "+r);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Sy=function(t,e,n,r){return dh(e,new uh(n,t),r)},Iy=function(t,e,n){return dh(t,new ch(e),n)};function dh(t,e,n){const r=t.getPriority().val(),i=Qp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Qp(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ye(a,fe(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ye(i))),o.forEachChild(oe,(a,l)=>{const c=dh(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function fh(t,e){let n=e instanceof q?e:new q(e),r=t,i=U(n);for(;i!==null;){const s=ai(r.node.children,i)||{children:{},childCount:0};r=new hh(i,r,s),n=Q(n),i=U(n)}return r}function Ci(t){return t.node.value}function Ty(t,e){t.node.value=e,Au(t)}function ky(t){return t.node.childCount>0}function zk(t){return Ci(t)===void 0&&!ky(t)}function hl(t,e){Re(t.node.children,(n,r)=>{e(new hh(n,t,r))})}function Ny(t,e,n,r){n&&!r&&e(t),hl(t,i=>{Ny(i,e,!0,r)}),n&&r&&e(t)}function Bk(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Gs(t){return new q(t.parent===null?t.name:Gs(t.parent)+"/"+t.name)}function Au(t){t.parent!==null&&$k(t.parent,t.name,t)}function $k(t,e,n){const r=zk(n),i=zt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Au(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Au(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk=/[\[\].#$\/\u0000-\u001F\u007F]/,Vk=/[\[\].#$\u0000-\u001F\u007F]/,hc=10*1024*1024,ph=function(t){return typeof t=="string"&&t.length!==0&&!Wk.test(t)},Ry=function(t){return typeof t=="string"&&t.length!==0&&!Vk.test(t)},Hk=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ry(t)},Gk=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Bd(t)||t&&typeof t=="object"&&zt(t,".sv")},xy=function(t,e,n,r){r&&e===void 0||fl(rl(t,"value"),e,n)},fl=function(t,e,n){const r=n instanceof q?new cT(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Jn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Jn(r)+" with contents = "+e.toString());if(Bd(e))throw new Error(t+"contains "+e.toString()+" "+Jn(r));if(typeof e=="string"&&e.length>hc/3&&il(e)>hc)throw new Error(t+"contains a string greater than "+hc+" utf8 bytes "+Jn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Re(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!ph(o)))throw new Error(t+" contains an invalid key ("+o+") "+Jn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);uT(r,o),fl(t,a,r),dT(r)}),i&&s)throw new Error(t+' contains ".value" child '+Jn(r)+" in addition to actual children.")}},qk=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Ns(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!ph(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(lT);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&dt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},Kk=function(t,e,n,r){const i=rl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Re(e,(o,a)=>{const l=new q(o);if(fl(i,a,se(n,l)),Gd(l)===".priority"&&!Gk(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),qk(i,s)},Py=function(t,e,n,r){if(!Ry(n))throw new Error(rl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Qk=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Py(t,e,n)},mh=function(t,e){if(U(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Yk=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ph(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Hk(n))throw new Error(rl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function pl(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!qd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function by(t,e,n){pl(t,n),Ay(t,r=>qd(r,e))}function gt(t,e,n){pl(t,n),Ay(t,r=>dt(r,e)||dt(e,r))}function Ay(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(Xk(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Xk(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Yi&&Te("event: "+n.toString()),wi(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk="repo_interrupt",eN=25;class tN{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Jk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ya(),this.transactionQueueTree_=new hh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function nN(t,e,n){if(t.stats_=Vd(t.repoInfo_),t.forceRestClient_||OI())t.server_=new va(t.repoInfo_,(r,i,s,o)=>{Yp(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Jp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{pe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Xt(t.repoInfo_,e,(r,i,s,o)=>{Yp(t,r,i,s,o)},r=>{Jp(t,r)},r=>{rN(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=FI(t.repoInfo_,()=>new jT(t.stats_,t.server_)),t.infoData_=new AT,t.infoSyncTree_=new Kp({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Hs(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),gh(t,"connected",!1),t.serverSyncTree_=new Kp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);gt(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Oy(t){const n=t.infoData_.getNode(new q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ml(t){return jk({timestamp:Oy(t)})}function Yp(t,e,n,r,i){t.dataUpdateCount++;const s=new q(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=fa(n,c=>fe(c));o=bk(t.serverSyncTree_,s,l,i)}else{const l=fe(n);o=yy(t.serverSyncTree_,s,l,i)}else if(r){const l=fa(n,c=>fe(c));o=Rk(t.serverSyncTree_,s,l)}else{const l=fe(n);o=Hs(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=hi(t,s)),gt(t.eventQueue_,a,o)}function Jp(t,e){gh(t,"connected",e),e===!1&&aN(t)}function rN(t,e){Re(e,(n,r)=>{gh(t,n,r)})}function gh(t,e,n){const r=new q("/.info/"+e),i=fe(n);t.infoData_.updateSnapshot(r,i);const s=Hs(t.infoSyncTree_,r,i);gt(t.eventQueue_,r,s)}function _h(t){return t.nextWriteId_++}function iN(t,e,n){const r=Ak(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=fe(i).withIndex(e._queryParams.getIndex());bu(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Hs(t.serverSyncTree_,e._path,s);else{const a=As(t.serverSyncTree_,e);o=yy(t.serverSyncTree_,e._path,s,a)}return gt(t.eventQueue_,e._path,o),Na(t.serverSyncTree_,e,n,null,!0),s},i=>(qs(t,"get for query "+pe(e)+" failed: "+i),Promise.reject(new Error(i))))}function sN(t,e,n,r,i){qs(t,"set",{path:e.toString(),value:n,priority:r});const s=ml(t),o=fe(n,r),a=sh(t.serverSyncTree_,e),l=Iy(o,a,s),c=_h(t),u=vy(t.serverSyncTree_,e,l,c,!0);pl(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,_)=>{const v=h==="ok";v||Fe("set at "+e+" failed: "+h);const w=Cn(t.serverSyncTree_,c,!v);gt(t.eventQueue_,e,w),Ou(t,i,h,_)});const d=yh(t,e);hi(t,d),gt(t.eventQueue_,d,[])}function oN(t,e,n,r){qs(t,"update",{path:e.toString(),value:n});let i=!0;const s=ml(t),o={};if(Re(n,(a,l)=>{i=!1,o[a]=Sy(se(e,a),fe(l),t.serverSyncTree_,s)}),i)Te("update() called with empty data.  Don't do anything."),Ou(t,r,"ok",void 0);else{const a=_h(t),l=Nk(t.serverSyncTree_,e,o,a);pl(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||Fe("update at "+e+" failed: "+c);const h=Cn(t.serverSyncTree_,a,!d),_=h.length>0?hi(t,e):e;gt(t.eventQueue_,_,h),Ou(t,r,c,u)}),Re(n,c=>{const u=yh(t,se(e,c));hi(t,u)}),gt(t.eventQueue_,e,[])}}function aN(t){qs(t,"onDisconnectEvents");const e=ml(t),n=ya();Tu(t.onDisconnect_,V(),(i,s)=>{const o=Sy(i,s,t.serverSyncTree_,e);ry(n,i,o)});let r=[];Tu(n,V(),(i,s)=>{r=r.concat(Hs(t.serverSyncTree_,i,s));const o=yh(t,i);hi(t,o)}),t.onDisconnect_=ya(),gt(t.eventQueue_,V(),r)}function lN(t,e,n){let r;U(e._path)===".info"?r=bu(t.infoSyncTree_,e,n):r=bu(t.serverSyncTree_,e,n),by(t.eventQueue_,e._path,r)}function cN(t,e,n){let r;U(e._path)===".info"?r=Na(t.infoSyncTree_,e,n):r=Na(t.serverSyncTree_,e,n),by(t.eventQueue_,e._path,r)}function uN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Zk)}function qs(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Te(n,...e)}function Ou(t,e,n,r){e&&wi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Dy(t,e,n){return sh(t.serverSyncTree_,e,n)||b.EMPTY_NODE}function vh(t,e=t.transactionQueueTree_){if(e||gl(t,e),Ci(e)){const n=My(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&dN(t,Gs(e),n)}else ky(e)&&hl(e,n=>{vh(t,n)})}function dN(t,e,n){const r=n.map(c=>c.currentWriteId),i=Dy(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];T(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=Me(e,u.path);s=s.updateChild(d,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{qs(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(Cn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();gl(t,fh(t.transactionQueueTree_,e)),vh(t,t.transactionQueueTree_),gt(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)wi(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Fe("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}hi(t,e)}},o)}function hi(t,e){const n=Ly(t,e),r=Gs(n),i=My(t,n);return hN(t,i,r),r}function hN(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Me(n,l.path);let u=!1,d;if(T(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(Cn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=eN)u=!0,d="maxretry",i=i.concat(Cn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Dy(t,l.path,o);l.currentInputSnapshot=h;const _=e[a].update(h.val());if(_!==void 0){fl("transaction failed: Data returned ",_,l.path);let v=fe(_);typeof _=="object"&&_!=null&&zt(_,".priority")||(v=v.updatePriority(h.getPriority()));const C=l.currentWriteId,m=ml(t),p=Iy(v,h,m);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=p,l.currentWriteId=_h(t),o.splice(o.indexOf(C),1),i=i.concat(vy(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(Cn(t.serverSyncTree_,C,!0))}else u=!0,d="nodata",i=i.concat(Cn(t.serverSyncTree_,l.currentWriteId,!0))}gt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}gl(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)wi(r[a]);vh(t,t.transactionQueueTree_)}function Ly(t,e){let n,r=t.transactionQueueTree_;for(n=U(e);n!==null&&Ci(r)===void 0;)r=fh(r,n),e=Q(e),n=U(e);return r}function My(t,e){const n=[];return jy(t,e,n),n.sort((r,i)=>r.order-i.order),n}function jy(t,e,n){const r=Ci(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);hl(e,i=>{jy(t,i,n)})}function gl(t,e){const n=Ci(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Ty(e,n.length>0?n:void 0)}hl(e,r=>{gl(t,r)})}function yh(t,e){const n=Gs(Ly(t,e)),r=fh(t.transactionQueueTree_,e);return Bk(r,i=>{fc(t,i)}),fc(t,r),Ny(r,i=>{fc(t,i)}),n}function fc(t,e){const n=Ci(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Cn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Ty(e,void 0):n.length=s+1,gt(t.eventQueue_,Gs(e),i);for(let o=0;o<r.length;o++)wi(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fN(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function pN(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Fe(`Invalid query segment '${n}' in query '${t}'`)}return e}const Xp=function(t,e){const n=mN(t),r=n.namespace;n.domain==="firebase.com"&&sn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&sn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||II();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new zv(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new q(n.pathString)}},mN=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=fN(t.substring(u,d)));const h=pN(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",gN=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Zp.charAt(n%64),n=Math.floor(n/64);T(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Zp.charAt(e[i]);return T(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+pe(this.snapshot.exportVal())}}class vN{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class wh{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return B(this._path)?null:Gd(this._path)}get ref(){return new ln(this._repo,this._path)}get _queryIdentifier(){const e=Fp(this._queryParams),n=$d(e);return n==="{}"?"default":n}get _queryObject(){return Fp(this._queryParams)}isEqual(e){if(e=_e(e),!(e instanceof wh))return!1;const n=this._repo===e._repo,r=qd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+aT(this._path)}}class ln extends wh{constructor(e,n){super(e,n,new Jd,!1)}get parent(){const e=Qv(this._path);return e===null?null:new ln(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Os{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new q(e),r=Ds(this.ref,e);return new Os(this._node.getChild(n),r,oe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Os(i,Ds(this.ref,r),oe)))}hasChild(e){const n=new q(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function He(t,e){return t=_e(t),t._checkNotDeleted("ref"),e!==void 0?Ds(t._root,e):t._root}function Ds(t,e){return t=_e(t),U(t._path)===null?Qk("child","path",e):Py("child","path",e),new ln(t._repo,se(t._path,e))}function Eh(t,e){t=_e(t),mh("push",t._path),xy("push",e,t._path,!0);const n=Oy(t._repo),r=gN(n),i=Ds(t,r),s=Ds(t,r);let o;return e!=null?o=Ra(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Uy(t){return mh("remove",t._path),Ra(t,null)}function Ra(t,e){t=_e(t),mh("set",t._path),xy("set",e,t._path,!1);const n=new Bs;return sN(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function yN(t,e){Kk("update",e,t._path);const n=new Bs;return oN(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Ch(t){t=_e(t);const e=new Fy(()=>{}),n=new _l(e);return iN(t._repo,t,n).then(r=>new Os(r,new ln(t._repo,t._path),t._queryParams.getIndex()))}class _l{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new _N("value",this,new Os(e.snapshotNode,new ln(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new vN(this,e,n):null}matches(e){return e instanceof _l?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function wN(t,e,n,r,i){const s=new Fy(n,void 0),o=new _l(s);return lN(t._repo,t,o),()=>cN(t._repo,t,o)}function EN(t,e,n,r){return wN(t,"value",e)}yk(ln);Ik(ln);/**
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
 */const CN="FIREBASE_DATABASE_EMULATOR_HOST",Du={};let SN=!1;function IN(t,e,n,r){t.repoInfo_=new zv(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function TN(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||sn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Te("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Xp(s,i),a=o.repoInfo,l;typeof process<"u"&&wp&&(l=wp[CN]),l?(s=`http://${l}?ns=${a.namespace}`,o=Xp(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new LI(t.name,t.options,e);Yk("Invalid Firebase Database URL",o),B(o.path)||sn("Database URL must point to the root of a Firebase Database (not including a child path).");const u=NN(a,t,c,new DI(t.name,n));return new RN(u,t)}function kN(t,e){const n=Du[e];(!n||n[t.key]!==t)&&sn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),uN(t),delete n[t.key]}function NN(t,e,n,r){let i=Du[e.name];i||(i={},Du[e.name]=i);let s=i[t.toURLString()];return s&&sn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new tN(t,SN,n,r),i[t.toURLString()]=s,s}class RN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(nN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ln(this._repo,V())),this._rootInternal}_delete(){return this._rootInternal!==null&&(kN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&sn("Cannot call "+e+" on a deleted database.")}}function xN(t=ol(),e){const n=Vn(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=cv("database");r&&PN(n,...r)}return n}function PN(t,e,n,r={}){t=_e(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&sn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&sn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Lo(Lo.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:hv(r.mockUserToken,t.app.options.projectId);s=new Lo(o)}IN(i,e,n,s)}function bN(t,e){Rv(t,e)}/**
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
 */function AN(t){yI(Tr),xt(new mt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return TN(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Xe(Ep,Cp,t),Xe(Ep,Cp,"esm2017")}Xt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Xt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};AN();var ON="firebase",DN="10.13.1";/**
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
 */Xe(ON,DN,"app");const zy="@firebase/installations",Sh="0.6.8";/**
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
 */const By=1e4,$y=`w:${Sh}`,Wy="FIS_v2",LN="https://firebaseinstallations.googleapis.com/v1",MN=60*60*1e3,jN="installations",FN="Installations";/**
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
 */const UN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},_r=new Ir(jN,FN,UN);function Vy(t){return t instanceof Pt&&t.code.includes("request-failed")}/**
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
 */function Hy({projectId:t}){return`${LN}/projects/${t}/installations`}function Gy(t){return{token:t.token,requestStatus:2,expiresIn:BN(t.expiresIn),creationTime:Date.now()}}async function qy(t,e){const r=(await e.json()).error;return _r.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Ky({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function zN(t,{refreshToken:e}){const n=Ky(t);return n.append("Authorization",$N(e)),n}async function Qy(t){const e=await t();return e.status>=500&&e.status<600?t():e}function BN(t){return Number(t.replace("s","000"))}function $N(t){return`${Wy} ${t}`}/**
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
 */async function WN({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Hy(t),i=Ky(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:Wy,appId:t.appId,sdkVersion:$y},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Qy(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Gy(c.authToken)}}else throw await qy("Create Installation",l)}/**
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
 */function Yy(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function VN(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const HN=/^[cdef][\w-]{21}$/,Lu="";function GN(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=qN(t);return HN.test(n)?n:Lu}catch{return Lu}}function qN(t){return VN(t).substr(0,22)}/**
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
 */function vl(t){return`${t.appName}!${t.appId}`}/**
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
 */const Jy=new Map;function Xy(t,e){const n=vl(t);Zy(n,e),KN(n,e)}function Zy(t,e){const n=Jy.get(t);if(n)for(const r of n)r(e)}function KN(t,e){const n=QN();n&&n.postMessage({key:t,fid:e}),YN()}let nr=null;function QN(){return!nr&&"BroadcastChannel"in self&&(nr=new BroadcastChannel("[Firebase] FID Change"),nr.onmessage=t=>{Zy(t.data.key,t.data.fid)}),nr}function YN(){Jy.size===0&&nr&&(nr.close(),nr=null)}/**
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
 */const JN="firebase-installations-database",XN=1,vr="firebase-installations-store";let pc=null;function Ih(){return pc||(pc=Ev(JN,XN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(vr)}}})),pc}async function xa(t,e){const n=vl(t),i=(await Ih()).transaction(vr,"readwrite"),s=i.objectStore(vr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Xy(t,e.fid),e}async function e0(t){const e=vl(t),r=(await Ih()).transaction(vr,"readwrite");await r.objectStore(vr).delete(e),await r.done}async function yl(t,e){const n=vl(t),i=(await Ih()).transaction(vr,"readwrite"),s=i.objectStore(vr),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Xy(t,a.fid),a}/**
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
 */async function Th(t){let e;const n=await yl(t.appConfig,r=>{const i=ZN(r),s=eR(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Lu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function ZN(t){const e=t||{fid:GN(),registrationStatus:0};return t0(e)}function eR(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(_r.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=tR(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:nR(t)}:{installationEntry:e}}async function tR(t,e){try{const n=await WN(t,e);return xa(t.appConfig,n)}catch(n){throw Vy(n)&&n.customData.serverCode===409?await e0(t.appConfig):await xa(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function nR(t){let e=await em(t.appConfig);for(;e.registrationStatus===1;)await Yy(100),e=await em(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Th(t);return r||n}return e}function em(t){return yl(t,e=>{if(!e)throw _r.create("installation-not-found");return t0(e)})}function t0(t){return rR(t)?{fid:t.fid,registrationStatus:0}:t}function rR(t){return t.registrationStatus===1&&t.registrationTime+By<Date.now()}/**
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
 */async function iR({appConfig:t,heartbeatServiceProvider:e},n){const r=sR(t,n),i=zN(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:$y,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Qy(()=>fetch(r,a));if(l.ok){const c=await l.json();return Gy(c)}else throw await qy("Generate Auth Token",l)}function sR(t,{fid:e}){return`${Hy(t)}/${e}/authTokens:generate`}/**
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
 */async function kh(t,e=!1){let n;const r=await yl(t.appConfig,s=>{if(!n0(s))throw _r.create("not-registered");const o=s.authToken;if(!e&&lR(o))return s;if(o.requestStatus===1)return n=oR(t,e),s;{if(!navigator.onLine)throw _r.create("app-offline");const a=uR(s);return n=aR(t,a),a}});return n?await n:r.authToken}async function oR(t,e){let n=await tm(t.appConfig);for(;n.authToken.requestStatus===1;)await Yy(100),n=await tm(t.appConfig);const r=n.authToken;return r.requestStatus===0?kh(t,e):r}function tm(t){return yl(t,e=>{if(!n0(e))throw _r.create("not-registered");const n=e.authToken;return dR(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function aR(t,e){try{const n=await iR(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await xa(t.appConfig,r),n}catch(n){if(Vy(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await e0(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await xa(t.appConfig,r)}throw n}}function n0(t){return t!==void 0&&t.registrationStatus===2}function lR(t){return t.requestStatus===2&&!cR(t)}function cR(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+MN}function uR(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function dR(t){return t.requestStatus===1&&t.requestTime+By<Date.now()}/**
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
 */async function hR(t){const e=t,{installationEntry:n,registrationPromise:r}=await Th(e);return r?r.catch(console.error):kh(e).catch(console.error),n.fid}/**
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
 */async function fR(t,e=!1){const n=t;return await pR(n),(await kh(n,e)).token}async function pR(t){const{registrationPromise:e}=await Th(t);e&&await e}/**
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
 */function mR(t){if(!t||!t.options)throw mc("App Configuration");if(!t.name)throw mc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw mc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function mc(t){return _r.create("missing-app-config-values",{valueName:t})}/**
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
 */const r0="installations",gR="installations-internal",_R=t=>{const e=t.getProvider("app").getImmediate(),n=mR(e),r=Vn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},vR=t=>{const e=t.getProvider("app").getImmediate(),n=Vn(e,r0).getImmediate();return{getId:()=>hR(n),getToken:i=>fR(n,i)}};function yR(){xt(new mt(r0,_R,"PUBLIC")),xt(new mt(gR,vR,"PRIVATE"))}yR();Xe(zy,Sh);Xe(zy,Sh,"esm2017");/**
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
 */const Pa="analytics",wR="firebase_id",ER="origin",CR=60*1e3,SR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Nh="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ze=new sl("@firebase/analytics");/**
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
 */const IR={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},it=new Ir("analytics","Analytics",IR);/**
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
 */function TR(t){if(!t.startsWith(Nh)){const e=it.create("invalid-gtag-resource",{gtagURL:t});return Ze.warn(e.message),""}return t}function i0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function kR(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function NR(t,e){const n=kR("firebase-js-sdk-policy",{createScriptURL:TR}),r=document.createElement("script"),i=`${Nh}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function RR(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function xR(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await i0(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){Ze.error(a)}t("config",i,s)}async function PR(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await i0(n);for(const l of o){const c=a.find(d=>d.measurementId===l),u=c&&e[c.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Ze.error(s)}}function bR(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await PR(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await xR(t,e,n,r,a,l)}else if(s==="consent"){const[a,l]=o;t("consent",a,l)}else if(s==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Ze.error(a)}}return i}function AR(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=bR(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function OR(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Nh)&&n.src.includes(t))return n;return null}/**
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
 */const DR=30,LR=1e3;class MR{constructor(e={},n=LR){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const s0=new MR;function jR(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function FR(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:jR(r)},s=SR.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw it.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function UR(t,e=s0,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw it.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw it.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new $R;return setTimeout(async()=>{a.abort()},CR),o0({appId:r,apiKey:i,measurementId:s},o,a,e)}async function o0(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=s0){var s;const{appId:o,measurementId:a}=t;try{await zR(r,e)}catch(l){if(a)return Ze.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await FR(t);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!BR(c)){if(i.deleteThrottleMetadata(o),a)return Ze.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?dp(n,i.intervalMillis,DR):dp(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,d),Ze.debug(`Calling attemptFetch again in ${u} millis`),o0(t,d,r,i)}}function zR(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(it.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function BR(t){if(!(t instanceof Pt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class $R{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function WR(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function VR(){if(gv())try{await _v()}catch(t){return Ze.warn(it.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ze.warn(it.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function HR(t,e,n,r,i,s,o){var a;const l=UR(t);l.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&Ze.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>Ze.error(_)),e.push(l);const c=VR().then(_=>{if(_)return r.getId()}),[u,d]=await Promise.all([l,c]);OR(s)||NR(s,u.measurementId),i("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[ER]="firebase",h.update=!0,d!=null&&(h[wR]=d),i("config",u.measurementId,h),u.measurementId}/**
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
 */class GR{constructor(e){this.app=e}_delete(){return delete ts[this.app.options.appId],Promise.resolve()}}let ts={},nm=[];const rm={};let gc="dataLayer",qR="gtag",im,a0,sm=!1;function KR(){const t=[];if(fv()&&t.push("This is a browser extension environment."),ZS()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=it.create("invalid-analytics-context",{errorInfo:e});Ze.warn(n.message)}}function QR(t,e,n){KR();const r=t.options.appId;if(!r)throw it.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ze.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw it.create("no-api-key");if(ts[r]!=null)throw it.create("already-exists",{id:r});if(!sm){RR(gc);const{wrappedGtag:s,gtagCore:o}=AR(ts,nm,rm,gc,qR);a0=s,im=o,sm=!0}return ts[r]=HR(t,nm,rm,e,im,gc,n),new GR(t)}function YR(t=ol()){t=_e(t);const e=Vn(t,Pa);return e.isInitialized()?e.getImmediate():JR(t)}function JR(t,e={}){const n=Vn(t,Pa);if(n.isInitialized()){const i=n.getImmediate();if(Is(e,n.getOptions()))return i;throw it.create("already-initialized")}return n.initialize({options:e})}function XR(t,e,n,r){t=_e(t),WR(a0,ts[t.app.options.appId],e,n,r).catch(i=>Ze.error(i))}const om="@firebase/analytics",am="0.10.7";function ZR(){xt(new mt(Pa,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return QR(r,i,n)},"PUBLIC")),xt(new mt("analytics-internal",t,"PRIVATE")),Xe(om,am),Xe(om,am,"esm2017");function t(e){try{const n=e.getProvider(Pa).getImmediate();return{logEvent:(r,i,s)=>XR(n,r,i,s)}}catch(n){throw it.create("interop-component-reg-failed",{reason:n})}}}ZR();function Rh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function l0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ex=l0,c0=new Ir("auth","Firebase",l0());/**
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
 */const ba=new sl("@firebase/auth");function tx(t,...e){ba.logLevel<=G.WARN&&ba.warn(`Auth (${Tr}): ${t}`,...e)}function Mo(t,...e){ba.logLevel<=G.ERROR&&ba.error(`Auth (${Tr}): ${t}`,...e)}/**
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
 */function Ut(t,...e){throw Ph(t,...e)}function Nt(t,...e){return Ph(t,...e)}function xh(t,e,n){const r=Object.assign(Object.assign({},ex()),{[e]:n});return new Ir("auth","Firebase",r).create(e,{appName:t.name})}function ar(t){return xh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function nx(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ut(t,"argument-error"),xh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ph(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return c0.create(t,...e)}function O(t,e,...n){if(!t)throw Ph(e,...n)}function Kt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Mo(e),new Error(e)}function on(t,e){t||Kt(e)}/**
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
 */function Mu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function rx(){return lm()==="http:"||lm()==="https:"}function lm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ix(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rx()||fv()||"connection"in navigator)?navigator.onLine:!0}function sx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ks{constructor(e,n){this.shortDelay=e,this.longDelay=n,on(n>e,"Short delay should be less than long delay!"),this.isMobile=Ud()||pv()}get(){return ix()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bh(t,e){on(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class u0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ox={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ax=new Ks(3e4,6e4);function Ah(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Si(t,e,n,r,i={}){return d0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=yi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),u0.fetch()(h0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function d0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ox),e);try{const i=new cx(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw yo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw yo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw yo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw yo(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw xh(t,u,c);Ut(t,u)}}catch(i){if(i instanceof Pt)throw i;Ut(t,"network-request-failed",{message:String(i)})}}async function lx(t,e,n,r,i={}){const s=await Si(t,e,n,r,i);return"mfaPendingCredential"in s&&Ut(t,"multi-factor-auth-required",{_serverResponse:s}),s}function h0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?bh(t.config,i):`${t.config.apiScheme}://${i}`}class cx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Nt(this.auth,"network-request-failed")),ax.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function yo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Nt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function ux(t,e){return Si(t,"POST","/v1/accounts:delete",e)}async function f0(t,e){return Si(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ns(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dx(t,e=!1){const n=_e(t),r=await n.getIdToken(e),i=Oh(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ns(_c(i.auth_time)),issuedAtTime:ns(_c(i.iat)),expirationTime:ns(_c(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function _c(t){return Number(t)*1e3}function Oh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Mo("JWT malformed, contained fewer than 3 sections"),null;try{const i=ha(n);return i?JSON.parse(i):(Mo("Failed to decode base64 JWT payload"),null)}catch(i){return Mo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function cm(t){const e=Oh(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ls(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Pt&&hx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function hx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class fx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ju{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ns(this.lastLoginAt),this.creationTime=ns(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Aa(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ls(t,f0(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?p0(s.providerUserInfo):[],a=mx(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ju(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function px(t){const e=_e(t);await Aa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function p0(t){return t.map(e=>{var{providerId:n}=e,r=Rh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function gx(t,e){const n=await d0(t,{},async()=>{const r=yi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=h0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",u0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function _x(t,e){return Si(t,"POST","/v2/accounts:revokeToken",Ah(t,e))}/**
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
 */class Jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){O(e.length!==0,"internal-error");const n=cm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await gx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Jr;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jr,this.toJSON())}_performRefresh(){return Kt("not implemented")}}/**
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
 */function un(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Qt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Rh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ju(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ls(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return dx(this,e)}reload(){return px(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Qt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Aa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Gt(this.auth.app))return Promise.reject(ar(this.auth));const e=await this.getIdToken();return await Ls(this,ux(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(c=n.createdAt)!==null&&c!==void 0?c:void 0,p=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:g,emailVerified:y,isAnonymous:S,providerData:k,stsTokenManager:N}=n;O(g&&N,e,"internal-error");const R=Jr.fromJSON(this.name,N);O(typeof g=="string",e,"internal-error"),un(d,e.name),un(h,e.name),O(typeof y=="boolean",e,"internal-error"),O(typeof S=="boolean",e,"internal-error"),un(_,e.name),un(v,e.name),un(w,e.name),un(C,e.name),un(m,e.name),un(p,e.name);const j=new Qt({uid:g,auth:e,email:h,emailVerified:y,displayName:d,isAnonymous:S,photoURL:v,phoneNumber:_,tenantId:w,stsTokenManager:R,createdAt:m,lastLoginAt:p});return k&&Array.isArray(k)&&(j.providerData=k.map(A=>Object.assign({},A))),C&&(j._redirectEventId=C),j}static async _fromIdTokenResponse(e,n,r=!1){const i=new Jr;i.updateFromServerResponse(n);const s=new Qt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Aa(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];O(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?p0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Jr;a.updateFromIdToken(r);const l=new Qt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ju(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const um=new Map;function Yt(t){on(t instanceof Function,"Expected a class definition");let e=um.get(t);return e?(on(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,um.set(t,e),e)}/**
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
 */class m0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}m0.type="NONE";const dm=m0;/**
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
 */function jo(t,e,n){return`firebase:${t}:${e}:${n}`}class Xr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=jo(this.userKey,i.apiKey,s),this.fullPersistenceKey=jo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Xr(Yt(dm),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Yt(dm);const o=jo(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Qt._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Xr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Xr(s,e,r))}}/**
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
 */function hm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(y0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(g0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(E0(e))return"Blackberry";if(C0(e))return"Webos";if(_0(e))return"Safari";if((e.includes("chrome/")||v0(e))&&!e.includes("edge/"))return"Chrome";if(w0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function g0(t=Ue()){return/firefox\//i.test(t)}function _0(t=Ue()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function v0(t=Ue()){return/crios\//i.test(t)}function y0(t=Ue()){return/iemobile/i.test(t)}function w0(t=Ue()){return/android/i.test(t)}function E0(t=Ue()){return/blackberry/i.test(t)}function C0(t=Ue()){return/webos/i.test(t)}function Dh(t=Ue()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vx(t=Ue()){var e;return Dh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yx(){return XS()&&document.documentMode===10}function S0(t=Ue()){return Dh(t)||w0(t)||C0(t)||E0(t)||/windows phone/i.test(t)||y0(t)}/**
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
 */function I0(t,e=[]){let n;switch(t){case"Browser":n=hm(Ue());break;case"Worker":n=`${hm(Ue())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Tr}/${r}`}/**
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
 */class wx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Ex(t,e={}){return Si(t,"GET","/v2/passwordPolicy",Ah(t,e))}/**
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
 */const Cx=6;class Sx{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Cx,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Ix{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fm(this),this.idTokenSubscription=new fm(this),this.beforeStateQueue=new wx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Xr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await f0(this,{idToken:e}),r=await Qt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Gt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Aa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Gt(this.app))return Promise.reject(ar(this));const n=e?_e(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Gt(this.app)?Promise.reject(ar(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Gt(this.app)?Promise.reject(ar(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Yt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ex(this),n=new Sx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ir("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await _x(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yt(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await Xr.create(this,[Yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=I0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&tx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function wl(t){return _e(t)}class fm{constructor(e){this.auth=e,this.observer=null,this.addObserver=o1(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Lh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Tx(t){Lh=t}function kx(t){return Lh.loadJS(t)}function Nx(){return Lh.gapiScript}function Rx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function xx(t,e){const n=Vn(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Is(s,e??{}))return i;Ut(i,"already-initialized")}return n.initialize({options:e})}function Px(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Yt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function bx(t,e,n){const r=wl(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=T0(e),{host:o,port:a}=Ax(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Ox()}function T0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ax(t){const e=T0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:pm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:pm(o)}}}function pm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ox(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class k0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Kt("not implemented")}_getIdTokenResponse(e){return Kt("not implemented")}_linkToIdToken(e,n){return Kt("not implemented")}_getReauthenticationResolver(e){return Kt("not implemented")}}/**
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
 */async function Zr(t,e){return lx(t,"POST","/v1/accounts:signInWithIdp",Ah(t,e))}/**
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
 */const Dx="http://localhost";class yr extends k0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ut("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Rh(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new yr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Zr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Zr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zr(e,n)}buildRequest(){const e={requestUri:Dx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yi(n)}return e}}/**
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
 */class Mh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Qs extends Mh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class mn extends Qs{constructor(){super("facebook.com")}static credential(e){return yr._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";mn.PROVIDER_ID="facebook.com";/**
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
 */class Dt extends Qs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return yr._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Dt.credentialFromTaggedObject(e)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Dt.credential(n,r)}catch{return null}}}Dt.GOOGLE_SIGN_IN_METHOD="google.com";Dt.PROVIDER_ID="google.com";/**
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
 */class gn extends Qs{constructor(){super("github.com")}static credential(e){return yr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.GITHUB_SIGN_IN_METHOD="github.com";gn.PROVIDER_ID="github.com";/**
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
 */class _n extends Qs{constructor(){super("twitter.com")}static credential(e,n){return yr._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return _n.credential(n,r)}catch{return null}}}_n.TWITTER_SIGN_IN_METHOD="twitter.com";_n.PROVIDER_ID="twitter.com";/**
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
 */class fi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Qt._fromIdTokenResponse(e,r,i),o=mm(r);return new fi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=mm(r);return new fi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function mm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Oa extends Pt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Oa.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Oa(e,n,r,i)}}function N0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Oa._fromErrorAndOperation(t,s,e,r):s})}async function Lx(t,e,n=!1){const r=await Ls(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fi._forOperation(t,"link",r)}/**
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
 */async function Mx(t,e,n=!1){const{auth:r}=t;if(Gt(r.app))return Promise.reject(ar(r));const i="reauthenticate";try{const s=await Ls(t,N0(r,i,e,t),n);O(s.idToken,r,"internal-error");const o=Oh(s.idToken);O(o,r,"internal-error");const{sub:a}=o;return O(t.uid===a,r,"user-mismatch"),fi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ut(r,"user-mismatch"),s}}/**
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
 */async function jx(t,e,n=!1){if(Gt(t.app))return Promise.reject(ar(t));const r="signIn",i=await N0(t,r,e),s=await fi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function Fx(t,e,n,r){return _e(t).onIdTokenChanged(e,n,r)}function Ux(t,e,n){return _e(t).beforeAuthStateChanged(e,n)}const Da="__sak";/**
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
 */class R0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Da,"1"),this.storage.removeItem(Da),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const zx=1e3,Bx=10;class x0 extends R0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=S0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);yx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Bx):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},zx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}x0.type="LOCAL";const $x=x0;/**
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
 */class P0 extends R0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}P0.type="SESSION";const b0=P0;/**
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
 */function Wx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class El{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new El(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await Wx(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}El.receivers=[];/**
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
 */function jh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Vx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=jh("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ft(){return window}function Hx(t){Ft().location.href=t}/**
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
 */function A0(){return typeof Ft().WorkerGlobalScope<"u"&&typeof Ft().importScripts=="function"}async function Gx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Kx(){return A0()?self:null}/**
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
 */const O0="firebaseLocalStorageDb",Qx=1,La="firebaseLocalStorage",D0="fbase_key";class Ys{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Cl(t,e){return t.transaction([La],e?"readwrite":"readonly").objectStore(La)}function Yx(){const t=indexedDB.deleteDatabase(O0);return new Ys(t).toPromise()}function Fu(){const t=indexedDB.open(O0,Qx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(La,{keyPath:D0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(La)?e(r):(r.close(),await Yx(),e(await Fu()))})})}async function gm(t,e,n){const r=Cl(t,!0).put({[D0]:e,value:n});return new Ys(r).toPromise()}async function Jx(t,e){const n=Cl(t,!1).get(e),r=await new Ys(n).toPromise();return r===void 0?null:r.value}function _m(t,e){const n=Cl(t,!0).delete(e);return new Ys(n).toPromise()}const Xx=800,Zx=3;class L0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Zx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return A0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=El._getInstance(Kx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Gx(),!this.activeServiceWorker)return;this.sender=new Vx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fu();return await gm(e,Da,"1"),await _m(e,Da),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>gm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Jx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_m(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Cl(i,!1).getAll();return new Ys(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Xx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}L0.type="LOCAL";const eP=L0;new Ks(3e4,6e4);/**
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
 */function M0(t,e){return e?Yt(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Fh extends k0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Zr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function tP(t){return jx(t.auth,new Fh(t),t.bypassAuthState)}function nP(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),Mx(n,new Fh(t),t.bypassAuthState)}async function rP(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),Lx(n,new Fh(t),t.bypassAuthState)}/**
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
 */class j0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tP;case"linkViaPopup":case"linkViaRedirect":return rP;case"reauthViaPopup":case"reauthViaRedirect":return nP;default:Ut(this.auth,"internal-error")}}resolve(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const iP=new Ks(2e3,1e4);async function sP(t,e,n){if(Gt(t.app))return Promise.reject(Nt(t,"operation-not-supported-in-this-environment"));const r=wl(t);nx(t,e,Mh);const i=M0(r,n);return new rr(r,"signInViaPopup",e,i).executeNotNull()}class rr extends j0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,rr.currentPopupAction&&rr.currentPopupAction.cancel(),rr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){on(this.filter.length===1,"Popup operations only handle one event");const e=jh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iP.get())};e()}}rr.currentPopupAction=null;/**
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
 */const oP="pendingRedirect",Fo=new Map;class aP extends j0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Fo.get(this.auth._key());if(!e){try{const r=await lP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Fo.set(this.auth._key(),e)}return this.bypassAuthState||Fo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lP(t,e){const n=dP(e),r=uP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function cP(t,e){Fo.set(t._key(),e)}function uP(t){return Yt(t._redirectPersistence)}function dP(t){return jo(oP,t.config.apiKey,t.name)}async function hP(t,e,n=!1){if(Gt(t.app))return Promise.reject(ar(t));const r=wl(t),i=M0(r,e),o=await new aP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const fP=10*60*1e3;class pP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!F0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Nt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fP&&this.cachedEventUids.clear(),this.cachedEventUids.has(vm(e))}saveEventToCache(e){this.cachedEventUids.add(vm(e)),this.lastProcessedEventTime=Date.now()}}function vm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function F0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return F0(t);default:return!1}}/**
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
 */async function gP(t,e={}){return Si(t,"GET","/v1/projects",e)}/**
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
 */const _P=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vP=/^https?/;async function yP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await gP(t);for(const n of e)try{if(wP(n))return}catch{}Ut(t,"unauthorized-domain")}function wP(t){const e=Mu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!vP.test(n))return!1;if(_P.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const EP=new Ks(3e4,6e4);function ym(){const t=Ft().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function CP(t){return new Promise((e,n)=>{var r,i,s;function o(){ym(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ym(),n(Nt(t,"network-request-failed"))},timeout:EP.get()})}if(!((i=(r=Ft().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ft().gapi)===null||s===void 0)&&s.load)o();else{const a=Rx("iframefcb");return Ft()[a]=()=>{gapi.load?o():n(Nt(t,"network-request-failed"))},kx(`${Nx()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Uo=null,e})}let Uo=null;function SP(t){return Uo=Uo||CP(t),Uo}/**
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
 */const IP=new Ks(5e3,15e3),TP="__/auth/iframe",kP="emulator/auth/iframe",NP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xP(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bh(e,kP):`https://${t.config.authDomain}/${TP}`,r={apiKey:e.apiKey,appName:t.name,v:Tr},i=RP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${yi(r).slice(1)}`}async function PP(t){const e=await SP(t),n=Ft().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:xP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Nt(t,"network-request-failed"),a=Ft().setTimeout(()=>{s(o)},IP.get());function l(){Ft().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const bP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},AP=500,OP=600,DP="_blank",LP="http://localhost";class wm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function MP(t,e,n,r=AP,i=OP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},bP),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Ue().toLowerCase();n&&(a=v0(c)?DP:n),g0(c)&&(e=e||LP,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[_,v])=>`${h}${_}=${v},`,"");if(vx(c)&&a!=="_self")return jP(e||"",a),new wm(null);const d=window.open(e||"",a,u);O(d,t,"popup-blocked");try{d.focus()}catch{}return new wm(d)}function jP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const FP="__/auth/handler",UP="emulator/auth/handler",zP=encodeURIComponent("fac");async function Em(t,e,n,r,i,s){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Tr,eventId:i};if(e instanceof Mh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",gu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof Qs){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${zP}=${encodeURIComponent(l)}`:"";return`${BP(t)}?${yi(a).slice(1)}${c}`}function BP({config:t}){return t.emulator?bh(t,UP):`https://${t.authDomain}/${FP}`}/**
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
 */const vc="webStorageSupport";class $P{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=b0,this._completeRedirectFn=hP,this._overrideRedirectResult=cP}async _openPopup(e,n,r,i){var s;on((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Em(e,n,r,Mu(),i);return MP(e,o,jh())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Em(e,n,r,Mu(),i);return Hx(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(on(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await PP(e),r=new pP(e);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(vc,{type:vc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[vc];o!==void 0&&n(!!o),Ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return S0()||_0()||Dh()}}const WP=$P;var Cm="@firebase/auth",Sm="1.7.8";/**
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
 */class VP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function HP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function GP(t){xt(new mt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:I0(t)},c=new Ix(r,i,s,l);return Px(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xt(new mt("auth-internal",e=>{const n=wl(e.getProvider("auth").getImmediate());return(r=>new VP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xe(Cm,Sm,HP(t)),Xe(Cm,Sm,"esm2017")}/**
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
 */const qP=5*60,KP=dv("authIdTokenMaxAge")||qP;let Im=null;const QP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>KP)return;const i=n==null?void 0:n.token;Im!==i&&(Im=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function YP(t=ol()){const e=Vn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=xx(t,{popupRedirectResolver:WP,persistence:[eP,$x,b0]}),r=dv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=QP(s.toString());Ux(n,o,()=>o(n.currentUser)),Fx(n,a=>o(a))}}const i=lv("auth");return i&&bx(n,`http://${i}`),n}function JP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Tx({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Nt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",JP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});GP("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0="firebasestorage.googleapis.com",z0="storageBucket",XP=2*60*1e3,ZP=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le extends Pt{constructor(e,n,r=0){super(yc(e),`Firebase Storage: ${n} (${yc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,le.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return yc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ae;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ae||(ae={}));function yc(t){return"storage/"+t}function Uh(){const t="An unknown error occurred, please check the error payload for server response.";return new le(ae.UNKNOWN,t)}function eb(t){return new le(ae.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function tb(t){return new le(ae.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function nb(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new le(ae.UNAUTHENTICATED,t)}function rb(){return new le(ae.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function ib(t){return new le(ae.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function sb(){return new le(ae.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ob(){return new le(ae.CANCELED,"User canceled the upload/download.")}function ab(t){return new le(ae.INVALID_URL,"Invalid URL '"+t+"'.")}function lb(t){return new le(ae.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function cb(){return new le(ae.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+z0+"' property when initializing the app?")}function ub(){return new le(ae.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function db(){return new le(ae.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function hb(t){return new le(ae.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Uu(t){return new le(ae.INVALID_ARGUMENT,t)}function B0(){return new le(ae.APP_DELETED,"The Firebase app was deleted.")}function fb(t){return new le(ae.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function rs(t,e){return new le(ae.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Mi(t){throw new le(ae.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=nt.makeFromUrl(e,n)}catch{return new nt(e,"")}if(r.path==="")return r;throw lb(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(y){y.path.charAt(y.path.length-1)==="/"&&(y.path_=y.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(y){y.path_=decodeURIComponent(y.path)}const u="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",_=new RegExp(`^https?://${d}/${u}/b/${i}/o${h}`,"i"),v={bucket:1,path:3},w=n===U0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",m=new RegExp(`^https?://${w}/${i}/${C}`,"i"),g=[{regex:a,indices:l,postModify:s},{regex:_,indices:v,postModify:c},{regex:m,indices:{bucket:1,path:2},postModify:c}];for(let y=0;y<g.length;y++){const S=g[y],k=S.regex.exec(e);if(k){const N=k[S.indices.bucket];let R=k[S.indices.path];R||(R=""),r=new nt(N,R),S.postModify(r);break}}if(r==null)throw ab(e);return r}}class pb{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mb(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...C){c||(c=!0,e.apply(null,C))}function d(C){i=setTimeout(()=>{i=null,t(_,l())},C)}function h(){s&&clearTimeout(s)}function _(C,...m){if(c){h();return}if(C){h(),u.call(null,C,...m);return}if(l()||o){h(),u.call(null,C,...m);return}r<64&&(r*=2);let g;a===1?(a=2,g=0):g=(r+Math.random())*1e3,d(g)}let v=!1;function w(C){v||(v=!0,h(),!c&&(i!==null?(C||(a=2),clearTimeout(i),d(0)):C||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,w(!0)},n),w}function gb(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(t){return t!==void 0}function vb(t){return typeof t=="object"&&!Array.isArray(t)}function zh(t){return typeof t=="string"||t instanceof String}function Tm(t){return Bh()&&t instanceof Blob}function Bh(){return typeof Blob<"u"}function km(t,e,n,r){if(r<e)throw Uu(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Uu(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function $0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var lr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(lr||(lr={}));/**
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
 */function yb(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e,n,r,i,s,o,a,l,c,u,d,h=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=d,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,v)=>{this.resolve_=_,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new wo(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===lr.NO_ERROR,l=s.getStatus();if(!a||yb(l,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===lr.ABORT;r(!1,new wo(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new wo(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());_b(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Uh();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?B0():ob();o(l)}else{const l=sb();o(l)}};this.canceled_?n(!1,new wo(!1,null,!0)):this.backoffId_=mb(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&gb(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class wo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Eb(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Cb(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Sb(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Ib(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Tb(t,e,n,r,i,s,o=!0){const a=$0(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return Sb(c,e),Eb(c,n),Cb(c,s),Ib(c,r),new wb(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kb(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Nb(...t){const e=kb();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Bh())return new Blob(t);throw new le(ae.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Rb(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function xb(t){if(typeof atob>"u")throw hb("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class wc{constructor(e,n){this.data=e,this.contentType=n||null}}function Pb(t,e){switch(t){case Lt.RAW:return new wc(W0(e));case Lt.BASE64:case Lt.BASE64URL:return new wc(V0(t,e));case Lt.DATA_URL:return new wc(Ab(e),Ob(e))}throw Uh()}function W0(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function bb(t){let e;try{e=decodeURIComponent(t)}catch{throw rs(Lt.DATA_URL,"Malformed data URL.")}return W0(e)}function V0(t,e){switch(t){case Lt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw rs(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Lt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw rs(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=xb(e)}catch(i){throw i.message.includes("polyfill")?i:rs(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class H0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw rs(Lt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Db(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Ab(t){const e=new H0(t);return e.base64?V0(Lt.BASE64,e.rest):bb(e.rest)}function Ob(t){return new H0(t).contentType}function Db(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,n){let r=0,i="";Tm(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Tm(this.data_)){const r=this.data_,i=Rb(r,e,n);return i===null?null:new vn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new vn(r,!0)}}static getBlob(...e){if(Bh()){const n=e.map(r=>r instanceof vn?r.data_:r);return new vn(Nb.apply(null,n))}else{const n=e.map(o=>zh(o)?Pb(Lt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new vn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(t){let e;try{e=JSON.parse(t)}catch{return null}return vb(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lb(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Mb(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function q0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jb(t,e){return e}class De{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||jb}}let Eo=null;function Fb(t){return!zh(t)||t.length<2?t:q0(t)}function K0(){if(Eo)return Eo;const t=[];t.push(new De("bucket")),t.push(new De("generation")),t.push(new De("metageneration")),t.push(new De("name","fullPath",!0));function e(s,o){return Fb(o)}const n=new De("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new De("size");return i.xform=r,t.push(i),t.push(new De("timeCreated")),t.push(new De("updated")),t.push(new De("md5Hash",null,!0)),t.push(new De("cacheControl",null,!0)),t.push(new De("contentDisposition",null,!0)),t.push(new De("contentEncoding",null,!0)),t.push(new De("contentLanguage",null,!0)),t.push(new De("contentType",null,!0)),t.push(new De("metadata","customMetadata",!0)),Eo=t,Eo}function Ub(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new nt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function zb(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return Ub(r,t),r}function Q0(t,e,n){const r=G0(e);return r===null?null:zb(t,r,n)}function Bb(t,e,n,r){const i=G0(e);if(i===null||!zh(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const u=t.bucket,d=t.fullPath,h="/b/"+o(u)+"/o/"+o(d),_=$h(h,n,r),v=$0({alt:"media",token:c});return _+v})[0]}function $b(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Y0{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J0(t){if(!t)throw Uh()}function Wb(t,e){function n(r,i){const s=Q0(t,i,e);return J0(s!==null),s}return n}function Vb(t,e){function n(r,i){const s=Q0(t,i,e);return J0(s!==null),Bb(s,i,t.host,t._protocol)}return n}function X0(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=rb():i=nb():n.getStatus()===402?i=tb(t.bucket):n.getStatus()===403?i=ib(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Hb(t){const e=X0(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=eb(t.path)),s.serverResponse=i.serverResponse,s}return n}function Gb(t,e,n){const r=e.fullServerUrl(),i=$h(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Y0(i,s,Vb(t,n),o);return a.errorHandler=Hb(e),a}function qb(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Kb(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=qb(null,e)),r}function Qb(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let g="";for(let y=0;y<2;y++)g=g+Math.random().toString().slice(2);return g}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=Kb(e,r,i),u=$b(c,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,h=`\r
--`+l+"--",_=vn.getBlob(d,r,h);if(_===null)throw ub();const v={name:c.fullPath},w=$h(s,t.host,t._protocol),C="POST",m=t.maxUploadRetryTime,p=new Y0(w,C,Wb(t,n),m);return p.urlParams=v,p.headers=o,p.body=_.uploadData(),p.errorHandler=X0(e),p}class Yb{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=lr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=lr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=lr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Mi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Mi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Mi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Mi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Mi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Jb extends Yb{initXhr(){this.xhr_.responseType="text"}}function Z0(){return new Jb}/**
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
 */class wr{constructor(e,n){this._service=e,n instanceof nt?this._location=n:this._location=nt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new wr(e,n)}get root(){const e=new nt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return q0(this._location.path)}get storage(){return this._service}get parent(){const e=Lb(this._location.path);if(e===null)return null;const n=new nt(this._location.bucket,e);return new wr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw fb(e)}}function Xb(t,e,n){t._throwIfRoot("uploadBytes");const r=Qb(t.storage,t._location,K0(),new vn(e,!0),n);return t.storage.makeRequestWithTokens(r,Z0).then(i=>({metadata:i,ref:t}))}function Zb(t){t._throwIfRoot("getDownloadURL");const e=Gb(t.storage,t._location,K0());return t.storage.makeRequestWithTokens(e,Z0).then(n=>{if(n===null)throw db();return n})}function eA(t,e){const n=Mb(t._location.path,e),r=new nt(t._location.bucket,n);return new wr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tA(t){return/^[A-Za-z]+:\/\//.test(t)}function nA(t,e){return new wr(t,e)}function ew(t,e){if(t instanceof Wh){const n=t;if(n._bucket==null)throw cb();const r=new wr(n,n._bucket);return e!=null?ew(r,e):r}else return e!==void 0?eA(t,e):t}function rA(t,e){if(e&&tA(e)){if(t instanceof Wh)return nA(t,e);throw Uu("To use ref(service, url), the first argument must be a Storage instance.")}else return ew(t,e)}function Nm(t,e){const n=e==null?void 0:e[z0];return n==null?null:nt.makeFromBucketSpec(n,t)}function iA(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:hv(i,t.app.options.projectId))}class Wh{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=U0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=XP,this._maxUploadRetryTime=ZP,this._requests=new Set,i!=null?this._bucket=nt.makeFromBucketSpec(i,this._host):this._bucket=Nm(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=nt.makeFromBucketSpec(this._url,e):this._bucket=Nm(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){km("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){km("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new wr(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new pb(B0());{const o=Tb(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Rm="@firebase/storage",xm="0.13.1";/**
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
 */const tw="storage";function Sl(t,e,n){return t=_e(t),Xb(t,e,n)}function Il(t){return t=_e(t),Zb(t)}function Tl(t,e){return t=_e(t),rA(t,e)}function sA(t=ol(),e){t=_e(t);const r=Vn(t,tw).getImmediate({identifier:e}),i=cv("storage");return i&&oA(r,...i),r}function oA(t,e,n,r={}){iA(t,e,n,r)}function aA(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Wh(n,r,i,e,Tr)}function lA(){xt(new mt(tw,aA,"PUBLIC").setMultipleInstances(!0)),Xe(Rm,xm,""),Xe(Rm,xm,"esm2017")}lA();const cA={apiKey:"AIzaSyBJm9fkGNwaMtHi5ChRDULA2UgLrFT8nvI",authDomain:"ranking-bp.firebaseapp.com",projectId:"ranking-bp",storageBucket:"ranking-bp.appspot.com",messagingSenderId:"1045536295453",appId:"1:1045536295453:web:27da7bdeee70b6ac8894f4",measurementId:"G-9HBZ9LWGLH"},kl=Cv(cA),nw=YP(kl);YR(kl);new Dt;const Ge=xN(kl),Nl=sA(kl);bN(!0);const Hn=E.createContext(),uA=({children:t})=>{const[e,n]=E.useState([]),[r,i]=E.useState([]),[s,o]=E.useState([]),[a,l]=E.useState([]);return E.useEffect(()=>{(async()=>{const u=He(Ge,"banners"),d=He(Ge,"jugadores"),h=He(Ge,"torneos"),_=He(Ge,"clubs"),v=(w,C,m)=>{EN(C,p=>{const g=p.val(),y=g?Array.isArray(g)?g:Object.values(g):[];localStorage.setItem(w,JSON.stringify(y)),m(y)})};v("banners",u,n),v("jugadores",d,i),v("torneos",h,o),v("clubs",_,l)})()},[]),E.useEffect(()=>{const c=JSON.parse(localStorage.getItem("banners"))||[],u=JSON.parse(localStorage.getItem("jugadores"))||[],d=JSON.parse(localStorage.getItem("torneos"))||[],h=JSON.parse(localStorage.getItem("clubs"))||[];n(c),i(u),o(d),l(h)},[]),E.useEffect(()=>{(async()=>{const u=new Date().toISOString().split("T")[0],d=s.filter(v=>v.fecha.split("/").reverse().join("-")>=u),h=He(Ge,"torneos");(await Ch(h)).forEach(v=>{v.val().fecha.split("/").reverse().join("-")<u&&Uy(He(Ge,`torneos/${v.key}`))}),o(d)})()},[s]),f.jsx(Hn.Provider,{value:{banners:e,jugadores:r,setJugadores:i,torneos:s,clubes:a},children:t})},dA=()=>{const{banners:t}=E.useContext(Hn),[e,n]=E.useState(0),[r,i]=E.useState(!0),s=E.useRef(null),o=E.useRef(null),a=E.useRef(null);E.useEffect(()=>{if(!t||t.length===0)return;const d=C=>{const m=s.current;C>=t.length&&n(0),C<0&&n(t.length-1),m.style.transform=`translateX(${-e*100}%)`,h()},h=()=>{o.current.querySelectorAll(".dot").forEach((m,p)=>{m.classList.toggle("active",p===e)})},_=()=>{a.current=setInterval(()=>{r&&n(C=>(C+1)%t.length)},3e3)},v=()=>{let C=0,m=0,p=0,g=!1;const y=s.current,S=R=>{C=R.clientX,y.style.transition="none",g=!0,i(!1)},k=R=>{g&&(m=R.clientX-C,y.style.transform=`translateX(${m+p}px)`)},N=R=>{if(!g)return;const j=R.clientX-C;let A=e;j<-50?A=(e+1)%t.length:j>50&&(A=(e-1+t.length)%t.length),n(A),d(A),p+=m,y.style.transition="transform 0.3s ease-out",g=!1,i(!0),C=void 0,m=0};return y.addEventListener("pointerdown",S),y.addEventListener("pointermove",k),y.addEventListener("pointerup",N),y.addEventListener("pointercancel",()=>{g=!1}),()=>{y.removeEventListener("pointerdown",S),y.removeEventListener("pointermove",k),y.removeEventListener("pointerup",N)}};d(e),_();const w=v();return()=>{clearInterval(a.current),w()}},[e,r,t]);const l=()=>{n(d=>(d+1)%t.length)},c=()=>{n(d=>(d-1+t.length)%t.length)},u=d=>{n(d)};return f.jsxs("div",{className:"banner-slider",children:[f.jsx("div",{className:"slides",ref:s,children:t&&t.length>0?t.map((d,h)=>f.jsx("div",{className:"slide",children:f.jsx("a",{href:d.link,children:f.jsx("img",{src:d.photoURL,alt:d.title,className:"banner-slide-image",onError:_=>{_.target.onerror=null,_.target.src="https://via.placeholder.com/150"}})})},h)):f.jsx("div",{children:"No banners available"})}),f.jsx("div",{className:"dots",ref:o,children:t&&t.map((d,h)=>f.jsx("span",{className:`dot ${h===e?"active":""}`,onClick:()=>u(h)},h))}),f.jsx("button",{className:"prev",onClick:c,children:"❮"}),f.jsx("button",{className:"next",onClick:l,children:"❯"})]})};var rw={exports:{}},hA="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",fA=hA,pA=fA;function iw(){}function sw(){}sw.resetWarningCache=iw;var mA=function(){function t(r,i,s,o,a,l){if(l!==pA){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:sw,resetWarningCache:iw};return n.PropTypes=n,n};rw.exports=mA();var gA=rw.exports;const L=zu(gA);var ow={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Pm=Sn.createContext&&Sn.createContext(ow),_A=["attr","size","title"];function vA(t,e){if(t==null)return{};var n=yA(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function yA(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function Ma(){return Ma=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ma.apply(this,arguments)}function bm(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ja(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?bm(Object(n),!0).forEach(function(r){wA(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):bm(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function wA(t,e,n){return e=EA(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function EA(t){var e=CA(t,"string");return typeof e=="symbol"?e:e+""}function CA(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function aw(t){return t&&t.map((e,n)=>Sn.createElement(e.tag,ja({key:n},e.attr),aw(e.child)))}function _t(t){return e=>Sn.createElement(SA,Ma({attr:ja({},t.attr)},e),aw(t.child))}function SA(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=vA(t,_A),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Sn.createElement("svg",Ma({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:ja(ja({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Sn.createElement("title",null,s),t.children)};return Pm!==void 0?Sn.createElement(Pm.Consumer,null,n=>e(n)):e(ow)}function IA(t){return _t({tag:"svg",attr:{viewBox:"0 0 488 512"},child:[{tag:"path",attr:{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"},child:[]}]})(t)}function lw(t){return _t({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(t)}function TA(t){return _t({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(t)}function kA(t){return _t({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(t)}function NA(t){return _t({tag:"svg",attr:{viewBox:"0 0 256 512"},child:[{tag:"path",attr:{d:"M128 0c35.346 0 64 28.654 64 64s-28.654 64-64 64c-35.346 0-64-28.654-64-64S92.654 0 128 0m119.283 354.179l-48-192A24 24 0 0 0 176 144h-11.36c-22.711 10.443-49.59 10.894-73.28 0H80a24 24 0 0 0-23.283 18.179l-48 192C4.935 369.305 16.383 384 32 384h56v104c0 13.255 10.745 24 24 24h32c13.255 0 24-10.745 24-24V384h56c15.591 0 27.071-14.671 23.283-29.821z"},child:[]}]})(t)}function RA(t){return _t({tag:"svg",attr:{viewBox:"0 0 192 512"},child:[{tag:"path",attr:{d:"M96 0c35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64S60.654 0 96 0m48 144h-11.36c-22.711 10.443-49.59 10.894-73.28 0H48c-26.51 0-48 21.49-48 48v136c0 13.255 10.745 24 24 24h16v136c0 13.255 10.745 24 24 24h64c13.255 0 24-10.745 24-24V352h16c13.255 0 24-10.745 24-24V192c0-26.51-21.49-48-48-48z"},child:[]}]})(t)}function cw(t){return _t({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(t)}function uw(t){return _t({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"},child:[]}]})(t)}function xA(t){return _t({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},child:[]}]})(t)}function PA(t){return _t({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(t)}function bA(t){return _t({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(t)}function AA(t){return _t({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(t)}const dw=({torneo:t,onClose:e})=>t?f.jsx("div",{className:"modal-overlay",onClick:e,children:f.jsxs("div",{className:"modal-content",onClick:n=>n.stopPropagation(),children:[f.jsx("h3",{children:t.nombre}),f.jsxs("p",{children:[f.jsx(TA,{})," ",t.fecha]}),f.jsxs("p",{children:[f.jsx(cw,{})," ",t.direccion]}),f.jsxs("p",{children:[f.jsx(uw,{})," ",f.jsx("a",{href:`tel:${t.whatsapp}`,children:t.whatsapp})]}),f.jsxs("p",{children:["Hora: ",t.hora]}),t.archivoURL&&f.jsx("p",{children:f.jsx("img",{src:t.archivoURL,alt:t.nombre,className:"torneo-image"})})]})}):null;dw.propTypes={torneo:L.shape({nombre:L.string.isRequired,fecha:L.string.isRequired,hora:L.string,telefono:L.string,ubicacion:L.string,archivoURL:L.string}),onClose:L.func.isRequired};const OA=()=>{const{torneos:t}=E.useContext(Hn),[e,n]=E.useState(null),[r,i]=E.useState([]);E.useEffect(()=>{const a=new Date().toISOString().split("T")[0],l=t.filter(c=>c.fecha.split("/").reverse().join("-")>=a);i(l)},[t]);const s=a=>{n({nombre:a.nombre||"Nombre no disponible",fecha:a.fecha||"Fecha no disponible",direccion:a.ubicacion||"Ubicación no disponible",lugar:"",whatsapp:a.telefono||"Número no disponible",archivoURL:a.archivoURL||"",hora:a.hora||"Hora no disponible"})},o=()=>{n(null)};return f.jsxs("div",{className:"cards-torneos-container",children:[r.length>0?r.map(a=>f.jsxs("div",{className:"card-torneo",children:[f.jsx("h3",{className:"card-title",children:a.nombre}),f.jsx("p",{className:"card-date",children:a.fecha}),f.jsx("p",{className:"card-description",children:a.descripcion||"Descripción no disponible"}),f.jsx("button",{className:"btn-inscribir",onClick:()=>s(a),children:"Inscribirse"})]},a.id)):f.jsx("p",{children:"No hay torneos disponibles."}),f.jsx(dw,{torneo:e,onClose:o})]})},hw=({jugadores:t,onClose:e,genero:n})=>{const[r,i]=E.useState("conPuntos"),s=t.filter(l=>l.points>0).sort((l,c)=>c.points-l.points),o=t.filter(l=>l.points===0).sort((l,c)=>l.name.localeCompare(c.name)),a=l=>{l.target.className.includes("modal-gnr")&&e()};return f.jsx("div",{className:"modal-gnr",onClick:a,children:f.jsxs("div",{className:"modal-gnr-content",onClick:l=>l.stopPropagation(),children:[f.jsx("h2",{className:"modal-gnr-title",children:n==="masculino"?"Jugadores Masculinos":"Jugadoras Femeninas"}),f.jsxs("div",{className:"modal-gnr-player-list",children:[r==="conPuntos"&&s.map(l=>f.jsxs("div",{className:"modal-gnr-player-card",children:[f.jsx("img",{src:l.photoURL,alt:l.name,className:"modal-gnr-player-photo"}),f.jsxs("div",{className:"modal-gnr-player-info",children:[f.jsx("h4",{children:l.name}),f.jsxs("p",{children:[l.points," puntos"]})]})]},l.id)),r==="sinPuntos"&&o.map(l=>f.jsxs("div",{className:"modal-gnr-player-card",children:[f.jsx("img",{src:l.photoURL,alt:l.name,className:"modal-gnr-player-photo"}),f.jsxs("div",{className:"modal-gnr-player-info",children:[f.jsx("h4",{children:l.name}),f.jsx("p",{children:"Sin puntos"})]})]},l.id))]}),f.jsxs("div",{className:"modal-gnr-tabs-container",children:[f.jsx("button",{className:`modal-gnr-tab ${r==="conPuntos"?"active":""}`,onClick:()=>i("conPuntos"),children:"Con Puntos"}),f.jsx("button",{className:`modal-gnr-tab ${r==="sinPuntos"?"active":""}`,onClick:()=>i("sinPuntos"),children:"Sin Puntos"})]})]})})};hw.propTypes={jugadores:L.arrayOf(L.shape({id:L.string.isRequired,name:L.string.isRequired,points:L.number.isRequired,photoURL:L.string.isRequired})).isRequired,onClose:L.func.isRequired,genero:L.string.isRequired};const DA=()=>{const{jugadores:t}=E.useContext(Hn),[e,n]=E.useState(!1),[r,i]=E.useState([]),[s,o]=E.useState(""),a=u=>t.filter(d=>d.gender===u),l=u=>{const d=a(u);i(d),o(u),n(!0)},c=()=>{n(!1),o("")};return f.jsxs("div",{className:"container-jugadores",children:[f.jsx("div",{className:"player-box male",onClick:()=>l("masculino"),children:f.jsx("h2",{children:"Jugadores Masculinos"})}),f.jsx("div",{className:"player-box female",onClick:()=>l("femenino"),children:f.jsx("h2",{children:"Jugadoras Femeninas"})}),e&&f.jsx(hw,{jugadores:r,onClose:c,genero:s})]})},fw=({club:t,onClose:e})=>t?f.jsx("div",{className:"modal-clubes-overlay",onClick:e,children:f.jsxs("div",{className:"modal-clubes-content",onClick:n=>n.stopPropagation(),children:[f.jsx("h3",{children:t.name}),f.jsxs("p",{children:[f.jsx(cw,{})," ",t.location]}),f.jsxs("p",{children:[f.jsx(uw,{})," ",f.jsx("a",{href:`tel:${t.phone}`,children:t.phone})]}),f.jsx("img",{src:t.logoURL,alt:"Logo del Club",className:"modal-clubes-logo"}),f.jsx("button",{className:"modal-clubes-close",onClick:e,children:"Cerrar"})]})}):null;fw.propTypes={club:L.shape({name:L.string.isRequired,location:L.string,phone:L.string,logoURL:L.string}),onClose:L.func.isRequired};const LA=()=>{const{clubes:t}=E.useContext(Hn),[e,n]=E.useState([]),[r,i]=E.useState(null),[s,o]=E.useState(!1);E.useEffect(()=>{if(console.log("Datos de clubes recibidos:",t),t){const c=Array.isArray(t)?t:Object.values(t),u=c.filter(d=>d.logoURL).map(d=>({...d,logoURL:d.logoURL}));console.log("Clubes en el contexto:",c),console.log("Logos filtrados:",u),n(u)}else n([])},[t]);const a=c=>{i(c),o(!0)},l=()=>{o(!1),i(null)};return f.jsxs("div",{className:"carousel-container",children:[f.jsx("h1",{className:"title",children:"Canchas Belgranenses"}),f.jsx("div",{className:"carousel",children:f.jsx("div",{className:"carousel-inner",children:e.length>0?e.map((c,u)=>f.jsx("div",{className:"logo-circle",onClick:()=>a(e[u]),children:f.jsx("img",{src:c.logoURL,alt:`Logo ${u+1}`,onError:d=>{d.target.onerror=null,d.target.src="https://via.placeholder.com/150"}})},u)):f.jsx("p",{children:"No hay logos disponibles."})})}),s&&f.jsx(fw,{club:r,onClose:l})]})},Vh=({isOpen:t,onClose:e,participants:n})=>t?f.jsx("div",{className:"modal-overlay",children:f.jsxs("div",{className:"modal-content",children:[f.jsxs("div",{className:"modal-header",children:[f.jsx("h2",{children:"Ranking Completo"}),f.jsx("button",{className:"close-btn",onClick:e,children:"Cerrar"})]}),f.jsxs("table",{children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:"#"}),f.jsx("th",{children:"Nombre"}),f.jsx("th",{children:"Puntos"})]})}),f.jsx("tbody",{children:n.map(r=>f.jsxs("tr",{style:r.rank===1?{backgroundColor:"#5c5be5",color:"#fff",fontWeight:"bold"}:{},children:[f.jsx("td",{children:r.rank}),f.jsx("td",{children:r.name}),f.jsxs("td",{className:"points-cell",children:[r.points,r.rank===1&&f.jsx("img",{className:"gold-medal",src:"https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true",alt:"gold medal"})]})]},r.id))})]})]})}):null;Vh.propTypes={isOpen:L.bool.isRequired,onClose:L.func.isRequired,participants:L.arrayOf(L.shape({id:L.number.isRequired,rank:L.number.isRequired,name:L.string.isRequired,points:L.string.isRequired})).isRequired};const Am="/Rankingpadel/assets/tennis-rZAVwrir.ico",pw=({selectedCategory:t,onCategoryChange:e,categories:n})=>{const[r,i]=E.useState(!1),s=o=>{e(o),i(!1)};return f.jsxs("div",{className:`select-menu ${r?"active":""}`,children:[f.jsxs("div",{className:"select-btn",onClick:()=>i(!r),children:[f.jsx("img",{src:Am,alt:"Tennis Icon",className:"select-icon"}),f.jsx("span",{className:"sBtn-text",children:t||"Selecciona una categoría"})]}),f.jsx("ul",{className:"options",children:n.map((o,a)=>f.jsxs("li",{className:"option",onClick:()=>s(o),children:[f.jsx("img",{src:Am,alt:"Tennis Icon",className:"category-icon"}),f.jsx("span",{className:"option-text",children:o})]},a))})]})},MA=()=>{const{jugadores:t}=E.useContext(Hn),[e,n]=E.useState(!1),[r,i]=E.useState("Septima"),s=[...new Set(t.filter(u=>u.gender==="femenino").map(u=>u.category))],o=t.filter(u=>u.gender==="femenino"&&(r==="Selecciona una categoría"?u.category==="Septima":u.category===r)).sort((u,d)=>d.points-u.points).map((u,d)=>({...u,rank:d+1})),a=()=>n(!0),l=()=>n(!1),c=u=>i(u);return f.jsxs("div",{className:"ranking-column",children:[f.jsx("div",{id:"header",children:f.jsx("h1",{children:"Ranking Femenino"})}),f.jsxs("div",{className:"select-container",children:[f.jsx("div",{className:"arrow-bounce",children:f.jsx(lw,{color:"green",size:24})}),f.jsx(pw,{selectedCategory:r,onCategoryChange:c,categories:s,placeholder:"Selecciona una categoría"})]}),f.jsxs("div",{id:"leaderboard",children:[f.jsx("div",{className:"ribbon"}),f.jsx("table",{children:f.jsx("tbody",{children:o.slice(0,5).map((u,d)=>f.jsxs("tr",{className:d===0?"highlight-row":"",children:[f.jsx("td",{className:"number",children:d+1}),f.jsx("td",{className:"name",children:u.name}),f.jsxs("td",{className:"points",children:[u.points,d===0&&f.jsx("img",{className:"gold-medal",src:"https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true",alt:"gold medal"})]})]},u.id))})}),f.jsx("button",{className:"ver-mas-btn",onClick:a,children:"Ver más"})]}),f.jsx(Vh,{isOpen:e,onClose:l,participants:o})]})},jA=()=>{const{jugadores:t}=E.useContext(Hn),[e,n]=E.useState(!1),[r,i]=E.useState("Septima"),s=[...new Set(t.filter(u=>u.gender==="masculino").map(u=>u.category))],o=t.filter(u=>u.gender==="masculino"&&(r==="Selecciona una categoría"?u.category==="Septima":u.category===r)).sort((u,d)=>d.points-u.points).map((u,d)=>({...u,rank:d+1})),a=()=>n(!0),l=()=>n(!1),c=u=>i(u);return f.jsxs("div",{className:"ranking-column",children:[f.jsx("div",{id:"header",children:f.jsx("h1",{children:"Ranking Masculino"})}),f.jsxs("div",{className:"select-container",children:[f.jsx("div",{className:"arrow-bounce",children:f.jsx(lw,{color:"green",size:24})}),f.jsx(pw,{selectedCategory:r,onCategoryChange:c,categories:s,placeholder:"Selecciona una categoría"})]}),f.jsxs("div",{id:"leaderboard",children:[f.jsx("div",{className:"ribbon"}),f.jsx("table",{children:f.jsx("tbody",{children:o.slice(0,5).map((u,d)=>f.jsxs("tr",{className:d===0?"highlight-row":"",children:[f.jsx("td",{className:"number",children:d+1}),f.jsx("td",{className:"name",children:u.name}),f.jsxs("td",{className:"points",children:[u.points,d===0&&f.jsx("img",{className:"gold-medal",src:"https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true",alt:"gold medal"})]})]},u.id))})}),f.jsx("button",{className:"ver-mas-btn",onClick:a,children:"Ver más"})]}),f.jsx(Vh,{isOpen:e,onClose:l,participants:o})]})},FA=()=>f.jsxs("div",{className:"ranking-container",children:[f.jsx(MA,{}),f.jsx(jA,{})]}),UA=()=>f.jsxs("div",{children:[f.jsx(rv,{}),f.jsx(dA,{}),f.jsx(LA,{}),f.jsx(OA,{}),f.jsx(DA,{}),f.jsx("div",{className:"rankings-container",children:f.jsx("div",{className:"ranking-container",children:f.jsx(FA,{})})})]}),zA=()=>{const t=ev(),e=new Dt,n=async()=>{try{const i=(await sP(nw,e)).user;console.log("User Info:",i),t("/admin")}catch(r){console.error("Error al iniciar sesión:",r.message)}};return f.jsxs("div",{className:"admin-login-container",children:[f.jsx("h1",{className:"admin-login-title",children:"Admin Login"}),f.jsxs("button",{className:"admin-login-button",onClick:n,children:[f.jsx(IA,{className:"admin-google-icon"}),f.jsx("span",{children:"Login with Google"})]})]})},mw=({onClick:t})=>f.jsx("div",{className:"carga-banner-card",onClick:t,children:f.jsx("h1",{className:"carga-banner-text",children:"Carga de banner"})});mw.propTypes={onClick:L.func.isRequired};const gw=({onClick:t})=>f.jsx("div",{className:"agenda-torneo-card",onClick:t,children:f.jsx("h1",{className:"agenda-torneo-text",children:"Agendar Torneo"})});gw.propTypes={onClick:L.func.isRequired};const _w=({onClick:t})=>f.jsx("div",{className:"agregar-jugador-card",onClick:t,children:f.jsx("h1",{className:"agregar-jugador-text",children:"Agregar Jugador"})});_w.propTypes={onClick:L.func.isRequired};const vw=({onClick:t})=>f.jsx("button",{className:"agregar-club-button",onClick:t,children:"AGREGAR CLUB"});vw.propTypes={onClick:L.func.isRequired};const yw=({onClose:t})=>{const[e,n]=E.useState(""),[r,i]=E.useState(null),[s,o]=E.useState(""),a=u=>{u.target.files.length>0&&i(u.target.files[0])},l=async u=>{if(u.preventDefault(),!r){alert("Por favor, seleccione una imagen.");return}try{const d=Tl(Nl,`banners/${r.name}`);await Sl(d,r);const h=await Il(d),_=He(Ge,"banners/");await Eh(_,{title:e,photoURL:h,link:s}),alert("Banner guardado con éxito"),t()}catch(d){console.error("Error al guardar el banner:",d),alert("Hubo un error al guardar el banner.")}},c=u=>{u.target.classList.contains("banner-modal-overlay")&&t()};return f.jsx("div",{className:"banner-modal-overlay",onClick:c,children:f.jsxs("div",{className:"banner-modal-content",children:[f.jsx("h2",{children:"Cargar Banner"}),f.jsxs("form",{className:"banner-form",onSubmit:l,children:[f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"title",children:"Título"}),f.jsx("input",{id:"title",type:"text",value:e,onChange:u=>n(u.target.value),placeholder:"Ingrese el título"})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"photo",children:"Banner"}),f.jsx("input",{id:"photo",type:"file",accept:"image/*",onChange:a})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"link",children:"Link"}),f.jsx("input",{id:"link",type:"text",value:s,onChange:u=>o(u.target.value),placeholder:"Ingrese el enlace"})]}),f.jsxs("div",{className:"form-actions",children:[f.jsx("button",{type:"submit",children:"Guardar"}),f.jsx("button",{type:"button",onClick:t,children:"Cancelar"})]})]})]})})};yw.propTypes={onClose:L.func.isRequired};const ww=({onClose:t})=>{const[e,n]=E.useState(""),[r,i]=E.useState(""),[s,o]=E.useState(""),[a,l]=E.useState(""),[c,u]=E.useState(""),[d,h]=E.useState(null),_=p=>{p.target.files.length>0&&h(p.target.files[0])},v=p=>{if(!p)return"";const[g,y,S]=p.split("-");return`${S}/${y}/${g}`},w=(p,g)=>new Date(`${p}T${g}`)>=new Date,C=async p=>{if(p.preventDefault(),!e||!r||!s||!a||!c||!d){alert("Por favor, complete todos los campos y seleccione un archivo.");return}if(!w(a,c)){alert("La fecha y hora del torneo no pueden ser anteriores a la fecha y hora actual.");return}try{const g=Tl(Nl,`torneos/${d.name}`);await Sl(g,d);const y=await Il(g),S=He(Ge,"torneos/");await Eh(S,{nombre:e,ubicacion:r,telefono:s,fecha:v(a),hora:c,archivoURL:y}),alert("Torneo guardado con éxito"),t()}catch(g){console.error("Error al guardar el torneo:",g),alert("Hubo un error al guardar el torneo.")}},m=p=>{p.target.classList.contains("agenda-torneo-modal-overlay")&&t()};return f.jsx("div",{className:"agenda-torneo-modal-overlay",onClick:m,children:f.jsxs("div",{className:"agenda-torneo-modal-content",children:[f.jsx("button",{className:"modal-close",onClick:t,children:"×"}),f.jsx("h2",{children:"Agendar Torneo"}),f.jsxs("form",{className:"agenda-torneo-form",onSubmit:C,children:[f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"nombre",children:"Nombre del Torneo"}),f.jsx("input",{id:"nombre",type:"text",value:e,onChange:p=>n(p.target.value),placeholder:"Ingrese el nombre del torneo",required:!0})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"ubicacion",children:"Ubicación"}),f.jsx("input",{id:"ubicacion",type:"text",value:r,onChange:p=>i(p.target.value),placeholder:"Ingrese la ubicación",required:!0})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"telefono",children:"Teléfono"}),f.jsx("input",{id:"telefono",type:"text",value:s,onChange:p=>o(p.target.value),placeholder:"Ingrese el teléfono",required:!0})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"fecha",children:"Fecha"}),f.jsx("input",{id:"fecha",type:"date",value:a,onChange:p=>l(p.target.value),required:!0})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"hora",children:"Hora"}),f.jsx("input",{id:"hora",type:"time",value:c,onChange:p=>u(p.target.value),required:!0})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"archivo",children:"Archivo"}),f.jsx("input",{id:"archivo",type:"file",accept:"application/pdf, image/*",onChange:_,required:!0})]}),f.jsxs("div",{className:"form-actions",children:[f.jsx("button",{className:"save-button",type:"submit",children:"Guardar"}),f.jsx("button",{className:"cancel-button",type:"button",onClick:t,children:"Cancelar"})]})]})]})})};ww.propTypes={onClose:L.func.isRequired};const Ew=({onClose:t,editPlayer:e,setEditPlayer:n,jugadores:r,setJugadores:i})=>{const[s,o]=E.useState(e?e.name:""),[a,l]=E.useState(null),[c,u]=E.useState(e?e.points:""),[d,h]=E.useState(e?e.gender:""),[_,v]=E.useState(e?e.category:""),[w,C]=E.useState(null);E.useEffect(()=>{(async()=>{try{const S=He(Ge,"jugadores/"),N=(await Ch(S)).val()||{},R=Object.keys(N).map(A=>N[A].id),j=R.length>0?Math.max(...R):0;C(j+1)}catch(S){console.error("Error al obtener el siguiente ID:",S)}})()},[]);const m=async y=>{y.preventDefault();const S=c.trim()===""?0:parseInt(c,10);if(!s||!a||!d||!_){alert("Nombre, foto, género y categoría son obligatorios.");return}if(isNaN(S)||S<0){alert("Los puntos deben ser un número positivo.");return}try{const k=Tl(Nl,`jugadores/${a.name}`);await Sl(k,a);const N=await Il(k);if(e){const R=He(Ge,`jugadores/${e.id}`);await Ra(R,{id:e.id,name:s,points:S,gender:d,category:_,photoURL:N});const j={...r};j[e.id]={id:e.id,name:s,points:S,gender:d,category:_,photoURL:N},i(j),alert("Jugador actualizado con éxito"),n(null)}else{const R=He(Ge,`jugadores/${w}`);await Ra(R,{id:w,name:s,points:S,gender:d,category:_,photoURL:N});const j={...r};j[w]={id:w,name:s,points:S,gender:d,category:_,photoURL:N},i(j),alert("Jugador guardado con éxito")}t()}catch(k){console.error("Error al guardar el jugador:",k),alert("Hubo un error al guardar el jugador.")}},p=y=>{y.target.classList.contains("agregar-jugador-modal-overlay")&&t()},g=y=>{l(y.target.files[0])};return f.jsx("div",{className:"agregar-jugador-modal-overlay",onClick:p,children:f.jsxs("div",{className:"agregar-jugador-modal-content",children:[f.jsx("button",{className:"modal-close",onClick:t,children:"×"}),f.jsx("h2",{children:e?"Editar Jugador":"Agregar Jugador"}),f.jsxs("form",{className:"agregar-jugador-form",onSubmit:m,children:[f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"name",children:"Nombre del Jugador"}),f.jsx("input",{id:"name",type:"text",value:s,onChange:y=>o(y.target.value),placeholder:"Ingrese el nombre del jugador",required:!0})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"photo",children:"Foto del Jugador"}),f.jsx("input",{id:"photo",type:"file",accept:"image/*",onChange:g,required:!e})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"points",children:"Puntos"}),f.jsx("input",{id:"points",type:"number",value:c,onChange:y=>u(y.target.value),placeholder:"Ingrese los puntos",min:"0"})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"gender",children:"Género"}),f.jsxs("select",{id:"gender",value:d,onChange:y=>h(y.target.value),required:!0,children:[f.jsx("option",{value:"",children:"Seleccione un género"}),f.jsx("option",{value:"masculino",children:"Masculino"}),f.jsx("option",{value:"femenino",children:"Femenino"})]})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"category",children:"Categoría"}),f.jsxs("select",{id:"category",value:_,onChange:y=>v(y.target.value),required:!0,children:[f.jsx("option",{value:"",children:"Seleccione una categoría"}),f.jsx("option",{value:"Primera",children:"Primera"}),f.jsx("option",{value:"Segunda",children:"Segunda"}),f.jsx("option",{value:"Tercera",children:"Tercera"}),f.jsx("option",{value:"Cuarta",children:"Cuarta"}),f.jsx("option",{value:"Quinta",children:"Quinta"}),f.jsx("option",{value:"Sexta",children:"Sexta"}),f.jsx("option",{value:"Septima",children:"Séptima"}),f.jsx("option",{value:"OctavaA",children:"Octava A"}),f.jsx("option",{value:"OctavaB",children:"Octava B"})]})]}),f.jsxs("div",{className:"form-actions",children:[f.jsx("button",{className:"save-button",type:"submit",children:"Guardar"}),f.jsx("button",{className:"cancel-button",type:"button",onClick:t,children:"Cancelar"})]})]})]})})};Ew.propTypes={onClose:L.func.isRequired,editPlayer:L.object,setEditPlayer:L.func,jugadores:L.object,setJugadores:L.func};const Cw=({onClose:t})=>{const[e,n]=E.useState(""),[r,i]=E.useState(null),[s,o]=E.useState(""),[a,l]=E.useState(""),c=h=>{h.target.files.length>0&&i(h.target.files[0])},u=async h=>{if(h.preventDefault(),!r){alert("Por favor, seleccione un logo.");return}try{const _=Tl(Nl,`club-logos/${r.name}`);await Sl(_,r);const v=await Il(_),w=He(Ge,"clubs/");await Eh(w,{name:e,logoURL:v,location:s,phone:a}),alert("Club guardado con éxito"),t()}catch(_){console.error("Error al guardar el club:",_),alert("Hubo un error al guardar el club.")}},d=h=>{h.target.classList.contains("agregar-club-modal-overlay")&&t()};return f.jsx("div",{className:"agregar-club-modal-overlay",onClick:d,children:f.jsxs("div",{className:"agregar-club-modal-content",children:[f.jsx("button",{className:"modal-close",onClick:t,children:"×"}),f.jsx("h2",{children:"Agregar Club"}),f.jsxs("form",{className:"agregar-club-form",onSubmit:u,children:[f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"clubName",children:"Nombre del Club"}),f.jsx("input",{id:"clubName",type:"text",value:e,onChange:h=>n(h.target.value),placeholder:"Ingrese el nombre del club",required:!0})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"clubLogo",children:"Logo del Club"}),f.jsx("input",{id:"clubLogo",type:"file",accept:"image/*",onChange:c,required:!0})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"clubLocation",children:"Ubicación del Club"}),f.jsx("input",{id:"clubLocation",type:"text",value:s,onChange:h=>o(h.target.value),placeholder:"Ingrese la ubicación del club",required:!0})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"clubPhone",children:"Teléfono del Club"}),f.jsx("input",{id:"clubPhone",type:"text",value:a,onChange:h=>l(h.target.value),placeholder:"Ingrese el teléfono del club",required:!0})]}),f.jsxs("div",{className:"form-actions",children:[f.jsx("button",{className:"save-button",type:"submit",children:"Guardar"}),f.jsx("button",{className:"cancel-button",type:"button",onClick:t,children:"Cancelar"})]})]})]})})};Cw.propTypes={onClose:L.func.isRequired};var Sw={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(s=i(s,r(a)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var a in s)e.call(s,a)&&s[a]&&(o=i(o,a));return o}function i(s,o){return o?s?s+" "+o:s+o:s}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(Sw);var BA=Sw.exports;const Ec=zu(BA),$A=()=>{const{updateJugadores:t,jugadores:e}=E.useContext(Hn),[n,r]=E.useState([]),[i,s]=E.useState(""),[o,a]=E.useState(""),[l,c]=E.useState(""),[u,d]=E.useState(null),[h,_]=E.useState(!1),[v,w]=E.useState(""),[C,m]=E.useState(null);E.useEffect(()=>{S(o,i,l)},[i,o,l,e]);const p=D=>{s(D.target.value)},g=D=>{a(D)},y=D=>{c(D)},S=(D,Se,$e)=>{let xe=Object.keys(e).map(J=>({id:e[J].id,...e[J]})).filter(J=>J.name.toLowerCase().includes(Se.toLowerCase()));D&&(xe=xe.filter(J=>J.gender===D)),$e==="greater"?xe=xe.filter(J=>J.points>0).sort((J,Bt)=>Bt.points-J.points):$e==="less"?xe=xe.filter(J=>J.points>0).sort((J,Bt)=>J.points-Bt.points):$e==="zero"&&(xe=xe.filter(J=>J.points===0).sort((J,Bt)=>J.name.localeCompare(Bt.name))),r(xe)},k=D=>{const{name:Se,value:$e}=D.target;u&&d(We=>({...We,[Se]:$e}))},N=D=>{d({...D})},R=()=>{if(u){const D=He(Ge,`jugadores/${u.id}`);yN(D,{...u}).then(()=>{const Se={...e};Se[u.id]={...u},t(Se),d(null),S(o,i,l)}).catch(Se=>{console.error("Error updating player: ",Se),w("Error al guardar los cambios.")})}},j=D=>{if(m(D),window.confirm(`¿Estás seguro de que deseas eliminar el jugador con ID ${D}?`)){console.log("ID del jugador a eliminar:",D),console.log("Datos en el contexto:",e);const $e=He(Ge,`jugadores/${D}`);_(!0),Ch($e).then(We=>{if(We.exists())return console.log("Jugador encontrado en Firebase:",We.val()),Uy($e);throw new Error("El jugador no existe.")}).then(()=>{console.log("Jugador eliminado con éxito.");const We=Object.keys(e).filter(xe=>xe!==D).reduce((xe,J)=>(xe[J]=e[J],xe),{});t(We),localStorage.setItem("jugadores",JSON.stringify(We)),S(o,i,l),m(null)}).catch(We=>{console.error("Error deleting player:",We),w(`Error al eliminar el jugador: ${We.message}`)}).finally(()=>{_(!1)})}},A=()=>{d(null)};return f.jsxs("div",{className:"player-table-container",children:[f.jsxs("div",{className:"controls",children:[f.jsxs("div",{className:"search-bar",children:[f.jsx("input",{type:"text",value:i,onChange:p,placeholder:"Buscar por nombre..."}),f.jsx(PA,{className:"search-icon"})]}),f.jsxs("div",{className:"gender-buttons",children:[f.jsxs("button",{className:Ec("filter-button",{active:o==="masculino"}),onClick:()=>g("masculino"),children:[f.jsx(RA,{})," Masculino"]}),f.jsxs("button",{className:Ec("filter-button",{active:o==="femenino"}),onClick:()=>g("femenino"),children:[f.jsx(NA,{})," Femenino"]}),f.jsx("button",{className:Ec("filter-button",{active:!o}),onClick:()=>g(""),children:"Mostrar Todos"})]}),f.jsxs("div",{className:"points-buttons",children:[f.jsx("button",{className:`filter-button ${l==="greater"?"active":""}`,onClick:()=>y("greater"),children:"Mayor Puntaje"}),f.jsx("button",{className:`filter-button ${l==="less"?"active":""}`,onClick:()=>y("less"),children:"Menor Puntaje"}),f.jsx("button",{className:`filter-button ${l==="zero"?"active":""}`,onClick:()=>y("zero"),children:"Puntaje 0"}),f.jsx("button",{className:`filter-button ${l?"":"active"}`,onClick:()=>y(""),children:"Mostrar Todos"})]})]}),v&&f.jsx("div",{className:"error-message",children:v})," ",h&&f.jsx("div",{className:"loading-message",children:"Eliminando jugador..."})," ",f.jsxs("table",{className:"player-table",children:[f.jsx("thead",{children:f.jsxs("tr",{className:"juegadores",children:[f.jsx("th",{children:"Foto"}),f.jsx("th",{children:"Nombre"}),f.jsx("th",{children:"Puntos"}),f.jsx("th",{children:"Acciones"})]})}),f.jsx("tbody",{children:n.map((D,Se)=>f.jsxs("tr",{children:[f.jsx("td",{children:f.jsx("img",{src:D.photoURL,alt:D.name,className:"player-photo"})}),f.jsx("td",{children:u&&u.id===D.id?f.jsx("input",{type:"text",name:"name",value:u.name||"",onChange:k,className:"editable-input"}):D.name}),f.jsx("td",{children:u&&u.id===D.id?f.jsx("input",{type:"number",name:"points",value:u.points||"",onChange:k,className:"editable-input"}):D.points}),f.jsx("td",{children:u&&u.id===D.id?f.jsxs(f.Fragment,{children:[f.jsxs("button",{className:"action-button save",onClick:R,children:[f.jsx(xA,{})," Guardar"]}),f.jsxs("button",{className:"action-button cancel",onClick:A,children:[f.jsx(bA,{})," Cancelar"]})]}):f.jsxs(f.Fragment,{children:[f.jsxs("button",{className:"action-button edit",onClick:()=>N(D),children:[f.jsx(kA,{})," Editar"]}),f.jsxs("button",{className:"action-button delete",onClick:()=>j(D.id),children:[f.jsx(AA,{})," Eliminar"]})]})})]},`${D.id}-${Se}`))})]})]})},WA=()=>{const t=ev(),[e,n]=E.useState(!1),[r,i]=E.useState(!1),[s,o]=E.useState(!1),[a,l]=E.useState(!1);E.useEffect(()=>{const m=nw.onAuthStateChanged(p=>{p||t("/admin-login")});return()=>m()},[t]);const c=()=>n(!0),u=()=>n(!1),d=()=>i(!0),h=()=>i(!1),_=()=>o(!0),v=()=>o(!1),w=()=>l(!0),C=()=>l(!1);return f.jsxs("div",{children:[f.jsx("h1",{children:"Admin Panel"}),f.jsxs("div",{className:"admin-panel-buttons",children:[f.jsx(mw,{onClick:c}),f.jsx(gw,{onClick:d}),f.jsx(_w,{onClick:_}),f.jsx(vw,{onClick:w})," "]}),e&&f.jsx(yw,{onClose:u}),r&&f.jsx(ww,{onClose:h}),s&&f.jsx(Ew,{onClose:v}),a&&f.jsx(Cw,{onClose:C})," ",f.jsx($A,{})]})},VA=()=>f.jsx(uA,{children:f.jsxs(WS,{children:[f.jsx(rv,{}),f.jsxs(zS,{children:[f.jsx(Do,{path:"/",element:f.jsx(UA,{})}),f.jsx(Do,{path:"/admin-login",element:f.jsx(zA,{})}),f.jsx(Do,{path:"/admin",element:f.jsx(WA,{})})]})]})});H_(document.getElementById("root")).render(f.jsx(E.StrictMode,{children:f.jsx(VA,{})}));