import{F as re,u as ie}from"./provide.d31d5798.js";import{I as de}from"./index.32f19c73.js";import{P as ue}from"./index.77f09fcc.js";import{I as ce}from"./index.8c099cef.js";import{R as me}from"./index.bee8a319.js";import{d as pe,a as D,b as O,w as ve,_ as fe,r as U,n as ge,s as A,ab as ye,f as m,h as p,l as V,F as he,ad as be,j as J,H as r,N as Ve,ac as we,t as w,k as R,K as Re,J as Pe,P as Ce}from"./elevation.291695bd.js";import{d as ke,a as v,C as K,D as q,c as Be,i as Fe,g as G,t as Q}from"./components.22d2a65f.js";const Se={modelValue:{type:Array,default:()=>[]},accept:{type:String,default:"image/*"},capture:{type:[String,Boolean],default:void 0},multiple:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},removable:{type:Boolean,default:!0},maxlength:{type:[Number,String]},maxsize:{type:[Number,String]},previewed:{type:Boolean,default:!0},ripple:{type:Boolean,default:!0},validateTrigger:{type:Array,default:()=>["onChange","onRemove"]},rules:{type:Array},hideList:{type:Boolean,default:!1},onBeforeRead:{type:Function},onAfterRead:{type:Function},onBeforeRemove:{type:Function},onRemove:{type:Function},onOversize:{type:Function},"onUpdate:modelValue":{type:Function}};const{n:$e,classes:De}=Be("uploader");let Ue=0;const Ae=pe({name:"VarUploader",directives:{Ripple:me},components:{VarIcon:de,VarPopup:ue,VarFormDetails:re},props:Se,setup(e){const d=D(null),P=D(!1),C=D(null),T=O(()=>{const{maxlength:a,modelValue:{length:s}}=e;return Fe(a)?`${s} / ${a}`:""}),{form:n,bindForm:y}=ie(),{errorMessage:k,validateWithTrigger:B,validate:h,resetValidation:l}=ke(),f=O(()=>{const{modelValue:a,hideList:s}=e;return s?[]:a}),X=()=>{d.value.click()},Y=a=>{const{disabled:s,readonly:t,previewed:o}=e;if((n==null?void 0:n.disabled.value)||(n==null?void 0:n.readonly.value)||s||t||!o)return;const{url:i}=a;if(G(i)&&q(i)){ce(i);return}G(i)&&K(i)&&(C.value=a,P.value=!0)},Z=a=>({id:Ue++,url:"",cover:"",name:a.name,file:a}),_=a=>{const s=a.target,{files:t}=s;return Array.from(t)},x=a=>new Promise(s=>{const t=new FileReader;t.onload=()=>{const o=t.result;a.file.type.startsWith("image")&&(a.cover=o),a.url=o,s(a)},t.readAsDataURL(a.file)}),ee=a=>a.map(x),ae=a=>{const{onBeforeRead:s}=e;return a.map(t=>new Promise(o=>{const i=s?s(U(t)):!0;Promise.resolve(i).then(g=>o({valid:g,varFile:t}))}))},le=async a=>{const{maxsize:s,maxlength:t,modelValue:o,onOversize:i,onAfterRead:g,readonly:S,disabled:$}=e;if((n==null?void 0:n.disabled.value)||(n==null?void 0:n.readonly.value)||$||S)return;const se=u=>u.filter(b=>b.file.size>Q(s)?(v(i,U(b)),!1):!0),te=u=>{const b=Math.min(u.length,Q(t)-o.length);return u.slice(0,b)};let c=_(a).map(Z);c=s!=null?se(c):c,c=t!=null?te(c):c;const oe=await Promise.all(ee(c)),j=(await Promise.all(ae(oe))).filter(({valid:u})=>u).map(({varFile:u})=>u);v(e["onUpdate:modelValue"],[...o,...j]),a.target.value="",j.forEach(u=>v(g,U(u)))},ne=async a=>{const{disabled:s,readonly:t,modelValue:o,onBeforeRemove:i,onRemove:g}=e;if((n==null?void 0:n.disabled.value)||(n==null?void 0:n.readonly.value)||s||t||i&&!await i(a))return;const S=o.filter($=>$!==a);v(g,a),H("onRemove"),v(e["onUpdate:modelValue"],S)},N=()=>e.modelValue.filter(a=>a.state==="success"),z=()=>e.modelValue.filter(a=>a.state==="error"),M=()=>e.modelValue.filter(a=>a.state==="loading"),I={getSuccess:N,getError:z,getLoading:M},H=a=>{ge(()=>{const{validateTrigger:s,rules:t,modelValue:o}=e;B(s,a,t,o,I)})};let F=!1;const E=()=>h(e.rules,e.modelValue,I),W=()=>{F=!0,v(e["onUpdate:modelValue"],[]),l()};return v(y,{validate:E,resetValidation:l,reset:W}),ve(()=>e.modelValue,()=>{!F&&H("onChange"),F=!1},{deep:!0}),{n:$e,classes:De,input:d,files:f,showPreview:P,currentPreview:C,errorMessage:k,maxlengthText:T,isHTMLSupportVideo:K,isHTMLSupportImage:q,formDisabled:n==null?void 0:n.disabled,formReadonly:n==null?void 0:n.readonly,preview:Y,triggerAction:X,handleChange:le,handleRemove:ne,getSuccess:N,getError:z,getLoading:M,validate:E,resetValidation:l,reset:W}}}),Le=["onClick"],Te=["onClick"],Ne=["src","alt"],ze=["multiple","accept","capture","disabled"],Me=["src"];function Ie(e,d,P,C,T,n){const y=A("var-icon"),k=A("var-form-details"),B=A("var-popup"),h=ye("ripple");return m(),p("div",{class:r(e.classes(e.n(),"var--box"))},[V("div",{class:r(e.n("file-list"))},[(m(!0),p(he,null,be(e.files,l=>J((m(),p("div",{class:r(e.classes(e.n("file"),"var-elevation--2",[l.state==="loading",e.n("--loading")])),key:l.id,onClick:f=>e.preview(l)},[V("div",{class:r(e.n("file-name"))},Ve(l.name||l.url),3),e.removable?(m(),p("div",{key:0,class:r(e.n("file-close")),onClick:we(f=>e.handleRemove(l),["stop"])},[w(y,{class:r(e.n("file-close-icon")),"var-uploader-cover":"",name:"delete"},null,8,["class"])],10,Te)):R("v-if",!0),l.cover?(m(),p("img",{key:1,class:r(e.n("file-cover")),style:Re({objectFit:l.fit}),src:l.cover,alt:l.name},null,14,Ne)):R("v-if",!0),V("div",{class:r(e.classes(e.n("file-indicator"),[l.state==="success",e.n("--success")],[l.state==="error",e.n("--error")]))},null,2)],10,Le)),[[h,{disabled:e.disabled||e.formDisabled||e.readonly||e.formReadonly||!e.ripple}]])),128)),!e.maxlength||e.modelValue.length<e.maxlength?J((m(),p("div",{key:0,class:r(e.classes([!e.$slots.default,`${e.n("action")} var-elevation--2`],[e.disabled||e.formDisabled,e.n("--disabled")])),onClick:d[1]||(d[1]=(...l)=>e.triggerAction&&e.triggerAction(...l))},[V("input",{ref:"input",class:r(e.n("action-input")),type:"file",multiple:e.multiple,accept:e.accept,capture:e.capture,disabled:e.disabled||e.formDisabled||e.readonly||e.formReadonly,onChange:d[0]||(d[0]=(...l)=>e.handleChange&&e.handleChange(...l))},null,42,ze),Pe(e.$slots,"default",{},()=>[w(y,{class:r(e.n("action-icon")),"var-uploader-cover":"",name:"plus"},null,8,["class"])])],2)),[[h,{disabled:e.disabled||e.formDisabled||e.readonly||e.formReadonly||!e.ripple||e.$slots.default}]]):R("v-if",!0)],2),w(k,{"error-message":e.errorMessage,"maxlength-text":e.maxlengthText},null,8,["error-message","maxlength-text"]),w(B,{class:r(e.n("preview")),"var-uploader-cover":"",position:"center",show:e.showPreview,"onUpdate:show":d[2]||(d[2]=l=>e.showPreview=l),onClosed:d[3]||(d[3]=l=>e.currentPreview=null)},{default:Ce(()=>{var l,f;return[e.currentPreview&&e.isHTMLSupportVideo((l=e.currentPreview)==null?void 0:l.url)?(m(),p("video",{key:0,class:r(e.n("preview-video")),playsinline:"true","webkit-playsinline":"true","x5-playsinline":"true","x5-video-player-type":"h5","x5-video-player-fullscreen":"false",controls:"",src:(f=e.currentPreview)==null?void 0:f.url},null,10,Me)):R("v-if",!0)]}),_:1},8,["class","show"])],2)}var L=fe(Ae,[["render",Ie]]);L.install=function(e){e.component(L.name,L)};export{L as U};