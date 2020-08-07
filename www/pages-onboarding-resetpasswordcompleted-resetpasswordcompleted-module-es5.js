function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-onboarding-resetpasswordcompleted-resetpasswordcompleted-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/onboarding/resetpasswordcompleted/resetpasswordcompleted.page.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/onboarding/resetpasswordcompleted/resetpasswordcompleted.page.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOnboardingResetpasswordcompletedResetpasswordcompletedPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<ion-content>\n  <ion-grid>\n    <ion-img src=\"../assets/icon/passwordResetSuccess.png\"></ion-img>\n\n    <div style=\"text-align: center;\">\n      <ion-text color=\"primary\"><h5 style=\"font-weight:bold;font-size:13px;\">Password Changed</h5></ion-text>\n    </div>\n\n    <div>\n      <ion-text><h6 style=\"text-align:center;font-size:13px;font-weight: 300;margin-top:0px ;\">Your Password Reset is successfully completed</h6></ion-text>\n    </div>\n\n    <div id=\"button\">\n      <ion-button [disabled]=\"false\" class=\"btnblue\" id=\"signup\">CONTINUE</ion-button>\n    </div>\n\n\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/onboarding/resetpasswordcompleted/resetpasswordcompleted-routing.module.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/pages/onboarding/resetpasswordcompleted/resetpasswordcompleted-routing.module.ts ***!
    \**************************************************************************************************/

  /*! exports provided: ResetpasswordcompletedPageRoutingModule */

  /***/
  function srcAppPagesOnboardingResetpasswordcompletedResetpasswordcompletedRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetpasswordcompletedPageRoutingModule", function () {
      return ResetpasswordcompletedPageRoutingModule;
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


    var _resetpasswordcompleted_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./resetpasswordcompleted.page */
    "./src/app/pages/onboarding/resetpasswordcompleted/resetpasswordcompleted.page.ts");

    var routes = [{
      path: '',
      component: _resetpasswordcompleted_page__WEBPACK_IMPORTED_MODULE_3__["ResetpasswordcompletedPage"]
    }];

    var ResetpasswordcompletedPageRoutingModule = function ResetpasswordcompletedPageRoutingModule() {
      _classCallCheck(this, ResetpasswordcompletedPageRoutingModule);
    };

    ResetpasswordcompletedPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ResetpasswordcompletedPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/onboarding/resetpasswordcompleted/resetpasswordcompleted.module.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/pages/onboarding/resetpasswordcompleted/resetpasswordcompleted.module.ts ***!
    \******************************************************************************************/

  /*! exports provided: ResetpasswordcompletedPageModule */

  /***/
  function srcAppPagesOnboardingResetpasswordcompletedResetpasswordcompletedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetpasswordcompletedPageModule", function () {
      return ResetpasswordcompletedPageModule;
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


    var _resetpasswordcompleted_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./resetpasswordcompleted-routing.module */
    "./src/app/pages/onboarding/resetpasswordcompleted/resetpasswordcompleted-routing.module.ts");
    /* harmony import */


    var _resetpasswordcompleted_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./resetpasswordcompleted.page */
    "./src/app/pages/onboarding/resetpasswordcompleted/resetpasswordcompleted.page.ts");

    var ResetpasswordcompletedPageModule = function ResetpasswordcompletedPageModule() {
      _classCallCheck(this, ResetpasswordcompletedPageModule);
    };

    ResetpasswordcompletedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _resetpasswordcompleted_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResetpasswordcompletedPageRoutingModule"]],
      declarations: [_resetpasswordcompleted_page__WEBPACK_IMPORTED_MODULE_6__["ResetpasswordcompletedPage"]]
    })], ResetpasswordcompletedPageModule);
    /***/
  },

  /***/
  "./src/app/pages/onboarding/resetpasswordcompleted/resetpasswordcompleted.page.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/pages/onboarding/resetpasswordcompleted/resetpasswordcompleted.page.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOnboardingResetpasswordcompletedResetpasswordcompletedPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-img {\n  align-self: center;\n  max-width: 50%;\n  height: auto;\n  margin-left: 25%;\n  margin-top: 25%;\n  padding-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvb25ib2FyZGluZy9yZXNldHBhc3N3b3JkY29tcGxldGVkL3Jlc2V0cGFzc3dvcmRjb21wbGV0ZWQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9vbmJvYXJkaW5nL3Jlc2V0cGFzc3dvcmRjb21wbGV0ZWQvcmVzZXRwYXNzd29yZGNvbXBsZXRlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29uYm9hcmRpbmcvcmVzZXRwYXNzd29yZGNvbXBsZXRlZC9yZXNldHBhc3N3b3JkY29tcGxldGVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbWd7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDoyNSU7XG4gICAgbWFyZ2luLXRvcDoyNSU7XG4gICAgcGFkZGluZy10b3A6MzBweCA7ICBcbn1cblxuIiwiaW9uLWltZyB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiA1MCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgbWFyZ2luLXRvcDogMjUlO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/onboarding/resetpasswordcompleted/resetpasswordcompleted.page.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/pages/onboarding/resetpasswordcompleted/resetpasswordcompleted.page.ts ***!
    \****************************************************************************************/

  /*! exports provided: ResetpasswordcompletedPage */

  /***/
  function srcAppPagesOnboardingResetpasswordcompletedResetpasswordcompletedPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetpasswordcompletedPage", function () {
      return ResetpasswordcompletedPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ResetpasswordcompletedPage = /*#__PURE__*/function () {
      function ResetpasswordcompletedPage() {
        _classCallCheck(this, ResetpasswordcompletedPage);
      }

      _createClass(ResetpasswordcompletedPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResetpasswordcompletedPage;
    }();

    ResetpasswordcompletedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-resetpasswordcompleted',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./resetpasswordcompleted.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/onboarding/resetpasswordcompleted/resetpasswordcompleted.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./resetpasswordcompleted.page.scss */
      "./src/app/pages/onboarding/resetpasswordcompleted/resetpasswordcompleted.page.scss"))["default"]]
    })], ResetpasswordcompletedPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-onboarding-resetpasswordcompleted-resetpasswordcompleted-module-es5.js.map