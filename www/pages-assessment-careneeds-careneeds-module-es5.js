function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-assessment-careneeds-careneeds-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/careneeds/careneeds.page.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/careneeds/careneeds.page.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAssessmentCareneedsCareneedsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"md\">\n    <ion-toolbar class=\"headtoolbar\">\n        <ion-row>\n            <ion-col size=\"2\">\n                <ion-toolbar>\n                    <ion-buttons slot=\"start\">\n                        <!-- <ion-back-button style=\"float:left\" mode=\"md\" color=\"mdblack\" icon=\"chevron-back-outline\" defaultHref=\"admin-sign-in\"></ion-back-button> -->\n           <m-backbutton></m-backbutton>\n                    </ion-buttons>\n                </ion-toolbar>\n            </ion-col>\n            <ion-col size=\"8\">\n                <div>\n                    <ion-text position=\"floating\" id=\"titletag\">Care Needs</ion-text>\n                </div>\n            </ion-col>\n            <ion-col size=\"2\" style=\"padding-right: 8px;\">\n                <div>\n                    <ion-img src=\"../assets/threedots.svg\" style=\"float:right;\"></ion-img>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n    <ion-grid class=\"careneedheadergrid\">\n        <ion-row>\n            <ion-col style=\"padding:0px;\">\n                <ion-text class=\"selecttext\" color=\"mdgrey\">Please select the care needs required along with the level of assistance required.</ion-text>\n            </ion-col>\n        </ion-row>\n        <ion-row style=\"padding-top:24px;\">\n            <ion-col size=\"4\" style=\"left: 70px;\" class=\"careneeds-lable\">\n                <ion-text style=\"float: right;\">Some</ion-text>\n            </ion-col>\n            <ion-col size=\"4\" style=\"left: 50px;\" class=\"careneeds-lable\">\n                <ion-text style=\"float: right;\">Complete</ion-text>\n            </ion-col>\n            <ion-col size=\"4\" class=\"careneeds-lable\">\n                <ion-text style=\"float: right;\">None</ion-text>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <ion-grid class=\"careneedcontent\">\n        <ion-card *ngFor=\"let item of careneedinfo\" class=\"careneeds-card\">\n            <ion-grid style=\"padding:0px\">\n                <ion-row class=\"contentrow\">\n                    <ion-col size=\"5\">\n                        <ion-text>\n                            <h5 class=\"itemname\">{{item.name}}</h5>\n                        </ion-text>\n                    </ion-col>\n                    <ion-col>\n                        <ion-img *ngIf=\"item.val=='some'\" src=\"assets/icon/radioButtonChecked.png\" (click)=\"item.val=''\"></ion-img>\n                        <ion-img *ngIf=\"item.val!='some'\" src=\"assets/icon/radioButtonUnchecked.png\" (click)=\"item.val='some'\"></ion-img>\n\n                    </ion-col>\n                    <ion-col>\n                        <ion-img *ngIf=\"item.val=='complete'\" src=\"assets/icon/radioButtonChecked.png\" (click)=\"item.val=''\"></ion-img>\n                        <ion-img *ngIf=\"item.val!='complete'\" src=\"assets/icon/radioButtonUnchecked.png\" (click)=\"item.val='complete'\"></ion-img>\n                    </ion-col>\n                    <ion-col>\n                        <ion-img *ngIf=\"item.val=='none'\" src=\"assets/icon/radioButtonChecked.png\" (click)=\"item.val=''\"></ion-img>\n                        <ion-img *ngIf=\"item.val!='none'\" src=\"assets/icon/radioButtonUnchecked.png\" (click)=\"item.val='none'\"></ion-img>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-card>\n        <div id=\"button\">\n            <ion-button [disabled]=\"false\" class=\"btnblue\" type=\"submit\" id=\"signup\" (click)=\"save()\">SUBMIT</ion-button>\n        </div>\n    </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/assessment/careneeds/careneeds-routing.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/assessment/careneeds/careneeds-routing.module.ts ***!
    \************************************************************************/

  /*! exports provided: CareneedsPageRoutingModule */

  /***/
  function srcAppPagesAssessmentCareneedsCareneedsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CareneedsPageRoutingModule", function () {
      return CareneedsPageRoutingModule;
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


    var _careneeds_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./careneeds.page */
    "./src/app/pages/assessment/careneeds/careneeds.page.ts");

    var routes = [{
      path: '',
      component: _careneeds_page__WEBPACK_IMPORTED_MODULE_3__["CareneedsPage"]
    }];

    var CareneedsPageRoutingModule = function CareneedsPageRoutingModule() {
      _classCallCheck(this, CareneedsPageRoutingModule);
    };

    CareneedsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CareneedsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/assessment/careneeds/careneeds.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/assessment/careneeds/careneeds.module.ts ***!
    \****************************************************************/

  /*! exports provided: CareneedsPageModule */

  /***/
  function srcAppPagesAssessmentCareneedsCareneedsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CareneedsPageModule", function () {
      return CareneedsPageModule;
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


    var _careneeds_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./careneeds-routing.module */
    "./src/app/pages/assessment/careneeds/careneeds-routing.module.ts");
    /* harmony import */


    var _careneeds_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./careneeds.page */
    "./src/app/pages/assessment/careneeds/careneeds.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/pages/shared/shared.module.ts");

    var CareneedsPageModule = function CareneedsPageModule() {
      _classCallCheck(this, CareneedsPageModule);
    };

    CareneedsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _careneeds_routing_module__WEBPACK_IMPORTED_MODULE_5__["CareneedsPageRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      declarations: [_careneeds_page__WEBPACK_IMPORTED_MODULE_6__["CareneedsPage"]]
    })], CareneedsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/assessment/careneeds/careneeds.page.scss":
  /*!****************************************************************!*\
    !*** ./src/app/pages/assessment/careneeds/careneeds.page.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAssessmentCareneedsCareneedsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".careneeds-lable ion-text {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n}\n\n.careneeds-card {\n  margin: 5px 0;\n  min-height: 55px;\n  box-shadow: 0px 2px 8px rgba(65, 55, 255, 0.08);\n  border-radius: 4px;\n}\n\n.careneeds-card ion-text h5 {\n  font-size: 16px;\n  line-height: 19px;\n  color: #1A1A1A;\n  font-weight: normal;\n  padding-left: 16px;\n}\n\n.careneeds-card ion-text ion-col {\n  padding: 0px;\n}\n\n.careneeds-card ion-img {\n  height: 24px;\n  width: 24px;\n  float: right;\n  margin-top: 12px;\n  margin-right: 28px;\n}\n\n.careneedcontent {\n  padding-top: 4px;\n  padding-bottom: 32px;\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-bottom: 55px;\n}\n\n.itemname {\n  margin-bottom: 0px;\n  margin-top: 12px;\n}\n\n.contentrow {\n  padding: 0px;\n  align-items: center;\n}\n\n.careneedheadergrid {\n  padding: 24px;\n  padding-bottom: 0px;\n  height: auto;\n}\n\n.selecttext {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvYXNzZXNzbWVudC9jYXJlbmVlZHMvY2FyZW5lZWRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYXNzZXNzbWVudC9jYXJlbmVlZHMvY2FyZW5lZWRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQVI7O0FESUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0FDREo7O0FER1E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0RaOztBREdRO0VBQ0ksWUFBQTtBQ0RaOztBRElJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0ZSOztBRE1BO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0hKOztBRE1BO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0hKOztBRE1BO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FDSEo7O0FETUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDSEo7O0FETUE7RUFDSSxlQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hc3Nlc3NtZW50L2NhcmVuZWVkcy9jYXJlbmVlZHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmVuZWVkcy1sYWJsZSB7XG4gICAgaW9uLXRleHQge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgIH1cbn1cblxuLmNhcmVuZWVkcy1jYXJkIHtcbiAgICBtYXJnaW46IDVweCAwO1xuICAgIG1pbi1oZWlnaHQ6IDU1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA4cHggcmdiYSg2NSwgNTUsIDI1NSwgMC4wOCk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGlvbi10ZXh0IHtcbiAgICAgICAgaDUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgICAgICAgICBjb2xvcjogIzFBMUExQTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLWltZyB7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyOHB4O1xuICAgIH1cbn1cblxuLmNhcmVuZWVkY29udGVudCB7XG4gICAgcGFkZGluZy10b3A6IDRweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1NXB4O1xufVxuXG4uaXRlbW5hbWUge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4uY29udGVudHJvdyB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jYXJlbmVlZGhlYWRlcmdyaWQge1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi5zZWxlY3R0ZXh0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59IiwiLmNhcmVuZWVkcy1sYWJsZSBpb24tdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG59XG5cbi5jYXJlbmVlZHMtY2FyZCB7XG4gIG1hcmdpbjogNXB4IDA7XG4gIG1pbi1oZWlnaHQ6IDU1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAycHggOHB4IHJnYmEoNjUsIDU1LCAyNTUsIDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uY2FyZW5lZWRzLWNhcmQgaW9uLXRleHQgaDUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBjb2xvcjogIzFBMUExQTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuLmNhcmVuZWVkcy1jYXJkIGlvbi10ZXh0IGlvbi1jb2wge1xuICBwYWRkaW5nOiAwcHg7XG59XG4uY2FyZW5lZWRzLWNhcmQgaW9uLWltZyB7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgbWFyZ2luLXJpZ2h0OiAyOHB4O1xufVxuXG4uY2FyZW5lZWRjb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgcGFkZGluZy1ib3R0b206IDMycHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogNTVweDtcbn1cblxuLml0ZW1uYW1lIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4uY29udGVudHJvdyB7XG4gIHBhZGRpbmc6IDBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNhcmVuZWVkaGVhZGVyZ3JpZCB7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnNlbGVjdHRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/assessment/careneeds/careneeds.page.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/assessment/careneeds/careneeds.page.ts ***!
    \**************************************************************/

  /*! exports provided: CareneedsPage */

  /***/
  function srcAppPagesAssessmentCareneedsCareneedsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CareneedsPage", function () {
      return CareneedsPage;
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


    var _dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../dataservice.service */
    "./src/app/pages/dataservice.service.ts");
    /* harmony import */


    var src_app_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/http.service */
    "./src/app/http.service.ts");
    /* harmony import */


    var _assessment_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../assessment-service.service */
    "./src/app/pages/assessment/assessment-service.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var CareneedsPage = /*#__PURE__*/function () {
      function CareneedsPage(dataService, apiService, assessmentService, navCtrl) {
        _classCallCheck(this, CareneedsPage);

        this.dataService = dataService;
        this.apiService = apiService;
        this.assessmentService = assessmentService;
        this.navCtrl = navCtrl;
        this.changecolor = 'assets/icon/radioButtonUnchecked.png';
      }

      _createClass(CareneedsPage, [{
        key: "onClick",
        value: function onClick() {
          if (this.changecolor === 'assets/icon/radioButtonUnchecked.png') {
            this.changecolor = 'assets/icon/radioButtonChecked.png';
          } else {
            this.changecolor = 'assets/icon/radioButtonUnchecked.png';
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var data, metadata;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.assessmentService.getCareCircleId();

                  case 2:
                    this.careCircleId = _context.sent;
                    _context.next = 5;
                    return this.dataService.getUserInfo();

                  case 5:
                    this.userId = _context.sent;
                    this.userId = this.userId.userId;
                    _context.next = 9;
                    return this.apiService.get('assessment', {
                      careCircleId: this.careCircleId,
                      userId: this.userId
                    });

                  case 9:
                    data = _context.sent;

                    if (data.assessmentValues.CARE_NEED_PREFS == null) {
                      this.careneedinfo = data.assessmentConfiguration.CARE_NEED_PREFS.options.map(function (item) {
                        return {
                          name: item.label,
                          value: item.key,
                          val: ''
                        };
                      });
                    } else {
                      metadata = data.assessmentConfiguration.CARE_NEED_PREFS.options;
                      this.careneedinfo = data.assessmentConfiguration.CARE_NEED_PREFS.options.map(function (item) {
                        return {
                          name: item.label,
                          value: item.key,
                          val: data.assessmentValues.CARE_NEED_PREFS[item.key]
                        };
                      });
                    }

                    _context.next = 13;
                    return this.assessmentService.setAssessmentStateObject(data);

                  case 13:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "save",
        value: function save() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var objectToSave;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    objectToSave = {};
                    this.careneedinfo.forEach(function (element) {
                      objectToSave[element.value] = element.val;
                    });
                    this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEED_PREFS', this.userId, objectToSave).then(function (response) {
                      _this.dataService.setLastVisitedPage('/assessment/assessmentbar');

                      _this.navCtrl.navigateForward(['/assessment/assessmentbar']);
                    });

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "back",
        value: function back() {
          this.navCtrl.back();
        }
      }]);

      return CareneedsPage;
    }();

    CareneedsPage.ctorParameters = function () {
      return [{
        type: _dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"]
      }, {
        type: src_app_http_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _assessment_service_service__WEBPACK_IMPORTED_MODULE_4__["AssessmentServiceService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }];
    };

    CareneedsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-careneeds',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./careneeds.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/careneeds/careneeds.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./careneeds.page.scss */
      "./src/app/pages/assessment/careneeds/careneeds.page.scss"))["default"]]
    })], CareneedsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-assessment-careneeds-careneeds-module-es5.js.map