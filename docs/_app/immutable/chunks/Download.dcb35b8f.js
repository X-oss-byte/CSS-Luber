import{s as d,x as _,f as m,g as h,h as b,d as u,j as f,i as g,r as y,z as k,A as p,B as w}from"./scheduler.37114a5d.js";import{S as C,i as O,a as U,t as j}from"./index.80e0ab0e.js";function B(a){let l,n,c,r;const o=a[4].default,e=_(o,a,a[3],null);return{c(){l=m("button"),e&&e.c(),this.h()},l(s){l=h(s,"BUTTON",{class:!0});var t=b(l);e&&e.l(t),t.forEach(u),this.h()},h(){f(l,"class",a[0])},m(s,t){g(s,l,t),e&&e.m(l,null),n=!0,c||(r=y(l,"click",a[1]),c=!0)},p(s,[t]){e&&e.p&&(!n||t&8)&&k(e,o,s,s[3],n?w(o,s[3],t,null):p(s[3]),null),(!n||t&1)&&f(l,"class",s[0])},i(s){n||(U(e,s),n=!0)},o(s){j(e,s),n=!1},d(s){s&&u(l),e&&e.d(s),c=!1,r()}}}function D(a,l,n){let{$$slots:c={},$$scope:r}=l,{classs:o=""}=l,{url:e}=l;const s=()=>fetch(e).then(t=>t.blob()).then(t=>{const i=document.createElement("a");i.href=URL.createObjectURL(t),i.download=e.slice(e.lastIndexOf("/")+1),i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i)});return a.$$set=t=>{"classs"in t&&n(0,o=t.classs),"url"in t&&n(2,e=t.url),"$$scope"in t&&n(3,r=t.$$scope)},[o,s,e,r,c]}class R extends C{constructor(l){super(),O(this,l,D,B,d,{classs:0,url:2})}}export{R as D};