import{e as Cs,g as _d,j as L,r as ae,L as ks}from"./index-BaPtcjv2.js";const Qm=()=>{};var Xu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ym=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],l=n[t++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ed={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,l=o?n[i+1]:0,u=i+2<n.length,c=u?n[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,g=c&63;u||(g=64,o||(m=64)),r.push(t[d],t[p],t[m],t[g])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(wd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ym(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const p=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new Xm;const m=s<<2|l>>4;if(r.push(m),c!==64){const g=l<<4&240|c>>2;if(r.push(g),p!==64){const C=c<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Xm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jm=function(n){const e=wd(n);return Ed.encodeByteArray(e,!0)},Rs=function(n){return Jm(n).replace(/\./g,"")},Id=function(n){try{return Ed.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Zm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const eg=()=>Zm().__FIREBASE_DEFAULTS__,tg=()=>{if(typeof process>"u"||typeof Xu>"u")return;const n=Xu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ng=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Id(n[1]);return e&&JSON.parse(e)},eo=()=>{try{return Qm()||eg()||tg()||ng()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Td=n=>{var e,t;return(t=(e=eo())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},rg=n=>{const e=Td(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},vd=()=>{var n;return(n=eo())==null?void 0:n.config},Ad=n=>{var e;return(e=eo())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Ar(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function bd(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function sg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Rs(JSON.stringify(t)),Rs(JSON.stringify(o)),""].join(".")}const ri={};function og(){const n={prod:[],emulator:[]};for(const e of Object.keys(ri))ri[e]?n.emulator.push(e):n.prod.push(e);return n}function ag(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Ju=!1;function Sd(n,e){if(typeof window>"u"||typeof document>"u"||!Ar(window.location.host)||ri[n]===e||ri[n]||Ju)return;ri[n]=e;function t(m){return`__firebase__banner__${m}`}const r="__firebase__banner",s=og().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,g){m.setAttribute("width","24"),m.setAttribute("id",g),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function c(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Ju=!0,o()},m}function d(m,g){m.setAttribute("id",g),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=ag(r),g=t("text"),C=document.getElementById(g)||document.createElement("span"),k=t("learnmore"),x=document.getElementById(k)||document.createElement("a"),N=t("preprendIcon"),q=document.getElementById(N)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const F=m.element;l(F),d(x,k);const G=c();u(q,N),F.append(q,C,x,G),document.body.appendChild(F)}s?(C.innerText="Preview backend disconnected.",q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(q.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
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
 */function Ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ke())}function ug(){var e;const n=(e=eo())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function hg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function dg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fg(){const n=Ke();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function pg(){return!ug()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function mg(){try{return typeof indexedDB=="object"}catch{return!1}}function gg(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg="FirebaseError";class Ht extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=yg,Object.setPrototypeOf(this,Ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Si.prototype.create)}}class Si{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?_g(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Ht(i,l,r)}}function _g(n,e){return n.replace(wg,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const wg=/\{\$([^}]+)}/g;function Eg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Mn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Zu(s)&&Zu(o)){if(!Mn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Zu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ig(n,e){const t=new Tg(n,e);return t.subscribe.bind(t)}class Tg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");vg(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Bo),i.error===void 0&&(i.error=Bo),i.complete===void 0&&(i.complete=Bo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Bo(){}/**
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
 */function Ae(n){return n&&n._delegate?n._delegate:n}class Ln{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new ig;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Sg(e))try{this.getOrInitializeService({instanceIdentifier:kn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=kn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kn){return this.instances.has(e)}getOptions(e=kn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=kn){return this.component?this.component.multipleInstances?e:kn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bg(n){return n===kn?void 0:n}function Sg(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ag(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(re||(re={}));const kg={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},Rg=re.INFO,Pg={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},xg=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Pg[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ha{constructor(e){this.name=e,this._logLevel=Rg,this._logHandler=xg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const Ng=(n,e)=>e.some(t=>n instanceof t);let ec,tc;function Dg(){return ec||(ec=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vg(){return tc||(tc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cd=new WeakMap,la=new WeakMap,kd=new WeakMap,jo=new WeakMap,Ga=new WeakMap;function Og(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(sn(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Cd.set(t,n)}).catch(()=>{}),Ga.set(e,n),e}function Mg(n){if(la.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});la.set(n,e)}let ua={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return la.get(n);if(e==="objectStoreNames")return n.objectStoreNames||kd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return sn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Lg(n){ua=n(ua)}function Fg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(zo(this),e,...t);return kd.set(r,e.sort?e.sort():[e]),sn(r)}:Vg().includes(n)?function(...e){return n.apply(zo(this),e),sn(Cd.get(this))}:function(...e){return sn(n.apply(zo(this),e))}}function Ug(n){return typeof n=="function"?Fg(n):(n instanceof IDBTransaction&&Mg(n),Ng(n,Dg())?new Proxy(n,ua):n)}function sn(n){if(n instanceof IDBRequest)return Og(n);if(jo.has(n))return jo.get(n);const e=Ug(n);return e!==n&&(jo.set(n,e),Ga.set(e,n)),e}const zo=n=>Ga.get(n);function Bg(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),l=sn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(sn(o.result),u.oldVersion,u.newVersion,sn(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const jg=["get","getKey","getAll","getAllKeys","count"],zg=["put","add","delete","clear"],qo=new Map;function nc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(qo.get(e))return qo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=zg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||jg.includes(t)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[t](...l),i&&u.done]))[0]};return qo.set(e,s),s}Lg(n=>({...n,get:(e,t,r)=>nc(e,t)||n.get(e,t,r),has:(e,t)=>!!nc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if($g(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function $g(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ca="@firebase/app",rc="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=new Ha("@firebase/app"),Hg="@firebase/app-compat",Gg="@firebase/analytics-compat",Wg="@firebase/analytics",Kg="@firebase/app-check-compat",Qg="@firebase/app-check",Yg="@firebase/auth",Xg="@firebase/auth-compat",Jg="@firebase/database",Zg="@firebase/data-connect",ey="@firebase/database-compat",ty="@firebase/functions",ny="@firebase/functions-compat",ry="@firebase/installations",iy="@firebase/installations-compat",sy="@firebase/messaging",oy="@firebase/messaging-compat",ay="@firebase/performance",ly="@firebase/performance-compat",uy="@firebase/remote-config",cy="@firebase/remote-config-compat",hy="@firebase/storage",dy="@firebase/storage-compat",fy="@firebase/firestore",py="@firebase/ai",my="@firebase/firestore-compat",gy="firebase",yy="12.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha="[DEFAULT]",_y={[ca]:"fire-core",[Hg]:"fire-core-compat",[Wg]:"fire-analytics",[Gg]:"fire-analytics-compat",[Qg]:"fire-app-check",[Kg]:"fire-app-check-compat",[Yg]:"fire-auth",[Xg]:"fire-auth-compat",[Jg]:"fire-rtdb",[Zg]:"fire-data-connect",[ey]:"fire-rtdb-compat",[ty]:"fire-fn",[ny]:"fire-fn-compat",[ry]:"fire-iid",[iy]:"fire-iid-compat",[sy]:"fire-fcm",[oy]:"fire-fcm-compat",[ay]:"fire-perf",[ly]:"fire-perf-compat",[uy]:"fire-rc",[cy]:"fire-rc-compat",[hy]:"fire-gcs",[dy]:"fire-gcs-compat",[fy]:"fire-fst",[my]:"fire-fst-compat",[py]:"fire-vertex","fire-js":"fire-js",[gy]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=new Map,wy=new Map,da=new Map;function ic(n,e){try{n.container.addComponent(e)}catch(t){jt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function mr(n){const e=n.name;if(da.has(e))return jt.debug(`There were multiple attempts to register component ${e}.`),!1;da.set(e,n);for(const t of Ps.values())ic(t,n);for(const t of wy.values())ic(t,n);return!0}function Wa(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function wt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},on=new Si("app","Firebase",Ey);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw on.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=yy;function Rd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:ha,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw on.create("bad-app-name",{appName:String(i)});if(t||(t=vd()),!t)throw on.create("no-options");const s=Ps.get(i);if(s){if(Mn(t,s.options)&&Mn(r,s.config))return s;throw on.create("duplicate-app",{appName:i})}const o=new Cg(i);for(const u of da.values())o.addComponent(u);const l=new Iy(t,r,o);return Ps.set(i,l),l}function Pd(n=ha){const e=Ps.get(n);if(!e&&n===ha&&vd())return Rd();if(!e)throw on.create("no-app",{appName:n});return e}function an(n,e,t){let r=_y[n]??n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jt.warn(o.join(" "));return}mr(new Ln(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Ty="firebase-heartbeat-database",vy=1,di="firebase-heartbeat-store";let $o=null;function xd(){return $o||($o=Bg(Ty,vy,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(di)}catch(t){console.warn(t)}}}}).catch(n=>{throw on.create("idb-open",{originalErrorMessage:n.message})})),$o}async function Ay(n){try{const t=(await xd()).transaction(di),r=await t.objectStore(di).get(Nd(n));return await t.done,r}catch(e){if(e instanceof Ht)jt.warn(e.message);else{const t=on.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jt.warn(t.message)}}}async function sc(n,e){try{const r=(await xd()).transaction(di,"readwrite");await r.objectStore(di).put(e,Nd(n)),await r.done}catch(t){if(t instanceof Ht)jt.warn(t.message);else{const r=on.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});jt.warn(r.message)}}}function Nd(n){return`${n.name}!${n.options.appId}`}/**
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
 */const by=1024,Sy=30;class Cy{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ry(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=oc();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Sy){const o=Py(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){jt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=oc(),{heartbeatsToSend:r,unsentEntries:i}=ky(this._heartbeatsCache.heartbeats),s=Rs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return jt.warn(t),""}}}function oc(){return new Date().toISOString().substring(0,10)}function ky(n,e=by){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ac(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),ac(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Ry{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mg()?gg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ay(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return sc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return sc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ac(n){return Rs(JSON.stringify({version:2,heartbeats:n})).length}function Py(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(n){mr(new Ln("platform-logger",e=>new qg(e),"PRIVATE")),mr(new Ln("heartbeat",e=>new Cy(e),"PRIVATE")),an(ca,rc,n),an(ca,rc,"esm2020"),an("fire-js","")}xy("");function Dd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ny=Dd,Vd=new Si("auth","Firebase",Dd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=new Ha("@firebase/auth");function Dy(n,...e){xs.logLevel<=re.WARN&&xs.warn(`Auth (${br}): ${n}`,...e)}function ms(n,...e){xs.logLevel<=re.ERROR&&xs.error(`Auth (${br}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(n,...e){throw Qa(n,...e)}function Tt(n,...e){return Qa(n,...e)}function Ka(n,e,t){const r={...Ny(),[e]:t};return new Si("auth","Firebase",r).create(e,{appName:n.name})}function Dn(n){return Ka(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vy(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Dt(n,"argument-error"),Ka(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Qa(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Vd.create(n,...e)}function X(n,e,...t){if(!n)throw Qa(e,...t)}function Ut(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ms(e),new Error(e)}function zt(n,e){n||Ut(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Oy(){return lc()==="http:"||lc()==="https:"}function lc(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Oy()||hg()||"connection"in navigator)?navigator.onLine:!0}function Ly(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,t){this.shortDelay=e,this.longDelay=t,zt(t>e,"Short delay should be less than long delay!"),this.isMobile=lg()||dg()}get(){return My()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(n,e){zt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],By=new ki(3e4,6e4);function Xa(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Sr(n,e,t,r,i={}){return Md(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Ci({key:n.config.apiKey,...o}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const c={method:e,headers:u,...s};return cg()||(c.referrerPolicy="no-referrer"),n.emulatorConfig&&Ar(n.emulatorConfig.host)&&(c.credentials="include"),Od.fetch()(await Ld(n,n.config.apiHost,t,l),c)})}async function Md(n,e,t){n._canInitEmulator=!1;const r={...Fy,...e};try{const i=new zy(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw os(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw os(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw os(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw os(n,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ka(n,d,c);Dt(n,d)}}catch(i){if(i instanceof Ht)throw i;Dt(n,"network-request-failed",{message:String(i)})}}async function jy(n,e,t,r,i={}){const s=await Sr(n,e,t,r,i);return"mfaPendingCredential"in s&&Dt(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function Ld(n,e,t,r){const i=`${e}${t}?${r}`,s=n,o=s.config.emulator?Ya(n.config,i):`${n.config.apiScheme}://${i}`;return Uy.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class zy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Tt(this.auth,"network-request-failed")),By.get())})}}function os(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Tt(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qy(n,e){return Sr(n,"POST","/v1/accounts:delete",e)}async function Ns(n,e){return Sr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $y(n,e=!1){const t=Ae(n),r=await t.getIdToken(e),i=Ja(r);X(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ii(Ho(i.auth_time)),issuedAtTime:ii(Ho(i.iat)),expirationTime:ii(Ho(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ho(n){return Number(n)*1e3}function Ja(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ms("JWT malformed, contained fewer than 3 sections"),null;try{const i=Id(t);return i?JSON.parse(i):(ms("Failed to decode base64 JWT payload"),null)}catch(i){return ms("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function uc(n){const e=Ja(n);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ht&&Hy(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Hy({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ii(this.lastLoginAt),this.creationTime=ii(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ds(n){var p;const e=n.auth,t=await n.getIdToken(),r=await fi(n,Ns(e,{idToken:t}));X(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?Fd(i.providerUserInfo):[],o=Ky(n.providerData,s),l=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new pa(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(n,d)}async function Wy(n){const e=Ae(n);await Ds(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ky(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Fd(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qy(n,e){const t=await Md(n,{},async()=>{const r=Ci({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=await Ld(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return n.emulatorConfig&&Ar(n.emulatorConfig.host)&&(u.credentials="include"),Od.fetch()(o,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Yy(n,e){return Sr(n,"POST","/v2/accounts:revokeToken",Xa(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){X(e.length!==0,"internal-error");const t=uc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Qy(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new lr;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new lr,this.toJSON())}_performRefresh(){return Ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(n,e){X(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Et{constructor({uid:e,auth:t,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new Gy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new pa(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await fi(this,this.stsTokenManager.getToken(this.auth,e));return X(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return $y(this,e)}reload(){return Wy(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Et({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ds(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wt(this.auth.app))return Promise.reject(Dn(this.auth));const e=await this.getIdToken();return await fi(this,qy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,i=t.email??void 0,s=t.phoneNumber??void 0,o=t.photoURL??void 0,l=t.tenantId??void 0,u=t._redirectEventId??void 0,c=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:g,providerData:C,stsTokenManager:k}=t;X(p&&k,e,"internal-error");const x=lr.fromJSON(this.name,k);X(typeof p=="string",e,"internal-error"),Jt(r,e.name),Jt(i,e.name),X(typeof m=="boolean",e,"internal-error"),X(typeof g=="boolean",e,"internal-error"),Jt(s,e.name),Jt(o,e.name),Jt(l,e.name),Jt(u,e.name),Jt(c,e.name),Jt(d,e.name);const N=new Et({uid:p,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:g,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:x,createdAt:c,lastLoginAt:d});return C&&Array.isArray(C)&&(N.providerData=C.map(q=>({...q}))),u&&(N._redirectEventId=u),N}static async _fromIdTokenResponse(e,t,r=!1){const i=new lr;i.updateFromServerResponse(t);const s=new Et({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ds(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];X(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Fd(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new lr;l.updateFromIdToken(r);const u=new Et({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new pa(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=new Map;function Bt(n){zt(n instanceof Function,"Expected a class definition");let e=cc.get(n);return e?(zt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,cc.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ud.type="NONE";const hc=Ud;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(n,e,t){return`firebase:${n}:${e}:${t}`}class ur{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=gs(this.userKey,i.apiKey,s),this.fullPersistenceKey=gs("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ns(this.auth,{idToken:e}).catch(()=>{});return t?Et._fromGetAccountInfoResponse(this.auth,t,e):null}return Et._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ur(Bt(hc),e,r);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Bt(hc);const o=gs(r,e.config.apiKey,e.name);let l=null;for(const c of t)try{const d=await c._get(o);if(d){let p;if(typeof d=="string"){const m=await Ns(e,{idToken:d}).catch(()=>{});if(!m)break;p=await Et._fromGetAccountInfoResponse(e,m,d)}else p=Et._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ur(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ur(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hd(e))return"Blackberry";if(Gd(e))return"Webos";if(jd(e))return"Safari";if((e.includes("chrome/")||zd(e))&&!e.includes("edge/"))return"Chrome";if($d(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Bd(n=Ke()){return/firefox\//i.test(n)}function jd(n=Ke()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zd(n=Ke()){return/crios\//i.test(n)}function qd(n=Ke()){return/iemobile/i.test(n)}function $d(n=Ke()){return/android/i.test(n)}function Hd(n=Ke()){return/blackberry/i.test(n)}function Gd(n=Ke()){return/webos/i.test(n)}function Za(n=Ke()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Xy(n=Ke()){var e;return Za(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Jy(){return fg()&&document.documentMode===10}function Wd(n=Ke()){return Za(n)||$d(n)||Gd(n)||Hd(n)||/windows phone/i.test(n)||qd(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(n,e=[]){let t;switch(n){case"Browser":t=dc(Ke());break;case"Worker":t=`${dc(Ke())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${br}/${r}`}/**
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
 */class Zy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function e_(n,e={}){return Sr(n,"GET","/v2/passwordPolicy",Xa(n,e))}/**
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
 */const t_=6;class n_{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??t_,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fc(this),this.idTokenSubscription=new fc(this),this.beforeStateQueue=new Zy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Bt(t)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await ur.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ns(this,{idToken:e}),r=await Et._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(wt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ds(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ly()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wt(this.app))return Promise.reject(Dn(this));const t=e?Ae(e):null;return t&&X(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wt(this.app)?Promise.reject(Dn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wt(this.app)?Promise.reject(Dn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Bt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await e_(this),t=new n_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Si("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Yy(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Bt(e)||this._popupRedirectResolver;X(t,this,"argument-error"),this.redirectPersistenceManager=await ur.create(this,[Bt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Kd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(wt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Dy(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function to(n){return Ae(n)}class fc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ig(t=>this.observer=t)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let el={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function i_(n){el=n}function s_(n){return el.loadJS(n)}function o_(){return el.gapiScript}function a_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(n,e){const t=Wa(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Mn(s,e??{}))return i;Dt(i,"already-initialized")}return t.initialize({options:e})}function u_(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Bt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function c_(n,e,t){const r=to(n);X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Qd(e),{host:o,port:l}=h_(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){X(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),X(Mn(c,r.config.emulator)&&Mn(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Ar(o)?(bd(`${s}//${o}${u}`),Sd("Auth",!0)):d_()}function Qd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function h_(n){const e=Qd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:pc(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:pc(o)}}}function pc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function d_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ut("not implemented")}_getIdTokenResponse(e){return Ut("not implemented")}_linkToIdToken(e,t){return Ut("not implemented")}_getReauthenticationResolver(e){return Ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cr(n,e){return jy(n,"POST","/v1/accounts:signInWithIdp",Xa(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_="http://localhost";class Fn extends Yd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Fn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Dt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=t;if(!r||!i)return null;const o=new Fn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return cr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,cr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,cr(e,t)}buildRequest(){const e={requestUri:f_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ci(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends tl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Ri{constructor(){super("facebook.com")}static credential(e){return Fn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.FACEBOOK_SIGN_IN_METHOD="facebook.com";en.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends Ri{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Fn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ft.credential(t,r)}catch{return null}}}Ft.GOOGLE_SIGN_IN_METHOD="google.com";Ft.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends Ri{constructor(){super("github.com")}static credential(e){return Fn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tn.credential(e.oauthAccessToken)}catch{return null}}}tn.GITHUB_SIGN_IN_METHOD="github.com";tn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Ri{constructor(){super("twitter.com")}static credential(e,t){return Fn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return nn.credential(t,r)}catch{return null}}}nn.TWITTER_SIGN_IN_METHOD="twitter.com";nn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Et._fromIdTokenResponse(e,r,i),o=mc(r);return new gr({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=mc(r);return new gr({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function mc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs extends Ht{constructor(e,t,r,i){super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Vs.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Vs(e,t,r,i)}}function Xd(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Vs._fromErrorAndOperation(n,s,e,r):s})}async function p_(n,e,t=!1){const r=await fi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return gr._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m_(n,e,t=!1){const{auth:r}=n;if(wt(r.app))return Promise.reject(Dn(r));const i="reauthenticate";try{const s=await fi(n,Xd(r,i,e,n),t);X(s.idToken,r,"internal-error");const o=Ja(s.idToken);X(o,r,"internal-error");const{sub:l}=o;return X(n.uid===l,r,"user-mismatch"),gr._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Dt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g_(n,e,t=!1){if(wt(n.app))return Promise.reject(Dn(n));const r="signIn",i=await Xd(n,r,e),s=await gr._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}function y_(n,e,t,r){return Ae(n).onIdTokenChanged(e,t,r)}function __(n,e,t){return Ae(n).beforeAuthStateChanged(e,t)}function w_(n,e,t,r){return Ae(n).onAuthStateChanged(e,t,r)}function E_(n){return Ae(n).signOut()}const Os="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Os,"1"),this.storage.removeItem(Os),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_=1e3,T_=10;class Zd extends Jd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Wd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Jy()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,T_):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},I_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zd.type="LOCAL";const v_=Zd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef extends Jd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ef.type="SESSION";const tf=ef;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new no(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(t.origin,s)),u=await A_(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}no.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=nl("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){return window}function S_(n){Rt().location.href=n}/**
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
 */function nf(){return typeof Rt().WorkerGlobalScope<"u"&&typeof Rt().importScripts=="function"}async function C_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function k_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function R_(){return nf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf="firebaseLocalStorageDb",P_=1,Ms="firebaseLocalStorage",sf="fbase_key";class Pi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ro(n,e){return n.transaction([Ms],e?"readwrite":"readonly").objectStore(Ms)}function x_(){const n=indexedDB.deleteDatabase(rf);return new Pi(n).toPromise()}function ma(){const n=indexedDB.open(rf,P_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ms,{keyPath:sf})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ms)?e(r):(r.close(),await x_(),e(await ma()))})})}async function gc(n,e,t){const r=ro(n,!0).put({[sf]:e,value:t});return new Pi(r).toPromise()}async function N_(n,e){const t=ro(n,!1).get(e),r=await new Pi(t).toPromise();return r===void 0?null:r.value}function yc(n,e){const t=ro(n,!0).delete(e);return new Pi(t).toPromise()}const D_=800,V_=3;class of{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ma(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>V_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=no._getInstance(R_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await C_(),!this.activeServiceWorker)return;this.sender=new b_(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||k_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ma();return await gc(e,Os,"1"),await yc(e,Os),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>gc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>N_(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>yc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ro(i,!1).getAll();return new Pi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),D_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}of.type="LOCAL";const O_=of;new ki(3e4,6e4);/**
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
 */function af(n,e){return e?Bt(e):(X(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl extends Yd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return cr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return cr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return cr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function M_(n){return g_(n.auth,new rl(n),n.bypassAuthState)}function L_(n){const{auth:e,user:t}=n;return X(t,e,"internal-error"),m_(t,new rl(n),n.bypassAuthState)}async function F_(n){const{auth:e,user:t}=n;return X(t,e,"internal-error"),p_(t,new rl(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return M_;case"linkViaPopup":case"linkViaRedirect":return F_;case"reauthViaPopup":case"reauthViaRedirect":return L_;default:Dt(this.auth,"internal-error")}}resolve(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=new ki(2e3,1e4);async function B_(n,e,t){if(wt(n.app))return Promise.reject(Tt(n,"operation-not-supported-in-this-environment"));const r=to(n);Vy(n,e,tl);const i=af(r,t);return new xn(r,"signInViaPopup",e,i).executeNotNull()}class xn extends lf{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,xn.currentPopupAction&&xn.currentPopupAction.cancel(),xn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){zt(this.filter.length===1,"Popup operations only handle one event");const e=nl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,U_.get())};e()}}xn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_="pendingRedirect",ys=new Map;class z_ extends lf{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ys.get(this.auth._key());if(!e){try{const r=await q_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ys.set(this.auth._key(),e)}return this.bypassAuthState||ys.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function q_(n,e){const t=G_(e),r=H_(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function $_(n,e){ys.set(n._key(),e)}function H_(n){return Bt(n._redirectPersistence)}function G_(n){return gs(j_,n.config.apiKey,n.name)}async function W_(n,e,t=!1){if(wt(n.app))return Promise.reject(Dn(n));const r=to(n),i=af(r,e),o=await new z_(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_=10*60*1e3;class Q_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Y_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!uf(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(Tt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=K_&&this.cachedEventUids.clear(),this.cachedEventUids.has(_c(e))}saveEventToCache(e){this.cachedEventUids.add(_c(e)),this.lastProcessedEventTime=Date.now()}}function _c(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function uf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Y_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X_(n,e={}){return Sr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Z_=/^https?/;async function ew(n){if(n.config.emulator)return;const{authorizedDomains:e}=await X_(n);for(const t of e)try{if(tw(t))return}catch{}Dt(n,"unauthorized-domain")}function tw(n){const e=fa(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Z_.test(t))return!1;if(J_.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const nw=new ki(3e4,6e4);function wc(){const n=Rt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function rw(n){return new Promise((e,t)=>{var i,s,o;function r(){wc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wc(),t(Tt(n,"network-request-failed"))},timeout:nw.get()})}if((s=(i=Rt().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Rt().gapi)!=null&&o.load)r();else{const l=a_("iframefcb");return Rt()[l]=()=>{gapi.load?r():t(Tt(n,"network-request-failed"))},s_(`${o_()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw _s=null,e})}let _s=null;function iw(n){return _s=_s||rw(n),_s}/**
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
 */const sw=new ki(5e3,15e3),ow="__/auth/iframe",aw="emulator/auth/iframe",lw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cw(n){const e=n.config;X(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ya(e,aw):`https://${n.config.authDomain}/${ow}`,r={apiKey:e.apiKey,appName:n.name,v:br},i=uw.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Ci(r).slice(1)}`}async function hw(n){const e=await iw(n),t=Rt().gapi;return X(t,n,"internal-error"),e.open({where:document.body,url:cw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lw,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Tt(n,"network-request-failed"),l=Rt().setTimeout(()=>{s(o)},sw.get());function u(){Rt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const dw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fw=500,pw=600,mw="_blank",gw="http://localhost";class Ec{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yw(n,e,t,r=fw,i=pw){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...dw,width:r.toString(),height:i.toString(),top:s,left:o},c=Ke().toLowerCase();t&&(l=zd(c)?mw:t),Bd(c)&&(e=e||gw,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[g,C])=>`${m}${g}=${C},`,"");if(Xy(c)&&l!=="_self")return _w(e||"",l),new Ec(null);const p=window.open(e||"",l,d);X(p,n,"popup-blocked");try{p.focus()}catch{}return new Ec(p)}function _w(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const ww="__/auth/handler",Ew="emulator/auth/handler",Iw=encodeURIComponent("fac");async function Ic(n,e,t,r,i,s){X(n.config.authDomain,n,"auth-domain-config-required"),X(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:br,eventId:i};if(e instanceof tl){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Eg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Ri){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await n._getAppCheckToken(),c=u?`#${Iw}=${encodeURIComponent(u)}`:"";return`${Tw(n)}?${Ci(l).slice(1)}${c}`}function Tw({config:n}){return n.emulator?Ya(n,Ew):`https://${n.authDomain}/${ww}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go="webStorageSupport";class vw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tf,this._completeRedirectFn=W_,this._overrideRedirectResult=$_}async _openPopup(e,t,r,i){var o;zt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Ic(e,t,r,fa(),i);return yw(e,s,nl())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Ic(e,t,r,fa(),i);return S_(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(zt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await hw(e),r=new Q_(e);return t.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Go,{type:Go},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Go];s!==void 0&&t(!!s),Dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ew(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Wd()||jd()||Za()}}const Aw=vw;var Tc="@firebase/auth",vc="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Cw(n){mr(new Ln("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kd(n)},c=new r_(r,i,s,u);return u_(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),mr(new Ln("auth-internal",e=>{const t=to(e.getProvider("auth").getImmediate());return(r=>new bw(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(Tc,vc,Sw(n)),an(Tc,vc,"esm2020")}/**
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
 */const kw=5*60,Rw=Ad("authIdTokenMaxAge")||kw;let Ac=null;const Pw=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Rw)return;const i=t==null?void 0:t.token;Ac!==i&&(Ac=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function xw(n=Pd()){const e=Wa(n,"auth");if(e.isInitialized())return e.getImmediate();const t=l_(n,{popupRedirectResolver:Aw,persistence:[O_,v_,tf]}),r=Ad("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Pw(s.toString());__(t,o,()=>o(t.currentUser)),y_(t,l=>o(l))}}const i=Td("auth");return i&&c_(t,`http://${i}`),t}function Nw(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}i_({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Tt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Nw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Cw("Browser");var Dw="firebase",Vw="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an(Dw,Vw,"app");var bc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ln,cf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,_){function I(){}I.prototype=_.prototype,v.D=_.prototype,v.prototype=new I,v.prototype.constructor=v,v.C=function(A,E,S){for(var w=Array(arguments.length-2),de=2;de<arguments.length;de++)w[de-2]=arguments[de];return _.prototype[E].apply(A,w)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,_,I){I||(I=0);var A=Array(16);if(typeof _=="string")for(var E=0;16>E;++E)A[E]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(E=0;16>E;++E)A[E]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=v.g[0],I=v.g[1],E=v.g[2];var S=v.g[3],w=_+(S^I&(E^S))+A[0]+3614090360&4294967295;_=I+(w<<7&4294967295|w>>>25),w=S+(E^_&(I^E))+A[1]+3905402710&4294967295,S=_+(w<<12&4294967295|w>>>20),w=E+(I^S&(_^I))+A[2]+606105819&4294967295,E=S+(w<<17&4294967295|w>>>15),w=I+(_^E&(S^_))+A[3]+3250441966&4294967295,I=E+(w<<22&4294967295|w>>>10),w=_+(S^I&(E^S))+A[4]+4118548399&4294967295,_=I+(w<<7&4294967295|w>>>25),w=S+(E^_&(I^E))+A[5]+1200080426&4294967295,S=_+(w<<12&4294967295|w>>>20),w=E+(I^S&(_^I))+A[6]+2821735955&4294967295,E=S+(w<<17&4294967295|w>>>15),w=I+(_^E&(S^_))+A[7]+4249261313&4294967295,I=E+(w<<22&4294967295|w>>>10),w=_+(S^I&(E^S))+A[8]+1770035416&4294967295,_=I+(w<<7&4294967295|w>>>25),w=S+(E^_&(I^E))+A[9]+2336552879&4294967295,S=_+(w<<12&4294967295|w>>>20),w=E+(I^S&(_^I))+A[10]+4294925233&4294967295,E=S+(w<<17&4294967295|w>>>15),w=I+(_^E&(S^_))+A[11]+2304563134&4294967295,I=E+(w<<22&4294967295|w>>>10),w=_+(S^I&(E^S))+A[12]+1804603682&4294967295,_=I+(w<<7&4294967295|w>>>25),w=S+(E^_&(I^E))+A[13]+4254626195&4294967295,S=_+(w<<12&4294967295|w>>>20),w=E+(I^S&(_^I))+A[14]+2792965006&4294967295,E=S+(w<<17&4294967295|w>>>15),w=I+(_^E&(S^_))+A[15]+1236535329&4294967295,I=E+(w<<22&4294967295|w>>>10),w=_+(E^S&(I^E))+A[1]+4129170786&4294967295,_=I+(w<<5&4294967295|w>>>27),w=S+(I^E&(_^I))+A[6]+3225465664&4294967295,S=_+(w<<9&4294967295|w>>>23),w=E+(_^I&(S^_))+A[11]+643717713&4294967295,E=S+(w<<14&4294967295|w>>>18),w=I+(S^_&(E^S))+A[0]+3921069994&4294967295,I=E+(w<<20&4294967295|w>>>12),w=_+(E^S&(I^E))+A[5]+3593408605&4294967295,_=I+(w<<5&4294967295|w>>>27),w=S+(I^E&(_^I))+A[10]+38016083&4294967295,S=_+(w<<9&4294967295|w>>>23),w=E+(_^I&(S^_))+A[15]+3634488961&4294967295,E=S+(w<<14&4294967295|w>>>18),w=I+(S^_&(E^S))+A[4]+3889429448&4294967295,I=E+(w<<20&4294967295|w>>>12),w=_+(E^S&(I^E))+A[9]+568446438&4294967295,_=I+(w<<5&4294967295|w>>>27),w=S+(I^E&(_^I))+A[14]+3275163606&4294967295,S=_+(w<<9&4294967295|w>>>23),w=E+(_^I&(S^_))+A[3]+4107603335&4294967295,E=S+(w<<14&4294967295|w>>>18),w=I+(S^_&(E^S))+A[8]+1163531501&4294967295,I=E+(w<<20&4294967295|w>>>12),w=_+(E^S&(I^E))+A[13]+2850285829&4294967295,_=I+(w<<5&4294967295|w>>>27),w=S+(I^E&(_^I))+A[2]+4243563512&4294967295,S=_+(w<<9&4294967295|w>>>23),w=E+(_^I&(S^_))+A[7]+1735328473&4294967295,E=S+(w<<14&4294967295|w>>>18),w=I+(S^_&(E^S))+A[12]+2368359562&4294967295,I=E+(w<<20&4294967295|w>>>12),w=_+(I^E^S)+A[5]+4294588738&4294967295,_=I+(w<<4&4294967295|w>>>28),w=S+(_^I^E)+A[8]+2272392833&4294967295,S=_+(w<<11&4294967295|w>>>21),w=E+(S^_^I)+A[11]+1839030562&4294967295,E=S+(w<<16&4294967295|w>>>16),w=I+(E^S^_)+A[14]+4259657740&4294967295,I=E+(w<<23&4294967295|w>>>9),w=_+(I^E^S)+A[1]+2763975236&4294967295,_=I+(w<<4&4294967295|w>>>28),w=S+(_^I^E)+A[4]+1272893353&4294967295,S=_+(w<<11&4294967295|w>>>21),w=E+(S^_^I)+A[7]+4139469664&4294967295,E=S+(w<<16&4294967295|w>>>16),w=I+(E^S^_)+A[10]+3200236656&4294967295,I=E+(w<<23&4294967295|w>>>9),w=_+(I^E^S)+A[13]+681279174&4294967295,_=I+(w<<4&4294967295|w>>>28),w=S+(_^I^E)+A[0]+3936430074&4294967295,S=_+(w<<11&4294967295|w>>>21),w=E+(S^_^I)+A[3]+3572445317&4294967295,E=S+(w<<16&4294967295|w>>>16),w=I+(E^S^_)+A[6]+76029189&4294967295,I=E+(w<<23&4294967295|w>>>9),w=_+(I^E^S)+A[9]+3654602809&4294967295,_=I+(w<<4&4294967295|w>>>28),w=S+(_^I^E)+A[12]+3873151461&4294967295,S=_+(w<<11&4294967295|w>>>21),w=E+(S^_^I)+A[15]+530742520&4294967295,E=S+(w<<16&4294967295|w>>>16),w=I+(E^S^_)+A[2]+3299628645&4294967295,I=E+(w<<23&4294967295|w>>>9),w=_+(E^(I|~S))+A[0]+4096336452&4294967295,_=I+(w<<6&4294967295|w>>>26),w=S+(I^(_|~E))+A[7]+1126891415&4294967295,S=_+(w<<10&4294967295|w>>>22),w=E+(_^(S|~I))+A[14]+2878612391&4294967295,E=S+(w<<15&4294967295|w>>>17),w=I+(S^(E|~_))+A[5]+4237533241&4294967295,I=E+(w<<21&4294967295|w>>>11),w=_+(E^(I|~S))+A[12]+1700485571&4294967295,_=I+(w<<6&4294967295|w>>>26),w=S+(I^(_|~E))+A[3]+2399980690&4294967295,S=_+(w<<10&4294967295|w>>>22),w=E+(_^(S|~I))+A[10]+4293915773&4294967295,E=S+(w<<15&4294967295|w>>>17),w=I+(S^(E|~_))+A[1]+2240044497&4294967295,I=E+(w<<21&4294967295|w>>>11),w=_+(E^(I|~S))+A[8]+1873313359&4294967295,_=I+(w<<6&4294967295|w>>>26),w=S+(I^(_|~E))+A[15]+4264355552&4294967295,S=_+(w<<10&4294967295|w>>>22),w=E+(_^(S|~I))+A[6]+2734768916&4294967295,E=S+(w<<15&4294967295|w>>>17),w=I+(S^(E|~_))+A[13]+1309151649&4294967295,I=E+(w<<21&4294967295|w>>>11),w=_+(E^(I|~S))+A[4]+4149444226&4294967295,_=I+(w<<6&4294967295|w>>>26),w=S+(I^(_|~E))+A[11]+3174756917&4294967295,S=_+(w<<10&4294967295|w>>>22),w=E+(_^(S|~I))+A[2]+718787259&4294967295,E=S+(w<<15&4294967295|w>>>17),w=I+(S^(E|~_))+A[9]+3951481745&4294967295,v.g[0]=v.g[0]+_&4294967295,v.g[1]=v.g[1]+(E+(w<<21&4294967295|w>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+S&4294967295}r.prototype.u=function(v,_){_===void 0&&(_=v.length);for(var I=_-this.blockSize,A=this.B,E=this.h,S=0;S<_;){if(E==0)for(;S<=I;)i(this,v,S),S+=this.blockSize;if(typeof v=="string"){for(;S<_;)if(A[E++]=v.charCodeAt(S++),E==this.blockSize){i(this,A),E=0;break}}else for(;S<_;)if(A[E++]=v[S++],E==this.blockSize){i(this,A),E=0;break}}this.h=E,this.o+=_},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var _=1;_<v.length-8;++_)v[_]=0;var I=8*this.o;for(_=v.length-8;_<v.length;++_)v[_]=I&255,I/=256;for(this.u(v),v=Array(16),_=I=0;4>_;++_)for(var A=0;32>A;A+=8)v[I++]=this.g[_]>>>A&255;return v};function s(v,_){var I=l;return Object.prototype.hasOwnProperty.call(I,v)?I[v]:I[v]=_(v)}function o(v,_){this.h=_;for(var I=[],A=!0,E=v.length-1;0<=E;E--){var S=v[E]|0;A&&S==_||(I[E]=S,A=!1)}this.g=I}var l={};function u(v){return-128<=v&&128>v?s(v,function(_){return new o([_|0],0>_?-1:0)}):new o([v|0],0>v?-1:0)}function c(v){if(isNaN(v)||!isFinite(v))return p;if(0>v)return x(c(-v));for(var _=[],I=1,A=0;v>=I;A++)_[A]=v/I|0,I*=4294967296;return new o(_,0)}function d(v,_){if(v.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(v.charAt(0)=="-")return x(d(v.substring(1),_));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=c(Math.pow(_,8)),A=p,E=0;E<v.length;E+=8){var S=Math.min(8,v.length-E),w=parseInt(v.substring(E,E+S),_);8>S?(S=c(Math.pow(_,S)),A=A.j(S).add(c(w))):(A=A.j(I),A=A.add(c(w)))}return A}var p=u(0),m=u(1),g=u(16777216);n=o.prototype,n.m=function(){if(k(this))return-x(this).m();for(var v=0,_=1,I=0;I<this.g.length;I++){var A=this.i(I);v+=(0<=A?A:4294967296+A)*_,_*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(C(this))return"0";if(k(this))return"-"+x(this).toString(v);for(var _=c(Math.pow(v,6)),I=this,A="";;){var E=G(I,_).g;I=N(I,E.j(_));var S=((0<I.g.length?I.g[0]:I.h)>>>0).toString(v);if(I=E,C(I))return S+A;for(;6>S.length;)S="0"+S;A=S+A}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function C(v){if(v.h!=0)return!1;for(var _=0;_<v.g.length;_++)if(v.g[_]!=0)return!1;return!0}function k(v){return v.h==-1}n.l=function(v){return v=N(this,v),k(v)?-1:C(v)?0:1};function x(v){for(var _=v.g.length,I=[],A=0;A<_;A++)I[A]=~v.g[A];return new o(I,~v.h).add(m)}n.abs=function(){return k(this)?x(this):this},n.add=function(v){for(var _=Math.max(this.g.length,v.g.length),I=[],A=0,E=0;E<=_;E++){var S=A+(this.i(E)&65535)+(v.i(E)&65535),w=(S>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);A=w>>>16,S&=65535,w&=65535,I[E]=w<<16|S}return new o(I,I[I.length-1]&-2147483648?-1:0)};function N(v,_){return v.add(x(_))}n.j=function(v){if(C(this)||C(v))return p;if(k(this))return k(v)?x(this).j(x(v)):x(x(this).j(v));if(k(v))return x(this.j(x(v)));if(0>this.l(g)&&0>v.l(g))return c(this.m()*v.m());for(var _=this.g.length+v.g.length,I=[],A=0;A<2*_;A++)I[A]=0;for(A=0;A<this.g.length;A++)for(var E=0;E<v.g.length;E++){var S=this.i(A)>>>16,w=this.i(A)&65535,de=v.i(E)>>>16,ne=v.i(E)&65535;I[2*A+2*E]+=w*ne,q(I,2*A+2*E),I[2*A+2*E+1]+=S*ne,q(I,2*A+2*E+1),I[2*A+2*E+1]+=w*de,q(I,2*A+2*E+1),I[2*A+2*E+2]+=S*de,q(I,2*A+2*E+2)}for(A=0;A<_;A++)I[A]=I[2*A+1]<<16|I[2*A];for(A=_;A<2*_;A++)I[A]=0;return new o(I,0)};function q(v,_){for(;(v[_]&65535)!=v[_];)v[_+1]+=v[_]>>>16,v[_]&=65535,_++}function F(v,_){this.g=v,this.h=_}function G(v,_){if(C(_))throw Error("division by zero");if(C(v))return new F(p,p);if(k(v))return _=G(x(v),_),new F(x(_.g),x(_.h));if(k(_))return _=G(v,x(_)),new F(x(_.g),_.h);if(30<v.g.length){if(k(v)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var I=m,A=_;0>=A.l(v);)I=$(I),A=$(A);var E=D(I,1),S=D(A,1);for(A=D(A,2),I=D(I,2);!C(A);){var w=S.add(A);0>=w.l(v)&&(E=E.add(I),S=w),A=D(A,1),I=D(I,1)}return _=N(v,E.j(_)),new F(E,_)}for(E=p;0<=v.l(_);){for(I=Math.max(1,Math.floor(v.m()/_.m())),A=Math.ceil(Math.log(I)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),S=c(I),w=S.j(_);k(w)||0<w.l(v);)I-=A,S=c(I),w=S.j(_);C(S)&&(S=m),E=E.add(S),v=N(v,w)}return new F(E,v)}n.A=function(v){return G(this,v).h},n.and=function(v){for(var _=Math.max(this.g.length,v.g.length),I=[],A=0;A<_;A++)I[A]=this.i(A)&v.i(A);return new o(I,this.h&v.h)},n.or=function(v){for(var _=Math.max(this.g.length,v.g.length),I=[],A=0;A<_;A++)I[A]=this.i(A)|v.i(A);return new o(I,this.h|v.h)},n.xor=function(v){for(var _=Math.max(this.g.length,v.g.length),I=[],A=0;A<_;A++)I[A]=this.i(A)^v.i(A);return new o(I,this.h^v.h)};function $(v){for(var _=v.g.length+1,I=[],A=0;A<_;A++)I[A]=v.i(A)<<1|v.i(A-1)>>>31;return new o(I,v.h)}function D(v,_){var I=_>>5;_%=32;for(var A=v.g.length-I,E=[],S=0;S<A;S++)E[S]=0<_?v.i(S+I)>>>_|v.i(S+I+1)<<32-_:v.i(S+I);return new o(E,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,cf=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,ln=o}).apply(typeof bc<"u"?bc:typeof self<"u"?self:typeof window<"u"?window:{});var as=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hf,Zr,df,ws,ga,ff,pf,mf;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof as=="object"&&as];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var R=a[y];if(!(R in f))break e;f=f[R]}a=a[a.length-1],y=f[a],h=h(y),h!=y&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var f=0,y=!1,R={next:function(){if(!y&&f<a.length){var V=f++;return{value:h(V,a[V]),done:!1}}return y=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,y),a.apply(h,R)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function g(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function C(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(y,R,V){for(var z=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)z[pe-2]=arguments[pe];return h.prototype[R].apply(y,z)}}function k(a){const h=a.length;if(0<h){const f=Array(h);for(let y=0;y<h;y++)f[y]=a[y];return f}return[]}function x(a,h){for(let f=1;f<arguments.length;f++){const y=arguments[f];if(u(y)){const R=a.length||0,V=y.length||0;a.length=R+V;for(let z=0;z<V;z++)a[R+z]=y[z]}else a.push(y)}}class N{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function q(a){return/^[\s\xa0]*$/.test(a)}function F(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function G(a){return G[" "](a),a}G[" "]=function(){};var $=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function D(a,h,f){for(const y in a)h.call(f,a[y],y,a)}function v(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function _(a){const h={};for(const f in a)h[f]=a[f];return h}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let f,y;for(let R=1;R<arguments.length;R++){y=arguments[R];for(f in y)a[f]=y[f];for(let V=0;V<I.length;V++)f=I[V],Object.prototype.hasOwnProperty.call(y,f)&&(a[f]=y[f])}}function E(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function S(a){l.setTimeout(()=>{throw a},0)}function w(){var a=rt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class de{constructor(){this.h=this.g=null}add(h,f){const y=ne.get();y.set(h,f),this.h?this.h.next=y:this.g=y,this.h=y}}var ne=new N(()=>new xe,a=>a.reset());class xe{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let we,Me=!1,rt=new de,b=()=>{const a=l.Promise.resolve(void 0);we=()=>{a.then(it)}};var it=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(f){S(f)}var h=ne;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Me=!1};function Ne(){this.s=this.s,this.C=this.C}Ne.prototype.s=!1,Ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var st=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function pt(a,h){if(T.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if($){e:{try{G(h.nodeName);var R=!0;break e}catch{}R=!1}R||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:be[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&pt.aa.h.call(this)}}C(pt,T);var be={2:"touch",3:"pen",4:"mouse"};pt.prototype.h=function(){pt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var At="closure_listenable_"+(1e6*Math.random()|0),bt=0;function Wt(a,h,f,y,R){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!y,this.ha=R,this.key=++bt,this.da=this.fa=!1}function yt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Kt(a){this.src=a,this.g={},this.h=0}Kt.prototype.add=function(a,h,f,y,R){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var z=Dr(a,h,y,R);return-1<z?(h=a[z],f||(h.fa=!1)):(h=new Wt(h,this.src,V,!!y,R),h.fa=f,a.push(h)),h};function Gn(a,h){var f=h.type;if(f in a.g){var y=a.g[f],R=Array.prototype.indexOf.call(y,h,void 0),V;(V=0<=R)&&Array.prototype.splice.call(y,R,1),V&&(yt(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Dr(a,h,f,y){for(var R=0;R<a.length;++R){var V=a[R];if(!V.da&&V.listener==h&&V.capture==!!f&&V.ha==y)return R}return-1}var Vr="closure_lm_"+(1e6*Math.random()|0),Or={};function Mr(a,h,f,y,R){if(Array.isArray(h)){for(var V=0;V<h.length;V++)Mr(a,h[V],f,y,R);return null}return f=$i(f),a&&a[At]?a.K(h,f,c(y)?!!y.capture:!1,R):ji(a,h,f,!1,y,R)}function ji(a,h,f,y,R,V){if(!h)throw Error("Invalid event type");var z=c(R)?!!R.capture:!!R,pe=Fr(a);if(pe||(a[Vr]=pe=new Kt(a)),f=pe.add(h,f,y,z,V),f.proxy)return f;if(y=zi(),f.proxy=y,y.src=a,y.listener=f,a.addEventListener)st||(R=z),R===void 0&&(R=!1),a.addEventListener(h.toString(),y,R);else if(a.attachEvent)a.attachEvent(Lr(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function zi(){function a(f){return h.call(a.src,a.listener,f)}const h=So;return a}function qi(a,h,f,y,R){if(Array.isArray(h))for(var V=0;V<h.length;V++)qi(a,h[V],f,y,R);else y=c(y)?!!y.capture:!!y,f=$i(f),a&&a[At]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],f=Dr(V,f,y,R),-1<f&&(yt(V[f]),Array.prototype.splice.call(V,f,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=Fr(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Dr(h,f,y,R)),(f=-1<a?h[a]:null)&&Wn(f))}function Wn(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[At])Gn(h.i,a);else{var f=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(f,y,a.capture):h.detachEvent?h.detachEvent(Lr(f),y):h.addListener&&h.removeListener&&h.removeListener(y),(f=Fr(h))?(Gn(f,a),f.h==0&&(f.src=null,h[Vr]=null)):yt(a)}}}function Lr(a){return a in Or?Or[a]:Or[a]="on"+a}function So(a,h){if(a.da)a=!0;else{h=new pt(h,this);var f=a.listener,y=a.ha||a.src;a.fa&&Wn(a),a=f.call(y,h)}return a}function Fr(a){return a=a[Vr],a instanceof Kt?a:null}var Ur="__closure_events_fn_"+(1e9*Math.random()>>>0);function $i(a){return typeof a=="function"?a:(a[Ur]||(a[Ur]=function(h){return a.handleEvent(h)}),a[Ur])}function De(){Ne.call(this),this.i=new Kt(this),this.M=this,this.F=null}C(De,Ne),De.prototype[At]=!0,De.prototype.removeEventListener=function(a,h,f,y){qi(this,a,h,f,y)};function P(a,h){var f,y=a.F;if(y)for(f=[];y;y=y.F)f.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new T(h,a);else if(h instanceof T)h.target=h.target||a;else{var R=h;h=new T(y,a),A(h,R)}if(R=!0,f)for(var V=f.length-1;0<=V;V--){var z=h.g=f[V];R=B(z,y,!0,h)&&R}if(z=h.g=a,R=B(z,y,!0,h)&&R,R=B(z,y,!1,h)&&R,f)for(V=0;V<f.length;V++)z=h.g=f[V],R=B(z,y,!1,h)&&R}De.prototype.N=function(){if(De.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],y=0;y<f.length;y++)yt(f[y]);delete a.g[h],a.h--}}this.F=null},De.prototype.K=function(a,h,f,y){return this.i.add(String(a),h,!1,f,y)},De.prototype.L=function(a,h,f,y){return this.i.add(String(a),h,!0,f,y)};function B(a,h,f,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var R=!0,V=0;V<h.length;++V){var z=h[V];if(z&&!z.da&&z.capture==f){var pe=z.listener,Fe=z.ha||z.src;z.fa&&Gn(a.i,z),R=pe.call(Fe,y)!==!1&&R}}return R&&!y.defaultPrevented}function Y(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function te(a){a.g=Y(()=>{a.g=null,a.i&&(a.i=!1,te(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class ze extends Ne{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:te(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function he(a){Ne.call(this),this.h=a,this.g={}}C(he,Ne);var Le=[];function ot(a){D(a.g,function(h,f){this.g.hasOwnProperty(f)&&Wn(h)},a),a.g={}}he.prototype.N=function(){he.aa.N.call(this),ot(this)},he.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ot=l.JSON.stringify,Tn=l.JSON.parse,vn=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Kn(){}Kn.prototype.h=null;function Qn(a){return a.h||(a.h=a.i())}function qe(){}var mt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function at(){T.call(this,"d")}C(at,T);function Co(){T.call(this,"c")}C(Co,T);var An={},lu=null;function Hi(){return lu=lu||new De}An.La="serverreachability";function uu(a){T.call(this,An.La,a)}C(uu,T);function Br(a){const h=Hi();P(h,new uu(h))}An.STAT_EVENT="statevent";function cu(a,h){T.call(this,An.STAT_EVENT,a),this.stat=h}C(cu,T);function Ye(a){const h=Hi();P(h,new cu(h,a))}An.Ma="timingevent";function hu(a,h){T.call(this,An.Ma,a),this.size=h}C(hu,T);function jr(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function zr(){this.g=!0}zr.prototype.xa=function(){this.g=!1};function Sm(a,h,f,y,R,V){a.info(function(){if(a.g)if(V)for(var z="",pe=V.split("&"),Fe=0;Fe<pe.length;Fe++){var ce=pe[Fe].split("=");if(1<ce.length){var $e=ce[0];ce=ce[1];var He=$e.split("_");z=2<=He.length&&He[1]=="type"?z+($e+"="+ce+"&"):z+($e+"=redacted&")}}else z=null;else z=V;return"XMLHTTP REQ ("+y+") [attempt "+R+"]: "+h+`
`+f+`
`+z})}function Cm(a,h,f,y,R,V,z){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+R+"]: "+h+`
`+f+`
`+V+" "+z})}function Yn(a,h,f,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Rm(a,f)+(y?" "+y:"")})}function km(a,h){a.info(function(){return"TIMEOUT: "+h})}zr.prototype.info=function(){};function Rm(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var y=f[a];if(!(2>y.length)){var R=y[1];if(Array.isArray(R)&&!(1>R.length)){var V=R[0];if(V!="noop"&&V!="stop"&&V!="close")for(var z=1;z<R.length;z++)R[z]=""}}}}return Ot(f)}catch{return h}}var Gi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},du={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ko;function Wi(){}C(Wi,Kn),Wi.prototype.g=function(){return new XMLHttpRequest},Wi.prototype.i=function(){return{}},ko=new Wi;function Qt(a,h,f,y){this.j=a,this.i=h,this.l=f,this.R=y||1,this.U=new he(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new fu}function fu(){this.i=null,this.g="",this.h=!1}var pu={},Ro={};function Po(a,h,f){a.L=1,a.v=Xi(Mt(h)),a.m=f,a.P=!0,mu(a,null)}function mu(a,h){a.F=Date.now(),Ki(a),a.A=Mt(a.v);var f=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),Ru(f.i,"t",y),a.C=0,f=a.j.J,a.h=new fu,a.g=Wu(a.j,f?h:null,!a.m),0<a.O&&(a.M=new ze(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,y=a.ca;var R="readystatechange";Array.isArray(R)||(R&&(Le[0]=R.toString()),R=Le);for(var V=0;V<R.length;V++){var z=Mr(f,R[V],y||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Br(),Sm(a.i,a.u,a.A,a.l,a.R,a.m)}Qt.prototype.ca=function(a){a=a.target;const h=this.M;h&&Lt(a)==3?h.j():this.Y(a)},Qt.prototype.Y=function(a){try{if(a==this.g)e:{const He=Lt(this.g);var h=this.g.Ba();const Zn=this.g.Z();if(!(3>He)&&(He!=3||this.g&&(this.h.h||this.g.oa()||Mu(this.g)))){this.J||He!=4||h==7||(h==8||0>=Zn?Br(3):Br(2)),xo(this);var f=this.g.Z();this.X=f;t:if(gu(this)){var y=Mu(this.g);a="";var R=y.length,V=Lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){bn(this),qr(this);var z="";break t}this.h.i=new l.TextDecoder}for(h=0;h<R;h++)this.h.h=!0,a+=this.h.i.decode(y[h],{stream:!(V&&h==R-1)});y.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=f==200,Cm(this.i,this.u,this.A,this.l,this.R,He,f),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,Fe=this.g;if((pe=Fe.g?Fe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(pe)){var ce=pe;break t}}ce=null}if(f=ce)Yn(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,No(this,f);else{this.o=!1,this.s=3,Ye(12),bn(this),qr(this);break e}}if(this.P){f=!0;let _t;for(;!this.J&&this.C<z.length;)if(_t=Pm(this,z),_t==Ro){He==4&&(this.s=4,Ye(14),f=!1),Yn(this.i,this.l,null,"[Incomplete Response]");break}else if(_t==pu){this.s=4,Ye(15),Yn(this.i,this.l,z,"[Invalid Chunk]"),f=!1;break}else Yn(this.i,this.l,_t,null),No(this,_t);if(gu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),He!=4||z.length!=0||this.h.h||(this.s=1,Ye(16),f=!1),this.o=this.o&&f,!f)Yn(this.i,this.l,z,"[Invalid Chunked Response]"),bn(this),qr(this);else if(0<z.length&&!this.W){this.W=!0;var $e=this.j;$e.g==this&&$e.ba&&!$e.M&&($e.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Fo($e),$e.M=!0,Ye(11))}}else Yn(this.i,this.l,z,null),No(this,z);He==4&&bn(this),this.o&&!this.J&&(He==4?qu(this.j,this):(this.o=!1,Ki(this)))}else Wm(this.g),f==400&&0<z.indexOf("Unknown SID")?(this.s=3,Ye(12)):(this.s=0,Ye(13)),bn(this),qr(this)}}}catch{}finally{}};function gu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Pm(a,h){var f=a.C,y=h.indexOf(`
`,f);return y==-1?Ro:(f=Number(h.substring(f,y)),isNaN(f)?pu:(y+=1,y+f>h.length?Ro:(h=h.slice(y,y+f),a.C=y+f,h)))}Qt.prototype.cancel=function(){this.J=!0,bn(this)};function Ki(a){a.S=Date.now()+a.I,yu(a,a.I)}function yu(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=jr(m(a.ba,a),h)}function xo(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Qt.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(km(this.i,this.A),this.L!=2&&(Br(),Ye(17)),bn(this),this.s=2,qr(this)):yu(this,this.S-a)};function qr(a){a.j.G==0||a.J||qu(a.j,a)}function bn(a){xo(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,ot(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function No(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Do(f.h,a))){if(!a.K&&Do(f.h,a)&&f.G==3){try{var y=f.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var R=y;if(R[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)rs(f),ts(f);else break e;Lo(f),Ye(18)}}else f.za=R[1],0<f.za-f.T&&37500>R[2]&&f.F&&f.v==0&&!f.C&&(f.C=jr(m(f.Za,f),6e3));if(1>=Eu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Cn(f,11)}else if((a.K||f.g==a)&&rs(f),!q(h))for(R=f.Da.g.parse(h),h=0;h<R.length;h++){let ce=R[h];if(f.T=ce[0],ce=ce[1],f.G==2)if(ce[0]=="c"){f.K=ce[1],f.ia=ce[2];const $e=ce[3];$e!=null&&(f.la=$e,f.j.info("VER="+f.la));const He=ce[4];He!=null&&(f.Aa=He,f.j.info("SVER="+f.Aa));const Zn=ce[5];Zn!=null&&typeof Zn=="number"&&0<Zn&&(y=1.5*Zn,f.L=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const _t=a.g;if(_t){const ss=_t.g?_t.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ss){var V=y.h;V.g||ss.indexOf("spdy")==-1&&ss.indexOf("quic")==-1&&ss.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Vo(V,V.h),V.h=null))}if(y.D){const Uo=_t.g?_t.g.getResponseHeader("X-HTTP-Session-Id"):null;Uo&&(y.ya=Uo,ge(y.I,y.D,Uo))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),y=f;var z=a;if(y.qa=Gu(y,y.J?y.ia:null,y.W),z.K){Iu(y.h,z);var pe=z,Fe=y.L;Fe&&(pe.I=Fe),pe.B&&(xo(pe),Ki(pe)),y.g=z}else ju(y);0<f.i.length&&ns(f)}else ce[0]!="stop"&&ce[0]!="close"||Cn(f,7);else f.G==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?Cn(f,7):Mo(f):ce[0]!="noop"&&f.l&&f.l.ta(ce),f.v=0)}}Br(4)}catch{}}var xm=class{constructor(a,h){this.g=a,this.map=h}};function _u(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function wu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Eu(a){return a.h?1:a.g?a.g.size:0}function Do(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Vo(a,h){a.g?a.g.add(h):a.h=h}function Iu(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}_u.prototype.cancel=function(){if(this.i=Tu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Tu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return k(a.i)}function Nm(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,y=0;y<f;y++)h.push(a[y]);return h}h=[],f=0;for(y in a)h[f++]=a[y];return h}function Dm(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const y in a)h[f++]=y;return h}}}function vu(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=Dm(a),y=Nm(a),R=y.length,V=0;V<R;V++)h.call(void 0,y[V],f&&f[V],a)}var Au=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vm(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var y=a[f].indexOf("="),R=null;if(0<=y){var V=a[f].substring(0,y);R=a[f].substring(y+1)}else V=a[f];h(V,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Sn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Sn){this.h=a.h,Qi(this,a.j),this.o=a.o,this.g=a.g,Yi(this,a.s),this.l=a.l;var h=a.i,f=new Gr;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),bu(this,f),this.m=a.m}else a&&(h=String(a).match(Au))?(this.h=!1,Qi(this,h[1]||"",!0),this.o=$r(h[2]||""),this.g=$r(h[3]||"",!0),Yi(this,h[4]),this.l=$r(h[5]||"",!0),bu(this,h[6]||"",!0),this.m=$r(h[7]||"")):(this.h=!1,this.i=new Gr(null,this.h))}Sn.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Hr(h,Su,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Hr(h,Su,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Hr(f,f.charAt(0)=="/"?Lm:Mm,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Hr(f,Um)),a.join("")};function Mt(a){return new Sn(a)}function Qi(a,h,f){a.j=f?$r(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Yi(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function bu(a,h,f){h instanceof Gr?(a.i=h,Bm(a.i,a.h)):(f||(h=Hr(h,Fm)),a.i=new Gr(h,a.h))}function ge(a,h,f){a.i.set(h,f)}function Xi(a){return ge(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function $r(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Hr(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,Om),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Om(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Su=/[#\/\?@]/g,Mm=/[#\?:]/g,Lm=/[#\?]/g,Fm=/[#\?@]/g,Um=/#/g;function Gr(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Yt(a){a.g||(a.g=new Map,a.h=0,a.i&&Vm(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}n=Gr.prototype,n.add=function(a,h){Yt(this),this.i=null,a=Xn(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Cu(a,h){Yt(a),h=Xn(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function ku(a,h){return Yt(a),h=Xn(a,h),a.g.has(h)}n.forEach=function(a,h){Yt(this),this.g.forEach(function(f,y){f.forEach(function(R){a.call(h,R,y,this)},this)},this)},n.na=function(){Yt(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let y=0;y<h.length;y++){const R=a[y];for(let V=0;V<R.length;V++)f.push(h[y])}return f},n.V=function(a){Yt(this);let h=[];if(typeof a=="string")ku(this,a)&&(h=h.concat(this.g.get(Xn(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},n.set=function(a,h){return Yt(this),this.i=null,a=Xn(this,a),ku(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Ru(a,h,f){Cu(a,h),0<f.length&&(a.i=null,a.g.set(Xn(a,h),k(f)),a.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var y=h[f];const V=encodeURIComponent(String(y)),z=this.V(y);for(y=0;y<z.length;y++){var R=V;z[y]!==""&&(R+="="+encodeURIComponent(String(z[y]))),a.push(R)}}return this.i=a.join("&")};function Xn(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Bm(a,h){h&&!a.j&&(Yt(a),a.i=null,a.g.forEach(function(f,y){var R=y.toLowerCase();y!=R&&(Cu(this,y),Ru(this,R,f))},a)),a.j=h}function jm(a,h){const f=new zr;if(l.Image){const y=new Image;y.onload=g(Xt,f,"TestLoadImage: loaded",!0,h,y),y.onerror=g(Xt,f,"TestLoadImage: error",!1,h,y),y.onabort=g(Xt,f,"TestLoadImage: abort",!1,h,y),y.ontimeout=g(Xt,f,"TestLoadImage: timeout",!1,h,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function zm(a,h){const f=new zr,y=new AbortController,R=setTimeout(()=>{y.abort(),Xt(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(V=>{clearTimeout(R),V.ok?Xt(f,"TestPingServer: ok",!0,h):Xt(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(R),Xt(f,"TestPingServer: error",!1,h)})}function Xt(a,h,f,y,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),y(f)}catch{}}function qm(){this.g=new vn}function $m(a,h,f){const y=f||"";try{vu(a,function(R,V){let z=R;c(R)&&(z=Ot(R)),h.push(y+V+"="+encodeURIComponent(z))})}catch(R){throw h.push(y+"type="+encodeURIComponent("_badmap")),R}}function Ji(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Ji,Kn),Ji.prototype.g=function(){return new Zi(this.l,this.j)},Ji.prototype.i=function(a){return function(){return a}}({});function Zi(a,h){De.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Zi,De),n=Zi.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Kr(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Wr(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Kr(this)),this.g&&(this.readyState=3,Kr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Pu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Pu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Wr(this):Kr(this),this.readyState==3&&Pu(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,Wr(this))},n.Qa=function(a){this.g&&(this.response=a,Wr(this))},n.ga=function(){this.g&&Wr(this)};function Wr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Kr(a)}n.setRequestHeader=function(a,h){this.u.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Kr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Zi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function xu(a){let h="";return D(a,function(f,y){h+=y,h+=":",h+=f,h+=`\r
`}),h}function Oo(a,h,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=xu(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):ge(a,h,f))}function Ie(a){De.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Ie,De);var Hm=/^https?$/i,Gm=["POST","PUT"];n=Ie.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,h,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ko.g(),this.v=this.o?Qn(this.o):Qn(ko),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){Nu(this,V);return}if(a=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var R in y)f.set(R,y[R]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const V of y.keys())f.set(V,y.get(V));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),R=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Gm,h,void 0))||y||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,z]of f)this.g.setRequestHeader(V,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ou(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){Nu(this,V)}};function Nu(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Du(a),es(a)}function Du(a){a.A||(a.A=!0,P(a,"complete"),P(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,P(this,"complete"),P(this,"abort"),es(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),es(this,!0)),Ie.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Vu(this):this.bb())},n.bb=function(){Vu(this)};function Vu(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Lt(a)!=4||a.Z()!=2)){if(a.u&&Lt(a)==4)Y(a.Ea,0,a);else if(P(a,"readystatechange"),Lt(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var y;if(y=z===0){var R=String(a.D).match(Au)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),y=!Hm.test(R?R.toLowerCase():"")}f=y}if(f)P(a,"complete"),P(a,"success");else{a.m=6;try{var V=2<Lt(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",Du(a)}}finally{es(a)}}}}function es(a,h){if(a.g){Ou(a);const f=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||P(a,"ready");try{f.onreadystatechange=y}catch{}}}function Ou(a){a.I&&(l.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function Lt(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<Lt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Tn(h)}};function Mu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Wm(a){const h={};a=(a.g&&2<=Lt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(q(a[y]))continue;var f=E(a[y]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=h[R]||[];h[R]=V,V.push(f)}v(h,function(y){return y.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qr(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Lu(a){this.Aa=0,this.i=[],this.j=new zr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qr("baseRetryDelayMs",5e3,a),this.cb=Qr("retryDelaySeedMs",1e4,a),this.Wa=Qr("forwardChannelMaxRetries",2,a),this.wa=Qr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new _u(a&&a.concurrentRequestLimit),this.Da=new qm,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Lu.prototype,n.la=8,n.G=1,n.connect=function(a,h,f,y){Ye(0),this.W=a,this.H=h||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.I=Gu(this,null,this.W),ns(this)};function Mo(a){if(Fu(a),a.G==3){var h=a.U++,f=Mt(a.I);if(ge(f,"SID",a.K),ge(f,"RID",h),ge(f,"TYPE","terminate"),Yr(a,f),h=new Qt(a,a.j,h),h.L=2,h.v=Xi(Mt(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Wu(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ki(h)}Hu(a)}function ts(a){a.g&&(Fo(a),a.g.cancel(),a.g=null)}function Fu(a){ts(a),a.u&&(l.clearTimeout(a.u),a.u=null),rs(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ns(a){if(!wu(a.h)&&!a.s){a.s=!0;var h=a.Ga;we||b(),Me||(we(),Me=!0),rt.add(h,a),a.B=0}}function Km(a,h){return Eu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=jr(m(a.Ga,a,h),$u(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const R=new Qt(this,this.j,a);let V=this.o;if(this.S&&(V?(V=_(V),A(V,this.S)):V=this.S),this.m!==null||this.O||(R.H=V,V=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Bu(this,R,h),f=Mt(this.I),ge(f,"RID",a),ge(f,"CVER",22),this.D&&ge(f,"X-HTTP-Session-Id",this.D),Yr(this,f),V&&(this.O?h="headers="+encodeURIComponent(String(xu(V)))+"&"+h:this.m&&Oo(f,this.m,V)),Vo(this.h,R),this.Ua&&ge(f,"TYPE","init"),this.P?(ge(f,"$req",h),ge(f,"SID","null"),R.T=!0,Po(R,f,null)):Po(R,f,h),this.G=2}}else this.G==3&&(a?Uu(this,a):this.i.length==0||wu(this.h)||Uu(this))};function Uu(a,h){var f;h?f=h.l:f=a.U++;const y=Mt(a.I);ge(y,"SID",a.K),ge(y,"RID",f),ge(y,"AID",a.T),Yr(a,y),a.m&&a.o&&Oo(y,a.m,a.o),f=new Qt(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Bu(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Vo(a.h,f),Po(f,y,h)}function Yr(a,h){a.H&&D(a.H,function(f,y){ge(h,y,f)}),a.l&&vu({},function(f,y){ge(h,y,f)})}function Bu(a,h,f){f=Math.min(a.i.length,f);var y=a.l?m(a.l.Na,a.l,a):null;e:{var R=a.i;let V=-1;for(;;){const z=["count="+f];V==-1?0<f?(V=R[0].g,z.push("ofs="+V)):V=0:z.push("ofs="+V);let pe=!0;for(let Fe=0;Fe<f;Fe++){let ce=R[Fe].g;const $e=R[Fe].map;if(ce-=V,0>ce)V=Math.max(0,R[Fe].g-100),pe=!1;else try{$m($e,z,"req"+ce+"_")}catch{y&&y($e)}}if(pe){y=z.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,y}function ju(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;we||b(),Me||(we(),Me=!0),rt.add(h,a),a.v=0}}function Lo(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=jr(m(a.Fa,a),$u(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,zu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=jr(m(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ye(10),ts(this),zu(this))};function Fo(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function zu(a){a.g=new Qt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Mt(a.qa);ge(h,"RID","rpc"),ge(h,"SID",a.K),ge(h,"AID",a.T),ge(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&ge(h,"TO",a.ja),ge(h,"TYPE","xmlhttp"),Yr(a,h),a.m&&a.o&&Oo(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Xi(Mt(h)),f.m=null,f.P=!0,mu(f,a)}n.Za=function(){this.C!=null&&(this.C=null,ts(this),Lo(this),Ye(19))};function rs(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function qu(a,h){var f=null;if(a.g==h){rs(a),Fo(a),a.g=null;var y=2}else if(Do(a.h,h))f=h.D,Iu(a.h,h),y=1;else return;if(a.G!=0){if(h.o)if(y==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var R=a.B;y=Hi(),P(y,new hu(y,f)),ns(a)}else ju(a);else if(R=h.s,R==3||R==0&&0<h.X||!(y==1&&Km(a,h)||y==2&&Lo(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),R){case 1:Cn(a,5);break;case 4:Cn(a,10);break;case 3:Cn(a,6);break;default:Cn(a,2)}}}function $u(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Cn(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),y=a.Xa;const R=!y;y=new Sn(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Qi(y,"https"),Xi(y),R?jm(y.toString(),f):zm(y.toString(),f)}else Ye(2);a.G=0,a.l&&a.l.sa(h),Hu(a),Fu(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ye(2)):(this.j.info("Failed to ping google.com"),Ye(1))};function Hu(a){if(a.G=0,a.ka=[],a.l){const h=Tu(a.h);(h.length!=0||a.i.length!=0)&&(x(a.ka,h),x(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function Gu(a,h,f){var y=f instanceof Sn?Mt(f):new Sn(f);if(y.g!="")h&&(y.g=h+"."+y.g),Yi(y,y.s);else{var R=l.location;y=R.protocol,h=h?h+"."+R.hostname:R.hostname,R=+R.port;var V=new Sn(null);y&&Qi(V,y),h&&(V.g=h),R&&Yi(V,R),f&&(V.l=f),y=V}return f=a.D,h=a.ya,f&&h&&ge(y,f,h),ge(y,"VER",a.la),Yr(a,y),y}function Wu(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ie(new Ji({eb:f})):new Ie(a.pa),h.Ha(a.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ku(){}n=Ku.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function is(){}is.prototype.g=function(a,h){return new lt(a,h)};function lt(a,h){De.call(this),this.g=new Lu(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!q(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!q(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Jn(this)}C(lt,De),lt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},lt.prototype.close=function(){Mo(this.g)},lt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Ot(a),a=f);h.i.push(new xm(h.Ya++,a)),h.G==3&&ns(h)},lt.prototype.N=function(){this.g.l=null,delete this.j,Mo(this.g),delete this.g,lt.aa.N.call(this)};function Qu(a){at.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}C(Qu,at);function Yu(){Co.call(this),this.status=1}C(Yu,Co);function Jn(a){this.g=a}C(Jn,Ku),Jn.prototype.ua=function(){P(this.g,"a")},Jn.prototype.ta=function(a){P(this.g,new Qu(a))},Jn.prototype.sa=function(a){P(this.g,new Yu)},Jn.prototype.ra=function(){P(this.g,"b")},is.prototype.createWebChannel=is.prototype.g,lt.prototype.send=lt.prototype.o,lt.prototype.open=lt.prototype.m,lt.prototype.close=lt.prototype.close,mf=function(){return new is},pf=function(){return Hi()},ff=An,ga={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Gi.NO_ERROR=0,Gi.TIMEOUT=8,Gi.HTTP_ERROR=6,ws=Gi,du.COMPLETE="complete",df=du,qe.EventType=mt,mt.OPEN="a",mt.CLOSE="b",mt.ERROR="c",mt.MESSAGE="d",De.prototype.listen=De.prototype.K,Zr=qe,Ie.prototype.listenOnce=Ie.prototype.L,Ie.prototype.getLastError=Ie.prototype.Ka,Ie.prototype.getLastErrorCode=Ie.prototype.Ba,Ie.prototype.getStatus=Ie.prototype.Z,Ie.prototype.getResponseJson=Ie.prototype.Oa,Ie.prototype.getResponseText=Ie.prototype.oa,Ie.prototype.send=Ie.prototype.ea,Ie.prototype.setWithCredentials=Ie.prototype.Ha,hf=Ie}).apply(typeof as<"u"?as:typeof self<"u"?self:typeof window<"u"?window:{});const Sc="@firebase/firestore",Cc="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Cr="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=new Ha("@firebase/firestore");function tr(){return Un.logLevel}function H(n,...e){if(Un.logLevel<=re.DEBUG){const t=e.map(il);Un.debug(`Firestore (${Cr}): ${n}`,...t)}}function qt(n,...e){if(Un.logLevel<=re.ERROR){const t=e.map(il);Un.error(`Firestore (${Cr}): ${n}`,...t)}}function yr(n,...e){if(Un.logLevel<=re.WARN){const t=e.map(il);Un.warn(`Firestore (${Cr}): ${n}`,...t)}}function il(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function K(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,gf(n,r,t)}function gf(n,e,t){let r=`FIRESTORE (${Cr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw qt(r),new Error(r)}function le(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||gf(e,i,r)}function Z(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends Ht{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ow{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(We.UNAUTHENTICATED))}shutdown(){}}class Mw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Lw{constructor(e){this.t=e,this.currentUser=We.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){le(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new un;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new un,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new un)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(le(typeof r.accessToken=="string",31837,{l:r}),new yf(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string",2055,{h:e}),new We(e)}}class Fw{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=We.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Uw{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Fw(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(We.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Bw{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,wt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){le(this.o===void 0,3512);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new kc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(le(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new kc(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=jw(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function ie(n,e){return n<e?-1:n>e?1:0}function ya(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const i=n.charAt(r),s=e.charAt(r);if(i!==s)return Wo(i)===Wo(s)?ie(i,s):Wo(i)?1:-1}return ie(n.length,e.length)}const zw=55296,qw=57343;function Wo(n){const e=n.charCodeAt(0);return e>=zw&&e<=qw}function _r(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc="__name__";class Ct{constructor(e,t,r){t===void 0?t=0:t>e.length&&K(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&K(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ct.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ct?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=Ct.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return ie(e.length,t.length)}static compareSegments(e,t){const r=Ct.isNumericId(e),i=Ct.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Ct.extractNumericId(e).compare(Ct.extractNumericId(t)):ya(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ln.fromString(e.substring(4,e.length-2))}}class fe extends Ct{construct(e,t,r){return new fe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new fe(t)}static emptyPath(){return new fe([])}}const $w=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends Ct{construct(e,t,r){return new Be(e,t,r)}static isValidIdentifier(e){return $w.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Rc}static keyField(){return new Be([Rc])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new j(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new j(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new j(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new j(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Be(t)}static emptyPath(){return new Be([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function _f(n,e,t){if(!t)throw new j(O.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Hw(n,e,t,r){if(e===!0&&r===!0)throw new j(O.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Pc(n){if(!W.isDocumentKey(n))throw new j(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function xc(n){if(W.isDocumentKey(n))throw new j(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function wf(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function io(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":K(12329,{type:typeof n})}function Vn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new j(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=io(n);throw new j(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Gw(n,e){if(e<=0)throw new j(O.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Re(n,e){const t={typeString:n};return e&&(t.value=e),t}function xi(n,e){if(!wf(n))throw new j(O.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(i&&typeof o!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new j(O.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc=-62135596800,Dc=1e6;class ye{static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Dc);return new ye(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Nc)throw new j(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Dc}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(xi(e,ye._jsonSchema))return new ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Nc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ye._jsonSchemaVersion="firestore/timestamp/1.0",ye._jsonSchema={type:Re("string",ye._jsonSchemaVersion),seconds:Re("number"),nanoseconds:Re("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const pi=-1;function Ww(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new ye(t+1,0):new ye(t,r));return new dn(i,W.empty(),e)}function Kw(n){return new dn(n.readTime,n.key,pi)}class dn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new dn(Q.min(),W.empty(),pi)}static max(){return new dn(Q.max(),W.empty(),pi)}}function Qw(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=W.comparator(n.documentKey,e.documentKey),t!==0?t:ie(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Xw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kr(n){if(n.code!==O.FAILED_PRECONDITION||n.message!==Yw)throw n;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof M?t:M.resolve(t)}catch(t){return M.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):M.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):M.reject(t)}static resolve(e){return new M((t,r)=>{t(e)})}static reject(e){return new M((t,r)=>{r(e)})}static waitFor(e){return new M((t,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&t()},u=>r(u))}),o=!0,s===i&&t()})}static or(e){let t=M.resolve(!1);for(const r of e)t=t.next(i=>i?M.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;t(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,t){return new M((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function Jw(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Rr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */const ol=-1;function Ni(n){return n==null}function Ls(n){return n===0&&1/n==-1/0}function Zw(n){return typeof n=="number"&&Number.isInteger(n)&&!Ls(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef="";function eE(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Vc(e)),e=tE(n.get(t),e);return Vc(e)}function tE(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case Ef:t+="";break;default:t+=s}}return t}function Vc(n){return n+Ef+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function _n(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function If(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,t){this.comparator=e,this.root=t||Ue.EMPTY}insert(e,t){return new Ee(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ls(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ls(this.root,e,this.comparator,!1)}getReverseIterator(){return new ls(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ls(this.root,e,this.comparator,!0)}}class ls{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Ue.RED,this.left=i??Ue.EMPTY,this.right=s??Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Ue(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Ue.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw K(27949);return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new Ue(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Mc(this.data.getIterator())}getIteratorFrom(e){return new Mc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Pe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Pe(this.comparator);return t.data=e,t}}class Mc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.fields=e,e.sort(Be.comparator)}static empty(){return new ht([])}unionWith(e){let t=new Pe(Be.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new ht(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return _r(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Tf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Tf("Invalid base64 string: "+s):s}}(e);return new je(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new je(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}je.EMPTY_BYTE_STRING=new je("");const nE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fn(n){if(le(!!n,39018),typeof n=="string"){let e=0;const t=nE.exec(n);if(le(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Te(n.seconds),nanos:Te(n.nanos)}}function Te(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function pn(n){return typeof n=="string"?je.fromBase64String(n):je.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf="server_timestamp",Af="__type__",bf="__previous_value__",Sf="__local_write_time__";function oo(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Af])==null?void 0:r.stringValue)===vf}function ao(n){const e=n.mapValue.fields[bf];return oo(e)?ao(e):e}function mi(n){const e=fn(n.mapValue.fields[Sf].timestampValue);return new ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,t,r,i,s,o,l,u,c,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d}}const Fs="(default)";class gi{constructor(e,t){this.projectId=e,this.database=t||Fs}static empty(){return new gi("","")}get isDefaultDatabase(){return this.database===Fs}isEqual(e){return e instanceof gi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf="__type__",iE="__max__",us={mapValue:{}},kf="__vector__",Us="value";function mn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?oo(n)?4:oE(n)?9007199254740991:sE(n)?10:11:K(28295,{value:n})}function Vt(n,e){if(n===e)return!0;const t=mn(n);if(t!==mn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return mi(n).isEqual(mi(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=fn(i.timestampValue),l=fn(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return pn(i.bytesValue).isEqual(pn(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return Te(i.geoPointValue.latitude)===Te(s.geoPointValue.latitude)&&Te(i.geoPointValue.longitude)===Te(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Te(i.integerValue)===Te(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Te(i.doubleValue),l=Te(s.doubleValue);return o===l?Ls(o)===Ls(l):isNaN(o)&&isNaN(l)}return!1}(n,e);case 9:return _r(n.arrayValue.values||[],e.arrayValue.values||[],Vt);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Oc(o)!==Oc(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Vt(o[u],l[u])))return!1;return!0}(n,e);default:return K(52216,{left:n})}}function yi(n,e){return(n.values||[]).find(t=>Vt(t,e))!==void 0}function wr(n,e){if(n===e)return 0;const t=mn(n),r=mn(e);if(t!==r)return ie(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ie(n.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Te(s.integerValue||s.doubleValue),u=Te(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return Lc(n.timestampValue,e.timestampValue);case 4:return Lc(mi(n),mi(e));case 5:return ya(n.stringValue,e.stringValue);case 6:return function(s,o){const l=pn(s),u=pn(o);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=ie(l[c],u[c]);if(d!==0)return d}return ie(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ie(Te(s.latitude),Te(o.latitude));return l!==0?l:ie(Te(s.longitude),Te(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Fc(n.arrayValue,e.arrayValue);case 10:return function(s,o){var m,g,C,k;const l=s.fields||{},u=o.fields||{},c=(m=l[Us])==null?void 0:m.arrayValue,d=(g=u[Us])==null?void 0:g.arrayValue,p=ie(((C=c==null?void 0:c.values)==null?void 0:C.length)||0,((k=d==null?void 0:d.values)==null?void 0:k.length)||0);return p!==0?p:Fc(c,d)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===us.mapValue&&o===us.mapValue)return 0;if(s===us.mapValue)return 1;if(o===us.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=ya(u[p],d[p]);if(m!==0)return m;const g=wr(l[u[p]],c[d[p]]);if(g!==0)return g}return ie(u.length,d.length)}(n.mapValue,e.mapValue);default:throw K(23264,{he:t})}}function Lc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ie(n,e);const t=fn(n),r=fn(e),i=ie(t.seconds,r.seconds);return i!==0?i:ie(t.nanos,r.nanos)}function Fc(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=wr(t[i],r[i]);if(s)return s}return ie(t.length,r.length)}function Er(n){return _a(n)}function _a(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=fn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return pn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return W.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=_a(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${_a(t.fields[o])}`;return i+"}"}(n.mapValue):K(61005,{value:n})}function Es(n){switch(mn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ao(n);return e?16+Es(e):16;case 5:return 2*n.stringValue.length;case 6:return pn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Es(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return _n(r.fields,(s,o)=>{i+=s.length+Es(o)}),i}(n.mapValue);default:throw K(13486,{value:n})}}function Bs(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function wa(n){return!!n&&"integerValue"in n}function al(n){return!!n&&"arrayValue"in n}function Uc(n){return!!n&&"nullValue"in n}function Bc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Is(n){return!!n&&"mapValue"in n}function sE(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Cf])==null?void 0:r.stringValue)===kf}function si(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return _n(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=si(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=si(n.arrayValue.values[t]);return e}return{...n}}function oE(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===iE}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.value=e}static empty(){return new Xe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Is(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=si(t)}setAll(e){let t=Be.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=l.popLast()}o?r[l.lastSegment()]=si(o):i.push(l.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Is(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Vt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Is(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){_n(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Xe(si(this.value))}}function Rf(n){const e=[];return _n(n.fields,(t,r)=>{const i=new Be([t]);if(Is(r)){const s=Rf(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new ht(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ir{constructor(e,t){this.position=e,this.inclusive=t}}function jc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),t.key):r=wr(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function zc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Vt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class _i{constructor(e,t="asc"){this.field=e,this.dir=t}}function aE(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Pf{}class ke extends Pf{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new uE(e,t,r):t==="array-contains"?new dE(e,r):t==="in"?new fE(e,r):t==="not-in"?new pE(e,r):t==="array-contains-any"?new mE(e,r):new ke(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new cE(e,r):new hE(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(wr(t,this.value)):t!==null&&mn(this.value)===mn(t)&&this.matchesComparison(wr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class vt extends Pf{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new vt(e,t)}matches(e){return xf(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function xf(n){return n.op==="and"}function Nf(n){return lE(n)&&xf(n)}function lE(n){for(const e of n.filters)if(e instanceof vt)return!1;return!0}function Ea(n){if(n instanceof ke)return n.field.canonicalString()+n.op.toString()+Er(n.value);if(Nf(n))return n.filters.map(e=>Ea(e)).join(",");{const e=n.filters.map(t=>Ea(t)).join(",");return`${n.op}(${e})`}}function Df(n,e){return n instanceof ke?function(r,i){return i instanceof ke&&r.op===i.op&&r.field.isEqual(i.field)&&Vt(r.value,i.value)}(n,e):n instanceof vt?function(r,i){return i instanceof vt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Df(o,i.filters[l]),!0):!1}(n,e):void K(19439)}function Vf(n){return n instanceof ke?function(t){return`${t.field.canonicalString()} ${t.op} ${Er(t.value)}`}(n):n instanceof vt?function(t){return t.op.toString()+" {"+t.getFilters().map(Vf).join(" ,")+"}"}(n):"Filter"}class uE extends ke{constructor(e,t,r){super(e,t,r),this.key=W.fromName(r.referenceValue)}matches(e){const t=W.comparator(e.key,this.key);return this.matchesComparison(t)}}class cE extends ke{constructor(e,t){super(e,"in",t),this.keys=Of("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class hE extends ke{constructor(e,t){super(e,"not-in",t),this.keys=Of("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Of(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>W.fromName(r.referenceValue))}class dE extends ke{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return al(t)&&yi(t.arrayValue,this.value)}}class fE extends ke{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&yi(this.value.arrayValue,t)}}class pE extends ke{constructor(e,t){super(e,"not-in",t)}matches(e){if(yi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!yi(this.value.arrayValue,t)}}class mE extends ke{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!al(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>yi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e,t=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function qc(n,e=null,t=[],r=[],i=null,s=null,o=null){return new gE(n,e,t,r,i,s,o)}function ll(n){const e=Z(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ea(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ni(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Er(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Er(r)).join(",")),e.Te=t}return e.Te}function ul(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!aE(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Df(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!zc(n.startAt,e.startAt)&&zc(n.endAt,e.endAt)}function Ia(n){return W.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,t=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function yE(n,e,t,r,i,s,o,l){return new zn(n,e,t,r,i,s,o,l)}function cl(n){return new zn(n)}function $c(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function hl(n){return n.collectionGroup!==null}function hr(n){const e=Z(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Pe(Be.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new _i(s,r))}),t.has(Be.keyField().canonicalString())||e.Ie.push(new _i(Be.keyField(),r))}return e.Ie}function Pt(n){const e=Z(n);return e.Ee||(e.Ee=_E(e,hr(n))),e.Ee}function _E(n,e){if(n.limitType==="F")return qc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new _i(i.field,s)});const t=n.endAt?new Ir(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ir(n.startAt.position,n.startAt.inclusive):null;return qc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ta(n,e){const t=n.filters.concat([e]);return new zn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function js(n,e,t){return new zn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function lo(n,e){return ul(Pt(n),Pt(e))&&n.limitType===e.limitType}function Mf(n){return`${ll(Pt(n))}|lt:${n.limitType}`}function nr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Vf(i)).join(", ")}]`),Ni(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Er(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Er(i)).join(",")),`Target(${r})`}(Pt(n))}; limitType=${n.limitType})`}function uo(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of hr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=jc(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,hr(r),i)||r.endAt&&!function(o,l,u){const c=jc(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,hr(r),i))}(n,e)}function wE(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Lf(n){return(e,t)=>{let r=!1;for(const i of hr(n)){const s=EE(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function EE(n,e,t){const r=n.field.isKeyField()?W.comparator(e.key,t.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?wr(u,c):K(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return K(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){_n(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return If(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE=new Ee(W.comparator);function $t(){return IE}const Ff=new Ee(W.comparator);function ei(...n){let e=Ff;for(const t of n)e=e.insert(t.key,t);return e}function Uf(n){let e=Ff;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Nn(){return oi()}function Bf(){return oi()}function oi(){return new qn(n=>n.toString(),(n,e)=>n.isEqual(e))}const TE=new Ee(W.comparator),vE=new Pe(W.comparator);function se(...n){let e=vE;for(const t of n)e=e.add(t);return e}const AE=new Pe(ie);function bE(){return AE}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ls(e)?"-0":e}}function jf(n){return{integerValue:""+n}}function SE(n,e){return Zw(e)?jf(e):dl(n,e)}/**
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
 */class co{constructor(){this._=void 0}}function CE(n,e,t){return n instanceof wi?function(i,s){const o={fields:{[Af]:{stringValue:vf},[Sf]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&oo(s)&&(s=ao(s)),s&&(o.fields[bf]=s),{mapValue:o}}(t,e):n instanceof Ei?qf(n,e):n instanceof Ii?$f(n,e):function(i,s){const o=zf(i,s),l=Hc(o)+Hc(i.Ae);return wa(o)&&wa(i.Ae)?jf(l):dl(i.serializer,l)}(n,e)}function kE(n,e,t){return n instanceof Ei?qf(n,e):n instanceof Ii?$f(n,e):t}function zf(n,e){return n instanceof zs?function(r){return wa(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class wi extends co{}class Ei extends co{constructor(e){super(),this.elements=e}}function qf(n,e){const t=Hf(e);for(const r of n.elements)t.some(i=>Vt(i,r))||t.push(r);return{arrayValue:{values:t}}}class Ii extends co{constructor(e){super(),this.elements=e}}function $f(n,e){let t=Hf(e);for(const r of n.elements)t=t.filter(i=>!Vt(i,r));return{arrayValue:{values:t}}}class zs extends co{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Hc(n){return Te(n.integerValue||n.doubleValue)}function Hf(n){return al(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(e,t){this.field=e,this.transform=t}}function PE(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Ei&&i instanceof Ei||r instanceof Ii&&i instanceof Ii?_r(r.elements,i.elements,Vt):r instanceof zs&&i instanceof zs?Vt(r.Ae,i.Ae):r instanceof wi&&i instanceof wi}(n.transform,e.transform)}class xE{constructor(e,t){this.version=e,this.transformResults=t}}class et{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new et}static exists(e){return new et(void 0,e)}static updateTime(e){return new et(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ts(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ho{}function Gf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new fl(n.key,et.none()):new Di(n.key,n.data,et.none());{const t=n.data,r=Xe.empty();let i=new Pe(Be.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new wn(n.key,r,new ht(i.toArray()),et.none())}}function NE(n,e,t){n instanceof Di?function(i,s,o){const l=i.value.clone(),u=Wc(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):n instanceof wn?function(i,s,o){if(!Ts(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Wc(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Wf(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function ai(n,e,t,r){return n instanceof Di?function(s,o,l,u){if(!Ts(s.precondition,o))return l;const c=s.value.clone(),d=Kc(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof wn?function(s,o,l,u){if(!Ts(s.precondition,o))return l;const c=Kc(s.fieldTransforms,u,o),d=o.data;return d.setAll(Wf(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(s,o,l){return Ts(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(n,e,t)}function DE(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=zf(r.transform,i||null);s!=null&&(t===null&&(t=Xe.empty()),t.set(r.field,s))}return t||null}function Gc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&_r(r,i,(s,o)=>PE(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Di extends ho{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class wn extends ho{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Wf(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Wc(n,e,t){const r=new Map;le(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,kE(o,l,t[i]))}return r}function Kc(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,CE(s,o,e))}return r}class fl extends ho{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Kf extends ho{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&NE(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ai(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ai(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Bf();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=t.has(i.key)?null:l;const u=Gf(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),se())}isEqual(e){return this.batchId===e.batchId&&_r(this.mutations,e.mutations,(t,r)=>Gc(t,r))&&_r(this.baseMutations,e.baseMutations,(t,r)=>Gc(t,r))}}class pl{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){le(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return TE}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new pl(e,t,r,i)}}/**
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
 */class OE{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ME{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se,oe;function Qf(n){switch(n){case O.OK:return K(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return K(15467,{code:n})}}function Yf(n){if(n===void 0)return qt("GRPC error has no .code"),O.UNKNOWN;switch(n){case Se.OK:return O.OK;case Se.CANCELLED:return O.CANCELLED;case Se.UNKNOWN:return O.UNKNOWN;case Se.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Se.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Se.INTERNAL:return O.INTERNAL;case Se.UNAVAILABLE:return O.UNAVAILABLE;case Se.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Se.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Se.NOT_FOUND:return O.NOT_FOUND;case Se.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Se.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Se.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Se.ABORTED:return O.ABORTED;case Se.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Se.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Se.DATA_LOSS:return O.DATA_LOSS;default:return K(39323,{code:n})}}(oe=Se||(Se={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function LE(){return new TextEncoder}/**
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
 */const FE=new ln([4294967295,4294967295],0);function Qc(n){const e=LE().encode(n),t=new cf;return t.update(e),new Uint8Array(t.digest())}function Yc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ln([t,r],0),new ln([i,s],0)]}class ml{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ti(`Invalid padding: ${t}`);if(r<0)throw new ti(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ti(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ti(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=ln.fromNumber(this.ge)}ye(e,t,r){let i=e.add(t.multiply(ln.fromNumber(r)));return i.compare(FE)===1&&(i=new ln([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Qc(e),[r,i]=Yc(t);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new ml(s,i,t);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const t=Qc(e),[r,i]=Yc(t);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ti extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Vi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new fo(Q.min(),i,new Ee(ie),$t(),se())}}class Vi{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Vi(r,t,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,t,r,i){this.be=e,this.removedTargetIds=t,this.key=r,this.De=i}}class Xf{constructor(e,t){this.targetId=e,this.Ce=t}}class Jf{constructor(e,t,r=je.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Xc{constructor(){this.ve=0,this.Fe=Jc(),this.Me=je.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=se(),t=se(),r=se();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:K(38017,{changeType:s})}}),new Vi(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Jc()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,le(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class UE{constructor(e){this.Ge=e,this.ze=new Map,this.je=$t(),this.Je=cs(),this.He=cs(),this.Ye=new Ee(ie)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:K(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,i)=>{this.rt(i)&&t(i)})}st(e){const t=e.targetId,r=e.Ce.count,i=this.ot(t);if(i){const s=i.target;if(Ia(s))if(r===0){const o=new W(s.path);this.et(t,o,Oe.newNoDocument(o,Q.min()))}else le(r===1,20013,{expectedCount:r});else{const o=this._t(t);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(t);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,c)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,l;try{o=pn(r).toUint8Array()}catch(u){if(u instanceof Tf)return yr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new ml(o,i,s)}catch(u){return yr(u instanceof ti?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(t,s,null),i++)}),i}Tt(e){const t=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&Ia(l.target)){const u=new W(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,Oe.newNoDocument(u,e))}s.Be&&(t.set(o,s.ke()),s.qe())}});let r=se();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new fo(e,t,this.Ye,this.je,r);return this.je=$t(),this.Je=cs(),this.He=cs(),this.Ye=new Ee(ie),i}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,t)?i.Qe(t,1):i.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Xc,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Pe(ie),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Pe(ie),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||H("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Xc),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function cs(){return new Ee(W.comparator)}function Jc(){return new Ee(W.comparator)}const BE={asc:"ASCENDING",desc:"DESCENDING"},jE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zE={and:"AND",or:"OR"};class qE{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function va(n,e){return n.useProto3Json||Ni(e)?e:{value:e}}function qs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Zf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function $E(n,e){return qs(n,e.toTimestamp())}function ft(n){return le(!!n,49232),Q.fromTimestamp(function(t){const r=fn(t);return new ye(r.seconds,r.nanos)}(n))}function gl(n,e){return Aa(n,e).canonicalString()}function Aa(n,e){const t=function(i){return new fe(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function ep(n){const e=fe.fromString(n);return le(op(e),10190,{key:e.toString()}),e}function $s(n,e){return gl(n.databaseId,e.path)}function li(n,e){const t=ep(e);if(t.get(1)!==n.databaseId.projectId)throw new j(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new j(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new W(np(t))}function tp(n,e){return gl(n.databaseId,e)}function HE(n){const e=ep(n);return e.length===4?fe.emptyPath():np(e)}function ba(n){return new fe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function np(n){return le(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Zc(n,e,t){return{name:$s(n,e),fields:t.value.mapValue.fields}}function GE(n,e){return"found"in e?function(r,i){le(!!i.found,43571),i.found.name,i.found.updateTime;const s=li(r,i.found.name),o=ft(i.found.updateTime),l=i.found.createTime?ft(i.found.createTime):Q.min(),u=new Xe({mapValue:{fields:i.found.fields}});return Oe.newFoundDocument(s,o,l,u)}(n,e):"missing"in e?function(r,i){le(!!i.missing,3894),le(!!i.readTime,22933);const s=li(r,i.missing),o=ft(i.readTime);return Oe.newNoDocument(s,o)}(n,e):K(7234,{result:e})}function WE(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(le(d===void 0||typeof d=="string",58123),je.fromBase64String(d||"")):(le(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),je.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?O.UNKNOWN:Yf(c.code);return new j(d,c.message||"")}(o);t=new Jf(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=li(n,r.document.name),s=ft(r.document.updateTime),o=r.document.createTime?ft(r.document.createTime):Q.min(),l=new Xe({mapValue:{fields:r.document.fields}}),u=Oe.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];t=new vs(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=li(n,r.document),s=r.readTime?ft(r.readTime):Q.min(),o=Oe.newNoDocument(i,s),l=r.removedTargetIds||[];t=new vs([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=li(n,r.document),s=r.removedTargetIds||[];t=new vs([],s,i,null)}else{if(!("filter"in e))return K(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new ME(i,s),l=r.targetId;t=new Xf(l,o)}}return t}function rp(n,e){let t;if(e instanceof Di)t={update:Zc(n,e.key,e.value)};else if(e instanceof fl)t={delete:$s(n,e.key)};else if(e instanceof wn)t={update:Zc(n,e.key,e.data),updateMask:nI(e.fieldMask)};else{if(!(e instanceof Kf))return K(16599,{Vt:e.type});t={verify:$s(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof wi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ei)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ii)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof zs)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw K(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:$E(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K(27497)}(n,e.precondition)),t}function KE(n,e){return n&&n.length>0?(le(e!==void 0,14353),n.map(t=>function(i,s){let o=i.updateTime?ft(i.updateTime):ft(s);return o.isEqual(Q.min())&&(o=ft(s)),new xE(o,i.transformResults||[])}(t,e))):[]}function QE(n,e){return{documents:[tp(n,e.path)]}}function YE(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=tp(n,i);const s=function(c){if(c.length!==0)return sp(vt.create(c,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:rr(m.field),direction:ZE(m.dir)}}(d))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=va(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:t,parent:i}}function XE(n){let e=HE(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){le(r===1,65062);const d=t.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];t.where&&(s=function(p){const m=ip(p);return m instanceof vt&&Nf(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(m=>function(C){return new _i(ir(C.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(t.orderBy));let l=null;t.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Ni(m)?null:m}(t.limit));let u=null;t.startAt&&(u=function(p){const m=!!p.before,g=p.values||[];return new Ir(g,m)}(t.startAt));let c=null;return t.endAt&&(c=function(p){const m=!p.before,g=p.values||[];return new Ir(g,m)}(t.endAt)),yE(e,i,o,s,l,"F",u,c)}function JE(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ip(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ir(t.unaryFilter.field);return ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ir(t.unaryFilter.field);return ke.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ir(t.unaryFilter.field);return ke.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ir(t.unaryFilter.field);return ke.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}}(n):n.fieldFilter!==void 0?function(t){return ke.create(ir(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return vt.create(t.compositeFilter.filters.map(r=>ip(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K(1026)}}(t.compositeFilter.op))}(n):K(30097,{filter:n})}function ZE(n){return BE[n]}function eI(n){return jE[n]}function tI(n){return zE[n]}function rr(n){return{fieldPath:n.canonicalString()}}function ir(n){return Be.fromServerFormat(n.fieldPath)}function sp(n){return n instanceof ke?function(t){if(t.op==="=="){if(Bc(t.value))return{unaryFilter:{field:rr(t.field),op:"IS_NAN"}};if(Uc(t.value))return{unaryFilter:{field:rr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Bc(t.value))return{unaryFilter:{field:rr(t.field),op:"IS_NOT_NAN"}};if(Uc(t.value))return{unaryFilter:{field:rr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rr(t.field),op:eI(t.op),value:t.value}}}(n):n instanceof vt?function(t){const r=t.getFilters().map(i=>sp(i));return r.length===1?r[0]:{compositeFilter:{op:tI(t.op),filters:r}}}(n):K(54877,{filter:n})}function nI(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function op(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,t,r,i,s=Q.min(),o=Q.min(),l=je.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new rn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e){this.yt=e}}function iI(n){const e=XE({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?js(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(){this.Cn=new oI}addToCollectionParentIndex(e,t){return this.Cn.add(t),M.resolve()}getCollectionParents(e,t){return M.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return M.resolve()}deleteFieldIndex(e,t){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,t){return M.resolve()}getDocumentsMatchingTarget(e,t){return M.resolve(null)}getIndexType(e,t){return M.resolve(0)}getFieldIndexes(e,t){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,t){return M.resolve(dn.min())}getMinOffsetFromCollectionGroup(e,t){return M.resolve(dn.min())}updateCollectionGroup(e,t,r){return M.resolve()}updateIndexEntries(e,t){return M.resolve()}}class oI{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Pe(fe.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Pe(fe.comparator)).toArray()}}/**
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
 */const eh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ap=41943040;class Ze{static withCacheSize(e){return new Ze(e,Ze.DEFAULT_COLLECTION_PERCENTILE,Ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ze.DEFAULT_COLLECTION_PERCENTILE=10,Ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ze.DEFAULT=new Ze(ap,Ze.DEFAULT_COLLECTION_PERCENTILE,Ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ze.DISABLED=new Ze(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Tr(0)}static cr(){return new Tr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th="LruGarbageCollector",aI=1048576;function nh([n,e],[t,r]){const i=ie(n,t);return i===0?ie(e,r):i}class lI{constructor(e){this.Ir=e,this.buffer=new Pe(nh),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();nh(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class uI{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){H(th,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Rr(t)?H(th,"Ignoring IndexedDB error during garbage collection: ",t):await kr(t)}await this.Vr(3e5)})}}class cI{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return M.resolve(so.ce);const r=new lI(t);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(eh)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),eh):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,i,s,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,t))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),tr()<=re.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function hI(n,e){return new cI(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(){this.changes=new qn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Oe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?M.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class fI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&ai(r.mutation,i,ht.empty(),ye.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,t,r=se()){const i=Nn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=ei();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Nn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,se()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,r,i){let s=$t();const o=oi(),l=function(){return oi()}();return t.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof wn)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),ai(d.mutation,c,d.mutation.getFieldMask(),ye.now())):o.set(c.key,ht.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),t.forEach((c,d)=>l.set(c,new fI(d,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,t){const r=oi();let i=new Ee((o,l)=>o-l),s=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=t.get(u);if(c===null)return;let d=r.get(u)||ht.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||se()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=Bf();d.forEach(m=>{if(!s.has(m)){const g=Gf(t.get(m),r.get(m));g!==null&&p.set(m,g),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):hl(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):M.resolve(Nn());let l=pi,u=s;return o.next(c=>M.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,se())).next(d=>({batchId:l,changes:Uf(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new W(t)).next(r=>{let i=ei();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=ei();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const c=function(p,m){return new zn(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Oe.newInvalidDocument(d)))});let l=ei();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&ai(d.mutation,c,ht.empty(),ye.now()),uo(t,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return M.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:ft(i.createTime)}}(t)),M.resolve()}getNamedQuery(e,t){return M.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(i){return{name:i.name,query:iI(i.bundledQuery),readTime:ft(i.readTime)}}(t)),M.resolve()}}/**
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
 */class gI{constructor(){this.overlays=new Ee(W.comparator),this.qr=new Map}getOverlay(e,t){return M.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Nn();return M.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.St(e,t,s)}),M.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),M.resolve()}getOverlaysForCollection(e,t,r){const i=Nn(),s=t.length+1,o=new W(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new Ee((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Nn(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Nn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return M.resolve(l)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new OE(t,r));let s=this.qr.get(t);s===void 0&&(s=se(),this.qr.set(t,s)),this.qr.set(t,s.add(r.key))}}/**
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
 */class yI{constructor(){this.sessionToken=je.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(){this.Qr=new Pe(Ve.$r),this.Ur=new Pe(Ve.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new Ve(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Gr(new Ve(e,t))}zr(e,t){e.forEach(r=>this.removeReference(r,t))}jr(e){const t=new W(new fe([])),r=new Ve(t,e),i=new Ve(t,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new W(new fe([])),r=new Ve(t,e),i=new Ve(t,e+1);let s=se();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new Ve(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ve{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return W.comparator(e.key,t.key)||ie(e.Yr,t.Yr)}static Kr(e,t){return ie(e.Yr,t.Yr)||W.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Pe(Ve.$r)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new VE(s,t,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new Ve(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,t){return M.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.ei(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?ol:this.tr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ve(t,0),i=new Ve(t,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const l=this.Xr(o.Yr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Pe(ie);return t.forEach(i=>{const s=new Ve(i,0),o=new Ve(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],l=>{r=r.add(l.Yr)})}),M.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const o=new Ve(new W(s),0);let l=new Pe(ie);return this.Zr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Yr)),!0)},o),M.resolve(this.ti(l))}ti(e){const t=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){le(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return M.forEach(t.mutations,i=>{const s=new Ve(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,t){const r=new Ve(t,0),i=this.Zr.firstAfterOrEqual(r);return M.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e){this.ri=e,this.docs=function(){return new Ee(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return M.resolve(r?r.document.mutableCopy():Oe.newInvalidDocument(t))}getEntries(e,t){let r=$t();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Oe.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=$t();const o=t.path,l=new W(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Qw(Kw(d),r)<=0||(i.has(d.key)||uo(t,d))&&(s=s.insert(d.key,d.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,t,r,i){K(9500)}ii(e,t){return M.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new EI(this)}getSize(e){return M.resolve(this.size)}}class EI extends dI{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),M.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e){this.persistence=e,this.si=new qn(t=>ll(t),ul),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.oi=0,this._i=new yl,this.targetCount=0,this.ai=Tr.ur()}forEachTarget(e,t){return this.si.forEach((r,i)=>t(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),M.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Tr(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,M.resolve()}updateTargetData(e,t){return this.Pr(t),M.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return M.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),M.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),M.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return M.resolve(r)}containsKey(e,t){return M.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,t){this.ui={},this.overlays={},this.ci=new so(0),this.li=!1,this.li=!0,this.hi=new yI,this.referenceDelegate=e(this),this.Pi=new II(this),this.indexManager=new sI,this.remoteDocumentCache=function(i){return new wI(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new rI(t),this.Ii=new mI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new gI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new _I(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){H("MemoryPersistence","Starting transaction:",e);const i=new TI(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,t){return M.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,t)))}}class TI extends Xw{constructor(e){super(),this.currentSequenceNumber=e}}class _l{constructor(e){this.persistence=e,this.Ri=new yl,this.Vi=null}static mi(e){return new _l(e)}get fi(){if(this.Vi)return this.Vi;throw K(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),M.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),M.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.fi,r=>{const i=W.fromPath(r);return this.gi(e,i).next(s=>{s||t.removeEntry(i,Q.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return M.or([()=>M.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Hs{constructor(e,t){this.persistence=e,this.pi=new qn(r=>eE(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=hI(this,t)}static mi(e,t){return new Hs(e,t)}Ei(){}di(e){return M.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}wr(e){let t=0;return this.pr(e,r=>{t++}).next(()=>t)}pr(e,t){return M.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?M.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,t).next(l=>{l||(r++,s.removeEntry(o,Q.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),M.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),M.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Es(e.data.value)),t}br(e,t,r){return M.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.pi.get(t);return M.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=i}static As(e,t){let r=se(),i=se();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new wl(e,t.fromCache,r,i)}}/**
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
 */class vI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return pg()?8:Jw(Ke())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.ys(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new vI;return this.Ss(e,t,o).next(l=>{if(s.result=l,this.Vs)return this.bs(e,t,o,l.size)})}).next(()=>s.result)}bs(e,t,r,i){return r.documentReadCount<this.fs?(tr()<=re.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",nr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),M.resolve()):(tr()<=re.DEBUG&&H("QueryEngine","Query:",nr(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(tr()<=re.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",nr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Pt(t))):M.resolve())}ys(e,t){if($c(t))return M.resolve(null);let r=Pt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=js(t,null,"F"),r=Pt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=se(...s);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ds(t,l);return this.Cs(t,c,o,u.readTime)?this.ys(e,js(t,null,"F")):this.vs(e,c,t,u)}))})))}ws(e,t,r,i){return $c(t)||i.isEqual(Q.min())?M.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(t,s);return this.Cs(t,o,r,i)?M.resolve(null):(tr()<=re.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),nr(t)),this.vs(e,o,t,Ww(i,pi)).next(l=>l))})}Ds(e,t){let r=new Pe(Lf(e));return t.forEach((i,s)=>{uo(e,s)&&(r=r.add(s))}),r}Cs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,t,r){return tr()<=re.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",nr(t)),this.ps.getDocumentsMatchingQuery(e,t,dn.min(),r)}vs(e,t,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El="LocalStore",bI=3e8;class SI{constructor(e,t,r,i){this.persistence=e,this.Fs=t,this.serializer=i,this.Ms=new Ee(ie),this.xs=new qn(s=>ll(s),ul),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new pI(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function CI(n,e,t,r){return new SI(n,e,t,r)}async function up(n,e){const t=Z(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Bs(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=se();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return t.localDocuments.getDocuments(r,u).next(c=>({Ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function kI(n,e){const t=Z(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let g=M.resolve();return m.forEach(C=>{g=g.next(()=>d.getEntry(u,C)).next(k=>{const x=c.docVersions.get(C);le(x!==null,48541),k.version.compareTo(x)<0&&(p.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),d.addEntry(k)))})}),g.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=se();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function cp(n){const e=Z(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function RI(n,e){const t=Z(n),r=e.snapshotVersion;let i=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Ns.newChangeBuffer({trackRemovals:!0});i=t.Ms;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(t.Pi.removeMatchingKeys(s,d.removedDocuments,p).next(()=>t.Pi.addMatchingKeys(s,d.addedDocuments,p)));let g=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?g=g.withResumeToken(je.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):d.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(d.resumeToken,r)),i=i.insert(p,g),function(k,x,N){return k.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=bI?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(m,g,d)&&l.push(t.Pi.updateTargetData(s,g))});let u=$t(),c=se();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(PI(s,o,e.documentUpdates).next(d=>{u=d.ks,c=d.qs})),!r.isEqual(Q.min())){const d=t.Pi.getLastRemoteSnapshotVersion(s).next(p=>t.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(t.Ms=i,s))}function PI(n,e,t){let r=se(),i=se();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=$t();return t.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Q.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H(El,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{ks:o,qs:i}})}function xI(n,e){const t=Z(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ol),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function NI(n,e){const t=Z(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Pi.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):t.Pi.allocateTargetId(r).next(o=>(i=new rn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r})}async function Sa(n,e,t){const r=Z(n),i=r.Ms.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Rr(o))throw o;H(El,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function rh(n,e,t){const r=Z(n);let i=Q.min(),s=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=Z(u),m=p.xs.get(d);return m!==void 0?M.resolve(p.Ms.get(m)):p.Pi.getTargetData(c,d)}(r,o,Pt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,t?i:Q.min(),t?s:se())).next(l=>(DI(r,wE(e),l),{documents:l,Qs:s})))}function DI(n,e,t){let r=n.Os.get(e)||Q.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Os.set(e,r)}class ih{constructor(){this.activeTargetIds=bE()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class VI{constructor(){this.Mo=new ih,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new ih,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh="ConnectivityMonitor";class oh{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){H(sh,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){H(sh,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let hs=null;function Ca(){return hs===null?hs=function(){return 268435456+Math.round(2147483648*Math.random())}():hs++,"0x"+hs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko="RestConnection",MI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class LI{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Fs?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,t,r,i,s){const o=Ca(),l=this.zo(e,t.toUriEncodedString());H(Ko,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,i,s);const{host:c}=new URL(l),d=Ar(c);return this.Jo(e,l,u,r,d).then(p=>(H(Ko,`Received RPC '${e}' ${o}: `,p),p),p=>{throw yr(Ko,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Ho(e,t,r,i,s,o){return this.Go(e,t,r,i,s)}jo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Cr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,t){const r=MI[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge="WebChannelConnection";class UI extends LI{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,i,s){const o=Ca();return new Promise((l,u)=>{const c=new hf;c.setWithCredentials(!0),c.listenOnce(df.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ws.NO_ERROR:const p=c.getResponseJson();H(Ge,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case ws.TIMEOUT:H(Ge,`RPC '${e}' ${o} timed out`),u(new j(O.DEADLINE_EXCEEDED,"Request time out"));break;case ws.HTTP_ERROR:const m=c.getStatus();if(H(Ge,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const C=g==null?void 0:g.error;if(C&&C.status&&C.message){const k=function(N){const q=N.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(q)>=0?q:O.UNKNOWN}(C.status);u(new j(k,C.message))}else u(new j(O.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new j(O.UNAVAILABLE,"Connection failed."));break;default:K(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{H(Ge,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);H(Ge,`RPC '${e}' ${o} sending request:`,i),c.send(t,"POST",d,r,15)})}T_(e,t,r){const i=Ca(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=mf(),l=pf(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const d=s.join("");H(Ge,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);this.I_(p);let m=!1,g=!1;const C=new FI({Yo:x=>{g?H(Ge,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(m||(H(Ge,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),H(Ge,`RPC '${e}' stream ${i} sending:`,x),p.send(x))},Zo:()=>p.close()}),k=(x,N,q)=>{x.listen(N,F=>{try{q(F)}catch(G){setTimeout(()=>{throw G},0)}})};return k(p,Zr.EventType.OPEN,()=>{g||(H(Ge,`RPC '${e}' stream ${i} transport opened.`),C.o_())}),k(p,Zr.EventType.CLOSE,()=>{g||(g=!0,H(Ge,`RPC '${e}' stream ${i} transport closed`),C.a_(),this.E_(p))}),k(p,Zr.EventType.ERROR,x=>{g||(g=!0,yr(Ge,`RPC '${e}' stream ${i} transport errored. Name:`,x.name,"Message:",x.message),C.a_(new j(O.UNAVAILABLE,"The operation could not be completed")))}),k(p,Zr.EventType.MESSAGE,x=>{var N;if(!g){const q=x.data[0];le(!!q,16349);const F=q,G=(F==null?void 0:F.error)||((N=F[0])==null?void 0:N.error);if(G){H(Ge,`RPC '${e}' stream ${i} received error:`,G);const $=G.status;let D=function(I){const A=Se[I];if(A!==void 0)return Yf(A)}($),v=G.message;D===void 0&&(D=O.INTERNAL,v="Unknown error status: "+$+" with message "+G.message),g=!0,C.a_(new j(D,v)),p.close()}else H(Ge,`RPC '${e}' stream ${i} received:`,q),C.u_(q)}}),k(l,ff.STAT_EVENT,x=>{x.stat===ga.PROXY?H(Ge,`RPC '${e}' stream ${i} detected buffering proxy`):x.stat===ga.NOPROXY&&H(Ge,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.__()},0),C}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function Qo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(n){return new qE(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah="PersistentStream";class hp{constructor(e,t,r,i,s,o,l,u){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Il(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===O.RESOURCE_EXHAUSTED?(qt(t.toString()),qt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===t&&this.G_(r,i)},r=>{e(()=>{const i=new j(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return H(ah,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(H(ah,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class BI extends hp{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=WE(this.serializer,e),r=function(s){if(!("targetChange"in s))return Q.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?ft(o.readTime):Q.min()}(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=ba(this.serializer),t.addTarget=function(s,o){let l;const u=o.target;if(l=Ia(u)?{documents:QE(s,u)}:{query:YE(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Zf(s,o.resumeToken);const c=va(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Q.min())>0){l.readTime=qs(s,o.snapshotVersion.toTimestamp());const c=va(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=JE(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=ba(this.serializer),t.removeTarget=e,this.q_(t)}}class jI extends hp{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return le(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,le(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){le(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=KE(e.writeResults,e.commitTime),r=ft(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=ba(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>rp(this.serializer,r))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{}class qI extends zI{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new j(O.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,Aa(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new j(O.UNKNOWN,s.toString())})}Ho(e,t,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,Aa(t,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new j(O.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class $I{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
 */const Bn="RemoteStore";class HI{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{$n(this)&&(H(Bn,"Restarting streams for network reachability change."),await async function(u){const c=Z(u);c.Ea.add(4),await Oi(c),c.Ra.set("Unknown"),c.Ea.delete(4),await mo(c)}(this))})}),this.Ra=new $I(r,i)}}async function mo(n){if($n(n))for(const e of n.da)await e(!0)}async function Oi(n){for(const e of n.da)await e(!1)}function dp(n,e){const t=Z(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),bl(t)?Al(t):Pr(t).O_()&&vl(t,e))}function Tl(n,e){const t=Z(n),r=Pr(t);t.Ia.delete(e),r.O_()&&fp(t,e),t.Ia.size===0&&(r.O_()?r.L_():$n(t)&&t.Ra.set("Unknown"))}function vl(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Pr(n).Y_(e)}function fp(n,e){n.Va.Ue(e),Pr(n).Z_(e)}function Al(n){n.Va=new UE({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Pr(n).start(),n.Ra.ua()}function bl(n){return $n(n)&&!Pr(n).x_()&&n.Ia.size>0}function $n(n){return Z(n).Ea.size===0}function pp(n){n.Va=void 0}async function GI(n){n.Ra.set("Online")}async function WI(n){n.Ia.forEach((e,t)=>{vl(n,e)})}async function KI(n,e){pp(n),bl(n)?(n.Ra.ha(e),Al(n)):n.Ra.set("Unknown")}async function QI(n,e,t){if(n.Ra.set("Online"),e instanceof Jf&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))}(n,e)}catch(r){H(Bn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Gs(n,r)}else if(e instanceof vs?n.Va.Ze(e):e instanceof Xf?n.Va.st(e):n.Va.tt(e),!t.isEqual(Q.min()))try{const r=await cp(n.localStore);t.compareTo(r)>=0&&await function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.Ia.get(c);d&&s.Ia.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.Ia.get(u);if(!d)return;s.Ia.set(u,d.withResumeToken(je.EMPTY_BYTE_STRING,d.snapshotVersion)),fp(s,u);const p=new rn(d.target,u,c,d.sequenceNumber);vl(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){H(Bn,"Failed to raise snapshot:",r),await Gs(n,r)}}async function Gs(n,e,t){if(!Rr(e))throw e;n.Ea.add(1),await Oi(n),n.Ra.set("Offline"),t||(t=()=>cp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{H(Bn,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await mo(n)})}function mp(n,e){return e().catch(t=>Gs(n,t,e))}async function go(n){const e=Z(n),t=gn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ol;for(;YI(e);)try{const i=await xI(e.localStore,r);if(i===null){e.Ta.length===0&&t.L_();break}r=i.batchId,XI(e,i)}catch(i){await Gs(e,i)}gp(e)&&yp(e)}function YI(n){return $n(n)&&n.Ta.length<10}function XI(n,e){n.Ta.push(e);const t=gn(n);t.O_()&&t.X_&&t.ea(e.mutations)}function gp(n){return $n(n)&&!gn(n).x_()&&n.Ta.length>0}function yp(n){gn(n).start()}async function JI(n){gn(n).ra()}async function ZI(n){const e=gn(n);for(const t of n.Ta)e.ea(t.mutations)}async function eT(n,e,t){const r=n.Ta.shift(),i=pl.from(r,e,t);await mp(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await go(n)}async function tT(n,e){e&&gn(n).X_&&await async function(r,i){if(function(o){return Qf(o)&&o!==O.ABORTED}(i.code)){const s=r.Ta.shift();gn(r).B_(),await mp(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await go(r)}}(n,e),gp(n)&&yp(n)}async function lh(n,e){const t=Z(n);t.asyncQueue.verifyOperationInProgress(),H(Bn,"RemoteStore received new credentials");const r=$n(t);t.Ea.add(3),await Oi(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await mo(t)}async function nT(n,e){const t=Z(n);e?(t.Ea.delete(2),await mo(t)):e||(t.Ea.add(2),await Oi(t),t.Ra.set("Unknown"))}function Pr(n){return n.ma||(n.ma=function(t,r,i){const s=Z(t);return s.sa(),new BI(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Xo:GI.bind(null,n),t_:WI.bind(null,n),r_:KI.bind(null,n),H_:QI.bind(null,n)}),n.da.push(async e=>{e?(n.ma.B_(),bl(n)?Al(n):n.Ra.set("Unknown")):(await n.ma.stop(),pp(n))})),n.ma}function gn(n){return n.fa||(n.fa=function(t,r,i){const s=Z(t);return s.sa(),new jI(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:JI.bind(null,n),r_:tT.bind(null,n),ta:ZI.bind(null,n),na:eT.bind(null,n)}),n.da.push(async e=>{e?(n.fa.B_(),await go(n)):(await n.fa.stop(),n.Ta.length>0&&(H(Bn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,l=new Sl(e,t,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cl(n,e){if(qt("AsyncQueue",`${e}: ${n}`),Rr(n))return new j(O.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{static emptySet(e){return new dr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||W.comparator(t.key,r.key):(t,r)=>W.comparator(t.key,r.key),this.keyedMap=ei(),this.sortedSet=new Ee(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof dr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new dr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(){this.ga=new Ee(W.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):K(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class vr{constructor(e,t,r,i,s,o,l,u,c){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new vr(e,t,dr.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&lo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class iT{constructor(){this.queries=ch(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=Z(t),s=i.queries;i.queries=ch(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new j(O.ABORTED,"Firestore shutting down"))}}function ch(){return new qn(n=>Mf(n),lo)}async function sT(n,e){const t=Z(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new rT,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await t.onListen(i,!0);break;case 1:s.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const l=Cl(o,`Initialization of query '${nr(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.Sa.push(e),e.va(t.onlineState),s.wa&&e.Fa(s.wa)&&kl(t)}async function oT(n,e){const t=Z(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function aT(n,e){const t=Z(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&kl(t)}function lT(n,e,t){const r=Z(n),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(t);r.queries.delete(e)}function kl(n){n.Ca.forEach(e=>{e.next()})}var ka,hh;(hh=ka||(ka={})).Ma="default",hh.Cache="cache";class uT{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new vr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=vr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ka.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e){this.key=e}}class wp{constructor(e){this.key=e}}class cT{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=se(),this.mutatedKeys=se(),this.eu=Lf(e),this.tu=new dr(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new uh,i=t?t.tu:this.tu;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),g=uo(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),k=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let x=!1;m&&g?m.data.isEqual(g.data)?C!==k&&(r.track({type:3,doc:g}),x=!0):this.su(m,g)||(r.track({type:2,doc:g}),x=!0,(u&&this.eu(g,u)>0||c&&this.eu(g,c)<0)&&(l=!0)):!m&&g?(r.track({type:0,doc:g}),x=!0):m&&!g&&(r.track({type:1,doc:m}),x=!0,(u||c)&&(l=!0)),x&&(g?(o=o.add(g),s=k?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,p)=>function(g,C){const k=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{Rt:x})}};return k(g)-k(C)}(d.type,p.type)||this.eu(d.doc,p.doc)),this.ou(r),i=i??!1;const l=t&&!i?this._u():[],u=this.Xa.size===0&&this.current&&!i?1:0,c=u!==this.Za;return this.Za=u,o.length!==0||c?{snapshot:new vr(this.query,e.tu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new uh,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=se(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const t=[];return e.forEach(r=>{this.Xa.has(r)||t.push(new wp(r))}),this.Xa.forEach(r=>{e.has(r)||t.push(new _p(r))}),t}cu(e){this.Ya=e.Qs,this.Xa=se();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return vr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Rl="SyncEngine";class hT{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class dT{constructor(e){this.key=e,this.hu=!1}}class fT{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new qn(l=>Mf(l),lo),this.Iu=new Map,this.Eu=new Set,this.du=new Ee(W.comparator),this.Au=new Map,this.Ru=new yl,this.Vu={},this.mu=new Map,this.fu=Tr.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function pT(n,e,t=!0){const r=bp(n);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await Ep(r,e,t,!0),i}async function mT(n,e){const t=bp(n);await Ep(t,e,!0,!1)}async function Ep(n,e,t,r){const i=await NI(n.localStore,Pt(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t);let l;return r&&(l=await gT(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&dp(n.remoteStore,i),l}async function gT(n,e,t,r,i){n.pu=(p,m,g)=>async function(k,x,N,q){let F=x.view.ru(N);F.Cs&&(F=await rh(k.localStore,x.query,!1).then(({documents:v})=>x.view.ru(v,F)));const G=q&&q.targetChanges.get(x.targetId),$=q&&q.targetMismatches.get(x.targetId)!=null,D=x.view.applyChanges(F,k.isPrimaryClient,G,$);return fh(k,x.targetId,D.au),D.snapshot}(n,p,m,g);const s=await rh(n.localStore,e,!0),o=new cT(e,s.Qs),l=o.ru(s.documents),u=Vi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),c=o.applyChanges(l,n.isPrimaryClient,u);fh(n,t,c.au);const d=new hT(e,t,o);return n.Tu.set(e,d),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),c.snapshot}async function yT(n,e,t){const r=Z(n),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!lo(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Sa(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Tl(r.remoteStore,i.targetId),Ra(r,i.targetId)}).catch(kr)):(Ra(r,i.targetId),await Sa(r.localStore,i.targetId,!0))}async function _T(n,e){const t=Z(n),r=t.Tu.get(e),i=t.Iu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Tl(t.remoteStore,r.targetId))}async function wT(n,e,t){const r=ST(n);try{const i=await function(o,l){const u=Z(o),c=ye.now(),d=l.reduce((g,C)=>g.add(C.key),se());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",g=>{let C=$t(),k=se();return u.Ns.getEntries(g,d).next(x=>{C=x,C.forEach((N,q)=>{q.isValidDocument()||(k=k.add(N))})}).next(()=>u.localDocuments.getOverlayedDocuments(g,C)).next(x=>{p=x;const N=[];for(const q of l){const F=DE(q,p.get(q.key).overlayedDocument);F!=null&&N.push(new wn(q.key,F,Rf(F.value.mapValue),et.exists(!0)))}return u.mutationQueue.addMutationBatch(g,c,N,l)}).next(x=>{m=x;const N=x.applyToLocalDocumentSet(p,k);return u.documentOverlayCache.saveOverlays(g,x.batchId,N)})}).then(()=>({batchId:m.batchId,changes:Uf(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Vu[o.currentUser.toKey()];c||(c=new Ee(ie)),c=c.insert(l,u),o.Vu[o.currentUser.toKey()]=c}(r,i.batchId,t),await Mi(r,i.changes),await go(r.remoteStore)}catch(i){const s=Cl(i,"Failed to persist write");t.reject(s)}}async function Ip(n,e){const t=Z(n);try{const r=await RI(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Au.get(s);o&&(le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?le(o.hu,14607):i.removedDocuments.size>0&&(le(o.hu,42227),o.hu=!1))}),await Mi(t,r,e)}catch(r){await kr(r)}}function dh(n,e,t){const r=Z(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Z(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.Sa)m.va(l)&&(c=!0)}),c&&kl(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ET(n,e,t){const r=Z(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Ee(W.comparator);o=o.insert(s,Oe.newNoDocument(s,Q.min()));const l=se().add(s),u=new fo(Q.min(),new Map,new Ee(ie),o,l);await Ip(r,u),r.du=r.du.remove(s),r.Au.delete(e),Pl(r)}else await Sa(r.localStore,e,!1).then(()=>Ra(r,e,t)).catch(kr)}async function IT(n,e){const t=Z(n),r=e.batch.batchId;try{const i=await kI(t.localStore,e);vp(t,r,null),Tp(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Mi(t,i)}catch(i){await kr(i)}}async function TT(n,e,t){const r=Z(n);try{const i=await function(o,l){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(le(p!==null,37113),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);vp(r,e,t),Tp(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Mi(r,i)}catch(i){await kr(i)}}function Tp(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function vp(n,e,t){const r=Z(n);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function Ra(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach(r=>{n.Ru.containsKey(r)||Ap(n,r)})}function Ap(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Tl(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Pl(n))}function fh(n,e,t){for(const r of t)r instanceof _p?(n.Ru.addReference(r.key,e),vT(n,r)):r instanceof wp?(H(Rl,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||Ap(n,r.key)):K(19791,{wu:r})}function vT(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(H(Rl,"New document in limbo: "+t),n.Eu.add(r),Pl(n))}function Pl(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new W(fe.fromString(e)),r=n.fu.next();n.Au.set(r,new dT(t)),n.du=n.du.insert(t,r),dp(n.remoteStore,new rn(Pt(cl(t.path)),r,"TargetPurposeLimboResolution",so.ce))}}async function Mi(n,e,t){const r=Z(n),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,t).then(c=>{var d;if((c||t)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=wl.As(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,c){const d=Z(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(c,m=>M.forEach(m.Es,g=>d.persistence.referenceDelegate.addReference(p,m.targetId,g)).next(()=>M.forEach(m.ds,g=>d.persistence.referenceDelegate.removeReference(p,m.targetId,g)))))}catch(p){if(!Rr(p))throw p;H(El,"Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const g=d.Ms.get(m),C=g.snapshotVersion,k=g.withLastLimboFreeSnapshotVersion(C);d.Ms=d.Ms.insert(m,k)}}}(r.localStore,s))}async function AT(n,e){const t=Z(n);if(!t.currentUser.isEqual(e)){H(Rl,"User change. New user:",e.toKey());const r=await up(t.localStore,e);t.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new j(O.CANCELLED,o))})}),s.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Mi(t,r.Ls)}}function bT(n,e){const t=Z(n),r=t.Au.get(e);if(r&&r.hu)return se().add(r.key);{let i=se();const s=t.Iu.get(e);if(!s)return i;for(const o of s){const l=t.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function bp(n){const e=Z(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ip.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ET.bind(null,e),e.Pu.H_=aT.bind(null,e.eventManager),e.Pu.yu=lT.bind(null,e.eventManager),e}function ST(n){const e=Z(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=IT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=TT.bind(null,e),e}class Ws{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=po(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return CI(this.persistence,new AI,e.initialUser,this.serializer)}Cu(e){return new lp(_l.mi,this.serializer)}Du(e){return new VI}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ws.provider={build:()=>new Ws};class CT extends Ws{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){le(this.persistence.referenceDelegate instanceof Hs,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new uI(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ze.withCacheSize(this.cacheSizeBytes):Ze.DEFAULT;return new lp(r=>Hs.mi(r,t),this.serializer)}}class Pa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>dh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=AT.bind(null,this.syncEngine),await nT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new iT}()}createDatastore(e){const t=po(e.databaseInfo.databaseId),r=function(s){return new UI(s)}(e.databaseInfo);return function(s,o,l,u){return new qI(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,l){return new HI(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>dh(this.syncEngine,t,0),function(){return oh.v()?new oh:new OI}())}createSyncEngine(e,t){return function(i,s,o,l,u,c,d){const p=new fT(i,s,o,l,u,c);return d&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=Z(i);H(Bn,"RemoteStore shutting down."),s.Ea.add(5),await Oi(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Pa.provider={build:()=>new Pa};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class kT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):qt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new j(O.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(i,s){const o=Z(i),l={documents:s.map(p=>$s(o.serializer,p))},u=await o.Ho("BatchGetDocuments",o.serializer.databaseId,fe.emptyPath(),l,s.length),c=new Map;u.forEach(p=>{const m=GE(o.serializer,p);c.set(m.key.toString(),m)});const d=[];return s.forEach(p=>{const m=c.get(p.toString());le(!!m,55234,{key:p}),d.push(m)}),d}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new fl(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=W.fromPath(r);this.mutations.push(new Kf(i,this.precondition(i)))}),await async function(r,i){const s=Z(r),o={writes:i.map(l=>rp(s.serializer,l))};await s.Go("Commit",s.serializer.databaseId,fe.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw K(50498,{Gu:e.constructor.name});t=Q.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new j(O.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(Q.min())?et.exists(!1):et.updateTime(t):et.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Q.min()))throw new j(O.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return et.updateTime(t)}return et.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.zu=r.maxAttempts,this.M_=new Il(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Ju()}Ju(){this.M_.p_(async()=>{const e=new RT(this.datastore),t=this.Hu(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Yu(i)}))}).catch(r=>{this.Yu(r)})})}Hu(e){try{const t=this.updateFunction(e);return!Ni(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Yu(e){this.zu>0&&this.Zu(e)?(this.zu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ju(),Promise.resolve()))):this.deferred.reject(e)}Zu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Qf(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn="FirestoreClient";class xT{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=We.UNAUTHENTICATED,this.clientId=sl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H(yn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H(yn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Cl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Yo(n,e){n.asyncQueue.verifyOperationInProgress(),H(yn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await up(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function ph(n,e){n.asyncQueue.verifyOperationInProgress();const t=await NT(n);H(yn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>lh(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>lh(e.remoteStore,i)),n._onlineComponents=e}async function NT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){H(yn,"Using user provided OfflineComponentProvider");try{await Yo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===O.FAILED_PRECONDITION||i.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;yr("Error using user provided cache. Falling back to memory cache: "+t),await Yo(n,new Ws)}}else H(yn,"Using default OfflineComponentProvider"),await Yo(n,new CT(void 0));return n._offlineComponents}async function xl(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(H(yn,"Using user provided OnlineComponentProvider"),await ph(n,n._uninitializedComponentsProvider._online)):(H(yn,"Using default OnlineComponentProvider"),await ph(n,new Pa))),n._onlineComponents}function DT(n){return xl(n).then(e=>e.syncEngine)}function VT(n){return xl(n).then(e=>e.datastore)}async function mh(n){const e=await xl(n),t=e.eventManager;return t.onListen=pT.bind(null,e.syncEngine),t.onUnlisten=yT.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=mT.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=_T.bind(null,e.syncEngine),t}/**
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
 */function Sp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp="firestore.googleapis.com",yh=!0;class _h{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new j(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Cp,this.ssl=yh}else this.host=e.host,this.ssl=e.ssl??yh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ap;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<aI)throw new j(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Hw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Sp(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new j(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new j(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new j(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class yo{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _h({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _h(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ow;switch(r.type){case"firstParty":return new Uw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=gh.get(t);r&&(H("ComponentProvider","Removing Datastore"),gh.delete(t),r.terminate())}(this),Promise.resolve()}}function OT(n,e,t,r={}){var c;n=Vn(n,yo);const i=Ar(e),s=n._getSettings(),o={...s,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;i&&(bd(`https://${l}`),Sd("Firestore",!0)),s.host!==Cp&&s.host!==l&&yr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!Mn(u,o)&&(n._setSettings(u),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=We.MOCK_USER;else{d=sg(r.mockUserToken,(c=n._app)==null?void 0:c.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new j(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new We(m)}n._authCredentials=new Mw(new yf(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Gt(this.firestore,e,this._query)}}class ve{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ve(this.firestore,e,this._key)}toJSON(){return{type:ve._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(xi(t,ve._jsonSchema))return new ve(e,r||null,new W(fe.fromString(t.referencePath)))}}ve._jsonSchemaVersion="firestore/documentReference/1.0",ve._jsonSchema={type:Re("string",ve._jsonSchemaVersion),referencePath:Re("string")};class cn extends Gt{constructor(e,t,r){super(e,t,cl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ve(this.firestore,null,new W(e))}withConverter(e){return new cn(this.firestore,e,this._path)}}function Ks(n,e,...t){if(n=Ae(n),_f("collection","path",e),n instanceof yo){const r=fe.fromString(e,...t);return xc(r),new cn(n,null,r)}{if(!(n instanceof ve||n instanceof cn))throw new j(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(fe.fromString(e,...t));return xc(r),new cn(n.firestore,null,r)}}function jn(n,e,...t){if(n=Ae(n),arguments.length===1&&(e=sl.newId()),_f("doc","path",e),n instanceof yo){const r=fe.fromString(e,...t);return Pc(r),new ve(n,null,new W(r))}{if(!(n instanceof ve||n instanceof cn))throw new j(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(fe.fromString(e,...t));return Pc(r),new ve(n.firestore,n instanceof cn?n.converter:null,new W(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh="AsyncQueue";class Eh{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Il(this,"async_queue_retry"),this._c=()=>{const r=Qo();r&&H(wh,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Qo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Qo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new un;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Rr(e))throw e;H(wh,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,qt("INTERNAL UNHANDLED ERROR: ",Ih(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=Sl.createAndSchedule(this,e,t,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&K(47125,{Pc:Ih(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Ih(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function Th(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class Ti extends yo{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Eh,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Eh(e),this._firestoreClient=void 0,await e}}}function MT(n,e){const t=typeof n=="object"?n:Pd(),r=typeof n=="string"?n:Fs,i=Wa(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=rg("firestore");s&&OT(i,...s)}return i}function Nl(n){if(n._terminated)throw new j(O.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||LT(n),n._firestoreClient}function LT(n){var r,i,s;const e=n._freezeSettings(),t=function(l,u,c,d){return new rE(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Sp(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new xT(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ct(je.fromBase64String(e))}catch(t){throw new j(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ct(je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ct._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(xi(e,ct._jsonSchema))return ct.fromBase64String(e.bytes)}}ct._jsonSchemaVersion="firestore/bytes/1.0",ct._jsonSchema={type:Re("string",ct._jsonSchemaVersion),bytes:Re("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class xt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:xt._jsonSchemaVersion}}static fromJSON(e){if(xi(e,xt._jsonSchema))return new xt(e.latitude,e.longitude)}}xt._jsonSchemaVersion="firestore/geoPoint/1.0",xt._jsonSchema={type:Re("string",xt._jsonSchemaVersion),latitude:Re("number"),longitude:Re("number")};/**
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
 */class Nt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Nt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(xi(e,Nt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Nt(e.vectorValues);throw new j(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Nt._jsonSchemaVersion="firestore/vectorValue/1.0",Nt._jsonSchema={type:Re("string",Nt._jsonSchemaVersion),vectorValues:Re("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT=/^__.*__$/;class UT{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new wn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Di(e,this.data,t,this.fieldTransforms)}}class kp{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new wn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Rp(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{Ac:n})}}class Dl{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Dl({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Qs(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Rp(this.Ac)&&FT.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class BT{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||po(e)}Cc(e,t,r,i=!1){return new Dl({Ac:e,methodName:t,Dc:r,path:Be.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wo(n){const e=n._freezeSettings(),t=po(n._databaseId);return new BT(n._databaseId,!!e.ignoreUndefinedProperties,t)}function jT(n,e,t,r,i,s={}){const o=n.Cc(s.merge||s.mergeFields?2:0,e,t,i);Ol("Data must be an object, but it was:",o,r);const l=Dp(r,o);let u,c;if(s.merge)u=new ht(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=xa(e,p,t);if(!o.contains(m))throw new j(O.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Op(d,m)||d.push(m)}u=new ht(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new UT(new Xe(l),u,c)}class Eo extends _o{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Eo}}class Vl extends _o{_toFieldTransform(e){return new RE(e.path,new wi)}isEqual(e){return e instanceof Vl}}function Pp(n,e,t,r){const i=n.Cc(1,e,t);Ol("Data must be an object, but it was:",i,r);const s=[],o=Xe.empty();_n(r,(u,c)=>{const d=Ml(e,u,t);c=Ae(c);const p=i.yc(d);if(c instanceof Eo)s.push(d);else{const m=Fi(c,p);m!=null&&(s.push(d),o.set(d,m))}});const l=new ht(s);return new kp(o,l,i.fieldTransforms)}function xp(n,e,t,r,i,s){const o=n.Cc(1,e,t),l=[xa(e,r,t)],u=[i];if(s.length%2!=0)throw new j(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(xa(e,s[m])),u.push(s[m+1]);const c=[],d=Xe.empty();for(let m=l.length-1;m>=0;--m)if(!Op(c,l[m])){const g=l[m];let C=u[m];C=Ae(C);const k=o.yc(g);if(C instanceof Eo)c.push(g);else{const x=Fi(C,k);x!=null&&(c.push(g),d.set(g,x))}}const p=new ht(c);return new kp(d,p,o.fieldTransforms)}function Np(n,e,t,r=!1){return Fi(t,n.Cc(r?4:3,e))}function Fi(n,e){if(Vp(n=Ae(n)))return Ol("Unsupported field value:",e,n),Dp(n,e);if(n instanceof _o)return function(r,i){if(!Rp(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Fi(l,i.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=Ae(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return SE(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ye.fromDate(r);return{timestampValue:qs(i.serializer,s)}}if(r instanceof ye){const s=new ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:qs(i.serializer,s)}}if(r instanceof xt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ct)return{bytesValue:Zf(i.serializer,r._byteString)};if(r instanceof ve){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:gl(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Nt)return function(o,l){return{mapValue:{fields:{[Cf]:{stringValue:kf},[Us]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Sc("VectorValues must only contain numeric values.");return dl(l.serializer,c)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${io(r)}`)}(n,e)}function Dp(n,e){const t={};return If(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_n(n,(r,i)=>{const s=Fi(i,e.mc(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Vp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ye||n instanceof xt||n instanceof ct||n instanceof ve||n instanceof _o||n instanceof Nt)}function Ol(n,e,t){if(!Vp(t)||!wf(t)){const r=io(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function xa(n,e,t){if((e=Ae(e))instanceof Li)return e._internalPath;if(typeof e=="string")return Ml(n,e);throw Qs("Field path arguments must be of type string or ",n,!1,void 0,t)}const zT=new RegExp("[~\\*/\\[\\]]");function Ml(n,e,t){if(e.search(zT)>=0)throw Qs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Li(...e.split("."))._internalPath}catch{throw Qs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Qs(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new j(O.INVALID_ARGUMENT,l+n+u)}function Op(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ll("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class qT extends vi{data(){return super.data()}}function Ll(n,e){return typeof e=="string"?Ml(n,e):e instanceof Li?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $T(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Fl{}class Io extends Fl{}function Na(n,e,...t){let r=[];e instanceof Fl&&r.push(e),r=r.concat(t),function(s){const o=s.filter(u=>u instanceof Bl).length,l=s.filter(u=>u instanceof Ul).length;if(o>1||o>0&&l>0)throw new j(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Ul extends Io{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Ul(e,t,r)}_apply(e){const t=this._parse(e);return Lp(e._query,t),new Gt(e.firestore,e.converter,Ta(e._query,t))}_parse(e){const t=wo(e.firestore);return function(s,o,l,u,c,d,p){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new j(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){bh(p,d);const C=[];for(const k of p)C.push(Ah(u,s,k));m={arrayValue:{values:C}}}else m=Ah(u,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||bh(p,d),m=Np(l,o,p,d==="in"||d==="not-in");return ke.create(c,d,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Bl extends Fl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Bl(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:vt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)Lp(o,u),o=Ta(o,u)}(e._query,t),new Gt(e.firestore,e.converter,Ta(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class jl extends Io{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new jl(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new j(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new j(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new _i(s,o)}(e._query,this._field,this._direction);return new Gt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new zn(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function vh(n,e="asc"){const t=e,r=Ll("orderBy",n);return jl._create(r,t)}class zl extends Io{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new zl(e,t,r)}_apply(e){return new Gt(e.firestore,e.converter,js(e._query,this._limit,this._limitType))}}function Mp(n){return Gw("limit",n),zl._create("limit",n,"F")}class ql extends Io{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new ql(e,t,r)}_apply(e){const t=GT(e,this.type,this._docOrFields,this._inclusive);return new Gt(e.firestore,e.converter,function(i,s){return new zn(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function HT(...n){return ql._create("startAfter",n,!1)}function GT(n,e,t,r){if(t[0]=Ae(t[0]),t[0]instanceof vi)return function(s,o,l,u,c){if(!u)throw new j(O.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${l}().`);const d=[];for(const p of hr(s))if(p.field.isKeyField())d.push(Bs(o,u.key));else{const m=u.data.field(p.field);if(oo(m))throw new j(O.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+p.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const g=p.field.canonicalString();throw new j(O.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${g}' (used as the orderBy) does not exist.`)}d.push(m)}return new Ir(d,c)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=wo(n.firestore);return function(o,l,u,c,d,p){const m=o.explicitOrderBy;if(d.length>m.length)throw new j(O.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const g=[];for(let C=0;C<d.length;C++){const k=d[C];if(m[C].field.isKeyField()){if(typeof k!="string")throw new j(O.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof k}`);if(!hl(o)&&k.indexOf("/")!==-1)throw new j(O.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${k}' contains a slash.`);const x=o.path.child(fe.fromString(k));if(!W.isDocumentKey(x))throw new j(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${x}' is not because it contains an odd number of segments.`);const N=new W(x);g.push(Bs(l,N))}else{const x=Np(u,c,k);g.push(x)}}return new Ir(g,p)}(n._query,n.firestore._databaseId,i,e,t,r)}}function Ah(n,e,t){if(typeof(t=Ae(t))=="string"){if(t==="")throw new j(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!hl(e)&&t.indexOf("/")!==-1)throw new j(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(fe.fromString(t));if(!W.isDocumentKey(r))throw new j(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Bs(n,new W(r))}if(t instanceof ve)return Bs(n,t._key);throw new j(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${io(t)}.`)}function bh(n,e){if(!Array.isArray(n)||n.length===0)throw new j(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Lp(n,e){const t=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new j(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Fp{convertValue(e,t="none"){switch(mn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Te(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(pn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw K(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return _n(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var r,i,s;const t=(s=(i=(r=e.fields)==null?void 0:r[Us].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Te(o.doubleValue));return new Nt(t)}convertGeoPoint(e){return new xt(Te(e.latitude),Te(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ao(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(mi(e));default:return null}}convertTimestamp(e){const t=fn(e);return new ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=fe.fromString(e);le(op(r),9688,{name:e});const i=new gi(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(t)||qt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WT(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class KT extends Fp{constructor(e){super(),this.firestore=e}convertBytes(e){return new ct(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ve(this.firestore,null,t)}}class ar{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hn extends vi{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new As(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ll("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new j(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=hn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}hn._jsonSchemaVersion="firestore/documentSnapshot/1.0",hn._jsonSchema={type:Re("string",hn._jsonSchemaVersion),bundleSource:Re("string","DocumentSnapshot"),bundleName:Re("string"),bundle:Re("string")};class As extends hn{data(e={}){return super.data(e)}}class fr{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new ar(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new As(this._firestore,this._userDataWriter,r.key,r,new ar(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new As(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ar(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new As(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ar(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:QT(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new j(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=fr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=sl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(t.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function QT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:n})}}fr._jsonSchemaVersion="firestore/querySnapshot/1.0",fr._jsonSchema={type:Re("string",fr._jsonSchemaVersion),bundleSource:Re("string","QuerySnapshot"),bundleName:Re("string"),bundle:Re("string")};class $l extends Fp{constructor(e){super(),this.firestore=e}convertBytes(e){return new ct(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ve(this.firestore,null,t)}}function YT(n,e,t,...r){n=Vn(n,ve);const i=Vn(n.firestore,Ti),s=wo(i);let o;return o=typeof(e=Ae(e))=="string"||e instanceof Li?xp(s,"updateDoc",n._key,e,t,r):Pp(s,"updateDoc",n._key,e),XT(i,[o.toMutation(n._key,et.exists(!0))])}function Ys(n,...e){var u,c,d;n=Ae(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Th(e[r])||(t=e[r++]);const i={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Th(e[r])){const p=e[r];e[r]=(u=p.next)==null?void 0:u.bind(p),e[r+1]=(c=p.error)==null?void 0:c.bind(p),e[r+2]=(d=p.complete)==null?void 0:d.bind(p)}let s,o,l;if(n instanceof ve)o=Vn(n.firestore,Ti),l=cl(n._key.path),s={next:p=>{e[r]&&e[r](JT(o,n,p))},error:e[r+1],complete:e[r+2]};else{const p=Vn(n,Gt);o=Vn(p.firestore,Ti),l=p._query;const m=new $l(o);s={next:g=>{e[r]&&e[r](new fr(o,m,p,g))},error:e[r+1],complete:e[r+2]},$T(n._query)}return function(m,g,C,k){const x=new kT(k),N=new uT(g,x,C);return m.asyncQueue.enqueueAndForget(async()=>sT(await mh(m),N)),()=>{x.Nu(),m.asyncQueue.enqueueAndForget(async()=>oT(await mh(m),N))}}(Nl(o),l,i,s)}function XT(n,e){return function(r,i){const s=new un;return r.asyncQueue.enqueueAndForget(async()=>wT(await DT(r),i,s)),s.promise}(Nl(n),e)}function JT(n,e,t){const r=t.docs.get(e._key),i=new $l(n);return new hn(n,i,e._key,r,new ar(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const ZT={maxAttempts:5};function ni(n,e){if((n=Ae(n)).firestore!==e)throw new j(O.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=wo(e)}get(e){const t=ni(e,this._firestore),r=new KT(this._firestore);return this._transaction.lookup([t._key]).then(i=>{if(!i||i.length!==1)return K(24041);const s=i[0];if(s.isFoundDocument())return new vi(this._firestore,r,s.key,s,t.converter);if(s.isNoDocument())return new vi(this._firestore,r,t._key,null,t.converter);throw K(18433,{doc:s})})}set(e,t,r){const i=ni(e,this._firestore),s=WT(i.converter,t,r),o=jT(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,t,r,...i){const s=ni(e,this._firestore);let o;return o=typeof(t=Ae(t))=="string"||t instanceof Li?xp(this._dataReader,"Transaction.update",s._key,t,r,i):Pp(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,o),this}delete(e){const t=ni(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv extends ev{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=ni(e,this._firestore),r=new $l(this._firestore);return super.get(e).then(i=>new hn(this._firestore,r,t._key,i._document,new ar(!1,!1),t.converter))}}function Up(n,e,t){n=Vn(n,Ti);const r={...ZT,...t};return function(s){if(s.maxAttempts<1)throw new j(O.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,l){const u=new un;return s.asyncQueue.enqueueAndForget(async()=>{const c=await VT(s);new PT(s.asyncQueue,c,l,o,u).ju()}),u.promise}(Nl(n),i=>e(new tv(n,i)),r)}function Rn(){return new Vl("serverTimestamp")}(function(e,t=!0){(function(i){Cr=i})(br),mr(new Ln("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Ti(new Lw(r.getProvider("auth-internal")),new Bw(o,r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new j(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gi(c.options.projectId,d)}(o,i),o);return s={useFetchStreams:t,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),an(Sc,Cc,e),an(Sc,Cc,"esm2020")})();const nv="ashutosh-srivastava-login.firebaseapp.com",rv={authDomain:nv},iv="aichatgemma";var yd;const Bp=Rd({projectId:iv,apiKey:((yd=globalThis.__SITE_FIREBASE_CONFIG__)==null?void 0:yd.apiKey)||"",authDomain:rv.authDomain,appId:"1:632551270983:web:e12f6a2a483f8b99d0df62"},"personal"),Hl=xw(Bp),It=MT(Bp),sv=()=>{const n=new Ft;return n.setCustomParameters({prompt:"select_account"}),B_(Hl,n)},ov=()=>E_(Hl);function av(n,e){const t={};return(n[n.length-1]===""?[...n,""]:n).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}const lv=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,uv=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,cv={};function Sh(n,e){return(cv.jsx?uv:lv).test(n)}const hv=/[ \t\n\f\r]/g;function dv(n){return typeof n=="object"?n.type==="text"?Ch(n.value):!1:Ch(n)}function Ch(n){return n.replace(hv,"")===""}class Ui{constructor(e,t,r){this.normal=t,this.property=e,r&&(this.space=r)}}Ui.prototype.normal={};Ui.prototype.property={};Ui.prototype.space=void 0;function jp(n,e){const t={},r={};for(const i of n)Object.assign(t,i.property),Object.assign(r,i.normal);return new Ui(t,r,e)}function Da(n){return n.toLowerCase()}class nt{constructor(e,t){this.attribute=t,this.property=e}}nt.prototype.attribute="";nt.prototype.booleanish=!1;nt.prototype.boolean=!1;nt.prototype.commaOrSpaceSeparated=!1;nt.prototype.commaSeparated=!1;nt.prototype.defined=!1;nt.prototype.mustUseProperty=!1;nt.prototype.number=!1;nt.prototype.overloadedBoolean=!1;nt.prototype.property="";nt.prototype.spaceSeparated=!1;nt.prototype.space=void 0;let fv=0;const ee=Hn(),Ce=Hn(),Va=Hn(),U=Hn(),me=Hn(),On=Hn(),ut=Hn();function Hn(){return 2**++fv}const Oa=Object.freeze(Object.defineProperty({__proto__:null,boolean:ee,booleanish:Ce,commaOrSpaceSeparated:ut,commaSeparated:On,number:U,overloadedBoolean:Va,spaceSeparated:me},Symbol.toStringTag,{value:"Module"})),Xo=Object.keys(Oa);class Gl extends nt{constructor(e,t,r,i){let s=-1;if(super(e,t),kh(this,"space",i),typeof r=="number")for(;++s<Xo.length;){const o=Xo[s];kh(this,Xo[s],(r&Oa[o])===Oa[o])}}}Gl.prototype.defined=!0;function kh(n,e,t){t&&(n[e]=t)}function xr(n){const e={},t={};for(const[r,i]of Object.entries(n.properties)){const s=new Gl(r,n.transform(n.attributes||{},r),i,n.space);n.mustUseProperty&&n.mustUseProperty.includes(r)&&(s.mustUseProperty=!0),e[r]=s,t[Da(r)]=r,t[Da(s.attribute)]=r}return new Ui(e,t,n.space)}const zp=xr({properties:{ariaActiveDescendant:null,ariaAtomic:Ce,ariaAutoComplete:null,ariaBusy:Ce,ariaChecked:Ce,ariaColCount:U,ariaColIndex:U,ariaColSpan:U,ariaControls:me,ariaCurrent:null,ariaDescribedBy:me,ariaDetails:null,ariaDisabled:Ce,ariaDropEffect:me,ariaErrorMessage:null,ariaExpanded:Ce,ariaFlowTo:me,ariaGrabbed:Ce,ariaHasPopup:null,ariaHidden:Ce,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:me,ariaLevel:U,ariaLive:null,ariaModal:Ce,ariaMultiLine:Ce,ariaMultiSelectable:Ce,ariaOrientation:null,ariaOwns:me,ariaPlaceholder:null,ariaPosInSet:U,ariaPressed:Ce,ariaReadOnly:Ce,ariaRelevant:null,ariaRequired:Ce,ariaRoleDescription:me,ariaRowCount:U,ariaRowIndex:U,ariaRowSpan:U,ariaSelected:Ce,ariaSetSize:U,ariaSort:null,ariaValueMax:U,ariaValueMin:U,ariaValueNow:U,ariaValueText:null,role:null},transform(n,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()}});function qp(n,e){return e in n?n[e]:e}function $p(n,e){return qp(n,e.toLowerCase())}const pv=xr({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:On,acceptCharset:me,accessKey:me,action:null,allow:null,allowFullScreen:ee,allowPaymentRequest:ee,allowUserMedia:ee,alpha:ee,alt:null,as:null,async:ee,autoCapitalize:null,autoComplete:me,autoFocus:ee,autoPlay:ee,blocking:me,capture:null,charSet:null,checked:ee,cite:null,className:me,closedBy:null,colorSpace:null,cols:U,colSpan:U,command:null,commandFor:null,content:null,contentEditable:Ce,controls:ee,controlsList:me,coords:U|On,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ee,defer:ee,dir:null,dirName:null,disabled:ee,download:Va,draggable:Ce,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ee,formTarget:null,headers:me,height:U,hidden:Va,high:U,href:null,hrefLang:null,htmlFor:me,httpEquiv:me,id:null,imageSizes:null,imageSrcSet:null,inert:ee,inputMode:null,integrity:null,is:null,isMap:ee,itemId:null,itemProp:me,itemRef:me,itemScope:ee,itemType:me,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ee,low:U,manifest:null,max:null,maxLength:U,media:null,method:null,min:null,minLength:U,multiple:ee,muted:ee,name:null,nonce:null,noModule:ee,noValidate:ee,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ee,optimum:U,pattern:null,ping:me,placeholder:null,playsInline:ee,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:ee,referrerPolicy:null,rel:me,required:ee,reversed:ee,rows:U,rowSpan:U,sandbox:me,scope:null,scoped:ee,seamless:ee,selected:ee,shadowRootClonable:ee,shadowRootCustomElementRegistry:ee,shadowRootDelegatesFocus:ee,shadowRootMode:null,shadowRootSerializable:ee,shape:null,size:U,sizes:null,slot:null,span:U,spellCheck:Ce,src:null,srcDoc:null,srcLang:null,srcSet:null,start:U,step:null,style:null,tabIndex:U,target:null,title:null,translate:null,type:null,typeMustMatch:ee,useMap:null,value:Ce,width:U,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:me,axis:null,background:null,bgColor:null,border:U,borderColor:null,bottomMargin:U,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ee,declare:ee,event:null,face:null,frame:null,frameBorder:null,hSpace:U,leftMargin:U,link:null,longDesc:null,lowSrc:null,marginHeight:U,marginWidth:U,noResize:ee,noHref:ee,noShade:ee,noWrap:ee,object:null,profile:null,prompt:null,rev:null,rightMargin:U,rules:null,scheme:null,scrolling:Ce,standby:null,summary:null,text:null,topMargin:U,valueType:null,version:null,vAlign:null,vLink:null,vSpace:U,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:ee,disablePictureInPicture:ee,disableRemotePlayback:ee,exportParts:On,part:me,prefix:null,property:null,results:U,security:null,unselectable:null},space:"html",transform:$p}),mv=xr({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",maskType:"mask-type",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:ut,accentHeight:U,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:U,amplitude:U,arabicForm:null,ascent:U,attributeName:null,attributeType:null,azimuth:U,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:U,by:null,calcMode:null,capHeight:U,className:me,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:U,diffuseConstant:U,direction:null,display:null,dur:null,divisor:U,dominantBaseline:null,download:ee,dx:null,dy:null,edgeMode:null,editable:null,elevation:U,enableBackground:null,end:null,event:null,exponent:U,externalResourcesRequired:null,fill:null,fillOpacity:U,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:On,g2:On,glyphName:On,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:U,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:U,horizOriginX:U,horizOriginY:U,id:null,ideographic:U,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:U,k:U,k1:U,k2:U,k3:U,k4:U,kernelMatrix:ut,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:U,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:U,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:U,overlineThickness:U,paintOrder:null,panose1:null,path:null,pathLength:U,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:me,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:U,pointsAtY:U,pointsAtZ:U,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:ut,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:ut,rev:ut,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:ut,requiredFeatures:ut,requiredFonts:ut,requiredFormats:ut,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:U,specularExponent:U,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:U,strikethroughThickness:U,string:null,stroke:null,strokeDashArray:ut,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:U,strokeOpacity:U,strokeWidth:null,style:null,surfaceScale:U,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:ut,tabIndex:U,tableValues:null,target:null,targetX:U,targetY:U,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:ut,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:U,underlineThickness:U,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:U,values:null,vAlphabetic:U,vMathematical:U,vectorEffect:null,vHanging:U,vIdeographic:U,version:null,vertAdvY:U,vertOriginX:U,vertOriginY:U,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:U,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:qp}),Hp=xr({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(n,e){return"xlink:"+e.slice(5).toLowerCase()}}),Gp=xr({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:$p}),Wp=xr({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(n,e){return"xml:"+e.slice(3).toLowerCase()}}),gv={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},yv=/[A-Z]/g,Rh=/-[a-z]/g,_v=/^data[-\w.:]+$/i;function wv(n,e){const t=Da(e);let r=e,i=nt;if(t in n.normal)return n.property[n.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&_v.test(e)){if(e.charAt(4)==="-"){const s=e.slice(5).replace(Rh,Iv);r="data"+s.charAt(0).toUpperCase()+s.slice(1)}else{const s=e.slice(4);if(!Rh.test(s)){let o=s.replace(yv,Ev);o.charAt(0)!=="-"&&(o="-"+o),e="data"+o}}i=Gl}return new i(r,e)}function Ev(n){return"-"+n.toLowerCase()}function Iv(n){return n.charAt(1).toUpperCase()}const Tv=jp([zp,pv,Hp,Gp,Wp],"html"),Wl=jp([zp,mv,Hp,Gp,Wp],"svg");function vv(n){return n.join(" ").trim()}var Kl={},Ph=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Av=/\n/g,bv=/^\s*/,Sv=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Cv=/^:\s*/,kv=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Rv=/^[;\s]*/,Pv=/^\s+|\s+$/g,xv=`
`,xh="/",Nh="*",Pn="",Nv="comment",Dv="declaration";function Vv(n,e){if(typeof n!="string")throw new TypeError("First argument must be a string");if(!n)return[];e=e||{};var t=1,r=1;function i(C){var k=C.match(Av);k&&(t+=k.length);var x=C.lastIndexOf(xv);r=~x?C.length-x:r+C.length}function s(){var C={line:t,column:r};return function(k){return k.position=new o(C),c(),k}}function o(C){this.start=C,this.end={line:t,column:r},this.source=e.source}o.prototype.content=n;function l(C){var k=new Error(e.source+":"+t+":"+r+": "+C);if(k.reason=C,k.filename=e.source,k.line=t,k.column=r,k.source=n,!e.silent)throw k}function u(C){var k=C.exec(n);if(k){var x=k[0];return i(x),n=n.slice(x.length),k}}function c(){u(bv)}function d(C){var k;for(C=C||[];k=p();)k!==!1&&C.push(k);return C}function p(){var C=s();if(!(xh!=n.charAt(0)||Nh!=n.charAt(1))){for(var k=2;Pn!=n.charAt(k)&&(Nh!=n.charAt(k)||xh!=n.charAt(k+1));)++k;if(k+=2,Pn===n.charAt(k-1))return l("End of comment missing");var x=n.slice(2,k-2);return r+=2,i(x),n=n.slice(k),r+=2,C({type:Nv,comment:x})}}function m(){var C=s(),k=u(Sv);if(k){if(p(),!u(Cv))return l("property missing ':'");var x=u(kv),N=C({type:Dv,property:Dh(k[0].replace(Ph,Pn)),value:x?Dh(x[0].replace(Ph,Pn)):Pn});return u(Rv),N}}function g(){var C=[];d(C);for(var k;k=m();)k!==!1&&(C.push(k),d(C));return C}return c(),g()}function Dh(n){return n?n.replace(Pv,Pn):Pn}var Ov=Vv,Mv=Cs&&Cs.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(Kl,"__esModule",{value:!0});Kl.default=Fv;const Lv=Mv(Ov);function Fv(n,e){let t=null;if(!n||typeof n!="string")return t;const r=(0,Lv.default)(n),i=typeof e=="function";return r.forEach(s=>{if(s.type!=="declaration")return;const{property:o,value:l}=s;i?e(o,l,s):l&&(t=t||{},t[o]=l)}),t}var To={};Object.defineProperty(To,"__esModule",{value:!0});To.camelCase=void 0;var Uv=/^--[a-zA-Z0-9_-]+$/,Bv=/-([a-z])/g,jv=/^[^-]+$/,zv=/^-(webkit|moz|ms|o|khtml)-/,qv=/^-(ms)-/,$v=function(n){return!n||jv.test(n)||Uv.test(n)},Hv=function(n,e){return e.toUpperCase()},Vh=function(n,e){return"".concat(e,"-")},Gv=function(n,e){return e===void 0&&(e={}),$v(n)?n:(n=n.toLowerCase(),e.reactCompat?n=n.replace(qv,Vh):n=n.replace(zv,Vh),n.replace(Bv,Hv))};To.camelCase=Gv;var Wv=Cs&&Cs.__importDefault||function(n){return n&&n.__esModule?n:{default:n}},Kv=Wv(Kl),Qv=To;function Ma(n,e){var t={};return!n||typeof n!="string"||(0,Kv.default)(n,function(r,i){r&&i&&(t[(0,Qv.camelCase)(r,e)]=i)}),t}Ma.default=Ma;var Yv=Ma;const Xv=_d(Yv),Kp=Qp("end"),Ql=Qp("start");function Qp(n){return e;function e(t){const r=t&&t.position&&t.position[n]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Jv(n){const e=Ql(n),t=Kp(n);if(e&&t)return{start:e,end:t}}function ui(n){return!n||typeof n!="object"?"":"position"in n||"type"in n?Oh(n.position):"start"in n||"end"in n?Oh(n):"line"in n||"column"in n?La(n):""}function La(n){return Mh(n&&n.line)+":"+Mh(n&&n.column)}function Oh(n){return La(n&&n.start)+"-"+La(n&&n.end)}function Mh(n){return n&&typeof n=="number"?n:1}class Qe extends Error{constructor(e,t,r){super(),typeof t=="string"&&(r=t,t=void 0);let i="",s={},o=!1;if(t&&("line"in t&&"column"in t?s={place:t}:"start"in t&&"end"in t?s={place:t}:"type"in t?s={ancestors:[t],place:t.position}:s={...t}),typeof e=="string"?i=e:!s.cause&&e&&(o=!0,i=e.message,s.cause=e),!s.ruleId&&!s.source&&typeof r=="string"){const u=r.indexOf(":");u===-1?s.ruleId=r:(s.source=r.slice(0,u),s.ruleId=r.slice(u+1))}if(!s.place&&s.ancestors&&s.ancestors){const u=s.ancestors[s.ancestors.length-1];u&&(s.place=u.position)}const l=s.place&&"start"in s.place?s.place.start:s.place;this.ancestors=s.ancestors||void 0,this.cause=s.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=ui(s.place)||"1:1",this.place=s.place||void 0,this.reason=this.message,this.ruleId=s.ruleId||void 0,this.source=s.source||void 0,this.stack=o&&s.cause&&typeof s.cause.stack=="string"?s.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Qe.prototype.file="";Qe.prototype.name="";Qe.prototype.reason="";Qe.prototype.message="";Qe.prototype.stack="";Qe.prototype.column=void 0;Qe.prototype.line=void 0;Qe.prototype.ancestors=void 0;Qe.prototype.cause=void 0;Qe.prototype.fatal=void 0;Qe.prototype.place=void 0;Qe.prototype.ruleId=void 0;Qe.prototype.source=void 0;const Yl={}.hasOwnProperty,Zv=new Map,eA=/[A-Z]/g,tA=new Set(["table","tbody","thead","tfoot","tr"]),nA=new Set(["td","th"]),Yp="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function rA(n,e){if(!e||e.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const t=e.filePath||void 0;let r;if(e.development){if(typeof e.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=hA(t,e.jsxDEV)}else{if(typeof e.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof e.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=cA(t,e.jsx,e.jsxs)}const i={Fragment:e.Fragment,ancestors:[],components:e.components||{},create:r,elementAttributeNameCase:e.elementAttributeNameCase||"react",evaluater:e.createEvaluater?e.createEvaluater():void 0,filePath:t,ignoreInvalidStyle:e.ignoreInvalidStyle||!1,passKeys:e.passKeys!==!1,passNode:e.passNode||!1,schema:e.space==="svg"?Wl:Tv,stylePropertyNameCase:e.stylePropertyNameCase||"dom",tableCellAlignToStyle:e.tableCellAlignToStyle!==!1},s=Xp(i,n,void 0);return s&&typeof s!="string"?s:i.create(n,i.Fragment,{children:s||void 0},void 0)}function Xp(n,e,t){if(e.type==="element")return iA(n,e,t);if(e.type==="mdxFlowExpression"||e.type==="mdxTextExpression")return sA(n,e);if(e.type==="mdxJsxFlowElement"||e.type==="mdxJsxTextElement")return aA(n,e,t);if(e.type==="mdxjsEsm")return oA(n,e);if(e.type==="root")return lA(n,e,t);if(e.type==="text")return uA(n,e)}function iA(n,e,t){const r=n.schema;let i=r;e.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Wl,n.schema=i),n.ancestors.push(e);const s=Zp(n,e.tagName,!1),o=dA(n,e);let l=Jl(n,e);return tA.has(e.tagName)&&(l=l.filter(function(u){return typeof u=="string"?!dv(u):!0})),Jp(n,o,s,e),Xl(o,l),n.ancestors.pop(),n.schema=r,n.create(e,s,o,t)}function sA(n,e){if(e.data&&e.data.estree&&n.evaluater){const r=e.data.estree.body[0];return r.type,n.evaluater.evaluateExpression(r.expression)}Ai(n,e.position)}function oA(n,e){if(e.data&&e.data.estree&&n.evaluater)return n.evaluater.evaluateProgram(e.data.estree);Ai(n,e.position)}function aA(n,e,t){const r=n.schema;let i=r;e.name==="svg"&&r.space==="html"&&(i=Wl,n.schema=i),n.ancestors.push(e);const s=e.name===null?n.Fragment:Zp(n,e.name,!0),o=fA(n,e),l=Jl(n,e);return Jp(n,o,s,e),Xl(o,l),n.ancestors.pop(),n.schema=r,n.create(e,s,o,t)}function lA(n,e,t){const r={};return Xl(r,Jl(n,e)),n.create(e,n.Fragment,r,t)}function uA(n,e){return e.value}function Jp(n,e,t,r){typeof t!="string"&&t!==n.Fragment&&n.passNode&&(e.node=r)}function Xl(n,e){if(e.length>0){const t=e.length>1?e:e[0];t&&(n.children=t)}}function cA(n,e,t){return r;function r(i,s,o,l){const c=Array.isArray(o.children)?t:e;return l?c(s,o,l):c(s,o)}}function hA(n,e){return t;function t(r,i,s,o){const l=Array.isArray(s.children),u=Ql(r);return e(i,s,o,l,{columnNumber:u?u.column-1:void 0,fileName:n,lineNumber:u?u.line:void 0},void 0)}}function dA(n,e){const t={};let r,i;for(i in e.properties)if(i!=="children"&&Yl.call(e.properties,i)){const s=pA(n,i,e.properties[i]);if(s){const[o,l]=s;n.tableCellAlignToStyle&&o==="align"&&typeof l=="string"&&nA.has(e.tagName)?r=l:t[o]=l}}if(r){const s=t.style||(t.style={});s[n.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return t}function fA(n,e){const t={};for(const r of e.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&n.evaluater){const s=r.data.estree.body[0];s.type;const o=s.expression;o.type;const l=o.properties[0];l.type,Object.assign(t,n.evaluater.evaluateExpression(l.argument))}else Ai(n,e.position);else{const i=r.name;let s;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&n.evaluater){const l=r.value.data.estree.body[0];l.type,s=n.evaluater.evaluateExpression(l.expression)}else Ai(n,e.position);else s=r.value===null?!0:r.value;t[i]=s}return t}function Jl(n,e){const t=[];let r=-1;const i=n.passKeys?new Map:Zv;for(;++r<e.children.length;){const s=e.children[r];let o;if(n.passKeys){const u=s.type==="element"?s.tagName:s.type==="mdxJsxFlowElement"||s.type==="mdxJsxTextElement"?s.name:void 0;if(u){const c=i.get(u)||0;o=u+"-"+c,i.set(u,c+1)}}const l=Xp(n,s,o);l!==void 0&&t.push(l)}return t}function pA(n,e,t){const r=wv(n.schema,e);if(!(t==null||typeof t=="number"&&Number.isNaN(t))){if(Array.isArray(t)&&(t=r.commaSeparated?av(t):vv(t)),r.property==="style"){let i=typeof t=="object"?t:mA(n,String(t));return n.stylePropertyNameCase==="css"&&(i=gA(i)),["style",i]}return[n.elementAttributeNameCase==="react"&&r.space?gv[r.property]||r.property:r.attribute,t]}}function mA(n,e){try{return Xv(e,{reactCompat:!0})}catch(t){if(n.ignoreInvalidStyle)return{};const r=t,i=new Qe("Cannot parse `style` attribute",{ancestors:n.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=n.filePath||void 0,i.url=Yp+"#cannot-parse-style-attribute",i}}function Zp(n,e,t){let r;if(!t)r={type:"Literal",value:e};else if(e.includes(".")){const i=e.split(".");let s=-1,o;for(;++s<i.length;){const l=Sh(i[s])?{type:"Identifier",name:i[s]}:{type:"Literal",value:i[s]};o=o?{type:"MemberExpression",object:o,property:l,computed:!!(s&&l.type==="Literal"),optional:!1}:l}r=o}else r=Sh(e)&&!/^[a-z]/.test(e)?{type:"Identifier",name:e}:{type:"Literal",value:e};if(r.type==="Literal"){const i=r.value;return Yl.call(n.components,i)?n.components[i]:i}if(n.evaluater)return n.evaluater.evaluateExpression(r);Ai(n)}function Ai(n,e){const t=new Qe("Cannot handle MDX estrees without `createEvaluater`",{ancestors:n.ancestors,place:e,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw t.file=n.filePath||void 0,t.url=Yp+"#cannot-handle-mdx-estrees-without-createevaluater",t}function gA(n){const e={};let t;for(t in n)Yl.call(n,t)&&(e[yA(t)]=n[t]);return e}function yA(n){let e=n.replace(eA,_A);return e.slice(0,3)==="ms-"&&(e="-"+e),e}function _A(n){return"-"+n.toLowerCase()}const Jo={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},wA={};function EA(n,e){const t=wA,r=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,i=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return em(n,r,i)}function em(n,e,t){if(IA(n)){if("value"in n)return n.type==="html"&&!t?"":n.value;if(e&&"alt"in n&&n.alt)return n.alt;if("children"in n)return Lh(n.children,e,t)}return Array.isArray(n)?Lh(n,e,t):""}function Lh(n,e,t){const r=[];let i=-1;for(;++i<n.length;)r[i]=em(n[i],e,t);return r.join("")}function IA(n){return!!(n&&typeof n=="object")}const Fh=document.createElement("i");function Zl(n){const e="&"+n+";";Fh.innerHTML=e;const t=Fh.textContent;return t.charCodeAt(t.length-1)===59&&n!=="semi"||t===e?!1:t}function En(n,e,t,r){const i=n.length;let s=0,o;if(e<0?e=-e>i?0:i+e:e=e>i?i:e,t=t>0?t:0,r.length<1e4)o=Array.from(r),o.unshift(e,t),n.splice(...o);else for(t&&n.splice(e,t);s<r.length;)o=r.slice(s,s+1e4),o.unshift(e,0),n.splice(...o),s+=1e4,e+=1e4}function gt(n,e){return n.length>0?(En(n,n.length,0,e),n):e}const Uh={}.hasOwnProperty;function TA(n){const e={};let t=-1;for(;++t<n.length;)vA(e,n[t]);return e}function vA(n,e){let t;for(t in e){const i=(Uh.call(n,t)?n[t]:void 0)||(n[t]={}),s=e[t];let o;if(s)for(o in s){Uh.call(i,o)||(i[o]=[]);const l=s[o];AA(i[o],Array.isArray(l)?l:l?[l]:[])}}}function AA(n,e){let t=-1;const r=[];for(;++t<e.length;)(e[t].add==="after"?n:r).push(e[t]);En(n,0,0,r)}function tm(n,e){const t=Number.parseInt(n,e);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}function pr(n){return n.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const kt=In(/[A-Za-z]/),dt=In(/[\dA-Za-z]/),bA=In(/[#-'*+\--9=?A-Z^-~]/);function Fa(n){return n!==null&&(n<32||n===127)}const Ua=In(/\d/),SA=In(/[\dA-Fa-f]/),CA=In(/[!-/:-@[-`{-~]/);function J(n){return n!==null&&n<-2}function tt(n){return n!==null&&(n<0||n===32)}function ue(n){return n===-2||n===-1||n===32}const kA=In(new RegExp("\\p{P}|\\p{S}","u")),RA=In(/\s/);function In(n){return e;function e(t){return t!==null&&t>-1&&n.test(String.fromCharCode(t))}}function Nr(n){const e=[];let t=-1,r=0,i=0;for(;++t<n.length;){const s=n.charCodeAt(t);let o="";if(s===37&&dt(n.charCodeAt(t+1))&&dt(n.charCodeAt(t+2)))i=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(o=String.fromCharCode(s));else if(s>55295&&s<57344){const l=n.charCodeAt(t+1);s<56320&&l>56319&&l<57344?(o=String.fromCharCode(s,l),i=1):o="�"}else o=String.fromCharCode(s);o&&(e.push(n.slice(r,t),encodeURIComponent(o)),r=t+i+1,o=""),i&&(t+=i,i=0)}return e.join("")+n.slice(r)}function _e(n,e,t,r){const i=r?r-1:1/0;let s=0;return o;function o(u){return ue(u)?(n.enter(t),l(u)):e(u)}function l(u){return ue(u)&&s++<i?(n.consume(u),l):(n.exit(t),e(u))}}function nm(n,e,t,r,i,s){let o=0;return l;function l(d){return ue(d)?(n.enter(r),u(d)):c(d)}function u(d){return ue(d)&&o<s?(n.consume(d),o++,u):(n.exit(r),c(d))}function c(d){return o>=i?e(d):t(d)}}const PA={tokenize:xA};function xA(n){const e=n.attempt(this.parser.constructs.contentInitial,r,i);let t;return e;function r(l){if(l===null){n.consume(l);return}return n.enter("lineEnding"),n.consume(l),n.exit("lineEnding"),_e(n,e,"linePrefix")}function i(l){return n.enter("paragraph"),s(l)}function s(l){const u=n.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=u),t=u,o(l)}function o(l){if(l===null){n.exit("chunkText"),n.exit("paragraph"),n.consume(l);return}return J(l)?(n.consume(l),n.exit("chunkText"),s):(n.consume(l),o)}}class Xs{constructor(){this.index=new Map,this.map=[]}add(e,t,r){Bh(this,e,t,r,!1)}addBefore(e,t,r){Bh(this,e,t,r,!0)}consume(e){if(this.map.sort(function(s,o){return s[0]-o[0]}),this.map.length===0)return;let t=this.map.length;const r=[];for(;t>0;)t-=1,r.push(e.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),e.length=this.map[t][0];r.push(e.slice()),e.length=0;let i=r.pop();for(;i;){for(const s of i)e.push(s);i=r.pop()}this.map.length=0,this.index.clear()}}function Bh(n,e,t,r,i){if(t===0&&r.length===0)return;const s=n.index.get(e);if(s){s[1]+=t,i?(r.push(...s[2]),s[2]=r):s[2].push(...r);return}const o=[e,t,r];n.map.push(o),n.index.set(e,o)}const NA={tokenize:DA},jh={tokenize:VA};function DA(n){const e=this,t=[];let r=0,i,s,o;return l;function l(F){if(r<t.length){const G=t[r];return e.containerState=G[1],n.attempt(G[0].continuation,u,c)(F)}return c(F)}function u(F){if(r++,e.containerState._closeFlow){e.containerState._closeFlow=void 0,i&&q();const G=e.events.length;let $=G,D;for(;$--;)if(e.events[$][0]==="exit"&&e.events[$][1].type==="chunkFlow"){D=e.events[$][1].end;break}N(r);let v=G;for(;v<e.events.length;)e.events[v][1].end={...D},v++;const _=new Xs;return _.add($+1,0,e.events.slice(G)),_.add(G,v-G,[]),_.consume(e.events),c(F)}return l(F)}function c(F){if(r===t.length){if(!i)return m(F);if(i.currentConstruct&&i.currentConstruct.concrete)return C(F);e.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return e.containerState={},n.check(jh,d,p)(F)}function d(F){return i&&q(),N(r),m(F)}function p(F){return e.parser.lazy[e.now().line]=r!==t.length,o=e.now().offset,C(F)}function m(F){return e.containerState={},n.attempt(jh,g,C)(F)}function g(F){return r++,t.push([e.currentConstruct,e.containerState]),m(F)}function C(F){if(F===null){i&&q(),N(0),n.consume(F);return}return i=i||e.parser.flow(e.now()),n.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:s}),k(F)}function k(F){if(F===null){x(n.exit("chunkFlow"),!0),N(0),n.consume(F);return}return J(F)?(n.consume(F),x(n.exit("chunkFlow")),r=0,e.interrupt=void 0,l):(n.consume(F),k)}function x(F,G){const $=e.sliceStream(F);if(G&&$.push(null),F.previous=s,s&&(s.next=F),s=F,i.defineSkip(F.start),i.write($),e.parser.lazy[F.start.line]){let D=i.events.length;for(;D--;)if(i.events[D][1].start.offset<o&&(!i.events[D][1].end||i.events[D][1].end.offset>o))return;const v=e.events.length;let _=v,I,A;for(;_--;)if(e.events[_][0]==="exit"&&e.events[_][1].type==="chunkFlow"){if(I){A=e.events[_][1].end;break}I=!0}for(N(r),D=v;D<e.events.length;)e.events[D][1].end={...A},D++;const E=new Xs;E.add(_+1,0,e.events.slice(v)),E.add(v,D-v,[]),E.consume(e.events)}}function N(F){let G=t.length;for(;G-- >F;){const $=t[G];e.containerState=$[1],$[0].exit.call(e,n)}t.length=F}function q(){i.write([null]),s=void 0,i=void 0,e.containerState._closeFlow=void 0}}function VA(n,e,t){return _e(n,n.attempt(this.parser.constructs.document,e,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function zh(n){if(n===null||tt(n)||RA(n))return 1;if(kA(n))return 2}function eu(n,e,t){const r=[];let i=-1;for(;++i<n.length;){const s=n[i].resolveAll;s&&!r.includes(s)&&(e=s(e,t),r.push(s))}return e}const Ba={name:"attention",resolveAll:OA,tokenize:MA};function OA(n,e){let t=-1,r;for(;++t<n.length;)if(n[t][0]==="enter"&&n[t][1].type==="attentionSequence"&&n[t][1]._close){let i=t;for(;i--;)if(n[i][0]==="exit"&&n[i][1].type==="attentionSequence"&&n[i][1]._open&&e.sliceSerialize(n[i][1]).charCodeAt(0)===e.sliceSerialize(n[t][1]).charCodeAt(0)){if((n[i][1]._close||n[t][1]._open)&&(n[t][1].end.offset-n[t][1].start.offset)%3&&!((n[i][1].end.offset-n[i][1].start.offset+n[t][1].end.offset-n[t][1].start.offset)%3))continue;const s=n[i][1].end.offset-n[i][1].start.offset>1&&n[t][1].end.offset-n[t][1].start.offset>1?2:1,o={...n[i][1].end},l={...n[t][1].start};qh(o,-s),qh(l,s);const u={type:s>1?"strongSequence":"emphasisSequence",start:o,end:{...n[i][1].end}},c={type:s>1?"strongSequence":"emphasisSequence",start:{...n[t][1].start},end:l},d={type:s>1?"strongText":"emphasisText",start:{...n[i][1].end},end:{...n[t][1].start}},p={type:s>1?"strong":"emphasis",start:{...u.start},end:{...c.end}};n[i][1].end={...u.start},n[t][1].start={...c.end},r=[],n[i][1].end.offset-n[i][1].start.offset&&(r=gt(r,[["enter",n[i][1],e],["exit",n[i][1],e]])),r=gt(r,[["enter",p,e],["enter",u,e],["exit",u,e],["enter",d,e]]),r=gt(r,eu(e.parser.constructs.insideSpan.null,n.slice(i+1,t),e)),r=gt(r,[["exit",d,e],["enter",c,e],["exit",c,e],["exit",p,e]]);let m=0;n[t][1].end.offset-n[t][1].start.offset&&(m=2,r=gt(r,[["enter",n[t][1],e],["exit",n[t][1],e]])),En(n,i-1,t-i+3,r),t=i+r.length-m-2;break}}for(t=-1;++t<n.length;)n[t][1].type==="attentionSequence"&&(n[t][1].type="data");return n}function MA(n,e){const t=this.parser.constructs.attentionMarkers.null,r=this.previous,i=zh(r);let s;return o;function o(u){return s=u,n.enter("attentionSequence"),l(u)}function l(u){if(u===s)return n.consume(u),l;const c=n.exit("attentionSequence"),d=zh(u),p=!d||d===2&&i||t.includes(u)&&u!==42&&u!==95,m=!i||i===2&&d||t.includes(r)&&r!==42&&r!==95;return c._open=!!(s===42?p:p&&(i||!m)),c._close=!!(s===42?m:m&&(d||!p)),e(u)}}function qh(n,e){n.column+=e,n.offset+=e,n._bufferIndex+=e}const LA={name:"autolink",tokenize:FA};function FA(n,e,t){let r=0;return i;function i(g){return n.enter("autolink"),n.enter("autolinkMarker"),n.consume(g),n.exit("autolinkMarker"),n.enter("autolinkProtocol"),s}function s(g){return kt(g)?(n.consume(g),o):g===64?t(g):c(g)}function o(g){return g===43||g===45||g===46||dt(g)?(r=1,l(g)):c(g)}function l(g){return g===58?(n.consume(g),r=0,u):(g===43||g===45||g===46||dt(g))&&r++<32?(n.consume(g),l):(r=0,c(g))}function u(g){return g===62?(n.exit("autolinkProtocol"),n.enter("autolinkMarker"),n.consume(g),n.exit("autolinkMarker"),n.exit("autolink"),e):g===null||g===32||g===60||Fa(g)?t(g):(n.consume(g),u)}function c(g){return g===64?(n.consume(g),d):bA(g)?(n.consume(g),c):t(g)}function d(g){return dt(g)?p(g):t(g)}function p(g){return g===46?(n.consume(g),r=0,d):g===62?(n.exit("autolinkProtocol").type="autolinkEmail",n.enter("autolinkMarker"),n.consume(g),n.exit("autolinkMarker"),n.exit("autolink"),e):m(g)}function m(g){if((g===45||dt(g))&&r++<63){const C=g===45?m:p;return n.consume(g),C}return t(g)}}const vo={partial:!0,tokenize:UA};function UA(n,e,t){return r;function r(s){return ue(s)?_e(n,i,"linePrefix")(s):i(s)}function i(s){return s===null||J(s)?e(s):t(s)}}const rm={continuation:{tokenize:jA},exit:zA,name:"blockQuote",tokenize:BA};function BA(n,e,t){const r=this;return i;function i(o){if(o===62){const l=r.containerState;return l.open||(n.enter("blockQuote",{_container:!0}),l.open=!0),n.enter("blockQuotePrefix"),n.enter("blockQuoteMarker"),n.consume(o),n.exit("blockQuoteMarker"),s}return t(o)}function s(o){return ue(o)?(n.enter("blockQuotePrefixWhitespace"),n.consume(o),n.exit("blockQuotePrefixWhitespace"),n.exit("blockQuotePrefix"),e):(n.exit("blockQuotePrefix"),e(o))}}function jA(n,e,t){const r=this;return i;function i(o){return ue(o)?_e(n,s,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):s(o)}function s(o){return n.attempt(rm,e,t)(o)}}function zA(n){n.exit("blockQuote")}const im={name:"characterEscape",tokenize:qA};function qA(n,e,t){return r;function r(s){return n.enter("characterEscape"),n.enter("escapeMarker"),n.consume(s),n.exit("escapeMarker"),i}function i(s){return CA(s)?(n.enter("characterEscapeValue"),n.consume(s),n.exit("characterEscapeValue"),n.exit("characterEscape"),e):t(s)}}const sm={name:"characterReference",tokenize:$A};function $A(n,e,t){const r=this;let i=0,s,o;return l;function l(p){return n.enter("characterReference"),n.enter("characterReferenceMarker"),n.consume(p),n.exit("characterReferenceMarker"),u}function u(p){return p===35?(n.enter("characterReferenceMarkerNumeric"),n.consume(p),n.exit("characterReferenceMarkerNumeric"),c):(n.enter("characterReferenceValue"),s=31,o=dt,d(p))}function c(p){return p===88||p===120?(n.enter("characterReferenceMarkerHexadecimal"),n.consume(p),n.exit("characterReferenceMarkerHexadecimal"),n.enter("characterReferenceValue"),s=6,o=SA,d):(n.enter("characterReferenceValue"),s=7,o=Ua,d(p))}function d(p){if(p===59&&i){const m=n.exit("characterReferenceValue");return o===dt&&!Zl(r.sliceSerialize(m))?t(p):(n.enter("characterReferenceMarker"),n.consume(p),n.exit("characterReferenceMarker"),n.exit("characterReference"),e)}return o(p)&&i++<s?(n.consume(p),d):t(p)}}const ja={partial:!0,tokenize:HA};function HA(n,e,t){const r=this;return i;function i(o){return o===null?t(o):(n.enter("lineEnding"),n.consume(o),n.exit("lineEnding"),s)}function s(o){return r.parser.lazy[r.now().line]?t(o):e(o)}}const $h={concrete:!0,name:"codeFenced",tokenize:GA};function GA(n,e,t){const r=this,i={partial:!0,tokenize:$};let s=0,o=0,l;return u;function u(D){return c(D)}function c(D){const v=r.events[r.events.length-1];return s=v&&v[1].type==="linePrefix"?v[2].sliceSerialize(v[1],!0).length:0,l=D,n.enter("codeFenced"),n.enter("codeFencedFence"),n.enter("codeFencedFenceSequence"),d(D)}function d(D){return D===l?(o++,n.consume(D),d):o<3?t(D):(n.exit("codeFencedFenceSequence"),ue(D)?_e(n,p,"whitespace")(D):p(D))}function p(D){return D===null||J(D)?(n.exit("codeFencedFence"),r.interrupt?e(D):n.check(ja,k,G)(D)):(n.enter("codeFencedFenceInfo"),n.enter("chunkString",{contentType:"string"}),m(D))}function m(D){return D===null||J(D)?(n.exit("chunkString"),n.exit("codeFencedFenceInfo"),p(D)):ue(D)?(n.exit("chunkString"),n.exit("codeFencedFenceInfo"),_e(n,g,"whitespace")(D)):D===96&&D===l?t(D):(n.consume(D),m)}function g(D){return D===null||J(D)?p(D):(n.enter("codeFencedFenceMeta"),n.enter("chunkString",{contentType:"string"}),C(D))}function C(D){return D===null||J(D)?(n.exit("chunkString"),n.exit("codeFencedFenceMeta"),p(D)):D===96&&D===l?t(D):(n.consume(D),C)}function k(D){return n.attempt(i,G,x)(D)}function x(D){return n.enter("lineEnding"),n.consume(D),n.exit("lineEnding"),N}function N(D){return s>0&&ue(D)?_e(n,q,"linePrefix",s+1)(D):q(D)}function q(D){return D===null||J(D)?n.check(ja,k,G)(D):(n.enter("codeFlowValue"),F(D))}function F(D){return D===null||J(D)?(n.exit("codeFlowValue"),q(D)):(n.consume(D),F)}function G(D){return n.exit("codeFenced"),e(D)}function $(D,v,_){let I=0;return A;function A(ne){return D.enter("lineEnding"),D.consume(ne),D.exit("lineEnding"),E}function E(ne){return D.enter("codeFencedFence"),ue(ne)?_e(D,S,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(ne):S(ne)}function S(ne){return ne===l?(D.enter("codeFencedFenceSequence"),w(ne)):_(ne)}function w(ne){return ne===l?(I++,D.consume(ne),w):I>=o?(D.exit("codeFencedFenceSequence"),ue(ne)?_e(D,de,"whitespace")(ne):de(ne)):_(ne)}function de(ne){return ne===null||J(ne)?(D.exit("codeFencedFence"),v(ne)):_(ne)}}}const Zo={name:"codeIndented",tokenize:KA},WA={partial:!0,tokenize:QA};function KA(n,e,t){return r;function r(l){return n.enter("codeIndented"),nm(n,i,t,"linePrefix",4,4)(l)}function i(l){return l===null?o(l):J(l)?n.attempt(WA,i,o)(l):(n.enter("codeFlowValue"),s(l))}function s(l){return l===null||J(l)?(n.exit("codeFlowValue"),i(l)):(n.consume(l),s)}function o(l){return n.exit("codeIndented"),e(l)}}function QA(n,e,t){const r=this;return i;function i(o){return r.parser.lazy[r.now().line]?t(o):J(o)?(n.enter("lineEnding"),n.consume(o),n.exit("lineEnding"),i):nm(n,e,s,"linePrefix",4,4)(o)}function s(o){return J(o)?i(o):t(o)}}const YA={name:"codeText",previous:JA,resolve:XA,tokenize:ZA};function XA(n){let e=n.length-4,t=3,r,i;if((n[t][1].type==="lineEnding"||n[t][1].type==="space")&&(n[e][1].type==="lineEnding"||n[e][1].type==="space")){for(r=t;++r<e;)if(n[r][1].type==="codeTextData"){n[t][1].type="codeTextPadding",n[e][1].type="codeTextPadding",t+=2,e-=2;break}}for(r=t-1,e++;++r<=e;)i===void 0?r!==e&&n[r][1].type!=="lineEnding"&&(i=r):(r===e||n[r][1].type==="lineEnding")&&(n[i][1].type="codeTextData",r!==i+2&&(n[i][1].end=n[r-1][1].end,n.splice(i+2,r-i-2),e-=r-i-2,r=i+2),i=void 0);return n}function JA(n){return n!==96||this.events[this.events.length-1][1].type==="characterEscape"}function ZA(n,e,t){let r=0,i,s;return o;function o(p){return n.enter("codeText"),n.enter("codeTextSequence"),l(p)}function l(p){return p===96?(n.consume(p),r++,l):(n.exit("codeTextSequence"),u(p))}function u(p){return p===null?t(p):p===32?(n.enter("space"),n.consume(p),n.exit("space"),u):p===96?(s=n.enter("codeTextSequence"),i=0,d(p)):J(p)?(n.enter("lineEnding"),n.consume(p),n.exit("lineEnding"),u):(n.enter("codeTextData"),c(p))}function c(p){return p===null||p===32||p===96||J(p)?(n.exit("codeTextData"),u(p)):(n.consume(p),c)}function d(p){return p===96?(n.consume(p),i++,d):i===r?(n.exit("codeTextSequence"),n.exit("codeText"),e(p)):(s.type="codeTextData",c(p))}}class eb{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,t){const r=t??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(e,r):e>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(e,t,r){const i=t||0;this.setCursor(Math.trunc(e));const s=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&Xr(this.left,r),s.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(e){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(e)}pushMany(e){this.setCursor(Number.POSITIVE_INFINITY),Xr(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),Xr(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0))if(e<this.left.length){const t=this.left.splice(e,Number.POSITIVE_INFINITY);Xr(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-e,Number.POSITIVE_INFINITY);Xr(this.left,t.reverse())}}}function Xr(n,e){let t=0;if(e.length<1e4)n.push(...e);else for(;t<e.length;)n.push(...e.slice(t,t+1e4)),t+=1e4}function om(n){const e={};let t=-1,r,i,s,o,l,u,c;const d=new eb(n);for(;++t<d.length;){for(;t in e;)t=e[t];if(r=d.get(t),t&&r[1].type==="chunkFlow"&&d.get(t-1)[1].type==="listItemPrefix"&&(u=r[1]._tokenizer.events,s=0,s<u.length&&u[s][1].type==="lineEndingBlank"&&(s+=2),s<u.length&&u[s][1].type==="content"))for(;++s<u.length&&u[s][1].type!=="content";)u[s][1].type==="chunkText"&&(u[s][1]._isInFirstContentOfListItem=!0,s++);if(r[0]==="enter")r[1].contentType&&(Object.assign(e,tb(d,t)),t=e[t],c=!0);else if(r[1]._container){for(s=t,i=void 0;s--;)if(o=d.get(s),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),o[1].type="lineEnding",i=s);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},l=d.slice(i,t),l.unshift(r),d.splice(i,t-i+1,l))}}return En(n,0,Number.POSITIVE_INFINITY,d.slice(0)),!c}function tb(n,e){const t=n.get(e)[1],r=n.get(e)[2];let i=e-1;const s=[];let o=t._tokenizer;o||(o=r.parser[t.contentType](t.start),t._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));const l=o.events,u=[],c={};let d,p,m=-1,g=t,C=0,k=0;const x=[k];for(;g;){for(;n.get(++i)[1]!==g;);s.push(i),g._tokenizer||(d=r.sliceStream(g),g.next||d.push(null),p&&o.defineSkip(g.start),g._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(d),g._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),p=g,g=g.next}for(g=t;++m<l.length;)l[m][0]==="exit"&&l[m-1][0]==="enter"&&l[m][1].type===l[m-1][1].type&&l[m][1].start.line!==l[m][1].end.line&&(k=m+1,x.push(k),g._tokenizer=void 0,g.previous=void 0,g=g.next);for(o.events=[],g?(g._tokenizer=void 0,g.previous=void 0):x.pop(),m=x.length;m--;){const N=l.slice(x[m],x[m+1]),q=s.pop();u.push([q,q+N.length-1]),n.splice(q,2,N)}for(u.reverse(),m=-1;++m<u.length;)c[C+u[m][0]]=C+u[m][1],C+=u[m][1]-u[m][0]-1;return c}const nb={resolve:ib,tokenize:sb},rb={partial:!0,tokenize:ob};function ib(n){return om(n),n}function sb(n,e){let t;return r;function r(l){return n.enter("content"),t=n.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?s(l):J(l)?n.check(rb,o,s)(l):(n.consume(l),i)}function s(l){return n.exit("chunkContent"),n.exit("content"),e(l)}function o(l){return n.consume(l),n.exit("chunkContent"),t.next=n.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,i}}function ob(n,e,t){const r=this;return i;function i(o){return n.exit("chunkContent"),n.enter("lineEnding"),n.consume(o),n.exit("lineEnding"),_e(n,s,"linePrefix")}function s(o){if(o===null||J(o))return t(o);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?e(o):n.interrupt(r.parser.constructs.flow,t,e)(o)}}function am(n,e,t,r,i,s,o,l,u){const c=u||Number.POSITIVE_INFINITY;let d=0;return p;function p(N){return N===60?(n.enter(r),n.enter(i),n.enter(s),n.consume(N),n.exit(s),m):N===null||N===32||N===41||Fa(N)?t(N):(n.enter(r),n.enter(o),n.enter(l),n.enter("chunkString",{contentType:"string"}),k(N))}function m(N){return N===62?(n.enter(s),n.consume(N),n.exit(s),n.exit(i),n.exit(r),e):(n.enter(l),n.enter("chunkString",{contentType:"string"}),g(N))}function g(N){return N===62?(n.exit("chunkString"),n.exit(l),m(N)):N===null||N===60||J(N)?t(N):(n.consume(N),N===92?C:g)}function C(N){return N===60||N===62||N===92?(n.consume(N),g):g(N)}function k(N){return!d&&(N===null||N===41||tt(N))?(n.exit("chunkString"),n.exit(l),n.exit(o),n.exit(r),e(N)):d<c&&N===40?(n.consume(N),d++,k):N===41?(n.consume(N),d--,k):N===null||N===32||N===40||Fa(N)?t(N):(n.consume(N),N===92?x:k)}function x(N){return N===40||N===41||N===92?(n.consume(N),k):k(N)}}function lm(n,e,t,r,i,s){const o=this;let l=0,u;return c;function c(g){return n.enter(r),n.enter(i),n.consume(g),n.exit(i),n.enter(s),d}function d(g){return l>999||g===null||g===91||g===93&&!u||g===94&&!l&&"_hiddenFootnoteSupport"in o.parser.constructs?t(g):g===93?(n.exit(s),n.enter(i),n.consume(g),n.exit(i),n.exit(r),e):J(g)?(n.enter("lineEnding"),n.consume(g),n.exit("lineEnding"),d):(n.enter("chunkString",{contentType:"string"}),p(g))}function p(g){return g===null||g===91||g===93||J(g)||l++>999?(n.exit("chunkString"),d(g)):(n.consume(g),u||(u=!ue(g)),g===92?m:p)}function m(g){return g===91||g===92||g===93?(n.consume(g),l++,p):p(g)}}function um(n,e,t,r,i,s){let o;return l;function l(m){return m===34||m===39||m===40?(n.enter(r),n.enter(i),n.consume(m),n.exit(i),o=m===40?41:m,u):t(m)}function u(m){return m===o?(n.enter(i),n.consume(m),n.exit(i),n.exit(r),e):(n.enter(s),c(m))}function c(m){return m===o?(n.exit(s),u(o)):m===null?t(m):J(m)?(n.enter("lineEnding"),n.consume(m),n.exit("lineEnding"),_e(n,c,"linePrefix")):(n.enter("chunkString",{contentType:"string"}),d(m))}function d(m){return m===o||m===null||J(m)?(n.exit("chunkString"),c(m)):(n.consume(m),m===92?p:d)}function p(m){return m===o||m===92?(n.consume(m),d):d(m)}}function ci(n,e){let t;return r;function r(i){return J(i)?(n.enter("lineEnding"),n.consume(i),n.exit("lineEnding"),t=!0,r):ue(i)?_e(n,r,t?"linePrefix":"lineSuffix")(i):e(i)}}const ab={name:"definition",tokenize:ub},lb={partial:!0,tokenize:cb};function ub(n,e,t){const r=this;let i;return s;function s(g){return n.enter("definition"),o(g)}function o(g){return lm.call(r,n,l,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(g)}function l(g){return i=pr(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),g===58?(n.enter("definitionMarker"),n.consume(g),n.exit("definitionMarker"),u):t(g)}function u(g){return tt(g)?ci(n,c)(g):c(g)}function c(g){return am(n,d,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(g)}function d(g){return n.attempt(lb,p,p)(g)}function p(g){return ue(g)?_e(n,m,"whitespace")(g):m(g)}function m(g){return g===null||J(g)?(n.exit("definition"),r.parser.defined.push(i),e(g)):t(g)}}function cb(n,e,t){return r;function r(l){return tt(l)?ci(n,i)(l):t(l)}function i(l){return um(n,s,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function s(l){return ue(l)?_e(n,o,"whitespace")(l):o(l)}function o(l){return l===null||J(l)?e(l):t(l)}}const hb={name:"hardBreakEscape",tokenize:db};function db(n,e,t){return r;function r(s){return n.enter("hardBreakEscape"),n.consume(s),i}function i(s){return J(s)?(n.exit("hardBreakEscape"),e(s)):t(s)}}const fb={name:"headingAtx",resolve:pb,tokenize:mb};function pb(n,e){let t=n.length-2,r=3;if(n[r][1].type==="whitespace"&&(r+=2),t-2>r&&n[t][1].type==="whitespace"&&(t-=2),n[t][1].type==="atxHeadingSequence"&&(r===t-1||t-4>r&&n[t-2][1].type==="whitespace")&&(t-=r+1===t?2:4),t>r){const i={type:"atxHeadingText",start:n[r][1].start,end:n[t][1].end},s={type:"chunkText",start:n[r][1].start,end:n[t][1].end,contentType:"text"};En(n,r,t-r+1,[["enter",i,e],["enter",s,e],["exit",s,e],["exit",i,e]])}return n}function mb(n,e,t){let r=0;return i;function i(d){return n.enter("atxHeading"),s(d)}function s(d){return n.enter("atxHeadingSequence"),o(d)}function o(d){return d===35&&r++<6?(n.consume(d),o):d===null||tt(d)?(n.exit("atxHeadingSequence"),l(d)):t(d)}function l(d){return d===35?(n.enter("atxHeadingSequence"),u(d)):d===null||J(d)?(n.exit("atxHeading"),e(d)):ue(d)?_e(n,l,"whitespace")(d):(n.enter("atxHeadingText"),c(d))}function u(d){return d===35?(n.consume(d),u):(n.exit("atxHeadingSequence"),l(d))}function c(d){return d===null||d===35||tt(d)?(n.exit("atxHeadingText"),l(d)):(n.consume(d),c)}}const gb=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Hh=["pre","script","style","textarea"],yb={concrete:!0,name:"htmlFlow",resolveTo:wb,tokenize:Eb},_b={partial:!0,tokenize:Ib};function wb(n){let e=n.length;for(;e--&&!(n[e][0]==="enter"&&n[e][1].type==="htmlFlow"););return e>1&&n[e-2][1].type==="linePrefix"&&(n[e][1].start=n[e-2][1].start,n[e+1][1].start=n[e-2][1].start,n.splice(e-2,2)),n}function Eb(n,e,t){const r=this;let i,s,o,l,u;return c;function c(T){return d(T)}function d(T){return n.enter("htmlFlow"),n.enter("htmlFlowData"),n.consume(T),p}function p(T){return T===33?(n.consume(T),m):T===47?(n.consume(T),s=!0,k):T===63?(n.consume(T),i=3,r.interrupt?e:b):kt(T)?(n.consume(T),o=String.fromCharCode(T),x):t(T)}function m(T){return T===45?(n.consume(T),i=2,g):T===91?(n.consume(T),i=5,l=0,C):kt(T)?(n.consume(T),i=4,r.interrupt?e:b):t(T)}function g(T){return T===45?(n.consume(T),r.interrupt?e:b):t(T)}function C(T){const st="CDATA[";return T===st.charCodeAt(l++)?(n.consume(T),l===st.length?r.interrupt?e:S:C):t(T)}function k(T){return kt(T)?(n.consume(T),o=String.fromCharCode(T),x):t(T)}function x(T){if(T===null||T===47||T===62||tt(T)){const st=T===47,pt=o.toLowerCase();return!st&&!s&&Hh.includes(pt)?(i=1,r.interrupt?e(T):S(T)):gb.includes(o.toLowerCase())?(i=6,st?(n.consume(T),N):r.interrupt?e(T):S(T)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?t(T):s?q(T):F(T))}return T===45||dt(T)?(n.consume(T),o+=String.fromCharCode(T),x):t(T)}function N(T){return T===62?(n.consume(T),r.interrupt?e:S):t(T)}function q(T){return ue(T)?(n.consume(T),q):A(T)}function F(T){return T===47?(n.consume(T),A):T===58||T===95||kt(T)?(n.consume(T),G):ue(T)?(n.consume(T),F):A(T)}function G(T){return T===45||T===46||T===58||T===95||dt(T)?(n.consume(T),G):$(T)}function $(T){return T===61?(n.consume(T),D):ue(T)?(n.consume(T),$):F(T)}function D(T){return T===null||T===60||T===61||T===62||T===96?t(T):T===34||T===39?(n.consume(T),u=T,v):ue(T)?(n.consume(T),D):_(T)}function v(T){return T===u?(n.consume(T),u=null,I):T===null||J(T)?t(T):(n.consume(T),v)}function _(T){return T===null||T===34||T===39||T===47||T===60||T===61||T===62||T===96||tt(T)?$(T):(n.consume(T),_)}function I(T){return T===47||T===62||ue(T)?F(T):t(T)}function A(T){return T===62?(n.consume(T),E):t(T)}function E(T){return T===null||J(T)?S(T):ue(T)?(n.consume(T),E):t(T)}function S(T){return T===45&&i===2?(n.consume(T),xe):T===60&&i===1?(n.consume(T),we):T===62&&i===4?(n.consume(T),it):T===63&&i===3?(n.consume(T),b):T===93&&i===5?(n.consume(T),rt):J(T)&&(i===6||i===7)?(n.exit("htmlFlowData"),n.check(_b,Ne,w)(T)):T===null||J(T)?(n.exit("htmlFlowData"),w(T)):(n.consume(T),S)}function w(T){return n.check(ja,de,Ne)(T)}function de(T){return n.enter("lineEnding"),n.consume(T),n.exit("lineEnding"),ne}function ne(T){return T===null||J(T)?w(T):(n.enter("htmlFlowData"),S(T))}function xe(T){return T===45?(n.consume(T),b):S(T)}function we(T){return T===47?(n.consume(T),o="",Me):S(T)}function Me(T){if(T===62){const st=o.toLowerCase();return Hh.includes(st)?(n.consume(T),it):S(T)}return kt(T)&&o.length<8?(n.consume(T),o+=String.fromCharCode(T),Me):S(T)}function rt(T){return T===93?(n.consume(T),b):S(T)}function b(T){return T===62?(n.consume(T),it):T===45&&i===2?(n.consume(T),b):S(T)}function it(T){return T===null||J(T)?(n.exit("htmlFlowData"),Ne(T)):(n.consume(T),it)}function Ne(T){return n.exit("htmlFlow"),e(T)}}function Ib(n,e,t){return r;function r(i){return n.enter("lineEnding"),n.consume(i),n.exit("lineEnding"),n.attempt(vo,e,t)}}const Tb={name:"htmlText",tokenize:vb};function vb(n,e,t){const r=this;let i,s,o;return l;function l(b){return n.enter("htmlText"),n.enter("htmlTextData"),n.consume(b),u}function u(b){return b===33?(n.consume(b),c):b===47?(n.consume(b),$):b===63?(n.consume(b),F):kt(b)?(n.consume(b),_):t(b)}function c(b){return b===45?(n.consume(b),d):b===91?(n.consume(b),s=0,C):kt(b)?(n.consume(b),q):t(b)}function d(b){return b===45?(n.consume(b),g):t(b)}function p(b){return b===null?t(b):b===45?(n.consume(b),m):J(b)?(o=p,we(b)):(n.consume(b),p)}function m(b){return b===45?(n.consume(b),g):p(b)}function g(b){return b===62?xe(b):b===45?m(b):p(b)}function C(b){const it="CDATA[";return b===it.charCodeAt(s++)?(n.consume(b),s===it.length?k:C):t(b)}function k(b){return b===null?t(b):b===93?(n.consume(b),x):J(b)?(o=k,we(b)):(n.consume(b),k)}function x(b){return b===93?(n.consume(b),N):k(b)}function N(b){return b===62?xe(b):b===93?(n.consume(b),N):k(b)}function q(b){return b===null||b===62?xe(b):J(b)?(o=q,we(b)):(n.consume(b),q)}function F(b){return b===null?t(b):b===63?(n.consume(b),G):J(b)?(o=F,we(b)):(n.consume(b),F)}function G(b){return b===62?xe(b):F(b)}function $(b){return kt(b)?(n.consume(b),D):t(b)}function D(b){return b===45||dt(b)?(n.consume(b),D):v(b)}function v(b){return J(b)?(o=v,we(b)):ue(b)?(n.consume(b),v):xe(b)}function _(b){return b===45||dt(b)?(n.consume(b),_):b===47||b===62||tt(b)?I(b):t(b)}function I(b){return b===47?(n.consume(b),xe):b===58||b===95||kt(b)?(n.consume(b),A):J(b)?(o=I,we(b)):ue(b)?(n.consume(b),I):xe(b)}function A(b){return b===45||b===46||b===58||b===95||dt(b)?(n.consume(b),A):E(b)}function E(b){return b===61?(n.consume(b),S):J(b)?(o=E,we(b)):ue(b)?(n.consume(b),E):I(b)}function S(b){return b===null||b===60||b===61||b===62||b===96?t(b):b===34||b===39?(n.consume(b),i=b,w):J(b)?(o=S,we(b)):ue(b)?(n.consume(b),S):(n.consume(b),de)}function w(b){return b===i?(n.consume(b),i=void 0,ne):b===null?t(b):J(b)?(o=w,we(b)):(n.consume(b),w)}function de(b){return b===null||b===34||b===39||b===60||b===61||b===96?t(b):b===47||b===62||tt(b)?I(b):(n.consume(b),de)}function ne(b){return b===47||b===62||tt(b)?I(b):t(b)}function xe(b){return b===62?(n.consume(b),n.exit("htmlTextData"),n.exit("htmlText"),e):t(b)}function we(b){return n.exit("htmlTextData"),n.enter("lineEnding"),n.consume(b),n.exit("lineEnding"),Me}function Me(b){return ue(b)?_e(n,rt,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(b):rt(b)}function rt(b){return n.enter("htmlTextData"),o(b)}}const tu={name:"labelEnd",resolveAll:Cb,resolveTo:kb,tokenize:Rb},Ab={tokenize:Pb},bb={tokenize:xb},Sb={tokenize:Nb};function Cb(n){let e=-1;const t=[];for(;++e<n.length;){const r=n[e][1];if(t.push(n[e]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",e+=i}}return n.length!==t.length&&En(n,0,n.length,t),n}function kb(n,e){let t=n.length,r=0,i,s,o;for(;t--;){const d=n[t][1];if(i){if(d.type==="link"||d.type==="labelLink"&&d._inactive)break;n[t][0]==="enter"&&d.type==="labelLink"&&(d._inactive=!0)}else if(s){if(n[t][0]==="enter"&&(d.type==="labelImage"||d.type==="labelLink")&&!d._balanced&&(i=t,d.type!=="labelLink")){r=2;break}}else d.type==="labelEnd"&&(s=t)}const l={type:n[i][1].type==="labelLink"?"link":"image",start:{...n[i][1].start},end:{...n[n.length-1][1].end}},u={type:"label",start:{...n[i][1].start},end:{...n[s][1].end}},c={type:"labelText",start:{...n[i+r+2][1].end},end:{...n[s-2][1].start}};return o=[["enter",l,e],["enter",u,e]],o=gt(o,n.slice(i+1,i+r+3)),o=gt(o,[["enter",c,e]]),o=gt(o,eu(e.parser.constructs.insideSpan.null,n.slice(i+r+4,s-3),e)),o=gt(o,[["exit",c,e],n[s-2],n[s-1],["exit",u,e]]),o=gt(o,n.slice(s+1)),o=gt(o,[["exit",l,e]]),En(n,i,n.length,o),n}function Rb(n,e,t){const r=this,i=r._labelStarts;let s,o;if(i){for(;i.length>0&&i[i.length-1]._balanced;)i.pop();s=i[i.length-1]}return l;function l(m){return s?s._inactive?p(m):(o=r.parser.defined.includes(pr(r.sliceSerialize({start:s.end,end:r.now()}))),n.enter("labelEnd"),n.enter("labelMarker"),n.consume(m),n.exit("labelMarker"),n.exit("labelEnd"),u):t(m)}function u(m){return m===40?n.attempt(Ab,d,o?d:p)(m):m===91?n.attempt(bb,d,o?c:p)(m):o?d(m):p(m)}function c(m){return n.attempt(Sb,d,p)(m)}function d(m){return i.pop(),e(m)}function p(m){return s._balanced=!0,t(m)}}function Pb(n,e,t){return r;function r(p){return n.enter("resource"),n.enter("resourceMarker"),n.consume(p),n.exit("resourceMarker"),i}function i(p){return tt(p)?ci(n,s)(p):s(p)}function s(p){return p===41?d(p):am(n,o,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function o(p){return tt(p)?ci(n,u)(p):d(p)}function l(p){return t(p)}function u(p){return p===34||p===39||p===40?um(n,c,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):d(p)}function c(p){return tt(p)?ci(n,d)(p):d(p)}function d(p){return p===41?(n.enter("resourceMarker"),n.consume(p),n.exit("resourceMarker"),n.exit("resource"),e):t(p)}}function xb(n,e,t){const r=this;return i;function i(l){return lm.call(r,n,s,o,"reference","referenceMarker","referenceString")(l)}function s(l){return r.parser.defined.includes(pr(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?e(l):t(l)}function o(l){return t(l)}}function Nb(n,e,t){return r;function r(s){return n.enter("reference"),n.enter("referenceMarker"),n.consume(s),n.exit("referenceMarker"),i}function i(s){return s===93?(n.enter("referenceMarker"),n.consume(s),n.exit("referenceMarker"),n.exit("reference"),e):t(s)}}const Db={name:"labelStartImage",resolveAll:tu.resolveAll,tokenize:Vb};function Vb(n,e,t){const r=this;let i;return s;function s(u){return n.enter("labelImage"),n.enter("labelImageMarker"),n.consume(u),n.exit("labelImageMarker"),o}function o(u){return u===91?(n.enter("labelMarker"),n.consume(u),n.exit("labelMarker"),i=n.exit("labelImage"),l):t(u)}function l(u){return u===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(u):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),e(u))}}const Ob={name:"labelStartLink",resolveAll:tu.resolveAll,tokenize:Mb};function Mb(n,e,t){const r=this;let i;return s;function s(l){return n.enter("labelLink"),n.enter("labelMarker"),n.consume(l),n.exit("labelMarker"),i=n.exit("labelLink"),o}function o(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(l):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),e(l))}}const ea={name:"lineEnding",tokenize:Lb};function Lb(n,e){return t;function t(r){return n.enter("lineEnding"),n.consume(r),n.exit("lineEnding"),_e(n,e,"linePrefix")}}const bs={name:"thematicBreak",tokenize:Fb};function Fb(n,e,t){let r=0,i;return s;function s(c){return n.enter("thematicBreak"),o(c)}function o(c){return i=c,l(c)}function l(c){return c===i?(n.enter("thematicBreakSequence"),u(c)):r>=3&&(c===null||J(c))?(n.exit("thematicBreak"),e(c)):t(c)}function u(c){return c===i?(n.consume(c),r++,u):(n.exit("thematicBreakSequence"),ue(c)?_e(n,l,"whitespace")(c):l(c))}}const Je={continuation:{tokenize:zb},exit:$b,name:"list",tokenize:jb},Ub={partial:!0,tokenize:Hb},Bb={partial:!0,tokenize:qb};function jb(n,e,t){const r=this,i=r.events[r.events.length-1];let s=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return l;function l(g){const C=r.containerState.type||(g===42||g===43||g===45?"listUnordered":"listOrdered");if(C==="listUnordered"?!r.containerState.marker||g===r.containerState.marker:Ua(g)){if(r.containerState.type||(r.containerState.type=C,n.enter(C,{_container:!0})),C==="listUnordered")return n.enter("listItemPrefix"),g===42||g===45?n.check(bs,t,c)(g):c(g);if(!r.interrupt||g===49)return n.enter("listItemPrefix"),n.enter("listItemValue"),u(g)}return t(g)}function u(g){return Ua(g)&&++o<10?(n.consume(g),u):(!r.interrupt||o<2)&&(r.containerState.marker?g===r.containerState.marker:g===41||g===46)?(n.exit("listItemValue"),c(g)):t(g)}function c(g){return n.enter("listItemMarker"),n.consume(g),n.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||g,n.check(vo,r.interrupt?t:d,n.attempt(Ub,m,p))}function d(g){return r.containerState.initialBlankLine=!0,s++,m(g)}function p(g){return ue(g)?(n.enter("listItemPrefixWhitespace"),n.consume(g),n.exit("listItemPrefixWhitespace"),m):t(g)}function m(g){return r.containerState.size=s+r.sliceSerialize(n.exit("listItemPrefix"),!0).length,e(g)}}function zb(n,e,t){const r=this;return r.containerState._closeFlow=void 0,n.check(vo,i,s);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,_e(n,e,"listItemIndent",r.containerState.size+1)(l)}function s(l){return r.containerState.furtherBlankLines||!ue(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,n.attempt(Bb,e,o)(l))}function o(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,_e(n,n.attempt(Je,e,t),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function qb(n,e,t){const r=this;return _e(n,i,"listItemIndent",r.containerState.size+1);function i(s){const o=r.events[r.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?e(s):t(s)}}function $b(n){n.exit(this.containerState.type)}function Hb(n,e,t){const r=this;return _e(n,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(s){const o=r.events[r.events.length-1];return!ue(s)&&o&&o[1].type==="listItemPrefixWhitespace"?e(s):t(s)}}const Gh={name:"setextUnderline",resolveTo:Gb,tokenize:Wb};function Gb(n,e){const t=new Xs;let r=n.length,i,s,o;for(;r--;)if(n[r][0]==="enter"){if(n[r][1].type==="content"){i=r;break}n[r][1].type==="paragraph"&&(s=r)}else n[r][1].type==="content"&&t.add(r,1,[]),!o&&n[r][1].type==="definition"&&(o=r);const l={type:"setextHeading",start:{...n[i][1].start},end:{...n[n.length-1][1].end}};return n[s][1].type="setextHeadingText",o?(t.add(s,0,[["enter",l,e]]),t.add(o+1,0,[["exit",n[i][1],e]]),n[i][1].end={...n[o][1].end}):n[i][1]=l,t.add(n.length,0,[["exit",l,e]]),t.consume(n),n}function Wb(n,e,t){const r=this;let i;return s;function s(c){let d=r.events.length,p;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){p=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||p)?(n.enter("setextHeadingLine"),i=c,o(c)):t(c)}function o(c){return n.enter("setextHeadingLineSequence"),l(c)}function l(c){return c===i?(n.consume(c),l):(n.exit("setextHeadingLineSequence"),ue(c)?_e(n,u,"lineSuffix")(c):u(c))}function u(c){return c===null||J(c)?(n.exit("setextHeadingLine"),e(c)):t(c)}}const Kb={tokenize:Qb};function Qb(n){const e=this,t=n.attempt(vo,r,n.attempt(this.parser.constructs.flowInitial,i,_e(n,n.attempt(this.parser.constructs.flow,i,n.attempt(nb,i)),"linePrefix")));return t;function r(s){if(s===null){n.consume(s);return}return n.enter("lineEndingBlank"),n.consume(s),n.exit("lineEndingBlank"),e.currentConstruct=void 0,t}function i(s){if(s===null){n.consume(s);return}return n.enter("lineEnding"),n.consume(s),n.exit("lineEnding"),e.currentConstruct=void 0,t}}const Yb={resolveAll:hm()},Xb=cm("string"),Jb=cm("text");function cm(n){return{resolveAll:hm(n==="text"?Zb:void 0),tokenize:e};function e(t){const r=this,i=this.parser.constructs[n],s=t.attempt(i,o,l);return o;function o(d){return c(d)?s(d):l(d)}function l(d){if(d===null){t.consume(d);return}return t.enter("data"),t.consume(d),u}function u(d){return c(d)?(t.exit("data"),s(d)):(t.consume(d),u)}function c(d){if(d===null)return!0;const p=i[d];let m=-1;if(p)for(;++m<p.length;){const g=p[m];if(!g.previous||g.previous.call(r,r.previous))return!0}return!1}}}function hm(n){return e;function e(t,r){let i=-1,s;for(;++i<=t.length;)s===void 0?t[i]&&t[i][1].type==="data"&&(s=i,i++):(!t[i]||t[i][1].type!=="data")&&(i!==s+2&&(t[s][1].end=t[i-1][1].end,t.splice(s+2,i-s-2),i=s+2),s=void 0);return n?n(t,r):t}}function Zb(n,e){const t=new Xs;let r=0;for(;++r<=n.length;)if((r===n.length||n[r][1].type==="lineEnding")&&n[r-1][1].type==="data"){const i=n[r-1][1],s=e.sliceStream(i);let o=s.length,l=-1,u=0,c;for(;o--;){const d=s[o];if(typeof d=="string"){for(l=d.length;d.charCodeAt(l-1)===32;)u++,l--;if(l)break;l=-1}else if(d===-2)c=!0,u++;else if(d!==-1){o++;break}}if(e._contentTypeTextTrailing&&r===n.length&&(u=0),u){const d={type:r===n.length||c||u<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?l:i.start._bufferIndex+l,_index:i.start._index+o,line:i.end.line,column:i.end.column-u,offset:i.end.offset-u},end:{...i.end}};i.end={...d.start},i.start.offset===i.end.offset?Object.assign(i,d):t.add(r,0,[["enter",d,e],["exit",d,e]])}r++}return t.consume(n),n}const eS={42:Je,43:Je,45:Je,48:Je,49:Je,50:Je,51:Je,52:Je,53:Je,54:Je,55:Je,56:Je,57:Je,62:rm},tS={91:ab},nS={[-2]:Zo,[-1]:Zo,32:Zo},rS={35:fb,42:bs,45:[Gh,bs],60:yb,61:Gh,95:bs,96:$h,126:$h},iS={38:sm,92:im},sS={[-5]:ea,[-4]:ea,[-3]:ea,33:Db,38:sm,42:Ba,60:[LA,Tb],91:Ob,92:[hb,im],93:tu,95:Ba,96:YA},oS={null:[Ba,Yb]},aS={null:[42,95]},lS={null:[]},uS=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:aS,contentInitial:tS,disable:lS,document:eS,flow:rS,flowInitial:nS,insideSpan:oS,string:iS,text:sS},Symbol.toStringTag,{value:"Module"}));function cS(n,e,t){let r={_bufferIndex:-1,_index:0,line:t&&t.line||1,column:t&&t.column||1,offset:t&&t.offset||0};const i={},s=[];let o=[],l=[];const u={attempt:v($),check:v(D),consume:q,enter:F,exit:G,interrupt:v(D,{interrupt:!0})},c={code:null,containerState:{},defineSkip:k,events:[],now:C,parser:n,previous:null,sliceSerialize:m,sliceStream:g,write:p};let d=e.tokenize.call(c,u);return e.resolveAll&&s.push(e),c;function p(E){return o=gt(o,E),x(),o[o.length-1]!==null?[]:(_(e,0),c.events=eu(s,c.events,c),c.events)}function m(E,S){return dS(g(E),S)}function g(E){return hS(o,E)}function C(){const{_bufferIndex:E,_index:S,line:w,column:de,offset:ne}=r;return{_bufferIndex:E,_index:S,line:w,column:de,offset:ne}}function k(E){i[E.line]=E.column,A()}function x(){for(;r._index<o.length;){const E=o[r._index];if(typeof E=="string"){const S=r._index;for(r._bufferIndex<0&&(r._bufferIndex=0);r._index===S&&r._bufferIndex<E.length;)N(E.charCodeAt(r._bufferIndex))}else N(E)}}function N(E){d=d(E)}function q(E){J(E)?(r.line++,r.column=1,r.offset+=E===-3?2:1,A()):E!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),c.previous=E}function F(E,S){const w=S||{};return w.type=E,w.start=C(),c.events.push(["enter",w,c]),l.push(w),w}function G(E){const S=l.pop();return S.end=C(),c.events.push(["exit",S,c]),S}function $(E,S){_(E,S.from)}function D(E,S){S.restore()}function v(E,S){return w;function w(de,ne,xe){let we,Me,rt,b;return Array.isArray(de)?Ne(de):"tokenize"in de?Ne([de]):it(de);function it(be){return At;function At(bt){const Wt=bt!==null&&be[bt],yt=bt!==null&&be.null,Kt=[...Array.isArray(Wt)?Wt:Wt?[Wt]:[],...Array.isArray(yt)?yt:yt?[yt]:[]];return Ne(Kt)(bt)}}function Ne(be){return we=be,Me=0,be.length===0?xe:T(be[Me])}function T(be){return At;function At(bt){return b=I(),rt=be,be.partial||(c.currentConstruct=be),be.name&&c.parser.constructs.disable.null.includes(be.name)?pt():be.tokenize.call(S?Object.assign(Object.create(c),S):c,u,st,pt)(bt)}}function st(be){return E(rt,b),ne}function pt(be){return b.restore(),++Me<we.length?T(we[Me]):xe}}}function _(E,S){E.resolveAll&&!s.includes(E)&&s.push(E),E.resolve&&En(c.events,S,c.events.length-S,E.resolve(c.events.slice(S),c)),E.resolveTo&&(c.events=E.resolveTo(c.events,c))}function I(){const E=C(),S=c.previous,w=c.currentConstruct,de=c.events.length,ne=Array.from(l);return{from:de,restore:xe};function xe(){r=E,c.previous=S,c.currentConstruct=w,c.events.length=de,l=ne,A()}}function A(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function hS(n,e){const t=e.start._index,r=e.start._bufferIndex,i=e.end._index,s=e.end._bufferIndex;let o;if(t===i)o=[n[t].slice(r,s)];else{if(o=n.slice(t,i),r>-1){const l=o[0];typeof l=="string"?o[0]=l.slice(r):o.shift()}s>0&&o.push(n[i].slice(0,s))}return o}function dS(n,e){let t=-1;const r=[];let i;for(;++t<n.length;){const s=n[t];let o;if(typeof s=="string")o=s;else switch(s){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=e?" ":"	";break}case-1:{if(!e&&i)continue;o=" ";break}default:o=String.fromCharCode(s)}i=s===-2,r.push(o)}return r.join("")}function fS(n){const r={constructs:TA([uS,...(n||{}).extensions||[]]),content:i(PA),defined:[],document:i(NA),flow:i(Kb),lazy:{},string:i(Xb),text:i(Jb)};return r;function i(s){return o;function o(l){return cS(r,s,l)}}}function pS(n){for(;!om(n););return n}const Wh=/[\0\t\n\r]/g;function mS(){let n=1,e="",t=!0,r;return i;function i(s,o,l){s=e+(typeof s=="string"?s.toString():new TextDecoder(o||void 0).decode(s));const u=[];let c=0;for(e="",t&&(s.charCodeAt(0)===65279&&c++,t=void 0);c<s.length;){Wh.lastIndex=c;const d=Wh.exec(s),p=d&&d.index!==void 0?d.index:s.length,m=s.charCodeAt(p);if(!d){e=s.slice(c);break}if(m===10&&c===p&&r)u.push(-3),r=void 0;else switch(r&&(u.push(-5),r=void 0),c<p&&(u.push(s.slice(c,p)),n+=p-c),m){case 0:{u.push(65533),n++;break}case 9:{const g=Math.ceil(n/4)*4;for(u.push(-2);n++<g;)u.push(-1);break}case 10:{u.push(-4),n=1;break}default:r=!0,n=1}c=p+1}return l&&(r&&u.push(-5),e&&u.push(e),u.push(null)),u}}const gS=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function yS(n){return n.replace(gS,_S)}function _S(n,e,t){if(e)return e;if(t.charCodeAt(0)===35){const i=t.charCodeAt(1),s=i===120||i===88;return tm(t.slice(s?2:1),s?16:10)}return Zl(t)||n}const dm={}.hasOwnProperty;function wS(n,e,t){return e&&typeof e=="object"&&(t=e,e=void 0),ES(t)(pS(fS(t).document().write(mS()(n,e,!0))))}function ES(n){const e={afterExit:[],beforeEnter:[],transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(Wn),autolinkProtocol:A,autolinkEmail:A,atxHeading:o(Mr),blockQuote:o(Kt),characterEscape:A,characterReference:A,codeFenced:o(Gn),codeFencedFenceInfo:l,codeFencedFenceMeta:l,codeIndented:o(Gn,l),codeText:o(Dr,l),codeTextData:A,data:A,codeFlowValue:A,definition:o(Vr),definitionDestinationString:l,definitionLabelString:l,definitionTitleString:l,emphasis:o(Or),hardBreakEscape:o(ji),hardBreakTrailing:o(ji),htmlFlow:o(zi,l),htmlFlowData:A,htmlText:o(zi,l),htmlTextData:A,image:o(qi),label:l,link:o(Wn),listItem:o(So),listItemValue:g,listOrdered:o(Lr,m),listUnordered:o(Lr),paragraph:o(Fr),reference:st,referenceString:l,resourceDestinationString:l,resourceTitleString:l,setextHeading:o(Mr),strong:o(Ur),thematicBreak:o(De)},exit:{atxHeading:c(),atxHeadingSequence:D,autolink:c(),autolinkEmail:yt,autolinkProtocol:Wt,blockQuote:c(),characterEscapeValue:E,characterReferenceMarkerHexadecimal:be,characterReferenceMarkerNumeric:be,characterReferenceValue:At,characterReference:bt,codeFenced:c(N),codeFencedFence:x,codeFencedFenceInfo:C,codeFencedFenceMeta:k,codeFlowValue:E,codeIndented:c(q),codeText:c(xe),codeTextData:E,data:E,definition:c(),definitionDestinationString:$,definitionLabelString:F,definitionTitleString:G,emphasis:c(),hardBreakEscape:c(w),hardBreakTrailing:c(w),htmlFlow:c(de),htmlFlowData:E,htmlText:c(ne),htmlTextData:E,image:c(Me),label:b,labelText:rt,lineEnding:S,link:c(we),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:pt,resourceDestinationString:it,resourceTitleString:Ne,resource:T,setextHeading:c(I),setextHeadingLineSequence:_,setextHeadingText:v,strong:c(),thematicBreak:c()}};fm(e,(n||{}).mdastExtensions||[]);const t={};return r;function r(P){let B={type:"root",children:[],position:void 0};const Y={stack:[B],tokenStack:[],config:e,enter:u,exit:d,buffer:l,resume:p,data:t},te=[],ze=[];let he=-1;for(;++he<P.length;)if(ze.push(P[he]),P[he][1].type==="listOrdered"||P[he][1].type==="listUnordered")if(P[he][0]==="enter")te.push(ze.length-1);else{const Le=te.pop();s(ze,Le)}for(P=ze,he=-1;++he<P.length;){const Le=e[P[he][0]];P[he][0]==="enter"&&e.beforeEnter.length>0&&i(e.beforeEnter,{...Y,sliceSerialize:P[he][2].sliceSerialize},P[he][1]),dm.call(Le,P[he][1].type)&&Le[P[he][1].type].call({...Y,sliceSerialize:P[he][2].sliceSerialize},P[he][1]),P[he][0]==="exit"&&e.afterExit.length>0&&i(e.afterExit,{...Y,sliceSerialize:P[he][2].sliceSerialize},P[he][1])}if(Y.tokenStack.length>0){const Le=Y.tokenStack[Y.tokenStack.length-1];(Le[1]||Kh).call(Y,void 0,Le[0])}for(B.position={start:Zt(P.length>0?P[0][1].start:{line:1,column:1,offset:0}),end:Zt(P.length>0?P[P.length-2][1].end:{line:1,column:1,offset:0})},he=-1;++he<e.transforms.length;)B=e.transforms[he](B)||B;return B}function i(P,B,Y){let te=-1;for(;++te<P.length;)P[te].call(B,Y)}function s(P,B){const Y=P.length-1;let te=B-1,ze=-1,he=!1,Le,ot,Ot,Tn;const vn=[];for(;++te<=Y;){const qe=P[te];switch(qe[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{qe[0]==="enter"?ze++:ze--,Tn=void 0;break}case"lineEndingBlank":{qe[0]==="enter"&&(Le&&!Tn&&!ze&&!Ot&&(Ot=te),Tn=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Tn=void 0}if(!ze&&qe[0]==="enter"&&qe[1].type==="listItemPrefix"||ze===-1&&qe[0]==="exit"&&(qe[1].type==="listUnordered"||qe[1].type==="listOrdered")){if(Le){let mt=te;for(ot=void 0;mt--;){const at=P[mt];if(at[1].type==="lineEnding"||at[1].type==="lineEndingBlank"){if(at[0]==="exit")continue;ot&&(P[ot][1].type="lineEndingBlank",he=!0),at[1].type="lineEnding",ot=mt}else if(!(at[1].type==="linePrefix"||at[1].type==="blockQuotePrefix"||at[1].type==="blockQuotePrefixWhitespace"||at[1].type==="blockQuoteMarker"||at[1].type==="listItemIndent"))break}Ot&&(!ot||Ot<ot)&&(Le._spread=!0),Le.end=Object.assign({},ot?P[ot][1].start:qe[1].end),vn.push({at:ot||te,event:["exit",Le,qe[2]]})}if(qe[1].type==="listItemPrefix"){const mt={type:"listItem",_spread:!1,start:Object.assign({},qe[1].start),end:void 0};Le=mt,vn.push({at:te,event:["enter",mt,qe[2]]}),Ot=void 0,Tn=!0}}}const Kn=P.splice(B);let Qn=0;for(te=-1;++te<Kn.length;){for(;Qn<vn.length&&vn[Qn].at===B+te;)P.push(vn[Qn++].event);P.push(Kn[te])}P[B][1]._spread=he}function o(P,B){return Y;function Y(te){u.call(this,P(te),te),B&&B.call(this,te)}}function l(){this.stack.push({type:"fragment",children:[]})}function u(P,B,Y){this.stack[this.stack.length-1].children.push(P),this.stack.push(P),this.tokenStack.push([B,Y||void 0]),P.position={start:Zt(B.start),end:void 0}}function c(P){return B;function B(Y){P&&P.call(this,Y),d.call(this,Y)}}function d(P,B){const Y=this.stack.pop(),te=this.tokenStack.pop();if(!te)throw new Error("Cannot close `"+P.type+"` ("+ui({start:P.start,end:P.end})+"): it’s not open");te[0].type!==P.type&&(B?B.call(this,P,te[0]):(te[1]||Kh).call(this,P,te[0])),Y.position.end=Zt(P.end)}function p(){return EA(this.stack.pop())}function m(){this.data.expectingFirstListItemValue=!0}function g(P){if(this.data.expectingFirstListItemValue){const B=this.stack[this.stack.length-2];B.start=Number.parseInt(this.sliceSerialize(P),10),this.data.expectingFirstListItemValue=void 0}}function C(){const P=this.resume(),B=this.stack[this.stack.length-1];B.lang=P}function k(){const P=this.resume(),B=this.stack[this.stack.length-1];B.meta=P}function x(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function N(){const P=this.resume(),B=this.stack[this.stack.length-1];B.value=P.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function q(){const P=this.resume(),B=this.stack[this.stack.length-1];B.value=P.replace(/(\r?\n|\r)$/g,"")}function F(P){const B=this.resume(),Y=this.stack[this.stack.length-1];Y.label=B,Y.identifier=pr(this.sliceSerialize(P)).toLowerCase()}function G(){const P=this.resume(),B=this.stack[this.stack.length-1];B.title=P}function $(){const P=this.resume(),B=this.stack[this.stack.length-1];B.url=P}function D(P){const B=this.stack[this.stack.length-1];if(!B.depth){const Y=this.sliceSerialize(P).length;B.depth=Y}}function v(){this.data.setextHeadingSlurpLineEnding=!0}function _(P){const B=this.stack[this.stack.length-1];B.depth=this.sliceSerialize(P).codePointAt(0)===61?1:2}function I(){this.data.setextHeadingSlurpLineEnding=void 0}function A(P){const Y=this.stack[this.stack.length-1].children;let te=Y[Y.length-1];(!te||te.type!=="text")&&(te=$i(),te.position={start:Zt(P.start),end:void 0},Y.push(te)),this.stack.push(te)}function E(P){const B=this.stack.pop();B.value+=this.sliceSerialize(P),B.position.end=Zt(P.end)}function S(P){const B=this.stack[this.stack.length-1];if(this.data.atHardBreak){const Y=B.children[B.children.length-1];Y.position.end=Zt(P.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&e.canContainEols.includes(B.type)&&(A.call(this,P),E.call(this,P))}function w(){this.data.atHardBreak=!0}function de(){const P=this.resume(),B=this.stack[this.stack.length-1];B.value=P}function ne(){const P=this.resume(),B=this.stack[this.stack.length-1];B.value=P}function xe(){const P=this.resume(),B=this.stack[this.stack.length-1];B.value=P}function we(){const P=this.stack[this.stack.length-1];if(this.data.inReference){const B=this.data.referenceType||"shortcut";P.type+="Reference",P.referenceType=B,delete P.url,delete P.title}else delete P.identifier,delete P.label;this.data.referenceType=void 0}function Me(){const P=this.stack[this.stack.length-1];if(this.data.inReference){const B=this.data.referenceType||"shortcut";P.type+="Reference",P.referenceType=B,delete P.url,delete P.title}else delete P.identifier,delete P.label;this.data.referenceType=void 0}function rt(P){const B=this.sliceSerialize(P),Y=this.stack[this.stack.length-2];Y.label=yS(B),Y.identifier=pr(B).toLowerCase()}function b(){const P=this.stack[this.stack.length-1],B=this.resume(),Y=this.stack[this.stack.length-1];if(this.data.inReference=!0,Y.type==="link"){const te=P.children;Y.children=te}else Y.alt=B}function it(){const P=this.resume(),B=this.stack[this.stack.length-1];B.url=P}function Ne(){const P=this.resume(),B=this.stack[this.stack.length-1];B.title=P}function T(){this.data.inReference=void 0}function st(){this.data.referenceType="collapsed"}function pt(P){const B=this.resume(),Y=this.stack[this.stack.length-1];Y.label=B,Y.identifier=pr(this.sliceSerialize(P)).toLowerCase(),this.data.referenceType="full"}function be(P){this.data.characterReferenceType=P.type}function At(P){const B=this.sliceSerialize(P),Y=this.data.characterReferenceType;let te;Y?(te=tm(B,Y==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):te=Zl(B);const ze=this.stack[this.stack.length-1];ze.value+=te}function bt(P){const B=this.stack.pop();B.position.end=Zt(P.end)}function Wt(P){E.call(this,P);const B=this.stack[this.stack.length-1];B.url=this.sliceSerialize(P)}function yt(P){E.call(this,P);const B=this.stack[this.stack.length-1];B.url="mailto:"+this.sliceSerialize(P)}function Kt(){return{type:"blockquote",children:[],position:void 0}}function Gn(){return{type:"code",lang:null,meta:null,value:"",position:void 0}}function Dr(){return{type:"inlineCode",value:"",position:void 0}}function Vr(){return{type:"definition",identifier:"",label:null,title:null,url:"",position:void 0}}function Or(){return{type:"emphasis",children:[],position:void 0}}function Mr(){return{type:"heading",depth:0,children:[],position:void 0}}function ji(){return{type:"break",position:void 0}}function zi(){return{type:"html",value:"",position:void 0}}function qi(){return{type:"image",title:null,url:"",alt:null,position:void 0}}function Wn(){return{type:"link",title:null,url:"",children:[],position:void 0}}function Lr(P){return{type:"list",ordered:P.type==="listOrdered",start:null,spread:P._spread,children:[],position:void 0}}function So(P){return{type:"listItem",spread:P._spread,checked:null,children:[],position:void 0}}function Fr(){return{type:"paragraph",children:[],position:void 0}}function Ur(){return{type:"strong",children:[],position:void 0}}function $i(){return{type:"text",value:"",position:void 0}}function De(){return{type:"thematicBreak",position:void 0}}}function Zt(n){return{line:n.line,column:n.column,offset:n.offset}}function fm(n,e){let t=-1;for(;++t<e.length;){const r=e[t];Array.isArray(r)?fm(n,r):IS(n,r)}}function IS(n,e){let t;for(t in e)if(dm.call(e,t))switch(t){case"canContainEols":{const r=e[t];r&&n[t].push(...r);break}case"transforms":{const r=e[t];r&&n[t].push(...r);break}case"afterExit":case"beforeEnter":{const r=e[t];r&&n[t].push(r);break}case"enter":case"exit":{const r=e[t];r&&Object.assign(n[t],r);break}}}function Kh(n,e){throw n?new Error("Cannot close `"+n.type+"` ("+ui({start:n.start,end:n.end})+"): a different token (`"+e.type+"`, "+ui({start:e.start,end:e.end})+") is open"):new Error("Cannot close document, a token (`"+e.type+"`, "+ui({start:e.start,end:e.end})+") is still open")}function TS(n){const e=this;e.parser=t;function t(r){return wS(r,{...e.data("settings"),...n,extensions:e.data("micromarkExtensions")||[],mdastExtensions:e.data("fromMarkdownExtensions")||[]})}}function vS(n,e){const t={type:"element",tagName:"blockquote",properties:{},children:n.wrap(n.all(e),!0)};return n.patch(e,t),n.applyData(e,t)}function AS(n,e){const t={type:"element",tagName:"br",properties:{},children:[]};return n.patch(e,t),[n.applyData(e,t),{type:"text",value:`
`}]}function bS(n,e){const t=e.value?e.value+`
`:"",r={},i=e.lang?e.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let s={type:"element",tagName:"code",properties:r,children:[{type:"text",value:t}]};return e.meta&&(s.data={meta:e.meta}),n.patch(e,s),s=n.applyData(e,s),s={type:"element",tagName:"pre",properties:{},children:[s]},n.patch(e,s),s}function SS(n,e){const t={type:"element",tagName:"del",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function CS(n,e){const t={type:"element",tagName:"em",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function kS(n,e){const t=typeof n.options.clobberPrefix=="string"?n.options.clobberPrefix:"user-content-",r=String(e.identifier).toUpperCase(),i=Nr(r.toLowerCase()),s=n.footnoteOrder.indexOf(r);let o,l=n.footnoteCounts.get(r);l===void 0?(l=0,n.footnoteOrder.push(r),o=n.footnoteOrder.length):o=s+1,l+=1,n.footnoteCounts.set(r,l);const u={type:"element",tagName:"a",properties:{href:"#"+t+"fn-"+i,id:t+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};n.patch(e,u);const c={type:"element",tagName:"sup",properties:{},children:[u]};return n.patch(e,c),n.applyData(e,c)}function RS(n,e){const t={type:"element",tagName:"h"+e.depth,properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function PS(n,e){if(n.options.allowDangerousHtml){const t={type:"raw",value:e.value};return n.patch(e,t),n.applyData(e,t)}}function pm(n,e){const t=e.referenceType;let r="]";if(t==="collapsed"?r+="[]":t==="full"&&(r+="["+(e.label||e.identifier)+"]"),e.type==="imageReference")return[{type:"text",value:"!["+e.alt+r}];const i=n.all(e),s=i[0];s&&s.type==="text"?s.value="["+s.value:i.unshift({type:"text",value:"["});const o=i[i.length-1];return o&&o.type==="text"?o.value+=r:i.push({type:"text",value:r}),i}function xS(n,e){const t=String(e.identifier).toUpperCase(),r=n.definitionById.get(t);if(!r)return pm(n,e);const i={src:Nr(r.url||""),alt:e.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"img",properties:i,children:[]};return n.patch(e,s),n.applyData(e,s)}function NS(n,e){const t={src:Nr(e.url)};e.alt!==null&&e.alt!==void 0&&(t.alt=e.alt),e.title!==null&&e.title!==void 0&&(t.title=e.title);const r={type:"element",tagName:"img",properties:t,children:[]};return n.patch(e,r),n.applyData(e,r)}function DS(n,e){const t={type:"text",value:e.value.replace(/\r?\n|\r/g," ")};n.patch(e,t);const r={type:"element",tagName:"code",properties:{},children:[t]};return n.patch(e,r),n.applyData(e,r)}function VS(n,e){const t=String(e.identifier).toUpperCase(),r=n.definitionById.get(t);if(!r)return pm(n,e);const i={href:Nr(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"a",properties:i,children:n.all(e)};return n.patch(e,s),n.applyData(e,s)}function OS(n,e){const t={href:Nr(e.url)};e.title!==null&&e.title!==void 0&&(t.title=e.title);const r={type:"element",tagName:"a",properties:t,children:n.all(e)};return n.patch(e,r),n.applyData(e,r)}function MS(n,e,t){const r=n.all(e),i=t?LS(t):mm(e),s={},o=[];if(typeof e.checked=="boolean"){const d=r[0];let p;d&&d.type==="element"&&d.tagName==="p"?p=d:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:e.checked,disabled:!0},children:[]}),s.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const d=r[l];(i||l!==0||d.type!=="element"||d.tagName!=="p")&&o.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?o.push(...d.children):o.push(d)}const u=r[r.length-1];u&&(i||u.type!=="element"||u.tagName!=="p")&&o.push({type:"text",value:`
`});const c={type:"element",tagName:"li",properties:s,children:o};return n.patch(e,c),n.applyData(e,c)}function LS(n){let e=!1;if(n.type==="list"){e=n.spread||!1;const t=n.children;let r=-1;for(;!e&&++r<t.length;)e=mm(t[r])}return e}function mm(n){const e=n.spread;return e??n.children.length>1}function FS(n,e){const t={},r=n.all(e);let i=-1;for(typeof e.start=="number"&&e.start!==1&&(t.start=e.start);++i<r.length;){const o=r[i];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){t.className=["contains-task-list"];break}}const s={type:"element",tagName:e.ordered?"ol":"ul",properties:t,children:n.wrap(r,!0)};return n.patch(e,s),n.applyData(e,s)}function US(n,e){const t={type:"element",tagName:"p",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function BS(n,e){const t={type:"root",children:n.wrap(n.all(e))};return n.patch(e,t),n.applyData(e,t)}function jS(n,e){const t={type:"element",tagName:"strong",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function zS(n,e){const t=n.all(e),r=t.shift(),i=[];if(r){const o={type:"element",tagName:"thead",properties:{},children:n.wrap([r],!0)};n.patch(e.children[0],o),i.push(o)}if(t.length>0){const o={type:"element",tagName:"tbody",properties:{},children:n.wrap(t,!0)},l=Ql(e.children[1]),u=Kp(e.children[e.children.length-1]);l&&u&&(o.position={start:l,end:u}),i.push(o)}const s={type:"element",tagName:"table",properties:{},children:n.wrap(i,!0)};return n.patch(e,s),n.applyData(e,s)}function qS(n,e,t){const r=t?t.children:void 0,s=(r?r.indexOf(e):1)===0?"th":"td",o=t&&t.type==="table"?t.align:void 0,l=o?o.length:e.children.length;let u=-1;const c=[];for(;++u<l;){const p=e.children[u],m={},g=o?o[u]:void 0;g&&(m.align=g);let C={type:"element",tagName:s,properties:m,children:[]};p&&(C.children=n.all(p),n.patch(p,C),C=n.applyData(p,C)),c.push(C)}const d={type:"element",tagName:"tr",properties:{},children:n.wrap(c,!0)};return n.patch(e,d),n.applyData(e,d)}function $S(n,e){const t={type:"element",tagName:"td",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}const Qh=9,Yh=32;function HS(n){const e=String(n),t=/\r?\n|\r/g;let r=t.exec(e),i=0;const s=[];for(;r;)s.push(Xh(e.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=t.exec(e);return s.push(Xh(e.slice(i),i>0,!1)),s.join("")}function Xh(n,e,t){let r=0,i=n.length;if(e){let s=n.codePointAt(r);for(;s===Qh||s===Yh;)r++,s=n.codePointAt(r)}if(t){let s=n.codePointAt(i-1);for(;s===Qh||s===Yh;)i--,s=n.codePointAt(i-1)}return i>r?n.slice(r,i):""}function GS(n,e){const t={type:"text",value:HS(String(e.value))};return n.patch(e,t),n.applyData(e,t)}function WS(n,e){const t={type:"element",tagName:"hr",properties:{},children:[]};return n.patch(e,t),n.applyData(e,t)}const KS={blockquote:vS,break:AS,code:bS,delete:SS,emphasis:CS,footnoteReference:kS,heading:RS,html:PS,imageReference:xS,image:NS,inlineCode:DS,linkReference:VS,link:OS,listItem:MS,list:FS,paragraph:US,root:BS,strong:jS,table:zS,tableCell:$S,tableRow:qS,text:GS,thematicBreak:WS,toml:ds,yaml:ds,definition:ds,footnoteDefinition:ds};function ds(){}const gm=-1,Ao=0,hi=1,Js=2,nu=3,ru=4,iu=5,su=6,ym=7,_m=8,Jh=typeof self=="object"?self:globalThis,QS=(n,e)=>{const t=(i,s)=>(n.set(s,i),i),r=i=>{if(n.has(i))return n.get(i);const[s,o]=e[i];switch(s){case Ao:case gm:return t(o,i);case hi:{const l=t([],i);for(const u of o)l.push(r(u));return l}case Js:{const l=t({},i);for(const[u,c]of o)l[r(u)]=r(c);return l}case nu:return t(new Date(o),i);case ru:{const{source:l,flags:u}=o;return t(new RegExp(l,u),i)}case iu:{const l=t(new Map,i);for(const[u,c]of o)l.set(r(u),r(c));return l}case su:{const l=t(new Set,i);for(const u of o)l.add(r(u));return l}case ym:{const{name:l,message:u}=o;return t(new Jh[l](u),i)}case _m:return t(BigInt(o),i);case"BigInt":return t(Object(BigInt(o)),i);case"ArrayBuffer":return t(new Uint8Array(o).buffer,o);case"DataView":{const{buffer:l}=new Uint8Array(o);return t(new DataView(l),o)}}return t(new Jh[s](o),i)};return r},Zh=n=>QS(new Map,n)(0),er="",{toString:YS}={},{keys:XS}=Object,Jr=n=>{const e=typeof n;if(e!=="object"||!n)return[Ao,e];const t=YS.call(n).slice(8,-1);switch(t){case"Array":return[hi,er];case"Object":return[Js,er];case"Date":return[nu,er];case"RegExp":return[ru,er];case"Map":return[iu,er];case"Set":return[su,er];case"DataView":return[hi,t]}return t.includes("Array")?[hi,t]:t.includes("Error")?[ym,t]:[Js,t]},fs=([n,e])=>n===Ao&&(e==="function"||e==="symbol"),JS=(n,e,t,r)=>{const i=(o,l)=>{const u=r.push(o)-1;return t.set(l,u),u},s=o=>{if(t.has(o))return t.get(o);let[l,u]=Jr(o);switch(l){case Ao:{let d=o;switch(u){case"bigint":l=_m,d=o.toString();break;case"function":case"symbol":if(n)throw new TypeError("unable to serialize "+u);d=null;break;case"undefined":return i([gm],o)}return i([l,d],o)}case hi:{if(u){let m=o;return u==="DataView"?m=new Uint8Array(o.buffer):u==="ArrayBuffer"&&(m=new Uint8Array(o)),i([u,[...m]],o)}const d=[],p=i([l,d],o);for(const m of o)d.push(s(m));return p}case Js:{if(u)switch(u){case"BigInt":return i([u,o.toString()],o);case"Boolean":case"Number":case"String":return i([u,o.valueOf()],o)}if(e&&"toJSON"in o)return s(o.toJSON());const d=[],p=i([l,d],o);for(const m of XS(o))(n||!fs(Jr(o[m])))&&d.push([s(m),s(o[m])]);return p}case nu:return i([l,o.toISOString()],o);case ru:{const{source:d,flags:p}=o;return i([l,{source:d,flags:p}],o)}case iu:{const d=[],p=i([l,d],o);for(const[m,g]of o)(n||!(fs(Jr(m))||fs(Jr(g))))&&d.push([s(m),s(g)]);return p}case su:{const d=[],p=i([l,d],o);for(const m of o)(n||!fs(Jr(m)))&&d.push(s(m));return p}}const{message:c}=o;return i([l,{name:u,message:c}],o)};return s},ed=(n,{json:e,lossy:t}={})=>{const r=[];return JS(!(e||t),!!e,new Map,r)(n),r},Zs=typeof structuredClone=="function"?(n,e)=>e&&("json"in e||"lossy"in e)?Zh(ed(n,e)):structuredClone(n):(n,e)=>Zh(ed(n,e));function ZS(n,e){const t=[{type:"text",value:"↩"}];return e>1&&t.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(e)}]}),t}function eC(n,e){return"Back to reference "+(n+1)+(e>1?"-"+e:"")}function tC(n){const e=typeof n.options.clobberPrefix=="string"?n.options.clobberPrefix:"user-content-",t=n.options.footnoteBackContent||ZS,r=n.options.footnoteBackLabel||eC,i=n.options.footnoteLabel||"Footnotes",s=n.options.footnoteLabelTagName||"h2",o=n.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let u=-1;for(;++u<n.footnoteOrder.length;){const c=n.footnoteById.get(n.footnoteOrder[u]);if(!c)continue;const d=n.all(c),p=String(c.identifier).toUpperCase(),m=Nr(p.toLowerCase());let g=0;const C=[],k=n.footnoteCounts.get(p);for(;k!==void 0&&++g<=k;){C.length>0&&C.push({type:"text",value:" "});let q=typeof t=="string"?t:t(u,g);typeof q=="string"&&(q={type:"text",value:q}),C.push({type:"element",tagName:"a",properties:{href:"#"+e+"fnref-"+m+(g>1?"-"+g:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(u,g),className:["data-footnote-backref"]},children:Array.isArray(q)?q:[q]})}const x=d[d.length-1];if(x&&x.type==="element"&&x.tagName==="p"){const q=x.children[x.children.length-1];q&&q.type==="text"?q.value+=" ":x.children.push({type:"text",value:" "}),x.children.push(...C)}else d.push(...C);const N={type:"element",tagName:"li",properties:{id:e+"fn-"+m},children:n.wrap(d,!0)};n.patch(c,N),l.push(N)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:s,properties:{...Zs(o),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:n.wrap(l,!0)},{type:"text",value:`
`}]}}const wm=function(n){if(n==null)return sC;if(typeof n=="function")return bo(n);if(typeof n=="object")return Array.isArray(n)?nC(n):rC(n);if(typeof n=="string")return iC(n);throw new Error("Expected function, string, or object as test")};function nC(n){const e=[];let t=-1;for(;++t<n.length;)e[t]=wm(n[t]);return bo(r);function r(...i){let s=-1;for(;++s<e.length;)if(e[s].apply(this,i))return!0;return!1}}function rC(n){const e=n;return bo(t);function t(r){const i=r;let s;for(s in n)if(i[s]!==e[s])return!1;return!0}}function iC(n){return bo(e);function e(t){return t&&t.type===n}}function bo(n){return e;function e(t,r,i){return!!(oC(t)&&n.call(this,t,typeof r=="number"?r:void 0,i||void 0))}}function sC(){return!0}function oC(n){return n!==null&&typeof n=="object"&&"type"in n}const Em=[],aC=!0,td=!1,lC="skip";function uC(n,e,t,r){let i;typeof e=="function"&&typeof t!="function"?(r=t,t=e):i=e;const s=wm(i),o=r?-1:1;l(n,void 0,[])();function l(u,c,d){const p=u&&typeof u=="object"?u:{};if(typeof p.type=="string"){const g=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(m,"name",{value:"node ("+(u.type+(g?"<"+g+">":""))+")"})}return m;function m(){let g=Em,C,k,x;if((!e||s(u,c,d[d.length-1]||void 0))&&(g=cC(t(u,d)),g[0]===td))return g;if("children"in u&&u.children){const N=u;if(N.children&&g[0]!==lC)for(k=(r?N.children.length:-1)+o,x=d.concat(N);k>-1&&k<N.children.length;){const q=N.children[k];if(C=l(q,k,x)(),C[0]===td)return C;k=typeof C[1]=="number"?C[1]:k+o}}return g}}}function cC(n){return Array.isArray(n)?n:typeof n=="number"?[aC,n]:n==null?Em:[n]}function Im(n,e,t,r){let i,s,o;typeof e=="function"&&typeof t!="function"?(s=void 0,o=e,i=t):(s=e,o=t,i=r),uC(n,s,l,i);function l(u,c){const d=c[c.length-1],p=d?d.children.indexOf(u):void 0;return o(u,p,d)}}const za={}.hasOwnProperty,hC={};function dC(n,e){const t=e||hC,r=new Map,i=new Map,s=new Map,o={...KS,...t.handlers},l={all:c,applyData:pC,definitionById:r,footnoteById:i,footnoteCounts:s,footnoteOrder:[],handlers:o,one:u,options:t,patch:fC,wrap:gC};return Im(n,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const p=d.type==="definition"?r:i,m=String(d.identifier).toUpperCase();p.has(m)||p.set(m,d)}}),l;function u(d,p){const m=d.type,g=l.handlers[m];if(za.call(l.handlers,m)&&g)return g(l,d,p);if(l.options.passThrough&&l.options.passThrough.includes(m)){if("children"in d){const{children:k,...x}=d,N=Zs(x);return N.children=l.all(d),N}return Zs(d)}return(l.options.unknownHandler||mC)(l,d,p)}function c(d){const p=[];if("children"in d){const m=d.children;let g=-1;for(;++g<m.length;){const C=l.one(m[g],d);if(C){if(g&&m[g-1].type==="break"&&(!Array.isArray(C)&&C.type==="text"&&(C.value=nd(C.value)),!Array.isArray(C)&&C.type==="element")){const k=C.children[0];k&&k.type==="text"&&(k.value=nd(k.value))}Array.isArray(C)?p.push(...C):p.push(C)}}}return p}}function fC(n,e){n.position&&(e.position=Jv(n))}function pC(n,e){let t=e;if(n&&n.data){const r=n.data.hName,i=n.data.hChildren,s=n.data.hProperties;if(typeof r=="string")if(t.type==="element")t.tagName=r;else{const o="children"in t?t.children:[t];t={type:"element",tagName:r,properties:{},children:o}}t.type==="element"&&s&&Object.assign(t.properties,Zs(s)),"children"in t&&t.children&&i!==null&&i!==void 0&&(t.children=i)}return t}function mC(n,e){const t=e.data||{},r="value"in e&&!(za.call(t,"hProperties")||za.call(t,"hChildren"))?{type:"text",value:e.value}:{type:"element",tagName:"div",properties:{},children:n.all(e)};return n.patch(e,r),n.applyData(e,r)}function gC(n,e){const t=[];let r=-1;for(e&&t.push({type:"text",value:`
`});++r<n.length;)r&&t.push({type:"text",value:`
`}),t.push(n[r]);return e&&n.length>0&&t.push({type:"text",value:`
`}),t}function nd(n){let e=0,t=n.charCodeAt(e);for(;t===9||t===32;)e++,t=n.charCodeAt(e);return n.slice(e)}function rd(n,e){const t=dC(n,e),r=t.one(n,void 0),i=tC(t),s=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&s.children.push({type:"text",value:`
`},i),s}function yC(n,e){return n&&"run"in n?async function(t,r){const i=rd(t,{file:r,...e});await n.run(i,r)}:function(t,r){return rd(t,{file:r,...n||e})}}function id(n){if(n)throw n}var Ss=Object.prototype.hasOwnProperty,Tm=Object.prototype.toString,sd=Object.defineProperty,od=Object.getOwnPropertyDescriptor,ad=function(e){return typeof Array.isArray=="function"?Array.isArray(e):Tm.call(e)==="[object Array]"},ld=function(e){if(!e||Tm.call(e)!=="[object Object]")return!1;var t=Ss.call(e,"constructor"),r=e.constructor&&e.constructor.prototype&&Ss.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!t&&!r)return!1;var i;for(i in e);return typeof i>"u"||Ss.call(e,i)},ud=function(e,t){sd&&t.name==="__proto__"?sd(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},cd=function(e,t){if(t==="__proto__")if(Ss.call(e,t)){if(od)return od(e,t).value}else return;return e[t]},_C=function n(){var e,t,r,i,s,o,l=arguments[0],u=1,c=arguments.length,d=!1;for(typeof l=="boolean"&&(d=l,l=arguments[1]||{},u=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});u<c;++u)if(e=arguments[u],e!=null)for(t in e)r=cd(l,t),i=cd(e,t),l!==i&&(d&&i&&(ld(i)||(s=ad(i)))?(s?(s=!1,o=r&&ad(r)?r:[]):o=r&&ld(r)?r:{},ud(l,{name:t,newValue:n(d,o,i)})):typeof i<"u"&&ud(l,{name:t,newValue:i}));return l};const ta=_d(_C);function qa(n){if(typeof n!="object"||n===null)return!1;const e=Object.getPrototypeOf(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)}function wC(){const n=[],e={run:t,use:r};return e;function t(...i){let s=-1;const o=i.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);l(null,...i);function l(u,...c){const d=n[++s];let p=-1;if(u){o(u);return}for(;++p<i.length;)(c[p]===null||c[p]===void 0)&&(c[p]=i[p]);i=c,d?EC(d,l)(...c):o(null,...c)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return n.push(i),e}}function EC(n,e){let t;return r;function r(...o){const l=n.length>o.length;let u;l&&o.push(i);try{u=n.apply(this,o)}catch(c){const d=c;if(l&&t)throw d;return i(d)}l||(u&&u.then&&typeof u.then=="function"?u.then(s,i):u instanceof Error?i(u):s(u))}function i(o,...l){t||(t=!0,e(o,...l))}function s(o){i(null,o)}}const St={basename:IC,dirname:TC,extname:vC,join:AC,sep:"/"};function IC(n,e){if(e!==void 0&&typeof e!="string")throw new TypeError('"ext" argument must be a string');Bi(n);let t=0,r=-1,i=n.length,s;if(e===void 0||e.length===0||e.length>n.length){for(;i--;)if(n.codePointAt(i)===47){if(s){t=i+1;break}}else r<0&&(s=!0,r=i+1);return r<0?"":n.slice(t,r)}if(e===n)return"";let o=-1,l=e.length-1;for(;i--;)if(n.codePointAt(i)===47){if(s){t=i+1;break}}else o<0&&(s=!0,o=i+1),l>-1&&(n.codePointAt(i)===e.codePointAt(l--)?l<0&&(r=i):(l=-1,r=o));return t===r?r=o:r<0&&(r=n.length),n.slice(t,r)}function TC(n){if(Bi(n),n.length===0)return".";let e=-1,t=n.length,r;for(;--t;)if(n.codePointAt(t)===47){if(r){e=t;break}}else r||(r=!0);return e<0?n.codePointAt(0)===47?"/":".":e===1&&n.codePointAt(0)===47?"//":n.slice(0,e)}function vC(n){Bi(n);let e=n.length,t=-1,r=0,i=-1,s=0,o;for(;e--;){const l=n.codePointAt(e);if(l===47){if(o){r=e+1;break}continue}t<0&&(o=!0,t=e+1),l===46?i<0?i=e:s!==1&&(s=1):i>-1&&(s=-1)}return i<0||t<0||s===0||s===1&&i===t-1&&i===r+1?"":n.slice(i,t)}function AC(...n){let e=-1,t;for(;++e<n.length;)Bi(n[e]),n[e]&&(t=t===void 0?n[e]:t+"/"+n[e]);return t===void 0?".":bC(t)}function bC(n){Bi(n);const e=n.codePointAt(0)===47;let t=SC(n,!e);return t.length===0&&!e&&(t="."),t.length>0&&n.codePointAt(n.length-1)===47&&(t+="/"),e?"/"+t:t}function SC(n,e){let t="",r=0,i=-1,s=0,o=-1,l,u;for(;++o<=n.length;){if(o<n.length)l=n.codePointAt(o);else{if(l===47)break;l=47}if(l===47){if(!(i===o-1||s===1))if(i!==o-1&&s===2){if(t.length<2||r!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(u=t.lastIndexOf("/"),u!==t.length-1){u<0?(t="",r=0):(t=t.slice(0,u),r=t.length-1-t.lastIndexOf("/")),i=o,s=0;continue}}else if(t.length>0){t="",r=0,i=o,s=0;continue}}e&&(t=t.length>0?t+"/..":"..",r=2)}else t.length>0?t+="/"+n.slice(i+1,o):t=n.slice(i+1,o),r=o-i-1;i=o,s=0}else l===46&&s>-1?s++:s=-1}return t}function Bi(n){if(typeof n!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(n))}const CC={cwd:kC};function kC(){return"/"}function $a(n){return!!(n!==null&&typeof n=="object"&&"href"in n&&n.href&&"protocol"in n&&n.protocol&&n.auth===void 0)}function RC(n){if(typeof n=="string")n=new URL(n);else if(!$a(n)){const e=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+n+"`");throw e.code="ERR_INVALID_ARG_TYPE",e}if(n.protocol!=="file:"){const e=new TypeError("The URL must be of scheme file");throw e.code="ERR_INVALID_URL_SCHEME",e}return PC(n)}function PC(n){if(n.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const e=n.pathname;let t=-1;for(;++t<e.length;)if(e.codePointAt(t)===37&&e.codePointAt(t+1)===50){const r=e.codePointAt(t+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(e)}const na=["history","path","basename","stem","extname","dirname"];class vm{constructor(e){let t;e?$a(e)?t={path:e}:typeof e=="string"||xC(e)?t={value:e}:t=e:t={},this.cwd="cwd"in t?"":CC.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<na.length;){const s=na[r];s in t&&t[s]!==void 0&&t[s]!==null&&(this[s]=s==="history"?[...t[s]]:t[s])}let i;for(i in t)na.includes(i)||(this[i]=t[i])}get basename(){return typeof this.path=="string"?St.basename(this.path):void 0}set basename(e){ia(e,"basename"),ra(e,"basename"),this.path=St.join(this.dirname||"",e)}get dirname(){return typeof this.path=="string"?St.dirname(this.path):void 0}set dirname(e){hd(this.basename,"dirname"),this.path=St.join(e||"",this.basename)}get extname(){return typeof this.path=="string"?St.extname(this.path):void 0}set extname(e){if(ra(e,"extname"),hd(this.dirname,"extname"),e){if(e.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(e.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=St.join(this.dirname,this.stem+(e||""))}get path(){return this.history[this.history.length-1]}set path(e){$a(e)&&(e=RC(e)),ia(e,"path"),this.path!==e&&this.history.push(e)}get stem(){return typeof this.path=="string"?St.basename(this.path,this.extname):void 0}set stem(e){ia(e,"stem"),ra(e,"stem"),this.path=St.join(this.dirname||"",e+(this.extname||""))}fail(e,t,r){const i=this.message(e,t,r);throw i.fatal=!0,i}info(e,t,r){const i=this.message(e,t,r);return i.fatal=void 0,i}message(e,t,r){const i=new Qe(e,t,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(e){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(e||void 0).decode(this.value)}}function ra(n,e){if(n&&n.includes(St.sep))throw new Error("`"+e+"` cannot be a path: did not expect `"+St.sep+"`")}function ia(n,e){if(!n)throw new Error("`"+e+"` cannot be empty")}function hd(n,e){if(!n)throw new Error("Setting `"+e+"` requires `path` to be set too")}function xC(n){return!!(n&&typeof n=="object"&&"byteLength"in n&&"byteOffset"in n)}const NC=function(n){const r=this.constructor.prototype,i=r[n],s=function(){return i.apply(s,arguments)};return Object.setPrototypeOf(s,r),s},DC={}.hasOwnProperty;class ou extends NC{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=wC()}copy(){const e=new ou;let t=-1;for(;++t<this.attachers.length;){const r=this.attachers[t];e.use(...r)}return e.data(ta(!0,{},this.namespace)),e}data(e,t){return typeof e=="string"?arguments.length===2?(aa("data",this.frozen),this.namespace[e]=t,this):DC.call(this.namespace,e)&&this.namespace[e]||void 0:e?(aa("data",this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;const e=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=t.call(e,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(e){this.freeze();const t=ps(e),r=this.parser||this.Parser;return sa("parse",r),r(String(t),t)}process(e,t){const r=this;return this.freeze(),sa("process",this.parser||this.Parser),oa("process",this.compiler||this.Compiler),t?i(void 0,t):new Promise(i);function i(s,o){const l=ps(e),u=r.parse(l);r.run(u,l,function(d,p,m){if(d||!p||!m)return c(d);const g=p,C=r.stringify(g,m);MC(C)?m.value=C:m.result=C,c(d,m)});function c(d,p){d||!p?o(d):s?s(p):t(void 0,p)}}}processSync(e){let t=!1,r;return this.freeze(),sa("processSync",this.parser||this.Parser),oa("processSync",this.compiler||this.Compiler),this.process(e,i),fd("processSync","process",t),r;function i(s,o){t=!0,id(s),r=o}}run(e,t,r){dd(e),this.freeze();const i=this.transformers;return!r&&typeof t=="function"&&(r=t,t=void 0),r?s(void 0,r):new Promise(s);function s(o,l){const u=ps(t);i.run(e,u,c);function c(d,p,m){const g=p||e;d?l(d):o?o(g):r(void 0,g,m)}}}runSync(e,t){let r=!1,i;return this.run(e,t,s),fd("runSync","run",r),i;function s(o,l){id(o),i=l,r=!0}}stringify(e,t){this.freeze();const r=ps(t),i=this.compiler||this.Compiler;return oa("stringify",i),dd(e),i(e,r)}use(e,...t){const r=this.attachers,i=this.namespace;if(aa("use",this.frozen),e!=null)if(typeof e=="function")u(e,t);else if(typeof e=="object")Array.isArray(e)?l(e):o(e);else throw new TypeError("Expected usable value, not `"+e+"`");return this;function s(c){if(typeof c=="function")u(c,[]);else if(typeof c=="object")if(Array.isArray(c)){const[d,...p]=c;u(d,p)}else o(c);else throw new TypeError("Expected usable value, not `"+c+"`")}function o(c){if(!("plugins"in c)&&!("settings"in c))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(c.plugins),c.settings&&(i.settings=ta(!0,i.settings,c.settings))}function l(c){let d=-1;if(c!=null)if(Array.isArray(c))for(;++d<c.length;){const p=c[d];s(p)}else throw new TypeError("Expected a list of plugins, not `"+c+"`")}function u(c,d){let p=-1,m=-1;for(;++p<r.length;)if(r[p][0]===c){m=p;break}if(m===-1)r.push([c,...d]);else if(d.length>0){let[g,...C]=d;const k=r[m][1];qa(k)&&qa(g)&&(g=ta(!0,k,g)),r[m]=[c,g,...C]}}}}const VC=new ou().freeze();function sa(n,e){if(typeof e!="function")throw new TypeError("Cannot `"+n+"` without `parser`")}function oa(n,e){if(typeof e!="function")throw new TypeError("Cannot `"+n+"` without `compiler`")}function aa(n,e){if(e)throw new Error("Cannot call `"+n+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function dd(n){if(!qa(n)||typeof n.type!="string")throw new TypeError("Expected node, got `"+n+"`")}function fd(n,e,t){if(!t)throw new Error("`"+n+"` finished async. Use `"+e+"` instead")}function ps(n){return OC(n)?n:new vm(n)}function OC(n){return!!(n&&typeof n=="object"&&"message"in n&&"messages"in n)}function MC(n){return typeof n=="string"||LC(n)}function LC(n){return!!(n&&typeof n=="object"&&"byteLength"in n&&"byteOffset"in n)}const FC="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",pd=[],md={allowDangerousHtml:!0},UC=/^(https?|ircs?|mailto|xmpp)$/i,BC=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function jC(n){const e=zC(n),t=qC(n);return $C(e.runSync(e.parse(t),t),n)}function zC(n){const e=n.rehypePlugins||pd,t=n.remarkPlugins||pd,r=n.remarkRehypeOptions?{...n.remarkRehypeOptions,...md}:md;return VC().use(TS).use(t).use(yC,r).use(e)}function qC(n){const e=n.children||"",t=new vm;return typeof e=="string"&&(t.value=e),t}function $C(n,e){const t=e.allowedElements,r=e.allowElement,i=e.components,s=e.disallowedElements,o=e.skipHtml,l=e.unwrapDisallowed,u=e.urlTransform||HC;for(const d of BC)Object.hasOwn(e,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+FC+d.id,void 0);return Im(n,c),rA(n,{Fragment:L.Fragment,components:i,ignoreInvalidStyle:!0,jsx:L.jsx,jsxs:L.jsxs,passKeys:!0,passNode:!0});function c(d,p,m){if(d.type==="raw"&&m&&typeof p=="number")return o?m.children.splice(p,1):m.children[p]={type:"text",value:d.value},p;if(d.type==="element"){let g;for(g in Jo)if(Object.hasOwn(Jo,g)&&Object.hasOwn(d.properties,g)){const C=d.properties[g],k=Jo[g];(k===null||k.includes(d.tagName))&&(d.properties[g]=u(String(C||""),g,d))}}if(d.type==="element"){let g=t?!t.includes(d.tagName):s?s.includes(d.tagName):!1;if(!g&&r&&typeof p=="number"&&(g=!r(d,p,m)),g&&m&&typeof p=="number")return l&&d.children?m.children.splice(p,1,...d.children):m.children.splice(p,1),p}}}function HC(n){const e=n.indexOf(":"),t=n.indexOf("?"),r=n.indexOf("#"),i=n.indexOf("/");return e===-1||i!==-1&&e>i||t!==-1&&e>t||r!==-1&&e>r||UC.test(n.slice(0,e))?n:""}const GC="ashu.61003@gmail.com";function sr(n){var e;return!!(n!=null&&n.emailVerified)&&((e=n.email)==null?void 0:e.toLowerCase())===GC}[{id:"scope",type:"projects",title:"SCOPE",summary:"A solar output estimator built with SwiftUI, Core ML, location, and weather data.",body:`Developed a Solar Capacity Output Potential Estimator for predicting solar generation from user location, roof area, and weather inputs.

The iOS experience brings together maps, onboarding, weather context, and Core ML regression.`,category:"Software",projectStatus:"Completed",period:"Aug 2025",tags:["AI","iOS"],links:[{label:"GitHub",url:"https://github.com/AshutoshSri123/SCOPE"}]},{id:"ecommerce-analytics",type:"projects",title:"E-commerce Analytics",summary:"A Python and SQL pipeline for revenue analysis, segmentation, and visualization.",body:"Created an analytics system covering CSV ingestion, relational modeling, SQL querying, customer segmentation, and notebook reporting.",category:"Software",projectStatus:"Completed",period:"Sep 2025",tags:["Analytics"],links:[{label:"GitHub",url:"https://github.com/AshutoshSri123/SQL_Python_EcommerceProject"}]},{id:"rainbow-coloring",type:"projects",title:"Rainbow Coloring",summary:"Fuzzy logic and rainbow coloring algorithms across graph families.",body:"Co-led a graph algorithm project combining fuzzy logic with rainbow coloring. The work includes alpha-cut graph construction, BFS and DFS checks, spanning-tree coloring, and greedy optimization.",category:"Research",projectStatus:"Completed",period:"Nov 2025",tags:["Algorithms"],links:[{label:"Project report",url:"/files/fuzzy-rainbow-coloring.pdf"}]},{id:"parkinsons-detection",type:"projects",title:"Parkinsons Detection",summary:"A leakage-aware, explainable voice-based machine learning framework.",body:"Built a voice-based biomedical ML framework with GroupKFold validation, feature selection, ensemble classification workflows, and SHAP explanations.",category:"Research",projectStatus:"Completed",period:"Apr 2026",tags:["AI","Research"],links:[{label:"Project report",url:"/files/parkinsons-disease-report.pdf"}]}].map(n=>({...n,published:!0,featured:!1,relatedIds:[],category:"",projectStatus:"Exploring",period:"",...n,format:"Note",attribution:"",reasoning:"",date:"",image:"",collaborators:"",revision:0}));function WC(n){const e=(n==null?void 0:n.code)||"";return e.includes("permission-denied")?"This data is unavailable for this account. Please sign in again or try later.":e.includes("unauthorized-domain")?"Google sign-in is not enabled for this domain yet.":e.includes("operation-not-allowed")?"Google sign-in needs to be enabled in Firebase Authentication.":e.includes("popup-blocked")?"Allow the sign-in popup and try again.":e.includes("popup-closed")?"Sign-in was cancelled. You can try again.":e.includes("invalid-credential")?"The owner email or password was not accepted.":e.includes("failed-precondition")?"The database indexes are still being configured. Please try again shortly.":(n==null?void 0:n.message)||"Could not connect. Please try again."}Ks(It,"personalContent");jn(It,"personalSettings","site");const gd=n=>({id:n.id,...n.data()});async function KC(n,e,t=n.uid,r="message"){if(!e.trim()||e.length>4e3)throw new Error("Write a message of 1–4,000 characters.");const i=jn(It,"personalConversations",t),s=jn(Ks(i,"messages"));await Up(It,async o=>{var c;const l=await o.get(i),u=l.data();if(u!=null&&u.blocked&&!sr(n))throw new Error("This conversation is closed.");if(!sr(n)&&((c=u==null?void 0:u.lastMessageAt)==null?void 0:c.toMillis())>Date.now()-5e3)throw new Error("Please wait a few seconds before sending another message.");if(!l.exists()&&sr(n))throw new Error("Choose an existing conversation.");o.set(s,{text:e.trim(),senderId:n.uid,createdAt:Rn(),kind:r}),o.set(i,{...u||{ownerId:n.uid,ownerName:(sr(n)?"Ashutosh":n.displayName||"Reader").slice(0,100),ownerPhoto:n.photoURL||"",createdAt:Rn(),blocked:!1,adminReadAt:null,userReadAt:null},lastMessage:e.trim(),lastMessageAt:Rn(),lastMessageId:s.id,lastSenderId:n.uid,archived:!1,...sr(n)?{adminReadAt:Rn()}:{userReadAt:Rn()}})})}ae.createContext(null);function QC(n,e){const[t,r]=ae.useState({items:[],loading:!0,error:"",key:e});return ae.useEffect(()=>{if(r({items:[],loading:!!n,error:"",key:e}),!!n)return Ys(n,i=>r({documents:i.docs,items:i.docs?i.docs.map(gd):i.exists()?[gd(i)]:[],loading:!1,error:"",key:e}),i=>r({items:[],loading:!1,error:WC(i),key:e}))},[e]),t.key===e?t:{items:[],loading:!!n,error:""}}function YC(n,e,t=20){const[r,i]=ae.useState({key:e,cursors:[]}),s=r.key===e?r.cursors:[],o=s.at(-1),l=QC(n?Na(n,...o?[HT(o)]:[],Mp(t+1)):null,`${e}:page:${s.map(u=>u.id).join(":")}`);return{...l,items:l.items.slice(0,t),page:s.length+1,hasNext:l.items.length>t,next:()=>{l.items.length>t&&i({key:e,cursors:[...s,l.documents[t-1]]})},previous:()=>i({key:e,cursors:s.slice(0,-1)}),reset:()=>i({key:e,cursors:[]})}}function XC(){var G;const{user:n,loading:e,admin:t}=au(),[r,i]=ae.useState(""),[s,o]=ae.useState([]),[l,u]=ae.useState(null),[c,d]=ae.useState(""),[p,m]=ae.useState(""),[g,C]=ae.useState(!1),k=t?r:n==null?void 0:n.uid,x=ae.useRef(null),N=YC(n&&k?Na(Ks(It,"personalConversations",k,"messages"),vh("createdAt","desc")):null,`contact-${n==null?void 0:n.uid}-${k}`,30);ae.useEffect(()=>{if(t)return Ys(Na(Ks(It,"personalConversations"),vh("lastMessageAt","desc"),Mp(100)),$=>o($.docs.map(D=>({id:D.id,...D.data()}))),()=>m("Couldn’t load your inbox. Please try again."))},[t]),ae.useEffect(()=>{if(d(""),m(""),u(null),!(!n||!k))return Ys(jn(It,"personalConversations",k),$=>{var _,I;const D=$.exists()?$.data():null;u(D);const v=t?"adminReadAt":"userReadAt";((_=D==null?void 0:D.lastMessageAt)==null?void 0:_.toMillis())>(((I=D[v])==null?void 0:I.toMillis())||0)&&YT(jn(It,"personalConversations",k),{[v]:Rn()}).catch(()=>{})},()=>m("Couldn’t load this conversation. Please try again."))},[n,k,t]);const q=(G=N.items[0])==null?void 0:G.id;ae.useEffect(()=>{N.page===1&&x.current&&(x.current.scrollTop=x.current.scrollHeight)},[q,N.page]);async function F($){if($.preventDefault(),!g){C(!0),m("");try{await KC(n,c,k),d(""),N.reset()}catch(D){m(D.code?"Couldn’t send. Your message is still here; please try again.":D.message)}finally{C(!1)}}}return e?L.jsx("p",{role:"status",children:"Checking your session…"}):n?L.jsxs("section",{className:"dm-page",children:[L.jsxs("header",{children:[L.jsx("p",{className:"account-eyebrow",children:"Private messages"}),L.jsx("h1",{children:t?"Your inbox.":"Say hello."}),L.jsx("p",{className:"account-muted",children:t?"Choose a conversation to reply.":"Only you and Ashutosh can read this conversation."})]}),L.jsxs("div",{className:`dm-layout ${t?"dm-admin":""}`,children:[t&&L.jsxs("aside",{className:"dm-inbox","aria-label":"Conversations",children:[!s.length&&L.jsx("p",{className:"account-muted",children:"No messages yet."}),s.map($=>{var D,v;return L.jsxs("button",{className:r===$.id?"is-selected":"",onClick:()=>i($.id),children:[L.jsx("strong",{children:$.ownerName}),L.jsx("span",{children:$.lastMessage}),$.lastSenderId!==n.uid&&((D=$.lastMessageAt)==null?void 0:D.toMillis())>(((v=$.adminReadAt)==null?void 0:v.toMillis())||0)&&L.jsx("small",{children:"Unread"})]},$.id)})]}),k?L.jsxs("div",{className:"dm-thread",children:[L.jsx("h2",{children:t?(l==null?void 0:l.ownerName)||"Conversation":"Ashutosh"}),L.jsxs("div",{className:"dm-history",ref:x,"aria-label":"Message history",role:"log","aria-live":"polite",children:[L.jsxs("div",{className:"dm-pagination",children:[N.hasNext&&L.jsx("button",{className:"account-text-button",onClick:N.next,children:"Earlier messages"}),N.page>1&&L.jsx("button",{className:"account-text-button",onClick:N.previous,children:"Newer messages"})]}),N.loading?L.jsx("p",{role:"status",children:"Loading messages…"}):N.items.length?N.items.slice().reverse().map($=>{var D,v,_,I;return L.jsxs("article",{className:$.senderId===n.uid?"dm-own":"dm-other",children:[L.jsx("span",{children:$.senderId===n.uid?"You":t?l==null?void 0:l.ownerName:"Ashutosh"}),L.jsx("p",{children:$.text}),L.jsx("time",{dateTime:(v=(D=$.createdAt)==null?void 0:D.toDate)==null?void 0:v.call(D).toISOString(),children:((I=(_=$.createdAt)==null?void 0:_.toDate)==null?void 0:I.call(_).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}))||"Sending…"})]},$.id)}):L.jsx("p",{className:"dm-empty",children:"A hello, a question, an idea. Start anywhere."})]}),L.jsx(bi,{children:N.error}),l!=null&&l.blocked&&!t?L.jsx("p",{className:"account-muted",children:"This conversation is closed."}):L.jsxs("form",{className:"dm-composer",onSubmit:F,children:[L.jsx("label",{className:"dm-input-label",htmlFor:"dm-message",children:"Your message"}),L.jsx("textarea",{id:"dm-message",rows:2,maxLength:4e3,placeholder:"Write a message…",required:!0,value:c,onChange:$=>d($.target.value)}),L.jsx("button",{className:"account-button",disabled:g||!c.trim(),children:g?"Sending…":"Send"})]})]}):L.jsx("div",{className:"dm-empty",children:"Your conversations will appear here."})]}),L.jsx(bi,{children:p})]}):L.jsx("section",{className:"account-login",children:L.jsxs("div",{children:[L.jsx("p",{className:"account-eyebrow",children:"Contact"}),L.jsx("h1",{children:"A conversation, just us."}),L.jsx("p",{className:"account-muted",children:"Sign in with Google to message me privately."}),L.jsx(bm,{})]})})}const Am=ae.createContext(null),au=()=>ae.useContext(Am);function bi({children:n}){return n?L.jsx("p",{className:"account-error",role:"alert",children:n}):null}function bm(){const[n,e]=ae.useState(!1),[t,r]=ae.useState("");async function i(){e(!0),r("");try{await sv()}catch(s){s.code!=="auth/popup-closed-by-user"&&r(s.code==="auth/popup-blocked"?"Allow the sign-in popup and try again.":"Google sign-in couldn’t finish. Please try again.")}finally{e(!1)}}return L.jsxs(L.Fragment,{children:[L.jsxs("button",{className:"account-button",onClick:i,disabled:n,children:[L.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":"true",children:L.jsx("path",{fill:"currentColor",d:"M21.6 12.2c0-.7-.1-1.4-.2-2.1H12v4h5.4c-.2 1.2-.9 2.2-1.9 2.9v2.5h3.2c1.9-1.7 2.9-4.2 2.9-7.3ZM12 22c2.7 0 5-.9 6.7-2.5l-3.2-2.5c-.9.6-2.1 1-3.5 1-2.6 0-4.9-1.8-5.7-4.2H3v2.6C4.7 19.8 8.1 22 12 22ZM6.3 13.8A6 6 0 0 1 6 12c0-.6.1-1.2.3-1.8V7.6H3A10 10 0 0 0 2 12c0 1.6.4 3.1 1 4.4l3.3-2.6ZM12 6c1.5 0 2.8.5 3.8 1.5l2.8-2.8A9.6 9.6 0 0 0 12 2C8.1 2 4.7 4.2 3 7.6l3.3 2.6C7.1 7.8 9.4 6 12 6Z"})}),n?"Signing in…":"Continue with Google"]}),L.jsx(bi,{children:t})]})}function JC(){return L.jsxs("section",{className:"account-prose",children:[L.jsx("p",{className:"account-eyebrow",children:"Privacy"}),L.jsx("h1",{children:"Your account and messages."}),L.jsx("p",{children:"Google sign-in provides this website with your email address, display name, and profile photo. Your verified email determines whether you have administrator or view access."}),L.jsx("p",{children:"Private messages are stored in Google Firebase and can be read by the sender and Ashutosh Srivastava. The administrator can publish personal page content for everyone to read."}),L.jsx("p",{children:"Your sign-in session is kept in your browser until you log out. Google and Firebase process authentication and stored data under their own privacy policies."}),L.jsxs("p",{children:["For questions or a request to delete your account data or messages, email ",L.jsx("a",{href:"mailto:ashu.61003@gmail.com",children:"ashu.61003@gmail.com"}),"."]}),L.jsx(ks,{to:"/login",children:"Back to Login"})]})}function ZC(){const{user:n,loading:e,admin:t}=au(),[r,i]=ae.useState("");return e?L.jsx("p",{role:"status",children:"Checking your session…"}):L.jsxs("section",{className:"account-login",children:[L.jsxs("div",{children:[L.jsx("p",{className:"account-eyebrow",children:"Your account"}),L.jsx("h1",{children:n?"You’re signed in.":"Welcome."}),n?L.jsxs(L.Fragment,{children:[L.jsx("p",{className:"account-email",children:n.email}),L.jsx("p",{className:"account-muted",children:t?"Administrator · You can edit the personal pages.":"View access · You can read pages and message Ashutosh privately."}),t&&L.jsx("nav",{className:"account-edit-links","aria-label":"Edit pages",children:["Home","Work","Projects","Identity","Thoughts","Blogs","Photography","Dreams"].map(s=>L.jsxs(ks,{to:s==="Home"?"/?edit=1":`/${s.toLowerCase()}?edit=1`,children:["Edit ",s]},s))})]}):L.jsxs(L.Fragment,{children:[L.jsx("p",{className:"account-muted",children:"Sign in to send a private message."}),L.jsx(bm,{}),L.jsx("p",{className:"account-muted",children:L.jsx(ks,{to:"/privacy",children:"Privacy"})})]})]}),n&&L.jsx("button",{className:"account-button account-logout",onClick:async()=>{try{await ov()}catch{i("Couldn’t log out. Please try again.")}},children:"Log out"}),L.jsx(bi,{children:r})]})}const or={home:"Home",work:"Work",projects:"Projects",identity:"Identity",thoughts:"Thoughts",blogs:"Blogs",photography:"Photography",dreams:"Dreams"};function ek({id:n,onHomeContent:e}){const{admin:t}=au(),r=ae.useRef(!1),i=ae.useRef(0),[s,o]=ae.useState(null),[l,u]=ae.useState(!1),[c,d]=ae.useState(new URLSearchParams(location.search).has("edit")),[p,m]=ae.useState({title:or[n],body:""}),[g,C]=ae.useState(""),[k,x]=ae.useState(!1),[N,q]=ae.useState("");ae.useEffect(()=>Ys(jn(It,"sitePages",n),G=>{const $=G.exists()?G.data():null;o($),u(!0),n==="home"&&e(($==null?void 0:$.body)||null)},()=>{u(!0),C("Couldn’t load this page. Please try again.")}),[n,e]),ae.useEffect(()=>{c||m({title:(s==null?void 0:s.title)||or[n],body:(s==null?void 0:s.body)||""})},[s,c,n]),ae.useEffect(()=>{l&&!r.current&&(r.current=!0,c&&(i.current=(s==null?void 0:s.revision)||0,m({title:(s==null?void 0:s.title)||or[n],body:(s==null?void 0:s.body)||""})))},[l,c,s,n]);async function F(G){G.preventDefault(),x(!0),C(""),q("");try{await Up(It,async $=>{var _;const D=jn(It,"sitePages",n);if((((_=(await $.get(D)).data())==null?void 0:_.revision)||0)!==i.current)throw new Error("This page changed elsewhere. Cancel and reopen the editor to load the latest version.");$.set(D,{title:p.title.trim(),body:p.body.trim(),revision:i.current+1,updatedAt:Rn()})}),d(!1),q("Page published.")}catch($){C($.code?"Couldn’t publish. Your draft is still here; please try again.":$.message)}finally{x(!1)}}return c&&t&&!l?L.jsx("section",{className:"account-page",children:L.jsx("p",{role:"status",children:"Loading editor…"})}):n==="home"&&!t||!t&&!(s!=null&&s.body)?null:L.jsxs("section",{className:`account-page ${n==="home"?"account-home-editor":""}`,children:[t&&L.jsxs("div",{className:"account-editor-bar",children:[L.jsxs("span",{className:"account-muted",children:[or[n]," · Admin"]}),L.jsx("button",{className:"account-text-button",onClick:()=>{i.current=(s==null?void 0:s.revision)||0,m({title:(s==null?void 0:s.title)||or[n],body:(s==null?void 0:s.body)||""}),d(!c),C("")},children:c?"Cancel editing":"Edit page"})]}),c&&t?L.jsxs("form",{className:"account-editor",onSubmit:F,children:[L.jsxs("label",{children:["Page title",L.jsx("input",{required:!0,maxLength:180,value:p.title,onChange:G=>m({...p,title:G.target.value})})]}),L.jsxs("label",{children:[n==="home"?"Homepage introduction":"Page content (Markdown)",L.jsx("textarea",{rows:8,maxLength:3e4,value:p.body,onChange:G=>m({...p,body:G.target.value})})]}),L.jsx("button",{className:"account-button",disabled:k||!l||!p.title.trim(),children:k?"Publishing…":"Publish page"})]}):n!=="home"&&(s!=null&&s.body)?L.jsxs(L.Fragment,{children:[L.jsx("h1",{children:s.title}),L.jsx("div",{className:"account-prose",children:L.jsx(jC,{children:s.body})})]}):null,t&&L.jsxs(L.Fragment,{children:[L.jsx(bi,{children:g}),L.jsx("p",{role:"status",children:N})]})]})}function rk({pathname:n,onHomeContent:e}){const[t,r]=ae.useState(null),[i,s]=ae.useState(!0);ae.useEffect(()=>w_(Hl,l=>{r(l),s(!1)},()=>s(!1)),[]);const o=n==="/"?"home":n.slice(1);return L.jsxs(Am.Provider,{value:{user:t,loading:i,admin:sr(t)},children:[L.jsx(ks,{className:"account-shortcut",to:"/login","aria-label":"Your account",children:t?"Account":"Login"}),o==="privacy"?L.jsx("div",{className:"account-panel",children:L.jsx(JC,{})}):o==="login"?L.jsx("div",{className:"account-panel",children:L.jsx(ZC,{})}):o==="contact"?L.jsx("div",{className:"account-panel account-contact",children:L.jsx(XC,{})}):or[o]?L.jsx(ek,{id:o,onHomeContent:e},o):null]})}export{bi as Alert,bm as SignInButton,rk as default,au as useAccount};
