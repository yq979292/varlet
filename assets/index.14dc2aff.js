import{t as i}from"./elements.5ea58f07.js";import{c as m}from"./components.8c0c409a.js";import{d as c,_ as d,e as o,f as t,k as n,G as a,J as p,H as r,j as f}from"./elevation.ab53b24c.js";import{u as h,a as l,_ as v,b,c as B}from"./en-US.20b89d07.js";const{n:C,classes:N}=m("table"),y=c({name:"VarTable",props:{fullWidth:{type:[Number,String],default:"100%"}},setup(){return{toSizeUnit:i,n:C,classes:N}}});function S(e,g,z,F,k,D){return o(),t("div",{class:a(e.classes(e.n(),"var-elevation--1 var--box"))},[n("div",{class:a(e.n("main"))},[n("table",{class:a(e.n("table")),style:p({width:e.toSizeUnit(e.fullWidth)})},[r(e.$slots,"default")],6)],2),e.$slots.footer?(o(),t("div",{key:0,class:a(e.n("footer"))},[r(e.$slots,"footer")],2)):f("v-if",!0)],2)}var s=d(y,[["render",S]]);s.install=function(e){e.component(s.name,s)};var U={basicUsage:"\u57FA\u672C\u4F7F\u7528",slot:"\u5C3E\u90E8\u63D2\u69FD",math:"\u6570\u5B66",english:"\u82F1\u8BED",tom:"\u706B\u732B\u6851",jerry:"\u8017\u5B50\u541B",name:"\u59D3\u540D"},_={basicUsage:"Basic Usage",slot:"Footer Slots",math:"Math",english:"English",frontend:"Frontend",tom:"Tom",jerry:"Jerry",name:"Name"};const{add:u,use:$,pack:J,packs:W,merge:w}=h(),A=e=>{B(e),$(e)};l("zh-CN",v);l("en-US",b);u("zh-CN",U);u("en-US",_);export{s as T,J as p,A as u};