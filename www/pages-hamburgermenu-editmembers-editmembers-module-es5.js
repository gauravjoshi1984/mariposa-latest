function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-hamburgermenu-editmembers-editmembers-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hamburgermenu/editmembers/editmembers.page.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hamburgermenu/editmembers/editmembers.page.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHamburgermenuEditmembersEditmembersPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  <ion-toolbar class=\"headtoolbar\">\n    <ion-grid>\n      <ion-row style=\"align-items: center; margin-top: 32px;\">\n        <ion-col size=\"10\">\n          <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\"\n            >Edit {{senior}}'s Care Circle</ion-text\n          >\n        </ion-col>\n        <ion-col>\n          <ion-icon\n            style=\"zoom: 1.2; color: black; float: right;\"\n            name=\"close-outline\"\n          ></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"contentgrid\">\n    <div>\n      <ion-text style=\"line-height: 19px;font-size: 16px;font-weight: 300;\" color=\"mdblack\" position=\"floating\" id=\"tag\">Name of the Care circle</ion-text>\n      <ion-text style=\"line-height: 19px;font-size: 16px;font-weight: 300;\" color=\"mdgrey\" position=\"floating\"><br>(Senior name is Suggested)</ion-text>\n    </div>\n    <ion-item  lines=\"none\">\n      <ion-input mode=\"md\" class=\"input\"></ion-input>\n    </ion-item>\n\n    <div class=\"container\" *ngFor=\"let items of memberdetails\">\n      <ion-row>\n        <ion-col size=\"2.8\">\n          <ion-img class=\"image\" src=\"../assets/MariposaIcons/carecircle/adultimage60.png\"></ion-img>\n        </ion-col>\n        <ion-col>\n          <ion-row>\n            <ion-col>\n              <ion-text><b>{{items.membername}},</b> {{items.memberrelation}}</ion-text>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-text maxlength=\"10\" class=\"membersdetails\">{{items.details}}...</ion-text>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col *ngIf=\"!isAdmin\" size=\"1\">\n          <ion-img class=\"removeicon\" src=\"../assets/MariposaIcons/carecircle/remove.svg\"></ion-img>\n        </ion-col>\n      </ion-row>\n\n      <hr class=\"solid\">\n    </div>\n\n\n  </ion-grid>\n\n  <ion-grid>\n    <div id=\"button\">\n        <ion-button type=\"submit\" class=\"btnwhite\" expand=\"block\">ADD MEMBERS </ion-button>\n    </div>\n</ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/hamburgermenu/editmembers/editmembers-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/hamburgermenu/editmembers/editmembers-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: EditmembersPageRoutingModule */

  /***/
  function srcAppPagesHamburgermenuEditmembersEditmembersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditmembersPageRoutingModule", function () {
      return EditmembersPageRoutingModule;
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


    var _editmembers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./editmembers.page */
    "./src/app/pages/hamburgermenu/editmembers/editmembers.page.ts");

    var routes = [{
      path: '',
      component: _editmembers_page__WEBPACK_IMPORTED_MODULE_3__["EditmembersPage"]
    }];

    var EditmembersPageRoutingModule = function EditmembersPageRoutingModule() {
      _classCallCheck(this, EditmembersPageRoutingModule);
    };

    EditmembersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditmembersPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/hamburgermenu/editmembers/editmembers.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/hamburgermenu/editmembers/editmembers.module.ts ***!
    \***********************************************************************/

  /*! exports provided: EditmembersPageModule */

  /***/
  function srcAppPagesHamburgermenuEditmembersEditmembersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditmembersPageModule", function () {
      return EditmembersPageModule;
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


    var _editmembers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./editmembers-routing.module */
    "./src/app/pages/hamburgermenu/editmembers/editmembers-routing.module.ts");
    /* harmony import */


    var _editmembers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./editmembers.page */
    "./src/app/pages/hamburgermenu/editmembers/editmembers.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/pages/shared/shared.module.ts");

    var EditmembersPageModule = function EditmembersPageModule() {
      _classCallCheck(this, EditmembersPageModule);
    };

    EditmembersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _editmembers_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditmembersPageRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      declarations: [_editmembers_page__WEBPACK_IMPORTED_MODULE_6__["EditmembersPage"]]
    })], EditmembersPageModule);
    /***/
  },

  /***/
  "./src/app/pages/hamburgermenu/editmembers/editmembers.page.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/hamburgermenu/editmembers/editmembers.page.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHamburgermenuEditmembersEditmembersPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".contentgird {\n  padding: 24px;\n}\n\nion-item {\n  padding: 0px !important;\n  --ion-safe-area-right: 0;\n  --ion-safe-area-left: 0;\n  margin-top: 8px;\n  margin-bottom: 40px;\n}\n\nion-item ion-input {\n  --padding-start: 10px;\n}\n\nion-row {\n  align-items: center;\n  padding: 0px;\n  margin: 0px;\n}\n\nion-col {\n  padding: 0px;\n  margin: 0px;\n}\n\n.image {\n  height: 60px;\n  width: 60px;\n}\n\nion-text {\n  color: black;\n  font-size: 16px;\n  line-height: 20px;\n  font-weight: normal;\n  font-style: normal;\n}\n\n.membersdetails {\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 19px;\n  color: #7E7E7E;\n}\n\nion-chip {\n  height: 20px;\n  width: 80px;\n  border-radius: 8px;\n  border-width: 0.4px;\n  color: #B8B8B8;\n}\n\nion-chip ion-label {\n  font-size: 12px;\n  line-height: 14px;\n  text-align: center;\n  font-weight: bold;\n  margin-left: 6px;\n}\n\n.container {\n  padding: 0px;\n}\n\n.solid {\n  margin-top: 24px;\n  margin-bottom: 24px;\n}\n\n.removeicon {\n  height: 24px;\n  width: 24px;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvaGFtYnVyZ2VybWVudS9lZGl0bWVtYmVycy9lZGl0bWVtYmVycy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hhbWJ1cmdlcm1lbnUvZWRpdG1lbWJlcnMvZWRpdG1lbWJlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0k7RUFDSSxxQkFBQTtBQ0NSOztBREdBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0E7RUFFSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDREo7O0FESUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDREo7O0FER0k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNEUjs7QURNQTtFQUVJLFlBQUE7QUNKSjs7QURPQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUNKSjs7QURPQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGFtYnVyZ2VybWVudS9lZGl0bWVtYmVycy9lZGl0bWVtYmVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudGdpcmR7XG4gICAgcGFkZGluZzogMjRweDtcbn1cblxuaW9uLWl0ZW17XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tc2FmZS1hcmVhLXJpZ2h0OiAwO1xuICAgIC0taW9uLXNhZmUtYXJlYS1sZWZ0OiAwO1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuXG4gICAgaW9uLWlucHV0e1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQgOiAxMHB4O1xuICAgIH1cbn1cblxuaW9uLXJvd3tcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuaW9uLWNvbHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbi5pbWFnZXtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDYwcHg7XG59XG5cbmlvbi10ZXh0e1xuXG4gICAgY29sb3I6YmxhY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4ubWVtYmVyc2RldGFpbHN7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgY29sb3I6ICM3RTdFN0U7XG59XG5cbmlvbi1jaGlwe1xuICAgIGhlaWdodDoyMHB4O1xuICAgIHdpZHRoOjgwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJvcmRlci13aWR0aDogMC40cHg7XG4gICAgY29sb3I6ICNCOEI4Qjg7XG5cbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgfVxufVxuXG5cbi5jb250YWluZXJ7XG4gICAgXG4gICAgcGFkZGluZzogMHB4O1xufVxuXG4uc29saWR7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4ucmVtb3ZlaWNvbntcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4iLCIuY29udGVudGdpcmQge1xuICBwYWRkaW5nOiAyNHB4O1xufVxuXG5pb24taXRlbSB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAtLWlvbi1zYWZlLWFyZWEtcmlnaHQ6IDA7XG4gIC0taW9uLXNhZmUtYXJlYS1sZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5pb24taXRlbSBpb24taW5wdXQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG59XG5cbmlvbi1yb3cge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5pb24tY29sIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLmltYWdlIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbn1cblxuaW9uLXRleHQge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLm1lbWJlcnNkZXRhaWxzIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgY29sb3I6ICM3RTdFN0U7XG59XG5cbmlvbi1jaGlwIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXItd2lkdGg6IDAuNHB4O1xuICBjb2xvcjogI0I4QjhCODtcbn1cbmlvbi1jaGlwIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5zb2xpZCB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbi5yZW1vdmVpY29uIHtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMjRweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/hamburgermenu/editmembers/editmembers.page.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/hamburgermenu/editmembers/editmembers.page.ts ***!
    \*********************************************************************/

  /*! exports provided: EditmembersPage */

  /***/
  function srcAppPagesHamburgermenuEditmembersEditmembersPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditmembersPage", function () {
      return EditmembersPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EditmembersPage = /*#__PURE__*/function () {
      function EditmembersPage() {
        _classCallCheck(this, EditmembersPage);

        this.senior = "David";
        this.isAdmin = false;
        this.memberdetails = [{
          membername: "David",
          memberrelation: "Father",
          memberrank: "SENIOR",
          details: "70 Years Old, Male, lives with"
        }, {
          membername: "David",
          memberrelation: "Father",
          memberrank: "ADMIN",
          details: "70 Years Old, Male, lives with"
        }];
      }

      _createClass(EditmembersPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EditmembersPage;
    }();

    EditmembersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-editmembers',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./editmembers.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hamburgermenu/editmembers/editmembers.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./editmembers.page.scss */
      "./src/app/pages/hamburgermenu/editmembers/editmembers.page.scss"))["default"]]
    })], EditmembersPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-hamburgermenu-editmembers-editmembers-module-es5.js.map