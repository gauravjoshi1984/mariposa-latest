function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-hamburgermenu-listofmembers-listofmembers-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hamburgermenu/listofmembers/listofmembers.page.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hamburgermenu/listofmembers/listofmembers.page.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHamburgermenuListofmembersListofmembersPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  <ion-toolbar class=\"headtoolbar\">\n      <ion-row>\n          <ion-col size=\"2\">\n              <ion-toolbar>\n                  <ion-buttons slot=\"start\">\n                      <m-backbutton></m-backbutton>\n                  </ion-buttons>\n              </ion-toolbar>\n          </ion-col>\n          <ion-col size=\"8\">\n              <div>\n                  <ion-text color=\"mdblack\" \n                  position=\"floating\" \n                  id=\"titletag\">{{member}}'s Care Circle\n                  </ion-text>\n              </div>\n          </ion-col>\n          <ion-col size=\"2\">\n              <div>\n                  <ion-img \n                  (click)=\"presentPopover($event)\" \n                  src=\"../assets/MariposaIcons/Kebab menu.svg\" \n                  style=\"color: black; float: right;\">\n                  </ion-img>\n              </div>\n          </ion-col>\n      </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n \n  <ion-grid class=\"details\">\n\n    <div class=\"container\" *ngFor=\"let items of memberdetails\">\n      <ion-row>\n        <ion-col size=\"2.8\">\n          <ion-img class=\"image\" src=\"../assets/MariposaIcons/carecircle/adultimage60.png\"></ion-img>\n        </ion-col>\n        <ion-col>\n          <ion-row>\n            <ion-col>\n              <ion-text><b>{{items.membername}},</b> {{items.memberrelation}}</ion-text>\n            </ion-col>\n            <ion-col>\n              <ion-chip color=\"mmgrey\" outline style=\"float:right;border-radius: 8px;\">\n                <ion-label>{{items.memberrank}}</ion-label>\n            </ion-chip>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-text maxlength=\"10\" class=\"membersdetails\">{{items.details}}...</ion-text>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n\n      <ion-row id=\"profilerow\">\n        <ion-col size=\"2.8\">\n          \n        </ion-col>\n        <ion-col size=\"4.8\">\n          <ion-text class=\"viewprofile\" color=\"primary\">VIEW PROFILE</ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-img class=\"logos\" src=\"../assets/MariposaIcons/carecircle/call.svg\"></ion-img>\n        </ion-col>\n        <ion-col>\n          <ion-img class=\"logos\" src=\"../assets/MariposaIcons/carecircle/email.svg\"></ion-img>\n        </ion-col>\n      </ion-row>\n\n      <hr class=\"solid\">\n    </div>  \n\n    \n  </ion-grid>\n  \n  <ion-grid>\n    <div id=\"button\">\n        <ion-button type=\"submit\" class=\"btnwhite\" expand=\"block\">ADD MEMBERS </ion-button>\n    </div>\n</ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/hamburgermenu/listofmembers/listofmembers-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/hamburgermenu/listofmembers/listofmembers-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: ListofmembersPageRoutingModule */

  /***/
  function srcAppPagesHamburgermenuListofmembersListofmembersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListofmembersPageRoutingModule", function () {
      return ListofmembersPageRoutingModule;
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


    var _listofmembers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./listofmembers.page */
    "./src/app/pages/hamburgermenu/listofmembers/listofmembers.page.ts");

    var routes = [{
      path: '',
      component: _listofmembers_page__WEBPACK_IMPORTED_MODULE_3__["ListofmembersPage"]
    }];

    var ListofmembersPageRoutingModule = function ListofmembersPageRoutingModule() {
      _classCallCheck(this, ListofmembersPageRoutingModule);
    };

    ListofmembersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ListofmembersPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/hamburgermenu/listofmembers/listofmembers.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/hamburgermenu/listofmembers/listofmembers.module.ts ***!
    \***************************************************************************/

  /*! exports provided: ListofmembersPageModule */

  /***/
  function srcAppPagesHamburgermenuListofmembersListofmembersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListofmembersPageModule", function () {
      return ListofmembersPageModule;
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


    var _listofmembers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./listofmembers-routing.module */
    "./src/app/pages/hamburgermenu/listofmembers/listofmembers-routing.module.ts");
    /* harmony import */


    var _listofmembers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./listofmembers.page */
    "./src/app/pages/hamburgermenu/listofmembers/listofmembers.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/pages/shared/shared.module.ts");

    var ListofmembersPageModule = function ListofmembersPageModule() {
      _classCallCheck(this, ListofmembersPageModule);
    };

    ListofmembersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _listofmembers_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListofmembersPageRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      declarations: [_listofmembers_page__WEBPACK_IMPORTED_MODULE_6__["ListofmembersPage"]]
    })], ListofmembersPageModule);
    /***/
  },

  /***/
  "./src/app/pages/hamburgermenu/listofmembers/listofmembers.page.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/hamburgermenu/listofmembers/listofmembers.page.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHamburgermenuListofmembersListofmembersPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".details {\n  padding-top: 16px;\n  padding-left: 24px;\n  padding-right: 24px;\n}\n.details ion-row {\n  align-items: center;\n  margin: 0px;\n  padding: 0px;\n}\n.details ion-col {\n  margin: 0px;\n  padding: 0px;\n}\n.image {\n  height: 60px;\n  width: 60px;\n}\nion-text {\n  color: black;\n  font-size: 16px;\n  line-height: 20px;\n  font-weight: normal;\n  font-style: normal;\n}\n.membersdetails {\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 19px;\n  color: #7E7E7E;\n}\nion-chip {\n  height: 20px;\n  width: 80px;\n  border-radius: 8px;\n  border-width: 0.4px;\n  color: #B8B8B8;\n}\nion-chip ion-label {\n  font-size: 12px;\n  line-height: 14px;\n  text-align: center;\n  font-weight: bold;\n  margin-left: 6px;\n}\n.viewprofile {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  text-align: center;\n  text-transform: uppercase;\n  color: #4137FF;\n}\n.logos {\n  height: 55px;\n  width: 55px;\n  float: right;\n}\n#profilerow {\n  margin-top: 5px;\n}\n.solid {\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n.container {\n  padding: 0px;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvaGFtYnVyZ2VybWVudS9saXN0b2ZtZW1iZXJzL2xpc3RvZm1lbWJlcnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9oYW1idXJnZXJtZW51L2xpc3RvZm1lbWJlcnMvbGlzdG9mbWVtYmVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENJO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NSO0FEQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NSO0FER0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0FKO0FER0E7RUFFSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNESjtBRElBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0RKO0FER0k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNEUjtBREtBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0ZKO0FES0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNGSjtBREtBO0VBQ0ksZUFBQTtBQ0ZKO0FES0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDRko7QURLQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9oYW1idXJnZXJtZW51L2xpc3RvZm1lbWJlcnMvbGlzdG9mbWVtYmVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlsc3tcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgcGFkZGluZy1yaWdodDogMjRweDtcblxuICAgIGlvbi1yb3d7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBwYWRkaW5nOjBweDtcbiAgICB9XG4gICAgaW9uLWNvbHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIHBhZGRpbmc6MHB4O1xuICAgIH1cbn1cblxuLmltYWdle1xuICAgIGhlaWdodDogNjBweDtcbiAgICB3aWR0aDogNjBweDtcbn1cblxuaW9uLXRleHR7XG5cbiAgICBjb2xvcjpibGFjaztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5tZW1iZXJzZGV0YWlsc3tcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICBjb2xvcjogIzdFN0U3RTtcbn1cblxuaW9uLWNoaXB7XG4gICAgaGVpZ2h0OjIwcHg7XG4gICAgd2lkdGg6ODBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLXdpZHRoOiAwLjRweDtcbiAgICBjb2xvcjogI0I4QjhCODtcblxuICAgIGlvbi1sYWJlbHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICB9XG59XG5cbi52aWV3cHJvZmlsZXtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjojNDEzN0ZGXG59XG5cbi5sb2dvc3tcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgd2lkdGg6IDU1cHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4jcHJvZmlsZXJvd3tcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5zb2xpZHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5jb250YWluZXJ7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xufSIsIi5kZXRhaWxzIHtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbiAgcGFkZGluZy1yaWdodDogMjRweDtcbn1cbi5kZXRhaWxzIGlvbi1yb3cge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuLmRldGFpbHMgaW9uLWNvbCB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5pbWFnZSB7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG59XG5cbmlvbi10ZXh0IHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5tZW1iZXJzZGV0YWlscyB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIGNvbG9yOiAjN0U3RTdFO1xufVxuXG5pb24tY2hpcCB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLXdpZHRoOiAwLjRweDtcbiAgY29sb3I6ICNCOEI4Qjg7XG59XG5pb24tY2hpcCBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tbGVmdDogNnB4O1xufVxuXG4udmlld3Byb2ZpbGUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjNDEzN0ZGO1xufVxuXG4ubG9nb3Mge1xuICBoZWlnaHQ6IDU1cHg7XG4gIHdpZHRoOiA1NXB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbiNwcm9maWxlcm93IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uc29saWQge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/hamburgermenu/listofmembers/listofmembers.page.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/hamburgermenu/listofmembers/listofmembers.page.ts ***!
    \*************************************************************************/

  /*! exports provided: ListofmembersPage */

  /***/
  function srcAppPagesHamburgermenuListofmembersListofmembersPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListofmembersPage", function () {
      return ListofmembersPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ListofmembersPage = /*#__PURE__*/function () {
      function ListofmembersPage() {
        _classCallCheck(this, ListofmembersPage);

        this.member = "David";
        this.memberrelation = "Father";
        this.memberrank = "SENIOR";
        this.details = "70 Years Old, Male, lives with";
        this.memberdetails = [{
          membername: "David",
          memberrelation: "Father",
          memberrank: "SENIOR",
          details: "70 Years Old, Male, lives with"
        }, {
          membername: "David",
          memberrelation: "Father",
          memberrank: "SENIOR",
          details: "70 Years Old, Male, lives with"
        }];
      }

      _createClass(ListofmembersPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ListofmembersPage;
    }();

    ListofmembersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-listofmembers',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./listofmembers.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hamburgermenu/listofmembers/listofmembers.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./listofmembers.page.scss */
      "./src/app/pages/hamburgermenu/listofmembers/listofmembers.page.scss"))["default"]]
    })], ListofmembersPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-hamburgermenu-listofmembers-listofmembers-module-es5.js.map