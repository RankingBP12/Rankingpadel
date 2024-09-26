const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CargarBannerButton-Dy-YypyQ.js","assets/CargarBannerButton-D_Zn8y1v.css","assets/AgendaTorneoButton-BQKAEI9P.js","assets/AgendaTorneoButton-BiKADMRM.css","assets/AgregarJugadorButton-Brs_-LVL.js","assets/AgregarJugadorButton-BYSvOtnj.css","assets/AgregarClubButton-7fJCnKMA.js","assets/AgregarClubButton-BODDAt3a.css","assets/BannerModal-BI_F9MgU.js","assets/BannerModal-G-EZahX6.css","assets/AgendaTorneoModal-CNTZM2bC.js","assets/AgendaTorneoModal-BgQ-TdnX.css","assets/AgregarJugadorModal-DwDSSnAu.js","assets/AgregarJugadorModal-cqR10tkx.css","assets/AgregarClubModal-LI2K3cZZ.js","assets/AgregarClubModal-DZwRqFFw.css","assets/PlayerTable-os0HH38q.js","assets/PlayerTable-nM8KOFTZ.css"])))=>i.map(i=>d[i]);
function ww(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Tg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var kg={exports:{}},Pl={},Rg={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ro=Symbol.for("react.element"),Ew=Symbol.for("react.portal"),Cw=Symbol.for("react.fragment"),Sw=Symbol.for("react.strict_mode"),Iw=Symbol.for("react.profiler"),Tw=Symbol.for("react.provider"),kw=Symbol.for("react.context"),Rw=Symbol.for("react.forward_ref"),Nw=Symbol.for("react.suspense"),Aw=Symbol.for("react.memo"),Pw=Symbol.for("react.lazy"),Lf=Symbol.iterator;function xw(t){return t===null||typeof t!="object"?null:(t=Lf&&t[Lf]||t["@@iterator"],typeof t=="function"?t:null)}var Ng={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ag=Object.assign,Pg={};function ns(t,e,n){this.props=t,this.context=e,this.refs=Pg,this.updater=n||Ng}ns.prototype.isReactComponent={};ns.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ns.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function xg(){}xg.prototype=ns.prototype;function Rd(t,e,n){this.props=t,this.context=e,this.refs=Pg,this.updater=n||Ng}var Nd=Rd.prototype=new xg;Nd.constructor=Rd;Ag(Nd,ns.prototype);Nd.isPureReactComponent=!0;var Mf=Array.isArray,bg=Object.prototype.hasOwnProperty,Ad={current:null},Og={key:!0,ref:!0,__self:!0,__source:!0};function Dg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)bg.call(e,r)&&!Og.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ro,type:t,key:s,ref:o,props:i,_owner:Ad.current}}function bw(t,e){return{$$typeof:Ro,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Pd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ro}function Ow(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Uf=/\/+/g;function _u(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ow(""+t.key):e.toString(36)}function da(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ro:case Ew:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+_u(o,0):r,Mf(i)?(n="",t!=null&&(n=t.replace(Uf,"$&/")+"/"),da(i,e,n,"",function(u){return u})):i!=null&&(Pd(i)&&(i=bw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Uf,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Mf(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+_u(s,a);o+=da(s,e,n,l,i)}else if(l=xw(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+_u(s,a++),o+=da(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ho(t,e,n){if(t==null)return t;var r=[],i=0;return da(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Dw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dt={current:null},ha={transition:null},Lw={ReactCurrentDispatcher:dt,ReactCurrentBatchConfig:ha,ReactCurrentOwner:Ad};function Lg(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:Ho,forEach:function(t,e,n){Ho(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ho(t,function(){e++}),e},toArray:function(t){return Ho(t,function(e){return e})||[]},only:function(t){if(!Pd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};X.Component=ns;X.Fragment=Cw;X.Profiler=Iw;X.PureComponent=Rd;X.StrictMode=Sw;X.Suspense=Nw;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lw;X.act=Lg;X.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ag({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ad.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)bg.call(e,l)&&!Og.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ro,type:t.type,key:i,ref:s,props:r,_owner:o}};X.createContext=function(t){return t={$$typeof:kw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Tw,_context:t},t.Consumer=t};X.createElement=Dg;X.createFactory=function(t){var e=Dg.bind(null,t);return e.type=t,e};X.createRef=function(){return{current:null}};X.forwardRef=function(t){return{$$typeof:Rw,render:t}};X.isValidElement=Pd;X.lazy=function(t){return{$$typeof:Pw,_payload:{_status:-1,_result:t},_init:Dw}};X.memo=function(t,e){return{$$typeof:Aw,type:t,compare:e===void 0?null:e}};X.startTransition=function(t){var e=ha.transition;ha.transition={};try{t()}finally{ha.transition=e}};X.unstable_act=Lg;X.useCallback=function(t,e){return dt.current.useCallback(t,e)};X.useContext=function(t){return dt.current.useContext(t)};X.useDebugValue=function(){};X.useDeferredValue=function(t){return dt.current.useDeferredValue(t)};X.useEffect=function(t,e){return dt.current.useEffect(t,e)};X.useId=function(){return dt.current.useId()};X.useImperativeHandle=function(t,e,n){return dt.current.useImperativeHandle(t,e,n)};X.useInsertionEffect=function(t,e){return dt.current.useInsertionEffect(t,e)};X.useLayoutEffect=function(t,e){return dt.current.useLayoutEffect(t,e)};X.useMemo=function(t,e){return dt.current.useMemo(t,e)};X.useReducer=function(t,e,n){return dt.current.useReducer(t,e,n)};X.useRef=function(t){return dt.current.useRef(t)};X.useState=function(t){return dt.current.useState(t)};X.useSyncExternalStore=function(t,e,n){return dt.current.useSyncExternalStore(t,e,n)};X.useTransition=function(){return dt.current.useTransition()};X.version="18.3.1";Rg.exports=X;var j=Rg.exports;const Nn=Tg(j),Mw=ww({__proto__:null,default:Nn},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uw=j,Fw=Symbol.for("react.element"),jw=Symbol.for("react.fragment"),zw=Object.prototype.hasOwnProperty,Bw=Uw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$w={key:!0,ref:!0,__self:!0,__source:!0};function Mg(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)zw.call(e,r)&&!$w.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Fw,type:t,key:s,ref:o,props:i,_owner:Bw.current}}Pl.Fragment=jw;Pl.jsx=Mg;Pl.jsxs=Mg;kg.exports=Pl;var k=kg.exports,Ug={exports:{}},Pt={},Fg={exports:{}},jg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,A){var U=D.length;D.push(A);e:for(;0<U;){var W=U-1>>>1,z=D[W];if(0<i(z,A))D[W]=A,D[U]=z,U=W;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var A=D[0],U=D.pop();if(U!==A){D[0]=U;e:for(var W=0,z=D.length,V=z>>>1;W<V;){var B=2*(W+1)-1,F=D[B],q=B+1,ie=D[q];if(0>i(F,U))q<z&&0>i(ie,F)?(D[W]=ie,D[q]=U,W=q):(D[W]=F,D[B]=U,W=B);else if(q<z&&0>i(ie,U))D[W]=ie,D[q]=U,W=q;else break e}}return A}function i(D,A){var U=D.sortIndex-A.sortIndex;return U!==0?U:D.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,f=!1,p=!1,y=!1,T=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=D)r(u),A.sortIndex=A.expirationTime,e(l,A);else break;A=n(u)}}function C(D){if(y=!1,v(D),!p)if(n(l)!==null)p=!0,I(P);else{var A=n(u);A!==null&&E(C,A.startTime-D)}}function P(D,A){p=!1,y&&(y=!1,m(_),_=-1),f=!0;var U=h;try{for(v(A),d=n(l);d!==null&&(!(d.expirationTime>A)||D&&!b());){var W=d.callback;if(typeof W=="function"){d.callback=null,h=d.priorityLevel;var z=W(d.expirationTime<=A);A=t.unstable_now(),typeof z=="function"?d.callback=z:d===n(l)&&r(l),v(A)}else r(l);d=n(l)}if(d!==null)var V=!0;else{var B=n(u);B!==null&&E(C,B.startTime-A),V=!1}return V}finally{d=null,h=U,f=!1}}var S=!1,N=null,_=-1,w=5,R=-1;function b(){return!(t.unstable_now()-R<w)}function O(){if(N!==null){var D=t.unstable_now();R=D;var A=!0;try{A=N(!0,D)}finally{A?L():(S=!1,N=null)}}else S=!1}var L;if(typeof g=="function")L=function(){g(O)};else if(typeof MessageChannel<"u"){var x=new MessageChannel,M=x.port2;x.port1.onmessage=O,L=function(){M.postMessage(null)}}else L=function(){T(O,0)};function I(D){N=D,S||(S=!0,L())}function E(D,A){_=T(function(){D(t.unstable_now())},A)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){p||f||(p=!0,I(P))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var A=3;break;default:A=h}var U=h;h=A;try{return D()}finally{h=U}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,A){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var U=h;h=D;try{return A()}finally{h=U}},t.unstable_scheduleCallback=function(D,A,U){var W=t.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?W+U:W):U=W,D){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=U+z,D={id:c++,callback:A,priorityLevel:D,startTime:U,expirationTime:z,sortIndex:-1},U>W?(D.sortIndex=U,e(u,D),n(l)===null&&D===n(u)&&(y?(m(_),_=-1):y=!0,E(C,U-W))):(D.sortIndex=z,e(l,D),p||f||(p=!0,I(P))),D},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(D){var A=h;return function(){var U=h;h=A;try{return D.apply(this,arguments)}finally{h=U}}}})(jg);Fg.exports=jg;var Hw=Fg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ww=j,At=Hw;function $(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zg=new Set,Ks={};function ii(t,e){$i(t,e),$i(t+"Capture",e)}function $i(t,e){for(Ks[t]=e,t=0;t<e.length;t++)zg.add(e[t])}var xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cc=Object.prototype.hasOwnProperty,Vw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ff={},jf={};function Gw(t){return cc.call(jf,t)?!0:cc.call(Ff,t)?!1:Vw.test(t)?jf[t]=!0:(Ff[t]=!0,!1)}function qw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Kw(t,e,n,r){if(e===null||typeof e>"u"||qw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ht(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ke[t]=new ht(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ke[e]=new ht(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ke[t]=new ht(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ke[t]=new ht(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ke[t]=new ht(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ke[t]=new ht(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ke[t]=new ht(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ke[t]=new ht(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ke[t]=new ht(t,5,!1,t.toLowerCase(),null,!1,!1)});var xd=/[\-:]([a-z])/g;function bd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(xd,bd);Ke[e]=new ht(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(xd,bd);Ke[e]=new ht(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(xd,bd);Ke[e]=new ht(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ke[t]=new ht(t,1,!1,t.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ke[t]=new ht(t,1,!1,t.toLowerCase(),null,!0,!0)});function Od(t,e,n,r){var i=Ke.hasOwnProperty(e)?Ke[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Kw(e,n,i,r)&&(n=null),r||i===null?Gw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Fn=Ww.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wo=Symbol.for("react.element"),_i=Symbol.for("react.portal"),vi=Symbol.for("react.fragment"),Dd=Symbol.for("react.strict_mode"),dc=Symbol.for("react.profiler"),Bg=Symbol.for("react.provider"),$g=Symbol.for("react.context"),Ld=Symbol.for("react.forward_ref"),hc=Symbol.for("react.suspense"),fc=Symbol.for("react.suspense_list"),Md=Symbol.for("react.memo"),Gn=Symbol.for("react.lazy"),Hg=Symbol.for("react.offscreen"),zf=Symbol.iterator;function ps(t){return t===null||typeof t!="object"?null:(t=zf&&t[zf]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,vu;function Rs(t){if(vu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vu=e&&e[1]||""}return`
`+vu+t}var yu=!1;function wu(t,e){if(!t||yu)return"";yu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{yu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Rs(t):""}function Qw(t){switch(t.tag){case 5:return Rs(t.type);case 16:return Rs("Lazy");case 13:return Rs("Suspense");case 19:return Rs("SuspenseList");case 0:case 2:case 15:return t=wu(t.type,!1),t;case 11:return t=wu(t.type.render,!1),t;case 1:return t=wu(t.type,!0),t;default:return""}}function pc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vi:return"Fragment";case _i:return"Portal";case dc:return"Profiler";case Dd:return"StrictMode";case hc:return"Suspense";case fc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case $g:return(t.displayName||"Context")+".Consumer";case Bg:return(t._context.displayName||"Context")+".Provider";case Ld:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Md:return e=t.displayName||null,e!==null?e:pc(t.type)||"Memo";case Gn:e=t._payload,t=t._init;try{return pc(t(e))}catch{}}return null}function Yw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pc(e);case 8:return e===Dd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Wg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Jw(t){var e=Wg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Vo(t){t._valueTracker||(t._valueTracker=Jw(t))}function Vg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Wg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Pa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function mc(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Gg(t,e){e=e.checked,e!=null&&Od(t,"checked",e,!1)}function gc(t,e){Gg(t,e);var n=gr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?_c(t,e.type,n):e.hasOwnProperty("defaultValue")&&_c(t,e.type,gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $f(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function _c(t,e,n){(e!=="number"||Pa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ns=Array.isArray;function xi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+gr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function vc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error($(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error($(92));if(Ns(n)){if(1<n.length)throw Error($(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gr(n)}}function qg(t,e){var n=gr(e.value),r=gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Wf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Kg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Kg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Go,Qg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Go=Go||document.createElement("div"),Go.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Go.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Qs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var xs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xw=["Webkit","ms","Moz","O"];Object.keys(xs).forEach(function(t){Xw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),xs[e]=xs[t]})});function Yg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||xs.hasOwnProperty(t)&&xs[t]?(""+e).trim():e+"px"}function Jg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Yg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Zw=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wc(t,e){if(e){if(Zw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error($(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error($(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error($(61))}if(e.style!=null&&typeof e.style!="object")throw Error($(62))}}function Ec(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cc=null;function Ud(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sc=null,bi=null,Oi=null;function Vf(t){if(t=Po(t)){if(typeof Sc!="function")throw Error($(280));var e=t.stateNode;e&&(e=Ll(e),Sc(t.stateNode,t.type,e))}}function Xg(t){bi?Oi?Oi.push(t):Oi=[t]:bi=t}function Zg(){if(bi){var t=bi,e=Oi;if(Oi=bi=null,Vf(t),e)for(t=0;t<e.length;t++)Vf(e[t])}}function e_(t,e){return t(e)}function t_(){}var Eu=!1;function n_(t,e,n){if(Eu)return t(e,n);Eu=!0;try{return e_(t,e,n)}finally{Eu=!1,(bi!==null||Oi!==null)&&(t_(),Zg())}}function Ys(t,e){var n=t.stateNode;if(n===null)return null;var r=Ll(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error($(231,e,typeof n));return n}var Ic=!1;if(xn)try{var ms={};Object.defineProperty(ms,"passive",{get:function(){Ic=!0}}),window.addEventListener("test",ms,ms),window.removeEventListener("test",ms,ms)}catch{Ic=!1}function eE(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var bs=!1,xa=null,ba=!1,Tc=null,tE={onError:function(t){bs=!0,xa=t}};function nE(t,e,n,r,i,s,o,a,l){bs=!1,xa=null,eE.apply(tE,arguments)}function rE(t,e,n,r,i,s,o,a,l){if(nE.apply(this,arguments),bs){if(bs){var u=xa;bs=!1,xa=null}else throw Error($(198));ba||(ba=!0,Tc=u)}}function si(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function r_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gf(t){if(si(t)!==t)throw Error($(188))}function iE(t){var e=t.alternate;if(!e){if(e=si(t),e===null)throw Error($(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Gf(i),t;if(s===r)return Gf(i),e;s=s.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?t:e}function i_(t){return t=iE(t),t!==null?s_(t):null}function s_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=s_(t);if(e!==null)return e;t=t.sibling}return null}var o_=At.unstable_scheduleCallback,qf=At.unstable_cancelCallback,sE=At.unstable_shouldYield,oE=At.unstable_requestPaint,Ae=At.unstable_now,aE=At.unstable_getCurrentPriorityLevel,Fd=At.unstable_ImmediatePriority,a_=At.unstable_UserBlockingPriority,Oa=At.unstable_NormalPriority,lE=At.unstable_LowPriority,l_=At.unstable_IdlePriority,xl=null,fn=null;function uE(t){if(fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot(xl,t,void 0,(t.current.flags&128)===128)}catch{}}var Jt=Math.clz32?Math.clz32:hE,cE=Math.log,dE=Math.LN2;function hE(t){return t>>>=0,t===0?32:31-(cE(t)/dE|0)|0}var qo=64,Ko=4194304;function As(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Da(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=As(a):(s&=o,s!==0&&(r=As(s)))}else o=n&~i,o!==0?r=As(o):s!==0&&(r=As(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Jt(e),i=1<<n,r|=t[n],e&=~i;return r}function fE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Jt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=fE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function kc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function u_(){var t=qo;return qo<<=1,!(qo&4194240)&&(qo=64),t}function Cu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function No(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jt(e),t[e]=n}function mE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Jt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function jd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Jt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var se=0;function c_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var d_,zd,h_,f_,p_,Rc=!1,Qo=[],ir=null,sr=null,or=null,Js=new Map,Xs=new Map,Kn=[],gE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kf(t,e){switch(t){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":Js.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xs.delete(e.pointerId)}}function gs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Po(e),e!==null&&zd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function _E(t,e,n,r,i){switch(e){case"focusin":return ir=gs(ir,t,e,n,r,i),!0;case"dragenter":return sr=gs(sr,t,e,n,r,i),!0;case"mouseover":return or=gs(or,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Js.set(s,gs(Js.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Xs.set(s,gs(Xs.get(s)||null,t,e,n,r,i)),!0}return!1}function m_(t){var e=Dr(t.target);if(e!==null){var n=si(e);if(n!==null){if(e=n.tag,e===13){if(e=r_(n),e!==null){t.blockedOn=e,p_(t.priority,function(){h_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Nc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Cc=r,n.target.dispatchEvent(r),Cc=null}else return e=Po(n),e!==null&&zd(e),t.blockedOn=n,!1;e.shift()}return!0}function Qf(t,e,n){fa(t)&&n.delete(e)}function vE(){Rc=!1,ir!==null&&fa(ir)&&(ir=null),sr!==null&&fa(sr)&&(sr=null),or!==null&&fa(or)&&(or=null),Js.forEach(Qf),Xs.forEach(Qf)}function _s(t,e){t.blockedOn===e&&(t.blockedOn=null,Rc||(Rc=!0,At.unstable_scheduleCallback(At.unstable_NormalPriority,vE)))}function Zs(t){function e(i){return _s(i,t)}if(0<Qo.length){_s(Qo[0],t);for(var n=1;n<Qo.length;n++){var r=Qo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ir!==null&&_s(ir,t),sr!==null&&_s(sr,t),or!==null&&_s(or,t),Js.forEach(e),Xs.forEach(e),n=0;n<Kn.length;n++)r=Kn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Kn.length&&(n=Kn[0],n.blockedOn===null);)m_(n),n.blockedOn===null&&Kn.shift()}var Di=Fn.ReactCurrentBatchConfig,La=!0;function yE(t,e,n,r){var i=se,s=Di.transition;Di.transition=null;try{se=1,Bd(t,e,n,r)}finally{se=i,Di.transition=s}}function wE(t,e,n,r){var i=se,s=Di.transition;Di.transition=null;try{se=4,Bd(t,e,n,r)}finally{se=i,Di.transition=s}}function Bd(t,e,n,r){if(La){var i=Nc(t,e,n,r);if(i===null)bu(t,e,r,Ma,n),Kf(t,r);else if(_E(i,t,e,n,r))r.stopPropagation();else if(Kf(t,r),e&4&&-1<gE.indexOf(t)){for(;i!==null;){var s=Po(i);if(s!==null&&d_(s),s=Nc(t,e,n,r),s===null&&bu(t,e,r,Ma,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else bu(t,e,r,null,n)}}var Ma=null;function Nc(t,e,n,r){if(Ma=null,t=Ud(r),t=Dr(t),t!==null)if(e=si(t),e===null)t=null;else if(n=e.tag,n===13){if(t=r_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ma=t,null}function g_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(aE()){case Fd:return 1;case a_:return 4;case Oa:case lE:return 16;case l_:return 536870912;default:return 16}default:return 16}}var er=null,$d=null,pa=null;function __(){if(pa)return pa;var t,e=$d,n=e.length,r,i="value"in er?er.value:er.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return pa=i.slice(t,1<r?1-r:void 0)}function ma(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Yo(){return!0}function Yf(){return!1}function xt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Yo:Yf,this.isPropagationStopped=Yf,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Yo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Yo)},persist:function(){},isPersistent:Yo}),e}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hd=xt(rs),Ao=Ee({},rs,{view:0,detail:0}),EE=xt(Ao),Su,Iu,vs,bl=Ee({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==vs&&(vs&&t.type==="mousemove"?(Su=t.screenX-vs.screenX,Iu=t.screenY-vs.screenY):Iu=Su=0,vs=t),Su)},movementY:function(t){return"movementY"in t?t.movementY:Iu}}),Jf=xt(bl),CE=Ee({},bl,{dataTransfer:0}),SE=xt(CE),IE=Ee({},Ao,{relatedTarget:0}),Tu=xt(IE),TE=Ee({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),kE=xt(TE),RE=Ee({},rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),NE=xt(RE),AE=Ee({},rs,{data:0}),Xf=xt(AE),PE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function OE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=bE[t])?!!e[t]:!1}function Wd(){return OE}var DE=Ee({},Ao,{key:function(t){if(t.key){var e=PE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ma(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wd,charCode:function(t){return t.type==="keypress"?ma(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ma(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),LE=xt(DE),ME=Ee({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zf=xt(ME),UE=Ee({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wd}),FE=xt(UE),jE=Ee({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),zE=xt(jE),BE=Ee({},bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$E=xt(BE),HE=[9,13,27,32],Vd=xn&&"CompositionEvent"in window,Os=null;xn&&"documentMode"in document&&(Os=document.documentMode);var WE=xn&&"TextEvent"in window&&!Os,v_=xn&&(!Vd||Os&&8<Os&&11>=Os),ep=" ",tp=!1;function y_(t,e){switch(t){case"keyup":return HE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function w_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yi=!1;function VE(t,e){switch(t){case"compositionend":return w_(e);case"keypress":return e.which!==32?null:(tp=!0,ep);case"textInput":return t=e.data,t===ep&&tp?null:t;default:return null}}function GE(t,e){if(yi)return t==="compositionend"||!Vd&&y_(t,e)?(t=__(),pa=$d=er=null,yi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return v_&&e.locale!=="ko"?null:e.data;default:return null}}var qE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function np(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qE[t.type]:e==="textarea"}function E_(t,e,n,r){Xg(r),e=Ua(e,"onChange"),0<e.length&&(n=new Hd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ds=null,eo=null;function KE(t){b_(t,0)}function Ol(t){var e=Ci(t);if(Vg(e))return t}function QE(t,e){if(t==="change")return e}var C_=!1;if(xn){var ku;if(xn){var Ru="oninput"in document;if(!Ru){var rp=document.createElement("div");rp.setAttribute("oninput","return;"),Ru=typeof rp.oninput=="function"}ku=Ru}else ku=!1;C_=ku&&(!document.documentMode||9<document.documentMode)}function ip(){Ds&&(Ds.detachEvent("onpropertychange",S_),eo=Ds=null)}function S_(t){if(t.propertyName==="value"&&Ol(eo)){var e=[];E_(e,eo,t,Ud(t)),n_(KE,e)}}function YE(t,e,n){t==="focusin"?(ip(),Ds=e,eo=n,Ds.attachEvent("onpropertychange",S_)):t==="focusout"&&ip()}function JE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ol(eo)}function XE(t,e){if(t==="click")return Ol(e)}function ZE(t,e){if(t==="input"||t==="change")return Ol(e)}function eC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var tn=typeof Object.is=="function"?Object.is:eC;function to(t,e){if(tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!cc.call(e,i)||!tn(t[i],e[i]))return!1}return!0}function sp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function op(t,e){var n=sp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sp(n)}}function I_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?I_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function T_(){for(var t=window,e=Pa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Pa(t.document)}return e}function Gd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function tC(t){var e=T_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&I_(n.ownerDocument.documentElement,n)){if(r!==null&&Gd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=op(n,s);var o=op(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var nC=xn&&"documentMode"in document&&11>=document.documentMode,wi=null,Ac=null,Ls=null,Pc=!1;function ap(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pc||wi==null||wi!==Pa(r)||(r=wi,"selectionStart"in r&&Gd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ls&&to(Ls,r)||(Ls=r,r=Ua(Ac,"onSelect"),0<r.length&&(e=new Hd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=wi)))}function Jo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ei={animationend:Jo("Animation","AnimationEnd"),animationiteration:Jo("Animation","AnimationIteration"),animationstart:Jo("Animation","AnimationStart"),transitionend:Jo("Transition","TransitionEnd")},Nu={},k_={};xn&&(k_=document.createElement("div").style,"AnimationEvent"in window||(delete Ei.animationend.animation,delete Ei.animationiteration.animation,delete Ei.animationstart.animation),"TransitionEvent"in window||delete Ei.transitionend.transition);function Dl(t){if(Nu[t])return Nu[t];if(!Ei[t])return t;var e=Ei[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in k_)return Nu[t]=e[n];return t}var R_=Dl("animationend"),N_=Dl("animationiteration"),A_=Dl("animationstart"),P_=Dl("transitionend"),x_=new Map,lp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(t,e){x_.set(t,e),ii(e,[t])}for(var Au=0;Au<lp.length;Au++){var Pu=lp[Au],rC=Pu.toLowerCase(),iC=Pu[0].toUpperCase()+Pu.slice(1);Er(rC,"on"+iC)}Er(R_,"onAnimationEnd");Er(N_,"onAnimationIteration");Er(A_,"onAnimationStart");Er("dblclick","onDoubleClick");Er("focusin","onFocus");Er("focusout","onBlur");Er(P_,"onTransitionEnd");$i("onMouseEnter",["mouseout","mouseover"]);$i("onMouseLeave",["mouseout","mouseover"]);$i("onPointerEnter",["pointerout","pointerover"]);$i("onPointerLeave",["pointerout","pointerover"]);ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ii("onBeforeInput",["compositionend","keypress","textInput","paste"]);ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ps="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ps));function up(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,rE(r,e,void 0,t),t.currentTarget=null}function b_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;up(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;up(i,a,u),s=l}}}if(ba)throw t=Tc,ba=!1,Tc=null,t}function me(t,e){var n=e[Lc];n===void 0&&(n=e[Lc]=new Set);var r=t+"__bubble";n.has(r)||(O_(e,t,2,!1),n.add(r))}function xu(t,e,n){var r=0;e&&(r|=4),O_(n,t,r,e)}var Xo="_reactListening"+Math.random().toString(36).slice(2);function no(t){if(!t[Xo]){t[Xo]=!0,zg.forEach(function(n){n!=="selectionchange"&&(sC.has(n)||xu(n,!1,t),xu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xo]||(e[Xo]=!0,xu("selectionchange",!1,e))}}function O_(t,e,n,r){switch(g_(e)){case 1:var i=yE;break;case 4:i=wE;break;default:i=Bd}n=i.bind(null,e,n,t),i=void 0,!Ic||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function bu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Dr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}n_(function(){var u=s,c=Ud(n),d=[];e:{var h=x_.get(t);if(h!==void 0){var f=Hd,p=t;switch(t){case"keypress":if(ma(n)===0)break e;case"keydown":case"keyup":f=LE;break;case"focusin":p="focus",f=Tu;break;case"focusout":p="blur",f=Tu;break;case"beforeblur":case"afterblur":f=Tu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Jf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=SE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=FE;break;case R_:case N_:case A_:f=kE;break;case P_:f=zE;break;case"scroll":f=EE;break;case"wheel":f=$E;break;case"copy":case"cut":case"paste":f=NE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Zf}var y=(e&4)!==0,T=!y&&t==="scroll",m=y?h!==null?h+"Capture":null:h;y=[];for(var g=u,v;g!==null;){v=g;var C=v.stateNode;if(v.tag===5&&C!==null&&(v=C,m!==null&&(C=Ys(g,m),C!=null&&y.push(ro(g,C,v)))),T)break;g=g.return}0<y.length&&(h=new f(h,p,null,n,c),d.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",h&&n!==Cc&&(p=n.relatedTarget||n.fromElement)&&(Dr(p)||p[bn]))break e;if((f||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,f?(p=n.relatedTarget||n.toElement,f=u,p=p?Dr(p):null,p!==null&&(T=si(p),p!==T||p.tag!==5&&p.tag!==6)&&(p=null)):(f=null,p=u),f!==p)){if(y=Jf,C="onMouseLeave",m="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=Zf,C="onPointerLeave",m="onPointerEnter",g="pointer"),T=f==null?h:Ci(f),v=p==null?h:Ci(p),h=new y(C,g+"leave",f,n,c),h.target=T,h.relatedTarget=v,C=null,Dr(c)===u&&(y=new y(m,g+"enter",p,n,c),y.target=v,y.relatedTarget=T,C=y),T=C,f&&p)t:{for(y=f,m=p,g=0,v=y;v;v=fi(v))g++;for(v=0,C=m;C;C=fi(C))v++;for(;0<g-v;)y=fi(y),g--;for(;0<v-g;)m=fi(m),v--;for(;g--;){if(y===m||m!==null&&y===m.alternate)break t;y=fi(y),m=fi(m)}y=null}else y=null;f!==null&&cp(d,h,f,y,!1),p!==null&&T!==null&&cp(d,T,p,y,!0)}}e:{if(h=u?Ci(u):window,f=h.nodeName&&h.nodeName.toLowerCase(),f==="select"||f==="input"&&h.type==="file")var P=QE;else if(np(h))if(C_)P=ZE;else{P=JE;var S=YE}else(f=h.nodeName)&&f.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=XE);if(P&&(P=P(t,u))){E_(d,P,n,c);break e}S&&S(t,h,u),t==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&_c(h,"number",h.value)}switch(S=u?Ci(u):window,t){case"focusin":(np(S)||S.contentEditable==="true")&&(wi=S,Ac=u,Ls=null);break;case"focusout":Ls=Ac=wi=null;break;case"mousedown":Pc=!0;break;case"contextmenu":case"mouseup":case"dragend":Pc=!1,ap(d,n,c);break;case"selectionchange":if(nC)break;case"keydown":case"keyup":ap(d,n,c)}var N;if(Vd)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else yi?y_(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(v_&&n.locale!=="ko"&&(yi||_!=="onCompositionStart"?_==="onCompositionEnd"&&yi&&(N=__()):(er=c,$d="value"in er?er.value:er.textContent,yi=!0)),S=Ua(u,_),0<S.length&&(_=new Xf(_,t,null,n,c),d.push({event:_,listeners:S}),N?_.data=N:(N=w_(n),N!==null&&(_.data=N)))),(N=WE?VE(t,n):GE(t,n))&&(u=Ua(u,"onBeforeInput"),0<u.length&&(c=new Xf("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=N))}b_(d,e)})}function ro(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ua(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ys(t,n),s!=null&&r.unshift(ro(t,s,i)),s=Ys(t,e),s!=null&&r.push(ro(t,s,i))),t=t.return}return r}function fi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function cp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ys(n,s),l!=null&&o.unshift(ro(n,l,a))):i||(l=Ys(n,s),l!=null&&o.push(ro(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var oC=/\r\n?/g,aC=/\u0000|\uFFFD/g;function dp(t){return(typeof t=="string"?t:""+t).replace(oC,`
`).replace(aC,"")}function Zo(t,e,n){if(e=dp(e),dp(t)!==e&&n)throw Error($(425))}function Fa(){}var xc=null,bc=null;function Oc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Dc=typeof setTimeout=="function"?setTimeout:void 0,lC=typeof clearTimeout=="function"?clearTimeout:void 0,hp=typeof Promise=="function"?Promise:void 0,uC=typeof queueMicrotask=="function"?queueMicrotask:typeof hp<"u"?function(t){return hp.resolve(null).then(t).catch(cC)}:Dc;function cC(t){setTimeout(function(){throw t})}function Ou(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Zs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Zs(e)}function ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function fp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var is=Math.random().toString(36).slice(2),cn="__reactFiber$"+is,io="__reactProps$"+is,bn="__reactContainer$"+is,Lc="__reactEvents$"+is,dC="__reactListeners$"+is,hC="__reactHandles$"+is;function Dr(t){var e=t[cn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[bn]||n[cn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fp(t);t!==null;){if(n=t[cn])return n;t=fp(t)}return e}t=n,n=t.parentNode}return null}function Po(t){return t=t[cn]||t[bn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ci(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error($(33))}function Ll(t){return t[io]||null}var Mc=[],Si=-1;function Cr(t){return{current:t}}function ge(t){0>Si||(t.current=Mc[Si],Mc[Si]=null,Si--)}function de(t,e){Si++,Mc[Si]=t.current,t.current=e}var _r={},tt=Cr(_r),_t=Cr(!1),Gr=_r;function Hi(t,e){var n=t.type.contextTypes;if(!n)return _r;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function vt(t){return t=t.childContextTypes,t!=null}function ja(){ge(_t),ge(tt)}function pp(t,e,n){if(tt.current!==_r)throw Error($(168));de(tt,e),de(_t,n)}function D_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error($(108,Yw(t)||"Unknown",i));return Ee({},n,r)}function za(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_r,Gr=tt.current,de(tt,t),de(_t,_t.current),!0}function mp(t,e,n){var r=t.stateNode;if(!r)throw Error($(169));n?(t=D_(t,e,Gr),r.__reactInternalMemoizedMergedChildContext=t,ge(_t),ge(tt),de(tt,t)):ge(_t),de(_t,n)}var wn=null,Ml=!1,Du=!1;function L_(t){wn===null?wn=[t]:wn.push(t)}function fC(t){Ml=!0,L_(t)}function Sr(){if(!Du&&wn!==null){Du=!0;var t=0,e=se;try{var n=wn;for(se=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}wn=null,Ml=!1}catch(i){throw wn!==null&&(wn=wn.slice(t+1)),o_(Fd,Sr),i}finally{se=e,Du=!1}}return null}var Ii=[],Ti=0,Ba=null,$a=0,Ot=[],Dt=0,qr=null,En=1,Cn="";function Pr(t,e){Ii[Ti++]=$a,Ii[Ti++]=Ba,Ba=t,$a=e}function M_(t,e,n){Ot[Dt++]=En,Ot[Dt++]=Cn,Ot[Dt++]=qr,qr=t;var r=En;t=Cn;var i=32-Jt(r)-1;r&=~(1<<i),n+=1;var s=32-Jt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,En=1<<32-Jt(e)+i|n<<i|r,Cn=s+t}else En=1<<s|n<<i|r,Cn=t}function qd(t){t.return!==null&&(Pr(t,1),M_(t,1,0))}function Kd(t){for(;t===Ba;)Ba=Ii[--Ti],Ii[Ti]=null,$a=Ii[--Ti],Ii[Ti]=null;for(;t===qr;)qr=Ot[--Dt],Ot[Dt]=null,Cn=Ot[--Dt],Ot[Dt]=null,En=Ot[--Dt],Ot[Dt]=null}var Rt=null,Tt=null,ve=!1,Kt=null;function U_(t,e){var n=Lt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function gp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rt=t,Tt=ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rt=t,Tt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=qr!==null?{id:En,overflow:Cn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Lt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rt=t,Tt=null,!0):!1;default:return!1}}function Uc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Fc(t){if(ve){var e=Tt;if(e){var n=e;if(!gp(t,e)){if(Uc(t))throw Error($(418));e=ar(n.nextSibling);var r=Rt;e&&gp(t,e)?U_(r,n):(t.flags=t.flags&-4097|2,ve=!1,Rt=t)}}else{if(Uc(t))throw Error($(418));t.flags=t.flags&-4097|2,ve=!1,Rt=t}}}function _p(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rt=t}function ea(t){if(t!==Rt)return!1;if(!ve)return _p(t),ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Oc(t.type,t.memoizedProps)),e&&(e=Tt)){if(Uc(t))throw F_(),Error($(418));for(;e;)U_(t,e),e=ar(e.nextSibling)}if(_p(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error($(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Tt=ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Tt=null}}else Tt=Rt?ar(t.stateNode.nextSibling):null;return!0}function F_(){for(var t=Tt;t;)t=ar(t.nextSibling)}function Wi(){Tt=Rt=null,ve=!1}function Qd(t){Kt===null?Kt=[t]:Kt.push(t)}var pC=Fn.ReactCurrentBatchConfig;function ys(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error($(284));if(!n._owner)throw Error($(290,t))}return t}function ta(t,e){throw t=Object.prototype.toString.call(e),Error($(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function vp(t){var e=t._init;return e(t._payload)}function j_(t){function e(m,g){if(t){var v=m.deletions;v===null?(m.deletions=[g],m.flags|=16):v.push(g)}}function n(m,g){if(!t)return null;for(;g!==null;)e(m,g),g=g.sibling;return null}function r(m,g){for(m=new Map;g!==null;)g.key!==null?m.set(g.key,g):m.set(g.index,g),g=g.sibling;return m}function i(m,g){return m=dr(m,g),m.index=0,m.sibling=null,m}function s(m,g,v){return m.index=v,t?(v=m.alternate,v!==null?(v=v.index,v<g?(m.flags|=2,g):v):(m.flags|=2,g)):(m.flags|=1048576,g)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,g,v,C){return g===null||g.tag!==6?(g=Bu(v,m.mode,C),g.return=m,g):(g=i(g,v),g.return=m,g)}function l(m,g,v,C){var P=v.type;return P===vi?c(m,g,v.props.children,C,v.key):g!==null&&(g.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Gn&&vp(P)===g.type)?(C=i(g,v.props),C.ref=ys(m,g,v),C.return=m,C):(C=Ca(v.type,v.key,v.props,null,m.mode,C),C.ref=ys(m,g,v),C.return=m,C)}function u(m,g,v,C){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=$u(v,m.mode,C),g.return=m,g):(g=i(g,v.children||[]),g.return=m,g)}function c(m,g,v,C,P){return g===null||g.tag!==7?(g=$r(v,m.mode,C,P),g.return=m,g):(g=i(g,v),g.return=m,g)}function d(m,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Bu(""+g,m.mode,v),g.return=m,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Wo:return v=Ca(g.type,g.key,g.props,null,m.mode,v),v.ref=ys(m,null,g),v.return=m,v;case _i:return g=$u(g,m.mode,v),g.return=m,g;case Gn:var C=g._init;return d(m,C(g._payload),v)}if(Ns(g)||ps(g))return g=$r(g,m.mode,v,null),g.return=m,g;ta(m,g)}return null}function h(m,g,v,C){var P=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:a(m,g,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Wo:return v.key===P?l(m,g,v,C):null;case _i:return v.key===P?u(m,g,v,C):null;case Gn:return P=v._init,h(m,g,P(v._payload),C)}if(Ns(v)||ps(v))return P!==null?null:c(m,g,v,C,null);ta(m,v)}return null}function f(m,g,v,C,P){if(typeof C=="string"&&C!==""||typeof C=="number")return m=m.get(v)||null,a(g,m,""+C,P);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Wo:return m=m.get(C.key===null?v:C.key)||null,l(g,m,C,P);case _i:return m=m.get(C.key===null?v:C.key)||null,u(g,m,C,P);case Gn:var S=C._init;return f(m,g,v,S(C._payload),P)}if(Ns(C)||ps(C))return m=m.get(v)||null,c(g,m,C,P,null);ta(g,C)}return null}function p(m,g,v,C){for(var P=null,S=null,N=g,_=g=0,w=null;N!==null&&_<v.length;_++){N.index>_?(w=N,N=null):w=N.sibling;var R=h(m,N,v[_],C);if(R===null){N===null&&(N=w);break}t&&N&&R.alternate===null&&e(m,N),g=s(R,g,_),S===null?P=R:S.sibling=R,S=R,N=w}if(_===v.length)return n(m,N),ve&&Pr(m,_),P;if(N===null){for(;_<v.length;_++)N=d(m,v[_],C),N!==null&&(g=s(N,g,_),S===null?P=N:S.sibling=N,S=N);return ve&&Pr(m,_),P}for(N=r(m,N);_<v.length;_++)w=f(N,m,_,v[_],C),w!==null&&(t&&w.alternate!==null&&N.delete(w.key===null?_:w.key),g=s(w,g,_),S===null?P=w:S.sibling=w,S=w);return t&&N.forEach(function(b){return e(m,b)}),ve&&Pr(m,_),P}function y(m,g,v,C){var P=ps(v);if(typeof P!="function")throw Error($(150));if(v=P.call(v),v==null)throw Error($(151));for(var S=P=null,N=g,_=g=0,w=null,R=v.next();N!==null&&!R.done;_++,R=v.next()){N.index>_?(w=N,N=null):w=N.sibling;var b=h(m,N,R.value,C);if(b===null){N===null&&(N=w);break}t&&N&&b.alternate===null&&e(m,N),g=s(b,g,_),S===null?P=b:S.sibling=b,S=b,N=w}if(R.done)return n(m,N),ve&&Pr(m,_),P;if(N===null){for(;!R.done;_++,R=v.next())R=d(m,R.value,C),R!==null&&(g=s(R,g,_),S===null?P=R:S.sibling=R,S=R);return ve&&Pr(m,_),P}for(N=r(m,N);!R.done;_++,R=v.next())R=f(N,m,_,R.value,C),R!==null&&(t&&R.alternate!==null&&N.delete(R.key===null?_:R.key),g=s(R,g,_),S===null?P=R:S.sibling=R,S=R);return t&&N.forEach(function(O){return e(m,O)}),ve&&Pr(m,_),P}function T(m,g,v,C){if(typeof v=="object"&&v!==null&&v.type===vi&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Wo:e:{for(var P=v.key,S=g;S!==null;){if(S.key===P){if(P=v.type,P===vi){if(S.tag===7){n(m,S.sibling),g=i(S,v.props.children),g.return=m,m=g;break e}}else if(S.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Gn&&vp(P)===S.type){n(m,S.sibling),g=i(S,v.props),g.ref=ys(m,S,v),g.return=m,m=g;break e}n(m,S);break}else e(m,S);S=S.sibling}v.type===vi?(g=$r(v.props.children,m.mode,C,v.key),g.return=m,m=g):(C=Ca(v.type,v.key,v.props,null,m.mode,C),C.ref=ys(m,g,v),C.return=m,m=C)}return o(m);case _i:e:{for(S=v.key;g!==null;){if(g.key===S)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(m,g.sibling),g=i(g,v.children||[]),g.return=m,m=g;break e}else{n(m,g);break}else e(m,g);g=g.sibling}g=$u(v,m.mode,C),g.return=m,m=g}return o(m);case Gn:return S=v._init,T(m,g,S(v._payload),C)}if(Ns(v))return p(m,g,v,C);if(ps(v))return y(m,g,v,C);ta(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(m,g.sibling),g=i(g,v),g.return=m,m=g):(n(m,g),g=Bu(v,m.mode,C),g.return=m,m=g),o(m)):n(m,g)}return T}var Vi=j_(!0),z_=j_(!1),Ha=Cr(null),Wa=null,ki=null,Yd=null;function Jd(){Yd=ki=Wa=null}function Xd(t){var e=Ha.current;ge(Ha),t._currentValue=e}function jc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Li(t,e){Wa=t,Yd=ki=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mt=!0),t.firstContext=null)}function Ft(t){var e=t._currentValue;if(Yd!==t)if(t={context:t,memoizedValue:e,next:null},ki===null){if(Wa===null)throw Error($(308));ki=t,Wa.dependencies={lanes:0,firstContext:t}}else ki=ki.next=t;return e}var Lr=null;function Zd(t){Lr===null?Lr=[t]:Lr.push(t)}function B_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Zd(e)):(n.next=i.next,i.next=n),e.interleaved=n,On(t,r)}function On(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qn=!1;function eh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function An(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function lr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,On(t,n)}return i=r.interleaved,i===null?(e.next=e,Zd(r)):(e.next=i.next,i.next=e),r.interleaved=e,On(t,n)}function ga(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jd(t,n)}}function yp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Va(t,e,n,r){var i=t.updateQueue;qn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,f=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=t,y=a;switch(h=e,f=n,y.tag){case 1:if(p=y.payload,typeof p=="function"){d=p.call(f,d,h);break e}d=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=y.payload,h=typeof p=="function"?p.call(f,d,h):p,h==null)break e;d=Ee({},d,h);break e;case 2:qn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else f={eventTime:f,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,l=d):c=c.next=f,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Qr|=o,t.lanes=o,t.memoizedState=d}}function wp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var xo={},pn=Cr(xo),so=Cr(xo),oo=Cr(xo);function Mr(t){if(t===xo)throw Error($(174));return t}function th(t,e){switch(de(oo,e),de(so,t),de(pn,xo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=yc(e,t)}ge(pn),de(pn,e)}function Gi(){ge(pn),ge(so),ge(oo)}function H_(t){Mr(oo.current);var e=Mr(pn.current),n=yc(e,t.type);e!==n&&(de(so,t),de(pn,n))}function nh(t){so.current===t&&(ge(pn),ge(so))}var ye=Cr(0);function Ga(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Lu=[];function rh(){for(var t=0;t<Lu.length;t++)Lu[t]._workInProgressVersionPrimary=null;Lu.length=0}var _a=Fn.ReactCurrentDispatcher,Mu=Fn.ReactCurrentBatchConfig,Kr=0,we=null,De=null,Be=null,qa=!1,Ms=!1,ao=0,mC=0;function Xe(){throw Error($(321))}function ih(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!tn(t[n],e[n]))return!1;return!0}function sh(t,e,n,r,i,s){if(Kr=s,we=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_a.current=t===null||t.memoizedState===null?yC:wC,t=n(r,i),Ms){s=0;do{if(Ms=!1,ao=0,25<=s)throw Error($(301));s+=1,Be=De=null,e.updateQueue=null,_a.current=EC,t=n(r,i)}while(Ms)}if(_a.current=Ka,e=De!==null&&De.next!==null,Kr=0,Be=De=we=null,qa=!1,e)throw Error($(300));return t}function oh(){var t=ao!==0;return ao=0,t}function ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?we.memoizedState=Be=t:Be=Be.next=t,Be}function jt(){if(De===null){var t=we.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var e=Be===null?we.memoizedState:Be.next;if(e!==null)Be=e,De=t;else{if(t===null)throw Error($(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Be===null?we.memoizedState=Be=t:Be=Be.next=t}return Be}function lo(t,e){return typeof e=="function"?e(t):e}function Uu(t){var e=jt(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=De,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Kr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,we.lanes|=c,Qr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,tn(r,e.memoizedState)||(mt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,we.lanes|=s,Qr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Fu(t){var e=jt(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);tn(s,e.memoizedState)||(mt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function W_(){}function V_(t,e){var n=we,r=jt(),i=e(),s=!tn(r.memoizedState,i);if(s&&(r.memoizedState=i,mt=!0),r=r.queue,ah(K_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,uo(9,q_.bind(null,n,r,i,e),void 0,null),He===null)throw Error($(349));Kr&30||G_(n,e,i)}return i}function G_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function q_(t,e,n,r){e.value=n,e.getSnapshot=r,Q_(e)&&Y_(t)}function K_(t,e,n){return n(function(){Q_(e)&&Y_(t)})}function Q_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!tn(t,n)}catch{return!0}}function Y_(t){var e=On(t,1);e!==null&&Xt(e,t,1,-1)}function Ep(t){var e=ln();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lo,lastRenderedState:t},e.queue=t,t=t.dispatch=vC.bind(null,we,t),[e.memoizedState,t]}function uo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function J_(){return jt().memoizedState}function va(t,e,n,r){var i=ln();we.flags|=t,i.memoizedState=uo(1|e,n,void 0,r===void 0?null:r)}function Ul(t,e,n,r){var i=jt();r=r===void 0?null:r;var s=void 0;if(De!==null){var o=De.memoizedState;if(s=o.destroy,r!==null&&ih(r,o.deps)){i.memoizedState=uo(e,n,s,r);return}}we.flags|=t,i.memoizedState=uo(1|e,n,s,r)}function Cp(t,e){return va(8390656,8,t,e)}function ah(t,e){return Ul(2048,8,t,e)}function X_(t,e){return Ul(4,2,t,e)}function Z_(t,e){return Ul(4,4,t,e)}function ev(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function tv(t,e,n){return n=n!=null?n.concat([t]):null,Ul(4,4,ev.bind(null,e,t),n)}function lh(){}function nv(t,e){var n=jt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ih(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function rv(t,e){var n=jt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ih(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function iv(t,e,n){return Kr&21?(tn(n,e)||(n=u_(),we.lanes|=n,Qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mt=!0),t.memoizedState=n)}function gC(t,e){var n=se;se=n!==0&&4>n?n:4,t(!0);var r=Mu.transition;Mu.transition={};try{t(!1),e()}finally{se=n,Mu.transition=r}}function sv(){return jt().memoizedState}function _C(t,e,n){var r=cr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ov(t))av(e,n);else if(n=B_(t,e,n,r),n!==null){var i=lt();Xt(n,t,r,i),lv(n,e,r)}}function vC(t,e,n){var r=cr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ov(t))av(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,tn(a,o)){var l=e.interleaved;l===null?(i.next=i,Zd(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=B_(t,e,i,r),n!==null&&(i=lt(),Xt(n,t,r,i),lv(n,e,r))}}function ov(t){var e=t.alternate;return t===we||e!==null&&e===we}function av(t,e){Ms=qa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function lv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jd(t,n)}}var Ka={readContext:Ft,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},yC={readContext:Ft,useCallback:function(t,e){return ln().memoizedState=[t,e===void 0?null:e],t},useContext:Ft,useEffect:Cp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,va(4194308,4,ev.bind(null,e,t),n)},useLayoutEffect:function(t,e){return va(4194308,4,t,e)},useInsertionEffect:function(t,e){return va(4,2,t,e)},useMemo:function(t,e){var n=ln();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ln();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=_C.bind(null,we,t),[r.memoizedState,t]},useRef:function(t){var e=ln();return t={current:t},e.memoizedState=t},useState:Ep,useDebugValue:lh,useDeferredValue:function(t){return ln().memoizedState=t},useTransition:function(){var t=Ep(!1),e=t[0];return t=gC.bind(null,t[1]),ln().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=we,i=ln();if(ve){if(n===void 0)throw Error($(407));n=n()}else{if(n=e(),He===null)throw Error($(349));Kr&30||G_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Cp(K_.bind(null,r,s,t),[t]),r.flags|=2048,uo(9,q_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ln(),e=He.identifierPrefix;if(ve){var n=Cn,r=En;n=(r&~(1<<32-Jt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ao++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=mC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},wC={readContext:Ft,useCallback:nv,useContext:Ft,useEffect:ah,useImperativeHandle:tv,useInsertionEffect:X_,useLayoutEffect:Z_,useMemo:rv,useReducer:Uu,useRef:J_,useState:function(){return Uu(lo)},useDebugValue:lh,useDeferredValue:function(t){var e=jt();return iv(e,De.memoizedState,t)},useTransition:function(){var t=Uu(lo)[0],e=jt().memoizedState;return[t,e]},useMutableSource:W_,useSyncExternalStore:V_,useId:sv,unstable_isNewReconciler:!1},EC={readContext:Ft,useCallback:nv,useContext:Ft,useEffect:ah,useImperativeHandle:tv,useInsertionEffect:X_,useLayoutEffect:Z_,useMemo:rv,useReducer:Fu,useRef:J_,useState:function(){return Fu(lo)},useDebugValue:lh,useDeferredValue:function(t){var e=jt();return De===null?e.memoizedState=t:iv(e,De.memoizedState,t)},useTransition:function(){var t=Fu(lo)[0],e=jt().memoizedState;return[t,e]},useMutableSource:W_,useSyncExternalStore:V_,useId:sv,unstable_isNewReconciler:!1};function Gt(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function zc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Fl={isMounted:function(t){return(t=t._reactInternals)?si(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=lt(),i=cr(t),s=An(r,i);s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,i),e!==null&&(Xt(e,t,i,r),ga(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=lt(),i=cr(t),s=An(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,i),e!==null&&(Xt(e,t,i,r),ga(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=lt(),r=cr(t),i=An(n,r);i.tag=2,e!=null&&(i.callback=e),e=lr(t,i,r),e!==null&&(Xt(e,t,r,n),ga(e,t,r))}};function Sp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!to(n,r)||!to(i,s):!0}function uv(t,e,n){var r=!1,i=_r,s=e.contextType;return typeof s=="object"&&s!==null?s=Ft(s):(i=vt(e)?Gr:tt.current,r=e.contextTypes,s=(r=r!=null)?Hi(t,i):_r),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Fl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ip(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Fl.enqueueReplaceState(e,e.state,null)}function Bc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},eh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ft(s):(s=vt(e)?Gr:tt.current,i.context=Hi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(zc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Fl.enqueueReplaceState(i,i.state,null),Va(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function qi(t,e){try{var n="",r=e;do n+=Qw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ju(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function $c(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var CC=typeof WeakMap=="function"?WeakMap:Map;function cv(t,e,n){n=An(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ya||(Ya=!0,Xc=r),$c(t,e)},n}function dv(t,e,n){n=An(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){$c(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){$c(t,e),typeof r!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Tp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new CC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=MC.bind(null,t,e,n),e.then(t,t))}function kp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Rp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=An(-1,1),e.tag=2,lr(n,e,1))),n.lanes|=1),t)}var SC=Fn.ReactCurrentOwner,mt=!1;function ot(t,e,n,r){e.child=t===null?z_(e,null,n,r):Vi(e,t.child,n,r)}function Np(t,e,n,r,i){n=n.render;var s=e.ref;return Li(e,i),r=sh(t,e,n,r,s,i),n=oh(),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dn(t,e,i)):(ve&&n&&qd(e),e.flags|=1,ot(t,e,r,i),e.child)}function Ap(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!gh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,hv(t,e,s,r,i)):(t=Ca(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:to,n(o,r)&&t.ref===e.ref)return Dn(t,e,i)}return e.flags|=1,t=dr(s,r),t.ref=e.ref,t.return=e,e.child=t}function hv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(to(s,r)&&t.ref===e.ref)if(mt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(mt=!0);else return e.lanes=t.lanes,Dn(t,e,i)}return Hc(t,e,n,r,i)}function fv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Ni,It),It|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,de(Ni,It),It|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(Ni,It),It|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,de(Ni,It),It|=r;return ot(t,e,i,n),e.child}function pv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Hc(t,e,n,r,i){var s=vt(n)?Gr:tt.current;return s=Hi(e,s),Li(e,i),n=sh(t,e,n,r,s,i),r=oh(),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dn(t,e,i)):(ve&&r&&qd(e),e.flags|=1,ot(t,e,n,i),e.child)}function Pp(t,e,n,r,i){if(vt(n)){var s=!0;za(e)}else s=!1;if(Li(e,i),e.stateNode===null)ya(t,e),uv(e,n,r),Bc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ft(u):(u=vt(n)?Gr:tt.current,u=Hi(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Ip(e,o,r,u),qn=!1;var h=e.memoizedState;o.state=h,Va(e,r,o,i),l=e.memoizedState,a!==r||h!==l||_t.current||qn?(typeof c=="function"&&(zc(e,n,c,r),l=e.memoizedState),(a=qn||Sp(e,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,$_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Gt(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ft(l):(l=vt(n)?Gr:tt.current,l=Hi(e,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Ip(e,o,r,l),qn=!1,h=e.memoizedState,o.state=h,Va(e,r,o,i);var p=e.memoizedState;a!==d||h!==p||_t.current||qn?(typeof f=="function"&&(zc(e,n,f,r),p=e.memoizedState),(u=qn||Sp(e,n,u,r,h,p,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,p,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,p,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=p),o.props=r,o.state=p,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Wc(t,e,n,r,s,i)}function Wc(t,e,n,r,i,s){pv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&mp(e,n,!1),Dn(t,e,s);r=e.stateNode,SC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Vi(e,t.child,null,s),e.child=Vi(e,null,a,s)):ot(t,e,a,s),e.memoizedState=r.state,i&&mp(e,n,!0),e.child}function mv(t){var e=t.stateNode;e.pendingContext?pp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&pp(t,e.context,!1),th(t,e.containerInfo)}function xp(t,e,n,r,i){return Wi(),Qd(i),e.flags|=256,ot(t,e,n,r),e.child}var Vc={dehydrated:null,treeContext:null,retryLane:0};function Gc(t){return{baseLanes:t,cachePool:null,transitions:null}}function gv(t,e,n){var r=e.pendingProps,i=ye.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),de(ye,i&1),t===null)return Fc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Bl(o,r,0,null),t=$r(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Gc(n),e.memoizedState=Vc,t):uh(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return IC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=dr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=dr(a,s):(s=$r(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Gc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Vc,r}return s=t.child,t=s.sibling,r=dr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function uh(t,e){return e=Bl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function na(t,e,n,r){return r!==null&&Qd(r),Vi(e,t.child,null,n),t=uh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function IC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ju(Error($(422))),na(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Bl({mode:"visible",children:r.children},i,0,null),s=$r(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Vi(e,t.child,null,o),e.child.memoizedState=Gc(o),e.memoizedState=Vc,s);if(!(e.mode&1))return na(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error($(419)),r=ju(s,r,void 0),na(t,e,o,r)}if(a=(o&t.childLanes)!==0,mt||a){if(r=He,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,On(t,i),Xt(r,t,i,-1))}return mh(),r=ju(Error($(421))),na(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=UC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Tt=ar(i.nextSibling),Rt=e,ve=!0,Kt=null,t!==null&&(Ot[Dt++]=En,Ot[Dt++]=Cn,Ot[Dt++]=qr,En=t.id,Cn=t.overflow,qr=e),e=uh(e,r.children),e.flags|=4096,e)}function bp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),jc(t.return,e,n)}function zu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function _v(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ot(t,e,r.children,n),r=ye.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&bp(t,n,e);else if(t.tag===19)bp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(de(ye,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ga(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),zu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ga(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}zu(e,!0,n,null,s);break;case"together":zu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ya(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Dn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error($(153));if(e.child!==null){for(t=e.child,n=dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function TC(t,e,n){switch(e.tag){case 3:mv(e),Wi();break;case 5:H_(e);break;case 1:vt(e.type)&&za(e);break;case 4:th(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;de(Ha,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(de(ye,ye.current&1),e.flags|=128,null):n&e.child.childLanes?gv(t,e,n):(de(ye,ye.current&1),t=Dn(t,e,n),t!==null?t.sibling:null);de(ye,ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return _v(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(ye,ye.current),r)break;return null;case 22:case 23:return e.lanes=0,fv(t,e,n)}return Dn(t,e,n)}var vv,qc,yv,wv;vv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qc=function(){};yv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Mr(pn.current);var s=null;switch(n){case"input":i=mc(t,i),r=mc(t,r),s=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),s=[];break;case"textarea":i=vc(t,i),r=vc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Fa)}wc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ks.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ks.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&me("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};wv=function(t,e,n,r){n!==r&&(e.flags|=4)};function ws(t,e){if(!ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ze(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function kC(t,e,n){var r=e.pendingProps;switch(Kd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(e),null;case 1:return vt(e.type)&&ja(),Ze(e),null;case 3:return r=e.stateNode,Gi(),ge(_t),ge(tt),rh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ea(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Kt!==null&&(td(Kt),Kt=null))),qc(t,e),Ze(e),null;case 5:nh(e);var i=Mr(oo.current);if(n=e.type,t!==null&&e.stateNode!=null)yv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error($(166));return Ze(e),null}if(t=Mr(pn.current),ea(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[cn]=e,r[io]=s,t=(e.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<Ps.length;i++)me(Ps[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":Bf(r,s),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},me("invalid",r);break;case"textarea":Hf(r,s),me("invalid",r)}wc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Zo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Zo(r.textContent,a,t),i=["children",""+a]):Ks.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&me("scroll",r)}switch(n){case"input":Vo(r),$f(r,s,!0);break;case"textarea":Vo(r),Wf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Fa)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Kg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[cn]=e,t[io]=r,vv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ec(n,r),n){case"dialog":me("cancel",t),me("close",t),i=r;break;case"iframe":case"object":case"embed":me("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ps.length;i++)me(Ps[i],t);i=r;break;case"source":me("error",t),i=r;break;case"img":case"image":case"link":me("error",t),me("load",t),i=r;break;case"details":me("toggle",t),i=r;break;case"input":Bf(t,r),i=mc(t,r),me("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),me("invalid",t);break;case"textarea":Hf(t,r),i=vc(t,r),me("invalid",t);break;default:i=r}wc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Jg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Qg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Qs(t,l):typeof l=="number"&&Qs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ks.hasOwnProperty(s)?l!=null&&s==="onScroll"&&me("scroll",t):l!=null&&Od(t,s,l,o))}switch(n){case"input":Vo(t),$f(t,r,!1);break;case"textarea":Vo(t),Wf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+gr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?xi(t,!!r.multiple,s,!1):r.defaultValue!=null&&xi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Fa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ze(e),null;case 6:if(t&&e.stateNode!=null)wv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error($(166));if(n=Mr(oo.current),Mr(pn.current),ea(e)){if(r=e.stateNode,n=e.memoizedProps,r[cn]=e,(s=r.nodeValue!==n)&&(t=Rt,t!==null))switch(t.tag){case 3:Zo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Zo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[cn]=e,e.stateNode=r}return Ze(e),null;case 13:if(ge(ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&Tt!==null&&e.mode&1&&!(e.flags&128))F_(),Wi(),e.flags|=98560,s=!1;else if(s=ea(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error($(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error($(317));s[cn]=e}else Wi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ze(e),s=!1}else Kt!==null&&(td(Kt),Kt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ye.current&1?Ue===0&&(Ue=3):mh())),e.updateQueue!==null&&(e.flags|=4),Ze(e),null);case 4:return Gi(),qc(t,e),t===null&&no(e.stateNode.containerInfo),Ze(e),null;case 10:return Xd(e.type._context),Ze(e),null;case 17:return vt(e.type)&&ja(),Ze(e),null;case 19:if(ge(ye),s=e.memoizedState,s===null)return Ze(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ws(s,!1);else{if(Ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ga(t),o!==null){for(e.flags|=128,ws(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return de(ye,ye.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ae()>Ki&&(e.flags|=128,r=!0,ws(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ga(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ws(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ve)return Ze(e),null}else 2*Ae()-s.renderingStartTime>Ki&&n!==1073741824&&(e.flags|=128,r=!0,ws(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ae(),e.sibling=null,n=ye.current,de(ye,r?n&1|2:n&1),e):(Ze(e),null);case 22:case 23:return ph(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?It&1073741824&&(Ze(e),e.subtreeFlags&6&&(e.flags|=8192)):Ze(e),null;case 24:return null;case 25:return null}throw Error($(156,e.tag))}function RC(t,e){switch(Kd(e),e.tag){case 1:return vt(e.type)&&ja(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Gi(),ge(_t),ge(tt),rh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return nh(e),null;case 13:if(ge(ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error($(340));Wi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(ye),null;case 4:return Gi(),null;case 10:return Xd(e.type._context),null;case 22:case 23:return ph(),null;case 24:return null;default:return null}}var ra=!1,et=!1,NC=typeof WeakSet=="function"?WeakSet:Set,G=null;function Ri(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(t,e,r)}else n.current=null}function Kc(t,e,n){try{n()}catch(r){Se(t,e,r)}}var Op=!1;function AC(t,e){if(xc=La,t=T_(),Gd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var f;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(f=d.firstChild)!==null;)h=d,d=f;for(;;){if(d===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(f=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(bc={focusedElem:t,selectionRange:n},La=!1,G=e;G!==null;)if(e=G,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,G=t;else for(;G!==null;){e=G;try{var p=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var y=p.memoizedProps,T=p.memoizedState,m=e.stateNode,g=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:Gt(e.type,y),T);m.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(C){Se(e,e.return,C)}if(t=e.sibling,t!==null){t.return=e.return,G=t;break}G=e.return}return p=Op,Op=!1,p}function Us(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Kc(e,n,s)}i=i.next}while(i!==r)}}function jl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Qc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ev(t){var e=t.alternate;e!==null&&(t.alternate=null,Ev(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[cn],delete e[io],delete e[Lc],delete e[dC],delete e[hC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Cv(t){return t.tag===5||t.tag===3||t.tag===4}function Dp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Cv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Fa));else if(r!==4&&(t=t.child,t!==null))for(Yc(t,e,n),t=t.sibling;t!==null;)Yc(t,e,n),t=t.sibling}function Jc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Jc(t,e,n),t=t.sibling;t!==null;)Jc(t,e,n),t=t.sibling}var Ve=null,qt=!1;function Wn(t,e,n){for(n=n.child;n!==null;)Sv(t,e,n),n=n.sibling}function Sv(t,e,n){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount(xl,n)}catch{}switch(n.tag){case 5:et||Ri(n,e);case 6:var r=Ve,i=qt;Ve=null,Wn(t,e,n),Ve=r,qt=i,Ve!==null&&(qt?(t=Ve,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ve.removeChild(n.stateNode));break;case 18:Ve!==null&&(qt?(t=Ve,n=n.stateNode,t.nodeType===8?Ou(t.parentNode,n):t.nodeType===1&&Ou(t,n),Zs(t)):Ou(Ve,n.stateNode));break;case 4:r=Ve,i=qt,Ve=n.stateNode.containerInfo,qt=!0,Wn(t,e,n),Ve=r,qt=i;break;case 0:case 11:case 14:case 15:if(!et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Kc(n,e,o),i=i.next}while(i!==r)}Wn(t,e,n);break;case 1:if(!et&&(Ri(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Se(n,e,a)}Wn(t,e,n);break;case 21:Wn(t,e,n);break;case 22:n.mode&1?(et=(r=et)||n.memoizedState!==null,Wn(t,e,n),et=r):Wn(t,e,n);break;default:Wn(t,e,n)}}function Lp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new NC),e.forEach(function(r){var i=FC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Wt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ve=a.stateNode,qt=!1;break e;case 3:Ve=a.stateNode.containerInfo,qt=!0;break e;case 4:Ve=a.stateNode.containerInfo,qt=!0;break e}a=a.return}if(Ve===null)throw Error($(160));Sv(s,o,i),Ve=null,qt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Se(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Iv(e,t),e=e.sibling}function Iv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wt(e,t),an(t),r&4){try{Us(3,t,t.return),jl(3,t)}catch(y){Se(t,t.return,y)}try{Us(5,t,t.return)}catch(y){Se(t,t.return,y)}}break;case 1:Wt(e,t),an(t),r&512&&n!==null&&Ri(n,n.return);break;case 5:if(Wt(e,t),an(t),r&512&&n!==null&&Ri(n,n.return),t.flags&32){var i=t.stateNode;try{Qs(i,"")}catch(y){Se(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Gg(i,s),Ec(a,o);var u=Ec(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Jg(i,d):c==="dangerouslySetInnerHTML"?Qg(i,d):c==="children"?Qs(i,d):Od(i,c,d,u)}switch(a){case"input":gc(i,s);break;case"textarea":qg(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?xi(i,!!s.multiple,f,!1):h!==!!s.multiple&&(s.defaultValue!=null?xi(i,!!s.multiple,s.defaultValue,!0):xi(i,!!s.multiple,s.multiple?[]:"",!1))}i[io]=s}catch(y){Se(t,t.return,y)}}break;case 6:if(Wt(e,t),an(t),r&4){if(t.stateNode===null)throw Error($(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){Se(t,t.return,y)}}break;case 3:if(Wt(e,t),an(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zs(e.containerInfo)}catch(y){Se(t,t.return,y)}break;case 4:Wt(e,t),an(t);break;case 13:Wt(e,t),an(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(hh=Ae())),r&4&&Lp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(et=(u=et)||c,Wt(e,t),et=u):Wt(e,t),an(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(G=t,c=t.child;c!==null;){for(d=G=c;G!==null;){switch(h=G,f=h.child,h.tag){case 0:case 11:case 14:case 15:Us(4,h,h.return);break;case 1:Ri(h,h.return);var p=h.stateNode;if(typeof p.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,p.props=e.memoizedProps,p.state=e.memoizedState,p.componentWillUnmount()}catch(y){Se(r,n,y)}}break;case 5:Ri(h,h.return);break;case 22:if(h.memoizedState!==null){Up(d);continue}}f!==null?(f.return=h,G=f):Up(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Yg("display",o))}catch(y){Se(t,t.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){Se(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Wt(e,t),an(t),r&4&&Lp(t);break;case 21:break;default:Wt(e,t),an(t)}}function an(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Cv(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Qs(i,""),r.flags&=-33);var s=Dp(t);Jc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Dp(t);Yc(t,a,o);break;default:throw Error($(161))}}catch(l){Se(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function PC(t,e,n){G=t,Tv(t)}function Tv(t,e,n){for(var r=(t.mode&1)!==0;G!==null;){var i=G,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ra;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||et;a=ra;var u=et;if(ra=o,(et=l)&&!u)for(G=i;G!==null;)o=G,l=o.child,o.tag===22&&o.memoizedState!==null?Fp(i):l!==null?(l.return=o,G=l):Fp(i);for(;s!==null;)G=s,Tv(s),s=s.sibling;G=i,ra=a,et=u}Mp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,G=s):Mp(t)}}function Mp(t){for(;G!==null;){var e=G;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:et||jl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!et)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Gt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&wp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}wp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Zs(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}et||e.flags&512&&Qc(e)}catch(h){Se(e,e.return,h)}}if(e===t){G=null;break}if(n=e.sibling,n!==null){n.return=e.return,G=n;break}G=e.return}}function Up(t){for(;G!==null;){var e=G;if(e===t){G=null;break}var n=e.sibling;if(n!==null){n.return=e.return,G=n;break}G=e.return}}function Fp(t){for(;G!==null;){var e=G;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{jl(4,e)}catch(l){Se(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Se(e,i,l)}}var s=e.return;try{Qc(e)}catch(l){Se(e,s,l)}break;case 5:var o=e.return;try{Qc(e)}catch(l){Se(e,o,l)}}}catch(l){Se(e,e.return,l)}if(e===t){G=null;break}var a=e.sibling;if(a!==null){a.return=e.return,G=a;break}G=e.return}}var xC=Math.ceil,Qa=Fn.ReactCurrentDispatcher,ch=Fn.ReactCurrentOwner,Ut=Fn.ReactCurrentBatchConfig,ee=0,He=null,be=null,qe=0,It=0,Ni=Cr(0),Ue=0,co=null,Qr=0,zl=0,dh=0,Fs=null,ft=null,hh=0,Ki=1/0,yn=null,Ya=!1,Xc=null,ur=null,ia=!1,tr=null,Ja=0,js=0,Zc=null,wa=-1,Ea=0;function lt(){return ee&6?Ae():wa!==-1?wa:wa=Ae()}function cr(t){return t.mode&1?ee&2&&qe!==0?qe&-qe:pC.transition!==null?(Ea===0&&(Ea=u_()),Ea):(t=se,t!==0||(t=window.event,t=t===void 0?16:g_(t.type)),t):1}function Xt(t,e,n,r){if(50<js)throw js=0,Zc=null,Error($(185));No(t,n,r),(!(ee&2)||t!==He)&&(t===He&&(!(ee&2)&&(zl|=n),Ue===4&&Qn(t,qe)),yt(t,r),n===1&&ee===0&&!(e.mode&1)&&(Ki=Ae()+500,Ml&&Sr()))}function yt(t,e){var n=t.callbackNode;pE(t,e);var r=Da(t,t===He?qe:0);if(r===0)n!==null&&qf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&qf(n),e===1)t.tag===0?fC(jp.bind(null,t)):L_(jp.bind(null,t)),uC(function(){!(ee&6)&&Sr()}),n=null;else{switch(c_(r)){case 1:n=Fd;break;case 4:n=a_;break;case 16:n=Oa;break;case 536870912:n=l_;break;default:n=Oa}n=Ov(n,kv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function kv(t,e){if(wa=-1,Ea=0,ee&6)throw Error($(327));var n=t.callbackNode;if(Mi()&&t.callbackNode!==n)return null;var r=Da(t,t===He?qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Xa(t,r);else{e=r;var i=ee;ee|=2;var s=Nv();(He!==t||qe!==e)&&(yn=null,Ki=Ae()+500,Br(t,e));do try{DC();break}catch(a){Rv(t,a)}while(!0);Jd(),Qa.current=s,ee=i,be!==null?e=0:(He=null,qe=0,e=Ue)}if(e!==0){if(e===2&&(i=kc(t),i!==0&&(r=i,e=ed(t,i))),e===1)throw n=co,Br(t,0),Qn(t,r),yt(t,Ae()),n;if(e===6)Qn(t,r);else{if(i=t.current.alternate,!(r&30)&&!bC(i)&&(e=Xa(t,r),e===2&&(s=kc(t),s!==0&&(r=s,e=ed(t,s))),e===1))throw n=co,Br(t,0),Qn(t,r),yt(t,Ae()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error($(345));case 2:xr(t,ft,yn);break;case 3:if(Qn(t,r),(r&130023424)===r&&(e=hh+500-Ae(),10<e)){if(Da(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){lt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Dc(xr.bind(null,t,ft,yn),e);break}xr(t,ft,yn);break;case 4:if(Qn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Jt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xC(r/1960))-r,10<r){t.timeoutHandle=Dc(xr.bind(null,t,ft,yn),r);break}xr(t,ft,yn);break;case 5:xr(t,ft,yn);break;default:throw Error($(329))}}}return yt(t,Ae()),t.callbackNode===n?kv.bind(null,t):null}function ed(t,e){var n=Fs;return t.current.memoizedState.isDehydrated&&(Br(t,e).flags|=256),t=Xa(t,e),t!==2&&(e=ft,ft=n,e!==null&&td(e)),t}function td(t){ft===null?ft=t:ft.push.apply(ft,t)}function bC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!tn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qn(t,e){for(e&=~dh,e&=~zl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jt(e),r=1<<n;t[n]=-1,e&=~r}}function jp(t){if(ee&6)throw Error($(327));Mi();var e=Da(t,0);if(!(e&1))return yt(t,Ae()),null;var n=Xa(t,e);if(t.tag!==0&&n===2){var r=kc(t);r!==0&&(e=r,n=ed(t,r))}if(n===1)throw n=co,Br(t,0),Qn(t,e),yt(t,Ae()),n;if(n===6)throw Error($(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,xr(t,ft,yn),yt(t,Ae()),null}function fh(t,e){var n=ee;ee|=1;try{return t(e)}finally{ee=n,ee===0&&(Ki=Ae()+500,Ml&&Sr())}}function Yr(t){tr!==null&&tr.tag===0&&!(ee&6)&&Mi();var e=ee;ee|=1;var n=Ut.transition,r=se;try{if(Ut.transition=null,se=1,t)return t()}finally{se=r,Ut.transition=n,ee=e,!(ee&6)&&Sr()}}function ph(){It=Ni.current,ge(Ni)}function Br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,lC(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(Kd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ja();break;case 3:Gi(),ge(_t),ge(tt),rh();break;case 5:nh(r);break;case 4:Gi();break;case 13:ge(ye);break;case 19:ge(ye);break;case 10:Xd(r.type._context);break;case 22:case 23:ph()}n=n.return}if(He=t,be=t=dr(t.current,null),qe=It=e,Ue=0,co=null,dh=zl=Qr=0,ft=Fs=null,Lr!==null){for(e=0;e<Lr.length;e++)if(n=Lr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Lr=null}return t}function Rv(t,e){do{var n=be;try{if(Jd(),_a.current=Ka,qa){for(var r=we.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}qa=!1}if(Kr=0,Be=De=we=null,Ms=!1,ao=0,ch.current=null,n===null||n.return===null){Ue=1,co=e,be=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=qe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=kp(o);if(f!==null){f.flags&=-257,Rp(f,o,a,s,e),f.mode&1&&Tp(s,u,e),e=f,l=u;var p=e.updateQueue;if(p===null){var y=new Set;y.add(l),e.updateQueue=y}else p.add(l);break e}else{if(!(e&1)){Tp(s,u,e),mh();break e}l=Error($(426))}}else if(ve&&a.mode&1){var T=kp(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),Rp(T,o,a,s,e),Qd(qi(l,a));break e}}s=l=qi(l,a),Ue!==4&&(Ue=2),Fs===null?Fs=[s]:Fs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=cv(s,l,e);yp(s,m);break e;case 1:a=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ur===null||!ur.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var C=dv(s,a,e);yp(s,C);break e}}s=s.return}while(s!==null)}Pv(n)}catch(P){e=P,be===n&&n!==null&&(be=n=n.return);continue}break}while(!0)}function Nv(){var t=Qa.current;return Qa.current=Ka,t===null?Ka:t}function mh(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),He===null||!(Qr&268435455)&&!(zl&268435455)||Qn(He,qe)}function Xa(t,e){var n=ee;ee|=2;var r=Nv();(He!==t||qe!==e)&&(yn=null,Br(t,e));do try{OC();break}catch(i){Rv(t,i)}while(!0);if(Jd(),ee=n,Qa.current=r,be!==null)throw Error($(261));return He=null,qe=0,Ue}function OC(){for(;be!==null;)Av(be)}function DC(){for(;be!==null&&!sE();)Av(be)}function Av(t){var e=bv(t.alternate,t,It);t.memoizedProps=t.pendingProps,e===null?Pv(t):be=e,ch.current=null}function Pv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=RC(n,e),n!==null){n.flags&=32767,be=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ue=6,be=null;return}}else if(n=kC(n,e,It),n!==null){be=n;return}if(e=e.sibling,e!==null){be=e;return}be=e=t}while(e!==null);Ue===0&&(Ue=5)}function xr(t,e,n){var r=se,i=Ut.transition;try{Ut.transition=null,se=1,LC(t,e,n,r)}finally{Ut.transition=i,se=r}return null}function LC(t,e,n,r){do Mi();while(tr!==null);if(ee&6)throw Error($(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error($(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(mE(t,s),t===He&&(be=He=null,qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ia||(ia=!0,Ov(Oa,function(){return Mi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ut.transition,Ut.transition=null;var o=se;se=1;var a=ee;ee|=4,ch.current=null,AC(t,n),Iv(n,t),tC(bc),La=!!xc,bc=xc=null,t.current=n,PC(n),oE(),ee=a,se=o,Ut.transition=s}else t.current=n;if(ia&&(ia=!1,tr=t,Ja=i),s=t.pendingLanes,s===0&&(ur=null),uE(n.stateNode),yt(t,Ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ya)throw Ya=!1,t=Xc,Xc=null,t;return Ja&1&&t.tag!==0&&Mi(),s=t.pendingLanes,s&1?t===Zc?js++:(js=0,Zc=t):js=0,Sr(),null}function Mi(){if(tr!==null){var t=c_(Ja),e=Ut.transition,n=se;try{if(Ut.transition=null,se=16>t?16:t,tr===null)var r=!1;else{if(t=tr,tr=null,Ja=0,ee&6)throw Error($(331));var i=ee;for(ee|=4,G=t.current;G!==null;){var s=G,o=s.child;if(G.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(G=u;G!==null;){var c=G;switch(c.tag){case 0:case 11:case 15:Us(8,c,s)}var d=c.child;if(d!==null)d.return=c,G=d;else for(;G!==null;){c=G;var h=c.sibling,f=c.return;if(Ev(c),c===u){G=null;break}if(h!==null){h.return=f,G=h;break}G=f}}}var p=s.alternate;if(p!==null){var y=p.child;if(y!==null){p.child=null;do{var T=y.sibling;y.sibling=null,y=T}while(y!==null)}}G=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,G=o;else e:for(;G!==null;){if(s=G,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Us(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,G=m;break e}G=s.return}}var g=t.current;for(G=g;G!==null;){o=G;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,G=v;else e:for(o=g;G!==null;){if(a=G,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:jl(9,a)}}catch(P){Se(a,a.return,P)}if(a===o){G=null;break e}var C=a.sibling;if(C!==null){C.return=a.return,G=C;break e}G=a.return}}if(ee=i,Sr(),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot(xl,t)}catch{}r=!0}return r}finally{se=n,Ut.transition=e}}return!1}function zp(t,e,n){e=qi(n,e),e=cv(t,e,1),t=lr(t,e,1),e=lt(),t!==null&&(No(t,1,e),yt(t,e))}function Se(t,e,n){if(t.tag===3)zp(t,t,n);else for(;e!==null;){if(e.tag===3){zp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ur===null||!ur.has(r))){t=qi(n,t),t=dv(e,t,1),e=lr(e,t,1),t=lt(),e!==null&&(No(e,1,t),yt(e,t));break}}e=e.return}}function MC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=lt(),t.pingedLanes|=t.suspendedLanes&n,He===t&&(qe&n)===n&&(Ue===4||Ue===3&&(qe&130023424)===qe&&500>Ae()-hh?Br(t,0):dh|=n),yt(t,e)}function xv(t,e){e===0&&(t.mode&1?(e=Ko,Ko<<=1,!(Ko&130023424)&&(Ko=4194304)):e=1);var n=lt();t=On(t,e),t!==null&&(No(t,e,n),yt(t,n))}function UC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),xv(t,n)}function FC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(e),xv(t,n)}var bv;bv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_t.current)mt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mt=!1,TC(t,e,n);mt=!!(t.flags&131072)}else mt=!1,ve&&e.flags&1048576&&M_(e,$a,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ya(t,e),t=e.pendingProps;var i=Hi(e,tt.current);Li(e,n),i=sh(null,e,r,t,i,n);var s=oh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vt(r)?(s=!0,za(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,eh(e),i.updater=Fl,e.stateNode=i,i._reactInternals=e,Bc(e,r,t,n),e=Wc(null,e,r,!0,s,n)):(e.tag=0,ve&&s&&qd(e),ot(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ya(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=zC(r),t=Gt(r,t),i){case 0:e=Hc(null,e,r,t,n);break e;case 1:e=Pp(null,e,r,t,n);break e;case 11:e=Np(null,e,r,t,n);break e;case 14:e=Ap(null,e,r,Gt(r.type,t),n);break e}throw Error($(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),Hc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),Pp(t,e,r,i,n);case 3:e:{if(mv(e),t===null)throw Error($(387));r=e.pendingProps,s=e.memoizedState,i=s.element,$_(t,e),Va(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=qi(Error($(423)),e),e=xp(t,e,r,n,i);break e}else if(r!==i){i=qi(Error($(424)),e),e=xp(t,e,r,n,i);break e}else for(Tt=ar(e.stateNode.containerInfo.firstChild),Rt=e,ve=!0,Kt=null,n=z_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wi(),r===i){e=Dn(t,e,n);break e}ot(t,e,r,n)}e=e.child}return e;case 5:return H_(e),t===null&&Fc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Oc(r,i)?o=null:s!==null&&Oc(r,s)&&(e.flags|=32),pv(t,e),ot(t,e,o,n),e.child;case 6:return t===null&&Fc(e),null;case 13:return gv(t,e,n);case 4:return th(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Vi(e,null,r,n):ot(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),Np(t,e,r,i,n);case 7:return ot(t,e,e.pendingProps,n),e.child;case 8:return ot(t,e,e.pendingProps.children,n),e.child;case 12:return ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,de(Ha,r._currentValue),r._currentValue=o,s!==null)if(tn(s.value,o)){if(s.children===i.children&&!_t.current){e=Dn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=An(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),jc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error($(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),jc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ot(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Li(e,n),i=Ft(i),r=r(i),e.flags|=1,ot(t,e,r,n),e.child;case 14:return r=e.type,i=Gt(r,e.pendingProps),i=Gt(r.type,i),Ap(t,e,r,i,n);case 15:return hv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),ya(t,e),e.tag=1,vt(r)?(t=!0,za(e)):t=!1,Li(e,n),uv(e,r,i),Bc(e,r,i,n),Wc(null,e,r,!0,t,n);case 19:return _v(t,e,n);case 22:return fv(t,e,n)}throw Error($(156,e.tag))};function Ov(t,e){return o_(t,e)}function jC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(t,e,n,r){return new jC(t,e,n,r)}function gh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function zC(t){if(typeof t=="function")return gh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ld)return 11;if(t===Md)return 14}return 2}function dr(t,e){var n=t.alternate;return n===null?(n=Lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ca(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")gh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case vi:return $r(n.children,i,s,e);case Dd:o=8,i|=8;break;case dc:return t=Lt(12,n,e,i|2),t.elementType=dc,t.lanes=s,t;case hc:return t=Lt(13,n,e,i),t.elementType=hc,t.lanes=s,t;case fc:return t=Lt(19,n,e,i),t.elementType=fc,t.lanes=s,t;case Hg:return Bl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Bg:o=10;break e;case $g:o=9;break e;case Ld:o=11;break e;case Md:o=14;break e;case Gn:o=16,r=null;break e}throw Error($(130,t==null?t:typeof t,""))}return e=Lt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function $r(t,e,n,r){return t=Lt(7,t,r,e),t.lanes=n,t}function Bl(t,e,n,r){return t=Lt(22,t,r,e),t.elementType=Hg,t.lanes=n,t.stateNode={isHidden:!1},t}function Bu(t,e,n){return t=Lt(6,t,null,e),t.lanes=n,t}function $u(t,e,n){return e=Lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function BC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cu(0),this.expirationTimes=Cu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _h(t,e,n,r,i,s,o,a,l){return t=new BC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Lt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},eh(s),t}function $C(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_i,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Dv(t){if(!t)return _r;t=t._reactInternals;e:{if(si(t)!==t||t.tag!==1)throw Error($(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error($(171))}if(t.tag===1){var n=t.type;if(vt(n))return D_(t,n,e)}return e}function Lv(t,e,n,r,i,s,o,a,l){return t=_h(n,r,!0,t,i,s,o,a,l),t.context=Dv(null),n=t.current,r=lt(),i=cr(n),s=An(r,i),s.callback=e??null,lr(n,s,i),t.current.lanes=i,No(t,i,r),yt(t,r),t}function $l(t,e,n,r){var i=e.current,s=lt(),o=cr(i);return n=Dv(n),e.context===null?e.context=n:e.pendingContext=n,e=An(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=lr(i,e,o),t!==null&&(Xt(t,i,o,s),ga(t,i,o)),o}function Za(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function vh(t,e){Bp(t,e),(t=t.alternate)&&Bp(t,e)}function HC(){return null}var Mv=typeof reportError=="function"?reportError:function(t){console.error(t)};function yh(t){this._internalRoot=t}Hl.prototype.render=yh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error($(409));$l(t,e,null,null)};Hl.prototype.unmount=yh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yr(function(){$l(null,t,null,null)}),e[bn]=null}};function Hl(t){this._internalRoot=t}Hl.prototype.unstable_scheduleHydration=function(t){if(t){var e=f_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kn.length&&e!==0&&e<Kn[n].priority;n++);Kn.splice(n,0,t),n===0&&m_(t)}};function wh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $p(){}function WC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Za(o);s.call(u)}}var o=Lv(e,r,t,0,null,!1,!1,"",$p);return t._reactRootContainer=o,t[bn]=o.current,no(t.nodeType===8?t.parentNode:t),Yr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Za(l);a.call(u)}}var l=_h(t,0,!1,null,null,!1,!1,"",$p);return t._reactRootContainer=l,t[bn]=l.current,no(t.nodeType===8?t.parentNode:t),Yr(function(){$l(e,l,n,r)}),l}function Vl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Za(o);a.call(l)}}$l(e,o,t,i)}else o=WC(n,e,t,i,r);return Za(o)}d_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=As(e.pendingLanes);n!==0&&(jd(e,n|1),yt(e,Ae()),!(ee&6)&&(Ki=Ae()+500,Sr()))}break;case 13:Yr(function(){var r=On(t,1);if(r!==null){var i=lt();Xt(r,t,1,i)}}),vh(t,1)}};zd=function(t){if(t.tag===13){var e=On(t,134217728);if(e!==null){var n=lt();Xt(e,t,134217728,n)}vh(t,134217728)}};h_=function(t){if(t.tag===13){var e=cr(t),n=On(t,e);if(n!==null){var r=lt();Xt(n,t,e,r)}vh(t,e)}};f_=function(){return se};p_=function(t,e){var n=se;try{return se=t,e()}finally{se=n}};Sc=function(t,e,n){switch(e){case"input":if(gc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ll(r);if(!i)throw Error($(90));Vg(r),gc(r,i)}}}break;case"textarea":qg(t,n);break;case"select":e=n.value,e!=null&&xi(t,!!n.multiple,e,!1)}};e_=fh;t_=Yr;var VC={usingClientEntryPoint:!1,Events:[Po,Ci,Ll,Xg,Zg,fh]},Es={findFiberByHostInstance:Dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},GC={bundleType:Es.bundleType,version:Es.version,rendererPackageName:Es.rendererPackageName,rendererConfig:Es.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=i_(t),t===null?null:t.stateNode},findFiberByHostInstance:Es.findFiberByHostInstance||HC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sa.isDisabled&&sa.supportsFiber)try{xl=sa.inject(GC),fn=sa}catch{}}Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=VC;Pt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wh(e))throw Error($(200));return $C(t,e,null,n)};Pt.createRoot=function(t,e){if(!wh(t))throw Error($(299));var n=!1,r="",i=Mv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=_h(t,1,!1,null,null,n,!1,r,i),t[bn]=e.current,no(t.nodeType===8?t.parentNode:t),new yh(e)};Pt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error($(188)):(t=Object.keys(t).join(","),Error($(268,t)));return t=i_(e),t=t===null?null:t.stateNode,t};Pt.flushSync=function(t){return Yr(t)};Pt.hydrate=function(t,e,n){if(!Wl(e))throw Error($(200));return Vl(null,t,e,!0,n)};Pt.hydrateRoot=function(t,e,n){if(!wh(t))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Mv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Lv(e,null,t,1,n??null,i,!1,s,o),t[bn]=e.current,no(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Hl(e)};Pt.render=function(t,e,n){if(!Wl(e))throw Error($(200));return Vl(null,t,e,!1,n)};Pt.unmountComponentAtNode=function(t){if(!Wl(t))throw Error($(40));return t._reactRootContainer?(Yr(function(){Vl(null,null,t,!1,function(){t._reactRootContainer=null,t[bn]=null})}),!0):!1};Pt.unstable_batchedUpdates=fh;Pt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Wl(n))throw Error($(200));if(t==null||t._reactInternals===void 0)throw Error($(38));return Vl(t,e,n,!1,r)};Pt.version="18.3.1-next-f1338f8080-20240426";function Uv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uv)}catch(t){console.error(t)}}Uv(),Ug.exports=Pt;var qC=Ug.exports,Fv,Hp=qC;Fv=Hp.createRoot,Hp.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ho(){return ho=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ho.apply(this,arguments)}var nr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(nr||(nr={}));const Wp="popstate";function KC(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=oi(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),nd("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:jv(s))}function r(i,s){Eh(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return YC(e,n,r,t)}function Fe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Eh(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function QC(){return Math.random().toString(36).substr(2,8)}function Vp(t,e){return{usr:t.state,key:t.key,idx:e}}function nd(t,e,n,r){return n===void 0&&(n=null),ho({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?oi(e):e,{state:n,key:e&&e.key||r||QC()})}function jv(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function oi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function YC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=nr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(ho({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=nr.Pop;let T=c(),m=T==null?null:T-u;u=T,l&&l({action:a,location:y.location,delta:m})}function h(T,m){a=nr.Push;let g=nd(y.location,T,m);n&&n(g,T),u=c()+1;let v=Vp(g,u),C=y.createHref(g);try{o.pushState(v,"",C)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;i.location.assign(C)}s&&l&&l({action:a,location:y.location,delta:1})}function f(T,m){a=nr.Replace;let g=nd(y.location,T,m);n&&n(g,T),u=c();let v=Vp(g,u),C=y.createHref(g);o.replaceState(v,"",C),s&&l&&l({action:a,location:y.location,delta:0})}function p(T){let m=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof T=="string"?T:jv(T);return g=g.replace(/ $/,"%20"),Fe(m,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,m)}let y={get action(){return a},get location(){return t(i,o)},listen(T){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Wp,d),l=T,()=>{i.removeEventListener(Wp,d),l=null}},createHref(T){return e(i,T)},createURL:p,encodeLocation(T){let m=p(T);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:f,go(T){return o.go(T)}};return y}var Gp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Gp||(Gp={}));function JC(t,e,n){return n===void 0&&(n="/"),XC(t,e,n,!1)}function XC(t,e,n,r){let i=typeof e=="string"?oi(e):e,s=$v(i.pathname||"/",n);if(s==null)return null;let o=zv(t);ZC(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=cS(s);a=lS(o[l],u,r)}return a}function zv(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Fe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Hr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Fe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),zv(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:oS(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Bv(s.path))i(s,o,l)}),e}function Bv(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Bv(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function ZC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:aS(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const eS=/^:[\w-]+$/,tS=3,nS=2,rS=1,iS=10,sS=-2,qp=t=>t==="*";function oS(t,e){let n=t.split("/"),r=n.length;return n.some(qp)&&(r+=sS),e&&(r+=nS),n.filter(i=>!qp(i)).reduce((i,s)=>i+(eS.test(s)?tS:s===""?rS:iS),r)}function aS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function lS(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,c=s==="/"?e:e.slice(s.length)||"/",d=Kp({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),h=l.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=Kp({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Hr([s,d.pathname]),pathnameBase:gS(Hr([s,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(s=Hr([s,d.pathnameBase]))}return o}function Kp(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=uS(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:h,isOptional:f}=c;if(h==="*"){let y=a[d]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const p=a[d];return f&&!p?u[h]=void 0:u[h]=(p||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function uS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Eh(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function cS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Eh(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function $v(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function dS(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?oi(t):t;return{pathname:n?n.startsWith("/")?n:hS(n,e):e,search:_S(r),hash:vS(i)}}function hS(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Hu(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function fS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function pS(t,e){let n=fS(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function mS(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=oi(t):(i=ho({},t),Fe(!i.pathname||!i.pathname.includes("?"),Hu("?","pathname","search",i)),Fe(!i.pathname||!i.pathname.includes("#"),Hu("#","pathname","hash",i)),Fe(!i.search||!i.search.includes("#"),Hu("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=dS(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Hr=t=>t.join("/").replace(/\/\/+/g,"/"),gS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),_S=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,vS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function yS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Hv=["post","put","patch","delete"];new Set(Hv);const wS=["get",...Hv];new Set(wS);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fo(){return fo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fo.apply(this,arguments)}const Ch=j.createContext(null),ES=j.createContext(null),Gl=j.createContext(null),ql=j.createContext(null),ss=j.createContext({outlet:null,matches:[],isDataRoute:!1}),Wv=j.createContext(null);function Kl(){return j.useContext(ql)!=null}function Vv(){return Kl()||Fe(!1),j.useContext(ql).location}function Gv(t){j.useContext(Gl).static||j.useLayoutEffect(t)}function qv(){let{isDataRoute:t}=j.useContext(ss);return t?DS():CS()}function CS(){Kl()||Fe(!1);let t=j.useContext(Ch),{basename:e,future:n,navigator:r}=j.useContext(Gl),{matches:i}=j.useContext(ss),{pathname:s}=Vv(),o=JSON.stringify(pS(i,n.v7_relativeSplatPath)),a=j.useRef(!1);return Gv(()=>{a.current=!0}),j.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=mS(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Hr([e,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[e,r,o,s,t])}function SS(t,e){return IS(t,e)}function IS(t,e,n,r){Kl()||Fe(!1);let{navigator:i}=j.useContext(Gl),{matches:s}=j.useContext(ss),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Vv(),c;if(e){var d;let T=typeof e=="string"?oi(e):e;l==="/"||(d=T.pathname)!=null&&d.startsWith(l)||Fe(!1),c=T}else c=u;let h=c.pathname||"/",f=h;if(l!=="/"){let T=l.replace(/^\//,"").split("/");f="/"+h.replace(/^\//,"").split("/").slice(T.length).join("/")}let p=JC(t,{pathname:f}),y=AS(p&&p.map(T=>Object.assign({},T,{params:Object.assign({},a,T.params),pathname:Hr([l,i.encodeLocation?i.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?l:Hr([l,i.encodeLocation?i.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),s,n,r);return e&&y?j.createElement(ql.Provider,{value:{location:fo({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:nr.Pop}},y):y}function TS(){let t=OS(),e=yS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),n?j.createElement("pre",{style:i},n):null,null)}const kS=j.createElement(TS,null);class RS extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?j.createElement(ss.Provider,{value:this.props.routeContext},j.createElement(Wv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function NS(t){let{routeContext:e,match:n,children:r}=t,i=j.useContext(Ch);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(ss.Provider,{value:e},r)}function AS(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);c>=0||Fe(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:h,errors:f}=n,p=d.route.loader&&h[d.route.id]===void 0&&(!f||f[d.route.id]===void 0);if(d.route.lazy||p){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,h)=>{let f,p=!1,y=null,T=null;n&&(f=a&&d.route.id?a[d.route.id]:void 0,y=d.route.errorElement||kS,l&&(u<0&&h===0?(p=!0,T=null):u===h&&(p=!0,T=d.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,h+1)),g=()=>{let v;return f?v=y:p?v=T:d.route.Component?v=j.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=c,j.createElement(NS,{match:d,routeContext:{outlet:c,matches:m,isDataRoute:n!=null},children:v})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?j.createElement(RS,{location:n.location,revalidation:n.revalidation,component:y,error:f,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()},null)}var Kv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Kv||{}),el=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(el||{});function PS(t){let e=j.useContext(Ch);return e||Fe(!1),e}function xS(t){let e=j.useContext(ES);return e||Fe(!1),e}function bS(t){let e=j.useContext(ss);return e||Fe(!1),e}function Qv(t){let e=bS(),n=e.matches[e.matches.length-1];return n.route.id||Fe(!1),n.route.id}function OS(){var t;let e=j.useContext(Wv),n=xS(el.UseRouteError),r=Qv(el.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function DS(){let{router:t}=PS(Kv.UseNavigateStable),e=Qv(el.UseNavigateStable),n=j.useRef(!1);return Gv(()=>{n.current=!0}),j.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,fo({fromRouteId:e},s)))},[t,e])}function Sa(t){Fe(!1)}function LS(t){let{basename:e="/",children:n=null,location:r,navigationType:i=nr.Pop,navigator:s,static:o=!1,future:a}=t;Kl()&&Fe(!1);let l=e.replace(/^\/*/,"/"),u=j.useMemo(()=>({basename:l,navigator:s,static:o,future:fo({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=oi(r));let{pathname:c="/",search:d="",hash:h="",state:f=null,key:p="default"}=r,y=j.useMemo(()=>{let T=$v(c,l);return T==null?null:{location:{pathname:T,search:d,hash:h,state:f,key:p},navigationType:i}},[l,c,d,h,f,p,i]);return y==null?null:j.createElement(Gl.Provider,{value:u},j.createElement(ql.Provider,{children:n,value:y}))}function MS(t){let{children:e,location:n}=t;return SS(rd(e),n)}new Promise(()=>{});function rd(t,e){e===void 0&&(e=[]);let n=[];return j.Children.forEach(t,(r,i)=>{if(!j.isValidElement(r))return;let s=[...e,i];if(r.type===j.Fragment){n.push.apply(n,rd(r.props.children,s));return}r.type!==Sa&&Fe(!1),!r.props.index||!r.props.children||Fe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=rd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const US="6";try{window.__reactRouterVersion=US}catch{}const FS="startTransition",Qp=Mw[FS];function jS(t){let{basename:e,children:n,future:r,window:i}=t,s=j.useRef();s.current==null&&(s.current=KC({window:i,v5Compat:!0}));let o=s.current,[a,l]=j.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=j.useCallback(d=>{u&&Qp?Qp(()=>l(d)):l(d)},[l,u]);return j.useLayoutEffect(()=>o.listen(c),[o,c]),j.createElement(LS,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var Yp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Yp||(Yp={}));var Jp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Jp||(Jp={}));const zS="/assets/logo-HnVQbui9.png",Yv=()=>k.jsxs("header",{className:"header",children:[k.jsxs("div",{className:"logo",children:[k.jsx("img",{src:zS,alt:"Logo",className:"logo-img"}),k.jsx("span",{className:"neon-text",children:"RANKING PADEL"})]}),k.jsxs("nav",{className:"nav",children:[k.jsx("a",{href:"#canchas",className:"nav-link",children:"Canchas"}),k.jsx("a",{href:"#torneos",className:"nav-link",children:"Torneos"}),k.jsx("a",{href:"#jugadores",className:"nav-link",children:"Jugadores"}),k.jsx("a",{href:"#ranking",className:"nav-link",children:"Ranking"})]})]});var Xp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H=function(t,e){if(!t)throw os(e)},os=function(t){return new Error("Firebase Database ("+Jv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},BS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Sh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(h=64)),r.push(n[c],n[d],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Xv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):BS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new $S;const h=s<<2|a>>4;if(r.push(h),u!==64){const f=a<<4&240|u>>2;if(r.push(f),d!==64){const p=u<<6&192|d;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $S extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zv=function(t){const e=Xv(t);return Sh.encodeByteArray(e,!0)},tl=function(t){return Zv(t).replace(/\./g,"")},nl=function(t){try{return Sh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(t){return e0(void 0,t)}function e0(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!WS(n)||(t[n]=e0(t[n],e[n]));return t}function WS(t){return t!=="__proto__"}/**
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
 */function VS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const GS=()=>VS().__FIREBASE_DEFAULTS__,qS=()=>{if(typeof process>"u"||typeof Xp>"u")return;const t=Xp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},KS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&nl(t[1]);return e&&JSON.parse(e)},Ih=()=>{try{return GS()||qS()||KS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},t0=t=>{var e,n;return(n=(e=Ih())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},n0=t=>{const e=t0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},r0=()=>{var t;return(t=Ih())===null||t===void 0?void 0:t.config},i0=t=>{var e;return(e=Ih())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function s0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[tl(JSON.stringify(n)),tl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Th(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function o0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function a0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function QS(){const t=ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function l0(){return Jv.NODE_ADMIN===!0}function u0(){try{return typeof indexedDB=="object"}catch{return!1}}function c0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function YS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS="FirebaseError";class rn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=JS,Object.setPrototypeOf(this,rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ai.prototype.create)}}class ai{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?XS(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new rn(i,a,r)}}function XS(t,e){return t.replace(ZS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ZS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t){return JSON.parse(t)}function Me(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=po(nl(s[0])||""),n=po(nl(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},eI=function(t){const e=d0(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},tI=function(t){const e=d0(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Qi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function id(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function rl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function mo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Zp(s)&&Zp(o)){if(!mo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Zp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const h=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function rI(t,e){const n=new iI(t,e);return n.subscribe.bind(n)}class iI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");sI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Wu),i.error===void 0&&(i.error=Wu),i.complete===void 0&&(i.complete=Wu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wu(){}function Ql(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,H(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Yl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const aI=1e3,lI=2,uI=4*60*60*1e3,cI=.5;function em(t,e=aI,n=lI){const r=e*Math.pow(n,t),i=Math.round(cI*r*(Math.random()-.5)*2);return Math.min(uI,r+i)}/**
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
 */function je(t){return t&&t._delegate?t._delegate:t}class zt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const br="[DEFAULT]";/**
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
 */class dI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new bo;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fI(e))try{this.getOrInitializeService({instanceIdentifier:br})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=br){return this.instances.has(e)}getOptions(e=br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=br){return this.component?this.component.multipleInstances?e:br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hI(t){return t===br?void 0:t}function fI(t){return t.instantiationMode==="EAGER"}/**
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
 */class pI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const mI={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},gI=oe.INFO,_I={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},vI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=_I[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jl{constructor(e){this.name=e,this._logLevel=gI,this._logHandler=vI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const yI=(t,e)=>e.some(n=>t instanceof n);let tm,nm;function wI(){return tm||(tm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function EI(){return nm||(nm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h0=new WeakMap,sd=new WeakMap,f0=new WeakMap,Vu=new WeakMap,kh=new WeakMap;function CI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(hr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&h0.set(n,t)}).catch(()=>{}),kh.set(e,t),e}function SI(t){if(sd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});sd.set(t,e)}let od={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||f0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function II(t){od=t(od)}function TI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Gu(this),e,...n);return f0.set(r,e.sort?e.sort():[e]),hr(r)}:EI().includes(t)?function(...e){return t.apply(Gu(this),e),hr(h0.get(this))}:function(...e){return hr(t.apply(Gu(this),e))}}function kI(t){return typeof t=="function"?TI(t):(t instanceof IDBTransaction&&SI(t),yI(t,wI())?new Proxy(t,od):t)}function hr(t){if(t instanceof IDBRequest)return CI(t);if(Vu.has(t))return Vu.get(t);const e=kI(t);return e!==t&&(Vu.set(t,e),kh.set(e,t)),e}const Gu=t=>kh.get(t);function p0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=hr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(hr(o.result),l.oldVersion,l.newVersion,hr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const RI=["get","getKey","getAll","getAllKeys","count"],NI=["put","add","delete","clear"],qu=new Map;function rm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qu.get(e))return qu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=NI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||RI.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return qu.set(e,s),s}II(t=>({...t,get:(e,n,r)=>rm(e,n)||t.get(e,n,r),has:(e,n)=>!!rm(e,n)||t.has(e,n)}));/**
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
 */class AI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(PI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function PI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ad="@firebase/app",im="0.10.10";/**
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
 */const Ln=new Jl("@firebase/app"),xI="@firebase/app-compat",bI="@firebase/analytics-compat",OI="@firebase/analytics",DI="@firebase/app-check-compat",LI="@firebase/app-check",MI="@firebase/auth",UI="@firebase/auth-compat",FI="@firebase/database",jI="@firebase/database-compat",zI="@firebase/functions",BI="@firebase/functions-compat",$I="@firebase/installations",HI="@firebase/installations-compat",WI="@firebase/messaging",VI="@firebase/messaging-compat",GI="@firebase/performance",qI="@firebase/performance-compat",KI="@firebase/remote-config",QI="@firebase/remote-config-compat",YI="@firebase/storage",JI="@firebase/storage-compat",XI="@firebase/firestore",ZI="@firebase/vertexai-preview",eT="@firebase/firestore-compat",tT="firebase",nT="10.13.1";/**
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
 */const ld="[DEFAULT]",rT={[ad]:"fire-core",[xI]:"fire-core-compat",[OI]:"fire-analytics",[bI]:"fire-analytics-compat",[LI]:"fire-app-check",[DI]:"fire-app-check-compat",[MI]:"fire-auth",[UI]:"fire-auth-compat",[FI]:"fire-rtdb",[jI]:"fire-rtdb-compat",[zI]:"fire-fn",[BI]:"fire-fn-compat",[$I]:"fire-iid",[HI]:"fire-iid-compat",[WI]:"fire-fcm",[VI]:"fire-fcm-compat",[GI]:"fire-perf",[qI]:"fire-perf-compat",[KI]:"fire-rc",[QI]:"fire-rc-compat",[YI]:"fire-gcs",[JI]:"fire-gcs-compat",[XI]:"fire-fst",[eT]:"fire-fst-compat",[ZI]:"fire-vertex","fire-js":"fire-js",[tT]:"fire-js-all"};/**
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
 */const il=new Map,iT=new Map,ud=new Map;function sm(t,e){try{t.container.addComponent(e)}catch(n){Ln.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function nn(t){const e=t.name;if(ud.has(e))return Ln.debug(`There were multiple attempts to register component ${e}.`),!1;ud.set(e,t);for(const n of il.values())sm(n,t);for(const n of iT.values())sm(n,t);return!0}function Ir(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Sn(t){return t.settings!==void 0}/**
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
 */const sT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fr=new ai("app","Firebase",sT);/**
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
 */class oT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fr.create("app-deleted",{appName:this._name})}}/**
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
 */const li=nT;function m0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ld,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw fr.create("bad-app-name",{appName:String(i)});if(n||(n=r0()),!n)throw fr.create("no-options");const s=il.get(i);if(s){if(mo(n,s.options)&&mo(r,s.config))return s;throw fr.create("duplicate-app",{appName:i})}const o=new pI(i);for(const l of ud.values())o.addComponent(l);const a=new oT(n,r,o);return il.set(i,a),a}function Xl(t=ld){const e=il.get(t);if(!e&&t===ld&&r0())return m0();if(!e)throw fr.create("no-app",{appName:t});return e}function wt(t,e,n){var r;let i=(r=rT[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ln.warn(a.join(" "));return}nn(new zt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const aT="firebase-heartbeat-database",lT=1,go="firebase-heartbeat-store";let Ku=null;function g0(){return Ku||(Ku=p0(aT,lT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(go)}catch(n){console.warn(n)}}}}).catch(t=>{throw fr.create("idb-open",{originalErrorMessage:t.message})})),Ku}async function uT(t){try{const n=(await g0()).transaction(go),r=await n.objectStore(go).get(_0(t));return await n.done,r}catch(e){if(e instanceof rn)Ln.warn(e.message);else{const n=fr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ln.warn(n.message)}}}async function om(t,e){try{const r=(await g0()).transaction(go,"readwrite");await r.objectStore(go).put(e,_0(t)),await r.done}catch(n){if(n instanceof rn)Ln.warn(n.message);else{const r=fr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ln.warn(r.message)}}}function _0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const cT=1024,dT=30*24*60*60*1e3;class hT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=am();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=dT}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ln.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=am(),{heartbeatsToSend:r,unsentEntries:i}=fT(this._heartbeatsCache.heartbeats),s=tl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Ln.warn(n),""}}}function am(){return new Date().toISOString().substring(0,10)}function fT(t,e=cT){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),lm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),lm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class pT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return u0()?c0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await uT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return om(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return om(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function lm(t){return tl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function mT(t){nn(new zt("platform-logger",e=>new AI(e),"PRIVATE")),nn(new zt("heartbeat",e=>new hT(e),"PRIVATE")),wt(ad,im,t),wt(ad,im,"esm2017"),wt("fire-js","")}mT("");var um={};const cm="@firebase/database",dm="1.0.7";/**
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
 */let v0="";function gT(t){v0=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Me(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:po(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return _n(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new _T(e)}}catch{}return new vT},Ur=y0("localStorage"),yT=y0("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=new Jl("@firebase/database"),wT=function(){let t=1;return function(){return t++}}(),w0=function(t){const e=oI(t),n=new nI;n.update(e);const r=n.digest();return Sh.encodeByteArray(r)},Oo=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Oo.apply(null,r):typeof r=="object"?e+=Me(r):e+=r,e+=" "}return e};let zs=null,hm=!0;const ET=function(t,e){H(!e,"Can't turn on custom loggers persistently."),Ui.logLevel=oe.VERBOSE,zs=Ui.log.bind(Ui)},Ge=function(...t){if(hm===!0&&(hm=!1,zs===null&&yT.get("logging_enabled")===!0&&ET()),zs){const e=Oo.apply(null,t);zs(e)}},Do=function(t){return function(...e){Ge(t,...e)}},cd=function(...t){const e="FIREBASE INTERNAL ERROR: "+Oo(...t);Ui.error(e)},Mn=function(...t){const e=`FIREBASE FATAL ERROR: ${Oo(...t)}`;throw Ui.error(e),new Error(e)},ut=function(...t){const e="FIREBASE WARNING: "+Oo(...t);Ui.warn(e)},CT=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ut("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Rh=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},ST=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Yi="[MIN_NAME]",Jr="[MAX_NAME]",ui=function(t,e){if(t===e)return 0;if(t===Yi||e===Jr)return-1;if(e===Yi||t===Jr)return 1;{const n=fm(t),r=fm(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},IT=function(t,e){return t===e?0:t<e?-1:1},Cs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Me(e))},Nh=function(t){if(typeof t!="object"||t===null)return Me(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Me(e[r]),n+=":",n+=Nh(t[e[r]]);return n+="}",n},E0=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Qe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const C0=function(t){H(!Rh(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(c.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},TT=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},kT=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function RT(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const NT=new RegExp("^-?(0*)\\d{1,10}$"),AT=-2147483648,PT=2147483647,fm=function(t){if(NT.test(t)){const e=Number(t);if(e>=AT&&e<=PT)return e}return null},ls=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ut("Exception was thrown by user callback.",n),e},Math.floor(0))}},xT=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Bs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class bT{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ut(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ge("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ut(e)}}class Ia{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ia.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah="5",S0="v",I0="s",T0="r",k0="f",R0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,N0="ls",A0="p",dd="ac",P0="websocket",x0="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ur.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ur.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function DT(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function O0(t,e,n){H(typeof e=="string","typeof type must == string"),H(typeof n=="object","typeof params must == object");let r;if(e===P0)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===x0)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);DT(t)&&(n.ns=t.namespace);const i=[];return Qe(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(){this.counters_={}}incrementCounter(e,n=1){_n(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return HS(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu={},Yu={};function Ph(t){const e=t.toString();return Qu[e]||(Qu[e]=new LT),Qu[e]}function MT(t,e){const n=t.toString();return Yu[n]||(Yu[n]=e()),Yu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ls(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm="start",FT="close",jT="pLPCommand",zT="pRTLPCB",D0="id",L0="pw",M0="ser",BT="cb",$T="seg",HT="ts",WT="d",VT="dframe",U0=1870,F0=30,GT=U0-F0,qT=25e3,KT=3e4;class Ai{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Do(e),this.stats_=Ph(n),this.urlFn=l=>(this.appCheckToken&&(l[dd]=this.appCheckToken),O0(n,x0,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new UT(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(KT)),ST(()=>{if(this.isClosed_)return;this.scriptTagHolder=new xh((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===pm)this.id=a,this.password=l;else if(o===FT)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[pm]="t",r[M0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[BT]=this.scriptTagHolder.uniqueCallbackIdentifier),r[S0]=Ah,this.transportSessionId&&(r[I0]=this.transportSessionId),this.lastSessionId&&(r[N0]=this.lastSessionId),this.applicationId&&(r[A0]=this.applicationId),this.appCheckToken&&(r[dd]=this.appCheckToken),typeof location<"u"&&location.hostname&&R0.test(location.hostname)&&(r[T0]=k0);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ai.forceAllow_=!0}static forceDisallow(){Ai.forceDisallow_=!0}static isAvailable(){return Ai.forceAllow_?!0:!Ai.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!TT()&&!kT()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Zv(n),i=E0(r,GT);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[VT]="t",r[D0]=e,r[L0]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Me(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class xh{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=wT(),window[jT+this.uniqueCallbackIdentifier]=e,window[zT+this.uniqueCallbackIdentifier]=n,this.myIFrame=xh.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ge("frame writing exception"),a.stack&&Ge(a.stack),Ge(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ge("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[D0]=this.myID,e[L0]=this.myPW,e[M0]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+F0+r.length<=U0;){const o=this.pendingSegs.shift();r=r+"&"+$T+i+"="+o.seg+"&"+HT+i+"="+o.ts+"&"+WT+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(qT)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ge("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT=16384,YT=45e3;let sl=null;typeof MozWebSocket<"u"?sl=MozWebSocket:typeof WebSocket<"u"&&(sl=WebSocket);class Qt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Do(this.connId),this.stats_=Ph(n),this.connURL=Qt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[S0]=Ah,typeof location<"u"&&location.hostname&&R0.test(location.hostname)&&(o[T0]=k0),n&&(o[I0]=n),r&&(o[N0]=r),i&&(o[dd]=i),s&&(o[A0]=s),O0(e,P0,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ur.set("previous_websocket_failure",!0);try{let r;l0(),this.mySock=new sl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Qt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&sl!==null&&!Qt.forceDisallow_}static previouslyFailed(){return Ur.isInMemoryStorage||Ur.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ur.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=po(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(H(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=E0(n,QT);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(YT))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Qt.responsesRequiredToBeHealthy=2;Qt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ai,Qt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Qt&&Qt.isAvailable();let r=n&&!Qt.previouslyFailed();if(e.webSocketOnly&&(n||ut("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Qt];else{const i=this.transports_=[];for(const s of _o.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);_o.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}_o.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT=6e4,XT=5e3,ZT=10*1024,e2=100*1024,Ju="t",mm="d",t2="s",gm="r",n2="e",_m="o",vm="a",ym="n",wm="p",r2="h";class i2{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Do("c:"+this.id+":"),this.transportManager_=new _o(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Bs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>e2?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ZT?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ju in e){const n=e[Ju];n===vm?this.upgradeIfSecondaryHealthy_():n===gm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===_m&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Cs("t",e),r=Cs("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:wm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:vm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ym,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Cs("t",e),r=Cs("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Cs(Ju,e);if(mm in e){const r=e[mm];if(n===r2){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===ym){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===t2?this.onConnectionShutdown_(r):n===gm?this.onReset_(r):n===n2?cd("Server Error: "+r):n===_m?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):cd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ah!==r&&ut("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Bs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(JT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Bs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(XT))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:wm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ur.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e){this.allowedEvents_=e,this.listeners_={},H(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){H(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol extends z0{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Th()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ol}getInitialEvent(e){return H(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em=32,Cm=768;class ae{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function te(){return new ae("")}function Z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function vr(t){return t.pieces_.length-t.pieceNum_}function ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ae(t.pieces_,e)}function bh(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function s2(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function vo(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function B0(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ae(e,0)}function Ie(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ae)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ae(n,0)}function J(t){return t.pieceNum_>=t.pieces_.length}function at(t,e){const n=Z(t),r=Z(e);if(n===null)return e;if(n===r)return at(ce(t),ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function o2(t,e){const n=vo(t,0),r=vo(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=ui(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function $0(t,e){if(vr(t)!==vr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Mt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(vr(t)>vr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class a2{constructor(e,n){this.errorPrefix_=n,this.parts_=vo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Yl(this.parts_[r]);H0(this)}}function l2(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Yl(e),H0(t)}function u2(t){const e=t.parts_.pop();t.byteLength_-=Yl(e),t.parts_.length>0&&(t.byteLength_-=1)}function H0(t){if(t.byteLength_>Cm)throw new Error(t.errorPrefix_+"has a key path longer than "+Cm+" bytes ("+t.byteLength_+").");if(t.parts_.length>Em)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Em+") or object contains a cycle "+Or(t))}function Or(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh extends z0{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Oh}getInitialEvent(e){return H(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=1e3,c2=60*5*1e3,Sm=30*1e3,d2=1.3,h2=3e4,f2="server_kill",Im=3;class Pn extends j0{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Pn.nextPersistentConnectionId_++,this.log_=Do("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ss,this.maxReconnectDelay_=c2,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!l0())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Oh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ol.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Me(s)),H(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new bo,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),H(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),H(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Pn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&_n(e,"w")){const r=Qi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();ut(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||tI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Sm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=eI(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),H(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Me(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):cd("Unrecognized action received from server: "+Me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){H(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ss,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ss,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>h2&&(this.reconnectDelay_=Ss),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*d2)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Pn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){H(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Ge("getToken() completed but was canceled"):(Ge("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new i2(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,f=>{ut(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(f2)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&ut(d),l())}}}interrupt(e){Ge("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ge("Resuming connection for reason: "+e),delete this.interruptReasons_[e],id(this.interruptReasons_)&&(this.reconnectDelay_=Ss,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Nh(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ae(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ge("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Im&&(this.reconnectDelay_=Sm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ge("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Im&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+v0.replace(/\./g,"-")]=1,Th()?e["framework.cordova"]=1:a0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ol.getInstance().currentlyOnline();return id(this.interruptReasons_)&&e}}Pn.nextPersistentConnectionId_=0;Pn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Y(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Y(Yi,e),i=new Y(Yi,n);return this.compare(r,i)!==0}minPost(){return Y.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oa;class W0 extends Zl{static get __EMPTY_NODE(){return oa}static set __EMPTY_NODE(e){oa=e}compare(e,n){return ui(e.name,n.name)}isDefinedOn(e){throw os("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Y.MIN}maxPost(){return new Y(Jr,oa)}makePost(e,n){return H(typeof e=="string","KeyIndex indexValue must always be a string."),new Y(e,oa)}toString(){return".key"}}const Fi=new W0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class $e{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??$e.RED,this.left=i??gt.EMPTY_NODE,this.right=s??gt.EMPTY_NODE}copy(e,n,r,i,s){return new $e(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return gt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return gt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}$e.RED=!0;$e.BLACK=!1;class p2{copy(e,n,r,i,s){return this}insert(e,n,r){return new $e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class gt{constructor(e,n=gt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new gt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,$e.BLACK,null,null))}remove(e){return new gt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,$e.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new aa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new aa(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new aa(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new aa(this.root_,null,this.comparator_,!0,e)}}gt.EMPTY_NODE=new p2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m2(t,e){return ui(t.name,e.name)}function Dh(t,e){return ui(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hd;function g2(t){hd=t}const V0=function(t){return typeof t=="number"?"number:"+C0(t):"string:"+t},G0=function(t){if(t.isLeafNode()){const e=t.val();H(typeof e=="string"||typeof e=="number"||typeof e=="object"&&_n(e,".sv"),"Priority must be a string or number.")}else H(t===hd||t.isEmpty(),"priority of unexpected type.");H(t===hd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tm;class ze{constructor(e,n=ze.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,H(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),G0(this.priorityNode_)}static set __childrenNodeConstructor(e){Tm=e}static get __childrenNodeConstructor(){return Tm}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ze(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ze.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return J(e)?this:Z(e)===".priority"?this.priorityNode_:ze.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ze.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Z(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(H(r!==".priority"||vr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ze.__childrenNodeConstructor.EMPTY_NODE.updateChild(ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+V0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=C0(this.value_):e+=this.value_,this.lazyHash_=w0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ze.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ze.__childrenNodeConstructor?-1:(H(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ze.VALUE_TYPE_ORDER.indexOf(n),s=ze.VALUE_TYPE_ORDER.indexOf(r);return H(i>=0,"Unknown leaf type: "+n),H(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ze.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let q0,K0;function _2(t){q0=t}function v2(t){K0=t}class y2 extends Zl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ui(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Y.MIN}maxPost(){return new Y(Jr,new ze("[PRIORITY-POST]",K0))}makePost(e,n){const r=q0(e);return new Y(n,new ze("[PRIORITY-POST]",r))}toString(){return".priority"}}const Te=new y2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w2=Math.log(2);class E2{constructor(e){const n=s=>parseInt(Math.log(s)/w2,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const al=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,h;if(c===0)return null;if(c===1)return d=t[l],h=n?n(d):d,new $e(h,d.node,$e.BLACK,null,null);{const f=parseInt(c/2,10)+l,p=i(l,f),y=i(f+1,u);return d=t[f],h=n?n(d):d,new $e(h,d.node,$e.BLACK,p,y)}},s=function(l){let u=null,c=null,d=t.length;const h=function(p,y){const T=d-p,m=d;d-=p;const g=i(T+1,m),v=t[T],C=n?n(v):v;f(new $e(C,v.node,y,null,g))},f=function(p){u?(u.left=p,u=p):(c=p,u=p)};for(let p=0;p<l.count;++p){const y=l.nextBitIsOne(),T=Math.pow(2,l.count-(p+1));y?h(T,$e.BLACK):(h(T,$e.BLACK),h(T,$e.RED))}return c},o=new E2(t.length),a=s(o);return new gt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xu;const pi={};class In{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return H(pi&&Te,"ChildrenNode.ts has not been loaded"),Xu=Xu||new In({".priority":pi},{".priority":Te}),Xu}get(e){const n=Qi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof gt?n:null}hasIndex(e){return _n(this.indexSet_,e.toString())}addIndex(e,n){H(e!==Fi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(Y.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=al(r,e.getCompare()):a=pi;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new In(c,u)}addToIndexes(e,n){const r=rl(this.indexes_,(i,s)=>{const o=Qi(this.indexSet_,s);if(H(o,"Missing index implementation for "+s),i===pi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Y.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),al(a,o.getCompare())}else return pi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Y(e.name,a))),l.insert(e,e.node)}});return new In(r,this.indexSet_)}removeFromIndexes(e,n){const r=rl(this.indexes_,i=>{if(i===pi)return i;{const s=n.get(e.name);return s?i.remove(new Y(e.name,s)):i}});return new In(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Is;class K{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&G0(this.priorityNode_),this.children_.isEmpty()&&H(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Is||(Is=new K(new gt(Dh),null,In.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Is}updatePriority(e){return this.children_.isEmpty()?this:new K(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Is:n}}getChild(e){const n=Z(e);return n===null?this:this.getImmediateChild(n).getChild(ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(H(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Y(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Is:this.priorityNode_;return new K(i,o,s)}}updateChild(e,n){const r=Z(e);if(r===null)return n;{H(Z(e)!==".priority"||vr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ce(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Te,(o,a)=>{n[o]=a.val(e),r++,s&&K.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+V0(this.getPriority().val())+":"),this.forEachChild(Te,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":w0(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Y(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Y(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Y(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Y.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Y.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Lo?-1:0}withIndex(e){if(e===Fi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new K(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Fi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Te),i=n.getIterator(Te);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Fi?null:this.indexMap_.get(e.toString())}}K.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class C2 extends K{constructor(){super(new gt(Dh),K.EMPTY_NODE,In.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return K.EMPTY_NODE}isEmpty(){return!1}}const Lo=new C2;Object.defineProperties(Y,{MIN:{value:new Y(Yi,K.EMPTY_NODE)},MAX:{value:new Y(Jr,Lo)}});W0.__EMPTY_NODE=K.EMPTY_NODE;ze.__childrenNodeConstructor=K;g2(Lo);v2(Lo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S2=!0;function Le(t,e=null){if(t===null)return K.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),H(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ze(n,Le(e))}if(!(t instanceof Array)&&S2){const n=[];let r=!1;if(Qe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Le(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new Y(o,l)))}}),n.length===0)return K.EMPTY_NODE;const s=al(n,m2,o=>o.name,Dh);if(r){const o=al(n,Te.getCompare());return new K(s,Le(e),new In({".priority":o},{".priority":Te}))}else return new K(s,Le(e),In.Default)}else{let n=K.EMPTY_NODE;return Qe(t,(r,i)=>{if(_n(t,r)&&r.substring(0,1)!=="."){const s=Le(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Le(e))}}_2(Le);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2 extends Zl{constructor(e){super(),this.indexPath_=e,H(!J(e)&&Z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ui(e.name,n.name):s}makePost(e,n){const r=Le(e),i=K.EMPTY_NODE.updateChild(this.indexPath_,r);return new Y(n,i)}maxPost(){const e=K.EMPTY_NODE.updateChild(this.indexPath_,Lo);return new Y(Jr,e)}toString(){return vo(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2 extends Zl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ui(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Y.MIN}maxPost(){return Y.MAX}makePost(e,n){const r=Le(e);return new Y(n,r)}toString(){return".value"}}const k2=new T2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(t){return{type:"value",snapshotNode:t}}function Ji(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function yo(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function wo(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function R2(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){H(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(yo(n,a)):H(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ji(n,r)):o.trackChildChange(wo(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Te,(i,s)=>{n.hasChild(i)||r.trackChildChange(yo(i,s))}),n.isLeafNode()||n.forEachChild(Te,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(wo(i,s,o))}else r.trackChildChange(Ji(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?K.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e){this.indexedFilter_=new Lh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Eo.getStartPost_(e),this.endPost_=Eo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new Y(n,r))||(r=K.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=K.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(K.EMPTY_NODE);const s=this;return n.forEachChild(Te,(o,a)=>{s.matches(new Y(o,a))||(i=i.updateImmediateChild(o,K.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Eo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new Y(n,r))||(r=K.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=K.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=K.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(K.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,K.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,f)=>d(f,h)}else o=this.index_.getCompare();const a=e;H(a.numChildren()===this.limit_,"");const l=new Y(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:o(h,l);if(c&&!r.isEmpty()&&f>=0)return s!=null&&s.trackChildChange(wo(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(yo(n,d));const y=a.updateImmediateChild(n,K.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Ji(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(yo(u.name,u.node)),s.trackChildChange(Ji(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,K.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Te}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return H(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return H(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Yi}hasEnd(){return this.endSet_}getIndexEndValue(){return H(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return H(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Jr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return H(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Te}copy(){const e=new Mh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function A2(t){return t.loadsAllData()?new Lh(t.getIndex()):t.hasLimit()?new N2(t):new Eo(t)}function km(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Te?n="$priority":t.index_===k2?n="$value":t.index_===Fi?n="$key":(H(t.index_ instanceof I2,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Me(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Me(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Me(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Me(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Me(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Rm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Te&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll extends j0{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Do("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(H(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ll.getListenId_(e,r),a={};this.listens_[o]=a;const l=km(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Qi(this.listens_,o)===a){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=ll.getListenId_(e,n);delete this.listens_[r]}get(e){const n=km(e._queryParams),r=e._path.toString(),i=new bo;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+as(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=po(a.responseText)}catch{ut("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&ut("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(){this.rootNode_=K.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(){return{value:null,children:new Map}}function Y0(t,e,n){if(J(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Z(e);t.children.has(r)||t.children.set(r,ul());const i=t.children.get(r);e=ce(e),Y0(i,e,n)}}function fd(t,e,n){t.value!==null?n(e,t.value):x2(t,(r,i)=>{const s=new ae(e.toString()+"/"+r);fd(i,s,n)})}function x2(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Qe(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm=10*1e3,O2=30*1e3,D2=5*60*1e3;class L2{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new b2(e);const r=Nm+(O2-Nm)*Math.random();Bs(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Qe(e,(i,s)=>{s>0&&_n(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Bs(this.reportStats_.bind(this),Math.floor(Math.random()*2*D2))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Yt||(Yt={}));function Uh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Fh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function jh(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Yt.ACK_USER_WRITE,this.source=Uh()}operationForChild(e){if(J(this.path)){if(this.affectedTree.value!=null)return H(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ae(e));return new cl(te(),n,this.revert)}}else return H(Z(this.path)===e,"operationForChild called for unrelated child."),new cl(ce(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n){this.source=e,this.path=n,this.type=Yt.LISTEN_COMPLETE}operationForChild(e){return J(this.path)?new Co(this.source,te()):new Co(this.source,ce(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Yt.OVERWRITE}operationForChild(e){return J(this.path)?new Xr(this.source,te(),this.snap.getImmediateChild(e)):new Xr(this.source,ce(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Yt.MERGE}operationForChild(e){if(J(this.path)){const n=this.children.subtree(new ae(e));return n.isEmpty()?null:n.value?new Xr(this.source,te(),n.value):new Xi(this.source,te(),n)}else return H(Z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Xi(this.source,ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(J(e))return this.isFullyInitialized()&&!this.filtered_;const n=Z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function U2(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(R2(o.childName,o.snapshotNode))}),Ts(t,i,"child_removed",e,r,n),Ts(t,i,"child_added",e,r,n),Ts(t,i,"child_moved",s,r,n),Ts(t,i,"child_changed",e,r,n),Ts(t,i,"value",e,r,n),i}function Ts(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>j2(t,a,l)),o.forEach(a=>{const l=F2(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function F2(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function j2(t,e,n){if(e.childName==null||n.childName==null)throw os("Should only compare child_ events.");const r=new Y(e.childName,e.snapshotNode),i=new Y(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(t,e){return{eventCache:t,serverCache:e}}function $s(t,e,n,r){return eu(new yr(e,n,r),t.serverCache)}function J0(t,e,n,r){return eu(t.eventCache,new yr(e,n,r))}function dl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Zr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zu;const z2=()=>(Zu||(Zu=new gt(IT)),Zu);class ue{constructor(e,n=z2()){this.value=e,this.children=n}static fromObject(e){let n=new ue(null);return Qe(e,(r,i)=>{n=n.set(new ae(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:te(),value:this.value};if(J(e))return null;{const r=Z(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ce(e),n);return s!=null?{path:Ie(new ae(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(J(e))return this;{const n=Z(e),r=this.children.get(n);return r!==null?r.subtree(ce(e)):new ue(null)}}set(e,n){if(J(e))return new ue(n,this.children);{const r=Z(e),s=(this.children.get(r)||new ue(null)).set(ce(e),n),o=this.children.insert(r,s);return new ue(this.value,o)}}remove(e){if(J(e))return this.children.isEmpty()?new ue(null):new ue(null,this.children);{const n=Z(e),r=this.children.get(n);if(r){const i=r.remove(ce(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ue(null):new ue(this.value,s)}else return this}}get(e){if(J(e))return this.value;{const n=Z(e),r=this.children.get(n);return r?r.get(ce(e)):null}}setTree(e,n){if(J(e))return n;{const r=Z(e),s=(this.children.get(r)||new ue(null)).setTree(ce(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ue(this.value,o)}}fold(e){return this.fold_(te(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ie(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,te(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(J(e))return null;{const s=Z(e),o=this.children.get(s);return o?o.findOnPath_(ce(e),Ie(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,te(),n)}foreachOnPath_(e,n,r){if(J(e))return this;{this.value&&r(n,this.value);const i=Z(e),s=this.children.get(i);return s?s.foreachOnPath_(ce(e),Ie(n,i),r):new ue(null)}}foreach(e){this.foreach_(te(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ie(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.writeTree_=e}static empty(){return new Zt(new ue(null))}}function Hs(t,e,n){if(J(e))return new Zt(new ue(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=at(i,e);return s=s.updateChild(o,n),new Zt(t.writeTree_.set(i,s))}else{const i=new ue(n),s=t.writeTree_.setTree(e,i);return new Zt(s)}}}function pd(t,e,n){let r=t;return Qe(n,(i,s)=>{r=Hs(r,Ie(e,i),s)}),r}function Am(t,e){if(J(e))return Zt.empty();{const n=t.writeTree_.setTree(e,new ue(null));return new Zt(n)}}function md(t,e){return ci(t,e)!=null}function ci(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(at(n.path,e)):null}function Pm(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Te,(r,i)=>{e.push(new Y(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Y(r,i.value))}),e}function pr(t,e){if(J(e))return t;{const n=ci(t,e);return n!=null?new Zt(new ue(n)):new Zt(t.writeTree_.subtree(e))}}function gd(t){return t.writeTree_.isEmpty()}function Zi(t,e){return X0(te(),t.writeTree_,e)}function X0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(H(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=X0(Ie(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ie(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(t,e){return ny(e,t)}function B2(t,e,n,r,i){H(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Hs(t.visibleWrites,e,n)),t.lastWriteId=r}function $2(t,e,n,r){H(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=pd(t.visibleWrites,e,n),t.lastWriteId=r}function H2(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function W2(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);H(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&V2(a,r.path)?i=!1:Mt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return G2(t),!0;if(r.snap)t.visibleWrites=Am(t.visibleWrites,r.path);else{const a=r.children;Qe(a,l=>{t.visibleWrites=Am(t.visibleWrites,Ie(r.path,l))})}return!0}else return!1}function V2(t,e){if(t.snap)return Mt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Mt(Ie(t.path,n),e))return!0;return!1}function G2(t){t.visibleWrites=Z0(t.allWrites,q2,te()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function q2(t){return t.visible}function Z0(t,e,n){let r=Zt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Mt(n,o)?(a=at(n,o),r=Hs(r,a,s.snap)):Mt(o,n)&&(a=at(o,n),r=Hs(r,te(),s.snap.getChild(a)));else if(s.children){if(Mt(n,o))a=at(n,o),r=pd(r,a,s.children);else if(Mt(o,n))if(a=at(o,n),J(a))r=pd(r,te(),s.children);else{const l=Qi(s.children,Z(a));if(l){const u=l.getChild(ce(a));r=Hs(r,te(),u)}}}else throw os("WriteRecord should have .snap or .children")}}return r}function ey(t,e,n,r,i){if(!r&&!i){const s=ci(t.visibleWrites,e);if(s!=null)return s;{const o=pr(t.visibleWrites,e);if(gd(o))return n;if(n==null&&!md(o,te()))return null;{const a=n||K.EMPTY_NODE;return Zi(o,a)}}}else{const s=pr(t.visibleWrites,e);if(!i&&gd(s))return n;if(!i&&n==null&&!md(s,te()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Mt(u.path,e)||Mt(e,u.path))},a=Z0(t.allWrites,o,e),l=n||K.EMPTY_NODE;return Zi(a,l)}}}function K2(t,e,n){let r=K.EMPTY_NODE;const i=ci(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Te,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=pr(t.visibleWrites,e);return n.forEachChild(Te,(o,a)=>{const l=Zi(pr(s,new ae(o)),a);r=r.updateImmediateChild(o,l)}),Pm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=pr(t.visibleWrites,e);return Pm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function Q2(t,e,n,r,i){H(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ie(e,n);if(md(t.visibleWrites,s))return null;{const o=pr(t.visibleWrites,s);return gd(o)?i.getChild(n):Zi(o,i.getChild(n))}}function Y2(t,e,n,r){const i=Ie(e,n),s=ci(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=pr(t.visibleWrites,i);return Zi(o,r.getNode().getImmediateChild(n))}else return null}function J2(t,e){return ci(t.visibleWrites,e)}function X2(t,e,n,r,i,s,o){let a;const l=pr(t.visibleWrites,e),u=ci(l,te());if(u!=null)a=u;else if(n!=null)a=Zi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let f=h.getNext();for(;f&&c.length<i;)d(f,r)!==0&&c.push(f),f=h.getNext();return c}else return[]}function Z2(){return{visibleWrites:Zt.empty(),allWrites:[],lastWriteId:-1}}function hl(t,e,n,r){return ey(t.writeTree,t.treePath,e,n,r)}function zh(t,e){return K2(t.writeTree,t.treePath,e)}function xm(t,e,n,r){return Q2(t.writeTree,t.treePath,e,n,r)}function fl(t,e){return J2(t.writeTree,Ie(t.treePath,e))}function ek(t,e,n,r,i,s){return X2(t.writeTree,t.treePath,e,n,r,i,s)}function Bh(t,e,n){return Y2(t.writeTree,t.treePath,e,n)}function ty(t,e){return ny(Ie(t.treePath,e),t.writeTree)}function ny(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;H(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),H(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,wo(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,yo(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ji(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,wo(r,e.snapshotNode,i.oldSnap));else throw os("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const ry=new nk;class $h{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new yr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Bh(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Zr(this.viewCache_),s=ek(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rk(t){return{filter:t}}function ik(t,e){H(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),H(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function sk(t,e,n,r,i){const s=new tk;let o,a;if(n.type===Yt.OVERWRITE){const u=n;u.source.fromUser?o=_d(t,e,u.path,u.snap,r,i,s):(H(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!J(u.path),o=pl(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===Yt.MERGE){const u=n;u.source.fromUser?o=ak(t,e,u.path,u.children,r,i,s):(H(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=vd(t,e,u.path,u.children,r,i,a,s))}else if(n.type===Yt.ACK_USER_WRITE){const u=n;u.revert?o=ck(t,e,u.path,r,i,s):o=lk(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Yt.LISTEN_COMPLETE)o=uk(t,e,n.path,r,s);else throw os("Unknown operation type: "+n.type);const l=s.getChanges();return ok(e,o,l),{viewCache:o,changes:l}}function ok(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=dl(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Q0(dl(e)))}}function iy(t,e,n,r,i,s){const o=e.eventCache;if(fl(r,n)!=null)return e;{let a,l;if(J(n))if(H(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Zr(e),c=u instanceof K?u:K.EMPTY_NODE,d=zh(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=hl(r,Zr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=Z(n);if(u===".priority"){H(vr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=xm(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=ce(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const h=xm(r,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(u).updateChild(c,h):d=o.getNode().getImmediateChild(u)}else d=Bh(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return $s(e,a,o.isFullyInitialized()||J(n),t.filter.filtersNodes())}}function pl(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(J(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),f,null)}else{const f=Z(n);if(!l.isCompleteForPath(n)&&vr(n)>1)return e;const p=ce(n),T=l.getNode().getImmediateChild(f).updateChild(p,r);f===".priority"?u=c.updatePriority(l.getNode(),T):u=c.updateChild(l.getNode(),f,T,p,ry,null)}const d=J0(e,u,l.isFullyInitialized()||J(n),c.filtersNodes()),h=new $h(i,d,s);return iy(t,d,n,i,h,a)}function _d(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new $h(i,e,s);if(J(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=$s(e,u,!0,t.filter.filtersNodes());else{const d=Z(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=$s(e,u,a.isFullyInitialized(),a.isFiltered());else{const h=ce(n),f=a.getNode().getImmediateChild(d);let p;if(J(h))p=r;else{const y=c.getCompleteChild(d);y!=null?bh(h)===".priority"&&y.getChild(B0(h)).isEmpty()?p=y:p=y.updateChild(h,r):p=K.EMPTY_NODE}if(f.equals(p))l=e;else{const y=t.filter.updateChild(a.getNode(),d,p,h,c,o);l=$s(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function bm(t,e){return t.eventCache.isCompleteForChild(e)}function ak(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=Ie(n,l);bm(e,Z(c))&&(a=_d(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=Ie(n,l);bm(e,Z(c))||(a=_d(t,a,c,u,i,s,o))}),a}function Om(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function vd(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;J(n)?u=r:u=new ue(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),p=Om(t,f,h);l=pl(t,l,new ae(d),p,i,s,o,a)}}),u.children.inorderTraversal((d,h)=>{const f=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!c.hasChild(d)&&!f){const p=e.serverCache.getNode().getImmediateChild(d),y=Om(t,p,h);l=pl(t,l,new ae(d),y,i,s,o,a)}}),l}function lk(t,e,n,r,i,s,o){if(fl(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(J(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return pl(t,e,n,l.getNode().getChild(n),i,s,a,o);if(J(n)){let u=new ue(null);return l.getNode().forEachChild(Fi,(c,d)=>{u=u.set(new ae(c),d)}),vd(t,e,n,u,i,s,a,o)}else return e}else{let u=new ue(null);return r.foreach((c,d)=>{const h=Ie(n,c);l.isCompleteForPath(h)&&(u=u.set(c,l.getNode().getChild(h)))}),vd(t,e,n,u,i,s,a,o)}}function uk(t,e,n,r,i){const s=e.serverCache,o=J0(e,s.getNode(),s.isFullyInitialized()||J(n),s.isFiltered());return iy(t,o,n,r,ry,i)}function ck(t,e,n,r,i,s){let o;if(fl(r,n)!=null)return e;{const a=new $h(r,e,i),l=e.eventCache.getNode();let u;if(J(n)||Z(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=hl(r,Zr(e));else{const d=e.serverCache.getNode();H(d instanceof K,"serverChildren would be complete if leaf node"),c=zh(r,d)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=Z(n);let d=Bh(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,ce(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,K.EMPTY_NODE,ce(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=hl(r,Zr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||fl(r,te())!=null,$s(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Lh(r.getIndex()),s=A2(r);this.processor_=rk(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(K.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(K.EMPTY_NODE,a.getNode(),null),c=new yr(l,o.isFullyInitialized(),i.filtersNodes()),d=new yr(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=eu(d,c),this.eventGenerator_=new M2(this.query_)}get query(){return this.query_}}function hk(t){return t.viewCache_.serverCache.getNode()}function fk(t){return dl(t.viewCache_)}function pk(t,e){const n=Zr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!J(e)&&!n.getImmediateChild(Z(e)).isEmpty())?n.getChild(e):null}function Dm(t){return t.eventRegistrations_.length===0}function mk(t,e){t.eventRegistrations_.push(e)}function Lm(t,e,n){const r=[];if(n){H(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Mm(t,e,n,r){e.type===Yt.MERGE&&e.source.queryId!==null&&(H(Zr(t.viewCache_),"We should always have a full cache before handling merges"),H(dl(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=sk(t.processor_,i,e,n,r);return ik(t.processor_,s.viewCache),H(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,sy(t,s.changes,s.viewCache.eventCache.getNode(),null)}function gk(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Te,(s,o)=>{r.push(Ji(s,o))}),n.isFullyInitialized()&&r.push(Q0(n.getNode())),sy(t,r,n.getNode(),e)}function sy(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return U2(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ml;class oy{constructor(){this.views=new Map}}function _k(t){H(!ml,"__referenceConstructor has already been defined"),ml=t}function vk(){return H(ml,"Reference.ts has not been loaded"),ml}function yk(t){return t.views.size===0}function Hh(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return H(s!=null,"SyncTree gave us an op for an invalid query."),Mm(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Mm(o,e,n,r));return s}}function ay(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=hl(n,i?r:null),l=!1;a?l=!0:r instanceof K?(a=zh(n,r),l=!1):(a=K.EMPTY_NODE,l=!1);const u=eu(new yr(a,l,!1),new yr(r,i,!1));return new dk(e,u)}return o}function wk(t,e,n,r,i,s){const o=ay(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),mk(o,n),gk(o,n)}function Ek(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=wr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(Lm(u,n,r)),Dm(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(Lm(l,n,r)),Dm(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!wr(t)&&s.push(new(vk())(e._repo,e._path)),{removed:s,events:o}}function ly(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function mr(t,e){let n=null;for(const r of t.views.values())n=n||pk(r,e);return n}function uy(t,e){if(e._queryParams.loadsAllData())return nu(t);{const r=e._queryIdentifier;return t.views.get(r)}}function cy(t,e){return uy(t,e)!=null}function wr(t){return nu(t)!=null}function nu(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gl;function Ck(t){H(!gl,"__referenceConstructor has already been defined"),gl=t}function Sk(){return H(gl,"Reference.ts has not been loaded"),gl}let Ik=1;class Um{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ue(null),this.pendingWriteTree_=Z2(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function dy(t,e,n,r,i){return B2(t.pendingWriteTree_,e,n,r,i),i?us(t,new Xr(Uh(),e,n)):[]}function Tk(t,e,n,r){$2(t.pendingWriteTree_,e,n,r);const i=ue.fromObject(n);return us(t,new Xi(Uh(),e,i))}function rr(t,e,n=!1){const r=H2(t.pendingWriteTree_,e);if(W2(t.pendingWriteTree_,e)){let s=new ue(null);return r.snap!=null?s=s.set(te(),!0):Qe(r.children,o=>{s=s.set(new ae(o),!0)}),us(t,new cl(r.path,s,n))}else return[]}function Mo(t,e,n){return us(t,new Xr(Fh(),e,n))}function kk(t,e,n){const r=ue.fromObject(n);return us(t,new Xi(Fh(),e,r))}function Rk(t,e){return us(t,new Co(Fh(),e))}function Nk(t,e,n){const r=Vh(t,n);if(r){const i=Gh(r),s=i.path,o=i.queryId,a=at(s,e),l=new Co(jh(o),a);return qh(t,s,l)}else return[]}function hy(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||cy(o,e))){const l=Ek(o,e,n,r);yk(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,f)=>wr(f));if(c&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const f=bk(h);for(let p=0;p<f.length;++p){const y=f[p],T=y.query,m=gy(t,y);t.listenProvider_.startListening(Ws(T),So(t,T),m.hashFn,m.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Ws(e),null):u.forEach(h=>{const f=t.queryToTagMap.get(ru(h));t.listenProvider_.stopListening(Ws(h),f)}))}Ok(t,u)}return a}function fy(t,e,n,r){const i=Vh(t,r);if(i!=null){const s=Gh(i),o=s.path,a=s.queryId,l=at(o,e),u=new Xr(jh(a),l,n);return qh(t,o,u)}else return[]}function Ak(t,e,n,r){const i=Vh(t,r);if(i){const s=Gh(i),o=s.path,a=s.queryId,l=at(o,e),u=ue.fromObject(n),c=new Xi(jh(a),l,u);return qh(t,o,c)}else return[]}function Pk(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,f)=>{const p=at(h,i);s=s||mr(f,p),o=o||wr(f)});let a=t.syncPointTree_.get(i);a?(o=o||wr(a),s=s||mr(a,te())):(a=new oy,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=K.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((f,p)=>{const y=mr(p,te());y&&(s=s.updateImmediateChild(f,y))}));const u=cy(a,e);if(!u&&!e._queryParams.loadsAllData()){const h=ru(e);H(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=Dk();t.queryToTagMap.set(h,f),t.tagToQueryMap.set(f,h)}const c=tu(t.pendingWriteTree_,i);let d=wk(a,e,n,c,s,l);if(!u&&!o&&!r){const h=uy(a,e);d=d.concat(Lk(t,e,h))}return d}function Wh(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=at(o,e),u=mr(a,l);if(u)return u});return ey(i,e,s,n,!0)}function xk(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=at(u,n);r=r||mr(c,d)});let i=t.syncPointTree_.get(n);i?r=r||mr(i,te()):(i=new oy,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new yr(r,!0,!1):null,a=tu(t.pendingWriteTree_,e._path),l=ay(i,e,a,s?o.getNode():K.EMPTY_NODE,s);return fk(l)}function us(t,e){return py(e,t.syncPointTree_,null,tu(t.pendingWriteTree_,te()))}function py(t,e,n,r){if(J(t.path))return my(t,e,n,r);{const i=e.get(te());n==null&&i!=null&&(n=mr(i,te()));let s=[];const o=Z(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=ty(r,o);s=s.concat(py(a,l,u,c))}return i&&(s=s.concat(Hh(i,t,r,n))),s}}function my(t,e,n,r){const i=e.get(te());n==null&&i!=null&&(n=mr(i,te()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=ty(r,o),c=t.operationForChild(o);c&&(s=s.concat(my(c,a,l,u)))}),i&&(s=s.concat(Hh(i,t,r,n))),s}function gy(t,e){const n=e.query,r=So(t,n);return{hashFn:()=>(hk(e)||K.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?Nk(t,n._path,r):Rk(t,n._path);{const s=RT(i,n);return hy(t,n,null,s)}}}}function So(t,e){const n=ru(e);return t.queryToTagMap.get(n)}function ru(t){return t._path.toString()+"$"+t._queryIdentifier}function Vh(t,e){return t.tagToQueryMap.get(e)}function Gh(t){const e=t.indexOf("$");return H(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ae(t.substr(0,e))}}function qh(t,e,n){const r=t.syncPointTree_.get(e);H(r,"Missing sync point for query tag that we're tracking");const i=tu(t.pendingWriteTree_,e);return Hh(r,n,i,null)}function bk(t){return t.fold((e,n,r)=>{if(n&&wr(n))return[nu(n)];{let i=[];return n&&(i=ly(n)),Qe(r,(s,o)=>{i=i.concat(o)}),i}})}function Ws(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Sk())(t._repo,t._path):t}function Ok(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=ru(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function Dk(){return Ik++}function Lk(t,e,n){const r=e._path,i=So(t,e),s=gy(t,n),o=t.listenProvider_.startListening(Ws(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)H(!wr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!J(u)&&c&&wr(c))return[nu(c).query];{let h=[];return c&&(h=h.concat(ly(c).map(f=>f.query))),Qe(d,(f,p)=>{h=h.concat(p)}),h}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(Ws(c),So(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Kh(n)}node(){return this.node_}}class Qh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ie(this.path_,e);return new Qh(this.syncTree_,n)}node(){return Wh(this.syncTree_,this.path_)}}const Mk=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Fm=function(t,e,n){if(!t||typeof t!="object")return t;if(H(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Uk(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Fk(t[".sv"],e);H(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Uk=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:H(!1,"Unexpected server value: "+t)}},Fk=function(t,e,n){t.hasOwnProperty("increment")||H(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&H(!1,"Unexpected increment value: "+r);const i=e.node();if(H(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},_y=function(t,e,n,r){return Yh(e,new Qh(n,t),r)},vy=function(t,e,n){return Yh(t,new Kh(e),n)};function Yh(t,e,n){const r=t.getPriority().val(),i=Fm(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Fm(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ze(a,Le(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ze(i))),o.forEachChild(Te,(a,l)=>{const u=Yh(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Xh(t,e){let n=e instanceof ae?e:new ae(e),r=t,i=Z(n);for(;i!==null;){const s=Qi(r.node.children,i)||{children:{},childCount:0};r=new Jh(i,r,s),n=ce(n),i=Z(n)}return r}function cs(t){return t.node.value}function yy(t,e){t.node.value=e,yd(t)}function wy(t){return t.node.childCount>0}function jk(t){return cs(t)===void 0&&!wy(t)}function iu(t,e){Qe(t.node.children,(n,r)=>{e(new Jh(n,t,r))})}function Ey(t,e,n,r){n&&!r&&e(t),iu(t,i=>{Ey(i,e,!0,r)}),n&&r&&e(t)}function zk(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Uo(t){return new ae(t.parent===null?t.name:Uo(t.parent)+"/"+t.name)}function yd(t){t.parent!==null&&Bk(t.parent,t.name,t)}function Bk(t,e,n){const r=jk(n),i=_n(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,yd(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,yd(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k=/[\[\].#$\/\u0000-\u001F\u007F]/,Hk=/[\[\].#$\u0000-\u001F\u007F]/,ec=10*1024*1024,Zh=function(t){return typeof t=="string"&&t.length!==0&&!$k.test(t)},Cy=function(t){return typeof t=="string"&&t.length!==0&&!Hk.test(t)},Wk=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Cy(t)},Vk=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Rh(t)||t&&typeof t=="object"&&_n(t,".sv")},Sy=function(t,e,n,r){r&&e===void 0||su(Ql(t,"value"),e,n)},su=function(t,e,n){const r=n instanceof ae?new a2(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Or(r));if(typeof e=="function")throw new Error(t+"contains a function "+Or(r)+" with contents = "+e.toString());if(Rh(e))throw new Error(t+"contains "+e.toString()+" "+Or(r));if(typeof e=="string"&&e.length>ec/3&&Yl(e)>ec)throw new Error(t+"contains a string greater than "+ec+" utf8 bytes "+Or(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Qe(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Zh(o)))throw new Error(t+" contains an invalid key ("+o+") "+Or(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);l2(r,o),su(t,a,r),u2(r)}),i&&s)throw new Error(t+' contains ".value" child '+Or(r)+" in addition to actual children.")}},Gk=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=vo(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Zh(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(o2);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Mt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},qk=function(t,e,n,r){const i=Ql(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Qe(e,(o,a)=>{const l=new ae(o);if(su(i,a,Ie(n,l)),bh(l)===".priority"&&!Vk(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),Gk(i,s)},Iy=function(t,e,n,r){if(!Cy(n))throw new Error(Ql(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Kk=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Iy(t,e,n)},ef=function(t,e){if(Z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Qk=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Zh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Wk(n))throw new Error(Ql(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function tf(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!$0(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Bt(t,e,n){tf(t,n),Jk(t,r=>Mt(r,e)||Mt(e,r))}function Jk(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(Xk(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Xk(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();zs&&Ge("event: "+n.toString()),ls(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk="repo_interrupt",eR=25;class tR{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Yk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ul(),this.transactionQueueTree_=new Jh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function nR(t,e,n){if(t.stats_=Ph(t.repoInfo_),t.forceRestClient_||xT())t.server_=new ll(t.repoInfo_,(r,i,s,o)=>{jm(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>zm(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Me(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Pn(t.repoInfo_,e,(r,i,s,o)=>{jm(t,r,i,s,o)},r=>{zm(t,r)},r=>{rR(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=MT(t.repoInfo_,()=>new L2(t.stats_,t.server_)),t.infoData_=new P2,t.infoSyncTree_=new Um({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Mo(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),nf(t,"connected",!1),t.serverSyncTree_=new Um({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);Bt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Ty(t){const n=t.infoData_.getNode(new ae(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ou(t){return Mk({timestamp:Ty(t)})}function jm(t,e,n,r,i){t.dataUpdateCount++;const s=new ae(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=rl(n,u=>Le(u));o=Ak(t.serverSyncTree_,s,l,i)}else{const l=Le(n);o=fy(t.serverSyncTree_,s,l,i)}else if(r){const l=rl(n,u=>Le(u));o=kk(t.serverSyncTree_,s,l)}else{const l=Le(n);o=Mo(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=es(t,s)),Bt(t.eventQueue_,a,o)}function zm(t,e){nf(t,"connected",e),e===!1&&aR(t)}function rR(t,e){Qe(e,(n,r)=>{nf(t,n,r)})}function nf(t,e,n){const r=new ae("/.info/"+e),i=Le(n);t.infoData_.updateSnapshot(r,i);const s=Mo(t.infoSyncTree_,r,i);Bt(t.eventQueue_,r,s)}function rf(t){return t.nextWriteId_++}function iR(t,e,n){const r=xk(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Le(i).withIndex(e._queryParams.getIndex());Pk(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Mo(t.serverSyncTree_,e._path,s);else{const a=So(t.serverSyncTree_,e);o=fy(t.serverSyncTree_,e._path,s,a)}return Bt(t.eventQueue_,e._path,o),hy(t.serverSyncTree_,e,n,null,!0),s},i=>(Fo(t,"get for query "+Me(e)+" failed: "+i),Promise.reject(new Error(i))))}function sR(t,e,n,r,i){Fo(t,"set",{path:e.toString(),value:n,priority:r});const s=ou(t),o=Le(n,r),a=Wh(t.serverSyncTree_,e),l=vy(o,a,s),u=rf(t),c=dy(t.serverSyncTree_,e,l,u,!0);tf(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(h,f)=>{const p=h==="ok";p||ut("set at "+e+" failed: "+h);const y=rr(t.serverSyncTree_,u,!p);Bt(t.eventQueue_,e,y),wd(t,i,h,f)});const d=of(t,e);es(t,d),Bt(t.eventQueue_,d,[])}function oR(t,e,n,r){Fo(t,"update",{path:e.toString(),value:n});let i=!0;const s=ou(t),o={};if(Qe(n,(a,l)=>{i=!1,o[a]=_y(Ie(e,a),Le(l),t.serverSyncTree_,s)}),i)Ge("update() called with empty data.  Don't do anything."),wd(t,r,"ok",void 0);else{const a=rf(t),l=Tk(t.serverSyncTree_,e,o,a);tf(t.eventQueue_,l),t.server_.merge(e.toString(),n,(u,c)=>{const d=u==="ok";d||ut("update at "+e+" failed: "+u);const h=rr(t.serverSyncTree_,a,!d),f=h.length>0?es(t,e):e;Bt(t.eventQueue_,f,h),wd(t,r,u,c)}),Qe(n,u=>{const c=of(t,Ie(e,u));es(t,c)}),Bt(t.eventQueue_,e,[])}}function aR(t){Fo(t,"onDisconnectEvents");const e=ou(t),n=ul();fd(t.onDisconnect_,te(),(i,s)=>{const o=_y(i,s,t.serverSyncTree_,e);Y0(n,i,o)});let r=[];fd(n,te(),(i,s)=>{r=r.concat(Mo(t.serverSyncTree_,i,s));const o=of(t,i);es(t,o)}),t.onDisconnect_=ul(),Bt(t.eventQueue_,te(),r)}function lR(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Zk)}function Fo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ge(n,...e)}function wd(t,e,n,r){e&&ls(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function ky(t,e,n){return Wh(t.serverSyncTree_,e,n)||K.EMPTY_NODE}function sf(t,e=t.transactionQueueTree_){if(e||au(t,e),cs(e)){const n=Ny(t,e);H(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&uR(t,Uo(e),n)}else wy(e)&&iu(e,n=>{sf(t,n)})}function uR(t,e,n){const r=n.map(u=>u.currentWriteId),i=ky(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];H(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=at(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Fo(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(rr(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();au(t,Xh(t.transactionQueueTree_,e)),sf(t,t.transactionQueueTree_),Bt(t.eventQueue_,e,c);for(let h=0;h<d.length;h++)ls(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{ut("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}es(t,e)}},o)}function es(t,e){const n=Ry(t,e),r=Uo(n),i=Ny(t,n);return cR(t,i,r),r}function cR(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=at(n,l.path);let c=!1,d;if(H(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(rr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=eR)c=!0,d="maxretry",i=i.concat(rr(t.serverSyncTree_,l.currentWriteId,!0));else{const h=ky(t,l.path,o);l.currentInputSnapshot=h;const f=e[a].update(h.val());if(f!==void 0){su("transaction failed: Data returned ",f,l.path);let p=Le(f);typeof f=="object"&&f!=null&&_n(f,".priority")||(p=p.updatePriority(h.getPriority()));const T=l.currentWriteId,m=ou(t),g=vy(p,h,m);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=g,l.currentWriteId=rf(t),o.splice(o.indexOf(T),1),i=i.concat(dy(t.serverSyncTree_,l.path,g,l.currentWriteId,l.applyLocally)),i=i.concat(rr(t.serverSyncTree_,T,!0))}else c=!0,d="nodata",i=i.concat(rr(t.serverSyncTree_,l.currentWriteId,!0))}Bt(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}au(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)ls(r[a]);sf(t,t.transactionQueueTree_)}function Ry(t,e){let n,r=t.transactionQueueTree_;for(n=Z(e);n!==null&&cs(r)===void 0;)r=Xh(r,n),e=ce(e),n=Z(e);return r}function Ny(t,e){const n=[];return Ay(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Ay(t,e,n){const r=cs(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);iu(e,i=>{Ay(t,i,n)})}function au(t,e){const n=cs(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,yy(e,n.length>0?n:void 0)}iu(e,r=>{au(t,r)})}function of(t,e){const n=Uo(Ry(t,e)),r=Xh(t.transactionQueueTree_,e);return zk(r,i=>{tc(t,i)}),tc(t,r),Ey(r,i=>{tc(t,i)}),n}function tc(t,e){const n=cs(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(H(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(H(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(rr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?yy(e,void 0):n.length=s+1,Bt(t.eventQueue_,Uo(e),i);for(let o=0;o<r.length;o++)ls(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function hR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ut(`Invalid query segment '${n}' in query '${t}'`)}return e}const Bm=function(t,e){const n=fR(t),r=n.namespace;n.domain==="firebase.com"&&Mn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Mn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||CT();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new b0(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ae(n.pathString)}},fR=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=dR(t.substring(c,d)));const h=hR(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const f=e.slice(0,u);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),n=e.substring(p+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",pR=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=$m.charAt(n%64),n=Math.floor(n/64);H(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=$m.charAt(e[i]);return H(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Me(this.snapshot.exportVal())}}class gR{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return H(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class af{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return J(this._path)?null:bh(this._path)}get ref(){return new jn(this._repo,this._path)}get _queryIdentifier(){const e=Rm(this._queryParams),n=Nh(e);return n==="{}"?"default":n}get _queryObject(){return Rm(this._queryParams)}isEqual(e){if(e=je(e),!(e instanceof af))return!1;const n=this._repo===e._repo,r=$0(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+s2(this._path)}}class jn extends af{constructor(e,n){super(e,n,new Mh,!1)}get parent(){const e=B0(this._path);return e===null?null:new jn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Io{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ae(e),r=To(this.ref,e);return new Io(this._node.getChild(n),r,Te)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Io(i,To(this.ref,r),Te)))}hasChild(e){const n=new ae(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function mi(t,e){return t=je(t),t._checkNotDeleted("ref"),e!==void 0?To(t._root,e):t._root}function To(t,e){return t=je(t),Z(t._path)===null?Kk("child","path",e):Iy("child","path",e),new jn(t._repo,Ie(t._path,e))}function Xb(t,e){t=je(t),ef("push",t._path),Sy("push",e,t._path,!0);const n=Ty(t._repo),r=pR(n),i=To(t,r),s=To(t,r);let o;return e!=null?o=Py(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function vR(t){return ef("remove",t._path),Py(t,null)}function Py(t,e){t=je(t),ef("set",t._path),Sy("set",e,t._path,!1);const n=new bo;return sR(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Zb(t,e){qk("update",e,t._path);const n=new bo;return oR(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Hm(t){t=je(t);const e=new _R(()=>{}),n=new lf(e);return iR(t._repo,t,n).then(r=>new Io(r,new jn(t._repo,t._path),t._queryParams.getIndex()))}class lf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new mR("value",this,new Io(e.snapshotNode,new jn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new gR(this,e,n):null}matches(e){return e instanceof lf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}_k(jn);Ck(jn);/**
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
 */const yR="FIREBASE_DATABASE_EMULATOR_HOST",Ed={};let wR=!1;function ER(t,e,n,r){t.repoInfo_=new b0(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function CR(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Mn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ge("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Bm(s,i),a=o.repoInfo,l;typeof process<"u"&&um&&(l=um[yR]),l?(s=`http://${l}?ns=${a.namespace}`,o=Bm(s,i),a=o.repoInfo):o.repoInfo.secure;const u=new OT(t.name,t.options,e);Qk("Invalid Firebase Database URL",o),J(o.path)||Mn("Database URL must point to the root of a Firebase Database (not including a child path).");const c=IR(a,t,u,new bT(t.name,n));return new TR(c,t)}function SR(t,e){const n=Ed[e];(!n||n[t.key]!==t)&&Mn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),lR(t),delete n[t.key]}function IR(t,e,n,r){let i=Ed[e.name];i||(i={},Ed[e.name]=i);let s=i[t.toURLString()];return s&&Mn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new tR(t,wR,n,r),i[t.toURLString()]=s,s}class TR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(nR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new jn(this._repo,te())),this._rootInternal}_delete(){return this._rootInternal!==null&&(SR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Mn("Cannot call "+e+" on a deleted database.")}}function kR(t=Xl(),e){const n=Ir(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=n0("database");r&&RR(n,...r)}return n}function RR(t,e,n,r={}){t=je(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Mn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Mn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Ia(Ia.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:s0(r.mockUserToken,t.app.options.projectId);s=new Ia(o)}ER(i,e,n,s)}/**
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
 */function NR(t){gT(li),nn(new zt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return CR(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),wt(cm,dm,t),wt(cm,dm,"esm2017")}Pn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Pn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};NR();var AR="firebase",PR="10.13.1";/**
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
 */wt(AR,PR,"app");const xy="@firebase/installations",uf="0.6.8";/**
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
 */const by=1e4,Oy=`w:${uf}`,Dy="FIS_v2",xR="https://firebaseinstallations.googleapis.com/v1",bR=60*60*1e3,OR="installations",DR="Installations";/**
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
 */const LR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ei=new ai(OR,DR,LR);function Ly(t){return t instanceof rn&&t.code.includes("request-failed")}/**
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
 */function My({projectId:t}){return`${xR}/projects/${t}/installations`}function Uy(t){return{token:t.token,requestStatus:2,expiresIn:UR(t.expiresIn),creationTime:Date.now()}}async function Fy(t,e){const r=(await e.json()).error;return ei.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function jy({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function MR(t,{refreshToken:e}){const n=jy(t);return n.append("Authorization",FR(e)),n}async function zy(t){const e=await t();return e.status>=500&&e.status<600?t():e}function UR(t){return Number(t.replace("s","000"))}function FR(t){return`${Dy} ${t}`}/**
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
 */async function jR({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=My(t),i=jy(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Dy,appId:t.appId,sdkVersion:Oy},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await zy(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Uy(u.authToken)}}else throw await Fy("Create Installation",l)}/**
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
 */function By(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function zR(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const BR=/^[cdef][\w-]{21}$/,Cd="";function $R(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=HR(t);return BR.test(n)?n:Cd}catch{return Cd}}function HR(t){return zR(t).substr(0,22)}/**
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
 */function lu(t){return`${t.appName}!${t.appId}`}/**
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
 */const $y=new Map;function Hy(t,e){const n=lu(t);Wy(n,e),WR(n,e)}function Wy(t,e){const n=$y.get(t);if(n)for(const r of n)r(e)}function WR(t,e){const n=VR();n&&n.postMessage({key:t,fid:e}),GR()}let Fr=null;function VR(){return!Fr&&"BroadcastChannel"in self&&(Fr=new BroadcastChannel("[Firebase] FID Change"),Fr.onmessage=t=>{Wy(t.data.key,t.data.fid)}),Fr}function GR(){$y.size===0&&Fr&&(Fr.close(),Fr=null)}/**
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
 */const qR="firebase-installations-database",KR=1,ti="firebase-installations-store";let nc=null;function cf(){return nc||(nc=p0(qR,KR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ti)}}})),nc}async function _l(t,e){const n=lu(t),i=(await cf()).transaction(ti,"readwrite"),s=i.objectStore(ti),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Hy(t,e.fid),e}async function Vy(t){const e=lu(t),r=(await cf()).transaction(ti,"readwrite");await r.objectStore(ti).delete(e),await r.done}async function uu(t,e){const n=lu(t),i=(await cf()).transaction(ti,"readwrite"),s=i.objectStore(ti),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Hy(t,a.fid),a}/**
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
 */async function df(t){let e;const n=await uu(t.appConfig,r=>{const i=QR(r),s=YR(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Cd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function QR(t){const e=t||{fid:$R(),registrationStatus:0};return Gy(e)}function YR(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ei.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=JR(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:XR(t)}:{installationEntry:e}}async function JR(t,e){try{const n=await jR(t,e);return _l(t.appConfig,n)}catch(n){throw Ly(n)&&n.customData.serverCode===409?await Vy(t.appConfig):await _l(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function XR(t){let e=await Wm(t.appConfig);for(;e.registrationStatus===1;)await By(100),e=await Wm(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await df(t);return r||n}return e}function Wm(t){return uu(t,e=>{if(!e)throw ei.create("installation-not-found");return Gy(e)})}function Gy(t){return ZR(t)?{fid:t.fid,registrationStatus:0}:t}function ZR(t){return t.registrationStatus===1&&t.registrationTime+by<Date.now()}/**
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
 */async function eN({appConfig:t,heartbeatServiceProvider:e},n){const r=tN(t,n),i=MR(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Oy,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await zy(()=>fetch(r,a));if(l.ok){const u=await l.json();return Uy(u)}else throw await Fy("Generate Auth Token",l)}function tN(t,{fid:e}){return`${My(t)}/${e}/authTokens:generate`}/**
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
 */async function hf(t,e=!1){let n;const r=await uu(t.appConfig,s=>{if(!qy(s))throw ei.create("not-registered");const o=s.authToken;if(!e&&iN(o))return s;if(o.requestStatus===1)return n=nN(t,e),s;{if(!navigator.onLine)throw ei.create("app-offline");const a=oN(s);return n=rN(t,a),a}});return n?await n:r.authToken}async function nN(t,e){let n=await Vm(t.appConfig);for(;n.authToken.requestStatus===1;)await By(100),n=await Vm(t.appConfig);const r=n.authToken;return r.requestStatus===0?hf(t,e):r}function Vm(t){return uu(t,e=>{if(!qy(e))throw ei.create("not-registered");const n=e.authToken;return aN(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function rN(t,e){try{const n=await eN(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await _l(t.appConfig,r),n}catch(n){if(Ly(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Vy(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await _l(t.appConfig,r)}throw n}}function qy(t){return t!==void 0&&t.registrationStatus===2}function iN(t){return t.requestStatus===2&&!sN(t)}function sN(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+bR}function oN(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function aN(t){return t.requestStatus===1&&t.requestTime+by<Date.now()}/**
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
 */async function lN(t){const e=t,{installationEntry:n,registrationPromise:r}=await df(e);return r?r.catch(console.error):hf(e).catch(console.error),n.fid}/**
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
 */async function uN(t,e=!1){const n=t;return await cN(n),(await hf(n,e)).token}async function cN(t){const{registrationPromise:e}=await df(t);e&&await e}/**
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
 */function dN(t){if(!t||!t.options)throw rc("App Configuration");if(!t.name)throw rc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw rc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function rc(t){return ei.create("missing-app-config-values",{valueName:t})}/**
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
 */const Ky="installations",hN="installations-internal",fN=t=>{const e=t.getProvider("app").getImmediate(),n=dN(e),r=Ir(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},pN=t=>{const e=t.getProvider("app").getImmediate(),n=Ir(e,Ky).getImmediate();return{getId:()=>lN(n),getToken:i=>uN(n,i)}};function mN(){nn(new zt(Ky,fN,"PUBLIC")),nn(new zt(hN,pN,"PRIVATE"))}mN();wt(xy,uf);wt(xy,uf,"esm2017");/**
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
 */const vl="analytics",gN="firebase_id",_N="origin",vN=60*1e3,yN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ff="https://www.googletagmanager.com/gtag/js";/**
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
 */const Et=new Jl("@firebase/analytics");/**
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
 */const wN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Nt=new ai("analytics","Analytics",wN);/**
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
 */function EN(t){if(!t.startsWith(ff)){const e=Nt.create("invalid-gtag-resource",{gtagURL:t});return Et.warn(e.message),""}return t}function Qy(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function CN(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function SN(t,e){const n=CN("firebase-js-sdk-policy",{createScriptURL:EN}),r=document.createElement("script"),i=`${ff}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function IN(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function TN(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await Qy(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){Et.error(a)}t("config",i,s)}async function kN(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Qy(n);for(const l of o){const u=a.find(d=>d.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Et.error(s)}}function RN(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await kN(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await TN(t,e,n,r,a,l)}else if(s==="consent"){const[a,l]=o;t("consent",a,l)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Et.error(a)}}return i}function NN(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=RN(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function AN(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(ff)&&n.src.includes(t))return n;return null}/**
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
 */const PN=30,xN=1e3;class bN{constructor(e={},n=xN){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Yy=new bN;function ON(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function DN(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:ON(r)},s=yN.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Nt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function LN(t,e=Yy,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Nt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Nt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new FN;return setTimeout(async()=>{a.abort()},vN),Jy({appId:r,apiKey:i,measurementId:s},o,a,e)}async function Jy(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Yy){var s;const{appId:o,measurementId:a}=t;try{await MN(r,e)}catch(l){if(a)return Et.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await DN(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!UN(u)){if(i.deleteThrottleMetadata(o),a)return Et.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?em(n,i.intervalMillis,PN):em(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,d),Et.debug(`Calling attemptFetch again in ${c} millis`),Jy(t,d,r,i)}}function MN(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Nt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function UN(t){if(!(t instanceof rn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class FN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function jN(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function zN(){if(u0())try{await c0()}catch(t){return Et.warn(Nt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Et.warn(Nt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function BN(t,e,n,r,i,s,o){var a;const l=LN(t);l.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&Et.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>Et.error(f)),e.push(l);const u=zN().then(f=>{if(f)return r.getId()}),[c,d]=await Promise.all([l,u]);AN(s)||SN(s,c.measurementId),i("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[_N]="firebase",h.update=!0,d!=null&&(h[gN]=d),i("config",c.measurementId,h),c.measurementId}/**
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
 */class $N{constructor(e){this.app=e}_delete(){return delete Vs[this.app.options.appId],Promise.resolve()}}let Vs={},Gm=[];const qm={};let ic="dataLayer",HN="gtag",Km,Xy,Qm=!1;function WN(){const t=[];if(o0()&&t.push("This is a browser extension environment."),YS()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Nt.create("invalid-analytics-context",{errorInfo:e});Et.warn(n.message)}}function VN(t,e,n){WN();const r=t.options.appId;if(!r)throw Nt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Et.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Nt.create("no-api-key");if(Vs[r]!=null)throw Nt.create("already-exists",{id:r});if(!Qm){IN(ic);const{wrappedGtag:s,gtagCore:o}=NN(Vs,Gm,qm,ic,HN);Xy=s,Km=o,Qm=!0}return Vs[r]=BN(t,Gm,qm,e,Km,ic,n),new $N(t)}function GN(t=Xl()){t=je(t);const e=Ir(t,vl);return e.isInitialized()?e.getImmediate():qN(t)}function qN(t,e={}){const n=Ir(t,vl);if(n.isInitialized()){const i=n.getImmediate();if(mo(e,n.getOptions()))return i;throw Nt.create("already-initialized")}return n.initialize({options:e})}function KN(t,e,n,r){t=je(t),jN(Xy,Vs[t.app.options.appId],e,n,r).catch(i=>Et.error(i))}const Ym="@firebase/analytics",Jm="0.10.7";function QN(){nn(new zt(vl,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return VN(r,i,n)},"PUBLIC")),nn(new zt("analytics-internal",t,"PRIVATE")),wt(Ym,Jm),wt(Ym,Jm,"esm2017");function t(e){try{const n=e.getProvider(vl).getImmediate();return{logEvent:(r,i,s)=>KN(n,r,i,s)}}catch(n){throw Nt.create("interop-component-reg-failed",{reason:n})}}}QN();function pf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Zy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YN=Zy,e1=new ai("auth","Firebase",Zy());/**
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
 */const yl=new Jl("@firebase/auth");function JN(t,...e){yl.logLevel<=oe.WARN&&yl.warn(`Auth (${li}): ${t}`,...e)}function Ta(t,...e){yl.logLevel<=oe.ERROR&&yl.error(`Auth (${li}): ${t}`,...e)}/**
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
 */function gn(t,...e){throw gf(t,...e)}function en(t,...e){return gf(t,...e)}function mf(t,e,n){const r=Object.assign(Object.assign({},YN()),{[e]:n});return new ai("auth","Firebase",r).create(e,{appName:t.name})}function Wr(t){return mf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function XN(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&gn(t,"argument-error"),mf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function gf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return e1.create(t,...e)}function Q(t,e,...n){if(!t)throw gf(e,...n)}function Tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ta(e),new Error(e)}function Un(t,e){t||Tn(e)}/**
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
 */function Sd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ZN(){return Xm()==="http:"||Xm()==="https:"}function Xm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function eA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ZN()||o0()||"connection"in navigator)?navigator.onLine:!0}function tA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class jo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Un(n>e,"Short delay should be less than long delay!"),this.isMobile=Th()||a0()}get(){return eA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function _f(t,e){Un(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class t1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const nA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const rA=new jo(3e4,6e4);function vf(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ds(t,e,n,r,i={}){return n1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=as(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),t1.fetch()(r1(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function n1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},nA),e);try{const i=new sA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw la(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw la(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw la(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw la(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw mf(t,c,u);gn(t,c)}}catch(i){if(i instanceof rn)throw i;gn(t,"network-request-failed",{message:String(i)})}}async function iA(t,e,n,r,i={}){const s=await ds(t,e,n,r,i);return"mfaPendingCredential"in s&&gn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function r1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?_f(t.config,i):`${t.config.apiScheme}://${i}`}class sA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(en(this.auth,"network-request-failed")),rA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function la(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=en(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function oA(t,e){return ds(t,"POST","/v1/accounts:delete",e)}async function i1(t,e){return ds(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Gs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function aA(t,e=!1){const n=je(t),r=await n.getIdToken(e),i=yf(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Gs(sc(i.auth_time)),issuedAtTime:Gs(sc(i.iat)),expirationTime:Gs(sc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function sc(t){return Number(t)*1e3}function yf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ta("JWT malformed, contained fewer than 3 sections"),null;try{const i=nl(n);return i?JSON.parse(i):(Ta("Failed to decode base64 JWT payload"),null)}catch(i){return Ta("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Zm(t){const e=yf(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ko(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof rn&&lA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function lA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class uA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Id{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gs(this.lastLoginAt),this.creationTime=Gs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ko(t,i1(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?s1(s.providerUserInfo):[],a=dA(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Id(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function cA(t){const e=je(t);await wl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function s1(t){return t.map(e=>{var{providerId:n}=e,r=pf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function hA(t,e){const n=await n1(t,{},async()=>{const r=as({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=r1(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",t1.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function fA(t,e){return ds(t,"POST","/v2/accounts:revokeToken",vf(t,e))}/**
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
 */class ji{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=Zm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await hA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ji;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ji,this.toJSON())}_performRefresh(){return Tn("not implemented")}}/**
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
 */function Vn(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class kn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=pf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new uA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Id(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ko(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return aA(this,e)}reload(){return cA(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new kn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await wl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Sn(this.auth.app))return Promise.reject(Wr(this.auth));const e=await this.getIdToken();return await ko(this,oA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,g=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:C,isAnonymous:P,providerData:S,stsTokenManager:N}=n;Q(v&&N,e,"internal-error");const _=ji.fromJSON(this.name,N);Q(typeof v=="string",e,"internal-error"),Vn(d,e.name),Vn(h,e.name),Q(typeof C=="boolean",e,"internal-error"),Q(typeof P=="boolean",e,"internal-error"),Vn(f,e.name),Vn(p,e.name),Vn(y,e.name),Vn(T,e.name),Vn(m,e.name),Vn(g,e.name);const w=new kn({uid:v,auth:e,email:h,emailVerified:C,displayName:d,isAnonymous:P,photoURL:p,phoneNumber:f,tenantId:y,stsTokenManager:_,createdAt:m,lastLoginAt:g});return S&&Array.isArray(S)&&(w.providerData=S.map(R=>Object.assign({},R))),T&&(w._redirectEventId=T),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new ji;i.updateFromServerResponse(n);const s=new kn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await wl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?s1(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ji;a.updateFromIdToken(r);const l=new kn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Id(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
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
 */const eg=new Map;function Rn(t){Un(t instanceof Function,"Expected a class definition");let e=eg.get(t);return e?(Un(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,eg.set(t,e),e)}/**
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
 */class o1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}o1.type="NONE";const tg=o1;/**
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
 */function ka(t,e,n){return`firebase:${t}:${e}:${n}`}class zi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ka(this.userKey,i.apiKey,s),this.fullPersistenceKey=ka("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?kn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zi(Rn(tg),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Rn(tg);const o=ka(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=kn._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new zi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new zi(s,e,r))}}/**
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
 */function ng(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(c1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(a1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(h1(e))return"Blackberry";if(f1(e))return"Webos";if(l1(e))return"Safari";if((e.includes("chrome/")||u1(e))&&!e.includes("edge/"))return"Chrome";if(d1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function a1(t=ct()){return/firefox\//i.test(t)}function l1(t=ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function u1(t=ct()){return/crios\//i.test(t)}function c1(t=ct()){return/iemobile/i.test(t)}function d1(t=ct()){return/android/i.test(t)}function h1(t=ct()){return/blackberry/i.test(t)}function f1(t=ct()){return/webos/i.test(t)}function wf(t=ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function pA(t=ct()){var e;return wf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mA(){return QS()&&document.documentMode===10}function p1(t=ct()){return wf(t)||d1(t)||f1(t)||h1(t)||/windows phone/i.test(t)||c1(t)}/**
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
 */function m1(t,e=[]){let n;switch(t){case"Browser":n=ng(ct());break;case"Worker":n=`${ng(ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${li}/${r}`}/**
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
 */class gA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function _A(t,e={}){return ds(t,"GET","/v2/passwordPolicy",vf(t,e))}/**
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
 */const vA=6;class yA{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:vA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class wA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rg(this),this.idTokenSubscription=new rg(this),this.beforeStateQueue=new gA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=e1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await zi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await i1(this,{idToken:e}),r=await kn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Sn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Sn(this.app))return Promise.reject(Wr(this));const n=e?je(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Sn(this.app)?Promise.reject(Wr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Sn(this.app)?Promise.reject(Wr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _A(this),n=new yA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ai("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await fA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await zi.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=m1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&JN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function cu(t){return je(t)}class rg{constructor(e){this.auth=e,this.observer=null,this.addObserver=rI(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ef={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function EA(t){Ef=t}function CA(t){return Ef.loadJS(t)}function SA(){return Ef.gapiScript}function IA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function TA(t,e){const n=Ir(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(mo(s,e??{}))return i;gn(i,"already-initialized")}return n.initialize({options:e})}function kA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function RA(t,e,n){const r=cu(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=g1(e),{host:o,port:a}=NA(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),AA()}function g1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function NA(t){const e=g1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ig(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ig(o)}}}function ig(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function AA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class _1{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Tn("not implemented")}_getIdTokenResponse(e){return Tn("not implemented")}_linkToIdToken(e,n){return Tn("not implemented")}_getReauthenticationResolver(e){return Tn("not implemented")}}/**
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
 */async function Bi(t,e){return iA(t,"POST","/v1/accounts:signInWithIdp",vf(t,e))}/**
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
 */const PA="http://localhost";class ni extends _1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ni(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):gn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=pf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ni(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Bi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Bi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Bi(e,n)}buildRequest(){const e={requestUri:PA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=as(n)}return e}}/**
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
 */class Cf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class zo extends Cf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Yn extends zo{constructor(){super("facebook.com")}static credential(e){return ni._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
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
 */class dn extends zo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ni._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return dn.credential(n,r)}catch{return null}}}dn.GOOGLE_SIGN_IN_METHOD="google.com";dn.PROVIDER_ID="google.com";/**
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
 */class Jn extends zo{constructor(){super("github.com")}static credential(e){return ni._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
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
 */class Xn extends zo{constructor(){super("twitter.com")}static credential(e,n){return ni._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.TWITTER_SIGN_IN_METHOD="twitter.com";Xn.PROVIDER_ID="twitter.com";/**
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
 */class ts{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await kn._fromIdTokenResponse(e,r,i),o=sg(r);return new ts({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=sg(r);return new ts({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function sg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class El extends rn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,El.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new El(e,n,r,i)}}function v1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?El._fromErrorAndOperation(t,s,e,r):s})}async function xA(t,e,n=!1){const r=await ko(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ts._forOperation(t,"link",r)}/**
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
 */async function bA(t,e,n=!1){const{auth:r}=t;if(Sn(r.app))return Promise.reject(Wr(r));const i="reauthenticate";try{const s=await ko(t,v1(r,i,e,t),n);Q(s.idToken,r,"internal-error");const o=yf(s.idToken);Q(o,r,"internal-error");const{sub:a}=o;return Q(t.uid===a,r,"user-mismatch"),ts._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&gn(r,"user-mismatch"),s}}/**
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
 */async function OA(t,e,n=!1){if(Sn(t.app))return Promise.reject(Wr(t));const r="signIn",i=await v1(t,r,e),s=await ts._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function DA(t,e,n,r){return je(t).onIdTokenChanged(e,n,r)}function LA(t,e,n){return je(t).beforeAuthStateChanged(e,n)}const Cl="__sak";/**
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
 */class y1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Cl,"1"),this.storage.removeItem(Cl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const MA=1e3,UA=10;class w1 extends y1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=p1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);mA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,UA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},MA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}w1.type="LOCAL";const FA=w1;/**
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
 */class E1 extends y1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}E1.type="SESSION";const C1=E1;/**
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
 */function jA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class du{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new du(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await jA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}du.receivers=[];/**
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
 */function Sf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class zA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Sf("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function mn(){return window}function BA(t){mn().location.href=t}/**
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
 */function S1(){return typeof mn().WorkerGlobalScope<"u"&&typeof mn().importScripts=="function"}async function $A(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function HA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function WA(){return S1()?self:null}/**
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
 */const I1="firebaseLocalStorageDb",VA=1,Sl="firebaseLocalStorage",T1="fbase_key";class Bo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function hu(t,e){return t.transaction([Sl],e?"readwrite":"readonly").objectStore(Sl)}function GA(){const t=indexedDB.deleteDatabase(I1);return new Bo(t).toPromise()}function Td(){const t=indexedDB.open(I1,VA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Sl,{keyPath:T1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Sl)?e(r):(r.close(),await GA(),e(await Td()))})})}async function og(t,e,n){const r=hu(t,!0).put({[T1]:e,value:n});return new Bo(r).toPromise()}async function qA(t,e){const n=hu(t,!1).get(e),r=await new Bo(n).toPromise();return r===void 0?null:r.value}function ag(t,e){const n=hu(t,!0).delete(e);return new Bo(n).toPromise()}const KA=800,QA=3;class k1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Td(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>QA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return S1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=du._getInstance(WA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $A(),!this.activeServiceWorker)return;this.sender=new zA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||HA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Td();return await og(e,Cl,"1"),await ag(e,Cl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>og(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>qA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ag(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=hu(i,!1).getAll();return new Bo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),KA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}k1.type="LOCAL";const YA=k1;new jo(3e4,6e4);/**
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
 */function R1(t,e){return e?Rn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class If extends _1{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Bi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Bi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function JA(t){return OA(t.auth,new If(t),t.bypassAuthState)}function XA(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),bA(n,new If(t),t.bypassAuthState)}async function ZA(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),xA(n,new If(t),t.bypassAuthState)}/**
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
 */class N1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JA;case"linkViaPopup":case"linkViaRedirect":return ZA;case"reauthViaPopup":case"reauthViaRedirect":return XA;default:gn(this.auth,"internal-error")}}resolve(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const eP=new jo(2e3,1e4);async function tP(t,e,n){if(Sn(t.app))return Promise.reject(en(t,"operation-not-supported-in-this-environment"));const r=cu(t);XN(t,e,Cf);const i=R1(r,n);return new jr(r,"signInViaPopup",e,i).executeNotNull()}class jr extends N1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,jr.currentPopupAction&&jr.currentPopupAction.cancel(),jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){Un(this.filter.length===1,"Popup operations only handle one event");const e=Sf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,eP.get())};e()}}jr.currentPopupAction=null;/**
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
 */const nP="pendingRedirect",Ra=new Map;class rP extends N1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ra.get(this.auth._key());if(!e){try{const r=await iP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ra.set(this.auth._key(),e)}return this.bypassAuthState||Ra.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iP(t,e){const n=aP(e),r=oP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function sP(t,e){Ra.set(t._key(),e)}function oP(t){return Rn(t._redirectPersistence)}function aP(t){return ka(nP,t.config.apiKey,t.name)}async function lP(t,e,n=!1){if(Sn(t.app))return Promise.reject(Wr(t));const r=cu(t),i=R1(r,e),o=await new rP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const uP=10*60*1e3;class cP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!A1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(en(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uP&&this.cachedEventUids.clear(),this.cachedEventUids.has(lg(e))}saveEventToCache(e){this.cachedEventUids.add(lg(e)),this.lastProcessedEventTime=Date.now()}}function lg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function A1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function dP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return A1(t);default:return!1}}/**
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
 */async function hP(t,e={}){return ds(t,"GET","/v1/projects",e)}/**
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
 */const fP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pP=/^https?/;async function mP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hP(t);for(const n of e)try{if(gP(n))return}catch{}gn(t,"unauthorized-domain")}function gP(t){const e=Sd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!pP.test(n))return!1;if(fP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const _P=new jo(3e4,6e4);function ug(){const t=mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function vP(t){return new Promise((e,n)=>{var r,i,s;function o(){ug(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ug(),n(en(t,"network-request-failed"))},timeout:_P.get()})}if(!((i=(r=mn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=mn().gapi)===null||s===void 0)&&s.load)o();else{const a=IA("iframefcb");return mn()[a]=()=>{gapi.load?o():n(en(t,"network-request-failed"))},CA(`${SA()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Na=null,e})}let Na=null;function yP(t){return Na=Na||vP(t),Na}/**
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
 */const wP=new jo(5e3,15e3),EP="__/auth/iframe",CP="emulator/auth/iframe",SP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},IP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function TP(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_f(e,CP):`https://${t.config.authDomain}/${EP}`,r={apiKey:e.apiKey,appName:t.name,v:li},i=IP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${as(r).slice(1)}`}async function kP(t){const e=await yP(t),n=mn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:TP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:SP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=en(t,"network-request-failed"),a=mn().setTimeout(()=>{s(o)},wP.get());function l(){mn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const RP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},NP=500,AP=600,PP="_blank",xP="http://localhost";class cg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bP(t,e,n,r=NP,i=AP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},RP),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ct().toLowerCase();n&&(a=u1(u)?PP:n),a1(u)&&(e=e||xP,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[f,p])=>`${h}${f}=${p},`,"");if(pA(u)&&a!=="_self")return OP(e||"",a),new cg(null);const d=window.open(e||"",a,c);Q(d,t,"popup-blocked");try{d.focus()}catch{}return new cg(d)}function OP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const DP="__/auth/handler",LP="emulator/auth/handler",MP=encodeURIComponent("fac");async function dg(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:li,eventId:i};if(e instanceof Cf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",id(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries({}))o[c]=d}if(e instanceof zo){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${MP}=${encodeURIComponent(l)}`:"";return`${UP(t)}?${as(a).slice(1)}${u}`}function UP({config:t}){return t.emulator?_f(t,LP):`https://${t.authDomain}/${DP}`}/**
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
 */const oc="webStorageSupport";class FP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=C1,this._completeRedirectFn=lP,this._overrideRedirectResult=sP}async _openPopup(e,n,r,i){var s;Un((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await dg(e,n,r,Sd(),i);return bP(e,o,Sf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await dg(e,n,r,Sd(),i);return BA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Un(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await kP(e),r=new cP(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(oc,{type:oc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[oc];o!==void 0&&n(!!o),gn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return p1()||l1()||wf()}}const jP=FP;var hg="@firebase/auth",fg="1.7.8";/**
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
 */class zP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function BP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $P(t){nn(new zt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:m1(t)},u=new wA(r,i,s,l);return kA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),nn(new zt("auth-internal",e=>{const n=cu(e.getProvider("auth").getImmediate());return(r=>new zP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wt(hg,fg,BP(t)),wt(hg,fg,"esm2017")}/**
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
 */const HP=5*60,WP=i0("authIdTokenMaxAge")||HP;let pg=null;const VP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>WP)return;const i=n==null?void 0:n.token;pg!==i&&(pg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function GP(t=Xl()){const e=Ir(t,"auth");if(e.isInitialized())return e.getImmediate();const n=TA(t,{popupRedirectResolver:jP,persistence:[YA,FA,C1]}),r=i0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=VP(s.toString());LA(n,o,()=>o(n.currentUser)),DA(n,a=>o(a))}}const i=t0("auth");return i&&RA(n,`http://${i}`),n}function qP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}EA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=en("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",qP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$P("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1="firebasestorage.googleapis.com",x1="storageBucket",KP=2*60*1e3,QP=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re extends rn{constructor(e,n,r=0){super(ac(e),`Firebase Storage: ${n} (${ac(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Re.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ac(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ke;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ke||(ke={}));function ac(t){return"storage/"+t}function Tf(){const t="An unknown error occurred, please check the error payload for server response.";return new Re(ke.UNKNOWN,t)}function YP(t){return new Re(ke.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function JP(t){return new Re(ke.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function XP(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Re(ke.UNAUTHENTICATED,t)}function ZP(){return new Re(ke.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function ex(t){return new Re(ke.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function tx(){return new Re(ke.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function nx(){return new Re(ke.CANCELED,"User canceled the upload/download.")}function rx(t){return new Re(ke.INVALID_URL,"Invalid URL '"+t+"'.")}function ix(t){return new Re(ke.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function sx(){return new Re(ke.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+x1+"' property when initializing the app?")}function ox(){return new Re(ke.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function ax(){return new Re(ke.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function lx(t){return new Re(ke.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function kd(t){return new Re(ke.INVALID_ARGUMENT,t)}function b1(){return new Re(ke.APP_DELETED,"The Firebase app was deleted.")}function ux(t){return new Re(ke.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function qs(t,e){return new Re(ke.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ks(t){throw new Re(ke.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=kt.makeFromUrl(e,n)}catch{return new kt(e,"")}if(r.path==="")return r;throw ix(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(C){C.path_=decodeURIComponent(C.path)}const c="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",f=new RegExp(`^https?://${d}/${c}/b/${i}/o${h}`,"i"),p={bucket:1,path:3},y=n===P1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,T="([^?#]*)",m=new RegExp(`^https?://${y}/${i}/${T}`,"i"),v=[{regex:a,indices:l,postModify:s},{regex:f,indices:p,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let C=0;C<v.length;C++){const P=v[C],S=P.regex.exec(e);if(S){const N=S[P.indices.bucket];let _=S[P.indices.path];_||(_=""),r=new kt(N,_),P.postModify(r);break}}if(r==null)throw rx(e);return r}}class cx{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dx(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...T){u||(u=!0,e.apply(null,T))}function d(T){i=setTimeout(()=>{i=null,t(f,l())},T)}function h(){s&&clearTimeout(s)}function f(T,...m){if(u){h();return}if(T){h(),c.call(null,T,...m);return}if(l()||o){h(),c.call(null,T,...m);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,d(v)}let p=!1;function y(T){p||(p=!0,h(),!u&&(i!==null?(T||(a=2),clearTimeout(i),d(0)):T||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function hx(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fx(t){return t!==void 0}function px(t){return typeof t=="object"&&!Array.isArray(t)}function kf(t){return typeof t=="string"||t instanceof String}function mg(t){return Rf()&&t instanceof Blob}function Rf(){return typeof Blob<"u"}function gg(t,e,n,r){if(r<e)throw kd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw kd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function O1(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Vr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Vr||(Vr={}));/**
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
 */function mx(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(e,n,r,i,s,o,a,l,u,c,d,h=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=d,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ua(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Vr.NO_ERROR,l=s.getStatus();if(!a||mx(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Vr.ABORT;r(!1,new ua(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new ua(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());fx(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Tf();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?b1():nx();o(l)}else{const l=tx();o(l)}};this.canceled_?n(!1,new ua(!1,null,!0)):this.backoffId_=dx(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&hx(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ua{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function _x(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function vx(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function yx(t,e){e&&(t["X-Firebase-GMPID"]=e)}function wx(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Ex(t,e,n,r,i,s,o=!0){const a=O1(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return yx(u,e),_x(u,n),vx(u,s),wx(u,r),new gx(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cx(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Sx(...t){const e=Cx();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Rf())return new Blob(t);throw new Re(ke.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Ix(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function Tx(t){if(typeof atob>"u")throw lx("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class lc{constructor(e,n){this.data=e,this.contentType=n||null}}function kx(t,e){switch(t){case hn.RAW:return new lc(D1(e));case hn.BASE64:case hn.BASE64URL:return new lc(L1(t,e));case hn.DATA_URL:return new lc(Nx(e),Ax(e))}throw Tf()}function D1(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Rx(t){let e;try{e=decodeURIComponent(t)}catch{throw qs(hn.DATA_URL,"Malformed data URL.")}return D1(e)}function L1(t,e){switch(t){case hn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw qs(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case hn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw qs(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Tx(e)}catch(i){throw i.message.includes("polyfill")?i:qs(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class M1{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw qs(hn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Px(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Nx(t){const e=new M1(t);return e.base64?L1(hn.BASE64,e.rest):Rx(e.rest)}function Ax(t){return new M1(t).contentType}function Px(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n){let r=0,i="";mg(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(mg(this.data_)){const r=this.data_,i=Ix(r,e,n);return i===null?null:new Zn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Zn(r,!0)}}static getBlob(...e){if(Rf()){const n=e.map(r=>r instanceof Zn?r.data_:r);return new Zn(Sx.apply(null,n))}else{const n=e.map(o=>kf(o)?kx(hn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Zn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U1(t){let e;try{e=JSON.parse(t)}catch{return null}return px(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xx(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function bx(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function F1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ox(t,e){return e}class it{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||Ox}}let ca=null;function Dx(t){return!kf(t)||t.length<2?t:F1(t)}function j1(){if(ca)return ca;const t=[];t.push(new it("bucket")),t.push(new it("generation")),t.push(new it("metageneration")),t.push(new it("name","fullPath",!0));function e(s,o){return Dx(o)}const n=new it("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new it("size");return i.xform=r,t.push(i),t.push(new it("timeCreated")),t.push(new it("updated")),t.push(new it("md5Hash",null,!0)),t.push(new it("cacheControl",null,!0)),t.push(new it("contentDisposition",null,!0)),t.push(new it("contentEncoding",null,!0)),t.push(new it("contentLanguage",null,!0)),t.push(new it("contentType",null,!0)),t.push(new it("metadata","customMetadata",!0)),ca=t,ca}function Lx(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new kt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function Mx(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return Lx(r,t),r}function z1(t,e,n){const r=U1(e);return r===null?null:Mx(t,r,n)}function Ux(t,e,n,r){const i=U1(e);if(i===null||!kf(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,d=t.fullPath,h="/b/"+o(c)+"/o/"+o(d),f=Nf(h,n,r),p=O1({alt:"media",token:u});return f+p})[0]}function Fx(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class B1{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $1(t){if(!t)throw Tf()}function jx(t,e){function n(r,i){const s=z1(t,i,e);return $1(s!==null),s}return n}function zx(t,e){function n(r,i){const s=z1(t,i,e);return $1(s!==null),Ux(s,i,t.host,t._protocol)}return n}function H1(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=ZP():i=XP():n.getStatus()===402?i=JP(t.bucket):n.getStatus()===403?i=ex(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Bx(t){const e=H1(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=YP(t.path)),s.serverResponse=i.serverResponse,s}return n}function $x(t,e,n){const r=e.fullServerUrl(),i=Nf(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new B1(i,s,zx(t,n),o);return a.errorHandler=Bx(e),a}function Hx(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Wx(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Hx(null,e)),r}function Vx(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let v="";for(let C=0;C<2;C++)v=v+Math.random().toString().slice(2);return v}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=Wx(e,r,i),c=Fx(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,h=`\r
--`+l+"--",f=Zn.getBlob(d,r,h);if(f===null)throw ox();const p={name:u.fullPath},y=Nf(s,t.host,t._protocol),T="POST",m=t.maxUploadRetryTime,g=new B1(y,T,jx(t,n),m);return g.urlParams=p,g.headers=o,g.body=f.uploadData(),g.errorHandler=H1(e),g}class Gx{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Vr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Vr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Vr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw ks("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ks("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ks("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ks("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ks("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class qx extends Gx{initXhr(){this.xhr_.responseType="text"}}function W1(){return new qx}/**
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
 */class ri{constructor(e,n){this._service=e,n instanceof kt?this._location=n:this._location=kt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ri(e,n)}get root(){const e=new kt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return F1(this._location.path)}get storage(){return this._service}get parent(){const e=xx(this._location.path);if(e===null)return null;const n=new kt(this._location.bucket,e);return new ri(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw ux(e)}}function Kx(t,e,n){t._throwIfRoot("uploadBytes");const r=Vx(t.storage,t._location,j1(),new Zn(e,!0),n);return t.storage.makeRequestWithTokens(r,W1).then(i=>({metadata:i,ref:t}))}function Qx(t){t._throwIfRoot("getDownloadURL");const e=$x(t.storage,t._location,j1());return t.storage.makeRequestWithTokens(e,W1).then(n=>{if(n===null)throw ax();return n})}function Yx(t,e){const n=bx(t._location.path,e),r=new kt(t._location.bucket,n);return new ri(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jx(t){return/^[A-Za-z]+:\/\//.test(t)}function Xx(t,e){return new ri(t,e)}function V1(t,e){if(t instanceof Af){const n=t;if(n._bucket==null)throw sx();const r=new ri(n,n._bucket);return e!=null?V1(r,e):r}else return e!==void 0?Yx(t,e):t}function Zx(t,e){if(e&&Jx(e)){if(t instanceof Af)return Xx(t,e);throw kd("To use ref(service, url), the first argument must be a Storage instance.")}else return V1(t,e)}function _g(t,e){const n=e==null?void 0:e[x1];return n==null?null:kt.makeFromBucketSpec(n,t)}function eb(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:s0(i,t.app.options.projectId))}class Af{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=P1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=KP,this._maxUploadRetryTime=QP,this._requests=new Set,i!=null?this._bucket=kt.makeFromBucketSpec(i,this._host):this._bucket=_g(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=kt.makeFromBucketSpec(this._url,e):this._bucket=_g(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){gg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){gg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ri(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new cx(b1());{const o=Ex(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const vg="@firebase/storage",yg="0.13.1";/**
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
 */const G1="storage";function e4(t,e,n){return t=je(t),Kx(t,e,n)}function t4(t){return t=je(t),Qx(t)}function n4(t,e){return t=je(t),Zx(t,e)}function tb(t=Xl(),e){t=je(t);const r=Ir(t,G1).getImmediate({identifier:e}),i=n0("storage");return i&&nb(r,...i),r}function nb(t,e,n,r={}){eb(t,e,n,r)}function rb(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Af(n,r,i,e,li)}function ib(){nn(new zt(G1,rb,"PUBLIC").setMultipleInstances(!0)),wt(vg,yg,""),wt(vg,yg,"esm2017")}ib();const sb={apiKey:"AIzaSyBJm9fkGNwaMtHi5ChRDULA2UgLrFT8nvI",authDomain:"ranking-bp.firebaseapp.com",projectId:"ranking-bp",storageBucket:"ranking-bp.appspot.com",messagingSenderId:"1045536295453",appId:"1:1045536295453:web:27da7bdeee70b6ac8894f4",measurementId:"G-9HBZ9LWGLH"},fu=m0(sb),q1=GP(fu);GN(fu);new dn;const gi=kR(fu),r4=tb(fu),di=j.createContext(),ob=Nn.memo(({children:t})=>{const[e,n]=j.useState([]),[r,i]=j.useState([]),[s,o]=j.useState([]),[a,l]=j.useState([]);return j.useEffect(()=>{const u=async()=>{const p=mi(gi,"banners"),y=mi(gi,"jugadores"),T=mi(gi,"torneos"),m=mi(gi,"clubs"),g=async(v,C,P)=>{const N=(await Hm(C)).val(),_=N?Array.isArray(N)?N:Object.values(N):[];_.length>0&&localStorage.setItem(v,JSON.stringify(_)),P(_)};await g("banners",p,n),await g("jugadores",y,i),await g("torneos",T,o),await g("clubs",m,l)},c=JSON.parse(localStorage.getItem("banners"))||[],d=JSON.parse(localStorage.getItem("jugadores"))||[],h=JSON.parse(localStorage.getItem("torneos"))||[],f=JSON.parse(localStorage.getItem("clubs"))||[];c.length&&n(c),d.length&&i(d),h.length&&o(h),f.length&&l(f),u()},[]),j.useEffect(()=>{const u=async()=>{const c=new Date().toISOString().split("T")[0],d=s.filter(p=>p.fecha.split("/").reverse().join("-")>=c),h=mi(gi,"torneos");(await Hm(h)).forEach(p=>{p.val().fecha.split("/").reverse().join("-")<c&&vR(mi(gi,`torneos/${p.key}`))}),o(d)};s.length&&u()},[s]),k.jsx(di.Provider,{value:{banners:e,jugadores:r,setJugadores:i,torneos:s,clubes:a},children:t})}),ab=()=>{const{banners:t}=j.useContext(di),[e,n]=j.useState(0),[r,i]=j.useState(!0),s=j.useRef(null),o=j.useRef(null),a=j.useRef(null);j.useEffect(()=>{if(!t||t.length===0)return;const d=T=>{const m=s.current;T>=t.length&&n(0),T<0&&n(t.length-1),m.style.transform=`translateX(${-e*100}%)`,h()},h=()=>{o.current.querySelectorAll(".dot").forEach((m,g)=>{m.classList.toggle("active",g===e)})},f=()=>{a.current=setInterval(()=>{r&&n(T=>(T+1)%t.length)},3e3)},p=()=>{let T=0,m=0,g=0,v=!1;const C=s.current,P=_=>{T=_.clientX,C.style.transition="none",v=!0,i(!1)},S=_=>{v&&(m=_.clientX-T,C.style.transform=`translateX(${m+g}px)`)},N=_=>{if(!v)return;const w=_.clientX-T;let R=e;w<-50?R=(e+1)%t.length:w>50&&(R=(e-1+t.length)%t.length),n(R),d(R),g+=m,C.style.transition="transform 0.3s ease-out",v=!1,i(!0),T=void 0,m=0};return C.addEventListener("pointerdown",P),C.addEventListener("pointermove",S),C.addEventListener("pointerup",N),C.addEventListener("pointercancel",()=>{v=!1}),()=>{C.removeEventListener("pointerdown",P),C.removeEventListener("pointermove",S),C.removeEventListener("pointerup",N)}};d(e),f();const y=p();return()=>{clearInterval(a.current),y()}},[e,r,t]);const l=()=>{n(d=>(d+1)%t.length)},u=()=>{n(d=>(d-1+t.length)%t.length)},c=d=>{n(d)};return k.jsxs("div",{className:"banner-slider",children:[k.jsx("div",{className:"slides",ref:s,children:t&&t.length>0?t.map((d,h)=>k.jsx("div",{className:"slide",children:k.jsx("a",{href:d.link,children:k.jsx("img",{src:d.photoURL,alt:d.title,className:"banner-slide-image",onError:f=>{f.target.onerror=null,f.target.src="https://via.placeholder.com/150"}})})},h)):k.jsx("div",{children:"No banners available"})}),k.jsx("div",{className:"dots",ref:o,children:t&&t.map((d,h)=>k.jsx("span",{className:`dot ${h===e?"active":""}`,onClick:()=>c(h)},h))}),k.jsx("button",{className:"prev",onClick:u,children:"❮"}),k.jsx("button",{className:"next",onClick:l,children:"❯"})]})};var K1={exports:{}},lb="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ub=lb,cb=ub;function Q1(){}function Y1(){}Y1.resetWarningCache=Q1;var db=function(){function t(r,i,s,o,a,l){if(l!==cb){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Y1,resetWarningCache:Q1};return n.PropTypes=n,n};K1.exports=db();var hb=K1.exports;const ne=Tg(hb);var J1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},wg=Nn.createContext&&Nn.createContext(J1),fb=["attr","size","title"];function pb(t,e){if(t==null)return{};var n=mb(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function mb(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function Il(){return Il=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Il.apply(this,arguments)}function Eg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Tl(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Eg(Object(n),!0).forEach(function(r){gb(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Eg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function gb(t,e,n){return e=_b(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _b(t){var e=vb(t,"string");return typeof e=="symbol"?e:e+""}function vb(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function X1(t){return t&&t.map((e,n)=>Nn.createElement(e.tag,Tl({key:n},e.attr),X1(e.child)))}function $t(t){return e=>Nn.createElement(yb,Il({attr:Tl({},t.attr)},e),X1(t.child))}function yb(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=pb(t,fb),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Nn.createElement("svg",Il({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Tl(Tl({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Nn.createElement("title",null,s),t.children)};return wg!==void 0?Nn.createElement(wg.Consumer,null,n=>e(n)):e(J1)}function wb(t){return $t({tag:"svg",attr:{viewBox:"0 0 488 512"},child:[{tag:"path",attr:{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"},child:[]}]})(t)}function Z1(t){return $t({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(t)}function Eb(t){return $t({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(t)}function i4(t){return $t({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(t)}function s4(t){return $t({tag:"svg",attr:{viewBox:"0 0 256 512"},child:[{tag:"path",attr:{d:"M128 0c35.346 0 64 28.654 64 64s-28.654 64-64 64c-35.346 0-64-28.654-64-64S92.654 0 128 0m119.283 354.179l-48-192A24 24 0 0 0 176 144h-11.36c-22.711 10.443-49.59 10.894-73.28 0H80a24 24 0 0 0-23.283 18.179l-48 192C4.935 369.305 16.383 384 32 384h56v104c0 13.255 10.745 24 24 24h32c13.255 0 24-10.745 24-24V384h56c15.591 0 27.071-14.671 23.283-29.821z"},child:[]}]})(t)}function o4(t){return $t({tag:"svg",attr:{viewBox:"0 0 192 512"},child:[{tag:"path",attr:{d:"M96 0c35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64S60.654 0 96 0m48 144h-11.36c-22.711 10.443-49.59 10.894-73.28 0H48c-26.51 0-48 21.49-48 48v136c0 13.255 10.745 24 24 24h16v136c0 13.255 10.745 24 24 24h64c13.255 0 24-10.745 24-24V352h16c13.255 0 24-10.745 24-24V192c0-26.51-21.49-48-48-48z"},child:[]}]})(t)}function ew(t){return $t({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(t)}function tw(t){return $t({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"},child:[]}]})(t)}function a4(t){return $t({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},child:[]}]})(t)}function l4(t){return $t({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(t)}function u4(t){return $t({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(t)}function c4(t){return $t({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(t)}const nw=({torneo:t,onClose:e})=>t?k.jsx("div",{className:"modal-overlay",onClick:e,children:k.jsxs("div",{className:"modal-content",onClick:n=>n.stopPropagation(),children:[k.jsx("h3",{children:t.nombre}),k.jsxs("p",{children:[k.jsx(Eb,{})," ",t.fecha]}),k.jsxs("p",{children:[k.jsx(ew,{})," ",t.direccion]}),k.jsxs("p",{children:[k.jsx(tw,{})," ",k.jsx("a",{href:`tel:${t.whatsapp}`,children:t.whatsapp})]}),k.jsxs("p",{children:["Hora: ",t.hora]}),t.archivoURL&&k.jsx("p",{children:k.jsx("img",{src:t.archivoURL,alt:t.nombre,className:"torneo-image"})})]})}):null;nw.propTypes={torneo:ne.shape({nombre:ne.string.isRequired,fecha:ne.string.isRequired,hora:ne.string,telefono:ne.string,ubicacion:ne.string,archivoURL:ne.string}),onClose:ne.func.isRequired};const Cb=()=>{const{torneos:t}=j.useContext(di),[e,n]=j.useState(null),[r,i]=j.useState([]);j.useEffect(()=>{const a=new Date().toISOString().split("T")[0],l=t.filter(u=>u.fecha.split("/").reverse().join("-")>=a);i(l)},[t]);const s=a=>{n({nombre:a.nombre||"Nombre no disponible",fecha:a.fecha||"Fecha no disponible",direccion:a.ubicacion||"Ubicación no disponible",lugar:"",whatsapp:a.telefono||"Número no disponible",archivoURL:a.archivoURL||"",hora:a.hora||"Hora no disponible"})},o=()=>{n(null)};return k.jsxs("div",{className:"cards-torneos-container",children:[r.length>0?r.map(a=>k.jsxs("div",{className:"card-torneo",children:[k.jsx("h3",{className:"card-title",children:a.nombre}),k.jsx("p",{className:"card-date",children:a.fecha}),k.jsx("p",{className:"card-description",children:a.descripcion||"Descripción no disponible"}),k.jsx("button",{className:"btn-inscribir",onClick:()=>s(a),children:"Inscribirse"})]},a.id)):k.jsx("p",{children:"No hay torneos disponibles."}),k.jsx(nw,{torneo:e,onClose:o})]})},rw=({jugadores:t,onClose:e,genero:n})=>{const[r,i]=j.useState("conPuntos"),s=t.filter(l=>l.points>0).sort((l,u)=>u.points-l.points),o=t.filter(l=>l.points===0).sort((l,u)=>l.name.localeCompare(u.name)),a=l=>{l.target.className.includes("modal-gnr")&&e()};return k.jsx("div",{className:"modal-gnr",onClick:a,children:k.jsxs("div",{className:"modal-gnr-content",onClick:l=>l.stopPropagation(),children:[k.jsx("h2",{className:"modal-gnr-title",children:n==="masculino"?"Jugadores Masculinos":"Jugadoras Femeninas"}),k.jsxs("div",{className:"modal-gnr-player-list",children:[r==="conPuntos"&&s.map(l=>k.jsxs("div",{className:"modal-gnr-player-card",children:[k.jsx("img",{src:l.photoURL,alt:l.name,className:"modal-gnr-player-photo"}),k.jsxs("div",{className:"modal-gnr-player-info",children:[k.jsx("h4",{children:l.name}),k.jsxs("p",{children:[l.points," puntos"]})]})]},l.id)),r==="sinPuntos"&&o.map(l=>k.jsxs("div",{className:"modal-gnr-player-card",children:[k.jsx("img",{src:l.photoURL,alt:l.name,className:"modal-gnr-player-photo"}),k.jsxs("div",{className:"modal-gnr-player-info",children:[k.jsx("h4",{children:l.name}),k.jsx("p",{children:"Sin puntos"})]})]},l.id))]}),k.jsxs("div",{className:"modal-gnr-tabs-container",children:[k.jsx("button",{className:`modal-gnr-tab ${r==="conPuntos"?"active":""}`,onClick:()=>i("conPuntos"),children:"Con Puntos"}),k.jsx("button",{className:`modal-gnr-tab ${r==="sinPuntos"?"active":""}`,onClick:()=>i("sinPuntos"),children:"Sin Puntos"})]})]})})};rw.propTypes={jugadores:ne.arrayOf(ne.shape({id:ne.string.isRequired,name:ne.string.isRequired,points:ne.number.isRequired,photoURL:ne.string.isRequired})).isRequired,onClose:ne.func.isRequired,genero:ne.string.isRequired};const Sb=()=>{const{jugadores:t}=j.useContext(di),[e,n]=j.useState(!1),[r,i]=j.useState([]),[s,o]=j.useState(""),a=c=>t.filter(d=>d.gender===c),l=c=>{const d=a(c);i(d),o(c),n(!0)},u=()=>{n(!1),o("")};return k.jsxs("div",{className:"container-jugadores",children:[k.jsx("div",{className:"player-box male",onClick:()=>l("masculino"),children:k.jsx("h2",{children:"Jugadores Masculinos"})}),k.jsx("div",{className:"player-box female",onClick:()=>l("femenino"),children:k.jsx("h2",{children:"Jugadoras Femeninas"})}),e&&k.jsx(rw,{jugadores:r,onClose:u,genero:s})]})},iw=({club:t,onClose:e})=>t?k.jsx("div",{className:"modal-clubes-overlay",onClick:e,children:k.jsxs("div",{className:"modal-clubes-content",onClick:n=>n.stopPropagation(),children:[k.jsx("h3",{children:t.name}),k.jsxs("p",{children:[k.jsx(ew,{})," ",t.location]}),k.jsxs("p",{children:[k.jsx(tw,{})," ",k.jsx("a",{href:`tel:${t.phone}`,children:t.phone})]}),k.jsx("img",{src:t.logoURL,alt:"Logo del Club",className:"modal-clubes-logo"}),k.jsx("button",{className:"modal-clubes-close",onClick:e,children:"Cerrar"})]})}):null;iw.propTypes={club:ne.shape({name:ne.string.isRequired,location:ne.string,phone:ne.string,logoURL:ne.string}),onClose:ne.func.isRequired};const Ib=()=>{const{clubes:t}=j.useContext(di),[e,n]=j.useState([]),[r,i]=j.useState(null),[s,o]=j.useState(!1);j.useEffect(()=>{if(console.log("Datos de clubes recibidos:",t),t){const u=Array.isArray(t)?t:Object.values(t),c=u.filter(d=>d.logoURL).map(d=>({...d,logoURL:d.logoURL}));console.log("Clubes en el contexto:",u),console.log("Logos filtrados:",c),n(c)}else n([])},[t]);const a=u=>{i(u),o(!0)},l=()=>{o(!1),i(null)};return k.jsxs("div",{className:"carousel-container",children:[k.jsx("h1",{className:"title",children:"Canchas Belgranenses"}),k.jsx("div",{className:"carousel",children:k.jsx("div",{className:"carousel-inner",children:e.length>0?e.map((u,c)=>k.jsx("div",{className:"logo-circle",onClick:()=>a(e[c]),children:k.jsx("img",{src:u.logoURL,alt:`Logo ${c+1}`,onError:d=>{d.target.onerror=null,d.target.src="https://via.placeholder.com/150"}})},c)):k.jsx("p",{children:"No hay logos disponibles."})})}),s&&k.jsx(iw,{club:r,onClose:l})]})},Pf=({isOpen:t,onClose:e,participants:n})=>t?k.jsx("div",{className:"modal-overlay",children:k.jsxs("div",{className:"modal-content",children:[k.jsxs("div",{className:"modal-header",children:[k.jsx("h2",{children:"Ranking Completo"}),k.jsx("button",{className:"close-btn",onClick:e,children:"Cerrar"})]}),k.jsxs("table",{children:[k.jsx("thead",{children:k.jsxs("tr",{children:[k.jsx("th",{children:"#"}),k.jsx("th",{children:"Nombre"}),k.jsx("th",{children:"Puntos"})]})}),k.jsx("tbody",{children:n.map(r=>k.jsxs("tr",{style:r.rank===1?{backgroundColor:"#5c5be5",color:"#fff",fontWeight:"bold"}:{},children:[k.jsx("td",{children:r.rank}),k.jsx("td",{children:r.name}),k.jsxs("td",{className:"points-cell",children:[r.points,r.rank===1&&k.jsx("img",{className:"gold-medal",src:"https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true",alt:"gold medal"})]})]},r.id))})]})]})}):null;Pf.propTypes={isOpen:ne.bool.isRequired,onClose:ne.func.isRequired,participants:ne.arrayOf(ne.shape({id:ne.number.isRequired,rank:ne.number.isRequired,name:ne.string.isRequired,points:ne.string.isRequired})).isRequired};const Cg="/assets/tennis-rZAVwrir.ico",sw=({selectedCategory:t,onCategoryChange:e,categories:n})=>{const[r,i]=j.useState(!1),s=o=>{e(o),i(!1)};return k.jsxs("div",{className:`select-menu ${r?"active":""}`,children:[k.jsxs("div",{className:"select-btn",onClick:()=>i(!r),children:[k.jsx("img",{src:Cg,alt:"Tennis Icon",className:"select-icon"}),k.jsx("span",{className:"sBtn-text",children:t||"Selecciona una categoría"})]}),k.jsx("ul",{className:"options",children:n.map((o,a)=>k.jsxs("li",{className:"option",onClick:()=>s(o),children:[k.jsx("img",{src:Cg,alt:"Tennis Icon",className:"category-icon"}),k.jsx("span",{className:"option-text",children:o})]},a))})]})},Tb=()=>{const{jugadores:t}=j.useContext(di),[e,n]=j.useState(!1),[r,i]=j.useState("Septima"),o=(Array.isArray(t)?t:[]).filter(p=>p!=null),a=o.filter(p=>p.gender==="femenino").map(p=>p.category),l=[...new Set(a)],u=l.length>0,c=o.filter(p=>p.gender==="femenino"&&(r==="Selecciona una categoría"?p.category==="Septima":p.category===r)).sort((p,y)=>y.points-p.points).map((p,y)=>({...p,rank:y+1})),d=()=>n(!0),h=()=>n(!1),f=p=>i(p);return k.jsxs("div",{className:"ranking-column",children:[k.jsx("div",{id:"header",children:k.jsx("h1",{children:"Ranking Femenino"})}),k.jsxs("div",{className:"select-container",children:[k.jsx("div",{className:"arrow-bounce",children:k.jsx(Z1,{color:"green",size:24})}),k.jsx(sw,{selectedCategory:r,onCategoryChange:f,categories:u?l:["No hay categorías disponibles"],placeholder:"Selecciona una categoría"})]}),k.jsxs("div",{id:"leaderboard",children:[k.jsx("div",{className:"ribbon"}),k.jsx("table",{children:k.jsx("tbody",{children:c.length>0?c.slice(0,5).map((p,y)=>k.jsxs("tr",{className:y===0?"highlight-row":"",children:[k.jsx("td",{className:"number",children:p.rank}),k.jsx("td",{className:"name",children:p.name}),k.jsxs("td",{className:"points",children:[p.points,y===0&&k.jsx("img",{className:"gold-medal",src:"https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true",alt:"gold medal"})]})]},p.id)):k.jsx("tr",{children:k.jsx("td",{colSpan:"3",children:"No hay jugadoras disponibles."})})})}),k.jsx("button",{className:"ver-mas-btn",onClick:d,children:"Ver más"})]}),k.jsx(Pf,{isOpen:e,onClose:h,participants:c})]})},kb=()=>{const{jugadores:t}=j.useContext(di),[e,n]=j.useState(!1),[r,i]=j.useState("Septima"),o=(Array.isArray(t)?t:[]).filter(p=>p!=null),a=o.filter(p=>p.gender==="masculino").map(p=>p.category),l=[...new Set(a)],u=l.length>0,c=o.filter(p=>p.gender==="masculino"&&(r==="Selecciona una categoría"?p.category==="Septima":p.category===r)).sort((p,y)=>y.points-p.points).map((p,y)=>({...p,rank:y+1})),d=()=>n(!0),h=()=>n(!1),f=p=>i(p);return k.jsxs("div",{className:"ranking-column",children:[k.jsx("div",{id:"header",children:k.jsx("h1",{children:"Ranking Masculino"})}),k.jsxs("div",{className:"select-container",children:[k.jsx("div",{className:"arrow-bounce",children:k.jsx(Z1,{color:"green",size:24})}),k.jsx(sw,{selectedCategory:r,onCategoryChange:f,categories:u?l:["No hay categorías disponibles"],placeholder:"Selecciona una categoría"})]}),k.jsxs("div",{id:"leaderboard",children:[k.jsx("div",{className:"ribbon"}),k.jsx("table",{children:k.jsx("tbody",{children:c.length>0?c.slice(0,5).map((p,y)=>k.jsxs("tr",{className:y===0?"highlight-row":"",children:[k.jsx("td",{className:"number",children:p.rank}),k.jsx("td",{className:"name",children:p.name}),k.jsxs("td",{className:"points",children:[p.points,y===0&&k.jsx("img",{className:"gold-medal",src:"https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true",alt:"gold medal"})]})]},p.id)):k.jsx("tr",{children:k.jsx("td",{colSpan:"3",children:"No hay jugadores disponibles."})})})}),k.jsx("button",{className:"ver-mas-btn",onClick:d,children:"Ver más"})]}),k.jsx(Pf,{isOpen:e,onClose:h,participants:c})]})},Rb=()=>k.jsxs("div",{className:"ranking-container",children:[k.jsx(Tb,{}),k.jsx(kb,{})]}),Nb=()=>k.jsxs("div",{children:[k.jsx(Yv,{}),k.jsx(ab,{}),k.jsx("section",{id:"canchas",children:k.jsx(Ib,{})}),k.jsx("section",{id:"torneos",children:k.jsx(Cb,{})}),k.jsx("section",{id:"jugadores",children:k.jsx(Sb,{})}),k.jsx("div",{className:"rankings-container",children:k.jsx("div",{className:"ranking-container",children:k.jsx("section",{id:"ranking",children:k.jsx(Rb,{})})})})]}),Ab=()=>{const t=qv(),e=new dn,n=async()=>{try{const i=(await tP(q1,e)).user;console.log("User Info:",i),t("/admin")}catch(r){console.error("Error al iniciar sesión:",r.message)}};return k.jsxs("div",{className:"admin-login-container",children:[k.jsx("h1",{className:"admin-login-title",children:"Admin Login"}),k.jsxs("button",{className:"admin-login-button",onClick:n,children:[k.jsx(wb,{className:"admin-google-icon"}),k.jsx("span",{children:"Login with Google"})]})]})},Pb="modulepreload",xb=function(t){return"/"+t},Sg={},zn=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.allSettled(n.map(a=>{if(a=xb(a),a in Sg)return;Sg[a]=!0;const l=a.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${u}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":Pb,l||(c.as="script"),c.crossOrigin="",c.href=a,o&&c.setAttribute("nonce",o),document.head.appendChild(c),l)return new Promise((d,h)=>{c.addEventListener("load",d),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${a}`)))})}))}return i.then(s=>{for(const o of s||[]){if(o.status!=="rejected")continue;const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o.reason,window.dispatchEvent(a),!a.defaultPrevented)throw o.reason}return e()})},bb=({onClick:t})=>k.jsx("button",{className:"agregar-reglamento-button",onClick:t,children:"Agregar Reglamento"});function Ob(t,e){return e.forEach(function(n){n&&typeof n!="string"&&!Array.isArray(n)&&Object.keys(n).forEach(function(r){if(r!=="default"&&!(r in t)){var i=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(t,r,i.get?i:{enumerable:!0,get:function(){return n[r]}})}})}),Object.freeze(t)}function ow(t,e){return new Promise(function(n,r){let i;return Db(t).then(function(s){try{return i=s,n(new Blob([e.slice(0,2),i,e.slice(2)],{type:"image/jpeg"}))}catch(o){return r(o)}},r)})}const Db=t=>new Promise((e,n)=>{const r=new FileReader;r.addEventListener("load",({target:{result:i}})=>{const s=new DataView(i);let o=0;if(s.getUint16(o)!==65496)return n("not a valid JPEG");for(o+=2;;){const a=s.getUint16(o);if(a===65498)break;const l=s.getUint16(o+2);if(a===65505&&s.getUint32(o+4)===1165519206){const u=o+10;let c;switch(s.getUint16(u)){case 18761:c=!0;break;case 19789:c=!1;break;default:return n("TIFF header contains invalid endian")}if(s.getUint16(u+2,c)!==42)return n("TIFF header contains invalid version");const d=s.getUint32(u+4,c),h=u+d+2+12*s.getUint16(u+d,c);for(let f=u+d+2;f<h;f+=12)if(s.getUint16(f,c)==274){if(s.getUint16(f+2,c)!==3)return n("Orientation data type is invalid");if(s.getUint32(f+4,c)!==1)return n("Orientation data count is invalid");s.setUint16(f+8,1,c);break}return e(i.slice(o,o+2+l))}o+=2+l}return e(new Blob)}),r.readAsArrayBuffer(t)});var kl={},Lb={get exports(){return kl},set exports(t){kl=t}};(function(t){var e,n,r={};Lb.exports=r,r.parse=function(i,s){for(var o=r.bin.readUshort,a=r.bin.readUint,l=0,u={},c=new Uint8Array(i),d=c.length-4;a(c,d)!=101010256;)d--;l=d,l+=4;var h=o(c,l+=4);o(c,l+=2);var f=a(c,l+=2),p=a(c,l+=4);l+=4,l=p;for(var y=0;y<h;y++){a(c,l),l+=4,l+=4,l+=4,a(c,l+=4),f=a(c,l+=4);var T=a(c,l+=4),m=o(c,l+=4),g=o(c,l+2),v=o(c,l+4);l+=6;var C=a(c,l+=8);l+=4,l+=m+g+v,r._readLocal(c,C,u,f,T,s)}return u},r._readLocal=function(i,s,o,a,l,u){var c=r.bin.readUshort,d=r.bin.readUint;d(i,s),c(i,s+=4),c(i,s+=2);var h=c(i,s+=2);d(i,s+=2),d(i,s+=4),s+=4;var f=c(i,s+=8),p=c(i,s+=2);s+=2;var y=r.bin.readUTF8(i,s,f);if(s+=f,s+=p,u)o[y]={size:l,csize:a};else{var T=new Uint8Array(i.buffer,s);if(h==0)o[y]=new Uint8Array(T.buffer.slice(s,s+a));else{if(h!=8)throw"unknown compression method: "+h;var m=new Uint8Array(l);r.inflateRaw(T,m),o[y]=m}}},r.inflateRaw=function(i,s){return r.F.inflate(i,s)},r.inflate=function(i,s){return i[0],i[1],r.inflateRaw(new Uint8Array(i.buffer,i.byteOffset+2,i.length-6),s)},r.deflate=function(i,s){s==null&&(s={level:6});var o=0,a=new Uint8Array(50+Math.floor(1.1*i.length));a[o]=120,a[o+1]=156,o+=2,o=r.F.deflateRaw(i,a,o,s.level);var l=r.adler(i,0,i.length);return a[o+0]=l>>>24&255,a[o+1]=l>>>16&255,a[o+2]=l>>>8&255,a[o+3]=l>>>0&255,new Uint8Array(a.buffer,0,o+4)},r.deflateRaw=function(i,s){s==null&&(s={level:6});var o=new Uint8Array(50+Math.floor(1.1*i.length)),a=r.F.deflateRaw(i,o,a,s.level);return new Uint8Array(o.buffer,0,a)},r.encode=function(i,s){s==null&&(s=!1);var o=0,a=r.bin.writeUint,l=r.bin.writeUshort,u={};for(var c in i){var d=!r._noNeed(c)&&!s,h=i[c],f=r.crc.crc(h,0,h.length);u[c]={cpr:d,usize:h.length,crc:f,file:d?r.deflateRaw(h):h}}for(var c in u)o+=u[c].file.length+30+46+2*r.bin.sizeUTF8(c);o+=22;var p=new Uint8Array(o),y=0,T=[];for(var c in u){var m=u[c];T.push(y),y=r._writeHeader(p,y,c,m,0)}var g=0,v=y;for(var c in u)m=u[c],T.push(y),y=r._writeHeader(p,y,c,m,1,T[g++]);var C=y-v;return a(p,y,101010256),y+=4,l(p,y+=4,g),l(p,y+=2,g),a(p,y+=2,C),a(p,y+=4,v),y+=4,y+=2,p.buffer},r._noNeed=function(i){var s=i.split(".").pop().toLowerCase();return"png,jpg,jpeg,zip".indexOf(s)!=-1},r._writeHeader=function(i,s,o,a,l,u){var c=r.bin.writeUint,d=r.bin.writeUshort,h=a.file;return c(i,s,l==0?67324752:33639248),s+=4,l==1&&(s+=2),d(i,s,20),d(i,s+=2,0),d(i,s+=2,a.cpr?8:0),c(i,s+=2,0),c(i,s+=4,a.crc),c(i,s+=4,h.length),c(i,s+=4,a.usize),d(i,s+=4,r.bin.sizeUTF8(o)),d(i,s+=2,0),s+=2,l==1&&(s+=2,s+=2,c(i,s+=6,u),s+=4),s+=r.bin.writeUTF8(i,s,o),l==0&&(i.set(h,s),s+=h.length),s},r.crc={table:function(){for(var i=new Uint32Array(256),s=0;s<256;s++){for(var o=s,a=0;a<8;a++)1&o?o=3988292384^o>>>1:o>>>=1;i[s]=o}return i}(),update:function(i,s,o,a){for(var l=0;l<a;l++)i=r.crc.table[255&(i^s[o+l])]^i>>>8;return i},crc:function(i,s,o){return 4294967295^r.crc.update(4294967295,i,s,o)}},r.adler=function(i,s,o){for(var a=1,l=0,u=s,c=s+o;u<c;){for(var d=Math.min(u+5552,c);u<d;)l+=a+=i[u++];a%=65521,l%=65521}return l<<16|a},r.bin={readUshort:function(i,s){return i[s]|i[s+1]<<8},writeUshort:function(i,s,o){i[s]=255&o,i[s+1]=o>>8&255},readUint:function(i,s){return 16777216*i[s+3]+(i[s+2]<<16|i[s+1]<<8|i[s])},writeUint:function(i,s,o){i[s]=255&o,i[s+1]=o>>8&255,i[s+2]=o>>16&255,i[s+3]=o>>24&255},readASCII:function(i,s,o){for(var a="",l=0;l<o;l++)a+=String.fromCharCode(i[s+l]);return a},writeASCII:function(i,s,o){for(var a=0;a<o.length;a++)i[s+a]=o.charCodeAt(a)},pad:function(i){return i.length<2?"0"+i:i},readUTF8:function(i,s,o){for(var a,l="",u=0;u<o;u++)l+="%"+r.bin.pad(i[s+u].toString(16));try{a=decodeURIComponent(l)}catch{return r.bin.readASCII(i,s,o)}return a},writeUTF8:function(i,s,o){for(var a=o.length,l=0,u=0;u<a;u++){var c=o.charCodeAt(u);if(!(4294967168&c))i[s+l]=c,l++;else if(!(4294965248&c))i[s+l]=192|c>>6,i[s+l+1]=128|c>>0&63,l+=2;else if(!(4294901760&c))i[s+l]=224|c>>12,i[s+l+1]=128|c>>6&63,i[s+l+2]=128|c>>0&63,l+=3;else{if(4292870144&c)throw"e";i[s+l]=240|c>>18,i[s+l+1]=128|c>>12&63,i[s+l+2]=128|c>>6&63,i[s+l+3]=128|c>>0&63,l+=4}}return l},sizeUTF8:function(i){for(var s=i.length,o=0,a=0;a<s;a++){var l=i.charCodeAt(a);if(!(4294967168&l))o++;else if(!(4294965248&l))o+=2;else if(!(4294901760&l))o+=3;else{if(4292870144&l)throw"e";o+=4}}return o}},r.F={},r.F.deflateRaw=function(i,s,o,a){var l=[[0,0,0,0,0],[4,4,8,4,0],[4,5,16,8,0],[4,6,16,16,0],[4,10,16,32,0],[8,16,32,32,0],[8,16,128,128,0],[8,32,128,256,0],[32,128,258,1024,1],[32,258,258,4096,1]][a],u=r.F.U,c=r.F._goodIndex;r.F._hash;var d=r.F._putsE,h=0,f=o<<3,p=0,y=i.length;if(a==0){for(;h<y;)d(s,f,h+(b=Math.min(65535,y-h))==y?1:0),f=r.F._copyExact(i,h,b,s,f+8),h+=b;return f>>>3}var T=u.lits,m=u.strt,g=u.prev,v=0,C=0,P=0,S=0,N=0,_=0;for(y>2&&(m[_=r.F._hash(i,0)]=0),h=0;h<y;h++){if(N=_,h+1<y-2){_=r.F._hash(i,h+1);var w=h+1&32767;g[w]=m[_],m[_]=w}if(p<=h){(v>14e3||C>26697)&&y-h>100&&(p<h&&(T[v]=h-p,v+=2,p=h),f=r.F._writeBlock(h==y-1||p==y?1:0,T,v,S,i,P,h-P,s,f),v=C=S=0,P=h);var R=0;h<y-2&&(R=r.F._bestMatch(i,h,g,N,Math.min(l[2],y-h),l[3]));var b=R>>>16,O=65535&R;if(R!=0){O=65535&R;var L=c(b=R>>>16,u.of0);u.lhst[257+L]++;var x=c(O,u.df0);u.dhst[x]++,S+=u.exb[L]+u.dxb[x],T[v]=b<<23|h-p,T[v+1]=O<<16|L<<8|x,v+=2,p=h+b}else u.lhst[i[h]]++;C++}}for(P==h&&i.length!=0||(p<h&&(T[v]=h-p,v+=2,p=h),f=r.F._writeBlock(1,T,v,S,i,P,h-P,s,f),v=0,C=0,v=C=S=0,P=h);7&f;)f++;return f>>>3},r.F._bestMatch=function(i,s,o,a,l,u){var c=32767&s,d=o[c],h=c-d+32768&32767;if(d==c||a!=r.F._hash(i,s-h))return 0;for(var f=0,p=0,y=Math.min(32767,s);h<=y&&--u!=0&&d!=c;){if(f==0||i[s+f]==i[s+f-h]){var T=r.F._howLong(i,s,h);if(T>f){if(p=h,(f=T)>=l)break;h+2<T&&(T=h+2);for(var m=0,g=0;g<T-2;g++){var v=s-h+g+32768&32767,C=v-o[v]+32768&32767;C>m&&(m=C,d=v)}}}h+=(c=d)-(d=o[c])+32768&32767}return f<<16|p},r.F._howLong=function(i,s,o){if(i[s]!=i[s-o]||i[s+1]!=i[s+1-o]||i[s+2]!=i[s+2-o])return 0;var a=s,l=Math.min(i.length,s+258);for(s+=3;s<l&&i[s]==i[s-o];)s++;return s-a},r.F._hash=function(i,s){return(i[s]<<8|i[s+1])+(i[s+2]<<4)&65535},r.saved=0,r.F._writeBlock=function(i,s,o,a,l,u,c,d,h){var f,p,y,T,m,g,v,C,P,S=r.F.U,N=r.F._putsF,_=r.F._putsE;S.lhst[256]++,p=(f=r.F.getTrees())[0],y=f[1],T=f[2],m=f[3],g=f[4],v=f[5],C=f[6],P=f[7];var w=32+(h+3&7?8-(h+3&7):0)+(c<<3),R=a+r.F.contSize(S.fltree,S.lhst)+r.F.contSize(S.fdtree,S.dhst),b=a+r.F.contSize(S.ltree,S.lhst)+r.F.contSize(S.dtree,S.dhst);b+=14+3*v+r.F.contSize(S.itree,S.ihst)+(2*S.ihst[16]+3*S.ihst[17]+7*S.ihst[18]);for(var O=0;O<286;O++)S.lhst[O]=0;for(O=0;O<30;O++)S.dhst[O]=0;for(O=0;O<19;O++)S.ihst[O]=0;var L=w<R&&w<b?0:R<b?1:2;if(N(d,h,i),N(d,h+1,L),h+=3,L==0){for(;7&h;)h++;h=r.F._copyExact(l,u,c,d,h)}else{var x,M;if(L==1&&(x=S.fltree,M=S.fdtree),L==2){r.F.makeCodes(S.ltree,p),r.F.revCodes(S.ltree,p),r.F.makeCodes(S.dtree,y),r.F.revCodes(S.dtree,y),r.F.makeCodes(S.itree,T),r.F.revCodes(S.itree,T),x=S.ltree,M=S.dtree,_(d,h,m-257),_(d,h+=5,g-1),_(d,h+=5,v-4),h+=4;for(var I=0;I<v;I++)_(d,h+3*I,S.itree[1+(S.ordr[I]<<1)]);h+=3*v,h=r.F._codeTiny(C,S.itree,d,h),h=r.F._codeTiny(P,S.itree,d,h)}for(var E=u,D=0;D<o;D+=2){for(var A=s[D],U=A>>>23,W=E+(8388607&A);E<W;)h=r.F._writeLit(l[E++],x,d,h);if(U!=0){var z=s[D+1],V=z>>16,B=z>>8&255,F=255&z;_(d,h=r.F._writeLit(257+B,x,d,h),U-S.of0[B]),h+=S.exb[B],N(d,h=r.F._writeLit(F,M,d,h),V-S.df0[F]),h+=S.dxb[F],E+=U}}h=r.F._writeLit(256,x,d,h)}return h},r.F._copyExact=function(i,s,o,a,l){var u=l>>>3;return a[u]=o,a[u+1]=o>>>8,a[u+2]=255-a[u],a[u+3]=255-a[u+1],u+=4,a.set(new Uint8Array(i.buffer,s,o),u),l+(o+4<<3)},r.F.getTrees=function(){for(var i=r.F.U,s=r.F._hufTree(i.lhst,i.ltree,15),o=r.F._hufTree(i.dhst,i.dtree,15),a=[],l=r.F._lenCodes(i.ltree,a),u=[],c=r.F._lenCodes(i.dtree,u),d=0;d<a.length;d+=2)i.ihst[a[d]]++;for(d=0;d<u.length;d+=2)i.ihst[u[d]]++;for(var h=r.F._hufTree(i.ihst,i.itree,7),f=19;f>4&&i.itree[1+(i.ordr[f-1]<<1)]==0;)f--;return[s,o,h,l,c,f,a,u]},r.F.getSecond=function(i){for(var s=[],o=0;o<i.length;o+=2)s.push(i[o+1]);return s},r.F.nonZero=function(i){for(var s="",o=0;o<i.length;o+=2)i[o+1]!=0&&(s+=(o>>1)+",");return s},r.F.contSize=function(i,s){for(var o=0,a=0;a<s.length;a++)o+=s[a]*i[1+(a<<1)];return o},r.F._codeTiny=function(i,s,o,a){for(var l=0;l<i.length;l+=2){var u=i[l],c=i[l+1];a=r.F._writeLit(u,s,o,a);var d=u==16?2:u==17?3:7;u>15&&(r.F._putsE(o,a,c,d),a+=d)}return a},r.F._lenCodes=function(i,s){for(var o=i.length;o!=2&&i[o-1]==0;)o-=2;for(var a=0;a<o;a+=2){var l=i[a+1],u=a+3<o?i[a+3]:-1,c=a+5<o?i[a+5]:-1,d=a==0?-1:i[a-1];if(l==0&&u==l&&c==l){for(var h=a+5;h+2<o&&i[h+2]==l;)h+=2;(f=Math.min(h+1-a>>>1,138))<11?s.push(17,f-3):s.push(18,f-11),a+=2*f-2}else if(l==d&&u==l&&c==l){for(h=a+5;h+2<o&&i[h+2]==l;)h+=2;var f=Math.min(h+1-a>>>1,6);s.push(16,f-3),a+=2*f-2}else s.push(l,0)}return o>>>1},r.F._hufTree=function(i,s,o){var a=[],l=i.length,u=s.length,c=0;for(c=0;c<u;c+=2)s[c]=0,s[c+1]=0;for(c=0;c<l;c++)i[c]!=0&&a.push({lit:c,f:i[c]});var d=a.length,h=a.slice(0);if(d==0)return 0;if(d==1){var f=a[0].lit;return h=f==0?1:0,s[1+(f<<1)]=1,s[1+(h<<1)]=1,1}a.sort(function(C,P){return C.f-P.f});var p=a[0],y=a[1],T=0,m=1,g=2;for(a[0]={lit:-1,f:p.f+y.f,l:p,r:y,d:0};m!=d-1;)p=T!=m&&(g==d||a[T].f<a[g].f)?a[T++]:a[g++],y=T!=m&&(g==d||a[T].f<a[g].f)?a[T++]:a[g++],a[m++]={lit:-1,f:p.f+y.f,l:p,r:y};var v=r.F.setDepth(a[m-1],0);for(v>o&&(r.F.restrictDepth(h,o,v),v=o),c=0;c<d;c++)s[1+(h[c].lit<<1)]=h[c].d;return v},r.F.setDepth=function(i,s){return i.lit!=-1?(i.d=s,s):Math.max(r.F.setDepth(i.l,s+1),r.F.setDepth(i.r,s+1))},r.F.restrictDepth=function(i,s,o){var a=0,l=1<<o-s,u=0;for(i.sort(function(d,h){return h.d==d.d?d.f-h.f:h.d-d.d}),a=0;a<i.length&&i[a].d>s;a++){var c=i[a].d;i[a].d=s,u+=l-(1<<o-c)}for(u>>>=o-s;u>0;)(c=i[a].d)<s?(i[a].d++,u-=1<<s-c-1):a++;for(;a>=0;a--)i[a].d==s&&u<0&&(i[a].d--,u++);u!=0&&console.log("debt left")},r.F._goodIndex=function(i,s){var o=0;return s[16|o]<=i&&(o|=16),s[8|o]<=i&&(o|=8),s[4|o]<=i&&(o|=4),s[2|o]<=i&&(o|=2),s[1|o]<=i&&(o|=1),o},r.F._writeLit=function(i,s,o,a){return r.F._putsF(o,a,s[i<<1]),a+s[1+(i<<1)]},r.F.inflate=function(i,s){var o=Uint8Array;if(i[0]==3&&i[1]==0)return s||new o(0);var a=r.F,l=a._bitsF,u=a._bitsE,c=a._decodeTiny,d=a.makeCodes,h=a.codes2map,f=a._get17,p=a.U,y=s==null;y&&(s=new o(i.length>>>2<<3));for(var T,m,g=0,v=0,C=0,P=0,S=0,N=0,_=0,w=0,R=0;g==0;)if(g=l(i,R,1),v=l(i,R+1,2),R+=3,v!=0){if(y&&(s=r.F._check(s,w+(1<<17))),v==1&&(T=p.flmap,m=p.fdmap,N=511,_=31),v==2){C=u(i,R,5)+257,P=u(i,R+5,5)+1,S=u(i,R+10,4)+4,R+=14;for(var b=0;b<38;b+=2)p.itree[b]=0,p.itree[b+1]=0;var O=1;for(b=0;b<S;b++){var L=u(i,R+3*b,3);p.itree[1+(p.ordr[b]<<1)]=L,L>O&&(O=L)}R+=3*S,d(p.itree,O),h(p.itree,O,p.imap),T=p.lmap,m=p.dmap,R=c(p.imap,(1<<O)-1,C+P,i,R,p.ttree);var x=a._copyOut(p.ttree,0,C,p.ltree);N=(1<<x)-1;var M=a._copyOut(p.ttree,C,P,p.dtree);_=(1<<M)-1,d(p.ltree,x),h(p.ltree,x,T),d(p.dtree,M),h(p.dtree,M,m)}for(;;){var I=T[f(i,R)&N];R+=15&I;var E=I>>>4;if(!(E>>>8))s[w++]=E;else{if(E==256)break;var D=w+E-254;if(E>264){var A=p.ldef[E-257];D=w+(A>>>3)+u(i,R,7&A),R+=7&A}var U=m[f(i,R)&_];R+=15&U;var W=U>>>4,z=p.ddef[W],V=(z>>>4)+l(i,R,15&z);for(R+=15&z,y&&(s=r.F._check(s,w+(1<<17)));w<D;)s[w]=s[w++-V],s[w]=s[w++-V],s[w]=s[w++-V],s[w]=s[w++-V];w=D}}}else{7&R&&(R+=8-(7&R));var B=4+(R>>>3),F=i[B-4]|i[B-3]<<8;y&&(s=r.F._check(s,w+F)),s.set(new o(i.buffer,i.byteOffset+B,F),w),R=B+F<<3,w+=F}return s.length==w?s:s.slice(0,w)},r.F._check=function(i,s){var o=i.length;if(s<=o)return i;var a=new Uint8Array(Math.max(o<<1,s));return a.set(i,0),a},r.F._decodeTiny=function(i,s,o,a,l,u){for(var c=r.F._bitsE,d=r.F._get17,h=0;h<o;){var f=i[d(a,l)&s];l+=15&f;var p=f>>>4;if(p<=15)u[h]=p,h++;else{var y=0,T=0;p==16?(T=3+c(a,l,2),l+=2,y=u[h-1]):p==17?(T=3+c(a,l,3),l+=3):p==18&&(T=11+c(a,l,7),l+=7);for(var m=h+T;h<m;)u[h]=y,h++}}return l},r.F._copyOut=function(i,s,o,a){for(var l=0,u=0,c=a.length>>>1;u<o;){var d=i[u+s];a[u<<1]=0,a[1+(u<<1)]=d,d>l&&(l=d),u++}for(;u<c;)a[u<<1]=0,a[1+(u<<1)]=0,u++;return l},r.F.makeCodes=function(i,s){for(var o,a,l,u,c=r.F.U,d=i.length,h=c.bl_count,f=0;f<=s;f++)h[f]=0;for(f=1;f<d;f+=2)h[i[f]]++;var p=c.next_code;for(o=0,h[0]=0,a=1;a<=s;a++)o=o+h[a-1]<<1,p[a]=o;for(l=0;l<d;l+=2)(u=i[l+1])!=0&&(i[l]=p[u],p[u]++)},r.F.codes2map=function(i,s,o){for(var a=i.length,l=r.F.U.rev15,u=0;u<a;u+=2)if(i[u+1]!=0)for(var c=u>>1,d=i[u+1],h=c<<4|d,f=s-d,p=i[u]<<f,y=p+(1<<f);p!=y;)o[l[p]>>>15-s]=h,p++},r.F.revCodes=function(i,s){for(var o=r.F.U.rev15,a=15-s,l=0;l<i.length;l+=2){var u=i[l]<<s-i[l+1];i[l]=o[u]>>>a}},r.F._putsE=function(i,s,o){o<<=7&s;var a=s>>>3;i[a]|=o,i[a+1]|=o>>>8},r.F._putsF=function(i,s,o){o<<=7&s;var a=s>>>3;i[a]|=o,i[a+1]|=o>>>8,i[a+2]|=o>>>16},r.F._bitsE=function(i,s,o){return(i[s>>>3]|i[1+(s>>>3)]<<8)>>>(7&s)&(1<<o)-1},r.F._bitsF=function(i,s,o){return(i[s>>>3]|i[1+(s>>>3)]<<8|i[2+(s>>>3)]<<16)>>>(7&s)&(1<<o)-1},r.F._get17=function(i,s){return(i[s>>>3]|i[1+(s>>>3)]<<8|i[2+(s>>>3)]<<16)>>>(7&s)},r.F._get25=function(i,s){return(i[s>>>3]|i[1+(s>>>3)]<<8|i[2+(s>>>3)]<<16|i[3+(s>>>3)]<<24)>>>(7&s)},r.F.U=(e=Uint16Array,n=Uint32Array,{next_code:new e(16),bl_count:new e(16),ordr:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],of0:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],exb:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],ldef:new e(32),df0:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],dxb:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],ddef:new n(32),flmap:new e(512),fltree:[],fdmap:new e(32),fdtree:[],lmap:new e(32768),ltree:[],ttree:[],dmap:new e(32768),dtree:[],imap:new e(512),itree:[],rev15:new e(32768),lhst:new n(286),dhst:new n(30),ihst:new n(19),lits:new n(15e3),strt:new e(65536),prev:new e(32768)}),function(){for(var i=r.F.U,s=0;s<32768;s++){var o=s;o=(4278255360&(o=(4042322160&(o=(3435973836&(o=(2863311530&o)>>>1|(1431655765&o)<<1))>>>2|(858993459&o)<<2))>>>4|(252645135&o)<<4))>>>8|(16711935&o)<<8,i.rev15[s]=(o>>>16|o<<16)>>>17}function a(l,u,c){for(;u--!=0;)l.push(0,c)}for(s=0;s<32;s++)i.ldef[s]=i.of0[s]<<3|i.exb[s],i.ddef[s]=i.df0[s]<<4|i.dxb[s];a(i.fltree,144,8),a(i.fltree,112,9),a(i.fltree,24,7),a(i.fltree,8,8),r.F.makeCodes(i.fltree,9),r.F.codes2map(i.fltree,9,i.flmap),r.F.revCodes(i.fltree,9),a(i.fdtree,32,5),r.F.makeCodes(i.fdtree,5),r.F.codes2map(i.fdtree,5,i.fdmap),r.F.revCodes(i.fdtree,5),a(i.itree,19,0),a(i.ltree,286,0),a(i.dtree,30,0),a(i.ttree,320,0)}()})();var Mb=Ob({__proto__:null,default:kl},[kl]);const Vt=function(){var t={nextZero(c,d){for(;c[d]!=0;)d++;return d},readUshort:(c,d)=>c[d]<<8|c[d+1],writeUshort(c,d,h){c[d]=h>>8&255,c[d+1]=255&h},readUint:(c,d)=>16777216*c[d]+(c[d+1]<<16|c[d+2]<<8|c[d+3]),writeUint(c,d,h){c[d]=h>>24&255,c[d+1]=h>>16&255,c[d+2]=h>>8&255,c[d+3]=255&h},readASCII(c,d,h){let f="";for(let p=0;p<h;p++)f+=String.fromCharCode(c[d+p]);return f},writeASCII(c,d,h){for(let f=0;f<h.length;f++)c[d+f]=h.charCodeAt(f)},readBytes(c,d,h){const f=[];for(let p=0;p<h;p++)f.push(c[d+p]);return f},pad:c=>c.length<2?`0${c}`:c,readUTF8(c,d,h){let f,p="";for(let y=0;y<h;y++)p+=`%${t.pad(c[d+y].toString(16))}`;try{f=decodeURIComponent(p)}catch{return t.readASCII(c,d,h)}return f}};function e(c,d,h,f){const p=d*h,y=s(f),T=Math.ceil(d*y/8),m=new Uint8Array(4*p),g=new Uint32Array(m.buffer),{ctype:v}=f,{depth:C}=f,P=t.readUshort;if(v==6){const A=p<<2;if(C==8)for(var S=0;S<A;S+=4)m[S]=c[S],m[S+1]=c[S+1],m[S+2]=c[S+2],m[S+3]=c[S+3];if(C==16)for(S=0;S<A;S++)m[S]=c[S<<1]}else if(v==2){const A=f.tabs.tRNS;if(A==null){if(C==8)for(S=0;S<p;S++){var N=3*S;g[S]=255<<24|c[N+2]<<16|c[N+1]<<8|c[N]}if(C==16)for(S=0;S<p;S++)N=6*S,g[S]=255<<24|c[N+4]<<16|c[N+2]<<8|c[N]}else{var _=A[0];const U=A[1],W=A[2];if(C==8)for(S=0;S<p;S++){var w=S<<2;N=3*S,g[S]=255<<24|c[N+2]<<16|c[N+1]<<8|c[N],c[N]==_&&c[N+1]==U&&c[N+2]==W&&(m[w+3]=0)}if(C==16)for(S=0;S<p;S++)w=S<<2,N=6*S,g[S]=255<<24|c[N+4]<<16|c[N+2]<<8|c[N],P(c,N)==_&&P(c,N+2)==U&&P(c,N+4)==W&&(m[w+3]=0)}}else if(v==3){const A=f.tabs.PLTE,U=f.tabs.tRNS,W=U?U.length:0;if(C==1)for(var R=0;R<h;R++){var b=R*T,O=R*d;for(S=0;S<d;S++){w=O+S<<2;var L=3*(x=c[b+(S>>3)]>>7-((7&S)<<0)&1);m[w]=A[L],m[w+1]=A[L+1],m[w+2]=A[L+2],m[w+3]=x<W?U[x]:255}}if(C==2)for(R=0;R<h;R++)for(b=R*T,O=R*d,S=0;S<d;S++)w=O+S<<2,L=3*(x=c[b+(S>>2)]>>6-((3&S)<<1)&3),m[w]=A[L],m[w+1]=A[L+1],m[w+2]=A[L+2],m[w+3]=x<W?U[x]:255;if(C==4)for(R=0;R<h;R++)for(b=R*T,O=R*d,S=0;S<d;S++)w=O+S<<2,L=3*(x=c[b+(S>>1)]>>4-((1&S)<<2)&15),m[w]=A[L],m[w+1]=A[L+1],m[w+2]=A[L+2],m[w+3]=x<W?U[x]:255;if(C==8)for(S=0;S<p;S++){var x;w=S<<2,L=3*(x=c[S]),m[w]=A[L],m[w+1]=A[L+1],m[w+2]=A[L+2],m[w+3]=x<W?U[x]:255}}else if(v==4){if(C==8)for(S=0;S<p;S++){w=S<<2;var M=c[I=S<<1];m[w]=M,m[w+1]=M,m[w+2]=M,m[w+3]=c[I+1]}if(C==16)for(S=0;S<p;S++){var I;w=S<<2,M=c[I=S<<2],m[w]=M,m[w+1]=M,m[w+2]=M,m[w+3]=c[I+2]}}else if(v==0)for(_=f.tabs.tRNS?f.tabs.tRNS:-1,R=0;R<h;R++){const A=R*T,U=R*d;if(C==1)for(var E=0;E<d;E++){var D=(M=255*(c[A+(E>>>3)]>>>7-(7&E)&1))==255*_?0:255;g[U+E]=D<<24|M<<16|M<<8|M}else if(C==2)for(E=0;E<d;E++)D=(M=85*(c[A+(E>>>2)]>>>6-((3&E)<<1)&3))==85*_?0:255,g[U+E]=D<<24|M<<16|M<<8|M;else if(C==4)for(E=0;E<d;E++)D=(M=17*(c[A+(E>>>1)]>>>4-((1&E)<<2)&15))==17*_?0:255,g[U+E]=D<<24|M<<16|M<<8|M;else if(C==8)for(E=0;E<d;E++)D=(M=c[A+E])==_?0:255,g[U+E]=D<<24|M<<16|M<<8|M;else if(C==16)for(E=0;E<d;E++)M=c[A+(E<<1)],D=P(c,A+(E<<1))==_?0:255,g[U+E]=D<<24|M<<16|M<<8|M}return m}function n(c,d,h,f){const p=s(c),y=Math.ceil(h*p/8),T=new Uint8Array((y+1+c.interlace)*f);return d=c.tabs.CgBI?i(d,T):r(d,T),c.interlace==0?d=o(d,c,0,h,f):c.interlace==1&&(d=function(g,v){const C=v.width,P=v.height,S=s(v),N=S>>3,_=Math.ceil(C*S/8),w=new Uint8Array(P*_);let R=0;const b=[0,0,4,0,2,0,1],O=[0,4,0,2,0,1,0],L=[8,8,8,4,4,2,2],x=[8,8,4,4,2,2,1];let M=0;for(;M<7;){const E=L[M],D=x[M];let A=0,U=0,W=b[M];for(;W<P;)W+=E,U++;let z=O[M];for(;z<C;)z+=D,A++;const V=Math.ceil(A*S/8);o(g,v,R,A,U);let B=0,F=b[M];for(;F<P;){let q=O[M],ie=R+B*V<<3;for(;q<C;){var I;if(S==1&&(I=(I=g[ie>>3])>>7-(7&ie)&1,w[F*_+(q>>3)]|=I<<7-((7&q)<<0)),S==2&&(I=(I=g[ie>>3])>>6-(7&ie)&3,w[F*_+(q>>2)]|=I<<6-((3&q)<<1)),S==4&&(I=(I=g[ie>>3])>>4-(7&ie)&15,w[F*_+(q>>1)]|=I<<4-((1&q)<<2)),S>=8){const le=F*_+q*N;for(let re=0;re<N;re++)w[le+re]=g[(ie>>3)+re]}ie+=S,q+=D}B++,F+=E}A*U!=0&&(R+=U*(1+V)),M+=1}return w}(d,c)),d}function r(c,d){return i(new Uint8Array(c.buffer,2,c.length-6),d)}var i=function(){const c={H:{}};return c.H.N=function(d,h){const f=Uint8Array;let p,y,T=0,m=0,g=0,v=0,C=0,P=0,S=0,N=0,_=0;if(d[0]==3&&d[1]==0)return h||new f(0);const w=c.H,R=w.b,b=w.e,O=w.R,L=w.n,x=w.A,M=w.Z,I=w.m,E=h==null;for(E&&(h=new f(d.length>>>2<<5));T==0;)if(T=R(d,_,1),m=R(d,_+1,2),_+=3,m!=0){if(E&&(h=c.H.W(h,N+(1<<17))),m==1&&(p=I.J,y=I.h,P=511,S=31),m==2){g=b(d,_,5)+257,v=b(d,_+5,5)+1,C=b(d,_+10,4)+4,_+=14;let A=1;for(var D=0;D<38;D+=2)I.Q[D]=0,I.Q[D+1]=0;for(D=0;D<C;D++){const z=b(d,_+3*D,3);I.Q[1+(I.X[D]<<1)]=z,z>A&&(A=z)}_+=3*C,L(I.Q,A),x(I.Q,A,I.u),p=I.w,y=I.d,_=O(I.u,(1<<A)-1,g+v,d,_,I.v);const U=w.V(I.v,0,g,I.C);P=(1<<U)-1;const W=w.V(I.v,g,v,I.D);S=(1<<W)-1,L(I.C,U),x(I.C,U,p),L(I.D,W),x(I.D,W,y)}for(;;){const A=p[M(d,_)&P];_+=15&A;const U=A>>>4;if(!(U>>>8))h[N++]=U;else{if(U==256)break;{let W=N+U-254;if(U>264){const q=I.q[U-257];W=N+(q>>>3)+b(d,_,7&q),_+=7&q}const z=y[M(d,_)&S];_+=15&z;const V=z>>>4,B=I.c[V],F=(B>>>4)+R(d,_,15&B);for(_+=15&B;N<W;)h[N]=h[N++-F],h[N]=h[N++-F],h[N]=h[N++-F],h[N]=h[N++-F];N=W}}}}else{7&_&&(_+=8-(7&_));const A=4+(_>>>3),U=d[A-4]|d[A-3]<<8;E&&(h=c.H.W(h,N+U)),h.set(new f(d.buffer,d.byteOffset+A,U),N),_=A+U<<3,N+=U}return h.length==N?h:h.slice(0,N)},c.H.W=function(d,h){const f=d.length;if(h<=f)return d;const p=new Uint8Array(f<<1);return p.set(d,0),p},c.H.R=function(d,h,f,p,y,T){const m=c.H.e,g=c.H.Z;let v=0;for(;v<f;){const C=d[g(p,y)&h];y+=15&C;const P=C>>>4;if(P<=15)T[v]=P,v++;else{let S=0,N=0;P==16?(N=3+m(p,y,2),y+=2,S=T[v-1]):P==17?(N=3+m(p,y,3),y+=3):P==18&&(N=11+m(p,y,7),y+=7);const _=v+N;for(;v<_;)T[v]=S,v++}}return y},c.H.V=function(d,h,f,p){let y=0,T=0;const m=p.length>>>1;for(;T<f;){const g=d[T+h];p[T<<1]=0,p[1+(T<<1)]=g,g>y&&(y=g),T++}for(;T<m;)p[T<<1]=0,p[1+(T<<1)]=0,T++;return y},c.H.n=function(d,h){const f=c.H.m,p=d.length;let y,T,m,g;const v=f.j;for(var C=0;C<=h;C++)v[C]=0;for(C=1;C<p;C+=2)v[d[C]]++;const P=f.K;for(y=0,v[0]=0,T=1;T<=h;T++)y=y+v[T-1]<<1,P[T]=y;for(m=0;m<p;m+=2)g=d[m+1],g!=0&&(d[m]=P[g],P[g]++)},c.H.A=function(d,h,f){const p=d.length,y=c.H.m.r;for(let T=0;T<p;T+=2)if(d[T+1]!=0){const m=T>>1,g=d[T+1],v=m<<4|g,C=h-g;let P=d[T]<<C;const S=P+(1<<C);for(;P!=S;)f[y[P]>>>15-h]=v,P++}},c.H.l=function(d,h){const f=c.H.m.r,p=15-h;for(let y=0;y<d.length;y+=2){const T=d[y]<<h-d[y+1];d[y]=f[T]>>>p}},c.H.M=function(d,h,f){f<<=7&h;const p=h>>>3;d[p]|=f,d[p+1]|=f>>>8},c.H.I=function(d,h,f){f<<=7&h;const p=h>>>3;d[p]|=f,d[p+1]|=f>>>8,d[p+2]|=f>>>16},c.H.e=function(d,h,f){return(d[h>>>3]|d[1+(h>>>3)]<<8)>>>(7&h)&(1<<f)-1},c.H.b=function(d,h,f){return(d[h>>>3]|d[1+(h>>>3)]<<8|d[2+(h>>>3)]<<16)>>>(7&h)&(1<<f)-1},c.H.Z=function(d,h){return(d[h>>>3]|d[1+(h>>>3)]<<8|d[2+(h>>>3)]<<16)>>>(7&h)},c.H.i=function(d,h){return(d[h>>>3]|d[1+(h>>>3)]<<8|d[2+(h>>>3)]<<16|d[3+(h>>>3)]<<24)>>>(7&h)},c.H.m=function(){const d=Uint16Array,h=Uint32Array;return{K:new d(16),j:new d(16),X:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],T:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],q:new d(32),p:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],z:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],c:new h(32),J:new d(512),_:[],h:new d(32),$:[],w:new d(32768),C:[],v:[],d:new d(32768),D:[],u:new d(512),Q:[],r:new d(32768),s:new h(286),Y:new h(30),a:new h(19),t:new h(15e3),k:new d(65536),g:new d(32768)}}(),function(){const d=c.H.m;for(var h=0;h<32768;h++){let p=h;p=(2863311530&p)>>>1|(1431655765&p)<<1,p=(3435973836&p)>>>2|(858993459&p)<<2,p=(4042322160&p)>>>4|(252645135&p)<<4,p=(4278255360&p)>>>8|(16711935&p)<<8,d.r[h]=(p>>>16|p<<16)>>>17}function f(p,y,T){for(;y--!=0;)p.push(0,T)}for(h=0;h<32;h++)d.q[h]=d.S[h]<<3|d.T[h],d.c[h]=d.p[h]<<4|d.z[h];f(d._,144,8),f(d._,112,9),f(d._,24,7),f(d._,8,8),c.H.n(d._,9),c.H.A(d._,9,d.J),c.H.l(d._,9),f(d.$,32,5),c.H.n(d.$,5),c.H.A(d.$,5,d.h),c.H.l(d.$,5),f(d.Q,19,0),f(d.C,286,0),f(d.D,30,0),f(d.v,320,0)}(),c.H.N}();function s(c){return[1,null,3,1,2,null,4][c.ctype]*c.depth}function o(c,d,h,f,p){let y=s(d);const T=Math.ceil(f*y/8);let m,g;y=Math.ceil(y/8);let v=c[h],C=0;if(v>1&&(c[h]=[0,0,1][v-2]),v==3)for(C=y;C<T;C++)c[C+1]=c[C+1]+(c[C+1-y]>>>1)&255;for(let P=0;P<p;P++)if(m=h+P*T,g=m+P+1,v=c[g-1],C=0,v==0)for(;C<T;C++)c[m+C]=c[g+C];else if(v==1){for(;C<y;C++)c[m+C]=c[g+C];for(;C<T;C++)c[m+C]=c[g+C]+c[m+C-y]}else if(v==2)for(;C<T;C++)c[m+C]=c[g+C]+c[m+C-T];else if(v==3){for(;C<y;C++)c[m+C]=c[g+C]+(c[m+C-T]>>>1);for(;C<T;C++)c[m+C]=c[g+C]+(c[m+C-T]+c[m+C-y]>>>1)}else{for(;C<y;C++)c[m+C]=c[g+C]+a(0,c[m+C-T],0);for(;C<T;C++)c[m+C]=c[g+C]+a(c[m+C-y],c[m+C-T],c[m+C-y-T])}return c}function a(c,d,h){const f=c+d-h,p=f-c,y=f-d,T=f-h;return p*p<=y*y&&p*p<=T*T?c:y*y<=T*T?d:h}function l(c,d,h){h.width=t.readUint(c,d),d+=4,h.height=t.readUint(c,d),d+=4,h.depth=c[d],d++,h.ctype=c[d],d++,h.compress=c[d],d++,h.filter=c[d],d++,h.interlace=c[d],d++}function u(c,d,h,f,p,y,T,m,g){const v=Math.min(d,p),C=Math.min(h,y);let P=0,S=0;for(let M=0;M<C;M++)for(let I=0;I<v;I++)if(T>=0&&m>=0?(P=M*d+I<<2,S=(m+M)*p+T+I<<2):(P=(-m+M)*d-T+I<<2,S=M*p+I<<2),g==0)f[S]=c[P],f[S+1]=c[P+1],f[S+2]=c[P+2],f[S+3]=c[P+3];else if(g==1){var N=c[P+3]*.00392156862745098,_=c[P]*N,w=c[P+1]*N,R=c[P+2]*N,b=f[S+3]*(1/255),O=f[S]*b,L=f[S+1]*b,x=f[S+2]*b;const E=1-N,D=N+b*E,A=D==0?0:1/D;f[S+3]=255*D,f[S+0]=(_+O*E)*A,f[S+1]=(w+L*E)*A,f[S+2]=(R+x*E)*A}else if(g==2)N=c[P+3],_=c[P],w=c[P+1],R=c[P+2],b=f[S+3],O=f[S],L=f[S+1],x=f[S+2],N==b&&_==O&&w==L&&R==x?(f[S]=0,f[S+1]=0,f[S+2]=0,f[S+3]=0):(f[S]=_,f[S+1]=w,f[S+2]=R,f[S+3]=N);else if(g==3){if(N=c[P+3],_=c[P],w=c[P+1],R=c[P+2],b=f[S+3],O=f[S],L=f[S+1],x=f[S+2],N==b&&_==O&&w==L&&R==x)continue;if(N<220&&b>20)return!1}return!0}return{decode:function(d){const h=new Uint8Array(d);let f=8;const p=t,y=p.readUshort,T=p.readUint,m={tabs:{},frames:[]},g=new Uint8Array(h.length);let v,C=0,P=0;const S=[137,80,78,71,13,10,26,10];for(var N=0;N<8;N++)if(h[N]!=S[N])throw"The input is not a PNG file!";for(;f<h.length;){const M=p.readUint(h,f);f+=4;const I=p.readASCII(h,f,4);if(f+=4,I=="IHDR")l(h,f,m);else if(I=="iCCP"){for(var _=f;h[_]!=0;)_++;p.readASCII(h,f,_-f),h[_+1];const E=h.slice(_+2,f+M);let D=null;try{D=r(E)}catch{D=i(E)}m.tabs[I]=D}else if(I=="CgBI")m.tabs[I]=h.slice(f,f+4);else if(I=="IDAT"){for(N=0;N<M;N++)g[C+N]=h[f+N];C+=M}else if(I=="acTL")m.tabs[I]={num_frames:T(h,f),num_plays:T(h,f+4)},v=new Uint8Array(h.length);else if(I=="fcTL"){P!=0&&((x=m.frames[m.frames.length-1]).data=n(m,v.slice(0,P),x.rect.width,x.rect.height),P=0);const E={x:T(h,f+12),y:T(h,f+16),width:T(h,f+4),height:T(h,f+8)};let D=y(h,f+22);D=y(h,f+20)/(D==0?100:D);const A={rect:E,delay:Math.round(1e3*D),dispose:h[f+24],blend:h[f+25]};m.frames.push(A)}else if(I=="fdAT"){for(N=0;N<M-4;N++)v[P+N]=h[f+N+4];P+=M-4}else if(I=="pHYs")m.tabs[I]=[p.readUint(h,f),p.readUint(h,f+4),h[f+8]];else if(I=="cHRM")for(m.tabs[I]=[],N=0;N<8;N++)m.tabs[I].push(p.readUint(h,f+4*N));else if(I=="tEXt"||I=="zTXt"){m.tabs[I]==null&&(m.tabs[I]={});var w=p.nextZero(h,f),R=p.readASCII(h,f,w-f),b=f+M-w-1;if(I=="tEXt")L=p.readASCII(h,w+1,b);else{var O=r(h.slice(w+2,w+2+b));L=p.readUTF8(O,0,O.length)}m.tabs[I][R]=L}else if(I=="iTXt"){m.tabs[I]==null&&(m.tabs[I]={}),w=0,_=f,w=p.nextZero(h,_),R=p.readASCII(h,_,w-_);const E=h[_=w+1];var L;h[_+1],_+=2,w=p.nextZero(h,_),p.readASCII(h,_,w-_),_=w+1,w=p.nextZero(h,_),p.readUTF8(h,_,w-_),b=M-((_=w+1)-f),E==0?L=p.readUTF8(h,_,b):(O=r(h.slice(_,_+b)),L=p.readUTF8(O,0,O.length)),m.tabs[I][R]=L}else if(I=="PLTE")m.tabs[I]=p.readBytes(h,f,M);else if(I=="hIST"){const E=m.tabs.PLTE.length/3;for(m.tabs[I]=[],N=0;N<E;N++)m.tabs[I].push(y(h,f+2*N))}else if(I=="tRNS")m.ctype==3?m.tabs[I]=p.readBytes(h,f,M):m.ctype==0?m.tabs[I]=y(h,f):m.ctype==2&&(m.tabs[I]=[y(h,f),y(h,f+2),y(h,f+4)]);else if(I=="gAMA")m.tabs[I]=p.readUint(h,f)/1e5;else if(I=="sRGB")m.tabs[I]=h[f];else if(I=="bKGD")m.ctype==0||m.ctype==4?m.tabs[I]=[y(h,f)]:m.ctype==2||m.ctype==6?m.tabs[I]=[y(h,f),y(h,f+2),y(h,f+4)]:m.ctype==3&&(m.tabs[I]=h[f]);else if(I=="IEND")break;f+=M,p.readUint(h,f),f+=4}var x;return P!=0&&((x=m.frames[m.frames.length-1]).data=n(m,v.slice(0,P),x.rect.width,x.rect.height)),m.data=n(m,g,m.width,m.height),delete m.compress,delete m.interlace,delete m.filter,m},toRGBA8:function(d){const h=d.width,f=d.height;if(d.tabs.acTL==null)return[e(d.data,h,f,d).buffer];const p=[];d.frames[0].data==null&&(d.frames[0].data=d.data);const y=h*f*4,T=new Uint8Array(y),m=new Uint8Array(y),g=new Uint8Array(y);for(let C=0;C<d.frames.length;C++){const P=d.frames[C],S=P.rect.x,N=P.rect.y,_=P.rect.width,w=P.rect.height,R=e(P.data,_,w,d);if(C!=0)for(var v=0;v<y;v++)g[v]=T[v];if(P.blend==0?u(R,_,w,T,h,f,S,N,0):P.blend==1&&u(R,_,w,T,h,f,S,N,1),p.push(T.buffer.slice(0)),P.dispose!=0){if(P.dispose==1)u(m,_,w,T,h,f,S,N,0);else if(P.dispose==2)for(v=0;v<y;v++)T[v]=g[v]}}return p},_paeth:a,_copyTile:u,_bin:t}}();(function(){const{_copyTile:t}=Vt,{_bin:e}=Vt,n=Vt._paeth;var r={table:function(){const _=new Uint32Array(256);for(let w=0;w<256;w++){let R=w;for(let b=0;b<8;b++)1&R?R=3988292384^R>>>1:R>>>=1;_[w]=R}return _}(),update(_,w,R,b){for(let O=0;O<b;O++)_=r.table[255&(_^w[R+O])]^_>>>8;return _},crc:(_,w,R)=>4294967295^r.update(4294967295,_,w,R)};function i(_,w,R,b){w[R]+=_[0]*b>>4,w[R+1]+=_[1]*b>>4,w[R+2]+=_[2]*b>>4,w[R+3]+=_[3]*b>>4}function s(_){return Math.max(0,Math.min(255,_))}function o(_,w){const R=_[0]-w[0],b=_[1]-w[1],O=_[2]-w[2],L=_[3]-w[3];return R*R+b*b+O*O+L*L}function a(_,w,R,b,O,L,x){x==null&&(x=1);const M=b.length,I=[];for(var E=0;E<M;E++){const F=b[E];I.push([F>>>0&255,F>>>8&255,F>>>16&255,F>>>24&255])}for(E=0;E<M;E++){let F=4294967295;for(var D=0,A=0;A<M;A++){var U=o(I[E],I[A]);A!=E&&U<F&&(F=U,D=A)}}const W=new Uint32Array(O.buffer),z=new Int16Array(w*R*4),V=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];for(E=0;E<V.length;E++)V[E]=255*((V[E]+.5)/16-.5);for(let F=0;F<R;F++)for(let q=0;q<w;q++){var B;E=4*(F*w+q),x!=2?B=[s(_[E]+z[E]),s(_[E+1]+z[E+1]),s(_[E+2]+z[E+2]),s(_[E+3]+z[E+3])]:(U=V[4*(3&F)+(3&q)],B=[s(_[E]+U),s(_[E+1]+U),s(_[E+2]+U),s(_[E+3]+U)]),D=0;let ie=16777215;for(A=0;A<M;A++){const he=o(B,I[A]);he<ie&&(ie=he,D=A)}const le=I[D],re=[B[0]-le[0],B[1]-le[1],B[2]-le[2],B[3]-le[3]];x==1&&(q!=w-1&&i(re,z,E+4,7),F!=R-1&&(q!=0&&i(re,z,E+4*w-4,3),i(re,z,E+4*w,5),q!=w-1&&i(re,z,E+4*w+4,1))),L[E>>2]=D,W[E>>2]=b[D]}}function l(_,w,R,b,O){O==null&&(O={});const{crc:L}=r,x=e.writeUint,M=e.writeUshort,I=e.writeASCII;let E=8;const D=_.frames.length>1;let A,U=!1,W=33+(D?20:0);if(O.sRGB!=null&&(W+=13),O.pHYs!=null&&(W+=21),O.iCCP!=null&&(A=pako.deflate(O.iCCP),W+=21+A.length+4),_.ctype==3){for(var z=_.plte.length,V=0;V<z;V++)_.plte[V]>>>24!=255&&(U=!0);W+=8+3*z+4+(U?8+1*z+4:0)}for(var B=0;B<_.frames.length;B++)D&&(W+=38),W+=(le=_.frames[B]).cimg.length+12,B!=0&&(W+=4);W+=12;const F=new Uint8Array(W),q=[137,80,78,71,13,10,26,10];for(V=0;V<8;V++)F[V]=q[V];if(x(F,E,13),E+=4,I(F,E,"IHDR"),E+=4,x(F,E,w),E+=4,x(F,E,R),E+=4,F[E]=_.depth,E++,F[E]=_.ctype,E++,F[E]=0,E++,F[E]=0,E++,F[E]=0,E++,x(F,E,L(F,E-17,17)),E+=4,O.sRGB!=null&&(x(F,E,1),E+=4,I(F,E,"sRGB"),E+=4,F[E]=O.sRGB,E++,x(F,E,L(F,E-5,5)),E+=4),O.iCCP!=null){const re=13+A.length;x(F,E,re),E+=4,I(F,E,"iCCP"),E+=4,I(F,E,"ICC profile"),E+=11,E+=2,F.set(A,E),E+=A.length,x(F,E,L(F,E-(re+4),re+4)),E+=4}if(O.pHYs!=null&&(x(F,E,9),E+=4,I(F,E,"pHYs"),E+=4,x(F,E,O.pHYs[0]),E+=4,x(F,E,O.pHYs[1]),E+=4,F[E]=O.pHYs[2],E++,x(F,E,L(F,E-13,13)),E+=4),D&&(x(F,E,8),E+=4,I(F,E,"acTL"),E+=4,x(F,E,_.frames.length),E+=4,x(F,E,O.loop!=null?O.loop:0),E+=4,x(F,E,L(F,E-12,12)),E+=4),_.ctype==3){for(x(F,E,3*(z=_.plte.length)),E+=4,I(F,E,"PLTE"),E+=4,V=0;V<z;V++){const re=3*V,he=_.plte[V],Ne=255&he,Oe=he>>>8&255,Tr=he>>>16&255;F[E+re+0]=Ne,F[E+re+1]=Oe,F[E+re+2]=Tr}if(E+=3*z,x(F,E,L(F,E-3*z-4,3*z+4)),E+=4,U){for(x(F,E,z),E+=4,I(F,E,"tRNS"),E+=4,V=0;V<z;V++)F[E+V]=_.plte[V]>>>24&255;E+=z,x(F,E,L(F,E-z-4,z+4)),E+=4}}let ie=0;for(B=0;B<_.frames.length;B++){var le=_.frames[B];D&&(x(F,E,26),E+=4,I(F,E,"fcTL"),E+=4,x(F,E,ie++),E+=4,x(F,E,le.rect.width),E+=4,x(F,E,le.rect.height),E+=4,x(F,E,le.rect.x),E+=4,x(F,E,le.rect.y),E+=4,M(F,E,b[B]),E+=2,M(F,E,1e3),E+=2,F[E]=le.dispose,E++,F[E]=le.blend,E++,x(F,E,L(F,E-30,30)),E+=4);const re=le.cimg;x(F,E,(z=re.length)+(B==0?0:4)),E+=4;const he=E;I(F,E,B==0?"IDAT":"fdAT"),E+=4,B!=0&&(x(F,E,ie++),E+=4),F.set(re,E),E+=z,x(F,E,L(F,he,E-he)),E+=4}return x(F,E,0),E+=4,I(F,E,"IEND"),E+=4,x(F,E,L(F,E-4,4)),E+=4,F.buffer}function u(_,w,R){for(let b=0;b<_.frames.length;b++){const O=_.frames[b];O.rect.width;const L=O.rect.height,x=new Uint8Array(L*O.bpl+L);O.cimg=f(O.img,L,O.bpp,O.bpl,x,w,R)}}function c(_,w,R,b,O){const L=O[0],x=O[1],M=O[2],I=O[3],E=O[4],D=O[5];let A=6,U=8,W=255;for(var z=0;z<_.length;z++){const Ye=new Uint8Array(_[z]);for(var V=Ye.length,B=0;B<V;B+=4)W&=Ye[B+3]}const F=W!=255,q=function(_e,fe,We,nt,Pe,Ct){const xe=[];for(var pe=0;pe<_e.length;pe++){const rt=new Uint8Array(_e[pe]),Ht=new Uint32Array(rt.buffer);var St;let bt=0,vn=0,on=fe,Rr=We,mu=nt?1:0;if(pe!=0){const vw=Ct||nt||pe==1||xe[pe-2].dispose!=0?1:2;let gu=0,Of=1e9;for(let hs=0;hs<vw;hs++){var Bn=new Uint8Array(_e[pe-1-hs]);const yw=new Uint32Array(_e[pe-1-hs]);let $n=fe,Hn=We,hi=-1,fs=-1;for(let Nr=0;Nr<We;Nr++)for(let Ar=0;Ar<fe;Ar++)Ht[Je=Nr*fe+Ar]!=yw[Je]&&(Ar<$n&&($n=Ar),Ar>hi&&(hi=Ar),Nr<Hn&&(Hn=Nr),Nr>fs&&(fs=Nr));hi==-1&&($n=Hn=hi=fs=0),Pe&&((1&$n)==1&&$n--,(1&Hn)==1&&Hn--);const Df=(hi-$n+1)*(fs-Hn+1);Df<Of&&(Of=Df,gu=hs,bt=$n,vn=Hn,on=hi-$n+1,Rr=fs-Hn+1)}Bn=new Uint8Array(_e[pe-1-gu]),gu==1&&(xe[pe-1].dispose=2),St=new Uint8Array(on*Rr*4),t(Bn,fe,We,St,on,Rr,-bt,-vn,0),mu=t(rt,fe,We,St,on,Rr,-bt,-vn,3)?1:0,mu==1?h(rt,fe,We,St,{x:bt,y:vn,width:on,height:Rr}):t(rt,fe,We,St,on,Rr,-bt,-vn,0)}else St=rt.slice(0);xe.push({rect:{x:bt,y:vn,width:on,height:Rr},img:St,blend:mu,dispose:0})}if(nt)for(pe=0;pe<xe.length;pe++){if((kr=xe[pe]).blend==1)continue;const rt=kr.rect,Ht=xe[pe-1].rect,bt=Math.min(rt.x,Ht.x),vn=Math.min(rt.y,Ht.y),on={x:bt,y:vn,width:Math.max(rt.x+rt.width,Ht.x+Ht.width)-bt,height:Math.max(rt.y+rt.height,Ht.y+Ht.height)-vn};xe[pe-1].dispose=1,pe-1!=0&&d(_e,fe,We,xe,pe-1,on,Pe),d(_e,fe,We,xe,pe,on,Pe)}let $o=0;if(_e.length!=1)for(var Je=0;Je<xe.length;Je++){var kr;$o+=(kr=xe[Je]).rect.width*kr.rect.height}return xe}(_,w,R,L,x,M),ie={},le=[],re=[];if(b!=0){const Ye=[];for(B=0;B<q.length;B++)Ye.push(q[B].img.buffer);const _e=function(Pe){let Ct=0;for(var xe=0;xe<Pe.length;xe++)Ct+=Pe[xe].byteLength;const pe=new Uint8Array(Ct);let St=0;for(xe=0;xe<Pe.length;xe++){const Bn=new Uint8Array(Pe[xe]),$o=Bn.length;for(let Je=0;Je<$o;Je+=4){let kr=Bn[Je],rt=Bn[Je+1],Ht=Bn[Je+2];const bt=Bn[Je+3];bt==0&&(kr=rt=Ht=0),pe[St+Je]=kr,pe[St+Je+1]=rt,pe[St+Je+2]=Ht,pe[St+Je+3]=bt}St+=$o}return pe.buffer}(Ye),fe=y(_e,b);for(B=0;B<fe.plte.length;B++)le.push(fe.plte[B].est.rgba);let We=0;for(B=0;B<q.length;B++){const nt=(Ne=q[B]).img.length;var he=new Uint8Array(fe.inds.buffer,We>>2,nt>>2);re.push(he);const Pe=new Uint8Array(fe.abuf,We,nt);D&&a(Ne.img,Ne.rect.width,Ne.rect.height,le,Pe,he),Ne.img.set(Pe),We+=nt}}else for(z=0;z<q.length;z++){var Ne=q[z];const Ye=new Uint32Array(Ne.img.buffer);var Oe=Ne.rect.width;for(V=Ye.length,he=new Uint8Array(V),re.push(he),B=0;B<V;B++){const _e=Ye[B];if(B!=0&&_e==Ye[B-1])he[B]=he[B-1];else if(B>Oe&&_e==Ye[B-Oe])he[B]=he[B-Oe];else{let fe=ie[_e];if(fe==null&&(ie[_e]=fe=le.length,le.push(_e),le.length>=300))break;he[B]=fe}}}const Tr=le.length;for(Tr<=256&&E==0&&(U=Tr<=2?1:Tr<=4?2:Tr<=16?4:8,U=Math.max(U,I)),z=0;z<q.length;z++){(Ne=q[z]).rect.x,Ne.rect.y,Oe=Ne.rect.width;const Ye=Ne.rect.height;let _e=Ne.img;new Uint32Array(_e.buffer);let fe=4*Oe,We=4;if(Tr<=256&&E==0){fe=Math.ceil(U*Oe/8);var sn=new Uint8Array(fe*Ye);const nt=re[z];for(let Pe=0;Pe<Ye;Pe++){B=Pe*fe;const Ct=Pe*Oe;if(U==8)for(var Ce=0;Ce<Oe;Ce++)sn[B+Ce]=nt[Ct+Ce];else if(U==4)for(Ce=0;Ce<Oe;Ce++)sn[B+(Ce>>1)]|=nt[Ct+Ce]<<4-4*(1&Ce);else if(U==2)for(Ce=0;Ce<Oe;Ce++)sn[B+(Ce>>2)]|=nt[Ct+Ce]<<6-2*(3&Ce);else if(U==1)for(Ce=0;Ce<Oe;Ce++)sn[B+(Ce>>3)]|=nt[Ct+Ce]<<7-1*(7&Ce)}_e=sn,A=3,We=1}else if(F==0&&q.length==1){sn=new Uint8Array(Oe*Ye*3);const nt=Oe*Ye;for(B=0;B<nt;B++){const Pe=3*B,Ct=4*B;sn[Pe]=_e[Ct],sn[Pe+1]=_e[Ct+1],sn[Pe+2]=_e[Ct+2]}_e=sn,A=2,We=3,fe=3*Oe}Ne.img=_e,Ne.bpl=fe,Ne.bpp=We}return{ctype:A,depth:U,plte:le,frames:q}}function d(_,w,R,b,O,L,x){const M=Uint8Array,I=Uint32Array,E=new M(_[O-1]),D=new I(_[O-1]),A=O+1<_.length?new M(_[O+1]):null,U=new M(_[O]),W=new I(U.buffer);let z=w,V=R,B=-1,F=-1;for(let ie=0;ie<L.height;ie++)for(let le=0;le<L.width;le++){const re=L.x+le,he=L.y+ie,Ne=he*w+re,Oe=W[Ne];Oe==0||b[O-1].dispose==0&&D[Ne]==Oe&&(A==null||A[4*Ne+3]!=0)||(re<z&&(z=re),re>B&&(B=re),he<V&&(V=he),he>F&&(F=he))}B==-1&&(z=V=B=F=0),x&&((1&z)==1&&z--,(1&V)==1&&V--),L={x:z,y:V,width:B-z+1,height:F-V+1};const q=b[O];q.rect=L,q.blend=1,q.img=new Uint8Array(L.width*L.height*4),b[O-1].dispose==0?(t(E,w,R,q.img,L.width,L.height,-L.x,-L.y,0),h(U,w,R,q.img,L)):t(U,w,R,q.img,L.width,L.height,-L.x,-L.y,0)}function h(_,w,R,b,O){t(_,w,R,b,O.width,O.height,-O.x,-O.y,2)}function f(_,w,R,b,O,L,x){const M=[];let I,E=[0,1,2,3,4];L!=-1?E=[L]:(w*b>5e5||R==1)&&(E=[0]),x&&(I={level:0});const D=Mb;for(var A=0;A<E.length;A++){for(let z=0;z<w;z++)p(O,_,z,b,R,E[A]);M.push(D.deflate(O,I))}let U,W=1e9;for(A=0;A<M.length;A++)M[A].length<W&&(U=A,W=M[A].length);return M[U]}function p(_,w,R,b,O,L){const x=R*b;let M=x+R;if(_[M]=L,M++,L==0)if(b<500)for(var I=0;I<b;I++)_[M+I]=w[x+I];else _.set(new Uint8Array(w.buffer,x,b),M);else if(L==1){for(I=0;I<O;I++)_[M+I]=w[x+I];for(I=O;I<b;I++)_[M+I]=w[x+I]-w[x+I-O]+256&255}else if(R==0){for(I=0;I<O;I++)_[M+I]=w[x+I];if(L==2)for(I=O;I<b;I++)_[M+I]=w[x+I];if(L==3)for(I=O;I<b;I++)_[M+I]=w[x+I]-(w[x+I-O]>>1)+256&255;if(L==4)for(I=O;I<b;I++)_[M+I]=w[x+I]-n(w[x+I-O],0,0)+256&255}else{if(L==2)for(I=0;I<b;I++)_[M+I]=w[x+I]+256-w[x+I-b]&255;if(L==3){for(I=0;I<O;I++)_[M+I]=w[x+I]+256-(w[x+I-b]>>1)&255;for(I=O;I<b;I++)_[M+I]=w[x+I]+256-(w[x+I-b]+w[x+I-O]>>1)&255}if(L==4){for(I=0;I<O;I++)_[M+I]=w[x+I]+256-n(0,w[x+I-b],0)&255;for(I=O;I<b;I++)_[M+I]=w[x+I]+256-n(w[x+I-O],w[x+I-b],w[x+I-O-b])&255}}}function y(_,w){const R=new Uint8Array(_),b=R.slice(0),O=new Uint32Array(b.buffer),L=T(b,w),x=L[0],M=L[1],I=R.length,E=new Uint8Array(I>>2);let D;if(R.length<2e7)for(var A=0;A<I;A+=4)D=m(x,U=R[A]*(1/255),W=R[A+1]*(1/255),z=R[A+2]*(1/255),V=R[A+3]*(1/255)),E[A>>2]=D.ind,O[A>>2]=D.est.rgba;else for(A=0;A<I;A+=4){var U=R[A]*.00392156862745098,W=R[A+1]*(1/255),z=R[A+2]*(1/255),V=R[A+3]*(1/255);for(D=x;D.left;)D=g(D.est,U,W,z,V)<=0?D.left:D.right;E[A>>2]=D.ind,O[A>>2]=D.est.rgba}return{abuf:b.buffer,inds:E,plte:M}}function T(_,w,R){R==null&&(R=1e-4);const b=new Uint32Array(_.buffer),O={i0:0,i1:_.length,bst:null,est:null,tdst:0,left:null,right:null};O.bst=P(_,O.i0,O.i1),O.est=S(O.bst);const L=[O];for(;L.length<w;){let M=0,I=0;for(var x=0;x<L.length;x++)L[x].est.L>M&&(M=L[x].est.L,I=x);if(M<R)break;const E=L[I],D=v(_,b,E.i0,E.i1,E.est.e,E.est.eMq255);if(E.i0>=D||E.i1<=D){E.est.L=0;continue}const A={i0:E.i0,i1:D,bst:null,est:null,tdst:0,left:null,right:null};A.bst=P(_,A.i0,A.i1),A.est=S(A.bst);const U={i0:D,i1:E.i1,bst:null,est:null,tdst:0,left:null,right:null};for(U.bst={R:[],m:[],N:E.bst.N-A.bst.N},x=0;x<16;x++)U.bst.R[x]=E.bst.R[x]-A.bst.R[x];for(x=0;x<4;x++)U.bst.m[x]=E.bst.m[x]-A.bst.m[x];U.est=S(U.bst),E.left=A,E.right=U,L[I]=A,L.push(U)}for(L.sort((M,I)=>I.bst.N-M.bst.N),x=0;x<L.length;x++)L[x].ind=x;return[O,L]}function m(_,w,R,b,O){if(_.left==null)return _.tdst=function(A,U,W,z,V){const B=U-A[0],F=W-A[1],q=z-A[2],ie=V-A[3];return B*B+F*F+q*q+ie*ie}(_.est.q,w,R,b,O),_;const L=g(_.est,w,R,b,O);let x=_.left,M=_.right;L>0&&(x=_.right,M=_.left);const I=m(x,w,R,b,O);if(I.tdst<=L*L)return I;const E=m(M,w,R,b,O);return E.tdst<I.tdst?E:I}function g(_,w,R,b,O){const{e:L}=_;return L[0]*w+L[1]*R+L[2]*b+L[3]*O-_.eMq}function v(_,w,R,b,O,L){for(b-=4;R<b;){for(;C(_,R,O)<=L;)R+=4;for(;C(_,b,O)>L;)b-=4;if(R>=b)break;const x=w[R>>2];w[R>>2]=w[b>>2],w[b>>2]=x,R+=4,b-=4}for(;C(_,R,O)>L;)R-=4;return R+4}function C(_,w,R){return _[w]*R[0]+_[w+1]*R[1]+_[w+2]*R[2]+_[w+3]*R[3]}function P(_,w,R){const b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],O=[0,0,0,0],L=R-w>>2;for(let x=w;x<R;x+=4){const M=_[x]*.00392156862745098,I=_[x+1]*(1/255),E=_[x+2]*(1/255),D=_[x+3]*(1/255);O[0]+=M,O[1]+=I,O[2]+=E,O[3]+=D,b[0]+=M*M,b[1]+=M*I,b[2]+=M*E,b[3]+=M*D,b[5]+=I*I,b[6]+=I*E,b[7]+=I*D,b[10]+=E*E,b[11]+=E*D,b[15]+=D*D}return b[4]=b[1],b[8]=b[2],b[9]=b[6],b[12]=b[3],b[13]=b[7],b[14]=b[11],{R:b,m:O,N:L}}function S(_){const{R:w}=_,{m:R}=_,{N:b}=_,O=R[0],L=R[1],x=R[2],M=R[3],I=b==0?0:1/b,E=[w[0]-O*O*I,w[1]-O*L*I,w[2]-O*x*I,w[3]-O*M*I,w[4]-L*O*I,w[5]-L*L*I,w[6]-L*x*I,w[7]-L*M*I,w[8]-x*O*I,w[9]-x*L*I,w[10]-x*x*I,w[11]-x*M*I,w[12]-M*O*I,w[13]-M*L*I,w[14]-M*x*I,w[15]-M*M*I],D=E,A=N;let U=[Math.random(),Math.random(),Math.random(),Math.random()],W=0,z=0;if(b!=0)for(let B=0;B<16&&(U=A.multVec(D,U),z=Math.sqrt(A.dot(U,U)),U=A.sml(1/z,U),!(B!=0&&Math.abs(z-W)<1e-9));B++)W=z;const V=[O*I,L*I,x*I,M*I];return{Cov:E,q:V,e:U,L:W,eMq255:A.dot(A.sml(255,V),U),eMq:A.dot(U,V),rgba:(Math.round(255*V[3])<<24|Math.round(255*V[2])<<16|Math.round(255*V[1])<<8|Math.round(255*V[0])<<0)>>>0}}var N={multVec:(_,w)=>[_[0]*w[0]+_[1]*w[1]+_[2]*w[2]+_[3]*w[3],_[4]*w[0]+_[5]*w[1]+_[6]*w[2]+_[7]*w[3],_[8]*w[0]+_[9]*w[1]+_[10]*w[2]+_[11]*w[3],_[12]*w[0]+_[13]*w[1]+_[14]*w[2]+_[15]*w[3]],dot:(_,w)=>_[0]*w[0]+_[1]*w[1]+_[2]*w[2]+_[3]*w[3],sml:(_,w)=>[_*w[0],_*w[1],_*w[2],_*w[3]]};Vt.encode=function(w,R,b,O,L,x,M){O==null&&(O=0),M==null&&(M=!1);const I=c(w,R,b,O,[!1,!1,!1,0,M,!1]);return u(I,-1),l(I,R,b,L,x)},Vt.encodeLL=function(w,R,b,O,L,x,M,I){const E={ctype:0+(O==1?0:2)+(L==0?0:4),depth:x,frames:[]},D=(O+L)*x,A=D*R;for(let U=0;U<w.length;U++)E.frames.push({rect:{x:0,y:0,width:R,height:b},img:new Uint8Array(w[U]),blend:0,dispose:1,bpp:Math.ceil(D/8),bpl:Math.ceil(A/8)});return u(E,0,!0),l(E,R,b,M,I)},Vt.encode.compress=c,Vt.encode.dither=a,Vt.quantize=y,Vt.quantize.getKDtree=T,Vt.quantize.getNearest=m})();const aw={toArrayBuffer(t,e){const n=t.width,r=t.height,i=n<<2,s=t.getContext("2d").getImageData(0,0,n,r),o=new Uint32Array(s.data.buffer),a=(32*n+31)/32<<2,l=a*r,u=122+l,c=new ArrayBuffer(u),d=new DataView(c),h=1<<20;let f,p,y,T,m=h,g=0,v=0,C=0;function P(_){d.setUint16(v,_,!0),v+=2}function S(_){d.setUint32(v,_,!0),v+=4}function N(_){v+=_}P(19778),S(u),N(4),S(122),S(108),S(n),S(-r>>>0),P(1),P(32),S(3),S(l),S(2835),S(2835),N(8),S(16711680),S(65280),S(255),S(4278190080),S(1466527264),function _(){for(;g<r&&m>0;){for(T=122+g*a,f=0;f<i;)m--,p=o[C++],y=p>>>24,d.setUint32(T+f,p<<8|y),f+=4;g++}C<o.length?(m=h,setTimeout(_,aw._dly)):e(c)}()},toBlob(t,e){this.toArrayBuffer(t,n=>{e(new Blob([n],{type:"image/bmp"}))})},_dly:9};var pt={CHROME:"CHROME",FIREFOX:"FIREFOX",DESKTOP_SAFARI:"DESKTOP_SAFARI",IE:"IE",IOS:"IOS",ETC:"ETC"},Ub={[pt.CHROME]:16384,[pt.FIREFOX]:11180,[pt.DESKTOP_SAFARI]:16384,[pt.IE]:8192,[pt.IOS]:4096,[pt.ETC]:8192};const xf=typeof window<"u",lw=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Rl=xf&&window.cordova&&window.cordova.require&&window.cordova.require("cordova/modulemapper"),Fb=(xf||lw)&&(Rl&&Rl.getOriginalSymbol(window,"File")||typeof File<"u"&&File),uw=(xf||lw)&&(Rl&&Rl.getOriginalSymbol(window,"FileReader")||typeof FileReader<"u"&&FileReader);function bf(t,e,n=Date.now()){return new Promise(r=>{const i=t.split(","),s=i[0].match(/:(.*?);/)[1],o=globalThis.atob(i[1]);let a=o.length;const l=new Uint8Array(a);for(;a--;)l[a]=o.charCodeAt(a);const u=new Blob([l],{type:s});u.name=e,u.lastModified=n,r(u)})}function cw(t){return new Promise((e,n)=>{const r=new uw;r.onload=()=>e(r.result),r.onerror=i=>n(i),r.readAsDataURL(t)})}function dw(t){return new Promise((e,n)=>{const r=new Image;r.onload=()=>e(r),r.onerror=i=>n(i),r.src=t})}function zr(){if(zr.cachedResult!==void 0)return zr.cachedResult;let t=pt.ETC;const{userAgent:e}=navigator;return/Chrom(e|ium)/i.test(e)?t=pt.CHROME:/iP(ad|od|hone)/i.test(e)&&/WebKit/i.test(e)?t=pt.IOS:/Safari/i.test(e)?t=pt.DESKTOP_SAFARI:/Firefox/i.test(e)?t=pt.FIREFOX:(/MSIE/i.test(e)||document.documentMode)&&(t=pt.IE),zr.cachedResult=t,zr.cachedResult}function hw(t,e){const n=zr(),r=Ub[n];let i=t,s=e,o=i*s;const a=i>s?s/i:i/s;for(;o>r*r;){const l=(r+i)/2,u=(r+s)/2;l<u?(s=u,i=u*a):(s=l*a,i=l),o=i*s}return{width:i,height:s}}function pu(t,e){let n,r;try{if(n=new OffscreenCanvas(t,e),r=n.getContext("2d"),r===null)throw new Error("getContext of OffscreenCanvas returns null")}catch{n=document.createElement("canvas"),r=n.getContext("2d")}return n.width=t,n.height=e,[n,r]}function fw(t,e){const{width:n,height:r}=hw(t.width,t.height),[i,s]=pu(n,r);return e&&/jpe?g/.test(e)&&(s.fillStyle="white",s.fillRect(0,0,i.width,i.height)),s.drawImage(t,0,0,i.width,i.height),i}function Aa(){return Aa.cachedResult!==void 0||(Aa.cachedResult=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&typeof document<"u"&&"ontouchend"in document),Aa.cachedResult}function Nl(t,e={}){return new Promise(function(n,r){let i,s;var o=function(){try{return s=fw(i,e.fileType||t.type),n([i,s])}catch(l){return r(l)}},a=function(l){try{var u=function(c){try{throw c}catch(d){return r(d)}};try{let c;return cw(t).then(function(d){try{return c=d,dw(c).then(function(h){try{return i=h,function(){try{return o()}catch(f){return r(f)}}()}catch(f){return u(f)}},u)}catch(h){return u(h)}},u)}catch(c){u(c)}}catch(c){return r(c)}};try{if(Aa()||[pt.DESKTOP_SAFARI,pt.MOBILE_SAFARI].includes(zr()))throw new Error("Skip createImageBitmap on IOS and Safari");return createImageBitmap(t).then(function(l){try{return i=l,o()}catch{return a()}},a)}catch{a()}})}function Al(t,e,n,r,i=1){return new Promise(function(s,o){let a;if(e==="image/png"){let u,c,d;return u=t.getContext("2d"),{data:c}=u.getImageData(0,0,t.width,t.height),d=Vt.encode([c.buffer],t.width,t.height,4096*i),a=new Blob([d],{type:e}),a.name=n,a.lastModified=r,l.call(this)}{let u=function(){return l.call(this)};if(e==="image/bmp")return new Promise(c=>aw.toBlob(t,c)).then((function(c){try{return a=c,a.name=n,a.lastModified=r,u.call(this)}catch(d){return o(d)}}).bind(this),o);{let c=function(){return u.call(this)};if(typeof OffscreenCanvas=="function"&&t instanceof OffscreenCanvas)return t.convertToBlob({type:e,quality:i}).then((function(d){try{return a=d,a.name=n,a.lastModified=r,c.call(this)}catch(h){return o(h)}}).bind(this),o);{let d;return d=t.toDataURL(e,i),bf(d,n,r).then((function(h){try{return a=h,c.call(this)}catch(f){return o(f)}}).bind(this),o)}}}function l(){return s(a)}})}function un(t){t.width=0,t.height=0}function Pi(){return new Promise(function(t,e){let n,r,i,s;return Pi.cachedResult!==void 0?t(Pi.cachedResult):bf("data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==","test.jpg",Date.now()).then(function(o){try{return n=o,Nl(n).then(function(a){try{return r=a[1],Al(r,n.type,n.name,n.lastModified).then(function(l){try{return i=l,un(r),Nl(i).then(function(u){try{return s=u[0],Pi.cachedResult=s.width===1&&s.height===2,t(Pi.cachedResult)}catch(c){return e(c)}},e)}catch(u){return e(u)}},e)}catch(l){return e(l)}},e)}catch(a){return e(a)}},e)})}function pw(t){return new Promise((e,n)=>{const r=new uw;r.onload=i=>{const s=new DataView(i.target.result);if(s.getUint16(0,!1)!=65496)return e(-2);const o=s.byteLength;let a=2;for(;a<o;){if(s.getUint16(a+2,!1)<=8)return e(-1);const l=s.getUint16(a,!1);if(a+=2,l==65505){if(s.getUint32(a+=2,!1)!=1165519206)return e(-1);const u=s.getUint16(a+=6,!1)==18761;a+=s.getUint32(a+4,u);const c=s.getUint16(a,u);a+=2;for(let d=0;d<c;d++)if(s.getUint16(a+12*d,u)==274)return e(s.getUint16(a+12*d+8,u))}else{if((65280&l)!=65280)break;a+=s.getUint16(a,!1)}}return e(-1)},r.onerror=i=>n(i),r.readAsArrayBuffer(t)})}function mw(t,e){const{width:n}=t,{height:r}=t,{maxWidthOrHeight:i}=e;let s,o=t;return isFinite(i)&&(n>i||r>i)&&([o,s]=pu(n,r),n>r?(o.width=i,o.height=r/n*i):(o.width=n/r*i,o.height=i),s.drawImage(t,0,0,o.width,o.height),un(t)),o}function gw(t,e){const{width:n}=t,{height:r}=t,[i,s]=pu(n,r);switch(e>4&&e<9?(i.width=r,i.height=n):(i.width=n,i.height=r),e){case 2:s.transform(-1,0,0,1,n,0);break;case 3:s.transform(-1,0,0,-1,n,r);break;case 4:s.transform(1,0,0,-1,0,r);break;case 5:s.transform(0,1,1,0,0,0);break;case 6:s.transform(0,1,-1,0,r,0);break;case 7:s.transform(0,-1,-1,0,r,n);break;case 8:s.transform(0,-1,1,0,0,n)}return s.drawImage(t,0,0,n,r),un(t),i}function Ig(t,e,n=0){return new Promise(function(r,i){let s,o,a,l,u,c,d,h,f,p,y,T,m,g,v,C,P,S,N,_;function w(b=5){if(e.signal&&e.signal.aborted)throw e.signal.reason;s+=b,e.onProgress(Math.min(s,100))}function R(b){if(e.signal&&e.signal.aborted)throw e.signal.reason;s=Math.min(Math.max(b,s),100),e.onProgress(s)}return s=n,o=e.maxIteration||10,a=1024*e.maxSizeMB*1024,w(),Nl(t,e).then((function(b){try{return[,l]=b,w(),u=mw(l,e),w(),new Promise(function(O,L){var x;if(!(x=e.exifOrientation))return pw(t).then((function(I){try{return x=I,M.call(this)}catch(E){return L(E)}}).bind(this),L);function M(){return O(x)}return M.call(this)}).then((function(O){try{return c=O,w(),Pi().then((function(L){try{return d=L?u:gw(u,c),w(),h=e.initialQuality||1,f=e.fileType||t.type,Al(d,f,t.name,t.lastModified,h).then((function(x){try{{let I=function(){if(o--&&(v>a||v>m)){let D,A;return D=_?.95*N.width:N.width,A=_?.95*N.height:N.height,[P,S]=pu(D,A),S.drawImage(N,0,0,D,A),h*=f==="image/png"?.85:.95,Al(P,f,t.name,t.lastModified,h).then(function(U){try{return C=U,un(N),N=P,v=C.size,R(Math.min(99,Math.floor((g-v)/(g-a)*100))),I}catch(W){return i(W)}},i)}return[1]},E=function(){return un(N),un(P),un(u),un(d),un(l),R(100),r(C)};if(p=x,w(),y=p.size>a,T=p.size>t.size,!y&&!T)return R(100),r(p);var M;return m=t.size,g=p.size,v=g,N=d,_=!e.alwaysKeepResolution&&y,(M=(function(D){for(;D;){if(D.then)return void D.then(M,i);try{if(D.pop){if(D.length)return D.pop()?E.call(this):D;D=I}else D=D.call(this)}catch(A){return i(A)}}}).bind(this))(I)}}catch(I){return i(I)}}).bind(this),i)}catch(x){return i(x)}}).bind(this),i)}catch(L){return i(L)}}).bind(this),i)}catch(O){return i(O)}}).bind(this),i)})}const jb=`
let scriptImported = false
self.addEventListener('message', async (e) => {
  const { file, id, imageCompressionLibUrl, options } = e.data
  options.onProgress = (progress) => self.postMessage({ progress, id })
  try {
    if (!scriptImported) {
      // console.log('[worker] importScripts', imageCompressionLibUrl)
      self.importScripts(imageCompressionLibUrl)
      scriptImported = true
    }
    // console.log('[worker] self', self)
    const compressedFile = await imageCompression(file, options)
    self.postMessage({ file: compressedFile, id })
  } catch (e) {
    // console.error('[worker] error', e)
    self.postMessage({ error: e.message + '\\n' + e.stack, id })
  }
})
`;let uc;function zb(t,e){return new Promise((n,r)=>{uc||(uc=function(o){const a=[];return a.push(o),URL.createObjectURL(new Blob(a))}(jb));const i=new Worker(uc);i.addEventListener("message",function(o){if(e.signal&&e.signal.aborted)i.terminate();else if(o.data.progress===void 0){if(o.data.error)return r(new Error(o.data.error)),void i.terminate();n(o.data.file),i.terminate()}else e.onProgress(o.data.progress)}),i.addEventListener("error",r),e.signal&&e.signal.addEventListener("abort",()=>{r(e.signal.reason),i.terminate()}),i.postMessage({file:t,imageCompressionLibUrl:e.libURL,options:{...e,onProgress:void 0,signal:void 0}})})}function st(t,e){return new Promise(function(n,r){let i,s,o,a,l,u;if(i={...e},o=0,{onProgress:a}=i,i.maxSizeMB=i.maxSizeMB||Number.POSITIVE_INFINITY,l=typeof i.useWebWorker!="boolean"||i.useWebWorker,delete i.useWebWorker,i.onProgress=f=>{o=f,typeof a=="function"&&a(o)},!(t instanceof Blob||t instanceof Fb))return r(new Error("The file given is not an instance of Blob or File"));if(!/^image/.test(t.type))return r(new Error("The file given is not an image"));if(u=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,!l||typeof Worker!="function"||u)return Ig(t,i).then((function(f){try{return s=f,h.call(this)}catch(p){return r(p)}}).bind(this),r);var c=(function(){try{return h.call(this)}catch(f){return r(f)}}).bind(this),d=function(f){try{return Ig(t,i).then(function(p){try{return s=p,c()}catch(y){return r(y)}},r)}catch(p){return r(p)}};try{return i.libURL=i.libURL||"https://cdn.jsdelivr.net/npm/browser-image-compression@2.0.2/dist/browser-image-compression.js",zb(t,i).then(function(f){try{return s=f,c()}catch{return d()}},d)}catch{d()}function h(){try{s.name=t.name,s.lastModified=t.lastModified}catch{}try{i.preserveExif&&t.type==="image/jpeg"&&(!i.fileType||i.fileType&&i.fileType===t.type)&&(s=ow(t,s))}catch{}return n(s)}})}st.getDataUrlFromFile=cw,st.getFilefromDataUrl=bf,st.loadImage=dw,st.drawImageInCanvas=fw,st.drawFileInCanvas=Nl,st.canvasToFile=Al,st.getExifOrientation=pw,st.handleMaxWidthOrHeight=mw,st.followExifOrientation=gw,st.cleanupCanvasMemory=un,st.isAutoOrientationInBrowser=Pi,st.approximateBelowMaximumCanvasSizeOfBrowser=hw,st.copyExifWithoutOrientation=ow,st.getBrowserName=zr,st.version="2.0.2";const _w=({onClose:t})=>{const[e,n]=j.useState(""),r=async s=>{if(s.preventDefault(),!e){alert("Por favor, ingrese un título.");return}try{alert("Reglamento guardado con éxito"),t()}catch(o){console.error("Error al guardar el reglamento:",o),alert("Hubo un error al guardar el reglamento.")}},i=s=>{s.target.classList.contains("reglamento-modal__overlay")&&t()};return k.jsx("div",{className:"reglamento-modal__overlay",onClick:i,children:k.jsxs("div",{className:"reglamento-modal__content",children:[k.jsx("h2",{className:"reglamento-modal__title",children:"Cargar Reglamento de Padel"}),k.jsxs("form",{className:"reglamento-modal__form",onSubmit:r,children:[k.jsxs("div",{className:"reglamento-modal__form-group",children:[k.jsx("label",{htmlFor:"title",className:"reglamento-modal__label",children:"Título"}),k.jsx("textarea",{id:"title",value:e,onChange:s=>n(s.target.value),placeholder:"Ingrese el título",className:"reglamento-modal__textarea"})]}),k.jsxs("div",{className:"reglamento-modal__actions",children:[k.jsx("button",{type:"submit",className:"reglamento-modal__button reglamento-modal__button--save",children:"Guardar"}),k.jsx("button",{type:"button",onClick:t,className:"reglamento-modal__button reglamento-modal__button--cancel",children:"Cancelar"})]})]})]})})};_w.propTypes={onClose:ne.func.isRequired};const Bb=j.lazy(()=>zn(()=>import("./CargarBannerButton-Dy-YypyQ.js"),__vite__mapDeps([0,1]))),$b=j.lazy(()=>zn(()=>import("./AgendaTorneoButton-BQKAEI9P.js"),__vite__mapDeps([2,3]))),Hb=j.lazy(()=>zn(()=>import("./AgregarJugadorButton-Brs_-LVL.js"),__vite__mapDeps([4,5]))),Wb=j.lazy(()=>zn(()=>import("./AgregarClubButton-7fJCnKMA.js"),__vite__mapDeps([6,7]))),Vb=j.lazy(()=>zn(()=>import("./BannerModal-BI_F9MgU.js"),__vite__mapDeps([8,9]))),Gb=j.lazy(()=>zn(()=>import("./AgendaTorneoModal-CNTZM2bC.js"),__vite__mapDeps([10,11]))),qb=j.lazy(()=>zn(()=>import("./AgregarJugadorModal-DwDSSnAu.js"),__vite__mapDeps([12,13]))),Kb=j.lazy(()=>zn(()=>import("./AgregarClubModal-LI2K3cZZ.js"),__vite__mapDeps([14,15]))),Qb=j.lazy(()=>zn(()=>import("./PlayerTable-os0HH38q.js"),__vite__mapDeps([16,17]))),Yb=()=>{const t=qv(),[e,n]=j.useState(!1),[r,i]=j.useState(!1),[s,o]=j.useState(!1),[a,l]=j.useState(!1),[u,c]=j.useState(!1);j.useEffect(()=>{const P=q1.onAuthStateChanged(S=>{S||t("/admin-login")});return()=>P()},[t]);const d=()=>n(!0),h=()=>n(!1),f=()=>i(!0),p=()=>i(!1),y=()=>o(!0),T=()=>o(!1),m=()=>l(!0),g=()=>l(!1),v=()=>c(!0),C=()=>c(!1);return k.jsxs("div",{children:[k.jsx("h1",{children:"Admin Panel"}),k.jsxs("div",{className:"admin-panel-buttons",children:[k.jsx(j.Suspense,{fallback:k.jsx("div",{children:"Loading CargaBannerButton..."}),children:k.jsx(Bb,{onClick:d})}),k.jsx(j.Suspense,{fallback:k.jsx("div",{children:"Loading AgendaTorneoButton..."}),children:k.jsx($b,{onClick:f})}),k.jsx(j.Suspense,{fallback:k.jsx("div",{children:"Loading AgregarJugadorButton..."}),children:k.jsx(Hb,{onClick:y})}),k.jsx(j.Suspense,{fallback:k.jsx("div",{children:"Loading AgregarClubButton..."}),children:k.jsx(Wb,{onClick:m})}),k.jsxs(j.Suspense,{fallback:k.jsx("div",{children:"Loading AgregarReglamentoButton..."}),children:[k.jsx(bb,{onClick:v})," "]})]}),k.jsx(j.Suspense,{fallback:k.jsx("div",{children:"Loading BannerModal..."}),children:e&&k.jsx(Vb,{onClose:h})}),k.jsx(j.Suspense,{fallback:k.jsx("div",{children:"Loading AgendaTorneoModal..."}),children:r&&k.jsx(Gb,{onClose:p})}),k.jsx(j.Suspense,{fallback:k.jsx("div",{children:"Loading AgregarJugadorModal..."}),children:s&&k.jsx(qb,{onClose:T})}),k.jsx(j.Suspense,{fallback:k.jsx("div",{children:"Loading AgregarClubModal..."}),children:a&&k.jsx(Kb,{onClose:g})}),k.jsxs(j.Suspense,{fallback:k.jsx("div",{children:"Loading ReglamentoModal..."}),children:[u&&k.jsx(_w,{onClose:C})," "]}),k.jsx(j.Suspense,{fallback:k.jsx("div",{children:"Loading PlayerTable..."}),children:k.jsx(Qb,{})})]})},Jb=()=>k.jsx(ob,{children:k.jsxs(jS,{children:[k.jsx(Yv,{}),k.jsxs(MS,{children:[k.jsx(Sa,{path:"/",element:k.jsx(Nb,{})}),k.jsx(Sa,{path:"/admin-login",element:k.jsx(Ab,{})}),k.jsx(Sa,{path:"/admin",element:k.jsx(Yb,{})})]})]})});Fv(document.getElementById("root")).render(k.jsx(j.StrictMode,{children:k.jsx(Jb,{})}));export{di as A,l4 as F,ne as P,n4 as a,mi as b,Hm as c,gi as d,Py as e,Tg as f,t4 as g,o4 as h,st as i,k as j,s4 as k,a4 as l,u4 as m,i4 as n,c4 as o,Xb as p,Zb as q,j as r,r4 as s,vR as t,e4 as u};
