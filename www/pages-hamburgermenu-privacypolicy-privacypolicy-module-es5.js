function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-hamburgermenu-privacypolicy-privacypolicy-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hamburgermenu/privacypolicy/privacypolicy.page.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hamburgermenu/privacypolicy/privacypolicy.page.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHamburgermenuPrivacypolicyPrivacypolicyPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  <ion-toolbar class=\"headtoolbar\">\n    <ion-grid>\n      <ion-row style=\"align-items: center; margin-top: 32px;\">\n        <ion-col size=\"10\">\n          <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\"\n            >Privacy Policy</ion-text\n          >\n        </ion-col>\n        <ion-col>\n          <ion-icon\n            style=\"zoom: 1.2; color: black; float: right;\"\n            name=\"close-outline\"\n          ></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/hamburgermenu/privacypolicy/privacypolicy-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/hamburgermenu/privacypolicy/privacypolicy-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: PrivacypolicyPageRoutingModule */

  /***/
  function srcAppPagesHamburgermenuPrivacypolicyPrivacypolicyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacypolicyPageRoutingModule", function () {
      return PrivacypolicyPageRoutingModule;
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


    var _privacypolicy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./privacypolicy.page */
    "./src/app/pages/hamburgermenu/privacypolicy/privacypolicy.page.ts");

    var routes = [{
      path: '',
      component: _privacypolicy_page__WEBPACK_IMPORTED_MODULE_3__["PrivacypolicyPage"]
    }];

    var PrivacypolicyPageRoutingModule = function PrivacypolicyPageRoutingModule() {
      _classCallCheck(this, PrivacypolicyPageRoutingModule);
    };

    PrivacypolicyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PrivacypolicyPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/hamburgermenu/privacypolicy/privacypolicy.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/hamburgermenu/privacypolicy/privacypolicy.module.ts ***!
    \***************************************************************************/

  /*! exports provided: PrivacypolicyPageModule */

  /***/
  function srcAppPagesHamburgermenuPrivacypolicyPrivacypolicyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacypolicyPageModule", function () {
      return PrivacypolicyPageModule;
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


    var _privacypolicy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./privacypolicy-routing.module */
    "./src/app/pages/hamburgermenu/privacypolicy/privacypolicy-routing.module.ts");
    /* harmony import */


    var _privacypolicy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./privacypolicy.page */
    "./src/app/pages/hamburgermenu/privacypolicy/privacypolicy.page.ts");

    var PrivacypolicyPageModule = function PrivacypolicyPageModule() {
      _classCallCheck(this, PrivacypolicyPageModule);
    };

    PrivacypolicyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _privacypolicy_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrivacypolicyPageRoutingModule"]],
      declarations: [_privacypolicy_page__WEBPACK_IMPORTED_MODULE_6__["PrivacypolicyPage"]]
    })], PrivacypolicyPageModule);
    /***/
  },

  /***/
  "./src/app/pages/hamburgermenu/privacypolicy/privacypolicy.page.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/hamburgermenu/privacypolicy/privacypolicy.page.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHamburgermenuPrivacypolicyPrivacypolicyPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hhbWJ1cmdlcm1lbnUvcHJpdmFjeXBvbGljeS9wcml2YWN5cG9saWN5LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/hamburgermenu/privacypolicy/privacypolicy.page.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/hamburgermenu/privacypolicy/privacypolicy.page.ts ***!
    \*************************************************************************/

  /*! exports provided: PrivacypolicyPage */

  /***/
  function srcAppPagesHamburgermenuPrivacypolicyPrivacypolicyPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacypolicyPage", function () {
      return PrivacypolicyPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PrivacypolicyPage = /*#__PURE__*/function () {
      function PrivacypolicyPage() {
        _classCallCheck(this, PrivacypolicyPage);
      }

      _createClass(PrivacypolicyPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PrivacypolicyPage;
    }();

    PrivacypolicyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-privacypolicy',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./privacypolicy.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hamburgermenu/privacypolicy/privacypolicy.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./privacypolicy.page.scss */
      "./src/app/pages/hamburgermenu/privacypolicy/privacypolicy.page.scss"))["default"]]
    })], PrivacypolicyPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-hamburgermenu-privacypolicy-privacypolicy-module-es5.js.map