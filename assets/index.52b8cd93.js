var N=Object.defineProperty,k=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var y=(s,e,t)=>e in s?N(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,m=(s,e)=>{for(var t in e||(e={}))I.call(e,t)&&y(s,t,e[t]);if(v)for(var t of v(e))L.call(e,t)&&y(s,t,e[t]);return s},h=(s,e)=>k(s,T(e));import{c as C,u as _,r as p,o as i,a as u,w as x,v as $,b as c,n as D,d as M,e as P,f,t as E,g as b,h as S,i as G,j as l,F as A,k as O,l as w,m as U}from"./vendor.cb5dc313.js";const j=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}};j();class V{constructor(e,t){return new Promise((n,o)=>{const r="messages";this.db=null,this.dbName=e,this.dbVersion=t,this.storeName=r,this.indexedDB=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB||window.shimIndexedDB,"indexedDB"in window||o("not supported");const a=indexedDB.open(e,t);a.onupgradeneeded=()=>{this.db=a.result,this.db.objectStoreNames.contains(this.storeName)||this.db.createObjectStore(this.storeName,{keyPath:"created"})},a.onsuccess=()=>{this.db=a.result,n(this)},a.onerror=d=>{o(`IndexedDB error: ${d.target.errorCode}`)}})}set(e){return new Promise((t,n)=>{const o=this.db.transaction(this.storeName,"readwrite");o.objectStore(this.storeName).put(e),o.oncomplete=()=>{t(!0),this.db.close()},o.onerror=()=>{n(o.error)}})}delete(e){return new Promise((t,n)=>{const o=this.db.transaction(this.storeName,"readwrite");o.objectStore(this.storeName).delete(e),o.oncomplete=()=>{t(!0),this.db.close()},o.onerror=()=>{n(o.error)}})}getAll(){return new Promise((e,t)=>{const r=this.db.transaction(this.storeName,"readonly").objectStore(this.storeName).getAll();r.onsuccess=()=>{e(r.result)},r.onerror=()=>{t(r.error)}})}}const F=(s,e)=>{let t=s+Math.random()*(e+1-s);return Math.floor(t)},R=()=>F(0,1)>=.9?"error":"success",q=C({state(){return{db:null,username:sessionStorage.getItem("username")||null,messages:[]}},mutations:{SET_DB:(s,e)=>{s.db=e},SET_MESSAGES:(s,e)=>{s.messages=e},ADD_MESSAGE:(s,e)=>{s.messages.unshift(e)},PATCH_MESSAGE:(s,e)=>{s.messages.shift(),s.messages.unshift(e)},DELETE_MESSAGE:(s,e)=>{s.messages.splice(e,1)},SET_USERNAME:(s,e)=>{s.username=e}},actions:{async connectDB({commit:s}){s("SET_DB",await new V("chat",1))},async sendMessage({dispatch:s,commit:e},t){e("ADD_MESSAGE",h(m({},t),{status:"loading"}));const n=R(),o=h(m({},t),{status:n});setTimeout(()=>{s("addMessageToDB",o),e("PATCH_MESSAGE",h(m({},t),{status:n}))},1e3)},async fetchMessages({state:s,dispatch:e,commit:t}){await e("connectDB");const n=await s.db.getAll();t("SET_MESSAGES",n.reverse())},async addMessageToDB({dispatch:s,state:e},t){await s("connectDB"),await e.db.set(t)},async resendMessage({dispatch:s,state:e,commit:t},n){const o=e.messages.findIndex(r=>r.created===n.created);await s("connectDB"),await e.db.delete(n.created),await s("sendMessage",n),t("DELETE_MESSAGE",o)},login({commit:s},e){s("SET_USERNAME",e),sessionStorage.setItem("username",e)}}});var g="/test_tasmo-group/assets/sprite.91b6404f.svg";const z=g+"#send",H=["onSubmit"],K=["disabled"],J=c("svg",{class:"send-message__icon"},[c("use",{"xlink:href":z})],-1),Q=[J],W={setup(s){const e=_(),t=p(""),n=e.state.username,o=r=>{e.dispatch("sendMessage",{created:Date.now(),author:n,text:t.value}),r.target.reset()};return(r,a)=>(i(),u("form",{class:"send-message",onSubmit:M(o,["prevent"])},[x(c("textarea",{"onUpdate:modelValue":a[0]||(a[0]=d=>t.value=d),class:"send-message__body",placeholder:"\u041D\u0430\u0447\u043D\u0438\u0442\u0435 \u043F\u0438\u0441\u0430\u0442\u044C..."},null,512),[[$,t.value,void 0,{trim:!0}]]),c("button",{type:"submit",class:D(["send-message__submit",{active:t.value}]),disabled:!t.value},Q,10,K)],40,H))}};var B=(s,e)=>{const t=s.__vccOpts||s;for(const[n,o]of e)t[n]=o;return t};const X={},Y=g+"#loading",Z={class:"message__status"},ee=c("svg",{class:"message__status-icon status status--loading"},[c("use",{"xlink:href":Y})],-1),se=[ee];function te(s,e){return i(),u("span",Z,se)}var oe=B(X,[["render",te]]);const ne=g+"#error",re=P(" \u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0443 "),ae=c("svg",{class:"message__status-icon status status--error"},[c("use",{"xlink:href":ne})],-1),ce=[re,ae],ie={emits:["sendAgain"],setup(s,{emit:e}){const t=()=>{e("sendAgain")};return(n,o)=>(i(),u("button",{class:"message__status",onClick:t},ce))}},de={},ue=g+"#success",le={class:"message__status"},_e=c("svg",{class:"message__status-icon status status--success"},[c("use",{"xlink:href":ue})],-1),me=[_e];function he(s,e){return i(),u("span",le,me)}var ge=B(de,[["render",he]]);const pe={class:"message"},fe={class:"message__body"},be={key:0,class:"message__author"},Se={props:{msg:{type:Object,default:()=>{}},isAuthor:{type:Boolean,default:!1}},setup(s){const e=s,t={loading:oe,error:ie,success:ge},n=f(()=>t[e.msg.status]),o=_(),r=a=>{o.dispatch("resendMessage",a)};return(a,d)=>(i(),u("li",pe,[c("p",fe,E(e.msg.text),1),e.isAuthor?b("",!0):(i(),u("span",be,E(e.msg.author),1)),(i(),S(G(l(n)),{onSendAgain:d[0]||(d[0]=Be=>r(e.msg))}))]))}},ve={key:0,class:"messages"},ye={setup(s){const e=p(!1),t=f(()=>n.state.messages),n=_(),o=n.state.username;return n.dispatch("fetchMessages").then(()=>{e.value=!0}),(r,a)=>e.value?(i(),u("ul",ve,[(i(!0),u(A,null,O(l(t),d=>(i(),S(Se,{key:d.created,msg:d,"is-author":d.author===l(o),class:D(d.author===l(o)?"message--send":"message--received")},null,8,["msg","is-author","class"]))),128))])):b("",!0)}},Ee=["onSubmit"],we=c("label",{for:"name",class:"overlay__label"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F, \u0447\u0442\u043E\u0431\u044B \u0432\u043E\u0439\u0442\u0438",-1),xe=["disabled"],$e={setup(s){const e=p(null),t=_(),n=()=>{t.dispatch("login",e.value)};return(o,r)=>(i(),u("form",{class:"overlay",onSubmit:M(n,["prevent"])},[we,x(c("input",{id:"name","onUpdate:modelValue":r[0]||(r[0]=a=>e.value=a),type:"text",class:"overlay__input"},null,512),[[$,e.value,void 0,{trim:!0}]]),c("button",{class:"overlay__btn",disabled:!e.value,type:"submit"},"\u0412\u043E\u0439\u0442\u0438",8,xe)],40,Ee))}},De={class:"container"},Me={setup(s){const e=_(),t=f(()=>!!e.state.username);return(n,o)=>(i(),u(A,null,[c("main",De,[w(ye),w(W)]),l(t)?b("",!0):(i(),S($e,{key:0}))],64))}};const Ae=U(Me);Ae.use(q).mount("#app");
