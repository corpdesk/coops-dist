(self.webpackChunkcoops=self.webpackChunkcoops||[]).push([[5657,8355],{85657:(g,p,u)=>{u.r(p),u.d(p,{CookieService:()=>h});var d=u(87675),m=u(35228);let h=(()=>{class c{constructor(e,t){this.document=e,this.platformId=t,this.documentIsAccessible=(0,m.isPlatformBrowser)(this.platformId)}static getCookieRegExp(e){const t=e.replace(/([\[\]\{\}\(\)\|\=\;\+\?\,\.\*\^\$])/gi,"\\$1");return new RegExp("(?:^"+t+"|;\\s*"+t+")=(.*?)(?:;|$)","g")}static safeDecodeURIComponent(e){try{return decodeURIComponent(e)}catch{return e}}check(e){return!!this.documentIsAccessible&&(e=encodeURIComponent(e),c.getCookieRegExp(e).test(this.document.cookie))}get(e){if(this.documentIsAccessible&&this.check(e)){e=encodeURIComponent(e);const s=c.getCookieRegExp(e).exec(this.document.cookie);return s[1]?c.safeDecodeURIComponent(s[1]):""}return""}getAll(){if(!this.documentIsAccessible)return{};const e={},t=this.document;return t.cookie&&""!==t.cookie&&t.cookie.split(";").forEach(s=>{const[i,n]=s.split("=");e[c.safeDecodeURIComponent(i.replace(/^ /,""))]=c.safeDecodeURIComponent(n)}),e}set(e,t,s,i,n,r,f){if(!this.documentIsAccessible)return;if("number"==typeof s||s instanceof Date||i||n||r||f)return void this.set(e,t,{expires:s,path:i,domain:n,secure:r,sameSite:f||"Lax"});let a=encodeURIComponent(e)+"="+encodeURIComponent(t)+";";const o=s||{};o.expires&&(a+="number"==typeof o.expires?"expires="+new Date((new Date).getTime()+1e3*o.expires*60*60*24).toUTCString()+";":"expires="+o.expires.toUTCString()+";"),o.path&&(a+="path="+o.path+";"),o.domain&&(a+="domain="+o.domain+";"),!1===o.secure&&"None"===o.sameSite&&(o.secure=!0,console.warn(`[ngx-cookie-service] Cookie ${e} was forced with secure flag because sameSite=None.More details : https://github.com/stevermeister/ngx-cookie-service/issues/86#issuecomment-597720130`)),o.secure&&(a+="secure;"),o.sameSite||(o.sameSite="Lax"),a+="sameSite="+o.sameSite+";",this.document.cookie=a}delete(e,t,s,i,n="Lax"){if(!this.documentIsAccessible)return;const r=new Date("Thu, 01 Jan 1970 00:00:01 GMT");this.set(e,"",{expires:r,path:t,domain:s,secure:i,sameSite:n})}deleteAll(e,t,s,i="Lax"){if(!this.documentIsAccessible)return;const n=this.getAll();for(const r in n)n.hasOwnProperty(r)&&this.delete(r,e,t,s,i)}}return c.\u0275fac=function(e){return new(e||c)(d.\u0275\u0275inject(m.DOCUMENT),d.\u0275\u0275inject(d.PLATFORM_ID))},c.\u0275prov=d.\u0275\u0275defineInjectable({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()}}]);