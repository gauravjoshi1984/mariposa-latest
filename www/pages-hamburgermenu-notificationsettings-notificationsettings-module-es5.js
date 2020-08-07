function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-hamburgermenu-notificationsettings-notificationsettings-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hamburgermenu/notificationsettings/notificationsettings.page.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hamburgermenu/notificationsettings/notificationsettings.page.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHamburgermenuNotificationsettingsNotificationsettingsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  <ion-toolbar class=\"headtoolbar\">\n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-toolbar>\n            <ion-buttons slot=\"start\">\n              <m-backbutton></m-backbutton>\n            </ion-buttons>\n        </ion-toolbar> \n        </ion-col>\n        <ion-col size=\"8\">\n          <div>\n            <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\">Notifications Settings</ion-text>\n          </div> \n        </ion-col> \n      </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-grid class=\"content\">\n\n      <div *ngFor=\"let item of toggleList\">\n        <app-pushtoggle\n        [name] = \"item.label\"\n        ></app-pushtoggle>\n        <hr class=\"solid\">\n      </div>\n     \n    \n    \n      \n    \n \n\n  </ion-grid>\n  <ion-grid>\n    <div id=\"button\">\n        <ion-button type=\"submit\" class=\"btnblue\" expand=\"block\">SAVE </ion-button>\n    </div>\n</ion-grid>\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/hamburgermenu/notificationsettings/notificationsettings-routing.module.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/pages/hamburgermenu/notificationsettings/notificationsettings-routing.module.ts ***!
    \*************************************************************************************************/

  /*! exports provided: NotificationsettingsPageRoutingModule */

  /***/
  function srcAppPagesHamburgermenuNotificationsettingsNotificationsettingsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsettingsPageRoutingModule", function () {
      return NotificationsettingsPageRoutingModule;
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


    var _notificationsettings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notificationsettings.page */
    "./src/app/pages/hamburgermenu/notificationsettings/notificationsettings.page.ts");

    var routes = [{
      path: '',
      component: _notificationsettings_page__WEBPACK_IMPORTED_MODULE_3__["NotificationsettingsPage"]
    }];

    var NotificationsettingsPageRoutingModule = function NotificationsettingsPageRoutingModule() {
      _classCallCheck(this, NotificationsettingsPageRoutingModule);
    };

    NotificationsettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NotificationsettingsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/hamburgermenu/notificationsettings/notificationsettings.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/hamburgermenu/notificationsettings/notificationsettings.module.ts ***!
    \*****************************************************************************************/

  /*! exports provided: NotificationsettingsPageModule */

  /***/
  function srcAppPagesHamburgermenuNotificationsettingsNotificationsettingsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsettingsPageModule", function () {
      return NotificationsettingsPageModule;
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


    var _notificationsettings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./notificationsettings-routing.module */
    "./src/app/pages/hamburgermenu/notificationsettings/notificationsettings-routing.module.ts");
    /* harmony import */


    var _notificationsettings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./notificationsettings.page */
    "./src/app/pages/hamburgermenu/notificationsettings/notificationsettings.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/pages/shared/shared.module.ts");

    var NotificationsettingsPageModule = function NotificationsettingsPageModule() {
      _classCallCheck(this, NotificationsettingsPageModule);
    };

    NotificationsettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _notificationsettings_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationsettingsPageRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_notificationsettings_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsettingsPage"]]
    })], NotificationsettingsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/hamburgermenu/notificationsettings/notificationsettings.page.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/hamburgermenu/notificationsettings/notificationsettings.page.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHamburgermenuNotificationsettingsNotificationsettingsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content {\n  padding-top: 32px;\n  padding-left: 24px;\n  padding-right: 24px;\n}\n\n.solid {\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvaGFtYnVyZ2VybWVudS9ub3RpZmljYXRpb25zZXR0aW5ncy9ub3RpZmljYXRpb25zZXR0aW5ncy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hhbWJ1cmdlcm1lbnUvbm90aWZpY2F0aW9uc2V0dGluZ3Mvbm90aWZpY2F0aW9uc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9oYW1idXJnZXJtZW51L25vdGlmaWNhdGlvbnNldHRpbmdzL25vdGlmaWNhdGlvbnNldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xuICAgIHBhZGRpbmctdG9wOiAzMnB4O1xuICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xufVxuXG4uc29saWR7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufSIsIi5jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDMycHg7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbiAgcGFkZGluZy1yaWdodDogMjRweDtcbn1cblxuLnNvbGlkIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/hamburgermenu/notificationsettings/notificationsettings.page.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/pages/hamburgermenu/notificationsettings/notificationsettings.page.ts ***!
    \***************************************************************************************/

  /*! exports provided: NotificationsettingsPage */

  /***/
  function srcAppPagesHamburgermenuNotificationsettingsNotificationsettingsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsettingsPage", function () {
      return NotificationsettingsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NotificationsettingsPage = /*#__PURE__*/function () {
      function NotificationsettingsPage() {
        _classCallCheck(this, NotificationsettingsPage);

        this.toggleList = [{
          label: "Push Notification"
        }, {
          label: "Email Notification"
        }, {
          label: "In App Notification"
        }];
      }

      _createClass(NotificationsettingsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotificationsettingsPage;
    }();

    NotificationsettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notificationsettings',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./notificationsettings.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hamburgermenu/notificationsettings/notificationsettings.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./notificationsettings.page.scss */
      "./src/app/pages/hamburgermenu/notificationsettings/notificationsettings.page.scss"))["default"]]
    })], NotificationsettingsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-hamburgermenu-notificationsettings-notificationsettings-module-es5.js.map