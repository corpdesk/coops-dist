(self.webpackChunkcoops=self.webpackChunkcoops||[]).push([[3955,6336],{3955:(K,O,c)=>{c.r(O),c.d(O,{DEFAULT_LANGUAGE:()=>E,FakeMissingTranslationHandler:()=>j,MissingTranslationHandler:()=>D,TranslateCompiler:()=>C,TranslateDefaultParser:()=>P,TranslateDirective:()=>R,TranslateFakeCompiler:()=>A,TranslateFakeLoader:()=>S,TranslateLoader:()=>p,TranslateModule:()=>I,TranslateParser:()=>v,TranslatePipe:()=>V,TranslateService:()=>b,TranslateStore:()=>M,USE_DEFAULT_LANG:()=>w,USE_EXTEND:()=>y,USE_STORE:()=>m});var r=c(2264),l=c(4866),d=c(2778);class p{}let S=(()=>{class a extends p{getTranslation(e){return(0,l.of)({})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=r.\u0275\u0275getInheritedFactory(a)))(n||a)}})();static \u0275prov=r.\u0275\u0275defineInjectable({token:a,factory:a.\u0275fac})}return a})();class D{}let j=(()=>{class a{handle(e){return e.key}static \u0275fac=function(t){return new(t||a)};static \u0275prov=r.\u0275\u0275defineInjectable({token:a,factory:a.\u0275fac})}return a})();function L(a,o){if(a===o)return!0;if(null===a||null===o)return!1;if(a!=a&&o!=o)return!0;let n,s,i,e=typeof a;if(e==typeof o&&"object"==e){if(!Array.isArray(a)){if(Array.isArray(o))return!1;for(s in i=Object.create(null),a){if(!L(a[s],o[s]))return!1;i[s]=!0}for(s in o)if(!(s in i)&&typeof o[s]<"u")return!1;return!0}if(!Array.isArray(o))return!1;if((n=a.length)==o.length){for(s=0;s<n;s++)if(!L(a[s],o[s]))return!1;return!0}}return!1}function h(a){return typeof a<"u"&&null!==a}function _(a){return a&&"object"==typeof a&&!Array.isArray(a)}function F(a,o){let e=Object.assign({},a);return _(a)&&_(o)&&Object.keys(o).forEach(t=>{_(o[t])?t in a?e[t]=F(a[t],o[t]):Object.assign(e,{[t]:o[t]}):Object.assign(e,{[t]:o[t]})}),e}class v{}let P=(()=>{class a extends v{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(e,t){let n;return n="string"==typeof e?this.interpolateString(e,t):"function"==typeof e?this.interpolateFunction(e,t):e,n}getValue(e,t){let n="string"==typeof t?t.split("."):[t];t="";do{t+=n.shift(),!h(e)||!h(e[t])||"object"!=typeof e[t]&&n.length?n.length?t+=".":e=void 0:(e=e[t],t="")}while(n.length);return e}interpolateFunction(e,t){return e(t)}interpolateString(e,t){return t?e.replace(this.templateMatcher,(n,s)=>{let i=this.getValue(t,s);return h(i)?i:n}):e}static \u0275fac=(()=>{let e;return function(n){return(e||(e=r.\u0275\u0275getInheritedFactory(a)))(n||a)}})();static \u0275prov=r.\u0275\u0275defineInjectable({token:a,factory:a.\u0275fac})}return a})();class C{}let A=(()=>{class a extends C{compile(e,t){return e}compileTranslations(e,t){return e}static \u0275fac=(()=>{let e;return function(n){return(e||(e=r.\u0275\u0275getInheritedFactory(a)))(n||a)}})();static \u0275prov=r.\u0275\u0275defineInjectable({token:a,factory:a.\u0275fac})}return a})();class M{defaultLang;currentLang=this.defaultLang;translations={};langs=[];onTranslationChange=new r.EventEmitter;onLangChange=new r.EventEmitter;onDefaultLangChange=new r.EventEmitter}const m=new r.InjectionToken("USE_STORE"),w=new r.InjectionToken("USE_DEFAULT_LANG"),E=new r.InjectionToken("DEFAULT_LANGUAGE"),y=new r.InjectionToken("USE_EXTEND");let b=(()=>{class a{store;currentLoader;compiler;parser;missingTranslationHandler;useDefaultLang;isolate;extend;loadingTranslations;pending=!1;_onTranslationChange=new r.EventEmitter;_onLangChange=new r.EventEmitter;_onDefaultLangChange=new r.EventEmitter;_defaultLang;_currentLang;_langs=[];_translations={};_translationRequests={};get onTranslationChange(){return this.isolate?this._onTranslationChange:this.store.onTranslationChange}get onLangChange(){return this.isolate?this._onLangChange:this.store.onLangChange}get onDefaultLangChange(){return this.isolate?this._onDefaultLangChange:this.store.onDefaultLangChange}get defaultLang(){return this.isolate?this._defaultLang:this.store.defaultLang}set defaultLang(e){this.isolate?this._defaultLang=e:this.store.defaultLang=e}get currentLang(){return this.isolate?this._currentLang:this.store.currentLang}set currentLang(e){this.isolate?this._currentLang=e:this.store.currentLang=e}get langs(){return this.isolate?this._langs:this.store.langs}set langs(e){this.isolate?this._langs=e:this.store.langs=e}get translations(){return this.isolate?this._translations:this.store.translations}set translations(e){this.isolate?this._translations=e:this.store.translations=e}constructor(e,t,n,s,i,u=!0,f=!1,g=!1,T){this.store=e,this.currentLoader=t,this.compiler=n,this.parser=s,this.missingTranslationHandler=i,this.useDefaultLang=u,this.isolate=f,this.extend=g,T&&this.setDefaultLang(T)}setDefaultLang(e){if(e===this.defaultLang)return;let t=this.retrieveTranslations(e);typeof t<"u"?(null==this.defaultLang&&(this.defaultLang=e),t.pipe((0,d.take)(1)).subscribe(n=>{this.changeDefaultLang(e)})):this.changeDefaultLang(e)}getDefaultLang(){return this.defaultLang}use(e){if(e===this.currentLang)return(0,l.of)(this.translations[e]);let t=this.retrieveTranslations(e);return typeof t<"u"?(this.currentLang||(this.currentLang=e),t.pipe((0,d.take)(1)).subscribe(n=>{this.changeLang(e)}),t):(this.changeLang(e),(0,l.of)(this.translations[e]))}retrieveTranslations(e){let t;return(typeof this.translations[e]>"u"||this.extend)&&(this._translationRequests[e]=this._translationRequests[e]||this.getTranslation(e),t=this._translationRequests[e]),t}getTranslation(e){this.pending=!0;const t=this.currentLoader.getTranslation(e).pipe((0,d.shareReplay)(1),(0,d.take)(1));return this.loadingTranslations=t.pipe((0,d.map)(n=>this.compiler.compileTranslations(n,e)),(0,d.shareReplay)(1),(0,d.take)(1)),this.loadingTranslations.subscribe({next:n=>{this.translations[e]=this.extend&&this.translations[e]?{...n,...this.translations[e]}:n,this.updateLangs(),this.pending=!1},error:n=>{this.pending=!1}}),t}setTranslation(e,t,n=!1){t=this.compiler.compileTranslations(t,e),this.translations[e]=(n||this.extend)&&this.translations[e]?F(this.translations[e],t):t,this.updateLangs(),this.onTranslationChange.emit({lang:e,translations:this.translations[e]})}getLangs(){return this.langs}addLangs(e){e.forEach(t=>{-1===this.langs.indexOf(t)&&this.langs.push(t)})}updateLangs(){this.addLangs(Object.keys(this.translations))}getParsedResult(e,t,n){let s;if(t instanceof Array){let i={},u=!1;for(let f of t)i[f]=this.getParsedResult(e,f,n),(0,l.isObservable)(i[f])&&(u=!0);if(u){const f=t.map(g=>(0,l.isObservable)(i[g])?i[g]:(0,l.of)(i[g]));return(0,l.forkJoin)(f).pipe((0,d.map)(g=>{let T={};return g.forEach((U,N)=>{T[t[N]]=U}),T}))}return i}if(e&&(s=this.parser.interpolate(this.parser.getValue(e,t),n)),typeof s>"u"&&null!=this.defaultLang&&this.defaultLang!==this.currentLang&&this.useDefaultLang&&(s=this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang],t),n)),typeof s>"u"){let i={key:t,translateService:this};typeof n<"u"&&(i.interpolateParams=n),s=this.missingTranslationHandler.handle(i)}return typeof s<"u"?s:t}get(e,t){if(!h(e)||!e.length)throw new Error('Parameter "key" required');if(this.pending)return this.loadingTranslations.pipe((0,d.concatMap)(n=>(n=this.getParsedResult(n,e,t),(0,l.isObservable)(n)?n:(0,l.of)(n))));{let n=this.getParsedResult(this.translations[this.currentLang],e,t);return(0,l.isObservable)(n)?n:(0,l.of)(n)}}getStreamOnTranslationChange(e,t){if(!h(e)||!e.length)throw new Error('Parameter "key" required');return(0,l.concat)((0,l.defer)(()=>this.get(e,t)),this.onTranslationChange.pipe((0,d.switchMap)(n=>{const s=this.getParsedResult(n.translations,e,t);return"function"==typeof s.subscribe?s:(0,l.of)(s)})))}stream(e,t){if(!h(e)||!e.length)throw new Error('Parameter "key" required');return(0,l.concat)((0,l.defer)(()=>this.get(e,t)),this.onLangChange.pipe((0,d.switchMap)(n=>{const s=this.getParsedResult(n.translations,e,t);return(0,l.isObservable)(s)?s:(0,l.of)(s)})))}instant(e,t){if(!h(e)||!e.length)throw new Error('Parameter "key" required');let n=this.getParsedResult(this.translations[this.currentLang],e,t);if((0,l.isObservable)(n)){if(e instanceof Array){let s={};return e.forEach((i,u)=>{s[e[u]]=e[u]}),s}return e}return n}set(e,t,n=this.currentLang){this.translations[n][e]=this.compiler.compile(t,n),this.updateLangs(),this.onTranslationChange.emit({lang:n,translations:this.translations[n]})}changeLang(e){this.currentLang=e,this.onLangChange.emit({lang:e,translations:this.translations[e]}),null==this.defaultLang&&this.changeDefaultLang(e)}changeDefaultLang(e){this.defaultLang=e,this.onDefaultLangChange.emit({lang:e,translations:this.translations[e]})}reloadLang(e){return this.resetLang(e),this.getTranslation(e)}resetLang(e){this._translationRequests[e]=void 0,this.translations[e]=void 0}getBrowserLang(){if(typeof window>"u"||typeof window.navigator>"u")return;let e=window.navigator.languages?window.navigator.languages[0]:null;return e=e||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,typeof e>"u"?void 0:(-1!==e.indexOf("-")&&(e=e.split("-")[0]),-1!==e.indexOf("_")&&(e=e.split("_")[0]),e)}getBrowserCultureLang(){if(typeof window>"u"||typeof window.navigator>"u")return;let e=window.navigator.languages?window.navigator.languages[0]:null;return e=e||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,e}static \u0275fac=function(t){return new(t||a)(r.\u0275\u0275inject(M),r.\u0275\u0275inject(p),r.\u0275\u0275inject(C),r.\u0275\u0275inject(v),r.\u0275\u0275inject(D),r.\u0275\u0275inject(w),r.\u0275\u0275inject(m),r.\u0275\u0275inject(y),r.\u0275\u0275inject(E))};static \u0275prov=r.\u0275\u0275defineInjectable({token:a,factory:a.\u0275fac})}return a})(),R=(()=>{class a{translateService;element;_ref;key;lastParams;currentParams;onLangChangeSub;onDefaultLangChangeSub;onTranslationChangeSub;set translate(e){e&&(this.key=e,this.checkNodes())}set translateParams(e){L(this.currentParams,e)||(this.currentParams=e,this.checkNodes(!0))}constructor(e,t,n){this.translateService=e,this.element=t,this._ref=n,this.onTranslationChangeSub||(this.onTranslationChangeSub=this.translateService.onTranslationChange.subscribe(s=>{s.lang===this.translateService.currentLang&&this.checkNodes(!0,s.translations)})),this.onLangChangeSub||(this.onLangChangeSub=this.translateService.onLangChange.subscribe(s=>{this.checkNodes(!0,s.translations)})),this.onDefaultLangChangeSub||(this.onDefaultLangChangeSub=this.translateService.onDefaultLangChange.subscribe(s=>{this.checkNodes(!0)}))}ngAfterViewChecked(){this.checkNodes()}checkNodes(e=!1,t){let n=this.element.nativeElement.childNodes;n.length||(this.setContent(this.element.nativeElement,this.key),n=this.element.nativeElement.childNodes);for(let s=0;s<n.length;++s){let i=n[s];if(3===i.nodeType){let u;if(e&&(i.lastKey=null),h(i.lookupKey))u=i.lookupKey;else if(this.key)u=this.key;else{let f=this.getContent(i),g=f.trim();g.length&&(i.lookupKey=g,f!==i.currentValue?(u=g,i.originalContent=f||i.originalContent):i.originalContent?u=i.originalContent.trim():f!==i.currentValue&&(u=g,i.originalContent=f||i.originalContent))}this.updateValue(u,i,t)}}}updateValue(e,t,n){if(e){if(t.lastKey===e&&this.lastParams===this.currentParams)return;this.lastParams=this.currentParams;let s=i=>{i!==e&&(t.lastKey=e),t.originalContent||(t.originalContent=this.getContent(t)),t.currentValue=h(i)?i:t.originalContent||e,this.setContent(t,this.key?t.currentValue:t.originalContent.replace(e,t.currentValue)),this._ref.markForCheck()};if(h(n)){let i=this.translateService.getParsedResult(n,e,this.currentParams);(0,l.isObservable)(i)?i.subscribe({next:s}):s(i)}else this.translateService.get(e,this.currentParams).subscribe(s)}}getContent(e){return h(e.textContent)?e.textContent:e.data}setContent(e,t){h(e.textContent)?e.textContent=t:e.data=t}ngOnDestroy(){this.onLangChangeSub&&this.onLangChangeSub.unsubscribe(),this.onDefaultLangChangeSub&&this.onDefaultLangChangeSub.unsubscribe(),this.onTranslationChangeSub&&this.onTranslationChangeSub.unsubscribe()}static \u0275fac=function(t){return new(t||a)(r.\u0275\u0275directiveInject(b),r.\u0275\u0275directiveInject(r.ElementRef),r.\u0275\u0275directiveInject(r.ChangeDetectorRef))};static \u0275dir=r.\u0275\u0275defineDirective({type:a,selectors:[["","translate",""],["","ngx-translate",""]],inputs:{translate:"translate",translateParams:"translateParams"}})}return a})(),V=(()=>{class a{translate;_ref;value="";lastKey=null;lastParams=[];onTranslationChange;onLangChange;onDefaultLangChange;constructor(e,t){this.translate=e,this._ref=t}updateValue(e,t,n){let s=i=>{this.value=void 0!==i?i:e,this.lastKey=e,this._ref.markForCheck()};if(n){let i=this.translate.getParsedResult(n,e,t);(0,l.isObservable)(i.subscribe)?i.subscribe(s):s(i)}this.translate.get(e,t).subscribe(s)}transform(e,...t){if(!e||!e.length)return e;if(L(e,this.lastKey)&&L(t,this.lastParams))return this.value;let n;if(h(t[0])&&t.length)if("string"==typeof t[0]&&t[0].length){let s=t[0].replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g,'"$2":').replace(/:(\s)?(\')(.*?)(\')/g,':"$3"');try{n=JSON.parse(s)}catch{throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${t[0]}`)}}else"object"==typeof t[0]&&!Array.isArray(t[0])&&(n=t[0]);return this.lastKey=e,this.lastParams=t,this.updateValue(e,n),this._dispose(),this.onTranslationChange||(this.onTranslationChange=this.translate.onTranslationChange.subscribe(s=>{this.lastKey&&s.lang===this.translate.currentLang&&(this.lastKey=null,this.updateValue(e,n,s.translations))})),this.onLangChange||(this.onLangChange=this.translate.onLangChange.subscribe(s=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,n,s.translations))})),this.onDefaultLangChange||(this.onDefaultLangChange=this.translate.onDefaultLangChange.subscribe(()=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,n))})),this.value}_dispose(){typeof this.onTranslationChange<"u"&&(this.onTranslationChange.unsubscribe(),this.onTranslationChange=void 0),typeof this.onLangChange<"u"&&(this.onLangChange.unsubscribe(),this.onLangChange=void 0),typeof this.onDefaultLangChange<"u"&&(this.onDefaultLangChange.unsubscribe(),this.onDefaultLangChange=void 0)}ngOnDestroy(){this._dispose()}static \u0275fac=function(t){return new(t||a)(r.\u0275\u0275directiveInject(b,16),r.\u0275\u0275directiveInject(r.ChangeDetectorRef,16))};static \u0275pipe=r.\u0275\u0275definePipe({name:"translate",type:a,pure:!1});static \u0275prov=r.\u0275\u0275defineInjectable({token:a,factory:a.\u0275fac})}return a})(),I=(()=>{class a{static forRoot(e={}){return{ngModule:a,providers:[e.loader||{provide:p,useClass:S},e.compiler||{provide:C,useClass:A},e.parser||{provide:v,useClass:P},e.missingTranslationHandler||{provide:D,useClass:j},M,{provide:m,useValue:e.isolate},{provide:w,useValue:e.useDefaultLang},{provide:y,useValue:e.extend},{provide:E,useValue:e.defaultLanguage},b]}}static forChild(e={}){return{ngModule:a,providers:[e.loader||{provide:p,useClass:S},e.compiler||{provide:C,useClass:A},e.parser||{provide:v,useClass:P},e.missingTranslationHandler||{provide:D,useClass:j},{provide:m,useValue:e.isolate},{provide:w,useValue:e.useDefaultLang},{provide:y,useValue:e.extend},{provide:E,useValue:e.defaultLanguage},b]}}static \u0275fac=function(t){return new(t||a)};static \u0275mod=r.\u0275\u0275defineNgModule({type:a});static \u0275inj=r.\u0275\u0275defineInjector({})}return a})()}}]);