import{F as H,u as O}from"./provide.315324c1.js";import{I as q}from"./index.520d7afd.js";import{d as G,a as d,f as h,c as J}from"./components.21c4ed88.js";import{d as K,r as F,N as L,f as Q,_ as X,i as $,o as u,c as y,a as t,z as r,V as T,k as V,n as p,t as Y,m as Z,H as x,x as _}from"./elevation.4b2b848a.js";function ee(e){return["text","password","number"].includes(e)}const ne={modelValue:{type:String},modelModifiers:{type:Object,default:()=>({})},type:{type:String,default:"text",validator:ee},textarea:{type:Boolean,default:!1},rows:{type:[String,Number],default:8},placeholder:{type:String},line:{type:Boolean,default:!0},hint:{type:Boolean,default:!0},textColor:{type:String},focusColor:{type:String},blurColor:{type:String},maxlength:{type:[String,Number]},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},resize:{type:Boolean,default:!1},validateTrigger:{type:Array,default:()=>["onInput","onClear"]},rules:{type:Array},onFocus:{type:Function},onBlur:{type:Function},onClick:{type:Function},onClear:{type:Function},onInput:{type:Function},onChange:{type:Function},"onUpdate:modelValue":{type:Function}};const{n:k,classes:le}=J("input"),ae=K({name:"VarInput",components:{VarIcon:q,VarFormDetails:H},props:ne,setup(e){const l=F(`var-input-${L().uid}`),f=F(null),m=F(!1),I=Q(()=>{const{maxlength:n,modelValue:o}=e;return n?h(o)?`0 / ${n}`:`${String(o).length}/${n}`:""}),{bindForm:M,form:s}=O(),{errorMessage:v,validateWithTrigger:a,validate:z,resetValidation:b}=G(),i=n=>{x(()=>{const{validateTrigger:o,rules:g,modelValue:C}=e;a(o,n,g,C)})},N=()=>{const{hint:n,modelValue:o}=e;if(!n&&!h(o))return k("--placeholder-hidden");if(n&&(!h(o)||m.value))return k("--placeholder-hint")},P=n=>{m.value=!0,d(e.onFocus,n),i("onFocus")},U=n=>{m.value=!1,d(e.onBlur,n),i("onBlur")},E=n=>{let{value:o}=n.target;o=S(o),d(e["onUpdate:modelValue"],o),d(e.onInput,o,n),i("onInput")},R=n=>{const{value:o}=n.target;d(e.onChange,S(o),n),i("onChange")},c=()=>{const{disabled:n,readonly:o,clearable:g,onClear:C}=e;(s==null?void 0:s.disabled.value)||(s==null?void 0:s.readonly.value)||n||o||!g||(d(e["onUpdate:modelValue"],""),d(C,""),i("onClear"))},A=n=>{const{disabled:o,onClick:g}=e;(s==null?void 0:s.disabled.value)||o||(d(g,n),i("onClick"))},S=n=>e.modelModifiers.trim?n.trim():n,w=()=>{d(e["onUpdate:modelValue"],""),b()},D=()=>z(e.rules,e.modelValue),W=()=>{f.value.focus()},j=()=>{f.value.blur()};return d(M,{reset:w,validate:D,resetValidation:b}),{el:f,id:l,isFocus:m,errorMessage:v,maxlengthText:I,formDisabled:s==null?void 0:s.disabled,formReadonly:s==null?void 0:s.readonly,n:k,classes:le,isEmpty:h,computePlaceholderState:N,handleFocus:P,handleBlur:U,handleInput:E,handleChange:R,handleClear:c,handleClick:A,validate:D,resetValidation:b,reset:w,focus:W,blur:j}}}),oe=["id","disabled","type","value","maxlength","rows"],se=["id","disabled","type","value","maxlength"],re=["for"];function de(e,l,f,m,I,M){const s=$("var-icon"),v=$("var-form-details");return u(),y("div",{class:r(e.classes(e.n(),"var--box",[e.disabled,e.n("--disabled")])),onClick:l[8]||(l[8]=(...a)=>e.handleClick&&e.handleClick(...a))},[t("div",{class:r(e.classes(e.n("controller"),[e.isFocus,e.n("--focus")],[e.errorMessage,e.n("--error")],[e.formDisabled||e.disabled,e.n("--disabled")])),style:p({color:e.errorMessage?void 0:e.isFocus?e.focusColor:e.blurColor})},[t("div",{class:r(e.classes(e.n("icon"),[!e.hint,e.n("--non-hint")]))},[T(e.$slots,"prepend-icon")],2),t("div",{class:r(e.classes(e.n("wrap"),[!e.hint,e.n("--non-hint")]))},[e.type==="password"?(u(),y("input",{key:0,class:r(e.n("autocomplete"))},null,2)):V("v-if",!0),e.textarea?(u(),y("textarea",{key:1,class:r(e.classes(e.n("input"),e.n("--textarea"),[e.formDisabled||e.disabled,e.n("--disabled")],[e.errorMessage,e.n("--caret-error")])),ref:"el",autocomplete:"new-password",id:e.id,disabled:e.formDisabled||e.disabled||e.formReadonly||e.readonly,type:e.type,value:e.modelValue,maxlength:e.maxlength,rows:e.rows,style:p({color:e.textColor,caretColor:e.errorMessage?void 0:e.focusColor,resize:e.resize?"vertical":"none"}),onFocus:l[0]||(l[0]=(...a)=>e.handleFocus&&e.handleFocus(...a)),onBlur:l[1]||(l[1]=(...a)=>e.handleBlur&&e.handleBlur(...a)),onInput:l[2]||(l[2]=(...a)=>e.handleInput&&e.handleInput(...a)),onChange:l[3]||(l[3]=(...a)=>e.handleChange&&e.handleChange(...a))},`
        `,46,oe)):(u(),y("input",{key:2,class:r(e.classes(e.n("input"),[e.formDisabled||e.disabled,e.n("--disabled")],[e.errorMessage,e.n("--caret-error")])),ref:"el",autocomplete:"new-password",id:e.id,disabled:e.formDisabled||e.disabled||e.formReadonly||e.readonly,type:e.type,value:e.modelValue,maxlength:e.maxlength,style:p({color:e.textColor,caretColor:e.errorMessage?void 0:e.focusColor}),onFocus:l[4]||(l[4]=(...a)=>e.handleFocus&&e.handleFocus(...a)),onBlur:l[5]||(l[5]=(...a)=>e.handleBlur&&e.handleBlur(...a)),onInput:l[6]||(l[6]=(...a)=>e.handleInput&&e.handleInput(...a)),onChange:l[7]||(l[7]=(...a)=>e.handleChange&&e.handleChange(...a))},null,46,se)),t("label",{class:r(e.classes("var--ellipsis",[e.isFocus,e.n("--focus")],[e.errorMessage,e.n("--error")],[e.textarea,e.n("textarea-placeholder"),e.n("placeholder")],e.computePlaceholderState(),[!e.hint,e.n("--placeholder-non-hint")])),style:p({color:e.errorMessage?void 0:e.isFocus?e.focusColor:e.blurColor}),for:e.id},Y(e.placeholder),15,re)],2),t("div",{class:r(e.classes(e.n("icon"),[!e.hint,e.n("--non-hint")]))},[T(e.$slots,"append-icon",{},()=>[e.clearable&&!e.isEmpty(e.modelValue)?(u(),_(s,{key:0,class:r(e.n("clear-icon")),"var-input-cover":"",name:"close-circle",size:"14px",onClick:e.handleClear},null,8,["class","onClick"])):V("v-if",!0)])],2)],6),e.line?(u(),y("div",{key:0,class:r(e.classes(e.n("line"),[e.formDisabled||e.disabled,e.n("--line-disabled")],[e.errorMessage,e.n("--line-error")])),style:p({background:e.errorMessage?void 0:e.blurColor})},[t("div",{class:r(e.classes(e.n("dot"),[e.isFocus,e.n("--spread")],[e.formDisabled||e.disabled,e.n("--line-disabled")],[e.errorMessage,e.n("--line-error")])),style:p({background:e.errorMessage?void 0:e.focusColor})},null,6)],6)):V("v-if",!0),Z(v,{"error-message":e.errorMessage,"maxlength-text":e.maxlengthText},null,8,["error-message","maxlength-text"])],2)}var B=X(ae,[["render",de]]);B.install=function(e){e.component(B.name,B)};export{B as I};