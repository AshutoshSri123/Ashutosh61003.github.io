import{e as ks,g as Id,j as O,r as X,t as Ju,l as Zu,L as Rs}from"./index-DVuq4byY.js";const Xm=()=>{};var ec={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Jm=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],l=n[t++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},vd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,l=o?n[i+1]:0,u=i+2<n.length,c=u?n[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,g=c&63;u||(g=64,o||(m=64)),r.push(t[d],t[p],t[m],t[g])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Td(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Jm(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const p=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new Zm;const m=s<<2|l>>4;if(r.push(m),c!==64){const g=l<<4&240|c>>2;if(r.push(g),p!==64){const C=c<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Zm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eg=function(n){const e=Td(n);return vd.encodeByteArray(e,!0)},Ps=function(n){return eg(n).replace(/\./g,"")},Ad=function(n){try{return vd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function tg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ng=()=>tg().__FIREBASE_DEFAULTS__,rg=()=>{if(typeof process>"u"||typeof ec>"u")return;const n=ec.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ig=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ad(n[1]);return e&&JSON.parse(e)},eo=()=>{try{return Xm()||ng()||rg()||ig()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},bd=n=>{var e,t;return(t=(e=eo())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},sg=n=>{const e=bd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Sd=()=>{var n;return(n=eo())==null?void 0:n.config},Cd=n=>{var e;return(e=eo())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function kd(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function ag(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Ps(JSON.stringify(t)),Ps(JSON.stringify(o)),""].join(".")}const ii={};function lg(){const n={prod:[],emulator:[]};for(const e of Object.keys(ii))ii[e]?n.emulator.push(e):n.prod.push(e);return n}function ug(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let tc=!1;function Rd(n,e){if(typeof window>"u"||typeof document>"u"||!br(window.location.host)||ii[n]===e||ii[n]||tc)return;ii[n]=e;function t(m){return`__firebase__banner__${m}`}const r="__firebase__banner",s=lg().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,g){m.setAttribute("width","24"),m.setAttribute("id",g),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function c(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{tc=!0,o()},m}function d(m,g){m.setAttribute("id",g),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=ug(r),g=t("text"),C=document.getElementById(g)||document.createElement("span"),k=t("learnmore"),N=document.getElementById(k)||document.createElement("a"),x=t("preprendIcon"),z=document.getElementById(x)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const F=m.element;l(F),d(N,k);const G=c();u(z,x),F.append(z,C,N,G),document.body.appendChild(F)}s?(C.innerText="Preview backend disconnected.",z.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(z.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ke())}function hg(){var e;const n=(e=eo())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function fg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function pg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mg(){const n=Ke();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function gg(){return!hg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yg(){try{return typeof indexedDB=="object"}catch{return!1}}function _g(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg="FirebaseError";class Gt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=wg,Object.setPrototypeOf(this,Gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ci.prototype.create)}}class Ci{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Eg(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Gt(i,l,r)}}function Eg(n,e){return n.replace(Ig,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Ig=/\{\$([^}]+)}/g;function Tg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ln(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(nc(s)&&nc(o)){if(!Ln(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function nc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function vg(n,e){const t=new Ag(n,e);return t.subscribe.bind(t)}class Ag{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");bg(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Bo),i.error===void 0&&(i.error=Bo),i.complete===void 0&&(i.complete=Bo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Bo(){}/**
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
 */function Ae(n){return n&&n._delegate?n._delegate:n}class Fn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Pn="[DEFAULT]";/**
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
 */class Sg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new og;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kg(e))try{this.getOrInitializeService({instanceIdentifier:Pn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Pn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pn){return this.instances.has(e)}getOptions(e=Pn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Cg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pn){return this.component?this.component.multipleInstances?e:Pn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cg(n){return n===Pn?void 0:n}function kg(n){return n.instantiationMode==="EAGER"}/**
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
 */class Rg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Sg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ie||(ie={}));const Pg={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},xg=ie.INFO,Ng={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},Dg=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Ng[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ga{constructor(e){this.name=e,this._logLevel=xg,this._logHandler=Dg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Pg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const Vg=(n,e)=>e.some(t=>n instanceof t);let rc,ic;function Og(){return rc||(rc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mg(){return ic||(ic=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pd=new WeakMap,ua=new WeakMap,xd=new WeakMap,zo=new WeakMap,Wa=new WeakMap;function Lg(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(an(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Pd.set(t,n)}).catch(()=>{}),Wa.set(e,n),e}function Fg(n){if(ua.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});ua.set(n,e)}let ca={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ua.get(n);if(e==="objectStoreNames")return n.objectStoreNames||xd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return an(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ug(n){ca=n(ca)}function jg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(qo(this),e,...t);return xd.set(r,e.sort?e.sort():[e]),an(r)}:Mg().includes(n)?function(...e){return n.apply(qo(this),e),an(Pd.get(this))}:function(...e){return an(n.apply(qo(this),e))}}function Bg(n){return typeof n=="function"?jg(n):(n instanceof IDBTransaction&&Fg(n),Vg(n,Og())?new Proxy(n,ca):n)}function an(n){if(n instanceof IDBRequest)return Lg(n);if(zo.has(n))return zo.get(n);const e=Bg(n);return e!==n&&(zo.set(n,e),Wa.set(e,n)),e}const qo=n=>Wa.get(n);function zg(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),l=an(o);return r&&o.addEventListener("upgradeneeded",u=>{r(an(o.result),u.oldVersion,u.newVersion,an(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const qg=["get","getKey","getAll","getAllKeys","count"],$g=["put","add","delete","clear"],$o=new Map;function sc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if($o.get(e))return $o.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=$g.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||qg.includes(t)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[t](...l),i&&u.done]))[0]};return $o.set(e,s),s}Ug(n=>({...n,get:(e,t,r)=>sc(e,t)||n.get(e,t,r),has:(e,t)=>!!sc(e,t)||n.has(e,t)}));/**
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
 */class Hg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Gg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Gg(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ha="@firebase/app",oc="0.14.0";/**
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
 */const Bt=new Ga("@firebase/app"),Wg="@firebase/app-compat",Kg="@firebase/analytics-compat",Qg="@firebase/analytics",Yg="@firebase/app-check-compat",Xg="@firebase/app-check",Jg="@firebase/auth",Zg="@firebase/auth-compat",ey="@firebase/database",ty="@firebase/data-connect",ny="@firebase/database-compat",ry="@firebase/functions",iy="@firebase/functions-compat",sy="@firebase/installations",oy="@firebase/installations-compat",ay="@firebase/messaging",ly="@firebase/messaging-compat",uy="@firebase/performance",cy="@firebase/performance-compat",hy="@firebase/remote-config",dy="@firebase/remote-config-compat",fy="@firebase/storage",py="@firebase/storage-compat",my="@firebase/firestore",gy="@firebase/ai",yy="@firebase/firestore-compat",_y="firebase",wy="12.0.0";/**
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
 */const da="[DEFAULT]",Ey={[ha]:"fire-core",[Wg]:"fire-core-compat",[Qg]:"fire-analytics",[Kg]:"fire-analytics-compat",[Xg]:"fire-app-check",[Yg]:"fire-app-check-compat",[Jg]:"fire-auth",[Zg]:"fire-auth-compat",[ey]:"fire-rtdb",[ty]:"fire-data-connect",[ny]:"fire-rtdb-compat",[ry]:"fire-fn",[iy]:"fire-fn-compat",[sy]:"fire-iid",[oy]:"fire-iid-compat",[ay]:"fire-fcm",[ly]:"fire-fcm-compat",[uy]:"fire-perf",[cy]:"fire-perf-compat",[hy]:"fire-rc",[dy]:"fire-rc-compat",[fy]:"fire-gcs",[py]:"fire-gcs-compat",[my]:"fire-fst",[yy]:"fire-fst-compat",[gy]:"fire-vertex","fire-js":"fire-js",[_y]:"fire-js-all"};/**
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
 */const xs=new Map,Iy=new Map,fa=new Map;function ac(n,e){try{n.container.addComponent(e)}catch(t){Bt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function gr(n){const e=n.name;if(fa.has(e))return Bt.debug(`There were multiple attempts to register component ${e}.`),!1;fa.set(e,n);for(const t of xs.values())ac(t,n);for(const t of Iy.values())ac(t,n);return!0}function Ka(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Et(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Ty={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ln=new Ci("app","Firebase",Ty);/**
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
 */class vy{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ln.create("app-deleted",{appName:this._name})}}/**
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
 */const Sr=wy;function Nd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:da,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw ln.create("bad-app-name",{appName:String(i)});if(t||(t=Sd()),!t)throw ln.create("no-options");const s=xs.get(i);if(s){if(Ln(t,s.options)&&Ln(r,s.config))return s;throw ln.create("duplicate-app",{appName:i})}const o=new Rg(i);for(const u of fa.values())o.addComponent(u);const l=new vy(t,r,o);return xs.set(i,l),l}function Dd(n=da){const e=xs.get(n);if(!e&&n===da&&Sd())return Nd();if(!e)throw ln.create("no-app",{appName:n});return e}function un(n,e,t){let r=Ey[n]??n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bt.warn(o.join(" "));return}gr(new Fn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Ay="firebase-heartbeat-database",by=1,fi="firebase-heartbeat-store";let Ho=null;function Vd(){return Ho||(Ho=zg(Ay,by,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(fi)}catch(t){console.warn(t)}}}}).catch(n=>{throw ln.create("idb-open",{originalErrorMessage:n.message})})),Ho}async function Sy(n){try{const t=(await Vd()).transaction(fi),r=await t.objectStore(fi).get(Od(n));return await t.done,r}catch(e){if(e instanceof Gt)Bt.warn(e.message);else{const t=ln.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Bt.warn(t.message)}}}async function lc(n,e){try{const r=(await Vd()).transaction(fi,"readwrite");await r.objectStore(fi).put(e,Od(n)),await r.done}catch(t){if(t instanceof Gt)Bt.warn(t.message);else{const r=ln.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Bt.warn(r.message)}}}function Od(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Cy=1024,ky=30;class Ry{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new xy(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=uc();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>ky){const o=Ny(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Bt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=uc(),{heartbeatsToSend:r,unsentEntries:i}=Py(this._heartbeatsCache.heartbeats),s=Ps(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Bt.warn(t),""}}}function uc(){return new Date().toISOString().substring(0,10)}function Py(n,e=Cy){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),cc(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),cc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class xy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yg()?_g().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Sy(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return lc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return lc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function cc(n){return Ps(JSON.stringify({version:2,heartbeats:n})).length}function Ny(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Dy(n){gr(new Fn("platform-logger",e=>new Hg(e),"PRIVATE")),gr(new Fn("heartbeat",e=>new Ry(e),"PRIVATE")),un(ha,oc,n),un(ha,oc,"esm2020"),un("fire-js","")}Dy("");function Md(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Vy=Md,Ld=new Ci("auth","Firebase",Md());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=new Ga("@firebase/auth");function Oy(n,...e){Ns.logLevel<=ie.WARN&&Ns.warn(`Auth (${Sr}): ${n}`,...e)}function gs(n,...e){Ns.logLevel<=ie.ERROR&&Ns.error(`Auth (${Sr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(n,...e){throw Ya(n,...e)}function Tt(n,...e){return Ya(n,...e)}function Qa(n,e,t){const r={...Vy(),[e]:t};return new Ci("auth","Firebase",r).create(e,{appName:n.name})}function Vn(n){return Qa(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function My(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Dt(n,"argument-error"),Qa(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ya(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Ld.create(n,...e)}function J(n,e,...t){if(!n)throw Ya(e,...t)}function Ut(n){const e="INTERNAL ASSERTION FAILED: "+n;throw gs(e),new Error(e)}function zt(n,e){n||Ut(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Ly(){return hc()==="http:"||hc()==="https:"}function hc(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ly()||fg()||"connection"in navigator)?navigator.onLine:!0}function Uy(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,t){this.shortDelay=e,this.longDelay=t,zt(t>e,"Short delay should be less than long delay!"),this.isMobile=cg()||pg()}get(){return Fy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(n,e){zt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],zy=new Ri(3e4,6e4);function Ja(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Cr(n,e,t,r,i={}){return Ud(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ki({key:n.config.apiKey,...o}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const c={method:e,headers:u,...s};return dg()||(c.referrerPolicy="no-referrer"),n.emulatorConfig&&br(n.emulatorConfig.host)&&(c.credentials="include"),Fd.fetch()(await jd(n,n.config.apiHost,t,l),c)})}async function Ud(n,e,t){n._canInitEmulator=!1;const r={...jy,...e};try{const i=new $y(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw as(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw as(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw as(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw as(n,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Qa(n,d,c);Dt(n,d)}}catch(i){if(i instanceof Gt)throw i;Dt(n,"network-request-failed",{message:String(i)})}}async function qy(n,e,t,r,i={}){const s=await Cr(n,e,t,r,i);return"mfaPendingCredential"in s&&Dt(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function jd(n,e,t,r){const i=`${e}${t}?${r}`,s=n,o=s.config.emulator?Xa(n.config,i):`${n.config.apiScheme}://${i}`;return By.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class $y{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Tt(this.auth,"network-request-failed")),zy.get())})}}function as(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Tt(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hy(n,e){return Cr(n,"POST","/v1/accounts:delete",e)}async function Ds(n,e){return Cr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Gy(n,e=!1){const t=Ae(n),r=await t.getIdToken(e),i=Za(r);J(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:si(Go(i.auth_time)),issuedAtTime:si(Go(i.iat)),expirationTime:si(Go(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Go(n){return Number(n)*1e3}function Za(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return gs("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ad(t);return i?JSON.parse(i):(gs("Failed to decode base64 JWT payload"),null)}catch(i){return gs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function dc(n){const e=Za(n);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Gt&&Wy(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Wy({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=si(this.lastLoginAt),this.creationTime=si(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Vs(n){var p;const e=n.auth,t=await n.getIdToken(),r=await pi(n,Ds(e,{idToken:t}));J(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?Bd(i.providerUserInfo):[],o=Yy(n.providerData,s),l=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new ma(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(n,d)}async function Qy(n){const e=Ae(n);await Vs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Yy(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Bd(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xy(n,e){const t=await Ud(n,{},async()=>{const r=ki({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=await jd(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return n.emulatorConfig&&br(n.emulatorConfig.host)&&(u.credentials="include"),Fd.fetch()(o,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Jy(n,e){return Cr(n,"POST","/v2/accounts:revokeToken",Ja(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){J(e.length!==0,"internal-error");const t=dc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Xy(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new ur;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ur,this.toJSON())}_performRefresh(){return Ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(n,e){J(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class It{constructor({uid:e,auth:t,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new Ky(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ma(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await pi(this,this.stsTokenManager.getToken(this.auth,e));return J(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Gy(this,e)}reload(){return Qy(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new It({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Vs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Et(this.auth.app))return Promise.reject(Vn(this.auth));const e=await this.getIdToken();return await pi(this,Hy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,i=t.email??void 0,s=t.phoneNumber??void 0,o=t.photoURL??void 0,l=t.tenantId??void 0,u=t._redirectEventId??void 0,c=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:g,providerData:C,stsTokenManager:k}=t;J(p&&k,e,"internal-error");const N=ur.fromJSON(this.name,k);J(typeof p=="string",e,"internal-error"),Zt(r,e.name),Zt(i,e.name),J(typeof m=="boolean",e,"internal-error"),J(typeof g=="boolean",e,"internal-error"),Zt(s,e.name),Zt(o,e.name),Zt(l,e.name),Zt(u,e.name),Zt(c,e.name),Zt(d,e.name);const x=new It({uid:p,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:g,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:N,createdAt:c,lastLoginAt:d});return C&&Array.isArray(C)&&(x.providerData=C.map(z=>({...z}))),u&&(x._redirectEventId=u),x}static async _fromIdTokenResponse(e,t,r=!1){const i=new ur;i.updateFromServerResponse(t);const s=new It({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Vs(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];J(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Bd(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ur;l.updateFromIdToken(r);const u=new It({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ma(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc=new Map;function jt(n){zt(n instanceof Function,"Expected a class definition");let e=fc.get(n);return e?(zt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,fc.set(n,e),e)}/**
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
 */class zd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}zd.type="NONE";const pc=zd;/**
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
 */function ys(n,e,t){return`firebase:${n}:${e}:${t}`}class cr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ys(this.userKey,i.apiKey,s),this.fullPersistenceKey=ys("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ds(this.auth,{idToken:e}).catch(()=>{});return t?It._fromGetAccountInfoResponse(this.auth,t,e):null}return It._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new cr(jt(pc),e,r);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||jt(pc);const o=ys(r,e.config.apiKey,e.name);let l=null;for(const c of t)try{const d=await c._get(o);if(d){let p;if(typeof d=="string"){const m=await Ds(e,{idToken:d}).catch(()=>{});if(!m)break;p=await It._fromGetAccountInfoResponse(e,m,d)}else p=It._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new cr(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new cr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Kd(e))return"Blackberry";if(Qd(e))return"Webos";if($d(e))return"Safari";if((e.includes("chrome/")||Hd(e))&&!e.includes("edge/"))return"Chrome";if(Wd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qd(n=Ke()){return/firefox\//i.test(n)}function $d(n=Ke()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hd(n=Ke()){return/crios\//i.test(n)}function Gd(n=Ke()){return/iemobile/i.test(n)}function Wd(n=Ke()){return/android/i.test(n)}function Kd(n=Ke()){return/blackberry/i.test(n)}function Qd(n=Ke()){return/webos/i.test(n)}function el(n=Ke()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Zy(n=Ke()){var e;return el(n)&&!!((e=window.navigator)!=null&&e.standalone)}function e_(){return mg()&&document.documentMode===10}function Yd(n=Ke()){return el(n)||Wd(n)||Qd(n)||Kd(n)||/windows phone/i.test(n)||Gd(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(n,e=[]){let t;switch(n){case"Browser":t=mc(Ke());break;case"Worker":t=`${mc(Ke())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Sr}/${r}`}/**
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
 */class t_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function n_(n,e={}){return Cr(n,"GET","/v2/passwordPolicy",Ja(n,e))}/**
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
 */const r_=6;class i_{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??r_,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gc(this),this.idTokenSubscription=new gc(this),this.beforeStateQueue=new t_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ld,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=jt(t)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await cr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ds(this,{idToken:e}),r=await It._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Et(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Vs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Uy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Et(this.app))return Promise.reject(Vn(this));const t=e?Ae(e):null;return t&&J(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Et(this.app)?Promise.reject(Vn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Et(this.app)?Promise.reject(Vn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(jt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await n_(this),t=new i_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ci("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Jy(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&jt(e)||this._popupRedirectResolver;J(t,this,"argument-error"),this.redirectPersistenceManager=await cr.create(this,[jt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(Et(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Oy(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function to(n){return Ae(n)}class gc{constructor(e){this.auth=e,this.observer=null,this.addObserver=vg(t=>this.observer=t)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function o_(n){tl=n}function a_(n){return tl.loadJS(n)}function l_(){return tl.gapiScript}function u_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(n,e){const t=Ka(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Ln(s,e??{}))return i;Dt(i,"already-initialized")}return t.initialize({options:e})}function h_(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(jt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function d_(n,e,t){const r=to(n);J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Jd(e),{host:o,port:l}=f_(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){J(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),J(Ln(c,r.config.emulator)&&Ln(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,br(o)?(kd(`${s}//${o}${u}`),Rd("Auth",!0)):p_()}function Jd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function f_(n){const e=Jd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:yc(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:yc(o)}}}function yc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function p_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ut("not implemented")}_getIdTokenResponse(e){return Ut("not implemented")}_linkToIdToken(e,t){return Ut("not implemented")}_getReauthenticationResolver(e){return Ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hr(n,e){return qy(n,"POST","/v1/accounts:signInWithIdp",Ja(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_="http://localhost";class Un extends Zd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Un(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Dt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=t;if(!r||!i)return null;const o=new Un(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return hr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,hr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,hr(e,t)}buildRequest(){const e={requestUri:m_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ki(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Pi extends nl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends Pi{constructor(){super("facebook.com")}static credential(e){return Un._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tn.credential(e.oauthAccessToken)}catch{return null}}}tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";tn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends Pi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Un._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ft.credential(t,r)}catch{return null}}}Ft.GOOGLE_SIGN_IN_METHOD="google.com";Ft.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Pi{constructor(){super("github.com")}static credential(e){return Un._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nn.credential(e.oauthAccessToken)}catch{return null}}}nn.GITHUB_SIGN_IN_METHOD="github.com";nn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends Pi{constructor(){super("twitter.com")}static credential(e,t){return Un._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return rn.credential(t,r)}catch{return null}}}rn.TWITTER_SIGN_IN_METHOD="twitter.com";rn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await It._fromIdTokenResponse(e,r,i),o=_c(r);return new yr({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=_c(r);return new yr({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function _c(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os extends Gt{constructor(e,t,r,i){super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Os.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Os(e,t,r,i)}}function ef(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Os._fromErrorAndOperation(n,s,e,r):s})}async function g_(n,e,t=!1){const r=await pi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return yr._forOperation(n,"link",r)}/**
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
 */async function y_(n,e,t=!1){const{auth:r}=n;if(Et(r.app))return Promise.reject(Vn(r));const i="reauthenticate";try{const s=await pi(n,ef(r,i,e,n),t);J(s.idToken,r,"internal-error");const o=Za(s.idToken);J(o,r,"internal-error");const{sub:l}=o;return J(n.uid===l,r,"user-mismatch"),yr._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Dt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function __(n,e,t=!1){if(Et(n.app))return Promise.reject(Vn(n));const r="signIn",i=await ef(n,r,e),s=await yr._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}function w_(n,e,t,r){return Ae(n).onIdTokenChanged(e,t,r)}function E_(n,e,t){return Ae(n).beforeAuthStateChanged(e,t)}function I_(n,e,t,r){return Ae(n).onAuthStateChanged(e,t,r)}function T_(n){return Ae(n).signOut()}const Ms="__sak";/**
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
 */class tf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ms,"1"),this.storage.removeItem(Ms),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_=1e3,A_=10;class nf extends tf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Yd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);e_()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,A_):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},v_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}nf.type="LOCAL";const b_=nf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf extends tf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}rf.type="SESSION";const sf=rf;/**
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
 */function S_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class no{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new no(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(t.origin,s)),u=await S_(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}no.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class C_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=rl("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){return window}function k_(n){Rt().location.href=n}/**
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
 */function of(){return typeof Rt().WorkerGlobalScope<"u"&&typeof Rt().importScripts=="function"}async function R_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function P_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function x_(){return of()?self:null}/**
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
 */const af="firebaseLocalStorageDb",N_=1,Ls="firebaseLocalStorage",lf="fbase_key";class xi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ro(n,e){return n.transaction([Ls],e?"readwrite":"readonly").objectStore(Ls)}function D_(){const n=indexedDB.deleteDatabase(af);return new xi(n).toPromise()}function ga(){const n=indexedDB.open(af,N_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ls,{keyPath:lf})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ls)?e(r):(r.close(),await D_(),e(await ga()))})})}async function wc(n,e,t){const r=ro(n,!0).put({[lf]:e,value:t});return new xi(r).toPromise()}async function V_(n,e){const t=ro(n,!1).get(e),r=await new xi(t).toPromise();return r===void 0?null:r.value}function Ec(n,e){const t=ro(n,!0).delete(e);return new xi(t).toPromise()}const O_=800,M_=3;class uf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ga(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>M_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return of()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=no._getInstance(x_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await R_(),!this.activeServiceWorker)return;this.sender=new C_(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||P_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ga();return await wc(e,Ms,"1"),await Ec(e,Ms),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>wc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>V_(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ec(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ro(i,!1).getAll();return new xi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),O_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uf.type="LOCAL";const L_=uf;new Ri(3e4,6e4);/**
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
 */function cf(n,e){return e?jt(e):(J(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class il extends Zd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return hr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return hr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function F_(n){return __(n.auth,new il(n),n.bypassAuthState)}function U_(n){const{auth:e,user:t}=n;return J(t,e,"internal-error"),y_(t,new il(n),n.bypassAuthState)}async function j_(n){const{auth:e,user:t}=n;return J(t,e,"internal-error"),g_(t,new il(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return F_;case"linkViaPopup":case"linkViaRedirect":return j_;case"reauthViaPopup":case"reauthViaRedirect":return U_;default:Dt(this.auth,"internal-error")}}resolve(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=new Ri(2e3,1e4);async function z_(n,e,t){if(Et(n.app))return Promise.reject(Tt(n,"operation-not-supported-in-this-environment"));const r=to(n);My(n,e,nl);const i=cf(r,t);return new Nn(r,"signInViaPopup",e,i).executeNotNull()}class Nn extends hf{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Nn.currentPopupAction&&Nn.currentPopupAction.cancel(),Nn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){zt(this.filter.length===1,"Popup operations only handle one event");const e=rl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,B_.get())};e()}}Nn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_="pendingRedirect",_s=new Map;class $_ extends hf{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=_s.get(this.auth._key());if(!e){try{const r=await H_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}_s.set(this.auth._key(),e)}return this.bypassAuthState||_s.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function H_(n,e){const t=K_(e),r=W_(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function G_(n,e){_s.set(n._key(),e)}function W_(n){return jt(n._redirectPersistence)}function K_(n){return ys(q_,n.config.apiKey,n.name)}async function Q_(n,e,t=!1){if(Et(n.app))return Promise.reject(Vn(n));const r=to(n),i=cf(r,e),o=await new $_(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_=10*60*1e3;class X_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!J_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!df(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(Tt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Y_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ic(e))}saveEventToCache(e){this.cachedEventUids.add(Ic(e)),this.lastProcessedEventTime=Date.now()}}function Ic(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function df({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function J_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return df(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z_(n,e={}){return Cr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tw=/^https?/;async function nw(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Z_(n);for(const t of e)try{if(rw(t))return}catch{}Dt(n,"unauthorized-domain")}function rw(n){const e=pa(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!tw.test(t))return!1;if(ew.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const iw=new Ri(3e4,6e4);function Tc(){const n=Rt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function sw(n){return new Promise((e,t)=>{var i,s,o;function r(){Tc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tc(),t(Tt(n,"network-request-failed"))},timeout:iw.get()})}if((s=(i=Rt().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Rt().gapi)!=null&&o.load)r();else{const l=u_("iframefcb");return Rt()[l]=()=>{gapi.load?r():t(Tt(n,"network-request-failed"))},a_(`${l_()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw ws=null,e})}let ws=null;function ow(n){return ws=ws||sw(n),ws}/**
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
 */const aw=new Ri(5e3,15e3),lw="__/auth/iframe",uw="emulator/auth/iframe",cw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dw(n){const e=n.config;J(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Xa(e,uw):`https://${n.config.authDomain}/${lw}`,r={apiKey:e.apiKey,appName:n.name,v:Sr},i=hw.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${ki(r).slice(1)}`}async function fw(n){const e=await ow(n),t=Rt().gapi;return J(t,n,"internal-error"),e.open({where:document.body,url:dw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cw,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Tt(n,"network-request-failed"),l=Rt().setTimeout(()=>{s(o)},aw.get());function u(){Rt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const pw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mw=500,gw=600,yw="_blank",_w="http://localhost";class vc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ww(n,e,t,r=mw,i=gw){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...pw,width:r.toString(),height:i.toString(),top:s,left:o},c=Ke().toLowerCase();t&&(l=Hd(c)?yw:t),qd(c)&&(e=e||_w,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[g,C])=>`${m}${g}=${C},`,"");if(Zy(c)&&l!=="_self")return Ew(e||"",l),new vc(null);const p=window.open(e||"",l,d);J(p,n,"popup-blocked");try{p.focus()}catch{}return new vc(p)}function Ew(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Iw="__/auth/handler",Tw="emulator/auth/handler",vw=encodeURIComponent("fac");async function Ac(n,e,t,r,i,s){J(n.config.authDomain,n,"auth-domain-config-required"),J(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Sr,eventId:i};if(e instanceof nl){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Tg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Pi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await n._getAppCheckToken(),c=u?`#${vw}=${encodeURIComponent(u)}`:"";return`${Aw(n)}?${ki(l).slice(1)}${c}`}function Aw({config:n}){return n.emulator?Xa(n,Tw):`https://${n.authDomain}/${Iw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo="webStorageSupport";class bw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sf,this._completeRedirectFn=Q_,this._overrideRedirectResult=G_}async _openPopup(e,t,r,i){var o;zt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Ac(e,t,r,pa(),i);return ww(e,s,rl())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Ac(e,t,r,pa(),i);return k_(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(zt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await fw(e),r=new X_(e);return t.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Wo,{type:Wo},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Wo];s!==void 0&&t(!!s),Dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=nw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Yd()||$d()||el()}}const Sw=bw;var bc="@firebase/auth",Sc="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Rw(n){gr(new Fn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xd(n)},c=new s_(r,i,s,u);return h_(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),gr(new Fn("auth-internal",e=>{const t=to(e.getProvider("auth").getImmediate());return(r=>new Cw(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),un(bc,Sc,kw(n)),un(bc,Sc,"esm2020")}/**
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
 */const Pw=5*60,xw=Cd("authIdTokenMaxAge")||Pw;let Cc=null;const Nw=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>xw)return;const i=t==null?void 0:t.token;Cc!==i&&(Cc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Dw(n=Dd()){const e=Ka(n,"auth");if(e.isInitialized())return e.getImmediate();const t=c_(n,{popupRedirectResolver:Sw,persistence:[L_,b_,sf]}),r=Cd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Nw(s.toString());E_(t,o,()=>o(t.currentUser)),w_(t,l=>o(l))}}const i=bd("auth");return i&&d_(t,`http://${i}`),t}function Vw(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}o_({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Tt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Vw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Rw("Browser");var Ow="firebase",Mw="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */un(Ow,Mw,"app");var kc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cn,ff;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,_){function I(){}I.prototype=_.prototype,A.D=_.prototype,A.prototype=new I,A.prototype.constructor=A,A.C=function(T,w,b){for(var E=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)E[ae-2]=arguments[ae];return _.prototype[w].apply(T,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(A,_,I){I||(I=0);var T=Array(16);if(typeof _=="string")for(var w=0;16>w;++w)T[w]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(w=0;16>w;++w)T[w]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=A.g[0],I=A.g[1],w=A.g[2];var b=A.g[3],E=_+(b^I&(w^b))+T[0]+3614090360&4294967295;_=I+(E<<7&4294967295|E>>>25),E=b+(w^_&(I^w))+T[1]+3905402710&4294967295,b=_+(E<<12&4294967295|E>>>20),E=w+(I^b&(_^I))+T[2]+606105819&4294967295,w=b+(E<<17&4294967295|E>>>15),E=I+(_^w&(b^_))+T[3]+3250441966&4294967295,I=w+(E<<22&4294967295|E>>>10),E=_+(b^I&(w^b))+T[4]+4118548399&4294967295,_=I+(E<<7&4294967295|E>>>25),E=b+(w^_&(I^w))+T[5]+1200080426&4294967295,b=_+(E<<12&4294967295|E>>>20),E=w+(I^b&(_^I))+T[6]+2821735955&4294967295,w=b+(E<<17&4294967295|E>>>15),E=I+(_^w&(b^_))+T[7]+4249261313&4294967295,I=w+(E<<22&4294967295|E>>>10),E=_+(b^I&(w^b))+T[8]+1770035416&4294967295,_=I+(E<<7&4294967295|E>>>25),E=b+(w^_&(I^w))+T[9]+2336552879&4294967295,b=_+(E<<12&4294967295|E>>>20),E=w+(I^b&(_^I))+T[10]+4294925233&4294967295,w=b+(E<<17&4294967295|E>>>15),E=I+(_^w&(b^_))+T[11]+2304563134&4294967295,I=w+(E<<22&4294967295|E>>>10),E=_+(b^I&(w^b))+T[12]+1804603682&4294967295,_=I+(E<<7&4294967295|E>>>25),E=b+(w^_&(I^w))+T[13]+4254626195&4294967295,b=_+(E<<12&4294967295|E>>>20),E=w+(I^b&(_^I))+T[14]+2792965006&4294967295,w=b+(E<<17&4294967295|E>>>15),E=I+(_^w&(b^_))+T[15]+1236535329&4294967295,I=w+(E<<22&4294967295|E>>>10),E=_+(w^b&(I^w))+T[1]+4129170786&4294967295,_=I+(E<<5&4294967295|E>>>27),E=b+(I^w&(_^I))+T[6]+3225465664&4294967295,b=_+(E<<9&4294967295|E>>>23),E=w+(_^I&(b^_))+T[11]+643717713&4294967295,w=b+(E<<14&4294967295|E>>>18),E=I+(b^_&(w^b))+T[0]+3921069994&4294967295,I=w+(E<<20&4294967295|E>>>12),E=_+(w^b&(I^w))+T[5]+3593408605&4294967295,_=I+(E<<5&4294967295|E>>>27),E=b+(I^w&(_^I))+T[10]+38016083&4294967295,b=_+(E<<9&4294967295|E>>>23),E=w+(_^I&(b^_))+T[15]+3634488961&4294967295,w=b+(E<<14&4294967295|E>>>18),E=I+(b^_&(w^b))+T[4]+3889429448&4294967295,I=w+(E<<20&4294967295|E>>>12),E=_+(w^b&(I^w))+T[9]+568446438&4294967295,_=I+(E<<5&4294967295|E>>>27),E=b+(I^w&(_^I))+T[14]+3275163606&4294967295,b=_+(E<<9&4294967295|E>>>23),E=w+(_^I&(b^_))+T[3]+4107603335&4294967295,w=b+(E<<14&4294967295|E>>>18),E=I+(b^_&(w^b))+T[8]+1163531501&4294967295,I=w+(E<<20&4294967295|E>>>12),E=_+(w^b&(I^w))+T[13]+2850285829&4294967295,_=I+(E<<5&4294967295|E>>>27),E=b+(I^w&(_^I))+T[2]+4243563512&4294967295,b=_+(E<<9&4294967295|E>>>23),E=w+(_^I&(b^_))+T[7]+1735328473&4294967295,w=b+(E<<14&4294967295|E>>>18),E=I+(b^_&(w^b))+T[12]+2368359562&4294967295,I=w+(E<<20&4294967295|E>>>12),E=_+(I^w^b)+T[5]+4294588738&4294967295,_=I+(E<<4&4294967295|E>>>28),E=b+(_^I^w)+T[8]+2272392833&4294967295,b=_+(E<<11&4294967295|E>>>21),E=w+(b^_^I)+T[11]+1839030562&4294967295,w=b+(E<<16&4294967295|E>>>16),E=I+(w^b^_)+T[14]+4259657740&4294967295,I=w+(E<<23&4294967295|E>>>9),E=_+(I^w^b)+T[1]+2763975236&4294967295,_=I+(E<<4&4294967295|E>>>28),E=b+(_^I^w)+T[4]+1272893353&4294967295,b=_+(E<<11&4294967295|E>>>21),E=w+(b^_^I)+T[7]+4139469664&4294967295,w=b+(E<<16&4294967295|E>>>16),E=I+(w^b^_)+T[10]+3200236656&4294967295,I=w+(E<<23&4294967295|E>>>9),E=_+(I^w^b)+T[13]+681279174&4294967295,_=I+(E<<4&4294967295|E>>>28),E=b+(_^I^w)+T[0]+3936430074&4294967295,b=_+(E<<11&4294967295|E>>>21),E=w+(b^_^I)+T[3]+3572445317&4294967295,w=b+(E<<16&4294967295|E>>>16),E=I+(w^b^_)+T[6]+76029189&4294967295,I=w+(E<<23&4294967295|E>>>9),E=_+(I^w^b)+T[9]+3654602809&4294967295,_=I+(E<<4&4294967295|E>>>28),E=b+(_^I^w)+T[12]+3873151461&4294967295,b=_+(E<<11&4294967295|E>>>21),E=w+(b^_^I)+T[15]+530742520&4294967295,w=b+(E<<16&4294967295|E>>>16),E=I+(w^b^_)+T[2]+3299628645&4294967295,I=w+(E<<23&4294967295|E>>>9),E=_+(w^(I|~b))+T[0]+4096336452&4294967295,_=I+(E<<6&4294967295|E>>>26),E=b+(I^(_|~w))+T[7]+1126891415&4294967295,b=_+(E<<10&4294967295|E>>>22),E=w+(_^(b|~I))+T[14]+2878612391&4294967295,w=b+(E<<15&4294967295|E>>>17),E=I+(b^(w|~_))+T[5]+4237533241&4294967295,I=w+(E<<21&4294967295|E>>>11),E=_+(w^(I|~b))+T[12]+1700485571&4294967295,_=I+(E<<6&4294967295|E>>>26),E=b+(I^(_|~w))+T[3]+2399980690&4294967295,b=_+(E<<10&4294967295|E>>>22),E=w+(_^(b|~I))+T[10]+4293915773&4294967295,w=b+(E<<15&4294967295|E>>>17),E=I+(b^(w|~_))+T[1]+2240044497&4294967295,I=w+(E<<21&4294967295|E>>>11),E=_+(w^(I|~b))+T[8]+1873313359&4294967295,_=I+(E<<6&4294967295|E>>>26),E=b+(I^(_|~w))+T[15]+4264355552&4294967295,b=_+(E<<10&4294967295|E>>>22),E=w+(_^(b|~I))+T[6]+2734768916&4294967295,w=b+(E<<15&4294967295|E>>>17),E=I+(b^(w|~_))+T[13]+1309151649&4294967295,I=w+(E<<21&4294967295|E>>>11),E=_+(w^(I|~b))+T[4]+4149444226&4294967295,_=I+(E<<6&4294967295|E>>>26),E=b+(I^(_|~w))+T[11]+3174756917&4294967295,b=_+(E<<10&4294967295|E>>>22),E=w+(_^(b|~I))+T[2]+718787259&4294967295,w=b+(E<<15&4294967295|E>>>17),E=I+(b^(w|~_))+T[9]+3951481745&4294967295,A.g[0]=A.g[0]+_&4294967295,A.g[1]=A.g[1]+(w+(E<<21&4294967295|E>>>11))&4294967295,A.g[2]=A.g[2]+w&4294967295,A.g[3]=A.g[3]+b&4294967295}r.prototype.u=function(A,_){_===void 0&&(_=A.length);for(var I=_-this.blockSize,T=this.B,w=this.h,b=0;b<_;){if(w==0)for(;b<=I;)i(this,A,b),b+=this.blockSize;if(typeof A=="string"){for(;b<_;)if(T[w++]=A.charCodeAt(b++),w==this.blockSize){i(this,T),w=0;break}}else for(;b<_;)if(T[w++]=A[b++],w==this.blockSize){i(this,T),w=0;break}}this.h=w,this.o+=_},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var _=1;_<A.length-8;++_)A[_]=0;var I=8*this.o;for(_=A.length-8;_<A.length;++_)A[_]=I&255,I/=256;for(this.u(A),A=Array(16),_=I=0;4>_;++_)for(var T=0;32>T;T+=8)A[I++]=this.g[_]>>>T&255;return A};function s(A,_){var I=l;return Object.prototype.hasOwnProperty.call(I,A)?I[A]:I[A]=_(A)}function o(A,_){this.h=_;for(var I=[],T=!0,w=A.length-1;0<=w;w--){var b=A[w]|0;T&&b==_||(I[w]=b,T=!1)}this.g=I}var l={};function u(A){return-128<=A&&128>A?s(A,function(_){return new o([_|0],0>_?-1:0)}):new o([A|0],0>A?-1:0)}function c(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return N(c(-A));for(var _=[],I=1,T=0;A>=I;T++)_[T]=A/I|0,I*=4294967296;return new o(_,0)}function d(A,_){if(A.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(A.charAt(0)=="-")return N(d(A.substring(1),_));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=c(Math.pow(_,8)),T=p,w=0;w<A.length;w+=8){var b=Math.min(8,A.length-w),E=parseInt(A.substring(w,w+b),_);8>b?(b=c(Math.pow(_,b)),T=T.j(b).add(c(E))):(T=T.j(I),T=T.add(c(E)))}return T}var p=u(0),m=u(1),g=u(16777216);n=o.prototype,n.m=function(){if(k(this))return-N(this).m();for(var A=0,_=1,I=0;I<this.g.length;I++){var T=this.i(I);A+=(0<=T?T:4294967296+T)*_,_*=4294967296}return A},n.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(C(this))return"0";if(k(this))return"-"+N(this).toString(A);for(var _=c(Math.pow(A,6)),I=this,T="";;){var w=G(I,_).g;I=x(I,w.j(_));var b=((0<I.g.length?I.g[0]:I.h)>>>0).toString(A);if(I=w,C(I))return b+T;for(;6>b.length;)b="0"+b;T=b+T}},n.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function C(A){if(A.h!=0)return!1;for(var _=0;_<A.g.length;_++)if(A.g[_]!=0)return!1;return!0}function k(A){return A.h==-1}n.l=function(A){return A=x(this,A),k(A)?-1:C(A)?0:1};function N(A){for(var _=A.g.length,I=[],T=0;T<_;T++)I[T]=~A.g[T];return new o(I,~A.h).add(m)}n.abs=function(){return k(this)?N(this):this},n.add=function(A){for(var _=Math.max(this.g.length,A.g.length),I=[],T=0,w=0;w<=_;w++){var b=T+(this.i(w)&65535)+(A.i(w)&65535),E=(b>>>16)+(this.i(w)>>>16)+(A.i(w)>>>16);T=E>>>16,b&=65535,E&=65535,I[w]=E<<16|b}return new o(I,I[I.length-1]&-2147483648?-1:0)};function x(A,_){return A.add(N(_))}n.j=function(A){if(C(this)||C(A))return p;if(k(this))return k(A)?N(this).j(N(A)):N(N(this).j(A));if(k(A))return N(this.j(N(A)));if(0>this.l(g)&&0>A.l(g))return c(this.m()*A.m());for(var _=this.g.length+A.g.length,I=[],T=0;T<2*_;T++)I[T]=0;for(T=0;T<this.g.length;T++)for(var w=0;w<A.g.length;w++){var b=this.i(T)>>>16,E=this.i(T)&65535,ae=A.i(w)>>>16,re=A.i(w)&65535;I[2*T+2*w]+=E*re,z(I,2*T+2*w),I[2*T+2*w+1]+=b*re,z(I,2*T+2*w+1),I[2*T+2*w+1]+=E*ae,z(I,2*T+2*w+1),I[2*T+2*w+2]+=b*ae,z(I,2*T+2*w+2)}for(T=0;T<_;T++)I[T]=I[2*T+1]<<16|I[2*T];for(T=_;T<2*_;T++)I[T]=0;return new o(I,0)};function z(A,_){for(;(A[_]&65535)!=A[_];)A[_+1]+=A[_]>>>16,A[_]&=65535,_++}function F(A,_){this.g=A,this.h=_}function G(A,_){if(C(_))throw Error("division by zero");if(C(A))return new F(p,p);if(k(A))return _=G(N(A),_),new F(N(_.g),N(_.h));if(k(_))return _=G(A,N(_)),new F(N(_.g),_.h);if(30<A.g.length){if(k(A)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var I=m,T=_;0>=T.l(A);)I=$(I),T=$(T);var w=D(I,1),b=D(T,1);for(T=D(T,2),I=D(I,2);!C(T);){var E=b.add(T);0>=E.l(A)&&(w=w.add(I),b=E),T=D(T,1),I=D(I,1)}return _=x(A,w.j(_)),new F(w,_)}for(w=p;0<=A.l(_);){for(I=Math.max(1,Math.floor(A.m()/_.m())),T=Math.ceil(Math.log(I)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),b=c(I),E=b.j(_);k(E)||0<E.l(A);)I-=T,b=c(I),E=b.j(_);C(b)&&(b=m),w=w.add(b),A=x(A,E)}return new F(w,A)}n.A=function(A){return G(this,A).h},n.and=function(A){for(var _=Math.max(this.g.length,A.g.length),I=[],T=0;T<_;T++)I[T]=this.i(T)&A.i(T);return new o(I,this.h&A.h)},n.or=function(A){for(var _=Math.max(this.g.length,A.g.length),I=[],T=0;T<_;T++)I[T]=this.i(T)|A.i(T);return new o(I,this.h|A.h)},n.xor=function(A){for(var _=Math.max(this.g.length,A.g.length),I=[],T=0;T<_;T++)I[T]=this.i(T)^A.i(T);return new o(I,this.h^A.h)};function $(A){for(var _=A.g.length+1,I=[],T=0;T<_;T++)I[T]=A.i(T)<<1|A.i(T-1)>>>31;return new o(I,A.h)}function D(A,_){var I=_>>5;_%=32;for(var T=A.g.length-I,w=[],b=0;b<T;b++)w[b]=0<_?A.i(b+I)>>>_|A.i(b+I+1)<<32-_:A.i(b+I);return new o(w,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ff=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,cn=o}).apply(typeof kc<"u"?kc:typeof self<"u"?self:typeof window<"u"?window:{});var ls=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pf,ei,mf,Es,ya,gf,yf,_f;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ls=="object"&&ls];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var R=a[y];if(!(R in f))break e;f=f[R]}a=a[a.length-1],y=f[a],h=h(y),h!=y&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var f=0,y=!1,R={next:function(){if(!y&&f<a.length){var V=f++;return{value:h(V,a[V]),done:!1}}return y=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,y),a.apply(h,R)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function g(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function C(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(y,R,V){for(var q=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)q[pe-2]=arguments[pe];return h.prototype[R].apply(y,q)}}function k(a){const h=a.length;if(0<h){const f=Array(h);for(let y=0;y<h;y++)f[y]=a[y];return f}return[]}function N(a,h){for(let f=1;f<arguments.length;f++){const y=arguments[f];if(u(y)){const R=a.length||0,V=y.length||0;a.length=R+V;for(let q=0;q<V;q++)a[R+q]=y[q]}else a.push(y)}}class x{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function z(a){return/^[\s\xa0]*$/.test(a)}function F(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function G(a){return G[" "](a),a}G[" "]=function(){};var $=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function D(a,h,f){for(const y in a)h.call(f,a[y],y,a)}function A(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function _(a){const h={};for(const f in a)h[f]=a[f];return h}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,h){let f,y;for(let R=1;R<arguments.length;R++){y=arguments[R];for(f in y)a[f]=y[f];for(let V=0;V<I.length;V++)f=I[V],Object.prototype.hasOwnProperty.call(y,f)&&(a[f]=y[f])}}function w(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function b(a){l.setTimeout(()=>{throw a},0)}function E(){var a=it;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class ae{constructor(){this.h=this.g=null}add(h,f){const y=re.get();y.set(h,f),this.h?this.h.next=y:this.g=y,this.h=y}}var re=new x(()=>new xe,a=>a.reset());class xe{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let we,Me=!1,it=new ae,S=()=>{const a=l.Promise.resolve(void 0);we=()=>{a.then(st)}};var st=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(f){b(f)}var h=re;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Me=!1};function Ne(){this.s=this.s,this.C=this.C}Ne.prototype.s=!1,Ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var ot=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function mt(a,h){if(v.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if($){e:{try{G(h.nodeName);var R=!0;break e}catch{}R=!1}R||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:be[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&mt.aa.h.call(this)}}C(mt,v);var be={2:"touch",3:"pen",4:"mouse"};mt.prototype.h=function(){mt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var At="closure_listenable_"+(1e6*Math.random()|0),bt=0;function Kt(a,h,f,y,R){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!y,this.ha=R,this.key=++bt,this.da=this.fa=!1}function _t(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Qt(a){this.src=a,this.g={},this.h=0}Qt.prototype.add=function(a,h,f,y,R){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var q=Vr(a,h,y,R);return-1<q?(h=a[q],f||(h.fa=!1)):(h=new Kt(h,this.src,V,!!y,R),h.fa=f,a.push(h)),h};function Wn(a,h){var f=h.type;if(f in a.g){var y=a.g[f],R=Array.prototype.indexOf.call(y,h,void 0),V;(V=0<=R)&&Array.prototype.splice.call(y,R,1),V&&(_t(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Vr(a,h,f,y){for(var R=0;R<a.length;++R){var V=a[R];if(!V.da&&V.listener==h&&V.capture==!!f&&V.ha==y)return R}return-1}var Or="closure_lm_"+(1e6*Math.random()|0),Mr={};function Lr(a,h,f,y,R){if(Array.isArray(h)){for(var V=0;V<h.length;V++)Lr(a,h[V],f,y,R);return null}return f=Hi(f),a&&a[At]?a.K(h,f,c(y)?!!y.capture:!1,R):zi(a,h,f,!1,y,R)}function zi(a,h,f,y,R,V){if(!h)throw Error("Invalid event type");var q=c(R)?!!R.capture:!!R,pe=Ur(a);if(pe||(a[Or]=pe=new Qt(a)),f=pe.add(h,f,y,q,V),f.proxy)return f;if(y=qi(),f.proxy=y,y.src=a,y.listener=f,a.addEventListener)ot||(R=q),R===void 0&&(R=!1),a.addEventListener(h.toString(),y,R);else if(a.attachEvent)a.attachEvent(Fr(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function qi(){function a(f){return h.call(a.src,a.listener,f)}const h=Co;return a}function $i(a,h,f,y,R){if(Array.isArray(h))for(var V=0;V<h.length;V++)$i(a,h[V],f,y,R);else y=c(y)?!!y.capture:!!y,f=Hi(f),a&&a[At]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],f=Vr(V,f,y,R),-1<f&&(_t(V[f]),Array.prototype.splice.call(V,f,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=Ur(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Vr(h,f,y,R)),(f=-1<a?h[a]:null)&&Kn(f))}function Kn(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[At])Wn(h.i,a);else{var f=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(f,y,a.capture):h.detachEvent?h.detachEvent(Fr(f),y):h.addListener&&h.removeListener&&h.removeListener(y),(f=Ur(h))?(Wn(f,a),f.h==0&&(f.src=null,h[Or]=null)):_t(a)}}}function Fr(a){return a in Mr?Mr[a]:Mr[a]="on"+a}function Co(a,h){if(a.da)a=!0;else{h=new mt(h,this);var f=a.listener,y=a.ha||a.src;a.fa&&Kn(a),a=f.call(y,h)}return a}function Ur(a){return a=a[Or],a instanceof Qt?a:null}var jr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hi(a){return typeof a=="function"?a:(a[jr]||(a[jr]=function(h){return a.handleEvent(h)}),a[jr])}function De(){Ne.call(this),this.i=new Qt(this),this.M=this,this.F=null}C(De,Ne),De.prototype[At]=!0,De.prototype.removeEventListener=function(a,h,f,y){$i(this,a,h,f,y)};function P(a,h){var f,y=a.F;if(y)for(f=[];y;y=y.F)f.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new v(h,a);else if(h instanceof v)h.target=h.target||a;else{var R=h;h=new v(y,a),T(h,R)}if(R=!0,f)for(var V=f.length-1;0<=V;V--){var q=h.g=f[V];R=j(q,y,!0,h)&&R}if(q=h.g=a,R=j(q,y,!0,h)&&R,R=j(q,y,!1,h)&&R,f)for(V=0;V<f.length;V++)q=h.g=f[V],R=j(q,y,!1,h)&&R}De.prototype.N=function(){if(De.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],y=0;y<f.length;y++)_t(f[y]);delete a.g[h],a.h--}}this.F=null},De.prototype.K=function(a,h,f,y){return this.i.add(String(a),h,!1,f,y)},De.prototype.L=function(a,h,f,y){return this.i.add(String(a),h,!0,f,y)};function j(a,h,f,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var R=!0,V=0;V<h.length;++V){var q=h[V];if(q&&!q.da&&q.capture==f){var pe=q.listener,Fe=q.ha||q.src;q.fa&&Wn(a.i,q),R=pe.call(Fe,y)!==!1&&R}}return R&&!y.defaultPrevented}function Y(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function ne(a){a.g=Y(()=>{a.g=null,a.i&&(a.i=!1,ne(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class ze extends Ne{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ne(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function de(a){Ne.call(this),this.h=a,this.g={}}C(de,Ne);var Le=[];function at(a){D(a.g,function(h,f){this.g.hasOwnProperty(f)&&Kn(h)},a),a.g={}}de.prototype.N=function(){de.aa.N.call(this),at(this)},de.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ot=l.JSON.stringify,An=l.JSON.parse,bn=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Qn(){}Qn.prototype.h=null;function Yn(a){return a.h||(a.h=a.i())}function qe(){}var gt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function lt(){v.call(this,"d")}C(lt,v);function ko(){v.call(this,"c")}C(ko,v);var Sn={},uu=null;function Gi(){return uu=uu||new De}Sn.La="serverreachability";function cu(a){v.call(this,Sn.La,a)}C(cu,v);function Br(a){const h=Gi();P(h,new cu(h))}Sn.STAT_EVENT="statevent";function hu(a,h){v.call(this,Sn.STAT_EVENT,a),this.stat=h}C(hu,v);function Ye(a){const h=Gi();P(h,new hu(h,a))}Sn.Ma="timingevent";function du(a,h){v.call(this,Sn.Ma,a),this.size=h}C(du,v);function zr(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function qr(){this.g=!0}qr.prototype.xa=function(){this.g=!1};function km(a,h,f,y,R,V){a.info(function(){if(a.g)if(V)for(var q="",pe=V.split("&"),Fe=0;Fe<pe.length;Fe++){var he=pe[Fe].split("=");if(1<he.length){var $e=he[0];he=he[1];var He=$e.split("_");q=2<=He.length&&He[1]=="type"?q+($e+"="+he+"&"):q+($e+"=redacted&")}}else q=null;else q=V;return"XMLHTTP REQ ("+y+") [attempt "+R+"]: "+h+`
`+f+`
`+q})}function Rm(a,h,f,y,R,V,q){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+R+"]: "+h+`
`+f+`
`+V+" "+q})}function Xn(a,h,f,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+xm(a,f)+(y?" "+y:"")})}function Pm(a,h){a.info(function(){return"TIMEOUT: "+h})}qr.prototype.info=function(){};function xm(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var y=f[a];if(!(2>y.length)){var R=y[1];if(Array.isArray(R)&&!(1>R.length)){var V=R[0];if(V!="noop"&&V!="stop"&&V!="close")for(var q=1;q<R.length;q++)R[q]=""}}}}return Ot(f)}catch{return h}}var Wi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},fu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ro;function Ki(){}C(Ki,Qn),Ki.prototype.g=function(){return new XMLHttpRequest},Ki.prototype.i=function(){return{}},Ro=new Ki;function Yt(a,h,f,y){this.j=a,this.i=h,this.l=f,this.R=y||1,this.U=new de(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new pu}function pu(){this.i=null,this.g="",this.h=!1}var mu={},Po={};function xo(a,h,f){a.L=1,a.v=Ji(Mt(h)),a.m=f,a.P=!0,gu(a,null)}function gu(a,h){a.F=Date.now(),Qi(a),a.A=Mt(a.v);var f=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),Pu(f.i,"t",y),a.C=0,f=a.j.J,a.h=new pu,a.g=Ku(a.j,f?h:null,!a.m),0<a.O&&(a.M=new ze(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,y=a.ca;var R="readystatechange";Array.isArray(R)||(R&&(Le[0]=R.toString()),R=Le);for(var V=0;V<R.length;V++){var q=Lr(f,R[V],y||h.handleEvent,!1,h.h||h);if(!q)break;h.g[q.key]=q}h=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Br(),km(a.i,a.u,a.A,a.l,a.R,a.m)}Yt.prototype.ca=function(a){a=a.target;const h=this.M;h&&Lt(a)==3?h.j():this.Y(a)},Yt.prototype.Y=function(a){try{if(a==this.g)e:{const He=Lt(this.g);var h=this.g.Ba();const er=this.g.Z();if(!(3>He)&&(He!=3||this.g&&(this.h.h||this.g.oa()||Lu(this.g)))){this.J||He!=4||h==7||(h==8||0>=er?Br(3):Br(2)),No(this);var f=this.g.Z();this.X=f;t:if(yu(this)){var y=Lu(this.g);a="";var R=y.length,V=Lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cn(this),$r(this);var q="";break t}this.h.i=new l.TextDecoder}for(h=0;h<R;h++)this.h.h=!0,a+=this.h.i.decode(y[h],{stream:!(V&&h==R-1)});y.length=0,this.h.g+=a,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=f==200,Rm(this.i,this.u,this.A,this.l,this.R,He,f),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,Fe=this.g;if((pe=Fe.g?Fe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z(pe)){var he=pe;break t}}he=null}if(f=he)Xn(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Do(this,f);else{this.o=!1,this.s=3,Ye(12),Cn(this),$r(this);break e}}if(this.P){f=!0;let wt;for(;!this.J&&this.C<q.length;)if(wt=Nm(this,q),wt==Po){He==4&&(this.s=4,Ye(14),f=!1),Xn(this.i,this.l,null,"[Incomplete Response]");break}else if(wt==mu){this.s=4,Ye(15),Xn(this.i,this.l,q,"[Invalid Chunk]"),f=!1;break}else Xn(this.i,this.l,wt,null),Do(this,wt);if(yu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),He!=4||q.length!=0||this.h.h||(this.s=1,Ye(16),f=!1),this.o=this.o&&f,!f)Xn(this.i,this.l,q,"[Invalid Chunked Response]"),Cn(this),$r(this);else if(0<q.length&&!this.W){this.W=!0;var $e=this.j;$e.g==this&&$e.ba&&!$e.M&&($e.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),Uo($e),$e.M=!0,Ye(11))}}else Xn(this.i,this.l,q,null),Do(this,q);He==4&&Cn(this),this.o&&!this.J&&(He==4?$u(this.j,this):(this.o=!1,Qi(this)))}else Qm(this.g),f==400&&0<q.indexOf("Unknown SID")?(this.s=3,Ye(12)):(this.s=0,Ye(13)),Cn(this),$r(this)}}}catch{}finally{}};function yu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Nm(a,h){var f=a.C,y=h.indexOf(`
`,f);return y==-1?Po:(f=Number(h.substring(f,y)),isNaN(f)?mu:(y+=1,y+f>h.length?Po:(h=h.slice(y,y+f),a.C=y+f,h)))}Yt.prototype.cancel=function(){this.J=!0,Cn(this)};function Qi(a){a.S=Date.now()+a.I,_u(a,a.I)}function _u(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=zr(m(a.ba,a),h)}function No(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Yt.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Pm(this.i,this.A),this.L!=2&&(Br(),Ye(17)),Cn(this),this.s=2,$r(this)):_u(this,this.S-a)};function $r(a){a.j.G==0||a.J||$u(a.j,a)}function Cn(a){No(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,at(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Do(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Vo(f.h,a))){if(!a.K&&Vo(f.h,a)&&f.G==3){try{var y=f.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var R=y;if(R[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)is(f),ns(f);else break e;Fo(f),Ye(18)}}else f.za=R[1],0<f.za-f.T&&37500>R[2]&&f.F&&f.v==0&&!f.C&&(f.C=zr(m(f.Za,f),6e3));if(1>=Iu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Rn(f,11)}else if((a.K||f.g==a)&&is(f),!z(h))for(R=f.Da.g.parse(h),h=0;h<R.length;h++){let he=R[h];if(f.T=he[0],he=he[1],f.G==2)if(he[0]=="c"){f.K=he[1],f.ia=he[2];const $e=he[3];$e!=null&&(f.la=$e,f.j.info("VER="+f.la));const He=he[4];He!=null&&(f.Aa=He,f.j.info("SVER="+f.Aa));const er=he[5];er!=null&&typeof er=="number"&&0<er&&(y=1.5*er,f.L=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const wt=a.g;if(wt){const os=wt.g?wt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(os){var V=y.h;V.g||os.indexOf("spdy")==-1&&os.indexOf("quic")==-1&&os.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Oo(V,V.h),V.h=null))}if(y.D){const jo=wt.g?wt.g.getResponseHeader("X-HTTP-Session-Id"):null;jo&&(y.ya=jo,ge(y.I,y.D,jo))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),y=f;var q=a;if(y.qa=Wu(y,y.J?y.ia:null,y.W),q.K){Tu(y.h,q);var pe=q,Fe=y.L;Fe&&(pe.I=Fe),pe.B&&(No(pe),Qi(pe)),y.g=q}else zu(y);0<f.i.length&&rs(f)}else he[0]!="stop"&&he[0]!="close"||Rn(f,7);else f.G==3&&(he[0]=="stop"||he[0]=="close"?he[0]=="stop"?Rn(f,7):Lo(f):he[0]!="noop"&&f.l&&f.l.ta(he),f.v=0)}}Br(4)}catch{}}var Dm=class{constructor(a,h){this.g=a,this.map=h}};function wu(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Eu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Iu(a){return a.h?1:a.g?a.g.size:0}function Vo(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Oo(a,h){a.g?a.g.add(h):a.h=h}function Tu(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}wu.prototype.cancel=function(){if(this.i=vu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function vu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return k(a.i)}function Vm(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,y=0;y<f;y++)h.push(a[y]);return h}h=[],f=0;for(y in a)h[f++]=a[y];return h}function Om(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const y in a)h[f++]=y;return h}}}function Au(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=Om(a),y=Vm(a),R=y.length,V=0;V<R;V++)h.call(void 0,y[V],f&&f[V],a)}var bu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Mm(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var y=a[f].indexOf("="),R=null;if(0<=y){var V=a[f].substring(0,y);R=a[f].substring(y+1)}else V=a[f];h(V,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function kn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof kn){this.h=a.h,Yi(this,a.j),this.o=a.o,this.g=a.g,Xi(this,a.s),this.l=a.l;var h=a.i,f=new Wr;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Su(this,f),this.m=a.m}else a&&(h=String(a).match(bu))?(this.h=!1,Yi(this,h[1]||"",!0),this.o=Hr(h[2]||""),this.g=Hr(h[3]||"",!0),Xi(this,h[4]),this.l=Hr(h[5]||"",!0),Su(this,h[6]||"",!0),this.m=Hr(h[7]||"")):(this.h=!1,this.i=new Wr(null,this.h))}kn.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Gr(h,Cu,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Gr(h,Cu,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Gr(f,f.charAt(0)=="/"?Um:Fm,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Gr(f,Bm)),a.join("")};function Mt(a){return new kn(a)}function Yi(a,h,f){a.j=f?Hr(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Xi(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Su(a,h,f){h instanceof Wr?(a.i=h,zm(a.i,a.h)):(f||(h=Gr(h,jm)),a.i=new Wr(h,a.h))}function ge(a,h,f){a.i.set(h,f)}function Ji(a){return ge(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Hr(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Gr(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,Lm),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Lm(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Cu=/[#\/\?@]/g,Fm=/[#\?:]/g,Um=/[#\?]/g,jm=/[#\?@]/g,Bm=/#/g;function Wr(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Xt(a){a.g||(a.g=new Map,a.h=0,a.i&&Mm(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}n=Wr.prototype,n.add=function(a,h){Xt(this),this.i=null,a=Jn(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function ku(a,h){Xt(a),h=Jn(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Ru(a,h){return Xt(a),h=Jn(a,h),a.g.has(h)}n.forEach=function(a,h){Xt(this),this.g.forEach(function(f,y){f.forEach(function(R){a.call(h,R,y,this)},this)},this)},n.na=function(){Xt(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let y=0;y<h.length;y++){const R=a[y];for(let V=0;V<R.length;V++)f.push(h[y])}return f},n.V=function(a){Xt(this);let h=[];if(typeof a=="string")Ru(this,a)&&(h=h.concat(this.g.get(Jn(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},n.set=function(a,h){return Xt(this),this.i=null,a=Jn(this,a),Ru(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Pu(a,h,f){ku(a,h),0<f.length&&(a.i=null,a.g.set(Jn(a,h),k(f)),a.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var y=h[f];const V=encodeURIComponent(String(y)),q=this.V(y);for(y=0;y<q.length;y++){var R=V;q[y]!==""&&(R+="="+encodeURIComponent(String(q[y]))),a.push(R)}}return this.i=a.join("&")};function Jn(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function zm(a,h){h&&!a.j&&(Xt(a),a.i=null,a.g.forEach(function(f,y){var R=y.toLowerCase();y!=R&&(ku(this,y),Pu(this,R,f))},a)),a.j=h}function qm(a,h){const f=new qr;if(l.Image){const y=new Image;y.onload=g(Jt,f,"TestLoadImage: loaded",!0,h,y),y.onerror=g(Jt,f,"TestLoadImage: error",!1,h,y),y.onabort=g(Jt,f,"TestLoadImage: abort",!1,h,y),y.ontimeout=g(Jt,f,"TestLoadImage: timeout",!1,h,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function $m(a,h){const f=new qr,y=new AbortController,R=setTimeout(()=>{y.abort(),Jt(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(V=>{clearTimeout(R),V.ok?Jt(f,"TestPingServer: ok",!0,h):Jt(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(R),Jt(f,"TestPingServer: error",!1,h)})}function Jt(a,h,f,y,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),y(f)}catch{}}function Hm(){this.g=new bn}function Gm(a,h,f){const y=f||"";try{Au(a,function(R,V){let q=R;c(R)&&(q=Ot(R)),h.push(y+V+"="+encodeURIComponent(q))})}catch(R){throw h.push(y+"type="+encodeURIComponent("_badmap")),R}}function Zi(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Zi,Qn),Zi.prototype.g=function(){return new es(this.l,this.j)},Zi.prototype.i=function(a){return function(){return a}}({});function es(a,h){De.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(es,De),n=es.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Qr(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Kr(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Qr(this)),this.g&&(this.readyState=3,Qr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function xu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Kr(this):Qr(this),this.readyState==3&&xu(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,Kr(this))},n.Qa=function(a){this.g&&(this.response=a,Kr(this))},n.ga=function(){this.g&&Kr(this)};function Kr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Qr(a)}n.setRequestHeader=function(a,h){this.u.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Qr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(es.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Nu(a){let h="";return D(a,function(f,y){h+=y,h+=":",h+=f,h+=`\r
`}),h}function Mo(a,h,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=Nu(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):ge(a,h,f))}function Ie(a){De.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Ie,De);var Wm=/^https?$/i,Km=["POST","PUT"];n=Ie.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,h,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ro.g(),this.v=this.o?Yn(this.o):Yn(Ro),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){Du(this,V);return}if(a=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var R in y)f.set(R,y[R]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const V of y.keys())f.set(V,y.get(V));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),R=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Km,h,void 0))||y||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,q]of f)this.g.setRequestHeader(V,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Mu(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){Du(this,V)}};function Du(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Vu(a),ts(a)}function Vu(a){a.A||(a.A=!0,P(a,"complete"),P(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,P(this,"complete"),P(this,"abort"),ts(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ts(this,!0)),Ie.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ou(this):this.bb())},n.bb=function(){Ou(this)};function Ou(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Lt(a)!=4||a.Z()!=2)){if(a.u&&Lt(a)==4)Y(a.Ea,0,a);else if(P(a,"readystatechange"),Lt(a)==4){a.h=!1;try{const q=a.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var y;if(y=q===0){var R=String(a.D).match(bu)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),y=!Wm.test(R?R.toLowerCase():"")}f=y}if(f)P(a,"complete"),P(a,"success");else{a.m=6;try{var V=2<Lt(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",Vu(a)}}finally{ts(a)}}}}function ts(a,h){if(a.g){Mu(a);const f=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||P(a,"ready");try{f.onreadystatechange=y}catch{}}}function Mu(a){a.I&&(l.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function Lt(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<Lt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),An(h)}};function Lu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Qm(a){const h={};a=(a.g&&2<=Lt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(z(a[y]))continue;var f=w(a[y]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=h[R]||[];h[R]=V,V.push(f)}A(h,function(y){return y.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Yr(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Fu(a){this.Aa=0,this.i=[],this.j=new qr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Yr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Yr("baseRetryDelayMs",5e3,a),this.cb=Yr("retryDelaySeedMs",1e4,a),this.Wa=Yr("forwardChannelMaxRetries",2,a),this.wa=Yr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new wu(a&&a.concurrentRequestLimit),this.Da=new Hm,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Fu.prototype,n.la=8,n.G=1,n.connect=function(a,h,f,y){Ye(0),this.W=a,this.H=h||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.I=Wu(this,null,this.W),rs(this)};function Lo(a){if(Uu(a),a.G==3){var h=a.U++,f=Mt(a.I);if(ge(f,"SID",a.K),ge(f,"RID",h),ge(f,"TYPE","terminate"),Xr(a,f),h=new Yt(a,a.j,h),h.L=2,h.v=Ji(Mt(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Ku(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Qi(h)}Gu(a)}function ns(a){a.g&&(Uo(a),a.g.cancel(),a.g=null)}function Uu(a){ns(a),a.u&&(l.clearTimeout(a.u),a.u=null),is(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function rs(a){if(!Eu(a.h)&&!a.s){a.s=!0;var h=a.Ga;we||S(),Me||(we(),Me=!0),it.add(h,a),a.B=0}}function Ym(a,h){return Iu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=zr(m(a.Ga,a,h),Hu(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const R=new Yt(this,this.j,a);let V=this.o;if(this.S&&(V?(V=_(V),T(V,this.S)):V=this.S),this.m!==null||this.O||(R.H=V,V=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Bu(this,R,h),f=Mt(this.I),ge(f,"RID",a),ge(f,"CVER",22),this.D&&ge(f,"X-HTTP-Session-Id",this.D),Xr(this,f),V&&(this.O?h="headers="+encodeURIComponent(String(Nu(V)))+"&"+h:this.m&&Mo(f,this.m,V)),Oo(this.h,R),this.Ua&&ge(f,"TYPE","init"),this.P?(ge(f,"$req",h),ge(f,"SID","null"),R.T=!0,xo(R,f,null)):xo(R,f,h),this.G=2}}else this.G==3&&(a?ju(this,a):this.i.length==0||Eu(this.h)||ju(this))};function ju(a,h){var f;h?f=h.l:f=a.U++;const y=Mt(a.I);ge(y,"SID",a.K),ge(y,"RID",f),ge(y,"AID",a.T),Xr(a,y),a.m&&a.o&&Mo(y,a.m,a.o),f=new Yt(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Bu(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Oo(a.h,f),xo(f,y,h)}function Xr(a,h){a.H&&D(a.H,function(f,y){ge(h,y,f)}),a.l&&Au({},function(f,y){ge(h,y,f)})}function Bu(a,h,f){f=Math.min(a.i.length,f);var y=a.l?m(a.l.Na,a.l,a):null;e:{var R=a.i;let V=-1;for(;;){const q=["count="+f];V==-1?0<f?(V=R[0].g,q.push("ofs="+V)):V=0:q.push("ofs="+V);let pe=!0;for(let Fe=0;Fe<f;Fe++){let he=R[Fe].g;const $e=R[Fe].map;if(he-=V,0>he)V=Math.max(0,R[Fe].g-100),pe=!1;else try{Gm($e,q,"req"+he+"_")}catch{y&&y($e)}}if(pe){y=q.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,y}function zu(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;we||S(),Me||(we(),Me=!0),it.add(h,a),a.v=0}}function Fo(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=zr(m(a.Fa,a),Hu(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,qu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=zr(m(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ye(10),ns(this),qu(this))};function Uo(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function qu(a){a.g=new Yt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Mt(a.qa);ge(h,"RID","rpc"),ge(h,"SID",a.K),ge(h,"AID",a.T),ge(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&ge(h,"TO",a.ja),ge(h,"TYPE","xmlhttp"),Xr(a,h),a.m&&a.o&&Mo(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Ji(Mt(h)),f.m=null,f.P=!0,gu(f,a)}n.Za=function(){this.C!=null&&(this.C=null,ns(this),Fo(this),Ye(19))};function is(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function $u(a,h){var f=null;if(a.g==h){is(a),Uo(a),a.g=null;var y=2}else if(Vo(a.h,h))f=h.D,Tu(a.h,h),y=1;else return;if(a.G!=0){if(h.o)if(y==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var R=a.B;y=Gi(),P(y,new du(y,f)),rs(a)}else zu(a);else if(R=h.s,R==3||R==0&&0<h.X||!(y==1&&Ym(a,h)||y==2&&Fo(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),R){case 1:Rn(a,5);break;case 4:Rn(a,10);break;case 3:Rn(a,6);break;default:Rn(a,2)}}}function Hu(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Rn(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),y=a.Xa;const R=!y;y=new kn(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Yi(y,"https"),Ji(y),R?qm(y.toString(),f):$m(y.toString(),f)}else Ye(2);a.G=0,a.l&&a.l.sa(h),Gu(a),Uu(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ye(2)):(this.j.info("Failed to ping google.com"),Ye(1))};function Gu(a){if(a.G=0,a.ka=[],a.l){const h=vu(a.h);(h.length!=0||a.i.length!=0)&&(N(a.ka,h),N(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function Wu(a,h,f){var y=f instanceof kn?Mt(f):new kn(f);if(y.g!="")h&&(y.g=h+"."+y.g),Xi(y,y.s);else{var R=l.location;y=R.protocol,h=h?h+"."+R.hostname:R.hostname,R=+R.port;var V=new kn(null);y&&Yi(V,y),h&&(V.g=h),R&&Xi(V,R),f&&(V.l=f),y=V}return f=a.D,h=a.ya,f&&h&&ge(y,f,h),ge(y,"VER",a.la),Xr(a,y),y}function Ku(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ie(new Zi({eb:f})):new Ie(a.pa),h.Ha(a.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Qu(){}n=Qu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ss(){}ss.prototype.g=function(a,h){return new ut(a,h)};function ut(a,h){De.call(this),this.g=new Fu(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!z(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!z(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Zn(this)}C(ut,De),ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ut.prototype.close=function(){Lo(this.g)},ut.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Ot(a),a=f);h.i.push(new Dm(h.Ya++,a)),h.G==3&&rs(h)},ut.prototype.N=function(){this.g.l=null,delete this.j,Lo(this.g),delete this.g,ut.aa.N.call(this)};function Yu(a){lt.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}C(Yu,lt);function Xu(){ko.call(this),this.status=1}C(Xu,ko);function Zn(a){this.g=a}C(Zn,Qu),Zn.prototype.ua=function(){P(this.g,"a")},Zn.prototype.ta=function(a){P(this.g,new Yu(a))},Zn.prototype.sa=function(a){P(this.g,new Xu)},Zn.prototype.ra=function(){P(this.g,"b")},ss.prototype.createWebChannel=ss.prototype.g,ut.prototype.send=ut.prototype.o,ut.prototype.open=ut.prototype.m,ut.prototype.close=ut.prototype.close,_f=function(){return new ss},yf=function(){return Gi()},gf=Sn,ya={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Wi.NO_ERROR=0,Wi.TIMEOUT=8,Wi.HTTP_ERROR=6,Es=Wi,fu.COMPLETE="complete",mf=fu,qe.EventType=gt,gt.OPEN="a",gt.CLOSE="b",gt.ERROR="c",gt.MESSAGE="d",De.prototype.listen=De.prototype.K,ei=qe,Ie.prototype.listenOnce=Ie.prototype.L,Ie.prototype.getLastError=Ie.prototype.Ka,Ie.prototype.getLastErrorCode=Ie.prototype.Ba,Ie.prototype.getStatus=Ie.prototype.Z,Ie.prototype.getResponseJson=Ie.prototype.Oa,Ie.prototype.getResponseText=Ie.prototype.oa,Ie.prototype.send=Ie.prototype.ea,Ie.prototype.setWithCredentials=Ie.prototype.Ha,pf=Ie}).apply(typeof ls<"u"?ls:typeof self<"u"?self:typeof window<"u"?window:{});const Rc="@firebase/firestore",Pc="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}We.UNAUTHENTICATED=new We(null),We.GOOGLE_CREDENTIALS=new We("google-credentials-uid"),We.FIRST_PARTY=new We("first-party-uid"),We.MOCK_USER=new We("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kr="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new Ga("@firebase/firestore");function nr(){return jn.logLevel}function H(n,...e){if(jn.logLevel<=ie.DEBUG){const t=e.map(sl);jn.debug(`Firestore (${kr}): ${n}`,...t)}}function qt(n,...e){if(jn.logLevel<=ie.ERROR){const t=e.map(sl);jn.error(`Firestore (${kr}): ${n}`,...t)}}function _r(n,...e){if(jn.logLevel<=ie.WARN){const t=e.map(sl);jn.warn(`Firestore (${kr}): ${n}`,...t)}}function sl(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,wf(n,r,t)}function wf(n,e,t){let r=`FIRESTORE (${kr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw qt(r),new Error(r)}function ue(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||wf(e,i,r)}function ee(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Gt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Lw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(We.UNAUTHENTICATED))}shutdown(){}}class Fw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Uw{constructor(e){this.t=e,this.currentUser=We.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ue(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new hn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new hn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new hn)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string",31837,{l:r}),new Ef(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string",2055,{h:e}),new We(e)}}class jw{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=We.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Bw{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new jw(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(We.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zw{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Et(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ue(this.o===void 0,3512);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new xc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ue(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new xc(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=qw(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function se(n,e){return n<e?-1:n>e?1:0}function _a(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const i=n.charAt(r),s=e.charAt(r);if(i!==s)return Ko(i)===Ko(s)?se(i,s):Ko(i)?1:-1}return se(n.length,e.length)}const $w=55296,Hw=57343;function Ko(n){const e=n.charCodeAt(0);return e>=$w&&e<=Hw}function wr(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="__name__";class Ct{constructor(e,t,r){t===void 0?t=0:t>e.length&&K(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&K(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ct.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ct?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=Ct.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return se(e.length,t.length)}static compareSegments(e,t){const r=Ct.isNumericId(e),i=Ct.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Ct.extractNumericId(e).compare(Ct.extractNumericId(t)):_a(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return cn.fromString(e.substring(4,e.length-2))}}class fe extends Ct{construct(e,t,r){return new fe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new fe(t)}static emptyPath(){return new fe([])}}const Gw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class je extends Ct{construct(e,t,r){return new je(e,t,r)}static isValidIdentifier(e){return Gw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Nc}static keyField(){return new je([Nc])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new B(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new B(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new je(t)}static emptyPath(){return new je([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(fe.fromString(e))}static fromName(e){return new W(fe.fromString(e).popFirst(5))}static empty(){return new W(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return fe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new fe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(n,e,t){if(!t)throw new B(M.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Ww(n,e,t,r){if(e===!0&&r===!0)throw new B(M.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Dc(n){if(!W.isDocumentKey(n))throw new B(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Vc(n){if(W.isDocumentKey(n))throw new B(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Tf(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function io(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":K(12329,{type:typeof n})}function On(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new B(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=io(n);throw new B(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Kw(n,e){if(e<=0)throw new B(M.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ni(n,e){if(!Tf(n))throw new B(M.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(i&&typeof o!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new B(M.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc=-62135596800,Mc=1e6;class ye{static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Mc);return new ye(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new B(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new B(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Oc)throw new B(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Mc}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ni(e,ye._jsonSchema))return new ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Oc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ye._jsonSchemaVersion="firestore/timestamp/1.0",ye._jsonSchema={type:Re("string",ye._jsonSchemaVersion),seconds:Re("number"),nanoseconds:Re("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{static fromTimestamp(e){return new Q(e)}static min(){return new Q(new ye(0,0))}static max(){return new Q(new ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const mi=-1;function Qw(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new ye(t+1,0):new ye(t,r));return new pn(i,W.empty(),e)}function Yw(n){return new pn(n.readTime,n.key,mi)}class pn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new pn(Q.min(),W.empty(),mi)}static max(){return new pn(Q.max(),W.empty(),mi)}}function Xw(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=W.comparator(n.documentKey,e.documentKey),t!==0?t:se(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Zw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rr(n){if(n.code!==M.FAILED_PRECONDITION||n.message!==Jw)throw n;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof L?t:L.resolve(t)}catch(t){return L.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):L.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):L.reject(t)}static resolve(e){return new L((t,r)=>{t(e)})}static reject(e){return new L((t,r)=>{r(e)})}static waitFor(e){return new L((t,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&t()},u=>r(u))}),o=!0,s===i&&t()})}static or(e){let t=L.resolve(!1);for(const r of e)t=t.next(i=>i?L.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new L((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;t(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,t){return new L((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function eE(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Pr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}so.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al=-1;function Di(n){return n==null}function Fs(n){return n===0&&1/n==-1/0}function tE(n){return typeof n=="number"&&Number.isInteger(n)&&!Fs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf="";function nE(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Lc(e)),e=rE(n.get(t),e);return Lc(e)}function rE(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case vf:t+="";break;default:t+=s}}return t}function Lc(n){return n+vf+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function En(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Af(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,t){this.comparator=e,this.root=t||Ue.EMPTY}insert(e,t){return new Ee(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new us(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new us(this.root,e,this.comparator,!1)}getReverseIterator(){return new us(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new us(this.root,e,this.comparator,!0)}}class us{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Ue.RED,this.left=i??Ue.EMPTY,this.right=s??Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Ue(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Ue.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw K(27949);return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new Ue(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Uc(this.data.getIterator())}getIteratorFrom(e){return new Uc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Pe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Pe(this.comparator);return t.data=e,t}}class Uc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.fields=e,e.sort(je.comparator)}static empty(){return new dt([])}unionWith(e){let t=new Pe(je.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new dt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return wr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class bf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new bf("Invalid base64 string: "+s):s}}(e);return new Be(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Be(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Be.EMPTY_BYTE_STRING=new Be("");const iE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mn(n){if(ue(!!n,39018),typeof n=="string"){let e=0;const t=iE.exec(n);if(ue(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Te(n.seconds),nanos:Te(n.nanos)}}function Te(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function gn(n){return typeof n=="string"?Be.fromBase64String(n):Be.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf="server_timestamp",Cf="__type__",kf="__previous_value__",Rf="__local_write_time__";function oo(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Cf])==null?void 0:r.stringValue)===Sf}function ao(n){const e=n.mapValue.fields[kf];return oo(e)?ao(e):e}function gi(n){const e=mn(n.mapValue.fields[Rf].timestampValue);return new ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,t,r,i,s,o,l,u,c,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d}}const Us="(default)";class yi{constructor(e,t){this.projectId=e,this.database=t||Us}static empty(){return new yi("","")}get isDefaultDatabase(){return this.database===Us}isEqual(e){return e instanceof yi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf="__type__",oE="__max__",cs={mapValue:{}},xf="__vector__",js="value";function yn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?oo(n)?4:lE(n)?9007199254740991:aE(n)?10:11:K(28295,{value:n})}function Vt(n,e){if(n===e)return!0;const t=yn(n);if(t!==yn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return gi(n).isEqual(gi(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=mn(i.timestampValue),l=mn(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return gn(i.bytesValue).isEqual(gn(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return Te(i.geoPointValue.latitude)===Te(s.geoPointValue.latitude)&&Te(i.geoPointValue.longitude)===Te(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Te(i.integerValue)===Te(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Te(i.doubleValue),l=Te(s.doubleValue);return o===l?Fs(o)===Fs(l):isNaN(o)&&isNaN(l)}return!1}(n,e);case 9:return wr(n.arrayValue.values||[],e.arrayValue.values||[],Vt);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Fc(o)!==Fc(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Vt(o[u],l[u])))return!1;return!0}(n,e);default:return K(52216,{left:n})}}function _i(n,e){return(n.values||[]).find(t=>Vt(t,e))!==void 0}function Er(n,e){if(n===e)return 0;const t=yn(n),r=yn(e);if(t!==r)return se(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return se(n.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Te(s.integerValue||s.doubleValue),u=Te(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return jc(n.timestampValue,e.timestampValue);case 4:return jc(gi(n),gi(e));case 5:return _a(n.stringValue,e.stringValue);case 6:return function(s,o){const l=gn(s),u=gn(o);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=se(l[c],u[c]);if(d!==0)return d}return se(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const l=se(Te(s.latitude),Te(o.latitude));return l!==0?l:se(Te(s.longitude),Te(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Bc(n.arrayValue,e.arrayValue);case 10:return function(s,o){var m,g,C,k;const l=s.fields||{},u=o.fields||{},c=(m=l[js])==null?void 0:m.arrayValue,d=(g=u[js])==null?void 0:g.arrayValue,p=se(((C=c==null?void 0:c.values)==null?void 0:C.length)||0,((k=d==null?void 0:d.values)==null?void 0:k.length)||0);return p!==0?p:Bc(c,d)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===cs.mapValue&&o===cs.mapValue)return 0;if(s===cs.mapValue)return 1;if(o===cs.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=_a(u[p],d[p]);if(m!==0)return m;const g=Er(l[u[p]],c[d[p]]);if(g!==0)return g}return se(u.length,d.length)}(n.mapValue,e.mapValue);default:throw K(23264,{he:t})}}function jc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return se(n,e);const t=mn(n),r=mn(e),i=se(t.seconds,r.seconds);return i!==0?i:se(t.nanos,r.nanos)}function Bc(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=Er(t[i],r[i]);if(s)return s}return se(t.length,r.length)}function Ir(n){return wa(n)}function wa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=mn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return gn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return W.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=wa(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${wa(t.fields[o])}`;return i+"}"}(n.mapValue):K(61005,{value:n})}function Is(n){switch(yn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ao(n);return e?16+Is(e):16;case 5:return 2*n.stringValue.length;case 6:return gn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Is(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return En(r.fields,(s,o)=>{i+=s.length+Is(o)}),i}(n.mapValue);default:throw K(13486,{value:n})}}function Bs(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ea(n){return!!n&&"integerValue"in n}function ll(n){return!!n&&"arrayValue"in n}function zc(n){return!!n&&"nullValue"in n}function qc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ts(n){return!!n&&"mapValue"in n}function aE(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Pf])==null?void 0:r.stringValue)===xf}function oi(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return En(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=oi(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=oi(n.arrayValue.values[t]);return e}return{...n}}function lE(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===oE}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.value=e}static empty(){return new Xe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ts(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=oi(t)}setAll(e){let t=je.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=l.popLast()}o?r[l.lastSegment()]=oi(o):i.push(l.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Ts(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Vt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Ts(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){En(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Xe(oi(this.value))}}function Nf(n){const e=[];return En(n.fields,(t,r)=>{const i=new je([t]);if(Ts(r)){const s=Nf(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new dt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,t,r,i,s,o,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Oe(e,0,Q.min(),Q.min(),Q.min(),Xe.empty(),0)}static newFoundDocument(e,t,r,i){return new Oe(e,1,t,Q.min(),r,i,0)}static newNoDocument(e,t){return new Oe(e,2,t,Q.min(),Q.min(),Xe.empty(),0)}static newUnknownDocument(e,t){return new Oe(e,3,t,Q.min(),Q.min(),Xe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Xe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Xe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Oe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Oe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Tr{constructor(e,t){this.position=e,this.inclusive=t}}function $c(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),t.key):r=Er(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Hc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Vt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class wi{constructor(e,t="asc"){this.field=e,this.dir=t}}function uE(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Df{}class ke extends Df{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new hE(e,t,r):t==="array-contains"?new pE(e,r):t==="in"?new mE(e,r):t==="not-in"?new gE(e,r):t==="array-contains-any"?new yE(e,r):new ke(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new dE(e,r):new fE(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Er(t,this.value)):t!==null&&yn(this.value)===yn(t)&&this.matchesComparison(Er(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class vt extends Df{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new vt(e,t)}matches(e){return Vf(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Vf(n){return n.op==="and"}function Of(n){return cE(n)&&Vf(n)}function cE(n){for(const e of n.filters)if(e instanceof vt)return!1;return!0}function Ia(n){if(n instanceof ke)return n.field.canonicalString()+n.op.toString()+Ir(n.value);if(Of(n))return n.filters.map(e=>Ia(e)).join(",");{const e=n.filters.map(t=>Ia(t)).join(",");return`${n.op}(${e})`}}function Mf(n,e){return n instanceof ke?function(r,i){return i instanceof ke&&r.op===i.op&&r.field.isEqual(i.field)&&Vt(r.value,i.value)}(n,e):n instanceof vt?function(r,i){return i instanceof vt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Mf(o,i.filters[l]),!0):!1}(n,e):void K(19439)}function Lf(n){return n instanceof ke?function(t){return`${t.field.canonicalString()} ${t.op} ${Ir(t.value)}`}(n):n instanceof vt?function(t){return t.op.toString()+" {"+t.getFilters().map(Lf).join(" ,")+"}"}(n):"Filter"}class hE extends ke{constructor(e,t,r){super(e,t,r),this.key=W.fromName(r.referenceValue)}matches(e){const t=W.comparator(e.key,this.key);return this.matchesComparison(t)}}class dE extends ke{constructor(e,t){super(e,"in",t),this.keys=Ff("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class fE extends ke{constructor(e,t){super(e,"not-in",t),this.keys=Ff("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ff(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>W.fromName(r.referenceValue))}class pE extends ke{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ll(t)&&_i(t.arrayValue,this.value)}}class mE extends ke{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&_i(this.value.arrayValue,t)}}class gE extends ke{constructor(e,t){super(e,"not-in",t)}matches(e){if(_i(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!_i(this.value.arrayValue,t)}}class yE extends ke{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ll(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>_i(this.value.arrayValue,r))}}/**
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
 */class _E{constructor(e,t=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function Gc(n,e=null,t=[],r=[],i=null,s=null,o=null){return new _E(n,e,t,r,i,s,o)}function ul(n){const e=ee(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ia(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Di(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Ir(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Ir(r)).join(",")),e.Te=t}return e.Te}function cl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!uE(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Mf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Hc(n.startAt,e.startAt)&&Hc(n.endAt,e.endAt)}function Ta(n){return W.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,t=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function wE(n,e,t,r,i,s,o,l){return new qn(n,e,t,r,i,s,o,l)}function hl(n){return new qn(n)}function Wc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function dl(n){return n.collectionGroup!==null}function dr(n){const e=ee(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Pe(je.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new wi(s,r))}),t.has(je.keyField().canonicalString())||e.Ie.push(new wi(je.keyField(),r))}return e.Ie}function Pt(n){const e=ee(n);return e.Ee||(e.Ee=EE(e,dr(n))),e.Ee}function EE(n,e){if(n.limitType==="F")return Gc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new wi(i.field,s)});const t=n.endAt?new Tr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Tr(n.startAt.position,n.startAt.inclusive):null;return Gc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function va(n,e){const t=n.filters.concat([e]);return new qn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function zs(n,e,t){return new qn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function lo(n,e){return cl(Pt(n),Pt(e))&&n.limitType===e.limitType}function Uf(n){return`${ul(Pt(n))}|lt:${n.limitType}`}function rr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Lf(i)).join(", ")}]`),Di(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Ir(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Ir(i)).join(",")),`Target(${r})`}(Pt(n))}; limitType=${n.limitType})`}function uo(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of dr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=$c(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,dr(r),i)||r.endAt&&!function(o,l,u){const c=$c(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,dr(r),i))}(n,e)}function IE(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function jf(n){return(e,t)=>{let r=!1;for(const i of dr(n)){const s=TE(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function TE(n,e,t){const r=n.field.isKeyField()?W.comparator(e.key,t.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Er(u,c):K(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return K(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){En(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Af(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE=new Ee(W.comparator);function $t(){return vE}const Bf=new Ee(W.comparator);function ti(...n){let e=Bf;for(const t of n)e=e.insert(t.key,t);return e}function zf(n){let e=Bf;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Dn(){return ai()}function qf(){return ai()}function ai(){return new $n(n=>n.toString(),(n,e)=>n.isEqual(e))}const AE=new Ee(W.comparator),bE=new Pe(W.comparator);function oe(...n){let e=bE;for(const t of n)e=e.add(t);return e}const SE=new Pe(se);function CE(){return SE}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fs(e)?"-0":e}}function $f(n){return{integerValue:""+n}}function kE(n,e){return tE(e)?$f(e):fl(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(){this._=void 0}}function RE(n,e,t){return n instanceof Ei?function(i,s){const o={fields:{[Cf]:{stringValue:Sf},[Rf]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&oo(s)&&(s=ao(s)),s&&(o.fields[kf]=s),{mapValue:o}}(t,e):n instanceof Ii?Gf(n,e):n instanceof Ti?Wf(n,e):function(i,s){const o=Hf(i,s),l=Kc(o)+Kc(i.Ae);return Ea(o)&&Ea(i.Ae)?$f(l):fl(i.serializer,l)}(n,e)}function PE(n,e,t){return n instanceof Ii?Gf(n,e):n instanceof Ti?Wf(n,e):t}function Hf(n,e){return n instanceof qs?function(r){return Ea(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ei extends co{}class Ii extends co{constructor(e){super(),this.elements=e}}function Gf(n,e){const t=Kf(e);for(const r of n.elements)t.some(i=>Vt(i,r))||t.push(r);return{arrayValue:{values:t}}}class Ti extends co{constructor(e){super(),this.elements=e}}function Wf(n,e){let t=Kf(e);for(const r of n.elements)t=t.filter(i=>!Vt(i,r));return{arrayValue:{values:t}}}class qs extends co{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Kc(n){return Te(n.integerValue||n.doubleValue)}function Kf(n){return ll(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e,t){this.field=e,this.transform=t}}function NE(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Ii&&i instanceof Ii||r instanceof Ti&&i instanceof Ti?wr(r.elements,i.elements,Vt):r instanceof qs&&i instanceof qs?Vt(r.Ae,i.Ae):r instanceof Ei&&i instanceof Ei}(n.transform,e.transform)}class DE{constructor(e,t){this.version=e,this.transformResults=t}}class et{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new et}static exists(e){return new et(void 0,e)}static updateTime(e){return new et(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ho{}function Qf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new pl(n.key,et.none()):new Vi(n.key,n.data,et.none());{const t=n.data,r=Xe.empty();let i=new Pe(je.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new In(n.key,r,new dt(i.toArray()),et.none())}}function VE(n,e,t){n instanceof Vi?function(i,s,o){const l=i.value.clone(),u=Yc(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):n instanceof In?function(i,s,o){if(!vs(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Yc(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Yf(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function li(n,e,t,r){return n instanceof Vi?function(s,o,l,u){if(!vs(s.precondition,o))return l;const c=s.value.clone(),d=Xc(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof In?function(s,o,l,u){if(!vs(s.precondition,o))return l;const c=Xc(s.fieldTransforms,u,o),d=o.data;return d.setAll(Yf(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(s,o,l){return vs(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(n,e,t)}function OE(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Hf(r.transform,i||null);s!=null&&(t===null&&(t=Xe.empty()),t.set(r.field,s))}return t||null}function Qc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&wr(r,i,(s,o)=>NE(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Vi extends ho{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class In extends ho{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Yf(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Yc(n,e,t){const r=new Map;ue(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,PE(o,l,t[i]))}return r}function Xc(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,RE(s,o,e))}return r}class pl extends ho{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Xf extends ho{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&VE(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=li(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=li(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=qf();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=t.has(i.key)?null:l;const u=Qf(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),oe())}isEqual(e){return this.batchId===e.batchId&&wr(this.mutations,e.mutations,(t,r)=>Qc(t,r))&&wr(this.baseMutations,e.baseMutations,(t,r)=>Qc(t,r))}}class ml{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){ue(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return AE}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ml(e,t,r,i)}}/**
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
 */class LE{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se,le;function Jf(n){switch(n){case M.OK:return K(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return K(15467,{code:n})}}function Zf(n){if(n===void 0)return qt("GRPC error has no .code"),M.UNKNOWN;switch(n){case Se.OK:return M.OK;case Se.CANCELLED:return M.CANCELLED;case Se.UNKNOWN:return M.UNKNOWN;case Se.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Se.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Se.INTERNAL:return M.INTERNAL;case Se.UNAVAILABLE:return M.UNAVAILABLE;case Se.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Se.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Se.NOT_FOUND:return M.NOT_FOUND;case Se.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Se.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Se.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Se.ABORTED:return M.ABORTED;case Se.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Se.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Se.DATA_LOSS:return M.DATA_LOSS;default:return K(39323,{code:n})}}(le=Se||(Se={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function UE(){return new TextEncoder}/**
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
 */const jE=new cn([4294967295,4294967295],0);function Jc(n){const e=UE().encode(n),t=new ff;return t.update(e),new Uint8Array(t.digest())}function Zc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new cn([t,r],0),new cn([i,s],0)]}class gl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ni(`Invalid padding: ${t}`);if(r<0)throw new ni(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ni(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ni(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=cn.fromNumber(this.ge)}ye(e,t,r){let i=e.add(t.multiply(cn.fromNumber(r)));return i.compare(jE)===1&&(i=new cn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Jc(e),[r,i]=Zc(t);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new gl(s,i,t);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const t=Jc(e),[r,i]=Zc(t);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ni extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Oi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new fo(Q.min(),i,new Ee(se),$t(),oe())}}class Oi{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Oi(r,t,oe(),oe(),oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,t,r,i){this.be=e,this.removedTargetIds=t,this.key=r,this.De=i}}class ep{constructor(e,t){this.targetId=e,this.Ce=t}}class tp{constructor(e,t,r=Be.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class eh{constructor(){this.ve=0,this.Fe=th(),this.Me=Be.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=oe(),t=oe(),r=oe();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:K(38017,{changeType:s})}}),new Oi(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=th()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ue(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class BE{constructor(e){this.Ge=e,this.ze=new Map,this.je=$t(),this.Je=hs(),this.He=hs(),this.Ye=new Ee(se)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:K(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,i)=>{this.rt(i)&&t(i)})}st(e){const t=e.targetId,r=e.Ce.count,i=this.ot(t);if(i){const s=i.target;if(Ta(s))if(r===0){const o=new W(s.path);this.et(t,o,Oe.newNoDocument(o,Q.min()))}else ue(r===1,20013,{expectedCount:r});else{const o=this._t(t);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(t);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,c)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,l;try{o=gn(r).toUint8Array()}catch(u){if(u instanceof bf)return _r("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new gl(o,i,s)}catch(u){return _r(u instanceof ni?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(t,s,null),i++)}),i}Tt(e){const t=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&Ta(l.target)){const u=new W(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,Oe.newNoDocument(u,e))}s.Be&&(t.set(o,s.ke()),s.qe())}});let r=oe();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new fo(e,t,this.Ye,this.je,r);return this.je=$t(),this.Je=hs(),this.He=hs(),this.Ye=new Ee(se),i}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,t)?i.Qe(t,1):i.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new eh,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Pe(se),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Pe(se),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||H("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new eh),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function hs(){return new Ee(W.comparator)}function th(){return new Ee(W.comparator)}const zE={asc:"ASCENDING",desc:"DESCENDING"},qE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$E={and:"AND",or:"OR"};class HE{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Aa(n,e){return n.useProto3Json||Di(e)?e:{value:e}}function $s(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function np(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function GE(n,e){return $s(n,e.toTimestamp())}function pt(n){return ue(!!n,49232),Q.fromTimestamp(function(t){const r=mn(t);return new ye(r.seconds,r.nanos)}(n))}function yl(n,e){return ba(n,e).canonicalString()}function ba(n,e){const t=function(i){return new fe(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function rp(n){const e=fe.fromString(n);return ue(up(e),10190,{key:e.toString()}),e}function Hs(n,e){return yl(n.databaseId,e.path)}function ui(n,e){const t=rp(e);if(t.get(1)!==n.databaseId.projectId)throw new B(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new B(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new W(sp(t))}function ip(n,e){return yl(n.databaseId,e)}function WE(n){const e=rp(n);return e.length===4?fe.emptyPath():sp(e)}function Sa(n){return new fe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function sp(n){return ue(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function nh(n,e,t){return{name:Hs(n,e),fields:t.value.mapValue.fields}}function KE(n,e){return"found"in e?function(r,i){ue(!!i.found,43571),i.found.name,i.found.updateTime;const s=ui(r,i.found.name),o=pt(i.found.updateTime),l=i.found.createTime?pt(i.found.createTime):Q.min(),u=new Xe({mapValue:{fields:i.found.fields}});return Oe.newFoundDocument(s,o,l,u)}(n,e):"missing"in e?function(r,i){ue(!!i.missing,3894),ue(!!i.readTime,22933);const s=ui(r,i.missing),o=pt(i.readTime);return Oe.newNoDocument(s,o)}(n,e):K(7234,{result:e})}function QE(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(ue(d===void 0||typeof d=="string",58123),Be.fromBase64String(d||"")):(ue(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Be.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?M.UNKNOWN:Zf(c.code);return new B(d,c.message||"")}(o);t=new tp(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ui(n,r.document.name),s=pt(r.document.updateTime),o=r.document.createTime?pt(r.document.createTime):Q.min(),l=new Xe({mapValue:{fields:r.document.fields}}),u=Oe.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];t=new As(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ui(n,r.document),s=r.readTime?pt(r.readTime):Q.min(),o=Oe.newNoDocument(i,s),l=r.removedTargetIds||[];t=new As([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ui(n,r.document),s=r.removedTargetIds||[];t=new As([],s,i,null)}else{if(!("filter"in e))return K(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new FE(i,s),l=r.targetId;t=new ep(l,o)}}return t}function op(n,e){let t;if(e instanceof Vi)t={update:nh(n,e.key,e.value)};else if(e instanceof pl)t={delete:Hs(n,e.key)};else if(e instanceof In)t={update:nh(n,e.key,e.data),updateMask:iI(e.fieldMask)};else{if(!(e instanceof Xf))return K(16599,{Vt:e.type});t={verify:Hs(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Ei)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ii)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ti)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof qs)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw K(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:GE(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K(27497)}(n,e.precondition)),t}function YE(n,e){return n&&n.length>0?(ue(e!==void 0,14353),n.map(t=>function(i,s){let o=i.updateTime?pt(i.updateTime):pt(s);return o.isEqual(Q.min())&&(o=pt(s)),new DE(o,i.transformResults||[])}(t,e))):[]}function XE(n,e){return{documents:[ip(n,e.path)]}}function JE(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=ip(n,i);const s=function(c){if(c.length!==0)return lp(vt.create(c,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:ir(m.field),direction:tI(m.dir)}}(d))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=Aa(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:t,parent:i}}function ZE(n){let e=WE(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ue(r===1,65062);const d=t.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];t.where&&(s=function(p){const m=ap(p);return m instanceof vt&&Of(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(m=>function(C){return new wi(sr(C.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(t.orderBy));let l=null;t.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Di(m)?null:m}(t.limit));let u=null;t.startAt&&(u=function(p){const m=!!p.before,g=p.values||[];return new Tr(g,m)}(t.startAt));let c=null;return t.endAt&&(c=function(p){const m=!p.before,g=p.values||[];return new Tr(g,m)}(t.endAt)),wE(e,i,o,s,l,"F",u,c)}function eI(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ap(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=sr(t.unaryFilter.field);return ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=sr(t.unaryFilter.field);return ke.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=sr(t.unaryFilter.field);return ke.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=sr(t.unaryFilter.field);return ke.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}}(n):n.fieldFilter!==void 0?function(t){return ke.create(sr(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return vt.create(t.compositeFilter.filters.map(r=>ap(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K(1026)}}(t.compositeFilter.op))}(n):K(30097,{filter:n})}function tI(n){return zE[n]}function nI(n){return qE[n]}function rI(n){return $E[n]}function ir(n){return{fieldPath:n.canonicalString()}}function sr(n){return je.fromServerFormat(n.fieldPath)}function lp(n){return n instanceof ke?function(t){if(t.op==="=="){if(qc(t.value))return{unaryFilter:{field:ir(t.field),op:"IS_NAN"}};if(zc(t.value))return{unaryFilter:{field:ir(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(qc(t.value))return{unaryFilter:{field:ir(t.field),op:"IS_NOT_NAN"}};if(zc(t.value))return{unaryFilter:{field:ir(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ir(t.field),op:nI(t.op),value:t.value}}}(n):n instanceof vt?function(t){const r=t.getFilters().map(i=>lp(i));return r.length===1?r[0]:{compositeFilter:{op:rI(t.op),filters:r}}}(n):K(54877,{filter:n})}function iI(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function up(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,t,r,i,s=Q.min(),o=Q.min(),l=Be.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new on(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new on(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new on(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new on(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e){this.yt=e}}function oI(n){const e=ZE({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?zs(e,e.limit,"L"):e}/**
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
 */class aI{constructor(){this.Cn=new lI}addToCollectionParentIndex(e,t){return this.Cn.add(t),L.resolve()}getCollectionParents(e,t){return L.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return L.resolve()}deleteFieldIndex(e,t){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,t){return L.resolve()}getDocumentsMatchingTarget(e,t){return L.resolve(null)}getIndexType(e,t){return L.resolve(0)}getFieldIndexes(e,t){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,t){return L.resolve(pn.min())}getMinOffsetFromCollectionGroup(e,t){return L.resolve(pn.min())}updateCollectionGroup(e,t,r){return L.resolve()}updateIndexEntries(e,t){return L.resolve()}}class lI{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Pe(fe.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Pe(fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},cp=41943040;class Ze{static withCacheSize(e){return new Ze(e,Ze.DEFAULT_COLLECTION_PERCENTILE,Ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ze.DEFAULT_COLLECTION_PERCENTILE=10,Ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ze.DEFAULT=new Ze(cp,Ze.DEFAULT_COLLECTION_PERCENTILE,Ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ze.DISABLED=new Ze(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new vr(0)}static cr(){return new vr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih="LruGarbageCollector",uI=1048576;function sh([n,e],[t,r]){const i=se(n,t);return i===0?se(e,r):i}class cI{constructor(e){this.Ir=e,this.buffer=new Pe(sh),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();sh(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class hI{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){H(ih,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Pr(t)?H(ih,"Ignoring IndexedDB error during garbage collection: ",t):await Rr(t)}await this.Vr(3e5)})}}class dI{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return L.resolve(so.ce);const r=new cI(t);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(rh)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),rh):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,i,s,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,t))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),nr()<=ie.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function fI(n,e){return new dI(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(){this.changes=new $n(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Oe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?L.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
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
 */class mI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&li(r.mutation,i,dt.empty(),ye.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=oe()){const i=Dn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=ti();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Dn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,oe()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,r,i){let s=$t();const o=ai(),l=function(){return ai()}();return t.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof In)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),li(d.mutation,c,d.mutation.getFieldMask(),ye.now())):o.set(c.key,dt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),t.forEach((c,d)=>l.set(c,new mI(d,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,t){const r=ai();let i=new Ee((o,l)=>o-l),s=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=t.get(u);if(c===null)return;let d=r.get(u)||dt.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||oe()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=qf();d.forEach(m=>{if(!s.has(m)){const g=Qf(t.get(m),r.get(m));g!==null&&p.set(m,g),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):dl(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):L.resolve(Dn());let l=mi,u=s;return o.next(c=>L.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?L.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,oe())).next(d=>({batchId:l,changes:zf(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new W(t)).next(r=>{let i=ti();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=ti();return this.indexManager.getCollectionParents(e,s).next(l=>L.forEach(l,u=>{const c=function(p,m){return new qn(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Oe.newInvalidDocument(d)))});let l=ti();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&li(d.mutation,c,dt.empty(),ye.now()),uo(t,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return L.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:pt(i.createTime)}}(t)),L.resolve()}getNamedQuery(e,t){return L.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(i){return{name:i.name,query:oI(i.bundledQuery),readTime:pt(i.readTime)}}(t)),L.resolve()}}/**
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
 */class _I{constructor(){this.overlays=new Ee(W.comparator),this.qr=new Map}getOverlay(e,t){return L.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Dn();return L.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.St(e,t,s)}),L.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),L.resolve()}getOverlaysForCollection(e,t,r){const i=Dn(),s=t.length+1,o=new W(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new Ee((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Dn(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Dn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return L.resolve(l)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new LE(t,r));let s=this.qr.get(t);s===void 0&&(s=oe(),this.qr.set(t,s)),this.qr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(){this.sessionToken=Be.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(){this.Qr=new Pe(Ve.$r),this.Ur=new Pe(Ve.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new Ve(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Gr(new Ve(e,t))}zr(e,t){e.forEach(r=>this.removeReference(r,t))}jr(e){const t=new W(new fe([])),r=new Ve(t,e),i=new Ve(t,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new W(new fe([])),r=new Ve(t,e),i=new Ve(t,e+1);let s=oe();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new Ve(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ve{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return W.comparator(e.key,t.key)||se(e.Yr,t.Yr)}static Kr(e,t){return se(e.Yr,t.Yr)||W.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Pe(Ve.$r)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ME(s,t,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new Ve(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,t){return L.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.ei(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?al:this.tr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ve(t,0),i=new Ve(t,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const l=this.Xr(o.Yr);s.push(l)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Pe(se);return t.forEach(i=>{const s=new Ve(i,0),o=new Ve(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],l=>{r=r.add(l.Yr)})}),L.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const o=new Ve(new W(s),0);let l=new Pe(se);return this.Zr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Yr)),!0)},o),L.resolve(this.ti(l))}ti(e){const t=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ue(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return L.forEach(t.mutations,i=>{const s=new Ve(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,t){const r=new Ve(t,0),i=this.Zr.firstAfterOrEqual(r);return L.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e){this.ri=e,this.docs=function(){return new Ee(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return L.resolve(r?r.document.mutableCopy():Oe.newInvalidDocument(t))}getEntries(e,t){let r=$t();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Oe.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=$t();const o=t.path,l=new W(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Xw(Yw(d),r)<=0||(i.has(d.key)||uo(t,d))&&(s=s.insert(d.key,d.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,t,r,i){K(9500)}ii(e,t){return L.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new TI(this)}getSize(e){return L.resolve(this.size)}}class TI extends pI{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),L.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e){this.persistence=e,this.si=new $n(t=>ul(t),cl),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.oi=0,this._i=new _l,this.targetCount=0,this.ai=vr.ur()}forEachTarget(e,t){return this.si.forEach((r,i)=>t(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),L.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new vr(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,L.resolve()}updateTargetData(e,t){return this.Pr(t),L.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return L.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),L.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),L.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return L.resolve(r)}containsKey(e,t){return L.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e,t){this.ui={},this.overlays={},this.ci=new so(0),this.li=!1,this.li=!0,this.hi=new wI,this.referenceDelegate=e(this),this.Pi=new vI(this),this.indexManager=new aI,this.remoteDocumentCache=function(i){return new II(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new sI(t),this.Ii=new yI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new _I,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new EI(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){H("MemoryPersistence","Starting transaction:",e);const i=new AI(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,t){return L.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,t)))}}class AI extends Zw{constructor(e){super(),this.currentSequenceNumber=e}}class wl{constructor(e){this.persistence=e,this.Ri=new _l,this.Vi=null}static mi(e){return new wl(e)}get fi(){if(this.Vi)return this.Vi;throw K(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),L.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),L.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.fi,r=>{const i=W.fromPath(r);return this.gi(e,i).next(s=>{s||t.removeEntry(i,Q.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return L.or([()=>L.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Gs{constructor(e,t){this.persistence=e,this.pi=new $n(r=>nE(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=fI(this,t)}static mi(e,t){return new Gs(e,t)}Ei(){}di(e){return L.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}wr(e){let t=0;return this.pr(e,r=>{t++}).next(()=>t)}pr(e,t){return L.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?L.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,t).next(l=>{l||(r++,s.removeEntry(o,Q.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),L.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),L.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Is(e.data.value)),t}br(e,t,r){return L.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.pi.get(t);return L.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=i}static As(e,t){let r=oe(),i=oe();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new El(e,t.fromCache,r,i)}}/**
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
 */class bI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class SI{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return gg()?8:eE(Ke())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.ys(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new bI;return this.Ss(e,t,o).next(l=>{if(s.result=l,this.Vs)return this.bs(e,t,o,l.size)})}).next(()=>s.result)}bs(e,t,r,i){return r.documentReadCount<this.fs?(nr()<=ie.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",rr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),L.resolve()):(nr()<=ie.DEBUG&&H("QueryEngine","Query:",rr(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(nr()<=ie.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",rr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Pt(t))):L.resolve())}ys(e,t){if(Wc(t))return L.resolve(null);let r=Pt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=zs(t,null,"F"),r=Pt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=oe(...s);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ds(t,l);return this.Cs(t,c,o,u.readTime)?this.ys(e,zs(t,null,"F")):this.vs(e,c,t,u)}))})))}ws(e,t,r,i){return Wc(t)||i.isEqual(Q.min())?L.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(t,s);return this.Cs(t,o,r,i)?L.resolve(null):(nr()<=ie.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),rr(t)),this.vs(e,o,t,Qw(i,mi)).next(l=>l))})}Ds(e,t){let r=new Pe(jf(e));return t.forEach((i,s)=>{uo(e,s)&&(r=r.add(s))}),r}Cs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,t,r){return nr()<=ie.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",rr(t)),this.ps.getDocumentsMatchingQuery(e,t,pn.min(),r)}vs(e,t,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il="LocalStore",CI=3e8;class kI{constructor(e,t,r,i){this.persistence=e,this.Fs=t,this.serializer=i,this.Ms=new Ee(se),this.xs=new $n(s=>ul(s),cl),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gI(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function RI(n,e,t,r){return new kI(n,e,t,r)}async function dp(n,e){const t=ee(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Bs(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=oe();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return t.localDocuments.getDocuments(r,u).next(c=>({Ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function PI(n,e){const t=ee(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let g=L.resolve();return m.forEach(C=>{g=g.next(()=>d.getEntry(u,C)).next(k=>{const N=c.docVersions.get(C);ue(N!==null,48541),k.version.compareTo(N)<0&&(p.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),d.addEntry(k)))})}),g.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=oe();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function fp(n){const e=ee(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function xI(n,e){const t=ee(n),r=e.snapshotVersion;let i=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Ns.newChangeBuffer({trackRemovals:!0});i=t.Ms;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(t.Pi.removeMatchingKeys(s,d.removedDocuments,p).next(()=>t.Pi.addMatchingKeys(s,d.addedDocuments,p)));let g=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?g=g.withResumeToken(Be.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):d.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(d.resumeToken,r)),i=i.insert(p,g),function(k,N,x){return k.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=CI?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(m,g,d)&&l.push(t.Pi.updateTargetData(s,g))});let u=$t(),c=oe();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(NI(s,o,e.documentUpdates).next(d=>{u=d.ks,c=d.qs})),!r.isEqual(Q.min())){const d=t.Pi.getLastRemoteSnapshotVersion(s).next(p=>t.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return L.waitFor(l).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(t.Ms=i,s))}function NI(n,e,t){let r=oe(),i=oe();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=$t();return t.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Q.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H(Il,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{ks:o,qs:i}})}function DI(n,e){const t=ee(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=al),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function VI(n,e){const t=ee(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Pi.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):t.Pi.allocateTargetId(r).next(o=>(i=new on(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r})}async function Ca(n,e,t){const r=ee(n),i=r.Ms.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Pr(o))throw o;H(Il,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function oh(n,e,t){const r=ee(n);let i=Q.min(),s=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=ee(u),m=p.xs.get(d);return m!==void 0?L.resolve(p.Ms.get(m)):p.Pi.getTargetData(c,d)}(r,o,Pt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,t?i:Q.min(),t?s:oe())).next(l=>(OI(r,IE(e),l),{documents:l,Qs:s})))}function OI(n,e,t){let r=n.Os.get(e)||Q.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Os.set(e,r)}class ah{constructor(){this.activeTargetIds=CE()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class MI{constructor(){this.Mo=new ah,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new ah,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class LI{Oo(e){}shutdown(){}}/**
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
 */const lh="ConnectivityMonitor";class uh{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){H(lh,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){H(lh,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ds=null;function ka(){return ds===null?ds=function(){return 268435456+Math.round(2147483648*Math.random())}():ds++,"0x"+ds.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo="RestConnection",FI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class UI{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Us?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,t,r,i,s){const o=ka(),l=this.zo(e,t.toUriEncodedString());H(Qo,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,i,s);const{host:c}=new URL(l),d=br(c);return this.Jo(e,l,u,r,d).then(p=>(H(Qo,`Received RPC '${e}' ${o}: `,p),p),p=>{throw _r(Qo,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Ho(e,t,r,i,s,o){return this.Go(e,t,r,i,s)}jo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+kr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,t){const r=FI[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge="WebChannelConnection";class BI extends UI{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,i,s){const o=ka();return new Promise((l,u)=>{const c=new pf;c.setWithCredentials(!0),c.listenOnce(mf.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Es.NO_ERROR:const p=c.getResponseJson();H(Ge,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Es.TIMEOUT:H(Ge,`RPC '${e}' ${o} timed out`),u(new B(M.DEADLINE_EXCEEDED,"Request time out"));break;case Es.HTTP_ERROR:const m=c.getStatus();if(H(Ge,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const C=g==null?void 0:g.error;if(C&&C.status&&C.message){const k=function(x){const z=x.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(z)>=0?z:M.UNKNOWN}(C.status);u(new B(k,C.message))}else u(new B(M.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new B(M.UNAVAILABLE,"Connection failed."));break;default:K(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{H(Ge,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);H(Ge,`RPC '${e}' ${o} sending request:`,i),c.send(t,"POST",d,r,15)})}T_(e,t,r){const i=ka(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=_f(),l=yf(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const d=s.join("");H(Ge,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);this.I_(p);let m=!1,g=!1;const C=new jI({Yo:N=>{g?H(Ge,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(m||(H(Ge,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),H(Ge,`RPC '${e}' stream ${i} sending:`,N),p.send(N))},Zo:()=>p.close()}),k=(N,x,z)=>{N.listen(x,F=>{try{z(F)}catch(G){setTimeout(()=>{throw G},0)}})};return k(p,ei.EventType.OPEN,()=>{g||(H(Ge,`RPC '${e}' stream ${i} transport opened.`),C.o_())}),k(p,ei.EventType.CLOSE,()=>{g||(g=!0,H(Ge,`RPC '${e}' stream ${i} transport closed`),C.a_(),this.E_(p))}),k(p,ei.EventType.ERROR,N=>{g||(g=!0,_r(Ge,`RPC '${e}' stream ${i} transport errored. Name:`,N.name,"Message:",N.message),C.a_(new B(M.UNAVAILABLE,"The operation could not be completed")))}),k(p,ei.EventType.MESSAGE,N=>{var x;if(!g){const z=N.data[0];ue(!!z,16349);const F=z,G=(F==null?void 0:F.error)||((x=F[0])==null?void 0:x.error);if(G){H(Ge,`RPC '${e}' stream ${i} received error:`,G);const $=G.status;let D=function(I){const T=Se[I];if(T!==void 0)return Zf(T)}($),A=G.message;D===void 0&&(D=M.INTERNAL,A="Unknown error status: "+$+" with message "+G.message),g=!0,C.a_(new B(D,A)),p.close()}else H(Ge,`RPC '${e}' stream ${i} received:`,z),C.u_(z)}}),k(l,gf.STAT_EVENT,N=>{N.stat===ya.PROXY?H(Ge,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===ya.NOPROXY&&H(Ge,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.__()},0),C}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function Yo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(n){return new HE(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch="PersistentStream";class pp{constructor(e,t,r,i,s,o,l,u){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Tl(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===M.RESOURCE_EXHAUSTED?(qt(t.toString()),qt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===t&&this.G_(r,i)},r=>{e(()=>{const i=new B(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return H(ch,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(H(ch,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zI extends pp{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=QE(this.serializer,e),r=function(s){if(!("targetChange"in s))return Q.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?pt(o.readTime):Q.min()}(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=Sa(this.serializer),t.addTarget=function(s,o){let l;const u=o.target;if(l=Ta(u)?{documents:XE(s,u)}:{query:JE(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=np(s,o.resumeToken);const c=Aa(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Q.min())>0){l.readTime=$s(s,o.snapshotVersion.toTimestamp());const c=Aa(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=eI(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=Sa(this.serializer),t.removeTarget=e,this.q_(t)}}class qI extends pp{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=YE(e.writeResults,e.commitTime),r=pt(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Sa(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>op(this.serializer,r))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{}class HI extends $I{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new B(M.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,ba(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(M.UNKNOWN,s.toString())})}Ho(e,t,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,ba(t,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(M.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class GI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(qt(t),this.aa=!1):H("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn="RemoteStore";class WI{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Hn(this)&&(H(Bn,"Restarting streams for network reachability change."),await async function(u){const c=ee(u);c.Ea.add(4),await Mi(c),c.Ra.set("Unknown"),c.Ea.delete(4),await mo(c)}(this))})}),this.Ra=new GI(r,i)}}async function mo(n){if(Hn(n))for(const e of n.da)await e(!0)}async function Mi(n){for(const e of n.da)await e(!1)}function mp(n,e){const t=ee(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Sl(t)?bl(t):xr(t).O_()&&Al(t,e))}function vl(n,e){const t=ee(n),r=xr(t);t.Ia.delete(e),r.O_()&&gp(t,e),t.Ia.size===0&&(r.O_()?r.L_():Hn(t)&&t.Ra.set("Unknown"))}function Al(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}xr(n).Y_(e)}function gp(n,e){n.Va.Ue(e),xr(n).Z_(e)}function bl(n){n.Va=new BE({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),xr(n).start(),n.Ra.ua()}function Sl(n){return Hn(n)&&!xr(n).x_()&&n.Ia.size>0}function Hn(n){return ee(n).Ea.size===0}function yp(n){n.Va=void 0}async function KI(n){n.Ra.set("Online")}async function QI(n){n.Ia.forEach((e,t)=>{Al(n,e)})}async function YI(n,e){yp(n),Sl(n)?(n.Ra.ha(e),bl(n)):n.Ra.set("Unknown")}async function XI(n,e,t){if(n.Ra.set("Online"),e instanceof tp&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))}(n,e)}catch(r){H(Bn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ws(n,r)}else if(e instanceof As?n.Va.Ze(e):e instanceof ep?n.Va.st(e):n.Va.tt(e),!t.isEqual(Q.min()))try{const r=await fp(n.localStore);t.compareTo(r)>=0&&await function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.Ia.get(c);d&&s.Ia.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.Ia.get(u);if(!d)return;s.Ia.set(u,d.withResumeToken(Be.EMPTY_BYTE_STRING,d.snapshotVersion)),gp(s,u);const p=new on(d.target,u,c,d.sequenceNumber);Al(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){H(Bn,"Failed to raise snapshot:",r),await Ws(n,r)}}async function Ws(n,e,t){if(!Pr(e))throw e;n.Ea.add(1),await Mi(n),n.Ra.set("Offline"),t||(t=()=>fp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{H(Bn,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await mo(n)})}function _p(n,e){return e().catch(t=>Ws(n,t,e))}async function go(n){const e=ee(n),t=_n(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:al;for(;JI(e);)try{const i=await DI(e.localStore,r);if(i===null){e.Ta.length===0&&t.L_();break}r=i.batchId,ZI(e,i)}catch(i){await Ws(e,i)}wp(e)&&Ep(e)}function JI(n){return Hn(n)&&n.Ta.length<10}function ZI(n,e){n.Ta.push(e);const t=_n(n);t.O_()&&t.X_&&t.ea(e.mutations)}function wp(n){return Hn(n)&&!_n(n).x_()&&n.Ta.length>0}function Ep(n){_n(n).start()}async function eT(n){_n(n).ra()}async function tT(n){const e=_n(n);for(const t of n.Ta)e.ea(t.mutations)}async function nT(n,e,t){const r=n.Ta.shift(),i=ml.from(r,e,t);await _p(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await go(n)}async function rT(n,e){e&&_n(n).X_&&await async function(r,i){if(function(o){return Jf(o)&&o!==M.ABORTED}(i.code)){const s=r.Ta.shift();_n(r).B_(),await _p(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await go(r)}}(n,e),wp(n)&&Ep(n)}async function hh(n,e){const t=ee(n);t.asyncQueue.verifyOperationInProgress(),H(Bn,"RemoteStore received new credentials");const r=Hn(t);t.Ea.add(3),await Mi(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await mo(t)}async function iT(n,e){const t=ee(n);e?(t.Ea.delete(2),await mo(t)):e||(t.Ea.add(2),await Mi(t),t.Ra.set("Unknown"))}function xr(n){return n.ma||(n.ma=function(t,r,i){const s=ee(t);return s.sa(),new zI(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Xo:KI.bind(null,n),t_:QI.bind(null,n),r_:YI.bind(null,n),H_:XI.bind(null,n)}),n.da.push(async e=>{e?(n.ma.B_(),Sl(n)?bl(n):n.Ra.set("Unknown")):(await n.ma.stop(),yp(n))})),n.ma}function _n(n){return n.fa||(n.fa=function(t,r,i){const s=ee(t);return s.sa(),new qI(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:eT.bind(null,n),r_:rT.bind(null,n),ta:tT.bind(null,n),na:nT.bind(null,n)}),n.da.push(async e=>{e?(n.fa.B_(),await go(n)):(await n.fa.stop(),n.Ta.length>0&&(H(Bn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new hn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,l=new Cl(e,t,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kl(n,e){if(qt("AsyncQueue",`${e}: ${n}`),Pr(n))return new B(M.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{static emptySet(e){return new fr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||W.comparator(t.key,r.key):(t,r)=>W.comparator(t.key,r.key),this.keyedMap=ti(),this.sortedSet=new Ee(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof fr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new fr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(){this.ga=new Ee(W.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):K(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class Ar{constructor(e,t,r,i,s,o,l,u,c){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new Ar(e,t,fr.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&lo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class oT{constructor(){this.queries=fh(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=ee(t),s=i.queries;i.queries=fh(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new B(M.ABORTED,"Firestore shutting down"))}}function fh(){return new $n(n=>Uf(n),lo)}async function aT(n,e){const t=ee(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new sT,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await t.onListen(i,!0);break;case 1:s.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const l=kl(o,`Initialization of query '${rr(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.Sa.push(e),e.va(t.onlineState),s.wa&&e.Fa(s.wa)&&Rl(t)}async function lT(n,e){const t=ee(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function uT(n,e){const t=ee(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&Rl(t)}function cT(n,e,t){const r=ee(n),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(t);r.queries.delete(e)}function Rl(n){n.Ca.forEach(e=>{e.next()})}var Ra,ph;(ph=Ra||(Ra={})).Ma="default",ph.Cache="cache";class hT{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ar(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Ar.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ra.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e){this.key=e}}class Tp{constructor(e){this.key=e}}class dT{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=oe(),this.mutatedKeys=oe(),this.eu=jf(e),this.tu=new fr(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new dh,i=t?t.tu:this.tu;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),g=uo(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),k=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let N=!1;m&&g?m.data.isEqual(g.data)?C!==k&&(r.track({type:3,doc:g}),N=!0):this.su(m,g)||(r.track({type:2,doc:g}),N=!0,(u&&this.eu(g,u)>0||c&&this.eu(g,c)<0)&&(l=!0)):!m&&g?(r.track({type:0,doc:g}),N=!0):m&&!g&&(r.track({type:1,doc:m}),N=!0,(u||c)&&(l=!0)),N&&(g?(o=o.add(g),s=k?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,p)=>function(g,C){const k=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{Rt:N})}};return k(g)-k(C)}(d.type,p.type)||this.eu(d.doc,p.doc)),this.ou(r),i=i??!1;const l=t&&!i?this._u():[],u=this.Xa.size===0&&this.current&&!i?1:0,c=u!==this.Za;return this.Za=u,o.length!==0||c?{snapshot:new Ar(this.query,e.tu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new dh,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=oe(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const t=[];return e.forEach(r=>{this.Xa.has(r)||t.push(new Tp(r))}),this.Xa.forEach(r=>{e.has(r)||t.push(new Ip(r))}),t}cu(e){this.Ya=e.Qs,this.Xa=oe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Ar.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Pl="SyncEngine";class fT{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class pT{constructor(e){this.key=e,this.hu=!1}}class mT{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new $n(l=>Uf(l),lo),this.Iu=new Map,this.Eu=new Set,this.du=new Ee(W.comparator),this.Au=new Map,this.Ru=new _l,this.Vu={},this.mu=new Map,this.fu=vr.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function gT(n,e,t=!0){const r=kp(n);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await vp(r,e,t,!0),i}async function yT(n,e){const t=kp(n);await vp(t,e,!0,!1)}async function vp(n,e,t,r){const i=await VI(n.localStore,Pt(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t);let l;return r&&(l=await _T(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&mp(n.remoteStore,i),l}async function _T(n,e,t,r,i){n.pu=(p,m,g)=>async function(k,N,x,z){let F=N.view.ru(x);F.Cs&&(F=await oh(k.localStore,N.query,!1).then(({documents:A})=>N.view.ru(A,F)));const G=z&&z.targetChanges.get(N.targetId),$=z&&z.targetMismatches.get(N.targetId)!=null,D=N.view.applyChanges(F,k.isPrimaryClient,G,$);return gh(k,N.targetId,D.au),D.snapshot}(n,p,m,g);const s=await oh(n.localStore,e,!0),o=new dT(e,s.Qs),l=o.ru(s.documents),u=Oi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),c=o.applyChanges(l,n.isPrimaryClient,u);gh(n,t,c.au);const d=new fT(e,t,o);return n.Tu.set(e,d),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),c.snapshot}async function wT(n,e,t){const r=ee(n),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!lo(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ca(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&vl(r.remoteStore,i.targetId),Pa(r,i.targetId)}).catch(Rr)):(Pa(r,i.targetId),await Ca(r.localStore,i.targetId,!0))}async function ET(n,e){const t=ee(n),r=t.Tu.get(e),i=t.Iu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),vl(t.remoteStore,r.targetId))}async function IT(n,e,t){const r=kT(n);try{const i=await function(o,l){const u=ee(o),c=ye.now(),d=l.reduce((g,C)=>g.add(C.key),oe());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",g=>{let C=$t(),k=oe();return u.Ns.getEntries(g,d).next(N=>{C=N,C.forEach((x,z)=>{z.isValidDocument()||(k=k.add(x))})}).next(()=>u.localDocuments.getOverlayedDocuments(g,C)).next(N=>{p=N;const x=[];for(const z of l){const F=OE(z,p.get(z.key).overlayedDocument);F!=null&&x.push(new In(z.key,F,Nf(F.value.mapValue),et.exists(!0)))}return u.mutationQueue.addMutationBatch(g,c,x,l)}).next(N=>{m=N;const x=N.applyToLocalDocumentSet(p,k);return u.documentOverlayCache.saveOverlays(g,N.batchId,x)})}).then(()=>({batchId:m.batchId,changes:zf(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Vu[o.currentUser.toKey()];c||(c=new Ee(se)),c=c.insert(l,u),o.Vu[o.currentUser.toKey()]=c}(r,i.batchId,t),await Li(r,i.changes),await go(r.remoteStore)}catch(i){const s=kl(i,"Failed to persist write");t.reject(s)}}async function Ap(n,e){const t=ee(n);try{const r=await xI(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Au.get(s);o&&(ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?ue(o.hu,14607):i.removedDocuments.size>0&&(ue(o.hu,42227),o.hu=!1))}),await Li(t,r,e)}catch(r){await Rr(r)}}function mh(n,e,t){const r=ee(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ee(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.Sa)m.va(l)&&(c=!0)}),c&&Rl(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function TT(n,e,t){const r=ee(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Ee(W.comparator);o=o.insert(s,Oe.newNoDocument(s,Q.min()));const l=oe().add(s),u=new fo(Q.min(),new Map,new Ee(se),o,l);await Ap(r,u),r.du=r.du.remove(s),r.Au.delete(e),xl(r)}else await Ca(r.localStore,e,!1).then(()=>Pa(r,e,t)).catch(Rr)}async function vT(n,e){const t=ee(n),r=e.batch.batchId;try{const i=await PI(t.localStore,e);Sp(t,r,null),bp(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Li(t,i)}catch(i){await Rr(i)}}async function AT(n,e,t){const r=ee(n);try{const i=await function(o,l){const u=ee(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(ue(p!==null,37113),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);Sp(r,e,t),bp(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Li(r,i)}catch(i){await Rr(i)}}function bp(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function Sp(n,e,t){const r=ee(n);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function Pa(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach(r=>{n.Ru.containsKey(r)||Cp(n,r)})}function Cp(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(vl(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),xl(n))}function gh(n,e,t){for(const r of t)r instanceof Ip?(n.Ru.addReference(r.key,e),bT(n,r)):r instanceof Tp?(H(Pl,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||Cp(n,r.key)):K(19791,{wu:r})}function bT(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(H(Pl,"New document in limbo: "+t),n.Eu.add(r),xl(n))}function xl(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new W(fe.fromString(e)),r=n.fu.next();n.Au.set(r,new pT(t)),n.du=n.du.insert(t,r),mp(n.remoteStore,new on(Pt(hl(t.path)),r,"TargetPurposeLimboResolution",so.ce))}}async function Li(n,e,t){const r=ee(n),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,t).then(c=>{var d;if((c||t)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=El.As(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,c){const d=ee(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(c,m=>L.forEach(m.Es,g=>d.persistence.referenceDelegate.addReference(p,m.targetId,g)).next(()=>L.forEach(m.ds,g=>d.persistence.referenceDelegate.removeReference(p,m.targetId,g)))))}catch(p){if(!Pr(p))throw p;H(Il,"Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const g=d.Ms.get(m),C=g.snapshotVersion,k=g.withLastLimboFreeSnapshotVersion(C);d.Ms=d.Ms.insert(m,k)}}}(r.localStore,s))}async function ST(n,e){const t=ee(n);if(!t.currentUser.isEqual(e)){H(Pl,"User change. New user:",e.toKey());const r=await dp(t.localStore,e);t.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new B(M.CANCELLED,o))})}),s.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Li(t,r.Ls)}}function CT(n,e){const t=ee(n),r=t.Au.get(e);if(r&&r.hu)return oe().add(r.key);{let i=oe();const s=t.Iu.get(e);if(!s)return i;for(const o of s){const l=t.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function kp(n){const e=ee(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ap.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=CT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=TT.bind(null,e),e.Pu.H_=uT.bind(null,e.eventManager),e.Pu.yu=cT.bind(null,e.eventManager),e}function kT(n){const e=ee(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=AT.bind(null,e),e}class Ks{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=po(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return RI(this.persistence,new SI,e.initialUser,this.serializer)}Cu(e){return new hp(wl.mi,this.serializer)}Du(e){return new MI}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ks.provider={build:()=>new Ks};class RT extends Ks{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ue(this.persistence.referenceDelegate instanceof Gs,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new hI(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ze.withCacheSize(this.cacheSizeBytes):Ze.DEFAULT;return new hp(r=>Gs.mi(r,t),this.serializer)}}class xa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>mh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ST.bind(null,this.syncEngine),await iT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new oT}()}createDatastore(e){const t=po(e.databaseInfo.databaseId),r=function(s){return new BI(s)}(e.databaseInfo);return function(s,o,l,u){return new HI(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,l){return new WI(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>mh(this.syncEngine,t,0),function(){return uh.v()?new uh:new LI}())}createSyncEngine(e,t){return function(i,s,o,l,u,c,d){const p=new mT(i,s,o,l,u,c);return d&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=ee(i);H(Bn,"RemoteStore shutting down."),s.Ea.add(5),await Mi(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}xa.provider={build:()=>new xa};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):qt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new B(M.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(i,s){const o=ee(i),l={documents:s.map(p=>Hs(o.serializer,p))},u=await o.Ho("BatchGetDocuments",o.serializer.databaseId,fe.emptyPath(),l,s.length),c=new Map;u.forEach(p=>{const m=KE(o.serializer,p);c.set(m.key.toString(),m)});const d=[];return s.forEach(p=>{const m=c.get(p.toString());ue(!!m,55234,{key:p}),d.push(m)}),d}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new pl(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=W.fromPath(r);this.mutations.push(new Xf(i,this.precondition(i)))}),await async function(r,i){const s=ee(r),o={writes:i.map(l=>op(s.serializer,l))};await s.Go("Commit",s.serializer.databaseId,fe.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw K(50498,{Gu:e.constructor.name});t=Q.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new B(M.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(Q.min())?et.exists(!1):et.updateTime(t):et.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Q.min()))throw new B(M.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return et.updateTime(t)}return et.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class NT{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.zu=r.maxAttempts,this.M_=new Tl(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Ju()}Ju(){this.M_.p_(async()=>{const e=new xT(this.datastore),t=this.Hu(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Yu(i)}))}).catch(r=>{this.Yu(r)})})}Hu(e){try{const t=this.updateFunction(e);return!Di(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Yu(e){this.zu>0&&this.Zu(e)?(this.zu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ju(),Promise.resolve()))):this.deferred.reject(e)}Zu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Jf(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn="FirestoreClient";class DT{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=We.UNAUTHENTICATED,this.clientId=ol.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H(wn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H(wn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new hn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=kl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Xo(n,e){n.asyncQueue.verifyOperationInProgress(),H(wn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await dp(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function yh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await VT(n);H(wn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>hh(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>hh(e.remoteStore,i)),n._onlineComponents=e}async function VT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){H(wn,"Using user provided OfflineComponentProvider");try{await Xo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;_r("Error using user provided cache. Falling back to memory cache: "+t),await Xo(n,new Ks)}}else H(wn,"Using default OfflineComponentProvider"),await Xo(n,new RT(void 0));return n._offlineComponents}async function Nl(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(H(wn,"Using user provided OnlineComponentProvider"),await yh(n,n._uninitializedComponentsProvider._online)):(H(wn,"Using default OnlineComponentProvider"),await yh(n,new xa))),n._onlineComponents}function OT(n){return Nl(n).then(e=>e.syncEngine)}function MT(n){return Nl(n).then(e=>e.datastore)}async function _h(n){const e=await Nl(n),t=e.eventManager;return t.onListen=gT.bind(null,e.syncEngine),t.onUnlisten=wT.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=yT.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ET.bind(null,e.syncEngine),t}/**
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
 */function Rp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp="firestore.googleapis.com",Eh=!0;class Ih{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new B(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Pp,this.ssl=Eh}else this.host=e.host,this.ssl=e.ssl??Eh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=cp;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<uI)throw new B(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ww("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Rp(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new B(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new B(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new B(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class yo{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ih({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ih(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Lw;switch(r.type){case"firstParty":return new Bw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=wh.get(t);r&&(H("ComponentProvider","Removing Datastore"),wh.delete(t),r.terminate())}(this),Promise.resolve()}}function LT(n,e,t,r={}){var c;n=On(n,yo);const i=br(e),s=n._getSettings(),o={...s,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;i&&(kd(`https://${l}`),Rd("Firestore",!0)),s.host!==Pp&&s.host!==l&&_r("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!Ln(u,o)&&(n._setSettings(u),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=We.MOCK_USER;else{d=ag(r.mockUserToken,(c=n._app)==null?void 0:c.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new B(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new We(m)}n._authCredentials=new Fw(new Ef(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Wt(this.firestore,e,this._query)}}class ve{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ve(this.firestore,e,this._key)}toJSON(){return{type:ve._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Ni(t,ve._jsonSchema))return new ve(e,r||null,new W(fe.fromString(t.referencePath)))}}ve._jsonSchemaVersion="firestore/documentReference/1.0",ve._jsonSchema={type:Re("string",ve._jsonSchemaVersion),referencePath:Re("string")};class dn extends Wt{constructor(e,t,r){super(e,t,hl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ve(this.firestore,null,new W(e))}withConverter(e){return new dn(this.firestore,e,this._path)}}function Qs(n,e,...t){if(n=Ae(n),If("collection","path",e),n instanceof yo){const r=fe.fromString(e,...t);return Vc(r),new dn(n,null,r)}{if(!(n instanceof ve||n instanceof dn))throw new B(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(fe.fromString(e,...t));return Vc(r),new dn(n.firestore,null,r)}}function Ht(n,e,...t){if(n=Ae(n),arguments.length===1&&(e=ol.newId()),If("doc","path",e),n instanceof yo){const r=fe.fromString(e,...t);return Dc(r),new ve(n,null,new W(r))}{if(!(n instanceof ve||n instanceof dn))throw new B(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(fe.fromString(e,...t));return Dc(r),new ve(n.firestore,n instanceof dn?n.converter:null,new W(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th="AsyncQueue";class vh{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Tl(this,"async_queue_retry"),this._c=()=>{const r=Yo();r&&H(Th,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Yo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Yo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new hn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Pr(e))throw e;H(Th,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,qt("INTERNAL UNHANDLED ERROR: ",Ah(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=Cl.createAndSchedule(this,e,t,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&K(47125,{Pc:Ah(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Ah(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class vi extends yo{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new vh,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new vh(e),this._firestoreClient=void 0,await e}}}function FT(n,e){const t=typeof n=="object"?n:Dd(),r=typeof n=="string"?n:Us,i=Ka(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=sg("firestore");s&&LT(i,...s)}return i}function Dl(n){if(n._terminated)throw new B(M.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||UT(n),n._firestoreClient}function UT(n){var r,i,s;const e=n._freezeSettings(),t=function(l,u,c,d){return new sE(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Rp(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new DT(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ht(Be.fromBase64String(e))}catch(t){throw new B(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ht(Be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ht._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ni(e,ht._jsonSchema))return ht.fromBase64String(e.bytes)}}ht._jsonSchemaVersion="firestore/bytes/1.0",ht._jsonSchema={type:Re("string",ht._jsonSchemaVersion),bytes:Re("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new B(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new B(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new B(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:xt._jsonSchemaVersion}}static fromJSON(e){if(Ni(e,xt._jsonSchema))return new xt(e.latitude,e.longitude)}}xt._jsonSchemaVersion="firestore/geoPoint/1.0",xt._jsonSchema={type:Re("string",xt._jsonSchemaVersion),latitude:Re("number"),longitude:Re("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Nt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ni(e,Nt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Nt(e.vectorValues);throw new B(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Nt._jsonSchemaVersion="firestore/vectorValue/1.0",Nt._jsonSchema={type:Re("string",Nt._jsonSchemaVersion),vectorValues:Re("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT=/^__.*__$/;class BT{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new In(e,this.data,this.fieldMask,t,this.fieldTransforms):new Vi(e,this.data,t,this.fieldTransforms)}}class xp{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new In(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Np(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{Ac:n})}}class Vl{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Vl({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ys(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Np(this.Ac)&&jT.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class zT{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||po(e)}Cc(e,t,r,i=!1){return new Vl({Ac:e,methodName:t,Dc:r,path:je.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wo(n){const e=n._freezeSettings(),t=po(n._databaseId);return new zT(n._databaseId,!!e.ignoreUndefinedProperties,t)}function qT(n,e,t,r,i,s={}){const o=n.Cc(s.merge||s.mergeFields?2:0,e,t,i);Ml("Data must be an object, but it was:",o,r);const l=Mp(r,o);let u,c;if(s.merge)u=new dt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=Na(e,p,t);if(!o.contains(m))throw new B(M.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Fp(d,m)||d.push(m)}u=new dt(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new BT(new Xe(l),u,c)}class Eo extends _o{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Eo}}class Ol extends _o{_toFieldTransform(e){return new xE(e.path,new Ei)}isEqual(e){return e instanceof Ol}}function Dp(n,e,t,r){const i=n.Cc(1,e,t);Ml("Data must be an object, but it was:",i,r);const s=[],o=Xe.empty();En(r,(u,c)=>{const d=Ll(e,u,t);c=Ae(c);const p=i.yc(d);if(c instanceof Eo)s.push(d);else{const m=Ui(c,p);m!=null&&(s.push(d),o.set(d,m))}});const l=new dt(s);return new xp(o,l,i.fieldTransforms)}function Vp(n,e,t,r,i,s){const o=n.Cc(1,e,t),l=[Na(e,r,t)],u=[i];if(s.length%2!=0)throw new B(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Na(e,s[m])),u.push(s[m+1]);const c=[],d=Xe.empty();for(let m=l.length-1;m>=0;--m)if(!Fp(c,l[m])){const g=l[m];let C=u[m];C=Ae(C);const k=o.yc(g);if(C instanceof Eo)c.push(g);else{const N=Ui(C,k);N!=null&&(c.push(g),d.set(g,N))}}const p=new dt(c);return new xp(d,p,o.fieldTransforms)}function Op(n,e,t,r=!1){return Ui(t,n.Cc(r?4:3,e))}function Ui(n,e){if(Lp(n=Ae(n)))return Ml("Unsupported field value:",e,n),Mp(n,e);if(n instanceof _o)return function(r,i){if(!Np(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Ui(l,i.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=Ae(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return kE(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ye.fromDate(r);return{timestampValue:$s(i.serializer,s)}}if(r instanceof ye){const s=new ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:$s(i.serializer,s)}}if(r instanceof xt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ht)return{bytesValue:np(i.serializer,r._byteString)};if(r instanceof ve){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:yl(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Nt)return function(o,l){return{mapValue:{fields:{[Pf]:{stringValue:xf},[js]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Sc("VectorValues must only contain numeric values.");return fl(l.serializer,c)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${io(r)}`)}(n,e)}function Mp(n,e){const t={};return Af(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):En(n,(r,i)=>{const s=Ui(i,e.mc(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Lp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ye||n instanceof xt||n instanceof ht||n instanceof ve||n instanceof _o||n instanceof Nt)}function Ml(n,e,t){if(!Lp(t)||!Tf(t)){const r=io(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function Na(n,e,t){if((e=Ae(e))instanceof Fi)return e._internalPath;if(typeof e=="string")return Ll(n,e);throw Ys("Field path arguments must be of type string or ",n,!1,void 0,t)}const $T=new RegExp("[~\\*/\\[\\]]");function Ll(n,e,t){if(e.search($T)>=0)throw Ys(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Fi(...e.split("."))._internalPath}catch{throw Ys(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ys(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new B(M.INVALID_ARGUMENT,l+n+u)}function Fp(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new HT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Fl("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class HT extends Ai{data(){return super.data()}}function Fl(n,e){return typeof e=="string"?Ll(n,e):e instanceof Fi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new B(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ul{}class Io extends Ul{}function Da(n,e,...t){let r=[];e instanceof Ul&&r.push(e),r=r.concat(t),function(s){const o=s.filter(u=>u instanceof Bl).length,l=s.filter(u=>u instanceof jl).length;if(o>1||o>0&&l>0)throw new B(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class jl extends Io{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new jl(e,t,r)}_apply(e){const t=this._parse(e);return jp(e._query,t),new Wt(e.firestore,e.converter,va(e._query,t))}_parse(e){const t=wo(e.firestore);return function(s,o,l,u,c,d,p){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new B(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){kh(p,d);const C=[];for(const k of p)C.push(Ch(u,s,k));m={arrayValue:{values:C}}}else m=Ch(u,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||kh(p,d),m=Op(l,o,p,d==="in"||d==="not-in");return ke.create(c,d,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Bl extends Ul{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Bl(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:vt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)jp(o,u),o=va(o,u)}(e._query,t),new Wt(e.firestore,e.converter,va(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class zl extends Io{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new zl(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new B(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new B(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new wi(s,o)}(e._query,this._field,this._direction);return new Wt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new qn(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function Sh(n,e="asc"){const t=e,r=Fl("orderBy",n);return zl._create(r,t)}class ql extends Io{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new ql(e,t,r)}_apply(e){return new Wt(e.firestore,e.converter,zs(e._query,this._limit,this._limitType))}}function Up(n){return Kw("limit",n),ql._create("limit",n,"F")}class $l extends Io{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new $l(e,t,r)}_apply(e){const t=KT(e,this.type,this._docOrFields,this._inclusive);return new Wt(e.firestore,e.converter,function(i,s){return new qn(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function WT(...n){return $l._create("startAfter",n,!1)}function KT(n,e,t,r){if(t[0]=Ae(t[0]),t[0]instanceof Ai)return function(s,o,l,u,c){if(!u)throw new B(M.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${l}().`);const d=[];for(const p of dr(s))if(p.field.isKeyField())d.push(Bs(o,u.key));else{const m=u.data.field(p.field);if(oo(m))throw new B(M.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+p.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const g=p.field.canonicalString();throw new B(M.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${g}' (used as the orderBy) does not exist.`)}d.push(m)}return new Tr(d,c)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=wo(n.firestore);return function(o,l,u,c,d,p){const m=o.explicitOrderBy;if(d.length>m.length)throw new B(M.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const g=[];for(let C=0;C<d.length;C++){const k=d[C];if(m[C].field.isKeyField()){if(typeof k!="string")throw new B(M.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof k}`);if(!dl(o)&&k.indexOf("/")!==-1)throw new B(M.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${k}' contains a slash.`);const N=o.path.child(fe.fromString(k));if(!W.isDocumentKey(N))throw new B(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${N}' is not because it contains an odd number of segments.`);const x=new W(N);g.push(Bs(l,x))}else{const N=Op(u,c,k);g.push(N)}}return new Tr(g,p)}(n._query,n.firestore._databaseId,i,e,t,r)}}function Ch(n,e,t){if(typeof(t=Ae(t))=="string"){if(t==="")throw new B(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!dl(e)&&t.indexOf("/")!==-1)throw new B(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(fe.fromString(t));if(!W.isDocumentKey(r))throw new B(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Bs(n,new W(r))}if(t instanceof ve)return Bs(n,t._key);throw new B(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${io(t)}.`)}function kh(n,e){if(!Array.isArray(n)||n.length===0)throw new B(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function jp(n,e){const t=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new B(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Bp{convertValue(e,t="none"){switch(yn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Te(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(gn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw K(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return En(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var r,i,s;const t=(s=(i=(r=e.fields)==null?void 0:r[js].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Te(o.doubleValue));return new Nt(t)}convertGeoPoint(e){return new xt(Te(e.latitude),Te(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ao(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(gi(e));default:return null}}convertTimestamp(e){const t=mn(e);return new ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=fe.fromString(e);ue(up(r),9688,{name:e});const i=new yi(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(t)||qt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class YT extends Bp{constructor(e){super(),this.firestore=e}convertBytes(e){return new ht(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ve(this.firestore,null,t)}}class lr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fn extends Ai{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new bs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Fl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new B(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=fn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}fn._jsonSchemaVersion="firestore/documentSnapshot/1.0",fn._jsonSchema={type:Re("string",fn._jsonSchemaVersion),bundleSource:Re("string","DocumentSnapshot"),bundleName:Re("string"),bundle:Re("string")};class bs extends fn{data(e={}){return super.data(e)}}class pr{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new lr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new bs(this._firestore,this._userDataWriter,r.key,r,new lr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new B(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new bs(i._firestore,i._userDataWriter,l.doc.key,l.doc,new lr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new bs(i._firestore,i._userDataWriter,l.doc.key,l.doc,new lr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:XT(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new B(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=pr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ol.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(t.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function XT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:n})}}pr._jsonSchemaVersion="firestore/querySnapshot/1.0",pr._jsonSchema={type:Re("string",pr._jsonSchemaVersion),bundleSource:Re("string","QuerySnapshot"),bundleName:Re("string"),bundle:Re("string")};class Hl extends Bp{constructor(e){super(),this.firestore=e}convertBytes(e){return new ht(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ve(this.firestore,null,t)}}function JT(n,e,t,...r){n=On(n,ve);const i=On(n.firestore,vi),s=wo(i);let o;return o=typeof(e=Ae(e))=="string"||e instanceof Fi?Vp(s,"updateDoc",n._key,e,t,r):Dp(s,"updateDoc",n._key,e),ZT(i,[o.toMutation(n._key,et.exists(!0))])}function bi(n,...e){var u,c,d;n=Ae(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||bh(e[r])||(t=e[r++]);const i={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(bh(e[r])){const p=e[r];e[r]=(u=p.next)==null?void 0:u.bind(p),e[r+1]=(c=p.error)==null?void 0:c.bind(p),e[r+2]=(d=p.complete)==null?void 0:d.bind(p)}let s,o,l;if(n instanceof ve)o=On(n.firestore,vi),l=hl(n._key.path),s={next:p=>{e[r]&&e[r](ev(o,n,p))},error:e[r+1],complete:e[r+2]};else{const p=On(n,Wt);o=On(p.firestore,vi),l=p._query;const m=new Hl(o);s={next:g=>{e[r]&&e[r](new pr(o,m,p,g))},error:e[r+1],complete:e[r+2]},GT(n._query)}return function(m,g,C,k){const N=new PT(k),x=new hT(g,N,C);return m.asyncQueue.enqueueAndForget(async()=>aT(await _h(m),x)),()=>{N.Nu(),m.asyncQueue.enqueueAndForget(async()=>lT(await _h(m),x))}}(Dl(o),l,i,s)}function ZT(n,e){return function(r,i){const s=new hn;return r.asyncQueue.enqueueAndForget(async()=>IT(await OT(r),i,s)),s.promise}(Dl(n),e)}function ev(n,e,t){const r=t.docs.get(e._key),i=new Hl(n);return new fn(n,i,e._key,r,new lr(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const tv={maxAttempts:5};function ri(n,e){if((n=Ae(n)).firestore!==e)throw new B(M.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=wo(e)}get(e){const t=ri(e,this._firestore),r=new YT(this._firestore);return this._transaction.lookup([t._key]).then(i=>{if(!i||i.length!==1)return K(24041);const s=i[0];if(s.isFoundDocument())return new Ai(this._firestore,r,s.key,s,t.converter);if(s.isNoDocument())return new Ai(this._firestore,r,t._key,null,t.converter);throw K(18433,{doc:s})})}set(e,t,r){const i=ri(e,this._firestore),s=QT(i.converter,t,r),o=qT(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,t,r,...i){const s=ri(e,this._firestore);let o;return o=typeof(t=Ae(t))=="string"||t instanceof Fi?Vp(this._dataReader,"Transaction.update",s._key,t,r,i):Dp(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,o),this}delete(e){const t=ri(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv extends nv{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=ri(e,this._firestore),r=new Hl(this._firestore);return super.get(e).then(i=>new fn(this._firestore,r,t._key,i._document,new lr(!1,!1),t.converter))}}function Gl(n,e,t){n=On(n,vi);const r={...tv,...t};return function(s){if(s.maxAttempts<1)throw new B(M.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,l){const u=new hn;return s.asyncQueue.enqueueAndForget(async()=>{const c=await MT(s);new NT(s.asyncQueue,c,l,o,u).ju()}),u.promise}(Dl(n),i=>e(new rv(n,i)),r)}function sn(){return new Ol("serverTimestamp")}(function(e,t=!0){(function(i){kr=i})(Sr),gr(new Fn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new vi(new Uw(r.getProvider("auth-internal")),new zw(o,r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new B(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yi(c.options.projectId,d)}(o,i),o);return s={useFetchStreams:t,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),un(Rc,Pc,e),un(Rc,Pc,"esm2020")})();const iv="ashutosh-srivastava-login.firebaseapp.com",sv={authDomain:iv},ov="aichatgemma";var Ed;const zp=Nd({projectId:ov,apiKey:((Ed=globalThis.__SITE_FIREBASE_CONFIG__)==null?void 0:Ed.apiKey)||"",authDomain:sv.authDomain,appId:"1:632551270983:web:e12f6a2a483f8b99d0df62"},"personal"),Wl=Dw(zp),tt=FT(zp),av=()=>{const n=new Ft;return n.setCustomParameters({prompt:"select_account"}),z_(Wl,n)},lv=()=>T_(Wl);function uv(n,e){const t={};return(n[n.length-1]===""?[...n,""]:n).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}const cv=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,hv=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,dv={};function Rh(n,e){return(dv.jsx?hv:cv).test(n)}const fv=/[ \t\n\f\r]/g;function pv(n){return typeof n=="object"?n.type==="text"?Ph(n.value):!1:Ph(n)}function Ph(n){return n.replace(fv,"")===""}class ji{constructor(e,t,r){this.normal=t,this.property=e,r&&(this.space=r)}}ji.prototype.normal={};ji.prototype.property={};ji.prototype.space=void 0;function qp(n,e){const t={},r={};for(const i of n)Object.assign(t,i.property),Object.assign(r,i.normal);return new ji(t,r,e)}function Va(n){return n.toLowerCase()}class rt{constructor(e,t){this.attribute=t,this.property=e}}rt.prototype.attribute="";rt.prototype.booleanish=!1;rt.prototype.boolean=!1;rt.prototype.commaOrSpaceSeparated=!1;rt.prototype.commaSeparated=!1;rt.prototype.defined=!1;rt.prototype.mustUseProperty=!1;rt.prototype.number=!1;rt.prototype.overloadedBoolean=!1;rt.prototype.property="";rt.prototype.spaceSeparated=!1;rt.prototype.space=void 0;let mv=0;const te=Gn(),Ce=Gn(),Oa=Gn(),U=Gn(),me=Gn(),Mn=Gn(),ct=Gn();function Gn(){return 2**++mv}const Ma=Object.freeze(Object.defineProperty({__proto__:null,boolean:te,booleanish:Ce,commaOrSpaceSeparated:ct,commaSeparated:Mn,number:U,overloadedBoolean:Oa,spaceSeparated:me},Symbol.toStringTag,{value:"Module"})),Jo=Object.keys(Ma);class Kl extends rt{constructor(e,t,r,i){let s=-1;if(super(e,t),xh(this,"space",i),typeof r=="number")for(;++s<Jo.length;){const o=Jo[s];xh(this,Jo[s],(r&Ma[o])===Ma[o])}}}Kl.prototype.defined=!0;function xh(n,e,t){t&&(n[e]=t)}function Nr(n){const e={},t={};for(const[r,i]of Object.entries(n.properties)){const s=new Kl(r,n.transform(n.attributes||{},r),i,n.space);n.mustUseProperty&&n.mustUseProperty.includes(r)&&(s.mustUseProperty=!0),e[r]=s,t[Va(r)]=r,t[Va(s.attribute)]=r}return new ji(e,t,n.space)}const $p=Nr({properties:{ariaActiveDescendant:null,ariaAtomic:Ce,ariaAutoComplete:null,ariaBusy:Ce,ariaChecked:Ce,ariaColCount:U,ariaColIndex:U,ariaColSpan:U,ariaControls:me,ariaCurrent:null,ariaDescribedBy:me,ariaDetails:null,ariaDisabled:Ce,ariaDropEffect:me,ariaErrorMessage:null,ariaExpanded:Ce,ariaFlowTo:me,ariaGrabbed:Ce,ariaHasPopup:null,ariaHidden:Ce,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:me,ariaLevel:U,ariaLive:null,ariaModal:Ce,ariaMultiLine:Ce,ariaMultiSelectable:Ce,ariaOrientation:null,ariaOwns:me,ariaPlaceholder:null,ariaPosInSet:U,ariaPressed:Ce,ariaReadOnly:Ce,ariaRelevant:null,ariaRequired:Ce,ariaRoleDescription:me,ariaRowCount:U,ariaRowIndex:U,ariaRowSpan:U,ariaSelected:Ce,ariaSetSize:U,ariaSort:null,ariaValueMax:U,ariaValueMin:U,ariaValueNow:U,ariaValueText:null,role:null},transform(n,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()}});function Hp(n,e){return e in n?n[e]:e}function Gp(n,e){return Hp(n,e.toLowerCase())}const gv=Nr({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Mn,acceptCharset:me,accessKey:me,action:null,allow:null,allowFullScreen:te,allowPaymentRequest:te,allowUserMedia:te,alpha:te,alt:null,as:null,async:te,autoCapitalize:null,autoComplete:me,autoFocus:te,autoPlay:te,blocking:me,capture:null,charSet:null,checked:te,cite:null,className:me,closedBy:null,colorSpace:null,cols:U,colSpan:U,command:null,commandFor:null,content:null,contentEditable:Ce,controls:te,controlsList:me,coords:U|Mn,crossOrigin:null,data:null,dateTime:null,decoding:null,default:te,defer:te,dir:null,dirName:null,disabled:te,download:Oa,draggable:Ce,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:te,formTarget:null,headers:me,height:U,hidden:Oa,high:U,href:null,hrefLang:null,htmlFor:me,httpEquiv:me,id:null,imageSizes:null,imageSrcSet:null,inert:te,inputMode:null,integrity:null,is:null,isMap:te,itemId:null,itemProp:me,itemRef:me,itemScope:te,itemType:me,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:te,low:U,manifest:null,max:null,maxLength:U,media:null,method:null,min:null,minLength:U,multiple:te,muted:te,name:null,nonce:null,noModule:te,noValidate:te,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:te,optimum:U,pattern:null,ping:me,placeholder:null,playsInline:te,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:te,referrerPolicy:null,rel:me,required:te,reversed:te,rows:U,rowSpan:U,sandbox:me,scope:null,scoped:te,seamless:te,selected:te,shadowRootClonable:te,shadowRootCustomElementRegistry:te,shadowRootDelegatesFocus:te,shadowRootMode:null,shadowRootSerializable:te,shape:null,size:U,sizes:null,slot:null,span:U,spellCheck:Ce,src:null,srcDoc:null,srcLang:null,srcSet:null,start:U,step:null,style:null,tabIndex:U,target:null,title:null,translate:null,type:null,typeMustMatch:te,useMap:null,value:Ce,width:U,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:me,axis:null,background:null,bgColor:null,border:U,borderColor:null,bottomMargin:U,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:te,declare:te,event:null,face:null,frame:null,frameBorder:null,hSpace:U,leftMargin:U,link:null,longDesc:null,lowSrc:null,marginHeight:U,marginWidth:U,noResize:te,noHref:te,noShade:te,noWrap:te,object:null,profile:null,prompt:null,rev:null,rightMargin:U,rules:null,scheme:null,scrolling:Ce,standby:null,summary:null,text:null,topMargin:U,valueType:null,version:null,vAlign:null,vLink:null,vSpace:U,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:te,disablePictureInPicture:te,disableRemotePlayback:te,exportParts:Mn,part:me,prefix:null,property:null,results:U,security:null,unselectable:null},space:"html",transform:Gp}),yv=Nr({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",maskType:"mask-type",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:ct,accentHeight:U,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:U,amplitude:U,arabicForm:null,ascent:U,attributeName:null,attributeType:null,azimuth:U,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:U,by:null,calcMode:null,capHeight:U,className:me,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:U,diffuseConstant:U,direction:null,display:null,dur:null,divisor:U,dominantBaseline:null,download:te,dx:null,dy:null,edgeMode:null,editable:null,elevation:U,enableBackground:null,end:null,event:null,exponent:U,externalResourcesRequired:null,fill:null,fillOpacity:U,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Mn,g2:Mn,glyphName:Mn,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:U,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:U,horizOriginX:U,horizOriginY:U,id:null,ideographic:U,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:U,k:U,k1:U,k2:U,k3:U,k4:U,kernelMatrix:ct,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:U,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:U,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:U,overlineThickness:U,paintOrder:null,panose1:null,path:null,pathLength:U,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:me,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:U,pointsAtY:U,pointsAtZ:U,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:ct,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:ct,rev:ct,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:ct,requiredFeatures:ct,requiredFonts:ct,requiredFormats:ct,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:U,specularExponent:U,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:U,strikethroughThickness:U,string:null,stroke:null,strokeDashArray:ct,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:U,strokeOpacity:U,strokeWidth:null,style:null,surfaceScale:U,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:ct,tabIndex:U,tableValues:null,target:null,targetX:U,targetY:U,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:ct,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:U,underlineThickness:U,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:U,values:null,vAlphabetic:U,vMathematical:U,vectorEffect:null,vHanging:U,vIdeographic:U,version:null,vertAdvY:U,vertOriginX:U,vertOriginY:U,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:U,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Hp}),Wp=Nr({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(n,e){return"xlink:"+e.slice(5).toLowerCase()}}),Kp=Nr({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Gp}),Qp=Nr({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(n,e){return"xml:"+e.slice(3).toLowerCase()}}),_v={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},wv=/[A-Z]/g,Nh=/-[a-z]/g,Ev=/^data[-\w.:]+$/i;function Iv(n,e){const t=Va(e);let r=e,i=rt;if(t in n.normal)return n.property[n.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&Ev.test(e)){if(e.charAt(4)==="-"){const s=e.slice(5).replace(Nh,vv);r="data"+s.charAt(0).toUpperCase()+s.slice(1)}else{const s=e.slice(4);if(!Nh.test(s)){let o=s.replace(wv,Tv);o.charAt(0)!=="-"&&(o="-"+o),e="data"+o}}i=Kl}return new i(r,e)}function Tv(n){return"-"+n.toLowerCase()}function vv(n){return n.charAt(1).toUpperCase()}const Av=qp([$p,gv,Wp,Kp,Qp],"html"),Ql=qp([$p,yv,Wp,Kp,Qp],"svg");function bv(n){return n.join(" ").trim()}var Yl={},Dh=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Sv=/\n/g,Cv=/^\s*/,kv=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Rv=/^:\s*/,Pv=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,xv=/^[;\s]*/,Nv=/^\s+|\s+$/g,Dv=`
`,Vh="/",Oh="*",xn="",Vv="comment",Ov="declaration";function Mv(n,e){if(typeof n!="string")throw new TypeError("First argument must be a string");if(!n)return[];e=e||{};var t=1,r=1;function i(C){var k=C.match(Sv);k&&(t+=k.length);var N=C.lastIndexOf(Dv);r=~N?C.length-N:r+C.length}function s(){var C={line:t,column:r};return function(k){return k.position=new o(C),c(),k}}function o(C){this.start=C,this.end={line:t,column:r},this.source=e.source}o.prototype.content=n;function l(C){var k=new Error(e.source+":"+t+":"+r+": "+C);if(k.reason=C,k.filename=e.source,k.line=t,k.column=r,k.source=n,!e.silent)throw k}function u(C){var k=C.exec(n);if(k){var N=k[0];return i(N),n=n.slice(N.length),k}}function c(){u(Cv)}function d(C){var k;for(C=C||[];k=p();)k!==!1&&C.push(k);return C}function p(){var C=s();if(!(Vh!=n.charAt(0)||Oh!=n.charAt(1))){for(var k=2;xn!=n.charAt(k)&&(Oh!=n.charAt(k)||Vh!=n.charAt(k+1));)++k;if(k+=2,xn===n.charAt(k-1))return l("End of comment missing");var N=n.slice(2,k-2);return r+=2,i(N),n=n.slice(k),r+=2,C({type:Vv,comment:N})}}function m(){var C=s(),k=u(kv);if(k){if(p(),!u(Rv))return l("property missing ':'");var N=u(Pv),x=C({type:Ov,property:Mh(k[0].replace(Dh,xn)),value:N?Mh(N[0].replace(Dh,xn)):xn});return u(xv),x}}function g(){var C=[];d(C);for(var k;k=m();)k!==!1&&(C.push(k),d(C));return C}return c(),g()}function Mh(n){return n?n.replace(Nv,xn):xn}var Lv=Mv,Fv=ks&&ks.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(Yl,"__esModule",{value:!0});Yl.default=jv;const Uv=Fv(Lv);function jv(n,e){let t=null;if(!n||typeof n!="string")return t;const r=(0,Uv.default)(n),i=typeof e=="function";return r.forEach(s=>{if(s.type!=="declaration")return;const{property:o,value:l}=s;i?e(o,l,s):l&&(t=t||{},t[o]=l)}),t}var To={};Object.defineProperty(To,"__esModule",{value:!0});To.camelCase=void 0;var Bv=/^--[a-zA-Z0-9_-]+$/,zv=/-([a-z])/g,qv=/^[^-]+$/,$v=/^-(webkit|moz|ms|o|khtml)-/,Hv=/^-(ms)-/,Gv=function(n){return!n||qv.test(n)||Bv.test(n)},Wv=function(n,e){return e.toUpperCase()},Lh=function(n,e){return"".concat(e,"-")},Kv=function(n,e){return e===void 0&&(e={}),Gv(n)?n:(n=n.toLowerCase(),e.reactCompat?n=n.replace(Hv,Lh):n=n.replace($v,Lh),n.replace(zv,Wv))};To.camelCase=Kv;var Qv=ks&&ks.__importDefault||function(n){return n&&n.__esModule?n:{default:n}},Yv=Qv(Yl),Xv=To;function La(n,e){var t={};return!n||typeof n!="string"||(0,Yv.default)(n,function(r,i){r&&i&&(t[(0,Xv.camelCase)(r,e)]=i)}),t}La.default=La;var Jv=La;const Zv=Id(Jv),Yp=Xp("end"),Xl=Xp("start");function Xp(n){return e;function e(t){const r=t&&t.position&&t.position[n]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function eA(n){const e=Xl(n),t=Yp(n);if(e&&t)return{start:e,end:t}}function ci(n){return!n||typeof n!="object"?"":"position"in n||"type"in n?Fh(n.position):"start"in n||"end"in n?Fh(n):"line"in n||"column"in n?Fa(n):""}function Fa(n){return Uh(n&&n.line)+":"+Uh(n&&n.column)}function Fh(n){return Fa(n&&n.start)+"-"+Fa(n&&n.end)}function Uh(n){return n&&typeof n=="number"?n:1}class Qe extends Error{constructor(e,t,r){super(),typeof t=="string"&&(r=t,t=void 0);let i="",s={},o=!1;if(t&&("line"in t&&"column"in t?s={place:t}:"start"in t&&"end"in t?s={place:t}:"type"in t?s={ancestors:[t],place:t.position}:s={...t}),typeof e=="string"?i=e:!s.cause&&e&&(o=!0,i=e.message,s.cause=e),!s.ruleId&&!s.source&&typeof r=="string"){const u=r.indexOf(":");u===-1?s.ruleId=r:(s.source=r.slice(0,u),s.ruleId=r.slice(u+1))}if(!s.place&&s.ancestors&&s.ancestors){const u=s.ancestors[s.ancestors.length-1];u&&(s.place=u.position)}const l=s.place&&"start"in s.place?s.place.start:s.place;this.ancestors=s.ancestors||void 0,this.cause=s.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=ci(s.place)||"1:1",this.place=s.place||void 0,this.reason=this.message,this.ruleId=s.ruleId||void 0,this.source=s.source||void 0,this.stack=o&&s.cause&&typeof s.cause.stack=="string"?s.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Qe.prototype.file="";Qe.prototype.name="";Qe.prototype.reason="";Qe.prototype.message="";Qe.prototype.stack="";Qe.prototype.column=void 0;Qe.prototype.line=void 0;Qe.prototype.ancestors=void 0;Qe.prototype.cause=void 0;Qe.prototype.fatal=void 0;Qe.prototype.place=void 0;Qe.prototype.ruleId=void 0;Qe.prototype.source=void 0;const Jl={}.hasOwnProperty,tA=new Map,nA=/[A-Z]/g,rA=new Set(["table","tbody","thead","tfoot","tr"]),iA=new Set(["td","th"]),Jp="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function sA(n,e){if(!e||e.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const t=e.filePath||void 0;let r;if(e.development){if(typeof e.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=fA(t,e.jsxDEV)}else{if(typeof e.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof e.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=dA(t,e.jsx,e.jsxs)}const i={Fragment:e.Fragment,ancestors:[],components:e.components||{},create:r,elementAttributeNameCase:e.elementAttributeNameCase||"react",evaluater:e.createEvaluater?e.createEvaluater():void 0,filePath:t,ignoreInvalidStyle:e.ignoreInvalidStyle||!1,passKeys:e.passKeys!==!1,passNode:e.passNode||!1,schema:e.space==="svg"?Ql:Av,stylePropertyNameCase:e.stylePropertyNameCase||"dom",tableCellAlignToStyle:e.tableCellAlignToStyle!==!1},s=Zp(i,n,void 0);return s&&typeof s!="string"?s:i.create(n,i.Fragment,{children:s||void 0},void 0)}function Zp(n,e,t){if(e.type==="element")return oA(n,e,t);if(e.type==="mdxFlowExpression"||e.type==="mdxTextExpression")return aA(n,e);if(e.type==="mdxJsxFlowElement"||e.type==="mdxJsxTextElement")return uA(n,e,t);if(e.type==="mdxjsEsm")return lA(n,e);if(e.type==="root")return cA(n,e,t);if(e.type==="text")return hA(n,e)}function oA(n,e,t){const r=n.schema;let i=r;e.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Ql,n.schema=i),n.ancestors.push(e);const s=tm(n,e.tagName,!1),o=pA(n,e);let l=eu(n,e);return rA.has(e.tagName)&&(l=l.filter(function(u){return typeof u=="string"?!pv(u):!0})),em(n,o,s,e),Zl(o,l),n.ancestors.pop(),n.schema=r,n.create(e,s,o,t)}function aA(n,e){if(e.data&&e.data.estree&&n.evaluater){const r=e.data.estree.body[0];return r.type,n.evaluater.evaluateExpression(r.expression)}Si(n,e.position)}function lA(n,e){if(e.data&&e.data.estree&&n.evaluater)return n.evaluater.evaluateProgram(e.data.estree);Si(n,e.position)}function uA(n,e,t){const r=n.schema;let i=r;e.name==="svg"&&r.space==="html"&&(i=Ql,n.schema=i),n.ancestors.push(e);const s=e.name===null?n.Fragment:tm(n,e.name,!0),o=mA(n,e),l=eu(n,e);return em(n,o,s,e),Zl(o,l),n.ancestors.pop(),n.schema=r,n.create(e,s,o,t)}function cA(n,e,t){const r={};return Zl(r,eu(n,e)),n.create(e,n.Fragment,r,t)}function hA(n,e){return e.value}function em(n,e,t,r){typeof t!="string"&&t!==n.Fragment&&n.passNode&&(e.node=r)}function Zl(n,e){if(e.length>0){const t=e.length>1?e:e[0];t&&(n.children=t)}}function dA(n,e,t){return r;function r(i,s,o,l){const c=Array.isArray(o.children)?t:e;return l?c(s,o,l):c(s,o)}}function fA(n,e){return t;function t(r,i,s,o){const l=Array.isArray(s.children),u=Xl(r);return e(i,s,o,l,{columnNumber:u?u.column-1:void 0,fileName:n,lineNumber:u?u.line:void 0},void 0)}}function pA(n,e){const t={};let r,i;for(i in e.properties)if(i!=="children"&&Jl.call(e.properties,i)){const s=gA(n,i,e.properties[i]);if(s){const[o,l]=s;n.tableCellAlignToStyle&&o==="align"&&typeof l=="string"&&iA.has(e.tagName)?r=l:t[o]=l}}if(r){const s=t.style||(t.style={});s[n.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return t}function mA(n,e){const t={};for(const r of e.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&n.evaluater){const s=r.data.estree.body[0];s.type;const o=s.expression;o.type;const l=o.properties[0];l.type,Object.assign(t,n.evaluater.evaluateExpression(l.argument))}else Si(n,e.position);else{const i=r.name;let s;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&n.evaluater){const l=r.value.data.estree.body[0];l.type,s=n.evaluater.evaluateExpression(l.expression)}else Si(n,e.position);else s=r.value===null?!0:r.value;t[i]=s}return t}function eu(n,e){const t=[];let r=-1;const i=n.passKeys?new Map:tA;for(;++r<e.children.length;){const s=e.children[r];let o;if(n.passKeys){const u=s.type==="element"?s.tagName:s.type==="mdxJsxFlowElement"||s.type==="mdxJsxTextElement"?s.name:void 0;if(u){const c=i.get(u)||0;o=u+"-"+c,i.set(u,c+1)}}const l=Zp(n,s,o);l!==void 0&&t.push(l)}return t}function gA(n,e,t){const r=Iv(n.schema,e);if(!(t==null||typeof t=="number"&&Number.isNaN(t))){if(Array.isArray(t)&&(t=r.commaSeparated?uv(t):bv(t)),r.property==="style"){let i=typeof t=="object"?t:yA(n,String(t));return n.stylePropertyNameCase==="css"&&(i=_A(i)),["style",i]}return[n.elementAttributeNameCase==="react"&&r.space?_v[r.property]||r.property:r.attribute,t]}}function yA(n,e){try{return Zv(e,{reactCompat:!0})}catch(t){if(n.ignoreInvalidStyle)return{};const r=t,i=new Qe("Cannot parse `style` attribute",{ancestors:n.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=n.filePath||void 0,i.url=Jp+"#cannot-parse-style-attribute",i}}function tm(n,e,t){let r;if(!t)r={type:"Literal",value:e};else if(e.includes(".")){const i=e.split(".");let s=-1,o;for(;++s<i.length;){const l=Rh(i[s])?{type:"Identifier",name:i[s]}:{type:"Literal",value:i[s]};o=o?{type:"MemberExpression",object:o,property:l,computed:!!(s&&l.type==="Literal"),optional:!1}:l}r=o}else r=Rh(e)&&!/^[a-z]/.test(e)?{type:"Identifier",name:e}:{type:"Literal",value:e};if(r.type==="Literal"){const i=r.value;return Jl.call(n.components,i)?n.components[i]:i}if(n.evaluater)return n.evaluater.evaluateExpression(r);Si(n)}function Si(n,e){const t=new Qe("Cannot handle MDX estrees without `createEvaluater`",{ancestors:n.ancestors,place:e,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw t.file=n.filePath||void 0,t.url=Jp+"#cannot-handle-mdx-estrees-without-createevaluater",t}function _A(n){const e={};let t;for(t in n)Jl.call(n,t)&&(e[wA(t)]=n[t]);return e}function wA(n){let e=n.replace(nA,EA);return e.slice(0,3)==="ms-"&&(e="-"+e),e}function EA(n){return"-"+n.toLowerCase()}const Zo={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},IA={};function TA(n,e){const t=IA,r=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,i=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return nm(n,r,i)}function nm(n,e,t){if(vA(n)){if("value"in n)return n.type==="html"&&!t?"":n.value;if(e&&"alt"in n&&n.alt)return n.alt;if("children"in n)return jh(n.children,e,t)}return Array.isArray(n)?jh(n,e,t):""}function jh(n,e,t){const r=[];let i=-1;for(;++i<n.length;)r[i]=nm(n[i],e,t);return r.join("")}function vA(n){return!!(n&&typeof n=="object")}const Bh=document.createElement("i");function tu(n){const e="&"+n+";";Bh.innerHTML=e;const t=Bh.textContent;return t.charCodeAt(t.length-1)===59&&n!=="semi"||t===e?!1:t}function Tn(n,e,t,r){const i=n.length;let s=0,o;if(e<0?e=-e>i?0:i+e:e=e>i?i:e,t=t>0?t:0,r.length<1e4)o=Array.from(r),o.unshift(e,t),n.splice(...o);else for(t&&n.splice(e,t);s<r.length;)o=r.slice(s,s+1e4),o.unshift(e,0),n.splice(...o),s+=1e4,e+=1e4}function yt(n,e){return n.length>0?(Tn(n,n.length,0,e),n):e}const zh={}.hasOwnProperty;function AA(n){const e={};let t=-1;for(;++t<n.length;)bA(e,n[t]);return e}function bA(n,e){let t;for(t in e){const i=(zh.call(n,t)?n[t]:void 0)||(n[t]={}),s=e[t];let o;if(s)for(o in s){zh.call(i,o)||(i[o]=[]);const l=s[o];SA(i[o],Array.isArray(l)?l:l?[l]:[])}}}function SA(n,e){let t=-1;const r=[];for(;++t<e.length;)(e[t].add==="after"?n:r).push(e[t]);Tn(n,0,0,r)}function rm(n,e){const t=Number.parseInt(n,e);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}function mr(n){return n.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const kt=vn(/[A-Za-z]/),ft=vn(/[\dA-Za-z]/),CA=vn(/[#-'*+\--9=?A-Z^-~]/);function Ua(n){return n!==null&&(n<32||n===127)}const ja=vn(/\d/),kA=vn(/[\dA-Fa-f]/),RA=vn(/[!-/:-@[-`{-~]/);function Z(n){return n!==null&&n<-2}function nt(n){return n!==null&&(n<0||n===32)}function ce(n){return n===-2||n===-1||n===32}const PA=vn(new RegExp("\\p{P}|\\p{S}","u")),xA=vn(/\s/);function vn(n){return e;function e(t){return t!==null&&t>-1&&n.test(String.fromCharCode(t))}}function Dr(n){const e=[];let t=-1,r=0,i=0;for(;++t<n.length;){const s=n.charCodeAt(t);let o="";if(s===37&&ft(n.charCodeAt(t+1))&&ft(n.charCodeAt(t+2)))i=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(o=String.fromCharCode(s));else if(s>55295&&s<57344){const l=n.charCodeAt(t+1);s<56320&&l>56319&&l<57344?(o=String.fromCharCode(s,l),i=1):o="�"}else o=String.fromCharCode(s);o&&(e.push(n.slice(r,t),encodeURIComponent(o)),r=t+i+1,o=""),i&&(t+=i,i=0)}return e.join("")+n.slice(r)}function _e(n,e,t,r){const i=r?r-1:1/0;let s=0;return o;function o(u){return ce(u)?(n.enter(t),l(u)):e(u)}function l(u){return ce(u)&&s++<i?(n.consume(u),l):(n.exit(t),e(u))}}function im(n,e,t,r,i,s){let o=0;return l;function l(d){return ce(d)?(n.enter(r),u(d)):c(d)}function u(d){return ce(d)&&o<s?(n.consume(d),o++,u):(n.exit(r),c(d))}function c(d){return o>=i?e(d):t(d)}}const NA={tokenize:DA};function DA(n){const e=n.attempt(this.parser.constructs.contentInitial,r,i);let t;return e;function r(l){if(l===null){n.consume(l);return}return n.enter("lineEnding"),n.consume(l),n.exit("lineEnding"),_e(n,e,"linePrefix")}function i(l){return n.enter("paragraph"),s(l)}function s(l){const u=n.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=u),t=u,o(l)}function o(l){if(l===null){n.exit("chunkText"),n.exit("paragraph"),n.consume(l);return}return Z(l)?(n.consume(l),n.exit("chunkText"),s):(n.consume(l),o)}}class Xs{constructor(){this.index=new Map,this.map=[]}add(e,t,r){qh(this,e,t,r,!1)}addBefore(e,t,r){qh(this,e,t,r,!0)}consume(e){if(this.map.sort(function(s,o){return s[0]-o[0]}),this.map.length===0)return;let t=this.map.length;const r=[];for(;t>0;)t-=1,r.push(e.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),e.length=this.map[t][0];r.push(e.slice()),e.length=0;let i=r.pop();for(;i;){for(const s of i)e.push(s);i=r.pop()}this.map.length=0,this.index.clear()}}function qh(n,e,t,r,i){if(t===0&&r.length===0)return;const s=n.index.get(e);if(s){s[1]+=t,i?(r.push(...s[2]),s[2]=r):s[2].push(...r);return}const o=[e,t,r];n.map.push(o),n.index.set(e,o)}const VA={tokenize:OA},$h={tokenize:MA};function OA(n){const e=this,t=[];let r=0,i,s,o;return l;function l(F){if(r<t.length){const G=t[r];return e.containerState=G[1],n.attempt(G[0].continuation,u,c)(F)}return c(F)}function u(F){if(r++,e.containerState._closeFlow){e.containerState._closeFlow=void 0,i&&z();const G=e.events.length;let $=G,D;for(;$--;)if(e.events[$][0]==="exit"&&e.events[$][1].type==="chunkFlow"){D=e.events[$][1].end;break}x(r);let A=G;for(;A<e.events.length;)e.events[A][1].end={...D},A++;const _=new Xs;return _.add($+1,0,e.events.slice(G)),_.add(G,A-G,[]),_.consume(e.events),c(F)}return l(F)}function c(F){if(r===t.length){if(!i)return m(F);if(i.currentConstruct&&i.currentConstruct.concrete)return C(F);e.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return e.containerState={},n.check($h,d,p)(F)}function d(F){return i&&z(),x(r),m(F)}function p(F){return e.parser.lazy[e.now().line]=r!==t.length,o=e.now().offset,C(F)}function m(F){return e.containerState={},n.attempt($h,g,C)(F)}function g(F){return r++,t.push([e.currentConstruct,e.containerState]),m(F)}function C(F){if(F===null){i&&z(),x(0),n.consume(F);return}return i=i||e.parser.flow(e.now()),n.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:s}),k(F)}function k(F){if(F===null){N(n.exit("chunkFlow"),!0),x(0),n.consume(F);return}return Z(F)?(n.consume(F),N(n.exit("chunkFlow")),r=0,e.interrupt=void 0,l):(n.consume(F),k)}function N(F,G){const $=e.sliceStream(F);if(G&&$.push(null),F.previous=s,s&&(s.next=F),s=F,i.defineSkip(F.start),i.write($),e.parser.lazy[F.start.line]){let D=i.events.length;for(;D--;)if(i.events[D][1].start.offset<o&&(!i.events[D][1].end||i.events[D][1].end.offset>o))return;const A=e.events.length;let _=A,I,T;for(;_--;)if(e.events[_][0]==="exit"&&e.events[_][1].type==="chunkFlow"){if(I){T=e.events[_][1].end;break}I=!0}for(x(r),D=A;D<e.events.length;)e.events[D][1].end={...T},D++;const w=new Xs;w.add(_+1,0,e.events.slice(A)),w.add(A,D-A,[]),w.consume(e.events)}}function x(F){let G=t.length;for(;G-- >F;){const $=t[G];e.containerState=$[1],$[0].exit.call(e,n)}t.length=F}function z(){i.write([null]),s=void 0,i=void 0,e.containerState._closeFlow=void 0}}function MA(n,e,t){return _e(n,n.attempt(this.parser.constructs.document,e,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Hh(n){if(n===null||nt(n)||xA(n))return 1;if(PA(n))return 2}function nu(n,e,t){const r=[];let i=-1;for(;++i<n.length;){const s=n[i].resolveAll;s&&!r.includes(s)&&(e=s(e,t),r.push(s))}return e}const Ba={name:"attention",resolveAll:LA,tokenize:FA};function LA(n,e){let t=-1,r;for(;++t<n.length;)if(n[t][0]==="enter"&&n[t][1].type==="attentionSequence"&&n[t][1]._close){let i=t;for(;i--;)if(n[i][0]==="exit"&&n[i][1].type==="attentionSequence"&&n[i][1]._open&&e.sliceSerialize(n[i][1]).charCodeAt(0)===e.sliceSerialize(n[t][1]).charCodeAt(0)){if((n[i][1]._close||n[t][1]._open)&&(n[t][1].end.offset-n[t][1].start.offset)%3&&!((n[i][1].end.offset-n[i][1].start.offset+n[t][1].end.offset-n[t][1].start.offset)%3))continue;const s=n[i][1].end.offset-n[i][1].start.offset>1&&n[t][1].end.offset-n[t][1].start.offset>1?2:1,o={...n[i][1].end},l={...n[t][1].start};Gh(o,-s),Gh(l,s);const u={type:s>1?"strongSequence":"emphasisSequence",start:o,end:{...n[i][1].end}},c={type:s>1?"strongSequence":"emphasisSequence",start:{...n[t][1].start},end:l},d={type:s>1?"strongText":"emphasisText",start:{...n[i][1].end},end:{...n[t][1].start}},p={type:s>1?"strong":"emphasis",start:{...u.start},end:{...c.end}};n[i][1].end={...u.start},n[t][1].start={...c.end},r=[],n[i][1].end.offset-n[i][1].start.offset&&(r=yt(r,[["enter",n[i][1],e],["exit",n[i][1],e]])),r=yt(r,[["enter",p,e],["enter",u,e],["exit",u,e],["enter",d,e]]),r=yt(r,nu(e.parser.constructs.insideSpan.null,n.slice(i+1,t),e)),r=yt(r,[["exit",d,e],["enter",c,e],["exit",c,e],["exit",p,e]]);let m=0;n[t][1].end.offset-n[t][1].start.offset&&(m=2,r=yt(r,[["enter",n[t][1],e],["exit",n[t][1],e]])),Tn(n,i-1,t-i+3,r),t=i+r.length-m-2;break}}for(t=-1;++t<n.length;)n[t][1].type==="attentionSequence"&&(n[t][1].type="data");return n}function FA(n,e){const t=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Hh(r);let s;return o;function o(u){return s=u,n.enter("attentionSequence"),l(u)}function l(u){if(u===s)return n.consume(u),l;const c=n.exit("attentionSequence"),d=Hh(u),p=!d||d===2&&i||t.includes(u)&&u!==42&&u!==95,m=!i||i===2&&d||t.includes(r)&&r!==42&&r!==95;return c._open=!!(s===42?p:p&&(i||!m)),c._close=!!(s===42?m:m&&(d||!p)),e(u)}}function Gh(n,e){n.column+=e,n.offset+=e,n._bufferIndex+=e}const UA={name:"autolink",tokenize:jA};function jA(n,e,t){let r=0;return i;function i(g){return n.enter("autolink"),n.enter("autolinkMarker"),n.consume(g),n.exit("autolinkMarker"),n.enter("autolinkProtocol"),s}function s(g){return kt(g)?(n.consume(g),o):g===64?t(g):c(g)}function o(g){return g===43||g===45||g===46||ft(g)?(r=1,l(g)):c(g)}function l(g){return g===58?(n.consume(g),r=0,u):(g===43||g===45||g===46||ft(g))&&r++<32?(n.consume(g),l):(r=0,c(g))}function u(g){return g===62?(n.exit("autolinkProtocol"),n.enter("autolinkMarker"),n.consume(g),n.exit("autolinkMarker"),n.exit("autolink"),e):g===null||g===32||g===60||Ua(g)?t(g):(n.consume(g),u)}function c(g){return g===64?(n.consume(g),d):CA(g)?(n.consume(g),c):t(g)}function d(g){return ft(g)?p(g):t(g)}function p(g){return g===46?(n.consume(g),r=0,d):g===62?(n.exit("autolinkProtocol").type="autolinkEmail",n.enter("autolinkMarker"),n.consume(g),n.exit("autolinkMarker"),n.exit("autolink"),e):m(g)}function m(g){if((g===45||ft(g))&&r++<63){const C=g===45?m:p;return n.consume(g),C}return t(g)}}const vo={partial:!0,tokenize:BA};function BA(n,e,t){return r;function r(s){return ce(s)?_e(n,i,"linePrefix")(s):i(s)}function i(s){return s===null||Z(s)?e(s):t(s)}}const sm={continuation:{tokenize:qA},exit:$A,name:"blockQuote",tokenize:zA};function zA(n,e,t){const r=this;return i;function i(o){if(o===62){const l=r.containerState;return l.open||(n.enter("blockQuote",{_container:!0}),l.open=!0),n.enter("blockQuotePrefix"),n.enter("blockQuoteMarker"),n.consume(o),n.exit("blockQuoteMarker"),s}return t(o)}function s(o){return ce(o)?(n.enter("blockQuotePrefixWhitespace"),n.consume(o),n.exit("blockQuotePrefixWhitespace"),n.exit("blockQuotePrefix"),e):(n.exit("blockQuotePrefix"),e(o))}}function qA(n,e,t){const r=this;return i;function i(o){return ce(o)?_e(n,s,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):s(o)}function s(o){return n.attempt(sm,e,t)(o)}}function $A(n){n.exit("blockQuote")}const om={name:"characterEscape",tokenize:HA};function HA(n,e,t){return r;function r(s){return n.enter("characterEscape"),n.enter("escapeMarker"),n.consume(s),n.exit("escapeMarker"),i}function i(s){return RA(s)?(n.enter("characterEscapeValue"),n.consume(s),n.exit("characterEscapeValue"),n.exit("characterEscape"),e):t(s)}}const am={name:"characterReference",tokenize:GA};function GA(n,e,t){const r=this;let i=0,s,o;return l;function l(p){return n.enter("characterReference"),n.enter("characterReferenceMarker"),n.consume(p),n.exit("characterReferenceMarker"),u}function u(p){return p===35?(n.enter("characterReferenceMarkerNumeric"),n.consume(p),n.exit("characterReferenceMarkerNumeric"),c):(n.enter("characterReferenceValue"),s=31,o=ft,d(p))}function c(p){return p===88||p===120?(n.enter("characterReferenceMarkerHexadecimal"),n.consume(p),n.exit("characterReferenceMarkerHexadecimal"),n.enter("characterReferenceValue"),s=6,o=kA,d):(n.enter("characterReferenceValue"),s=7,o=ja,d(p))}function d(p){if(p===59&&i){const m=n.exit("characterReferenceValue");return o===ft&&!tu(r.sliceSerialize(m))?t(p):(n.enter("characterReferenceMarker"),n.consume(p),n.exit("characterReferenceMarker"),n.exit("characterReference"),e)}return o(p)&&i++<s?(n.consume(p),d):t(p)}}const za={partial:!0,tokenize:WA};function WA(n,e,t){const r=this;return i;function i(o){return o===null?t(o):(n.enter("lineEnding"),n.consume(o),n.exit("lineEnding"),s)}function s(o){return r.parser.lazy[r.now().line]?t(o):e(o)}}const Wh={concrete:!0,name:"codeFenced",tokenize:KA};function KA(n,e,t){const r=this,i={partial:!0,tokenize:$};let s=0,o=0,l;return u;function u(D){return c(D)}function c(D){const A=r.events[r.events.length-1];return s=A&&A[1].type==="linePrefix"?A[2].sliceSerialize(A[1],!0).length:0,l=D,n.enter("codeFenced"),n.enter("codeFencedFence"),n.enter("codeFencedFenceSequence"),d(D)}function d(D){return D===l?(o++,n.consume(D),d):o<3?t(D):(n.exit("codeFencedFenceSequence"),ce(D)?_e(n,p,"whitespace")(D):p(D))}function p(D){return D===null||Z(D)?(n.exit("codeFencedFence"),r.interrupt?e(D):n.check(za,k,G)(D)):(n.enter("codeFencedFenceInfo"),n.enter("chunkString",{contentType:"string"}),m(D))}function m(D){return D===null||Z(D)?(n.exit("chunkString"),n.exit("codeFencedFenceInfo"),p(D)):ce(D)?(n.exit("chunkString"),n.exit("codeFencedFenceInfo"),_e(n,g,"whitespace")(D)):D===96&&D===l?t(D):(n.consume(D),m)}function g(D){return D===null||Z(D)?p(D):(n.enter("codeFencedFenceMeta"),n.enter("chunkString",{contentType:"string"}),C(D))}function C(D){return D===null||Z(D)?(n.exit("chunkString"),n.exit("codeFencedFenceMeta"),p(D)):D===96&&D===l?t(D):(n.consume(D),C)}function k(D){return n.attempt(i,G,N)(D)}function N(D){return n.enter("lineEnding"),n.consume(D),n.exit("lineEnding"),x}function x(D){return s>0&&ce(D)?_e(n,z,"linePrefix",s+1)(D):z(D)}function z(D){return D===null||Z(D)?n.check(za,k,G)(D):(n.enter("codeFlowValue"),F(D))}function F(D){return D===null||Z(D)?(n.exit("codeFlowValue"),z(D)):(n.consume(D),F)}function G(D){return n.exit("codeFenced"),e(D)}function $(D,A,_){let I=0;return T;function T(re){return D.enter("lineEnding"),D.consume(re),D.exit("lineEnding"),w}function w(re){return D.enter("codeFencedFence"),ce(re)?_e(D,b,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(re):b(re)}function b(re){return re===l?(D.enter("codeFencedFenceSequence"),E(re)):_(re)}function E(re){return re===l?(I++,D.consume(re),E):I>=o?(D.exit("codeFencedFenceSequence"),ce(re)?_e(D,ae,"whitespace")(re):ae(re)):_(re)}function ae(re){return re===null||Z(re)?(D.exit("codeFencedFence"),A(re)):_(re)}}}const ea={name:"codeIndented",tokenize:YA},QA={partial:!0,tokenize:XA};function YA(n,e,t){return r;function r(l){return n.enter("codeIndented"),im(n,i,t,"linePrefix",4,4)(l)}function i(l){return l===null?o(l):Z(l)?n.attempt(QA,i,o)(l):(n.enter("codeFlowValue"),s(l))}function s(l){return l===null||Z(l)?(n.exit("codeFlowValue"),i(l)):(n.consume(l),s)}function o(l){return n.exit("codeIndented"),e(l)}}function XA(n,e,t){const r=this;return i;function i(o){return r.parser.lazy[r.now().line]?t(o):Z(o)?(n.enter("lineEnding"),n.consume(o),n.exit("lineEnding"),i):im(n,e,s,"linePrefix",4,4)(o)}function s(o){return Z(o)?i(o):t(o)}}const JA={name:"codeText",previous:eb,resolve:ZA,tokenize:tb};function ZA(n){let e=n.length-4,t=3,r,i;if((n[t][1].type==="lineEnding"||n[t][1].type==="space")&&(n[e][1].type==="lineEnding"||n[e][1].type==="space")){for(r=t;++r<e;)if(n[r][1].type==="codeTextData"){n[t][1].type="codeTextPadding",n[e][1].type="codeTextPadding",t+=2,e-=2;break}}for(r=t-1,e++;++r<=e;)i===void 0?r!==e&&n[r][1].type!=="lineEnding"&&(i=r):(r===e||n[r][1].type==="lineEnding")&&(n[i][1].type="codeTextData",r!==i+2&&(n[i][1].end=n[r-1][1].end,n.splice(i+2,r-i-2),e-=r-i-2,r=i+2),i=void 0);return n}function eb(n){return n!==96||this.events[this.events.length-1][1].type==="characterEscape"}function tb(n,e,t){let r=0,i,s;return o;function o(p){return n.enter("codeText"),n.enter("codeTextSequence"),l(p)}function l(p){return p===96?(n.consume(p),r++,l):(n.exit("codeTextSequence"),u(p))}function u(p){return p===null?t(p):p===32?(n.enter("space"),n.consume(p),n.exit("space"),u):p===96?(s=n.enter("codeTextSequence"),i=0,d(p)):Z(p)?(n.enter("lineEnding"),n.consume(p),n.exit("lineEnding"),u):(n.enter("codeTextData"),c(p))}function c(p){return p===null||p===32||p===96||Z(p)?(n.exit("codeTextData"),u(p)):(n.consume(p),c)}function d(p){return p===96?(n.consume(p),i++,d):i===r?(n.exit("codeTextSequence"),n.exit("codeText"),e(p)):(s.type="codeTextData",c(p))}}class nb{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,t){const r=t??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(e,r):e>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(e,t,r){const i=t||0;this.setCursor(Math.trunc(e));const s=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&Jr(this.left,r),s.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(e){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(e)}pushMany(e){this.setCursor(Number.POSITIVE_INFINITY),Jr(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),Jr(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0))if(e<this.left.length){const t=this.left.splice(e,Number.POSITIVE_INFINITY);Jr(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-e,Number.POSITIVE_INFINITY);Jr(this.left,t.reverse())}}}function Jr(n,e){let t=0;if(e.length<1e4)n.push(...e);else for(;t<e.length;)n.push(...e.slice(t,t+1e4)),t+=1e4}function lm(n){const e={};let t=-1,r,i,s,o,l,u,c;const d=new nb(n);for(;++t<d.length;){for(;t in e;)t=e[t];if(r=d.get(t),t&&r[1].type==="chunkFlow"&&d.get(t-1)[1].type==="listItemPrefix"&&(u=r[1]._tokenizer.events,s=0,s<u.length&&u[s][1].type==="lineEndingBlank"&&(s+=2),s<u.length&&u[s][1].type==="content"))for(;++s<u.length&&u[s][1].type!=="content";)u[s][1].type==="chunkText"&&(u[s][1]._isInFirstContentOfListItem=!0,s++);if(r[0]==="enter")r[1].contentType&&(Object.assign(e,rb(d,t)),t=e[t],c=!0);else if(r[1]._container){for(s=t,i=void 0;s--;)if(o=d.get(s),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),o[1].type="lineEnding",i=s);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},l=d.slice(i,t),l.unshift(r),d.splice(i,t-i+1,l))}}return Tn(n,0,Number.POSITIVE_INFINITY,d.slice(0)),!c}function rb(n,e){const t=n.get(e)[1],r=n.get(e)[2];let i=e-1;const s=[];let o=t._tokenizer;o||(o=r.parser[t.contentType](t.start),t._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));const l=o.events,u=[],c={};let d,p,m=-1,g=t,C=0,k=0;const N=[k];for(;g;){for(;n.get(++i)[1]!==g;);s.push(i),g._tokenizer||(d=r.sliceStream(g),g.next||d.push(null),p&&o.defineSkip(g.start),g._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(d),g._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),p=g,g=g.next}for(g=t;++m<l.length;)l[m][0]==="exit"&&l[m-1][0]==="enter"&&l[m][1].type===l[m-1][1].type&&l[m][1].start.line!==l[m][1].end.line&&(k=m+1,N.push(k),g._tokenizer=void 0,g.previous=void 0,g=g.next);for(o.events=[],g?(g._tokenizer=void 0,g.previous=void 0):N.pop(),m=N.length;m--;){const x=l.slice(N[m],N[m+1]),z=s.pop();u.push([z,z+x.length-1]),n.splice(z,2,x)}for(u.reverse(),m=-1;++m<u.length;)c[C+u[m][0]]=C+u[m][1],C+=u[m][1]-u[m][0]-1;return c}const ib={resolve:ob,tokenize:ab},sb={partial:!0,tokenize:lb};function ob(n){return lm(n),n}function ab(n,e){let t;return r;function r(l){return n.enter("content"),t=n.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?s(l):Z(l)?n.check(sb,o,s)(l):(n.consume(l),i)}function s(l){return n.exit("chunkContent"),n.exit("content"),e(l)}function o(l){return n.consume(l),n.exit("chunkContent"),t.next=n.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,i}}function lb(n,e,t){const r=this;return i;function i(o){return n.exit("chunkContent"),n.enter("lineEnding"),n.consume(o),n.exit("lineEnding"),_e(n,s,"linePrefix")}function s(o){if(o===null||Z(o))return t(o);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?e(o):n.interrupt(r.parser.constructs.flow,t,e)(o)}}function um(n,e,t,r,i,s,o,l,u){const c=u||Number.POSITIVE_INFINITY;let d=0;return p;function p(x){return x===60?(n.enter(r),n.enter(i),n.enter(s),n.consume(x),n.exit(s),m):x===null||x===32||x===41||Ua(x)?t(x):(n.enter(r),n.enter(o),n.enter(l),n.enter("chunkString",{contentType:"string"}),k(x))}function m(x){return x===62?(n.enter(s),n.consume(x),n.exit(s),n.exit(i),n.exit(r),e):(n.enter(l),n.enter("chunkString",{contentType:"string"}),g(x))}function g(x){return x===62?(n.exit("chunkString"),n.exit(l),m(x)):x===null||x===60||Z(x)?t(x):(n.consume(x),x===92?C:g)}function C(x){return x===60||x===62||x===92?(n.consume(x),g):g(x)}function k(x){return!d&&(x===null||x===41||nt(x))?(n.exit("chunkString"),n.exit(l),n.exit(o),n.exit(r),e(x)):d<c&&x===40?(n.consume(x),d++,k):x===41?(n.consume(x),d--,k):x===null||x===32||x===40||Ua(x)?t(x):(n.consume(x),x===92?N:k)}function N(x){return x===40||x===41||x===92?(n.consume(x),k):k(x)}}function cm(n,e,t,r,i,s){const o=this;let l=0,u;return c;function c(g){return n.enter(r),n.enter(i),n.consume(g),n.exit(i),n.enter(s),d}function d(g){return l>999||g===null||g===91||g===93&&!u||g===94&&!l&&"_hiddenFootnoteSupport"in o.parser.constructs?t(g):g===93?(n.exit(s),n.enter(i),n.consume(g),n.exit(i),n.exit(r),e):Z(g)?(n.enter("lineEnding"),n.consume(g),n.exit("lineEnding"),d):(n.enter("chunkString",{contentType:"string"}),p(g))}function p(g){return g===null||g===91||g===93||Z(g)||l++>999?(n.exit("chunkString"),d(g)):(n.consume(g),u||(u=!ce(g)),g===92?m:p)}function m(g){return g===91||g===92||g===93?(n.consume(g),l++,p):p(g)}}function hm(n,e,t,r,i,s){let o;return l;function l(m){return m===34||m===39||m===40?(n.enter(r),n.enter(i),n.consume(m),n.exit(i),o=m===40?41:m,u):t(m)}function u(m){return m===o?(n.enter(i),n.consume(m),n.exit(i),n.exit(r),e):(n.enter(s),c(m))}function c(m){return m===o?(n.exit(s),u(o)):m===null?t(m):Z(m)?(n.enter("lineEnding"),n.consume(m),n.exit("lineEnding"),_e(n,c,"linePrefix")):(n.enter("chunkString",{contentType:"string"}),d(m))}function d(m){return m===o||m===null||Z(m)?(n.exit("chunkString"),c(m)):(n.consume(m),m===92?p:d)}function p(m){return m===o||m===92?(n.consume(m),d):d(m)}}function hi(n,e){let t;return r;function r(i){return Z(i)?(n.enter("lineEnding"),n.consume(i),n.exit("lineEnding"),t=!0,r):ce(i)?_e(n,r,t?"linePrefix":"lineSuffix")(i):e(i)}}const ub={name:"definition",tokenize:hb},cb={partial:!0,tokenize:db};function hb(n,e,t){const r=this;let i;return s;function s(g){return n.enter("definition"),o(g)}function o(g){return cm.call(r,n,l,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(g)}function l(g){return i=mr(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),g===58?(n.enter("definitionMarker"),n.consume(g),n.exit("definitionMarker"),u):t(g)}function u(g){return nt(g)?hi(n,c)(g):c(g)}function c(g){return um(n,d,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(g)}function d(g){return n.attempt(cb,p,p)(g)}function p(g){return ce(g)?_e(n,m,"whitespace")(g):m(g)}function m(g){return g===null||Z(g)?(n.exit("definition"),r.parser.defined.push(i),e(g)):t(g)}}function db(n,e,t){return r;function r(l){return nt(l)?hi(n,i)(l):t(l)}function i(l){return hm(n,s,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function s(l){return ce(l)?_e(n,o,"whitespace")(l):o(l)}function o(l){return l===null||Z(l)?e(l):t(l)}}const fb={name:"hardBreakEscape",tokenize:pb};function pb(n,e,t){return r;function r(s){return n.enter("hardBreakEscape"),n.consume(s),i}function i(s){return Z(s)?(n.exit("hardBreakEscape"),e(s)):t(s)}}const mb={name:"headingAtx",resolve:gb,tokenize:yb};function gb(n,e){let t=n.length-2,r=3;if(n[r][1].type==="whitespace"&&(r+=2),t-2>r&&n[t][1].type==="whitespace"&&(t-=2),n[t][1].type==="atxHeadingSequence"&&(r===t-1||t-4>r&&n[t-2][1].type==="whitespace")&&(t-=r+1===t?2:4),t>r){const i={type:"atxHeadingText",start:n[r][1].start,end:n[t][1].end},s={type:"chunkText",start:n[r][1].start,end:n[t][1].end,contentType:"text"};Tn(n,r,t-r+1,[["enter",i,e],["enter",s,e],["exit",s,e],["exit",i,e]])}return n}function yb(n,e,t){let r=0;return i;function i(d){return n.enter("atxHeading"),s(d)}function s(d){return n.enter("atxHeadingSequence"),o(d)}function o(d){return d===35&&r++<6?(n.consume(d),o):d===null||nt(d)?(n.exit("atxHeadingSequence"),l(d)):t(d)}function l(d){return d===35?(n.enter("atxHeadingSequence"),u(d)):d===null||Z(d)?(n.exit("atxHeading"),e(d)):ce(d)?_e(n,l,"whitespace")(d):(n.enter("atxHeadingText"),c(d))}function u(d){return d===35?(n.consume(d),u):(n.exit("atxHeadingSequence"),l(d))}function c(d){return d===null||d===35||nt(d)?(n.exit("atxHeadingText"),l(d)):(n.consume(d),c)}}const _b=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Kh=["pre","script","style","textarea"],wb={concrete:!0,name:"htmlFlow",resolveTo:Ib,tokenize:Tb},Eb={partial:!0,tokenize:vb};function Ib(n){let e=n.length;for(;e--&&!(n[e][0]==="enter"&&n[e][1].type==="htmlFlow"););return e>1&&n[e-2][1].type==="linePrefix"&&(n[e][1].start=n[e-2][1].start,n[e+1][1].start=n[e-2][1].start,n.splice(e-2,2)),n}function Tb(n,e,t){const r=this;let i,s,o,l,u;return c;function c(v){return d(v)}function d(v){return n.enter("htmlFlow"),n.enter("htmlFlowData"),n.consume(v),p}function p(v){return v===33?(n.consume(v),m):v===47?(n.consume(v),s=!0,k):v===63?(n.consume(v),i=3,r.interrupt?e:S):kt(v)?(n.consume(v),o=String.fromCharCode(v),N):t(v)}function m(v){return v===45?(n.consume(v),i=2,g):v===91?(n.consume(v),i=5,l=0,C):kt(v)?(n.consume(v),i=4,r.interrupt?e:S):t(v)}function g(v){return v===45?(n.consume(v),r.interrupt?e:S):t(v)}function C(v){const ot="CDATA[";return v===ot.charCodeAt(l++)?(n.consume(v),l===ot.length?r.interrupt?e:b:C):t(v)}function k(v){return kt(v)?(n.consume(v),o=String.fromCharCode(v),N):t(v)}function N(v){if(v===null||v===47||v===62||nt(v)){const ot=v===47,mt=o.toLowerCase();return!ot&&!s&&Kh.includes(mt)?(i=1,r.interrupt?e(v):b(v)):_b.includes(o.toLowerCase())?(i=6,ot?(n.consume(v),x):r.interrupt?e(v):b(v)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?t(v):s?z(v):F(v))}return v===45||ft(v)?(n.consume(v),o+=String.fromCharCode(v),N):t(v)}function x(v){return v===62?(n.consume(v),r.interrupt?e:b):t(v)}function z(v){return ce(v)?(n.consume(v),z):T(v)}function F(v){return v===47?(n.consume(v),T):v===58||v===95||kt(v)?(n.consume(v),G):ce(v)?(n.consume(v),F):T(v)}function G(v){return v===45||v===46||v===58||v===95||ft(v)?(n.consume(v),G):$(v)}function $(v){return v===61?(n.consume(v),D):ce(v)?(n.consume(v),$):F(v)}function D(v){return v===null||v===60||v===61||v===62||v===96?t(v):v===34||v===39?(n.consume(v),u=v,A):ce(v)?(n.consume(v),D):_(v)}function A(v){return v===u?(n.consume(v),u=null,I):v===null||Z(v)?t(v):(n.consume(v),A)}function _(v){return v===null||v===34||v===39||v===47||v===60||v===61||v===62||v===96||nt(v)?$(v):(n.consume(v),_)}function I(v){return v===47||v===62||ce(v)?F(v):t(v)}function T(v){return v===62?(n.consume(v),w):t(v)}function w(v){return v===null||Z(v)?b(v):ce(v)?(n.consume(v),w):t(v)}function b(v){return v===45&&i===2?(n.consume(v),xe):v===60&&i===1?(n.consume(v),we):v===62&&i===4?(n.consume(v),st):v===63&&i===3?(n.consume(v),S):v===93&&i===5?(n.consume(v),it):Z(v)&&(i===6||i===7)?(n.exit("htmlFlowData"),n.check(Eb,Ne,E)(v)):v===null||Z(v)?(n.exit("htmlFlowData"),E(v)):(n.consume(v),b)}function E(v){return n.check(za,ae,Ne)(v)}function ae(v){return n.enter("lineEnding"),n.consume(v),n.exit("lineEnding"),re}function re(v){return v===null||Z(v)?E(v):(n.enter("htmlFlowData"),b(v))}function xe(v){return v===45?(n.consume(v),S):b(v)}function we(v){return v===47?(n.consume(v),o="",Me):b(v)}function Me(v){if(v===62){const ot=o.toLowerCase();return Kh.includes(ot)?(n.consume(v),st):b(v)}return kt(v)&&o.length<8?(n.consume(v),o+=String.fromCharCode(v),Me):b(v)}function it(v){return v===93?(n.consume(v),S):b(v)}function S(v){return v===62?(n.consume(v),st):v===45&&i===2?(n.consume(v),S):b(v)}function st(v){return v===null||Z(v)?(n.exit("htmlFlowData"),Ne(v)):(n.consume(v),st)}function Ne(v){return n.exit("htmlFlow"),e(v)}}function vb(n,e,t){return r;function r(i){return n.enter("lineEnding"),n.consume(i),n.exit("lineEnding"),n.attempt(vo,e,t)}}const Ab={name:"htmlText",tokenize:bb};function bb(n,e,t){const r=this;let i,s,o;return l;function l(S){return n.enter("htmlText"),n.enter("htmlTextData"),n.consume(S),u}function u(S){return S===33?(n.consume(S),c):S===47?(n.consume(S),$):S===63?(n.consume(S),F):kt(S)?(n.consume(S),_):t(S)}function c(S){return S===45?(n.consume(S),d):S===91?(n.consume(S),s=0,C):kt(S)?(n.consume(S),z):t(S)}function d(S){return S===45?(n.consume(S),g):t(S)}function p(S){return S===null?t(S):S===45?(n.consume(S),m):Z(S)?(o=p,we(S)):(n.consume(S),p)}function m(S){return S===45?(n.consume(S),g):p(S)}function g(S){return S===62?xe(S):S===45?m(S):p(S)}function C(S){const st="CDATA[";return S===st.charCodeAt(s++)?(n.consume(S),s===st.length?k:C):t(S)}function k(S){return S===null?t(S):S===93?(n.consume(S),N):Z(S)?(o=k,we(S)):(n.consume(S),k)}function N(S){return S===93?(n.consume(S),x):k(S)}function x(S){return S===62?xe(S):S===93?(n.consume(S),x):k(S)}function z(S){return S===null||S===62?xe(S):Z(S)?(o=z,we(S)):(n.consume(S),z)}function F(S){return S===null?t(S):S===63?(n.consume(S),G):Z(S)?(o=F,we(S)):(n.consume(S),F)}function G(S){return S===62?xe(S):F(S)}function $(S){return kt(S)?(n.consume(S),D):t(S)}function D(S){return S===45||ft(S)?(n.consume(S),D):A(S)}function A(S){return Z(S)?(o=A,we(S)):ce(S)?(n.consume(S),A):xe(S)}function _(S){return S===45||ft(S)?(n.consume(S),_):S===47||S===62||nt(S)?I(S):t(S)}function I(S){return S===47?(n.consume(S),xe):S===58||S===95||kt(S)?(n.consume(S),T):Z(S)?(o=I,we(S)):ce(S)?(n.consume(S),I):xe(S)}function T(S){return S===45||S===46||S===58||S===95||ft(S)?(n.consume(S),T):w(S)}function w(S){return S===61?(n.consume(S),b):Z(S)?(o=w,we(S)):ce(S)?(n.consume(S),w):I(S)}function b(S){return S===null||S===60||S===61||S===62||S===96?t(S):S===34||S===39?(n.consume(S),i=S,E):Z(S)?(o=b,we(S)):ce(S)?(n.consume(S),b):(n.consume(S),ae)}function E(S){return S===i?(n.consume(S),i=void 0,re):S===null?t(S):Z(S)?(o=E,we(S)):(n.consume(S),E)}function ae(S){return S===null||S===34||S===39||S===60||S===61||S===96?t(S):S===47||S===62||nt(S)?I(S):(n.consume(S),ae)}function re(S){return S===47||S===62||nt(S)?I(S):t(S)}function xe(S){return S===62?(n.consume(S),n.exit("htmlTextData"),n.exit("htmlText"),e):t(S)}function we(S){return n.exit("htmlTextData"),n.enter("lineEnding"),n.consume(S),n.exit("lineEnding"),Me}function Me(S){return ce(S)?_e(n,it,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(S):it(S)}function it(S){return n.enter("htmlTextData"),o(S)}}const ru={name:"labelEnd",resolveAll:Rb,resolveTo:Pb,tokenize:xb},Sb={tokenize:Nb},Cb={tokenize:Db},kb={tokenize:Vb};function Rb(n){let e=-1;const t=[];for(;++e<n.length;){const r=n[e][1];if(t.push(n[e]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",e+=i}}return n.length!==t.length&&Tn(n,0,n.length,t),n}function Pb(n,e){let t=n.length,r=0,i,s,o;for(;t--;){const d=n[t][1];if(i){if(d.type==="link"||d.type==="labelLink"&&d._inactive)break;n[t][0]==="enter"&&d.type==="labelLink"&&(d._inactive=!0)}else if(s){if(n[t][0]==="enter"&&(d.type==="labelImage"||d.type==="labelLink")&&!d._balanced&&(i=t,d.type!=="labelLink")){r=2;break}}else d.type==="labelEnd"&&(s=t)}const l={type:n[i][1].type==="labelLink"?"link":"image",start:{...n[i][1].start},end:{...n[n.length-1][1].end}},u={type:"label",start:{...n[i][1].start},end:{...n[s][1].end}},c={type:"labelText",start:{...n[i+r+2][1].end},end:{...n[s-2][1].start}};return o=[["enter",l,e],["enter",u,e]],o=yt(o,n.slice(i+1,i+r+3)),o=yt(o,[["enter",c,e]]),o=yt(o,nu(e.parser.constructs.insideSpan.null,n.slice(i+r+4,s-3),e)),o=yt(o,[["exit",c,e],n[s-2],n[s-1],["exit",u,e]]),o=yt(o,n.slice(s+1)),o=yt(o,[["exit",l,e]]),Tn(n,i,n.length,o),n}function xb(n,e,t){const r=this,i=r._labelStarts;let s,o;if(i){for(;i.length>0&&i[i.length-1]._balanced;)i.pop();s=i[i.length-1]}return l;function l(m){return s?s._inactive?p(m):(o=r.parser.defined.includes(mr(r.sliceSerialize({start:s.end,end:r.now()}))),n.enter("labelEnd"),n.enter("labelMarker"),n.consume(m),n.exit("labelMarker"),n.exit("labelEnd"),u):t(m)}function u(m){return m===40?n.attempt(Sb,d,o?d:p)(m):m===91?n.attempt(Cb,d,o?c:p)(m):o?d(m):p(m)}function c(m){return n.attempt(kb,d,p)(m)}function d(m){return i.pop(),e(m)}function p(m){return s._balanced=!0,t(m)}}function Nb(n,e,t){return r;function r(p){return n.enter("resource"),n.enter("resourceMarker"),n.consume(p),n.exit("resourceMarker"),i}function i(p){return nt(p)?hi(n,s)(p):s(p)}function s(p){return p===41?d(p):um(n,o,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function o(p){return nt(p)?hi(n,u)(p):d(p)}function l(p){return t(p)}function u(p){return p===34||p===39||p===40?hm(n,c,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):d(p)}function c(p){return nt(p)?hi(n,d)(p):d(p)}function d(p){return p===41?(n.enter("resourceMarker"),n.consume(p),n.exit("resourceMarker"),n.exit("resource"),e):t(p)}}function Db(n,e,t){const r=this;return i;function i(l){return cm.call(r,n,s,o,"reference","referenceMarker","referenceString")(l)}function s(l){return r.parser.defined.includes(mr(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?e(l):t(l)}function o(l){return t(l)}}function Vb(n,e,t){return r;function r(s){return n.enter("reference"),n.enter("referenceMarker"),n.consume(s),n.exit("referenceMarker"),i}function i(s){return s===93?(n.enter("referenceMarker"),n.consume(s),n.exit("referenceMarker"),n.exit("reference"),e):t(s)}}const Ob={name:"labelStartImage",resolveAll:ru.resolveAll,tokenize:Mb};function Mb(n,e,t){const r=this;let i;return s;function s(u){return n.enter("labelImage"),n.enter("labelImageMarker"),n.consume(u),n.exit("labelImageMarker"),o}function o(u){return u===91?(n.enter("labelMarker"),n.consume(u),n.exit("labelMarker"),i=n.exit("labelImage"),l):t(u)}function l(u){return u===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(u):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),e(u))}}const Lb={name:"labelStartLink",resolveAll:ru.resolveAll,tokenize:Fb};function Fb(n,e,t){const r=this;let i;return s;function s(l){return n.enter("labelLink"),n.enter("labelMarker"),n.consume(l),n.exit("labelMarker"),i=n.exit("labelLink"),o}function o(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(l):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),e(l))}}const ta={name:"lineEnding",tokenize:Ub};function Ub(n,e){return t;function t(r){return n.enter("lineEnding"),n.consume(r),n.exit("lineEnding"),_e(n,e,"linePrefix")}}const Ss={name:"thematicBreak",tokenize:jb};function jb(n,e,t){let r=0,i;return s;function s(c){return n.enter("thematicBreak"),o(c)}function o(c){return i=c,l(c)}function l(c){return c===i?(n.enter("thematicBreakSequence"),u(c)):r>=3&&(c===null||Z(c))?(n.exit("thematicBreak"),e(c)):t(c)}function u(c){return c===i?(n.consume(c),r++,u):(n.exit("thematicBreakSequence"),ce(c)?_e(n,l,"whitespace")(c):l(c))}}const Je={continuation:{tokenize:$b},exit:Gb,name:"list",tokenize:qb},Bb={partial:!0,tokenize:Wb},zb={partial:!0,tokenize:Hb};function qb(n,e,t){const r=this,i=r.events[r.events.length-1];let s=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return l;function l(g){const C=r.containerState.type||(g===42||g===43||g===45?"listUnordered":"listOrdered");if(C==="listUnordered"?!r.containerState.marker||g===r.containerState.marker:ja(g)){if(r.containerState.type||(r.containerState.type=C,n.enter(C,{_container:!0})),C==="listUnordered")return n.enter("listItemPrefix"),g===42||g===45?n.check(Ss,t,c)(g):c(g);if(!r.interrupt||g===49)return n.enter("listItemPrefix"),n.enter("listItemValue"),u(g)}return t(g)}function u(g){return ja(g)&&++o<10?(n.consume(g),u):(!r.interrupt||o<2)&&(r.containerState.marker?g===r.containerState.marker:g===41||g===46)?(n.exit("listItemValue"),c(g)):t(g)}function c(g){return n.enter("listItemMarker"),n.consume(g),n.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||g,n.check(vo,r.interrupt?t:d,n.attempt(Bb,m,p))}function d(g){return r.containerState.initialBlankLine=!0,s++,m(g)}function p(g){return ce(g)?(n.enter("listItemPrefixWhitespace"),n.consume(g),n.exit("listItemPrefixWhitespace"),m):t(g)}function m(g){return r.containerState.size=s+r.sliceSerialize(n.exit("listItemPrefix"),!0).length,e(g)}}function $b(n,e,t){const r=this;return r.containerState._closeFlow=void 0,n.check(vo,i,s);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,_e(n,e,"listItemIndent",r.containerState.size+1)(l)}function s(l){return r.containerState.furtherBlankLines||!ce(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,n.attempt(zb,e,o)(l))}function o(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,_e(n,n.attempt(Je,e,t),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function Hb(n,e,t){const r=this;return _e(n,i,"listItemIndent",r.containerState.size+1);function i(s){const o=r.events[r.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?e(s):t(s)}}function Gb(n){n.exit(this.containerState.type)}function Wb(n,e,t){const r=this;return _e(n,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(s){const o=r.events[r.events.length-1];return!ce(s)&&o&&o[1].type==="listItemPrefixWhitespace"?e(s):t(s)}}const Qh={name:"setextUnderline",resolveTo:Kb,tokenize:Qb};function Kb(n,e){const t=new Xs;let r=n.length,i,s,o;for(;r--;)if(n[r][0]==="enter"){if(n[r][1].type==="content"){i=r;break}n[r][1].type==="paragraph"&&(s=r)}else n[r][1].type==="content"&&t.add(r,1,[]),!o&&n[r][1].type==="definition"&&(o=r);const l={type:"setextHeading",start:{...n[i][1].start},end:{...n[n.length-1][1].end}};return n[s][1].type="setextHeadingText",o?(t.add(s,0,[["enter",l,e]]),t.add(o+1,0,[["exit",n[i][1],e]]),n[i][1].end={...n[o][1].end}):n[i][1]=l,t.add(n.length,0,[["exit",l,e]]),t.consume(n),n}function Qb(n,e,t){const r=this;let i;return s;function s(c){let d=r.events.length,p;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){p=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||p)?(n.enter("setextHeadingLine"),i=c,o(c)):t(c)}function o(c){return n.enter("setextHeadingLineSequence"),l(c)}function l(c){return c===i?(n.consume(c),l):(n.exit("setextHeadingLineSequence"),ce(c)?_e(n,u,"lineSuffix")(c):u(c))}function u(c){return c===null||Z(c)?(n.exit("setextHeadingLine"),e(c)):t(c)}}const Yb={tokenize:Xb};function Xb(n){const e=this,t=n.attempt(vo,r,n.attempt(this.parser.constructs.flowInitial,i,_e(n,n.attempt(this.parser.constructs.flow,i,n.attempt(ib,i)),"linePrefix")));return t;function r(s){if(s===null){n.consume(s);return}return n.enter("lineEndingBlank"),n.consume(s),n.exit("lineEndingBlank"),e.currentConstruct=void 0,t}function i(s){if(s===null){n.consume(s);return}return n.enter("lineEnding"),n.consume(s),n.exit("lineEnding"),e.currentConstruct=void 0,t}}const Jb={resolveAll:fm()},Zb=dm("string"),eS=dm("text");function dm(n){return{resolveAll:fm(n==="text"?tS:void 0),tokenize:e};function e(t){const r=this,i=this.parser.constructs[n],s=t.attempt(i,o,l);return o;function o(d){return c(d)?s(d):l(d)}function l(d){if(d===null){t.consume(d);return}return t.enter("data"),t.consume(d),u}function u(d){return c(d)?(t.exit("data"),s(d)):(t.consume(d),u)}function c(d){if(d===null)return!0;const p=i[d];let m=-1;if(p)for(;++m<p.length;){const g=p[m];if(!g.previous||g.previous.call(r,r.previous))return!0}return!1}}}function fm(n){return e;function e(t,r){let i=-1,s;for(;++i<=t.length;)s===void 0?t[i]&&t[i][1].type==="data"&&(s=i,i++):(!t[i]||t[i][1].type!=="data")&&(i!==s+2&&(t[s][1].end=t[i-1][1].end,t.splice(s+2,i-s-2),i=s+2),s=void 0);return n?n(t,r):t}}function tS(n,e){const t=new Xs;let r=0;for(;++r<=n.length;)if((r===n.length||n[r][1].type==="lineEnding")&&n[r-1][1].type==="data"){const i=n[r-1][1],s=e.sliceStream(i);let o=s.length,l=-1,u=0,c;for(;o--;){const d=s[o];if(typeof d=="string"){for(l=d.length;d.charCodeAt(l-1)===32;)u++,l--;if(l)break;l=-1}else if(d===-2)c=!0,u++;else if(d!==-1){o++;break}}if(e._contentTypeTextTrailing&&r===n.length&&(u=0),u){const d={type:r===n.length||c||u<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?l:i.start._bufferIndex+l,_index:i.start._index+o,line:i.end.line,column:i.end.column-u,offset:i.end.offset-u},end:{...i.end}};i.end={...d.start},i.start.offset===i.end.offset?Object.assign(i,d):t.add(r,0,[["enter",d,e],["exit",d,e]])}r++}return t.consume(n),n}const nS={42:Je,43:Je,45:Je,48:Je,49:Je,50:Je,51:Je,52:Je,53:Je,54:Je,55:Je,56:Je,57:Je,62:sm},rS={91:ub},iS={[-2]:ea,[-1]:ea,32:ea},sS={35:mb,42:Ss,45:[Qh,Ss],60:wb,61:Qh,95:Ss,96:Wh,126:Wh},oS={38:am,92:om},aS={[-5]:ta,[-4]:ta,[-3]:ta,33:Ob,38:am,42:Ba,60:[UA,Ab],91:Lb,92:[fb,om],93:ru,95:Ba,96:JA},lS={null:[Ba,Jb]},uS={null:[42,95]},cS={null:[]},hS=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:uS,contentInitial:rS,disable:cS,document:nS,flow:sS,flowInitial:iS,insideSpan:lS,string:oS,text:aS},Symbol.toStringTag,{value:"Module"}));function dS(n,e,t){let r={_bufferIndex:-1,_index:0,line:t&&t.line||1,column:t&&t.column||1,offset:t&&t.offset||0};const i={},s=[];let o=[],l=[];const u={attempt:A($),check:A(D),consume:z,enter:F,exit:G,interrupt:A(D,{interrupt:!0})},c={code:null,containerState:{},defineSkip:k,events:[],now:C,parser:n,previous:null,sliceSerialize:m,sliceStream:g,write:p};let d=e.tokenize.call(c,u);return e.resolveAll&&s.push(e),c;function p(w){return o=yt(o,w),N(),o[o.length-1]!==null?[]:(_(e,0),c.events=nu(s,c.events,c),c.events)}function m(w,b){return pS(g(w),b)}function g(w){return fS(o,w)}function C(){const{_bufferIndex:w,_index:b,line:E,column:ae,offset:re}=r;return{_bufferIndex:w,_index:b,line:E,column:ae,offset:re}}function k(w){i[w.line]=w.column,T()}function N(){for(;r._index<o.length;){const w=o[r._index];if(typeof w=="string"){const b=r._index;for(r._bufferIndex<0&&(r._bufferIndex=0);r._index===b&&r._bufferIndex<w.length;)x(w.charCodeAt(r._bufferIndex))}else x(w)}}function x(w){d=d(w)}function z(w){Z(w)?(r.line++,r.column=1,r.offset+=w===-3?2:1,T()):w!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),c.previous=w}function F(w,b){const E=b||{};return E.type=w,E.start=C(),c.events.push(["enter",E,c]),l.push(E),E}function G(w){const b=l.pop();return b.end=C(),c.events.push(["exit",b,c]),b}function $(w,b){_(w,b.from)}function D(w,b){b.restore()}function A(w,b){return E;function E(ae,re,xe){let we,Me,it,S;return Array.isArray(ae)?Ne(ae):"tokenize"in ae?Ne([ae]):st(ae);function st(be){return At;function At(bt){const Kt=bt!==null&&be[bt],_t=bt!==null&&be.null,Qt=[...Array.isArray(Kt)?Kt:Kt?[Kt]:[],...Array.isArray(_t)?_t:_t?[_t]:[]];return Ne(Qt)(bt)}}function Ne(be){return we=be,Me=0,be.length===0?xe:v(be[Me])}function v(be){return At;function At(bt){return S=I(),it=be,be.partial||(c.currentConstruct=be),be.name&&c.parser.constructs.disable.null.includes(be.name)?mt():be.tokenize.call(b?Object.assign(Object.create(c),b):c,u,ot,mt)(bt)}}function ot(be){return w(it,S),re}function mt(be){return S.restore(),++Me<we.length?v(we[Me]):xe}}}function _(w,b){w.resolveAll&&!s.includes(w)&&s.push(w),w.resolve&&Tn(c.events,b,c.events.length-b,w.resolve(c.events.slice(b),c)),w.resolveTo&&(c.events=w.resolveTo(c.events,c))}function I(){const w=C(),b=c.previous,E=c.currentConstruct,ae=c.events.length,re=Array.from(l);return{from:ae,restore:xe};function xe(){r=w,c.previous=b,c.currentConstruct=E,c.events.length=ae,l=re,T()}}function T(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function fS(n,e){const t=e.start._index,r=e.start._bufferIndex,i=e.end._index,s=e.end._bufferIndex;let o;if(t===i)o=[n[t].slice(r,s)];else{if(o=n.slice(t,i),r>-1){const l=o[0];typeof l=="string"?o[0]=l.slice(r):o.shift()}s>0&&o.push(n[i].slice(0,s))}return o}function pS(n,e){let t=-1;const r=[];let i;for(;++t<n.length;){const s=n[t];let o;if(typeof s=="string")o=s;else switch(s){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=e?" ":"	";break}case-1:{if(!e&&i)continue;o=" ";break}default:o=String.fromCharCode(s)}i=s===-2,r.push(o)}return r.join("")}function mS(n){const r={constructs:AA([hS,...(n||{}).extensions||[]]),content:i(NA),defined:[],document:i(VA),flow:i(Yb),lazy:{},string:i(Zb),text:i(eS)};return r;function i(s){return o;function o(l){return dS(r,s,l)}}}function gS(n){for(;!lm(n););return n}const Yh=/[\0\t\n\r]/g;function yS(){let n=1,e="",t=!0,r;return i;function i(s,o,l){s=e+(typeof s=="string"?s.toString():new TextDecoder(o||void 0).decode(s));const u=[];let c=0;for(e="",t&&(s.charCodeAt(0)===65279&&c++,t=void 0);c<s.length;){Yh.lastIndex=c;const d=Yh.exec(s),p=d&&d.index!==void 0?d.index:s.length,m=s.charCodeAt(p);if(!d){e=s.slice(c);break}if(m===10&&c===p&&r)u.push(-3),r=void 0;else switch(r&&(u.push(-5),r=void 0),c<p&&(u.push(s.slice(c,p)),n+=p-c),m){case 0:{u.push(65533),n++;break}case 9:{const g=Math.ceil(n/4)*4;for(u.push(-2);n++<g;)u.push(-1);break}case 10:{u.push(-4),n=1;break}default:r=!0,n=1}c=p+1}return l&&(r&&u.push(-5),e&&u.push(e),u.push(null)),u}}const _S=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function wS(n){return n.replace(_S,ES)}function ES(n,e,t){if(e)return e;if(t.charCodeAt(0)===35){const i=t.charCodeAt(1),s=i===120||i===88;return rm(t.slice(s?2:1),s?16:10)}return tu(t)||n}const pm={}.hasOwnProperty;function IS(n,e,t){return e&&typeof e=="object"&&(t=e,e=void 0),TS(t)(gS(mS(t).document().write(yS()(n,e,!0))))}function TS(n){const e={afterExit:[],beforeEnter:[],transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(Kn),autolinkProtocol:T,autolinkEmail:T,atxHeading:o(Lr),blockQuote:o(Qt),characterEscape:T,characterReference:T,codeFenced:o(Wn),codeFencedFenceInfo:l,codeFencedFenceMeta:l,codeIndented:o(Wn,l),codeText:o(Vr,l),codeTextData:T,data:T,codeFlowValue:T,definition:o(Or),definitionDestinationString:l,definitionLabelString:l,definitionTitleString:l,emphasis:o(Mr),hardBreakEscape:o(zi),hardBreakTrailing:o(zi),htmlFlow:o(qi,l),htmlFlowData:T,htmlText:o(qi,l),htmlTextData:T,image:o($i),label:l,link:o(Kn),listItem:o(Co),listItemValue:g,listOrdered:o(Fr,m),listUnordered:o(Fr),paragraph:o(Ur),reference:ot,referenceString:l,resourceDestinationString:l,resourceTitleString:l,setextHeading:o(Lr),strong:o(jr),thematicBreak:o(De)},exit:{atxHeading:c(),atxHeadingSequence:D,autolink:c(),autolinkEmail:_t,autolinkProtocol:Kt,blockQuote:c(),characterEscapeValue:w,characterReferenceMarkerHexadecimal:be,characterReferenceMarkerNumeric:be,characterReferenceValue:At,characterReference:bt,codeFenced:c(x),codeFencedFence:N,codeFencedFenceInfo:C,codeFencedFenceMeta:k,codeFlowValue:w,codeIndented:c(z),codeText:c(xe),codeTextData:w,data:w,definition:c(),definitionDestinationString:$,definitionLabelString:F,definitionTitleString:G,emphasis:c(),hardBreakEscape:c(E),hardBreakTrailing:c(E),htmlFlow:c(ae),htmlFlowData:w,htmlText:c(re),htmlTextData:w,image:c(Me),label:S,labelText:it,lineEnding:b,link:c(we),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:mt,resourceDestinationString:st,resourceTitleString:Ne,resource:v,setextHeading:c(I),setextHeadingLineSequence:_,setextHeadingText:A,strong:c(),thematicBreak:c()}};mm(e,(n||{}).mdastExtensions||[]);const t={};return r;function r(P){let j={type:"root",children:[],position:void 0};const Y={stack:[j],tokenStack:[],config:e,enter:u,exit:d,buffer:l,resume:p,data:t},ne=[],ze=[];let de=-1;for(;++de<P.length;)if(ze.push(P[de]),P[de][1].type==="listOrdered"||P[de][1].type==="listUnordered")if(P[de][0]==="enter")ne.push(ze.length-1);else{const Le=ne.pop();s(ze,Le)}for(P=ze,de=-1;++de<P.length;){const Le=e[P[de][0]];P[de][0]==="enter"&&e.beforeEnter.length>0&&i(e.beforeEnter,{...Y,sliceSerialize:P[de][2].sliceSerialize},P[de][1]),pm.call(Le,P[de][1].type)&&Le[P[de][1].type].call({...Y,sliceSerialize:P[de][2].sliceSerialize},P[de][1]),P[de][0]==="exit"&&e.afterExit.length>0&&i(e.afterExit,{...Y,sliceSerialize:P[de][2].sliceSerialize},P[de][1])}if(Y.tokenStack.length>0){const Le=Y.tokenStack[Y.tokenStack.length-1];(Le[1]||Xh).call(Y,void 0,Le[0])}for(j.position={start:en(P.length>0?P[0][1].start:{line:1,column:1,offset:0}),end:en(P.length>0?P[P.length-2][1].end:{line:1,column:1,offset:0})},de=-1;++de<e.transforms.length;)j=e.transforms[de](j)||j;return j}function i(P,j,Y){let ne=-1;for(;++ne<P.length;)P[ne].call(j,Y)}function s(P,j){const Y=P.length-1;let ne=j-1,ze=-1,de=!1,Le,at,Ot,An;const bn=[];for(;++ne<=Y;){const qe=P[ne];switch(qe[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{qe[0]==="enter"?ze++:ze--,An=void 0;break}case"lineEndingBlank":{qe[0]==="enter"&&(Le&&!An&&!ze&&!Ot&&(Ot=ne),An=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:An=void 0}if(!ze&&qe[0]==="enter"&&qe[1].type==="listItemPrefix"||ze===-1&&qe[0]==="exit"&&(qe[1].type==="listUnordered"||qe[1].type==="listOrdered")){if(Le){let gt=ne;for(at=void 0;gt--;){const lt=P[gt];if(lt[1].type==="lineEnding"||lt[1].type==="lineEndingBlank"){if(lt[0]==="exit")continue;at&&(P[at][1].type="lineEndingBlank",de=!0),lt[1].type="lineEnding",at=gt}else if(!(lt[1].type==="linePrefix"||lt[1].type==="blockQuotePrefix"||lt[1].type==="blockQuotePrefixWhitespace"||lt[1].type==="blockQuoteMarker"||lt[1].type==="listItemIndent"))break}Ot&&(!at||Ot<at)&&(Le._spread=!0),Le.end=Object.assign({},at?P[at][1].start:qe[1].end),bn.push({at:at||ne,event:["exit",Le,qe[2]]})}if(qe[1].type==="listItemPrefix"){const gt={type:"listItem",_spread:!1,start:Object.assign({},qe[1].start),end:void 0};Le=gt,bn.push({at:ne,event:["enter",gt,qe[2]]}),Ot=void 0,An=!0}}}const Qn=P.splice(j);let Yn=0;for(ne=-1;++ne<Qn.length;){for(;Yn<bn.length&&bn[Yn].at===j+ne;)P.push(bn[Yn++].event);P.push(Qn[ne])}P[j][1]._spread=de}function o(P,j){return Y;function Y(ne){u.call(this,P(ne),ne),j&&j.call(this,ne)}}function l(){this.stack.push({type:"fragment",children:[]})}function u(P,j,Y){this.stack[this.stack.length-1].children.push(P),this.stack.push(P),this.tokenStack.push([j,Y||void 0]),P.position={start:en(j.start),end:void 0}}function c(P){return j;function j(Y){P&&P.call(this,Y),d.call(this,Y)}}function d(P,j){const Y=this.stack.pop(),ne=this.tokenStack.pop();if(!ne)throw new Error("Cannot close `"+P.type+"` ("+ci({start:P.start,end:P.end})+"): it’s not open");ne[0].type!==P.type&&(j?j.call(this,P,ne[0]):(ne[1]||Xh).call(this,P,ne[0])),Y.position.end=en(P.end)}function p(){return TA(this.stack.pop())}function m(){this.data.expectingFirstListItemValue=!0}function g(P){if(this.data.expectingFirstListItemValue){const j=this.stack[this.stack.length-2];j.start=Number.parseInt(this.sliceSerialize(P),10),this.data.expectingFirstListItemValue=void 0}}function C(){const P=this.resume(),j=this.stack[this.stack.length-1];j.lang=P}function k(){const P=this.resume(),j=this.stack[this.stack.length-1];j.meta=P}function N(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function x(){const P=this.resume(),j=this.stack[this.stack.length-1];j.value=P.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function z(){const P=this.resume(),j=this.stack[this.stack.length-1];j.value=P.replace(/(\r?\n|\r)$/g,"")}function F(P){const j=this.resume(),Y=this.stack[this.stack.length-1];Y.label=j,Y.identifier=mr(this.sliceSerialize(P)).toLowerCase()}function G(){const P=this.resume(),j=this.stack[this.stack.length-1];j.title=P}function $(){const P=this.resume(),j=this.stack[this.stack.length-1];j.url=P}function D(P){const j=this.stack[this.stack.length-1];if(!j.depth){const Y=this.sliceSerialize(P).length;j.depth=Y}}function A(){this.data.setextHeadingSlurpLineEnding=!0}function _(P){const j=this.stack[this.stack.length-1];j.depth=this.sliceSerialize(P).codePointAt(0)===61?1:2}function I(){this.data.setextHeadingSlurpLineEnding=void 0}function T(P){const Y=this.stack[this.stack.length-1].children;let ne=Y[Y.length-1];(!ne||ne.type!=="text")&&(ne=Hi(),ne.position={start:en(P.start),end:void 0},Y.push(ne)),this.stack.push(ne)}function w(P){const j=this.stack.pop();j.value+=this.sliceSerialize(P),j.position.end=en(P.end)}function b(P){const j=this.stack[this.stack.length-1];if(this.data.atHardBreak){const Y=j.children[j.children.length-1];Y.position.end=en(P.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&e.canContainEols.includes(j.type)&&(T.call(this,P),w.call(this,P))}function E(){this.data.atHardBreak=!0}function ae(){const P=this.resume(),j=this.stack[this.stack.length-1];j.value=P}function re(){const P=this.resume(),j=this.stack[this.stack.length-1];j.value=P}function xe(){const P=this.resume(),j=this.stack[this.stack.length-1];j.value=P}function we(){const P=this.stack[this.stack.length-1];if(this.data.inReference){const j=this.data.referenceType||"shortcut";P.type+="Reference",P.referenceType=j,delete P.url,delete P.title}else delete P.identifier,delete P.label;this.data.referenceType=void 0}function Me(){const P=this.stack[this.stack.length-1];if(this.data.inReference){const j=this.data.referenceType||"shortcut";P.type+="Reference",P.referenceType=j,delete P.url,delete P.title}else delete P.identifier,delete P.label;this.data.referenceType=void 0}function it(P){const j=this.sliceSerialize(P),Y=this.stack[this.stack.length-2];Y.label=wS(j),Y.identifier=mr(j).toLowerCase()}function S(){const P=this.stack[this.stack.length-1],j=this.resume(),Y=this.stack[this.stack.length-1];if(this.data.inReference=!0,Y.type==="link"){const ne=P.children;Y.children=ne}else Y.alt=j}function st(){const P=this.resume(),j=this.stack[this.stack.length-1];j.url=P}function Ne(){const P=this.resume(),j=this.stack[this.stack.length-1];j.title=P}function v(){this.data.inReference=void 0}function ot(){this.data.referenceType="collapsed"}function mt(P){const j=this.resume(),Y=this.stack[this.stack.length-1];Y.label=j,Y.identifier=mr(this.sliceSerialize(P)).toLowerCase(),this.data.referenceType="full"}function be(P){this.data.characterReferenceType=P.type}function At(P){const j=this.sliceSerialize(P),Y=this.data.characterReferenceType;let ne;Y?(ne=rm(j,Y==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):ne=tu(j);const ze=this.stack[this.stack.length-1];ze.value+=ne}function bt(P){const j=this.stack.pop();j.position.end=en(P.end)}function Kt(P){w.call(this,P);const j=this.stack[this.stack.length-1];j.url=this.sliceSerialize(P)}function _t(P){w.call(this,P);const j=this.stack[this.stack.length-1];j.url="mailto:"+this.sliceSerialize(P)}function Qt(){return{type:"blockquote",children:[],position:void 0}}function Wn(){return{type:"code",lang:null,meta:null,value:"",position:void 0}}function Vr(){return{type:"inlineCode",value:"",position:void 0}}function Or(){return{type:"definition",identifier:"",label:null,title:null,url:"",position:void 0}}function Mr(){return{type:"emphasis",children:[],position:void 0}}function Lr(){return{type:"heading",depth:0,children:[],position:void 0}}function zi(){return{type:"break",position:void 0}}function qi(){return{type:"html",value:"",position:void 0}}function $i(){return{type:"image",title:null,url:"",alt:null,position:void 0}}function Kn(){return{type:"link",title:null,url:"",children:[],position:void 0}}function Fr(P){return{type:"list",ordered:P.type==="listOrdered",start:null,spread:P._spread,children:[],position:void 0}}function Co(P){return{type:"listItem",spread:P._spread,checked:null,children:[],position:void 0}}function Ur(){return{type:"paragraph",children:[],position:void 0}}function jr(){return{type:"strong",children:[],position:void 0}}function Hi(){return{type:"text",value:"",position:void 0}}function De(){return{type:"thematicBreak",position:void 0}}}function en(n){return{line:n.line,column:n.column,offset:n.offset}}function mm(n,e){let t=-1;for(;++t<e.length;){const r=e[t];Array.isArray(r)?mm(n,r):vS(n,r)}}function vS(n,e){let t;for(t in e)if(pm.call(e,t))switch(t){case"canContainEols":{const r=e[t];r&&n[t].push(...r);break}case"transforms":{const r=e[t];r&&n[t].push(...r);break}case"afterExit":case"beforeEnter":{const r=e[t];r&&n[t].push(r);break}case"enter":case"exit":{const r=e[t];r&&Object.assign(n[t],r);break}}}function Xh(n,e){throw n?new Error("Cannot close `"+n.type+"` ("+ci({start:n.start,end:n.end})+"): a different token (`"+e.type+"`, "+ci({start:e.start,end:e.end})+") is open"):new Error("Cannot close document, a token (`"+e.type+"`, "+ci({start:e.start,end:e.end})+") is still open")}function AS(n){const e=this;e.parser=t;function t(r){return IS(r,{...e.data("settings"),...n,extensions:e.data("micromarkExtensions")||[],mdastExtensions:e.data("fromMarkdownExtensions")||[]})}}function bS(n,e){const t={type:"element",tagName:"blockquote",properties:{},children:n.wrap(n.all(e),!0)};return n.patch(e,t),n.applyData(e,t)}function SS(n,e){const t={type:"element",tagName:"br",properties:{},children:[]};return n.patch(e,t),[n.applyData(e,t),{type:"text",value:`
`}]}function CS(n,e){const t=e.value?e.value+`
`:"",r={},i=e.lang?e.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let s={type:"element",tagName:"code",properties:r,children:[{type:"text",value:t}]};return e.meta&&(s.data={meta:e.meta}),n.patch(e,s),s=n.applyData(e,s),s={type:"element",tagName:"pre",properties:{},children:[s]},n.patch(e,s),s}function kS(n,e){const t={type:"element",tagName:"del",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function RS(n,e){const t={type:"element",tagName:"em",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function PS(n,e){const t=typeof n.options.clobberPrefix=="string"?n.options.clobberPrefix:"user-content-",r=String(e.identifier).toUpperCase(),i=Dr(r.toLowerCase()),s=n.footnoteOrder.indexOf(r);let o,l=n.footnoteCounts.get(r);l===void 0?(l=0,n.footnoteOrder.push(r),o=n.footnoteOrder.length):o=s+1,l+=1,n.footnoteCounts.set(r,l);const u={type:"element",tagName:"a",properties:{href:"#"+t+"fn-"+i,id:t+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};n.patch(e,u);const c={type:"element",tagName:"sup",properties:{},children:[u]};return n.patch(e,c),n.applyData(e,c)}function xS(n,e){const t={type:"element",tagName:"h"+e.depth,properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function NS(n,e){if(n.options.allowDangerousHtml){const t={type:"raw",value:e.value};return n.patch(e,t),n.applyData(e,t)}}function gm(n,e){const t=e.referenceType;let r="]";if(t==="collapsed"?r+="[]":t==="full"&&(r+="["+(e.label||e.identifier)+"]"),e.type==="imageReference")return[{type:"text",value:"!["+e.alt+r}];const i=n.all(e),s=i[0];s&&s.type==="text"?s.value="["+s.value:i.unshift({type:"text",value:"["});const o=i[i.length-1];return o&&o.type==="text"?o.value+=r:i.push({type:"text",value:r}),i}function DS(n,e){const t=String(e.identifier).toUpperCase(),r=n.definitionById.get(t);if(!r)return gm(n,e);const i={src:Dr(r.url||""),alt:e.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"img",properties:i,children:[]};return n.patch(e,s),n.applyData(e,s)}function VS(n,e){const t={src:Dr(e.url)};e.alt!==null&&e.alt!==void 0&&(t.alt=e.alt),e.title!==null&&e.title!==void 0&&(t.title=e.title);const r={type:"element",tagName:"img",properties:t,children:[]};return n.patch(e,r),n.applyData(e,r)}function OS(n,e){const t={type:"text",value:e.value.replace(/\r?\n|\r/g," ")};n.patch(e,t);const r={type:"element",tagName:"code",properties:{},children:[t]};return n.patch(e,r),n.applyData(e,r)}function MS(n,e){const t=String(e.identifier).toUpperCase(),r=n.definitionById.get(t);if(!r)return gm(n,e);const i={href:Dr(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"a",properties:i,children:n.all(e)};return n.patch(e,s),n.applyData(e,s)}function LS(n,e){const t={href:Dr(e.url)};e.title!==null&&e.title!==void 0&&(t.title=e.title);const r={type:"element",tagName:"a",properties:t,children:n.all(e)};return n.patch(e,r),n.applyData(e,r)}function FS(n,e,t){const r=n.all(e),i=t?US(t):ym(e),s={},o=[];if(typeof e.checked=="boolean"){const d=r[0];let p;d&&d.type==="element"&&d.tagName==="p"?p=d:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:e.checked,disabled:!0},children:[]}),s.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const d=r[l];(i||l!==0||d.type!=="element"||d.tagName!=="p")&&o.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?o.push(...d.children):o.push(d)}const u=r[r.length-1];u&&(i||u.type!=="element"||u.tagName!=="p")&&o.push({type:"text",value:`
`});const c={type:"element",tagName:"li",properties:s,children:o};return n.patch(e,c),n.applyData(e,c)}function US(n){let e=!1;if(n.type==="list"){e=n.spread||!1;const t=n.children;let r=-1;for(;!e&&++r<t.length;)e=ym(t[r])}return e}function ym(n){const e=n.spread;return e??n.children.length>1}function jS(n,e){const t={},r=n.all(e);let i=-1;for(typeof e.start=="number"&&e.start!==1&&(t.start=e.start);++i<r.length;){const o=r[i];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){t.className=["contains-task-list"];break}}const s={type:"element",tagName:e.ordered?"ol":"ul",properties:t,children:n.wrap(r,!0)};return n.patch(e,s),n.applyData(e,s)}function BS(n,e){const t={type:"element",tagName:"p",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function zS(n,e){const t={type:"root",children:n.wrap(n.all(e))};return n.patch(e,t),n.applyData(e,t)}function qS(n,e){const t={type:"element",tagName:"strong",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function $S(n,e){const t=n.all(e),r=t.shift(),i=[];if(r){const o={type:"element",tagName:"thead",properties:{},children:n.wrap([r],!0)};n.patch(e.children[0],o),i.push(o)}if(t.length>0){const o={type:"element",tagName:"tbody",properties:{},children:n.wrap(t,!0)},l=Xl(e.children[1]),u=Yp(e.children[e.children.length-1]);l&&u&&(o.position={start:l,end:u}),i.push(o)}const s={type:"element",tagName:"table",properties:{},children:n.wrap(i,!0)};return n.patch(e,s),n.applyData(e,s)}function HS(n,e,t){const r=t?t.children:void 0,s=(r?r.indexOf(e):1)===0?"th":"td",o=t&&t.type==="table"?t.align:void 0,l=o?o.length:e.children.length;let u=-1;const c=[];for(;++u<l;){const p=e.children[u],m={},g=o?o[u]:void 0;g&&(m.align=g);let C={type:"element",tagName:s,properties:m,children:[]};p&&(C.children=n.all(p),n.patch(p,C),C=n.applyData(p,C)),c.push(C)}const d={type:"element",tagName:"tr",properties:{},children:n.wrap(c,!0)};return n.patch(e,d),n.applyData(e,d)}function GS(n,e){const t={type:"element",tagName:"td",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}const Jh=9,Zh=32;function WS(n){const e=String(n),t=/\r?\n|\r/g;let r=t.exec(e),i=0;const s=[];for(;r;)s.push(ed(e.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=t.exec(e);return s.push(ed(e.slice(i),i>0,!1)),s.join("")}function ed(n,e,t){let r=0,i=n.length;if(e){let s=n.codePointAt(r);for(;s===Jh||s===Zh;)r++,s=n.codePointAt(r)}if(t){let s=n.codePointAt(i-1);for(;s===Jh||s===Zh;)i--,s=n.codePointAt(i-1)}return i>r?n.slice(r,i):""}function KS(n,e){const t={type:"text",value:WS(String(e.value))};return n.patch(e,t),n.applyData(e,t)}function QS(n,e){const t={type:"element",tagName:"hr",properties:{},children:[]};return n.patch(e,t),n.applyData(e,t)}const YS={blockquote:bS,break:SS,code:CS,delete:kS,emphasis:RS,footnoteReference:PS,heading:xS,html:NS,imageReference:DS,image:VS,inlineCode:OS,linkReference:MS,link:LS,listItem:FS,list:jS,paragraph:BS,root:zS,strong:qS,table:$S,tableCell:GS,tableRow:HS,text:KS,thematicBreak:QS,toml:fs,yaml:fs,definition:fs,footnoteDefinition:fs};function fs(){}const _m=-1,Ao=0,di=1,Js=2,iu=3,su=4,ou=5,au=6,wm=7,Em=8,td=typeof self=="object"?self:globalThis,XS=(n,e)=>{const t=(i,s)=>(n.set(s,i),i),r=i=>{if(n.has(i))return n.get(i);const[s,o]=e[i];switch(s){case Ao:case _m:return t(o,i);case di:{const l=t([],i);for(const u of o)l.push(r(u));return l}case Js:{const l=t({},i);for(const[u,c]of o)l[r(u)]=r(c);return l}case iu:return t(new Date(o),i);case su:{const{source:l,flags:u}=o;return t(new RegExp(l,u),i)}case ou:{const l=t(new Map,i);for(const[u,c]of o)l.set(r(u),r(c));return l}case au:{const l=t(new Set,i);for(const u of o)l.add(r(u));return l}case wm:{const{name:l,message:u}=o;return t(new td[l](u),i)}case Em:return t(BigInt(o),i);case"BigInt":return t(Object(BigInt(o)),i);case"ArrayBuffer":return t(new Uint8Array(o).buffer,o);case"DataView":{const{buffer:l}=new Uint8Array(o);return t(new DataView(l),o)}}return t(new td[s](o),i)};return r},nd=n=>XS(new Map,n)(0),tr="",{toString:JS}={},{keys:ZS}=Object,Zr=n=>{const e=typeof n;if(e!=="object"||!n)return[Ao,e];const t=JS.call(n).slice(8,-1);switch(t){case"Array":return[di,tr];case"Object":return[Js,tr];case"Date":return[iu,tr];case"RegExp":return[su,tr];case"Map":return[ou,tr];case"Set":return[au,tr];case"DataView":return[di,t]}return t.includes("Array")?[di,t]:t.includes("Error")?[wm,t]:[Js,t]},ps=([n,e])=>n===Ao&&(e==="function"||e==="symbol"),eC=(n,e,t,r)=>{const i=(o,l)=>{const u=r.push(o)-1;return t.set(l,u),u},s=o=>{if(t.has(o))return t.get(o);let[l,u]=Zr(o);switch(l){case Ao:{let d=o;switch(u){case"bigint":l=Em,d=o.toString();break;case"function":case"symbol":if(n)throw new TypeError("unable to serialize "+u);d=null;break;case"undefined":return i([_m],o)}return i([l,d],o)}case di:{if(u){let m=o;return u==="DataView"?m=new Uint8Array(o.buffer):u==="ArrayBuffer"&&(m=new Uint8Array(o)),i([u,[...m]],o)}const d=[],p=i([l,d],o);for(const m of o)d.push(s(m));return p}case Js:{if(u)switch(u){case"BigInt":return i([u,o.toString()],o);case"Boolean":case"Number":case"String":return i([u,o.valueOf()],o)}if(e&&"toJSON"in o)return s(o.toJSON());const d=[],p=i([l,d],o);for(const m of ZS(o))(n||!ps(Zr(o[m])))&&d.push([s(m),s(o[m])]);return p}case iu:return i([l,o.toISOString()],o);case su:{const{source:d,flags:p}=o;return i([l,{source:d,flags:p}],o)}case ou:{const d=[],p=i([l,d],o);for(const[m,g]of o)(n||!(ps(Zr(m))||ps(Zr(g))))&&d.push([s(m),s(g)]);return p}case au:{const d=[],p=i([l,d],o);for(const m of o)(n||!ps(Zr(m)))&&d.push(s(m));return p}}const{message:c}=o;return i([l,{name:u,message:c}],o)};return s},rd=(n,{json:e,lossy:t}={})=>{const r=[];return eC(!(e||t),!!e,new Map,r)(n),r},Zs=typeof structuredClone=="function"?(n,e)=>e&&("json"in e||"lossy"in e)?nd(rd(n,e)):structuredClone(n):(n,e)=>nd(rd(n,e));function tC(n,e){const t=[{type:"text",value:"↩"}];return e>1&&t.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(e)}]}),t}function nC(n,e){return"Back to reference "+(n+1)+(e>1?"-"+e:"")}function rC(n){const e=typeof n.options.clobberPrefix=="string"?n.options.clobberPrefix:"user-content-",t=n.options.footnoteBackContent||tC,r=n.options.footnoteBackLabel||nC,i=n.options.footnoteLabel||"Footnotes",s=n.options.footnoteLabelTagName||"h2",o=n.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let u=-1;for(;++u<n.footnoteOrder.length;){const c=n.footnoteById.get(n.footnoteOrder[u]);if(!c)continue;const d=n.all(c),p=String(c.identifier).toUpperCase(),m=Dr(p.toLowerCase());let g=0;const C=[],k=n.footnoteCounts.get(p);for(;k!==void 0&&++g<=k;){C.length>0&&C.push({type:"text",value:" "});let z=typeof t=="string"?t:t(u,g);typeof z=="string"&&(z={type:"text",value:z}),C.push({type:"element",tagName:"a",properties:{href:"#"+e+"fnref-"+m+(g>1?"-"+g:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(u,g),className:["data-footnote-backref"]},children:Array.isArray(z)?z:[z]})}const N=d[d.length-1];if(N&&N.type==="element"&&N.tagName==="p"){const z=N.children[N.children.length-1];z&&z.type==="text"?z.value+=" ":N.children.push({type:"text",value:" "}),N.children.push(...C)}else d.push(...C);const x={type:"element",tagName:"li",properties:{id:e+"fn-"+m},children:n.wrap(d,!0)};n.patch(c,x),l.push(x)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:s,properties:{...Zs(o),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:n.wrap(l,!0)},{type:"text",value:`
`}]}}const Im=function(n){if(n==null)return aC;if(typeof n=="function")return bo(n);if(typeof n=="object")return Array.isArray(n)?iC(n):sC(n);if(typeof n=="string")return oC(n);throw new Error("Expected function, string, or object as test")};function iC(n){const e=[];let t=-1;for(;++t<n.length;)e[t]=Im(n[t]);return bo(r);function r(...i){let s=-1;for(;++s<e.length;)if(e[s].apply(this,i))return!0;return!1}}function sC(n){const e=n;return bo(t);function t(r){const i=r;let s;for(s in n)if(i[s]!==e[s])return!1;return!0}}function oC(n){return bo(e);function e(t){return t&&t.type===n}}function bo(n){return e;function e(t,r,i){return!!(lC(t)&&n.call(this,t,typeof r=="number"?r:void 0,i||void 0))}}function aC(){return!0}function lC(n){return n!==null&&typeof n=="object"&&"type"in n}const Tm=[],uC=!0,id=!1,cC="skip";function hC(n,e,t,r){let i;typeof e=="function"&&typeof t!="function"?(r=t,t=e):i=e;const s=Im(i),o=r?-1:1;l(n,void 0,[])();function l(u,c,d){const p=u&&typeof u=="object"?u:{};if(typeof p.type=="string"){const g=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(m,"name",{value:"node ("+(u.type+(g?"<"+g+">":""))+")"})}return m;function m(){let g=Tm,C,k,N;if((!e||s(u,c,d[d.length-1]||void 0))&&(g=dC(t(u,d)),g[0]===id))return g;if("children"in u&&u.children){const x=u;if(x.children&&g[0]!==cC)for(k=(r?x.children.length:-1)+o,N=d.concat(x);k>-1&&k<x.children.length;){const z=x.children[k];if(C=l(z,k,N)(),C[0]===id)return C;k=typeof C[1]=="number"?C[1]:k+o}}return g}}}function dC(n){return Array.isArray(n)?n:typeof n=="number"?[uC,n]:n==null?Tm:[n]}function vm(n,e,t,r){let i,s,o;typeof e=="function"&&typeof t!="function"?(s=void 0,o=e,i=t):(s=e,o=t,i=r),hC(n,s,l,i);function l(u,c){const d=c[c.length-1],p=d?d.children.indexOf(u):void 0;return o(u,p,d)}}const qa={}.hasOwnProperty,fC={};function pC(n,e){const t=e||fC,r=new Map,i=new Map,s=new Map,o={...YS,...t.handlers},l={all:c,applyData:gC,definitionById:r,footnoteById:i,footnoteCounts:s,footnoteOrder:[],handlers:o,one:u,options:t,patch:mC,wrap:_C};return vm(n,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const p=d.type==="definition"?r:i,m=String(d.identifier).toUpperCase();p.has(m)||p.set(m,d)}}),l;function u(d,p){const m=d.type,g=l.handlers[m];if(qa.call(l.handlers,m)&&g)return g(l,d,p);if(l.options.passThrough&&l.options.passThrough.includes(m)){if("children"in d){const{children:k,...N}=d,x=Zs(N);return x.children=l.all(d),x}return Zs(d)}return(l.options.unknownHandler||yC)(l,d,p)}function c(d){const p=[];if("children"in d){const m=d.children;let g=-1;for(;++g<m.length;){const C=l.one(m[g],d);if(C){if(g&&m[g-1].type==="break"&&(!Array.isArray(C)&&C.type==="text"&&(C.value=sd(C.value)),!Array.isArray(C)&&C.type==="element")){const k=C.children[0];k&&k.type==="text"&&(k.value=sd(k.value))}Array.isArray(C)?p.push(...C):p.push(C)}}}return p}}function mC(n,e){n.position&&(e.position=eA(n))}function gC(n,e){let t=e;if(n&&n.data){const r=n.data.hName,i=n.data.hChildren,s=n.data.hProperties;if(typeof r=="string")if(t.type==="element")t.tagName=r;else{const o="children"in t?t.children:[t];t={type:"element",tagName:r,properties:{},children:o}}t.type==="element"&&s&&Object.assign(t.properties,Zs(s)),"children"in t&&t.children&&i!==null&&i!==void 0&&(t.children=i)}return t}function yC(n,e){const t=e.data||{},r="value"in e&&!(qa.call(t,"hProperties")||qa.call(t,"hChildren"))?{type:"text",value:e.value}:{type:"element",tagName:"div",properties:{},children:n.all(e)};return n.patch(e,r),n.applyData(e,r)}function _C(n,e){const t=[];let r=-1;for(e&&t.push({type:"text",value:`
`});++r<n.length;)r&&t.push({type:"text",value:`
`}),t.push(n[r]);return e&&n.length>0&&t.push({type:"text",value:`
`}),t}function sd(n){let e=0,t=n.charCodeAt(e);for(;t===9||t===32;)e++,t=n.charCodeAt(e);return n.slice(e)}function od(n,e){const t=pC(n,e),r=t.one(n,void 0),i=rC(t),s=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&s.children.push({type:"text",value:`
`},i),s}function wC(n,e){return n&&"run"in n?async function(t,r){const i=od(t,{file:r,...e});await n.run(i,r)}:function(t,r){return od(t,{file:r,...n||e})}}function ad(n){if(n)throw n}var Cs=Object.prototype.hasOwnProperty,Am=Object.prototype.toString,ld=Object.defineProperty,ud=Object.getOwnPropertyDescriptor,cd=function(e){return typeof Array.isArray=="function"?Array.isArray(e):Am.call(e)==="[object Array]"},hd=function(e){if(!e||Am.call(e)!=="[object Object]")return!1;var t=Cs.call(e,"constructor"),r=e.constructor&&e.constructor.prototype&&Cs.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!t&&!r)return!1;var i;for(i in e);return typeof i>"u"||Cs.call(e,i)},dd=function(e,t){ld&&t.name==="__proto__"?ld(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},fd=function(e,t){if(t==="__proto__")if(Cs.call(e,t)){if(ud)return ud(e,t).value}else return;return e[t]},EC=function n(){var e,t,r,i,s,o,l=arguments[0],u=1,c=arguments.length,d=!1;for(typeof l=="boolean"&&(d=l,l=arguments[1]||{},u=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});u<c;++u)if(e=arguments[u],e!=null)for(t in e)r=fd(l,t),i=fd(e,t),l!==i&&(d&&i&&(hd(i)||(s=cd(i)))?(s?(s=!1,o=r&&cd(r)?r:[]):o=r&&hd(r)?r:{},dd(l,{name:t,newValue:n(d,o,i)})):typeof i<"u"&&dd(l,{name:t,newValue:i}));return l};const na=Id(EC);function $a(n){if(typeof n!="object"||n===null)return!1;const e=Object.getPrototypeOf(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)}function IC(){const n=[],e={run:t,use:r};return e;function t(...i){let s=-1;const o=i.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);l(null,...i);function l(u,...c){const d=n[++s];let p=-1;if(u){o(u);return}for(;++p<i.length;)(c[p]===null||c[p]===void 0)&&(c[p]=i[p]);i=c,d?TC(d,l)(...c):o(null,...c)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return n.push(i),e}}function TC(n,e){let t;return r;function r(...o){const l=n.length>o.length;let u;l&&o.push(i);try{u=n.apply(this,o)}catch(c){const d=c;if(l&&t)throw d;return i(d)}l||(u&&u.then&&typeof u.then=="function"?u.then(s,i):u instanceof Error?i(u):s(u))}function i(o,...l){t||(t=!0,e(o,...l))}function s(o){i(null,o)}}const St={basename:vC,dirname:AC,extname:bC,join:SC,sep:"/"};function vC(n,e){if(e!==void 0&&typeof e!="string")throw new TypeError('"ext" argument must be a string');Bi(n);let t=0,r=-1,i=n.length,s;if(e===void 0||e.length===0||e.length>n.length){for(;i--;)if(n.codePointAt(i)===47){if(s){t=i+1;break}}else r<0&&(s=!0,r=i+1);return r<0?"":n.slice(t,r)}if(e===n)return"";let o=-1,l=e.length-1;for(;i--;)if(n.codePointAt(i)===47){if(s){t=i+1;break}}else o<0&&(s=!0,o=i+1),l>-1&&(n.codePointAt(i)===e.codePointAt(l--)?l<0&&(r=i):(l=-1,r=o));return t===r?r=o:r<0&&(r=n.length),n.slice(t,r)}function AC(n){if(Bi(n),n.length===0)return".";let e=-1,t=n.length,r;for(;--t;)if(n.codePointAt(t)===47){if(r){e=t;break}}else r||(r=!0);return e<0?n.codePointAt(0)===47?"/":".":e===1&&n.codePointAt(0)===47?"//":n.slice(0,e)}function bC(n){Bi(n);let e=n.length,t=-1,r=0,i=-1,s=0,o;for(;e--;){const l=n.codePointAt(e);if(l===47){if(o){r=e+1;break}continue}t<0&&(o=!0,t=e+1),l===46?i<0?i=e:s!==1&&(s=1):i>-1&&(s=-1)}return i<0||t<0||s===0||s===1&&i===t-1&&i===r+1?"":n.slice(i,t)}function SC(...n){let e=-1,t;for(;++e<n.length;)Bi(n[e]),n[e]&&(t=t===void 0?n[e]:t+"/"+n[e]);return t===void 0?".":CC(t)}function CC(n){Bi(n);const e=n.codePointAt(0)===47;let t=kC(n,!e);return t.length===0&&!e&&(t="."),t.length>0&&n.codePointAt(n.length-1)===47&&(t+="/"),e?"/"+t:t}function kC(n,e){let t="",r=0,i=-1,s=0,o=-1,l,u;for(;++o<=n.length;){if(o<n.length)l=n.codePointAt(o);else{if(l===47)break;l=47}if(l===47){if(!(i===o-1||s===1))if(i!==o-1&&s===2){if(t.length<2||r!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(u=t.lastIndexOf("/"),u!==t.length-1){u<0?(t="",r=0):(t=t.slice(0,u),r=t.length-1-t.lastIndexOf("/")),i=o,s=0;continue}}else if(t.length>0){t="",r=0,i=o,s=0;continue}}e&&(t=t.length>0?t+"/..":"..",r=2)}else t.length>0?t+="/"+n.slice(i+1,o):t=n.slice(i+1,o),r=o-i-1;i=o,s=0}else l===46&&s>-1?s++:s=-1}return t}function Bi(n){if(typeof n!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(n))}const RC={cwd:PC};function PC(){return"/"}function Ha(n){return!!(n!==null&&typeof n=="object"&&"href"in n&&n.href&&"protocol"in n&&n.protocol&&n.auth===void 0)}function xC(n){if(typeof n=="string")n=new URL(n);else if(!Ha(n)){const e=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+n+"`");throw e.code="ERR_INVALID_ARG_TYPE",e}if(n.protocol!=="file:"){const e=new TypeError("The URL must be of scheme file");throw e.code="ERR_INVALID_URL_SCHEME",e}return NC(n)}function NC(n){if(n.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const e=n.pathname;let t=-1;for(;++t<e.length;)if(e.codePointAt(t)===37&&e.codePointAt(t+1)===50){const r=e.codePointAt(t+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(e)}const ra=["history","path","basename","stem","extname","dirname"];class bm{constructor(e){let t;e?Ha(e)?t={path:e}:typeof e=="string"||DC(e)?t={value:e}:t=e:t={},this.cwd="cwd"in t?"":RC.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<ra.length;){const s=ra[r];s in t&&t[s]!==void 0&&t[s]!==null&&(this[s]=s==="history"?[...t[s]]:t[s])}let i;for(i in t)ra.includes(i)||(this[i]=t[i])}get basename(){return typeof this.path=="string"?St.basename(this.path):void 0}set basename(e){sa(e,"basename"),ia(e,"basename"),this.path=St.join(this.dirname||"",e)}get dirname(){return typeof this.path=="string"?St.dirname(this.path):void 0}set dirname(e){pd(this.basename,"dirname"),this.path=St.join(e||"",this.basename)}get extname(){return typeof this.path=="string"?St.extname(this.path):void 0}set extname(e){if(ia(e,"extname"),pd(this.dirname,"extname"),e){if(e.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(e.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=St.join(this.dirname,this.stem+(e||""))}get path(){return this.history[this.history.length-1]}set path(e){Ha(e)&&(e=xC(e)),sa(e,"path"),this.path!==e&&this.history.push(e)}get stem(){return typeof this.path=="string"?St.basename(this.path,this.extname):void 0}set stem(e){sa(e,"stem"),ia(e,"stem"),this.path=St.join(this.dirname||"",e+(this.extname||""))}fail(e,t,r){const i=this.message(e,t,r);throw i.fatal=!0,i}info(e,t,r){const i=this.message(e,t,r);return i.fatal=void 0,i}message(e,t,r){const i=new Qe(e,t,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(e){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(e||void 0).decode(this.value)}}function ia(n,e){if(n&&n.includes(St.sep))throw new Error("`"+e+"` cannot be a path: did not expect `"+St.sep+"`")}function sa(n,e){if(!n)throw new Error("`"+e+"` cannot be empty")}function pd(n,e){if(!n)throw new Error("Setting `"+e+"` requires `path` to be set too")}function DC(n){return!!(n&&typeof n=="object"&&"byteLength"in n&&"byteOffset"in n)}const VC=function(n){const r=this.constructor.prototype,i=r[n],s=function(){return i.apply(s,arguments)};return Object.setPrototypeOf(s,r),s},OC={}.hasOwnProperty;class lu extends VC{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=IC()}copy(){const e=new lu;let t=-1;for(;++t<this.attachers.length;){const r=this.attachers[t];e.use(...r)}return e.data(na(!0,{},this.namespace)),e}data(e,t){return typeof e=="string"?arguments.length===2?(la("data",this.frozen),this.namespace[e]=t,this):OC.call(this.namespace,e)&&this.namespace[e]||void 0:e?(la("data",this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;const e=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=t.call(e,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(e){this.freeze();const t=ms(e),r=this.parser||this.Parser;return oa("parse",r),r(String(t),t)}process(e,t){const r=this;return this.freeze(),oa("process",this.parser||this.Parser),aa("process",this.compiler||this.Compiler),t?i(void 0,t):new Promise(i);function i(s,o){const l=ms(e),u=r.parse(l);r.run(u,l,function(d,p,m){if(d||!p||!m)return c(d);const g=p,C=r.stringify(g,m);FC(C)?m.value=C:m.result=C,c(d,m)});function c(d,p){d||!p?o(d):s?s(p):t(void 0,p)}}}processSync(e){let t=!1,r;return this.freeze(),oa("processSync",this.parser||this.Parser),aa("processSync",this.compiler||this.Compiler),this.process(e,i),gd("processSync","process",t),r;function i(s,o){t=!0,ad(s),r=o}}run(e,t,r){md(e),this.freeze();const i=this.transformers;return!r&&typeof t=="function"&&(r=t,t=void 0),r?s(void 0,r):new Promise(s);function s(o,l){const u=ms(t);i.run(e,u,c);function c(d,p,m){const g=p||e;d?l(d):o?o(g):r(void 0,g,m)}}}runSync(e,t){let r=!1,i;return this.run(e,t,s),gd("runSync","run",r),i;function s(o,l){ad(o),i=l,r=!0}}stringify(e,t){this.freeze();const r=ms(t),i=this.compiler||this.Compiler;return aa("stringify",i),md(e),i(e,r)}use(e,...t){const r=this.attachers,i=this.namespace;if(la("use",this.frozen),e!=null)if(typeof e=="function")u(e,t);else if(typeof e=="object")Array.isArray(e)?l(e):o(e);else throw new TypeError("Expected usable value, not `"+e+"`");return this;function s(c){if(typeof c=="function")u(c,[]);else if(typeof c=="object")if(Array.isArray(c)){const[d,...p]=c;u(d,p)}else o(c);else throw new TypeError("Expected usable value, not `"+c+"`")}function o(c){if(!("plugins"in c)&&!("settings"in c))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(c.plugins),c.settings&&(i.settings=na(!0,i.settings,c.settings))}function l(c){let d=-1;if(c!=null)if(Array.isArray(c))for(;++d<c.length;){const p=c[d];s(p)}else throw new TypeError("Expected a list of plugins, not `"+c+"`")}function u(c,d){let p=-1,m=-1;for(;++p<r.length;)if(r[p][0]===c){m=p;break}if(m===-1)r.push([c,...d]);else if(d.length>0){let[g,...C]=d;const k=r[m][1];$a(k)&&$a(g)&&(g=na(!0,k,g)),r[m]=[c,g,...C]}}}}const MC=new lu().freeze();function oa(n,e){if(typeof e!="function")throw new TypeError("Cannot `"+n+"` without `parser`")}function aa(n,e){if(typeof e!="function")throw new TypeError("Cannot `"+n+"` without `compiler`")}function la(n,e){if(e)throw new Error("Cannot call `"+n+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function md(n){if(!$a(n)||typeof n.type!="string")throw new TypeError("Expected node, got `"+n+"`")}function gd(n,e,t){if(!t)throw new Error("`"+n+"` finished async. Use `"+e+"` instead")}function ms(n){return LC(n)?n:new bm(n)}function LC(n){return!!(n&&typeof n=="object"&&"message"in n&&"messages"in n)}function FC(n){return typeof n=="string"||UC(n)}function UC(n){return!!(n&&typeof n=="object"&&"byteLength"in n&&"byteOffset"in n)}const jC="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",yd=[],_d={allowDangerousHtml:!0},BC=/^(https?|ircs?|mailto|xmpp)$/i,zC=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function qC(n){const e=$C(n),t=HC(n);return GC(e.runSync(e.parse(t),t),n)}function $C(n){const e=n.rehypePlugins||yd,t=n.remarkPlugins||yd,r=n.remarkRehypeOptions?{...n.remarkRehypeOptions,..._d}:_d;return MC().use(AS).use(t).use(wC,r).use(e)}function HC(n){const e=n.children||"",t=new bm;return typeof e=="string"&&(t.value=e),t}function GC(n,e){const t=e.allowedElements,r=e.allowElement,i=e.components,s=e.disallowedElements,o=e.skipHtml,l=e.unwrapDisallowed,u=e.urlTransform||WC;for(const d of zC)Object.hasOwn(e,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+jC+d.id,void 0);return vm(n,c),sA(n,{Fragment:O.Fragment,components:i,ignoreInvalidStyle:!0,jsx:O.jsx,jsxs:O.jsxs,passKeys:!0,passNode:!0});function c(d,p,m){if(d.type==="raw"&&m&&typeof p=="number")return o?m.children.splice(p,1):m.children[p]={type:"text",value:d.value},p;if(d.type==="element"){let g;for(g in Zo)if(Object.hasOwn(Zo,g)&&Object.hasOwn(d.properties,g)){const C=d.properties[g],k=Zo[g];(k===null||k.includes(d.tagName))&&(d.properties[g]=u(String(C||""),g,d))}}if(d.type==="element"){let g=t?!t.includes(d.tagName):s?s.includes(d.tagName):!1;if(!g&&r&&typeof p=="number"&&(g=!r(d,p,m)),g&&m&&typeof p=="number")return l&&d.children?m.children.splice(p,1,...d.children):m.children.splice(p,1),p}}}function WC(n){const e=n.indexOf(":"),t=n.indexOf("?"),r=n.indexOf("#"),i=n.indexOf("/");return e===-1||i!==-1&&e>i||t!==-1&&e>t||r!==-1&&e>r||BC.test(n.slice(0,e))?n:""}const KC="ashu.61003@gmail.com";function or(n){var e;return!!(n!=null&&n.emailVerified)&&((e=n.email)==null?void 0:e.toLowerCase())===KC}[{id:"scope",type:"projects",title:"SCOPE",summary:"A solar output estimator built with SwiftUI, Core ML, location, and weather data.",body:`Developed a Solar Capacity Output Potential Estimator for predicting solar generation from user location, roof area, and weather inputs.

The iOS experience brings together maps, onboarding, weather context, and Core ML regression.`,category:"Software",projectStatus:"Completed",period:"Aug 2025",tags:["AI","iOS"],links:[{label:"GitHub",url:"https://github.com/AshutoshSri123/SCOPE"}]},{id:"ecommerce-analytics",type:"projects",title:"E-commerce Analytics",summary:"A Python and SQL pipeline for revenue analysis, segmentation, and visualization.",body:"Created an analytics system covering CSV ingestion, relational modeling, SQL querying, customer segmentation, and notebook reporting.",category:"Software",projectStatus:"Completed",period:"Sep 2025",tags:["Analytics"],links:[{label:"GitHub",url:"https://github.com/AshutoshSri123/SQL_Python_EcommerceProject"}]},{id:"rainbow-coloring",type:"projects",title:"Rainbow Coloring",summary:"Fuzzy logic and rainbow coloring algorithms across graph families.",body:"Co-led a graph algorithm project combining fuzzy logic with rainbow coloring. The work includes alpha-cut graph construction, BFS and DFS checks, spanning-tree coloring, and greedy optimization.",category:"Research",projectStatus:"Completed",period:"Nov 2025",tags:["Algorithms"],links:[{label:"Project report",url:"/files/fuzzy-rainbow-coloring.pdf"}]},{id:"parkinsons-detection",type:"projects",title:"Parkinsons Detection",summary:"A leakage-aware, explainable voice-based machine learning framework.",body:"Built a voice-based biomedical ML framework with GroupKFold validation, feature selection, ensemble classification workflows, and SHAP explanations.",category:"Research",projectStatus:"Completed",period:"Apr 2026",tags:["AI","Research"],links:[{label:"Project report",url:"/files/parkinsons-disease-report.pdf"}]}].map(n=>({...n,published:!0,featured:!1,relatedIds:[],category:"",projectStatus:"Exploring",period:"",...n,format:"Note",attribution:"",reasoning:"",date:"",image:"",collaborators:"",revision:0}));function QC(n){const e=(n==null?void 0:n.code)||"";return e.includes("permission-denied")?"This data is unavailable for this account. Please sign in again or try later.":e.includes("unauthorized-domain")?"Google sign-in is not enabled for this domain yet.":e.includes("operation-not-allowed")?"Google sign-in needs to be enabled in Firebase Authentication.":e.includes("popup-blocked")?"Allow the sign-in popup and try again.":e.includes("popup-closed")?"Sign-in was cancelled. You can try again.":e.includes("invalid-credential")?"The owner email or password was not accepted.":e.includes("failed-precondition")?"The database indexes are still being configured. Please try again shortly.":(n==null?void 0:n.message)||"Could not connect. Please try again."}Qs(tt,"personalContent");Ht(tt,"personalSettings","site");const wd=n=>({id:n.id,...n.data()});async function YC(n,e,t=n.uid,r="message"){if(!e.trim()||e.length>4e3)throw new Error("Write a message of 1–4,000 characters.");const i=Ht(tt,"personalConversations",t),s=Ht(Qs(i,"messages"));await Gl(tt,async o=>{var c;const l=await o.get(i),u=l.data();if(u!=null&&u.blocked&&!or(n))throw new Error("This conversation is closed.");if(!or(n)&&((c=u==null?void 0:u.lastMessageAt)==null?void 0:c.toMillis())>Date.now()-5e3)throw new Error("Please wait a few seconds before sending another message.");if(!l.exists()&&or(n))throw new Error("Choose an existing conversation.");o.set(s,{text:e.trim(),senderId:n.uid,createdAt:sn(),kind:r}),o.set(i,{...u||{ownerId:n.uid,ownerName:(or(n)?"Ashutosh":n.displayName||"Reader").slice(0,100),ownerPhoto:n.photoURL||"",createdAt:sn(),blocked:!1,adminReadAt:null,userReadAt:null},lastMessage:e.trim(),lastMessageAt:sn(),lastMessageId:s.id,lastSenderId:n.uid,archived:!1,...or(n)?{adminReadAt:sn()}:{userReadAt:sn()}})})}X.createContext(null);function XC(n,e){const[t,r]=X.useState({items:[],loading:!0,error:"",key:e});return X.useEffect(()=>{if(r({items:[],loading:!!n,error:"",key:e}),!!n)return bi(n,i=>r({documents:i.docs,items:i.docs?i.docs.map(wd):i.exists()?[wd(i)]:[],loading:!1,error:"",key:e}),i=>r({items:[],loading:!1,error:QC(i),key:e}))},[e]),t.key===e?t:{items:[],loading:!!n,error:""}}function JC(n,e,t=20){const[r,i]=X.useState({key:e,cursors:[]}),s=r.key===e?r.cursors:[],o=s.at(-1),l=XC(n?Da(n,...o?[WT(o)]:[],Up(t+1)):null,`${e}:page:${s.map(u=>u.id).join(":")}`);return{...l,items:l.items.slice(0,t),page:s.length+1,hasNext:l.items.length>t,next:()=>{l.items.length>t&&i({key:e,cursors:[...s,l.documents[t-1]]})},previous:()=>i({key:e,cursors:s.slice(0,-1)}),reset:()=>i({key:e,cursors:[]})}}function ZC(){var G;const{user:n,loading:e,admin:t}=So(),[r,i]=X.useState(""),[s,o]=X.useState([]),[l,u]=X.useState(null),[c,d]=X.useState(""),[p,m]=X.useState(""),[g,C]=X.useState(!1),k=t?r:n==null?void 0:n.uid,N=X.useRef(null),x=JC(n&&k?Da(Qs(tt,"personalConversations",k,"messages"),Sh("createdAt","desc")):null,`contact-${n==null?void 0:n.uid}-${k}`,30);X.useEffect(()=>{if(t)return bi(Da(Qs(tt,"personalConversations"),Sh("lastMessageAt","desc"),Up(100)),$=>o($.docs.map(D=>({id:D.id,...D.data()}))),()=>m("Couldn’t load your inbox. Please try again."))},[t]),X.useEffect(()=>{if(d(""),m(""),u(null),!(!n||!k))return bi(Ht(tt,"personalConversations",k),$=>{var _,I;const D=$.exists()?$.data():null;u(D);const A=t?"adminReadAt":"userReadAt";((_=D==null?void 0:D.lastMessageAt)==null?void 0:_.toMillis())>(((I=D[A])==null?void 0:I.toMillis())||0)&&JT(Ht(tt,"personalConversations",k),{[A]:sn()}).catch(()=>{})},()=>m("Couldn’t load this conversation. Please try again."))},[n,k,t]);const z=(G=x.items[0])==null?void 0:G.id;X.useEffect(()=>{x.page===1&&N.current&&(N.current.scrollTop=N.current.scrollHeight)},[z,x.page]);async function F($){if($.preventDefault(),!g){C(!0),m("");try{await YC(n,c,k),d(""),x.reset()}catch(D){m(D.code?"Couldn’t send. Your message is still here; please try again.":D.message)}finally{C(!1)}}}return e?O.jsx("p",{role:"status",children:"Checking your session…"}):n?O.jsxs("section",{className:"dm-page",children:[O.jsxs("header",{children:[O.jsx("p",{className:"account-eyebrow",children:"Private messages"}),O.jsx("h1",{children:t?"Your inbox.":"Say hello."}),O.jsx("p",{className:"account-muted",children:t?"Choose a conversation to reply.":"Only you and Ashutosh can read this conversation."})]}),O.jsxs("div",{className:`dm-layout ${t?"dm-admin":""}`,children:[t&&O.jsxs("aside",{className:"dm-inbox","aria-label":"Conversations",children:[!s.length&&O.jsx("p",{className:"account-muted",children:"No messages yet."}),s.map($=>{var D,A;return O.jsxs("button",{className:r===$.id?"is-selected":"",onClick:()=>i($.id),children:[O.jsx("strong",{children:$.ownerName}),O.jsx("span",{children:$.lastMessage}),$.lastSenderId!==n.uid&&((D=$.lastMessageAt)==null?void 0:D.toMillis())>(((A=$.adminReadAt)==null?void 0:A.toMillis())||0)&&O.jsx("small",{children:"Unread"})]},$.id)})]}),k?O.jsxs("div",{className:"dm-thread",children:[O.jsx("h2",{children:t?(l==null?void 0:l.ownerName)||"Conversation":"Ashutosh"}),O.jsxs("div",{className:"dm-history",ref:N,"aria-label":"Message history",role:"log","aria-live":"polite",children:[O.jsxs("div",{className:"dm-pagination",children:[x.hasNext&&O.jsx("button",{className:"account-text-button",onClick:x.next,children:"Earlier messages"}),x.page>1&&O.jsx("button",{className:"account-text-button",onClick:x.previous,children:"Newer messages"})]}),x.loading?O.jsx("p",{role:"status",children:"Loading messages…"}):x.items.length?x.items.slice().reverse().map($=>{var D,A,_,I;return O.jsxs("article",{className:$.senderId===n.uid?"dm-own":"dm-other",children:[O.jsx("span",{children:$.senderId===n.uid?"You":t?l==null?void 0:l.ownerName:"Ashutosh"}),O.jsx("p",{children:$.text}),O.jsx("time",{dateTime:(A=(D=$.createdAt)==null?void 0:D.toDate)==null?void 0:A.call(D).toISOString(),children:((I=(_=$.createdAt)==null?void 0:_.toDate)==null?void 0:I.call(_).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}))||"Sending…"})]},$.id)}):O.jsx("p",{className:"dm-empty",children:"A hello, a question, an idea. Start anywhere."})]}),O.jsx(zn,{children:x.error}),l!=null&&l.blocked&&!t?O.jsx("p",{className:"account-muted",children:"This conversation is closed."}):O.jsxs("form",{className:"dm-composer",onSubmit:F,children:[O.jsx("label",{className:"dm-input-label",htmlFor:"dm-message",children:"Your message"}),O.jsx("textarea",{id:"dm-message",rows:2,maxLength:4e3,placeholder:"Write a message…",required:!0,value:c,onChange:$=>d($.target.value)}),O.jsx("button",{className:"account-button",disabled:g||!c.trim(),children:g?"Sending…":"Send"})]})]}):O.jsx("div",{className:"dm-empty",children:"Your conversations will appear here."})]}),O.jsx(zn,{children:p})]}):O.jsx("section",{className:"account-login",children:O.jsxs("div",{children:[O.jsx("p",{className:"account-eyebrow",children:"Contact"}),O.jsx("h1",{children:"A conversation, just us."}),O.jsx("p",{className:"account-muted",children:"Sign in with Google to message me privately."}),O.jsx(Cm,{})]})})}function ek({onContent:n}){const{admin:e}=So(),[t,r]=X.useState(null),[i,s]=X.useState(!1),[o,l]=X.useState(!1),[u,c]=X.useState(new URLSearchParams(location.search).has("edit")),[d,p]=X.useState(Ju),[m,g]=X.useState(Zu),[C,k]=X.useState(!1),[N,x]=X.useState(""),[z,F]=X.useState(""),G=X.useRef(!1),$=X.useRef(0);X.useEffect(()=>bi(Ht(tt,"sitePages","timeline"),I=>{const T=I.exists()?I.data():null;try{const w=T?JSON.parse(T.body):Zu;if(!Array.isArray(w)||!w.length||w.length>60||w.some(E=>!E||typeof E.year!="string"||typeof E.title!="string"||typeof E.detail!="string"))throw new Error;const b={title:(T==null?void 0:T.title)||Ju,events:w,revision:(T==null?void 0:T.revision)||0};r(b),n(b)}catch{x("Couldn’t read the saved timeline. The original story is still available.")}s(!0)},()=>{s(!0),x("Couldn’t connect. Please reload before editing.")}),[n]),X.useEffect(()=>{t&&!G.current&&(G.current=!0,p(t.title),g(t.events),$.current=t.revision,l(!0))},[t]);function D(){!u&&t&&(p(t.title),g(t.events),$.current=t.revision),c(!u),x(""),F("")}function A(I,T,w){g(b=>b.map((E,ae)=>ae===I?{...E,[T]:w}:E))}async function _(I){I.preventDefault(),k(!0),x("");try{const T=JSON.stringify(m);if(T.length>3e4)throw new Error("The timeline is too long. Shorten a few entries before publishing.");await Gl(tt,async w=>{var ae;const b=Ht(tt,"sitePages","timeline");if((((ae=(await w.get(b)).data())==null?void 0:ae.revision)||0)!==$.current)throw new Error("This timeline changed elsewhere. Cancel and reopen the editor to load the latest version.");w.set(b,{title:d.trim(),body:T,revision:$.current+1,updatedAt:sn()})}),c(!1),F("Timeline published.")}catch(T){x(T.code?"Couldn’t publish. Your draft is still here; please retry.":T.message)}finally{k(!1)}}return e?u&&!o?O.jsxs("section",{className:"account-page account-home-editor",children:[O.jsx("p",{role:"status",children:"Loading timeline editor…"}),O.jsx(zn,{children:N})]}):O.jsxs("section",{className:`account-page account-home-editor timeline-editor ${u?"is-editing":""}`,children:[O.jsxs("div",{className:"account-editor-bar",children:[O.jsx("span",{className:"account-muted",children:"Timeline · Admin"}),O.jsx("button",{className:"account-text-button",onClick:D,children:u?"Cancel editing":"Edit timeline"})]}),u&&O.jsxs("form",{className:"account-editor",onSubmit:_,children:[O.jsxs("label",{children:["Timeline heading",O.jsx("input",{required:!0,maxLength:180,value:d,onChange:I=>p(I.target.value)})]}),m.map((I,T)=>O.jsxs("fieldset",{children:[O.jsxs("legend",{children:["Chapter ",T+1]}),O.jsxs("label",{children:["Year or period",O.jsx("input",{required:!0,maxLength:40,value:I.year,onChange:w=>A(T,"year",w.target.value)})]}),O.jsxs("label",{children:["Milestone",O.jsx("input",{required:!0,maxLength:180,value:I.title,onChange:w=>A(T,"title",w.target.value)})]}),O.jsxs("label",{children:["Details",O.jsx("textarea",{required:!0,rows:2,maxLength:600,value:I.detail,onChange:w=>A(T,"detail",w.target.value)})]}),O.jsx("button",{type:"button",className:"account-text-button",disabled:m.length===1,onClick:()=>g(w=>w.filter((b,E)=>E!==T)),children:"Remove chapter"})]},T)),O.jsx("button",{type:"button",className:"account-text-button",disabled:m.length>=60,onClick:()=>g(I=>[...I,{year:"",title:"",detail:""}]),children:"Add chapter"}),O.jsx("button",{className:"account-button",disabled:C||!i||!t||!d.trim(),children:C?"Publishing…":"Publish timeline"})]}),O.jsx(zn,{children:N}),O.jsx("p",{role:"status",children:z})]}):null}const Sm=X.createContext(null),So=()=>X.useContext(Sm);function zn({children:n}){return n?O.jsx("p",{className:"account-error",role:"alert",children:n}):null}function Cm(){const[n,e]=X.useState(!1),[t,r]=X.useState("");async function i(){e(!0),r("");try{await av()}catch(s){s.code!=="auth/popup-closed-by-user"&&r(s.code==="auth/popup-blocked"?"Allow the sign-in popup and try again.":"Google sign-in couldn’t finish. Please try again.")}finally{e(!1)}}return O.jsxs(O.Fragment,{children:[O.jsxs("button",{className:"account-button",onClick:i,disabled:n,children:[O.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":"true",children:O.jsx("path",{fill:"currentColor",d:"M21.6 12.2c0-.7-.1-1.4-.2-2.1H12v4h5.4c-.2 1.2-.9 2.2-1.9 2.9v2.5h3.2c1.9-1.7 2.9-4.2 2.9-7.3ZM12 22c2.7 0 5-.9 6.7-2.5l-3.2-2.5c-.9.6-2.1 1-3.5 1-2.6 0-4.9-1.8-5.7-4.2H3v2.6C4.7 19.8 8.1 22 12 22ZM6.3 13.8A6 6 0 0 1 6 12c0-.6.1-1.2.3-1.8V7.6H3A10 10 0 0 0 2 12c0 1.6.4 3.1 1 4.4l3.3-2.6ZM12 6c1.5 0 2.8.5 3.8 1.5l2.8-2.8A9.6 9.6 0 0 0 12 2C8.1 2 4.7 4.2 3 7.6l3.3 2.6C7.1 7.8 9.4 6 12 6Z"})}),n?"Signing in…":"Continue with Google"]}),O.jsx(zn,{children:t})]})}function tk(){return O.jsxs("section",{className:"account-prose",children:[O.jsx("p",{className:"account-eyebrow",children:"Privacy"}),O.jsx("h1",{children:"Your account and messages."}),O.jsx("p",{children:"Google sign-in provides this website with your email address, display name, and profile photo. Your verified email determines whether you have administrator or view access."}),O.jsx("p",{children:"Private messages are stored in Google Firebase and can be read by the sender and Ashutosh Srivastava. The administrator can publish personal page content for everyone to read."}),O.jsx("p",{children:"Your sign-in session is kept in your browser until you log out. Google and Firebase process authentication and stored data under their own privacy policies."}),O.jsxs("p",{children:["For questions or a request to delete your account data or messages, email ",O.jsx("a",{href:"mailto:ashu.61003@gmail.com",children:"ashu.61003@gmail.com"}),"."]}),O.jsx(Rs,{to:"/login",children:"Back to Login"})]})}function nk(){const{user:n,loading:e,admin:t}=So(),[r,i]=X.useState("");return e?O.jsx("p",{role:"status",children:"Checking your session…"}):O.jsxs("section",{className:"account-login",children:[O.jsxs("div",{children:[O.jsx("p",{className:"account-eyebrow",children:"Your account"}),O.jsx("h1",{children:n?"You’re signed in.":"Welcome."}),n?O.jsxs(O.Fragment,{children:[O.jsx("p",{className:"account-email",children:n.email}),O.jsx("p",{className:"account-muted",children:t?"Administrator · You can edit the personal pages.":"View access · You can read pages and message Ashutosh privately."}),t&&O.jsx("nav",{className:"account-edit-links","aria-label":"Edit pages",children:["Home","Work","Projects","Identity","Thoughts","Blogs","Timeline","Dreams"].map(s=>O.jsxs(Rs,{to:s==="Home"?"/?edit=1":`/${s.toLowerCase()}?edit=1`,children:["Edit ",s]},s))})]}):O.jsxs(O.Fragment,{children:[O.jsx("p",{className:"account-muted",children:"Sign in to send a private message."}),O.jsx(Cm,{}),O.jsx("p",{className:"account-muted",children:O.jsx(Rs,{to:"/privacy",children:"Privacy"})})]})]}),n&&O.jsx("button",{className:"account-button account-logout",onClick:async()=>{try{await lv()}catch{i("Couldn’t log out. Please try again.")}},children:"Log out"}),O.jsx(zn,{children:r})]})}const ar={home:"Home",work:"Work",projects:"Projects",identity:"Identity",thoughts:"Thoughts",blogs:"Blogs",photography:"Photography",dreams:"Dreams"};function rk({id:n,onHomeContent:e}){const{admin:t}=So(),r=X.useRef(!1),i=X.useRef(0),[s,o]=X.useState(null),[l,u]=X.useState(!1),[c,d]=X.useState(new URLSearchParams(location.search).has("edit")),[p,m]=X.useState({title:ar[n],body:""}),[g,C]=X.useState(""),[k,N]=X.useState(!1),[x,z]=X.useState("");X.useEffect(()=>bi(Ht(tt,"sitePages",n),G=>{const $=G.exists()?G.data():null;o($),u(!0),n==="home"&&e(($==null?void 0:$.body)||null)},()=>{u(!0),C("Couldn’t load this page. Please try again.")}),[n,e]),X.useEffect(()=>{c||m({title:(s==null?void 0:s.title)||ar[n],body:(s==null?void 0:s.body)||""})},[s,c,n]),X.useEffect(()=>{l&&!r.current&&(r.current=!0,c&&(i.current=(s==null?void 0:s.revision)||0,m({title:(s==null?void 0:s.title)||ar[n],body:(s==null?void 0:s.body)||""})))},[l,c,s,n]);async function F(G){G.preventDefault(),N(!0),C(""),z("");try{await Gl(tt,async $=>{var _;const D=Ht(tt,"sitePages",n);if((((_=(await $.get(D)).data())==null?void 0:_.revision)||0)!==i.current)throw new Error("This page changed elsewhere. Cancel and reopen the editor to load the latest version.");$.set(D,{title:p.title.trim(),body:p.body.trim(),revision:i.current+1,updatedAt:sn()})}),d(!1),z("Page published.")}catch($){C($.code?"Couldn’t publish. Your draft is still here; please try again.":$.message)}finally{N(!1)}}return c&&t&&!l?O.jsx("section",{className:"account-page",children:O.jsx("p",{role:"status",children:"Loading editor…"})}):n==="home"&&!t||!t&&!(s!=null&&s.body)?null:O.jsxs("section",{className:`account-page ${n==="home"?"account-home-editor":""}`,children:[t&&O.jsxs("div",{className:"account-editor-bar",children:[O.jsxs("span",{className:"account-muted",children:[ar[n]," · Admin"]}),O.jsx("button",{className:"account-text-button",onClick:()=>{i.current=(s==null?void 0:s.revision)||0,m({title:(s==null?void 0:s.title)||ar[n],body:(s==null?void 0:s.body)||""}),d(!c),C("")},children:c?"Cancel editing":"Edit page"})]}),c&&t?O.jsxs("form",{className:"account-editor",onSubmit:F,children:[O.jsxs("label",{children:["Page title",O.jsx("input",{required:!0,maxLength:180,value:p.title,onChange:G=>m({...p,title:G.target.value})})]}),O.jsxs("label",{children:[n==="home"?"Homepage introduction":"Page content (Markdown)",O.jsx("textarea",{rows:8,maxLength:3e4,value:p.body,onChange:G=>m({...p,body:G.target.value})})]}),O.jsx("button",{className:"account-button",disabled:k||!l||!p.title.trim(),children:k?"Publishing…":"Publish page"})]}):n!=="home"&&(s!=null&&s.body)?O.jsxs(O.Fragment,{children:[O.jsx("h1",{children:s.title}),O.jsx("div",{className:"account-prose",children:O.jsx(qC,{children:s.body})})]}):null,t&&O.jsxs(O.Fragment,{children:[O.jsx(zn,{children:g}),O.jsx("p",{role:"status",children:x})]})]})}function ok({pathname:n,onHomeContent:e,onTimelineContent:t}){const[r,i]=X.useState(null),[s,o]=X.useState(!0);X.useEffect(()=>I_(Wl,u=>{i(u),o(!1)},()=>o(!1)),[]);const l=n==="/"?"home":n.slice(1);return O.jsxs(Sm.Provider,{value:{user:r,loading:s,admin:or(r)},children:[O.jsx(Rs,{className:"account-shortcut",to:"/login","aria-label":"Your account",children:r?"Account":"Login"}),l==="timeline"?O.jsx(ek,{onContent:t}):l==="privacy"?O.jsx("div",{className:"account-panel",children:O.jsx(tk,{})}):l==="login"?O.jsx("div",{className:"account-panel",children:O.jsx(nk,{})}):l==="contact"?O.jsx("div",{className:"account-panel account-contact",children:O.jsx(ZC,{})}):ar[l]?O.jsx(rk,{id:l,onHomeContent:e},l):null]})}export{zn as Alert,Cm as SignInButton,ok as default,So as useAccount};
