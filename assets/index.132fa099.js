import{S as p}from"./index.daa99c1a.js";import{h as u,m as _,c as l}from"./components.8c0c409a.js";import{T as d,a as f}from"./provide.95df33bb.js";import{d as b,a as c,b as v,_ as I,q as T,e as S,h as C,O as B,H as E,j as w,G as P}from"./elevation.ab53b24c.js";function h(){const{parentProvider:e,bindParent:s}=u(d),{index:t}=_(f);if(!e||!s||!t)throw Error("<var-tab-item/> must in <var-tabs-items/>");return{index:t,tabsItems:e,bindTabsItems:s}}const A={name:{type:[String,Number]}};const{n:N,classes:$}=l("tab-item"),y=b({name:"VarTabItem",components:{VarSwipeItem:p},props:A,setup(e){const s=c(!1),t=c(!1),n=v(()=>e.name),{index:r,bindTabsItems:o}=h();return o({index:r,name:n,setCurrent:i=>{!t.value&&i&&(t.value=!0),s.value=i}}),{n:N,classes:$,current:s,initSlot:t}}});function M(e,s,t,n,r,o){const m=T("var-swipe-item");return S(),C(m,{class:P(e.classes(e.n(),[!e.current,e.n("--inactive")])),"var-tab-item-cover":""},{default:B(()=>[e.initSlot?E(e.$slots,"default",{key:0}):w("v-if",!0)]),_:3},8,["class"])}var a=I(y,[["render",M]]);a.install=function(e){e.component(a.name,a)};export{a as T};