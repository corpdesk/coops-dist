(self.webpackChunkcoops=self.webpackChunkcoops||[]).push([[4519,6900],{6900:(k,E,c)=>{c.r(E),c.d(E,{DndDragImageRefDirective:()=>z,DndDraggableDirective:()=>m,DndDropzoneDirective:()=>_,DndHandleDirective:()=>L,DndModule:()=>F,DndPlaceholderRefDirective:()=>w});var r=c(2264);const v=["move","copy","link"],o="application/x-dnd",D="application/json",f="Text";function b(n){return n.substr(0,o.length)===o}function y(n){if(n.dataTransfer){const d=n.dataTransfer.types;if(!d)return f;for(let e=0;e<d.length;e++)if(d[e]===f||d[e]===D||b(d[e]))return d[e]}return null}function g(n,d){return"all"===d||"uninitialized"===d?n:n.filter(function(e){return-1!==d.toLowerCase().indexOf(e)})}function P(n,d){const e=window.getComputedStyle(d),t=parseFloat(e.paddingTop)||0,i=parseFloat(e.paddingLeft)||0,l=parseFloat(e.borderTopWidth)||0,a=parseFloat(e.borderLeftWidth)||0;return{x:n.offsetX+i+a,y:n.offsetY+t+l}}const s={isDragging:!1,dropEffect:"none",effectAllowed:"all",type:void 0};function R(){s.isDragging=!1,s.dropEffect=void 0,s.effectAllowed=void 0,s.type=void 0}function u(n,d){!0===s.isDragging&&(s.dropEffect=d),n.dataTransfer&&(n.dataTransfer.dropEffect=d)}function C(n,d){let t=g(v,n.dataTransfer?n.dataTransfer.effectAllowed:"uninitialized");return!0===s.isDragging&&(t=g(t,s.effectAllowed)),d&&(t=g(t,d)),0===t.length?"none":n.ctrlKey&&-1!==t.indexOf("copy")?"copy":n.altKey&&-1!==t.indexOf("link")?"link":t[0]}function h(n){if(!0===s.isDragging)return s.type;const d=y(n);return null!==d&&d!==f&&d!==D&&d.substr(o.length+1)||void 0}function p(){return!1===s.isDragging}const I=s;let z=(()=>{class n{dndDraggableDirective=(0,r.inject)((0,r.forwardRef)(()=>m));elementRef=(0,r.inject)(r.ElementRef);ngOnInit(){this.dndDraggableDirective.registerDragImage(this.elementRef)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=r.\u0275\u0275defineDirective({type:n,selectors:[["","dndDragImageRef",""]],standalone:!0})}return n})(),m=(()=>{class n{dndDraggable;dndEffectAllowed="copy";dndType;dndDraggingClass="dndDragging";dndDraggingSourceClass="dndDraggingSource";dndDraggableDisabledClass="dndDraggableDisabled";dndDragImageOffsetFunction=P;dndStart=new r.EventEmitter;dndDrag=new r.EventEmitter;dndEnd=new r.EventEmitter;dndMoved=new r.EventEmitter;dndCopied=new r.EventEmitter;dndLinked=new r.EventEmitter;dndCanceled=new r.EventEmitter;draggable=!0;dndHandle;dndDragImageElementRef;dragImage;isDragStarted=!1;elementRef=(0,r.inject)(r.ElementRef);renderer=(0,r.inject)(r.Renderer2);ngZone=(0,r.inject)(r.NgZone);set dndDisableIf(e){this.draggable=!e,this.draggable?this.renderer.removeClass(this.elementRef.nativeElement,this.dndDraggableDisabledClass):this.renderer.addClass(this.elementRef.nativeElement,this.dndDraggableDisabledClass)}set dndDisableDragIf(e){this.dndDisableIf=e}ngAfterViewInit(){this.ngZone.runOutsideAngular(()=>{this.elementRef.nativeElement.addEventListener("drag",this.dragEventHandler)})}ngOnDestroy(){this.elementRef.nativeElement.removeEventListener("drag",this.dragEventHandler),this.isDragStarted&&R()}onDragStart(e){if(!this.draggable)return!1;if(null!=this.dndHandle&&null==e._dndUsingHandle)return e.stopPropagation(),!1;(function M(n,d,e){s.isDragging=!0,s.dropEffect="none",s.effectAllowed=d,s.type=e,n.dataTransfer&&(n.dataTransfer.effectAllowed=d)})(e,this.dndEffectAllowed,this.dndType),this.isDragStarted=!0,function H(n,d,e){const t=o+(d.type?"-"+d.type:""),i=JSON.stringify(d);try{n.dataTransfer?.setData(t,i)}catch{try{n.dataTransfer?.setData(D,i)}catch{const B=g(v,e);n.dataTransfer&&(n.dataTransfer.effectAllowed=B[0]),n.dataTransfer?.setData(f,i)}}}(e,{data:this.dndDraggable,type:this.dndType},I.effectAllowed),this.dragImage=this.determineDragImage(),this.renderer.addClass(this.dragImage,this.dndDraggingClass),(null!=this.dndDragImageElementRef||null!=e._dndUsingHandle)&&function O(n,d,e){const t=e(n,d)||{x:0,y:0};n.dataTransfer.setDragImage(d,t.x,t.y)}(e,this.dragImage,this.dndDragImageOffsetFunction);const t=this.renderer.listen(this.elementRef.nativeElement,"drag",()=>{this.renderer.addClass(this.elementRef.nativeElement,this.dndDraggingSourceClass),t()});return this.dndStart.emit(e),e.stopPropagation(),setTimeout(()=>{this.isDragStarted&&this.renderer.setStyle(this.dragImage,"pointer-events","none")},100),!0}onDrag(e){this.dndDrag.emit(e)}onDragEnd(e){if(!this.draggable||!this.isDragStarted)return;const t=I.dropEffect;let i;switch(this.renderer.setStyle(this.dragImage,"pointer-events","unset"),t){case"copy":i=this.dndCopied;break;case"link":i=this.dndLinked;break;case"move":i=this.dndMoved;break;default:i=this.dndCanceled}i.emit(e),this.dndEnd.emit(e),R(),this.isDragStarted=!1,this.renderer.removeClass(this.dragImage,this.dndDraggingClass),window.setTimeout(()=>{this.renderer.removeClass(this.elementRef.nativeElement,this.dndDraggingSourceClass)},0),e.stopPropagation()}registerDragHandle(e){this.dndHandle=e}registerDragImage(e){this.dndDragImageElementRef=e}dragEventHandler=e=>this.onDrag(e);determineDragImage(){return typeof this.dndDragImageElementRef<"u"?this.dndDragImageElementRef.nativeElement:this.elementRef.nativeElement}static \u0275fac=function(t){return new(t||n)};static \u0275dir=r.\u0275\u0275defineDirective({type:n,selectors:[["","dndDraggable",""]],hostVars:1,hostBindings:function(t,i){1&t&&r.\u0275\u0275listener("dragstart",function(a){return i.onDragStart(a)})("dragend",function(a){return i.onDragEnd(a)}),2&t&&r.\u0275\u0275attribute("draggable",i.draggable)},inputs:{dndDraggable:"dndDraggable",dndEffectAllowed:"dndEffectAllowed",dndType:"dndType",dndDraggingClass:"dndDraggingClass",dndDraggingSourceClass:"dndDraggingSourceClass",dndDraggableDisabledClass:"dndDraggableDisabledClass",dndDragImageOffsetFunction:"dndDragImageOffsetFunction",dndDisableIf:"dndDisableIf",dndDisableDragIf:"dndDisableDragIf"},outputs:{dndStart:"dndStart",dndDrag:"dndDrag",dndEnd:"dndEnd",dndMoved:"dndMoved",dndCopied:"dndCopied",dndLinked:"dndLinked",dndCanceled:"dndCanceled"},standalone:!0})}return n})(),w=(()=>{class n{elementRef;constructor(e){this.elementRef=e}ngOnInit(){this.elementRef.nativeElement.style.pointerEvents="none"}static \u0275fac=function(t){return new(t||n)(r.\u0275\u0275directiveInject(r.ElementRef))};static \u0275dir=r.\u0275\u0275defineDirective({type:n,selectors:[["","dndPlaceholderRef",""]],standalone:!0})}return n})(),_=(()=>{class n{ngZone;elementRef;renderer;dndDropzone="";dndEffectAllowed="uninitialized";dndAllowExternal=!1;dndHorizontal=!1;dndDragoverClass="dndDragover";dndDropzoneDisabledClass="dndDropzoneDisabled";dndDragover=new r.EventEmitter;dndDrop=new r.EventEmitter;dndPlaceholderRef;placeholder=null;disabled=!1;constructor(e,t,i){this.ngZone=e,this.elementRef=t,this.renderer=i}set dndDisableIf(e){this.disabled=e,this.disabled?this.renderer.addClass(this.elementRef.nativeElement,this.dndDropzoneDisabledClass):this.renderer.removeClass(this.elementRef.nativeElement,this.dndDropzoneDisabledClass)}set dndDisableDropIf(e){this.dndDisableIf=e}ngAfterViewInit(){this.placeholder=this.tryGetPlaceholder(),this.removePlaceholderFromDOM(),this.ngZone.runOutsideAngular(()=>{this.elementRef.nativeElement.addEventListener("dragenter",this.dragEnterEventHandler),this.elementRef.nativeElement.addEventListener("dragover",this.dragOverEventHandler),this.elementRef.nativeElement.addEventListener("dragleave",this.dragLeaveEventHandler)})}ngOnDestroy(){this.elementRef.nativeElement.removeEventListener("dragenter",this.dragEnterEventHandler),this.elementRef.nativeElement.removeEventListener("dragover",this.dragOverEventHandler),this.elementRef.nativeElement.removeEventListener("dragleave",this.dragLeaveEventHandler)}onDragEnter(e){if(!0===e._dndDropzoneActive)return void this.cleanupDragoverState();if(null==e._dndDropzoneActive){const i=document.elementFromPoint(e.clientX,e.clientY);this.elementRef.nativeElement.contains(i)&&(e._dndDropzoneActive=!0)}const t=h(e);this.isDropAllowed(t)&&e.preventDefault()}onDragOver(e){if(e.defaultPrevented)return;const t=h(e);if(!this.isDropAllowed(t))return;this.checkAndUpdatePlaceholderPosition(e);const i=C(e,this.dndEffectAllowed);"none"!==i?(e.preventDefault(),u(e,i),this.dndDragover.emit(e),this.renderer.addClass(this.elementRef.nativeElement,this.dndDragoverClass)):this.cleanupDragoverState()}onDrop(e){try{const t=h(e);if(!this.isDropAllowed(t))return;const i=function T(n,d){const e=y(n);return!0===d?null!==e&&b(e)?JSON.parse(n.dataTransfer?.getData(e)??"{}"):{}:null!==e?JSON.parse(n.dataTransfer?.getData(e)??"{}"):{}}(e,p());if(!this.isDropAllowed(i.type))return;e.preventDefault();const l=C(e);if(u(e,l),"none"===l)return;const a=this.getPlaceholderIndex();if(-1===a)return;this.dndDrop.emit({event:e,dropEffect:l,isExternal:p(),data:i.data,index:a,type:t}),e.stopPropagation()}finally{this.cleanupDragoverState()}}onDragLeave(e){e.preventDefault(),e.stopPropagation(),null==e._dndDropzoneActive&&this.elementRef.nativeElement.contains(e.relatedTarget)?e._dndDropzoneActive=!0:(this.cleanupDragoverState(),u(e,"none"))}dragEnterEventHandler=e=>this.onDragEnter(e);dragOverEventHandler=e=>this.onDragOver(e);dragLeaveEventHandler=e=>this.onDragLeave(e);isDropAllowed(e){if(this.disabled||p()&&!this.dndAllowExternal)return!1;if(!this.dndDropzone||!e)return!0;if(!Array.isArray(this.dndDropzone))throw new Error("dndDropzone: bound value to [dndDropzone] must be an array!");return-1!==this.dndDropzone.indexOf(e)}tryGetPlaceholder(){return typeof this.dndPlaceholderRef<"u"?this.dndPlaceholderRef.elementRef.nativeElement:this.elementRef.nativeElement.querySelector("[dndPlaceholderRef]")}removePlaceholderFromDOM(){null!==this.placeholder&&null!==this.placeholder.parentNode&&this.placeholder.parentNode.removeChild(this.placeholder)}checkAndUpdatePlaceholderPosition(e){if(null===this.placeholder)return;this.placeholder.parentNode!==this.elementRef.nativeElement&&this.renderer.appendChild(this.elementRef.nativeElement,this.placeholder);const t=function S(n,d){let e=d;for(;e.parentNode!==n;){if(!e.parentNode)return null;e=e.parentNode}return e}(this.elementRef.nativeElement,e.target);null!==t&&t!==this.placeholder&&(function A(n,d,e){const t=d.getBoundingClientRect();return e?n.clientX<t.left+t.width/2:n.clientY<t.top+t.height/2}(e,t,this.dndHorizontal)?t.previousSibling!==this.placeholder&&this.renderer.insertBefore(this.elementRef.nativeElement,this.placeholder,t):t.nextSibling!==this.placeholder&&this.renderer.insertBefore(this.elementRef.nativeElement,this.placeholder,t.nextSibling))}getPlaceholderIndex(){if(null!==this.placeholder)return Array.prototype.indexOf.call(this.elementRef.nativeElement.children,this.placeholder)}cleanupDragoverState(){this.renderer.removeClass(this.elementRef.nativeElement,this.dndDragoverClass),this.removePlaceholderFromDOM()}static \u0275fac=function(t){return new(t||n)(r.\u0275\u0275directiveInject(r.NgZone),r.\u0275\u0275directiveInject(r.ElementRef),r.\u0275\u0275directiveInject(r.Renderer2))};static \u0275dir=r.\u0275\u0275defineDirective({type:n,selectors:[["","dndDropzone",""]],contentQueries:function(t,i,l){if(1&t&&r.\u0275\u0275contentQuery(l,w,5),2&t){let a;r.\u0275\u0275queryRefresh(a=r.\u0275\u0275loadQuery())&&(i.dndPlaceholderRef=a.first)}},hostBindings:function(t,i){1&t&&r.\u0275\u0275listener("drop",function(a){return i.onDrop(a)})},inputs:{dndDropzone:"dndDropzone",dndEffectAllowed:"dndEffectAllowed",dndAllowExternal:"dndAllowExternal",dndHorizontal:"dndHorizontal",dndDragoverClass:"dndDragoverClass",dndDropzoneDisabledClass:"dndDropzoneDisabledClass",dndDisableIf:"dndDisableIf",dndDisableDropIf:"dndDisableDropIf"},outputs:{dndDragover:"dndDragover",dndDrop:"dndDrop"},standalone:!0})}return n})(),L=(()=>{class n{draggable=!0;dndDraggableDirective=(0,r.inject)(m);ngOnInit(){this.dndDraggableDirective.registerDragHandle(this)}ngOnDestroy(){this.dndDraggableDirective.registerDragHandle(void 0)}onDragEvent(e){e._dndUsingHandle=!0}static \u0275fac=function(t){return new(t||n)};static \u0275dir=r.\u0275\u0275defineDirective({type:n,selectors:[["","dndHandle",""]],hostVars:1,hostBindings:function(t,i){1&t&&r.\u0275\u0275listener("dragstart",function(a){return i.onDragEvent(a)})("dragend",function(a){return i.onDragEvent(a)}),2&t&&r.\u0275\u0275attribute("draggable",i.draggable)},standalone:!0})}return n})(),F=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=r.\u0275\u0275defineNgModule({type:n});static \u0275inj=r.\u0275\u0275defineInjector({})}return n})()}}]);