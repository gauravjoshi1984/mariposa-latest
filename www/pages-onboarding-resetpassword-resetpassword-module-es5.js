function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-onboarding-resetpassword-resetpassword-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/onboarding/resetpassword/resetpassword.page.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/onboarding/resetpassword/resetpassword.page.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOnboardingResetpasswordResetpasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<ion-content>\n  <ion-grid style=\"padding-left:16px ;padding-bottom: 0px;\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <m-backbutton></m-backbutton>\n      </ion-buttons>\n    </ion-toolbar>\n    </ion-grid>\n  \n    <ion-grid>\n    <ion-text>\n      <h5 style=\"margin-top: 40px;\"><b>Reset Password?</b></h5>\n    </ion-text>\n  \n    <ion-text> \n      <h6 style=\"margin-top: 40px;\">Please create a new password</h6>\n    </ion-text>\n  \n\n    <div class=\"nametag\" style=\"margin-top: 56px;\">\n      <ion-text position=\"floating\" id=\"tag\">New Password</ion-text>\n    </div>\n\n    <div>\n      <ion-input mode=\"md\" class=\"input\" type=\"password\" placeholder=\"Enter new password\"></ion-input>\n      <ion-item [hidden]=\"true\" lines=\"none\" style=\"margin-top:-10px;margin-left:-10px;\">\n        <ion-icon style=\"margin-right: 5px;\" name=\"alert-circle\"></ion-icon>\n        <ion-text class=“warning”>Incorrect Password.</ion-text>\n      </ion-item>\n    </div>\n\n    <div class=\"nametag\">\n      <ion-text position=\"floating\" id=\"tag\">Confirm Password</ion-text>\n    </div>\n\n    <div>\n      <ion-input mode=\"md\" class=\"input\" type=\"password\" placeholder=\"Re-enter Password\"></ion-input>\n      <ion-item [hidden]=\"true\" lines=\"none\" style=\"margin-top:-10px;margin-left:-10px;\">\n        <ion-icon style=\"margin-right: 5px;\" name=\"alert-circle\"></ion-icon>\n        <ion-text class=“warning”>Incorrect Password.</ion-text>\n      </ion-item>\n    </div>\n\n  <div id=\"button\">\n    <ion-button [disabled]=\"true\" class=\"btnblue\" type=\"submit\"  id=\"signup\">RESET PASSWORD</ion-button>\n  </div>\n\n\n  </ion-grid>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/onboarding/resetpassword/resetpassword-routing.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/onboarding/resetpassword/resetpassword-routing.module.ts ***!
    \********************************************************************************/

  /*! exports provided: ResetpasswordPageRoutingModule */

  /***/
  function srcAppPagesOnboardingResetpasswordResetpasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetpasswordPageRoutingModule", function () {
      return ResetpasswordPageRoutingModule;
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


    var _resetpassword_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./resetpassword.page */
    "./src/app/pages/onboarding/resetpassword/resetpassword.page.ts");

    var routes = [{
      path: '',
      component: _resetpassword_page__WEBPACK_IMPORTED_MODULE_3__["ResetpasswordPage"]
    }];

    var ResetpasswordPageRoutingModule = function ResetpasswordPageRoutingModule() {
      _classCallCheck(this, ResetpasswordPageRoutingModule);
    };

    ResetpasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ResetpasswordPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/onboarding/resetpassword/resetpassword.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/onboarding/resetpassword/resetpassword.module.ts ***!
    \************************************************************************/

  /*! exports provided: ResetpasswordPageModule */

  /***/
  function srcAppPagesOnboardingResetpasswordResetpasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetpasswordPageModule", function () {
      return ResetpasswordPageModule;
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


    var _resetpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./resetpassword-routing.module */
    "./src/app/pages/onboarding/resetpassword/resetpassword-routing.module.ts");
    /* harmony import */


    var _resetpassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./resetpassword.page */
    "./src/app/pages/onboarding/resetpassword/resetpassword.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/pages/shared/shared.module.ts");

    var ResetpasswordPageModule = function ResetpasswordPageModule() {
      _classCallCheck(this, ResetpasswordPageModule);
    };

    ResetpasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _resetpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResetpasswordPageRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      declarations: [_resetpassword_page__WEBPACK_IMPORTED_MODULE_6__["ResetpasswordPage"]]
    })], ResetpasswordPageModule);
    /***/
  },

  /***/
  "./src/app/pages/onboarding/resetpassword/resetpassword.page.scss":
  /*!************************************************************************!*\
    !*** ./src/app/pages/onboarding/resetpassword/resetpassword.page.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOnboardingResetpasswordResetpasswordPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".button-native[disabled] {\n  cursor: default;\n  opacity: 0.5;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvb25ib2FyZGluZy9yZXNldHBhc3N3b3JkL3Jlc2V0cGFzc3dvcmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9vbmJvYXJkaW5nL3Jlc2V0cGFzc3dvcmQvcmVzZXRwYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vbmJvYXJkaW5nL3Jlc2V0cGFzc3dvcmQvcmVzZXRwYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIFxuXG5cbi5idXR0b24tbmF0aXZlW2Rpc2FibGVkXSB7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIG9wYWNpdHk6IC41O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIFxufVxuXG5cbiIsIi5idXR0b24tbmF0aXZlW2Rpc2FibGVkXSB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgb3BhY2l0eTogMC41O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/onboarding/resetpassword/resetpassword.page.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/onboarding/resetpassword/resetpassword.page.ts ***!
    \**********************************************************************/

  /*! exports provided: ResetpasswordPage */

  /***/
  function srcAppPagesOnboardingResetpasswordResetpasswordPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetpasswordPage", function () {
      return ResetpasswordPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ResetpasswordPage = /*#__PURE__*/function () {
      function ResetpasswordPage() {
        _classCallCheck(this, ResetpasswordPage);
      }

      _createClass(ResetpasswordPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResetpasswordPage;
    }();

    ResetpasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-resetpassword',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./resetpassword.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/onboarding/resetpassword/resetpassword.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./resetpassword.page.scss */
      "./src/app/pages/onboarding/resetpassword/resetpassword.page.scss"))["default"]]
    })], ResetpasswordPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-onboarding-resetpassword-resetpassword-module-es5.js.map