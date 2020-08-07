(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-onboarding-forgotpassword-forgotpassword-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/onboarding/forgotpassword/forgotpassword.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/onboarding/forgotpassword/forgotpassword.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <ion-grid class=\"backbuttongrid\"> \n        <ion-toolbar style=\"height: 40px;\">\n            <ion-buttons slot=\"start\">\n                <m-backbutton></m-backbutton>\n            </ion-buttons>\n        </ion-toolbar>\n    </ion-grid> \n    <ion-grid>  \n        <ion-text>\n            <h5 style=\"margin-top:24px;margin-bottom:0px\"><b>Forgot Password?</b></h5>\n        </ion-text>\n        <ion-text>\n            <h6 style=\"margin-top: 24px; font-weight: 500;\">Don't worry</h6>\n        </ion-text>\n        <ion-text>\n            <h6 style=\"font-weight: normal;\">We will send you an email with instruction on how <br>to reset your password.</h6>\n        </ion-text>\n        <ion-text>\n            <h6 style=\"font-weight: normal;\">Enter your registered email ID.</h6>\n        </ion-text>\n        <div style=\"margin-top: 27px;\">\n            <ion-text class=\"nametag\" position=\"floating\" id=\"tag\">Email ID</ion-text>\n        </div>\n        <form flex [formGroup]=\"forgotPasswordForm\" (ngSubmit)=\"forgotPassword()\">\n            <div style=\"padding-top: 8px;;\">\n                <ion-input formControlName=\"email\" mode=\"md\" class=\"input\" type=\"email\" placeholder=\"Enter Email ID\"></ion-input>\n                <ion-item [hidden]=\"!resetResult\" lines=\"none\" style=\"margin-top:-5px;margin-left:-10px;\">\n                    <ion-icon style=\"margin-right: 5px;\" name=\"alert-circle\"></ion-icon>\n                    <ion-text style=\"color:red;font-size:14px\" class=“warning”>This email id is not registered.</ion-text>\n                </ion-item>\n                <ion-item [hidden]=\"checkValidity(forgotPasswordFormControl.email)\" lines=\"none\" style=\"margin-top:-5px;margin-left:-10px;\">\n                    <ion-icon style=\"margin-right: 5px;\" name=\"alert-circle\"></ion-icon>\n                    <ion-text class=\"warning\">Invalid email Id.</ion-text>\n                </ion-item>\n            </div>\n            <div id=\"button\">\n                <ion-button type=\"submit\" class=\"btnblue\" [disabled]=\"forgotPasswordForm.invalid\" expand=\"block\">SEND EMAIL</ion-button>\n            </div>\n        </form>\n    </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/onboarding/forgotpassword/forgotpassword-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/onboarding/forgotpassword/forgotpassword-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ForgotpasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageRoutingModule", function() { return ForgotpasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgotpassword.page */ "./src/app/pages/onboarding/forgotpassword/forgotpassword.page.ts");




const routes = [
    {
        path: '',
        component: _forgotpassword_page__WEBPACK_IMPORTED_MODULE_3__["ForgotpasswordPage"]
    }
];
let ForgotpasswordPageRoutingModule = class ForgotpasswordPageRoutingModule {
};
ForgotpasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgotpasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/onboarding/forgotpassword/forgotpassword.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/onboarding/forgotpassword/forgotpassword.module.ts ***!
  \**************************************************************************/
/*! exports provided: ForgotpasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageModule", function() { return ForgotpasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgotpassword-routing.module */ "./src/app/pages/onboarding/forgotpassword/forgotpassword-routing.module.ts");
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgotpassword.page */ "./src/app/pages/onboarding/forgotpassword/forgotpassword.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/pages/shared/shared.module.ts");








let ForgotpasswordPageModule = class ForgotpasswordPageModule {
};
ForgotpasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotpasswordPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        declarations: [_forgotpassword_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpasswordPage"]]
    })
], ForgotpasswordPageModule);



/***/ }),

/***/ "./src/app/pages/onboarding/forgotpassword/forgotpassword.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/onboarding/forgotpassword/forgotpassword.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-input {\n  border-color: var(--ion-color-primary, #4137FF);\n}\n\n.warningicon {\n  color: red;\n  zoom: 0.7;\n}\n\n.backbuttongrid {\n  padding-left: 12px;\n  padding-top: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvb25ib2FyZGluZy9mb3Jnb3RwYXNzd29yZC9mb3Jnb3RwYXNzd29yZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL29uYm9hcmRpbmcvZm9yZ290cGFzc3dvcmQvZm9yZ290cGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUksK0NBQUE7QUNGSjs7QURLQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0FDRko7O0FES0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vbmJvYXJkaW5nL2ZvcmdvdHBhc3N3b3JkL2ZvcmdvdHBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pb24taW5wdXR7XG5cbiAgICBib3JkZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzQxMzdGRik7XG59XG5cbi53YXJuaW5naWNvbntcbiAgICBjb2xvcjpyZWQ7XG4gICAgem9vbTogMC43O1xufVxuXG4uYmFja2J1dHRvbmdyaWR7XG4gICAgcGFkZGluZy1sZWZ0OjEycHg7XG4gICAgcGFkZGluZy10b3A6MjhweDtcbn1cblxuXG5cblxuIiwiaW9uLWlucHV0IHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzQxMzdGRik7XG59XG5cbi53YXJuaW5naWNvbiB7XG4gIGNvbG9yOiByZWQ7XG4gIHpvb206IDAuNztcbn1cblxuLmJhY2tidXR0b25ncmlkIHtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBwYWRkaW5nLXRvcDogMjhweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/onboarding/forgotpassword/forgotpassword.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/onboarding/forgotpassword/forgotpassword.page.ts ***!
  \************************************************************************/
/*! exports provided: ForgotpasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPage", function() { return ForgotpasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http.service */ "./src/app/http.service.ts");




let ForgotpasswordPage = class ForgotpasswordPage {
    constructor(formBuilder, http) {
        this.http = http;
        this.resetResult = false;
        this.forgotPasswordForm = formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
        });
    }
    get forgotPasswordFormControl() {
        return this.forgotPasswordForm.controls;
    }
    ngOnInit() {
    }
    checkValidity(control) {
        if (control.touched) {
            if (control.invalid) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return true;
        }
    }
    forgotPassword() {
        if (this.forgotPasswordForm.valid) {
            this.http.post('forgotPassword', this.forgotPasswordForm.value).then((response) => {
                console.log(response);
            }, err => {
                console.log(err);
            });
        }
    }
};
ForgotpasswordPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_http_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
ForgotpasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgotpassword',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./forgotpassword.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/onboarding/forgotpassword/forgotpassword.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./forgotpassword.page.scss */ "./src/app/pages/onboarding/forgotpassword/forgotpassword.page.scss")).default]
    })
], ForgotpasswordPage);



/***/ })

}]);
//# sourceMappingURL=pages-onboarding-forgotpassword-forgotpassword-module-es2015.js.map