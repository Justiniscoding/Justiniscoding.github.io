import{S as j,i as A,s as C,k as d,a as D,q as I,l as f,m as v,h as c,c as M,r as V,n as p,b as k,G as h,H as u,o as q,w}from"../chunks/index.6dba6488.js";const g="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234767890[];?!@#$%&*()+".split("");function y(r,t,a,s,o){let e=r.split("");for(var n=0;n<e.length;n++)a/7<n+1?e[n]=E():a/7==n+1&&(e[n]=t.charAt(n));o(e.join("")),setTimeout(()=>y(e.join(""),t,++a,s,o),s)}function E(){return g[Math.floor(Math.random()*g.length)]}function H(r){return new Array(r).fill("").map(()=>E()).join("")}function S(r){let t,a,s,o,e,n;return{c(){t=d("div"),a=d("div"),s=d("h1"),o=D(),e=d("div"),n=I("page2"),this.h()},l(i){t=f(i,"DIV",{class:!0});var l=v(t);a=f(l,"DIV",{class:!0});var _=v(a);s=f(_,"H1",{id:!0,class:!0});var x=v(s);x.forEach(c),_.forEach(c),o=M(l),e=f(l,"DIV",{class:!0});var m=v(e);n=V(m,"page2"),m.forEach(c),l.forEach(c),this.h()},h(){p(s,"id","name"),p(s,"class","svelte-p2ypv"),p(a,"class","page page1 svelte-p2ypv"),p(e,"class","page page2 svelte-p2ypv"),p(t,"class","container svelte-p2ypv")},m(i,l){k(i,t,l),h(t,a),h(a,s),r[1](s),h(t,o),h(t,e),h(e,n)},p:u,i:u,o:u,d(i){i&&c(t),r[1](null)}}}function T(r,t,a){let s;q(()=>{y(H(14),"Justiniscoding",0,25,e=>{a(0,s.innerText=e,s)})});function o(e){w[e?"unshift":"push"](()=>{s=e,a(0,s)})}return[s,o]}class G extends j{constructor(t){super(),A(this,t,T,S,C,{})}}export{G as component};