import{S as k,i as q,s as G,k as E,a as S,_ as w,l as H,m as v,h as g,c as b,$ as L,n as o,b as I,H as u,D,o as V,L as j}from"./index.e72184b5.js";function z(i){let e,s,T,n,d,l,M=i[1][i[2]]+"",_,m,p,c,f,h;return{c(){e=E("div"),s=E("span"),T=S(),n=E("span"),d=S(),l=E("span"),_=S(),m=w("svg"),p=w("defs"),c=w("filter"),f=w("feColorMatrix"),this.h()},l(a){e=H(a,"DIV",{class:!0});var t=v(e);s=H(t,"SPAN",{class:!0});var r=v(s);r.forEach(g),T=b(t),n=H(t,"SPAN",{class:!0});var y=v(n);y.forEach(g),d=b(t),l=H(t,"SPAN",{class:!0});var N=v(l);N.forEach(g),_=b(t),m=L(t,"svg",{class:!0});var C=v(m);p=L(C,"defs",{});var P=v(p);c=L(P,"filter",{id:!0});var A=v(c);f=L(A,"feColorMatrix",{in:!0,type:!0,values:!0}),v(f).forEach(g),A.forEach(g),P.forEach(g),C.forEach(g),t.forEach(g),this.h()},h(){o(s,"class",i[6]),o(n,"class",i[7]),o(l,"class","static! op=0"),o(f,"in","SourceGraphic"),o(f,"type","matrix"),o(f,"values",`1 0 0 0 0\r
					0 1 0 0 0\r
					0 0 1 0 0\r
					0 0 0 255 -140`),o(c,"id","ft"),o(m,"class","none"),o(e,"class",h="relative ta=center "+(i[5]?"ft=url(#ft)":"")+" >span/absolute >span/w=100% >span/l=0 >span/us=none "+i[0])},m(a,t){I(a,e,t),u(e,s),s.innerHTML=i[3],u(e,T),u(e,n),n.innerHTML=i[4],u(e,d),u(e,l),l.innerHTML=M,u(e,_),u(e,m),u(m,p),u(p,c),u(c,f)},p(a,[t]){t&8&&(s.innerHTML=a[3]),t&64&&o(s,"class",a[6]),t&16&&(n.innerHTML=a[4]),t&128&&o(n,"class",a[7]),t&6&&M!==(M=a[1][a[2]]+"")&&(l.innerHTML=M),t&33&&h!==(h="relative ta=center "+(a[5]?"ft=url(#ft)":"")+" >span/absolute >span/w=100% >span/l=0 >span/us=none "+a[0])&&o(e,"class",h)},i:D,o:D,d(a){a&&g(e)}}}function B(i,e,s){let{classs:T=""}=e,{array:n=[]}=e,{longest:d}=e,{transition:l=500}=e,M,_=0,m=n[0][0],p="",c=!1,f="",h="";const a=async r=>new Promise(y=>M=setTimeout(y,r)),t=async()=>{await a(n[_][1]-l),s(5,c=!0),s(7,h="ft=blur(.5em)"),await a(l*.1),_=++_%n.length,s(4,p=n[_][0]),s(6,f="tt=filter_"+l+"ms ft=blur(.5em)"),s(7,h="tt=filter_"+l+"ms"),await a(l*.9),s(3,m=n[_][0]),s(5,c=!1),s(6,f=""),s(7,h=""),t()};return V(t),j(()=>clearTimeout(M)),i.$$set=r=>{"classs"in r&&s(0,T=r.classs),"array"in r&&s(1,n=r.array),"longest"in r&&s(2,d=r.longest),"transition"in r&&s(8,l=r.transition)},[T,n,d,m,p,c,f,h,l]}class J extends k{constructor(e){super(),q(this,e,B,z,G,{classs:0,array:1,longest:2,transition:8})}}export{J as M};