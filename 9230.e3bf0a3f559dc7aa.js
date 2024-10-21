(self.webpackChunkcoops=self.webpackChunkcoops||[]).push([[9230],{39230:(P,F,i)=>{i.r(F),i.d(F,{CoopMemberModule:()=>A});var l=i(35228),e=i(30533),o=i(83781),y=i(76380),f=i(92618),g=i(59707),C=i(15006),m=i(7444),r=i(47512),n=i(61052),d=i(37011),b=i(33635);const T=new r.FormsService,v=[{title:"ID",name:"coopMemberId",dbName:"coop_member_id",type:r.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:r.ControlType.text,fieldFor:r.FieldFor.tableDisplay}],formatt:"alphanum"},{title:"Guid",name:"coopMemberGuid",dbName:"coop_member_guid",type:r.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:r.ControlType.text,fieldFor:r.FieldFor.tableDisplay}],formatt:"alphanum",disabled:!0},{title:"Name",name:"coopMemberName",dbName:"coop_member_name",type:r.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:r.ControlType.text,fieldFor:r.FieldFor.createForm},{controlType:r.ControlType.text,fieldFor:r.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[e.Validators.minLength(3),e.Validators.maxLength(80),e.Validators.required]]},{title:"CoopType",name:"coopMemberTypeGuid",dbName:"coop_member_type_guid",type:r.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:r.ControlType.text,fieldFor:r.FieldFor.tableDisplay},{controlType:r.ControlType.searchDropDown,fieldFor:r.FieldFor.createForm}],ddlInfo:{selData$:(0,b.of)([]),selValueField:"coopMemberName",selIndex:"coopMemberTypeGuid",selPlaceholder:"...Choose",data:null},formatt:"text",disabled:!0,savable:!0,formControlsConfig:["",[e.Validators.minLength(3),e.Validators.maxLength(42),e.Validators.required]]},{title:"User",name:"userId",dbName:"user_id",type:r.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:r.ControlType.text,fieldFor:r.FieldFor.tableDisplay},{controlType:r.ControlType.searchDropDown,fieldFor:r.FieldFor.createForm}],ddlInfo:{selData$:(0,b.of)([]),selValueField:"userName",selIndex:"userId",selPlaceholder:"...Choose",data:null},formatt:"text",disabled:!0,savable:!0,formControlsConfig:["",[e.Validators.minLength(3),e.Validators.maxLength(42),e.Validators.required]]},{title:"Coop",name:"coopId",dbName:"coop_id",type:r.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:r.ControlType.text,fieldFor:r.FieldFor.tableDisplay},{controlType:r.ControlType.searchDropDown,fieldFor:r.FieldFor.createForm}],ddlInfo:{selData$:(0,b.of)([]),selValueField:"coopName",selIndex:"coopId",selPlaceholder:"...Choose",data:null},formatt:"text",disabled:!0,savable:!0,formControlsConfig:["",[e.Validators.minLength(3),e.Validators.maxLength(42),e.Validators.required]]},{title:"MemberProfile",name:"coopMemberProfile",dbName:"coop_member_profile",type:r.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:r.ControlType.text,fieldFor:r.FieldFor.createForm},{controlType:r.ControlType.text,fieldFor:r.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[e.Validators.minLength(3),e.Validators.maxLength(80),e.Validators.required]]},{title:"Enabled",name:"coopMemberEnabled",dbName:"coop_member_enabled",type:r.FieldType.boolean,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:r.ControlType.status,fieldFor:r.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0},{title:"Action",name:"action",type:r.FieldType.action,fetchable:!1,show:!0,controls:[{controlType:r.ControlType.action,fieldFor:r.FieldFor.tableDisplay},{controlType:r.ControlType.action,fieldFor:r.FieldFor.createForm}],Fn:"createCoopMember"},{title:"Search",name:"iconSearch",type:r.FieldType.any,controls:[],formControlsConfig:["",[]]}],D={data:{},valid:null,ctx:"App"},u={token:"",stepTitle:"Create CoopMember",stepItems:{nextButtonId:"stepToMenu"},tabPaneId:"coopMemberInfo",cardTitle:"CoopMember Information",cardTitleDesc:"Fill all information below",module:"Coops",controller:"CoopMember",formGroup:null,fields:T.filterByFieldFor(v,r.FieldFor.createForm)},B={name:"CoopMember Wizard",steps:[u]},E={select:["coopMemberTypeId","coopMemberTypeName","coopMemberTypeGuid"],where:{}},I={getFn$:null,selIndex:E.select[2],selValueField:E.select[1],fetchFields:E.select,step:null,token:null,controlName:"coopMemberTypeGuid"},$=[{menuName:"create",menuGuid:"bd9b5bda5ab",navLocation:"/moduleman/company/create",actionType:r.ActionType.navigate},{menuName:"dashboard",menuGuid:"d27294db59c1",navLocation:"/moduleman/company/dashboard",actionType:r.ActionType.navigate}];var s=i(87675);class w{constructor(t,a,c,p,M,N,S){this.aRoute=t,this.router=a,this.svBase=c,this.svNazTable=p,this.svAcl=M,this.svPage=N,this.svSess=S,this.dSource={fields:[],data:[]},this.cardTitle="CoopMember",this.cardBodyId="coopMember",this.searchInputId="inputSearchCoopMember",this.filter={},this.tpData=r.DEFAULT_TPD,this.ddlData=$,this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(t=>{t&&this.svAcl.initComponent(t,this,this.svSess).then(a=>{})})}init(){this.baseModel=new r.BaseModel(u.module,u.controller),this.svBase.module=u.module,this.svBase.controller=u.controller,this.baseModel.data.fields=v.filter(t=>t.fetchable||t.type===r.FieldType.action),this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(u.controller,"List"),this.sQuery=this.svNazTable.initSQuery(this),this.dsEmittData=this.svNazTable.initEmittData(this)}execQuery(t){this.svNazTable.execQuery(t,this.svBase.getPaged$(this.sQuery,this.baseModel.sess.cd_token,D.ctx),this)}setSearchQuery(t){this.sQuery=t.sQuery,this.execQuery(t)}getSelect(){return this.baseModel.data.fields.filter(t=>t.fetchable).map(t=>t.name)}}w.\u0275fac=function(t){return new(t||w)(s.\u0275\u0275directiveInject(d.ActivatedRoute),s.\u0275\u0275directiveInject(d.Router),s.\u0275\u0275directiveInject(r.BaseService),s.\u0275\u0275directiveInject(n.NazTableService),s.\u0275\u0275directiveInject(r.AclService),s.\u0275\u0275directiveInject(n.PageService),s.\u0275\u0275directiveInject(r.SessService))},w.\u0275cmp=s.\u0275\u0275defineComponent({type:w,selectors:[["app-list"]],viewQuery:function(t,a){if(1&t&&s.\u0275\u0275viewQuery(n.NazTableComponent,5),2&t){let c;s.\u0275\u0275queryRefresh(c=s.\u0275\u0275loadQuery())&&(a.nazTable=c.first)}},decls:2,vars:0,template:function(t,a){1&t&&(s.\u0275\u0275elementStart(0,"p"),s.\u0275\u0275text(1,"coop-member-is-working"),s.\u0275\u0275elementEnd())}});var U=i(15861);class V{constructor(t,a,c,p,M,N,S){this.aRoute=t,this.router=a,this.svBase=c,this.svPage=p,this.svSess=M,this.svAcl=N,this.svNotif=S,this.formConfig={},this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(t=>{this.svAcl.initComponent(t,this,this.svSess).then(a=>{})})}init(){this.baseModel=new r.BaseModel(u.module,u.controller),this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(u.controller,"Edit"),this.baseModel.data.subTitle="only allowed fields are editable"}update(t){var a=this;return(0,U.Z)(function*(){a.svBase.update$(t,a.baseModel.token).subscribe(c=>{a.svNotif.emitNotif({pushRecepients:r.DEFAULT_PUSH_RECEPIENTS,pushData:c,emittEvent:"push-notif",triggerEvent:"send-notif",req:null,resp:c})})})()}}V.\u0275fac=function(t){return new(t||V)(s.\u0275\u0275directiveInject(d.ActivatedRoute),s.\u0275\u0275directiveInject(d.Router),s.\u0275\u0275directiveInject(r.BaseService),s.\u0275\u0275directiveInject(n.PageService),s.\u0275\u0275directiveInject(r.SessService),s.\u0275\u0275directiveInject(r.AclService),s.\u0275\u0275directiveInject(r.NotificationService))},V.\u0275cmp=s.\u0275\u0275defineComponent({type:V,selectors:[["app-edit"]],decls:1,vars:2,consts:[[3,"baseModel","pageDescription","formConfig","updateQuery"]],template:function(t,a){1&t&&(s.\u0275\u0275elementStart(0,"naz-table-edit",0),s.\u0275\u0275listener("updateQuery",function(p){return a.update(p)}),s.\u0275\u0275elementEnd()),2&t&&s.\u0275\u0275property("baseModel",a.baseModel)("formConfig",a.formConfig)},dependencies:[n.EditComponent]});class j{constructor(t,a,c,p,M,N,S){this.aRoute=t,this.router=a,this.svBase=c,this.svPage=p,this.svAcl=M,this.svNotif=N,this.svSess=S,this.formConfig={},this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(t=>{this.svAcl.initComponent(t,this,this.svSess).then(a=>{})})}init(){this.baseModel=new r.BaseModel(u.module,u.controller),this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(u.controller,"Delete"),this.baseModel.data.subTitle="confirm before delete"}deleteItem(t){var a=this;return(0,U.Z)(function*(){a.svBase.delete$(t,a.baseModel.token).subscribe(c=>{a.svNotif.emitNotif({pushRecepients:r.DEFAULT_PUSH_RECEPIENTS,pushData:c,emittEvent:"push-notif",triggerEvent:"send-notif",req:null,resp:c})})})()}}j.\u0275fac=function(t){return new(t||j)(s.\u0275\u0275directiveInject(d.ActivatedRoute),s.\u0275\u0275directiveInject(d.Router),s.\u0275\u0275directiveInject(r.BaseService),s.\u0275\u0275directiveInject(n.PageService),s.\u0275\u0275directiveInject(r.AclService),s.\u0275\u0275directiveInject(r.NotificationService),s.\u0275\u0275directiveInject(r.SessService))},j.\u0275cmp=s.\u0275\u0275defineComponent({type:j,selectors:[["app-delete"]],decls:1,vars:2,consts:[[3,"baseModel","pageDescription","formConfig","deleteQuery"]],template:function(t,a){1&t&&(s.\u0275\u0275elementStart(0,"naz-table-delete",0),s.\u0275\u0275listener("deleteQuery",function(p){return a.deleteItem(p)}),s.\u0275\u0275elementEnd()),2&t&&s.\u0275\u0275property("baseModel",a.baseModel)("formConfig",a.formConfig)},dependencies:[n.DeleteComponent]});var G=i(96943),k=i(79989),Q=i(51557);class x{constructor(t,a,c,p){this.svBase=t,this.svModule=a,this.svCompany=c,this.svCoops=p}loadDdls(t,a){var c=this;return(0,U.Z)(function*(){k.tL.token=t.token,I.token=t.token,I.step=a,I.controlName="coopMemberTypeGuid",console.log("coops/CompanyFrontService::loadDdls()/coopMemberTypeGetQuery:",E),I.getFn$=c.svCompany.getCompanyType$(E,t.token),yield c.svCoops.setDdl$(yield I).subscribe(p=>{console.log("coops/CompanyFrontService::loadDdls()/ret(coopMemberTypes):",p),a.fields.forEach(M=>{"coopMemberTypeGuid"===M.name&&(M.ddlInfo.data=p)})})})()}}x.\u0275fac=function(t){return new(t||x)(s.\u0275\u0275inject(r.BaseService),s.\u0275\u0275inject(r.ModuleService),s.\u0275\u0275inject(r.CompanyService),s.\u0275\u0275inject(Q.o))},x.\u0275prov=s.\u0275\u0275defineInjectable({token:x,factory:x.\u0275fac,providedIn:"root"});class _{constructor(t,a){this.svServer=t,this.env=a}createCoopMember$(t,a){return console.log("starting createCoopMember$()/01:"),this.setEnvelopeCreateCoopMember(t,a),console.log("createCoopMember$()/this.postData:",JSON.stringify(this.postData)),this.svServer.proc(this.setEnvelopeCreateCoopMember(t,a))}setEnvelopeCreateCoopMember(t,a){return console.log("starting setEnvelopeCreateCoopMember()/01:"),console.log("starting setEnvelopeCreateCoopMember()/d:",t),console.log("starting setEnvelopeCreateCoopMember()/d.data:",t.data),{ctx:"App",m:"Coops",c:"CoopMember",a:"Create",dat:{f_vals:[{data:t.data}],token:a},args:{}}}getCoopMember(t,a){return this.setEnvelopeCoopMember(t,a),console.log("getCoopMember()/this.postData:",JSON.stringify(this.postData)),this.svServer.proc(this.postData)}getCoopMember$(t,a){return console.log("CoopMemberService::getCoopMember$()/q:",t),this.setEnvelopeCoopMember(t,a),console.log("CoopMemberService::getCoopMember$()/this.postData:",JSON.stringify(this.postData)),this.svServer.proc(this.postData)}getCoopMemberType$(t,a){return this.setEnvelopeCoopMemberType(t,a),console.log("getCoopMember$()/this.postData:",JSON.stringify(this.postData)),this.svServer.proc(this.postData)}setEnvelopeCoopMember(t,a){this.postData={ctx:"App",m:"Coops",c:"CoopMember",a:"GetCount",dat:{f_vals:[{query:t}],token:a},args:{}}}setEnvelopeCoopMemberType(t,a){this.postData={ctx:"App",m:"Coops",c:"CoopMember",a:"GetType",dat:{f_vals:[{query:t}],token:a},args:{}}}updateCoopMember$(t,a){return this.setEnvelopeUpdate(t,a),console.log("updateCoopMember$()/this.postData:",JSON.stringify(this.postData)),this.svServer.proc(this.postData)}setEnvelopeUpdate(t,a){this.postData={ctx:"App",m:"Coops",c:"CoopMember",a:"Update",dat:{f_vals:[{query:t}],token:a},args:{}}}deleteCoopMember$(t,a){return this.setEnvelopeDelete(t,a),console.log("deleteCoopMember$()/this.postData:",JSON.stringify(this.postData)),this.svServer.proc(this.postData)}setEnvelopeDelete(t,a){this.postData={ctx:"App",m:"Coops",c:"CoopMember",a:"Delete",dat:{f_vals:[{query:t}],token:a},args:{}}}}_.\u0275fac=function(t){return new(t||_)(s.\u0275\u0275inject(r.ServerService),s.\u0275\u0275inject("env"))},_.\u0275prov=s.\u0275\u0275defineInjectable({token:_,factory:_.\u0275fac,providedIn:"root"});class O{constructor(t,a,c,p,M,N,S,H,Z,J,X,q,Y){this.aRoute=t,this.router=a,this.svCoopMemberFront=c,this.svAcl=p,this.svForm=M,this.svNotif=N,this.fb=S,this.svForms=H,this.svPage=Z,this.svPush=J,this.svBase=X,this.svSess=q,this.svCoopMember=Y,this.newCoopMember=D,this.wizardModel=B,this.init()}ngOnInit(){this.aRoute.queryParams.subscribe(t=>{this.svAcl.initComponent(t,this,this.svSess).then(a=>{a&&(this.svPush.init(this),this.baseModel.data.step.token=this.baseModel.token)})})}ngAfterViewInit(){this.svCoopMemberFront.loadDdls(this.baseModel,this.baseModel.data.step).then(t=>{console.log("company/CreateComponent::ngAfterViewInit()/this.baseModel.data.step:",this.baseModel.data.step)})}init(){this.baseModel=new r.BaseModel(u.module,u.controller),this.baseModel.data.fields=this.svForms.filterByFieldFor(G.RC,r.FieldFor.createForm),this.baseModel.data.wizardModel=B,this.baseModel.data.step=this.svForm.filterStepsByController(this.baseModel.data.wizardModel,u.controller)[0],this.baseModel.data.form=this.fb.group(this.svForm.getFormControlConfig(G.RC)),this.baseModel.data.step.formGroup=this.baseModel.data.form,this.baseModel.breadCrumbItems=this.svPage.setBreadCrumbs(u.controller,"Create")}setSelectedIcon(t){this.svForm.setSelectedIcon(t,this.baseModel,this.baseModel.data.step)}save(t){let a;switch(console.log("starting modules/moduleman/company/CreateComponent::save():"),t.controller){case"module":case"menu":break;case"CoopMember":console.log("coops/src/app/modules/coops/coop-member/create/CreateComponent::save()/this.newCoopMember:",this.newCoopMember),a=this.svCoopMember.createCoopMember$(this.newCoopMember,this.baseModel.token),this.svForm.saveForm(t,this.newCoopMember,a,this.svPush.pushEnvelop,this.svNotif)}}finishFunction(){console.log("finishing!!")}}O.\u0275fac=function(t){return new(t||O)(s.\u0275\u0275directiveInject(d.ActivatedRoute),s.\u0275\u0275directiveInject(d.Router),s.\u0275\u0275directiveInject(x),s.\u0275\u0275directiveInject(r.AclService),s.\u0275\u0275directiveInject(r.FormsService),s.\u0275\u0275directiveInject(r.NotificationService),s.\u0275\u0275directiveInject(e.FormBuilder),s.\u0275\u0275directiveInject(r.FormsService),s.\u0275\u0275directiveInject(n.PageService),s.\u0275\u0275directiveInject(r.CdPushService),s.\u0275\u0275directiveInject(r.BaseService),s.\u0275\u0275directiveInject(r.SessService),s.\u0275\u0275directiveInject(_))},O.\u0275cmp=s.\u0275\u0275defineComponent({type:O,selectors:[["app-create"]],decls:1,vars:2,consts:[[3,"baseModel","wizardModel","saveEmitter","relaySelIconEmitter"]],template:function(t,a){1&t&&(s.\u0275\u0275elementStart(0,"naz-table-create",0),s.\u0275\u0275listener("saveEmitter",function(p){return a.save(p)})("relaySelIconEmitter",function(p){return a.setSelectedIcon(p)}),s.\u0275\u0275elementEnd()),2&t&&s.\u0275\u0275property("baseModel",a.baseModel)("wizardModel",a.wizardModel)},dependencies:[n.CreateComponent]});var W=i(47076);const K=[{path:"list",component:w},{path:"edit",component:V},{path:"delete",component:j},{path:"create",component:O},{path:"dashboard",component:W.M}];class L{constructor(t){this.router=t,t.events.subscribe(a=>{console.log("Coops::CoopMemberRoutingModule::constructor()/routeState:",a)})}}L.\u0275fac=function(t){return new(t||L)(s.\u0275\u0275inject(d.Router))},L.\u0275mod=s.\u0275\u0275defineNgModule({type:L}),L.\u0275inj=s.\u0275\u0275defineInjector({imports:[d.RouterModule.forChild(K),d.RouterModule]});class A{}A.\u0275fac=function(t){return new(t||A)},A.\u0275mod=s.\u0275\u0275defineNgModule({type:A}),A.\u0275inj=s.\u0275\u0275defineInjector({imports:[l.CommonModule,e.FormsModule,e.ReactiveFormsModule,y.NgbNavModule,y.NgbDropdownModule,y.NgbTooltipModule,y.NgbAccordionModule,n.NazUiModule,n.NazTableModule,n.NazCreateModule,n.NazEditModule,n.NazDeleteModule,f.Ng2SearchPipeModule,g.ArchwizardModule,C.NgToggleModule,L,o.NgSelectModule,r.BaseModule.forChild(m.N),r.CdPushModule.forChild(m.N)]})},96943:(P,F,i)=>{i.d(F,{RC:()=>m});var l=i(30533),o=i(47512),f=i(33635);const C=new o.FormsService,m=[{title:"ID",name:"userId",dbName:"user_id",type:o.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay}],formatt:"alphanum"},{title:"Guid",name:"userGuid",dbName:"user_guid",type:o.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay}],formatt:"alphanum",disabled:!0},{title:"Name",name:"userName",dbName:"user_name",type:o.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.createForm},{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[l.Validators.minLength(3),l.Validators.maxLength(20),l.Validators.required]]},{title:"Password",name:"password",dbName:"password",type:o.FieldType.string,fetchable:!1,updateable:!1,searchable:!1,show:!1,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.createForm},{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[l.Validators.minLength(3),l.Validators.maxLength(20),l.Validators.required,l.Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$")]]},{title:"ConfirmPassword",name:"confirmPassword",dbName:"confirmPassword",type:o.FieldType.string,fetchable:!1,updateable:!1,searchable:!1,show:!1,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.createForm},{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!1,formControlsConfig:["",[l.Validators.minLength(3),l.Validators.maxLength(20),l.Validators.required,l.Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$")]]},{title:"F.Name",name:"fName",dbName:"f_name",type:o.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.createForm},{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[l.Validators.minLength(3),l.Validators.maxLength(20),l.Validators.required]]},{title:"M.Name",name:"mName",dbName:"m_name",type:o.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.createForm},{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[l.Validators.minLength(3),l.Validators.maxLength(20),l.Validators.required]]},{title:"L.Name",name:"lName",dbName:"l_name",type:o.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.createForm},{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[l.Validators.minLength(3),l.Validators.maxLength(20),l.Validators.required]]},{title:"NID",name:"nationalId",dbName:"national_id",type:o.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.createForm},{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[l.Validators.minLength(3),l.Validators.maxLength(20),l.Validators.required]]},{title:"PID",name:"passportId",dbName:"passport_id",type:o.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.createForm},{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[l.Validators.minLength(3),l.Validators.maxLength(20),l.Validators.required]]},{title:"Postal",name:"postalAddress",dbName:"postal_address",type:o.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.createForm},{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[l.Validators.minLength(1),l.Validators.maxLength(20),l.Validators.required]]},{title:"Mobile",name:"mobile",dbName:"mobile",type:o.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.createForm},{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[l.Validators.minLength(8),l.Validators.maxLength(14),l.Validators.required]]},{title:"Email",name:"email",dbName:"email",type:o.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.createForm},{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[l.Validators.pattern(o.EMAIL_PATTERN),l.Validators.required]]},{title:"Company",name:"companyId",dbName:"company_id",type:o.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:o.ControlType.text,fieldFor:o.FieldFor.tableDisplay},{controlType:o.ControlType.searchDropDown,fieldFor:o.FieldFor.createForm}],ddlInfo:{selData$:(0,f.of)([]),selValueField:"companyName",selIndex:"companyId",selPlaceholder:"...Choose",data:null},formatt:"text",disabled:!0,savable:!0,formControlsConfig:["",[l.Validators.minLength(3),l.Validators.maxLength(42),l.Validators.required]]},{title:"Gender",name:"gender",dbName:"gender",type:o.FieldType.boolean,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:o.ControlType.status,fieldFor:o.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0},{title:"Enabled",name:"userEnabled",dbName:"user_enabled",type:o.FieldType.boolean,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:o.ControlType.status,fieldFor:o.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0},{title:"Action",name:"action",type:o.FieldType.action,fetchable:!1,show:!0,controls:[{controlType:o.ControlType.action,fieldFor:o.FieldFor.tableDisplay},{controlType:o.ControlType.action,fieldFor:o.FieldFor.createForm}],Fn:"createUser"},{title:"Search",name:"iconSearch",type:o.FieldType.any,controls:[],formControlsConfig:["",[]]}];C.filterByFieldFor(m,o.FieldFor.createForm)},51557:(P,F,i)=>{i.d(F,{o:()=>m});var l=i(33635),o=i(87675),f=i(47512);class m{constructor(n,d,b){this.svMenu=n,this.svNotif=d,this.svForm=b,this.ddlData={config:{suppressScrollX:!0,wheelSpeed:.3},header:{title:{lable:"Notifications",cls:"",action:null},sideLink:{lable:"View All",cls:"",action:null}},footer:{label:"View All",icon:"",action:null},data:[{label:"item 1",description:"If several languages coalesce the grammar",time:"3 min ago"},{label:"item 2",description:"It will seem like simplified English",time:"1 hr ago"},{label:"item 3",description:"If several languages coalesce the grammar",time:"4 hr ago"}]},this.pushEnvelop={pushRecepients:[],pushData:null,emittEvent:"push-notif",triggerEvent:"send-notif",req:null,resp:null},this.numericNumberReg1="^-?[0-9]\\d*(\\.\\d{1,2})?$",this.numericNumberReg2="/^[0-9]d*$/",this.numericNumberReg3=new RegExp(/^-?[0-9]\\d*(\\.\\d{1,2})?$/,"i"),this.numericNumberReg4=new RegExp(/^[0-9]\d*$/,"i")}setIconsData$(n,d){n.fields.map((b,T)=>{b.name===d&&(n.fields[T].ddlInfo.selData$=(0,l.of)(this.ddlData),n.fields[T].ddlInfo.selIndex="iconId",n.fields[T].ddlInfo.selValueField="iconName",n.fields[T].ddlInfo.selPlaceholder="...Choose")})}setDdl$(n){if(n.token){const d=new l.Subject;let b=[];return n.getFn$.subscribe(T=>{const v=T;console.log("ModulemanService::setDdl$()/response:",v),console.log("ModulemanService::setDdl$()/ddlCtx.step.fields:",n.step),v.app_state.success?(b=v.data.items,n.step.fields.map((D,u)=>{console.log("ModulemanService::setDdl$()/f.name1:",D.name),console.log("ModulemanService::setDdl$()/ddlCtx.controlName:",n.controlName),console.log("ModulemanService::setDdl$()/f:",D),D.name===n.controlName&&"ddlInfo"in D&&(console.log("ModulemanService::setDdl$()/f.name2:",D.name),n.step.fields[u].ddlInfo.selData$=(0,l.of)(v.data.items),n.step.fields[u].ddlInfo.selIndex=n.selIndex,n.step.fields[u].ddlInfo.selValueField=n.selValueField,n.step.fields[u].ddlInfo.selPlaceholder="...Choose")}),d.next(b)):(this.pushEnvelop.pushData=v,this.pushEnvelop.resp=v,this.svNotif.emitNotif(this.pushEnvelop),d.next(b))}),d.asObservable()}return(0,l.of)([])}}m.\u0275fac=function(n){return new(n||m)(o.\u0275\u0275inject(f.MenuService),o.\u0275\u0275inject(f.NotificationService),o.\u0275\u0275inject(f.FormsService))},m.\u0275prov=o.\u0275\u0275defineInjectable({token:m,factory:m.\u0275fac,providedIn:"root"})},79989:(P,F,i)=>{i.d(F,{tL:()=>$});var l=i(30533),e=i(47512),o=i(33635);const y=new e.FormsService,f=[{title:"ID",name:"menuId",dbName:"menu_id",type:e.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"number",disabled:!0,formControlsConfig:["",[]]},{title:"Guid",name:"menuGuid",dbName:"menu_guid",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"alphanum",disabled:!0},{title:"Label",name:"menuLabel",dbName:"menu_label",type:e.FieldType.string,fetchable:!0,updateable:!1,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0},{title:"Name",name:"menuName",dbName:"menu_name",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[l.Validators.minLength(3),l.Validators.maxLength(25),l.Validators.required]]},{title:"MenuParent",name:"menuParentId",dbName:"menu_parent_id",type:e.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.searchDropDown,fieldFor:e.FieldFor.createForm}],ddlInfo:{selData$:(0,o.of)([]),selValueField:"menuName",selIndex:"menuId",selPlaceholder:"...Choose",data:null},formatt:"number",disabled:!0,savable:!0,formControlsConfig:["",[l.Validators.required]]},{title:"ModuleParent",name:"moduleId",dbName:"module_id",primaryField:"menuParent",type:e.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.searchDropDown,fieldFor:e.FieldFor.createForm}],ddlInfo:{selData$:(0,o.of)([]),selValueField:"moduleName",selIndex:"moduleId",selPlaceholder:"...Choose",data:null},formatt:"number",disabled:!0,savable:!0,formControlsConfig:["",[l.Validators.required]]},{title:"Description",name:"menuDescription",dbName:"menu_description",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.textArea,fieldFor:e.FieldFor.createForm}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[l.Validators.minLength(0),l.Validators.maxLength(300)]]},{title:"Icon",name:"menuIcon",dbName:"menu_icon",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.ddlIcons,fieldFor:e.FieldFor.createForm}],ddlInfo:{selData$:(0,o.of)([]),selValueField:"iconName",selIndex:"iconId",selPlaceholder:"...choose",ddlIconId:"iconDdlIdX",searchInputId:"searchInputIdX",searchInputName:"searchInputNameX",selectedValue:"",data:null},formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[l.Validators.minLength(2),l.Validators.maxLength(50),l.Validators.required]]},{title:"Path",name:"path",dbName:"path",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm}],formatt:"text",formControlsConfig:["",[l.Validators.minLength(3),l.Validators.maxLength(100),l.Validators.required]]},{title:"Action",name:"action",type:e.FieldType.action,fetchable:!1,show:!0,controls:[{controlType:e.ControlType.action,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.action,fieldFor:e.FieldFor.createForm}],Fn:"createMenu"},{title:"Search",name:"iconSearch",type:e.FieldType.any,controls:[],formControlsConfig:["",[]]}],T=(y.filterByFieldFor(f,e.FieldFor.createForm),new e.FormsService),v=[{title:"ID",name:"moduleId",dbName:"module_id",type:e.FieldType.string,fetchable:!0,updateable:!0,index:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"number",disabled:!0},{title:"Guid",name:"moduleGuid",dbName:"module_guid",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay}],formatt:"alphanum",disabled:!0},{title:"Name",name:"moduleName",dbName:"module_name",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.text,fieldFor:e.FieldFor.createForm}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[l.Validators.minLength(4),l.Validators.maxLength(20),l.Validators.required]]},{title:"Description",name:"moduleDescription",dbName:"module_description",type:e.FieldType.string,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.text,fieldFor:e.FieldFor.tableDisplay},{controlType:e.ControlType.textArea,fieldFor:e.FieldFor.createForm}],formatt:"textArea",savable:!0,formControlsConfig:["",[l.Validators.minLength(0),l.Validators.maxLength(300)]]},{title:"Enabled",name:"moduleEnabled",dbName:"module_enabled",type:e.FieldType.boolean,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.status,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0},{title:"Sys",name:"isSysModule",dbName:"is_sys_module",type:e.FieldType.boolean,fetchable:!0,updateable:!0,searchable:!0,show:!0,controls:[{controlType:e.ControlType.status,fieldFor:e.FieldFor.tableDisplay}],formatt:"text",isNameField:!0,savable:!0,formControlsConfig:["",[l.Validators.required]]},{title:"System Module",name:"isSys",controls:[{controlType:e.ControlType.toggleSwitch,fieldFor:e.FieldFor.createForm}],primaryField:"isSysModule",formControlsConfig:["",[]]},{title:"App Module",name:"isApp",controls:[{controlType:e.ControlType.toggleSwitch,fieldFor:e.FieldFor.createForm}],primaryField:"isSysModule",formControlsConfig:["",[]]},{title:"Action",name:"action",type:e.FieldType.action,fetchable:!1,show:!0,controls:[{controlType:e.ControlType.action,fieldFor:e.FieldFor.createForm},{controlType:e.ControlType.action,fieldFor:e.FieldFor.tableDisplay}]}];T.filterByFieldFor(v,e.FieldFor.createForm);const I={select:["moduleId","moduleName","moduleGuid"],where:{}},$={getFn$:null,selIndex:I.select[0],selValueField:I.select[1],fetchFields:I.select,step:null,token:null,controlName:"moduleId"}},7444:(P,F,i)=>{i.d(F,{N:()=>C});const l="https://cd-api.co.ke",C={appId:"",production:!1,apiEndpoint:`${l}:3001/api`,sioEndpoint:`${l}:3002`,wsEndpoint:"ws://cd-api.co.ke:3000",wsMode:"sio",pushConfig:{sio:{enabled:!0},wss:{enabled:!1},pusher:{enabled:!0,apiKey:"DtVRY9V5j41KwSxKrd8L_dRijUJh9gVcqwBH5wb96no",options:{cluster:"ap2",forceTLS:!0,userAuthentication:{endpoint:"https://cd-api.co.ke:3002/pusher/auth",transport:"ajax",params:{},headers:{},includeCredentials:!0,customHandler:null},channelAuthorization:{endpoint:"https://cd-api.co.ke:3002/pusher/auth"},authEndpoint:"https://cd-api.co.ke:3002/pusher/auth"}}},CD_PORT:3001,consumerToken:"B0B3DA99-1859-A499-90F6-1E3F69575DCD",USER_RESOURCES:"http://routed-93/user-resources",apiHost:"https://cd-api.co.ke",sioHost:"https://cd-api.co.ke",shellHost:"https://asdap.net",consumer:"",clientAppGuid:"ca0fe39f-92b2-484d-91ef-487d4fc462a2",clientContext:{entity:"ASDAP",clientAppId:2,consumerToken:"B0B3DA99-1859-A499-90F6-1E3F69575DCD"},clientAppId:2,SOCKET_IO_PORT:3002,defaultauth:"cd-auth",initialPage:"dashboard",mfManifestPath:"/assets/mf.manifest.json",apiOptions:{headers:{"Content-Type":"application/json"}},sioOptions:{path:"/socket.io",transports:["websocket","polling"],secure:!0},firebaseConfig:{apiKey:"",authDomain:"",databaseURL:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:"",measurementId:""}}},15861:(P,F,i)=>{function l(o,y,f,g,C,m,r){try{var n=o[m](r),d=n.value}catch(b){return void f(b)}n.done?y(d):Promise.resolve(d).then(g,C)}function e(o){return function(){var y=this,f=arguments;return new Promise(function(g,C){var m=o.apply(y,f);function r(d){l(m,g,C,r,n,"next",d)}function n(d){l(m,g,C,r,n,"throw",d)}r(void 0)})}}i.d(F,{Z:()=>e})}}]);