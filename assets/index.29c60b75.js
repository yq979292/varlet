import{I as h}from"./index.294df1dc.js";import{B as r}from"./index.5bcd4e7f.js";import{A}from"./index.1ed8bc30.js";import{A as y}from"./AppType.82e96ad0.js";import{S as I}from"./index.6be3c4d4.js";import{d as N}from"./index.5d153c96.js";import{u as j,a as F,_ as $,b as z,c as P}from"./en-US.3df2d949.js";import{a as V,b as L}from"./utils.254ad5e4.js";import{I as T}from"./index.82b3e35e.js";import{_ as H,a as i,e as J,f as K,h as M,C as S,n as a,ag as e,N as l,F as O,J as n,K as u}from"./vue-router.esm-bundler.6886084b.js";import"./index.d4ad7c0c.js";import"./provide.91f81b00.js";import"./components.a5ab3779.js";import"./elements.080427a4.js";import"./index.e207e318.js";import"./index.5d9abc94.js";import"./lock.1297297d.js";import"./index.20e238cd.js";import"./zIndex.dba622ef.js";/* empty css               */import"./index.9f2ba667.js";import"./index.8c9e0d69.js";var q={functionCall:"\u51FD\u6570\u8C03\u7528",componentCall:"\u7EC4\u4EF6\u8C03\u7528",preview:"\u57FA\u672C\u4F7F\u7528",callBack:"\u5904\u7406\u56DE\u8C03\u51FD\u6570",basicUse:"\u57FA\u672C\u4F7F\u7528",specifyInitialPosition:"\u6307\u5B9A\u521D\u59CB\u4F4D\u7F6E",displayCloseButton:"\u5C55\u793A\u5173\u95ED\u6309\u94AE",listenCloseEvents:"\u76D1\u542C\u5173\u95ED\u4E8B\u4EF6",shutdownEvent:"\u89E6\u53D1\u4E86\u5173\u95ED\u4E8B\u4EF6\u3002",showExtraSlots:"\u5C55\u793A\u989D\u5916\u63D2\u69FD",operate:"\u64CD\u4F5C"},G={functionCall:"Function Call",componentCall:"Component Call",preview:"Basic use",callBack:"Handle callback function",basicUse:"Basic use",specifyInitialPosition:"Specify initial position",displayCloseButton:"Display the close button",listenCloseEvents:"Listen for close event",shutdownEvent:"The shutdown event was triggered.",showExtraSlots:"Show extra slots",operate:"Operate"};const{add:b,use:Q,pack:s,packs:Ee,merge:ye}=j(),R=m=>{P(m),Q(m)};F("zh-CN",$);F("en-US",z);b("zh-CN",q);b("en-US",G);const W={class:"image-preview-demo"},X={class:"image-preview-demo"},Y={setup(m){const p=h.Component,B=A.Component,c=i(!1),d=i(!1),w=i(!1),C=i(!1),f=i(!1),g=i(!1),v=i(["https://varlet-varletjs.vercel.app/cat.jpg","https://varlet-varletjs.vercel.app/cat2.jpg"]),k=i(["https://varlet-varletjs.vercel.app/cat.jpg"]),D=J(()=>[{name:s.value.operate,icon:"wrench"},{name:s.value.operate,icon:"wrench"}]),x=()=>{I({content:s.value.shutdownEvent,duration:1e3})},U=()=>{h(k.value)},_=()=>{h({images:v,onChange:E=>{console.log("index",E)}})};return V(R),L(N),(E,t)=>(K(),M(O,null,[S("div",W,[a(e(y),null,{default:l(()=>[n(u(e(s).functionCall),1)]),_:1}),a(e(r),{type:"primary",block:"",onClick:U},{default:l(()=>[n(u(e(s).preview),1)]),_:1}),a(e(r),{type:"primary",block:"",onClick:_},{default:l(()=>[n(u(e(s).callBack),1)]),_:1})]),S("div",X,[a(e(y),null,{default:l(()=>[n(u(e(s).componentCall),1)]),_:1}),a(e(r),{type:"warning",block:"",onClick:t[0]||(t[0]=o=>c.value=!0)},{default:l(()=>[n(u(e(s).basicUse),1)]),_:1}),a(e(p),{images:k.value,show:c.value,"onUpdate:show":t[1]||(t[1]=o=>c.value=o)},null,8,["images","show"]),a(e(r),{type:"warning",block:"",onClick:t[2]||(t[2]=o=>d.value=!0)},{default:l(()=>[n(u(e(s).specifyInitialPosition),1)]),_:1}),a(e(p),{images:v.value,show:d.value,"onUpdate:show":t[3]||(t[3]=o=>d.value=o),current:"https://varlet-varletjs.vercel.app/cat2.jpg"},null,8,["images","show"]),a(e(r),{type:"warning",block:"",onClick:t[4]||(t[4]=o=>w.value=!0)},{default:l(()=>[n(u(e(s).displayCloseButton),1)]),_:1}),a(e(p),{images:v.value,show:w.value,"onUpdate:show":t[5]||(t[5]=o=>w.value=o),closeable:!0},null,8,["images","show"]),a(e(r),{type:"warning",block:"",onClick:t[6]||(t[6]=o=>C.value=!0)},{default:l(()=>[n(u(e(s).listenCloseEvents),1)]),_:1}),a(e(p),{images:v.value,show:C.value,"onUpdate:show":t[7]||(t[7]=o=>C.value=o),onClose:x},null,8,["images","show"]),a(e(r),{type:"warning",block:"",onClick:t[8]||(t[8]=o=>f.value=!0)},{default:l(()=>[n(u(e(s).showExtraSlots),1)]),_:1}),a(e(p),{images:v.value,show:f.value,"onUpdate:show":t[11]||(t[11]=o=>f.value=o)},{extra:l(()=>[a(e(T),{name:"menu",size:22,color:"#fff",onClick:t[9]||(t[9]=o=>g.value=!0)}),a(e(B),{actions:e(D),show:g.value,"onUpdate:show":t[10]||(t[10]=o=>g.value=o)},null,8,["actions","show"])]),_:1},8,["images","show"])])],64))}};var Se=H(Y,[["__scopeId","data-v-3dc8e146"]]);export{Se as default};