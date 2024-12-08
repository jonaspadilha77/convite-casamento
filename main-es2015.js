(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div #envelope class=\"envelope\"\n  [class.open]=\"inviteOpened\"\n  [@pulseAnimation]=\"animationState\"\n  (mouseenter)=\"hoverInvite()\"\n  (mouseleave)=\"mouseleaveInvite()\"\n  (click)=\"openInvite()\">\n\n  <div class=\"letter\"></div>\n  <div class=\"front\">\n    <div class=\"fold-lines\"></div>\n  </div>\n  <div class=\"flap\">\n    <div class=\"stamp\">\n      <div class=\"stamp-texture\"></div>\n    </div>\n  </div>\n</div> -->\n\n\n<div class=\"container\" [class.open]=\"inviteOpened\">\n  <div #envelope class=\"envelope\" [class.open]=\"inviteOpened\" (click)=\"openInvite()\" [@pulseAnimation]=\"animationState\">\n    <div class=\"front\">\n      <div class=\"letter\" [class.expand]=\"expandLetter\"></div>\n      <img src=\"assets/images/inferior.svg\" class=\"inferior\" />\n    </div>\n    <div class=\"flap\">\n      <div class=\"stamp\">\n        <div class=\"stamp-texture\">\n          <div class=\"lid\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"letter-full\" [class.letter-full--fullscreen]=\"isFullScreen\">\n    <div class=\"letter\"></div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.envelope {\n  width: 228px;\n  height: 350px;\n  position: relative;\n  cursor: pointer;\n  transform-style: preserve-3d;\n  transition: all 0.5s ease;\n  perspective: 1000px;\n  margin: 50px auto;\n}\n.front {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #f8f8f8;\n  border-top: 1px solid white;\n}\n.flap {\n  position: absolute;\n  width: 110%;\n  height: 256px;\n  transform-origin: top;\n  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);\n  background-image: url(/assets/images/flap.svg);\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  left: -12px;\n}\n.envelope.open .flap {\n  transform: rotateX(180deg);\n  z-index: -1;\n}\n.stamp-texture {\n  width: 50px;\n  transition: background-image 0.8s;\n}\n.envelope.open .stamp {\n  transition: height 1s ease-in-out;\n}\n.envelope.open .stamp-texture {\n  background-image: url(/assets/images/selo_back.svg);\n}\n.envelope.open .stamp-texture .lid {\n  opacity: 1;\n}\n.letter {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  right: 10px;\n  bottom: 10px;\n  background: #d8dce1;\n  transition: all 0.9s ease 1s;\n  border-radius: 3px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  transform: scale(1);\n}\n.letter-full {\n  width: 228px;\n  height: 350px;\n  position: absolute;\n  padding: 10px;\n  margin: auto auto 50px auto;\n  transition: opacity 0.5s ease;\n  opacity: 0;\n  z-index: -999;\n}\n.letter-full--fullscreen {\n  opacity: 1;\n  margin-top: 50px;\n  transition: width 0.5s ease, height 0.5s ease;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  z-index: 999;\n}\n.envelope.open .letter {\n  transform: translateY(-450px);\n}\n.envelope.open .letter.expand {\n  transition: transform 0.8s ease-in-out 1s, top 1s ease-in-out 1s;\n  transform: translateY(0);\n  z-index: 4;\n}\n.fullscreen {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  /* ou qualquer cor de fundo desejada */\n  z-index: 9999;\n  /* Certifique-se de que está acima de outros elementos */\n  transition: transform 0.8s ease-in-out 1s, top 1s ease-in-out 1s;\n}\n@-webkit-keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.inferior {\n  width: 109%;\n  height: 109%;\n  position: absolute;\n  bottom: -20px;\n  left: -10px;\n}\n.stamp {\n  position: absolute;\n  width: 100%;\n  height: 50px;\n  bottom: -12px;\n}\n.stamp-texture {\n  width: 50px;\n  height: 100%;\n  background-image: url(/assets/images/selo.svg);\n  background-size: cover;\n  background-position: center;\n  border-radius: 21px;\n  margin: 0 auto;\n  border-radius: 50%;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  z-index: 3;\n}\n.lid {\n  opacity: 0;\n  position: absolute;\n  bottom: 14px;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border-left: 40px solid transparent;\n  border-right: 40px solid transparent;\n  border-top: 92px solid white;\n  transform: translateX(-50%);\n  background: linear-gradient(to top, #ccc, #fff);\n  transition: opacity 0.4s cubic-bezier(0.9, 0, 0, 0.1);\n}\n@media screen and (max-height: 700px) {\n  /* Mobile styles */\n  .envelope {\n    margin: 12px auto;\n  }\n}\n@media screen and (min-width: 400px) and (max-width: 1000px) {\n  /* Mobile styles */\n}\n.container.open {\n  align-items: end;\n}\n.container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  transition: all 0.5s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvcnVubmVyL3dvcmsvY29udml0ZS1jYXNhbWVudG8vY29udml0ZS1jYXNhbWVudG8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBREVGO0FDQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBREVGO0FDQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1REFBQTtFQUNBLDhDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtBREVGO0FDRUE7RUFDRSwwQkFBQTtFQUNBLFdBQUE7QURDRjtBQ0VBO0VBQ0UsV0FBQTtFQUNBLGlDQUFBO0FEQ0Y7QUNFQTtFQUNFLGlDQUFBO0FEQ0Y7QUNFQTtFQUNFLG1EQUFBO0FEQ0Y7QUNFQTtFQUNFLFVBQUE7QURDRjtBQ0VBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtBRENGO0FDRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBRENGO0FDQUU7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QURFSjtBQ0VBO0VBQ0UsNkJBQUE7QURDRjtBQ0VBO0VBQ0UsZ0VBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7QURDRjtBQ0VBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUF5QixzQ0FBQTtFQUN6QixhQUFBO0VBQWUsd0RBQUE7RUFDZixnRUFBQTtBREdGO0FDRUE7RUFDRTtJQUNFLG1CQUFBO0VEQ0Y7RUNFQTtJQUNFLHFCQUFBO0VEQUY7RUNHQTtJQUNFLG1CQUFBO0VEREY7QUFDRjtBQ1ZBO0VBQ0U7SUFDRSxtQkFBQTtFRENGO0VDRUE7SUFDRSxxQkFBQTtFREFGO0VDR0E7SUFDRSxtQkFBQTtFRERGO0FBQ0Y7QUNJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBREZGO0FDS0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBREZGO0FDS0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSxVQUFBO0FERkY7QUNPQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLCtDQUFBO0VBQ0EscURBQUE7QURKRjtBQ09BO0VBRUUsa0JBQUE7RUFDQTtJQUNFLGlCQUFBO0VETEY7QUFDRjtBQ1NBO0VBRUUsa0JBQUE7QURSRjtBQ3NDQTtFQUNFLGdCQUFBO0FEcENGO0FDc0NBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QURuQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uZW52ZWxvcGUge1xuICB3aWR0aDogMjI4cHg7XG4gIGhlaWdodDogMzUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xuICBtYXJnaW46IDUwcHggYXV0bztcbn1cblxuLmZyb250IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XG59XG5cbi5mbGFwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTEwJTtcbiAgaGVpZ2h0OiAyNTZweDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvZmxhcC5zdmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGxlZnQ6IC0xMnB4O1xufVxuXG4uZW52ZWxvcGUub3BlbiAuZmxhcCB7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLnN0YW1wLXRleHR1cmUge1xuICB3aWR0aDogNTBweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAwLjhzO1xufVxuXG4uZW52ZWxvcGUub3BlbiAuc3RhbXAge1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5lbnZlbG9wZS5vcGVuIC5zdGFtcC10ZXh0dXJlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL3NlbG9fYmFjay5zdmcpO1xufVxuXG4uZW52ZWxvcGUub3BlbiAuc3RhbXAtdGV4dHVyZSAubGlkIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmxldHRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgYm90dG9tOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZDhkY2UxO1xuICB0cmFuc2l0aW9uOiBhbGwgMC45cyBlYXNlIDFzO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5sZXR0ZXItZnVsbCB7XG4gIHdpZHRoOiAyMjhweDtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IGF1dG8gYXV0byA1MHB4IGF1dG87XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAtOTk5O1xufVxuLmxldHRlci1mdWxsLS1mdWxsc2NyZWVuIHtcbiAgb3BhY2l0eTogMTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC41cyBlYXNlLCBoZWlnaHQgMC41cyBlYXNlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLmVudmVsb3BlLm9wZW4gLmxldHRlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDUwcHgpO1xufVxuXG4uZW52ZWxvcGUub3BlbiAubGV0dGVyLmV4cGFuZCB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzIGVhc2UtaW4tb3V0IDFzLCB0b3AgMXMgZWFzZS1pbi1vdXQgMXM7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgei1pbmRleDogNDtcbn1cblxuLmZ1bGxzY3JlZW4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC8qIG91IHF1YWxxdWVyIGNvciBkZSBmdW5kbyBkZXNlamFkYSAqL1xuICB6LWluZGV4OiA5OTk5O1xuICAvKiBDZXJ0aWZpcXVlLXNlIGRlIHF1ZSBlc3TDoSBhY2ltYSBkZSBvdXRyb3MgZWxlbWVudG9zICovXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzIGVhc2UtaW4tb3V0IDFzLCB0b3AgMXMgZWFzZS1pbi1vdXQgMXM7XG59XG5cbkBrZXlmcmFtZXMgcHVsc2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG4uaW5mZXJpb3Ige1xuICB3aWR0aDogMTA5JTtcbiAgaGVpZ2h0OiAxMDklO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTIwcHg7XG4gIGxlZnQ6IC0xMHB4O1xufVxuXG4uc3RhbXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvdHRvbTogLTEycHg7XG59XG5cbi5zdGFtcC10ZXh0dXJlIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL3NlbG8uc3ZnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAyMXB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHotaW5kZXg6IDM7XG59XG5cbi5saWQge1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTRweDtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogNDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA0MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wOiA5MnB4IHNvbGlkIHdoaXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNjY2MsICNmZmYpO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgY3ViaWMtYmV6aWVyKDAuOSwgMCwgMCwgMC4xKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDcwMHB4KSB7XG4gIC8qIE1vYmlsZSBzdHlsZXMgKi9cbiAgLmVudmVsb3BlIHtcbiAgICBtYXJnaW46IDEycHggYXV0bztcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLyogTW9iaWxlIHN0eWxlcyAqL1xufVxuLmNvbnRhaW5lci5vcGVuIHtcbiAgYWxpZ24taXRlbXM6IGVuZDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IGF1dG87XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xufSIsIi5lbnZlbG9wZSB7XG4gIHdpZHRoOiAyMjhweDtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xufVxuXG4uZnJvbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcbn1cblxuLmZsYXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMTAlO1xuICBoZWlnaHQ6IDI1NnB4O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9mbGFwLnN2Zyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbGVmdDogLTEycHg7XG5cbn1cblxuLmVudmVsb3BlLm9wZW4gLmZsYXAge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5zdGFtcC10ZXh0dXJlIHtcbiAgd2lkdGg6IDUwcHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMC44cztcbn1cblxuLmVudmVsb3BlLm9wZW4gLnN0YW1wIHtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDFzIGVhc2UtaW4tb3V0O1xufVxuXG4uZW52ZWxvcGUub3BlbiAuc3RhbXAtdGV4dHVyZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9zZWxvX2JhY2suc3ZnKTtcbn1cblxuLmVudmVsb3BlLm9wZW4gLnN0YW1wLXRleHR1cmUgLmxpZCB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5sZXR0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJvdHRvbTogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiKDIxNiwgMjIwLCAyMjUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC45cyBlYXNlIDFzO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5sZXR0ZXItZnVsbCB7XG4gIHdpZHRoOiAyMjhweDtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IGF1dG8gYXV0byA1MHB4IGF1dG87XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAtOTk5O1xuICAmLS1mdWxsc2NyZWVuIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC41cyBlYXNlLCBoZWlnaHQgMC41cyBlYXNlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgei1pbmRleDogOTk5O1xuICB9XG59XG5cbi5lbnZlbG9wZS5vcGVuIC5sZXR0ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQ1MHB4KTtcbn1cblxuLmVudmVsb3BlLm9wZW4gLmxldHRlci5leHBhbmQge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cyBlYXNlLWluLW91dCAxcywgdG9wIDFzIGVhc2UtaW4tb3V0IDFzO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIHotaW5kZXg6IDQ7XG59XG5cbi5mdWxsc2NyZWVuIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAvKiBvdSBxdWFscXVlciBjb3IgZGUgZnVuZG8gZGVzZWphZGEgKi9cbiAgei1pbmRleDogOTk5OTsgLyogQ2VydGlmaXF1ZS1zZSBkZSBxdWUgZXN0w6EgYWNpbWEgZGUgb3V0cm9zIGVsZW1lbnRvcyAqL1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cyBlYXNlLWluLW91dCAxcywgdG9wIDFzIGVhc2UtaW4tb3V0IDFzO1xufVxuXG5cblxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG5cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5cbi5pbmZlcmlvciB7XG4gIHdpZHRoOiAxMDklO1xuICBoZWlnaHQ6IDEwOSU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMjBweDtcbiAgbGVmdDogLTEwcHg7XG59XG5cbi5zdGFtcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYm90dG9tOiAtMTJweDtcbn1cblxuLnN0YW1wLXRleHR1cmUge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvc2Vsby5zdmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDIxcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgei1pbmRleDogM1xufVxuXG5cblxuLmxpZCB7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxNHB4O1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiA0MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDQwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3A6IDkycHggc29saWQgd2hpdGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2NjYywgI2ZmZik7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBjdWJpYy1iZXppZXIoMC45LCAwLCAwLjAsIDAuMSk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3MDBweCkge1xuXG4gIC8qIE1vYmlsZSBzdHlsZXMgKi9cbiAgLmVudmVsb3BlIHtcbiAgICBtYXJnaW46IDEycHggYXV0bztcbiAgfVxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMHB4KSBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG5cbiAgLyogTW9iaWxlIHN0eWxlcyAqL1xuICAuZW52ZWxvcGUge1xuICAgIC8vIG1hcmdpbjogMjAlIGF1dG87XG4gIH1cbn1cblxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbi8vICAgLyogVGFibGV0IHN0eWxlcyAqL1xuLy8gICAuZW52ZWxvcGUge1xuLy8gICAgIHdpZHRoOiA4MCU7XG4vLyAgICAgaGVpZ2h0OiBhdXRvO1xuLy8gICB9XG4vLyAgIC5sZXR0ZXIge1xuLy8gICAgIHdpZHRoOiA4MCU7XG4vLyAgICAgaGVpZ2h0OiBhdXRvO1xuLy8gICB9XG4vLyB9XG5cbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuLy8gICAvKiBEZXNrdG9wIHN0eWxlcyAqL1xuLy8gICAuZW52ZWxvcGUge1xuLy8gICAgIHdpZHRoOiA2MCU7XG4vLyAgICAgaGVpZ2h0OiBhdXRvO1xuLy8gICB9XG4vLyAgIC5sZXR0ZXIge1xuLy8gICAgIHdpZHRoOiA2MCU7XG4vLyAgICAgaGVpZ2h0OiBhdXRvO1xuLy8gICB9XG4vLyB9XG5cbi5jb250YWluZXIub3BlbiB7XG4gIGFsaWduLWl0ZW1zOiBlbmQ7XG59XG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let AppComponent = class AppComponent {
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.title = 'convite-casamento';
        this.inviteOpened = false;
        this.animationState = 'inactive';
        this.expandLetter = false;
        this.isFullScreen = false;
    }
    ngOnInit() {
        this.animationState = 'active';
    }
    openInvite() {
        this.inviteOpened = true;
        this.handlePulseAnimation();
        setTimeout(() => {
            this.expandLetter = true;
            setTimeout(() => {
                this.isFullScreen = true;
            }, 2000);
        }, 1400);
    }
    handlePulseAnimation() {
        this.animationState = !this.inviteOpened ? 'active' : 'inactive';
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('envelope', { static: true })
], AppComponent.prototype, "envelope", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('pulseAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    animation: 'none'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    animation: 'pulse 1s infinite'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0s')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0s'))
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/convite-casamento/convite-casamento/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map