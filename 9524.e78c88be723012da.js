(self.webpackChunkcoops=self.webpackChunkcoops||[]).push([[9524],{9524:(Mr,I,g)=>{g.r(I),g.d(I,{AorAnPipe:()=>se,BOOLEAN_PIPES:()=>Pr,BytesPipe:()=>Ge,CamelizePipe:()=>Me,CeilPipe:()=>qe,ChunkPipe:()=>H,DATE_PIPES:()=>yr,DegreesPipe:()=>ke,DiffObjPipe:()=>ae,DiffPipe:()=>w,EveryPipe:()=>j,FilterByImpurePipe:()=>$,FilterByPipe:()=>h,FlattenPipe:()=>O,FloorPipe:()=>Be,FromPairsPipe:()=>J,GroupByImpurePipe:()=>Y,GroupByPipe:()=>M,InitialPipe:()=>F,IntersectionPipe:()=>_,InvertByPipe:()=>oe,InvertPipe:()=>ie,IsArrayPipe:()=>Ze,IsDefinedPipe:()=>je,IsEqualToPipe:()=>Xe,IsFunctionPipe:()=>$e,IsGreaterEqualThanPipe:()=>Je,IsGreaterThanPipe:()=>Qe,IsIdenticalToPipe:()=>rr,IsLessEqualThanPipe:()=>A,IsLessThanPipe:()=>tr,IsNotEqualToPipe:()=>er,IsNotIdenticalToPipe:()=>nr,IsNullPipe:()=>We,IsNumberPipe:()=>Ve,IsObjectPipe:()=>He,IsStringPipe:()=>Ye,IsUndefinedPipe:()=>Ke,KeysPipe:()=>X,LatinisePipe:()=>he,LeftPadPipe:()=>Fe,LeftTrimPipe:()=>fe,LinesPipe:()=>De,MATH_PIPES:()=>lr,MakePluralStringPipe:()=>_e,MatchPipe:()=>Ie,MaxPipe:()=>Se,MinPipe:()=>Ee,NgArrayPipesModule:()=>Q,NgBooleanPipesModule:()=>ir,NgDatePipesModule:()=>ar,NgMathPipesModule:()=>ze,NgObjectPipesModule:()=>pe,NgPipesModule:()=>mr,NgStringPipesModule:()=>Ne,OmitPipe:()=>te,OrderByImpurePipe:()=>V,OrderByPipe:()=>D,PairsPipe:()=>re,PercentagePipe:()=>Le,PickPipe:()=>ne,PluckPipe:()=>x,PowerPipe:()=>be,RadiansPipe:()=>xe,RangePipe:()=>Z,RepeatPipe:()=>de,ReversePipe:()=>R,RightPadPipe:()=>Oe,RightTrimPipe:()=>ce,RoundPipe:()=>Re,STRING_PIPES:()=>cr,SamplePipe:()=>K,ScanPipe:()=>le,ShortenPipe:()=>Pe,ShufflePipe:()=>z,SlugifyPipe:()=>ge,SomePipe:()=>W,SqrtPipe:()=>Ce,StripTagsPipe:()=>ye,SumPipe:()=>Ue,TailPipe:()=>C,TestPipe:()=>we,TimeAgoPipe:()=>or,TrimPipe:()=>me,TrurthifyPipe:()=>b,UcFirstPipe:()=>ve,UcWordsPipe:()=>ue,UnderscorePipe:()=>Ae,UnionPipe:()=>q,UniquePipe:()=>k,ValuesPipe:()=>ee,WithoutPipe:()=>G,WrapPipe:()=>Te});var o=g(2264);let w=(()=>{class e{transform(r,...t){return Array.isArray(r)?t.reduce((i,a)=>i.filter(p=>!~a.indexOf(p)),r):r}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"diff",type:e,pure:!0}),e})(),F=(()=>{class e{transform(r,t=0){return Array.isArray(r)?r.slice(0,r.length-t):r}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"initial",type:e,pure:!0}),e})(),O=(()=>{class e{transform(r,t=!1){return Array.isArray(r)?t?[].concat.apply([],r):this.flatten(r):r}flatten(r){return r.reduce((t,i)=>Array.isArray(i)?t.concat(this.flatten(i)):t.concat(i),[])}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"flatten",type:e,pure:!0}),e})(),_=(()=>{class e{transform(r,...t){return Array.isArray(r)?t.reduce((i,a)=>i.filter(p=>!!~a.indexOf(p)),r):r}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"intersection",type:e,pure:!0}),e})();function d(e){return typeof e>"u"}function T(e){return"function"==typeof e}function N(e){return"number"==typeof e}function u(e){return"string"==typeof e}function f(e){return null!==e&&"object"==typeof e}function v(e){return N(e)&&isFinite(e)}function S(e){return-1!==["a","e","i","o","u"].indexOf(e)}function E(e){const[n,...r]=e.split(/\s/g);return[n.toLowerCase().split(/(?=['|-])/g).map(i=>i.indexOf("-")+i.indexOf("'")>-2?i.slice(0,2).toUpperCase()+i.slice(2):i.slice(0,1).toUpperCase()+i.slice(1)).join(""),...r].join(" ")}function L(e,n){if(n<=0)return Math.round(e);const r=10**n;return Math.round(e*r)/r}function P(e,n){const r=n.split("."),t=r.shift();return r.reduce((i,a)=>d(i)||function ur(e){return null===e}(i)||d(i[a])?void 0:i[a],e[t||""])}function U(e,n){return[...Object.keys(e),...Object.keys(n)].filter((r,t,i)=>i.indexOf(r)===t)}function B(e,n){return f(e)&&f(n)?U(e,n).every(r=>f(e[r])||f(n[r])?!(!f(e[r])||!f(n[r]))&&B(e[r],n[r]):e[r]===n[r]):e===n}let R=(()=>{class e{transform(r){return u(r)?r.split("").reverse().join(""):Array.isArray(r)?r.slice().reverse():r}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"reverse",type:e,pure:!0}),e})(),C=(()=>{class e{transform(r,t=0){return Array.isArray(r)?r.slice(t):r}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"tail",type:e,pure:!0}),e})(),b=(()=>{class e{transform(r){return Array.isArray(r)?r.filter(t=>!!t):r}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"truthify",type:e,pure:!0}),e})(),q=(()=>{class e{transform(r,t=[]){return Array.isArray(r)&&Array.isArray(t)?t.reduce((i,a)=>i.concat(a.reduce((p,s)=>~p.indexOf(s)||~i.indexOf(s)?p:p.concat([s]),[])),r):r}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"union",type:e,pure:!0}),e})(),k=(()=>{class e{transform(r,t){const i=[];return Array.isArray(r)?d(t)?r.filter((a,p)=>r.indexOf(a)===p):r.filter((a,p)=>{let s=P(a,t);return s=f(s)?JSON.stringify(s):s,!d(s)&&!i[s]&&(i[s]=!0,!0)}):r}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"unique",type:e,pure:!0}),e})(),G=(()=>{class e{transform(r,t=[]){return Array.isArray(r)?r.filter(i=>!~t.indexOf(i)):r}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"without",type:e,pure:!0}),e})(),x=(()=>{class e{transform(r,t){return Array.isArray(r)?r.map(i=>P(i,t)):f(r)?P(r,t):r}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"pluck",type:e,pure:!1}),e})(),z=(()=>{class e{transform(r){if(!Array.isArray(r))return r;const t=[...r],i=r.length-1;for(let a=0;a<i;++a){const p=Math.floor(Math.random()*(i-a+1))+a;[t[a],t[p]]=[t[p],t[a]]}return t}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"shuffle",type:e,pure:!0}),e})(),j=(()=>{class e{transform(r,t){return!!Array.isArray(r)&&r.every(t)}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"every",type:e,pure:!0}),e})(),W=(()=>{class e{transform(r,t){return Array.isArray(r)?r.some(t):r}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"some",type:e,pure:!0}),e})(),K=(()=>{class e{transform(r,t=1){if(!Array.isArray(r))return r;let i=[];const a=[...r],p=t<a.length?t:a.length;for(let s=0;s<p;++s)i=i.concat(a.splice(Math.floor(Math.random()*a.length),1));return i}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"sample",type:e,pure:!0}),e})(),M=(()=>{class e{transform(r,t=[],i="|"){return Array.isArray(r)?this.groupBy(r,t,i):r}groupBy(r,t,i){return r.reduce((a,p)=>{const s=this.extractKeyByDiscriminator(t,p,i);return a[s]=Array.isArray(a[s])?a[s].concat([p]):[p],a},{})}extractKeyByDiscriminator(r,t,i){return T(r)?r(t):Array.isArray(r)?r.map(a=>P(t,a)).join(i):P(t,r)}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"groupBy",type:e,pure:!0}),e})(),h=(()=>{class e{transform(r,t,i="",a=!1){if(!Array.isArray(r)||!Array.isArray(i)&&!u(i)&&!v(i)&&!function fr(e){return"boolean"==typeof e}(i))return r;const p=String(i).toLowerCase().split(",");return r.filter(s=>t.some(c=>p.some(l=>{const y=P(s,c),{props:m,tail:vr}=function dr(e,n){const r=n.split("."),t=r.pop();return{props:P(e,r.join(".")),tail:t}}(s,c);if(d(y)&&!d(m)&&Array.isArray(m))return m.some(gr=>{const sr=String(gr[vr]).toLowerCase();return a?sr===l:!!~sr.indexOf(l)});if(d(y))return!1;const pr=String(y).toLowerCase();return a?l===pr:!!~pr.indexOf(l)})))}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"filterBy",type:e,pure:!0}),e})(),D=(()=>{class e{transform(r,t){if(!Array.isArray(r))return r;const i=[...r];if(Array.isArray(t))return i.sort((a,p)=>{const s=t.length;for(let c=0;c<s;++c){const[l,y]=e.extractFromConfig(t[c]),m=e.orderCompare(l,y,a,p);if(0!==m)return m}return 0});if(u(t)){const[a,p,s]=e.extractFromConfig(t);if(1===t.length)switch(s){case"+":return i.sort(e.simpleSort.bind(this));case"-":return i.sort(e.simpleSort.bind(this)).reverse()}return i.sort(e.orderCompare.bind(this,a,p))}return i.sort(e.simpleSort.bind(this))}static simpleSort(r,t){return u(r)&&u(t)?r.toLowerCase().localeCompare(t.toLowerCase()):r-t}static orderCompare(r,t,i,a){const p=P(i,r),s=P(a,r);if(p===s)return 0;if(d(p)||""===p)return 1;if(d(s)||""===s)return-1;if(u(p)&&u(s)){const c=p.toLowerCase().localeCompare(s.toLowerCase());return t?c:-c}return t?p-s:s-p}static extractFromConfig(r){const t=r.substr(0,1);return[r.replace(/^[-+]/,""),"-"!==t,t]}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"orderBy",type:e,pure:!0}),e})(),Y=(()=>{class e extends M{}return e.\u0275fac=(()=>{let n;return function(t){return(n||(n=o.\u0275\u0275getInheritedFactory(e)))(t||e)}})(),e.\u0275pipe=o.\u0275\u0275definePipe({name:"groupByImpure",type:e,pure:!1}),e})(),$=(()=>{class e extends h{}return e.\u0275fac=(()=>{let n;return function(t){return(n||(n=o.\u0275\u0275getInheritedFactory(e)))(t||e)}})(),e.\u0275pipe=o.\u0275\u0275definePipe({name:"filterByImpure",type:e,pure:!1}),e})(),V=(()=>{class e extends D{}return e.\u0275fac=(()=>{let n;return function(t){return(n||(n=o.\u0275\u0275getInheritedFactory(e)))(t||e)}})(),e.\u0275pipe=o.\u0275\u0275definePipe({name:"orderByImpure",type:e,pure:!1}),e})(),Z=(()=>{class e{transform(r=1,t=0,i=1){return Array(t).fill("").map((a,p)=>i*p+r)}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"range",type:e,pure:!0}),e})(),H=(()=>{class e{transform(r,t=1){return u(r)?this.chunk(r.split(""),t):Array.isArray(r)?this.chunk(r,t):r}chunk(r,t){return Array(Math.ceil(r.length/t)).fill([]).map((i,a)=>a*t).map(i=>r.slice(i,i+t))}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"chunk",type:e,pure:!0}),e})(),J=(()=>{class e{transform(r){return Array.isArray(r)?r.reduce((t,i)=>{if(!Array.isArray(i))return t;const[a,p]=i;return t[a]=p,t},{}):r}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"fromPairs",type:e,pure:!0}),e})(),Q=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=o.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=o.\u0275\u0275defineInjector({}),e})(),X=(()=>{class e{transform(r){return Array.isArray(r)||!f(r)?r:Object.keys(r)}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"keys",type:e,pure:!0}),e})(),ee=(()=>{class e{transform(r){return Array.isArray(r)||!f(r)?r:Object.keys(r).map(t=>r[t])}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"values",type:e,pure:!0}),e})(),re=(()=>{class e{transform(r){return Array.isArray(r)||!f(r)?r:Object.entries(r)}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"pairs",type:e,pure:!0}),e})(),ne=(()=>{class e{transform(r,...t){return Array.isArray(r)||!f(r)?r:t.reduce((i,a)=>Object.assign(i,{[a]:r[a]}),{})}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"pick",type:e,pure:!0}),e})(),te=(()=>{class e{transform(r,...t){return Array.isArray(r)||!f(r)?r:Object.keys(r).filter(i=>!~t.indexOf(i)).reduce((i,a)=>Object.assign(i,{[a]:r[a]}),{})}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"omit",type:e,pure:!0}),e})(),ie=(()=>{class e{transform(r){return Array.isArray(r)||!f(r)?r:Object.keys(r).reduce((t,i)=>Object.assign(t,{[r[i]]:i}),{})}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"invert",type:e,pure:!0}),e})(),oe=(()=>{class e{transform(r,t){return Array.isArray(r)||!f(r)?r:Object.keys(r).reduce((i,a)=>{const p=t?t(r[a]):r[a];return Array.isArray(i[p])?(i[p].push(a),i):Object.assign(i,{[p]:[a]})},{})}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"invertBy",type:e,pure:!0}),e})(),ae=(()=>{class e{transform(r,t={}){return Array.isArray(r)||Array.isArray(t)||!f(r)||!f(t)?{}:U(r,t).reduce((i,a)=>(B(t[a],r[a])||(i[a]=r[a]),i),{})}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"diffObj",type:e,pure:!0}),e})(),pe=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=o.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=o.\u0275\u0275defineInjector({}),e})(),se=(()=>{class e{constructor(){this.irregularMap={herb:"an",honor:"an",honorable:"an",hour:"an",mba:"an",msc:"an","m.sc.":"an",unicorn:"a"}}transform(r){if(!r||""===r)return"";{const t=r.trim().split(" ")[0];return this.irregularMap[t.toLocaleLowerCase()]?`${this.irregularMap[t.toLocaleLowerCase()]} ${r}`:S(r[0])?`an ${r}`:`a ${r}`}}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"aOrAn",type:e,pure:!0}),e})(),ue=(()=>{class e{transform(r){return u(r)?r.split(" ").map(t=>E(t)).join(" "):r}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"ucwords",type:e,pure:!0}),e})(),fe=(()=>{class e{transform(r,t="\\s"){return u(r)?r.replace(new RegExp(`^[${t}]+`),""):r}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"ltrim",type:e,pure:!0}),e})(),de=(()=>{class e{transform(r,t=1,i=""){if(t<=0)throw new RangeError;return 1===t?r:this.repeat(r,t-1,i)}repeat(r,t,i){return u(r)?0===t?r:r+i+this.repeat(r,t-1,i):r}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"repeat",type:e,pure:!0}),e})(),ce=(()=>{class e{transform(r,t="\\s"){return u(r)?r.replace(new RegExp(`[${t}]+$`),""):r}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"rtrim",type:e,pure:!0}),e})(),le=(()=>{class e{transform(r,t=[]){return u(r)?r.replace(/\{(\d+)}/g,(i,a)=>d(t[a])?i:t[a]):r}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"scan",type:e,pure:!0}),e})(),Pe=(()=>{class e{transform(r,t=0,i="",a=!0){if(!u(r))return r;if(r.length>t){if(a)return r.slice(0,t)+i;if(~r.indexOf(" ",t))return r.slice(0,r.indexOf(" ",t))+i}return r}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"shorten",type:e,pure:!0}),e})(),ye=(()=>{class e{transform(r,...t){return r.replace(t.length>0?new RegExp(`<(?!/?(${t.join("|")})s*/?)[^>]+>`,"g"):/<(?:.|\s)*?>/g,"")}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"stripTags",type:e,pure:!0}),e})(),me=(()=>{class e{transform(r,t="\\s"){return u(r)?r.replace(new RegExp(`^[${t}]+|[${t}]+$`,"g"),""):r}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"trim",type:e,pure:!0}),e})(),ve=(()=>{class e{transform(r){return u(r)?E(r):r}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"ucfirst",type:e,pure:!0}),e})(),ge=(()=>{class e{transform(r){return u(r)?r.toLowerCase().trim().replace(/[^\w\-]+/g," ").replace(/\s+/g,"-"):r}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"slugify",type:e,pure:!0}),e})(),Me=(()=>{class e{transform(r,t="\\s"){return u(r)?r.toLowerCase().split(/[-_\s]/g).filter(i=>!!i).map((i,a)=>a?i.slice(0,1).toUpperCase()+i.slice(1):i).join(""):r}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"camelize",type:e,pure:!0}),e})(),he=(()=>{class e{constructor(){this.latinMap={\u00c1:"A",\u0102:"A",\u1eae:"A",\u1eb6:"A",\u1eb0:"A",\u1eb2:"A",\u1eb4:"A",\u01cd:"A",\u00c2:"A",\u1ea4:"A",\u1eac:"A",\u1ea6:"A",\u1ea8:"A",\u1eaa:"A",\u00c4:"A",\u01de:"A",\u0226:"A",\u01e0:"A",\u1ea0:"A",\u0200:"A",\u00c0:"A",\u1ea2:"A",\u0202:"A",\u0100:"A",\u0104:"A",\u00c5:"A",\u01fa:"A",\u1e00:"A",\u023a:"A",\u00c3:"A",\ua732:"AA",\u00c6:"AE",\u01fc:"AE",\u01e2:"AE",\ua734:"AO",\ua736:"AU",\ua738:"AV",\ua73a:"AV",\ua73c:"AY",\u1e02:"B",\u1e04:"B",\u0181:"B",\u1e06:"B",\u0243:"B",\u0182:"B",\u0106:"C",\u010c:"C",\u00c7:"C",\u1e08:"C",\u0108:"C",\u010a:"C",\u0187:"C",\u023b:"C",\u010e:"D",\u1e10:"D",\u1e12:"D",\u1e0a:"D",\u1e0c:"D",\u018a:"D",\u1e0e:"D",\u01f2:"D",\u01c5:"D",\u0110:"D",\u018b:"D",\u01f1:"DZ",\u01c4:"DZ",\u00c9:"E",\u0114:"E",\u011a:"E",\u0228:"E",\u1e1c:"E",\u00ca:"E",\u1ebe:"E",\u1ec6:"E",\u1ec0:"E",\u1ec2:"E",\u1ec4:"E",\u1e18:"E",\u00cb:"E",\u0116:"E",\u1eb8:"E",\u0204:"E",\u00c8:"E",\u1eba:"E",\u0206:"E",\u0112:"E",\u1e16:"E",\u1e14:"E",\u0118:"E",\u0246:"E",\u1ebc:"E",\u1e1a:"E",\ua76a:"ET",\u1e1e:"F",\u0191:"F",\u01f4:"G",\u011e:"G",\u01e6:"G",\u0122:"G",\u011c:"G",\u0120:"G",\u0193:"G",\u1e20:"G",\u01e4:"G",\u1e2a:"H",\u021e:"H",\u1e28:"H",\u0124:"H",\u2c67:"H",\u1e26:"H",\u1e22:"H",\u1e24:"H",\u0126:"H",\u00cd:"I",\u012c:"I",\u01cf:"I",\u00ce:"I",\u00cf:"I",\u1e2e:"I",\u0130:"I",\u1eca:"I",\u0208:"I",\u00cc:"I",\u1ec8:"I",\u020a:"I",\u012a:"I",\u012e:"I",\u0197:"I",\u0128:"I",\u1e2c:"I",\ua779:"D",\ua77b:"F",\ua77d:"G",\ua782:"R",\ua784:"S",\ua786:"T",\ua76c:"IS",\u0134:"J",\u0248:"J",\u1e30:"K",\u01e8:"K",\u0136:"K",\u2c69:"K",\ua742:"K",\u1e32:"K",\u0198:"K",\u1e34:"K",\ua740:"K",\ua744:"K",\u0139:"L",\u023d:"L",\u013d:"L",\u013b:"L",\u1e3c:"L",\u1e36:"L",\u1e38:"L",\u2c60:"L",\ua748:"L",\u1e3a:"L",\u013f:"L",\u2c62:"L",\u01c8:"L",\u0141:"L",\u01c7:"LJ",\u1e3e:"M",\u1e40:"M",\u1e42:"M",\u2c6e:"M",\u0143:"N",\u0147:"N",\u0145:"N",\u1e4a:"N",\u1e44:"N",\u1e46:"N",\u01f8:"N",\u019d:"N",\u1e48:"N",\u0220:"N",\u01cb:"N",\u00d1:"N",\u01ca:"NJ",\u00d3:"O",\u014e:"O",\u01d1:"O",\u00d4:"O",\u1ed0:"O",\u1ed8:"O",\u1ed2:"O",\u1ed4:"O",\u1ed6:"O",\u00d6:"O",\u022a:"O",\u022e:"O",\u0230:"O",\u1ecc:"O",\u0150:"O",\u020c:"O",\u00d2:"O",\u1ece:"O",\u01a0:"O",\u1eda:"O",\u1ee2:"O",\u1edc:"O",\u1ede:"O",\u1ee0:"O",\u020e:"O",\ua74a:"O",\ua74c:"O",\u014c:"O",\u1e52:"O",\u1e50:"O",\u019f:"O",\u01ea:"O",\u01ec:"O",\u00d8:"O",\u01fe:"O",\u00d5:"O",\u1e4c:"O",\u1e4e:"O",\u022c:"O",\u01a2:"OI",\ua74e:"OO",\u0190:"E",\u0186:"O",\u0222:"OU",\u1e54:"P",\u1e56:"P",\ua752:"P",\u01a4:"P",\ua754:"P",\u2c63:"P",\ua750:"P",\ua758:"Q",\ua756:"Q",\u0154:"R",\u0158:"R",\u0156:"R",\u1e58:"R",\u1e5a:"R",\u1e5c:"R",\u0210:"R",\u0212:"R",\u1e5e:"R",\u024c:"R",\u2c64:"R",\ua73e:"C",\u018e:"E",\u015a:"S",\u1e64:"S",\u0160:"S",\u1e66:"S",\u015e:"S",\u015c:"S",\u0218:"S",\u1e60:"S",\u1e62:"S",\u1e68:"S",\u1e9e:"SS",\u0164:"T",\u0162:"T",\u1e70:"T",\u021a:"T",\u023e:"T",\u1e6a:"T",\u1e6c:"T",\u01ac:"T",\u1e6e:"T",\u01ae:"T",\u0166:"T",\u2c6f:"A",\ua780:"L",\u019c:"M",\u0245:"V",\ua728:"TZ",\u00da:"U",\u016c:"U",\u01d3:"U",\u00db:"U",\u1e76:"U",\u00dc:"U",\u01d7:"U",\u01d9:"U",\u01db:"U",\u01d5:"U",\u1e72:"U",\u1ee4:"U",\u0170:"U",\u0214:"U",\u00d9:"U",\u1ee6:"U",\u01af:"U",\u1ee8:"U",\u1ef0:"U",\u1eea:"U",\u1eec:"U",\u1eee:"U",\u0216:"U",\u016a:"U",\u1e7a:"U",\u0172:"U",\u016e:"U",\u0168:"U",\u1e78:"U",\u1e74:"U",\ua75e:"V",\u1e7e:"V",\u01b2:"V",\u1e7c:"V",\ua760:"VY",\u1e82:"W",\u0174:"W",\u1e84:"W",\u1e86:"W",\u1e88:"W",\u1e80:"W",\u2c72:"W",\u1e8c:"X",\u1e8a:"X",\u00dd:"Y",\u0176:"Y",\u0178:"Y",\u1e8e:"Y",\u1ef4:"Y",\u1ef2:"Y",\u01b3:"Y",\u1ef6:"Y",\u1efe:"Y",\u0232:"Y",\u024e:"Y",\u1ef8:"Y",\u0179:"Z",\u017d:"Z",\u1e90:"Z",\u2c6b:"Z",\u017b:"Z",\u1e92:"Z",\u0224:"Z",\u1e94:"Z",\u01b5:"Z",\u0132:"IJ",\u0152:"OE",\u1d00:"A",\u1d01:"AE",\u0299:"B",\u1d03:"B",\u1d04:"C",\u1d05:"D",\u1d07:"E",\ua730:"F",\u0262:"G",\u029b:"G",\u029c:"H",\u026a:"I",\u0281:"R",\u1d0a:"J",\u1d0b:"K",\u029f:"L",\u1d0c:"L",\u1d0d:"M",\u0274:"N",\u1d0f:"O",\u0276:"OE",\u1d10:"O",\u1d15:"OU",\u1d18:"P",\u0280:"R",\u1d0e:"N",\u1d19:"R",\ua731:"S",\u1d1b:"T",\u2c7b:"E",\u1d1a:"R",\u1d1c:"U",\u1d20:"V",\u1d21:"W",\u028f:"Y",\u1d22:"Z",\u00e1:"a",\u0103:"a",\u1eaf:"a",\u1eb7:"a",\u1eb1:"a",\u1eb3:"a",\u1eb5:"a",\u01ce:"a",\u00e2:"a",\u1ea5:"a",\u1ead:"a",\u1ea7:"a",\u1ea9:"a",\u1eab:"a",\u00e4:"a",\u01df:"a",\u0227:"a",\u01e1:"a",\u1ea1:"a",\u0201:"a",\u00e0:"a",\u1ea3:"a",\u0203:"a",\u0101:"a",\u0105:"a",\u1d8f:"a",\u1e9a:"a",\u00e5:"a",\u01fb:"a",\u1e01:"a",\u2c65:"a",\u00e3:"a",\ua733:"aa",\u00e6:"ae",\u01fd:"ae",\u01e3:"ae",\ua735:"ao",\ua737:"au",\ua739:"av",\ua73b:"av",\ua73d:"ay",\u1e03:"b",\u1e05:"b",\u0253:"b",\u1e07:"b",\u1d6c:"b",\u1d80:"b",\u0180:"b",\u0183:"b",\u0275:"o",\u0107:"c",\u010d:"c",\u00e7:"c",\u1e09:"c",\u0109:"c",\u0255:"c",\u010b:"c",\u0188:"c",\u023c:"c",\u010f:"d",\u1e11:"d",\u1e13:"d",\u0221:"d",\u1e0b:"d",\u1e0d:"d",\u0257:"d",\u1d91:"d",\u1e0f:"d",\u1d6d:"d",\u1d81:"d",\u0111:"d",\u0256:"d",\u018c:"d",\u0131:"i",\u0237:"j",\u025f:"j",\u0284:"j",\u01f3:"dz",\u01c6:"dz",\u00e9:"e",\u0115:"e",\u011b:"e",\u0229:"e",\u1e1d:"e",\u00ea:"e",\u1ebf:"e",\u1ec7:"e",\u1ec1:"e",\u1ec3:"e",\u1ec5:"e",\u1e19:"e",\u00eb:"e",\u0117:"e",\u1eb9:"e",\u0205:"e",\u00e8:"e",\u1ebb:"e",\u0207:"e",\u0113:"e",\u1e17:"e",\u1e15:"e",\u2c78:"e",\u0119:"e",\u1d92:"e",\u0247:"e",\u1ebd:"e",\u1e1b:"e",\ua76b:"et",\u1e1f:"f",\u0192:"f",\u1d6e:"f",\u1d82:"f",\u01f5:"g",\u011f:"g",\u01e7:"g",\u0123:"g",\u011d:"g",\u0121:"g",\u0260:"g",\u1e21:"g",\u1d83:"g",\u01e5:"g",\u1e2b:"h",\u021f:"h",\u1e29:"h",\u0125:"h",\u2c68:"h",\u1e27:"h",\u1e23:"h",\u1e25:"h",\u0266:"h",\u1e96:"h",\u0127:"h",\u0195:"hv",\u00ed:"i",\u012d:"i",\u01d0:"i",\u00ee:"i",\u00ef:"i",\u1e2f:"i",\u1ecb:"i",\u0209:"i",\u00ec:"i",\u1ec9:"i",\u020b:"i",\u012b:"i",\u012f:"i",\u1d96:"i",\u0268:"i",\u0129:"i",\u1e2d:"i",\ua77a:"d",\ua77c:"f",\u1d79:"g",\ua783:"r",\ua785:"s",\ua787:"t",\ua76d:"is",\u01f0:"j",\u0135:"j",\u029d:"j",\u0249:"j",\u1e31:"k",\u01e9:"k",\u0137:"k",\u2c6a:"k",\ua743:"k",\u1e33:"k",\u0199:"k",\u1e35:"k",\u1d84:"k",\ua741:"k",\ua745:"k",\u013a:"l",\u019a:"l",\u026c:"l",\u013e:"l",\u013c:"l",\u1e3d:"l",\u0234:"l",\u1e37:"l",\u1e39:"l",\u2c61:"l",\ua749:"l",\u1e3b:"l",\u0140:"l",\u026b:"l",\u1d85:"l",\u026d:"l",\u0142:"l",\u01c9:"lj",\u017f:"s",\u1e9c:"s",\u1e9b:"s",\u1e9d:"s",\u1e3f:"m",\u1e41:"m",\u1e43:"m",\u0271:"m",\u1d6f:"m",\u1d86:"m",\u0144:"n",\u0148:"n",\u0146:"n",\u1e4b:"n",\u0235:"n",\u1e45:"n",\u1e47:"n",\u01f9:"n",\u0272:"n",\u1e49:"n",\u019e:"n",\u1d70:"n",\u1d87:"n",\u0273:"n",\u00f1:"n",\u01cc:"nj",\u00f3:"o",\u014f:"o",\u01d2:"o",\u00f4:"o",\u1ed1:"o",\u1ed9:"o",\u1ed3:"o",\u1ed5:"o",\u1ed7:"o",\u00f6:"o",\u022b:"o",\u022f:"o",\u0231:"o",\u1ecd:"o",\u0151:"o",\u020d:"o",\u00f2:"o",\u1ecf:"o",\u01a1:"o",\u1edb:"o",\u1ee3:"o",\u1edd:"o",\u1edf:"o",\u1ee1:"o",\u020f:"o",\ua74b:"o",\ua74d:"o",\u2c7a:"o",\u014d:"o",\u1e53:"o",\u1e51:"o",\u01eb:"o",\u01ed:"o",\u00f8:"o",\u01ff:"o",\u00f5:"o",\u1e4d:"o",\u1e4f:"o",\u022d:"o",\u01a3:"oi",\ua74f:"oo",\u025b:"e",\u1d93:"e",\u0254:"o",\u1d97:"o",\u0223:"ou",\u1e55:"p",\u1e57:"p",\ua753:"p",\u01a5:"p",\u1d71:"p",\u1d88:"p",\ua755:"p",\u1d7d:"p",\ua751:"p",\ua759:"q",\u02a0:"q",\u024b:"q",\ua757:"q",\u0155:"r",\u0159:"r",\u0157:"r",\u1e59:"r",\u1e5b:"r",\u1e5d:"r",\u0211:"r",\u027e:"r",\u1d73:"r",\u0213:"r",\u1e5f:"r",\u027c:"r",\u1d72:"r",\u1d89:"r",\u024d:"r",\u027d:"r",\u2184:"c",\ua73f:"c",\u0258:"e",\u027f:"r",\u015b:"s",\u1e65:"s",\u0161:"s",\u1e67:"s",\u015f:"s",\u015d:"s",\u0219:"s",\u1e61:"s",\u1e63:"s",\u1e69:"s",\u0282:"s",\u1d74:"s",\u1d8a:"s",\u023f:"s",\u0261:"g",\u00df:"ss",\u1d11:"o",\u1d13:"o",\u1d1d:"u",\u0165:"t",\u0163:"t",\u1e71:"t",\u021b:"t",\u0236:"t",\u1e97:"t",\u2c66:"t",\u1e6b:"t",\u1e6d:"t",\u01ad:"t",\u1e6f:"t",\u1d75:"t",\u01ab:"t",\u0288:"t",\u0167:"t",\u1d7a:"th",\u0250:"a",\u1d02:"ae",\u01dd:"e",\u1d77:"g",\u0265:"h",\u02ae:"h",\u02af:"h",\u1d09:"i",\u029e:"k",\ua781:"l",\u026f:"m",\u0270:"m",\u1d14:"oe",\u0279:"r",\u027b:"r",\u027a:"r",\u2c79:"r",\u0287:"t",\u028c:"v",\u028d:"w",\u028e:"y",\ua729:"tz",\u00fa:"u",\u016d:"u",\u01d4:"u",\u00fb:"u",\u1e77:"u",\u00fc:"u",\u01d8:"u",\u01da:"u",\u01dc:"u",\u01d6:"u",\u1e73:"u",\u1ee5:"u",\u0171:"u",\u0215:"u",\u00f9:"u",\u1ee7:"u",\u01b0:"u",\u1ee9:"u",\u1ef1:"u",\u1eeb:"u",\u1eed:"u",\u1eef:"u",\u0217:"u",\u016b:"u",\u1e7b:"u",\u0173:"u",\u1d99:"u",\u016f:"u",\u0169:"u",\u1e79:"u",\u1e75:"u",\u1d6b:"ue",\ua778:"um",\u2c74:"v",\ua75f:"v",\u1e7f:"v",\u028b:"v",\u1d8c:"v",\u2c71:"v",\u1e7d:"v",\ua761:"vy",\u1e83:"w",\u0175:"w",\u1e85:"w",\u1e87:"w",\u1e89:"w",\u1e81:"w",\u2c73:"w",\u1e98:"w",\u1e8d:"x",\u1e8b:"x",\u1d8d:"x",\u00fd:"y",\u0177:"y",\u00ff:"y",\u1e8f:"y",\u1ef5:"y",\u1ef3:"y",\u01b4:"y",\u1ef7:"y",\u1eff:"y",\u0233:"y",\u1e99:"y",\u024f:"y",\u1ef9:"y",\u017a:"z",\u017e:"z",\u1e91:"z",\u0291:"z",\u2c6c:"z",\u017c:"z",\u1e93:"z",\u0225:"z",\u1e95:"z",\u1d76:"z",\u1d8e:"z",\u0290:"z",\u01b6:"z",\u0240:"z",\ufb00:"ff",\ufb03:"ffi",\ufb04:"ffl",\ufb01:"fi",\ufb02:"fl",\u0133:"ij",\u0153:"oe",\ufb06:"st",\u2090:"a",\u2091:"e",\u1d62:"i",\u2c7c:"j",\u2092:"o",\u1d63:"r",\u1d64:"u",\u1d65:"v",\u2093:"x"}}transform(r,t="\\s"){return u(r)?r.replace(/[^A-Za-z0-9]/g,i=>this.latinMap[i]||i):r}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"latinise",type:e,pure:!0}),e})(),De=(()=>{class e{transform(r,t="\\s"){return u(r)?r.replace(/\r\n/g,"\n").split("\n"):r}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"lines",type:e,pure:!0}),e})(),Ae=(()=>{class e{transform(r,t="\\s"){return u(r)?r.trim().replace(/\s+/g,"").replace(/[A-Z]/g,(i,a)=>a?`_${i.toLowerCase()}`:i.toLowerCase()):r}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"underscore",type:e,pure:!0}),e})(),Ie=(()=>{class e{transform(r,t,i){return u(r)?r.match(new RegExp(t,i)):r}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"match",type:e,pure:!0}),e})(),we=(()=>{class e{transform(r,t,i){return u(r)?new RegExp(t,i).test(r):r}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"test",type:e,pure:!0}),e})(),Fe=(()=>{class e{transform(r,t,i=" "){if(!u(r)||r.length>=t)return r;for(;r.length<t;)r=i+r;return r}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"lpad",type:e,pure:!0}),e})(),Oe=(()=>{class e{transform(r,t=1,i=" "){if(!u(r)||r.length>=t)return r;for(;r.length<t;)r+=i;return r}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"rpad",type:e,pure:!0}),e})(),_e=(()=>{class e{constructor(){this.irregularMap={addendum:"addenda",alga:"algae",alumna:"alumnae",alumnus:"alumni",analysis:"analyses",antenna:"antennae",appendix:"appendices",aquarium:"aquaria",arch:"arches",axe:"axes",axis:"axes",bacillus:"bacilli",bacterium:"bacteria",basis:"bases",batch:"batches",beach:"beaches",beau:"beaux",bison:"bison",brush:"brushes",buffalo:"buffaloes",bureau:"bureaus",bus:"busses",cactus:"cacti",calf:"calves",chateau:"chateaux",cherry:"cherries",child:"children",church:"churches",circus:"circuses",cod:"cod",corps:"corps",corpus:"corpora",crisis:"crises",criterion:"criteria",curriculum:"curricula",datum:"data",deer:"deer",diagnosis:"diagnoses",die:"dice",domino:"dominoes",dwarf:"dwarves",echo:"echoes",elf:"elves",ellipsis:"ellipses",embargo:"embargoes",emphasis:"emphases",erratum:"errata",fax:"faxes",fireman:"firemen",fish:"fish",flush:"flushes",focus:"foci",foot:"feet",formula:"formulas",fungus:"fungi",genus:"genera",goose:"geese",grafito:"grafiti",half:"halves",hero:"heroes",hoax:"hoaxes",hoof:"hooves",hypothesis:"hypotheses",index:"indices",kiss:"kisses",knife:"knives",leaf:"leaves",life:"lives",loaf:"loaves",louse:"lice",man:"men",mango:"mangoes",matrix:"matrices",means:"means",medium:"media",memorandum:"memoranda",millennium:"milennia",moose:"moose",mosquito:"mosquitoes",motto:"mottoes",mouse:"mice",nebula:"nebulae",neurosis:"neuroses",nucleus:"nuclei",oasis:"oases",octopus:"octopodes",ovum:"ova",ox:"oxen",paralysis:"paralyses",parenthesis:"parentheses",person:"people",phenomenon:"phenomena",plateau:"plateaux",potato:"potatoes",quiz:"quizzes",radius:"radii",reflex:"reflexes","runner-up":"runners-up",scampo:"scampi",scarf:"scarves",scissors:"scissors",scratch:"scratches",self:"selves",series:"series",sheaf:"sheaves",sheep:"sheep",shelf:"shelves","son-in-law":"sons-in-law",species:"species",splash:"splashes",stimulus:"stimuli",stitch:"stitches",stratum:"strata",syllabus:"syllabi",symposium:"symposia",synopsis:"synopses",synthesis:"syntheses",tableau:"tableaux",tax:"taxes",that:"those",thesis:"theses",thief:"thieves",this:"these",tomato:"tomatoes",tooth:"teeth",tornado:"tornadoes",torpedo:"torpedoes",vertebra:"vertebrae",veto:"vetoes",vita:"vitae",volcano:"volcanoes",waltz:"waltzes",wash:"washes",watch:"watches",wharf:"wharves",wife:"wives",wolf:"wolves",woman:"women",zero:"zeroes"}}transform(r,t=0){if(!r||""===r)return"";if(1===t)return r;{const i=r.trim().split(" ")[r.trim().split(" ").length-1];return this.irregularMap[i.toLocaleLowerCase()]?i[0]===i[0].toLocaleUpperCase()?r.replace(i,this.irregularMap[i.toLocaleLowerCase()].replace(this.irregularMap[i.toLocaleLowerCase()][0],this.irregularMap[i.toLocaleLowerCase()][0].toLocaleUpperCase())):r.replace(i,this.irregularMap[i.toLocaleLowerCase()]):"y"===i[i.length-1]?S(i[i.length-2])?r+"s":r.replace(i,i.slice(0,-1)+"ies"):"s"===i[i.length-1]?r+"es":r+"s"}}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"makePluralString",type:e,pure:!0}),e})(),Te=(()=>{class e{transform(r,t="",i=""){return u(r)?(t&&u(t)?t:"")+r+(i&&u(i)?i:""):r}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"wrap",type:e,pure:!0}),e})();const cr=[se,fe,de,ce,le,Pe,ye,me,ve,ue,ge,Me,he,De,Ae,Ie,we,Fe,Oe,_e,Te];let Ne=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=o.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=o.\u0275\u0275defineInjector({}),e})(),Se=(()=>{class e{transform(r){return Array.isArray(r)?Math.max(...r):r}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"max",type:e,pure:!0}),e})(),Ee=(()=>{class e{transform(r){return Array.isArray(r)?Math.min(...r):r}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"min",type:e,pure:!0}),e})(),Le=(()=>{class e{transform(r,t=100,i=!1){if(isNaN(r))return r;const a=100*r/t;return i?Math.floor(a):a}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"percentage",type:e,pure:!0}),e})(),Ue=(()=>{class e{transform(r){return Array.isArray(r)?r.reduce((t,i)=>t+i,0):r}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"sum",type:e,pure:!0}),e})(),Be=(()=>{class e{transform(r,t=0){if(t<=0)return Math.floor(r);const i=10**t;return Math.floor(r*i)/i}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"floor",type:e,pure:!0}),e})(),Re=(()=>{class e{transform(r,t=0){return L(r,t)}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"round",type:e,pure:!0}),e})(),Ce=(()=>{class e{transform(r){return isNaN(r)?r:Math.sqrt(r)}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"sqrt",type:e,pure:!0}),e})(),be=(()=>{class e{transform(r,t=2){return isNaN(r)?r:r**t}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"pow",type:e,pure:!0}),e})(),qe=(()=>{class e{transform(r,t=0){if(t<=0)return Math.ceil(r);const i=10**t;return Math.ceil(r*i)/i}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"ceil",type:e,pure:!0}),e})(),ke=(()=>{class e{transform(r){return v(r)?180*r/Math.PI:NaN}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"degrees",type:e,pure:!0}),e})(),Ge=(()=>{class e{constructor(){this.dictionary=[{max:1024,type:"B"},{max:1048576,type:"KB"},{max:1073741824,type:"MB"},{max:10995116e5,type:"GB"}]}transform(r,t){if(!v(r))return NaN;const i=this.dictionary.find(s=>r<s.max)||this.dictionary[this.dictionary.length-1],a=r/(i.max/1024);return`${d(t)?a:L(a,t)} ${i.type}`}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"bytes",type:e,pure:!0}),e})(),xe=(()=>{class e{transform(r){return v(r)?r*Math.PI/180:NaN}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"radians",type:e,pure:!0}),e})();const lr=[Se,Ee,Le,Ue,Be,Re,Ce,be,qe,ke,Ge,xe];let ze=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=o.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=o.\u0275\u0275defineInjector({}),e})(),je=(()=>{class e{transform(r){return!d(r)}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"isDefined",type:e,pure:!0}),e})(),We=(()=>{class e{transform(r){return null===r}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"isNull",type:e,pure:!0}),e})(),Ke=(()=>{class e{transform(r){return d(r)}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"isUndefined",type:e,pure:!0}),e})(),Ye=(()=>{class e{transform(r){return u(r)}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"isString",type:e,pure:!0}),e})(),$e=(()=>{class e{transform(r){return T(r)}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"isFunction",type:e,pure:!0}),e})(),Ve=(()=>{class e{transform(r){return N(r)}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"isNumber",type:e,pure:!0}),e})(),Ze=(()=>{class e{transform(r){return Array.isArray(r)}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"isArray",type:e,pure:!0}),e})(),He=(()=>{class e{transform(r){return f(r)}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"isObject",type:e,pure:!0}),e})(),Je=(()=>{class e{transform(r,t){return r>=t}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"isGreaterEqualThan",type:e,pure:!0}),e})(),Qe=(()=>{class e{transform(r,t){return r>t}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"isGreaterThan",type:e,pure:!0}),e})(),A=(()=>{class e{transform(r,t){return r<=t}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"isLessEqualThan",type:e,pure:!0}),e})(),Xe=(()=>{class e{transform(r,t){return r==t}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"isEqualTo",type:e,pure:!0}),e})(),er=(()=>{class e{transform(r,t){return r!=t}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"isNotEqualTo",type:e,pure:!0}),e})(),rr=(()=>{class e{transform(r,t){return r===t}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"isIdenticalTo",type:e,pure:!0}),e})(),nr=(()=>{class e{transform(r,t){return r!==t}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"isNotIdenticalTo",type:e,pure:!0}),e})(),tr=(()=>{class e{transform(r,t){return r<t}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"isLessThan",type:e,pure:!0}),e})();const Pr=[je,We,Ke,Ye,$e,Ve,Ze,He,Je,Qe,A,A,Xe,er,rr,nr,tr];let ir=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=o.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=o.\u0275\u0275defineInjector({}),e})(),or=(()=>{class e{transform(r){if(!r||!r.getTime&&!r.toDate)return"Invalid date";const t=r.toDate?r.toDate():r.getTime(),i=+new Date;if(t>i)return"in the future";for(let a=0,p=e.MAPPER.length,s=i-t,c=e.YEAR_MS;a<p;++a){const l=e.MAPPER[a],y=Math.floor(s/(c/=l.div));if(y>=1)return 1===y?l.single:`${y} ${l.many} ago`}return"just now"}}return e.YEAR_MS=290304e5,e.MAPPER=[{single:"last year",many:"years",div:1},{single:"last month",many:"months",div:12},{single:"last week",many:"weeks",div:4},{single:"yesterday",many:"days",div:7},{single:"an hour ago",many:"hours",div:24},{single:"just now",many:"minutes",div:60}],e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=o.\u0275\u0275definePipe({name:"timeAgo",type:e,pure:!0}),e})();const yr=[or];let ar=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=o.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=o.\u0275\u0275defineInjector({}),e})(),mr=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=o.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=o.\u0275\u0275defineInjector({imports:[Q,Ne,ze,ir,pe,ar]}),e})()}}]);