import{p as v,I as g}from"./index.82b3e35e.js";import{d as k,e as u,_ as h,l as b,f as d,G as B,N,C as m,E as i,D as f,h as S,n as V,i as z,m as I,T}from"./vue-router.esm-bundler.6886084b.js";import{p as w,c as E}from"./components.a5ab3779.js";function P(e){return["default","primary","info","success","warning","danger"].includes(e)}function _(e){return["normal","mini","small","large"].includes(e)}const A={type:{type:String,default:"default",validator:P},size:{type:String,default:"normal",validator:_},color:{type:String},textColor:{type:String},iconName:w(v,"name"),plain:{type:Boolean,default:!1},round:{type:Boolean,default:!0},block:{type:Boolean,default:!1},closable:{type:Boolean,default:!1},onClose:{type:Function}};const{n:o,classes:D}=E("chip"),F=k({name:"VarChip",components:{VarIcon:g},inheritAttrs:!1,props:A,setup(e){const s=u(()=>{const{plain:l,textColor:a,color:n}=e;return l?{color:a||n,borderColor:n}:{color:a,background:n}}),c=u(()=>{const{size:l,block:a,type:n,plain:t,round:r}=e,C=a?"var--flex":"var--inline-flex",y=t?`${o("plain")} ${o(`plain-${n}`)}`:o(`--${n}`),$=r?o("--round"):null;return[o(`--${l}`),C,y,$]});return{n:o,classes:D,chipStyles:s,contentClass:c}}});function G(e,s,c,l,a,n){const t=b("var-icon");return d(),B(T,{name:"var-fade"},{default:N(()=>[m("span",I({class:e.classes(e.n(),"var--box",...e.contentClass),style:e.chipStyles},e.$attrs),[i(e.$slots,"left"),m("span",{class:f(e.n(`text-${e.size}`))},[i(e.$slots,"default")],2),i(e.$slots,"right"),e.closable?(d(),S("span",{key:0,class:f(e.n("--close")),onClick:s[0]||(s[0]=(...r)=>e.onClose&&e.onClose(...r))},[V(t,{name:`${e.iconName?e.iconName:"close-circle"}`},null,8,["name"])],2)):z("v-if",!0)],16)]),_:3})}var p=h(F,[["render",G]]);p.install=function(e){e.component(p.name,p)};export{p as C};