(self.webpackChunkcoops=self.webpackChunkcoops||[]).push([[7439],{79028:(P,_,n)=>{n.d(_,{k:()=>i});var a=n(15861),y=n(39664),e=n(8465),F=n(87675),s=n(47512),d=n(98812);class i{constructor(r,p,u){this.svMenu=r,this.svModule=p,this.svModman=u}loadDdls(r,p){var u=this;return(0,a.Z)(function*(){y.tL.token=r.token,y.tL.step=p,y.tL.controlName="moduleId",y.tL.getFn$=u.svModule.getModule$(y.qh,r.token),yield u.svModman.setDdl$(yield y.tL).subscribe(c=>{console.log("menu/MenuModService::loadDdls()/ret(modules):",c),p.fields.forEach(v=>{"moduleId"===v.name&&(v.ddlInfo.data=c)})}),e.ni.token=r.token,e.ni.step=p,e.ni.controlName="menuParentId",e.ni.getFn$=u.svMenu.getMenuList$(e.i0,r.token),yield u.svModman.setDdl$(yield e.ni).subscribe(c=>{console.log("menu/MenuModService::loadDdls()/ret(menus):",c),p.fields.forEach(v=>{"menuParentId"===v.name&&(v.ddlInfo.data=c)})})})()}setCdObj(r,p,u){console.log("MenuModService::setCdObj()/fg:",r);const c=r.controls.moduleId.value;console.log("MenuModService::setCdObj()/moduleId:",c);const v=p.getDdlData("moduleId",e.hA);console.log("MenuModService::setCdObj()/modules:",v);const I=v.filter((C,E)=>C.moduleId===c?C:null);console.log("MenuModService::setCdObj()/selectedModule:",I);let g=null;I.length>0&&(g=I[0].moduleGuid),console.log("MenuModService::setCdObj()/moduleGuid:",g),g&&(u.cdObj={cdObjName:r.controls.menuName.value,cdObjTypeGuid:"f5df4494-5cc9-4463-8e8e-c5861703280e",parentModuleGuid:g,cdObjDispName:null,icon:null,showIcon:null,cdObjEnabled:null})}}i.\u0275fac=function(r){return new(r||i)(F.\u0275\u0275inject(s.MenuService),F.\u0275\u0275inject(s.ModuleService),F.\u0275\u0275inject(d.v))},i.\u0275prov=F.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"})},8465:(P,_,n)=>{n.d(_,{AO:()=>v,Cq:()=>p,NG:()=>i,hA:()=>d,i0:()=>u,kx:()=>t,ni:()=>c,pt:()=>r});var a=n(30533),e=n(47512),M=n(33635);const m=new e.FormsService,d=[{title:"ID",name:"menuId",dbName:"menu_id",type:e.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"number",disabled:!0,formControlsConfig:["",[]]},{title:"Guid",name:"menuGuid",dbName:"menu_guid",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"alphanum",disabled:!0},{title:"Label",name:"menuLabel",dbName:"menu_label",type:e.FieldType.string,fetchable:!0,updateable:!1,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0},{title:"Name",name:"menuName",dbName:"menu_name",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[a.Validators.minLength(3),a.Validators.maxLength(25),a.Validators.required]]},{title:"MenuParent",name:"menuParentId",dbName:"menu_parent_id",type:e.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.searchDropDown,fieldFor:e.FieldFor.createForm}],ddlInfo:{selData$:(0,M.of)([]),selValueField:"menuName",selIndex:"menuId",selPlaceholder:"...Choose",data:null},formatt:"number",disabled:!0,savable:!0,formControlsConfig:["",[a.Validators.required]]},{title:"ModuleParent",name:"moduleId",dbName:"module_id",primaryField:"menuParent",type:e.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.searchDropDown,fieldFor:e.FieldFor.createForm}],ddlInfo:{selData$:(0,M.of)([]),selValueField:"moduleName",selIndex:"moduleId",selPlaceholder:"...Choose",data:null},formatt:"number",disabled:!0,savable:!0,formControlsConfig:["",[a.Validators.required]]},{title:"Description",name:"menuDescription",dbName:"menu_description",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.textArea,fieldFor:e.FieldFor.createForm}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[a.Validators.minLength(0),a.Validators.maxLength(300)]]},{title:"Icon",name:"menuIcon",dbName:"menu_icon",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.ddlIcons,fieldFor:e.FieldFor.createForm}],ddlInfo:{selData$:(0,M.of)([]),selValueField:"iconName",selIndex:"iconId",selPlaceholder:"...choose",ddlIconId:"iconDdlIdX",searchInputId:"searchInputIdX",searchInputName:"searchInputNameX",selectedValue:"",data:null},formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[a.Validators.minLength(2),a.Validators.maxLength(50),a.Validators.required]]},{title:"Path",name:"path",dbName:"path",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm}],formatt:"text",formControlsConfig:["",[a.Validators.minLength(3),a.Validators.maxLength(100),a.Validators.required]]},{title:"Action",name:"action",type:e.FieldType.action,fetchable:!1,show:!0,controls:[{controlType:e.ControlType.action,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.action,fieldFor:e.FieldFor.createForm}],Fn:"createMenu"},{title:"Search",name:"iconSearch",type:e.FieldType.any,controls:[],formControlsConfig:["",[]]}],i={data:{},cdObj:null,valid:null,ctx:"Sys"},t=[{toReplace:"menuLabel",replaceWith:"menuName"}],r={token:"",stepTitle:"Create Menu",stepItems:{prevButtonId:"stepToModule",lastButtonId:"endSteps"},tabPaneId:"menuInfo",cardTitle:"Menu Information",cardTitleDesc:"Every module has to have at least one menu item. You can use the + button to add more items.",module:"moduleman",controller:"menu",formGroup:null,fields:m.filterByFieldFor(d,e.FieldFor.createForm)},p={name:"Menu Wizard",steps:[r]},u={select:["menuId","menuName","menuGuid"],where:{}},c={getFn$:null,selIndex:u.select[0],selValueField:u.select[1],fetchFields:u.select,step:null,token:null,controlName:"menuParentId"},v=[{menuName:"create",menuGuid:"bd9b5bda6ab",navLocation:"/moduleman/menu/create",actionType:e.ActionType.navigate},{menuName:"dashboard",menuGuid:"d27294db69c1",navLocation:"/moduleman/menu/dashboard",actionType:e.ActionType.navigate}]},37439:(P,_,n)=>{n.r(_),n.d(_,{MenuModule:()=>N});var a=n(35228),y=n(30533),e=n(76380),F=n(92618),M=n(7444),s=n(47512),m=n(61052),d=n(37011),i=n(8465),t=n(87675);class r{constructor(o,l,h,f,T,D,O,A){this.aRoute=o,this.router=l,this.svMenu=h,this.svNazTable=f,this.svAcl=T,this.svForms=D,this.svPage=O,this.svSess=A,this.dSource={fields:[],data:[]},this.cardTitle="Menu",this.cardBodyId="cdMenu",this.searchInputId="inputSearchMenu",this.editRoute="/moduleman/menu/edit",this.deleteRoute="/moduleman/menu/delete",this.createRoute="/moduleman/menu/create",this.filter={},this.tpData=s.DEFAULT_TPD,this.ddlData=i.AO,this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(o=>{o&&this.svAcl.initComponent(o,this,this.svSess).then(l=>{})})}init(){this.baseModel=new s.BaseModel(i.pt.module,i.pt.controller),this.baseModel.data.fields=i.hA.filter(o=>o.fetchable||o.type===s.FieldType.action),this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs("Menu","List"),this.sQuery=this.svNazTable.initSQuery(this),this.dsEmittData=this.svNazTable.initEmittData(this)}execQuery(o){this.svNazTable.execQuery(o,this.svMenu.getMenuList$(this.sQuery,this.baseModel.sess.cd_token),this)}setSearchQuery(o){this.sQuery=o.sQuery,this.execQuery(o)}getSelect(){return this.baseModel.data.fields.filter(o=>o.fetchable).map(o=>o.name)}}r.\u0275fac=function(o){return new(o||r)(t.\u0275\u0275directiveInject(d.ActivatedRoute),t.\u0275\u0275directiveInject(d.Router),t.\u0275\u0275directiveInject(s.MenuService),t.\u0275\u0275directiveInject(m.NazTableService),t.\u0275\u0275directiveInject(s.AclService),t.\u0275\u0275directiveInject(s.FormsService),t.\u0275\u0275directiveInject(m.PageService),t.\u0275\u0275directiveInject(s.SessService))},r.\u0275cmp=t.\u0275\u0275defineComponent({type:r,selectors:[["app-list"]],viewQuery:function(o,l){if(1&o&&t.\u0275\u0275viewQuery(m.NazTableComponent,5),2&o){let h;t.\u0275\u0275queryRefresh(h=t.\u0275\u0275loadQuery())&&(l.nazTable=h.first)}},decls:1,vars:9,consts:[[3,"baseModel","cardTitle","searchInputId","cardBodyId","tpData","filter","ddlData","editRoute","deleteRoute","searchQuery"]],template:function(o,l){1&o&&(t.\u0275\u0275elementStart(0,"naz-table",0),t.\u0275\u0275listener("searchQuery",function(f){return l.setSearchQuery(f)}),t.\u0275\u0275elementEnd()),2&o&&t.\u0275\u0275property("baseModel",l.baseModel)("cardTitle",l.cardTitle)("searchInputId",l.searchInputId)("cardBodyId",l.cardBodyId)("tpData",l.tpData)("filter",l.filter)("ddlData",l.ddlData)("editRoute",l.editRoute)("deleteRoute",l.deleteRoute)},dependencies:[m.NazTableComponent]});var p=n(15861);class u{constructor(o,l,h,f,T,D){this.aRoute=o,this.router=l,this.svMenu=h,this.svSess=f,this.svAcl=T,this.svNotif=D,this.fieldsAlias=i.kx,this.formConfig={},this.backRoute="/moduleman/menu/list",this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(o=>{this.svAcl.initComponent(o,this,this.svSess).then(l=>{})})}init(){this.baseModel=new s.BaseModel(i.pt.module,i.pt.controller),this.baseModel.breadCrumbItems=[{label:"Menu"},{label:"Edit",active:!0}],this.baseModel.data.subTitle="only allowed fields are editable"}update(o){var l=this;return(0,p.Z)(function*(){l.svMenu.updateMenu$(o,l.baseModel.token).subscribe(h=>{l.svNotif.emitNotif({pushRecepients:s.DEFAULT_PUSH_RECEPIENTS,pushData:h,emittEvent:"push-notif",triggerEvent:"send-notif",req:null,resp:h})})})()}}u.\u0275fac=function(o){return new(o||u)(t.\u0275\u0275directiveInject(d.ActivatedRoute),t.\u0275\u0275directiveInject(d.Router),t.\u0275\u0275directiveInject(s.MenuService),t.\u0275\u0275directiveInject(s.SessService),t.\u0275\u0275directiveInject(s.AclService),t.\u0275\u0275directiveInject(s.NotificationService))},u.\u0275cmp=t.\u0275\u0275defineComponent({type:u,selectors:[["app-edit"]],decls:1,vars:4,consts:[[3,"baseModel","pageDescription","formConfig","fieldsAlias","backRoute","updateQuery"]],template:function(o,l){1&o&&(t.\u0275\u0275elementStart(0,"naz-table-edit",0),t.\u0275\u0275listener("updateQuery",function(f){return l.update(f)}),t.\u0275\u0275elementEnd()),2&o&&t.\u0275\u0275property("baseModel",l.baseModel)("formConfig",l.formConfig)("fieldsAlias",l.fieldsAlias)("backRoute",l.backRoute)},dependencies:[m.EditComponent]});class c{constructor(o,l,h,f,T,D){this.aRoute=o,this.router=l,this.svMenu=h,this.svAcl=f,this.svNotif=T,this.svSess=D,this.backRoute="/moduleman/menu/list",this.formConfig={},this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(o=>{this.svAcl.initComponent(o,this,this.svSess).then(l=>{})})}init(){this.baseModel=new s.BaseModel(i.pt.module,i.pt.controller),this.baseModel.breadCrumbItems=[{label:"Menu"},{label:"Delete",active:!0}],this.baseModel.data.subTitle="confirm before delete"}deleteItem(o){var l=this;return(0,p.Z)(function*(){l.svMenu.deleteMenu$(o,l.baseModel.token).subscribe(h=>{l.svNotif.emitNotif({pushRecepients:s.DEFAULT_PUSH_RECEPIENTS,pushData:h,emittEvent:"push-notif",triggerEvent:"send-notif",req:null,resp:h})})})()}}c.\u0275fac=function(o){return new(o||c)(t.\u0275\u0275directiveInject(d.ActivatedRoute),t.\u0275\u0275directiveInject(d.Router),t.\u0275\u0275directiveInject(s.MenuService),t.\u0275\u0275directiveInject(s.AclService),t.\u0275\u0275directiveInject(s.NotificationService),t.\u0275\u0275directiveInject(s.SessService))},c.\u0275cmp=t.\u0275\u0275defineComponent({type:c,selectors:[["app-delete"]],decls:1,vars:2,consts:[[3,"baseModel","pageDescription","formConfig","deleteQuery"]],template:function(o,l){1&o&&(t.\u0275\u0275elementStart(0,"naz-table-delete",0),t.\u0275\u0275listener("deleteQuery",function(f){return l.deleteItem(f)}),t.\u0275\u0275elementEnd()),2&o&&t.\u0275\u0275property("baseModel",l.baseModel)("formConfig",l.formConfig)},dependencies:[m.DeleteComponent]});var v=n(39664),I=n(79028),g=n(98812);class C{constructor(o,l,h,f,T,D,O,A,L,j,B,x,U,w){this.aRoute=o,this.router=l,this.svModule=h,this.svMenu=f,this.svMenuFront=T,this.svAcl=D,this.svForm=O,this.svNotif=A,this.fb=L,this.svForms=j,this.svModman=B,this.svPage=x,this.svPush=U,this.svSess=w,this.newMenu=i.NG,this.wizardModel=i.Cq,this.newModule=v.Rf,this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(o=>{this.svAcl.initComponent(o,this,this.svSess).then(l=>{l&&(this.svPush.init(this),this.baseModel.data.step.token=this.baseModel.token)})})}ngAfterViewInit(){this.svMenuFront.loadDdls(this.baseModel,this.baseModel.data.step).then(o=>{console.log("menu/CreateComponent::ngAfterViewInit()/this.baseModel.controllerRoutes:",this.baseModel.controllerRoutes)}),this.svModman.setIconsData$(this.baseModel.data.step,"icon")}init(){this.baseModel=new s.BaseModel(i.pt.module,i.pt.controller),this.baseModel.data.fields=this.svForms.filterByFieldFor(i.hA,s.FieldFor.createForm),this.baseModel.data.wizardModel=i.Cq,this.baseModel.data.step=this.svForms.filterStepsByController(this.baseModel.data.wizardModel,"menu")[0],this.baseModel.data.form=this.fb.group(this.svForm.getFormControlConfig(i.hA)),this.baseModel.data.step.formGroup=this.baseModel.data.form,this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs("Menu","Create")}setSelectedIcon(o){this.svForm.setSelectedIcon(o,this.baseModel,this.baseModel.data.step)}save(o){let l;switch(o.controller){case"module":break;case"menu":this.svMenuFront.setCdObj(o.formGroup,this.svForm,this.newMenu),l=this.svMenu.createMenu$(this.newMenu,this.baseModel.token),this.svForm.saveForm(o,this.newMenu,l,this.svPush.pushEnvelop,this.svNotif)}}finishFunction(){console.log("finishing!!")}}C.\u0275fac=function(o){return new(o||C)(t.\u0275\u0275directiveInject(d.ActivatedRoute),t.\u0275\u0275directiveInject(d.Router),t.\u0275\u0275directiveInject(s.ModuleService),t.\u0275\u0275directiveInject(s.MenuService),t.\u0275\u0275directiveInject(I.k),t.\u0275\u0275directiveInject(s.AclService),t.\u0275\u0275directiveInject(s.FormsService),t.\u0275\u0275directiveInject(s.NotificationService),t.\u0275\u0275directiveInject(y.FormBuilder),t.\u0275\u0275directiveInject(s.FormsService),t.\u0275\u0275directiveInject(g.v),t.\u0275\u0275directiveInject(m.PageService),t.\u0275\u0275directiveInject(s.CdPushService),t.\u0275\u0275directiveInject(s.SessService))},C.\u0275cmp=t.\u0275\u0275defineComponent({type:C,selectors:[["app-create"]],decls:1,vars:2,consts:[[3,"baseModel","wizardModel","saveEmitter","relaySelIconEmitter"]],template:function(o,l){1&o&&(t.\u0275\u0275elementStart(0,"naz-table-create",0),t.\u0275\u0275listener("saveEmitter",function(f){return l.save(f)})("relaySelIconEmitter",function(f){return l.setSelectedIcon(f)}),t.\u0275\u0275elementEnd()),2&o&&t.\u0275\u0275property("baseModel",l.baseModel)("wizardModel",l.wizardModel)},dependencies:[m.CreateComponent]});class E{constructor(){}ngOnInit(){}}E.\u0275fac=function(o){return new(o||E)},E.\u0275cmp=t.\u0275\u0275defineComponent({type:E,selectors:[["app-dashboard"]],decls:2,vars:0,template:function(o,l){1&o&&(t.\u0275\u0275elementStart(0,"p"),t.\u0275\u0275text(1,"dashboard works!"),t.\u0275\u0275elementEnd())}});const R=[{path:"list",component:r},{path:"edit",component:u},{path:"delete",component:c},{path:"create",component:C},{path:"dashboard",component:E}];class S{}S.\u0275fac=function(o){return new(o||S)},S.\u0275mod=t.\u0275\u0275defineNgModule({type:S}),S.\u0275inj=t.\u0275\u0275defineInjector({imports:[d.RouterModule.forChild(R),d.RouterModule]});class N{}N.\u0275fac=function(o){return new(o||N)},N.\u0275mod=t.\u0275\u0275defineNgModule({type:N}),N.\u0275inj=t.\u0275\u0275defineInjector({imports:[a.CommonModule,S,y.FormsModule,y.ReactiveFormsModule,e.NgbNavModule,e.NgbDropdownModule,e.NgbTooltipModule,e.NgbAccordionModule,F.Ng2SearchPipeModule,m.NazUiModule,m.NazTableModule,m.NazCreateModule,m.NazEditModule,m.NazDeleteModule,s.BaseModule.forChild(M.N),s.CdPushModule.forChild(M.N)]})},39664:(P,_,n)=>{n.d(_,{AO:()=>u,GZ:()=>p,Qx:()=>m,Rf:()=>i,c_:()=>r,qh:()=>c,tL:()=>v,vk:()=>d});var a=n(30533),e=n(47512),M=n(8465);const s=new e.FormsService,m=[{title:"ID",name:"moduleId",dbName:"module_id",type:e.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"number",disabled:!0},{title:"Guid",name:"moduleGuid",dbName:"module_guid",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"alphanum",disabled:!0},{title:"Name",name:"moduleName",dbName:"module_name",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[a.Validators.minLength(4),a.Validators.maxLength(20),a.Validators.required]]},{title:"Description",name:"moduleDescription",dbName:"module_description",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.textArea,fieldFor:e.FieldFor.createForm}],formatt:"textArea",savable:!0,formControlsConfig:["",[a.Validators.minLength(0),a.Validators.maxLength(300)]]},{title:"Enabled",name:"moduleEnabled",dbName:"module_enabled",type:e.FieldType.boolean,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.status,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0},{title:"Sys",name:"isSysModule",dbName:"is_sys_module",type:e.FieldType.boolean,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.status,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[a.Validators.required]]},{title:"System Module",name:"isSys",controls:[{controlType:e.ControlType.toggleSwitch,fieldFor:e.FieldFor.createForm}],primaryField:"isSysModule",formControlsConfig:["",[]]},{title:"App Module",name:"isApp",controls:[{controlType:e.ControlType.toggleSwitch,fieldFor:e.FieldFor.createForm}],primaryField:"isSysModule",formControlsConfig:["",[]]},{title:"Action",name:"action",type:e.FieldType.action,fetchable:!1,show:!0,controls:[{controlType:e.ControlType.action,fieldFor:e.FieldFor.createForm},{controlType:e.ControlType.action,fieldFor:e.FieldFor.tableDisplay}]}],d={controllerName:"isSysModule",selectedItem:{index:0,optControlId:"",value:"",selected:!1},controlTypes:e.ControlType.toggleSwitch,options:[{index:0,optControlId:"isSys",value:"isSys",selected:!0},{index:1,optControlId:"isApp",value:"isApp",selected:!1}]},i={valid:null,data:{},ctx:"Sys"},r={token:"",stepTitle:"Create Module",stepItems:{nextButtonId:"stepToMenu"},tabPaneId:"moduleInfo",cardTitle:"Module Information",cardTitleDesc:"Fill all information below",module:"moduleman",controller:"module",formGroup:null,fields:s.filterByFieldFor(m,e.FieldFor.createForm)},p={name:"Module Wizard",steps:[r,M.pt]},u=[{menuName:"create",menuGuid:"bd9b5bda5ab",navLocation:"/moduleman/module/create",actionType:e.ActionType.navigate},{menuName:"dashboard",menuGuid:"d27294db59c1",navLocation:"/moduleman/module/dashboard",actionType:e.ActionType.navigate}],c={select:["moduleId","moduleName","moduleGuid"],where:{}},v={getFn$:null,selIndex:c.select[0],selValueField:c.select[1],fetchFields:c.select,step:null,token:null,controlName:"moduleId"}},98812:(P,_,n)=>{n.d(_,{v:()=>d});var a=n(33635),e=n(87675),M=n(47512);class d{constructor(t,r,p){this.svMenu=t,this.svNotif=r,this.svForm=p,this.ddlData={config:{suppressScrollX:!0,wheelSpeed:.3},header:{title:{lable:"Notifications",cls:"",action:null},sideLink:{lable:"View All",cls:"",action:null}},footer:{label:"View All",icon:"",action:null},data:[{label:"item 1",description:"If several languages coalesce the grammar",time:"3 min ago"},{label:"item 2",description:"It will seem like simplified English",time:"1 hr ago"},{label:"item 3",description:"If several languages coalesce the grammar",time:"4 hr ago"}]},this.pushEnvelop={pushRecepients:[],pushData:null,emittEvent:"push-notif",triggerEvent:"send-notif",req:null,resp:null},this.numericNumberReg1="^-?[0-9]\\d*(\\.\\d{1,2})?$",this.numericNumberReg2="/^[0-9]d*$/",this.numericNumberReg3=new RegExp(/^-?[0-9]\\d*(\\.\\d{1,2})?$/,"i"),this.numericNumberReg4=new RegExp(/^[0-9]\d*$/,"i")}setIconsData$(t,r){t.fields.map((p,u)=>{p.name===r&&(t.fields[u].ddlInfo.selData$=(0,a.of)(this.ddlData),t.fields[u].ddlInfo.selIndex="iconId",t.fields[u].ddlInfo.selValueField="iconName",t.fields[u].ddlInfo.selPlaceholder="...Choose")})}setDdl$(t){if(t.token){const r=new a.Subject;let p=[];return t.getFn$.subscribe(u=>{const c=u;console.log("ModulemanService::setDdl$()/response:",c),console.log("ModulemanService::setDdl$()/ddlCtx.step.fields:",t.step),c.app_state.success?(p=c.data.items,t.step.fields.map((v,I)=>{console.log("ModulemanService::setDdl$()/f.name1:",v.name),console.log("ModulemanService::setDdl$()/ddlCtx.controlName:",t.controlName),console.log("ModulemanService::setDdl$()/f:",v),v.name===t.controlName&&"ddlInfo"in v&&(console.log("ModulemanService::setDdl$()/f.name2:",v.name),t.step.fields[I].ddlInfo.selData$=(0,a.of)(c.data.items),t.step.fields[I].ddlInfo.selIndex=t.selIndex,t.step.fields[I].ddlInfo.selValueField=t.selValueField,t.step.fields[I].ddlInfo.selPlaceholder="...Choose")}),r.next(p)):(this.pushEnvelop.pushData=c,this.pushEnvelop.resp=c,this.svNotif.emitNotif(this.pushEnvelop),r.next(p))}),r.asObservable()}return(0,a.of)([])}}d.\u0275fac=function(t){return new(t||d)(e.\u0275\u0275inject(M.MenuService),e.\u0275\u0275inject(M.NotificationService),e.\u0275\u0275inject(M.FormsService))},d.\u0275prov=e.\u0275\u0275defineInjectable({token:d,factory:d.\u0275fac,providedIn:"root"})},15861:(P,_,n)=>{function a(e,F,M,s,m,d,i){try{var t=e[d](i),r=t.value}catch(p){return void M(p)}t.done?F(r):Promise.resolve(r).then(s,m)}function y(e){return function(){var F=this,M=arguments;return new Promise(function(s,m){var d=e.apply(F,M);function i(r){a(d,s,m,i,t,"next",r)}function t(r){a(d,s,m,i,t,"throw",r)}i(void 0)})}}n.d(_,{Z:()=>y})}}]);