/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/breadcrumbs/breadcrumbs.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/breadcrumbs/breadcrumbs.scss ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* COLOURS */\n/* BORDERS */\n/* HOVER */\n/* FORMS */\n/* BUTTONS */\n/* MEDIA BREAKPOINTS */\n/* STYLES */\n:host {\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.2em; }\n\n* {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh1, h2, h3, h4, h5, h6 {\n  color: #333536;\n  font-weight: normal;\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh2 {\n  font-size: 1.6em;\n  font-weight: 500;\n  line-height: 1.8em; }\n\nh3 {\n  font-size: 1.4em;\n  font-weight: 300;\n  line-height: 1.6em;\n  margin-bottom: 0; }\n\nh4 {\n  font-weight: 300;\n  font-size: 1.2em;\n  line-height: 1.4em; }\n\na, a:visited {\n  color: #3563b3; }\n  a:hover, a:visited:hover {\n    text-decoration: none; }\n\n.center {\n  text-align: center; }\n\n.noOpacity {\n  opacity: 0; }\n\n.fadeIn {\n  transition: all 0.5s linear;\n  opacity: 1; }\n\n@media (display-mode: fullscreen) {\n  div.container {\n    height: 100vh;\n    width: 100vw; } }\n\nwc-breadcrumbs {\n  display: block;\n  margin-bottom: 20px;\n  color: #9d9d9d;\n  margin-left: -8px; }\n  wc-breadcrumbs div.breadcrumbs-container {\n    display: flex; }\n    wc-breadcrumbs div.breadcrumbs-container wc-icon-button, wc-breadcrumbs div.breadcrumbs-container span {\n      margin: auto 0; }\n    wc-breadcrumbs div.breadcrumbs-container wc-icon-button:hover {\n      background-color: transparent; }\n    wc-breadcrumbs div.breadcrumbs-container span:hover {\n      text-decoration: underline;\n      cursor: pointer; }\n    wc-breadcrumbs div.breadcrumbs-container span.break {\n      display: inline-block;\n      margin: auto 20px auto 10px; }\n    wc-breadcrumbs div.breadcrumbs-container span.break:hover, wc-breadcrumbs div.breadcrumbs-container span.last:hover {\n      text-decoration: none;\n      cursor: initial; }\n\n:host {\n  display: block;\n  margin-bottom: 20px;\n  color: #9d9d9d;\n  margin-left: -8px; }\n  :host div.breadcrumbs-container {\n    display: flex; }\n    :host div.breadcrumbs-container wc-icon-button, :host div.breadcrumbs-container span {\n      margin: auto 0; }\n    :host div.breadcrumbs-container wc-icon-button:hover {\n      background-color: transparent; }\n    :host div.breadcrumbs-container span:hover {\n      text-decoration: underline;\n      cursor: pointer; }\n    :host div.breadcrumbs-container span.break {\n      display: inline-block;\n      margin: auto 20px auto 10px; }\n    :host div.breadcrumbs-container span.break:hover, :host div.breadcrumbs-container span.last:hover {\n      text-decoration: none;\n      cursor: initial; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/button/button.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/button/button.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* COLOURS */\n/* BORDERS */\n/* HOVER */\n/* FORMS */\n/* BUTTONS */\n/* MEDIA BREAKPOINTS */\n/* STYLES */\n:host {\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.2em; }\n\n* {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh1, h2, h3, h4, h5, h6 {\n  color: #333536;\n  font-weight: normal;\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh2 {\n  font-size: 1.6em;\n  font-weight: 500;\n  line-height: 1.8em; }\n\nh3 {\n  font-size: 1.4em;\n  font-weight: 300;\n  line-height: 1.6em;\n  margin-bottom: 0; }\n\nh4 {\n  font-weight: 300;\n  font-size: 1.2em;\n  line-height: 1.4em; }\n\na, a:visited {\n  color: #3563b3; }\n  a:hover, a:visited:hover {\n    text-decoration: none; }\n\n.center {\n  text-align: center; }\n\n.noOpacity {\n  opacity: 0; }\n\n.fadeIn {\n  transition: all 0.5s linear;\n  opacity: 1; }\n\n@media (display-mode: fullscreen) {\n  div.container {\n    height: 100vh;\n    width: 100vw; } }\n\n@-webkit-keyframes spin {\n  from {\n    -webkit-transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(360deg); } }\n\nwc-button {\n  display: block;\n  margin-bottom: 20px; }\n  wc-button div.button-container button {\n    border: 0;\n    font-size: inherit;\n    border-radius: 4px;\n    display: flex;\n    outline: 0;\n    min-height: 44px;\n    margin: auto;\n    text-align: center;\n    color: #333536;\n    background-color: #FFA630; }\n    wc-button div.button-container button.left-icon {\n      padding: 0 20px 0 0; }\n    wc-button div.button-container button slot {\n      width: 70%;\n      margin: auto;\n      display: block; }\n    wc-button div.button-container button wc-icon {\n      margin: auto !important; }\n    wc-button div.button-container button div.left-icon {\n      margin: auto 0; }\n      wc-button div.button-container button div.left-icon.left-align {\n        margin: auto 0 auto 0; }\n    wc-button div.button-container button div.right-icon {\n      margin: auto 0 auto auto; }\n    wc-button div.button-container button div.left-icon,\n    wc-button div.button-container button div.right-icon {\n      width: 40px; }\n    wc-button div.button-container button:hover {\n      cursor: pointer; }\n    wc-button div.button-container button.primary {\n      color: #fff;\n      background-color: #003E1F; }\n      wc-button div.button-container button.primary div.left-icon,\n      wc-button div.button-container button.primary div.right-icon {\n        color: #fff; }\n    wc-button div.button-container button.cancel {\n      color: white;\n      background-color: #b3bec9; }\n      wc-button div.button-container button.cancel div.left-icon,\n      wc-button div.button-container button.cancel div.right-icon {\n        color: white; }\n    wc-button div.button-container button.danger {\n      color: white;\n      background-color: #d01a1b; }\n      wc-button div.button-container button.danger div.left-icon,\n      wc-button div.button-container button.danger div.right-icon {\n        color: white; }\n    wc-button div.button-container button.success {\n      color: white;\n      background-color: #32b148;\n      display: initial;\n      font-size: .8em;\n      padding: 5px 10px;\n      font-weight: 600; }\n      wc-button div.button-container button.success div.left-icon,\n      wc-button div.button-container button.success div.right-icon {\n        color: white; }\n    wc-button div.button-container button.transparent {\n      color: #333536;\n      background-color: transparent; }\n      wc-button div.button-container button.transparent div.left-icon,\n      wc-button div.button-container button.transparent div.right-icon {\n        color: #333536; }\n    wc-button div.button-container button.selected {\n      background-color: transparent; }\n\nwc-button[disabled] {\n  display: block;\n  margin-bottom: 20px; }\n  wc-button[disabled] div.button-container button {\n    border: 0;\n    font-size: inherit;\n    border-radius: 4px;\n    display: flex;\n    outline: 0;\n    min-height: 44px;\n    margin: auto;\n    text-align: center;\n    background-color: transparent;\n    color: #9d9d9d; }\n    wc-button[disabled] div.button-container button.left-icon {\n      padding: 0 20px 0 0; }\n    wc-button[disabled] div.button-container button slot {\n      width: 70%;\n      margin: auto;\n      display: block; }\n    wc-button[disabled] div.button-container button wc-icon {\n      margin: auto !important; }\n    wc-button[disabled] div.button-container button div.left-icon {\n      margin: auto 0; }\n      wc-button[disabled] div.button-container button div.left-icon.left-align {\n        margin: auto 0 auto 0; }\n    wc-button[disabled] div.button-container button div.right-icon {\n      margin: auto 0 auto auto; }\n    wc-button[disabled] div.button-container button div.left-icon,\n    wc-button[disabled] div.button-container button div.right-icon {\n      width: 40px; }\n    wc-button[disabled] div.button-container button:hover {\n      cursor: not-allowed; }\n\nwc-button[spin] {\n  display: block;\n  margin-bottom: 20px; }\n  wc-button[spin] div.button-container button {\n    border: 0;\n    font-size: inherit;\n    border-radius: 4px;\n    display: flex;\n    outline: 0;\n    min-height: 44px;\n    margin: auto;\n    text-align: center;\n    color: #333536;\n    background-color: #FFA630; }\n    wc-button[spin] div.button-container button.left-icon {\n      padding: 0 20px 0 0; }\n    wc-button[spin] div.button-container button slot {\n      width: 70%;\n      margin: auto;\n      display: block; }\n    wc-button[spin] div.button-container button wc-icon {\n      margin: auto !important; }\n    wc-button[spin] div.button-container button div.left-icon {\n      margin: auto 0; }\n      wc-button[spin] div.button-container button div.left-icon.left-align {\n        margin: auto 0 auto 0; }\n    wc-button[spin] div.button-container button div.right-icon {\n      margin: auto 0 auto auto; }\n    wc-button[spin] div.button-container button div.left-icon,\n    wc-button[spin] div.button-container button div.right-icon {\n      width: 40px; }\n    wc-button[spin] div.button-container button:hover {\n      cursor: pointer; }\n    wc-button[spin] div.button-container button.primary {\n      color: #fff;\n      background-color: #003E1F; }\n      wc-button[spin] div.button-container button.primary div.left-icon,\n      wc-button[spin] div.button-container button.primary div.right-icon {\n        color: #fff; }\n    wc-button[spin] div.button-container button.cancel {\n      color: white;\n      background-color: #b3bec9; }\n      wc-button[spin] div.button-container button.cancel div.left-icon,\n      wc-button[spin] div.button-container button.cancel div.right-icon {\n        color: white; }\n    wc-button[spin] div.button-container button.danger {\n      color: white;\n      background-color: #d01a1b; }\n      wc-button[spin] div.button-container button.danger div.left-icon,\n      wc-button[spin] div.button-container button.danger div.right-icon {\n        color: white; }\n    wc-button[spin] div.button-container button.success {\n      color: white;\n      background-color: #32b148;\n      display: initial;\n      font-size: .8em;\n      padding: 5px 10px;\n      font-weight: 600; }\n      wc-button[spin] div.button-container button.success div.left-icon,\n      wc-button[spin] div.button-container button.success div.right-icon {\n        color: white; }\n    wc-button[spin] div.button-container button.transparent {\n      color: #333536;\n      background-color: transparent; }\n      wc-button[spin] div.button-container button.transparent div.left-icon,\n      wc-button[spin] div.button-container button.transparent div.right-icon {\n        color: #333536; }\n    wc-button[spin] div.button-container button.selected {\n      background-color: transparent; }\n    wc-button[spin] div.button-container button:hover {\n      cursor: not-allowed !important; }\n\n:host {\n  display: block;\n  margin-bottom: 20px; }\n  :host div.button-container button {\n    border: 0;\n    font-size: inherit;\n    border-radius: 4px;\n    display: flex;\n    outline: 0;\n    min-height: 44px;\n    margin: auto;\n    text-align: center;\n    color: #333536;\n    background-color: #FFA630; }\n    :host div.button-container button.left-icon {\n      padding: 0 20px 0 0; }\n    :host div.button-container button slot {\n      width: 70%;\n      margin: auto;\n      display: block; }\n    :host div.button-container button wc-icon {\n      margin: auto !important; }\n    :host div.button-container button div.left-icon {\n      margin: auto 0; }\n      :host div.button-container button div.left-icon.left-align {\n        margin: auto 0 auto 0; }\n    :host div.button-container button div.right-icon {\n      margin: auto 0 auto auto; }\n    :host div.button-container button div.left-icon,\n    :host div.button-container button div.right-icon {\n      width: 40px; }\n    :host div.button-container button:hover {\n      cursor: pointer; }\n    :host div.button-container button.primary {\n      color: #fff;\n      background-color: #003E1F; }\n      :host div.button-container button.primary div.left-icon,\n      :host div.button-container button.primary div.right-icon {\n        color: #fff; }\n    :host div.button-container button.cancel {\n      color: white;\n      background-color: #b3bec9; }\n      :host div.button-container button.cancel div.left-icon,\n      :host div.button-container button.cancel div.right-icon {\n        color: white; }\n    :host div.button-container button.danger {\n      color: white;\n      background-color: #d01a1b; }\n      :host div.button-container button.danger div.left-icon,\n      :host div.button-container button.danger div.right-icon {\n        color: white; }\n    :host div.button-container button.success {\n      color: white;\n      background-color: #32b148;\n      display: initial;\n      font-size: .8em;\n      padding: 5px 10px;\n      font-weight: 600; }\n      :host div.button-container button.success div.left-icon,\n      :host div.button-container button.success div.right-icon {\n        color: white; }\n    :host div.button-container button.transparent {\n      color: #333536;\n      background-color: transparent; }\n      :host div.button-container button.transparent div.left-icon,\n      :host div.button-container button.transparent div.right-icon {\n        color: #333536; }\n    :host div.button-container button.selected {\n      background-color: transparent; }\n\n:host([disabled]) {\n  display: block;\n  margin-bottom: 20px; }\n  :host([disabled]) div.button-container button {\n    border: 0;\n    font-size: inherit;\n    border-radius: 4px;\n    display: flex;\n    outline: 0;\n    min-height: 44px;\n    margin: auto;\n    text-align: center;\n    background-color: transparent;\n    color: #9d9d9d; }\n    :host([disabled]) div.button-container button.left-icon {\n      padding: 0 20px 0 0; }\n    :host([disabled]) div.button-container button slot {\n      width: 70%;\n      margin: auto;\n      display: block; }\n    :host([disabled]) div.button-container button wc-icon {\n      margin: auto !important; }\n    :host([disabled]) div.button-container button div.left-icon {\n      margin: auto 0; }\n      :host([disabled]) div.button-container button div.left-icon.left-align {\n        margin: auto 0 auto 0; }\n    :host([disabled]) div.button-container button div.right-icon {\n      margin: auto 0 auto auto; }\n    :host([disabled]) div.button-container button div.left-icon,\n    :host([disabled]) div.button-container button div.right-icon {\n      width: 40px; }\n    :host([disabled]) div.button-container button:hover {\n      cursor: not-allowed; }\n\n:host([spin]) {\n  display: block;\n  margin-bottom: 20px; }\n  :host([spin]) div.button-container button {\n    border: 0;\n    font-size: inherit;\n    border-radius: 4px;\n    display: flex;\n    outline: 0;\n    min-height: 44px;\n    margin: auto;\n    text-align: center;\n    color: #333536;\n    background-color: #FFA630; }\n    :host([spin]) div.button-container button.left-icon {\n      padding: 0 20px 0 0; }\n    :host([spin]) div.button-container button slot {\n      width: 70%;\n      margin: auto;\n      display: block; }\n    :host([spin]) div.button-container button wc-icon {\n      margin: auto !important; }\n    :host([spin]) div.button-container button div.left-icon {\n      margin: auto 0; }\n      :host([spin]) div.button-container button div.left-icon.left-align {\n        margin: auto 0 auto 0; }\n    :host([spin]) div.button-container button div.right-icon {\n      margin: auto 0 auto auto; }\n    :host([spin]) div.button-container button div.left-icon,\n    :host([spin]) div.button-container button div.right-icon {\n      width: 40px; }\n    :host([spin]) div.button-container button:hover {\n      cursor: pointer; }\n    :host([spin]) div.button-container button.primary {\n      color: #fff;\n      background-color: #003E1F; }\n      :host([spin]) div.button-container button.primary div.left-icon,\n      :host([spin]) div.button-container button.primary div.right-icon {\n        color: #fff; }\n    :host([spin]) div.button-container button.cancel {\n      color: white;\n      background-color: #b3bec9; }\n      :host([spin]) div.button-container button.cancel div.left-icon,\n      :host([spin]) div.button-container button.cancel div.right-icon {\n        color: white; }\n    :host([spin]) div.button-container button.danger {\n      color: white;\n      background-color: #d01a1b; }\n      :host([spin]) div.button-container button.danger div.left-icon,\n      :host([spin]) div.button-container button.danger div.right-icon {\n        color: white; }\n    :host([spin]) div.button-container button.success {\n      color: white;\n      background-color: #32b148;\n      display: initial;\n      font-size: .8em;\n      padding: 5px 10px;\n      font-weight: 600; }\n      :host([spin]) div.button-container button.success div.left-icon,\n      :host([spin]) div.button-container button.success div.right-icon {\n        color: white; }\n    :host([spin]) div.button-container button.transparent {\n      color: #333536;\n      background-color: transparent; }\n      :host([spin]) div.button-container button.transparent div.left-icon,\n      :host([spin]) div.button-container button.transparent div.right-icon {\n        color: #333536; }\n    :host([spin]) div.button-container button.selected {\n      background-color: transparent; }\n    :host([spin]) div.button-container button:hover {\n      cursor: not-allowed !important; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/dashboard-panel/dashboard-panel.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/dashboard-panel/dashboard-panel.scss ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* COLOURS */\n/* BORDERS */\n/* HOVER */\n/* FORMS */\n/* BUTTONS */\n/* MEDIA BREAKPOINTS */\n/* STYLES */\n:host {\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.2em; }\n\n* {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh1, h2, h3, h4, h5, h6 {\n  color: #333536;\n  font-weight: normal;\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh2 {\n  font-size: 1.6em;\n  font-weight: 500;\n  line-height: 1.8em; }\n\nh3 {\n  font-size: 1.4em;\n  font-weight: 300;\n  line-height: 1.6em;\n  margin-bottom: 0; }\n\nh4 {\n  font-weight: 300;\n  font-size: 1.2em;\n  line-height: 1.4em; }\n\na, a:visited {\n  color: #3563b3; }\n  a:hover, a:visited:hover {\n    text-decoration: none; }\n\n.center {\n  text-align: center; }\n\n.noOpacity {\n  opacity: 0; }\n\n.fadeIn {\n  transition: all 0.5s linear;\n  opacity: 1; }\n\n@media (display-mode: fullscreen) {\n  div.container {\n    height: 100vh;\n    width: 100vw; } }\n\n/* FONTS */\n/* BACKGROUND */\n/* COLOURS */\n/* BORDERS */\n/* HOVER */\n/* FORMS */\n/* BUTTONS */\n/* MEDIA BREAKPOINTS */\n/* STYLES */\n:host {\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.2em; }\n\n* {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh1, h2, h3, h4, h5, h6 {\n  color: #333536;\n  font-weight: normal;\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh2 {\n  font-size: 1.6em;\n  font-weight: 500;\n  line-height: 1.8em; }\n\nh3 {\n  font-size: 1.4em;\n  font-weight: 300;\n  line-height: 1.6em;\n  margin-bottom: 0; }\n\nh4 {\n  font-weight: 300;\n  font-size: 1.2em;\n  line-height: 1.4em; }\n\na, a:visited {\n  color: #3563b3; }\n  a:hover, a:visited:hover {\n    text-decoration: none; }\n\n.center {\n  text-align: center; }\n\n.noOpacity {\n  opacity: 0; }\n\n.fadeIn {\n  transition: all 0.5s linear;\n  opacity: 1; }\n\n@media (display-mode: fullscreen) {\n  div.container {\n    height: 100vh;\n    width: 100vw; } }\n\ndiv.container {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden; }\n  div.container h1 {\n    margin-top: 0; }\n  div.container div.content {\n    padding: 10px 40px 20px;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    height: 100vh; }\n    div.container div.content h1 {\n      font-size: 2.5em; }\n    div.container div.content p, div.container div.content ul li {\n      margin-top: 0;\n      color: #333536;\n      font-size: 1.1em;\n      line-height: 1.4em; }\n\nwc-dashboard-panel div.dashboard-panel-container {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  padding: 20px;\n  background-color: white;\n  min-height: 350px;\n  margin-bottom: 20px; }\n  wc-dashboard-panel div.dashboard-panel-container div.heading {\n    display: flex;\n    color: #333536;\n    margin-bottom: 20px; }\n    wc-dashboard-panel div.dashboard-panel-container div.heading wc-icon {\n      margin: auto 10px auto 0; }\n    wc-dashboard-panel div.dashboard-panel-container div.heading h3 {\n      margin: auto 0; }\n  wc-dashboard-panel div.dashboard-panel-container div.stat {\n    display: flex;\n    width: 100%;\n    margin-bottom: 20px;\n    border-bottom: 1px solid #d9d9d9;\n    padding: 10px 0; }\n    wc-dashboard-panel div.dashboard-panel-container div.stat.alert {\n      color: #d01a1b; }\n    wc-dashboard-panel div.dashboard-panel-container div.stat div.label {\n      display: flex;\n      margin: auto auto auto 0; }\n      wc-dashboard-panel div.dashboard-panel-container div.stat div.label wc-icon {\n        margin: auto 10px auto 0; }\n      wc-dashboard-panel div.dashboard-panel-container div.stat div.label p {\n        margin: auto auto auto 0; }\n        wc-dashboard-panel div.dashboard-panel-container div.stat div.label p span {\n          color: #9d9d9d;\n          font-size: 0.8em; }\n    wc-dashboard-panel div.dashboard-panel-container div.stat div.val {\n      margin: auto 0 auto auto; }\n      wc-dashboard-panel div.dashboard-panel-container div.stat div.val p {\n        margin: auto; }\n        wc-dashboard-panel div.dashboard-panel-container div.stat div.val p span {\n          color: #9d9d9d;\n          font-size: 0.8em; }\n  wc-dashboard-panel div.dashboard-panel-container wc-button {\n    width: 40%;\n    font-size: 0.8em;\n    margin: 0 0 0 auto; }\n\n:host div.dashboard-panel-container {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  padding: 20px;\n  background-color: white;\n  min-height: 350px;\n  margin-bottom: 20px; }\n  :host div.dashboard-panel-container div.heading {\n    display: flex;\n    color: #333536;\n    margin-bottom: 20px; }\n    :host div.dashboard-panel-container div.heading wc-icon {\n      margin: auto 10px auto 0; }\n    :host div.dashboard-panel-container div.heading h3 {\n      margin: auto 0; }\n  :host div.dashboard-panel-container div.stat {\n    display: flex;\n    width: 100%;\n    margin-bottom: 20px;\n    border-bottom: 1px solid #d9d9d9;\n    padding: 10px 0; }\n    :host div.dashboard-panel-container div.stat.alert {\n      color: #d01a1b; }\n    :host div.dashboard-panel-container div.stat div.label {\n      display: flex;\n      margin: auto auto auto 0; }\n      :host div.dashboard-panel-container div.stat div.label wc-icon {\n        margin: auto 10px auto 0; }\n      :host div.dashboard-panel-container div.stat div.label p {\n        margin: auto auto auto 0; }\n        :host div.dashboard-panel-container div.stat div.label p span {\n          color: #9d9d9d;\n          font-size: 0.8em; }\n    :host div.dashboard-panel-container div.stat div.val {\n      margin: auto 0 auto auto; }\n      :host div.dashboard-panel-container div.stat div.val p {\n        margin: auto; }\n        :host div.dashboard-panel-container div.stat div.val p span {\n          color: #9d9d9d;\n          font-size: 0.8em; }\n  :host div.dashboard-panel-container wc-button {\n    width: 40%;\n    font-size: 0.8em;\n    margin: 0 0 0 auto; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/icon-button/icon-button.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/icon-button/icon-button.scss ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* COLOURS */\n/* BORDERS */\n/* HOVER */\n/* FORMS */\n/* BUTTONS */\n/* MEDIA BREAKPOINTS */\n/* STYLES */\n:host {\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.2em; }\n\n* {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh1, h2, h3, h4, h5, h6 {\n  color: #333536;\n  font-weight: normal;\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh2 {\n  font-size: 1.6em;\n  font-weight: 500;\n  line-height: 1.8em; }\n\nh3 {\n  font-size: 1.4em;\n  font-weight: 300;\n  line-height: 1.6em;\n  margin-bottom: 0; }\n\nh4 {\n  font-weight: 300;\n  font-size: 1.2em;\n  line-height: 1.4em; }\n\na, a:visited {\n  color: #3563b3; }\n  a:hover, a:visited:hover {\n    text-decoration: none; }\n\n.center {\n  text-align: center; }\n\n.noOpacity {\n  opacity: 0; }\n\n.fadeIn {\n  transition: all 0.5s linear;\n  opacity: 1; }\n\n@media (display-mode: fullscreen) {\n  div.container {\n    height: 100vh;\n    width: 100vw; } }\n\nwc-icon-button {\n  display: block;\n  height: 40px;\n  width: 40px;\n  color: inherit;\n  position: relative; }\n  wc-icon-button button {\n    position: relative;\n    background: transparent;\n    color: inherit;\n    border: 1px solid transparent;\n    border-radius: 50%;\n    font-size: inherit;\n    font-weight: inherit;\n    outline: none;\n    cursor: pointer;\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n    display: flex; }\n    wc-icon-button button:disabled {\n      cursor: not-allowed; }\n    wc-icon-button button wc-icon {\n      margin: auto; }\n    wc-icon-button button:hover {\n      background-color: rgba(0, 0, 0, 0.2); }\n  wc-icon-button div.hover-text {\n    position: absolute;\n    top: 55%;\n    left: 70%;\n    background-color: #333536;\n    border-radius: 4px;\n    padding: 3px 7px;\n    visibility: hidden;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n    wc-icon-button div.hover-text.visible {\n      visibility: visible; }\n    wc-icon-button div.hover-text p {\n      margin: 0;\n      font-size: 0.7em;\n      color: white;\n      text-align: center;\n      white-space: nowrap; }\n\n:host {\n  display: block;\n  height: 40px;\n  width: 40px;\n  color: inherit;\n  position: relative; }\n  :host button {\n    position: relative;\n    background: transparent;\n    color: inherit;\n    border: 1px solid transparent;\n    border-radius: 50%;\n    font-size: inherit;\n    font-weight: inherit;\n    outline: none;\n    cursor: pointer;\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n    display: flex; }\n    :host button:disabled {\n      cursor: not-allowed; }\n    :host button wc-icon {\n      margin: auto; }\n    :host button:hover {\n      background-color: rgba(0, 0, 0, 0.2); }\n  :host div.hover-text {\n    position: absolute;\n    top: 55%;\n    left: 70%;\n    background-color: #333536;\n    border-radius: 4px;\n    padding: 3px 7px;\n    visibility: hidden;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n    :host div.hover-text.visible {\n      visibility: visible; }\n    :host div.hover-text p {\n      margin: 0;\n      font-size: 0.7em;\n      color: white;\n      text-align: center;\n      white-space: nowrap; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/icon/icon.scss":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/icon/icon.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes spin {\n  from {\n    -webkit-transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(360deg); } }\n\nwc-icon {\n  display: flex; }\n  wc-icon svg {\n    margin: auto; }\n\nwc-icon[spin] {\n  -webkit-animation: spin 1s infinite linear;\n  -moz-animation: spin, 1s, infinite linear;\n  -o-animation: spin 1s infinite linear;\n  animation: spin 1s infinite linear;\n  display: flex; }\n  wc-icon[spin] svg {\n    margin: auto; }\n\n:host {\n  display: flex; }\n  :host svg {\n    margin: auto; }\n\n:host([spin]) {\n  -webkit-animation: spin 1s infinite linear;\n  -moz-animation: spin, 1s, infinite linear;\n  -o-animation: spin 1s infinite linear;\n  animation: spin 1s infinite linear;\n  display: flex; }\n  :host([spin]) svg {\n    margin: auto; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/latest-events/latest-events.scss":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/latest-events/latest-events.scss ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* COLOURS */\n/* BORDERS */\n/* HOVER */\n/* FORMS */\n/* BUTTONS */\n/* MEDIA BREAKPOINTS */\n/* STYLES */\n:host {\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.2em; }\n\n* {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh1, h2, h3, h4, h5, h6 {\n  color: #333536;\n  font-weight: normal;\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh2 {\n  font-size: 1.6em;\n  font-weight: 500;\n  line-height: 1.8em; }\n\nh3 {\n  font-size: 1.4em;\n  font-weight: 300;\n  line-height: 1.6em;\n  margin-bottom: 0; }\n\nh4 {\n  font-weight: 300;\n  font-size: 1.2em;\n  line-height: 1.4em; }\n\na, a:visited {\n  color: #3563b3; }\n  a:hover, a:visited:hover {\n    text-decoration: none; }\n\n.center {\n  text-align: center; }\n\n.noOpacity {\n  opacity: 0; }\n\n.fadeIn {\n  transition: all 0.5s linear;\n  opacity: 1; }\n\n@media (display-mode: fullscreen) {\n  div.container {\n    height: 100vh;\n    width: 100vw; } }\n\nwc-latest-events div.latest-events-container {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  background-color: white;\n  padding: 20px 0 0;\n  margin-bottom: 20px; }\n  wc-latest-events div.latest-events-container div.heading {\n    display: flex;\n    padding: 0 20px;\n    color: #333536;\n    margin-bottom: 20px; }\n    wc-latest-events div.latest-events-container div.heading wc-icon {\n      margin: auto 10px auto 0; }\n    wc-latest-events div.latest-events-container div.heading h3 {\n      margin: auto 0; }\n  wc-latest-events div.latest-events-container div.event {\n    display: flex;\n    width: 100%;\n    border-top: 1px solid #d9d9d9;\n    padding: 20px; }\n    wc-latest-events div.latest-events-container div.event:hover {\n      background-color: #f3f3f3;\n      cursor: pointer; }\n    wc-latest-events div.latest-events-container div.event img {\n      width: 25px;\n      height: 25px;\n      border-radius: 50%;\n      margin: auto 10px auto 0; }\n    wc-latest-events div.latest-events-container div.event p {\n      margin: auto auto auto 0; }\n      wc-latest-events div.latest-events-container div.event p span {\n        color: #9d9d9d;\n        font-size: 0.8em; }\n      wc-latest-events div.latest-events-container div.event p.ts {\n        margin: auto 0 auto auto;\n        color: #9d9d9d;\n        font-style: italic; }\n\n:host div.latest-events-container {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  background-color: white;\n  padding: 20px 0 0;\n  margin-bottom: 20px; }\n  :host div.latest-events-container div.heading {\n    display: flex;\n    padding: 0 20px;\n    color: #333536;\n    margin-bottom: 20px; }\n    :host div.latest-events-container div.heading wc-icon {\n      margin: auto 10px auto 0; }\n    :host div.latest-events-container div.heading h3 {\n      margin: auto 0; }\n  :host div.latest-events-container div.event {\n    display: flex;\n    width: 100%;\n    border-top: 1px solid #d9d9d9;\n    padding: 20px; }\n    :host div.latest-events-container div.event:hover {\n      background-color: #f3f3f3;\n      cursor: pointer; }\n    :host div.latest-events-container div.event img {\n      width: 25px;\n      height: 25px;\n      border-radius: 50%;\n      margin: auto 10px auto 0; }\n    :host div.latest-events-container div.event p {\n      margin: auto auto auto 0; }\n      :host div.latest-events-container div.event p span {\n        color: #9d9d9d;\n        font-size: 0.8em; }\n      :host div.latest-events-container div.event p.ts {\n        margin: auto 0 auto auto;\n        color: #9d9d9d;\n        font-style: italic; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/main-menu/main-menu.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/main-menu/main-menu.scss ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* COLOURS */\n/* BORDERS */\n/* HOVER */\n/* FORMS */\n/* BUTTONS */\n/* MEDIA BREAKPOINTS */\n/* STYLES */\n:host {\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.2em; }\n\n* {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh1, h2, h3, h4, h5, h6 {\n  color: #333536;\n  font-weight: normal;\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh2 {\n  font-size: 1.6em;\n  font-weight: 500;\n  line-height: 1.8em; }\n\nh3 {\n  font-size: 1.4em;\n  font-weight: 300;\n  line-height: 1.6em;\n  margin-bottom: 0; }\n\nh4 {\n  font-weight: 300;\n  font-size: 1.2em;\n  line-height: 1.4em; }\n\na, a:visited {\n  color: #3563b3; }\n  a:hover, a:visited:hover {\n    text-decoration: none; }\n\n.center {\n  text-align: center; }\n\n.noOpacity {\n  opacity: 0; }\n\n.fadeIn {\n  transition: all 0.5s linear;\n  opacity: 1; }\n\n@media (display-mode: fullscreen) {\n  div.container {\n    height: 100vh;\n    width: 100vw; } }\n\nwc-main-menu {\n  display: block;\n  height: 100%;\n  min-width: 60px;\n  width: 60px; }\n  wc-main-menu div.main-menu-container {\n    width: 100%;\n    height: 100%;\n    border-right: 1px solid #d9d9d9;\n    background-color: #FFA630;\n    display: flex;\n    flex-direction: column;\n    padding: 10px 0;\n    color: #333536; }\n    wc-main-menu div.main-menu-container div.actions {\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n      justify-content: flex-start; }\n      wc-main-menu div.main-menu-container div.actions wc-icon-button {\n        margin: 0 auto 20px; }\n      wc-main-menu div.main-menu-container div.actions div.bottom {\n        margin: auto auto 10px; }\n        wc-main-menu div.main-menu-container div.actions div.bottom wc-icon-button:last-child {\n          margin: 0 auto 10px; }\n    wc-main-menu div.main-menu-container wc-settings-menu {\n      margin: auto auto 0; }\n\n:host {\n  display: block;\n  height: 100%;\n  min-width: 60px;\n  width: 60px; }\n  :host div.main-menu-container {\n    width: 100%;\n    height: 100%;\n    border-right: 1px solid #d9d9d9;\n    background-color: #FFA630;\n    display: flex;\n    flex-direction: column;\n    padding: 10px 0;\n    color: #333536; }\n    :host div.main-menu-container div.actions {\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n      justify-content: flex-start; }\n      :host div.main-menu-container div.actions wc-icon-button {\n        margin: 0 auto 20px; }\n      :host div.main-menu-container div.actions div.bottom {\n        margin: auto auto 10px; }\n        :host div.main-menu-container div.actions div.bottom wc-icon-button:last-child {\n          margin: 0 auto 10px; }\n    :host div.main-menu-container wc-settings-menu {\n      margin: auto auto 0; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/modal/modal.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/modal/modal.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* COLOURS */\n/* BORDERS */\n/* HOVER */\n/* FORMS */\n/* BUTTONS */\n/* MEDIA BREAKPOINTS */\n/* STYLES */\n:host {\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.2em; }\n\n* {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh1, h2, h3, h4, h5, h6 {\n  color: #333536;\n  font-weight: normal;\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh2 {\n  font-size: 1.6em;\n  font-weight: 500;\n  line-height: 1.8em; }\n\nh3 {\n  font-size: 1.4em;\n  font-weight: 300;\n  line-height: 1.6em;\n  margin-bottom: 0; }\n\nh4 {\n  font-weight: 300;\n  font-size: 1.2em;\n  line-height: 1.4em; }\n\na, a:visited {\n  color: #3563b3; }\n  a:hover, a:visited:hover {\n    text-decoration: none; }\n\n.center {\n  text-align: center; }\n\n.noOpacity {\n  opacity: 0; }\n\n.fadeIn {\n  transition: all 0.5s linear;\n  opacity: 1; }\n\n@media (display-mode: fullscreen) {\n  div.container {\n    height: 100vh;\n    width: 100vw; } }\n\nwc-modal {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw; }\n  wc-modal div.modal-container {\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.4);\n    display: flex; }\n    wc-modal div.modal-container div.inner-modal-container {\n      background-color: white;\n      border-radius: 10px;\n      width: 80vw;\n      margin: auto;\n      padding: 20px;\n      display: flex;\n      flex-direction: column; }\n      wc-modal div.modal-container div.inner-modal-container h2 {\n        margin: 0;\n        text-align: center; }\n      wc-modal div.modal-container div.inner-modal-container p {\n        text-align: center;\n        margin: 20px 0 30px; }\n      wc-modal div.modal-container div.inner-modal-container div.buttons {\n        width: 100%;\n        margin: auto auto 0; }\n        wc-modal div.modal-container div.inner-modal-container div.buttons wc-wellbeing-button:last-child {\n          margin-bottom: 0; }\n\nwc-modal[show] {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw; }\n  wc-modal[show] div.modal-container {\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.4);\n    display: flex; }\n    wc-modal[show] div.modal-container div.inner-modal-container {\n      background-color: white;\n      border-radius: 10px;\n      width: 80vw;\n      margin: auto;\n      padding: 20px;\n      display: flex;\n      flex-direction: column; }\n      wc-modal[show] div.modal-container div.inner-modal-container h2 {\n        margin: 0;\n        text-align: center; }\n      wc-modal[show] div.modal-container div.inner-modal-container p {\n        text-align: center;\n        margin: 20px 0 30px; }\n      wc-modal[show] div.modal-container div.inner-modal-container div.buttons {\n        width: 100%;\n        margin: auto auto 0; }\n        wc-modal[show] div.modal-container div.inner-modal-container div.buttons wc-wellbeing-button:last-child {\n          margin-bottom: 0; }\n\n:host {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw; }\n  :host div.modal-container {\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.4);\n    display: flex; }\n    :host div.modal-container div.inner-modal-container {\n      background-color: white;\n      border-radius: 10px;\n      width: 80vw;\n      margin: auto;\n      padding: 20px;\n      display: flex;\n      flex-direction: column; }\n      :host div.modal-container div.inner-modal-container h2 {\n        margin: 0;\n        text-align: center; }\n      :host div.modal-container div.inner-modal-container p {\n        text-align: center;\n        margin: 20px 0 30px; }\n      :host div.modal-container div.inner-modal-container div.buttons {\n        width: 100%;\n        margin: auto auto 0; }\n        :host div.modal-container div.inner-modal-container div.buttons wc-wellbeing-button:last-child {\n          margin-bottom: 0; }\n\n:host([show]) {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw; }\n  :host([show]) div.modal-container {\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.4);\n    display: flex; }\n    :host([show]) div.modal-container div.inner-modal-container {\n      background-color: white;\n      border-radius: 10px;\n      width: 80vw;\n      margin: auto;\n      padding: 20px;\n      display: flex;\n      flex-direction: column; }\n      :host([show]) div.modal-container div.inner-modal-container h2 {\n        margin: 0;\n        text-align: center; }\n      :host([show]) div.modal-container div.inner-modal-container p {\n        text-align: center;\n        margin: 20px 0 30px; }\n      :host([show]) div.modal-container div.inner-modal-container div.buttons {\n        width: 100%;\n        margin: auto auto 0; }\n        :host([show]) div.modal-container div.inner-modal-container div.buttons wc-wellbeing-button:last-child {\n          margin-bottom: 0; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/new-prospect-contact-modal/new-prospect-contact-modal.scss":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/new-prospect-contact-modal/new-prospect-contact-modal.scss ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* COLOURS */\n/* BORDERS */\n/* HOVER */\n/* FORMS */\n/* BUTTONS */\n/* MEDIA BREAKPOINTS */\n/* STYLES */\n:host {\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.2em; }\n\n* {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh1, h2, h3, h4, h5, h6 {\n  color: #333536;\n  font-weight: normal;\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh2 {\n  font-size: 1.6em;\n  font-weight: 500;\n  line-height: 1.8em; }\n\nh3 {\n  font-size: 1.4em;\n  font-weight: 300;\n  line-height: 1.6em;\n  margin-bottom: 0; }\n\nh4 {\n  font-weight: 300;\n  font-size: 1.2em;\n  line-height: 1.4em; }\n\na, a:visited {\n  color: #3563b3; }\n  a:hover, a:visited:hover {\n    text-decoration: none; }\n\n.center {\n  text-align: center; }\n\n.noOpacity {\n  opacity: 0; }\n\n.fadeIn {\n  transition: all 0.5s linear;\n  opacity: 1; }\n\n@media (display-mode: fullscreen) {\n  div.container {\n    height: 100vh;\n    width: 100vw; } }\n\nwc-new-prospect-contact-modal {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw; }\n  wc-new-prospect-contact-modal div.new-prospect-contact-modal-container {\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.4);\n    display: flex; }\n    wc-new-prospect-contact-modal div.new-prospect-contact-modal-container div.inner-modal-container {\n      background-color: white;\n      border-radius: 10px;\n      width: 80vw;\n      margin: auto;\n      padding: 20px;\n      display: flex;\n      flex-direction: column; }\n      wc-new-prospect-contact-modal div.new-prospect-contact-modal-container div.inner-modal-container h2 {\n        margin: 0;\n        text-align: center; }\n      wc-new-prospect-contact-modal div.new-prospect-contact-modal-container div.inner-modal-container p {\n        text-align: center;\n        margin: 20px 0 30px; }\n      wc-new-prospect-contact-modal div.new-prospect-contact-modal-container div.inner-modal-container div.buttons {\n        width: 100%;\n        margin: auto auto 0; }\n        wc-new-prospect-contact-modal div.new-prospect-contact-modal-container div.inner-modal-container div.buttons wc-wellbeing-button:last-child {\n          margin-bottom: 0; }\n\n:host {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw; }\n  :host div.new-prospect-contact-modal-container {\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.4);\n    display: flex; }\n    :host div.new-prospect-contact-modal-container div.inner-modal-container {\n      background-color: white;\n      border-radius: 10px;\n      width: 80vw;\n      margin: auto;\n      padding: 20px;\n      display: flex;\n      flex-direction: column; }\n      :host div.new-prospect-contact-modal-container div.inner-modal-container h2 {\n        margin: 0;\n        text-align: center; }\n      :host div.new-prospect-contact-modal-container div.inner-modal-container p {\n        text-align: center;\n        margin: 20px 0 30px; }\n      :host div.new-prospect-contact-modal-container div.inner-modal-container div.buttons {\n        width: 100%;\n        margin: auto auto 0; }\n        :host div.new-prospect-contact-modal-container div.inner-modal-container div.buttons wc-wellbeing-button:last-child {\n          margin-bottom: 0; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/paginated-list/paginated-list.scss":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/paginated-list/paginated-list.scss ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* COLOURS */\n/* BORDERS */\n/* HOVER */\n/* FORMS */\n/* BUTTONS */\n/* MEDIA BREAKPOINTS */\n/* STYLES */\n:host {\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.2em; }\n\n* {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh1, h2, h3, h4, h5, h6 {\n  color: #333536;\n  font-weight: normal;\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh2 {\n  font-size: 1.6em;\n  font-weight: 500;\n  line-height: 1.8em; }\n\nh3 {\n  font-size: 1.4em;\n  font-weight: 300;\n  line-height: 1.6em;\n  margin-bottom: 0; }\n\nh4 {\n  font-weight: 300;\n  font-size: 1.2em;\n  line-height: 1.4em; }\n\na, a:visited {\n  color: #3563b3; }\n  a:hover, a:visited:hover {\n    text-decoration: none; }\n\n.center {\n  text-align: center; }\n\n.noOpacity {\n  opacity: 0; }\n\n.fadeIn {\n  transition: all 0.5s linear;\n  opacity: 1; }\n\n@media (display-mode: fullscreen) {\n  div.container {\n    height: 100vh;\n    width: 100vw; } }\n\nwc-list {\n  width: 100%; }\n  wc-list div.paginated-list-container div.list-header,\n  wc-list div.paginated-list-container div.list-row {\n    display: flex;\n    justify-content: flex-start;\n    padding: 0 20px;\n    cursor: pointer; }\n    wc-list div.paginated-list-container div.list-header div.list-col,\n    wc-list div.paginated-list-container div.list-row div.list-col {\n      display: flex;\n      margin: auto 0;\n      font-size: 0.9em; }\n      wc-list div.paginated-list-container div.list-header div.list-col span.light,\n      wc-list div.paginated-list-container div.list-row div.list-col span.light {\n        color: #9d9d9d;\n        font-size: 0.8em; }\n      wc-list div.paginated-list-container div.list-header div.list-col.sent-to,\n      wc-list div.paginated-list-container div.list-row div.list-col.sent-to {\n        width: 150px;\n        min-width: 150px;\n        margin-right: 5px; }\n        wc-list div.paginated-list-container div.list-header div.list-col.sent-to span,\n        wc-list div.paginated-list-container div.list-row div.list-col.sent-to span {\n          display: inline-block;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          text-align: left; }\n      wc-list div.paginated-list-container div.list-header div.list-col.prospect-type,\n      wc-list div.paginated-list-container div.list-row div.list-col.prospect-type {\n        width: 60px; }\n      wc-list div.paginated-list-container div.list-header div.list-col.prospect-name,\n      wc-list div.paginated-list-container div.list-row div.list-col.prospect-name {\n        width: 15%; }\n      wc-list div.paginated-list-container div.list-header div.list-col.prospect-address,\n      wc-list div.paginated-list-container div.list-row div.list-col.prospect-address {\n        width: 25%; }\n      wc-list div.paginated-list-container div.list-header div.list-col.prospect-city,\n      wc-list div.paginated-list-container div.list-row div.list-col.prospect-city {\n        width: 20%; }\n      wc-list div.paginated-list-container div.list-header div.list-col.prospect-quote,\n      wc-list div.paginated-list-container div.list-row div.list-col.prospect-quote {\n        width: 20%; }\n      wc-list div.paginated-list-container div.list-header div.list-col.select,\n      wc-list div.paginated-list-container div.list-row div.list-col.select {\n        width: 40px; }\n  wc-list div.paginated-list-container div.list-header {\n    background-color: #f3f3f3;\n    cursor: initial; }\n    wc-list div.paginated-list-container div.list-header div.list-col {\n      height: 30px; }\n      wc-list div.paginated-list-container div.list-header div.list-col span {\n        margin: auto 0;\n        color: #9d9d9d;\n        text-transform: uppercase;\n        font-size: 0.8em; }\n  wc-list div.paginated-list-container div.list-row {\n    border-bottom: 2px solid #eceff1;\n    height: 60px;\n    margin: auto 0; }\n    wc-list div.paginated-list-container div.list-row:hover {\n      background-color: #f3f3f3; }\n    wc-list div.paginated-list-container div.list-row.quote-blocked {\n      background-color: #fff4d3; }\n      wc-list div.paginated-list-container div.list-row.quote-blocked:hover {\n        background-color: #ffeeba; }\n      wc-list div.paginated-list-container div.list-row.quote-blocked div.list-col span {\n        color: #333536; }\n    wc-list div.paginated-list-container div.list-row.job-blocked {\n      background-color: #fdecec; }\n      wc-list div.paginated-list-container div.list-row.job-blocked:hover {\n        background-color: #fce3e3; }\n      wc-list div.paginated-list-container div.list-row.job-blocked div.list-col span {\n        color: #d01a1b; }\n    wc-list div.paginated-list-container div.list-row:last-child {\n      border-bottom: none; }\n    wc-list div.paginated-list-container div.list-row div.list-col {\n      color: #9d9d9d; }\n      wc-list div.paginated-list-container div.list-row div.list-col span {\n        color: #333536; }\n        wc-list div.paginated-list-container div.list-row div.list-col span.action {\n          background-color: #32b148;\n          color: white;\n          font-size: 0.8em;\n          padding: 3px 7px;\n          border-radius: 4px; }\n      wc-list div.paginated-list-container div.list-row div.list-col wc-icon {\n        margin: auto; }\n  wc-list div.paginated-list-container div.mail-pagination {\n    display: flex;\n    width: 100%;\n    height: 80px; }\n    wc-list div.paginated-list-container div.mail-pagination div.pagination-inner {\n      height: 100%;\n      display: flex;\n      justify-content: flex-start;\n      margin: auto; }\n      wc-list div.paginated-list-container div.mail-pagination div.pagination-inner wc-button {\n        margin: auto 2px;\n        flex: 0 0 auto; }\n  wc-list div.paginated-list-container p.size {\n    font-size: 0.8em;\n    color: #9d9d9d;\n    padding: 0 20px;\n    text-align: center; }\n\n:host {\n  width: 100%; }\n  :host div.paginated-list-container div.list-header,\n  :host div.paginated-list-container div.list-row {\n    display: flex;\n    justify-content: flex-start;\n    padding: 0 20px;\n    cursor: pointer; }\n    :host div.paginated-list-container div.list-header div.list-col,\n    :host div.paginated-list-container div.list-row div.list-col {\n      display: flex;\n      margin: auto 0;\n      font-size: 0.9em; }\n      :host div.paginated-list-container div.list-header div.list-col span.light,\n      :host div.paginated-list-container div.list-row div.list-col span.light {\n        color: #9d9d9d;\n        font-size: 0.8em; }\n      :host div.paginated-list-container div.list-header div.list-col.sent-to,\n      :host div.paginated-list-container div.list-row div.list-col.sent-to {\n        width: 150px;\n        min-width: 150px;\n        margin-right: 5px; }\n        :host div.paginated-list-container div.list-header div.list-col.sent-to span,\n        :host div.paginated-list-container div.list-row div.list-col.sent-to span {\n          display: inline-block;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          text-align: left; }\n      :host div.paginated-list-container div.list-header div.list-col.prospect-type,\n      :host div.paginated-list-container div.list-row div.list-col.prospect-type {\n        width: 60px; }\n      :host div.paginated-list-container div.list-header div.list-col.prospect-name,\n      :host div.paginated-list-container div.list-row div.list-col.prospect-name {\n        width: 15%; }\n      :host div.paginated-list-container div.list-header div.list-col.prospect-address,\n      :host div.paginated-list-container div.list-row div.list-col.prospect-address {\n        width: 25%; }\n      :host div.paginated-list-container div.list-header div.list-col.prospect-city,\n      :host div.paginated-list-container div.list-row div.list-col.prospect-city {\n        width: 20%; }\n      :host div.paginated-list-container div.list-header div.list-col.prospect-quote,\n      :host div.paginated-list-container div.list-row div.list-col.prospect-quote {\n        width: 20%; }\n      :host div.paginated-list-container div.list-header div.list-col.select,\n      :host div.paginated-list-container div.list-row div.list-col.select {\n        width: 40px; }\n  :host div.paginated-list-container div.list-header {\n    background-color: #f3f3f3;\n    cursor: initial; }\n    :host div.paginated-list-container div.list-header div.list-col {\n      height: 30px; }\n      :host div.paginated-list-container div.list-header div.list-col span {\n        margin: auto 0;\n        color: #9d9d9d;\n        text-transform: uppercase;\n        font-size: 0.8em; }\n  :host div.paginated-list-container div.list-row {\n    border-bottom: 2px solid #eceff1;\n    height: 60px;\n    margin: auto 0; }\n    :host div.paginated-list-container div.list-row:hover {\n      background-color: #f3f3f3; }\n    :host div.paginated-list-container div.list-row.quote-blocked {\n      background-color: #fff4d3; }\n      :host div.paginated-list-container div.list-row.quote-blocked:hover {\n        background-color: #ffeeba; }\n      :host div.paginated-list-container div.list-row.quote-blocked div.list-col span {\n        color: #333536; }\n    :host div.paginated-list-container div.list-row.job-blocked {\n      background-color: #fdecec; }\n      :host div.paginated-list-container div.list-row.job-blocked:hover {\n        background-color: #fce3e3; }\n      :host div.paginated-list-container div.list-row.job-blocked div.list-col span {\n        color: #d01a1b; }\n    :host div.paginated-list-container div.list-row:last-child {\n      border-bottom: none; }\n    :host div.paginated-list-container div.list-row div.list-col {\n      color: #9d9d9d; }\n      :host div.paginated-list-container div.list-row div.list-col span {\n        color: #333536; }\n        :host div.paginated-list-container div.list-row div.list-col span.action {\n          background-color: #32b148;\n          color: white;\n          font-size: 0.8em;\n          padding: 3px 7px;\n          border-radius: 4px; }\n      :host div.paginated-list-container div.list-row div.list-col wc-icon {\n        margin: auto; }\n  :host div.paginated-list-container div.mail-pagination {\n    display: flex;\n    width: 100%;\n    height: 80px; }\n    :host div.paginated-list-container div.mail-pagination div.pagination-inner {\n      height: 100%;\n      display: flex;\n      justify-content: flex-start;\n      margin: auto; }\n      :host div.paginated-list-container div.mail-pagination div.pagination-inner wc-button {\n        margin: auto 2px;\n        flex: 0 0 auto; }\n  :host div.paginated-list-container p.size {\n    font-size: 0.8em;\n    color: #9d9d9d;\n    padding: 0 20px;\n    text-align: center; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/prospect-add-edit/prospect-add-edit.scss":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/prospect-add-edit/prospect-add-edit.scss ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* COLOURS */\n/* BORDERS */\n/* HOVER */\n/* FORMS */\n/* BUTTONS */\n/* MEDIA BREAKPOINTS */\n/* STYLES */\n:host {\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.2em; }\n\n* {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh1, h2, h3, h4, h5, h6 {\n  color: #333536;\n  font-weight: normal;\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh2 {\n  font-size: 1.6em;\n  font-weight: 500;\n  line-height: 1.8em; }\n\nh3 {\n  font-size: 1.4em;\n  font-weight: 300;\n  line-height: 1.6em;\n  margin-bottom: 0; }\n\nh4 {\n  font-weight: 300;\n  font-size: 1.2em;\n  line-height: 1.4em; }\n\na, a:visited {\n  color: #3563b3; }\n  a:hover, a:visited:hover {\n    text-decoration: none; }\n\n.center {\n  text-align: center; }\n\n.noOpacity {\n  opacity: 0; }\n\n.fadeIn {\n  transition: all 0.5s linear;\n  opacity: 1; }\n\n@media (display-mode: fullscreen) {\n  div.container {\n    height: 100vh;\n    width: 100vw; } }\n\nwc-prospect-add-edit div.prospect-add-edit-container {\n  display: flex;\n  flex-direction: column; }\n  wc-prospect-add-edit div.prospect-add-edit-container div.detail-item {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    margin: auto 0 20px; }\n    wc-prospect-add-edit div.prospect-add-edit-container div.detail-item:last-child {\n      margin-right: 0; }\n    wc-prospect-add-edit div.prospect-add-edit-container div.detail-item.no-margin {\n      margin-bottom: 0; }\n    wc-prospect-add-edit div.prospect-add-edit-container div.detail-item label {\n      margin: auto 10px auto 0;\n      min-width: 150px; }\n    wc-prospect-add-edit div.prospect-add-edit-container div.detail-item input, wc-prospect-add-edit div.prospect-add-edit-container div.detail-item textarea {\n      font-size: 1em;\n      padding: 7px 10px;\n      border-radius: 4px;\n      border: 1px solid #d9d9d9;\n      flex: 1; }\n      wc-prospect-add-edit div.prospect-add-edit-container div.detail-item input:disabled, wc-prospect-add-edit div.prospect-add-edit-container div.detail-item textarea:disabled {\n        background-color: #d9d9d9;\n        color: #333536; }\n  wc-prospect-add-edit div.prospect-add-edit-container div.contact-heading {\n    display: flex;\n    align-items: center;\n    margin-bottom: 20px; }\n    wc-prospect-add-edit div.prospect-add-edit-container div.contact-heading h4 {\n      margin: auto 0; }\n    wc-prospect-add-edit div.prospect-add-edit-container div.contact-heading wc-icon-button {\n      margin: auto 0 auto auto; }\n  wc-prospect-add-edit div.prospect-add-edit-container div.divider {\n    margin: 10px 0 10px 160px; }\n    wc-prospect-add-edit div.prospect-add-edit-container div.divider hr {\n      display: block;\n      height: 1px;\n      border: 0;\n      border-top: 1px solid #d9d9d9;\n      margin: 1em 0;\n      padding: 0; }\n\n:host div.prospect-add-edit-container {\n  display: flex;\n  flex-direction: column; }\n  :host div.prospect-add-edit-container div.detail-item {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    margin: auto 0 20px; }\n    :host div.prospect-add-edit-container div.detail-item:last-child {\n      margin-right: 0; }\n    :host div.prospect-add-edit-container div.detail-item.no-margin {\n      margin-bottom: 0; }\n    :host div.prospect-add-edit-container div.detail-item label {\n      margin: auto 10px auto 0;\n      min-width: 150px; }\n    :host div.prospect-add-edit-container div.detail-item input, :host div.prospect-add-edit-container div.detail-item textarea {\n      font-size: 1em;\n      padding: 7px 10px;\n      border-radius: 4px;\n      border: 1px solid #d9d9d9;\n      flex: 1; }\n      :host div.prospect-add-edit-container div.detail-item input:disabled, :host div.prospect-add-edit-container div.detail-item textarea:disabled {\n        background-color: #d9d9d9;\n        color: #333536; }\n  :host div.prospect-add-edit-container div.contact-heading {\n    display: flex;\n    align-items: center;\n    margin-bottom: 20px; }\n    :host div.prospect-add-edit-container div.contact-heading h4 {\n      margin: auto 0; }\n    :host div.prospect-add-edit-container div.contact-heading wc-icon-button {\n      margin: auto 0 auto auto; }\n  :host div.prospect-add-edit-container div.divider {\n    margin: 10px 0 10px 160px; }\n    :host div.prospect-add-edit-container div.divider hr {\n      display: block;\n      height: 1px;\n      border: 0;\n      border-top: 1px solid #d9d9d9;\n      margin: 1em 0;\n      padding: 0; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/prospect-contact-list/prospect-contact-list.scss":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/prospect-contact-list/prospect-contact-list.scss ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* COLOURS */\n/* BORDERS */\n/* HOVER */\n/* FORMS */\n/* BUTTONS */\n/* MEDIA BREAKPOINTS */\n/* STYLES */\n:host {\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.2em; }\n\n* {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh1, h2, h3, h4, h5, h6 {\n  color: #333536;\n  font-weight: normal;\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh2 {\n  font-size: 1.6em;\n  font-weight: 500;\n  line-height: 1.8em; }\n\nh3 {\n  font-size: 1.4em;\n  font-weight: 300;\n  line-height: 1.6em;\n  margin-bottom: 0; }\n\nh4 {\n  font-weight: 300;\n  font-size: 1.2em;\n  line-height: 1.4em; }\n\na, a:visited {\n  color: #3563b3; }\n  a:hover, a:visited:hover {\n    text-decoration: none; }\n\n.center {\n  text-align: center; }\n\n.noOpacity {\n  opacity: 0; }\n\n.fadeIn {\n  transition: all 0.5s linear;\n  opacity: 1; }\n\n@media (display-mode: fullscreen) {\n  div.container {\n    height: 100vh;\n    width: 100vw; } }\n\nwc-prospect-contact-list div.prospect-contact-list-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start; }\n\n:host div.prospect-contact-list-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/prospects-panel/prospects-panel.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/prospects-panel/prospects-panel.scss ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* COLOURS */\n/* BORDERS */\n/* HOVER */\n/* FORMS */\n/* BUTTONS */\n/* MEDIA BREAKPOINTS */\n/* STYLES */\n:host {\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.2em; }\n\n* {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh1, h2, h3, h4, h5, h6 {\n  color: #333536;\n  font-weight: normal;\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh2 {\n  font-size: 1.6em;\n  font-weight: 500;\n  line-height: 1.8em; }\n\nh3 {\n  font-size: 1.4em;\n  font-weight: 300;\n  line-height: 1.6em;\n  margin-bottom: 0; }\n\nh4 {\n  font-weight: 300;\n  font-size: 1.2em;\n  line-height: 1.4em; }\n\na, a:visited {\n  color: #3563b3; }\n  a:hover, a:visited:hover {\n    text-decoration: none; }\n\n.center {\n  text-align: center; }\n\n.noOpacity {\n  opacity: 0; }\n\n.fadeIn {\n  transition: all 0.5s linear;\n  opacity: 1; }\n\n@media (display-mode: fullscreen) {\n  div.container {\n    height: 100vh;\n    width: 100vw; } }\n\nwc-prospects-panel div.prospects-panel-container {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  background-color: white;\n  padding: 20px;\n  margin-bottom: 20px; }\n  wc-prospects-panel div.prospects-panel-container div.heading {\n    display: flex;\n    color: #333536;\n    margin-bottom: 20px; }\n    wc-prospects-panel div.prospects-panel-container div.heading wc-icon {\n      margin: auto 10px auto 0; }\n    wc-prospects-panel div.prospects-panel-container div.heading h3 {\n      margin: auto 0; }\n  wc-prospects-panel div.prospects-panel-container div.stat {\n    display: flex;\n    width: 100%;\n    margin-bottom: 20px;\n    border-bottom: 1px solid #d9d9d9;\n    padding: 10px 0; }\n    wc-prospects-panel div.prospects-panel-container div.stat div.label {\n      margin: auto auto auto 0; }\n      wc-prospects-panel div.prospects-panel-container div.stat div.label p {\n        margin: auto auto auto 0; }\n        wc-prospects-panel div.prospects-panel-container div.stat div.label p span {\n          color: #9d9d9d;\n          font-size: 0.8em; }\n    wc-prospects-panel div.prospects-panel-container div.stat div.val {\n      margin: auto 0 auto auto; }\n      wc-prospects-panel div.prospects-panel-container div.stat div.val p {\n        margin: auto; }\n  wc-prospects-panel div.prospects-panel-container wc-button {\n    width: 40%;\n    font-size: 0.8em;\n    margin: 0 0 0 auto; }\n\n:host div.prospects-panel-container {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  background-color: white;\n  padding: 20px;\n  margin-bottom: 20px; }\n  :host div.prospects-panel-container div.heading {\n    display: flex;\n    color: #333536;\n    margin-bottom: 20px; }\n    :host div.prospects-panel-container div.heading wc-icon {\n      margin: auto 10px auto 0; }\n    :host div.prospects-panel-container div.heading h3 {\n      margin: auto 0; }\n  :host div.prospects-panel-container div.stat {\n    display: flex;\n    width: 100%;\n    margin-bottom: 20px;\n    border-bottom: 1px solid #d9d9d9;\n    padding: 10px 0; }\n    :host div.prospects-panel-container div.stat div.label {\n      margin: auto auto auto 0; }\n      :host div.prospects-panel-container div.stat div.label p {\n        margin: auto auto auto 0; }\n        :host div.prospects-panel-container div.stat div.label p span {\n          color: #9d9d9d;\n          font-size: 0.8em; }\n    :host div.prospects-panel-container div.stat div.val {\n      margin: auto 0 auto auto; }\n      :host div.prospects-panel-container div.stat div.val p {\n        margin: auto; }\n  :host div.prospects-panel-container wc-button {\n    width: 40%;\n    font-size: 0.8em;\n    margin: 0 0 0 auto; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/settings-menu/settings-menu.scss":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/settings-menu/settings-menu.scss ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* COLOURS */\n/* BORDERS */\n/* HOVER */\n/* FORMS */\n/* BUTTONS */\n/* MEDIA BREAKPOINTS */\n/* STYLES */\n:host {\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.2em; }\n\n* {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh1, h2, h3, h4, h5, h6 {\n  color: #333536;\n  font-weight: normal;\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh2 {\n  font-size: 1.6em;\n  font-weight: 500;\n  line-height: 1.8em; }\n\nh3 {\n  font-size: 1.4em;\n  font-weight: 300;\n  line-height: 1.6em;\n  margin-bottom: 0; }\n\nh4 {\n  font-weight: 300;\n  font-size: 1.2em;\n  line-height: 1.4em; }\n\na, a:visited {\n  color: #3563b3; }\n  a:hover, a:visited:hover {\n    text-decoration: none; }\n\n.center {\n  text-align: center; }\n\n.noOpacity {\n  opacity: 0; }\n\n.fadeIn {\n  transition: all 0.5s linear;\n  opacity: 1; }\n\n@media (display-mode: fullscreen) {\n  div.container {\n    height: 100vh;\n    width: 100vw; } }\n\nwc-settings-menu div.settings-menu-container div.settings-profile {\n  display: flex; }\n  wc-settings-menu div.settings-menu-container div.settings-profile img {\n    width: 35px;\n    height: 35px;\n    border-radius: 50%;\n    border: 2px solid #333536;\n    margin: auto; }\n\n:host div.settings-menu-container div.settings-profile {\n  display: flex; }\n  :host div.settings-menu-container div.settings-profile img {\n    width: 35px;\n    height: 35px;\n    border-radius: 50%;\n    border: 2px solid #333536;\n    margin: auto; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/sub-menu/sub-menu.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/sub-menu/sub-menu.scss ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* COLOURS */\n/* BORDERS */\n/* HOVER */\n/* FORMS */\n/* BUTTONS */\n/* MEDIA BREAKPOINTS */\n/* STYLES */\n:host {\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.2em; }\n\n* {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh1, h2, h3, h4, h5, h6 {\n  color: #333536;\n  font-weight: normal;\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh2 {\n  font-size: 1.6em;\n  font-weight: 500;\n  line-height: 1.8em; }\n\nh3 {\n  font-size: 1.4em;\n  font-weight: 300;\n  line-height: 1.6em;\n  margin-bottom: 0; }\n\nh4 {\n  font-weight: 300;\n  font-size: 1.2em;\n  line-height: 1.4em; }\n\na, a:visited {\n  color: #3563b3; }\n  a:hover, a:visited:hover {\n    text-decoration: none; }\n\n.center {\n  text-align: center; }\n\n.noOpacity {\n  opacity: 0; }\n\n.fadeIn {\n  transition: all 0.5s linear;\n  opacity: 1; }\n\n@media (display-mode: fullscreen) {\n  div.container {\n    height: 100vh;\n    width: 100vw; } }\n\nwc-sub-menu div.sub-menu-container {\n  display: flex;\n  flex-direction: column;\n  width: 220px;\n  height: 100%;\n  padding: 10px 0;\n  border-right: 1px solid #d9d9d9;\n  background-color: white; }\n  wc-sub-menu div.sub-menu-container h3 {\n    margin: 0 auto 20px; }\n  wc-sub-menu div.sub-menu-container div.sub-menu-actions {\n    display: flex;\n    flex-direction: column; }\n    wc-sub-menu div.sub-menu-container div.sub-menu-actions div.sub-menu-button {\n      display: flex;\n      width: 80%;\n      margin: 0 auto 10px;\n      font-size: 1em;\n      padding: 0 10px;\n      height: 40px;\n      cursor: pointer; }\n      wc-sub-menu div.sub-menu-container div.sub-menu-actions div.sub-menu-button wc-icon {\n        margin: auto 10px auto 0; }\n      wc-sub-menu div.sub-menu-container div.sub-menu-actions div.sub-menu-button p {\n        margin: auto auto auto 0;\n        font-size: 0.9em; }\n      wc-sub-menu div.sub-menu-container div.sub-menu-actions div.sub-menu-button:hover {\n        background-color: #f3f3f3; }\n\n:host div.sub-menu-container {\n  display: flex;\n  flex-direction: column;\n  width: 220px;\n  height: 100%;\n  padding: 10px 0;\n  border-right: 1px solid #d9d9d9;\n  background-color: white; }\n  :host div.sub-menu-container h3 {\n    margin: 0 auto 20px; }\n  :host div.sub-menu-container div.sub-menu-actions {\n    display: flex;\n    flex-direction: column; }\n    :host div.sub-menu-container div.sub-menu-actions div.sub-menu-button {\n      display: flex;\n      width: 80%;\n      margin: 0 auto 10px;\n      font-size: 1em;\n      padding: 0 10px;\n      height: 40px;\n      cursor: pointer; }\n      :host div.sub-menu-container div.sub-menu-actions div.sub-menu-button wc-icon {\n        margin: auto 10px auto 0; }\n      :host div.sub-menu-container div.sub-menu-actions div.sub-menu-button p {\n        margin: auto auto auto 0;\n        font-size: 0.9em; }\n      :host div.sub-menu-container div.sub-menu-actions div.sub-menu-button:hover {\n        background-color: #f3f3f3; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/version-info/version-info.scss":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/version-info/version-info.scss ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* COLOURS */\n/* BORDERS */\n/* HOVER */\n/* FORMS */\n/* BUTTONS */\n/* MEDIA BREAKPOINTS */\n/* STYLES */\n:host {\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.2em; }\n\n* {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh1, h2, h3, h4, h5, h6 {\n  color: #333536;\n  font-weight: normal;\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh2 {\n  font-size: 1.6em;\n  font-weight: 500;\n  line-height: 1.8em; }\n\nh3 {\n  font-size: 1.4em;\n  font-weight: 300;\n  line-height: 1.6em;\n  margin-bottom: 0; }\n\nh4 {\n  font-weight: 300;\n  font-size: 1.2em;\n  line-height: 1.4em; }\n\na, a:visited {\n  color: #3563b3; }\n  a:hover, a:visited:hover {\n    text-decoration: none; }\n\n.center {\n  text-align: center; }\n\n.noOpacity {\n  opacity: 0; }\n\n.fadeIn {\n  transition: all 0.5s linear;\n  opacity: 1; }\n\n@media (display-mode: fullscreen) {\n  div.container {\n    height: 100vh;\n    width: 100vw; } }\n\nwc-version-info {\n  display: block; }\n  wc-version-info div.version-info-container {\n    display: flex;\n    flex-direction: column; }\n    wc-version-info div.version-info-container p {\n      font-size: 0.8em;\n      color: #9d9d9d;\n      margin: 0 auto 5px;\n      text-align: center; }\n      wc-version-info div.version-info-container p span {\n        font-style: italic; }\n\n:host {\n  display: block; }\n  :host div.version-info-container {\n    display: flex;\n    flex-direction: column; }\n    :host div.version-info-container p {\n      font-size: 0.8em;\n      color: #9d9d9d;\n      margin: 0 auto 5px;\n      text-align: center; }\n      :host div.version-info-container p span {\n        font-style: italic; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/views/app/dashboard/dashboard.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/views/app/dashboard/dashboard.scss ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* COLOURS */\n/* BORDERS */\n/* HOVER */\n/* FORMS */\n/* BUTTONS */\n/* MEDIA BREAKPOINTS */\n/* STYLES */\n:host {\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.2em; }\n\n* {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh1, h2, h3, h4, h5, h6 {\n  color: #333536;\n  font-weight: normal;\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh2 {\n  font-size: 1.6em;\n  font-weight: 500;\n  line-height: 1.8em; }\n\nh3 {\n  font-size: 1.4em;\n  font-weight: 300;\n  line-height: 1.6em;\n  margin-bottom: 0; }\n\nh4 {\n  font-weight: 300;\n  font-size: 1.2em;\n  line-height: 1.4em; }\n\na, a:visited {\n  color: #3563b3; }\n  a:hover, a:visited:hover {\n    text-decoration: none; }\n\n.center {\n  text-align: center; }\n\n.noOpacity {\n  opacity: 0; }\n\n.fadeIn {\n  transition: all 0.5s linear;\n  opacity: 1; }\n\n@media (display-mode: fullscreen) {\n  div.container {\n    height: 100vh;\n    width: 100vw; } }\n\ndiv.container {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden; }\n  div.container h1 {\n    margin-top: 0; }\n  div.container div.content {\n    padding: 10px 40px 20px;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    height: 100vh; }\n    div.container div.content h1 {\n      font-size: 2.5em; }\n    div.container div.content p, div.container div.content ul li {\n      margin-top: 0;\n      color: #333536;\n      font-size: 1.1em;\n      line-height: 1.4em; }\n\nview-dashboard div.container div.content {\n  width: 100%; }\n  view-dashboard div.container div.content div.panel-container {\n    display: flex; }\n    view-dashboard div.container div.content div.panel-container div.left {\n      display: flex;\n      flex-wrap: wrap;\n      flex: 0 0 70%; }\n      view-dashboard div.container div.content div.panel-container div.left wc-dashboard-panel {\n        flex: 0 0 calc(50% - 20px); }\n        view-dashboard div.container div.content div.panel-container div.left wc-dashboard-panel:nth-child(odd) {\n          margin: auto 10px auto 0; }\n        view-dashboard div.container div.content div.panel-container div.left wc-dashboard-panel:nth-child(even) {\n          margin: auto 0 auto 10px; }\n    view-dashboard div.container div.content div.panel-container div.right {\n      flex: 0 0 30%; }\n\n:host div.container div.content {\n  width: 100%; }\n  :host div.container div.content div.panel-container {\n    display: flex; }\n    :host div.container div.content div.panel-container div.left {\n      display: flex;\n      flex-wrap: wrap;\n      flex: 0 0 70%; }\n      :host div.container div.content div.panel-container div.left wc-dashboard-panel {\n        flex: 0 0 calc(50% - 20px); }\n        :host div.container div.content div.panel-container div.left wc-dashboard-panel:nth-child(odd) {\n          margin: auto 10px auto 0; }\n        :host div.container div.content div.panel-container div.left wc-dashboard-panel:nth-child(even) {\n          margin: auto 0 auto 10px; }\n    :host div.container div.content div.panel-container div.right {\n      flex: 0 0 30%; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/views/app/prospects/prospect-detail/prospect-detail.scss":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/views/app/prospects/prospect-detail/prospect-detail.scss ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* COLOURS */\n/* BORDERS */\n/* HOVER */\n/* FORMS */\n/* BUTTONS */\n/* MEDIA BREAKPOINTS */\n/* STYLES */\n:host {\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.2em; }\n\n* {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh1, h2, h3, h4, h5, h6 {\n  color: #333536;\n  font-weight: normal;\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh2 {\n  font-size: 1.6em;\n  font-weight: 500;\n  line-height: 1.8em; }\n\nh3 {\n  font-size: 1.4em;\n  font-weight: 300;\n  line-height: 1.6em;\n  margin-bottom: 0; }\n\nh4 {\n  font-weight: 300;\n  font-size: 1.2em;\n  line-height: 1.4em; }\n\na, a:visited {\n  color: #3563b3; }\n  a:hover, a:visited:hover {\n    text-decoration: none; }\n\n.center {\n  text-align: center; }\n\n.noOpacity {\n  opacity: 0; }\n\n.fadeIn {\n  transition: all 0.5s linear;\n  opacity: 1; }\n\n@media (display-mode: fullscreen) {\n  div.container {\n    height: 100vh;\n    width: 100vw; } }\n\ndiv.container {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden; }\n  div.container h1 {\n    margin-top: 0; }\n  div.container div.content {\n    padding: 10px 40px 20px;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    height: 100vh; }\n    div.container div.content h1 {\n      font-size: 2.5em; }\n    div.container div.content p, div.container div.content ul li {\n      margin-top: 0;\n      color: #333536;\n      font-size: 1.1em;\n      line-height: 1.4em; }\n\nview-prospect-detail div.container div.content {\n  width: 100%; }\n  view-prospect-detail div.container div.content div.details-container {\n    display: flex;\n    margin-bottom: 20px; }\n    view-prospect-detail div.container div.content div.details-container div.prospect-detail {\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n      padding: 20px;\n      background-color: white;\n      width: calc(70% - 10px);\n      margin-right: 20px; }\n      view-prospect-detail div.container div.content div.details-container div.prospect-detail div.heading {\n        display: flex;\n        color: #333536;\n        margin-bottom: 20px; }\n        view-prospect-detail div.container div.content div.details-container div.prospect-detail div.heading wc-icon {\n          margin: auto 10px auto 0; }\n        view-prospect-detail div.container div.content div.details-container div.prospect-detail div.heading h3 {\n          margin: auto 0; }\n      view-prospect-detail div.container div.content div.details-container div.prospect-detail div.buttons {\n        display: flex; }\n        view-prospect-detail div.container div.content div.details-container div.prospect-detail div.buttons wc-button.cancel {\n          margin: 0 10px 0 auto; }\n    view-prospect-detail div.container div.content div.details-container div.prospect-events {\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n      padding: 20px;\n      background-color: white;\n      width: calc(30% - 10px); }\n      view-prospect-detail div.container div.content div.details-container div.prospect-events div.heading {\n        display: flex;\n        color: #333536;\n        margin-bottom: 20px; }\n        view-prospect-detail div.container div.content div.details-container div.prospect-events div.heading wc-icon {\n          margin: auto 10px auto 0; }\n        view-prospect-detail div.container div.content div.details-container div.prospect-events div.heading h3 {\n          margin: auto 0; }\n  view-prospect-detail div.container div.content div.contacts-container {\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    padding: 20px;\n    background-color: white; }\n    view-prospect-detail div.container div.content div.contacts-container div.heading {\n      display: flex;\n      color: #333536;\n      margin-bottom: 20px; }\n      view-prospect-detail div.container div.content div.contacts-container div.heading wc-icon {\n        margin: auto 10px auto 0; }\n      view-prospect-detail div.container div.content div.contacts-container div.heading h3 {\n        margin: auto 0; }\n\n:host div.container div.content {\n  width: 100%; }\n  :host div.container div.content div.details-container {\n    display: flex;\n    margin-bottom: 20px; }\n    :host div.container div.content div.details-container div.prospect-detail {\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n      padding: 20px;\n      background-color: white;\n      width: calc(70% - 10px);\n      margin-right: 20px; }\n      :host div.container div.content div.details-container div.prospect-detail div.heading {\n        display: flex;\n        color: #333536;\n        margin-bottom: 20px; }\n        :host div.container div.content div.details-container div.prospect-detail div.heading wc-icon {\n          margin: auto 10px auto 0; }\n        :host div.container div.content div.details-container div.prospect-detail div.heading h3 {\n          margin: auto 0; }\n      :host div.container div.content div.details-container div.prospect-detail div.buttons {\n        display: flex; }\n        :host div.container div.content div.details-container div.prospect-detail div.buttons wc-button.cancel {\n          margin: 0 10px 0 auto; }\n    :host div.container div.content div.details-container div.prospect-events {\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n      padding: 20px;\n      background-color: white;\n      width: calc(30% - 10px); }\n      :host div.container div.content div.details-container div.prospect-events div.heading {\n        display: flex;\n        color: #333536;\n        margin-bottom: 20px; }\n        :host div.container div.content div.details-container div.prospect-events div.heading wc-icon {\n          margin: auto 10px auto 0; }\n        :host div.container div.content div.details-container div.prospect-events div.heading h3 {\n          margin: auto 0; }\n  :host div.container div.content div.contacts-container {\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    padding: 20px;\n    background-color: white; }\n    :host div.container div.content div.contacts-container div.heading {\n      display: flex;\n      color: #333536;\n      margin-bottom: 20px; }\n      :host div.container div.content div.contacts-container div.heading wc-icon {\n        margin: auto 10px auto 0; }\n      :host div.container div.content div.contacts-container div.heading h3 {\n        margin: auto 0; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/views/app/prospects/prospects/prospects.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/views/app/prospects/prospects/prospects.scss ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* COLOURS */\n/* BORDERS */\n/* HOVER */\n/* FORMS */\n/* BUTTONS */\n/* MEDIA BREAKPOINTS */\n/* STYLES */\n:host {\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.2em; }\n\n* {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh1, h2, h3, h4, h5, h6 {\n  color: #333536;\n  font-weight: normal;\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh2 {\n  font-size: 1.6em;\n  font-weight: 500;\n  line-height: 1.8em; }\n\nh3 {\n  font-size: 1.4em;\n  font-weight: 300;\n  line-height: 1.6em;\n  margin-bottom: 0; }\n\nh4 {\n  font-weight: 300;\n  font-size: 1.2em;\n  line-height: 1.4em; }\n\na, a:visited {\n  color: #3563b3; }\n  a:hover, a:visited:hover {\n    text-decoration: none; }\n\n.center {\n  text-align: center; }\n\n.noOpacity {\n  opacity: 0; }\n\n.fadeIn {\n  transition: all 0.5s linear;\n  opacity: 1; }\n\n@media (display-mode: fullscreen) {\n  div.container {\n    height: 100vh;\n    width: 100vw; } }\n\ndiv.container {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden; }\n  div.container h1 {\n    margin-top: 0; }\n  div.container div.content {\n    padding: 10px 40px 20px;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    height: 100vh; }\n    div.container div.content h1 {\n      font-size: 2.5em; }\n    div.container div.content p, div.container div.content ul li {\n      margin-top: 0;\n      color: #333536;\n      font-size: 1.1em;\n      line-height: 1.4em; }\n\nview-prospects div.container div.content {\n  width: 100%; }\n  view-prospects div.container div.content div.prospects-list {\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    padding: 20px;\n    background-color: white; }\n    view-prospects div.container div.content div.prospects-list div.heading {\n      display: flex;\n      color: #333536;\n      margin-bottom: 20px; }\n      view-prospects div.container div.content div.prospects-list div.heading wc-icon {\n        margin: auto 10px auto 0; }\n      view-prospects div.container div.content div.prospects-list div.heading h3 {\n        margin: auto 0; }\n    view-prospects div.container div.content div.prospects-list div.prospect-actions {\n      display: flex; }\n      view-prospects div.container div.content div.prospects-list div.prospect-actions wc-button {\n        flex: 0 0 auto;\n        margin: 0 10px 20px 0; }\n\n:host div.container div.content {\n  width: 100%; }\n  :host div.container div.content div.prospects-list {\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    padding: 20px;\n    background-color: white; }\n    :host div.container div.content div.prospects-list div.heading {\n      display: flex;\n      color: #333536;\n      margin-bottom: 20px; }\n      :host div.container div.content div.prospects-list div.heading wc-icon {\n        margin: auto 10px auto 0; }\n      :host div.container div.content div.prospects-list div.heading h3 {\n        margin: auto 0; }\n    :host div.container div.content div.prospects-list div.prospect-actions {\n      display: flex; }\n      :host div.container div.content div.prospects-list div.prospect-actions wc-button {\n        flex: 0 0 auto;\n        margin: 0 10px 20px 0; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/views/app/quotes/quote-detail/quote-detail.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/views/app/quotes/quote-detail/quote-detail.scss ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* COLOURS */\n/* BORDERS */\n/* HOVER */\n/* FORMS */\n/* BUTTONS */\n/* MEDIA BREAKPOINTS */\n/* STYLES */\n:host {\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.2em; }\n\n* {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh1, h2, h3, h4, h5, h6 {\n  color: #333536;\n  font-weight: normal;\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh2 {\n  font-size: 1.6em;\n  font-weight: 500;\n  line-height: 1.8em; }\n\nh3 {\n  font-size: 1.4em;\n  font-weight: 300;\n  line-height: 1.6em;\n  margin-bottom: 0; }\n\nh4 {\n  font-weight: 300;\n  font-size: 1.2em;\n  line-height: 1.4em; }\n\na, a:visited {\n  color: #3563b3; }\n  a:hover, a:visited:hover {\n    text-decoration: none; }\n\n.center {\n  text-align: center; }\n\n.noOpacity {\n  opacity: 0; }\n\n.fadeIn {\n  transition: all 0.5s linear;\n  opacity: 1; }\n\n@media (display-mode: fullscreen) {\n  div.container {\n    height: 100vh;\n    width: 100vw; } }\n\ndiv.container {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden; }\n  div.container h1 {\n    margin-top: 0; }\n  div.container div.content {\n    padding: 10px 40px 20px;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    height: 100vh; }\n    div.container div.content h1 {\n      font-size: 2.5em; }\n    div.container div.content p, div.container div.content ul li {\n      margin-top: 0;\n      color: #333536;\n      font-size: 1.1em;\n      line-height: 1.4em; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/views/app/quotes/quotes/quotes.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/views/app/quotes/quotes/quotes.scss ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* COLOURS */\n/* BORDERS */\n/* HOVER */\n/* FORMS */\n/* BUTTONS */\n/* MEDIA BREAKPOINTS */\n/* STYLES */\n:host {\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.2em; }\n\n* {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh1, h2, h3, h4, h5, h6 {\n  color: #333536;\n  font-weight: normal;\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh2 {\n  font-size: 1.6em;\n  font-weight: 500;\n  line-height: 1.8em; }\n\nh3 {\n  font-size: 1.4em;\n  font-weight: 300;\n  line-height: 1.6em;\n  margin-bottom: 0; }\n\nh4 {\n  font-weight: 300;\n  font-size: 1.2em;\n  line-height: 1.4em; }\n\na, a:visited {\n  color: #3563b3; }\n  a:hover, a:visited:hover {\n    text-decoration: none; }\n\n.center {\n  text-align: center; }\n\n.noOpacity {\n  opacity: 0; }\n\n.fadeIn {\n  transition: all 0.5s linear;\n  opacity: 1; }\n\n@media (display-mode: fullscreen) {\n  div.container {\n    height: 100vh;\n    width: 100vw; } }\n\ndiv.container {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden; }\n  div.container h1 {\n    margin-top: 0; }\n  div.container div.content {\n    padding: 10px 40px 20px;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    height: 100vh; }\n    div.container div.content h1 {\n      font-size: 2.5em; }\n    div.container div.content p, div.container div.content ul li {\n      margin-top: 0;\n      color: #333536;\n      font-size: 1.1em;\n      line-height: 1.4em; }\n\nview-quotes div.container div.content {\n  width: 100%; }\n  view-quotes div.container div.content div.quote-list {\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    padding: 20px;\n    background-color: white; }\n    view-quotes div.container div.content div.quote-list div.heading {\n      display: flex;\n      color: #333536;\n      margin-bottom: 20px; }\n      view-quotes div.container div.content div.quote-list div.heading wc-icon {\n        margin: auto 10px auto 0; }\n      view-quotes div.container div.content div.quote-list div.heading h3 {\n        margin: auto 0; }\n    view-quotes div.container div.content div.quote-list div.quote-actions {\n      display: flex; }\n      view-quotes div.container div.content div.quote-list div.quote-actions wc-button {\n        flex: 0 0 auto;\n        margin: 0 10px 20px 0; }\n\n:host div.container div.content {\n  width: 100%; }\n  :host div.container div.content div.quote-list {\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    padding: 20px;\n    background-color: white; }\n    :host div.container div.content div.quote-list div.heading {\n      display: flex;\n      color: #333536;\n      margin-bottom: 20px; }\n      :host div.container div.content div.quote-list div.heading wc-icon {\n        margin: auto 10px auto 0; }\n      :host div.container div.content div.quote-list div.heading h3 {\n        margin: auto 0; }\n    :host div.container div.content div.quote-list div.quote-actions {\n      display: flex; }\n      :host div.container div.content div.quote-list div.quote-actions wc-button {\n        flex: 0 0 auto;\n        margin: 0 10px 20px 0; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/views/login/login.scss":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/views/login/login.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* FONTS */\n/* BACKGROUND */\n/* COLOURS */\n/* BORDERS */\n/* HOVER */\n/* FORMS */\n/* BUTTONS */\n/* MEDIA BREAKPOINTS */\n/* STYLES */\n:host {\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.2em; }\n\n* {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh1, h2, h3, h4, h5, h6 {\n  color: #333536;\n  font-weight: normal;\n  font-family: \"Roboto\", Tahoma, Helvetica, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh2 {\n  font-size: 1.6em;\n  font-weight: 500;\n  line-height: 1.8em; }\n\nh3 {\n  font-size: 1.4em;\n  font-weight: 300;\n  line-height: 1.6em;\n  margin-bottom: 0; }\n\nh4 {\n  font-weight: 300;\n  font-size: 1.2em;\n  line-height: 1.4em; }\n\na, a:visited {\n  color: #3563b3; }\n  a:hover, a:visited:hover {\n    text-decoration: none; }\n\n.center {\n  text-align: center; }\n\n.noOpacity {\n  opacity: 0; }\n\n.fadeIn {\n  transition: all 0.5s linear;\n  opacity: 1; }\n\n@media (display-mode: fullscreen) {\n  div.container {\n    height: 100vh;\n    width: 100vw; } }\n\ndiv.container {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden; }\n  div.container h1 {\n    margin-top: 0; }\n  div.container div.content {\n    padding: 10px 40px 20px;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    height: 100vh; }\n    div.container div.content h1 {\n      font-size: 2.5em; }\n    div.container div.content p, div.container div.content ul li {\n      margin-top: 0;\n      color: #333536;\n      font-size: 1.1em;\n      line-height: 1.4em; }\n\nview-login div.container {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  width: 100vw;\n  padding-bottom: 30px;\n  background-color: #DDF9C1; }\n  view-login div.container div.heading {\n    display: flex;\n    flex-direction: column;\n    flex: 0 0 40%; }\n    view-login div.container div.heading div.inner {\n      margin: auto; }\n      view-login div.container div.heading div.inner h1, view-login div.container div.heading div.inner p {\n        margin: 0;\n        text-align: center; }\n      view-login div.container div.heading div.inner h1 {\n        font-size: 3em;\n        margin-bottom: 30px; }\n  view-login div.container div.login {\n    width: 70%;\n    margin: 0 auto; }\n  view-login div.container wc-version-info {\n    margin-top: auto; }\n\n:host div.container {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  width: 100vw;\n  padding-bottom: 30px;\n  background-color: #DDF9C1; }\n  :host div.container div.heading {\n    display: flex;\n    flex-direction: column;\n    flex: 0 0 40%; }\n    :host div.container div.heading div.inner {\n      margin: auto; }\n      :host div.container div.heading div.inner h1, :host div.container div.heading div.inner p {\n        margin: 0;\n        text-align: center; }\n      :host div.container div.heading div.inner h1 {\n        font-size: 3em;\n        margin-bottom: 30px; }\n  :host div.container div.login {\n    width: 70%;\n    margin: 0 auto; }\n  :host div.container wc-version-info {\n    margin-top: auto; }\n", ""]);

// exports


/***/ }),

/***/ "./src/client/helpers/index.ts":
/*!*************************************!*\
  !*** ./src/client/helpers/index.ts ***!
  \*************************************/
/*! exports provided: getProspectName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prospect_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prospect-helpers */ "./src/client/helpers/prospect-helpers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProspectName", function() { return _prospect_helpers__WEBPACK_IMPORTED_MODULE_0__["getProspectName"]; });




/***/ }),

/***/ "./src/client/helpers/prospect-helpers.ts":
/*!************************************************!*\
  !*** ./src/client/helpers/prospect-helpers.ts ***!
  \************************************************/
/*! exports provided: getProspectName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProspectName", function() { return getProspectName; });
function getProspectName(prospect) {
    if (!prospect) {
        return null;
    }
    if (prospect.companyName) {
        return prospect.companyName;
    }
    else {
        const primary = prospect.contacts.find(x => x.primary);
        if (primary) {
            return `${primary.firstName} ${primary.lastName}`;
        }
        else {
            return "Unknown";
        }
    }
}


/***/ }),

/***/ "./src/client/manager.ts":
/*!*******************************!*\
  !*** ./src/client/manager.ts ***!
  \*******************************/
/*! exports provided: EstorManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstorManager", function() { return EstorManager; });
/* harmony import */ var _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commontimeltd/infinity-framework */ "./node_modules/@commontimeltd/infinity-framework/index.ts");

class EstorManager extends _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["ClientManager"] {
    // === Constructor === //
    constructor(appContainer, defaultView, config, views, appClasses, handlers) {
        super(appContainer, defaultView, config, views, appClasses, handlers);
    }
}


/***/ }),

/***/ "./src/client/rest/rest-client.ts":
/*!****************************************!*\
  !*** ./src/client/rest/rest-client.ts ***!
  \****************************************/
/*! exports provided: EstorRestClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstorRestClient", function() { return EstorRestClient; });
/* harmony import */ var _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commontimeltd/infinity-framework */ "./node_modules/@commontimeltd/infinity-framework/index.ts");

class EstorRestClient extends _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["RestClient"] {
}


/***/ }),

/***/ "./src/client/store/store.ts":
/*!***********************************!*\
  !*** ./src/client/store/store.ts ***!
  \***********************************/
/*! exports provided: EstorStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstorStore", function() { return EstorStore; });
/* harmony import */ var _commontimeltd_infinity_framework_src_store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commontimeltd/infinity-framework/src/store/store */ "./node_modules/@commontimeltd/infinity-framework/src/store/store.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class EstorStore extends _commontimeltd_infinity_framework_src_store_store__WEBPACK_IMPORTED_MODULE_0__["Store"] {
    // === Public === //
    setSelectedProspect(prospect = null) {
        return __awaiter(this, void 0, void 0, function* () {
            this.state.selectedProspect = prospect;
            return yield this._saveToPersistent();
        });
    }
    getSelectedProspect() {
        return this.state.selectedProspect;
    }
    // === Protected === //
    _generateInitialState() {
        return {
            _id: this.name,
            messageQueue: [],
            selectedProspect: null
        };
    }
}


/***/ }),

/***/ "./src/components/breadcrumbs/breadcrumbs.scss":
/*!*****************************************************!*\
  !*** ./src/components/breadcrumbs/breadcrumbs.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(/*! !../../../node_modules/css-loader?url=false!../../../node_modules/sass-loader/lib/loader.js??ref--8-2!./breadcrumbs.scss */ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/breadcrumbs/breadcrumbs.scss");

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),

/***/ "./src/components/breadcrumbs/breadcrumbs.ts":
/*!***************************************************!*\
  !*** ./src/components/breadcrumbs/breadcrumbs.ts ***!
  \***************************************************/
/*! exports provided: Breadcrumbs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breadcrumbs", function() { return Breadcrumbs; });
/* harmony import */ var _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commontimeltd/infinity-framework */ "./node_modules/@commontimeltd/infinity-framework/index.ts");
/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models */ "./src/models/index.ts");
/* harmony import */ var views_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! views/register */ "./src/views/register.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



let Breadcrumbs = class Breadcrumbs extends _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["BaseLitComponent"] {
    constructor() {
        super(...arguments);
        // === Private === //
        this._goToHome = () => {
            this.manager.router.goToPage(views_register__WEBPACK_IMPORTED_MODULE_2__["EstorViews"].Dashboard);
        };
        this._renderBreadcrumb = (link, idx) => {
            const isLast = idx === this.breadcrumbs.length - 1;
            return _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `

            <span class="break">/</span>
            <span className="${isLast ? "last" : ""}" on-click="${link.action}">${link.text}</span>
        `;
        };
    }
    // === Init === //
    _init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    _setupEventListeners() { }
    // === Render === //
    componentMarkup() {
        return _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `
            <div class="breadcrumbs-container">
                <wc-icon-button icon="${models__WEBPACK_IMPORTED_MODULE_1__["EstorIcons"].IcoMoon.Home}" width="20" height="20" action="${this._goToHome}"></wc-icon-button>
                ${this.breadcrumbs && this.breadcrumbs.length
            ? this.breadcrumbs.map(this._renderBreadcrumb)
            : null}
            </div>
        `;
    }
};
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: Array })
], Breadcrumbs.prototype, "breadcrumbs", void 0);
Breadcrumbs = __decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["component"])({ tag: "wc-breadcrumbs", styles: [__webpack_require__(/*! ./breadcrumbs.scss */ "./src/components/breadcrumbs/breadcrumbs.scss")] })
], Breadcrumbs);



/***/ }),

/***/ "./src/components/button/button.scss":
/*!*******************************************!*\
  !*** ./src/components/button/button.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(/*! !../../../node_modules/css-loader?url=false!../../../node_modules/sass-loader/lib/loader.js??ref--8-2!./button.scss */ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/button/button.scss");

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),

/***/ "./src/components/button/button.ts":
/*!*****************************************!*\
  !*** ./src/components/button/button.ts ***!
  \*****************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commontimeltd/infinity-framework */ "./node_modules/@commontimeltd/infinity-framework/index.ts");
/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models */ "./src/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let Button = class Button extends _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["BaseLitComponent"] {
    constructor() {
        super(...arguments);
        this.type = "normal";
        this.spin = false;
        this.leftIcon = null;
        this.leftIconSpin = false;
        this.leftIconColor = "auto";
        this.leftAlign = false;
        this.rightIcon = null;
        this.rightIconSpin = false;
        this.rightIconColor = "auto";
        // === Private === //
        this._action = () => {
            if (this.action && !this.spin) {
                this.action();
            }
        };
    }
    // === Init === //
    _init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    _setupEventListeners() { }
    // === Render === //
    componentMarkup() {
        return _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `
            <div class="button-container">

                <button className="${this.type} ${this.leftIcon ? "left-icon" : ""}" disabled?="${this.disabled}" on-click="${this._action}">
                    ${this.spin ? this._renderSpinner() : this._renderContent()}
                </button>

            </div>
        `;
    }
    _renderContent() {
        return _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `
            ${this.leftIcon
            ? _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `
                        <div className="${`left-icon ${this.leftAlign ? "left-align" : ""}`}">
                            ${this.leftIcon ? _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `<wc-icon icon="${this.leftIconSpin ? models__WEBPACK_IMPORTED_MODULE_1__["EstorIcons"].IcoMoon.Loader : this.leftIcon}" color="${this.leftIconColor}" spin?="${this.leftIconSpin}"></wc-icon>` : null}
                        </div>
                    `
            : null}

            ${this.label}

            ${this.rightIcon
            ? _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `
                        <div class="right-icon">
                            ${this.rightIcon ? _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `<wc-icon height="14" width="14" icon="${this.rightIconSpin ? models__WEBPACK_IMPORTED_MODULE_1__["EstorIcons"].IcoMoon.Loader : this.rightIcon}" color="${this.rightIconColor}" spin?="${this.rightIconSpin}"></wc-icon>` : null}
                        </div>
                    `
            : null}
        `;
    }
    _renderSpinner() {
        return _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `
            <wc-icon icon="${models__WEBPACK_IMPORTED_MODULE_1__["EstorIcons"].IcoMoon.Loader}" spin></wc-icon>
        `;
    }
};
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: String })
], Button.prototype, "type", void 0);
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: Boolean })
], Button.prototype, "spin", void 0);
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: Object })
], Button.prototype, "leftIcon", void 0);
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: Boolean })
], Button.prototype, "leftIconSpin", void 0);
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: String })
], Button.prototype, "leftIconColor", void 0);
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: Boolean })
], Button.prototype, "leftAlign", void 0);
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: Object })
], Button.prototype, "rightIcon", void 0);
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: Boolean })
], Button.prototype, "rightIconSpin", void 0);
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: String })
], Button.prototype, "rightIconColor", void 0);
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: String })
], Button.prototype, "label", void 0);
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: Boolean })
], Button.prototype, "disabled", void 0);
Button = __decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["component"])({ tag: "wc-button", styles: [__webpack_require__(/*! ./button.scss */ "./src/components/button/button.scss")] })
], Button);



/***/ }),

/***/ "./src/components/dashboard-panel/dashboard-panel.scss":
/*!*************************************************************!*\
  !*** ./src/components/dashboard-panel/dashboard-panel.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(/*! !../../../node_modules/css-loader?url=false!../../../node_modules/sass-loader/lib/loader.js??ref--8-2!./dashboard-panel.scss */ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/dashboard-panel/dashboard-panel.scss");

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),

/***/ "./src/components/dashboard-panel/dashboard-panel.ts":
/*!***********************************************************!*\
  !*** ./src/components/dashboard-panel/dashboard-panel.ts ***!
  \***********************************************************/
/*! exports provided: DashboardPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPanel", function() { return DashboardPanel; });
/* harmony import */ var _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commontimeltd/infinity-framework */ "./node_modules/@commontimeltd/infinity-framework/index.ts");
/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models */ "./src/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let DashboardPanel = class DashboardPanel extends _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["BaseLitComponent"] {
    // === Init === //
    _init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    _setupEventListeners() { }
    // === Private === //
    // === Render === //
    componentMarkup() {
        return _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `
            <div class="dashboard-panel-container">
                <div class="heading">
                    <wc-icon icon="${this.stats.icon}"></wc-icon>
                    <h3>${this.stats.title}</h3>
                </div>

                ${this.stats.stats.map(x => _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `
                        <div className="stat ${x.alert ? "alert" : ""}">
                            <div class="label">
                                ${x.alert
            ? _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `<wc-icon icon="${models__WEBPACK_IMPORTED_MODULE_1__["EstorIcons"].IcoMoon.Exclaim}"></wc-icon>`
            : null}
                                <p>${x.label} ${x.timeframe ? _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `<span>(${x.timeframe})</span>` : null}</p>
                            </div>
                            <div class="val">
                                ${this._renderValue(x.value)}
                            </div>
                        </div>
                    `)}
            </div>
        `;
    }
    _renderValue(value) {
        if (!value) {
            return null;
        }
        if (typeof value === "string") {
            return _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `
                <p>${value}</p>
            `;
        }
        else {
            return _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `
                <p>${value.text} <span>${value.highlight}</span></p>
            `;
        }
    }
};
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: Object })
], DashboardPanel.prototype, "stats", void 0);
DashboardPanel = __decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["component"])({ tag: "wc-dashboard-panel", styles: [__webpack_require__(/*! ./dashboard-panel.scss */ "./src/components/dashboard-panel/dashboard-panel.scss")] })
], DashboardPanel);



/***/ }),

/***/ "./src/components/icon-button/icon-button.scss":
/*!*****************************************************!*\
  !*** ./src/components/icon-button/icon-button.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(/*! !../../../node_modules/css-loader?url=false!../../../node_modules/sass-loader/lib/loader.js??ref--8-2!./icon-button.scss */ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/icon-button/icon-button.scss");

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),

/***/ "./src/components/icon-button/icon-button.ts":
/*!***************************************************!*\
  !*** ./src/components/icon-button/icon-button.ts ***!
  \***************************************************/
/*! exports provided: IconButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return IconButton; });
/* harmony import */ var _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commontimeltd/infinity-framework */ "./node_modules/@commontimeltd/infinity-framework/index.ts");
/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models */ "./src/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let IconButton = class IconButton extends _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["BaseLitComponent"] {
    constructor() {
        super(...arguments);
        this.type = "transparent";
        this.disabled = false;
        this.iconColor = "auto";
        this.iconHoverColor = "auto";
        this.icon = null;
        this.width = "18";
        this.height = "18";
        this.isWaiting = false;
        this.stopPropagation = true;
        this.hoverTextShowing = false;
        this.hoverText = "";
        this.previousColor = "auto";
        this._action = (e) => {
            if (this.stopPropagation) {
                e.stopImmediatePropagation();
            }
            if (this.action) {
                this.action();
            }
        };
        this._onMouseOver = () => {
            if (this.iconColor !== this.iconHoverColor) {
                this.previousColor = this.iconColor;
                this.iconColor = this.iconHoverColor;
            }
            if (this.hoverText && !this.hoverTextTimeout) {
                this.hoverTextTimeout = setTimeout(this._showHoverText, 500);
            }
        };
        this._onMouseOut = () => {
            this.iconColor = this.previousColor;
            clearTimeout(this.hoverTextTimeout);
            this.hoverTextTimeout = 0;
            this.hoverTextShowing = false;
        };
        this._showHoverText = () => {
            this.hoverTextShowing = true;
            this.hoverTextTimeout = 0;
        };
    }
    // === Init === //
    _init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    _setupEventListeners() { }
    // === Private === //
    _buttonClasses() {
        const classes = [];
        classes.push(this.type);
        if (this.isWaiting) {
            classes.push("waiting");
        }
        return classes.join(" ");
    }
    // === Render === //
    componentMarkup() {
        this.onmouseover = this._onMouseOver;
        this.onmouseleave = this._onMouseOut;
        return _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `
            <button className="${this._buttonClasses()}" disabled="${this.isWaiting || this.disabled}" on-click="${this._action}">

                <wc-icon
                    icon="${this.isWaiting ? models__WEBPACK_IMPORTED_MODULE_1__["EstorIcons"].IcoMoon.Loader : this.icon}"
                    color="${this.iconColor}"
                    hoverColor="${this.iconHoverColor}"
                    width="${this.width}"
                    height="${this.height}"
                    spin?="${this.isWaiting}"
                >
                </wc-icon>

            </button>
            <div className="hover-text ${this.hoverTextShowing ? "visible" : ""}">
                <p>${this.hoverText}</p>
            </div>
        `;
    }
};
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: String })
], IconButton.prototype, "type", void 0);
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: Boolean })
], IconButton.prototype, "disabled", void 0);
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: String })
], IconButton.prototype, "iconColor", void 0);
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: String })
], IconButton.prototype, "iconHoverColor", void 0);
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: Object })
], IconButton.prototype, "icon", void 0);
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: String })
], IconButton.prototype, "width", void 0);
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: String })
], IconButton.prototype, "height", void 0);
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: Boolean })
], IconButton.prototype, "isWaiting", void 0);
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: Boolean })
], IconButton.prototype, "stopPropagation", void 0);
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: Boolean })
], IconButton.prototype, "hoverTextShowing", void 0);
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: String })
], IconButton.prototype, "hoverText", void 0);
IconButton = __decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["component"])({ tag: "wc-icon-button", styles: [__webpack_require__(/*! ./icon-button.scss */ "./src/components/icon-button/icon-button.scss")] })
], IconButton);



/***/ }),

/***/ "./src/components/icon/icon.scss":
/*!***************************************!*\
  !*** ./src/components/icon/icon.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(/*! !../../../node_modules/css-loader?url=false!../../../node_modules/sass-loader/lib/loader.js??ref--8-2!./icon.scss */ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/icon/icon.scss");

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),

/***/ "./src/components/icon/icon.ts":
/*!*************************************!*\
  !*** ./src/components/icon/icon.ts ***!
  \*************************************/
/*! exports provided: Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commontimeltd/infinity-framework */ "./node_modules/@commontimeltd/infinity-framework/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

let Icon = class Icon extends _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["BaseLitComponent"] {
    constructor() {
        super(...arguments);
        this.width = "18";
        this.height = "18";
        this.color = "auto";
        this.spin = false;
        this.icon = null;
        this.hoverColor = "auto";
    }
    // === Init === //
    _init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    _setupEventListeners() { }
    // === Private === //
    // === Render === //
    componentMarkup() {
        if (!this.icon) {
            return null;
        }
        this.className = this.spin ? "spin" : "";
        const color = this.color !== "auto"
            ? this.color
            : window.getComputedStyle(this.parentElement).color;
        const viewBox = this.icon.viewBox || "0 0 1024 1024";
        const svgPaths = (this.icon.paths || []);
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", this.width);
        svg.setAttribute("height", this.height);
        svg.setAttribute("viewBox", viewBox);
        svg.setAttribute("style", `fill: ${color}; width: ${this.width}px; height: ${this.height}px;`);
        svgPaths.forEach(x => {
            // tslint:disable-next-line no-any
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("d", x);
            svg.appendChild(path);
        });
        return _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `${svg}`;
    }
};
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: String })
], Icon.prototype, "width", void 0);
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: String })
], Icon.prototype, "height", void 0);
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: String })
], Icon.prototype, "color", void 0);
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: Boolean })
], Icon.prototype, "spin", void 0);
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: Object })
], Icon.prototype, "icon", void 0);
Icon = __decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["component"])({ tag: "wc-icon", styles: [__webpack_require__(/*! ./icon.scss */ "./src/components/icon/icon.scss")] })
], Icon);



/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/*! exports provided: Breadcrumbs, Button, DashboardPanel, IconButton, Icon, MainMenu, Modal, ProspectsPanel, SettingsMenu, VersionInfo, LatestEvents, SubMenu, PaginatedList, ProspectAddEdit, ProspectContactList, NewProspectContactModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _breadcrumbs_breadcrumbs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breadcrumbs/breadcrumbs */ "./src/components/breadcrumbs/breadcrumbs.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Breadcrumbs", function() { return _breadcrumbs_breadcrumbs__WEBPACK_IMPORTED_MODULE_0__["Breadcrumbs"]; });

/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button/button */ "./src/components/button/button.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button_button__WEBPACK_IMPORTED_MODULE_1__["Button"]; });

/* harmony import */ var _dashboard_panel_dashboard_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-panel/dashboard-panel */ "./src/components/dashboard-panel/dashboard-panel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardPanel", function() { return _dashboard_panel_dashboard_panel__WEBPACK_IMPORTED_MODULE_2__["DashboardPanel"]; });

/* harmony import */ var _icon_button_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon-button/icon-button */ "./src/components/icon-button/icon-button.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return _icon_button_icon_button__WEBPACK_IMPORTED_MODULE_3__["IconButton"]; });

/* harmony import */ var _icon_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon/icon */ "./src/components/icon/icon.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _icon_icon__WEBPACK_IMPORTED_MODULE_4__["Icon"]; });

/* harmony import */ var _main_menu_main_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-menu/main-menu */ "./src/components/main-menu/main-menu.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainMenu", function() { return _main_menu_main_menu__WEBPACK_IMPORTED_MODULE_5__["MainMenu"]; });

/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal/modal */ "./src/components/modal/modal.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _modal_modal__WEBPACK_IMPORTED_MODULE_6__["Modal"]; });

/* harmony import */ var _prospects_panel_prospects_panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./prospects-panel/prospects-panel */ "./src/components/prospects-panel/prospects-panel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProspectsPanel", function() { return _prospects_panel_prospects_panel__WEBPACK_IMPORTED_MODULE_7__["ProspectsPanel"]; });

/* harmony import */ var _settings_menu_settings_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings-menu/settings-menu */ "./src/components/settings-menu/settings-menu.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingsMenu", function() { return _settings_menu_settings_menu__WEBPACK_IMPORTED_MODULE_8__["SettingsMenu"]; });

/* harmony import */ var _version_info_version_info__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./version-info/version-info */ "./src/components/version-info/version-info.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VersionInfo", function() { return _version_info_version_info__WEBPACK_IMPORTED_MODULE_9__["VersionInfo"]; });

/* harmony import */ var _latest_events_latest_events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./latest-events/latest-events */ "./src/components/latest-events/latest-events.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LatestEvents", function() { return _latest_events_latest_events__WEBPACK_IMPORTED_MODULE_10__["LatestEvents"]; });

/* harmony import */ var _sub_menu_sub_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sub-menu/sub-menu */ "./src/components/sub-menu/sub-menu.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubMenu", function() { return _sub_menu_sub_menu__WEBPACK_IMPORTED_MODULE_11__["SubMenu"]; });

/* harmony import */ var _paginated_list_paginated_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./paginated-list/paginated-list */ "./src/components/paginated-list/paginated-list.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginatedList", function() { return _paginated_list_paginated_list__WEBPACK_IMPORTED_MODULE_12__["PaginatedList"]; });

/* harmony import */ var _prospect_add_edit_prospect_add_edit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./prospect-add-edit/prospect-add-edit */ "./src/components/prospect-add-edit/prospect-add-edit.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProspectAddEdit", function() { return _prospect_add_edit_prospect_add_edit__WEBPACK_IMPORTED_MODULE_13__["ProspectAddEdit"]; });

/* harmony import */ var _prospect_contact_list_prospect_contact_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./prospect-contact-list/prospect-contact-list */ "./src/components/prospect-contact-list/prospect-contact-list.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProspectContactList", function() { return _prospect_contact_list_prospect_contact_list__WEBPACK_IMPORTED_MODULE_14__["ProspectContactList"]; });

/* harmony import */ var _new_prospect_contact_modal_new_prospect_contact_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./new-prospect-contact-modal/new-prospect-contact-modal */ "./src/components/new-prospect-contact-modal/new-prospect-contact-modal.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewProspectContactModal", function() { return _new_prospect_contact_modal_new_prospect_contact_modal__WEBPACK_IMPORTED_MODULE_15__["NewProspectContactModal"]; });

/**
 * Export all components from this file.
 *
 * E.g.
 *
 * export { MyComponent } from "./my-component/my-component"
 * export { MyComponent2 } from "./my-component-2/my-component-2"
 * ... etc
 *
 * You can also export Material components from here, e.g.
 *
 * export { Button } from "@material/mwc-button";
 */


















/***/ }),

/***/ "./src/components/latest-events/latest-events.scss":
/*!*********************************************************!*\
  !*** ./src/components/latest-events/latest-events.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(/*! !../../../node_modules/css-loader?url=false!../../../node_modules/sass-loader/lib/loader.js??ref--8-2!./latest-events.scss */ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/latest-events/latest-events.scss");

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),

/***/ "./src/components/latest-events/latest-events.ts":
/*!*******************************************************!*\
  !*** ./src/components/latest-events/latest-events.ts ***!
  \*******************************************************/
/*! exports provided: LatestEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestEvents", function() { return LatestEvents; });
/* harmony import */ var _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commontimeltd/infinity-framework */ "./node_modules/@commontimeltd/infinity-framework/index.ts");
/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models */ "./src/models/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



let LatestEvents = class LatestEvents extends _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["BaseLitComponent"] {
    constructor() {
        super(...arguments);
        this.events = [];
    }
    // === Init === //
    _init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.events = [
                { user: "alex", timestamp: moment__WEBPACK_IMPORTED_MODULE_2___default()().add(-1, "days").valueOf(), type: "Added a new prospect" /* CreatedNewProspect */, detail: "Tony Brutnell" },
                { user: "ben", timestamp: moment__WEBPACK_IMPORTED_MODULE_2___default()().add(-2, "days").valueOf(), type: "Marked invoice as paid" /* MarkedInvoiceAsPaid */, detail: "Id: 123-456-789" },
                { user: "ben", timestamp: moment__WEBPACK_IMPORTED_MODULE_2___default()().add(-3, "days").valueOf(), type: "Sent a new invoice" /* SentNewInvoice */, detail: "Id: 123-456-789" },
                { user: "alex", timestamp: moment__WEBPACK_IMPORTED_MODULE_2___default()().add(-4, "days").valueOf(), type: "Created a new quote" /* CreatedNewQuote */, detail: "Garage roof (Gill Kipling)" },
                { user: "alex", timestamp: moment__WEBPACK_IMPORTED_MODULE_2___default()().add(-5, "days").valueOf(), type: "Added a new prospect" /* CreatedNewProspect */, detail: "Gill Kipling" },
                { user: "ben", timestamp: moment__WEBPACK_IMPORTED_MODULE_2___default()().add(-6, "days").valueOf(), type: "Edited reminder schedule" /* EditedReminderSchedule */ },
                { user: "ben", timestamp: moment__WEBPACK_IMPORTED_MODULE_2___default()().add(-7, "days").valueOf(), type: "Replied to customer" /* RepliedToCustomer */, detail: "Nick Kipling" }
            ];
        });
    }
    _setupEventListeners() { }
    // === Private === //
    // === Render === //
    componentMarkup() {
        return _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `
            <div class="latest-events-container">
                <div class="heading">
                    <wc-icon icon="${models__WEBPACK_IMPORTED_MODULE_1__["EstorIcons"].IcoMoon.Bell}"></wc-icon>
                    <h3>Latest Events</h3>
                </div>

                ${this.events.map(x => _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `
                        <div class="event">
                            <img src="${this._getUserImage(x.user)}" />
                            <p>${x.type}<br><span>${x.detail}</span></p>
                            <p class="ts">${moment__WEBPACK_IMPORTED_MODULE_2___default()(x.timestamp).fromNow()}</p>
                        </div>
                    `)}
            </div>
        `;
    }
    _getUserImage(user) {
        switch (user) {
            case "alex":
                return "images/alex.jpeg";
            case "ben":
                return "images/ben.jpeg";
        }
    }
};
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: Array })
], LatestEvents.prototype, "events", void 0);
LatestEvents = __decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["component"])({ tag: "wc-latest-events", styles: [__webpack_require__(/*! ./latest-events.scss */ "./src/components/latest-events/latest-events.scss")] })
], LatestEvents);



/***/ }),

/***/ "./src/components/main-menu/main-menu.scss":
/*!*************************************************!*\
  !*** ./src/components/main-menu/main-menu.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(/*! !../../../node_modules/css-loader?url=false!../../../node_modules/sass-loader/lib/loader.js??ref--8-2!./main-menu.scss */ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/main-menu/main-menu.scss");

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),

/***/ "./src/components/main-menu/main-menu.ts":
/*!***********************************************!*\
  !*** ./src/components/main-menu/main-menu.ts ***!
  \***********************************************/
/*! exports provided: MainMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenu", function() { return MainMenu; });
/* harmony import */ var _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commontimeltd/infinity-framework */ "./node_modules/@commontimeltd/infinity-framework/index.ts");
/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models */ "./src/models/index.ts");
/* harmony import */ var views_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! views/register */ "./src/views/register.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



let MainMenu = class MainMenu extends _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["BaseLitComponent"] {
    constructor() {
        // === Init === //
        super(...arguments);
        // === Private === //
        this._goToProspects = () => {
            this.manager.router.goToPage(views_register__WEBPACK_IMPORTED_MODULE_2__["EstorViews"].Prospects);
        };
        this._goToQuotes = () => {
            this.manager.router.goToPage(views_register__WEBPACK_IMPORTED_MODULE_2__["EstorViews"].Quotes);
        };
    }
    _init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    _setupEventListeners() { }
    // === Render === //
    componentMarkup() {
        return _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `
            <div class="main-menu-container">
                <div class="actions">
                    <wc-icon-button icon="${models__WEBPACK_IMPORTED_MODULE_1__["EstorIcons"].IcoMoon.User}" width="20" height="20" hoverText="Prospects" action="${this._goToProspects}"></wc-icon-button>
                    <wc-icon-button icon="${models__WEBPACK_IMPORTED_MODULE_1__["EstorIcons"].IcoMoon.NoteBook}" width="20" height="20" hoverText="Quotes" action="${this._goToQuotes}"></wc-icon-button>
                    <wc-icon-button icon="${models__WEBPACK_IMPORTED_MODULE_1__["EstorIcons"].IcoMoon.Truck}" width="20" height="20" hoverText="Jobs"></wc-icon-button>
                    <wc-icon-button icon="${models__WEBPACK_IMPORTED_MODULE_1__["EstorIcons"].IcoMoon.Ledger}" width="20" height="20" hoverText="Invoicing"></wc-icon-button>
                    <wc-icon-button icon="${models__WEBPACK_IMPORTED_MODULE_1__["EstorIcons"].IcoMoon.Graph2}" width="20" height="20" hoverText="Reporting"></wc-icon-button>
                    <wc-icon-button icon="${models__WEBPACK_IMPORTED_MODULE_1__["EstorIcons"].IcoMoon.Plus}" width="20" height="20" hoverText="Quick create"></wc-icon-button>

                    <div class="bottom">
                        <wc-icon-button icon="${models__WEBPACK_IMPORTED_MODULE_1__["EstorIcons"].IcoMoon.Bell}" width="20" height="20" hoverText="Notifications"></wc-icon-button>
                        <wc-icon-button icon="${models__WEBPACK_IMPORTED_MODULE_1__["EstorIcons"].IcoMoon.QuestionMarkCircle}" width="20" height="20" hoverText="Help"></wc-icon-button>
                    </div>
                </div>
                <wc-settings-menu></wc-settings-menu>
            </div>
        `;
    }
};
MainMenu = __decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["component"])({ tag: "wc-main-menu", styles: [__webpack_require__(/*! ./main-menu.scss */ "./src/components/main-menu/main-menu.scss")] })
], MainMenu);



/***/ }),

/***/ "./src/components/modal/modal.scss":
/*!*****************************************!*\
  !*** ./src/components/modal/modal.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(/*! !../../../node_modules/css-loader?url=false!../../../node_modules/sass-loader/lib/loader.js??ref--8-2!./modal.scss */ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/modal/modal.scss");

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),

/***/ "./src/components/modal/modal.ts":
/*!***************************************!*\
  !*** ./src/components/modal/modal.ts ***!
  \***************************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony import */ var _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commontimeltd/infinity-framework */ "./node_modules/@commontimeltd/infinity-framework/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

let Modal = class Modal extends _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["BaseLitComponent"] {
    constructor() {
        super(...arguments);
        this.showing = false;
        this.messageContent = [];
        this.modalButtons = [];
        // === Private === //
        this._close = () => {
            this.removeAttribute("show");
            this.manager.emit("close-modal" /* CloseModal */);
        };
    }
    // === Init === //
    _init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    _setupEventListeners() {
        this.manager.on("open-modal" /* OpenModal */, (args) => {
            this.modalTitle = args.title;
            this.messageContent = [...args.content];
            this.modalButtons = [...args.buttons];
        });
    }
    // === Render === //
    componentMarkup() {
        return _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `
            <div class="modal-container">
                <div class="inner-modal-container">

                    <h2>${this.modalTitle}</h2>

                    ${this.messageContent.map(x => _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `<p>${x}</p>`)}

                    <div class="buttons">

                        ${this.modalButtons.map(x => _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `<wc-wellbeing-button type="${x.type}" label="${x.text}" action="${x.action ? x.action : this._close}"></wc-wellbeing-button>`)}

                    </div>

                </div>
            </div>
        `;
    }
};
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: Boolean })
], Modal.prototype, "showing", void 0);
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: String })
], Modal.prototype, "modalTitle", void 0);
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: Array })
], Modal.prototype, "messageContent", void 0);
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: Array })
], Modal.prototype, "modalButtons", void 0);
Modal = __decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["component"])({ tag: "wc-modal", styles: [__webpack_require__(/*! ./modal.scss */ "./src/components/modal/modal.scss")] })
], Modal);



/***/ }),

/***/ "./src/components/new-prospect-contact-modal/new-prospect-contact-modal.scss":
/*!***********************************************************************************!*\
  !*** ./src/components/new-prospect-contact-modal/new-prospect-contact-modal.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(/*! !../../../node_modules/css-loader?url=false!../../../node_modules/sass-loader/lib/loader.js??ref--8-2!./new-prospect-contact-modal.scss */ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/new-prospect-contact-modal/new-prospect-contact-modal.scss");

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),

/***/ "./src/components/new-prospect-contact-modal/new-prospect-contact-modal.ts":
/*!*********************************************************************************!*\
  !*** ./src/components/new-prospect-contact-modal/new-prospect-contact-modal.ts ***!
  \*********************************************************************************/
/*! exports provided: NewProspectContactModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProspectContactModal", function() { return NewProspectContactModal; });
/* harmony import */ var _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commontimeltd/infinity-framework */ "./node_modules/@commontimeltd/infinity-framework/index.ts");
/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models */ "./src/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let NewProspectContactModal = class NewProspectContactModal extends _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["BaseLitComponent"] {
    constructor() {
        super(...arguments);
        this.show = false;
        // === Private === //
        this._closeModal = () => {
            this.show = false;
            this.manager.emit("close-modal" /* CloseModal */);
        };
    }
    // === Init === //
    _init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    _setupEventListeners() {
        this.manager.on("close-modal" /* CloseModal */, () => this.show = false);
    }
    // === Render === //
    componentMarkup() {
        return _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `
            <div class="new-prospect-contact-modal-container">
                <div class="inner-modal-container">
                    <div class="header">
                        <wc-icon-button icon="${models__WEBPACK_IMPORTED_MODULE_1__["EstorIcons"].IcoMoon.Cross}" action="${this._closeModal}"></wc-icon>
                    </div>
                </div>
            </div>
        `;
    }
};
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: Boolean })
], NewProspectContactModal.prototype, "show", void 0);
NewProspectContactModal = __decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["component"])({ tag: "wc-new-prospect-contact-modal", styles: [__webpack_require__(/*! ./new-prospect-contact-modal.scss */ "./src/components/new-prospect-contact-modal/new-prospect-contact-modal.scss")] })
], NewProspectContactModal);



/***/ }),

/***/ "./src/components/paginated-list/paginated-list.scss":
/*!***********************************************************!*\
  !*** ./src/components/paginated-list/paginated-list.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(/*! !../../../node_modules/css-loader?url=false!../../../node_modules/sass-loader/lib/loader.js??ref--8-2!./paginated-list.scss */ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/paginated-list/paginated-list.scss");

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),

/***/ "./src/components/paginated-list/paginated-list.ts":
/*!*********************************************************!*\
  !*** ./src/components/paginated-list/paginated-list.ts ***!
  \*********************************************************/
/*! exports provided: PaginatedList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatedList", function() { return PaginatedList; });
/* harmony import */ var _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commontimeltd/infinity-framework */ "./node_modules/@commontimeltd/infinity-framework/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

let PaginatedList = class PaginatedList extends _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["BaseLitComponent"] {
    constructor() {
        super(...arguments);
        this.items = [];
        this.selectedItems = [];
        this.currentPage = 1;
        this.paginatedItems = [];
        this.pagination = 20;
        this.totalPages = 1;
        this.maxPaginationButtonsToShow = 10;
        this._rowClick = (item) => {
            if (this.action) {
                this.action(item);
            }
        };
    }
    // === Init === //
    _init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    _setupEventListeners() { }
    // === Private === //
    _getPaginatedItems() {
        if (this.items.length > this.pagination) {
            const start = this.currentPage === 1 ? 0 : (this.currentPage - 1) * this.pagination;
            this.paginatedItems = this.items.slice(start, start + this.pagination);
            this.totalItems = this.items.length;
            this.totalPages = Math.ceil(this.totalItems / this.pagination);
        }
        else {
            this.paginatedItems = this.items;
            this.totalItems = this.items.length;
        }
    }
    _paginationClick(pos) {
        this.currentPage = pos;
        this._getPaginatedItems();
    }
    // === Render === //
    // tslint:disable-next-line no-any
    _shouldRender(props, changedProps, prevProps) {
        // tslint:disable-next-line no-console
        // console.log("Paginated List Attr changed:", name, changedProps, prevProps);
        if (changedProps.items && prevProps.items) {
            this._getPaginatedItems();
        }
        return true;
    }
    componentMarkup() {
        return _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `
            <div class="paginated-list-container">
                ${this.renderHeader ? this.renderHeader() : null}

                ${this.paginatedItems.map(x => this.renderRow ? this.renderRow(x) : null)}

                <p class="size">${this.items.length} elements in the list.</p>

                ${this._renderPagination()}
            </div>
        `;
    }
    _renderPagination() {
        if (!this.totalItems || this.totalItems < this.pagination) {
            return null;
        }
        const start = this.currentPage < this.maxPaginationButtonsToShow
            ? 1
            : Math.floor(this.currentPage / this.maxPaginationButtonsToShow) * this.maxPaginationButtonsToShow || this.currentPage;
        const totalButtonsToRender = this.totalPages > this.maxPaginationButtonsToShow
            ? start + 10
            : this.totalPages + 1;
        const numberedArray = [];
        for (let i = start; i < totalButtonsToRender; i++) {
            if (i <= this.totalPages) {
                numberedArray.push(i);
            }
        }
        return _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `
            <div class="mail-pagination">
                <div class="pagination-inner">
                    ${this.currentPage > 1
            ? _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `<wc-button id="prev" label="Prev" type="pagination" action="${() => this._paginationClick(this.currentPage - 1)}"></wc-button>`
            : null}

                    ${numberedArray.map(x => _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `
                            <wc-button
                                label="${x}"
                                type="pagination ${this.currentPage === x ? "selected" : ""}"
                                action="${() => this._paginationClick(x)}"
                            >
                            </wc-button>
                        `)}

                    ${this.currentPage < this.totalPages
            ? _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `<wc-button id="next" label="Next" type="pagination" action="${() => this._paginationClick(this.currentPage + 1)}"></wc-button>`
            : null}
                </div>
            </div>
        `;
    }
};
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: Array })
], PaginatedList.prototype, "items", void 0);
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: Array })
], PaginatedList.prototype, "selectedItems", void 0);
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: Number })
], PaginatedList.prototype, "currentPage", void 0);
PaginatedList = __decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["component"])({ tag: "wc-paginated-list", styles: [__webpack_require__(/*! ./paginated-list.scss */ "./src/components/paginated-list/paginated-list.scss")] })
], PaginatedList);



/***/ }),

/***/ "./src/components/prospect-add-edit/prospect-add-edit.scss":
/*!*****************************************************************!*\
  !*** ./src/components/prospect-add-edit/prospect-add-edit.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(/*! !../../../node_modules/css-loader?url=false!../../../node_modules/sass-loader/lib/loader.js??ref--8-2!./prospect-add-edit.scss */ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/prospect-add-edit/prospect-add-edit.scss");

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),

/***/ "./src/components/prospect-add-edit/prospect-add-edit.ts":
/*!***************************************************************!*\
  !*** ./src/components/prospect-add-edit/prospect-add-edit.ts ***!
  \***************************************************************/
/*! exports provided: ProspectAddEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProspectAddEdit", function() { return ProspectAddEdit; });
/* harmony import */ var _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commontimeltd/infinity-framework */ "./node_modules/@commontimeltd/infinity-framework/index.ts");
/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models */ "./src/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let ProspectAddEdit = class ProspectAddEdit extends _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["BaseLitComponent"] {
    constructor() {
        super(...arguments);
        this.prospect = null;
        this.editing = false;
    }
    // === Init === //
    _init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    _setupEventListeners() { }
    // === Private === //
    // === Render === //
    componentMarkup() {
        if (!this.prospect) {
            return null;
        }
        return _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `
            <div class="prospect-add-edit-container">
                ${this.prospect.isCompany
            ? this._renderCompany()
            : this._renderPrimary()}

                <div class="detail-item">
                    <label>Address 1</label>
                    <input value="${this.prospect.addressLine1}" disabled?="${!this.editing}" />
                </div>

                <div class="detail-item">
                    <label>Address 2</label>
                    <input value="${this.prospect.addressLine2}" disabled?="${!this.editing}" />
                </div>

                <div class="detail-item">
                    <label>City</label>
                    <input value="${this.prospect.city}" disabled?="${!this.editing}" />
                </div>

                <div class="detail-item">
                    <label>Postcode</label>
                    <input value="${this.prospect.postcode}" disabled?="${!this.editing}" />
                </div>

                <div class="detail-item">
                    <label>Notes</label>
                    <textarea rows="12" value="${this.prospect.notes}" disabled?="${!this.editing}"></textarea>
                </div>
            </div>
        `;
    }
    _renderCompany() {
        return _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `
            <div class="detail-item">
                <label>Company Name</label>
                <input value="${this.prospect.companyName}" disabled?="${!this.editing}" />
            </div>

            <div class="detail-item">
                <label>Company Telephone</label>
                <input value="${this.prospect.companyTelephone}" disabled?="${!this.editing}" />
            </div>

            <div class="detail-item no-margin">
                <label>Company Email</label>
                <input value="${this.prospect.companyEmail}" disabled?="${!this.editing}" />
            </div>

            <div class="divider">
                <hr />
            </div>
        `;
    }
    _renderPrimary() {
        const primary = this.prospect.contacts.find(x => x.primary);
        if (primary) {
            return _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `
                <div class="contact-heading">
                    <h4>Primary Contact</h4>
                    <wc-icon-button icon="${models__WEBPACK_IMPORTED_MODULE_1__["EstorIcons"].IcoMoon.Pencil}" hoverText="Edit primary contact"></wc-icon-button>
                </div>

                <div class="detail-item">
                    <label>First Name</label>
                    <input value="${primary.firstName}" disabled?="${true}" />
                </div>

                <div class="detail-item">
                    <label>Last Name</label>
                    <input value="${primary.lastName}" disabled?="${true}" />
                </div>

                <div class="detail-item">
                    <label>Telephone</label>
                    <input value="${primary.telephone}" disabled?="${true}" />
                </div>

                <div class="detail-item no-margin">
                    <label>Email</label>
                    <input value="${primary.email}" disabled?="${true}" />
                </div>

                <div class="divider">
                    <hr />
                </div>
            `;
        }
        else {
            return null;
        }
    }
};
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: Object })
], ProspectAddEdit.prototype, "prospect", void 0);
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: Boolean })
], ProspectAddEdit.prototype, "editing", void 0);
ProspectAddEdit = __decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["component"])({ tag: "wc-prospect-add-edit", styles: [__webpack_require__(/*! ./prospect-add-edit.scss */ "./src/components/prospect-add-edit/prospect-add-edit.scss")] })
], ProspectAddEdit);



/***/ }),

/***/ "./src/components/prospect-contact-list/prospect-contact-list.scss":
/*!*************************************************************************!*\
  !*** ./src/components/prospect-contact-list/prospect-contact-list.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(/*! !../../../node_modules/css-loader?url=false!../../../node_modules/sass-loader/lib/loader.js??ref--8-2!./prospect-contact-list.scss */ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/prospect-contact-list/prospect-contact-list.scss");

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),

/***/ "./src/components/prospect-contact-list/prospect-contact-list.ts":
/*!***********************************************************************!*\
  !*** ./src/components/prospect-contact-list/prospect-contact-list.ts ***!
  \***********************************************************************/
/*! exports provided: ProspectContactList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProspectContactList", function() { return ProspectContactList; });
/* harmony import */ var _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commontimeltd/infinity-framework */ "./node_modules/@commontimeltd/infinity-framework/index.ts");
/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models */ "./src/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let ProspectContactList = class ProspectContactList extends _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["BaseLitComponent"] {
    constructor() {
        super(...arguments);
        this.contacts = [];
        this.showAddButtons = true;
        this.modalShowing = false;
        // === Private === //
        this._showModal = () => {
            this.modalShowing = !this.modalShowing;
        };
        this._renderHeader = () => {
            return _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `
            <div class="list-header">
                <div class="list-col prospect-type">
                    <span></span>
                </div>

                <div class="list-col prospect-name">
                    <span>Name</span>
                </div>

                <div class="list-col prospect-address">
                    <span>Telephone</span>
                </div>

                <div class="list-col prospect-city">
                    <span>Email</span>
                </div>

                <div class="list-col prospect-quote">
                    <span>Active</span>
                </div>
            </div>
        `;
        };
        this._renderRow = (item) => {
            return _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `
            <div class="list-row">
                <div class="list-col prospect-type">
                    <span><wc-icon icon="${item.primary ? models__WEBPACK_IMPORTED_MODULE_1__["EstorIcons"].IcoMoon.Tick : null}"></wc-icon></span>
                </div>

                <div class="list-col prospect-name">
                    <span>${item.firstName} ${item.lastName}</span>
                </div>

                <div class="list-col prospect-address">
                    <span>${item.telephone}</span>
                </div>

                <div class="list-col prospect-city">
                    <span>${item.email}</span>
                </div>

                <div class="list-col prospect-quote">
                    <span>${item.active ? "Yes" : "No"}</span>
                </div>
            </div>
        `;
        };
    }
    // === Init === //
    _init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    _setupEventListeners() { }
    // === Render === //
    componentMarkup() {
        return _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `
            <div class="prospect-contact-list-container">
                ${this._renderAddButton()}

                <wc-paginated-list
                    items="${this.contacts}"
                    renderHeader="${this._renderHeader}"
                    renderRow="${this._renderRow}"
                ></wc-paginated-list>

                <wc-new-prospect-contact-modal show?="${this.modalShowing}"></wc-new-prospect-contact-modal>
            </div>
        `;
    }
    _renderAddButton() {
        if (this.showAddButtons) {
            return _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `
                <div class="add-buttons">
                    <wc-button leftIcon="${models__WEBPACK_IMPORTED_MODULE_1__["EstorIcons"].IcoMoon.Plus}" label="Add" action="${this._showModal}"></wc-button>
                </div>
            `;
        }
        return null;
    }
};
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: Array })
], ProspectContactList.prototype, "contacts", void 0);
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: Boolean })
], ProspectContactList.prototype, "showAddButtons", void 0);
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: Boolean })
], ProspectContactList.prototype, "modalShowing", void 0);
ProspectContactList = __decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["component"])({ tag: "wc-prospect-contact-list", styles: [__webpack_require__(/*! ./prospect-contact-list.scss */ "./src/components/prospect-contact-list/prospect-contact-list.scss")] })
], ProspectContactList);



/***/ }),

/***/ "./src/components/prospects-panel/prospects-panel.scss":
/*!*************************************************************!*\
  !*** ./src/components/prospects-panel/prospects-panel.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(/*! !../../../node_modules/css-loader?url=false!../../../node_modules/sass-loader/lib/loader.js??ref--8-2!./prospects-panel.scss */ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/prospects-panel/prospects-panel.scss");

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),

/***/ "./src/components/prospects-panel/prospects-panel.ts":
/*!***********************************************************!*\
  !*** ./src/components/prospects-panel/prospects-panel.ts ***!
  \***********************************************************/
/*! exports provided: ProspectsPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProspectsPanel", function() { return ProspectsPanel; });
/* harmony import */ var _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commontimeltd/infinity-framework */ "./node_modules/@commontimeltd/infinity-framework/index.ts");
/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models */ "./src/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let ProspectsPanel = class ProspectsPanel extends _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["BaseLitComponent"] {
    // === Init === //
    _init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    _setupEventListeners() { }
    // === Private === //
    // === Render === //
    componentMarkup() {
        return _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `
            <div class="prospects-panel-container">
                <div class="heading">
                    <wc-icon icon="${models__WEBPACK_IMPORTED_MODULE_1__["EstorIcons"].IcoMoon.User}"></wc-icon>
                    <h3>Prospects</h3>
                </div>

                <div class="stat">
                    <div class="label">
                        <p>New prospects <span>(last 30 days)</span></p>
                    </div>
                    <div class="val">
                        <p>20</p>
                    </div>
                </div>

                <div class="stat">
                    <div class="label">
                        <p>Best source <span>(last 30 days)</span></p>
                    </div>
                    <div class="val">
                        <p>Website form</p>
                    </div>
                </div>

                <div class="stat">
                    <div class="label">
                        <p>Quotes generated <span>(last 30 days)</span></p>
                    </div>
                    <div class="val">
                        <p>10 (50%)</p>
                    </div>
                </div>

                <wc-button type="transparent" label="See More" rightIcon="${models__WEBPACK_IMPORTED_MODULE_1__["EstorIcons"].IcoMoon.ChevronRight}"></wc-button>
            </div>
        `;
    }
};
ProspectsPanel = __decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["component"])({ tag: "wc-prospects-panel", styles: [__webpack_require__(/*! ./prospects-panel.scss */ "./src/components/prospects-panel/prospects-panel.scss")] })
], ProspectsPanel);



/***/ }),

/***/ "./src/components/settings-menu/settings-menu.scss":
/*!*********************************************************!*\
  !*** ./src/components/settings-menu/settings-menu.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(/*! !../../../node_modules/css-loader?url=false!../../../node_modules/sass-loader/lib/loader.js??ref--8-2!./settings-menu.scss */ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/settings-menu/settings-menu.scss");

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),

/***/ "./src/components/settings-menu/settings-menu.ts":
/*!*******************************************************!*\
  !*** ./src/components/settings-menu/settings-menu.ts ***!
  \*******************************************************/
/*! exports provided: SettingsMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsMenu", function() { return SettingsMenu; });
/* harmony import */ var _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commontimeltd/infinity-framework */ "./node_modules/@commontimeltd/infinity-framework/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

let SettingsMenu = class SettingsMenu extends _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["BaseLitComponent"] {
    // === Init === //
    _init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    _setupEventListeners() { }
    // === Private === //
    // === Render === //
    componentMarkup() {
        return _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `
            <div class="settings-menu-container">
                <div class="settings-profile">
                    <img src="images/ben.jpeg" />
                </div>
            </div>
        `;
    }
};
SettingsMenu = __decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["component"])({ tag: "wc-settings-menu", styles: [__webpack_require__(/*! ./settings-menu.scss */ "./src/components/settings-menu/settings-menu.scss")] })
], SettingsMenu);



/***/ }),

/***/ "./src/components/sub-menu/sub-menu.scss":
/*!***********************************************!*\
  !*** ./src/components/sub-menu/sub-menu.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(/*! !../../../node_modules/css-loader?url=false!../../../node_modules/sass-loader/lib/loader.js??ref--8-2!./sub-menu.scss */ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/sub-menu/sub-menu.scss");

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),

/***/ "./src/components/sub-menu/sub-menu.ts":
/*!*********************************************!*\
  !*** ./src/components/sub-menu/sub-menu.ts ***!
  \*********************************************/
/*! exports provided: SubMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubMenu", function() { return SubMenu; });
/* harmony import */ var _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commontimeltd/infinity-framework */ "./node_modules/@commontimeltd/infinity-framework/index.ts");
/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models */ "./src/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let SubMenu = class SubMenu extends _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["BaseLitComponent"] {
    // === Init === //
    _init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    _setupEventListeners() { }
    // === Private === //
    // === Render === //
    componentMarkup() {
        return _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `
            <div class="sub-menu-container">
                <div class="sub-menu-actions">
                    <h3>Actions</h3>
                    <div class="sub-menu-button">
                        <wc-icon icon="${models__WEBPACK_IMPORTED_MODULE_1__["EstorIcons"].IcoMoon.Plus}" height="14" width="14"></wc-icon>
                        <p>New Prospect</p>
                    </div>

                    <div class="sub-menu-button">
                        <wc-icon icon="${models__WEBPACK_IMPORTED_MODULE_1__["EstorIcons"].IcoMoon.Plus}" height="14" width="14"></wc-icon>
                        <p>Import Prospects</p>
                    </div>

                    <div class="sub-menu-button">
                        <wc-icon icon="${models__WEBPACK_IMPORTED_MODULE_1__["EstorIcons"].IcoMoon.Plus}" height="14" width="14"></wc-icon>
                        <p>Review Prospects</p>
                    </div>
                </div>
            </div>
        `;
    }
};
SubMenu = __decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["component"])({ tag: "wc-sub-menu", styles: [__webpack_require__(/*! ./sub-menu.scss */ "./src/components/sub-menu/sub-menu.scss")] })
], SubMenu);



/***/ }),

/***/ "./src/components/version-info/version-info.scss":
/*!*******************************************************!*\
  !*** ./src/components/version-info/version-info.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(/*! !../../../node_modules/css-loader?url=false!../../../node_modules/sass-loader/lib/loader.js??ref--8-2!./version-info.scss */ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/components/version-info/version-info.scss");

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),

/***/ "./src/components/version-info/version-info.ts":
/*!*****************************************************!*\
  !*** ./src/components/version-info/version-info.ts ***!
  \*****************************************************/
/*! exports provided: VersionInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionInfo", function() { return VersionInfo; });
/* harmony import */ var _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commontimeltd/infinity-framework */ "./node_modules/@commontimeltd/infinity-framework/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let VersionInfo = class VersionInfo extends _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["BaseLitComponent"] {
    constructor() {
        super(...arguments);
        this.showBuild = false;
    }
    // === Init === //
    _init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.showBuild = this.manager.config.showBuild;
        });
    }
    _setupEventListeners() { }
    // === Private === //
    // === Render === //
    componentMarkup() {
        return _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `
            <div class="version-info-container">
                <p>
                    Version: ${"0.0.1"}
                    ${this.showBuild
            ? _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["html"] `<span>(Build: ${moment__WEBPACK_IMPORTED_MODULE_1___default()(1535289571127).format("HH:mm DD/MM/YYYY")})`
            : null}
                </p>
                <p>Copyright &copy; ${moment__WEBPACK_IMPORTED_MODULE_1___default()().format("YYYY")} Nick Kipling.</p>
            </div>
        `;
    }
};
__decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["prop"])({ type: Boolean })
], VersionInfo.prototype, "showBuild", void 0);
VersionInfo = __decorate([
    Object(_commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["component"])({ tag: "wc-version-info", styles: [__webpack_require__(/*! ./version-info.scss */ "./src/components/version-info/version-info.scss")] })
], VersionInfo);



/***/ }),

/***/ "./src/fake/prospects.json":
/*!*********************************!*\
  !*** ./src/fake/prospects.json ***!
  \*********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, default */
/***/ (function(module) {


/***/ }),

/***/ "./src/handlers/demo-handler.ts":
/*!**************************************!*\
  !*** ./src/handlers/demo-handler.ts ***!
  \**************************************/
/*! exports provided: EstorDemoHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstorDemoHandler", function() { return EstorDemoHandler; });
/* harmony import */ var _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commontimeltd/infinity-framework */ "./node_modules/@commontimeltd/infinity-framework/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class EstorDemoHandler extends _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__["BaseHandler"] {
    constructor() {
        super(...arguments);
        this.eventType = [
            "demo-event" /* DemoEvent */
        ];
    }
    handleMessage(message) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    handleEvent(eventType, eventArgs) {
        return __awaiter(this, void 0, void 0, function* () {
            alert("Demo event received!");
        });
    }
}


/***/ }),

/***/ "./src/handlers/index.ts":
/*!*******************************!*\
  !*** ./src/handlers/index.ts ***!
  \*******************************/
/*! exports provided: EstorDemoHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _demo_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo-handler */ "./src/handlers/demo-handler.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EstorDemoHandler", function() { return _demo_handler__WEBPACK_IMPORTED_MODULE_0__["EstorDemoHandler"]; });




/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: Breadcrumbs, Button, DashboardPanel, IconButton, Icon, MainMenu, Modal, ProspectsPanel, SettingsMenu, VersionInfo, LatestEvents, SubMenu, PaginatedList, ProspectAddEdit, ProspectContactList, NewProspectContactModal, Login, Dashboard, ProspectDetail, Prospects, QuoteDetail, Quotes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var client_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! client/manager */ "./src/client/manager.ts");
/* harmony import */ var client_rest_rest_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! client/rest/rest-client */ "./src/client/rest/rest-client.ts");
/* harmony import */ var client_store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! client/store/store */ "./src/client/store/store.ts");
/* harmony import */ var handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! handlers */ "./src/handlers/index.ts");
/* harmony import */ var views_register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! views/register */ "./src/views/register.ts");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components */ "./src/components/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Breadcrumbs", function() { return components__WEBPACK_IMPORTED_MODULE_5__["Breadcrumbs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return components__WEBPACK_IMPORTED_MODULE_5__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardPanel", function() { return components__WEBPACK_IMPORTED_MODULE_5__["DashboardPanel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return components__WEBPACK_IMPORTED_MODULE_5__["IconButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return components__WEBPACK_IMPORTED_MODULE_5__["Icon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainMenu", function() { return components__WEBPACK_IMPORTED_MODULE_5__["MainMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return components__WEBPACK_IMPORTED_MODULE_5__["Modal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProspectsPanel", function() { return components__WEBPACK_IMPORTED_MODULE_5__["ProspectsPanel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingsMenu", function() { return components__WEBPACK_IMPORTED_MODULE_5__["SettingsMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VersionInfo", function() { return components__WEBPACK_IMPORTED_MODULE_5__["VersionInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LatestEvents", function() { return components__WEBPACK_IMPORTED_MODULE_5__["LatestEvents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubMenu", function() { return components__WEBPACK_IMPORTED_MODULE_5__["SubMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginatedList", function() { return components__WEBPACK_IMPORTED_MODULE_5__["PaginatedList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProspectAddEdit", function() { return components__WEBPACK_IMPORTED_MODULE_5__["ProspectAddEdit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProspectContactList", function() { return components__WEBPACK_IMPORTED_MODULE_5__["ProspectContactList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewProspectContactModal", function() { return components__WEBPACK_IMPORTED_MODULE_5__["NewProspectContactModal"]; });

/* harmony import */ var views__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! views */ "./src/views/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return views__WEBPACK_IMPORTED_MODULE_6__["Login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dashboard", function() { return views__WEBPACK_IMPORTED_MODULE_6__["Dashboard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProspectDetail", function() { return views__WEBPACK_IMPORTED_MODULE_6__["ProspectDetail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Prospects", function() { return views__WEBPACK_IMPORTED_MODULE_6__["Prospects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuoteDetail", function() { return views__WEBPACK_IMPORTED_MODULE_6__["QuoteDetail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Quotes", function() { return views__WEBPACK_IMPORTED_MODULE_6__["Quotes"]; });






// All components required for your app are exported into the build

// Likewise, the same goes for your views

// Use this to link to your own custom implementations of
// classes like the Store / Rest Client / etc...
const myCustomClasses = {
    store: client_store_store__WEBPACK_IMPORTED_MODULE_2__["EstorStore"],
    rest: client_rest_rest_client__WEBPACK_IMPORTED_MODULE_1__["EstorRestClient"]
};
// Create your own custom event handlers and register them
// inside this const. They will then have their events
// registered at launch and can be used for business logic.
const estorHandlers = {
    demoHandler: handlers__WEBPACK_IMPORTED_MODULE_3__["EstorDemoHandler"]
};
// Pass configuration into your manager
const config = {
    name: "Estor",
    showBuild: true
};
// This is needed to init everything. You could defer this
// into a custom JS script (for example, when inside CTI).
window.EstorManager = new client_manager__WEBPACK_IMPORTED_MODULE_0__["EstorManager"]("body", "view-login", config, views_register__WEBPACK_IMPORTED_MODULE_4__["EstorViews"], myCustomClasses, estorHandlers);


/***/ }),

/***/ "./src/models/enums.ts":
/*!*****************************!*\
  !*** ./src/models/enums.ts ***!
  \*****************************/
/*! exports provided: EventTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventTypes", function() { return EventTypes; });
var EventTypes;
(function (EventTypes) {
    // Chat
    EventTypes["RepliedToCustomer"] = "Replied to customer";
    // General
    EventTypes["EditedReminderSchedule"] = "Edited reminder schedule";
    // Invoicing
    EventTypes["MarkedInvoiceAsPaid"] = "Marked invoice as paid";
    EventTypes["SentNewInvoice"] = "Sent a new invoice";
    // Prospects
    EventTypes["CreatedNewProspect"] = "Added a new prospect";
    // Quotes
    EventTypes["CreatedNewQuote"] = "Created a new quote";
    EventTypes["SentQuoteToProspect"] = "Sent quote to prospect";
})(EventTypes || (EventTypes = {}));


/***/ }),

/***/ "./src/models/icon.ts":
/*!****************************!*\
  !*** ./src/models/icon.ts ***!
  \****************************/
/*! exports provided: EstorIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstorIcons", function() { return EstorIcons; });
// tslint:disable-next-line
const EstorIcons = {
    IcoMoon: {
        ArchiveBox: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M64 128h896v128h-896zM128 896h768v-576h-768v576zM384 384h256v64h-256v-64z"
            ]
        },
        ArrowLeft: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M402.746 877.254l-320-320c-24.994-24.992-24.994-65.516 0-90.51l320-320c24.994-24.992 65.516-24.992 90.51 0 24.994 24.994 24.994 65.516 0 90.51l-210.746 210.746h613.49c35.346 0 64 28.654 64 64s-28.654 64-64 64h-613.49l210.746 210.746c12.496 12.496 18.744 28.876 18.744 45.254s-6.248 32.758-18.744 45.254c-24.994 24.994-65.516 24.994-90.51 0z"
            ]
        },
        ArrowRight: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"
            ]
        },
        Bell: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M1024 832c-106.042 0-192-85.96-192-192v-285.090c0-140.738-109.942-258.128-256-285.084v-69.826h-128v69.824c-146.064 26.958-256 144.346-256 285.084v285.092c0 106.040-85.962 192-192 192v64h429.598c-5.208 11.424-8.11 24.118-8.11 37.49 0 49.986 40.524 90.51 90.512 90.51 49.984 0 90.51-40.524 90.51-90.51 0-13.376-2.9-26.066-8.112-37.49h429.602v-64z",
                "M990.92 384c-16.714 0-30.786-12.98-31.9-29.9-7.526-114.362-58.112-220.42-142.44-298.638-12.958-12.018-13.718-32.264-1.7-45.222 12.020-12.956 32.266-13.716 45.222-1.7 96.366 89.384 154.174 210.614 162.78 341.358 1.16 17.634-12.196 32.872-29.83 34.032-0.714 0.048-1.428 0.070-2.132 0.070z",
                "M33.082 384c-0.708 0-1.416-0.022-2.132-0.070-17.636-1.16-30.99-16.398-29.83-34.032 8.606-130.75 66.416-251.982 162.778-341.36 12.96-12.018 33.206-11.254 45.224 1.702 12.018 12.958 11.256 33.204-1.702 45.222-84.326 78.214-134.912 184.272-142.44 298.64-1.112 16.92-15.186 29.898-31.898 29.898z"
            ]
        },
        Calendar: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M320 384h128v128h-128zM512 384h128v128h-128zM704 384h128v128h-128zM128 768h128v128h-128zM320 768h128v128h-128zM512 768h128v128h-128zM320 576h128v128h-128zM512 576h128v128h-128zM704 576h128v128h-128zM128 576h128v128h-128zM832 0v64h-128v-64h-448v64h-128v-64h-128v1024h960v-1024h-128zM896 960h-832v-704h832v704z"
            ]
        },
        CancelCircle: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 928c-229.75 0-416-186.25-416-416s186.25-416 416-416 416 186.25 416 416-186.25 416-416 416z",
                "M672 256l-160 160-160-160-96 96 160 160-160 160 96 96 160-160 160 160 96-96-160-160 160-160z"
            ]
        },
        ChatBubbleDots: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M928 64h-832c-52.8 0-96 43.2-96 96v512c0 52.8 43.2 96 96 96h160v256l307.2-256h364.8c52.8 0 96-43.2 96-96v-512c0-52.8-43.2-96-96-96zM384 512h-128v-128h128v128zM576 512h-128v-128h128v128zM768 512h-128v-128h128v128z"
            ]
        },
        ChatBubbleExclaim: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M928 0h-832c-52.8 0-96 43.2-96 96v576c0 52.8 43.2 96 96 96h160v256l307.2-256h364.8c52.8 0 96-43.2 96-96v-576c0-52.8-43.2-96-96-96zM576 640h-128v-128h128v128zM576 384h-128v-256h128v256z"
            ]
        },
        ChatBubbleLines: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M928 64h-832c-52.8 0-96 43.2-96 96v512c0 52.8 43.2 96 96 96h160v256l307.2-256h364.8c52.8 0 96-43.2 96-96v-512c0-52.8-43.2-96-96-96zM448 576h-256v-64h256v64zM704 448h-512v-64h512v64zM832 320h-640v-64h640v64z"
            ]
        },
        ChatBubbleSmiley: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M928 0h-832c-52.8 0-96 43.2-96 96v576c0 52.8 43.2 96 96 96h160v256l307.2-256h364.8c52.798 0 96-43.2 96-96v-576c0-52.8-43.2-96-96-96zM320 192c35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64 28.654-64 64-64zM512 640c-119.286 0-219.516-81.586-247.934-192h495.868c-28.418 110.414-128.648 192-247.934 192zM704 320c-35.348 0-64-28.654-64-64s28.652-64 64-64 64 28.654 64 64-28.652 64-64 64z"
            ]
        },
        ChatBubbleTick: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M928 0h-832c-52.8 0-96 43.2-96 96v576c0 52.8 43.2 96 96 96h160v256l307.2-256h364.8c52.8 0 96-43.2 96-96v-576c0-52.8-43.2-96-96-96zM448 602.51l-205.254-237.254 58.508-58.51 146.746 114.744 274.744-242.744 58.512 58.508-333.256 365.256z"
            ]
        },
        Check: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M896 160l-544 544-224-224-96 96 320 320 640-640z"
            ]
        },
        CheckboxChecked: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"
            ]
        },
        CheckboxUnchecked: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM896 896h-768v-768h768v768z"
            ]
        },
        ChevronDown: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M1024 352l-96-96-416 416-416-416-96 96 511.998 512 512.002-512z"
            ]
        },
        ChevronLeft: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M672 1024l96-96-416-416 416-416-96-96-512 511.998 512 512.002z"
            ]
        },
        ChevronRight: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M352 0l-96 96 416 416-416 416 96 96 512-511.998-512-512.002z"
            ]
        },
        ChevronUp: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M0 672l96 96 416-416 416 416 96-96-511.998-512-512.002 512z"
            ]
        },
        Circle: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M0 512c0-282.77 229.23-512 512-512s512 229.23 512 512c0 282.77-229.23 512-512 512s-512-229.23-512-512z"
            ]
        },
        Cog: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M1024 608.094v-192.188l-146.774-24.462c-5.958-18.132-13.222-35.668-21.694-52.5l86.454-121.034-135.896-135.898-120.826 86.304c-16.91-8.554-34.538-15.888-52.768-21.902l-24.402-146.414h-192.188l-24.402 146.416c-18.23 6.014-35.858 13.348-52.766 21.902l-120.828-86.304-135.898 135.898 86.454 121.036c-8.47 16.83-15.734 34.366-21.692 52.498l-146.774 24.46v192.188l147.118 24.52c5.96 17.968 13.21 35.348 21.642 52.030l-86.748 121.448 135.898 135.896 121.654-86.894c16.602 8.35 33.89 15.528 51.764 21.434l24.578 147.472h192.188l24.578-147.474c17.874-5.906 35.162-13.084 51.766-21.432l121.652 86.892 135.896-135.896-86.744-121.446c8.432-16.682 15.678-34.062 21.64-52.032l147.118-24.518zM512 640c-70.692 0-128-57.306-128-128 0-70.692 57.308-128 128-128 70.694 0 128 57.308 128 128 0 70.694-57.306 128-128 128z"
            ]
        },
        Cross: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M893.254 221.254l-90.508-90.508-290.746 290.744-290.746-290.744-90.508 90.506 290.746 290.748-290.746 290.746 90.508 90.508 290.746-290.746 290.746 290.746 90.508-90.51-290.744-290.744z"
            ]
        },
        Disk: {
            viewBox: "0 0 1024 1023",
            paths: [
                "M864 0h-832c-17.6 0-32 14.4-32 32v960c0 17.6 14.4 32 32 32h960c17.6 0 32-14.4 32-32v-832l-160-160zM256 32h512v256c0 17.6-14.4 32-32 32h-448c-17.6 0-32-14.4-32-32v-256zM896 992h-768v-416c0-35.348 28.654-64 64-64h640c35.346 0 64 28.652 64 64v416z",
                "M576 64h128v192h-128v-192z",
                "M256 576h512v64h-512v-64z",
                "M256 704h512v64h-512v-64z",
                "M256 832h512v64h-512v-64z"
            ]
        },
        EnvelopeClosed: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M928 128h-832c-52.8 0-96 43.2-96 96v576c0 52.8 43.2 96 96 96h832c52.798 0 96-43.2 96-96v-576c0-52.8-43.2-96-96-96zM896 320l-384 288-384-288v-64l384 192 384-192v64z"
            ]
        },
        EnvelopeEmpty: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M959.884 192c0.040 0.034 0.082 0.076 0.116 0.116v639.77c-0.034 0.040-0.076 0.082-0.116 0.116h-895.77c-0.040-0.034-0.082-0.076-0.114-0.116v-639.772c0.034-0.040 0.076-0.082 0.114-0.114h895.77zM960 128h-896c-35.2 0-64 28.8-64 64v640c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64v-640c0-35.2-28.8-64-64-64v0z",
                "M373.174 625.478l-192 139.634c-6.392 4.65-13.802 6.888-21.144 6.888-11.126 0-22.098-5.14-29.144-14.828-11.694-16.078-8.14-38.594 7.94-50.29l192-139.636c16.078-11.692 38.594-8.136 50.288 7.942 11.694 16.080 8.14 38.598-7.94 50.29z",
                "M893.116 757.174c-7.042 9.69-18.020 14.828-29.142 14.828-7.344 0-14.752-2.238-21.144-6.884l-192.006-139.64c-16.080-11.696-19.634-34.208-7.942-50.292 11.692-16.082 34.208-19.63 50.29-7.942l192.006 139.638c16.076 11.698 19.63 34.212 7.938 50.292z",
                "M885.174 317.114l-352 256c-6.31 4.594-13.742 6.886-21.174 6.886s-14.862-2.292-21.174-6.882l-352-256c-16.080-11.694-19.634-34.208-7.94-50.288s34.212-19.632 50.288-7.94l330.826 240.596 330.826-240.6c16.076-11.696 38.592-8.138 50.29 7.94 11.692 16.080 8.138 38.594-7.942 50.288v0z"
            ]
        },
        Equalizer: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M448 128v-16c0-26.4-21.6-48-48-48h-160c-26.4 0-48 21.6-48 48v16h-192v128h192v16c0 26.4 21.6 48 48 48h160c26.4 0 48-21.6 48-48v-16h576v-128h-576zM256 256v-128h128v128h-128zM832 432c0-26.4-21.6-48-48-48h-160c-26.4 0-48 21.6-48 48v16h-576v128h576v16c0 26.4 21.6 48 48 48h160c26.4 0 48-21.6 48-48v-16h192v-128h-192v-16zM640 576v-128h128v128h-128zM448 752c0-26.4-21.6-48-48-48h-160c-26.4 0-48 21.6-48 48v16h-192v128h192v16c0 26.4 21.6 48 48 48h160c26.4 0 48-21.6 48-48v-16h576v-128h-576v-16zM256 896v-128h128v128h-128z"
            ]
        },
        Exclaim: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M512 96c-111.118 0-215.584 43.272-294.156 121.844s-121.844 183.038-121.844 294.156c0 111.118 43.272 215.584 121.844 294.156s183.038 121.844 294.156 121.844c111.118 0 215.584-43.272 294.156-121.844s121.844-183.038 121.844-294.156c0-111.118-43.272-215.584-121.844-294.156s-183.038-121.844-294.156-121.844zM512 0v0c282.77 0 512 229.23 512 512s-229.23 512-512 512c-282.77 0-512-229.23-512-512s229.23-512 512-512zM448 704h128v128h-128zM448 192h128v384h-128z"
            ]
        },
        Factory: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M0 1024h512v-1024h-512v1024zM320 128h128v128h-128v-128zM320 384h128v128h-128v-128zM320 640h128v128h-128v-128zM64 128h128v128h-128v-128zM64 384h128v128h-128v-128zM64 640h128v128h-128v-128zM576 320h448v64h-448zM576 1024h128v-256h192v256h128v-576h-448z"
            ]
        },
        Graph: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M736 0l110.058 110.058-270.058 270.060-192-192-352 352 67.882 67.882 284.118-284.118 192 192 337.942-337.94 110.058 110.058v-288z",
                "M832 419.882v604.118h128v-732.118z",
                "M640 611.882v412.118h128v-540.118z",
                "M448 1024h128v-348.118l-128-128z",
                "M256 1024h128v-540.118l-128 128z",
                "M64 803.882v220.118h128v-348.118z"
            ]
        },
        Graph2: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M992 960h-224v-32h-32v32h-320v-32h-32v32h-224v-32h-32v32h-64v-288h32v-32h-32v-224h32v-32h-32v-224h32v-32h-32v-128h-64v1024h1024v-96h-32zM440 392l-16 16v252.118l16-16zM408 424l-16 16v252.118l16-16zM376 708.118v-264.118l-16-8v266.334l14.522 7.262zM536 296l-16 16v252.118l16-16zM472 360l-16 16v252.118l16-16zM344 428l-16-8v266.334l16 8zM504 328l-16 16v252.118l16-16zM248 380l-16-8v266.334l16 8zM184 348l-16-8v266.334l16 8zM312 412l-16-8v266.334l16 8zM216 364l-16-8v266.334l16 8zM152 332l-16-8v266.334l16 8zM568 264l-16 16v252.118l16-16zM280 396l-16-8v266.334l16 8zM824 328l-16 16v341.466l16-24zM856 296l-16 16v325.466l16-24zM888 264l-16 16v309.466l16-24zM952 200l-16 16v277.466l16-24zM920 232l-16 16v293.466l16-24zM1016 136l-16 16v245.466l16-24zM984 168l-16 16v261.466l16-24zM696 336l-16-10.666v309.334l16 21.332zM664 314.666l-16-10.666v288l16 21.334zM600 272l-16-10.666v245.332l16 21.334zM632 293.334l-16-10.668v266.668l16 21.334zM728 357.334l-16-10.668v330.668l16 21.334zM792 360l-16 16v357.464l16-23.998zM760 378.666l-16-10.666v352.002l16 21.332zM768 832l-192-256-192 192-256-128v256h896v-448z"
            ]
        },
        Home: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M804.571 566.857v274.286c0 20-16.571 36.571-36.571 36.571h-219.429v-219.429h-146.286v219.429h-219.429c-20 0-36.571-16.571-36.571-36.571v-274.286c0-1.143 0.571-2.286 0.571-3.429l328.571-270.857 328.571 270.857c0.571 1.143 0.571 2.286 0.571 3.429zM932 527.429l-35.429 42.286c-2.857 3.429-7.429 5.714-12 6.286h-1.714c-4.571 0-8.571-1.143-12-4l-395.429-329.714-395.429 329.714c-4 2.857-8.571 4.571-13.714 4-4.571-0.571-9.143-2.857-12-6.286l-35.429-42.286c-6.286-7.429-5.143-19.429 2.286-25.714l410.857-342.286c24-20 62.857-20 86.857 0l139.429 116.571v-111.429c0-10.286 8-18.286 18.286-18.286h109.714c10.286 0 18.286 8 18.286 18.286v233.143l125.143 104c7.429 6.286 8.571 18.286 2.286 25.714z"
            ]
        },
        InfoCircle: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM448 240c0-26.4 21.6-48 48-48h32c26.4 0 48 21.6 48 48v32c0 26.4-21.6 48-48 48h-32c-26.4 0-48-21.6-48-48v-32zM640 832h-256v-64h64v-256h-64v-64h192v320h64v64z"
            ]
        },
        Leaf: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M1011.328 134.496c-110.752-83.928-281.184-134.034-455.91-134.034-216.12 0-392.226 75.456-483.16 207.020-42.708 61.79-66.33 134.958-70.208 217.474-3.454 73.474 8.884 154.726 36.684 242.146 94.874-284.384 359.82-507.102 665.266-507.102 0 0-285.826 75.232-465.524 308.192-0.112 0.138-2.494 3.090-6.614 8.698-36.080 48.278-67.538 103.162-91.078 165.328-39.87 94.83-76.784 224.948-76.784 381.782h128c0 0-19.43-122.222 14.36-262.79 55.89 7.556 105.858 11.306 150.852 11.306 117.678 0 201.37-25.46 263.388-80.124 55.568-48.978 86.198-114.786 118.624-184.456 49.524-106.408 105.654-227.010 268.654-320.152 9.33-5.332 15.362-14.992 16.056-25.716s-4.040-21.080-12.606-27.572z"
            ]
        },
        Ledger: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M896 128v832h-672c-53.026 0-96-42.98-96-96s42.974-96 96-96h608v-768h-640c-70.398 0-128 57.6-128 128v768c0 70.4 57.602 128 128 128h768v-896h-64zM320 32h320v448l-160-160-160 160v-448z",
                "M224.056 832v0c-0.018 0.002-0.038 0-0.056 0-17.672 0-32 14.326-32 32s14.328 32 32 32c0.018 0 0.038-0.002 0.056-0.002v0.002h607.89v-64h-607.89z"
            ]
        },
        Loader: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M1024 512c-1.278-66.862-15.784-133.516-42.576-194.462-26.704-61-65.462-116.258-113.042-161.92-47.552-45.696-103.944-81.82-164.984-105.652-61.004-23.924-126.596-35.352-191.398-33.966-64.81 1.282-129.332 15.374-188.334 41.356-59.048 25.896-112.542 63.47-156.734 109.576-44.224 46.082-79.16 100.708-102.186 159.798-23.114 59.062-34.128 122.52-32.746 185.27 1.286 62.76 14.964 125.148 40.134 182.206 25.088 57.1 61.476 108.828 106.11 151.548 44.61 42.754 97.472 76.504 154.614 98.72 57.118 22.304 118.446 32.902 179.142 31.526 60.708-1.29 120.962-14.554 176.076-38.914 55.15-24.282 105.116-59.48 146.366-102.644 41.282-43.14 73.844-94.236 95.254-149.43 13.034-33.458 21.88-68.4 26.542-103.798 1.246 0.072 2.498 0.12 3.762 0.12 35.346 0 64-28.652 64-64 0-1.796-0.094-3.572-0.238-5.332h0.238zM922.306 681.948c-23.472 53.202-57.484 101.4-99.178 141.18-41.67 39.81-91 71.186-144.244 91.79-53.228 20.678-110.29 30.452-166.884 29.082-56.604-1.298-112.596-13.736-163.82-36.474-51.25-22.666-97.684-55.49-135.994-95.712-38.338-40.198-68.528-87.764-88.322-139.058-19.87-51.284-29.228-106.214-27.864-160.756 1.302-54.552 13.328-108.412 35.254-157.69 21.858-49.3 53.498-93.97 92.246-130.81 38.73-36.868 84.53-65.87 133.874-84.856 49.338-19.060 102.136-28.006 154.626-26.644 52.5 1.306 104.228 12.918 151.562 34.034 47.352 21.050 90.256 51.502 125.624 88.782 35.396 37.258 63.21 81.294 81.39 128.688 18.248 47.392 26.782 98.058 25.424 148.496h0.238c-0.144 1.76-0.238 3.536-0.238 5.332 0 33.012 24.992 60.174 57.086 63.624-6.224 34.822-16.53 68.818-30.78 100.992z"
            ]
        },
        Login: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M704 0c-176.73 0-320 143.268-320 320 0 20.026 1.858 39.616 5.376 58.624l-389.376 389.376v192c0 35.346 28.654 64 64 64h64v-64h128v-128h128v-128h128l83.042-83.042c34.010 12.316 70.696 19.042 108.958 19.042 176.73 0 320-143.268 320-320s-143.27-320-320-320zM799.874 320.126c-53.020 0-96-42.98-96-96s42.98-96 96-96 96 42.98 96 96-42.98 96-96 96z"
            ]
        },
        Menu: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M64 192h896v128h-896v-128z",
                "M64 448h896v128h-896v-128z",
                "M64 704h896v128h-896v-128z"
            ]
        },
        NoteBook: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M864 64h-704c-17.672 0-32 14.328-32 32v96h-64c-35.346 0-64 28.654-64 64s28.654 64 64 64h64v64h-64c-35.346 0-64 28.654-64 64s28.654 64 64 64h64v64h-64c-35.346 0-64 28.654-64 64s28.654 64 64 64h64v64h-64c-35.346 0-64 28.654-64 64s28.654 64 64 64h64v96c0 17.674 14.328 32 32 32h704c52.936 0 96-43.064 96-96v-768c0-52.934-43.064-96-96-96zM192 896c35.346 0 64-28.654 64-64s-28.654-64-64-64v-64c35.346 0 64-28.654 64-64s-28.654-64-64-64v-64c35.346 0 64-28.654 64-64s-28.654-64-64-64v-64c35.346 0 64-28.654 64-64s-28.654-64-64-64v-64h128v832h-128v-64z"
            ]
        },
        PadLock: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M896 384h-64v-320c0-35.2-28.8-64-64-64h-512c-35.2 0-64 28.8-64 64v320h-64c-35.204 0-64 28.8-64 64v512c0 35.2 28.796 64 64 64h768c35.2 0 64-28.8 64-64v-512c0-35.2-28.8-64-64-64zM576 832h-128l27.84-139.2c-16.808-11.532-27.84-30.874-27.84-52.8 0-35.346 28.654-64 64-64s64 28.654 64 64c0 21.926-11.032 41.268-27.84 52.8l27.84 139.2zM704 384h-384v-256h384v256z"
            ]
        },
        PaperClip: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M665.832 327.048l-64.952-64.922-324.81 324.742c-53.814 53.792-53.814 141.048 0 194.844 53.804 53.792 141.060 53.792 194.874 0l389.772-389.708c89.714-89.662 89.714-235.062 0-324.726-89.666-89.704-235.112-89.704-324.782 0l-409.23 409.178c-0.29 0.304-0.612 0.576-0.876 0.846-125.102 125.096-125.102 327.856 0 452.906 125.054 125.056 327.868 125.056 452.988 0 0.274-0.274 0.516-0.568 0.82-0.876l0.032 0.034 279.332-279.292-64.986-64.92-279.33 279.262c-0.296 0.268-0.564 0.57-0.846 0.844-89.074 89.058-233.98 89.058-323.076 0-89.062-89.042-89.062-233.922 0-322.978 0.304-0.304 0.604-0.582 0.888-0.846l-0.046-0.060 409.28-409.166c53.712-53.738 141.144-53.738 194.886 0 53.712 53.734 53.712 141.148 0 194.84l-389.772 389.7c-17.936 17.922-47.054 17.922-64.972 0-17.894-17.886-17.894-47.032 0-64.92l324.806-324.782z"
            ]
        },
        Pencil: {
            viewBox: "0 0 16 16",
            paths: [
                "M13.5 0c1.381 0 2.5 1.119 2.5 2.5 0 0.563-0.186 1.082-0.5 1.5l-1 1-3.5-3.5 1-1c0.418-0.314 0.937-0.5 1.5-0.5zM1 11.5l-1 4.5 4.5-1 9.25-9.25-3.5-3.5-9.25 9.25zM11.181 5.681l-7 7-0.862-0.862 7-7 0.862 0.862z"
            ]
        },
        Plus: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M960 448h-384v-384h-128v384h-384v128h384v384h128v-384h384z"
            ]
        },
        PuzzlePiece: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M1004.312 464.266l-108.388-108.388c-83.46-83.524 23.382-76.848 85.414-132.49 0.31-0.278 0.618-0.56 0.926-0.844 1.438-1.314 2.86-2.65 4.246-4.036 49.986-49.988 49.986-131.030 0-181.020-49.988-49.986-131.032-49.986-181.020 0-1.386 1.386-2.722 2.808-4.038 4.246-0.284 0.308-0.564 0.616-0.844 0.924-55.652 62.044-48.96 168.922-132.542 85.364l-108.332-108.332c-26.252-26.254-69.21-26.254-95.466 0l-108.282 108.282c-0.010 0.010-0.020 0.018-0.030 0.028-83.61 83.608-76.908-23.288-132.566-85.338-0.28-0.31-0.562-0.618-0.844-0.926-1.316-1.438-2.652-2.86-4.038-4.246-49.986-49.986-131.030-49.986-181.020 0-49.986 49.988-49.986 131.032 0 181.020 1.384 1.386 2.806 2.722 4.246 4.038 0.306 0.284 0.616 0.564 0.924 0.844 62.052 55.658 168.946 48.958 85.34 132.566-0.010 0.010-0.016 0.020-0.028 0.030l-108.28 108.28c-26.254 26.254-26.254 69.214 0 95.468l108.302 108.302c0.002 0.002 0.002 0.004 0.004 0.006 83.608 83.61-23.288 76.908-85.338 132.566-0.31 0.28-0.618 0.562-0.926 0.844-1.438 1.316-2.86 2.652-4.246 4.038-49.986 49.986-49.986 131.030 0 181.020 49.988 49.986 131.032 49.986 181.020 0 1.386-1.384 2.722-2.806 4.038-4.246 0.284-0.306 0.564-0.616 0.844-0.924 55.652-62.046 48.96-168.922 132.54-85.366l108.338 108.338c26.254 26.25 69.214 26.25 95.466 0l125.834-125.834c50.132-64.45-44.844-62.904-101.91-114.090-0.308-0.28-0.618-0.56-0.924-0.844-1.44-1.314-2.862-2.65-4.246-4.038-49.986-49.988-49.986-131.032 0-181.020 49.99-49.986 131.034-49.986 181.020 0 1.384 1.386 2.72 2.808 4.038 4.246 0.282 0.308 0.564 0.616 0.844 0.926 51.186 57.064 49.638 152.042 114.090 101.908l125.834-125.834c26.252-26.254 26.252-69.214 0-95.468z"
            ]
        },
        QuestionMarkCircle: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 832c-35.346 0-64-28.654-64-64s28.654-64 64-64 64 28.654 64 64-28.654 64-64 64zM617.538 504.158c-39.112 24.57-57.538 38.114-57.538 56.092v32c0 26.51-21.49 48-48 48s-48-21.49-48-48v-32c0-33.618 12.964-63.854 38.532-89.87 18.864-19.194 41.778-33.59 63.936-47.512 45.564-28.624 65.532-43.978 65.532-70.868 0-29.252-16.88-48.788-31.042-60.026-22.734-18.040-54.328-27.974-88.958-27.974-52.534 0-99.792 35.082-114.924 85.314-7.648 25.382-34.422 39.758-59.806 32.114-25.382-7.648-39.76-34.422-32.114-59.806 13.112-43.52 40.398-82.63 76.832-110.124 37.71-28.456 82.668-43.498 130.012-43.498 56.208 0 108.994 17.322 148.63 48.776 43.444 34.474 67.37 82.496 67.37 135.224 0 82.76-63.846 122.872-110.462 152.158z"
            ]
        },
        Refresh: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M889.68 166.32c-93.608-102.216-228.154-166.32-377.68-166.32-282.77 0-512 229.23-512 512h96c0-229.75 186.25-416 416-416 123.020 0 233.542 53.418 309.696 138.306l-149.696 149.694h352v-352l-134.32 134.32z",
                "M928 512c0 229.75-186.25 416-416 416-123.020 0-233.542-53.418-309.694-138.306l149.694-149.694h-352v352l134.32-134.32c93.608 102.216 228.154 166.32 377.68 166.32 282.77 0 512-229.23 512-512h-96z"
            ]
        },
        Send: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M448 704l393.636 140.488 182.364-797.356zM320 659.908l704-612.776-1024 506.462zM448 771.954v252.046l185.752-185.752z"
            ]
        },
        SignOut: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M768 640v-128h-320v-128h320v-128l192 192zM704 576v256h-320v192l-384-192v-832h704v320h-64v-256h-512l256 128v576h256v-192z"
            ]
        },
        SquareSliders: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M288 320h-128c-17.6 0-32 14.4-32 32v64c0 17.6 14.4 32 32 32h128c17.6 0 32-14.4 32-32v-64c0-17.6-14.4-32-32-32zM192 128h64v160h-64zM192 480h64v416h-64zM544 576h-128c-17.6 0-32 14.4-32 32v64c0 17.6 14.4 32 32 32h128c17.602 0 32-14.4 32-32v-64c0-17.6-14.398-32-32-32zM448.002 128h64v416h-64zM448.002 736h64v160h-64zM800 384h-128c-17.598 0-32 14.4-32 32v64c0 17.6 14.402 32 32 32h128c17.602 0 32-14.4 32-32v-64c0-17.6-14.398-32-32-32zM704 128h64v224h-64zM704 544h64v352h-64zM880 0h-800c-44.112 0-80 35.888-80 80v864c0 44.112 35.888 80 80 80h800c44.112 0 80-35.888 80-80v-864c0-44.112-35.888-80-80-80zM896 944c0 8.8-7.2 16-16 16h-800c-8.8 0-16-7.2-16-16v-864c0-8.8 7.2-16 16-16h800c8.8 0 16 7.2 16 16v864z"
            ]
        },
        Star: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M1022.442 406.048c-4.274-13.2-16.566-22.142-30.442-22.142l-343.458-0.012-106.122-325.128c-4.296-13.164-16.572-22.072-30.42-22.072s-26.124 8.908-30.42 22.072l-106.12 325.128-343.46 0.012c-13.876 0-26.168 8.942-30.444 22.142-4.274 13.2 0.446 27.65 11.688 35.784l277.736 200.922-106.056 325.026c-4.298 13.174 0.37 27.618 11.568 35.784 11.198 8.162 26.378 8.194 37.606 0.070l277.902-201.006 277.9 201.004c5.598 4.048 12.176 6.072 18.754 6.072 6.62 0 13.236-2.048 18.854-6.142 11.198-8.166 15.868-22.61 11.568-35.784l-106.056-325.024 277.734-200.922c11.242-8.132 15.962-22.582 11.688-35.784z"
            ]
        },
        StarEmpty: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M808.654 1009.706c-6.578 0-13.156-2.024-18.754-6.072l-277.9-201.006-277.9 201.004c-11.228 8.124-26.408 8.092-37.606-0.070-11.198-8.166-15.868-22.61-11.568-35.784l106.056-325.026-277.736-200.92c-11.242-8.132-15.96-22.584-11.688-35.784 4.274-13.2 16.568-22.142 30.444-22.142l343.458-0.012 106.12-325.128c4.296-13.164 16.574-22.072 30.42-22.072s26.124 8.908 30.42 22.072l106.122 325.128 343.458 0.012c13.876 0 26.168 8.942 30.442 22.142 4.276 13.2-0.446 27.65-11.688 35.784l-277.734 200.922 106.056 325.026c4.298 13.174-0.372 27.618-11.568 35.784-5.618 4.092-12.234 6.142-18.854 6.142zM130.826 447.902l216.57 156.674c11.264 8.146 15.978 22.636 11.666 35.852l-82.788 253.716 216.974-156.936c11.192-8.096 26.316-8.098 37.508 0l216.972 156.934-82.788-253.714c-4.312-13.214 0.402-27.706 11.666-35.852l216.568-156.674-267.852-0.008c-13.846 0-26.122-8.908-30.418-22.070l-82.904-254-82.904 253.998c-4.296 13.164-16.572 22.070-30.42 22.070l-267.85 0.010z"
            ]
        },
        Tick: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M896 160l-544 544-224-224-96 96 320 320 640-640z"
            ]
        },
        Trash: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M128 320v640c0 35.2 28.8 64 64 64h576c35.2 0 64-28.8 64-64v-640h-704zM320 896h-64v-448h64v448zM448 896h-64v-448h64v448zM576 896h-64v-448h64v448zM704 896h-64v-448h64v448z",
                "M848 128h-208v-80c0-26.4-21.6-48-48-48h-224c-26.4 0-48 21.6-48 48v80h-208c-26.4 0-48 21.6-48 48v80h832v-80c0-26.4-21.6-48-48-48zM576 128h-192v-63.198h192v63.198z"
            ]
        },
        Truck: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M1024 576l-128-256h-192v-128c0-35.2-28.8-64-64-64h-576c-35.2 0-64 28.8-64 64v512l64 64h81.166c-10.898 18.832-17.166 40.678-17.166 64 0 70.692 57.308 128 128 128s128-57.308 128-128c0-23.322-6.268-45.168-17.166-64h354.334c-10.898 18.832-17.168 40.678-17.168 64 0 70.692 57.308 128 128 128s128-57.308 128-128c0-23.322-6.27-45.168-17.168-64h81.168v-192zM704 576v-192h132.668l96 192h-228.668z"
            ]
        },
        User: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"
            ]
        },
        Users: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M768 770.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z",
                "M327.196 795.328c55.31-36.15 124.080-63.636 199.788-80.414-15.054-17.784-28.708-37.622-40.492-59.020-30.414-55.234-46.492-116.058-46.492-175.894 0-86.042 0-167.31 30.6-233.762 29.706-64.504 83.128-104.496 159.222-119.488-16.914-76.48-61.94-126.75-181.822-126.75-192 0-192 128.942-192 288 0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h279.006c14.518-12.91 30.596-25.172 48.19-36.672z"
            ]
        },
        Phone: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M807.31 1024h-12.11c-65.656 0-164.424-30.696-270.976-84.212-104.108-52.292-199.158-117.622-260.774-179.238-61.618-61.616-126.946-156.664-179.236-260.772-53.52-106.554-84.214-205.322-84.214-270.98v-12.112l6.718-10.076c1.334-2 33.114-49.534 73.354-97.82 42.21-50.65 97.26-108.79 148.728-108.79 44.43 0 99.506 44.564 128.382 71.128 22.172 20.398 76.412 74.278 101.11 133.906 26.14 63.108 3.446 99.128-12.41 114.982-27.332 27.332-54.24 43.962-75.862 57.326-33.994 21.010-38.288 25.524-38.288 40.256 0 46.36 58.024 104.386 114.136 160.504 56.138 56.134 114.166 114.162 160.53 114.162 14.732 0 19.248-4.294 40.256-38.288 13.364-21.624 29.996-48.532 57.328-75.864 15.95-15.95 37.094-24.382 61.148-24.382 26.066 0 55.768 9.972 88.278 29.642 25.698 15.544 52.914 37.024 78.71 62.112 21.556 20.966 91.882 93.714 91.882 149.716 0 51.468-58.14 106.52-108.792 148.728-48.288 40.24-95.82 72.022-97.82 73.354l-10.078 6.718zM80.424 240.564c3.69 53.558 31.24 135.628 75.278 223.306 47.894 95.354 109.32 185.116 164.316 240.11 54.996 54.996 144.756 116.424 240.112 164.316 87.678 44.040 169.742 71.59 223.298 75.28 15.57-10.836 46.392-32.88 77.362-58.45 72.868-60.16 82.144-86.454 83.138-90.162-1.822-11.636-23.552-49.972-70.104-94.56-47.826-45.808-89.868-66.672-108.692-66.672-2.408 0-3.95 0.32-4.58 0.952-20.746 20.746-33.506 41.39-45.844 61.354-22.082 35.73-47.114 76.228-108.308 76.228-79.5 0-149.442-69.94-217.080-137.574-67.654-67.656-137.588-137.594-137.588-217.092 0-61.196 40.498-86.226 76.23-108.308 19.964-12.338 40.608-25.098 61.352-45.842 1.196-1.196 2.11-8.574-2.962-22.708-10.588-29.506-40.378-69.934-77.744-105.504-40.45-38.504-70.86-53.694-79.586-55.16-3.76 1.014-30.166 10.384-90.534 83.6-25.476 30.894-47.306 61.422-58.064 76.886z"
            ]
        },
        Profile: {
            viewBox: "0 0 32 32",
            paths: [
                "M27 0h-24c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h24c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM26 28h-22v-24h22v24zM8 18h14v2h-14zM8 22h14v2h-14zM10 9c0-1.657 1.343-3 3-3s3 1.343 3 3c0 1.657-1.343 3-3 3s-3-1.343-3-3zM15 12h-4c-1.65 0-3 0.9-3 2v2h10v-2c0-1.1-1.35-2-3-2z"
            ]
        }
    }
};


/***/ }),

/***/ "./src/models/index.ts":
/*!*****************************!*\
  !*** ./src/models/index.ts ***!
  \*****************************/
/*! exports provided: EventTypes, EstorIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums */ "./src/models/enums.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventTypes", function() { return _enums__WEBPACK_IMPORTED_MODULE_0__["EventTypes"]; });

/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./src/models/icon.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EstorIcons", function() { return _icon__WEBPACK_IMPORTED_MODULE_1__["EstorIcons"]; });





/***/ }),

/***/ "./src/views/app/dashboard/dashboard.scss":
/*!************************************************!*\
  !*** ./src/views/app/dashboard/dashboard.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(/*! !../../../../node_modules/css-loader?url=false!../../../../node_modules/sass-loader/lib/loader.js??ref--8-2!./dashboard.scss */ "./node_modules/css-loader/index.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--8-2!./src/views/app/dashboard/dashboard.scss");

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),

/***/ "./src/views/app/dashboard/dashboard.ts":
/*!**********************************************!*\
  !*** ./src/views/app/dashboard/dashboard.ts ***!
  \**********************************************/
/*! exports provided: Dashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard", function() { return Dashboard; });
/* harmony import */ var _commontimeltd_infinity_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commontimeltd/infinity-framework */ "./node_modules/@commontimeltd/infinity-framework/index.ts");
/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models */ "./src/models/index.ts");
/* harmony import */ var views_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! views/register */ "./src/views/register.ts");
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
};
