function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-addmembers-invitationsend-invitationsend-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/addmembers/invitationsend/invitationsend.page.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/addmembers/invitationsend/invitationsend.page.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAddmembersInvitationsendInvitationsendPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <ion-grid class=\"closebutton\">\n    <ion-icon src=\"../assets/MariposaIcons/close.svg\"></ion-icon>\n  </ion-grid>\n  <ion-grid style=\"padding-top:113px ;\">\n    <ion-img src=\"../assets/MariposaIcons/Invite/mail.svg\"></ion-img>\n\n    <div style=\"text-align: center;\">\n      <ion-text color=\"primary\"><h5 style=\"font-weight:bold;font-size:16px;line-height: 19px;\">Invitation Send</h5></ion-text>\n    </div>\n\n    <div>\n      <ion-text><h6 style=\"text-align:center;font-size:16px;font-weight: 300;margin-top:0px ;line-height: 19px;\">invite has send to <br>\"{{email}}\"</h6></ion-text>\n    </div>\n\n\n    \n\n\n  </ion-grid>\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/pages/addmembers/invitationsend/invitationsend-routing.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/addmembers/invitationsend/invitationsend-routing.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: InvitationsendPageRoutingModule */

  /***/
  function srcAppPagesAddmembersInvitationsendInvitationsendRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InvitationsendPageRoutingModule", function () {
      return InvitationsendPageRoutingModule;
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


    var _invitationsend_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./invitationsend.page */
    "./src/app/pages/addmembers/invitationsend/invitationsend.page.ts");

    var routes = [{
      path: '',
      component: _invitationsend_page__WEBPACK_IMPORTED_MODULE_3__["InvitationsendPage"]
    }];

    var InvitationsendPageRoutingModule = function InvitationsendPageRoutingModule() {
      _classCallCheck(this, InvitationsendPageRoutingModule);
    };

    InvitationsendPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], InvitationsendPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/addmembers/invitationsend/invitationsend.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/addmembers/invitationsend/invitationsend.module.ts ***!
    \**************************************************************************/

  /*! exports provided: InvitationsendPageModule */

  /***/
  function srcAppPagesAddmembersInvitationsendInvitationsendModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InvitationsendPageModule", function () {
      return InvitationsendPageModule;
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


    var _invitationsend_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./invitationsend-routing.module */
    "./src/app/pages/addmembers/invitationsend/invitationsend-routing.module.ts");
    /* harmony import */


    var _invitationsend_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./invitationsend.page */
    "./src/app/pages/addmembers/invitationsend/invitationsend.page.ts");

    var InvitationsendPageModule = function InvitationsendPageModule() {
      _classCallCheck(this, InvitationsendPageModule);
    };

    InvitationsendPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _invitationsend_routing_module__WEBPACK_IMPORTED_MODULE_5__["InvitationsendPageRoutingModule"]],
      declarations: [_invitationsend_page__WEBPACK_IMPORTED_MODULE_6__["InvitationsendPage"]]
    })], InvitationsendPageModule);
    /***/
  },

  /***/
  "./src/app/pages/addmembers/invitationsend/invitationsend.page.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/addmembers/invitationsend/invitationsend.page.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAddmembersInvitationsendInvitationsendPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-img {\n  align-self: center;\n  max-width: 67%;\n  height: auto;\n  margin-left: 17%;\n}\n\nion-icon {\n  zoom: 1;\n  width: 24px;\n  height: 24px;\n}\n\n.closebutton {\n  padding-top: 40px;\n  padding-right: 24px;\n  text-align: end;\n}\n\n.btnwhite1 {\n  --color:#4137FF;\n  --background:#ffffff;\n  --border-radius: 8px;\n  --border-color:#4137FF;\n  border-radius: 8px;\n  border-style: solid;\n  border-width: 1px;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 17px;\n  font-weight: 600;\n  width: 209px;\n  height: 44px;\n  --box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvYWRkbWVtYmVycy9pbnZpdGF0aW9uc2VuZC9pbnZpdGF0aW9uc2VuZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FkZG1lbWJlcnMvaW52aXRhdGlvbnNlbmQvaW52aXRhdGlvbnNlbmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FES0E7RUFDSSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNGSjs7QURLQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDRko7O0FES0E7RUFFSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZG1lbWJlcnMvaW52aXRhdGlvbnNlbmQvaW52aXRhdGlvbnNlbmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWltZ3tcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiA2NyU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OjE3JTtcbiAgIFxuICAgICBcblxufVxuXG5pb24taWNvbntcbiAgICB6b29tIDogMTtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG59XG5cbi5jbG9zZWJ1dHRvbntcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OjI0cHg7XG4gICAgdGV4dC1hbGlnbjplbmQgO1xufVxuXG4uYnRud2hpdGUxe1xuXG4gICAgLS1jb2xvcjojNDEzN0ZGO1xuICAgIC0tYmFja2dyb3VuZDojZmZmZmZmO1xuICAgIC0tYm9yZGVyLXJhZGl1czogOHB4OyBcbiAgICAtLWJvcmRlci1jb2xvcjojNDEzN0ZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB3aWR0aDogMjA5cHg7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICBcbiAgICBcbiAgICBcbiAgIH0gICAgIiwiaW9uLWltZyB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiA2NyU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDE3JTtcbn1cblxuaW9uLWljb24ge1xuICB6b29tOiAxO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4uY2xvc2VidXR0b24ge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuXG4uYnRud2hpdGUxIHtcbiAgLS1jb2xvcjojNDEzN0ZGO1xuICAtLWJhY2tncm91bmQ6I2ZmZmZmZjtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIC0tYm9yZGVyLWNvbG9yOiM0MTM3RkY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgd2lkdGg6IDIwOXB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/addmembers/invitationsend/invitationsend.page.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/addmembers/invitationsend/invitationsend.page.ts ***!
    \************************************************************************/

  /*! exports provided: InvitationsendPage */

  /***/
  function srcAppPagesAddmembersInvitationsendInvitationsendPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InvitationsendPage", function () {
      return InvitationsendPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InvitationsendPage = /*#__PURE__*/function () {
      function InvitationsendPage() {
        _classCallCheck(this, InvitationsendPage);

        this.email = "mary.caregiver@gmail.com";
      }

      _createClass(InvitationsendPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InvitationsendPage;
    }();

    InvitationsendPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-invitationsend',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./invitationsend.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/addmembers/invitationsend/invitationsend.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./invitationsend.page.scss */
      "./src/app/pages/addmembers/invitationsend/invitationsend.page.scss"))["default"]]
    })], InvitationsendPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-addmembers-invitationsend-invitationsend-module-es5.js.map