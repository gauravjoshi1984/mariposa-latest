function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-creatingcare-renamecarecircle-renamecarecircle-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/creatingcare/renamecarecircle/renamecarecircle.page.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/creatingcare/renamecarecircle/renamecarecircle.page.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCreatingcareRenamecarecircleRenamecarecirclePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<ion-content>\n  <ion-grid>\n\n   \n      <ion-row>\n        <ion-col>\n          <ion-toolbar style=\"height: 40px;\">\n          <ion-buttons slot=\"end\">\n            <ion-button>\n              <ion-icon\n              class=\"closeicon\"\n              name=\"close-outline\"\n            ></ion-icon>\n          </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n        </ion-col>\n      </ion-row>\n   \n\n    <ion-text><h5 style=\"margin-top:130px;\">Rename Care Circle</h5></ion-text>\n\n    <div class=\"nametag\" style=\"line-height: 5px;padding-top:30px;\">\n      <ion-text style=\"line-height: 19px;font-size: 16px;font-weight: 300;\" color=\"mdblack\" position=\"floating\" id=\"tag\">Name of the Care circle</ion-text>\n      <ion-text style=\"line-height: 19px;font-size: 16px;font-weight: 300;\" color=\"mdgrey\"  position=\"floating\"><br>(Senior name is Suggested)</ion-text>\n    </div>\n    \n    <div style=\"padding-top: 10px;\">\n      <ion-input mode=\"md\" class=\"input\"  placeholder=\"Enter Name\"></ion-input>\n      <ion-item [hidden]=\"true\" lines=\"none\" style=\"margin-top:-10px;margin-left:-10px;\">\n        <ion-icon style=\"margin-right: 5px;\" name=\"alert-circle\"></ion-icon>\n        <ion-text class=“warning”>Incorrect Password.</ion-text>\n      </ion-item>\n    </div>\n\n\n    \n\n  </ion-grid>\n\n</ion-content>\n<ion-footer mode=\"md\">\n  <ion-toolbar>\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-button\n            color=\"primary\"\n            expand=\"block\"\n            fill=\"outline\"\n            class=\"submitbtn lbtn\"\n            shape=\"round\"\n          >\n            CANCEL\n          </ion-button></ion-col\n        >\n        <ion-col size=\"6\">\n          <ion-button\n            color=\"primary\"\n            expand=\"block\"\n            fill=\"solid\"\n            class=\"submitbtn rbtn\"\n            shape=\"round\"\n          >\n            SAVE\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n\n";
    /***/
  },

  /***/
  "./src/app/pages/creatingcare/renamecarecircle/renamecarecircle-routing.module.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/pages/creatingcare/renamecarecircle/renamecarecircle-routing.module.ts ***!
    \****************************************************************************************/

  /*! exports provided: RenamecarecirclePageRoutingModule */

  /***/
  function srcAppPagesCreatingcareRenamecarecircleRenamecarecircleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenamecarecirclePageRoutingModule", function () {
      return RenamecarecirclePageRoutingModule;
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


    var _renamecarecircle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./renamecarecircle.page */
    "./src/app/pages/creatingcare/renamecarecircle/renamecarecircle.page.ts");

    var routes = [{
      path: '',
      component: _renamecarecircle_page__WEBPACK_IMPORTED_MODULE_3__["RenamecarecirclePage"]
    }];

    var RenamecarecirclePageRoutingModule = function RenamecarecirclePageRoutingModule() {
      _classCallCheck(this, RenamecarecirclePageRoutingModule);
    };

    RenamecarecirclePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RenamecarecirclePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/creatingcare/renamecarecircle/renamecarecircle.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/creatingcare/renamecarecircle/renamecarecircle.module.ts ***!
    \********************************************************************************/

  /*! exports provided: RenamecarecirclePageModule */

  /***/
  function srcAppPagesCreatingcareRenamecarecircleRenamecarecircleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenamecarecirclePageModule", function () {
      return RenamecarecirclePageModule;
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


    var _renamecarecircle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./renamecarecircle-routing.module */
    "./src/app/pages/creatingcare/renamecarecircle/renamecarecircle-routing.module.ts");
    /* harmony import */


    var _renamecarecircle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./renamecarecircle.page */
    "./src/app/pages/creatingcare/renamecarecircle/renamecarecircle.page.ts");

    var RenamecarecirclePageModule = function RenamecarecirclePageModule() {
      _classCallCheck(this, RenamecarecirclePageModule);
    };

    RenamecarecirclePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _renamecarecircle_routing_module__WEBPACK_IMPORTED_MODULE_5__["RenamecarecirclePageRoutingModule"]],
      declarations: [_renamecarecircle_page__WEBPACK_IMPORTED_MODULE_6__["RenamecarecirclePage"]]
    })], RenamecarecirclePageModule);
    /***/
  },

  /***/
  "./src/app/pages/creatingcare/renamecarecircle/renamecarecircle.page.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/creatingcare/renamecarecircle/renamecarecircle.page.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCreatingcareRenamecarecircleRenamecarecirclePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h5 {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 32px;\n}\n\n.closeicon {\n  zoom: 1.2;\n  color: black;\n}\n\n.submitbtn {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 16px;\n  text-align: center;\n  color: #ffffff;\n  --border-radius: 8px;\n  width: 82.5%;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  height: 44px;\n}\n\n.lbtn {\n  margin-left: 24px;\n  --border-width: 1px;\n}\n\n.rbtn {\n  margin-right: 24px;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvY3JlYXRpbmdjYXJlL3JlbmFtZWNhcmVjaXJjbGUvcmVuYW1lY2FyZWNpcmNsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NyZWF0aW5nY2FyZS9yZW5hbWVjYXJlY2lyY2xlL3JlbmFtZWNhcmVjaXJjbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBR0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0ZKOztBRE1BO0VBRUksU0FBQTtFQUNBLFlBQUE7QUNKSjs7QURPQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNKSjs7QURNRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUNISjs7QURLRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3JlYXRpbmdjYXJlL3JlbmFtZWNhcmVjaXJjbGUvcmVuYW1lY2FyZWNpcmNsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmg1e1xuXG5cbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIH1cbiAgICBcbiAgICBcbi5jbG9zZWljb257XG4gICAgXG4gICAgem9vbTogMS4yOyBcbiAgICBjb2xvcjogYmxhY2s7IFxufVxuXG4uc3VibWl0YnRuIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgd2lkdGg6IDgyLjUlO1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gIH1cbiAgLmxidG4ge1xuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIH1cbiAgLnJidG4ge1xuICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbiAgIiwiaDUge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xufVxuXG4uY2xvc2VpY29uIHtcbiAgem9vbTogMS4yO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5zdWJtaXRidG4ge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDgyLjUlO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBoZWlnaHQ6IDQ0cHg7XG59XG5cbi5sYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG59XG5cbi5yYnRuIHtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICBmbG9hdDogcmlnaHQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/creatingcare/renamecarecircle/renamecarecircle.page.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/creatingcare/renamecarecircle/renamecarecircle.page.ts ***!
    \******************************************************************************/

  /*! exports provided: RenamecarecirclePage */

  /***/
  function srcAppPagesCreatingcareRenamecarecircleRenamecarecirclePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenamecarecirclePage", function () {
      return RenamecarecirclePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RenamecarecirclePage = /*#__PURE__*/function () {
      function RenamecarecirclePage() {
        _classCallCheck(this, RenamecarecirclePage);
      }

      _createClass(RenamecarecirclePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RenamecarecirclePage;
    }();

    RenamecarecirclePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-renamecarecircle',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./renamecarecircle.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/creatingcare/renamecarecircle/renamecarecircle.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./renamecarecircle.page.scss */
      "./src/app/pages/creatingcare/renamecarecircle/renamecarecircle.page.scss"))["default"]]
    })], RenamecarecirclePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-creatingcare-renamecarecircle-renamecarecircle-module-es5.js.map