import{S as G,i as K,s as L,e as l,t as c,k as m,c as n,a as i,h as d,d as a,m as y,b as r,g as M,J as e,E as D}from"../../../chunks/index-f104f474.js";function Q(O){let o,t,b,k,S,h,I,A,u,E,T,p,x,j,v,P,J,f,N,q,w,H;return{c(){o=l("div"),t=l("div"),b=l("h1"),k=c("Todo"),S=m(),h=l("p"),I=c(`If I didn't include a basic todo app, how would you know I was a 
            web dev at all? All kidding aside, this is was a one-day project that
            I wanted to build to use on my phone, and thus it is a PWA (progressive web app).
            Are you noticing a theme?`),A=m(),u=l("h3"),E=c("Technical"),T=m(),p=l("p"),x=c(`The project was built in svelte, and plain JS. The hardest part was syncing the 
            svelte store (the svelte equivalent of redux) to localStorage. And localStorage 
            is always a bit tricky because it only stores strings, but the data I needed to
            store was an array of objects. This was simple to overcome by using 'JSON.stringfy'.`),j=m(),v=l("p"),P=c(`Another tricky aspect was the fact that sveltekit is rendered serverside, and thus,
            doesn't have access to localStorage (if not rendered in the browser).. So I had to 
            import the browser library, which tells sveltekit if a browser is rendering, and if it is,
            we can freely use localStorage.`),J=m(),f=l("h3"),N=c("Next Steps"),q=m(),w=l("p"),H=c("I guess the only feature 'missing' is to be able to edit items in the todo list"),this.h()},l(g){o=n(g,"DIV",{class:!0});var _=i(o);t=n(_,"DIV",{class:!0});var s=i(t);b=n(s,"H1",{});var V=i(b);k=d(V,"Todo"),V.forEach(a),S=y(s),h=n(s,"P",{class:!0});var W=i(h);I=d(W,`If I didn't include a basic todo app, how would you know I was a 
            web dev at all? All kidding aside, this is was a one-day project that
            I wanted to build to use on my phone, and thus it is a PWA (progressive web app).
            Are you noticing a theme?`),W.forEach(a),A=y(s),u=n(s,"H3",{class:!0});var $=i(u);E=d($,"Technical"),$.forEach(a),T=y(s),p=n(s,"P",{class:!0});var C=i(p);x=d(C,`The project was built in svelte, and plain JS. The hardest part was syncing the 
            svelte store (the svelte equivalent of redux) to localStorage. And localStorage 
            is always a bit tricky because it only stores strings, but the data I needed to
            store was an array of objects. This was simple to overcome by using 'JSON.stringfy'.`),C.forEach(a),j=y(s),v=n(s,"P",{class:!0});var z=i(v);P=d(z,`Another tricky aspect was the fact that sveltekit is rendered serverside, and thus,
            doesn't have access to localStorage (if not rendered in the browser).. So I had to 
            import the browser library, which tells sveltekit if a browser is rendering, and if it is,
            we can freely use localStorage.`),z.forEach(a),J=y(s),f=n(s,"H3",{class:!0});var B=i(f);N=d(B,"Next Steps"),B.forEach(a),q=y(s),w=n(s,"P",{class:!0});var F=i(w);H=d(F,"I guess the only feature 'missing' is to be able to edit items in the todo list"),F.forEach(a),s.forEach(a),_.forEach(a),this.h()},h(){r(h,"class","svelte-1hkemcu"),r(u,"class","svelte-1hkemcu"),r(p,"class","svelte-1hkemcu"),r(v,"class","svelte-1hkemcu"),r(f,"class","svelte-1hkemcu"),r(w,"class","svelte-1hkemcu"),r(t,"class","column svelte-1hkemcu"),r(o,"class","all svelte-1hkemcu")},m(g,_){M(g,o,_),e(o,t),e(t,b),e(b,k),e(t,S),e(t,h),e(h,I),e(t,A),e(t,u),e(u,E),e(t,T),e(t,p),e(p,x),e(t,j),e(t,v),e(v,P),e(t,J),e(t,f),e(f,N),e(t,q),e(t,w),e(w,H)},p:D,i:D,o:D,d(g){g&&a(o)}}}function R(O){return[]}class X extends G{constructor(o){super(),K(this,o,R,Q,L,{})}}export{X as default};
