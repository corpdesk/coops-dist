(self.webpackChunkcoops=self.webpackChunkcoops||[]).push([[2350],{9969:(x,u,a)=>{a.r(u),a.d(u,{AUTO_STYLE:()=>p,AnimationBuilder:()=>_,AnimationFactory:()=>d,AnimationMetadataType:()=>i,NoopAnimationPlayer:()=>T,animate:()=>D,animateChild:()=>R,animation:()=>v,group:()=>F,keyframes:()=>P,query:()=>O,sequence:()=>c,stagger:()=>w,state:()=>E,style:()=>S,transition:()=>A,trigger:()=>g,useAnimation:()=>C,\u0275AnimationGroupPlayer:()=>B,\u0275BrowserAnimationBuilder:()=>f,\u0275PRE_STYLE:()=>j});var m=a(9354),o=a(2264),i=function(e){return e[e.State=0]="State",e[e.Transition=1]="Transition",e[e.Sequence=2]="Sequence",e[e.Group=3]="Group",e[e.Animate=4]="Animate",e[e.Keyframes=5]="Keyframes",e[e.Style=6]="Style",e[e.Trigger=7]="Trigger",e[e.Reference=8]="Reference",e[e.AnimateChild=9]="AnimateChild",e[e.AnimateRef=10]="AnimateRef",e[e.Query=11]="Query",e[e.Stagger=12]="Stagger",e}(i||{});const p="*";function g(e,t){return{type:i.Trigger,name:e,definitions:t,options:{}}}function D(e,t=null){return{type:i.Animate,styles:t,timings:e}}function F(e,t=null){return{type:i.Group,steps:e,options:t}}function c(e,t=null){return{type:i.Sequence,steps:e,options:t}}function S(e){return{type:i.Style,styles:e,offset:null}}function E(e,t,s){return{type:i.State,name:e,styles:t,options:s}}function P(e){return{type:i.Keyframes,steps:e}}function A(e,t,s=null){return{type:i.Transition,expr:e,animation:t,options:s}}function v(e,t=null){return{type:i.Reference,animation:e,options:t}}function R(e=null){return{type:i.AnimateChild,options:e}}function C(e,t=null){return{type:i.AnimateRef,animation:e,options:t}}function O(e,t,s=null){return{type:i.Query,selector:e,animation:t,options:s}}function w(e,t){return{type:i.Stagger,timings:e,animation:t}}let _=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275prov=o.\u0275\u0275defineInjectable({token:e,factory:()=>(0,o.inject)(f),providedIn:"root"})}return e})();class d{}let f=(()=>{class e extends _{constructor(s,n){if(super(),this.animationModuleType=(0,o.inject)(o.ANIMATION_MODULE_TYPE,{optional:!0}),this._nextAnimationId=0,this._renderer=s.createRenderer(n.body,{id:"0",encapsulation:o.ViewEncapsulation.None,styles:[],data:{animation:[]}}),null===this.animationModuleType&&!function L(e){const t=e.\u0275type;return 0===t||1===t}(this._renderer))throw new o.\u0275RuntimeError(3600,!1)}build(s){const n=this._nextAnimationId;this._nextAnimationId++;const r=Array.isArray(s)?c(s):s;return y(this._renderer,null,n,"register",[r]),new b(n,this._renderer)}static#t=this.\u0275fac=function(n){return new(n||e)(o.\u0275\u0275inject(o.RendererFactory2),o.\u0275\u0275inject(m.DOCUMENT))};static#e=this.\u0275prov=o.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();class b extends d{constructor(t,s){super(),this._id=t,this._renderer=s}create(t,s){return new k(this._id,t,s||{},this._renderer)}}class k{constructor(t,s,n,r){this.id=t,this.element=s,this._renderer=r,this.parentPlayer=null,this._started=!1,this.totalTime=0,this._command("create",n)}_listen(t,s){return this._renderer.listen(this.element,`@@${this.id}:${t}`,s)}_command(t,...s){y(this._renderer,this.element,this.id,t,s)}onDone(t){this._listen("done",t)}onStart(t){this._listen("start",t)}onDestroy(t){this._listen("destroy",t)}init(){this._command("init")}hasStarted(){return this._started}play(){this._command("play"),this._started=!0}pause(){this._command("pause")}restart(){this._command("restart")}finish(){this._command("finish")}destroy(){this._command("destroy")}reset(){this._command("reset"),this._started=!1}setPosition(t){this._command("setPosition",t)}getPosition(){return function I(e){const t=e.\u0275type;return 0===t?e:1===t?e.animationRenderer:null}(this._renderer)?.engine?.players[this.id]?.getPosition()??0}}function y(e,t,s,n,r){e.setProperty(t,`@@${s}:${n}`,r)}class T{constructor(t=0,s=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._originalOnDoneFns=[],this._originalOnStartFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this._position=0,this.parentPlayer=null,this.totalTime=t+s}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}onStart(t){this._originalOnStartFns.push(t),this._onStartFns.push(t)}onDone(t){this._originalOnDoneFns.push(t),this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(t=>t()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(t){this._position=this.totalTime?t*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(t){const s="start"==t?this._onStartFns:this._onDoneFns;s.forEach(n=>n()),s.length=0}}class B{constructor(t){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=t;let s=0,n=0,r=0;const l=this.players.length;0==l?queueMicrotask(()=>this._onFinish()):this.players.forEach(h=>{h.onDone(()=>{++s==l&&this._onFinish()}),h.onDestroy(()=>{++n==l&&this._onDestroy()}),h.onStart(()=>{++r==l&&this._onStart()})}),this.totalTime=this.players.reduce((h,q)=>Math.max(h,q.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}init(){this.players.forEach(t=>t.init())}onStart(t){this._onStartFns.push(t)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(t=>t()),this._onStartFns=[])}onDone(t){this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(t=>t.play())}pause(){this.players.forEach(t=>t.pause())}restart(){this.players.forEach(t=>t.restart())}finish(){this._onFinish(),this.players.forEach(t=>t.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(t=>t.destroy()),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this.players.forEach(t=>t.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(t){const s=t*this.totalTime;this.players.forEach(n=>{const r=n.totalTime?Math.min(1,s/n.totalTime):1;n.setPosition(r)})}getPosition(){const t=this.players.reduce((s,n)=>null===s||n.totalTime>s.totalTime?n:s,null);return null!=t?t.getPosition():0}beforeDestroy(){this.players.forEach(t=>{t.beforeDestroy&&t.beforeDestroy()})}triggerCallback(t){const s="start"==t?this._onStartFns:this._onDoneFns;s.forEach(n=>n()),s.length=0}}const j="!"}}]);