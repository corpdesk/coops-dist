(self.webpackChunkcoops=self.webpackChunkcoops||[]).push([[584],{8203:(D,s,r)=>{r.r(s),r.d(s,{BidiModule:()=>v,DIR_DOCUMENT:()=>a,Dir:()=>g,Directionality:()=>c});var i=r(2264),l=r(9354);const a=new i.InjectionToken("cdk-dir-doc",{providedIn:"root",factory:function h(){return(0,i.inject)(l.DOCUMENT)}}),f=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function d(t){const u=t?.toLowerCase()||"";return"auto"===u&&typeof navigator<"u"&&navigator?.language?f.test(navigator.language)?"rtl":"ltr":"rtl"===u?"rtl":"ltr"}let c=(()=>{class t{constructor(e){this.value="ltr",this.change=new i.EventEmitter,e&&(this.value=d((e.body?e.body.dir:null)||(e.documentElement?e.documentElement.dir:null)||"ltr"))}ngOnDestroy(){this.change.complete()}static#t=this.\u0275fac=function(n){return new(n||t)(i.\u0275\u0275inject(a,8))};static#e=this.\u0275prov=i.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),g=(()=>{class t{constructor(){this._dir="ltr",this._isInitialized=!1,this.change=new i.EventEmitter}get dir(){return this._dir}set dir(e){const n=this._dir;this._dir=d(e),this._rawDir=e,n!==this._dir&&this._isInitialized&&this.change.emit(this._dir)}get value(){return this.dir}ngAfterContentInit(){this._isInitialized=!0}ngOnDestroy(){this.change.complete()}static#t=this.\u0275fac=function(n){return new(n||t)};static#e=this.\u0275dir=i.\u0275\u0275defineDirective({type:t,selectors:[["","dir",""]],hostVars:1,hostBindings:function(n,o){2&n&&i.\u0275\u0275attribute("dir",o._rawDir)},inputs:{dir:"dir"},outputs:{change:"dirChange"},exportAs:["dir"],standalone:!0,features:[i.\u0275\u0275ProvidersFeature([{provide:c,useExisting:t}])]})}return t})(),v=(()=>{class t{static#t=this.\u0275fac=function(n){return new(n||t)};static#e=this.\u0275mod=i.\u0275\u0275defineNgModule({type:t});static#i=this.\u0275inj=i.\u0275\u0275defineInjector({})}return t})()}}]);