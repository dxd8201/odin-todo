(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"/* =========== */\n/* General CSS */\n/* =========== */\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\n/* ============= */\n/* Main Grid CSS */\n/* ============= */\n\n.main-grid-container {\n    display: grid;\n    grid-template-columns: .5fr 1fr  1fr 1fr;\n    grid-template-rows: .5fr 1fr  1fr 1fr;\n\n    min-height: 100vh;\n    width: 100vw;\n}\n\n/* ========== */\n/* Header CSS */\n/* ========== */\n\n.header-container {\n    background-color: rgb(36, 34, 80);\n    grid-area: 1 / 1 / 2 / 5;\n    box-shadow: 0 8px 6px -6px rgb(0 0 0);\n    z-index: 2;\n}\n\n.title-logo-container {\n    height: 100%;\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n    margin-left: 3rem;\n}\n\n.todo-logo {\n    height: 2rem;\n    width: 2rem;\n    color: goldenrod;\n}\n\n.title-logo-container h1 {\n    color: #fff;\n    font-size: 2rem;\n}\n\n\n\n/* ================ */\n/* Main Content CSS */\n/* ================ */\n\n.main-content-container {\n    background-color: rgb(30, 29, 49);\n    grid-area: 2 / 2 / 5 / 5;\n}\n\n.todo-project-container {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n    width: 75%;\n    margin: 0 auto;\n    background-color: rgb(36, 34, 80);\n    margin-top: 2rem;\n    box-shadow: 5px 5px 15px 1px rgb(0 0 0 / 34%);\n    border-radius: 9px;\n}\n\n.main-project-title-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: .25rem;\n    width: 100%;\n    transition: 1s all;\n}\n\n.add-todo-icon {\n    color: #fff;\n    height: 2rem;\n    width: 2rem;\n    margin-right: 1rem;\n}\n\n.add-todo-icon:hover {\n    transform: rotate(90deg);\n    transition: 1s all;\n}\n\n.main-project-title {\n    width: 100%;\n    text-align: center;\n    font-size: 2rem;\n    font-weight: 600;\n    color: #fff; \n    margin-right: auto;\n}\n\n.todo-task-container {\n    width: 75%;\n    height: auto;\n    text-align: center;\n    margin-top: .75rem;\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n}\n\n.single-todo-task-container {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    background-color: rgb(150, 150, 228);\n    padding: .75rem;\n    margin-top: .75rem;\n    flex: 1;\n    width: 100%;\n    border-radius: 9px;\n    box-shadow: 5px 5px 15px 1px rgb(0 0 0 / 34%);\n    margin-bottom: 1rem;\n    transition: .5s all;\n    \n}\n\n.single-todo-task-container:hover {\n    box-shadow: inset 5px 5px 15px 1px rgb(0 0 0 / 34%);\n}\n\n.todo-task {\n    display: flex;\n    word-break: break-all;\n    margin-right: auto;\n}\n\n.todo-icon {\n    height: 1.5rem;\n    width: 1.5rem;\n    justify-self: flex-end;\n    justify-items: flex-end;\n    margin-right: 1rem;\n}\n\n/* ============ */\n/* Sidebar CSS */\n/* ============ */\n\n.sidebar-container {\n    background-color: rgb(30, 28, 66);\n    grid-area: 2 / 1 / 5 / 2;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n    border-right: 1px solid rgb(150, 150, 228);\n    z-index: 1;\n}\n\n.add-new-projects-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 80%;\n    min-width: 60%;\n    transition: 1s all;\n}\n\n.add-new-projects-container h1 {\n    margin-right: auto;\n}\n\n.add-new-projects-container .side-bar-icon:hover {\n    transform: rotate(90deg);\n    transition: .75s all;\n}\n\n.sort-by-time-container, .project-container {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    flex: 1 1 0;\n    width: 100%;\n    padding: 1rem 1rem 1rem 3rem;\n}\n\n\n.selectable-time-container {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    text-align: center;\n    margin-top: .5rem;\n    gap: .2rem;\n    cursor: pointer;\n    width: 75%;\n    height: 2rem;\n    border-radius: 10px;\n    padding: .2rem 0 .2rem 1rem;\n    transition: all .3s;\n}\n\n.selectable-time-container p, .project-container h2, .project-title {\n    color: #fff;\n}\n\n.selectable-time-container:hover {\n    background-color: rgb(124, 124, 201);\n    box-shadow: 5px 5px 15px 1px rgb(0 0 0 / 34%);\n}\n\n.side-bar-icon {\n    width: 1.2rem;\n    height: 1.2rem;\n    color: #fff;\n}",""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),u=t.n(p),f=t(426),m={};function g(){console.log("create project module is hooked up")}function h(n,e){this.title=n,this.dueDate=e;const t=document.createElement("div");t.classList.add("single-todo-task-container"),t.setAttribute("id","singleTodoTaskContainer");const r=document.createElement("div");return r.classList.add("todo-task"),r.setAttribute("id","todoTask"),r.textContent=n,t.appendChild(r),t.innerHTML+='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 todo-icon"> <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /> </svg>',t.innerHTML+='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 todo-icon"> <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /> </svg>',console.log("create todo module is hooked up"),t}m.styleTagTransform=u(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals,(()=>{const n=document.getElementById("newProject"),e=document.getElementById("newTodo");n.addEventListener("click",(function(){new g})),e.addEventListener("click",(function(){document.getElementById("todoTaskContainer").appendChild(new h("99 woodcutting","7/31/2023"))}))})(),console.log("Hello world")})()})();