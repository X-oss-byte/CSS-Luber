import{S as U,i as W,s as X,a as w,y as I,q as P,k as E,Q as Y,h as i,c as H,z as V,r as M,l as D,m as q,b as _,A as z,g as B,d as L,B as N,M as Z,R as x,e as Q,T as ee,D as O,p as S,H as R}from"../chunks/index.e72184b5.js";import{H as te}from"../chunks/H2.2fb31ba9.js";import{C as se}from"../chunks/CodePage.abe9804b.js";import{h as T,b as k,k as C,n as d,s as j,d as F}from"../chunks/highlighter.d5787206.js";function G(l,s,t){const a=l.slice();return a[7]=s[t],a}function ae(l){let s;return{c(){s=P("Performance Test Page - inline style")},l(t){s=M(t,"Performance Test Page - inline style")},m(t,a){_(t,s,a)},d(t){t&&i(s)}}}function ne(l){let s,t;return{c(){s=new x(!1),t=Q(),this.h()},l(a){s=ee(a,!1),t=Q(),this.h()},h(){s.a=t},m(a,m){s.m(l[1],a,m),_(a,t,m)},p:O,d(a){a&&i(t),a&&s.d()}}}function J(l){let s,t,a=l[7]+"",m;return{c(){s=E("div"),t=E("span"),m=P(a),this.h()},l($){s=D($,"DIV",{style:!0});var h=q(s);t=D(h,"SPAN",{style:!0});var r=q(t);m=M(r,a),r.forEach(i),h.forEach(i),this.h()},h(){S(t,"color","#"+l[7]),S(t,"filter","invert(1)"),S(s,"background","#"+l[7])},m($,h){_($,s,h),R(s,t),R(t,m)},p:O,d($){$&&i(s)}}}function le(l){let s,t,a,m=l[0].length+"",$,h,r,c,p,y;t=new te({props:{classs:"",$$slots:{default:[ae]},$$scope:{ctx:l}}}),r=new se({props:{$$slots:{default:[ne]},$$scope:{ctx:l}}});let g=l[0],n=[];for(let e=0;e<g.length;e+=1)n[e]=J(G(l,g,e));return{c(){s=w(),I(t.$$.fragment),a=w(),$=P(m),h=P(`rows\r
`),I(r.$$.fragment),c=w(),p=E("div");for(let e=0;e<n.length;e+=1)n[e].c();this.h()},l(e){Y("svelte-u508cf",document.head).forEach(i),s=H(e),V(t.$$.fragment,e),a=H(e),$=M(e,m),h=M(e,`rows\r
`),V(r.$$.fragment,e),c=H(e),p=D(e,"DIV",{});var u=q(p);for(let v=0;v<n.length;v+=1)n[v].l(u);u.forEach(i),this.h()},h(){document.title="CSS Lubricant - Performance Test Page"},m(e,o){_(e,s,o),z(t,e,o),_(e,a,o),_(e,$,o),_(e,h,o),z(r,e,o),_(e,c,o),_(e,p,o);for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(p,null);y=!0},p(e,[o]){const u={};o&1024&&(u.$$scope={dirty:o,ctx:e}),t.$set(u);const v={};if(o&1024&&(v.$$scope={dirty:o,ctx:e}),r.$set(v),o&1){g=e[0];let f;for(f=0;f<g.length;f+=1){const A=G(e,g,f);n[f]?n[f].p(A,o):(n[f]=J(A),n[f].c(),n[f].m(p,null))}for(;f<n.length;f+=1)n[f].d(1);n.length=g.length}},i(e){y||(B(t.$$.fragment,e),B(r.$$.fragment,e),y=!0)},o(e){L(t.$$.fragment,e),L(r.$$.fragment,e),y=!1},d(e){e&&i(s),N(t,e),e&&i(a),e&&i($),e&&i(h),N(r,e),e&&i(c),e&&i(p),Z(n,e)}}}const K=16,b="0123456789abcdef";function oe(l){const h=[];for(let c=0;c<16777216;c+=1e3)h.push(`${b[Math.trunc(c/1048576)]}${b[Math.trunc(c%1048576/65536)]}${b[Math.trunc(c%65536/4096)]}${b[Math.trunc(c%4096/256)]}${b[Math.trunc(c%256/K)]}${b[Math.trunc(c%K)]}`);const r=`${T("div","",`
	${k("{")}#${C("each")} ${d("background",!0)} ${C("as")} ${d("bg")}${k("}")}
	${T("div",` ${d("style")}=${j(`background:#${F(`{${d("bg")}}`)};`)}`,`${T("span",` ${d("style")}=${j(`color:#${F(`{${d("bg")}}`)};filter:invert(1);`)}`,`${k(`{${d("bg")}}`)}`)}`)}
	${k("{")}/${C("each")}${k("}")}
`)}`;return[h,r]}class fe extends U{constructor(s){super(),W(this,s,oe,le,X,{})}}export{fe as component};