import{s as U,f as G,L as z,a as H,v as K,g as O,h as D,M as B,d as m,c as L,w as Q,j as w,i as v,x as I,u as J,o as oe,O as ie,e as F,N as ce,l as re,m as $e}from"../chunks/scheduler.f6e53d32.js";import{S as W,i as X,b as C,d as E,m as M,a as P,t as k,e as S}from"../chunks/index.c26f0603.js";import{C as Y}from"../chunks/CodePage.9e282020.js";import{C as fe}from"../chunks/ComponentTabView.2d6dc2e6.js";import{h as q,k as j,n as u,s as o,b as f,e as N,d as V,g as A,f as R}from"../chunks/highlighter.ff4ee7c2.js";import{T as me}from"../chunks/TypingText.44732047.js";import{s as pe}from"../chunks/styles.1c89ec47.js";import{H as le}from"../chunks/H5.ebc619f0.js";function ue($){let e,s,t,a,n,r,p,i,b,_=$[1][$[2]]+"",T,l,c,x,y,h;return{c(){e=G("div"),s=G("span"),t=new z(!1),a=H(),n=G("span"),r=new z(!1),p=H(),i=G("span"),b=new z(!1),T=H(),l=K("svg"),c=K("defs"),x=K("filter"),y=K("feColorMatrix"),this.h()},l(d){e=O(d,"DIV",{class:!0});var g=D(e);s=O(g,"SPAN",{class:!0});var Z=D(s);t=B(Z,!1),Z.forEach(m),a=L(g),n=O(g,"SPAN",{class:!0});var ee=D(n);r=B(ee,!1),ee.forEach(m),p=L(g),i=O(g,"SPAN",{class:!0});var te=D(i);b=B(te,!1),te.forEach(m),T=L(g),l=Q(g,"svg",{class:!0});var se=D(l);c=Q(se,"defs",{});var ae=D(c);x=Q(ae,"filter",{id:!0});var ne=D(x);y=Q(ne,"feColorMatrix",{in:!0,type:!0,values:!0}),D(y).forEach(m),ne.forEach(m),ae.forEach(m),se.forEach(m),g.forEach(m),this.h()},h(){t.a=null,w(s,"class",$[6]),r.a=null,w(n,"class",$[7]),b.a=null,w(i,"class","static! op=0"),w(y,"in","SourceGraphic"),w(y,"type","matrix"),w(y,"values",`1 0 0 0 0\r
					0 1 0 0 0\r
					0 0 1 0 0\r
					0 0 0 255 -140`),w(x,"id","ft"),w(l,"class","none"),w(e,"class",h="relative ta=center wc=filter "+($[5]?"ft=url(#ft)":"")+" >span/absolute >span/w=100% >span/l=0 >span/us=none "+$[0])},m(d,g){v(d,e,g),I(e,s),t.m($[3],s),I(e,a),I(e,n),r.m($[4],n),I(e,p),I(e,i),b.m(_,i),I(e,T),I(e,l),I(l,c),I(c,x),I(x,y)},p(d,[g]){g&8&&t.p(d[3]),g&64&&w(s,"class",d[6]),g&16&&r.p(d[4]),g&128&&w(n,"class",d[7]),g&6&&_!==(_=d[1][d[2]]+"")&&b.p(_),g&33&&h!==(h="relative ta=center wc=filter "+(d[5]?"ft=url(#ft)":"")+" >span/absolute >span/w=100% >span/l=0 >span/us=none "+d[0])&&w(e,"class",h)},i:J,o:J,d(d){d&&m(e)}}}function ge($,e,s){let{classs:t=""}=e,{array:a=[]}=e,{longest:n}=e,{transition:r=500}=e,p,i=0,b=a[0][0],_="",T=!1,l="",c="";const x=async h=>new Promise(d=>p=setTimeout(d,h)),y=async()=>{await x(a[i][1]-r),s(5,T=!0),s(7,c="ft=blur(.5em)"),await x(r*.1),i=++i%a.length,s(4,_=a[i][0]),s(6,l="tt=filter_"+r+"ms ft=blur(.5em)"),s(7,c="tt=filter_"+r+"ms"),await x(r*.9),s(3,b=a[i][0]),s(5,T=!1),s(6,l=""),s(7,c=""),y()};return oe(y),ie(()=>clearTimeout(p)),$.$$set=h=>{"classs"in h&&s(0,t=h.classs),"array"in h&&s(1,a=h.array),"longest"in h&&s(2,n=h.longest),"transition"in h&&s(8,r=h.transition)},[t,a,n,b,_,T,l,c,r]}class de extends W{constructor(e){super(),X(this,e,ge,ue,U,{classs:0,array:1,longest:2,transition:8})}}function _e($){let e,s=`${q("script",` ${u("lang")}=${o("ts")}`,`
${j("import")} ${u("MorphingText")} ${j("from")} ${o("src/instant-ui/animations/MorphingText.svelte")}
`)}

${q("div",` ${u("class")}=${o("fs=2 bold w=fit-content")}`,`
	${q("MorpingText",`
		${u("array")}=${f("{")}${f("[",1)}
			${f("[",2)} ${o(N('<div class="c=red">500ms<span>'),"'")}, ${V(500)} ${f("]",2)},
			${f("[",2)} ${o(N('<div class="c=orange">1000ms<span>'),"'")}, ${V(1e3)} ${f("]",2)},
			${f("[",2)} ${o(N('<div class="c=yellow">1500ms<span>'),"'")}, ${V(1500)} ${f("]",2)},
			${f("[",2)} ${o(N('<div class="c=green">2000ms<span>'),"'")}, ${V(2e3)} ${f("]",2)},
			${f("[",2)} ${o(N('<div class="c=blue">2500ms<span>'),"'")}, ${V(2500)} ${f("]",2)},
			${f("[",2)} ${o(N('<div class="c=navy">3000ms<span>'),"'")}, ${V(3e3)} ${f("]",2)},
			${f("[",2)} ${o(N('<div class="c=purple">3500ms<span>'),"'")}, ${V(3500)} ${f("]",2)},
		${f("]",1)}${f("}")}
		${u("longest")}=${f("{")}${V(6)}${f("}")}
	`,!1)}
`)}`,t;return{c(){e=new z(!1),t=F(),this.h()},l(a){e=B(a,!1),t=F(),this.h()},h(){e.a=t},m(a,n){e.m(s,a,n),v(a,t,n)},p:J,d(a){a&&(m(t),e.d())}}}function he($){let e,s,t,a,n;return s=new de({props:{array:[['<div class="c=red">500ms<span>',500],['<div class="c=orange">1000ms<span>',1e3],['<div class="c=yellow">1500ms<span>',1500],['<div class="c=green">2000ms<span>',2e3],['<div class="c=blue">2500ms<span>',2500],['<div class="c=navy">3000ms<span>',3e3],['<div class="c=purple">3500ms<span>',3500]],longest:6}}),a=new Y({props:{isCode:!0,$$slots:{default:[_e]},$$scope:{ctx:$}}}),{c(){e=G("div"),C(s.$$.fragment),t=H(),C(a.$$.fragment),this.h()},l(r){e=O(r,"DIV",{class:!0});var p=D(e);E(s.$$.fragment,p),p.forEach(m),t=L(r),E(a.$$.fragment,r),this.h()},h(){w(e,"class","fs=2 bold w=fit-content")},m(r,p){v(r,e,p),M(s,e,null),v(r,t,p),M(a,r,p),n=!0},p(r,p){const i={};p&1&&(i.$$scope={dirty:p,ctx:r}),a.$set(i)},i(r){n||(P(s.$$.fragment,r),P(a.$$.fragment,r),n=!0)},o(r){k(s.$$.fragment,r),k(a.$$.fragment,r),n=!1},d(r){r&&(m(e),m(t)),S(s),S(a,r)}}}function ve($){let e,s;return e=new fe({props:{$$slots:{default:[he]},$$scope:{ctx:$}}}),{c(){C(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,a){M(e,t,a),s=!0},p(t,[a]){const n={};a&1&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){s||(P(e.$$.fragment,t),s=!0)},o(t){k(e.$$.fragment,t),s=!1},d(t){S(e,t)}}}class we extends W{constructor(e){super(),X(this,e,null,ve,U,{})}}function be($){let e,s;return{c(){e=new z(!1),s=F(),this.h()},l(t){e=B(t,!1),s=F(),this.h()},h(){e.a=s},m(t,a){e.m($[0],t,a),v(t,s,a)},p:J,d(t){t&&(m(s),e.d())}}}function xe($){let e,s;return e=new Y({props:{$$slots:{default:[be]},$$scope:{ctx:$}}}),{c(){C(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,a){M(e,t,a),s=!0},p(t,a){const n={};a&2&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){s||(P(e.$$.fragment,t),s=!0)},o(t){k(e.$$.fragment,t),s=!1},d(t){S(e,t)}}}function ye($){let e,s=`${q("script",` ${u("lang")}=${o("ts")}`,`
${j("import")} ${u("CodePage")} ${j("from")} ${o("cells/boxs/CodePage.svelte")}
${j("import")} ${u("TypingText")} ${j("from")} ${o("src/instant-ui/animations/TypingText.svelte")}
${j("import")} ${f("{")} ${u("bracket")}, ${u("declare")}, ${u("escapeTag")}, ${u("func")}, ${u("html")}, ${u("keyword")}, ${u("name")}, ${u("string")} ${f("}")} ${j("from")} ${o("src/ts/highlighter")}

${A("const")} ${u("text",!0)} = ${o("`",!1)}${A("${")}${R("html")}${f("(")}${o("body")}, ${o("")}, ${o("`",!1)}
	${o(". . . . . .",!1)}
	${A("${")}${R("html")}${f("(",1)}${o("span")}, ${o("`",!1)} ${A("${")}${R("name")}${f("(",2)}${o("class")}${f(")",2)}${A("}")}${o(N("="),!1)}${A("${")}${R("string")}${f("(",2)}${o(N('<span class="foldable">Lorem Ipsum</span><span class="foldable">is simply dummy text of the printing</span><span class="foldable">and typesetting industry</span>'),"`")}${f(")",2)}${A("}")}${o("`",!1)}, ${o("duration: 1000")}${f(")",1)}${A("}")}
${o("`",!1)}${f("}")}${A("}")}${o("`",!1)}
`)}

${q("TypingText",` ${u("classs")}=${o("_.foldable:not(:empty):nth-child(n+2):before/inline-block;ct='\\00a0';bg=#fff @dark@_.foldable:not(:empty):nth-child(n+2):before/inline-block;ct='\\00a0';bg=--cod-gray")}`,`
	${q("CodePage","",`${f("{")}@${A("html")} ${u("text",!0)}${f("}")}`)}
`)}`,t;return{c(){e=new z(!1),t=F(),this.h()},l(a){e=B(a,!1),t=F(),this.h()},h(){e.a=t},m(a,n){e.m(s,a,n),v(a,t,n)},p:J,d(a){a&&(m(t),e.d())}}}function Te($){let e,s,t,a;return e=new me({props:{classs:pe.util.typingText,$$slots:{default:[xe]},$$scope:{ctx:$}}}),t=new Y({props:{isCode:!0,$$slots:{default:[ye]},$$scope:{ctx:$}}}),{c(){C(e.$$.fragment),s=H(),C(t.$$.fragment)},l(n){E(e.$$.fragment,n),s=L(n),E(t.$$.fragment,n)},m(n,r){M(e,n,r),v(n,s,r),M(t,n,r),a=!0},p(n,r){const p={};r&2&&(p.$$scope={dirty:r,ctx:n}),e.$set(p);const i={};r&2&&(i.$$scope={dirty:r,ctx:n}),t.$set(i)},i(n){a||(P(e.$$.fragment,n),P(t.$$.fragment,n),a=!0)},o(n){k(e.$$.fragment,n),k(t.$$.fragment,n),a=!1},d(n){n&&m(s),S(e,n),S(t,n)}}}function Ce($){let e,s;return e=new fe({props:{$$slots:{default:[Te]},$$scope:{ctx:$}}}),{c(){C(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,a){M(e,t,a),s=!0},p(t,[a]){const n={};a&2&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){s||(P(e.$$.fragment,t),s=!0)},o(t){k(e.$$.fragment,t),s=!1},d(t){S(e,t)}}}function Ee($){return[`${q("body","",`
	. . . . . .
	${q("span",` ${u("class")}=${o("<f>Lorem Ipsum</f><f>is simply dummy text of the printing</f><f>and typesetting industry</f>")}`,"duration: 1000")}
`)}`]}class Me extends W{constructor(e){super(),X(this,e,Ee,Ce,U,{})}}function Pe($){let e;return{c(){e=re("Morphing Text")},l(s){e=$e(s,"Morphing Text")},m(s,t){v(s,e,t)},d(s){s&&m(e)}}}function ke($){let e;return{c(){e=re("Typing Text")},l(s){e=$e(s,"Typing Text")},m(s,t){v(s,e,t)},d(s){s&&m(e)}}}function Se($){let e,s,t,a,n,r,p,i,b,_,T;return s=new le({props:{$$slots:{default:[Pe]},$$scope:{ctx:$}}}),a=new we({}),i=new le({props:{$$slots:{default:[ke]},$$scope:{ctx:$}}}),_=new Me({}),{c(){e=H(),C(s.$$.fragment),t=H(),C(a.$$.fragment),n=H(),r=G("div"),p=H(),C(i.$$.fragment),b=H(),C(_.$$.fragment),this.h()},l(l){ce("svelte-1dw4atb",document.head).forEach(m),e=L(l),E(s.$$.fragment,l),t=L(l),E(a.$$.fragment,l),n=L(l),r=O(l,"DIV",{class:!0}),D(r).forEach(m),p=L(l),E(i.$$.fragment,l),b=L(l),E(_.$$.fragment,l),this.h()},h(){document.title="Text Animation - CSS Lube",w(r,"class","h=1")},m(l,c){v(l,e,c),M(s,l,c),v(l,t,c),M(a,l,c),v(l,n,c),v(l,r,c),v(l,p,c),M(i,l,c),v(l,b,c),M(_,l,c),T=!0},p(l,[c]){const x={};c&1&&(x.$$scope={dirty:c,ctx:l}),s.$set(x);const y={};c&1&&(y.$$scope={dirty:c,ctx:l}),i.$set(y)},i(l){T||(P(s.$$.fragment,l),P(a.$$.fragment,l),P(i.$$.fragment,l),P(_.$$.fragment,l),T=!0)},o(l){k(s.$$.fragment,l),k(a.$$.fragment,l),k(i.$$.fragment,l),k(_.$$.fragment,l),T=!1},d(l){l&&(m(e),m(t),m(n),m(r),m(p),m(b)),S(s,l),S(a,l),S(i,l),S(_,l)}}}class qe extends W{constructor(e){super(),X(this,e,null,Se,U,{})}}export{qe as component};
