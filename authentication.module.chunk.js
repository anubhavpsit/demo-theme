webpackJsonp(["authentication.module"],{

/***/ "./src/app/authentication/authentication.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_routing__ = __webpack_require__("./src/app/authentication/authentication.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signin_signin_component__ = __webpack_require__("./src/app/authentication/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__ = __webpack_require__("./src/app/authentication/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forgot_forgot_component__ = __webpack_require__("./src/app/authentication/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lockscreen_lockscreen_component__ = __webpack_require__("./src/app/authentication/lockscreen/lockscreen.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__authentication_routing__["a" /* AuthenticationRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__signin_signin_component__["a" /* SigninComponent */], __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__["a" /* SignupComponent */], __WEBPACK_IMPORTED_MODULE_7__forgot_forgot_component__["a" /* ForgotComponent */], __WEBPACK_IMPORTED_MODULE_8__lockscreen_lockscreen_component__["a" /* LockscreenComponent */]]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "./src/app/authentication/authentication.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signin_signin_component__ = __webpack_require__("./src/app/authentication/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signup_signup_component__ = __webpack_require__("./src/app/authentication/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_forgot_component__ = __webpack_require__("./src/app/authentication/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lockscreen_lockscreen_component__ = __webpack_require__("./src/app/authentication/lockscreen/lockscreen.component.ts");




var AuthenticationRoutes = [
    {
        path: '',
        children: [{
                path: 'signin',
                component: __WEBPACK_IMPORTED_MODULE_0__signin_signin_component__["a" /* SigninComponent */]
            }, {
                path: 'signup',
                component: __WEBPACK_IMPORTED_MODULE_1__signup_signup_component__["a" /* SignupComponent */]
            }, {
                path: 'forgot',
                component: __WEBPACK_IMPORTED_MODULE_2__forgot_forgot_component__["a" /* ForgotComponent */]
            }, {
                path: 'lockscreen',
                component: __WEBPACK_IMPORTED_MODULE_3__lockscreen_lockscreen_component__["a" /* LockscreenComponent */]
            }]
    }
];


/***/ }),

/***/ "./src/app/authentication/forgot/forgot.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex align-items-stretch min-height-100 h-100\">\n  <div class=\"bg-cover bg-3 d-none d-md-inline-flex col-md-6 col-lg-8\"></div>\n  <div class=\"card card-body mb-0 rounded-0 p-5 col-sm-12 col-md-6 col-lg-4\">\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"mb-3\">\n        <img src=\"assets/images/logo.png\" class=\"avatar-xs mb-1\" alt=\"\">\n        <p class=\"ff-headers text-uppercase\">Recover your password</p>\n      </div>\n      <fieldset class=\"form-group\">\n        <label for=\"username\" class=\"form-control-label\">\n          Enter your username\n        </label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Username\" [formControl]=\"form.controls['uname']\" [ngClass]=\"{'is-invalid': form.controls['uname'].hasError('required') && form.controls['uname'].touched}\"/>\n        <div class=\"invalid-feedback\" *ngIf=\"form.controls['uname'].hasError('required') && form.controls['uname'].touched\">Username is required.</div>\n      </fieldset>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!form.valid\">Reset password</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/authentication/forgot/forgot.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/authentication/forgot/forgot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForgotComponent = /** @class */ (function () {
    function ForgotComponent(fb, router) {
        this.fb = fb;
        this.router = router;
    }
    ForgotComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            uname: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])]
        });
    };
    ForgotComponent.prototype.onSubmit = function () {
        this.router.navigate(['/']);
    };
    ForgotComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__("./src/app/authentication/forgot/forgot.component.html"),
            styles: [__webpack_require__("./src/app/authentication/forgot/forgot.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "./src/app/authentication/lockscreen/lockscreen.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex align-items-center justify-content-md-center min-height-100 text-center bg-indigo-A700 h-100\">\n  <div class=\"col col-lg-10 p-5\">\n    <img src=\"assets/images/avatar.jpg\" class=\"avatar-md rounded-circle\" alt=\"user\" title=\"user\"/>\n    <div class=\"mb-3 mt-3\">\n      <p class=\"ff-headers text-uppercase mb-0\">Betty Simmons</p>\n      <small>Please enter your lock code</small>\n    </div>\n    <div class=\"center-block lockcode mt-1\">\n      <form role=\"form\" (ngSubmit)=\"onSubmit()\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter passcode and press enter\">\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/authentication/lockscreen/lockscreen.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/authentication/lockscreen/lockscreen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockscreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LockscreenComponent = /** @class */ (function () {
    function LockscreenComponent(router) {
        this.router = router;
    }
    LockscreenComponent.prototype.onSubmit = function () {
        this.router.navigate(['/']);
    };
    LockscreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lockscreen',
            template: __webpack_require__("./src/app/authentication/lockscreen/lockscreen.component.html"),
            styles: [__webpack_require__("./src/app/authentication/lockscreen/lockscreen.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], LockscreenComponent);
    return LockscreenComponent;
}());



/***/ }),

/***/ "./src/app/authentication/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex align-items-stretch min-height-100 h-100\">\n  <div class=\"bg-cover bg-1 d-none d-md-inline-flex col-md-6 col-lg-8\"></div>\n  <div class=\"card card-body mb-0 rounded-0 p-5 col-sm-12 col-md-6 col-lg-4\">\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"mb-3\">\n        <img src=\"assets/images/logo.png\" class=\"avatar-xs mb-1\" alt=\"\">\n        <p class=\"ff-headers text-uppercase\">Sign in to your account</p>\n      </div>\n      <fieldset class=\"form-group\">\n        <label for=\"username\" class=\"form-control-label\">\n          Enter your username\n        </label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"username\" [formControl]=\"form.controls['uname']\" [ngClass]=\"{'is-invalid': form.controls['uname'].hasError('required') && form.controls['uname'].touched}\"/>\n        <div class=\"invalid-feedback\" *ngIf=\"form.controls['uname'].hasError('required') && form.controls['uname'].touched\">Username is required.</div>\n      </fieldset>\n      <fieldset class=\"form-group\">\n        <label for=\"password\" class=\"form-control-label\">\n          Enter your password\n        </label>\n        <input type=\"password\" class=\"form-control\" placeholder=\"********\" [formControl]=\"form.controls['password']\" [ngClass]=\"{'is-invalid': form.controls['password'].hasError('required') && form.controls['password'].touched}\"/>\n        <div class=\"invalid-feedback\" *ngIf=\"form.controls['password'].hasError('required') && form.controls['password'].touched\">Password is required.</div>\n        <a [routerLink]=\"['/authentication/forgot']\" class=\"form-text\"><small>Recover password</small></a>\n      </fieldset>\n      <div class=\"custom-control custom-checkbox mb-3\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n        <label class=\"custom-control-label\" for=\"customCheck1\">Stay logged in</label>\n      </div>\n      <div class=\"block\"></div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!form.valid\">Login</button>\n      <a class=\"btn btn-outline-primary btn-link\" [routerLink]=\"['/authentication/signup']\">Create an account!</a>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/authentication/signin/signin.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/authentication/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninComponent = /** @class */ (function () {
    function SigninComponent(fb, router) {
        this.fb = fb;
        this.router = router;
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            uname: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])], password: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])]
        });
    };
    SigninComponent.prototype.onSubmit = function () {
        this.router.navigate(['/']);
    };
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__("./src/app/authentication/signin/signin.component.html"),
            styles: [__webpack_require__("./src/app/authentication/signin/signin.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/authentication/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex align-items-stretch flex-nowrap min-height-100 h-100\">\n  <div class=\"bg-cover bg-2 d-none d-md-inline-flex col-md-6 col-lg-8\"></div>\n  <div class=\"card card-body mb-0 rounded-0 p-5 col-sm-12 col-md-6 col-lg-4\">\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"mb-3\">\n        <img src=\"assets/images/logo.png\" class=\"avatar-xs mb-1\" alt=\"\">\n        <p class=\"ff-headers text-uppercase\">Create an account</p>\n      </div>\n      <fieldset class=\"form-group\">\n        <label for=\"username\">\n          Choose a username\n        </label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"username\" [formControl]=\"form.controls['uname']\" [ngClass]=\"{'is-invalid': form.controls['uname'].hasError('required') && form.controls['uname'].touched}\"/>\n        <div class=\"invalid-feedback\" *ngIf=\"form.controls['uname'].hasError('required') && form.controls['uname'].touched\">Username is required.</div>\n      </fieldset>\n      <fieldset class=\"form-group\">\n        <label for=\"password\">\n          Enter your password\n        </label>\n        <input type=\"password\" class=\"form-control\" placeholder=\"********\" [formControl]=\"form.controls['password']\" [ngClass]=\"{'is-invalid': form.controls['password'].hasError('required') && form.controls['password'].touched}\"/>\n        <div class=\"invalid-feedback\" *ngIf=\"form.controls['password'].hasError('required') && form.controls['password'].touched\">Password is required.</div>\n      </fieldset>\n      <fieldset class=\"form-group\">\n        <label for=\"password\">\n          Confirm your password\n        </label>\n        <input type=\"password\" class=\"form-control\" placeholder=\"********\" [formControl]=\"form.controls['confirmPassword']\" [ngClass]=\"{'is-invalid': form.controls['confirmPassword'].hasError('required') && form.controls['confirmPassword'].touched || form.controls['confirmPassword'].hasError('equalTo') && form.controls['confirmPassword'].touched}\"/>\n        <div class=\"invalid-feedback\" *ngIf=\"form.controls['confirmPassword'].hasError('required') && form.controls['confirmPassword'].touched\">Confirm your password.</div>\n        <div class=\"invalid-feedback\" *ngIf=\"form.controls['confirmPassword'].hasError('equalTo') && form.controls['confirmPassword'].touched\">Password should match.</div>\n      </fieldset>\n      <div class=\"custom-control custom-checkbox mb-3\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n        <label class=\"custom-control-label\" for=\"customCheck1\">I have read and agree to the terms of service.</label>\n      </div>\n      <div class=\"block mb-3\"></div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!form.valid\">Create</button>\n      <a class=\"btn btn-outline-primary btn-link\" [routerLink]=\"['/authentication/signin']\">Login!</a>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/authentication/signup/signup.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/authentication/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation__ = __webpack_require__("./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_validation__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required);
var confirmPassword = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3_ng2_validation__["CustomValidators"].equalTo(password));
var SignupComponent = /** @class */ (function () {
    function SignupComponent(fb, router) {
        this.fb = fb;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            uname: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            password: password,
            confirmPassword: confirmPassword
        });
    };
    SignupComponent.prototype.onSubmit = function () {
        this.router.navigate(['/']);
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/authentication/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/authentication/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ })

});
//# sourceMappingURL=authentication.module.chunk.js.map