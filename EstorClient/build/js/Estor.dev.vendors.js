(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors"],{

/***/ "../../../../../../usr/local/lib/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../../../../../../usr/local/lib/node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/@commontimeltd/infinity-framework/index.ts":
/*!*****************************************************************!*\
  !*** ./node_modules/@commontimeltd/infinity-framework/index.ts ***!
  \*****************************************************************/
/*! exports provided: Store, html, TemplateResult, repeat, until, asyncAppend, asyncReplace, Logger, LoggerTypes, ClientManager, ReduxClient, makeActionCreator, RestClient, Router, WebSocketClient, TouchTracker, slideToReveal, slideToRevealEnd, slideAwayMotion, slideAwayEnd, buildStyles, getCSSVariable, isFirefox, isIE, isIE11, isCTI, generateGuid, deepClone, defer, ClientEvents, BaseHandler, get, HttpVerb, Icons, component, prop, BaseLitComponent, BaseLitWithLoader, EventArgs, WSEventArgs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/client */ "./node_modules/@commontimeltd/infinity-framework/src/client/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return _src_client__WEBPACK_IMPORTED_MODULE_0__["Logger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoggerTypes", function() { return _src_client__WEBPACK_IMPORTED_MODULE_0__["LoggerTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClientManager", function() { return _src_client__WEBPACK_IMPORTED_MODULE_0__["ClientManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReduxClient", function() { return _src_client__WEBPACK_IMPORTED_MODULE_0__["ReduxClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeActionCreator", function() { return _src_client__WEBPACK_IMPORTED_MODULE_0__["makeActionCreator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RestClient", function() { return _src_client__WEBPACK_IMPORTED_MODULE_0__["RestClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return _src_client__WEBPACK_IMPORTED_MODULE_0__["Router"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebSocketClient", function() { return _src_client__WEBPACK_IMPORTED_MODULE_0__["WebSocketClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TouchTracker", function() { return _src_client__WEBPACK_IMPORTED_MODULE_0__["TouchTracker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideToReveal", function() { return _src_client__WEBPACK_IMPORTED_MODULE_0__["slideToReveal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideToRevealEnd", function() { return _src_client__WEBPACK_IMPORTED_MODULE_0__["slideToRevealEnd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideAwayMotion", function() { return _src_client__WEBPACK_IMPORTED_MODULE_0__["slideAwayMotion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideAwayEnd", function() { return _src_client__WEBPACK_IMPORTED_MODULE_0__["slideAwayEnd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildStyles", function() { return _src_client__WEBPACK_IMPORTED_MODULE_0__["buildStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCSSVariable", function() { return _src_client__WEBPACK_IMPORTED_MODULE_0__["getCSSVariable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFirefox", function() { return _src_client__WEBPACK_IMPORTED_MODULE_0__["isFirefox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIE", function() { return _src_client__WEBPACK_IMPORTED_MODULE_0__["isIE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIE11", function() { return _src_client__WEBPACK_IMPORTED_MODULE_0__["isIE11"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isCTI", function() { return _src_client__WEBPACK_IMPORTED_MODULE_0__["isCTI"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateGuid", function() { return _src_client__WEBPACK_IMPORTED_MODULE_0__["generateGuid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deepClone", function() { return _src_client__WEBPACK_IMPORTED_MODULE_0__["deepClone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return _src_client__WEBPACK_IMPORTED_MODULE_0__["defer"]; });

/* harmony import */ var _src_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/components */ "./node_modules/@commontimeltd/infinity-framework/src/components/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "component", function() { return _src_components__WEBPACK_IMPORTED_MODULE_1__["component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prop", function() { return _src_components__WEBPACK_IMPORTED_MODULE_1__["prop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLitComponent", function() { return _src_components__WEBPACK_IMPORTED_MODULE_1__["BaseLitComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLitWithLoader", function() { return _src_components__WEBPACK_IMPORTED_MODULE_1__["BaseLitWithLoader"]; });

/* harmony import */ var _src_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/events */ "./node_modules/@commontimeltd/infinity-framework/src/events/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClientEvents", function() { return _src_events__WEBPACK_IMPORTED_MODULE_2__["ClientEvents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventArgs", function() { return _src_events__WEBPACK_IMPORTED_MODULE_2__["EventArgs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WSEventArgs", function() { return _src_events__WEBPACK_IMPORTED_MODULE_2__["WSEventArgs"]; });

/* harmony import */ var _src_handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/handlers */ "./node_modules/@commontimeltd/infinity-framework/src/handlers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseHandler", function() { return _src_handlers__WEBPACK_IMPORTED_MODULE_3__["BaseHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "get", function() { return _src_handlers__WEBPACK_IMPORTED_MODULE_3__["get"]; });

/* harmony import */ var _src_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/models */ "./node_modules/@commontimeltd/infinity-framework/src/models/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpVerb", function() { return _src_models__WEBPACK_IMPORTED_MODULE_4__["HttpVerb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icons", function() { return _src_models__WEBPACK_IMPORTED_MODULE_4__["Icons"]; });

/* harmony import */ var _src_store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/store/store */ "./node_modules/@commontimeltd/infinity-framework/src/store/store.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return _src_store_store__WEBPACK_IMPORTED_MODULE_5__["Store"]; });

/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return lit_html__WEBPACK_IMPORTED_MODULE_6__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return lit_html__WEBPACK_IMPORTED_MODULE_6__["TemplateResult"]; });

/* harmony import */ var lit_html_lib_repeat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lit-html/lib/repeat */ "./node_modules/lit-html/lib/repeat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return lit_html_lib_repeat__WEBPACK_IMPORTED_MODULE_7__["repeat"]; });

/* harmony import */ var lit_html_lib_until__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lit-html/lib/until */ "./node_modules/lit-html/lib/until.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "until", function() { return lit_html_lib_until__WEBPACK_IMPORTED_MODULE_8__["until"]; });

/* harmony import */ var lit_html_lib_async_append__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lit-html/lib/async-append */ "./node_modules/lit-html/lib/async-append.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asyncAppend", function() { return lit_html_lib_async_append__WEBPACK_IMPORTED_MODULE_9__["asyncAppend"]; });

/* harmony import */ var lit_html_lib_async_replace__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lit-html/lib/async-replace */ "./node_modules/lit-html/lib/async-replace.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asyncReplace", function() { return lit_html_lib_async_replace__WEBPACK_IMPORTED_MODULE_10__["asyncReplace"]; });














/***/ }),

/***/ "./node_modules/@commontimeltd/infinity-framework/src/client/clientManager.ts":
/*!************************************************************************************!*\
  !*** ./node_modules/@commontimeltd/infinity-framework/src/client/clientManager.ts ***!
  \************************************************************************************/
/*! exports provided: ClientManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientManager", function() { return ClientManager; });
/* harmony import */ var _client_logger_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../client/logger/logger */ "./node_modules/@commontimeltd/infinity-framework/src/client/logger/logger.ts");
/* harmony import */ var _client_router_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client/router/router */ "./node_modules/@commontimeltd/infinity-framework/src/client/router/router.ts");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events */ "./node_modules/@commontimeltd/infinity-framework/src/events/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class ClientManager {
    // === Constructor === //
    constructor(appContainer, defaultView, config, views, appClasses, handlers) {
        this.events = {};
        // Message Events
        this._messageHandlers = new Map();
        this._messageProcessorQueue = Promise.resolve();
        // === Public === //
        this.isReady = false;
        this.reduxUpdate = () => {
            this.logger.log(_client_logger_logger__WEBPACK_IMPORTED_MODULE_0__["LoggerTypes"].ReduxClient, "Redux Update!");
            this.emit(_events__WEBPACK_IMPORTED_MODULE_2__["ClientEvents"].ReduxUpdate);
        };
        this.config = config;
        this.name = this.config.name;
        window.localStorage.setItem("infinity-framework-app-name", this.config.name);
        this.appClasses = appClasses;
        this.handlers = handlers;
        this.appContainer = appContainer;
        this.views = views;
        this.logger = new _client_logger_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"](this.config.logging || []);
        ClientManager.registrations.set(this.name, this);
        if (config.bootstrap === undefined || config.bootstrap === true) {
            if (!window.cti) {
                const store = new appClasses.store(this.name, this.logger);
                let redux;
                if (appClasses.redux) {
                    redux = new appClasses.redux(this.config.redux || {}, store, this.logger, () => this.reduxUpdate());
                }
                this.bootstrap(store, redux, appClasses);
            }
        }
    }
    static GetRegistration(name) {
        return ClientManager.registrations.get(name);
    }
    static FireReady() {
        document.dispatchEvent(new CustomEvent(_events__WEBPACK_IMPORTED_MODULE_2__["ClientEvents"].ClientManagerReady));
    }
    bootstrap(store, redux, appClasses) {
        return Promise.resolve()
            .then(() => this._setStore(store))
            .then(() => this._setRedux(redux))
            .then(() => this._setRestClient(appClasses))
            .then(() => this._setRouter(appClasses))
            .then(() => this._setupHandlers())
            .then(() => this.bindStartupEvents())
            .then(() => {
            this.isReady = true;
            ClientManager.FireReady();
        });
    }
    _setStore(store) {
        return new Promise(resolve => {
            this.store = store;
            this.store.init().then(() => resolve());
        });
    }
    _setRedux(redux) {
        return new Promise(resolve => {
            if (redux) {
                this.redux = redux;
                this.redux.init().then(() => resolve());
            }
            else {
                resolve();
            }
        });
    }
    _setRestClient(appClasses) {
        return new Promise(resolve => {
            this.rest = new appClasses.rest(this.config.rest, this.store, this.logger);
            resolve();
        });
    }
    _setRouter(appClasses) {
        return new Promise(resolve => {
            if (appClasses.router) {
                this.router = appClasses.router;
            }
            else {
                this.router = new _client_router_router__WEBPACK_IMPORTED_MODULE_1__["Router"](this.appContainer, this.views, this.logger, (view) => this.unloadEvents(view));
            }
            this.router.triggerFirstLoad();
            resolve();
        });
    }
    _setupHandlers() {
        return new Promise(resolve => {
            const handlers = Object.keys(this.handlers).map(x => new this.handlers[x](this));
            handlers.forEach(handler => {
                if (handler.messageType) {
                    this._messageHandlers.set(handler.messageType, handler);
                }
                if (handler.eventType && handler.eventType.length) {
                    handler.eventType.forEach(eventType => {
                        this.on(eventType, (e) => __awaiter(this, void 0, void 0, function* () {
                            try {
                                yield handler.callHandleEvent(eventType, e);
                            }
                            catch (ex) {
                                this.logger.error("Error handling event", `Event type: ${eventType.toString()}. ${ex.message || ex}`);
                            }
                        }), true);
                    });
                }
            });
            resolve();
        });
    }
    bindStartupEvents() {
        return new Promise(resolve => {
            document.addEventListener("click", () => this.emit(_events__WEBPACK_IMPORTED_MODULE_2__["ClientEvents"].ClosePopoutMenu));
            window.addEventListener("online", () => this.emit(_events__WEBPACK_IMPORTED_MODULE_2__["ClientEvents"].Online));
            window.addEventListener("offline", () => this.emit(_events__WEBPACK_IMPORTED_MODULE_2__["ClientEvents"].Offline));
            resolve();
        });
    }
    // === Events === //
    // tslint:disable-next-line no-any
    on(key, handler, global = false) {
        const currPage = this.router.currentPage.tag;
        const events = this.events[key];
        if (events) {
            events.push({
                page: !global ? currPage : null,
                handler: handler
            });
        }
        else {
            this.events[key] = [{
                    page: !global ? currPage : null,
                    handler: handler
                }];
        }
    }
    // tslint:disable-next-line no-any
    emit(key, data) {
        const events = this.events[key];
        if (events) {
            events.forEach(x => x.handler(data));
        }
    }
    unloadEvents(prevView) {
        Object.keys(this.events).forEach(x => {
            this.events[x] = this.events[x].filter(e => e.page !== prevView.tag);
        });
    }
    handleNewWSMessage(message) {
        const handler = this._messageHandlers.get(message.action);
        if (!handler) {
            return;
        }
        this._messageProcessorQueue = this._messageProcessorQueue
            .then(() => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield handler.callHandleMessage(message);
            }
            catch (ex) {
                this.logger.error("Error processing message", ex);
            }
        }))
            .catch(ex => {
            this.logger.error("Error processing message", ex);
        });
    }
    // === Public === //
    triggerBootstrap() {
        const store = new this.appClasses.store(this.name, this.logger);
        this.bootstrap(store, this.appClasses.redux ? new this.appClasses.redux(this.config.redux || {}, store, this.logger, () => this.reduxUpdate()) : undefined, this.appClasses);
    }
}
// === Static === //
ClientManager.registrations = new Map();


/***/ }),

/***/ "./node_modules/@commontimeltd/infinity-framework/src/client/index.ts":
/*!****************************************************************************!*\
  !*** ./node_modules/@commontimeltd/infinity-framework/src/client/index.ts ***!
  \****************************************************************************/
/*! exports provided: Logger, LoggerTypes, ClientManager, ReduxClient, makeActionCreator, RestClient, Router, WebSocketClient, TouchTracker, slideToReveal, slideToRevealEnd, slideAwayMotion, slideAwayEnd, buildStyles, getCSSVariable, isFirefox, isIE, isIE11, isCTI, generateGuid, deepClone, defer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logger_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger/logger */ "./node_modules/@commontimeltd/infinity-framework/src/client/logger/logger.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return _logger_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoggerTypes", function() { return _logger_logger__WEBPACK_IMPORTED_MODULE_0__["LoggerTypes"]; });

/* harmony import */ var _clientManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clientManager */ "./node_modules/@commontimeltd/infinity-framework/src/client/clientManager.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClientManager", function() { return _clientManager__WEBPACK_IMPORTED_MODULE_1__["ClientManager"]; });

/* harmony import */ var _redux_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redux/redux */ "./node_modules/@commontimeltd/infinity-framework/src/client/redux/redux.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReduxClient", function() { return _redux_redux__WEBPACK_IMPORTED_MODULE_2__["ReduxClient"]; });

/* harmony import */ var _redux_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux/utils */ "./node_modules/@commontimeltd/infinity-framework/src/client/redux/utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeActionCreator", function() { return _redux_utils__WEBPACK_IMPORTED_MODULE_3__["makeActionCreator"]; });

/* harmony import */ var _rest_client_rest_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rest-client/rest-client */ "./node_modules/@commontimeltd/infinity-framework/src/client/rest-client/rest-client.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RestClient", function() { return _rest_client_rest_client__WEBPACK_IMPORTED_MODULE_4__["RestClient"]; });

/* harmony import */ var _router_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./router/router */ "./node_modules/@commontimeltd/infinity-framework/src/client/router/router.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return _router_router__WEBPACK_IMPORTED_MODULE_5__["Router"]; });

/* harmony import */ var _websockets_ws_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./websockets/ws-client */ "./node_modules/@commontimeltd/infinity-framework/src/client/websockets/ws-client.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebSocketClient", function() { return _websockets_ws_client__WEBPACK_IMPORTED_MODULE_6__["WebSocketClient"]; });

/* harmony import */ var _slideReveal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./slideReveal */ "./node_modules/@commontimeltd/infinity-framework/src/client/slideReveal.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TouchTracker", function() { return _slideReveal__WEBPACK_IMPORTED_MODULE_7__["TouchTracker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideToReveal", function() { return _slideReveal__WEBPACK_IMPORTED_MODULE_7__["slideToReveal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideToRevealEnd", function() { return _slideReveal__WEBPACK_IMPORTED_MODULE_7__["slideToRevealEnd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideAwayMotion", function() { return _slideReveal__WEBPACK_IMPORTED_MODULE_7__["slideAwayMotion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideAwayEnd", function() { return _slideReveal__WEBPACK_IMPORTED_MODULE_7__["slideAwayEnd"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./node_modules/@commontimeltd/infinity-framework/src/client/utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildStyles", function() { return _utils__WEBPACK_IMPORTED_MODULE_8__["buildStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCSSVariable", function() { return _utils__WEBPACK_IMPORTED_MODULE_8__["getCSSVariable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFirefox", function() { return _utils__WEBPACK_IMPORTED_MODULE_8__["isFirefox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIE", function() { return _utils__WEBPACK_IMPORTED_MODULE_8__["isIE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIE11", function() { return _utils__WEBPACK_IMPORTED_MODULE_8__["isIE11"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isCTI", function() { return _utils__WEBPACK_IMPORTED_MODULE_8__["isCTI"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateGuid", function() { return _utils__WEBPACK_IMPORTED_MODULE_8__["generateGuid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deepClone", function() { return _utils__WEBPACK_IMPORTED_MODULE_8__["deepClone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return _utils__WEBPACK_IMPORTED_MODULE_8__["defer"]; });












/***/ }),

/***/ "./node_modules/@commontimeltd/infinity-framework/src/client/logger/logger.ts":
/*!************************************************************************************!*\
  !*** ./node_modules/@commontimeltd/infinity-framework/src/client/logger/logger.ts ***!
  \************************************************************************************/
/*! exports provided: LoggerTypes, Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerTypes", function() { return LoggerTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
// tslint:disable
class LoggerTypes {
}
LoggerTypes.DataStorage = "data-storage";
LoggerTypes.Events = "events";
LoggerTypes.ReduxClient = "redux-client";
LoggerTypes.RestClient = "rest-client";
LoggerTypes.Router = "router";
LoggerTypes.WSClient = "ws-client";
LoggerTypes.Other = "other";
class Logger {
    constructor(types = null) {
        this._types = types;
    }
    log(type, ...logArgs) {
        if (this.shouldLog(type)) {
            console.log.call(null, ...logArgs);
        }
    }
    info(type, ...logArgs) {
        if (this.shouldLog(type)) {
            console.info.call(null, ...logArgs);
        }
    }
    debug(type, ...logArgs) {
        if (this.shouldLog(type)) {
            console.debug.call(null, ...logArgs);
        }
    }
    error(...logArgs) {
        // Errors _always_ get logged
        console.error.call(null, ...logArgs);
    }
    getTypes() {
        return this._types;
    }
    setTypes(types) {
        this._types = types || [];
    }
    shouldLog(type) {
        if (!this._types || !this._types.length) {
            return false;
        }
        if (this._types.includes("_all_")) {
            return true;
        }
        return this._types.includes(type.toString());
    }
}
// tslint:enable


/***/ }),

/***/ "./node_modules/@commontimeltd/infinity-framework/src/client/redux/redux.ts":
/*!**********************************************************************************!*\
  !*** ./node_modules/@commontimeltd/infinity-framework/src/client/redux/redux.ts ***!
  \**********************************************************************************/
/*! exports provided: ReduxClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReduxClient", function() { return ReduxClient; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var _logger_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logger/logger */ "./node_modules/@commontimeltd/infinity-framework/src/client/logger/logger.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class ReduxClient {
    // === Constructor === //
    constructor(config = {}, store, logger, subscriber) {
        // tslint:disable-next-line no-any
        this.select = (selector, ...args) => {
            return selector(this.reduxStore.getState(), ...args);
        };
        // === Private === //
        this._persist = (store) => (next) => (action) => {
            const result = next(action);
            this._persistToStore();
            return result;
        };
        this._persistToStore = () => __awaiter(this, void 0, void 0, function* () {
            // tslint:disable-next-line no-any
            return yield this.store.setState(this.reduxStore.getState());
        });
        this.config = config;
        this.store = store;
        this.logger = logger;
        this.subscriber = subscriber;
    }
    // === Public === //
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.reduxStore = redux__WEBPACK_IMPORTED_MODULE_0__["createStore"](Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(this.reducers()), this.store.getState(), redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"](this._persist));
            this.reduxStore.subscribe(this.subscriber);
        });
    }
    dispatch(action) {
        this.logger.log(_logger_logger__WEBPACK_IMPORTED_MODULE_1__["LoggerTypes"].ReduxClient, "Redux action:", action);
        this.reduxStore.dispatch(action);
    }
    getState() {
        return this.reduxStore.getState();
    }
    // tslint:disable-next-line no-any
    compose(...args) {
        return args.reduce((acc, cur) => cur(typeof acc === "function" ? acc(this.reduxStore.getState()) : acc));
    }
}


/***/ }),

/***/ "./node_modules/@commontimeltd/infinity-framework/src/client/redux/utils.ts":
/*!**********************************************************************************!*\
  !*** ./node_modules/@commontimeltd/infinity-framework/src/client/redux/utils.ts ***!
  \**********************************************************************************/
/*! exports provided: makeActionCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeActionCreator", function() { return makeActionCreator; });
// tslint:disable no-any
function makeActionCreator(type, ...argNames) {
    return function (...args) {
        const action = { type };
        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index];
        });
        return action;
    };
}
// tslint:enable no-any


/***/ }),

/***/ "./node_modules/@commontimeltd/infinity-framework/src/client/rest-client/rest-client.ts":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@commontimeltd/infinity-framework/src/client/rest-client/rest-client.ts ***!
  \**********************************************************************************************/
/*! exports provided: RestClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestClient", function() { return RestClient; });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models */ "./node_modules/@commontimeltd/infinity-framework/src/models/index.ts");
/* harmony import */ var _logger_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logger/logger */ "./node_modules/@commontimeltd/infinity-framework/src/client/logger/logger.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class RestClient {
    // === Constructor === //
    constructor(restConfig, store, logger) {
        this.config = restConfig;
        this.store = store;
        this.logger = logger;
        this._resetRequestOptions();
    }
    // === Protected === //
    _generateQueryString(queryParams) {
        if (!queryParams) {
            return "";
        }
        return queryParams.reduce((acc, cur, idx) => {
            let query = "";
            // tslint:disable curly
            if (idx === 0)
                query += "?";
            else
                query += "&";
            // tslint:enable curly
            if (typeof cur.value !== "string") {
                cur.value = JSON.stringify(cur.value);
            }
            query += `${cur.key}=${encodeURIComponent(cur.value)}`;
            return acc += query;
        }, "");
    }
    _resetRequestOptions() {
        this.headers = new Headers();
        this.requestOptions = {
            headers: this.headers
        };
    }
    // tslint:disable-next-line no-any
    _sendMessage(uri, method, queryParams = [], body = {}, headers = {}, addToQueue = false, opts = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.config) {
                throw new Error("Rest client not properly configured.");
            }
            const messageEntity = {
                id: "",
                address: uri.includes("https") ? uri : `${this.config.baseUri}${uri}`,
                verb: method,
                headers: headers,
                queryParams: queryParams,
                body: body,
                attemps: 0,
                lastAttempt: 0,
                opts: opts
            };
            if (addToQueue) {
                // TODO: Add to message queue
                yield this.store.saveToMessageQueue(messageEntity);
            }
            return yield this._httpRequest(messageEntity);
        });
    }
    // tslint:disable-next-line no-any
    _httpRequest(msg) {
        return __awaiter(this, void 0, void 0, function* () {
            let req;
            this.requestOptions = {
                headers: new Headers(Object.assign({}, msg.headers))
            };
            if (msg.verb === _models__WEBPACK_IMPORTED_MODULE_0__["HttpVerb"].GET) {
                req = Object.assign({
                    method: msg.verb,
                    mode: "cors"
                }, this.requestOptions);
                msg.address += this._generateQueryString(msg.queryParams);
            }
            else {
                req = Object.assign({
                    method: msg.verb,
                    mode: "cors",
                    body: JSON.stringify(msg.body)
                }, this.requestOptions);
            }
            const res = yield fetch(msg.address, Object.assign({}, req, msg.opts));
            // tslint:disable-next-line no-console
            // console.log("Request:", res, res.headers.get("content-type"));
            try {
                // tslint:disable-next-line no-any
                let jsonResult = {};
                if (res.headers && res.headers.get("content-type") && res.headers.get("content-type").includes("application/json")) {
                    jsonResult = yield res.json();
                }
                const result = {
                    error: !res.ok ? true : false,
                    errorMessage: !res.ok ? `${res.status}: ${res.statusText}` : null,
                    result: jsonResult
                };
                // Remove from message queue if message was successful
                if (res.ok) {
                    yield this.store.removeFromMessageQueue(msg);
                }
                else {
                    ++msg.attemps;
                    msg.lastAttempt = new Date().getTime();
                }
                this._resetRequestOptions();
                return result;
            }
            catch (ex) {
                ++msg.attemps;
                msg.lastAttempt = new Date().getTime();
                this._resetRequestOptions();
                this.logger.error(ex);
                return {
                    error: true,
                    errorMessage: ex,
                    result: null
                };
            }
        });
    }
    // === Public === //
    processQueuedMessages() {
        return __awaiter(this, void 0, void 0, function* () {
            this.store.getMessageQueue().forEach(x => this._httpRequest(x));
        });
    }
    // tslint:disable-next-line no-any
    exampleRequest(param) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = [
                { key: "filename", value: param }
            ];
            try {
                const result = yield this._sendMessage("your-endpoint-address", _models__WEBPACK_IMPORTED_MODULE_0__["HttpVerb"].GET, queryParams);
                return result;
            }
            catch (ex) {
                this.logger.log(_logger_logger__WEBPACK_IMPORTED_MODULE_1__["LoggerTypes"].ReduxClient, ex);
            }
        });
    }
}


/***/ }),

/***/ "./node_modules/@commontimeltd/infinity-framework/src/client/router/router.ts":
/*!************************************************************************************!*\
  !*** ./node_modules/@commontimeltd/infinity-framework/src/client/router/router.ts ***!
  \************************************************************************************/
/*! exports provided: Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/@commontimeltd/infinity-framework/src/client/utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class Router {
    // === Constructor === //
    constructor(appContainer, views, logger, routeCallback, authEnabled = false, authCheck = null, pathExceptions = []) {
        this.authEnabled = false;
        this.pathExceptions = [];
        this.authEnabled = authEnabled;
        this.authCheck = authCheck;
        this.pathExceptions = [...pathExceptions, "index.html", "index.ie11.html"];
        this.routeCallback = routeCallback;
        this.appContainer = appContainer;
        this.logger = logger;
        this.views = views;
        this.defaultView = Object.keys(this.views).map(x => this.views[x]).find(x => x.default);
        this._bindEvents();
    }
    // === Private === //
    _bindEvents() {
        window.addEventListener("popstate", (e) => this._popState(e));
    }
    _firstLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = this._getQueryStringParams();
            // We are running inside Electron
            if (window.process && window.process.type) {
                if (this.authEnabled && queryParams.code) {
                    if (this.authCheck) {
                        yield this.authCheck(queryParams);
                    }
                }
                else {
                    this._updateDom(this.defaultView, queryParams);
                }
            }
            else {
                let path = "";
                const idx = window.location.pathname.lastIndexOf("/");
                if (idx > -1) {
                    path = window.location.pathname.substring(idx + 1);
                    if (this.pathExceptions.find(x => x === path)) {
                        path = "";
                    }
                }
                if (path === "" && !queryParams.code && this.defaultView) {
                    this._updateDom(this.defaultView, queryParams);
                }
                else {
                    const view = Object.keys(this.views).map(x => this.views[x]).find(x => x.uri === path);
                    if (view) {
                        if (this.authEnabled && view.auth) {
                            if (queryParams) {
                                localStorage.setItem("queryParams", JSON.stringify(queryParams));
                            }
                            const passAuth = yield this.authCheck(queryParams);
                            if (passAuth) {
                                this._updateDom(view, queryParams);
                            }
                            else {
                                const defaultView = this.defaultView || Object.keys(this.views).map(x => this.views[x]).find(x => x.default);
                                if (defaultView) {
                                    window.history.pushState(defaultView, "/", defaultView.uri);
                                    this._updateDom(defaultView, queryParams);
                                }
                                else {
                                    this.logger.error("Auth check failed and no default view to load has been found.");
                                }
                            }
                        }
                        else {
                            this._updateDom(view, queryParams);
                        }
                    }
                }
            }
        });
    }
    _updateDom(view, query) {
        const container = document.getElementById(this.appContainer);
        if (container) {
            this.routeCallback(this.currentPage);
            this.currentPage = view;
            while (container.childNodes.length > 0) {
                if (container.childNodes[0].parentElement) {
                    container.childNodes[0].parentElement.removeChild(container.childNodes[0]);
                }
                else {
                    container.innerHTML = "";
                }
            }
            const newView = document.createElement(view.tag);
            if (query) {
                newView.query = query;
            }
            container.appendChild(newView);
            window.document.title = view.title;
        }
        else {
            this.logger.error("No app container found.");
        }
    }
    _popState(e) {
        const previousView = e.state;
        if (previousView) {
            if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isCTI"])()) {
                setTimeout(window.history.pushState(previousView, "", `${this._clearHashFromUrl(window.location.href)}${previousView.uri === "/" ? "" : previousView.uri}`), 200);
            }
            this._updateDom(previousView);
        }
        else {
            // We somehow lost our state
            this._updateDom(this.defaultView);
        }
    }
    _navigate(view, query) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.authCheck && view.auth) {
                if (query) {
                    localStorage.setItem("queryParams", JSON.stringify(query));
                }
                const passAuth = yield this.authCheck(query);
                if (passAuth) {
                    this._updateDom(view, query);
                }
            }
            else {
                this._updateDom(view, query);
            }
        });
    }
    _getQueryStringParams() {
        let match;
        const pl = /\+/g;
        const search = /([^&=]+)=?([^&]*)/g;
        const decode = (str) => decodeURIComponent(str.replace(pl, " "));
        const query = window.location.search;
        const params = {};
        while (match = search.exec(query)) {
            params[decode(match[1]).replace("?", "")] = decode(match[2]);
        }
        return params;
    }
    _clearHashFromUrl(url) {
        if (url.includes("index.html")) {
            return `${url.substr(0, window.location.href.indexOf("index.html") + "index.html".length)}/`;
        }
        else {
            return url.substr(0, url.indexOf("#"));
        }
    }
    // === Public === //
    /**
     * Triggers the first load function.
     * This is designed to be called from your application bootstrapping
     * so that you can load when you're ready to do so.
     */
    triggerFirstLoad() {
        this._firstLoad();
    }
    /**
     * Navigate to the supplied view. This is a full forward motion
     * in the browser and creates an entry in the user's history.
     *
     * @param view The view to navigate to.
     * @param query Any query params you would like to pass to the view
     */
    goToPage(view, query) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isCTI"])()) {
                window.history.pushState(view, "", `${this._clearHashFromUrl(window.location.href)}${view.uri === "/" ? "" : view.uri}`);
            }
            else {
                window.history.pushState(view, "", view.uri);
            }
            this._navigate(view, query);
        });
    }
    /**
     * Replaces the current view with the supplied view. This does not create
     * a new history entry.
     *
     * @param view The view to navigate to.
     * @param query Any query params you would like to pass to the view
     */
    replacePage(view, query) {
        window.history.replaceState(view, "", view.uri);
        this._navigate(view, query);
    }
    /**
     * Performs a browser back action. This will leave the history
     * of the user in tact (meaning they can navigate by pressing)
     * the forward button in their browser.
     */
    goBack() {
        window.history.back();
    }
    /**
     * Replaces the current location with the supplied location or
     * resets to the root if not supplied. You can still navigate
     * backwards from this, but you cannot go forward.
     *
     * @param location Path to replace the current page with.
     */
    replace(location) {
        window.location.replace(location || "/");
    }
}


/***/ }),

/***/ "./node_modules/@commontimeltd/infinity-framework/src/client/slideReveal.ts":
/*!**********************************************************************************!*\
  !*** ./node_modules/@commontimeltd/infinity-framework/src/client/slideReveal.ts ***!
  \**********************************************************************************/
/*! exports provided: TouchTracker, slideToReveal, slideToRevealEnd, slideAwayMotion, slideAwayEnd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouchTracker", function() { return TouchTracker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToReveal", function() { return slideToReveal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToRevealEnd", function() { return slideToRevealEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideAwayMotion", function() { return slideAwayMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideAwayEnd", function() { return slideAwayEnd; });
// tslint:disable
class TouchTracker {
}
// This determines the movement speed of the element being dragged. Increase this number to make it faster or lower to make slower
TouchTracker.Accelerator = 2.5;
// Resets current state
TouchTracker.Reset = () => {
    delete TouchTracker.LastTouchStartX;
    delete TouchTracker.LastTouchStartY;
    delete TouchTracker.LastTouchStartTime;
    delete TouchTracker.LastTouchMoveX;
    delete TouchTracker.LastTouchMoveY;
};
TouchTracker.NumMatch = /-?\d+/;
TouchTracker.X = ["clientX"];
TouchTracker.Y = ["clientY"];
TouchTracker.GetNumberValue = (str) => {
    const res = str.match(TouchTracker.NumMatch);
    if (res) {
        return parseInt(res[0]);
    }
    else
        return null;
};
TouchTracker.CheckIfFirstTouch = (x, y) => {
    if (!TouchTracker.LastTouchStartX) {
        TouchTracker.LastTouchStartX = x;
    }
    if (!TouchTracker.LastTouchStartY) {
        TouchTracker.LastTouchStartY = y;
    }
    TouchTracker.LastTouchStartTime = new Date().getTime();
};
function slideToReveal(e, offset, tracking = "x") {
    e.stopPropagation();
    e.stopImmediatePropagation();
    const maxOffset = 0 - (offset + 1);
    const target = e.currentTarget;
    const currPos = target.style.transform;
    let newPos = 0;
    if (currPos) {
        newPos = TouchTracker.GetNumberValue(currPos);
    }
    // if (newPos > maxOffset) {
    TouchTracker.CheckIfFirstTouch(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    const diffX = (TouchTracker.LastTouchMoveX || TouchTracker.LastTouchStartX) - e.changedTouches[0].clientX;
    const diffY = (TouchTracker.LastTouchMoveY || TouchTracker.LastTouchStartY) - e.changedTouches[0].clientY;
    TouchTracker.LastTouchMoveX = e.changedTouches[0].clientX;
    TouchTracker.LastTouchMoveY = e.changedTouches[0].clientY;
    if (tracking === "x") {
        // Moving left
        if (diffX > 0) {
            newPos--;
            if (newPos > maxOffset) {
                target.style.transform = `translateX(${newPos}vw)`;
            }
        }
        // Moving right
        else {
            newPos++;
            if (newPos < 1) {
                target.style.transform = `translateX(${newPos}vw)`;
            }
        }
    }
    else if (tracking === "y") {
        // Moving down
        if (diffY > 1) {
            newPos = newPos - (1 * TouchTracker.Accelerator);
            //--newPos;
            target.style.transform = `translateY(${newPos}vh)`;
        }
        // Moving up
        else if (diffY < -0.5) {
            newPos = newPos + (1 * TouchTracker.Accelerator);
            // ++newPos;
            if (newPos > 0.5)
                newPos = 0;
            target.style.transform = `translateY(${newPos}vh)`;
        }
    }
    // }
}
function slideToRevealEnd(e, maxOffset, axis = "x") {
    e.stopPropagation();
    e.stopImmediatePropagation();
    const target = e.currentTarget;
    const currLeft = target.style.transform;
    let newLeft;
    if (currLeft) {
        newLeft = TouchTracker.GetNumberValue(target.style.transform);
    }
    if (axis === "x") {
        const velocity = calculateVelocityOfCurrentTouch();
        if (velocity > 1.2) {
            target.style.transform = `translateX(0vw)`;
        }
        else if (velocity < -1.2) {
            target.style.transform = `translateX(-${maxOffset}vw)`;
        }
        else {
            const halfWay = Math.round(maxOffset / 2);
            if (newLeft < -halfWay) {
                // Snap to reveal
                target.style.transform = `translateX(-${maxOffset}vw)`;
            }
            else {
                // Snap to reset
                target.style.transform = "translateX(0vw)";
            }
        }
    }
    TouchTracker.Reset();
}
function calculateVelocityOfCurrentTouch() {
    const finalPos = TouchTracker.LastTouchMoveX;
    const initialPos = TouchTracker.LastTouchStartX;
    const finalTime = new Date().getTime();
    const initialTime = TouchTracker.LastTouchStartTime;
    const pos = finalPos - initialPos;
    const time = finalTime - initialTime;
    return pos / time;
}
function slideAwayMotion(e, tracking = "x") {
    e.stopPropagation();
    e.stopImmediatePropagation();
    TouchTracker.CheckIfFirstTouch(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    TouchTracker.LastTouchMoveX = e.changedTouches[0].clientX;
    TouchTracker.LastTouchMoveY = e.changedTouches[0].clientY;
}
function slideAwayEnd(e, leftAction, rightAction, axis = "x", threshold = 5) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    if (axis === "x") {
        const velocity = calculateVelocityOfCurrentTouch();
        if (velocity > threshold && rightAction) {
            rightAction();
        }
        else if (velocity < -threshold && leftAction) {
            leftAction();
        }
    }
    TouchTracker.Reset();
}


/***/ }),

/***/ "./node_modules/@commontimeltd/infinity-framework/src/client/utils.ts":
/*!****************************************************************************!*\
  !*** ./node_modules/@commontimeltd/infinity-framework/src/client/utils.ts ***!
  \****************************************************************************/
/*! exports provided: buildStyles, getCSSVariable, isFirefox, isIE, isIE11, isCTI, deepClone, generateGuid, defer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildStyles", function() { return buildStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCSSVariable", function() { return getCSSVariable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFirefox", function() { return isFirefox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIE", function() { return isIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIE11", function() { return isIE11; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCTI", function() { return isCTI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepClone", function() { return deepClone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateGuid", function() { return generateGuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return defer; });
/**
 * A helper function for passing the TS type check on JSX styles.
 *
 * @param {Object} definitions JSON object of the style definition
 */
// tslint:disable-next-line no-any
function buildStyles(definitions) {
    const element = document.createElement("div");
    return Object.assign({}, element.style, definitions);
}
/**
 * Returns the value of the supplied CSS variable name.
 *
 * @param {String} cssVar Name of the variable to find
 */
function getCSSVariable(cssVar) {
    const value = getComputedStyle(document.firstElementChild).getPropertyValue(cssVar);
    return value ? value.trim() : value;
}
/**
 * Determines if the current browser is Firefox.
 */
function isFirefox() {
    return typeof window.InstallTrigger !== "undefined";
}
/**
 * Determines if the current browser is Internet Explorer.
 *
 * @param {String=} userAgent User agent string to test
 */
function isIE(userAgent) {
    userAgent = userAgent || navigator.userAgent;
    return (userAgent.indexOf("MSIE ") > -1 ||
        userAgent.indexOf("Trident/") > -1 ||
        userAgent.indexOf("Edge/") > -1);
}
/**
 * Determines if the browser is Internet Explorer 11 or not. Ideally
 * use the isIE function instead of this.
 */
function isIE11() {
    // tslint:disable-next-line no-any
    return !!window.MSInputMethodContext && !!document.documentMode;
}
/**
 * Detects if we're running inside CTI
 */
function isCTI() {
    return window.cti ? true : false;
}
/**
 * Deep clones an object using the JSON.stringify / parse method.
 *
 * @param obj Object to deep clone
 */
function deepClone(obj) {
    try {
        return JSON.parse(JSON.stringify(obj));
    }
    catch (_a) {
        return null;
    }
}
/**
 * Generates a random GUID.
 * Can optionally be used to generate a short id six characters in length.
 *
 * @param shortId Set to true to generate a short six string id
 */
function generateGuid(shortId = false) {
    if (shortId) {
        let firstPart = (Math.random() * 46656) | 0;
        let secondPart = (Math.random() * 46656) | 0;
        firstPart = ("000" + firstPart.toString(36)).slice(-3);
        secondPart = ("000" + secondPart.toString(36)).slice(-3);
        return firstPart + secondPart;
    }
    else {
        let d = Date.now();
        if (window.performance && typeof window.performance.now === "function") {
            d += performance.now(); // use high-precision timer if available
        }
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            const r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }
}
/**
 * Defers a function execution
 * Can be used to defer a function execution until the next loop.
 * Used for delaying functions when doing things in async.
 *
 * @param fnc Function to defer
 */
function defer(fnc) {
    setTimeout(fnc, 0);
}


/***/ }),

/***/ "./node_modules/@commontimeltd/infinity-framework/src/client/websockets/ws-client.ts":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@commontimeltd/infinity-framework/src/client/websockets/ws-client.ts ***!
  \*******************************************************************************************/
/*! exports provided: WebSocketClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocketClient", function() { return WebSocketClient; });
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../events */ "./node_modules/@commontimeltd/infinity-framework/src/events/index.ts");
/* harmony import */ var _logger_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logger/logger */ "./node_modules/@commontimeltd/infinity-framework/src/client/logger/logger.ts");


class WebSocketClient {
    // === Constructor === //
    constructor(websocketConfig, logger, messageCallback) {
        this.forceClose = false;
        // Determines if the client will handle automatic connection retries
        this.enableAutoReconnect = false;
        // Ping waiting time
        this.pingWaitingTime = 15000;
        // Time last ping was received
        this.lastPingReceived = 0;
        // MS to delay before trying to reconnect
        this.reconnectInterval = 5000;
        // Decay reconnect attempts in seconds
        this.reconnectDecay = 1.5;
        // Reconnection attempts
        this.reconnectAttempts = -1;
        this.config = websocketConfig;
        this.id = this.config.id;
        this.logger = logger;
        this.messageCallback = messageCallback;
        this.connect();
        this._bindEvents();
    }
    // === Private === //
    _bindEvents() {
        this.socket.onopen = (e) => this._onOpen(e);
        this.socket.onmessage = (m) => this._onMessage(m);
        this.socket.onclose = (e) => this._onClose(e);
    }
    // tslint:disable-next-line no-any
    _onOpen(event) {
        this.logger.log(_logger_logger__WEBPACK_IMPORTED_MODULE_1__["LoggerTypes"].WSClient, `Opened socket: ${this.config.uri}`, event);
        this.forceClose = false;
        if (this.enableAutoReconnect) {
            clearTimeout(this.reconnectTimeout);
            this.reconnectAttempts = -1;
            this.pingTimeout = setTimeout(() => this._pingTimeout(), this.pingWaitingTime);
        }
        this.sendMessage({ type: "register" });
    }
    _onClose(event) {
        this.logger.log(_logger_logger__WEBPACK_IMPORTED_MODULE_1__["LoggerTypes"].WSClient, `Closed socket: ${this.config.uri}`, event);
        // We have been disconnected by something, so attempt to reconnect
        if (this.enableAutoReconnect && !this.forceClose) {
            this.reconnect();
        }
    }
    _onMessage(message) {
        try {
            const data = JSON.parse(message.data);
            if (this.enableAutoReconnect && data.payload.type === "ping") {
                clearTimeout(this.pingTimeout);
                delete this.pingTimeout;
                this.sendMessage({ type: "ping-response" });
            }
            else {
                const args = new _events__WEBPACK_IMPORTED_MODULE_0__["WSEventArgs"](data.payload.action, data.payload.payload);
                this.messageCallback(args);
            }
        }
        catch (ex) {
            this.logger.error(ex);
        }
    }
    _pingTimeout() {
        clearTimeout(this.pingTimeout);
        this.socket.close();
    }
    // === Public === //
    connect() {
        try {
            delete this.socket;
            this.socket = new WebSocket(this.config.uri);
            this._bindEvents();
        }
        catch (ex) {
            this.logger.error("Websocket connection error:", ex);
            if (this.enableAutoReconnect) {
                this.reconnect();
            }
        }
    }
    disconnect() {
        this.forceClose = true;
        this.socket.close();
    }
    reconnect() {
        clearTimeout(this.reconnectTimeout);
        ++this.reconnectAttempts;
        const reconnectIn = this.reconnectInterval * Math.pow(this.reconnectDecay, this.reconnectAttempts);
        this.logger.log(_logger_logger__WEBPACK_IMPORTED_MODULE_1__["LoggerTypes"].WSClient, "Attempting to reconnect in:", reconnectIn);
        this.reconnectTimeout = setTimeout(() => this.connect(), reconnectIn);
    }
    sendMessage(message) {
        if (!message.id) {
            message.id = this.config.id;
        }
        this.socket.send(JSON.stringify(message));
    }
    isConnected() {
        return this.socket.readyState === 1;
    }
}


/***/ }),

/***/ "./node_modules/@commontimeltd/infinity-framework/src/components/base/BaseLitComponent.ts":
/*!************************************************************************************************!*\
  !*** ./node_modules/@commontimeltd/infinity-framework/src/components/base/BaseLitComponent.ts ***!
  \************************************************************************************************/
/*! exports provided: BaseLitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLitComponent", function() { return BaseLitComponent; });
/* harmony import */ var _polymer_lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/lit-element */ "./node_modules/@polymer/lit-element/lit-element.js");
/* harmony import */ var _client_clientManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client/clientManager */ "./node_modules/@commontimeltd/infinity-framework/src/client/clientManager.ts");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../events */ "./node_modules/@commontimeltd/infinity-framework/src/events/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class BaseLitComponent extends _polymer_lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
    constructor() {
        super(...arguments);
        this.managerName = window.localStorage.getItem("infinity-framework-app-name");
        this.mapStateToProps = (state) => {
            return {};
        };
    }
    componentStyles() {
        return null;
    }
    // === Private === //
    _bindManager(ev) {
        return __awaiter(this, void 0, void 0, function* () {
            this.manager = _client_clientManager__WEBPACK_IMPORTED_MODULE_1__["ClientManager"].GetRegistration(this.managerName || window.localStorage.getItem("infinity-framework-app-name"));
            if (this.manager) {
                this._stateListener();
                this._setupEventListeners();
                yield this._init();
            }
        });
    }
    getStyles() {
        if (this.styles && this.styles.length) {
            return this.styles.reduce((acc, cur) => acc += cur, "");
        }
        const componentStyles = this.componentStyles();
        return componentStyles || "";
    }
    _stateListener() {
        if (this.mapStateToProps) {
            this.manager.on(_events__WEBPACK_IMPORTED_MODULE_2__["ClientEvents"].ReduxUpdate, () => this._updateProps());
            this._updateProps();
        }
    }
    _updateProps() {
        if (this.manager.redux) {
            const state = this.manager.redux.getState();
            const props = this.mapStateToProps(state);
            Object.keys(props).forEach(x => {
                this[x] = props[x];
            });
        }
    }
    // === Lifecycle Events === //
    connectedCallback() {
        super.connectedCallback();
        const manager = _client_clientManager__WEBPACK_IMPORTED_MODULE_1__["ClientManager"].GetRegistration(this.managerName || window.localStorage.getItem("infinity-framework-app-name"));
        if (!manager || !manager.isReady) {
            document.addEventListener(_events__WEBPACK_IMPORTED_MODULE_2__["ClientEvents"].ClientManagerReady, (ev) => this._bindManager(ev));
        }
        else {
            this.manager = manager;
            this._stateListener();
            this._setupEventListeners();
            Promise.resolve().then(() => __awaiter(this, void 0, void 0, function* () { return yield this._init(); }));
        }
    }
    // tslint:disable-next-line
    _createRoot() {
        if (this.shadow) {
            return this.attachShadow({ mode: "open" });
        }
        else {
            return this;
        }
    }
    // === Render === //
    _renderStyle() {
        return _polymer_lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `<style>${this.getStyles()}</style>`;
    }
    _render(props) {
        return _polymer_lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
            ${this._renderStyle()}
            ${this.componentMarkup(props)}
        `;
    }
}


/***/ }),

/***/ "./node_modules/@commontimeltd/infinity-framework/src/components/base/BaseLitWithLoader.ts":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@commontimeltd/infinity-framework/src/components/base/BaseLitWithLoader.ts ***!
  \*************************************************************************************************/
/*! exports provided: BaseLitWithLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLitWithLoader", function() { return BaseLitWithLoader; });
/* harmony import */ var _polymer_lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/lit-element */ "./node_modules/@polymer/lit-element/lit-element.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ */ "./node_modules/@commontimeltd/infinity-framework/src/components/base/index.ts");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorators */ "./node_modules/@commontimeltd/infinity-framework/src/components/base/decorators/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



class BaseLitWithLoader extends ___WEBPACK_IMPORTED_MODULE_1__["BaseLitComponent"] {
    constructor() {
        super(...arguments);
        this.isLoading = false;
    }
    // === Protected === //
    toggleLoading(value) {
        if (value === undefined) {
            this.isLoading = !this.isLoading;
        }
        else {
            this.isLoading = value;
        }
    }
    renderLoader() {
        return _polymer_lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `<wc-loading-spinner iconColor="black" showing="${this.isLoading}"></wc-loading-spinner>`;
    }
}
__decorate([
    Object(_decorators__WEBPACK_IMPORTED_MODULE_2__["prop"])({ type: Boolean })
], BaseLitWithLoader.prototype, "isLoading", void 0);


/***/ }),

/***/ "./node_modules/@commontimeltd/infinity-framework/src/components/base/decorators/component.ts":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@commontimeltd/infinity-framework/src/components/base/decorators/component.ts ***!
  \****************************************************************************************************/
/*! exports provided: component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "component", function() { return component; });
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../client */ "./node_modules/@commontimeltd/infinity-framework/src/client/index.ts");

/**
 * Used to define a component and handle registration. You can
 * provide this definition parameter which includes the styles
 * for the component, tag definition and optionally if it will
 * use the ShadowDOM or not.
 *
 * @param {Object} definition Component definition options
 * @param {String} definition.tag The component tag name
 * @param {Array} definition.styles An array of stylesheet paths
 * @param {Boolean | String} definition.shadow Use ShadowDOM or not
 */
function component(definition) {
    // tslint:disable-next-line no-any
    return (constructor) => {
        const existing = customElements.get(definition.tag);
        if (!existing) {
            customElements.define(definition.tag, constructor);
        }
        constructor.prototype.styles = definition.styles;
        constructor.prototype.shadow = enableShadow(definition.shadow);
        return class extends constructor {
            static get is() {
                return definition.tag;
            }
            static set styles(val) {
                this.styles = val;
            }
            static set shadow(val) {
                this.shadow = val;
            }
        };
    };
}
/**
 * Determines if this component should use the ShadowDOM or not.
 * The default is that if the ShadowDOM is avaiable in the browser
 * then components will use it.
 *
 * You can override this by providing the preference property. The
 * available options are: true, false or "if-available".
 *
 * @param {String | Boolean} preference Override for usage of ShadowDOM
 */
function enableShadow(preference) {
    return (preference === undefined || (typeof preference === "string" && preference === "if-available")
        ? Object(_client__WEBPACK_IMPORTED_MODULE_0__["isIE"])() || Object(_client__WEBPACK_IMPORTED_MODULE_0__["isFirefox"])() ? false : true
        : preference);
}


/***/ }),

/***/ "./node_modules/@commontimeltd/infinity-framework/src/components/base/decorators/index.ts":
/*!************************************************************************************************!*\
  !*** ./node_modules/@commontimeltd/infinity-framework/src/components/base/decorators/index.ts ***!
  \************************************************************************************************/
/*! exports provided: component, prop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/@commontimeltd/infinity-framework/src/components/base/decorators/component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "component", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["component"]; });

/* harmony import */ var _prop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prop */ "./node_modules/@commontimeltd/infinity-framework/src/components/base/decorators/prop.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prop", function() { return _prop__WEBPACK_IMPORTED_MODULE_1__["prop"]; });





/***/ }),

/***/ "./node_modules/@commontimeltd/infinity-framework/src/components/base/decorators/prop.ts":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@commontimeltd/infinity-framework/src/components/base/decorators/prop.ts ***!
  \***********************************************************************************************/
/*! exports provided: prop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prop", function() { return prop; });
// tslint:disable no-any
const identityFn = (x) => x;
function prop(property) {
    return function (target, propertyKey) {
        // obtain properties provide by the @prop decorator
        const { type } = property;
        // get constructor of element
        const ctor = target.constructor;
        const existingLitProps = (ctor.properties || {});
        const litProps = Object.assign({}, existingLitProps, { [propertyKey]: type });
        Object.defineProperty(ctor, "properties", {
            configurable: true,
            get() {
                return litProps;
            }
        });
    };
}
// tslint:enable no-any


/***/ }),

/***/ "./node_modules/@commontimeltd/infinity-framework/src/components/base/index.ts":
/*!*************************************************************************************!*\
  !*** ./node_modules/@commontimeltd/infinity-framework/src/components/base/index.ts ***!
  \*************************************************************************************/
/*! exports provided: component, prop, BaseLitComponent, BaseLitWithLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorators */ "./node_modules/@commontimeltd/infinity-framework/src/components/base/decorators/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "component", function() { return _decorators__WEBPACK_IMPORTED_MODULE_0__["component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prop", function() { return _decorators__WEBPACK_IMPORTED_MODULE_0__["prop"]; });

/* harmony import */ var _BaseLitComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseLitComponent */ "./node_modules/@commontimeltd/infinity-framework/src/components/base/BaseLitComponent.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLitComponent", function() { return _BaseLitComponent__WEBPACK_IMPORTED_MODULE_1__["BaseLitComponent"]; });

/* harmony import */ var _BaseLitWithLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseLitWithLoader */ "./node_modules/@commontimeltd/infinity-framework/src/components/base/BaseLitWithLoader.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLitWithLoader", function() { return _BaseLitWithLoader__WEBPACK_IMPORTED_MODULE_2__["BaseLitWithLoader"]; });






/***/ }),

/***/ "./node_modules/@commontimeltd/infinity-framework/src/components/index.ts":
/*!********************************************************************************!*\
  !*** ./node_modules/@commontimeltd/infinity-framework/src/components/index.ts ***!
  \********************************************************************************/
/*! exports provided: component, prop, BaseLitComponent, BaseLitWithLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@commontimeltd/infinity-framework/src/components/base/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "component", function() { return _base__WEBPACK_IMPORTED_MODULE_0__["component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prop", function() { return _base__WEBPACK_IMPORTED_MODULE_0__["prop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLitComponent", function() { return _base__WEBPACK_IMPORTED_MODULE_0__["BaseLitComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLitWithLoader", function() { return _base__WEBPACK_IMPORTED_MODULE_0__["BaseLitWithLoader"]; });




/***/ }),

/***/ "./node_modules/@commontimeltd/infinity-framework/src/events/event-args/event-args.ts":
/*!********************************************************************************************!*\
  !*** ./node_modules/@commontimeltd/infinity-framework/src/events/event-args/event-args.ts ***!
  \********************************************************************************************/
/*! exports provided: EventArgs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventArgs", function() { return EventArgs; });
class EventArgs {
    constructor() { }
}


/***/ }),

/***/ "./node_modules/@commontimeltd/infinity-framework/src/events/event-args/index.ts":
/*!***************************************************************************************!*\
  !*** ./node_modules/@commontimeltd/infinity-framework/src/events/event-args/index.ts ***!
  \***************************************************************************************/
/*! exports provided: EventArgs, WSEventArgs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-args */ "./node_modules/@commontimeltd/infinity-framework/src/events/event-args/event-args.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventArgs", function() { return _event_args__WEBPACK_IMPORTED_MODULE_0__["EventArgs"]; });

/* harmony import */ var _ws_event_args__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ws-event-args */ "./node_modules/@commontimeltd/infinity-framework/src/events/event-args/ws-event-args.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WSEventArgs", function() { return _ws_event_args__WEBPACK_IMPORTED_MODULE_1__["WSEventArgs"]; });





/***/ }),

/***/ "./node_modules/@commontimeltd/infinity-framework/src/events/event-args/ws-event-args.ts":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@commontimeltd/infinity-framework/src/events/event-args/ws-event-args.ts ***!
  \***********************************************************************************************/
/*! exports provided: WSEventArgs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WSEventArgs", function() { return WSEventArgs; });
/* harmony import */ var _event_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../event-args */ "./node_modules/@commontimeltd/infinity-framework/src/events/event-args/index.ts");

class WSEventArgs extends _event_args__WEBPACK_IMPORTED_MODULE_0__["EventArgs"] {
    // tslint:disable-next-line no-any
    constructor(action, payload) {
        super();
        this.action = action;
        this.payload = payload;
    }
}


/***/ }),

/***/ "./node_modules/@commontimeltd/infinity-framework/src/events/index.ts":
/*!****************************************************************************!*\
  !*** ./node_modules/@commontimeltd/infinity-framework/src/events/index.ts ***!
  \****************************************************************************/
/*! exports provided: ClientEvents, EventArgs, WSEventArgs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientEvents", function() { return ClientEvents; });
/* harmony import */ var _event_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-args */ "./node_modules/@commontimeltd/infinity-framework/src/events/event-args/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventArgs", function() { return _event_args__WEBPACK_IMPORTED_MODULE_0__["EventArgs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WSEventArgs", function() { return _event_args__WEBPACK_IMPORTED_MODULE_0__["WSEventArgs"]; });

class ClientEvents {
}
// tslint:disable
// Client Manager Ready
ClientEvents.ClientManagerReady = "client-manager-ready";
// Popout Menu Events
ClientEvents.ClosePopoutMenu = "close-popout-menu";
// Connectivity Events
ClientEvents.Online = "online";
ClientEvents.Offline = "offline";
// Redux
ClientEvents.ReduxUpdate = "redux-update";



/***/ }),

/***/ "./node_modules/@commontimeltd/infinity-framework/src/handlers/base-handler.ts":
/*!*************************************************************************************!*\
  !*** ./node_modules/@commontimeltd/infinity-framework/src/handlers/base-handler.ts ***!
  \*************************************************************************************/
/*! exports provided: BaseHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseHandler", function() { return BaseHandler; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class BaseHandler {
    // === Constructor === //
    constructor(manager) {
        // === Public Props === //
        this.messageType = null;
        this.eventType = [];
        this.filters = [];
        this.manager = manager;
    }
    // === Public === //
    callHandleMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.handleMessage(message);
        });
    }
    callHandleEvent(eventType, eventData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.handleEvent(eventType, eventData);
        });
    }
    registerFilter(filter) {
        if (!this.filters.includes("filter")) {
            this.filters.push(filter);
        }
    }
    unregisterFilter(filter) {
        const remove = this.filters.findIndex(x => x === filter);
        if (remove > -1) {
            this.filters.splice(remove, 1);
        }
    }
    clearAllFilters() {
        this.filters = [];
    }
}


/***/ }),

/***/ "./node_modules/@commontimeltd/infinity-framework/src/handlers/index.ts":
/*!******************************************************************************!*\
  !*** ./node_modules/@commontimeltd/infinity-framework/src/handlers/index.ts ***!
  \******************************************************************************/
/*! exports provided: BaseHandler, get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony import */ var _base_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-handler */ "./node_modules/@commontimeltd/infinity-framework/src/handlers/base-handler.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseHandler", function() { return _base_handler__WEBPACK_IMPORTED_MODULE_0__["BaseHandler"]; });


function get(clientManager) {
    return [];
}


/***/ }),

/***/ "./node_modules/@commontimeltd/infinity-framework/src/models/enums.ts":
/*!****************************************************************************!*\
  !*** ./node_modules/@commontimeltd/infinity-framework/src/models/enums.ts ***!
  \****************************************************************************/
/*! exports provided: HttpVerb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpVerb", function() { return HttpVerb; });
var HttpVerb;
(function (HttpVerb) {
    HttpVerb["GET"] = "get";
    HttpVerb["POST"] = "post";
    HttpVerb["PUT"] = "put";
    HttpVerb["PATCH"] = "patch";
    HttpVerb["DELETE"] = "delete";
})(HttpVerb || (HttpVerb = {}));


/***/ }),

/***/ "./node_modules/@commontimeltd/infinity-framework/src/models/icon.ts":
/*!***************************************************************************!*\
  !*** ./node_modules/@commontimeltd/infinity-framework/src/models/icon.ts ***!
  \***************************************************************************/
/*! exports provided: Icons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icons", function() { return Icons; });
const Icons = {
    FontAwesome: {
        Bars: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M877.714 768v73.143c0 20-16.571 36.571-36.571 36.571h-804.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h804.571c20 0 36.571 16.571 36.571 36.571zM877.714 475.429v73.143c0 20-16.571 36.571-36.571 36.571h-804.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h804.571c20 0 36.571 16.571 36.571 36.571zM877.714 182.857v73.143c0 20-16.571 36.571-36.571 36.571h-804.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h804.571c20 0 36.571 16.571 36.571 36.571z"
            ]
        },
        ChevronRight: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M632.571 501.143l-424 424c-14.286 14.286-37.143 14.286-51.429 0l-94.857-94.857c-14.286-14.286-14.286-37.143 0-51.429l303.429-303.429-303.429-303.429c-14.286-14.286-14.286-37.143 0-51.429l94.857-94.857c14.286-14.286 37.143-14.286 51.429 0l424 424c14.286 14.286 14.286 37.143 0 51.429z"
            ]
        },
        Cog: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM877.714 449.714v126.857c0 8.571-6.857 18.857-16 20.571l-105.714 16c-6.286 18.286-13.143 35.429-22.286 52 19.429 28 40 53.143 61.143 78.857 3.429 4 5.714 9.143 5.714 14.286s-1.714 9.143-5.143 13.143c-13.714 18.286-90.857 102.286-110.286 102.286-5.143 0-10.286-2.286-14.857-5.143l-78.857-61.714c-16.571 8.571-34.286 16-52 21.714-4 34.857-7.429 72-16.571 106.286-2.286 9.143-10.286 16-20.571 16h-126.857c-10.286 0-19.429-7.429-20.571-17.143l-16-105.143c-17.714-5.714-34.857-12.571-51.429-21.143l-80.571 61.143c-4 3.429-9.143 5.143-14.286 5.143s-10.286-2.286-14.286-6.286c-30.286-27.429-70.286-62.857-94.286-96-2.857-4-4-8.571-4-13.143 0-5.143 1.714-9.143 4.571-13.143 19.429-26.286 40.571-51.429 60-78.286-9.714-18.286-17.714-37.143-23.429-56.571l-104.571-15.429c-9.714-1.714-16.571-10.857-16.571-20.571v-126.857c0-8.571 6.857-18.857 15.429-20.571l106.286-16c5.714-18.286 13.143-35.429 22.286-52.571-19.429-27.429-40-53.143-61.143-78.857-3.429-4-5.714-8.571-5.714-13.714s2.286-9.143 5.143-13.143c13.714-18.857 90.857-102.286 110.286-102.286 5.143 0 10.286 2.286 14.857 5.714l78.857 61.143c16.571-8.571 34.286-16 52-21.714 4-34.857 7.429-72 16.571-106.286 2.286-9.143 10.286-16 20.571-16h126.857c10.286 0 19.429 7.429 20.571 17.143l16 105.143c17.714 5.714 34.857 12.571 51.429 21.143l81.143-61.143c3.429-3.429 8.571-5.143 13.714-5.143s10.286 2.286 14.286 5.714c30.286 28 70.286 63.429 94.286 97.143 2.857 3.429 4 8 4 12.571 0 5.143-1.714 9.143-4.571 13.143-19.429 26.286-40.571 51.429-60 78.286 9.714 18.286 17.714 37.143 23.429 56l104.571 16c9.714 1.714 16.571 10.857 16.571 20.571z"
            ]
        },
        Cross: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"
            ]
        },
        CircleCross: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M626.857 616.571l-83.429 83.429c-7.429 7.429-18.857 7.429-26.286 0l-78.286-78.286-78.286 78.286c-7.429 7.429-18.857 7.429-26.286 0l-83.429-83.429c-7.429-7.429-7.429-18.857 0-26.286l78.286-78.286-78.286-78.286c-7.429-7.429-7.429-18.857 0-26.286l83.429-83.429c7.429-7.429 18.857-7.429 26.286 0l78.286 78.286 78.286-78.286c7.429-7.429 18.857-7.429 26.286 0l83.429 83.429c7.429 7.429 7.429 18.857 0 26.286l-78.286 78.286 78.286 78.286c7.429 7.429 7.429 18.857 0 26.286zM749.714 512c0-171.429-139.429-310.857-310.857-310.857s-310.857 139.429-310.857 310.857 139.429 310.857 310.857 310.857 310.857-139.429 310.857-310.857zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"
            ]
        },
        Info: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M365.714 768v73.143c0 20-16.571 36.571-36.571 36.571h-292.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571v-219.429h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h219.429c20 0 36.571 16.571 36.571 36.571v329.143h36.571c20 0 36.571 16.571 36.571 36.571zM292.571 109.714v109.714c0 20-16.571 36.571-36.571 36.571h-146.286c-20 0-36.571-16.571-36.571-36.571v-109.714c0-20 16.571-36.571 36.571-36.571h146.286c20 0 36.571 16.571 36.571 36.571z"
            ]
        },
        LeftArrow: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M877.714 512v73.143c0 38.857-25.714 73.143-66.857 73.143h-402.286l167.429 168c13.714 13.143 21.714 32 21.714 51.429s-8 38.286-21.714 51.429l-42.857 43.429c-13.143 13.143-32 21.143-51.429 21.143s-38.286-8-52-21.143l-372-372.571c-13.143-13.143-21.143-32-21.143-51.429s8-38.286 21.143-52l372-371.429c13.714-13.714 32.571-21.714 52-21.714s37.714 8 51.429 21.714l42.857 42.286c13.714 13.714 21.714 32.571 21.714 52s-8 38.286-21.714 52l-167.429 167.429h402.286c41.143 0 66.857 34.286 66.857 73.143z"
            ]
        },
        Logout: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M365.714 822.857c0 16 7.429 54.857-18.286 54.857h-182.857c-90.857 0-164.571-73.714-164.571-164.571v-402.286c0-90.857 73.714-164.571 164.571-164.571h182.857c9.714 0 18.286 8.571 18.286 18.286 0 16 7.429 54.857-18.286 54.857h-182.857c-50.286 0-91.429 41.143-91.429 91.429v402.286c0 50.286 41.143 91.429 91.429 91.429h164.571c14.286 0 36.571-2.857 36.571 18.286zM896 512c0 9.714-4 18.857-10.857 25.714l-310.857 310.857c-6.857 6.857-16 10.857-25.714 10.857-20 0-36.571-16.571-36.571-36.571v-164.571h-256c-20 0-36.571-16.571-36.571-36.571v-219.429c0-20 16.571-36.571 36.571-36.571h256v-164.571c0-20 16.571-36.571 36.571-36.571 9.714 0 18.857 4 25.714 10.857l310.857 310.857c6.857 6.857 10.857 16 10.857 25.714z"
            ]
        },
        PencilSquareO: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M507.429 676.571l66.286-66.286-86.857-86.857-66.286 66.286v32h54.857v54.857h32zM758.857 265.143c-5.143-5.143-13.714-4.571-18.857 0.571l-200 200c-5.143 5.143-5.714 13.714-0.571 18.857s13.714 4.571 18.857-0.571l200-200c5.143-5.143 5.714-13.714 0.571-18.857zM804.571 604.571v108.571c0 90.857-73.714 164.571-164.571 164.571h-475.429c-90.857 0-164.571-73.714-164.571-164.571v-475.429c0-90.857 73.714-164.571 164.571-164.571h475.429c22.857 0 45.714 4.571 66.857 14.286 5.143 2.286 9.143 7.429 10.286 13.143 1.143 6.286-0.571 12-5.143 16.571l-28 28c-5.143 5.143-12 6.857-18.286 4.571-8.571-2.286-17.143-3.429-25.714-3.429h-475.429c-50.286 0-91.429 41.143-91.429 91.429v475.429c0 50.286 41.143 91.429 91.429 91.429h475.429c50.286 0 91.429-41.143 91.429-91.429v-72c0-4.571 1.714-9.143 5.143-12.571l36.571-36.571c5.714-5.714 13.143-6.857 20-4s11.429 9.143 11.429 16.571zM749.714 182.857l164.571 164.571-384 384h-164.571v-164.571zM1003.429 258.286l-52.571 52.571-164.571-164.571 52.571-52.571c21.143-21.143 56.571-21.143 77.714 0l86.857 86.857c21.143 21.143 21.143 56.571 0 77.714z"
            ]
        },
        Plus: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M804.571 420.571v109.714c0 30.286-24.571 54.857-54.857 54.857h-237.714v237.714c0 30.286-24.571 54.857-54.857 54.857h-109.714c-30.286 0-54.857-24.571-54.857-54.857v-237.714h-237.714c-30.286 0-54.857-24.571-54.857-54.857v-109.714c0-30.286 24.571-54.857 54.857-54.857h237.714v-237.714c0-30.286 24.571-54.857 54.857-54.857h109.714c30.286 0 54.857 24.571 54.857 54.857v237.714h237.714c30.286 0 54.857 24.571 54.857 54.857z"
            ]
        },
        Question: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M402.286 717.714v137.143c0 12.571-10.286 22.857-22.857 22.857h-137.143c-12.571 0-22.857-10.286-22.857-22.857v-137.143c0-12.571 10.286-22.857 22.857-22.857h137.143c12.571 0 22.857 10.286 22.857 22.857zM582.857 374.857c0 108.571-73.714 150.286-128 180.571-33.714 19.429-54.857 58.857-54.857 75.429v0c0 12.571-9.714 27.429-22.857 27.429h-137.143c-12.571 0-20.571-19.429-20.571-32v-25.714c0-69.143 68.571-128.571 118.857-151.429 44-20 62.286-38.857 62.286-75.429 0-32-41.714-60.571-88-60.571-25.714 0-49.143 8-61.714 16.571-13.714 9.714-27.429 23.429-61.143 65.714-4.571 5.714-11.429 9.143-17.714 9.143-5.143 0-9.714-1.714-14.286-4.571l-93.714-71.429c-9.714-7.429-12-20-5.714-30.286 61.714-102.286 148.571-152 265.143-152 122.286 0 259.429 97.714 259.429 228.571z"
            ]
        },
        User: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"
            ]
        },
        Users: {
            viewBox: "0 0 1200 1200",
            paths: [
                "M338.857 512c-59.429 1.714-113.143 27.429-151.429 73.143h-76.571c-57.143 0-110.857-27.429-110.857-90.857 0-46.286-1.714-201.714 70.857-201.714 12 0 71.429 48.571 148.571 48.571 26.286 0 51.429-4.571 76-13.143-1.714 12.571-2.857 25.143-2.857 37.714 0 52 16.571 103.429 46.286 146.286zM950.857 876c0 92.571-61.143 148-152.571 148h-499.429c-91.429 0-152.571-55.429-152.571-148 0-129.143 30.286-327.429 197.714-327.429 19.429 0 90.286 79.429 204.571 79.429s185.143-79.429 204.571-79.429c167.429 0 197.714 198.286 197.714 327.429zM365.714 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286zM768 365.714c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429zM1097.143 494.286c0 63.429-53.714 90.857-110.857 90.857h-76.571c-38.286-45.714-92-71.429-151.429-73.143 29.714-42.857 46.286-94.286 46.286-146.286 0-12.571-1.143-25.143-2.857-37.714 24.571 8.571 49.714 13.143 76 13.143 77.143 0 136.571-48.571 148.571-48.571 72.571 0 70.857 155.429 70.857 201.714zM1024 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286z"
            ]
        },
        Spinner: {
            viewBox: "0 0 1024 1024",
            paths: [
                "M1005.714 512c0 272.571-221.143 493.714-493.714 493.714s-493.714-221.143-493.714-493.714c0-248 182.857-453.143 420.571-488.571v130.286c-166.857 33.714-292.571 181.714-292.571 358.286 0 201.714 164 365.714 365.714 365.714s365.714-164 365.714-365.714c0-176.571-125.714-324.571-292.571-358.286v-130.286c237.714 35.429 420.571 240.571 420.571 488.571z"
            ]
        }
    }
};


/***/ }),

/***/ "./node_modules/@commontimeltd/infinity-framework/src/models/index.ts":
/*!****************************************************************************!*\
  !*** ./node_modules/@commontimeltd/infinity-framework/src/models/index.ts ***!
  \****************************************************************************/
/*! exports provided: HttpVerb, Icons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums */ "./node_modules/@commontimeltd/infinity-framework/src/models/enums.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpVerb", function() { return _enums__WEBPACK_IMPORTED_MODULE_0__["HttpVerb"]; });

/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./node_modules/@commontimeltd/infinity-framework/src/models/icon.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icons", function() { return _icon__WEBPACK_IMPORTED_MODULE_1__["Icons"]; });





/***/ }),

/***/ "./node_modules/@commontimeltd/infinity-framework/src/store/store.ts":
/*!***************************************************************************!*\
  !*** ./node_modules/@commontimeltd/infinity-framework/src/store/store.ts ***!
  \***************************************************************************/
/*! exports provided: Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client_logger_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client/logger/logger */ "./node_modules/@commontimeltd/infinity-framework/src/client/logger/logger.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class Store {
    // === Constructor === //
    constructor(name, logger) {
        this._saveToPersistentQueue = Promise.resolve();
        this.name = name;
        this.logger = logger;
        this._db = localforage__WEBPACK_IMPORTED_MODULE_0___default.a.createInstance({
            name: name
        });
    }
    // === Public === //
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.state = yield this._getFromPersistent();
        });
    }
    getState() {
        return Object.keys(this.state).reduce((acc, cur) => {
            if (cur !== "_id" && cur !== "messageQueue") {
                acc[cur] = this.state[cur];
            }
            return acc;
        }, {});
    }
    setState(state) {
        return __awaiter(this, void 0, void 0, function* () {
            const newState = Object.assign({}, state, { "_id": this.state._id, messageQueue: this.state.messageQueue || [] });
            yield this._saveToPersistent(newState);
            this.state = newState;
        });
    }
    clearDb() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._db.clear();
            this.state = this._generateInitialState();
            return this._saveToPersistent();
        });
    }
    getFromState(key) {
        return this.state[key] || null;
    }
    saveToState(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            this.state[key] = value;
            return yield this._saveToPersistent();
        });
    }
    // === Message Queue === //
    saveToMessageQueue(messageEntity) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.state.messageQueue && this.state.messageQueue instanceof Array) {
                this.state.messageQueue.push(messageEntity);
            }
            else {
                this.state.messageQueue = [messageEntity];
            }
            return yield this._saveToPersistent();
        });
    }
    removeFromMessageQueue(messageEntity) {
        return __awaiter(this, void 0, void 0, function* () {
            const idx = this.state.messageQueue.findIndex(x => x.id === messageEntity.id);
            if (idx > -1) {
                this.state.messageQueue.splice(idx, 1);
                return yield this._saveToPersistent();
            }
            return;
        });
    }
    getMessageQueue() {
        return this.state.messageQueue;
    }
    // === Protected === //
    _saveToPersistent(state) {
        return __awaiter(this, void 0, void 0, function* () {
            clearTimeout(this._saveDebouncer);
            this._saveDebouncer = setTimeout(() => {
                this.logger.log(_client_logger_logger__WEBPACK_IMPORTED_MODULE_1__["LoggerTypes"].DataStorage, "Persisting state now...");
                if (this._db) {
                    this._saveToPersistentQueue = this._saveToPersistentQueue.then(() => __awaiter(this, void 0, void 0, function* () {
                        try {
                            yield this._db.setItem("state", this.state);
                            this.logger.log(_client_logger_logger__WEBPACK_IMPORTED_MODULE_1__["LoggerTypes"].DataStorage, "Persisting state complete.");
                        }
                        catch (ex) {
                            this.logger.error(ex);
                            throw new Error(ex);
                        }
                    }));
                }
                else {
                    localStorage[this.name] = JSON.stringify(this.state);
                }
            }, 500);
        });
    }
    _getFromPersistent() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._db) {
                try {
                    const state = yield this._db.getItem("state");
                    if (state) {
                        return state;
                    }
                    else {
                        return this._generateInitialState();
                    }
                }
                catch (ex) {
                    const state = this._generateInitialState();
                    yield this._saveToPersistent();
                    return state;
                }
            }
            else {
                const state = localStorage.getItem(this.name)
                    ? JSON.parse(localStorage.getItem(this.name))
                    : this._generateInitialState();
            }
        });
    }
}


/***/ }),

/***/ "./node_modules/@polymer/lit-element/lit-element.js":
/*!**********************************************************!*\
  !*** ./node_modules/@polymer/lit-element/lit-element.js ***!
  \**********************************************************/
/*! exports provided: html, svg, renderAttributes, classString, styleString, LitElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderAttributes", function() { return renderAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classString", function() { return classString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleString", function() { return styleString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LitElement", function() { return LitElement; });
/* harmony import */ var _polymer_polymer_lib_mixins_properties_mixin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/properties-mixin.js */ "./node_modules/@polymer/polymer/lib/mixins/properties-mixin.js");
/* harmony import */ var _polymer_polymer_lib_utils_case_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/case-map.js */ "./node_modules/@polymer/polymer/lib/utils/case-map.js");
/* harmony import */ var lit_html_lib_shady_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/lib/shady-render.js */ "./node_modules/lit-html/lib/shady-render.js");
/* harmony import */ var lit_html_lib_lit_extended_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html/lib/lit-extended.js */ "./node_modules/lit-html/lib/lit-extended.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return lit_html_lib_lit_extended_js__WEBPACK_IMPORTED_MODULE_3__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return lit_html_lib_lit_extended_js__WEBPACK_IMPORTED_MODULE_3__["svg"]; });





/**
 * Renders attributes to the given element based on the `attrInfo` object where
 * boolean values are added/removed as attributes.
 * @param element Element on which to set attributes.
 * @param attrInfo Object describing attributes.
 */
function renderAttributes(element, attrInfo) {
    for (const a in attrInfo) {
        const v = attrInfo[a] === true ? '' : attrInfo[a];
        if (v || v === '' || v === 0) {
            if (element.getAttribute(a) !== v) {
                element.setAttribute(a, String(v));
            }
        }
        else if (element.hasAttribute(a)) {
            element.removeAttribute(a);
        }
    }
}
/**
 * Returns a string of css class names formed by taking the properties
 * in the `classInfo` object and appending the property name to the string of
 * class names if the property value is truthy.
 * @param classInfo
 */
function classString(classInfo) {
    const o = [];
    for (const name in classInfo) {
        const v = classInfo[name];
        if (v) {
            o.push(name);
        }
    }
    return o.join(' ');
}
/**
 * Returns a css style string formed by taking the properties in the `styleInfo`
 * object and appending the property name (dash-cased) colon the
 * property value. Properties are separated by a semi-colon.
 * @param styleInfo
 */
function styleString(styleInfo) {
    const o = [];
    for (const name in styleInfo) {
        const v = styleInfo[name];
        if (v || v === 0) {
            o.push(`${Object(_polymer_polymer_lib_utils_case_map_js__WEBPACK_IMPORTED_MODULE_1__["camelToDashCase"])(name)}: ${v}`);
        }
    }
    return o.join('; ');
}
class LitElement extends Object(_polymer_polymer_lib_mixins_properties_mixin_js__WEBPACK_IMPORTED_MODULE_0__["PropertiesMixin"])(HTMLElement) {
    constructor() {
        super(...arguments);
        this.__renderComplete = null;
        this.__resolveRenderComplete = null;
        this.__isInvalid = false;
        this.__isChanging = false;
    }
    /**
     * Override which sets up element rendering by calling* `_createRoot`
     * and `_firstRendered`.
     */
    ready() {
        this._root = this._createRoot();
        super.ready();
        this._firstRendered();
    }
    connectedCallback() {
        if (window.ShadyCSS && this._root) {
            window.ShadyCSS.styleElement(this);
        }
        super.connectedCallback();
    }
    /**
     * Called after the element DOM is rendered for the first time.
     * Implement to perform tasks after first rendering like capturing a
     * reference to a static node which must be directly manipulated.
     * This should not be commonly needed. For tasks which should be performed
     * before first render, use the element constructor.
     */
    _firstRendered() { }
    /**
     * Implement to customize where the element's template is rendered by
     * returning an element into which to render. By default this creates
     * a shadowRoot for the element. To render into the element's childNodes,
     * return `this`.
     * @returns {Element|DocumentFragment} Returns a node into which to render.
     */
    _createRoot() {
        return this.attachShadow({ mode: 'open' });
    }
    /**
     * Override which returns the value of `_shouldRender` which users
     * should implement to control rendering. If this method returns false,
     * _propertiesChanged will not be called and no rendering will occur even
     * if property values change or `requestRender` is called.
     * @param _props Current element properties
     * @param _changedProps Changing element properties
     * @param _prevProps Previous element properties
     * @returns {boolean} Default implementation always returns true.
     */
    _shouldPropertiesChange(_props, _changedProps, _prevProps) {
        const shouldRender = this._shouldRender(_props, _changedProps, _prevProps);
        if (!shouldRender && this.__resolveRenderComplete) {
            this.__resolveRenderComplete(false);
        }
        return shouldRender;
    }
    /**
     * Implement to control if rendering should occur when property values
     * change or `requestRender` is called. By default, this method always
     * returns true, but this can be customized as an optimization to avoid
     * rendering work when changes occur which should not be rendered.
     * @param _props Current element properties
     * @param _changedProps Changing element properties
     * @param _prevProps Previous element properties
     * @returns {boolean} Default implementation always returns true.
     */
    _shouldRender(_props, _changedProps, _prevProps) {
        return true;
    }
    /**
     * Override which performs element rendering by calling
     * `_render`, `_applyRender`, and finally `_didRender`.
     * @param props Current element properties
     * @param changedProps Changing element properties
     * @param prevProps Previous element properties
     */
    _propertiesChanged(props, changedProps, prevProps) {
        super._propertiesChanged(props, changedProps, prevProps);
        const result = this._render(props);
        if (result && this._root !== undefined) {
            this._applyRender(result, this._root);
        }
        this._didRender(props, changedProps, prevProps);
        if (this.__resolveRenderComplete) {
            this.__resolveRenderComplete(true);
        }
    }
    _flushProperties() {
        this.__isChanging = true;
        this.__isInvalid = false;
        super._flushProperties();
        this.__isChanging = false;
    }
    /**
     * Override which warns when a user attempts to change a property during
     * the rendering lifecycle. This is an anti-pattern and should be avoided.
     * @param property {string}
     * @param value {any}
     * @param old {any}
     */
    // tslint:disable-next-line no-any
    _shouldPropertyChange(property, value, old) {
        const change = super._shouldPropertyChange(property, value, old);
        if (change && this.__isChanging) {
            console.trace(`Setting properties in response to other properties changing ` +
                `considered harmful. Setting '${property}' from ` +
                `'${this._getProperty(property)}' to '${value}'.`);
        }
        return change;
    }
    /**
     * Implement to describe the DOM which should be rendered in the element.
     * Ideally, the implementation is a pure function using only props to describe
     * the element template. The implementation must return a `lit-html`
     * TemplateResult. By default this template is rendered into the element's
     * shadowRoot. This can be customized by implementing `_createRoot`. This
     * method must be implemented.
     * @param {*} _props Current element properties
     * @returns {TemplateResult} Must return a lit-html TemplateResult.
     */
    _render(_props) {
        throw new Error('_render() not implemented');
    }
    /**
     * Renders the given lit-html template `result` into the given `node`.
     * Implement to customize the way rendering is applied. This is should not
     * typically be needed and is provided for advanced use cases.
     * @param result {TemplateResult} `lit-html` template result to render
     * @param node {Element|DocumentFragment} node into which to render
     */
    _applyRender(result, node) {
        Object(lit_html_lib_shady_render_js__WEBPACK_IMPORTED_MODULE_2__["render"])(result, node, this.localName);
    }
    /**
     * Called after element DOM has been rendered. Implement to
     * directly control rendered DOM. Typically this is not needed as `lit-html`
     * can be used in the `_render` method to set properties, attributes, and
     * event listeners. However, it is sometimes useful for calling methods on
     * rendered elements, like calling `focus()` on an element to focus it.
     * @param _props Current element properties
     * @param _changedProps Changing element properties
     * @param _prevProps Previous element properties
     */
    _didRender(_props, _changedProps, _prevProps) { }
    /**
     * Call to request the element to asynchronously re-render regardless
     * of whether or not any property changes are pending.
     */
    requestRender() { this._invalidateProperties(); }
    /**
     * Override which provides tracking of invalidated state.
     */
    _invalidateProperties() {
        this.__isInvalid = true;
        super._invalidateProperties();
    }
    /**
     * Returns a promise which resolves after the element next renders.
     * The promise resolves to `true` if the element rendered and `false` if the
     * element did not render.
     * This is useful when users (e.g. tests) need to react to the rendered state
     * of the element after a change is made.
     * This can also be useful in event handlers if it is desireable to wait
     * to send an event until after rendering. If possible implement the
     * `_didRender` method to directly respond to rendering within the
     * rendering lifecycle.
     */
    get renderComplete() {
        if (!this.__renderComplete) {
            this.__renderComplete = new Promise((resolve) => {
                this.__resolveRenderComplete = (value) => {
                    this.__resolveRenderComplete = this.__renderComplete = null;
                    resolve(value);
                };
            });
            if (!this.__isInvalid && this.__resolveRenderComplete) {
                Promise.resolve().then(() => this.__resolveRenderComplete(false));
            }
        }
        return this.__renderComplete;
    }
}


/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/mixins/properties-changed.js":
/*!************************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/mixins/properties-changed.js ***!
  \************************************************************************/
/*! exports provided: PropertiesChanged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesChanged", function() { return PropertiesChanged; });
/* harmony import */ var _utils_boot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/boot.js */ "./node_modules/@polymer/polymer/lib/utils/boot.js");
/* harmony import */ var _utils_boot_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_boot_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/mixin.js */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
/* harmony import */ var _utils_async_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/





/** @const {!AsyncInterface} */
const microtask = _utils_async_js__WEBPACK_IMPORTED_MODULE_2__["microTask"];

/**
 * Element class mixin that provides basic meta-programming for creating one
 * or more property accessors (getter/setter pair) that enqueue an async
 * (batched) `_propertiesChanged` callback.
 *
 * For basic usage of this mixin, call `MyClass.createProperties(props)`
 * once at class definition time to create property accessors for properties
 * named in props, implement `_propertiesChanged` to react as desired to
 * property changes, and implement `static get observedAttributes()` and
 * include lowercase versions of any property names that should be set from
 * attributes. Last, call `this._enableProperties()` in the element's
 * `connectedCallback` to enable the accessors.
 *
 * @mixinFunction
 * @polymer
 * @summary Element class mixin for reacting to property changes from
 *   generated property accessors.
 */
const PropertiesChanged = Object(_utils_mixin_js__WEBPACK_IMPORTED_MODULE_1__["dedupingMixin"])(
    /**
     * @template T
     * @param {function(new:T)} superClass Class to apply mixin to.
     * @return {function(new:T)} superClass with mixin applied.
     */
    (superClass) => {

  /**
   * @polymer
   * @mixinClass
   * @implements {Polymer_PropertiesChanged}
   * @unrestricted
   */
  class PropertiesChanged extends superClass {

    /**
     * Creates property accessors for the given property names.
     * @param {!Object} props Object whose keys are names of accessors.
     * @return {void}
     * @protected
     */
    static createProperties(props) {
      const proto = this.prototype;
      for (let prop in props) {
        // don't stomp an existing accessor
        if (!(prop in proto)) {
          proto._createPropertyAccessor(prop);
        }
      }
    }

    /**
     * Returns an attribute name that corresponds to the given property.
     * The attribute name is the lowercased property name. Override to
     * customize this mapping.
     * @param {string} property Property to convert
     * @return {string} Attribute name corresponding to the given property.
     *
     * @protected
     */
    static attributeNameForProperty(property) {
      return property.toLowerCase();
    }

    /**
     * Override point to provide a type to which to deserialize a value to
     * a given property.
     * @param {string} name Name of property
     *
     * @protected
     */
    static typeForProperty(name) { } //eslint-disable-line no-unused-vars

    /**
     * Creates a setter/getter pair for the named property with its own
     * local storage.  The getter returns the value in the local storage,
     * and the setter calls `_setProperty`, which updates the local storage
     * for the property and enqueues a `_propertiesChanged` callback.
     *
     * This method may be called on a prototype or an instance.  Calling
     * this method may overwrite a property value that already exists on
     * the prototype/instance by creating the accessor.
     *
     * @param {string} property Name of the property
     * @param {boolean=} readOnly When true, no setter is created; the
     *   protected `_setProperty` function must be used to set the property
     * @return {void}
     * @protected
     * @override
     */
    _createPropertyAccessor(property, readOnly) {
      this._addPropertyToAttributeMap(property);
      if (!this.hasOwnProperty('__dataHasAccessor')) {
        this.__dataHasAccessor = Object.assign({}, this.__dataHasAccessor);
      }
      if (!this.__dataHasAccessor[property]) {
        this.__dataHasAccessor[property] = true;
        this._definePropertyAccessor(property, readOnly);
      }
    }

    /**
     * Adds the given `property` to a map matching attribute names
     * to property names, using `attributeNameForProperty`. This map is
     * used when deserializing attribute values to properties.
     *
     * @param {string} property Name of the property
     * @override
     */
    _addPropertyToAttributeMap(property) {
      if (!this.hasOwnProperty('__dataAttributes')) {
        this.__dataAttributes = Object.assign({}, this.__dataAttributes);
      }
      if (!this.__dataAttributes[property]) {
        const attr = this.constructor.attributeNameForProperty(property);
        this.__dataAttributes[attr] = property;
      }
    }

    /**
     * Defines a property accessor for the given property.
     * @param {string} property Name of the property
     * @param {boolean=} readOnly When true, no setter is created
     * @return {void}
     * @override
     */
     _definePropertyAccessor(property, readOnly) {
      Object.defineProperty(this, property, {
        /* eslint-disable valid-jsdoc */
        /** @this {PropertiesChanged} */
        get() {
          return this._getProperty(property);
        },
        /** @this {PropertiesChanged} */
        set: readOnly ? function () {} : function (value) {
          this._setProperty(property, value);
        }
        /* eslint-enable */
      });
    }

    constructor() {
      super();
      this.__dataEnabled = false;
      this.__dataReady = false;
      this.__dataInvalid = false;
      this.__data = {};
      this.__dataPending = null;
      this.__dataOld = null;
      this.__dataInstanceProps = null;
      this.__serializing = false;
      this._initializeProperties();
    }

    /**
     * Lifecycle callback called when properties are enabled via
     * `_enableProperties`.
     *
     * Users may override this function to implement behavior that is
     * dependent on the element having its property data initialized, e.g.
     * from defaults (initialized from `constructor`, `_initializeProperties`),
     * `attributeChangedCallback`, or values propagated from host e.g. via
     * bindings.  `super.ready()` must be called to ensure the data system
     * becomes enabled.
     *
     * @return {void}
     * @public
     * @override
     */
    ready() {
      this.__dataReady = true;
      this._flushProperties();
    }

    /**
     * Initializes the local storage for property accessors.
     *
     * Provided as an override point for performing any setup work prior
     * to initializing the property accessor system.
     *
     * @return {void}
     * @protected
     * @override
     */
    _initializeProperties() {
      // Capture instance properties; these will be set into accessors
      // during first flush. Don't set them here, since we want
      // these to overwrite defaults/constructor assignments
      for (let p in this.__dataHasAccessor) {
        if (this.hasOwnProperty(p)) {
          this.__dataInstanceProps = this.__dataInstanceProps || {};
          this.__dataInstanceProps[p] = this[p];
          delete this[p];
        }
      }
    }

    /**
     * Called at ready time with bag of instance properties that overwrote
     * accessors when the element upgraded.
     *
     * The default implementation sets these properties back into the
     * setter at ready time.  This method is provided as an override
     * point for customizing or providing more efficient initialization.
     *
     * @param {Object} props Bag of property values that were overwritten
     *   when creating property accessors.
     * @return {void}
     * @protected
     * @override
     */
    _initializeInstanceProperties(props) {
      Object.assign(this, props);
    }

    /**
     * Updates the local storage for a property (via `_setPendingProperty`)
     * and enqueues a `_proeprtiesChanged` callback.
     *
     * @param {string} property Name of the property
     * @param {*} value Value to set
     * @return {void}
     * @protected
     * @override
     */
    _setProperty(property, value) {
      if (this._setPendingProperty(property, value)) {
        this._invalidateProperties();
      }
    }

    /**
     * Returns the value for the given property.
     * @param {string} property Name of property
     * @return {*} Value for the given property
     * @protected
     * @override
     */
    _getProperty(property) {
      return this.__data[property];
    }

    /* eslint-disable no-unused-vars */
    /**
     * Updates the local storage for a property, records the previous value,
     * and adds it to the set of "pending changes" that will be passed to the
     * `_propertiesChanged` callback.  This method does not enqueue the
     * `_propertiesChanged` callback.
     *
     * @param {string} property Name of the property
     * @param {*} value Value to set
     * @param {boolean=} ext Not used here; affordance for closure
     * @return {boolean} Returns true if the property changed
     * @protected
     * @override
     */
    _setPendingProperty(property, value, ext) {
      let old = this.__data[property];
      let changed = this._shouldPropertyChange(property, value, old);
      if (changed) {
        if (!this.__dataPending) {
          this.__dataPending = {};
          this.__dataOld = {};
        }
        // Ensure old is captured from the last turn
        if (this.__dataOld && !(property in this.__dataOld)) {
          this.__dataOld[property] = old;
        }
        this.__data[property] = value;
        this.__dataPending[property] = value;
      }
      return changed;
    }
    /* eslint-enable */

    /**
     * Marks the properties as invalid, and enqueues an async
     * `_propertiesChanged` callback.
     *
     * @return {void}
     * @protected
     * @override
     */
    _invalidateProperties() {
      if (!this.__dataInvalid && this.__dataReady) {
        this.__dataInvalid = true;
        microtask.run(() => {
          if (this.__dataInvalid) {
            this.__dataInvalid = false;
            this._flushProperties();
          }
        });
      }
    }

    /**
     * Call to enable property accessor processing. Before this method is
     * called accessor values will be set but side effects are
     * queued. When called, any pending side effects occur immediately.
     * For elements, generally `connectedCallback` is a normal spot to do so.
     * It is safe to call this method multiple times as it only turns on
     * property accessors once.
     *
     * @return {void}
     * @protected
     * @override
     */
    _enableProperties() {
      if (!this.__dataEnabled) {
        this.__dataEnabled = true;
        if (this.__dataInstanceProps) {
          this._initializeInstanceProperties(this.__dataInstanceProps);
          this.__dataInstanceProps = null;
        }
        this.ready();
      }
    }

    /**
     * Calls the `_propertiesChanged` callback with the current set of
     * pending changes (and old values recorded when pending changes were
     * set), and resets the pending set of changes. Generally, this method
     * should not be called in user code.
     *
     * @return {void}
     * @protected
     * @override
     */
    _flushProperties() {
      const props = this.__data;
      const changedProps = this.__dataPending;
      const old = this.__dataOld;
      if (this._shouldPropertiesChange(props, changedProps, old)) {
        this.__dataPending = null;
        this.__dataOld = null;
        this._propertiesChanged(props, changedProps, old);
      }
    }

    /**
     * Called in `_flushProperties` to determine if `_propertiesChanged`
     * should be called. The default implementation returns true if
     * properties are pending. Override to customize when
     * `_propertiesChanged` is called.
     * @param {!Object} currentProps Bag of all current accessor values
     * @param {?Object} changedProps Bag of properties changed since the last
     *   call to `_propertiesChanged`
     * @param {?Object} oldProps Bag of previous values for each property
     *   in `changedProps`
     * @return {boolean} true if changedProps is truthy
     * @override
     */
    _shouldPropertiesChange(currentProps, changedProps, oldProps) { // eslint-disable-line no-unused-vars
      return Boolean(changedProps);
    }

    /**
     * Callback called when any properties with accessors created via
     * `_createPropertyAccessor` have been set.
     *
     * @param {!Object} currentProps Bag of all current accessor values
     * @param {?Object} changedProps Bag of properties changed since the last
     *   call to `_propertiesChanged`
     * @param {?Object} oldProps Bag of previous values for each property
     *   in `changedProps`
     * @return {void}
     * @protected
     * @override
     */
    _propertiesChanged(currentProps, changedProps, oldProps) { // eslint-disable-line no-unused-vars
    }

    /**
     * Method called to determine whether a property value should be
     * considered as a change and cause the `_propertiesChanged` callback
     * to be enqueued.
     *
     * The default implementation returns `true` if a strict equality
     * check fails. The method always returns false for `NaN`.
     *
     * Override this method to e.g. provide stricter checking for
     * Objects/Arrays when using immutable patterns.
     *
     * @param {string} property Property name
     * @param {*} value New property value
     * @param {*} old Previous property value
     * @return {boolean} Whether the property should be considered a change
     *   and enqueue a `_proeprtiesChanged` callback
     * @protected
     * @override
     */
    _shouldPropertyChange(property, value, old) {
      return (
        // Strict equality check
        (old !== value &&
          // This ensures (old==NaN, value==NaN) always returns false
          (old === old || value === value))
      );
    }

    /**
     * Implements native Custom Elements `attributeChangedCallback` to
     * set an attribute value to a property via `_attributeToProperty`.
     *
     * @param {string} name Name of attribute that changed
     * @param {?string} old Old attribute value
     * @param {?string} value New attribute value
     * @param {?string} namespace Attribute namespace.
     * @return {void}
     * @suppress {missingProperties} Super may or may not implement the callback
     * @override
     */
    attributeChangedCallback(name, old, value, namespace) {
      if (old !== value) {
        this._attributeToProperty(name, value);
      }
      if (super.attributeChangedCallback) {
        super.attributeChangedCallback(name, old, value, namespace);
      }
    }

    /**
     * Deserializes an attribute to its associated property.
     *
     * This method calls the `_deserializeValue` method to convert the string to
     * a typed value.
     *
     * @param {string} attribute Name of attribute to deserialize.
     * @param {?string} value of the attribute.
     * @param {*=} type type to deserialize to, defaults to the value
     * returned from `typeForProperty`
     * @return {void}
     * @override
     */
    _attributeToProperty(attribute, value, type) {
      if (!this.__serializing) {
        const map = this.__dataAttributes;
        const property = map && map[attribute] || attribute;
        this[property] = this._deserializeValue(value, type ||
          this.constructor.typeForProperty(property));
      }
    }

    /**
     * Serializes a property to its associated attribute.
     *
     * @suppress {invalidCasts} Closure can't figure out `this` is an element.
     *
     * @param {string} property Property name to reflect.
     * @param {string=} attribute Attribute name to reflect to.
     * @param {*=} value Property value to refect.
     * @return {void}
     * @override
     */
    _propertyToAttribute(property, attribute, value) {
      this.__serializing = true;
      value = (arguments.length < 3) ? this[property] : value;
      this._valueToNodeAttribute(/** @type {!HTMLElement} */(this), value,
        attribute || this.constructor.attributeNameForProperty(property));
      this.__serializing = false;
    }

    /**
     * Sets a typed value to an HTML attribute on a node.
     *
     * This method calls the `_serializeValue` method to convert the typed
     * value to a string.  If the `_serializeValue` method returns `undefined`,
     * the attribute will be removed (this is the default for boolean
     * type `false`).
     *
     * @param {Element} node Element to set attribute to.
     * @param {*} value Value to serialize.
     * @param {string} attribute Attribute name to serialize to.
     * @return {void}
     * @override
     */
    _valueToNodeAttribute(node, value, attribute) {
      const str = this._serializeValue(value);
      if (str === undefined) {
        node.removeAttribute(attribute);
      } else {
        node.setAttribute(attribute, str);
      }
    }

    /**
     * Converts a typed JavaScript value to a string.
     *
     * This method is called when setting JS property values to
     * HTML attributes.  Users may override this method to provide
     * serialization for custom types.
     *
     * @param {*} value Property value to serialize.
     * @return {string | undefined} String serialized from the provided
     * property  value.
     * @override
     */
    _serializeValue(value) {
      switch (typeof value) {
        case 'boolean':
          return value ? '' : undefined;
        default:
          return value != null ? value.toString() : undefined;
      }
    }

    /**
     * Converts a string to a typed JavaScript value.
     *
     * This method is called when reading HTML attribute values to
     * JS properties.  Users may override this method to provide
     * deserialization for custom `type`s. Types for `Boolean`, `String`,
     * and `Number` convert attributes to the expected types.
     *
     * @param {?string} value Value to deserialize.
     * @param {*=} type Type to deserialize the string to.
     * @return {*} Typed value deserialized from the provided string.
     * @override
     */
    _deserializeValue(value, type) {
      switch (type) {
        case Boolean:
          return (value !== null);
        case Number:
          return Number(value);
        default:
          return value;
      }
    }

  }

  return PropertiesChanged;
});


/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/mixins/properties-mixin.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/mixins/properties-mixin.js ***!
  \**********************************************************************/
/*! exports provided: PropertiesMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesMixin", function() { return PropertiesMixin; });
/* harmony import */ var _utils_boot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/boot.js */ "./node_modules/@polymer/polymer/lib/utils/boot.js");
/* harmony import */ var _utils_boot_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_boot_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/mixin.js */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
/* harmony import */ var _properties_changed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties-changed.js */ "./node_modules/@polymer/polymer/lib/mixins/properties-changed.js");
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/





/**
 * Creates a copy of `props` with each property normalized such that
 * upgraded it is an object with at least a type property { type: Type}.
 *
 * @param {Object} props Properties to normalize
 * @return {Object} Copy of input `props` with normalized properties that
 * are in the form {type: Type}
 * @private
 */
function normalizeProperties(props) {
  const output = {};
  for (let p in props) {
    const o = props[p];
    output[p] = (typeof o === 'function') ? {type: o} : o;
  }
  return output;
}

/**
 * Mixin that provides a minimal starting point to using the PropertiesChanged
 * mixin by providing a mechanism to declare properties in a static
 * getter (e.g. static get properties() { return { foo: String } }). Changes
 * are reported via the `_propertiesChanged` method.
 *
 * This mixin provides no specific support for rendering. Users are expected
 * to create a ShadowRoot and put content into it and update it in whatever
 * way makes sense. This can be done in reaction to properties changing by
 * implementing `_propertiesChanged`.
 *
 * @mixinFunction
 * @polymer
 * @appliesMixin PropertiesChanged
 * @summary Mixin that provides a minimal starting point for using
 * the PropertiesChanged mixin by providing a declarative `properties` object.
 */
const PropertiesMixin = Object(_utils_mixin_js__WEBPACK_IMPORTED_MODULE_1__["dedupingMixin"])(superClass => {

 /**
  * @constructor
  * @implements {Polymer_PropertiesChanged}
  * @private
  */
 const base = Object(_properties_changed_js__WEBPACK_IMPORTED_MODULE_2__["PropertiesChanged"])(superClass);

 /**
  * Returns the super class constructor for the given class, if it is an
  * instance of the PropertiesMixin.
  *
  * @param {!PropertiesMixinConstructor} constructor PropertiesMixin constructor
  * @return {?PropertiesMixinConstructor} Super class constructor
  */
 function superPropertiesClass(constructor) {
   const superCtor = Object.getPrototypeOf(constructor);

   // Note, the `PropertiesMixin` class below only refers to the class
   // generated by this call to the mixin; the instanceof test only works
   // because the mixin is deduped and guaranteed only to apply once, hence
   // all constructors in a proto chain will see the same `PropertiesMixin`
   return (superCtor.prototype instanceof PropertiesMixin) ?
     /** @type {!PropertiesMixinConstructor} */ (superCtor) : null;
 }

 /**
  * Returns a memoized version of the `properties` object for the
  * given class. Properties not in object format are converted to at
  * least {type}.
  *
  * @param {PropertiesMixinConstructor} constructor PropertiesMixin constructor
  * @return {Object} Memoized properties object
  */
 function ownProperties(constructor) {
   if (!constructor.hasOwnProperty(JSCompiler_renameProperty('__ownProperties', constructor))) {
     let props = null;

     if (constructor.hasOwnProperty(JSCompiler_renameProperty('properties', constructor)) && constructor.properties) {
       props = normalizeProperties(constructor.properties);
     }

     constructor.__ownProperties = props;
   }
   return constructor.__ownProperties;
 }

 /**
  * @polymer
  * @mixinClass
  * @extends {base}
  * @implements {Polymer_PropertiesMixin}
  * @unrestricted
  */
 class PropertiesMixin extends base {

   /**
    * Implements standard custom elements getter to observes the attributes
    * listed in `properties`.
    * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
    */
   static get observedAttributes() {
     const props = this._properties;
     return props ? Object.keys(props).map(p => this.attributeNameForProperty(p)) : [];
   }

   /**
    * Finalizes an element definition, including ensuring any super classes
    * are also finalized. This includes ensuring property
    * accessors exist on the element prototype. This method calls
    * `_finalizeClass` to finalize each constructor in the prototype chain.
    * @return {void}
    */
   static finalize() {
     if (!this.hasOwnProperty(JSCompiler_renameProperty('__finalized', this))) {
       const superCtor = superPropertiesClass(/** @type {!PropertiesMixinConstructor} */(this));
       if (superCtor) {
         superCtor.finalize();
       }
       this.__finalized = true;
       this._finalizeClass();
     }
   }

   /**
    * Finalize an element class. This includes ensuring property
    * accessors exist on the element prototype. This method is called by
    * `finalize` and finalizes the class constructor.
    *
    * @protected
    */
   static _finalizeClass() {
     const props = ownProperties(/** @type {!PropertiesMixinConstructor} */(this));
     if (props) {
       this.createProperties(props);
     }
   }

   /**
    * Returns a memoized version of all properties, including those inherited
    * from super classes. Properties not in object format are converted to
    * at least {type}.
    *
    * @return {Object} Object containing properties for this class
    * @protected
    */
   static get _properties() {
     if (!this.hasOwnProperty(
       JSCompiler_renameProperty('__properties', this))) {
       const superCtor = superPropertiesClass(/** @type {!PropertiesMixinConstructor} */(this));
       this.__properties = Object.assign({},
         superCtor && superCtor._properties,
         ownProperties(/** @type {PropertiesMixinConstructor} */(this)));
     }
     return this.__properties;
   }

   /**
    * Overrides `PropertiesChanged` method to return type specified in the
    * static `properties` object for the given property.
    * @param {string} name Name of property
    * @return {*} Type to which to deserialize attribute
    *
    * @protected
    */
   static typeForProperty(name) {
     const info = this._properties[name];
     return info && info.type;
   }

   /**
    * Overrides `PropertiesChanged` method and adds a call to
    * `finalize` which lazily configures the element's property accessors.
    * @override
    * @return {void}
    */
   _initializeProperties() {
     this.constructor.finalize();
     super._initializeProperties();
   }

   /**
    * Called when the element is added to a document.
    * Calls `_enableProperties` to turn on property system from
    * `PropertiesChanged`.
    * @suppress {missingProperties} Super may or may not implement the callback
    * @return {void}
    * @override
    */
   connectedCallback() {
     if (super.connectedCallback) {
       super.connectedCallback();
     }
     this._enableProperties();
   }

   /**
    * Called when the element is removed from a document
    * @suppress {missingProperties} Super may or may not implement the callback
    * @return {void}
    * @override
    */
   disconnectedCallback() {
     if (super.disconnectedCallback) {
       super.disconnectedCallback();
     }
   }

 }

 return PropertiesMixin;

});


/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/utils/async.js":
/*!**********************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/utils/async.js ***!
  \**********************************************************/
/*! exports provided: timeOut, animationFrame, idlePeriod, microTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeOut", function() { return timeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationFrame", function() { return animationFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idlePeriod", function() { return idlePeriod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "microTask", function() { return microTask; });
/* harmony import */ var _boot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boot.js */ "./node_modules/@polymer/polymer/lib/utils/boot.js");
/* harmony import */ var _boot_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_boot_js__WEBPACK_IMPORTED_MODULE_0__);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

/**
 * @fileoverview
 *
 * This module provides a number of strategies for enqueuing asynchronous
 * tasks. Each sub-module provides a standard `run(fn)` interface that returns a
 * handle, and a `cancel(handle)` interface for canceling async tasks before
 * they run.
 *
 * @summary Module that provides a number of strategies for enqueuing
 * asynchronous tasks.
 */



// Microtask implemented using Mutation Observer
let microtaskCurrHandle = 0;
let microtaskLastHandle = 0;
let microtaskCallbacks = [];
let microtaskNodeContent = 0;
let microtaskNode = document.createTextNode('');
new window.MutationObserver(microtaskFlush).observe(microtaskNode, {characterData: true});

function microtaskFlush() {
  const len = microtaskCallbacks.length;
  for (let i = 0; i < len; i++) {
    let cb = microtaskCallbacks[i];
    if (cb) {
      try {
        cb();
      } catch (e) {
        setTimeout(() => { throw e; });
      }
    }
  }
  microtaskCallbacks.splice(0, len);
  microtaskLastHandle += len;
}

/**
 * Async interface wrapper around `setTimeout`.
 *
 * @namespace
 * @summary Async interface wrapper around `setTimeout`.
 */
const timeOut = {
  /**
   * Returns a sub-module with the async interface providing the provided
   * delay.
   *
   * @memberof timeOut
   * @param {number=} delay Time to wait before calling callbacks in ms
   * @return {!AsyncInterface} An async timeout interface
   */
  after(delay) {
    return {
      run(fn) { return window.setTimeout(fn, delay); },
      cancel(handle) {
        window.clearTimeout(handle);
      }
    };
  },
  /**
   * Enqueues a function called in the next task.
   *
   * @memberof timeOut
   * @param {!Function} fn Callback to run
   * @param {number=} delay Delay in milliseconds
   * @return {number} Handle used for canceling task
   */
  run(fn, delay) {
    return window.setTimeout(fn, delay);
  },
  /**
   * Cancels a previously enqueued `timeOut` callback.
   *
   * @memberof timeOut
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */
  cancel(handle) {
    window.clearTimeout(handle);
  }
};


/**
 * Async interface wrapper around `requestAnimationFrame`.
 *
 * @namespace
 * @summary Async interface wrapper around `requestAnimationFrame`.
 */
const animationFrame = {
  /**
   * Enqueues a function called at `requestAnimationFrame` timing.
   *
   * @memberof animationFrame
   * @param {function(number):void} fn Callback to run
   * @return {number} Handle used for canceling task
   */
  run(fn) {
    return window.requestAnimationFrame(fn);
  },
  /**
   * Cancels a previously enqueued `animationFrame` callback.
   *
   * @memberof animationFrame
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */
  cancel(handle) {
    window.cancelAnimationFrame(handle);
  }
};


/**
 * Async interface wrapper around `requestIdleCallback`.  Falls back to
 * `setTimeout` on browsers that do not support `requestIdleCallback`.
 *
 * @namespace
 * @summary Async interface wrapper around `requestIdleCallback`.
 */
const idlePeriod = {
  /**
   * Enqueues a function called at `requestIdleCallback` timing.
   *
   * @memberof idlePeriod
   * @param {function(!IdleDeadline):void} fn Callback to run
   * @return {number} Handle used for canceling task
   */
  run(fn) {
    return window.requestIdleCallback ?
      window.requestIdleCallback(fn) :
      window.setTimeout(fn, 16);
  },
  /**
   * Cancels a previously enqueued `idlePeriod` callback.
   *
   * @memberof idlePeriod
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */
  cancel(handle) {
    window.cancelIdleCallback ?
      window.cancelIdleCallback(handle) :
      window.clearTimeout(handle);
  }
};


/**
 * Async interface for enqueuing callbacks that run at microtask timing.
 *
 * Note that microtask timing is achieved via a single `MutationObserver`,
 * and thus callbacks enqueued with this API will all run in a single
 * batch, and not interleaved with other microtasks such as promises.
 * Promises are avoided as an implementation choice for the time being
 * due to Safari bugs that cause Promises to lack microtask guarantees.
 *
 * @namespace
 * @summary Async interface for enqueuing callbacks that run at microtask
 *   timing.
 */
const microTask = {

  /**
   * Enqueues a function called at microtask timing.
   *
   * @memberof microTask
   * @param {!Function=} callback Callback to run
   * @return {number} Handle used for canceling task
   */
  run(callback) {
    microtaskNode.textContent = microtaskNodeContent++;
    microtaskCallbacks.push(callback);
    return microtaskCurrHandle++;
  },

  /**
   * Cancels a previously enqueued `microTask` callback.
   *
   * @memberof microTask
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */
  cancel(handle) {
    const idx = handle - microtaskLastHandle;
    if (idx >= 0) {
      if (!microtaskCallbacks[idx]) {
        throw new Error('invalid async handle: ' + handle);
      }
      microtaskCallbacks[idx] = null;
    }
  }

};



/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/utils/boot.js":
/*!*********************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/utils/boot.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

window.JSCompiler_renameProperty = function(prop) { return prop; };


/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/utils/case-map.js":
/*!*************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/utils/case-map.js ***!
  \*************************************************************/
/*! exports provided: dashToCamelCase, camelToDashCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashToCamelCase", function() { return dashToCamelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelToDashCase", function() { return camelToDashCase; });
/* harmony import */ var _boot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boot.js */ "./node_modules/@polymer/polymer/lib/utils/boot.js");
/* harmony import */ var _boot_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_boot_js__WEBPACK_IMPORTED_MODULE_0__);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/


const caseMap = {};
const DASH_TO_CAMEL = /-[a-z]/g;
const CAMEL_TO_DASH = /([A-Z])/g;

/**
 * @fileoverview Module with utilities for converting between "dash-case" and
 * "camelCase" identifiers.
 */

/**
 * Converts "dash-case" identifier (e.g. `foo-bar-baz`) to "camelCase"
 * (e.g. `fooBarBaz`).
 *
 * @param {string} dash Dash-case identifier
 * @return {string} Camel-case representation of the identifier
 */
function dashToCamelCase(dash) {
  return caseMap[dash] || (
    caseMap[dash] = dash.indexOf('-') < 0 ? dash : dash.replace(DASH_TO_CAMEL,
      (m) => m[1].toUpperCase()
    )
  );
}

/**
 * Converts "camelCase" identifier (e.g. `fooBarBaz`) to "dash-case"
 * (e.g. `foo-bar-baz`).
 *
 * @param {string} camel Camel-case identifier
 * @return {string} Dash-case representation of the identifier
 */
function camelToDashCase(camel) {
  return caseMap[camel] || (
    caseMap[camel] = camel.replace(CAMEL_TO_DASH, '-$1').toLowerCase()
  );
}


/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/utils/mixin.js":
/*!**********************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/utils/mixin.js ***!
  \**********************************************************/
/*! exports provided: dedupingMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dedupingMixin", function() { return dedupingMixin; });
/* harmony import */ var _boot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boot.js */ "./node_modules/@polymer/polymer/lib/utils/boot.js");
/* harmony import */ var _boot_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_boot_js__WEBPACK_IMPORTED_MODULE_0__);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/


// unique global id for deduping mixins.
let dedupeId = 0;

/**
 * @constructor
 * @extends {Function}
 * @private
 */
function MixinFunction(){}
/** @type {(WeakMap | undefined)} */
MixinFunction.prototype.__mixinApplications;
/** @type {(Object | undefined)} */
MixinFunction.prototype.__mixinSet;

/* eslint-disable valid-jsdoc */
/**
 * Wraps an ES6 class expression mixin such that the mixin is only applied
 * if it has not already been applied its base argument. Also memoizes mixin
 * applications.
 *
 * @template T
 * @param {T} mixin ES6 class expression mixin to wrap
 * @return {T}
 * @suppress {invalidCasts}
 */
const dedupingMixin = function(mixin) {
  let mixinApplications = /** @type {!MixinFunction} */(mixin).__mixinApplications;
  if (!mixinApplications) {
    mixinApplications = new WeakMap();
    /** @type {!MixinFunction} */(mixin).__mixinApplications = mixinApplications;
  }
  // maintain a unique id for each mixin
  let mixinDedupeId = dedupeId++;
  function dedupingMixin(base) {
    let baseSet = /** @type {!MixinFunction} */(base).__mixinSet;
    if (baseSet && baseSet[mixinDedupeId]) {
      return base;
    }
    let map = mixinApplications;
    let extended = map.get(base);
    if (!extended) {
      extended = /** @type {!Function} */(mixin)(base);
      map.set(base, extended);
    }
    // copy inherited mixin set from the extended class, or the base class
    // NOTE: we avoid use of Set here because some browser (IE11)
    // cannot extend a base Set via the constructor.
    let mixinSet = Object.create(/** @type {!MixinFunction} */(extended).__mixinSet || baseSet || null);
    mixinSet[mixinDedupeId] = true;
    /** @type {!MixinFunction} */(extended).__mixinSet = mixinSet;
    return extended;
  }

  return dedupingMixin;
};
/* eslint-enable valid-jsdoc */


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/lit-html/lib/async-append.js":
/*!***************************************************!*\
  !*** ./node_modules/lit-html/lib/async-append.js ***!
  \***************************************************/
/*! exports provided: asyncAppend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncAppend", function() { return asyncAppend; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var __asyncValues = (undefined && undefined.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};

/**
 * A directive that renders the items of an async iterable[1], appending new
 * values after previous values, similar to the built-in support for iterables.
 *
 * Async iterables are objects with a [Symbol.asyncIterator] method, which
 * returns an iterator who's `next()` method returns a Promise. When a new
 * value is available, the Promise resolves and the value is appended to the
 * Part controlled by the directive. If another value other than this
 * directive has been set on the Part, the iterable will no longer be listened
 * to and new values won't be written to the Part.
 *
 * [1]: https://github.com/tc39/proposal-async-iteration
 *
 * @param value An async iterable
 * @param mapper An optional function that maps from (value, index) to another
 *     value. Useful for generating templates for each item in the iterable.
 */
const asyncAppend = (value, mapper) => Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"])(async (part) => {
    var e_1, _a;
    // If we've already set up this particular iterable, we don't need
    // to do anything.
    if (value === part._previousValue) {
        return;
    }
    part._previousValue = value;
    // We keep track of item Parts across iterations, so that we can
    // share marker nodes between consecutive Parts.
    let itemPart;
    let i = 0;
    try {
        for (var value_1 = __asyncValues(value), value_1_1; value_1_1 = await value_1.next(), !value_1_1.done;) {
            let v = value_1_1.value;
            // When we get the first value, clear the part. This lets the previous
            // value display until we can replace it.
            if (i === 0) {
                part.clear();
            }
            // Check to make sure that value is the still the current value of
            // the part, and if not bail because a new value owns this part
            if (part._previousValue !== value) {
                break;
            }
            // As a convenience, because functional-programming-style
            // transforms of iterables and async iterables requires a library,
            // we accept a mapper function. This is especially convenient for
            // rendering a template for each item.
            if (mapper !== undefined) {
                v = mapper(v, i);
            }
            // Like with sync iterables, each item induces a Part, so we need
            // to keep track of start and end nodes for the Part.
            // Note: Because these Parts are not updatable like with a sync
            // iterable (if we render a new value, we always clear), it may
            // be possible to optimize away the Parts and just re-use the
            // Part.setValue() logic.
            let itemStartNode = part.startNode;
            // Check to see if we have a previous item and Part
            if (itemPart !== undefined) {
                // Create a new node to separate the previous and next Parts
                itemStartNode = document.createTextNode('');
                // itemPart is currently the Part for the previous item. Set
                // it's endNode to the node we'll use for the next Part's
                // startNode.
                itemPart.endNode = itemStartNode;
                part.endNode.parentNode.insertBefore(itemStartNode, part.endNode);
            }
            itemPart = new _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["NodePart"](part.instance, itemStartNode, part.endNode);
            itemPart.setValue(v);
            i++;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (value_1_1 && !value_1_1.done && (_a = value_1.return)) await _a.call(value_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
});


/***/ }),

/***/ "./node_modules/lit-html/lib/async-replace.js":
/*!****************************************************!*\
  !*** ./node_modules/lit-html/lib/async-replace.js ***!
  \****************************************************/
/*! exports provided: asyncReplace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncReplace", function() { return asyncReplace; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var __asyncValues = (undefined && undefined.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};

/**
 * A directive that renders the items of an async iterable[1], replacing
 * previous values with new values, so that only one value is ever rendered
 * at a time.
 *
 * Async iterables are objects with a [Symbol.asyncIterator] method, which
 * returns an iterator who's `next()` method returns a Promise. When a new
 * value is available, the Promise resolves and the value is rendered to the
 * Part controlled by the directive. If another value other than this
 * directive has been set on the Part, the iterable will no longer be listened
 * to and new values won't be written to the Part.
 *
 * [1]: https://github.com/tc39/proposal-async-iteration
 *
 * @param value An async iterable
 * @param mapper An optional function that maps from (value, index) to another
 *     value. Useful for generating templates for each item in the iterable.
 */
const asyncReplace = (value, mapper) => Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"])(async (part) => {
    var e_1, _a;
    // If we've already set up this particular iterable, we don't need
    // to do anything.
    if (value === part._previousValue) {
        return;
    }
    // We nest a new part to keep track of previous item values separately
    // of the iterable as a value itself.
    const itemPart = new _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["NodePart"](part.instance, part.startNode, part.endNode);
    part._previousValue = itemPart;
    let i = 0;
    try {
        for (var value_1 = __asyncValues(value), value_1_1; value_1_1 = await value_1.next(), !value_1_1.done;) {
            let v = value_1_1.value;
            // When we get the first value, clear the part. This let's the
            // previous value display until we can replace it.
            if (i === 0) {
                part.clear();
            }
            // Check to make sure that value is the still the current value of
            // the part, and if not bail because a new value owns this part
            if (part._previousValue !== itemPart) {
                break;
            }
            // As a convenience, because functional-programming-style
            // transforms of iterables and async iterables requires a library,
            // we accept a mapper function. This is especially convenient for
            // rendering a template for each item.
            if (mapper !== undefined) {
                v = mapper(v, i);
            }
            itemPart.setValue(v);
            i++;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (value_1_1 && !value_1_1.done && (_a = value_1.return)) await _a.call(value_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
});


/***/ }),

/***/ "./node_modules/lit-html/lib/lit-extended.js":
/*!***************************************************!*\
  !*** ./node_modules/lit-html/lib/lit-extended.js ***!
  \***************************************************/
/*! exports provided: render, html, svg, extendedPartCallback, BooleanAttributePart, PropertyPart, EventPart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendedPartCallback", function() { return extendedPartCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanAttributePart", function() { return BooleanAttributePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPart", function() { return PropertyPart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPart", function() { return EventPart; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */


/**
 * Interprets a template literal as a lit-extended HTML template.
 */
const html = (strings, ...values) => new _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["TemplateResult"](strings, values, 'html', extendedPartCallback);
/**
 * Interprets a template literal as a lit-extended SVG template.
 */
const svg = (strings, ...values) => new _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["SVGTemplateResult"](strings, values, 'svg', extendedPartCallback);
/**
 * A PartCallback which allows templates to set properties and declarative
 * event handlers.
 *
 * Properties are set by default, instead of attributes. Attribute names in
 * lit-html templates preserve case, so properties are case sensitive. If an
 * expression takes up an entire attribute value, then the property is set to
 * that value. If an expression is interpolated with a string or other
 * expressions then the property is set to the string result of the
 * interpolation.
 *
 * To set an attribute instead of a property, append a `$` suffix to the
 * attribute name.
 *
 * Example:
 *
 *     html`<button class$="primary">Buy Now</button>`
 *
 * To set an event handler, prefix the attribute name with `on-`:
 *
 * Example:
 *
 *     html`<button on-click=${(e)=> this.onClickHandler(e)}>Buy Now</button>`
 *
 */
const extendedPartCallback = (instance, templatePart, node) => {
    if (templatePart.type === 'attribute') {
        if (templatePart.rawName.substr(0, 3) === 'on-') {
            const eventName = templatePart.rawName.slice(3);
            return new EventPart(instance, node, eventName);
        }
        const lastChar = templatePart.name.substr(templatePart.name.length - 1);
        if (lastChar === '$') {
            const name = templatePart.name.slice(0, -1);
            return new _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["AttributePart"](instance, node, name, templatePart.strings);
        }
        if (lastChar === '?') {
            const name = templatePart.name.slice(0, -1);
            return new BooleanAttributePart(instance, node, name, templatePart.strings);
        }
        return new PropertyPart(instance, node, templatePart.rawName, templatePart.strings);
    }
    return Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["defaultPartCallback"])(instance, templatePart, node);
};
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */
class BooleanAttributePart extends _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["AttributePart"] {
    setValue(values, startIndex) {
        const s = this.strings;
        if (s.length === 2 && s[0] === '' && s[1] === '') {
            const value = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["getValue"])(this, values[startIndex]);
            if (value === _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["noChange"]) {
                return;
            }
            if (value) {
                this.element.setAttribute(this.name, '');
            }
            else {
                this.element.removeAttribute(this.name);
            }
        }
        else {
            throw new Error('boolean attributes can only contain a single expression');
        }
    }
}
class PropertyPart extends _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["AttributePart"] {
    setValue(values, startIndex) {
        const s = this.strings;
        let value;
        if (this._equalToPreviousValues(values, startIndex)) {
            return;
        }
        if (s.length === 2 && s[0] === '' && s[1] === '') {
            // An expression that occupies the whole attribute value will leave
            // leading and trailing empty strings.
            value = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["getValue"])(this, values[startIndex]);
        }
        else {
            // Interpolation, so interpolate
            value = this._interpolate(values, startIndex);
        }
        if (value !== _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["noChange"]) {
            this.element[this.name] = value;
        }
        this._previousValues = values;
    }
}
class EventPart {
    constructor(instance, element, eventName) {
        this.instance = instance;
        this.element = element;
        this.eventName = eventName;
    }
    setValue(value) {
        const listener = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["getValue"])(this, value);
        if (listener === this._listener) {
            return;
        }
        if (listener == null) {
            this.element.removeEventListener(this.eventName, this);
        }
        else if (this._listener == null) {
            this.element.addEventListener(this.eventName, this);
        }
        this._listener = listener;
    }
    handleEvent(event) {
        if (typeof this._listener === 'function') {
            this._listener.call(this.element, event);
        }
        else if (typeof this._listener.handleEvent === 'function') {
            this._listener.handleEvent(event);
        }
    }
}


/***/ }),

/***/ "./node_modules/lit-html/lib/modify-template.js":
/*!******************************************************!*\
  !*** ./node_modules/lit-html/lib/modify-template.js ***!
  \******************************************************/
/*! exports provided: removeNodesFromTemplate, insertNodeIntoTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNodesFromTemplate", function() { return removeNodesFromTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertNodeIntoTemplate", function() { return insertNodeIntoTemplate; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

const walkerNodeFilter = NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT |
    NodeFilter.SHOW_TEXT;
/**
 * Removes the list of nodes from a Template safely. In addition to removing
 * nodes from the Template, the Template part indices are updated to match
 * the mutated Template DOM.
 *
 * As the template is walked the removal state is tracked and
 * part indices are adjusted as needed.
 *
 * div
 *   div#1 (remove) <-- start removing (removing node is div#1)
 *     div
 *       div#2 (remove)  <-- continue removing (removing node is still div#1)
 *         div
 * div <-- stop removing since previous sibling is the removing node (div#1, removed 4 nodes)
 */
function removeNodesFromTemplate(template, nodesToRemove) {
    const { element: { content }, parts } = template;
    const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    let partIndex = 0;
    let part = parts[0];
    let nodeIndex = -1;
    let removeCount = 0;
    const nodesToRemoveInTemplate = [];
    let currentRemovingNode = null;
    while (walker.nextNode()) {
        nodeIndex++;
        const node = walker.currentNode;
        // End removal if stepped past the removing node
        if (node.previousSibling === currentRemovingNode) {
            currentRemovingNode = null;
        }
        // A node to remove was found in the template
        if (nodesToRemove.has(node)) {
            nodesToRemoveInTemplate.push(node);
            // Track node we're removing
            if (currentRemovingNode === null) {
                currentRemovingNode = node;
            }
        }
        // When removing, increment count by which to adjust subsequent part indices
        if (currentRemovingNode !== null) {
            removeCount++;
        }
        while (part !== undefined && part.index === nodeIndex) {
            // If part is in a removed node deactivate it by setting index to -1 or
            // adjust the index as needed.
            part.index = currentRemovingNode !== null ? -1 : part.index - removeCount;
            part = parts[++partIndex];
        }
    }
    nodesToRemoveInTemplate.forEach((n) => n.parentNode.removeChild(n));
}
const countNodes = (node) => {
    let count = 1;
    const walker = document.createTreeWalker(node, walkerNodeFilter, null, false);
    while (walker.nextNode()) {
        count++;
    }
    return count;
};
const nextActiveIndexInTemplateParts = (parts, startIndex = -1) => {
    for (let i = startIndex + 1; i < parts.length; i++) {
        const part = parts[i];
        if (Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["isTemplatePartActive"])(part)) {
            return i;
        }
    }
    return -1;
};
/**
 * Inserts the given node into the Template, optionally before the given
 * refNode. In addition to inserting the node into the Template, the Template
 * part indices are updated to match the mutated Template DOM.
 */
function insertNodeIntoTemplate(template, node, refNode = null) {
    const { element: { content }, parts } = template;
    // If there's no refNode, then put node at end of template.
    // No part indices need to be shifted in this case.
    if (refNode === null || refNode === undefined) {
        content.appendChild(node);
        return;
    }
    const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    let partIndex = nextActiveIndexInTemplateParts(parts);
    let insertCount = 0;
    let walkerIndex = -1;
    while (walker.nextNode()) {
        walkerIndex++;
        const walkerNode = walker.currentNode;
        if (walkerNode === refNode) {
            refNode.parentNode.insertBefore(node, refNode);
            insertCount = countNodes(node);
        }
        while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
            // If we've inserted the node, simply adjust all subsequent parts
            if (insertCount > 0) {
                while (partIndex !== -1) {
                    parts[partIndex].index += insertCount;
                    partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
                }
                return;
            }
            partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
        }
    }
}


/***/ }),

/***/ "./node_modules/lit-html/lib/repeat.js":
/*!*********************************************!*\
  !*** ./node_modules/lit-html/lib/repeat.js ***!
  \*********************************************/
/*! exports provided: repeat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return repeat; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

const keyMapCache = new WeakMap();
function cleanMap(part, key, map) {
    if (!part.startNode.parentNode) {
        map.delete(key);
    }
}
function repeat(items, keyFnOrTemplate, template) {
    let keyFn;
    if (arguments.length === 2) {
        template = keyFnOrTemplate;
    }
    else if (arguments.length === 3) {
        keyFn = keyFnOrTemplate;
    }
    return Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"])((part) => {
        let keyMap = keyMapCache.get(part);
        if (keyMap === undefined) {
            keyMap = new Map();
            keyMapCache.set(part, keyMap);
        }
        const container = part.startNode.parentNode;
        let index = -1;
        let currentMarker = part.startNode.nextSibling;
        for (const item of items) {
            let result;
            let key;
            try {
                ++index;
                result = template(item, index);
                key = keyFn ? keyFn(item) : index;
            }
            catch (e) {
                console.error(e);
                continue;
            }
            // Try to reuse a part
            let itemPart = keyMap.get(key);
            if (itemPart === undefined) {
                const marker = document.createTextNode('');
                const endNode = document.createTextNode('');
                container.insertBefore(marker, currentMarker);
                container.insertBefore(endNode, currentMarker);
                itemPart = new _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["NodePart"](part.instance, marker, endNode);
                if (key !== undefined) {
                    keyMap.set(key, itemPart);
                }
            }
            else if (currentMarker !== itemPart.startNode) {
                // Existing part in the wrong position
                const end = itemPart.endNode.nextSibling;
                if (currentMarker !== end) {
                    Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["reparentNodes"])(container, itemPart.startNode, end, currentMarker);
                }
            }
            else {
                // else part is in the correct position already
                currentMarker = itemPart.endNode.nextSibling;
            }
            itemPart.setValue(result);
        }
        // Cleanup
        if (currentMarker !== part.endNode) {
            Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["removeNodes"])(container, currentMarker, part.endNode);
            keyMap.forEach(cleanMap);
        }
    });
}


/***/ }),

/***/ "./node_modules/lit-html/lib/shady-render.js":
/*!***************************************************!*\
  !*** ./node_modules/lit-html/lib/shady-render.js ***!
  \***************************************************/
/*! exports provided: html, svg, TemplateResult, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/* harmony import */ var _modify_template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modify-template.js */ "./node_modules/lit-html/lib/modify-template.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["svg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["TemplateResult"]; });

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */



// Get a key to lookup in `templateCaches`.
const getTemplateCacheKey = (type, scopeName) => `${type}--${scopeName}`;
/**
 * Template factory which scopes template DOM using ShadyCSS.
 * @param scopeName {string}
 */
const shadyTemplateFactory = (scopeName) => (result) => {
    const cacheKey = getTemplateCacheKey(result.type, scopeName);
    let templateCache = _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["templateCaches"].get(cacheKey);
    if (templateCache === undefined) {
        templateCache = new Map();
        _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["templateCaches"].set(cacheKey, templateCache);
    }
    let template = templateCache.get(result.strings);
    if (template === undefined) {
        const element = result.getTemplateElement();
        if (typeof window.ShadyCSS === 'object') {
            window.ShadyCSS.prepareTemplateDom(element, scopeName);
        }
        template = new _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["Template"](result, element);
        templateCache.set(result.strings, template);
    }
    return template;
};
const TEMPLATE_TYPES = ['html', 'svg'];
/**
 * Removes all style elements from Templates for the given scopeName.
 */
function removeStylesFromLitTemplates(scopeName) {
    TEMPLATE_TYPES.forEach((type) => {
        const templates = _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["templateCaches"].get(getTemplateCacheKey(type, scopeName));
        if (templates !== undefined) {
            templates.forEach((template) => {
                const { element: { content } } = template;
                const styles = content.querySelectorAll('style');
                Object(_modify_template_js__WEBPACK_IMPORTED_MODULE_1__["removeNodesFromTemplate"])(template, new Set(Array.from(styles)));
            });
        }
    });
}
const shadyRenderSet = new Set();
/**
 * For the given scope name, ensures that ShadyCSS style scoping is performed.
 * This is done just once per scope name so the fragment and template cannot
 * be modified.
 * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
 * to be scoped and appended to the document
 * (2) removes style elements from all lit-html Templates for this scope name.
 *
 * Note, <style> elements can only be placed into templates for the
 * initial rendering of the scope. If <style> elements are included in templates
 * dynamically rendered to the scope (after the first scope render), they will
 * not be scoped and the <style> will be left in the template and rendered output.
 */
const ensureStylesScoped = (fragment, template, scopeName) => {
    // only scope element template once per scope name
    if (!shadyRenderSet.has(scopeName)) {
        shadyRenderSet.add(scopeName);
        const styleTemplate = document.createElement('template');
        Array.from(fragment.querySelectorAll('style')).forEach((s) => {
            styleTemplate.content.appendChild(s);
        });
        window.ShadyCSS.prepareTemplateStyles(styleTemplate, scopeName);
        // Fix templates: note the expectation here is that the given `fragment`
        // has been generated from the given `template` which contains
        // the set of templates rendered into this scope.
        // It is only from this set of initial templates from which styles
        // will be scoped and removed.
        removeStylesFromLitTemplates(scopeName);
        // ApplyShim case
        if (window.ShadyCSS.nativeShadow) {
            const style = styleTemplate.content.querySelector('style');
            if (style !== null) {
                // Insert style into rendered fragment
                fragment.insertBefore(style, fragment.firstChild);
                // Insert into lit-template (for subsequent renders)
                Object(_modify_template_js__WEBPACK_IMPORTED_MODULE_1__["insertNodeIntoTemplate"])(template, style.cloneNode(true), template.element.content.firstChild);
            }
        }
    }
};
// NOTE: We're copying code from lit-html's `render` method here.
// We're doing this explicitly because the API for rendering templates is likely
// to change in the near term.
function render(result, container, scopeName) {
    const templateFactory = shadyTemplateFactory(scopeName);
    const template = templateFactory(result);
    let instance = container.__templateInstance;
    // Repeat render, just call update()
    if (instance !== undefined && instance.template === template &&
        instance._partCallback === result.partCallback) {
        instance.update(result.values);
        return;
    }
    // First render, create a new TemplateInstance and append it
    instance =
        new _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["TemplateInstance"](template, result.partCallback, templateFactory);
    container.__templateInstance = instance;
    const fragment = instance._clone();
    instance.update(result.values);
    const host = container instanceof ShadowRoot ?
        container.host :
        undefined;
    // If there's a shadow host, do ShadyCSS scoping...
    if (host !== undefined && typeof window.ShadyCSS === 'object') {
        ensureStylesScoped(fragment, template, scopeName);
        window.ShadyCSS.styleElement(host);
    }
    Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["removeNodes"])(container, container.firstChild);
    container.appendChild(fragment);
}


/***/ }),

/***/ "./node_modules/lit-html/lib/until.js":
/*!********************************************!*\
  !*** ./node_modules/lit-html/lib/until.js ***!
  \********************************************/
/*! exports provided: until */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "until", function() { return until; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Display `defaultContent` until `promise` resolves.
 */
const until = (promise, defaultContent) => Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"])((part) => {
    part.setValue(defaultContent);
    part.setValue(promise);
});


/***/ }),

/***/ "./node_modules/lit-html/lit-html.js":
/*!*******************************************!*\
  !*** ./node_modules/lit-html/lit-html.js ***!
  \*******************************************/
/*! exports provided: templateCaches, html, svg, TemplateResult, SVGTemplateResult, defaultTemplateFactory, render, TemplatePart, isTemplatePartActive, Template, getValue, directive, noChange, directiveValue, AttributePart, NodePart, defaultPartCallback, TemplateInstance, reparentNodes, removeNodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateCaches", function() { return templateCaches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return TemplateResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return SVGTemplateResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateFactory", function() { return defaultTemplateFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatePart", function() { return TemplatePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTemplatePartActive", function() { return isTemplatePartActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return Template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValue", function() { return getValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return noChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directiveValue", function() { return noChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributePart", function() { return AttributePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodePart", function() { return NodePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultPartCallback", function() { return defaultPartCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateInstance", function() { return TemplateInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reparentNodes", function() { return reparentNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNodes", function() { return removeNodes; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
// The first argument to JS template tags retain identity across multiple
// calls to a tag for the same literal, so we can cache work done per literal
// in a Map.
const templateCaches = new Map();
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */
const html = (strings, ...values) => new TemplateResult(strings, values, 'html');
/**
 * Interprets a template literal as an SVG template that can efficiently
 * render to and update a container.
 */
const svg = (strings, ...values) => new SVGTemplateResult(strings, values, 'svg');
/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */
class TemplateResult {
    constructor(strings, values, type, partCallback = defaultPartCallback) {
        this.strings = strings;
        this.values = values;
        this.type = type;
        this.partCallback = partCallback;
    }
    /**
     * Returns a string of HTML used to create a <template> element.
     */
    getHTML() {
        const l = this.strings.length - 1;
        let html = '';
        let isTextBinding = true;
        for (let i = 0; i < l; i++) {
            const s = this.strings[i];
            html += s;
            // We're in a text position if the previous string closed its tags.
            // If it doesn't have any tags, then we use the previous text position
            // state.
            const closing = findTagClose(s);
            isTextBinding = closing > -1 ? closing < s.length : isTextBinding;
            html += isTextBinding ? nodeMarker : marker;
        }
        html += this.strings[l];
        return html;
    }
    getTemplateElement() {
        const template = document.createElement('template');
        template.innerHTML = this.getHTML();
        return template;
    }
}
/**
 * A TemplateResult for SVG fragments.
 *
 * This class wraps HTMl in an <svg> tag in order to parse its contents in the
 * SVG namespace, then modifies the template to remove the <svg> tag so that
 * clones only container the original fragment.
 */
class SVGTemplateResult extends TemplateResult {
    getHTML() {
        return `<svg>${super.getHTML()}</svg>`;
    }
    getTemplateElement() {
        const template = super.getTemplateElement();
        const content = template.content;
        const svgElement = content.firstChild;
        content.removeChild(svgElement);
        reparentNodes(content, svgElement.firstChild);
        return template;
    }
}
/**
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */
function defaultTemplateFactory(result) {
    let templateCache = templateCaches.get(result.type);
    if (templateCache === undefined) {
        templateCache = new Map();
        templateCaches.set(result.type, templateCache);
    }
    let template = templateCache.get(result.strings);
    if (template === undefined) {
        template = new Template(result, result.getTemplateElement());
        templateCache.set(result.strings, template);
    }
    return template;
}
/**
 * Renders a template to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 *
 * @param result a TemplateResult created by evaluating a template tag like
 *     `html` or `svg`.
 * @param container A DOM parent to render to. The entire contents are either
 *     replaced, or efficiently updated if the same result type was previous
 *     rendered there.
 * @param templateFactory a function to create a Template or retreive one from
 *     cache.
 */
function render(result, container, templateFactory = defaultTemplateFactory) {
    const template = templateFactory(result);
    let instance = container.__templateInstance;
    // Repeat render, just call update()
    if (instance !== undefined && instance.template === template &&
        instance._partCallback === result.partCallback) {
        instance.update(result.values);
        return;
    }
    // First render, create a new TemplateInstance and append it
    instance =
        new TemplateInstance(template, result.partCallback, templateFactory);
    container.__templateInstance = instance;
    const fragment = instance._clone();
    instance.update(result.values);
    removeNodes(container, container.firstChild);
    container.appendChild(fragment);
}
/**
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */
const marker = `{{lit-${String(Math.random()).slice(2)}}}`;
/**
 * An expression marker used text-positions, not attribute positions,
 * in template.
 */
const nodeMarker = `<!--${marker}-->`;
const markerRegex = new RegExp(`${marker}|${nodeMarker}`);
/**
 * This regex extracts the attribute name preceding an attribute-position
 * expression. It does this by matching the syntax allowed for attributes
 * against the string literal directly preceding the expression, assuming that
 * the expression is in an attribute-value position.
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#attributes-0
 *
 * "\0-\x1F\x7F-\x9F" are Unicode control characters
 *
 * " \x09\x0a\x0c\x0d" are HTML space characters:
 * https://www.w3.org/TR/html5/infrastructure.html#space-character
 *
 * So an attribute is:
 *  * The name: any character except a control character, space character, ('),
 *    ("), ">", "=", or "/"
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */
const lastAttributeNameRegex = /[ \x09\x0a\x0c\x0d]([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)[ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*)$/;
/**
 * Finds the closing index of the last closed HTML tag.
 * This has 3 possible return values:
 *   - `-1`, meaning there is no tag in str.
 *   - `string.length`, meaning the last opened tag is unclosed.
 *   - Some positive number < str.length, meaning the index of the closing '>'.
 */
function findTagClose(str) {
    const close = str.lastIndexOf('>');
    const open = str.indexOf('<', close + 1);
    return open > -1 ? str.length : close;
}
/**
 * A placeholder for a dynamic expression in an HTML template.
 *
 * There are two built-in part types: AttributePart and NodePart. NodeParts
 * always represent a single dynamic expression, while AttributeParts may
 * represent as many expressions are contained in the attribute.
 *
 * A Template's parts are mutable, so parts can be replaced or modified
 * (possibly to implement different template semantics). The contract is that
 * parts can only be replaced, not removed, added or reordered, and parts must
 * always consume the correct number of values in their `update()` method.
 *
 * TODO(justinfagnani): That requirement is a little fragile. A
 * TemplateInstance could instead be more careful about which values it gives
 * to Part.update().
 */
class TemplatePart {
    constructor(type, index, name, rawName, strings) {
        this.type = type;
        this.index = index;
        this.name = name;
        this.rawName = rawName;
        this.strings = strings;
    }
}
const isTemplatePartActive = (part) => part.index !== -1;
/**
 * An updateable Template that tracks the location of dynamic parts.
 */
class Template {
    constructor(result, element) {
        this.parts = [];
        this.element = element;
        const content = this.element.content;
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        const walker = document.createTreeWalker(content, 133 /* NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT |
               NodeFilter.SHOW_TEXT */, null, false);
        let index = -1;
        let partIndex = 0;
        const nodesToRemove = [];
        // The actual previous node, accounting for removals: if a node is removed
        // it will never be the previousNode.
        let previousNode;
        // Used to set previousNode at the top of the loop.
        let currentNode;
        while (walker.nextNode()) {
            index++;
            previousNode = currentNode;
            const node = currentNode = walker.currentNode;
            if (node.nodeType === 1 /* Node.ELEMENT_NODE */) {
                if (!node.hasAttributes()) {
                    continue;
                }
                const attributes = node.attributes;
                // Per https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
                // attributes are not guaranteed to be returned in document order. In
                // particular, Edge/IE can return them out of order, so we cannot assume
                // a correspondance between part index and attribute index.
                let count = 0;
                for (let i = 0; i < attributes.length; i++) {
                    if (attributes[i].value.indexOf(marker) >= 0) {
                        count++;
                    }
                }
                while (count-- > 0) {
                    // Get the template literal section leading up to the first
                    // expression in this attribute
                    const stringForPart = result.strings[partIndex];
                    // Find the attribute name
                    const attributeNameInPart = lastAttributeNameRegex.exec(stringForPart)[1];
                    // Find the corresponding attribute
                    // TODO(justinfagnani): remove non-null assertion
                    const attribute = attributes.getNamedItem(attributeNameInPart);
                    const stringsForAttributeValue = attribute.value.split(markerRegex);
                    this.parts.push(new TemplatePart('attribute', index, attribute.name, attributeNameInPart, stringsForAttributeValue));
                    node.removeAttribute(attribute.name);
                    partIndex += stringsForAttributeValue.length - 1;
                }
            }
            else if (node.nodeType === 3 /* Node.TEXT_NODE */) {
                const nodeValue = node.nodeValue;
                if (nodeValue.indexOf(marker) < 0) {
                    continue;
                }
                const parent = node.parentNode;
                const strings = nodeValue.split(markerRegex);
                const lastIndex = strings.length - 1;
                // We have a part for each match found
                partIndex += lastIndex;
                // Generate a new text node for each literal section
                // These nodes are also used as the markers for node parts
                for (let i = 0; i < lastIndex; i++) {
                    parent.insertBefore((strings[i] === '')
                        ? document.createComment('')
                        : document.createTextNode(strings[i]), node);
                    this.parts.push(new TemplatePart('node', index++));
                }
                parent.insertBefore(strings[lastIndex] === '' ?
                    document.createComment('') :
                    document.createTextNode(strings[lastIndex]), node);
                nodesToRemove.push(node);
            }
            else if (node.nodeType === 8 /* Node.COMMENT_NODE */ &&
                node.nodeValue === marker) {
                const parent = node.parentNode;
                // Add a new marker node to be the startNode of the Part if any of the
                // following are true:
                //  * We don't have a previousSibling
                //  * previousSibling is being removed (thus it's not the
                //    `previousNode`)
                //  * previousSibling is not a Text node
                //
                // TODO(justinfagnani): We should be able to use the previousNode here
                // as the marker node and reduce the number of extra nodes we add to a
                // template. See https://github.com/PolymerLabs/lit-html/issues/147
                const previousSibling = node.previousSibling;
                if (previousSibling === null || previousSibling !== previousNode ||
                    previousSibling.nodeType !== Node.TEXT_NODE) {
                    parent.insertBefore(document.createComment(''), node);
                }
                else {
                    index--;
                }
                this.parts.push(new TemplatePart('node', index++));
                nodesToRemove.push(node);
                // If we don't have a nextSibling add a marker node.
                // We don't have to check if the next node is going to be removed,
                // because that node will induce a new marker if so.
                if (node.nextSibling === null) {
                    parent.insertBefore(document.createComment(''), node);
                }
                else {
                    index--;
                }
                currentNode = previousNode;
                partIndex++;
            }
        }
        // Remove text binding nodes after the walk to not disturb the TreeWalker
        for (const n of nodesToRemove) {
            n.parentNode.removeChild(n);
        }
    }
}
/**
 * Returns a value ready to be inserted into a Part from a user-provided value.
 *
 * If the user value is a directive, this invokes the directive with the given
 * part. If the value is null, it's converted to undefined to work better
 * with certain DOM APIs, like textContent.
 */
const getValue = (part, value) => {
    // `null` as the value of a Text node will render the string 'null'
    // so we convert it to undefined
    if (isDirective(value)) {
        value = value(part);
        return noChange;
    }
    return value === null ? undefined : value;
};
const directive = (f) => {
    f.__litDirective = true;
    return f;
};
const isDirective = (o) => typeof o === 'function' && o.__litDirective === true;
/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
const noChange = {};
/**
 * @deprecated Use `noChange` instead.
 */

const isPrimitiveValue = (value) => value === null ||
    !(typeof value === 'object' || typeof value === 'function');
class AttributePart {
    constructor(instance, element, name, strings) {
        this.instance = instance;
        this.element = element;
        this.name = name;
        this.strings = strings;
        this.size = strings.length - 1;
        this._previousValues = [];
    }
    _interpolate(values, startIndex) {
        const strings = this.strings;
        const l = strings.length - 1;
        let text = '';
        for (let i = 0; i < l; i++) {
            text += strings[i];
            const v = getValue(this, values[startIndex + i]);
            if (v && v !== noChange &&
                (Array.isArray(v) || typeof v !== 'string' && v[Symbol.iterator])) {
                for (const t of v) {
                    // TODO: we need to recursively call getValue into iterables...
                    text += t;
                }
            }
            else {
                text += v;
            }
        }
        return text + strings[l];
    }
    _equalToPreviousValues(values, startIndex) {
        for (let i = startIndex; i < startIndex + this.size; i++) {
            if (this._previousValues[i] !== values[i] ||
                !isPrimitiveValue(values[i])) {
                return false;
            }
        }
        return true;
    }
    setValue(values, startIndex) {
        if (this._equalToPreviousValues(values, startIndex)) {
            return;
        }
        const s = this.strings;
        let value;
        if (s.length === 2 && s[0] === '' && s[1] === '') {
            // An expression that occupies the whole attribute value will leave
            // leading and trailing empty strings.
            value = getValue(this, values[startIndex]);
            if (Array.isArray(value)) {
                value = value.join('');
            }
        }
        else {
            value = this._interpolate(values, startIndex);
        }
        if (value !== noChange) {
            this.element.setAttribute(this.name, value);
        }
        this._previousValues = values;
    }
}
class NodePart {
    constructor(instance, startNode, endNode) {
        this.instance = instance;
        this.startNode = startNode;
        this.endNode = endNode;
        this._previousValue = undefined;
    }
    setValue(value) {
        value = getValue(this, value);
        if (value === noChange) {
            return;
        }
        if (isPrimitiveValue(value)) {
            // Handle primitive values
            // If the value didn't change, do nothing
            if (value === this._previousValue) {
                return;
            }
            this._setText(value);
        }
        else if (value instanceof TemplateResult) {
            this._setTemplateResult(value);
        }
        else if (Array.isArray(value) || value[Symbol.iterator]) {
            this._setIterable(value);
        }
        else if (value instanceof Node) {
            this._setNode(value);
        }
        else if (value.then !== undefined) {
            this._setPromise(value);
        }
        else {
            // Fallback, will render the string representation
            this._setText(value);
        }
    }
    _insert(node) {
        this.endNode.parentNode.insertBefore(node, this.endNode);
    }
    _setNode(value) {
        if (this._previousValue === value) {
            return;
        }
        this.clear();
        this._insert(value);
        this._previousValue = value;
    }
    _setText(value) {
        const node = this.startNode.nextSibling;
        value = value === undefined ? '' : value;
        if (node === this.endNode.previousSibling &&
            node.nodeType === Node.TEXT_NODE) {
            // If we only have a single text node between the markers, we can just
            // set its value, rather than replacing it.
            // TODO(justinfagnani): Can we just check if _previousValue is
            // primitive?
            node.textContent = value;
        }
        else {
            this._setNode(document.createTextNode(value));
        }
        this._previousValue = value;
    }
    _setTemplateResult(value) {
        const template = this.instance._getTemplate(value);
        let instance;
        if (this._previousValue && this._previousValue.template === template) {
            instance = this._previousValue;
        }
        else {
            instance = new TemplateInstance(template, this.instance._partCallback, this.instance._getTemplate);
            this._setNode(instance._clone());
            this._previousValue = instance;
        }
        instance.update(value.values);
    }
    _setIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If _previousValue is an array, then the previous render was of an
        // iterable and _previousValue will contain the NodeParts from the previous
        // render. If _previousValue is not an array, clear this part and make a new
        // array for NodeParts.
        if (!Array.isArray(this._previousValue)) {
            this.clear();
            this._previousValue = [];
        }
        // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render
        const itemParts = this._previousValue;
        let partIndex = 0;
        for (const item of value) {
            // Try to reuse an existing part
            let itemPart = itemParts[partIndex];
            // If no existing part, create a new one
            if (itemPart === undefined) {
                // If we're creating the first item part, it's startNode should be the
                // container's startNode
                let itemStart = this.startNode;
                // If we're not creating the first part, create a new separator marker
                // node, and fix up the previous part's endNode to point to it
                if (partIndex > 0) {
                    const previousPart = itemParts[partIndex - 1];
                    itemStart = previousPart.endNode = document.createTextNode('');
                    this._insert(itemStart);
                }
                itemPart = new NodePart(this.instance, itemStart, this.endNode);
                itemParts.push(itemPart);
            }
            itemPart.setValue(item);
            partIndex++;
        }
        if (partIndex === 0) {
            this.clear();
            this._previousValue = undefined;
        }
        else if (partIndex < itemParts.length) {
            const lastPart = itemParts[partIndex - 1];
            // Truncate the parts array so _previousValue reflects the current state
            itemParts.length = partIndex;
            this.clear(lastPart.endNode.previousSibling);
            lastPart.endNode = this.endNode;
        }
    }
    _setPromise(value) {
        this._previousValue = value;
        value.then((v) => {
            if (this._previousValue === value) {
                this.setValue(v);
            }
        });
    }
    clear(startNode = this.startNode) {
        removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
    }
}
const defaultPartCallback = (instance, templatePart, node) => {
    if (templatePart.type === 'attribute') {
        return new AttributePart(instance, node, templatePart.name, templatePart.strings);
    }
    else if (templatePart.type === 'node') {
        return new NodePart(instance, node, node.nextSibling);
    }
    throw new Error(`Unknown part type ${templatePart.type}`);
};
/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */
class TemplateInstance {
    constructor(template, partCallback, getTemplate) {
        this._parts = [];
        this.template = template;
        this._partCallback = partCallback;
        this._getTemplate = getTemplate;
    }
    update(values) {
        let valueIndex = 0;
        for (const part of this._parts) {
            if (!part) {
                valueIndex++;
            }
            else if (part.size === undefined) {
                part.setValue(values[valueIndex]);
                valueIndex++;
            }
            else {
                part.setValue(values, valueIndex);
                valueIndex += part.size;
            }
        }
    }
    _clone() {
        // Clone the node, rather than importing it, to keep the fragment in the
        // template's document. This leaves the fragment inert so custom elements
        // won't upgrade until after the main document adopts the node.
        const fragment = this.template.element.content.cloneNode(true);
        const parts = this.template.parts;
        if (parts.length > 0) {
            // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
            // null
            const walker = document.createTreeWalker(fragment, 133 /* NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT |
                   NodeFilter.SHOW_TEXT */, null, false);
            let index = -1;
            for (let i = 0; i < parts.length; i++) {
                const part = parts[i];
                const partActive = isTemplatePartActive(part);
                // An inactive part has no coresponding Template node.
                if (partActive) {
                    while (index < part.index) {
                        index++;
                        walker.nextNode();
                    }
                }
                this._parts.push(partActive ? this._partCallback(this, part, walker.currentNode) : undefined);
            }
        }
        return fragment;
    }
}
/**
 * Reparents nodes, starting from `startNode` (inclusive) to `endNode`
 * (exclusive), into another container (could be the same container), before
 * `beforeNode`. If `beforeNode` is null, it appends the nodes to the
 * container.
 */
const reparentNodes = (container, start, end = null, before = null) => {
    let node = start;
    while (node !== end) {
        const n = node.nextSibling;
        container.insertBefore(node, before);
        node = n;
    }
};
/**
 * Removes nodes, starting from `startNode` (inclusive) to `endNode`
 * (exclusive), from `container`.
 */
const removeNodes = (container, startNode, endNode = null) => {
    let node = startNode;
    while (node !== endNode) {
        const n = node.nextSibling;
        container.removeChild(node);
        node = n;
    }
};


/***/ }),

/***/ "./node_modules/localforage/dist/localforage.js":
/*!******************************************************!*\
  !*** ./node_modules/localforage/dist/localforage.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var require;var require;/*!
    localForage -- Offline Storage, Improved
    Version 1.7.2
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw (f.code="MODULE_NOT_FOUND", f)}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function (global){
'use strict';
var Mutation = global.MutationObserver || global.WebKitMutationObserver;

var scheduleDrain;

{
  if (Mutation) {
    var called = 0;
    var observer = new Mutation(nextTick);
    var element = global.document.createTextNode('');
    observer.observe(element, {
      characterData: true
    });
    scheduleDrain = function () {
      element.data = (called = ++called % 2);
    };
  } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
    var channel = new global.MessageChannel();
    channel.port1.onmessage = nextTick;
    scheduleDrain = function () {
      channel.port2.postMessage(0);
    };
  } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
    scheduleDrain = function () {

      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var scriptEl = global.document.createElement('script');
      scriptEl.onreadystatechange = function () {
        nextTick();

        scriptEl.onreadystatechange = null;
        scriptEl.parentNode.removeChild(scriptEl);
        scriptEl = null;
      };
      global.document.documentElement.appendChild(scriptEl);
    };
  } else {
    scheduleDrain = function () {
      setTimeout(nextTick, 0);
    };
  }
}

var draining;
var queue = [];
//named nextTick for less confusing stack traces
function nextTick() {
  draining = true;
  var i, oldQueue;
  var len = queue.length;
  while (len) {
    oldQueue = queue;
    queue = [];
    i = -1;
    while (++i < len) {
      oldQueue[i]();
    }
    len = queue.length;
  }
  draining = false;
}

module.exports = immediate;
function immediate(task) {
  if (queue.push(task) === 1 && !draining) {
    scheduleDrain();
  }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(_dereq_,module,exports){
'use strict';
var immediate = _dereq_(1);

/* istanbul ignore next */
function INTERNAL() {}

var handlers = {};

var REJECTED = ['REJECTED'];
var FULFILLED = ['FULFILLED'];
var PENDING = ['PENDING'];

module.exports = Promise;

function Promise(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('resolver must be a function');
  }
  this.state = PENDING;
  this.queue = [];
  this.outcome = void 0;
  if (resolver !== INTERNAL) {
    safelyResolveThenable(this, resolver);
  }
}

Promise.prototype["catch"] = function (onRejected) {
  return this.then(null, onRejected);
};
Promise.prototype.then = function (onFulfilled, onRejected) {
  if (typeof onFulfilled !== 'function' && this.state === FULFILLED ||
    typeof onRejected !== 'function' && this.state === REJECTED) {
    return this;
  }
  var promise = new this.constructor(INTERNAL);
  if (this.state !== PENDING) {
    var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
    unwrap(promise, resolver, this.outcome);
  } else {
    this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
  }

  return promise;
};
function QueueItem(promise, onFulfilled, onRejected) {
  this.promise = promise;
  if (typeof onFulfilled === 'function') {
    this.onFulfilled = onFulfilled;
    this.callFulfilled = this.otherCallFulfilled;
  }
  if (typeof onRejected === 'function') {
    this.onRejected = onRejected;
    this.callRejected = this.otherCallRejected;
  }
}
QueueItem.prototype.callFulfilled = function (value) {
  handlers.resolve(this.promise, value);
};
QueueItem.prototype.otherCallFulfilled = function (value) {
  unwrap(this.promise, this.onFulfilled, value);
};
QueueItem.prototype.callRejected = function (value) {
  handlers.reject(this.promise, value);
};
QueueItem.prototype.otherCallRejected = function (value) {
  unwrap(this.promise, this.onRejected, value);
};

function unwrap(promise, func, value) {
  immediate(function () {
    var returnValue;
    try {
      returnValue = func(value);
    } catch (e) {
      return handlers.reject(promise, e);
    }
    if (returnValue === promise) {
      handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
    } else {
      handlers.resolve(promise, returnValue);
    }
  });
}

handlers.resolve = function (self, value) {
  var result = tryCatch(getThen, value);
  if (result.status === 'error') {
    return handlers.reject(self, result.value);
  }
  var thenable = result.value;

  if (thenable) {
    safelyResolveThenable(self, thenable);
  } else {
    self.state = FULFILLED;
    self.outcome = value;
    var i = -1;
    var len = self.queue.length;
    while (++i < len) {
      self.queue[i].callFulfilled(value);
    }
  }
  return self;
};
handlers.reject = function (self, error) {
  self.state = REJECTED;
  self.outcome = error;
  var i = -1;
  var len = self.queue.length;
  while (++i < len) {
    self.queue[i].callRejected(error);
  }
  return self;
};

function getThen(obj) {
  // Make sure we only access the accessor once as required by the spec
  var then = obj && obj.then;
  if (obj && (typeof obj === 'object' || typeof obj === 'function') && typeof then === 'function') {
    return function appyThen() {
      then.apply(obj, arguments);
    };
  }
}

function safelyResolveThenable(self, thenable) {
  // Either fulfill, reject or reject with error
  var called = false;
  function onError(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.reject(self, value);
  }

  function onSuccess(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.resolve(self, value);
  }

  function tryToUnwrap() {
    thenable(onSuccess, onError);
  }

  var result = tryCatch(tryToUnwrap);
  if (result.status === 'error') {
    onError(result.value);
  }
}

function tryCatch(func, value) {
  var out = {};
  try {
    out.value = func(value);
    out.status = 'success';
  } catch (e) {
    out.status = 'error';
    out.value = e;
  }
  return out;
}

Promise.resolve = resolve;
function resolve(value) {
  if (value instanceof this) {
    return value;
  }
  return handlers.resolve(new this(INTERNAL), value);
}

Promise.reject = reject;
function reject(reason) {
  var promise = new this(INTERNAL);
  return handlers.reject(promise, reason);
}

Promise.all = all;
function all(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var values = new Array(len);
  var resolved = 0;
  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    allResolver(iterable[i], i);
  }
  return promise;
  function allResolver(value, i) {
    self.resolve(value).then(resolveFromAll, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
    function resolveFromAll(outValue) {
      values[i] = outValue;
      if (++resolved === len && !called) {
        called = true;
        handlers.resolve(promise, values);
      }
    }
  }
}

Promise.race = race;
function race(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    resolver(iterable[i]);
  }
  return promise;
  function resolver(value) {
    self.resolve(value).then(function (response) {
      if (!called) {
        called = true;
        handlers.resolve(promise, response);
      }
    }, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
  }
}

},{"1":1}],3:[function(_dereq_,module,exports){
(function (global){
'use strict';
if (typeof global.Promise !== 'function') {
  global.Promise = _dereq_(2);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"2":2}],4:[function(_dereq_,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getIDB() {
    /* global indexedDB,webkitIndexedDB,mozIndexedDB,OIndexedDB,msIndexedDB */
    try {
        if (typeof indexedDB !== 'undefined') {
            return indexedDB;
        }
        if (typeof webkitIndexedDB !== 'undefined') {
            return webkitIndexedDB;
        }
        if (typeof mozIndexedDB !== 'undefined') {
            return mozIndexedDB;
        }
        if (typeof OIndexedDB !== 'undefined') {
            return OIndexedDB;
        }
        if (typeof msIndexedDB !== 'undefined') {
            return msIndexedDB;
        }
    } catch (e) {
        return;
    }
}

var idb = getIDB();

function isIndexedDBValid() {
    try {
        // Initialize IndexedDB; fall back to vendor-prefixed versions
        // if needed.
        if (!idb) {
            return false;
        }
        // We mimic PouchDB here;
        //
        // We test for openDatabase because IE Mobile identifies itself
        // as Safari. Oh the lulz...
        var isSafari = typeof openDatabase !== 'undefined' && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);

        var hasFetch = typeof fetch === 'function' && fetch.toString().indexOf('[native code') !== -1;

        // Safari <10.1 does not meet our requirements for IDB support (#5572)
        // since Safari 10.1 shipped with fetch, we can use that to detect it
        return (!isSafari || hasFetch) && typeof indexedDB !== 'undefined' &&
        // some outdated implementations of IDB that appear on Samsung
        // and HTC Android devices <4.4 are missing IDBKeyRange
        // See: https://github.com/mozilla/localForage/issues/128
        // See: https://github.com/mozilla/localForage/issues/272
        typeof IDBKeyRange !== 'undefined';
    } catch (e) {
        return false;
    }
}

// Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor. (i.e.
// old QtWebKit versions, at least).
// Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor. (i.e.
// old QtWebKit versions, at least).
function createBlob(parts, properties) {
    /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
    parts = parts || [];
    properties = properties || {};
    try {
        return new Blob(parts, properties);
    } catch (e) {
        if (e.name !== 'TypeError') {
            throw e;
        }
        var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : WebKitBlobBuilder;
        var builder = new Builder();
        for (var i = 0; i < parts.length; i += 1) {
            builder.append(parts[i]);
        }
        return builder.getBlob(properties.type);
    }
}

// This is CommonJS because lie is an external dependency, so Rollup
// can just ignore it.
if (typeof Promise === 'undefined') {
    // In the "nopromises" build this will just throw if you don't have
    // a global promise object, but it would throw anyway later.
    _dereq_(3);
}
var Promise$1 = Promise;

function executeCallback(promise, callback) {
    if (callback) {
        promise.then(function (result) {
            callback(null, result);
        }, function (error) {
            callback(error);
        });
    }
}

function executeTwoCallbacks(promise, callback, errorCallback) {
    if (typeof callback === 'function') {
        promise.then(callback);
    }

    if (typeof errorCallback === 'function') {
        promise["catch"](errorCallback);
    }
}

function normalizeKey(key) {
    // Cast the key to a string, as that's all we can set as a key.
    if (typeof key !== 'string') {
        console.warn(key + ' used as a key, but it is not a string.');
        key = String(key);
    }

    return key;
}

function getCallback() {
    if (arguments.length && typeof arguments[arguments.length - 1] === 'function') {
        return arguments[arguments.length - 1];
    }
}

// Some code originally from async_storage.js in
// [Gaia](https://github.com/mozilla-b2g/gaia).

var DETECT_BLOB_SUPPORT_STORE = 'local-forage-detect-blob-support';
var supportsBlobs = void 0;
var dbContexts = {};
var toString = Object.prototype.toString;

// Transaction Modes
var READ_ONLY = 'readonly';
var READ_WRITE = 'readwrite';

// Transform a binary string to an array buffer, because otherwise
// weird stuff happens when you try to work with the binary string directly.
// It is known.
// From http://stackoverflow.com/questions/14967647/ (continues on next line)
// encode-decode-image-with-base64-breaks-image (2013-04-21)
function _binStringToArrayBuffer(bin) {
    var length = bin.length;
    var buf = new ArrayBuffer(length);
    var arr = new Uint8Array(buf);
    for (var i = 0; i < length; i++) {
        arr[i] = bin.charCodeAt(i);
    }
    return buf;
}

//
// Blobs are not supported in all versions of IndexedDB, notably
// Chrome <37 and Android <5. In those versions, storing a blob will throw.
//
// Various other blob bugs exist in Chrome v37-42 (inclusive).
// Detecting them is expensive and confusing to users, and Chrome 37-42
// is at very low usage worldwide, so we do a hacky userAgent check instead.
//
// content-type bug: https://code.google.com/p/chromium/issues/detail?id=408120
// 404 bug: https://code.google.com/p/chromium/issues/detail?id=447916
// FileReader bug: https://code.google.com/p/chromium/issues/detail?id=447836
//
// Code borrowed from PouchDB. See:
// https://github.com/pouchdb/pouchdb/blob/master/packages/node_modules/pouchdb-adapter-idb/src/blobSupport.js
//
function _checkBlobSupportWithoutCaching(idb) {
    return new Promise$1(function (resolve) {
        var txn = idb.transaction(DETECT_BLOB_SUPPORT_STORE, READ_WRITE);
        var blob = createBlob(['']);
        txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, 'key');

        txn.onabort = function (e) {
            // If the transaction aborts now its due to not being able to
            // write to the database, likely due to the disk being full
            e.preventDefault();
            e.stopPropagation();
            resolve(false);
        };

        txn.oncomplete = function () {
            var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
            var matchedEdge = navigator.userAgent.match(/Edge\//);
            // MS Edge pretends to be Chrome 42:
            // https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx
            resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
        };
    })["catch"](function () {
        return false; // error, so assume unsupported
    });
}

function _checkBlobSupport(idb) {
    if (typeof supportsBlobs === 'boolean') {
        return Promise$1.resolve(supportsBlobs);
    }
    return _checkBlobSupportWithoutCaching(idb).then(function (value) {
        supportsBlobs = value;
        return supportsBlobs;
    });
}

function _deferReadiness(dbInfo) {
    var dbContext = dbContexts[dbInfo.name];

    // Create a deferred object representing the current database operation.
    var deferredOperation = {};

    deferredOperation.promise = new Promise$1(function (resolve, reject) {
        deferredOperation.resolve = resolve;
        deferredOperation.reject = reject;
    });

    // Enqueue the deferred operation.
    dbContext.deferredOperations.push(deferredOperation);

    // Chain its promise to the database readiness.
    if (!dbContext.dbReady) {
        dbContext.dbReady = deferredOperation.promise;
    } else {
        dbContext.dbReady = dbContext.dbReady.then(function () {
            return deferredOperation.promise;
        });
    }
}

function _advanceReadiness(dbInfo) {
    var dbContext = dbContexts[dbInfo.name];

    // Dequeue a deferred operation.
    var deferredOperation = dbContext.deferredOperations.pop();

    // Resolve its promise (which is part of the database readiness
    // chain of promises).
    if (deferredOperation) {
        deferredOperation.resolve();
        return deferredOperation.promise;
    }
}

function _rejectReadiness(dbInfo, err) {
    var dbContext = dbContexts[dbInfo.name];

    // Dequeue a deferred operation.
    var deferredOperation = dbContext.deferredOperations.pop();

    // Reject its promise (which is part of the database readiness
    // chain of promises).
    if (deferredOperation) {
        deferredOperation.reject(err);
        return deferredOperation.promise;
    }
}

function _getConnection(dbInfo, upgradeNeeded) {
    return new Promise$1(function (resolve, reject) {
        dbContexts[dbInfo.name] = dbContexts[dbInfo.name] || createDbContext();

        if (dbInfo.db) {
            if (upgradeNeeded) {
                _deferReadiness(dbInfo);
                dbInfo.db.close();
            } else {
                return resolve(dbInfo.db);
            }
        }

        var dbArgs = [dbInfo.name];

        if (upgradeNeeded) {
            dbArgs.push(dbInfo.version);
        }

        var openreq = idb.open.apply(idb, dbArgs);

        if (upgradeNeeded) {
            openreq.onupgradeneeded = function (e) {
                var db = openreq.result;
                try {
                    db.createObjectStore(dbInfo.storeName);
                    if (e.oldVersion <= 1) {
                        // Added when support for blob shims was added
                        db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
                    }
                } catch (ex) {
                    if (ex.name === 'ConstraintError') {
                        console.warn('The database "' + dbInfo.name + '"' + ' has been upgraded from version ' + e.oldVersion + ' to version ' + e.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
                    } else {
                        throw ex;
                    }
                }
            };
        }

        openreq.onerror = function (e) {
            e.preventDefault();
            reject(openreq.error);
        };

        openreq.onsuccess = function () {
            resolve(openreq.result);
            _advanceReadiness(dbInfo);
        };
    });
}

function _getOriginalConnection(dbInfo) {
    return _getConnection(dbInfo, false);
}

function _getUpgradedConnection(dbInfo) {
    return _getConnection(dbInfo, true);
}

function _isUpgradeNeeded(dbInfo, defaultVersion) {
    if (!dbInfo.db) {
        return true;
    }

    var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
    var isDowngrade = dbInfo.version < dbInfo.db.version;
    var isUpgrade = dbInfo.version > dbInfo.db.version;

    if (isDowngrade) {
        // If the version is not the default one
        // then warn for impossible downgrade.
        if (dbInfo.version !== defaultVersion) {
            console.warn('The database "' + dbInfo.name + '"' + " can't be downgraded from version " + dbInfo.db.version + ' to version ' + dbInfo.version + '.');
        }
        // Align the versions to prevent errors.
        dbInfo.version = dbInfo.db.version;
    }

    if (isUpgrade || isNewStore) {
        // If the store is new then increment the version (if needed).
        // This will trigger an "upgradeneeded" event which is required
        // for creating a store.
        if (isNewStore) {
            var incVersion = dbInfo.db.version + 1;
            if (incVersion > dbInfo.version) {
                dbInfo.version = incVersion;
            }
        }

        return true;
    }

    return false;
}

// encode a blob for indexeddb engines that don't support blobs
function _encodeBlob(blob) {
    return new Promise$1(function (resolve, reject) {
        var reader = new FileReader();
        reader.onerror = reject;
        reader.onloadend = function (e) {
            var base64 = btoa(e.target.result || '');
            resolve({
                __local_forage_encoded_blob: true,
                data: base64,
                type: blob.type
            });
        };
        reader.readAsBinaryString(blob);
    });
}

// decode an encoded blob
function _decodeBlob(encodedBlob) {
    var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));
    return createBlob([arrayBuff], { type: encodedBlob.type });
}

// is this one of our fancy encoded blobs?
function _isEncodedBlob(value) {
    return value && value.__local_forage_encoded_blob;
}

// Specialize the default `ready()` function by making it dependent
// on the current database operations. Thus, the driver will be actually
// ready when it's been initialized (default) *and* there are no pending
// operations on the database (initiated by some other instances).
function _fullyReady(callback) {
    var self = this;

    var promise = self._initReady().then(function () {
        var dbContext = dbContexts[self._dbInfo.name];

        if (dbContext && dbContext.dbReady) {
            return dbContext.dbReady;
        }
    });

    executeTwoCallbacks(promise, callback, callback);
    return promise;
}

// Try to establish a new db connection to replace the
// current one which is broken (i.e. experiencing
// InvalidStateError while creating a transaction).
function _tryReconnect(dbInfo) {
    _deferReadiness(dbInfo);

    var dbContext = dbContexts[dbInfo.name];
    var forages = dbContext.forages;

    for (var i = 0; i < forages.length; i++) {
        var forage = forages[i];
        if (forage._dbInfo.db) {
            forage._dbInfo.db.close();
            forage._dbInfo.db = null;
        }
    }
    dbInfo.db = null;

    return _getOriginalConnection(dbInfo).then(function (db) {
        dbInfo.db = db;
        if (_isUpgradeNeeded(dbInfo)) {
            // Reopen the database for upgrading.
            return _getUpgradedConnection(dbInfo);
        }
        return db;
    }).then(function (db) {
        // store the latest db reference
        // in case the db was upgraded
        dbInfo.db = dbContext.db = db;
        for (var i = 0; i < forages.length; i++) {
            forages[i]._dbInfo.db = db;
        }
    })["catch"](function (err) {
        _rejectReadiness(dbInfo, err);
        throw err;
    });
}

// FF doesn't like Promises (micro-tasks) and IDDB store operations,
// so we have to do it with callbacks
function createTransaction(dbInfo, mode, callback, retries) {
    if (retries === undefined) {
        retries = 1;
    }

    try {
        var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
        callback(null, tx);
    } catch (err) {
        if (retries > 0 && (!dbInfo.db || err.name === 'InvalidStateError' || err.name === 'NotFoundError')) {
            return Promise$1.resolve().then(function () {
                if (!dbInfo.db || err.name === 'NotFoundError' && !dbInfo.db.objectStoreNames.contains(dbInfo.storeName) && dbInfo.version <= dbInfo.db.version) {
                    // increase the db version, to create the new ObjectStore
                    if (dbInfo.db) {
                        dbInfo.version = dbInfo.db.version + 1;
                    }
                    // Reopen the database for upgrading.
                    return _getUpgradedConnection(dbInfo);
                }
            }).then(function () {
                return _tryReconnect(dbInfo).then(function () {
                    createTransaction(dbInfo, mode, callback, retries - 1);
                });
            })["catch"](callback);
        }

        callback(err);
    }
}

function createDbContext() {
    return {
        // Running localForages sharing a database.
        forages: [],
        // Shared database.
        db: null,
        // Database readiness (promise).
        dbReady: null,
        // Deferred operations on the database.
        deferredOperations: []
    };
}

// Open the IndexedDB database (automatically creates one if one didn't
// previously exist), using any options set in the config.
function _initStorage(options) {
    var self = this;
    var dbInfo = {
        db: null
    };

    if (options) {
        for (var i in options) {
            dbInfo[i] = options[i];
        }
    }

    // Get the current context of the database;
    var dbContext = dbContexts[dbInfo.name];

    // ...or create a new context.
    if (!dbContext) {
        dbContext = createDbContext();
        // Register the new context in the global container.
        dbContexts[dbInfo.name] = dbContext;
    }

    // Register itself as a running localForage in the current context.
    dbContext.forages.push(self);

    // Replace the default `ready()` function with the specialized one.
    if (!self._initReady) {
        self._initReady = self.ready;
        self.ready = _fullyReady;
    }

    // Create an array of initialization states of the related localForages.
    var initPromises = [];

    function ignoreErrors() {
        // Don't handle errors here,
        // just makes sure related localForages aren't pending.
        return Promise$1.resolve();
    }

    for (var j = 0; j < dbContext.forages.length; j++) {
        var forage = dbContext.forages[j];
        if (forage !== self) {
            // Don't wait for itself...
            initPromises.push(forage._initReady()["catch"](ignoreErrors));
        }
    }

    // Take a snapshot of the related localForages.
    var forages = dbContext.forages.slice(0);

    // Initialize the connection process only when
    // all the related localForages aren't pending.
    return Promise$1.all(initPromises).then(function () {
        dbInfo.db = dbContext.db;
        // Get the connection or open a new one without upgrade.
        return _getOriginalConnection(dbInfo);
    }).then(function (db) {
        dbInfo.db = db;
        if (_isUpgradeNeeded(dbInfo, self._defaultConfig.version)) {
            // Reopen the database for upgrading.
            return _getUpgradedConnection(dbInfo);
        }
        return db;
    }).then(function (db) {
        dbInfo.db = dbContext.db = db;
        self._dbInfo = dbInfo;
        // Share the final connection amongst related localForages.
        for (var k = 0; k < forages.length; k++) {
            var forage = forages[k];
            if (forage !== self) {
                // Self is already up-to-date.
                forage._dbInfo.db = dbInfo.db;
                forage._dbInfo.version = dbInfo.version;
            }
        }
    });
}

function getItem(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.get(key);

                    req.onsuccess = function () {
                        var value = req.result;
                        if (value === undefined) {
                            value = null;
                        }
                        if (_isEncodedBlob(value)) {
                            value = _decodeBlob(value);
                        }
                        resolve(value);
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Iterate over all items stored in database.
function iterate(iterator, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.openCursor();
                    var iterationNumber = 1;

                    req.onsuccess = function () {
                        var cursor = req.result;

                        if (cursor) {
                            var value = cursor.value;
                            if (_isEncodedBlob(value)) {
                                value = _decodeBlob(value);
                            }
                            var result = iterator(value, cursor.key, iterationNumber++);

                            // when the iterator callback retuns any
                            // (non-`undefined`) value, then we stop
                            // the iteration immediately
                            if (result !== void 0) {
                                resolve(result);
                            } else {
                                cursor["continue"]();
                            }
                        } else {
                            resolve();
                        }
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);

    return promise;
}

function setItem(key, value, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        var dbInfo;
        self.ready().then(function () {
            dbInfo = self._dbInfo;
            if (toString.call(value) === '[object Blob]') {
                return _checkBlobSupport(dbInfo.db).then(function (blobSupport) {
                    if (blobSupport) {
                        return value;
                    }
                    return _encodeBlob(value);
                });
            }
            return value;
        }).then(function (value) {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);

                    // The reason we don't _save_ null is because IE 10 does
                    // not support saving the `null` type in IndexedDB. How
                    // ironic, given the bug below!
                    // See: https://github.com/mozilla/localForage/issues/161
                    if (value === null) {
                        value = undefined;
                    }

                    var req = store.put(value, key);

                    transaction.oncomplete = function () {
                        // Cast to undefined so the value passed to
                        // callback/promise is the same as what one would get out
                        // of `getItem()` later. This leads to some weirdness
                        // (setItem('foo', undefined) will return `null`), but
                        // it's not my fault localStorage is our baseline and that
                        // it's weird.
                        if (value === undefined) {
                            value = null;
                        }

                        resolve(value);
                    };
                    transaction.onabort = transaction.onerror = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function removeItem(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    // We use a Grunt task to make this safe for IE and some
                    // versions of Android (including those used by Cordova).
                    // Normally IE won't like `.delete()` and will insist on
                    // using `['delete']()`, but we have a build step that
                    // fixes this for us now.
                    var req = store["delete"](key);
                    transaction.oncomplete = function () {
                        resolve();
                    };

                    transaction.onerror = function () {
                        reject(req.error);
                    };

                    // The request will be also be aborted if we've exceeded our storage
                    // space.
                    transaction.onabort = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function clear(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.clear();

                    transaction.oncomplete = function () {
                        resolve();
                    };

                    transaction.onabort = transaction.onerror = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function length(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.count();

                    req.onsuccess = function () {
                        resolve(req.result);
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function key(n, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        if (n < 0) {
            resolve(null);

            return;
        }

        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var advanced = false;
                    var req = store.openCursor();

                    req.onsuccess = function () {
                        var cursor = req.result;
                        if (!cursor) {
                            // this means there weren't enough keys
                            resolve(null);

                            return;
                        }

                        if (n === 0) {
                            // We have the first key, return it if that's what they
                            // wanted.
                            resolve(cursor.key);
                        } else {
                            if (!advanced) {
                                // Otherwise, ask the cursor to skip ahead n
                                // records.
                                advanced = true;
                                cursor.advance(n);
                            } else {
                                // When we get here, we've got the nth key.
                                resolve(cursor.key);
                            }
                        }
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function keys(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.openCursor();
                    var keys = [];

                    req.onsuccess = function () {
                        var cursor = req.result;

                        if (!cursor) {
                            resolve(keys);
                            return;
                        }

                        keys.push(cursor.key);
                        cursor["continue"]();
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function dropInstance(options, callback) {
    callback = getCallback.apply(this, arguments);

    var currentConfig = this.config();
    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        var isCurrentDb = options.name === currentConfig.name && self._dbInfo.db;

        var dbPromise = isCurrentDb ? Promise$1.resolve(self._dbInfo.db) : _getOriginalConnection(options).then(function (db) {
            var dbContext = dbContexts[options.name];
            var forages = dbContext.forages;
            dbContext.db = db;
            for (var i = 0; i < forages.length; i++) {
                forages[i]._dbInfo.db = db;
            }
            return db;
        });

        if (!options.storeName) {
            promise = dbPromise.then(function (db) {
                _deferReadiness(options);

                var dbContext = dbContexts[options.name];
                var forages = dbContext.forages;

                db.close();
                for (var i = 0; i < forages.length; i++) {
                    var forage = forages[i];
                    forage._dbInfo.db = null;
                }

                var dropDBPromise = new Promise$1(function (resolve, reject) {
                    var req = idb.deleteDatabase(options.name);

                    req.onerror = req.onblocked = function (err) {
                        var db = req.result;
                        if (db) {
                            db.close();
                        }
                        reject(err);
                    };

                    req.onsuccess = function () {
                        var db = req.result;
                        if (db) {
                            db.close();
                        }
                        resolve(db);
                    };
                });

                return dropDBPromise.then(function (db) {
                    dbContext.db = db;
                    for (var i = 0; i < forages.length; i++) {
                        var _forage = forages[i];
                        _advanceReadiness(_forage._dbInfo);
                    }
                })["catch"](function (err) {
                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
                    throw err;
                });
            });
        } else {
            promise = dbPromise.then(function (db) {
                if (!db.objectStoreNames.contains(options.storeName)) {
                    return;
                }

                var newVersion = db.version + 1;

                _deferReadiness(options);

                var dbContext = dbContexts[options.name];
                var forages = dbContext.forages;

                db.close();
                for (var i = 0; i < forages.length; i++) {
                    var forage = forages[i];
                    forage._dbInfo.db = null;
                    forage._dbInfo.version = newVersion;
                }

                var dropObjectPromise = new Promise$1(function (resolve, reject) {
                    var req = idb.open(options.name, newVersion);

                    req.onerror = function (err) {
                        var db = req.result;
                        db.close();
                        reject(err);
                    };

                    req.onupgradeneeded = function () {
                        var db = req.result;
                        db.deleteObjectStore(options.storeName);
                    };

                    req.onsuccess = function () {
                        var db = req.result;
                        db.close();
                        resolve(db);
                    };
                });

                return dropObjectPromise.then(function (db) {
                    dbContext.db = db;
                    for (var j = 0; j < forages.length; j++) {
                        var _forage2 = forages[j];
                        _forage2._dbInfo.db = db;
                        _advanceReadiness(_forage2._dbInfo);
                    }
                })["catch"](function (err) {
                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
                    throw err;
                });
            });
        }
    }

    executeCallback(promise, callback);
    return promise;
}

var asyncStorage = {
    _driver: 'asyncStorage',
    _initStorage: _initStorage,
    _support: isIndexedDBValid(),
    iterate: iterate,
    getItem: getItem,
    setItem: setItem,
    removeItem: removeItem,
    clear: clear,
    length: length,
    key: key,
    keys: keys,
    dropInstance: dropInstance
};

function isWebSQLValid() {
    return typeof openDatabase === 'function';
}

// Sadly, the best way to save binary data in WebSQL/localStorage is serializing
// it to Base64, so this is how we store it to prevent very strange errors with less
// verbose ways of binary <-> string data storage.
var BASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

var BLOB_TYPE_PREFIX = '~~local_forage_type~';
var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;

var SERIALIZED_MARKER = '__lfsc__:';
var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;

// OMG the serializations!
var TYPE_ARRAYBUFFER = 'arbf';
var TYPE_BLOB = 'blob';
var TYPE_INT8ARRAY = 'si08';
var TYPE_UINT8ARRAY = 'ui08';
var TYPE_UINT8CLAMPEDARRAY = 'uic8';
var TYPE_INT16ARRAY = 'si16';
var TYPE_INT32ARRAY = 'si32';
var TYPE_UINT16ARRAY = 'ur16';
var TYPE_UINT32ARRAY = 'ui32';
var TYPE_FLOAT32ARRAY = 'fl32';
var TYPE_FLOAT64ARRAY = 'fl64';
var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;

var toString$1 = Object.prototype.toString;

function stringToBuffer(serializedString) {
    // Fill the string into a ArrayBuffer.
    var bufferLength = serializedString.length * 0.75;
    var len = serializedString.length;
    var i;
    var p = 0;
    var encoded1, encoded2, encoded3, encoded4;

    if (serializedString[serializedString.length - 1] === '=') {
        bufferLength--;
        if (serializedString[serializedString.length - 2] === '=') {
            bufferLength--;
        }
    }

    var buffer = new ArrayBuffer(bufferLength);
    var bytes = new Uint8Array(buffer);

    for (i = 0; i < len; i += 4) {
        encoded1 = BASE_CHARS.indexOf(serializedString[i]);
        encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
        encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
        encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);

        /*jslint bitwise: true */
        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return buffer;
}

// Converts a buffer to a string to store, serialized, in the backend
// storage library.
function bufferToString(buffer) {
    // base64-arraybuffer
    var bytes = new Uint8Array(buffer);
    var base64String = '';
    var i;

    for (i = 0; i < bytes.length; i += 3) {
        /*jslint bitwise: true */
        base64String += BASE_CHARS[bytes[i] >> 2];
        base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
        base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
        base64String += BASE_CHARS[bytes[i + 2] & 63];
    }

    if (bytes.length % 3 === 2) {
        base64String = base64String.substring(0, base64String.length - 1) + '=';
    } else if (bytes.length % 3 === 1) {
        base64String = base64String.substring(0, base64String.length - 2) + '==';
    }

    return base64String;
}

// Serialize a value, afterwards executing a callback (which usually
// instructs the `setItem()` callback/promise to be executed). This is how
// we store binary data with localStorage.
function serialize(value, callback) {
    var valueType = '';
    if (value) {
        valueType = toString$1.call(value);
    }

    // Cannot use `value instanceof ArrayBuffer` or such here, as these
    // checks fail when running the tests using casper.js...
    //
    // TODO: See why those tests fail and use a better solution.
    if (value && (valueType === '[object ArrayBuffer]' || value.buffer && toString$1.call(value.buffer) === '[object ArrayBuffer]')) {
        // Convert binary arrays to a string and prefix the string with
        // a special marker.
        var buffer;
        var marker = SERIALIZED_MARKER;

        if (value instanceof ArrayBuffer) {
            buffer = value;
            marker += TYPE_ARRAYBUFFER;
        } else {
            buffer = value.buffer;

            if (valueType === '[object Int8Array]') {
                marker += TYPE_INT8ARRAY;
            } else if (valueType === '[object Uint8Array]') {
                marker += TYPE_UINT8ARRAY;
            } else if (valueType === '[object Uint8ClampedArray]') {
                marker += TYPE_UINT8CLAMPEDARRAY;
            } else if (valueType === '[object Int16Array]') {
                marker += TYPE_INT16ARRAY;
            } else if (valueType === '[object Uint16Array]') {
                marker += TYPE_UINT16ARRAY;
            } else if (valueType === '[object Int32Array]') {
                marker += TYPE_INT32ARRAY;
            } else if (valueType === '[object Uint32Array]') {
                marker += TYPE_UINT32ARRAY;
            } else if (valueType === '[object Float32Array]') {
                marker += TYPE_FLOAT32ARRAY;
            } else if (valueType === '[object Float64Array]') {
                marker += TYPE_FLOAT64ARRAY;
            } else {
                callback(new Error('Failed to get type for BinaryArray'));
            }
        }

        callback(marker + bufferToString(buffer));
    } else if (valueType === '[object Blob]') {
        // Conver the blob to a binaryArray and then to a string.
        var fileReader = new FileReader();

        fileReader.onload = function () {
            // Backwards-compatible prefix for the blob type.
            var str = BLOB_TYPE_PREFIX + value.type + '~' + bufferToString(this.result);

            callback(SERIALIZED_MARKER + TYPE_BLOB + str);
        };

        fileReader.readAsArrayBuffer(value);
    } else {
        try {
            callback(JSON.stringify(value));
        } catch (e) {
            console.error("Couldn't convert value into a JSON string: ", value);

            callback(null, e);
        }
    }
}

// Deserialize data we've inserted into a value column/field. We place
// special markers into our strings to mark them as encoded; this isn't
// as nice as a meta field, but it's the only sane thing we can do whilst
// keeping localStorage support intact.
//
// Oftentimes this will just deserialize JSON content, but if we have a
// special marker (SERIALIZED_MARKER, defined above), we will extract
// some kind of arraybuffer/binary data/typed array out of the string.
function deserialize(value) {
    // If we haven't marked this string as being specially serialized (i.e.
    // something other than serialized JSON), we can just return it and be
    // done with it.
    if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
        return JSON.parse(value);
    }

    // The following code deals with deserializing some kind of Blob or
    // TypedArray. First we separate out the type of data we're dealing
    // with from the data itself.
    var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
    var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);

    var blobType;
    // Backwards-compatible blob type serialization strategy.
    // DBs created with older versions of localForage will simply not have the blob type.
    if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
        var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
        blobType = matcher[1];
        serializedString = serializedString.substring(matcher[0].length);
    }
    var buffer = stringToBuffer(serializedString);

    // Return the right type based on the code/type set during
    // serialization.
    switch (type) {
        case TYPE_ARRAYBUFFER:
            return buffer;
        case TYPE_BLOB:
            return createBlob([buffer], { type: blobType });
        case TYPE_INT8ARRAY:
            return new Int8Array(buffer);
        case TYPE_UINT8ARRAY:
            return new Uint8Array(buffer);
        case TYPE_UINT8CLAMPEDARRAY:
            return new Uint8ClampedArray(buffer);
        case TYPE_INT16ARRAY:
            return new Int16Array(buffer);
        case TYPE_UINT16ARRAY:
            return new Uint16Array(buffer);
        case TYPE_INT32ARRAY:
            return new Int32Array(buffer);
        case TYPE_UINT32ARRAY:
            return new Uint32Array(buffer);
        case TYPE_FLOAT32ARRAY:
            return new Float32Array(buffer);
        case TYPE_FLOAT64ARRAY:
            return new Float64Array(buffer);
        default:
            throw new Error('Unkown type: ' + type);
    }
}

var localforageSerializer = {
    serialize: serialize,
    deserialize: deserialize,
    stringToBuffer: stringToBuffer,
    bufferToString: bufferToString
};

/*
 * Includes code from:
 *
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */

function createDbTable(t, dbInfo, callback, errorCallback) {
    t.executeSql('CREATE TABLE IF NOT EXISTS ' + dbInfo.storeName + ' ' + '(id INTEGER PRIMARY KEY, key unique, value)', [], callback, errorCallback);
}

// Open the WebSQL database (automatically creates one if one didn't
// previously exist), using any options set in the config.
function _initStorage$1(options) {
    var self = this;
    var dbInfo = {
        db: null
    };

    if (options) {
        for (var i in options) {
            dbInfo[i] = typeof options[i] !== 'string' ? options[i].toString() : options[i];
        }
    }

    var dbInfoPromise = new Promise$1(function (resolve, reject) {
        // Open the database; the openDatabase API will automatically
        // create it for us if it doesn't exist.
        try {
            dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
        } catch (e) {
            return reject(e);
        }

        // Create our key/value table if it doesn't exist.
        dbInfo.db.transaction(function (t) {
            createDbTable(t, dbInfo, function () {
                self._dbInfo = dbInfo;
                resolve();
            }, function (t, error) {
                reject(error);
            });
        }, reject);
    });

    dbInfo.serializer = localforageSerializer;
    return dbInfoPromise;
}

function tryExecuteSql(t, dbInfo, sqlStatement, args, callback, errorCallback) {
    t.executeSql(sqlStatement, args, callback, function (t, error) {
        if (error.code === error.SYNTAX_ERR) {
            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name = ?", [dbInfo.storeName], function (t, results) {
                if (!results.rows.length) {
                    // if the table is missing (was deleted)
                    // re-create it table and retry
                    createDbTable(t, dbInfo, function () {
                        t.executeSql(sqlStatement, args, callback, errorCallback);
                    }, errorCallback);
                } else {
                    errorCallback(t, error);
                }
            }, errorCallback);
        } else {
            errorCallback(t, error);
        }
    }, errorCallback);
}

function getItem$1(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName + ' WHERE key = ? LIMIT 1', [key], function (t, results) {
                    var result = results.rows.length ? results.rows.item(0).value : null;

                    // Check to see if this is serialized content we need to
                    // unpack.
                    if (result) {
                        result = dbInfo.serializer.deserialize(result);
                    }

                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function iterate$1(iterator, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;

            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName, [], function (t, results) {
                    var rows = results.rows;
                    var length = rows.length;

                    for (var i = 0; i < length; i++) {
                        var item = rows.item(i);
                        var result = item.value;

                        // Check to see if this is serialized content
                        // we need to unpack.
                        if (result) {
                            result = dbInfo.serializer.deserialize(result);
                        }

                        result = iterator(result, item.key, i + 1);

                        // void(0) prevents problems with redefinition
                        // of `undefined`.
                        if (result !== void 0) {
                            resolve(result);
                            return;
                        }
                    }

                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function _setItem(key, value, callback, retriesLeft) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            // The localStorage API doesn't return undefined values in an
            // "expected" way, so undefined is always cast to null in all
            // drivers. See: https://github.com/mozilla/localForage/pull/42
            if (value === undefined) {
                value = null;
            }

            // Save the original value to pass to the callback.
            var originalValue = value;

            var dbInfo = self._dbInfo;
            dbInfo.serializer.serialize(value, function (value, error) {
                if (error) {
                    reject(error);
                } else {
                    dbInfo.db.transaction(function (t) {
                        tryExecuteSql(t, dbInfo, 'INSERT OR REPLACE INTO ' + dbInfo.storeName + ' ' + '(key, value) VALUES (?, ?)', [key, value], function () {
                            resolve(originalValue);
                        }, function (t, error) {
                            reject(error);
                        });
                    }, function (sqlError) {
                        // The transaction failed; check
                        // to see if it's a quota error.
                        if (sqlError.code === sqlError.QUOTA_ERR) {
                            // We reject the callback outright for now, but
                            // it's worth trying to re-run the transaction.
                            // Even if the user accepts the prompt to use
                            // more storage on Safari, this error will
                            // be called.
                            //
                            // Try to re-run the transaction.
                            if (retriesLeft > 0) {
                                resolve(_setItem.apply(self, [key, originalValue, callback, retriesLeft - 1]));
                                return;
                            }
                            reject(sqlError);
                        }
                    });
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function setItem$1(key, value, callback) {
    return _setItem.apply(this, [key, value, callback, 1]);
}

function removeItem$1(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName + ' WHERE key = ?', [key], function () {
                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Deletes every item in the table.
// TODO: Find out if this resets the AUTO_INCREMENT number.
function clear$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName, [], function () {
                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Does a simple `COUNT(key)` to get the number of items stored in
// localForage.
function length$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                // Ahhh, SQL makes this one soooooo easy.
                tryExecuteSql(t, dbInfo, 'SELECT COUNT(key) as c FROM ' + dbInfo.storeName, [], function (t, results) {
                    var result = results.rows.item(0).c;
                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Return the key located at key index X; essentially gets the key from a
// `WHERE id = ?`. This is the most efficient way I can think to implement
// this rarely-used (in my experience) part of the API, but it can seem
// inconsistent, because we do `INSERT OR REPLACE INTO` on `setItem()`, so
// the ID of each key will change every time it's updated. Perhaps a stored
// procedure for the `setItem()` SQL would solve this problem?
// TODO: Don't change ID on `setItem()`.
function key$1(n, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName + ' WHERE id = ? LIMIT 1', [n + 1], function (t, results) {
                    var result = results.rows.length ? results.rows.item(0).key : null;
                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function keys$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName, [], function (t, results) {
                    var keys = [];

                    for (var i = 0; i < results.rows.length; i++) {
                        keys.push(results.rows.item(i).key);
                    }

                    resolve(keys);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// https://www.w3.org/TR/webdatabase/#databases
// > There is no way to enumerate or delete the databases available for an origin from this API.
function getAllStoreNames(db) {
    return new Promise$1(function (resolve, reject) {
        db.transaction(function (t) {
            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function (t, results) {
                var storeNames = [];

                for (var i = 0; i < results.rows.length; i++) {
                    storeNames.push(results.rows.item(i).name);
                }

                resolve({
                    db: db,
                    storeNames: storeNames
                });
            }, function (t, error) {
                reject(error);
            });
        }, function (sqlError) {
            reject(sqlError);
        });
    });
}

function dropInstance$1(options, callback) {
    callback = getCallback.apply(this, arguments);

    var currentConfig = this.config();
    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        promise = new Promise$1(function (resolve) {
            var db;
            if (options.name === currentConfig.name) {
                // use the db reference of the current instance
                db = self._dbInfo.db;
            } else {
                db = openDatabase(options.name, '', '', 0);
            }

            if (!options.storeName) {
                // drop all database tables
                resolve(getAllStoreNames(db));
            } else {
                resolve({
                    db: db,
                    storeNames: [options.storeName]
                });
            }
        }).then(function (operationInfo) {
            return new Promise$1(function (resolve, reject) {
                operationInfo.db.transaction(function (t) {
                    function dropTable(storeName) {
                        return new Promise$1(function (resolve, reject) {
                            t.executeSql('DROP TABLE IF EXISTS ' + storeName, [], function () {
                                resolve();
                            }, function (t, error) {
                                reject(error);
                            });
                        });
                    }

                    var operations = [];
                    for (var i = 0, len = operationInfo.storeNames.length; i < len; i++) {
                        operations.push(dropTable(operationInfo.storeNames[i]));
                    }

                    Promise$1.all(operations).then(function () {
                        resolve();
                    })["catch"](function (e) {
                        reject(e);
                    });
                }, function (sqlError) {
                    reject(sqlError);
                });
            });
        });
    }

    executeCallback(promise, callback);
    return promise;
}

var webSQLStorage = {
    _driver: 'webSQLStorage',
    _initStorage: _initStorage$1,
    _support: isWebSQLValid(),
    iterate: iterate$1,
    getItem: getItem$1,
    setItem: setItem$1,
    removeItem: removeItem$1,
    clear: clear$1,
    length: length$1,
    key: key$1,
    keys: keys$1,
    dropInstance: dropInstance$1
};

function isLocalStorageValid() {
    try {
        return typeof localStorage !== 'undefined' && 'setItem' in localStorage &&
        // in IE8 typeof localStorage.setItem === 'object'
        !!localStorage.setItem;
    } catch (e) {
        return false;
    }
}

function _getKeyPrefix(options, defaultConfig) {
    var keyPrefix = options.name + '/';

    if (options.storeName !== defaultConfig.storeName) {
        keyPrefix += options.storeName + '/';
    }
    return keyPrefix;
}

// Check if localStorage throws when saving an item
function checkIfLocalStorageThrows() {
    var localStorageTestKey = '_localforage_support_test';

    try {
        localStorage.setItem(localStorageTestKey, true);
        localStorage.removeItem(localStorageTestKey);

        return false;
    } catch (e) {
        return true;
    }
}

// Check if localStorage is usable and allows to save an item
// This method checks if localStorage is usable in Safari Private Browsing
// mode, or in any other case where the available quota for localStorage
// is 0 and there wasn't any saved items yet.
function _isLocalStorageUsable() {
    return !checkIfLocalStorageThrows() || localStorage.length > 0;
}

// Config the localStorage backend, using options set in the config.
function _initStorage$2(options) {
    var self = this;
    var dbInfo = {};
    if (options) {
        for (var i in options) {
            dbInfo[i] = options[i];
        }
    }

    dbInfo.keyPrefix = _getKeyPrefix(options, self._defaultConfig);

    if (!_isLocalStorageUsable()) {
        return Promise$1.reject();
    }

    self._dbInfo = dbInfo;
    dbInfo.serializer = localforageSerializer;

    return Promise$1.resolve();
}

// Remove all keys from the datastore, effectively destroying all data in
// the app's key/value store!
function clear$2(callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var keyPrefix = self._dbInfo.keyPrefix;

        for (var i = localStorage.length - 1; i >= 0; i--) {
            var key = localStorage.key(i);

            if (key.indexOf(keyPrefix) === 0) {
                localStorage.removeItem(key);
            }
        }
    });

    executeCallback(promise, callback);
    return promise;
}

// Retrieve an item from the store. Unlike the original async_storage
// library in Gaia, we don't modify return values at all. If a key's value
// is `undefined`, we pass that value to the callback function.
function getItem$2(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var result = localStorage.getItem(dbInfo.keyPrefix + key);

        // If a result was found, parse it from the serialized
        // string into a JS object. If result isn't truthy, the key
        // is likely undefined and we'll pass it straight to the
        // callback.
        if (result) {
            result = dbInfo.serializer.deserialize(result);
        }

        return result;
    });

    executeCallback(promise, callback);
    return promise;
}

// Iterate over all items in the store.
function iterate$2(iterator, callback) {
    var self = this;

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var keyPrefix = dbInfo.keyPrefix;
        var keyPrefixLength = keyPrefix.length;
        var length = localStorage.length;

        // We use a dedicated iterator instead of the `i` variable below
        // so other keys we fetch in localStorage aren't counted in
        // the `iterationNumber` argument passed to the `iterate()`
        // callback.
        //
        // See: github.com/mozilla/localForage/pull/435#discussion_r38061530
        var iterationNumber = 1;

        for (var i = 0; i < length; i++) {
            var key = localStorage.key(i);
            if (key.indexOf(keyPrefix) !== 0) {
                continue;
            }
            var value = localStorage.getItem(key);

            // If a result was found, parse it from the serialized
            // string into a JS object. If result isn't truthy, the
            // key is likely undefined and we'll pass it straight
            // to the iterator.
            if (value) {
                value = dbInfo.serializer.deserialize(value);
            }

            value = iterator(value, key.substring(keyPrefixLength), iterationNumber++);

            if (value !== void 0) {
                return value;
            }
        }
    });

    executeCallback(promise, callback);
    return promise;
}

// Same as localStorage's key() method, except takes a callback.
function key$2(n, callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var result;
        try {
            result = localStorage.key(n);
        } catch (error) {
            result = null;
        }

        // Remove the prefix from the key, if a key is found.
        if (result) {
            result = result.substring(dbInfo.keyPrefix.length);
        }

        return result;
    });

    executeCallback(promise, callback);
    return promise;
}

function keys$2(callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var length = localStorage.length;
        var keys = [];

        for (var i = 0; i < length; i++) {
            var itemKey = localStorage.key(i);
            if (itemKey.indexOf(dbInfo.keyPrefix) === 0) {
                keys.push(itemKey.substring(dbInfo.keyPrefix.length));
            }
        }

        return keys;
    });

    executeCallback(promise, callback);
    return promise;
}

// Supply the number of keys in the datastore to the callback function.
function length$2(callback) {
    var self = this;
    var promise = self.keys().then(function (keys) {
        return keys.length;
    });

    executeCallback(promise, callback);
    return promise;
}

// Remove an item from the store, nice and simple.
function removeItem$2(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        localStorage.removeItem(dbInfo.keyPrefix + key);
    });

    executeCallback(promise, callback);
    return promise;
}

// Set a key's value and run an optional callback once the value is set.
// Unlike Gaia's implementation, the callback function is passed the value,
// in case you want to operate on that value only after you're sure it
// saved, or something like that.
function setItem$2(key, value, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        // Convert undefined values to null.
        // https://github.com/mozilla/localForage/pull/42
        if (value === undefined) {
            value = null;
        }

        // Save the original value to pass to the callback.
        var originalValue = value;

        return new Promise$1(function (resolve, reject) {
            var dbInfo = self._dbInfo;
            dbInfo.serializer.serialize(value, function (value, error) {
                if (error) {
                    reject(error);
                } else {
                    try {
                        localStorage.setItem(dbInfo.keyPrefix + key, value);
                        resolve(originalValue);
                    } catch (e) {
                        // localStorage capacity exceeded.
                        // TODO: Make this a specific error/event.
                        if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                            reject(e);
                        }
                        reject(e);
                    }
                }
            });
        });
    });

    executeCallback(promise, callback);
    return promise;
}

function dropInstance$2(options, callback) {
    callback = getCallback.apply(this, arguments);

    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        var currentConfig = this.config();
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        promise = new Promise$1(function (resolve) {
            if (!options.storeName) {
                resolve(options.name + '/');
            } else {
                resolve(_getKeyPrefix(options, self._defaultConfig));
            }
        }).then(function (keyPrefix) {
            for (var i = localStorage.length - 1; i >= 0; i--) {
                var key = localStorage.key(i);

                if (key.indexOf(keyPrefix) === 0) {
                    localStorage.removeItem(key);
                }
            }
        });
    }

    executeCallback(promise, callback);
    return promise;
}

var localStorageWrapper = {
    _driver: 'localStorageWrapper',
    _initStorage: _initStorage$2,
    _support: isLocalStorageValid(),
    iterate: iterate$2,
    getItem: getItem$2,
    setItem: setItem$2,
    removeItem: removeItem$2,
    clear: clear$2,
    length: length$2,
    key: key$2,
    keys: keys$2,
    dropInstance: dropInstance$2
};

var sameValue = function sameValue(x, y) {
    return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
};

var includes = function includes(array, searchElement) {
    var len = array.length;
    var i = 0;
    while (i < len) {
        if (sameValue(array[i], searchElement)) {
            return true;
        }
        i++;
    }

    return false;
};

var isArray = Array.isArray || function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
};

// Drivers are stored here when `defineDriver()` is called.
// They are shared across all instances of localForage.
var DefinedDrivers = {};

var DriverSupport = {};

var DefaultDrivers = {
    INDEXEDDB: asyncStorage,
    WEBSQL: webSQLStorage,
    LOCALSTORAGE: localStorageWrapper
};

var DefaultDriverOrder = [DefaultDrivers.INDEXEDDB._driver, DefaultDrivers.WEBSQL._driver, DefaultDrivers.LOCALSTORAGE._driver];

var OptionalDriverMethods = ['dropInstance'];

var LibraryMethods = ['clear', 'getItem', 'iterate', 'key', 'keys', 'length', 'removeItem', 'setItem'].concat(OptionalDriverMethods);

var DefaultConfig = {
    description: '',
    driver: DefaultDriverOrder.slice(),
    name: 'localforage',
    // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
    // we can use without a prompt.
    size: 4980736,
    storeName: 'keyvaluepairs',
    version: 1.0
};

function callWhenReady(localForageInstance, libraryMethod) {
    localForageInstance[libraryMethod] = function () {
        var _args = arguments;
        return localForageInstance.ready().then(function () {
            return localForageInstance[libraryMethod].apply(localForageInstance, _args);
        });
    };
}

function extend() {
    for (var i = 1; i < arguments.length; i++) {
        var arg = arguments[i];

        if (arg) {
            for (var _key in arg) {
                if (arg.hasOwnProperty(_key)) {
                    if (isArray(arg[_key])) {
                        arguments[0][_key] = arg[_key].slice();
                    } else {
                        arguments[0][_key] = arg[_key];
                    }
                }
            }
        }
    }

    return arguments[0];
}

var LocalForage = function () {
    function LocalForage(options) {
        _classCallCheck(this, LocalForage);

        for (var driverTypeKey in DefaultDrivers) {
            if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
                var driver = DefaultDrivers[driverTypeKey];
                var driverName = driver._driver;
                this[driverTypeKey] = driverName;

                if (!DefinedDrivers[driverName]) {
                    // we don't need to wait for the promise,
                    // since the default drivers can be defined
                    // in a blocking manner
                    this.defineDriver(driver);
                }
            }
        }

        this._defaultConfig = extend({}, DefaultConfig);
        this._config = extend({}, this._defaultConfig, options);
        this._driverSet = null;
        this._initDriver = null;
        this._ready = false;
        this._dbInfo = null;

        this._wrapLibraryMethodsWithReady();
        this.setDriver(this._config.driver)["catch"](function () {});
    }

    // Set any config values for localForage; can be called anytime before
    // the first API call (e.g. `getItem`, `setItem`).
    // We loop through options so we don't overwrite existing config
    // values.


    LocalForage.prototype.config = function config(options) {
        // If the options argument is an object, we use it to set values.
        // Otherwise, we return either a specified config value or all
        // config values.
        if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
            // If localforage is ready and fully initialized, we can't set
            // any new configuration values. Instead, we return an error.
            if (this._ready) {
                return new Error("Can't call config() after localforage " + 'has been used.');
            }

            for (var i in options) {
                if (i === 'storeName') {
                    options[i] = options[i].replace(/\W/g, '_');
                }

                if (i === 'version' && typeof options[i] !== 'number') {
                    return new Error('Database version must be a number.');
                }

                this._config[i] = options[i];
            }

            // after all config options are set and
            // the driver option is used, try setting it
            if ('driver' in options && options.driver) {
                return this.setDriver(this._config.driver);
            }

            return true;
        } else if (typeof options === 'string') {
            return this._config[options];
        } else {
            return this._config;
        }
    };

    // Used to define a custom driver, shared across all instances of
    // localForage.


    LocalForage.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {
        var promise = new Promise$1(function (resolve, reject) {
            try {
                var driverName = driverObject._driver;
                var complianceError = new Error('Custom driver not compliant; see ' + 'https://mozilla.github.io/localForage/#definedriver');

                // A driver name should be defined and not overlap with the
                // library-defined, default drivers.
                if (!driverObject._driver) {
                    reject(complianceError);
                    return;
                }

                var driverMethods = LibraryMethods.concat('_initStorage');
                for (var i = 0, len = driverMethods.length; i < len; i++) {
                    var driverMethodName = driverMethods[i];

                    // when the property is there,
                    // it should be a method even when optional
                    var isRequired = !includes(OptionalDriverMethods, driverMethodName);
                    if ((isRequired || driverObject[driverMethodName]) && typeof driverObject[driverMethodName] !== 'function') {
                        reject(complianceError);
                        return;
                    }
                }

                var configureMissingMethods = function configureMissingMethods() {
                    var methodNotImplementedFactory = function methodNotImplementedFactory(methodName) {
                        return function () {
                            var error = new Error('Method ' + methodName + ' is not implemented by the current driver');
                            var promise = Promise$1.reject(error);
                            executeCallback(promise, arguments[arguments.length - 1]);
                            return promise;
                        };
                    };

                    for (var _i = 0, _len = OptionalDriverMethods.length; _i < _len; _i++) {
                        var optionalDriverMethod = OptionalDriverMethods[_i];
                        if (!driverObject[optionalDriverMethod]) {
                            driverObject[optionalDriverMethod] = methodNotImplementedFactory(optionalDriverMethod);
                        }
                    }
                };

                configureMissingMethods();

                var setDriverSupport = function setDriverSupport(support) {
                    if (DefinedDrivers[driverName]) {
                        console.info('Redefining LocalForage driver: ' + driverName);
                    }
                    DefinedDrivers[driverName] = driverObject;
                    DriverSupport[driverName] = support;
                    // don't use a then, so that we can define
                    // drivers that have simple _support methods
                    // in a blocking manner
                    resolve();
                };

                if ('_support' in driverObject) {
                    if (driverObject._support && typeof driverObject._support === 'function') {
                        driverObject._support().then(setDriverSupport, reject);
                    } else {
                        setDriverSupport(!!driverObject._support);
                    }
                } else {
                    setDriverSupport(true);
                }
            } catch (e) {
                reject(e);
            }
        });

        executeTwoCallbacks(promise, callback, errorCallback);
        return promise;
    };

    LocalForage.prototype.driver = function driver() {
        return this._driver || null;
    };

    LocalForage.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {
        var getDriverPromise = DefinedDrivers[driverName] ? Promise$1.resolve(DefinedDrivers[driverName]) : Promise$1.reject(new Error('Driver not found.'));

        executeTwoCallbacks(getDriverPromise, callback, errorCallback);
        return getDriverPromise;
    };

    LocalForage.prototype.getSerializer = function getSerializer(callback) {
        var serializerPromise = Promise$1.resolve(localforageSerializer);
        executeTwoCallbacks(serializerPromise, callback);
        return serializerPromise;
    };

    LocalForage.prototype.ready = function ready(callback) {
        var self = this;

        var promise = self._driverSet.then(function () {
            if (self._ready === null) {
                self._ready = self._initDriver();
            }

            return self._ready;
        });

        executeTwoCallbacks(promise, callback, callback);
        return promise;
    };

    LocalForage.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {
        var self = this;

        if (!isArray(drivers)) {
            drivers = [drivers];
        }

        var supportedDrivers = this._getSupportedDrivers(drivers);

        function setDriverToConfig() {
            self._config.driver = self.driver();
        }

        function extendSelfWithDriver(driver) {
            self._extend(driver);
            setDriverToConfig();

            self._ready = self._initStorage(self._config);
            return self._ready;
        }

        function initDriver(supportedDrivers) {
            return function () {
                var currentDriverIndex = 0;

                function driverPromiseLoop() {
                    while (currentDriverIndex < supportedDrivers.length) {
                        var driverName = supportedDrivers[currentDriverIndex];
                        currentDriverIndex++;

                        self._dbInfo = null;
                        self._ready = null;

                        return self.getDriver(driverName).then(extendSelfWithDriver)["catch"](driverPromiseLoop);
                    }

                    setDriverToConfig();
                    var error = new Error('No available storage method found.');
                    self._driverSet = Promise$1.reject(error);
                    return self._driverSet;
                }

                return driverPromiseLoop();
            };
        }

        // There might be a driver initialization in progress
        // so wait for it to finish in order to avoid a possible
        // race condition to set _dbInfo
        var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function () {
            return Promise$1.resolve();
        }) : Promise$1.resolve();

        this._driverSet = oldDriverSetDone.then(function () {
            var driverName = supportedDrivers[0];
            self._dbInfo = null;
            self._ready = null;

            return self.getDriver(driverName).then(function (driver) {
                self._driver = driver._driver;
                setDriverToConfig();
                self._wrapLibraryMethodsWithReady();
                self._initDriver = initDriver(supportedDrivers);
            });
        })["catch"](function () {
            setDriverToConfig();
            var error = new Error('No available storage method found.');
            self._driverSet = Promise$1.reject(error);
            return self._driverSet;
        });

        executeTwoCallbacks(this._driverSet, callback, errorCallback);
        return this._driverSet;
    };

    LocalForage.prototype.supports = function supports(driverName) {
        return !!DriverSupport[driverName];
    };

    LocalForage.prototype._extend = function _extend(libraryMethodsAndProperties) {
        extend(this, libraryMethodsAndProperties);
    };

    LocalForage.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {
        var supportedDrivers = [];
        for (var i = 0, len = drivers.length; i < len; i++) {
            var driverName = drivers[i];
            if (this.supports(driverName)) {
                supportedDrivers.push(driverName);
            }
        }
        return supportedDrivers;
    };

    LocalForage.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {
        // Add a stub for each driver API method that delays the call to the
        // corresponding driver method until localForage is ready. These stubs
        // will be replaced by the driver methods as soon as the driver is
        // loaded, so there is no performance impact.
        for (var i = 0, len = LibraryMethods.length; i < len; i++) {
            callWhenReady(this, LibraryMethods[i]);
        }
    };

    LocalForage.prototype.createInstance = function createInstance(options) {
        return new LocalForage(options);
    };

    return LocalForage;
}();

// The actual localForage object that we expose as a module or via a
// global. It's extended by pulling in one of our other libraries.


var localforage_js = new LocalForage();

module.exports = localforage_js;

},{"3":3}]},{},[4])(4)
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../usr/local/lib/node_modules/webpack/buildin/global.js */ "../../../../../../usr/local/lib/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash-es/_Symbol.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_Symbol.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");


/** Built-in value references. */
var Symbol = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Symbol;

/* harmony default export */ __webpack_exports__["default"] = (Symbol);


/***/ }),

/***/ "./node_modules/lodash-es/_baseGetTag.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseGetTag.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");
/* harmony import */ var _getRawTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getRawTag.js */ "./node_modules/lodash-es/_getRawTag.js");
/* harmony import */ var _objectToString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_objectToString.js */ "./node_modules/lodash-es/_objectToString.js");




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? Object(_getRawTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)
    : Object(_objectToString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
}

/* harmony default export */ __webpack_exports__["default"] = (baseGetTag);


/***/ }),

/***/ "./node_modules/lodash-es/_freeGlobal.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_freeGlobal.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["default"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../usr/local/lib/node_modules/webpack/buildin/global.js */ "../../../../../../usr/local/lib/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash-es/_getPrototype.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_getPrototype.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _overArg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_overArg.js */ "./node_modules/lodash-es/_overArg.js");


/** Built-in value references. */
var getPrototype = Object(_overArg_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["default"] = (getPrototype);


/***/ }),

/***/ "./node_modules/lodash-es/_getRawTag.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_getRawTag.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (getRawTag);


/***/ }),

/***/ "./node_modules/lodash-es/_objectToString.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_objectToString.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["default"] = (objectToString);


/***/ }),

/***/ "./node_modules/lodash-es/_overArg.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_overArg.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["default"] = (overArg);


/***/ }),

/***/ "./node_modules/lodash-es/_root.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/_root.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ "./node_modules/lodash-es/_freeGlobal.js");


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["default"] = (root);


/***/ }),

/***/ "./node_modules/lodash-es/isObjectLike.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/isObjectLike.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["default"] = (isObjectLike);


/***/ }),

/***/ "./node_modules/lodash-es/isPlainObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/isPlainObject.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getPrototype.js */ "./node_modules/lodash-es/_getPrototype.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) || Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) != objectTag) {
    return false;
  }
  var proto = Object(_getPrototype_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["default"] = (isPlainObject);


/***/ }),

/***/ "./node_modules/redux/es/applyMiddleware.js":
/*!**************************************************!*\
  !*** ./node_modules/redux/es/applyMiddleware.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return applyMiddleware; });
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compose */ "./node_modules/redux/es/compose.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = _compose__WEBPACK_IMPORTED_MODULE_0__["default"].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),

/***/ "./node_modules/redux/es/bindActionCreators.js":
/*!*****************************************************!*\
  !*** ./node_modules/redux/es/bindActionCreators.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bindActionCreators; });
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),

/***/ "./node_modules/redux/es/combineReducers.js":
/*!**************************************************!*\
  !*** ./node_modules/redux/es/combineReducers.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return combineReducers; });
/* harmony import */ var _createStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createStore */ "./node_modules/redux/es/createStore.js");
/* harmony import */ var lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es/isPlainObject */ "./node_modules/lodash-es/isPlainObject.js");
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/warning */ "./node_modules/redux/es/utils/warning.js");




function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === _createStore__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!Object(lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_1__["default"])(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: _createStore__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (false) {}

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

/***/ }),

/***/ "./node_modules/redux/es/compose.js":
/*!******************************************!*\
  !*** ./node_modules/redux/es/compose.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return compose; });
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/***/ }),

/***/ "./node_modules/redux/es/createStore.js":
/*!**********************************************!*\
  !*** ./node_modules/redux/es/createStore.js ***!
  \**********************************************/
/*! exports provided: ActionTypes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createStore; });
/* harmony import */ var lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es/isPlainObject */ "./node_modules/lodash-es/isPlainObject.js");
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");



/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!Object(lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_1__["default"]] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_1__["default"]] = observable, _ref2;
}

/***/ }),

/***/ "./node_modules/redux/es/index.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/index.js ***!
  \****************************************/
/*! exports provided: createStore, combineReducers, bindActionCreators, applyMiddleware, compose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createStore */ "./node_modules/redux/es/createStore.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return _createStore__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _combineReducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./combineReducers */ "./node_modules/redux/es/combineReducers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return _combineReducers__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _bindActionCreators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bindActionCreators */ "./node_modules/redux/es/bindActionCreators.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return _bindActionCreators__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _applyMiddleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./applyMiddleware */ "./node_modules/redux/es/applyMiddleware.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return _applyMiddleware__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compose */ "./node_modules/redux/es/compose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _compose__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/warning */ "./node_modules/redux/es/utils/warning.js");







/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (false) {}



/***/ }),

/***/ "./node_modules/redux/es/utils/warning.js":
/*!************************************************!*\
  !*** ./node_modules/redux/es/utils/warning.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return warning; });
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/symbol-observable/es/ponyfill.js");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../usr/local/lib/node_modules/webpack/buildin/global.js */ "../../../../../../usr/local/lib/node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../../../../../../../usr/local/lib/node_modules/webpack/buildin/harmony-module.js */ "../../../../../../usr/local/lib/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGNvbW1vbnRpbWVsdGQvaW5maW5pdHktZnJhbWV3b3JrL2luZGV4LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AY29tbW9udGltZWx0ZC9pbmZpbml0eS1mcmFtZXdvcmsvc3JjL2NsaWVudC9jbGllbnRNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AY29tbW9udGltZWx0ZC9pbmZpbml0eS1mcmFtZXdvcmsvc3JjL2NsaWVudC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGNvbW1vbnRpbWVsdGQvaW5maW5pdHktZnJhbWV3b3JrL3NyYy9jbGllbnQvbG9nZ2VyL2xvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGNvbW1vbnRpbWVsdGQvaW5maW5pdHktZnJhbWV3b3JrL3NyYy9jbGllbnQvcmVkdXgvcmVkdXgudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bjb21tb250aW1lbHRkL2luZmluaXR5LWZyYW1ld29yay9zcmMvY2xpZW50L3JlZHV4L3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AY29tbW9udGltZWx0ZC9pbmZpbml0eS1mcmFtZXdvcmsvc3JjL2NsaWVudC9yZXN0LWNsaWVudC9yZXN0LWNsaWVudC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGNvbW1vbnRpbWVsdGQvaW5maW5pdHktZnJhbWV3b3JrL3NyYy9jbGllbnQvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGNvbW1vbnRpbWVsdGQvaW5maW5pdHktZnJhbWV3b3JrL3NyYy9jbGllbnQvc2xpZGVSZXZlYWwudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bjb21tb250aW1lbHRkL2luZmluaXR5LWZyYW1ld29yay9zcmMvY2xpZW50L3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AY29tbW9udGltZWx0ZC9pbmZpbml0eS1mcmFtZXdvcmsvc3JjL2NsaWVudC93ZWJzb2NrZXRzL3dzLWNsaWVudC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGNvbW1vbnRpbWVsdGQvaW5maW5pdHktZnJhbWV3b3JrL3NyYy9jb21wb25lbnRzL2Jhc2UvQmFzZUxpdENvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGNvbW1vbnRpbWVsdGQvaW5maW5pdHktZnJhbWV3b3JrL3NyYy9jb21wb25lbnRzL2Jhc2UvQmFzZUxpdFdpdGhMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bjb21tb250aW1lbHRkL2luZmluaXR5LWZyYW1ld29yay9zcmMvY29tcG9uZW50cy9iYXNlL2RlY29yYXRvcnMvY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AY29tbW9udGltZWx0ZC9pbmZpbml0eS1mcmFtZXdvcmsvc3JjL2NvbXBvbmVudHMvYmFzZS9kZWNvcmF0b3JzL2luZGV4LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AY29tbW9udGltZWx0ZC9pbmZpbml0eS1mcmFtZXdvcmsvc3JjL2NvbXBvbmVudHMvYmFzZS9kZWNvcmF0b3JzL3Byb3AudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bjb21tb250aW1lbHRkL2luZmluaXR5LWZyYW1ld29yay9zcmMvY29tcG9uZW50cy9iYXNlL2luZGV4LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AY29tbW9udGltZWx0ZC9pbmZpbml0eS1mcmFtZXdvcmsvc3JjL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bjb21tb250aW1lbHRkL2luZmluaXR5LWZyYW1ld29yay9zcmMvZXZlbnRzL2V2ZW50LWFyZ3MvZXZlbnQtYXJncy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGNvbW1vbnRpbWVsdGQvaW5maW5pdHktZnJhbWV3b3JrL3NyYy9ldmVudHMvZXZlbnQtYXJncy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGNvbW1vbnRpbWVsdGQvaW5maW5pdHktZnJhbWV3b3JrL3NyYy9ldmVudHMvZXZlbnQtYXJncy93cy1ldmVudC1hcmdzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AY29tbW9udGltZWx0ZC9pbmZpbml0eS1mcmFtZXdvcmsvc3JjL2V2ZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGNvbW1vbnRpbWVsdGQvaW5maW5pdHktZnJhbWV3b3JrL3NyYy9oYW5kbGVycy9iYXNlLWhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bjb21tb250aW1lbHRkL2luZmluaXR5LWZyYW1ld29yay9zcmMvaGFuZGxlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bjb21tb250aW1lbHRkL2luZmluaXR5LWZyYW1ld29yay9zcmMvbW9kZWxzL2VudW1zLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AY29tbW9udGltZWx0ZC9pbmZpbml0eS1mcmFtZXdvcmsvc3JjL21vZGVscy9pY29uLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AY29tbW9udGltZWx0ZC9pbmZpbml0eS1mcmFtZXdvcmsvc3JjL21vZGVscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGNvbW1vbnRpbWVsdGQvaW5maW5pdHktZnJhbWV3b3JrL3NyYy9zdG9yZS9zdG9yZS50cyIsIndlYnBhY2s6Ly8vc3JjL2xpdC1lbGVtZW50LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wb2x5bWVyL2xpYi9taXhpbnMvcHJvcGVydGllcy1jaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wb2x5bWVyL2xpYi9taXhpbnMvcHJvcGVydGllcy1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvYXN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2Nhc2UtbWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9saWIvYXN5bmMtYXBwZW5kLnRzIiwid2VicGFjazovLy8uLi9zcmMvbGliL2FzeW5jLXJlcGxhY2UudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9saWIvbGl0LWV4dGVuZGVkLnRzIiwid2VicGFjazovLy8uLi9zcmMvbGliL21vZGlmeS10ZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2xpYi9yZXBlYXQudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9saWIvc2hhZHktcmVuZGVyLnRzIiwid2VicGFjazovLy8uLi9zcmMvbGliL3VudGlsLnRzIiwid2VicGFjazovLy9zcmMvbGl0LWh0bWwudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvY2FsZm9yYWdlL2Rpc3QvbG9jYWxmb3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19nZXRQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0UmF3VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX292ZXJBcmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzUGxhaW5PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL2FwcGx5TWlkZGxld2FyZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvYmluZEFjdGlvbkNyZWF0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9jb21iaW5lUmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL2NvbXBvc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL2NyZWF0ZVN0b3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvdXRpbHMvd2FybmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N5bWJvbC1vYnNlcnZh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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxxSUFBcUk7QUFDdEksQ0FBQyxHQUFHO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLENBQUMsRUFBRSxNQUFNO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLHFJQUFxSTtBQUN0SSxDQUFDLEVBQUUsTUFBTTtBQUNUOztBQUVBLG9HQUFvRyxtQkFBbUIsRUFBRSxtQkFBbUIsOEhBQThIOztBQUUxUSxpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wscUJBQXFCO0FBQ3JCLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx5QkFBeUI7QUFDN0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9CQUFvQjtBQUMzQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsOEJBQThCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9CQUFvQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxL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Q0E7O0FBRUEsZUFBZSxrQkFBa0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGlCQUFpQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtB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Q0E7QUFDQTs7QUFFQSw2Q0FBNkMsUUFBUTtBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLFlBQVk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsWUFBWTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsaURBQWlELFFBQVE7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUM7QUFDdkMsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUVBQW1FO0FBQ25FOztBQUVBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFOztBQUU3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyREFBMkQsU0FBUztBQUNwRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5RUFBeUUsV0FBVztBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QSxnQkFBZ0I7QUFDaEI7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSx5QkFBeUI7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFBQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQzs7Ozs7Ozs7Ozs7OztzRENwQkE7QUFBQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDLFFBRUQ7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0EiLCJmaWxlIjoianMvRXN0b3IuZGV2LnZlbmRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSwgZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoIChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcclxuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9zcmMvY2xpZW50XCI7XG5cbmV4cG9ydCAqIGZyb20gXCIuL3NyYy9jb21wb25lbnRzXCI7XG5cbmV4cG9ydCAqIGZyb20gXCIuL3NyYy9ldmVudHNcIjtcblxuZXhwb3J0ICogZnJvbSBcIi4vc3JjL2hhbmRsZXJzXCI7XG5cbmV4cG9ydCAqIGZyb20gXCIuL3NyYy9tb2RlbHNcIjtcblxuZXhwb3J0IHsgU3RvcmUgfSBmcm9tIFwiLi9zcmMvc3RvcmUvc3RvcmVcIjtcbmV4cG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4vc3JjL3N0b3JlL3N0YXRlXCI7XG5cbmV4cG9ydCB7IFZpZXdSZWdpc3RyYXRpb24sIFZpZXdSZWdpc3RyYXRpb25zIH0gZnJvbSBcIi4vc3JjL3ZpZXdzXCI7XG5cbmV4cG9ydCB7IGh0bWwsIFRlbXBsYXRlUmVzdWx0LCAgfSBmcm9tIFwibGl0LWh0bWxcIjtcbmV4cG9ydCB7IHJlcGVhdCB9IGZyb20gXCJsaXQtaHRtbC9saWIvcmVwZWF0XCI7XG5leHBvcnQgeyB1bnRpbCB9IGZyb20gXCJsaXQtaHRtbC9saWIvdW50aWxcIjtcbmV4cG9ydCB7IGFzeW5jQXBwZW5kIH0gZnJvbSBcImxpdC1odG1sL2xpYi9hc3luYy1hcHBlbmRcIjtcbmV4cG9ydCB7IGFzeW5jUmVwbGFjZSB9IGZyb20gXCJsaXQtaHRtbC9saWIvYXN5bmMtcmVwbGFjZVwiO1xuIiwiaW1wb3J0IHsgSW5maW5pdHlXaW5kb3cgfSBmcm9tIFwiLi4vR2xvYmFsc1wiO1xuaW1wb3J0IHsgQXBwQ29uZmlnIH0gZnJvbSBcIi4uL2NsaWVudC9jb25maWcvY29uZmlnXCI7XG5pbXBvcnQgeyBMb2dnZXIsIExvZ2dlclR5cGVzIH0gZnJvbSBcIi4uL2NsaWVudC9sb2dnZXIvbG9nZ2VyXCI7XG5pbXBvcnQgeyBSZWR1eENsaWVudCB9IGZyb20gXCIuLi9jbGllbnQvcmVkdXgvcmVkdXhcIjtcbmltcG9ydCB7IFJlc3RDbGllbnQgfSBmcm9tIFwiLi4vY2xpZW50L3Jlc3QtY2xpZW50L3Jlc3QtY2xpZW50XCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiLi4vY2xpZW50L3JvdXRlci9yb3V0ZXJcIjtcbmltcG9ydCB7IENsaWVudEV2ZW50cywgRXZlbnRBcmdzLCBFdmVudENvbnRhaW5lciwgSGFuZGxlckRlc2NyaXB0b3IgfSBmcm9tIFwiLi4vZXZlbnRzXCI7XG5pbXBvcnQgeyBXU0V2ZW50QXJncyB9IGZyb20gXCIuLi9ldmVudHMvZXZlbnQtYXJnc1wiO1xuaW1wb3J0ICogYXMgSGFuZGxlcnMgZnJvbSBcIi4uL2hhbmRsZXJzXCI7XG5pbXBvcnQgeyBCYXNlSGFuZGxlciB9IGZyb20gXCIuLi9oYW5kbGVyc1wiO1xuaW1wb3J0IHsgQXBwQ2xhc3NlcywgSGFuZGxlckNsYXNzZXMgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCIuLi9zdG9yZS9zdG9yZVwiO1xuaW1wb3J0IHsgVmlld1JlZ2lzdHJhdGlvbiwgVmlld1JlZ2lzdHJhdGlvbnMgfSBmcm9tIFwiLi4vdmlld3NcIjtcblxuZXhwb3J0IGNsYXNzIENsaWVudE1hbmFnZXIge1xuXG4gICAgLy8gPT09IFN0YXRpYyA9PT0gLy9cblxuICAgIHN0YXRpYyByZWdpc3RyYXRpb25zOiBNYXA8c3RyaW5nLCBDbGllbnRNYW5hZ2VyPiA9IG5ldyBNYXAoKTtcblxuICAgIHN0YXRpYyBHZXRSZWdpc3RyYXRpb24gKG5hbWU6IHN0cmluZyk6IENsaWVudE1hbmFnZXIge1xuXG4gICAgICAgIHJldHVybiBDbGllbnRNYW5hZ2VyLnJlZ2lzdHJhdGlvbnMuZ2V0KG5hbWUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBGaXJlUmVhZHkgKCk6IHZvaWQge1xuXG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KENsaWVudEV2ZW50cy5DbGllbnRNYW5hZ2VyUmVhZHkpKTtcbiAgICB9XG5cbiAgICAvLyA9PT0gUHJpdmF0ZSA9PT0gLy9cblxuICAgIHByaXZhdGUgYXBwQ2xhc3NlczogQXBwQ2xhc3NlcztcbiAgICBwcml2YXRlIGV2ZW50czogRXZlbnRDb250YWluZXIgPSB7fTtcblxuICAgIC8vID09PSBQcm90ZWN0ZWQgPT09IC8vXG5cbiAgICBwcm90ZWN0ZWQgbmFtZTogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBhcHBDb250YWluZXI6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgaGFuZGxlcnM6IEhhbmRsZXJDbGFzc2VzO1xuXG4gICAgLy8gTWVzc2FnZSBFdmVudHNcbiAgICBwcml2YXRlIF9tZXNzYWdlSGFuZGxlcnM6IE1hcDxzdHJpbmcsIEhhbmRsZXJzLkJhc2VIYW5kbGVyPiA9IG5ldyBNYXA8c3RyaW5nLCBIYW5kbGVycy5CYXNlSGFuZGxlcj4oKTtcbiAgICBwcml2YXRlIF9tZXNzYWdlUHJvY2Vzc29yUXVldWU6IFByb21pc2U8dm9pZD4gPSBQcm9taXNlLnJlc29sdmUoKTtcblxuICAgIC8vID09PSBQdWJsaWMgPT09IC8vXG5cbiAgICBwdWJsaWMgaXNSZWFkeTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBjb25maWc6IEFwcENvbmZpZztcbiAgICBwdWJsaWMgbG9nZ2VyOiBMb2dnZXI7XG4gICAgcHVibGljIHN0b3JlOiBTdG9yZTtcbiAgICBwdWJsaWMgcmVkdXg6IFJlZHV4Q2xpZW50O1xuICAgIHB1YmxpYyByZXN0OiBSZXN0Q2xpZW50O1xuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcjtcbiAgICBwdWJsaWMgdmlld3M6IFZpZXdSZWdpc3RyYXRpb25zO1xuXG4gICAgLy8gPT09IENvbnN0cnVjdG9yID09PSAvL1xuXG4gICAgY29uc3RydWN0b3IgKGFwcENvbnRhaW5lcjogc3RyaW5nLCBkZWZhdWx0Vmlldzogc3RyaW5nLCBjb25maWc6IEFwcENvbmZpZywgdmlld3M6IFZpZXdSZWdpc3RyYXRpb25zLCBhcHBDbGFzc2VzOiBBcHBDbGFzc2VzLCBoYW5kbGVyczogSGFuZGxlckNsYXNzZXMpIHtcblxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5jb25maWcubmFtZTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaW5maW5pdHktZnJhbWV3b3JrLWFwcC1uYW1lXCIsIHRoaXMuY29uZmlnLm5hbWUpO1xuXG4gICAgICAgIHRoaXMuYXBwQ2xhc3NlcyA9IGFwcENsYXNzZXM7XG4gICAgICAgIHRoaXMuaGFuZGxlcnMgPSBoYW5kbGVycztcbiAgICAgICAgdGhpcy5hcHBDb250YWluZXIgPSBhcHBDb250YWluZXI7XG4gICAgICAgIHRoaXMudmlld3MgPSB2aWV3cztcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBuZXcgTG9nZ2VyKHRoaXMuY29uZmlnLmxvZ2dpbmcgfHwgW10pO1xuICAgICAgICBDbGllbnRNYW5hZ2VyLnJlZ2lzdHJhdGlvbnMuc2V0KHRoaXMubmFtZSwgdGhpcyk7XG5cbiAgICAgICAgaWYgKGNvbmZpZy5ib290c3RyYXAgPT09IHVuZGVmaW5lZCB8fCBjb25maWcuYm9vdHN0cmFwID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgIGlmICghKHdpbmRvdyBhcyBJbmZpbml0eVdpbmRvdykuY3RpKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzdG9yZTogU3RvcmUgPSBuZXcgYXBwQ2xhc3Nlcy5zdG9yZSh0aGlzLm5hbWUsIHRoaXMubG9nZ2VyKTtcblxuICAgICAgICAgICAgICAgIGxldCByZWR1eDogUmVkdXhDbGllbnQ7XG5cbiAgICAgICAgICAgICAgICBpZiAoYXBwQ2xhc3Nlcy5yZWR1eCkge1xuXG4gICAgICAgICAgICAgICAgICAgIHJlZHV4ID0gbmV3IGFwcENsYXNzZXMucmVkdXgodGhpcy5jb25maWcucmVkdXggfHwge30sIHN0b3JlLCB0aGlzLmxvZ2dlciwgKCkgPT4gdGhpcy5yZWR1eFVwZGF0ZSgpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmJvb3RzdHJhcChzdG9yZSwgcmVkdXgsIGFwcENsYXNzZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBib290c3RyYXAgKHN0b3JlOiBTdG9yZSwgcmVkdXg6IFJlZHV4Q2xpZW50LCBhcHBDbGFzc2VzOiBBcHBDbGFzc2VzKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLl9zZXRTdG9yZShzdG9yZSkpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLl9zZXRSZWR1eChyZWR1eCkpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLl9zZXRSZXN0Q2xpZW50KGFwcENsYXNzZXMpKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5fc2V0Um91dGVyKGFwcENsYXNzZXMpKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5fc2V0dXBIYW5kbGVycygpKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5iaW5kU3RhcnR1cEV2ZW50cygpKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBDbGllbnRNYW5hZ2VyLkZpcmVSZWFkeSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2V0U3RvcmUgKHN0b3JlOiBTdG9yZSk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+IHtcblxuICAgICAgICAgICAgdGhpcy5zdG9yZSA9IHN0b3JlO1xuICAgICAgICAgICAgdGhpcy5zdG9yZS5pbml0KCkudGhlbigoKSA9PiByZXNvbHZlKCkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zZXRSZWR1eCAocmVkdXg6IFJlZHV4Q2xpZW50KTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuXG4gICAgICAgICAgICBpZiAocmVkdXgpIHtcblxuICAgICAgICAgICAgICAgIHRoaXMucmVkdXggPSByZWR1eDtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZHV4LmluaXQoKS50aGVuKCgpID0+IHJlc29sdmUoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcblxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2V0UmVzdENsaWVudCAoYXBwQ2xhc3NlczogQXBwQ2xhc3Nlcyk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+IHtcblxuICAgICAgICAgICAgdGhpcy5yZXN0ID0gbmV3IGFwcENsYXNzZXMucmVzdCh0aGlzLmNvbmZpZy5yZXN0LCB0aGlzLnN0b3JlLCB0aGlzLmxvZ2dlcik7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3NldFJvdXRlciAoYXBwQ2xhc3NlczogQXBwQ2xhc3Nlcyk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+IHtcblxuICAgICAgICAgICAgaWYgKGFwcENsYXNzZXMucm91dGVyKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlciA9IGFwcENsYXNzZXMucm91dGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlciA9IG5ldyBSb3V0ZXIodGhpcy5hcHBDb250YWluZXIsIHRoaXMudmlld3MsIHRoaXMubG9nZ2VyLCAodmlldzogVmlld1JlZ2lzdHJhdGlvbikgPT4gdGhpcy51bmxvYWRFdmVudHModmlldykpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnJvdXRlci50cmlnZ2VyRmlyc3RMb2FkKCk7XG5cbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2V0dXBIYW5kbGVycyAoKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVyczogQmFzZUhhbmRsZXJbXSA9IE9iamVjdC5rZXlzKHRoaXMuaGFuZGxlcnMpLm1hcCh4ID0+IG5ldyB0aGlzLmhhbmRsZXJzW3hdKHRoaXMpKTtcblxuICAgICAgICAgICAgaGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IHtcblxuICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyLm1lc3NhZ2VUeXBlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWVzc2FnZUhhbmRsZXJzLnNldChoYW5kbGVyLm1lc3NhZ2VUeXBlLCBoYW5kbGVyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlci5ldmVudFR5cGUgJiYgaGFuZGxlci5ldmVudFR5cGUubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlci5ldmVudFR5cGUuZm9yRWFjaChldmVudFR5cGUgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uKGV2ZW50VHlwZSBhcyBzdHJpbmcsIGFzeW5jIChlOiBFdmVudEFyZ3MpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgaGFuZGxlci5jYWxsSGFuZGxlRXZlbnQoZXZlbnRUeXBlLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJFcnJvciBoYW5kbGluZyBldmVudFwiLCBgRXZlbnQgdHlwZTogJHtldmVudFR5cGUudG9TdHJpbmcoKX0uICR7ZXgubWVzc2FnZSB8fCBleH1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGJpbmRTdGFydHVwRXZlbnRzICgpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4ocmVzb2x2ZSA9PiB7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmVtaXQoQ2xpZW50RXZlbnRzLkNsb3NlUG9wb3V0TWVudSkpO1xuXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9ubGluZVwiLCAoKSA9PiB0aGlzLmVtaXQoQ2xpZW50RXZlbnRzLk9ubGluZSkpO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvZmZsaW5lXCIsICgpID0+IHRoaXMuZW1pdChDbGllbnRFdmVudHMuT2ZmbGluZSkpO1xuXG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vID09PSBFdmVudHMgPT09IC8vXG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XG4gICAgcHVibGljIG9uIChrZXk6IHN0cmluZywgaGFuZGxlcjogYW55LCBnbG9iYWw6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IGN1cnJQYWdlOiBzdHJpbmcgPSB0aGlzLnJvdXRlci5jdXJyZW50UGFnZS50YWc7XG5cbiAgICAgICAgY29uc3QgZXZlbnRzOiBIYW5kbGVyRGVzY3JpcHRvcltdID0gdGhpcy5ldmVudHNba2V5XTtcblxuICAgICAgICBpZiAoZXZlbnRzKSB7XG5cbiAgICAgICAgICAgIGV2ZW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBwYWdlOiAhZ2xvYmFsID8gY3VyclBhZ2UgOiBudWxsLFxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGhhbmRsZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLmV2ZW50c1trZXldID0gW3tcbiAgICAgICAgICAgICAgICBwYWdlOiAhZ2xvYmFsID8gY3VyclBhZ2UgOiBudWxsLFxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGhhbmRsZXJcbiAgICAgICAgICAgIH1dO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxuICAgIHB1YmxpYyBlbWl0IChrZXk6IHN0cmluZywgZGF0YT86IGFueSk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IGV2ZW50czogSGFuZGxlckRlc2NyaXB0b3JbXSA9IHRoaXMuZXZlbnRzW2tleV07XG5cbiAgICAgICAgaWYgKGV2ZW50cykge1xuXG4gICAgICAgICAgICBldmVudHMuZm9yRWFjaCh4ID0+IHguaGFuZGxlcihkYXRhKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdW5sb2FkRXZlbnRzIChwcmV2VmlldzogVmlld1JlZ2lzdHJhdGlvbik6IHZvaWQge1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZXZlbnRzKS5mb3JFYWNoKHggPT4ge1xuXG4gICAgICAgICAgICB0aGlzLmV2ZW50c1t4XSA9IHRoaXMuZXZlbnRzW3hdLmZpbHRlcihlID0+IGUucGFnZSAhPT0gcHJldlZpZXcudGFnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGhhbmRsZU5ld1dTTWVzc2FnZSAobWVzc2FnZTogV1NFdmVudEFyZ3MpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBoYW5kbGVyOiBIYW5kbGVycy5CYXNlSGFuZGxlciA9IHRoaXMuX21lc3NhZ2VIYW5kbGVycy5nZXQobWVzc2FnZS5hY3Rpb24pO1xuXG4gICAgICAgIGlmICghaGFuZGxlcikge1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9tZXNzYWdlUHJvY2Vzc29yUXVldWUgPSB0aGlzLl9tZXNzYWdlUHJvY2Vzc29yUXVldWVcbiAgICAgICAgICAgIC50aGVuKGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGhhbmRsZXIuY2FsbEhhbmRsZU1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChleCkge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiRXJyb3IgcHJvY2Vzc2luZyBtZXNzYWdlXCIsIGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChleCA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiRXJyb3IgcHJvY2Vzc2luZyBtZXNzYWdlXCIsIGV4KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlZHV4VXBkYXRlID0gKCk6IHZvaWQgPT4ge1xuXG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dnZXJUeXBlcy5SZWR1eENsaWVudCwgXCJSZWR1eCBVcGRhdGUhXCIpO1xuXG4gICAgICAgIHRoaXMuZW1pdChDbGllbnRFdmVudHMuUmVkdXhVcGRhdGUpO1xuICAgIH1cblxuICAgIC8vID09PSBQdWJsaWMgPT09IC8vXG5cbiAgICBwdWJsaWMgdHJpZ2dlckJvb3RzdHJhcCAoKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3Qgc3RvcmU6IFN0b3JlID0gbmV3IHRoaXMuYXBwQ2xhc3Nlcy5zdG9yZSh0aGlzLm5hbWUsIHRoaXMubG9nZ2VyKTtcblxuICAgICAgICB0aGlzLmJvb3RzdHJhcChzdG9yZSwgdGhpcy5hcHBDbGFzc2VzLnJlZHV4ID8gbmV3IHRoaXMuYXBwQ2xhc3Nlcy5yZWR1eCh0aGlzLmNvbmZpZy5yZWR1eCB8fCB7fSwgc3RvcmUsIHRoaXMubG9nZ2VyLCAoKSA9PiB0aGlzLnJlZHV4VXBkYXRlKCkpIDogdW5kZWZpbmVkLCB0aGlzLmFwcENsYXNzZXMpO1xuICAgIH1cbn1cbiIsIlxuZXhwb3J0IHsgQXBwQ29uZmlnLCBSZXN0Q29uZmlnIH0gZnJvbSBcIi4vY29uZmlnL2NvbmZpZ1wiO1xuZXhwb3J0IHsgTG9nZ2VyLCBMb2dnZXJUeXBlcyB9IGZyb20gXCIuL2xvZ2dlci9sb2dnZXJcIjtcbmV4cG9ydCB7IENsaWVudE1hbmFnZXIgfSBmcm9tIFwiLi9jbGllbnRNYW5hZ2VyXCI7XG5leHBvcnQgeyBSZWR1eENsaWVudCB9IGZyb20gXCIuL3JlZHV4L3JlZHV4XCI7XG5leHBvcnQgeyBSZWR1eEFjdGlvbiwgUmVkdXhTdGF0ZSwgUmVkdXhTZWxlY3RvciB9IGZyb20gXCIuL3JlZHV4L3JlZHV4LWludGVyZmFjZXNcIjtcbmV4cG9ydCB7IG1ha2VBY3Rpb25DcmVhdG9yIH0gZnJvbSBcIi4vcmVkdXgvdXRpbHNcIjtcbmV4cG9ydCB7IFJlc3RDbGllbnQgfSBmcm9tIFwiLi9yZXN0LWNsaWVudC9yZXN0LWNsaWVudFwiO1xuZXhwb3J0IHsgUm91dGVyIH0gZnJvbSBcIi4vcm91dGVyL3JvdXRlclwiO1xuZXhwb3J0IHsgV2ViU29ja2V0Q2xpZW50IH0gZnJvbSBcIi4vd2Vic29ja2V0cy93cy1jbGllbnRcIjtcbmV4cG9ydCB7IFRvdWNoVHJhY2tlciwgc2xpZGVUb1JldmVhbCwgc2xpZGVUb1JldmVhbEVuZCwgc2xpZGVBd2F5TW90aW9uLCBzbGlkZUF3YXlFbmQgfSBmcm9tIFwiLi9zbGlkZVJldmVhbFwiO1xuZXhwb3J0IHsgYnVpbGRTdHlsZXMsIGdldENTU1ZhcmlhYmxlLCBpc0ZpcmVmb3gsIGlzSUUsIGlzSUUxMSwgaXNDVEksIGdlbmVyYXRlR3VpZCwgZGVlcENsb25lLCBkZWZlciB9IGZyb20gXCIuL3V0aWxzXCI7XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZVxuXG5leHBvcnQgY2xhc3MgTG9nZ2VyVHlwZXMge1xuXG4gICAgc3RhdGljIERhdGFTdG9yYWdlOiBzdHJpbmcgPSBcImRhdGEtc3RvcmFnZVwiO1xuICAgIHN0YXRpYyBFdmVudHM6IHN0cmluZyA9IFwiZXZlbnRzXCI7XG4gICAgc3RhdGljIFJlZHV4Q2xpZW50OiBzdHJpbmcgPSBcInJlZHV4LWNsaWVudFwiO1xuICAgIHN0YXRpYyBSZXN0Q2xpZW50OiBzdHJpbmcgPSBcInJlc3QtY2xpZW50XCI7XG4gICAgc3RhdGljIFJvdXRlcjogc3RyaW5nID0gXCJyb3V0ZXJcIjtcbiAgICBzdGF0aWMgV1NDbGllbnQ6IHN0cmluZyA9IFwid3MtY2xpZW50XCI7XG4gICAgc3RhdGljIE90aGVyOiBzdHJpbmcgPSBcIm90aGVyXCI7XG59XG5cbmV4cG9ydCBjbGFzcyBMb2dnZXIge1xuXG4gICAgcHJpdmF0ZSBfdHlwZXM6IExvZ2dlclR5cGVzW107XG5cbiAgICBjb25zdHJ1Y3Rvcih0eXBlczogTG9nZ2VyVHlwZXNbXSA9IG51bGwpIHtcblxuICAgICAgICB0aGlzLl90eXBlcyA9IHR5cGVzO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2cgKHR5cGU6IExvZ2dlclR5cGVzLCAuLi5sb2dBcmdzOiBhbnlbXSk6IHZvaWQge1xuXG4gICAgICAgIGlmICh0aGlzLnNob3VsZExvZyh0eXBlKSkge1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZy5jYWxsKG51bGwsIC4uLmxvZ0FyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGluZm8gKHR5cGU6IExvZ2dlclR5cGVzLCAuLi5sb2dBcmdzOiBhbnlbXSk6IHZvaWQge1xuXG4gICAgICAgIGlmICh0aGlzLnNob3VsZExvZyh0eXBlKSkge1xuXG4gICAgICAgICAgICBjb25zb2xlLmluZm8uY2FsbChudWxsLCAuLi5sb2dBcmdzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBkZWJ1ZyAodHlwZTogTG9nZ2VyVHlwZXMsIC4uLmxvZ0FyZ3M6IGFueVtdKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkTG9nKHR5cGUpKSB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcuY2FsbChudWxsLCAuLi5sb2dBcmdzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBlcnJvciAoLi4ubG9nQXJnczogYW55W10pOiB2b2lkIHtcblxuICAgICAgICAvLyBFcnJvcnMgX2Fsd2F5c18gZ2V0IGxvZ2dlZFxuICAgICAgICBjb25zb2xlLmVycm9yLmNhbGwobnVsbCwgLi4ubG9nQXJncyk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFR5cGVzICgpOiBMb2dnZXJUeXBlc1tdIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5fdHlwZXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFR5cGVzICh0eXBlczogTG9nZ2VyVHlwZXNbXSk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuX3R5cGVzID0gdHlwZXMgfHwgW107XG4gICAgfVxuXG4gICAgcHVibGljIHNob3VsZExvZyh0eXBlOiBMb2dnZXJUeXBlcyk6IGJvb2xlYW4ge1xuXG4gICAgICAgIGlmICghdGhpcy5fdHlwZXMgfHwgIXRoaXMuX3R5cGVzLmxlbmd0aCkge1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fdHlwZXMuaW5jbHVkZXMoXCJfYWxsX1wiKSkge1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl90eXBlcy5pbmNsdWRlcyh0eXBlLnRvU3RyaW5nKCkpO1xuICAgIH1cbn1cblxuLy8gdHNsaW50OmVuYWJsZVxuIiwiaW1wb3J0ICogYXMgUmVkdXggZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIi4uLy4uL3N0b3JlL3N0b3JlXCI7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IExvZ2dlclR5cGVzIH0gZnJvbSBcIi4uL2xvZ2dlci9sb2dnZXJcIjtcbmltcG9ydCB7IFJlZHV4Q29uZmlnLCBSZWR1eFN0YXRlIH0gZnJvbSBcIi4vcmVkdXgtaW50ZXJmYWNlc1wiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUmVkdXhDbGllbnQ8VCBleHRlbmRzIFJlZHV4U3RhdGUgPSBSZWR1eFN0YXRlPiB7XG5cbiAgICAvLyA9PT0gUHJvdGVjdGVkIFByb3BzID09PSAvL1xuXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTtcbiAgICBwcm90ZWN0ZWQgbG9nZ2VyOiBMb2dnZXI7XG5cbiAgICAvLyA9PT0gUHJpdmF0ZSBQcm9wcyA9PT0gLy9cblxuICAgIHByaXZhdGUgY29uZmlnOiBSZWR1eENvbmZpZztcbiAgICBwcml2YXRlIHJlZHV4U3RvcmU6IFJlZHV4LlN0b3JlPFQ+O1xuICAgIHByaXZhdGUgc3Vic2NyaWJlcjogKCkgPT4gdm9pZDtcblxuICAgIC8vID09PSBDb25zdHJ1Y3RvciA9PT0gLy9cblxuICAgIGNvbnN0cnVjdG9yIChjb25maWc6IFJlZHV4Q29uZmlnID0ge30sIHN0b3JlOiBTdG9yZSwgbG9nZ2VyOiBMb2dnZXIsIHN1YnNjcmliZXI6ICgpID0+IHZvaWQpIHtcblxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy5zdG9yZSA9IHN0b3JlO1xuICAgICAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVyID0gc3Vic2NyaWJlcjtcbiAgICB9XG5cbiAgICAvLyA9PT0gUHJvdGVjdGVkID09PSAvL1xuXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHJlZHVjZXJzICgpOiBSZWR1eC5SZWR1Y2Vyc01hcE9iamVjdDtcblxuICAgIC8vID09PSBQdWJsaWMgPT09IC8vXG5cbiAgICBwdWJsaWMgYXN5bmMgaW5pdCAoKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgdGhpcy5yZWR1eFN0b3JlID0gUmVkdXguY3JlYXRlU3RvcmUoY29tYmluZVJlZHVjZXJzKHRoaXMucmVkdWNlcnMoKSksIHRoaXMuc3RvcmUuZ2V0U3RhdGU8VD4oKSwgUmVkdXguYXBwbHlNaWRkbGV3YXJlKHRoaXMuX3BlcnNpc3QpKTtcbiAgICAgICAgdGhpcy5yZWR1eFN0b3JlLnN1YnNjcmliZSh0aGlzLnN1YnNjcmliZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkaXNwYXRjaDxBIGV4dGVuZHMgUmVkdXguQWN0aW9uPiAoYWN0aW9uOiBBKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ2dlclR5cGVzLlJlZHV4Q2xpZW50LCBcIlJlZHV4IGFjdGlvbjpcIiwgYWN0aW9uKTtcblxuICAgICAgICB0aGlzLnJlZHV4U3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0U3RhdGUgKCk6IFQge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlZHV4U3RvcmUuZ2V0U3RhdGUoKTtcbiAgICB9XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XG4gICAgcHVibGljIHNlbGVjdCA9IDxUPihzZWxlY3RvcjogKC4uLmFyZ3M6IGFueVtdKSA9PiBULCAuLi5hcmdzOiBhbnlbXSk6IFQgPT4ge1xuXG4gICAgICAgIHJldHVybiBzZWxlY3Rvcih0aGlzLnJlZHV4U3RvcmUuZ2V0U3RhdGUoKSwgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxuICAgIHB1YmxpYyBjb21wb3NlPFQ+ICguLi5hcmdzOiBhbnlbXSk6IFQge1xuXG4gICAgICAgIHJldHVybiBhcmdzLnJlZHVjZSgoYWNjLCBjdXIpID0+IGN1cih0eXBlb2YgYWNjID09PSBcImZ1bmN0aW9uXCIgPyBhY2ModGhpcy5yZWR1eFN0b3JlLmdldFN0YXRlKCkpIDogYWNjKSk7XG4gICAgfVxuXG4gICAgLy8gPT09IFByaXZhdGUgPT09IC8vXG5cbiAgICBwcml2YXRlIF9wZXJzaXN0OiBSZWR1eC5NaWRkbGV3YXJlID0gPFM+KHN0b3JlOiBSZWR1eC5NaWRkbGV3YXJlQVBJPFM+KSA9PiAobmV4dDogUmVkdXguRGlzcGF0Y2g8Uz4pID0+IDxBIGV4dGVuZHMgUmVkdXguQWN0aW9uPihhY3Rpb246IEEpOiBBID0+IHtcblxuICAgICAgICBjb25zdCByZXN1bHQ6IEEgPSBuZXh0KGFjdGlvbik7XG4gICAgICAgIHRoaXMuX3BlcnNpc3RUb1N0b3JlKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9wZXJzaXN0VG9TdG9yZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnN0b3JlLnNldFN0YXRlKHRoaXMucmVkdXhTdG9yZS5nZXRTdGF0ZSgpIGFzIGFueSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUmVkdXhBY3Rpb24gfSBmcm9tIFwiLi9yZWR1eC1pbnRlcmZhY2VzXCI7XG5cbi8vIHRzbGludDpkaXNhYmxlIG5vLWFueVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUFjdGlvbkNyZWF0b3IgKHR5cGU6IHN0cmluZywgLi4uYXJnTmFtZXM6IGFueVtdKTogKC4uLmFyZ3M6IGFueVtdKSA9PiBSZWR1eEFjdGlvbiB7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3M6IGFueVtdKTogUmVkdXhBY3Rpb24ge1xuXG4gICAgICAgIGNvbnN0IGFjdGlvbjogUmVkdXhBY3Rpb24gPSB7IHR5cGUgfTtcblxuICAgICAgICBhcmdOYW1lcy5mb3JFYWNoKChhcmcsIGluZGV4KSA9PiB7XG5cbiAgICAgICAgICAgIGFjdGlvblthcmdOYW1lc1tpbmRleF1dID0gYXJnc1tpbmRleF07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhY3Rpb247XG4gICAgfTtcbn1cblxuLy8gdHNsaW50OmVuYWJsZSBuby1hbnlcbiIsImltcG9ydCB7IEFwaVJlc3VsdCwgSHR0cFZlcmIsIE1lc3NhZ2VFbnRpdHksIFF1ZXJ5UGFyYW0sIFJlcXVlc3RCb2R5LCBSZXF1ZXN0SGVhZGVycyB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIi4uLy4uL3N0b3JlL3N0b3JlXCI7XG5pbXBvcnQgeyBSZXN0Q29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWdcIjtcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgTG9nZ2VyVHlwZXMgfSBmcm9tIFwiLi4vbG9nZ2VyL2xvZ2dlclwiO1xuXG5leHBvcnQgY2xhc3MgUmVzdENsaWVudCB7XG5cbiAgICAvLyA9PT0gUHJvdGVjdGVkIFByb3BzID09PSAvL1xuXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogUmVzdENvbmZpZztcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlO1xuXG4gICAgcHJvdGVjdGVkIGhlYWRlcnM6IEhlYWRlcnM7XG4gICAgcHJvdGVjdGVkIHJlcXVlc3RPcHRpb25zOiBSZXF1ZXN0SW5pdDtcblxuICAgIHByb3RlY3RlZCBsb2dnZXI6IExvZ2dlcjtcblxuICAgIC8vID09PSBDb25zdHJ1Y3RvciA9PT0gLy9cblxuICAgIGNvbnN0cnVjdG9yIChyZXN0Q29uZmlnOiBSZXN0Q29uZmlnLCBzdG9yZTogU3RvcmUsIGxvZ2dlcjogTG9nZ2VyKSB7XG5cbiAgICAgICAgdGhpcy5jb25maWcgPSByZXN0Q29uZmlnO1xuICAgICAgICB0aGlzLnN0b3JlID0gc3RvcmU7XG4gICAgICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuXG4gICAgICAgIHRoaXMuX3Jlc2V0UmVxdWVzdE9wdGlvbnMoKTtcbiAgICB9XG5cbiAgICAvLyA9PT0gUHJvdGVjdGVkID09PSAvL1xuXG4gICAgcHJvdGVjdGVkIF9nZW5lcmF0ZVF1ZXJ5U3RyaW5nIChxdWVyeVBhcmFtczogUXVlcnlQYXJhbVtdKTogc3RyaW5nIHtcblxuICAgICAgICBpZiAoIXF1ZXJ5UGFyYW1zKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHF1ZXJ5UGFyYW1zLnJlZHVjZSgoYWNjLCBjdXIsIGlkeCkgPT4ge1xuXG4gICAgICAgICAgICBsZXQgcXVlcnk6IHN0cmluZyA9IFwiXCI7XG5cbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlIGN1cmx5XG4gICAgICAgICAgICBpZiAoaWR4ID09PSAwKSBxdWVyeSArPSBcIj9cIjtcbiAgICAgICAgICAgIGVsc2UgcXVlcnkgKz0gXCImXCI7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlIGN1cmx5XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY3VyLnZhbHVlICE9PSBcInN0cmluZ1wiKSB7XG5cbiAgICAgICAgICAgICAgICBjdXIudmFsdWUgPSBKU09OLnN0cmluZ2lmeShjdXIudmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBxdWVyeSArPSBgJHtjdXIua2V5fT0ke2VuY29kZVVSSUNvbXBvbmVudChjdXIudmFsdWUpfWA7XG5cbiAgICAgICAgICAgIHJldHVybiBhY2MgKz0gcXVlcnk7XG4gICAgICAgIH0sIFwiXCIpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfcmVzZXRSZXF1ZXN0T3B0aW9ucyAoKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblxuICAgICAgICB0aGlzLnJlcXVlc3RPcHRpb25zID0ge1xuXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XG4gICAgcHJvdGVjdGVkIGFzeW5jIF9zZW5kTWVzc2FnZTxUPiAoXG4gICAgICAgIHVyaTogc3RyaW5nLFxuICAgICAgICBtZXRob2Q6IEh0dHBWZXJiLFxuICAgICAgICBxdWVyeVBhcmFtczogUXVlcnlQYXJhbVtdID0gW10sXG4gICAgICAgIGJvZHk6IFJlcXVlc3RCb2R5ID0ge30sXG4gICAgICAgIGhlYWRlcnM6IFJlcXVlc3RIZWFkZXJzID0ge30sXG4gICAgICAgIGFkZFRvUXVldWU6IGJvb2xlYW4gPSBmYWxzZSxcbiAgICAgICAgb3B0czogUmVxdWVzdEluaXQgPSB7fVxuICAgICk6IFByb21pc2U8QXBpUmVzdWx0PFQ+PiB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZykge1xuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXN0IGNsaWVudCBub3QgcHJvcGVybHkgY29uZmlndXJlZC5cIik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtZXNzYWdlRW50aXR5OiBNZXNzYWdlRW50aXR5ID0ge1xuXG4gICAgICAgICAgICBpZDogXCJcIixcbiAgICAgICAgICAgIGFkZHJlc3M6IHVyaS5pbmNsdWRlcyhcImh0dHBzXCIpID8gdXJpIDogYCR7dGhpcy5jb25maWcuYmFzZVVyaX0ke3VyaX1gLFxuICAgICAgICAgICAgdmVyYjogbWV0aG9kLFxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBxdWVyeVBhcmFtcyxcbiAgICAgICAgICAgIGJvZHk6IGJvZHksXG4gICAgICAgICAgICBhdHRlbXBzOiAwLFxuICAgICAgICAgICAgbGFzdEF0dGVtcHQ6IDAsXG4gICAgICAgICAgICBvcHRzOiBvcHRzXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGFkZFRvUXVldWUpIHtcblxuICAgICAgICAgICAgLy8gVE9ETzogQWRkIHRvIG1lc3NhZ2UgcXVldWVcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc3RvcmUuc2F2ZVRvTWVzc2FnZVF1ZXVlKG1lc3NhZ2VFbnRpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX2h0dHBSZXF1ZXN0PFQ+KG1lc3NhZ2VFbnRpdHkpO1xuICAgIH1cblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcbiAgICBwcm90ZWN0ZWQgYXN5bmMgX2h0dHBSZXF1ZXN0PFQ+IChtc2c6IE1lc3NhZ2VFbnRpdHkpOiBQcm9taXNlPEFwaVJlc3VsdDxUPj4ge1xuXG4gICAgICAgIGxldCByZXE6IFJlcXVlc3RJbml0O1xuXG4gICAgICAgIHRoaXMucmVxdWVzdE9wdGlvbnMgPSB7XG5cbiAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcbiAgICAgICAgICAgICAgICAvLyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAuLi5tc2cuaGVhZGVyc1xuICAgICAgICAgICAgfSlcblxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChtc2cudmVyYiA9PT0gSHR0cFZlcmIuR0VUKSB7XG5cbiAgICAgICAgICAgIHJlcSA9IE9iamVjdC5hc3NpZ24oe1xuXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBtc2cudmVyYixcbiAgICAgICAgICAgICAgICBtb2RlOiBcImNvcnNcIlxuICAgICAgICAgICAgfSwgdGhpcy5yZXF1ZXN0T3B0aW9ucyk7XG5cbiAgICAgICAgICAgIG1zZy5hZGRyZXNzICs9IHRoaXMuX2dlbmVyYXRlUXVlcnlTdHJpbmcobXNnLnF1ZXJ5UGFyYW1zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcblxuICAgICAgICAgICAgcmVxID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBtc2cudmVyYixcbiAgICAgICAgICAgICAgICBtb2RlOiBcImNvcnNcIixcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShtc2cuYm9keSlcbiAgICAgICAgICAgIH0sIHRoaXMucmVxdWVzdE9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzOiBSZXNwb25zZSA9IGF3YWl0IGZldGNoKG1zZy5hZGRyZXNzLCB7IC4uLnJlcSwgLi4ubXNnLm9wdHMgfSk7XG5cbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJSZXF1ZXN0OlwiLCByZXMsIHJlcy5oZWFkZXJzLmdldChcImNvbnRlbnQtdHlwZVwiKSk7XG5cbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxuICAgICAgICAgICAgbGV0IGpzb25SZXN1bHQ6IGFueSA9IHt9O1xuXG4gICAgICAgICAgICBpZiAocmVzLmhlYWRlcnMgJiYgcmVzLmhlYWRlcnMuZ2V0KFwiY29udGVudC10eXBlXCIpICYmIHJlcy5oZWFkZXJzLmdldChcImNvbnRlbnQtdHlwZVwiKS5pbmNsdWRlcyhcImFwcGxpY2F0aW9uL2pzb25cIikpIHtcblxuICAgICAgICAgICAgICAgIGpzb25SZXN1bHQgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCByZXN1bHQ6IEFwaVJlc3VsdDxUPiA9IHtcblxuICAgICAgICAgICAgICAgIGVycm9yOiAhcmVzLm9rID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogIXJlcy5vayA/IGAke3Jlcy5zdGF0dXN9OiAke3Jlcy5zdGF0dXNUZXh0fWAgOiBudWxsLFxuICAgICAgICAgICAgICAgIHJlc3VsdDoganNvblJlc3VsdFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gUmVtb3ZlIGZyb20gbWVzc2FnZSBxdWV1ZSBpZiBtZXNzYWdlIHdhcyBzdWNjZXNzZnVsXG4gICAgICAgICAgICBpZiAocmVzLm9rKSB7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnN0b3JlLnJlbW92ZUZyb21NZXNzYWdlUXVldWUobXNnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgKyttc2cuYXR0ZW1wcztcbiAgICAgICAgICAgICAgICBtc2cubGFzdEF0dGVtcHQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fcmVzZXRSZXF1ZXN0T3B0aW9ucygpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChleCkge1xuXG4gICAgICAgICAgICArK21zZy5hdHRlbXBzO1xuICAgICAgICAgICAgbXNnLmxhc3RBdHRlbXB0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB0aGlzLl9yZXNldFJlcXVlc3RPcHRpb25zKCk7XG5cbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGV4KTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcblxuICAgICAgICAgICAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogZXgsXG4gICAgICAgICAgICAgICAgcmVzdWx0OiBudWxsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gPT09IFB1YmxpYyA9PT0gLy9cblxuICAgIHB1YmxpYyBhc3luYyBwcm9jZXNzUXVldWVkTWVzc2FnZXMgKCk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIHRoaXMuc3RvcmUuZ2V0TWVzc2FnZVF1ZXVlKCkuZm9yRWFjaCh4ID0+IHRoaXMuX2h0dHBSZXF1ZXN0KHgpKTtcbiAgICB9XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XG4gICAgcHVibGljIGFzeW5jIGV4YW1wbGVSZXF1ZXN0PFQ+IChwYXJhbTogc3RyaW5nKTogUHJvbWlzZTxBcGlSZXN1bHQ8VD4+IHtcblxuICAgICAgICBjb25zdCBxdWVyeVBhcmFtczogUXVlcnlQYXJhbVtdID0gW1xuXG4gICAgICAgICAgICB7IGtleTogXCJmaWxlbmFtZVwiLCB2YWx1ZTogcGFyYW0gfVxuICAgICAgICBdO1xuXG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogQXBpUmVzdWx0PFQ+ID0gYXdhaXQgdGhpcy5fc2VuZE1lc3NhZ2U8VD4oXCJ5b3VyLWVuZHBvaW50LWFkZHJlc3NcIiwgSHR0cFZlcmIuR0VULCBxdWVyeVBhcmFtcyk7XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGV4KSB7XG5cbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dnZXJUeXBlcy5SZWR1eENsaWVudCwgZXgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSGlzdG9yeUFQSUV2ZW50LCBJbmZpbml0eVdpbmRvdyB9IGZyb20gXCIuLi8uLi9HbG9iYWxzXCI7XG5pbXBvcnQgeyBSb3V0ZVF1ZXJ5UGFyYW1zIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xuaW1wb3J0IHsgVmlld1JlZ2lzdHJhdGlvbiwgVmlld1JlZ2lzdHJhdGlvbnMgfSBmcm9tIFwiLi4vLi4vdmlld3NcIjtcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgaXNDVEkgfSBmcm9tIFwiLi4vdXRpbHNcIjtcblxuaW50ZXJmYWNlIEhUTUxFbGVtZW50V2l0aFF1ZXJ5IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuXG4gICAgcXVlcnk6IFJvdXRlUXVlcnlQYXJhbXM7XG59XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXIge1xuXG4gICAgLy8gPT09IFByaXZhdGUgPT09IC8vXG5cbiAgICBwcml2YXRlIGFwcENvbnRhaW5lcjogc3RyaW5nO1xuICAgIHByaXZhdGUgdmlld3M6IFZpZXdSZWdpc3RyYXRpb25zO1xuICAgIHByaXZhdGUgZGVmYXVsdFZpZXc6IFZpZXdSZWdpc3RyYXRpb247XG4gICAgcHJpdmF0ZSByb3V0ZUNhbGxiYWNrOiAodmlldzogVmlld1JlZ2lzdHJhdGlvbikgPT4gdm9pZDtcbiAgICBwcml2YXRlIGF1dGhFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBhdXRoQ2hlY2s6IChxdWVyeTogUm91dGVRdWVyeVBhcmFtcykgPT4gUHJvbWlzZTxib29sZWFuPjtcbiAgICBwcml2YXRlIHBhdGhFeGNlcHRpb25zOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlcjtcblxuICAgIC8vID09PSBQdWJsaWMgPT09IC8vXG5cbiAgICBwdWJsaWMgY3VycmVudFBhZ2U6IFZpZXdSZWdpc3RyYXRpb247XG5cbiAgICAvLyA9PT0gQ29uc3RydWN0b3IgPT09IC8vXG5cbiAgICBjb25zdHJ1Y3RvciAoXG4gICAgICAgIGFwcENvbnRhaW5lcjogc3RyaW5nLFxuICAgICAgICB2aWV3czogVmlld1JlZ2lzdHJhdGlvbnMsXG4gICAgICAgIGxvZ2dlcjogTG9nZ2VyLFxuICAgICAgICByb3V0ZUNhbGxiYWNrOiAodmlldzogVmlld1JlZ2lzdHJhdGlvbikgPT4gdm9pZCxcbiAgICAgICAgYXV0aEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZSxcbiAgICAgICAgYXV0aENoZWNrOiAocXVlcnk/OiBSb3V0ZVF1ZXJ5UGFyYW1zKSA9PiBQcm9taXNlPGJvb2xlYW4+ID0gbnVsbCxcbiAgICAgICAgcGF0aEV4Y2VwdGlvbnM6IHN0cmluZ1tdID0gW11cbiAgICApIHtcblxuICAgICAgICB0aGlzLmF1dGhFbmFibGVkID0gYXV0aEVuYWJsZWQ7XG4gICAgICAgIHRoaXMuYXV0aENoZWNrID0gYXV0aENoZWNrO1xuICAgICAgICB0aGlzLnBhdGhFeGNlcHRpb25zID0gWy4uLnBhdGhFeGNlcHRpb25zLCBcImluZGV4Lmh0bWxcIiwgXCJpbmRleC5pZTExLmh0bWxcIl07XG4gICAgICAgIHRoaXMucm91dGVDYWxsYmFjayA9IHJvdXRlQ2FsbGJhY2s7XG4gICAgICAgIHRoaXMuYXBwQ29udGFpbmVyID0gYXBwQ29udGFpbmVyO1xuICAgICAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcbiAgICAgICAgdGhpcy52aWV3cyA9IHZpZXdzO1xuICAgICAgICB0aGlzLmRlZmF1bHRWaWV3ID0gT2JqZWN0LmtleXModGhpcy52aWV3cykubWFwKHggPT4gdGhpcy52aWV3c1t4XSkuZmluZCh4ID0+IHguZGVmYXVsdCk7XG4gICAgICAgIHRoaXMuX2JpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICAvLyA9PT0gUHJpdmF0ZSA9PT0gLy9cblxuICAgIHByaXZhdGUgX2JpbmRFdmVudHMgKCk6IHZvaWQge1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIiwgKGUpID0+IHRoaXMuX3BvcFN0YXRlKGUpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIF9maXJzdExvYWQgKCk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zOiBSb3V0ZVF1ZXJ5UGFyYW1zID0gdGhpcy5fZ2V0UXVlcnlTdHJpbmdQYXJhbXM8Um91dGVRdWVyeVBhcmFtcz4oKTtcblxuICAgICAgICAvLyBXZSBhcmUgcnVubmluZyBpbnNpZGUgRWxlY3Ryb25cbiAgICAgICAgaWYgKCh3aW5kb3cgYXMgSW5maW5pdHlXaW5kb3cpLnByb2Nlc3MgJiYgKHdpbmRvdyBhcyBJbmZpbml0eVdpbmRvdykucHJvY2Vzcy50eXBlKSB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmF1dGhFbmFibGVkICYmIHF1ZXJ5UGFyYW1zLmNvZGUpIHtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF1dGhDaGVjaykge1xuXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuYXV0aENoZWNrKHF1ZXJ5UGFyYW1zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURvbSh0aGlzLmRlZmF1bHRWaWV3LCBxdWVyeVBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG5cbiAgICAgICAgICAgIGxldCBwYXRoOiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgICAgICAgICBjb25zdCBpZHg6IG51bWJlciA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5sYXN0SW5kZXhPZihcIi9cIik7XG5cbiAgICAgICAgICAgIGlmIChpZHggPiAtMSkge1xuXG4gICAgICAgICAgICAgICAgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdWJzdHJpbmcoaWR4ICsgMSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXRoRXhjZXB0aW9ucy5maW5kKHggPT4geCA9PT0gcGF0aCkpIHtcblxuICAgICAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwYXRoID09PSBcIlwiICYmICFxdWVyeVBhcmFtcy5jb2RlICYmIHRoaXMuZGVmYXVsdFZpZXcpIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURvbSh0aGlzLmRlZmF1bHRWaWV3LCBxdWVyeVBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHZpZXc6IFZpZXdSZWdpc3RyYXRpb24gPSBPYmplY3Qua2V5cyh0aGlzLnZpZXdzKS5tYXAoeCA9PiB0aGlzLnZpZXdzW3hdKS5maW5kKHggPT4geC51cmkgPT09IHBhdGgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZpZXcpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hdXRoRW5hYmxlZCAmJiB2aWV3LmF1dGgpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInF1ZXJ5UGFyYW1zXCIsIEpTT04uc3RyaW5naWZ5KHF1ZXJ5UGFyYW1zKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhc3NBdXRoOiBib29sZWFuID0gYXdhaXQgdGhpcy5hdXRoQ2hlY2socXVlcnlQYXJhbXMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFzc0F1dGgpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURvbSh2aWV3LCBxdWVyeVBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRWaWV3OiBWaWV3UmVnaXN0cmF0aW9uID0gdGhpcy5kZWZhdWx0VmlldyB8fCBPYmplY3Qua2V5cyh0aGlzLnZpZXdzKS5tYXAoeCA9PiB0aGlzLnZpZXdzW3hdKS5maW5kKHggPT4geC5kZWZhdWx0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWZhdWx0Vmlldykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShkZWZhdWx0VmlldywgXCIvXCIsIGRlZmF1bHRWaWV3LnVyaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURvbShkZWZhdWx0VmlldywgcXVlcnlQYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIkF1dGggY2hlY2sgZmFpbGVkIGFuZCBubyBkZWZhdWx0IHZpZXcgdG8gbG9hZCBoYXMgYmVlbiBmb3VuZC5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVEb20odmlldywgcXVlcnlQYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdXBkYXRlRG9tICh2aWV3OiBWaWV3UmVnaXN0cmF0aW9uLCBxdWVyeT86IFJvdXRlUXVlcnlQYXJhbXMpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBjb250YWluZXI6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5hcHBDb250YWluZXIpO1xuXG4gICAgICAgIGlmIChjb250YWluZXIpIHtcblxuICAgICAgICAgICAgdGhpcy5yb3V0ZUNhbGxiYWNrKHRoaXMuY3VycmVudFBhZ2UpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHZpZXc7XG5cbiAgICAgICAgICAgIHdoaWxlIChjb250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyLmNoaWxkTm9kZXNbMF0ucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuY2hpbGROb2Rlc1swXS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGNvbnRhaW5lci5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbmV3VmlldzogSFRNTEVsZW1lbnRXaXRoUXVlcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHZpZXcudGFnKSBhcyBIVE1MRWxlbWVudFdpdGhRdWVyeTtcblxuICAgICAgICAgICAgaWYgKHF1ZXJ5KSB7XG5cbiAgICAgICAgICAgICAgICBuZXdWaWV3LnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdWaWV3KTtcbiAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC50aXRsZSA9IHZpZXcudGl0bGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG5cbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiTm8gYXBwIGNvbnRhaW5lciBmb3VuZC5cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9wb3BTdGF0ZSAoZTogSGlzdG9yeUFQSUV2ZW50KTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgcHJldmlvdXNWaWV3OiBWaWV3UmVnaXN0cmF0aW9uID0gZS5zdGF0ZTtcblxuICAgICAgICBpZiAocHJldmlvdXNWaWV3KSB7XG5cbiAgICAgICAgICAgIGlmIChpc0NUSSgpKSB7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShwcmV2aW91c1ZpZXcsIFwiXCIsIGAke3RoaXMuX2NsZWFySGFzaEZyb21Vcmwod2luZG93LmxvY2F0aW9uLmhyZWYpfSR7cHJldmlvdXNWaWV3LnVyaSA9PT0gXCIvXCIgPyBcIlwiIDogcHJldmlvdXNWaWV3LnVyaX1gKSwgMjAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRG9tKHByZXZpb3VzVmlldyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG5cbiAgICAgICAgICAgIC8vIFdlIHNvbWVob3cgbG9zdCBvdXIgc3RhdGVcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURvbSh0aGlzLmRlZmF1bHRWaWV3KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgX25hdmlnYXRlICh2aWV3OiBWaWV3UmVnaXN0cmF0aW9uLCBxdWVyeT86IFJvdXRlUXVlcnlQYXJhbXMpOiBQcm9taXNlPHZvaWQ+IHsgXG5cbiAgICAgICAgaWYgKHRoaXMuYXV0aENoZWNrICYmIHZpZXcuYXV0aCkge1xuXG4gICAgICAgICAgICBpZiAocXVlcnkpIHtcblxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicXVlcnlQYXJhbXNcIiwgSlNPTi5zdHJpbmdpZnkocXVlcnkpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcGFzc0F1dGg6IGJvb2xlYW4gPSBhd2FpdCB0aGlzLmF1dGhDaGVjayhxdWVyeSk7XG5cbiAgICAgICAgICAgIGlmIChwYXNzQXV0aCkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRG9tKHZpZXcsIHF1ZXJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcblxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRG9tKHZpZXcsIHF1ZXJ5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2dldFF1ZXJ5U3RyaW5nUGFyYW1zPFQgZXh0ZW5kcyB7fT4gKCk6IFQge1xuXG4gICAgICAgIGxldCBtYXRjaDogc3RyaW5nW107XG4gICAgICAgIGNvbnN0IHBsOiBSZWdFeHAgPSAvXFwrL2c7XG4gICAgICAgIGNvbnN0IHNlYXJjaDogUmVnRXhwID0gLyhbXiY9XSspPT8oW14mXSopL2c7XG4gICAgICAgIGNvbnN0IGRlY29kZTogRnVuY3Rpb24gPSAoc3RyOiBzdHJpbmcpID0+IGRlY29kZVVSSUNvbXBvbmVudChzdHIucmVwbGFjZShwbCwgXCIgXCIpKTtcbiAgICAgICAgY29uc3QgcXVlcnk6IHN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG5cbiAgICAgICAgY29uc3QgcGFyYW1zOiBPYmplY3QgPSB7fTtcblxuICAgICAgICB3aGlsZSAobWF0Y2ggPSBzZWFyY2guZXhlYyhxdWVyeSkpIHtcblxuICAgICAgICAgICAgcGFyYW1zW2RlY29kZShtYXRjaFsxXSkucmVwbGFjZShcIj9cIiwgXCJcIildID0gZGVjb2RlKG1hdGNoWzJdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJhbXMgYXMgVDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jbGVhckhhc2hGcm9tVXJsICh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG5cbiAgICAgICAgaWYgKHVybC5pbmNsdWRlcyhcImluZGV4Lmh0bWxcIikpIHtcblxuICAgICAgICAgICAgcmV0dXJuIGAke3VybC5zdWJzdHIoMCwgd2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZihcImluZGV4Lmh0bWxcIikgKyBcImluZGV4Lmh0bWxcIi5sZW5ndGgpfS9gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuXG4gICAgICAgICAgICByZXR1cm4gdXJsLnN1YnN0cigwLCB1cmwuaW5kZXhPZihcIiNcIikpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gPT09IFB1YmxpYyA9PT0gLy9cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJzIHRoZSBmaXJzdCBsb2FkIGZ1bmN0aW9uLlxuICAgICAqIFRoaXMgaXMgZGVzaWduZWQgdG8gYmUgY2FsbGVkIGZyb20geW91ciBhcHBsaWNhdGlvbiBib290c3RyYXBwaW5nXG4gICAgICogc28gdGhhdCB5b3UgY2FuIGxvYWQgd2hlbiB5b3UncmUgcmVhZHkgdG8gZG8gc28uXG4gICAgICovXG4gICAgcHVibGljIHRyaWdnZXJGaXJzdExvYWQgKCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuX2ZpcnN0TG9hZCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE5hdmlnYXRlIHRvIHRoZSBzdXBwbGllZCB2aWV3LiBUaGlzIGlzIGEgZnVsbCBmb3J3YXJkIG1vdGlvblxuICAgICAqIGluIHRoZSBicm93c2VyIGFuZCBjcmVhdGVzIGFuIGVudHJ5IGluIHRoZSB1c2VyJ3MgaGlzdG9yeS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gdmlldyBUaGUgdmlldyB0byBuYXZpZ2F0ZSB0by5cbiAgICAgKiBAcGFyYW0gcXVlcnkgQW55IHF1ZXJ5IHBhcmFtcyB5b3Ugd291bGQgbGlrZSB0byBwYXNzIHRvIHRoZSB2aWV3XG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIGdvVG9QYWdlICh2aWV3OiBWaWV3UmVnaXN0cmF0aW9uLCBxdWVyeT86IFJvdXRlUXVlcnlQYXJhbXMpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICBpZiAoaXNDVEkoKSkge1xuXG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUodmlldywgXCJcIiwgYCR7dGhpcy5fY2xlYXJIYXNoRnJvbVVybCh3aW5kb3cubG9jYXRpb24uaHJlZil9JHt2aWV3LnVyaSA9PT0gXCIvXCIgPyBcIlwiIDogdmlldy51cml9YCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG5cbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh2aWV3LCBcIlwiLCB2aWV3LnVyaSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9uYXZpZ2F0ZSh2aWV3LCBxdWVyeSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZXMgdGhlIGN1cnJlbnQgdmlldyB3aXRoIHRoZSBzdXBwbGllZCB2aWV3LiBUaGlzIGRvZXMgbm90IGNyZWF0ZVxuICAgICAqIGEgbmV3IGhpc3RvcnkgZW50cnkuXG4gICAgICogXG4gICAgICogQHBhcmFtIHZpZXcgVGhlIHZpZXcgdG8gbmF2aWdhdGUgdG8uXG4gICAgICogQHBhcmFtIHF1ZXJ5IEFueSBxdWVyeSBwYXJhbXMgeW91IHdvdWxkIGxpa2UgdG8gcGFzcyB0byB0aGUgdmlld1xuICAgICAqL1xuICAgIHB1YmxpYyByZXBsYWNlUGFnZSAodmlldzogVmlld1JlZ2lzdHJhdGlvbiwgcXVlcnk/OiBSb3V0ZVF1ZXJ5UGFyYW1zKTogdm9pZCB7XG5cbiAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHZpZXcsIFwiXCIsIHZpZXcudXJpKTtcbiAgICAgICAgdGhpcy5fbmF2aWdhdGUodmlldywgcXVlcnkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgYnJvd3NlciBiYWNrIGFjdGlvbi4gVGhpcyB3aWxsIGxlYXZlIHRoZSBoaXN0b3J5XG4gICAgICogb2YgdGhlIHVzZXIgaW4gdGFjdCAobWVhbmluZyB0aGV5IGNhbiBuYXZpZ2F0ZSBieSBwcmVzc2luZylcbiAgICAgKiB0aGUgZm9yd2FyZCBidXR0b24gaW4gdGhlaXIgYnJvd3Nlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ29CYWNrICgpOiB2b2lkIHtcblxuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZXMgdGhlIGN1cnJlbnQgbG9jYXRpb24gd2l0aCB0aGUgc3VwcGxpZWQgbG9jYXRpb24gb3JcbiAgICAgKiByZXNldHMgdG8gdGhlIHJvb3QgaWYgbm90IHN1cHBsaWVkLiBZb3UgY2FuIHN0aWxsIG5hdmlnYXRlXG4gICAgICogYmFja3dhcmRzIGZyb20gdGhpcywgYnV0IHlvdSBjYW5ub3QgZ28gZm9yd2FyZC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gbG9jYXRpb24gUGF0aCB0byByZXBsYWNlIHRoZSBjdXJyZW50IHBhZ2Ugd2l0aC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVwbGFjZSAobG9jYXRpb24/OiBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShsb2NhdGlvbiB8fCBcIi9cIik7XG4gICAgfVxufVxuIiwiLy8gdHNsaW50OmRpc2FibGVcblxuZXhwb3J0IGNsYXNzIFRvdWNoVHJhY2tlciB7XG5cbiAgICAvLyBUcmFja3MgdGhlIFggcG9zaXRpb24gb2YgdGhlIHZlcnkgZmlyc3QgdG91Y2ggb24gdGhlIHNjcmVlbiAoZm9yIHRoaXMgbW92ZW1lbnQpIGFuZCBnZXRzIHJlc2V0IG9udG91Y2hlbmRcbiAgICBzdGF0aWMgTGFzdFRvdWNoU3RhcnRYOiBudW1iZXI7XG5cbiAgICAvLyBUcmFja3MgdGhlIFggcG9zaXRpb24gb2YgdGhlIHZlcnkgZmlyc3QgdG91Y2ggb24gdGhlIHNjcmVlbiAoZm9yIHRoaXMgbW92ZW1lbnQpIGFuZCBnZXRzIHJlc2V0IG9udG91Y2hlbmRcbiAgICBzdGF0aWMgTGFzdFRvdWNoU3RhcnRZOiBudW1iZXI7XG5cbiAgICAvLyBUcmFja3MgdGhlIHRpbWUgb2YgdGhlIGZpcnN0IHRvdWNoIC0gdXNlZCB3aGVuIGNhbGN1bGF0aW5nIHZlbG9jaXR5XG4gICAgc3RhdGljIExhc3RUb3VjaFN0YXJ0VGltZTogbnVtYmVyO1xuXG4gICAgLy8gVHJhY2tzIHRoZSBsYXN0IFggcG9zaXRpb24gb2YgdGhlIHByZXZpb3VzIHRvdWNobW92ZSAoaS5lLiB1cGRhdGVzIGFzIHRoZSB1c2VyIG1vdmVzIHRoZWlyIGZpbmdlciBhY3Jvc3MgdGhlIHNjcmVlbilcbiAgICBzdGF0aWMgTGFzdFRvdWNoTW92ZVg6IG51bWJlcjtcblxuICAgIC8vIFRyYWNrcyB0aGUgbGFzdCBZIHBvc2l0aW9uIG9mIHRoZSBwcmV2aW91cyB0b3VjaG1vdmUgKGkuZS4gdXBkYXRlcyBhcyB0aGUgdXNlciBtb3ZlcyB0aGVpciBmaW5nZXIgYWNyb3NzIHRoZSBzY3JlZW4pXG4gICAgc3RhdGljIExhc3RUb3VjaE1vdmVZOiBudW1iZXI7XG5cbiAgICAvLyBUaGlzIGRldGVybWluZXMgdGhlIG1vdmVtZW50IHNwZWVkIG9mIHRoZSBlbGVtZW50IGJlaW5nIGRyYWdnZWQuIEluY3JlYXNlIHRoaXMgbnVtYmVyIHRvIG1ha2UgaXQgZmFzdGVyIG9yIGxvd2VyIHRvIG1ha2Ugc2xvd2VyXG4gICAgc3RhdGljIEFjY2VsZXJhdG9yOiBudW1iZXIgPSAyLjU7XG5cbiAgICAvLyBSZXNldHMgY3VycmVudCBzdGF0ZVxuICAgIHN0YXRpYyBSZXNldDogKCkgPT4gdm9pZCA9ICgpID0+IHtcblxuICAgICAgICBkZWxldGUgVG91Y2hUcmFja2VyLkxhc3RUb3VjaFN0YXJ0WDtcbiAgICAgICAgZGVsZXRlIFRvdWNoVHJhY2tlci5MYXN0VG91Y2hTdGFydFk7XG4gICAgICAgIGRlbGV0ZSBUb3VjaFRyYWNrZXIuTGFzdFRvdWNoU3RhcnRUaW1lO1xuICAgICAgICBkZWxldGUgVG91Y2hUcmFja2VyLkxhc3RUb3VjaE1vdmVYO1xuICAgICAgICBkZWxldGUgVG91Y2hUcmFja2VyLkxhc3RUb3VjaE1vdmVZO1xuICAgIH1cblxuICAgIHN0YXRpYyBOdW1NYXRjaDogUmVnRXhwID0gLy0/XFxkKy87XG5cbiAgICBzdGF0aWMgWDogc3RyaW5nW10gPSBbXCJjbGllbnRYXCJdO1xuICAgIHN0YXRpYyBZOiBzdHJpbmdbXSA9IFtcImNsaWVudFlcIl07XG5cbiAgICBzdGF0aWMgR2V0TnVtYmVyVmFsdWU6IChzdHI6IHN0cmluZykgPT4gbnVtYmVyID0gKHN0cjogc3RyaW5nKTogbnVtYmVyID0+IHtcblxuICAgICAgICBjb25zdCByZXM6IFJlZ0V4cE1hdGNoQXJyYXkgPSBzdHIubWF0Y2goVG91Y2hUcmFja2VyLk51bU1hdGNoKTtcblxuICAgICAgICBpZiAocmVzKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludChyZXNbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgc3RhdGljIENoZWNrSWZGaXJzdFRvdWNoOiAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHZvaWQgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHtcblxuICAgICAgICBpZiAoIVRvdWNoVHJhY2tlci5MYXN0VG91Y2hTdGFydFgpIHtcblxuICAgICAgICAgICAgVG91Y2hUcmFja2VyLkxhc3RUb3VjaFN0YXJ0WCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIVRvdWNoVHJhY2tlci5MYXN0VG91Y2hTdGFydFkpIHtcblxuICAgICAgICAgICAgVG91Y2hUcmFja2VyLkxhc3RUb3VjaFN0YXJ0WSA9IHk7XG4gICAgICAgIH1cblxuICAgICAgICBUb3VjaFRyYWNrZXIuTGFzdFRvdWNoU3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2xpZGVUb1JldmVhbChlOiBUb3VjaEV2ZW50LCBvZmZzZXQ6IG51bWJlciwgdHJhY2tpbmc6IHN0cmluZyA9IFwieFwiKTogdm9pZCB7XG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cbiAgICBjb25zdCBtYXhPZmZzZXQ6IG51bWJlciA9IDAgLSAob2Zmc2V0ICsgMSk7XG5cbiAgICBjb25zdCB0YXJnZXQ6IEhUTUxFbGVtZW50ID0gPEhUTUxFbGVtZW50PmUuY3VycmVudFRhcmdldDtcblxuICAgIGNvbnN0IGN1cnJQb3M6IHN0cmluZyA9IHRhcmdldC5zdHlsZS50cmFuc2Zvcm07XG4gICAgbGV0IG5ld1BvczogbnVtYmVyID0gMDtcblxuICAgIGlmIChjdXJyUG9zKSB7XG5cbiAgICAgICAgbmV3UG9zID0gVG91Y2hUcmFja2VyLkdldE51bWJlclZhbHVlKGN1cnJQb3MpO1xuICAgIH1cblxuICAgIC8vIGlmIChuZXdQb3MgPiBtYXhPZmZzZXQpIHtcblxuICAgICAgICBUb3VjaFRyYWNrZXIuQ2hlY2tJZkZpcnN0VG91Y2goZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLCBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkpO1xuXG4gICAgICAgIGNvbnN0IGRpZmZYOiBudW1iZXIgPSAoVG91Y2hUcmFja2VyLkxhc3RUb3VjaE1vdmVYIHx8IFRvdWNoVHJhY2tlci5MYXN0VG91Y2hTdGFydFgpIC0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICBjb25zdCBkaWZmWTogbnVtYmVyID0gKFRvdWNoVHJhY2tlci5MYXN0VG91Y2hNb3ZlWSB8fCBUb3VjaFRyYWNrZXIuTGFzdFRvdWNoU3RhcnRZKSAtIGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgICAgVG91Y2hUcmFja2VyLkxhc3RUb3VjaE1vdmVYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICBUb3VjaFRyYWNrZXIuTGFzdFRvdWNoTW92ZVkgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFk7XG5cbiAgICAgICAgaWYgKHRyYWNraW5nID09PSBcInhcIikge1xuXG4gICAgICAgICAgICAvLyBNb3ZpbmcgbGVmdFxuICAgICAgICAgICAgaWYgKGRpZmZYID4gMCkge1xuXG4gICAgICAgICAgICAgICAgbmV3UG9zLS07XG5cbiAgICAgICAgICAgICAgICBpZiAobmV3UG9zID4gbWF4T2Zmc2V0KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7bmV3UG9zfXZ3KWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTW92aW5nIHJpZ2h0XG4gICAgICAgICAgICBlbHNlIHtcblxuICAgICAgICAgICAgICAgIG5ld1BvcysrO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5ld1BvcyA8IDEpIHtcblxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtuZXdQb3N9dncpYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHJhY2tpbmcgPT09IFwieVwiKSB7XG5cbiAgICAgICAgICAgIC8vIE1vdmluZyBkb3duXG4gICAgICAgICAgICBpZiAoZGlmZlkgPiAxKSB7XG5cbiAgICAgICAgICAgICAgICBuZXdQb3MgPSBuZXdQb3MgLSAoMSAqIFRvdWNoVHJhY2tlci5BY2NlbGVyYXRvcik7XG5cbiAgICAgICAgICAgICAgICAvLy0tbmV3UG9zO1xuXG4gICAgICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7bmV3UG9zfXZoKWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNb3ZpbmcgdXBcbiAgICAgICAgICAgIGVsc2UgaWYgKGRpZmZZIDwgLTAuNSkge1xuXG4gICAgICAgICAgICAgICAgbmV3UG9zID0gbmV3UG9zICsgKDEgKiBUb3VjaFRyYWNrZXIuQWNjZWxlcmF0b3IpO1xuXG4gICAgICAgICAgICAgICAgLy8gKytuZXdQb3M7XG5cbiAgICAgICAgICAgICAgICBpZiAobmV3UG9zID4gMC41KSBuZXdQb3MgPSAwO1xuXG4gICAgICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7bmV3UG9zfXZoKWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIC8vIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNsaWRlVG9SZXZlYWxFbmQoZTogVG91Y2hFdmVudCwgbWF4T2Zmc2V0OiBudW1iZXIsIGF4aXM6IHN0cmluZyA9IFwieFwiKTogdm9pZCB7XG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cbiAgICBjb25zdCB0YXJnZXQ6IEhUTUxFbGVtZW50ID0gPEhUTUxFbGVtZW50PmUuY3VycmVudFRhcmdldDtcblxuICAgIGNvbnN0IGN1cnJMZWZ0OiBzdHJpbmcgPSB0YXJnZXQuc3R5bGUudHJhbnNmb3JtO1xuICAgIGxldCBuZXdMZWZ0OiBudW1iZXI7XG5cbiAgICBpZiAoY3VyckxlZnQpIHtcblxuICAgICAgICBuZXdMZWZ0ID0gVG91Y2hUcmFja2VyLkdldE51bWJlclZhbHVlKHRhcmdldC5zdHlsZS50cmFuc2Zvcm0pO1xuICAgIH1cblxuICAgIGlmIChheGlzID09PSBcInhcIikge1xuXG4gICAgICAgIGNvbnN0IHZlbG9jaXR5OiBudW1iZXIgPSBjYWxjdWxhdGVWZWxvY2l0eU9mQ3VycmVudFRvdWNoKCk7XG5cbiAgICAgICAgaWYgKHZlbG9jaXR5ID4gMS4yKSB7XG5cbiAgICAgICAgICAgIHRhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgwdncpYDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2ZWxvY2l0eSA8IC0xLjIpIHtcblxuICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke21heE9mZnNldH12dylgO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuXG4gICAgICAgICAgICBjb25zdCBoYWxmV2F5OiBudW1iZXIgPSBNYXRoLnJvdW5kKG1heE9mZnNldCAvIDIpO1xuXG4gICAgICAgICAgICBpZiAobmV3TGVmdCA8IC1oYWxmV2F5KSB7XG5cbiAgICAgICAgICAgICAgICAvLyBTbmFwIHRvIHJldmVhbFxuXG4gICAgICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke21heE9mZnNldH12dylgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAvLyBTbmFwIHRvIHJlc2V0XG5cbiAgICAgICAgICAgICAgICB0YXJnZXQuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDB2dylcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIFRvdWNoVHJhY2tlci5SZXNldCgpO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVWZWxvY2l0eU9mQ3VycmVudFRvdWNoKCk6IG51bWJlciB7XG5cbiAgICBjb25zdCBmaW5hbFBvczogbnVtYmVyID0gVG91Y2hUcmFja2VyLkxhc3RUb3VjaE1vdmVYO1xuICAgIGNvbnN0IGluaXRpYWxQb3M6IG51bWJlciA9IFRvdWNoVHJhY2tlci5MYXN0VG91Y2hTdGFydFg7XG5cbiAgICBjb25zdCBmaW5hbFRpbWU6IG51bWJlciA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGNvbnN0IGluaXRpYWxUaW1lOiBudW1iZXIgPSBUb3VjaFRyYWNrZXIuTGFzdFRvdWNoU3RhcnRUaW1lO1xuXG4gICAgY29uc3QgcG9zOiBudW1iZXIgPSBmaW5hbFBvcyAtIGluaXRpYWxQb3M7XG4gICAgY29uc3QgdGltZTogbnVtYmVyID0gZmluYWxUaW1lIC0gaW5pdGlhbFRpbWU7XG5cbiAgICByZXR1cm4gcG9zIC8gdGltZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNsaWRlQXdheU1vdGlvbihlOiBUb3VjaEV2ZW50LCB0cmFja2luZzogc3RyaW5nID0gXCJ4XCIpOiB2b2lkIHtcblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblxuICAgIFRvdWNoVHJhY2tlci5DaGVja0lmRmlyc3RUb3VjaChlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsIGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSk7XG5cbiAgICBUb3VjaFRyYWNrZXIuTGFzdFRvdWNoTW92ZVggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XG4gICAgVG91Y2hUcmFja2VyLkxhc3RUb3VjaE1vdmVZID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2xpZGVBd2F5RW5kKGU6IFRvdWNoRXZlbnQsIGxlZnRBY3Rpb24/OiAoKSA9PiB2b2lkLCByaWdodEFjdGlvbj86ICgpID0+IHZvaWQsIGF4aXM6IHN0cmluZyA9IFwieFwiLCB0aHJlc2hvbGQ6IG51bWJlciA9IDUpOiB2b2lkIHtcblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblxuICAgIGlmIChheGlzID09PSBcInhcIikge1xuXG4gICAgICAgIGNvbnN0IHZlbG9jaXR5OiBudW1iZXIgPSBjYWxjdWxhdGVWZWxvY2l0eU9mQ3VycmVudFRvdWNoKCk7XG5cbiAgICAgICAgaWYgKHZlbG9jaXR5ID4gdGhyZXNob2xkICYmIHJpZ2h0QWN0aW9uKSB7XG5cbiAgICAgICAgICAgIHJpZ2h0QWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmVsb2NpdHkgPCAtdGhyZXNob2xkICYmIGxlZnRBY3Rpb24pIHtcblxuICAgICAgICAgICAgbGVmdEFjdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgVG91Y2hUcmFja2VyLlJlc2V0KCk7XG59IiwiaW1wb3J0IHsgSW5maW5pdHlXaW5kb3cgfSBmcm9tIFwiLi4vR2xvYmFsc1wiO1xuXG4vKipcbiAqIEEgaGVscGVyIGZ1bmN0aW9uIGZvciBwYXNzaW5nIHRoZSBUUyB0eXBlIGNoZWNrIG9uIEpTWCBzdHlsZXMuXG4gKiBcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZpbml0aW9ucyBKU09OIG9iamVjdCBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvblxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XG5leHBvcnQgZnVuY3Rpb24gYnVpbGRTdHlsZXMgKGRlZmluaXRpb25zOiBhbnkpOiBDU1NTdHlsZURlY2xhcmF0aW9uIHtcblxuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZWxlbWVudC5zdHlsZSwgZGVmaW5pdGlvbnMpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBzdXBwbGllZCBDU1MgdmFyaWFibGUgbmFtZS5cbiAqIFxuICogQHBhcmFtIHtTdHJpbmd9IGNzc1ZhciBOYW1lIG9mIHRoZSB2YXJpYWJsZSB0byBmaW5kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDU1NWYXJpYWJsZSAoY3NzVmFyOiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgY29uc3QgdmFsdWU6IHN0cmluZyA9IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpLmdldFByb3BlcnR5VmFsdWUoY3NzVmFyKTtcblxuICAgIHJldHVybiB2YWx1ZSA/IHZhbHVlLnRyaW0oKSA6IHZhbHVlO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgaWYgdGhlIGN1cnJlbnQgYnJvd3NlciBpcyBGaXJlZm94LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNGaXJlZm94ICgpOiBib29sZWFuIHtcblxuICAgIHJldHVybiB0eXBlb2YgKHdpbmRvdyBhcyBJbmZpbml0eVdpbmRvdykuSW5zdGFsbFRyaWdnZXIgIT09IFwidW5kZWZpbmVkXCI7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGUgY3VycmVudCBicm93c2VyIGlzIEludGVybmV0IEV4cGxvcmVyLlxuICogXG4gKiBAcGFyYW0ge1N0cmluZz19IHVzZXJBZ2VudCBVc2VyIGFnZW50IHN0cmluZyB0byB0ZXN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0lFICh1c2VyQWdlbnQ/OiBzdHJpbmcpOiBib29sZWFuIHtcblxuICAgIHVzZXJBZ2VudCA9IHVzZXJBZ2VudCB8fCBuYXZpZ2F0b3IudXNlckFnZW50O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgdXNlckFnZW50LmluZGV4T2YoXCJNU0lFIFwiKSA+IC0xIHx8XG4gICAgICAgIHVzZXJBZ2VudC5pbmRleE9mKFwiVHJpZGVudC9cIikgPiAtMSB8fFxuICAgICAgICB1c2VyQWdlbnQuaW5kZXhPZihcIkVkZ2UvXCIpID4gLTFcbiAgICApO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgaWYgdGhlIGJyb3dzZXIgaXMgSW50ZXJuZXQgRXhwbG9yZXIgMTEgb3Igbm90LiBJZGVhbGx5XG4gKiB1c2UgdGhlIGlzSUUgZnVuY3Rpb24gaW5zdGVhZCBvZiB0aGlzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNJRTExICgpOiBib29sZWFuIHtcblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcbiAgICByZXR1cm4gISEod2luZG93IGFzIGFueSkuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGU7XG59XG5cbi8qKlxuICogRGV0ZWN0cyBpZiB3ZSdyZSBydW5uaW5nIGluc2lkZSBDVElcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQ1RJICgpOiBib29sZWFuIHtcblxuICAgIHJldHVybiAod2luZG93IGFzIEluZmluaXR5V2luZG93KS5jdGkgPyB0cnVlIDogZmFsc2U7XG59XG5cbi8qKlxuICogRGVlcCBjbG9uZXMgYW4gb2JqZWN0IHVzaW5nIHRoZSBKU09OLnN0cmluZ2lmeSAvIHBhcnNlIG1ldGhvZC5cbiAqIFxuICogQHBhcmFtIG9iaiBPYmplY3QgdG8gZGVlcCBjbG9uZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVlcENsb25lPFQ+IChvYmo6IFQpOiBUIHtcblxuICAgIHRyeSB7XG5cbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG4gICAgfVxuICAgIGNhdGNoIHtcblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgcmFuZG9tIEdVSUQuXG4gKiBDYW4gb3B0aW9uYWxseSBiZSB1c2VkIHRvIGdlbmVyYXRlIGEgc2hvcnQgaWQgc2l4IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLlxuICogXG4gKiBAcGFyYW0gc2hvcnRJZCBTZXQgdG8gdHJ1ZSB0byBnZW5lcmF0ZSBhIHNob3J0IHNpeCBzdHJpbmcgaWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlR3VpZCAoc2hvcnRJZDogYm9vbGVhbiA9IGZhbHNlKTogc3RyaW5nIHtcblxuICAgIGlmIChzaG9ydElkKSB7XG5cbiAgICAgICAgbGV0IGZpcnN0UGFydDogbnVtYmVyIHwgc3RyaW5nID0gKE1hdGgucmFuZG9tKCkgKiA0NjY1NikgfCAwO1xuICAgICAgICBsZXQgc2Vjb25kUGFydDogbnVtYmVyIHwgc3RyaW5nID0gKE1hdGgucmFuZG9tKCkgKiA0NjY1NikgfCAwO1xuICAgICAgICBmaXJzdFBhcnQgPSAoXCIwMDBcIiArIGZpcnN0UGFydC50b1N0cmluZygzNikpLnNsaWNlKC0zKTtcbiAgICAgICAgc2Vjb25kUGFydCA9IChcIjAwMFwiICsgc2Vjb25kUGFydC50b1N0cmluZygzNikpLnNsaWNlKC0zKTtcbiAgICAgICAgcmV0dXJuIGZpcnN0UGFydCArIHNlY29uZFBhcnQ7XG4gICAgfVxuICAgIGVsc2Uge1xuXG4gICAgICAgIGxldCBkOiBudW1iZXIgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIGlmICh3aW5kb3cucGVyZm9ybWFuY2UgJiYgdHlwZW9mIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cgPT09IFwiZnVuY3Rpb25cIikge1xuXG4gICAgICAgICAgICBkICs9IHBlcmZvcm1hbmNlLm5vdygpOyAvLyB1c2UgaGlnaC1wcmVjaXNpb24gdGltZXIgaWYgYXZhaWxhYmxlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gXCJ4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHhcIi5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjOiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICAgICAgICBjb25zdCByOiBudW1iZXIgPSAoZCArIE1hdGgucmFuZG9tKCkgKiAxNikgJSAxNiB8IDA7XG4gICAgICAgICAgICBkID0gTWF0aC5mbG9vcihkIC8gMTYpO1xuICAgICAgICAgICAgcmV0dXJuIChjID09PSBcInhcIiA/IHIgOiAociAmIDB4MyB8IDB4OCkpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vKipcbiAqIERlZmVycyBhIGZ1bmN0aW9uIGV4ZWN1dGlvblxuICogQ2FuIGJlIHVzZWQgdG8gZGVmZXIgYSBmdW5jdGlvbiBleGVjdXRpb24gdW50aWwgdGhlIG5leHQgbG9vcC5cbiAqIFVzZWQgZm9yIGRlbGF5aW5nIGZ1bmN0aW9ucyB3aGVuIGRvaW5nIHRoaW5ncyBpbiBhc3luYy5cbiAqIFxuICogQHBhcmFtIGZuYyBGdW5jdGlvbiB0byBkZWZlclxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVmZXIgKGZuYzogRnVuY3Rpb24pOiB2b2lkIHtcblxuICAgIHNldFRpbWVvdXQoZm5jLCAwKTtcbn1cbiIsImltcG9ydCB7IFdTRXZlbnRBcmdzIH0gZnJvbSBcIi4uLy4uL2V2ZW50c1wiO1xuaW1wb3J0IHsgU29ja2V0Q29uZmlnLCBXU01lc3NhZ2VXcmFwcGVyLCBXU091dGJvdW5kTWVzc2FnZSB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgTG9nZ2VyVHlwZXMgfSBmcm9tIFwiLi4vbG9nZ2VyL2xvZ2dlclwiO1xuXG5pbnRlcmZhY2UgV2ViU29ja2V0RXZlbnQgZXh0ZW5kcyBFdmVudCB7XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XG4gICAgZGF0YT86IGFueTtcbiAgICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBXZWJTb2NrZXRDbGllbnQge1xuXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG5cbiAgICBwcm90ZWN0ZWQgbG9nZ2VyOiBMb2dnZXI7XG5cbiAgICAvLyA9PT0gUHJpdmF0ZSBQcm9wcyA9PT0gLy9cblxuICAgIHByaXZhdGUgY29uZmlnOiBTb2NrZXRDb25maWc7XG4gICAgcHJpdmF0ZSBzb2NrZXQ6IFdlYlNvY2tldDtcbiAgICBwcml2YXRlIGZvcmNlQ2xvc2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvLyBEZXRlcm1pbmVzIGlmIHRoZSBjbGllbnQgd2lsbCBoYW5kbGUgYXV0b21hdGljIGNvbm5lY3Rpb24gcmV0cmllc1xuICAgIHByaXZhdGUgZW5hYmxlQXV0b1JlY29ubmVjdDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgLy8gUGluZyB0aW1lb3V0XG4gICAgcHJpdmF0ZSBwaW5nVGltZW91dDogbnVtYmVyO1xuICAgIC8vIFBpbmcgd2FpdGluZyB0aW1lXG4gICAgcHJpdmF0ZSBwaW5nV2FpdGluZ1RpbWU6IG51bWJlciA9IDE1MDAwO1xuICAgIC8vIFRpbWUgbGFzdCBwaW5nIHdhcyByZWNlaXZlZFxuICAgIHByaXZhdGUgbGFzdFBpbmdSZWNlaXZlZDogbnVtYmVyID0gMDtcbiAgICAvLyBIb2xkZXIgZm9yIHRoZSB0aW1lb3V0XG4gICAgcHJpdmF0ZSByZWNvbm5lY3RUaW1lb3V0OiBudW1iZXI7XG4gICAgLy8gTVMgdG8gZGVsYXkgYmVmb3JlIHRyeWluZyB0byByZWNvbm5lY3RcbiAgICBwcml2YXRlIHJlY29ubmVjdEludGVydmFsOiBudW1iZXIgPSA1MDAwO1xuICAgIC8vIERlY2F5IHJlY29ubmVjdCBhdHRlbXB0cyBpbiBzZWNvbmRzXG4gICAgcHJpdmF0ZSByZWNvbm5lY3REZWNheTogbnVtYmVyID0gMS41O1xuICAgIC8vIFJlY29ubmVjdGlvbiBhdHRlbXB0c1xuICAgIHByaXZhdGUgcmVjb25uZWN0QXR0ZW1wdHM6IG51bWJlciA9IC0xO1xuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxuICAgIHByaXZhdGUgbWVzc2FnZUNhbGxiYWNrOiAobWVzc2FnZTogV1NFdmVudEFyZ3MpID0+IHZvaWQ7XG5cbiAgICAvLyA9PT0gQ29uc3RydWN0b3IgPT09IC8vXG5cbiAgICBjb25zdHJ1Y3RvciAod2Vic29ja2V0Q29uZmlnOiBTb2NrZXRDb25maWcsIGxvZ2dlcjogTG9nZ2VyLCBtZXNzYWdlQ2FsbGJhY2s6IChtZXNzYWdlOiBXU0V2ZW50QXJncykgPT4gdm9pZCkge1xuXG4gICAgICAgIHRoaXMuY29uZmlnID0gd2Vic29ja2V0Q29uZmlnO1xuICAgICAgICB0aGlzLmlkID0gdGhpcy5jb25maWcuaWQ7XG4gICAgICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuICAgICAgICB0aGlzLm1lc3NhZ2VDYWxsYmFjayA9IG1lc3NhZ2VDYWxsYmFjaztcblxuICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICAgICAgdGhpcy5fYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIC8vID09PSBQcml2YXRlID09PSAvL1xuXG4gICAgcHJpdmF0ZSBfYmluZEV2ZW50cyAoKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5zb2NrZXQub25vcGVuID0gKGUpID0+IHRoaXMuX29uT3BlbihlKTtcbiAgICAgICAgdGhpcy5zb2NrZXQub25tZXNzYWdlID0gKG0pID0+IHRoaXMuX29uTWVzc2FnZShtKTtcbiAgICAgICAgdGhpcy5zb2NrZXQub25jbG9zZSA9IChlKSA9PiB0aGlzLl9vbkNsb3NlKGUpO1xuICAgIH1cblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcbiAgICBwcml2YXRlIF9vbk9wZW4gKGV2ZW50OiBXZWJTb2NrZXRFdmVudCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dnZXJUeXBlcy5XU0NsaWVudCwgYE9wZW5lZCBzb2NrZXQ6ICR7dGhpcy5jb25maWcudXJpfWAsIGV2ZW50KTtcblxuICAgICAgICB0aGlzLmZvcmNlQ2xvc2UgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5lbmFibGVBdXRvUmVjb25uZWN0KSB7XG5cbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJlY29ubmVjdFRpbWVvdXQpO1xuICAgICAgICAgICAgdGhpcy5yZWNvbm5lY3RBdHRlbXB0cyA9IC0xO1xuXG4gICAgICAgICAgICB0aGlzLnBpbmdUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLl9waW5nVGltZW91dCgpLCB0aGlzLnBpbmdXYWl0aW5nVGltZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlKHsgdHlwZTogXCJyZWdpc3RlclwiIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX29uQ2xvc2UgKGV2ZW50OiBXZWJTb2NrZXRFdmVudCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dnZXJUeXBlcy5XU0NsaWVudCwgYENsb3NlZCBzb2NrZXQ6ICR7dGhpcy5jb25maWcudXJpfWAsIGV2ZW50KTtcblxuICAgICAgICAvLyBXZSBoYXZlIGJlZW4gZGlzY29ubmVjdGVkIGJ5IHNvbWV0aGluZywgc28gYXR0ZW1wdCB0byByZWNvbm5lY3RcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlQXV0b1JlY29ubmVjdCAmJiAhdGhpcy5mb3JjZUNsb3NlKSB7XG5cbiAgICAgICAgICAgIHRoaXMucmVjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9vbk1lc3NhZ2UgKG1lc3NhZ2U6IFdlYlNvY2tldEV2ZW50KTogdm9pZCB7XG5cbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgY29uc3QgZGF0YTogV1NNZXNzYWdlV3JhcHBlciA9IEpTT04ucGFyc2UobWVzc2FnZS5kYXRhKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZW5hYmxlQXV0b1JlY29ubmVjdCAmJiBkYXRhLnBheWxvYWQudHlwZSA9PT0gXCJwaW5nXCIpIHtcblxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnBpbmdUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5waW5nVGltZW91dDtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UoeyB0eXBlOiBcInBpbmctcmVzcG9uc2VcIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYXJnczogV1NFdmVudEFyZ3MgPSBuZXcgV1NFdmVudEFyZ3MoZGF0YS5wYXlsb2FkLmFjdGlvbiwgZGF0YS5wYXlsb2FkLnBheWxvYWQpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlQ2FsbGJhY2soYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGV4KSB7XG5cbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGV4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3BpbmdUaW1lb3V0ICgpOiB2b2lkIHtcblxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5waW5nVGltZW91dCk7XG4gICAgICAgIHRoaXMuc29ja2V0LmNsb3NlKCk7XG4gICAgfVxuXG4gICAgLy8gPT09IFB1YmxpYyA9PT0gLy9cblxuICAgIHB1YmxpYyBjb25uZWN0ICgpOiB2b2lkIHtcblxuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zb2NrZXQ7XG4gICAgICAgICAgICB0aGlzLnNvY2tldCA9IG5ldyBXZWJTb2NrZXQodGhpcy5jb25maWcudXJpKTtcbiAgICAgICAgICAgIHRoaXMuX2JpbmRFdmVudHMoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXgpIHtcblxuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJXZWJzb2NrZXQgY29ubmVjdGlvbiBlcnJvcjpcIiwgZXgpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5lbmFibGVBdXRvUmVjb25uZWN0KSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlY29ubmVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGRpc2Nvbm5lY3QgKCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuZm9yY2VDbG9zZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc29ja2V0LmNsb3NlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlY29ubmVjdCAoKTogdm9pZCB7XG5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucmVjb25uZWN0VGltZW91dCk7XG4gICAgICAgICsrdGhpcy5yZWNvbm5lY3RBdHRlbXB0cztcblxuICAgICAgICBjb25zdCByZWNvbm5lY3RJbjogbnVtYmVyID0gdGhpcy5yZWNvbm5lY3RJbnRlcnZhbCAqIE1hdGgucG93KHRoaXMucmVjb25uZWN0RGVjYXksIHRoaXMucmVjb25uZWN0QXR0ZW1wdHMpO1xuXG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhMb2dnZXJUeXBlcy5XU0NsaWVudCwgXCJBdHRlbXB0aW5nIHRvIHJlY29ubmVjdCBpbjpcIiwgcmVjb25uZWN0SW4pO1xuXG4gICAgICAgIHRoaXMucmVjb25uZWN0VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jb25uZWN0KCksIHJlY29ubmVjdEluKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VuZE1lc3NhZ2UgKG1lc3NhZ2U6IFdTT3V0Ym91bmRNZXNzYWdlKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCFtZXNzYWdlLmlkKSB7XG5cbiAgICAgICAgICAgIG1lc3NhZ2UuaWQgPSB0aGlzLmNvbmZpZy5pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc0Nvbm5lY3RlZCAoKTogYm9vbGVhbiB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc29ja2V0LnJlYWR5U3RhdGUgPT09IDE7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gXCJAcG9seW1lci9saXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgVGVtcGxhdGVSZXN1bHQgfSBmcm9tIFwibGl0LWh0bWxcIjtcbmltcG9ydCB7IENsaWVudE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vY2xpZW50L2NsaWVudE1hbmFnZXJcIjtcbmltcG9ydCB7IENsaWVudEV2ZW50cyB9IGZyb20gXCIuLi8uLi9ldmVudHNcIjtcbmltcG9ydCB7IFJlZHV4U3RhdGUsIFJvdXRlUXVlcnlQYXJhbXMgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZVByb3BzIHtcblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlTGl0Q29tcG9uZW50PFQgZXh0ZW5kcyBDbGllbnRNYW5hZ2VyID0gQ2xpZW50TWFuYWdlciwgUCBleHRlbmRzIE9iamVjdCA9IHt9PiBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gICAgcHJpdmF0ZSBzdHlsZXM6IHN0cmluZ1tdO1xuXG4gICAgcHJvdGVjdGVkIHNoYWRvdzogYm9vbGVhbjtcbiAgICBwcm90ZWN0ZWQgcXVlcnk6IFJvdXRlUXVlcnlQYXJhbXM7XG4gICAgcHJvdGVjdGVkIG1hbmFnZXJOYW1lOiBzdHJpbmcgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpbmZpbml0eS1mcmFtZXdvcmstYXBwLW5hbWVcIik7XG4gICAgcHJvdGVjdGVkIG1hbmFnZXI6IFQ7XG5cbiAgICAvLyA9PT0gUmVuZGVyIGxpZmVjeWNsZSBldmVudHMgPT09IC8vXG5cbiAgICBhYnN0cmFjdCBhc3luYyBfaW5pdCAoKTogUHJvbWlzZTx2b2lkPjtcblxuICAgIGFic3RyYWN0IF9zZXR1cEV2ZW50TGlzdGVuZXJzICgpOiB2b2lkO1xuXG4gICAgcHJvdGVjdGVkIG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogUmVkdXhTdGF0ZSk6IFN0YXRlUHJvcHMgPT4ge1xuXG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50U3R5bGVzICgpOiBzdHJpbmcge1xuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGFic3RyYWN0IGNvbXBvbmVudE1hcmt1cCAocHJvcHM6IFApOiBUZW1wbGF0ZVJlc3VsdDtcblxuICAgIC8vID09PSBQcml2YXRlID09PSAvL1xuXG4gICAgcHJpdmF0ZSBhc3luYyBfYmluZE1hbmFnZXIgKGV2OiBFdmVudCk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIHRoaXMubWFuYWdlciA9IENsaWVudE1hbmFnZXIuR2V0UmVnaXN0cmF0aW9uKHRoaXMubWFuYWdlck5hbWUgfHwgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaW5maW5pdHktZnJhbWV3b3JrLWFwcC1uYW1lXCIpKSBhcyBUO1xuXG4gICAgICAgIGlmICh0aGlzLm1hbmFnZXIpIHtcblxuICAgICAgICAgICAgdGhpcy5fc3RhdGVMaXN0ZW5lcigpO1xuICAgICAgICAgICAgdGhpcy5fc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5faW5pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRTdHlsZXMgKCk6IHN0cmluZyB7XG5cbiAgICAgICAgaWYgKHRoaXMuc3R5bGVzICYmIHRoaXMuc3R5bGVzLmxlbmd0aCkge1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdHlsZXMucmVkdWNlKChhY2MsIGN1cikgPT4gYWNjICs9IGN1ciwgXCJcIik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb21wb25lbnRTdHlsZXM6IHN0cmluZyA9IHRoaXMuY29tcG9uZW50U3R5bGVzKCk7XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFN0eWxlcyB8fCBcIlwiO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3N0YXRlTGlzdGVuZXIgKCk6IHZvaWQge1xuXG4gICAgICAgIGlmICh0aGlzLm1hcFN0YXRlVG9Qcm9wcykge1xuXG4gICAgICAgICAgICB0aGlzLm1hbmFnZXIub24oQ2xpZW50RXZlbnRzLlJlZHV4VXBkYXRlLCAoKSA9PiB0aGlzLl91cGRhdGVQcm9wcygpKTtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVByb3BzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF91cGRhdGVQcm9wcyAoKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKHRoaXMubWFuYWdlci5yZWR1eCkge1xuXG4gICAgICAgICAgICBjb25zdCBzdGF0ZTogUmVkdXhTdGF0ZSA9IHRoaXMubWFuYWdlci5yZWR1eC5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgY29uc3QgcHJvcHM6IFN0YXRlUHJvcHMgPSB0aGlzLm1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSk7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKHggPT4ge1xuXG4gICAgICAgICAgICAgICAgdGhpc1t4XSA9IHByb3BzW3hdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyA9PT0gTGlmZWN5Y2xlIEV2ZW50cyA9PT0gLy9cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrICgpOiB2b2lkIHtcblxuICAgICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgICAgIGNvbnN0IG1hbmFnZXI6IFQgPSBDbGllbnRNYW5hZ2VyLkdldFJlZ2lzdHJhdGlvbih0aGlzLm1hbmFnZXJOYW1lIHx8IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImluZmluaXR5LWZyYW1ld29yay1hcHAtbmFtZVwiKSkgYXMgVDtcblxuICAgICAgICBpZiAoIW1hbmFnZXIgfHwgIW1hbmFnZXIuaXNSZWFkeSkge1xuXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKENsaWVudEV2ZW50cy5DbGllbnRNYW5hZ2VyUmVhZHksIChldikgPT4gdGhpcy5fYmluZE1hbmFnZXIoZXYpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcblxuICAgICAgICAgICAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlcjtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlTGlzdGVuZXIoKTtcbiAgICAgICAgICAgIHRoaXMuX3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oYXN5bmMgKCkgPT4gYXdhaXQgdGhpcy5faW5pdCgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgIHByb3RlY3RlZCBfY3JlYXRlUm9vdCAoKTogYW55IHtcblxuICAgICAgICBpZiAodGhpcy5zaGFkb3cpIHtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXR0YWNoU2hhZG93KHttb2RlIDogXCJvcGVuXCJ9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyA9PT0gUmVuZGVyID09PSAvL1xuXG4gICAgcHJpdmF0ZSBfcmVuZGVyU3R5bGUgKCk6IFRlbXBsYXRlUmVzdWx0IHtcblxuICAgICAgICByZXR1cm4gaHRtbGA8c3R5bGU+JHt0aGlzLmdldFN0eWxlcygpfTwvc3R5bGU+YDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3JlbmRlciAocHJvcHM6IFApOiBUZW1wbGF0ZVJlc3VsdCB7XG5cbiAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICAke3RoaXMuX3JlbmRlclN0eWxlKCl9XG4gICAgICAgICAgICAke3RoaXMuY29tcG9uZW50TWFya3VwKHByb3BzKX1cbiAgICAgICAgYDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL2xpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBUZW1wbGF0ZVJlc3VsdCB9IGZyb20gXCJsaXQtaHRtbFwiO1xuaW1wb3J0IHsgQ2xpZW50TWFuYWdlciB9IGZyb20gXCIuLi8uLi9jbGllbnQvY2xpZW50TWFuYWdlclwiO1xuaW1wb3J0IHsgQmFzZUxpdENvbXBvbmVudCB9IGZyb20gXCIuL1wiO1xuaW1wb3J0IHsgcHJvcCB9IGZyb20gXCIuL2RlY29yYXRvcnNcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VMaXRXaXRoTG9hZGVyPFQgZXh0ZW5kcyBDbGllbnRNYW5hZ2VyID0gQ2xpZW50TWFuYWdlcj4gZXh0ZW5kcyBCYXNlTGl0Q29tcG9uZW50PFQ+IHtcblxuICAgIEBwcm9wKHsgdHlwZTogQm9vbGVhbiB9KVxuICAgIHByb3RlY3RlZCBpc0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8vID09PSBQcm90ZWN0ZWQgPT09IC8vXG5cbiAgICBwcm90ZWN0ZWQgdG9nZ2xlTG9hZGluZyAodmFsdWU/OiBib29sZWFuKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSAhdGhpcy5pc0xvYWRpbmc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG5cbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVuZGVyTG9hZGVyICgpOiBUZW1wbGF0ZVJlc3VsdCB7XG5cbiAgICAgICAgcmV0dXJuIGh0bWxgPHdjLWxvYWRpbmctc3Bpbm5lciBpY29uQ29sb3I9XCJibGFja1wiIHNob3dpbmc9XCIkeyB0aGlzLmlzTG9hZGluZyB9XCI+PC93Yy1sb2FkaW5nLXNwaW5uZXI+YDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBpc0ZpcmVmb3gsIGlzSUUgfSBmcm9tIFwiLi4vLi4vLi4vY2xpZW50XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50RGVmaW5pdGlvbiB7XG5cbiAgICB0YWc6IHN0cmluZztcbiAgICBzdHlsZXM/OiBzdHJpbmdbXTtcbiAgICBzaGFkb3c/OiBib29sZWFuIHwgc3RyaW5nO1xufVxuXG4vKipcbiAqIFVzZWQgdG8gZGVmaW5lIGEgY29tcG9uZW50IGFuZCBoYW5kbGUgcmVnaXN0cmF0aW9uLiBZb3UgY2FuXG4gKiBwcm92aWRlIHRoaXMgZGVmaW5pdGlvbiBwYXJhbWV0ZXIgd2hpY2ggaW5jbHVkZXMgdGhlIHN0eWxlc1xuICogZm9yIHRoZSBjb21wb25lbnQsIHRhZyBkZWZpbml0aW9uIGFuZCBvcHRpb25hbGx5IGlmIGl0IHdpbGxcbiAqIHVzZSB0aGUgU2hhZG93RE9NIG9yIG5vdC5cbiAqIFxuICogQHBhcmFtIHtPYmplY3R9IGRlZmluaXRpb24gQ29tcG9uZW50IGRlZmluaXRpb24gb3B0aW9uc1xuICogQHBhcmFtIHtTdHJpbmd9IGRlZmluaXRpb24udGFnIFRoZSBjb21wb25lbnQgdGFnIG5hbWVcbiAqIEBwYXJhbSB7QXJyYXl9IGRlZmluaXRpb24uc3R5bGVzIEFuIGFycmF5IG9mIHN0eWxlc2hlZXQgcGF0aHNcbiAqIEBwYXJhbSB7Qm9vbGVhbiB8IFN0cmluZ30gZGVmaW5pdGlvbi5zaGFkb3cgVXNlIFNoYWRvd0RPTSBvciBub3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvbmVudCAoZGVmaW5pdGlvbjogQ29tcG9uZW50RGVmaW5pdGlvbik6IEZ1bmN0aW9uIHtcblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcbiAgICByZXR1cm4gPFQgZXh0ZW5kcyB7bmV3KC4uLmFyZ3M6IGFueVtdKToge319Pihjb25zdHJ1Y3RvcjogVCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nOiBIVE1MRWxlbWVudCA9IGN1c3RvbUVsZW1lbnRzLmdldChkZWZpbml0aW9uLnRhZyk7XG4gICAgICAgIGlmICghZXhpc3RpbmcpIHtcblxuICAgICAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKGRlZmluaXRpb24udGFnLCBjb25zdHJ1Y3Rvcik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuc3R5bGVzID0gZGVmaW5pdGlvbi5zdHlsZXM7XG4gICAgICAgIGNvbnN0cnVjdG9yLnByb3RvdHlwZS5zaGFkb3cgPSBlbmFibGVTaGFkb3coZGVmaW5pdGlvbi5zaGFkb3cpO1xuXG4gICAgICAgIHJldHVybiBjbGFzcyBleHRlbmRzIGNvbnN0cnVjdG9yIHtcblxuICAgICAgICAgICAgc3RhdGljIGdldCBpcyAoKTogc3RyaW5nIHtcblxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uLnRhZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RhdGljIHNldCBzdHlsZXMgKHZhbDogc3RyaW5nW10pIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGVzID0gdmFsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdGF0aWMgc2V0IHNoYWRvdyAodmFsOiBib29sZWFuKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNoYWRvdyA9IHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9O1xufVxuXG4vKipcbiAqIERldGVybWluZXMgaWYgdGhpcyBjb21wb25lbnQgc2hvdWxkIHVzZSB0aGUgU2hhZG93RE9NIG9yIG5vdC5cbiAqIFRoZSBkZWZhdWx0IGlzIHRoYXQgaWYgdGhlIFNoYWRvd0RPTSBpcyBhdmFpYWJsZSBpbiB0aGUgYnJvd3NlclxuICogdGhlbiBjb21wb25lbnRzIHdpbGwgdXNlIGl0LlxuICogXG4gKiBZb3UgY2FuIG92ZXJyaWRlIHRoaXMgYnkgcHJvdmlkaW5nIHRoZSBwcmVmZXJlbmNlIHByb3BlcnR5LiBUaGVcbiAqIGF2YWlsYWJsZSBvcHRpb25zIGFyZTogdHJ1ZSwgZmFsc2Ugb3IgXCJpZi1hdmFpbGFibGVcIi5cbiAqIFxuICogQHBhcmFtIHtTdHJpbmcgfCBCb29sZWFufSBwcmVmZXJlbmNlIE92ZXJyaWRlIGZvciB1c2FnZSBvZiBTaGFkb3dET01cbiAqL1xuZnVuY3Rpb24gZW5hYmxlU2hhZG93IChwcmVmZXJlbmNlOiBib29sZWFuIHwgc3RyaW5nKTogYm9vbGVhbiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICBwcmVmZXJlbmNlID09PSB1bmRlZmluZWQgfHwgKHR5cGVvZiBwcmVmZXJlbmNlID09PSBcInN0cmluZ1wiICYmIChwcmVmZXJlbmNlIGFzIFN0cmluZykgPT09IFwiaWYtYXZhaWxhYmxlXCIpXG4gICAgICAgICAgICA/IGlzSUUoKSB8fCBpc0ZpcmVmb3goKSA/IGZhbHNlIDogdHJ1ZVxuICAgICAgICAgICAgOiAocHJlZmVyZW5jZSBhcyBib29sZWFuKVxuICAgICk7XG59XG4iLCJleHBvcnQgeyBjb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRcIjtcbmV4cG9ydCB7IHByb3AgfSBmcm9tIFwiLi9wcm9wXCI7XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZSBuby1hbnlcblxudHlwZSBQcm9wVHlwZSA9IFwic3RyaW5nXCIgfCBcIm51bWJlclwiIHwgXCJvYmplY3RcIiB8IFwiYXJyYXlcIiB8IFwiYm9vbGVhblwiO1xudHlwZSBQcm9wRnVuYyA9ICh4OiBhbnkpID0+IGFueTtcbmNvbnN0IGlkZW50aXR5Rm46IGFueSA9ICh4OiBhbnkpID0+IHg7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wIChwcm9wZXJ0eTogYW55KTogUHJvcGVydHlEZWNvcmF0b3Ige1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IHsgW2tleTogc3RyaW5nXTogYW55IH0sIHByb3BlcnR5S2V5OiBzdHJpbmcgfCBzeW1ib2wpOiB2b2lkIHtcblxuICAgICAgICAvLyBvYnRhaW4gcHJvcGVydGllcyBwcm92aWRlIGJ5IHRoZSBAcHJvcCBkZWNvcmF0b3JcbiAgICAgICAgY29uc3QgeyB0eXBlIH0gPSBwcm9wZXJ0eTtcblxuICAgICAgICAvLyBnZXQgY29uc3RydWN0b3Igb2YgZWxlbWVudFxuICAgICAgICBjb25zdCBjdG9yOiBhbnkgPSB0YXJnZXQuY29uc3RydWN0b3I7XG5cbiAgICAgICAgY29uc3QgZXhpc3RpbmdMaXRQcm9wczogYW55ID0gKGN0b3IucHJvcGVydGllcyB8fCB7fSk7XG5cbiAgICAgICAgY29uc3QgbGl0UHJvcHM6IGFueSA9IHtcblxuICAgICAgICAgICAgLi4uZXhpc3RpbmdMaXRQcm9wcyxcbiAgICAgICAgICAgIC4uLntbcHJvcGVydHlLZXldOiB0eXBlfVxuICAgICAgICB9O1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgICAgIGN0b3IsXG4gICAgICAgICAgICBcInByb3BlcnRpZXNcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZ2V0ICgpOiBhbnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGl0UHJvcHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH07XG59XG5cbi8vIHRzbGludDplbmFibGUgbm8tYW55XG4iLCJleHBvcnQgeyBjb21wb25lbnQsIHByb3AgfSBmcm9tIFwiLi9kZWNvcmF0b3JzXCI7XG5leHBvcnQgeyBCYXNlTGl0Q29tcG9uZW50LCBTdGF0ZVByb3BzIH0gZnJvbSBcIi4vQmFzZUxpdENvbXBvbmVudFwiO1xuZXhwb3J0IHsgQmFzZUxpdFdpdGhMb2FkZXIgfSBmcm9tIFwiLi9CYXNlTGl0V2l0aExvYWRlclwiO1xuIiwiZXhwb3J0ICogZnJvbSBcIi4vYmFzZVwiO1xuIiwiZXhwb3J0IGNsYXNzIEV2ZW50QXJncyB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7fVxufVxuIiwiZXhwb3J0IHsgRXZlbnRBcmdzIH0gZnJvbSBcIi4vZXZlbnQtYXJnc1wiO1xuZXhwb3J0IHsgV1NFdmVudEFyZ3MgfSBmcm9tIFwiLi93cy1ldmVudC1hcmdzXCI7XG4iLCJpbXBvcnQgeyBFdmVudEFyZ3MgfSBmcm9tIFwiLi4vZXZlbnQtYXJnc1wiO1xuXG5leHBvcnQgY2xhc3MgV1NFdmVudEFyZ3MgZXh0ZW5kcyBFdmVudEFyZ3Mge1xuXG4gICAgcHVibGljIGFjdGlvbjogc3RyaW5nO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcbiAgICBwdWJsaWMgcGF5bG9hZDogYW55O1xuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxuICAgIGNvbnN0cnVjdG9yIChhY3Rpb246IHN0cmluZywgcGF5bG9hZDogYW55KSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG4gICAgICAgIHRoaXMucGF5bG9hZCA9IHBheWxvYWQ7XG4gICAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBFdmVudENvbnRhaW5lciB7XG5cbiAgICBba2V5OiBzdHJpbmddOiBIYW5kbGVyRGVzY3JpcHRvcltdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhhbmRsZXJEZXNjcmlwdG9yIHtcblxuICAgIGhhbmRsZXI6IEZ1bmN0aW9uO1xuICAgIHBhZ2U/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBDbGllbnRFdmVudHMge1xuXG4gICAgLy8gdHNsaW50OmRpc2FibGVcblxuICAgIC8vIENsaWVudCBNYW5hZ2VyIFJlYWR5XG4gICAgc3RhdGljIENsaWVudE1hbmFnZXJSZWFkeTogc3RyaW5nID0gXCJjbGllbnQtbWFuYWdlci1yZWFkeVwiO1xuXG4gICAgLy8gUG9wb3V0IE1lbnUgRXZlbnRzXG4gICAgc3RhdGljIENsb3NlUG9wb3V0TWVudTogc3RyaW5nID0gXCJjbG9zZS1wb3BvdXQtbWVudVwiO1xuXG4gICAgLy8gQ29ubmVjdGl2aXR5IEV2ZW50c1xuICAgIHN0YXRpYyBPbmxpbmU6IHN0cmluZyA9IFwib25saW5lXCI7XG4gICAgc3RhdGljIE9mZmxpbmU6IHN0cmluZyA9IFwib2ZmbGluZVwiO1xuXG4gICAgLy8gUmVkdXhcbiAgICBzdGF0aWMgUmVkdXhVcGRhdGU6IHN0cmluZyA9IFwicmVkdXgtdXBkYXRlXCI7XG5cbiAgICAvLyB0c2xpbnQ6ZW5hYmxlXG59XG5cbmV4cG9ydCAqIGZyb20gXCIuL2V2ZW50LWFyZ3NcIjtcbiIsImltcG9ydCB7IENsaWVudE1hbmFnZXIgfSBmcm9tIFwiLi4vY2xpZW50L2NsaWVudE1hbmFnZXJcIjtcbmltcG9ydCB7IENsaWVudEV2ZW50cywgRXZlbnRBcmdzLCBXU0V2ZW50QXJncyB9IGZyb20gXCIuLi9ldmVudHNcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VIYW5kbGVyPFQgZXh0ZW5kcyBDbGllbnRNYW5hZ2VyID0gQ2xpZW50TWFuYWdlcj4ge1xuXG4gICAgLy8gPT09IFByb3RlY3RlZCBQcm9wcyA9PT0gLy9cblxuICAgIHByb3RlY3RlZCBtYW5hZ2VyOiBUO1xuXG4gICAgLy8gPT09IFB1YmxpYyBQcm9wcyA9PT0gLy9cblxuICAgIHB1YmxpYyBtZXNzYWdlVHlwZTogc3RyaW5nID0gbnVsbDtcbiAgICBwdWJsaWMgZXZlbnRUeXBlOiBDbGllbnRFdmVudHNbXSA9IFtdO1xuICAgIHB1YmxpYyBmaWx0ZXJzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgLy8gPT09IENvbnN0cnVjdG9yID09PSAvL1xuXG4gICAgY29uc3RydWN0b3IgKG1hbmFnZXI6IFQpIHtcblxuICAgICAgICB0aGlzLm1hbmFnZXIgPSBtYW5hZ2VyO1xuICAgIH1cblxuICAgIC8vID09PSBQcm90ZWN0ZWQgPT09IC8vXG5cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgYXN5bmMgaGFuZGxlTWVzc2FnZSAobWVzc2FnZTogV1NFdmVudEFyZ3MpOiBQcm9taXNlPHZvaWQ+O1xuXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGFzeW5jIGhhbmRsZUV2ZW50IChldmVudFR5cGU6IENsaWVudEV2ZW50cywgZXZlbnRBcmdzOiBFdmVudEFyZ3MpOiBQcm9taXNlPHZvaWQ+O1xuXG4gICAgLy8gPT09IFB1YmxpYyA9PT0gLy9cblxuICAgIHB1YmxpYyBhc3luYyBjYWxsSGFuZGxlTWVzc2FnZSAobWVzc2FnZTogV1NFdmVudEFyZ3MpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICBhd2FpdCB0aGlzLmhhbmRsZU1lc3NhZ2UobWVzc2FnZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGNhbGxIYW5kbGVFdmVudCAoZXZlbnRUeXBlOiBDbGllbnRFdmVudHMsIGV2ZW50RGF0YTogRXZlbnRBcmdzKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVFdmVudChldmVudFR5cGUsIGV2ZW50RGF0YSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyRmlsdGVyIChmaWx0ZXI6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICAgIGlmICghdGhpcy5maWx0ZXJzLmluY2x1ZGVzKFwiZmlsdGVyXCIpKSB7XG5cbiAgICAgICAgICAgIHRoaXMuZmlsdGVycy5wdXNoKGZpbHRlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdW5yZWdpc3RlckZpbHRlciAoZmlsdGVyOiBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCByZW1vdmU6IG51bWJlciA9IHRoaXMuZmlsdGVycy5maW5kSW5kZXgoeCA9PiB4ID09PSBmaWx0ZXIpO1xuXG4gICAgICAgIGlmIChyZW1vdmUgPiAtMSkge1xuXG4gICAgICAgICAgICB0aGlzLmZpbHRlcnMuc3BsaWNlKHJlbW92ZSwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJBbGxGaWx0ZXJzICgpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLmZpbHRlcnMgPSBbXTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDbGllbnRNYW5hZ2VyIH0gZnJvbSBcIi4uL2NsaWVudC9jbGllbnRNYW5hZ2VyXCI7XG5pbXBvcnQgeyBCYXNlSGFuZGxlciB9IGZyb20gXCIuL2Jhc2UtaGFuZGxlclwiO1xuXG5leHBvcnQgeyBCYXNlSGFuZGxlciB9IGZyb20gXCIuL2Jhc2UtaGFuZGxlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0IChjbGllbnRNYW5hZ2VyOiBDbGllbnRNYW5hZ2VyKTogQmFzZUhhbmRsZXJbXSB7XG5cbiAgICByZXR1cm4gW1xuXG4gICAgXTtcbn1cbiIsImV4cG9ydCBlbnVtIEh0dHBWZXJiIHtcblxuICAgIEdFVCA9IFwiZ2V0XCIsXG4gICAgUE9TVCA9IFwicG9zdFwiLFxuICAgIFBVVCA9IFwicHV0XCIsXG4gICAgUEFUQ0ggPSBcInBhdGNoXCIsXG4gICAgREVMRVRFID0gXCJkZWxldGVcIlxufVxuIiwiaW1wb3J0IHsgSWNvbkNvbnRhaW5lciB9IGZyb20gXCIuL1wiO1xuXG5leHBvcnQgY29uc3QgSWNvbnM6IEljb25Db250YWluZXIgPSB7XG5cbiAgICBGb250QXdlc29tZToge1xuXG4gICAgICAgIEJhcnM6IHtcbiAgICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIDEwMjQgMTAyNFwiLFxuICAgICAgICAgICAgcGF0aHM6IFtcbiAgICAgICAgICAgICAgICBcIk04NzcuNzE0IDc2OHY3My4xNDNjMCAyMC0xNi41NzEgMzYuNTcxLTM2LjU3MSAzNi41NzFoLTgwNC41NzFjLTIwIDAtMzYuNTcxLTE2LjU3MS0zNi41NzEtMzYuNTcxdi03My4xNDNjMC0yMCAxNi41NzEtMzYuNTcxIDM2LjU3MS0zNi41NzFoODA0LjU3MWMyMCAwIDM2LjU3MSAxNi41NzEgMzYuNTcxIDM2LjU3MXpNODc3LjcxNCA0NzUuNDI5djczLjE0M2MwIDIwLTE2LjU3MSAzNi41NzEtMzYuNTcxIDM2LjU3MWgtODA0LjU3MWMtMjAgMC0zNi41NzEtMTYuNTcxLTM2LjU3MS0zNi41NzF2LTczLjE0M2MwLTIwIDE2LjU3MS0zNi41NzEgMzYuNTcxLTM2LjU3MWg4MDQuNTcxYzIwIDAgMzYuNTcxIDE2LjU3MSAzNi41NzEgMzYuNTcxek04NzcuNzE0IDE4Mi44NTd2NzMuMTQzYzAgMjAtMTYuNTcxIDM2LjU3MS0zNi41NzEgMzYuNTcxaC04MDQuNTcxYy0yMCAwLTM2LjU3MS0xNi41NzEtMzYuNTcxLTM2LjU3MXYtNzMuMTQzYzAtMjAgMTYuNTcxLTM2LjU3MSAzNi41NzEtMzYuNTcxaDgwNC41NzFjMjAgMCAzNi41NzEgMTYuNTcxIDM2LjU3MSAzNi41NzF6XCJcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgQ2hldnJvblJpZ2h0OiB7XG4gICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAxMDI0IDEwMjRcIixcbiAgICAgICAgICAgIHBhdGhzOiBbXG4gICAgICAgICAgICAgICAgXCJNNjMyLjU3MSA1MDEuMTQzbC00MjQgNDI0Yy0xNC4yODYgMTQuMjg2LTM3LjE0MyAxNC4yODYtNTEuNDI5IDBsLTk0Ljg1Ny05NC44NTdjLTE0LjI4Ni0xNC4yODYtMTQuMjg2LTM3LjE0MyAwLTUxLjQyOWwzMDMuNDI5LTMwMy40MjktMzAzLjQyOS0zMDMuNDI5Yy0xNC4yODYtMTQuMjg2LTE0LjI4Ni0zNy4xNDMgMC01MS40MjlsOTQuODU3LTk0Ljg1N2MxNC4yODYtMTQuMjg2IDM3LjE0My0xNC4yODYgNTEuNDI5IDBsNDI0IDQyNGMxNC4yODYgMTQuMjg2IDE0LjI4NiAzNy4xNDMgMCA1MS40Mjl6XCJcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgQ29nOiB7XG4gICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAxMDI0IDEwMjRcIixcbiAgICAgICAgICAgIHBhdGhzOiBbXG4gICAgICAgICAgICAgICAgXCJNNTg1LjE0MyA1MTJjMC04MC41NzEtNjUuNzE0LTE0Ni4yODYtMTQ2LjI4Ni0xNDYuMjg2cy0xNDYuMjg2IDY1LjcxNC0xNDYuMjg2IDE0Ni4yODYgNjUuNzE0IDE0Ni4yODYgMTQ2LjI4NiAxNDYuMjg2IDE0Ni4yODYtNjUuNzE0IDE0Ni4yODYtMTQ2LjI4NnpNODc3LjcxNCA0NDkuNzE0djEyNi44NTdjMCA4LjU3MS02Ljg1NyAxOC44NTctMTYgMjAuNTcxbC0xMDUuNzE0IDE2Yy02LjI4NiAxOC4yODYtMTMuMTQzIDM1LjQyOS0yMi4yODYgNTIgMTkuNDI5IDI4IDQwIDUzLjE0MyA2MS4xNDMgNzguODU3IDMuNDI5IDQgNS43MTQgOS4xNDMgNS43MTQgMTQuMjg2cy0xLjcxNCA5LjE0My01LjE0MyAxMy4xNDNjLTEzLjcxNCAxOC4yODYtOTAuODU3IDEwMi4yODYtMTEwLjI4NiAxMDIuMjg2LTUuMTQzIDAtMTAuMjg2LTIuMjg2LTE0Ljg1Ny01LjE0M2wtNzguODU3LTYxLjcxNGMtMTYuNTcxIDguNTcxLTM0LjI4NiAxNi01MiAyMS43MTQtNCAzNC44NTctNy40MjkgNzItMTYuNTcxIDEwNi4yODYtMi4yODYgOS4xNDMtMTAuMjg2IDE2LTIwLjU3MSAxNmgtMTI2Ljg1N2MtMTAuMjg2IDAtMTkuNDI5LTcuNDI5LTIwLjU3MS0xNy4xNDNsLTE2LTEwNS4xNDNjLTE3LjcxNC01LjcxNC0zNC44NTctMTIuNTcxLTUxLjQyOS0yMS4xNDNsLTgwLjU3MSA2MS4xNDNjLTQgMy40MjktOS4xNDMgNS4xNDMtMTQuMjg2IDUuMTQzcy0xMC4yODYtMi4yODYtMTQuMjg2LTYuMjg2Yy0zMC4yODYtMjcuNDI5LTcwLjI4Ni02Mi44NTctOTQuMjg2LTk2LTIuODU3LTQtNC04LjU3MS00LTEzLjE0MyAwLTUuMTQzIDEuNzE0LTkuMTQzIDQuNTcxLTEzLjE0MyAxOS40MjktMjYuMjg2IDQwLjU3MS01MS40MjkgNjAtNzguMjg2LTkuNzE0LTE4LjI4Ni0xNy43MTQtMzcuMTQzLTIzLjQyOS01Ni41NzFsLTEwNC41NzEtMTUuNDI5Yy05LjcxNC0xLjcxNC0xNi41NzEtMTAuODU3LTE2LjU3MS0yMC41NzF2LTEyNi44NTdjMC04LjU3MSA2Ljg1Ny0xOC44NTcgMTUuNDI5LTIwLjU3MWwxMDYuMjg2LTE2YzUuNzE0LTE4LjI4NiAxMy4xNDMtMzUuNDI5IDIyLjI4Ni01Mi41NzEtMTkuNDI5LTI3LjQyOS00MC01My4xNDMtNjEuMTQzLTc4Ljg1Ny0zLjQyOS00LTUuNzE0LTguNTcxLTUuNzE0LTEzLjcxNHMyLjI4Ni05LjE0MyA1LjE0My0xMy4xNDNjMTMuNzE0LTE4Ljg1NyA5MC44NTctMTAyLjI4NiAxMTAuMjg2LTEwMi4yODYgNS4xNDMgMCAxMC4yODYgMi4yODYgMTQuODU3IDUuNzE0bDc4Ljg1NyA2MS4xNDNjMTYuNTcxLTguNTcxIDM0LjI4Ni0xNiA1Mi0yMS43MTQgNC0zNC44NTcgNy40MjktNzIgMTYuNTcxLTEwNi4yODYgMi4yODYtOS4xNDMgMTAuMjg2LTE2IDIwLjU3MS0xNmgxMjYuODU3YzEwLjI4NiAwIDE5LjQyOSA3LjQyOSAyMC41NzEgMTcuMTQzbDE2IDEwNS4xNDNjMTcuNzE0IDUuNzE0IDM0Ljg1NyAxMi41NzEgNTEuNDI5IDIxLjE0M2w4MS4xNDMtNjEuMTQzYzMuNDI5LTMuNDI5IDguNTcxLTUuMTQzIDEzLjcxNC01LjE0M3MxMC4yODYgMi4yODYgMTQuMjg2IDUuNzE0YzMwLjI4NiAyOCA3MC4yODYgNjMuNDI5IDk0LjI4NiA5Ny4xNDMgMi44NTcgMy40MjkgNCA4IDQgMTIuNTcxIDAgNS4xNDMtMS43MTQgOS4xNDMtNC41NzEgMTMuMTQzLTE5LjQyOSAyNi4yODYtNDAuNTcxIDUxLjQyOS02MCA3OC4yODYgOS43MTQgMTguMjg2IDE3LjcxNCAzNy4xNDMgMjMuNDI5IDU2bDEwNC41NzEgMTZjOS43MTQgMS43MTQgMTYuNTcxIDEwLjg1NyAxNi41NzEgMjAuNTcxelwiXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIENyb3NzOiB7XG4gICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAxMDI0IDEwMjRcIixcbiAgICAgICAgICAgIHBhdGhzOiBbXG4gICAgICAgICAgICAgICAgXCJNNzQxLjcxNCA3NTUuNDI5YzAgMTQuMjg2LTUuNzE0IDI4LjU3MS0xNiAzOC44NTdsLTc3LjcxNCA3Ny43MTRjLTEwLjI4NiAxMC4yODYtMjQuNTcxIDE2LTM4Ljg1NyAxNnMtMjguNTcxLTUuNzE0LTM4Ljg1Ny0xNmwtMTY4LTE2OC0xNjggMTY4Yy0xMC4yODYgMTAuMjg2LTI0LjU3MSAxNi0zOC44NTcgMTZzLTI4LjU3MS01LjcxNC0zOC44NTctMTZsLTc3LjcxNC03Ny43MTRjLTEwLjI4Ni0xMC4yODYtMTYtMjQuNTcxLTE2LTM4Ljg1N3M1LjcxNC0yOC41NzEgMTYtMzguODU3bDE2OC0xNjgtMTY4LTE2OGMtMTAuMjg2LTEwLjI4Ni0xNi0yNC41NzEtMTYtMzguODU3czUuNzE0LTI4LjU3MSAxNi0zOC44NTdsNzcuNzE0LTc3LjcxNGMxMC4yODYtMTAuMjg2IDI0LjU3MS0xNiAzOC44NTctMTZzMjguNTcxIDUuNzE0IDM4Ljg1NyAxNmwxNjggMTY4IDE2OC0xNjhjMTAuMjg2LTEwLjI4NiAyNC41NzEtMTYgMzguODU3LTE2czI4LjU3MSA1LjcxNCAzOC44NTcgMTZsNzcuNzE0IDc3LjcxNGMxMC4yODYgMTAuMjg2IDE2IDI0LjU3MSAxNiAzOC44NTdzLTUuNzE0IDI4LjU3MS0xNiAzOC44NTdsLTE2OCAxNjggMTY4IDE2OGMxMC4yODYgMTAuMjg2IDE2IDI0LjU3MSAxNiAzOC44NTd6XCJcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgQ2lyY2xlQ3Jvc3M6IHtcbiAgICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIDEwMjQgMTAyNFwiLFxuICAgICAgICAgICAgcGF0aHM6IFtcbiAgICAgICAgICAgICAgICBcIk02MjYuODU3IDYxNi41NzFsLTgzLjQyOSA4My40MjljLTcuNDI5IDcuNDI5LTE4Ljg1NyA3LjQyOS0yNi4yODYgMGwtNzguMjg2LTc4LjI4Ni03OC4yODYgNzguMjg2Yy03LjQyOSA3LjQyOS0xOC44NTcgNy40MjktMjYuMjg2IDBsLTgzLjQyOS04My40MjljLTcuNDI5LTcuNDI5LTcuNDI5LTE4Ljg1NyAwLTI2LjI4Nmw3OC4yODYtNzguMjg2LTc4LjI4Ni03OC4yODZjLTcuNDI5LTcuNDI5LTcuNDI5LTE4Ljg1NyAwLTI2LjI4Nmw4My40MjktODMuNDI5YzcuNDI5LTcuNDI5IDE4Ljg1Ny03LjQyOSAyNi4yODYgMGw3OC4yODYgNzguMjg2IDc4LjI4Ni03OC4yODZjNy40MjktNy40MjkgMTguODU3LTcuNDI5IDI2LjI4NiAwbDgzLjQyOSA4My40MjljNy40MjkgNy40MjkgNy40MjkgMTguODU3IDAgMjYuMjg2bC03OC4yODYgNzguMjg2IDc4LjI4NiA3OC4yODZjNy40MjkgNy40MjkgNy40MjkgMTguODU3IDAgMjYuMjg2ek03NDkuNzE0IDUxMmMwLTE3MS40MjktMTM5LjQyOS0zMTAuODU3LTMxMC44NTctMzEwLjg1N3MtMzEwLjg1NyAxMzkuNDI5LTMxMC44NTcgMzEwLjg1NyAxMzkuNDI5IDMxMC44NTcgMzEwLjg1NyAzMTAuODU3IDMxMC44NTctMTM5LjQyOSAzMTAuODU3LTMxMC44NTd6TTg3Ny43MTQgNTEyYzAgMjQyLjI4Ni0xOTYuNTcxIDQzOC44NTctNDM4Ljg1NyA0MzguODU3cy00MzguODU3LTE5Ni41NzEtNDM4Ljg1Ny00MzguODU3IDE5Ni41NzEtNDM4Ljg1NyA0MzguODU3LTQzOC44NTcgNDM4Ljg1NyAxOTYuNTcxIDQzOC44NTcgNDM4Ljg1N3pcIlxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBJbmZvOiB7XG4gICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAxMDI0IDEwMjRcIixcbiAgICAgICAgICAgIHBhdGhzOiBbXG4gICAgICAgICAgICAgICAgXCJNMzY1LjcxNCA3Njh2NzMuMTQzYzAgMjAtMTYuNTcxIDM2LjU3MS0zNi41NzEgMzYuNTcxaC0yOTIuNTcxYy0yMCAwLTM2LjU3MS0xNi41NzEtMzYuNTcxLTM2LjU3MXYtNzMuMTQzYzAtMjAgMTYuNTcxLTM2LjU3MSAzNi41NzEtMzYuNTcxaDM2LjU3MXYtMjE5LjQyOWgtMzYuNTcxYy0yMCAwLTM2LjU3MS0xNi41NzEtMzYuNTcxLTM2LjU3MXYtNzMuMTQzYzAtMjAgMTYuNTcxLTM2LjU3MSAzNi41NzEtMzYuNTcxaDIxOS40MjljMjAgMCAzNi41NzEgMTYuNTcxIDM2LjU3MSAzNi41NzF2MzI5LjE0M2gzNi41NzFjMjAgMCAzNi41NzEgMTYuNTcxIDM2LjU3MSAzNi41NzF6TTI5Mi41NzEgMTA5LjcxNHYxMDkuNzE0YzAgMjAtMTYuNTcxIDM2LjU3MS0zNi41NzEgMzYuNTcxaC0xNDYuMjg2Yy0yMCAwLTM2LjU3MS0xNi41NzEtMzYuNTcxLTM2LjU3MXYtMTA5LjcxNGMwLTIwIDE2LjU3MS0zNi41NzEgMzYuNTcxLTM2LjU3MWgxNDYuMjg2YzIwIDAgMzYuNTcxIDE2LjU3MSAzNi41NzEgMzYuNTcxelwiXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIExlZnRBcnJvdzoge1xuICAgICAgICAgICAgdmlld0JveDogXCIwIDAgMTAyNCAxMDI0XCIsXG4gICAgICAgICAgICBwYXRoczogW1xuICAgICAgICAgICAgICAgIFwiTTg3Ny43MTQgNTEydjczLjE0M2MwIDM4Ljg1Ny0yNS43MTQgNzMuMTQzLTY2Ljg1NyA3My4xNDNoLTQwMi4yODZsMTY3LjQyOSAxNjhjMTMuNzE0IDEzLjE0MyAyMS43MTQgMzIgMjEuNzE0IDUxLjQyOXMtOCAzOC4yODYtMjEuNzE0IDUxLjQyOWwtNDIuODU3IDQzLjQyOWMtMTMuMTQzIDEzLjE0My0zMiAyMS4xNDMtNTEuNDI5IDIxLjE0M3MtMzguMjg2LTgtNTItMjEuMTQzbC0zNzItMzcyLjU3MWMtMTMuMTQzLTEzLjE0My0yMS4xNDMtMzItMjEuMTQzLTUxLjQyOXM4LTM4LjI4NiAyMS4xNDMtNTJsMzcyLTM3MS40MjljMTMuNzE0LTEzLjcxNCAzMi41NzEtMjEuNzE0IDUyLTIxLjcxNHMzNy43MTQgOCA1MS40MjkgMjEuNzE0bDQyLjg1NyA0Mi4yODZjMTMuNzE0IDEzLjcxNCAyMS43MTQgMzIuNTcxIDIxLjcxNCA1MnMtOCAzOC4yODYtMjEuNzE0IDUybC0xNjcuNDI5IDE2Ny40MjloNDAyLjI4NmM0MS4xNDMgMCA2Ni44NTcgMzQuMjg2IDY2Ljg1NyA3My4xNDN6XCJcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgTG9nb3V0OiB7XG4gICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAxMDI0IDEwMjRcIixcbiAgICAgICAgICAgIHBhdGhzOiBbXG4gICAgICAgICAgICAgICAgXCJNMzY1LjcxNCA4MjIuODU3YzAgMTYgNy40MjkgNTQuODU3LTE4LjI4NiA1NC44NTdoLTE4Mi44NTdjLTkwLjg1NyAwLTE2NC41NzEtNzMuNzE0LTE2NC41NzEtMTY0LjU3MXYtNDAyLjI4NmMwLTkwLjg1NyA3My43MTQtMTY0LjU3MSAxNjQuNTcxLTE2NC41NzFoMTgyLjg1N2M5LjcxNCAwIDE4LjI4NiA4LjU3MSAxOC4yODYgMTguMjg2IDAgMTYgNy40MjkgNTQuODU3LTE4LjI4NiA1NC44NTdoLTE4Mi44NTdjLTUwLjI4NiAwLTkxLjQyOSA0MS4xNDMtOTEuNDI5IDkxLjQyOXY0MDIuMjg2YzAgNTAuMjg2IDQxLjE0MyA5MS40MjkgOTEuNDI5IDkxLjQyOWgxNjQuNTcxYzE0LjI4NiAwIDM2LjU3MS0yLjg1NyAzNi41NzEgMTguMjg2ek04OTYgNTEyYzAgOS43MTQtNCAxOC44NTctMTAuODU3IDI1LjcxNGwtMzEwLjg1NyAzMTAuODU3Yy02Ljg1NyA2Ljg1Ny0xNiAxMC44NTctMjUuNzE0IDEwLjg1Ny0yMCAwLTM2LjU3MS0xNi41NzEtMzYuNTcxLTM2LjU3MXYtMTY0LjU3MWgtMjU2Yy0yMCAwLTM2LjU3MS0xNi41NzEtMzYuNTcxLTM2LjU3MXYtMjE5LjQyOWMwLTIwIDE2LjU3MS0zNi41NzEgMzYuNTcxLTM2LjU3MWgyNTZ2LTE2NC41NzFjMC0yMCAxNi41NzEtMzYuNTcxIDM2LjU3MS0zNi41NzEgOS43MTQgMCAxOC44NTcgNCAyNS43MTQgMTAuODU3bDMxMC44NTcgMzEwLjg1N2M2Ljg1NyA2Ljg1NyAxMC44NTcgMTYgMTAuODU3IDI1LjcxNHpcIlxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBQZW5jaWxTcXVhcmVPOiB7XG4gICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAxMDI0IDEwMjRcIixcbiAgICAgICAgICAgIHBhdGhzOiBbXG4gICAgICAgICAgICAgICAgXCJNNTA3LjQyOSA2NzYuNTcxbDY2LjI4Ni02Ni4yODYtODYuODU3LTg2Ljg1Ny02Ni4yODYgNjYuMjg2djMyaDU0Ljg1N3Y1NC44NTdoMzJ6TTc1OC44NTcgMjY1LjE0M2MtNS4xNDMtNS4xNDMtMTMuNzE0LTQuNTcxLTE4Ljg1NyAwLjU3MWwtMjAwIDIwMGMtNS4xNDMgNS4xNDMtNS43MTQgMTMuNzE0LTAuNTcxIDE4Ljg1N3MxMy43MTQgNC41NzEgMTguODU3LTAuNTcxbDIwMC0yMDBjNS4xNDMtNS4xNDMgNS43MTQtMTMuNzE0IDAuNTcxLTE4Ljg1N3pNODA0LjU3MSA2MDQuNTcxdjEwOC41NzFjMCA5MC44NTctNzMuNzE0IDE2NC41NzEtMTY0LjU3MSAxNjQuNTcxaC00NzUuNDI5Yy05MC44NTcgMC0xNjQuNTcxLTczLjcxNC0xNjQuNTcxLTE2NC41NzF2LTQ3NS40MjljMC05MC44NTcgNzMuNzE0LTE2NC41NzEgMTY0LjU3MS0xNjQuNTcxaDQ3NS40MjljMjIuODU3IDAgNDUuNzE0IDQuNTcxIDY2Ljg1NyAxNC4yODYgNS4xNDMgMi4yODYgOS4xNDMgNy40MjkgMTAuMjg2IDEzLjE0MyAxLjE0MyA2LjI4Ni0wLjU3MSAxMi01LjE0MyAxNi41NzFsLTI4IDI4Yy01LjE0MyA1LjE0My0xMiA2Ljg1Ny0xOC4yODYgNC41NzEtOC41NzEtMi4yODYtMTcuMTQzLTMuNDI5LTI1LjcxNC0zLjQyOWgtNDc1LjQyOWMtNTAuMjg2IDAtOTEuNDI5IDQxLjE0My05MS40MjkgOTEuNDI5djQ3NS40MjljMCA1MC4yODYgNDEuMTQzIDkxLjQyOSA5MS40MjkgOTEuNDI5aDQ3NS40MjljNTAuMjg2IDAgOTEuNDI5LTQxLjE0MyA5MS40MjktOTEuNDI5di03MmMwLTQuNTcxIDEuNzE0LTkuMTQzIDUuMTQzLTEyLjU3MWwzNi41NzEtMzYuNTcxYzUuNzE0LTUuNzE0IDEzLjE0My02Ljg1NyAyMC00czExLjQyOSA5LjE0MyAxMS40MjkgMTYuNTcxek03NDkuNzE0IDE4Mi44NTdsMTY0LjU3MSAxNjQuNTcxLTM4NCAzODRoLTE2NC41NzF2LTE2NC41NzF6TTEwMDMuNDI5IDI1OC4yODZsLTUyLjU3MSA1Mi41NzEtMTY0LjU3MS0xNjQuNTcxIDUyLjU3MS01Mi41NzFjMjEuMTQzLTIxLjE0MyA1Ni41NzEtMjEuMTQzIDc3LjcxNCAwbDg2Ljg1NyA4Ni44NTdjMjEuMTQzIDIxLjE0MyAyMS4xNDMgNTYuNTcxIDAgNzcuNzE0elwiXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFBsdXM6IHtcbiAgICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIDEwMjQgMTAyNFwiLFxuICAgICAgICAgICAgcGF0aHM6IFtcbiAgICAgICAgICAgICAgICBcIk04MDQuNTcxIDQyMC41NzF2MTA5LjcxNGMwIDMwLjI4Ni0yNC41NzEgNTQuODU3LTU0Ljg1NyA1NC44NTdoLTIzNy43MTR2MjM3LjcxNGMwIDMwLjI4Ni0yNC41NzEgNTQuODU3LTU0Ljg1NyA1NC44NTdoLTEwOS43MTRjLTMwLjI4NiAwLTU0Ljg1Ny0yNC41NzEtNTQuODU3LTU0Ljg1N3YtMjM3LjcxNGgtMjM3LjcxNGMtMzAuMjg2IDAtNTQuODU3LTI0LjU3MS01NC44NTctNTQuODU3di0xMDkuNzE0YzAtMzAuMjg2IDI0LjU3MS01NC44NTcgNTQuODU3LTU0Ljg1N2gyMzcuNzE0di0yMzcuNzE0YzAtMzAuMjg2IDI0LjU3MS01NC44NTcgNTQuODU3LTU0Ljg1N2gxMDkuNzE0YzMwLjI4NiAwIDU0Ljg1NyAyNC41NzEgNTQuODU3IDU0Ljg1N3YyMzcuNzE0aDIzNy43MTRjMzAuMjg2IDAgNTQuODU3IDI0LjU3MSA1NC44NTcgNTQuODU3elwiXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFF1ZXN0aW9uOiB7XG4gICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAxMDI0IDEwMjRcIixcbiAgICAgICAgICAgIHBhdGhzOiBbXG4gICAgICAgICAgICAgICAgXCJNNDAyLjI4NiA3MTcuNzE0djEzNy4xNDNjMCAxMi41NzEtMTAuMjg2IDIyLjg1Ny0yMi44NTcgMjIuODU3aC0xMzcuMTQzYy0xMi41NzEgMC0yMi44NTctMTAuMjg2LTIyLjg1Ny0yMi44NTd2LTEzNy4xNDNjMC0xMi41NzEgMTAuMjg2LTIyLjg1NyAyMi44NTctMjIuODU3aDEzNy4xNDNjMTIuNTcxIDAgMjIuODU3IDEwLjI4NiAyMi44NTcgMjIuODU3ek01ODIuODU3IDM3NC44NTdjMCAxMDguNTcxLTczLjcxNCAxNTAuMjg2LTEyOCAxODAuNTcxLTMzLjcxNCAxOS40MjktNTQuODU3IDU4Ljg1Ny01NC44NTcgNzUuNDI5djBjMCAxMi41NzEtOS43MTQgMjcuNDI5LTIyLjg1NyAyNy40MjloLTEzNy4xNDNjLTEyLjU3MSAwLTIwLjU3MS0xOS40MjktMjAuNTcxLTMydi0yNS43MTRjMC02OS4xNDMgNjguNTcxLTEyOC41NzEgMTE4Ljg1Ny0xNTEuNDI5IDQ0LTIwIDYyLjI4Ni0zOC44NTcgNjIuMjg2LTc1LjQyOSAwLTMyLTQxLjcxNC02MC41NzEtODgtNjAuNTcxLTI1LjcxNCAwLTQ5LjE0MyA4LTYxLjcxNCAxNi41NzEtMTMuNzE0IDkuNzE0LTI3LjQyOSAyMy40MjktNjEuMTQzIDY1LjcxNC00LjU3MSA1LjcxNC0xMS40MjkgOS4xNDMtMTcuNzE0IDkuMTQzLTUuMTQzIDAtOS43MTQtMS43MTQtMTQuMjg2LTQuNTcxbC05My43MTQtNzEuNDI5Yy05LjcxNC03LjQyOS0xMi0yMC01LjcxNC0zMC4yODYgNjEuNzE0LTEwMi4yODYgMTQ4LjU3MS0xNTIgMjY1LjE0My0xNTIgMTIyLjI4NiAwIDI1OS40MjkgOTcuNzE0IDI1OS40MjkgMjI4LjU3MXpcIlxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBVc2VyOiB7XG4gICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAxMDI0IDEwMjRcIixcbiAgICAgICAgICAgIHBhdGhzOiBbXG4gICAgICAgICAgICAgICAgXCJNNzMxLjQyOSA3OTkuNDI5YzAgODMuNDI5LTU0Ljg1NyAxNTEuNDI5LTEyMS43MTQgMTUxLjQyOWgtNDg4Yy02Ni44NTcgMC0xMjEuNzE0LTY4LTEyMS43MTQtMTUxLjQyOSAwLTE1MC4yODYgMzcuMTQzLTMyNCAxODYuODU3LTMyNCA0Ni4yODYgNDUuMTQzIDEwOS4xNDMgNzMuMTQzIDE3OC44NTcgNzMuMTQzczEzMi41NzEtMjggMTc4Ljg1Ny03My4xNDNjMTQ5LjcxNCAwIDE4Ni44NTcgMTczLjcxNCAxODYuODU3IDMyNHpNNTg1LjE0MyAyOTIuNTcxYzAgMTIxLjE0My05OC4yODYgMjE5LjQyOS0yMTkuNDI5IDIxOS40MjlzLTIxOS40MjktOTguMjg2LTIxOS40MjktMjE5LjQyOSA5OC4yODYtMjE5LjQyOSAyMTkuNDI5LTIxOS40MjkgMjE5LjQyOSA5OC4yODYgMjE5LjQyOSAyMTkuNDI5elwiXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFVzZXJzOiB7XG4gICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAxMjAwIDEyMDBcIixcbiAgICAgICAgICAgIHBhdGhzOiBbXG4gICAgICAgICAgICAgICAgXCJNMzM4Ljg1NyA1MTJjLTU5LjQyOSAxLjcxNC0xMTMuMTQzIDI3LjQyOS0xNTEuNDI5IDczLjE0M2gtNzYuNTcxYy01Ny4xNDMgMC0xMTAuODU3LTI3LjQyOS0xMTAuODU3LTkwLjg1NyAwLTQ2LjI4Ni0xLjcxNC0yMDEuNzE0IDcwLjg1Ny0yMDEuNzE0IDEyIDAgNzEuNDI5IDQ4LjU3MSAxNDguNTcxIDQ4LjU3MSAyNi4yODYgMCA1MS40MjktNC41NzEgNzYtMTMuMTQzLTEuNzE0IDEyLjU3MS0yLjg1NyAyNS4xNDMtMi44NTcgMzcuNzE0IDAgNTIgMTYuNTcxIDEwMy40MjkgNDYuMjg2IDE0Ni4yODZ6TTk1MC44NTcgODc2YzAgOTIuNTcxLTYxLjE0MyAxNDgtMTUyLjU3MSAxNDhoLTQ5OS40MjljLTkxLjQyOSAwLTE1Mi41NzEtNTUuNDI5LTE1Mi41NzEtMTQ4IDAtMTI5LjE0MyAzMC4yODYtMzI3LjQyOSAxOTcuNzE0LTMyNy40MjkgMTkuNDI5IDAgOTAuMjg2IDc5LjQyOSAyMDQuNTcxIDc5LjQyOXMxODUuMTQzLTc5LjQyOSAyMDQuNTcxLTc5LjQyOWMxNjcuNDI5IDAgMTk3LjcxNCAxOTguMjg2IDE5Ny43MTQgMzI3LjQyOXpNMzY1LjcxNCAxNDYuMjg2YzAgODAuNTcxLTY1LjcxNCAxNDYuMjg2LTE0Ni4yODYgMTQ2LjI4NnMtMTQ2LjI4Ni02NS43MTQtMTQ2LjI4Ni0xNDYuMjg2IDY1LjcxNC0xNDYuMjg2IDE0Ni4yODYtMTQ2LjI4NiAxNDYuMjg2IDY1LjcxNCAxNDYuMjg2IDE0Ni4yODZ6TTc2OCAzNjUuNzE0YzAgMTIxLjE0My05OC4yODYgMjE5LjQyOS0yMTkuNDI5IDIxOS40MjlzLTIxOS40MjktOTguMjg2LTIxOS40MjktMjE5LjQyOSA5OC4yODYtMjE5LjQyOSAyMTkuNDI5LTIxOS40MjkgMjE5LjQyOSA5OC4yODYgMjE5LjQyOSAyMTkuNDI5ek0xMDk3LjE0MyA0OTQuMjg2YzAgNjMuNDI5LTUzLjcxNCA5MC44NTctMTEwLjg1NyA5MC44NTdoLTc2LjU3MWMtMzguMjg2LTQ1LjcxNC05Mi03MS40MjktMTUxLjQyOS03My4xNDMgMjkuNzE0LTQyLjg1NyA0Ni4yODYtOTQuMjg2IDQ2LjI4Ni0xNDYuMjg2IDAtMTIuNTcxLTEuMTQzLTI1LjE0My0yLjg1Ny0zNy43MTQgMjQuNTcxIDguNTcxIDQ5LjcxNCAxMy4xNDMgNzYgMTMuMTQzIDc3LjE0MyAwIDEzNi41NzEtNDguNTcxIDE0OC41NzEtNDguNTcxIDcyLjU3MSAwIDcwLjg1NyAxNTUuNDI5IDcwLjg1NyAyMDEuNzE0ek0xMDI0IDE0Ni4yODZjMCA4MC41NzEtNjUuNzE0IDE0Ni4yODYtMTQ2LjI4NiAxNDYuMjg2cy0xNDYuMjg2LTY1LjcxNC0xNDYuMjg2LTE0Ni4yODYgNjUuNzE0LTE0Ni4yODYgMTQ2LjI4Ni0xNDYuMjg2IDE0Ni4yODYgNjUuNzE0IDE0Ni4yODYgMTQ2LjI4NnpcIlxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBTcGlubmVyOiB7XG4gICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAxMDI0IDEwMjRcIixcbiAgICAgICAgICAgIHBhdGhzOiBbXG4gICAgICAgICAgICAgICAgXCJNMTAwNS43MTQgNTEyYzAgMjcyLjU3MS0yMjEuMTQzIDQ5My43MTQtNDkzLjcxNCA0OTMuNzE0cy00OTMuNzE0LTIyMS4xNDMtNDkzLjcxNC00OTMuNzE0YzAtMjQ4IDE4Mi44NTctNDUzLjE0MyA0MjAuNTcxLTQ4OC41NzF2MTMwLjI4NmMtMTY2Ljg1NyAzMy43MTQtMjkyLjU3MSAxODEuNzE0LTI5Mi41NzEgMzU4LjI4NiAwIDIwMS43MTQgMTY0IDM2NS43MTQgMzY1LjcxNCAzNjUuNzE0czM2NS43MTQtMTY0IDM2NS43MTQtMzY1LjcxNGMwLTE3Ni41NzEtMTI1LjcxNC0zMjQuNTcxLTI5Mi41NzEtMzU4LjI4NnYtMTMwLjI4NmMyMzcuNzE0IDM1LjQyOSA0MjAuNTcxIDI0MC41NzEgNDIwLjU3MSA0ODguNTcxelwiXG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICB9XG59O1xuIiwiZXhwb3J0IHsgQXBwQ2xhc3NlcyB9IGZyb20gXCIuL2FwcC1jbGFzc2VzXCI7XG5leHBvcnQgeyBIdHRwVmVyYiB9IGZyb20gXCIuL2VudW1zXCI7XG5leHBvcnQgeyBIYW5kbGVyQ2xhc3NlcyB9IGZyb20gXCIuL2hhbmRsZXItY2xhc3Nlc1wiO1xuZXhwb3J0IHsgSWNvbnMgfSBmcm9tIFwiLi9pY29uXCI7XG5leHBvcnQgeyBJY29uQ29udGFpbmVyLCBJY29uRGVmaW5pdGlvbiB9IGZyb20gXCIuL2ljb24taW50ZXJmYWNlc1wiO1xuZXhwb3J0IHsgVGFiYmVkTmF2aWdhdG9yQnV0dG9uIH0gZnJvbSBcIi4vdGFiYmVkLW5hdmlnYXRvci1idXR0b25cIjtcbmV4cG9ydCB7IFJvdXRlUXVlcnlQYXJhbXMgfSBmcm9tIFwiLi9xdWVyeS1wYXJhbXNcIjtcbmV4cG9ydCB7IEFwaVJlc3VsdCwgUXVlcnlQYXJhbSwgUmVxdWVzdEJvZHksIE1lc3NhZ2VFbnRpdHksIFJlcXVlc3RIZWFkZXJzIH0gZnJvbSBcIi4vcmVzdC1jbGllbnRcIjtcbmV4cG9ydCB7IFNvY2tldENvbmZpZywgV1NNZXNzYWdlV3JhcHBlciwgV1NPdXRib3VuZE1lc3NhZ2UgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XG4iLCJpbXBvcnQgbG9jYWxGb3JhZ2UgZnJvbSBcImxvY2FsZm9yYWdlXCI7XG5pbXBvcnQgeyBMb2dnZXJUeXBlcyB9IGZyb20gXCIuLi9jbGllbnQvbG9nZ2VyL2xvZ2dlclwiO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgeyBNZXNzYWdlRW50aXR5IH0gZnJvbSBcIi4uL21vZGVsc1wiO1xuaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi9zdGF0ZVwiO1xuXG50eXBlIFBvdWNoUmVzcG9uc2UgPSB7XG5cbiAgICBvazogYm9vbGVhbjtcbiAgICBpZDogc3RyaW5nO1xufTtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0b3JlPFQgZXh0ZW5kcyBTdGF0ZSA9IFN0YXRlPiB7XG5cbiAgICAvLyA9PT0gUHJvdGVjdGVkID09PSAvL1xuXG4gICAgcHJvdGVjdGVkIHN0YXRlOiBUO1xuICAgIHByb3RlY3RlZCBuYW1lOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIGxvZ2dlcjogTG9nZ2VyO1xuXG4gICAgcHJpdmF0ZSBfZGI6IExvY2FsRm9yYWdlO1xuICAgIHByaXZhdGUgX3NhdmVEZWJvdW5jZXI6IG51bWJlcjtcbiAgICBwcml2YXRlIF9zYXZlVG9QZXJzaXN0ZW50UXVldWU6IFByb21pc2U8dm9pZD4gPSBQcm9taXNlLnJlc29sdmUoKTtcblxuICAgIC8vID09PSBDb25zdHJ1Y3RvciA9PT0gLy9cblxuICAgIGNvbnN0cnVjdG9yIChuYW1lOiBzdHJpbmcsIGxvZ2dlcjogTG9nZ2VyKSB7XG5cbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG4gICAgICAgIHRoaXMuX2RiID0gbG9jYWxGb3JhZ2UuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgICAgICAgbmFtZTogbmFtZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyA9PT0gUHVibGljID09PSAvL1xuXG4gICAgcHVibGljIGFzeW5jIGluaXQgKCk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBhd2FpdCB0aGlzLl9nZXRGcm9tUGVyc2lzdGVudCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRTdGF0ZTxOPiAoKTogTiB7XG5cbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUpLnJlZHVjZSgoYWNjLCBjdXIpID0+IHtcblxuICAgICAgICAgICAgaWYgKGN1ciAhPT0gXCJfaWRcIiAmJiBjdXIgIT09IFwibWVzc2FnZVF1ZXVlXCIpIHtcblxuICAgICAgICAgICAgICAgIGFjY1tjdXJdID0gdGhpcy5zdGF0ZVtjdXJdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuXG4gICAgICAgIH0sIHt9KSBhcyBOO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzZXRTdGF0ZSAoc3RhdGU6IFQpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICBjb25zdCBuZXdTdGF0ZTogVCA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IFwiX2lkXCI6IHRoaXMuc3RhdGUuX2lkLCBtZXNzYWdlUXVldWU6IHRoaXMuc3RhdGUubWVzc2FnZVF1ZXVlIHx8IFtdIH0pO1xuXG4gICAgICAgIGF3YWl0IHRoaXMuX3NhdmVUb1BlcnNpc3RlbnQobmV3U3RhdGUpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXdTdGF0ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY2xlYXJEYiAoKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5fZGIuY2xlYXIoKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5fZ2VuZXJhdGVJbml0aWFsU3RhdGUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVUb1BlcnNpc3RlbnQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RnJvbVN0YXRlPFQ+IChrZXk6IHN0cmluZyk6IFQge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlW2tleV0gfHwgbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc2F2ZVRvU3RhdGU8VD4gKGtleTogc3RyaW5nLCB2YWx1ZTogVCk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5fc2F2ZVRvUGVyc2lzdGVudCgpO1xuICAgIH1cblxuICAgIC8vID09PSBNZXNzYWdlIFF1ZXVlID09PSAvL1xuXG4gICAgcHVibGljIGFzeW5jIHNhdmVUb01lc3NhZ2VRdWV1ZSAobWVzc2FnZUVudGl0eTogTWVzc2FnZUVudGl0eSk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm1lc3NhZ2VRdWV1ZSAmJiB0aGlzLnN0YXRlLm1lc3NhZ2VRdWV1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGUubWVzc2FnZVF1ZXVlLnB1c2gobWVzc2FnZUVudGl0eSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGUubWVzc2FnZVF1ZXVlID0gW21lc3NhZ2VFbnRpdHldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX3NhdmVUb1BlcnNpc3RlbnQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgcmVtb3ZlRnJvbU1lc3NhZ2VRdWV1ZSAobWVzc2FnZUVudGl0eTogTWVzc2FnZUVudGl0eSk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIGNvbnN0IGlkeDogbnVtYmVyID0gdGhpcy5zdGF0ZS5tZXNzYWdlUXVldWUuZmluZEluZGV4KHggPT4geC5pZCA9PT0gbWVzc2FnZUVudGl0eS5pZCk7XG5cbiAgICAgICAgaWYgKGlkeCA+IC0xKSB7XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGUubWVzc2FnZVF1ZXVlLnNwbGljZShpZHgsIDEpO1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX3NhdmVUb1BlcnNpc3RlbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TWVzc2FnZVF1ZXVlICgpOiBNZXNzYWdlRW50aXR5W10ge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLm1lc3NhZ2VRdWV1ZTtcbiAgICB9XG5cbiAgICAvLyA9PT0gUHJvdGVjdGVkID09PSAvL1xuXG4gICAgcHJvdGVjdGVkIGFzeW5jIF9zYXZlVG9QZXJzaXN0ZW50IChzdGF0ZT86IFQpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fc2F2ZURlYm91bmNlcik7XG5cbiAgICAgICAgdGhpcy5fc2F2ZURlYm91bmNlciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coTG9nZ2VyVHlwZXMuRGF0YVN0b3JhZ2UsIFwiUGVyc2lzdGluZyBzdGF0ZSBub3cuLi5cIik7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9kYikge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fc2F2ZVRvUGVyc2lzdGVudFF1ZXVlID0gdGhpcy5fc2F2ZVRvUGVyc2lzdGVudFF1ZXVlLnRoZW4oYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX2RiLnNldEl0ZW0oXCJzdGF0ZVwiLCB0aGlzLnN0YXRlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKExvZ2dlclR5cGVzLkRhdGFTdG9yYWdlLCBcIlBlcnNpc3Rpbmcgc3RhdGUgY29tcGxldGUuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChleCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2VbdGhpcy5uYW1lXSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCA1MDApO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhc3luYyBfZ2V0RnJvbVBlcnNpc3RlbnQgKCk6IFByb21pc2U8VD4ge1xuXG4gICAgICAgIGlmICh0aGlzLl9kYikge1xuXG4gICAgICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGU6IFQgPSBhd2FpdCB0aGlzLl9kYi5nZXRJdGVtKFwic3RhdGVcIikgYXMgVDtcblxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZSkge1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dlbmVyYXRlSW5pdGlhbFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZTogVCA9IHRoaXMuX2dlbmVyYXRlSW5pdGlhbFN0YXRlKCk7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9zYXZlVG9QZXJzaXN0ZW50KCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgY29uc3Qgc3RhdGU6IFQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLm5hbWUpXG4gICAgICAgICAgICAgICAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubmFtZSkpXG4gICAgICAgICAgICAgICAgOiB0aGlzLl9nZW5lcmF0ZUluaXRpYWxTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF9nZW5lcmF0ZUluaXRpYWxTdGF0ZSAoKTogVDtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbmltcG9ydCB7XG4gIFByb3BlcnRpZXNDaGFuZ2VkQ29uc3RydWN0b3Jcbn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbWl4aW5zL3Byb3BlcnRpZXMtY2hhbmdlZC5qcyc7XG5pbXBvcnQge1Byb3BlcnRpZXNNaXhpbn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbWl4aW5zL3Byb3BlcnRpZXMtbWl4aW4uanMnO1xuaW1wb3J0IHtcbiAgUHJvcGVydGllc01peGluQ29uc3RydWN0b3Jcbn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbWl4aW5zL3Byb3BlcnRpZXMtbWl4aW4uanMnO1xuaW1wb3J0IHtjYW1lbFRvRGFzaENhc2V9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2Nhc2UtbWFwLmpzJztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdsaXQtaHRtbC9saWIvc2hhZHktcmVuZGVyLmpzJztcbmltcG9ydCB7VGVtcGxhdGVSZXN1bHR9IGZyb20gJ2xpdC1odG1sL2xpdC1odG1sLmpzJztcblxuZXhwb3J0IHtcbiAgUHJvcGVydGllc0NoYW5nZWRDb25zdHJ1Y3RvclxufSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9taXhpbnMvcHJvcGVydGllcy1jaGFuZ2VkLmpzJztcbmV4cG9ydCB7XG4gIFByb3BlcnRpZXNNaXhpbkNvbnN0cnVjdG9yXG59IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL21peGlucy9wcm9wZXJ0aWVzLW1peGluLmpzJztcbmV4cG9ydCB7aHRtbCwgc3ZnfSBmcm9tICdsaXQtaHRtbC9saWIvbGl0LWV4dGVuZGVkLmpzJztcblxuLy8gVGhpcyBpcyBhIGhhY2sgdG8gZ2V0IHRzYyB0byBub3QgY29tcGxhaW4gYWJvdXQgdW51c2VkIGludGVyZmFjZXMgYW5kXG4vLyBzdGlsbCBnZW5lcmF0ZSB0aGUgdHlwZSBkZWNsYXJhdGlvbnMgcHJvcGVybHlcbmV4cG9ydCB0eXBlIF9fdW51c2VkID0gUHJvcGVydGllc0NoYW5nZWRDb25zdHJ1Y3RvciZQcm9wZXJ0aWVzTWl4aW5Db25zdHJ1Y3RvcjtcblxuLyoqXG4gKiBSZW5kZXJzIGF0dHJpYnV0ZXMgdG8gdGhlIGdpdmVuIGVsZW1lbnQgYmFzZWQgb24gdGhlIGBhdHRySW5mb2Agb2JqZWN0IHdoZXJlXG4gKiBib29sZWFuIHZhbHVlcyBhcmUgYWRkZWQvcmVtb3ZlZCBhcyBhdHRyaWJ1dGVzLlxuICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCBvbiB3aGljaCB0byBzZXQgYXR0cmlidXRlcy5cbiAqIEBwYXJhbSBhdHRySW5mbyBPYmplY3QgZGVzY3JpYmluZyBhdHRyaWJ1dGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQXR0cmlidXRlcyhcbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudCwgYXR0ckluZm86IHtbbmFtZTogc3RyaW5nXTogc3RyaW5nfGJvb2xlYW58bnVtYmVyfSkge1xuICBmb3IgKGNvbnN0IGEgaW4gYXR0ckluZm8pIHtcbiAgICBjb25zdCB2ID0gYXR0ckluZm9bYV0gPT09IHRydWUgPyAnJyA6IGF0dHJJbmZvW2FdO1xuICAgIGlmICh2IHx8IHYgPT09ICcnIHx8IHYgPT09IDApIHtcbiAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZShhKSAhPT0gdikge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhLCBTdHJpbmcodikpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoYSkpIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGEpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgb2YgY3NzIGNsYXNzIG5hbWVzIGZvcm1lZCBieSB0YWtpbmcgdGhlIHByb3BlcnRpZXNcbiAqIGluIHRoZSBgY2xhc3NJbmZvYCBvYmplY3QgYW5kIGFwcGVuZGluZyB0aGUgcHJvcGVydHkgbmFtZSB0byB0aGUgc3RyaW5nIG9mXG4gKiBjbGFzcyBuYW1lcyBpZiB0aGUgcHJvcGVydHkgdmFsdWUgaXMgdHJ1dGh5LlxuICogQHBhcmFtIGNsYXNzSW5mb1xuICovXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NTdHJpbmcoXG4gICAgY2xhc3NJbmZvOiB7W25hbWU6IHN0cmluZ106IHN0cmluZ3xib29sZWFufG51bWJlcn0pIHtcbiAgY29uc3QgbyA9IFtdO1xuICBmb3IgKGNvbnN0IG5hbWUgaW4gY2xhc3NJbmZvKSB7XG4gICAgY29uc3QgdiA9IGNsYXNzSW5mb1tuYW1lXTtcbiAgICBpZiAodikge1xuICAgICAgby5wdXNoKG5hbWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gby5qb2luKCcgJyk7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGNzcyBzdHlsZSBzdHJpbmcgZm9ybWVkIGJ5IHRha2luZyB0aGUgcHJvcGVydGllcyBpbiB0aGUgYHN0eWxlSW5mb2BcbiAqIG9iamVjdCBhbmQgYXBwZW5kaW5nIHRoZSBwcm9wZXJ0eSBuYW1lIChkYXNoLWNhc2VkKSBjb2xvbiB0aGVcbiAqIHByb3BlcnR5IHZhbHVlLiBQcm9wZXJ0aWVzIGFyZSBzZXBhcmF0ZWQgYnkgYSBzZW1pLWNvbG9uLlxuICogQHBhcmFtIHN0eWxlSW5mb1xuICovXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVTdHJpbmcoXG4gICAgc3R5bGVJbmZvOiB7W25hbWU6IHN0cmluZ106IHN0cmluZ3xib29sZWFufG51bWJlcn0pIHtcbiAgY29uc3QgbyA9IFtdO1xuICBmb3IgKGNvbnN0IG5hbWUgaW4gc3R5bGVJbmZvKSB7XG4gICAgY29uc3QgdiA9IHN0eWxlSW5mb1tuYW1lXTtcbiAgICBpZiAodiB8fCB2ID09PSAwKSB7XG4gICAgICBvLnB1c2goYCR7Y2FtZWxUb0Rhc2hDYXNlKG5hbWUpfTogJHt2fWApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gby5qb2luKCc7ICcpO1xufVxuXG5leHBvcnQgY2xhc3MgTGl0RWxlbWVudCBleHRlbmRzIFByb3BlcnRpZXNNaXhpblxuKEhUTUxFbGVtZW50KSB7XG5cbiAgcHJpdmF0ZSBfX3JlbmRlckNvbXBsZXRlOiBQcm9taXNlPGJvb2xlYW4+fG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9fcmVzb2x2ZVJlbmRlckNvbXBsZXRlOiBGdW5jdGlvbnxudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfX2lzSW52YWxpZDogQm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9faXNDaGFuZ2luZzogQm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9yb290PzogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50O1xuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB3aGljaCBzZXRzIHVwIGVsZW1lbnQgcmVuZGVyaW5nIGJ5IGNhbGxpbmcqIGBfY3JlYXRlUm9vdGBcbiAgICogYW5kIGBfZmlyc3RSZW5kZXJlZGAuXG4gICAqL1xuICByZWFkeSgpIHtcbiAgICB0aGlzLl9yb290ID0gdGhpcy5fY3JlYXRlUm9vdCgpO1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5fZmlyc3RSZW5kZXJlZCgpO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHdpbmRvdy5TaGFkeUNTUyAmJiB0aGlzLl9yb290KSB7XG4gICAgICB3aW5kb3cuU2hhZHlDU1Muc3R5bGVFbGVtZW50KHRoaXMpO1xuICAgIH1cbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBhZnRlciB0aGUgZWxlbWVudCBET00gaXMgcmVuZGVyZWQgZm9yIHRoZSBmaXJzdCB0aW1lLlxuICAgKiBJbXBsZW1lbnQgdG8gcGVyZm9ybSB0YXNrcyBhZnRlciBmaXJzdCByZW5kZXJpbmcgbGlrZSBjYXB0dXJpbmcgYVxuICAgKiByZWZlcmVuY2UgdG8gYSBzdGF0aWMgbm9kZSB3aGljaCBtdXN0IGJlIGRpcmVjdGx5IG1hbmlwdWxhdGVkLlxuICAgKiBUaGlzIHNob3VsZCBub3QgYmUgY29tbW9ubHkgbmVlZGVkLiBGb3IgdGFza3Mgd2hpY2ggc2hvdWxkIGJlIHBlcmZvcm1lZFxuICAgKiBiZWZvcmUgZmlyc3QgcmVuZGVyLCB1c2UgdGhlIGVsZW1lbnQgY29uc3RydWN0b3IuXG4gICAqL1xuICBfZmlyc3RSZW5kZXJlZCgpIHt9XG5cbiAgLyoqXG4gICAqIEltcGxlbWVudCB0byBjdXN0b21pemUgd2hlcmUgdGhlIGVsZW1lbnQncyB0ZW1wbGF0ZSBpcyByZW5kZXJlZCBieVxuICAgKiByZXR1cm5pbmcgYW4gZWxlbWVudCBpbnRvIHdoaWNoIHRvIHJlbmRlci4gQnkgZGVmYXVsdCB0aGlzIGNyZWF0ZXNcbiAgICogYSBzaGFkb3dSb290IGZvciB0aGUgZWxlbWVudC4gVG8gcmVuZGVyIGludG8gdGhlIGVsZW1lbnQncyBjaGlsZE5vZGVzLFxuICAgKiByZXR1cm4gYHRoaXNgLlxuICAgKiBAcmV0dXJucyB7RWxlbWVudHxEb2N1bWVudEZyYWdtZW50fSBSZXR1cm5zIGEgbm9kZSBpbnRvIHdoaWNoIHRvIHJlbmRlci5cbiAgICovXG4gIHByb3RlY3RlZCBfY3JlYXRlUm9vdCgpOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnQge1xuICAgIHJldHVybiB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZSA6ICdvcGVuJ30pO1xuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHdoaWNoIHJldHVybnMgdGhlIHZhbHVlIG9mIGBfc2hvdWxkUmVuZGVyYCB3aGljaCB1c2Vyc1xuICAgKiBzaG91bGQgaW1wbGVtZW50IHRvIGNvbnRyb2wgcmVuZGVyaW5nLiBJZiB0aGlzIG1ldGhvZCByZXR1cm5zIGZhbHNlLFxuICAgKiBfcHJvcGVydGllc0NoYW5nZWQgd2lsbCBub3QgYmUgY2FsbGVkIGFuZCBubyByZW5kZXJpbmcgd2lsbCBvY2N1ciBldmVuXG4gICAqIGlmIHByb3BlcnR5IHZhbHVlcyBjaGFuZ2Ugb3IgYHJlcXVlc3RSZW5kZXJgIGlzIGNhbGxlZC5cbiAgICogQHBhcmFtIF9wcm9wcyBDdXJyZW50IGVsZW1lbnQgcHJvcGVydGllc1xuICAgKiBAcGFyYW0gX2NoYW5nZWRQcm9wcyBDaGFuZ2luZyBlbGVtZW50IHByb3BlcnRpZXNcbiAgICogQHBhcmFtIF9wcmV2UHJvcHMgUHJldmlvdXMgZWxlbWVudCBwcm9wZXJ0aWVzXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBEZWZhdWx0IGltcGxlbWVudGF0aW9uIGFsd2F5cyByZXR1cm5zIHRydWUuXG4gICAqL1xuICBfc2hvdWxkUHJvcGVydGllc0NoYW5nZShfcHJvcHM6IG9iamVjdCwgX2NoYW5nZWRQcm9wczogb2JqZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfcHJldlByb3BzOiBvYmplY3QpOiBib29sZWFuIHtcbiAgICBjb25zdCBzaG91bGRSZW5kZXIgPSB0aGlzLl9zaG91bGRSZW5kZXIoX3Byb3BzLCBfY2hhbmdlZFByb3BzLCBfcHJldlByb3BzKTtcbiAgICBpZiAoIXNob3VsZFJlbmRlciAmJiB0aGlzLl9fcmVzb2x2ZVJlbmRlckNvbXBsZXRlKSB7XG4gICAgICB0aGlzLl9fcmVzb2x2ZVJlbmRlckNvbXBsZXRlKGZhbHNlKTtcbiAgICB9XG4gICAgcmV0dXJuIHNob3VsZFJlbmRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBsZW1lbnQgdG8gY29udHJvbCBpZiByZW5kZXJpbmcgc2hvdWxkIG9jY3VyIHdoZW4gcHJvcGVydHkgdmFsdWVzXG4gICAqIGNoYW5nZSBvciBgcmVxdWVzdFJlbmRlcmAgaXMgY2FsbGVkLiBCeSBkZWZhdWx0LCB0aGlzIG1ldGhvZCBhbHdheXNcbiAgICogcmV0dXJucyB0cnVlLCBidXQgdGhpcyBjYW4gYmUgY3VzdG9taXplZCBhcyBhbiBvcHRpbWl6YXRpb24gdG8gYXZvaWRcbiAgICogcmVuZGVyaW5nIHdvcmsgd2hlbiBjaGFuZ2VzIG9jY3VyIHdoaWNoIHNob3VsZCBub3QgYmUgcmVuZGVyZWQuXG4gICAqIEBwYXJhbSBfcHJvcHMgQ3VycmVudCBlbGVtZW50IHByb3BlcnRpZXNcbiAgICogQHBhcmFtIF9jaGFuZ2VkUHJvcHMgQ2hhbmdpbmcgZWxlbWVudCBwcm9wZXJ0aWVzXG4gICAqIEBwYXJhbSBfcHJldlByb3BzIFByZXZpb3VzIGVsZW1lbnQgcHJvcGVydGllc1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBhbHdheXMgcmV0dXJucyB0cnVlLlxuICAgKi9cbiAgcHJvdGVjdGVkIF9zaG91bGRSZW5kZXIoX3Byb3BzOiBvYmplY3QsIF9jaGFuZ2VkUHJvcHM6IG9iamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ByZXZQcm9wczogb2JqZWN0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogT3ZlcnJpZGUgd2hpY2ggcGVyZm9ybXMgZWxlbWVudCByZW5kZXJpbmcgYnkgY2FsbGluZ1xuICAgKiBgX3JlbmRlcmAsIGBfYXBwbHlSZW5kZXJgLCBhbmQgZmluYWxseSBgX2RpZFJlbmRlcmAuXG4gICAqIEBwYXJhbSBwcm9wcyBDdXJyZW50IGVsZW1lbnQgcHJvcGVydGllc1xuICAgKiBAcGFyYW0gY2hhbmdlZFByb3BzIENoYW5naW5nIGVsZW1lbnQgcHJvcGVydGllc1xuICAgKiBAcGFyYW0gcHJldlByb3BzIFByZXZpb3VzIGVsZW1lbnQgcHJvcGVydGllc1xuICAgKi9cbiAgX3Byb3BlcnRpZXNDaGFuZ2VkKHByb3BzOiBvYmplY3QsIGNoYW5nZWRQcm9wczogb2JqZWN0LCBwcmV2UHJvcHM6IG9iamVjdCkge1xuICAgIHN1cGVyLl9wcm9wZXJ0aWVzQ2hhbmdlZChwcm9wcywgY2hhbmdlZFByb3BzLCBwcmV2UHJvcHMpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX3JlbmRlcihwcm9wcyk7XG4gICAgaWYgKHJlc3VsdCAmJiB0aGlzLl9yb290ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2FwcGx5UmVuZGVyKHJlc3VsdCwgdGhpcy5fcm9vdCEpO1xuICAgIH1cbiAgICB0aGlzLl9kaWRSZW5kZXIocHJvcHMsIGNoYW5nZWRQcm9wcywgcHJldlByb3BzKTtcbiAgICBpZiAodGhpcy5fX3Jlc29sdmVSZW5kZXJDb21wbGV0ZSkge1xuICAgICAgdGhpcy5fX3Jlc29sdmVSZW5kZXJDb21wbGV0ZSh0cnVlKTtcbiAgICB9XG4gIH1cblxuICBfZmx1c2hQcm9wZXJ0aWVzKCkge1xuICAgIHRoaXMuX19pc0NoYW5naW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9faXNJbnZhbGlkID0gZmFsc2U7XG4gICAgc3VwZXIuX2ZsdXNoUHJvcGVydGllcygpO1xuICAgIHRoaXMuX19pc0NoYW5naW5nID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogT3ZlcnJpZGUgd2hpY2ggd2FybnMgd2hlbiBhIHVzZXIgYXR0ZW1wdHMgdG8gY2hhbmdlIGEgcHJvcGVydHkgZHVyaW5nXG4gICAqIHRoZSByZW5kZXJpbmcgbGlmZWN5Y2xlLiBUaGlzIGlzIGFuIGFudGktcGF0dGVybiBhbmQgc2hvdWxkIGJlIGF2b2lkZWQuXG4gICAqIEBwYXJhbSBwcm9wZXJ0eSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gdmFsdWUge2FueX1cbiAgICogQHBhcmFtIG9sZCB7YW55fVxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxuICBfc2hvdWxkUHJvcGVydHlDaGFuZ2UocHJvcGVydHk6IHN0cmluZywgdmFsdWU6IGFueSwgb2xkOiBhbnkpIHtcbiAgICBjb25zdCBjaGFuZ2UgPSBzdXBlci5fc2hvdWxkUHJvcGVydHlDaGFuZ2UocHJvcGVydHksIHZhbHVlLCBvbGQpO1xuICAgIGlmIChjaGFuZ2UgJiYgdGhpcy5fX2lzQ2hhbmdpbmcpIHtcbiAgICAgIGNvbnNvbGUudHJhY2UoXG4gICAgICAgICAgYFNldHRpbmcgcHJvcGVydGllcyBpbiByZXNwb25zZSB0byBvdGhlciBwcm9wZXJ0aWVzIGNoYW5naW5nIGAgK1xuICAgICAgICAgIGBjb25zaWRlcmVkIGhhcm1mdWwuIFNldHRpbmcgJyR7cHJvcGVydHl9JyBmcm9tIGAgK1xuICAgICAgICAgIGAnJHt0aGlzLl9nZXRQcm9wZXJ0eShwcm9wZXJ0eSl9JyB0byAnJHt2YWx1ZX0nLmApO1xuICAgIH1cbiAgICByZXR1cm4gY2hhbmdlO1xuICB9XG5cbiAgLyoqXG4gICAqIEltcGxlbWVudCB0byBkZXNjcmliZSB0aGUgRE9NIHdoaWNoIHNob3VsZCBiZSByZW5kZXJlZCBpbiB0aGUgZWxlbWVudC5cbiAgICogSWRlYWxseSwgdGhlIGltcGxlbWVudGF0aW9uIGlzIGEgcHVyZSBmdW5jdGlvbiB1c2luZyBvbmx5IHByb3BzIHRvIGRlc2NyaWJlXG4gICAqIHRoZSBlbGVtZW50IHRlbXBsYXRlLiBUaGUgaW1wbGVtZW50YXRpb24gbXVzdCByZXR1cm4gYSBgbGl0LWh0bWxgXG4gICAqIFRlbXBsYXRlUmVzdWx0LiBCeSBkZWZhdWx0IHRoaXMgdGVtcGxhdGUgaXMgcmVuZGVyZWQgaW50byB0aGUgZWxlbWVudCdzXG4gICAqIHNoYWRvd1Jvb3QuIFRoaXMgY2FuIGJlIGN1c3RvbWl6ZWQgYnkgaW1wbGVtZW50aW5nIGBfY3JlYXRlUm9vdGAuIFRoaXNcbiAgICogbWV0aG9kIG11c3QgYmUgaW1wbGVtZW50ZWQuXG4gICAqIEBwYXJhbSB7Kn0gX3Byb3BzIEN1cnJlbnQgZWxlbWVudCBwcm9wZXJ0aWVzXG4gICAqIEByZXR1cm5zIHtUZW1wbGF0ZVJlc3VsdH0gTXVzdCByZXR1cm4gYSBsaXQtaHRtbCBUZW1wbGF0ZVJlc3VsdC5cbiAgICovXG4gIHByb3RlY3RlZCBfcmVuZGVyKF9wcm9wczogb2JqZWN0KTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHRocm93IG5ldyBFcnJvcignX3JlbmRlcigpIG5vdCBpbXBsZW1lbnRlZCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGdpdmVuIGxpdC1odG1sIHRlbXBsYXRlIGByZXN1bHRgIGludG8gdGhlIGdpdmVuIGBub2RlYC5cbiAgICogSW1wbGVtZW50IHRvIGN1c3RvbWl6ZSB0aGUgd2F5IHJlbmRlcmluZyBpcyBhcHBsaWVkLiBUaGlzIGlzIHNob3VsZCBub3RcbiAgICogdHlwaWNhbGx5IGJlIG5lZWRlZCBhbmQgaXMgcHJvdmlkZWQgZm9yIGFkdmFuY2VkIHVzZSBjYXNlcy5cbiAgICogQHBhcmFtIHJlc3VsdCB7VGVtcGxhdGVSZXN1bHR9IGBsaXQtaHRtbGAgdGVtcGxhdGUgcmVzdWx0IHRvIHJlbmRlclxuICAgKiBAcGFyYW0gbm9kZSB7RWxlbWVudHxEb2N1bWVudEZyYWdtZW50fSBub2RlIGludG8gd2hpY2ggdG8gcmVuZGVyXG4gICAqL1xuICBwcm90ZWN0ZWQgX2FwcGx5UmVuZGVyKHJlc3VsdDogVGVtcGxhdGVSZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgcmVuZGVyKHJlc3VsdCwgbm9kZSwgdGhpcy5sb2NhbE5hbWUhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgYWZ0ZXIgZWxlbWVudCBET00gaGFzIGJlZW4gcmVuZGVyZWQuIEltcGxlbWVudCB0b1xuICAgKiBkaXJlY3RseSBjb250cm9sIHJlbmRlcmVkIERPTS4gVHlwaWNhbGx5IHRoaXMgaXMgbm90IG5lZWRlZCBhcyBgbGl0LWh0bWxgXG4gICAqIGNhbiBiZSB1c2VkIGluIHRoZSBgX3JlbmRlcmAgbWV0aG9kIHRvIHNldCBwcm9wZXJ0aWVzLCBhdHRyaWJ1dGVzLCBhbmRcbiAgICogZXZlbnQgbGlzdGVuZXJzLiBIb3dldmVyLCBpdCBpcyBzb21ldGltZXMgdXNlZnVsIGZvciBjYWxsaW5nIG1ldGhvZHMgb25cbiAgICogcmVuZGVyZWQgZWxlbWVudHMsIGxpa2UgY2FsbGluZyBgZm9jdXMoKWAgb24gYW4gZWxlbWVudCB0byBmb2N1cyBpdC5cbiAgICogQHBhcmFtIF9wcm9wcyBDdXJyZW50IGVsZW1lbnQgcHJvcGVydGllc1xuICAgKiBAcGFyYW0gX2NoYW5nZWRQcm9wcyBDaGFuZ2luZyBlbGVtZW50IHByb3BlcnRpZXNcbiAgICogQHBhcmFtIF9wcmV2UHJvcHMgUHJldmlvdXMgZWxlbWVudCBwcm9wZXJ0aWVzXG4gICAqL1xuICBwcm90ZWN0ZWQgX2RpZFJlbmRlcihfcHJvcHM6IG9iamVjdCwgX2NoYW5nZWRQcm9wczogb2JqZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICBfcHJldlByb3BzOiBvYmplY3QpIHt9XG5cbiAgLyoqXG4gICAqIENhbGwgdG8gcmVxdWVzdCB0aGUgZWxlbWVudCB0byBhc3luY2hyb25vdXNseSByZS1yZW5kZXIgcmVnYXJkbGVzc1xuICAgKiBvZiB3aGV0aGVyIG9yIG5vdCBhbnkgcHJvcGVydHkgY2hhbmdlcyBhcmUgcGVuZGluZy5cbiAgICovXG4gIHJlcXVlc3RSZW5kZXIoKSB7IHRoaXMuX2ludmFsaWRhdGVQcm9wZXJ0aWVzKCk7IH1cblxuICAvKipcbiAgICogT3ZlcnJpZGUgd2hpY2ggcHJvdmlkZXMgdHJhY2tpbmcgb2YgaW52YWxpZGF0ZWQgc3RhdGUuXG4gICAqL1xuICBfaW52YWxpZGF0ZVByb3BlcnRpZXMoKSB7XG4gICAgdGhpcy5fX2lzSW52YWxpZCA9IHRydWU7XG4gICAgc3VwZXIuX2ludmFsaWRhdGVQcm9wZXJ0aWVzKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgYWZ0ZXIgdGhlIGVsZW1lbnQgbmV4dCByZW5kZXJzLlxuICAgKiBUaGUgcHJvbWlzZSByZXNvbHZlcyB0byBgdHJ1ZWAgaWYgdGhlIGVsZW1lbnQgcmVuZGVyZWQgYW5kIGBmYWxzZWAgaWYgdGhlXG4gICAqIGVsZW1lbnQgZGlkIG5vdCByZW5kZXIuXG4gICAqIFRoaXMgaXMgdXNlZnVsIHdoZW4gdXNlcnMgKGUuZy4gdGVzdHMpIG5lZWQgdG8gcmVhY3QgdG8gdGhlIHJlbmRlcmVkIHN0YXRlXG4gICAqIG9mIHRoZSBlbGVtZW50IGFmdGVyIGEgY2hhbmdlIGlzIG1hZGUuXG4gICAqIFRoaXMgY2FuIGFsc28gYmUgdXNlZnVsIGluIGV2ZW50IGhhbmRsZXJzIGlmIGl0IGlzIGRlc2lyZWFibGUgdG8gd2FpdFxuICAgKiB0byBzZW5kIGFuIGV2ZW50IHVudGlsIGFmdGVyIHJlbmRlcmluZy4gSWYgcG9zc2libGUgaW1wbGVtZW50IHRoZVxuICAgKiBgX2RpZFJlbmRlcmAgbWV0aG9kIHRvIGRpcmVjdGx5IHJlc3BvbmQgdG8gcmVuZGVyaW5nIHdpdGhpbiB0aGVcbiAgICogcmVuZGVyaW5nIGxpZmVjeWNsZS5cbiAgICovXG4gIGdldCByZW5kZXJDb21wbGV0ZSgpIHtcbiAgICBpZiAoIXRoaXMuX19yZW5kZXJDb21wbGV0ZSkge1xuICAgICAgdGhpcy5fX3JlbmRlckNvbXBsZXRlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgdGhpcy5fX3Jlc29sdmVSZW5kZXJDb21wbGV0ZSA9ICh2YWx1ZTogYm9vbGVhbikgPT4ge1xuICAgICAgICAgIHRoaXMuX19yZXNvbHZlUmVuZGVyQ29tcGxldGUgPSB0aGlzLl9fcmVuZGVyQ29tcGxldGUgPSBudWxsO1xuICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBpZiAoIXRoaXMuX19pc0ludmFsaWQgJiYgdGhpcy5fX3Jlc29sdmVSZW5kZXJDb21wbGV0ZSkge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMuX19yZXNvbHZlUmVuZGVyQ29tcGxldGUhKGZhbHNlKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9fcmVuZGVyQ29tcGxldGU7XG4gIH1cbn1cbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJy4uL3V0aWxzL2Jvb3QuanMnO1xuXG5pbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSAnLi4vdXRpbHMvbWl4aW4uanMnO1xuaW1wb3J0IHsgbWljcm9UYXNrIH0gZnJvbSAnLi4vdXRpbHMvYXN5bmMuanMnO1xuXG4vKiogQGNvbnN0IHshQXN5bmNJbnRlcmZhY2V9ICovXG5jb25zdCBtaWNyb3Rhc2sgPSBtaWNyb1Rhc2s7XG5cbi8qKlxuICogRWxlbWVudCBjbGFzcyBtaXhpbiB0aGF0IHByb3ZpZGVzIGJhc2ljIG1ldGEtcHJvZ3JhbW1pbmcgZm9yIGNyZWF0aW5nIG9uZVxuICogb3IgbW9yZSBwcm9wZXJ0eSBhY2Nlc3NvcnMgKGdldHRlci9zZXR0ZXIgcGFpcikgdGhhdCBlbnF1ZXVlIGFuIGFzeW5jXG4gKiAoYmF0Y2hlZCkgYF9wcm9wZXJ0aWVzQ2hhbmdlZGAgY2FsbGJhY2suXG4gKlxuICogRm9yIGJhc2ljIHVzYWdlIG9mIHRoaXMgbWl4aW4sIGNhbGwgYE15Q2xhc3MuY3JlYXRlUHJvcGVydGllcyhwcm9wcylgXG4gKiBvbmNlIGF0IGNsYXNzIGRlZmluaXRpb24gdGltZSB0byBjcmVhdGUgcHJvcGVydHkgYWNjZXNzb3JzIGZvciBwcm9wZXJ0aWVzXG4gKiBuYW1lZCBpbiBwcm9wcywgaW1wbGVtZW50IGBfcHJvcGVydGllc0NoYW5nZWRgIHRvIHJlYWN0IGFzIGRlc2lyZWQgdG9cbiAqIHByb3BlcnR5IGNoYW5nZXMsIGFuZCBpbXBsZW1lbnQgYHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKClgIGFuZFxuICogaW5jbHVkZSBsb3dlcmNhc2UgdmVyc2lvbnMgb2YgYW55IHByb3BlcnR5IG5hbWVzIHRoYXQgc2hvdWxkIGJlIHNldCBmcm9tXG4gKiBhdHRyaWJ1dGVzLiBMYXN0LCBjYWxsIGB0aGlzLl9lbmFibGVQcm9wZXJ0aWVzKClgIGluIHRoZSBlbGVtZW50J3NcbiAqIGBjb25uZWN0ZWRDYWxsYmFja2AgdG8gZW5hYmxlIHRoZSBhY2Nlc3NvcnMuXG4gKlxuICogQG1peGluRnVuY3Rpb25cbiAqIEBwb2x5bWVyXG4gKiBAc3VtbWFyeSBFbGVtZW50IGNsYXNzIG1peGluIGZvciByZWFjdGluZyB0byBwcm9wZXJ0eSBjaGFuZ2VzIGZyb21cbiAqICAgZ2VuZXJhdGVkIHByb3BlcnR5IGFjY2Vzc29ycy5cbiAqL1xuZXhwb3J0IGNvbnN0IFByb3BlcnRpZXNDaGFuZ2VkID0gZGVkdXBpbmdNaXhpbihcbiAgICAvKipcbiAgICAgKiBAdGVtcGxhdGUgVFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24obmV3OlQpfSBzdXBlckNsYXNzIENsYXNzIHRvIGFwcGx5IG1peGluIHRvLlxuICAgICAqIEByZXR1cm4ge2Z1bmN0aW9uKG5ldzpUKX0gc3VwZXJDbGFzcyB3aXRoIG1peGluIGFwcGxpZWQuXG4gICAgICovXG4gICAgKHN1cGVyQ2xhc3MpID0+IHtcblxuICAvKipcbiAgICogQHBvbHltZXJcbiAgICogQG1peGluQ2xhc3NcbiAgICogQGltcGxlbWVudHMge1BvbHltZXJfUHJvcGVydGllc0NoYW5nZWR9XG4gICAqIEB1bnJlc3RyaWN0ZWRcbiAgICovXG4gIGNsYXNzIFByb3BlcnRpZXNDaGFuZ2VkIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHByb3BlcnR5IGFjY2Vzc29ycyBmb3IgdGhlIGdpdmVuIHByb3BlcnR5IG5hbWVzLlxuICAgICAqIEBwYXJhbSB7IU9iamVjdH0gcHJvcHMgT2JqZWN0IHdob3NlIGtleXMgYXJlIG5hbWVzIG9mIGFjY2Vzc29ycy5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlUHJvcGVydGllcyhwcm9wcykge1xuICAgICAgY29uc3QgcHJvdG8gPSB0aGlzLnByb3RvdHlwZTtcbiAgICAgIGZvciAobGV0IHByb3AgaW4gcHJvcHMpIHtcbiAgICAgICAgLy8gZG9uJ3Qgc3RvbXAgYW4gZXhpc3RpbmcgYWNjZXNzb3JcbiAgICAgICAgaWYgKCEocHJvcCBpbiBwcm90bykpIHtcbiAgICAgICAgICBwcm90by5fY3JlYXRlUHJvcGVydHlBY2Nlc3Nvcihwcm9wKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXR0cmlidXRlIG5hbWUgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgZ2l2ZW4gcHJvcGVydHkuXG4gICAgICogVGhlIGF0dHJpYnV0ZSBuYW1lIGlzIHRoZSBsb3dlcmNhc2VkIHByb3BlcnR5IG5hbWUuIE92ZXJyaWRlIHRvXG4gICAgICogY3VzdG9taXplIHRoaXMgbWFwcGluZy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHkgUHJvcGVydHkgdG8gY29udmVydFxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gQXR0cmlidXRlIG5hbWUgY29ycmVzcG9uZGluZyB0byB0aGUgZ2l2ZW4gcHJvcGVydHkuXG4gICAgICpcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgc3RhdGljIGF0dHJpYnV0ZU5hbWVGb3JQcm9wZXJ0eShwcm9wZXJ0eSkge1xuICAgICAgcmV0dXJuIHByb3BlcnR5LnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgcG9pbnQgdG8gcHJvdmlkZSBhIHR5cGUgdG8gd2hpY2ggdG8gZGVzZXJpYWxpemUgYSB2YWx1ZSB0b1xuICAgICAqIGEgZ2l2ZW4gcHJvcGVydHkuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgTmFtZSBvZiBwcm9wZXJ0eVxuICAgICAqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHN0YXRpYyB0eXBlRm9yUHJvcGVydHkobmFtZSkgeyB9IC8vZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHNldHRlci9nZXR0ZXIgcGFpciBmb3IgdGhlIG5hbWVkIHByb3BlcnR5IHdpdGggaXRzIG93blxuICAgICAqIGxvY2FsIHN0b3JhZ2UuICBUaGUgZ2V0dGVyIHJldHVybnMgdGhlIHZhbHVlIGluIHRoZSBsb2NhbCBzdG9yYWdlLFxuICAgICAqIGFuZCB0aGUgc2V0dGVyIGNhbGxzIGBfc2V0UHJvcGVydHlgLCB3aGljaCB1cGRhdGVzIHRoZSBsb2NhbCBzdG9yYWdlXG4gICAgICogZm9yIHRoZSBwcm9wZXJ0eSBhbmQgZW5xdWV1ZXMgYSBgX3Byb3BlcnRpZXNDaGFuZ2VkYCBjYWxsYmFjay5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIG1heSBiZSBjYWxsZWQgb24gYSBwcm90b3R5cGUgb3IgYW4gaW5zdGFuY2UuICBDYWxsaW5nXG4gICAgICogdGhpcyBtZXRob2QgbWF5IG92ZXJ3cml0ZSBhIHByb3BlcnR5IHZhbHVlIHRoYXQgYWxyZWFkeSBleGlzdHMgb25cbiAgICAgKiB0aGUgcHJvdG90eXBlL2luc3RhbmNlIGJ5IGNyZWF0aW5nIHRoZSBhY2Nlc3Nvci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eSBOYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbj19IHJlYWRPbmx5IFdoZW4gdHJ1ZSwgbm8gc2V0dGVyIGlzIGNyZWF0ZWQ7IHRoZVxuICAgICAqICAgcHJvdGVjdGVkIGBfc2V0UHJvcGVydHlgIGZ1bmN0aW9uIG11c3QgYmUgdXNlZCB0byBzZXQgdGhlIHByb3BlcnR5XG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgX2NyZWF0ZVByb3BlcnR5QWNjZXNzb3IocHJvcGVydHksIHJlYWRPbmx5KSB7XG4gICAgICB0aGlzLl9hZGRQcm9wZXJ0eVRvQXR0cmlidXRlTWFwKHByb3BlcnR5KTtcbiAgICAgIGlmICghdGhpcy5oYXNPd25Qcm9wZXJ0eSgnX19kYXRhSGFzQWNjZXNzb3InKSkge1xuICAgICAgICB0aGlzLl9fZGF0YUhhc0FjY2Vzc29yID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fX2RhdGFIYXNBY2Nlc3Nvcik7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuX19kYXRhSGFzQWNjZXNzb3JbcHJvcGVydHldKSB7XG4gICAgICAgIHRoaXMuX19kYXRhSGFzQWNjZXNzb3JbcHJvcGVydHldID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fZGVmaW5lUHJvcGVydHlBY2Nlc3Nvcihwcm9wZXJ0eSwgcmVhZE9ubHkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIGdpdmVuIGBwcm9wZXJ0eWAgdG8gYSBtYXAgbWF0Y2hpbmcgYXR0cmlidXRlIG5hbWVzXG4gICAgICogdG8gcHJvcGVydHkgbmFtZXMsIHVzaW5nIGBhdHRyaWJ1dGVOYW1lRm9yUHJvcGVydHlgLiBUaGlzIG1hcCBpc1xuICAgICAqIHVzZWQgd2hlbiBkZXNlcmlhbGl6aW5nIGF0dHJpYnV0ZSB2YWx1ZXMgdG8gcHJvcGVydGllcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eSBOYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIF9hZGRQcm9wZXJ0eVRvQXR0cmlidXRlTWFwKHByb3BlcnR5KSB7XG4gICAgICBpZiAoIXRoaXMuaGFzT3duUHJvcGVydHkoJ19fZGF0YUF0dHJpYnV0ZXMnKSkge1xuICAgICAgICB0aGlzLl9fZGF0YUF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9fZGF0YUF0dHJpYnV0ZXMpO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLl9fZGF0YUF0dHJpYnV0ZXNbcHJvcGVydHldKSB7XG4gICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLmNvbnN0cnVjdG9yLmF0dHJpYnV0ZU5hbWVGb3JQcm9wZXJ0eShwcm9wZXJ0eSk7XG4gICAgICAgIHRoaXMuX19kYXRhQXR0cmlidXRlc1thdHRyXSA9IHByb3BlcnR5O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgYSBwcm9wZXJ0eSBhY2Nlc3NvciBmb3IgdGhlIGdpdmVuIHByb3BlcnR5LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eSBOYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbj19IHJlYWRPbmx5IFdoZW4gdHJ1ZSwgbm8gc2V0dGVyIGlzIGNyZWF0ZWRcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgICBfZGVmaW5lUHJvcGVydHlBY2Nlc3Nvcihwcm9wZXJ0eSwgcmVhZE9ubHkpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBwcm9wZXJ0eSwge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSB2YWxpZC1qc2RvYyAqL1xuICAgICAgICAvKiogQHRoaXMge1Byb3BlcnRpZXNDaGFuZ2VkfSAqL1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2dldFByb3BlcnR5KHByb3BlcnR5KTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqIEB0aGlzIHtQcm9wZXJ0aWVzQ2hhbmdlZH0gKi9cbiAgICAgICAgc2V0OiByZWFkT25seSA/IGZ1bmN0aW9uICgpIHt9IDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5fc2V0UHJvcGVydHkocHJvcGVydHksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlICovXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLl9fZGF0YUVuYWJsZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX19kYXRhUmVhZHkgPSBmYWxzZTtcbiAgICAgIHRoaXMuX19kYXRhSW52YWxpZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fX2RhdGEgPSB7fTtcbiAgICAgIHRoaXMuX19kYXRhUGVuZGluZyA9IG51bGw7XG4gICAgICB0aGlzLl9fZGF0YU9sZCA9IG51bGw7XG4gICAgICB0aGlzLl9fZGF0YUluc3RhbmNlUHJvcHMgPSBudWxsO1xuICAgICAgdGhpcy5fX3NlcmlhbGl6aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLl9pbml0aWFsaXplUHJvcGVydGllcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExpZmVjeWNsZSBjYWxsYmFjayBjYWxsZWQgd2hlbiBwcm9wZXJ0aWVzIGFyZSBlbmFibGVkIHZpYVxuICAgICAqIGBfZW5hYmxlUHJvcGVydGllc2AuXG4gICAgICpcbiAgICAgKiBVc2VycyBtYXkgb3ZlcnJpZGUgdGhpcyBmdW5jdGlvbiB0byBpbXBsZW1lbnQgYmVoYXZpb3IgdGhhdCBpc1xuICAgICAqIGRlcGVuZGVudCBvbiB0aGUgZWxlbWVudCBoYXZpbmcgaXRzIHByb3BlcnR5IGRhdGEgaW5pdGlhbGl6ZWQsIGUuZy5cbiAgICAgKiBmcm9tIGRlZmF1bHRzIChpbml0aWFsaXplZCBmcm9tIGBjb25zdHJ1Y3RvcmAsIGBfaW5pdGlhbGl6ZVByb3BlcnRpZXNgKSxcbiAgICAgKiBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYCwgb3IgdmFsdWVzIHByb3BhZ2F0ZWQgZnJvbSBob3N0IGUuZy4gdmlhXG4gICAgICogYmluZGluZ3MuICBgc3VwZXIucmVhZHkoKWAgbXVzdCBiZSBjYWxsZWQgdG8gZW5zdXJlIHRoZSBkYXRhIHN5c3RlbVxuICAgICAqIGJlY29tZXMgZW5hYmxlZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICogQHB1YmxpY1xuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIHJlYWR5KCkge1xuICAgICAgdGhpcy5fX2RhdGFSZWFkeSA9IHRydWU7XG4gICAgICB0aGlzLl9mbHVzaFByb3BlcnRpZXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgbG9jYWwgc3RvcmFnZSBmb3IgcHJvcGVydHkgYWNjZXNzb3JzLlxuICAgICAqXG4gICAgICogUHJvdmlkZWQgYXMgYW4gb3ZlcnJpZGUgcG9pbnQgZm9yIHBlcmZvcm1pbmcgYW55IHNldHVwIHdvcmsgcHJpb3JcbiAgICAgKiB0byBpbml0aWFsaXppbmcgdGhlIHByb3BlcnR5IGFjY2Vzc29yIHN5c3RlbS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIF9pbml0aWFsaXplUHJvcGVydGllcygpIHtcbiAgICAgIC8vIENhcHR1cmUgaW5zdGFuY2UgcHJvcGVydGllczsgdGhlc2Ugd2lsbCBiZSBzZXQgaW50byBhY2Nlc3NvcnNcbiAgICAgIC8vIGR1cmluZyBmaXJzdCBmbHVzaC4gRG9uJ3Qgc2V0IHRoZW0gaGVyZSwgc2luY2Ugd2Ugd2FudFxuICAgICAgLy8gdGhlc2UgdG8gb3ZlcndyaXRlIGRlZmF1bHRzL2NvbnN0cnVjdG9yIGFzc2lnbm1lbnRzXG4gICAgICBmb3IgKGxldCBwIGluIHRoaXMuX19kYXRhSGFzQWNjZXNzb3IpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgICB0aGlzLl9fZGF0YUluc3RhbmNlUHJvcHMgPSB0aGlzLl9fZGF0YUluc3RhbmNlUHJvcHMgfHwge307XG4gICAgICAgICAgdGhpcy5fX2RhdGFJbnN0YW5jZVByb3BzW3BdID0gdGhpc1twXTtcbiAgICAgICAgICBkZWxldGUgdGhpc1twXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCBhdCByZWFkeSB0aW1lIHdpdGggYmFnIG9mIGluc3RhbmNlIHByb3BlcnRpZXMgdGhhdCBvdmVyd3JvdGVcbiAgICAgKiBhY2Nlc3NvcnMgd2hlbiB0aGUgZWxlbWVudCB1cGdyYWRlZC5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIHNldHMgdGhlc2UgcHJvcGVydGllcyBiYWNrIGludG8gdGhlXG4gICAgICogc2V0dGVyIGF0IHJlYWR5IHRpbWUuICBUaGlzIG1ldGhvZCBpcyBwcm92aWRlZCBhcyBhbiBvdmVycmlkZVxuICAgICAqIHBvaW50IGZvciBjdXN0b21pemluZyBvciBwcm92aWRpbmcgbW9yZSBlZmZpY2llbnQgaW5pdGlhbGl6YXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgQmFnIG9mIHByb3BlcnR5IHZhbHVlcyB0aGF0IHdlcmUgb3ZlcndyaXR0ZW5cbiAgICAgKiAgIHdoZW4gY3JlYXRpbmcgcHJvcGVydHkgYWNjZXNzb3JzLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIF9pbml0aWFsaXplSW5zdGFuY2VQcm9wZXJ0aWVzKHByb3BzKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHByb3BzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBsb2NhbCBzdG9yYWdlIGZvciBhIHByb3BlcnR5ICh2aWEgYF9zZXRQZW5kaW5nUHJvcGVydHlgKVxuICAgICAqIGFuZCBlbnF1ZXVlcyBhIGBfcHJvZXBydGllc0NoYW5nZWRgIGNhbGxiYWNrLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5IE5hbWUgb2YgdGhlIHByb3BlcnR5XG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZSBWYWx1ZSB0byBzZXRcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBfc2V0UHJvcGVydHkocHJvcGVydHksIHZhbHVlKSB7XG4gICAgICBpZiAodGhpcy5fc2V0UGVuZGluZ1Byb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSkpIHtcbiAgICAgICAgdGhpcy5faW52YWxpZGF0ZVByb3BlcnRpZXMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBmb3IgdGhlIGdpdmVuIHByb3BlcnR5LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eSBOYW1lIG9mIHByb3BlcnR5XG4gICAgICogQHJldHVybiB7Kn0gVmFsdWUgZm9yIHRoZSBnaXZlbiBwcm9wZXJ0eVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBfZ2V0UHJvcGVydHkocHJvcGVydHkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9fZGF0YVtwcm9wZXJ0eV07XG4gICAgfVxuXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBsb2NhbCBzdG9yYWdlIGZvciBhIHByb3BlcnR5LCByZWNvcmRzIHRoZSBwcmV2aW91cyB2YWx1ZSxcbiAgICAgKiBhbmQgYWRkcyBpdCB0byB0aGUgc2V0IG9mIFwicGVuZGluZyBjaGFuZ2VzXCIgdGhhdCB3aWxsIGJlIHBhc3NlZCB0byB0aGVcbiAgICAgKiBgX3Byb3BlcnRpZXNDaGFuZ2VkYCBjYWxsYmFjay4gIFRoaXMgbWV0aG9kIGRvZXMgbm90IGVucXVldWUgdGhlXG4gICAgICogYF9wcm9wZXJ0aWVzQ2hhbmdlZGAgY2FsbGJhY2suXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHkgTmFtZSBvZiB0aGUgcHJvcGVydHlcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFZhbHVlIHRvIHNldFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbj19IGV4dCBOb3QgdXNlZCBoZXJlOyBhZmZvcmRhbmNlIGZvciBjbG9zdXJlXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBjaGFuZ2VkXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIF9zZXRQZW5kaW5nUHJvcGVydHkocHJvcGVydHksIHZhbHVlLCBleHQpIHtcbiAgICAgIGxldCBvbGQgPSB0aGlzLl9fZGF0YVtwcm9wZXJ0eV07XG4gICAgICBsZXQgY2hhbmdlZCA9IHRoaXMuX3Nob3VsZFByb3BlcnR5Q2hhbmdlKHByb3BlcnR5LCB2YWx1ZSwgb2xkKTtcbiAgICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICAgIGlmICghdGhpcy5fX2RhdGFQZW5kaW5nKSB7XG4gICAgICAgICAgdGhpcy5fX2RhdGFQZW5kaW5nID0ge307XG4gICAgICAgICAgdGhpcy5fX2RhdGFPbGQgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFbnN1cmUgb2xkIGlzIGNhcHR1cmVkIGZyb20gdGhlIGxhc3QgdHVyblxuICAgICAgICBpZiAodGhpcy5fX2RhdGFPbGQgJiYgIShwcm9wZXJ0eSBpbiB0aGlzLl9fZGF0YU9sZCkpIHtcbiAgICAgICAgICB0aGlzLl9fZGF0YU9sZFtwcm9wZXJ0eV0gPSBvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fX2RhdGFbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX19kYXRhUGVuZGluZ1twcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGFuZ2VkO1xuICAgIH1cbiAgICAvKiBlc2xpbnQtZW5hYmxlICovXG5cbiAgICAvKipcbiAgICAgKiBNYXJrcyB0aGUgcHJvcGVydGllcyBhcyBpbnZhbGlkLCBhbmQgZW5xdWV1ZXMgYW4gYXN5bmNcbiAgICAgKiBgX3Byb3BlcnRpZXNDaGFuZ2VkYCBjYWxsYmFjay5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIF9pbnZhbGlkYXRlUHJvcGVydGllcygpIHtcbiAgICAgIGlmICghdGhpcy5fX2RhdGFJbnZhbGlkICYmIHRoaXMuX19kYXRhUmVhZHkpIHtcbiAgICAgICAgdGhpcy5fX2RhdGFJbnZhbGlkID0gdHJ1ZTtcbiAgICAgICAgbWljcm90YXNrLnJ1bigoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuX19kYXRhSW52YWxpZCkge1xuICAgICAgICAgICAgdGhpcy5fX2RhdGFJbnZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9mbHVzaFByb3BlcnRpZXMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGwgdG8gZW5hYmxlIHByb3BlcnR5IGFjY2Vzc29yIHByb2Nlc3NpbmcuIEJlZm9yZSB0aGlzIG1ldGhvZCBpc1xuICAgICAqIGNhbGxlZCBhY2Nlc3NvciB2YWx1ZXMgd2lsbCBiZSBzZXQgYnV0IHNpZGUgZWZmZWN0cyBhcmVcbiAgICAgKiBxdWV1ZWQuIFdoZW4gY2FsbGVkLCBhbnkgcGVuZGluZyBzaWRlIGVmZmVjdHMgb2NjdXIgaW1tZWRpYXRlbHkuXG4gICAgICogRm9yIGVsZW1lbnRzLCBnZW5lcmFsbHkgYGNvbm5lY3RlZENhbGxiYWNrYCBpcyBhIG5vcm1hbCBzcG90IHRvIGRvIHNvLlxuICAgICAqIEl0IGlzIHNhZmUgdG8gY2FsbCB0aGlzIG1ldGhvZCBtdWx0aXBsZSB0aW1lcyBhcyBpdCBvbmx5IHR1cm5zIG9uXG4gICAgICogcHJvcGVydHkgYWNjZXNzb3JzIG9uY2UuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBfZW5hYmxlUHJvcGVydGllcygpIHtcbiAgICAgIGlmICghdGhpcy5fX2RhdGFFbmFibGVkKSB7XG4gICAgICAgIHRoaXMuX19kYXRhRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLl9fZGF0YUluc3RhbmNlUHJvcHMpIHtcbiAgICAgICAgICB0aGlzLl9pbml0aWFsaXplSW5zdGFuY2VQcm9wZXJ0aWVzKHRoaXMuX19kYXRhSW5zdGFuY2VQcm9wcyk7XG4gICAgICAgICAgdGhpcy5fX2RhdGFJbnN0YW5jZVByb3BzID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlYWR5KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbHMgdGhlIGBfcHJvcGVydGllc0NoYW5nZWRgIGNhbGxiYWNrIHdpdGggdGhlIGN1cnJlbnQgc2V0IG9mXG4gICAgICogcGVuZGluZyBjaGFuZ2VzIChhbmQgb2xkIHZhbHVlcyByZWNvcmRlZCB3aGVuIHBlbmRpbmcgY2hhbmdlcyB3ZXJlXG4gICAgICogc2V0KSwgYW5kIHJlc2V0cyB0aGUgcGVuZGluZyBzZXQgb2YgY2hhbmdlcy4gR2VuZXJhbGx5LCB0aGlzIG1ldGhvZFxuICAgICAqIHNob3VsZCBub3QgYmUgY2FsbGVkIGluIHVzZXIgY29kZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIF9mbHVzaFByb3BlcnRpZXMoKSB7XG4gICAgICBjb25zdCBwcm9wcyA9IHRoaXMuX19kYXRhO1xuICAgICAgY29uc3QgY2hhbmdlZFByb3BzID0gdGhpcy5fX2RhdGFQZW5kaW5nO1xuICAgICAgY29uc3Qgb2xkID0gdGhpcy5fX2RhdGFPbGQ7XG4gICAgICBpZiAodGhpcy5fc2hvdWxkUHJvcGVydGllc0NoYW5nZShwcm9wcywgY2hhbmdlZFByb3BzLCBvbGQpKSB7XG4gICAgICAgIHRoaXMuX19kYXRhUGVuZGluZyA9IG51bGw7XG4gICAgICAgIHRoaXMuX19kYXRhT2xkID0gbnVsbDtcbiAgICAgICAgdGhpcy5fcHJvcGVydGllc0NoYW5nZWQocHJvcHMsIGNoYW5nZWRQcm9wcywgb2xkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgaW4gYF9mbHVzaFByb3BlcnRpZXNgIHRvIGRldGVybWluZSBpZiBgX3Byb3BlcnRpZXNDaGFuZ2VkYFxuICAgICAqIHNob3VsZCBiZSBjYWxsZWQuIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIHJldHVybnMgdHJ1ZSBpZlxuICAgICAqIHByb3BlcnRpZXMgYXJlIHBlbmRpbmcuIE92ZXJyaWRlIHRvIGN1c3RvbWl6ZSB3aGVuXG4gICAgICogYF9wcm9wZXJ0aWVzQ2hhbmdlZGAgaXMgY2FsbGVkLlxuICAgICAqIEBwYXJhbSB7IU9iamVjdH0gY3VycmVudFByb3BzIEJhZyBvZiBhbGwgY3VycmVudCBhY2Nlc3NvciB2YWx1ZXNcbiAgICAgKiBAcGFyYW0gez9PYmplY3R9IGNoYW5nZWRQcm9wcyBCYWcgb2YgcHJvcGVydGllcyBjaGFuZ2VkIHNpbmNlIHRoZSBsYXN0XG4gICAgICogICBjYWxsIHRvIGBfcHJvcGVydGllc0NoYW5nZWRgXG4gICAgICogQHBhcmFtIHs/T2JqZWN0fSBvbGRQcm9wcyBCYWcgb2YgcHJldmlvdXMgdmFsdWVzIGZvciBlYWNoIHByb3BlcnR5XG4gICAgICogICBpbiBgY2hhbmdlZFByb3BzYFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgY2hhbmdlZFByb3BzIGlzIHRydXRoeVxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIF9zaG91bGRQcm9wZXJ0aWVzQ2hhbmdlKGN1cnJlbnRQcm9wcywgY2hhbmdlZFByb3BzLCBvbGRQcm9wcykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICByZXR1cm4gQm9vbGVhbihjaGFuZ2VkUHJvcHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIGFueSBwcm9wZXJ0aWVzIHdpdGggYWNjZXNzb3JzIGNyZWF0ZWQgdmlhXG4gICAgICogYF9jcmVhdGVQcm9wZXJ0eUFjY2Vzc29yYCBoYXZlIGJlZW4gc2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHshT2JqZWN0fSBjdXJyZW50UHJvcHMgQmFnIG9mIGFsbCBjdXJyZW50IGFjY2Vzc29yIHZhbHVlc1xuICAgICAqIEBwYXJhbSB7P09iamVjdH0gY2hhbmdlZFByb3BzIEJhZyBvZiBwcm9wZXJ0aWVzIGNoYW5nZWQgc2luY2UgdGhlIGxhc3RcbiAgICAgKiAgIGNhbGwgdG8gYF9wcm9wZXJ0aWVzQ2hhbmdlZGBcbiAgICAgKiBAcGFyYW0gez9PYmplY3R9IG9sZFByb3BzIEJhZyBvZiBwcmV2aW91cyB2YWx1ZXMgZm9yIGVhY2ggcHJvcGVydHlcbiAgICAgKiAgIGluIGBjaGFuZ2VkUHJvcHNgXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgX3Byb3BlcnRpZXNDaGFuZ2VkKGN1cnJlbnRQcm9wcywgY2hhbmdlZFByb3BzLCBvbGRQcm9wcykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWV0aG9kIGNhbGxlZCB0byBkZXRlcm1pbmUgd2hldGhlciBhIHByb3BlcnR5IHZhbHVlIHNob3VsZCBiZVxuICAgICAqIGNvbnNpZGVyZWQgYXMgYSBjaGFuZ2UgYW5kIGNhdXNlIHRoZSBgX3Byb3BlcnRpZXNDaGFuZ2VkYCBjYWxsYmFja1xuICAgICAqIHRvIGJlIGVucXVldWVkLlxuICAgICAqXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gcmV0dXJucyBgdHJ1ZWAgaWYgYSBzdHJpY3QgZXF1YWxpdHlcbiAgICAgKiBjaGVjayBmYWlscy4gVGhlIG1ldGhvZCBhbHdheXMgcmV0dXJucyBmYWxzZSBmb3IgYE5hTmAuXG4gICAgICpcbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBlLmcuIHByb3ZpZGUgc3RyaWN0ZXIgY2hlY2tpbmcgZm9yXG4gICAgICogT2JqZWN0cy9BcnJheXMgd2hlbiB1c2luZyBpbW11dGFibGUgcGF0dGVybnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHkgUHJvcGVydHkgbmFtZVxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgTmV3IHByb3BlcnR5IHZhbHVlXG4gICAgICogQHBhcmFtIHsqfSBvbGQgUHJldmlvdXMgcHJvcGVydHkgdmFsdWVcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBXaGV0aGVyIHRoZSBwcm9wZXJ0eSBzaG91bGQgYmUgY29uc2lkZXJlZCBhIGNoYW5nZVxuICAgICAqICAgYW5kIGVucXVldWUgYSBgX3Byb2VwcnRpZXNDaGFuZ2VkYCBjYWxsYmFja1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBfc2hvdWxkUHJvcGVydHlDaGFuZ2UocHJvcGVydHksIHZhbHVlLCBvbGQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIC8vIFN0cmljdCBlcXVhbGl0eSBjaGVja1xuICAgICAgICAob2xkICE9PSB2YWx1ZSAmJlxuICAgICAgICAgIC8vIFRoaXMgZW5zdXJlcyAob2xkPT1OYU4sIHZhbHVlPT1OYU4pIGFsd2F5cyByZXR1cm5zIGZhbHNlXG4gICAgICAgICAgKG9sZCA9PT0gb2xkIHx8IHZhbHVlID09PSB2YWx1ZSkpXG4gICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEltcGxlbWVudHMgbmF0aXZlIEN1c3RvbSBFbGVtZW50cyBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYCB0b1xuICAgICAqIHNldCBhbiBhdHRyaWJ1dGUgdmFsdWUgdG8gYSBwcm9wZXJ0eSB2aWEgYF9hdHRyaWJ1dGVUb1Byb3BlcnR5YC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIE5hbWUgb2YgYXR0cmlidXRlIHRoYXQgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7P3N0cmluZ30gb2xkIE9sZCBhdHRyaWJ1dGUgdmFsdWVcbiAgICAgKiBAcGFyYW0gez9zdHJpbmd9IHZhbHVlIE5ldyBhdHRyaWJ1dGUgdmFsdWVcbiAgICAgKiBAcGFyYW0gez9zdHJpbmd9IG5hbWVzcGFjZSBBdHRyaWJ1dGUgbmFtZXNwYWNlLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICogQHN1cHByZXNzIHttaXNzaW5nUHJvcGVydGllc30gU3VwZXIgbWF5IG9yIG1heSBub3QgaW1wbGVtZW50IHRoZSBjYWxsYmFja1xuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGQsIHZhbHVlLCBuYW1lc3BhY2UpIHtcbiAgICAgIGlmIChvbGQgIT09IHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2F0dHJpYnV0ZVRvUHJvcGVydHkobmFtZSwgdmFsdWUpO1xuICAgICAgfVxuICAgICAgaWYgKHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaykge1xuICAgICAgICBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkLCB2YWx1ZSwgbmFtZXNwYWNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXNlcmlhbGl6ZXMgYW4gYXR0cmlidXRlIHRvIGl0cyBhc3NvY2lhdGVkIHByb3BlcnR5LlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgY2FsbHMgdGhlIGBfZGVzZXJpYWxpemVWYWx1ZWAgbWV0aG9kIHRvIGNvbnZlcnQgdGhlIHN0cmluZyB0b1xuICAgICAqIGEgdHlwZWQgdmFsdWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlIE5hbWUgb2YgYXR0cmlidXRlIHRvIGRlc2VyaWFsaXplLlxuICAgICAqIEBwYXJhbSB7P3N0cmluZ30gdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZS5cbiAgICAgKiBAcGFyYW0geyo9fSB0eXBlIHR5cGUgdG8gZGVzZXJpYWxpemUgdG8sIGRlZmF1bHRzIHRvIHRoZSB2YWx1ZVxuICAgICAqIHJldHVybmVkIGZyb20gYHR5cGVGb3JQcm9wZXJ0eWBcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIF9hdHRyaWJ1dGVUb1Byb3BlcnR5KGF0dHJpYnV0ZSwgdmFsdWUsIHR5cGUpIHtcbiAgICAgIGlmICghdGhpcy5fX3NlcmlhbGl6aW5nKSB7XG4gICAgICAgIGNvbnN0IG1hcCA9IHRoaXMuX19kYXRhQXR0cmlidXRlcztcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSBtYXAgJiYgbWFwW2F0dHJpYnV0ZV0gfHwgYXR0cmlidXRlO1xuICAgICAgICB0aGlzW3Byb3BlcnR5XSA9IHRoaXMuX2Rlc2VyaWFsaXplVmFsdWUodmFsdWUsIHR5cGUgfHxcbiAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLnR5cGVGb3JQcm9wZXJ0eShwcm9wZXJ0eSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZXMgYSBwcm9wZXJ0eSB0byBpdHMgYXNzb2NpYXRlZCBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBAc3VwcHJlc3Mge2ludmFsaWRDYXN0c30gQ2xvc3VyZSBjYW4ndCBmaWd1cmUgb3V0IGB0aGlzYCBpcyBhbiBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5IFByb3BlcnR5IG5hbWUgdG8gcmVmbGVjdC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZz19IGF0dHJpYnV0ZSBBdHRyaWJ1dGUgbmFtZSB0byByZWZsZWN0IHRvLlxuICAgICAqIEBwYXJhbSB7Kj19IHZhbHVlIFByb3BlcnR5IHZhbHVlIHRvIHJlZmVjdC5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIF9wcm9wZXJ0eVRvQXR0cmlidXRlKHByb3BlcnR5LCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgICB0aGlzLl9fc2VyaWFsaXppbmcgPSB0cnVlO1xuICAgICAgdmFsdWUgPSAoYXJndW1lbnRzLmxlbmd0aCA8IDMpID8gdGhpc1twcm9wZXJ0eV0gOiB2YWx1ZTtcbiAgICAgIHRoaXMuX3ZhbHVlVG9Ob2RlQXR0cmlidXRlKC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqLyh0aGlzKSwgdmFsdWUsXG4gICAgICAgIGF0dHJpYnV0ZSB8fCB0aGlzLmNvbnN0cnVjdG9yLmF0dHJpYnV0ZU5hbWVGb3JQcm9wZXJ0eShwcm9wZXJ0eSkpO1xuICAgICAgdGhpcy5fX3NlcmlhbGl6aW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyBhIHR5cGVkIHZhbHVlIHRvIGFuIEhUTUwgYXR0cmlidXRlIG9uIGEgbm9kZS5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGNhbGxzIHRoZSBgX3NlcmlhbGl6ZVZhbHVlYCBtZXRob2QgdG8gY29udmVydCB0aGUgdHlwZWRcbiAgICAgKiB2YWx1ZSB0byBhIHN0cmluZy4gIElmIHRoZSBgX3NlcmlhbGl6ZVZhbHVlYCBtZXRob2QgcmV0dXJucyBgdW5kZWZpbmVkYCxcbiAgICAgKiB0aGUgYXR0cmlidXRlIHdpbGwgYmUgcmVtb3ZlZCAodGhpcyBpcyB0aGUgZGVmYXVsdCBmb3IgYm9vbGVhblxuICAgICAqIHR5cGUgYGZhbHNlYCkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGUgRWxlbWVudCB0byBzZXQgYXR0cmlidXRlIHRvLlxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgVmFsdWUgdG8gc2VyaWFsaXplLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGUgQXR0cmlidXRlIG5hbWUgdG8gc2VyaWFsaXplIHRvLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgX3ZhbHVlVG9Ob2RlQXR0cmlidXRlKG5vZGUsIHZhbHVlLCBhdHRyaWJ1dGUpIHtcbiAgICAgIGNvbnN0IHN0ciA9IHRoaXMuX3NlcmlhbGl6ZVZhbHVlKHZhbHVlKTtcbiAgICAgIGlmIChzdHIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBzdHIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgdHlwZWQgSmF2YVNjcmlwdCB2YWx1ZSB0byBhIHN0cmluZy5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHNldHRpbmcgSlMgcHJvcGVydHkgdmFsdWVzIHRvXG4gICAgICogSFRNTCBhdHRyaWJ1dGVzLiAgVXNlcnMgbWF5IG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHByb3ZpZGVcbiAgICAgKiBzZXJpYWxpemF0aW9uIGZvciBjdXN0b20gdHlwZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFByb3BlcnR5IHZhbHVlIHRvIHNlcmlhbGl6ZS5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmcgfCB1bmRlZmluZWR9IFN0cmluZyBzZXJpYWxpemVkIGZyb20gdGhlIHByb3ZpZGVkXG4gICAgICogcHJvcGVydHkgIHZhbHVlLlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIF9zZXJpYWxpemVWYWx1ZSh2YWx1ZSkge1xuICAgICAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgICAgcmV0dXJuIHZhbHVlID8gJycgOiB1bmRlZmluZWQ7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHZhbHVlICE9IG51bGwgPyB2YWx1ZS50b1N0cmluZygpIDogdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgc3RyaW5nIHRvIGEgdHlwZWQgSmF2YVNjcmlwdCB2YWx1ZS5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHJlYWRpbmcgSFRNTCBhdHRyaWJ1dGUgdmFsdWVzIHRvXG4gICAgICogSlMgcHJvcGVydGllcy4gIFVzZXJzIG1heSBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwcm92aWRlXG4gICAgICogZGVzZXJpYWxpemF0aW9uIGZvciBjdXN0b20gYHR5cGVgcy4gVHlwZXMgZm9yIGBCb29sZWFuYCwgYFN0cmluZ2AsXG4gICAgICogYW5kIGBOdW1iZXJgIGNvbnZlcnQgYXR0cmlidXRlcyB0byB0aGUgZXhwZWN0ZWQgdHlwZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gez9zdHJpbmd9IHZhbHVlIFZhbHVlIHRvIGRlc2VyaWFsaXplLlxuICAgICAqIEBwYXJhbSB7Kj19IHR5cGUgVHlwZSB0byBkZXNlcmlhbGl6ZSB0aGUgc3RyaW5nIHRvLlxuICAgICAqIEByZXR1cm4geyp9IFR5cGVkIHZhbHVlIGRlc2VyaWFsaXplZCBmcm9tIHRoZSBwcm92aWRlZCBzdHJpbmcuXG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgX2Rlc2VyaWFsaXplVmFsdWUodmFsdWUsIHR5cGUpIHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIEJvb2xlYW46XG4gICAgICAgICAgcmV0dXJuICh2YWx1ZSAhPT0gbnVsbCk7XG4gICAgICAgIGNhc2UgTnVtYmVyOlxuICAgICAgICAgIHJldHVybiBOdW1iZXIodmFsdWUpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBQcm9wZXJ0aWVzQ2hhbmdlZDtcbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnLi4vdXRpbHMvYm9vdC5qcyc7XG5cbmltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tICcuLi91dGlscy9taXhpbi5qcyc7XG5pbXBvcnQgeyBQcm9wZXJ0aWVzQ2hhbmdlZCB9IGZyb20gJy4vcHJvcGVydGllcy1jaGFuZ2VkLmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgY29weSBvZiBgcHJvcHNgIHdpdGggZWFjaCBwcm9wZXJ0eSBub3JtYWxpemVkIHN1Y2ggdGhhdFxuICogdXBncmFkZWQgaXQgaXMgYW4gb2JqZWN0IHdpdGggYXQgbGVhc3QgYSB0eXBlIHByb3BlcnR5IHsgdHlwZTogVHlwZX0uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzIFByb3BlcnRpZXMgdG8gbm9ybWFsaXplXG4gKiBAcmV0dXJuIHtPYmplY3R9IENvcHkgb2YgaW5wdXQgYHByb3BzYCB3aXRoIG5vcm1hbGl6ZWQgcHJvcGVydGllcyB0aGF0XG4gKiBhcmUgaW4gdGhlIGZvcm0ge3R5cGU6IFR5cGV9XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBub3JtYWxpemVQcm9wZXJ0aWVzKHByb3BzKSB7XG4gIGNvbnN0IG91dHB1dCA9IHt9O1xuICBmb3IgKGxldCBwIGluIHByb3BzKSB7XG4gICAgY29uc3QgbyA9IHByb3BzW3BdO1xuICAgIG91dHB1dFtwXSA9ICh0eXBlb2YgbyA9PT0gJ2Z1bmN0aW9uJykgPyB7dHlwZTogb30gOiBvO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbi8qKlxuICogTWl4aW4gdGhhdCBwcm92aWRlcyBhIG1pbmltYWwgc3RhcnRpbmcgcG9pbnQgdG8gdXNpbmcgdGhlIFByb3BlcnRpZXNDaGFuZ2VkXG4gKiBtaXhpbiBieSBwcm92aWRpbmcgYSBtZWNoYW5pc20gdG8gZGVjbGFyZSBwcm9wZXJ0aWVzIGluIGEgc3RhdGljXG4gKiBnZXR0ZXIgKGUuZy4gc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkgeyByZXR1cm4geyBmb286IFN0cmluZyB9IH0pLiBDaGFuZ2VzXG4gKiBhcmUgcmVwb3J0ZWQgdmlhIHRoZSBgX3Byb3BlcnRpZXNDaGFuZ2VkYCBtZXRob2QuXG4gKlxuICogVGhpcyBtaXhpbiBwcm92aWRlcyBubyBzcGVjaWZpYyBzdXBwb3J0IGZvciByZW5kZXJpbmcuIFVzZXJzIGFyZSBleHBlY3RlZFxuICogdG8gY3JlYXRlIGEgU2hhZG93Um9vdCBhbmQgcHV0IGNvbnRlbnQgaW50byBpdCBhbmQgdXBkYXRlIGl0IGluIHdoYXRldmVyXG4gKiB3YXkgbWFrZXMgc2Vuc2UuIFRoaXMgY2FuIGJlIGRvbmUgaW4gcmVhY3Rpb24gdG8gcHJvcGVydGllcyBjaGFuZ2luZyBieVxuICogaW1wbGVtZW50aW5nIGBfcHJvcGVydGllc0NoYW5nZWRgLlxuICpcbiAqIEBtaXhpbkZ1bmN0aW9uXG4gKiBAcG9seW1lclxuICogQGFwcGxpZXNNaXhpbiBQcm9wZXJ0aWVzQ2hhbmdlZFxuICogQHN1bW1hcnkgTWl4aW4gdGhhdCBwcm92aWRlcyBhIG1pbmltYWwgc3RhcnRpbmcgcG9pbnQgZm9yIHVzaW5nXG4gKiB0aGUgUHJvcGVydGllc0NoYW5nZWQgbWl4aW4gYnkgcHJvdmlkaW5nIGEgZGVjbGFyYXRpdmUgYHByb3BlcnRpZXNgIG9iamVjdC5cbiAqL1xuZXhwb3J0IGNvbnN0IFByb3BlcnRpZXNNaXhpbiA9IGRlZHVwaW5nTWl4aW4oc3VwZXJDbGFzcyA9PiB7XG5cbiAvKipcbiAgKiBAY29uc3RydWN0b3JcbiAgKiBAaW1wbGVtZW50cyB7UG9seW1lcl9Qcm9wZXJ0aWVzQ2hhbmdlZH1cbiAgKiBAcHJpdmF0ZVxuICAqL1xuIGNvbnN0IGJhc2UgPSBQcm9wZXJ0aWVzQ2hhbmdlZChzdXBlckNsYXNzKTtcblxuIC8qKlxuICAqIFJldHVybnMgdGhlIHN1cGVyIGNsYXNzIGNvbnN0cnVjdG9yIGZvciB0aGUgZ2l2ZW4gY2xhc3MsIGlmIGl0IGlzIGFuXG4gICogaW5zdGFuY2Ugb2YgdGhlIFByb3BlcnRpZXNNaXhpbi5cbiAgKlxuICAqIEBwYXJhbSB7IVByb3BlcnRpZXNNaXhpbkNvbnN0cnVjdG9yfSBjb25zdHJ1Y3RvciBQcm9wZXJ0aWVzTWl4aW4gY29uc3RydWN0b3JcbiAgKiBAcmV0dXJuIHs/UHJvcGVydGllc01peGluQ29uc3RydWN0b3J9IFN1cGVyIGNsYXNzIGNvbnN0cnVjdG9yXG4gICovXG4gZnVuY3Rpb24gc3VwZXJQcm9wZXJ0aWVzQ2xhc3MoY29uc3RydWN0b3IpIHtcbiAgIGNvbnN0IHN1cGVyQ3RvciA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihjb25zdHJ1Y3Rvcik7XG5cbiAgIC8vIE5vdGUsIHRoZSBgUHJvcGVydGllc01peGluYCBjbGFzcyBiZWxvdyBvbmx5IHJlZmVycyB0byB0aGUgY2xhc3NcbiAgIC8vIGdlbmVyYXRlZCBieSB0aGlzIGNhbGwgdG8gdGhlIG1peGluOyB0aGUgaW5zdGFuY2VvZiB0ZXN0IG9ubHkgd29ya3NcbiAgIC8vIGJlY2F1c2UgdGhlIG1peGluIGlzIGRlZHVwZWQgYW5kIGd1YXJhbnRlZWQgb25seSB0byBhcHBseSBvbmNlLCBoZW5jZVxuICAgLy8gYWxsIGNvbnN0cnVjdG9ycyBpbiBhIHByb3RvIGNoYWluIHdpbGwgc2VlIHRoZSBzYW1lIGBQcm9wZXJ0aWVzTWl4aW5gXG4gICByZXR1cm4gKHN1cGVyQ3Rvci5wcm90b3R5cGUgaW5zdGFuY2VvZiBQcm9wZXJ0aWVzTWl4aW4pID9cbiAgICAgLyoqIEB0eXBlIHshUHJvcGVydGllc01peGluQ29uc3RydWN0b3J9ICovIChzdXBlckN0b3IpIDogbnVsbDtcbiB9XG5cbiAvKipcbiAgKiBSZXR1cm5zIGEgbWVtb2l6ZWQgdmVyc2lvbiBvZiB0aGUgYHByb3BlcnRpZXNgIG9iamVjdCBmb3IgdGhlXG4gICogZ2l2ZW4gY2xhc3MuIFByb3BlcnRpZXMgbm90IGluIG9iamVjdCBmb3JtYXQgYXJlIGNvbnZlcnRlZCB0byBhdFxuICAqIGxlYXN0IHt0eXBlfS5cbiAgKlxuICAqIEBwYXJhbSB7UHJvcGVydGllc01peGluQ29uc3RydWN0b3J9IGNvbnN0cnVjdG9yIFByb3BlcnRpZXNNaXhpbiBjb25zdHJ1Y3RvclxuICAqIEByZXR1cm4ge09iamVjdH0gTWVtb2l6ZWQgcHJvcGVydGllcyBvYmplY3RcbiAgKi9cbiBmdW5jdGlvbiBvd25Qcm9wZXJ0aWVzKGNvbnN0cnVjdG9yKSB7XG4gICBpZiAoIWNvbnN0cnVjdG9yLmhhc093blByb3BlcnR5KEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkoJ19fb3duUHJvcGVydGllcycsIGNvbnN0cnVjdG9yKSkpIHtcbiAgICAgbGV0IHByb3BzID0gbnVsbDtcblxuICAgICBpZiAoY29uc3RydWN0b3IuaGFzT3duUHJvcGVydHkoSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSgncHJvcGVydGllcycsIGNvbnN0cnVjdG9yKSkgJiYgY29uc3RydWN0b3IucHJvcGVydGllcykge1xuICAgICAgIHByb3BzID0gbm9ybWFsaXplUHJvcGVydGllcyhjb25zdHJ1Y3Rvci5wcm9wZXJ0aWVzKTtcbiAgICAgfVxuXG4gICAgIGNvbnN0cnVjdG9yLl9fb3duUHJvcGVydGllcyA9IHByb3BzO1xuICAgfVxuICAgcmV0dXJuIGNvbnN0cnVjdG9yLl9fb3duUHJvcGVydGllcztcbiB9XG5cbiAvKipcbiAgKiBAcG9seW1lclxuICAqIEBtaXhpbkNsYXNzXG4gICogQGV4dGVuZHMge2Jhc2V9XG4gICogQGltcGxlbWVudHMge1BvbHltZXJfUHJvcGVydGllc01peGlufVxuICAqIEB1bnJlc3RyaWN0ZWRcbiAgKi9cbiBjbGFzcyBQcm9wZXJ0aWVzTWl4aW4gZXh0ZW5kcyBiYXNlIHtcblxuICAgLyoqXG4gICAgKiBJbXBsZW1lbnRzIHN0YW5kYXJkIGN1c3RvbSBlbGVtZW50cyBnZXR0ZXIgdG8gb2JzZXJ2ZXMgdGhlIGF0dHJpYnV0ZXNcbiAgICAqIGxpc3RlZCBpbiBgcHJvcGVydGllc2AuXG4gICAgKiBAc3VwcHJlc3Mge21pc3NpbmdQcm9wZXJ0aWVzfSBJbnRlcmZhY2VzIGluIGNsb3N1cmUgZG8gbm90IGluaGVyaXQgc3RhdGljcywgYnV0IGNsYXNzZXMgZG9cbiAgICAqL1xuICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgIGNvbnN0IHByb3BzID0gdGhpcy5fcHJvcGVydGllcztcbiAgICAgcmV0dXJuIHByb3BzID8gT2JqZWN0LmtleXMocHJvcHMpLm1hcChwID0+IHRoaXMuYXR0cmlidXRlTmFtZUZvclByb3BlcnR5KHApKSA6IFtdO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEZpbmFsaXplcyBhbiBlbGVtZW50IGRlZmluaXRpb24sIGluY2x1ZGluZyBlbnN1cmluZyBhbnkgc3VwZXIgY2xhc3Nlc1xuICAgICogYXJlIGFsc28gZmluYWxpemVkLiBUaGlzIGluY2x1ZGVzIGVuc3VyaW5nIHByb3BlcnR5XG4gICAgKiBhY2Nlc3NvcnMgZXhpc3Qgb24gdGhlIGVsZW1lbnQgcHJvdG90eXBlLiBUaGlzIG1ldGhvZCBjYWxsc1xuICAgICogYF9maW5hbGl6ZUNsYXNzYCB0byBmaW5hbGl6ZSBlYWNoIGNvbnN0cnVjdG9yIGluIHRoZSBwcm90b3R5cGUgY2hhaW4uXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICBzdGF0aWMgZmluYWxpemUoKSB7XG4gICAgIGlmICghdGhpcy5oYXNPd25Qcm9wZXJ0eShKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5KCdfX2ZpbmFsaXplZCcsIHRoaXMpKSkge1xuICAgICAgIGNvbnN0IHN1cGVyQ3RvciA9IHN1cGVyUHJvcGVydGllc0NsYXNzKC8qKiBAdHlwZSB7IVByb3BlcnRpZXNNaXhpbkNvbnN0cnVjdG9yfSAqLyh0aGlzKSk7XG4gICAgICAgaWYgKHN1cGVyQ3Rvcikge1xuICAgICAgICAgc3VwZXJDdG9yLmZpbmFsaXplKCk7XG4gICAgICAgfVxuICAgICAgIHRoaXMuX19maW5hbGl6ZWQgPSB0cnVlO1xuICAgICAgIHRoaXMuX2ZpbmFsaXplQ2xhc3MoKTtcbiAgICAgfVxuICAgfVxuXG4gICAvKipcbiAgICAqIEZpbmFsaXplIGFuIGVsZW1lbnQgY2xhc3MuIFRoaXMgaW5jbHVkZXMgZW5zdXJpbmcgcHJvcGVydHlcbiAgICAqIGFjY2Vzc29ycyBleGlzdCBvbiB0aGUgZWxlbWVudCBwcm90b3R5cGUuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBieVxuICAgICogYGZpbmFsaXplYCBhbmQgZmluYWxpemVzIHRoZSBjbGFzcyBjb25zdHJ1Y3Rvci5cbiAgICAqXG4gICAgKiBAcHJvdGVjdGVkXG4gICAgKi9cbiAgIHN0YXRpYyBfZmluYWxpemVDbGFzcygpIHtcbiAgICAgY29uc3QgcHJvcHMgPSBvd25Qcm9wZXJ0aWVzKC8qKiBAdHlwZSB7IVByb3BlcnRpZXNNaXhpbkNvbnN0cnVjdG9yfSAqLyh0aGlzKSk7XG4gICAgIGlmIChwcm9wcykge1xuICAgICAgIHRoaXMuY3JlYXRlUHJvcGVydGllcyhwcm9wcyk7XG4gICAgIH1cbiAgIH1cblxuICAgLyoqXG4gICAgKiBSZXR1cm5zIGEgbWVtb2l6ZWQgdmVyc2lvbiBvZiBhbGwgcHJvcGVydGllcywgaW5jbHVkaW5nIHRob3NlIGluaGVyaXRlZFxuICAgICogZnJvbSBzdXBlciBjbGFzc2VzLiBQcm9wZXJ0aWVzIG5vdCBpbiBvYmplY3QgZm9ybWF0IGFyZSBjb252ZXJ0ZWQgdG9cbiAgICAqIGF0IGxlYXN0IHt0eXBlfS5cbiAgICAqXG4gICAgKiBAcmV0dXJuIHtPYmplY3R9IE9iamVjdCBjb250YWluaW5nIHByb3BlcnRpZXMgZm9yIHRoaXMgY2xhc3NcbiAgICAqIEBwcm90ZWN0ZWRcbiAgICAqL1xuICAgc3RhdGljIGdldCBfcHJvcGVydGllcygpIHtcbiAgICAgaWYgKCF0aGlzLmhhc093blByb3BlcnR5KFxuICAgICAgIEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkoJ19fcHJvcGVydGllcycsIHRoaXMpKSkge1xuICAgICAgIGNvbnN0IHN1cGVyQ3RvciA9IHN1cGVyUHJvcGVydGllc0NsYXNzKC8qKiBAdHlwZSB7IVByb3BlcnRpZXNNaXhpbkNvbnN0cnVjdG9yfSAqLyh0aGlzKSk7XG4gICAgICAgdGhpcy5fX3Byb3BlcnRpZXMgPSBPYmplY3QuYXNzaWduKHt9LFxuICAgICAgICAgc3VwZXJDdG9yICYmIHN1cGVyQ3Rvci5fcHJvcGVydGllcyxcbiAgICAgICAgIG93blByb3BlcnRpZXMoLyoqIEB0eXBlIHtQcm9wZXJ0aWVzTWl4aW5Db25zdHJ1Y3Rvcn0gKi8odGhpcykpKTtcbiAgICAgfVxuICAgICByZXR1cm4gdGhpcy5fX3Byb3BlcnRpZXM7XG4gICB9XG5cbiAgIC8qKlxuICAgICogT3ZlcnJpZGVzIGBQcm9wZXJ0aWVzQ2hhbmdlZGAgbWV0aG9kIHRvIHJldHVybiB0eXBlIHNwZWNpZmllZCBpbiB0aGVcbiAgICAqIHN0YXRpYyBgcHJvcGVydGllc2Agb2JqZWN0IGZvciB0aGUgZ2l2ZW4gcHJvcGVydHkuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBOYW1lIG9mIHByb3BlcnR5XG4gICAgKiBAcmV0dXJuIHsqfSBUeXBlIHRvIHdoaWNoIHRvIGRlc2VyaWFsaXplIGF0dHJpYnV0ZVxuICAgICpcbiAgICAqIEBwcm90ZWN0ZWRcbiAgICAqL1xuICAgc3RhdGljIHR5cGVGb3JQcm9wZXJ0eShuYW1lKSB7XG4gICAgIGNvbnN0IGluZm8gPSB0aGlzLl9wcm9wZXJ0aWVzW25hbWVdO1xuICAgICByZXR1cm4gaW5mbyAmJiBpbmZvLnR5cGU7XG4gICB9XG5cbiAgIC8qKlxuICAgICogT3ZlcnJpZGVzIGBQcm9wZXJ0aWVzQ2hhbmdlZGAgbWV0aG9kIGFuZCBhZGRzIGEgY2FsbCB0b1xuICAgICogYGZpbmFsaXplYCB3aGljaCBsYXppbHkgY29uZmlndXJlcyB0aGUgZWxlbWVudCdzIHByb3BlcnR5IGFjY2Vzc29ycy5cbiAgICAqIEBvdmVycmlkZVxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgX2luaXRpYWxpemVQcm9wZXJ0aWVzKCkge1xuICAgICB0aGlzLmNvbnN0cnVjdG9yLmZpbmFsaXplKCk7XG4gICAgIHN1cGVyLl9pbml0aWFsaXplUHJvcGVydGllcygpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIENhbGxlZCB3aGVuIHRoZSBlbGVtZW50IGlzIGFkZGVkIHRvIGEgZG9jdW1lbnQuXG4gICAgKiBDYWxscyBgX2VuYWJsZVByb3BlcnRpZXNgIHRvIHR1cm4gb24gcHJvcGVydHkgc3lzdGVtIGZyb21cbiAgICAqIGBQcm9wZXJ0aWVzQ2hhbmdlZGAuXG4gICAgKiBAc3VwcHJlc3Mge21pc3NpbmdQcm9wZXJ0aWVzfSBTdXBlciBtYXkgb3IgbWF5IG5vdCBpbXBsZW1lbnQgdGhlIGNhbGxiYWNrXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICogQG92ZXJyaWRlXG4gICAgKi9cbiAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICBpZiAoc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2spIHtcbiAgICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICB9XG4gICAgIHRoaXMuX2VuYWJsZVByb3BlcnRpZXMoKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDYWxsZWQgd2hlbiB0aGUgZWxlbWVudCBpcyByZW1vdmVkIGZyb20gYSBkb2N1bWVudFxuICAgICogQHN1cHByZXNzIHttaXNzaW5nUHJvcGVydGllc30gU3VwZXIgbWF5IG9yIG1heSBub3QgaW1wbGVtZW50IHRoZSBjYWxsYmFja1xuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqIEBvdmVycmlkZVxuICAgICovXG4gICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgaWYgKHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKSB7XG4gICAgICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgfVxuICAgfVxuXG4gfVxuXG4gcmV0dXJuIFByb3BlcnRpZXNNaXhpbjtcblxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqXG4gKiBUaGlzIG1vZHVsZSBwcm92aWRlcyBhIG51bWJlciBvZiBzdHJhdGVnaWVzIGZvciBlbnF1ZXVpbmcgYXN5bmNocm9ub3VzXG4gKiB0YXNrcy4gRWFjaCBzdWItbW9kdWxlIHByb3ZpZGVzIGEgc3RhbmRhcmQgYHJ1bihmbilgIGludGVyZmFjZSB0aGF0IHJldHVybnMgYVxuICogaGFuZGxlLCBhbmQgYSBgY2FuY2VsKGhhbmRsZSlgIGludGVyZmFjZSBmb3IgY2FuY2VsaW5nIGFzeW5jIHRhc2tzIGJlZm9yZVxuICogdGhleSBydW4uXG4gKlxuICogQHN1bW1hcnkgTW9kdWxlIHRoYXQgcHJvdmlkZXMgYSBudW1iZXIgb2Ygc3RyYXRlZ2llcyBmb3IgZW5xdWV1aW5nXG4gKiBhc3luY2hyb25vdXMgdGFza3MuXG4gKi9cblxuaW1wb3J0ICcuL2Jvb3QuanMnO1xuXG4vLyBNaWNyb3Rhc2sgaW1wbGVtZW50ZWQgdXNpbmcgTXV0YXRpb24gT2JzZXJ2ZXJcbmxldCBtaWNyb3Rhc2tDdXJySGFuZGxlID0gMDtcbmxldCBtaWNyb3Rhc2tMYXN0SGFuZGxlID0gMDtcbmxldCBtaWNyb3Rhc2tDYWxsYmFja3MgPSBbXTtcbmxldCBtaWNyb3Rhc2tOb2RlQ29udGVudCA9IDA7XG5sZXQgbWljcm90YXNrTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbm5ldyB3aW5kb3cuTXV0YXRpb25PYnNlcnZlcihtaWNyb3Rhc2tGbHVzaCkub2JzZXJ2ZShtaWNyb3Rhc2tOb2RlLCB7Y2hhcmFjdGVyRGF0YTogdHJ1ZX0pO1xuXG5mdW5jdGlvbiBtaWNyb3Rhc2tGbHVzaCgpIHtcbiAgY29uc3QgbGVuID0gbWljcm90YXNrQ2FsbGJhY2tzLmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGxldCBjYiA9IG1pY3JvdGFza0NhbGxiYWNrc1tpXTtcbiAgICBpZiAoY2IpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNiKCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aHJvdyBlOyB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbWljcm90YXNrQ2FsbGJhY2tzLnNwbGljZSgwLCBsZW4pO1xuICBtaWNyb3Rhc2tMYXN0SGFuZGxlICs9IGxlbjtcbn1cblxuLyoqXG4gKiBBc3luYyBpbnRlcmZhY2Ugd3JhcHBlciBhcm91bmQgYHNldFRpbWVvdXRgLlxuICpcbiAqIEBuYW1lc3BhY2VcbiAqIEBzdW1tYXJ5IEFzeW5jIGludGVyZmFjZSB3cmFwcGVyIGFyb3VuZCBgc2V0VGltZW91dGAuXG4gKi9cbmNvbnN0IHRpbWVPdXQgPSB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3ViLW1vZHVsZSB3aXRoIHRoZSBhc3luYyBpbnRlcmZhY2UgcHJvdmlkaW5nIHRoZSBwcm92aWRlZFxuICAgKiBkZWxheS5cbiAgICpcbiAgICogQG1lbWJlcm9mIHRpbWVPdXRcbiAgICogQHBhcmFtIHtudW1iZXI9fSBkZWxheSBUaW1lIHRvIHdhaXQgYmVmb3JlIGNhbGxpbmcgY2FsbGJhY2tzIGluIG1zXG4gICAqIEByZXR1cm4geyFBc3luY0ludGVyZmFjZX0gQW4gYXN5bmMgdGltZW91dCBpbnRlcmZhY2VcbiAgICovXG4gIGFmdGVyKGRlbGF5KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJ1bihmbikgeyByZXR1cm4gd2luZG93LnNldFRpbWVvdXQoZm4sIGRlbGF5KTsgfSxcbiAgICAgIGNhbmNlbChoYW5kbGUpIHtcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChoYW5kbGUpO1xuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIC8qKlxuICAgKiBFbnF1ZXVlcyBhIGZ1bmN0aW9uIGNhbGxlZCBpbiB0aGUgbmV4dCB0YXNrLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgdGltZU91dFxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gZm4gQ2FsbGJhY2sgdG8gcnVuXG4gICAqIEBwYXJhbSB7bnVtYmVyPX0gZGVsYXkgRGVsYXkgaW4gbWlsbGlzZWNvbmRzXG4gICAqIEByZXR1cm4ge251bWJlcn0gSGFuZGxlIHVzZWQgZm9yIGNhbmNlbGluZyB0YXNrXG4gICAqL1xuICBydW4oZm4sIGRlbGF5KSB7XG4gICAgcmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KGZuLCBkZWxheSk7XG4gIH0sXG4gIC8qKlxuICAgKiBDYW5jZWxzIGEgcHJldmlvdXNseSBlbnF1ZXVlZCBgdGltZU91dGAgY2FsbGJhY2suXG4gICAqXG4gICAqIEBtZW1iZXJvZiB0aW1lT3V0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBoYW5kbGUgSGFuZGxlIHJldHVybmVkIGZyb20gYHJ1bmAgb2YgY2FsbGJhY2sgdG8gY2FuY2VsXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBjYW5jZWwoaGFuZGxlKSB7XG4gICAgd2luZG93LmNsZWFyVGltZW91dChoYW5kbGUpO1xuICB9XG59O1xuZXhwb3J0IHt0aW1lT3V0fTtcblxuLyoqXG4gKiBBc3luYyBpbnRlcmZhY2Ugd3JhcHBlciBhcm91bmQgYHJlcXVlc3RBbmltYXRpb25GcmFtZWAuXG4gKlxuICogQG5hbWVzcGFjZVxuICogQHN1bW1hcnkgQXN5bmMgaW50ZXJmYWNlIHdyYXBwZXIgYXJvdW5kIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgLlxuICovXG5jb25zdCBhbmltYXRpb25GcmFtZSA9IHtcbiAgLyoqXG4gICAqIEVucXVldWVzIGEgZnVuY3Rpb24gY2FsbGVkIGF0IGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIHRpbWluZy5cbiAgICpcbiAgICogQG1lbWJlcm9mIGFuaW1hdGlvbkZyYW1lXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24obnVtYmVyKTp2b2lkfSBmbiBDYWxsYmFjayB0byBydW5cbiAgICogQHJldHVybiB7bnVtYmVyfSBIYW5kbGUgdXNlZCBmb3IgY2FuY2VsaW5nIHRhc2tcbiAgICovXG4gIHJ1bihmbikge1xuICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZuKTtcbiAgfSxcbiAgLyoqXG4gICAqIENhbmNlbHMgYSBwcmV2aW91c2x5IGVucXVldWVkIGBhbmltYXRpb25GcmFtZWAgY2FsbGJhY2suXG4gICAqXG4gICAqIEBtZW1iZXJvZiBhbmltYXRpb25GcmFtZVxuICAgKiBAcGFyYW0ge251bWJlcn0gaGFuZGxlIEhhbmRsZSByZXR1cm5lZCBmcm9tIGBydW5gIG9mIGNhbGxiYWNrIHRvIGNhbmNlbFxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgY2FuY2VsKGhhbmRsZSkge1xuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShoYW5kbGUpO1xuICB9XG59O1xuZXhwb3J0IHthbmltYXRpb25GcmFtZX07XG5cbi8qKlxuICogQXN5bmMgaW50ZXJmYWNlIHdyYXBwZXIgYXJvdW5kIGByZXF1ZXN0SWRsZUNhbGxiYWNrYC4gIEZhbGxzIGJhY2sgdG9cbiAqIGBzZXRUaW1lb3V0YCBvbiBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGByZXF1ZXN0SWRsZUNhbGxiYWNrYC5cbiAqXG4gKiBAbmFtZXNwYWNlXG4gKiBAc3VtbWFyeSBBc3luYyBpbnRlcmZhY2Ugd3JhcHBlciBhcm91bmQgYHJlcXVlc3RJZGxlQ2FsbGJhY2tgLlxuICovXG5jb25zdCBpZGxlUGVyaW9kID0ge1xuICAvKipcbiAgICogRW5xdWV1ZXMgYSBmdW5jdGlvbiBjYWxsZWQgYXQgYHJlcXVlc3RJZGxlQ2FsbGJhY2tgIHRpbWluZy5cbiAgICpcbiAgICogQG1lbWJlcm9mIGlkbGVQZXJpb2RcbiAgICogQHBhcmFtIHtmdW5jdGlvbighSWRsZURlYWRsaW5lKTp2b2lkfSBmbiBDYWxsYmFjayB0byBydW5cbiAgICogQHJldHVybiB7bnVtYmVyfSBIYW5kbGUgdXNlZCBmb3IgY2FuY2VsaW5nIHRhc2tcbiAgICovXG4gIHJ1bihmbikge1xuICAgIHJldHVybiB3aW5kb3cucmVxdWVzdElkbGVDYWxsYmFjayA/XG4gICAgICB3aW5kb3cucmVxdWVzdElkbGVDYWxsYmFjayhmbikgOlxuICAgICAgd2luZG93LnNldFRpbWVvdXQoZm4sIDE2KTtcbiAgfSxcbiAgLyoqXG4gICAqIENhbmNlbHMgYSBwcmV2aW91c2x5IGVucXVldWVkIGBpZGxlUGVyaW9kYCBjYWxsYmFjay5cbiAgICpcbiAgICogQG1lbWJlcm9mIGlkbGVQZXJpb2RcbiAgICogQHBhcmFtIHtudW1iZXJ9IGhhbmRsZSBIYW5kbGUgcmV0dXJuZWQgZnJvbSBgcnVuYCBvZiBjYWxsYmFjayB0byBjYW5jZWxcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGNhbmNlbChoYW5kbGUpIHtcbiAgICB3aW5kb3cuY2FuY2VsSWRsZUNhbGxiYWNrID9cbiAgICAgIHdpbmRvdy5jYW5jZWxJZGxlQ2FsbGJhY2soaGFuZGxlKSA6XG4gICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gIH1cbn07XG5leHBvcnQge2lkbGVQZXJpb2R9O1xuXG4vKipcbiAqIEFzeW5jIGludGVyZmFjZSBmb3IgZW5xdWV1aW5nIGNhbGxiYWNrcyB0aGF0IHJ1biBhdCBtaWNyb3Rhc2sgdGltaW5nLlxuICpcbiAqIE5vdGUgdGhhdCBtaWNyb3Rhc2sgdGltaW5nIGlzIGFjaGlldmVkIHZpYSBhIHNpbmdsZSBgTXV0YXRpb25PYnNlcnZlcmAsXG4gKiBhbmQgdGh1cyBjYWxsYmFja3MgZW5xdWV1ZWQgd2l0aCB0aGlzIEFQSSB3aWxsIGFsbCBydW4gaW4gYSBzaW5nbGVcbiAqIGJhdGNoLCBhbmQgbm90IGludGVybGVhdmVkIHdpdGggb3RoZXIgbWljcm90YXNrcyBzdWNoIGFzIHByb21pc2VzLlxuICogUHJvbWlzZXMgYXJlIGF2b2lkZWQgYXMgYW4gaW1wbGVtZW50YXRpb24gY2hvaWNlIGZvciB0aGUgdGltZSBiZWluZ1xuICogZHVlIHRvIFNhZmFyaSBidWdzIHRoYXQgY2F1c2UgUHJvbWlzZXMgdG8gbGFjayBtaWNyb3Rhc2sgZ3VhcmFudGVlcy5cbiAqXG4gKiBAbmFtZXNwYWNlXG4gKiBAc3VtbWFyeSBBc3luYyBpbnRlcmZhY2UgZm9yIGVucXVldWluZyBjYWxsYmFja3MgdGhhdCBydW4gYXQgbWljcm90YXNrXG4gKiAgIHRpbWluZy5cbiAqL1xuY29uc3QgbWljcm9UYXNrID0ge1xuXG4gIC8qKlxuICAgKiBFbnF1ZXVlcyBhIGZ1bmN0aW9uIGNhbGxlZCBhdCBtaWNyb3Rhc2sgdGltaW5nLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgbWljcm9UYXNrXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9uPX0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gcnVuXG4gICAqIEByZXR1cm4ge251bWJlcn0gSGFuZGxlIHVzZWQgZm9yIGNhbmNlbGluZyB0YXNrXG4gICAqL1xuICBydW4oY2FsbGJhY2spIHtcbiAgICBtaWNyb3Rhc2tOb2RlLnRleHRDb250ZW50ID0gbWljcm90YXNrTm9kZUNvbnRlbnQrKztcbiAgICBtaWNyb3Rhc2tDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgcmV0dXJuIG1pY3JvdGFza0N1cnJIYW5kbGUrKztcbiAgfSxcblxuICAvKipcbiAgICogQ2FuY2VscyBhIHByZXZpb3VzbHkgZW5xdWV1ZWQgYG1pY3JvVGFza2AgY2FsbGJhY2suXG4gICAqXG4gICAqIEBtZW1iZXJvZiBtaWNyb1Rhc2tcbiAgICogQHBhcmFtIHtudW1iZXJ9IGhhbmRsZSBIYW5kbGUgcmV0dXJuZWQgZnJvbSBgcnVuYCBvZiBjYWxsYmFjayB0byBjYW5jZWxcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGNhbmNlbChoYW5kbGUpIHtcbiAgICBjb25zdCBpZHggPSBoYW5kbGUgLSBtaWNyb3Rhc2tMYXN0SGFuZGxlO1xuICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgaWYgKCFtaWNyb3Rhc2tDYWxsYmFja3NbaWR4XSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgYXN5bmMgaGFuZGxlOiAnICsgaGFuZGxlKTtcbiAgICAgIH1cbiAgICAgIG1pY3JvdGFza0NhbGxiYWNrc1tpZHhdID0gbnVsbDtcbiAgICB9XG4gIH1cblxufTtcbmV4cG9ydCB7bWljcm9UYXNrfTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5cbndpbmRvdy5KU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5ID0gZnVuY3Rpb24ocHJvcCkgeyByZXR1cm4gcHJvcDsgfTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJy4vYm9vdC5qcyc7XG5cbmNvbnN0IGNhc2VNYXAgPSB7fTtcbmNvbnN0IERBU0hfVE9fQ0FNRUwgPSAvLVthLXpdL2c7XG5jb25zdCBDQU1FTF9UT19EQVNIID0gLyhbQS1aXSkvZztcblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IE1vZHVsZSB3aXRoIHV0aWxpdGllcyBmb3IgY29udmVydGluZyBiZXR3ZWVuIFwiZGFzaC1jYXNlXCIgYW5kXG4gKiBcImNhbWVsQ2FzZVwiIGlkZW50aWZpZXJzLlxuICovXG5cbi8qKlxuICogQ29udmVydHMgXCJkYXNoLWNhc2VcIiBpZGVudGlmaWVyIChlLmcuIGBmb28tYmFyLWJhemApIHRvIFwiY2FtZWxDYXNlXCJcbiAqIChlLmcuIGBmb29CYXJCYXpgKS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZGFzaCBEYXNoLWNhc2UgaWRlbnRpZmllclxuICogQHJldHVybiB7c3RyaW5nfSBDYW1lbC1jYXNlIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBpZGVudGlmaWVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkYXNoVG9DYW1lbENhc2UoZGFzaCkge1xuICByZXR1cm4gY2FzZU1hcFtkYXNoXSB8fCAoXG4gICAgY2FzZU1hcFtkYXNoXSA9IGRhc2guaW5kZXhPZignLScpIDwgMCA/IGRhc2ggOiBkYXNoLnJlcGxhY2UoREFTSF9UT19DQU1FTCxcbiAgICAgIChtKSA9PiBtWzFdLnRvVXBwZXJDYXNlKClcbiAgICApXG4gICk7XG59XG5cbi8qKlxuICogQ29udmVydHMgXCJjYW1lbENhc2VcIiBpZGVudGlmaWVyIChlLmcuIGBmb29CYXJCYXpgKSB0byBcImRhc2gtY2FzZVwiXG4gKiAoZS5nLiBgZm9vLWJhci1iYXpgKS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY2FtZWwgQ2FtZWwtY2FzZSBpZGVudGlmaWVyXG4gKiBAcmV0dXJuIHtzdHJpbmd9IERhc2gtY2FzZSByZXByZXNlbnRhdGlvbiBvZiB0aGUgaWRlbnRpZmllclxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FtZWxUb0Rhc2hDYXNlKGNhbWVsKSB7XG4gIHJldHVybiBjYXNlTWFwW2NhbWVsXSB8fCAoXG4gICAgY2FzZU1hcFtjYW1lbF0gPSBjYW1lbC5yZXBsYWNlKENBTUVMX1RPX0RBU0gsICctJDEnKS50b0xvd2VyQ2FzZSgpXG4gICk7XG59XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICcuL2Jvb3QuanMnO1xuXG4vLyB1bmlxdWUgZ2xvYmFsIGlkIGZvciBkZWR1cGluZyBtaXhpbnMuXG5sZXQgZGVkdXBlSWQgPSAwO1xuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICogQGV4dGVuZHMge0Z1bmN0aW9ufVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gTWl4aW5GdW5jdGlvbigpe31cbi8qKiBAdHlwZSB7KFdlYWtNYXAgfCB1bmRlZmluZWQpfSAqL1xuTWl4aW5GdW5jdGlvbi5wcm90b3R5cGUuX19taXhpbkFwcGxpY2F0aW9ucztcbi8qKiBAdHlwZSB7KE9iamVjdCB8IHVuZGVmaW5lZCl9ICovXG5NaXhpbkZ1bmN0aW9uLnByb3RvdHlwZS5fX21peGluU2V0O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSB2YWxpZC1qc2RvYyAqL1xuLyoqXG4gKiBXcmFwcyBhbiBFUzYgY2xhc3MgZXhwcmVzc2lvbiBtaXhpbiBzdWNoIHRoYXQgdGhlIG1peGluIGlzIG9ubHkgYXBwbGllZFxuICogaWYgaXQgaGFzIG5vdCBhbHJlYWR5IGJlZW4gYXBwbGllZCBpdHMgYmFzZSBhcmd1bWVudC4gQWxzbyBtZW1vaXplcyBtaXhpblxuICogYXBwbGljYXRpb25zLlxuICpcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge1R9IG1peGluIEVTNiBjbGFzcyBleHByZXNzaW9uIG1peGluIHRvIHdyYXBcbiAqIEByZXR1cm4ge1R9XG4gKiBAc3VwcHJlc3Mge2ludmFsaWRDYXN0c31cbiAqL1xuZXhwb3J0IGNvbnN0IGRlZHVwaW5nTWl4aW4gPSBmdW5jdGlvbihtaXhpbikge1xuICBsZXQgbWl4aW5BcHBsaWNhdGlvbnMgPSAvKiogQHR5cGUgeyFNaXhpbkZ1bmN0aW9ufSAqLyhtaXhpbikuX19taXhpbkFwcGxpY2F0aW9ucztcbiAgaWYgKCFtaXhpbkFwcGxpY2F0aW9ucykge1xuICAgIG1peGluQXBwbGljYXRpb25zID0gbmV3IFdlYWtNYXAoKTtcbiAgICAvKiogQHR5cGUgeyFNaXhpbkZ1bmN0aW9ufSAqLyhtaXhpbikuX19taXhpbkFwcGxpY2F0aW9ucyA9IG1peGluQXBwbGljYXRpb25zO1xuICB9XG4gIC8vIG1haW50YWluIGEgdW5pcXVlIGlkIGZvciBlYWNoIG1peGluXG4gIGxldCBtaXhpbkRlZHVwZUlkID0gZGVkdXBlSWQrKztcbiAgZnVuY3Rpb24gZGVkdXBpbmdNaXhpbihiYXNlKSB7XG4gICAgbGV0IGJhc2VTZXQgPSAvKiogQHR5cGUgeyFNaXhpbkZ1bmN0aW9ufSAqLyhiYXNlKS5fX21peGluU2V0O1xuICAgIGlmIChiYXNlU2V0ICYmIGJhc2VTZXRbbWl4aW5EZWR1cGVJZF0pIHtcbiAgICAgIHJldHVybiBiYXNlO1xuICAgIH1cbiAgICBsZXQgbWFwID0gbWl4aW5BcHBsaWNhdGlvbnM7XG4gICAgbGV0IGV4dGVuZGVkID0gbWFwLmdldChiYXNlKTtcbiAgICBpZiAoIWV4dGVuZGVkKSB7XG4gICAgICBleHRlbmRlZCA9IC8qKiBAdHlwZSB7IUZ1bmN0aW9ufSAqLyhtaXhpbikoYmFzZSk7XG4gICAgICBtYXAuc2V0KGJhc2UsIGV4dGVuZGVkKTtcbiAgICB9XG4gICAgLy8gY29weSBpbmhlcml0ZWQgbWl4aW4gc2V0IGZyb20gdGhlIGV4dGVuZGVkIGNsYXNzLCBvciB0aGUgYmFzZSBjbGFzc1xuICAgIC8vIE5PVEU6IHdlIGF2b2lkIHVzZSBvZiBTZXQgaGVyZSBiZWNhdXNlIHNvbWUgYnJvd3NlciAoSUUxMSlcbiAgICAvLyBjYW5ub3QgZXh0ZW5kIGEgYmFzZSBTZXQgdmlhIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICBsZXQgbWl4aW5TZXQgPSBPYmplY3QuY3JlYXRlKC8qKiBAdHlwZSB7IU1peGluRnVuY3Rpb259ICovKGV4dGVuZGVkKS5fX21peGluU2V0IHx8IGJhc2VTZXQgfHwgbnVsbCk7XG4gICAgbWl4aW5TZXRbbWl4aW5EZWR1cGVJZF0gPSB0cnVlO1xuICAgIC8qKiBAdHlwZSB7IU1peGluRnVuY3Rpb259ICovKGV4dGVuZGVkKS5fX21peGluU2V0ID0gbWl4aW5TZXQ7XG4gICAgcmV0dXJuIGV4dGVuZGVkO1xuICB9XG5cbiAgcmV0dXJuIGRlZHVwaW5nTWl4aW47XG59O1xuLyogZXNsaW50LWVuYWJsZSB2YWxpZC1qc2RvYyAqL1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG5pbXBvcnQge2RpcmVjdGl2ZSwgRGlyZWN0aXZlRm4sIE5vZGVQYXJ0fSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdGhhdCByZW5kZXJzIHRoZSBpdGVtcyBvZiBhbiBhc3luYyBpdGVyYWJsZVsxXSwgYXBwZW5kaW5nIG5ld1xuICogdmFsdWVzIGFmdGVyIHByZXZpb3VzIHZhbHVlcywgc2ltaWxhciB0byB0aGUgYnVpbHQtaW4gc3VwcG9ydCBmb3IgaXRlcmFibGVzLlxuICpcbiAqIEFzeW5jIGl0ZXJhYmxlcyBhcmUgb2JqZWN0cyB3aXRoIGEgW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSBtZXRob2QsIHdoaWNoXG4gKiByZXR1cm5zIGFuIGl0ZXJhdG9yIHdobydzIGBuZXh0KClgIG1ldGhvZCByZXR1cm5zIGEgUHJvbWlzZS4gV2hlbiBhIG5ld1xuICogdmFsdWUgaXMgYXZhaWxhYmxlLCB0aGUgUHJvbWlzZSByZXNvbHZlcyBhbmQgdGhlIHZhbHVlIGlzIGFwcGVuZGVkIHRvIHRoZVxuICogUGFydCBjb250cm9sbGVkIGJ5IHRoZSBkaXJlY3RpdmUuIElmIGFub3RoZXIgdmFsdWUgb3RoZXIgdGhhbiB0aGlzXG4gKiBkaXJlY3RpdmUgaGFzIGJlZW4gc2V0IG9uIHRoZSBQYXJ0LCB0aGUgaXRlcmFibGUgd2lsbCBubyBsb25nZXIgYmUgbGlzdGVuZWRcbiAqIHRvIGFuZCBuZXcgdmFsdWVzIHdvbid0IGJlIHdyaXR0ZW4gdG8gdGhlIFBhcnQuXG4gKlxuICogWzFdOiBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1hc3luYy1pdGVyYXRpb25cbiAqXG4gKiBAcGFyYW0gdmFsdWUgQW4gYXN5bmMgaXRlcmFibGVcbiAqIEBwYXJhbSBtYXBwZXIgQW4gb3B0aW9uYWwgZnVuY3Rpb24gdGhhdCBtYXBzIGZyb20gKHZhbHVlLCBpbmRleCkgdG8gYW5vdGhlclxuICogICAgIHZhbHVlLiBVc2VmdWwgZm9yIGdlbmVyYXRpbmcgdGVtcGxhdGVzIGZvciBlYWNoIGl0ZW0gaW4gdGhlIGl0ZXJhYmxlLlxuICovXG5leHBvcnQgY29uc3QgYXN5bmNBcHBlbmQgPSA8VD4oXG4gICAgdmFsdWU6IEFzeW5jSXRlcmFibGU8VD4sIG1hcHBlcj86ICh2OiBULCBpbmRleD86IG51bWJlcikgPT4gYW55KTogRGlyZWN0aXZlRm48Tm9kZVBhcnQ+ID0+XG4gICAgZGlyZWN0aXZlKGFzeW5jIChwYXJ0OiBOb2RlUGFydCkgPT4ge1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBzZXQgdXAgdGhpcyBwYXJ0aWN1bGFyIGl0ZXJhYmxlLCB3ZSBkb24ndCBuZWVkXG4gICAgICAvLyB0byBkbyBhbnl0aGluZy5cbiAgICAgIGlmICh2YWx1ZSA9PT0gcGFydC5fcHJldmlvdXNWYWx1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBwYXJ0Ll9wcmV2aW91c1ZhbHVlID0gdmFsdWU7XG5cbiAgICAgIC8vIFdlIGtlZXAgdHJhY2sgb2YgaXRlbSBQYXJ0cyBhY3Jvc3MgaXRlcmF0aW9ucywgc28gdGhhdCB3ZSBjYW5cbiAgICAgIC8vIHNoYXJlIG1hcmtlciBub2RlcyBiZXR3ZWVuIGNvbnNlY3V0aXZlIFBhcnRzLlxuICAgICAgbGV0IGl0ZW1QYXJ0O1xuICAgICAgbGV0IGkgPSAwO1xuXG4gICAgICBmb3IgYXdhaXQgKGxldCB2IG9mIHZhbHVlKSB7XG4gICAgICAgIC8vIFdoZW4gd2UgZ2V0IHRoZSBmaXJzdCB2YWx1ZSwgY2xlYXIgdGhlIHBhcnQuIFRoaXMgbGV0cyB0aGUgcHJldmlvdXNcbiAgICAgICAgLy8gdmFsdWUgZGlzcGxheSB1bnRpbCB3ZSBjYW4gcmVwbGFjZSBpdC5cbiAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICBwYXJ0LmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayB0byBtYWtlIHN1cmUgdGhhdCB2YWx1ZSBpcyB0aGUgc3RpbGwgdGhlIGN1cnJlbnQgdmFsdWUgb2ZcbiAgICAgICAgLy8gdGhlIHBhcnQsIGFuZCBpZiBub3QgYmFpbCBiZWNhdXNlIGEgbmV3IHZhbHVlIG93bnMgdGhpcyBwYXJ0XG4gICAgICAgIGlmIChwYXJ0Ll9wcmV2aW91c1ZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXMgYSBjb252ZW5pZW5jZSwgYmVjYXVzZSBmdW5jdGlvbmFsLXByb2dyYW1taW5nLXN0eWxlXG4gICAgICAgIC8vIHRyYW5zZm9ybXMgb2YgaXRlcmFibGVzIGFuZCBhc3luYyBpdGVyYWJsZXMgcmVxdWlyZXMgYSBsaWJyYXJ5LFxuICAgICAgICAvLyB3ZSBhY2NlcHQgYSBtYXBwZXIgZnVuY3Rpb24uIFRoaXMgaXMgZXNwZWNpYWxseSBjb252ZW5pZW50IGZvclxuICAgICAgICAvLyByZW5kZXJpbmcgYSB0ZW1wbGF0ZSBmb3IgZWFjaCBpdGVtLlxuICAgICAgICBpZiAobWFwcGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB2ID0gbWFwcGVyKHYsIGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTGlrZSB3aXRoIHN5bmMgaXRlcmFibGVzLCBlYWNoIGl0ZW0gaW5kdWNlcyBhIFBhcnQsIHNvIHdlIG5lZWRcbiAgICAgICAgLy8gdG8ga2VlcCB0cmFjayBvZiBzdGFydCBhbmQgZW5kIG5vZGVzIGZvciB0aGUgUGFydC5cbiAgICAgICAgLy8gTm90ZTogQmVjYXVzZSB0aGVzZSBQYXJ0cyBhcmUgbm90IHVwZGF0YWJsZSBsaWtlIHdpdGggYSBzeW5jXG4gICAgICAgIC8vIGl0ZXJhYmxlIChpZiB3ZSByZW5kZXIgYSBuZXcgdmFsdWUsIHdlIGFsd2F5cyBjbGVhciksIGl0IG1heVxuICAgICAgICAvLyBiZSBwb3NzaWJsZSB0byBvcHRpbWl6ZSBhd2F5IHRoZSBQYXJ0cyBhbmQganVzdCByZS11c2UgdGhlXG4gICAgICAgIC8vIFBhcnQuc2V0VmFsdWUoKSBsb2dpYy5cblxuICAgICAgICBsZXQgaXRlbVN0YXJ0Tm9kZSA9IHBhcnQuc3RhcnROb2RlO1xuXG4gICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiB3ZSBoYXZlIGEgcHJldmlvdXMgaXRlbSBhbmQgUGFydFxuICAgICAgICBpZiAoaXRlbVBhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIENyZWF0ZSBhIG5ldyBub2RlIHRvIHNlcGFyYXRlIHRoZSBwcmV2aW91cyBhbmQgbmV4dCBQYXJ0c1xuICAgICAgICAgIGl0ZW1TdGFydE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgICAgICAgLy8gaXRlbVBhcnQgaXMgY3VycmVudGx5IHRoZSBQYXJ0IGZvciB0aGUgcHJldmlvdXMgaXRlbS4gU2V0XG4gICAgICAgICAgLy8gaXQncyBlbmROb2RlIHRvIHRoZSBub2RlIHdlJ2xsIHVzZSBmb3IgdGhlIG5leHQgUGFydCdzXG4gICAgICAgICAgLy8gc3RhcnROb2RlLlxuICAgICAgICAgIGl0ZW1QYXJ0LmVuZE5vZGUgPSBpdGVtU3RhcnROb2RlO1xuICAgICAgICAgIHBhcnQuZW5kTm9kZS5wYXJlbnROb2RlIS5pbnNlcnRCZWZvcmUoaXRlbVN0YXJ0Tm9kZSwgcGFydC5lbmROb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpdGVtUGFydCA9IG5ldyBOb2RlUGFydChwYXJ0Lmluc3RhbmNlLCBpdGVtU3RhcnROb2RlLCBwYXJ0LmVuZE5vZGUpO1xuICAgICAgICBpdGVtUGFydC5zZXRWYWx1ZSh2KTtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgIH0pO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG5pbXBvcnQge2RpcmVjdGl2ZSwgRGlyZWN0aXZlRm4sIE5vZGVQYXJ0fSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdGhhdCByZW5kZXJzIHRoZSBpdGVtcyBvZiBhbiBhc3luYyBpdGVyYWJsZVsxXSwgcmVwbGFjaW5nXG4gKiBwcmV2aW91cyB2YWx1ZXMgd2l0aCBuZXcgdmFsdWVzLCBzbyB0aGF0IG9ubHkgb25lIHZhbHVlIGlzIGV2ZXIgcmVuZGVyZWRcbiAqIGF0IGEgdGltZS5cbiAqXG4gKiBBc3luYyBpdGVyYWJsZXMgYXJlIG9iamVjdHMgd2l0aCBhIFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gbWV0aG9kLCB3aGljaFxuICogcmV0dXJucyBhbiBpdGVyYXRvciB3aG8ncyBgbmV4dCgpYCBtZXRob2QgcmV0dXJucyBhIFByb21pc2UuIFdoZW4gYSBuZXdcbiAqIHZhbHVlIGlzIGF2YWlsYWJsZSwgdGhlIFByb21pc2UgcmVzb2x2ZXMgYW5kIHRoZSB2YWx1ZSBpcyByZW5kZXJlZCB0byB0aGVcbiAqIFBhcnQgY29udHJvbGxlZCBieSB0aGUgZGlyZWN0aXZlLiBJZiBhbm90aGVyIHZhbHVlIG90aGVyIHRoYW4gdGhpc1xuICogZGlyZWN0aXZlIGhhcyBiZWVuIHNldCBvbiB0aGUgUGFydCwgdGhlIGl0ZXJhYmxlIHdpbGwgbm8gbG9uZ2VyIGJlIGxpc3RlbmVkXG4gKiB0byBhbmQgbmV3IHZhbHVlcyB3b24ndCBiZSB3cml0dGVuIHRvIHRoZSBQYXJ0LlxuICpcbiAqIFsxXTogaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtYXN5bmMtaXRlcmF0aW9uXG4gKlxuICogQHBhcmFtIHZhbHVlIEFuIGFzeW5jIGl0ZXJhYmxlXG4gKiBAcGFyYW0gbWFwcGVyIEFuIG9wdGlvbmFsIGZ1bmN0aW9uIHRoYXQgbWFwcyBmcm9tICh2YWx1ZSwgaW5kZXgpIHRvIGFub3RoZXJcbiAqICAgICB2YWx1ZS4gVXNlZnVsIGZvciBnZW5lcmF0aW5nIHRlbXBsYXRlcyBmb3IgZWFjaCBpdGVtIGluIHRoZSBpdGVyYWJsZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGFzeW5jUmVwbGFjZSA9XG4gICAgPFQ+KHZhbHVlOiBBc3luY0l0ZXJhYmxlPFQ+LCBtYXBwZXI/OiAodjogVCwgaW5kZXg/OiBudW1iZXIpID0+IGFueSk6IERpcmVjdGl2ZUZuPE5vZGVQYXJ0PiA9PlxuICAgICAgICBkaXJlY3RpdmUoYXN5bmMgKHBhcnQ6IE5vZGVQYXJ0KSA9PiB7XG4gICAgICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBzZXQgdXAgdGhpcyBwYXJ0aWN1bGFyIGl0ZXJhYmxlLCB3ZSBkb24ndCBuZWVkXG4gICAgICAgICAgLy8gdG8gZG8gYW55dGhpbmcuXG4gICAgICAgICAgaWYgKHZhbHVlID09PSBwYXJ0Ll9wcmV2aW91c1ZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gV2UgbmVzdCBhIG5ldyBwYXJ0IHRvIGtlZXAgdHJhY2sgb2YgcHJldmlvdXMgaXRlbSB2YWx1ZXMgc2VwYXJhdGVseVxuICAgICAgICAgIC8vIG9mIHRoZSBpdGVyYWJsZSBhcyBhIHZhbHVlIGl0c2VsZi5cbiAgICAgICAgICBjb25zdCBpdGVtUGFydCA9XG4gICAgICAgICAgICAgIG5ldyBOb2RlUGFydChwYXJ0Lmluc3RhbmNlLCBwYXJ0LnN0YXJ0Tm9kZSwgcGFydC5lbmROb2RlKTtcblxuICAgICAgICAgIHBhcnQuX3ByZXZpb3VzVmFsdWUgPSBpdGVtUGFydDtcblxuICAgICAgICAgIGxldCBpID0gMDtcblxuICAgICAgICAgIGZvciBhd2FpdCAobGV0IHYgb2YgdmFsdWUpIHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgZ2V0IHRoZSBmaXJzdCB2YWx1ZSwgY2xlYXIgdGhlIHBhcnQuIFRoaXMgbGV0J3MgdGhlXG4gICAgICAgICAgICAvLyBwcmV2aW91cyB2YWx1ZSBkaXNwbGF5IHVudGlsIHdlIGNhbiByZXBsYWNlIGl0LlxuICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgICAgcGFydC5jbGVhcigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDaGVjayB0byBtYWtlIHN1cmUgdGhhdCB2YWx1ZSBpcyB0aGUgc3RpbGwgdGhlIGN1cnJlbnQgdmFsdWUgb2ZcbiAgICAgICAgICAgIC8vIHRoZSBwYXJ0LCBhbmQgaWYgbm90IGJhaWwgYmVjYXVzZSBhIG5ldyB2YWx1ZSBvd25zIHRoaXMgcGFydFxuICAgICAgICAgICAgaWYgKHBhcnQuX3ByZXZpb3VzVmFsdWUgIT09IGl0ZW1QYXJ0KSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBcyBhIGNvbnZlbmllbmNlLCBiZWNhdXNlIGZ1bmN0aW9uYWwtcHJvZ3JhbW1pbmctc3R5bGVcbiAgICAgICAgICAgIC8vIHRyYW5zZm9ybXMgb2YgaXRlcmFibGVzIGFuZCBhc3luYyBpdGVyYWJsZXMgcmVxdWlyZXMgYSBsaWJyYXJ5LFxuICAgICAgICAgICAgLy8gd2UgYWNjZXB0IGEgbWFwcGVyIGZ1bmN0aW9uLiBUaGlzIGlzIGVzcGVjaWFsbHkgY29udmVuaWVudCBmb3JcbiAgICAgICAgICAgIC8vIHJlbmRlcmluZyBhIHRlbXBsYXRlIGZvciBlYWNoIGl0ZW0uXG4gICAgICAgICAgICBpZiAobWFwcGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgdiA9IG1hcHBlcih2LCBpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbVBhcnQuc2V0VmFsdWUodik7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuaW1wb3J0IHtBdHRyaWJ1dGVQYXJ0LCBkZWZhdWx0UGFydENhbGxiYWNrLCBub0NoYW5nZSwgZ2V0VmFsdWUsIFBhcnQsIFNWR1RlbXBsYXRlUmVzdWx0LCBUZW1wbGF0ZUluc3RhbmNlLCBUZW1wbGF0ZVBhcnQsIFRlbXBsYXRlUmVzdWx0fSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG5cbmV4cG9ydCB7cmVuZGVyfSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG5cbi8qKlxuICogSW50ZXJwcmV0cyBhIHRlbXBsYXRlIGxpdGVyYWwgYXMgYSBsaXQtZXh0ZW5kZWQgSFRNTCB0ZW1wbGF0ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGh0bWwgPSAoc3RyaW5nczogVGVtcGxhdGVTdHJpbmdzQXJyYXksIC4uLnZhbHVlczogYW55W10pID0+XG4gICAgbmV3IFRlbXBsYXRlUmVzdWx0KHN0cmluZ3MsIHZhbHVlcywgJ2h0bWwnLCBleHRlbmRlZFBhcnRDYWxsYmFjayk7XG5cbi8qKlxuICogSW50ZXJwcmV0cyBhIHRlbXBsYXRlIGxpdGVyYWwgYXMgYSBsaXQtZXh0ZW5kZWQgU1ZHIHRlbXBsYXRlLlxuICovXG5leHBvcnQgY29uc3Qgc3ZnID0gKHN0cmluZ3M6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi52YWx1ZXM6IGFueVtdKSA9PlxuICAgIG5ldyBTVkdUZW1wbGF0ZVJlc3VsdChzdHJpbmdzLCB2YWx1ZXMsICdzdmcnLCBleHRlbmRlZFBhcnRDYWxsYmFjayk7XG5cbi8qKlxuICogQSBQYXJ0Q2FsbGJhY2sgd2hpY2ggYWxsb3dzIHRlbXBsYXRlcyB0byBzZXQgcHJvcGVydGllcyBhbmQgZGVjbGFyYXRpdmVcbiAqIGV2ZW50IGhhbmRsZXJzLlxuICpcbiAqIFByb3BlcnRpZXMgYXJlIHNldCBieSBkZWZhdWx0LCBpbnN0ZWFkIG9mIGF0dHJpYnV0ZXMuIEF0dHJpYnV0ZSBuYW1lcyBpblxuICogbGl0LWh0bWwgdGVtcGxhdGVzIHByZXNlcnZlIGNhc2UsIHNvIHByb3BlcnRpZXMgYXJlIGNhc2Ugc2Vuc2l0aXZlLiBJZiBhblxuICogZXhwcmVzc2lvbiB0YWtlcyB1cCBhbiBlbnRpcmUgYXR0cmlidXRlIHZhbHVlLCB0aGVuIHRoZSBwcm9wZXJ0eSBpcyBzZXQgdG9cbiAqIHRoYXQgdmFsdWUuIElmIGFuIGV4cHJlc3Npb24gaXMgaW50ZXJwb2xhdGVkIHdpdGggYSBzdHJpbmcgb3Igb3RoZXJcbiAqIGV4cHJlc3Npb25zIHRoZW4gdGhlIHByb3BlcnR5IGlzIHNldCB0byB0aGUgc3RyaW5nIHJlc3VsdCBvZiB0aGVcbiAqIGludGVycG9sYXRpb24uXG4gKlxuICogVG8gc2V0IGFuIGF0dHJpYnV0ZSBpbnN0ZWFkIG9mIGEgcHJvcGVydHksIGFwcGVuZCBhIGAkYCBzdWZmaXggdG8gdGhlXG4gKiBhdHRyaWJ1dGUgbmFtZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICBodG1sYDxidXR0b24gY2xhc3MkPVwicHJpbWFyeVwiPkJ1eSBOb3c8L2J1dHRvbj5gXG4gKlxuICogVG8gc2V0IGFuIGV2ZW50IGhhbmRsZXIsIHByZWZpeCB0aGUgYXR0cmlidXRlIG5hbWUgd2l0aCBgb24tYDpcbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICBodG1sYDxidXR0b24gb24tY2xpY2s9JHsoZSk9PiB0aGlzLm9uQ2xpY2tIYW5kbGVyKGUpfT5CdXkgTm93PC9idXR0b24+YFxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IGV4dGVuZGVkUGFydENhbGxiYWNrID1cbiAgICAoaW5zdGFuY2U6IFRlbXBsYXRlSW5zdGFuY2UsIHRlbXBsYXRlUGFydDogVGVtcGxhdGVQYXJ0LCBub2RlOiBOb2RlKTpcbiAgICAgICAgUGFydCA9PiB7XG4gICAgICAgICAgaWYgKHRlbXBsYXRlUGFydC50eXBlID09PSAnYXR0cmlidXRlJykge1xuICAgICAgICAgICAgaWYgKHRlbXBsYXRlUGFydC5yYXdOYW1lIS5zdWJzdHIoMCwgMykgPT09ICdvbi0nKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IHRlbXBsYXRlUGFydC5yYXdOYW1lIS5zbGljZSgzKTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFdmVudFBhcnQoaW5zdGFuY2UsIG5vZGUgYXMgRWxlbWVudCwgZXZlbnROYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxhc3RDaGFyID0gdGVtcGxhdGVQYXJ0Lm5hbWUhLnN1YnN0cih0ZW1wbGF0ZVBhcnQubmFtZSEubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICBpZiAobGFzdENoYXIgPT09ICckJykge1xuICAgICAgICAgICAgICBjb25zdCBuYW1lID0gdGVtcGxhdGVQYXJ0Lm5hbWUhLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBBdHRyaWJ1dGVQYXJ0KFxuICAgICAgICAgICAgICAgICAgaW5zdGFuY2UsIG5vZGUgYXMgRWxlbWVudCwgbmFtZSwgdGVtcGxhdGVQYXJ0LnN0cmluZ3MhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsYXN0Q2hhciA9PT0gJz8nKSB7XG4gICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSB0ZW1wbGF0ZVBhcnQubmFtZSEuc2xpY2UoMCwgLTEpO1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IEJvb2xlYW5BdHRyaWJ1dGVQYXJ0KFxuICAgICAgICAgICAgICAgICAgaW5zdGFuY2UsIG5vZGUgYXMgRWxlbWVudCwgbmFtZSwgdGVtcGxhdGVQYXJ0LnN0cmluZ3MhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcGVydHlQYXJ0KFxuICAgICAgICAgICAgICAgIGluc3RhbmNlLFxuICAgICAgICAgICAgICAgIG5vZGUgYXMgRWxlbWVudCxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVBhcnQucmF3TmFtZSEsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVQYXJ0LnN0cmluZ3MhKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGRlZmF1bHRQYXJ0Q2FsbGJhY2soaW5zdGFuY2UsIHRlbXBsYXRlUGFydCwgbm9kZSk7XG4gICAgICAgIH07XG5cbi8qKlxuICogSW1wbGVtZW50cyBhIGJvb2xlYW4gYXR0cmlidXRlLCByb3VnaGx5IGFzIGRlZmluZWQgaW4gdGhlIEhUTUxcbiAqIHNwZWNpZmljYXRpb24uXG4gKlxuICogSWYgdGhlIHZhbHVlIGlzIHRydXRoeSwgdGhlbiB0aGUgYXR0cmlidXRlIGlzIHByZXNlbnQgd2l0aCBhIHZhbHVlIG9mXG4gKiAnJy4gSWYgdGhlIHZhbHVlIGlzIGZhbHNleSwgdGhlIGF0dHJpYnV0ZSBpcyByZW1vdmVkLlxuICovXG5leHBvcnQgY2xhc3MgQm9vbGVhbkF0dHJpYnV0ZVBhcnQgZXh0ZW5kcyBBdHRyaWJ1dGVQYXJ0IHtcbiAgc2V0VmFsdWUodmFsdWVzOiBhbnlbXSwgc3RhcnRJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgcyA9IHRoaXMuc3RyaW5ncztcbiAgICBpZiAocy5sZW5ndGggPT09IDIgJiYgc1swXSA9PT0gJycgJiYgc1sxXSA9PT0gJycpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZ2V0VmFsdWUodGhpcywgdmFsdWVzW3N0YXJ0SW5kZXhdKTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5uYW1lLCAnJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHRoaXMubmFtZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnYm9vbGVhbiBhdHRyaWJ1dGVzIGNhbiBvbmx5IGNvbnRhaW4gYSBzaW5nbGUgZXhwcmVzc2lvbicpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUHJvcGVydHlQYXJ0IGV4dGVuZHMgQXR0cmlidXRlUGFydCB7XG4gIHNldFZhbHVlKHZhbHVlczogYW55W10sIHN0YXJ0SW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHMgPSB0aGlzLnN0cmluZ3M7XG4gICAgbGV0IHZhbHVlOiBhbnk7XG4gICAgaWYgKHRoaXMuX2VxdWFsVG9QcmV2aW91c1ZhbHVlcyh2YWx1ZXMsIHN0YXJ0SW5kZXgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzLmxlbmd0aCA9PT0gMiAmJiBzWzBdID09PSAnJyAmJiBzWzFdID09PSAnJykge1xuICAgICAgLy8gQW4gZXhwcmVzc2lvbiB0aGF0IG9jY3VwaWVzIHRoZSB3aG9sZSBhdHRyaWJ1dGUgdmFsdWUgd2lsbCBsZWF2ZVxuICAgICAgLy8gbGVhZGluZyBhbmQgdHJhaWxpbmcgZW1wdHkgc3RyaW5ncy5cbiAgICAgIHZhbHVlID0gZ2V0VmFsdWUodGhpcywgdmFsdWVzW3N0YXJ0SW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSW50ZXJwb2xhdGlvbiwgc28gaW50ZXJwb2xhdGVcbiAgICAgIHZhbHVlID0gdGhpcy5faW50ZXJwb2xhdGUodmFsdWVzLCBzdGFydEluZGV4KTtcbiAgICB9XG4gICAgaWYgKHZhbHVlICE9PSBub0NoYW5nZSkge1xuICAgICAgKHRoaXMuZWxlbWVudCBhcyBhbnkpW3RoaXMubmFtZV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLl9wcmV2aW91c1ZhbHVlcyA9IHZhbHVlcztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRXZlbnRQYXJ0IGltcGxlbWVudHMgUGFydCB7XG4gIGluc3RhbmNlOiBUZW1wbGF0ZUluc3RhbmNlO1xuICBlbGVtZW50OiBFbGVtZW50O1xuICBldmVudE5hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfbGlzdGVuZXI6IGFueTtcblxuICBjb25zdHJ1Y3RvcihpbnN0YW5jZTogVGVtcGxhdGVJbnN0YW5jZSwgZWxlbWVudDogRWxlbWVudCwgZXZlbnROYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmV2ZW50TmFtZSA9IGV2ZW50TmFtZTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBsaXN0ZW5lciA9IGdldFZhbHVlKHRoaXMsIHZhbHVlKTtcbiAgICBpZiAobGlzdGVuZXIgPT09IHRoaXMuX2xpc3RlbmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChsaXN0ZW5lciA9PSBudWxsKSB7XG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50TmFtZSwgdGhpcyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9saXN0ZW5lciA9PSBudWxsKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50TmFtZSwgdGhpcyk7XG4gICAgfVxuICAgIHRoaXMuX2xpc3RlbmVyID0gbGlzdGVuZXI7XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudDogRXZlbnQpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuX2xpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLl9saXN0ZW5lci5jYWxsKHRoaXMuZWxlbWVudCwgZXZlbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMuX2xpc3RlbmVyLmhhbmRsZUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLl9saXN0ZW5lci5oYW5kbGVFdmVudChldmVudCk7XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbmltcG9ydCB7VGVtcGxhdGUsIGlzVGVtcGxhdGVQYXJ0QWN0aXZlLCBUZW1wbGF0ZVBhcnR9IGZyb20gJy4uL2xpdC1odG1sLmpzJztcblxuY29uc3Qgd2Fsa2VyTm9kZUZpbHRlciA9IE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5UIHwgTm9kZUZpbHRlci5TSE9XX0NPTU1FTlQgfFxuTm9kZUZpbHRlci5TSE9XX1RFWFQ7XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgbGlzdCBvZiBub2RlcyBmcm9tIGEgVGVtcGxhdGUgc2FmZWx5LiBJbiBhZGRpdGlvbiB0byByZW1vdmluZ1xuICogbm9kZXMgZnJvbSB0aGUgVGVtcGxhdGUsIHRoZSBUZW1wbGF0ZSBwYXJ0IGluZGljZXMgYXJlIHVwZGF0ZWQgdG8gbWF0Y2hcbiAqIHRoZSBtdXRhdGVkIFRlbXBsYXRlIERPTS5cbiAqXG4gKiBBcyB0aGUgdGVtcGxhdGUgaXMgd2Fsa2VkIHRoZSByZW1vdmFsIHN0YXRlIGlzIHRyYWNrZWQgYW5kXG4gKiBwYXJ0IGluZGljZXMgYXJlIGFkanVzdGVkIGFzIG5lZWRlZC5cbiAqXG4gKiBkaXZcbiAqICAgZGl2IzEgKHJlbW92ZSkgPC0tIHN0YXJ0IHJlbW92aW5nIChyZW1vdmluZyBub2RlIGlzIGRpdiMxKVxuICogICAgIGRpdlxuICogICAgICAgZGl2IzIgKHJlbW92ZSkgIDwtLSBjb250aW51ZSByZW1vdmluZyAocmVtb3Zpbmcgbm9kZSBpcyBzdGlsbCBkaXYjMSlcbiAqICAgICAgICAgZGl2XG4gKiBkaXYgPC0tIHN0b3AgcmVtb3Zpbmcgc2luY2UgcHJldmlvdXMgc2libGluZyBpcyB0aGUgcmVtb3Zpbmcgbm9kZSAoZGl2IzEsIHJlbW92ZWQgNCBub2RlcylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU5vZGVzRnJvbVRlbXBsYXRlKHRlbXBsYXRlOiBUZW1wbGF0ZSwgbm9kZXNUb1JlbW92ZTogU2V0PE5vZGU+KSB7XG4gIGNvbnN0IHtlbGVtZW50OiB7Y29udGVudH0sIHBhcnRzfSA9IHRlbXBsYXRlO1xuICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKFxuICAgIGNvbnRlbnQsXG4gICAgd2Fsa2VyTm9kZUZpbHRlcixcbiAgICBudWxsIGFzIGFueSxcbiAgICBmYWxzZSk7XG4gIGxldCBwYXJ0SW5kZXggPSAwO1xuICBsZXQgcGFydCA9IHBhcnRzWzBdO1xuICBsZXQgbm9kZUluZGV4ID0gLTE7XG4gIGxldCByZW1vdmVDb3VudCA9IDA7XG4gIGNvbnN0IG5vZGVzVG9SZW1vdmVJblRlbXBsYXRlID0gW107XG4gIGxldCBjdXJyZW50UmVtb3ZpbmdOb2RlOiBOb2RlfG51bGwgPSBudWxsO1xuICB3aGlsZSAod2Fsa2VyLm5leHROb2RlKCkpIHtcbiAgICBub2RlSW5kZXgrKztcbiAgICBjb25zdCBub2RlID0gd2Fsa2VyLmN1cnJlbnROb2RlIGFzIEVsZW1lbnQ7XG4gICAgLy8gRW5kIHJlbW92YWwgaWYgc3RlcHBlZCBwYXN0IHRoZSByZW1vdmluZyBub2RlXG4gICAgaWYgKG5vZGUucHJldmlvdXNTaWJsaW5nID09PSBjdXJyZW50UmVtb3ZpbmdOb2RlKSB7XG4gICAgICBjdXJyZW50UmVtb3ZpbmdOb2RlID0gbnVsbDtcbiAgICB9XG4gICAgLy8gQSBub2RlIHRvIHJlbW92ZSB3YXMgZm91bmQgaW4gdGhlIHRlbXBsYXRlXG4gICAgaWYgKG5vZGVzVG9SZW1vdmUuaGFzKG5vZGUpKSB7XG4gICAgICBub2Rlc1RvUmVtb3ZlSW5UZW1wbGF0ZS5wdXNoKG5vZGUpO1xuICAgICAgLy8gVHJhY2sgbm9kZSB3ZSdyZSByZW1vdmluZ1xuICAgICAgaWYgKGN1cnJlbnRSZW1vdmluZ05vZGUgPT09IG51bGwpIHtcbiAgICAgICAgY3VycmVudFJlbW92aW5nTm9kZSA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFdoZW4gcmVtb3ZpbmcsIGluY3JlbWVudCBjb3VudCBieSB3aGljaCB0byBhZGp1c3Qgc3Vic2VxdWVudCBwYXJ0IGluZGljZXNcbiAgICBpZiAoY3VycmVudFJlbW92aW5nTm9kZSAhPT0gbnVsbCkge1xuICAgICAgcmVtb3ZlQ291bnQrKztcbiAgICB9XG4gICAgd2hpbGUgKHBhcnQgIT09IHVuZGVmaW5lZCAmJiBwYXJ0LmluZGV4ID09PSBub2RlSW5kZXgpIHtcbiAgICAgIC8vIElmIHBhcnQgaXMgaW4gYSByZW1vdmVkIG5vZGUgZGVhY3RpdmF0ZSBpdCBieSBzZXR0aW5nIGluZGV4IHRvIC0xIG9yXG4gICAgICAvLyBhZGp1c3QgdGhlIGluZGV4IGFzIG5lZWRlZC5cbiAgICAgIHBhcnQuaW5kZXggPSBjdXJyZW50UmVtb3ZpbmdOb2RlICE9PSBudWxsID8gLTEgOiBwYXJ0LmluZGV4IC0gcmVtb3ZlQ291bnQ7XG4gICAgICBwYXJ0ID0gcGFydHNbKytwYXJ0SW5kZXhdO1xuICAgIH1cbiAgfVxuICBub2Rlc1RvUmVtb3ZlSW5UZW1wbGF0ZS5mb3JFYWNoKChuKSA9PiBuLnBhcmVudE5vZGUhLnJlbW92ZUNoaWxkKG4pKTtcbn1cblxuY29uc3QgY291bnROb2RlcyA9IChub2RlOiBOb2RlKSA9PiB7XG4gIGxldCBjb3VudCA9IDE7XG4gIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoXG4gICAgbm9kZSxcbiAgICB3YWxrZXJOb2RlRmlsdGVyLFxuICAgIG51bGwgYXMgYW55LFxuICAgIGZhbHNlKTtcbiAgd2hpbGUgKHdhbGtlci5uZXh0Tm9kZSgpKSB7XG4gICAgY291bnQrKztcbiAgfVxuICByZXR1cm4gY291bnQ7XG59O1xuXG5jb25zdCBuZXh0QWN0aXZlSW5kZXhJblRlbXBsYXRlUGFydHMgPSAocGFydHM6IFRlbXBsYXRlUGFydFtdLCBzdGFydEluZGV4OiBudW1iZXIgPSAtMSkgPT4ge1xuICBmb3IgKGxldCBpID0gc3RhcnRJbmRleCArIDE7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHBhcnQgPSBwYXJ0c1tpXTtcbiAgICBpZiAoaXNUZW1wbGF0ZVBhcnRBY3RpdmUocGFydCkpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59O1xuXG4vKipcbiAqIEluc2VydHMgdGhlIGdpdmVuIG5vZGUgaW50byB0aGUgVGVtcGxhdGUsIG9wdGlvbmFsbHkgYmVmb3JlIHRoZSBnaXZlblxuICogcmVmTm9kZS4gSW4gYWRkaXRpb24gdG8gaW5zZXJ0aW5nIHRoZSBub2RlIGludG8gdGhlIFRlbXBsYXRlLCB0aGUgVGVtcGxhdGVcbiAqIHBhcnQgaW5kaWNlcyBhcmUgdXBkYXRlZCB0byBtYXRjaCB0aGUgbXV0YXRlZCBUZW1wbGF0ZSBET00uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnROb2RlSW50b1RlbXBsYXRlKFxuICAgIHRlbXBsYXRlOiBUZW1wbGF0ZSwgbm9kZTogTm9kZSwgcmVmTm9kZTogTm9kZXxudWxsID0gbnVsbCkge1xuICBjb25zdCB7ZWxlbWVudDoge2NvbnRlbnR9LCBwYXJ0c30gPSB0ZW1wbGF0ZTtcbiAgLy8gSWYgdGhlcmUncyBubyByZWZOb2RlLCB0aGVuIHB1dCBub2RlIGF0IGVuZCBvZiB0ZW1wbGF0ZS5cbiAgLy8gTm8gcGFydCBpbmRpY2VzIG5lZWQgdG8gYmUgc2hpZnRlZCBpbiB0aGlzIGNhc2UuXG4gIGlmIChyZWZOb2RlID09PSBudWxsIHx8IHJlZk5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoXG4gICAgICBjb250ZW50LFxuICAgICAgd2Fsa2VyTm9kZUZpbHRlcixcbiAgICAgIG51bGwgYXMgYW55LFxuICAgICAgZmFsc2UpO1xuICBsZXQgcGFydEluZGV4ID0gbmV4dEFjdGl2ZUluZGV4SW5UZW1wbGF0ZVBhcnRzKHBhcnRzKTtcbiAgbGV0IGluc2VydENvdW50ID0gMDtcbiAgbGV0IHdhbGtlckluZGV4ID0gLTE7XG4gIHdoaWxlICh3YWxrZXIubmV4dE5vZGUoKSkge1xuICAgIHdhbGtlckluZGV4Kys7XG4gICAgY29uc3Qgd2Fsa2VyTm9kZSA9IHdhbGtlci5jdXJyZW50Tm9kZSBhcyBFbGVtZW50O1xuICAgIGlmICh3YWxrZXJOb2RlID09PSByZWZOb2RlKSB7XG4gICAgICByZWZOb2RlLnBhcmVudE5vZGUhLmluc2VydEJlZm9yZShub2RlLCByZWZOb2RlKTtcbiAgICAgIGluc2VydENvdW50ID0gY291bnROb2Rlcyhub2RlKTtcbiAgICB9XG4gICAgd2hpbGUgKHBhcnRJbmRleCAhPT0gLTEgJiYgcGFydHNbcGFydEluZGV4XS5pbmRleCA9PT0gd2Fsa2VySW5kZXgpIHtcbiAgICAgIC8vIElmIHdlJ3ZlIGluc2VydGVkIHRoZSBub2RlLCBzaW1wbHkgYWRqdXN0IGFsbCBzdWJzZXF1ZW50IHBhcnRzXG4gICAgICBpZiAoaW5zZXJ0Q291bnQgPiAwKSB7XG4gICAgICAgIHdoaWxlIChwYXJ0SW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgcGFydHNbcGFydEluZGV4XS5pbmRleCArPSBpbnNlcnRDb3VudDtcbiAgICAgICAgICBwYXJ0SW5kZXggPSBuZXh0QWN0aXZlSW5kZXhJblRlbXBsYXRlUGFydHMocGFydHMsIHBhcnRJbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcGFydEluZGV4ID0gbmV4dEFjdGl2ZUluZGV4SW5UZW1wbGF0ZVBhcnRzKHBhcnRzLCBwYXJ0SW5kZXgpO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG5pbXBvcnQge2RpcmVjdGl2ZSwgRGlyZWN0aXZlRm4sIE5vZGVQYXJ0LCByZW1vdmVOb2RlcywgcmVwYXJlbnROb2Rlc30gZnJvbSAnLi4vbGl0LWh0bWwuanMnO1xuXG5leHBvcnQgdHlwZSBLZXlGbjxUPiA9IChpdGVtOiBUKSA9PiBhbnk7XG5leHBvcnQgdHlwZSBJdGVtVGVtcGxhdGU8VD4gPSAoaXRlbTogVCwgaW5kZXg6IG51bWJlcikgPT4gYW55O1xuXG5jb25zdCBrZXlNYXBDYWNoZSA9IG5ldyBXZWFrTWFwPE5vZGVQYXJ0LCBNYXA8YW55LCBOb2RlUGFydD4+KCk7XG5cbmZ1bmN0aW9uIGNsZWFuTWFwKHBhcnQ6IE5vZGVQYXJ0LCBrZXk6IGFueSwgbWFwOiBNYXA8YW55LCBOb2RlUGFydD4pIHtcbiAgaWYgKCFwYXJ0LnN0YXJ0Tm9kZS5wYXJlbnROb2RlKSB7XG4gICAgbWFwLmRlbGV0ZShrZXkpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBlYXQ8VD4oXG4gICAgaXRlbXM6IFRbXSwga2V5Rm46IEtleUZuPFQ+LCB0ZW1wbGF0ZTogSXRlbVRlbXBsYXRlPFQ+KTogRGlyZWN0aXZlRm48Tm9kZVBhcnQ+O1xuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdDxUPihpdGVtczogVFtdLCB0ZW1wbGF0ZTogSXRlbVRlbXBsYXRlPFQ+KTogRGlyZWN0aXZlRm48Tm9kZVBhcnQ+O1xuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdDxUPihcbiAgICBpdGVtczogSXRlcmFibGU8VD4sXG4gICAga2V5Rm5PclRlbXBsYXRlOiBLZXlGbjxUPnwgSXRlbVRlbXBsYXRlPFQ+LFxuICAgIHRlbXBsYXRlPzogSXRlbVRlbXBsYXRlPFQ+KTogRGlyZWN0aXZlRm48Tm9kZVBhcnQ+IHtcbiAgbGV0IGtleUZuOiBLZXlGbjxUPjtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICB0ZW1wbGF0ZSA9IGtleUZuT3JUZW1wbGF0ZTtcbiAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG4gICAga2V5Rm4gPSBrZXlGbk9yVGVtcGxhdGUgYXMgS2V5Rm48VD47XG4gIH1cblxuICByZXR1cm4gZGlyZWN0aXZlKChwYXJ0OiBOb2RlUGFydCk6IHZvaWQgPT4ge1xuICAgIGxldCBrZXlNYXAgPSBrZXlNYXBDYWNoZS5nZXQocGFydCk7XG4gICAgaWYgKGtleU1hcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBrZXlNYXAgPSBuZXcgTWFwKCk7XG4gICAgICBrZXlNYXBDYWNoZS5zZXQocGFydCwga2V5TWFwKTtcbiAgICB9XG4gICAgY29uc3QgY29udGFpbmVyID0gcGFydC5zdGFydE5vZGUucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudCB8IFNoYWRvd1Jvb3QgfFxuICAgICAgICBEb2N1bWVudEZyYWdtZW50O1xuICAgIGxldCBpbmRleCA9IC0xO1xuICAgIGxldCBjdXJyZW50TWFya2VyID0gcGFydC5zdGFydE5vZGUubmV4dFNpYmxpbmchO1xuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICBsZXQgcmVzdWx0O1xuICAgICAgbGV0IGtleTtcbiAgICAgIHRyeSB7XG4gICAgICAgICsraW5kZXg7XG4gICAgICAgIHJlc3VsdCA9IHRlbXBsYXRlICEoaXRlbSwgaW5kZXgpO1xuICAgICAgICBrZXkgPSBrZXlGbiA/IGtleUZuKGl0ZW0pIDogaW5kZXg7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBUcnkgdG8gcmV1c2UgYSBwYXJ0XG4gICAgICBsZXQgaXRlbVBhcnQgPSBrZXlNYXAuZ2V0KGtleSk7XG4gICAgICBpZiAoaXRlbVBhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBtYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgICAgIGNvbnN0IGVuZE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUobWFya2VyLCBjdXJyZW50TWFya2VyKTtcbiAgICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShlbmROb2RlLCBjdXJyZW50TWFya2VyKTtcbiAgICAgICAgaXRlbVBhcnQgPSBuZXcgTm9kZVBhcnQocGFydC5pbnN0YW5jZSwgbWFya2VyLCBlbmROb2RlKTtcbiAgICAgICAgaWYgKGtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAga2V5TWFwLnNldChrZXksIGl0ZW1QYXJ0KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjdXJyZW50TWFya2VyICE9PSBpdGVtUGFydC5zdGFydE5vZGUpIHtcbiAgICAgICAgLy8gRXhpc3RpbmcgcGFydCBpbiB0aGUgd3JvbmcgcG9zaXRpb25cbiAgICAgICAgY29uc3QgZW5kID0gaXRlbVBhcnQuZW5kTm9kZS5uZXh0U2libGluZyE7XG4gICAgICAgIGlmIChjdXJyZW50TWFya2VyICE9PSBlbmQpIHtcbiAgICAgICAgICByZXBhcmVudE5vZGVzKGNvbnRhaW5lciwgaXRlbVBhcnQuc3RhcnROb2RlLCBlbmQsIGN1cnJlbnRNYXJrZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBlbHNlIHBhcnQgaXMgaW4gdGhlIGNvcnJlY3QgcG9zaXRpb24gYWxyZWFkeVxuICAgICAgICBjdXJyZW50TWFya2VyID0gaXRlbVBhcnQuZW5kTm9kZS5uZXh0U2libGluZyE7XG4gICAgICB9XG5cbiAgICAgIGl0ZW1QYXJ0LnNldFZhbHVlKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgLy8gQ2xlYW51cFxuICAgIGlmIChjdXJyZW50TWFya2VyICE9PSBwYXJ0LmVuZE5vZGUpIHtcbiAgICAgIHJlbW92ZU5vZGVzKGNvbnRhaW5lciwgY3VycmVudE1hcmtlciwgcGFydC5lbmROb2RlKTtcbiAgICAgIGtleU1hcC5mb3JFYWNoKGNsZWFuTWFwKTtcbiAgICB9XG4gIH0pO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG5pbXBvcnQge3JlbW92ZU5vZGVzLCBUZW1wbGF0ZSwgdGVtcGxhdGVDYWNoZXMsIFRlbXBsYXRlQ29udGFpbmVyLCBUZW1wbGF0ZUluc3RhbmNlLCBUZW1wbGF0ZVJlc3VsdH0gZnJvbSAnLi4vbGl0LWh0bWwuanMnO1xuXG5pbXBvcnQge2luc2VydE5vZGVJbnRvVGVtcGxhdGUsIHJlbW92ZU5vZGVzRnJvbVRlbXBsYXRlfSBmcm9tICcuL21vZGlmeS10ZW1wbGF0ZS5qcyc7XG5cbmV4cG9ydCB7aHRtbCwgc3ZnLCBUZW1wbGF0ZVJlc3VsdH0gZnJvbSAnLi4vbGl0LWh0bWwuanMnO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIFNoYWR5Q1NTOiBhbnk7XG4gIH1cbiAgY2xhc3MgU2hhZG93Um9vdCB7fVxufVxuXG4vLyBHZXQgYSBrZXkgdG8gbG9va3VwIGluIGB0ZW1wbGF0ZUNhY2hlc2AuXG5jb25zdCBnZXRUZW1wbGF0ZUNhY2hlS2V5ID0gKHR5cGU6IHN0cmluZywgc2NvcGVOYW1lOiBzdHJpbmcpID0+XG4gICAgYCR7dHlwZX0tLSR7c2NvcGVOYW1lfWA7XG5cbi8qKlxuICogVGVtcGxhdGUgZmFjdG9yeSB3aGljaCBzY29wZXMgdGVtcGxhdGUgRE9NIHVzaW5nIFNoYWR5Q1NTLlxuICogQHBhcmFtIHNjb3BlTmFtZSB7c3RyaW5nfVxuICovXG5jb25zdCBzaGFkeVRlbXBsYXRlRmFjdG9yeSA9IChzY29wZU5hbWU6IHN0cmluZykgPT5cbiAgICAocmVzdWx0OiBUZW1wbGF0ZVJlc3VsdCkgPT4ge1xuICAgICAgY29uc3QgY2FjaGVLZXkgPSBnZXRUZW1wbGF0ZUNhY2hlS2V5KHJlc3VsdC50eXBlLCBzY29wZU5hbWUpO1xuICAgICAgbGV0IHRlbXBsYXRlQ2FjaGUgPSB0ZW1wbGF0ZUNhY2hlcy5nZXQoY2FjaGVLZXkpO1xuICAgICAgaWYgKHRlbXBsYXRlQ2FjaGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0ZW1wbGF0ZUNhY2hlID0gbmV3IE1hcDxUZW1wbGF0ZVN0cmluZ3NBcnJheSwgVGVtcGxhdGU+KCk7XG4gICAgICAgIHRlbXBsYXRlQ2FjaGVzLnNldChjYWNoZUtleSwgdGVtcGxhdGVDYWNoZSk7XG4gICAgICB9XG4gICAgICBsZXQgdGVtcGxhdGUgPSB0ZW1wbGF0ZUNhY2hlLmdldChyZXN1bHQuc3RyaW5ncyk7XG4gICAgICBpZiAodGVtcGxhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gcmVzdWx0LmdldFRlbXBsYXRlRWxlbWVudCgpO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5TaGFkeUNTUyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB3aW5kb3cuU2hhZHlDU1MucHJlcGFyZVRlbXBsYXRlRG9tKGVsZW1lbnQsIHNjb3BlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGVtcGxhdGUgPSBuZXcgVGVtcGxhdGUocmVzdWx0LCBlbGVtZW50KTtcbiAgICAgICAgdGVtcGxhdGVDYWNoZS5zZXQocmVzdWx0LnN0cmluZ3MsIHRlbXBsYXRlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9O1xuXG5cbmNvbnN0IFRFTVBMQVRFX1RZUEVTID0gWydodG1sJywgJ3N2ZyddO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIHN0eWxlIGVsZW1lbnRzIGZyb20gVGVtcGxhdGVzIGZvciB0aGUgZ2l2ZW4gc2NvcGVOYW1lLlxuICovXG5mdW5jdGlvbiByZW1vdmVTdHlsZXNGcm9tTGl0VGVtcGxhdGVzKHNjb3BlTmFtZTogc3RyaW5nKSB7XG4gIFRFTVBMQVRFX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICBjb25zdCB0ZW1wbGF0ZXMgPSB0ZW1wbGF0ZUNhY2hlcy5nZXQoZ2V0VGVtcGxhdGVDYWNoZUtleSh0eXBlLCBzY29wZU5hbWUpKTtcbiAgICBpZiAodGVtcGxhdGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRlbXBsYXRlcy5mb3JFYWNoKCh0ZW1wbGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCB7ZWxlbWVudDoge2NvbnRlbnR9fSA9IHRlbXBsYXRlO1xuICAgICAgICBjb25zdCBzdHlsZXMgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N0eWxlJyk7XG4gICAgICAgIHJlbW92ZU5vZGVzRnJvbVRlbXBsYXRlKHRlbXBsYXRlLCBuZXcgU2V0KEFycmF5LmZyb20oc3R5bGVzKSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuY29uc3Qgc2hhZHlSZW5kZXJTZXQgPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuLyoqXG4gKiBGb3IgdGhlIGdpdmVuIHNjb3BlIG5hbWUsIGVuc3VyZXMgdGhhdCBTaGFkeUNTUyBzdHlsZSBzY29waW5nIGlzIHBlcmZvcm1lZC5cbiAqIFRoaXMgaXMgZG9uZSBqdXN0IG9uY2UgcGVyIHNjb3BlIG5hbWUgc28gdGhlIGZyYWdtZW50IGFuZCB0ZW1wbGF0ZSBjYW5ub3RcbiAqIGJlIG1vZGlmaWVkLlxuICogKDEpIGV4dHJhY3RzIHN0eWxlcyBmcm9tIHRoZSByZW5kZXJlZCBmcmFnbWVudCBhbmQgaGFuZHMgdGhlbSB0byBTaGFkeUNTU1xuICogdG8gYmUgc2NvcGVkIGFuZCBhcHBlbmRlZCB0byB0aGUgZG9jdW1lbnRcbiAqICgyKSByZW1vdmVzIHN0eWxlIGVsZW1lbnRzIGZyb20gYWxsIGxpdC1odG1sIFRlbXBsYXRlcyBmb3IgdGhpcyBzY29wZSBuYW1lLlxuICpcbiAqIE5vdGUsIDxzdHlsZT4gZWxlbWVudHMgY2FuIG9ubHkgYmUgcGxhY2VkIGludG8gdGVtcGxhdGVzIGZvciB0aGVcbiAqIGluaXRpYWwgcmVuZGVyaW5nIG9mIHRoZSBzY29wZS4gSWYgPHN0eWxlPiBlbGVtZW50cyBhcmUgaW5jbHVkZWQgaW4gdGVtcGxhdGVzXG4gKiBkeW5hbWljYWxseSByZW5kZXJlZCB0byB0aGUgc2NvcGUgKGFmdGVyIHRoZSBmaXJzdCBzY29wZSByZW5kZXIpLCB0aGV5IHdpbGxcbiAqIG5vdCBiZSBzY29wZWQgYW5kIHRoZSA8c3R5bGU+IHdpbGwgYmUgbGVmdCBpbiB0aGUgdGVtcGxhdGUgYW5kIHJlbmRlcmVkIG91dHB1dC5cbiAqL1xuY29uc3QgZW5zdXJlU3R5bGVzU2NvcGVkID1cbiAgICAoZnJhZ21lbnQ6IERvY3VtZW50RnJhZ21lbnQsIHRlbXBsYXRlOiBUZW1wbGF0ZSwgc2NvcGVOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIC8vIG9ubHkgc2NvcGUgZWxlbWVudCB0ZW1wbGF0ZSBvbmNlIHBlciBzY29wZSBuYW1lXG4gICAgICBpZiAoIXNoYWR5UmVuZGVyU2V0LmhhcyhzY29wZU5hbWUpKSB7XG4gICAgICAgIHNoYWR5UmVuZGVyU2V0LmFkZChzY29wZU5hbWUpO1xuICAgICAgICBjb25zdCBzdHlsZVRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICAgICAgQXJyYXkuZnJvbShmcmFnbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzdHlsZScpKS5mb3JFYWNoKChzOiBFbGVtZW50KSA9PiB7XG4gICAgICAgICAgc3R5bGVUZW1wbGF0ZS5jb250ZW50LmFwcGVuZENoaWxkKHMpO1xuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LlNoYWR5Q1NTLnByZXBhcmVUZW1wbGF0ZVN0eWxlcyhzdHlsZVRlbXBsYXRlLCBzY29wZU5hbWUpO1xuICAgICAgICAvLyBGaXggdGVtcGxhdGVzOiBub3RlIHRoZSBleHBlY3RhdGlvbiBoZXJlIGlzIHRoYXQgdGhlIGdpdmVuIGBmcmFnbWVudGBcbiAgICAgICAgLy8gaGFzIGJlZW4gZ2VuZXJhdGVkIGZyb20gdGhlIGdpdmVuIGB0ZW1wbGF0ZWAgd2hpY2ggY29udGFpbnNcbiAgICAgICAgLy8gdGhlIHNldCBvZiB0ZW1wbGF0ZXMgcmVuZGVyZWQgaW50byB0aGlzIHNjb3BlLlxuICAgICAgICAvLyBJdCBpcyBvbmx5IGZyb20gdGhpcyBzZXQgb2YgaW5pdGlhbCB0ZW1wbGF0ZXMgZnJvbSB3aGljaCBzdHlsZXNcbiAgICAgICAgLy8gd2lsbCBiZSBzY29wZWQgYW5kIHJlbW92ZWQuXG4gICAgICAgIHJlbW92ZVN0eWxlc0Zyb21MaXRUZW1wbGF0ZXMoc2NvcGVOYW1lKTtcbiAgICAgICAgLy8gQXBwbHlTaGltIGNhc2VcbiAgICAgICAgaWYgKHdpbmRvdy5TaGFkeUNTUy5uYXRpdmVTaGFkb3cpIHtcbiAgICAgICAgICBjb25zdCBzdHlsZSA9IHN0eWxlVGVtcGxhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZScpO1xuICAgICAgICAgIGlmIChzdHlsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gSW5zZXJ0IHN0eWxlIGludG8gcmVuZGVyZWQgZnJhZ21lbnRcbiAgICAgICAgICAgIGZyYWdtZW50Lmluc2VydEJlZm9yZShzdHlsZSwgZnJhZ21lbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAvLyBJbnNlcnQgaW50byBsaXQtdGVtcGxhdGUgKGZvciBzdWJzZXF1ZW50IHJlbmRlcnMpXG4gICAgICAgICAgICBpbnNlcnROb2RlSW50b1RlbXBsYXRlKFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlLFxuICAgICAgICAgICAgICAgIHN0eWxlLmNsb25lTm9kZSh0cnVlKSxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZS5lbGVtZW50LmNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuLy8gTk9URTogV2UncmUgY29weWluZyBjb2RlIGZyb20gbGl0LWh0bWwncyBgcmVuZGVyYCBtZXRob2QgaGVyZS5cbi8vIFdlJ3JlIGRvaW5nIHRoaXMgZXhwbGljaXRseSBiZWNhdXNlIHRoZSBBUEkgZm9yIHJlbmRlcmluZyB0ZW1wbGF0ZXMgaXMgbGlrZWx5XG4vLyB0byBjaGFuZ2UgaW4gdGhlIG5lYXIgdGVybS5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoXG4gICAgcmVzdWx0OiBUZW1wbGF0ZVJlc3VsdCxcbiAgICBjb250YWluZXI6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudCxcbiAgICBzY29wZU5hbWU6IHN0cmluZykge1xuICBjb25zdCB0ZW1wbGF0ZUZhY3RvcnkgPSBzaGFkeVRlbXBsYXRlRmFjdG9yeShzY29wZU5hbWUpO1xuICBjb25zdCB0ZW1wbGF0ZSA9IHRlbXBsYXRlRmFjdG9yeShyZXN1bHQpO1xuICBsZXQgaW5zdGFuY2UgPSAoY29udGFpbmVyIGFzIFRlbXBsYXRlQ29udGFpbmVyKS5fX3RlbXBsYXRlSW5zdGFuY2U7XG5cbiAgLy8gUmVwZWF0IHJlbmRlciwganVzdCBjYWxsIHVwZGF0ZSgpXG4gIGlmIChpbnN0YW5jZSAhPT0gdW5kZWZpbmVkICYmIGluc3RhbmNlLnRlbXBsYXRlID09PSB0ZW1wbGF0ZSAmJlxuICAgICAgaW5zdGFuY2UuX3BhcnRDYWxsYmFjayA9PT0gcmVzdWx0LnBhcnRDYWxsYmFjaykge1xuICAgIGluc3RhbmNlLnVwZGF0ZShyZXN1bHQudmFsdWVzKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGaXJzdCByZW5kZXIsIGNyZWF0ZSBhIG5ldyBUZW1wbGF0ZUluc3RhbmNlIGFuZCBhcHBlbmQgaXRcbiAgaW5zdGFuY2UgPVxuICAgICAgbmV3IFRlbXBsYXRlSW5zdGFuY2UodGVtcGxhdGUsIHJlc3VsdC5wYXJ0Q2FsbGJhY2ssIHRlbXBsYXRlRmFjdG9yeSk7XG4gIChjb250YWluZXIgYXMgVGVtcGxhdGVDb250YWluZXIpLl9fdGVtcGxhdGVJbnN0YW5jZSA9IGluc3RhbmNlO1xuXG4gIGNvbnN0IGZyYWdtZW50ID0gaW5zdGFuY2UuX2Nsb25lKCk7XG4gIGluc3RhbmNlLnVwZGF0ZShyZXN1bHQudmFsdWVzKTtcblxuICBjb25zdCBob3N0ID0gY29udGFpbmVyIGluc3RhbmNlb2YgU2hhZG93Um9vdCA/XG4gICAgICBjb250YWluZXIuaG9zdCA6XG4gICAgICB1bmRlZmluZWQ7XG5cbiAgLy8gSWYgdGhlcmUncyBhIHNoYWRvdyBob3N0LCBkbyBTaGFkeUNTUyBzY29waW5nLi4uXG4gIGlmIChob3N0ICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHdpbmRvdy5TaGFkeUNTUyA9PT0gJ29iamVjdCcpIHtcbiAgICBlbnN1cmVTdHlsZXNTY29wZWQoZnJhZ21lbnQsIHRlbXBsYXRlLCBzY29wZU5hbWUpO1xuICAgIHdpbmRvdy5TaGFkeUNTUy5zdHlsZUVsZW1lbnQoaG9zdCk7XG4gIH1cblxuICByZW1vdmVOb2Rlcyhjb250YWluZXIsIGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbn0iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbmltcG9ydCB7ZGlyZWN0aXZlLCBEaXJlY3RpdmVGbiwgTm9kZVBhcnR9IGZyb20gJy4uL2xpdC1odG1sLmpzJztcblxuLyoqXG4gKiBEaXNwbGF5IGBkZWZhdWx0Q29udGVudGAgdW50aWwgYHByb21pc2VgIHJlc29sdmVzLlxuICovXG5leHBvcnQgY29uc3QgdW50aWwgPSAocHJvbWlzZTogUHJvbWlzZTxhbnk+LCBkZWZhdWx0Q29udGVudDogYW55KTogRGlyZWN0aXZlRm48Tm9kZVBhcnQ+ID0+XG4gICAgZGlyZWN0aXZlKChwYXJ0OiBOb2RlUGFydCk6IHZvaWQgPT4ge1xuICAgICAgcGFydC5zZXRWYWx1ZShkZWZhdWx0Q29udGVudCk7XG4gICAgICBwYXJ0LnNldFZhbHVlKHByb21pc2UpO1xuICAgIH0pO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vLyBUaGUgZmlyc3QgYXJndW1lbnQgdG8gSlMgdGVtcGxhdGUgdGFncyByZXRhaW4gaWRlbnRpdHkgYWNyb3NzIG11bHRpcGxlXG4vLyBjYWxscyB0byBhIHRhZyBmb3IgdGhlIHNhbWUgbGl0ZXJhbCwgc28gd2UgY2FuIGNhY2hlIHdvcmsgZG9uZSBwZXIgbGl0ZXJhbFxuLy8gaW4gYSBNYXAuXG5leHBvcnQgY29uc3QgdGVtcGxhdGVDYWNoZXMgPVxuICAgIG5ldyBNYXA8c3RyaW5nLCBNYXA8VGVtcGxhdGVTdHJpbmdzQXJyYXksIFRlbXBsYXRlPj4oKTtcblxuLyoqXG4gKiBJbnRlcnByZXRzIGEgdGVtcGxhdGUgbGl0ZXJhbCBhcyBhbiBIVE1MIHRlbXBsYXRlIHRoYXQgY2FuIGVmZmljaWVudGx5XG4gKiByZW5kZXIgdG8gYW5kIHVwZGF0ZSBhIGNvbnRhaW5lci5cbiAqL1xuZXhwb3J0IGNvbnN0IGh0bWwgPSAoc3RyaW5nczogVGVtcGxhdGVTdHJpbmdzQXJyYXksIC4uLnZhbHVlczogYW55W10pID0+XG4gICAgbmV3IFRlbXBsYXRlUmVzdWx0KHN0cmluZ3MsIHZhbHVlcywgJ2h0bWwnKTtcblxuLyoqXG4gKiBJbnRlcnByZXRzIGEgdGVtcGxhdGUgbGl0ZXJhbCBhcyBhbiBTVkcgdGVtcGxhdGUgdGhhdCBjYW4gZWZmaWNpZW50bHlcbiAqIHJlbmRlciB0byBhbmQgdXBkYXRlIGEgY29udGFpbmVyLlxuICovXG5leHBvcnQgY29uc3Qgc3ZnID0gKHN0cmluZ3M6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi52YWx1ZXM6IGFueVtdKSA9PlxuICAgIG5ldyBTVkdUZW1wbGF0ZVJlc3VsdChzdHJpbmdzLCB2YWx1ZXMsICdzdmcnKTtcblxuLyoqXG4gKiBUaGUgcmV0dXJuIHR5cGUgb2YgYGh0bWxgLCB3aGljaCBob2xkcyBhIFRlbXBsYXRlIGFuZCB0aGUgdmFsdWVzIGZyb21cbiAqIGludGVycG9sYXRlZCBleHByZXNzaW9ucy5cbiAqL1xuZXhwb3J0IGNsYXNzIFRlbXBsYXRlUmVzdWx0IHtcbiAgc3RyaW5nczogVGVtcGxhdGVTdHJpbmdzQXJyYXk7XG4gIHZhbHVlczogYW55W107XG4gIHR5cGU6IHN0cmluZztcbiAgcGFydENhbGxiYWNrOiBQYXJ0Q2FsbGJhY2s7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBzdHJpbmdzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgdmFsdWVzOiBhbnlbXSwgdHlwZTogc3RyaW5nLFxuICAgICAgcGFydENhbGxiYWNrOiBQYXJ0Q2FsbGJhY2sgPSBkZWZhdWx0UGFydENhbGxiYWNrKSB7XG4gICAgdGhpcy5zdHJpbmdzID0gc3RyaW5ncztcbiAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMucGFydENhbGxiYWNrID0gcGFydENhbGxiYWNrO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgb2YgSFRNTCB1c2VkIHRvIGNyZWF0ZSBhIDx0ZW1wbGF0ZT4gZWxlbWVudC5cbiAgICovXG4gIGdldEhUTUwoKTogc3RyaW5nIHtcbiAgICBjb25zdCBsID0gdGhpcy5zdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICBsZXQgaXNUZXh0QmluZGluZyA9IHRydWU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IHMgPSB0aGlzLnN0cmluZ3NbaV07XG4gICAgICBodG1sICs9IHM7XG4gICAgICAvLyBXZSdyZSBpbiBhIHRleHQgcG9zaXRpb24gaWYgdGhlIHByZXZpb3VzIHN0cmluZyBjbG9zZWQgaXRzIHRhZ3MuXG4gICAgICAvLyBJZiBpdCBkb2Vzbid0IGhhdmUgYW55IHRhZ3MsIHRoZW4gd2UgdXNlIHRoZSBwcmV2aW91cyB0ZXh0IHBvc2l0aW9uXG4gICAgICAvLyBzdGF0ZS5cbiAgICAgIGNvbnN0IGNsb3NpbmcgPSBmaW5kVGFnQ2xvc2Uocyk7XG4gICAgICBpc1RleHRCaW5kaW5nID0gY2xvc2luZyA+IC0xID8gY2xvc2luZyA8IHMubGVuZ3RoIDogaXNUZXh0QmluZGluZztcbiAgICAgIGh0bWwgKz0gaXNUZXh0QmluZGluZyA/IG5vZGVNYXJrZXIgOiBtYXJrZXI7XG4gICAgfVxuICAgIGh0bWwgKz0gdGhpcy5zdHJpbmdzW2xdO1xuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0VGVtcGxhdGVFbGVtZW50KCk6IEhUTUxUZW1wbGF0ZUVsZW1lbnQge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSB0aGlzLmdldEhUTUwoKTtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cbn1cblxuLyoqXG4gKiBBIFRlbXBsYXRlUmVzdWx0IGZvciBTVkcgZnJhZ21lbnRzLlxuICpcbiAqIFRoaXMgY2xhc3Mgd3JhcHMgSFRNbCBpbiBhbiA8c3ZnPiB0YWcgaW4gb3JkZXIgdG8gcGFyc2UgaXRzIGNvbnRlbnRzIGluIHRoZVxuICogU1ZHIG5hbWVzcGFjZSwgdGhlbiBtb2RpZmllcyB0aGUgdGVtcGxhdGUgdG8gcmVtb3ZlIHRoZSA8c3ZnPiB0YWcgc28gdGhhdFxuICogY2xvbmVzIG9ubHkgY29udGFpbmVyIHRoZSBvcmlnaW5hbCBmcmFnbWVudC5cbiAqL1xuZXhwb3J0IGNsYXNzIFNWR1RlbXBsYXRlUmVzdWx0IGV4dGVuZHMgVGVtcGxhdGVSZXN1bHQge1xuICBnZXRIVE1MKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGA8c3ZnPiR7c3VwZXIuZ2V0SFRNTCgpfTwvc3ZnPmA7XG4gIH1cbiAgZ2V0VGVtcGxhdGVFbGVtZW50KCk6IEhUTUxUZW1wbGF0ZUVsZW1lbnQge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gc3VwZXIuZ2V0VGVtcGxhdGVFbGVtZW50KCk7XG4gICAgY29uc3QgY29udGVudCA9IHRlbXBsYXRlLmNvbnRlbnQ7XG4gICAgY29uc3Qgc3ZnRWxlbWVudCA9IGNvbnRlbnQuZmlyc3RDaGlsZCE7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChzdmdFbGVtZW50KTtcbiAgICByZXBhcmVudE5vZGVzKGNvbnRlbnQsIHN2Z0VsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG59XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0eXBlIHRoYXQgY3JlYXRlcyBhIFRlbXBsYXRlIGZyb20gYSBUZW1wbGF0ZVJlc3VsdC5cbiAqXG4gKiBUaGlzIGlzIGEgaG9vayBpbnRvIHRoZSB0ZW1wbGF0ZS1jcmVhdGlvbiBwcm9jZXNzIGZvciByZW5kZXJpbmcgdGhhdFxuICogcmVxdWlyZXMgc29tZSBtb2RpZmljYXRpb24gb2YgdGVtcGxhdGVzIGJlZm9yZSB0aGV5J3JlIHVzZWQsIGxpa2UgU2hhZHlDU1MsXG4gKiB3aGljaCBtdXN0IGFkZCBjbGFzc2VzIHRvIGVsZW1lbnRzIGFuZCByZW1vdmUgc3R5bGVzLlxuICpcbiAqIFRlbXBsYXRlcyBzaG91bGQgYmUgY2FjaGVkIGFzIGFnZ3Jlc3NpdmVseSBhcyBwb3NzaWJsZSwgc28gdGhhdCBtYW55XG4gKiBUZW1wbGF0ZVJlc3VsdHMgcHJvZHVjZWQgZnJvbSB0aGUgc2FtZSBleHByZXNzaW9uIG9ubHkgZG8gdGhlIHdvcmsgb2ZcbiAqIGNyZWF0aW5nIHRoZSBUZW1wbGF0ZSB0aGUgZmlyc3QgdGltZS5cbiAqXG4gKiBUZW1wbGF0ZXMgYXJlIHVzdWFsbHkgY2FjaGVkIGJ5IFRlbXBsYXRlUmVzdWx0LnN0cmluZ3MgYW5kXG4gKiBUZW1wbGF0ZVJlc3VsdC50eXBlLCBidXQgbWF5IGJlIGNhY2hlZCBieSBvdGhlciBrZXlzIGlmIHRoaXMgZnVuY3Rpb25cbiAqIG1vZGlmaWVzIHRoZSB0ZW1wbGF0ZS5cbiAqXG4gKiBOb3RlIHRoYXQgY3VycmVudGx5IFRlbXBsYXRlRmFjdG9yaWVzIG11c3Qgbm90IGFkZCwgcmVtb3ZlLCBvciByZW9yZGVyXG4gKiBleHByZXNzaW9ucywgYmVjYXVzZSB0aGVyZSBpcyBubyB3YXkgdG8gZGVzY3JpYmUgc3VjaCBhIG1vZGlmaWNhdGlvblxuICogdG8gcmVuZGVyKCkgc28gdGhhdCB2YWx1ZXMgYXJlIGludGVycG9sYXRlZCB0byB0aGUgY29ycmVjdCBwbGFjZSBpbiB0aGVcbiAqIHRlbXBsYXRlIGluc3RhbmNlcy5cbiAqL1xuZXhwb3J0IHR5cGUgVGVtcGxhdGVGYWN0b3J5ID0gKHJlc3VsdDogVGVtcGxhdGVSZXN1bHQpID0+IFRlbXBsYXRlO1xuXG4vKipcbiAqIFRoZSBkZWZhdWx0IFRlbXBsYXRlRmFjdG9yeSB3aGljaCBjYWNoZXMgVGVtcGxhdGVzIGtleWVkIG9uXG4gKiByZXN1bHQudHlwZSBhbmQgcmVzdWx0LnN0cmluZ3MuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0VGVtcGxhdGVGYWN0b3J5KHJlc3VsdDogVGVtcGxhdGVSZXN1bHQpIHtcbiAgbGV0IHRlbXBsYXRlQ2FjaGUgPSB0ZW1wbGF0ZUNhY2hlcy5nZXQocmVzdWx0LnR5cGUpO1xuICBpZiAodGVtcGxhdGVDYWNoZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGVtcGxhdGVDYWNoZSA9IG5ldyBNYXA8VGVtcGxhdGVTdHJpbmdzQXJyYXksIFRlbXBsYXRlPigpO1xuICAgIHRlbXBsYXRlQ2FjaGVzLnNldChyZXN1bHQudHlwZSwgdGVtcGxhdGVDYWNoZSk7XG4gIH1cbiAgbGV0IHRlbXBsYXRlID0gdGVtcGxhdGVDYWNoZS5nZXQocmVzdWx0LnN0cmluZ3MpO1xuICBpZiAodGVtcGxhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKHJlc3VsdCwgcmVzdWx0LmdldFRlbXBsYXRlRWxlbWVudCgpKTtcbiAgICB0ZW1wbGF0ZUNhY2hlLnNldChyZXN1bHQuc3RyaW5ncywgdGVtcGxhdGUpO1xuICB9XG4gIHJldHVybiB0ZW1wbGF0ZTtcbn1cblxuZXhwb3J0IHR5cGUgVGVtcGxhdGVDb250YWluZXIgPSAoRWxlbWVudHxEb2N1bWVudEZyYWdtZW50KSZ7XG4gIF9fdGVtcGxhdGVJbnN0YW5jZT86IFRlbXBsYXRlSW5zdGFuY2U7XG59O1xuXG4vKipcbiAqIFJlbmRlcnMgYSB0ZW1wbGF0ZSB0byBhIGNvbnRhaW5lci5cbiAqXG4gKiBUbyB1cGRhdGUgYSBjb250YWluZXIgd2l0aCBuZXcgdmFsdWVzLCByZWV2YWx1YXRlIHRoZSB0ZW1wbGF0ZSBsaXRlcmFsIGFuZFxuICogY2FsbCBgcmVuZGVyYCB3aXRoIHRoZSBuZXcgcmVzdWx0LlxuICpcbiAqIEBwYXJhbSByZXN1bHQgYSBUZW1wbGF0ZVJlc3VsdCBjcmVhdGVkIGJ5IGV2YWx1YXRpbmcgYSB0ZW1wbGF0ZSB0YWcgbGlrZVxuICogICAgIGBodG1sYCBvciBgc3ZnYC5cbiAqIEBwYXJhbSBjb250YWluZXIgQSBET00gcGFyZW50IHRvIHJlbmRlciB0by4gVGhlIGVudGlyZSBjb250ZW50cyBhcmUgZWl0aGVyXG4gKiAgICAgcmVwbGFjZWQsIG9yIGVmZmljaWVudGx5IHVwZGF0ZWQgaWYgdGhlIHNhbWUgcmVzdWx0IHR5cGUgd2FzIHByZXZpb3VzXG4gKiAgICAgcmVuZGVyZWQgdGhlcmUuXG4gKiBAcGFyYW0gdGVtcGxhdGVGYWN0b3J5IGEgZnVuY3Rpb24gdG8gY3JlYXRlIGEgVGVtcGxhdGUgb3IgcmV0cmVpdmUgb25lIGZyb21cbiAqICAgICBjYWNoZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihcbiAgICByZXN1bHQ6IFRlbXBsYXRlUmVzdWx0LFxuICAgIGNvbnRhaW5lcjogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50LFxuICAgIHRlbXBsYXRlRmFjdG9yeTogVGVtcGxhdGVGYWN0b3J5ID0gZGVmYXVsdFRlbXBsYXRlRmFjdG9yeVxuICApIHtcbiAgY29uc3QgdGVtcGxhdGUgPSB0ZW1wbGF0ZUZhY3RvcnkocmVzdWx0KTtcbiAgbGV0IGluc3RhbmNlID0gKGNvbnRhaW5lciBhcyBUZW1wbGF0ZUNvbnRhaW5lcikuX190ZW1wbGF0ZUluc3RhbmNlO1xuXG4gIC8vIFJlcGVhdCByZW5kZXIsIGp1c3QgY2FsbCB1cGRhdGUoKVxuICBpZiAoaW5zdGFuY2UgIT09IHVuZGVmaW5lZCAmJiBpbnN0YW5jZS50ZW1wbGF0ZSA9PT0gdGVtcGxhdGUgJiZcbiAgICAgIGluc3RhbmNlLl9wYXJ0Q2FsbGJhY2sgPT09IHJlc3VsdC5wYXJ0Q2FsbGJhY2spIHtcbiAgICBpbnN0YW5jZS51cGRhdGUocmVzdWx0LnZhbHVlcyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRmlyc3QgcmVuZGVyLCBjcmVhdGUgYSBuZXcgVGVtcGxhdGVJbnN0YW5jZSBhbmQgYXBwZW5kIGl0XG4gIGluc3RhbmNlID1cbiAgICAgIG5ldyBUZW1wbGF0ZUluc3RhbmNlKHRlbXBsYXRlLCByZXN1bHQucGFydENhbGxiYWNrLCB0ZW1wbGF0ZUZhY3RvcnkpO1xuICAoY29udGFpbmVyIGFzIFRlbXBsYXRlQ29udGFpbmVyKS5fX3RlbXBsYXRlSW5zdGFuY2UgPSBpbnN0YW5jZTtcblxuICBjb25zdCBmcmFnbWVudCA9IGluc3RhbmNlLl9jbG9uZSgpO1xuICBpbnN0YW5jZS51cGRhdGUocmVzdWx0LnZhbHVlcyk7XG5cbiAgcmVtb3ZlTm9kZXMoY29udGFpbmVyLCBjb250YWluZXIuZmlyc3RDaGlsZCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG59XG5cbi8qKlxuICogQW4gZXhwcmVzc2lvbiBtYXJrZXIgd2l0aCBlbWJlZGRlZCB1bmlxdWUga2V5IHRvIGF2b2lkIGNvbGxpc2lvbiB3aXRoXG4gKiBwb3NzaWJsZSB0ZXh0IGluIHRlbXBsYXRlcy5cbiAqL1xuY29uc3QgbWFya2VyID0gYHt7bGl0LSR7U3RyaW5nKE1hdGgucmFuZG9tKCkpLnNsaWNlKDIpfX19YDtcblxuLyoqXG4gKiBBbiBleHByZXNzaW9uIG1hcmtlciB1c2VkIHRleHQtcG9zaXRpb25zLCBub3QgYXR0cmlidXRlIHBvc2l0aW9ucyxcbiAqIGluIHRlbXBsYXRlLlxuICovXG5jb25zdCBub2RlTWFya2VyID0gYDwhLS0ke21hcmtlcn0tLT5gO1xuXG5jb25zdCBtYXJrZXJSZWdleCA9IG5ldyBSZWdFeHAoYCR7bWFya2VyfXwke25vZGVNYXJrZXJ9YCk7XG5cbi8qKlxuICogVGhpcyByZWdleCBleHRyYWN0cyB0aGUgYXR0cmlidXRlIG5hbWUgcHJlY2VkaW5nIGFuIGF0dHJpYnV0ZS1wb3NpdGlvblxuICogZXhwcmVzc2lvbi4gSXQgZG9lcyB0aGlzIGJ5IG1hdGNoaW5nIHRoZSBzeW50YXggYWxsb3dlZCBmb3IgYXR0cmlidXRlc1xuICogYWdhaW5zdCB0aGUgc3RyaW5nIGxpdGVyYWwgZGlyZWN0bHkgcHJlY2VkaW5nIHRoZSBleHByZXNzaW9uLCBhc3N1bWluZyB0aGF0XG4gKiB0aGUgZXhwcmVzc2lvbiBpcyBpbiBhbiBhdHRyaWJ1dGUtdmFsdWUgcG9zaXRpb24uXG4gKlxuICogU2VlIGF0dHJpYnV0ZXMgaW4gdGhlIEhUTUwgc3BlYzpcbiAqIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9odG1sNS9zeW50YXguaHRtbCNhdHRyaWJ1dGVzLTBcbiAqXG4gKiBcIlxcMC1cXHgxRlxceDdGLVxceDlGXCIgYXJlIFVuaWNvZGUgY29udHJvbCBjaGFyYWN0ZXJzXG4gKlxuICogXCIgXFx4MDlcXHgwYVxceDBjXFx4MGRcIiBhcmUgSFRNTCBzcGFjZSBjaGFyYWN0ZXJzOlxuICogaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw1L2luZnJhc3RydWN0dXJlLmh0bWwjc3BhY2UtY2hhcmFjdGVyXG4gKlxuICogU28gYW4gYXR0cmlidXRlIGlzOlxuICogICogVGhlIG5hbWU6IGFueSBjaGFyYWN0ZXIgZXhjZXB0IGEgY29udHJvbCBjaGFyYWN0ZXIsIHNwYWNlIGNoYXJhY3RlciwgKCcpLFxuICogICAgKFwiKSwgXCI+XCIsIFwiPVwiLCBvciBcIi9cIlxuICogICogRm9sbG93ZWQgYnkgemVybyBvciBtb3JlIHNwYWNlIGNoYXJhY3RlcnNcbiAqICAqIEZvbGxvd2VkIGJ5IFwiPVwiXG4gKiAgKiBGb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgc3BhY2UgY2hhcmFjdGVyc1xuICogICogRm9sbG93ZWQgYnk6XG4gKiAgICAqIEFueSBjaGFyYWN0ZXIgZXhjZXB0IHNwYWNlLCAoJyksIChcIiksIFwiPFwiLCBcIj5cIiwgXCI9XCIsIChgKSwgb3JcbiAqICAgICogKFwiKSB0aGVuIGFueSBub24tKFwiKSwgb3JcbiAqICAgICogKCcpIHRoZW4gYW55IG5vbi0oJylcbiAqL1xuY29uc3QgbGFzdEF0dHJpYnV0ZU5hbWVSZWdleCA9XG4gICAgL1sgXFx4MDlcXHgwYVxceDBjXFx4MGRdKFteXFwwLVxceDFGXFx4N0YtXFx4OUYgXFx4MDlcXHgwYVxceDBjXFx4MGRcIic+PS9dKylbIFxceDA5XFx4MGFcXHgwY1xceDBkXSo9WyBcXHgwOVxceDBhXFx4MGNcXHgwZF0qKD86W14gXFx4MDlcXHgwYVxceDBjXFx4MGRcIidgPD49XSp8XCJbXlwiXSp8J1teJ10qKSQvO1xuXG4vKipcbiAqIEZpbmRzIHRoZSBjbG9zaW5nIGluZGV4IG9mIHRoZSBsYXN0IGNsb3NlZCBIVE1MIHRhZy5cbiAqIFRoaXMgaGFzIDMgcG9zc2libGUgcmV0dXJuIHZhbHVlczpcbiAqICAgLSBgLTFgLCBtZWFuaW5nIHRoZXJlIGlzIG5vIHRhZyBpbiBzdHIuXG4gKiAgIC0gYHN0cmluZy5sZW5ndGhgLCBtZWFuaW5nIHRoZSBsYXN0IG9wZW5lZCB0YWcgaXMgdW5jbG9zZWQuXG4gKiAgIC0gU29tZSBwb3NpdGl2ZSBudW1iZXIgPCBzdHIubGVuZ3RoLCBtZWFuaW5nIHRoZSBpbmRleCBvZiB0aGUgY2xvc2luZyAnPicuXG4gKi9cbmZ1bmN0aW9uIGZpbmRUYWdDbG9zZShzdHI6IHN0cmluZyk6IG51bWJlciB7XG4gIGNvbnN0IGNsb3NlID0gc3RyLmxhc3RJbmRleE9mKCc+Jyk7XG4gIGNvbnN0IG9wZW4gPSBzdHIuaW5kZXhPZignPCcsIGNsb3NlICsgMSk7XG4gIHJldHVybiBvcGVuID4gLTEgPyBzdHIubGVuZ3RoIDogY2xvc2U7XG59XG5cbi8qKlxuICogQSBwbGFjZWhvbGRlciBmb3IgYSBkeW5hbWljIGV4cHJlc3Npb24gaW4gYW4gSFRNTCB0ZW1wbGF0ZS5cbiAqXG4gKiBUaGVyZSBhcmUgdHdvIGJ1aWx0LWluIHBhcnQgdHlwZXM6IEF0dHJpYnV0ZVBhcnQgYW5kIE5vZGVQYXJ0LiBOb2RlUGFydHNcbiAqIGFsd2F5cyByZXByZXNlbnQgYSBzaW5nbGUgZHluYW1pYyBleHByZXNzaW9uLCB3aGlsZSBBdHRyaWJ1dGVQYXJ0cyBtYXlcbiAqIHJlcHJlc2VudCBhcyBtYW55IGV4cHJlc3Npb25zIGFyZSBjb250YWluZWQgaW4gdGhlIGF0dHJpYnV0ZS5cbiAqXG4gKiBBIFRlbXBsYXRlJ3MgcGFydHMgYXJlIG11dGFibGUsIHNvIHBhcnRzIGNhbiBiZSByZXBsYWNlZCBvciBtb2RpZmllZFxuICogKHBvc3NpYmx5IHRvIGltcGxlbWVudCBkaWZmZXJlbnQgdGVtcGxhdGUgc2VtYW50aWNzKS4gVGhlIGNvbnRyYWN0IGlzIHRoYXRcbiAqIHBhcnRzIGNhbiBvbmx5IGJlIHJlcGxhY2VkLCBub3QgcmVtb3ZlZCwgYWRkZWQgb3IgcmVvcmRlcmVkLCBhbmQgcGFydHMgbXVzdFxuICogYWx3YXlzIGNvbnN1bWUgdGhlIGNvcnJlY3QgbnVtYmVyIG9mIHZhbHVlcyBpbiB0aGVpciBgdXBkYXRlKClgIG1ldGhvZC5cbiAqXG4gKiBUT0RPKGp1c3RpbmZhZ25hbmkpOiBUaGF0IHJlcXVpcmVtZW50IGlzIGEgbGl0dGxlIGZyYWdpbGUuIEFcbiAqIFRlbXBsYXRlSW5zdGFuY2UgY291bGQgaW5zdGVhZCBiZSBtb3JlIGNhcmVmdWwgYWJvdXQgd2hpY2ggdmFsdWVzIGl0IGdpdmVzXG4gKiB0byBQYXJ0LnVwZGF0ZSgpLlxuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVQYXJ0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgdHlwZTogc3RyaW5nLCBwdWJsaWMgaW5kZXg6IG51bWJlciwgcHVibGljIG5hbWU/OiBzdHJpbmcsXG4gICAgICBwdWJsaWMgcmF3TmFtZT86IHN0cmluZywgcHVibGljIHN0cmluZ3M/OiBzdHJpbmdbXSkge1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBpc1RlbXBsYXRlUGFydEFjdGl2ZSA9IChwYXJ0OiBUZW1wbGF0ZVBhcnQpID0+IHBhcnQuaW5kZXggIT09IC0xO1xuXG4vKipcbiAqIEFuIHVwZGF0ZWFibGUgVGVtcGxhdGUgdGhhdCB0cmFja3MgdGhlIGxvY2F0aW9uIG9mIGR5bmFtaWMgcGFydHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZSB7XG4gIHBhcnRzOiBUZW1wbGF0ZVBhcnRbXSA9IFtdO1xuICBlbGVtZW50OiBIVE1MVGVtcGxhdGVFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKHJlc3VsdDogVGVtcGxhdGVSZXN1bHQsIGVsZW1lbnQ6IEhUTUxUZW1wbGF0ZUVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmVsZW1lbnQuY29udGVudDtcbiAgICAvLyBFZGdlIG5lZWRzIGFsbCA0IHBhcmFtZXRlcnMgcHJlc2VudDsgSUUxMSBuZWVkcyAzcmQgcGFyYW1ldGVyIHRvIGJlIG51bGxcbiAgICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKFxuICAgICAgICBjb250ZW50LFxuICAgICAgICAxMzMgLyogTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQgfCBOb2RlRmlsdGVyLlNIT1dfQ09NTUVOVCB8XG4gICAgICAgICAgICAgICBOb2RlRmlsdGVyLlNIT1dfVEVYVCAqL1xuICAgICAgICAsXG4gICAgICAgIG51bGwgYXMgYW55LFxuICAgICAgICBmYWxzZSk7XG4gICAgbGV0IGluZGV4ID0gLTE7XG4gICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgY29uc3Qgbm9kZXNUb1JlbW92ZTogTm9kZVtdID0gW107XG5cbiAgICAvLyBUaGUgYWN0dWFsIHByZXZpb3VzIG5vZGUsIGFjY291bnRpbmcgZm9yIHJlbW92YWxzOiBpZiBhIG5vZGUgaXMgcmVtb3ZlZFxuICAgIC8vIGl0IHdpbGwgbmV2ZXIgYmUgdGhlIHByZXZpb3VzTm9kZS5cbiAgICBsZXQgcHJldmlvdXNOb2RlOiBOb2RlfHVuZGVmaW5lZDtcbiAgICAvLyBVc2VkIHRvIHNldCBwcmV2aW91c05vZGUgYXQgdGhlIHRvcCBvZiB0aGUgbG9vcC5cbiAgICBsZXQgY3VycmVudE5vZGU6IE5vZGV8dW5kZWZpbmVkO1xuXG4gICAgd2hpbGUgKHdhbGtlci5uZXh0Tm9kZSgpKSB7XG4gICAgICBpbmRleCsrO1xuICAgICAgcHJldmlvdXNOb2RlID0gY3VycmVudE5vZGU7XG4gICAgICBjb25zdCBub2RlID0gY3VycmVudE5vZGUgPSB3YWxrZXIuY3VycmVudE5vZGUgYXMgRWxlbWVudDtcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxIC8qIE5vZGUuRUxFTUVOVF9OT0RFICovKSB7XG4gICAgICAgIGlmICghbm9kZS5oYXNBdHRyaWJ1dGVzKCkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gbm9kZS5hdHRyaWJ1dGVzO1xuICAgICAgICAvLyBQZXIgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL05hbWVkTm9kZU1hcCxcbiAgICAgICAgLy8gYXR0cmlidXRlcyBhcmUgbm90IGd1YXJhbnRlZWQgdG8gYmUgcmV0dXJuZWQgaW4gZG9jdW1lbnQgb3JkZXIuIEluXG4gICAgICAgIC8vIHBhcnRpY3VsYXIsIEVkZ2UvSUUgY2FuIHJldHVybiB0aGVtIG91dCBvZiBvcmRlciwgc28gd2UgY2Fubm90IGFzc3VtZVxuICAgICAgICAvLyBhIGNvcnJlc3BvbmRhbmNlIGJldHdlZW4gcGFydCBpbmRleCBhbmQgYXR0cmlidXRlIGluZGV4LlxuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoYXR0cmlidXRlc1tpXS52YWx1ZS5pbmRleE9mKG1hcmtlcikgPj0gMCkge1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKGNvdW50LS0gPiAwKSB7XG4gICAgICAgICAgLy8gR2V0IHRoZSB0ZW1wbGF0ZSBsaXRlcmFsIHNlY3Rpb24gbGVhZGluZyB1cCB0byB0aGUgZmlyc3RcbiAgICAgICAgICAvLyBleHByZXNzaW9uIGluIHRoaXMgYXR0cmlidXRlXG4gICAgICAgICAgY29uc3Qgc3RyaW5nRm9yUGFydCA9IHJlc3VsdC5zdHJpbmdzW3BhcnRJbmRleF07XG4gICAgICAgICAgLy8gRmluZCB0aGUgYXR0cmlidXRlIG5hbWVcbiAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVOYW1lSW5QYXJ0ID1cbiAgICAgICAgICAgICAgbGFzdEF0dHJpYnV0ZU5hbWVSZWdleC5leGVjKHN0cmluZ0ZvclBhcnQpIVsxXTtcbiAgICAgICAgICAvLyBGaW5kIHRoZSBjb3JyZXNwb25kaW5nIGF0dHJpYnV0ZVxuICAgICAgICAgIC8vIFRPRE8oanVzdGluZmFnbmFuaSk6IHJlbW92ZSBub24tbnVsbCBhc3NlcnRpb25cbiAgICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBhdHRyaWJ1dGVzLmdldE5hbWVkSXRlbShhdHRyaWJ1dGVOYW1lSW5QYXJ0KSE7XG4gICAgICAgICAgY29uc3Qgc3RyaW5nc0ZvckF0dHJpYnV0ZVZhbHVlID0gYXR0cmlidXRlLnZhbHVlLnNwbGl0KG1hcmtlclJlZ2V4KTtcbiAgICAgICAgICB0aGlzLnBhcnRzLnB1c2gobmV3IFRlbXBsYXRlUGFydChcbiAgICAgICAgICAgICAgJ2F0dHJpYnV0ZScsXG4gICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICBhdHRyaWJ1dGUubmFtZSxcbiAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZUluUGFydCxcbiAgICAgICAgICAgICAgc3RyaW5nc0ZvckF0dHJpYnV0ZVZhbHVlKSk7XG4gICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlLm5hbWUpO1xuICAgICAgICAgIHBhcnRJbmRleCArPSBzdHJpbmdzRm9yQXR0cmlidXRlVmFsdWUubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSAzIC8qIE5vZGUuVEVYVF9OT0RFICovKSB7XG4gICAgICAgIGNvbnN0IG5vZGVWYWx1ZSA9IG5vZGUubm9kZVZhbHVlITtcbiAgICAgICAgaWYgKG5vZGVWYWx1ZS5pbmRleE9mKG1hcmtlcikgPCAwKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGUhO1xuICAgICAgICBjb25zdCBzdHJpbmdzID0gbm9kZVZhbHVlLnNwbGl0KG1hcmtlclJlZ2V4KTtcbiAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gc3RyaW5ncy5sZW5ndGggLSAxO1xuXG4gICAgICAgIC8vIFdlIGhhdmUgYSBwYXJ0IGZvciBlYWNoIG1hdGNoIGZvdW5kXG4gICAgICAgIHBhcnRJbmRleCArPSBsYXN0SW5kZXg7XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgdGV4dCBub2RlIGZvciBlYWNoIGxpdGVyYWwgc2VjdGlvblxuICAgICAgICAvLyBUaGVzZSBub2RlcyBhcmUgYWxzbyB1c2VkIGFzIHRoZSBtYXJrZXJzIGZvciBub2RlIHBhcnRzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGFzdEluZGV4OyBpKyspIHtcbiAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgICAoc3RyaW5nc1tpXSA9PT0gJycpXG4gICAgICAgICAgICAgICAgICA/IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpXG4gICAgICAgICAgICAgICAgICA6IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0cmluZ3NbaV0pLFxuICAgICAgICAgICAgICBub2RlKTtcbiAgICAgICAgICB0aGlzLnBhcnRzLnB1c2gobmV3IFRlbXBsYXRlUGFydCgnbm9kZScsIGluZGV4KyspKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgc3RyaW5nc1tsYXN0SW5kZXhdID09PSAnJyA/XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJykgOlxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0cmluZ3NbbGFzdEluZGV4XSksXG4gICAgICAgICAgICBub2RlKTtcbiAgICAgICAgbm9kZXNUb1JlbW92ZS5wdXNoKG5vZGUpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBub2RlLm5vZGVUeXBlID09PSA4IC8qIE5vZGUuQ09NTUVOVF9OT0RFICovICYmXG4gICAgICAgICAgbm9kZS5ub2RlVmFsdWUgPT09IG1hcmtlcikge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGUhO1xuICAgICAgICAvLyBBZGQgYSBuZXcgbWFya2VyIG5vZGUgdG8gYmUgdGhlIHN0YXJ0Tm9kZSBvZiB0aGUgUGFydCBpZiBhbnkgb2YgdGhlXG4gICAgICAgIC8vIGZvbGxvd2luZyBhcmUgdHJ1ZTpcbiAgICAgICAgLy8gICogV2UgZG9uJ3QgaGF2ZSBhIHByZXZpb3VzU2libGluZ1xuICAgICAgICAvLyAgKiBwcmV2aW91c1NpYmxpbmcgaXMgYmVpbmcgcmVtb3ZlZCAodGh1cyBpdCdzIG5vdCB0aGVcbiAgICAgICAgLy8gICAgYHByZXZpb3VzTm9kZWApXG4gICAgICAgIC8vICAqIHByZXZpb3VzU2libGluZyBpcyBub3QgYSBUZXh0IG5vZGVcbiAgICAgICAgLy9cbiAgICAgICAgLy8gVE9ETyhqdXN0aW5mYWduYW5pKTogV2Ugc2hvdWxkIGJlIGFibGUgdG8gdXNlIHRoZSBwcmV2aW91c05vZGUgaGVyZVxuICAgICAgICAvLyBhcyB0aGUgbWFya2VyIG5vZGUgYW5kIHJlZHVjZSB0aGUgbnVtYmVyIG9mIGV4dHJhIG5vZGVzIHdlIGFkZCB0byBhXG4gICAgICAgIC8vIHRlbXBsYXRlLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL1BvbHltZXJMYWJzL2xpdC1odG1sL2lzc3Vlcy8xNDdcbiAgICAgICAgY29uc3QgcHJldmlvdXNTaWJsaW5nID0gbm9kZS5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgIGlmIChwcmV2aW91c1NpYmxpbmcgPT09IG51bGwgfHwgcHJldmlvdXNTaWJsaW5nICE9PSBwcmV2aW91c05vZGUgfHxcbiAgICAgICAgICAgIHByZXZpb3VzU2libGluZy5ub2RlVHlwZSAhPT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpLCBub2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbmRleC0tO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFydHMucHVzaChuZXcgVGVtcGxhdGVQYXJ0KCdub2RlJywgaW5kZXgrKykpO1xuICAgICAgICBub2Rlc1RvUmVtb3ZlLnB1c2gobm9kZSk7XG4gICAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYSBuZXh0U2libGluZyBhZGQgYSBtYXJrZXIgbm9kZS5cbiAgICAgICAgLy8gV2UgZG9uJ3QgaGF2ZSB0byBjaGVjayBpZiB0aGUgbmV4dCBub2RlIGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQsXG4gICAgICAgIC8vIGJlY2F1c2UgdGhhdCBub2RlIHdpbGwgaW5kdWNlIGEgbmV3IG1hcmtlciBpZiBzby5cbiAgICAgICAgaWYgKG5vZGUubmV4dFNpYmxpbmcgPT09IG51bGwpIHtcbiAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpLCBub2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbmRleC0tO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnROb2RlID0gcHJldmlvdXNOb2RlO1xuICAgICAgICBwYXJ0SW5kZXgrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgdGV4dCBiaW5kaW5nIG5vZGVzIGFmdGVyIHRoZSB3YWxrIHRvIG5vdCBkaXN0dXJiIHRoZSBUcmVlV2Fsa2VyXG4gICAgZm9yIChjb25zdCBuIG9mIG5vZGVzVG9SZW1vdmUpIHtcbiAgICAgIG4ucGFyZW50Tm9kZSEucmVtb3ZlQ2hpbGQobik7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHZhbHVlIHJlYWR5IHRvIGJlIGluc2VydGVkIGludG8gYSBQYXJ0IGZyb20gYSB1c2VyLXByb3ZpZGVkIHZhbHVlLlxuICpcbiAqIElmIHRoZSB1c2VyIHZhbHVlIGlzIGEgZGlyZWN0aXZlLCB0aGlzIGludm9rZXMgdGhlIGRpcmVjdGl2ZSB3aXRoIHRoZSBnaXZlblxuICogcGFydC4gSWYgdGhlIHZhbHVlIGlzIG51bGwsIGl0J3MgY29udmVydGVkIHRvIHVuZGVmaW5lZCB0byB3b3JrIGJldHRlclxuICogd2l0aCBjZXJ0YWluIERPTSBBUElzLCBsaWtlIHRleHRDb250ZW50LlxuICovXG5leHBvcnQgY29uc3QgZ2V0VmFsdWUgPSAocGFydDogUGFydCwgdmFsdWU6IGFueSkgPT4ge1xuICAvLyBgbnVsbGAgYXMgdGhlIHZhbHVlIG9mIGEgVGV4dCBub2RlIHdpbGwgcmVuZGVyIHRoZSBzdHJpbmcgJ251bGwnXG4gIC8vIHNvIHdlIGNvbnZlcnQgaXQgdG8gdW5kZWZpbmVkXG4gIGlmIChpc0RpcmVjdGl2ZSh2YWx1ZSkpIHtcbiAgICB2YWx1ZSA9IHZhbHVlKHBhcnQpO1xuICAgIHJldHVybiBub0NoYW5nZTtcbiAgfVxuICByZXR1cm4gdmFsdWUgPT09IG51bGwgPyB1bmRlZmluZWQgOiB2YWx1ZTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlyZWN0aXZlRm48UD0gUGFydD4ge1xuICAocGFydDogUCk6IHZvaWQ7XG4gIF9fbGl0RGlyZWN0aXZlPzogdHJ1ZTtcbn1cblxuZXhwb3J0IGNvbnN0IGRpcmVjdGl2ZSA9IDxQPSBQYXJ0PihmOiBEaXJlY3RpdmVGbjxQPik6IERpcmVjdGl2ZUZuPFA+ID0+IHtcbiAgZi5fX2xpdERpcmVjdGl2ZSA9IHRydWU7XG4gIHJldHVybiBmO1xufTtcblxuY29uc3QgaXNEaXJlY3RpdmUgPSAobzogYW55KSA9PlxuICAgIHR5cGVvZiBvID09PSAnZnVuY3Rpb24nICYmIG8uX19saXREaXJlY3RpdmUgPT09IHRydWU7XG5cbi8qKlxuICogQSBzZW50aW5lbCB2YWx1ZSB0aGF0IHNpZ25hbHMgdGhhdCBhIHZhbHVlIHdhcyBoYW5kbGVkIGJ5IGEgZGlyZWN0aXZlIGFuZFxuICogc2hvdWxkIG5vdCBiZSB3cml0dGVuIHRvIHRoZSBET00uXG4gKi9cbmV4cG9ydCBjb25zdCBub0NoYW5nZSA9IHt9O1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSBgbm9DaGFuZ2VgIGluc3RlYWQuXG4gKi9cbmV4cG9ydCB7IG5vQ2hhbmdlIGFzIGRpcmVjdGl2ZVZhbHVlIH07XG5cbmNvbnN0IGlzUHJpbWl0aXZlVmFsdWUgPSAodmFsdWU6IGFueSkgPT4gdmFsdWUgPT09IG51bGwgfHxcbiAgICAhKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKTtcblxuZXhwb3J0IGludGVyZmFjZSBQYXJ0IHtcbiAgaW5zdGFuY2U6IFRlbXBsYXRlSW5zdGFuY2U7XG4gIHNpemU/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2xlUGFydCBleHRlbmRzIFBhcnQgeyBzZXRWYWx1ZSh2YWx1ZTogYW55KTogdm9pZDsgfVxuXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpUGFydCBleHRlbmRzIFBhcnQge1xuICBzZXRWYWx1ZSh2YWx1ZXM6IGFueVtdLCBzdGFydEluZGV4OiBudW1iZXIpOiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlUGFydCBpbXBsZW1lbnRzIE11bHRpUGFydCB7XG4gIGluc3RhbmNlOiBUZW1wbGF0ZUluc3RhbmNlO1xuICBlbGVtZW50OiBFbGVtZW50O1xuICBuYW1lOiBzdHJpbmc7XG4gIHN0cmluZ3M6IHN0cmluZ1tdO1xuICBzaXplOiBudW1iZXI7XG4gIF9wcmV2aW91c1ZhbHVlczogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgaW5zdGFuY2U6IFRlbXBsYXRlSW5zdGFuY2UsIGVsZW1lbnQ6IEVsZW1lbnQsIG5hbWU6IHN0cmluZyxcbiAgICAgIHN0cmluZ3M6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnN0cmluZ3MgPSBzdHJpbmdzO1xuICAgIHRoaXMuc2l6ZSA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcblxuICAgIHRoaXMuX3ByZXZpb3VzVmFsdWVzID0gW107XG4gIH1cblxuICBwcm90ZWN0ZWQgX2ludGVycG9sYXRlKHZhbHVlczogYW55W10sIHN0YXJ0SW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IHN0cmluZ3MgPSB0aGlzLnN0cmluZ3M7XG4gICAgY29uc3QgbCA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICBsZXQgdGV4dCA9ICcnO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgIHRleHQgKz0gc3RyaW5nc1tpXTtcbiAgICAgIGNvbnN0IHYgPSBnZXRWYWx1ZSh0aGlzLCB2YWx1ZXNbc3RhcnRJbmRleCArIGldKTtcbiAgICAgIGlmICh2ICYmIHYgIT09IG5vQ2hhbmdlICYmXG4gICAgICAgICAgKEFycmF5LmlzQXJyYXkodikgfHwgdHlwZW9mIHYgIT09ICdzdHJpbmcnICYmIHZbU3ltYm9sLml0ZXJhdG9yXSkpIHtcbiAgICAgICAgZm9yIChjb25zdCB0IG9mIHYpIHtcbiAgICAgICAgICAvLyBUT0RPOiB3ZSBuZWVkIHRvIHJlY3Vyc2l2ZWx5IGNhbGwgZ2V0VmFsdWUgaW50byBpdGVyYWJsZXMuLi5cbiAgICAgICAgICB0ZXh0ICs9IHQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRleHQgKz0gdjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRleHQgKyBzdHJpbmdzW2xdO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9lcXVhbFRvUHJldmlvdXNWYWx1ZXModmFsdWVzOiBhbnlbXSwgc3RhcnRJbmRleDogbnVtYmVyKSB7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXg7IGkgPCBzdGFydEluZGV4ICsgdGhpcy5zaXplOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLl9wcmV2aW91c1ZhbHVlc1tpXSAhPT0gdmFsdWVzW2ldIHx8XG4gICAgICAgICAgIWlzUHJpbWl0aXZlVmFsdWUodmFsdWVzW2ldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWVzOiBhbnlbXSwgc3RhcnRJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2VxdWFsVG9QcmV2aW91c1ZhbHVlcyh2YWx1ZXMsIHN0YXJ0SW5kZXgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHMgPSB0aGlzLnN0cmluZ3M7XG4gICAgbGV0IHZhbHVlOiBhbnk7XG4gICAgaWYgKHMubGVuZ3RoID09PSAyICYmIHNbMF0gPT09ICcnICYmIHNbMV0gPT09ICcnKSB7XG4gICAgICAvLyBBbiBleHByZXNzaW9uIHRoYXQgb2NjdXBpZXMgdGhlIHdob2xlIGF0dHJpYnV0ZSB2YWx1ZSB3aWxsIGxlYXZlXG4gICAgICAvLyBsZWFkaW5nIGFuZCB0cmFpbGluZyBlbXB0eSBzdHJpbmdzLlxuICAgICAgdmFsdWUgPSBnZXRWYWx1ZSh0aGlzLCB2YWx1ZXNbc3RhcnRJbmRleF0pO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuam9pbignJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gdGhpcy5faW50ZXJwb2xhdGUodmFsdWVzLCBzdGFydEluZGV4KTtcbiAgICB9XG4gICAgaWYgKHZhbHVlICE9PSBub0NoYW5nZSkge1xuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLm5hbWUsIHZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy5fcHJldmlvdXNWYWx1ZXMgPSB2YWx1ZXM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5vZGVQYXJ0IGltcGxlbWVudHMgU2luZ2xlUGFydCB7XG4gIGluc3RhbmNlOiBUZW1wbGF0ZUluc3RhbmNlO1xuICBzdGFydE5vZGU6IE5vZGU7XG4gIGVuZE5vZGU6IE5vZGU7XG4gIF9wcmV2aW91c1ZhbHVlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoaW5zdGFuY2U6IFRlbXBsYXRlSW5zdGFuY2UsIHN0YXJ0Tm9kZTogTm9kZSwgZW5kTm9kZTogTm9kZSkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICB0aGlzLnN0YXJ0Tm9kZSA9IHN0YXJ0Tm9kZTtcbiAgICB0aGlzLmVuZE5vZGUgPSBlbmROb2RlO1xuICAgIHRoaXMuX3ByZXZpb3VzVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdmFsdWUgPSBnZXRWYWx1ZSh0aGlzLCB2YWx1ZSk7XG4gICAgaWYgKHZhbHVlID09PSBub0NoYW5nZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXNQcmltaXRpdmVWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgIC8vIEhhbmRsZSBwcmltaXRpdmUgdmFsdWVzXG4gICAgICAvLyBJZiB0aGUgdmFsdWUgZGlkbid0IGNoYW5nZSwgZG8gbm90aGluZ1xuICAgICAgaWYgKHZhbHVlID09PSB0aGlzLl9wcmV2aW91c1ZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3NldFRleHQodmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlc3VsdCkge1xuICAgICAgdGhpcy5fc2V0VGVtcGxhdGVSZXN1bHQodmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgdmFsdWVbU3ltYm9sLml0ZXJhdG9yXSkge1xuICAgICAgdGhpcy5fc2V0SXRlcmFibGUodmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICB0aGlzLl9zZXROb2RlKHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlLnRoZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fc2V0UHJvbWlzZSh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZhbGxiYWNrLCB3aWxsIHJlbmRlciB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uXG4gICAgICB0aGlzLl9zZXRUZXh0KHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pbnNlcnQobm9kZTogTm9kZSkge1xuICAgIHRoaXMuZW5kTm9kZS5wYXJlbnROb2RlIS5pbnNlcnRCZWZvcmUobm9kZSwgdGhpcy5lbmROb2RlKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldE5vZGUodmFsdWU6IE5vZGUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fcHJldmlvdXNWYWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jbGVhcigpO1xuICAgIHRoaXMuX2luc2VydCh2YWx1ZSk7XG4gICAgdGhpcy5fcHJldmlvdXNWYWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0VGV4dCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuc3RhcnROb2RlLm5leHRTaWJsaW5nITtcbiAgICB2YWx1ZSA9IHZhbHVlID09PSB1bmRlZmluZWQgPyAnJyA6IHZhbHVlO1xuICAgIGlmIChub2RlID09PSB0aGlzLmVuZE5vZGUucHJldmlvdXNTaWJsaW5nICYmXG4gICAgICAgIG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAvLyBJZiB3ZSBvbmx5IGhhdmUgYSBzaW5nbGUgdGV4dCBub2RlIGJldHdlZW4gdGhlIG1hcmtlcnMsIHdlIGNhbiBqdXN0XG4gICAgICAvLyBzZXQgaXRzIHZhbHVlLCByYXRoZXIgdGhhbiByZXBsYWNpbmcgaXQuXG4gICAgICAvLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiBDYW4gd2UganVzdCBjaGVjayBpZiBfcHJldmlvdXNWYWx1ZSBpc1xuICAgICAgLy8gcHJpbWl0aXZlP1xuICAgICAgbm9kZS50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zZXROb2RlKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKSk7XG4gICAgfVxuICAgIHRoaXMuX3ByZXZpb3VzVmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldFRlbXBsYXRlUmVzdWx0KHZhbHVlOiBUZW1wbGF0ZVJlc3VsdCk6IHZvaWQge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5pbnN0YW5jZS5fZ2V0VGVtcGxhdGUodmFsdWUpO1xuICAgIGxldCBpbnN0YW5jZTogVGVtcGxhdGVJbnN0YW5jZTtcbiAgICBpZiAodGhpcy5fcHJldmlvdXNWYWx1ZSAmJiB0aGlzLl9wcmV2aW91c1ZhbHVlLnRlbXBsYXRlID09PSB0ZW1wbGF0ZSkge1xuICAgICAgaW5zdGFuY2UgPSB0aGlzLl9wcmV2aW91c1ZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBUZW1wbGF0ZUluc3RhbmNlKFxuICAgICAgICAgIHRlbXBsYXRlLCB0aGlzLmluc3RhbmNlLl9wYXJ0Q2FsbGJhY2ssIHRoaXMuaW5zdGFuY2UuX2dldFRlbXBsYXRlKTtcbiAgICAgIHRoaXMuX3NldE5vZGUoaW5zdGFuY2UuX2Nsb25lKCkpO1xuICAgICAgdGhpcy5fcHJldmlvdXNWYWx1ZSA9IGluc3RhbmNlO1xuICAgIH1cbiAgICBpbnN0YW5jZS51cGRhdGUodmFsdWUudmFsdWVzKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldEl0ZXJhYmxlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAvLyBGb3IgYW4gSXRlcmFibGUsIHdlIGNyZWF0ZSBhIG5ldyBJbnN0YW5jZVBhcnQgcGVyIGl0ZW0sIHRoZW4gc2V0IGl0c1xuICAgIC8vIHZhbHVlIHRvIHRoZSBpdGVtLiBUaGlzIGlzIGEgbGl0dGxlIGJpdCBvZiBvdmVyaGVhZCBmb3IgZXZlcnkgaXRlbSBpblxuICAgIC8vIGFuIEl0ZXJhYmxlLCBidXQgaXQgbGV0cyB1cyByZWN1cnNlIGVhc2lseSBhbmQgZWZmaWNpZW50bHkgdXBkYXRlIEFycmF5c1xuICAgIC8vIG9mIFRlbXBsYXRlUmVzdWx0cyB0aGF0IHdpbGwgYmUgY29tbW9ubHkgcmV0dXJuZWQgZnJvbSBleHByZXNzaW9ucyBsaWtlOlxuICAgIC8vIGFycmF5Lm1hcCgoaSkgPT4gaHRtbGAke2l9YCksIGJ5IHJldXNpbmcgZXhpc3RpbmcgVGVtcGxhdGVJbnN0YW5jZXMuXG5cbiAgICAvLyBJZiBfcHJldmlvdXNWYWx1ZSBpcyBhbiBhcnJheSwgdGhlbiB0aGUgcHJldmlvdXMgcmVuZGVyIHdhcyBvZiBhblxuICAgIC8vIGl0ZXJhYmxlIGFuZCBfcHJldmlvdXNWYWx1ZSB3aWxsIGNvbnRhaW4gdGhlIE5vZGVQYXJ0cyBmcm9tIHRoZSBwcmV2aW91c1xuICAgIC8vIHJlbmRlci4gSWYgX3ByZXZpb3VzVmFsdWUgaXMgbm90IGFuIGFycmF5LCBjbGVhciB0aGlzIHBhcnQgYW5kIG1ha2UgYSBuZXdcbiAgICAvLyBhcnJheSBmb3IgTm9kZVBhcnRzLlxuICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzLl9wcmV2aW91c1ZhbHVlKSkge1xuICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgdGhpcy5fcHJldmlvdXNWYWx1ZSA9IFtdO1xuICAgIH1cblxuICAgIC8vIExldHMgdXMga2VlcCB0cmFjayBvZiBob3cgbWFueSBpdGVtcyB3ZSBzdGFtcGVkIHNvIHdlIGNhbiBjbGVhciBsZWZ0b3ZlclxuICAgIC8vIGl0ZW1zIGZyb20gYSBwcmV2aW91cyByZW5kZXJcbiAgICBjb25zdCBpdGVtUGFydHMgPSB0aGlzLl9wcmV2aW91c1ZhbHVlIGFzIGFueVtdO1xuICAgIGxldCBwYXJ0SW5kZXggPSAwO1xuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHZhbHVlKSB7XG4gICAgICAvLyBUcnkgdG8gcmV1c2UgYW4gZXhpc3RpbmcgcGFydFxuICAgICAgbGV0IGl0ZW1QYXJ0ID0gaXRlbVBhcnRzW3BhcnRJbmRleF07XG5cbiAgICAgIC8vIElmIG5vIGV4aXN0aW5nIHBhcnQsIGNyZWF0ZSBhIG5ldyBvbmVcbiAgICAgIGlmIChpdGVtUGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIElmIHdlJ3JlIGNyZWF0aW5nIHRoZSBmaXJzdCBpdGVtIHBhcnQsIGl0J3Mgc3RhcnROb2RlIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gY29udGFpbmVyJ3Mgc3RhcnROb2RlXG4gICAgICAgIGxldCBpdGVtU3RhcnQgPSB0aGlzLnN0YXJ0Tm9kZTtcblxuICAgICAgICAvLyBJZiB3ZSdyZSBub3QgY3JlYXRpbmcgdGhlIGZpcnN0IHBhcnQsIGNyZWF0ZSBhIG5ldyBzZXBhcmF0b3IgbWFya2VyXG4gICAgICAgIC8vIG5vZGUsIGFuZCBmaXggdXAgdGhlIHByZXZpb3VzIHBhcnQncyBlbmROb2RlIHRvIHBvaW50IHRvIGl0XG4gICAgICAgIGlmIChwYXJ0SW5kZXggPiAwKSB7XG4gICAgICAgICAgY29uc3QgcHJldmlvdXNQYXJ0ID0gaXRlbVBhcnRzW3BhcnRJbmRleCAtIDFdO1xuICAgICAgICAgIGl0ZW1TdGFydCA9IHByZXZpb3VzUGFydC5lbmROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgICAgICAgIHRoaXMuX2luc2VydChpdGVtU3RhcnQpO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW1QYXJ0ID0gbmV3IE5vZGVQYXJ0KHRoaXMuaW5zdGFuY2UsIGl0ZW1TdGFydCwgdGhpcy5lbmROb2RlKTtcbiAgICAgICAgaXRlbVBhcnRzLnB1c2goaXRlbVBhcnQpO1xuICAgICAgfVxuICAgICAgaXRlbVBhcnQuc2V0VmFsdWUoaXRlbSk7XG4gICAgICBwYXJ0SW5kZXgrKztcbiAgICB9XG5cbiAgICBpZiAocGFydEluZGV4ID09PSAwKSB7XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICB0aGlzLl9wcmV2aW91c1ZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSBpZiAocGFydEluZGV4IDwgaXRlbVBhcnRzLmxlbmd0aCkge1xuICAgICAgY29uc3QgbGFzdFBhcnQgPSBpdGVtUGFydHNbcGFydEluZGV4IC0gMV07XG4gICAgICAvLyBUcnVuY2F0ZSB0aGUgcGFydHMgYXJyYXkgc28gX3ByZXZpb3VzVmFsdWUgcmVmbGVjdHMgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICAgIGl0ZW1QYXJ0cy5sZW5ndGggPSBwYXJ0SW5kZXg7XG4gICAgICB0aGlzLmNsZWFyKGxhc3RQYXJ0LmVuZE5vZGUucHJldmlvdXNTaWJsaW5nISk7XG4gICAgICBsYXN0UGFydC5lbmROb2RlID0gdGhpcy5lbmROb2RlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NldFByb21pc2UodmFsdWU6IFByb21pc2U8YW55Pik6IHZvaWQge1xuICAgIHRoaXMuX3ByZXZpb3VzVmFsdWUgPSB2YWx1ZTtcbiAgICB2YWx1ZS50aGVuKCh2OiBhbnkpID0+IHtcbiAgICAgIGlmICh0aGlzLl9wcmV2aW91c1ZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHYpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2xlYXIoc3RhcnROb2RlOiBOb2RlID0gdGhpcy5zdGFydE5vZGUpIHtcbiAgICByZW1vdmVOb2RlcyhcbiAgICAgICAgdGhpcy5zdGFydE5vZGUucGFyZW50Tm9kZSEsIHN0YXJ0Tm9kZS5uZXh0U2libGluZyEsIHRoaXMuZW5kTm9kZSk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgUGFydENhbGxiYWNrID1cbiAgICAoaW5zdGFuY2U6IFRlbXBsYXRlSW5zdGFuY2UsIHRlbXBsYXRlUGFydDogVGVtcGxhdGVQYXJ0LCBub2RlOiBOb2RlKSA9PlxuICAgICAgICBQYXJ0O1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFBhcnRDYWxsYmFjayA9XG4gICAgKGluc3RhbmNlOiBUZW1wbGF0ZUluc3RhbmNlLFxuICAgICB0ZW1wbGF0ZVBhcnQ6IFRlbXBsYXRlUGFydCxcbiAgICAgbm9kZTogTm9kZSk6IFBhcnQgPT4ge1xuICAgICAgaWYgKHRlbXBsYXRlUGFydC50eXBlID09PSAnYXR0cmlidXRlJykge1xuICAgICAgICByZXR1cm4gbmV3IEF0dHJpYnV0ZVBhcnQoXG4gICAgICAgICAgICBpbnN0YW5jZSwgbm9kZSBhcyBFbGVtZW50LCB0ZW1wbGF0ZVBhcnQubmFtZSEsIHRlbXBsYXRlUGFydC5zdHJpbmdzIVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmICh0ZW1wbGF0ZVBhcnQudHlwZSA9PT0gJ25vZGUnKSB7XG4gICAgICAgIHJldHVybiBuZXcgTm9kZVBhcnQoaW5zdGFuY2UsIG5vZGUsIG5vZGUubmV4dFNpYmxpbmchKTtcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBwYXJ0IHR5cGUgJHt0ZW1wbGF0ZVBhcnQudHlwZX1gKTtcbiAgICB9O1xuXG5cbi8qKlxuICogQW4gaW5zdGFuY2Ugb2YgYSBgVGVtcGxhdGVgIHRoYXQgY2FuIGJlIGF0dGFjaGVkIHRvIHRoZSBET00gYW5kIHVwZGF0ZWRcbiAqIHdpdGggbmV3IHZhbHVlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFRlbXBsYXRlSW5zdGFuY2Uge1xuICBfcGFydHM6IEFycmF5PFBhcnR8dW5kZWZpbmVkPiA9IFtdO1xuICBfcGFydENhbGxiYWNrOiBQYXJ0Q2FsbGJhY2s7XG4gIF9nZXRUZW1wbGF0ZTogVGVtcGxhdGVGYWN0b3J5O1xuICB0ZW1wbGF0ZTogVGVtcGxhdGU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICB0ZW1wbGF0ZTogVGVtcGxhdGUsIHBhcnRDYWxsYmFjazogUGFydENhbGxiYWNrLFxuICAgICAgZ2V0VGVtcGxhdGU6IFRlbXBsYXRlRmFjdG9yeSkge1xuICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICB0aGlzLl9wYXJ0Q2FsbGJhY2sgPSBwYXJ0Q2FsbGJhY2s7XG4gICAgdGhpcy5fZ2V0VGVtcGxhdGUgPSBnZXRUZW1wbGF0ZTtcbiAgfVxuXG4gIHVwZGF0ZSh2YWx1ZXM6IGFueVtdKSB7XG4gICAgbGV0IHZhbHVlSW5kZXggPSAwO1xuICAgIGZvciAoY29uc3QgcGFydCBvZiB0aGlzLl9wYXJ0cykge1xuICAgICAgaWYgKCFwYXJ0KSB7XG4gICAgICAgIHZhbHVlSW5kZXgrKztcbiAgICAgIH0gZWxzZSBpZiAocGFydC5zaXplID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgKHBhcnQgYXMgU2luZ2xlUGFydCkuc2V0VmFsdWUodmFsdWVzW3ZhbHVlSW5kZXhdKTtcbiAgICAgICAgdmFsdWVJbmRleCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKHBhcnQgYXMgTXVsdGlQYXJ0KS5zZXRWYWx1ZSh2YWx1ZXMsIHZhbHVlSW5kZXgpO1xuICAgICAgICB2YWx1ZUluZGV4ICs9IHBhcnQuc2l6ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfY2xvbmUoKTogRG9jdW1lbnRGcmFnbWVudCB7XG4gICAgLy8gQ2xvbmUgdGhlIG5vZGUsIHJhdGhlciB0aGFuIGltcG9ydGluZyBpdCwgdG8ga2VlcCB0aGUgZnJhZ21lbnQgaW4gdGhlXG4gICAgLy8gdGVtcGxhdGUncyBkb2N1bWVudC4gVGhpcyBsZWF2ZXMgdGhlIGZyYWdtZW50IGluZXJ0IHNvIGN1c3RvbSBlbGVtZW50c1xuICAgIC8vIHdvbid0IHVwZ3JhZGUgdW50aWwgYWZ0ZXIgdGhlIG1haW4gZG9jdW1lbnQgYWRvcHRzIHRoZSBub2RlLlxuICAgIGNvbnN0IGZyYWdtZW50ID0gdGhpcy50ZW1wbGF0ZS5lbGVtZW50LmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpIGFzIERvY3VtZW50RnJhZ21lbnQ7XG4gICAgY29uc3QgcGFydHMgPSB0aGlzLnRlbXBsYXRlLnBhcnRzO1xuXG4gICAgaWYgKHBhcnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIEVkZ2UgbmVlZHMgYWxsIDQgcGFyYW1ldGVycyBwcmVzZW50OyBJRTExIG5lZWRzIDNyZCBwYXJhbWV0ZXIgdG8gYmVcbiAgICAgIC8vIG51bGxcbiAgICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoXG4gICAgICAgICAgZnJhZ21lbnQsXG4gICAgICAgICAgMTMzIC8qIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5UIHwgTm9kZUZpbHRlci5TSE9XX0NPTU1FTlQgfFxuICAgICAgICAgICAgICAgICBOb2RlRmlsdGVyLlNIT1dfVEVYVCAqL1xuICAgICAgICAgICxcbiAgICAgICAgICBudWxsIGFzIGFueSxcbiAgICAgICAgICBmYWxzZSk7XG5cbiAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBwYXJ0ID0gcGFydHNbaV07XG4gICAgICAgIGNvbnN0IHBhcnRBY3RpdmUgPSBpc1RlbXBsYXRlUGFydEFjdGl2ZShwYXJ0KTtcbiAgICAgICAgLy8gQW4gaW5hY3RpdmUgcGFydCBoYXMgbm8gY29yZXNwb25kaW5nIFRlbXBsYXRlIG5vZGUuXG4gICAgICAgIGlmIChwYXJ0QWN0aXZlKSB7XG4gICAgICAgICAgd2hpbGUgKGluZGV4IDwgcGFydC5pbmRleCkge1xuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgIHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wYXJ0cy5wdXNoKHBhcnRBY3RpdmUgPyB0aGlzLl9wYXJ0Q2FsbGJhY2sodGhpcywgcGFydCwgd2Fsa2VyLmN1cnJlbnROb2RlKSA6IHVuZGVmaW5lZCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmcmFnbWVudDtcbiAgfVxufVxuXG4vKipcbiAqIFJlcGFyZW50cyBub2Rlcywgc3RhcnRpbmcgZnJvbSBgc3RhcnROb2RlYCAoaW5jbHVzaXZlKSB0byBgZW5kTm9kZWBcbiAqIChleGNsdXNpdmUpLCBpbnRvIGFub3RoZXIgY29udGFpbmVyIChjb3VsZCBiZSB0aGUgc2FtZSBjb250YWluZXIpLCBiZWZvcmVcbiAqIGBiZWZvcmVOb2RlYC4gSWYgYGJlZm9yZU5vZGVgIGlzIG51bGwsIGl0IGFwcGVuZHMgdGhlIG5vZGVzIHRvIHRoZVxuICogY29udGFpbmVyLlxuICovXG5leHBvcnQgY29uc3QgcmVwYXJlbnROb2RlcyA9XG4gICAgKGNvbnRhaW5lcjogTm9kZSxcbiAgICAgc3RhcnQ6IE5vZGUgfCBudWxsLFxuICAgICBlbmQ6IE5vZGUgfCBudWxsID0gbnVsbCxcbiAgICAgYmVmb3JlOiBOb2RlIHwgbnVsbCA9IG51bGwpOiB2b2lkID0+IHtcbiAgICAgIGxldCBub2RlID0gc3RhcnQ7XG4gICAgICB3aGlsZSAobm9kZSAhPT0gZW5kKSB7XG4gICAgICAgIGNvbnN0IG4gPSBub2RlIS5uZXh0U2libGluZztcbiAgICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShub2RlISwgYmVmb3JlIGFzIE5vZGUpO1xuICAgICAgICBub2RlID0gbjtcbiAgICAgIH1cbiAgICB9O1xuXG4vKipcbiAqIFJlbW92ZXMgbm9kZXMsIHN0YXJ0aW5nIGZyb20gYHN0YXJ0Tm9kZWAgKGluY2x1c2l2ZSkgdG8gYGVuZE5vZGVgXG4gKiAoZXhjbHVzaXZlKSwgZnJvbSBgY29udGFpbmVyYC5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZU5vZGVzID1cbiAgICAoY29udGFpbmVyOiBOb2RlLCBzdGFydE5vZGU6IE5vZGUgfCBudWxsLCBlbmROb2RlOiBOb2RlIHwgbnVsbCA9IG51bGwpOlxuICAgICAgICB2b2lkID0+IHtcbiAgICAgICAgICBsZXQgbm9kZSA9IHN0YXJ0Tm9kZTtcbiAgICAgICAgICB3aGlsZSAobm9kZSAhPT0gZW5kTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgbiA9IG5vZGUhLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKG5vZGUhKTtcbiAgICAgICAgICAgIG5vZGUgPSBuO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiIsIi8qIVxuICAgIGxvY2FsRm9yYWdlIC0tIE9mZmxpbmUgU3RvcmFnZSwgSW1wcm92ZWRcbiAgICBWZXJzaW9uIDEuNy4yXG4gICAgaHR0cHM6Ly9sb2NhbGZvcmFnZS5naXRodWIuaW8vbG9jYWxGb3JhZ2VcbiAgICAoYykgMjAxMy0yMDE3IE1vemlsbGEsIEFwYWNoZSBMaWNlbnNlIDIuMFxuKi9cbihmdW5jdGlvbihmKXtpZih0eXBlb2YgZXhwb3J0cz09PVwib2JqZWN0XCImJnR5cGVvZiBtb2R1bGUhPT1cInVuZGVmaW5lZFwiKXttb2R1bGUuZXhwb3J0cz1mKCl9ZWxzZSBpZih0eXBlb2YgZGVmaW5lPT09XCJmdW5jdGlvblwiJiZkZWZpbmUuYW1kKXtkZWZpbmUoW10sZil9ZWxzZXt2YXIgZztpZih0eXBlb2Ygd2luZG93IT09XCJ1bmRlZmluZWRcIil7Zz13aW5kb3d9ZWxzZSBpZih0eXBlb2YgZ2xvYmFsIT09XCJ1bmRlZmluZWRcIil7Zz1nbG9iYWx9ZWxzZSBpZih0eXBlb2Ygc2VsZiE9PVwidW5kZWZpbmVkXCIpe2c9c2VsZn1lbHNle2c9dGhpc31nLmxvY2FsZm9yYWdlID0gZigpfX0pKGZ1bmN0aW9uKCl7dmFyIGRlZmluZSxtb2R1bGUsZXhwb3J0cztyZXR1cm4gKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IChmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsIGYpfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkoezE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuKGZ1bmN0aW9uIChnbG9iYWwpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIE11dGF0aW9uID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG5cbnZhciBzY2hlZHVsZURyYWluO1xuXG57XG4gIGlmIChNdXRhdGlvbikge1xuICAgIHZhciBjYWxsZWQgPSAwO1xuICAgIHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbihuZXh0VGljayk7XG4gICAgdmFyIGVsZW1lbnQgPSBnbG9iYWwuZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwge1xuICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZVxuICAgIH0pO1xuICAgIHNjaGVkdWxlRHJhaW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBlbGVtZW50LmRhdGEgPSAoY2FsbGVkID0gKytjYWxsZWQgJSAyKTtcbiAgICB9O1xuICB9IGVsc2UgaWYgKCFnbG9iYWwuc2V0SW1tZWRpYXRlICYmIHR5cGVvZiBnbG9iYWwuTWVzc2FnZUNoYW5uZWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIGNoYW5uZWwgPSBuZXcgZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKCk7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBuZXh0VGljaztcbiAgICBzY2hlZHVsZURyYWluID0gZnVuY3Rpb24gKCkge1xuICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZSgwKTtcbiAgICB9O1xuICB9IGVsc2UgaWYgKCdkb2N1bWVudCcgaW4gZ2xvYmFsICYmICdvbnJlYWR5c3RhdGVjaGFuZ2UnIGluIGdsb2JhbC5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKSkge1xuICAgIHNjaGVkdWxlRHJhaW4gPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgIHZhciBzY3JpcHRFbCA9IGdsb2JhbC5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHNjcmlwdEVsLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbmV4dFRpY2soKTtcblxuICAgICAgICBzY3JpcHRFbC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICBzY3JpcHRFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdEVsKTtcbiAgICAgICAgc2NyaXB0RWwgPSBudWxsO1xuICAgICAgfTtcbiAgICAgIGdsb2JhbC5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoc2NyaXB0RWwpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgc2NoZWR1bGVEcmFpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldFRpbWVvdXQobmV4dFRpY2ssIDApO1xuICAgIH07XG4gIH1cbn1cblxudmFyIGRyYWluaW5nO1xudmFyIHF1ZXVlID0gW107XG4vL25hbWVkIG5leHRUaWNrIGZvciBsZXNzIGNvbmZ1c2luZyBzdGFjayB0cmFjZXNcbmZ1bmN0aW9uIG5leHRUaWNrKCkge1xuICBkcmFpbmluZyA9IHRydWU7XG4gIHZhciBpLCBvbGRRdWV1ZTtcbiAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgd2hpbGUgKGxlbikge1xuICAgIG9sZFF1ZXVlID0gcXVldWU7XG4gICAgcXVldWUgPSBbXTtcbiAgICBpID0gLTE7XG4gICAgd2hpbGUgKCsraSA8IGxlbikge1xuICAgICAgb2xkUXVldWVbaV0oKTtcbiAgICB9XG4gICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICB9XG4gIGRyYWluaW5nID0gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW1tZWRpYXRlO1xuZnVuY3Rpb24gaW1tZWRpYXRlKHRhc2spIHtcbiAgaWYgKHF1ZXVlLnB1c2godGFzaykgPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgc2NoZWR1bGVEcmFpbigpO1xuICB9XG59XG5cbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KVxufSx7fV0sMjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgaW1tZWRpYXRlID0gX2RlcmVxXygxKTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIElOVEVSTkFMKCkge31cblxudmFyIGhhbmRsZXJzID0ge307XG5cbnZhciBSRUpFQ1RFRCA9IFsnUkVKRUNURUQnXTtcbnZhciBGVUxGSUxMRUQgPSBbJ0ZVTEZJTExFRCddO1xudmFyIFBFTkRJTkcgPSBbJ1BFTkRJTkcnXTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuXG5mdW5jdGlvbiBQcm9taXNlKHJlc29sdmVyKSB7XG4gIGlmICh0eXBlb2YgcmVzb2x2ZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdyZXNvbHZlciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgfVxuICB0aGlzLnN0YXRlID0gUEVORElORztcbiAgdGhpcy5xdWV1ZSA9IFtdO1xuICB0aGlzLm91dGNvbWUgPSB2b2lkIDA7XG4gIGlmIChyZXNvbHZlciAhPT0gSU5URVJOQUwpIHtcbiAgICBzYWZlbHlSZXNvbHZlVGhlbmFibGUodGhpcywgcmVzb2x2ZXIpO1xuICB9XG59XG5cblByb21pc2UucHJvdG90eXBlW1wiY2F0Y2hcIl0gPSBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0ZWQpO1xufTtcblByb21pc2UucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbiAob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgaWYgKHR5cGVvZiBvbkZ1bGZpbGxlZCAhPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzLnN0YXRlID09PSBGVUxGSUxMRUQgfHxcbiAgICB0eXBlb2Ygb25SZWplY3RlZCAhPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzLnN0YXRlID09PSBSRUpFQ1RFRCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHZhciBwcm9taXNlID0gbmV3IHRoaXMuY29uc3RydWN0b3IoSU5URVJOQUwpO1xuICBpZiAodGhpcy5zdGF0ZSAhPT0gUEVORElORykge1xuICAgIHZhciByZXNvbHZlciA9IHRoaXMuc3RhdGUgPT09IEZVTEZJTExFRCA/IG9uRnVsZmlsbGVkIDogb25SZWplY3RlZDtcbiAgICB1bndyYXAocHJvbWlzZSwgcmVzb2x2ZXIsIHRoaXMub3V0Y29tZSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5xdWV1ZS5wdXNoKG5ldyBRdWV1ZUl0ZW0ocHJvbWlzZSwgb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcbmZ1bmN0aW9uIFF1ZXVlSXRlbShwcm9taXNlLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICBpZiAodHlwZW9mIG9uRnVsZmlsbGVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhpcy5vbkZ1bGZpbGxlZCA9IG9uRnVsZmlsbGVkO1xuICAgIHRoaXMuY2FsbEZ1bGZpbGxlZCA9IHRoaXMub3RoZXJDYWxsRnVsZmlsbGVkO1xuICB9XG4gIGlmICh0eXBlb2Ygb25SZWplY3RlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRoaXMub25SZWplY3RlZCA9IG9uUmVqZWN0ZWQ7XG4gICAgdGhpcy5jYWxsUmVqZWN0ZWQgPSB0aGlzLm90aGVyQ2FsbFJlamVjdGVkO1xuICB9XG59XG5RdWV1ZUl0ZW0ucHJvdG90eXBlLmNhbGxGdWxmaWxsZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaGFuZGxlcnMucmVzb2x2ZSh0aGlzLnByb21pc2UsIHZhbHVlKTtcbn07XG5RdWV1ZUl0ZW0ucHJvdG90eXBlLm90aGVyQ2FsbEZ1bGZpbGxlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB1bndyYXAodGhpcy5wcm9taXNlLCB0aGlzLm9uRnVsZmlsbGVkLCB2YWx1ZSk7XG59O1xuUXVldWVJdGVtLnByb3RvdHlwZS5jYWxsUmVqZWN0ZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaGFuZGxlcnMucmVqZWN0KHRoaXMucHJvbWlzZSwgdmFsdWUpO1xufTtcblF1ZXVlSXRlbS5wcm90b3R5cGUub3RoZXJDYWxsUmVqZWN0ZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdW53cmFwKHRoaXMucHJvbWlzZSwgdGhpcy5vblJlamVjdGVkLCB2YWx1ZSk7XG59O1xuXG5mdW5jdGlvbiB1bndyYXAocHJvbWlzZSwgZnVuYywgdmFsdWUpIHtcbiAgaW1tZWRpYXRlKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmV0dXJuVmFsdWU7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVyblZhbHVlID0gZnVuYyh2YWx1ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGhhbmRsZXJzLnJlamVjdChwcm9taXNlLCBlKTtcbiAgICB9XG4gICAgaWYgKHJldHVyblZhbHVlID09PSBwcm9taXNlKSB7XG4gICAgICBoYW5kbGVycy5yZWplY3QocHJvbWlzZSwgbmV3IFR5cGVFcnJvcignQ2Fubm90IHJlc29sdmUgcHJvbWlzZSB3aXRoIGl0c2VsZicpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGFuZGxlcnMucmVzb2x2ZShwcm9taXNlLCByZXR1cm5WYWx1ZSk7XG4gICAgfVxuICB9KTtcbn1cblxuaGFuZGxlcnMucmVzb2x2ZSA9IGZ1bmN0aW9uIChzZWxmLCB2YWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gdHJ5Q2F0Y2goZ2V0VGhlbiwgdmFsdWUpO1xuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgIHJldHVybiBoYW5kbGVycy5yZWplY3Qoc2VsZiwgcmVzdWx0LnZhbHVlKTtcbiAgfVxuICB2YXIgdGhlbmFibGUgPSByZXN1bHQudmFsdWU7XG5cbiAgaWYgKHRoZW5hYmxlKSB7XG4gICAgc2FmZWx5UmVzb2x2ZVRoZW5hYmxlKHNlbGYsIHRoZW5hYmxlKTtcbiAgfSBlbHNlIHtcbiAgICBzZWxmLnN0YXRlID0gRlVMRklMTEVEO1xuICAgIHNlbGYub3V0Y29tZSA9IHZhbHVlO1xuICAgIHZhciBpID0gLTE7XG4gICAgdmFyIGxlbiA9IHNlbGYucXVldWUubGVuZ3RoO1xuICAgIHdoaWxlICgrK2kgPCBsZW4pIHtcbiAgICAgIHNlbGYucXVldWVbaV0uY2FsbEZ1bGZpbGxlZCh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzZWxmO1xufTtcbmhhbmRsZXJzLnJlamVjdCA9IGZ1bmN0aW9uIChzZWxmLCBlcnJvcikge1xuICBzZWxmLnN0YXRlID0gUkVKRUNURUQ7XG4gIHNlbGYub3V0Y29tZSA9IGVycm9yO1xuICB2YXIgaSA9IC0xO1xuICB2YXIgbGVuID0gc2VsZi5xdWV1ZS5sZW5ndGg7XG4gIHdoaWxlICgrK2kgPCBsZW4pIHtcbiAgICBzZWxmLnF1ZXVlW2ldLmNhbGxSZWplY3RlZChlcnJvcik7XG4gIH1cbiAgcmV0dXJuIHNlbGY7XG59O1xuXG5mdW5jdGlvbiBnZXRUaGVuKG9iaikge1xuICAvLyBNYWtlIHN1cmUgd2Ugb25seSBhY2Nlc3MgdGhlIGFjY2Vzc29yIG9uY2UgYXMgcmVxdWlyZWQgYnkgdGhlIHNwZWNcbiAgdmFyIHRoZW4gPSBvYmogJiYgb2JqLnRoZW47XG4gIGlmIChvYmogJiYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnIHx8IHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicpICYmIHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGFwcHlUaGVuKCkge1xuICAgICAgdGhlbi5hcHBseShvYmosIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzYWZlbHlSZXNvbHZlVGhlbmFibGUoc2VsZiwgdGhlbmFibGUpIHtcbiAgLy8gRWl0aGVyIGZ1bGZpbGwsIHJlamVjdCBvciByZWplY3Qgd2l0aCBlcnJvclxuICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIG9uRXJyb3IodmFsdWUpIHtcbiAgICBpZiAoY2FsbGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNhbGxlZCA9IHRydWU7XG4gICAgaGFuZGxlcnMucmVqZWN0KHNlbGYsIHZhbHVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uU3VjY2Vzcyh2YWx1ZSkge1xuICAgIGlmIChjYWxsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2FsbGVkID0gdHJ1ZTtcbiAgICBoYW5kbGVycy5yZXNvbHZlKHNlbGYsIHZhbHVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyeVRvVW53cmFwKCkge1xuICAgIHRoZW5hYmxlKG9uU3VjY2Vzcywgb25FcnJvcik7XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gdHJ5Q2F0Y2godHJ5VG9VbndyYXApO1xuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgIG9uRXJyb3IocmVzdWx0LnZhbHVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0cnlDYXRjaChmdW5jLCB2YWx1ZSkge1xuICB2YXIgb3V0ID0ge307XG4gIHRyeSB7XG4gICAgb3V0LnZhbHVlID0gZnVuYyh2YWx1ZSk7XG4gICAgb3V0LnN0YXR1cyA9ICdzdWNjZXNzJztcbiAgfSBjYXRjaCAoZSkge1xuICAgIG91dC5zdGF0dXMgPSAnZXJyb3InO1xuICAgIG91dC52YWx1ZSA9IGU7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuUHJvbWlzZS5yZXNvbHZlID0gcmVzb2x2ZTtcbmZ1bmN0aW9uIHJlc29sdmUodmFsdWUpIHtcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgdGhpcykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByZXR1cm4gaGFuZGxlcnMucmVzb2x2ZShuZXcgdGhpcyhJTlRFUk5BTCksIHZhbHVlKTtcbn1cblxuUHJvbWlzZS5yZWplY3QgPSByZWplY3Q7XG5mdW5jdGlvbiByZWplY3QocmVhc29uKSB7XG4gIHZhciBwcm9taXNlID0gbmV3IHRoaXMoSU5URVJOQUwpO1xuICByZXR1cm4gaGFuZGxlcnMucmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG59XG5cblByb21pc2UuYWxsID0gYWxsO1xuZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyYWJsZSkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICByZXR1cm4gdGhpcy5yZWplY3QobmV3IFR5cGVFcnJvcignbXVzdCBiZSBhbiBhcnJheScpKTtcbiAgfVxuXG4gIHZhciBsZW4gPSBpdGVyYWJsZS5sZW5ndGg7XG4gIHZhciBjYWxsZWQgPSBmYWxzZTtcbiAgaWYgKCFsZW4pIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlKFtdKTtcbiAgfVxuXG4gIHZhciB2YWx1ZXMgPSBuZXcgQXJyYXkobGVuKTtcbiAgdmFyIHJlc29sdmVkID0gMDtcbiAgdmFyIGkgPSAtMTtcbiAgdmFyIHByb21pc2UgPSBuZXcgdGhpcyhJTlRFUk5BTCk7XG5cbiAgd2hpbGUgKCsraSA8IGxlbikge1xuICAgIGFsbFJlc29sdmVyKGl0ZXJhYmxlW2ldLCBpKTtcbiAgfVxuICByZXR1cm4gcHJvbWlzZTtcbiAgZnVuY3Rpb24gYWxsUmVzb2x2ZXIodmFsdWUsIGkpIHtcbiAgICBzZWxmLnJlc29sdmUodmFsdWUpLnRoZW4ocmVzb2x2ZUZyb21BbGwsIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgaGFuZGxlcnMucmVqZWN0KHByb21pc2UsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBmdW5jdGlvbiByZXNvbHZlRnJvbUFsbChvdXRWYWx1ZSkge1xuICAgICAgdmFsdWVzW2ldID0gb3V0VmFsdWU7XG4gICAgICBpZiAoKytyZXNvbHZlZCA9PT0gbGVuICYmICFjYWxsZWQpIHtcbiAgICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgaGFuZGxlcnMucmVzb2x2ZShwcm9taXNlLCB2YWx1ZXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5Qcm9taXNlLnJhY2UgPSByYWNlO1xuZnVuY3Rpb24gcmFjZShpdGVyYWJsZSkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcmFibGUpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ211c3QgYmUgYW4gYXJyYXknKSk7XG4gIH1cblxuICB2YXIgbGVuID0gaXRlcmFibGUubGVuZ3RoO1xuICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gIGlmICghbGVuKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZShbXSk7XG4gIH1cblxuICB2YXIgaSA9IC0xO1xuICB2YXIgcHJvbWlzZSA9IG5ldyB0aGlzKElOVEVSTkFMKTtcblxuICB3aGlsZSAoKytpIDwgbGVuKSB7XG4gICAgcmVzb2x2ZXIoaXRlcmFibGVbaV0pO1xuICB9XG4gIHJldHVybiBwcm9taXNlO1xuICBmdW5jdGlvbiByZXNvbHZlcih2YWx1ZSkge1xuICAgIHNlbGYucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIGlmICghY2FsbGVkKSB7XG4gICAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICAgIGhhbmRsZXJzLnJlc29sdmUocHJvbWlzZSwgcmVzcG9uc2UpO1xuICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgaGFuZGxlcnMucmVqZWN0KHByb21pc2UsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG59LHtcIjFcIjoxfV0sMzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4oZnVuY3Rpb24gKGdsb2JhbCl7XG4ndXNlIHN0cmljdCc7XG5pZiAodHlwZW9mIGdsb2JhbC5Qcm9taXNlICE9PSAnZnVuY3Rpb24nKSB7XG4gIGdsb2JhbC5Qcm9taXNlID0gX2RlcmVxXygyKTtcbn1cblxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG59LHtcIjJcIjoyfV0sNDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gZ2V0SURCKCkge1xuICAgIC8qIGdsb2JhbCBpbmRleGVkREIsd2Via2l0SW5kZXhlZERCLG1vekluZGV4ZWREQixPSW5kZXhlZERCLG1zSW5kZXhlZERCICovXG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBpbmRleGVkREIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXhlZERCO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2Via2l0SW5kZXhlZERCICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHdlYmtpdEluZGV4ZWREQjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG1vekluZGV4ZWREQiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBtb3pJbmRleGVkREI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBPSW5kZXhlZERCICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIE9JbmRleGVkREI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBtc0luZGV4ZWREQiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBtc0luZGV4ZWREQjtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cblxudmFyIGlkYiA9IGdldElEQigpO1xuXG5mdW5jdGlvbiBpc0luZGV4ZWREQlZhbGlkKCkge1xuICAgIHRyeSB7XG4gICAgICAgIC8vIEluaXRpYWxpemUgSW5kZXhlZERCOyBmYWxsIGJhY2sgdG8gdmVuZG9yLXByZWZpeGVkIHZlcnNpb25zXG4gICAgICAgIC8vIGlmIG5lZWRlZC5cbiAgICAgICAgaWYgKCFpZGIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBtaW1pYyBQb3VjaERCIGhlcmU7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIFdlIHRlc3QgZm9yIG9wZW5EYXRhYmFzZSBiZWNhdXNlIElFIE1vYmlsZSBpZGVudGlmaWVzIGl0c2VsZlxuICAgICAgICAvLyBhcyBTYWZhcmkuIE9oIHRoZSBsdWx6Li4uXG4gICAgICAgIHZhciBpc1NhZmFyaSA9IHR5cGVvZiBvcGVuRGF0YWJhc2UgIT09ICd1bmRlZmluZWQnICYmIC8oU2FmYXJpfGlQaG9uZXxpUGFkfGlQb2QpLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICEvQ2hyb21lLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICEvQmxhY2tCZXJyeS8udGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pO1xuXG4gICAgICAgIHZhciBoYXNGZXRjaCA9IHR5cGVvZiBmZXRjaCA9PT0gJ2Z1bmN0aW9uJyAmJiBmZXRjaC50b1N0cmluZygpLmluZGV4T2YoJ1tuYXRpdmUgY29kZScpICE9PSAtMTtcblxuICAgICAgICAvLyBTYWZhcmkgPDEwLjEgZG9lcyBub3QgbWVldCBvdXIgcmVxdWlyZW1lbnRzIGZvciBJREIgc3VwcG9ydCAoIzU1NzIpXG4gICAgICAgIC8vIHNpbmNlIFNhZmFyaSAxMC4xIHNoaXBwZWQgd2l0aCBmZXRjaCwgd2UgY2FuIHVzZSB0aGF0IHRvIGRldGVjdCBpdFxuICAgICAgICByZXR1cm4gKCFpc1NhZmFyaSB8fCBoYXNGZXRjaCkgJiYgdHlwZW9mIGluZGV4ZWREQiAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgLy8gc29tZSBvdXRkYXRlZCBpbXBsZW1lbnRhdGlvbnMgb2YgSURCIHRoYXQgYXBwZWFyIG9uIFNhbXN1bmdcbiAgICAgICAgLy8gYW5kIEhUQyBBbmRyb2lkIGRldmljZXMgPDQuNCBhcmUgbWlzc2luZyBJREJLZXlSYW5nZVxuICAgICAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2xvY2FsRm9yYWdlL2lzc3Vlcy8xMjhcbiAgICAgICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9sb2NhbEZvcmFnZS9pc3N1ZXMvMjcyXG4gICAgICAgIHR5cGVvZiBJREJLZXlSYW5nZSAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG4vLyBBYnN0cmFjdHMgY29uc3RydWN0aW5nIGEgQmxvYiBvYmplY3QsIHNvIGl0IGFsc28gd29ya3MgaW4gb2xkZXJcbi8vIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCB0aGUgbmF0aXZlIEJsb2IgY29uc3RydWN0b3IuIChpLmUuXG4vLyBvbGQgUXRXZWJLaXQgdmVyc2lvbnMsIGF0IGxlYXN0KS5cbi8vIEFic3RyYWN0cyBjb25zdHJ1Y3RpbmcgYSBCbG9iIG9iamVjdCwgc28gaXQgYWxzbyB3b3JrcyBpbiBvbGRlclxuLy8gYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IHRoZSBuYXRpdmUgQmxvYiBjb25zdHJ1Y3Rvci4gKGkuZS5cbi8vIG9sZCBRdFdlYktpdCB2ZXJzaW9ucywgYXQgbGVhc3QpLlxuZnVuY3Rpb24gY3JlYXRlQmxvYihwYXJ0cywgcHJvcGVydGllcykge1xuICAgIC8qIGdsb2JhbCBCbG9iQnVpbGRlcixNU0Jsb2JCdWlsZGVyLE1vekJsb2JCdWlsZGVyLFdlYktpdEJsb2JCdWlsZGVyICovXG4gICAgcGFydHMgPSBwYXJ0cyB8fCBbXTtcbiAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllcyB8fCB7fTtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gbmV3IEJsb2IocGFydHMsIHByb3BlcnRpZXMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGUubmFtZSAhPT0gJ1R5cGVFcnJvcicpIHtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIEJ1aWxkZXIgPSB0eXBlb2YgQmxvYkJ1aWxkZXIgIT09ICd1bmRlZmluZWQnID8gQmxvYkJ1aWxkZXIgOiB0eXBlb2YgTVNCbG9iQnVpbGRlciAhPT0gJ3VuZGVmaW5lZCcgPyBNU0Jsb2JCdWlsZGVyIDogdHlwZW9mIE1vekJsb2JCdWlsZGVyICE9PSAndW5kZWZpbmVkJyA/IE1vekJsb2JCdWlsZGVyIDogV2ViS2l0QmxvYkJ1aWxkZXI7XG4gICAgICAgIHZhciBidWlsZGVyID0gbmV3IEJ1aWxkZXIoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgYnVpbGRlci5hcHBlbmQocGFydHNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidWlsZGVyLmdldEJsb2IocHJvcGVydGllcy50eXBlKTtcbiAgICB9XG59XG5cbi8vIFRoaXMgaXMgQ29tbW9uSlMgYmVjYXVzZSBsaWUgaXMgYW4gZXh0ZXJuYWwgZGVwZW5kZW5jeSwgc28gUm9sbHVwXG4vLyBjYW4ganVzdCBpZ25vcmUgaXQuXG5pZiAodHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gSW4gdGhlIFwibm9wcm9taXNlc1wiIGJ1aWxkIHRoaXMgd2lsbCBqdXN0IHRocm93IGlmIHlvdSBkb24ndCBoYXZlXG4gICAgLy8gYSBnbG9iYWwgcHJvbWlzZSBvYmplY3QsIGJ1dCBpdCB3b3VsZCB0aHJvdyBhbnl3YXkgbGF0ZXIuXG4gICAgX2RlcmVxXygzKTtcbn1cbnZhciBQcm9taXNlJDEgPSBQcm9taXNlO1xuXG5mdW5jdGlvbiBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVUd29DYWxsYmFja3MocHJvbWlzZSwgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByb21pc2UudGhlbihjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBlcnJvckNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByb21pc2VbXCJjYXRjaFwiXShlcnJvckNhbGxiYWNrKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUtleShrZXkpIHtcbiAgICAvLyBDYXN0IHRoZSBrZXkgdG8gYSBzdHJpbmcsIGFzIHRoYXQncyBhbGwgd2UgY2FuIHNldCBhcyBhIGtleS5cbiAgICBpZiAodHlwZW9mIGtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGtleSArICcgdXNlZCBhcyBhIGtleSwgYnV0IGl0IGlzIG5vdCBhIHN0cmluZy4nKTtcbiAgICAgICAga2V5ID0gU3RyaW5nKGtleSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGtleTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2FsbGJhY2soKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggJiYgdHlwZW9mIGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV07XG4gICAgfVxufVxuXG4vLyBTb21lIGNvZGUgb3JpZ2luYWxseSBmcm9tIGFzeW5jX3N0b3JhZ2UuanMgaW5cbi8vIFtHYWlhXShodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS1iMmcvZ2FpYSkuXG5cbnZhciBERVRFQ1RfQkxPQl9TVVBQT1JUX1NUT1JFID0gJ2xvY2FsLWZvcmFnZS1kZXRlY3QtYmxvYi1zdXBwb3J0JztcbnZhciBzdXBwb3J0c0Jsb2JzID0gdm9pZCAwO1xudmFyIGRiQ29udGV4dHMgPSB7fTtcbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8vIFRyYW5zYWN0aW9uIE1vZGVzXG52YXIgUkVBRF9PTkxZID0gJ3JlYWRvbmx5JztcbnZhciBSRUFEX1dSSVRFID0gJ3JlYWR3cml0ZSc7XG5cbi8vIFRyYW5zZm9ybSBhIGJpbmFyeSBzdHJpbmcgdG8gYW4gYXJyYXkgYnVmZmVyLCBiZWNhdXNlIG90aGVyd2lzZVxuLy8gd2VpcmQgc3R1ZmYgaGFwcGVucyB3aGVuIHlvdSB0cnkgdG8gd29yayB3aXRoIHRoZSBiaW5hcnkgc3RyaW5nIGRpcmVjdGx5LlxuLy8gSXQgaXMga25vd24uXG4vLyBGcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTQ5Njc2NDcvIChjb250aW51ZXMgb24gbmV4dCBsaW5lKVxuLy8gZW5jb2RlLWRlY29kZS1pbWFnZS13aXRoLWJhc2U2NC1icmVha3MtaW1hZ2UgKDIwMTMtMDQtMjEpXG5mdW5jdGlvbiBfYmluU3RyaW5nVG9BcnJheUJ1ZmZlcihiaW4pIHtcbiAgICB2YXIgbGVuZ3RoID0gYmluLmxlbmd0aDtcbiAgICB2YXIgYnVmID0gbmV3IEFycmF5QnVmZmVyKGxlbmd0aCk7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KGJ1Zik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBhcnJbaV0gPSBiaW4uY2hhckNvZGVBdChpKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1Zjtcbn1cblxuLy9cbi8vIEJsb2JzIGFyZSBub3Qgc3VwcG9ydGVkIGluIGFsbCB2ZXJzaW9ucyBvZiBJbmRleGVkREIsIG5vdGFibHlcbi8vIENocm9tZSA8MzcgYW5kIEFuZHJvaWQgPDUuIEluIHRob3NlIHZlcnNpb25zLCBzdG9yaW5nIGEgYmxvYiB3aWxsIHRocm93LlxuLy9cbi8vIFZhcmlvdXMgb3RoZXIgYmxvYiBidWdzIGV4aXN0IGluIENocm9tZSB2MzctNDIgKGluY2x1c2l2ZSkuXG4vLyBEZXRlY3RpbmcgdGhlbSBpcyBleHBlbnNpdmUgYW5kIGNvbmZ1c2luZyB0byB1c2VycywgYW5kIENocm9tZSAzNy00MlxuLy8gaXMgYXQgdmVyeSBsb3cgdXNhZ2Ugd29ybGR3aWRlLCBzbyB3ZSBkbyBhIGhhY2t5IHVzZXJBZ2VudCBjaGVjayBpbnN0ZWFkLlxuLy9cbi8vIGNvbnRlbnQtdHlwZSBidWc6IGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00MDgxMjBcbi8vIDQwNCBidWc6IGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NDc5MTZcbi8vIEZpbGVSZWFkZXIgYnVnOiBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDQ3ODM2XG4vL1xuLy8gQ29kZSBib3Jyb3dlZCBmcm9tIFBvdWNoREIuIFNlZTpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3VjaGRiL3BvdWNoZGIvYmxvYi9tYXN0ZXIvcGFja2FnZXMvbm9kZV9tb2R1bGVzL3BvdWNoZGItYWRhcHRlci1pZGIvc3JjL2Jsb2JTdXBwb3J0LmpzXG4vL1xuZnVuY3Rpb24gX2NoZWNrQmxvYlN1cHBvcnRXaXRob3V0Q2FjaGluZyhpZGIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICB2YXIgdHhuID0gaWRiLnRyYW5zYWN0aW9uKERFVEVDVF9CTE9CX1NVUFBPUlRfU1RPUkUsIFJFQURfV1JJVEUpO1xuICAgICAgICB2YXIgYmxvYiA9IGNyZWF0ZUJsb2IoWycnXSk7XG4gICAgICAgIHR4bi5vYmplY3RTdG9yZShERVRFQ1RfQkxPQl9TVVBQT1JUX1NUT1JFKS5wdXQoYmxvYiwgJ2tleScpO1xuXG4gICAgICAgIHR4bi5vbmFib3J0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSB0cmFuc2FjdGlvbiBhYm9ydHMgbm93IGl0cyBkdWUgdG8gbm90IGJlaW5nIGFibGUgdG9cbiAgICAgICAgICAgIC8vIHdyaXRlIHRvIHRoZSBkYXRhYmFzZSwgbGlrZWx5IGR1ZSB0byB0aGUgZGlzayBiZWluZyBmdWxsXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdHhuLm9uY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbWF0Y2hlZENocm9tZSA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0Nocm9tZVxcLyhcXGQrKS8pO1xuICAgICAgICAgICAgdmFyIG1hdGNoZWRFZGdlID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvRWRnZVxcLy8pO1xuICAgICAgICAgICAgLy8gTVMgRWRnZSBwcmV0ZW5kcyB0byBiZSBDaHJvbWUgNDI6XG4gICAgICAgICAgICAvLyBodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2hoODY5MzAxJTI4dj12cy44NSUyOS5hc3B4XG4gICAgICAgICAgICByZXNvbHZlKG1hdGNoZWRFZGdlIHx8ICFtYXRjaGVkQ2hyb21lIHx8IHBhcnNlSW50KG1hdGNoZWRDaHJvbWVbMV0sIDEwKSA+PSA0Myk7XG4gICAgICAgIH07XG4gICAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gZXJyb3IsIHNvIGFzc3VtZSB1bnN1cHBvcnRlZFxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBfY2hlY2tCbG9iU3VwcG9ydChpZGIpIHtcbiAgICBpZiAodHlwZW9mIHN1cHBvcnRzQmxvYnMgPT09ICdib29sZWFuJykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZSQxLnJlc29sdmUoc3VwcG9ydHNCbG9icyk7XG4gICAgfVxuICAgIHJldHVybiBfY2hlY2tCbG9iU3VwcG9ydFdpdGhvdXRDYWNoaW5nKGlkYikudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgc3VwcG9ydHNCbG9icyA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gc3VwcG9ydHNCbG9icztcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gX2RlZmVyUmVhZGluZXNzKGRiSW5mbykge1xuICAgIHZhciBkYkNvbnRleHQgPSBkYkNvbnRleHRzW2RiSW5mby5uYW1lXTtcblxuICAgIC8vIENyZWF0ZSBhIGRlZmVycmVkIG9iamVjdCByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgZGF0YWJhc2Ugb3BlcmF0aW9uLlxuICAgIHZhciBkZWZlcnJlZE9wZXJhdGlvbiA9IHt9O1xuXG4gICAgZGVmZXJyZWRPcGVyYXRpb24ucHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBkZWZlcnJlZE9wZXJhdGlvbi5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgZGVmZXJyZWRPcGVyYXRpb24ucmVqZWN0ID0gcmVqZWN0O1xuICAgIH0pO1xuXG4gICAgLy8gRW5xdWV1ZSB0aGUgZGVmZXJyZWQgb3BlcmF0aW9uLlxuICAgIGRiQ29udGV4dC5kZWZlcnJlZE9wZXJhdGlvbnMucHVzaChkZWZlcnJlZE9wZXJhdGlvbik7XG5cbiAgICAvLyBDaGFpbiBpdHMgcHJvbWlzZSB0byB0aGUgZGF0YWJhc2UgcmVhZGluZXNzLlxuICAgIGlmICghZGJDb250ZXh0LmRiUmVhZHkpIHtcbiAgICAgICAgZGJDb250ZXh0LmRiUmVhZHkgPSBkZWZlcnJlZE9wZXJhdGlvbi5wcm9taXNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRiQ29udGV4dC5kYlJlYWR5ID0gZGJDb250ZXh0LmRiUmVhZHkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWRPcGVyYXRpb24ucHJvbWlzZTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBfYWR2YW5jZVJlYWRpbmVzcyhkYkluZm8pIHtcbiAgICB2YXIgZGJDb250ZXh0ID0gZGJDb250ZXh0c1tkYkluZm8ubmFtZV07XG5cbiAgICAvLyBEZXF1ZXVlIGEgZGVmZXJyZWQgb3BlcmF0aW9uLlxuICAgIHZhciBkZWZlcnJlZE9wZXJhdGlvbiA9IGRiQ29udGV4dC5kZWZlcnJlZE9wZXJhdGlvbnMucG9wKCk7XG5cbiAgICAvLyBSZXNvbHZlIGl0cyBwcm9taXNlICh3aGljaCBpcyBwYXJ0IG9mIHRoZSBkYXRhYmFzZSByZWFkaW5lc3NcbiAgICAvLyBjaGFpbiBvZiBwcm9taXNlcykuXG4gICAgaWYgKGRlZmVycmVkT3BlcmF0aW9uKSB7XG4gICAgICAgIGRlZmVycmVkT3BlcmF0aW9uLnJlc29sdmUoKTtcbiAgICAgICAgcmV0dXJuIGRlZmVycmVkT3BlcmF0aW9uLnByb21pc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBfcmVqZWN0UmVhZGluZXNzKGRiSW5mbywgZXJyKSB7XG4gICAgdmFyIGRiQ29udGV4dCA9IGRiQ29udGV4dHNbZGJJbmZvLm5hbWVdO1xuXG4gICAgLy8gRGVxdWV1ZSBhIGRlZmVycmVkIG9wZXJhdGlvbi5cbiAgICB2YXIgZGVmZXJyZWRPcGVyYXRpb24gPSBkYkNvbnRleHQuZGVmZXJyZWRPcGVyYXRpb25zLnBvcCgpO1xuXG4gICAgLy8gUmVqZWN0IGl0cyBwcm9taXNlICh3aGljaCBpcyBwYXJ0IG9mIHRoZSBkYXRhYmFzZSByZWFkaW5lc3NcbiAgICAvLyBjaGFpbiBvZiBwcm9taXNlcykuXG4gICAgaWYgKGRlZmVycmVkT3BlcmF0aW9uKSB7XG4gICAgICAgIGRlZmVycmVkT3BlcmF0aW9uLnJlamVjdChlcnIpO1xuICAgICAgICByZXR1cm4gZGVmZXJyZWRPcGVyYXRpb24ucHJvbWlzZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIF9nZXRDb25uZWN0aW9uKGRiSW5mbywgdXBncmFkZU5lZWRlZCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZGJDb250ZXh0c1tkYkluZm8ubmFtZV0gPSBkYkNvbnRleHRzW2RiSW5mby5uYW1lXSB8fCBjcmVhdGVEYkNvbnRleHQoKTtcblxuICAgICAgICBpZiAoZGJJbmZvLmRiKSB7XG4gICAgICAgICAgICBpZiAodXBncmFkZU5lZWRlZCkge1xuICAgICAgICAgICAgICAgIF9kZWZlclJlYWRpbmVzcyhkYkluZm8pO1xuICAgICAgICAgICAgICAgIGRiSW5mby5kYi5jbG9zZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShkYkluZm8uZGIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRiQXJncyA9IFtkYkluZm8ubmFtZV07XG5cbiAgICAgICAgaWYgKHVwZ3JhZGVOZWVkZWQpIHtcbiAgICAgICAgICAgIGRiQXJncy5wdXNoKGRiSW5mby52ZXJzaW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvcGVucmVxID0gaWRiLm9wZW4uYXBwbHkoaWRiLCBkYkFyZ3MpO1xuXG4gICAgICAgIGlmICh1cGdyYWRlTmVlZGVkKSB7XG4gICAgICAgICAgICBvcGVucmVxLm9udXBncmFkZW5lZWRlZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRiID0gb3BlbnJlcS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZGIuY3JlYXRlT2JqZWN0U3RvcmUoZGJJbmZvLnN0b3JlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLm9sZFZlcnNpb24gPD0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkZWQgd2hlbiBzdXBwb3J0IGZvciBibG9iIHNoaW1zIHdhcyBhZGRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgZGIuY3JlYXRlT2JqZWN0U3RvcmUoREVURUNUX0JMT0JfU1VQUE9SVF9TVE9SRSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXgubmFtZSA9PT0gJ0NvbnN0cmFpbnRFcnJvcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignVGhlIGRhdGFiYXNlIFwiJyArIGRiSW5mby5uYW1lICsgJ1wiJyArICcgaGFzIGJlZW4gdXBncmFkZWQgZnJvbSB2ZXJzaW9uICcgKyBlLm9sZFZlcnNpb24gKyAnIHRvIHZlcnNpb24gJyArIGUubmV3VmVyc2lvbiArICcsIGJ1dCB0aGUgc3RvcmFnZSBcIicgKyBkYkluZm8uc3RvcmVOYW1lICsgJ1wiIGFscmVhZHkgZXhpc3RzLicpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgb3BlbnJlcS5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJlamVjdChvcGVucmVxLmVycm9yKTtcbiAgICAgICAgfTtcblxuICAgICAgICBvcGVucmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJlc29sdmUob3BlbnJlcS5yZXN1bHQpO1xuICAgICAgICAgICAgX2FkdmFuY2VSZWFkaW5lc3MoZGJJbmZvKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gX2dldE9yaWdpbmFsQ29ubmVjdGlvbihkYkluZm8pIHtcbiAgICByZXR1cm4gX2dldENvbm5lY3Rpb24oZGJJbmZvLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIF9nZXRVcGdyYWRlZENvbm5lY3Rpb24oZGJJbmZvKSB7XG4gICAgcmV0dXJuIF9nZXRDb25uZWN0aW9uKGRiSW5mbywgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIF9pc1VwZ3JhZGVOZWVkZWQoZGJJbmZvLCBkZWZhdWx0VmVyc2lvbikge1xuICAgIGlmICghZGJJbmZvLmRiKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciBpc05ld1N0b3JlID0gIWRiSW5mby5kYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKGRiSW5mby5zdG9yZU5hbWUpO1xuICAgIHZhciBpc0Rvd25ncmFkZSA9IGRiSW5mby52ZXJzaW9uIDwgZGJJbmZvLmRiLnZlcnNpb247XG4gICAgdmFyIGlzVXBncmFkZSA9IGRiSW5mby52ZXJzaW9uID4gZGJJbmZvLmRiLnZlcnNpb247XG5cbiAgICBpZiAoaXNEb3duZ3JhZGUpIHtcbiAgICAgICAgLy8gSWYgdGhlIHZlcnNpb24gaXMgbm90IHRoZSBkZWZhdWx0IG9uZVxuICAgICAgICAvLyB0aGVuIHdhcm4gZm9yIGltcG9zc2libGUgZG93bmdyYWRlLlxuICAgICAgICBpZiAoZGJJbmZvLnZlcnNpb24gIT09IGRlZmF1bHRWZXJzaW9uKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBkYXRhYmFzZSBcIicgKyBkYkluZm8ubmFtZSArICdcIicgKyBcIiBjYW4ndCBiZSBkb3duZ3JhZGVkIGZyb20gdmVyc2lvbiBcIiArIGRiSW5mby5kYi52ZXJzaW9uICsgJyB0byB2ZXJzaW9uICcgKyBkYkluZm8udmVyc2lvbiArICcuJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWxpZ24gdGhlIHZlcnNpb25zIHRvIHByZXZlbnQgZXJyb3JzLlxuICAgICAgICBkYkluZm8udmVyc2lvbiA9IGRiSW5mby5kYi52ZXJzaW9uO1xuICAgIH1cblxuICAgIGlmIChpc1VwZ3JhZGUgfHwgaXNOZXdTdG9yZSkge1xuICAgICAgICAvLyBJZiB0aGUgc3RvcmUgaXMgbmV3IHRoZW4gaW5jcmVtZW50IHRoZSB2ZXJzaW9uIChpZiBuZWVkZWQpLlxuICAgICAgICAvLyBUaGlzIHdpbGwgdHJpZ2dlciBhbiBcInVwZ3JhZGVuZWVkZWRcIiBldmVudCB3aGljaCBpcyByZXF1aXJlZFxuICAgICAgICAvLyBmb3IgY3JlYXRpbmcgYSBzdG9yZS5cbiAgICAgICAgaWYgKGlzTmV3U3RvcmUpIHtcbiAgICAgICAgICAgIHZhciBpbmNWZXJzaW9uID0gZGJJbmZvLmRiLnZlcnNpb24gKyAxO1xuICAgICAgICAgICAgaWYgKGluY1ZlcnNpb24gPiBkYkluZm8udmVyc2lvbikge1xuICAgICAgICAgICAgICAgIGRiSW5mby52ZXJzaW9uID0gaW5jVmVyc2lvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLy8gZW5jb2RlIGEgYmxvYiBmb3IgaW5kZXhlZGRiIGVuZ2luZXMgdGhhdCBkb24ndCBzdXBwb3J0IGJsb2JzXG5mdW5jdGlvbiBfZW5jb2RlQmxvYihibG9iKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGJhc2U2NCA9IGJ0b2EoZS50YXJnZXQucmVzdWx0IHx8ICcnKTtcbiAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIF9fbG9jYWxfZm9yYWdlX2VuY29kZWRfYmxvYjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkYXRhOiBiYXNlNjQsXG4gICAgICAgICAgICAgICAgdHlwZTogYmxvYi50eXBlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc0JpbmFyeVN0cmluZyhibG9iKTtcbiAgICB9KTtcbn1cblxuLy8gZGVjb2RlIGFuIGVuY29kZWQgYmxvYlxuZnVuY3Rpb24gX2RlY29kZUJsb2IoZW5jb2RlZEJsb2IpIHtcbiAgICB2YXIgYXJyYXlCdWZmID0gX2JpblN0cmluZ1RvQXJyYXlCdWZmZXIoYXRvYihlbmNvZGVkQmxvYi5kYXRhKSk7XG4gICAgcmV0dXJuIGNyZWF0ZUJsb2IoW2FycmF5QnVmZl0sIHsgdHlwZTogZW5jb2RlZEJsb2IudHlwZSB9KTtcbn1cblxuLy8gaXMgdGhpcyBvbmUgb2Ygb3VyIGZhbmN5IGVuY29kZWQgYmxvYnM/XG5mdW5jdGlvbiBfaXNFbmNvZGVkQmxvYih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5fX2xvY2FsX2ZvcmFnZV9lbmNvZGVkX2Jsb2I7XG59XG5cbi8vIFNwZWNpYWxpemUgdGhlIGRlZmF1bHQgYHJlYWR5KClgIGZ1bmN0aW9uIGJ5IG1ha2luZyBpdCBkZXBlbmRlbnRcbi8vIG9uIHRoZSBjdXJyZW50IGRhdGFiYXNlIG9wZXJhdGlvbnMuIFRodXMsIHRoZSBkcml2ZXIgd2lsbCBiZSBhY3R1YWxseVxuLy8gcmVhZHkgd2hlbiBpdCdzIGJlZW4gaW5pdGlhbGl6ZWQgKGRlZmF1bHQpICphbmQqIHRoZXJlIGFyZSBubyBwZW5kaW5nXG4vLyBvcGVyYXRpb25zIG9uIHRoZSBkYXRhYmFzZSAoaW5pdGlhdGVkIGJ5IHNvbWUgb3RoZXIgaW5zdGFuY2VzKS5cbmZ1bmN0aW9uIF9mdWxseVJlYWR5KGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBzZWxmLl9pbml0UmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRiQ29udGV4dCA9IGRiQ29udGV4dHNbc2VsZi5fZGJJbmZvLm5hbWVdO1xuXG4gICAgICAgIGlmIChkYkNvbnRleHQgJiYgZGJDb250ZXh0LmRiUmVhZHkpIHtcbiAgICAgICAgICAgIHJldHVybiBkYkNvbnRleHQuZGJSZWFkeTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZXhlY3V0ZVR3b0NhbGxiYWNrcyhwcm9taXNlLCBjYWxsYmFjaywgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBUcnkgdG8gZXN0YWJsaXNoIGEgbmV3IGRiIGNvbm5lY3Rpb24gdG8gcmVwbGFjZSB0aGVcbi8vIGN1cnJlbnQgb25lIHdoaWNoIGlzIGJyb2tlbiAoaS5lLiBleHBlcmllbmNpbmdcbi8vIEludmFsaWRTdGF0ZUVycm9yIHdoaWxlIGNyZWF0aW5nIGEgdHJhbnNhY3Rpb24pLlxuZnVuY3Rpb24gX3RyeVJlY29ubmVjdChkYkluZm8pIHtcbiAgICBfZGVmZXJSZWFkaW5lc3MoZGJJbmZvKTtcblxuICAgIHZhciBkYkNvbnRleHQgPSBkYkNvbnRleHRzW2RiSW5mby5uYW1lXTtcbiAgICB2YXIgZm9yYWdlcyA9IGRiQ29udGV4dC5mb3JhZ2VzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3JhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBmb3JhZ2UgPSBmb3JhZ2VzW2ldO1xuICAgICAgICBpZiAoZm9yYWdlLl9kYkluZm8uZGIpIHtcbiAgICAgICAgICAgIGZvcmFnZS5fZGJJbmZvLmRiLmNsb3NlKCk7XG4gICAgICAgICAgICBmb3JhZ2UuX2RiSW5mby5kYiA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGJJbmZvLmRiID0gbnVsbDtcblxuICAgIHJldHVybiBfZ2V0T3JpZ2luYWxDb25uZWN0aW9uKGRiSW5mbykudGhlbihmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgZGJJbmZvLmRiID0gZGI7XG4gICAgICAgIGlmIChfaXNVcGdyYWRlTmVlZGVkKGRiSW5mbykpIHtcbiAgICAgICAgICAgIC8vIFJlb3BlbiB0aGUgZGF0YWJhc2UgZm9yIHVwZ3JhZGluZy5cbiAgICAgICAgICAgIHJldHVybiBfZ2V0VXBncmFkZWRDb25uZWN0aW9uKGRiSW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRiO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRiKSB7XG4gICAgICAgIC8vIHN0b3JlIHRoZSBsYXRlc3QgZGIgcmVmZXJlbmNlXG4gICAgICAgIC8vIGluIGNhc2UgdGhlIGRiIHdhcyB1cGdyYWRlZFxuICAgICAgICBkYkluZm8uZGIgPSBkYkNvbnRleHQuZGIgPSBkYjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3JhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3JhZ2VzW2ldLl9kYkluZm8uZGIgPSBkYjtcbiAgICAgICAgfVxuICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKGVycikge1xuICAgICAgICBfcmVqZWN0UmVhZGluZXNzKGRiSW5mbywgZXJyKTtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuXG4vLyBGRiBkb2Vzbid0IGxpa2UgUHJvbWlzZXMgKG1pY3JvLXRhc2tzKSBhbmQgSUREQiBzdG9yZSBvcGVyYXRpb25zLFxuLy8gc28gd2UgaGF2ZSB0byBkbyBpdCB3aXRoIGNhbGxiYWNrc1xuZnVuY3Rpb24gY3JlYXRlVHJhbnNhY3Rpb24oZGJJbmZvLCBtb2RlLCBjYWxsYmFjaywgcmV0cmllcykge1xuICAgIGlmIChyZXRyaWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0cmllcyA9IDE7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIHR4ID0gZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGRiSW5mby5zdG9yZU5hbWUsIG1vZGUpO1xuICAgICAgICBjYWxsYmFjayhudWxsLCB0eCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmIChyZXRyaWVzID4gMCAmJiAoIWRiSW5mby5kYiB8fCBlcnIubmFtZSA9PT0gJ0ludmFsaWRTdGF0ZUVycm9yJyB8fCBlcnIubmFtZSA9PT0gJ05vdEZvdW5kRXJyb3InKSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UkMS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFkYkluZm8uZGIgfHwgZXJyLm5hbWUgPT09ICdOb3RGb3VuZEVycm9yJyAmJiAhZGJJbmZvLmRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoZGJJbmZvLnN0b3JlTmFtZSkgJiYgZGJJbmZvLnZlcnNpb24gPD0gZGJJbmZvLmRiLnZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5jcmVhc2UgdGhlIGRiIHZlcnNpb24sIHRvIGNyZWF0ZSB0aGUgbmV3IE9iamVjdFN0b3JlXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYkluZm8uZGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRiSW5mby52ZXJzaW9uID0gZGJJbmZvLmRiLnZlcnNpb24gKyAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlb3BlbiB0aGUgZGF0YWJhc2UgZm9yIHVwZ3JhZGluZy5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9nZXRVcGdyYWRlZENvbm5lY3Rpb24oZGJJbmZvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RyeVJlY29ubmVjdChkYkluZm8pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVUcmFuc2FjdGlvbihkYkluZm8sIG1vZGUsIGNhbGxiYWNrLCByZXRyaWVzIC0gMSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVtcImNhdGNoXCJdKGNhbGxiYWNrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVEYkNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUnVubmluZyBsb2NhbEZvcmFnZXMgc2hhcmluZyBhIGRhdGFiYXNlLlxuICAgICAgICBmb3JhZ2VzOiBbXSxcbiAgICAgICAgLy8gU2hhcmVkIGRhdGFiYXNlLlxuICAgICAgICBkYjogbnVsbCxcbiAgICAgICAgLy8gRGF0YWJhc2UgcmVhZGluZXNzIChwcm9taXNlKS5cbiAgICAgICAgZGJSZWFkeTogbnVsbCxcbiAgICAgICAgLy8gRGVmZXJyZWQgb3BlcmF0aW9ucyBvbiB0aGUgZGF0YWJhc2UuXG4gICAgICAgIGRlZmVycmVkT3BlcmF0aW9uczogW11cbiAgICB9O1xufVxuXG4vLyBPcGVuIHRoZSBJbmRleGVkREIgZGF0YWJhc2UgKGF1dG9tYXRpY2FsbHkgY3JlYXRlcyBvbmUgaWYgb25lIGRpZG4ndFxuLy8gcHJldmlvdXNseSBleGlzdCksIHVzaW5nIGFueSBvcHRpb25zIHNldCBpbiB0aGUgY29uZmlnLlxuZnVuY3Rpb24gX2luaXRTdG9yYWdlKG9wdGlvbnMpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGRiSW5mbyA9IHtcbiAgICAgICAgZGI6IG51bGxcbiAgICB9O1xuXG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICBkYkluZm9baV0gPSBvcHRpb25zW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBjdXJyZW50IGNvbnRleHQgb2YgdGhlIGRhdGFiYXNlO1xuICAgIHZhciBkYkNvbnRleHQgPSBkYkNvbnRleHRzW2RiSW5mby5uYW1lXTtcblxuICAgIC8vIC4uLm9yIGNyZWF0ZSBhIG5ldyBjb250ZXh0LlxuICAgIGlmICghZGJDb250ZXh0KSB7XG4gICAgICAgIGRiQ29udGV4dCA9IGNyZWF0ZURiQ29udGV4dCgpO1xuICAgICAgICAvLyBSZWdpc3RlciB0aGUgbmV3IGNvbnRleHQgaW4gdGhlIGdsb2JhbCBjb250YWluZXIuXG4gICAgICAgIGRiQ29udGV4dHNbZGJJbmZvLm5hbWVdID0gZGJDb250ZXh0O1xuICAgIH1cblxuICAgIC8vIFJlZ2lzdGVyIGl0c2VsZiBhcyBhIHJ1bm5pbmcgbG9jYWxGb3JhZ2UgaW4gdGhlIGN1cnJlbnQgY29udGV4dC5cbiAgICBkYkNvbnRleHQuZm9yYWdlcy5wdXNoKHNlbGYpO1xuXG4gICAgLy8gUmVwbGFjZSB0aGUgZGVmYXVsdCBgcmVhZHkoKWAgZnVuY3Rpb24gd2l0aCB0aGUgc3BlY2lhbGl6ZWQgb25lLlxuICAgIGlmICghc2VsZi5faW5pdFJlYWR5KSB7XG4gICAgICAgIHNlbGYuX2luaXRSZWFkeSA9IHNlbGYucmVhZHk7XG4gICAgICAgIHNlbGYucmVhZHkgPSBfZnVsbHlSZWFkeTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgYW4gYXJyYXkgb2YgaW5pdGlhbGl6YXRpb24gc3RhdGVzIG9mIHRoZSByZWxhdGVkIGxvY2FsRm9yYWdlcy5cbiAgICB2YXIgaW5pdFByb21pc2VzID0gW107XG5cbiAgICBmdW5jdGlvbiBpZ25vcmVFcnJvcnMoKSB7XG4gICAgICAgIC8vIERvbid0IGhhbmRsZSBlcnJvcnMgaGVyZSxcbiAgICAgICAgLy8ganVzdCBtYWtlcyBzdXJlIHJlbGF0ZWQgbG9jYWxGb3JhZ2VzIGFyZW4ndCBwZW5kaW5nLlxuICAgICAgICByZXR1cm4gUHJvbWlzZSQxLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRiQ29udGV4dC5mb3JhZ2VzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHZhciBmb3JhZ2UgPSBkYkNvbnRleHQuZm9yYWdlc1tqXTtcbiAgICAgICAgaWYgKGZvcmFnZSAhPT0gc2VsZikge1xuICAgICAgICAgICAgLy8gRG9uJ3Qgd2FpdCBmb3IgaXRzZWxmLi4uXG4gICAgICAgICAgICBpbml0UHJvbWlzZXMucHVzaChmb3JhZ2UuX2luaXRSZWFkeSgpW1wiY2F0Y2hcIl0oaWdub3JlRXJyb3JzKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUYWtlIGEgc25hcHNob3Qgb2YgdGhlIHJlbGF0ZWQgbG9jYWxGb3JhZ2VzLlxuICAgIHZhciBmb3JhZ2VzID0gZGJDb250ZXh0LmZvcmFnZXMuc2xpY2UoMCk7XG5cbiAgICAvLyBJbml0aWFsaXplIHRoZSBjb25uZWN0aW9uIHByb2Nlc3Mgb25seSB3aGVuXG4gICAgLy8gYWxsIHRoZSByZWxhdGVkIGxvY2FsRm9yYWdlcyBhcmVuJ3QgcGVuZGluZy5cbiAgICByZXR1cm4gUHJvbWlzZSQxLmFsbChpbml0UHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBkYkluZm8uZGIgPSBkYkNvbnRleHQuZGI7XG4gICAgICAgIC8vIEdldCB0aGUgY29ubmVjdGlvbiBvciBvcGVuIGEgbmV3IG9uZSB3aXRob3V0IHVwZ3JhZGUuXG4gICAgICAgIHJldHVybiBfZ2V0T3JpZ2luYWxDb25uZWN0aW9uKGRiSW5mbyk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgZGJJbmZvLmRiID0gZGI7XG4gICAgICAgIGlmIChfaXNVcGdyYWRlTmVlZGVkKGRiSW5mbywgc2VsZi5fZGVmYXVsdENvbmZpZy52ZXJzaW9uKSkge1xuICAgICAgICAgICAgLy8gUmVvcGVuIHRoZSBkYXRhYmFzZSBmb3IgdXBncmFkaW5nLlxuICAgICAgICAgICAgcmV0dXJuIF9nZXRVcGdyYWRlZENvbm5lY3Rpb24oZGJJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGI7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgZGJJbmZvLmRiID0gZGJDb250ZXh0LmRiID0gZGI7XG4gICAgICAgIHNlbGYuX2RiSW5mbyA9IGRiSW5mbztcbiAgICAgICAgLy8gU2hhcmUgdGhlIGZpbmFsIGNvbm5lY3Rpb24gYW1vbmdzdCByZWxhdGVkIGxvY2FsRm9yYWdlcy5cbiAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBmb3JhZ2VzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICB2YXIgZm9yYWdlID0gZm9yYWdlc1trXTtcbiAgICAgICAgICAgIGlmIChmb3JhZ2UgIT09IHNlbGYpIHtcbiAgICAgICAgICAgICAgICAvLyBTZWxmIGlzIGFscmVhZHkgdXAtdG8tZGF0ZS5cbiAgICAgICAgICAgICAgICBmb3JhZ2UuX2RiSW5mby5kYiA9IGRiSW5mby5kYjtcbiAgICAgICAgICAgICAgICBmb3JhZ2UuX2RiSW5mby52ZXJzaW9uID0gZGJJbmZvLnZlcnNpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0SXRlbShrZXksIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAga2V5ID0gbm9ybWFsaXplS2V5KGtleSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjcmVhdGVUcmFuc2FjdGlvbihzZWxmLl9kYkluZm8sIFJFQURfT05MWSwgZnVuY3Rpb24gKGVyciwgdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzZWxmLl9kYkluZm8uc3RvcmVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcSA9IHN0b3JlLmdldChrZXkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSByZXEucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2lzRW5jb2RlZEJsb2IodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBfZGVjb2RlQmxvYih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXEuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBJdGVyYXRlIG92ZXIgYWxsIGl0ZW1zIHN0b3JlZCBpbiBkYXRhYmFzZS5cbmZ1bmN0aW9uIGl0ZXJhdGUoaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3JlYXRlVHJhbnNhY3Rpb24oc2VsZi5fZGJJbmZvLCBSRUFEX09OTFksIGZ1bmN0aW9uIChlcnIsIHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc2VsZi5fZGJJbmZvLnN0b3JlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXEgPSBzdG9yZS5vcGVuQ3Vyc29yKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVyYXRpb25OdW1iZXIgPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3Vyc29yID0gcmVxLnJlc3VsdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnNvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGN1cnNvci52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2lzRW5jb2RlZEJsb2IodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gX2RlY29kZUJsb2IodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gaXRlcmF0b3IodmFsdWUsIGN1cnNvci5rZXksIGl0ZXJhdGlvbk51bWJlcisrKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gdGhlIGl0ZXJhdG9yIGNhbGxiYWNrIHJldHVucyBhbnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAobm9uLWB1bmRlZmluZWRgKSB2YWx1ZSwgdGhlbiB3ZSBzdG9wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGl0ZXJhdGlvbiBpbW1lZGlhdGVseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yW1wiY29udGludWVcIl0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXEuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIHNldEl0ZW0oa2V5LCB2YWx1ZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBrZXkgPSBub3JtYWxpemVLZXkoa2V5KTtcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBkYkluZm87XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgICAgIGlmICh0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQmxvYl0nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jaGVja0Jsb2JTdXBwb3J0KGRiSW5mby5kYikudGhlbihmdW5jdGlvbiAoYmxvYlN1cHBvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2JTdXBwb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9lbmNvZGVCbG9iKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGNyZWF0ZVRyYW5zYWN0aW9uKHNlbGYuX2RiSW5mbywgUkVBRF9XUklURSwgZnVuY3Rpb24gKGVyciwgdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzZWxmLl9kYkluZm8uc3RvcmVOYW1lKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgcmVhc29uIHdlIGRvbid0IF9zYXZlXyBudWxsIGlzIGJlY2F1c2UgSUUgMTAgZG9lc1xuICAgICAgICAgICAgICAgICAgICAvLyBub3Qgc3VwcG9ydCBzYXZpbmcgdGhlIGBudWxsYCB0eXBlIGluIEluZGV4ZWREQi4gSG93XG4gICAgICAgICAgICAgICAgICAgIC8vIGlyb25pYywgZ2l2ZW4gdGhlIGJ1ZyBiZWxvdyFcbiAgICAgICAgICAgICAgICAgICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9sb2NhbEZvcmFnZS9pc3N1ZXMvMTYxXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVxID0gc3RvcmUucHV0KHZhbHVlLCBrZXkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDYXN0IHRvIHVuZGVmaW5lZCBzbyB0aGUgdmFsdWUgcGFzc2VkIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYWxsYmFjay9wcm9taXNlIGlzIHRoZSBzYW1lIGFzIHdoYXQgb25lIHdvdWxkIGdldCBvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9mIGBnZXRJdGVtKClgIGxhdGVyLiBUaGlzIGxlYWRzIHRvIHNvbWUgd2VpcmRuZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAoc2V0SXRlbSgnZm9vJywgdW5kZWZpbmVkKSB3aWxsIHJldHVybiBgbnVsbGApLCBidXRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0J3Mgbm90IG15IGZhdWx0IGxvY2FsU3RvcmFnZSBpcyBvdXIgYmFzZWxpbmUgYW5kIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0J3Mgd2VpcmQuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uYWJvcnQgPSB0cmFuc2FjdGlvbi5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IHJlcS5lcnJvciA/IHJlcS5lcnJvciA6IHJlcS50cmFuc2FjdGlvbi5lcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVJdGVtKGtleSwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBrZXkgPSBub3JtYWxpemVLZXkoa2V5KTtcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNyZWF0ZVRyYW5zYWN0aW9uKHNlbGYuX2RiSW5mbywgUkVBRF9XUklURSwgZnVuY3Rpb24gKGVyciwgdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzZWxmLl9kYkluZm8uc3RvcmVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgdXNlIGEgR3J1bnQgdGFzayB0byBtYWtlIHRoaXMgc2FmZSBmb3IgSUUgYW5kIHNvbWVcbiAgICAgICAgICAgICAgICAgICAgLy8gdmVyc2lvbnMgb2YgQW5kcm9pZCAoaW5jbHVkaW5nIHRob3NlIHVzZWQgYnkgQ29yZG92YSkuXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vcm1hbGx5IElFIHdvbid0IGxpa2UgYC5kZWxldGUoKWAgYW5kIHdpbGwgaW5zaXN0IG9uXG4gICAgICAgICAgICAgICAgICAgIC8vIHVzaW5nIGBbJ2RlbGV0ZSddKClgLCBidXQgd2UgaGF2ZSBhIGJ1aWxkIHN0ZXAgdGhhdFxuICAgICAgICAgICAgICAgICAgICAvLyBmaXhlcyB0aGlzIGZvciB1cyBub3cuXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXEgPSBzdG9yZVtcImRlbGV0ZVwiXShrZXkpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QocmVxLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgcmVxdWVzdCB3aWxsIGJlIGFsc28gYmUgYWJvcnRlZCBpZiB3ZSd2ZSBleGNlZWRlZCBvdXIgc3RvcmFnZVxuICAgICAgICAgICAgICAgICAgICAvLyBzcGFjZS5cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24ub25hYm9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnIgPSByZXEuZXJyb3IgPyByZXEuZXJyb3IgOiByZXEudHJhbnNhY3Rpb24uZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gY2xlYXIoY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjcmVhdGVUcmFuc2FjdGlvbihzZWxmLl9kYkluZm8sIFJFQURfV1JJVEUsIGZ1bmN0aW9uIChlcnIsIHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc2VsZi5fZGJJbmZvLnN0b3JlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXEgPSBzdG9yZS5jbGVhcigpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24ub25hYm9ydCA9IHRyYW5zYWN0aW9uLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0gcmVxLmVycm9yID8gcmVxLmVycm9yIDogcmVxLnRyYW5zYWN0aW9uLmVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGxlbmd0aChjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNyZWF0ZVRyYW5zYWN0aW9uKHNlbGYuX2RiSW5mbywgUkVBRF9PTkxZLCBmdW5jdGlvbiAoZXJyLCB0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHNlbGYuX2RiSW5mby5zdG9yZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVxID0gc3RvcmUuY291bnQoKTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25zdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXEucmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXEuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBrZXkobiwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBpZiAobiA8IDApIHtcbiAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNyZWF0ZVRyYW5zYWN0aW9uKHNlbGYuX2RiSW5mbywgUkVBRF9PTkxZLCBmdW5jdGlvbiAoZXJyLCB0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHNlbGYuX2RiSW5mby5zdG9yZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYWR2YW5jZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcSA9IHN0b3JlLm9wZW5DdXJzb3IoKTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25zdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnNvciA9IHJlcS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWN1cnNvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgbWVhbnMgdGhlcmUgd2VyZW4ndCBlbm91Z2gga2V5c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSB0aGUgZmlyc3Qga2V5LCByZXR1cm4gaXQgaWYgdGhhdCdzIHdoYXQgdGhleVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdhbnRlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGN1cnNvci5rZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWFkdmFuY2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgYXNrIHRoZSBjdXJzb3IgdG8gc2tpcCBhaGVhZCBuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlY29yZHMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkdmFuY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yLmFkdmFuY2Uobik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiB3ZSBnZXQgaGVyZSwgd2UndmUgZ290IHRoZSBudGgga2V5LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGN1cnNvci5rZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXEuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBrZXlzKGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3JlYXRlVHJhbnNhY3Rpb24oc2VsZi5fZGJJbmZvLCBSRUFEX09OTFksIGZ1bmN0aW9uIChlcnIsIHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc2VsZi5fZGJJbmZvLnN0b3JlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXEgPSBzdG9yZS5vcGVuQ3Vyc29yKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlzID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJzb3IgPSByZXEucmVzdWx0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWN1cnNvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoa2V5cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2goY3Vyc29yLmtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3JbXCJjb250aW51ZVwiXSgpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlcS5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGRyb3BJbnN0YW5jZShvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrID0gZ2V0Q2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIHZhciBjdXJyZW50Q29uZmlnID0gdGhpcy5jb25maWcoKTtcbiAgICBvcHRpb25zID0gdHlwZW9mIG9wdGlvbnMgIT09ICdmdW5jdGlvbicgJiYgb3B0aW9ucyB8fCB7fTtcbiAgICBpZiAoIW9wdGlvbnMubmFtZSkge1xuICAgICAgICBvcHRpb25zLm5hbWUgPSBvcHRpb25zLm5hbWUgfHwgY3VycmVudENvbmZpZy5uYW1lO1xuICAgICAgICBvcHRpb25zLnN0b3JlTmFtZSA9IG9wdGlvbnMuc3RvcmVOYW1lIHx8IGN1cnJlbnRDb25maWcuc3RvcmVOYW1lO1xuICAgIH1cblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgcHJvbWlzZTtcbiAgICBpZiAoIW9wdGlvbnMubmFtZSkge1xuICAgICAgICBwcm9taXNlID0gUHJvbWlzZSQxLnJlamVjdCgnSW52YWxpZCBhcmd1bWVudHMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaXNDdXJyZW50RGIgPSBvcHRpb25zLm5hbWUgPT09IGN1cnJlbnRDb25maWcubmFtZSAmJiBzZWxmLl9kYkluZm8uZGI7XG5cbiAgICAgICAgdmFyIGRiUHJvbWlzZSA9IGlzQ3VycmVudERiID8gUHJvbWlzZSQxLnJlc29sdmUoc2VsZi5fZGJJbmZvLmRiKSA6IF9nZXRPcmlnaW5hbENvbm5lY3Rpb24ob3B0aW9ucykudGhlbihmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgICAgIHZhciBkYkNvbnRleHQgPSBkYkNvbnRleHRzW29wdGlvbnMubmFtZV07XG4gICAgICAgICAgICB2YXIgZm9yYWdlcyA9IGRiQ29udGV4dC5mb3JhZ2VzO1xuICAgICAgICAgICAgZGJDb250ZXh0LmRiID0gZGI7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZvcmFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3JhZ2VzW2ldLl9kYkluZm8uZGIgPSBkYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFvcHRpb25zLnN0b3JlTmFtZSkge1xuICAgICAgICAgICAgcHJvbWlzZSA9IGRiUHJvbWlzZS50aGVuKGZ1bmN0aW9uIChkYikge1xuICAgICAgICAgICAgICAgIF9kZWZlclJlYWRpbmVzcyhvcHRpb25zKTtcblxuICAgICAgICAgICAgICAgIHZhciBkYkNvbnRleHQgPSBkYkNvbnRleHRzW29wdGlvbnMubmFtZV07XG4gICAgICAgICAgICAgICAgdmFyIGZvcmFnZXMgPSBkYkNvbnRleHQuZm9yYWdlcztcblxuICAgICAgICAgICAgICAgIGRiLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3JhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmb3JhZ2UgPSBmb3JhZ2VzW2ldO1xuICAgICAgICAgICAgICAgICAgICBmb3JhZ2UuX2RiSW5mby5kYiA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGRyb3BEQlByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcSA9IGlkYi5kZWxldGVEYXRhYmFzZShvcHRpb25zLm5hbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbmVycm9yID0gcmVxLm9uYmxvY2tlZCA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYiA9IHJlcS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYiA9IHJlcS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZHJvcERCUHJvbWlzZS50aGVuKGZ1bmN0aW9uIChkYikge1xuICAgICAgICAgICAgICAgICAgICBkYkNvbnRleHQuZGIgPSBkYjtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3JhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2ZvcmFnZSA9IGZvcmFnZXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBfYWR2YW5jZVJlYWRpbmVzcyhfZm9yYWdlLl9kYkluZm8pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIChfcmVqZWN0UmVhZGluZXNzKG9wdGlvbnMsIGVycikgfHwgUHJvbWlzZSQxLnJlc29sdmUoKSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoKSB7fSk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvbWlzZSA9IGRiUHJvbWlzZS50aGVuKGZ1bmN0aW9uIChkYikge1xuICAgICAgICAgICAgICAgIGlmICghZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhvcHRpb25zLnN0b3JlTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBuZXdWZXJzaW9uID0gZGIudmVyc2lvbiArIDE7XG5cbiAgICAgICAgICAgICAgICBfZGVmZXJSZWFkaW5lc3Mob3B0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICB2YXIgZGJDb250ZXh0ID0gZGJDb250ZXh0c1tvcHRpb25zLm5hbWVdO1xuICAgICAgICAgICAgICAgIHZhciBmb3JhZ2VzID0gZGJDb250ZXh0LmZvcmFnZXM7XG5cbiAgICAgICAgICAgICAgICBkYi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm9yYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm9yYWdlID0gZm9yYWdlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yYWdlLl9kYkluZm8uZGIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBmb3JhZ2UuX2RiSW5mby52ZXJzaW9uID0gbmV3VmVyc2lvbjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgZHJvcE9iamVjdFByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcSA9IGlkYi5vcGVuKG9wdGlvbnMubmFtZSwgbmV3VmVyc2lvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGIgPSByZXEucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGIuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbnVwZ3JhZGVuZWVkZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGIgPSByZXEucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGIuZGVsZXRlT2JqZWN0U3RvcmUob3B0aW9ucy5zdG9yZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGIgPSByZXEucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGIuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGIpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRyb3BPYmplY3RQcm9taXNlLnRoZW4oZnVuY3Rpb24gKGRiKSB7XG4gICAgICAgICAgICAgICAgICAgIGRiQ29udGV4dC5kYiA9IGRiO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGZvcmFnZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfZm9yYWdlMiA9IGZvcmFnZXNbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBfZm9yYWdlMi5fZGJJbmZvLmRiID0gZGI7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYWR2YW5jZVJlYWRpbmVzcyhfZm9yYWdlMi5fZGJJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAoX3JlamVjdFJlYWRpbmVzcyhvcHRpb25zLCBlcnIpIHx8IFByb21pc2UkMS5yZXNvbHZlKCkpW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKCkge30pO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbnZhciBhc3luY1N0b3JhZ2UgPSB7XG4gICAgX2RyaXZlcjogJ2FzeW5jU3RvcmFnZScsXG4gICAgX2luaXRTdG9yYWdlOiBfaW5pdFN0b3JhZ2UsXG4gICAgX3N1cHBvcnQ6IGlzSW5kZXhlZERCVmFsaWQoKSxcbiAgICBpdGVyYXRlOiBpdGVyYXRlLFxuICAgIGdldEl0ZW06IGdldEl0ZW0sXG4gICAgc2V0SXRlbTogc2V0SXRlbSxcbiAgICByZW1vdmVJdGVtOiByZW1vdmVJdGVtLFxuICAgIGNsZWFyOiBjbGVhcixcbiAgICBsZW5ndGg6IGxlbmd0aCxcbiAgICBrZXk6IGtleSxcbiAgICBrZXlzOiBrZXlzLFxuICAgIGRyb3BJbnN0YW5jZTogZHJvcEluc3RhbmNlXG59O1xuXG5mdW5jdGlvbiBpc1dlYlNRTFZhbGlkKCkge1xuICAgIHJldHVybiB0eXBlb2Ygb3BlbkRhdGFiYXNlID09PSAnZnVuY3Rpb24nO1xufVxuXG4vLyBTYWRseSwgdGhlIGJlc3Qgd2F5IHRvIHNhdmUgYmluYXJ5IGRhdGEgaW4gV2ViU1FML2xvY2FsU3RvcmFnZSBpcyBzZXJpYWxpemluZ1xuLy8gaXQgdG8gQmFzZTY0LCBzbyB0aGlzIGlzIGhvdyB3ZSBzdG9yZSBpdCB0byBwcmV2ZW50IHZlcnkgc3RyYW5nZSBlcnJvcnMgd2l0aCBsZXNzXG4vLyB2ZXJib3NlIHdheXMgb2YgYmluYXJ5IDwtPiBzdHJpbmcgZGF0YSBzdG9yYWdlLlxudmFyIEJBU0VfQ0hBUlMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7XG5cbnZhciBCTE9CX1RZUEVfUFJFRklYID0gJ35+bG9jYWxfZm9yYWdlX3R5cGV+JztcbnZhciBCTE9CX1RZUEVfUFJFRklYX1JFR0VYID0gL15+fmxvY2FsX2ZvcmFnZV90eXBlfihbXn5dKyl+LztcblxudmFyIFNFUklBTElaRURfTUFSS0VSID0gJ19fbGZzY19fOic7XG52YXIgU0VSSUFMSVpFRF9NQVJLRVJfTEVOR1RIID0gU0VSSUFMSVpFRF9NQVJLRVIubGVuZ3RoO1xuXG4vLyBPTUcgdGhlIHNlcmlhbGl6YXRpb25zIVxudmFyIFRZUEVfQVJSQVlCVUZGRVIgPSAnYXJiZic7XG52YXIgVFlQRV9CTE9CID0gJ2Jsb2InO1xudmFyIFRZUEVfSU5UOEFSUkFZID0gJ3NpMDgnO1xudmFyIFRZUEVfVUlOVDhBUlJBWSA9ICd1aTA4JztcbnZhciBUWVBFX1VJTlQ4Q0xBTVBFREFSUkFZID0gJ3VpYzgnO1xudmFyIFRZUEVfSU5UMTZBUlJBWSA9ICdzaTE2JztcbnZhciBUWVBFX0lOVDMyQVJSQVkgPSAnc2kzMic7XG52YXIgVFlQRV9VSU5UMTZBUlJBWSA9ICd1cjE2JztcbnZhciBUWVBFX1VJTlQzMkFSUkFZID0gJ3VpMzInO1xudmFyIFRZUEVfRkxPQVQzMkFSUkFZID0gJ2ZsMzInO1xudmFyIFRZUEVfRkxPQVQ2NEFSUkFZID0gJ2ZsNjQnO1xudmFyIFRZUEVfU0VSSUFMSVpFRF9NQVJLRVJfTEVOR1RIID0gU0VSSUFMSVpFRF9NQVJLRVJfTEVOR1RIICsgVFlQRV9BUlJBWUJVRkZFUi5sZW5ndGg7XG5cbnZhciB0b1N0cmluZyQxID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuZnVuY3Rpb24gc3RyaW5nVG9CdWZmZXIoc2VyaWFsaXplZFN0cmluZykge1xuICAgIC8vIEZpbGwgdGhlIHN0cmluZyBpbnRvIGEgQXJyYXlCdWZmZXIuXG4gICAgdmFyIGJ1ZmZlckxlbmd0aCA9IHNlcmlhbGl6ZWRTdHJpbmcubGVuZ3RoICogMC43NTtcbiAgICB2YXIgbGVuID0gc2VyaWFsaXplZFN0cmluZy5sZW5ndGg7XG4gICAgdmFyIGk7XG4gICAgdmFyIHAgPSAwO1xuICAgIHZhciBlbmNvZGVkMSwgZW5jb2RlZDIsIGVuY29kZWQzLCBlbmNvZGVkNDtcblxuICAgIGlmIChzZXJpYWxpemVkU3RyaW5nW3NlcmlhbGl6ZWRTdHJpbmcubGVuZ3RoIC0gMV0gPT09ICc9Jykge1xuICAgICAgICBidWZmZXJMZW5ndGgtLTtcbiAgICAgICAgaWYgKHNlcmlhbGl6ZWRTdHJpbmdbc2VyaWFsaXplZFN0cmluZy5sZW5ndGggLSAyXSA9PT0gJz0nKSB7XG4gICAgICAgICAgICBidWZmZXJMZW5ndGgtLTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYnVmZmVyTGVuZ3RoKTtcbiAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgICAgIGVuY29kZWQxID0gQkFTRV9DSEFSUy5pbmRleE9mKHNlcmlhbGl6ZWRTdHJpbmdbaV0pO1xuICAgICAgICBlbmNvZGVkMiA9IEJBU0VfQ0hBUlMuaW5kZXhPZihzZXJpYWxpemVkU3RyaW5nW2kgKyAxXSk7XG4gICAgICAgIGVuY29kZWQzID0gQkFTRV9DSEFSUy5pbmRleE9mKHNlcmlhbGl6ZWRTdHJpbmdbaSArIDJdKTtcbiAgICAgICAgZW5jb2RlZDQgPSBCQVNFX0NIQVJTLmluZGV4T2Yoc2VyaWFsaXplZFN0cmluZ1tpICsgM10pO1xuXG4gICAgICAgIC8qanNsaW50IGJpdHdpc2U6IHRydWUgKi9cbiAgICAgICAgYnl0ZXNbcCsrXSA9IGVuY29kZWQxIDw8IDIgfCBlbmNvZGVkMiA+PiA0O1xuICAgICAgICBieXRlc1twKytdID0gKGVuY29kZWQyICYgMTUpIDw8IDQgfCBlbmNvZGVkMyA+PiAyO1xuICAgICAgICBieXRlc1twKytdID0gKGVuY29kZWQzICYgMykgPDwgNiB8IGVuY29kZWQ0ICYgNjM7XG4gICAgfVxuICAgIHJldHVybiBidWZmZXI7XG59XG5cbi8vIENvbnZlcnRzIGEgYnVmZmVyIHRvIGEgc3RyaW5nIHRvIHN0b3JlLCBzZXJpYWxpemVkLCBpbiB0aGUgYmFja2VuZFxuLy8gc3RvcmFnZSBsaWJyYXJ5LlxuZnVuY3Rpb24gYnVmZmVyVG9TdHJpbmcoYnVmZmVyKSB7XG4gICAgLy8gYmFzZTY0LWFycmF5YnVmZmVyXG4gICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICB2YXIgYmFzZTY0U3RyaW5nID0gJyc7XG4gICAgdmFyIGk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDMpIHtcbiAgICAgICAgLypqc2xpbnQgYml0d2lzZTogdHJ1ZSAqL1xuICAgICAgICBiYXNlNjRTdHJpbmcgKz0gQkFTRV9DSEFSU1tieXRlc1tpXSA+PiAyXTtcbiAgICAgICAgYmFzZTY0U3RyaW5nICs9IEJBU0VfQ0hBUlNbKGJ5dGVzW2ldICYgMykgPDwgNCB8IGJ5dGVzW2kgKyAxXSA+PiA0XTtcbiAgICAgICAgYmFzZTY0U3RyaW5nICs9IEJBU0VfQ0hBUlNbKGJ5dGVzW2kgKyAxXSAmIDE1KSA8PCAyIHwgYnl0ZXNbaSArIDJdID4+IDZdO1xuICAgICAgICBiYXNlNjRTdHJpbmcgKz0gQkFTRV9DSEFSU1tieXRlc1tpICsgMl0gJiA2M107XG4gICAgfVxuXG4gICAgaWYgKGJ5dGVzLmxlbmd0aCAlIDMgPT09IDIpIHtcbiAgICAgICAgYmFzZTY0U3RyaW5nID0gYmFzZTY0U3RyaW5nLnN1YnN0cmluZygwLCBiYXNlNjRTdHJpbmcubGVuZ3RoIC0gMSkgKyAnPSc7XG4gICAgfSBlbHNlIGlmIChieXRlcy5sZW5ndGggJSAzID09PSAxKSB7XG4gICAgICAgIGJhc2U2NFN0cmluZyA9IGJhc2U2NFN0cmluZy5zdWJzdHJpbmcoMCwgYmFzZTY0U3RyaW5nLmxlbmd0aCAtIDIpICsgJz09JztcbiAgICB9XG5cbiAgICByZXR1cm4gYmFzZTY0U3RyaW5nO1xufVxuXG4vLyBTZXJpYWxpemUgYSB2YWx1ZSwgYWZ0ZXJ3YXJkcyBleGVjdXRpbmcgYSBjYWxsYmFjayAod2hpY2ggdXN1YWxseVxuLy8gaW5zdHJ1Y3RzIHRoZSBgc2V0SXRlbSgpYCBjYWxsYmFjay9wcm9taXNlIHRvIGJlIGV4ZWN1dGVkKS4gVGhpcyBpcyBob3dcbi8vIHdlIHN0b3JlIGJpbmFyeSBkYXRhIHdpdGggbG9jYWxTdG9yYWdlLlxuZnVuY3Rpb24gc2VyaWFsaXplKHZhbHVlLCBjYWxsYmFjaykge1xuICAgIHZhciB2YWx1ZVR5cGUgPSAnJztcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdmFsdWVUeXBlID0gdG9TdHJpbmckMS5jYWxsKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBDYW5ub3QgdXNlIGB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyYCBvciBzdWNoIGhlcmUsIGFzIHRoZXNlXG4gICAgLy8gY2hlY2tzIGZhaWwgd2hlbiBydW5uaW5nIHRoZSB0ZXN0cyB1c2luZyBjYXNwZXIuanMuLi5cbiAgICAvL1xuICAgIC8vIFRPRE86IFNlZSB3aHkgdGhvc2UgdGVzdHMgZmFpbCBhbmQgdXNlIGEgYmV0dGVyIHNvbHV0aW9uLlxuICAgIGlmICh2YWx1ZSAmJiAodmFsdWVUeXBlID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nIHx8IHZhbHVlLmJ1ZmZlciAmJiB0b1N0cmluZyQxLmNhbGwodmFsdWUuYnVmZmVyKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJykpIHtcbiAgICAgICAgLy8gQ29udmVydCBiaW5hcnkgYXJyYXlzIHRvIGEgc3RyaW5nIGFuZCBwcmVmaXggdGhlIHN0cmluZyB3aXRoXG4gICAgICAgIC8vIGEgc3BlY2lhbCBtYXJrZXIuXG4gICAgICAgIHZhciBidWZmZXI7XG4gICAgICAgIHZhciBtYXJrZXIgPSBTRVJJQUxJWkVEX01BUktFUjtcblxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgICAgICAgYnVmZmVyID0gdmFsdWU7XG4gICAgICAgICAgICBtYXJrZXIgKz0gVFlQRV9BUlJBWUJVRkZFUjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1ZmZlciA9IHZhbHVlLmJ1ZmZlcjtcblxuICAgICAgICAgICAgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgSW50OEFycmF5XScpIHtcbiAgICAgICAgICAgICAgICBtYXJrZXIgKz0gVFlQRV9JTlQ4QVJSQVk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgVWludDhBcnJheV0nKSB7XG4gICAgICAgICAgICAgICAgbWFya2VyICs9IFRZUEVfVUlOVDhBUlJBWTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nKSB7XG4gICAgICAgICAgICAgICAgbWFya2VyICs9IFRZUEVfVUlOVDhDTEFNUEVEQVJSQVk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgSW50MTZBcnJheV0nKSB7XG4gICAgICAgICAgICAgICAgbWFya2VyICs9IFRZUEVfSU5UMTZBUlJBWTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBVaW50MTZBcnJheV0nKSB7XG4gICAgICAgICAgICAgICAgbWFya2VyICs9IFRZUEVfVUlOVDE2QVJSQVk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgSW50MzJBcnJheV0nKSB7XG4gICAgICAgICAgICAgICAgbWFya2VyICs9IFRZUEVfSU5UMzJBUlJBWTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBVaW50MzJBcnJheV0nKSB7XG4gICAgICAgICAgICAgICAgbWFya2VyICs9IFRZUEVfVUlOVDMyQVJSQVk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScpIHtcbiAgICAgICAgICAgICAgICBtYXJrZXIgKz0gVFlQRV9GTE9BVDMyQVJSQVk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScpIHtcbiAgICAgICAgICAgICAgICBtYXJrZXIgKz0gVFlQRV9GTE9BVDY0QVJSQVk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG5ldyBFcnJvcignRmFpbGVkIHRvIGdldCB0eXBlIGZvciBCaW5hcnlBcnJheScpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxiYWNrKG1hcmtlciArIGJ1ZmZlclRvU3RyaW5nKGJ1ZmZlcikpO1xuICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBCbG9iXScpIHtcbiAgICAgICAgLy8gQ29udmVyIHRoZSBibG9iIHRvIGEgYmluYXJ5QXJyYXkgYW5kIHRoZW4gdG8gYSBzdHJpbmcuXG4gICAgICAgIHZhciBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgICAgICBmaWxlUmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIEJhY2t3YXJkcy1jb21wYXRpYmxlIHByZWZpeCBmb3IgdGhlIGJsb2IgdHlwZS5cbiAgICAgICAgICAgIHZhciBzdHIgPSBCTE9CX1RZUEVfUFJFRklYICsgdmFsdWUudHlwZSArICd+JyArIGJ1ZmZlclRvU3RyaW5nKHRoaXMucmVzdWx0KTtcblxuICAgICAgICAgICAgY2FsbGJhY2soU0VSSUFMSVpFRF9NQVJLRVIgKyBUWVBFX0JMT0IgKyBzdHIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZpbGVSZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjYWxsYmFjayhKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ291bGRuJ3QgY29udmVydCB2YWx1ZSBpbnRvIGEgSlNPTiBzdHJpbmc6IFwiLCB2YWx1ZSk7XG5cbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBEZXNlcmlhbGl6ZSBkYXRhIHdlJ3ZlIGluc2VydGVkIGludG8gYSB2YWx1ZSBjb2x1bW4vZmllbGQuIFdlIHBsYWNlXG4vLyBzcGVjaWFsIG1hcmtlcnMgaW50byBvdXIgc3RyaW5ncyB0byBtYXJrIHRoZW0gYXMgZW5jb2RlZDsgdGhpcyBpc24ndFxuLy8gYXMgbmljZSBhcyBhIG1ldGEgZmllbGQsIGJ1dCBpdCdzIHRoZSBvbmx5IHNhbmUgdGhpbmcgd2UgY2FuIGRvIHdoaWxzdFxuLy8ga2VlcGluZyBsb2NhbFN0b3JhZ2Ugc3VwcG9ydCBpbnRhY3QuXG4vL1xuLy8gT2Z0ZW50aW1lcyB0aGlzIHdpbGwganVzdCBkZXNlcmlhbGl6ZSBKU09OIGNvbnRlbnQsIGJ1dCBpZiB3ZSBoYXZlIGFcbi8vIHNwZWNpYWwgbWFya2VyIChTRVJJQUxJWkVEX01BUktFUiwgZGVmaW5lZCBhYm92ZSksIHdlIHdpbGwgZXh0cmFjdFxuLy8gc29tZSBraW5kIG9mIGFycmF5YnVmZmVyL2JpbmFyeSBkYXRhL3R5cGVkIGFycmF5IG91dCBvZiB0aGUgc3RyaW5nLlxuZnVuY3Rpb24gZGVzZXJpYWxpemUodmFsdWUpIHtcbiAgICAvLyBJZiB3ZSBoYXZlbid0IG1hcmtlZCB0aGlzIHN0cmluZyBhcyBiZWluZyBzcGVjaWFsbHkgc2VyaWFsaXplZCAoaS5lLlxuICAgIC8vIHNvbWV0aGluZyBvdGhlciB0aGFuIHNlcmlhbGl6ZWQgSlNPTiksIHdlIGNhbiBqdXN0IHJldHVybiBpdCBhbmQgYmVcbiAgICAvLyBkb25lIHdpdGggaXQuXG4gICAgaWYgKHZhbHVlLnN1YnN0cmluZygwLCBTRVJJQUxJWkVEX01BUktFUl9MRU5HVEgpICE9PSBTRVJJQUxJWkVEX01BUktFUikge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gVGhlIGZvbGxvd2luZyBjb2RlIGRlYWxzIHdpdGggZGVzZXJpYWxpemluZyBzb21lIGtpbmQgb2YgQmxvYiBvclxuICAgIC8vIFR5cGVkQXJyYXkuIEZpcnN0IHdlIHNlcGFyYXRlIG91dCB0aGUgdHlwZSBvZiBkYXRhIHdlJ3JlIGRlYWxpbmdcbiAgICAvLyB3aXRoIGZyb20gdGhlIGRhdGEgaXRzZWxmLlxuICAgIHZhciBzZXJpYWxpemVkU3RyaW5nID0gdmFsdWUuc3Vic3RyaW5nKFRZUEVfU0VSSUFMSVpFRF9NQVJLRVJfTEVOR1RIKTtcbiAgICB2YXIgdHlwZSA9IHZhbHVlLnN1YnN0cmluZyhTRVJJQUxJWkVEX01BUktFUl9MRU5HVEgsIFRZUEVfU0VSSUFMSVpFRF9NQVJLRVJfTEVOR1RIKTtcblxuICAgIHZhciBibG9iVHlwZTtcbiAgICAvLyBCYWNrd2FyZHMtY29tcGF0aWJsZSBibG9iIHR5cGUgc2VyaWFsaXphdGlvbiBzdHJhdGVneS5cbiAgICAvLyBEQnMgY3JlYXRlZCB3aXRoIG9sZGVyIHZlcnNpb25zIG9mIGxvY2FsRm9yYWdlIHdpbGwgc2ltcGx5IG5vdCBoYXZlIHRoZSBibG9iIHR5cGUuXG4gICAgaWYgKHR5cGUgPT09IFRZUEVfQkxPQiAmJiBCTE9CX1RZUEVfUFJFRklYX1JFR0VYLnRlc3Qoc2VyaWFsaXplZFN0cmluZykpIHtcbiAgICAgICAgdmFyIG1hdGNoZXIgPSBzZXJpYWxpemVkU3RyaW5nLm1hdGNoKEJMT0JfVFlQRV9QUkVGSVhfUkVHRVgpO1xuICAgICAgICBibG9iVHlwZSA9IG1hdGNoZXJbMV07XG4gICAgICAgIHNlcmlhbGl6ZWRTdHJpbmcgPSBzZXJpYWxpemVkU3RyaW5nLnN1YnN0cmluZyhtYXRjaGVyWzBdLmxlbmd0aCk7XG4gICAgfVxuICAgIHZhciBidWZmZXIgPSBzdHJpbmdUb0J1ZmZlcihzZXJpYWxpemVkU3RyaW5nKTtcblxuICAgIC8vIFJldHVybiB0aGUgcmlnaHQgdHlwZSBiYXNlZCBvbiB0aGUgY29kZS90eXBlIHNldCBkdXJpbmdcbiAgICAvLyBzZXJpYWxpemF0aW9uLlxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFRZUEVfQVJSQVlCVUZGRVI6XG4gICAgICAgICAgICByZXR1cm4gYnVmZmVyO1xuICAgICAgICBjYXNlIFRZUEVfQkxPQjpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVCbG9iKFtidWZmZXJdLCB7IHR5cGU6IGJsb2JUeXBlIH0pO1xuICAgICAgICBjYXNlIFRZUEVfSU5UOEFSUkFZOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBJbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICAgICAgY2FzZSBUWVBFX1VJTlQ4QVJSQVk6XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICAgICAgY2FzZSBUWVBFX1VJTlQ4Q0xBTVBFREFSUkFZOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50OENsYW1wZWRBcnJheShidWZmZXIpO1xuICAgICAgICBjYXNlIFRZUEVfSU5UMTZBUlJBWTpcbiAgICAgICAgICAgIHJldHVybiBuZXcgSW50MTZBcnJheShidWZmZXIpO1xuICAgICAgICBjYXNlIFRZUEVfVUlOVDE2QVJSQVk6XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQxNkFycmF5KGJ1ZmZlcik7XG4gICAgICAgIGNhc2UgVFlQRV9JTlQzMkFSUkFZOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBJbnQzMkFycmF5KGJ1ZmZlcik7XG4gICAgICAgIGNhc2UgVFlQRV9VSU5UMzJBUlJBWTpcbiAgICAgICAgICAgIHJldHVybiBuZXcgVWludDMyQXJyYXkoYnVmZmVyKTtcbiAgICAgICAgY2FzZSBUWVBFX0ZMT0FUMzJBUlJBWTpcbiAgICAgICAgICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KGJ1ZmZlcik7XG4gICAgICAgIGNhc2UgVFlQRV9GTE9BVDY0QVJSQVk6XG4gICAgICAgICAgICByZXR1cm4gbmV3IEZsb2F0NjRBcnJheShidWZmZXIpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtvd24gdHlwZTogJyArIHR5cGUpO1xuICAgIH1cbn1cblxudmFyIGxvY2FsZm9yYWdlU2VyaWFsaXplciA9IHtcbiAgICBzZXJpYWxpemU6IHNlcmlhbGl6ZSxcbiAgICBkZXNlcmlhbGl6ZTogZGVzZXJpYWxpemUsXG4gICAgc3RyaW5nVG9CdWZmZXI6IHN0cmluZ1RvQnVmZmVyLFxuICAgIGJ1ZmZlclRvU3RyaW5nOiBidWZmZXJUb1N0cmluZ1xufTtcblxuLypcbiAqIEluY2x1ZGVzIGNvZGUgZnJvbTpcbiAqXG4gKiBiYXNlNjQtYXJyYXlidWZmZXJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWtsYXN2aC9iYXNlNjQtYXJyYXlidWZmZXJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgTmlrbGFzIHZvbiBIZXJ0emVuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRGJUYWJsZSh0LCBkYkluZm8sIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKSB7XG4gICAgdC5leGVjdXRlU3FsKCdDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyAnICsgZGJJbmZvLnN0b3JlTmFtZSArICcgJyArICcoaWQgSU5URUdFUiBQUklNQVJZIEtFWSwga2V5IHVuaXF1ZSwgdmFsdWUpJywgW10sIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcbn1cblxuLy8gT3BlbiB0aGUgV2ViU1FMIGRhdGFiYXNlIChhdXRvbWF0aWNhbGx5IGNyZWF0ZXMgb25lIGlmIG9uZSBkaWRuJ3Rcbi8vIHByZXZpb3VzbHkgZXhpc3QpLCB1c2luZyBhbnkgb3B0aW9ucyBzZXQgaW4gdGhlIGNvbmZpZy5cbmZ1bmN0aW9uIF9pbml0U3RvcmFnZSQxKG9wdGlvbnMpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGRiSW5mbyA9IHtcbiAgICAgICAgZGI6IG51bGxcbiAgICB9O1xuXG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICBkYkluZm9baV0gPSB0eXBlb2Ygb3B0aW9uc1tpXSAhPT0gJ3N0cmluZycgPyBvcHRpb25zW2ldLnRvU3RyaW5nKCkgOiBvcHRpb25zW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGRiSW5mb1Byb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgLy8gT3BlbiB0aGUgZGF0YWJhc2U7IHRoZSBvcGVuRGF0YWJhc2UgQVBJIHdpbGwgYXV0b21hdGljYWxseVxuICAgICAgICAvLyBjcmVhdGUgaXQgZm9yIHVzIGlmIGl0IGRvZXNuJ3QgZXhpc3QuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkYkluZm8uZGIgPSBvcGVuRGF0YWJhc2UoZGJJbmZvLm5hbWUsIFN0cmluZyhkYkluZm8udmVyc2lvbiksIGRiSW5mby5kZXNjcmlwdGlvbiwgZGJJbmZvLnNpemUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3JlYXRlIG91ciBrZXkvdmFsdWUgdGFibGUgaWYgaXQgZG9lc24ndCBleGlzdC5cbiAgICAgICAgZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICBjcmVhdGVEYlRhYmxlKHQsIGRiSW5mbywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuX2RiSW5mbyA9IGRiSW5mbztcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBkYkluZm8uc2VyaWFsaXplciA9IGxvY2FsZm9yYWdlU2VyaWFsaXplcjtcbiAgICByZXR1cm4gZGJJbmZvUHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gdHJ5RXhlY3V0ZVNxbCh0LCBkYkluZm8sIHNxbFN0YXRlbWVudCwgYXJncywgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICB0LmV4ZWN1dGVTcWwoc3FsU3RhdGVtZW50LCBhcmdzLCBjYWxsYmFjaywgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgIGlmIChlcnJvci5jb2RlID09PSBlcnJvci5TWU5UQVhfRVJSKSB7XG4gICAgICAgICAgICB0LmV4ZWN1dGVTcWwoJ1NFTEVDVCBuYW1lIEZST00gc3FsaXRlX21hc3RlciAnICsgXCJXSEVSRSB0eXBlPSd0YWJsZScgQU5EIG5hbWUgPSA/XCIsIFtkYkluZm8uc3RvcmVOYW1lXSwgZnVuY3Rpb24gKHQsIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdHMucm93cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHRhYmxlIGlzIG1pc3NpbmcgKHdhcyBkZWxldGVkKVxuICAgICAgICAgICAgICAgICAgICAvLyByZS1jcmVhdGUgaXQgdGFibGUgYW5kIHJldHJ5XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZURiVGFibGUodCwgZGJJbmZvLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0LmV4ZWN1dGVTcWwoc3FsU3RhdGVtZW50LCBhcmdzLCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGVycm9yQ2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yQ2FsbGJhY2sodCwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGVycm9yQ2FsbGJhY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3JDYWxsYmFjayh0LCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9LCBlcnJvckNhbGxiYWNrKTtcbn1cblxuZnVuY3Rpb24gZ2V0SXRlbSQxKGtleSwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBrZXkgPSBub3JtYWxpemVLZXkoa2V5KTtcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgICAgICBkYkluZm8uZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICB0cnlFeGVjdXRlU3FsKHQsIGRiSW5mbywgJ1NFTEVDVCAqIEZST00gJyArIGRiSW5mby5zdG9yZU5hbWUgKyAnIFdIRVJFIGtleSA9ID8gTElNSVQgMScsIFtrZXldLCBmdW5jdGlvbiAodCwgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVzdWx0cy5yb3dzLmxlbmd0aCA/IHJlc3VsdHMucm93cy5pdGVtKDApLnZhbHVlIDogbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgdGhpcyBpcyBzZXJpYWxpemVkIGNvbnRlbnQgd2UgbmVlZCB0b1xuICAgICAgICAgICAgICAgICAgICAvLyB1bnBhY2suXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGRiSW5mby5zZXJpYWxpemVyLmRlc2VyaWFsaXplKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gaXRlcmF0ZSQxKGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG5cbiAgICAgICAgICAgIGRiSW5mby5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHRyeUV4ZWN1dGVTcWwodCwgZGJJbmZvLCAnU0VMRUNUICogRlJPTSAnICsgZGJJbmZvLnN0b3JlTmFtZSwgW10sIGZ1bmN0aW9uICh0LCByZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByb3dzID0gcmVzdWx0cy5yb3dzO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGVuZ3RoID0gcm93cy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSByb3dzLml0ZW0oaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gaXRlbS52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHRoaXMgaXMgc2VyaWFsaXplZCBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHVucGFjay5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBkYkluZm8uc2VyaWFsaXplci5kZXNlcmlhbGl6ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBpdGVyYXRvcihyZXN1bHQsIGl0ZW0ua2V5LCBpICsgMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZvaWQoMCkgcHJldmVudHMgcHJvYmxlbXMgd2l0aCByZWRlZmluaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9mIGB1bmRlZmluZWRgLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBfc2V0SXRlbShrZXksIHZhbHVlLCBjYWxsYmFjaywgcmV0cmllc0xlZnQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBrZXkgPSBub3JtYWxpemVLZXkoa2V5KTtcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFRoZSBsb2NhbFN0b3JhZ2UgQVBJIGRvZXNuJ3QgcmV0dXJuIHVuZGVmaW5lZCB2YWx1ZXMgaW4gYW5cbiAgICAgICAgICAgIC8vIFwiZXhwZWN0ZWRcIiB3YXksIHNvIHVuZGVmaW5lZCBpcyBhbHdheXMgY2FzdCB0byBudWxsIGluIGFsbFxuICAgICAgICAgICAgLy8gZHJpdmVycy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9sb2NhbEZvcmFnZS9wdWxsLzQyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2F2ZSB0aGUgb3JpZ2luYWwgdmFsdWUgdG8gcGFzcyB0byB0aGUgY2FsbGJhY2suXG4gICAgICAgICAgICB2YXIgb3JpZ2luYWxWYWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICAgICAgZGJJbmZvLnNlcmlhbGl6ZXIuc2VyaWFsaXplKHZhbHVlLCBmdW5jdGlvbiAodmFsdWUsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnlFeGVjdXRlU3FsKHQsIGRiSW5mbywgJ0lOU0VSVCBPUiBSRVBMQUNFIElOVE8gJyArIGRiSW5mby5zdG9yZU5hbWUgKyAnICcgKyAnKGtleSwgdmFsdWUpIFZBTFVFUyAoPywgPyknLCBba2V5LCB2YWx1ZV0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG9yaWdpbmFsVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoc3FsRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSB0cmFuc2FjdGlvbiBmYWlsZWQ7IGNoZWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBzZWUgaWYgaXQncyBhIHF1b3RhIGVycm9yLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNxbEVycm9yLmNvZGUgPT09IHNxbEVycm9yLlFVT1RBX0VSUikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIHJlamVjdCB0aGUgY2FsbGJhY2sgb3V0cmlnaHQgZm9yIG5vdywgYnV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXQncyB3b3J0aCB0cnlpbmcgdG8gcmUtcnVuIHRoZSB0cmFuc2FjdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFdmVuIGlmIHRoZSB1c2VyIGFjY2VwdHMgdGhlIHByb21wdCB0byB1c2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtb3JlIHN0b3JhZ2Ugb24gU2FmYXJpLCB0aGlzIGVycm9yIHdpbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBiZSBjYWxsZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUcnkgdG8gcmUtcnVuIHRoZSB0cmFuc2FjdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmV0cmllc0xlZnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoX3NldEl0ZW0uYXBwbHkoc2VsZiwgW2tleSwgb3JpZ2luYWxWYWx1ZSwgY2FsbGJhY2ssIHJldHJpZXNMZWZ0IC0gMV0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3Qoc3FsRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gc2V0SXRlbSQxKGtleSwgdmFsdWUsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIF9zZXRJdGVtLmFwcGx5KHRoaXMsIFtrZXksIHZhbHVlLCBjYWxsYmFjaywgMV0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVJdGVtJDEoa2V5LCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGtleSA9IG5vcm1hbGl6ZUtleShrZXkpO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgICAgIGRiSW5mby5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHRyeUV4ZWN1dGVTcWwodCwgZGJJbmZvLCAnREVMRVRFIEZST00gJyArIGRiSW5mby5zdG9yZU5hbWUgKyAnIFdIRVJFIGtleSA9ID8nLCBba2V5XSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy8gRGVsZXRlcyBldmVyeSBpdGVtIGluIHRoZSB0YWJsZS5cbi8vIFRPRE86IEZpbmQgb3V0IGlmIHRoaXMgcmVzZXRzIHRoZSBBVVRPX0lOQ1JFTUVOVCBudW1iZXIuXG5mdW5jdGlvbiBjbGVhciQxKGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgICAgIGRiSW5mby5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHRyeUV4ZWN1dGVTcWwodCwgZGJJbmZvLCAnREVMRVRFIEZST00gJyArIGRiSW5mby5zdG9yZU5hbWUsIFtdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBEb2VzIGEgc2ltcGxlIGBDT1VOVChrZXkpYCB0byBnZXQgdGhlIG51bWJlciBvZiBpdGVtcyBzdG9yZWQgaW5cbi8vIGxvY2FsRm9yYWdlLlxuZnVuY3Rpb24gbGVuZ3RoJDEoY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICAgICAgZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgLy8gQWhoaCwgU1FMIG1ha2VzIHRoaXMgb25lIHNvb29vb28gZWFzeS5cbiAgICAgICAgICAgICAgICB0cnlFeGVjdXRlU3FsKHQsIGRiSW5mbywgJ1NFTEVDVCBDT1VOVChrZXkpIGFzIGMgRlJPTSAnICsgZGJJbmZvLnN0b3JlTmFtZSwgW10sIGZ1bmN0aW9uICh0LCByZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSByZXN1bHRzLnJvd3MuaXRlbSgwKS5jO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy8gUmV0dXJuIHRoZSBrZXkgbG9jYXRlZCBhdCBrZXkgaW5kZXggWDsgZXNzZW50aWFsbHkgZ2V0cyB0aGUga2V5IGZyb20gYVxuLy8gYFdIRVJFIGlkID0gP2AuIFRoaXMgaXMgdGhlIG1vc3QgZWZmaWNpZW50IHdheSBJIGNhbiB0aGluayB0byBpbXBsZW1lbnRcbi8vIHRoaXMgcmFyZWx5LXVzZWQgKGluIG15IGV4cGVyaWVuY2UpIHBhcnQgb2YgdGhlIEFQSSwgYnV0IGl0IGNhbiBzZWVtXG4vLyBpbmNvbnNpc3RlbnQsIGJlY2F1c2Ugd2UgZG8gYElOU0VSVCBPUiBSRVBMQUNFIElOVE9gIG9uIGBzZXRJdGVtKClgLCBzb1xuLy8gdGhlIElEIG9mIGVhY2gga2V5IHdpbGwgY2hhbmdlIGV2ZXJ5IHRpbWUgaXQncyB1cGRhdGVkLiBQZXJoYXBzIGEgc3RvcmVkXG4vLyBwcm9jZWR1cmUgZm9yIHRoZSBgc2V0SXRlbSgpYCBTUUwgd291bGQgc29sdmUgdGhpcyBwcm9ibGVtP1xuLy8gVE9ETzogRG9uJ3QgY2hhbmdlIElEIG9uIGBzZXRJdGVtKClgLlxuZnVuY3Rpb24ga2V5JDEobiwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICAgICAgZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgdHJ5RXhlY3V0ZVNxbCh0LCBkYkluZm8sICdTRUxFQ1Qga2V5IEZST00gJyArIGRiSW5mby5zdG9yZU5hbWUgKyAnIFdIRVJFIGlkID0gPyBMSU1JVCAxJywgW24gKyAxXSwgZnVuY3Rpb24gKHQsIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlc3VsdHMucm93cy5sZW5ndGggPyByZXN1bHRzLnJvd3MuaXRlbSgwKS5rZXkgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24ga2V5cyQxKGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgICAgIGRiSW5mby5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHRyeUV4ZWN1dGVTcWwodCwgZGJJbmZvLCAnU0VMRUNUIGtleSBGUk9NICcgKyBkYkluZm8uc3RvcmVOYW1lLCBbXSwgZnVuY3Rpb24gKHQsIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleXMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdHMucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHJlc3VsdHMucm93cy5pdGVtKGkpLmtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGtleXMpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbi8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi93ZWJkYXRhYmFzZS8jZGF0YWJhc2VzXG4vLyA+IFRoZXJlIGlzIG5vIHdheSB0byBlbnVtZXJhdGUgb3IgZGVsZXRlIHRoZSBkYXRhYmFzZXMgYXZhaWxhYmxlIGZvciBhbiBvcmlnaW4gZnJvbSB0aGlzIEFQSS5cbmZ1bmN0aW9uIGdldEFsbFN0b3JlTmFtZXMoZGIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICB0LmV4ZWN1dGVTcWwoJ1NFTEVDVCBuYW1lIEZST00gc3FsaXRlX21hc3RlciAnICsgXCJXSEVSRSB0eXBlPSd0YWJsZScgQU5EIG5hbWUgPD4gJ19fV2ViS2l0RGF0YWJhc2VJbmZvVGFibGVfXydcIiwgW10sIGZ1bmN0aW9uICh0LCByZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0b3JlTmFtZXMgPSBbXTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0cy5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlTmFtZXMucHVzaChyZXN1bHRzLnJvd3MuaXRlbShpKS5uYW1lKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgZGI6IGRiLFxuICAgICAgICAgICAgICAgICAgICBzdG9yZU5hbWVzOiBzdG9yZU5hbWVzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChzcWxFcnJvcikge1xuICAgICAgICAgICAgcmVqZWN0KHNxbEVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGRyb3BJbnN0YW5jZSQxKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sgPSBnZXRDYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgdmFyIGN1cnJlbnRDb25maWcgPSB0aGlzLmNvbmZpZygpO1xuICAgIG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9ucyAhPT0gJ2Z1bmN0aW9uJyAmJiBvcHRpb25zIHx8IHt9O1xuICAgIGlmICghb3B0aW9ucy5uYW1lKSB7XG4gICAgICAgIG9wdGlvbnMubmFtZSA9IG9wdGlvbnMubmFtZSB8fCBjdXJyZW50Q29uZmlnLm5hbWU7XG4gICAgICAgIG9wdGlvbnMuc3RvcmVOYW1lID0gb3B0aW9ucy5zdG9yZU5hbWUgfHwgY3VycmVudENvbmZpZy5zdG9yZU5hbWU7XG4gICAgfVxuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBwcm9taXNlO1xuICAgIGlmICghb3B0aW9ucy5uYW1lKSB7XG4gICAgICAgIHByb21pc2UgPSBQcm9taXNlJDEucmVqZWN0KCdJbnZhbGlkIGFyZ3VtZW50cycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICB2YXIgZGI7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5uYW1lID09PSBjdXJyZW50Q29uZmlnLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAvLyB1c2UgdGhlIGRiIHJlZmVyZW5jZSBvZiB0aGUgY3VycmVudCBpbnN0YW5jZVxuICAgICAgICAgICAgICAgIGRiID0gc2VsZi5fZGJJbmZvLmRiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYiA9IG9wZW5EYXRhYmFzZShvcHRpb25zLm5hbWUsICcnLCAnJywgMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5zdG9yZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAvLyBkcm9wIGFsbCBkYXRhYmFzZSB0YWJsZXNcbiAgICAgICAgICAgICAgICByZXNvbHZlKGdldEFsbFN0b3JlTmFtZXMoZGIpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgIGRiOiBkYixcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVOYW1lczogW29wdGlvbnMuc3RvcmVOYW1lXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChvcGVyYXRpb25JbmZvKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uSW5mby5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBkcm9wVGFibGUoc3RvcmVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5leGVjdXRlU3FsKCdEUk9QIFRBQkxFIElGIEVYSVNUUyAnICsgc3RvcmVOYW1lLCBbXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHZhciBvcGVyYXRpb25zID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBvcGVyYXRpb25JbmZvLnN0b3JlTmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbnMucHVzaChkcm9wVGFibGUob3BlcmF0aW9uSW5mby5zdG9yZU5hbWVzW2ldKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBQcm9taXNlJDEuYWxsKG9wZXJhdGlvbnMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChzcWxFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3Qoc3FsRXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbnZhciB3ZWJTUUxTdG9yYWdlID0ge1xuICAgIF9kcml2ZXI6ICd3ZWJTUUxTdG9yYWdlJyxcbiAgICBfaW5pdFN0b3JhZ2U6IF9pbml0U3RvcmFnZSQxLFxuICAgIF9zdXBwb3J0OiBpc1dlYlNRTFZhbGlkKCksXG4gICAgaXRlcmF0ZTogaXRlcmF0ZSQxLFxuICAgIGdldEl0ZW06IGdldEl0ZW0kMSxcbiAgICBzZXRJdGVtOiBzZXRJdGVtJDEsXG4gICAgcmVtb3ZlSXRlbTogcmVtb3ZlSXRlbSQxLFxuICAgIGNsZWFyOiBjbGVhciQxLFxuICAgIGxlbmd0aDogbGVuZ3RoJDEsXG4gICAga2V5OiBrZXkkMSxcbiAgICBrZXlzOiBrZXlzJDEsXG4gICAgZHJvcEluc3RhbmNlOiBkcm9wSW5zdGFuY2UkMVxufTtcblxuZnVuY3Rpb24gaXNMb2NhbFN0b3JhZ2VWYWxpZCgpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcgJiYgJ3NldEl0ZW0nIGluIGxvY2FsU3RvcmFnZSAmJlxuICAgICAgICAvLyBpbiBJRTggdHlwZW9mIGxvY2FsU3RvcmFnZS5zZXRJdGVtID09PSAnb2JqZWN0J1xuICAgICAgICAhIWxvY2FsU3RvcmFnZS5zZXRJdGVtO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gX2dldEtleVByZWZpeChvcHRpb25zLCBkZWZhdWx0Q29uZmlnKSB7XG4gICAgdmFyIGtleVByZWZpeCA9IG9wdGlvbnMubmFtZSArICcvJztcblxuICAgIGlmIChvcHRpb25zLnN0b3JlTmFtZSAhPT0gZGVmYXVsdENvbmZpZy5zdG9yZU5hbWUpIHtcbiAgICAgICAga2V5UHJlZml4ICs9IG9wdGlvbnMuc3RvcmVOYW1lICsgJy8nO1xuICAgIH1cbiAgICByZXR1cm4ga2V5UHJlZml4O1xufVxuXG4vLyBDaGVjayBpZiBsb2NhbFN0b3JhZ2UgdGhyb3dzIHdoZW4gc2F2aW5nIGFuIGl0ZW1cbmZ1bmN0aW9uIGNoZWNrSWZMb2NhbFN0b3JhZ2VUaHJvd3MoKSB7XG4gICAgdmFyIGxvY2FsU3RvcmFnZVRlc3RLZXkgPSAnX2xvY2FsZm9yYWdlX3N1cHBvcnRfdGVzdCc7XG5cbiAgICB0cnkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsb2NhbFN0b3JhZ2VUZXN0S2V5LCB0cnVlKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0obG9jYWxTdG9yYWdlVGVzdEtleSk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuXG4vLyBDaGVjayBpZiBsb2NhbFN0b3JhZ2UgaXMgdXNhYmxlIGFuZCBhbGxvd3MgdG8gc2F2ZSBhbiBpdGVtXG4vLyBUaGlzIG1ldGhvZCBjaGVja3MgaWYgbG9jYWxTdG9yYWdlIGlzIHVzYWJsZSBpbiBTYWZhcmkgUHJpdmF0ZSBCcm93c2luZ1xuLy8gbW9kZSwgb3IgaW4gYW55IG90aGVyIGNhc2Ugd2hlcmUgdGhlIGF2YWlsYWJsZSBxdW90YSBmb3IgbG9jYWxTdG9yYWdlXG4vLyBpcyAwIGFuZCB0aGVyZSB3YXNuJ3QgYW55IHNhdmVkIGl0ZW1zIHlldC5cbmZ1bmN0aW9uIF9pc0xvY2FsU3RvcmFnZVVzYWJsZSgpIHtcbiAgICByZXR1cm4gIWNoZWNrSWZMb2NhbFN0b3JhZ2VUaHJvd3MoKSB8fCBsb2NhbFN0b3JhZ2UubGVuZ3RoID4gMDtcbn1cblxuLy8gQ29uZmlnIHRoZSBsb2NhbFN0b3JhZ2UgYmFja2VuZCwgdXNpbmcgb3B0aW9ucyBzZXQgaW4gdGhlIGNvbmZpZy5cbmZ1bmN0aW9uIF9pbml0U3RvcmFnZSQyKG9wdGlvbnMpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGRiSW5mbyA9IHt9O1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIGZvciAodmFyIGkgaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgZGJJbmZvW2ldID0gb3B0aW9uc1tpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRiSW5mby5rZXlQcmVmaXggPSBfZ2V0S2V5UHJlZml4KG9wdGlvbnMsIHNlbGYuX2RlZmF1bHRDb25maWcpO1xuXG4gICAgaWYgKCFfaXNMb2NhbFN0b3JhZ2VVc2FibGUoKSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZSQxLnJlamVjdCgpO1xuICAgIH1cblxuICAgIHNlbGYuX2RiSW5mbyA9IGRiSW5mbztcbiAgICBkYkluZm8uc2VyaWFsaXplciA9IGxvY2FsZm9yYWdlU2VyaWFsaXplcjtcblxuICAgIHJldHVybiBQcm9taXNlJDEucmVzb2x2ZSgpO1xufVxuXG4vLyBSZW1vdmUgYWxsIGtleXMgZnJvbSB0aGUgZGF0YXN0b3JlLCBlZmZlY3RpdmVseSBkZXN0cm95aW5nIGFsbCBkYXRhIGluXG4vLyB0aGUgYXBwJ3Mga2V5L3ZhbHVlIHN0b3JlIVxuZnVuY3Rpb24gY2xlYXIkMihjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgcHJvbWlzZSA9IHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGtleVByZWZpeCA9IHNlbGYuX2RiSW5mby5rZXlQcmVmaXg7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IGxvY2FsU3RvcmFnZS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFyIGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG5cbiAgICAgICAgICAgIGlmIChrZXkuaW5kZXhPZihrZXlQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy8gUmV0cmlldmUgYW4gaXRlbSBmcm9tIHRoZSBzdG9yZS4gVW5saWtlIHRoZSBvcmlnaW5hbCBhc3luY19zdG9yYWdlXG4vLyBsaWJyYXJ5IGluIEdhaWEsIHdlIGRvbid0IG1vZGlmeSByZXR1cm4gdmFsdWVzIGF0IGFsbC4gSWYgYSBrZXkncyB2YWx1ZVxuLy8gaXMgYHVuZGVmaW5lZGAsIHdlIHBhc3MgdGhhdCB2YWx1ZSB0byB0aGUgY2FsbGJhY2sgZnVuY3Rpb24uXG5mdW5jdGlvbiBnZXRJdGVtJDIoa2V5LCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGtleSA9IG5vcm1hbGl6ZUtleShrZXkpO1xuXG4gICAgdmFyIHByb21pc2UgPSBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgIHZhciByZXN1bHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYkluZm8ua2V5UHJlZml4ICsga2V5KTtcblxuICAgICAgICAvLyBJZiBhIHJlc3VsdCB3YXMgZm91bmQsIHBhcnNlIGl0IGZyb20gdGhlIHNlcmlhbGl6ZWRcbiAgICAgICAgLy8gc3RyaW5nIGludG8gYSBKUyBvYmplY3QuIElmIHJlc3VsdCBpc24ndCB0cnV0aHksIHRoZSBrZXlcbiAgICAgICAgLy8gaXMgbGlrZWx5IHVuZGVmaW5lZCBhbmQgd2UnbGwgcGFzcyBpdCBzdHJhaWdodCB0byB0aGVcbiAgICAgICAgLy8gY2FsbGJhY2suXG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGRiSW5mby5zZXJpYWxpemVyLmRlc2VyaWFsaXplKHJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy8gSXRlcmF0ZSBvdmVyIGFsbCBpdGVtcyBpbiB0aGUgc3RvcmUuXG5mdW5jdGlvbiBpdGVyYXRlJDIoaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgIHZhciBrZXlQcmVmaXggPSBkYkluZm8ua2V5UHJlZml4O1xuICAgICAgICB2YXIga2V5UHJlZml4TGVuZ3RoID0ga2V5UHJlZml4Lmxlbmd0aDtcbiAgICAgICAgdmFyIGxlbmd0aCA9IGxvY2FsU3RvcmFnZS5sZW5ndGg7XG5cbiAgICAgICAgLy8gV2UgdXNlIGEgZGVkaWNhdGVkIGl0ZXJhdG9yIGluc3RlYWQgb2YgdGhlIGBpYCB2YXJpYWJsZSBiZWxvd1xuICAgICAgICAvLyBzbyBvdGhlciBrZXlzIHdlIGZldGNoIGluIGxvY2FsU3RvcmFnZSBhcmVuJ3QgY291bnRlZCBpblxuICAgICAgICAvLyB0aGUgYGl0ZXJhdGlvbk51bWJlcmAgYXJndW1lbnQgcGFzc2VkIHRvIHRoZSBgaXRlcmF0ZSgpYFxuICAgICAgICAvLyBjYWxsYmFjay5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gU2VlOiBnaXRodWIuY29tL21vemlsbGEvbG9jYWxGb3JhZ2UvcHVsbC80MzUjZGlzY3Vzc2lvbl9yMzgwNjE1MzBcbiAgICAgICAgdmFyIGl0ZXJhdGlvbk51bWJlciA9IDE7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG4gICAgICAgICAgICBpZiAoa2V5LmluZGV4T2Yoa2V5UHJlZml4KSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcblxuICAgICAgICAgICAgLy8gSWYgYSByZXN1bHQgd2FzIGZvdW5kLCBwYXJzZSBpdCBmcm9tIHRoZSBzZXJpYWxpemVkXG4gICAgICAgICAgICAvLyBzdHJpbmcgaW50byBhIEpTIG9iamVjdC4gSWYgcmVzdWx0IGlzbid0IHRydXRoeSwgdGhlXG4gICAgICAgICAgICAvLyBrZXkgaXMgbGlrZWx5IHVuZGVmaW5lZCBhbmQgd2UnbGwgcGFzcyBpdCBzdHJhaWdodFxuICAgICAgICAgICAgLy8gdG8gdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBkYkluZm8uc2VyaWFsaXplci5kZXNlcmlhbGl6ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlID0gaXRlcmF0b3IodmFsdWUsIGtleS5zdWJzdHJpbmcoa2V5UHJlZml4TGVuZ3RoKSwgaXRlcmF0aW9uTnVtYmVyKyspO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy8gU2FtZSBhcyBsb2NhbFN0b3JhZ2UncyBrZXkoKSBtZXRob2QsIGV4Y2VwdCB0YWtlcyBhIGNhbGxiYWNrLlxuZnVuY3Rpb24ga2V5JDIobiwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIHByb21pc2UgPSBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSBsb2NhbFN0b3JhZ2Uua2V5KG4pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgcHJlZml4IGZyb20gdGhlIGtleSwgaWYgYSBrZXkgaXMgZm91bmQuXG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zdWJzdHJpbmcoZGJJbmZvLmtleVByZWZpeC5sZW5ndGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGtleXMkMihjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgcHJvbWlzZSA9IHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgdmFyIGxlbmd0aCA9IGxvY2FsU3RvcmFnZS5sZW5ndGg7XG4gICAgICAgIHZhciBrZXlzID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGl0ZW1LZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuICAgICAgICAgICAgaWYgKGl0ZW1LZXkuaW5kZXhPZihkYkluZm8ua2V5UHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGtleXMucHVzaChpdGVtS2V5LnN1YnN0cmluZyhkYkluZm8ua2V5UHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBTdXBwbHkgdGhlIG51bWJlciBvZiBrZXlzIGluIHRoZSBkYXRhc3RvcmUgdG8gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuZnVuY3Rpb24gbGVuZ3RoJDIoY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIHByb21pc2UgPSBzZWxmLmtleXMoKS50aGVuKGZ1bmN0aW9uIChrZXlzKSB7XG4gICAgICAgIHJldHVybiBrZXlzLmxlbmd0aDtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbi8vIFJlbW92ZSBhbiBpdGVtIGZyb20gdGhlIHN0b3JlLCBuaWNlIGFuZCBzaW1wbGUuXG5mdW5jdGlvbiByZW1vdmVJdGVtJDIoa2V5LCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGtleSA9IG5vcm1hbGl6ZUtleShrZXkpO1xuXG4gICAgdmFyIHByb21pc2UgPSBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGRiSW5mby5rZXlQcmVmaXggKyBrZXkpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy8gU2V0IGEga2V5J3MgdmFsdWUgYW5kIHJ1biBhbiBvcHRpb25hbCBjYWxsYmFjayBvbmNlIHRoZSB2YWx1ZSBpcyBzZXQuXG4vLyBVbmxpa2UgR2FpYSdzIGltcGxlbWVudGF0aW9uLCB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gaXMgcGFzc2VkIHRoZSB2YWx1ZSxcbi8vIGluIGNhc2UgeW91IHdhbnQgdG8gb3BlcmF0ZSBvbiB0aGF0IHZhbHVlIG9ubHkgYWZ0ZXIgeW91J3JlIHN1cmUgaXRcbi8vIHNhdmVkLCBvciBzb21ldGhpbmcgbGlrZSB0aGF0LlxuZnVuY3Rpb24gc2V0SXRlbSQyKGtleSwgdmFsdWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAga2V5ID0gbm9ybWFsaXplS2V5KGtleSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gQ29udmVydCB1bmRlZmluZWQgdmFsdWVzIHRvIG51bGwuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2xvY2FsRm9yYWdlL3B1bGwvNDJcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNhdmUgdGhlIG9yaWdpbmFsIHZhbHVlIHRvIHBhc3MgdG8gdGhlIGNhbGxiYWNrLlxuICAgICAgICB2YXIgb3JpZ2luYWxWYWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgICAgICBkYkluZm8uc2VyaWFsaXplci5zZXJpYWxpemUodmFsdWUsIGZ1bmN0aW9uICh2YWx1ZSwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZGJJbmZvLmtleVByZWZpeCArIGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShvcmlnaW5hbFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbG9jYWxTdG9yYWdlIGNhcGFjaXR5IGV4Y2VlZGVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogTWFrZSB0aGlzIGEgc3BlY2lmaWMgZXJyb3IvZXZlbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJyB8fCBlLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBkcm9wSW5zdGFuY2UkMihvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrID0gZ2V0Q2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9ucyAhPT0gJ2Z1bmN0aW9uJyAmJiBvcHRpb25zIHx8IHt9O1xuICAgIGlmICghb3B0aW9ucy5uYW1lKSB7XG4gICAgICAgIHZhciBjdXJyZW50Q29uZmlnID0gdGhpcy5jb25maWcoKTtcbiAgICAgICAgb3B0aW9ucy5uYW1lID0gb3B0aW9ucy5uYW1lIHx8IGN1cnJlbnRDb25maWcubmFtZTtcbiAgICAgICAgb3B0aW9ucy5zdG9yZU5hbWUgPSBvcHRpb25zLnN0b3JlTmFtZSB8fCBjdXJyZW50Q29uZmlnLnN0b3JlTmFtZTtcbiAgICB9XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIHByb21pc2U7XG4gICAgaWYgKCFvcHRpb25zLm5hbWUpIHtcbiAgICAgICAgcHJvbWlzZSA9IFByb21pc2UkMS5yZWplY3QoJ0ludmFsaWQgYXJndW1lbnRzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5zdG9yZU5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKG9wdGlvbnMubmFtZSArICcvJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoX2dldEtleVByZWZpeChvcHRpb25zLCBzZWxmLl9kZWZhdWx0Q29uZmlnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGtleVByZWZpeCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IGxvY2FsU3RvcmFnZS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKGtleVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbnZhciBsb2NhbFN0b3JhZ2VXcmFwcGVyID0ge1xuICAgIF9kcml2ZXI6ICdsb2NhbFN0b3JhZ2VXcmFwcGVyJyxcbiAgICBfaW5pdFN0b3JhZ2U6IF9pbml0U3RvcmFnZSQyLFxuICAgIF9zdXBwb3J0OiBpc0xvY2FsU3RvcmFnZVZhbGlkKCksXG4gICAgaXRlcmF0ZTogaXRlcmF0ZSQyLFxuICAgIGdldEl0ZW06IGdldEl0ZW0kMixcbiAgICBzZXRJdGVtOiBzZXRJdGVtJDIsXG4gICAgcmVtb3ZlSXRlbTogcmVtb3ZlSXRlbSQyLFxuICAgIGNsZWFyOiBjbGVhciQyLFxuICAgIGxlbmd0aDogbGVuZ3RoJDIsXG4gICAga2V5OiBrZXkkMixcbiAgICBrZXlzOiBrZXlzJDIsXG4gICAgZHJvcEluc3RhbmNlOiBkcm9wSW5zdGFuY2UkMlxufTtcblxudmFyIHNhbWVWYWx1ZSA9IGZ1bmN0aW9uIHNhbWVWYWx1ZSh4LCB5KSB7XG4gICAgcmV0dXJuIHggPT09IHkgfHwgdHlwZW9mIHggPT09ICdudW1iZXInICYmIHR5cGVvZiB5ID09PSAnbnVtYmVyJyAmJiBpc05hTih4KSAmJiBpc05hTih5KTtcbn07XG5cbnZhciBpbmNsdWRlcyA9IGZ1bmN0aW9uIGluY2x1ZGVzKGFycmF5LCBzZWFyY2hFbGVtZW50KSB7XG4gICAgdmFyIGxlbiA9IGFycmF5Lmxlbmd0aDtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICAgICAgaWYgKHNhbWVWYWx1ZShhcnJheVtpXSwgc2VhcmNoRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJnKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbi8vIERyaXZlcnMgYXJlIHN0b3JlZCBoZXJlIHdoZW4gYGRlZmluZURyaXZlcigpYCBpcyBjYWxsZWQuXG4vLyBUaGV5IGFyZSBzaGFyZWQgYWNyb3NzIGFsbCBpbnN0YW5jZXMgb2YgbG9jYWxGb3JhZ2UuXG52YXIgRGVmaW5lZERyaXZlcnMgPSB7fTtcblxudmFyIERyaXZlclN1cHBvcnQgPSB7fTtcblxudmFyIERlZmF1bHREcml2ZXJzID0ge1xuICAgIElOREVYRUREQjogYXN5bmNTdG9yYWdlLFxuICAgIFdFQlNRTDogd2ViU1FMU3RvcmFnZSxcbiAgICBMT0NBTFNUT1JBR0U6IGxvY2FsU3RvcmFnZVdyYXBwZXJcbn07XG5cbnZhciBEZWZhdWx0RHJpdmVyT3JkZXIgPSBbRGVmYXVsdERyaXZlcnMuSU5ERVhFRERCLl9kcml2ZXIsIERlZmF1bHREcml2ZXJzLldFQlNRTC5fZHJpdmVyLCBEZWZhdWx0RHJpdmVycy5MT0NBTFNUT1JBR0UuX2RyaXZlcl07XG5cbnZhciBPcHRpb25hbERyaXZlck1ldGhvZHMgPSBbJ2Ryb3BJbnN0YW5jZSddO1xuXG52YXIgTGlicmFyeU1ldGhvZHMgPSBbJ2NsZWFyJywgJ2dldEl0ZW0nLCAnaXRlcmF0ZScsICdrZXknLCAna2V5cycsICdsZW5ndGgnLCAncmVtb3ZlSXRlbScsICdzZXRJdGVtJ10uY29uY2F0KE9wdGlvbmFsRHJpdmVyTWV0aG9kcyk7XG5cbnZhciBEZWZhdWx0Q29uZmlnID0ge1xuICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICBkcml2ZXI6IERlZmF1bHREcml2ZXJPcmRlci5zbGljZSgpLFxuICAgIG5hbWU6ICdsb2NhbGZvcmFnZScsXG4gICAgLy8gRGVmYXVsdCBEQiBzaXplIGlzIF9KVVNUIFVOREVSXyA1TUIsIGFzIGl0J3MgdGhlIGhpZ2hlc3Qgc2l6ZVxuICAgIC8vIHdlIGNhbiB1c2Ugd2l0aG91dCBhIHByb21wdC5cbiAgICBzaXplOiA0OTgwNzM2LFxuICAgIHN0b3JlTmFtZTogJ2tleXZhbHVlcGFpcnMnLFxuICAgIHZlcnNpb246IDEuMFxufTtcblxuZnVuY3Rpb24gY2FsbFdoZW5SZWFkeShsb2NhbEZvcmFnZUluc3RhbmNlLCBsaWJyYXJ5TWV0aG9kKSB7XG4gICAgbG9jYWxGb3JhZ2VJbnN0YW5jZVtsaWJyYXJ5TWV0aG9kXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hcmdzID0gYXJndW1lbnRzO1xuICAgICAgICByZXR1cm4gbG9jYWxGb3JhZ2VJbnN0YW5jZS5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGxvY2FsRm9yYWdlSW5zdGFuY2VbbGlicmFyeU1ldGhvZF0uYXBwbHkobG9jYWxGb3JhZ2VJbnN0YW5jZSwgX2FyZ3MpO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgICBpZiAoYXJnKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfa2V5IGluIGFyZykge1xuICAgICAgICAgICAgICAgIGlmIChhcmcuaGFzT3duUHJvcGVydHkoX2tleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQXJyYXkoYXJnW19rZXldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzWzBdW19rZXldID0gYXJnW19rZXldLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHNbMF1bX2tleV0gPSBhcmdbX2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJndW1lbnRzWzBdO1xufVxuXG52YXIgTG9jYWxGb3JhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTG9jYWxGb3JhZ2Uob3B0aW9ucykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTG9jYWxGb3JhZ2UpO1xuXG4gICAgICAgIGZvciAodmFyIGRyaXZlclR5cGVLZXkgaW4gRGVmYXVsdERyaXZlcnMpIHtcbiAgICAgICAgICAgIGlmIChEZWZhdWx0RHJpdmVycy5oYXNPd25Qcm9wZXJ0eShkcml2ZXJUeXBlS2V5KSkge1xuICAgICAgICAgICAgICAgIHZhciBkcml2ZXIgPSBEZWZhdWx0RHJpdmVyc1tkcml2ZXJUeXBlS2V5XTtcbiAgICAgICAgICAgICAgICB2YXIgZHJpdmVyTmFtZSA9IGRyaXZlci5fZHJpdmVyO1xuICAgICAgICAgICAgICAgIHRoaXNbZHJpdmVyVHlwZUtleV0gPSBkcml2ZXJOYW1lO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFEZWZpbmVkRHJpdmVyc1tkcml2ZXJOYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBkb24ndCBuZWVkIHRvIHdhaXQgZm9yIHRoZSBwcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAvLyBzaW5jZSB0aGUgZGVmYXVsdCBkcml2ZXJzIGNhbiBiZSBkZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGluIGEgYmxvY2tpbmcgbWFubmVyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmaW5lRHJpdmVyKGRyaXZlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZGVmYXVsdENvbmZpZyA9IGV4dGVuZCh7fSwgRGVmYXVsdENvbmZpZyk7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGV4dGVuZCh7fSwgdGhpcy5fZGVmYXVsdENvbmZpZywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX2RyaXZlclNldCA9IG51bGw7XG4gICAgICAgIHRoaXMuX2luaXREcml2ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLl9yZWFkeSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9kYkluZm8gPSBudWxsO1xuXG4gICAgICAgIHRoaXMuX3dyYXBMaWJyYXJ5TWV0aG9kc1dpdGhSZWFkeSgpO1xuICAgICAgICB0aGlzLnNldERyaXZlcih0aGlzLl9jb25maWcuZHJpdmVyKVtcImNhdGNoXCJdKGZ1bmN0aW9uICgpIHt9KTtcbiAgICB9XG5cbiAgICAvLyBTZXQgYW55IGNvbmZpZyB2YWx1ZXMgZm9yIGxvY2FsRm9yYWdlOyBjYW4gYmUgY2FsbGVkIGFueXRpbWUgYmVmb3JlXG4gICAgLy8gdGhlIGZpcnN0IEFQSSBjYWxsIChlLmcuIGBnZXRJdGVtYCwgYHNldEl0ZW1gKS5cbiAgICAvLyBXZSBsb29wIHRocm91Z2ggb3B0aW9ucyBzbyB3ZSBkb24ndCBvdmVyd3JpdGUgZXhpc3RpbmcgY29uZmlnXG4gICAgLy8gdmFsdWVzLlxuXG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuY29uZmlnID0gZnVuY3Rpb24gY29uZmlnKG9wdGlvbnMpIHtcbiAgICAgICAgLy8gSWYgdGhlIG9wdGlvbnMgYXJndW1lbnQgaXMgYW4gb2JqZWN0LCB3ZSB1c2UgaXQgdG8gc2V0IHZhbHVlcy5cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSByZXR1cm4gZWl0aGVyIGEgc3BlY2lmaWVkIGNvbmZpZyB2YWx1ZSBvciBhbGxcbiAgICAgICAgLy8gY29uZmlnIHZhbHVlcy5cbiAgICAgICAgaWYgKCh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob3B0aW9ucykpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgLy8gSWYgbG9jYWxmb3JhZ2UgaXMgcmVhZHkgYW5kIGZ1bGx5IGluaXRpYWxpemVkLCB3ZSBjYW4ndCBzZXRcbiAgICAgICAgICAgIC8vIGFueSBuZXcgY29uZmlndXJhdGlvbiB2YWx1ZXMuIEluc3RlYWQsIHdlIHJldHVybiBhbiBlcnJvci5cbiAgICAgICAgICAgIGlmICh0aGlzLl9yZWFkeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJDYW4ndCBjYWxsIGNvbmZpZygpIGFmdGVyIGxvY2FsZm9yYWdlIFwiICsgJ2hhcyBiZWVuIHVzZWQuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmIChpID09PSAnc3RvcmVOYW1lJykge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zW2ldID0gb3B0aW9uc1tpXS5yZXBsYWNlKC9cXFcvZywgJ18nKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gJ3ZlcnNpb24nICYmIHR5cGVvZiBvcHRpb25zW2ldICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdEYXRhYmFzZSB2ZXJzaW9uIG11c3QgYmUgYSBudW1iZXIuJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5fY29uZmlnW2ldID0gb3B0aW9uc1tpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYWZ0ZXIgYWxsIGNvbmZpZyBvcHRpb25zIGFyZSBzZXQgYW5kXG4gICAgICAgICAgICAvLyB0aGUgZHJpdmVyIG9wdGlvbiBpcyB1c2VkLCB0cnkgc2V0dGluZyBpdFxuICAgICAgICAgICAgaWYgKCdkcml2ZXInIGluIG9wdGlvbnMgJiYgb3B0aW9ucy5kcml2ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXREcml2ZXIodGhpcy5fY29uZmlnLmRyaXZlcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZ1tvcHRpb25zXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gVXNlZCB0byBkZWZpbmUgYSBjdXN0b20gZHJpdmVyLCBzaGFyZWQgYWNyb3NzIGFsbCBpbnN0YW5jZXMgb2ZcbiAgICAvLyBsb2NhbEZvcmFnZS5cblxuXG4gICAgTG9jYWxGb3JhZ2UucHJvdG90eXBlLmRlZmluZURyaXZlciA9IGZ1bmN0aW9uIGRlZmluZURyaXZlcihkcml2ZXJPYmplY3QsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBkcml2ZXJOYW1lID0gZHJpdmVyT2JqZWN0Ll9kcml2ZXI7XG4gICAgICAgICAgICAgICAgdmFyIGNvbXBsaWFuY2VFcnJvciA9IG5ldyBFcnJvcignQ3VzdG9tIGRyaXZlciBub3QgY29tcGxpYW50OyBzZWUgJyArICdodHRwczovL21vemlsbGEuZ2l0aHViLmlvL2xvY2FsRm9yYWdlLyNkZWZpbmVkcml2ZXInKTtcblxuICAgICAgICAgICAgICAgIC8vIEEgZHJpdmVyIG5hbWUgc2hvdWxkIGJlIGRlZmluZWQgYW5kIG5vdCBvdmVybGFwIHdpdGggdGhlXG4gICAgICAgICAgICAgICAgLy8gbGlicmFyeS1kZWZpbmVkLCBkZWZhdWx0IGRyaXZlcnMuXG4gICAgICAgICAgICAgICAgaWYgKCFkcml2ZXJPYmplY3QuX2RyaXZlcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoY29tcGxpYW5jZUVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBkcml2ZXJNZXRob2RzID0gTGlicmFyeU1ldGhvZHMuY29uY2F0KCdfaW5pdFN0b3JhZ2UnKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZHJpdmVyTWV0aG9kcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZHJpdmVyTWV0aG9kTmFtZSA9IGRyaXZlck1ldGhvZHNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiB0aGUgcHJvcGVydHkgaXMgdGhlcmUsXG4gICAgICAgICAgICAgICAgICAgIC8vIGl0IHNob3VsZCBiZSBhIG1ldGhvZCBldmVuIHdoZW4gb3B0aW9uYWxcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzUmVxdWlyZWQgPSAhaW5jbHVkZXMoT3B0aW9uYWxEcml2ZXJNZXRob2RzLCBkcml2ZXJNZXRob2ROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChpc1JlcXVpcmVkIHx8IGRyaXZlck9iamVjdFtkcml2ZXJNZXRob2ROYW1lXSkgJiYgdHlwZW9mIGRyaXZlck9iamVjdFtkcml2ZXJNZXRob2ROYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGNvbXBsaWFuY2VFcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgY29uZmlndXJlTWlzc2luZ01ldGhvZHMgPSBmdW5jdGlvbiBjb25maWd1cmVNaXNzaW5nTWV0aG9kcygpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1ldGhvZE5vdEltcGxlbWVudGVkRmFjdG9yeSA9IGZ1bmN0aW9uIG1ldGhvZE5vdEltcGxlbWVudGVkRmFjdG9yeShtZXRob2ROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcignTWV0aG9kICcgKyBtZXRob2ROYW1lICsgJyBpcyBub3QgaW1wbGVtZW50ZWQgYnkgdGhlIGN1cnJlbnQgZHJpdmVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBQcm9taXNlJDEucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2xlbiA9IE9wdGlvbmFsRHJpdmVyTWV0aG9kcy5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wdGlvbmFsRHJpdmVyTWV0aG9kID0gT3B0aW9uYWxEcml2ZXJNZXRob2RzW19pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZHJpdmVyT2JqZWN0W29wdGlvbmFsRHJpdmVyTWV0aG9kXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyaXZlck9iamVjdFtvcHRpb25hbERyaXZlck1ldGhvZF0gPSBtZXRob2ROb3RJbXBsZW1lbnRlZEZhY3Rvcnkob3B0aW9uYWxEcml2ZXJNZXRob2QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyZU1pc3NpbmdNZXRob2RzKCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgc2V0RHJpdmVyU3VwcG9ydCA9IGZ1bmN0aW9uIHNldERyaXZlclN1cHBvcnQoc3VwcG9ydCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoRGVmaW5lZERyaXZlcnNbZHJpdmVyTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnUmVkZWZpbmluZyBMb2NhbEZvcmFnZSBkcml2ZXI6ICcgKyBkcml2ZXJOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBEZWZpbmVkRHJpdmVyc1tkcml2ZXJOYW1lXSA9IGRyaXZlck9iamVjdDtcbiAgICAgICAgICAgICAgICAgICAgRHJpdmVyU3VwcG9ydFtkcml2ZXJOYW1lXSA9IHN1cHBvcnQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRvbid0IHVzZSBhIHRoZW4sIHNvIHRoYXQgd2UgY2FuIGRlZmluZVxuICAgICAgICAgICAgICAgICAgICAvLyBkcml2ZXJzIHRoYXQgaGF2ZSBzaW1wbGUgX3N1cHBvcnQgbWV0aG9kc1xuICAgICAgICAgICAgICAgICAgICAvLyBpbiBhIGJsb2NraW5nIG1hbm5lclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmICgnX3N1cHBvcnQnIGluIGRyaXZlck9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZHJpdmVyT2JqZWN0Ll9zdXBwb3J0ICYmIHR5cGVvZiBkcml2ZXJPYmplY3QuX3N1cHBvcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyaXZlck9iamVjdC5fc3VwcG9ydCgpLnRoZW4oc2V0RHJpdmVyU3VwcG9ydCwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldERyaXZlclN1cHBvcnQoISFkcml2ZXJPYmplY3QuX3N1cHBvcnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RHJpdmVyU3VwcG9ydCh0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBleGVjdXRlVHdvQ2FsbGJhY2tzKHByb21pc2UsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIExvY2FsRm9yYWdlLnByb3RvdHlwZS5kcml2ZXIgPSBmdW5jdGlvbiBkcml2ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kcml2ZXIgfHwgbnVsbDtcbiAgICB9O1xuXG4gICAgTG9jYWxGb3JhZ2UucHJvdG90eXBlLmdldERyaXZlciA9IGZ1bmN0aW9uIGdldERyaXZlcihkcml2ZXJOYW1lLCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjaykge1xuICAgICAgICB2YXIgZ2V0RHJpdmVyUHJvbWlzZSA9IERlZmluZWREcml2ZXJzW2RyaXZlck5hbWVdID8gUHJvbWlzZSQxLnJlc29sdmUoRGVmaW5lZERyaXZlcnNbZHJpdmVyTmFtZV0pIDogUHJvbWlzZSQxLnJlamVjdChuZXcgRXJyb3IoJ0RyaXZlciBub3QgZm91bmQuJykpO1xuXG4gICAgICAgIGV4ZWN1dGVUd29DYWxsYmFja3MoZ2V0RHJpdmVyUHJvbWlzZSwgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gZ2V0RHJpdmVyUHJvbWlzZTtcbiAgICB9O1xuXG4gICAgTG9jYWxGb3JhZ2UucHJvdG90eXBlLmdldFNlcmlhbGl6ZXIgPSBmdW5jdGlvbiBnZXRTZXJpYWxpemVyKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzZXJpYWxpemVyUHJvbWlzZSA9IFByb21pc2UkMS5yZXNvbHZlKGxvY2FsZm9yYWdlU2VyaWFsaXplcik7XG4gICAgICAgIGV4ZWN1dGVUd29DYWxsYmFja3Moc2VyaWFsaXplclByb21pc2UsIGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZXJQcm9taXNlO1xuICAgIH07XG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUucmVhZHkgPSBmdW5jdGlvbiByZWFkeShjYWxsYmFjaykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHByb21pc2UgPSBzZWxmLl9kcml2ZXJTZXQudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5fcmVhZHkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBzZWxmLl9yZWFkeSA9IHNlbGYuX2luaXREcml2ZXIoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuX3JlYWR5O1xuICAgICAgICB9KTtcblxuICAgICAgICBleGVjdXRlVHdvQ2FsbGJhY2tzKHByb21pc2UsIGNhbGxiYWNrLCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuc2V0RHJpdmVyID0gZnVuY3Rpb24gc2V0RHJpdmVyKGRyaXZlcnMsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAoIWlzQXJyYXkoZHJpdmVycykpIHtcbiAgICAgICAgICAgIGRyaXZlcnMgPSBbZHJpdmVyc107XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3VwcG9ydGVkRHJpdmVycyA9IHRoaXMuX2dldFN1cHBvcnRlZERyaXZlcnMoZHJpdmVycyk7XG5cbiAgICAgICAgZnVuY3Rpb24gc2V0RHJpdmVyVG9Db25maWcoKSB7XG4gICAgICAgICAgICBzZWxmLl9jb25maWcuZHJpdmVyID0gc2VsZi5kcml2ZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGV4dGVuZFNlbGZXaXRoRHJpdmVyKGRyaXZlcikge1xuICAgICAgICAgICAgc2VsZi5fZXh0ZW5kKGRyaXZlcik7XG4gICAgICAgICAgICBzZXREcml2ZXJUb0NvbmZpZygpO1xuXG4gICAgICAgICAgICBzZWxmLl9yZWFkeSA9IHNlbGYuX2luaXRTdG9yYWdlKHNlbGYuX2NvbmZpZyk7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi5fcmVhZHk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpbml0RHJpdmVyKHN1cHBvcnRlZERyaXZlcnMpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnREcml2ZXJJbmRleCA9IDA7XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBkcml2ZXJQcm9taXNlTG9vcCgpIHtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnREcml2ZXJJbmRleCA8IHN1cHBvcnRlZERyaXZlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHJpdmVyTmFtZSA9IHN1cHBvcnRlZERyaXZlcnNbY3VycmVudERyaXZlckluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnREcml2ZXJJbmRleCsrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9kYkluZm8gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fcmVhZHkgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5nZXREcml2ZXIoZHJpdmVyTmFtZSkudGhlbihleHRlbmRTZWxmV2l0aERyaXZlcilbXCJjYXRjaFwiXShkcml2ZXJQcm9taXNlTG9vcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzZXREcml2ZXJUb0NvbmZpZygpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoJ05vIGF2YWlsYWJsZSBzdG9yYWdlIG1ldGhvZCBmb3VuZC4nKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5fZHJpdmVyU2V0ID0gUHJvbWlzZSQxLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLl9kcml2ZXJTZXQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRyaXZlclByb21pc2VMb29wKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhlcmUgbWlnaHQgYmUgYSBkcml2ZXIgaW5pdGlhbGl6YXRpb24gaW4gcHJvZ3Jlc3NcbiAgICAgICAgLy8gc28gd2FpdCBmb3IgaXQgdG8gZmluaXNoIGluIG9yZGVyIHRvIGF2b2lkIGEgcG9zc2libGVcbiAgICAgICAgLy8gcmFjZSBjb25kaXRpb24gdG8gc2V0IF9kYkluZm9cbiAgICAgICAgdmFyIG9sZERyaXZlclNldERvbmUgPSB0aGlzLl9kcml2ZXJTZXQgIT09IG51bGwgPyB0aGlzLl9kcml2ZXJTZXRbXCJjYXRjaFwiXShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZSQxLnJlc29sdmUoKTtcbiAgICAgICAgfSkgOiBQcm9taXNlJDEucmVzb2x2ZSgpO1xuXG4gICAgICAgIHRoaXMuX2RyaXZlclNldCA9IG9sZERyaXZlclNldERvbmUudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZHJpdmVyTmFtZSA9IHN1cHBvcnRlZERyaXZlcnNbMF07XG4gICAgICAgICAgICBzZWxmLl9kYkluZm8gPSBudWxsO1xuICAgICAgICAgICAgc2VsZi5fcmVhZHkgPSBudWxsO1xuXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5nZXREcml2ZXIoZHJpdmVyTmFtZSkudGhlbihmdW5jdGlvbiAoZHJpdmVyKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5fZHJpdmVyID0gZHJpdmVyLl9kcml2ZXI7XG4gICAgICAgICAgICAgICAgc2V0RHJpdmVyVG9Db25maWcoKTtcbiAgICAgICAgICAgICAgICBzZWxmLl93cmFwTGlicmFyeU1ldGhvZHNXaXRoUmVhZHkoKTtcbiAgICAgICAgICAgICAgICBzZWxmLl9pbml0RHJpdmVyID0gaW5pdERyaXZlcihzdXBwb3J0ZWREcml2ZXJzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNldERyaXZlclRvQ29uZmlnKCk7XG4gICAgICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoJ05vIGF2YWlsYWJsZSBzdG9yYWdlIG1ldGhvZCBmb3VuZC4nKTtcbiAgICAgICAgICAgIHNlbGYuX2RyaXZlclNldCA9IFByb21pc2UkMS5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYuX2RyaXZlclNldDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZXhlY3V0ZVR3b0NhbGxiYWNrcyh0aGlzLl9kcml2ZXJTZXQsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RyaXZlclNldDtcbiAgICB9O1xuXG4gICAgTG9jYWxGb3JhZ2UucHJvdG90eXBlLnN1cHBvcnRzID0gZnVuY3Rpb24gc3VwcG9ydHMoZHJpdmVyTmFtZSkge1xuICAgICAgICByZXR1cm4gISFEcml2ZXJTdXBwb3J0W2RyaXZlck5hbWVdO1xuICAgIH07XG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuX2V4dGVuZCA9IGZ1bmN0aW9uIF9leHRlbmQobGlicmFyeU1ldGhvZHNBbmRQcm9wZXJ0aWVzKSB7XG4gICAgICAgIGV4dGVuZCh0aGlzLCBsaWJyYXJ5TWV0aG9kc0FuZFByb3BlcnRpZXMpO1xuICAgIH07XG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuX2dldFN1cHBvcnRlZERyaXZlcnMgPSBmdW5jdGlvbiBfZ2V0U3VwcG9ydGVkRHJpdmVycyhkcml2ZXJzKSB7XG4gICAgICAgIHZhciBzdXBwb3J0ZWREcml2ZXJzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBkcml2ZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZHJpdmVyTmFtZSA9IGRyaXZlcnNbaV07XG4gICAgICAgICAgICBpZiAodGhpcy5zdXBwb3J0cyhkcml2ZXJOYW1lKSkge1xuICAgICAgICAgICAgICAgIHN1cHBvcnRlZERyaXZlcnMucHVzaChkcml2ZXJOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3VwcG9ydGVkRHJpdmVycztcbiAgICB9O1xuXG4gICAgTG9jYWxGb3JhZ2UucHJvdG90eXBlLl93cmFwTGlicmFyeU1ldGhvZHNXaXRoUmVhZHkgPSBmdW5jdGlvbiBfd3JhcExpYnJhcnlNZXRob2RzV2l0aFJlYWR5KCkge1xuICAgICAgICAvLyBBZGQgYSBzdHViIGZvciBlYWNoIGRyaXZlciBBUEkgbWV0aG9kIHRoYXQgZGVsYXlzIHRoZSBjYWxsIHRvIHRoZVxuICAgICAgICAvLyBjb3JyZXNwb25kaW5nIGRyaXZlciBtZXRob2QgdW50aWwgbG9jYWxGb3JhZ2UgaXMgcmVhZHkuIFRoZXNlIHN0dWJzXG4gICAgICAgIC8vIHdpbGwgYmUgcmVwbGFjZWQgYnkgdGhlIGRyaXZlciBtZXRob2RzIGFzIHNvb24gYXMgdGhlIGRyaXZlciBpc1xuICAgICAgICAvLyBsb2FkZWQsIHNvIHRoZXJlIGlzIG5vIHBlcmZvcm1hbmNlIGltcGFjdC5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IExpYnJhcnlNZXRob2RzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjYWxsV2hlblJlYWR5KHRoaXMsIExpYnJhcnlNZXRob2RzW2ldKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuY3JlYXRlSW5zdGFuY2UgPSBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgTG9jYWxGb3JhZ2Uob3B0aW9ucyk7XG4gICAgfTtcblxuICAgIHJldHVybiBMb2NhbEZvcmFnZTtcbn0oKTtcblxuLy8gVGhlIGFjdHVhbCBsb2NhbEZvcmFnZSBvYmplY3QgdGhhdCB3ZSBleHBvc2UgYXMgYSBtb2R1bGUgb3IgdmlhIGFcbi8vIGdsb2JhbC4gSXQncyBleHRlbmRlZCBieSBwdWxsaW5nIGluIG9uZSBvZiBvdXIgb3RoZXIgbGlicmFyaWVzLlxuXG5cbnZhciBsb2NhbGZvcmFnZV9qcyA9IG5ldyBMb2NhbEZvcmFnZSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvY2FsZm9yYWdlX2pzO1xuXG59LHtcIjNcIjozfV19LHt9LFs0XSkoNClcbn0pO1xuIiwiaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5leHBvcnQgZGVmYXVsdCBTeW1ib2w7XG4iLCJpbXBvcnQgU3ltYm9sIGZyb20gJy4vX1N5bWJvbC5qcyc7XG5pbXBvcnQgZ2V0UmF3VGFnIGZyb20gJy4vX2dldFJhd1RhZy5qcyc7XG5pbXBvcnQgb2JqZWN0VG9TdHJpbmcgZnJvbSAnLi9fb2JqZWN0VG9TdHJpbmcuanMnO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUdldFRhZztcbiIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbmV4cG9ydCBkZWZhdWx0IGZyZWVHbG9iYWw7XG4iLCJpbXBvcnQgb3ZlckFyZyBmcm9tICcuL19vdmVyQXJnLmpzJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgZ2V0UHJvdG90eXBlID0gb3ZlckFyZyhPYmplY3QuZ2V0UHJvdG90eXBlT2YsIE9iamVjdCk7XG5cbmV4cG9ydCBkZWZhdWx0IGdldFByb3RvdHlwZTtcbiIsImltcG9ydCBTeW1ib2wgZnJvbSAnLi9fU3ltYm9sLmpzJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRSYXdUYWc7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb2JqZWN0VG9TdHJpbmc7XG4iLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb3ZlckFyZztcbiIsImltcG9ydCBmcmVlR2xvYmFsIGZyb20gJy4vX2ZyZWVHbG9iYWwuanMnO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3Q7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNPYmplY3RMaWtlO1xuIiwiaW1wb3J0IGJhc2VHZXRUYWcgZnJvbSAnLi9fYmFzZUdldFRhZy5qcyc7XG5pbXBvcnQgZ2V0UHJvdG90eXBlIGZyb20gJy4vX2dldFByb3RvdHlwZS5qcyc7XG5pbXBvcnQgaXNPYmplY3RMaWtlIGZyb20gJy4vaXNPYmplY3RMaWtlLmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gaW5mZXIgdGhlIGBPYmplY3RgIGNvbnN0cnVjdG9yLiAqL1xudmFyIG9iamVjdEN0b3JTdHJpbmcgPSBmdW5jVG9TdHJpbmcuY2FsbChPYmplY3QpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCB0aGF0IGlzLCBhbiBvYmplY3QgY3JlYXRlZCBieSB0aGVcbiAqIGBPYmplY3RgIGNvbnN0cnVjdG9yIG9yIG9uZSB3aXRoIGEgYFtbUHJvdG90eXBlXV1gIG9mIGBudWxsYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuOC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiB9XG4gKlxuICogXy5pc1BsYWluT2JqZWN0KG5ldyBGb28pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KHsgJ3gnOiAwLCAneSc6IDAgfSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3RMaWtlKHZhbHVlKSB8fCBiYXNlR2V0VGFnKHZhbHVlKSAhPSBvYmplY3RUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHByb3RvID0gZ2V0UHJvdG90eXBlKHZhbHVlKTtcbiAgaWYgKHByb3RvID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIEN0b3IgPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvLCAnY29uc3RydWN0b3InKSAmJiBwcm90by5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuIHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3RvciBpbnN0YW5jZW9mIEN0b3IgJiZcbiAgICBmdW5jVG9TdHJpbmcuY2FsbChDdG9yKSA9PSBvYmplY3RDdG9yU3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc1BsYWluT2JqZWN0O1xuIiwidmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuaW1wb3J0IGNvbXBvc2UgZnJvbSAnLi9jb21wb3NlJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RvcmUgZW5oYW5jZXIgdGhhdCBhcHBsaWVzIG1pZGRsZXdhcmUgdG8gdGhlIGRpc3BhdGNoIG1ldGhvZFxuICogb2YgdGhlIFJlZHV4IHN0b3JlLiBUaGlzIGlzIGhhbmR5IGZvciBhIHZhcmlldHkgb2YgdGFza3MsIHN1Y2ggYXMgZXhwcmVzc2luZ1xuICogYXN5bmNocm9ub3VzIGFjdGlvbnMgaW4gYSBjb25jaXNlIG1hbm5lciwgb3IgbG9nZ2luZyBldmVyeSBhY3Rpb24gcGF5bG9hZC5cbiAqXG4gKiBTZWUgYHJlZHV4LXRodW5rYCBwYWNrYWdlIGFzIGFuIGV4YW1wbGUgb2YgdGhlIFJlZHV4IG1pZGRsZXdhcmUuXG4gKlxuICogQmVjYXVzZSBtaWRkbGV3YXJlIGlzIHBvdGVudGlhbGx5IGFzeW5jaHJvbm91cywgdGhpcyBzaG91bGQgYmUgdGhlIGZpcnN0XG4gKiBzdG9yZSBlbmhhbmNlciBpbiB0aGUgY29tcG9zaXRpb24gY2hhaW4uXG4gKlxuICogTm90ZSB0aGF0IGVhY2ggbWlkZGxld2FyZSB3aWxsIGJlIGdpdmVuIHRoZSBgZGlzcGF0Y2hgIGFuZCBgZ2V0U3RhdGVgIGZ1bmN0aW9uc1xuICogYXMgbmFtZWQgYXJndW1lbnRzLlxuICpcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IG1pZGRsZXdhcmVzIFRoZSBtaWRkbGV3YXJlIGNoYWluIHRvIGJlIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgc3RvcmUgZW5oYW5jZXIgYXBwbHlpbmcgdGhlIG1pZGRsZXdhcmUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGx5TWlkZGxld2FyZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG1pZGRsZXdhcmVzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgbWlkZGxld2FyZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGNyZWF0ZVN0b3JlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSwgZW5oYW5jZXIpIHtcbiAgICAgIHZhciBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlLCBlbmhhbmNlcik7XG4gICAgICB2YXIgX2Rpc3BhdGNoID0gc3RvcmUuZGlzcGF0Y2g7XG4gICAgICB2YXIgY2hhaW4gPSBbXTtcblxuICAgICAgdmFyIG1pZGRsZXdhcmVBUEkgPSB7XG4gICAgICAgIGdldFN0YXRlOiBzdG9yZS5nZXRTdGF0ZSxcbiAgICAgICAgZGlzcGF0Y2g6IGZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbikge1xuICAgICAgICAgIHJldHVybiBfZGlzcGF0Y2goYWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNoYWluID0gbWlkZGxld2FyZXMubWFwKGZ1bmN0aW9uIChtaWRkbGV3YXJlKSB7XG4gICAgICAgIHJldHVybiBtaWRkbGV3YXJlKG1pZGRsZXdhcmVBUEkpO1xuICAgICAgfSk7XG4gICAgICBfZGlzcGF0Y2ggPSBjb21wb3NlLmFwcGx5KHVuZGVmaW5lZCwgY2hhaW4pKHN0b3JlLmRpc3BhdGNoKTtcblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdG9yZSwge1xuICAgICAgICBkaXNwYXRjaDogX2Rpc3BhdGNoXG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufSIsImZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsIGRpc3BhdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbkNyZWF0b3IuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBUdXJucyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb24gY3JlYXRvcnMsIGludG8gYW4gb2JqZWN0IHdpdGggdGhlXG4gKiBzYW1lIGtleXMsIGJ1dCB3aXRoIGV2ZXJ5IGZ1bmN0aW9uIHdyYXBwZWQgaW50byBhIGBkaXNwYXRjaGAgY2FsbCBzbyB0aGV5XG4gKiBtYXkgYmUgaW52b2tlZCBkaXJlY3RseS4gVGhpcyBpcyBqdXN0IGEgY29udmVuaWVuY2UgbWV0aG9kLCBhcyB5b3UgY2FuIGNhbGxcbiAqIGBzdG9yZS5kaXNwYXRjaChNeUFjdGlvbkNyZWF0b3JzLmRvU29tZXRoaW5nKCkpYCB5b3Vyc2VsZiBqdXN0IGZpbmUuXG4gKlxuICogRm9yIGNvbnZlbmllbmNlLCB5b3UgY2FuIGFsc28gcGFzcyBhIHNpbmdsZSBmdW5jdGlvbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQsXG4gKiBhbmQgZ2V0IGEgZnVuY3Rpb24gaW4gcmV0dXJuLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb258T2JqZWN0fSBhY3Rpb25DcmVhdG9ycyBBbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb25cbiAqIGNyZWF0b3IgZnVuY3Rpb25zLiBPbmUgaGFuZHkgd2F5IHRvIG9idGFpbiBpdCBpcyB0byB1c2UgRVM2IGBpbXBvcnQgKiBhc2BcbiAqIHN5bnRheC4gWW91IG1heSBhbHNvIHBhc3MgYSBzaW5nbGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZGlzcGF0Y2ggVGhlIGBkaXNwYXRjaGAgZnVuY3Rpb24gYXZhaWxhYmxlIG9uIHlvdXIgUmVkdXhcbiAqIHN0b3JlLlxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbnxPYmplY3R9IFRoZSBvYmplY3QgbWltaWNraW5nIHRoZSBvcmlnaW5hbCBvYmplY3QsIGJ1dCB3aXRoXG4gKiBldmVyeSBhY3Rpb24gY3JlYXRvciB3cmFwcGVkIGludG8gdGhlIGBkaXNwYXRjaGAgY2FsbC4gSWYgeW91IHBhc3NlZCBhXG4gKiBmdW5jdGlvbiBhcyBgYWN0aW9uQ3JlYXRvcnNgLCB0aGUgcmV0dXJuIHZhbHVlIHdpbGwgYWxzbyBiZSBhIHNpbmdsZVxuICogZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIHtcbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyAhPT0gJ29iamVjdCcgfHwgYWN0aW9uQ3JlYXRvcnMgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2JpbmRBY3Rpb25DcmVhdG9ycyBleHBlY3RlZCBhbiBvYmplY3Qgb3IgYSBmdW5jdGlvbiwgaW5zdGVhZCByZWNlaXZlZCAnICsgKGFjdGlvbkNyZWF0b3JzID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIGFjdGlvbkNyZWF0b3JzKSArICcuICcgKyAnRGlkIHlvdSB3cml0ZSBcImltcG9ydCBBY3Rpb25DcmVhdG9ycyBmcm9tXCIgaW5zdGVhZCBvZiBcImltcG9ydCAqIGFzIEFjdGlvbkNyZWF0b3JzIGZyb21cIj8nKTtcbiAgfVxuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYWN0aW9uQ3JlYXRvcnMpO1xuICB2YXIgYm91bmRBY3Rpb25DcmVhdG9ycyA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICB2YXIgYWN0aW9uQ3JlYXRvciA9IGFjdGlvbkNyZWF0b3JzW2tleV07XG4gICAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBib3VuZEFjdGlvbkNyZWF0b3JzW2tleV0gPSBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yLCBkaXNwYXRjaCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBib3VuZEFjdGlvbkNyZWF0b3JzO1xufSIsImltcG9ydCB7IEFjdGlvblR5cGVzIH0gZnJvbSAnLi9jcmVhdGVTdG9yZSc7XG5pbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICdsb2Rhc2gtZXMvaXNQbGFpbk9iamVjdCc7XG5pbXBvcnQgd2FybmluZyBmcm9tICcuL3V0aWxzL3dhcm5pbmcnO1xuXG5mdW5jdGlvbiBnZXRVbmRlZmluZWRTdGF0ZUVycm9yTWVzc2FnZShrZXksIGFjdGlvbikge1xuICB2YXIgYWN0aW9uVHlwZSA9IGFjdGlvbiAmJiBhY3Rpb24udHlwZTtcbiAgdmFyIGFjdGlvbk5hbWUgPSBhY3Rpb25UeXBlICYmICdcIicgKyBhY3Rpb25UeXBlLnRvU3RyaW5nKCkgKyAnXCInIHx8ICdhbiBhY3Rpb24nO1xuXG4gIHJldHVybiAnR2l2ZW4gYWN0aW9uICcgKyBhY3Rpb25OYW1lICsgJywgcmVkdWNlciBcIicgKyBrZXkgKyAnXCIgcmV0dXJuZWQgdW5kZWZpbmVkLiAnICsgJ1RvIGlnbm9yZSBhbiBhY3Rpb24sIHlvdSBtdXN0IGV4cGxpY2l0bHkgcmV0dXJuIHRoZSBwcmV2aW91cyBzdGF0ZS4gJyArICdJZiB5b3Ugd2FudCB0aGlzIHJlZHVjZXIgdG8gaG9sZCBubyB2YWx1ZSwgeW91IGNhbiByZXR1cm4gbnVsbCBpbnN0ZWFkIG9mIHVuZGVmaW5lZC4nO1xufVxuXG5mdW5jdGlvbiBnZXRVbmV4cGVjdGVkU3RhdGVTaGFwZVdhcm5pbmdNZXNzYWdlKGlucHV0U3RhdGUsIHJlZHVjZXJzLCBhY3Rpb24sIHVuZXhwZWN0ZWRLZXlDYWNoZSkge1xuICB2YXIgcmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2Vycyk7XG4gIHZhciBhcmd1bWVudE5hbWUgPSBhY3Rpb24gJiYgYWN0aW9uLnR5cGUgPT09IEFjdGlvblR5cGVzLklOSVQgPyAncHJlbG9hZGVkU3RhdGUgYXJndW1lbnQgcGFzc2VkIHRvIGNyZWF0ZVN0b3JlJyA6ICdwcmV2aW91cyBzdGF0ZSByZWNlaXZlZCBieSB0aGUgcmVkdWNlcic7XG5cbiAgaWYgKHJlZHVjZXJLZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAnU3RvcmUgZG9lcyBub3QgaGF2ZSBhIHZhbGlkIHJlZHVjZXIuIE1ha2Ugc3VyZSB0aGUgYXJndW1lbnQgcGFzc2VkICcgKyAndG8gY29tYmluZVJlZHVjZXJzIGlzIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIHJlZHVjZXJzLic7XG4gIH1cblxuICBpZiAoIWlzUGxhaW5PYmplY3QoaW5wdXRTdGF0ZSkpIHtcbiAgICByZXR1cm4gJ1RoZSAnICsgYXJndW1lbnROYW1lICsgJyBoYXMgdW5leHBlY3RlZCB0eXBlIG9mIFwiJyArIHt9LnRvU3RyaW5nLmNhbGwoaW5wdXRTdGF0ZSkubWF0Y2goL1xccyhbYS16fEEtWl0rKS8pWzFdICsgJ1wiLiBFeHBlY3RlZCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nICcgKyAoJ2tleXM6IFwiJyArIHJlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpICsgJ1wiJyk7XG4gIH1cblxuICB2YXIgdW5leHBlY3RlZEtleXMgPSBPYmplY3Qua2V5cyhpbnB1dFN0YXRlKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiAhcmVkdWNlcnMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhdW5leHBlY3RlZEtleUNhY2hlW2tleV07XG4gIH0pO1xuXG4gIHVuZXhwZWN0ZWRLZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHVuZXhwZWN0ZWRLZXlDYWNoZVtrZXldID0gdHJ1ZTtcbiAgfSk7XG5cbiAgaWYgKHVuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gJ1VuZXhwZWN0ZWQgJyArICh1bmV4cGVjdGVkS2V5cy5sZW5ndGggPiAxID8gJ2tleXMnIDogJ2tleScpICsgJyAnICsgKCdcIicgKyB1bmV4cGVjdGVkS2V5cy5qb2luKCdcIiwgXCInKSArICdcIiBmb3VuZCBpbiAnICsgYXJndW1lbnROYW1lICsgJy4gJykgKyAnRXhwZWN0ZWQgdG8gZmluZCBvbmUgb2YgdGhlIGtub3duIHJlZHVjZXIga2V5cyBpbnN0ZWFkOiAnICsgKCdcIicgKyByZWR1Y2VyS2V5cy5qb2luKCdcIiwgXCInKSArICdcIi4gVW5leHBlY3RlZCBrZXlzIHdpbGwgYmUgaWdub3JlZC4nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRSZWR1Y2VyU2hhcGUocmVkdWNlcnMpIHtcbiAgT2JqZWN0LmtleXMocmVkdWNlcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciByZWR1Y2VyID0gcmVkdWNlcnNba2V5XTtcbiAgICB2YXIgaW5pdGlhbFN0YXRlID0gcmVkdWNlcih1bmRlZmluZWQsIHsgdHlwZTogQWN0aW9uVHlwZXMuSU5JVCB9KTtcblxuICAgIGlmICh0eXBlb2YgaW5pdGlhbFN0YXRlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWR1Y2VyIFwiJyArIGtleSArICdcIiByZXR1cm5lZCB1bmRlZmluZWQgZHVyaW5nIGluaXRpYWxpemF0aW9uLiAnICsgJ0lmIHRoZSBzdGF0ZSBwYXNzZWQgdG8gdGhlIHJlZHVjZXIgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCAnICsgJ2V4cGxpY2l0bHkgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLiBUaGUgaW5pdGlhbCBzdGF0ZSBtYXkgJyArICdub3QgYmUgdW5kZWZpbmVkLiBJZiB5b3UgZG9uXFwndCB3YW50IHRvIHNldCBhIHZhbHVlIGZvciB0aGlzIHJlZHVjZXIsICcgKyAneW91IGNhbiB1c2UgbnVsbCBpbnN0ZWFkIG9mIHVuZGVmaW5lZC4nKTtcbiAgICB9XG5cbiAgICB2YXIgdHlwZSA9ICdAQHJlZHV4L1BST0JFX1VOS05PV05fQUNUSU9OXycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNykuc3BsaXQoJycpLmpvaW4oJy4nKTtcbiAgICBpZiAodHlwZW9mIHJlZHVjZXIodW5kZWZpbmVkLCB7IHR5cGU6IHR5cGUgfSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZHVjZXIgXCInICsga2V5ICsgJ1wiIHJldHVybmVkIHVuZGVmaW5lZCB3aGVuIHByb2JlZCB3aXRoIGEgcmFuZG9tIHR5cGUuICcgKyAoJ0RvblxcJ3QgdHJ5IHRvIGhhbmRsZSAnICsgQWN0aW9uVHlwZXMuSU5JVCArICcgb3Igb3RoZXIgYWN0aW9ucyBpbiBcInJlZHV4LypcIiAnKSArICduYW1lc3BhY2UuIFRoZXkgYXJlIGNvbnNpZGVyZWQgcHJpdmF0ZS4gSW5zdGVhZCwgeW91IG11c3QgcmV0dXJuIHRoZSAnICsgJ2N1cnJlbnQgc3RhdGUgZm9yIGFueSB1bmtub3duIGFjdGlvbnMsIHVubGVzcyBpdCBpcyB1bmRlZmluZWQsICcgKyAnaW4gd2hpY2ggY2FzZSB5b3UgbXVzdCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUsIHJlZ2FyZGxlc3Mgb2YgdGhlICcgKyAnYWN0aW9uIHR5cGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSBub3QgYmUgdW5kZWZpbmVkLCBidXQgY2FuIGJlIG51bGwuJyk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBUdXJucyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBkaWZmZXJlbnQgcmVkdWNlciBmdW5jdGlvbnMsIGludG8gYSBzaW5nbGVcbiAqIHJlZHVjZXIgZnVuY3Rpb24uIEl0IHdpbGwgY2FsbCBldmVyeSBjaGlsZCByZWR1Y2VyLCBhbmQgZ2F0aGVyIHRoZWlyIHJlc3VsdHNcbiAqIGludG8gYSBzaW5nbGUgc3RhdGUgb2JqZWN0LCB3aG9zZSBrZXlzIGNvcnJlc3BvbmQgdG8gdGhlIGtleXMgb2YgdGhlIHBhc3NlZFxuICogcmVkdWNlciBmdW5jdGlvbnMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHJlZHVjZXJzIEFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgY29ycmVzcG9uZCB0byBkaWZmZXJlbnRcbiAqIHJlZHVjZXIgZnVuY3Rpb25zIHRoYXQgbmVlZCB0byBiZSBjb21iaW5lZCBpbnRvIG9uZS4gT25lIGhhbmR5IHdheSB0byBvYnRhaW5cbiAqIGl0IGlzIHRvIHVzZSBFUzYgYGltcG9ydCAqIGFzIHJlZHVjZXJzYCBzeW50YXguIFRoZSByZWR1Y2VycyBtYXkgbmV2ZXIgcmV0dXJuXG4gKiB1bmRlZmluZWQgZm9yIGFueSBhY3Rpb24uIEluc3RlYWQsIHRoZXkgc2hvdWxkIHJldHVybiB0aGVpciBpbml0aWFsIHN0YXRlXG4gKiBpZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZW0gd2FzIHVuZGVmaW5lZCwgYW5kIHRoZSBjdXJyZW50IHN0YXRlIGZvciBhbnlcbiAqIHVucmVjb2duaXplZCBhY3Rpb24uXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIHJlZHVjZXIgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGV2ZXJ5IHJlZHVjZXIgaW5zaWRlIHRoZVxuICogcGFzc2VkIG9iamVjdCwgYW5kIGJ1aWxkcyBhIHN0YXRlIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21iaW5lUmVkdWNlcnMocmVkdWNlcnMpIHtcbiAgdmFyIHJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICB2YXIgZmluYWxSZWR1Y2VycyA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJlZHVjZXJLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IHJlZHVjZXJLZXlzW2ldO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgcmVkdWNlcnNba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgd2FybmluZygnTm8gcmVkdWNlciBwcm92aWRlZCBmb3Iga2V5IFwiJyArIGtleSArICdcIicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVkdWNlcnNba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZmluYWxSZWR1Y2Vyc1trZXldID0gcmVkdWNlcnNba2V5XTtcbiAgICB9XG4gIH1cbiAgdmFyIGZpbmFsUmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhmaW5hbFJlZHVjZXJzKTtcblxuICB2YXIgdW5leHBlY3RlZEtleUNhY2hlID0gdm9pZCAwO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHVuZXhwZWN0ZWRLZXlDYWNoZSA9IHt9O1xuICB9XG5cbiAgdmFyIHNoYXBlQXNzZXJ0aW9uRXJyb3IgPSB2b2lkIDA7XG4gIHRyeSB7XG4gICAgYXNzZXJ0UmVkdWNlclNoYXBlKGZpbmFsUmVkdWNlcnMpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgc2hhcGVBc3NlcnRpb25FcnJvciA9IGU7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gY29tYmluYXRpb24oKSB7XG4gICAgdmFyIHN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICB2YXIgYWN0aW9uID0gYXJndW1lbnRzWzFdO1xuXG4gICAgaWYgKHNoYXBlQXNzZXJ0aW9uRXJyb3IpIHtcbiAgICAgIHRocm93IHNoYXBlQXNzZXJ0aW9uRXJyb3I7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciB3YXJuaW5nTWVzc2FnZSA9IGdldFVuZXhwZWN0ZWRTdGF0ZVNoYXBlV2FybmluZ01lc3NhZ2Uoc3RhdGUsIGZpbmFsUmVkdWNlcnMsIGFjdGlvbiwgdW5leHBlY3RlZEtleUNhY2hlKTtcbiAgICAgIGlmICh3YXJuaW5nTWVzc2FnZSkge1xuICAgICAgICB3YXJuaW5nKHdhcm5pbmdNZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgaGFzQ2hhbmdlZCA9IGZhbHNlO1xuICAgIHZhciBuZXh0U3RhdGUgPSB7fTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgZmluYWxSZWR1Y2VyS2V5cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfa2V5ID0gZmluYWxSZWR1Y2VyS2V5c1tfaV07XG4gICAgICB2YXIgcmVkdWNlciA9IGZpbmFsUmVkdWNlcnNbX2tleV07XG4gICAgICB2YXIgcHJldmlvdXNTdGF0ZUZvcktleSA9IHN0YXRlW19rZXldO1xuICAgICAgdmFyIG5leHRTdGF0ZUZvcktleSA9IHJlZHVjZXIocHJldmlvdXNTdGF0ZUZvcktleSwgYWN0aW9uKTtcbiAgICAgIGlmICh0eXBlb2YgbmV4dFN0YXRlRm9yS2V5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgZXJyb3JNZXNzYWdlID0gZ2V0VW5kZWZpbmVkU3RhdGVFcnJvck1lc3NhZ2UoX2tleSwgYWN0aW9uKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgICB9XG4gICAgICBuZXh0U3RhdGVbX2tleV0gPSBuZXh0U3RhdGVGb3JLZXk7XG4gICAgICBoYXNDaGFuZ2VkID0gaGFzQ2hhbmdlZCB8fCBuZXh0U3RhdGVGb3JLZXkgIT09IHByZXZpb3VzU3RhdGVGb3JLZXk7XG4gICAgfVxuICAgIHJldHVybiBoYXNDaGFuZ2VkID8gbmV4dFN0YXRlIDogc3RhdGU7XG4gIH07XG59IiwiLyoqXG4gKiBDb21wb3NlcyBzaW5nbGUtYXJndW1lbnQgZnVuY3Rpb25zIGZyb20gcmlnaHQgdG8gbGVmdC4gVGhlIHJpZ2h0bW9zdFxuICogZnVuY3Rpb24gY2FuIHRha2UgbXVsdGlwbGUgYXJndW1lbnRzIGFzIGl0IHByb3ZpZGVzIHRoZSBzaWduYXR1cmUgZm9yXG4gKiB0aGUgcmVzdWx0aW5nIGNvbXBvc2l0ZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBmdW5jcyBUaGUgZnVuY3Rpb25zIHRvIGNvbXBvc2UuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gb2J0YWluZWQgYnkgY29tcG9zaW5nIHRoZSBhcmd1bWVudCBmdW5jdGlvbnNcbiAqIGZyb20gcmlnaHQgdG8gbGVmdC4gRm9yIGV4YW1wbGUsIGNvbXBvc2UoZiwgZywgaCkgaXMgaWRlbnRpY2FsIHRvIGRvaW5nXG4gKiAoLi4uYXJncykgPT4gZihnKGgoLi4uYXJncykpKS5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wb3NlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZnVuY3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmdW5jc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgICAgcmV0dXJuIGFyZztcbiAgICB9O1xuICB9XG5cbiAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBmdW5jc1swXTtcbiAgfVxuXG4gIHJldHVybiBmdW5jcy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGEoYi5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cykpO1xuICAgIH07XG4gIH0pO1xufSIsImltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2xvZGFzaC1lcy9pc1BsYWluT2JqZWN0JztcbmltcG9ydCAkJG9ic2VydmFibGUgZnJvbSAnc3ltYm9sLW9ic2VydmFibGUnO1xuXG4vKipcbiAqIFRoZXNlIGFyZSBwcml2YXRlIGFjdGlvbiB0eXBlcyByZXNlcnZlZCBieSBSZWR1eC5cbiAqIEZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB5b3UgbXVzdCByZXR1cm4gdGhlIGN1cnJlbnQgc3RhdGUuXG4gKiBJZiB0aGUgY3VycmVudCBzdGF0ZSBpcyB1bmRlZmluZWQsIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZS5cbiAqIERvIG5vdCByZWZlcmVuY2UgdGhlc2UgYWN0aW9uIHR5cGVzIGRpcmVjdGx5IGluIHlvdXIgY29kZS5cbiAqL1xuZXhwb3J0IHZhciBBY3Rpb25UeXBlcyA9IHtcbiAgSU5JVDogJ0BAcmVkdXgvSU5JVCdcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFJlZHV4IHN0b3JlIHRoYXQgaG9sZHMgdGhlIHN0YXRlIHRyZWUuXG4gICAqIFRoZSBvbmx5IHdheSB0byBjaGFuZ2UgdGhlIGRhdGEgaW4gdGhlIHN0b3JlIGlzIHRvIGNhbGwgYGRpc3BhdGNoKClgIG9uIGl0LlxuICAgKlxuICAgKiBUaGVyZSBzaG91bGQgb25seSBiZSBhIHNpbmdsZSBzdG9yZSBpbiB5b3VyIGFwcC4gVG8gc3BlY2lmeSBob3cgZGlmZmVyZW50XG4gICAqIHBhcnRzIG9mIHRoZSBzdGF0ZSB0cmVlIHJlc3BvbmQgdG8gYWN0aW9ucywgeW91IG1heSBjb21iaW5lIHNldmVyYWwgcmVkdWNlcnNcbiAgICogaW50byBhIHNpbmdsZSByZWR1Y2VyIGZ1bmN0aW9uIGJ5IHVzaW5nIGBjb21iaW5lUmVkdWNlcnNgLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWR1Y2VyIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBuZXh0IHN0YXRlIHRyZWUsIGdpdmVuXG4gICAqIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgYW5kIHRoZSBhY3Rpb24gdG8gaGFuZGxlLlxuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gW3ByZWxvYWRlZFN0YXRlXSBUaGUgaW5pdGlhbCBzdGF0ZS4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAgICogdG8gaHlkcmF0ZSB0aGUgc3RhdGUgZnJvbSB0aGUgc2VydmVyIGluIHVuaXZlcnNhbCBhcHBzLCBvciB0byByZXN0b3JlIGFcbiAgICogcHJldmlvdXNseSBzZXJpYWxpemVkIHVzZXIgc2Vzc2lvbi5cbiAgICogSWYgeW91IHVzZSBgY29tYmluZVJlZHVjZXJzYCB0byBwcm9kdWNlIHRoZSByb290IHJlZHVjZXIgZnVuY3Rpb24sIHRoaXMgbXVzdCBiZVxuICAgKiBhbiBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzaGFwZSBhcyBgY29tYmluZVJlZHVjZXJzYCBrZXlzLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZW5oYW5jZXJdIFRoZSBzdG9yZSBlbmhhbmNlci4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAgICogdG8gZW5oYW5jZSB0aGUgc3RvcmUgd2l0aCB0aGlyZC1wYXJ0eSBjYXBhYmlsaXRpZXMgc3VjaCBhcyBtaWRkbGV3YXJlLFxuICAgKiB0aW1lIHRyYXZlbCwgcGVyc2lzdGVuY2UsIGV0Yy4gVGhlIG9ubHkgc3RvcmUgZW5oYW5jZXIgdGhhdCBzaGlwcyB3aXRoIFJlZHV4XG4gICAqIGlzIGBhcHBseU1pZGRsZXdhcmUoKWAuXG4gICAqXG4gICAqIEByZXR1cm5zIHtTdG9yZX0gQSBSZWR1eCBzdG9yZSB0aGF0IGxldHMgeW91IHJlYWQgdGhlIHN0YXRlLCBkaXNwYXRjaCBhY3Rpb25zXG4gICAqIGFuZCBzdWJzY3JpYmUgdG8gY2hhbmdlcy5cbiAgICovXG59O2V4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlLCBlbmhhbmNlcikge1xuICB2YXIgX3JlZjI7XG5cbiAgaWYgKHR5cGVvZiBwcmVsb2FkZWRTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZW5oYW5jZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZW5oYW5jZXIgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgICBwcmVsb2FkZWRTdGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgZW5oYW5jZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW5oYW5jZXIoY3JlYXRlU3RvcmUpKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIHJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciBjdXJyZW50UmVkdWNlciA9IHJlZHVjZXI7XG4gIHZhciBjdXJyZW50U3RhdGUgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgdmFyIGN1cnJlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgdmFyIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzO1xuICB2YXIgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKG5leHRMaXN0ZW5lcnMgPT09IGN1cnJlbnRMaXN0ZW5lcnMpIHtcbiAgICAgIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzLnNsaWNlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIHRoZSBzdGF0ZSB0cmVlIG1hbmFnZWQgYnkgdGhlIHN0b3JlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7YW55fSBUaGUgY3VycmVudCBzdGF0ZSB0cmVlIG9mIHlvdXIgYXBwbGljYXRpb24uXG4gICAqL1xuICBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4gY3VycmVudFN0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGFuZ2UgbGlzdGVuZXIuIEl0IHdpbGwgYmUgY2FsbGVkIGFueSB0aW1lIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLFxuICAgKiBhbmQgc29tZSBwYXJ0IG9mIHRoZSBzdGF0ZSB0cmVlIG1heSBwb3RlbnRpYWxseSBoYXZlIGNoYW5nZWQuIFlvdSBtYXkgdGhlblxuICAgKiBjYWxsIGBnZXRTdGF0ZSgpYCB0byByZWFkIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgaW5zaWRlIHRoZSBjYWxsYmFjay5cbiAgICpcbiAgICogWW91IG1heSBjYWxsIGBkaXNwYXRjaCgpYCBmcm9tIGEgY2hhbmdlIGxpc3RlbmVyLCB3aXRoIHRoZSBmb2xsb3dpbmdcbiAgICogY2F2ZWF0czpcbiAgICpcbiAgICogMS4gVGhlIHN1YnNjcmlwdGlvbnMgYXJlIHNuYXBzaG90dGVkIGp1c3QgYmVmb3JlIGV2ZXJ5IGBkaXNwYXRjaCgpYCBjYWxsLlxuICAgKiBJZiB5b3Ugc3Vic2NyaWJlIG9yIHVuc3Vic2NyaWJlIHdoaWxlIHRoZSBsaXN0ZW5lcnMgYXJlIGJlaW5nIGludm9rZWQsIHRoaXNcbiAgICogd2lsbCBub3QgaGF2ZSBhbnkgZWZmZWN0IG9uIHRoZSBgZGlzcGF0Y2goKWAgdGhhdCBpcyBjdXJyZW50bHkgaW4gcHJvZ3Jlc3MuXG4gICAqIEhvd2V2ZXIsIHRoZSBuZXh0IGBkaXNwYXRjaCgpYCBjYWxsLCB3aGV0aGVyIG5lc3RlZCBvciBub3QsIHdpbGwgdXNlIGEgbW9yZVxuICAgKiByZWNlbnQgc25hcHNob3Qgb2YgdGhlIHN1YnNjcmlwdGlvbiBsaXN0LlxuICAgKlxuICAgKiAyLiBUaGUgbGlzdGVuZXIgc2hvdWxkIG5vdCBleHBlY3QgdG8gc2VlIGFsbCBzdGF0ZSBjaGFuZ2VzLCBhcyB0aGUgc3RhdGVcbiAgICogbWlnaHQgaGF2ZSBiZWVuIHVwZGF0ZWQgbXVsdGlwbGUgdGltZXMgZHVyaW5nIGEgbmVzdGVkIGBkaXNwYXRjaCgpYCBiZWZvcmVcbiAgICogdGhlIGxpc3RlbmVyIGlzIGNhbGxlZC4gSXQgaXMsIGhvd2V2ZXIsIGd1YXJhbnRlZWQgdGhhdCBhbGwgc3Vic2NyaWJlcnNcbiAgICogcmVnaXN0ZXJlZCBiZWZvcmUgdGhlIGBkaXNwYXRjaCgpYCBzdGFydGVkIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGxhdGVzdFxuICAgKiBzdGF0ZSBieSB0aGUgdGltZSBpdCBleGl0cy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgQSBjYWxsYmFjayB0byBiZSBpbnZva2VkIG9uIGV2ZXJ5IGRpc3BhdGNoLlxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoaXMgY2hhbmdlIGxpc3RlbmVyLlxuICAgKi9cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBsaXN0ZW5lciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHZhciBpc1N1YnNjcmliZWQgPSB0cnVlO1xuXG4gICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgIG5leHRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICBpZiAoIWlzU3Vic2NyaWJlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuXG4gICAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgICB2YXIgaW5kZXggPSBuZXh0TGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgICAgbmV4dExpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBhbiBhY3Rpb24uIEl0IGlzIHRoZSBvbmx5IHdheSB0byB0cmlnZ2VyIGEgc3RhdGUgY2hhbmdlLlxuICAgKlxuICAgKiBUaGUgYHJlZHVjZXJgIGZ1bmN0aW9uLCB1c2VkIHRvIGNyZWF0ZSB0aGUgc3RvcmUsIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlXG4gICAqIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGdpdmVuIGBhY3Rpb25gLiBJdHMgcmV0dXJuIHZhbHVlIHdpbGxcbiAgICogYmUgY29uc2lkZXJlZCB0aGUgKipuZXh0Kiogc3RhdGUgb2YgdGhlIHRyZWUsIGFuZCB0aGUgY2hhbmdlIGxpc3RlbmVyc1xuICAgKiB3aWxsIGJlIG5vdGlmaWVkLlxuICAgKlxuICAgKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvbmx5IHN1cHBvcnRzIHBsYWluIG9iamVjdCBhY3Rpb25zLiBJZiB5b3Ugd2FudCB0b1xuICAgKiBkaXNwYXRjaCBhIFByb21pc2UsIGFuIE9ic2VydmFibGUsIGEgdGh1bmssIG9yIHNvbWV0aGluZyBlbHNlLCB5b3UgbmVlZCB0b1xuICAgKiB3cmFwIHlvdXIgc3RvcmUgY3JlYXRpbmcgZnVuY3Rpb24gaW50byB0aGUgY29ycmVzcG9uZGluZyBtaWRkbGV3YXJlLiBGb3JcbiAgICogZXhhbXBsZSwgc2VlIHRoZSBkb2N1bWVudGF0aW9uIGZvciB0aGUgYHJlZHV4LXRodW5rYCBwYWNrYWdlLiBFdmVuIHRoZVxuICAgKiBtaWRkbGV3YXJlIHdpbGwgZXZlbnR1YWxseSBkaXNwYXRjaCBwbGFpbiBvYmplY3QgYWN0aW9ucyB1c2luZyB0aGlzIG1ldGhvZC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBBIHBsYWluIG9iamVjdCByZXByZXNlbnRpbmcg4oCcd2hhdCBjaGFuZ2Vk4oCdLiBJdCBpc1xuICAgKiBhIGdvb2QgaWRlYSB0byBrZWVwIGFjdGlvbnMgc2VyaWFsaXphYmxlIHNvIHlvdSBjYW4gcmVjb3JkIGFuZCByZXBsYXkgdXNlclxuICAgKiBzZXNzaW9ucywgb3IgdXNlIHRoZSB0aW1lIHRyYXZlbGxpbmcgYHJlZHV4LWRldnRvb2xzYC4gQW4gYWN0aW9uIG11c3QgaGF2ZVxuICAgKiBhIGB0eXBlYCBwcm9wZXJ0eSB3aGljaCBtYXkgbm90IGJlIGB1bmRlZmluZWRgLiBJdCBpcyBhIGdvb2QgaWRlYSB0byB1c2VcbiAgICogc3RyaW5nIGNvbnN0YW50cyBmb3IgYWN0aW9uIHR5cGVzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBGb3IgY29udmVuaWVuY2UsIHRoZSBzYW1lIGFjdGlvbiBvYmplY3QgeW91IGRpc3BhdGNoZWQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCwgaWYgeW91IHVzZSBhIGN1c3RvbSBtaWRkbGV3YXJlLCBpdCBtYXkgd3JhcCBgZGlzcGF0Y2goKWAgdG9cbiAgICogcmV0dXJuIHNvbWV0aGluZyBlbHNlIChmb3IgZXhhbXBsZSwgYSBQcm9taXNlIHlvdSBjYW4gYXdhaXQpLlxuICAgKi9cbiAgZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgaWYgKCFpc1BsYWluT2JqZWN0KGFjdGlvbikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9ucyBtdXN0IGJlIHBsYWluIG9iamVjdHMuICcgKyAnVXNlIGN1c3RvbSBtaWRkbGV3YXJlIGZvciBhc3luYyBhY3Rpb25zLicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYWN0aW9uLnR5cGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbnMgbWF5IG5vdCBoYXZlIGFuIHVuZGVmaW5lZCBcInR5cGVcIiBwcm9wZXJ0eS4gJyArICdIYXZlIHlvdSBtaXNzcGVsbGVkIGEgY29uc3RhbnQ/Jyk7XG4gICAgfVxuXG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlcnMgbWF5IG5vdCBkaXNwYXRjaCBhY3Rpb25zLicpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gdHJ1ZTtcbiAgICAgIGN1cnJlbnRTdGF0ZSA9IGN1cnJlbnRSZWR1Y2VyKGN1cnJlbnRTdGF0ZSwgYWN0aW9uKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBsaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzID0gbmV4dExpc3RlbmVycztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIHRoZSByZWR1Y2VyIGN1cnJlbnRseSB1c2VkIGJ5IHRoZSBzdG9yZSB0byBjYWxjdWxhdGUgdGhlIHN0YXRlLlxuICAgKlxuICAgKiBZb3UgbWlnaHQgbmVlZCB0aGlzIGlmIHlvdXIgYXBwIGltcGxlbWVudHMgY29kZSBzcGxpdHRpbmcgYW5kIHlvdSB3YW50IHRvXG4gICAqIGxvYWQgc29tZSBvZiB0aGUgcmVkdWNlcnMgZHluYW1pY2FsbHkuIFlvdSBtaWdodCBhbHNvIG5lZWQgdGhpcyBpZiB5b3VcbiAgICogaW1wbGVtZW50IGEgaG90IHJlbG9hZGluZyBtZWNoYW5pc20gZm9yIFJlZHV4LlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBuZXh0UmVkdWNlciBUaGUgcmVkdWNlciBmb3IgdGhlIHN0b3JlIHRvIHVzZSBpbnN0ZWFkLlxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIGZ1bmN0aW9uIHJlcGxhY2VSZWR1Y2VyKG5leHRSZWR1Y2VyKSB7XG4gICAgaWYgKHR5cGVvZiBuZXh0UmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgbmV4dFJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBjdXJyZW50UmVkdWNlciA9IG5leHRSZWR1Y2VyO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9uVHlwZXMuSU5JVCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcm9wZXJhYmlsaXR5IHBvaW50IGZvciBvYnNlcnZhYmxlL3JlYWN0aXZlIGxpYnJhcmllcy5cbiAgICogQHJldHVybnMge29ic2VydmFibGV9IEEgbWluaW1hbCBvYnNlcnZhYmxlIG9mIHN0YXRlIGNoYW5nZXMuXG4gICAqIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgdGhlIG9ic2VydmFibGUgcHJvcG9zYWw6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9ic2VydmFibGVcbiAgICovXG4gIGZ1bmN0aW9uIG9ic2VydmFibGUoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgb3V0ZXJTdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgcmV0dXJuIF9yZWYgPSB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBtaW5pbWFsIG9ic2VydmFibGUgc3Vic2NyaXB0aW9uIG1ldGhvZC5cbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYnNlcnZlciBBbnkgb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgYXMgYW4gb2JzZXJ2ZXIuXG4gICAgICAgKiBUaGUgb2JzZXJ2ZXIgb2JqZWN0IHNob3VsZCBoYXZlIGEgYG5leHRgIG1ldGhvZC5cbiAgICAgICAqIEByZXR1cm5zIHtzdWJzY3JpcHRpb259IEFuIG9iamVjdCB3aXRoIGFuIGB1bnN1YnNjcmliZWAgbWV0aG9kIHRoYXQgY2FuXG4gICAgICAgKiBiZSB1c2VkIHRvIHVuc3Vic2NyaWJlIHRoZSBvYnNlcnZhYmxlIGZyb20gdGhlIHN0b3JlLCBhbmQgcHJldmVudCBmdXJ0aGVyXG4gICAgICAgKiBlbWlzc2lvbiBvZiB2YWx1ZXMgZnJvbSB0aGUgb2JzZXJ2YWJsZS5cbiAgICAgICAqL1xuICAgICAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYnNlcnZlciAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCB0aGUgb2JzZXJ2ZXIgdG8gYmUgYW4gb2JqZWN0LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb2JzZXJ2ZVN0YXRlKCkge1xuICAgICAgICAgIGlmIChvYnNlcnZlci5uZXh0KSB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KGdldFN0YXRlKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9ic2VydmVTdGF0ZSgpO1xuICAgICAgICB2YXIgdW5zdWJzY3JpYmUgPSBvdXRlclN1YnNjcmliZShvYnNlcnZlU3RhdGUpO1xuICAgICAgICByZXR1cm4geyB1bnN1YnNjcmliZTogdW5zdWJzY3JpYmUgfTtcbiAgICAgIH1cbiAgICB9LCBfcmVmWyQkb2JzZXJ2YWJsZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LCBfcmVmO1xuICB9XG5cbiAgLy8gV2hlbiBhIHN0b3JlIGlzIGNyZWF0ZWQsIGFuIFwiSU5JVFwiIGFjdGlvbiBpcyBkaXNwYXRjaGVkIHNvIHRoYXQgZXZlcnlcbiAgLy8gcmVkdWNlciByZXR1cm5zIHRoZWlyIGluaXRpYWwgc3RhdGUuIFRoaXMgZWZmZWN0aXZlbHkgcG9wdWxhdGVzXG4gIC8vIHRoZSBpbml0aWFsIHN0YXRlIHRyZWUuXG4gIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9uVHlwZXMuSU5JVCB9KTtcblxuICByZXR1cm4gX3JlZjIgPSB7XG4gICAgZGlzcGF0Y2g6IGRpc3BhdGNoLFxuICAgIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICAgIGdldFN0YXRlOiBnZXRTdGF0ZSxcbiAgICByZXBsYWNlUmVkdWNlcjogcmVwbGFjZVJlZHVjZXJcbiAgfSwgX3JlZjJbJCRvYnNlcnZhYmxlXSA9IG9ic2VydmFibGUsIF9yZWYyO1xufSIsImltcG9ydCBjcmVhdGVTdG9yZSBmcm9tICcuL2NyZWF0ZVN0b3JlJztcbmltcG9ydCBjb21iaW5lUmVkdWNlcnMgZnJvbSAnLi9jb21iaW5lUmVkdWNlcnMnO1xuaW1wb3J0IGJpbmRBY3Rpb25DcmVhdG9ycyBmcm9tICcuL2JpbmRBY3Rpb25DcmVhdG9ycyc7XG5pbXBvcnQgYXBwbHlNaWRkbGV3YXJlIGZyb20gJy4vYXBwbHlNaWRkbGV3YXJlJztcbmltcG9ydCBjb21wb3NlIGZyb20gJy4vY29tcG9zZSc7XG5pbXBvcnQgd2FybmluZyBmcm9tICcuL3V0aWxzL3dhcm5pbmcnO1xuXG4vKlxuKiBUaGlzIGlzIGEgZHVtbXkgZnVuY3Rpb24gdG8gY2hlY2sgaWYgdGhlIGZ1bmN0aW9uIG5hbWUgaGFzIGJlZW4gYWx0ZXJlZCBieSBtaW5pZmljYXRpb24uXG4qIElmIHRoZSBmdW5jdGlvbiBoYXMgYmVlbiBtaW5pZmllZCBhbmQgTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJywgd2FybiB0aGUgdXNlci5cbiovXG5mdW5jdGlvbiBpc0NydXNoZWQoKSB7fVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgaXNDcnVzaGVkLm5hbWUgPT09ICdzdHJpbmcnICYmIGlzQ3J1c2hlZC5uYW1lICE9PSAnaXNDcnVzaGVkJykge1xuICB3YXJuaW5nKCdZb3UgYXJlIGN1cnJlbnRseSB1c2luZyBtaW5pZmllZCBjb2RlIG91dHNpZGUgb2YgTk9ERV9FTlYgPT09IFxcJ3Byb2R1Y3Rpb25cXCcuICcgKyAnVGhpcyBtZWFucyB0aGF0IHlvdSBhcmUgcnVubmluZyBhIHNsb3dlciBkZXZlbG9wbWVudCBidWlsZCBvZiBSZWR1eC4gJyArICdZb3UgY2FuIHVzZSBsb29zZS1lbnZpZnkgKGh0dHBzOi8vZ2l0aHViLmNvbS96ZXJ0b3NoL2xvb3NlLWVudmlmeSkgZm9yIGJyb3dzZXJpZnkgJyArICdvciBEZWZpbmVQbHVnaW4gZm9yIHdlYnBhY2sgKGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzAwMzAwMzEpICcgKyAndG8gZW5zdXJlIHlvdSBoYXZlIHRoZSBjb3JyZWN0IGNvZGUgZm9yIHlvdXIgcHJvZHVjdGlvbiBidWlsZC4nKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycywgYmluZEFjdGlvbkNyZWF0b3JzLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfTsiLCIvKipcbiAqIFByaW50cyBhIHdhcm5pbmcgaW4gdGhlIGNvbnNvbGUgaWYgaXQgZXhpc3RzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSB3YXJuaW5nIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCBpZiB5b3UgZW5hYmxlXG4gICAgLy8gXCJicmVhayBvbiBhbGwgZXhjZXB0aW9uc1wiIGluIHlvdXIgY29uc29sZSxcbiAgICAvLyBpdCB3b3VsZCBwYXVzZSB0aGUgZXhlY3V0aW9uIGF0IHRoaXMgbGluZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tZW1wdHkgKi9cbiAgfSBjYXRjaCAoZSkge31cbiAgLyogZXNsaW50LWVuYWJsZSBuby1lbXB0eSAqL1xufSIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBwb255ZmlsbCBmcm9tICcuL3BvbnlmaWxsLmpzJztcblxudmFyIHJvb3Q7XG5cbmlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IHNlbGY7XG59IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSB3aW5kb3c7XG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBnbG9iYWw7XG59IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBtb2R1bGU7XG59IGVsc2Uge1xuICByb290ID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbn1cblxudmFyIHJlc3VsdCA9IHBvbnlmaWxsKHJvb3QpO1xuZXhwb3J0IGRlZmF1bHQgcmVzdWx0O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ltYm9sT2JzZXJ2YWJsZVBvbnlmaWxsKHJvb3QpIHtcblx0dmFyIHJlc3VsdDtcblx0dmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5cdGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0aWYgKFN5bWJvbC5vYnNlcnZhYmxlKSB7XG5cdFx0XHRyZXN1bHQgPSBTeW1ib2wub2JzZXJ2YWJsZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0ID0gU3ltYm9sKCdvYnNlcnZhYmxlJyk7XG5cdFx0XHRTeW1ib2wub2JzZXJ2YWJsZSA9IHJlc3VsdDtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmVzdWx0ID0gJ0BAb2JzZXJ2YWJsZSc7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=