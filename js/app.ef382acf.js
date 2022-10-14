(function(){"use strict";var t={3172:function(t,e,n){var r=n(9242),i=n(3396);const o={id:"app"};function s(t,e){const n=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i.Wm)(n)])}var a=n(89);const c={},u=(0,a.Z)(c,[["render",s]]);var l=u,h=n(2483),d=n(7139);const f={id:"app"},m={key:0},p=(0,i._)("canvas",{id:"unity-canvas"},null,-1);function g(t,e,n,r,o,s){const a=(0,i.up)("Compiler");return(0,i.wg)(),(0,i.iD)("div",f,[s.IsFaceTracking()?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",m,[(0,i.Wm)(a,{onTargets:s.CompiledTargets},null,8,["onTargets"])])),p,(0,i._)("div",{id:"container",ref:"container",class:(0,d.C_)({fliped:s.IsFaceTracking()})},null,2)])}class v{constructor(t=0,e=0,n=0){v.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}magnitude(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}toJson(){return`{ "x": ${this.x}, "y": ${this.y}, "z": ${this.z} }`}}class w{constructor(t=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]){w.prototype.isMatrix4x4=!0,this.elements=t}clone(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}decompose(t,e,n){const r=this.elements;let i=new v(r[0],r[1],r[2]).magnitude();const o=new v(r[4],r[5],r[6]).magnitude(),s=new v(r[8],r[9],r[10]).magnitude(),a=this.determinant();a<0&&(i=-i);const c=1/i,u=1/o,l=1/s,h=new w;return h.clone(this),h.elements[0]*=c,h.elements[1]*=c,h.elements[2]*=c,h.elements[4]*=u,h.elements[5]*=u,h.elements[6]*=u,h.elements[8]*=l,h.elements[9]*=l,h.elements[10]*=l,t.set(r[12],r[14],r[13]),n.set(i,o,s),e.setFromRotationMatrix(h),this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],i=t[12],o=t[1],s=t[5],a=t[9],c=t[13],u=t[2],l=t[6],h=t[10],d=t[14],f=t[3],m=t[7],p=t[11],g=t[15];return f*(+i*a*l-r*c*l-i*s*h+n*c*h+r*s*d-n*a*d)+m*(+e*a*d-e*c*h+i*o*h-r*o*d+r*c*u-i*a*u)+p*(+e*c*l-e*s*d-i*o*l+n*o*d+i*s*u-n*c*u)+g*(-r*s*u-e*a*l+e*s*h+r*o*l-n*o*h+n*a*u)}}class y{constructor(t=0,e=0,n=0,r=1){y.prototype.isQuaternion=!0,this.x=t,this.y=e,this.z=n,this.w=r}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],i=e[8],o=e[1],s=e[5],a=e[9],c=e[2],u=e[6],l=e[10],h=n+s+l;if(h>0){const t=.5/Math.sqrt(h+1);this.x=(u-a)*t,this.y=(o-r)*t,this.z=(i-c)*t,this.w=.25/t}else if(n>s&&n>l){const t=2*Math.sqrt(1+n-s-l);this.x=.25*t,this.y=(i+c)/t,this.z=(r+o)/t,this.w=(u-a)/t}else if(s>l){const t=2*Math.sqrt(1+s-n-l);this.x=(r+o)/t,this.y=(a+u)/t,this.z=.25*t,this.w=(i-c)/t}else{const t=2*Math.sqrt(1+l-n-s);this.x=(i+c)/t,this.y=.25*t,this.z=(a+u)/t,this.w=(o-r)/t}return this.x*=-1,this}toJson(){return`{ "x": ${this.x}, "y": ${this.y}, "z": ${this.z}, "w":${this.w} }`}}class O{constructor(){O.prototype.isJSON=!0}toJson(){}isValid(){}}class b extends O{constructor(t,e,n,r=60,i=[]){super(),b.prototype.isFaceTransform=!0,t||(t=new v),e||(t=new y),n||(t=new v),this.position=t,this.rotation=e,this.scale=n,this.camerFOV=r,this.faceMeshData=i}toJson(){const t=this.position.toJson(),e=this.rotation.toJson(),n=this.scale.toJson();let r=this.faceMeshData.join("*").replaceAll(".",",");return`{\n\t\t\t\t\t"position": ${t}, \n\t\t\t\t\t"rotation": ${e}, \n\t\t\t\t\t"scale": ${n}, \n\t\t\t\t\t"camerFOV": ${this.camerFOV}, \n\t\t\t\t\t"facemesh": "${r}"\n\t\t\t\t}`}isValid(){return!!(this.position&&this.rotation&&this.scale&&this.camerFOV&&this.faceMeshData)}}class M extends O{constructor(t,e,n,r=60){super(),M.prototype.isImageTransform=!0,t||(t=new v),e||(t=new y),n||(t=new v),this.position=t,this.rotation=e,this.scale=n,this.camerFOV=r}toJson(){const t=this.position.toJson(),e=this.rotation.toJson(),n=this.scale.toJson();return`{\n\t\t\t\t\t"position": ${t}, \n\t\t\t\t\t"rotation": ${e}, \n\t\t\t\t\t"scale": ${n}, \n\t\t\t\t\t"camerFOV": ${this.camerFOV} \n\t\t\t\t}`}isValid(){return!!(this.position&&this.rotation&&this.scale&&this.camerFOV)}}const A="AR-Renderer-Face-Track-Controller";function T(t){t.SendMessage(A,"StartTracking")}function E(t,e,n,r,i,o){F(t,e,n,r,i,o)}function C(t){t.SendMessage(A,"StopTracking")}function F(t,e,n,r,i,o){let s=new b(e,n,r,i,o);if(!s.isValid())throw"Face transform is invalid!";t&&t.SendMessage(A,"Tracking",s.toJson())}const x="AR-Renderer-Image-Track-Controller";function _(t){t.SendMessage(x,"StartTracking")}function k(t,e,n,r,i){S(t,e,n,r,i)}function I(t){t.SendMessage(x,"StopTracking")}function S(t,e,n,r,i){let o=new M(e,n,r,i);if(!o.isValid())throw"Image transform is invalid!";t&&t.SendMessage(x,"Tracking",o.toJson())}let R;function N(t,e){var n="./Build",r=n+"/UnitedAppTest.loader.js",i={dataUrl:n+"/UnitedAppTest.data",frameworkUrl:n+"/UnitedAppTest.framework.js",codeUrl:n+"/UnitedAppTest.wasm",streamingAssetsUrl:"StreamingAssets",companyName:"PustovietovQS",productName:"ar-unity-renderer-test-0.3.3",productVersion:"0.1"};t.width=window.innerWidth,t.height=window.innerHeight;var o=document.createElement("script");o.src=r,o.onload=()=>{createUnityInstance(t,i,(()=>{})).then((t=>{console.warn(t),R=t,e(t)})).catch((t=>{}))},t.appendChild(o)}function j(){_(R)}function D(t,e){P(t,((t,n,r)=>{k(R,t,n,r,e)}))}function $(){I(R)}function V(){T(R)}function J(t,e,n){P(t,((t,r,i)=>{E(R,t,r,i,e,n)}))}function L(){C(R)}function P(t,e){const n=new w(t),r=new v,i=new v,o=new y;return n.decompose(r,o,i),e(r,o,i)}const z="#scanningOverlay",U="#loadingOverlay",q=5,W=10,G=.001,B=1e3;var K,H,Z,Q=!1;function Y(t,e,r){N(t,(async()=>{r.IsFaceTracking()?n.e(816).then(n.t.bind(n,9816,23)).then((async()=>{tt(e)})):n.e(528).then(n.t.bind(n,5528,23)).then((async()=>{X(r,(t=>{tt(e,t)}))}))}))}async function X(t,e){let n=setInterval((()=>{t.targets&&(e(t.targets),clearInterval(n))}),100)}async function tt(t,e){let n,r;e?n=nt(e,t):(n=rt(t),r=n.addFaceMesh()),n.addAnchor(0),K=n.renderer,H=n.scene,Z=n.camera;const i=async()=>{await n.start(),K.setAnimationLoop((()=>{K.render(H,Z),et(n,r?.geometry?.positions)}))};setTimeout((()=>{i()}),2e3)}function et(t,e){let n=t.container.offsetWidth/t.container.offsetHeight,r=n<4/3?t.camera.fov:t.camera.fov*(4/3)/n,i=t.anchors[0];if(i.group.visible){let t=i.group.matrix.elements;Q||(Q=!0,e?V():j()),e?J(t,r,e):D(t,r)}else Q&&(Q=!1,e?L():$())}function nt(t,e){return new window.MINDAR.IMAGE.MindARThree({container:e,imageTargetSrc:t,uiScanning:z,uiLoading:U,warmupTolerance:q,missTolerance:W,filterMinCF:G,filterBeta:B})}function rt(t){return new window.MINDAR.FACE.MindARThree({container:t,videoWidth:1280,videoHeight:720})}const it={id:"app"};function ot(t,e,n,r,o,s){return(0,i.wg)(),(0,i.iD)("div",it)}n(4200);const st=new window.MINDAR.IMAGE.Compiler;async function at(t){const e=[];for(let i=0;i<t.length;i++){let n=await ct(t[i]);e.push(n)}await st.compileImageTargets(e,(t=>{console.log(t)}));const n=await st.exportData();let r=ut(n);return r}async function ct(t){return new Promise(((e,n)=>{let r=new Image;r.onload=()=>e(r),r.onerror=n,r.src=t}))}function ut(t){var e=new Blob([t]),n=window.document.createElement("a");return n.download="targets.mind",n.href=window.URL.createObjectURL(e),n.href}var lt={name:"App",data(){return{targets:void 0}},mounted(){this.Compile()},methods:{async Compile(){this.targets=await at(["./target.png"]),this.$emit("targets",this.targets)}}};const ht=(0,a.Z)(lt,[["render",ot]]);var dt=ht,ft={name:"App",components:{Compiler:dt},data(){return{targets:void 0,FACE_TRACKING:""}},mounted(){this.getMediaDevice()},methods:{IsFaceTracking(){return"true"==this.FACE_TRACKING.toLowerCase()},async CompiledTargets(t){this.targets=t},OnError(t){return console.error(t)},async getMediaDevice(){if(!navigator?.mediaDevices?.getUserMedia)return this.OnError("Can`t get access to any user`s media device. Probably connection is unsecured ('https' protocol required)");try{await navigator.mediaDevices.getUserMedia({video:{facingMode:{exact:"environment"}}}).then((t=>{console.error(t)}))}catch(t){this.OnError(t)}this.LoadScene()},async LoadScene(){let t=document.querySelector("#unity-canvas"),e=document.querySelector("#container");Y(t,e,this)}}};const mt=(0,a.Z)(ft,[["render",g]]);var pt=mt;const gt=h.p7({history:h.r5(),routes:[{path:"/:id?",component:pt}]});(0,r.ri)(l).use(gt).mount("#app")}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,o){if(!r){var s=1/0;for(l=0;l<t.length;l++){r=t[l][0],i=t[l][1],o=t[l][2];for(var a=!0,c=0;c<r.length;c++)(!1&o||s>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(a=!1,o<s&&(s=o));if(a){t.splice(l--,1);var u=i();void 0!==u&&(e=u)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[r,i,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){var t,e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__};n.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"===typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var s={};t=t||[null,e({}),e([]),e(e)];for(var a=2&i&&r;"object"==typeof a&&!~t.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach((function(t){s[t]=function(){return r[t]}}));return s["default"]=function(){return r},n.d(o,s),o}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{528:"3b8c0e95",816:"563740fe"}[t]+".js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="ar-unity-renderer:";n.l=function(r,i,o,s){if(t[r])t[r].push(i);else{var a,c;if(void 0!==o)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var h=u[l];if(h.getAttribute("src")==r||h.getAttribute("data-webpack")==e+o){a=h;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",e+o),a.src=r),t[r]=[i];var d=function(e,n){a.onerror=a.onload=null,clearTimeout(f);var i=t[r];if(delete t[r],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((function(t){return t(n)})),e)return e(n)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={143:0};n.f.j=function(e,r){var i=n.o(t,e)?t[e]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise((function(n,r){i=t[e]=[n,r]}));r.push(i[2]=o);var s=n.p+n.u(e),a=new Error,c=function(r){if(n.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;a.message="Loading chunk "+e+" failed.\n("+o+": "+s+")",a.name="ChunkLoadError",a.type=o,a.request=s,i[1](a)}};n.l(s,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,o,s=r[0],a=r[1],c=r[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(c)var l=c(n)}for(e&&e(r);u<s.length;u++)o=s[u],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(l)},r=self["webpackChunkar_unity_renderer"]=self["webpackChunkar_unity_renderer"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(3172)}));r=n.O(r)})();
//# sourceMappingURL=app.ef382acf.js.map
