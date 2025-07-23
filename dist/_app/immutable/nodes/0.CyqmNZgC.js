import"../chunks/DsnmJJEf.js";import{b as Ie,h as k,a as Oe,n as x,O as ke,G as Me,H as Re,I as le,J as oe,K as z,f as Y,ac as Se,ad as De,d as ee,s as Le,e as $,ae as Ce,c as Be,a5 as Ge,af as ce,ag as he,ah as He,ai as $e,L as ge,p as Pe,aj as Ue,ak as qe,al as K,am as _e,an as Ye,ao as je,ap as Fe,aq as Ve,V as We,ar as ze,as as Ke,at as Xe,au as Je,av as Qe,aw as Ze,ax as en,ay as nn,u as tn,r as rn,az as ie,a7 as P,Q as V,w as q,aA as fe,B as C,R as B,D as F,aB as ne,C as G,aC as ye,y as j,z as U,aD as de,v as xe,k as an,a6 as sn,A as be,F as ue,aa as ln}from"../chunks/CZRHFMOu.js";import{b as te,c as on}from"../chunks/Bk8xCZMQ.js";import{g as pe,a as cn}from"../chunks/lKT3WxkD.js";function we(e,t){return t}function fn(e,t,n){for(var r=e.items,a=[],i=t.length,s=0;s<i;s++)je(t[s].e,a,!0);var c=i>0&&a.length===0&&n!==null;if(c){var v=n.parentNode;Fe(v),v.append(n),r.clear(),D(e,t[0].prev,t[i-1].next)}Ve(a,()=>{for(var g=0;g<i;g++){var h=t[g];c||(r.delete(h.k),D(e,h.prev,h.next)),_e(h.e,!c)}})}function Ee(e,t,n,r,a,i=null){var s=e,c={flags:t,items:new Map,first:null};k&&Oe();var v=null,g=!1,h=new Map,T=ke(()=>{var d=n();return He(d)?d:d==null?[]:he(d)}),f,_;function p(){dn(_,f,c,h,s,a,t,r,n),i!==null&&(f.length===0?v?ge(v):v=ee(()=>i(s)):v!==null&&Pe(v,()=>{v=null}))}Ie(()=>{_??=We,f=x(T);var d=f.length;if(g&&d===0)return;g=d===0;let m=!1;if(k){var M=Me(s)===Re;M!==(d===0)&&(s=le(),oe(s),z(!1),m=!0)}if(k){for(var A=null,y,b=0;b<d;b++){if(Y.nodeType===Se&&Y.data===De){s=Y,m=!0,z(!1);break}var N=f[b],E=r(N,b);y=re(Y,c,A,null,N,E,b,a,t,n),c.items.set(E,y),A=y}d>0&&oe(le())}if(k)d===0&&i&&(v=ee(()=>i(s)));else if(Le()){var L=new Set,S=$;for(b=0;b<d;b+=1){N=f[b],E=r(N,b);var O=c.items.get(E)??h.get(E);O?Te(O,N,b):(y=re(null,c,null,null,N,E,b,a,t,n,!0),h.set(E,y)),L.add(E)}for(const[o,l]of c.items)L.has(o)||S.skipped_effects.add(l.e);S.add_callback(p)}else p();m&&z(!0),x(T)}),k&&(s=Y)}function dn(e,t,n,r,a,i,s,c,v){var g=t.length,h=n.items,T=n.first,f=T,_,p=null,d=[],m=[],M,A,y,b;for(b=0;b<g;b+=1){if(M=t[b],A=c(M,b),y=h.get(A),y===void 0){var N=r.get(A);if(N!==void 0){r.delete(A),h.set(A,N);var E=p?p.next:f;D(n,p,N),D(n,N,E),X(N,E,a),p=N}else{var L=f?f.e.nodes_start:a;p=re(L,n,p,p===null?n.first:p.next,M,A,b,i,s,v)}h.set(A,p),d=[],m=[],f=p.next;continue}if(Te(y,M,b),(y.e.f&K)!==0&&ge(y.e),y!==f){if(_!==void 0&&_.has(y)){if(d.length<m.length){var S=m[0],O;p=S.prev;var o=d[0],l=d[d.length-1];for(O=0;O<d.length;O+=1)X(d[O],S,a);for(O=0;O<m.length;O+=1)_.delete(m[O]);D(n,o.prev,l.next),D(n,p,o),D(n,l,S),f=S,p=l,b-=1,d=[],m=[]}else _.delete(y),X(y,f,a),D(n,y.prev,y.next),D(n,y,p===null?n.first:p.next),D(n,p,y),p=y;continue}for(d=[],m=[];f!==null&&f.k!==A;)(f.e.f&K)===0&&(_??=new Set).add(f),m.push(f),f=f.next;if(f===null)continue;y=f}d.push(y),p=y,f=y.next}if(f!==null||_!==void 0){for(var u=_===void 0?[]:he(_);f!==null;)(f.e.f&K)===0&&u.push(f),f=f.next;var w=u.length;if(w>0){var I=null;fn(n,u,I)}}e.first=n.first&&n.first.e,e.last=p&&p.e;for(var R of r.values())_e(R.e);r.clear()}function Te(e,t,n,r){Ce(e.v,t),e.i=n}function re(e,t,n,r,a,i,s,c,v,g,h){var T=(v&Ue)!==0,f=(v&qe)===0,_=T?f?Ge(a,!1,!1):ce(a):a,p=(v&$e)===0?s:ce(s),d={i:p,v:_,k:i,a:null,e:null,prev:n,next:r};try{if(e===null){var m=document.createDocumentFragment();m.append(e=Be())}return d.e=ee(()=>c(e,_,p,g),k),d.e.prev=n&&n.e,d.e.next=r&&r.e,n===null?h||(t.first=d):(n.next=d,n.e.next=d.e),r!==null&&(r.prev=d,r.e.prev=d.e),d}finally{}}function X(e,t,n){for(var r=e.next?e.next.e.nodes_start:n,a=t?t.e.nodes_start:n,i=e.e.nodes_start;i!==null&&i!==r;){var s=Ye(i);a.before(i),i=s}}function D(e,t,n){t===null?e.first=n:(t.next=n,t.e.next=n&&n.e),n!==null&&(n.prev=t,n.e.prev=t&&t.e)}const ve=[...` 	
\r\f \v\uFEFF`];function un(e,t,n){var r=""+e;if(n){for(var a in n)if(n[a])r=r?r+" "+a:a;else if(r.length)for(var i=a.length,s=0;(s=r.indexOf(a,s))>=0;){var c=s+i;(s===0||ve.includes(r[s-1]))&&(c===r.length||ve.includes(r[c]))?r=(s===0?"":r.substring(0,s))+r.substring(c+1):s=c}}return r===""?null:r}function pn(e,t){return e==null?null:String(e)}function vn(e,t,n,r,a,i){var s=e.__className;if(k||s!==n||s===void 0){var c=un(n,r,i);(!k||c!==e.getAttribute("class"))&&(c==null?e.removeAttribute("class"):e.className=c),e.__className=n}else if(i&&a!==i)for(var v in i){var g=!!i[v];(a==null||g!==!!a[v])&&e.classList.toggle(v,g)}return i}function se(e,t,n,r){var a=e.__style;if(k||a!==t){var i=pn(t);(!k||i!==e.getAttribute("style"))&&(i==null?e.removeAttribute("style"):e.style.cssText=i),e.__style=t}return r}const mn=Symbol("is custom element"),hn=Symbol("is html");function gn(e){if(k){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var r=e.value;ae(e,"value",null),e.value=r}if(e.hasAttribute("checked")){var a=e.checked;ae(e,"checked",null),e.checked=a}}};e.__on_r=n,ze(n),Ke()}}function ae(e,t,n,r){var a=_n(e);k&&(a[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||a[t]!==(a[t]=n)&&(t==="loading"&&(e[Xe]=n),n==null?e.removeAttribute(t):typeof n!="string"&&yn(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function _n(e){return e.__attributes??={[mn]:e.nodeName.includes("-"),[hn]:e.namespaceURI===Je}}var me=new Map;function yn(e){var t=me.get(e.nodeName);if(t)return t;me.set(e.nodeName,t=[]);for(var n,r=e,a=Element.prototype;a!==r;){n=Ze(r);for(var i in n)n[i].set&&t.push(i);r=Qe(r)}return t}function xn(e,t,n=t){var r=en(),a=new WeakSet;nn(e,"input",i=>{var s=i?e.defaultValue:e.value;if(s=J(e)?Q(s):s,n(s),$!==null&&a.add($),r&&s!==(s=t())){var c=e.selectionStart,v=e.selectionEnd;e.value=s??"",v!==null&&(e.selectionStart=c,e.selectionEnd=Math.min(v,e.value.length))}}),(k&&e.defaultValue!==e.value||tn(t)==null&&e.value)&&(n(J(e)?Q(e.value):e.value),$!==null&&a.add($)),rn(()=>{var i=t();e===document.activeElement&&a.has($)||J(e)&&i===Q(e.value)||e.type==="date"&&!i&&!e.value||i!==e.value&&(e.value=i??"")})}function J(e){var t=e.type;return t==="number"||t==="range"}function Q(e){return e===""?null:+e}const bn=!0,wn=!1,Pn=Object.freeze(Object.defineProperty({__proto__:null,prerender:bn,ssr:wn},Symbol.toStringTag,{value:"Module"}));var En=q('<div class="window"><div role="dialog" tabindex="0"><div class="window-title-icon"></div> <div class="window-title-text"><!></div> <div class="window-title-close"></div></div> <div class="window-content"><!></div></div>');function Tn(e,t){console.assert(t.initTop!==void 0,"initTop undefined"),console.assert(t.initLeft!==void 0,"initLeft undefined");let n=P(V(t.initTop)),r=P(V(t.initLeft)),a=0,i=0,s=0,c=0,v=P(!1);var g=En();fe("mouseup",de,()=>{B(v,!1)}),fe("mousemove",de,m=>{if(x(v)){let M=m.clientX-c,A=m.clientY-s;B(r,i+M),B(n,a+A)}});var h=C(g);let T;h.__mousedown=m=>{B(v,!0),a=x(n),i=x(r),s=m.clientY,c=m.clientX};var f=F(C(h),2),_=C(f);ne(_,()=>t.title),G(f),ye(2),G(h);var p=F(h,2),d=C(p);ne(d,()=>t.children),G(p),G(g),j(m=>{se(g,`top: ${x(n)??""}px; left: ${x(r)??""}px`),T=vn(h,1,"window-title",null,T,m)},[()=>({drag:x(v)})]),U(e,g)}ie(["mousedown"]);const Nn="dir",An={".":{type:"dir",children:{}},"index.md":{type:"file",content:`# Main page
This is a test
`},"..":{type:"dir",children:{}},fold:{type:"dir",children:{".":{type:"dir",children:{}},"README.md":{type:"file",content:`# Fold - A functional programming language

A (purely) functional programming language

This language is being developed as part of a [ABA](https://www.ahs-aba.at/).

## Features
- [x] working parser
- [x] basic syntax (expressions, function application)
- [x] compilation to combinator graph
- [x] reduction/interpretation of graph
- [x] type inference (hindley-milner)
- [x] let bindings
- [x] garbage collection
- [x] sections (*1), (-2), ...
- [x] lambda functions
- [x] data structures
- [x] lists / strings
- [x] char stdlib (char <-> int)?
- [x] comments
- [x] interfaces, type classes, etc
- [x] inference of "type classes"
- [x] standard library
- [x] extern function calls / FFI
- [x] I/O
- [x] compilation to SKIBC
- [x] name
- [x] forward declarations
- [x] entry point that calls main using forward declaration with io type. 
- [x] &{entry} pragma to change main function name
- [x] NodeJS target
- [ ] &{global} pragma for type definitions (makes all constructors globally available \\[e. g. true === bool::true, ...\\])
- [ ] autogenerated instances (either pragma or metaprogramming over type fields)
- [ ] -infix- syntax
- [ ] \`x y => f x y\` as syntactic sugar for \`x => y => f x y\`
- [ ] scope for alias/macro \\[type/kind/expr\\]
- [ ] \`_\` for discard
- [ ] pattern matching on function definition
- [ ] syntax for applying and capturing interface dictionaries
- [ ] a way of creating custom constraints (with checks for uniqueness / explicit instances)
- [ ] ...

## TODOs
- [x] fix nested let and lambda bugs
- [x] change method to return values in direct-exec compiler, currently does not update graph, values are computated too many
      times, probably biggest performance bottleneck there currently
- [ ] toplevel dependency analysis, fixes hoisting bug (maybe per namespace?)
- [ ] disallow ::prim namespace
- [ ] throw error when using qualified variable in pattern that is not constructor
- [ ] disallow duplicate definitions in \`main\`
- [ ] fix associativity bug (right + left mixed causes bugs, if possible rework operator resolution completely).
- [ ] better type annotation syntax (let f (x: int): int = x)
- [ ] implicit match \\[let f = match { .. } => let f = x => match x { ... }\\]
- [ ] allow freestanding type annotations
- [ ] list patterns
- [ ] change toplevel syntax to not use let as semantics are different (maybe def?)
- [ ] allow pattern matching on function/let definition \\[some kind of guard syntax, maybe allow bools here too, would require bool pragma\\]
- [ ] fix bug in TIGRE-native GC implementation (see 04-raylib)
- [ ] rewrite this entire codebase in a more readable style \\[e.g. mtl\\]
- [ ] introduce better string type
- [ ] introduce fast-path for int-to-string, currently slowest part in 02-factorial.fl
- [ ] make kinds equivalent to types, infer kinds (=types of types)
- [ ] dependent types?
- [ ] ...

<p class="todo">The REPL is currently in a sleeping state and does *not* support newer 
features like the preservation of type classes over multiple lines.
Use it at your own risk.</p>

## Usage
\`\`\`sh
# cabal 3.12.1.0, ghc 9.10.1 (installed via GHCup)
cabal update
# run
./build.sh run main.fl
# or
./build.sh
./target/foldc main.fl

# interpret [GENERALLY RECOMMENDED]
./target/foldc main.fl
# native compilation [x86_64 linux, A BIT UNSTABLE]
./target/foldc --compile main.fl && ./main
# node js [RECOMMENDED FOR SPPED]
./target/foldc --js main.fl && node ./main.js
\`\`\`

### Docker

\`\`\`sh
docker build --tag fold:foldc .
docker run -v .:/tmp/share -it fold:foldc
/opt/foldc/target/foldc /tmp/share/main.fl
# or
/opt/foldc/target/foldc --compile /tmp/share/main.fl
/tmp/share/main
\`\`\`

## Contributing
see [CONTRIBUTING]

[CONTRIBUTING]: CONTRIBUTING.md
`},"..":{type:"dir",children:{}}}}},In={type:Nn,children:An},On=(e,t,n,r,a)=>{e.key==="Enter"&&(t(x(n)),r(x(n)),B(n,""),a())};var kn=q("<span> </span>"),Mn=()=>{},Rn=q('<pre class="terminal-line"> </pre>'),Sn=q('<div class="terminal" role="button" tabindex="0"><!><input type="text" class="terminal-input"/><pre class="terminal-line terminal-cursor">&nbsp;</pre></div>');function Z(e,t){xe(t,!0);const n=In,r="root",a="localhost";let i=P("/");function s(o){let l=n;o.startsWith("/")||(o=`${x(i)}/${o}`),o=o.replaceAll("//","/"),o.startsWith("/")&&(o=o.slice(1));let u=o.split("/");u=u.filter(I=>I!==""&&I!==".");let w=[];for(let I of u)I===".."?w.pop():w.push(I);o=w.join("/");for(let I of u){if(l.type==="file")return"ENOTDIR";{const R=l.children;if(R[I])l=R[I];else return"ENOENT"}}return{entry:l,path:`/${o}`}}const c=V([""]),v=()=>"#",g=()=>`[${r}@${a} ${x(i)}]${v()} `;let h;const T=o=>{const l=o.split(`
`);for(let u in l.slice(0,-1))l[u]+=`
`;c[c.length-1]+=l[0];for(let u of l.slice(1))c.push(u);queueMicrotask(()=>{h&&(h.scrollTop=h.scrollHeight)})},f=()=>T(g()),_=o=>T(`${o}
`),p=o=>{f(),_(o)},d=o=>{switch(o){case"ENOENT":return"No such file or directory";case"EISDIR":return"Is a directory";case"ENOTDIR":return"Not a directory";case"ETOOMANYARGS":return"Too many arguments"}},m=(o,l)=>{_(`${o}: ${d(l)}`)},M=["ls","clear","whoami","pwd","cd","help"],A={ls:"list files",clear:"clear screen",whoami:"print user",pwd:"print current directory",cd:"change directory",help:"list availible commands"};function y(o){return M.includes(o)}const b={ls:(...o)=>{const l=s(x(i));if(typeof l=="string")m("ls",l);else if(l.entry.type!=="dir")m("ls","ENOTDIR");else{const u=Object.keys(l.entry.children).sort();for(let w of u.keys())w!==0&&T(" "),T(u[w]);_("")}return 1},clear:(...o)=>(c.length=0,c.push(""),0),whoami:(...o)=>(_(r),0),pwd:(...o)=>(_(x(i)),0),cd:(...o)=>{if(o.length>1)return m("cd","ETOOMANYARGS"),1;let l;o.length===0?l="/":l=o[0];const u=s(l);return typeof u=="string"?m(`cd: ${l}`,u):u.entry.type!=="dir"?m(`cd: ${l}`,"ENOTDIR"):(pe(`#${u.path}`),B(i,u.path,!0)),0},help:(...o)=>{_("Availible commands:");let l=M.map(u=>u.length).reduce((u,w,I,R)=>Math.max(u,w));for(let u of M)_(u+" ".repeat(l+1-u.length)+" -- "+A[u]);return 0}},N=o=>{if(o==="")return;let l=o.split(" ");if(l.length===0)return;const u=l[0],w=l.slice(1);y(u)?b[u](...w):m(u,"ENOENT")};let E,L=P(""),S=P("0ch");an(()=>{B(S,x(L).length+"ch")}),sn(()=>{const o=window.location.hash.slice(1),l=s(o);typeof l=="string"?m("path",l):l.entry.type!=="dir"?m("path","ENOTDIR"):(console.log(l.path,o),l.path!==o&&pe(`#${l.path}`),B(i,l.path,!0)),p("help"),N("help"),f(),E.focus()});function O(){E.focus()}return Tn(e,{get initTop(){return t.initTop},get initLeft(){return t.initLeft},title:l=>{var u=kn(),w=C(u);G(u),j(()=>ue(w,`xterm@localhost ${x(i)??""}`)),U(l,u)},children:(l,u)=>{var w=Sn();w.__click=()=>E.focus(),w.__keydown=[Mn];var I=C(w);Ee(I,17,()=>c,we,(H,Ne)=>{var W=Rn(),Ae=C(W,!0);G(W),j(()=>ue(Ae,x(Ne))),U(H,W)});var R=F(I);gn(R),R.__keydown=[On,_,L,N,f],te(R,H=>E=H,()=>E),ye(),G(w),te(w,H=>h=H,()=>h),j(()=>se(R,`width: ${x(S)??""}`)),xn(R,()=>x(L),H=>B(L,H)),U(l,w)}}),be({focus:O})}ie(["click","keydown"]);var Dn=(e,t,n)=>{let r=x(t).index;for(let a of n)a.index>=r&&a.index--;x(t).index=n.length-1},Ln=q('<div class="window-wrapper" role="button" tabindex="0"><!></div>'),Cn=q('<main class="main"><noscript></noscript> <!> <!></main>');function Un(e,t){xe(t,!0);let n=V([{index:0,component:Z,obj:void 0},{index:1,component:Z,obj:void 0},{index:2,component:Z,obj:void 0}]);cn(()=>{let s=n.length-1;for(let c of n.keys())if(n[c].index==s){n[c].obj?.focus();break}});var r=Cn(),a=F(C(r),2);Ee(a,17,()=>n,we,(s,c,v)=>{var g=Ln();const h=ln(()=>x(c).component);g.__mousedown=[Dn,c,n],ae(g,"id",`window-wrapper-${v}`);var T=C(g);on(T,()=>x(h),(f,_)=>{te(_(f,{initTop:v*70+100,initLeft:v*50}),(p,d)=>d.obj=p,p=>p?.obj,()=>[x(c)])}),G(g),j(()=>se(g,`z-index: ${x(c).index??""};`)),U(s,g)});var i=F(a,2);ne(i,()=>t.children),G(r),U(e,r),be()}ie(["mousedown"]);export{Un as component,Pn as universal};
