import{I as m}from"./index.1a464ece.js";import{B as E}from"./index.b52f26c9.js";import{A as j}from"./AppType.a5400838.js";import{S as y}from"./index.7080746a.js";import{u as F,a as g,_ as S,b as B,c as U}from"./en-US.fd4fd1d9.js";import{w as D,b as $}from"./utils.16c24a31.js";import{c}from"./index.15644cea.js";import{_ as I}from"./elevation.8fda2ce0.js";import{d as A,C as N,r,e as d,o as P,c as z,a as h,i as s,j as n,F as T,m as t,t as i}from"./vendor.8243c41e.js";import"./index.39f2dbb6.js";import"./provide.793c6bf8.js";import"./components.101c5ac0.js";import"./shared.61f3a471.js";import"./elements.6bb3d81f.js";import"./index.82406e7f.js";import"./index.d35523c4.js";import"./index.7771e138.js";import"./lock.cbce9ccd.js";import"./zIndex.a9a0aa57.js";import"./index.b947dc5d.js";import"./index.98cd9a0c.js";var V={functionCall:"\u51FD\u6570\u8C03\u7528",componentCall:"\u7EC4\u4EF6\u8C03\u7528",preview:"\u57FA\u672C\u4F7F\u7528",callBack:"\u5904\u7406\u56DE\u8C03\u51FD\u6570",basicUse:"\u57FA\u672C\u4F7F\u7528",specifyInitialPosition:"\u6307\u5B9A\u521D\u59CB\u4F4D\u7F6E",displayCloseButton:"\u5C55\u793A\u5173\u95ED\u6309\u94AE",listenCloseEvents:"\u76D1\u542C\u5173\u95ED\u4E8B\u4EF6",shutdownEvent:"\u89E6\u53D1\u4E86\u5173\u95ED\u4E8B\u4EF6\u3002"},L={functionCall:"Function Call",componentCall:"Component Call",preview:"Basic use",callBack:"Handle callback function",basicUse:"Basic use",specifyInitialPosition:"Specify initial position",displayCloseButton:"Display the close button",listenCloseEvents:"Listen for close event",shutdownEvent:"The shutdown event was triggered."};const{add:k,use:_,pack:b,packs:ce,merge:de}=F(),H=e=>{U(e),_(e)};g("zh-CN",S);g("en-US",B);k("zh-CN",V);k("en-US",L);const q=A({name:"ImagePreviewExample",components:{VarImagePreview:m.Component,VarButton:E,AppType:j},setup(){const e=["https://varlet.gitee.io/varlet-ui/cat.jpg","https://varlet.gitee.io/varlet-ui/cat2.jpg"],o=["https://varlet.gitee.io/varlet-ui/cat.jpg"],v=()=>{y({content:b.value.shutdownEvent,duration:1e3})},w=()=>{m({images:e,onChange:u=>{console.log("index",u)}})};D(H);const f=c.touchmoveForbid;return $(u=>{u==="pc"&&(c.touchmoveForbid=!1)}),N(()=>{c.touchmoveForbid=f}),{preview(){m(o)},previewCallback:w,pack:b,show:r(!1),currentShow:r(!1),closeShow:r(!1),closeEventShow:r(!1),images:r(e),image:r(o),handleCloseEvent:v}}}),G={class:"image-preview-demo"},J={class:"image-preview-demo"};function K(e,o,v,w,f,u){const C=d("app-type"),l=d("var-button"),p=d("var-image-preview");return P(),z(T,null,[h("div",G,[s(C,null,{default:n(()=>[t(i(e.pack.functionCall),1)]),_:1}),s(l,{type:"primary",block:"",onClick:e.preview},{default:n(()=>[t(i(e.pack.preview),1)]),_:1},8,["onClick"]),s(l,{type:"primary",block:"",onClick:e.previewCallback},{default:n(()=>[t(i(e.pack.callBack),1)]),_:1},8,["onClick"])]),h("div",J,[s(C,null,{default:n(()=>[t(i(e.pack.componentCall),1)]),_:1}),s(l,{type:"warning",block:"",onClick:o[0]||(o[0]=a=>e.show=!0)},{default:n(()=>[t(i(e.pack.basicUse),1)]),_:1}),s(p,{images:e.image,show:e.show,"onUpdate:show":o[1]||(o[1]=a=>e.show=a)},null,8,["images","show"]),s(l,{type:"warning",block:"",onClick:o[2]||(o[2]=a=>e.currentShow=!0)},{default:n(()=>[t(i(e.pack.specifyInitialPosition),1)]),_:1}),s(p,{images:e.images,show:e.currentShow,"onUpdate:show":o[3]||(o[3]=a=>e.currentShow=a),current:"https://varlet.gitee.io/varlet-ui/cat2.jpg"},null,8,["images","show"]),s(l,{type:"warning",block:"",onClick:o[4]||(o[4]=a=>e.closeShow=!0)},{default:n(()=>[t(i(e.pack.displayCloseButton),1)]),_:1}),s(p,{images:e.images,show:e.closeShow,"onUpdate:show":o[5]||(o[5]=a=>e.closeShow=a),closeable:!0},null,8,["images","show"]),s(l,{type:"warning",block:"",onClick:o[6]||(o[6]=a=>e.closeEventShow=!0)},{default:n(()=>[t(i(e.pack.listenCloseEvents),1)]),_:1}),s(p,{images:e.images,show:e.closeEventShow,"onUpdate:show":o[7]||(o[7]=a=>e.closeEventShow=a),onClose:e.handleCloseEvent},null,8,["images","show","onClose"])])],64)}var ve=I(q,[["render",K],["__scopeId","data-v-70a9600b"]]);export{ve as default};