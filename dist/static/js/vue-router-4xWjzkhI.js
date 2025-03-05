import{s as e,j as t,u as n,k as r,d as o,p as a,r as s,w as c,l,n as i,a as u,f}from"./@vue-DTcrNVYa.js";
/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const p="undefined"!=typeof document;function h(e){return"object"==typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}const d=Object.assign;function m(e,t){const n={};for(const r in t){const o=t[r];n[r]=v(o)?o.map(e):e(o)}return n}const g=()=>{},v=Array.isArray,y=/#/g,b=/&/g,w=/\//g,E=/=/g,R=/\?/g,k=/\+/g,O=/%5B/g,x=/%5D/g,P=/%5E/g,C=/%60/g,j=/%7B/g,$=/%7C/g,S=/%7D/g,A=/%20/g;function q(e){return encodeURI(""+e).replace($,"|").replace(O,"[").replace(x,"]")}function L(e){return q(e).replace(k,"%2B").replace(A,"+").replace(y,"%23").replace(b,"%26").replace(C,"`").replace(j,"{").replace(S,"}").replace(P,"^")}function M(e){return null==e?"":function(e){return q(e).replace(y,"%23").replace(R,"%3F")}(e).replace(w,"%2F")}function B(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}const G=/\/$/;function _(e,t,n="/"){let r,o={},a="",s="";const c=t.indexOf("#");let l=t.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=t.slice(0,l),a=t.slice(l+1,c>-1?c:t.length),o=e(a)),c>-1&&(r=r||t.slice(0,c),s=t.slice(c,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];".."!==o&&"."!==o||r.push("");let a,s,c=n.length-1;for(a=0;a<r.length;a++)if(s=r[a],"."!==s){if(".."!==s)break;c>1&&c--}return n.slice(0,c).join("/")+"/"+r.slice(a).join("/")}(null!=r?r:t,n),{fullPath:r+(a&&"?")+a+s,path:r,query:o,hash:B(s)}}function I(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function T(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function W(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!D(e[n],t[n]))return!1;return!0}function D(e,t){return v(e)?U(e,t):v(t)?U(t,e):e===t}function U(e,t){return v(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}const V={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var F,z,K,H;function Q(e){if(!e)if(p){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),e.replace(G,"")}(z=F||(F={})).pop="pop",z.push="push",(H=K||(K={})).back="back",H.forward="forward",H.unknown="";const X=/^[^#]+#/;function Y(e,t){return e.replace(X,"#")+t}const N=()=>({left:window.scrollX,top:window.scrollY});function Z(e){let t;if("el"in e){const n=e.el,r="string"==typeof n&&n.startsWith("#"),o="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.scrollX,null!=t.top?t.top:window.scrollY)}function J(e,t){return(history.state?history.state.position-t:-1)+e}const ee=new Map;function te(e,t){const{pathname:n,search:r,hash:o}=t,a=e.indexOf("#");if(a>-1){let t=o.includes(e.slice(a))?e.slice(a).length:1,n=o.slice(t);return"/"!==n[0]&&(n="/"+n),I(n,"")}return I(n,e)+r+o}function ne(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?N():null}}function re(e){const{history:t,location:n}=window,r={value:te(e,n)},o={value:t.state};function a(r,a,s){const c=e.indexOf("#"),l=c>-1?(n.host&&document.querySelector("base")?e:e.slice(c))+r:location.protocol+"//"+location.host+e+r;try{t[s?"replaceState":"pushState"](a,"",l),o.value=a}catch(i){n[s?"replace":"assign"](l)}}return o.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:function(e,n){const s=d({},o.value,t.state,{forward:e,scroll:N()});a(s.current,s,!0),a(e,d({},ne(r.value,e,null),{position:s.position+1},n),!1),r.value=e},replace:function(e,n){a(e,d({},t.state,ne(o.value.back,e,o.value.forward,!0),n,{position:o.value.position}),!0),r.value=e}}}function oe(e){const t=re(e=Q(e)),n=function(e,t,n,r){let o=[],a=[],s=null;const c=({state:a})=>{const c=te(e,location),l=n.value,i=t.value;let u=0;if(a){if(n.value=c,t.value=a,s&&s===l)return void(s=null);u=i?a.position-i.position:0}else r(c);o.forEach((e=>{e(n.value,l,{delta:u,type:F.pop,direction:u?u>0?K.forward:K.back:K.unknown})}))};function l(){const{history:e}=window;e.state&&e.replaceState(d({},e.state,{scroll:N()}),"")}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:function(){s=n.value},listen:function(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return a.push(t),t},destroy:function(){for(const e of a)e();a=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",l)}}}(e,t.state,t.location,t.replace);const r=d({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:Y.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function ae(e){return"string"==typeof e||"symbol"==typeof e}const se=Symbol("");var ce,le;function ie(e,t){return d(new Error,{type:e,[se]:!0},t)}function ue(e,t){return e instanceof Error&&se in e&&(null==t||!!(e.type&t))}(le=ce||(ce={}))[le.aborted=4]="aborted",le[le.cancelled=8]="cancelled",le[le.duplicated=16]="duplicated";const fe="[^/]+?",pe={sensitive:!1,strict:!1,start:!0,end:!0},he=/[.+*?^${}()[\]/\\]/g;function de(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function me(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const e=de(r[n],o[n]);if(e)return e;n++}if(1===Math.abs(o.length-r.length)){if(ge(r))return 1;if(ge(o))return-1}return o.length-r.length}function ge(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ve={type:0,value:""},ye=/[a-zA-Z0-9_]/;function be(e,t,n){const r=function(e,t){const n=d({},pe,t),r=[];let o=n.start?"^":"";const a=[];for(const l of e){const e=l.length?[]:[90];n.strict&&!l.length&&(o+="/");for(let t=0;t<l.length;t++){const r=l[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(o+="/"),o+=r.value.replace(he,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:i,regexp:u}=r;a.push({name:e,repeatable:n,optional:i});const f=u||fe;if(f!==fe){s+=10;try{new RegExp(`(${f})`)}catch(c){throw new Error(`Invalid custom RegExp for param "${e}" (${f}): `+c.message)}}let p=n?`((?:${f})(?:/(?:${f}))*)`:`(${f})`;t||(p=i&&l.length<2?`(?:/${p})`:"/"+p),i&&(p+="?"),o+=p,s+=20,i&&(s+=-8),n&&(s+=-20),".*"===f&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const s=new RegExp(o,n.sensitive?"":"i");return{re:s,score:r,keys:a,parse:function(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",o=a[r-1];n[o.name]=e&&o.repeatable?e.split("/"):e}return n},stringify:function(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:a,repeatable:s,optional:c}=e,l=a in t?t[a]:"";if(v(l)&&!s)throw new Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);const i=v(l)?l.join("/"):l;if(!i){if(!c)throw new Error(`Missing required param "${a}"`);o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=i}}return n||"/"}}}(function(e){if(!e)return[[]];if("/"===e)return[[ve]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${i}": ${e}`)}let n=0,r=n;const o=[];let a;function s(){a&&o.push(a),a=[]}let c,l=0,i="",u="";function f(){i&&(0===n?a.push({type:0,value:i}):1===n||2===n||3===n?(a.length>1&&("*"===c||"+"===c)&&t(`A repeatable param (${i}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:i,regexp:u,repeatable:"*"===c||"+"===c,optional:"*"===c||"?"===c})):t("Invalid state to consume buffer"),i="")}function p(){i+=c}for(;l<e.length;)if(c=e[l++],"\\"!==c||2===n)switch(n){case 0:"/"===c?(i&&f(),s()):":"===c?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:"("===c?n=2:ye.test(c)?p():(f(),n=0,"*"!==c&&"?"!==c&&"+"!==c&&l--);break;case 2:")"===c?"\\"==u[u.length-1]?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,"*"!==c&&"?"!==c&&"+"!==c&&l--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${i}"`),f(),s(),o}(e.path),n),o=d(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function we(e,t){const n=[],r=new Map;function o(e,n,r){const c=!r,l=Re(e);l.aliasOf=r&&r.record;const i=Pe(t,e),u=[l];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(Re(d({},l,{components:r?r.record.components:l.components,path:e,aliasOf:r?r.record:l})))}let f,p;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(f=be(t,n,i),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),c&&e.name&&!Oe(f)&&a(e.name)),Ce(f)&&s(f),l.children){const e=l.children;for(let t=0;t<e.length;t++)o(e[t],f,r&&r.children[t])}r=r||f}return p?()=>{a(p)}:g}function a(e){if(ae(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(a),t.alias.forEach(a))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(a),e.alias.forEach(a))}}function s(e){const t=function(e,t){let n=0,r=t.length;for(;n!==r;){const o=n+r>>1;me(e,t[o])<0?r=o:n=o+1}const o=function(e){let t=e;for(;t=t.parent;)if(Ce(t)&&0===me(e,t))return t;return}(e);o&&(r=t.lastIndexOf(o,r-1));return r}(e,n);n.splice(t,0,e),e.record.name&&!Oe(e)&&r.set(e.record.name,e)}return t=Pe({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>o(e))),{addRoute:o,resolve:function(e,t){let o,a,s,c={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw ie(1,{location:e});s=o.record.name,c=d(Ee(t.params,o.keys.filter((e=>!e.optional)).concat(o.parent?o.parent.keys.filter((e=>e.optional)):[]).map((e=>e.name))),e.params&&Ee(e.params,o.keys.map((e=>e.name)))),a=o.stringify(c)}else if(null!=e.path)a=e.path,o=n.find((e=>e.re.test(a))),o&&(c=o.parse(a),s=o.record.name);else{if(o=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!o)throw ie(1,{location:e,currentLocation:t});s=o.record.name,c=d({},t.params,e.params),a=o.stringify(c)}const l=[];let i=o;for(;i;)l.unshift(i.record),i=i.parent;return{name:s,path:a,params:c,matched:l,meta:xe(l)}},removeRoute:a,clearRoutes:function(){n.length=0,r.clear()},getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function Ee(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Re(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:ke(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function ke(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="object"==typeof n?n[r]:n;return t}function Oe(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function xe(e){return e.reduce(((e,t)=>d(e,t.meta)),{})}function Pe(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Ce({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function je(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const e=n[r].replace(k," "),o=e.indexOf("="),a=B(o<0?e:e.slice(0,o)),s=o<0?null:B(e.slice(o+1));if(a in t){let e=t[a];v(e)||(e=t[a]=[e]),e.push(s)}else t[a]=s}return t}function $e(e){let t="";for(let n in e){const r=e[n];if(n=L(n).replace(E,"%3D"),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}(v(r)?r.map((e=>e&&L(e))):[r&&L(r)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Se(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=v(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Ae=Symbol(""),qe=Symbol(""),Le=Symbol(""),Me=Symbol(""),Be=Symbol("");function Ge(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e.slice(),reset:function(){e=[]}}}function _e(e,t,n,r,o,a=e=>e()){const s=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise(((c,l)=>{const i=e=>{var a;!1===e?l(ie(4,{from:n,to:t})):e instanceof Error?l(e):"string"==typeof(a=e)||a&&"object"==typeof a?l(ie(2,{from:t,to:e})):(s&&r.enterCallbacks[o]===s&&"function"==typeof e&&s.push(e),c())},u=a((()=>e.call(r&&r.instances[o],t,n,i)));let f=Promise.resolve(u);e.length<3&&(f=f.then(i)),f.catch((e=>l(e)))}))}function Ie(e,t,n,r,o=e=>e()){const a=[];for(const s of e)for(const e in s.components){let c=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if(h(c)){const l=(c.__vccOpts||c)[t];l&&a.push(_e(l,n,r,s,e,o))}else{let l=c();a.push((()=>l.then((a=>{if(!a)throw new Error(`Couldn't resolve component "${e}" at "${s.path}"`);const c=(l=a).__esModule||"Module"===l[Symbol.toStringTag]||l.default&&h(l.default)?a.default:a;var l;s.mods[e]=a,s.components[e]=c;const i=(c.__vccOpts||c)[t];return i&&_e(i,n,r,s,e,o)()}))))}}return a}function Te(e){const t=f(Le),r=f(Me),a=o((()=>{const r=n(e.to);return t.resolve(r)})),s=o((()=>{const{matched:e}=a.value,{length:t}=e,n=e[t-1],o=r.matched;if(!n||!o.length)return-1;const s=o.findIndex(T.bind(null,n));if(s>-1)return s;const c=De(e[t-2]);return t>1&&De(n)===c&&o[o.length-1].path!==c?o.findIndex(T.bind(null,e[t-2])):s})),c=o((()=>s.value>-1&&function(e,t){for(const n in t){const r=t[n],o=e[n];if("string"==typeof r){if(r!==o)return!1}else if(!v(o)||o.length!==r.length||r.some(((e,t)=>e!==o[t])))return!1}return!0}(r.params,a.value.params))),l=o((()=>s.value>-1&&s.value===r.matched.length-1&&W(r.params,a.value.params)));return{route:a,href:o((()=>a.value.href)),isActive:c,isExactActive:l,navigate:function(r={}){if(function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return!0}(r)){const r=t[n(e.replace)?"replace":"push"](n(e.to)).catch(g);return e.viewTransition&&"undefined"!=typeof document&&"startViewTransition"in document&&document.startViewTransition((()=>r)),r}return Promise.resolve()}}}const We=t({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Te,setup(e,{slots:t}){const n=u(Te(e)),{options:r}=f(Le),a=o((()=>({[Ue(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ue(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=t.default&&(1===(o=t.default(n)).length?o[0]:o);var o;return e.custom?r:l("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},r)}}});function De(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ue=(e,t,n)=>null!=e?e:null!=t?t:n;function Ve(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Fe=t({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:r}){const i=f(Be),u=o((()=>e.route||i.value)),p=f(qe,0),h=o((()=>{let e=n(p);const{matched:t}=u.value;let r;for(;(r=t[e])&&!r.components;)e++;return e})),m=o((()=>u.value.matched[h.value]));a(qe,o((()=>h.value+1))),a(Ae,m),a(Be,u);const g=s();return c((()=>[g.value,m.value,e.name]),(([e,t,n],[r,o,a])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&T(t,o)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const n=u.value,o=e.name,a=m.value,s=a&&a.components[o];if(!s)return Ve(r.default,{Component:s,route:n});const c=a.props[o],i=c?!0===c?n.params:"function"==typeof c?c(n):c:null,f=l(s,d({},i,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(a.instances[o]=null)},ref:g}));return Ve(r.default,{Component:f,route:n})||f}}});function ze(t){const o=we(t.routes,t),a=t.parseQuery||je,s=t.stringifyQuery||$e,c=t.history,l=Ge(),u=Ge(),f=Ge(),h=e(V);let y=V;p&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const b=m.bind(null,(e=>""+e)),w=m.bind(null,M),E=m.bind(null,B);function R(e,t){if(t=d({},t||h.value),"string"==typeof e){const n=_(a,e,t.path),r=o.resolve({path:n.path},t),s=c.createHref(n.fullPath);return d(n,r,{params:E(r.params),hash:B(n.hash),redirectedFrom:void 0,href:s})}let n;if(null!=e.path)n=d({},e,{path:_(a,e.path,t.path).path});else{const r=d({},e.params);for(const e in r)null==r[e]&&delete r[e];n=d({},e,{params:w(r)}),t.params=w(t.params)}const r=o.resolve(n,t),l=e.hash||"";r.params=b(E(r.params));const i=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(s,d({},e,{hash:(u=l,q(u).replace(j,"{").replace(S,"}").replace(P,"^")),path:r.path}));var u;const f=c.createHref(i);return d({fullPath:i,hash:l,query:s===$e?Se(e.query):e.query||{}},r,{redirectedFrom:void 0,href:f})}function k(e){return"string"==typeof e?_(a,e,h.value.path):d({},e)}function O(e,t){if(y!==e)return ie(8,{from:t,to:e})}function x(e){return $(e)}function C(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=k(r):{path:r},r.params={}),d({query:e.query,hash:e.hash,params:null!=r.path?{}:e.params},r)}}function $(e,t){const n=y=R(e),r=h.value,o=e.state,a=e.force,c=!0===e.replace,l=C(n);if(l)return $(d(k(l),{state:"object"==typeof l?d({},o,l.state):o,force:a,replace:c}),t||n);const i=n;let u;return i.redirectedFrom=t,!a&&function(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&T(t.matched[r],n.matched[o])&&W(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(s,r,n)&&(u=ie(16,{to:i,from:r}),te(r,r,!0,!1)),(u?Promise.resolve(u):G(i,r)).catch((e=>ue(e)?ue(e,2)?e:Y(e):X(e,i,r))).then((e=>{if(e){if(ue(e,2))return $(d({replace:c},k(e.to),{state:"object"==typeof e.to?d({},o,e.to.state):o,force:a}),t||i)}else e=D(i,r,!0,c,o);return I(i,r,e),e}))}function A(e,t){const n=O(e,t);return n?Promise.reject(n):Promise.resolve()}function L(e){const t=oe.values().next().value;return t&&"function"==typeof t.runWithContext?t.runWithContext(e):e()}function G(e,t){let n;const[r,o,a]=function(e,t){const n=[],r=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let s=0;s<a;s++){const a=t.matched[s];a&&(e.matched.find((e=>T(e,a)))?r.push(a):n.push(a));const c=e.matched[s];c&&(t.matched.find((e=>T(e,c)))||o.push(c))}return[n,r,o]}(e,t);n=Ie(r.reverse(),"beforeRouteLeave",e,t);for(const c of r)c.leaveGuards.forEach((r=>{n.push(_e(r,e,t))}));const s=A.bind(null,e,t);return n.push(s),ce(n).then((()=>{n=[];for(const r of l.list())n.push(_e(r,e,t));return n.push(s),ce(n)})).then((()=>{n=Ie(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach((r=>{n.push(_e(r,e,t))}));return n.push(s),ce(n)})).then((()=>{n=[];for(const r of a)if(r.beforeEnter)if(v(r.beforeEnter))for(const o of r.beforeEnter)n.push(_e(o,e,t));else n.push(_e(r.beforeEnter,e,t));return n.push(s),ce(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=Ie(a,"beforeRouteEnter",e,t,L),n.push(s),ce(n)))).then((()=>{n=[];for(const r of u.list())n.push(_e(r,e,t));return n.push(s),ce(n)})).catch((e=>ue(e,8)?e:Promise.reject(e)))}function I(e,t,n){f.list().forEach((r=>L((()=>r(e,t,n)))))}function D(e,t,n,r,o){const a=O(e,t);if(a)return a;const s=t===V,l=p?history.state:{};n&&(r||s?c.replace(e.fullPath,d({scroll:s&&l&&l.scroll},o)):c.push(e.fullPath,o)),h.value=e,te(e,t,n,s),Y()}let U;function z(){U||(U=c.listen(((e,t,n)=>{if(!se.listening)return;const r=R(e),o=C(r);if(o)return void $(d(o,{replace:!0,force:!0}),r).catch(g);y=r;const a=h.value;var s,l;p&&(s=J(a.fullPath,n.delta),l=N(),ee.set(s,l)),G(r,a).catch((e=>ue(e,12)?e:ue(e,2)?($(d(k(e.to),{force:!0}),r).then((e=>{ue(e,20)&&!n.delta&&n.type===F.pop&&c.go(-1,!1)})).catch(g),Promise.reject()):(n.delta&&c.go(-n.delta,!1),X(e,r,a)))).then((e=>{(e=e||D(r,a,!1))&&(n.delta&&!ue(e,8)?c.go(-n.delta,!1):n.type===F.pop&&ue(e,20)&&c.go(-1,!1)),I(r,a,e)})).catch(g)})))}let K,H=Ge(),Q=Ge();function X(e,t,n){Y(e);const r=Q.list();return r.length&&r.forEach((r=>r(e,t,n))),Promise.reject(e)}function Y(e){return K||(K=!e,z(),H.list().forEach((([t,n])=>e?n(e):t())),H.reset()),e}function te(e,n,r,o){const{scrollBehavior:a}=t;if(!p||!a)return Promise.resolve();const s=!r&&function(e){const t=ee.get(e);return ee.delete(e),t}(J(e.fullPath,0))||(o||!r)&&history.state&&history.state.scroll||null;return i().then((()=>a(e,n,s))).then((e=>e&&Z(e))).catch((t=>X(t,e,n)))}const ne=e=>c.go(e);let re;const oe=new Set,se={currentRoute:h,listening:!0,addRoute:function(e,t){let n,r;return ae(e)?(n=o.getRecordMatcher(e),r=t):r=e,o.addRoute(r,n)},removeRoute:function(e){const t=o.getRecordMatcher(e);t&&o.removeRoute(t)},clearRoutes:o.clearRoutes,hasRoute:function(e){return!!o.getRecordMatcher(e)},getRoutes:function(){return o.getRoutes().map((e=>e.record))},resolve:R,options:t,push:x,replace:function(e){return x(d(k(e),{replace:!0}))},go:ne,back:()=>ne(-1),forward:()=>ne(1),beforeEach:l.add,beforeResolve:u.add,afterEach:f.add,onError:Q.add,isReady:function(){return K&&h.value!==V?Promise.resolve():new Promise(((e,t)=>{H.add([e,t])}))},install(e){e.component("RouterLink",We),e.component("RouterView",Fe),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>n(h)}),p&&!re&&h.value===V&&(re=!0,x(c.location).catch((e=>{})));const t={};for(const n in V)Object.defineProperty(t,n,{get:()=>h.value[n],enumerable:!0});e.provide(Le,this),e.provide(Me,r(t)),e.provide(Be,h);const o=e.unmount;oe.add(e),e.unmount=function(){oe.delete(e),oe.size<1&&(y=V,U&&U(),U=null,h.value=V,re=!1,K=!1),o()}}};function ce(e){return e.reduce(((e,t)=>e.then((()=>L(t)))),Promise.resolve())}return se}export{Fe as R,oe as a,ze as c};
