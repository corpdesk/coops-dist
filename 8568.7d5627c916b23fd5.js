(self.webpackChunkcoops=self.webpackChunkcoops||[]).push([[8568,2895],{48568:(g,s,c)=>{c.r(s),c.d(s,{UiSwitchComponent:()=>a,UiSwitchModule:()=>b});var t=c(87675),r=c(30533),l=c(35228);function C(i,h){if(1&i&&(t.\u0275\u0275elementStart(0,"label",2)(1,"span",3),t.\u0275\u0275text(2),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"span",4),t.\u0275\u0275text(4),t.\u0275\u0275elementEnd()()),2&i){const e=t.\u0275\u0275nextContext();t.\u0275\u0275advance(1),t.\u0275\u0275styleProp("color",e.getColor("checkedTextColor")),t.\u0275\u0275attribute("aria-label",e.checkedLabel),t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate(e.checkedLabel),t.\u0275\u0275advance(1),t.\u0275\u0275styleProp("color",e.getColor("uncheckedTextColor")),t.\u0275\u0275attribute("aria-label",e.uncheckedLabel),t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate(e.uncheckedLabel)}}const u=["*"],n=new t.InjectionToken("UI_SWITCH_OPTIONS"),k={provide:r.NG_VALUE_ACCESSOR,useExisting:(0,t.forwardRef)(()=>a),multi:!0};let a=(()=>{class i{constructor(e={},o){this.cdr=o,this.change=new t.EventEmitter,this.changeEvent=new t.EventEmitter,this.valueChange=new t.EventEmitter,this.onTouchedCallback=d=>{},this.onChangeCallback=d=>{},this.size=e&&e.size||"medium",this.color=e&&e.color,this.switchOffColor=e&&e.switchOffColor,this.switchColor=e&&e.switchColor,this.defaultBgColor=e&&e.defaultBgColor,this.defaultBoColor=e&&e.defaultBoColor,this.checkedLabel=e&&e.checkedLabel,this.uncheckedLabel=e&&e.uncheckedLabel,this.checkedTextColor=e&&e.checkedTextColor,this.uncheckedTextColor=e&&e.uncheckedTextColor}set checked(e){this._checked=!1!==e}get checked(){return this._checked}set disabled(e){this._disabled=!1!==e}get disabled(){return this._disabled}set reverse(e){this._reverse=!1!==e}get reverse(){return this._reverse}set loading(e){this._loading=!1!==e}get loading(){return this._loading}getColor(e=""){return"borderColor"===e?this.defaultBoColor:"switchColor"===e?this.reverse?this.checked&&this.switchOffColor||this.switchColor:this.checked?this.switchColor:this.switchOffColor||this.switchColor:"checkedTextColor"===e?this.reverse?this.uncheckedTextColor:this.checkedTextColor:"uncheckedTextColor"===e?this.reverse?this.checkedTextColor:this.uncheckedTextColor:this.reverse?this.checked?this.defaultBgColor:this.color:this.checked?this.color:this.defaultBgColor}onClick(e){this.disabled||(this.checked=!this.checked,this.change.emit(this.checked),this.valueChange.emit(this.checked),this.changeEvent.emit(e),this.onChangeCallback(this.checked),this.onTouchedCallback(this.checked),this.cdr.markForCheck())}onToggle(e){this.disabled||(this.beforeChange?this._beforeChange=this.beforeChange.subscribe(o=>{o&&this.onClick(e)}):this.onClick(e))}writeValue(e){e!==this.checked&&(this.checked=!!e),this.onChangeCallback(this.checked),this.cdr&&this.cdr.markForCheck()}registerOnChange(e){this.onChangeCallback=e}registerOnTouched(e){this.onTouchedCallback=e}setDisabledState(e){this.disabled=e}ngOnDestroy(){this._beforeChange&&this._beforeChange.unsubscribe()}}return i.\u0275fac=function(e){return new(e||i)(t.\u0275\u0275directiveInject(n,8),t.\u0275\u0275directiveInject(t.ChangeDetectorRef))},i.\u0275cmp=t.\u0275\u0275defineComponent({type:i,selectors:[["ui-switch"]],hostBindings:function(e,o){1&e&&t.\u0275\u0275listener("click",function(f){return o.onToggle(f)})},inputs:{size:"size",color:"color",switchOffColor:"switchOffColor",switchColor:"switchColor",defaultBgColor:"defaultBgColor",defaultBoColor:"defaultBoColor",checkedLabel:"checkedLabel",uncheckedLabel:"uncheckedLabel",checkedTextColor:"checkedTextColor",uncheckedTextColor:"uncheckedTextColor",beforeChange:"beforeChange",checked:"checked",disabled:"disabled",reverse:"reverse",loading:"loading"},outputs:{change:"change",changeEvent:"changeEvent",valueChange:"valueChange"},features:[t.\u0275\u0275ProvidersFeature([k])],ngContentSelectors:u,decls:4,vars:20,consts:[["type","button","role","switch",1,"switch"],["class","switch-pane",4,"ngIf"],[1,"switch-pane"],[1,"switch-label-checked"],[1,"switch-label-unchecked"]],template:function(e,o){1&e&&(t.\u0275\u0275projectionDef(),t.\u0275\u0275elementStart(0,"button",0),t.\u0275\u0275template(1,C,5,8,"label",1),t.\u0275\u0275elementStart(2,"small"),t.\u0275\u0275projection(3),t.\u0275\u0275elementEnd()()),2&e&&(t.\u0275\u0275styleProp("background-color",o.getColor())("border-color",o.getColor("borderColor")),t.\u0275\u0275classProp("checked",o.checked)("disabled",o.disabled)("loading",o.loading)("switch-large","large"===o.size)("switch-medium","medium"===o.size)("switch-small","small"===o.size),t.\u0275\u0275attribute("aria-checked",o.checked),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",o.checkedLabel||o.uncheckedLabel),t.\u0275\u0275advance(1),t.\u0275\u0275styleProp("background",o.getColor("switchColor")))},dependencies:[l.NgIf],encapsulation:2}),i})(),b=(()=>{class i{static forRoot(e){return{ngModule:i,providers:[{provide:n,useValue:e||{}}]}}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=t.\u0275\u0275defineInjector({imports:[l.CommonModule,r.FormsModule,r.FormsModule]}),i})()}}]);