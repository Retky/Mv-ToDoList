/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  background-color: #eee;\\r\\n}\\r\\n\\r\\n#todoDiv {\\r\\n  background: #fff;\\r\\n  filter: drop-shadow(3px 3px 2px #ccc);\\r\\n  max-width: 350px;\\r\\n}\\r\\n\\r\\n#todoList {\\r\\n  list-style: none;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  font-size: 1rem;\\r\\n  border-bottom: solid #ccc 1px;\\r\\n  padding: 10px;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n#addTask {\\r\\n  border: none;\\r\\n  font-style: italic;\\r\\n  line-height: 20px;\\r\\n  box-sizing: border-box;\\r\\n  width: 100%;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.task {\\r\\n  border-bottom: solid #ccc 1px;\\r\\n  padding: 10px;\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.task label {\\r\\n  flex-grow: 3;\\r\\n}\\r\\n\\r\\n#add {\\r\\n  padding: 0;\\r\\n  display: flex;\\r\\n  align-items: flex-end;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n#enter {\\r\\n  border: none;\\r\\n  background: inherit;\\r\\n  padding: 0 10px 0 0;\\r\\n  height: 40px;\\r\\n  width: 35px;\\r\\n}\\r\\n\\r\\n#enter:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.remove {\\r\\n  height: 20px;\\r\\n  width: 20px;\\r\\n  margin-left: auto;\\r\\n}\\r\\n\\r\\n.remove img {\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.remove img:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#clear {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  color: #999;\\r\\n  background: #eee;\\r\\n}\\r\\n\\r\\n#clear:hover {\\r\\n  color: #fff;\\r\\n  background: #bbb;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ToDoList/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://ToDoList/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://ToDoList/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://ToDoList/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://ToDoList/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://ToDoList/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://ToDoList/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://ToDoList/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://ToDoList/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://ToDoList/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _img_enter_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/enter.png */ \"./src/img/enter.png\");\n/* harmony import */ var _img_trash_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/trash.png */ \"./src/img/trash.png\");\n/* harmony import */ var _modules_taskList_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/taskList.mjs */ \"./src/modules/taskList.mjs\");\n/* harmony import */ var _modules_addtask_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/addtask.mjs */ \"./src/modules/addtask.mjs\");\n/* harmony import */ var _modules_taskBuild_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/taskBuild.mjs */ \"./src/modules/taskBuild.mjs\");\n/* harmony import */ var _modules_clearComp_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/clearComp.mjs */ \"./src/modules/clearComp.mjs\");\n\n\n\n\n\n\n\n\nconst todoList = document.getElementById('todoList');\n\n// Enter Button\nconst addBtn = document.getElementById('enter');\nconst enter = new Image();\nenter.src = _img_enter_png__WEBPACK_IMPORTED_MODULE_1__;\nenter.style.width = '100%';\naddBtn.appendChild(enter);\n\n// Display list\n_modules_taskList_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].list.forEach((item) => {\n  todoList.appendChild(\n    (0,_modules_taskBuild_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(item.name, item.index, item.completed, _img_trash_png__WEBPACK_IMPORTED_MODULE_2__, _modules_taskList_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].list, todoList),\n  );\n});\n\n// Add task\n(0,_modules_addtask_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_modules_taskList_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].list, _img_trash_png__WEBPACK_IMPORTED_MODULE_2__, todoList);\n\n// Clear Completed\nconst clearBtn = document.getElementById('clear');\n\n(0,_modules_clearComp_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(clearBtn, _modules_taskList_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].list, todoList);\n\n\n//# sourceURL=webpack://ToDoList/./src/index.js?");

/***/ }),

/***/ "./src/img/enter.png":
/*!***************************!*\
  !*** ./src/img/enter.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dda6abaac264828e87ee.png\";\n\n//# sourceURL=webpack://ToDoList/./src/img/enter.png?");

/***/ }),

/***/ "./src/img/trash.png":
/*!***************************!*\
  !*** ./src/img/trash.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"651605cb36c36cdda3f9.png\";\n\n//# sourceURL=webpack://ToDoList/./src/img/trash.png?");

/***/ }),

/***/ "./src/modules/addtask.mjs":
/*!*********************************!*\
  !*** ./src/modules/addtask.mjs ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _remove_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove.mjs */ \"./src/modules/remove.mjs\");\n/* harmony import */ var _editDesc_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editDesc.mjs */ \"./src/modules/editDesc.mjs\");\n/* harmony import */ var _saveLocalStorage_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saveLocalStorage.mjs */ \"./src/modules/saveLocalStorage.mjs\");\n/* harmony import */ var _checkbox_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkbox.mjs */ \"./src/modules/checkbox.mjs\");\n\n\n\n\n\nconst addDiv = document.getElementById('add');\nconst input = document.getElementById('addTask');\n\n// CreateTask\nconst newTask = (name, index) => {\n  const task = {\n\n    name,\n    completed: false,\n    index,\n  };\n  return task;\n};\n\n// Add to the list\nconst addToLi = (name, index, trashImg, taskList, todoList) => {\n  const element = document.createElement('li');\n  element.classList = 'task';\n\n  element.innerHTML = `<input type=\"checkbox\" name=\"${index}\"><label for=\"${index}\">${name}</label><div class=\"remove\"><img src=${trashImg} alt=\"remove\"/>`;\n  todoList.appendChild(element);\n  (0,_remove_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, index, taskList, todoList);\n  (0,_editDesc_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element, taskList);\n  (0,_checkbox_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(element, index, taskList);\n};\n\n// Add task to the list and display\nconst listen = (taskList, trashImg, todoList) => {\n  addDiv.addEventListener('submit', (e) => {\n    e.preventDefault();\n    if (input.value) {\n      addToLi(input.value, taskList.length, trashImg, taskList, todoList);\n      taskList.push(newTask(input.value, taskList.length));\n\n      input.value = '';\n      (0,_saveLocalStorage_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(taskList);\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listen);\n\n\n//# sourceURL=webpack://ToDoList/./src/modules/addtask.mjs?");

/***/ }),

/***/ "./src/modules/checkbox.mjs":
/*!**********************************!*\
  !*** ./src/modules/checkbox.mjs ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _saveLocalStorage_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveLocalStorage.mjs */ \"./src/modules/saveLocalStorage.mjs\");\n\n\nconst checkBox = (element, index, taskList) => {\n  const box = element.querySelector('input');\n  box.addEventListener('change', () => {\n    if (box.checked) {\n      taskList[index].completed = true;\n      (0,_saveLocalStorage_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(taskList);\n    } else {\n      taskList[index].completed = false;\n      (0,_saveLocalStorage_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(taskList);\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkBox);\n\n\n//# sourceURL=webpack://ToDoList/./src/modules/checkbox.mjs?");

/***/ }),

/***/ "./src/modules/clearComp.mjs":
/*!***********************************!*\
  !*** ./src/modules/clearComp.mjs ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _saveLocalStorage_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveLocalStorage.mjs */ \"./src/modules/saveLocalStorage.mjs\");\n\n\nconst clear = (element, taskList, todoList) => {\n  element.addEventListener('click', () => {\n    const newLi = taskList.filter((task) => task.completed === false);\n    taskList = newLi;\n\n    taskList.forEach((item, i) => {\n      item.index = i;\n    });\n\n    (0,_saveLocalStorage_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(taskList);\n\n    const list = todoList.querySelectorAll('li');\n    list.forEach((item) => {\n      if (item.querySelector('input').checked) {\n        todoList.removeChild(item);\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clear);\n\n\n//# sourceURL=webpack://ToDoList/./src/modules/clearComp.mjs?");

/***/ }),

/***/ "./src/modules/editDesc.mjs":
/*!**********************************!*\
  !*** ./src/modules/editDesc.mjs ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _saveLocalStorage_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveLocalStorage.mjs */ \"./src/modules/saveLocalStorage.mjs\");\n\n\n// Edit description\nconst editTask = (element, taskList) => {\n  const label = element.querySelector('label');\n  const index = element.querySelector('input').name;\n  let description = label.innerHTML;\n\n  label.addEventListener('click', () => {\n    label.contentEditable = true;\n    label.focus();\n  });\n\n  label.addEventListener('focusout', () => {\n    description = label.innerHTML;\n    taskList[index].name = description;\n    label.contentEditable = false;\n    (0,_saveLocalStorage_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(taskList);\n  });\n  label.addEventListener('keypress', (e) => {\n    if (e.key === 'Enter') {\n      description = label.innerHTML;\n      taskList[index].name = description;\n      label.contentEditable = false;\n      (0,_saveLocalStorage_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(taskList);\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editTask);\n\n\n//# sourceURL=webpack://ToDoList/./src/modules/editDesc.mjs?");

/***/ }),

/***/ "./src/modules/remove.mjs":
/*!********************************!*\
  !*** ./src/modules/remove.mjs ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _saveLocalStorage_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveLocalStorage.mjs */ \"./src/modules/saveLocalStorage.mjs\");\n\n\n// remove\nconst remove = (item, index, taskList, todoList) => {\n  const removeIco = item.querySelector('.remove');\n  removeIco.addEventListener('click', () => {\n    const newList = taskList;\n    newList.splice(index, 1);\n    taskList = newList;\n    taskList.forEach((item, i) => {\n      item.index = i;\n    });\n\n    (0,_saveLocalStorage_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(taskList);\n    todoList.removeChild(item);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (remove);\n\n\n//# sourceURL=webpack://ToDoList/./src/modules/remove.mjs?");

/***/ }),

/***/ "./src/modules/saveLocalStorage.mjs":
/*!******************************************!*\
  !*** ./src/modules/saveLocalStorage.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Save localStorage\nconst toLS = (taskList) => {\n  localStorage.setItem('taskList', JSON.stringify(taskList));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toLS);\n\n\n//# sourceURL=webpack://ToDoList/./src/modules/saveLocalStorage.mjs?");

/***/ }),

/***/ "./src/modules/taskBuild.mjs":
/*!***********************************!*\
  !*** ./src/modules/taskBuild.mjs ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _remove_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove.mjs */ \"./src/modules/remove.mjs\");\n/* harmony import */ var _editDesc_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editDesc.mjs */ \"./src/modules/editDesc.mjs\");\n/* harmony import */ var _checkbox_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkbox.mjs */ \"./src/modules/checkbox.mjs\");\n\n\n\n\n// Create Li element\nconst newLi = (name, index, completed, trashImg, taskList, todoList) => {\n  const element = document.createElement('li');\n  element.classList = 'task';\n  if (completed) {\n    element.innerHTML = `<input type=\"checkbox\" name=\"${index}\" checked><label for=\"${index}\">${name}</label><div class=\"remove\"><img src=${trashImg} alt=\"remove\"/>`;\n    (0,_remove_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, index, taskList, todoList);\n    (0,_editDesc_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element, taskList);\n    (0,_checkbox_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(element, index, taskList);\n    return element;\n  }\n  element.innerHTML = `<input type=\"checkbox\" name=\"${index}\"><label for=\"${index}\">${name}</label><div class=\"remove\"><img src=${trashImg} alt=\"remove\"/>`;\n  (0,_remove_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, index, taskList, todoList);\n  (0,_editDesc_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element, taskList);\n  (0,_checkbox_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(element, index, taskList);\n  return element;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newLi);\n\n\n//# sourceURL=webpack://ToDoList/./src/modules/taskBuild.mjs?");

/***/ }),

/***/ "./src/modules/taskList.mjs":
/*!**********************************!*\
  !*** ./src/modules/taskList.mjs ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass List {\n  constructor() {\n    this.list = [];\n  }\n}\n\nconst task = new List();\n\n// Load from Local Storage\nif (localStorage.taskList) {\n  const from = JSON.parse(localStorage.taskList);\n  task.list = from;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (task);\n\n\n//# sourceURL=webpack://ToDoList/./src/modules/taskList.mjs?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;