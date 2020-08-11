function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-onboarding-admin-sign-in-admin-sign-in-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/onboarding/admin-sign-in/admin-sign-in.page.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/onboarding/admin-sign-in/admin-sign-in.page.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOnboardingAdminSignInAdminSignInPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header class=\"ion-no-border\" style=\"background-color: white;\"> -->\n    <ion-content style=\"bottom:1px;\" fullscreen>\n    <ion-grid style=\"padding-bottom: 0px; width: 100%;\">\n        <ion-row id=\"logo\">\n            <ion-col size=\"12\">\n                <div [@slideInOut]=\"helpMenuOpen\" class=\"d-inline-block spacecol\"></div>\n            </ion-col>\n            <ion-col>\n                <ion-img class=\"logo-img\" src=\"../assets/logo.svg\"></ion-img>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col size=\"12\">\n                <div [@slideInOut]=\"helpMenuOpen\" class=\"d-inline-block spacecol\"></div>\n            </ion-col>\n        </ion-row>\n        <ion-row id=\"segment\" mode=\"md\">\n            <ion-col class=\"segsec\">\n                <ion-toolbar>\n                    <ion-segment value=\"signin\" [(ngModel)]=\"type\" (ionChange)=\"segmentChanged($event)\" scrollable=\"true\">\n                        <ion-segment-button class = \"ripple\" value=\"signin\">\n                            <ion-label>SIGN IN</ion-label>\n                        </ion-segment-button>\n                        <ion-segment-button class = \"ripple\" value=\"signup\">\n                            <ion-label>SIGN UP</ion-label>\n                        </ion-segment-button>\n                    </ion-segment>\n                </ion-toolbar>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n\n\n    <ion-grid style=\"padding-top: 0px;padding-bottom: 65px;\">\n\n       \n        <!-- SIGN IN -->\n\n        <div [ngSwitch]=\"type\">\n            <ion-row *ngSwitchCase=\"'signin'\">\n                <ion-col>\n                    <form flex layout=\"column\" [formGroup]=\"loginForm\" (ngSubmit)=\"loginUser()\" style=\"overflow: auto; height: 100%;\">\n                        <div class=\"nametag\">\n                            <ion-text position=\"floating\" id=\"tag\">Email ID</ion-text>\n                        </div>\n\n                        <div>\n                            <ion-input  autofocus=\"true\" formControlName=\"email\" type=\"email\" mode=\"md\" class=\"input\" placeholder=\"Enter Email ID\"></ion-input>\n                            <ion-item class= \"warningitems\" [hidden]=\"checkValidity(loginFormControl.email)\" lines=\"none\" style=\"margin-top:-7px;margin-left:-10px;\">\n                                <ion-icon  style=\"margin-right: 5px;\" src=\"../assets/MariposaIcons/erroricon.svg\"></ion-icon>\n                                <ion-text class=\"warning\">Incorrect Email ID</ion-text>\n                            </ion-item>\n                        </div>    \n\n                        \n                        <div class=\"nametag\">\n                            <ion-text position=\"floating\" id=\"tag\">Password</ion-text>\n                        </div>\n                        \n                        <div>\n                            <ion-input formControlName=\"password\" mode=\"md\" class=\"input\"  type=\"password\" placeholder=\"Enter Password\"></ion-input> \n                            <ion-item class= \"warningitems\" [hidden]=\"checkValidity(loginFormControl.password)\" lines=\"none\" style=\"margin-top:-7px;margin-left:-10px;\">\n                                <ion-icon  style=\"margin-right: 5px;\" src=\"../assets/MariposaIcons/erroricon.svg\"></ion-icon>\n                                <ion-text class=\"warning\">Incorrect Password</ion-text>\n                            </ion-item>\n                        </div>    \n                       \n                        \n                        <div class=\"ion-text-center\" style=\" margin-top:30px; \">\n                            <a class=\"smalltext\" routerLink=\"/forgotpassword\">Forgot Password?</a>\n                       \n                        </div>\n                    </form>\n                </ion-col>\n            </ion-row>\n\n            <!-- SIGN UP -->\n\n            <ion-row *ngSwitchCase=\"'signup'\" class=\"cont1\">\n                <ion-col class=\"cont2\">\n                    <form flex [formGroup]=\"registrationForm\" (ngSubmit)=\"registerUser()\" layout=\"column\" style=\"overflow: auto; height: 100%;\">\n                        <div style=\"margin-bottom: 17%;padding-top: 0px;padding-bottom: 40px;\">\n                            <div class=\"nametag\">\n                                <ion-text position=\"floating\" id=\"tag\">Name</ion-text>\n                            </div>\n                            <div>\n                                <ion-input formControlName=\"userName\" mode=\"md\" class=\"input\" placeholder=\"Enter Full Name\"></ion-input>\n                                <ion-item class= \"warningitems\" [hidden]=\"checkValidity(registrationFormControl.userName)\" lines=\"none\" style=\"margin-top:-7px;margin-left:-10px;\">\n                                    <ion-icon  style=\"margin-right: 5px;\" src=\"../assets/MariposaIcons/erroricon.svg\"></ion-icon>\n                                    <ion-text class=\"warning\">User Name is required.</ion-text>\n                                </ion-item>\n                            </div>\n\n                            <div class=\"nametag\">\n                                <ion-text position=\"floating\" id=\"tag\">Email ID</ion-text>\n                            </div>\n                            <div>\n                                <ion-input formControlName=\"email\" mode=\"md\" class=\"input\" placeholder=\"Enter Email ID\" type=\"email\"></ion-input>\n                                <ion-item class= \"warningitems\" [hidden]=\"checkValidity(registrationFormControl.email)\" lines=\"none\" style=\"margin-top:-7px;margin-left:-10px;\">\n                                    <ion-icon  style=\"margin-right: 5px;\" src=\"../assets/MariposaIcons/erroricon.svg\"></ion-icon>\n                                    <ion-text class=\"warning\">Incorrect Email ID.</ion-text>\n                                </ion-item>\n                            </div>\n\n                            <div class=\"nametag\">\n                                <ion-text position=\"floating\" id=\"tag\">Mobile Number</ion-text>\n                            </div>\n                            <div>\n                                <ion-input formControlName=\"mobile\" mode=\"md\" class=\"input\" placeholder=\"Enter Mobile Number\"></ion-input>\n                                <ion-item class= \"warningitems\" [hidden]=\"checkValidity(registrationFormControl.mobile)\" lines=\"none\" style=\"margin-top:-7px;margin-left:-10px;\">\n                                    <ion-icon  style=\"margin-right: 5px;\" src=\"../assets/MariposaIcons/erroricon.svg\"></ion-icon>\n                                    <ion-text class=\"warning\">Mobile is required!.</ion-text>\n                                </ion-item>\n                            </div>\n\n                            <div class=\"nametag\">\n                                <ion-text position=\"floating\" id=\"tag\">Password</ion-text>\n                            </div>\n                            <div>\n                                <ion-input formControlName=\"password\" mode=\"md\" class=\"input\" placeholder=\"Enter Password\" type=\"password\"></ion-input>\n                                <ion-item class= \"warningitems\" [hidden]=\"checkValidity(registrationFormControl.password)\" lines=\"none\" style=\"margin-top:-7px;margin-left:-10px;\">\n                                    <ion-icon  style=\"margin-right: 5px;\" src=\"../assets/MariposaIcons/erroricon.svg\"></ion-icon>\n                                    <ion-text class=\"warning\">Password is required!.</ion-text>\n                                </ion-item>\n                            </div>\n\n                            <div class=\"nametag\">\n                                <ion-text position=\"floating\" id=\"tag\">Confirm Password</ion-text>\n                            </div>\n                            <div>\n                                <ion-input formControlName=\"confirmPassword\" mode=\"md\" class=\"input\" placeholder=\"Re-enter Password\" type=\"password\"></ion-input>\n                                <ion-item class= \"warningitems\" [hidden]=\"checkValidity(registrationFormControl.email) && !registrationFormControl.confirmPassword.errors\" lines=\"none\" style=\"margin-top:-7px;margin-left:-10px;\">\n                                    <ion-icon  style=\"margin-right: 5px;\" src=\"../assets/MariposaIcons/erroricon.svg\"></ion-icon>\n                                    <ion-text class=\"warning\">Passwords must match.</ion-text>\n                                </ion-item>\n                            </div>\n\n                            <div style=\"padding-top:41px\">\n                                <a id=\"Policytext\" class=\"smalltext\">By Loggin In you, You Agree To Our <b>Privacy Policy</b></a>\n                            </div>\n                        </div>\n                    </form>\n                </ion-col>\n            </ion-row>\n        </div>\n    </ion-grid>\n</ion-content>\n<div [ngSwitch]=\"type\">\n    <ion-footer *ngSwitchCase=\"'signin'\">\n        <form flex layout=\"column\" [formGroup]=\"loginForm\" (ngSubmit)=\"loginUser()\">\n            <div id=\"button\">\n                <ion-button [disabled]=\"loginForm.invalid\" [formGroup]=\"loginForm\" type=\"submit\" class=\"btnblue\" expand=\"block\">SIGN IN</ion-button>\n            </div>\n        </form>\n    </ion-footer>\n    <ion-footer *ngSwitchCase=\"'signup'\">\n        <form flex [formGroup]=\"registrationForm\" (ngSubmit)=\"registerUser()\" layout=\"column\">\n            <div id=\"button\">\n                <ion-button [disabled]=\"registrationForm.invalid\" class=\"btnblue\" type=\"submit\" id=\"signup\">SIGN UP</ion-button>\n            </div>\n        </form>\n    </ion-footer>\n\n</div>";
    /***/
  },

  /***/
  "./src/app/_helpers/must-match.validator.ts":
  /*!**************************************************!*\
    !*** ./src/app/_helpers/must-match.validator.ts ***!
    \**************************************************/

  /*! exports provided: MustMatch */

  /***/
  function srcApp_helpersMustMatchValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MustMatch", function () {
      return MustMatch;
    }); // custom validator to check that two fields match


    function MustMatch(controlName, matchingControlName) {
      return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
        } // set error on matchingControl if validation fails


        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({
            mustMatch: true
          });
        } else {
          matchingControl.setErrors(null);
        }
      };
    }
    /***/

  },

  /***/
  "./src/app/pages/onboarding/admin-sign-in/admin-sign-in-routing.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/onboarding/admin-sign-in/admin-sign-in-routing.module.ts ***!
    \********************************************************************************/

  /*! exports provided: AdminSignInPageRoutingModule */

  /***/
  function srcAppPagesOnboardingAdminSignInAdminSignInRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminSignInPageRoutingModule", function () {
      return AdminSignInPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _admin_sign_in_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin-sign-in.page */
    "./src/app/pages/onboarding/admin-sign-in/admin-sign-in.page.ts");

    var routes = [{
      path: '',
      component: _admin_sign_in_page__WEBPACK_IMPORTED_MODULE_3__["AdminSignInPage"]
    }];

    var AdminSignInPageRoutingModule = function AdminSignInPageRoutingModule() {
      _classCallCheck(this, AdminSignInPageRoutingModule);
    };

    AdminSignInPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AdminSignInPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/onboarding/admin-sign-in/admin-sign-in.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/onboarding/admin-sign-in/admin-sign-in.module.ts ***!
    \************************************************************************/

  /*! exports provided: AdminSignInPageModule */

  /***/
  function srcAppPagesOnboardingAdminSignInAdminSignInModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminSignInPageModule", function () {
      return AdminSignInPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _admin_sign_in_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./admin-sign-in-routing.module */
    "./src/app/pages/onboarding/admin-sign-in/admin-sign-in-routing.module.ts");
    /* harmony import */


    var _admin_sign_in_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./admin-sign-in.page */
    "./src/app/pages/onboarding/admin-sign-in/admin-sign-in.page.ts");

    var AdminSignInPageModule = function AdminSignInPageModule() {
      _classCallCheck(this, AdminSignInPageModule);
    };

    AdminSignInPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _admin_sign_in_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminSignInPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_admin_sign_in_page__WEBPACK_IMPORTED_MODULE_6__["AdminSignInPage"]]
    })], AdminSignInPageModule);
    /***/
  },

  /***/
  "./src/app/pages/onboarding/admin-sign-in/admin-sign-in.page.scss":
  /*!************************************************************************!*\
    !*** ./src/app/pages/onboarding/admin-sign-in/admin-sign-in.page.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOnboardingAdminSignInAdminSignInPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-img {\n  align-self: center;\n  height: auto;\n  padding: 0px 100px;\n  padding-top: 0px;\n}\nion-img img {\n  width: 120px;\n  height: 100px;\n}\n#segment {\n  top: -20px;\n}\nion-icon {\n  color: red;\n  zoom: 1;\n}\n#policytext {\n  font-size: 1px;\n}\n::-webkit-scrollbar {\n  width: 0px;\n  background: transparent;\n  /* make scrollbar transparent */\n}\n.spacecol {\n  height: 0px;\n}\nion-footer {\n  position: absolute;\n  bottom: 0;\n}\n.nametag {\n  margin-top: 16px;\n}\ndiv {\n  margin-top: 8px;\n}\n.smalltext {\n  text-decoration: none;\n}\nion-segment {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n  font-style: normal;\n}\nion-input.ng-invalid.ng-touched {\n  border: 1px solid red;\n}\n.logo-img {\n  display: block;\n  margin: auto;\n  max-width: 400px;\n}\n.ripple {\n  --ripple-color: transparent;\n}\nion-segment-button {\n  --indicator-color-unchecked: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvb25ib2FyZGluZy9hZG1pbi1zaWduLWluL2FkbWluLXNpZ24taW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9vbmJvYXJkaW5nL2FkbWluLXNpZ24taW4vYWRtaW4tc2lnbi1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUVBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLGdCQUFBO0FDREo7QURFSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDQVI7QURJQTtFQUNJLFVBQUE7QUNESjtBRFFBO0VBQ0ksVUFBQTtFQUNBLE9BQUE7QUNMSjtBRFFBO0VBQ0ksY0FBQTtBQ0xKO0FEUUE7RUFDSSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtBQ0xKO0FEUUE7RUFDSSxXQUFBO0FDTEo7QURRQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQ0xKO0FEUUE7RUFDSSxnQkFBQTtBQ0xKO0FEUUE7RUFDSSxlQUFBO0FDTEo7QURRQTtFQUNJLHFCQUFBO0FDTEo7QURRQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNMSjtBRFFBO0VBQ0kscUJBQUE7QUNMSjtBRFFBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0xKO0FEUUE7RUFDSSwyQkFBQTtBQ0xKO0FEUUE7RUFDRSxpQ0FBQTtBQ0xGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb25ib2FyZGluZy9hZG1pbi1zaWduLWluL2FkbWluLXNpZ24taW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWltZyB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIC8vIG1heC13aWR0aDogMzclO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAwcHggMTAwcHg7XG4gICAgLy9wYWRkaW5nLXRvcDo1OXB4IDtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICB9XG59XG5cbiNzZWdtZW50IHtcbiAgICB0b3A6IC0yMHB4O1xufVxuXG4vL2lvbi10ZXh0IHtcbi8vICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcbi8vfVxuXG5pb24taWNvbiB7XG4gICAgY29sb3I6IHJlZDtcbiAgICB6b29tOiAxO1xufVxuXG4jcG9saWN5dGV4dCB7XG4gICAgZm9udC1zaXplOiAxcHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAwcHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLyogbWFrZSBzY3JvbGxiYXIgdHJhbnNwYXJlbnQgKi9cbn1cblxuLnNwYWNlY29sIHtcbiAgICBoZWlnaHQ6IDBweDtcbn1cblxuaW9uLWZvb3RlcntcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG59XG5cbi5uYW1ldGFne1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbmRpdntcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5zbWFsbHRleHR7XG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG59XG5cbmlvbi1zZWdtZW50e1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuaW9uLWlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICB9XG5cbi5sb2dvLWltZ3tcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbn1cblxuLnJpcHBsZXtcbiAgICAtLXJpcHBsZS1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIC0taW5kaWNhdG9yLWNvbG9yLXVuY2hlY2tlZCA6IGdyZXk7XG4gIH0iLCJpb24taW1nIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDBweCAxMDBweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cbmlvbi1pbWcgaW1nIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4jc2VnbWVudCB7XG4gIHRvcDogLTIwcHg7XG59XG5cbmlvbi1pY29uIHtcbiAgY29sb3I6IHJlZDtcbiAgem9vbTogMTtcbn1cblxuI3BvbGljeXRleHQge1xuICBmb250LXNpemU6IDFweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAvKiBtYWtlIHNjcm9sbGJhciB0cmFuc3BhcmVudCAqL1xufVxuXG4uc3BhY2Vjb2wge1xuICBoZWlnaHQ6IDBweDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xufVxuXG4ubmFtZXRhZyB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbmRpdiB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLnNtYWxsdGV4dCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaW9uLXNlZ21lbnQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbmlvbi1pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbi5sb2dvLWltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogNDAwcHg7XG59XG5cbi5yaXBwbGUge1xuICAtLXJpcHBsZS1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIC0taW5kaWNhdG9yLWNvbG9yLXVuY2hlY2tlZDogZ3JleTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/onboarding/admin-sign-in/admin-sign-in.page.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/onboarding/admin-sign-in/admin-sign-in.page.ts ***!
    \**********************************************************************/

  /*! exports provided: AdminSignInPage */

  /***/
  function srcAppPagesOnboardingAdminSignInAdminSignInPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminSignInPage", function () {
      return AdminSignInPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_helpers/must-match.validator */
    "./src/app/_helpers/must-match.validator.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var src_app_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/http.service */
    "./src/app/http.service.ts");
    /* harmony import */


    var _dataservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../dataservice.service */
    "./src/app/pages/dataservice.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var AdminSignInPage = /*#__PURE__*/function () {
      function AdminSignInPage(formBuilder, animationCtrl, http, dataService, navCtrl) {
        _classCallCheck(this, AdminSignInPage);

        this.formBuilder = formBuilder;
        this.animationCtrl = animationCtrl;
        this.http = http;
        this.dataService = dataService;
        this.navCtrl = navCtrl;
        this.loginForm = formBuilder.group({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.registrationForm = formBuilder.group({
          userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
          mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
          confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        }, {
          validator: Object(src_app_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_3__["MustMatch"])('password', 'confirmPassword')
        });
      }

      _createClass(AdminSignInPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.type = 'signin';
          this.helpMenuOpen = 'in';
        }
      }, {
        key: "loginUser",
        value: function loginUser() {
          var _this = this;

          if (this.loginForm.valid) {
            this.http.post('login', this.loginForm.value).then(function (response) {
              _this.dataService.setUserInfo(response);

              _this.navCtrl.navigateForward(['carecircle/showcarecircle']);
            }, function (error) {
              console.log(error);
            });
          } else {
            return;
          }
        }
      }, {
        key: "registerUser",
        value: function registerUser() {
          var _this2 = this;

          if (this.registrationForm.valid) {
            this.http.post('user', this.registrationForm.value).then(function (response) {
              _this2.type = 'signin';
            }, function (error) {
              console.log(error);
            });
          }
        }
      }, {
        key: "checkValidity",
        value: function checkValidity(control) {
          if (control.touched) {
            if (control.invalid) {
              return false;
            } else {
              return true;
            }
          } else {
            return true;
          }
        } //ionViewWillEnter() {
        //  setTimeout(() => this.searchbar.setFocus(), 300);
        //}

      }, {
        key: "segmentChanged",
        value: function segmentChanged(ev) {
          // console.log("Segment changed", ev);
          this.helpMenuOpen = this.helpMenuOpen === 'out' ? 'in' : 'out';

          if (ev.detail.value === 'signin') {
            var animation = this.animationCtrl.create().addElement(document.querySelector('.logo-img')).duration(500).keyframes([{
              offset: 0,
              transform: 'scale(0.8) '
            }, {
              offset: 0.5,
              transform: 'scale(0.9) '
            }, {
              offset: 1,
              transform: 'scale(1)'
            }]);
            return animation.play();
          } else if (ev.detail.value === 'signup') {
            var animation2 = this.animationCtrl.create().addElement(document.querySelector('.logo-img')).duration(500).keyframes([{
              offset: 0,
              transform: 'scale(1) '
            }, {
              offset: 0.5,
              transform: 'scale(0.9) '
            }, {
              offset: 1,
              transform: 'scale(0.8)'
            }]);
            return animation2.play();
          }
        }
      }, {
        key: "loginFormControl",
        get: function get() {
          return this.loginForm.controls;
        }
      }, {
        key: "registrationFormControl",
        get: function get() {
          return this.registrationForm.controls;
        }
      }]);

      return AdminSignInPage;
    }();

    AdminSignInPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AnimationController"]
      }, {
        type: src_app_http_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
      }, {
        type: _dataservice_service__WEBPACK_IMPORTED_MODULE_6__["DataserviceService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('autofocus', {
      "static": false
    })], AdminSignInPage.prototype, "searchbar", void 0);
    AdminSignInPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-sign-in',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./admin-sign-in.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/onboarding/admin-sign-in/admin-sign-in.page.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('slideInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        height: '10px'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        height: '0px'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('in => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms ease-in-out')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('out => in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms ease-in-out'))])],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./admin-sign-in.page.scss */
      "./src/app/pages/onboarding/admin-sign-in/admin-sign-in.page.scss"))["default"]]
    })], AdminSignInPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-onboarding-admin-sign-in-admin-sign-in-module-es5.js.map