import{S as ie,i as ce,s as $e,G as ke,k as M,l as N,m as B,h as o,n as R,b as v,C as te,I as Ce,J as De,K as We,g as z,d as G,O as we,o as Te,L as ye,w as Ee,y as J,z as K,A as Q,B as Y,a as L,c as A,q as O,r as X,H as W,D as fe,R as me,e as oe,T as de,V as Ie,W as Ve,Q as Se}from"../chunks/index.e72184b5.js";import{C as he}from"../chunks/CodePage.abe9804b.js";import{C as pe}from"../chunks/ComponentTabView.f2fb59a5.js";import{h as S,k as Z,n as k,s as E,d as le,f as re,b as I,t as ae,i as ne}from"../chunks/highlighter.e3fc48dc.js";import{H as ue}from"../chunks/H5.546393c9.js";function Le(h){let e,l,t,s,f;const $=h[12].default,n=ke($,h,h[11],null);return{c(){e=M("div"),n&&n.c(),this.h()},l(p){e=N(p,"DIV",{class:!0});var u=B(e);n&&n.l(u),u.forEach(o),this.h()},h(){R(e,"class",l="o=scroll touch-action=none "+h[0])},m(p,u){v(p,e,u),n&&n.m(e,null),h[13](e),t=!0,s||(f=[te(window,"mousemove",h[4]),te(window,"mouseup",h[6]),te(e,"mousedown",h[2]),te(e,"touchstart",h[3]),te(e,"touchmove",h[5]),te(e,"touchend",h[7],{passive:!0})],s=!0)},p(p,[u]){n&&n.p&&(!t||u&2048)&&Ce(n,$,p,p[11],t?We($,p[11],u,null):De(p[11]),null),(!t||u&1&&l!==(l="o=scroll touch-action=none "+p[0]))&&R(e,"class",l)},i(p){t||(z(n,p),t=!0)},o(p){G(n,p),t=!1},d(p){p&&o(e),n&&n.d(p),h[13](null),s=!1,we(f)}}}function Ae(h,e,l){let{$$slots:t={},$$scope:s}=e,{align:f=""}=e,{classs:$=""}=e,{duration:n=800}=e;const p=m=>{const b=Date.now();cancelAnimationFrame(D),D=requestAnimationFrame(()=>j(x(0,m)/n,b,n,0))};let u,T=!1,q=0,F=0,y=0,D,H;const V=m=>{T=!0,q=m.clientX,F=Date.now()},P=m=>{V(m.touches[0])},a=m=>{if(T){m.preventDefault();const b=q-m.clientX;u.scrollBy(b,m.clientY),q=m.clientX,b<0&&y>0||b>0&&y<0?(F=Date.now(),y=b):y+=b}},_=m=>{a(new MouseEvent("mousemove",m.touches[0]))},U=()=>{if(T){const m=Date.now();if(f===""){const b=y/(m-F);cancelAnimationFrame(D),D=requestAnimationFrame(()=>g(b,m,n,0))}else{const b=x(y*n*2/(m-F),0);cancelAnimationFrame(D),D=requestAnimationFrame(()=>j(b/n,m,n,0))}y=0,T=!1}},r=()=>{U()},g=(m,b,i,c)=>{if(!m)return;const d=Date.now(),w=Math.min(i,d-b);c+=m*w*i/n+u.scrollLeft,l(1,u.scrollLeft=c,u),c-=u.scrollLeft,(i-=w)>0?(cancelAnimationFrame(D),D=requestAnimationFrame(()=>g(m,d,i,c))):l(1,u.scrollLeft+=c,u)},j=(m,b,i,c)=>{if(!m)return;const d=Date.now(),w=Math.min(i,d-b);c+=m*w+u.scrollLeft,l(1,u.scrollLeft=c,u),c-=u.scrollLeft,(i-=w)>0?(cancelAnimationFrame(D),D=requestAnimationFrame(()=>j(m,d,i,c))):l(1,u.scrollLeft+=c,u)},x=(m,b)=>{const i=u.querySelectorAll(":scope>*"),c=i.length;if(c==0)return 0;let d=0;if(f===""||f==="start"){const w=u.scrollLeft;for(let C=0;;C++){if(d+i[C%c].offsetWidth>=w+m)return w-d+m<i[C%c].offsetWidth/2?b<0?d-w-i[(C-1+c)%c].offsetWidth:b>0?d-w+i[C%c].offsetWidth:d-w:b<0?d-w:b>0?d-w+i[C%c].offsetWidth+i[(C+1)%c].offsetWidth:d-w+i[C%c].offsetWidth;d+=i[C%c].offsetWidth}}else if(f==="end"){const w=u.scrollLeft+u.clientWidth;for(let C=0;;C++){if(d+i[C%c].offsetWidth>=w+m)return w-d+m<i[C%c].offsetWidth/2?b<0?d-w-i[(C-1+c)%c].offsetWidth:b>0?d-w+i[C%c].offsetWidth:d-w:b<0?d-w:b>0?d-w+i[C%c].offsetWidth+i[(C+1)%c].offsetWidth:d-w+i[C%c].offsetWidth;d+=i[C%c].offsetWidth}}else{const w=u.scrollLeft+u.clientWidth/2;for(let C=0;;C++){if(d+i[C%c].offsetWidth/2>=w+m)return w-d+m<0?b<0?Math.floor(d-w-i[(C-1)%c].offsetWidth-i[(C-2+c)%c].offsetWidth/2):b>0?Math.floor(d-w+i[C%c].offsetWidth/2):Math.floor(d-w-i[(C-1+c)%c].offsetWidth/2):b<0?Math.floor(d-w-i[(C-1+c)%c].offsetWidth/2):b>0?Math.floor(d-w+i[C%c].offsetWidth+i[(C+1)%c].offsetWidth/2):Math.floor(d-w+i[C%c].offsetWidth/2);d+=i[C%c].offsetWidth}}},ee=(m,b)=>{let i=0;b.forEach(d=>{i=Math.max(i,d.offsetWidth)});const c=m.offsetWidth+i*3;for(;m.scrollWidth<c;)b.forEach(d=>{m.appendChild(d.cloneNode(!0))})};Te(()=>{const m=u.querySelectorAll(":scope>*");if(m.length==0)return;ee(u,m);let b=u.firstElementChild,i=u.lastElementChild;b.before(i),b=u.firstElementChild,i=u.lastElementChild;const c=new IntersectionObserver(d=>{for(const w of d)if(w.isIntersecting){c.unobserve(b),c.unobserve(i);const C=w.target;C===b?(C.before(i),l(1,u.scrollLeft+=i.offsetWidth+1,u)):(C.after(b),l(1,u.scrollLeft-=b.offsetWidth+1,u)),b=u.firstElementChild,i=u.lastElementChild,c.observe(b),c.observe(i)}},{root:u,threshold:0});c.observe(b),c.observe(i),H=setInterval(()=>{const d=x(0,1);(!d||u.scrollLeft!=l(1,u.scrollLeft+=d,u))&&clearTimeout(H)},50)}),ye(()=>clearInterval(H));function se(m){Ee[m?"unshift":"push"](()=>{u=m,l(1,u)})}return h.$$set=m=>{"align"in m&&l(8,f=m.align),"classs"in m&&l(0,$=m.classs),"duration"in m&&l(9,n=m.duration),"$$scope"in m&&l(11,s=m.$$scope)},[$,u,V,P,a,_,U,r,f,n,p,s,t,se]}class ve extends ie{constructor(e){super(),ce(this,e,Ae,Le,$e,{align:8,classs:0,duration:9,snap:10})}get snap(){return this.$$.ctx[10]}}function Me(h){let e,l,t,s,f,$,n,p,u,T,q,F,y,D,H,V,P,a,_,U;return{c(){e=M("div"),l=O("red"),t=L(),s=M("div"),f=O("orange"),$=L(),n=M("div"),p=O("yellow"),u=L(),T=M("div"),q=O("green"),F=L(),y=M("div"),D=O("blue"),H=L(),V=M("div"),P=O("navy"),a=L(),_=M("div"),U=O("purple"),this.h()},l(r){e=N(r,"DIV",{class:!0});var g=B(e);l=X(g,"red"),g.forEach(o),t=A(r),s=N(r,"DIV",{class:!0});var j=B(s);f=X(j,"orange"),j.forEach(o),$=A(r),n=N(r,"DIV",{class:!0});var x=B(n);p=X(x,"yellow"),x.forEach(o),u=A(r),T=N(r,"DIV",{class:!0});var ee=B(T);q=X(ee,"green"),ee.forEach(o),F=A(r),y=N(r,"DIV",{class:!0});var se=B(y);D=X(se,"blue"),se.forEach(o),H=A(r),V=N(r,"DIV",{class:!0});var m=B(V);P=X(m,"navy"),m.forEach(o),a=A(r),_=N(r,"DIV",{class:!0});var b=B(_);U=X(b,"purple"),b.forEach(o),this.h()},h(){R(e,"class","w=90% h=100% bg=red ta=center"),R(s,"class","w=90% h=100% bg=orange ta=center"),R(n,"class","w=90% h=100% bg=yellow ta=center"),R(T,"class","w=90% h=100% bg=green ta=center"),R(y,"class","w=90% h=100% bg=blue ta=center"),R(V,"class","w=90% h=100% bg=navy ta=center"),R(_,"class","w=90% h=100% bg=purple ta=center")},m(r,g){v(r,e,g),W(e,l),v(r,t,g),v(r,s,g),W(s,f),v(r,$,g),v(r,n,g),W(n,p),v(r,u,g),v(r,T,g),W(T,q),v(r,F,g),v(r,y,g),W(y,D),v(r,H,g),v(r,V,g),W(V,P),v(r,a,g),v(r,_,g),W(_,U)},p:fe,d(r){r&&o(e),r&&o(t),r&&o(s),r&&o($),r&&o(n),r&&o(u),r&&o(T),r&&o(F),r&&o(y),r&&o(H),r&&o(V),r&&o(a),r&&o(_)}}}function Ne(h){let e,l=`${S("script",` ${k("lang")}=${E("ts")}`,`
${Z("import")} ${k("CarouselSlider")} ${Z("from")} ${E("organs/@common/utils/CarouselSlider.svelte")}
`)}

${S("CarouselSlider",` ${k("classs")}=${E(`flex op=.5
		::-webkit-scrollbar/none`)}`,`
	${S("div",` ${k("class")}=${E("w=90% h=100% bg=red ta=center")}`,"red")}
	${S("div",` ${k("class")}=${E("w=90% h=100% bg=orange ta=center")}`,"orange")}
	${S("div",` ${k("class")}=${E("w=90% h=100% bg=yellow ta=center")}`,"yellow")}
	${S("div",` ${k("class")}=${E("w=90% h=100% bg=green ta=center")}`,"green")}
	${S("div",` ${k("class")}=${E("w=90% h=100% bg=blue ta=center")}`,"blue")}
	${S("div",` ${k("class")}=${E("w=90% h=100% bg=navy ta=center")}`,"navy")}
	${S("div",` ${k("class")}=${E("w=90% h=100% bg=purple ta=center")}`,"purple")}
`)}`,t;return{c(){e=new me(!1),t=oe(),this.h()},l(s){e=de(s,!1),t=oe(),this.h()},h(){e.a=t},m(s,f){e.m(l,s,f),v(s,t,f)},p:fe,d(s){s&&o(t),s&&e.d()}}}function Be(h){let e,l,t,s;return e=new ve({props:{classs:`flex op=.5\r
			::-webkit-scrollbar/none`,$$slots:{default:[Me]},$$scope:{ctx:h}}}),t=new he({props:{isCode:!0,$$slots:{default:[Ne]},$$scope:{ctx:h}}}),{c(){J(e.$$.fragment),l=L(),J(t.$$.fragment)},l(f){K(e.$$.fragment,f),l=A(f),K(t.$$.fragment,f)},m(f,$){Q(e,f,$),v(f,l,$),Q(t,f,$),s=!0},p(f,$){const n={};$&1&&(n.$$scope={dirty:$,ctx:f}),e.$set(n);const p={};$&1&&(p.$$scope={dirty:$,ctx:f}),t.$set(p)},i(f){s||(z(e.$$.fragment,f),z(t.$$.fragment,f),s=!0)},o(f){G(e.$$.fragment,f),G(t.$$.fragment,f),s=!1},d(f){Y(e,f),f&&o(l),Y(t,f)}}}function Re(h){let e,l;return e=new pe({props:{$$slots:{default:[Be]},$$scope:{ctx:h}}}),{c(){J(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,s){Q(e,t,s),l=!0},p(t,[s]){const f={};s&1&&(f.$$scope={dirty:s,ctx:t}),e.$set(f)},i(t){l||(z(e.$$.fragment,t),l=!0)},o(t){G(e.$$.fragment,t),l=!1},d(t){Y(e,t)}}}class qe extends ie{constructor(e){super(),ce(this,e,null,Re,$e,{})}}function Fe(h){let e,l,t,s,f;return{c(){e=M("div"),l=O("red"),t=L(),s=M("div"),f=O("orange"),this.h()},l($){e=N($,"DIV",{class:!0});var n=B(e);l=X(n,"red"),n.forEach(o),t=A($),s=N($,"DIV",{class:!0});var p=B(s);f=X(p,"orange"),p.forEach(o),this.h()},h(){R(e,"class","w=10% h=100% bg=red ta=center"),R(s,"class","w=20% h=100% bg=orange ta=center")},m($,n){v($,e,n),W(e,l),v($,t,n),v($,s,n),W(s,f)},p:fe,d($){$&&o(e),$&&o(t),$&&o(s)}}}function Oe(h){let e,l=`${S("script",` ${k("lang")}=${E("ts")}`,`
${Z("import")} ${k("CarouselSlider")} ${Z("from")} ${E("organs/@common/utils/CarouselSlider.svelte")}
`)}

${S("CarouselSlider",` ${k("classs")}=${E(`flex h=3 op=.5
		::-webkit-scrollbar/none`)}`,`
	${S("div",` ${k("class")}=${E("w=10% h=100% bg=red ta=center")}`,"red")}
	${S("div",` ${k("class")}=${E("w=20% h=100% bg=orange ta=center")}`,"orange")}
`)}`,t;return{c(){e=new me(!1),t=oe(),this.h()},l(s){e=de(s,!1),t=oe(),this.h()},h(){e.a=t},m(s,f){e.m(l,s,f),v(s,t,f)},p:fe,d(s){s&&o(t),s&&e.d()}}}function Xe(h){let e,l,t,s,f;return e=new ve({props:{classs:`flex h=3 op=.5\r
			::-webkit-scrollbar/none`,$$slots:{default:[Fe]},$$scope:{ctx:h}}}),s=new he({props:{isCode:!0,$$slots:{default:[Oe]},$$scope:{ctx:h}}}),{c(){J(e.$$.fragment),l=L(),t=M("div"),J(s.$$.fragment)},l($){K(e.$$.fragment,$),l=A($),t=N($,"DIV",{});var n=B(t);K(s.$$.fragment,n),n.forEach(o)},m($,n){Q(e,$,n),v($,l,n),v($,t,n),Q(s,t,null),f=!0},p($,n){const p={};n&1&&(p.$$scope={dirty:n,ctx:$}),e.$set(p);const u={};n&1&&(u.$$scope={dirty:n,ctx:$}),s.$set(u)},i($){f||(z(e.$$.fragment,$),z(s.$$.fragment,$),f=!0)},o($){G(e.$$.fragment,$),G(s.$$.fragment,$),f=!1},d($){Y(e,$),$&&o(l),$&&o(t),Y(s)}}}function He(h){let e,l;return e=new pe({props:{$$slots:{default:[Xe]},$$scope:{ctx:h}}}),{c(){J(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,s){Q(e,t,s),l=!0},p(t,[s]){const f={};s&1&&(f.$$scope={dirty:s,ctx:t}),e.$set(f)},i(t){l||(z(e.$$.fragment,t),l=!0)},o(t){G(e.$$.fragment,t),l=!1},d(t){Y(e,t)}}}class Pe extends ie{constructor(e){super(),ce(this,e,null,He,$e,{})}}function Ue(h){let e,l,t,s,f,$,n,p,u,T,q,F,y,D,H,V,P,a,_,U;return{c(){e=M("div"),l=O("red"),t=L(),s=M("div"),f=O("orange"),$=L(),n=M("div"),p=O("yellow"),u=L(),T=M("div"),q=O("green"),F=L(),y=M("div"),D=O("blue"),H=L(),V=M("div"),P=O("navy"),a=L(),_=M("div"),U=O("purple"),this.h()},l(r){e=N(r,"DIV",{class:!0});var g=B(e);l=X(g,"red"),g.forEach(o),t=A(r),s=N(r,"DIV",{class:!0});var j=B(s);f=X(j,"orange"),j.forEach(o),$=A(r),n=N(r,"DIV",{class:!0});var x=B(n);p=X(x,"yellow"),x.forEach(o),u=A(r),T=N(r,"DIV",{class:!0});var ee=B(T);q=X(ee,"green"),ee.forEach(o),F=A(r),y=N(r,"DIV",{class:!0});var se=B(y);D=X(se,"blue"),se.forEach(o),H=A(r),V=N(r,"DIV",{class:!0});var m=B(V);P=X(m,"navy"),m.forEach(o),a=A(r),_=N(r,"DIV",{class:!0});var b=B(_);U=X(b,"purple"),b.forEach(o),this.h()},h(){R(e,"class","w=10% h=100% bg=red ta=center"),R(s,"class","w=20% h=100% bg=orange ta=center"),R(n,"class","w=30% h=100% bg=yellow ta=center"),R(T,"class","w=40% h=100% bg=green ta=center"),R(y,"class","w=50% h=100% bg=blue ta=center"),R(V,"class","w=60% h=100% bg=navy ta=center"),R(_,"class","w=70% h=100% bg=purple ta=center")},m(r,g){v(r,e,g),W(e,l),v(r,t,g),v(r,s,g),W(s,f),v(r,$,g),v(r,n,g),W(n,p),v(r,u,g),v(r,T,g),W(T,q),v(r,F,g),v(r,y,g),W(y,D),v(r,H,g),v(r,V,g),W(V,P),v(r,a,g),v(r,_,g),W(_,U)},p:fe,d(r){r&&o(e),r&&o(t),r&&o(s),r&&o($),r&&o(n),r&&o(u),r&&o(T),r&&o(F),r&&o(y),r&&o(H),r&&o(V),r&&o(a),r&&o(_)}}}function je(h){let e,l=`${S("script",` ${k("lang")}=${E("ts")}`,`
${Z("import")} ${k("CarouselSlider")} ${Z("from")} ${E("organs/@common/utils/CarouselSlider.svelte")}

${le("let")} ${k("align")}: ${E("")} | ${E("start")} | ${E("center")} | ${E("end")} = ${E("center")}
${le("let")} ${re("snap")}: ${I("(")}${k("direction")}: ${ae("number")}${I(")")} ${le("=>")} ${ae("void")}
`)}

${S("div","",`
	${S("CarouselSlider",` ${Z("bind")}:${re("snap")}
				${k("classs")}=${E("flex h=3 op=.5 ::-webkit-scrollbar/none")}
				${I("{")}${k("align")}${I("}")}
				${k("duration")}=${I("{")}${ne(200)}${I("}")}`,`
		${S("div",` ${k("class")}=${E("w=10% h=100% bg=red ta=center")}`,"red")}
		${S("div",` ${k("class")}=${E("w=20% h=100% bg=orange ta=center")}`,"orange")}
		${S("div",` ${k("class")}=${E("w=30% h=100% bg=yellow ta=center")}`,"yellow")}
		${S("div",` ${k("class")}=${E("w=40% h=100% bg=green ta=center")}`,"green")}
		${S("div",` ${k("class")}=${E("w=50% h=100% bg=blue ta=center")}`,"blue")}
		${S("div",` ${k("class")}=${E("w=60% h=100% bg=navy ta=center")}`,"navy")}
		${S("div",` ${k("class")}=${E("w=70% h=100% bg=purple ta=center")}`,"purple")}
	`)}
	${S("div",` ${k("class")}=${E("h=1")}`,"")}
	${S("div",` ${k("class")}=${E(`flex jc=space-between g=1
			>button/flex=auto`)}`,`
		${S("button",` ${k("class")}=${E(`bg=--primary w=6.25 h=1.5 br=.25 fs=.75
				:hover/bg=--havelock-blue`)}
				${Z("on")}:${ae("click")}=${I("()",1)} ${le("=>")} ${re("snap")}${I("(",1)}${ne(-1)}${I(")",1)}${I("}")}`,"PREV")}
		${S("button",` ${k("class")}=${E(`bg=--primary w=6.25 h=1.5 br=.25 fs=.75
				:hover/bg=--havelock-blue`)}
				${Z("on")}:${ae("click")}=${I("()",1)} ${le("=>")} ${I("{",1)} ${k("align")} = ${E("start")}; ${re("snap")}${I("(",2)}${ne(0)}${I(")",2)} ${I("}",1)}${I("}")}`,"START")}
		${S("button",` ${k("class")}=${E(`bg=--primary w=6.25 h=1.5 br=.25 fs=.75
				:hover/bg=--havelock-blue`)}
				${Z("on")}:${ae("click")}=${I("()",1)} ${le("=>")} ${I("{",1)} ${k("align")} = ${E("center")}; ${re("snap")}${I("(",2)}${ne(0)}${I(")",2)} ${I("}",1)}${I("}")}`,"CENTER")}
		${S("button",` ${k("class")}=${E(`bg=--primary w=6.25 h=1.5 br=.25 fs=.75
				:hover/bg=--havelock-blue`)}
				${Z("on")}:${ae("click")}=${I("()",1)} ${le("=>")} ${I("{",1)} ${k("align")} = ${E("end")}; ${re("snap")}${I("(",2)}${ne(0)}${I(")",2)} ${I("}",1)}${I("}")}`,"END")}
		${S("button",` ${k("class")}=${E(`bg=--primary w=6.25 h=1.5 br=.25 fs=.75
				:hover/bg=--havelock-blue`)}
				${Z("on")}:${ae("click")}=${I("()",1)} ${le("=>")} ${re("snap")}${I("(",1)}${ne(1)}${I(")",1)}${I("}")}`,"NEXT")}
	`)}
`)}`,t;return{c(){e=new me(!1),t=oe(),this.h()},l(s){e=de(s,!1),t=oe(),this.h()},h(){e.a=t},m(s,f){e.m(l,s,f),v(s,t,f)},p:fe,d(s){s&&o(t),s&&e.d()}}}function ze(h){let e,l,t,s,f,$,n,p,u,T,q,F,y,D,H,V,P,a,_,U,r,g,j,x,ee,se;function m(i){h[2](i)}let b={classs:"flex h=3 op=.5 ::-webkit-scrollbar/none",align:h[0],duration:200,$$slots:{default:[Ue]},$$scope:{ctx:h}};return h[1]!==void 0&&(b.snap=h[1]),l=new ve({props:b}),Ee.push(()=>Ie(l,"snap",m)),j=new he({props:{isCode:!0,$$slots:{default:[je]},$$scope:{ctx:h}}}),{c(){e=M("div"),J(l.$$.fragment),s=L(),f=M("div"),$=L(),n=M("div"),p=M("button"),u=O("PREV"),T=L(),q=M("button"),F=O("START"),y=L(),D=M("button"),H=O("CENTER"),V=L(),P=M("button"),a=O("END"),_=L(),U=M("button"),r=O("NEXT"),g=L(),J(j.$$.fragment),this.h()},l(i){e=N(i,"DIV",{});var c=B(e);K(l.$$.fragment,c),s=A(c),f=N(c,"DIV",{class:!0}),B(f).forEach(o),$=A(c),n=N(c,"DIV",{class:!0});var d=B(n);p=N(d,"BUTTON",{class:!0});var w=B(p);u=X(w,"PREV"),w.forEach(o),T=A(d),q=N(d,"BUTTON",{class:!0});var C=B(q);F=X(C,"START"),C.forEach(o),y=A(d),D=N(d,"BUTTON",{class:!0});var be=B(D);H=X(be,"CENTER"),be.forEach(o),V=A(d),P=N(d,"BUTTON",{class:!0});var _e=B(P);a=X(_e,"END"),_e.forEach(o),_=A(d),U=N(d,"BUTTON",{class:!0});var ge=B(U);r=X(ge,"NEXT"),ge.forEach(o),d.forEach(o),c.forEach(o),g=A(i),K(j.$$.fragment,i),this.h()},h(){R(f,"class","h=1"),R(p,"class","bg=--primary w=6.25 h=1.5 br=.25 fs=.75 :hover/bg=--havelock-blue"),R(q,"class","bg=--primary w=6.25 h=1.5 br=.25 fs=.75 :hover/bg=--havelock-blue"),R(D,"class","bg=--primary w=6.25 h=1.5 br=.25 fs=.75 :hover/bg=--havelock-blue"),R(P,"class","bg=--primary w=6.25 h=1.5 br=.25 fs=.75 :hover/bg=--havelock-blue"),R(U,"class","bg=--primary w=6.25 h=1.5 br=.25 fs=.75 :hover/bg=--havelock-blue"),R(n,"class","flex jc=space-between g=1 >button/flex=auto")},m(i,c){v(i,e,c),Q(l,e,null),W(e,s),W(e,f),W(e,$),W(e,n),W(n,p),W(p,u),W(n,T),W(n,q),W(q,F),W(n,y),W(n,D),W(D,H),W(n,V),W(n,P),W(P,a),W(n,_),W(n,U),W(U,r),v(i,g,c),Q(j,i,c),x=!0,ee||(se=[te(p,"click",h[3]),te(q,"click",h[4]),te(D,"click",h[5]),te(P,"click",h[6]),te(U,"click",h[7])],ee=!0)},p(i,c){const d={};c&1&&(d.align=i[0]),c&256&&(d.$$scope={dirty:c,ctx:i}),!t&&c&2&&(t=!0,d.snap=i[1],Ve(()=>t=!1)),l.$set(d);const w={};c&256&&(w.$$scope={dirty:c,ctx:i}),j.$set(w)},i(i){x||(z(l.$$.fragment,i),z(j.$$.fragment,i),x=!0)},o(i){G(l.$$.fragment,i),G(j.$$.fragment,i),x=!1},d(i){i&&o(e),Y(l),i&&o(g),Y(j,i),ee=!1,we(se)}}}function Ge(h){let e,l;return e=new pe({props:{$$slots:{default:[ze]},$$scope:{ctx:h}}}),{c(){J(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,s){Q(e,t,s),l=!0},p(t,[s]){const f={};s&259&&(f.$$scope={dirty:s,ctx:t}),e.$set(f)},i(t){l||(z(e.$$.fragment,t),l=!0)},o(t){G(e.$$.fragment,t),l=!1},d(t){Y(e,t)}}}function Je(h,e,l){let t="center",s;function f(q){s=q,l(1,s)}return[t,s,f,()=>s(-1),()=>{l(0,t="start"),s(0)},()=>{l(0,t="center"),s(0)},()=>{l(0,t="end"),s(0)},()=>s(1)]}class Ke extends ie{constructor(e){super(),ce(this,e,Je,Ge,$e,{})}}function Qe(h){let e;return{c(){e=O("Basic")},l(l){e=X(l,"Basic")},m(l,t){v(l,e,t)},d(l){l&&o(e)}}}function Ye(h){let e;return{c(){e=O("Copy Childs")},l(l){e=X(l,"Copy Childs")},m(l,t){v(l,e,t)},d(l){l&&o(e)}}}function xe(h){let e;return{c(){e=O("Snap Buttons")},l(l){e=X(l,"Snap Buttons")},m(l,t){v(l,e,t)},d(l){l&&o(e)}}}function Ze(h){let e,l,t,s,f,$,n,p,u,T,q,F,y,D,H,V,P;return l=new ue({props:{$$slots:{default:[Qe]},$$scope:{ctx:h}}}),s=new qe({}),p=new ue({props:{$$slots:{default:[Ye]},$$scope:{ctx:h}}}),T=new Pe({}),D=new ue({props:{$$slots:{default:[xe]},$$scope:{ctx:h}}}),V=new Ke({}),{c(){e=L(),J(l.$$.fragment),t=L(),J(s.$$.fragment),f=L(),$=M("div"),n=L(),J(p.$$.fragment),u=L(),J(T.$$.fragment),q=L(),F=M("div"),y=L(),J(D.$$.fragment),H=L(),J(V.$$.fragment),this.h()},l(a){Se("svelte-1hvhyjm",document.head).forEach(o),e=A(a),K(l.$$.fragment,a),t=A(a),K(s.$$.fragment,a),f=A(a),$=N(a,"DIV",{class:!0}),B($).forEach(o),n=A(a),K(p.$$.fragment,a),u=A(a),K(T.$$.fragment,a),q=A(a),F=N(a,"DIV",{class:!0}),B(F).forEach(o),y=A(a),K(D.$$.fragment,a),H=A(a),K(V.$$.fragment,a),this.h()},h(){document.title="Carousel Slider | Reference",R($,"class","h=1"),R(F,"class","h=1")},m(a,_){v(a,e,_),Q(l,a,_),v(a,t,_),Q(s,a,_),v(a,f,_),v(a,$,_),v(a,n,_),Q(p,a,_),v(a,u,_),Q(T,a,_),v(a,q,_),v(a,F,_),v(a,y,_),Q(D,a,_),v(a,H,_),Q(V,a,_),P=!0},p(a,[_]){const U={};_&1&&(U.$$scope={dirty:_,ctx:a}),l.$set(U);const r={};_&1&&(r.$$scope={dirty:_,ctx:a}),p.$set(r);const g={};_&1&&(g.$$scope={dirty:_,ctx:a}),D.$set(g)},i(a){P||(z(l.$$.fragment,a),z(s.$$.fragment,a),z(p.$$.fragment,a),z(T.$$.fragment,a),z(D.$$.fragment,a),z(V.$$.fragment,a),P=!0)},o(a){G(l.$$.fragment,a),G(s.$$.fragment,a),G(p.$$.fragment,a),G(T.$$.fragment,a),G(D.$$.fragment,a),G(V.$$.fragment,a),P=!1},d(a){a&&o(e),Y(l,a),a&&o(t),Y(s,a),a&&o(f),a&&o($),a&&o(n),Y(p,a),a&&o(u),Y(T,a),a&&o(q),a&&o(F),a&&o(y),Y(D,a),a&&o(H),Y(V,a)}}}class at extends ie{constructor(e){super(),ce(this,e,null,Ze,$e,{})}}export{at as component};