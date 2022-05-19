import{D as m}from"./index.aa662832.js";import{B as r}from"./index.07b1ee50.js";import{I as S}from"./index.33bf2b3a.js";import{S as i}from"./index.7f6a5a67.js";import{C as g}from"./index.6d0da108.js";import{A as w}from"./AppType.df6d3648.js";import{d as x}from"./index.5d153c96.js";import{u as N,a as h,_ as T,b as M,c as $}from"./en-US.405bf1b7.js";import{a as z,b as I}from"./utils.ceea83b2.js";import{_ as P,r as V,at as H,h as L,i as R,x as a,ag as e,P as t,au as y,F as W,M as l,N as n}from"./elevation.60f84ce2.js";import"./index.51b12440.js";import"./lock.e2205651.js";import"./index.70ae26fa.js";import"./zIndex.5c6dd3f6.js";import"./components.ccf91cb3.js";/* empty css               */import"./index.18cbe161.js";import"./elements.d37f043f.js";import"./index.86d61364.js";var j={functionCall:"\u51FD\u6570\u8C03\u7528",basicUsage:"\u57FA\u672C\u4F7F\u7528",modifyTitle:"\u4FEE\u6539\u6807\u9898",hideButton:"\u9690\u85CF\u6309\u94AE",handleUserBehavior:"\u5904\u7406\u7528\u6237\u884C\u4E3A",asyncClose:"\u5F02\u6B65\u5173\u95ED",componentCall:"\u7EC4\u4EF6\u8C03\u7528",title:"\u5170\u4EAD\u5E8F",message:"\u5170\u4EAD\u4E34\u5E16 \u884C\u4E66\u5982\u884C\u4E91\u6D41\u6C34",customSlots:"\u81EA\u5B9A\u4E49\u63D2\u69FD",asyncCloseProgress:"\u6B63\u5728\u5F02\u6B65\u5173\u95ED"},q={functionCall:"Function Call",basicUsage:"Basic Usage",modifyTitle:"Modify Title",hideButton:"Hide Button",handleUserBehavior:"Handle User Behavior",asyncClose:"Asynchronous closing",componentCall:"Component Call",title:"Beat It",message:"Don't Wanna See No Blood, Don't Be A Macho Man",customSlots:"Custom Slots",asyncCloseProgress:"Asynchronous shutdown in progress"};const{add:_,use:G,pack:o,packs:de,merge:Ce}=N(),J=d=>{$(d),G(d)};h("zh-CN",T);h("en-US",M);_("zh-CN",j);_("en-US",q);const K={setup(d){const C=m.Component,E=V({show:!1,show1:!1,show2:!1}),{show:c,show1:p,show2:f}=H(E),v={confirm:()=>i.success("confirm"),cancel:()=>i.error("cancel"),close:()=>i.info("close")},U=()=>m({message:o.value.message}),b=async()=>v[await m(o.value.message)](),D=()=>{m({title:o.value.title,message:o.value.message})},F=()=>{m({message:o.value.message,confirmButton:!1,cancelButton:!1})},B=(k,s)=>{i.loading(o.value.asyncCloseProgress),setTimeout(()=>{v[k](),s()},1e3)},A=()=>{m({message:o.value.message,onBeforeClose:B})};return z(J),I(x),(k,s)=>(L(),R(W,null,[a(e(w),null,{default:t(()=>[l(n(e(o).functionCall),1)]),_:1}),a(e(r),{type:"primary",block:"",onClick:U},{default:t(()=>[l(n(e(o).basicUsage),1)]),_:1}),a(e(r),{type:"primary",block:"",onClick:D},{default:t(()=>[l(n(e(o).modifyTitle),1)]),_:1}),a(e(r),{type:"primary",block:"",onClick:F},{default:t(()=>[l(n(e(o).hideButton),1)]),_:1}),a(e(r),{type:"primary",block:"",onClick:b},{default:t(()=>[l(n(e(o).handleUserBehavior),1)]),_:1}),a(e(r),{type:"primary",block:"",onClick:A},{default:t(()=>[l(n(e(o).asyncClose),1)]),_:1}),a(e(w),null,{default:t(()=>[l(n(e(o).componentCall),1)]),_:1}),a(e(r),{type:"warning",block:"",onClick:s[0]||(s[0]=u=>c.value=!0)},{default:t(()=>[l(n(e(o).basicUsage),1)]),_:1}),a(e(C),{show:e(c),"onUpdate:show":s[1]||(s[1]=u=>y(c)?c.value=u:null),title:e(o).title,message:e(o).message,onConfirm:s[2]||(s[2]=()=>e(i).success("confirm")),onCancel:s[3]||(s[3]=()=>e(i).error("cancel")),onClosed:s[4]||(s[4]=()=>e(i).info("closed"))},null,8,["show","title","message"]),a(e(r),{type:"warning",block:"",onClick:s[5]||(s[5]=u=>p.value=!0)},{default:t(()=>[l(n(e(o).asyncClose),1)]),_:1}),a(e(C),{show:e(p),"onUpdate:show":s[6]||(s[6]=u=>y(p)?p.value=u:null),title:e(o).title,message:e(o).message,onBeforeClose:B},null,8,["show","title","message"]),a(e(r),{type:"warning",block:"",onClick:s[7]||(s[7]=u=>f.value=!0)},{default:t(()=>[l(n(e(o).customSlots),1)]),_:1}),a(e(C),{show:e(f),"onUpdate:show":s[8]||(s[8]=u=>y(f)?f.value=u:null)},{title:t(()=>[a(e(S),{name:"information",color:"#2979ff"})]),default:t(()=>[a(e(g),null,{default:t(()=>[l(n(e(o).message),1)]),_:1}),a(e(g),null,{default:t(()=>[l(n(e(o).message),1)]),_:1}),a(e(g),null,{default:t(()=>[l(n(e(o).message),1)]),_:1})]),_:1},8,["show"])],64))}};var ge=P(K,[["__scopeId","data-v-05585c3c"]]);export{ge as default};