function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-configcare-deletebeauty-deletebeauty-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configcare/deletebeauty/deletebeauty.page.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configcare/deletebeauty/deletebeauty.page.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesConfigcareDeletebeautyDeletebeautyPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"title-text\">\n      Medication\n    </ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<ion-header mode=\"md\">\n  <ion-toolbar class=\"headtoolbar\">\n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-toolbar>\n            <ion-buttons slot=\"start\">\n              <ion-button [routerLink]=\"'/../'\" routerDirection=\"backward\">\n              <ion-icon slot=\"icon-only\" src=\"assets/back.svg\"></ion-icon>\n            </ion-button>\n            </ion-buttons>\n          <!-- <ion-buttons slot=\"start\">\n            <ion-back-button color=\"mdblack\" icon=\"chevron-back-outline\" defaultHref=\"admin-sign-in\"></ion-back-button>\n          </ion-buttons> -->\n        </ion-toolbar>  \n        </ion-col>\n        <ion-col size=\"8\">\n          <div>\n            <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\">Beauty & Grooming</ion-text> \n          </div> \n        </ion-col>       \n      </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<div style=\"padding: 0px;\" *ngFor=\"let item of ccbeautyinfo\">\n  <ion-row style=\"align-items:center ;\">\n    <ion-col size=\"1\">\n      <ion-checkbox mode=\"md\" class=\"deletecheckbox\"></ion-checkbox>\n    </ion-col>\n    <ion-col>\n\n      <ion-card style=\"left: 8px;\">\n        <ion-grid class=\"ion-no-padding\">\n          <ion-row>\n            <ion-col size=\"7\">\n              <p class=\"text1\">{{item.type}}</p>  \n            </ion-col>\n            <ion-col size=\"5\" style=\"text-align: end;\">\n              <p class=\"text1\">{{item.place}}</p>     \n            </ion-col>\n          </ion-row>\n          <ion-row style=\"margin-top:13px ;\">\n            <ion-col size=\"7\">         \n              <p class=\"text2\">{{item.type}}</p>\n            </ion-col>\n            <ion-col size=\"5\" style=\"text-align: end;\">   \n              <p class=\"text2\">Time: <span>{{item.time}}</span></p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n      \n    </ion-col>\n  </ion-row>\n  </div>\n\n  \n</ion-content>\n\n<ion-footer mode=\"md\">\n  <ion-toolbar>\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-button\n            color=\"primary\"\n            expand=\"block\"\n            fill=\"outline\"\n            class=\"submitbtn lbtn\"\n            shape=\"round\"\n          >\n            CANCEL\n          </ion-button></ion-col\n        >\n        <ion-col size=\"6\">\n          <ion-button\n            color=\"primary\"\n            expand=\"block\"\n            fill=\"solid\"\n            class=\"submitbtn rbtn\"\n            shape=\"round\"\n          >\n            DELETE ITEMS\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/pages/configcare/deletebeauty/deletebeauty-routing.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/configcare/deletebeauty/deletebeauty-routing.module.ts ***!
    \******************************************************************************/

  /*! exports provided: DeletebeautyPageRoutingModule */

  /***/
  function srcAppPagesConfigcareDeletebeautyDeletebeautyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeletebeautyPageRoutingModule", function () {
      return DeletebeautyPageRoutingModule;
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


    var _deletebeauty_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./deletebeauty.page */
    "./src/app/pages/configcare/deletebeauty/deletebeauty.page.ts");

    var routes = [{
      path: '',
      component: _deletebeauty_page__WEBPACK_IMPORTED_MODULE_3__["DeletebeautyPage"]
    }];

    var DeletebeautyPageRoutingModule = function DeletebeautyPageRoutingModule() {
      _classCallCheck(this, DeletebeautyPageRoutingModule);
    };

    DeletebeautyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DeletebeautyPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/configcare/deletebeauty/deletebeauty.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/configcare/deletebeauty/deletebeauty.module.ts ***!
    \**********************************************************************/

  /*! exports provided: DeletebeautyPageModule */

  /***/
  function srcAppPagesConfigcareDeletebeautyDeletebeautyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeletebeautyPageModule", function () {
      return DeletebeautyPageModule;
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


    var _deletebeauty_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./deletebeauty-routing.module */
    "./src/app/pages/configcare/deletebeauty/deletebeauty-routing.module.ts");
    /* harmony import */


    var _deletebeauty_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./deletebeauty.page */
    "./src/app/pages/configcare/deletebeauty/deletebeauty.page.ts");

    var DeletebeautyPageModule = function DeletebeautyPageModule() {
      _classCallCheck(this, DeletebeautyPageModule);
    };

    DeletebeautyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _deletebeauty_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeletebeautyPageRoutingModule"]],
      declarations: [_deletebeauty_page__WEBPACK_IMPORTED_MODULE_6__["DeletebeautyPage"]]
    })], DeletebeautyPageModule);
    /***/
  },

  /***/
  "./src/app/pages/configcare/deletebeauty/deletebeauty.page.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/configcare/deletebeauty/deletebeauty.page.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesConfigcareDeletebeautyDeletebeautyPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --padding-bottom: 24px;\n  --padding-end: 24px;\n  --padding-start: 24px;\n  --padding-top: 24px;\n}\n\n.listtitle {\n  margin: 0;\n  padding-bottom: 12px;\n}\n\nion-card {\n  background: #ffffff;\n  /* Medium Grey */\n  border: 0.4px solid #b8b8b8;\n  box-sizing: border-box;\n  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.08), 0px 0px 1px rgba(0, 0, 0, 0.25);\n  border-radius: 8px;\n  padding: 16px;\n  margin: 0;\n}\n\n.text1 {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  /* identical to box height */\n  /* Direct Black */\n  color: #1a1a1a;\n  margin: 0;\n}\n\n.text2 {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  /* identical to box height */\n  /* Dark Grey */\n  color: #7e7e7e;\n  margin: 0;\n}\n\n.text2 span {\n  color: #1a1a1a !important;\n}\n\n.submitbtn {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 16px;\n  text-align: center;\n  color: #ffffff;\n  --border-radius: 8px;\n  width: 82.5%;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  height: 44px;\n}\n\n.lbtn {\n  margin-left: 24px;\n  --border-width: 1px;\n}\n\n.rbtn {\n  margin-right: 24px;\n  float: right;\n}\n\n.deletecheckbox {\n  background: #ffffff;\n  border-width: 1px !important;\n  border-style: solid !important;\n  border-radius: 4px;\n  border-color: #4137ff !important;\n  --height: 24px;\n  --width: 24px;\n  --checkmark-color: #4137ff;\n  --background-checked: #ffffff;\n  --border-color: #ffffff;\n  --border-color-checked: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvY29uZmlnY2FyZS9kZWxldGViZWF1dHkvZGVsZXRlYmVhdXR5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29uZmlnY2FyZS9kZWxldGViZWF1dHkvZGVsZXRlYmVhdXR5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxTQUFBO0VBQ0Esb0JBQUE7QUNFRjs7QURBQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFFQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FDRUY7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFFQSxpQkFBQTtFQUVBLGNBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFFQSxjQUFBO0VBRUEsY0FBQTtFQUNBLFNBQUE7QUNBRjs7QURDRTtFQUNFLHlCQUFBO0FDQ0o7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FDRUY7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUNHRjs7QUREQTtFQUVBLG1CQUFBO0VBQ0UsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb25maWdjYXJlL2RlbGV0ZWJlYXV0eS9kZWxldGViZWF1dHkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAtLXBhZGRpbmctZW5kOiAyNHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDI0cHg7XG4gIC0tcGFkZGluZy10b3A6IDI0cHg7XG59XG4ubGlzdHRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbn1cbmlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgLyogTWVkaXVtIEdyZXkgKi9cblxuICBib3JkZXI6IDAuNHB4IHNvbGlkICNiOGI4Yjg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCksIDBweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luOiAwO1xufVxuLnRleHQxIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuXG4gIC8qIERpcmVjdCBCbGFjayAqL1xuXG4gIGNvbG9yOiAjMWExYTFhO1xuICBtYXJnaW46IDA7XG59XG4udGV4dDIge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG5cbiAgLyogRGFyayBHcmV5ICovXG5cbiAgY29sb3I6ICM3ZTdlN2U7XG4gIG1hcmdpbjogMDtcbiAgc3BhbiB7XG4gICAgY29sb3I6ICMxYTFhMWEgIWltcG9ydGFudDtcbiAgfVxufVxuLnN1Ym1pdGJ0biB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICB3aWR0aDogODIuNSU7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGhlaWdodDogNDRweDtcbn1cbi5sYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG59XG4ucmJ0biB7XG4gIG1hcmdpbi1yaWdodDogMjRweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmRlbGV0ZWNoZWNrYm94e1xuXG5iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItd2lkdGg6IDFweCAhaW1wb3J0YW50O1xuICBib3JkZXItc3R5bGU6IHNvbGlkICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLWNvbG9yOiAjNDEzN2ZmICFpbXBvcnRhbnQ7XG4gIC0taGVpZ2h0OiAyNHB4O1xuICAtLXdpZHRoOiAyNHB4O1xuICAtLWNoZWNrbWFyay1jb2xvcjogIzQxMzdmZjtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNmZmZmZmY7XG4gIC0tYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjZmZmZmZmO1xufSAgIiwiaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAtLXBhZGRpbmctZW5kOiAyNHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDI0cHg7XG4gIC0tcGFkZGluZy10b3A6IDI0cHg7XG59XG5cbi5saXN0dGl0bGUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xufVxuXG5pb24tY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIC8qIE1lZGl1bSBHcmV5ICovXG4gIGJvcmRlcjogMC40cHggc29saWQgI2I4YjhiODtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDFweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA4KSwgMHB4IDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBtYXJnaW46IDA7XG59XG5cbi50ZXh0MSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgLyogRGlyZWN0IEJsYWNrICovXG4gIGNvbG9yOiAjMWExYTFhO1xuICBtYXJnaW46IDA7XG59XG5cbi50ZXh0MiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgLyogRGFyayBHcmV5ICovXG4gIGNvbG9yOiAjN2U3ZTdlO1xuICBtYXJnaW46IDA7XG59XG4udGV4dDIgc3BhbiB7XG4gIGNvbG9yOiAjMWExYTFhICFpbXBvcnRhbnQ7XG59XG5cbi5zdWJtaXRidG4ge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDgyLjUlO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBoZWlnaHQ6IDQ0cHg7XG59XG5cbi5sYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG59XG5cbi5yYnRuIHtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5kZWxldGVjaGVja2JveCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci13aWR0aDogMXB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1zdHlsZTogc29saWQgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXItY29sb3I6ICM0MTM3ZmYgIWltcG9ydGFudDtcbiAgLS1oZWlnaHQ6IDI0cHg7XG4gIC0td2lkdGg6IDI0cHg7XG4gIC0tY2hlY2ttYXJrLWNvbG9yOiAjNDEzN2ZmO1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2ZmZmZmZjtcbiAgLS1ib3JkZXItY29sb3I6ICNmZmZmZmY7XG4gIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICNmZmZmZmY7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/configcare/deletebeauty/deletebeauty.page.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/configcare/deletebeauty/deletebeauty.page.ts ***!
    \********************************************************************/

  /*! exports provided: DeletebeautyPage */

  /***/
  function srcAppPagesConfigcareDeletebeautyDeletebeautyPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeletebeautyPage", function () {
      return DeletebeautyPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DeletebeautyPage = /*#__PURE__*/function () {
      function DeletebeautyPage() {
        _classCallCheck(this, DeletebeautyPage);

        this.ccbeautyinfo = [{
          type: "Hair Cut",
          place: "Web",
          style: "Shorten",
          time: "7.30 AM"
        }, {
          type: "Shaving Mustache",
          place: "Web",
          style: "Clean Shave",
          time: "7.30 AM"
        }];
      }

      _createClass(DeletebeautyPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DeletebeautyPage;
    }();

    DeletebeautyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-deletebeauty',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./deletebeauty.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configcare/deletebeauty/deletebeauty.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./deletebeauty.page.scss */
      "./src/app/pages/configcare/deletebeauty/deletebeauty.page.scss"))["default"]]
    })], DeletebeautyPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-configcare-deletebeauty-deletebeauty-module-es5.js.map