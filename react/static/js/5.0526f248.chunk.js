(this.webpackJsonpmyApp=this.webpackJsonpmyApp||[]).push([[5],{82:function(t,e,o){"use strict";o.r(e),o.d(e,"iosTransitionAnimation",(function(){return p})),o.d(e,"shadow",(function(){return s}));var a=o(1),n=o(15),r=o(11),c=o(18),l=function(t){return document.querySelector("".concat(t,".ion-cloned-element"))},s=function(t){return t.shadowRoot||t},i=function(t){var e="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs"),o="ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(null!=e){var a=e.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return null!=a?a.querySelector(o):null}return t.querySelector(o)},f=function(t,e){var o="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs"),a=[];if(null!=o){var r=o.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");null!=r&&(a=r.querySelectorAll("ion-buttons"))}else a=t.querySelectorAll("ion-buttons");var c,l=Object(n.a)(a);try{for(l.s();!(c=l.n()).done;){var s=c.value,i=s.closest("ion-header"),f=i&&!i.classList.contains("header-collapse-condense-inactive"),d=s.querySelector("ion-back-button"),m=s.classList.contains("buttons-collapse"),p="start"===s.slot||""===s.slot;if(null!==d&&p&&(m&&f&&e||!m))return d}}catch(y){l.e(y)}finally{l.f()}return null},d=function(t,e,o,a,n,c){var i=e?"calc(100% - ".concat(c.right+4,"px)"):"".concat(c.left-4,"px"),f=e?"7px":"-7px",d=e?"-4px":"4px",m=e?"-4px":"4px",p=e?"right":"left",y=e?"left":"right",u=[{offset:0,opacity:0,transform:"translate3d(".concat(f,", ").concat(n.top-40,"px, 0) scale(2.1)")},{offset:1,opacity:1,transform:"translate3d(".concat(d,", ").concat(c.top-46,"px, 0) scale(1)")}],b=[{offset:0,opacity:1,transform:"translate3d(".concat(d,", ").concat(c.top-46,"px, 0) scale(1)")},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate3d(".concat(f,", ").concat(n.top-40,"px, 0) scale(2.1)")}],S=o?b:u,v=[{offset:0,opacity:0,transform:"translate3d(".concat(m,", ").concat(c.top-41,"px, 0) scale(0.6)")},{offset:1,opacity:1,transform:"translate3d(".concat(m,", ").concat(c.top-46,"px, 0) scale(1)")}],g=[{offset:0,opacity:1,transform:"translate3d(".concat(m,", ").concat(c.top-46,"px, 0) scale(1)")},{offset:.2,opacity:0,transform:"translate3d(".concat(m,", ").concat(c.top-41,"px, 0) scale(0.6)")},{offset:1,opacity:0,transform:"translate3d(".concat(m,", ").concat(c.top-41,"px, 0) scale(0.6)")}],T=o?g:v,h=Object(r.a)(),x=Object(r.a)(),q=l("ion-back-button"),X=s(q).querySelector(".button-text"),A=s(q).querySelector("ion-icon");q.text=a.text,q.mode=a.mode,q.icon=a.icon,q.color=a.color,q.disabled=a.disabled,q.style.setProperty("display","block"),q.style.setProperty("position","fixed"),x.addElement(A),h.addElement(X),h.beforeStyles({"transform-origin":"".concat(p," center")}).beforeAddWrite((function(){a.style.setProperty("display","none"),q.style.setProperty(p,i)})).afterAddWrite((function(){a.style.setProperty("display",""),q.style.setProperty("display","none"),q.style.removeProperty(p)})).keyframes(S),x.beforeStyles({"transform-origin":"".concat(y," center")}).keyframes(T),t.addAnimation([h,x])},m=function(t,e,o,n,c,s){var i=e?"calc(100% - ".concat(c.right,"px)"):"".concat(c.left,"px"),f=e?"-18px":"18px",d=e?"right":"left",m=[{offset:0,opacity:0,transform:"translate3d(".concat(f,", ").concat(s.top-4,"px, 0) scale(0.49)")},{offset:.1,opacity:0},{offset:1,opacity:1,transform:"translate3d(0, ".concat(c.top-2,"px, 0) scale(1)")}],p=[{offset:0,opacity:.99,transform:"translate3d(0, ".concat(c.top-2,"px, 0) scale(1)")},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate3d(".concat(f,", ").concat(s.top-4,"px, 0) scale(0.5)")}],y=o?m:p,u=l("ion-title"),b=Object(r.a)();u.innerText=n.innerText,u.size=n.size,u.color=n.color,b.addElement(u),b.beforeStyles(Object(a.a)({"transform-origin":"".concat(d," center"),height:"46px",display:"",position:"relative"},d,i)).beforeAddWrite((function(){n.style.setProperty("display","none")})).afterAddWrite((function(){n.style.setProperty("display",""),u.style.setProperty("display","none")})).keyframes(y),t.addAnimation(b)},p=function(t,e){try{var o="opacity",a="transform",n="0%",l="rtl"===t.ownerDocument.dir,p=l?"-99.5%":"99.5%",y=l?"33%":"-33%",u=e.enteringEl,b=e.leavingEl,S="back"===e.direction,v=u.querySelector(":scope > ion-content"),g=u.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),T=u.querySelectorAll(":scope > ion-header > ion-toolbar"),h=Object(r.a)(),x=Object(r.a)();if(h.addElement(u).duration(e.duration||540).easing(e.easing||"cubic-bezier(0.32,0.72,0,1)").fill("both").beforeRemoveClass("ion-page-invisible"),b&&t){var q=Object(r.a)();q.addElement(t),h.addAnimation(q)}if(v||0!==T.length||0!==g.length?(x.addElement(v),x.addElement(g)):x.addElement(u.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),h.addAnimation(x),S?x.beforeClearStyles([o]).fromTo("transform","translateX(".concat(y,")"),"translateX(".concat(n,")")).fromTo(o,.8,1):x.beforeClearStyles([o]).fromTo("transform","translateX(".concat(p,")"),"translateX(".concat(n,")")),v){var X=s(v).querySelector(".transition-effect");if(X){var A=X.querySelector(".transition-cover"),E=X.querySelector(".transition-shadow"),O=Object(r.a)(),j=Object(r.a)(),C=Object(r.a)();O.addElement(X).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),j.addElement(A).beforeClearStyles([o]).fromTo(o,0,.1),C.addElement(E).beforeClearStyles([o]).fromTo(o,.03,.7),O.addAnimation([j,C]),x.addAnimation([O])}}var k=u.querySelector("ion-header.header-collapse-condense"),w=function(t,e,o,a,n){var r=f(a,o),c=i(n),l=i(a),s=f(n,o),p=null!==r&&null!==c&&!o,y=null!==l&&null!==s&&o;if(p){var u=c.getBoundingClientRect(),b=r.getBoundingClientRect();m(t,e,o,c,u,b),d(t,e,o,r,u,b)}else if(y){var S=l.getBoundingClientRect(),v=s.getBoundingClientRect();m(t,e,o,l,S,v),d(t,e,o,s,S,v)}return{forward:p,backward:y}}(h,l,S,u,b),P=w.forward,L=w.backward;if(T.forEach((function(t){var e=Object(r.a)();e.addElement(t),h.addAnimation(e);var a=Object(r.a)();a.addElement(t.querySelector("ion-title"));var c,i=Object(r.a)(),f=Array.from(t.querySelectorAll("ion-buttons,[menuToggle]")),d=t.closest("ion-header"),m=d&&d.classList.contains("header-collapse-condense-inactive");c=S?f.filter((function(t){var e=t.classList.contains("buttons-collapse");return e&&!m||!e})):f.filter((function(t){return!t.classList.contains("buttons-collapse")})),i.addElement(c);var u=Object(r.a)();u.addElement(t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));var b=Object(r.a)();b.addElement(s(t).querySelector(".toolbar-background"));var v=Object(r.a)(),g=t.querySelector("ion-back-button");if(g&&v.addElement(g),e.addAnimation([a,i,u,b,v]),i.fromTo(o,.01,1),u.fromTo(o,.01,1),S)m||a.fromTo("transform","translateX(".concat(y,")"),"translateX(".concat(n,")")).fromTo(o,.01,1),u.fromTo("transform","translateX(".concat(y,")"),"translateX(".concat(n,")")),v.fromTo(o,.01,1);else if(k||a.fromTo("transform","translateX(".concat(p,")"),"translateX(".concat(n,")")).fromTo(o,.01,1),u.fromTo("transform","translateX(".concat(p,")"),"translateX(".concat(n,")")),b.beforeClearStyles([o,"transform"]),(null===d||void 0===d?void 0:d.translucent)?b.fromTo("transform",l?"translateX(-100%)":"translateX(100%)","translateX(0px)"):b.fromTo(o,.01,"var(--opacity)"),P||v.fromTo(o,.01,1),g&&!P){var T=Object(r.a)();T.addElement(s(g).querySelector(".button-text")).fromTo("transform",l?"translateX(-100px)":"translateX(100px)","translateX(0px)"),e.addAnimation(T)}})),b){var B=Object(r.a)(),R=b.querySelector(":scope > ion-content"),W=b.querySelectorAll(":scope > ion-header > ion-toolbar"),N=b.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(R||0!==W.length||0!==N.length?(B.addElement(R),B.addElement(N)):B.addElement(b.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),h.addAnimation(B),S){B.beforeClearStyles([o]).fromTo("transform","translateX(".concat(n,")"),l?"translateX(-100%)":"translateX(100%)");var z=Object(c.e)(b);h.afterAddWrite((function(){"normal"===h.getDirection()&&z.style.setProperty("display","none")}))}else B.fromTo("transform","translateX(".concat(n,")"),"translateX(".concat(y,")")).fromTo(o,1,.8);if(R){var D=s(R).querySelector(".transition-effect");if(D){var I=D.querySelector(".transition-cover"),J=D.querySelector(".transition-shadow"),F=Object(r.a)(),G=Object(r.a)(),H=Object(r.a)();F.addElement(D).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),G.addElement(I).beforeClearStyles([o]).fromTo(o,.1,0),H.addElement(J).beforeClearStyles([o]).fromTo(o,.7,.03),F.addAnimation([G,H]),B.addAnimation([F])}}W.forEach((function(t){var e=Object(r.a)();e.addElement(t);var c=Object(r.a)();c.addElement(t.querySelector("ion-title"));var i=Object(r.a)(),f=t.querySelectorAll("ion-buttons,[menuToggle]"),d=t.closest("ion-header"),m=d&&d.classList.contains("header-collapse-condense-inactive"),p=Array.from(f).filter((function(t){var e=t.classList.contains("buttons-collapse");return e&&!m||!e}));i.addElement(p);var u=Object(r.a)(),b=t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");b.length>0&&u.addElement(b);var v=Object(r.a)();v.addElement(s(t).querySelector(".toolbar-background"));var g=Object(r.a)(),T=t.querySelector("ion-back-button");if(T&&g.addElement(T),e.addAnimation([c,i,u,g,v]),h.addAnimation(e),g.fromTo(o,.99,0),i.fromTo(o,.99,0),u.fromTo(o,.99,0),S){if(m||c.fromTo("transform","translateX(".concat(n,")"),l?"translateX(-100%)":"translateX(100%)").fromTo(o,.99,0),u.fromTo("transform","translateX(".concat(n,")"),l?"translateX(-100%)":"translateX(100%)"),v.beforeClearStyles([o,"transform"]),(null===d||void 0===d?void 0:d.translucent)?v.fromTo("transform","translateX(0px)",l?"translateX(-100%)":"translateX(100%)"):v.fromTo(o,"var(--opacity)",0),T&&!L){var x=Object(r.a)();x.addElement(s(T).querySelector(".button-text")).fromTo("transform","translateX(".concat(n,")"),"translateX(".concat((l?-124:124)+"px",")")),e.addAnimation(x)}}else m||c.fromTo("transform","translateX(".concat(n,")"),"translateX(".concat(y,")")).fromTo(o,.99,0).afterClearStyles([a,o]),u.fromTo("transform","translateX(".concat(n,")"),"translateX(".concat(y,")")).afterClearStyles([a,o]),g.afterClearStyles([o]),c.afterClearStyles([o]),i.afterClearStyles([o])}))}return h}catch(K){throw K}}}}]);
//# sourceMappingURL=5.0526f248.chunk.js.map