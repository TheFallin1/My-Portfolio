(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function hc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qa={exports:{}},nl={},Ka={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xn=Symbol.for("react.element"),gc=Symbol.for("react.portal"),vc=Symbol.for("react.fragment"),yc=Symbol.for("react.strict_mode"),xc=Symbol.for("react.profiler"),wc=Symbol.for("react.provider"),kc=Symbol.for("react.context"),Sc=Symbol.for("react.forward_ref"),jc=Symbol.for("react.suspense"),Nc=Symbol.for("react.memo"),Ec=Symbol.for("react.lazy"),bi=Symbol.iterator;function Cc(e){return e===null||typeof e!="object"?null:(e=bi&&e[bi]||e["@@iterator"],typeof e=="function"?e:null)}var Xa={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ga=Object.assign,Ja={};function on(e,t,n){this.props=e,this.context=t,this.refs=Ja,this.updater=n||Xa}on.prototype.isReactComponent={};on.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};on.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Za(){}Za.prototype=on.prototype;function Ho(e,t,n){this.props=e,this.context=t,this.refs=Ja,this.updater=n||Xa}var $o=Ho.prototype=new Za;$o.constructor=Ho;Ga($o,on.prototype);$o.isPureReactComponent=!0;var Ui=Array.isArray,qa=Object.prototype.hasOwnProperty,Bo={current:null},es={key:!0,ref:!0,__self:!0,__source:!0};function ts(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)qa.call(t,r)&&!es.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var s=Array(a),d=0;d<a;d++)s[d]=arguments[d+2];l.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:Xn,type:e,key:o,ref:i,props:l,_owner:Bo.current}}function _c(e,t){return{$$typeof:Xn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Wo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xn}function Pc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ai=/\/+/g;function kl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Pc(""+e.key):t.toString(36)}function wr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Xn:case gc:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+kl(i,0):r,Ui(l)?(n="",e!=null&&(n=e.replace(Ai,"$&/")+"/"),wr(l,t,n,"",function(d){return d})):l!=null&&(Wo(l)&&(l=_c(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Ai,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",Ui(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+kl(o,a);i+=wr(o,t,n,s,l)}else if(s=Cc(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+kl(o,a++),i+=wr(o,t,n,s,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function rr(e,t,n){if(e==null)return e;var r=[],l=0;return wr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function zc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},kr={transition:null},Lc={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:kr,ReactCurrentOwner:Bo};function ns(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:rr,forEach:function(e,t,n){rr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return rr(e,function(){t++}),t},toArray:function(e){return rr(e,function(t){return t})||[]},only:function(e){if(!Wo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=on;L.Fragment=vc;L.Profiler=xc;L.PureComponent=Ho;L.StrictMode=yc;L.Suspense=jc;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lc;L.act=ns;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ga({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Bo.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)qa.call(t,s)&&!es.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var d=0;d<s;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:Xn,type:e.type,key:l,ref:o,props:r,_owner:i}};L.createContext=function(e){return e={$$typeof:kc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:wc,_context:e},e.Consumer=e};L.createElement=ts;L.createFactory=function(e){var t=ts.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Sc,render:e}};L.isValidElement=Wo;L.lazy=function(e){return{$$typeof:Ec,_payload:{_status:-1,_result:e},_init:zc}};L.memo=function(e,t){return{$$typeof:Nc,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=kr.transition;kr.transition={};try{e()}finally{kr.transition=t}};L.unstable_act=ns;L.useCallback=function(e,t){return ue.current.useCallback(e,t)};L.useContext=function(e){return ue.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};L.useEffect=function(e,t){return ue.current.useEffect(e,t)};L.useId=function(){return ue.current.useId()};L.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return ue.current.useMemo(e,t)};L.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};L.useRef=function(e){return ue.current.useRef(e)};L.useState=function(e){return ue.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return ue.current.useTransition()};L.version="18.3.1";Ka.exports=L;var F=Ka.exports;const Tc=hc(F);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ic=F,Dc=Symbol.for("react.element"),Rc=Symbol.for("react.fragment"),Mc=Object.prototype.hasOwnProperty,Fc=Ic.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Oc={key:!0,ref:!0,__self:!0,__source:!0};function rs(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Mc.call(t,r)&&!Oc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Dc,type:e,key:o,ref:i,props:l,_owner:Fc.current}}nl.Fragment=Rc;nl.jsx=rs;nl.jsxs=rs;Qa.exports=nl;var c=Qa.exports,Kl={},ls={exports:{}},we={},os={exports:{}},is={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,P){var z=N.length;N.push(P);e:for(;0<z;){var W=z-1>>>1,G=N[W];if(0<l(G,P))N[W]=P,N[z]=G,z=W;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var P=N[0],z=N.pop();if(z!==P){N[0]=z;e:for(var W=0,G=N.length,tr=G>>>1;W<tr;){var vt=2*(W+1)-1,wl=N[vt],yt=vt+1,nr=N[yt];if(0>l(wl,z))yt<G&&0>l(nr,wl)?(N[W]=nr,N[yt]=z,W=yt):(N[W]=wl,N[vt]=z,W=vt);else if(yt<G&&0>l(nr,z))N[W]=nr,N[yt]=z,W=yt;else break e}}return P}function l(N,P){var z=N.sortIndex-P.sortIndex;return z!==0?z:N.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var s=[],d=[],g=1,h=null,m=3,x=!1,w=!1,k=!1,b=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var P=n(d);P!==null;){if(P.callback===null)r(d);else if(P.startTime<=N)r(d),P.sortIndex=P.expirationTime,t(s,P);else break;P=n(d)}}function v(N){if(k=!1,p(N),!w)if(n(s)!==null)w=!0,yl(j);else{var P=n(d);P!==null&&xl(v,P.startTime-N)}}function j(N,P){w=!1,k&&(k=!1,f(_),_=-1),x=!0;var z=m;try{for(p(P),h=n(s);h!==null&&(!(h.expirationTime>P)||N&&!Pe());){var W=h.callback;if(typeof W=="function"){h.callback=null,m=h.priorityLevel;var G=W(h.expirationTime<=P);P=e.unstable_now(),typeof G=="function"?h.callback=G:h===n(s)&&r(s),p(P)}else r(s);h=n(s)}if(h!==null)var tr=!0;else{var vt=n(d);vt!==null&&xl(v,vt.startTime-P),tr=!1}return tr}finally{h=null,m=z,x=!1}}var E=!1,C=null,_=-1,B=5,T=-1;function Pe(){return!(e.unstable_now()-T<B)}function un(){if(C!==null){var N=e.unstable_now();T=N;var P=!0;try{P=C(!0,N)}finally{P?cn():(E=!1,C=null)}}else E=!1}var cn;if(typeof u=="function")cn=function(){u(un)};else if(typeof MessageChannel<"u"){var Oi=new MessageChannel,mc=Oi.port2;Oi.port1.onmessage=un,cn=function(){mc.postMessage(null)}}else cn=function(){b(un,0)};function yl(N){C=N,E||(E=!0,cn())}function xl(N,P){_=b(function(){N(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,yl(j))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(N){switch(m){case 1:case 2:case 3:var P=3;break;default:P=m}var z=m;m=P;try{return N()}finally{m=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,P){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var z=m;m=N;try{return P()}finally{m=z}},e.unstable_scheduleCallback=function(N,P,z){var W=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?W+z:W):z=W,N){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=z+G,N={id:g++,callback:P,priorityLevel:N,startTime:z,expirationTime:G,sortIndex:-1},z>W?(N.sortIndex=z,t(d,N),n(s)===null&&N===n(d)&&(k?(f(_),_=-1):k=!0,xl(v,z-W))):(N.sortIndex=G,t(s,N),w||x||(w=!0,yl(j))),N},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(N){var P=m;return function(){var z=m;m=P;try{return N.apply(this,arguments)}finally{m=z}}}})(is);os.exports=is;var bc=os.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uc=F,xe=bc;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var as=new Set,In={};function Tt(e,t){Zt(e,t),Zt(e+"Capture",t)}function Zt(e,t){for(In[e]=t,e=0;e<t.length;e++)as.add(t[e])}var Ye=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xl=Object.prototype.hasOwnProperty,Ac=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vi={},Hi={};function Vc(e){return Xl.call(Hi,e)?!0:Xl.call(Vi,e)?!1:Ac.test(e)?Hi[e]=!0:(Vi[e]=!0,!1)}function Hc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $c(e,t,n,r){if(t===null||typeof t>"u"||Hc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Yo=/[\-:]([a-z])/g;function Qo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Yo,Qo);ne[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Yo,Qo);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Yo,Qo);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ko(e,t,n,r){var l=ne.hasOwnProperty(t)?ne[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($c(t,n,l,r)&&(n=null),r||l===null?Vc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ge=Uc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lr=Symbol.for("react.element"),Rt=Symbol.for("react.portal"),Mt=Symbol.for("react.fragment"),Xo=Symbol.for("react.strict_mode"),Gl=Symbol.for("react.profiler"),ss=Symbol.for("react.provider"),us=Symbol.for("react.context"),Go=Symbol.for("react.forward_ref"),Jl=Symbol.for("react.suspense"),Zl=Symbol.for("react.suspense_list"),Jo=Symbol.for("react.memo"),Ze=Symbol.for("react.lazy"),cs=Symbol.for("react.offscreen"),$i=Symbol.iterator;function dn(e){return e===null||typeof e!="object"?null:(e=$i&&e[$i]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Sl;function xn(e){if(Sl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Sl=t&&t[1]||""}return`
`+Sl+e}var jl=!1;function Nl(e,t){if(!e||jl)return"";jl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,a=o.length-1;1<=i&&0<=a&&l[i]!==o[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==o[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==o[a]){var s=`
`+l[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{jl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xn(e):""}function Bc(e){switch(e.tag){case 5:return xn(e.type);case 16:return xn("Lazy");case 13:return xn("Suspense");case 19:return xn("SuspenseList");case 0:case 2:case 15:return e=Nl(e.type,!1),e;case 11:return e=Nl(e.type.render,!1),e;case 1:return e=Nl(e.type,!0),e;default:return""}}function ql(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mt:return"Fragment";case Rt:return"Portal";case Gl:return"Profiler";case Xo:return"StrictMode";case Jl:return"Suspense";case Zl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case us:return(e.displayName||"Context")+".Consumer";case ss:return(e._context.displayName||"Context")+".Provider";case Go:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Jo:return t=e.displayName||null,t!==null?t:ql(e.type)||"Memo";case Ze:t=e._payload,e=e._init;try{return ql(e(t))}catch{}}return null}function Wc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ql(t);case 8:return t===Xo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ds(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Yc(e){var t=ds(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function or(e){e._valueTracker||(e._valueTracker=Yc(e))}function fs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ds(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ir(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function eo(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Bi(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ps(e,t){t=t.checked,t!=null&&Ko(e,"checked",t,!1)}function to(e,t){ps(e,t);var n=ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?no(e,t.type,n):t.hasOwnProperty("defaultValue")&&no(e,t.type,ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Wi(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function no(e,t,n){(t!=="number"||Ir(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wn=Array.isArray;function Yt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ft(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ro(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yi(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(wn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ft(n)}}function ms(e,t){var n=ft(t.value),r=ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Qi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function hs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?hs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ir,gs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ir=ir||document.createElement("div"),ir.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ir.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qc=["Webkit","ms","Moz","O"];Object.keys(jn).forEach(function(e){Qc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),jn[t]=jn[e]})});function vs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||jn.hasOwnProperty(e)&&jn[e]?(""+t).trim():t+"px"}function ys(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=vs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Kc=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oo(e,t){if(t){if(Kc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function io(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ao=null;function Zo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var so=null,Qt=null,Kt=null;function Ki(e){if(e=Zn(e)){if(typeof so!="function")throw Error(y(280));var t=e.stateNode;t&&(t=al(t),so(e.stateNode,e.type,t))}}function xs(e){Qt?Kt?Kt.push(e):Kt=[e]:Qt=e}function ws(){if(Qt){var e=Qt,t=Kt;if(Kt=Qt=null,Ki(e),t)for(e=0;e<t.length;e++)Ki(t[e])}}function ks(e,t){return e(t)}function Ss(){}var El=!1;function js(e,t,n){if(El)return e(t,n);El=!0;try{return ks(e,t,n)}finally{El=!1,(Qt!==null||Kt!==null)&&(Ss(),ws())}}function Rn(e,t){var n=e.stateNode;if(n===null)return null;var r=al(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var uo=!1;if(Ye)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){uo=!0}}),window.addEventListener("test",fn,fn),window.removeEventListener("test",fn,fn)}catch{uo=!1}function Xc(e,t,n,r,l,o,i,a,s){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(g){this.onError(g)}}var Nn=!1,Dr=null,Rr=!1,co=null,Gc={onError:function(e){Nn=!0,Dr=e}};function Jc(e,t,n,r,l,o,i,a,s){Nn=!1,Dr=null,Xc.apply(Gc,arguments)}function Zc(e,t,n,r,l,o,i,a,s){if(Jc.apply(this,arguments),Nn){if(Nn){var d=Dr;Nn=!1,Dr=null}else throw Error(y(198));Rr||(Rr=!0,co=d)}}function It(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ns(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xi(e){if(It(e)!==e)throw Error(y(188))}function qc(e){var t=e.alternate;if(!t){if(t=It(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Xi(l),e;if(o===r)return Xi(l),t;o=o.sibling}throw Error(y(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i){for(a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function Es(e){return e=qc(e),e!==null?Cs(e):null}function Cs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Cs(e);if(t!==null)return t;e=e.sibling}return null}var _s=xe.unstable_scheduleCallback,Gi=xe.unstable_cancelCallback,ed=xe.unstable_shouldYield,td=xe.unstable_requestPaint,Y=xe.unstable_now,nd=xe.unstable_getCurrentPriorityLevel,qo=xe.unstable_ImmediatePriority,Ps=xe.unstable_UserBlockingPriority,Mr=xe.unstable_NormalPriority,rd=xe.unstable_LowPriority,zs=xe.unstable_IdlePriority,rl=null,Ue=null;function ld(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(rl,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:ad,od=Math.log,id=Math.LN2;function ad(e){return e>>>=0,e===0?32:31-(od(e)/id|0)|0}var ar=64,sr=4194304;function kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~l;a!==0?r=kn(a):(o&=i,o!==0&&(r=kn(o)))}else i=n&~l,i!==0?r=kn(i):o!==0&&(r=kn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-De(t),l=1<<n,r|=e[n],t&=~l;return r}function sd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ud(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-De(o),a=1<<i,s=l[i];s===-1?(!(a&n)||a&r)&&(l[i]=sd(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function fo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ls(){var e=ar;return ar<<=1,!(ar&4194240)&&(ar=64),e}function Cl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-De(t),e[t]=n}function cd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-De(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function ei(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-De(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var D=0;function Ts(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Is,ti,Ds,Rs,Ms,po=!1,ur=[],lt=null,ot=null,it=null,Mn=new Map,Fn=new Map,et=[],dd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ji(e,t){switch(e){case"focusin":case"focusout":lt=null;break;case"dragenter":case"dragleave":ot=null;break;case"mouseover":case"mouseout":it=null;break;case"pointerover":case"pointerout":Mn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fn.delete(t.pointerId)}}function pn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=Zn(t),t!==null&&ti(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function fd(e,t,n,r,l){switch(t){case"focusin":return lt=pn(lt,e,t,n,r,l),!0;case"dragenter":return ot=pn(ot,e,t,n,r,l),!0;case"mouseover":return it=pn(it,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Mn.set(o,pn(Mn.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Fn.set(o,pn(Fn.get(o)||null,e,t,n,r,l)),!0}return!1}function Fs(e){var t=kt(e.target);if(t!==null){var n=It(t);if(n!==null){if(t=n.tag,t===13){if(t=Ns(n),t!==null){e.blockedOn=t,Ms(e.priority,function(){Ds(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=mo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ao=r,n.target.dispatchEvent(r),ao=null}else return t=Zn(n),t!==null&&ti(t),e.blockedOn=n,!1;t.shift()}return!0}function Zi(e,t,n){Sr(e)&&n.delete(t)}function pd(){po=!1,lt!==null&&Sr(lt)&&(lt=null),ot!==null&&Sr(ot)&&(ot=null),it!==null&&Sr(it)&&(it=null),Mn.forEach(Zi),Fn.forEach(Zi)}function mn(e,t){e.blockedOn===t&&(e.blockedOn=null,po||(po=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,pd)))}function On(e){function t(l){return mn(l,e)}if(0<ur.length){mn(ur[0],e);for(var n=1;n<ur.length;n++){var r=ur[n];r.blockedOn===e&&(r.blockedOn=null)}}for(lt!==null&&mn(lt,e),ot!==null&&mn(ot,e),it!==null&&mn(it,e),Mn.forEach(t),Fn.forEach(t),n=0;n<et.length;n++)r=et[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<et.length&&(n=et[0],n.blockedOn===null);)Fs(n),n.blockedOn===null&&et.shift()}var Xt=Ge.ReactCurrentBatchConfig,Or=!0;function md(e,t,n,r){var l=D,o=Xt.transition;Xt.transition=null;try{D=1,ni(e,t,n,r)}finally{D=l,Xt.transition=o}}function hd(e,t,n,r){var l=D,o=Xt.transition;Xt.transition=null;try{D=4,ni(e,t,n,r)}finally{D=l,Xt.transition=o}}function ni(e,t,n,r){if(Or){var l=mo(e,t,n,r);if(l===null)Fl(e,t,r,br,n),Ji(e,r);else if(fd(l,e,t,n,r))r.stopPropagation();else if(Ji(e,r),t&4&&-1<dd.indexOf(e)){for(;l!==null;){var o=Zn(l);if(o!==null&&Is(o),o=mo(e,t,n,r),o===null&&Fl(e,t,r,br,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Fl(e,t,r,null,n)}}var br=null;function mo(e,t,n,r){if(br=null,e=Zo(r),e=kt(e),e!==null)if(t=It(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ns(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return br=e,null}function Os(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nd()){case qo:return 1;case Ps:return 4;case Mr:case rd:return 16;case zs:return 536870912;default:return 16}default:return 16}}var nt=null,ri=null,jr=null;function bs(){if(jr)return jr;var e,t=ri,n=t.length,r,l="value"in nt?nt.value:nt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return jr=l.slice(e,1<r?1-r:void 0)}function Nr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function cr(){return!0}function qi(){return!1}function ke(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?cr:qi,this.isPropagationStopped=qi,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cr)},persist:function(){},isPersistent:cr}),t}var an={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},li=ke(an),Jn=H({},an,{view:0,detail:0}),gd=ke(Jn),_l,Pl,hn,ll=H({},Jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hn&&(hn&&e.type==="mousemove"?(_l=e.screenX-hn.screenX,Pl=e.screenY-hn.screenY):Pl=_l=0,hn=e),_l)},movementY:function(e){return"movementY"in e?e.movementY:Pl}}),ea=ke(ll),vd=H({},ll,{dataTransfer:0}),yd=ke(vd),xd=H({},Jn,{relatedTarget:0}),zl=ke(xd),wd=H({},an,{animationName:0,elapsedTime:0,pseudoElement:0}),kd=ke(wd),Sd=H({},an,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jd=ke(Sd),Nd=H({},an,{data:0}),ta=ke(Nd),Ed={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_d={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_d[e])?!!t[e]:!1}function oi(){return Pd}var zd=H({},Jn,{key:function(e){if(e.key){var t=Ed[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Nr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oi,charCode:function(e){return e.type==="keypress"?Nr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Nr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ld=ke(zd),Td=H({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),na=ke(Td),Id=H({},Jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oi}),Dd=ke(Id),Rd=H({},an,{propertyName:0,elapsedTime:0,pseudoElement:0}),Md=ke(Rd),Fd=H({},ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Od=ke(Fd),bd=[9,13,27,32],ii=Ye&&"CompositionEvent"in window,En=null;Ye&&"documentMode"in document&&(En=document.documentMode);var Ud=Ye&&"TextEvent"in window&&!En,Us=Ye&&(!ii||En&&8<En&&11>=En),ra=" ",la=!1;function As(e,t){switch(e){case"keyup":return bd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ft=!1;function Ad(e,t){switch(e){case"compositionend":return Vs(t);case"keypress":return t.which!==32?null:(la=!0,ra);case"textInput":return e=t.data,e===ra&&la?null:e;default:return null}}function Vd(e,t){if(Ft)return e==="compositionend"||!ii&&As(e,t)?(e=bs(),jr=ri=nt=null,Ft=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Us&&t.locale!=="ko"?null:t.data;default:return null}}var Hd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function oa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Hd[e.type]:t==="textarea"}function Hs(e,t,n,r){xs(r),t=Ur(t,"onChange"),0<t.length&&(n=new li("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Cn=null,bn=null;function $d(e){qs(e,0)}function ol(e){var t=Ut(e);if(fs(t))return e}function Bd(e,t){if(e==="change")return t}var $s=!1;if(Ye){var Ll;if(Ye){var Tl="oninput"in document;if(!Tl){var ia=document.createElement("div");ia.setAttribute("oninput","return;"),Tl=typeof ia.oninput=="function"}Ll=Tl}else Ll=!1;$s=Ll&&(!document.documentMode||9<document.documentMode)}function aa(){Cn&&(Cn.detachEvent("onpropertychange",Bs),bn=Cn=null)}function Bs(e){if(e.propertyName==="value"&&ol(bn)){var t=[];Hs(t,bn,e,Zo(e)),js($d,t)}}function Wd(e,t,n){e==="focusin"?(aa(),Cn=t,bn=n,Cn.attachEvent("onpropertychange",Bs)):e==="focusout"&&aa()}function Yd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ol(bn)}function Qd(e,t){if(e==="click")return ol(t)}function Kd(e,t){if(e==="input"||e==="change")return ol(t)}function Xd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Me=typeof Object.is=="function"?Object.is:Xd;function Un(e,t){if(Me(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Xl.call(t,l)||!Me(e[l],t[l]))return!1}return!0}function sa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ua(e,t){var n=sa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sa(n)}}function Ws(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ws(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ys(){for(var e=window,t=Ir();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ir(e.document)}return t}function ai(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Gd(e){var t=Ys(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ws(n.ownerDocument.documentElement,n)){if(r!==null&&ai(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=ua(n,o);var i=ua(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jd=Ye&&"documentMode"in document&&11>=document.documentMode,Ot=null,ho=null,_n=null,go=!1;function ca(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;go||Ot==null||Ot!==Ir(r)||(r=Ot,"selectionStart"in r&&ai(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_n&&Un(_n,r)||(_n=r,r=Ur(ho,"onSelect"),0<r.length&&(t=new li("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ot)))}function dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var bt={animationend:dr("Animation","AnimationEnd"),animationiteration:dr("Animation","AnimationIteration"),animationstart:dr("Animation","AnimationStart"),transitionend:dr("Transition","TransitionEnd")},Il={},Qs={};Ye&&(Qs=document.createElement("div").style,"AnimationEvent"in window||(delete bt.animationend.animation,delete bt.animationiteration.animation,delete bt.animationstart.animation),"TransitionEvent"in window||delete bt.transitionend.transition);function il(e){if(Il[e])return Il[e];if(!bt[e])return e;var t=bt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qs)return Il[e]=t[n];return e}var Ks=il("animationend"),Xs=il("animationiteration"),Gs=il("animationstart"),Js=il("transitionend"),Zs=new Map,da="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mt(e,t){Zs.set(e,t),Tt(t,[e])}for(var Dl=0;Dl<da.length;Dl++){var Rl=da[Dl],Zd=Rl.toLowerCase(),qd=Rl[0].toUpperCase()+Rl.slice(1);mt(Zd,"on"+qd)}mt(Ks,"onAnimationEnd");mt(Xs,"onAnimationIteration");mt(Gs,"onAnimationStart");mt("dblclick","onDoubleClick");mt("focusin","onFocus");mt("focusout","onBlur");mt(Js,"onTransitionEnd");Zt("onMouseEnter",["mouseout","mouseover"]);Zt("onMouseLeave",["mouseout","mouseover"]);Zt("onPointerEnter",["pointerout","pointerover"]);Zt("onPointerLeave",["pointerout","pointerover"]);Tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ef=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));function fa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Zc(r,t,void 0,e),e.currentTarget=null}function qs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,d=a.currentTarget;if(a=a.listener,s!==o&&l.isPropagationStopped())break e;fa(l,a,d),o=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,d=a.currentTarget,a=a.listener,s!==o&&l.isPropagationStopped())break e;fa(l,a,d),o=s}}}if(Rr)throw e=co,Rr=!1,co=null,e}function M(e,t){var n=t[ko];n===void 0&&(n=t[ko]=new Set);var r=e+"__bubble";n.has(r)||(eu(t,e,2,!1),n.add(r))}function Ml(e,t,n){var r=0;t&&(r|=4),eu(n,e,r,t)}var fr="_reactListening"+Math.random().toString(36).slice(2);function An(e){if(!e[fr]){e[fr]=!0,as.forEach(function(n){n!=="selectionchange"&&(ef.has(n)||Ml(n,!1,e),Ml(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fr]||(t[fr]=!0,Ml("selectionchange",!1,t))}}function eu(e,t,n,r){switch(Os(t)){case 1:var l=md;break;case 4:l=hd;break;default:l=ni}n=l.bind(null,t,n,e),l=void 0,!uo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Fl(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;i=i.return}for(;a!==null;){if(i=kt(a),i===null)return;if(s=i.tag,s===5||s===6){r=o=i;continue e}a=a.parentNode}}r=r.return}js(function(){var d=o,g=Zo(n),h=[];e:{var m=Zs.get(e);if(m!==void 0){var x=li,w=e;switch(e){case"keypress":if(Nr(n)===0)break e;case"keydown":case"keyup":x=Ld;break;case"focusin":w="focus",x=zl;break;case"focusout":w="blur",x=zl;break;case"beforeblur":case"afterblur":x=zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=ea;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=yd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Dd;break;case Ks:case Xs:case Gs:x=kd;break;case Js:x=Md;break;case"scroll":x=gd;break;case"wheel":x=Od;break;case"copy":case"cut":case"paste":x=jd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=na}var k=(t&4)!==0,b=!k&&e==="scroll",f=k?m!==null?m+"Capture":null:m;k=[];for(var u=d,p;u!==null;){p=u;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=Rn(u,f),v!=null&&k.push(Vn(u,v,p)))),b)break;u=u.return}0<k.length&&(m=new x(m,w,null,n,g),h.push({event:m,listeners:k}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==ao&&(w=n.relatedTarget||n.fromElement)&&(kt(w)||w[Qe]))break e;if((x||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,x?(w=n.relatedTarget||n.toElement,x=d,w=w?kt(w):null,w!==null&&(b=It(w),w!==b||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=d),x!==w)){if(k=ea,v="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(k=na,v="onPointerLeave",f="onPointerEnter",u="pointer"),b=x==null?m:Ut(x),p=w==null?m:Ut(w),m=new k(v,u+"leave",x,n,g),m.target=b,m.relatedTarget=p,v=null,kt(g)===d&&(k=new k(f,u+"enter",w,n,g),k.target=p,k.relatedTarget=b,v=k),b=v,x&&w)t:{for(k=x,f=w,u=0,p=k;p;p=Dt(p))u++;for(p=0,v=f;v;v=Dt(v))p++;for(;0<u-p;)k=Dt(k),u--;for(;0<p-u;)f=Dt(f),p--;for(;u--;){if(k===f||f!==null&&k===f.alternate)break t;k=Dt(k),f=Dt(f)}k=null}else k=null;x!==null&&pa(h,m,x,k,!1),w!==null&&b!==null&&pa(h,b,w,k,!0)}}e:{if(m=d?Ut(d):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var j=Bd;else if(oa(m))if($s)j=Kd;else{j=Yd;var E=Wd}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=Qd);if(j&&(j=j(e,d))){Hs(h,j,n,g);break e}E&&E(e,m,d),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&no(m,"number",m.value)}switch(E=d?Ut(d):window,e){case"focusin":(oa(E)||E.contentEditable==="true")&&(Ot=E,ho=d,_n=null);break;case"focusout":_n=ho=Ot=null;break;case"mousedown":go=!0;break;case"contextmenu":case"mouseup":case"dragend":go=!1,ca(h,n,g);break;case"selectionchange":if(Jd)break;case"keydown":case"keyup":ca(h,n,g)}var C;if(ii)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ft?As(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Us&&n.locale!=="ko"&&(Ft||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ft&&(C=bs()):(nt=g,ri="value"in nt?nt.value:nt.textContent,Ft=!0)),E=Ur(d,_),0<E.length&&(_=new ta(_,e,null,n,g),h.push({event:_,listeners:E}),C?_.data=C:(C=Vs(n),C!==null&&(_.data=C)))),(C=Ud?Ad(e,n):Vd(e,n))&&(d=Ur(d,"onBeforeInput"),0<d.length&&(g=new ta("onBeforeInput","beforeinput",null,n,g),h.push({event:g,listeners:d}),g.data=C))}qs(h,t)})}function Vn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ur(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Rn(e,n),o!=null&&r.unshift(Vn(e,o,l)),o=Rn(e,t),o!=null&&r.push(Vn(e,o,l))),e=e.return}return r}function Dt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function pa(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var a=n,s=a.alternate,d=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&d!==null&&(a=d,l?(s=Rn(n,o),s!=null&&i.unshift(Vn(n,s,a))):l||(s=Rn(n,o),s!=null&&i.push(Vn(n,s,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var tf=/\r\n?/g,nf=/\u0000|\uFFFD/g;function ma(e){return(typeof e=="string"?e:""+e).replace(tf,`
`).replace(nf,"")}function pr(e,t,n){if(t=ma(t),ma(e)!==t&&n)throw Error(y(425))}function Ar(){}var vo=null,yo=null;function xo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wo=typeof setTimeout=="function"?setTimeout:void 0,rf=typeof clearTimeout=="function"?clearTimeout:void 0,ha=typeof Promise=="function"?Promise:void 0,lf=typeof queueMicrotask=="function"?queueMicrotask:typeof ha<"u"?function(e){return ha.resolve(null).then(e).catch(of)}:wo;function of(e){setTimeout(function(){throw e})}function Ol(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),On(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);On(t)}function at(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ga(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var sn=Math.random().toString(36).slice(2),be="__reactFiber$"+sn,Hn="__reactProps$"+sn,Qe="__reactContainer$"+sn,ko="__reactEvents$"+sn,af="__reactListeners$"+sn,sf="__reactHandles$"+sn;function kt(e){var t=e[be];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qe]||n[be]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ga(e);e!==null;){if(n=e[be])return n;e=ga(e)}return t}e=n,n=e.parentNode}return null}function Zn(e){return e=e[be]||e[Qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ut(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function al(e){return e[Hn]||null}var So=[],At=-1;function ht(e){return{current:e}}function O(e){0>At||(e.current=So[At],So[At]=null,At--)}function R(e,t){At++,So[At]=e.current,e.current=t}var pt={},ie=ht(pt),pe=ht(!1),Ct=pt;function qt(e,t){var n=e.type.contextTypes;if(!n)return pt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function me(e){return e=e.childContextTypes,e!=null}function Vr(){O(pe),O(ie)}function va(e,t,n){if(ie.current!==pt)throw Error(y(168));R(ie,t),R(pe,n)}function tu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(y(108,Wc(e)||"Unknown",l));return H({},n,r)}function Hr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pt,Ct=ie.current,R(ie,e),R(pe,pe.current),!0}function ya(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=tu(e,t,Ct),r.__reactInternalMemoizedMergedChildContext=e,O(pe),O(ie),R(ie,e)):O(pe),R(pe,n)}var He=null,sl=!1,bl=!1;function nu(e){He===null?He=[e]:He.push(e)}function uf(e){sl=!0,nu(e)}function gt(){if(!bl&&He!==null){bl=!0;var e=0,t=D;try{var n=He;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}He=null,sl=!1}catch(l){throw He!==null&&(He=He.slice(e+1)),_s(qo,gt),l}finally{D=t,bl=!1}}return null}var Vt=[],Ht=0,$r=null,Br=0,Se=[],je=0,_t=null,$e=1,Be="";function xt(e,t){Vt[Ht++]=Br,Vt[Ht++]=$r,$r=e,Br=t}function ru(e,t,n){Se[je++]=$e,Se[je++]=Be,Se[je++]=_t,_t=e;var r=$e;e=Be;var l=32-De(r)-1;r&=~(1<<l),n+=1;var o=32-De(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,$e=1<<32-De(t)+l|n<<l|r,Be=o+e}else $e=1<<o|n<<l|r,Be=e}function si(e){e.return!==null&&(xt(e,1),ru(e,1,0))}function ui(e){for(;e===$r;)$r=Vt[--Ht],Vt[Ht]=null,Br=Vt[--Ht],Vt[Ht]=null;for(;e===_t;)_t=Se[--je],Se[je]=null,Be=Se[--je],Se[je]=null,$e=Se[--je],Se[je]=null}var ye=null,ve=null,U=!1,Ie=null;function lu(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function xa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ye=e,ve=at(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ye=e,ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=_t!==null?{id:$e,overflow:Be}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ye=e,ve=null,!0):!1;default:return!1}}function jo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function No(e){if(U){var t=ve;if(t){var n=t;if(!xa(e,t)){if(jo(e))throw Error(y(418));t=at(n.nextSibling);var r=ye;t&&xa(e,t)?lu(r,n):(e.flags=e.flags&-4097|2,U=!1,ye=e)}}else{if(jo(e))throw Error(y(418));e.flags=e.flags&-4097|2,U=!1,ye=e}}}function wa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function mr(e){if(e!==ye)return!1;if(!U)return wa(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!xo(e.type,e.memoizedProps)),t&&(t=ve)){if(jo(e))throw ou(),Error(y(418));for(;t;)lu(e,t),t=at(t.nextSibling)}if(wa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ve=at(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ve=null}}else ve=ye?at(e.stateNode.nextSibling):null;return!0}function ou(){for(var e=ve;e;)e=at(e.nextSibling)}function en(){ve=ye=null,U=!1}function ci(e){Ie===null?Ie=[e]:Ie.push(e)}var cf=Ge.ReactCurrentBatchConfig;function gn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var a=l.refs;i===null?delete a[o]:a[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function hr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ka(e){var t=e._init;return t(e._payload)}function iu(e){function t(f,u){if(e){var p=f.deletions;p===null?(f.deletions=[u],f.flags|=16):p.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function l(f,u){return f=dt(f,u),f.index=0,f.sibling=null,f}function o(f,u,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<u?(f.flags|=2,u):p):(f.flags|=2,u)):(f.flags|=1048576,u)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,u,p,v){return u===null||u.tag!==6?(u=Wl(p,f.mode,v),u.return=f,u):(u=l(u,p),u.return=f,u)}function s(f,u,p,v){var j=p.type;return j===Mt?g(f,u,p.props.children,v,p.key):u!==null&&(u.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Ze&&ka(j)===u.type)?(v=l(u,p.props),v.ref=gn(f,u,p),v.return=f,v):(v=Tr(p.type,p.key,p.props,null,f.mode,v),v.ref=gn(f,u,p),v.return=f,v)}function d(f,u,p,v){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=Yl(p,f.mode,v),u.return=f,u):(u=l(u,p.children||[]),u.return=f,u)}function g(f,u,p,v,j){return u===null||u.tag!==7?(u=Et(p,f.mode,v,j),u.return=f,u):(u=l(u,p),u.return=f,u)}function h(f,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Wl(""+u,f.mode,p),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case lr:return p=Tr(u.type,u.key,u.props,null,f.mode,p),p.ref=gn(f,null,u),p.return=f,p;case Rt:return u=Yl(u,f.mode,p),u.return=f,u;case Ze:var v=u._init;return h(f,v(u._payload),p)}if(wn(u)||dn(u))return u=Et(u,f.mode,p,null),u.return=f,u;hr(f,u)}return null}function m(f,u,p,v){var j=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return j!==null?null:a(f,u,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case lr:return p.key===j?s(f,u,p,v):null;case Rt:return p.key===j?d(f,u,p,v):null;case Ze:return j=p._init,m(f,u,j(p._payload),v)}if(wn(p)||dn(p))return j!==null?null:g(f,u,p,v,null);hr(f,p)}return null}function x(f,u,p,v,j){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,a(u,f,""+v,j);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case lr:return f=f.get(v.key===null?p:v.key)||null,s(u,f,v,j);case Rt:return f=f.get(v.key===null?p:v.key)||null,d(u,f,v,j);case Ze:var E=v._init;return x(f,u,p,E(v._payload),j)}if(wn(v)||dn(v))return f=f.get(p)||null,g(u,f,v,j,null);hr(u,v)}return null}function w(f,u,p,v){for(var j=null,E=null,C=u,_=u=0,B=null;C!==null&&_<p.length;_++){C.index>_?(B=C,C=null):B=C.sibling;var T=m(f,C,p[_],v);if(T===null){C===null&&(C=B);break}e&&C&&T.alternate===null&&t(f,C),u=o(T,u,_),E===null?j=T:E.sibling=T,E=T,C=B}if(_===p.length)return n(f,C),U&&xt(f,_),j;if(C===null){for(;_<p.length;_++)C=h(f,p[_],v),C!==null&&(u=o(C,u,_),E===null?j=C:E.sibling=C,E=C);return U&&xt(f,_),j}for(C=r(f,C);_<p.length;_++)B=x(C,f,_,p[_],v),B!==null&&(e&&B.alternate!==null&&C.delete(B.key===null?_:B.key),u=o(B,u,_),E===null?j=B:E.sibling=B,E=B);return e&&C.forEach(function(Pe){return t(f,Pe)}),U&&xt(f,_),j}function k(f,u,p,v){var j=dn(p);if(typeof j!="function")throw Error(y(150));if(p=j.call(p),p==null)throw Error(y(151));for(var E=j=null,C=u,_=u=0,B=null,T=p.next();C!==null&&!T.done;_++,T=p.next()){C.index>_?(B=C,C=null):B=C.sibling;var Pe=m(f,C,T.value,v);if(Pe===null){C===null&&(C=B);break}e&&C&&Pe.alternate===null&&t(f,C),u=o(Pe,u,_),E===null?j=Pe:E.sibling=Pe,E=Pe,C=B}if(T.done)return n(f,C),U&&xt(f,_),j;if(C===null){for(;!T.done;_++,T=p.next())T=h(f,T.value,v),T!==null&&(u=o(T,u,_),E===null?j=T:E.sibling=T,E=T);return U&&xt(f,_),j}for(C=r(f,C);!T.done;_++,T=p.next())T=x(C,f,_,T.value,v),T!==null&&(e&&T.alternate!==null&&C.delete(T.key===null?_:T.key),u=o(T,u,_),E===null?j=T:E.sibling=T,E=T);return e&&C.forEach(function(un){return t(f,un)}),U&&xt(f,_),j}function b(f,u,p,v){if(typeof p=="object"&&p!==null&&p.type===Mt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case lr:e:{for(var j=p.key,E=u;E!==null;){if(E.key===j){if(j=p.type,j===Mt){if(E.tag===7){n(f,E.sibling),u=l(E,p.props.children),u.return=f,f=u;break e}}else if(E.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Ze&&ka(j)===E.type){n(f,E.sibling),u=l(E,p.props),u.ref=gn(f,E,p),u.return=f,f=u;break e}n(f,E);break}else t(f,E);E=E.sibling}p.type===Mt?(u=Et(p.props.children,f.mode,v,p.key),u.return=f,f=u):(v=Tr(p.type,p.key,p.props,null,f.mode,v),v.ref=gn(f,u,p),v.return=f,f=v)}return i(f);case Rt:e:{for(E=p.key;u!==null;){if(u.key===E)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(f,u.sibling),u=l(u,p.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=Yl(p,f.mode,v),u.return=f,f=u}return i(f);case Ze:return E=p._init,b(f,u,E(p._payload),v)}if(wn(p))return w(f,u,p,v);if(dn(p))return k(f,u,p,v);hr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(f,u.sibling),u=l(u,p),u.return=f,f=u):(n(f,u),u=Wl(p,f.mode,v),u.return=f,f=u),i(f)):n(f,u)}return b}var tn=iu(!0),au=iu(!1),Wr=ht(null),Yr=null,$t=null,di=null;function fi(){di=$t=Yr=null}function pi(e){var t=Wr.current;O(Wr),e._currentValue=t}function Eo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Gt(e,t){Yr=e,di=$t=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(fe=!0),e.firstContext=null)}function Ce(e){var t=e._currentValue;if(di!==e)if(e={context:e,memoizedValue:t,next:null},$t===null){if(Yr===null)throw Error(y(308));$t=e,Yr.dependencies={lanes:0,firstContext:e}}else $t=$t.next=e;return t}var St=null;function mi(e){St===null?St=[e]:St.push(e)}function su(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,mi(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ke(e,r)}function Ke(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qe=!1;function hi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function We(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function st(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ke(e,n)}return l=r.interleaved,l===null?(t.next=t,mi(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ke(e,n)}function Er(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ei(e,n)}}function Sa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qr(e,t,n,r){var l=e.updateQueue;qe=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var s=a,d=s.next;s.next=null,i===null?o=d:i.next=d,i=s;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==i&&(a===null?g.firstBaseUpdate=d:a.next=d,g.lastBaseUpdate=s))}if(o!==null){var h=l.baseState;i=0,g=d=s=null,a=o;do{var m=a.lane,x=a.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,k=a;switch(m=t,x=n,k.tag){case 1:if(w=k.payload,typeof w=="function"){h=w.call(x,h,m);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,m=typeof w=="function"?w.call(x,h,m):w,m==null)break e;h=H({},h,m);break e;case 2:qe=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[a]:m.push(a))}else x={eventTime:x,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(d=g=x,s=h):g=g.next=x,i|=m;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;m=a,a=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(g===null&&(s=h),l.baseState=s,l.firstBaseUpdate=d,l.lastBaseUpdate=g,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);zt|=i,e.lanes=i,e.memoizedState=h}}function ja(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(y(191,l));l.call(r)}}}var qn={},Ae=ht(qn),$n=ht(qn),Bn=ht(qn);function jt(e){if(e===qn)throw Error(y(174));return e}function gi(e,t){switch(R(Bn,t),R($n,e),R(Ae,qn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:lo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=lo(t,e)}O(Ae),R(Ae,t)}function nn(){O(Ae),O($n),O(Bn)}function cu(e){jt(Bn.current);var t=jt(Ae.current),n=lo(t,e.type);t!==n&&(R($n,e),R(Ae,n))}function vi(e){$n.current===e&&(O(Ae),O($n))}var A=ht(0);function Kr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ul=[];function yi(){for(var e=0;e<Ul.length;e++)Ul[e]._workInProgressVersionPrimary=null;Ul.length=0}var Cr=Ge.ReactCurrentDispatcher,Al=Ge.ReactCurrentBatchConfig,Pt=0,V=null,K=null,J=null,Xr=!1,Pn=!1,Wn=0,df=0;function re(){throw Error(y(321))}function xi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Me(e[n],t[n]))return!1;return!0}function wi(e,t,n,r,l,o){if(Pt=o,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Cr.current=e===null||e.memoizedState===null?hf:gf,e=n(r,l),Pn){o=0;do{if(Pn=!1,Wn=0,25<=o)throw Error(y(301));o+=1,J=K=null,t.updateQueue=null,Cr.current=vf,e=n(r,l)}while(Pn)}if(Cr.current=Gr,t=K!==null&&K.next!==null,Pt=0,J=K=V=null,Xr=!1,t)throw Error(y(300));return e}function ki(){var e=Wn!==0;return Wn=0,e}function Oe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?V.memoizedState=J=e:J=J.next=e,J}function _e(){if(K===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=J===null?V.memoizedState:J.next;if(t!==null)J=t,K=e;else{if(e===null)throw Error(y(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},J===null?V.memoizedState=J=e:J=J.next=e}return J}function Yn(e,t){return typeof t=="function"?t(e):t}function Vl(e){var t=_e(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=K,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var a=i=null,s=null,d=o;do{var g=d.lane;if((Pt&g)===g)s!==null&&(s=s.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};s===null?(a=s=h,i=r):s=s.next=h,V.lanes|=g,zt|=g}d=d.next}while(d!==null&&d!==o);s===null?i=r:s.next=a,Me(r,t.memoizedState)||(fe=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,V.lanes|=o,zt|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hl(e){var t=_e(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Me(o,t.memoizedState)||(fe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function du(){}function fu(e,t){var n=V,r=_e(),l=t(),o=!Me(r.memoizedState,l);if(o&&(r.memoizedState=l,fe=!0),r=r.queue,Si(hu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,Qn(9,mu.bind(null,n,r,l,t),void 0,null),Z===null)throw Error(y(349));Pt&30||pu(n,t,l)}return l}function pu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function mu(e,t,n,r){t.value=n,t.getSnapshot=r,gu(t)&&vu(e)}function hu(e,t,n){return n(function(){gu(t)&&vu(e)})}function gu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Me(e,n)}catch{return!0}}function vu(e){var t=Ke(e,1);t!==null&&Re(t,e,1,-1)}function Na(e){var t=Oe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:e},t.queue=e,e=e.dispatch=mf.bind(null,V,e),[t.memoizedState,e]}function Qn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function yu(){return _e().memoizedState}function _r(e,t,n,r){var l=Oe();V.flags|=e,l.memoizedState=Qn(1|t,n,void 0,r===void 0?null:r)}function ul(e,t,n,r){var l=_e();r=r===void 0?null:r;var o=void 0;if(K!==null){var i=K.memoizedState;if(o=i.destroy,r!==null&&xi(r,i.deps)){l.memoizedState=Qn(t,n,o,r);return}}V.flags|=e,l.memoizedState=Qn(1|t,n,o,r)}function Ea(e,t){return _r(8390656,8,e,t)}function Si(e,t){return ul(2048,8,e,t)}function xu(e,t){return ul(4,2,e,t)}function wu(e,t){return ul(4,4,e,t)}function ku(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Su(e,t,n){return n=n!=null?n.concat([e]):null,ul(4,4,ku.bind(null,t,e),n)}function ji(){}function ju(e,t){var n=_e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Nu(e,t){var n=_e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Eu(e,t,n){return Pt&21?(Me(n,t)||(n=Ls(),V.lanes|=n,zt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=n)}function ff(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=Al.transition;Al.transition={};try{e(!1),t()}finally{D=n,Al.transition=r}}function Cu(){return _e().memoizedState}function pf(e,t,n){var r=ct(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_u(e))Pu(t,n);else if(n=su(e,t,n,r),n!==null){var l=se();Re(n,e,r,l),zu(n,t,r)}}function mf(e,t,n){var r=ct(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_u(e))Pu(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,a=o(i,n);if(l.hasEagerState=!0,l.eagerState=a,Me(a,i)){var s=t.interleaved;s===null?(l.next=l,mi(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=su(e,t,l,r),n!==null&&(l=se(),Re(n,e,r,l),zu(n,t,r))}}function _u(e){var t=e.alternate;return e===V||t!==null&&t===V}function Pu(e,t){Pn=Xr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ei(e,n)}}var Gr={readContext:Ce,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},hf={readContext:Ce,useCallback:function(e,t){return Oe().memoizedState=[e,t===void 0?null:t],e},useContext:Ce,useEffect:Ea,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_r(4194308,4,ku.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _r(4194308,4,e,t)},useInsertionEffect:function(e,t){return _r(4,2,e,t)},useMemo:function(e,t){var n=Oe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Oe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=pf.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=Oe();return e={current:e},t.memoizedState=e},useState:Na,useDebugValue:ji,useDeferredValue:function(e){return Oe().memoizedState=e},useTransition:function(){var e=Na(!1),t=e[0];return e=ff.bind(null,e[1]),Oe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=V,l=Oe();if(U){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),Z===null)throw Error(y(349));Pt&30||pu(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Ea(hu.bind(null,r,o,e),[e]),r.flags|=2048,Qn(9,mu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Oe(),t=Z.identifierPrefix;if(U){var n=Be,r=$e;n=(r&~(1<<32-De(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=df++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},gf={readContext:Ce,useCallback:ju,useContext:Ce,useEffect:Si,useImperativeHandle:Su,useInsertionEffect:xu,useLayoutEffect:wu,useMemo:Nu,useReducer:Vl,useRef:yu,useState:function(){return Vl(Yn)},useDebugValue:ji,useDeferredValue:function(e){var t=_e();return Eu(t,K.memoizedState,e)},useTransition:function(){var e=Vl(Yn)[0],t=_e().memoizedState;return[e,t]},useMutableSource:du,useSyncExternalStore:fu,useId:Cu,unstable_isNewReconciler:!1},vf={readContext:Ce,useCallback:ju,useContext:Ce,useEffect:Si,useImperativeHandle:Su,useInsertionEffect:xu,useLayoutEffect:wu,useMemo:Nu,useReducer:Hl,useRef:yu,useState:function(){return Hl(Yn)},useDebugValue:ji,useDeferredValue:function(e){var t=_e();return K===null?t.memoizedState=e:Eu(t,K.memoizedState,e)},useTransition:function(){var e=Hl(Yn)[0],t=_e().memoizedState;return[e,t]},useMutableSource:du,useSyncExternalStore:fu,useId:Cu,unstable_isNewReconciler:!1};function Le(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Co(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var cl={isMounted:function(e){return(e=e._reactInternals)?It(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=se(),l=ct(e),o=We(r,l);o.payload=t,n!=null&&(o.callback=n),t=st(e,o,l),t!==null&&(Re(t,e,l,r),Er(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=se(),l=ct(e),o=We(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=st(e,o,l),t!==null&&(Re(t,e,l,r),Er(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=se(),r=ct(e),l=We(n,r);l.tag=2,t!=null&&(l.callback=t),t=st(e,l,r),t!==null&&(Re(t,e,r,n),Er(t,e,r))}};function Ca(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!Un(n,r)||!Un(l,o):!0}function Lu(e,t,n){var r=!1,l=pt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ce(o):(l=me(t)?Ct:ie.current,r=t.contextTypes,o=(r=r!=null)?qt(e,l):pt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=cl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function _a(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&cl.enqueueReplaceState(t,t.state,null)}function _o(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},hi(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Ce(o):(o=me(t)?Ct:ie.current,l.context=qt(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Co(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&cl.enqueueReplaceState(l,l.state,null),Qr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function rn(e,t){try{var n="",r=t;do n+=Bc(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function $l(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Po(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var yf=typeof WeakMap=="function"?WeakMap:Map;function Tu(e,t,n){n=We(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Zr||(Zr=!0,bo=r),Po(e,t)},n}function Iu(e,t,n){n=We(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Po(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Po(e,t),typeof r!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Pa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new yf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=If.bind(null,e,t,n),t.then(e,e))}function za(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function La(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=We(-1,1),t.tag=2,st(n,t,1))),n.lanes|=1),e)}var xf=Ge.ReactCurrentOwner,fe=!1;function ae(e,t,n,r){t.child=e===null?au(t,null,n,r):tn(t,e.child,n,r)}function Ta(e,t,n,r,l){n=n.render;var o=t.ref;return Gt(t,l),r=wi(e,t,n,r,o,l),n=ki(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):(U&&n&&si(t),t.flags|=1,ae(e,t,r,l),t.child)}function Ia(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Ti(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Du(e,t,o,r,l)):(e=Tr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:Un,n(i,r)&&e.ref===t.ref)return Xe(e,t,l)}return t.flags|=1,e=dt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Du(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(Un(o,r)&&e.ref===t.ref)if(fe=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(fe=!0);else return t.lanes=e.lanes,Xe(e,t,l)}return zo(e,t,n,r,l)}function Ru(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},R(Wt,ge),ge|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,R(Wt,ge),ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,R(Wt,ge),ge|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,R(Wt,ge),ge|=r;return ae(e,t,l,n),t.child}function Mu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function zo(e,t,n,r,l){var o=me(n)?Ct:ie.current;return o=qt(t,o),Gt(t,l),n=wi(e,t,n,r,o,l),r=ki(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):(U&&r&&si(t),t.flags|=1,ae(e,t,n,l),t.child)}function Da(e,t,n,r,l){if(me(n)){var o=!0;Hr(t)}else o=!1;if(Gt(t,l),t.stateNode===null)Pr(e,t),Lu(t,n,r),_o(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var s=i.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ce(d):(d=me(n)?Ct:ie.current,d=qt(t,d));var g=n.getDerivedStateFromProps,h=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function";h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==d)&&_a(t,i,r,d),qe=!1;var m=t.memoizedState;i.state=m,Qr(t,r,i,l),s=t.memoizedState,a!==r||m!==s||pe.current||qe?(typeof g=="function"&&(Co(t,n,g,r),s=t.memoizedState),(a=qe||Ca(t,n,a,r,m,s,d))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=d,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,uu(e,t),a=t.memoizedProps,d=t.type===t.elementType?a:Le(t.type,a),i.props=d,h=t.pendingProps,m=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ce(s):(s=me(n)?Ct:ie.current,s=qt(t,s));var x=n.getDerivedStateFromProps;(g=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==h||m!==s)&&_a(t,i,r,s),qe=!1,m=t.memoizedState,i.state=m,Qr(t,r,i,l);var w=t.memoizedState;a!==h||m!==w||pe.current||qe?(typeof x=="function"&&(Co(t,n,x,r),w=t.memoizedState),(d=qe||Ca(t,n,d,r,m,w,s)||!1)?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,w,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,w,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),i.props=r,i.state=w,i.context=s,r=d):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Lo(e,t,n,r,o,l)}function Lo(e,t,n,r,l,o){Mu(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&ya(t,n,!1),Xe(e,t,o);r=t.stateNode,xf.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=tn(t,e.child,null,o),t.child=tn(t,null,a,o)):ae(e,t,a,o),t.memoizedState=r.state,l&&ya(t,n,!0),t.child}function Fu(e){var t=e.stateNode;t.pendingContext?va(e,t.pendingContext,t.pendingContext!==t.context):t.context&&va(e,t.context,!1),gi(e,t.containerInfo)}function Ra(e,t,n,r,l){return en(),ci(l),t.flags|=256,ae(e,t,n,r),t.child}var To={dehydrated:null,treeContext:null,retryLane:0};function Io(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ou(e,t,n){var r=t.pendingProps,l=A.current,o=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),R(A,l&1),e===null)return No(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=pl(i,r,0,null),e=Et(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Io(n),t.memoizedState=To,e):Ni(t,i));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return wf(e,t,i,r,a,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,a=l.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=dt(l,s),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?o=dt(a,o):(o=Et(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?Io(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=To,r}return o=e.child,e=o.sibling,r=dt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ni(e,t){return t=pl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function gr(e,t,n,r){return r!==null&&ci(r),tn(t,e.child,null,n),e=Ni(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wf(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=$l(Error(y(422))),gr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=pl({mode:"visible",children:r.children},l,0,null),o=Et(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&tn(t,e.child,null,i),t.child.memoizedState=Io(i),t.memoizedState=To,o);if(!(t.mode&1))return gr(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(y(419)),r=$l(o,r,void 0),gr(e,t,i,r)}if(a=(i&e.childLanes)!==0,fe||a){if(r=Z,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Ke(e,l),Re(r,e,l,-1))}return Li(),r=$l(Error(y(421))),gr(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Df.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,ve=at(l.nextSibling),ye=t,U=!0,Ie=null,e!==null&&(Se[je++]=$e,Se[je++]=Be,Se[je++]=_t,$e=e.id,Be=e.overflow,_t=t),t=Ni(t,r.children),t.flags|=4096,t)}function Ma(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Eo(e.return,t,n)}function Bl(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function bu(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(ae(e,t,r.children,n),r=A.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ma(e,n,t);else if(e.tag===19)Ma(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(R(A,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Kr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Bl(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Kr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Bl(t,!0,n,null,o);break;case"together":Bl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Pr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=dt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function kf(e,t,n){switch(t.tag){case 3:Fu(t),en();break;case 5:cu(t);break;case 1:me(t.type)&&Hr(t);break;case 4:gi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;R(Wr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(R(A,A.current&1),t.flags|=128,null):n&t.child.childLanes?Ou(e,t,n):(R(A,A.current&1),e=Xe(e,t,n),e!==null?e.sibling:null);R(A,A.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return bu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),R(A,A.current),r)break;return null;case 22:case 23:return t.lanes=0,Ru(e,t,n)}return Xe(e,t,n)}var Uu,Do,Au,Vu;Uu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Do=function(){};Au=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,jt(Ae.current);var o=null;switch(n){case"input":l=eo(e,l),r=eo(e,r),o=[];break;case"select":l=H({},l,{value:void 0}),r=H({},r,{value:void 0}),o=[];break;case"textarea":l=ro(e,l),r=ro(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ar)}oo(n,r);var i;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var a=l[d];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(In.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var s=r[d];if(a=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&s!==a&&(s!=null||a!=null))if(d==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(o||(o=[]),o.push(d,n)),n=s;else d==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(d,s)):d==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(d,""+s):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(In.hasOwnProperty(d)?(s!=null&&d==="onScroll"&&M("scroll",e),o||a===s||(o=[])):(o=o||[]).push(d,s))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};Vu=function(e,t,n,r){n!==r&&(t.flags|=4)};function vn(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Sf(e,t,n){var r=t.pendingProps;switch(ui(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return me(t.type)&&Vr(),le(t),null;case 3:return r=t.stateNode,nn(),O(pe),O(ie),yi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(mr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ie!==null&&(Vo(Ie),Ie=null))),Do(e,t),le(t),null;case 5:vi(t);var l=jt(Bn.current);if(n=t.type,e!==null&&t.stateNode!=null)Au(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return le(t),null}if(e=jt(Ae.current),mr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[be]=t,r[Hn]=o,e=(t.mode&1)!==0,n){case"dialog":M("cancel",r),M("close",r);break;case"iframe":case"object":case"embed":M("load",r);break;case"video":case"audio":for(l=0;l<Sn.length;l++)M(Sn[l],r);break;case"source":M("error",r);break;case"img":case"image":case"link":M("error",r),M("load",r);break;case"details":M("toggle",r);break;case"input":Bi(r,o),M("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},M("invalid",r);break;case"textarea":Yi(r,o),M("invalid",r)}oo(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var a=o[i];i==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&pr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&pr(r.textContent,a,e),l=["children",""+a]):In.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&M("scroll",r)}switch(n){case"input":or(r),Wi(r,o,!0);break;case"textarea":or(r),Qi(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ar)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=hs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[be]=t,e[Hn]=r,Uu(e,t,!1,!1),t.stateNode=e;e:{switch(i=io(n,r),n){case"dialog":M("cancel",e),M("close",e),l=r;break;case"iframe":case"object":case"embed":M("load",e),l=r;break;case"video":case"audio":for(l=0;l<Sn.length;l++)M(Sn[l],e);l=r;break;case"source":M("error",e),l=r;break;case"img":case"image":case"link":M("error",e),M("load",e),l=r;break;case"details":M("toggle",e),l=r;break;case"input":Bi(e,r),l=eo(e,r),M("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=H({},r,{value:void 0}),M("invalid",e);break;case"textarea":Yi(e,r),l=ro(e,r),M("invalid",e);break;default:l=r}oo(n,l),a=l;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?ys(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&gs(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Dn(e,s):typeof s=="number"&&Dn(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(In.hasOwnProperty(o)?s!=null&&o==="onScroll"&&M("scroll",e):s!=null&&Ko(e,o,s,i))}switch(n){case"input":or(e),Wi(e,r,!1);break;case"textarea":or(e),Qi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ft(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Yt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Yt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ar)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)Vu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=jt(Bn.current),jt(Ae.current),mr(t)){if(r=t.stateNode,n=t.memoizedProps,r[be]=t,(o=r.nodeValue!==n)&&(e=ye,e!==null))switch(e.tag){case 3:pr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&pr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[be]=t,t.stateNode=r}return le(t),null;case 13:if(O(A),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&ve!==null&&t.mode&1&&!(t.flags&128))ou(),en(),t.flags|=98560,o=!1;else if(o=mr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(y(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(y(317));o[be]=t}else en(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),o=!1}else Ie!==null&&(Vo(Ie),Ie=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||A.current&1?X===0&&(X=3):Li())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return nn(),Do(e,t),e===null&&An(t.stateNode.containerInfo),le(t),null;case 10:return pi(t.type._context),le(t),null;case 17:return me(t.type)&&Vr(),le(t),null;case 19:if(O(A),o=t.memoizedState,o===null)return le(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)vn(o,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Kr(e),i!==null){for(t.flags|=128,vn(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return R(A,A.current&1|2),t.child}e=e.sibling}o.tail!==null&&Y()>ln&&(t.flags|=128,r=!0,vn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Kr(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),vn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!U)return le(t),null}else 2*Y()-o.renderingStartTime>ln&&n!==1073741824&&(t.flags|=128,r=!0,vn(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Y(),t.sibling=null,n=A.current,R(A,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return zi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ge&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function jf(e,t){switch(ui(t),t.tag){case 1:return me(t.type)&&Vr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nn(),O(pe),O(ie),yi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return vi(t),null;case 13:if(O(A),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));en()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(A),null;case 4:return nn(),null;case 10:return pi(t.type._context),null;case 22:case 23:return zi(),null;case 24:return null;default:return null}}var vr=!1,oe=!1,Nf=typeof WeakSet=="function"?WeakSet:Set,S=null;function Bt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){$(e,t,r)}else n.current=null}function Ro(e,t,n){try{n()}catch(r){$(e,t,r)}}var Fa=!1;function Ef(e,t){if(vo=Or,e=Ys(),ai(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,a=-1,s=-1,d=0,g=0,h=e,m=null;t:for(;;){for(var x;h!==n||l!==0&&h.nodeType!==3||(a=i+l),h!==o||r!==0&&h.nodeType!==3||(s=i+r),h.nodeType===3&&(i+=h.nodeValue.length),(x=h.firstChild)!==null;)m=h,h=x;for(;;){if(h===e)break t;if(m===n&&++d===l&&(a=i),m===o&&++g===r&&(s=i),(x=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=x}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(yo={focusedElem:e,selectionRange:n},Or=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,b=w.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:Le(t.type,k),b);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(v){$(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return w=Fa,Fa=!1,w}function zn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Ro(t,n,o)}l=l.next}while(l!==r)}}function dl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Mo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Hu(e){var t=e.alternate;t!==null&&(e.alternate=null,Hu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[be],delete t[Hn],delete t[ko],delete t[af],delete t[sf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $u(e){return e.tag===5||e.tag===3||e.tag===4}function Oa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$u(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ar));else if(r!==4&&(e=e.child,e!==null))for(Fo(e,t,n),e=e.sibling;e!==null;)Fo(e,t,n),e=e.sibling}function Oo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Oo(e,t,n),e=e.sibling;e!==null;)Oo(e,t,n),e=e.sibling}var q=null,Te=!1;function Je(e,t,n){for(n=n.child;n!==null;)Bu(e,t,n),n=n.sibling}function Bu(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(rl,n)}catch{}switch(n.tag){case 5:oe||Bt(n,t);case 6:var r=q,l=Te;q=null,Je(e,t,n),q=r,Te=l,q!==null&&(Te?(e=q,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):q.removeChild(n.stateNode));break;case 18:q!==null&&(Te?(e=q,n=n.stateNode,e.nodeType===8?Ol(e.parentNode,n):e.nodeType===1&&Ol(e,n),On(e)):Ol(q,n.stateNode));break;case 4:r=q,l=Te,q=n.stateNode.containerInfo,Te=!0,Je(e,t,n),q=r,Te=l;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Ro(n,t,i),l=l.next}while(l!==r)}Je(e,t,n);break;case 1:if(!oe&&(Bt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){$(n,t,a)}Je(e,t,n);break;case 21:Je(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,Je(e,t,n),oe=r):Je(e,t,n);break;default:Je(e,t,n)}}function ba(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Nf),t.forEach(function(r){var l=Rf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:q=a.stateNode,Te=!1;break e;case 3:q=a.stateNode.containerInfo,Te=!0;break e;case 4:q=a.stateNode.containerInfo,Te=!0;break e}a=a.return}if(q===null)throw Error(y(160));Bu(o,i,l),q=null,Te=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(d){$(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wu(t,e),t=t.sibling}function Wu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(t,e),Fe(e),r&4){try{zn(3,e,e.return),dl(3,e)}catch(k){$(e,e.return,k)}try{zn(5,e,e.return)}catch(k){$(e,e.return,k)}}break;case 1:ze(t,e),Fe(e),r&512&&n!==null&&Bt(n,n.return);break;case 5:if(ze(t,e),Fe(e),r&512&&n!==null&&Bt(n,n.return),e.flags&32){var l=e.stateNode;try{Dn(l,"")}catch(k){$(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&ps(l,o),io(a,i);var d=io(a,o);for(i=0;i<s.length;i+=2){var g=s[i],h=s[i+1];g==="style"?ys(l,h):g==="dangerouslySetInnerHTML"?gs(l,h):g==="children"?Dn(l,h):Ko(l,g,h,d)}switch(a){case"input":to(l,o);break;case"textarea":ms(l,o);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?Yt(l,!!o.multiple,x,!1):m!==!!o.multiple&&(o.defaultValue!=null?Yt(l,!!o.multiple,o.defaultValue,!0):Yt(l,!!o.multiple,o.multiple?[]:"",!1))}l[Hn]=o}catch(k){$(e,e.return,k)}}break;case 6:if(ze(t,e),Fe(e),r&4){if(e.stateNode===null)throw Error(y(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(k){$(e,e.return,k)}}break;case 3:if(ze(t,e),Fe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{On(t.containerInfo)}catch(k){$(e,e.return,k)}break;case 4:ze(t,e),Fe(e);break;case 13:ze(t,e),Fe(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(_i=Y())),r&4&&ba(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(d=oe)||g,ze(t,e),oe=d):ze(t,e),Fe(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(S=e,g=e.child;g!==null;){for(h=S=g;S!==null;){switch(m=S,x=m.child,m.tag){case 0:case 11:case 14:case 15:zn(4,m,m.return);break;case 1:Bt(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){$(r,n,k)}}break;case 5:Bt(m,m.return);break;case 22:if(m.memoizedState!==null){Aa(h);continue}}x!==null?(x.return=m,S=x):Aa(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{l=h.stateNode,d?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,s=h.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=vs("display",i))}catch(k){$(e,e.return,k)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(k){$(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ze(t,e),Fe(e),r&4&&ba(e);break;case 21:break;default:ze(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if($u(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Dn(l,""),r.flags&=-33);var o=Oa(e);Oo(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,a=Oa(e);Fo(e,a,i);break;default:throw Error(y(161))}}catch(s){$(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Cf(e,t,n){S=e,Yu(e)}function Yu(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var l=S,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||vr;if(!i){var a=l.alternate,s=a!==null&&a.memoizedState!==null||oe;a=vr;var d=oe;if(vr=i,(oe=s)&&!d)for(S=l;S!==null;)i=S,s=i.child,i.tag===22&&i.memoizedState!==null?Va(l):s!==null?(s.return=i,S=s):Va(l);for(;o!==null;)S=o,Yu(o),o=o.sibling;S=l,vr=a,oe=d}Ua(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,S=o):Ua(e)}}function Ua(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||dl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Le(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ja(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ja(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&On(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}oe||t.flags&512&&Mo(t)}catch(m){$(t,t.return,m)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function Aa(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function Va(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{dl(4,t)}catch(s){$(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){$(t,l,s)}}var o=t.return;try{Mo(t)}catch(s){$(t,o,s)}break;case 5:var i=t.return;try{Mo(t)}catch(s){$(t,i,s)}}}catch(s){$(t,t.return,s)}if(t===e){S=null;break}var a=t.sibling;if(a!==null){a.return=t.return,S=a;break}S=t.return}}var _f=Math.ceil,Jr=Ge.ReactCurrentDispatcher,Ei=Ge.ReactCurrentOwner,Ee=Ge.ReactCurrentBatchConfig,I=0,Z=null,Q=null,te=0,ge=0,Wt=ht(0),X=0,Kn=null,zt=0,fl=0,Ci=0,Ln=null,de=null,_i=0,ln=1/0,Ve=null,Zr=!1,bo=null,ut=null,yr=!1,rt=null,qr=0,Tn=0,Uo=null,zr=-1,Lr=0;function se(){return I&6?Y():zr!==-1?zr:zr=Y()}function ct(e){return e.mode&1?I&2&&te!==0?te&-te:cf.transition!==null?(Lr===0&&(Lr=Ls()),Lr):(e=D,e!==0||(e=window.event,e=e===void 0?16:Os(e.type)),e):1}function Re(e,t,n,r){if(50<Tn)throw Tn=0,Uo=null,Error(y(185));Gn(e,n,r),(!(I&2)||e!==Z)&&(e===Z&&(!(I&2)&&(fl|=n),X===4&&tt(e,te)),he(e,r),n===1&&I===0&&!(t.mode&1)&&(ln=Y()+500,sl&&gt()))}function he(e,t){var n=e.callbackNode;ud(e,t);var r=Fr(e,e===Z?te:0);if(r===0)n!==null&&Gi(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Gi(n),t===1)e.tag===0?uf(Ha.bind(null,e)):nu(Ha.bind(null,e)),lf(function(){!(I&6)&&gt()}),n=null;else{switch(Ts(r)){case 1:n=qo;break;case 4:n=Ps;break;case 16:n=Mr;break;case 536870912:n=zs;break;default:n=Mr}n=ec(n,Qu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Qu(e,t){if(zr=-1,Lr=0,I&6)throw Error(y(327));var n=e.callbackNode;if(Jt()&&e.callbackNode!==n)return null;var r=Fr(e,e===Z?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=el(e,r);else{t=r;var l=I;I|=2;var o=Xu();(Z!==e||te!==t)&&(Ve=null,ln=Y()+500,Nt(e,t));do try{Lf();break}catch(a){Ku(e,a)}while(!0);fi(),Jr.current=o,I=l,Q!==null?t=0:(Z=null,te=0,t=X)}if(t!==0){if(t===2&&(l=fo(e),l!==0&&(r=l,t=Ao(e,l))),t===1)throw n=Kn,Nt(e,0),tt(e,r),he(e,Y()),n;if(t===6)tt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Pf(l)&&(t=el(e,r),t===2&&(o=fo(e),o!==0&&(r=o,t=Ao(e,o))),t===1))throw n=Kn,Nt(e,0),tt(e,r),he(e,Y()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:wt(e,de,Ve);break;case 3:if(tt(e,r),(r&130023424)===r&&(t=_i+500-Y(),10<t)){if(Fr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=wo(wt.bind(null,e,de,Ve),t);break}wt(e,de,Ve);break;case 4:if(tt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-De(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_f(r/1960))-r,10<r){e.timeoutHandle=wo(wt.bind(null,e,de,Ve),r);break}wt(e,de,Ve);break;case 5:wt(e,de,Ve);break;default:throw Error(y(329))}}}return he(e,Y()),e.callbackNode===n?Qu.bind(null,e):null}function Ao(e,t){var n=Ln;return e.current.memoizedState.isDehydrated&&(Nt(e,t).flags|=256),e=el(e,t),e!==2&&(t=de,de=n,t!==null&&Vo(t)),e}function Vo(e){de===null?de=e:de.push.apply(de,e)}function Pf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!Me(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tt(e,t){for(t&=~Ci,t&=~fl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-De(t),r=1<<n;e[n]=-1,t&=~r}}function Ha(e){if(I&6)throw Error(y(327));Jt();var t=Fr(e,0);if(!(t&1))return he(e,Y()),null;var n=el(e,t);if(e.tag!==0&&n===2){var r=fo(e);r!==0&&(t=r,n=Ao(e,r))}if(n===1)throw n=Kn,Nt(e,0),tt(e,t),he(e,Y()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wt(e,de,Ve),he(e,Y()),null}function Pi(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(ln=Y()+500,sl&&gt())}}function Lt(e){rt!==null&&rt.tag===0&&!(I&6)&&Jt();var t=I;I|=1;var n=Ee.transition,r=D;try{if(Ee.transition=null,D=1,e)return e()}finally{D=r,Ee.transition=n,I=t,!(I&6)&&gt()}}function zi(){ge=Wt.current,O(Wt)}function Nt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,rf(n)),Q!==null)for(n=Q.return;n!==null;){var r=n;switch(ui(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vr();break;case 3:nn(),O(pe),O(ie),yi();break;case 5:vi(r);break;case 4:nn();break;case 13:O(A);break;case 19:O(A);break;case 10:pi(r.type._context);break;case 22:case 23:zi()}n=n.return}if(Z=e,Q=e=dt(e.current,null),te=ge=t,X=0,Kn=null,Ci=fl=zt=0,de=Ln=null,St!==null){for(t=0;t<St.length;t++)if(n=St[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}St=null}return e}function Ku(e,t){do{var n=Q;try{if(fi(),Cr.current=Gr,Xr){for(var r=V.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Xr=!1}if(Pt=0,J=K=V=null,Pn=!1,Wn=0,Ei.current=null,n===null||n.return===null){X=1,Kn=t,Q=null;break}e:{var o=e,i=n.return,a=n,s=t;if(t=te,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=s,g=a,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var x=za(i);if(x!==null){x.flags&=-257,La(x,i,a,o,t),x.mode&1&&Pa(o,d,t),t=x,s=d;var w=t.updateQueue;if(w===null){var k=new Set;k.add(s),t.updateQueue=k}else w.add(s);break e}else{if(!(t&1)){Pa(o,d,t),Li();break e}s=Error(y(426))}}else if(U&&a.mode&1){var b=za(i);if(b!==null){!(b.flags&65536)&&(b.flags|=256),La(b,i,a,o,t),ci(rn(s,a));break e}}o=s=rn(s,a),X!==4&&(X=2),Ln===null?Ln=[o]:Ln.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Tu(o,s,t);Sa(o,f);break e;case 1:a=s;var u=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ut===null||!ut.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=Iu(o,a,t);Sa(o,v);break e}}o=o.return}while(o!==null)}Ju(n)}catch(j){t=j,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(!0)}function Xu(){var e=Jr.current;return Jr.current=Gr,e===null?Gr:e}function Li(){(X===0||X===3||X===2)&&(X=4),Z===null||!(zt&268435455)&&!(fl&268435455)||tt(Z,te)}function el(e,t){var n=I;I|=2;var r=Xu();(Z!==e||te!==t)&&(Ve=null,Nt(e,t));do try{zf();break}catch(l){Ku(e,l)}while(!0);if(fi(),I=n,Jr.current=r,Q!==null)throw Error(y(261));return Z=null,te=0,X}function zf(){for(;Q!==null;)Gu(Q)}function Lf(){for(;Q!==null&&!ed();)Gu(Q)}function Gu(e){var t=qu(e.alternate,e,ge);e.memoizedProps=e.pendingProps,t===null?Ju(e):Q=t,Ei.current=null}function Ju(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=jf(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Q=null;return}}else if(n=Sf(n,t,ge),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);X===0&&(X=5)}function wt(e,t,n){var r=D,l=Ee.transition;try{Ee.transition=null,D=1,Tf(e,t,n,r)}finally{Ee.transition=l,D=r}return null}function Tf(e,t,n,r){do Jt();while(rt!==null);if(I&6)throw Error(y(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(cd(e,o),e===Z&&(Q=Z=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yr||(yr=!0,ec(Mr,function(){return Jt(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ee.transition,Ee.transition=null;var i=D;D=1;var a=I;I|=4,Ei.current=null,Ef(e,n),Wu(n,e),Gd(yo),Or=!!vo,yo=vo=null,e.current=n,Cf(n),td(),I=a,D=i,Ee.transition=o}else e.current=n;if(yr&&(yr=!1,rt=e,qr=l),o=e.pendingLanes,o===0&&(ut=null),ld(n.stateNode),he(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Zr)throw Zr=!1,e=bo,bo=null,e;return qr&1&&e.tag!==0&&Jt(),o=e.pendingLanes,o&1?e===Uo?Tn++:(Tn=0,Uo=e):Tn=0,gt(),null}function Jt(){if(rt!==null){var e=Ts(qr),t=Ee.transition,n=D;try{if(Ee.transition=null,D=16>e?16:e,rt===null)var r=!1;else{if(e=rt,rt=null,qr=0,I&6)throw Error(y(331));var l=I;for(I|=4,S=e.current;S!==null;){var o=S,i=o.child;if(S.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var d=a[s];for(S=d;S!==null;){var g=S;switch(g.tag){case 0:case 11:case 15:zn(8,g,o)}var h=g.child;if(h!==null)h.return=g,S=h;else for(;S!==null;){g=S;var m=g.sibling,x=g.return;if(Hu(g),g===d){S=null;break}if(m!==null){m.return=x,S=m;break}S=x}}}var w=o.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var b=k.sibling;k.sibling=null,k=b}while(k!==null)}}S=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,S=i;else e:for(;S!==null;){if(o=S,o.flags&2048)switch(o.tag){case 0:case 11:case 15:zn(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,S=f;break e}S=o.return}}var u=e.current;for(S=u;S!==null;){i=S;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,S=p;else e:for(i=u;S!==null;){if(a=S,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:dl(9,a)}}catch(j){$(a,a.return,j)}if(a===i){S=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,S=v;break e}S=a.return}}if(I=l,gt(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(rl,e)}catch{}r=!0}return r}finally{D=n,Ee.transition=t}}return!1}function $a(e,t,n){t=rn(n,t),t=Tu(e,t,1),e=st(e,t,1),t=se(),e!==null&&(Gn(e,1,t),he(e,t))}function $(e,t,n){if(e.tag===3)$a(e,e,n);else for(;t!==null;){if(t.tag===3){$a(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ut===null||!ut.has(r))){e=rn(n,e),e=Iu(t,e,1),t=st(t,e,1),e=se(),t!==null&&(Gn(t,1,e),he(t,e));break}}t=t.return}}function If(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=se(),e.pingedLanes|=e.suspendedLanes&n,Z===e&&(te&n)===n&&(X===4||X===3&&(te&130023424)===te&&500>Y()-_i?Nt(e,0):Ci|=n),he(e,t)}function Zu(e,t){t===0&&(e.mode&1?(t=sr,sr<<=1,!(sr&130023424)&&(sr=4194304)):t=1);var n=se();e=Ke(e,t),e!==null&&(Gn(e,t,n),he(e,n))}function Df(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zu(e,n)}function Rf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),Zu(e,n)}var qu;qu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||pe.current)fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return fe=!1,kf(e,t,n);fe=!!(e.flags&131072)}else fe=!1,U&&t.flags&1048576&&ru(t,Br,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Pr(e,t),e=t.pendingProps;var l=qt(t,ie.current);Gt(t,n),l=wi(null,t,r,e,l,n);var o=ki();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(r)?(o=!0,Hr(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,hi(t),l.updater=cl,t.stateNode=l,l._reactInternals=t,_o(t,r,e,n),t=Lo(null,t,r,!0,o,n)):(t.tag=0,U&&o&&si(t),ae(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Pr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Ff(r),e=Le(r,e),l){case 0:t=zo(null,t,r,e,n);break e;case 1:t=Da(null,t,r,e,n);break e;case 11:t=Ta(null,t,r,e,n);break e;case 14:t=Ia(null,t,r,Le(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),zo(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Da(e,t,r,l,n);case 3:e:{if(Fu(t),e===null)throw Error(y(387));r=t.pendingProps,o=t.memoizedState,l=o.element,uu(e,t),Qr(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=rn(Error(y(423)),t),t=Ra(e,t,r,n,l);break e}else if(r!==l){l=rn(Error(y(424)),t),t=Ra(e,t,r,n,l);break e}else for(ve=at(t.stateNode.containerInfo.firstChild),ye=t,U=!0,Ie=null,n=au(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(en(),r===l){t=Xe(e,t,n);break e}ae(e,t,r,n)}t=t.child}return t;case 5:return cu(t),e===null&&No(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,xo(r,l)?i=null:o!==null&&xo(r,o)&&(t.flags|=32),Mu(e,t),ae(e,t,i,n),t.child;case 6:return e===null&&No(t),null;case 13:return Ou(e,t,n);case 4:return gi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=tn(t,null,r,n):ae(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Ta(e,t,r,l,n);case 7:return ae(e,t,t.pendingProps,n),t.child;case 8:return ae(e,t,t.pendingProps.children,n),t.child;case 12:return ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,R(Wr,r._currentValue),r._currentValue=i,o!==null)if(Me(o.value,i)){if(o.children===l.children&&!pe.current){t=Xe(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){i=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=We(-1,n&-n),s.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?s.next=s:(s.next=g.next,g.next=s),d.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Eo(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(y(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Eo(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}ae(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Gt(t,n),l=Ce(l),r=r(l),t.flags|=1,ae(e,t,r,n),t.child;case 14:return r=t.type,l=Le(r,t.pendingProps),l=Le(r.type,l),Ia(e,t,r,l,n);case 15:return Du(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Pr(e,t),t.tag=1,me(r)?(e=!0,Hr(t)):e=!1,Gt(t,n),Lu(t,r,l),_o(t,r,l,n),Lo(null,t,r,!0,e,n);case 19:return bu(e,t,n);case 22:return Ru(e,t,n)}throw Error(y(156,t.tag))};function ec(e,t){return _s(e,t)}function Mf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new Mf(e,t,n,r)}function Ti(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ff(e){if(typeof e=="function")return Ti(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Go)return 11;if(e===Jo)return 14}return 2}function dt(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Tr(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Ti(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Mt:return Et(n.children,l,o,t);case Xo:i=8,l|=8;break;case Gl:return e=Ne(12,n,t,l|2),e.elementType=Gl,e.lanes=o,e;case Jl:return e=Ne(13,n,t,l),e.elementType=Jl,e.lanes=o,e;case Zl:return e=Ne(19,n,t,l),e.elementType=Zl,e.lanes=o,e;case cs:return pl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ss:i=10;break e;case us:i=9;break e;case Go:i=11;break e;case Jo:i=14;break e;case Ze:i=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=Ne(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Et(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function pl(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=cs,e.lanes=n,e.stateNode={isHidden:!1},e}function Wl(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function Yl(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Of(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cl(0),this.expirationTimes=Cl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ii(e,t,n,r,l,o,i,a,s){return e=new Of(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ne(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hi(o),e}function bf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function tc(e){if(!e)return pt;e=e._reactInternals;e:{if(It(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(me(n))return tu(e,n,t)}return t}function nc(e,t,n,r,l,o,i,a,s){return e=Ii(n,r,!0,e,l,o,i,a,s),e.context=tc(null),n=e.current,r=se(),l=ct(n),o=We(r,l),o.callback=t??null,st(n,o,l),e.current.lanes=l,Gn(e,l,r),he(e,r),e}function ml(e,t,n,r){var l=t.current,o=se(),i=ct(l);return n=tc(n),t.context===null?t.context=n:t.pendingContext=n,t=We(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=st(l,t,i),e!==null&&(Re(e,l,i,o),Er(e,l,i)),i}function tl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ba(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Di(e,t){Ba(e,t),(e=e.alternate)&&Ba(e,t)}function Uf(){return null}var rc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ri(e){this._internalRoot=e}hl.prototype.render=Ri.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));ml(e,t,null,null)};hl.prototype.unmount=Ri.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lt(function(){ml(null,e,null,null)}),t[Qe]=null}};function hl(e){this._internalRoot=e}hl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Rs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<et.length&&t!==0&&t<et[n].priority;n++);et.splice(n,0,e),n===0&&Fs(e)}};function Mi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wa(){}function Af(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var d=tl(i);o.call(d)}}var i=nc(t,r,e,0,null,!1,!1,"",Wa);return e._reactRootContainer=i,e[Qe]=i.current,An(e.nodeType===8?e.parentNode:e),Lt(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var d=tl(s);a.call(d)}}var s=Ii(e,0,!1,null,null,!1,!1,"",Wa);return e._reactRootContainer=s,e[Qe]=s.current,An(e.nodeType===8?e.parentNode:e),Lt(function(){ml(t,s,n,r)}),s}function vl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var a=l;l=function(){var s=tl(i);a.call(s)}}ml(t,i,e,l)}else i=Af(n,t,e,l,r);return tl(i)}Is=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=kn(t.pendingLanes);n!==0&&(ei(t,n|1),he(t,Y()),!(I&6)&&(ln=Y()+500,gt()))}break;case 13:Lt(function(){var r=Ke(e,1);if(r!==null){var l=se();Re(r,e,1,l)}}),Di(e,1)}};ti=function(e){if(e.tag===13){var t=Ke(e,134217728);if(t!==null){var n=se();Re(t,e,134217728,n)}Di(e,134217728)}};Ds=function(e){if(e.tag===13){var t=ct(e),n=Ke(e,t);if(n!==null){var r=se();Re(n,e,t,r)}Di(e,t)}};Rs=function(){return D};Ms=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};so=function(e,t,n){switch(t){case"input":if(to(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=al(r);if(!l)throw Error(y(90));fs(r),to(r,l)}}}break;case"textarea":ms(e,n);break;case"select":t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}};ks=Pi;Ss=Lt;var Vf={usingClientEntryPoint:!1,Events:[Zn,Ut,al,xs,ws,Pi]},yn={findFiberByHostInstance:kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hf={bundleType:yn.bundleType,version:yn.version,rendererPackageName:yn.rendererPackageName,rendererConfig:yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ge.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Es(e),e===null?null:e.stateNode},findFiberByHostInstance:yn.findFiberByHostInstance||Uf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xr.isDisabled&&xr.supportsFiber)try{rl=xr.inject(Hf),Ue=xr}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vf;we.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mi(t))throw Error(y(200));return bf(e,t,null,n)};we.createRoot=function(e,t){if(!Mi(e))throw Error(y(299));var n=!1,r="",l=rc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ii(e,1,!1,null,null,n,!1,r,l),e[Qe]=t.current,An(e.nodeType===8?e.parentNode:e),new Ri(t)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Es(t),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return Lt(e)};we.hydrate=function(e,t,n){if(!gl(t))throw Error(y(200));return vl(null,e,t,!0,n)};we.hydrateRoot=function(e,t,n){if(!Mi(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=rc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=nc(t,null,e,1,n??null,l,!1,o,i),e[Qe]=t.current,An(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new hl(t)};we.render=function(e,t,n){if(!gl(t))throw Error(y(200));return vl(null,e,t,!1,n)};we.unmountComponentAtNode=function(e){if(!gl(e))throw Error(y(40));return e._reactRootContainer?(Lt(function(){vl(null,null,e,!1,function(){e._reactRootContainer=null,e[Qe]=null})}),!0):!1};we.unstable_batchedUpdates=Pi;we.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!gl(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return vl(e,t,n,!1,r)};we.version="18.3.1-next-f1338f8080-20240426";function lc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lc)}catch(e){console.error(e)}}lc(),ls.exports=we;var $f=ls.exports,Ya=$f;Kl.createRoot=Ya.createRoot,Kl.hydrateRoot=Ya.hydrateRoot;const Bf=({activeSection:e})=>{const[t,n]=F.useState(!1),[r,l]=F.useState(!1);F.useEffect(()=>{const a=()=>{n(window.scrollY>50)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]);const o=[{name:"Home",href:"#home"},{name:"About",href:"#about"},{name:"Skills",href:"#skills"},{name:"Projects",href:"#projects"},{name:"Contact",href:"#contact"}],i=a=>a.substring(1);return c.jsxs("nav",{className:`navbar ${t?"scrolled":""}`,children:[c.jsx("style",{jsx:!0,children:`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 2rem;
          transition: all 0.3s ease;
          background: transparent;
        }

        .navbar.scrolled {
          background: rgba(10, 10, 10, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-color);
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navbar-logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          text-decoration: none;
          background: var(--gradient-2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .navbar-menu {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .navbar-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          transition: all 0.3s ease;
          position: relative;
        }

        .navbar-link:hover {
          color: var(--text-primary);
          background: rgba(59, 130, 246, 0.1);
        }

        .navbar-link.active {
          color: var(--accent-color);
          background: rgba(59, 130, 246, 0.15);
        }

        .navbar-link.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 30px;
          height: 3px;
          background: var(--accent-color);
          border-radius: 2px;
        }

        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0.5rem;
        }

        .mobile-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(10, 10, 10, 0.98);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-color);
          padding: 1rem 2rem;
        }

        .mobile-menu.open {
          display: block;
        }

        .mobile-menu-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        @media (max-width: 768px) {
          .navbar-menu {
            display: none;
          }

          .mobile-menu-toggle {
            display: block;
          }

          .navbar {
            padding: 1rem;
          }
        }
      `}),c.jsxs("div",{className:"navbar-container",children:[c.jsx("a",{href:"#home",className:"navbar-logo",children:"Balogun Nathanael"}),c.jsx("ul",{className:"navbar-menu",children:o.map(a=>c.jsx("li",{children:c.jsx("a",{href:a.href,className:`navbar-link ${e===i(a.href)?"active":""}`,children:a.name})},a.name))}),c.jsx("button",{className:"mobile-menu-toggle",onClick:()=>l(!r),"aria-label":"Toggle mobile menu",children:r?"✕":"☰"})]}),c.jsx("div",{className:`mobile-menu ${r?"open":""}`,children:c.jsx("ul",{className:"mobile-menu-list",children:o.map(a=>c.jsx("li",{children:c.jsx("a",{href:a.href,className:`navbar-link ${e===i(a.href)?"active":""}`,onClick:()=>l(!1),children:a.name})},a.name))})})]})},Wf=()=>{const[e,t]=F.useState(!1);return F.useEffect(()=>{t(!0)},[]),c.jsxs("section",{id:"home",className:"hero",children:[c.jsx("style",{jsx:!0,children:`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 20px;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
          z-index: -1;
        }

        .hero-content {
          max-width: 800px;
          z-index: 1;
        }

        .hero-greeting {
          font-size: 1.2rem;
          color: var(--accent-color);
          margin-bottom: 1rem;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .hero-name {
          font-size: clamp(3rem, 8vw, 5rem);
          font-weight: 800;
          margin-bottom: 1rem;
          background: var(--gradient-2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
        }

        .hero-title {
          font-size: clamp(1.5rem, 4vw, 2rem);
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-weight: 500;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.4s forwards;
        }

        .hero-description {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          line-height: 1.8;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.6s forwards;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.8s forwards;
        }

        .hero-button {
          padding: 14px 28px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: 2px solid transparent;
        }

        .hero-button-primary {
          background: var(--gradient-2);
          color: white;
        }

        .hero-button-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(59, 130, 246, 0.4);
        }

        .hero-button-secondary {
          background: transparent;
          color: var(--accent-color);
          border-color: var(--accent-color);
        }

        .hero-button-secondary:hover {
          background: var(--accent-color);
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(59, 130, 246, 0.3);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 1s forwards, bounce 2s infinite 2s;
        }

        .scroll-indicator-text {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }

        .scroll-indicator-icon {
          font-size: 1.5rem;
          color: var(--accent-color);
          animation: bounce 2s infinite;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 0 15px;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .hero-button {
            width: 100%;
            max-width: 280px;
            justify-content: center;
          }
        }
      `}),c.jsxs("div",{className:"hero-content",children:[c.jsx("div",{className:"hero-greeting",children:"Hello, I'm"}),c.jsx("h1",{className:"hero-name",children:"Balogun Nathanael"}),c.jsx("div",{className:"hero-title",children:"Python & Django Developer | Backend Enthusiast"}),c.jsx("p",{className:"hero-description",children:"Passionate junior software developer focused on building robust backend applications with Python and Django. Currently expanding my skills in web development and cybersecurity to create impactful real-world solutions."}),c.jsxs("div",{className:"hero-buttons",children:[c.jsxs("a",{href:"#projects",className:"hero-button hero-button-primary",children:[c.jsx("span",{children:"🚀"}),"View Projects"]}),c.jsxs("a",{href:"#",className:"hero-button hero-button-secondary",onClick:n=>{n.preventDefault(),alert("CV download functionality would be implemented here. You could link to a PDF file or generate one dynamically.")},children:[c.jsx("span",{children:"📄"}),"Download CV"]})]})]}),c.jsxs("div",{className:"scroll-indicator",children:[c.jsx("div",{className:"scroll-indicator-text",children:"Scroll down"}),c.jsx("div",{className:"scroll-indicator-icon",children:"↓"})]})]})},Yf=()=>{const[e,t]=F.useState(!1);return F.useEffect(()=>{const n=()=>{const r=document.getElementById("about");r&&r.getBoundingClientRect().top<window.innerHeight*.75&&t(!0)};return window.addEventListener("scroll",n),n(),()=>window.removeEventListener("scroll",n)},[]),c.jsxs("section",{id:"about",className:"about",children:[c.jsx("style",{jsx:!0,children:`
        .about {
          background: linear-gradient(135deg, var(--primary-bg) 0%, var(--secondary-bg) 100%);
          position: relative;
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .about-header {
          text-align: center;
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .about-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .about-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 1rem;
          background: var(--gradient-2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .about-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 4rem;
          align-items: center;
        }

        .about-image {
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.8s ease-out 0.2s;
        }

        .about-image.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .image-placeholder {
          width: 100%;
          max-width: 300px;
          height: 300px;
          background: var(--gradient-2);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          color: white;
          margin: 0 auto;
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.3);
          position: relative;
          overflow: hidden;
        }

        .image-placeholder::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transform: rotate(45deg);
          animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
        }

        .about-text {
          opacity: 0;
          transform: translateX(30px);
          transition: all 0.8s ease-out 0.4s;
        }

        .about-text.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .about-description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .about-highlights {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .highlight-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 1.5rem;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .highlight-card:nth-child(1) {
          animation-delay: 0.6s;
        }

        .highlight-card:nth-child(2) {
          animation-delay: 0.8s;
        }

        .highlight-card:nth-child(3) {
          animation-delay: 1s;
        }

        .highlight-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(59, 130, 246, 0.2);
          border-color: var(--accent-color);
        }

        .highlight-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
          display: block;
        }

        .highlight-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .highlight-description {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .about-stats {
          display: flex;
          justify-content: space-around;
          margin: 3rem 0;
          padding: 2rem;
          background: var(--card-bg);
          border-radius: 15px;
          border: 1px solid var(--border-color);
        }

        .stat-item {
          text-align: center;
          opacity: 0;
          transform: scale(0.8);
          animation: scaleIn 0.6s ease-out forwards;
        }

        .stat-item:nth-child(1) {
          animation-delay: 1.2s;
        }

        .stat-item:nth-child(2) {
          animation-delay: 1.4s;
        }

        .stat-item:nth-child(3) {
          animation-delay: 1.6s;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--accent-color);
          display: block;
        }

        .stat-label {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-top: 0.5rem;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .about-image {
            order: 2;
          }

          .about-text {
            order: 1;
          }

          .image-placeholder {
            margin: 0 auto;
          }

          .about-stats {
            flex-direction: column;
            gap: 1.5rem;
          }

          .stat-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: left;
          }

          .stat-number {
            font-size: 2rem;
          }
        }
      `}),c.jsxs("div",{className:"about-container",children:[c.jsxs("div",{className:`about-header ${e?"visible":""}`,children:[c.jsx("h2",{className:"about-title",children:"About Me"}),c.jsx("p",{className:"about-subtitle",children:"Passionate developer focused on creating meaningful digital experiences"})]}),c.jsxs("div",{className:"about-content",children:[c.jsx("div",{className:`about-image ${e?"visible":""}`,children:c.jsx("div",{className:"image-placeholder",children:"👨‍💻"})}),c.jsxs("div",{className:`about-text ${e?"visible":""}`,children:[c.jsx("p",{className:"about-description",children:"I'm a Junior Software Developer with a strong passion for backend development and creating robust, scalable applications. My journey in tech started with Python and Django, and I've been expanding my skills ever since."}),c.jsx("p",{className:"about-description",children:"During my SIWES internship, I gained valuable hands-on experience in networking, which sparked my interest in cybersecurity and ethical hacking. I'm constantly learning and improving my problem-solving skills to tackle real-world challenges."}),c.jsx("p",{className:"about-description",children:"My goal is to build innovative applications that make a difference and work with clients globally to bring their ideas to life."}),c.jsxs("div",{className:"about-stats",children:[c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-number",children:"1+"}),c.jsx("span",{className:"stat-label",children:"Year Experience"})]}),c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-number",children:"10+"}),c.jsx("span",{className:"stat-label",children:"Projects Completed"})]}),c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-number",children:"5+"}),c.jsx("span",{className:"stat-label",children:"Technologies"})]})]})]})]}),c.jsxs("div",{className:"about-highlights",children:[c.jsxs("div",{className:"highlight-card",children:[c.jsx("span",{className:"highlight-icon",children:"🐍"}),c.jsx("h3",{className:"highlight-title",children:"Django Development"}),c.jsx("p",{className:"highlight-description",children:"Building robust web applications using Django framework with clean, maintainable code and best practices."})]}),c.jsxs("div",{className:"highlight-card",children:[c.jsx("span",{className:"highlight-icon",children:"🌐"}),c.jsx("h3",{className:"highlight-title",children:"Networking Experience"}),c.jsx("p",{className:"highlight-description",children:"Hands-on experience from SIWES internship in network configuration, troubleshooting, and security."})]}),c.jsxs("div",{className:"highlight-card",children:[c.jsx("span",{className:"highlight-icon",children:"🔒"}),c.jsx("h3",{className:"highlight-title",children:"Cybersecurity Interest"}),c.jsx("p",{className:"highlight-description",children:"Exploring ethical hacking and security best practices to build more secure and resilient applications."})]})]})]})]})},Qf=()=>{const[e,t]=F.useState(!1);F.useEffect(()=>{const r=()=>{const l=document.getElementById("skills");l&&l.getBoundingClientRect().top<window.innerHeight*.75&&t(!0)};return window.addEventListener("scroll",r),r(),()=>window.removeEventListener("scroll",r)},[]);const n=[{name:"Python",icon:"🐍",level:85,category:"Programming",description:"Core programming language for backend development"},{name:"Django",icon:"🌐",level:80,category:"Framework",description:"Web framework for building robust applications"},{name:"HTML",icon:"📝",level:90,category:"Frontend",description:"Markup language for web structure"},{name:"CSS",icon:"🎨",level:85,category:"Frontend",description:"Styling language for web design"},{name:"JavaScript",icon:"⚡",level:75,category:"Frontend",description:"Programming language for web interactivity"},{name:"Git & GitHub",icon:"📚",level:80,category:"Tools",description:"Version control and collaboration platform"},{name:"Networking Basics",icon:"🌍",level:70,category:"Infrastructure",description:"Network configuration and troubleshooting"},{name:"Cybersecurity",icon:"🔒",level:60,category:"Security",description:"Security principles and ethical hacking basics"}];return c.jsxs("section",{id:"skills",className:"skills",children:[c.jsx("style",{jsx:!0,children:`
        .skills {
          background: var(--primary-bg);
          position: relative;
        }

        .skills-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .skills-header {
          text-align: center;
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .skills-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .skills-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 1rem;
          background: var(--gradient-2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .skills-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .skill-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 15px;
          padding: 2rem;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(30px);
          position: relative;
          overflow: hidden;
        }

        .skill-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .skill-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(59, 130, 246, 0.25);
          border-color: var(--accent-color);
        }

        .skill-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--gradient-2);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .skill-card:hover::before {
          transform: scaleX(1);
        }

        .skill-header {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .skill-icon {
          font-size: 2.5rem;
          margin-right: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 12px;
          flex-shrink: 0;
        }

        .skill-info {
          flex: 1;
        }

        .skill-name {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .skill-category {
          font-size: 0.85rem;
          color: var(--accent-color);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .skill-description {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .skill-level {
          margin-top: 1rem;
        }

        .skill-level-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .skill-level-text {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .skill-level-percentage {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--accent-color);
        }

        .skill-progress-bar {
          width: 100%;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
          position: relative;
        }

        .skill-progress-fill {
          height: 100%;
          background: var(--gradient-2);
          border-radius: 4px;
          width: 0;
          transition: width 1.5s ease-out;
          position: relative;
          overflow: hidden;
        }

        .skill-progress-fill::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .skills-categories {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease-out 0.2s;
        }

        .skills-categories.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .category-badge {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          color: var(--text-secondary);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .category-badge:hover {
          background: var(--accent-color);
          color: white;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .skill-card {
            padding: 1.5rem;
          }

          .skill-icon {
            width: 50px;
            height: 50px;
            font-size: 2rem;
          }

          .skill-name {
            font-size: 1.1rem;
          }
        }
      `}),c.jsxs("div",{className:"skills-container",children:[c.jsxs("div",{className:`skills-header ${e?"visible":""}`,children:[c.jsx("h2",{className:"skills-title",children:"Skills & Expertise"}),c.jsx("p",{className:"skills-subtitle",children:"A comprehensive overview of my technical skills and areas of expertise"})]}),c.jsxs("div",{className:`skills-categories ${e?"visible":""}`,children:[c.jsx("div",{className:"category-badge",children:"Programming"}),c.jsx("div",{className:"category-badge",children:"Framework"}),c.jsx("div",{className:"category-badge",children:"Frontend"}),c.jsx("div",{className:"category-badge",children:"Tools"}),c.jsx("div",{className:"category-badge",children:"Infrastructure"}),c.jsx("div",{className:"category-badge",children:"Security"})]}),c.jsx("div",{className:"skills-grid",children:n.map((r,l)=>c.jsxs("div",{className:`skill-card ${e?"visible":""}`,style:{transitionDelay:`${.1*l}s`},children:[c.jsxs("div",{className:"skill-header",children:[c.jsx("div",{className:"skill-icon",children:r.icon}),c.jsxs("div",{className:"skill-info",children:[c.jsx("h3",{className:"skill-name",children:r.name}),c.jsx("div",{className:"skill-category",children:r.category})]})]}),c.jsx("p",{className:"skill-description",children:r.description}),c.jsxs("div",{className:"skill-level",children:[c.jsxs("div",{className:"skill-level-header",children:[c.jsx("span",{className:"skill-level-text",children:"Proficiency"}),c.jsxs("span",{className:"skill-level-percentage",children:[r.level,"%"]})]}),c.jsx("div",{className:"skill-progress-bar",children:c.jsx("div",{className:`skill-progress-fill ${e?"visible":""}`,style:{width:e?`${r.level}%`:"0%",transitionDelay:`${.1*l+.5}s`}})})]})]},r.name))})]})]})},Ql=[{id:1,title:"Personal Portfolio Website",description:"A modern, responsive portfolio website built with React and Vite. Features smooth animations, dark theme, and fully responsive design. Includes sections for hero, about, skills, projects, and contact.",techStack:["React","Vite","CSS","JavaScript","HTML"],githubLink:"https://github.com/balogunnathanael/portfolio",liveDemo:"https://balogunnathanael-portfolio.netlify.app",image:"🌐",featured:!0,category:"Web Development"},{id:2,title:"Patient Management System",description:"A comprehensive patient management system built with Django. Features include patient registration, appointment scheduling, medical records management, and administrative dashboard. Implements authentication and authorization.",techStack:["Python","Django","PostgreSQL","React","REST API"],githubLink:"https://github.com/TheFallin1/Patient-Management-System-.git",liveDemo:"#",image:"🏥",featured:!0,category:"Healthcare"},{id:3,title:"Internship Monitoring System",description:"An internship monitoring and tracking system for educational institutions. Allows students to submit weekly reports, supervisors to provide feedback, and administrators to monitor progress.",techStack:["Python","Django","SQLite","JavaScript","jQuery"],githubLink:"https://github.com/TheFallin1/MTU-SIWES-MONITOR.git",liveDemo:"#",image:"📊",featured:!1,category:"Web Application"},{id:4,title:"Network Security Scanner",description:"A command-line network security scanner built with Python. Performs port scanning, service detection, and vulnerability assessment. Includes basic ethical hacking tools.",techStack:["Python","Socket Programming","Nmap","Security"],githubLink:"https://github.com/balogunnathanael/network-scanner",liveDemo:"#",image:"🔒",featured:!1,category:"Cybersecurity"},{id:5,title:"Task Management API",description:"RESTful API for task management with Django REST Framework. Includes CRUD operations, user authentication, pagination, and API documentation with Swagger.",techStack:["Python","Django REST Framework","PostgreSQL","JWT"],githubLink:"https://github.com/balogunnathanael/task-api",liveDemo:"#",image:"⚡",featured:!1,category:"API Development"},{id:6,title:"Weather Dashboard",description:"A weather dashboard that displays current weather and forecasts for multiple cities. Integrates with weather APIs and features data visualization with charts.",techStack:["JavaScript","HTML","CSS","Weather API","Chart.js"],githubLink:"https://github.com/balogunnathanael/weather-dashboard",liveDemo:"https://balogunnathanael-weather.netlify.app",image:"🌤️",featured:!1,category:"Frontend"}],Kf=["All","Web Development","Web Application","Healthcare","Cybersecurity","API Development","Frontend"],Xf=()=>{const[e,t]=F.useState(!1),[n,r]=F.useState("All"),[l,o]=F.useState(Ql);F.useEffect(()=>{const a=()=>{const s=document.getElementById("projects");s&&s.getBoundingClientRect().top<window.innerHeight*.75&&t(!0)};return window.addEventListener("scroll",a),a(),()=>window.removeEventListener("scroll",a)},[]),F.useEffect(()=>{o(n==="All"?Ql:Ql.filter(a=>a.category===n))},[n]);const i=a=>{a.liveDemo&&a.liveDemo!=="#"?window.open(a.liveDemo,"_blank"):a.githubLink&&window.open(a.githubLink,"_blank")};return c.jsxs("section",{id:"projects",className:"projects",children:[c.jsx("style",{jsx:!0,children:`
        .projects {
          background: linear-gradient(135deg, var(--secondary-bg) 0%, var(--primary-bg) 100%);
          position: relative;
        }

        .projects-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .projects-header {
          text-align: center;
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .projects-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .projects-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 1rem;
          background: var(--gradient-2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .projects-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .projects-filters {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease-out 0.2s;
        }

        .projects-filters.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .filter-btn {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 0.5rem 1.2rem;
          border-radius: 25px;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: capitalize;
        }

        .filter-btn:hover {
          background: rgba(59, 130, 246, 0.1);
          border-color: var(--accent-color);
          color: var(--text-primary);
          transform: translateY(-2px);
        }

        .filter-btn.active {
          background: var(--gradient-2);
          color: white;
          border-color: transparent;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .project-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 15px;
          overflow: hidden;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(30px);
          cursor: pointer;
          position: relative;
        }

        .project-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(59, 130, 246, 0.3);
          border-color: var(--accent-color);
        }

        .project-card.featured {
          border-color: var(--accent-color);
        }

        .project-card.featured::before {
          content: '⭐ Featured';
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: var(--gradient-2);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          z-index: 1;
        }

        .project-image {
          height: 200px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          position: relative;
          overflow: hidden;
        }

        .project-image::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.05), transparent);
          transform: rotate(45deg);
          animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
        }

        .project-content {
          padding: 2rem;
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .project-category {
          font-size: 0.8rem;
          color: var(--accent-color);
          background: rgba(59, 130, 246, 0.1);
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1rem;
          display: inline-block;
        }

        .project-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech-tag {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.8rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          flex: 1;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          text-align: center;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .project-link-primary {
          background: var(--gradient-2);
          color: white;
        }

        .project-link-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
        }

        .project-link-secondary {
          background: transparent;
          color: var(--accent-color);
          border: 1px solid var(--accent-color);
        }

        .project-link-secondary:hover {
          background: var(--accent-color);
          color: white;
          transform: translateY(-2px);
        }

        .project-link.disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .no-projects {
          text-align: center;
          padding: 3rem;
          color: var(--text-secondary);
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .project-content {
            padding: 1.5rem;
          }

          .project-links {
            flex-direction: column;
          }

          .filter-btn {
            font-size: 0.8rem;
            padding: 0.4rem 1rem;
          }
        }
      `}),c.jsxs("div",{className:"projects-container",children:[c.jsxs("div",{className:`projects-header ${e?"visible":""}`,children:[c.jsx("h2",{className:"projects-title",children:"Featured Projects"}),c.jsx("p",{className:"projects-subtitle",children:"Explore my recent work and personal projects showcasing my skills and expertise"})]}),c.jsx("div",{className:`projects-filters ${e?"visible":""}`,children:Kf.map(a=>c.jsx("button",{className:`filter-btn ${n===a?"active":""}`,onClick:()=>r(a),children:a},a))}),c.jsx("div",{className:"projects-grid",children:l.length>0?l.map((a,s)=>c.jsxs("div",{className:`project-card ${a.featured?"featured":""} ${e?"visible":""}`,style:{transitionDelay:`${.1*s}s`},onClick:()=>i(a),children:[c.jsx("div",{className:"project-image",children:a.image}),c.jsxs("div",{className:"project-content",children:[c.jsx("div",{className:"project-category",children:a.category}),c.jsx("h3",{className:"project-title",children:a.title}),c.jsx("p",{className:"project-description",children:a.description}),c.jsx("div",{className:"project-tech",children:a.techStack.map(d=>c.jsx("span",{className:"tech-tag",children:d},d))}),c.jsxs("div",{className:"project-links",children:[c.jsxs("a",{href:a.githubLink,className:"project-link project-link-secondary",onClick:d=>{d.stopPropagation(),window.open(a.githubLink,"_blank")},children:[c.jsx("span",{children:"📚"}),"GitHub"]}),c.jsxs("a",{href:a.liveDemo,className:`project-link project-link-primary ${a.liveDemo==="#"?"disabled":""}`,onClick:d=>{d.stopPropagation(),a.liveDemo!=="#"?window.open(a.liveDemo,"_blank"):d.preventDefault()},children:[c.jsx("span",{children:"🚀"}),a.liveDemo==="#"?"Demo N/A":"Live Demo"]})]})]})]},a.id)):c.jsx("div",{className:"no-projects",children:"No projects found in this category."})})]})]})};class er{constructor(t=0,n="Network Error"){this.status=t,this.text=n}}const Gf=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},ee={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:Gf()},Fi=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},Jf=(e,t="https://api.emailjs.com")=>{if(!e)return;const n=Fi(e);ee.publicKey=n.publicKey,ee.blockHeadless=n.blockHeadless,ee.storageProvider=n.storageProvider,ee.blockList=n.blockList,ee.limitRate=n.limitRate,ee.origin=n.origin||t},oc=async(e,t,n={})=>{const r=await fetch(ee.origin+e,{method:"POST",headers:n,body:t}),l=await r.text(),o=new er(r.status,l);if(r.ok)return o;throw o},ic=(e,t,n)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n||typeof n!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},Zf=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},ac=e=>e.webdriver||!e.languages||e.languages.length===0,sc=()=>new er(451,"Unavailable For Headless Browser"),qf=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},ep=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},tp=(e,t)=>e instanceof FormData?e.get(t):e[t],uc=(e,t)=>{if(ep(e))return!1;qf(e.list,e.watchVariable);const n=tp(t,e.watchVariable);return typeof n!="string"?!1:e.list.includes(n)},cc=()=>new er(403,"Forbidden"),np=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},rp=async(e,t,n)=>{const r=Number(await n.get(e)||0);return t-Date.now()+r},dc=async(e,t,n)=>{if(!t.throttle||!n)return!1;np(t.throttle,t.id);const r=t.id||e;return await rp(r,t.throttle,n)>0?!0:(await n.set(r,Date.now().toString()),!1)},fc=()=>new er(429,"Too Many Requests"),lp=async(e,t,n,r)=>{const l=Fi(r),o=l.publicKey||ee.publicKey,i=l.blockHeadless||ee.blockHeadless,a=l.storageProvider||ee.storageProvider,s={...ee.blockList,...l.blockList},d={...ee.limitRate,...l.limitRate};return i&&ac(navigator)?Promise.reject(sc()):(ic(o,e,t),Zf(n),n&&uc(s,n)?Promise.reject(cc()):await dc(location.pathname,d,a)?Promise.reject(fc()):oc("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:o,service_id:e,template_id:t,template_params:n}),{"Content-type":"application/json"}))},op=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},ip=e=>typeof e=="string"?document.querySelector(e):e,ap=async(e,t,n,r)=>{const l=Fi(r),o=l.publicKey||ee.publicKey,i=l.blockHeadless||ee.blockHeadless,a=ee.storageProvider||l.storageProvider,s={...ee.blockList,...l.blockList},d={...ee.limitRate,...l.limitRate};if(i&&ac(navigator))return Promise.reject(sc());const g=ip(n);ic(o,e,t),op(g);const h=new FormData(g);return uc(s,h)?Promise.reject(cc()):await dc(location.pathname,d,a)?Promise.reject(fc()):(h.append("lib_version","4.4.1"),h.append("service_id",e),h.append("template_id",t),h.append("user_id",o),oc("/api/v1.0/email/send-form",h))},pc={init:Jf,send:lp,sendForm:ap,EmailJSResponseStatus:er},sp="demo_public_key",up="demo_service",cp="demo_template";pc.init(sp);const dp=()=>{const[e,t]=F.useState(!1),[n,r]=F.useState({name:"",email:"",message:""}),[l,o]=F.useState(!1),[i,a]=F.useState("");F.useEffect(()=>{const h=()=>{const m=document.getElementById("contact");m&&m.getBoundingClientRect().top<window.innerHeight*.75&&t(!0)};return window.addEventListener("scroll",h),h(),()=>window.removeEventListener("scroll",h)},[]);const s=h=>{const{name:m,value:x}=h.target;r(w=>({...w,[m]:x}))},d=async h=>{h.preventDefault(),o(!0),a("");try{const m={from_name:n.name,from_email:n.email,message:n.message,to_email:"balogunmotolani16@gmail.com"};await pc.send(up,cp,m),a("success"),r({name:"",email:"",message:""}),setTimeout(()=>a(""),5e3)}catch(m){console.error("EmailJS Error:",m),m.text&&m.text.includes("public key")?a("error-config"):m.text&&m.text.includes("service")?a("error-service"):a("error"),setTimeout(()=>a(""),5e3)}finally{o(!1)}},g=[{icon:"📧",label:"Email",value:"balogunmotolani16@gmail.com",action:"mailto:balogunmotolani16@gmail.com"},{icon:"📱",label:"Phone/WhatsApp",value:"+2349014580163",action:"tel:+2349014580163"},{icon:"📍",label:"Location",value:"Available for remote work globally",action:null}];return c.jsxs("section",{id:"contact",className:"contact",children:[c.jsx("style",{jsx:!0,children:`
        .contact {
          background: var(--primary-bg);
          position: relative;
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .contact-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .contact-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 1rem;
          background: var(--gradient-2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .contact-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-info {
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.8s ease-out 0.2s;
        }

        .contact-info.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .contact-form-wrapper {
          opacity: 0;
          transform: translateX(30px);
          transition: all 0.8s ease-out 0.4s;
        }

        .contact-form-wrapper.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .contact-info-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 15px;
          padding: 2rem;
          margin-bottom: 2rem;
        }

        .contact-info-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
        }

        .contact-info-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .contact-info-items {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .contact-info-item:hover {
          background: rgba(59, 130, 246, 0.1);
          transform: translateX(5px);
        }

        .contact-info-icon {
          font-size: 1.5rem;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 10px;
          flex-shrink: 0;
        }

        .contact-info-details {
          flex: 1;
        }

        .contact-info-label {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 0.25rem;
        }

        .contact-info-value {
          font-size: 1.1rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        .contact-info-link {
          color: var(--accent-color);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-info-link:hover {
          color: var(--accent-hover);
        }

        .contact-form {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 15px;
          padding: 2rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
          font-weight: 500;
          font-size: 0.95rem;
        }

        .form-label .required {
          color: var(--accent-color);
          margin-left: 0.25rem;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          color: var(--text-primary);
          font-size: 1rem;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--accent-color);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-submit {
          width: 100%;
          padding: 1rem 2rem;
          background: var(--gradient-2);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .form-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(59, 130, 246, 0.3);
        }

        .form-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .form-submit.loading {
          color: transparent;
        }

        .form-submit.loading::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        .form-message {
          margin-top: 1rem;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          text-align: center;
          font-size: 0.9rem;
          animation: fadeInUp 0.3s ease-out;
        }

        .form-message.success {
          background: rgba(16, 185, 129, 0.1);
          color: var(--success-color);
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .form-message.error {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.3);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }

        .social-link {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: var(--accent-color);
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .contact-info {
            order: 2;
          }

          .contact-form-wrapper {
            order: 1;
          }

          .contact-form {
            padding: 1.5rem;
          }

          .contact-info-card {
            padding: 1.5rem;
          }
        }
      `}),c.jsxs("div",{className:"contact-container",children:[c.jsxs("div",{className:`contact-header ${e?"visible":""}`,children:[c.jsx("h2",{className:"contact-title",children:"Get In Touch"}),c.jsx("p",{className:"contact-subtitle",children:"Feel free to reach out if you'd like to collaborate on a project or just have a chat!"})]}),c.jsxs("div",{className:"contact-content",children:[c.jsx("div",{className:`contact-info ${e?"visible":""}`,children:c.jsxs("div",{className:"contact-info-card",children:[c.jsx("h3",{className:"contact-info-title",children:"Let's Connect"}),c.jsx("p",{className:"contact-info-description",children:"I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!"}),c.jsx("div",{className:"contact-info-items",children:g.map((h,m)=>c.jsxs("div",{className:"contact-info-item",children:[c.jsx("div",{className:"contact-info-icon",children:h.icon}),c.jsxs("div",{className:"contact-info-details",children:[c.jsx("div",{className:"contact-info-label",children:h.label}),c.jsx("div",{className:"contact-info-value",children:h.action?c.jsx("a",{href:h.action,className:"contact-info-link",onClick:x=>{h.action.startsWith("mailto:")||h.action.startsWith("tel:")||x.preventDefault()},children:h.value}):h.value})]})]},m))}),c.jsxs("div",{className:"social-links",children:[c.jsx("a",{href:"https://github.com/balogunnathanael",className:"social-link",target:"_blank",rel:"noopener noreferrer",children:"📚"}),c.jsx("a",{href:"https://linkedin.com/in/balogunnathanael",className:"social-link",target:"_blank",rel:"noopener noreferrer",children:"💼"}),c.jsx("a",{href:"https://twitter.com/balogunnathanael",className:"social-link",target:"_blank",rel:"noopener noreferrer",children:"🐦"})]})]})}),c.jsx("div",{className:`contact-form-wrapper ${e?"visible":""}`,children:c.jsxs("form",{className:"contact-form",onSubmit:d,children:[c.jsxs("div",{className:"form-group",children:[c.jsxs("label",{htmlFor:"name",className:"form-label",children:["Name ",c.jsx("span",{className:"required",children:"*"})]}),c.jsx("input",{type:"text",id:"name",name:"name",value:n.name,onChange:s,required:!0,className:"form-input",placeholder:"Your name"})]}),c.jsxs("div",{className:"form-group",children:[c.jsxs("label",{htmlFor:"email",className:"form-label",children:["Email ",c.jsx("span",{className:"required",children:"*"})]}),c.jsx("input",{type:"email",id:"email",name:"email",value:n.email,onChange:s,required:!0,className:"form-input",placeholder:"your.email@example.com"})]}),c.jsxs("div",{className:"form-group",children:[c.jsxs("label",{htmlFor:"message",className:"form-label",children:["Message ",c.jsx("span",{className:"required",children:"*"})]}),c.jsx("textarea",{id:"message",name:"message",value:n.message,onChange:s,required:!0,className:"form-textarea",placeholder:"Your message here..."})]}),c.jsx("button",{type:"submit",disabled:l,className:`form-submit ${l?"loading":""}`,children:l?"":"Send Message"}),i&&c.jsx("div",{className:`form-message ${i}`,children:i==="success"?"✅ Message sent successfully! I'll get back to you soon.":i==="error-config"?"⚙️ EmailJS not configured. Please check EMAILJS_SETUP.md for instructions.":i==="error-service"?"📧 Email service not configured. Please check EmailJS dashboard.":"❌ Something went wrong. Please try again."})]})})]})]})]})},fp=()=>{const[e]=F.useState(new Date().getFullYear()),t=[{name:"GitHub",icon:"📚",url:"https://github.com/balogunnathanael"},{name:"LinkedIn",icon:"💼",url:"https://linkedin.com/in/balogunnathanael"},{name:"Twitter",icon:"🐦",url:"https://twitter.com/balogunnathanael"},{name:"Email",icon:"📧",url:"mailto:balogunnathanael@example.com"}],n=[{name:"Home",href:"#home"},{name:"About",href:"#about"},{name:"Skills",href:"#skills"},{name:"Projects",href:"#projects"},{name:"Contact",href:"#contact"}],r=(l,o)=>{l.preventDefault();const i=document.querySelector(o);i&&i.scrollIntoView({behavior:"smooth",block:"start"})};return c.jsxs("footer",{className:"footer",children:[c.jsx("style",{jsx:!0,children:`
        .footer {
          background: linear-gradient(135deg, var(--secondary-bg) 0%, var(--primary-bg) 100%);
          border-top: 1px solid var(--border-color);
          padding: 3rem 0 2rem;
          position: relative;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: var(--gradient-2);
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 2rem;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-logo {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-primary);
          text-decoration: none;
          background: var(--gradient-2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
        }

        .footer-description {
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 400px;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-link {
          color: var(--text-secondary);
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 0.95rem;
        }

        .footer-link:hover {
          color: var(--accent-color);
          transform: translateX(5px);
        }

        .social-links {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .social-link {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: var(--accent-color);
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-copyright {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .footer-copyright span {
          color: var(--accent-color);
        }

        .footer-bottom-links {
          display: flex;
          gap: 2rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-bottom-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .footer-bottom-link:hover {
          color: var(--accent-color);
        }

        .footer-heart {
          color: #ef4444;
          animation: heartbeat 1.5s ease-in-out infinite;
        }

        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .footer-badge {
          display: inline-block;
          background: rgba(59, 130, 246, 0.1);
          color: var(--accent-color);
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.75rem;
          font-weight: 600;
          margin-top: 1rem;
          border: 1px solid rgba(59, 130, 246, 0.3);
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .footer-brand {
            align-items: center;
          }

          .footer-section {
            align-items: center;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }

          .footer-bottom-links {
            justify-content: center;
          }

          .social-links {
            justify-content: center;
          }
        }
      `}),c.jsxs("div",{className:"footer-container",children:[c.jsxs("div",{className:"footer-content",children:[c.jsxs("div",{className:"footer-brand",children:[c.jsx("a",{href:"#home",className:"footer-logo",children:"Balogun Nathanael"}),c.jsx("p",{className:"footer-description",children:"Junior Software Developer passionate about building robust backend applications and exploring the world of cybersecurity. Always eager to learn and take on new challenges."}),c.jsx("div",{className:"footer-badge",children:"Available for hire"})]}),c.jsxs("div",{className:"footer-section",children:[c.jsx("h3",{className:"footer-title",children:"Quick Links"}),c.jsx("ul",{className:"footer-links",children:n.map(l=>c.jsx("li",{children:c.jsx("a",{href:l.href,className:"footer-link",onClick:o=>r(o,l.href),children:l.name})},l.name))})]}),c.jsxs("div",{className:"footer-section",children:[c.jsx("h3",{className:"footer-title",children:"Connect With Me"}),c.jsx("div",{className:"social-links",children:t.map(l=>c.jsx("a",{href:l.url,className:"social-link",target:"_blank",rel:"noopener noreferrer","aria-label":l.name,children:l.icon},l.name))})]})]}),c.jsxs("div",{className:"footer-bottom",children:[c.jsxs("div",{className:"footer-copyright",children:["© ",e," ",c.jsx("span",{children:"Balogun Nathanael"}),". All rights reserved. Made with ",c.jsx("span",{className:"footer-heart",children:"❤️"})," and lots of ☕"]}),c.jsxs("div",{className:"footer-bottom-links",children:[c.jsx("a",{href:"#",className:"footer-bottom-link",children:"Privacy Policy"}),c.jsx("a",{href:"#",className:"footer-bottom-link",children:"Terms of Service"})]})]})]})]})};function pp(){const[e,t]=F.useState("home");return F.useEffect(()=>{const n=()=>{const r=["home","about","skills","projects","contact"],l=window.scrollY+100;for(const o of r){const i=document.getElementById(o);if(i){const{offsetTop:a,offsetHeight:s}=i;if(l>=a&&l<a+s){t(o);break}}}};return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)},[]),c.jsxs("div",{className:"app",children:[c.jsx(Bf,{activeSection:e}),c.jsxs("main",{children:[c.jsx(Wf,{}),c.jsx(Yf,{}),c.jsx(Qf,{}),c.jsx(Xf,{}),c.jsx(dp,{})]}),c.jsx(fp,{})]})}Kl.createRoot(document.getElementById("root")).render(c.jsx(Tc.StrictMode,{children:c.jsx(pp,{})}));
