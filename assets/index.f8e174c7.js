import{o as C}from"./elements.d37f043f.js";import{a as F,c as b}from"./components.ccf91cb3.js";import{d as N,aq as x,r as E,a as P,D as R,h as U,i as w,x as a,ag as e,P as n,F as B,M as m,N as p}from"./elevation.60f84ce2.js";import{R as D}from"./index.0f9c1542.js";import{S as z}from"./index.f9bcdf8f.js";import{B as g}from"./index.07b1ee50.js";import{A as h}from"./AppType.df6d3648.js";import{d as $}from"./index.5d153c96.js";import{a as j,c as A}from"./utils.ceea83b2.js";import{u as L,a as v,_ as O,b as q,c as K}from"./en-US.405bf1b7.js";import"./index.33bf2b3a.js";import"./provide.cdcb8397.js";import"./index.18cbe161.js";import"./index.70ae26fa.js";/* empty css               */import"./index.86d61364.js";const{n:M}=b("style-provider"),l=N({name:"VarStyleProvider",props:{styleVars:{type:Object,default:()=>({})}},setup(o,{slots:r}){return()=>x("div",{class:M(),style:C(o.styleVars)},F(r.default))}}),y=[];function u(o={}){y.forEach(t=>document.documentElement.style.removeProperty(t)),y.length=0;const r=C(o);Object.entries(r).forEach(([t,s])=>{document.documentElement.style.setProperty(t,s),y.push(t)})}u.Component=l;l.install=function(o){o.component(l.name,l)};u.install=function(o){o.component(l.name,l)};var G={componentCall:"\u7EC4\u4EF6\u8C03\u7528",functionCall:"\u51FD\u6570\u8C03\u7528",toggleTheme:"\u5207\u6362\u6837\u5F0F\u53D8\u91CF",toggleRootTheme:"\u5207\u6362\u6839\u8282\u70B9\u6837\u5F0F\u53D8\u91CF"},H={componentCall:"Component Call",functionCall:"Function Call",toggleTheme:"Toggle Theme",toggleRootTheme:"Toggle Root Theme"};const{add:_,use:I,pack:i,packs:ie,merge:de}=L(),J=o=>{K(o),I(o)};v("zh-CN",O);v("en-US",q);_("zh-CN",G);_("en-US",H);const fe={setup(o){const r=u.Component,t=E({score:5,license:!0}),s=P(null),T={"--rate-primary-color":"var(--color-success)","--button-primary-color":"var(--color-success)","--switch-handle-active-background":"var(--color-success)","--switch-track-active-background":"var(--color-success)"},V=()=>{s.value=s.value?null:T};let d=null;const k={"--color-primary":"#3f51b5"},S=()=>{d=d?null:k,u(d)};return j(J),R(()=>{u(A()==="darkThemes"?$:null)}),(Q,c)=>(U(),w(B,null,[a(e(h),null,{default:n(()=>[m(p(e(i).componentCall),1)]),_:1}),a(e(r),{"style-vars":s.value},{default:n(()=>[a(e(D),{modelValue:e(t).score,"onUpdate:modelValue":c[0]||(c[0]=f=>e(t).score=f)},null,8,["modelValue"]),a(e(z),{modelValue:e(t).license,"onUpdate:modelValue":c[1]||(c[1]=f=>e(t).license=f)},null,8,["modelValue"]),a(e(g),{style:{"margin-top":"10px"},type:"primary",block:"",onClick:V},{default:n(()=>[m(p(e(i).toggleTheme),1)]),_:1})]),_:1},8,["style-vars"]),a(e(h),null,{default:n(()=>[m(p(e(i).functionCall),1)]),_:1}),a(e(g),{type:"primary",block:"",onClick:S},{default:n(()=>[m(p(e(i).toggleRootTheme),1)]),_:1})],64))}};export{fe as default};