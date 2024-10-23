(self.webpackChunkcoops=self.webpackChunkcoops||[]).push([[7355],{57355:(V,F,n)=>{n.r(F),n.d(F,{CoopModule:()=>x});var s=n(35228),m=n(30533),t=n(83781),v=n(76380),y=n(92618),T=n(59707),b=n(15006),h=n(7444),o=n(32224),l=n(8721),i=n(37011),f=n(33635);const D=new o.FormsService,C=[{title:"ID",name:"coopId",dbName:"coop_id",type:o.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay}],formatt:"alphanum"},{title:"Guid",name:"coopGuid",dbName:"coop_guid",type:o.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!1,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay}],formatt:"alphanum",disabled:!0},{title:"Name",name:"companyName",dbName:"company_name",type:o.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.createForm},{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[m.Validators.minLength(3),m.Validators.maxLength(80),m.Validators.required]]},{title:"CoopType",name:"coopTypeGuid",dbName:"coop_type_guid",type:o.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!1,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay},{controlType:o.ControlType.searchDropDown,fieldFor:o.FieldFor.createForm}],ddlInfo:{selData$:(0,f.of)([]),selValueField:"coopName",selIndex:"coopTypeGuid",selPlaceholder:"...Choose",data:null},formatt:"text",disabled:!0,savable:!0,formControlsConfig:["",[m.Validators.minLength(3),m.Validators.maxLength(42),m.Validators.required]]},{title:"CompanyType",name:"companyTypeId",dbName:"company_type_id",type:o.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay},{controlType:o.ControlType.searchDropDown,fieldFor:o.FieldFor.createForm}],ddlInfo:{selData$:(0,f.of)([]),selValueField:"companyTypeName",selIndex:"companyTypeId",selPlaceholder:"...Choose",data:null},formatt:"text",disabled:!0,savable:!0,formControlsConfig:["",[m.Validators.minLength(3),m.Validators.maxLength(42),m.Validators.required]]},{title:"CompanyID",name:"companyId",dbName:"company_id",type:o.FieldType.string,fetchable:!0,updateable:!0,index:!1,show:!0,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay}],formatt:"alphanum"},{title:"CdGeoLocationId",name:"cdGeoLocationId",dbName:"cd_geo_location_id",type:o.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay}],formatt:"alphanum"},{title:"Enabled",name:"coopEnabled",dbName:"coop_enabled",type:o.FieldType.boolean,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:o.ControlType.status,fieldFor:o.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0},{title:"Action",name:"action",type:o.FieldType.action,fetchable:!1,show:!0,controls:[{controlType:o.ControlType.action,fieldFor:o.FieldFor.tableDisplay},{controlType:o.ControlType.action,fieldFor:o.FieldFor.createForm}],Fn:"createCoop"},{title:"Search",name:"iconSearch",type:o.FieldType.any,controls:[],formControlsConfig:["",[]]}],I={data:{},valid:null,ctx:"App"},p={token:"",stepTitle:"Create Coop",stepItems:{nextButtonId:"stepToMenu"},tabPaneId:"coopInfo",cardTitle:"Coop Information",cardTitleDesc:"Fill all information below",module:"Coops",controller:"Coop",formGroup:null,fields:D.filterByFieldFor(C,o.FieldFor.createForm)},$={name:"Coop Wizard",steps:[p]},P={select:["coopTypeId","coopTypeName","coopTypeGuid"],where:{}},A={getFn$:null,selIndex:P.select[2],selValueField:P.select[1],fetchFields:P.select,step:null,token:null,controlName:"coopTypeGuid"},z=[{menuName:"create",menuGuid:"bd9b5bda5ab",navLocation:"/moduleman/company/create",actionType:o.ActionType.navigate},{menuName:"dashboard",menuGuid:"d27294db59c1",navLocation:"/moduleman/company/dashboard",actionType:o.ActionType.navigate}];var r=n(87675);class j{constructor(e,a,d,c,g,N,E){this.aRoute=e,this.router=a,this.svBase=d,this.svNazTable=c,this.svAcl=g,this.svPage=N,this.svSess=E,this.dSource={fields:[],data:[]},this.cardTitle="Coop",this.cardBodyId="coop",this.searchInputId="inputSearchCoop",this.filter={},this.tpData=o.DEFAULT_TPD,this.ddlData=z,this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(e=>{e&&this.svAcl.initComponent(e,this,this.svSess).then(a=>{})})}init(){this.baseModel=new o.BaseModel(p.module,p.controller),this.svBase.module=p.module,this.svBase.controller=p.controller,this.baseModel.data.fields=C.filter(e=>e.fetchable||e.type===o.FieldType.action),this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(p.controller,"List"),this.sQuery=this.svNazTable.initSQuery(this),this.dsEmittData=this.svNazTable.initEmittData(this)}execQuery(e){this.svNazTable.execQuery(e,this.svBase.getPaged$(this.sQuery,this.baseModel.sess.cd_token,I.ctx),this)}setSearchQuery(e){this.sQuery=e.sQuery,this.execQuery(e)}getSelect(){return this.baseModel.data.fields.filter(e=>e.fetchable).map(e=>e.name)}}j.\u0275fac=function(e){return new(e||j)(r.\u0275\u0275directiveInject(i.ActivatedRoute),r.\u0275\u0275directiveInject(i.Router),r.\u0275\u0275directiveInject(o.BaseService),r.\u0275\u0275directiveInject(l.NazTableService),r.\u0275\u0275directiveInject(o.AclService),r.\u0275\u0275directiveInject(l.PageService),r.\u0275\u0275directiveInject(o.SessService))},j.\u0275cmp=r.\u0275\u0275defineComponent({type:j,selectors:[["app-list"]],viewQuery:function(e,a){if(1&e&&r.\u0275\u0275viewQuery(l.NazTableComponent,5),2&e){let d;r.\u0275\u0275queryRefresh(d=r.\u0275\u0275loadQuery())&&(a.nazTable=d.first)}},decls:1,vars:7,consts:[[3,"baseModel","cardTitle","cardBodyId","searchInputId","tpData","filter","ddlData","searchQuery"]],template:function(e,a){1&e&&(r.\u0275\u0275elementStart(0,"naz-table",0),r.\u0275\u0275listener("searchQuery",function(c){return a.setSearchQuery(c)}),r.\u0275\u0275elementEnd()),2&e&&r.\u0275\u0275property("baseModel",a.baseModel)("cardTitle",a.cardTitle)("cardBodyId",a.cardBodyId)("searchInputId",a.searchInputId)("tpData",a.tpData)("filter",a.filter)("ddlData",a.ddlData)},dependencies:[l.NazTableComponent]});var B=n(15861);class L{constructor(e,a,d,c,g,N,E){this.aRoute=e,this.router=a,this.svBase=d,this.svPage=c,this.svSess=g,this.svAcl=N,this.svNotif=E,this.formConfig={},this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(e=>{this.svAcl.initComponent(e,this,this.svSess).then(a=>{})})}init(){this.baseModel=new o.BaseModel(p.module,p.controller),this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(p.controller,"Edit"),this.baseModel.data.subTitle="only allowed fields are editable"}update(e){var a=this;return(0,B.Z)(function*(){a.svBase.update$(e,a.baseModel.token).subscribe(d=>{a.svNotif.emitNotif({pushRecepients:o.DEFAULT_PUSH_RECEPIENTS,pushData:d,emittEvent:"push-notif",triggerEvent:"send-notif",req:null,resp:d})})})()}}L.\u0275fac=function(e){return new(e||L)(r.\u0275\u0275directiveInject(i.ActivatedRoute),r.\u0275\u0275directiveInject(i.Router),r.\u0275\u0275directiveInject(o.BaseService),r.\u0275\u0275directiveInject(l.PageService),r.\u0275\u0275directiveInject(o.SessService),r.\u0275\u0275directiveInject(o.AclService),r.\u0275\u0275directiveInject(o.NotificationService))},L.\u0275cmp=r.\u0275\u0275defineComponent({type:L,selectors:[["app-edit"]],decls:1,vars:2,consts:[[3,"baseModel","pageDescription","formConfig","updateQuery"]],template:function(e,a){1&e&&(r.\u0275\u0275elementStart(0,"naz-table-edit",0),r.\u0275\u0275listener("updateQuery",function(c){return a.update(c)}),r.\u0275\u0275elementEnd()),2&e&&r.\u0275\u0275property("baseModel",a.baseModel)("formConfig",a.formConfig)},dependencies:[l.EditComponent]});class w{constructor(e,a,d,c,g,N,E){this.aRoute=e,this.router=a,this.svBase=d,this.svPage=c,this.svAcl=g,this.svNotif=N,this.svSess=E,this.formConfig={},this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(e=>{this.svAcl.initComponent(e,this,this.svSess).then(a=>{})})}init(){this.baseModel=new o.BaseModel(p.module,p.controller),this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(p.controller,"Delete"),this.baseModel.data.subTitle="confirm before delete"}deleteItem(e){var a=this;return(0,B.Z)(function*(){a.svBase.delete$(e,a.baseModel.token).subscribe(d=>{a.svNotif.emitNotif({pushRecepients:o.DEFAULT_PUSH_RECEPIENTS,pushData:d,emittEvent:"push-notif",triggerEvent:"send-notif",req:null,resp:d})})})()}}w.\u0275fac=function(e){return new(e||w)(r.\u0275\u0275directiveInject(i.ActivatedRoute),r.\u0275\u0275directiveInject(i.Router),r.\u0275\u0275directiveInject(o.BaseService),r.\u0275\u0275directiveInject(l.PageService),r.\u0275\u0275directiveInject(o.AclService),r.\u0275\u0275directiveInject(o.NotificationService),r.\u0275\u0275directiveInject(o.SessService))},w.\u0275cmp=r.\u0275\u0275defineComponent({type:w,selectors:[["app-delete"]],decls:1,vars:2,consts:[[3,"baseModel","pageDescription","formConfig","deleteQuery"]],template:function(e,a){1&e&&(r.\u0275\u0275elementStart(0,"naz-table-delete",0),r.\u0275\u0275listener("deleteQuery",function(c){return a.deleteItem(c)}),r.\u0275\u0275elementEnd()),2&e&&r.\u0275\u0275property("baseModel",a.baseModel)("formConfig",a.formConfig)},dependencies:[l.DeleteComponent]});var U=n(96943);class M{constructor(e,a){this.svServer=e,this.env=a}createCoop$(e,a){return console.log("starting createCoop$()/01:"),this.setEnvelopeCreateCoop(e,a),console.log("createCoop$()/this.postData:",JSON.stringify(this.postData)),this.svServer.proc(this.setEnvelopeCreateCoop(e,a))}setEnvelopeCreateCoop(e,a){return console.log("starting setEnvelopeCreateCoop()/01:"),console.log("starting setEnvelopeCreateCoop()/d:",e),console.log("starting setEnvelopeCreateCoop()/d.data:",e.data),{ctx:"App",m:"Coops",c:"Coop",a:"Create",dat:{f_vals:[{data:e.data}],token:a},args:{}}}getCoop(e,a){return this.setEnvelopeCoop(e,a),console.log("getCoop()/this.postData:",JSON.stringify(this.postData)),this.svServer.proc(this.postData)}getCoop$(e,a){return console.log("CoopService::getCoop$()/q:",e),this.setEnvelopeCoop(e,a),console.log("CoopService::getCoop$()/this.postData:",JSON.stringify(this.postData)),this.svServer.proc(this.postData)}getCoopType$(e,a){return this.setEnvelopeCoopType(e,a),console.log("getCoop$()/this.postData:",JSON.stringify(this.postData)),this.svServer.proc(this.postData)}setEnvelopeCoop(e,a){this.postData={ctx:"App",m:"Coops",c:"Coop",a:"GetCount",dat:{f_vals:[{query:e}],token:a},args:{}}}setEnvelopeCoopType(e,a){this.postData={ctx:"App",m:"Coops",c:"Coop",a:"GetType",dat:{f_vals:[{query:e}],token:a},args:{}}}updateCoop$(e,a){return this.setEnvelopeUpdate(e,a),console.log("updateCoop$()/this.postData:",JSON.stringify(this.postData)),this.svServer.proc(this.postData)}setEnvelopeUpdate(e,a){this.postData={ctx:"App",m:"Coops",c:"Coop",a:"Update",dat:{f_vals:[{query:e}],token:a},args:{}}}deleteCoop$(e,a){return this.setEnvelopeDelete(e,a),console.log("deleteCoop$()/this.postData:",JSON.stringify(this.postData)),this.svServer.proc(this.postData)}setEnvelopeDelete(e,a){this.postData={ctx:"App",m:"Coops",c:"Coop",a:"Delete",dat:{f_vals:[{query:e}],token:a},args:{}}}}M.\u0275fac=function(e){return new(e||M)(r.\u0275\u0275inject(o.ServerService),r.\u0275\u0275inject("env"))},M.\u0275prov=r.\u0275\u0275defineInjectable({token:M,factory:M.\u0275fac,providedIn:"root"});var G=n(51557);class _{constructor(e,a,d,c){this.svBase=e,this.svModule=a,this.svCoop=d,this.svCoops=c}loadDdls(e,a){var d=this;return(0,B.Z)(function*(){A.token=e.token,A.step=a,A.controlName="coopTypeGuid",console.log("coops/CoopFrontService::loadDdls()/coopTypeGetQuery:",P),A.getFn$=d.svCoop.getCoopType$(P,e.token),yield d.svCoops.setDdl$(yield A).subscribe(c=>{console.log("coops/CoopFrontService::loadDdls()/ret(coopTypes):",c),a.fields.forEach(g=>{"coopTypeGuid"===g.name&&(g.ddlInfo.data=c)})})})()}}_.\u0275fac=function(e){return new(e||_)(r.\u0275\u0275inject(o.BaseService),r.\u0275\u0275inject(o.ModuleService),r.\u0275\u0275inject(M),r.\u0275\u0275inject(G.o))},_.\u0275prov=r.\u0275\u0275defineInjectable({token:_,factory:_.\u0275fac,providedIn:"root"});class R{constructor(e,a,d,c,g,N,E,K,W,H,Z,J,X){this.aRoute=e,this.router=a,this.svCoopFront=d,this.svAcl=c,this.svForm=g,this.svNotif=N,this.fb=E,this.svForms=K,this.svPage=W,this.svPush=H,this.svBase=Z,this.svSess=J,this.svCoop=X,this.newCoop=I,this.wizardModel=$,this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(e=>{this.svAcl.initComponent(e,this,this.svSess).then(a=>{a&&(this.svPush.init(this),this.baseModel.data.step.token=this.baseModel.token)})})}ngAfterViewInit(){this.svCoopFront.loadDdls(this.baseModel,this.baseModel.data.step).then(e=>{console.log("company/CreateComponent::ngAfterViewInit()/this.baseModel.data.step:",this.baseModel.data.step)})}init(){this.baseModel=new o.BaseModel(p.module,p.controller),this.baseModel.data.fields=this.svForms.filterByFieldFor(U.RC,o.FieldFor.createForm),this.baseModel.data.wizardModel=$,this.baseModel.data.step=this.svForm.filterStepsByController(this.baseModel.data.wizardModel,p.controller)[0],this.baseModel.data.form=this.fb.group(this.svForm.getFormControlConfig(U.RC)),this.baseModel.data.step.formGroup=this.baseModel.data.form,this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(p.controller,"Create")}setSelectedIcon(e){this.svForm.setSelectedIcon(e,this.baseModel,this.baseModel.data.step)}save(e){let a;switch(console.log("starting modules/moduleman/company/CreateComponent::save():"),e.controller){case"module":case"menu":break;case"Coop":console.log("modules/moduleman/company/CreateComponent::save()/this.newCoop:",this.newCoop),a=this.svCoop.createCoop$(this.newCoop,this.baseModel.token),this.svForm.saveForm(e,this.newCoop,a,this.svPush.pushEnvelop,this.svNotif)}}finishFunction(){console.log("finishing!!")}}R.\u0275fac=function(e){return new(e||R)(r.\u0275\u0275directiveInject(i.ActivatedRoute),r.\u0275\u0275directiveInject(i.Router),r.\u0275\u0275directiveInject(_),r.\u0275\u0275directiveInject(o.AclService),r.\u0275\u0275directiveInject(o.FormsService),r.\u0275\u0275directiveInject(o.NotificationService),r.\u0275\u0275directiveInject(m.FormBuilder),r.\u0275\u0275directiveInject(o.FormsService),r.\u0275\u0275directiveInject(l.PageService),r.\u0275\u0275directiveInject(o.CdPushService),r.\u0275\u0275directiveInject(o.BaseService),r.\u0275\u0275directiveInject(o.SessService),r.\u0275\u0275directiveInject(M))},R.\u0275cmp=r.\u0275\u0275defineComponent({type:R,selectors:[["app-create"]],decls:1,vars:2,consts:[[3,"baseModel","wizardModel","saveEmitter","relaySelIconEmitter"]],template:function(e,a){1&e&&(r.\u0275\u0275elementStart(0,"naz-table-create",0),r.\u0275\u0275listener("saveEmitter",function(c){return a.save(c)})("relaySelIconEmitter",function(c){return a.setSelectedIcon(c)}),r.\u0275\u0275elementEnd()),2&e&&r.\u0275\u0275property("baseModel",a.baseModel)("wizardModel",a.wizardModel)},dependencies:[l.CreateComponent]});var Q=n(47076);const k=[{path:"list",component:j},{path:"edit",component:L},{path:"delete",component:w},{path:"create",component:R},{path:"dashboard",component:Q.M}];class S{constructor(e){this.router=e,e.events.subscribe(a=>{console.log("Coops::CoopRoutingModule::constructor()/routeState:",a)})}}S.\u0275fac=function(e){return new(e||S)(r.\u0275\u0275inject(i.Router))},S.\u0275mod=r.\u0275\u0275defineNgModule({type:S}),S.\u0275inj=r.\u0275\u0275defineInjector({imports:[i.RouterModule.forChild(k),i.RouterModule]});class x{}x.\u0275fac=function(e){return new(e||x)},x.\u0275mod=r.\u0275\u0275defineNgModule({type:x}),x.\u0275inj=r.\u0275\u0275defineInjector({imports:[s.CommonModule,m.FormsModule,m.ReactiveFormsModule,v.NgbNavModule,v.NgbDropdownModule,v.NgbTooltipModule,v.NgbAccordionModule,l.NazUiModule,l.NazTableModule,l.NazCreateModule,l.NazEditModule,l.NazDeleteModule,y.Ng2SearchPipeModule,T.ArchwizardModule,b.NgToggleModule,S,t.NgSelectModule,o.BaseModule.forChild(h.N),o.CdPushModule.forChild(h.N)]})},96943:(V,F,n)=>{n.d(F,{RC:()=>h});var s=n(30533),t=n(32224),y=n(33635);const b=new t.FormsService,h=[{title:"ID",name:"userId",dbName:"user_id",type:t.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:t.ControlType.text,fieldFor:t.FieldFor.tableDisplay}],formatt:"alphanum"},{title:"Guid",name:"userGuid",dbName:"user_guid",type:t.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:t.ControlType.text,fieldFor:t.FieldFor.tableDisplay}],formatt:"alphanum",disabled:!0},{title:"Name",name:"userName",dbName:"user_name",type:t.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:t.ControlType.text,fieldFor:t.FieldFor.createForm},{controlType:t.ControlType.text,fieldFor:t.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[s.Validators.minLength(3),s.Validators.maxLength(20),s.Validators.required]]},{title:"Password",name:"password",dbName:"password",type:t.FieldType.string,fetchable:!1,updateable:!1,searchable:!1,show:!1,controls:[{controlType:t.ControlType.text,fieldFor:t.FieldFor.createForm},{controlType:t.ControlType.text,fieldFor:t.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[s.Validators.minLength(3),s.Validators.maxLength(20),s.Validators.required,s.Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$")]]},{title:"ConfirmPassword",name:"confirmPassword",dbName:"confirmPassword",type:t.FieldType.string,fetchable:!1,updateable:!1,searchable:!1,show:!1,controls:[{controlType:t.ControlType.text,fieldFor:t.FieldFor.createForm},{controlType:t.ControlType.text,fieldFor:t.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!1,formControlsConfig:["",[s.Validators.minLength(3),s.Validators.maxLength(20),s.Validators.required,s.Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$")]]},{title:"F.Name",name:"fName",dbName:"f_name",type:t.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:t.ControlType.text,fieldFor:t.FieldFor.createForm},{controlType:t.ControlType.text,fieldFor:t.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[s.Validators.minLength(3),s.Validators.maxLength(20),s.Validators.required]]},{title:"M.Name",name:"mName",dbName:"m_name",type:t.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:t.ControlType.text,fieldFor:t.FieldFor.createForm},{controlType:t.ControlType.text,fieldFor:t.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[s.Validators.minLength(3),s.Validators.maxLength(20),s.Validators.required]]},{title:"L.Name",name:"lName",dbName:"l_name",type:t.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:t.ControlType.text,fieldFor:t.FieldFor.createForm},{controlType:t.ControlType.text,fieldFor:t.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[s.Validators.minLength(3),s.Validators.maxLength(20),s.Validators.required]]},{title:"NID",name:"nationalId",dbName:"national_id",type:t.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:t.ControlType.text,fieldFor:t.FieldFor.createForm},{controlType:t.ControlType.text,fieldFor:t.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[s.Validators.minLength(3),s.Validators.maxLength(20),s.Validators.required]]},{title:"PID",name:"passportId",dbName:"passport_id",type:t.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:t.ControlType.text,fieldFor:t.FieldFor.createForm},{controlType:t.ControlType.text,fieldFor:t.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[s.Validators.minLength(3),s.Validators.maxLength(20),s.Validators.required]]},{title:"Postal",name:"postalAddress",dbName:"postal_address",type:t.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:t.ControlType.text,fieldFor:t.FieldFor.createForm},{controlType:t.ControlType.text,fieldFor:t.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[s.Validators.minLength(1),s.Validators.maxLength(20),s.Validators.required]]},{title:"Mobile",name:"mobile",dbName:"mobile",type:t.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:t.ControlType.text,fieldFor:t.FieldFor.createForm},{controlType:t.ControlType.text,fieldFor:t.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[s.Validators.minLength(8),s.Validators.maxLength(14),s.Validators.required]]},{title:"Email",name:"email",dbName:"email",type:t.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:t.ControlType.text,fieldFor:t.FieldFor.createForm},{controlType:t.ControlType.text,fieldFor:t.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[s.Validators.pattern(t.EMAIL_PATTERN),s.Validators.required]]},{title:"Company",name:"companyId",dbName:"company_id",type:t.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:t.ControlType.text,fieldFor:t.FieldFor.tableDisplay},{controlType:t.ControlType.searchDropDown,fieldFor:t.FieldFor.createForm}],ddlInfo:{selData$:(0,y.of)([]),selValueField:"companyName",selIndex:"companyId",selPlaceholder:"...Choose",data:null},formatt:"text",disabled:!0,savable:!0,formControlsConfig:["",[s.Validators.minLength(3),s.Validators.maxLength(42),s.Validators.required]]},{title:"Gender",name:"gender",dbName:"gender",type:t.FieldType.boolean,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:t.ControlType.status,fieldFor:t.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0},{title:"Enabled",name:"userEnabled",dbName:"user_enabled",type:t.FieldType.boolean,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:t.ControlType.status,fieldFor:t.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0},{title:"Action",name:"action",type:t.FieldType.action,fetchable:!1,show:!0,controls:[{controlType:t.ControlType.action,fieldFor:t.FieldFor.tableDisplay},{controlType:t.ControlType.action,fieldFor:t.FieldFor.createForm}],Fn:"createUser"},{title:"Search",name:"iconSearch",type:t.FieldType.any,controls:[],formControlsConfig:["",[]]}];b.filterByFieldFor(h,t.FieldFor.createForm)},51557:(V,F,n)=>{n.d(F,{o:()=>h});var s=n(33635),t=n(87675),y=n(32224);class h{constructor(l,i,f){this.svMenu=l,this.svNotif=i,this.svForm=f,this.ddlData={config:{suppressScrollX:!0,wheelSpeed:.3},header:{title:{lable:"Notifications",cls:"",action:null},sideLink:{lable:"View All",cls:"",action:null}},footer:{label:"View All",icon:"",action:null},data:[{label:"item 1",description:"If several languages coalesce the grammar",time:"3 min ago"},{label:"item 2",description:"It will seem like simplified English",time:"1 hr ago"},{label:"item 3",description:"If several languages coalesce the grammar",time:"4 hr ago"}]},this.pushEnvelop={pushRecepients:[],pushData:null,emittEvent:"push-notif",triggerEvent:"send-notif",req:null,resp:null},this.numericNumberReg1="^-?[0-9]\\d*(\\.\\d{1,2})?$",this.numericNumberReg2="/^[0-9]d*$/",this.numericNumberReg3=new RegExp(/^-?[0-9]\\d*(\\.\\d{1,2})?$/,"i"),this.numericNumberReg4=new RegExp(/^[0-9]\d*$/,"i")}setIconsData$(l,i){l.fields.map((f,D)=>{f.name===i&&(l.fields[D].ddlInfo.selData$=(0,s.of)(this.ddlData),l.fields[D].ddlInfo.selIndex="iconId",l.fields[D].ddlInfo.selValueField="iconName",l.fields[D].ddlInfo.selPlaceholder="...Choose")})}setDdl$(l){if(l.token){const i=new s.Subject;let f=[];return l.getFn$.subscribe(D=>{const C=D;console.log("ModulemanService::setDdl$()/response:",C),console.log("ModulemanService::setDdl$()/ddlCtx.step.fields:",l.step),C.app_state.success?(f=C.data.items,l.step.fields.map((I,p)=>{console.log("ModulemanService::setDdl$()/f.name1:",I.name),console.log("ModulemanService::setDdl$()/ddlCtx.controlName:",l.controlName),console.log("ModulemanService::setDdl$()/f:",I),I.name===l.controlName&&"ddlInfo"in I&&(console.log("ModulemanService::setDdl$()/f.name2:",I.name),l.step.fields[p].ddlInfo.selData$=(0,s.of)(C.data.items),l.step.fields[p].ddlInfo.selIndex=l.selIndex,l.step.fields[p].ddlInfo.selValueField=l.selValueField,l.step.fields[p].ddlInfo.selPlaceholder="...Choose")}),i.next(f)):(this.pushEnvelop.pushData=C,this.pushEnvelop.resp=C,this.svNotif.emitNotif(this.pushEnvelop),i.next(f))}),i.asObservable()}return(0,s.of)([])}}h.\u0275fac=function(l){return new(l||h)(t.\u0275\u0275inject(y.MenuService),t.\u0275\u0275inject(y.NotificationService),t.\u0275\u0275inject(y.FormsService))},h.\u0275prov=t.\u0275\u0275defineInjectable({token:h,factory:h.\u0275fac,providedIn:"root"})},7444:(V,F,n)=>{n.d(F,{N:()=>b});const s="https://cd-api.co.ke",b={appId:"",production:!1,apiEndpoint:`${s}:3001/api`,sioEndpoint:`${s}:3002`,wsEndpoint:"ws://cd-api.co.ke:3000",wsMode:"sio",pushConfig:{sio:{enabled:!0},wss:{enabled:!1},pusher:{enabled:!0,apiKey:"DtVRY9V5j41KwSxKrd8L_dRijUJh9gVcqwBH5wb96no",options:{cluster:"ap2",forceTLS:!0,userAuthentication:{endpoint:"https://cd-api.co.ke:3002/pusher/auth",transport:"ajax",params:{},headers:{},includeCredentials:!0,customHandler:null},channelAuthorization:{endpoint:"https://cd-api.co.ke:3002/pusher/auth"},authEndpoint:"https://cd-api.co.ke:3002/pusher/auth"}}},CD_PORT:3001,consumerToken:"B0B3DA99-1859-A499-90F6-1E3F69575DCD",USER_RESOURCES:"http://routed-93/user-resources",apiHost:"https://cd-api.co.ke",sioHost:"https://cd-api.co.ke",shellHost:"https://asdap.net",consumer:"",clientAppGuid:"ca0fe39f-92b2-484d-91ef-487d4fc462a2",clientContext:{entity:"ASDAP",clientAppId:2,consumerToken:"B0B3DA99-1859-A499-90F6-1E3F69575DCD"},clientAppId:2,SOCKET_IO_PORT:3002,defaultauth:"cd-auth",initialPage:"dashboard",mfManifestPath:"/assets/mf.manifest.json",apiOptions:{headers:{"Content-Type":"application/json"}},sioOptions:{path:"/socket.io",transports:["websocket","polling"],secure:!0},firebaseConfig:{apiKey:"",authDomain:"",databaseURL:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:"",measurementId:""}}},15861:(V,F,n)=>{function s(t,v,y,T,b,h,o){try{var l=t[h](o),i=l.value}catch(f){return void y(f)}l.done?v(i):Promise.resolve(i).then(T,b)}function m(t){return function(){var v=this,y=arguments;return new Promise(function(T,b){var h=t.apply(v,y);function o(i){s(h,T,b,o,l,"next",i)}function l(i){s(h,T,b,o,l,"throw",i)}o(void 0)})}}n.d(F,{Z:()=>m})}}]);