function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-configcare-configcarecompleted-configcarecompleted-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configcare/configcarecompleted/configcarecompleted.page.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configcare/configcarecompleted/configcarecompleted.page.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesConfigcareConfigcarecompletedConfigcarecompletedPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <ion-grid style=\"padding-top:113px ;\">\n    <ion-img src=\"../assets/MariposaIcons/Assessment_Complete.svg\"></ion-img>\n\n    <div style=\"text-align: center;\">\n      <ion-text color=\"primary\"><h5 style=\"font-weight:bold;font-size:16px;line-height: 19px;\">Congratulations</h5></ion-text>\n    </div>\n\n    <div>\n      <ion-text><h6 style=\"text-align:center;font-size:16px;font-weight: 300;margin-top:0px ;line-height: 19px;\">Your have successfully configured care</h6></ion-text>\n    </div>\n\n    <div style=\"text-align: center;margin-top: 14px;\">\n      <ion-button class=\"btnwhite1\">EDIT CARE</ion-button>\n    </div>\n    <div style=\"text-align: center;margin-top: 14px;\">\n      <ion-button class=\"btnwhite1\">ADD MEMBERS</ion-button>\n    </div>\n\n    <div id=\"button\">\n      <ion-button [disabled]=\"false\" class=\"btnblue\" id=\"signup\">GO TO BOOK</ion-button>\n    </div>\n\n\n  </ion-grid>\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/pages/configcare/configcarecompleted/configcarecompleted-routing.module.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/pages/configcare/configcarecompleted/configcarecompleted-routing.module.ts ***!
    \********************************************************************************************/

  /*! exports provided: ConfigcarecompletedPageRoutingModule */

  /***/
  function srcAppPagesConfigcareConfigcarecompletedConfigcarecompletedRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigcarecompletedPageRoutingModule", function () {
      return ConfigcarecompletedPageRoutingModule;
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


    var _configcarecompleted_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./configcarecompleted.page */
    "./src/app/pages/configcare/configcarecompleted/configcarecompleted.page.ts");

    var routes = [{
      path: '',
      component: _configcarecompleted_page__WEBPACK_IMPORTED_MODULE_3__["ConfigcarecompletedPage"]
    }];

    var ConfigcarecompletedPageRoutingModule = function ConfigcarecompletedPageRoutingModule() {
      _classCallCheck(this, ConfigcarecompletedPageRoutingModule);
    };

    ConfigcarecompletedPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ConfigcarecompletedPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/configcare/configcarecompleted/configcarecompleted.module.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/pages/configcare/configcarecompleted/configcarecompleted.module.ts ***!
    \************************************************************************************/

  /*! exports provided: ConfigcarecompletedPageModule */

  /***/
  function srcAppPagesConfigcareConfigcarecompletedConfigcarecompletedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigcarecompletedPageModule", function () {
      return ConfigcarecompletedPageModule;
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


    var _configcarecompleted_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./configcarecompleted-routing.module */
    "./src/app/pages/configcare/configcarecompleted/configcarecompleted-routing.module.ts");
    /* harmony import */


    var _configcarecompleted_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./configcarecompleted.page */
    "./src/app/pages/configcare/configcarecompleted/configcarecompleted.page.ts");

    var ConfigcarecompletedPageModule = function ConfigcarecompletedPageModule() {
      _classCallCheck(this, ConfigcarecompletedPageModule);
    };

    ConfigcarecompletedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _configcarecompleted_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfigcarecompletedPageRoutingModule"]],
      declarations: [_configcarecompleted_page__WEBPACK_IMPORTED_MODULE_6__["ConfigcarecompletedPage"]]
    })], ConfigcarecompletedPageModule);
    /***/
  },

  /***/
  "./src/app/pages/configcare/configcarecompleted/configcarecompleted.page.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/pages/configcare/configcarecompleted/configcarecompleted.page.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesConfigcareConfigcarecompletedConfigcarecompletedPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-img {\n  align-self: center;\n  max-width: 67%;\n  height: auto;\n  margin-left: 20%;\n}\n\n.btnwhite1 {\n  --color:#4137FF;\n  --background:#ffffff;\n  --border-radius: 8px;\n  --border-color:#4137FF;\n  border-radius: 8px;\n  border-style: solid;\n  border-width: 1px;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 17px;\n  font-weight: 600;\n  width: 209px;\n  height: 44px;\n  --box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvY29uZmlnY2FyZS9jb25maWdjYXJlY29tcGxldGVkL2NvbmZpZ2NhcmVjb21wbGV0ZWQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb25maWdjYXJlL2NvbmZpZ2NhcmVjb21wbGV0ZWQvY29uZmlnY2FyZWNvbXBsZXRlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURLQTtFQUVJLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29uZmlnY2FyZS9jb25maWdjYXJlY29tcGxldGVkL2NvbmZpZ2NhcmVjb21wbGV0ZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWltZ3tcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiA2NyU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OjIwJTtcbiAgIFxuICAgICBcblxufVxuXG4uYnRud2hpdGUxe1xuXG4gICAgLS1jb2xvcjojNDEzN0ZGO1xuICAgIC0tYmFja2dyb3VuZDojZmZmZmZmO1xuICAgIC0tYm9yZGVyLXJhZGl1czogOHB4OyBcbiAgICAtLWJvcmRlci1jb2xvcjojNDEzN0ZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB3aWR0aDogMjA5cHg7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICBcbiAgICBcbiAgICBcbiAgIH0iLCJpb24taW1nIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXgtd2lkdGg6IDY3JTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMjAlO1xufVxuXG4uYnRud2hpdGUxIHtcbiAgLS1jb2xvcjojNDEzN0ZGO1xuICAtLWJhY2tncm91bmQ6I2ZmZmZmZjtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIC0tYm9yZGVyLWNvbG9yOiM0MTM3RkY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgd2lkdGg6IDIwOXB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/configcare/configcarecompleted/configcarecompleted.page.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/configcare/configcarecompleted/configcarecompleted.page.ts ***!
    \**********************************************************************************/

  /*! exports provided: ConfigcarecompletedPage */

  /***/
  function srcAppPagesConfigcareConfigcarecompletedConfigcarecompletedPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigcarecompletedPage", function () {
      return ConfigcarecompletedPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ConfigcarecompletedPage = /*#__PURE__*/function () {
      function ConfigcarecompletedPage() {
        _classCallCheck(this, ConfigcarecompletedPage);
      }

      _createClass(ConfigcarecompletedPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConfigcarecompletedPage;
    }();

    ConfigcarecompletedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-configcarecompleted',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./configcarecompleted.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configcare/configcarecompleted/configcarecompleted.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./configcarecompleted.page.scss */
      "./src/app/pages/configcare/configcarecompleted/configcarecompleted.page.scss"))["default"]]
    })], ConfigcarecompletedPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-configcare-configcarecompleted-configcarecompleted-module-es5.js.map