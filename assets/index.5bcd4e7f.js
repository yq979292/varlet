import{R as y}from"./index.9f2ba667.js";import{p as d,L as m}from"./index.8c9e0d69.js";import{p as u,c as v}from"./components.a5ab3779.js";import{d as c,a as b,_ as h,l as k,aa as B,A as C,f as p,h as $,G as z,D as i,i as S,C as T,E as L,H as V}from"./vue-router.esm-bundler.6886084b.js";function N(e){return["default","primary","info","success","warning","danger"].includes(e)}function R(e){return["normal","mini","small","large"].includes(e)}const D={type:{type:String,default:"default",validator:N},size:{type:String,default:"normal",validator:R},loading:{type:Boolean,default:!1},round:{type:Boolean,default:!1},block:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outline:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},ripple:{type:Boolean,default:!0},color:{type:String},textColor:{type:String},autoLoading:{type:Boolean,default:!1},loadingRadius:{type:[Number,String],default:12},loadingType:u(d,"type"),loadingSize:u(d,"size"),onClick:{type:Function},onTouchstart:{type:Function}};const{n:w,classes:A}=v("button"),E=c({name:"VarButton",components:{VarLoading:m},directives:{Ripple:y},props:D,setup(e){const a=b(!1),s=o=>{e.autoLoading&&(a.value=!0,Promise.resolve(o).finally(()=>{a.value=!1}))};return{n:w,classes:A,pending:a,handleClick:o=>{const{loading:l,disabled:t,onClick:n}=e;!n||l||t||a.value||s(n(o))},handleTouchstart:o=>{const{loading:l,disabled:t,onTouchstart:n}=e;!n||l||t||a.value||s(n(o))}}}}),F=["disabled"];function P(e,a,s,f,g,o){const l=k("var-loading"),t=B("ripple");return C((p(),$("button",{class:i(e.classes(e.n(),"var--box",e.n(`--${e.size}`),[e.block,`var--flex ${e.n("--block")}`,"var--inline-flex"],[e.disabled,e.n("--disabled")],[e.text,`${e.n(`--text-${e.type}`)} ${e.n("--text")}`,`${e.n(`--${e.type}`)} var-elevation--2`],[e.text&&e.disabled,e.n("--text-disabled")],[e.round,e.n("--round")],[e.outline,e.n("--outline")])),style:V({color:e.textColor,background:e.color}),disabled:e.disabled,onClick:a[0]||(a[0]=(...n)=>e.handleClick&&e.handleClick(...n)),onTouchstart:a[1]||(a[1]=(...n)=>e.handleTouchstart&&e.handleTouchstart(...n))},[e.loading||e.pending?(p(),z(l,{key:0,class:i(e.n("loading")),"var-button-cover":"",type:e.loadingType,size:e.loadingSize,radius:e.loadingRadius},null,8,["class","type","size","radius"])):S("v-if",!0),T("div",{class:i(e.classes(e.n("content"),[e.loading||e.pending,e.n("--hidden")]))},[L(e.$slots,"default")],2)],46,F)),[[t,{disabled:e.disabled||!e.ripple}]])}var r=h(E,[["render",P]]);r.install=function(e){e.component(r.name,r)};export{r as B};