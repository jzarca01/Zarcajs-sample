!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){const n="TEXT ELEMENT";function r(e,t,...o){const a=Object.assign({},t),l=o.length>0?[].concat(...o):[];var u;return a.children=l.filter(e=>null!=e&&!1!==e).map(e=>e instanceof Object?e:(u=e,r(n,{nodeValue:u}))),{type:e,props:a}}e.exports=r},function(e,t){e.exports=function e(t,n){const{type:r,props:o}=t,a="TEXT ELEMENT"===r?document.createTextNode(""):document.createElement(r),l=e=>e.startsWith("on");Object.keys(o).filter(l).forEach(e=>{const t=e.toLowerCase().substring(2);a.addEventListener(t,o[e])});Object.keys(o).filter(e=>!l(e)&&"children"!=e).forEach(e=>{a[e]=o[e]}),(o.children||[]).forEach(t=>e(t,a)),n.appendChild(a)}},function(e,t,n){const r=n(1),o=n(0),a=function(){return{render:r,createElement:o}};window.Zarca=a(),e.exports=a()},function(e,t,n){"use strict";var r,o=n(2),a=(r=o)&&r.__esModule?r:{default:r};var l=a.default.createElement("ul",null,[{name:"Saab",url:"https://fr.wikipedia.org/wiki/Saab_Automobile"},{name:"Volvo",url:"https://fr.wikipedia.org/wiki/Volvo"},{name:"BMW",url:"https://fr.wikipedia.org/wiki/Bayerische_Motoren_Werke"}].map(function(e){return a.default.createElement("li",null,a.default.createElement("div",null,a.default.createElement("b",null,e.name," :"),a.default.createElement("a",{href:e.url},"Link")))}));var u=a.default.createElement("div",null,a.default.createElement("h1",null,"List of car brands : "),l);a.default.render(u,document.getElementById("root"))}]);
//# sourceMappingURL=app.bundle.js.map