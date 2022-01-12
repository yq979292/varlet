import{A as I}from"./AppType.2df6deed.js";import{d as V,r as P}from"./elements.6bb3d81f.js";import{t as A,p as R}from"./shared.61f3a471.js";import{_ as B}from"./elevation.9adcc0d7.js";import{d as L,r as m,y as O,o as D,c as E,G as Y,$ as q,a0 as G,m as c,t as n,e as x,a as s,i as a,j as l,F as Z,Y as J,Z as K}from"./vendor.9810b84e.js";import{S as Q}from"./index.13630b04.js";import{B as W}from"./index.5cca3230.js";import{d as X}from"./index.77fe3760.js";import{u as ee,a as M,_ as te,b as oe,c as ae}from"./en-US.87180fe8.js";import{w as ne,a as se}from"./utils.72e4e7bc.js";import"./index.1f0f0cdc.js";import"./index.7ee6b4ff.js";import"./zIndex.c115b57d.js";import"./index.e0c8ad15.js";import"./components.84368457.js";import"./lock.6729105e.js";import"./index.fef475e0.js";const ue={time:{type:[String,Number],default:0},format:{type:String,default:"HH : mm : ss"},autoStart:{type:Boolean,default:!0},onEnd:{type:Function},onChange:{type:Function}};const y=1e3,F=60*y,b=60*F,N=24*b,re=L({name:"VarCountdown",props:ue,setup(e){const o=m(0),u=m(!1),t=m(""),h=m(0),C=m(0),r=m({}),d=p=>{var T;const v=Math.floor(p/N),k=Math.floor(p%N/b),w=Math.floor(p%b/F),_=Math.floor(p%F/y),z=Math.floor(p%y),j={days:v,hours:k,minutes:w,seconds:_,milliseconds:z};r.value=j,(T=e.onChange)==null||T.call(e,r.value),t.value=R(e.format,j)},f=()=>{const{time:p,onEnd:v,autoStart:k}=e,w=Date.now();o.value||(o.value=w+A(p));let _=o.value-w;if(_<0&&(_=0),C.value=_,d(_),_===0){v==null||v();return}(k||u.value)&&(h.value=P(f))},i=()=>{u.value||(u.value=!0,o.value=Date.now()+(C.value||A(e.time)),f())},$=()=>{u.value=!1},g=()=>{o.value=0,u.value=!1,V(h.value),f()};return O(()=>e.time,()=>g(),{immediate:!0}),{showTime:t,timeData:r,start:i,pause:$,reset:g}}}),ce={class:"var-countdown"};function le(e,o,u,t,h,C){return D(),E("div",ce,[Y(e.$slots,"default",q(G(e.timeData)),()=>[c(n(e.showTime),1)])])}var S=B(re,[["render",le]]);S.install=function(e){e.component(S.name,S)};var ie={basicUsage:"\u57FA\u672C\u4F7F\u7528",customFormat:"\u81EA\u5B9A\u4E49\u683C\u5F0F",showMillisecond:"\u663E\u793A\u6BEB\u79D2",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",manualControl:"\u624B\u52A8\u63A7\u5236",format:"DD \u5929 HH \u65F6 mm \u5206 ss \u79D2",startText:"\u5F00\u59CB",pauseText:"\u6682\u505C",resetText:"\u91CD\u7F6E"},me={basicUsage:"Basic Usage",customFormat:"Custom Format",showMillisecond:"Show Millisecond",customStyle:"Custom Style",manualControl:"Manual Control",format:"DD Day, HH:mm:ss",startText:"Start",pauseText:"Pause",resetText:"Reset"};const{add:U,use:de,pack:fe,packs:Ve,merge:Pe}=ee(),pe=e=>{ae(e),de(e)};M("zh-CN",te);M("en-US",oe);U("zh-CN",ie);U("en-US",me);const _e={name:"CountdownExample",components:{VarCountdown:S,VarButton:W,AppType:I},setup(){const e=m(null),o=m(3e3),u=()=>{Q.info("end!")},t=()=>{console.log("change")};return ne(pe),se(X),{time:o,pack:fe,end:u,countdown:e,change:t}}},H=e=>(J("data-v-4f9fa9e9"),e=e(),K(),e),ve={class:"block"},he=H(()=>s("span",{class:"colon"},":",-1)),Ce={class:"block"},we=H(()=>s("span",{class:"colon"},":",-1)),Se={class:"block"},ke={class:"btn-container"};function xe(e,o,u,t,h,C){const r=x("app-type"),d=x("var-countdown"),f=x("var-button");return D(),E(Z,null,[s("div",null,[a(r,null,{default:l(()=>[c(n(t.pack.basicUsage),1)]),_:1}),a(d,{time:"108000000"})]),s("div",null,[a(r,null,{default:l(()=>[c(n(t.pack.customFormat),1)]),_:1}),a(d,{time:"108000000",format:t.pack.format},null,8,["format"])]),s("div",null,[a(r,null,{default:l(()=>[c(n(t.pack.showMillisecond),1)]),_:1}),a(d,{time:"108000000",format:"HH : mm : ss : SS"})]),s("div",null,[a(r,null,{default:l(()=>[c(n(t.pack.customStyle),1)]),_:1}),a(d,{time:"108000000"},{default:l(i=>[s("span",ve,n(i.hours),1),he,s("span",Ce,n(i.minutes),1),we,s("span",Se,n(i.seconds),1)]),_:1})]),s("div",null,[a(r,null,{default:l(()=>[c(n(t.pack.manualControl),1)]),_:1}),a(d,{time:t.time,ref:"countdown","auto-start":!1,format:"ss : SSS",onEnd:t.end,onChange:t.change},null,8,["time","onEnd","onChange"]),s("div",ke,[a(f,{type:"primary",onClick:o[0]||(o[0]=i=>e.$refs.countdown.start())},{default:l(()=>[c(n(t.pack.startText),1)]),_:1}),a(f,{onClick:o[1]||(o[1]=i=>e.$refs.countdown.pause())},{default:l(()=>[c(n(t.pack.pauseText),1)]),_:1}),a(f,{onClick:o[2]||(o[2]=i=>e.$refs.countdown.reset())},{default:l(()=>[c(n(t.pack.resetText),1)]),_:1})])])],64)}var Re=B(_e,[["render",xe],["__scopeId","data-v-4f9fa9e9"]]);export{Re as default};