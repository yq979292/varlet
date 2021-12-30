import{A as I}from"./AppType.a5400838.js";import{d as V,r as P}from"./elements.6bb3d81f.js";import{t as A,p as R}from"./shared.61f3a471.js";import{_ as B}from"./elevation.8fda2ce0.js";import{d as L,r as m,y as O,o as D,c as E,G as Y,$ as q,a0 as G,m as r,t as n,e as x,a as s,i as a,j as l,F as Z,Y as J,Z as K}from"./vendor.8243c41e.js";import{S as Q}from"./index.7080746a.js";import{B as W}from"./index.b52f26c9.js";import{d as X}from"./index.77fe3760.js";import{u as tt,a as M,_ as et,b as ot,c as at}from"./en-US.fd4fd1d9.js";import{w as nt,a as st}from"./utils.16c24a31.js";import"./index.98cd9a0c.js";import"./index.d35523c4.js";import"./zIndex.a9a0aa57.js";import"./index.15644cea.js";import"./components.101c5ac0.js";import"./lock.cbce9ccd.js";import"./index.b947dc5d.js";const ct={time:{type:[String,Number],default:0},format:{type:String,default:"HH : mm : ss"},autoStart:{type:Boolean,default:!0},onEnd:{type:Function},onChange:{type:Function}};const y=1e3,F=60*y,g=60*F,N=24*g,ut=L({name:"VarCountdown",props:ct,setup(t){const o=m(0),c=m(!1),e=m(""),h=m(0),C=m(0),u=m({}),d=p=>{var T;const v=Math.floor(p/N),k=Math.floor(p%N/g),w=Math.floor(p%g/F),_=Math.floor(p%F/y),z=Math.floor(p%y),j={days:v,hours:k,minutes:w,seconds:_,milliseconds:z};u.value=j,(T=t.onChange)==null||T.call(t,u.value),e.value=R(t.format,j)},f=()=>{const{time:p,onEnd:v,autoStart:k}=t,w=Date.now();o.value||(o.value=w+A(p));let _=o.value-w;if(_<0&&(_=0),C.value=_,d(_),_===0){v==null||v();return}(k||c.value)&&(h.value=P(f))},i=()=>{c.value||(c.value=!0,o.value=Date.now()+(C.value||A(t.time)),f())},$=()=>{c.value=!1},b=()=>{o.value=0,c.value=!1,V(h.value),f()};return O(()=>t.time,()=>b(),{immediate:!0}),{showTime:e,timeData:u,start:i,pause:$,reset:b}}}),rt={class:"var-countdown"};function lt(t,o,c,e,h,C){return D(),E("div",rt,[Y(t.$slots,"default",q(G(t.timeData)),()=>[r(n(t.showTime),1)])])}var S=B(ut,[["render",lt]]);S.install=function(t){t.component(S.name,S)};var it={basicUsage:"\u57FA\u672C\u4F7F\u7528",customFormat:"\u81EA\u5B9A\u4E49\u683C\u5F0F",showMillisecond:"\u663E\u793A\u6BEB\u79D2",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",manualControl:"\u624B\u52A8\u63A7\u5236",format:"DD \u5929 HH \u65F6 mm \u5206 ss \u79D2",startText:"\u5F00\u59CB",pauseText:"\u6682\u505C",resetText:"\u91CD\u7F6E"},mt={basicUsage:"Basic Usage",customFormat:"Custom Format",showMillisecond:"Show Millisecond",customStyle:"Custom Style",manualControl:"Manual Control",format:"DD Day, HH:mm:ss",startText:"Start",pauseText:"Pause",resetText:"Reset"};const{add:U,use:dt,pack:ft,packs:Vt,merge:Pt}=tt(),pt=t=>{at(t),dt(t)};M("zh-CN",et);M("en-US",ot);U("zh-CN",it);U("en-US",mt);const _t={name:"CountdownExample",components:{VarCountdown:S,VarButton:W,AppType:I},setup(){const t=m(null),o=m(3e3),c=()=>{Q.info("end!")},e=()=>{console.log("change")};return nt(pt),st(X),{time:o,pack:ft,end:c,countdown:t,change:e}}},H=t=>(J("data-v-4f9fa9e9"),t=t(),K(),t),vt={class:"block"},ht=H(()=>s("span",{class:"colon"},":",-1)),Ct={class:"block"},wt=H(()=>s("span",{class:"colon"},":",-1)),St={class:"block"},kt={class:"btn-container"};function xt(t,o,c,e,h,C){const u=x("app-type"),d=x("var-countdown"),f=x("var-button");return D(),E(Z,null,[s("div",null,[a(u,null,{default:l(()=>[r(n(e.pack.basicUsage),1)]),_:1}),a(d,{time:"108000000"})]),s("div",null,[a(u,null,{default:l(()=>[r(n(e.pack.customFormat),1)]),_:1}),a(d,{time:"108000000",format:e.pack.format},null,8,["format"])]),s("div",null,[a(u,null,{default:l(()=>[r(n(e.pack.showMillisecond),1)]),_:1}),a(d,{time:"108000000",format:"HH : mm : ss : SS"})]),s("div",null,[a(u,null,{default:l(()=>[r(n(e.pack.customStyle),1)]),_:1}),a(d,{time:"108000000"},{default:l(i=>[s("span",vt,n(i.hours),1),ht,s("span",Ct,n(i.minutes),1),wt,s("span",St,n(i.seconds),1)]),_:1})]),s("div",null,[a(u,null,{default:l(()=>[r(n(e.pack.manualControl),1)]),_:1}),a(d,{time:e.time,ref:"countdown","auto-start":!1,format:"ss : SSS",onEnd:e.end,onChange:e.change},null,8,["time","onEnd","onChange"]),s("div",kt,[a(f,{type:"primary",onClick:o[0]||(o[0]=i=>t.$refs.countdown.start())},{default:l(()=>[r(n(e.pack.startText),1)]),_:1}),a(f,{onClick:o[1]||(o[1]=i=>t.$refs.countdown.pause())},{default:l(()=>[r(n(e.pack.pauseText),1)]),_:1}),a(f,{onClick:o[2]||(o[2]=i=>t.$refs.countdown.reset())},{default:l(()=>[r(n(e.pack.resetText),1)]),_:1})])])],64)}var Rt=B(_t,[["render",xt],["__scopeId","data-v-4f9fa9e9"]]);export{Rt as default};