(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[8524],{1857:(e,r,a)=>{"use strict";a.d(r,{Z:()=>n});const n={dialogTitle:"Hint",dialogConfirmButtonText:"Confirm",dialogCancelButtonText:"Cancel",actionSheetTitle:"Select One",listLoadingText:"Loading",listFinishedText:"No more",listErrorText:"Load fail",pickerTitle:"Pick it",pickerConfirmButtonText:"Confirm",pickerCancelButtonText:"Cancel",monthDictionary:{"01":{name:"January",abbr:"JAN"},"02":{name:"February",abbr:"FEB"},"03":{name:"March",abbr:"MAR"},"04":{name:"April",abbr:"APR"},"05":{name:"May",abbr:"MAY"},"06":{name:"June",abbr:"JUN"},"07":{name:"July",abbr:"JUL"},"08":{name:"August",abbr:"AUG"},"09":{name:"September",abbr:"SEP"},10:{name:"October",abbr:"OCT"},11:{name:"November",abbr:"NOV"},12:{name:"December",abbr:"DEC"}},weekDictionary:{0:{name:"Sunday",abbr:"S"},1:{name:"Monday",abbr:"M"},2:{name:"Tuesday",abbr:"T"},3:{name:"Wednesday",abbr:"W"},4:{name:"Thursday",abbr:"T"},5:{name:"Friday",abbr:"F"},6:{name:"Saturday",abbr:"S"}},selected:" selected"}},9486:(e,r,a)=>{"use strict";a.d(r,{bU:()=>l,P2:()=>d,IH:()=>p,D$:()=>u});var n=a(641),t=a(8732);function s(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?s(Object(a),!0).forEach((function(r){i(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function l(){var e={},r=(0,n.iH)({}),a=a=>{if(!e[a])return console.warn("The ".concat(a," does not exist. You can mount a language package using the add method")),{};r.value=e[a]};return{packs:e,pack:r,add:(r,a)=>{a.lang=r,e[r]=a},use:a,merge:(r,n)=>{e[r]?(e[r]=o(o({},e[r]),n),a(r)):console.warn("The ".concat(r," does not exist. You can mount a language package using the add method"))}}}var{packs:c,pack:d,add:p,use:u,merge:b}=l();p("zh-CN",t.Z),u("zh-CN")},8732:(e,r,a)=>{"use strict";a.d(r,{Z:()=>n});const n={dialogTitle:"提示",dialogConfirmButtonText:"确认",dialogCancelButtonText:"取消",actionSheetTitle:"请选择",listLoadingText:"加载中",listFinishedText:"没有更多了",listErrorText:"加载失败",pickerTitle:"请选择",pickerConfirmButtonText:"确认",pickerCancelButtonText:"取消",monthDictionary:{"01":{name:"一月",abbr:"一月"},"02":{name:"二月",abbr:"二月"},"03":{name:"三月",abbr:"三月"},"04":{name:"四月",abbr:"四月"},"05":{name:"五月",abbr:"五月"},"06":{name:"六月",abbr:"六月"},"07":{name:"七月",abbr:"七月"},"08":{name:"八月",abbr:"八月"},"09":{name:"九月",abbr:"九月"},10:{name:"十月",abbr:"十月"},11:{name:"十一月",abbr:"十一月"},12:{name:"十二月",abbr:"十二月"}},weekDictionary:{0:{name:"星期日",abbr:"日"},1:{name:"星期一",abbr:"一"},2:{name:"星期二",abbr:"二"},3:{name:"星期三",abbr:"三"},4:{name:"星期四",abbr:"四"},5:{name:"星期五",abbr:"五"},6:{name:"星期六",abbr:"六"}},selected:"个被选择"}},8442:(e,r,a)=>{"use strict";a.d(r,{He:()=>n,QM:()=>t,MW:()=>s,HD:()=>o,Bl:()=>i,hj:()=>l,PO:()=>c,kJ:()=>d,PX:()=>p,xb:()=>u,cl:()=>b,P2:()=>g,Df:()=>v,GE:()=>m,qb:()=>f,Ou:()=>k,dt:()=>y,_f:()=>w,jj:()=>_,GL:()=>x});var n=e=>null==e?0:o(e)?(e=parseFloat(e),e=Number.isNaN(e)?0:e):i(e)?Number(e):e,t=e=>e.startsWith("data:image")||/\.(png|jpg|gif|jpeg|svg)$/.test(e),s=e=>e.startsWith("data:video")||/\.(mp4|webm|ogg)$/.test(e),o=e=>"string"==typeof e,i=e=>"boolean"==typeof e,l=e=>"number"==typeof e,c=e=>"[object Object]"===Object.prototype.toString.call(e),d=e=>Array.isArray(e),p=e=>/^(http)|(\.*\/)/.test(e),u=e=>null==e||""===e||Array.isArray(e)&&!e.length,b=(e,r)=>{if(e.length){var a=e.indexOf(r);if(a>-1)return e.splice(a,1)}},g=(e,r=200)=>{var a,n;return function t(...s){var o=Date.now();n||(n=o),a&&window.clearTimeout(a),o-n>=r?(e.apply(this,s),n=o):a=window.setTimeout((()=>{t.apply(this,s)}),50)}},v=e=>{var r=[];return{cache:r,has(e){return this.cache.includes(e)},add(a){this.has(a)||(this.cache.length===e&&r.shift(),this.cache.push(a))},remove(e){this.has(e)&&b(this.cache,e)},clear(){this.cache.length=0}}},m=e=>e,h=e=>Math.pow(e,3),f=e=>e<.5?h(2*e)/2:1-h(2*(1-e))/2;function k(e,r){var a=Object.values(r),n=[24,60,60,1e3];if(["DD","HH","mm","ss"].forEach(((r,t)=>{e.includes(r)?e=e.replace(r,String(a[t]).padStart(2,"0")):a[t+1]+=a[t]*n[t]})),e.includes("S")){var t=String(a[a.length-1]).padStart(3,"0");e=e.includes("SSS")?e.replace("SSS",t):e.includes("SS")?e.replace("SS",t.slice(0,2)):e.replace("S",t.slice(0,1))}return e}var y=(e,r)=>null==e?r:e,w="undefined"!=typeof window,_=e=>[...new Set(e)];function x(e){var r=/([^-])([A-Z])/g;return e.replace(r,"$1-$2").replace(r,"$1-$2").toLowerCase()}},1761:(e,r,a)=>{"use strict";a.d(r,{Z:()=>s});var n=a(2609),t=a.n(n)()((function(e){return e[1]}));t.push([e.id,".app-type {\n  width: 100%;\n  padding: 15px 0;\n  color: #888;\n  font-size: 14px;\n}\n",""]);const s=t},6339:(e,r,a)=>{"use strict";a.d(r,{Z:()=>s});var n=a(2609),t=a.n(n)()((function(e){return e[1]}));t.push([e.id,".var--box {\n  box-sizing: border-box;\n}\n.var--box * {\n  box-sizing: border-box;\n}\n.var--relative {\n  position: relative;\n}\n.var--absolute {\n  position: absolute;\n}\n.var--hidden {\n  overflow: hidden;\n}\n.var--lock {\n  overflow: hidden;\n}\n.var--block {\n  display: block;\n}\n.var--inline-block {\n  display: inline-block;\n}\n.var--flex {\n  display: flex;\n}\n.var--inline-flex {\n  display: inline-flex;\n}\n:root {\n  --font-size-xs: 10px;\n  --font-size-sm: 12px;\n  --font-size-md: 14px;\n  --font-size-lg: 16px;\n  --icon-size-xs: 16px;\n  --icon-size-sm: 18px;\n  --icon-size-md: 20px;\n  --icon-size-lg: 22px;\n  --color-primary: #3a7afe;\n  --color-info: #00afef;\n  --color-success: #00c48f;\n  --color-warning: #ff9f00;\n  --color-danger: #f44336;\n  --color-disabled: #e0e0e0;\n  --cubic-bezier: cubic-bezier(0.25, 0.8, 0.5, 1);\n  --shadow-key-umbra-opacity: rgba(0, 0, 0, 0.2);\n  --shadow-key-penumbra-opacity: rgba(0, 0, 0, 0.14);\n  --shadow-key-ambient-opacity: rgba(0, 0, 0, 0.12);\n}\n:root {\n  --progress-font-size: var(--font-size-sm);\n  --progress-ripple-color: #fff;\n  --progress-track-color: #d8d8d8;\n  --progress-background: var(--color-primary);\n}\n.var-progress {\n  position: relative;\n  font-size: var(--progress-font-size);\n}\n.var-progress-linear {\n  display: flex;\n  align-items: center;\n}\n.var-progress-linear__block {\n  flex: 1;\n  position: relative;\n  overflow: hidden;\n}\n.var-progress-linear__background,\n.var-progress-linear__certain {\n  width: 100%;\n  height: 100%;\n}\n.var-progress-linear__ripple::after {\n  position: absolute;\n  width: 0;\n  background-color: var(--progress-ripple-color);\n  height: 100%;\n  opacity: 0;\n  animation: ripple 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  content: '';\n}\n.var-progress-linear__background {\n  background-color: var(--progress-track-color);\n}\n.var-progress-linear__certain {\n  position: absolute;\n  background-color: var(--progress-background);\n  top: 0;\n  left: 0;\n  transition: all 0.2s, background-color 0.8s;\n}\n.var-progress-linear__label {\n  margin-left: 8px;\n  flex: 0;\n}\n@keyframes ripple {\n0% {\n    width: 0;\n    opacity: 0.1;\n}\n20% {\n    width: 0;\n    opacity: 0.5;\n}\n80% {\n    width: 100%;\n    opacity: 0;\n}\n}\n.var-progress-circle {\n  position: relative;\n}\n.var-progress-circle__background {\n  stroke: var(--progress-track-color);\n}\n.var-progress-circle__certain {\n  transition: all 0.2s;\n  stroke: var(--progress-background);\n  position: absolute;\n}\n.var-progress-circle__label {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n",""]);const s=t},7277:(e,r,a)=>{"use strict";a.d(r,{Z:()=>s});var n=a(2609),t=a.n(n)()((function(e){return e[1]}));t.push([e.id,".progress-demo h4[data-v-2ea3e14d] {\n  margin: 0;\n}\n.progress-demo .space[data-v-2ea3e14d] {\n  height: 10px;\n}\n.progress-demo .progress-demo__basic .var-progress[data-v-2ea3e14d],\n.progress-demo .progress-demo__style .var-progress[data-v-2ea3e14d],\n.progress-demo .progress-demo__label .var-progress[data-v-2ea3e14d],\n.progress-demo .progress-demo__custom .var-progress[data-v-2ea3e14d] {\n  margin: 12px 0;\n}\n.progress-demo .progress-demo__basic .var-progress[data-v-2ea3e14d]:nth-child(2),\n.progress-demo .progress-demo__style .var-progress[data-v-2ea3e14d]:nth-child(2),\n.progress-demo .progress-demo__label .var-progress[data-v-2ea3e14d]:nth-child(2),\n.progress-demo .progress-demo__custom .var-progress[data-v-2ea3e14d]:nth-child(2) {\n  margin-top: 0;\n}\n.progress-demo .progress-demo__circle[data-v-2ea3e14d] {\n  display: flex;\n  align-items: center;\n}\n.progress-demo .progress-demo__circle .space[data-v-2ea3e14d] {\n  width: 20px;\n}\n",""]);const s=t},9524:(e,r,a)=>{"use strict";a.d(r,{Z:()=>c});var n=a(7875),t={class:"app-type"};const s=(0,n.aZ)({name:"AppType"});var o=a(6062),i=a.n(o),l=a(1761);i()(l.Z,{insert:"head",singleton:!1}),l.Z.locals,s.render=function(e,r,a,s,o,i){return(0,n.wg)(),(0,n.j4)("div",t,[(0,n.WI)(e.$slots,"default")])};const c=s},8524:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>L});var n=a(7875),t=a(349),s=(0,n.HX)("data-v-2ea3e14d");(0,n.dD)("data-v-2ea3e14d");var o={class:"progress-demo"},i=(0,n.Wm)("div",{class:"space"},null,-1),l={class:"progress-demo__basic"},c={class:"progress-demo__label"},d=(0,n.Uk)("success"),p={class:"progress-demo__style"},u={class:"progress-demo__circle"},b=(0,n.Wm)("div",{class:"space"},null,-1),g=(0,n.Wm)("div",{class:"space"},null,-1),v={class:"progress-demo__circle"};(0,n.Cn)();var m=s(((e,r,a,m,h,f)=>{var k=(0,n.up)("app-type"),y=(0,n.up)("var-progress");return(0,n.wg)(),(0,n.j4)("div",o,[i,(0,n.Wm)("div",l,[(0,n.Wm)(k,null,{default:s((()=>[(0,n.Uk)((0,t.zw)(m.pack.basicUsage),1)])),_:1}),(0,n.Wm)(y,{value:20,track:!1}),(0,n.Wm)(y,{value:m.value,track:!1},null,8,["value"]),(0,n.Wm)(y,{value:100,track:!1})]),(0,n.Wm)("div",c,[(0,n.Wm)(k,null,{default:s((()=>[(0,n.Uk)((0,t.zw)(m.pack.showLabel),1)])),_:1}),(0,n.Wm)(y,{value:30,label:""}),(0,n.Wm)(y,{value:m.value,label:""},null,8,["value"]),(0,n.Wm)(y,{value:100,label:""},{default:s((()=>[d])),_:1})]),(0,n.Wm)("div",p,[(0,n.Wm)(k,null,{default:s((()=>[(0,n.Uk)((0,t.zw)(m.pack.style),1)])),_:1}),(0,n.Wm)(y,{value:30,"line-width":"8",color:"#ff9f00"}),(0,n.Wm)(y,{value:60,"line-width":"8",color:"#ff9f00","track-color":"#f5cb90"}),(0,n.Wm)(y,{value:80,ripple:"","line-width":"8",color:"#ff9f00","track-color":"#f5cb90"})]),(0,n.Wm)(k,null,{default:s((()=>[(0,n.Uk)((0,t.zw)(m.pack.circle),1)])),_:1}),(0,n.Wm)("div",u,[(0,n.Wm)(y,{mode:"circle",value:30,"line-width":"5",size:56}),b,(0,n.Wm)(y,{mode:"circle",label:"",value:m.value,"line-width":"5",size:56},null,8,["value"]),g,(0,n.Wm)(y,{mode:"circle",label:"",value:100,"line-width":"5",size:56})]),(0,n.Wm)(k,null,{default:s((()=>[(0,n.Uk)((0,t.zw)(m.pack.hideTrack),1)])),_:1}),(0,n.Wm)("div",v,[(0,n.Wm)(y,{mode:"circle",value:50,size:56,track:!1})])])})),h={class:"var-progress"},f={key:0,class:"var-progress-linear"},k={mode:{type:String,default:"linear",validator:function(e){return["linear","circle"].includes(e)}},lineWidth:{type:[Number,String],default:4},color:{type:String},trackColor:{type:String},ripple:{type:Boolean,default:!1},value:{type:[Number,String],default:0},label:{type:Boolean,default:!1},size:{type:Number,default:40},rotate:{type:Number,default:0},track:{type:Boolean,default:!0}},y=a(8442);const w=(0,n.aZ)({name:"VarProgress",inheritAttrs:!1,props:k,setup:e=>({linearProps:(0,n.Fl)((()=>{var r=(0,y.He)(e.value),a=r>100?100:r,n=r>100?100:Math.round(r);return{width:"".concat(a,"%"),roundValue:"".concat(n,"%")}})),circleProps:(0,n.Fl)((()=>{var{size:r,lineWidth:a,value:n}=e,t="0 0 ".concat(r," ").concat(r),s=(0,y.He)(n)>100?100:Math.round((0,y.He)(n)),o=(r-(0,y.He)(a))/2,i=2*Math.PI*o;return{viewBox:t,radius:o,strokeDasharray:"".concat(s/100*i,", ").concat(i),perimeter:i,roundValue:"".concat(s,"%")}}))})});var _=a(6062),x=a.n(_),W=a(6339);x()(W.Z,{insert:"head",singleton:!1}),W.Z.locals,w.render=function(e,r,a,s,o,i){return(0,n.wg)(),(0,n.j4)("div",h,["linear"===e.mode?((0,n.wg)(),(0,n.j4)("div",f,[(0,n.Wm)("div",(0,n.dG)({class:"var-progress-linear__block",style:{height:"".concat(e.lineWidth,"px")}},e.$attrs),[e.track?((0,n.wg)(),(0,n.j4)("div",{key:0,class:"var-progress-linear__background",style:{background:e.trackColor}},null,4)):(0,n.kq)("v-if",!0),(0,n.Wm)("div",{class:"var-progress-linear__certain".concat(e.ripple?" var-progress-linear__ripple":""),style:{background:e.color,width:e.linearProps.width}},null,6)],16),e.label?((0,n.wg)(),(0,n.j4)("div",(0,n.dG)({key:0,class:"var-progress-linear__label"},e.$attrs),[(0,n.WI)(e.$slots,"default",{},(()=>[(0,n.Uk)((0,t.zw)(e.linearProps.roundValue),1)]))],16)):(0,n.kq)("v-if",!0)])):(0,n.kq)("v-if",!0),"circle"===e.mode?((0,n.wg)(),(0,n.j4)("div",{key:1,class:"var-progress-circle",style:{width:"".concat(e.size,"px"),height:"".concat(e.size,"px")}},[((0,n.wg)(),(0,n.j4)("svg",{class:"var-progress-circle__svg",style:{transform:"rotate(".concat(e.rotate-90,"deg)")},viewBox:e.circleProps.viewBox},[e.track?((0,n.wg)(),(0,n.j4)("circle",{key:0,class:"var-progress-circle__background",cx:e.size/2,cy:e.size/2,r:e.circleProps.radius,fill:"transparent","stroke-width":e.lineWidth,style:{strokeDasharray:e.circleProps.perimeter,stroke:e.trackColor}},null,12,["cx","cy","r","stroke-width"])):(0,n.kq)("v-if",!0),(0,n.Wm)("circle",{class:"var-progress-circle__certain",cx:e.size/2,cy:e.size/2,r:e.circleProps.radius,fill:"transparent","stroke-width":e.lineWidth,style:{strokeDasharray:e.circleProps.strokeDasharray,stroke:e.color}},null,12,["cx","cy","r","stroke-width"])],12,["viewBox"])),e.label?((0,n.wg)(),(0,n.j4)("div",(0,n.dG)({key:0,class:"var-progress-circle__label"},e.$attrs),[(0,n.WI)(e.$slots,"default",{},(()=>[(0,n.Uk)((0,t.zw)(e.circleProps.roundValue),1)]))],16)):(0,n.kq)("v-if",!0)],4)):(0,n.kq)("v-if",!0)])};const z=w;z.install=function(e){e.component(z.name,z)};const S=z;var T=a(9524),j=a(641),P=a(8732),O=a(1857),C=a(9486),{add:D,use:U,pack:Z,packs:B,merge:H}=(0,C.bU)(),N=e=>{(0,C.D$)(e),U(e)};(0,C.IH)("zh-CN",P.Z),(0,C.IH)("en-US",O.Z),D("zh-CN",{circle:"环形进度条",style:"自定义样式",basicUsage:"基本使用",showLabel:"显示标签",hideTrack:"隐藏轨道"}),D("en-US",{circle:"Circle Progress",basicUsage:"Basic Usage",style:"Custom Style",showLabel:"Show Label",hideTrack:"Hide Track"});var A=a(6125);const $={name:"ProgressExample",components:{[S.name]:S,AppType:T.Z},setup(){var e=(0,j.iH)(0),r=(0,j.iH)(0);return(0,n.bv)((()=>{r.value=window.setInterval((()=>{e.value>=100?e.value=0:e.value+=20}),1e3)})),(0,A.jS)(N),(0,n.Ah)((()=>{window.clearInterval(r.value)})),{value:e,pack:Z}}};var M=a(7277);x()(M.Z,{insert:"head",singleton:!1}),M.Z.locals,$.render=m,$.__scopeId="data-v-2ea3e14d";const L=$}}]);