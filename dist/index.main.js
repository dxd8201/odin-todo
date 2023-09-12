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
/* harmony import */ var _deleteTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteTodo.js */ "./src/modules/deleteTodo.js");
/* harmony import */ var _todoCreationPopup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoCreationPopup.js */ "./src/modules/todoCreationPopup.js");



//function to create event listeners and append todos to correct project container
function appendTodo () {
    let todoListenerArray = document.querySelectorAll("#newTodo");
    const mainGridContainerListener = document.getElementById("mainGridContainer");
    const deleteIconListener = document.querySelectorAll("#deleteTodo");

      //runs through todo array and adds an event listener to all todo creation elements.
      for (let i = 0; i < todoListenerArray.length; i++) {
        //checks if an event listener has already been added, and adds one if it does not have an event listener
        if (todoListenerArray[i].getAttribute('data-event-clicked') !== 'true') {
          todoListenerArray[i].setAttribute('data-event-clicked', 'true');
          todoListenerArray[i].addEventListener('click', function () {
              console.log(`event has been attached to ${i}`);
              mainGridContainerListener.appendChild((0,_todoCreationPopup_js__WEBPACK_IMPORTED_MODULE_1__["default"])(i));
         });
        }
      }

      //runs through todo array and adds an event listener to all todo creation elements.
      for (let i = 0; i < deleteIconListener.length; i++) {
        //checks if an event listener has already been added, and adds one if it does not have an event listener
        if (deleteIconListener[i].getAttribute('data-event-clicked') !== 'true') {
         deleteIconListener[i].setAttribute('data-event-clicked', 'true');
          deleteIconListener[i].addEventListener('click', function() {
            console.log("You clicked on the delete icon");
            (0,_deleteTodo_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i);
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
    
    //appends the todo to the correct container
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
function deleteTodo(j) {
    let todoTaskContainerListener = document.querySelectorAll("#todoTaskContainer");
    // let array = array.from(todoTaskContainerListener);

    //function to remove the todo from the corresponding todo task container
    const removeTodo = function(i) {
      console.log(`You deleted a do on the ${i}th container`);
      // todoTaskContainerListener[i].remove();
      //removes the item from the array, but must remove the item from all arrays
      // todoTaskContainerListener.splice(i, 1);

      for(let i = 0; i < todoTaskContainerListener.length; i++) {
        if(i === j) {
          todoTaskContainerListener[i].remove();
          //must convert the nodelist to an array for this code to work
          todoTaskContainerListener.splice(i, 1);
        }
      }
    }

    removeTodo(j);

      console.log("delete todo Ran");

      return todoTaskContainerListener
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
/* harmony import */ var _appendTodo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appendTodo.js */ "./src/modules/appendTodo.js");



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
        new _createTodo_js__WEBPACK_IMPORTED_MODULE_0__["default"](getInputValue(), "The date", j);
        (0,_appendTodo_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyx1RkFBdUYsYUFBYSxjQUFjLE1BQU0sVUFBVSxVQUFVLE1BQU0sWUFBWSxhQUFhLGNBQWMsTUFBTSxVQUFVLFlBQVksY0FBYyxhQUFhLGFBQWEsV0FBVyxPQUFPLFVBQVUsVUFBVSxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsU0FBUyxZQUFZLGFBQWEsY0FBYyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLGFBQWEsY0FBYyxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sWUFBWSxhQUFhLGNBQWMsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEs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QUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2tDO0FBQ1Q7QUFDdUI7QUFDckU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsNEVBQW9CO0FBQzVEO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxpRUFBYTs7QUFFNUQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvbW9kdWxlcy9hcHBlbmRUb2RvLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2R1bGVzL2NyZWF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL21vZHVsZXMvY3JlYXRlVG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvbW9kdWxlcy9kZWxldGVUb2RvLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2R1bGVzL3Byb2plY3RDcmVhdGlvblBvcHVwLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2R1bGVzL3RvZG9DcmVhdGlvblBvcHVwLmpzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogPT09PT09PT09PT0gKi9cbi8qIEdlbmVyYWwgQ1NTICovXG4vKiA9PT09PT09PT09PSAqL1xuXG4qIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLyogPT09PT09PT09PT09PSAqL1xuLyogTWFpbiBHcmlkIENTUyAqL1xuLyogPT09PT09PT09PT09PSAqL1xuXG4ubWFpbi1ncmlkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IC41ZnIgMWZyICAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogLjVmciAxZnIgIDFmciAxZnI7XG5cbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG59XG5cbi8qID09PT09PT09PT0gKi9cbi8qIEhlYWRlciBDU1MgKi9cbi8qID09PT09PT09PT0gKi9cblxuLmhlYWRlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNiwgMzQsIDgwKTtcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDU7XG4gICAgYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggcmdiKDAgMCAwKTtcbiAgICB6LWluZGV4OiAyO1xuICAgIG1heC1oZWlnaHQ6IDdyZW07XG59XG5cbi50aXRsZS1sb2dvLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDNyZW07XG59XG5cbi50b2RvLWxvZ28ge1xuICAgIGhlaWdodDogMnJlbTtcbiAgICB3aWR0aDogMnJlbTtcbiAgICBjb2xvcjogZ29sZGVucm9kO1xufVxuXG4udGl0bGUtbG9nby1jb250YWluZXIgaDEge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuXG5cbi8qID09PT09PT09PT09PT09PT0gKi9cbi8qIE1haW4gQ29udGVudCBDU1MgKi9cbi8qID09PT09PT09PT09PT09PT0gKi9cblxuLm1haW4tY29udGVudC1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMCwgMjksIDQ5KTtcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gNSAvIDU7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLnRvZG8tcHJvamVjdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzYsIDM0LCA4MCk7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggMXB4IHJnYigwIDAgMCAvIDM0JSk7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xufVxuXG4ubWFpbi1wcm9qZWN0LXRpdGxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IC4yNXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0cmFuc2l0aW9uOiAxcyBhbGw7XG59XG5cbi5hZGQtdG9kby1pY29uIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgd2lkdGg6IDJyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG4uYWRkLXRvZG8taWNvbjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIHRyYW5zaXRpb246IDFzIGFsbDtcbn1cblxuLm1haW4tcHJvamVjdC10aXRsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjZmZmOyBcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi50b2RvLXRhc2stY29udGFpbmVyIHtcbiAgICB3aWR0aDogNzUlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogLjc1cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uc2luZ2xlLXRvZG8tdGFzay1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwgMTUwLCAyMjgpO1xuICAgIHBhZGRpbmc6IC43NXJlbTtcbiAgICBtYXJnaW4tdG9wOiAuNzVyZW07XG4gICAgZmxleDogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxNXB4IDFweCByZ2IoMCAwIDAgLyAzNCUpO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgdHJhbnNpdGlvbjogLjVzIGFsbDtcbiAgICBcbn1cblxuLnNpbmdsZS10b2RvLXRhc2stY29udGFpbmVyOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCA1cHggNXB4IDE1cHggMXB4IHJnYigwIDAgMCAvIDM0JSk7XG59XG5cbi50b2RvLXRhc2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnRvZG8taWNvbiB7XG4gICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgd2lkdGg6IDEuNXJlbTtcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xuICAgIGp1c3RpZnktaXRlbXM6IGZsZXgtZW5kO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLyogPT09PT09PT09PT09ICovXG4vKiBTaWRlYmFyIENTUyAqL1xuLyogPT09PT09PT09PT09ICovXG5cbi5zaWRlYmFyLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLCAyOCwgNjYpO1xuICAgIGdyaWQtYXJlYTogMiAvIDEgLyA1IC8gMjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigxNTAsIDE1MCwgMjI4KTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uYWRkLW5ldy1wcm9qZWN0cy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtaW4td2lkdGg6IDYwJTtcbiAgICB0cmFuc2l0aW9uOiAxcyBhbGw7XG59XG5cbi5hZGQtbmV3LXByb2plY3RzLWNvbnRhaW5lciBoMSB7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uYWRkLW5ldy1wcm9qZWN0cy1jb250YWluZXIgLnNpZGUtYmFyLWljb246aG92ZXIge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICB0cmFuc2l0aW9uOiAuNzVzIGFsbDtcbn1cblxuLnNvcnQtYnktdGltZS1jb250YWluZXIsIC5wcm9qZWN0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGZsZXg6IDEgMSAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDVyZW07XG4gICAgcGFkZGluZzogMXJlbSAxcmVtIDFyZW0gM3JlbTtcbn1cblxuXG4uc2VsZWN0YWJsZS10aW1lLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgZ2FwOiAuMnJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAuMnJlbSAwIC4ycmVtIDFyZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcbn1cblxuLnNlbGVjdGFibGUtdGltZS1jb250YWluZXIgcCwgLnByb2plY3QtY29udGFpbmVyIGgyLCAucHJvamVjdC10aXRsZSB7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5zZWxlY3RhYmxlLXRpbWUtY29udGFpbmVyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI0LCAxMjQsIDIwMSk7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxNXB4IDFweCByZ2IoMCAwIDAgLyAzNCUpO1xufVxuXG4uc2lkZS1iYXItaWNvbiB7XG4gICAgd2lkdGg6IDEuMnJlbTtcbiAgICBoZWlnaHQ6IDEuMnJlbTtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLyogPT09PT09PT09PT09ICovXG4vKiBQb3B1cCBNb2R1bGUgKi9cbi8qID09PT09PT09PT09PSAqL1xuXG4ubWFpbi1wb3B1cC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjg1KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTAwO1xufVxuXG4ucG9wdXAtZmxleC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM2LCAzNCwgODApO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgaGVpZ2h0OiAzMCU7XG4gICAgbWF4LXdpZHRoOiAzMCU7XG4gICAgaGVpZ2h0OiAzMCU7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbn1cblxuLmZvcm0tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogLjVyZW07XG59XG5cbi50aXRsZS1sYWJlbCwgLnRvZG8tbGFiZWwge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAuMDNyZW07XG59XG5cbi5zdWJtaXQtYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzYsIDM0LCA4MCk7XG4gICAgd2lkdGg6IDVyZW07XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHBhZGRpbmc6IC4ycmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAuMDNyZW07XG4gICAgYm9yZGVyOiBzb2xpZCByZ2IoMTI0LCAxMjQsIDIwMSk7XG4gICAgYm9yZGVyLXJhZGl1czogOSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcbn1cblxuLnN1Ym1pdC1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjQsIDEyNCwgMjAxKTtcbiAgICBib3JkZXI6IHNvbGlkIHJnYigzNiwgMzQsIDgwKTtcbn1cblxuLnN1Ym1pdC1idG46YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLGdCQUFnQjs7QUFFaEI7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsa0JBQWtCOztBQUVsQjtJQUNJLGFBQWE7SUFDYix3Q0FBd0M7SUFDeEMscUNBQXFDOztJQUVyQyxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUEsZUFBZTtBQUNmLGVBQWU7QUFDZixlQUFlOztBQUVmO0lBQ0ksaUNBQWlDO0lBQ2pDLHdCQUF3QjtJQUN4QixxQ0FBcUM7SUFDckMsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25COzs7O0FBSUEscUJBQXFCO0FBQ3JCLHFCQUFxQjtBQUNyQixxQkFBcUI7O0FBRXJCO0lBQ0ksaUNBQWlDO0lBQ2pDLHdCQUF3QjtJQUN4QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLE9BQU87SUFDUCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixjQUFjO0lBQ2QsaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQiw2Q0FBNkM7SUFDN0Msa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7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LG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogPT09PT09PT09PT0gKi9cXG4vKiBHZW5lcmFsIENTUyAqL1xcbi8qID09PT09PT09PT09ICovXFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLyogPT09PT09PT09PT09PSAqL1xcbi8qIE1haW4gR3JpZCBDU1MgKi9cXG4vKiA9PT09PT09PT09PT09ICovXFxuXFxuLm1haW4tZ3JpZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IC41ZnIgMWZyICAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IC41ZnIgMWZyICAxZnIgMWZyO1xcblxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLyogPT09PT09PT09PSAqL1xcbi8qIEhlYWRlciBDU1MgKi9cXG4vKiA9PT09PT09PT09ICovXFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzYsIDM0LCA4MCk7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gNTtcXG4gICAgYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggcmdiKDAgMCAwKTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgbWF4LWhlaWdodDogN3JlbTtcXG59XFxuXFxuLnRpdGxlLWxvZ28tY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAzcmVtO1xcbn1cXG5cXG4udG9kby1sb2dvIHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgY29sb3I6IGdvbGRlbnJvZDtcXG59XFxuXFxuLnRpdGxlLWxvZ28tY29udGFpbmVyIGgxIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuXFxuXFxuLyogPT09PT09PT09PT09PT09PSAqL1xcbi8qIE1haW4gQ29udGVudCBDU1MgKi9cXG4vKiA9PT09PT09PT09PT09PT09ICovXFxuXFxuLm1haW4tY29udGVudC1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzAsIDI5LCA0OSk7XFxuICAgIGdyaWQtYXJlYTogMiAvIDIgLyA1IC8gNTtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuLnRvZG8tcHJvamVjdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiAxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNiwgMzQsIDgwKTtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxNXB4IDFweCByZ2IoMCAwIDAgLyAzNCUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XFxufVxcblxcbi5tYWluLXByb2plY3QtdGl0bGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IC4yNXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRyYW5zaXRpb246IDFzIGFsbDtcXG59XFxuXFxuLmFkZC10b2RvLWljb24ge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4uYWRkLXRvZG8taWNvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gICAgdHJhbnNpdGlvbjogMXMgYWxsO1xcbn1cXG5cXG4ubWFpbi1wcm9qZWN0LXRpdGxlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogI2ZmZjsgXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLnRvZG8tdGFzay1jb250YWluZXIge1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogLjc1cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5zaW5nbGUtdG9kby10YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwgMTUwLCAyMjgpO1xcbiAgICBwYWRkaW5nOiAuNzVyZW07XFxuICAgIG1hcmdpbi10b3A6IC43NXJlbTtcXG4gICAgZmxleDogMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxNXB4IDFweCByZ2IoMCAwIDAgLyAzNCUpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICB0cmFuc2l0aW9uOiAuNXMgYWxsO1xcbiAgICBcXG59XFxuXFxuLnNpbmdsZS10b2RvLXRhc2stY29udGFpbmVyOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgNXB4IDVweCAxNXB4IDFweCByZ2IoMCAwIDAgLyAzNCUpO1xcbn1cXG5cXG4udG9kby10YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi50b2RvLWljb24ge1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gICAganVzdGlmeS1pdGVtczogZmxleC1lbmQ7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLyogPT09PT09PT09PT09ICovXFxuLyogU2lkZWJhciBDU1MgKi9cXG4vKiA9PT09PT09PT09PT0gKi9cXG5cXG4uc2lkZWJhci1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzAsIDI4LCA2Nik7XFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyA1IC8gMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoMTUwLCAxNTAsIDIyOCk7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5hZGQtbmV3LXByb2plY3RzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWluLXdpZHRoOiA2MCU7XFxuICAgIHRyYW5zaXRpb246IDFzIGFsbDtcXG59XFxuXFxuLmFkZC1uZXctcHJvamVjdHMtY29udGFpbmVyIGgxIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uYWRkLW5ldy1wcm9qZWN0cy1jb250YWluZXIgLnNpZGUtYmFyLWljb246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAgIHRyYW5zaXRpb246IC43NXMgYWxsO1xcbn1cXG5cXG4uc29ydC1ieS10aW1lLWNvbnRhaW5lciwgLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGZsZXg6IDEgMSAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogNXJlbTtcXG4gICAgcGFkZGluZzogMXJlbSAxcmVtIDFyZW0gM3JlbTtcXG59XFxuXFxuXFxuLnNlbGVjdGFibGUtdGltZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogLjVyZW07XFxuICAgIGdhcDogLjJyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAuMnJlbSAwIC4ycmVtIDFyZW07XFxuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XFxufVxcblxcbi5zZWxlY3RhYmxlLXRpbWUtY29udGFpbmVyIHAsIC5wcm9qZWN0LWNvbnRhaW5lciBoMiwgLnByb2plY3QtdGl0bGUge1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLnNlbGVjdGFibGUtdGltZS1jb250YWluZXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI0LCAxMjQsIDIwMSk7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCAxcHggcmdiKDAgMCAwIC8gMzQlKTtcXG59XFxuXFxuLnNpZGUtYmFyLWljb24ge1xcbiAgICB3aWR0aDogMS4ycmVtO1xcbiAgICBoZWlnaHQ6IDEuMnJlbTtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi8qID09PT09PT09PT09PSAqL1xcbi8qIFBvcHVwIE1vZHVsZSAqL1xcbi8qID09PT09PT09PT09PSAqL1xcblxcbi5tYWluLXBvcHVwLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42ODUpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLnBvcHVwLWZsZXgtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM2LCAzNCwgODApO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBoZWlnaHQ6IDMwJTtcXG4gICAgbWF4LXdpZHRoOiAzMCU7XFxuICAgIGhlaWdodDogMzAlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogLjVyZW07XFxufVxcblxcbi50aXRsZS1sYWJlbCwgLnRvZG8tbGFiZWwge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAuMDNyZW07XFxufVxcblxcbi5zdWJtaXQtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM2LCAzNCwgODApO1xcbiAgICB3aWR0aDogNXJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IC4ycmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLjAzcmVtO1xcbiAgICBib3JkZXI6IHNvbGlkIHJnYigxMjQsIDEyNCwgMjAxKTtcXG4gICAgYm9yZGVyLXJhZGl1czogOSU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XFxufVxcblxcbi5zdWJtaXQtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNCwgMTI0LCAyMDEpO1xcbiAgICBib3JkZXI6IHNvbGlkIHJnYigzNiwgMzQsIDgwKTtcXG59XFxuXFxuLnN1Ym1pdC1idG46YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBkZWxldGVUb2RvIGZyb20gJy4vZGVsZXRlVG9kby5qcyc7XG5pbXBvcnQgdG9kb0NyZWF0aW9uUG9wdXAgZnJvbSAnLi90b2RvQ3JlYXRpb25Qb3B1cC5qcyc7XG5cbi8vZnVuY3Rpb24gdG8gY3JlYXRlIGV2ZW50IGxpc3RlbmVycyBhbmQgYXBwZW5kIHRvZG9zIHRvIGNvcnJlY3QgcHJvamVjdCBjb250YWluZXJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGVuZFRvZG8gKCkge1xuICAgIGxldCB0b2RvTGlzdGVuZXJBcnJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbmV3VG9kb1wiKTtcbiAgICBjb25zdCBtYWluR3JpZENvbnRhaW5lckxpc3RlbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluR3JpZENvbnRhaW5lclwiKTtcbiAgICBjb25zdCBkZWxldGVJY29uTGlzdGVuZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2RlbGV0ZVRvZG9cIik7XG5cbiAgICAgIC8vcnVucyB0aHJvdWdoIHRvZG8gYXJyYXkgYW5kIGFkZHMgYW4gZXZlbnQgbGlzdGVuZXIgdG8gYWxsIHRvZG8gY3JlYXRpb24gZWxlbWVudHMuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9MaXN0ZW5lckFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vY2hlY2tzIGlmIGFuIGV2ZW50IGxpc3RlbmVyIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQsIGFuZCBhZGRzIG9uZSBpZiBpdCBkb2VzIG5vdCBoYXZlIGFuIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgIGlmICh0b2RvTGlzdGVuZXJBcnJheVtpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZXZlbnQtY2xpY2tlZCcpICE9PSAndHJ1ZScpIHtcbiAgICAgICAgICB0b2RvTGlzdGVuZXJBcnJheVtpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZXZlbnQtY2xpY2tlZCcsICd0cnVlJyk7XG4gICAgICAgICAgdG9kb0xpc3RlbmVyQXJyYXlbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBldmVudCBoYXMgYmVlbiBhdHRhY2hlZCB0byAke2l9YCk7XG4gICAgICAgICAgICAgIG1haW5HcmlkQ29udGFpbmVyTGlzdGVuZXIuYXBwZW5kQ2hpbGQodG9kb0NyZWF0aW9uUG9wdXAoaSkpO1xuICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy9ydW5zIHRocm91Z2ggdG9kbyBhcnJheSBhbmQgYWRkcyBhbiBldmVudCBsaXN0ZW5lciB0byBhbGwgdG9kbyBjcmVhdGlvbiBlbGVtZW50cy5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVsZXRlSWNvbkxpc3RlbmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vY2hlY2tzIGlmIGFuIGV2ZW50IGxpc3RlbmVyIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQsIGFuZCBhZGRzIG9uZSBpZiBpdCBkb2VzIG5vdCBoYXZlIGFuIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgIGlmIChkZWxldGVJY29uTGlzdGVuZXJbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLWV2ZW50LWNsaWNrZWQnKSAhPT0gJ3RydWUnKSB7XG4gICAgICAgICBkZWxldGVJY29uTGlzdGVuZXJbaV0uc2V0QXR0cmlidXRlKCdkYXRhLWV2ZW50LWNsaWNrZWQnLCAndHJ1ZScpO1xuICAgICAgICAgIGRlbGV0ZUljb25MaXN0ZW5lcltpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJZb3UgY2xpY2tlZCBvbiB0aGUgZGVsZXRlIGljb25cIik7XG4gICAgICAgICAgICBkZWxldGVUb2RvKGkpO1xuICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdG9kb0xpc3RlbmVyQXJyYXlcbn0iLCJpbXBvcnQgQ3JlYXRlVG9kbyBmcm9tICcuL2NyZWF0ZVRvZG8uanMnXG5pbXBvcnQgYXBwZW5kVG9kbyBmcm9tICcuL2FwcGVuZFRvZG8uanMnXG5pbXBvcnQgZGVsZXRlVG9kbyBmcm9tICcuL2RlbGV0ZVRvZG8uanMnXG4vL3Nob3VsZCBjcmVhdGUgYSBtb2RhbCBwb3B1cCBmb3IgYSBwcm9qZWN0IGNyZWF0aW9uIGNhcmRcbi8vYmFja2dyb3VuZCBzaG91bGQgYmUgY292ZXJlZCBieSBtb2RhbCBjYXJkIHdpdGggYSBzZW1pLXRyYW5zcGFyZW50IGNvbG9yLiBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlUHJvamVjdCh0aXRsZSkge1xuXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIFxuICAgIGNvbnN0IHRvZG9Qcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvUHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby1wcm9qZWN0LWNvbnRhaW5lclwiKTtcbiAgICB0b2RvUHJvamVjdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG9Qcm9qZWN0Q29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgbWFpblByb2plY3RUaXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpblByb2plY3RUaXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbi1wcm9qZWN0LXRpdGxlLWNvbnRhaW5lclwiKTtcbiAgICBtYWluUHJvamVjdFRpdGxlQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpblByb2plY3RUaXRsZUNvbnRhaW5lclwiKTtcbiAgICB0b2RvUHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluUHJvamVjdFRpdGxlQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IG1haW5Qcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5Qcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcIm1haW4tcHJvamVjdC10aXRsZVwiKTtcbiAgICBtYWluUHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpbi1wcm9qZWN0LXRpdGxlXCIpO1xuICAgIG1haW5Qcm9qZWN0VGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpblByb2plY3RUaXRsZSk7XG4gICAgbWFpblByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG4gICAgY29uc3QgdG9kb1Rhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG9UYXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXRhc2stY29udGFpbmVyXCIpO1xuICAgIHRvZG9UYXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kb1Rhc2tDb250YWluZXJcIik7XG4gICAgdG9kb1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb1Rhc2tDb250YWluZXIpO1xuXG4gICAgY29uc3QgdG9kb0NyZWF0aW9uSWNvbiA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cInctNiBoLTYgYWRkLXRvZG8taWNvblwiIGlkPVwibmV3VG9kb1wiPiA8cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBkPVwiTTEyIDQuNXYxNW03LjUtNy41aC0xNVwiLz4gPC9zdmc+JztcbiAgICBtYWluUHJvamVjdFRpdGxlQ29udGFpbmVyLmlubmVySFRNTCArPSB0b2RvQ3JlYXRpb25JY29uO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlIHByb2plY3QgbW9kdWxlIGlzIGhvb2tlZCB1cFwiKVxuICAgIFxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGFwcGVuZFRvZG8oKTtcbiAgICAgICAgZGVsZXRlVG9kbygpO1xuICAgICAgfSwgMjAwMCk7XG4gICAgXG4gICAgXG5cbiAgICByZXR1cm4gdG9kb1Byb2plY3RDb250YWluZXJcbiAgICAgXG4gICAgfVxuICAgICIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZVRvZG8odGl0bGUsIGR1ZURhdGUsIGopIHtcbiAgICBjb25zdCB0b2RvVGFza0NvbnRhaW5lckxpc3RlbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiN0b2RvVGFza0NvbnRhaW5lclwiKTtcbiAgICBcblxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuXG4gICAgY29uc3Qgc2luZ2xlVG9kb1Rhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNpbmdsZVRvZG9UYXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzaW5nbGUtdG9kby10YXNrLWNvbnRhaW5lclwiKTtcbiAgICBzaW5nbGVUb2RvVGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNpbmdsZVRvZG9UYXNrQ29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgdG9kb1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG9UYXNrLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXRhc2tcIik7XG4gICAgdG9kb1Rhc2suc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvVGFza1wiKTtcbiAgICB0b2RvVGFzay50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgIHNpbmdsZVRvZG9UYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9UYXNrKTtcblxuICAgIGNvbnN0IGVkaXRJY29uID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwidy02IGgtNiB0b2RvLWljb25cIiBpZD1cImVkaXRUb2RvXCI+IDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMTYuODYyIDQuNDg3bDEuNjg3LTEuNjg4YTEuODc1IDEuODc1IDAgMTEyLjY1MiAyLjY1MkwxMC41ODIgMTYuMDdhNC41IDQuNSAwIDAxLTEuODk3IDEuMTNMNiAxOGwuOC0yLjY4NWE0LjUgNC41IDAgMDExLjEzLTEuODk3bDguOTMyLTguOTMxem0wIDBMMTkuNSA3LjEyNU0xOCAxNHY0Ljc1QTIuMjUgMi4yNSAwIDAxMTUuNzUgMjFINS4yNUEyLjI1IDIuMjUgMCAwMTMgMTguNzVWOC4yNUEyLjI1IDIuMjUgMCAwMTUuMjUgNkgxMFwiIC8+IDwvc3ZnPic7XG4gICAgc2luZ2xlVG9kb1Rhc2tDb250YWluZXIuaW5uZXJIVE1MICs9IGVkaXRJY29uO1xuXG4gICAgY29uc3QgZGVsZXRlSWNvbiA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cInctNiBoLTYgdG9kby1pY29uXCIgaWQ9XCJkZWxldGVUb2RvXCI+IDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMTQuNzQgOWwtLjM0NiA5bS00Ljc4OCAwTDkuMjYgOW05Ljk2OC0zLjIxYy4zNDIuMDUyLjY4Mi4xMDcgMS4wMjIuMTY2bS0xLjAyMi0uMTY1TDE4LjE2IDE5LjY3M2EyLjI1IDIuMjUgMCAwMS0yLjI0NCAyLjA3N0g4LjA4NGEyLjI1IDIuMjUgMCAwMS0yLjI0NC0yLjA3N0w0Ljc3MiA1Ljc5bTE0LjQ1NiAwYTQ4LjEwOCA0OC4xMDggMCAwMC0zLjQ3OC0uMzk3bS0xMiAuNTYyYy4zNC0uMDU5LjY4LS4xMTQgMS4wMjItLjE2NW0wIDBhNDguMTEgNDguMTEgMCAwMTMuNDc4LS4zOTdtNy41IDB2LS45MTZjMC0xLjE4LS45MS0yLjE2NC0yLjA5LTIuMjAxYTUxLjk2NCA1MS45NjQgMCAwMC0zLjMyIDBjLTEuMTguMDM3LTIuMDkgMS4wMjItMi4wOSAyLjIwMXYuOTE2bTcuNSAwYTQ4LjY2NyA0OC42NjcgMCAwMC03LjUgMFwiIC8+IDwvc3ZnPic7XG4gICAgc2luZ2xlVG9kb1Rhc2tDb250YWluZXIuaW5uZXJIVE1MICs9IGRlbGV0ZUljb247XG4gICAgXG4gICAgLy9hcHBlbmRzIHRoZSB0b2RvIHRvIHRoZSBjb3JyZWN0IGNvbnRhaW5lclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb1Rhc2tDb250YWluZXJMaXN0ZW5lci5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaSA9PT0gaikge1xuICAgICAgICAgICAgdG9kb1Rhc2tDb250YWluZXJMaXN0ZW5lcltpXS5hcHBlbmRDaGlsZChzaW5nbGVUb2RvVGFza0NvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcImNyZWF0ZSB0b2RvIG1vZHVsZSBpcyBob29rZWQgdXBcIik7XG5cbiAgICByZXR1cm4gc2luZ2xlVG9kb1Rhc2tDb250YWluZXJcbiAgICB9XG4gICAgIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlVG9kbyhqKSB7XG4gICAgbGV0IHRvZG9UYXNrQ29udGFpbmVyTGlzdGVuZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3RvZG9UYXNrQ29udGFpbmVyXCIpO1xuICAgIC8vIGxldCBhcnJheSA9IGFycmF5LmZyb20odG9kb1Rhc2tDb250YWluZXJMaXN0ZW5lcik7XG5cbiAgICAvL2Z1bmN0aW9uIHRvIHJlbW92ZSB0aGUgdG9kbyBmcm9tIHRoZSBjb3JyZXNwb25kaW5nIHRvZG8gdGFzayBjb250YWluZXJcbiAgICBjb25zdCByZW1vdmVUb2RvID0gZnVuY3Rpb24oaSkge1xuICAgICAgY29uc29sZS5sb2coYFlvdSBkZWxldGVkIGEgZG8gb24gdGhlICR7aX10aCBjb250YWluZXJgKTtcbiAgICAgIC8vIHRvZG9UYXNrQ29udGFpbmVyTGlzdGVuZXJbaV0ucmVtb3ZlKCk7XG4gICAgICAvL3JlbW92ZXMgdGhlIGl0ZW0gZnJvbSB0aGUgYXJyYXksIGJ1dCBtdXN0IHJlbW92ZSB0aGUgaXRlbSBmcm9tIGFsbCBhcnJheXNcbiAgICAgIC8vIHRvZG9UYXNrQ29udGFpbmVyTGlzdGVuZXIuc3BsaWNlKGksIDEpO1xuXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdG9kb1Rhc2tDb250YWluZXJMaXN0ZW5lci5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihpID09PSBqKSB7XG4gICAgICAgICAgdG9kb1Rhc2tDb250YWluZXJMaXN0ZW5lcltpXS5yZW1vdmUoKTtcbiAgICAgICAgICAvL211c3QgY29udmVydCB0aGUgbm9kZWxpc3QgdG8gYW4gYXJyYXkgZm9yIHRoaXMgY29kZSB0byB3b3JrXG4gICAgICAgICAgdG9kb1Rhc2tDb250YWluZXJMaXN0ZW5lci5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVUb2RvKGopO1xuXG4gICAgICBjb25zb2xlLmxvZyhcImRlbGV0ZSB0b2RvIFJhblwiKTtcblxuICAgICAgcmV0dXJuIHRvZG9UYXNrQ29udGFpbmVyTGlzdGVuZXJcbn0iLCJpbXBvcnQgQ3JlYXRlUHJvamVjdCBmcm9tICcuL2NyZWF0ZVByb2plY3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0Q3JlYXRpb25Qb3B1cCgpIHtcbiAgICBjb25zdCBtYWluQ29udGVudENvbnRhaW5lckxpc3RlbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQ29udGVudENvbnRhaW5lclwiKTtcbiAgICBcbiAgICBjb25zdCBtYWluUG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5Qb3B1cENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbi1wb3B1cC1jb250YWluZXJcIik7XG4gICAgbWFpblBvcHVwQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpblBvcHVwQ29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgcG9wdXBGbGV4Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwb3B1cEZsZXhDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInBvcHVwLWZsZXgtY29udGFpbmVyXCIpO1xuICAgIHBvcHVwRmxleENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBvcHVwRmxleENvbnRhaW5lclwiKTtcbiAgICBtYWluUG9wdXBDb250YWluZXIuYXBwZW5kQ2hpbGQocG9wdXBGbGV4Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udGFpbmVyXCIpO1xuICAgIGZvcm1Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3JtQ29udGFpbmVyXCIpO1xuICAgIHBvcHVwRmxleENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0aXRsZUlucHV0XCIpO1xuICAgIHRpdGxlTGFiZWwuY2xhc3NMaXN0LmFkZChcInRpdGxlLWxhYmVsXCIpO1xuICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3QgVGl0bGU6XCI7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcblxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJwb3B1cC1pbnB1dFwiKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGl0bGVJbnB1dFwiKTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZChcInN1Ym1pdC1idG5cIik7XG4gICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3VibWl0QnRuXCIpO1xuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgcG9wdXBGbGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgICBmdW5jdGlvbiBnZXRJbnB1dFZhbHVlKCkge1xuICAgICAgICBsZXQgaW5wdXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVJbnB1dFwiKS52YWx1ZTtcbiAgICAgICAgY29uc29sZS5sb2coaW5wdXRWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGlucHV0VmFsdWVcbiAgICB9XG4gICAgXG5cbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZ2V0SW5wdXRWYWx1ZSgpO1xuICAgICAgICBtYWluQ29udGVudENvbnRhaW5lckxpc3RlbmVyLmFwcGVuZENoaWxkKG5ldyBDcmVhdGVQcm9qZWN0KGdldElucHV0VmFsdWUoKSkpO1xuICAgICAgICBtYWluUG9wdXBDb250YWluZXIucmVtb3ZlKCk7XG4gICAgfSk7XG5cblxuICAgIHJldHVybiBtYWluUG9wdXBDb250YWluZXJcbn0iLCJpbXBvcnQgQ3JlYXRlVG9kbyBmcm9tICcuL2NyZWF0ZVRvZG8uanMnO1xuaW1wb3J0IGFwcGVuZFRvZG8gZnJvbSAnLi9hcHBlbmRUb2RvLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb0NyZWF0aW9uUG9wdXAoaikge1xuICAgIGNvbnN0IG1haW5Db250ZW50Q29udGFpbmVyTGlzdGVuZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5Db250ZW50Q29udGFpbmVyXCIpO1xuICAgIFxuICAgIGNvbnN0IG1haW5Qb3B1cENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpblBvcHVwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLXBvcHVwLWNvbnRhaW5lclwiKTtcbiAgICBtYWluUG9wdXBDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluUG9wdXBDb250YWluZXJcIik7XG5cbiAgICBjb25zdCBwb3B1cEZsZXhDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBvcHVwRmxleENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicG9wdXAtZmxleC1jb250YWluZXJcIik7XG4gICAgcG9wdXBGbGV4Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicG9wdXBGbGV4Q29udGFpbmVyXCIpO1xuICAgIG1haW5Qb3B1cENvbnRhaW5lci5hcHBlbmRDaGlsZChwb3B1cEZsZXhDb250YWluZXIpO1xuXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250YWluZXJcIik7XG4gICAgZm9ybUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvcm1Db250YWluZXJcIik7XG4gICAgcG9wdXBGbGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuXG4gICAgY29uc3QgdG9kb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRvZG9MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0b2RvSW5wdXRcIik7XG4gICAgdG9kb0xhYmVsLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWxhYmVsXCIpO1xuICAgIHRvZG9MYWJlbC50ZXh0Q29udGVudCA9IFwiVG9kbzpcIjtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9MYWJlbCk7XG5cbiAgICBjb25zdCB0b2RvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdG9kb0lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHRvZG9JbnB1dC5jbGFzc0xpc3QuYWRkKFwicG9wdXAtaW5wdXRcIik7XG4gICAgdG9kb0lucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kb0lucHV0XCIpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0lucHV0KTtcblxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXQtYnRuXCIpO1xuICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Ym1pdEJ0blwiKTtcbiAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgIHBvcHVwRmxleENvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG4gICAgZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZSgpIHtcbiAgICAgICAgbGV0IGlucHV0VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9JbnB1dFwiKS52YWx1ZTtcbiAgICAgICAgY29uc29sZS5sb2coaW5wdXRWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGlucHV0VmFsdWVcbiAgICB9XG4gICAgXG4gICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGdldElucHV0VmFsdWUoKTtcbiAgICAgICAgbmV3IENyZWF0ZVRvZG8oZ2V0SW5wdXRWYWx1ZSgpLCBcIlRoZSBkYXRlXCIsIGopO1xuICAgICAgICBhcHBlbmRUb2RvKCk7XG4gICAgICAgIG1haW5Qb3B1cENvbnRhaW5lci5yZW1vdmUoKTtcbiAgICB9KTtcblxuXG4gICAgcmV0dXJuIG1haW5Qb3B1cENvbnRhaW5lclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IENyZWF0ZVByb2plY3QgZnJvbSAnLi9tb2R1bGVzL2NyZWF0ZVByb2plY3QuanMnO1xuaW1wb3J0IGFwcGVuZFRvZG8gZnJvbSAnLi9tb2R1bGVzL2FwcGVuZFRvZG8nO1xuaW1wb3J0IHByb2plY3RDcmVhdGlvblBvcHVwIGZyb20gJy4vbW9kdWxlcy9wcm9qZWN0Q3JlYXRpb25Qb3B1cC5qcyc7XG4gIFxuY29uc3QgY29udGVudENyZWF0aW9uID0gKCgpID0+IHtcbiAgY29uc3QgbmV3UHJvamVjdExpc3RlbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0XCIpOyBcbiAgY29uc3QgdG9kb0xpc3RlbmVyQXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI25ld1RvZG9cIik7XG5cbiAgbmV3UHJvamVjdExpc3RlbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBtYWluQ29udGVudENvbnRhaW5lckxpc3RlbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQ29udGVudENvbnRhaW5lclwiKTtcbiAgICBjb25zdCBoZWFkZXJDb250YWluZXJMaXN0ZW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkdyaWRDb250YWluZXJcIilcbiAgICAvLyBtYWluQ29udGVudENvbnRhaW5lckxpc3RlbmVyLmFwcGVuZENoaWxkKG5ldyBDcmVhdGVQcm9qZWN0KFwiOTkgd29vZGN1dHRpbmdcIikpO1xuICAgIGhlYWRlckNvbnRhaW5lckxpc3RlbmVyLmFwcGVuZENoaWxkKHByb2plY3RDcmVhdGlvblBvcHVwKCkpO1xuICAgIFxuICB9KTtcblxuICAvL3Rlc3QgY29udGFpbmVyXG4gIC8vcnVucyBhcHBlbmRUb2RvIHRvIGFkZCBldmVudGxpc3RlbmVyIHRvIGNyZWF0ZSB0b2RvIGljb25zIG9uIGxvYWRcbiAgY29uc3QgbWFpbkNvbnRlbnRDb250YWluZXJMaXN0ZW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkNvbnRlbnRDb250YWluZXJcIik7XG4gIFxuICBtYWluQ29udGVudENvbnRhaW5lckxpc3RlbmVyLmFwcGVuZENoaWxkKG5ldyBDcmVhdGVQcm9qZWN0KCdUZXN0IFByb2plY3QnKSk7XG5cbn0pKCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==