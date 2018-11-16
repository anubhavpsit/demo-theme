webpackJsonp(["error.module"],{

/***/ "./src/app/error/error.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorModule", function() { return ErrorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_routing__ = __webpack_require__("./src/app/error/error.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error4_error4_component__ = __webpack_require__("./src/app/error/error4/error4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error5_error5_component__ = __webpack_require__("./src/app/error/error5/error5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__error503_error503_component__ = __webpack_require__("./src/app/error/error503/error503.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ErrorModule = /** @class */ (function () {
    function ErrorModule() {
    }
    ErrorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__error_routing__["a" /* ErrorRoutes */])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__error4_error4_component__["a" /* Error4Component */], __WEBPACK_IMPORTED_MODULE_5__error5_error5_component__["a" /* Error5Component */], __WEBPACK_IMPORTED_MODULE_6__error503_error503_component__["a" /* Error503Component */]]
        })
    ], ErrorModule);
    return ErrorModule;
}());



/***/ }),

/***/ "./src/app/error/error.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error4_error4_component__ = __webpack_require__("./src/app/error/error4/error4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error5_error5_component__ = __webpack_require__("./src/app/error/error5/error5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error503_error503_component__ = __webpack_require__("./src/app/error/error503/error503.component.ts");



var ErrorRoutes = [
    {
        path: '',
        children: [{
                path: '404',
                component: __WEBPACK_IMPORTED_MODULE_0__error4_error4_component__["a" /* Error4Component */]
            }, {
                path: '500',
                component: __WEBPACK_IMPORTED_MODULE_1__error5_error5_component__["a" /* Error5Component */]
            }, {
                path: '503',
                component: __WEBPACK_IMPORTED_MODULE_2__error503_error503_component__["a" /* Error503Component */]
            }]
    }
];


/***/ }),

/***/ "./src/app/error/error4/error4.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex align-items-stretch min-height-100 bg-dark text-white\">\n  <div class=\"p-5\">\n    <div class=\"error-number fw-900 text-warning text-uppercase\">Error 404</div>\n    <h6 class=\"fw-300 mb-0\">Page not found :(</h6>\n    <small class=\"ff-headers fw-300\">Sorry, but the page you were trying to view does not exist. <a [routerLink]=\"['/']\">Take me home</a></small>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/error/error4/error4.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/error/error4/error4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error4Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Error4Component = /** @class */ (function () {
    function Error4Component() {
    }
    Error4Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-error4',
            template: __webpack_require__("./src/app/error/error4/error4.component.html"),
            styles: [__webpack_require__("./src/app/error/error4/error4.component.scss")]
        })
    ], Error4Component);
    return Error4Component;
}());



/***/ }),

/***/ "./src/app/error/error5/error5.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex align-items-stretch min-height-100 bg-dark text-white\">\n  <div class=\"p-5\">\n    <div class=\"error-number fw-900 text-danger text-uppercase\">Error 500</div>\n    <h6 class=\"fw-300 mb-0\">Internal server failure :(</h6>\n    <small class=\"ff-headers fw-300\">Sorry something went wrong with our servers. <a [routerLink]=\"['/']\">Report this error!</a></small>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/error/error5/error5.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/error/error5/error5.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error5Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Error5Component = /** @class */ (function () {
    function Error5Component() {
    }
    Error5Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-error5',
            template: __webpack_require__("./src/app/error/error5/error5.component.html"),
            styles: [__webpack_require__("./src/app/error/error5/error5.component.scss")]
        })
    ], Error5Component);
    return Error5Component;
}());



/***/ }),

/***/ "./src/app/error/error503/error503.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex align-items-stretch min-height-100 bg-dark text-white\">\n  <div class=\"p-5\">\n    <div class=\"error-number fw-900 text-danger text-uppercase\">Error 503</div>\n    <h6 class=\"fw-300 mb-0\">Service is currently unavailable. :(</h6>\n    <small class=\"ff-headers fw-300\">The server is currently unable to handle the request. <a [routerLink]=\"['/']\">Take me home!</a></small>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/error/error503/error503.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/error/error503/error503.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error503Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Error503Component = /** @class */ (function () {
    function Error503Component() {
    }
    Error503Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-error503',
            template: __webpack_require__("./src/app/error/error503/error503.component.html"),
            styles: [__webpack_require__("./src/app/error/error503/error503.component.scss")]
        })
    ], Error503Component);
    return Error503Component;
}());



/***/ })

});
//# sourceMappingURL=error.module.chunk.js.map