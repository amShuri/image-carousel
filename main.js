(()=>{var e={208:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var r=n(601),i=n.n(r),s=n(314),o=n.n(s)()(i());o.push([e.id,"body {\n  background-color: #dfe3e3;\n\n  min-height: 100vh;\n  user-select: none;\n}\n\nh1 {\n  text-align: center;\n}\n\n.wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.carousel-container {\n  height: 600px;\n  width: 600px;\n  position: relative;\n}\n\n.carousel-container,\n.carousel-slides {\n  display: flex;\n}\n\n.carousel-slides img {\n  display: none;\n  object-fit: cover;\n  width: 600px;\n}\n\n.carousel-slides .visible {\n  display: block;\n}\n\n/* || CAROUSEL CONTROLS */\n.carousel-arrows .arrow {\n  position: absolute;\n  cursor: pointer;\n}\n\n.carousel-arrows .left-arrow,\n.carousel-arrows .right-arrow {\n  background: none;\n  border: none;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.carousel-arrows .left-arrow {\n  left: 7px;\n}\n\n.carousel-arrows .right-arrow {\n  right: 0;\n}\n\n.carousel-arrows svg {\n  fill: #939ca8;\n  height: 28px;\n  width: 28px;\n}\n\n.carousel-arrows svg:hover {\n  fill: #fff;\n}\n\n.carousel-dots {\n  bottom: 0;\n  left: 50%;\n  padding-bottom: 0.15em;\n  position: absolute;\n  transform: translate(-50%, 0);\n}\n\n.carousel-dot {\n  background-color: #939ca8;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  display: inline-block;\n  height: 8px;\n  width: 8px;\n}\n\n.carousel-dot.active {\n  background-color: #4083a1;\n  height: 10px;\n  width: 10px;\n}\n",""]);const a=o},314:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,s){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(o[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&o[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),t.push(d))}},t}},601:e=>{"use strict";e.exports=function(e){return e[1]}},72:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var s={},o=[],a=0;a<e.length;a++){var c=e[a],l=r.base?c[0]+r.base:c[0],d=s[l]||0,u="".concat(l," ").concat(d);s[l]=d+1;var h=n(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)t[h].references++,t[h].updater(p);else{var v=i(p,r);r.byIndex=a,t.splice(a,0,{identifier:u,updater:v,references:1})}o.push(u)}return o}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var s=r(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<s.length;o++){var a=n(s[o]);t[a].references--}for(var c=r(e,i),l=0;l<s.length;l++){var d=n(s[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}s=c}}},659:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},652:()=>{new class{constructor(){this.slides=document.querySelectorAll(".slide"),this.activeDot=document.querySelector(".active"),this.dots=document.querySelectorAll(".carousel-dot"),this.currentSlideIndex=0,this.slideshowInterval=null,this.initialize()}initialize(){document.querySelector("#next-btn").addEventListener("click",(()=>{this.stopSlideshow(),this.nextSlide()})),document.querySelector("#previous-btn").addEventListener("click",(()=>{this.stopSlideshow(),this.prevSlide()})),document.querySelector("#carousel-dots").addEventListener("click",(e=>{e.target.classList.contains("carousel-dot")&&(this.currentSlideIndex=Number(e.target.dataset.dot),this.stopSlideshow(),this.displaySlide())})),this.startSlideshow()}nextSlide(){this.incrementIndex(),this.displaySlide()}prevSlide(){this.decrementIndex(),this.displaySlide()}displaySlide(){const e=document.querySelector(".visible"),t=this.slides[this.currentSlideIndex];e.classList.remove("visible"),t.classList.add("visible"),this.autoplayInterval||this.startSlideshow(),this.highlightActiveDot()}incrementIndex(){this.currentSlideIndex=(this.currentSlideIndex+1)%this.slides.length}decrementIndex(){this.currentSlideIndex=(this.currentSlideIndex-1+this.slides.length)%this.slides.length}startSlideshow(e=5e3){this.autoplayInterval=setInterval((()=>this.nextSlide()),e)}stopSlideshow(){clearInterval(this.autoplayInterval),this.autoplayInterval=null}highlightActiveDot(){this.activeDot.classList.contains("active")&&this.activeDot.classList.remove("active"),this.activeDot=this.dots[this.currentSlideIndex],this.dots[this.currentSlideIndex].classList.add("active")}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var s=t[r]={id:r,exports:{}};return e[r](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";var e=n(72),t=n.n(e),r=n(825),i=n.n(r),s=n(659),o=n.n(s),a=n(56),c=n.n(a),l=n(540),d=n.n(l),u=n(113),h=n.n(u),p=n(208),v={};v.styleTagTransform=h(),v.setAttributes=c(),v.insert=o().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=d(),t()(p.A,v),p.A&&p.A.locals&&p.A.locals,n(652)})()})();