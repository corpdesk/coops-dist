(self.webpackChunkcoops=self.webpackChunkcoops||[]).push([[1421],{3802:(Y,y,v)=>{v.r(y),v.d(y,{ArchwizardModule:()=>X,BaseNavigationMode:()=>E,CompletedStepDirective:()=>J,ConfigurableNavigationMode:()=>h,EnableBackLinksDirective:()=>G,GoToStepDirective:()=>F,MovingDirection:()=>c,NavigationModeDirective:()=>q,NextStepDirective:()=>H,OptionalStepDirective:()=>Q,PreviousStepDirective:()=>$,ResetWizardDirective:()=>K,SelectedStepDirective:()=>U,WizardCompletionStep:()=>p,WizardCompletionStepComponent:()=>j,WizardCompletionStepDirective:()=>V,WizardComponent:()=>u,WizardNavigationBarComponent:()=>B,WizardStep:()=>s,WizardStepComponent:()=>A,WizardStepDirective:()=>Z,WizardStepSymbolDirective:()=>D,WizardStepTitleDirective:()=>C,isStepId:()=>_,isStepIndex:()=>x,isStepOffset:()=>I});var i=v(2264),l=v(9354);const g=["*"],T=(t,n,e,r,a,o)=>({current:t,editing:n,done:e,optional:r,completed:a,navigable:o}),W=t=>({"font-family":t}),z=t=>({wizardStep:t});function M(t,n){if(1&t&&i.\u0275\u0275elementContainer(0,7),2&t){const e=i.\u0275\u0275nextContext().$implicit;i.\u0275\u0275property("ngTemplateOutlet",e.stepTitleTemplate.templateRef)("ngTemplateOutletContext",i.\u0275\u0275pureFunction1(2,z,e))}}function b(t,n){if(1&t&&(i.\u0275\u0275elementContainerStart(0),i.\u0275\u0275text(1),i.\u0275\u0275elementContainerEnd()),2&t){const e=i.\u0275\u0275nextContext().$implicit;i.\u0275\u0275advance(),i.\u0275\u0275textInterpolate(e.stepTitle)}}function N(t,n){if(1&t&&i.\u0275\u0275elementContainer(0,7),2&t){const e=i.\u0275\u0275nextContext().$implicit;i.\u0275\u0275property("ngTemplateOutlet",e.stepSymbolTemplate.templateRef)("ngTemplateOutletContext",i.\u0275\u0275pureFunction1(2,z,e))}}function O(t,n){if(1&t&&(i.\u0275\u0275elementContainerStart(0),i.\u0275\u0275text(1),i.\u0275\u0275elementContainerEnd()),2&t){const e=i.\u0275\u0275nextContext().$implicit;i.\u0275\u0275advance(),i.\u0275\u0275textInterpolate(e.navigationSymbol.symbol)}}function L(t,n){if(1&t&&(i.\u0275\u0275elementStart(0,"li",1)(1,"a",2)(2,"div",3),i.\u0275\u0275template(3,M,1,4,"ng-container",4)(4,b,2,1,"ng-container",5),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementStart(5,"div",6),i.\u0275\u0275template(6,N,1,4,"ng-container",4)(7,O,2,1,"ng-container",5),i.\u0275\u0275elementEnd()()()),2&t){const e=n.$implicit,r=i.\u0275\u0275nextContext();i.\u0275\u0275property("ngClass",i.\u0275\u0275pureFunction6(8,T,r.isCurrent(e),r.isEditing(e),r.isDone(e),r.isOptional(e),r.isCompleted(e),r.isNavigable(e))),i.\u0275\u0275attribute("id",e.stepId),i.\u0275\u0275advance(),i.\u0275\u0275property("awGoToStep",e),i.\u0275\u0275advance(2),i.\u0275\u0275property("ngIf",e.stepTitleTemplate),i.\u0275\u0275advance(),i.\u0275\u0275property("ngIf",!e.stepTitleTemplate),i.\u0275\u0275advance(),i.\u0275\u0275property("ngStyle",i.\u0275\u0275pureFunction1(15,W,e.stepSymbolTemplate?"":e.navigationSymbol.fontFamily)),i.\u0275\u0275advance(),i.\u0275\u0275property("ngIf",e.stepSymbolTemplate),i.\u0275\u0275advance(),i.\u0275\u0275property("ngIf",!e.stepSymbolTemplate)}}const k=(t,n)=>({"wizard-steps":!0,vertical:t,horizontal:n}),w=(t,n,e,r,a,o,d)=>({vertical:t,horizontal:n,small:e,"large-filled":r,"large-filled-symbols":a,"large-empty":o,"large-empty-symbols":d});function R(t,n){if(1&t&&i.\u0275\u0275element(0,"aw-wizard-navigation-bar",1),2&t){const e=i.\u0275\u0275nextContext();i.\u0275\u0275property("ngClass",i.\u0275\u0275pureFunction7(1,w,"left"==e.navBarLocation,"top"==e.navBarLocation,"small"==e.navBarLayout,"large-filled"==e.navBarLayout,"large-filled-symbols"==e.navBarLayout,"large-empty"==e.navBarLayout,"large-empty-symbols"==e.navBarLayout))}}function P(t,n){if(1&t&&i.\u0275\u0275element(0,"aw-wizard-navigation-bar",1),2&t){const e=i.\u0275\u0275nextContext();i.\u0275\u0275property("ngClass",i.\u0275\u0275pureFunction7(1,w,"right"==e.navBarLocation,"bottom"==e.navBarLocation,"small"==e.navBarLayout,"large-filled"==e.navBarLayout,"large-filled-symbols"==e.navBarLayout,"large-empty"==e.navBarLayout,"large-empty-symbols"==e.navBarLayout))}}let D=(()=>{class t{constructor(e){this.templateRef=e}}return t.\u0275fac=function(e){return new(e||t)(i.\u0275\u0275directiveInject(i.TemplateRef))},t.\u0275dir=i.\u0275\u0275defineDirective({type:t,selectors:[["ng-template","awStepSymbol",""],["ng-template","awWizardStepSymbol",""]]}),t})(),C=(()=>{class t{constructor(e){this.templateRef=e}}return t.\u0275fac=function(e){return new(e||t)(i.\u0275\u0275directiveInject(i.TemplateRef))},t.\u0275dir=i.\u0275\u0275defineDirective({type:t,selectors:[["ng-template","awStepTitle",""],["ng-template","awWizardStepTitle",""]]}),t})(),s=(()=>{class t{constructor(){this.navigationSymbol={symbol:""},this.selected=!1,this.completed=!1,this.initiallyCompleted=!1,this.editing=!1,this.defaultSelected=!1,this.optional=!1,this.canEnter=!0,this.canExit=!0,this.stepEnter=new i.EventEmitter,this.stepExit=new i.EventEmitter}get hidden(){return!this.selected}static canTransitionStep(e,r){return"boolean"==typeof e?Promise.resolve(e):e instanceof Function?Promise.resolve(e(r)):Promise.reject(new Error(`Input value '${e}' is neither a boolean nor a function`))}enter(e){this.stepEnter.emit(e)}exit(e){this.stepExit.emit(e)}canEnterStep(e){return t.canTransitionStep(this.canEnter,e)}canExitStep(e){return t.canTransitionStep(this.canExit,e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=i.\u0275\u0275defineDirective({type:t,contentQueries:function(e,r,a){if(1&e&&(i.\u0275\u0275contentQuery(a,C,5),i.\u0275\u0275contentQuery(a,D,5)),2&e){let o;i.\u0275\u0275queryRefresh(o=i.\u0275\u0275loadQuery())&&(r.stepTitleTemplate=o.first),i.\u0275\u0275queryRefresh(o=i.\u0275\u0275loadQuery())&&(r.stepSymbolTemplate=o.first)}},hostVars:1,hostBindings:function(e,r){2&e&&i.\u0275\u0275hostProperty("hidden",r.hidden)},inputs:{stepId:"stepId",stepTitle:"stepTitle",navigationSymbol:"navigationSymbol",canEnter:"canEnter",canExit:"canExit"},outputs:{stepEnter:"stepEnter",stepExit:"stepExit"}}),t})(),p=(()=>{class t extends s{constructor(){super(...arguments),this.stepExit=new i.EventEmitter,this.canExit=!1}enter(e){this.completed=!0,this.stepEnter.emit(e)}exit(e){this.completed=this.initiallyCompleted,this.stepExit.emit(e)}}return t.\u0275fac=(()=>{let n;return function(r){return(n||(n=i.\u0275\u0275getInheritedFactory(t)))(r||t)}})(),t.\u0275dir=i.\u0275\u0275defineDirective({type:t,features:[i.\u0275\u0275InheritDefinitionFeature]}),t})(),j=(()=>{class t extends p{}return t.\u0275fac=(()=>{let n;return function(r){return(n||(n=i.\u0275\u0275getInheritedFactory(t)))(r||t)}})(),t.\u0275cmp=i.\u0275\u0275defineComponent({type:t,selectors:[["aw-wizard-completion-step"]],features:[i.\u0275\u0275ProvidersFeature([{provide:s,useExisting:(0,i.forwardRef)(()=>t)},{provide:p,useExisting:(0,i.forwardRef)(()=>t)}]),i.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:g,decls:1,vars:0,template:function(e,r){1&e&&(i.\u0275\u0275projectionDef(),i.\u0275\u0275projection(0))},encapsulation:2}),t})();const S=new i.InjectionToken("WIZARD_TOKEN");function _(t){return t.hasOwnProperty("stepId")&&!(t instanceof s)}function x(t){return t.hasOwnProperty("stepIndex")}function I(t){return t.hasOwnProperty("stepOffset")}let F=(()=>{class t{constructor(e,r){this.wizard=e,this.wizardStep=r,this.preFinalize=new i.EventEmitter,this.postFinalize=new i.EventEmitter}get finalize(){return this.preFinalize}set finalize(e){this.preFinalize=e}get destinationStep(){let e;if(x(this.targetStep))e=this.targetStep.stepIndex;else if(_(this.targetStep))e=this.wizard.getIndexOfStepWithId(this.targetStep.stepId);else if(I(this.targetStep)&&null!==this.wizardStep)e=this.wizard.getIndexOfStep(this.wizardStep)+this.targetStep.stepOffset;else{if(!(this.targetStep instanceof s))throw new Error("Input 'targetStep' is neither a WizardStep, StepOffset, StepIndex or StepId");e=this.wizard.getIndexOfStep(this.targetStep)}return e}onClick(){this.wizard.goToStep(this.destinationStep,this.preFinalize,this.postFinalize)}}return t.\u0275fac=function(e){return new(e||t)(i.\u0275\u0275directiveInject(S),i.\u0275\u0275directiveInject(s,8))},t.\u0275dir=i.\u0275\u0275defineDirective({type:t,selectors:[["","awGoToStep",""]],hostBindings:function(e,r){1&e&&i.\u0275\u0275listener("click",function(){return r.onClick()})},inputs:{targetStep:[0,"awGoToStep","targetStep"]},outputs:{preFinalize:"preFinalize",postFinalize:"postFinalize",finalize:"finalize"}}),t})(),B=(()=>{class t{constructor(e){this.wizard=e}get wizardSteps(){return"right-to-left"===this.wizard.navBarDirection?this.wizard.wizardSteps.slice().reverse():this.wizard.wizardSteps}get numberOfWizardSteps(){return this.wizard.wizardSteps.length}isCurrent(e){return e.selected}isEditing(e){return e.editing}isDone(e){return e.completed}isOptional(e){return e.optional}isCompleted(e){return e instanceof p&&this.wizard.completed}isNavigable(e){return!e.selected&&!this.wizard.disableNavigationBar&&this.wizard.isNavigable(this.wizard.getIndexOfStep(e))}}return t.\u0275fac=function(e){return new(e||t)(i.\u0275\u0275directiveInject(S))},t.\u0275cmp=i.\u0275\u0275defineComponent({type:t,selectors:[["aw-wizard-navigation-bar"]],decls:2,vars:4,consts:[[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[3,"awGoToStep"],[1,"label"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngIf"],[4,"ngIf"],[1,"step-indicator",3,"ngStyle"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(e,r){1&e&&(i.\u0275\u0275elementStart(0,"ul"),i.\u0275\u0275template(1,L,8,17,"li",0),i.\u0275\u0275elementEnd()),2&e&&(i.\u0275\u0275classMapInterpolate1("steps-indicator steps-",r.numberOfWizardSteps,""),i.\u0275\u0275advance(),i.\u0275\u0275property("ngForOf",r.wizardSteps))},dependencies:[l.NgClass,l.NgForOf,l.NgIf,l.NgTemplateOutlet,l.NgStyle,F],encapsulation:2}),t})(),A=(()=>{class t extends s{}return t.\u0275fac=(()=>{let n;return function(r){return(n||(n=i.\u0275\u0275getInheritedFactory(t)))(r||t)}})(),t.\u0275cmp=i.\u0275\u0275defineComponent({type:t,selectors:[["aw-wizard-step"]],features:[i.\u0275\u0275ProvidersFeature([{provide:s,useExisting:(0,i.forwardRef)(()=>t)}]),i.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:g,decls:1,vars:0,template:function(e,r){1&e&&(i.\u0275\u0275projectionDef(),i.\u0275\u0275projection(0))},encapsulation:2}),t})();var c=function(t){return t[t.Forwards=0]="Forwards",t[t.Backwards=1]="Backwards",t[t.Stay=2]="Stay",t}(c||{});class E{canGoToStep(n,e){const r=n.hasStep(e),a=n.getMovingDirection(e);return Promise.resolve(r).then(f=>f&&this.canTransitionToStep(n,e)).then(f=>f&&n.currentStep.canExitStep(a)).then(f=>f&&n.getStepAtIndex(e).canEnterStep(a))}canTransitionToStep(n,e){return this.isNavigable(n,e)}goToStep(n,e,r,a){this.canGoToStep(n,e).then(o=>{if(o){const d=n.getMovingDirection(e);r&&r.emit(),n.currentStep.completed=!0,n.currentStep.exit(d),n.currentStep.editing=!1,n.currentStep.selected=!1,this.transition(n,e);const m=n.completed||n.currentStep.completed;n.currentStep.enter(d),n.currentStep.selected=!0,m&&(n.currentStep.editing=!0),a&&a.emit()}else n.currentStep.exit(c.Stay),n.currentStep.enter(c.Stay)})}transition(n,e){n.currentStepIndex=e}reset(n){this.ensureCanReset(n),n.wizardSteps.forEach(e=>{e.completed=e.initiallyCompleted,e.selected=!1,e.editing=!1}),n.currentStepIndex=n.defaultStepIndex,n.currentStep.selected=!0,n.currentStep.enter(c.Forwards)}ensureCanReset(n){if(!n.hasStep(n.defaultStepIndex))throw new Error(`The wizard doesn't contain a step with index ${n.defaultStepIndex}`)}}class h extends E{constructor(n=null,e=null){super(),this.navigateBackward=n,this.navigateForward=e,this.navigateBackward=this.navigateBackward||"allow",this.navigateForward=this.navigateForward||"deny"}canTransitionToStep(n,e){return!!this.isNavigable(n,e)||n.wizardSteps.filter((r,a)=>a<e&&a!==n.currentStepIndex).every(r=>r.completed||r.optional)}transition(n,e){"deny"===this.navigateForward&&n.wizardSteps.filter((r,a)=>n.currentStepIndex>e&&a>e).forEach(r=>r.completed=!1),super.transition(n,e)}isNavigable(n,e){const r=n.getStepAtIndex(e);if(r instanceof p&&!n.wizardSteps.filter((o,d)=>d<e).every(o=>o.completed||o.optional||o.selected))return!1;if(e<n.currentStepIndex)switch(this.navigateBackward){case"allow":return!0;case"deny":return!1;default:throw new Error(`Invalid value for navigateBackward: ${this.navigateBackward}`)}else{if(!(e>n.currentStepIndex))return!1;switch(this.navigateForward){case"allow":return!0;case"deny":return!1;case"visited":return r.completed;default:throw new Error(`Invalid value for navigateForward: ${this.navigateForward}`)}}}ensureCanReset(n){if(super.ensureCanReset(n),n.getStepAtIndex(n.defaultStepIndex)instanceof p&&1!==n.wizardSteps.length)throw new Error(`The default step index ${n.defaultStepIndex} references a completion step`)}}let u=(()=>{class t{get defaultStepIndex(){const e=this.wizardSteps.find(r=>r.defaultSelected);return e?this.getIndexOfStep(e):this._defaultStepIndex}set defaultStepIndex(e){this._defaultStepIndex=e}constructor(){this.navBarLocation="top",this.navBarLayout="small",this.navBarDirection="left-to-right",this._defaultStepIndex=0,this.disableNavigationBar=!1,this._navigation=new h,this._wizardSteps=[],this.currentStepIndex=-1}get horizontalOrientation(){return"top"===this.navBarLocation||"bottom"===this.navBarLocation}get verticalOrientation(){return"left"===this.navBarLocation||"right"===this.navBarLocation}ngAfterContentInit(){this.wizardStepsQueryList.changes.subscribe(e=>{this.updateWizardSteps(e.toArray())}),this.updateWizardSteps(this.wizardStepsQueryList.toArray()),setTimeout(()=>this.reset())}get currentStep(){return this.hasStep(this.currentStepIndex)?this.wizardSteps[this.currentStepIndex]:null}get completed(){return this.wizardSteps.every(e=>e.completed||e.optional)}get wizardSteps(){return this._wizardSteps}updateWizardSteps(e){this.wizardSteps.length>0&&this.currentStepIndex>-1&&(this.currentStepIndex=e.indexOf(this.wizardSteps[this.currentStepIndex])),this._wizardSteps=e}get navigation(){return this._navigation}set navigation(e){this._navigation=e}hasStep(e){return this.wizardSteps.length>0&&0<=e&&e<this.wizardSteps.length}hasPreviousStep(){return this.hasStep(this.currentStepIndex-1)}hasNextStep(){return this.hasStep(this.currentStepIndex+1)}isLastStep(){return this.wizardSteps.length>0&&this.currentStepIndex===this.wizardSteps.length-1}getStepAtIndex(e){if(!this.hasStep(e))throw new Error(`Expected a known step, but got stepIndex: ${e}.`);return this.wizardSteps[e]}getIndexOfStepWithId(e){return this.wizardSteps.findIndex(r=>r.stepId===e)}getIndexOfStep(e){return this.wizardSteps.indexOf(e)}getMovingDirection(e){let r;return r=e>this.currentStepIndex?c.Forwards:e<this.currentStepIndex?c.Backwards:c.Stay,r}canGoToStep(e){return this.navigation.canGoToStep(this,e)}goToStep(e,r,a){return this.navigation.goToStep(this,e,r,a)}goToPreviousStep(e,r){return this.navigation.goToStep(this,this.currentStepIndex-1,e,r)}goToNextStep(e,r){return this.navigation.goToStep(this,this.currentStepIndex+1,e,r)}isNavigable(e){return this.navigation.isNavigable(this,e)}reset(){this.navigation.reset(this)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.\u0275\u0275defineComponent({type:t,selectors:[["aw-wizard"]],contentQueries:function(e,r,a){if(1&e&&i.\u0275\u0275contentQuery(a,s,5),2&e){let o;i.\u0275\u0275queryRefresh(o=i.\u0275\u0275loadQuery())&&(r.wizardStepsQueryList=o)}},hostVars:4,hostBindings:function(e,r){2&e&&i.\u0275\u0275classProp("horizontal",r.horizontalOrientation)("vertical",r.verticalOrientation)},inputs:{navBarLocation:"navBarLocation",navBarLayout:"navBarLayout",navBarDirection:"navBarDirection",defaultStepIndex:"defaultStepIndex",disableNavigationBar:"disableNavigationBar"},features:[i.\u0275\u0275ProvidersFeature([{provide:S,useExisting:t}])],ngContentSelectors:g,decls:4,vars:6,consts:[[3,"ngClass",4,"ngIf"],[3,"ngClass"]],template:function(e,r){1&e&&(i.\u0275\u0275projectionDef(),i.\u0275\u0275template(0,R,1,9,"aw-wizard-navigation-bar",0),i.\u0275\u0275elementStart(1,"div",1),i.\u0275\u0275projection(2),i.\u0275\u0275elementEnd(),i.\u0275\u0275template(3,P,1,9,"aw-wizard-navigation-bar",0)),2&e&&(i.\u0275\u0275property("ngIf","top"==r.navBarLocation||"left"==r.navBarLocation),i.\u0275\u0275advance(),i.\u0275\u0275property("ngClass",i.\u0275\u0275pureFunction2(3,k,"left"==r.navBarLocation||"right"==r.navBarLocation,"top"==r.navBarLocation||"bottom"==r.navBarLocation)),i.\u0275\u0275advance(2),i.\u0275\u0275property("ngIf","bottom"==r.navBarLocation||"right"==r.navBarLocation))},dependencies:[l.NgClass,l.NgIf,B],encapsulation:2}),t})(),G=(()=>{class t{constructor(e){this.completionStep=e,this.stepExit=new i.EventEmitter}ngOnInit(){this.completionStep.canExit=!0,this.completionStep.stepExit=this.stepExit}}return t.\u0275fac=function(e){return new(e||t)(i.\u0275\u0275directiveInject(p,1))},t.\u0275dir=i.\u0275\u0275defineDirective({type:t,selectors:[["","awEnableBackLinks",""]],outputs:{stepExit:"stepExit"}}),t})(),H=(()=>{class t{constructor(e){this.wizard=e,this.preFinalize=new i.EventEmitter,this.postFinalize=new i.EventEmitter}get finalize(){return this.preFinalize}set finalize(e){this.preFinalize=e}onClick(){this.wizard.goToNextStep(this.preFinalize,this.postFinalize)}}return t.\u0275fac=function(e){return new(e||t)(i.\u0275\u0275directiveInject(u))},t.\u0275dir=i.\u0275\u0275defineDirective({type:t,selectors:[["","awNextStep",""]],hostBindings:function(e,r){1&e&&i.\u0275\u0275listener("click",function(){return r.onClick()})},outputs:{preFinalize:"preFinalize",postFinalize:"postFinalize",finalize:"finalize"}}),t})(),Q=(()=>{class t{constructor(e){this.wizardStep=e,this.optional=!0}ngOnInit(){this.wizardStep.optional=this.optional||""===this.optional}}return t.\u0275fac=function(e){return new(e||t)(i.\u0275\u0275directiveInject(s,1))},t.\u0275dir=i.\u0275\u0275defineDirective({type:t,selectors:[["","awOptionalStep",""]],inputs:{optional:[0,"awOptionalStep","optional"]}}),t})(),$=(()=>{class t{constructor(e){this.wizard=e,this.preFinalize=new i.EventEmitter,this.postFinalize=new i.EventEmitter}get finalize(){return this.preFinalize}set finalize(e){this.preFinalize=e}onClick(){this.wizard.goToPreviousStep(this.preFinalize,this.postFinalize)}}return t.\u0275fac=function(e){return new(e||t)(i.\u0275\u0275directiveInject(u))},t.\u0275dir=i.\u0275\u0275defineDirective({type:t,selectors:[["","awPreviousStep",""]],hostBindings:function(e,r){1&e&&i.\u0275\u0275listener("click",function(){return r.onClick()})},outputs:{preFinalize:"preFinalize",postFinalize:"postFinalize",finalize:"finalize"}}),t})(),K=(()=>{class t{constructor(e){this.wizard=e,this.finalize=new i.EventEmitter}onClick(){this.finalize.emit(),this.wizard.reset()}}return t.\u0275fac=function(e){return new(e||t)(i.\u0275\u0275directiveInject(u))},t.\u0275dir=i.\u0275\u0275defineDirective({type:t,selectors:[["","awResetWizard",""]],hostBindings:function(e,r){1&e&&i.\u0275\u0275listener("click",function(){return r.onClick()})},outputs:{finalize:"finalize"}}),t})(),U=(()=>{class t{constructor(e){this.wizardStep=e}ngOnInit(){this.wizardStep.defaultSelected=!0}}return t.\u0275fac=function(e){return new(e||t)(i.\u0275\u0275directiveInject(s,1))},t.\u0275dir=i.\u0275\u0275defineDirective({type:t,selectors:[["","awSelectedStep",""]]}),t})(),V=(()=>{class t extends p{}return t.\u0275fac=(()=>{let n;return function(r){return(n||(n=i.\u0275\u0275getInheritedFactory(t)))(r||t)}})(),t.\u0275dir=i.\u0275\u0275defineDirective({type:t,selectors:[["","awWizardCompletionStep",""]],features:[i.\u0275\u0275ProvidersFeature([{provide:s,useExisting:(0,i.forwardRef)(()=>t)},{provide:p,useExisting:(0,i.forwardRef)(()=>t)}]),i.\u0275\u0275InheritDefinitionFeature]}),t})(),Z=(()=>{class t extends s{}return t.\u0275fac=(()=>{let n;return function(r){return(n||(n=i.\u0275\u0275getInheritedFactory(t)))(r||t)}})(),t.\u0275dir=i.\u0275\u0275defineDirective({type:t,selectors:[["","awWizardStep",""]],features:[i.\u0275\u0275ProvidersFeature([{provide:s,useExisting:(0,i.forwardRef)(()=>t)}]),i.\u0275\u0275InheritDefinitionFeature]}),t})(),q=(()=>{class t{constructor(e){this.wizard=e}ngOnChanges(e){this.wizard.navigation=this.getNavigationMode()}getNavigationMode(){return this.awNavigationMode?this.awNavigationMode:new h(this.navigateBackward,this.navigateForward)}}return t.\u0275fac=function(e){return new(e||t)(i.\u0275\u0275directiveInject(u))},t.\u0275dir=i.\u0275\u0275defineDirective({type:t,selectors:[["","awNavigationMode",""]],inputs:{awNavigationMode:"awNavigationMode",navigateBackward:"navigateBackward",navigateForward:"navigateForward"},features:[i.\u0275\u0275NgOnChangesFeature]}),t})(),J=(()=>{class t{constructor(e){this.wizardStep=e,this.initiallyCompleted=!0}ngOnInit(){this.wizardStep.initiallyCompleted=this.initiallyCompleted||""===this.initiallyCompleted}}return t.\u0275fac=function(e){return new(e||t)(i.\u0275\u0275directiveInject(s,1))},t.\u0275dir=i.\u0275\u0275defineDirective({type:t,selectors:[["","awCompletedStep",""]],inputs:{initiallyCompleted:[0,"awCompletedStep","initiallyCompleted"]}}),t})(),X=(()=>{class t{static forRoot(){return{ngModule:t,providers:[]}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=i.\u0275\u0275defineInjector({imports:[l.CommonModule]}),t})()}}]);