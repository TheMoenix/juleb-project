(this.webpackJsonpmyApp=this.webpackJsonpmyApp||[]).push([[4],{92:function(e,t,n){"use strict";n.r(t),n.d(t,"startInputShims",(function(){return g}));var r=n(6),o=n(2),a=n.n(o),i=n(9),c=new WeakMap,u=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;c.has(e)!==n&&(n?l(e,t,r):d(e,t))},s=function(e){return e===e.getRootNode().activeElement},l=function(e,t,n){var r=t.parentNode,o=t.cloneNode(!1);o.classList.add("cloned-input"),o.tabIndex=-1,r.appendChild(o),c.set(e,o);var a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform="translate3d(".concat(a,"px,").concat(n,"px,0) scale(0)")},d=function(e,t){var n=c.get(e);n&&(c.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},f=function(e,t,n){if(!n||!t)return function(){};var r=function(n){s(t)&&u(e,t,n)},o=function(){return u(e,t,!1)},a=function(){return r(!0)},c=function(){return r(!1)};return Object(i.a)(n,"ionScrollStart",a),Object(i.a)(n,"ionScrollEnd",c),t.addEventListener("blur",o),function(){Object(i.b)(n,"ionScrollStart",a),Object(i.b)(n,"ionScrollEnd",c),t.addEventListener("ionBlur",o)}},p="input, textarea, [no-blur], [contenteditable]",v=function(e,t,n){var r=e.closest("ion-item,[ion-item]")||e;return m(r.getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)},m=function(e,t,n,r){var o=e.top,a=e.bottom,i=t.top,c=i+15,u=.75*Math.min(t.bottom,r-n)-a,s=c-o,l=Math.round(u<0?-u:s>0?-s:0),d=Math.min(l,o-i),f=Math.abs(d)/.3;return{scrollAmount:d,scrollDuration:Math.min(400,Math.max(150,f)),scrollPadding:n,inputSafeY:4-(o-c)}},b=function(e,t,n,r,o){var a,c=function(e){a=Object(i.o)(e)},u=function(c){if(a){var u=Object(i.o)(c);w(6,a,u)||s(t)||(c.stopPropagation(),h(e,t,n,r,o))}};return e.addEventListener("touchstart",c,!0),e.addEventListener("touchend",u,!0),function(){e.removeEventListener("touchstart",c,!0),e.removeEventListener("touchend",u,!0)}},h=function(){var e=Object(r.a)(a.a.mark((function e(t,n,o,c,s){var l,d,f,p,m,b;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o||c){e.next=2;break}return e.abrupt("return");case 2:if(l=v(t,o||c,s),!(o&&Math.abs(l.scrollAmount)<4)){e.next=6;break}return n.focus(),e.abrupt("return");case 6:if(u(t,n,!0,l.inputSafeY),n.focus(),Object(i.q)((function(){return t.click()})),"undefined"===typeof window){e.next=22;break}if(f=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==d&&clearTimeout(d),window.removeEventListener("ionKeyboardDidShow",p),window.removeEventListener("ionKeyboardDidShow",f),!o){e.next=6;break}return e.next=6,o.scrollByPoint(0,l.scrollAmount,l.scrollDuration);case 6:u(t,n,!1,l.inputSafeY),n.focus();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function e(){window.removeEventListener("ionKeyboardDidShow",e),window.addEventListener("ionKeyboardDidShow",f)},!o){e.next=21;break}return e.next=15,o.getScrollElement();case 15:if(m=e.sent,b=m.scrollHeight-m.clientHeight,!(l.scrollAmount>b-m.scrollTop)){e.next=21;break}return"password"===n.type?(l.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",p)):window.addEventListener("ionKeyboardDidShow",f),d=setTimeout(f,1e3),e.abrupt("return");case 21:f();case 22:case"end":return e.stop()}}),e)})));return function(t,n,r,o,a){return e.apply(this,arguments)}}(),w=function(e,t,n){if(t&&n){var r=t.x-n.x,o=t.y-n.y;return r*r+o*o>e*e}return!1},E=function(e,t){if("INPUT"===e.tagName&&(!e.parentElement||"ION-INPUT"!==e.parentElement.tagName)&&(!e.parentElement||!e.parentElement.parentElement||"ION-SEARCHBAR"!==e.parentElement.parentElement.tagName)){var n=e.closest("ion-content");if(null!==n){var r=n.$ionPaddingTimer;r&&clearTimeout(r),t>0?n.style.setProperty("--keyboard-offset","".concat(t,"px")):n.$ionPaddingTimer=setTimeout((function(){n.style.setProperty("--keyboard-offset","0px")}),120)}}},g=function(e){var t=document,n=e.getNumber("keyboardHeight",290),o=e.getBoolean("scrollAssist",!0),c=e.getBoolean("hideCaretOnScroll",!0),u=e.getBoolean("inputBlurring",!0),s=e.getBoolean("scrollPadding",!0),l=Array.from(t.querySelectorAll("ion-input, ion-textarea")),d=new WeakMap,v=new WeakMap,m=function(){var e=Object(r.a)(a.a.mark((function e(t){var r,u,s,l,p,m;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return Object(i.c)(t,e)}));case 2:if(r=t.shadowRoot||t,u=r.querySelector("input")||r.querySelector("textarea"),s=t.closest("ion-content"),l=s?null:t.closest("ion-footer"),u){e.next=8;break}return e.abrupt("return");case 8:s&&c&&!d.has(t)&&(p=f(t,u,s),d.set(t,p)),(s||l)&&o&&!v.has(t)&&(m=b(t,u,s,l,n),v.set(t,m));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();u&&function(){var e=!0,t=!1,n=document,r=function(){t=!0},o=function(){e=!0},a=function(r){if(t)t=!1;else{var o=n.activeElement;if(o&&!o.matches(p)){var a=r.target;a!==o&&(a.matches(p)||a.closest(p)||(e=!1,setTimeout((function(){e||o.blur()}),50)))}}};Object(i.a)(n,"ionScrollStart",r),n.addEventListener("focusin",o,!0),n.addEventListener("touchend",a,!1)}(),s&&function(e){var t=document,n=function(t){E(t.target,e)},r=function(e){E(e.target,0)};t.addEventListener("focusin",n),t.addEventListener("focusout",r)}(n);for(var h=0,w=l;h<w.length;h++){var g=w[h];m(g)}t.addEventListener("ionInputDidLoad",(function(e){m(e.detail)})),t.addEventListener("ionInputDidUnload",(function(e){!function(e){if(c){var t=d.get(e);t&&t(),d.delete(e)}if(o){var n=v.get(e);n&&n(),v.delete(e)}}(e.detail)}))}}}]);
//# sourceMappingURL=4.e49ffa58.chunk.js.map