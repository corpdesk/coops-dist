(self.webpackChunkcoops=self.webpackChunkcoops||[]).push([[1882],{1882:(H,E,d)=>{d.r(E),d.d(E,{AdminModule:()=>g});var P=d(5228),r=d(533),$=d(3781),C=d(6380),z=d(2618),V=d(9707),L=d(5006),R=d(7444),t=d(7512),c=d(1052),h=d(7011),f=d(3635);const x=new t.FormsService,w=[{title:"ID",name:"adminId",dbName:"ADMIN_id",type:t.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:t.ControlType.text,fieldFor:t.FieldFor.tableDisplay}],formatt:"alphanum"},{title:"Guid",name:"adminGuid",dbName:"ADMIN_guid",type:t.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:t.ControlType.text,fieldFor:t.FieldFor.tableDisplay}],formatt:"alphanum",disabled:!0},{title:"Name",name:"adminName",dbName:"ADMIN_name",type:t.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:t.ControlType.text,fieldFor:t.FieldFor.createForm},{controlType:t.ControlType.text,fieldFor:t.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[r.Validators.minLength(3),r.Validators.maxLength(20),r.Validators.required]]},{title:"AdminType",name:"adminTypeGuid",dbName:"ADMIN_type_guid",type:t.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:t.ControlType.text,fieldFor:t.FieldFor.tableDisplay},{controlType:t.ControlType.searchDropDown,fieldFor:t.FieldFor.createForm}],ddlInfo:{selData$:(0,f.of)([]),selValueField:"adminName",selIndex:"adminTypeGuid",selPlaceholder:"...Choose",data:null},formatt:"number",disabled:!0,savable:!0,formControlsConfig:["",[r.Validators.minLength(3),r.Validators.maxLength(42),r.Validators.required]]},{title:"ParentModule",name:"parentModuleGuid",dbName:"parent_module_guid",type:t.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:t.ControlType.text,fieldFor:t.FieldFor.tableDisplay},{controlType:t.ControlType.searchDropDown,fieldFor:t.FieldFor.createForm}],ddlInfo:{selData$:(0,f.of)([]),selValueField:"menuName",selIndex:"menuGuid",selPlaceholder:"...Choose",data:null},formatt:"number",disabled:!0,savable:!0,formControlsConfig:["",[r.Validators.minLength(3),r.Validators.maxLength(42),r.Validators.required]]},{title:"AliasName",name:"adminDispName",dbName:"ADMIN_disp_name",type:t.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:t.ControlType.text,fieldFor:t.FieldFor.createForm},{controlType:t.ControlType.text,fieldFor:t.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[r.Validators.minLength(3),r.Validators.maxLength(14),r.Validators.required]]},{title:"Icon",name:"icon",dbName:"icon",type:t.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:t.ControlType.text,fieldFor:t.FieldFor.tableDisplay},{controlType:t.ControlType.ddlIcons,fieldFor:t.FieldFor.createForm}],ddlInfo:{selData$:(0,f.of)([]),selValueField:"iconName",selIndex:"iconId",selPlaceholder:"...choose",ddlIconId:"iconDdlIdX",searchInputId:"searchInputIdX",searchInputName:"searchInputNameX",selectedValue:"",data:null},formatt:"text",savable:!0,formControlsConfig:["",[r.Validators.minLength(2),r.Validators.maxLength(20),r.Validators.required]]},{title:"Show Icon",name:"showIcon",dbName:"show_icon",type:t.FieldType.boolean,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:t.ControlType.status,fieldFor:t.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0},{title:"Enabled",name:"adminEnabled",dbName:"ADMIN_enabled",type:t.FieldType.boolean,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:t.ControlType.status,fieldFor:t.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0},{title:"Action",name:"action",type:t.FieldType.action,fetchable:!1,show:!0,controls:[{controlType:t.ControlType.action,fieldFor:t.FieldFor.tableDisplay},{controlType:t.ControlType.action,fieldFor:t.FieldFor.createForm}],Fn:"createAdmin"},{title:"Search",name:"iconSearch",type:t.FieldType.any,controls:[],formControlsConfig:["",[]]}],u={token:"",stepTitle:"Create Admin",stepItems:{nextButtonId:"stepToMenu"},tabPaneId:"adminInfo",cardTitle:"Admin Information",cardTitleDesc:"Fill all information below",module:"Moduleman",controller:"Admin",formGroup:null,fields:x.filterByFieldFor(w,t.FieldFor.createForm)},B={name:"Admin Wizard",steps:[u]},S={select:["adminId","adminName","adminGuid"],where:{}},F={getFn$:null,selIndex:S.select[0],selValueField:S.select[1],fetchFields:S.select,step:null,token:null,controlName:"adminId"},A={select:["adminTypeId","adminTypeName","adminTypeGuid"],where:{}},D={getFn$:null,selIndex:A.select[2],selValueField:A.select[1],fetchFields:A.select,step:null,token:null,controlName:"adminTypeGuid"},_=[{menuName:"create",menuGuid:"bd9b5bda5ab",navLocation:"/moduleman/admin/create",actionType:t.ActionType.navigate},{menuName:"dashboard",menuGuid:"d27294db59c1",navLocation:"/moduleman/admin/dashboard",actionType:t.ActionType.navigate}];var o=d(7675);class I{constructor(e,i,n,s,a,m,p){this.aRoute=e,this.router=i,this.svBase=n,this.svNazTable=s,this.svAcl=a,this.svPage=m,this.svSess=p,this.dSource={fields:[],data:[]},this.cardTitle="Admin",this.cardBodyId="cdObj",this.searchInputId="inputSearchAdmin",this.editRoute="/moduleman/admin/edit",this.deleteRoute="/moduleman/admin/delete",this.createRoute="/moduleman/admin/create",this.filter={},this.tpData=t.DEFAULT_TPD,this.ddlData=_,this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(e=>{e&&this.svAcl.initComponent(e,this,this.svSess).then(i=>{})})}init(){this.baseModel=new t.BaseModel(u.module,u.controller),this.svBase.module=u.module,this.svBase.controller=u.controller,this.baseModel.data.fields=w.filter(e=>e.fetchable||e.type===t.FieldType.action),this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(u.controller,"List"),this.sQuery=this.svNazTable.initSQuery(this),this.dsEmittData=this.svNazTable.initEmittData(this)}execQuery(e){this.svNazTable.execQuery(e,this.svBase.getPaged$(this.sQuery,this.baseModel.sess.cd_token),this)}setSearchQuery(e){this.sQuery=e.sQuery,this.execQuery(e)}getSelect(){return this.baseModel.data.fields.filter(e=>e.fetchable).map(e=>e.name)}}I.\u0275fac=function(e){return new(e||I)(o.\u0275\u0275directiveInject(h.ActivatedRoute),o.\u0275\u0275directiveInject(h.Router),o.\u0275\u0275directiveInject(t.BaseService),o.\u0275\u0275directiveInject(c.NazTableService),o.\u0275\u0275directiveInject(t.AclService),o.\u0275\u0275directiveInject(c.PageService),o.\u0275\u0275directiveInject(t.SessService))},I.\u0275cmp=o.\u0275\u0275defineComponent({type:I,selectors:[["app-list"]],viewQuery:function(e,i){if(1&e&&o.\u0275\u0275viewQuery(c.NazTableComponent,5),2&e){let n;o.\u0275\u0275queryRefresh(n=o.\u0275\u0275loadQuery())&&(i.nazTable=n.first)}},decls:2,vars:0,template:function(e,i){1&e&&(o.\u0275\u0275elementStart(0,"p"),o.\u0275\u0275text(1,"admin-list"),o.\u0275\u0275elementEnd())}});var j=d(5861);class M{constructor(e,i,n,s,a,m){this.aRoute=e,this.svBase=i,this.svPage=n,this.svSess=s,this.svAcl=a,this.svNotif=m,this.formConfig={},this.backRoute="/moduleman/admin/list",this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(e=>{this.svAcl.initComponent(e,this,this.svSess).then(i=>{})})}init(){this.baseModel=new t.BaseModel(u.module,u.controller),this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(u.controller,"Edit"),this.baseModel.data.subTitle="only allowed fields are editable"}update(e){var i=this;return(0,j.Z)(function*(){i.svBase.update$(e,i.baseModel.token).subscribe(n=>{i.svNotif.emitNotif({pushRecepients:t.DEFAULT_PUSH_RECEPIENTS,pushData:n,emittEvent:"push-notif",triggerEvent:"send-notif",req:null,resp:n})})})()}}M.\u0275fac=function(e){return new(e||M)(o.\u0275\u0275directiveInject(h.ActivatedRoute),o.\u0275\u0275directiveInject(t.BaseService),o.\u0275\u0275directiveInject(c.PageService),o.\u0275\u0275directiveInject(t.SessService),o.\u0275\u0275directiveInject(t.AclService),o.\u0275\u0275directiveInject(t.NotificationService))},M.\u0275cmp=o.\u0275\u0275defineComponent({type:M,selectors:[["app-edit"]],decls:1,vars:3,consts:[[3,"baseModel","pageDescription","formConfig","backRoute","updateQuery"]],template:function(e,i){1&e&&(o.\u0275\u0275elementStart(0,"naz-table-edit",0),o.\u0275\u0275listener("updateQuery",function(s){return i.update(s)}),o.\u0275\u0275elementEnd()),2&e&&o.\u0275\u0275property("baseModel",i.baseModel)("formConfig",i.formConfig)("backRoute",i.backRoute)},dependencies:[c.EditComponent]});class N{constructor(e,i,n,s,a,m,p){this.aRoute=e,this.router=i,this.svBase=n,this.svPage=s,this.svAcl=a,this.svNotif=m,this.svSess=p,this.formConfig={},this.backRoute="/moduleman/admin/list",this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(e=>{this.svAcl.initComponent(e,this,this.svSess).then(i=>{})})}init(){this.baseModel=new t.BaseModel(u.module,u.controller),this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(u.controller,"Delete"),this.baseModel.data.subTitle="confirm before delete"}deleteItem(e){var i=this;return(0,j.Z)(function*(){i.svBase.delete$(e,i.baseModel.token).subscribe(n=>{i.svNotif.emitNotif({pushRecepients:t.DEFAULT_PUSH_RECEPIENTS,pushData:n,emittEvent:"push-notif",triggerEvent:"send-notif",req:null,resp:n})})})()}}N.\u0275fac=function(e){return new(e||N)(o.\u0275\u0275directiveInject(h.ActivatedRoute),o.\u0275\u0275directiveInject(h.Router),o.\u0275\u0275directiveInject(t.BaseService),o.\u0275\u0275directiveInject(c.PageService),o.\u0275\u0275directiveInject(t.AclService),o.\u0275\u0275directiveInject(t.NotificationService),o.\u0275\u0275directiveInject(t.SessService))},N.\u0275cmp=o.\u0275\u0275defineComponent({type:N,selectors:[["app-delete"]],decls:1,vars:3,consts:[[3,"baseModel","pageDescription","formConfig","backRoute","deleteQuery"]],template:function(e,i){1&e&&(o.\u0275\u0275elementStart(0,"naz-table-delete",0),o.\u0275\u0275listener("deleteQuery",function(s){return i.deleteItem(s)}),o.\u0275\u0275elementEnd()),2&e&&o.\u0275\u0275property("baseModel",i.baseModel)("formConfig",i.formConfig)("backRoute",i.backRoute)},dependencies:[c.DeleteComponent]});class v{constructor(e,i,n){this.svMenu=e,this.svNotif=i,this.svForm=n,this.ddlData={config:{suppressScrollX:!0,wheelSpeed:.3},header:{title:{lable:"Notifications",cls:"",action:null},sideLink:{lable:"View All",cls:"",action:null}},footer:{label:"View All",icon:"",action:null},data:[{label:"item 1",description:"If several languages coalesce the grammar",time:"3 min ago"},{label:"item 2",description:"It will seem like simplified English",time:"1 hr ago"},{label:"item 3",description:"If several languages coalesce the grammar",time:"4 hr ago"}]},this.pushEnvelop={pushRecepients:[],pushData:null,emittEvent:"push-notif",triggerEvent:"send-notif",req:null,resp:null},this.numericNumberReg1="^-?[0-9]\\d*(\\.\\d{1,2})?$",this.numericNumberReg2="/^[0-9]d*$/",this.numericNumberReg3=new RegExp(/^-?[0-9]\\d*(\\.\\d{1,2})?$/,"i"),this.numericNumberReg4=new RegExp(/^[0-9]\d*$/,"i")}setIconsData$(e,i){e.fields.map((n,s)=>{n.name===i&&(e.fields[s].ddlInfo.selData$=(0,f.of)(this.ddlData),e.fields[s].ddlInfo.selIndex="iconId",e.fields[s].ddlInfo.selValueField="iconName",e.fields[s].ddlInfo.selPlaceholder="...Choose")})}setDdl$(e){if(e.token){const i=new f.Subject;let n=[];return e.getFn$.subscribe(s=>{const a=s;console.log("ModulemanService::setDdl$()/response:",a),console.log("ModulemanService::setDdl$()/ddlCtx.step.fields:",e.step),a.app_state.success?(n=a.data.items,e.step.fields.map((m,p)=>{console.log("ModulemanService::setDdl$()/f.name1:",m.name),console.log("ModulemanService::setDdl$()/ddlCtx.controlName:",e.controlName),console.log("ModulemanService::setDdl$()/f:",m),m.name===e.controlName&&"ddlInfo"in m&&(console.log("ModulemanService::setDdl$()/f.name2:",m.name),e.step.fields[p].ddlInfo.selData$=(0,f.of)(a.data.items),e.step.fields[p].ddlInfo.selIndex=e.selIndex,e.step.fields[p].ddlInfo.selValueField=e.selValueField,e.step.fields[p].ddlInfo.selPlaceholder="...Choose")}),i.next(n)):(this.pushEnvelop.pushData=a,this.pushEnvelop.resp=a,this.svNotif.emitNotif(this.pushEnvelop),i.next(n))}),i.asObservable()}return(0,f.of)([])}}v.\u0275fac=function(e){return new(e||v)(o.\u0275\u0275inject(t.MenuService),o.\u0275\u0275inject(t.NotificationService),o.\u0275\u0275inject(t.FormsService))},v.\u0275prov=o.\u0275\u0275defineInjectable({token:v,factory:v.\u0275fac,providedIn:"root"});class b{constructor(e,i,n){this.svAdmin=e,this.svModule=i,this.svModman=n}loadDdls(e,i){var n=this;return(0,j.Z)(function*(){F.token=e.token,F.step=i,F.controlName="parentModuleGuid",F.getFn$=n.svModule.getModule$(S,e.token),yield n.svModman.setDdl$(yield F).subscribe(s=>{console.log("menu/AdminModService::loadDdls()/ret(admins):",JSON.stringify(s)),i.fields.forEach(a=>{console.log("AdminFrontService::loadDdls()/f(admins):",JSON.stringify(a)),"parentModuleGuid"===a.name&&(a.ddlInfo.data=s)})}),D.token=e.token,D.step=i,D.controlName="adminTypeGuid",yield n.svModman.setDdl$(yield D).subscribe(s=>{console.log("menu/AdminModService::loadDdls()/ret(adminTypes):",s),i.fields.forEach(a=>{console.log("AdminFrontService::loadDdls()/f(adminTypes):",JSON.stringify(a)),"adminTypeGuid"===a.name&&(a.ddlInfo.data=s)})})})()}}b.\u0275fac=function(e){return new(e||b)(o.\u0275\u0275inject(b),o.\u0275\u0275inject(t.ModuleService),o.\u0275\u0275inject(v))},b.\u0275prov=o.\u0275\u0275defineInjectable({token:b,factory:b.\u0275fac,providedIn:"root"});class T{constructor(e,i,n,s,a,m,p,k,O,U,X,J,Z){this.aRoute=e,this.router=i,this.svAdminFront=n,this.svAcl=s,this.svForm=a,this.svNotif=m,this.fb=p,this.svForms=k,this.svModman=O,this.svPage=U,this.svPush=X,this.svBase=J,this.svSess=Z,this.wizardModel=B,this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(e=>{this.svAcl.initComponent(e,this,this.svSess).then(i=>{i&&(this.svPush.init(this),this.baseModel.data.step.token=this.baseModel.token)})})}ngAfterViewInit(){this.svAdminFront.loadDdls(this.baseModel,this.baseModel.data.step).then(e=>{console.log("cdObj/CreateComponent::ngAfterViewInit()/this.baseModel.data.step:",this.baseModel.data.step)}),this.svModman.setIconsData$(this.baseModel.data.step,"icon")}init(){this.baseModel.data.step.formGroup=this.baseModel.data.form}setSelectedIcon(e){this.svForm.setSelectedIcon(e,this.baseModel,this.baseModel.data.step)}save(e){}finishFunction(){console.log("finishing!!")}}T.\u0275fac=function(e){return new(e||T)(o.\u0275\u0275directiveInject(h.ActivatedRoute),o.\u0275\u0275directiveInject(h.Router),o.\u0275\u0275directiveInject(b),o.\u0275\u0275directiveInject(t.AclService),o.\u0275\u0275directiveInject(t.FormsService),o.\u0275\u0275directiveInject(t.NotificationService),o.\u0275\u0275directiveInject(r.FormBuilder),o.\u0275\u0275directiveInject(t.FormsService),o.\u0275\u0275directiveInject(v),o.\u0275\u0275directiveInject(c.PageService),o.\u0275\u0275directiveInject(t.CdPushService),o.\u0275\u0275directiveInject(t.BaseService),o.\u0275\u0275directiveInject(t.SessService))},T.\u0275cmp=o.\u0275\u0275defineComponent({type:T,selectors:[["app-create"]],decls:1,vars:2,consts:[[3,"baseModel","wizardModel","saveEmitter","relaySelIconEmitter"]],template:function(e,i){1&e&&(o.\u0275\u0275elementStart(0,"naz-table-create",0),o.\u0275\u0275listener("saveEmitter",function(s){return i.save(s)})("relaySelIconEmitter",function(s){return i.setSelectedIcon(s)}),o.\u0275\u0275elementEnd()),2&e&&o.\u0275\u0275property("baseModel",i.baseModel)("wizardModel",i.wizardModel)},dependencies:[c.CreateComponent]});var Q=d(1816);const G=[{path:"list",component:I},{path:"edit",component:M},{path:"delete",component:N},{path:"create",component:T},{path:"dashboard",component:Q.M}];class y{}y.\u0275fac=function(e){return new(e||y)},y.\u0275mod=o.\u0275\u0275defineNgModule({type:y}),y.\u0275inj=o.\u0275\u0275defineInjector({imports:[h.RouterModule.forChild(G),h.RouterModule]});class g{}g.\u0275fac=function(e){return new(e||g)},g.\u0275mod=o.\u0275\u0275defineNgModule({type:g}),g.\u0275inj=o.\u0275\u0275defineInjector({imports:[P.CommonModule,r.FormsModule,r.ReactiveFormsModule,C.NgbNavModule,C.NgbDropdownModule,C.NgbTooltipModule,C.NgbAccordionModule,c.NazUiModule,c.NazTableModule,c.NazCreateModule,c.NazEditModule,c.NazDeleteModule,z.Ng2SearchPipeModule,V.ArchwizardModule,L.NgToggleModule,y,$.NgSelectModule,t.BaseModule.forChild(R.N),t.CdPushModule.forChild(R.N)]})}}]);