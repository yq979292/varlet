import{I as h}from"./index.82b3e35e.js";import{d as B,e as u,_ as C,l as $,f as a,h as p,n as b,N as S,A as _,B as V,C as N,G as k,K as w,m as D,T as I,E as z,D as A}from"./vue-router.esm-bundler.6886084b.js";import{c as E,t as P}from"./components.a5ab3779.js";function T(e){return["default","primary","info","success","warning","danger"].includes(e)}function G(e){return["right-top","right-bottom","left-top","left-bottom"].includes(e)}const K={type:{type:String,default:"default",validator:T},hidden:{type:Boolean,default:!1},dot:{type:Boolean,default:!1},value:{type:[String,Number],default:0},maxValue:{type:[String,Number]},color:{type:String},position:{type:String,default:"right-top",validator:G},icon:{type:String}};const{n:o,classes:j}=E("badge"),q=B({name:"VarBadge",components:{VarIcon:h},inheritAttrs:!1,props:K,setup(e,{slots:i}){const l=u(()=>{const{type:n,position:t,dot:s,icon:f}=e,m=i.default&&`${o("position")} ${o(`--${t}`)}`,g=s&&o("dot"),v=d(),y=f?o("icon"):null;return[o(`--${n}`),m,g,v,y]}),c=u(()=>{const{dot:n,value:t,maxValue:s}=e;return n?"":t!==void 0&&s!==void 0&&P(t)>s?`${s}+`:t}),d=()=>{const{position:n,dot:t}=e;if(t&&n.includes("right"))return o("dot--right");if(t&&n.includes("left"))return o("dot--left")};return{n:o,classes:j,values:c,contentClass:l}}}),F={key:1};function H(e,i,l,c,d,n){const t=$("var-icon");return a(),p("div",{class:A(e.classes(e.n(),"var--box"))},[b(I,{name:"var-badge-fade"},{default:S(()=>[_(N("span",D(e.$attrs,{class:e.classes(e.n("content"),...e.contentClass),style:{background:e.color}}),[e.icon&&!e.dot?(a(),k(t,{key:0,name:e.icon,size:"10px"},null,8,["name"])):(a(),p("span",F,w(e.values),1))],16),[[V,!e.hidden]])]),_:1}),z(e.$slots,"default")],2)}var r=C(q,[["render",H]]);r.install=function(e){e.component(r.name,r)};export{r as B};