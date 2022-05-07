import{I as M}from"./index.a2cba232.js";import{F as T,u as W}from"./provide.59349ed5.js";import{R as P}from"./index.2041b473.js";import{d as q,a as p,t as c,c as A}from"./components.8c0c409a.js";import{t as y}from"./elements.5ea58f07.js";import{d as E,_ as G,n as J,q as F,aa as L,e as v,f as b,k as X,F as j,ac as H,i as K,J as I,G as C,s as z}from"./elevation.ab53b24c.js";const O={modelValue:{type:[String,Number],default:0},count:{type:[String,Number],default:5},color:{type:String},icon:{type:String,default:"star"},emptyColor:{type:String},emptyIcon:{type:String,default:"star-outline"},size:{type:[String,Number],default:"24"},gap:{type:[String,Number],default:"2"},namespace:{type:String},half:{type:Boolean,default:!1},halfIcon:{type:String,default:"star-half-full"},disabled:{type:Boolean,default:!1},disabledColor:{type:String},readonly:{type:Boolean,default:!1},ripple:{type:Boolean,default:!0},rules:{type:Array},onChange:{type:Function},"onUpdate:modelValue":{type:Function}};const{n:u}=A("rate"),Q=E({name:"VarRate",components:{VarIcon:M,VarFormDetails:T},directives:{Ripple:P},props:O,setup(e){const{form:a,bindForm:V}=W(),{errorMessage:f,validateWithTrigger:N,validate:R,resetValidation:i}=q(),g=t=>{const{count:o,size:n,gap:l}=e;return{color:d(t).color,marginRight:t!==c(o)?y(l):0,width:y(n),height:y(n),borderRadius:"50%"}},h=t=>{const{type:o,color:n}=d(t);return{[u("content")]:!0,[u("--disabled")]:(a==null?void 0:a.disabled.value)||e.disabled,[u("--error")]:f.value,[u("--primary")]:o!=="empty"&&!n}},r=t=>{const{type:o}=d(t),{icon:n,halfIcon:l,emptyIcon:s}=e;return o==="full"?n:o==="half"?l:s},d=t=>{const{modelValue:o,disabled:n,disabledColor:l,color:s,half:$,emptyColor:w}=e;let m;return n||(a==null?void 0:a.disabled.value)?m=l:s&&(m=s),t<=c(o)?{type:"full",score:t,color:m}:$&&t<=c(o)+.5?{type:"half",score:t,color:m}:{type:"empty",score:t,color:n||(a==null?void 0:a.disabled.value)?l:w}},B=(t,o)=>{if(e.half){const{offsetWidth:n}=o.target;o.offsetX<=Math.floor(n/2)&&(t-=.5)}p(e["onUpdate:modelValue"],t)},_=()=>R(e.rules,c(e.modelValue)),D=()=>J(()=>N(["onChange"],"onChange",e.rules,e.modelValue)),U=(t,o)=>{const{readonly:n,disabled:l,onChange:s}=e;n||l||(a==null?void 0:a.disabled.value)||(a==null?void 0:a.readonly.value)||(B(t,o),p(s,t),D())},k=()=>{p(e["onUpdate:modelValue"],0),i()};return p(V,{reset:k,validate:_,resetValidation:i}),{errorMessage:f,formDisabled:a==null?void 0:a.disabled,formReadonly:a==null?void 0:a.readonly,getStyle:g,getClass:h,getIconName:r,handleClick:U,reset:k,validate:_,resetValidation:i,toSizeUnit:y,toNumber:c,n:u}}}),Y=["onClick"];function Z(e,a,V,f,N,R){const i=F("var-icon"),g=F("var-form-details"),h=L("ripple");return v(),b("div",{class:C(e.n("warp"))},[X("div",{class:C(e.n())},[(v(!0),b(j,null,H(e.toNumber(e.count),r=>K((v(),b("div",{key:r,style:I(e.getStyle(r)),class:C(e.getClass(r)),onClick:d=>e.handleClick(r,d)},[z(i,{transition:0,namespace:e.namespace,name:e.getIconName(r),style:I({fontSize:e.toSizeUnit(e.size)})},null,8,["namespace","name","style"])],14,Y)),[[h,{disabled:e.formReadonly||e.readonly||e.formDisabled||e.disabled||!e.ripple}]])),128))],2),z(g,{"error-message":e.errorMessage},null,8,["error-message"])],2)}var S=G(Q,[["render",Z]]);S.install=function(e){e.component(S.name,S)};export{S as R};