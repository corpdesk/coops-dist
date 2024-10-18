(self.webpackChunkcoops=self.webpackChunkcoops||[]).push([[2276],{68856:(j,T,a)=>{a.d(T,{AO:()=>F,F5:()=>h,Lg:()=>t,NX:()=>d,ZR:()=>i,lc:()=>b,mA:()=>m,s9:()=>s,v$:()=>n});var r=a(30533),e=a(47512),p=a(33635);const v=new e.FormsService,h=[{title:"ID",name:"cdObjId",dbName:"cd_obj_id",type:e.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"alphanum"},{title:"Guid",name:"cdObjGuid",dbName:"cd_obj_guid",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"alphanum",disabled:!0},{title:"Name",name:"cdObjName",dbName:"cd_obj_name",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm},{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[r.Validators.minLength(3),r.Validators.maxLength(20),r.Validators.required]]},{title:"CdObjType",name:"cdObjTypeGuid",dbName:"cd_obj_type_guid",type:e.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.searchDropDown,fieldFor:e.FieldFor.createForm}],ddlInfo:{selData$:(0,p.of)([]),selValueField:"cdObjName",selIndex:"cdObjTypeGuid",selPlaceholder:"...Choose",data:null},formatt:"number",disabled:!0,savable:!0,formControlsConfig:["",[r.Validators.minLength(3),r.Validators.maxLength(42),r.Validators.required]]},{title:"ParentModule",name:"parentModuleGuid",dbName:"parent_module_guid",type:e.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.searchDropDown,fieldFor:e.FieldFor.createForm}],ddlInfo:{selData$:(0,p.of)([]),selValueField:"menuName",selIndex:"menuGuid",selPlaceholder:"...Choose",data:null},formatt:"number",disabled:!0,savable:!0,formControlsConfig:["",[r.Validators.minLength(3),r.Validators.maxLength(42),r.Validators.required]]},{title:"AliasName",name:"cdObjDispName",dbName:"cd_obj_disp_name",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm},{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[r.Validators.minLength(3),r.Validators.maxLength(14),r.Validators.required]]},{title:"Icon",name:"icon",dbName:"icon",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.ddlIcons,fieldFor:e.FieldFor.createForm}],ddlInfo:{selData$:(0,p.of)([]),selValueField:"iconName",selIndex:"iconId",selPlaceholder:"...choose",ddlIconId:"iconDdlIdX",searchInputId:"searchInputIdX",searchInputName:"searchInputNameX",selectedValue:"",data:null},formatt:"text",savable:!0,formControlsConfig:["",[r.Validators.minLength(2),r.Validators.maxLength(20),r.Validators.required]]},{title:"Show Icon",name:"showIcon",dbName:"show_icon",type:e.FieldType.boolean,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.status,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0},{title:"Enabled",name:"cdObjEnabled",dbName:"cd_obj_enabled",type:e.FieldType.boolean,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.status,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0},{title:"Action",name:"action",type:e.FieldType.action,fetchable:!1,show:!0,controls:[{controlType:e.ControlType.action,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.action,fieldFor:e.FieldFor.createForm}],Fn:"createCdObj"},{title:"Search",name:"iconSearch",type:e.FieldType.any,controls:[],formControlsConfig:["",[]]}],i={data:{},valid:null,ctx:"Sys"},n={token:"",stepTitle:"Create CdObj",stepItems:{nextButtonId:"stepToMenu"},tabPaneId:"cdObjInfo",cardTitle:"CdObj Information",cardTitleDesc:"Fill all information below",module:"Moduleman",controller:"CdObj",formGroup:null,fields:v.filterByFieldFor(h,e.FieldFor.createForm)},d={name:"CdObj Wizard",steps:[n]},s={select:["cdObjId","cdObjName","cdObjGuid"],where:{}},t={getFn$:null,selIndex:s.select[0],selValueField:s.select[1],fetchFields:s.select,step:null,token:null,controlName:"cdObjId"},m={select:["cdObjTypeId","cdObjTypeName","cdObjTypeGuid"],where:{}},b={getFn$:null,selIndex:m.select[2],selValueField:m.select[1],fetchFields:m.select,step:null,token:null,controlName:"cdObjTypeGuid"},F=[{menuName:"create",menuGuid:"bd9b5bda5ab",navLocation:"/moduleman/cd-obj/create",actionType:e.ActionType.navigate},{menuName:"dashboard",menuGuid:"d27294db59c1",navLocation:"/moduleman/cd-obj/dashboard",actionType:e.ActionType.navigate}]},62276:(j,T,a)=>{a.r(T),a.d(T,{CdObjModule:()=>N});var r=a(35228),I=a(30533),e=a(83781),C=a(76380),p=a(92618),M=a(59707),v=a(15006),h=a(7444),i=a(47512),n=a(61052),d=a(37011),s=a(68856),t=a(87675);class m{constructor(o,l,c,u,y,_,P){this.aRoute=o,this.router=l,this.svBase=c,this.svNazTable=u,this.svAcl=y,this.svPage=_,this.svSess=P,this.dSource={fields:[],data:[]},this.cardTitle="CdObj",this.cardBodyId="cdObj",this.searchInputId="inputSearchCdObj",this.editRoute="/moduleman/cd-obj/edit",this.deleteRoute="/moduleman/cd-obj/delete",this.createRoute="/moduleman/cd-obj/create",this.filter={},this.tpData=i.DEFAULT_TPD,this.ddlData=s.AO,this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(o=>{o&&this.svAcl.initComponent(o,this,this.svSess).then(l=>{})})}init(){this.baseModel=new i.BaseModel(s.v$.module,s.v$.controller),this.svBase.module=s.v$.module,this.svBase.controller=s.v$.controller,this.baseModel.data.fields=s.F5.filter(o=>o.fetchable||o.type===i.FieldType.action),this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(s.v$.controller,"List"),this.sQuery=this.svNazTable.initSQuery(this),this.dsEmittData=this.svNazTable.initEmittData(this)}execQuery(o){this.svNazTable.execQuery(o,this.svBase.getPaged$(this.sQuery,this.baseModel.sess.cd_token),this)}setSearchQuery(o){this.sQuery=o.sQuery,this.execQuery(o)}getSelect(){return this.baseModel.data.fields.filter(o=>o.fetchable).map(o=>o.name)}}m.\u0275fac=function(o){return new(o||m)(t.\u0275\u0275directiveInject(d.ActivatedRoute),t.\u0275\u0275directiveInject(d.Router),t.\u0275\u0275directiveInject(i.BaseService),t.\u0275\u0275directiveInject(n.NazTableService),t.\u0275\u0275directiveInject(i.AclService),t.\u0275\u0275directiveInject(n.PageService),t.\u0275\u0275directiveInject(i.SessService))},m.\u0275cmp=t.\u0275\u0275defineComponent({type:m,selectors:[["app-list"]],viewQuery:function(o,l){if(1&o&&t.\u0275\u0275viewQuery(n.NazTableComponent,5),2&o){let c;t.\u0275\u0275queryRefresh(c=t.\u0275\u0275loadQuery())&&(l.nazTable=c.first)}},decls:1,vars:9,consts:[[3,"baseModel","cardTitle","cardBodyId","searchInputId","tpData","filter","ddlData","editRoute","deleteRoute","searchQuery"]],template:function(o,l){1&o&&(t.\u0275\u0275elementStart(0,"naz-table",0),t.\u0275\u0275listener("searchQuery",function(u){return l.setSearchQuery(u)}),t.\u0275\u0275elementEnd()),2&o&&t.\u0275\u0275property("baseModel",l.baseModel)("cardTitle",l.cardTitle)("cardBodyId",l.cardBodyId)("searchInputId",l.searchInputId)("tpData",l.tpData)("filter",l.filter)("ddlData",l.ddlData)("editRoute",l.editRoute)("deleteRoute",l.deleteRoute)},dependencies:[n.NazTableComponent]});var b=a(15861);class F{constructor(o,l,c,u,y,_){this.aRoute=o,this.svBase=l,this.svPage=c,this.svSess=u,this.svAcl=y,this.svNotif=_,this.formConfig={},this.backRoute="/moduleman/cd-obj/list",this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(o=>{this.svAcl.initComponent(o,this,this.svSess).then(l=>{})})}init(){this.baseModel=new i.BaseModel(s.v$.module,s.v$.controller),this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(s.v$.controller,"Edit"),this.baseModel.data.subTitle="only allowed fields are editable"}update(o){var l=this;return(0,b.Z)(function*(){l.svBase.update$(o,l.baseModel.token).subscribe(c=>{l.svNotif.emitNotif({pushRecepients:i.DEFAULT_PUSH_RECEPIENTS,pushData:c,emittEvent:"push-notif",triggerEvent:"send-notif",req:null,resp:c})})})()}}F.\u0275fac=function(o){return new(o||F)(t.\u0275\u0275directiveInject(d.ActivatedRoute),t.\u0275\u0275directiveInject(i.BaseService),t.\u0275\u0275directiveInject(n.PageService),t.\u0275\u0275directiveInject(i.SessService),t.\u0275\u0275directiveInject(i.AclService),t.\u0275\u0275directiveInject(i.NotificationService))},F.\u0275cmp=t.\u0275\u0275defineComponent({type:F,selectors:[["app-edit"]],decls:1,vars:3,consts:[[3,"baseModel","pageDescription","formConfig","backRoute","updateQuery"]],template:function(o,l){1&o&&(t.\u0275\u0275elementStart(0,"naz-table-edit",0),t.\u0275\u0275listener("updateQuery",function(u){return l.update(u)}),t.\u0275\u0275elementEnd()),2&o&&t.\u0275\u0275property("baseModel",l.baseModel)("formConfig",l.formConfig)("backRoute",l.backRoute)},dependencies:[n.EditComponent]});class O{constructor(o,l,c,u,y,_,P){this.aRoute=o,this.router=l,this.svBase=c,this.svPage=u,this.svAcl=y,this.svNotif=_,this.svSess=P,this.formConfig={},this.backRoute="/moduleman/cd-obj/list",this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(o=>{this.svAcl.initComponent(o,this,this.svSess).then(l=>{})})}init(){this.baseModel=new i.BaseModel(s.v$.module,s.v$.controller),this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(s.v$.controller,"Delete"),this.baseModel.data.subTitle="confirm before delete"}deleteItem(o){var l=this;return(0,b.Z)(function*(){l.svBase.delete$(o,l.baseModel.token).subscribe(c=>{l.svNotif.emitNotif({pushRecepients:i.DEFAULT_PUSH_RECEPIENTS,pushData:c,emittEvent:"push-notif",triggerEvent:"send-notif",req:null,resp:c})})})()}}O.\u0275fac=function(o){return new(o||O)(t.\u0275\u0275directiveInject(d.ActivatedRoute),t.\u0275\u0275directiveInject(d.Router),t.\u0275\u0275directiveInject(i.BaseService),t.\u0275\u0275directiveInject(n.PageService),t.\u0275\u0275directiveInject(i.AclService),t.\u0275\u0275directiveInject(i.NotificationService),t.\u0275\u0275directiveInject(i.SessService))},O.\u0275cmp=t.\u0275\u0275defineComponent({type:O,selectors:[["app-delete"]],decls:1,vars:3,consts:[[3,"baseModel","pageDescription","formConfig","backRoute","deleteQuery"]],template:function(o,l){1&o&&(t.\u0275\u0275elementStart(0,"naz-table-delete",0),t.\u0275\u0275listener("deleteQuery",function(u){return l.deleteItem(u)}),t.\u0275\u0275elementEnd()),2&o&&t.\u0275\u0275property("baseModel",l.baseModel)("formConfig",l.formConfig)("backRoute",l.backRoute)},dependencies:[n.DeleteComponent]});var g=a(39664),L=a(98812);class D{constructor(o,l,c){this.svCdObj=o,this.svModule=l,this.svModman=c}loadDdls(o,l){var c=this;return(0,b.Z)(function*(){g.tL.token=o.token,g.tL.step=l,g.tL.controlName="parentModuleGuid",g.tL.getFn$=c.svModule.getModule$(g.qh,o.token),yield c.svModman.setDdl$(yield g.tL).subscribe(u=>{console.log("menu/CdObjModService::loadDdls()/ret(modules):",JSON.stringify(u)),l.fields.forEach(y=>{console.log("CdObjFrontService::loadDdls()/f(modules):",JSON.stringify(y)),"parentModuleGuid"===y.name&&(y.ddlInfo.data=u)})}),s.lc.token=o.token,s.lc.step=l,s.lc.controlName="cdObjTypeGuid",s.lc.getFn$=c.svCdObj.getCdObjType$(s.mA,o.token),yield c.svModman.setDdl$(yield s.lc).subscribe(u=>{console.log("menu/CdObjModService::loadDdls()/ret(cdObjTypes):",u),l.fields.forEach(y=>{console.log("CdObjFrontService::loadDdls()/f(cdObjTypes):",JSON.stringify(y)),"cdObjTypeGuid"===y.name&&(y.ddlInfo.data=u)})})})()}}D.\u0275fac=function(o){return new(o||D)(t.\u0275\u0275inject(i.CdObjService),t.\u0275\u0275inject(i.ModuleService),t.\u0275\u0275inject(L.v))},D.\u0275prov=t.\u0275\u0275defineInjectable({token:D,factory:D.\u0275fac,providedIn:"root"});class S{constructor(o,l,c,u,y,_,P,x,B,w,V,$,U){this.aRoute=o,this.router=l,this.svCdObjFront=c,this.svAcl=u,this.svForm=y,this.svNotif=_,this.fb=P,this.svForms=x,this.svModman=B,this.svPage=w,this.svPush=V,this.svBase=$,this.svSess=U,this.newCdObj=s.ZR,this.wizardModel=s.NX,this.newModule=g.Rf,this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(o=>{this.svAcl.initComponent(o,this,this.svSess).then(l=>{l&&(this.svPush.init(this),this.baseModel.data.step.token=this.baseModel.token)})})}ngAfterViewInit(){this.svCdObjFront.loadDdls(this.baseModel,this.baseModel.data.step).then(o=>{console.log("cdObj/CreateComponent::ngAfterViewInit()/this.baseModel.data.step:",this.baseModel.data.step)}),this.svModman.setIconsData$(this.baseModel.data.step,"icon")}init(){this.baseModel=new i.BaseModel(s.v$.module,s.v$.controller),this.baseModel.data.fields=this.svForms.filterByFieldFor(s.F5,i.FieldFor.createForm),this.baseModel.data.wizardModel=s.NX,this.baseModel.data.step=this.svForm.filterStepsByController(this.baseModel.data.wizardModel,s.v$.controller)[0],this.baseModel.data.form=this.fb.group(this.svForm.getFormControlConfig(s.F5)),this.baseModel.data.step.formGroup=this.baseModel.data.form,this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(s.v$.controller,"Create")}setSelectedIcon(o){this.svForm.setSelectedIcon(o,this.baseModel,this.baseModel.data.step)}save(o){let l;switch(o.controller){case"module":case"menu":break;case"cdObj":l=this.svBase.create$(this.newCdObj,this.baseModel.token),this.svForm.saveForm(o,this.newCdObj,l,this.svPush.pushEnvelop,this.svNotif)}}finishFunction(){console.log("finishing!!")}}S.\u0275fac=function(o){return new(o||S)(t.\u0275\u0275directiveInject(d.ActivatedRoute),t.\u0275\u0275directiveInject(d.Router),t.\u0275\u0275directiveInject(D),t.\u0275\u0275directiveInject(i.AclService),t.\u0275\u0275directiveInject(i.FormsService),t.\u0275\u0275directiveInject(i.NotificationService),t.\u0275\u0275directiveInject(I.FormBuilder),t.\u0275\u0275directiveInject(i.FormsService),t.\u0275\u0275directiveInject(L.v),t.\u0275\u0275directiveInject(n.PageService),t.\u0275\u0275directiveInject(i.CdPushService),t.\u0275\u0275directiveInject(i.BaseService),t.\u0275\u0275directiveInject(i.SessService))},S.\u0275cmp=t.\u0275\u0275defineComponent({type:S,selectors:[["app-create"]],decls:1,vars:2,consts:[[3,"baseModel","wizardModel","saveEmitter","relaySelIconEmitter"]],template:function(o,l){1&o&&(t.\u0275\u0275elementStart(0,"naz-table-create",0),t.\u0275\u0275listener("saveEmitter",function(u){return l.save(u)})("relaySelIconEmitter",function(u){return l.setSelectedIcon(u)}),t.\u0275\u0275elementEnd()),2&o&&t.\u0275\u0275property("baseModel",l.baseModel)("wizardModel",l.wizardModel)},dependencies:[n.CreateComponent]});var A=a(34872);const R=[{path:"list",component:m},{path:"edit",component:F},{path:"delete",component:O},{path:"create",component:S},{path:"dashboard",component:A.M}];class E{}E.\u0275fac=function(o){return new(o||E)},E.\u0275mod=t.\u0275\u0275defineNgModule({type:E}),E.\u0275inj=t.\u0275\u0275defineInjector({imports:[d.RouterModule.forChild(R),d.RouterModule]});class N{}N.\u0275fac=function(o){return new(o||N)},N.\u0275mod=t.\u0275\u0275defineNgModule({type:N}),N.\u0275inj=t.\u0275\u0275defineInjector({imports:[r.CommonModule,I.FormsModule,I.ReactiveFormsModule,C.NgbNavModule,C.NgbDropdownModule,C.NgbTooltipModule,C.NgbAccordionModule,n.NazUiModule,n.NazTableModule,n.NazCreateModule,n.NazEditModule,n.NazDeleteModule,p.Ng2SearchPipeModule,M.ArchwizardModule,v.NgToggleModule,E,e.NgSelectModule,i.BaseModule.forChild(h.N),i.CdPushModule.forChild(h.N)]})},8465:(j,T,a)=>{a.d(T,{AO:()=>b,Cq:()=>s,NG:()=>i,hA:()=>h,i0:()=>t,kx:()=>n,ni:()=>m,pt:()=>d});var r=a(30533),e=a(47512),p=a(33635);const v=new e.FormsService,h=[{title:"ID",name:"menuId",dbName:"menu_id",type:e.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"number",disabled:!0,formControlsConfig:["",[]]},{title:"Guid",name:"menuGuid",dbName:"menu_guid",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"alphanum",disabled:!0},{title:"Label",name:"menuLabel",dbName:"menu_label",type:e.FieldType.string,fetchable:!0,updateable:!1,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0},{title:"Name",name:"menuName",dbName:"menu_name",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[r.Validators.minLength(3),r.Validators.maxLength(25),r.Validators.required]]},{title:"MenuParent",name:"menuParentId",dbName:"menu_parent_id",type:e.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.searchDropDown,fieldFor:e.FieldFor.createForm}],ddlInfo:{selData$:(0,p.of)([]),selValueField:"menuName",selIndex:"menuId",selPlaceholder:"...Choose",data:null},formatt:"number",disabled:!0,savable:!0,formControlsConfig:["",[r.Validators.required]]},{title:"ModuleParent",name:"moduleId",dbName:"module_id",primaryField:"menuParent",type:e.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.searchDropDown,fieldFor:e.FieldFor.createForm}],ddlInfo:{selData$:(0,p.of)([]),selValueField:"moduleName",selIndex:"moduleId",selPlaceholder:"...Choose",data:null},formatt:"number",disabled:!0,savable:!0,formControlsConfig:["",[r.Validators.required]]},{title:"Description",name:"menuDescription",dbName:"menu_description",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.textArea,fieldFor:e.FieldFor.createForm}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[r.Validators.minLength(0),r.Validators.maxLength(300)]]},{title:"Icon",name:"menuIcon",dbName:"menu_icon",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.ddlIcons,fieldFor:e.FieldFor.createForm}],ddlInfo:{selData$:(0,p.of)([]),selValueField:"iconName",selIndex:"iconId",selPlaceholder:"...choose",ddlIconId:"iconDdlIdX",searchInputId:"searchInputIdX",searchInputName:"searchInputNameX",selectedValue:"",data:null},formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[r.Validators.minLength(2),r.Validators.maxLength(50),r.Validators.required]]},{title:"Path",name:"path",dbName:"path",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm}],formatt:"text",formControlsConfig:["",[r.Validators.minLength(3),r.Validators.maxLength(100),r.Validators.required]]},{title:"Action",name:"action",type:e.FieldType.action,fetchable:!1,show:!0,controls:[{controlType:e.ControlType.action,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.action,fieldFor:e.FieldFor.createForm}],Fn:"createMenu"},{title:"Search",name:"iconSearch",type:e.FieldType.any,controls:[],formControlsConfig:["",[]]}],i={data:{},cdObj:null,valid:null,ctx:"Sys"},n=[{toReplace:"menuLabel",replaceWith:"menuName"}],d={token:"",stepTitle:"Create Menu",stepItems:{prevButtonId:"stepToModule",lastButtonId:"endSteps"},tabPaneId:"menuInfo",cardTitle:"Menu Information",cardTitleDesc:"Every module has to have at least one menu item. You can use the + button to add more items.",module:"moduleman",controller:"menu",formGroup:null,fields:v.filterByFieldFor(h,e.FieldFor.createForm)},s={name:"Menu Wizard",steps:[d]},t={select:["menuId","menuName","menuGuid"],where:{}},m={getFn$:null,selIndex:t.select[0],selValueField:t.select[1],fetchFields:t.select,step:null,token:null,controlName:"menuParentId"},b=[{menuName:"create",menuGuid:"bd9b5bda6ab",navLocation:"/moduleman/menu/create",actionType:e.ActionType.navigate},{menuName:"dashboard",menuGuid:"d27294db69c1",navLocation:"/moduleman/menu/dashboard",actionType:e.ActionType.navigate}]},39664:(j,T,a)=>{a.d(T,{AO:()=>t,GZ:()=>s,Qx:()=>v,Rf:()=>i,c_:()=>d,qh:()=>m,tL:()=>b,vk:()=>h});var r=a(30533),e=a(47512),p=a(8465);const M=new e.FormsService,v=[{title:"ID",name:"moduleId",dbName:"module_id",type:e.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"number",disabled:!0},{title:"Guid",name:"moduleGuid",dbName:"module_guid",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"alphanum",disabled:!0},{title:"Name",name:"moduleName",dbName:"module_name",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[r.Validators.minLength(4),r.Validators.maxLength(20),r.Validators.required]]},{title:"Description",name:"moduleDescription",dbName:"module_description",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.textArea,fieldFor:e.FieldFor.createForm}],formatt:"textArea",savable:!0,formControlsConfig:["",[r.Validators.minLength(0),r.Validators.maxLength(300)]]},{title:"Enabled",name:"moduleEnabled",dbName:"module_enabled",type:e.FieldType.boolean,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.status,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0},{title:"Sys",name:"isSysModule",dbName:"is_sys_module",type:e.FieldType.boolean,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.status,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[r.Validators.required]]},{title:"System Module",name:"isSys",controls:[{controlType:e.ControlType.toggleSwitch,fieldFor:e.FieldFor.createForm}],primaryField:"isSysModule",formControlsConfig:["",[]]},{title:"App Module",name:"isApp",controls:[{controlType:e.ControlType.toggleSwitch,fieldFor:e.FieldFor.createForm}],primaryField:"isSysModule",formControlsConfig:["",[]]},{title:"Action",name:"action",type:e.FieldType.action,fetchable:!1,show:!0,controls:[{controlType:e.ControlType.action,fieldFor:e.FieldFor.createForm},{controlType:e.ControlType.action,fieldFor:e.FieldFor.tableDisplay}]}],h={controllerName:"isSysModule",selectedItem:{index:0,optControlId:"",value:"",selected:!1},controlTypes:e.ControlType.toggleSwitch,options:[{index:0,optControlId:"isSys",value:"isSys",selected:!0},{index:1,optControlId:"isApp",value:"isApp",selected:!1}]},i={valid:null,data:{},ctx:"Sys"},d={token:"",stepTitle:"Create Module",stepItems:{nextButtonId:"stepToMenu"},tabPaneId:"moduleInfo",cardTitle:"Module Information",cardTitleDesc:"Fill all information below",module:"moduleman",controller:"module",formGroup:null,fields:M.filterByFieldFor(v,e.FieldFor.createForm)},s={name:"Module Wizard",steps:[d,p.pt]},t=[{menuName:"create",menuGuid:"bd9b5bda5ab",navLocation:"/moduleman/module/create",actionType:e.ActionType.navigate},{menuName:"dashboard",menuGuid:"d27294db59c1",navLocation:"/moduleman/module/dashboard",actionType:e.ActionType.navigate}],m={select:["moduleId","moduleName","moduleGuid"],where:{}},b={getFn$:null,selIndex:m.select[0],selValueField:m.select[1],fetchFields:m.select,step:null,token:null,controlName:"moduleId"}},98812:(j,T,a)=>{a.d(T,{v:()=>h});var r=a(33635),e=a(87675),p=a(47512);class h{constructor(n,d,s){this.svMenu=n,this.svNotif=d,this.svForm=s,this.ddlData={config:{suppressScrollX:!0,wheelSpeed:.3},header:{title:{lable:"Notifications",cls:"",action:null},sideLink:{lable:"View All",cls:"",action:null}},footer:{label:"View All",icon:"",action:null},data:[{label:"item 1",description:"If several languages coalesce the grammar",time:"3 min ago"},{label:"item 2",description:"It will seem like simplified English",time:"1 hr ago"},{label:"item 3",description:"If several languages coalesce the grammar",time:"4 hr ago"}]},this.pushEnvelop={pushRecepients:[],pushData:null,emittEvent:"push-notif",triggerEvent:"send-notif",req:null,resp:null},this.numericNumberReg1="^-?[0-9]\\d*(\\.\\d{1,2})?$",this.numericNumberReg2="/^[0-9]d*$/",this.numericNumberReg3=new RegExp(/^-?[0-9]\\d*(\\.\\d{1,2})?$/,"i"),this.numericNumberReg4=new RegExp(/^[0-9]\d*$/,"i")}setIconsData$(n,d){n.fields.map((s,t)=>{s.name===d&&(n.fields[t].ddlInfo.selData$=(0,r.of)(this.ddlData),n.fields[t].ddlInfo.selIndex="iconId",n.fields[t].ddlInfo.selValueField="iconName",n.fields[t].ddlInfo.selPlaceholder="...Choose")})}setDdl$(n){if(n.token){const d=new r.Subject;let s=[];return n.getFn$.subscribe(t=>{const m=t;console.log("ModulemanService::setDdl$()/response:",m),console.log("ModulemanService::setDdl$()/ddlCtx.step.fields:",n.step),m.app_state.success?(s=m.data.items,n.step.fields.map((b,F)=>{console.log("ModulemanService::setDdl$()/f.name1:",b.name),console.log("ModulemanService::setDdl$()/ddlCtx.controlName:",n.controlName),console.log("ModulemanService::setDdl$()/f:",b),b.name===n.controlName&&"ddlInfo"in b&&(console.log("ModulemanService::setDdl$()/f.name2:",b.name),n.step.fields[F].ddlInfo.selData$=(0,r.of)(m.data.items),n.step.fields[F].ddlInfo.selIndex=n.selIndex,n.step.fields[F].ddlInfo.selValueField=n.selValueField,n.step.fields[F].ddlInfo.selPlaceholder="...Choose")}),d.next(s)):(this.pushEnvelop.pushData=m,this.pushEnvelop.resp=m,this.svNotif.emitNotif(this.pushEnvelop),d.next(s))}),d.asObservable()}return(0,r.of)([])}}h.\u0275fac=function(n){return new(n||h)(e.\u0275\u0275inject(p.MenuService),e.\u0275\u0275inject(p.NotificationService),e.\u0275\u0275inject(p.FormsService))},h.\u0275prov=e.\u0275\u0275defineInjectable({token:h,factory:h.\u0275fac,providedIn:"root"})},15861:(j,T,a)=>{function r(e,C,p,M,v,h,i){try{var n=e[h](i),d=n.value}catch(s){return void p(s)}n.done?C(d):Promise.resolve(d).then(M,v)}function I(e){return function(){var C=this,p=arguments;return new Promise(function(M,v){var h=e.apply(C,p);function i(d){r(h,M,v,i,n,"next",d)}function n(d){r(h,M,v,i,n,"throw",d)}i(void 0)})}}a.d(T,{Z:()=>I})}}]);