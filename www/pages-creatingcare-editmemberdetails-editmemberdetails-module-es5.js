function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-creatingcare-editmemberdetails-editmemberdetails-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/creatingcare/editmemberdetails/editmemberdetails.page.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/creatingcare/editmemberdetails/editmemberdetails.page.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCreatingcareEditmemberdetailsEditmemberdetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  <ion-toolbar class=\"headtoolbar\">\n    <ion-grid>\n      <ion-row style=\"align-items: center; margin-top: 32px;\">\n        <ion-col size=\"10\">\n          <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\"\n            >Edit Member</ion-text\n          >\n        </ion-col>\n        <ion-col>\n          <ion-icon\n            style=\"zoom: 1.2; color: black; float: right;\"\n            name=\"close-outline\"\n          ></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<ion-grid>\n  <form>\n  \n    <ion-row>\n      <ion-col>\n        <div style=\"width: 52px;\"><ion-img src=\"../assets/manlogo.png\"></ion-img></div>\n        <ion-text><h6 style=\"margin-top: 5px;\">Senior</h6></ion-text>\n      </ion-col>\n    </ion-row>\n    \n    <ion-row style=\"align-items: center;\">\n      <ion-col  size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox color=\"mwhite\" mode=\"md\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text style=\"font-size:16px;margin-left: 6px;\" color=\"mdblack\">Ability to Enter Vitals</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <ion-row style=\"align-items: center;\">\n      <ion-col  size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox color=\"mwhite\" mode=\"md\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text style=\"font-size:16px;margin-left: 6px;\" color=\"mdblack\">Ability Schedule an Appointment</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <div class=\"nametag\" style=\"margin-top: 17px;\">\n      <ion-text position=\"floating\" id=\"tag\">Name of Senior</ion-text>\n    </div>\n    <div>\n      <ion-input mode=\"md\" class=\"input\"  placeholder=\"Enter full Name\"></ion-input>\n      <ion-item [hidden]=\"true\" lines=\"none\" style=\"margin-top:-10px;margin-left:-10px;\">\n        <ion-icon style=\"margin-right: 5px;\" name=\"alert-circle\"></ion-icon>\n        <ion-text class=“warning”>Incorrect Password.</ion-text>\n      </ion-item>\n    </div>\n\n    <div class=\"nametag\">\n      <ion-text position=\"floating\" id=\"tag\">Relation</ion-text>\n    </div>\n    <div>\n      <ion-select mode=\"md\" class=\"input\" placeholder=\"Select Relation\">\n        <ion-select-option value=\"brown\">Brown</ion-select-option>\n        <ion-select-option value=\"blonde\">Blonde</ion-select-option>\n        <ion-select-option value=\"black\">Black</ion-select-option>\n        <ion-select-option value=\"red\">Red</ion-select-option>\n      </ion-select>\n      <ion-item [hidden]=\"true\" lines=\"none\" style=\"margin-top:-10px;margin-left:-10px;\">\n        <ion-icon style=\"margin-right: 5px;\" name=\"alert-circle\"></ion-icon>\n        <ion-text class=“warning”>Incorrect Password.</ion-text>\n      </ion-item>\n    </div>\n\n    <div class=\"nametag\">\n      <ion-text position=\"floating\" id=\"tag\">Email id</ion-text>\n    </div>\n    <div>\n      <ion-input mode=\"md\" class=\"input\" type=\"email\" placeholder=\"Enter email\"></ion-input>\n      <ion-item [hidden]=\"true\" lines=\"none\" style=\"margin-top:-10px;margin-left:-10px;\">\n        <ion-icon style=\"margin-right: 5px;\" name=\"alert-circle\"></ion-icon>\n        <ion-text class=“warning”>Incorrect Password.</ion-text>\n      </ion-item>\n    </div>\n\n    <div class=\"nametag\">\n      <ion-text position=\"floating\" id=\"tag\">Mobile Number</ion-text>\n    </div>\n    <div>\n      <ion-input mode=\"md\" class=\"input\" type=\"number\" placeholder=\"Enter mobile number\"></ion-input>\n      <ion-item [hidden]=\"true\" lines=\"none\" style=\"margin-top:-10px;margin-left:-10px;\">\n        <ion-icon style=\"margin-right: 5px;\" name=\"alert-circle\"></ion-icon>\n        <ion-text class=“warning”>Incorrect Password.</ion-text>\n      </ion-item>\n    </div>\n\n    <div id=\"button\">\n      <ion-button [disabled]=\"false\" [routerLink]=\"'/carecircle/'\" class=\"btnblue\" type=\"submit\"  id=\"signup\">SAVE</ion-button>\n    </div>\n\n\n  </form>\n</ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/creatingcare/editmemberdetails/editmemberdetails-routing.module.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/pages/creatingcare/editmemberdetails/editmemberdetails-routing.module.ts ***!
    \******************************************************************************************/

  /*! exports provided: EditmemberdetailsPageRoutingModule */

  /***/
  function srcAppPagesCreatingcareEditmemberdetailsEditmemberdetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditmemberdetailsPageRoutingModule", function () {
      return EditmemberdetailsPageRoutingModule;
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


    var _editmemberdetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./editmemberdetails.page */
    "./src/app/pages/creatingcare/editmemberdetails/editmemberdetails.page.ts");

    var routes = [{
      path: '',
      component: _editmemberdetails_page__WEBPACK_IMPORTED_MODULE_3__["EditmemberdetailsPage"]
    }];

    var EditmemberdetailsPageRoutingModule = function EditmemberdetailsPageRoutingModule() {
      _classCallCheck(this, EditmemberdetailsPageRoutingModule);
    };

    EditmemberdetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditmemberdetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/creatingcare/editmemberdetails/editmemberdetails.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/creatingcare/editmemberdetails/editmemberdetails.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: EditmemberdetailsPageModule */

  /***/
  function srcAppPagesCreatingcareEditmemberdetailsEditmemberdetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditmemberdetailsPageModule", function () {
      return EditmemberdetailsPageModule;
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


    var _editmemberdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./editmemberdetails-routing.module */
    "./src/app/pages/creatingcare/editmemberdetails/editmemberdetails-routing.module.ts");
    /* harmony import */


    var _editmemberdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./editmemberdetails.page */
    "./src/app/pages/creatingcare/editmemberdetails/editmemberdetails.page.ts");

    var EditmemberdetailsPageModule = function EditmemberdetailsPageModule() {
      _classCallCheck(this, EditmemberdetailsPageModule);
    };

    EditmemberdetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _editmemberdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditmemberdetailsPageRoutingModule"]],
      declarations: [_editmemberdetails_page__WEBPACK_IMPORTED_MODULE_6__["EditmemberdetailsPage"]]
    })], EditmemberdetailsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/creatingcare/editmemberdetails/editmemberdetails.page.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/creatingcare/editmemberdetails/editmemberdetails.page.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCreatingcareEditmemberdetailsEditmemberdetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-img {\n  height: 52px;\n}\n\nion-checkbox {\n  background: #ffffff;\n  border-width: 2px !important;\n  border-style: solid !important;\n  border-radius: 4px;\n  border-color: black !important;\n  --height: 24px;\n  --width: 24px;\n  --checkmark-color: #000000;\n  --background-checked: #ffffff;\n  --border-color: #ffffff;\n  --border-color-checked: #ffffff;\n}\n\nion-select {\n  padding-bottom: 8px;\n  padding-top: 8px;\n  padding-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvY3JlYXRpbmdjYXJlL2VkaXRtZW1iZXJkZXRhaWxzL2VkaXRtZW1iZXJkZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3JlYXRpbmdjYXJlL2VkaXRtZW1iZXJkZXRhaWxzL2VkaXRtZW1iZXJkZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUVJLFlBQUE7QUNKSjs7QURPQTtFQUNJLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0FDSko7O0FEUUU7RUFFRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWF0aW5nY2FyZS9lZGl0bWVtYmVyZGV0YWlscy9lZGl0bWVtYmVyZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5cbmlvbi1pbWd7XG5cbiAgICBoZWlnaHQ6IDUycHg7O1xufVxuXG5pb24tY2hlY2tib3gge1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXdpZHRoOiAycHggIWltcG9ydGFudDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICAtLWhlaWdodDogMjRweDtcbiAgICAtLXdpZHRoOiAyNHB4O1xuICAgIC0tY2hlY2ttYXJrLWNvbG9yOiAjMDAwMDAwO1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjZmZmZmZmO1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xuICAgIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICNmZmZmZmY7XG4gICAgXG4gIH1cblxuICBpb24tc2VsZWN0e1xuXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICB9IiwiaW9uLWltZyB7XG4gIGhlaWdodDogNTJweDtcbn1cblxuaW9uLWNoZWNrYm94IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXdpZHRoOiAycHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgLS1oZWlnaHQ6IDI0cHg7XG4gIC0td2lkdGg6IDI0cHg7XG4gIC0tY2hlY2ttYXJrLWNvbG9yOiAjMDAwMDAwO1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2ZmZmZmZjtcbiAgLS1ib3JkZXItY29sb3I6ICNmZmZmZmY7XG4gIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICNmZmZmZmY7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/creatingcare/editmemberdetails/editmemberdetails.page.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/creatingcare/editmemberdetails/editmemberdetails.page.ts ***!
    \********************************************************************************/

  /*! exports provided: EditmemberdetailsPage */

  /***/
  function srcAppPagesCreatingcareEditmemberdetailsEditmemberdetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditmemberdetailsPage", function () {
      return EditmemberdetailsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EditmemberdetailsPage = /*#__PURE__*/function () {
      function EditmemberdetailsPage() {
        _classCallCheck(this, EditmemberdetailsPage);
      }

      _createClass(EditmemberdetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EditmemberdetailsPage;
    }();

    EditmemberdetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-editmemberdetails',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./editmemberdetails.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/creatingcare/editmemberdetails/editmemberdetails.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./editmemberdetails.page.scss */
      "./src/app/pages/creatingcare/editmemberdetails/editmemberdetails.page.scss"))["default"]]
    })], EditmemberdetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-creatingcare-editmemberdetails-editmemberdetails-module-es5.js.map