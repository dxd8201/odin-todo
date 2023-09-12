/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* =========== */
/* General CSS */
/* =========== */

* {
    margin: 0;
    padding: 0;
}

/* ============= */
/* Main Grid CSS */
/* ============= */

.main-grid-container {
    display: grid;
    grid-template-columns: .5fr 1fr  1fr 1fr;
    grid-template-rows: .5fr 1fr  1fr 1fr;

    min-height: 100vh;
    max-height: 100vh;
    width: 100vw;
}

/* ========== */
/* Header CSS */
/* ========== */

.header-container {
    background-color: rgb(36, 34, 80);
    grid-area: 1 / 1 / 2 / 5;
    box-shadow: 0 8px 6px -6px rgb(0 0 0);
    z-index: 2;
    max-height: 7rem;
}

.title-logo-container {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-left: 3rem;
}

.todo-logo {
    height: 2rem;
    width: 2rem;
    color: goldenrod;
}

.title-logo-container h1 {
    color: #fff;
    font-size: 2rem;
}



/* ================ */
/* Main Content CSS */
/* ================ */

.main-content-container {
    background-color: rgb(30, 29, 49);
    grid-area: 2 / 2 / 5 / 5;
    overflow: scroll;
}

.todo-project-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 75%;
    margin: 0 auto;
    background-color: rgb(36, 34, 80);
    margin-top: 2rem;
    box-shadow: 5px 5px 15px 1px rgb(0 0 0 / 34%);
    border-radius: 9px;
}

.main-project-title-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: .25rem;
    width: 100%;
    transition: 1s all;
}

.add-todo-icon {
    color: #fff;
    height: 2rem;
    width: 2rem;
    margin-right: 1rem;
}

.add-todo-icon:hover {
    transform: rotate(90deg);
    transition: 1s all;
}

.main-project-title {
    width: 100%;
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    color: #fff; 
    margin-right: auto;
}

.todo-task-container {
    width: 75%;
    height: auto;
    text-align: center;
    margin-top: .75rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.single-todo-task-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: rgb(150, 150, 228);
    padding: .75rem;
    margin-top: .75rem;
    flex: 1;
    width: 100%;
    border-radius: 9px;
    box-shadow: 5px 5px 15px 1px rgb(0 0 0 / 34%);
    margin-bottom: 1rem;
    transition: .5s all;
    
}

.single-todo-task-container:hover {
    box-shadow: inset 5px 5px 15px 1px rgb(0 0 0 / 34%);
}

.todo-task {
    display: flex;
    word-break: break-all;
    margin-right: auto;
}

.todo-icon {
    height: 1.5rem;
    width: 1.5rem;
    justify-self: flex-end;
    justify-items: flex-end;
    margin-right: 1rem;
}

/* ============ */
/* Sidebar CSS */
/* ============ */

.sidebar-container {
    background-color: rgb(30, 28, 66);
    grid-area: 2 / 1 / 5 / 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 1px solid rgb(150, 150, 228);
    z-index: 1;
}

.add-new-projects-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    min-width: 60%;
    transition: 1s all;
}

.add-new-projects-container h1 {
    margin-right: auto;
}

.add-new-projects-container .side-bar-icon:hover {
    transform: rotate(90deg);
    transition: .75s all;
}

.sort-by-time-container, .project-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1 1 0;
    width: 100%;
    max-height: 5rem;
    padding: 1rem 1rem 1rem 3rem;
}


.selectable-time-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    margin-top: .5rem;
    gap: .2rem;
    cursor: pointer;
    width: 75%;
    height: 2rem;
    border-radius: 10px;
    padding: .2rem 0 .2rem 1rem;
    transition: all .3s;
}

.selectable-time-container p, .project-container h2, .project-title {
    color: #fff;
}

.selectable-time-container:hover {
    background-color: rgb(124, 124, 201);
    box-shadow: 5px 5px 15px 1px rgb(0 0 0 / 34%);
}

.side-bar-icon {
    width: 1.2rem;
    height: 1.2rem;
    color: #fff;
}

/* ============ */
/* Popup Module */
/* ============ */

.main-popup-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.685);
    position: absolute;
    z-index: 100;
}

.popup-flex-container {
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    background-color: rgb(36, 34, 80);
    width: 30%;
    height: 30%;
    max-width: 30%;
    height: 30%;
    align-self: center;
    justify-self: center;
    border-radius: 9px;
}

.form-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: .5rem;
}

.title-label, .todo-label {
    color: #fff;
    font-size: 1.5rem;
    letter-spacing: .03rem;
}

.submit-btn {
    background-color: rgb(36, 34, 80);
    width: 5rem;
    height: 2rem;
    margin-top: 1rem;
    align-self: center;
    padding: .2rem;
    letter-spacing: .03rem;
    border: solid rgb(124, 124, 201);
    border-radius: 9%;
    text-align: center;
    vertical-align: center;
    color: #fff;
    transition: all .5s;
}

.submit-btn:hover {
    background-color: rgb(124, 124, 201);
    border: solid rgb(36, 34, 80);
}

.submit-btn:active {
    background-color: #fff;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* =========== */\n/* General CSS */\n/* =========== */\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\n/* ============= */\n/* Main Grid CSS */\n/* ============= */\n\n.main-grid-container {\n    display: grid;\n    grid-template-columns: .5fr 1fr  1fr 1fr;\n    grid-template-rows: .5fr 1fr  1fr 1fr;\n\n    min-height: 100vh;\n    max-height: 100vh;\n    width: 100vw;\n}\n\n/* ========== */\n/* Header CSS */\n/* ========== */\n\n.header-container {\n    background-color: rgb(36, 34, 80);\n    grid-area: 1 / 1 / 2 / 5;\n    box-shadow: 0 8px 6px -6px rgb(0 0 0);\n    z-index: 2;\n    max-height: 7rem;\n}\n\n.title-logo-container {\n    height: 100%;\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n    margin-left: 3rem;\n}\n\n.todo-logo {\n    height: 2rem;\n    width: 2rem;\n    color: goldenrod;\n}\n\n.title-logo-container h1 {\n    color: #fff;\n    font-size: 2rem;\n}\n\n\n\n/* ================ */\n/* Main Content CSS */\n/* ================ */\n\n.main-content-container {\n    background-color: rgb(30, 29, 49);\n    grid-area: 2 / 2 / 5 / 5;\n    overflow: scroll;\n}\n\n.todo-project-container {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n    width: 75%;\n    margin: 0 auto;\n    background-color: rgb(36, 34, 80);\n    margin-top: 2rem;\n    box-shadow: 5px 5px 15px 1px rgb(0 0 0 / 34%);\n    border-radius: 9px;\n}\n\n.main-project-title-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: .25rem;\n    width: 100%;\n    transition: 1s all;\n}\n\n.add-todo-icon {\n    color: #fff;\n    height: 2rem;\n    width: 2rem;\n    margin-right: 1rem;\n}\n\n.add-todo-icon:hover {\n    transform: rotate(90deg);\n    transition: 1s all;\n}\n\n.main-project-title {\n    width: 100%;\n    text-align: center;\n    font-size: 2rem;\n    font-weight: 600;\n    color: #fff; \n    margin-right: auto;\n}\n\n.todo-task-container {\n    width: 75%;\n    height: auto;\n    text-align: center;\n    margin-top: .75rem;\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n}\n\n.single-todo-task-container {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    background-color: rgb(150, 150, 228);\n    padding: .75rem;\n    margin-top: .75rem;\n    flex: 1;\n    width: 100%;\n    border-radius: 9px;\n    box-shadow: 5px 5px 15px 1px rgb(0 0 0 / 34%);\n    margin-bottom: 1rem;\n    transition: .5s all;\n    \n}\n\n.single-todo-task-container:hover {\n    box-shadow: inset 5px 5px 15px 1px rgb(0 0 0 / 34%);\n}\n\n.todo-task {\n    display: flex;\n    word-break: break-all;\n    margin-right: auto;\n}\n\n.todo-icon {\n    height: 1.5rem;\n    width: 1.5rem;\n    justify-self: flex-end;\n    justify-items: flex-end;\n    margin-right: 1rem;\n}\n\n/* ============ */\n/* Sidebar CSS */\n/* ============ */\n\n.sidebar-container {\n    background-color: rgb(30, 28, 66);\n    grid-area: 2 / 1 / 5 / 2;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n    border-right: 1px solid rgb(150, 150, 228);\n    z-index: 1;\n}\n\n.add-new-projects-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 80%;\n    min-width: 60%;\n    transition: 1s all;\n}\n\n.add-new-projects-container h1 {\n    margin-right: auto;\n}\n\n.add-new-projects-container .side-bar-icon:hover {\n    transform: rotate(90deg);\n    transition: .75s all;\n}\n\n.sort-by-time-container, .project-container {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    flex: 1 1 0;\n    width: 100%;\n    max-height: 5rem;\n    padding: 1rem 1rem 1rem 3rem;\n}\n\n\n.selectable-time-container {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    text-align: center;\n    margin-top: .5rem;\n    gap: .2rem;\n    cursor: pointer;\n    width: 75%;\n    height: 2rem;\n    border-radius: 10px;\n    padding: .2rem 0 .2rem 1rem;\n    transition: all .3s;\n}\n\n.selectable-time-container p, .project-container h2, .project-title {\n    color: #fff;\n}\n\n.selectable-time-container:hover {\n    background-color: rgb(124, 124, 201);\n    box-shadow: 5px 5px 15px 1px rgb(0 0 0 / 34%);\n}\n\n.side-bar-icon {\n    width: 1.2rem;\n    height: 1.2rem;\n    color: #fff;\n}\n\n/* ============ */\n/* Popup Module */\n/* ============ */\n\n.main-popup-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(255, 255, 255, 0.685);\n    position: absolute;\n    z-index: 100;\n}\n\n.popup-flex-container {\n    display: flex;\n    flex-direction:column;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(36, 34, 80);\n    width: 30%;\n    height: 30%;\n    max-width: 30%;\n    height: 30%;\n    align-self: center;\n    justify-self: center;\n    border-radius: 9px;\n}\n\n.form-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    gap: .5rem;\n}\n\n.title-label, .todo-label {\n    color: #fff;\n    font-size: 1.5rem;\n    letter-spacing: .03rem;\n}\n\n.submit-btn {\n    background-color: rgb(36, 34, 80);\n    width: 5rem;\n    height: 2rem;\n    margin-top: 1rem;\n    align-self: center;\n    padding: .2rem;\n    letter-spacing: .03rem;\n    border: solid rgb(124, 124, 201);\n    border-radius: 9%;\n    text-align: center;\n    vertical-align: center;\n    color: #fff;\n    transition: all .5s;\n}\n\n.submit-btn:hover {\n    background-color: rgb(124, 124, 201);\n    border: solid rgb(36, 34, 80);\n}\n\n.submit-btn:active {\n    background-color: #fff;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/appendTodo.js":
/*!***********************************!*\
  !*** ./src/modules/appendTodo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ appendTodo)
/* harmony export */ });
/* harmony import */ var _createTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo.js */ "./src/modules/createTodo.js");
/* harmony import */ var _todoCreationPopup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoCreationPopup.js */ "./src/modules/todoCreationPopup.js");



//function to create event listeners and append todos to correct project container
function appendTodo () {
    let todoListenerArray = document.querySelectorAll("#newTodo");
    let todoTaskContainerListener = document.querySelectorAll("#todoTaskContainer");
    const headerContainerListener = document.getElementById("mainGridContainer");

    // //function to append the todo to the corresponding todo task container
    // const addTodo = function(i) {
    //   console.log(`You created a do on the ${i}th container`);
    //   todoTaskContainerListener[i].appendChild(new CreateTodo(todoCreationPopup(), "TBD"));
    // }

    //runs through todo array and adds an event listener to all todo creation elements.
      for (let i = 0; i < todoListenerArray.length; i++) {
        //checks if an event listener has already been added, and adds one if it does not have an event listener
        if (todoListenerArray[i].getAttribute('data-event-clicked') !== 'true') {
          todoListenerArray[i].setAttribute('data-event-clicked', 'true');
          todoListenerArray[i].addEventListener('click', function (e) {
              console.log(`event has been attached to ${i}`);
              headerContainerListener.appendChild((0,_todoCreationPopup_js__WEBPACK_IMPORTED_MODULE_1__["default"])(i));
              // addTodo(i);
         });
        }
      }
      return todoListenerArray
}

/***/ }),

/***/ "./src/modules/createProject.js":
/*!**************************************!*\
  !*** ./src/modules/createProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateProject)
/* harmony export */ });
/* harmony import */ var _createTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo.js */ "./src/modules/createTodo.js");
/* harmony import */ var _appendTodo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appendTodo.js */ "./src/modules/appendTodo.js");
/* harmony import */ var _deleteTodo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deleteTodo.js */ "./src/modules/deleteTodo.js");



//should create a modal popup for a project creation card
//background should be covered by modal card with a semi-transparent color. 

function CreateProject(title) {

    this.title = title;
    
    const todoProjectContainer = document.createElement("div");
    todoProjectContainer.classList.add("todo-project-container");
    todoProjectContainer.setAttribute("id", "todoProjectContainer");

    const mainProjectTitleContainer = document.createElement("div");
    mainProjectTitleContainer.classList.add("main-project-title-container");
    mainProjectTitleContainer.setAttribute("id", "mainProjectTitleContainer");
    todoProjectContainer.appendChild(mainProjectTitleContainer);

    const mainProjectTitle = document.createElement("div");
    mainProjectTitle.classList.add("main-project-title");
    mainProjectTitle.setAttribute("id", "main-project-title");
    mainProjectTitleContainer.appendChild(mainProjectTitle);
    mainProjectTitle.textContent = title;

    const todoTaskContainer = document.createElement("div");
    todoTaskContainer.classList.add("todo-task-container");
    todoTaskContainer.setAttribute("id", "todoTaskContainer");
    todoProjectContainer.appendChild(todoTaskContainer);

    const todoCreationIcon = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 add-todo-icon" id="newTodo"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/> </svg>';
    mainProjectTitleContainer.innerHTML += todoCreationIcon;
    
    console.log("create project module is hooked up")
    

    setTimeout(() => {
        ;(0,_appendTodo_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
        (0,_deleteTodo_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
      }, 2000);
    
    

    return todoProjectContainer
     
    }
    

/***/ }),

/***/ "./src/modules/createTodo.js":
/*!***********************************!*\
  !*** ./src/modules/createTodo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateTodo)
/* harmony export */ });
function CreateTodo(title, dueDate, j) {
    //would it be better to hold the array here?
    let todoListenerArray = document.querySelectorAll("#newTodo");
    const todoTaskContainerListener = document.querySelectorAll("#todoTaskContainer");

    this.title = title;
    this.dueDate = dueDate;

    const singleTodoTaskContainer = document.createElement("div");
    singleTodoTaskContainer.classList.add("single-todo-task-container");
    singleTodoTaskContainer.setAttribute("id", "singleTodoTaskContainer");

    const todoTask = document.createElement("div");
    todoTask.classList.add("todo-task");
    todoTask.setAttribute("id", "todoTask");
    todoTask.textContent = title;
    singleTodoTaskContainer.appendChild(todoTask);

    const editIcon = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 todo-icon" id="editTodo"> <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /> </svg>';
    singleTodoTaskContainer.innerHTML += editIcon;

    const deleteIcon = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 todo-icon" id="deleteTodo"> <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /> </svg>';
    singleTodoTaskContainer.innerHTML += deleteIcon;

    console.log(todoTaskContainerListener);
    for (let i = 0; i < todoTaskContainerListener.length; i++) {
        
        if (i === j) {
            todoTaskContainerListener[i].appendChild(singleTodoTaskContainer);
        }
        
    }

    console.log("create todo module is hooked up");

    return singleTodoTaskContainer
    }
    

/***/ }),

/***/ "./src/modules/deleteTodo.js":
/*!***********************************!*\
  !*** ./src/modules/deleteTodo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteTodo)
/* harmony export */ });
function deleteTodo() {
    let deleteTodoListenerArray = document.querySelectorAll("#deleteTodo");
    let todoTaskContainerListener = document.querySelectorAll("#todoTaskContainer");

    console.log(deleteTodoListenerArray);

    //function to append the todo to the corresponding todo task container
    const removeTodo = function(i) {
      console.log(`You created a do on the ${i}th container`);
      todoTaskContainerListener[i].remove();
      //removes the item from the array, but must remove the item from all arrays
      todoTaskContainerListener.splice(i, 1);
    }

    //runs through todo array and adds an event listener to all todo deletion elements.
      for (let i = 0; i <= deleteTodoListenerArray.length; i++) {
        //checks if an event listener has already been added
        if (deleteTodoListenerArray[i].getAttribute('data-event-clicked') !== 'true') {
          deleteTodoListenerArray[i].setAttribute('data-event-clicked', 'true');
          deleteTodoListenerArray[i].addEventListener('click', function (e) {
              console.log('event has been attached');
              removeTodo(i);
         });
        }
      }

      for (let i = 0; i < todoListenerArray.length; i++) {
        //checks if an event listener has already been added, and adds one if it does not have an event listener
        if (todoListenerArray[i].getAttribute('data-event-clicked') !== 'true') {
          todoListenerArray[i].setAttribute('data-event-clicked', 'true');
          todoListenerArray[i].addEventListener('click', function (e) {
              console.log(`event has been attached to ${i}`);
              addTodo(i);
         });
        }
      }

      console.log("delete todo Ran");

      return deleteTodoListenerArray
}

/***/ }),

/***/ "./src/modules/projectCreationPopup.js":
/*!*********************************************!*\
  !*** ./src/modules/projectCreationPopup.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectCreationPopup)
/* harmony export */ });
/* harmony import */ var _createProject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject.js */ "./src/modules/createProject.js");


function projectCreationPopup() {
    const mainContentContainerListener = document.getElementById("mainContentContainer");
    
    const mainPopupContainer = document.createElement("div");
    mainPopupContainer.classList.add("main-popup-container");
    mainPopupContainer.setAttribute("id", "mainPopupContainer");

    const popupFlexContainer = document.createElement("div");
    popupFlexContainer.classList.add("popup-flex-container");
    popupFlexContainer.setAttribute("id", "popupFlexContainer");
    mainPopupContainer.appendChild(popupFlexContainer);

    const formContainer = document.createElement("div");
    formContainer.classList.add("form-container");
    formContainer.setAttribute("id", "formContainer");
    popupFlexContainer.appendChild(formContainer);

    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "titleInput");
    titleLabel.classList.add("title-label");
    titleLabel.textContent = "Project Title:";
    formContainer.appendChild(titleLabel);

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.classList.add("popup-input");
    titleInput.setAttribute("id", "titleInput");
    formContainer.appendChild(titleInput);

    const submitBtn = document.createElement("button");
    submitBtn.classList.add("submit-btn");
    submitBtn.setAttribute("id", "submitBtn");
    submitBtn.textContent = "Submit";
    popupFlexContainer.appendChild(submitBtn);

    function getInputValue() {
        let inputValue = document.getElementById("titleInput").value;
        console.log(inputValue);

        return inputValue
    }
    

    submitBtn.addEventListener("click", function () {
        getInputValue();
        mainContentContainerListener.appendChild(new _createProject_js__WEBPACK_IMPORTED_MODULE_0__["default"](getInputValue()));
        mainPopupContainer.remove();
    });


    return mainPopupContainer
}

/***/ }),

/***/ "./src/modules/todoCreationPopup.js":
/*!******************************************!*\
  !*** ./src/modules/todoCreationPopup.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ todoCreationPopup)
/* harmony export */ });
/* harmony import */ var _createTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo.js */ "./src/modules/createTodo.js");


function todoCreationPopup(j) {
    const mainContentContainerListener = document.getElementById("mainContentContainer");
    
    const mainPopupContainer = document.createElement("div");
    mainPopupContainer.classList.add("main-popup-container");
    mainPopupContainer.setAttribute("id", "mainPopupContainer");

    const popupFlexContainer = document.createElement("div");
    popupFlexContainer.classList.add("popup-flex-container");
    popupFlexContainer.setAttribute("id", "popupFlexContainer");
    mainPopupContainer.appendChild(popupFlexContainer);

    const formContainer = document.createElement("div");
    formContainer.classList.add("form-container");
    formContainer.setAttribute("id", "formContainer");
    popupFlexContainer.appendChild(formContainer);

    const todoLabel = document.createElement("label");
    todoLabel.setAttribute("for", "todoInput");
    todoLabel.classList.add("todo-label");
    todoLabel.textContent = "Todo:";
    formContainer.appendChild(todoLabel);

    const todoInput = document.createElement("input");
    todoInput.setAttribute("type", "text");
    todoInput.classList.add("popup-input");
    todoInput.setAttribute("id", "todoInput");
    formContainer.appendChild(todoInput);

    const submitBtn = document.createElement("button");
    submitBtn.classList.add("submit-btn");
    submitBtn.setAttribute("id", "submitBtn");
    submitBtn.textContent = "Submit";
    popupFlexContainer.appendChild(submitBtn);

    function getInputValue() {
        let inputValue = document.getElementById("todoInput").value;
        console.log(inputValue);

        return inputValue
    }
    
    submitBtn.addEventListener("click", function () {
        getInputValue();
        new _createTodo_js__WEBPACK_IMPORTED_MODULE_0__["default"](getInputValue(), "The date", j)
        mainPopupContainer.remove();
    });


    return mainPopupContainer
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_createProject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/createProject.js */ "./src/modules/createProject.js");
/* harmony import */ var _modules_appendTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/appendTodo */ "./src/modules/appendTodo.js");
/* harmony import */ var _modules_projectCreationPopup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/projectCreationPopup.js */ "./src/modules/projectCreationPopup.js");




  
const contentCreation = (() => {
  const newProjectListener = document.getElementById("newProject"); 
  const todoListenerArray = document.querySelectorAll("#newTodo");

  newProjectListener.addEventListener("click", function() {
    const mainContentContainerListener = document.getElementById("mainContentContainer");
    const headerContainerListener = document.getElementById("mainGridContainer")
    // mainContentContainerListener.appendChild(new CreateProject("99 woodcutting"));
    headerContainerListener.appendChild((0,_modules_projectCreationPopup_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
    
  });

  //test container
  //runs appendTodo to add eventlistener to create todo icons on load
  const mainContentContainerListener = document.getElementById("mainContentContainer");
  
  mainContentContainerListener.appendChild(new _modules_createProject_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Test Project'));

})();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyx1RkFBdUYsYUFBYSxjQUFjLE1BQU0sVUFBVSxVQUFVLE1BQU0sWUFBWSxhQUFhLGNBQWMsTUFBTSxVQUFVLFlBQVksY0FBYyxhQUFhLGFBQWEsV0FBVyxPQUFPLFVBQVUsVUFBVSxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsU0FBUyxZQUFZLGFBQWEsY0FBYyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLGFBQWEsY0FBYyxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sWUFBWSxhQUFhLGNBQWMsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEs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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNrQztBQUNUO0FBQ3VCO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDRFQUFvQjtBQUM1RDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaUVBQWE7O0FBRTVELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL21vZHVsZXMvYXBwZW5kVG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvbW9kdWxlcy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2R1bGVzL2NyZWF0ZVRvZG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL21vZHVsZXMvZGVsZXRlVG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvbW9kdWxlcy9wcm9qZWN0Q3JlYXRpb25Qb3B1cC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvbW9kdWxlcy90b2RvQ3JlYXRpb25Qb3B1cC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qID09PT09PT09PT09ICovXG4vKiBHZW5lcmFsIENTUyAqL1xuLyogPT09PT09PT09PT0gKi9cblxuKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi8qID09PT09PT09PT09PT0gKi9cbi8qIE1haW4gR3JpZCBDU1MgKi9cbi8qID09PT09PT09PT09PT0gKi9cblxuLm1haW4tZ3JpZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAuNWZyIDFmciAgMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IC41ZnIgMWZyICAxZnIgMWZyO1xuXG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgbWF4LWhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xufVxuXG4vKiA9PT09PT09PT09ICovXG4vKiBIZWFkZXIgQ1NTICovXG4vKiA9PT09PT09PT09ICovXG5cbi5oZWFkZXItY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzYsIDM0LCA4MCk7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyA1O1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4IHJnYigwIDAgMCk7XG4gICAgei1pbmRleDogMjtcbiAgICBtYXgtaGVpZ2h0OiA3cmVtO1xufVxuXG4udGl0bGUtbG9nby1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAzcmVtO1xufVxuXG4udG9kby1sb2dvIHtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgd2lkdGg6IDJyZW07XG4gICAgY29sb3I6IGdvbGRlbnJvZDtcbn1cblxuLnRpdGxlLWxvZ28tY29udGFpbmVyIGgxIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cblxuXG4vKiA9PT09PT09PT09PT09PT09ICovXG4vKiBNYWluIENvbnRlbnQgQ1NTICovXG4vKiA9PT09PT09PT09PT09PT09ICovXG5cbi5tYWluLWNvbnRlbnQtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzAsIDI5LCA0OSk7XG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDUgLyA1O1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi50b2RvLXByb2plY3QtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleDogMTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM2LCAzNCwgODApO1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxNXB4IDFweCByZ2IoMCAwIDAgLyAzNCUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbn1cblxuLm1haW4tcHJvamVjdC10aXRsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAuMjVyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogMXMgYWxsO1xufVxuXG4uYWRkLXRvZG8taWNvbiB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIHdpZHRoOiAycmVtO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLmFkZC10b2RvLWljb246aG92ZXIge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICB0cmFuc2l0aW9uOiAxcyBhbGw7XG59XG5cbi5tYWluLXByb2plY3QtdGl0bGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogI2ZmZjsgXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4udG9kby10YXNrLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IC43NXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLnNpbmdsZS10b2RvLXRhc2stY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTAsIDE1MCwgMjI4KTtcbiAgICBwYWRkaW5nOiAuNzVyZW07XG4gICAgbWFyZ2luLXRvcDogLjc1cmVtO1xuICAgIGZsZXg6IDE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCAxcHggcmdiKDAgMCAwIC8gMzQlKTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIHRyYW5zaXRpb246IC41cyBhbGw7XG4gICAgXG59XG5cbi5zaW5nbGUtdG9kby10YXNrLWNvbnRhaW5lcjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgNXB4IDVweCAxNXB4IDFweCByZ2IoMCAwIDAgLyAzNCUpO1xufVxuXG4udG9kby10YXNrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi50b2RvLWljb24ge1xuICAgIGhlaWdodDogMS41cmVtO1xuICAgIHdpZHRoOiAxLjVyZW07XG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cbi8qID09PT09PT09PT09PSAqL1xuLyogU2lkZWJhciBDU1MgKi9cbi8qID09PT09PT09PT09PSAqL1xuXG4uc2lkZWJhci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMCwgMjgsIDY2KTtcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gNSAvIDI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoMTUwLCAxNTAsIDIyOCk7XG4gICAgei1pbmRleDogMTtcbn1cblxuLmFkZC1uZXctcHJvamVjdHMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWluLXdpZHRoOiA2MCU7XG4gICAgdHJhbnNpdGlvbjogMXMgYWxsO1xufVxuXG4uYWRkLW5ldy1wcm9qZWN0cy1jb250YWluZXIgaDEge1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmFkZC1uZXctcHJvamVjdHMtY29udGFpbmVyIC5zaWRlLWJhci1pY29uOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgdHJhbnNpdGlvbjogLjc1cyBhbGw7XG59XG5cbi5zb3J0LWJ5LXRpbWUtY29udGFpbmVyLCAucHJvamVjdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBmbGV4OiAxIDEgMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiA1cmVtO1xuICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAxcmVtIDNyZW07XG59XG5cblxuLnNlbGVjdGFibGUtdGltZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgIGdhcDogLjJyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogLjJyZW0gMCAuMnJlbSAxcmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XG59XG5cbi5zZWxlY3RhYmxlLXRpbWUtY29udGFpbmVyIHAsIC5wcm9qZWN0LWNvbnRhaW5lciBoMiwgLnByb2plY3QtdGl0bGUge1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uc2VsZWN0YWJsZS10aW1lLWNvbnRhaW5lcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNCwgMTI0LCAyMDEpO1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCAxcHggcmdiKDAgMCAwIC8gMzQlKTtcbn1cblxuLnNpZGUtYmFyLWljb24ge1xuICAgIHdpZHRoOiAxLjJyZW07XG4gICAgaGVpZ2h0OiAxLjJyZW07XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi8qID09PT09PT09PT09PSAqL1xuLyogUG9wdXAgTW9kdWxlICovXG4vKiA9PT09PT09PT09PT0gKi9cblxuLm1haW4tcG9wdXAtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY4NSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDEwMDtcbn1cblxuLnBvcHVwLWZsZXgtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNiwgMzQsIDgwKTtcbiAgICB3aWR0aDogMzAlO1xuICAgIGhlaWdodDogMzAlO1xuICAgIG1heC13aWR0aDogMzAlO1xuICAgIGhlaWdodDogMzAlO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG59XG5cbi5mb3JtLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IC41cmVtO1xufVxuXG4udGl0bGUtbGFiZWwsIC50b2RvLWxhYmVsIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogLjAzcmVtO1xufVxuXG4uc3VibWl0LWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM2LCAzNCwgODApO1xuICAgIHdpZHRoOiA1cmVtO1xuICAgIGhlaWdodDogMnJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAuMnJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogLjAzcmVtO1xuICAgIGJvcmRlcjogc29saWQgcmdiKDEyNCwgMTI0LCAyMDEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDklO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG59XG5cbi5zdWJtaXQtYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI0LCAxMjQsIDIwMSk7XG4gICAgYm9yZGVyOiBzb2xpZCByZ2IoMzYsIDM0LCA4MCk7XG59XG5cbi5zdWJtaXQtYnRuOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixnQkFBZ0I7O0FBRWhCO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQSxrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLGtCQUFrQjs7QUFFbEI7SUFDSSxhQUFhO0lBQ2Isd0NBQXdDO0lBQ3hDLHFDQUFxQzs7SUFFckMsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBLGVBQWU7QUFDZixlQUFlO0FBQ2YsZUFBZTs7QUFFZjtJQUNJLGlDQUFpQztJQUNqQyx3QkFBd0I7SUFDeEIscUNBQXFDO0lBQ3JDLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7OztBQUlBLHFCQUFxQjtBQUNyQixxQkFBcUI7QUFDckIscUJBQXFCOztBQUVyQjtJQUNJLGlDQUFpQztJQUNqQyx3QkFBd0I7SUFDeEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixPQUFPO0lBQ1AsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsY0FBYztJQUNkLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsNkNBQTZDO0lBQzdDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsV0FBVztJQUNYLGtCQUFrQjtJQUNsQiw2Q0FBNkM7SUFDN0MsbUJBQW1CO0lBQ25CLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxtREFBbUQ7QUFDdkQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUEsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQixpQkFBaUI7O0FBRWpCO0lBQ0ksaUNBQWlDO0lBQ2pDLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCwwQ0FBMEM7SUFDMUMsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsNEJBQTRCO0FBQ2hDOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGVBQWU7SUFDZixVQUFVO0lBQ1YsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakIsaUJBQWlCOztBQUVqQjtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsNENBQTRDO0lBQzVDLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyxVQUFVO0lBQ1YsV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qID09PT09PT09PT09ICovXFxuLyogR2VuZXJhbCBDU1MgKi9cXG4vKiA9PT09PT09PT09PSAqL1xcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qID09PT09PT09PT09PT0gKi9cXG4vKiBNYWluIEdyaWQgQ1NTICovXFxuLyogPT09PT09PT09PT09PSAqL1xcblxcbi5tYWluLWdyaWQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAuNWZyIDFmciAgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAuNWZyIDFmciAgMWZyIDFmcjtcXG5cXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi8qID09PT09PT09PT0gKi9cXG4vKiBIZWFkZXIgQ1NTICovXFxuLyogPT09PT09PT09PSAqL1xcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM2LCAzNCwgODApO1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDU7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4IHJnYigwIDAgMCk7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIG1heC1oZWlnaHQ6IDdyZW07XFxufVxcblxcbi50aXRsZS1sb2dvLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcXG59XFxuXFxuLnRvZG8tbG9nbyB7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGNvbG9yOiBnb2xkZW5yb2Q7XFxufVxcblxcbi50aXRsZS1sb2dvLWNvbnRhaW5lciBoMSB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcblxcblxcbi8qID09PT09PT09PT09PT09PT0gKi9cXG4vKiBNYWluIENvbnRlbnQgQ1NTICovXFxuLyogPT09PT09PT09PT09PT09PSAqL1xcblxcbi5tYWluLWNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLCAyOSwgNDkpO1xcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gNSAvIDU7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbi50b2RvLXByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzYsIDM0LCA4MCk7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCAxcHggcmdiKDAgMCAwIC8gMzQlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xcbn1cXG5cXG4ubWFpbi1wcm9qZWN0LXRpdGxlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAuMjVyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0cmFuc2l0aW9uOiAxcyBhbGw7XFxufVxcblxcbi5hZGQtdG9kby1pY29uIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLmFkZC10b2RvLWljb246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAgIHRyYW5zaXRpb246IDFzIGFsbDtcXG59XFxuXFxuLm1haW4tcHJvamVjdC10aXRsZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6ICNmZmY7IFxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi50b2RvLXRhc2stY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IC43NXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uc2luZ2xlLXRvZG8tdGFzay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTAsIDE1MCwgMjI4KTtcXG4gICAgcGFkZGluZzogLjc1cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAuNzVyZW07XFxuICAgIGZsZXg6IDE7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCAxcHggcmdiKDAgMCAwIC8gMzQlKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgdHJhbnNpdGlvbjogLjVzIGFsbDtcXG4gICAgXFxufVxcblxcbi5zaW5nbGUtdG9kby10YXNrLWNvbnRhaW5lcjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDVweCA1cHggMTVweCAxcHggcmdiKDAgMCAwIC8gMzQlKTtcXG59XFxuXFxuLnRvZG8tdGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4udG9kby1pY29uIHtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGZsZXgtZW5kO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi8qID09PT09PT09PT09PSAqL1xcbi8qIFNpZGViYXIgQ1NTICovXFxuLyogPT09PT09PT09PT09ICovXFxuXFxuLnNpZGViYXItY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLCAyOCwgNjYpO1xcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gNSAvIDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiKDE1MCwgMTUwLCAyMjgpO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uYWRkLW5ldy1wcm9qZWN0cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1pbi13aWR0aDogNjAlO1xcbiAgICB0cmFuc2l0aW9uOiAxcyBhbGw7XFxufVxcblxcbi5hZGQtbmV3LXByb2plY3RzLWNvbnRhaW5lciBoMSB7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLmFkZC1uZXctcHJvamVjdHMtY29udGFpbmVyIC5zaWRlLWJhci1pY29uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgICB0cmFuc2l0aW9uOiAuNzVzIGFsbDtcXG59XFxuXFxuLnNvcnQtYnktdGltZS1jb250YWluZXIsIC5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBmbGV4OiAxIDEgMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDVyZW07XFxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAxcmVtIDNyZW07XFxufVxcblxcblxcbi5zZWxlY3RhYmxlLXRpbWUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IC41cmVtO1xcbiAgICBnYXA6IC4ycmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogLjJyZW0gMCAuMnJlbSAxcmVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xcbn1cXG5cXG4uc2VsZWN0YWJsZS10aW1lLWNvbnRhaW5lciBwLCAucHJvamVjdC1jb250YWluZXIgaDIsIC5wcm9qZWN0LXRpdGxlIHtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5zZWxlY3RhYmxlLXRpbWUtY29udGFpbmVyOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNCwgMTI0LCAyMDEpO1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggMXB4IHJnYigwIDAgMCAvIDM0JSk7XFxufVxcblxcbi5zaWRlLWJhci1pY29uIHtcXG4gICAgd2lkdGg6IDEuMnJlbTtcXG4gICAgaGVpZ2h0OiAxLjJyZW07XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT0gKi9cXG4vKiBQb3B1cCBNb2R1bGUgKi9cXG4vKiA9PT09PT09PT09PT0gKi9cXG5cXG4ubWFpbi1wb3B1cC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjg1KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5wb3B1cC1mbGV4LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNiwgMzQsIDgwKTtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgaGVpZ2h0OiAzMCU7XFxuICAgIG1heC13aWR0aDogMzAlO1xcbiAgICBoZWlnaHQ6IDMwJTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG4udGl0bGUtbGFiZWwsIC50b2RvLWxhYmVsIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLjAzcmVtO1xcbn1cXG5cXG4uc3VibWl0LWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNiwgMzQsIDgwKTtcXG4gICAgd2lkdGg6IDVyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAuMnJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wM3JlbTtcXG4gICAgYm9yZGVyOiBzb2xpZCByZ2IoMTI0LCAxMjQsIDIwMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDklO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xcbn1cXG5cXG4uc3VibWl0LWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjQsIDEyNCwgMjAxKTtcXG4gICAgYm9yZGVyOiBzb2xpZCByZ2IoMzYsIDM0LCA4MCk7XFxufVxcblxcbi5zdWJtaXQtYnRuOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgQ3JlYXRlVG9kbyBmcm9tICcuL2NyZWF0ZVRvZG8uanMnO1xuaW1wb3J0IHRvZG9DcmVhdGlvblBvcHVwIGZyb20gJy4vdG9kb0NyZWF0aW9uUG9wdXAuanMnO1xuXG4vL2Z1bmN0aW9uIHRvIGNyZWF0ZSBldmVudCBsaXN0ZW5lcnMgYW5kIGFwcGVuZCB0b2RvcyB0byBjb3JyZWN0IHByb2plY3QgY29udGFpbmVyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBlbmRUb2RvICgpIHtcbiAgICBsZXQgdG9kb0xpc3RlbmVyQXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI25ld1RvZG9cIik7XG4gICAgbGV0IHRvZG9UYXNrQ29udGFpbmVyTGlzdGVuZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3RvZG9UYXNrQ29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGhlYWRlckNvbnRhaW5lckxpc3RlbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluR3JpZENvbnRhaW5lclwiKTtcblxuICAgIC8vIC8vZnVuY3Rpb24gdG8gYXBwZW5kIHRoZSB0b2RvIHRvIHRoZSBjb3JyZXNwb25kaW5nIHRvZG8gdGFzayBjb250YWluZXJcbiAgICAvLyBjb25zdCBhZGRUb2RvID0gZnVuY3Rpb24oaSkge1xuICAgIC8vICAgY29uc29sZS5sb2coYFlvdSBjcmVhdGVkIGEgZG8gb24gdGhlICR7aX10aCBjb250YWluZXJgKTtcbiAgICAvLyAgIHRvZG9UYXNrQ29udGFpbmVyTGlzdGVuZXJbaV0uYXBwZW5kQ2hpbGQobmV3IENyZWF0ZVRvZG8odG9kb0NyZWF0aW9uUG9wdXAoKSwgXCJUQkRcIikpO1xuICAgIC8vIH1cblxuICAgIC8vcnVucyB0aHJvdWdoIHRvZG8gYXJyYXkgYW5kIGFkZHMgYW4gZXZlbnQgbGlzdGVuZXIgdG8gYWxsIHRvZG8gY3JlYXRpb24gZWxlbWVudHMuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9MaXN0ZW5lckFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vY2hlY2tzIGlmIGFuIGV2ZW50IGxpc3RlbmVyIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQsIGFuZCBhZGRzIG9uZSBpZiBpdCBkb2VzIG5vdCBoYXZlIGFuIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgIGlmICh0b2RvTGlzdGVuZXJBcnJheVtpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZXZlbnQtY2xpY2tlZCcpICE9PSAndHJ1ZScpIHtcbiAgICAgICAgICB0b2RvTGlzdGVuZXJBcnJheVtpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZXZlbnQtY2xpY2tlZCcsICd0cnVlJyk7XG4gICAgICAgICAgdG9kb0xpc3RlbmVyQXJyYXlbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZXZlbnQgaGFzIGJlZW4gYXR0YWNoZWQgdG8gJHtpfWApO1xuICAgICAgICAgICAgICBoZWFkZXJDb250YWluZXJMaXN0ZW5lci5hcHBlbmRDaGlsZCh0b2RvQ3JlYXRpb25Qb3B1cChpKSk7XG4gICAgICAgICAgICAgIC8vIGFkZFRvZG8oaSk7XG4gICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRvZG9MaXN0ZW5lckFycmF5XG59IiwiaW1wb3J0IENyZWF0ZVRvZG8gZnJvbSAnLi9jcmVhdGVUb2RvLmpzJ1xuaW1wb3J0IGFwcGVuZFRvZG8gZnJvbSAnLi9hcHBlbmRUb2RvLmpzJ1xuaW1wb3J0IGRlbGV0ZVRvZG8gZnJvbSAnLi9kZWxldGVUb2RvLmpzJ1xuLy9zaG91bGQgY3JlYXRlIGEgbW9kYWwgcG9wdXAgZm9yIGEgcHJvamVjdCBjcmVhdGlvbiBjYXJkXG4vL2JhY2tncm91bmQgc2hvdWxkIGJlIGNvdmVyZWQgYnkgbW9kYWwgY2FyZCB3aXRoIGEgc2VtaS10cmFuc3BhcmVudCBjb2xvci4gXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZVByb2plY3QodGl0bGUpIHtcblxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICBcbiAgICBjb25zdCB0b2RvUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb1Byb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8tcHJvamVjdC1jb250YWluZXJcIik7XG4gICAgdG9kb1Byb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvUHJvamVjdENvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IG1haW5Qcm9qZWN0VGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5Qcm9qZWN0VGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW4tcHJvamVjdC10aXRsZS1jb250YWluZXJcIik7XG4gICAgbWFpblByb2plY3RUaXRsZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5Qcm9qZWN0VGl0bGVDb250YWluZXJcIik7XG4gICAgdG9kb1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpblByb2plY3RUaXRsZUNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBtYWluUHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluUHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJtYWluLXByb2plY3QtdGl0bGVcIik7XG4gICAgbWFpblByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW4tcHJvamVjdC10aXRsZVwiKTtcbiAgICBtYWluUHJvamVjdFRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5Qcm9qZWN0VGl0bGUpO1xuICAgIG1haW5Qcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAgIGNvbnN0IHRvZG9UYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvVGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby10YXNrLWNvbnRhaW5lclwiKTtcbiAgICB0b2RvVGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG9UYXNrQ29udGFpbmVyXCIpO1xuICAgIHRvZG9Qcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9UYXNrQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHRvZG9DcmVhdGlvbkljb24gPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJ3LTYgaC02IGFkZC10b2RvLWljb25cIiBpZD1cIm5ld1RvZG9cIj4gPHBhdGggc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgZD1cIk0xMiA0LjV2MTVtNy41LTcuNWgtMTVcIi8+IDwvc3ZnPic7XG4gICAgbWFpblByb2plY3RUaXRsZUNvbnRhaW5lci5pbm5lckhUTUwgKz0gdG9kb0NyZWF0aW9uSWNvbjtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcImNyZWF0ZSBwcm9qZWN0IG1vZHVsZSBpcyBob29rZWQgdXBcIilcbiAgICBcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBhcHBlbmRUb2RvKCk7XG4gICAgICAgIGRlbGV0ZVRvZG8oKTtcbiAgICAgIH0sIDIwMDApO1xuICAgIFxuICAgIFxuXG4gICAgcmV0dXJuIHRvZG9Qcm9qZWN0Q29udGFpbmVyXG4gICAgIFxuICAgIH1cbiAgICAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVUb2RvKHRpdGxlLCBkdWVEYXRlLCBqKSB7XG4gICAgLy93b3VsZCBpdCBiZSBiZXR0ZXIgdG8gaG9sZCB0aGUgYXJyYXkgaGVyZT9cbiAgICBsZXQgdG9kb0xpc3RlbmVyQXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI25ld1RvZG9cIik7XG4gICAgY29uc3QgdG9kb1Rhc2tDb250YWluZXJMaXN0ZW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjdG9kb1Rhc2tDb250YWluZXJcIik7XG5cbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcblxuICAgIGNvbnN0IHNpbmdsZVRvZG9UYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaW5nbGVUb2RvVGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2luZ2xlLXRvZG8tdGFzay1jb250YWluZXJcIik7XG4gICAgc2luZ2xlVG9kb1Rhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzaW5nbGVUb2RvVGFza0NvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IHRvZG9UYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvVGFzay5jbGFzc0xpc3QuYWRkKFwidG9kby10YXNrXCIpO1xuICAgIHRvZG9UYXNrLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kb1Rhc2tcIik7XG4gICAgdG9kb1Rhc2sudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICBzaW5nbGVUb2RvVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvVGFzayk7XG5cbiAgICBjb25zdCBlZGl0SWNvbiA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cInctNiBoLTYgdG9kby1pY29uXCIgaWQ9XCJlZGl0VG9kb1wiPiA8cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBkPVwiTTE2Ljg2MiA0LjQ4N2wxLjY4Ny0xLjY4OGExLjg3NSAxLjg3NSAwIDExMi42NTIgMi42NTJMMTAuNTgyIDE2LjA3YTQuNSA0LjUgMCAwMS0xLjg5NyAxLjEzTDYgMThsLjgtMi42ODVhNC41IDQuNSAwIDAxMS4xMy0xLjg5N2w4LjkzMi04LjkzMXptMCAwTDE5LjUgNy4xMjVNMTggMTR2NC43NUEyLjI1IDIuMjUgMCAwMTE1Ljc1IDIxSDUuMjVBMi4yNSAyLjI1IDAgMDEzIDE4Ljc1VjguMjVBMi4yNSAyLjI1IDAgMDE1LjI1IDZIMTBcIiAvPiA8L3N2Zz4nO1xuICAgIHNpbmdsZVRvZG9UYXNrQ29udGFpbmVyLmlubmVySFRNTCArPSBlZGl0SWNvbjtcblxuICAgIGNvbnN0IGRlbGV0ZUljb24gPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJ3LTYgaC02IHRvZG8taWNvblwiIGlkPVwiZGVsZXRlVG9kb1wiPiA8cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBkPVwiTTE0Ljc0IDlsLS4zNDYgOW0tNC43ODggMEw5LjI2IDltOS45NjgtMy4yMWMuMzQyLjA1Mi42ODIuMTA3IDEuMDIyLjE2Nm0tMS4wMjItLjE2NUwxOC4xNiAxOS42NzNhMi4yNSAyLjI1IDAgMDEtMi4yNDQgMi4wNzdIOC4wODRhMi4yNSAyLjI1IDAgMDEtMi4yNDQtMi4wNzdMNC43NzIgNS43OW0xNC40NTYgMGE0OC4xMDggNDguMTA4IDAgMDAtMy40NzgtLjM5N20tMTIgLjU2MmMuMzQtLjA1OS42OC0uMTE0IDEuMDIyLS4xNjVtMCAwYTQ4LjExIDQ4LjExIDAgMDEzLjQ3OC0uMzk3bTcuNSAwdi0uOTE2YzAtMS4xOC0uOTEtMi4xNjQtMi4wOS0yLjIwMWE1MS45NjQgNTEuOTY0IDAgMDAtMy4zMiAwYy0xLjE4LjAzNy0yLjA5IDEuMDIyLTIuMDkgMi4yMDF2LjkxNm03LjUgMGE0OC42NjcgNDguNjY3IDAgMDAtNy41IDBcIiAvPiA8L3N2Zz4nO1xuICAgIHNpbmdsZVRvZG9UYXNrQ29udGFpbmVyLmlubmVySFRNTCArPSBkZWxldGVJY29uO1xuXG4gICAgY29uc29sZS5sb2codG9kb1Rhc2tDb250YWluZXJMaXN0ZW5lcik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvVGFza0NvbnRhaW5lckxpc3RlbmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAoaSA9PT0gaikge1xuICAgICAgICAgICAgdG9kb1Rhc2tDb250YWluZXJMaXN0ZW5lcltpXS5hcHBlbmRDaGlsZChzaW5nbGVUb2RvVGFza0NvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJjcmVhdGUgdG9kbyBtb2R1bGUgaXMgaG9va2VkIHVwXCIpO1xuXG4gICAgcmV0dXJuIHNpbmdsZVRvZG9UYXNrQ29udGFpbmVyXG4gICAgfVxuICAgICIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlbGV0ZVRvZG8oKSB7XG4gICAgbGV0IGRlbGV0ZVRvZG9MaXN0ZW5lckFycmF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNkZWxldGVUb2RvXCIpO1xuICAgIGxldCB0b2RvVGFza0NvbnRhaW5lckxpc3RlbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiN0b2RvVGFza0NvbnRhaW5lclwiKTtcblxuICAgIGNvbnNvbGUubG9nKGRlbGV0ZVRvZG9MaXN0ZW5lckFycmF5KTtcblxuICAgIC8vZnVuY3Rpb24gdG8gYXBwZW5kIHRoZSB0b2RvIHRvIHRoZSBjb3JyZXNwb25kaW5nIHRvZG8gdGFzayBjb250YWluZXJcbiAgICBjb25zdCByZW1vdmVUb2RvID0gZnVuY3Rpb24oaSkge1xuICAgICAgY29uc29sZS5sb2coYFlvdSBjcmVhdGVkIGEgZG8gb24gdGhlICR7aX10aCBjb250YWluZXJgKTtcbiAgICAgIHRvZG9UYXNrQ29udGFpbmVyTGlzdGVuZXJbaV0ucmVtb3ZlKCk7XG4gICAgICAvL3JlbW92ZXMgdGhlIGl0ZW0gZnJvbSB0aGUgYXJyYXksIGJ1dCBtdXN0IHJlbW92ZSB0aGUgaXRlbSBmcm9tIGFsbCBhcnJheXNcbiAgICAgIHRvZG9UYXNrQ29udGFpbmVyTGlzdGVuZXIuc3BsaWNlKGksIDEpO1xuICAgIH1cblxuICAgIC8vcnVucyB0aHJvdWdoIHRvZG8gYXJyYXkgYW5kIGFkZHMgYW4gZXZlbnQgbGlzdGVuZXIgdG8gYWxsIHRvZG8gZGVsZXRpb24gZWxlbWVudHMuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBkZWxldGVUb2RvTGlzdGVuZXJBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAvL2NoZWNrcyBpZiBhbiBldmVudCBsaXN0ZW5lciBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkXG4gICAgICAgIGlmIChkZWxldGVUb2RvTGlzdGVuZXJBcnJheVtpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZXZlbnQtY2xpY2tlZCcpICE9PSAndHJ1ZScpIHtcbiAgICAgICAgICBkZWxldGVUb2RvTGlzdGVuZXJBcnJheVtpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZXZlbnQtY2xpY2tlZCcsICd0cnVlJyk7XG4gICAgICAgICAgZGVsZXRlVG9kb0xpc3RlbmVyQXJyYXlbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXZlbnQgaGFzIGJlZW4gYXR0YWNoZWQnKTtcbiAgICAgICAgICAgICAgcmVtb3ZlVG9kbyhpKTtcbiAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0xpc3RlbmVyQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy9jaGVja3MgaWYgYW4gZXZlbnQgbGlzdGVuZXIgaGFzIGFscmVhZHkgYmVlbiBhZGRlZCwgYW5kIGFkZHMgb25lIGlmIGl0IGRvZXMgbm90IGhhdmUgYW4gZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgaWYgKHRvZG9MaXN0ZW5lckFycmF5W2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1ldmVudC1jbGlja2VkJykgIT09ICd0cnVlJykge1xuICAgICAgICAgIHRvZG9MaXN0ZW5lckFycmF5W2ldLnNldEF0dHJpYnV0ZSgnZGF0YS1ldmVudC1jbGlja2VkJywgJ3RydWUnKTtcbiAgICAgICAgICB0b2RvTGlzdGVuZXJBcnJheVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBldmVudCBoYXMgYmVlbiBhdHRhY2hlZCB0byAke2l9YCk7XG4gICAgICAgICAgICAgIGFkZFRvZG8oaSk7XG4gICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZyhcImRlbGV0ZSB0b2RvIFJhblwiKTtcblxuICAgICAgcmV0dXJuIGRlbGV0ZVRvZG9MaXN0ZW5lckFycmF5XG59IiwiaW1wb3J0IENyZWF0ZVByb2plY3QgZnJvbSAnLi9jcmVhdGVQcm9qZWN0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdENyZWF0aW9uUG9wdXAoKSB7XG4gICAgY29uc3QgbWFpbkNvbnRlbnRDb250YWluZXJMaXN0ZW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkNvbnRlbnRDb250YWluZXJcIik7XG4gICAgXG4gICAgY29uc3QgbWFpblBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluUG9wdXBDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW4tcG9wdXAtY29udGFpbmVyXCIpO1xuICAgIG1haW5Qb3B1cENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5Qb3B1cENvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IHBvcHVwRmxleENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcG9wdXBGbGV4Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwb3B1cC1mbGV4LWNvbnRhaW5lclwiKTtcbiAgICBwb3B1cEZsZXhDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwb3B1cEZsZXhDb250YWluZXJcIik7XG4gICAgbWFpblBvcHVwQ29udGFpbmVyLmFwcGVuZENoaWxkKHBvcHVwRmxleENvbnRhaW5lcik7XG5cbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lclwiKTtcbiAgICBmb3JtQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9ybUNvbnRhaW5lclwiKTtcbiAgICBwb3B1cEZsZXhDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG5cbiAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGl0bGVJbnB1dFwiKTtcbiAgICB0aXRsZUxhYmVsLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1sYWJlbFwiKTtcbiAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0IFRpdGxlOlwiO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG5cbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwicG9wdXAtaW5wdXRcIik7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRpdGxlSW5wdXRcIik7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXQtYnRuXCIpO1xuICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Ym1pdEJ0blwiKTtcbiAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgIHBvcHVwRmxleENvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG4gICAgZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZSgpIHtcbiAgICAgICAgbGV0IGlucHV0VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlSW5wdXRcIikudmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKGlucHV0VmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBpbnB1dFZhbHVlXG4gICAgfVxuICAgIFxuXG4gICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGdldElucHV0VmFsdWUoKTtcbiAgICAgICAgbWFpbkNvbnRlbnRDb250YWluZXJMaXN0ZW5lci5hcHBlbmRDaGlsZChuZXcgQ3JlYXRlUHJvamVjdChnZXRJbnB1dFZhbHVlKCkpKTtcbiAgICAgICAgbWFpblBvcHVwQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgIH0pO1xuXG5cbiAgICByZXR1cm4gbWFpblBvcHVwQ29udGFpbmVyXG59IiwiaW1wb3J0IENyZWF0ZVRvZG8gZnJvbSAnLi9jcmVhdGVUb2RvLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2RvQ3JlYXRpb25Qb3B1cChqKSB7XG4gICAgY29uc3QgbWFpbkNvbnRlbnRDb250YWluZXJMaXN0ZW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkNvbnRlbnRDb250YWluZXJcIik7XG4gICAgXG4gICAgY29uc3QgbWFpblBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluUG9wdXBDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW4tcG9wdXAtY29udGFpbmVyXCIpO1xuICAgIG1haW5Qb3B1cENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5Qb3B1cENvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IHBvcHVwRmxleENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcG9wdXBGbGV4Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwb3B1cC1mbGV4LWNvbnRhaW5lclwiKTtcbiAgICBwb3B1cEZsZXhDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwb3B1cEZsZXhDb250YWluZXJcIik7XG4gICAgbWFpblBvcHVwQ29udGFpbmVyLmFwcGVuZENoaWxkKHBvcHVwRmxleENvbnRhaW5lcik7XG5cbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lclwiKTtcbiAgICBmb3JtQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9ybUNvbnRhaW5lclwiKTtcbiAgICBwb3B1cEZsZXhDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG5cbiAgICBjb25zdCB0b2RvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdG9kb0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG9JbnB1dFwiKTtcbiAgICB0b2RvTGFiZWwuY2xhc3NMaXN0LmFkZChcInRvZG8tbGFiZWxcIik7XG4gICAgdG9kb0xhYmVsLnRleHRDb250ZW50ID0gXCJUb2RvOlwiO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0xhYmVsKTtcblxuICAgIGNvbnN0IHRvZG9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0b2RvSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgdG9kb0lucHV0LmNsYXNzTGlzdC5hZGQoXCJwb3B1cC1pbnB1dFwiKTtcbiAgICB0b2RvSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvSW5wdXRcIik7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvSW5wdXQpO1xuXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZChcInN1Ym1pdC1idG5cIik7XG4gICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3VibWl0QnRuXCIpO1xuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgcG9wdXBGbGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgICBmdW5jdGlvbiBnZXRJbnB1dFZhbHVlKCkge1xuICAgICAgICBsZXQgaW5wdXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb0lucHV0XCIpLnZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gaW5wdXRWYWx1ZVxuICAgIH1cbiAgICBcbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZ2V0SW5wdXRWYWx1ZSgpO1xuICAgICAgICBuZXcgQ3JlYXRlVG9kbyhnZXRJbnB1dFZhbHVlKCksIFwiVGhlIGRhdGVcIiwgailcbiAgICAgICAgbWFpblBvcHVwQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgIH0pO1xuXG5cbiAgICByZXR1cm4gbWFpblBvcHVwQ29udGFpbmVyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgQ3JlYXRlUHJvamVjdCBmcm9tICcuL21vZHVsZXMvY3JlYXRlUHJvamVjdC5qcyc7XG5pbXBvcnQgYXBwZW5kVG9kbyBmcm9tICcuL21vZHVsZXMvYXBwZW5kVG9kbyc7XG5pbXBvcnQgcHJvamVjdENyZWF0aW9uUG9wdXAgZnJvbSAnLi9tb2R1bGVzL3Byb2plY3RDcmVhdGlvblBvcHVwLmpzJztcbiAgXG5jb25zdCBjb250ZW50Q3JlYXRpb24gPSAoKCkgPT4ge1xuICBjb25zdCBuZXdQcm9qZWN0TGlzdGVuZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RcIik7IFxuICBjb25zdCB0b2RvTGlzdGVuZXJBcnJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbmV3VG9kb1wiKTtcblxuICBuZXdQcm9qZWN0TGlzdGVuZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1haW5Db250ZW50Q29udGFpbmVyTGlzdGVuZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5Db250ZW50Q29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGhlYWRlckNvbnRhaW5lckxpc3RlbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluR3JpZENvbnRhaW5lclwiKVxuICAgIC8vIG1haW5Db250ZW50Q29udGFpbmVyTGlzdGVuZXIuYXBwZW5kQ2hpbGQobmV3IENyZWF0ZVByb2plY3QoXCI5OSB3b29kY3V0dGluZ1wiKSk7XG4gICAgaGVhZGVyQ29udGFpbmVyTGlzdGVuZXIuYXBwZW5kQ2hpbGQocHJvamVjdENyZWF0aW9uUG9wdXAoKSk7XG4gICAgXG4gIH0pO1xuXG4gIC8vdGVzdCBjb250YWluZXJcbiAgLy9ydW5zIGFwcGVuZFRvZG8gdG8gYWRkIGV2ZW50bGlzdGVuZXIgdG8gY3JlYXRlIHRvZG8gaWNvbnMgb24gbG9hZFxuICBjb25zdCBtYWluQ29udGVudENvbnRhaW5lckxpc3RlbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQ29udGVudENvbnRhaW5lclwiKTtcbiAgXG4gIG1haW5Db250ZW50Q29udGFpbmVyTGlzdGVuZXIuYXBwZW5kQ2hpbGQobmV3IENyZWF0ZVByb2plY3QoJ1Rlc3QgUHJvamVjdCcpKTtcblxufSkoKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9