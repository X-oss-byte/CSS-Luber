import{S as H,i as S,s as E,y as g,z as y,A as b,g as x,d as w,B as v,R as q,e as C,T as D,b as m,D as I,h as r,a as h,k as T,Q as k,c as _,l as z,m as A,n as B,q as L,r as Q}from"../chunks/index.e72184b5.js";import{H as R}from"../chunks/H5.546393c9.js";import{C as V}from"../chunks/CodePage.abe9804b.js";import{h as $,a as p,n as f,s as u,c as j}from"../chunks/highlighter.d5787206.js";function F(n){let s,t;return{c(){s=new q(!1),t=C(),this.h()},l(a){s=D(a,!1),t=C(),this.h()},h(){s.a=t},m(a,l){s.m(n[0],a,l),m(a,t,l)},p:I,d(a){a&&r(t),a&&s.d()}}}function G(n){let s,t;return s=new V({props:{$$slots:{default:[F]},$$scope:{ctx:n}}}),{c(){g(s.$$.fragment)},l(a){y(s.$$.fragment,a)},m(a,l){b(s,a,l),t=!0},p(a,[l]){const c={};l&2&&(c.$$scope={dirty:l,ctx:a}),s.$set(c)},i(a){t||(x(s.$$.fragment,a),t=!0)},o(a){w(s.$$.fragment,a),t=!1},d(a){v(s,a)}}}function J(n){return[`${$("style",` ${f("css-lubricant")}=${u("v0.7.0")}`,`
	${p("<span class='bold'>[class][class][class]</span>.c\\=yellow\\!\\!\\!",["color","yellow"])}
	${p("<span class='bold'>[class][class]</span>.c\\=orange\\!\\!",["color","orange"])}
	${p("<span class='bold'>[class]</span>.c\\=red\\!",["color","red"])}
	${p(".\\>span\\/c\\=red>span",["color","red"])}
	${p(".c\\=blue",["color","blue"])}
	${p("<span class='bold'>[class]</span>.c\\=blue\\!",["color","blue"])}
`)}

${j("<!-- If you add an exclamation point (!) after the class name, you can change the style's priority using the selector priority instead of important -->")}
${$("span",` ${f("class")}=${u("c=yellow!!! c=orange!! c=red!")}`,`
	{ color: yellow }
	<span class="td=line-through">{ color: orange }</span>
	<span class="td=line-through">{ color: red }</span>
`)}
${$("div",` ${f("class")}=${u(">span/c=red")}`,`
	${$("span","",`
		{ color: red }
	`)}
	${$("span",` ${f("class")}=${u("c=blue")}`,`
		{ color: red }
		<span class="td=line-through">{ color: blue }</span>
	`)}
	${$("span",` ${f("class")}=${u("c=blue!")}`,`
		<span class="td=line-through">{ color: red }</span>
		{ color: blue }
	`)}
`)}`]}class K extends H{constructor(s){super(),S(this,s,J,G,E,{})}}function M(n){let s;return{c(){s=L("Priority")},l(t){s=Q(t,"Priority")},m(t,a){m(t,s,a)},d(t){t&&r(s)}}}function N(n){let s,t,a,l,c,i,d;return t=new R({props:{$$slots:{default:[M]},$$scope:{ctx:n}}}),i=new K({}),{c(){s=h(),g(t.$$.fragment),a=h(),l=T("div"),c=h(),g(i.$$.fragment),this.h()},l(e){k("svelte-1d6cg3f",document.head).forEach(r),s=_(e),y(t.$$.fragment,e),a=_(e),l=z(e,"DIV",{class:!0}),A(l).forEach(r),c=_(e),y(i.$$.fragment,e),this.h()},h(){document.title="Priority | CSS Lubricant",B(l,"class","h=1")},m(e,o){m(e,s,o),b(t,e,o),m(e,a,o),m(e,l,o),m(e,c,o),b(i,e,o),d=!0},p(e,[o]){const P={};o&1&&(P.$$scope={dirty:o,ctx:e}),t.$set(P)},i(e){d||(x(t.$$.fragment,e),x(i.$$.fragment,e),d=!0)},o(e){w(t.$$.fragment,e),w(i.$$.fragment,e),d=!1},d(e){e&&r(s),v(t,e),e&&r(a),e&&r(l),e&&r(c),v(i,e)}}}class Y extends H{constructor(s){super(),S(this,s,null,N,E,{})}}export{Y as component};