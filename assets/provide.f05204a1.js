import{d as m,_ as l,f as r,G as d,N as c,h as p,C as t,K as o,D as a,i as u,T as f}from"./vue-router.esm-bundler.6886084b.js";import{c as _,h as g,j as F}from"./components.a5ab3779.js";const h={errorMessage:{type:String,default:""},maxlengthText:{type:String,default:""}};const{n:v}=_("form-details"),M=m({name:"VarFormDetails",props:h,setup:()=>({n:v})});function y(e,s,C,D,I,T){return r(),d(f,{name:e.n()},{default:c(()=>[e.errorMessage||e.maxlengthText?(r(),p("div",{key:0,class:a(e.n())},[t("div",{class:a(e.n("message"))},o(e.errorMessage),3),t("div",{class:a(e.n("length"))},o(e.maxlengthText),3)],2)):u("v-if",!0)]),_:1},8,["name"])}var n=l(M,[["render",y]]);n.install=function(e){e.component(n.name,n)};const i=Symbol("FORM_BIND_FORM_ITEM_KEY");function b(){const{bindParent:e,parentProvider:s}=g(i);return{bindForm:e,form:s}}function E(){const{bindChildren:e,childProviders:s}=F(i);return{formItems:s,bindFormItems:e}}export{n as F,E as a,b as u};