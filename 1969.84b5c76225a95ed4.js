(self.webpackChunkcoops=self.webpackChunkcoops||[]).push([[1969],{1969:(Or,Ne,Fe)=>{Fe.r(Ne),Fe.d(Ne,{afterMain:()=>_e,afterRead:()=>ze,afterWrite:()=>Qe,applyStyles:()=>Ee,arrow:()=>ot,auto:()=>ce,basePlacements:()=>K,beforeMain:()=>Ue,beforeRead:()=>Ie,beforeWrite:()=>Je,bottom:()=>k,clippingParents:()=>qe,computeStyles:()=>Be,createPopper:()=>vr,createPopperBase:()=>ur,createPopperLite:()=>hr,detectOverflow:()=>ae,end:()=>Q,eventListeners:()=>Ce,flip:()=>lt,hide:()=>ht,left:()=>B,main:()=>Ge,modifierPhases:()=>Ze,offset:()=>mt,placements:()=>Pe,popper:()=>Z,popperGenerator:()=>he,popperOffsets:()=>Te,preventOverflow:()=>gt,read:()=>Ye,reference:()=>Xe,right:()=>S,start:()=>X,top:()=>j,variationPlacements:()=>Oe,viewport:()=>xe,write:()=>Ke});var j="top",k="bottom",S="right",B="left",ce="auto",K=[j,k,S,B],X="start",Q="end",qe="clippingParents",xe="viewport",Z="popper",Xe="reference",Oe=K.reduce(function(e,t){return e.concat([t+"-"+X,t+"-"+Q])},[]),Pe=[].concat(K,[ce]).reduce(function(e,t){return e.concat([t,t+"-"+X,t+"-"+Q])},[]),Ie="beforeRead",Ye="read",ze="afterRead",Ue="beforeMain",Ge="main",_e="afterMain",Je="beforeWrite",Ke="write",Qe="afterWrite",Ze=[Ie,Ye,ze,Ue,Ge,_e,Je,Ke,Qe];function H(e){return e?(e.nodeName||"").toLowerCase():null}function L(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function I(e){return e instanceof L(e).Element||e instanceof Element}function T(e){return e instanceof L(e).HTMLElement||e instanceof HTMLElement}function Ae(e){return!(typeof ShadowRoot>"u")&&(e instanceof L(e).ShadowRoot||e instanceof ShadowRoot)}const Ee={name:"applyStyles",enabled:!0,phase:"write",fn:function Bt(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var a=t.styles[r]||{},n=t.attributes[r]||{},i=t.elements[r];!T(i)||!H(i)||(Object.assign(i.style,a),Object.keys(n).forEach(function(p){var s=n[p];!1===s?i.removeAttribute(p):i.setAttribute(p,!0===s?"":s)}))})},effect:function Ct(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(a){var n=t.elements[a],i=t.attributes[a]||{},s=Object.keys(t.styles.hasOwnProperty(a)?t.styles[a]:r[a]).reduce(function(o,c){return o[c]="",o},{});!T(n)||!H(n)||(Object.assign(n.style,s),Object.keys(i).forEach(function(o){n.removeAttribute(o)}))})}},requires:["computeStyles"]};function V(e){return e.split("-")[0]}var Y=Math.max,ue=Math.min,ee=Math.round;function De(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function et(){return!/^((?!chrome|android).)*safari/i.test(De())}function te(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!1);var a=e.getBoundingClientRect(),n=1,i=1;t&&T(e)&&(n=e.offsetWidth>0&&ee(a.width)/e.offsetWidth||1,i=e.offsetHeight>0&&ee(a.height)/e.offsetHeight||1);var s=(I(e)?L(e):window).visualViewport,o=!et()&&r,c=(a.left+(o&&s?s.offsetLeft:0))/n,f=(a.top+(o&&s?s.offsetTop:0))/i,h=a.width/n,y=a.height/i;return{width:h,height:y,top:f,right:c+h,bottom:f+y,left:c,x:c,y:f}}function Re(e){var t=te(e),r=e.offsetWidth,a=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-a)<=1&&(a=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:a}}function tt(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Ae(r)){var a=t;do{if(a&&e.isSameNode(a))return!0;a=a.parentNode||a.host}while(a)}return!1}function N(e){return L(e).getComputedStyle(e)}function kt(e){return["table","td","th"].indexOf(H(e))>=0}function F(e){return((I(e)?e.ownerDocument:e.document)||window.document).documentElement}function le(e){return"html"===H(e)?e:e.assignedSlot||e.parentNode||(Ae(e)?e.host:null)||F(e)}function rt(e){return T(e)&&"fixed"!==N(e).position?e.offsetParent:null}function ie(e){for(var t=L(e),r=rt(e);r&&kt(r)&&"static"===N(r).position;)r=rt(r);return r&&("html"===H(r)||"body"===H(r)&&"static"===N(r).position)?t:r||function St(e){var t=/firefox/i.test(De());if(/Trident/i.test(De())&&T(e)&&"fixed"===N(e).position)return null;var n=le(e);for(Ae(n)&&(n=n.host);T(n)&&["html","body"].indexOf(H(n))<0;){var i=N(n);if("none"!==i.transform||"none"!==i.perspective||"paint"===i.contain||-1!==["transform","perspective"].indexOf(i.willChange)||t&&"filter"===i.willChange||t&&i.filter&&"none"!==i.filter)return n;n=n.parentNode}return null}(e)||t}function je(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function oe(e,t,r){return Y(e,ue(t,r))}function nt(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function it(e,t){return t.reduce(function(r,a){return r[a]=e,r},{})}const ot={name:"arrow",enabled:!0,phase:"main",fn:function Tt(e){var t,r=e.state,a=e.name,n=e.options,i=r.elements.arrow,p=r.modifiersData.popperOffsets,s=V(r.placement),o=je(s),f=[B,S].indexOf(s)>=0?"height":"width";if(i&&p){var h=function(t,r){return nt("number"!=typeof(t="function"==typeof t?t(Object.assign({},r.rects,{placement:r.placement})):t)?t:it(t,K))}(n.padding,r),y=Re(i),u="y"===o?j:B,w="y"===o?k:S,d=r.rects.reference[f]+r.rects.reference[o]-p[o]-r.rects.popper[f],v=p[o]-r.rects.reference[o],b=ie(i),O=b?"y"===o?b.clientHeight||0:b.clientWidth||0:0,g=O/2-y[f]/2+(d/2-v/2),x=oe(h[u],g,O-y[f]-h[w]);r.modifiersData[a]=((t={})[o]=x,t.centerOffset=x-g,t)}},effect:function Wt(e){var t=e.state,a=e.options.element,n=void 0===a?"[data-popper-arrow]":a;null!=n&&("string"==typeof n&&!(n=t.elements.popper.querySelector(n))||tt(t.elements.popper,n)&&(t.elements.arrow=n))},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function re(e){return e.split("-")[1]}var $t={top:"auto",right:"auto",bottom:"auto",left:"auto"};function st(e){var t,r=e.popper,a=e.popperRect,n=e.placement,i=e.variation,p=e.offsets,s=e.position,o=e.gpuAcceleration,c=e.adaptive,f=e.roundOffsets,h=e.isFixed,y=p.x,u=void 0===y?0:y,w=p.y,d=void 0===w?0:w,v="function"==typeof f?f({x:u,y:d}):{x:u,y:d};u=v.x,d=v.y;var b=p.hasOwnProperty("x"),O=p.hasOwnProperty("y"),P=B,l=j,m=window;if(c){var g=ie(r),x="clientHeight",D="clientWidth";g===L(r)&&"static"!==N(g=F(r)).position&&"absolute"===s&&(x="scrollHeight",D="scrollWidth"),(n===j||(n===B||n===S)&&i===Q)&&(l=k,d-=(h&&g===m&&m.visualViewport?m.visualViewport.height:g[x])-a.height,d*=o?1:-1),n!==B&&(n!==j&&n!==k||i!==Q)||(P=S,u-=(h&&g===m&&m.visualViewport?m.visualViewport.width:g[D])-a.width,u*=o?1:-1)}var C,R=Object.assign({position:s},c&&$t),W=!0===f?function Ht(e,t){var a=e.y,n=t.devicePixelRatio||1;return{x:ee(e.x*n)/n||0,y:ee(a*n)/n||0}}({x:u,y:d},L(r)):{x:u,y:d};return u=W.x,d=W.y,Object.assign({},R,o?((C={})[l]=O?"0":"",C[P]=b?"0":"",C.transform=(m.devicePixelRatio||1)<=1?"translate("+u+"px, "+d+"px)":"translate3d("+u+"px, "+d+"px, 0)",C):((t={})[l]=O?d+"px":"",t[P]=b?u+"px":"",t.transform="",t))}const Be={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function Vt(e){var t=e.state,r=e.options,a=r.gpuAcceleration,n=void 0===a||a,i=r.adaptive,p=void 0===i||i,s=r.roundOffsets,o=void 0===s||s,c={placement:V(t.placement),variation:re(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,st(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:p,roundOffsets:o})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,st(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:o})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}};var ve={passive:!0};const Ce={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function Nt(e){var t=e.state,r=e.instance,a=e.options,n=a.scroll,i=void 0===n||n,p=a.resize,s=void 0===p||p,o=L(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach(function(f){f.addEventListener("scroll",r.update,ve)}),s&&o.addEventListener("resize",r.update,ve),function(){i&&c.forEach(function(f){f.removeEventListener("scroll",r.update,ve)}),s&&o.removeEventListener("resize",r.update,ve)}},data:{}};var Ft={left:"right",right:"left",bottom:"top",top:"bottom"};function de(e){return e.replace(/left|right|bottom|top/g,function(t){return Ft[t]})}var qt={start:"end",end:"start"};function ft(e){return e.replace(/start|end/g,function(t){return qt[t]})}function ke(e){var t=L(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Se(e){return te(F(e)).left+ke(e).scrollLeft}function Le(e){var t=N(e);return/auto|scroll|overlay|hidden/.test(t.overflow+t.overflowY+t.overflowX)}function pt(e){return["html","body","#document"].indexOf(H(e))>=0?e.ownerDocument.body:T(e)&&Le(e)?e:pt(le(e))}function se(e,t){var r;void 0===t&&(t=[]);var a=pt(e),n=a===(null==(r=e.ownerDocument)?void 0:r.body),i=L(a),p=n?[i].concat(i.visualViewport||[],Le(a)?a:[]):a,s=t.concat(p);return n?s:s.concat(se(le(p)))}function Me(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ct(e,t,r){return t===xe?Me(function Xt(e,t){var r=L(e),a=F(e),n=r.visualViewport,i=a.clientWidth,p=a.clientHeight,s=0,o=0;if(n){i=n.width,p=n.height;var c=et();(c||!c&&"fixed"===t)&&(s=n.offsetLeft,o=n.offsetTop)}return{width:i,height:p,x:s+Se(e),y:o}}(e,r)):I(t)?function Yt(e,t){var r=te(e,!1,"fixed"===t);return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}(t,r):Me(function It(e){var t,r=F(e),a=ke(e),n=null==(t=e.ownerDocument)?void 0:t.body,i=Y(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),p=Y(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),s=-a.scrollLeft+Se(e),o=-a.scrollTop;return"rtl"===N(n||r).direction&&(s+=Y(r.clientWidth,n?n.clientWidth:0)-i),{width:i,height:p,x:s,y:o}}(F(e)))}function ut(e){var o,t=e.reference,r=e.element,a=e.placement,n=a?V(a):null,i=a?re(a):null,p=t.x+t.width/2-r.width/2,s=t.y+t.height/2-r.height/2;switch(n){case j:o={x:p,y:t.y-r.height};break;case k:o={x:p,y:t.y+t.height};break;case S:o={x:t.x+t.width,y:s};break;case B:o={x:t.x-r.width,y:s};break;default:o={x:t.x,y:t.y}}var c=n?je(n):null;if(null!=c){var f="y"===c?"height":"width";switch(i){case X:o[c]=o[c]-(t[f]/2-r[f]/2);break;case Q:o[c]=o[c]+(t[f]/2-r[f]/2)}}return o}function ae(e,t){void 0===t&&(t={});var a=t.placement,n=void 0===a?e.placement:a,i=t.strategy,p=void 0===i?e.strategy:i,s=t.boundary,o=void 0===s?qe:s,c=t.rootBoundary,f=void 0===c?xe:c,h=t.elementContext,y=void 0===h?Z:h,u=t.altBoundary,w=void 0!==u&&u,d=t.padding,v=void 0===d?0:d,b=nt("number"!=typeof v?v:it(v,K)),P=e.rects.popper,l=e.elements[w?y===Z?Xe:Z:y],m=function Ut(e,t,r,a){var n="clippingParents"===t?function zt(e){var t=se(le(e)),a=["absolute","fixed"].indexOf(N(e).position)>=0&&T(e)?ie(e):e;return I(a)?t.filter(function(n){return I(n)&&tt(n,a)&&"body"!==H(n)}):[]}(e):[].concat(t),i=[].concat(n,[r]),s=i.reduce(function(o,c){var f=ct(e,c,a);return o.top=Y(f.top,o.top),o.right=ue(f.right,o.right),o.bottom=ue(f.bottom,o.bottom),o.left=Y(f.left,o.left),o},ct(e,i[0],a));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}(I(l)?l:l.contextElement||F(e.elements.popper),o,f,p),g=te(e.elements.reference),x=ut({reference:g,element:P,strategy:"absolute",placement:n}),D=Me(Object.assign({},P,x)),E=y===Z?D:g,A={top:m.top-E.top+b.top,bottom:E.bottom-m.bottom+b.bottom,left:m.left-E.left+b.left,right:E.right-m.right+b.right},R=e.modifiersData.offset;if(y===Z&&R){var W=R[n];Object.keys(A).forEach(function(C){var z=[S,k].indexOf(C)>=0?1:-1,U=[j,k].indexOf(C)>=0?"y":"x";A[C]+=W[U]*z})}return A}const lt={name:"flip",enabled:!0,phase:"main",fn:function Jt(e){var t=e.state,r=e.options,a=e.name;if(!t.modifiersData[a]._skip){for(var n=r.mainAxis,i=void 0===n||n,p=r.altAxis,s=void 0===p||p,o=r.fallbackPlacements,c=r.padding,f=r.boundary,h=r.rootBoundary,y=r.altBoundary,u=r.flipVariations,w=void 0===u||u,d=r.allowedAutoPlacements,v=t.options.placement,b=V(v),P=o||(b!==v&&w?function _t(e){if(V(e)===ce)return[];var t=de(e);return[ft(e),t,ft(t)]}(v):[de(v)]),l=[v].concat(P).reduce(function(ne,q){return ne.concat(V(q)===ce?function Gt(e,t){void 0===t&&(t={});var n=t.boundary,i=t.rootBoundary,p=t.padding,s=t.flipVariations,o=t.allowedAutoPlacements,c=void 0===o?Pe:o,f=re(t.placement),h=f?s?Oe:Oe.filter(function(w){return re(w)===f}):K,y=h.filter(function(w){return c.indexOf(w)>=0});0===y.length&&(y=h);var u=y.reduce(function(w,d){return w[d]=ae(e,{placement:d,boundary:n,rootBoundary:i,padding:p})[V(d)],w},{});return Object.keys(u).sort(function(w,d){return u[w]-u[d]})}(t,{placement:q,boundary:f,rootBoundary:h,padding:c,flipVariations:w,allowedAutoPlacements:d}):q)},[]),m=t.rects.reference,g=t.rects.popper,x=new Map,D=!0,E=l[0],A=0;A<l.length;A++){var R=l[A],W=V(R),C=re(R)===X,z=[j,k].indexOf(W)>=0,U=z?"width":"height",M=ae(t,{placement:R,boundary:f,rootBoundary:h,altBoundary:y,padding:c}),$=z?C?S:B:C?k:j;m[U]>g[U]&&($=de($));var me=de($),G=[];if(i&&G.push(M[W]<=0),s&&G.push(M[$]<=0,M[me]<=0),G.every(function(ne){return ne})){E=R,D=!1;break}x.set(R,G)}if(D)for(var We=function(q){var pe=l.find(function(be){var _=x.get(be);if(_)return _.slice(0,q).every(function($e){return $e})});if(pe)return E=pe,"break"},fe=w?3:1;fe>0&&"break"!==We(fe);fe--);t.placement!==E&&(t.modifiersData[a]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function vt(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function dt(e){return[j,S,k,B].some(function(t){return e[t]>=0})}const ht={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function Kt(e){var t=e.state,r=e.name,a=t.rects.reference,n=t.rects.popper,i=t.modifiersData.preventOverflow,p=ae(t,{elementContext:"reference"}),s=ae(t,{altBoundary:!0}),o=vt(p,a),c=vt(s,n,i),f=dt(o),h=dt(c);t.modifiersData[r]={referenceClippingOffsets:o,popperEscapeOffsets:c,isReferenceHidden:f,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":h})}},mt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function Zt(e){var t=e.state,a=e.name,n=e.options.offset,i=void 0===n?[0,0]:n,p=Pe.reduce(function(f,h){return f[h]=function Qt(e,t,r){var a=V(e),n=[B,j].indexOf(a)>=0?-1:1,i="function"==typeof r?r(Object.assign({},t,{placement:e})):r,p=i[0],s=i[1];return p=p||0,s=(s||0)*n,[B,S].indexOf(a)>=0?{x:s,y:p}:{x:p,y:s}}(h,t.rects,i),f},{}),s=p[t.placement],c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=s.x,t.modifiersData.popperOffsets.y+=c),t.modifiersData[a]=p}},Te={name:"popperOffsets",enabled:!0,phase:"read",fn:function er(e){var t=e.state;t.modifiersData[e.name]=ut({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},gt={name:"preventOverflow",enabled:!0,phase:"main",fn:function rr(e){var t=e.state,r=e.options,a=e.name,n=r.mainAxis,i=void 0===n||n,p=r.altAxis,s=void 0!==p&&p,y=r.tether,u=void 0===y||y,w=r.tetherOffset,d=void 0===w?0:w,v=ae(t,{boundary:r.boundary,rootBoundary:r.rootBoundary,padding:r.padding,altBoundary:r.altBoundary}),b=V(t.placement),O=re(t.placement),P=!O,l=je(b),m=function tr(e){return"x"===e?"y":"x"}(l),g=t.modifiersData.popperOffsets,x=t.rects.reference,D=t.rects.popper,E="function"==typeof d?d(Object.assign({},t.rects,{placement:t.placement})):d,A="number"==typeof E?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),R=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,W={x:0,y:0};if(g){if(i){var C,z="y"===l?j:B,U="y"===l?k:S,M="y"===l?"height":"width",$=g[l],me=$+v[z],G=$-v[U],ge=u?-D[M]/2:0,We=O===X?x[M]:D[M],fe=O===X?-D[M]:-x[M],ye=t.elements.arrow,ne=u&&ye?Re(ye):{width:0,height:0},q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},pe=q[z],be=q[U],_=oe(0,x[M],ne[M]),$e=P?x[M]/2-ge-_-pe-A.mainAxis:We-_-pe-A.mainAxis,mr=P?-x[M]/2+ge+_+be+A.mainAxis:fe+_+be+A.mainAxis,He=t.elements.arrow&&ie(t.elements.arrow),gr=He?"y"===l?He.clientTop||0:He.clientLeft||0:0,wt=null!=(C=R?.[l])?C:0,br=$+mr-wt,xt=oe(u?ue(me,$+$e-wt-gr):me,$,u?Y(G,br):G);g[l]=xt,W[l]=xt-$}if(s){var Ot,J=g[m],we="y"===m?"height":"width",Pt=J+v["x"===l?j:B],At=J-v["x"===l?k:S],Ve=-1!==[j,B].indexOf(b),Et=null!=(Ot=R?.[m])?Ot:0,Dt=Ve?Pt:J-x[we]-D[we]-Et+A.altAxis,Rt=Ve?J+x[we]+D[we]-Et-A.altAxis:At,jt=u&&Ve?function Lt(e,t,r){var a=oe(e,t,r);return a>r?r:a}(Dt,J,Rt):oe(u?Dt:Pt,J,u?Rt:At);g[m]=jt,W[m]=jt-J}t.modifiersData[a]=W}},requiresIfExists:["offset"]};function or(e,t,r){void 0===r&&(r=!1);var a=T(t),n=T(t)&&function ir(e){var t=e.getBoundingClientRect(),r=ee(t.width)/e.offsetWidth||1,a=ee(t.height)/e.offsetHeight||1;return 1!==r||1!==a}(t),i=F(t),p=te(e,n,r),s={scrollLeft:0,scrollTop:0},o={x:0,y:0};return(a||!a&&!r)&&(("body"!==H(t)||Le(i))&&(s=function nr(e){return e!==L(e)&&T(e)?function ar(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}(e):ke(e)}(t)),T(t)?((o=te(t,!0)).x+=t.clientLeft,o.y+=t.clientTop):i&&(o.x=Se(i))),{x:p.left+s.scrollLeft-o.x,y:p.top+s.scrollTop-o.y,width:p.width,height:p.height}}function sr(e){var t=new Map,r=new Set,a=[];function n(i){r.add(i.name),[].concat(i.requires||[],i.requiresIfExists||[]).forEach(function(s){if(!r.has(s)){var o=t.get(s);o&&n(o)}}),a.push(i)}return e.forEach(function(i){t.set(i.name,i)}),e.forEach(function(i){r.has(i.name)||n(i)}),a}function pr(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}var yt={placement:"bottom",modifiers:[],strategy:"absolute"};function bt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(a){return!(a&&"function"==typeof a.getBoundingClientRect)})}function he(e){void 0===e&&(e={});var r=e.defaultModifiers,a=void 0===r?[]:r,n=e.defaultOptions,i=void 0===n?yt:n;return function(s,o,c){void 0===c&&(c=i);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},yt,i),modifiersData:{},elements:{reference:s,popper:o},attributes:{},styles:{}},h=[],y=!1,u={state:f,setOptions:function(b){var O="function"==typeof b?b(f.options):b;d(),f.options=Object.assign({},i,f.options,O),f.scrollParents={reference:I(s)?se(s):s.contextElement?se(s.contextElement):[],popper:se(o)};var P=function fr(e){var t=sr(e);return Ze.reduce(function(r,a){return r.concat(t.filter(function(n){return n.phase===a}))},[])}(function cr(e){var t=e.reduce(function(r,a){var n=r[a.name];return r[a.name]=n?Object.assign({},n,a,{options:Object.assign({},n.options,a.options),data:Object.assign({},n.data,a.data)}):a,r},{});return Object.keys(t).map(function(r){return t[r]})}([].concat(a,f.options.modifiers)));return f.orderedModifiers=P.filter(function(l){return l.enabled}),function w(){f.orderedModifiers.forEach(function(v){var O=v.options,l=v.effect;if("function"==typeof l){var m=l({state:f,name:v.name,instance:u,options:void 0===O?{}:O});h.push(m||function(){})}})}(),u.update()},forceUpdate:function(){if(!y){var b=f.elements,O=b.reference,P=b.popper;if(bt(O,P)){f.rects={reference:or(O,ie(P),"fixed"===f.options.strategy),popper:Re(P)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(A){return f.modifiersData[A.name]=Object.assign({},A.data)});for(var l=0;l<f.orderedModifiers.length;l++)if(!0!==f.reset){var m=f.orderedModifiers[l],g=m.fn,x=m.options;"function"==typeof g&&(f=g({state:f,options:void 0===x?{}:x,name:m.name,instance:u})||f)}else f.reset=!1,l=-1}}},update:pr(function(){return new Promise(function(v){u.forceUpdate(),v(f)})}),destroy:function(){d(),y=!0}};if(!bt(s,o))return u;function d(){h.forEach(function(v){return v()}),h=[]}return u.setOptions(c).then(function(v){!y&&c.onFirstUpdate&&c.onFirstUpdate(v)}),u}}var ur=he(),vr=he({defaultModifiers:[Ce,Te,Be,Ee,mt,lt,gt,ot,ht]}),hr=he({defaultModifiers:[Ce,Te,Be,Ee]})}}]);