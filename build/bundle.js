var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function s(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function p(){return f(" ")}function d(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function g(t,e){t.value=null==e?"":e}let y;function b(t){y=t}function $(t){(function(){if(!y)throw new Error("Function called outside component initialization");return y})().$$.on_mount.push(t)}const v=[],k=[],x=[],w=[],j=Promise.resolve();let _=!1;function C(t){x.push(t)}let O=!1;const E=new Set;function F(){if(!O){O=!0;do{for(let t=0;t<v.length;t+=1){const e=v[t];b(e),S(e.$$)}for(b(null),v.length=0;k.length;)k.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];E.has(e)||(E.add(e),e())}x.length=0}while(v.length);for(;w.length;)w.pop()();_=!1,O=!1,E.clear()}}function S(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const N=new Set;let A;function I(){A={r:0,c:[],p:A}}function z(){A.r||o(A.c),A=A.p}function R(t,e){t&&t.i&&(N.delete(t),t.i(e))}function U(t,e,n,o){if(t&&t.o){if(N.has(t))return;N.add(t),A.c.push((()=>{N.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function L(t,n,c){const{fragment:i,on_mount:s,on_destroy:a,after_update:u}=t.$$;i&&i.m(n,c),C((()=>{const n=s.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(C)}function q(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function B(t,e){-1===t.$$.dirty[0]&&(v.push(t),_||(_=!0,j.then(F)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function T(e,r,c,i,s,a,l=[-1]){const f=y;b(e);const p=r.props||{},d=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:l,skip_bound:!1};let h=!1;if(d.ctx=c?c(e,p,((t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&s(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),h&&B(e,t)),n})):[],d.update(),h=!0,o(d.before_update),d.fragment=!!i&&i(d.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);d.fragment&&d.fragment.l(t),t.forEach(u)}else d.fragment&&d.fragment.c();r.intro&&R(e.$$.fragment),L(e,r.target,r.anchor),F()}b(f)}class P{$destroy(){q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const G="0p92p8lG4Gz8fhZvcwSMxD",M="sammanfattning av dagens nyheter",D=()=>"localhost"===location.hostname||"127.0.0.1"===location.hostname||""===location.hostname?"http://localhost:5000":"https://richodemus.github.io/one-click-podcast/";function Z(e){let n,o,r,c,i,f;return{c(){n=l("label"),o=l("input"),r=p(),c=l("span"),h(o,"type","checkbox"),h(o,"class","svelte-1vizgz2"),h(c,"class","slider svelte-1vizgz2"),h(n,"class","switch svelte-1vizgz2")},m(t,u){a(t,n,u),s(n,o),o.checked=e[0],s(n,r),s(n,c),i||(f=d(o,"change",e[2]),i=!0)},p(t,[e]){1&e&&(o.checked=t[0])},i:t,o:t,d(t){t&&u(n),i=!1,f()}}}function H(t,e,n){let{checked:o=!1}=e,{color:r="#2196F3"}=e;return t.$$set=t=>{"checked"in t&&n(0,o=t.checked),"color"in t&&n(1,r=t.color)},[o,r,function(){o=this.checked,n(0,o)}]}class J extends P{constructor(t){super(),T(this,t,H,Z,c,{checked:0,color:1})}}var K="%[a-f0-9]{2}",Q=new RegExp(K,"gi"),V=new RegExp("("+K+")+","gi");function W(t,e){try{return decodeURIComponent(t.join(""))}catch(t){}if(1===t.length)return t;e=e||1;var n=t.slice(0,e),o=t.slice(e);return Array.prototype.concat.call([],W(n),W(o))}function X(t){try{return decodeURIComponent(t)}catch(o){for(var e=t.match(Q),n=1;n<e.length;n++)e=(t=W(e,n).join("")).match(Q);return t}}var Y,tt=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},n=V.exec(t);n;){try{e[n[0]]=decodeURIComponent(n[0])}catch(t){var o=X(n[0]);o!==n[0]&&(e[n[0]]=o)}n=V.exec(t)}e["%C2"]="�";for(var r=Object.keys(e),c=0;c<r.length;c++){var i=r[c];t=t.replace(new RegExp(i,"g"),e[i])}return t}(t)}},et=(t,e)=>{if("string"!=typeof t||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];const n=t.indexOf(e);return-1===n?[t]:[t.slice(0,n),t.slice(n+e.length)]},nt=(function(t,e){function n(t){if("string"!=typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function o(t,e){return e.encode?e.strict?encodeURIComponent(t).replace(/[!'()*]/g,(t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`)):encodeURIComponent(t):t}function r(t,e){return e.decode?tt(t):t}function c(t){return Array.isArray(t)?t.sort():"object"==typeof t?c(Object.keys(t)).sort(((t,e)=>Number(t)-Number(e))).map((e=>t[e])):t}function i(t){const e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function s(t){const e=(t=i(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function a(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function u(t,e){n((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);const o=function(t){let e;switch(t.arrayFormat){case"index":return(t,n,o)=>{e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===o[t]&&(o[t]={}),o[t][e[1]]=n):o[t]=n};case"bracket":return(t,n,o)=>{e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==o[t]?o[t]=[].concat(o[t],n):o[t]=[n]:o[t]=n};case"comma":case"separator":return(e,n,o)=>{const c="string"==typeof n&&n.includes(t.arrayFormatSeparator),i="string"==typeof n&&!c&&r(n,t).includes(t.arrayFormatSeparator);n=i?r(n,t):n;const s=c||i?n.split(t.arrayFormatSeparator).map((e=>r(e,t))):null===n?n:r(n,t);o[e]=s};default:return(t,e,n)=>{void 0!==n[t]?n[t]=[].concat(n[t],e):n[t]=e}}}(e),i=Object.create(null);if("string"!=typeof t)return i;if(!(t=t.trim().replace(/^[?#&]/,"")))return i;for(const n of t.split("&")){let[t,c]=et(e.decode?n.replace(/\+/g," "):n,"=");c=void 0===c?null:["comma","separator"].includes(e.arrayFormat)?c:r(c,e),o(r(t,e),c,i)}for(const t of Object.keys(i)){const n=i[t];if("object"==typeof n&&null!==n)for(const t of Object.keys(n))n[t]=a(n[t],e);else i[t]=a(n,e)}return!1===e.sort?i:(!0===e.sort?Object.keys(i).sort():Object.keys(i).sort(e.sort)).reduce(((t,e)=>{const n=i[e];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?t[e]=c(n):t[e]=n,t}),Object.create(null))}e.extract=s,e.parse=u,e.stringify=(t,e)=>{if(!t)return"";n((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);const r=n=>e.skipNull&&null==t[n]||e.skipEmptyString&&""===t[n],c=function(t){switch(t.arrayFormat){case"index":return e=>(n,r)=>{const c=n.length;return void 0===r||t.skipNull&&null===r||t.skipEmptyString&&""===r?n:null===r?[...n,[o(e,t),"[",c,"]"].join("")]:[...n,[o(e,t),"[",o(c,t),"]=",o(r,t)].join("")]};case"bracket":return e=>(n,r)=>void 0===r||t.skipNull&&null===r||t.skipEmptyString&&""===r?n:null===r?[...n,[o(e,t),"[]"].join("")]:[...n,[o(e,t),"[]=",o(r,t)].join("")];case"comma":case"separator":return e=>(n,r)=>null==r||0===r.length?n:0===n.length?[[o(e,t),"=",o(r,t)].join("")]:[[n,o(r,t)].join(t.arrayFormatSeparator)];default:return e=>(n,r)=>void 0===r||t.skipNull&&null===r||t.skipEmptyString&&""===r?n:null===r?[...n,o(e,t)]:[...n,[o(e,t),"=",o(r,t)].join("")]}}(e),i={};for(const e of Object.keys(t))r(e)||(i[e]=t[e]);const s=Object.keys(i);return!1!==e.sort&&s.sort(e.sort),s.map((n=>{const r=t[n];return void 0===r?"":null===r?o(n,e):Array.isArray(r)?r.reduce(c(n),[]).join("&"):o(n,e)+"="+o(r,e)})).filter((t=>t.length>0)).join("&")},e.parseUrl=(t,e)=>{e=Object.assign({decode:!0},e);const[n,o]=et(t,"#");return Object.assign({url:n.split("?")[0]||"",query:u(s(t),e)},e&&e.parseFragmentIdentifier&&o?{fragmentIdentifier:r(o,e)}:{})},e.stringifyUrl=(t,n)=>{n=Object.assign({encode:!0,strict:!0},n);const r=i(t.url).split("?")[0]||"",c=e.extract(t.url),s=e.parse(c,{sort:!1}),a=Object.assign(s,t.query);let u=e.stringify(a,n);u&&(u=`?${u}`);let l=function(t){let e="";const n=t.indexOf("#");return-1!==n&&(e=t.slice(n)),e}(t.url);return t.fragmentIdentifier&&(l=`#${o(t.fragmentIdentifier,n)}`),`${r}${u}${l}`}}(Y={exports:{}},Y.exports),Y.exports);const ot=[];function rt(e,n=t){let o;const r=[];function i(t){if(c(e,t)&&(e=t,o)){const t=!ot.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),ot.push(n,e)}if(t){for(let t=0;t<ot.length;t+=2)ot[t][0](ot[t+1]);ot.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(c,s=t){const a=[c,s];return r.push(a),1===r.length&&(o=n(i)||t),c(e),()=>{const t=r.indexOf(a);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}const ct=rt(localStorage.getItem("podcast_id")||G);ct.subscribe((t=>localStorage.setItem("podcast_id",t)));const it=rt(localStorage.getItem("episode_pattern")||M);it.subscribe((t=>localStorage.setItem("episode_pattern",t)));function st(e){let n,o,r;return{c(){n=l("button"),n.textContent="Login"},m(t,c){a(t,n,c),o||(r=d(n,"click",e[7],{once:!0}),o=!0)},p:t,i:t,o:t,d(t){t&&u(n),o=!1,r()}}}function at(t){let e,n,o,r,c,i,s,h;function m(t,e){return t[2]?lt:t[4]?void 0:ut}let g=m(t),y=g&&g(t),b=t[0]&&!t[4]&&ft(t),$=t[3]&&!t[4]&&pt(t);return{c(){e=l("button"),e.textContent="Logout",n=p(),y&&y.c(),o=p(),b&&b.c(),r=p(),$&&$.c(),c=f("")},m(u,l){a(u,e,l),a(u,n,l),y&&y.m(u,l),a(u,o,l),b&&b.m(u,l),a(u,r,l),$&&$.m(u,l),a(u,c,l),i=!0,s||(h=d(e,"click",t[8],{once:!0}),s=!0)},p(t,e){g===(g=m(t))&&y?y.p(t,e):(y&&y.d(1),y=g&&g(t),y&&(y.c(),y.m(o.parentNode,o))),t[0]&&!t[4]?b?(b.p(t,e),17&e&&R(b,1)):(b=ft(t),b.c(),R(b,1),b.m(r.parentNode,r)):b&&(I(),U(b,1,1,(()=>{b=null})),z()),t[3]&&!t[4]?$?$.p(t,e):($=pt(t),$.c(),$.m(c.parentNode,c)):$&&($.d(1),$=null)},i(t){i||(R(b),i=!0)},o(t){U(b),i=!1},d(t){t&&u(e),t&&u(n),y&&y.d(t),t&&u(o),b&&b.d(t),t&&u(r),$&&$.d(t),t&&u(c),s=!1,h()}}}function ut(e){let n;return{c(){n=l("p"),n.textContent="No episode found, check id and pattern"},m(t,e){a(t,n,e)},p:t,d(t){t&&u(n)}}}function lt(t){let e,n,o,r,c,i,h,g,y,b,$,v=t[2].name+"";return{c(){e=l("p"),n=f("Podcast: "),o=f(t[1]),r=p(),c=l("p"),i=f("Episode: "),h=f(v),g=p(),y=l("button"),y.textContent="Add to queue"},m(u,l){a(u,e,l),s(e,n),s(e,o),a(u,r,l),a(u,c,l),s(c,i),s(c,h),a(u,g,l),a(u,y,l),b||($=d(y,"click",t[9],{once:!0}),b=!0)},p(t,e){2&e&&m(o,t[1]),4&e&&v!==(v=t[2].name+"")&&m(h,v)},d(t){t&&u(e),t&&u(r),t&&u(c),t&&u(g),t&&u(y),b=!1,$()}}}function ft(t){let e,n,o,r,c;function i(e){t[13].call(null,e)}let s={};return void 0!==t[3]&&(s.checked=t[3]),o=new J({props:s}),k.push((()=>function(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}(o,"checked",i))),{c(){var t;e=l("p"),e.textContent="Change episode",n=p(),(t=o.$$.fragment)&&t.c()},m(t,r){a(t,e,r),a(t,n,r),L(o,t,r),c=!0},p(t,e){const n={};!r&&8&e&&(r=!0,n.checked=t[3],function(t){w.push(t)}((()=>r=!1))),o.$set(n)},i(t){c||(R(o.$$.fragment,t),c=!0)},o(t){U(o.$$.fragment,t),c=!1},d(t){t&&u(e),t&&u(n),q(o,t)}}}function pt(t){let e,n,r,c,i,h,m,y,b,$,v,k;return{c(){e=l("div"),n=l("p"),r=f("Podcast id: "),c=l("input"),i=l("button"),i.textContent="default",h=p(),m=l("p"),y=f("Episode should contain: "),b=l("input"),$=l("button"),$.textContent="default"},m(o,u){a(o,e,u),s(e,n),s(n,r),s(n,c),g(c,t[5]),s(n,i),s(e,h),s(e,m),s(m,y),s(m,b),g(b,t[6]),s(m,$),v||(k=[d(c,"input",t[14]),d(c,"input",t[10]),d(i,"click",t[11]),d(b,"input",t[15]),d(b,"input",t[10]),d($,"click",t[12])],v=!0)},p(t,e){32&e&&c.value!==t[5]&&g(c,t[5]),64&e&&b.value!==t[6]&&g(b,t[6])},d(t){t&&u(e),v=!1,o(k)}}}function dt(t){let e,n,o,r,c,i;const f=[at,st],d=[];function m(t,e){return t[0]?0:1}return r=m(t),c=d[r]=f[r](t),{c(){e=l("main"),n=l("h1"),n.textContent="One Click Podcast",o=p(),c.c(),h(n,"class","svelte-u9qvfs"),h(e,"class","svelte-u9qvfs")},m(t,c){a(t,e,c),s(e,n),s(e,o),d[r].m(e,null),i=!0},p(t,[n]){let o=r;r=m(t),r===o?d[r].p(t,n):(I(),U(d[o],1,1,(()=>{d[o]=null})),z(),c=d[r],c?c.p(t,n):(c=d[r]=f[r](t),c.c()),R(c,1),c.m(e,null))},i(t){i||(R(c),i=!0)},o(t){U(c),i=!1},d(t){t&&u(e),d[r].d()}}}function ht(t,e,n){let o,r;i(t,ct,(t=>n(5,o=t))),i(t,it,(t=>n(6,r=t)));var c=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(r,c){function i(t){try{a(o.next(t))}catch(t){c(t)}}function s(t){try{a(o.throw(t))}catch(t){c(t)}}function a(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,s)}a((o=o.apply(t,e||[])).next())}))};let s=null,a="",u=null,l=!1,f=!1;function p(){return c(this,void 0,void 0,(function*(){if(s){fetch("https://api.spotify.com/v1/shows/"+o,{headers:{Authorization:"Bearer "+s}}).then((t=>t.json())).then((t=>n(1,a=t.name)));const t=yield fetch("https://api.spotify.com/v1/shows/"+o+"/episodes",{headers:{Authorization:"Bearer "+s}}).then((t=>t.json())).then((t=>t.items.map((t=>({id:t.id,name:t.name,uri:t.uri})))));n(2,u=t.find((t=>t.name.toLowerCase().includes(r.toLowerCase()))))}n(4,f=!1)}))}return console.log("host is ",D()),$((()=>c(void 0,void 0,void 0,(function*(){n(4,f=!0);const t=nt.parse(location.hash);n(0,s=t.access_token),s&&window.history.replaceState({},document.title,D()),s&&console.log("Access Token: ",s),yield p()})))),[s,a,u,l,f,o,r,function(){window.location.href="https://accounts.spotify.com/authorize?client_id=d88b089d3c9f4376911d9f56565849fc&scope=user-modify-playback-state&response_type=token&redirect_uri="+D()},function(){n(0,s=null),n(2,u=null)},function(){fetch("https://api.spotify.com/v1/me/player/queue?uri="+u.uri,{method:"POST",headers:{Authorization:"Bearer "+s}})},p,function(){ct.set(G),p()},function(){it.set(M),p()},function(t){l=t,n(3,l)},function(){o=this.value,ct.set(o)},function(){r=this.value,it.set(r)}]}return new class extends P{constructor(t){super(),T(this,t,ht,dt,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
