var A=Object.defineProperty,I=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var F=(e,t,o)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,U=(e,t)=>{for(var o in t||(t={}))R.call(t,o)&&F(e,o,t[o]);if(C)for(var o of C(t))z.call(t,o)&&F(e,o,t[o]);return e},B=(e,t)=>I(e,D(t));import{L as $}from"./index.15e423f6.js";import{R as H}from"./index.fef475e0.js";import{h as M,j as P,e as Q}from"./elements.6bb3d81f.js";import{e as q,i as G}from"./shared.61f3a471.js";import{p as O,u as Z,a as E,_ as J,b as K,c as W}from"./en-US.87180fe8.js";import{_ as N}from"./elevation.176aba66.js";import{d as X,r as V,x as Y,C as ee,z as te,e as c,f as ae,o as m,c as p,G as T,h as j,a as v,t as r,i as l,w as ie,m as g,q as oe,_ as ne,j as n,F as _,k as y,l as x}from"./vendor.9810b84e.js";import{C as se}from"./index.83326727.js";import{T as re,a as le}from"./index.abd6d278.js";import{T as de}from"./index.ba727dec.js";import{T as ue}from"./index.aa10540b.js";import{d as fe}from"./index.77fe3760.js";import{w as me,a as ce}from"./utils.72e4e7bc.js";import"./index.e0c8ad15.js";import"./index.7a1299a8.js";import"./index.df33ead7.js";import"./components.84368457.js";import"./index.d1e9c11d.js";import"./provide.7dc02ee4.js";import"./provide.3105dc8a.js";import"./index.3e0a26ee.js";const ge={loading:{type:Boolean,default:!1},immediateCheck:{type:Boolean,default:!0},finished:{type:Boolean,default:!1},error:{type:Boolean,default:!1},offset:{type:[String,Number],default:0},loadingText:{type:String},finishedText:{type:String},errorText:{type:String},onLoad:{type:Function},"onUpdate:loading":{type:Function},"onUpdate:error":{type:Function}};const pe=X({name:"VarList",directives:{Ripple:H},components:{VarLoading:$},props:ge,setup(e){const t=V(null),o=V(null);let i;const h=()=>{var u,s,f;(u=e["onUpdate:error"])==null||u.call(e,!1),(s=e["onUpdate:loading"])==null||s.call(e,!0),(f=e.onLoad)==null||f.call(e)},k=()=>{const u=i===window?window.innerHeight:i.getBoundingClientRect().bottom,{bottom:s}=o.value.getBoundingClientRect();return s-Q(e.offset)<=u},d=async()=>{if(await te(),P(t.value))return;const{loading:u,finished:s,error:f}=e;!u&&!s&&!f&&k()&&h()};return Y(()=>{i=M(t.value),e.immediateCheck&&d(),i.addEventListener("scroll",d)}),ee(()=>{i.removeEventListener("scroll",d)}),{pack:O,listEl:t,detectorEl:o,dt:q,isNumber:G,load:h,check:d}}}),ve={class:"var-list var--box",ref:"listEl"},he={class:"var-list__loading"},Te={class:"var-list__loading-text"},_e={class:"var-list__finished"},be={class:"var-list__detector",ref:"detectorEl"};function ke(e,t,o,i,h,k){const d=c("var-loading"),u=ae("ripple");return m(),p("div",ve,[T(e.$slots,"default"),e.loading?T(e.$slots,"loading",{key:0},()=>[v("div",he,[v("div",Te,r(e.dt(e.loadingText,e.pack.listLoadingText)),1),l(d,{size:"mini",radius:10})])]):j("v-if",!0),e.finished?T(e.$slots,"finished",{key:1},()=>[v("div",_e,r(e.dt(e.finishedText,e.pack.listFinishedText)),1)]):j("v-if",!0),e.error?T(e.$slots,"error",{key:2},()=>[ie(v("div",{class:"var-list__error",onClick:t[0]||(t[0]=(...s)=>e.load&&e.load(...s))},[g(r(e.dt(e.errorText,e.pack.listErrorText)),1)],512),[[u]])]):j("v-if",!0),v("div",be,null,512)],512)}var b=N(pe,[["render",ke]]);b.install=function(e){e.component(b.name,b)};var Le={basicUsage:"\u57FA\u672C\u4F7F\u7528",loadFail:"\u52A0\u8F7D\u5931\u8D25",tipText:"\u63D0\u793A\u6587\u5B57",loadingText:"\u6B63\u5728\u52AA\u529B\u8F93\u51FA",errorText:"\u51FA\u9519\u4E86\u51FA\u9519\u4E86",finishedText:"\u4E00\u6EF4\u90FD\u6CA1\u6709\u4E86",listItem:"\u5217\u8868\u9879"},je={basicUsage:"Basic Usage",loadFail:"Load Fail",tipText:"Tip Text",loadingText:"loading QAQ",errorText:"error TNT",finishedText:"finished ORZ",listItem:"List Item"};const{add:w,use:ye,pack:xe,packs:We,merge:Xe}=Z(),Ce=e=>{W(e),ye(e)};E("zh-CN",J);E("en-US",K);w("zh-CN",Le);w("en-US",je);const Fe={name:"ListExample",components:{VarList:b,VarCell:se,VarTabs:re,VarTab:le,VarTabsItems:de,VarTabItem:ue},setup(){const e=oe({loading:!1,loading2:!1,loading3:!1,finished:!1,finished2:!1,finished3:!1,error:!1,list:[],list2:[],list3:[],current:0});return me(Ce),ce(fe),B(U({pack:xe},ne(e)),{load(){setTimeout(()=>{for(let t=0;t<20;t++)e.list.push(e.list.length+1);e.loading=!1,e.list.length>=60&&(e.finished=!0)},1e3)},load2(){setTimeout(()=>{if(e.list2.length===40){e.error=!0,e.loading2=!1;return}for(let t=0;t<20;t++)e.list2.push(e.list2.length+1);e.loading2=!1},1e3)},load3(){setTimeout(()=>{for(let t=0;t<20;t++)e.list3.push(e.list3.length+1);e.loading3=!1,e.list3.length>=60&&(e.finished3=!0)},1e3)}})}};function Ue(e,t,o,i,h,k){const d=c("var-tab"),u=c("var-tabs"),s=c("var-cell"),f=c("var-list"),L=c("var-tab-item"),S=c("var-tabs-items");return m(),p(_,null,[l(u,{active:e.current,"onUpdate:active":t[0]||(t[0]=a=>e.current=a),sticky:"","offset-top":"54px",style:{"margin-bottom":"10px"}},{default:n(()=>[l(d,null,{default:n(()=>[g(r(i.pack.basicUsage),1)]),_:1}),l(d,null,{default:n(()=>[g(r(i.pack.loadFail),1)]),_:1}),l(d,null,{default:n(()=>[g(r(i.pack.tipText),1)]),_:1})]),_:1},8,["active"]),l(S,{active:e.current,"onUpdate:active":t[5]||(t[5]=a=>e.current=a)},{default:n(()=>[l(L,null,{default:n(()=>[l(f,{finished:e.finished,loading:e.loading,"onUpdate:loading":t[1]||(t[1]=a=>e.loading=a),onLoad:i.load},{default:n(()=>[(m(!0),p(_,null,y(e.list,a=>(m(),x(s,{key:a},{default:n(()=>[g(r(i.pack.listItem)+": "+r(a),1)]),_:2},1024))),128))]),_:1},8,["finished","loading","onLoad"])]),_:1}),l(L,null,{default:n(()=>[l(f,{finished:e.finished2,error:e.error,"onUpdate:error":t[2]||(t[2]=a=>e.error=a),loading:e.loading2,"onUpdate:loading":t[3]||(t[3]=a=>e.loading2=a),onLoad:i.load2},{default:n(()=>[(m(!0),p(_,null,y(e.list2,a=>(m(),x(s,{key:a},{default:n(()=>[g(r(i.pack.listItem)+": "+r(a),1)]),_:2},1024))),128))]),_:1},8,["finished","error","loading","onLoad"])]),_:1}),l(L,null,{default:n(()=>[l(f,{"loading-text":i.pack.loadingText,"finished-text":i.pack.finishedText,"error-text":i.pack.errorText,finished:e.finished3,loading:e.loading3,"onUpdate:loading":t[4]||(t[4]=a=>e.loading3=a),onLoad:i.load3},{default:n(()=>[(m(!0),p(_,null,y(e.list3,a=>(m(),x(s,{key:a},{default:n(()=>[g(r(i.pack.listItem)+": "+r(a),1)]),_:2},1024))),128))]),_:1},8,["loading-text","finished-text","error-text","finished","loading","onLoad"])]),_:1})]),_:1},8,["active"])],64)}var Ye=N(Fe,[["render",Ue]]);export{Ye as default};