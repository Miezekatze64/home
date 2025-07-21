import"../chunks/DsnmJJEf.js";import"../chunks/69_IOA4Y.js";import{y as Ae,w as A,x as xe,g as x,O as Ie,z as Oe,H as Me,A as fe,B as ce,C as X,L as V,ac as Re,ad as Se,F as ne,I as ke,G as U,ae as De,D as Ce,a5 as Le,af as ue,ag as be,ah as $e,ai as Ge,J as we,K as Be,aj as He,ak as Ue,al as j,am as Ee,an as qe,ao as Pe,ap as Ye,aq as Fe,V as Ve,ar as We,as as ze,at as Ke,au as Xe,av as je,aw as Je,u as Qe,r as Ze,ax as en,p as nn,Q as tn,b as rn,R as D,a6 as an,j as ae,ay as J,n as q,a7 as H,s as K,t as de,l as te,m as ln,az as ve,o as P,aA as me,v as pe}from"../chunks/BaH4UuaO.js";import{b as he}from"../chunks/BZAFtIEY.js";function sn(e,t){return t}function on(e,t,n){for(var r=e.items,l=[],a=t.length,s=0;s<a;s++)Pe(t[s].e,l,!0);var c=a>0&&l.length===0&&n!==null;if(c){var p=n.parentNode;Ye(p),p.append(n),r.clear(),R(e,t[0].prev,t[a-1].next)}Fe(l,()=>{for(var E=0;E<a;E++){var y=t[E];c||(r.delete(y.k),R(e,y.prev,y.next)),Ee(y.e,!c)}})}function fn(e,t,n,r,l,a=null){var s=e,c={flags:t,items:new Map,first:null};A&&xe();var p=null,E=!1,y=new Map,O=Ie(()=>{var f=n();return $e(f)?f:f==null?[]:be(f)}),o,g;function u(){cn(g,o,c,y,s,l,t,r,n),a!==null&&(o.length===0?p?we(p):p=ne(()=>a(s)):p!==null&&Be(p,()=>{p=null}))}Ae(()=>{g??=Ve,o=x(O);var f=o.length;if(E&&f===0)return;E=f===0;let _=!1;if(A){var S=Oe(s)===Me;S!==(f===0)&&(s=fe(),ce(s),X(!1),_=!0)}if(A){for(var I=null,m,h=0;h<f;h++){if(V.nodeType===Re&&V.data===Se){s=V,_=!0,X(!1);break}var b=o[h],w=r(b,h);m=re(V,c,I,null,b,w,h,l,t,n),c.items.set(w,m),I=m}f>0&&ce(fe())}if(A)f===0&&a&&(p=ne(()=>a(s)));else if(ke()){var C=new Set,M=U;for(h=0;h<f;h+=1){b=o[h],w=r(b,h);var T=c.items.get(w)??y.get(w);T?Te(T,b,h):(m=re(null,c,null,null,b,w,h,l,t,n,!0),y.set(w,m)),C.add(w)}for(const[L,k]of c.items)C.has(L)||M.skipped_effects.add(k.e);M.add_callback(u)}else u();_&&X(!0),x(O)}),A&&(s=V)}function cn(e,t,n,r,l,a,s,c,p){var E=t.length,y=n.items,O=n.first,o=O,g,u=null,f=[],_=[],S,I,m,h;for(h=0;h<E;h+=1){if(S=t[h],I=c(S,h),m=y.get(I),m===void 0){var b=r.get(I);if(b!==void 0){r.delete(I),y.set(I,b);var w=u?u.next:o;R(n,u,b),R(n,b,w),Q(b,w,l),u=b}else{var C=o?o.e.nodes_start:l;u=re(C,n,u,u===null?n.first:u.next,S,I,h,a,s,p)}y.set(I,u),f=[],_=[],o=u.next;continue}if(Te(m,S,h),(m.e.f&j)!==0&&we(m.e),m!==o){if(g!==void 0&&g.has(m)){if(f.length<_.length){var M=_[0],T;u=M.prev;var L=f[0],k=f[f.length-1];for(T=0;T<f.length;T+=1)Q(f[T],M,l);for(T=0;T<_.length;T+=1)g.delete(_[T]);R(n,L.prev,k.next),R(n,u,L),R(n,k,M),o=M,u=k,h-=1,f=[],_=[]}else g.delete(m),Q(m,o,l),R(n,m.prev,m.next),R(n,m,u===null?n.first:u.next),R(n,u,m),u=m;continue}for(f=[],_=[];o!==null&&o.k!==I;)(o.e.f&j)===0&&(g??=new Set).add(o),_.push(o),o=o.next;if(o===null)continue;m=o}f.push(m),u=m,o=m.next}if(o!==null||g!==void 0){for(var $=g===void 0?[]:be(g);o!==null;)(o.e.f&j)===0&&$.push(o),o=o.next;var W=$.length;if(W>0){var G=null;on(n,$,G)}}e.first=n.first&&n.first.e,e.last=u&&u.e;for(var B of r.values())Ee(B.e);r.clear()}function Te(e,t,n,r){De(e.v,t),e.i=n}function re(e,t,n,r,l,a,s,c,p,E,y){var O=(p&He)!==0,o=(p&Ue)===0,g=O?o?Le(l,!1,!1):ue(l):l,u=(p&Ge)===0?s:ue(s),f={i:u,v:g,k:a,a:null,e:null,prev:n,next:r};try{if(e===null){var _=document.createDocumentFragment();_.append(e=Ce())}return f.e=ne(()=>c(e,g,u,E),A),f.e.prev=n&&n.e,f.e.next=r&&r.e,n===null?y||(t.first=f):(n.next=f,n.e.next=f.e),r!==null&&(r.prev=f,r.e.prev=f.e),f}finally{}}function Q(e,t,n){for(var r=e.next?e.next.e.nodes_start:n,l=t?t.e.nodes_start:n,a=e.e.nodes_start;a!==null&&a!==r;){var s=qe(a);l.before(a),a=s}}function R(e,t,n){t===null?e.first=n:(t.next=n,t.e.next=n&&n.e),n!==null&&(n.prev=t,n.e.prev=t&&t.e)}function un(e,t,n,r,l){A&&xe();var a=t.$$slots?.[n],s=!1;a===!0&&(a=t.children,s=!0),a===void 0||a(e,s?()=>r:r)}const ge=[...` 	
\r\f \v\uFEFF`];function dn(e,t,n){var r=""+e;if(n){for(var l in n)if(n[l])r=r?r+" "+l:l;else if(r.length)for(var a=l.length,s=0;(s=r.indexOf(l,s))>=0;){var c=s+a;(s===0||ge.includes(r[s-1]))&&(c===r.length||ge.includes(r[c]))?r=(s===0?"":r.substring(0,s))+r.substring(c+1):s=c}}return r===""?null:r}function vn(e,t){return e==null?null:String(e)}function mn(e,t,n,r,l,a){var s=e.__className;if(A||s!==n||s===void 0){var c=dn(n,r,a);(!A||c!==e.getAttribute("class"))&&(c==null?e.removeAttribute("class"):e.className=c),e.__className=n}else if(a&&l!==a)for(var p in a){var E=!!a[p];(l==null||E!==!!l[p])&&e.classList.toggle(p,E)}return a}function _e(e,t,n,r){var l=e.__style;if(A||l!==t){var a=vn(t);(!A||a!==e.getAttribute("style"))&&(a==null?e.removeAttribute("style"):e.style.cssText=a),e.__style=t}return r}const pn=Symbol("is custom element"),hn=Symbol("is html");function gn(e){if(A){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var r=e.value;ye(e,"value",null),e.value=r}if(e.hasAttribute("checked")){var l=e.checked;ye(e,"checked",null),e.checked=l}}};e.__on_r=n,We(n),ze()}}function ye(e,t,n,r){var l=_n(e);A&&(l[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||l[t]!==(l[t]=n)&&(t==="loading"&&(e[Ke]=n),e.removeAttribute(t))}function _n(e){return e.__attributes??={[pn]:e.nodeName.includes("-"),[hn]:e.namespaceURI===Xe}}function yn(e,t,n=t){var r=je(),l=new WeakSet;Je(e,"input",a=>{var s=a?e.defaultValue:e.value;if(s=Z(e)?ee(s):s,n(s),U!==null&&l.add(U),r&&s!==(s=t())){var c=e.selectionStart,p=e.selectionEnd;e.value=s??"",p!==null&&(e.selectionStart=c,e.selectionEnd=Math.min(p,e.value.length))}}),(A&&e.defaultValue!==e.value||Qe(t)==null&&e.value)&&(n(Z(e)?ee(e.value):e.value),U!==null&&l.add(U)),Ze(()=>{var a=t();e===document.activeElement&&l.has(U)||Z(e)&&a===ee(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function Z(e){var t=e.type;return t==="number"||t==="range"}function ee(e){return e===""?null:+e}const xn=!0,Dn=Object.freeze(Object.defineProperty({__proto__:null,prerender:xn},Symbol.toStringTag,{value:"Module"})),bn="dir",wn={".":{type:"dir",children:{}},"index.md":{type:"file",content:`# Main page
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
`},"..":{type:"dir",children:{}}}}},En={type:bn,children:wn},Tn=(e,t,n,r,l)=>{e.key==="Enter"&&(t(x(n)),r(x(n)),D(n,""),l())};var Nn=ae('<pre class="terminal-line"> </pre>'),An=ae('<div class="terminal-wrapper"><div role="dialog" tabindex="0"><div class="terminal-title-icon"></div> <div class="terminal-title-text"> </div> <div class="terminal-title-close"></div></div> <div class="terminal" role="region"><!><input type="text" class="terminal-input"/><pre class="terminal-line terminal-cursor"> </pre></div></div>');function In(e,t){nn(t,!0);const n=En,r="root",l="localhost";let a=H("/");function s(i){let d=n;i.startsWith("/")||(i=x(a)+i),i=i.replaceAll("//","/"),i.startsWith("/")&&(i=i.slice(1));let v=i.split("/");v=v.filter(N=>N!==""&&N!=="."),i=v.join("/");for(let N of v){if(d.type==="file")return"ENOTDIR";if(N==="."||N==="")continue;{const oe=d.children;if(oe[N])d=oe[N];else return"ENOENT"}}return{entry:d,path:`/${i}`}}const c=tn([""]),p=()=>"#",E=()=>`[${r}@${l} ${x(a)}]${p()} `;let y;const O=i=>{const d=i.split(`
`);for(let v in d.slice(0,-1))d[v]+=`
`;c[c.length-1]+=d[0];for(let v of d.slice(1))c.push(v);queueMicrotask(()=>{y&&(y.scrollTop=y.scrollHeight)})},o=()=>O(E()),g=i=>O(`${i}
`),u=i=>{o(),g(i)},f=i=>{switch(i){case"ENOENT":return"No such file or directory";case"EISDIR":return"Is a directory";case"ENOTDIR":return"Not a directory";case"ETOOMANYARGS":return"Too many arguments"}},_=(i,d)=>{g(`${i}: ${f(d)}`)},S=["ls","clear","whoami","pwd","cd"];function I(i){return S.includes(i)}const m={ls:(...i)=>{const d=s(x(a));if(typeof d=="string")_("ls",d);else if(d.entry.type!=="dir")_("ls","ENOTDIR");else{const v=Object.keys(d.entry.children).sort();for(let N of v.keys())N!==0&&O(" "),O(v[N]);g("")}return 1},clear:(...i)=>(c.length=0,c.push(""),0),whoami:(...i)=>(g(r),0),pwd:(...i)=>(g(x(a)),0),cd:(...i)=>{if(i.length>1)return _("cd","ETOOMANYARGS"),1;let d;i.length===0?d="/":d=i[0];const v=s(d);return typeof v=="string"?_(`cd: ${v}`,v):v.entry.type!=="dir"?_(`cd: ${v}`,"ENOTDIR"):window&&window.location&&(window.location.href=v.path),0}},h=i=>{if(i==="")return;let d=i.split(" ");if(d.length===0)return;const v=d[0],N=d.slice(1);I(v)?m[v](...N):_(v,"ENOENT")};let b,w=H(""),C=H("0ch");rn(()=>{D(C,x(w).length+"ch")}),an(()=>{D(a,window.location.pathname,!0),u("ls"),h("ls"),o(),b.focus()});let M=H(0),T=H(0),L=0,k=0,$=0,W=0,G=H(!1);var B=An();J("mouseup",ve,()=>{D(G,!1)}),J("mousemove",ve,i=>{if(x(G)){let d=i.clientX-W,v=i.clientY-$;D(T,k+d),D(M,L+v)}});var Y=q(B);let ie;Y.__mousedown=i=>{D(G,!0),L=x(M),k=x(T),$=i.clientY,W=i.clientX};var le=K(q(Y),2),Ne=q(le);P(le),me(2),P(Y);var z=K(Y,2),se=q(z);fn(se,17,()=>c,sn,(i,d)=>{var v=Nn(),N=q(v,!0);P(v),de(()=>pe(N,x(d))),te(i,v)});var F=K(se);gn(F),F.__keydown=[Tn,g,w,h,o],he(F,i=>b=i,()=>b),me(),P(z),he(z,i=>y=i,()=>y),P(B),de(i=>{_e(B,`top: ${x(M)??""}px; left: ${x(T)??""}px`),ie=mn(Y,1,"terminal-title",null,ie,i),pe(Ne,`xterm@localhost ${x(a)??""}`),_e(F,`width: ${x(C)??""}`)},[()=>({drag:x(G)})]),J("mouseenter",z,()=>b.focus()),yn(F,()=>x(w),i=>D(w,i)),te(e,B),ln()}en(["mousedown","keydown"]);var On=ae('<main class="main"><!> <!></main>');function Cn(e,t){var n=On(),r=q(n);In(r,{});var l=K(r,2);un(l,t,"default",{}),P(n),te(e,n)}export{Cn as component,Dn as universal};
