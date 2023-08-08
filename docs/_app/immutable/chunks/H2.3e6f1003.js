import{M as G,N,O as E,P,s as H,f as g,a as x,g as k,h as v,c as C,F as V,d as f,j as d,i as $,y as p,l as j,m as A,u as I,x as B,z as F,A as M,B as O}from"./scheduler.a569b206.js";import{g as J,t as S,c as K,a as y,S as q,i as D,b as L,d as Q,m as R,e as T}from"./index.5d932454.js";import{c as U}from"./index.ce8de6f9.js";import{I as W}from"./i_github.4934153a.js";function X(a,t){const s=t.token={};function e(c,l,r,n){if(t.token!==s)return;t.resolved=n;let i=t.ctx;r!==void 0&&(i=i.slice(),i[r]=n);const b=c&&(t.current=c)(i);let u=!1;t.block&&(t.blocks?t.blocks.forEach((m,o)=>{o!==l&&m&&(J(),S(m,1,1,()=>{t.blocks[o]===m&&(t.blocks[o]=null)}),K())}):t.block.d(1),b.c(),y(b,1),b.m(t.mount(),t.anchor),u=!0),t.block=b,t.blocks&&(t.blocks[l]=b),u&&P()}if(G(a)){const c=N();if(a.then(l=>{E(c),e(t.then,1,t.value,l),E(null)},l=>{if(E(c),e(t.catch,2,t.error,l),E(null),!t.hasCatch)throw l}),t.current!==t.pending)return e(t.pending,0),!0}else{if(t.current!==t.then)return e(t.then,1,t.value,a),!0;t.resolved=a}}function Y(a,t,s){const e=t.slice(),{resolved:c}=a;a.current===a.then&&(e[a.value]=c),a.current===a.catch&&(e[a.error]=c),a.block.p(e,s)}function Z(a){let t=a[3].message+"",s;return{c(){s=j(t)},l(e){s=A(e,t)},m(e,c){$(e,s,c)},p:I,d(e){e&&f(s)}}}function tt(a){let t=a[2]+"",s;return{c(){s=j(t)},l(e){s=A(e,t)},m(e,c){$(e,s,c)},p:I,d(e){e&&f(s)}}}function et(a){let t="...",s;return{c(){s=j(t)},l(e){s=A(e,t)},m(e,c){$(e,s,c)},p:I,d(e){e&&f(s)}}}function st(a){let t,s,e,c,l,r="css-lube",n,i,b,u,m;e=new W({props:{classs:"inline-block w=1.5 f=#333"}});let o={ctx:a,current:null,token:null,hasCatch:!0,pending:et,then:tt,catch:Z,value:2,error:3};return X(a[0](),o),{c(){t=g("div"),s=g("a"),L(e.$$.fragment),c=x(),l=g("span"),l.textContent=r,n=x(),i=g("div"),b=x(),u=g("a"),o.block.c(),this.h()},l(_){t=k(_,"DIV",{class:!0});var h=v(t);s=k(h,"A",{class:!0,href:!0,target:!0});var w=v(s);Q(e.$$.fragment,w),c=C(w),l=k(w,"SPAN",{class:!0,"data-svelte-h":!0}),V(l)!=="svelte-1xrlc8d"&&(l.textContent=r),w.forEach(f),n=C(h),i=k(h,"DIV",{class:!0}),v(i).forEach(f),b=C(h),u=k(h,"A",{class:!0,href:!0,target:!0});var z=v(u);o.block.l(z),z.forEach(f),h.forEach(f),this.h()},h(){d(l,"class","c=#333"),d(s,"class","bgi=linear-gradient(to_bottom,#fcfcfc_0,#eee_100%) bd=.1_solid_#d5d5d5 :hover/bdc=#ccc p=.25_.75_.25_.5 pr=.75! br=.25 bold :hover/bgi=linear-gradient(to_bottom,#eee,#ddd_100%)"),d(s,"href","https://github.com/artxe2/css-lube"),d(s,"target","_blank"),d(i,"class","w=.5"),d(u,"class","relative bgc=#fafafa c=#333 :hover/c=#0366d6 block bd=.1_solid_#d4d4d4 p=.25_.75 pl=.5 br=.25 bold :before/absolute;block;ct='';t=.6;l=-.45;bd=.4_solid_transparent :before/bdl=0;bdr=.4_solid_#d4d4d4 :after/absolute;block;ct='';t=.66;l=-.29;bd=.35_solid_transparent :after/bdl=0;bdr=.35_solid_#fafafa"),d(u,"href","https://github.com/artxe2/css-lube/stargazers"),d(u,"target","_blank"),d(t,"class","flex fs=1.25")},m(_,h){$(_,t,h),p(t,s),R(e,s,null),p(s,c),p(s,l),p(t,n),p(t,i),p(t,b),p(t,u),o.block.m(u,o.anchor=null),o.mount=()=>u,o.anchor=null,m=!0},p(_,[h]){a=_,Y(o,a,h)},i(_){m||(y(e.$$.fragment,_),m=!0)},o(_){S(e.$$.fragment,_),m=!1},d(_){_&&f(t),T(e),o.block.d(),o.token=null,o=null}}}function at(a){const t=U("https://api.github.com/repos/:user/:repo").get().query;return[async()=>{let e=await t({user:"artxe2",repo:"css-lube"});if(e.status>299)throw Error("Err:"+e.status);return(await e.json()).stargazers_count}]}class _t extends q{constructor(t){super(),D(this,t,at,st,H,{})}}function lt(a){let t,s,e;const c=a[2].default,l=B(c,a,a[1],null);return{c(){t=g("h2"),l&&l.c(),this.h()},l(r){t=k(r,"H2",{class:!0});var n=v(t);l&&l.l(n),n.forEach(f),this.h()},h(){d(t,"class",s="fs=2.5 bold "+a[0])},m(r,n){$(r,t,n),l&&l.m(t,null),e=!0},p(r,[n]){l&&l.p&&(!e||n&2)&&F(l,c,r,r[1],e?O(c,r[1],n,null):M(r[1]),null),(!e||n&1&&s!==(s="fs=2.5 bold "+r[0]))&&d(t,"class",s)},i(r){e||(y(l,r),e=!0)},o(r){S(l,r),e=!1},d(r){r&&f(t),l&&l.d(r)}}}function rt(a,t,s){let{$$slots:e={},$$scope:c}=t,{classs:l=""}=t;return a.$$set=r=>{"classs"in r&&s(0,l=r.classs),"$$scope"in r&&s(1,c=r.$$scope)},[l,c,e]}class dt extends q{constructor(t){super(),D(this,t,rt,lt,H,{classs:0})}}export{_t as G,dt as H};
