import{S as p}from"./index.e7c0b87f.js";import{B as s}from"./index.62bc3856.js";import{S as D}from"./index.a7cbb0ff.js";import{A as C}from"./AppType.e18d39ce.js";import{d as U}from"./index.5d153c96.js";import{u as E,a as $,_ as A,b as T,c as L}from"./en-US.20b89d07.js";import{a as N,b as z}from"./utils.969b6286.js";import{r as M,at as h,e as V,f as I,s as u,af as t,O as l,k as R,au as k,F as H,K as a,M as n}from"./elevation.ab53b24c.js";import"./index.f1147541.js";import"./components.8c0c409a.js";import"./index.a2cba232.js";import"./elements.5ea58f07.js";import"./zIndex.36a11543.js";import"./index.e14d0f00.js";import"./lock.542c4db9.js";import"./index.2041b473.js";/* empty css               */var K={functionCall:"\u51FD\u6570\u8C03\u7528",componentCall:"\u7EC4\u4EF6\u8C03\u7528",type:"Snackbar \u7C7B\u578B",success:"\u6210\u529F",info:"\u6D88\u606F",warning:"\u8B66\u544A",error:"\u9519\u8BEF",loading:"\u52A0\u8F7D",text:"\u8FD9\u662F\u4E00\u4E2A\u6D88\u606F\u6761\uFF01\uFF01",loaded:"\u52A0\u8F7D\u6210\u529F\uFF01\uFF01",wait:"\u7B49\u5F85\u4E2D...",close:"\u5173\u95ED",basicUsage:"\u57FA\u672C\u4F7F\u7528",multiLine:"\u5782\u76F4\u6392\u5217",bottomDisplay:"\u5E95\u90E8\u663E\u793A",hiddenTime:"\u663E\u793A\u65F6\u957F",forbidClick:"\u7981\u6B62\u7A7F\u900F\u70B9\u51FB",multiple:"\u591A\u4F8B\u6A21\u5F0F"},O={functionCall:"Function Call",componentCall:"Component Call",type:"Snackbar Type",success:"Success",warning:"Warning",info:"Info",error:"Error",loading:"Loading",text:"Hello, I'm a snackbar",loaded:"Loaded",wait:"waiting...",close:"Close",basicUsage:"Basic Usage",multiLine:"Multi-Line",bottomDisplay:"Bottom Display",hiddenTime:"Display Duration",forbidClick:"Forbid Click",multiple:"Multiple"};const{add:B,use:W,pack:e,packs:rt,merge:pt}=E(),j=b=>{L(b),W(b)};$("zh-CN",A);$("en-US",T);B("zh-CN",K);B("en-US",O);const q={class:"snackbar-demo"},dt={setup(b){const F=M({show1:!1,show2:!1,show3:!1,show4:!1,show9:!1}),d=p.Component,{show1:v,show2:w,show3:c,show4:y,show9:g}=h(F),m=r=>{F[r]=!F[r]},f=r=>{const o=r==="loading"?e.value.wait:e.value.text;p[r](o),r==="loading"&&setTimeout(()=>{p.success(e.value.loaded)},2e3)},x=r=>{r==="time"&&p({content:e.value.text,duration:1e3}),r==="position"&&p({content:e.value.text,position:"bottom"}),r||p(e.value.text)},S=()=>{p.allowMultiple(!0);const r=p("Snackbar 1");p.success("Snackbar 2"),setTimeout(()=>{r.clear()},1e3)};return N(j),z(U),(r,o)=>(V(),I(H,null,[u(t(C),null,{default:l(()=>[a(n(t(e).componentCall),1)]),_:1}),u(t(D),{direction:"column",size:"large"},{default:l(()=>[u(t(s),{type:"primary",block:"",onClick:o[0]||(o[0]=i=>m("show1"))},{default:l(()=>[a(n(t(e).basicUsage),1)]),_:1}),u(t(s),{type:"primary",block:"",onClick:o[1]||(o[1]=i=>m("show3"))},{default:l(()=>[a(n(t(e).multiLine),1)]),_:1}),u(t(s),{type:"primary",block:"",onClick:o[2]||(o[2]=i=>m("show2"))},{default:l(()=>[a(n(t(e).bottomDisplay),1)]),_:1}),u(t(s),{type:"primary",block:"",onClick:o[3]||(o[3]=i=>m("show4"))},{default:l(()=>[a(n(t(e).hiddenTime),1)]),_:1}),u(t(s),{type:"primary",block:"",onClick:o[4]||(o[4]=i=>m("show9"))},{default:l(()=>[a(n(t(e).forbidClick),1)]),_:1})]),_:1}),u(t(C),null,{default:l(()=>[a(n(t(e).functionCall),1)]),_:1}),u(t(D),{direction:"column",size:"large"},{default:l(()=>[u(t(s),{type:"warning",block:"",onClick:o[5]||(o[5]=i=>x())},{default:l(()=>[a(n(t(e).basicUsage),1)]),_:1}),u(t(s),{type:"warning",block:"",onClick:o[6]||(o[6]=i=>x("time"))},{default:l(()=>[a(n(t(e).hiddenTime),1)]),_:1}),u(t(s),{type:"warning",block:"",onClick:o[7]||(o[7]=i=>x("position"))},{default:l(()=>[a(n(t(e).bottomDisplay),1)]),_:1})]),_:1}),u(t(C),null,{default:l(()=>[a(n(t(e).type),1)]),_:1}),u(t(D),{direction:"column",size:"large"},{default:l(()=>[u(t(s),{type:"success",block:"",onClick:o[8]||(o[8]=i=>f("success"))},{default:l(()=>[a(n(t(e).success),1)]),_:1}),u(t(s),{type:"warning",block:"",onClick:o[9]||(o[9]=i=>f("warning"))},{default:l(()=>[a(n(t(e).warning),1)]),_:1}),u(t(s),{type:"info",block:"",onClick:o[10]||(o[10]=i=>f("info"))},{default:l(()=>[a(n(t(e).info),1)]),_:1}),u(t(s),{type:"danger",block:"",onClick:o[11]||(o[11]=i=>f("error"))},{default:l(()=>[a(n(t(e).error),1)]),_:1}),u(t(s),{type:"primary",block:"",onClick:o[12]||(o[12]=i=>f("loading"))},{default:l(()=>[a(n(t(e).loading),1)]),_:1})]),_:1}),u(t(C),null,{default:l(()=>[a(n(t(e).multiple),1)]),_:1}),u(t(s),{type:"primary",block:"",onClick:S},{default:l(()=>[a(n(t(e).multiple),1)]),_:1}),R("div",q,[u(t(d),{show:t(v),"onUpdate:show":o[13]||(o[13]=i=>k(v)?v.value=i:null)},{default:l(()=>[a(n(t(e).text),1)]),_:1},8,["show"]),u(t(d),{show:t(w),"onUpdate:show":o[15]||(o[15]=i=>k(w)?w.value=i:null),position:"bottom"},{action:l(()=>[u(t(s),{type:"primary",onClick:o[14]||(o[14]=i=>w.value=!1)},{default:l(()=>[a(n(t(e).close),1)]),_:1})]),default:l(()=>[a(n(t(e).text)+" ",1)]),_:1},8,["show"]),u(t(d),{show:t(c),"onUpdate:show":o[17]||(o[17]=i=>k(c)?c.value=i:null),vertical:!0},{action:l(()=>[u(t(s),{type:"primary",onClick:o[16]||(o[16]=i=>c.value=!1)},{default:l(()=>[a(n(t(e).close),1)]),_:1})]),default:l(()=>[a(n(t(e).text)+" ",1)]),_:1},8,["show"]),u(t(d),{show:t(y),"onUpdate:show":o[18]||(o[18]=i=>k(y)?y.value=i:null),duration:1e3},{default:l(()=>[a(n(t(e).text),1)]),_:1},8,["show"]),u(t(d),{show:t(g),"onUpdate:show":o[19]||(o[19]=i=>k(g)?g.value=i:null),"forbid-click":!0},{default:l(()=>[a(n(t(e).text),1)]),_:1},8,["show"])])],64))}};export{dt as default};