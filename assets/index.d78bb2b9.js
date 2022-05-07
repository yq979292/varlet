import{b as z,i as B,c as H}from"./elements.5ea58f07.js";import{t as I,c as R,a as M}from"./components.8c0c409a.js";import{d as D,a as o,b as p,w as P,D as V,E as A,o as G,C as J,_ as O,e as U,f as j,k as q,H as K,G as k,J as $}from"./elevation.ab53b24c.js";const Q={offsetTop:{type:[String,Number],default:0},zIndex:{type:[String,Number],default:10},cssMode:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},onScroll:{type:Function}};const{n:X,classes:Y}=R("sticky"),Z=D({name:"VarSticky",props:Q,setup(e){const n=o(null),d=o(null),a=o(!1),i=o("0px"),r=o("0px"),v=o("auto"),m=o("auto"),b=o("auto"),h=o("auto"),E=p(()=>!e.disabled&&e.cssMode),F=p(()=>!e.disabled&&a.value),l=p(()=>z(e.offsetTop));let t;const s=()=>{const{onScroll:w,cssMode:W,disabled:L}=e;if(L)return;let f=0;if(t!==window){const{top:N}=t.getBoundingClientRect();f=N}const g=d.value,c=n.value,{top:T,left:C}=c.getBoundingClientRect(),x=T-f;x<=l.value?(W||(v.value=`${c.offsetWidth}px`,m.value=`${c.offsetHeight}px`,i.value=`${f+l.value}px`,r.value=`${C}px`,b.value=`${g.offsetWidth}px`,h.value=`${g.offsetHeight}px`,a.value=!0),M(w,l.value,!0)):(a.value=!1,M(w,x,!1))},y=async()=>{await B(),t=H(n.value),t!==window&&t.addEventListener("scroll",s),window.addEventListener("scroll",s),s()},S=()=>{t!==window&&t.removeEventListener("scroll",s),window.removeEventListener("scroll",s)};return P(()=>e.disabled,s),V(y),A(S),G(y),J(S),{n:X,classes:Y,stickyEl:n,wrapperEl:d,isFixed:a,offsetTop:l,fixedTop:i,fixedLeft:r,fixedWidth:v,fixedHeight:m,fixedWrapperWidth:b,fixedWrapperHeight:h,enableCSSMode:E,enableFixedMode:F,toNumber:I}}});function _(e,n,d,a,i,r){return U(),j("div",{class:k(e.classes(e.n(),[e.enableCSSMode,e.n("--css-mode")])),ref:"stickyEl",style:$({zIndex:e.toNumber(e.zIndex),top:e.enableCSSMode?`${e.offsetTop}px`:void 0,width:e.enableFixedMode?e.fixedWidth:void 0,height:e.enableFixedMode?e.fixedHeight:void 0})},[q("div",{class:k(e.n("wrapper")),ref:"wrapperEl",style:$({zIndex:e.toNumber(e.zIndex),position:e.enableFixedMode?"fixed":void 0,width:e.enableFixedMode?e.fixedWrapperWidth:void 0,height:e.enableFixedMode?e.fixedWrapperHeight:void 0,left:e.enableFixedMode?e.fixedLeft:void 0,top:e.enableFixedMode?e.fixedTop:void 0})},[K(e.$slots,"default")],6)],6)}var u=O(Z,[["render",_]]);u.install=function(e){e.component(u.name,u)};export{u as S,Q as p};