parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d6sW":[function(require,module,exports) {
function e(e,n,t){e===document&&(e=document.scrollingElement||document.documentElement||document.body.parentNode||document.body);var o=!1,i=e.scrollTop,a=e===document.body&&document.documentElement?document.documentElement:e;function d(t){t.preventDefault();var d=function(e){return e.detail?e.wheelDelta?e.wheelDelta/e.detail/40*(e.detail>0?1:-1):-e.detail/3:e.wheelDelta/120}(t);i+=-d*n,i=Math.max(0,Math.min(i,e.scrollHeight-a.clientHeight)),o||m()}function m(){o=!0;var n=(i-e.scrollTop)/t;e.scrollTop+=n,Math.abs(n)>.5?l(m):o=!1}e.addEventListener("mousewheel",d,{passive:!1}),e.addEventListener("DOMMouseScroll",d,{passive:!1});var l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,20)}}window.innerWidth>1300&&(new e(document,120,12),console.log(!0));
},{}]},{},["d6sW"], null)
//# sourceMappingURL=/main.e1a3a92a.js.map