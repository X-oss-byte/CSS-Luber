import{s as ft,f as v,l as F,a as Y,g as k,h as V,m as G,d as p,c as Z,j as I,i as T,y as b,r as J,u as X,G as Ct,N as zt,e as H,p as yt,n as $t,F as q,R as K,H as Et,S as pt,T as wt,M as Nt,U as Ot,J as Pt,K as It,I as Mt}from"../chunks/scheduler.37114a5d.js";import{S as ct,i as _t,b as lt,d as it,m as st,a as at,t as ot,e as rt,f as jt}from"../chunks/index.80e0ab0e.js";import{C as Ut}from"../chunks/CodePage.aad8268b.js";import{h as E,k as O,n as r,s as Q,d as j,i as N,t as A,b as s,f as W}from"../chunks/highlighter.e3fc48dc.js";import{C as Dt}from"../chunks/ComponentTabView.d9ff6e19.js";import{e as gt,u as Lt,d as Vt}from"../chunks/each.e5cbc508.js";import{s as R}from"../chunks/index.00bbd8d4.js";function bt(a,t,n){const i=a.slice();return i[17]=t[n],i}function vt(a){let t;function n(e,o){return e[17]===1&&e[17]+e[2]+1<e[0]?At:e[17]===e[4]-1&&e[17]-e[2]-1>e[0]?St:Bt}let i=n(a),l=i(a);return{c(){l.c(),t=H()},l(e){l.l(e),t=H()},m(e,o){l.m(e,o),T(e,t,o)},p(e,o){i===(i=n(e))&&l?l.p(e,o):(l.d(1),l=i(e),l&&(l.c(),l.m(t.parentNode,t)))},d(e){e&&p(t),l.d(e)}}}function Bt(a){let t,n=a[17]+1+"",i,l,e,o;function c(){return a[13](a[17])}return{c(){t=v("button"),i=F(n),this.h()},l(u){t=k(u,"BUTTON",{class:!0});var $=V(t);i=G($,n),$.forEach(p),this.h()},h(){I(t,"class",l=a[17]===a[0]?R.button.link:R.button.text)},m(u,$){T(u,t,$),b(t,i),e||(o=J(t,"click",c),e=!0)},p(u,$){a=u,$&64&&n!==(n=a[17]+1+"")&&$t(i,n),$&65&&l!==(l=a[17]===a[0]?R.button.link:R.button.text)&&I(t,"class",l)},d(u){u&&p(t),e=!1,o()}}}function St(a){let t,n="...",i,l;return{c(){t=v("button"),t.textContent=n,this.h()},l(e){t=k(e,"BUTTON",{class:!0,"data-svelte-h":!0}),q(t)!=="svelte-ynr0o3"&&(t.textContent=n),this.h()},h(){I(t,"class",R.button.text)},m(e,o){T(e,t,o),i||(l=J(t,"click",a[12]),i=!0)},p:X,d(e){e&&p(t),i=!1,l()}}}function At(a){let t,n="...",i,l;return{c(){t=v("button"),t.textContent=n,this.h()},l(e){t=k(e,"BUTTON",{class:!0,"data-svelte-h":!0}),q(t)!=="svelte-1i3q0f4"&&(t.textContent=n),this.h()},h(){I(t,"class",R.button.text)},m(e,o){T(e,t,o),i||(l=J(t,"click",a[11]),i=!0)},p:X,d(e){e&&p(t),i=!1,l()}}}function kt(a,t){let n,i=t[17]<=1||t[17]>=t[4]-1||Math.abs(t[0]-t[17])<=t[2],l,e=i&&vt(t);return{key:a,first:null,c(){n=H(),e&&e.c(),l=H(),this.h()},l(o){n=H(),e&&e.l(o),l=H(),this.h()},h(){this.first=n},m(o,c){T(o,n,c),e&&e.m(o,c),T(o,l,c)},p(o,c){t=o,c&85&&(i=t[17]<=1||t[17]>=t[4]-1||Math.abs(t[0]-t[17])<=t[2]),i?e?e.p(t,c):(e=vt(t),e.c(),e.m(l.parentNode,l)):e&&(e.d(1),e=null)},d(o){o&&(p(n),p(l)),e&&e.d(o)}}}function qt(a){let t,n,i="<",l,e,o=[],c=new Map,u,$,y=">",C,P,d,U=gt(a[6]);const z=m=>m[17];for(let m=0;m<U.length;m+=1){let _=bt(a,U,m),w=z(_);c.set(w,o[m]=kt(w,_))}return{c(){t=v("div"),n=v("button"),l=F(i),e=Y();for(let m=0;m<o.length;m+=1)o[m].c();u=Y(),$=v("button"),C=F(y),this.h()},l(m){t=k(m,"DIV",{class:!0});var _=V(t);n=k(_,"BUTTON",{class:!0});var w=V(n);l=G(w,i),w.forEach(p),e=Z(_);for(let f=0;f<o.length;f+=1)o[f].l(_);u=Z(_),$=k(_,"BUTTON",{class:!0});var B=V($);C=G(B,y),B.forEach(p),_.forEach(p),this.h()},h(){I(n,"class",R.button.text),I($,"class",R.button.text),I(t,"class",a[1])},m(m,_){T(m,t,_),b(t,n),b(n,l),b(t,e);for(let w=0;w<o.length;w+=1)o[w]&&o[w].m(t,null);b(t,u),b(t,$),b($,C),a[15](t),P||(d=[J(n,"click",a[10]),J($,"click",a[14])],P=!0)},p(m,[_]){_&221&&(U=gt(m[6]),o=Lt(o,_,z,1,m,U,c,t,Vt,kt,u,bt)),_&2&&I(t,"class",m[1])},i:X,o:X,d(m){m&&p(t);for(let _=0;_<o.length;_+=1)o[_].d();a[15](null),P=!1,Ct(d)}}}function Ht(a,t,n){let i,l,{classs:e=""}=t,{size:o=10}=t,{list:c}=t,{page:u=0}=t,{offset:$=1}=t,{jump:y=5}=t;const C=zt();let P;const d=f=>{n(0,u=Math.min(Math.max(f,0),i)),C("change",{index:u*o,size:o})},U=()=>u>0&&d(u-1),z=()=>d(Math.max(u-y,1)),m=()=>d(Math.min(u+y,i-1)),_=f=>d(f),w=()=>u<i&&d(u+1);function B(f){yt[f?"unshift":"push"](()=>{P=f,n(5,P)})}return a.$$set=f=>{"classs"in f&&n(1,e=f.classs),"size"in f&&n(8,o=f.size),"list"in f&&n(9,c=f.list),"page"in f&&n(0,u=f.page),"offset"in f&&n(2,$=f.offset),"jump"in f&&n(3,y=f.jump)},a.$$.update=()=>{a.$$.dirty&768&&n(4,i=c?Math.floor(((c.length||0)+o-1)/o)-1:0),a.$$.dirty&16&&n(6,l=Array.from({length:i+1},(f,x)=>x))},[u,e,$,y,i,P,l,d,o,c,U,z,m,_,w,B]}class Rt extends ct{constructor(t){super(),_t(this,t,Ht,qt,ft,{classs:1,size:8,list:9,page:0,offset:2,jump:3})}}function Ft(a){let t;return{c(){t=F("Empty")},l(n){t=G(n,"Empty")},m(n,i){T(n,t,i)},p:X,d(n){n&&p(t)}}}function Gt(a){let t,n=a[3][0].title+"",i,l,e,o=a[3][a[3].length-1].title+"",c;return{c(){t=v("div"),i=F(n),l=F(`\r
			. . .\r
			`),e=v("div"),c=F(o)},l(u){t=k(u,"DIV",{});var $=V(t);i=G($,n),$.forEach(p),l=G(u,`\r
			. . .\r
			`),e=k(u,"DIV",{});var y=V(e);c=G(y,o),y.forEach(p)},m(u,$){T(u,t,$),b(t,i),T(u,l,$),T(u,e,$),b(e,c)},p(u,$){$&8&&n!==(n=u[3][0].title+"")&&$t(i,n),$&8&&o!==(o=u[3][u[3].length-1].title+"")&&$t(c,o)},d(u){u&&(p(t),p(l),p(e))}}}function Jt(a){let t,n=`${E("script",` ${r("lang")}=${Q("ts")}`,`
${O("import")} ${r("Pagination")} ${O("from")} ${Q("src/instant-ui/components/pagination/Pagination.svelte")}

${j("let")} ${r("count")} = ${N(0)}
${j("let")} ${r("list")}: ${A("any")}${s("[]")}
${j("let")} ${r("index")} = ${N(0)}
${j("let")} ${r("size")} = ${N(10)}

$: ${r("view")} = ${r("list")}?.${W("slice")}${s("(")}${r("index")}, ${r("Math")}.${W("min")}${s("(",1)}${r("index")} + ${r("size")}, ${r("list")}.${r("length")}${s(")",1)}${s(")")}

${j("const")} ${W("handleChange")} = ${s("(")}${s("{",1)} ${r("detail")} ${s("}",1)}: ${s("{",1)} ${r("detail")}: ${s("{",2)} ${r("index")}: ${A("number")}, ${r("size")}: ${A("number")} ${s("}",2)}${s("}",1)}${s(")")} ${j("=>")} ${s("{")}
	${r("index")} = ${r("detail")}.${r("index")}
	${r("size")} = ${r("detail")}.${r("size")}
${s("}")}
${j("const")} ${W("getList")} = ${s("()")} ${j("=>")} ${s("{")}
	${O("if")} ${s("(",1)}${r("count")} < ${N(0)}${s(") {",1)}
		${r("count")} = ${N(0)}
	${s("}",1)} ${O("else")} ${s("{",1)}
		${r("count")} = ${r("Math")}.${W("floor")}${s("(",2)}${r("count")}${s(")",2)}
	${s("}",1)}
	${r("list")} = ${j("new")} ${A("Array")}${s("(",1)}${r("count")}${s(")",1)}
	${O("for")} ${s("(",1)}${j("let")} ${r("i")} = ${N(0)}; ${r("i")} < ${r("list")}?.${r("length")}; ${r("i")}++${s(") {",1)}
		${r("list")}${s("[",2)}${r("i")}${s("]",2)} = ${s("{",2)} ${r("title:")} ${Q("Lorem Ipsum is simply dummy text ")} + ${s("(")}${r("i")} + ${N(1)}${s(")")} ${s("}",2)}
	${s("}",1)}
${s("}")}
`)}

${E("div","",`
	${E("span","","contents: ")}${E("input",` ${O("bind")}:${A("value")}=${s("{")}${r("count")}${s("}")}
			${r("type")}=${Q("number")} ${r("type")}=${Q("bg=inherit w=3 ta=right")}
			${O("on")}:${A("change")}=${s("{")}${W("getList")}${s("}")}`,!1)}ea
	${E("div",` ${r("class")}=${Q("bd=.1_solid p=1")}`,`
		${s("{")}#${O("if")} ${r("view")}.?${r("length")}${s("}")}
		${E("div","",`${s("{")}${r("view")}${s("[",1)}${N(0)}${s("]",1)}.${r("title")}${s("}")}`)}
		. . .
		${E("div","",`${s("{")}${r("view")}${s("[",1)}${r("view")}.${r("length")} - ${N(1)}${s("]",1)}.${r("title")}${s("}")}`)}
		${s("{")}:${O("else")}${s("}")}
		Empty
		${s("{")}/${O("if")}${s("}")}
	`)}
	${E("select",` ${O("bind")}:${A("value")}=${s("{")}${r("size")}${s("}")} ${r("class")}=${Q("@dark@bg=#222")}`,`
		${E("option",` ${r("value")}=${s("{")}${N(10)}${s("}")}`,"10")}
		${E("option",` ${r("value")}=${s("{")}${N(20)}${s("}")}`,"20")}
		${E("option",` ${r("value")}=${s("{")}${N(50)}${s("}")}`,"50")}
		${E("option",` ${r("value")}=${s("{")}${N(100)}${s("}")}`,"100")}
		${E("option",` ${r("value")}=${s("{")}${N(200)}${s("}")}`,"200")}
	`)}
	${E("Pagination",` ${O("bind")}:${r("size")}
			${O("on")}:${A("change")}=${s("{")}${W("handleChange")}${s("}")}
			${s("{")}${r("list")}${s("}")}`,!1)}
`)}`,i;return{c(){t=new Pt(!1),i=H(),this.h()},l(l){t=It(l,!1),i=H(),this.h()},h(){t.a=i},m(l,e){t.m(n,l,e),T(l,i,e)},p:X,d(l){l&&(p(i),t.d())}}}function Kt(a){let t,n,i="contents: ",l,e,o,c,u,$,y="10",C,P="20",d,U="50",z,m="100",_,w="200",B,f,x,tt,S,et,ut,ht;function dt(h,g){var D;return(D=h[3])!=null&&D.length?Gt:Ft}let nt=dt(a),M=nt(a);function Tt(h){a[9](h)}let mt={list:a[0]};return a[1]!==void 0&&(mt.size=a[1]),f=new Rt({props:mt}),yt.push(()=>jt(f,"size",Tt)),f.$on("change",a[4]),S=new Ut({props:{isCode:!0,$$slots:{default:[Jt]},$$scope:{ctx:a}}}),{c(){t=v("div"),n=v("span"),n.textContent=i,l=v("input"),e=F(`ea\r
		`),o=v("div"),M.c(),c=Y(),u=v("select"),$=v("option"),$.textContent=y,C=v("option"),C.textContent=P,d=v("option"),d.textContent=U,z=v("option"),z.textContent=m,_=v("option"),_.textContent=w,B=Y(),lt(f.$$.fragment),tt=Y(),lt(S.$$.fragment),this.h()},l(h){t=k(h,"DIV",{});var g=V(t);n=k(g,"SPAN",{"data-svelte-h":!0}),q(n)!=="svelte-krpnu"&&(n.textContent=i),l=k(g,"INPUT",{type:!0,class:!0}),e=G(g,`ea\r
		`),o=k(g,"DIV",{class:!0});var D=V(o);M.l(D),D.forEach(p),c=Z(g),u=k(g,"SELECT",{class:!0});var L=V(u);$=k(L,"OPTION",{"data-svelte-h":!0}),q($)!=="svelte-18d3dpq"&&($.textContent=y),C=k(L,"OPTION",{"data-svelte-h":!0}),q(C)!=="svelte-1k18a0a"&&(C.textContent=P),d=k(L,"OPTION",{"data-svelte-h":!0}),q(d)!=="svelte-ujtx1y"&&(d.textContent=U),z=k(L,"OPTION",{"data-svelte-h":!0}),q(z)!=="svelte-ic6cau"&&(z.textContent=m),_=k(L,"OPTION",{"data-svelte-h":!0}),q(_)!=="svelte-1148cjc"&&(_.textContent=w),L.forEach(p),B=Z(g),it(f.$$.fragment,g),g.forEach(p),tt=Z(h),it(S.$$.fragment,h),this.h()},h(){I(l,"type","number"),I(l,"class","bg=inherit w=3 ta=right"),I(o,"class","bd=.1_solid p=1"),$.__value=10,K($,$.__value),C.__value=20,K(C,C.__value),d.__value=50,K(d,d.__value),z.__value=100,K(z,z.__value),_.__value=200,K(_,_.__value),I(u,"class","@dark@bg=#222"),a[1]===void 0&&Et(()=>a[8].call(u))},m(h,g){T(h,t,g),b(t,n),b(t,l),K(l,a[2]),b(t,e),b(t,o),M.m(o,null),b(t,c),b(t,u),b(u,$),b(u,C),b(u,d),b(u,z),b(u,_),pt(u,a[1],!0),b(t,B),st(f,t,null),T(h,tt,g),st(S,h,g),et=!0,ut||(ht=[J(l,"input",a[7]),J(l,"change",a[5]),J(u,"change",a[8])],ut=!0)},p(h,g){g&4&&wt(l.value)!==h[2]&&K(l,h[2]),nt===(nt=dt(h))&&M?M.p(h,g):(M.d(1),M=nt(h),M&&(M.c(),M.m(o,null))),g&2&&pt(u,h[1]);const D={};g&1&&(D.list=h[0]),!x&&g&2&&(x=!0,D.size=h[1],Nt(()=>x=!1)),f.$set(D);const L={};g&1024&&(L.$$scope={dirty:g,ctx:h}),S.$set(L)},i(h){et||(at(f.$$.fragment,h),at(S.$$.fragment,h),et=!0)},o(h){ot(f.$$.fragment,h),ot(S.$$.fragment,h),et=!1},d(h){h&&(p(t),p(tt)),M.d(),rt(f),rt(S,h),ut=!1,Ct(ht)}}}function Qt(a){let t,n;return t=new Dt({props:{$$slots:{default:[Kt]},$$scope:{ctx:a}}}),{c(){lt(t.$$.fragment)},l(i){it(t.$$.fragment,i)},m(i,l){st(t,i,l),n=!0},p(i,[l]){const e={};l&1039&&(e.$$scope={dirty:l,ctx:i}),t.$set(e)},i(i){n||(at(t.$$.fragment,i),n=!0)},o(i){ot(t.$$.fragment,i),n=!1},d(i){rt(t,i)}}}function Wt(a,t,n){let i,l=0,e,o=0,c=10;const u=({detail:d})=>{n(6,o=d.index),n(1,c=d.size)},$=()=>{l<0?n(2,l=0):n(2,l=Math.floor(l)),n(0,e=new Array(l));for(let d=0;d<(e==null?void 0:e.length);d++)n(0,e[d]={title:"Lorem Ipsum is simply dummy text "+(d+1)},e)};function y(){l=wt(this.value),n(2,l)}function C(){c=Ot(this),n(1,c)}function P(d){c=d,n(1,c)}return a.$$.update=()=>{a.$$.dirty&67&&n(3,i=e==null?void 0:e.slice(o,Math.min(o+c,e.length)))},[e,c,l,i,u,$,o,y,C,P]}class Xt extends ct{constructor(t){super(),_t(this,t,Wt,Qt,ft,{})}}function Yt(a){let t,n,i;return n=new Xt({}),{c(){t=Y(),lt(n.$$.fragment),this.h()},l(l){Mt("svelte-a6ekc1",document.head).forEach(p),t=Z(l),it(n.$$.fragment,l),this.h()},h(){document.title="Pagination | Reference"},m(l,e){T(l,t,e),st(n,l,e),i=!0},p:X,i(l){i||(at(n.$$.fragment,l),i=!0)},o(l){ot(n.$$.fragment,l),i=!1},d(l){l&&p(t),rt(n,l)}}}class se extends ct{constructor(t){super(),_t(this,t,null,Yt,ft,{})}}export{se as component};
