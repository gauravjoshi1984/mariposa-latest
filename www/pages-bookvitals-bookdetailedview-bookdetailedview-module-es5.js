function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bookvitals-bookdetailedview-bookdetailedview-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookvitals/bookdetailedview/bookdetailedview.page.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookvitals/bookdetailedview/bookdetailedview.page.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesBookvitalsBookdetailedviewBookdetailedviewPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"headtoolbar\">\n    <ion-row>\n      <ion-col size=\"2\">\n        <ion-toolbar>\n          <ion-buttons slot=\"start\">\n            <ion-button [routerLink]=\"'/../'\" routerDirection=\"backward\">\n              <ion-icon slot=\"icon-only\" src=\"assets/back.svg\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-col>\n      <ion-col size=\"8\">\n        <div>\n          <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\"\n            >17th January 2020</ion-text\n          >\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides pager=\"true\" [options]=\"slideOpts\" class=\"bookslider\">\n    <ion-slide>\n      <img src=\"assets/tabs/Mask Group.svg\" alt=\"\" />\n      <!-- <h1>Slide 1</h1> -->\n    </ion-slide>\n    <ion-slide>\n      <img src=\"assets/tabs/Mask Group.svg\" alt=\"\" />\n    </ion-slide>\n    <ion-slide>\n      <img src=\"assets/tabs/Mask Group.svg\" alt=\"\" />\n    </ion-slide>\n    <ion-slide>\n      <img src=\"assets/tabs/Mask Group.svg\" alt=\"\" />\n    </ion-slide>\n    <ion-slide>\n      <img src=\"assets/tabs/Mask Group.svg\" alt=\"\" />\n    </ion-slide>\n  </ion-slides>\n  <div class=\"activitydiv\">\n    <p class=\"activitytxt\">Yesterday’s Activities</p>\n  </div>\n  <div class=\"activitydescriptiondiv\">\n    <p class=\"activitydescription\">\n      Bathing, Breakfast, Medication: Ibuprofine, Lunch, Snack, Exercise,\n      Dinner, Medication: ABCD Vitamin Syrup\n    </p>\n  </div>\n  <div class=\"activitynotediv\">\n    <p class=\"activitynote\">\n      Notes: This notes will be coming from care giver if she enters any\n      specific\n    </p>\n  </div>\n\n  <div class=\"ion-no-padding\">\n    <hr />\n  </div>\n\n  <div class=\"hdingdiv\">\n    <p class=\"\">Vitals</p>\n  </div>\n  <div class=\"reportdiv\">\n    <p>Blood Pressure <span class=\"spn1\">:</span> 120/80</p>\n    <p>Temperature <span class=\"spn2\">:</span> 98.6 F</p>\n    <p>Pulse Rate <span class=\"spn3\">:</span> 77bpm</p>\n    <p>Respiration <span class=\"spn4\">:</span> 16 /m</p>\n  </div>\n  <hr />\n  <div class=\"hdingdiv\" style=\"padding-top: 8px;\">\n    <p style=\"margin-top: 0;\">Medication</p>\n  </div>\n  <div class=\"medicindetdiv\">\n    <p class=\"medicindet\">Ibuprofine MKal, ABCD Vitamin Syrup</p>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/bookvitals/bookdetailedview/bookdetailedview-routing.module.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/pages/bookvitals/bookdetailedview/bookdetailedview-routing.module.ts ***!
    \**************************************************************************************/

  /*! exports provided: BookdetailedviewPageRoutingModule */

  /***/
  function srcAppPagesBookvitalsBookdetailedviewBookdetailedviewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookdetailedviewPageRoutingModule", function () {
      return BookdetailedviewPageRoutingModule;
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


    var _bookdetailedview_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bookdetailedview.page */
    "./src/app/pages/bookvitals/bookdetailedview/bookdetailedview.page.ts");

    var routes = [{
      path: '',
      component: _bookdetailedview_page__WEBPACK_IMPORTED_MODULE_3__["BookdetailedviewPage"]
    }];

    var BookdetailedviewPageRoutingModule = function BookdetailedviewPageRoutingModule() {
      _classCallCheck(this, BookdetailedviewPageRoutingModule);
    };

    BookdetailedviewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BookdetailedviewPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/bookvitals/bookdetailedview/bookdetailedview.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/bookvitals/bookdetailedview/bookdetailedview.module.ts ***!
    \******************************************************************************/

  /*! exports provided: BookdetailedviewPageModule */

  /***/
  function srcAppPagesBookvitalsBookdetailedviewBookdetailedviewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookdetailedviewPageModule", function () {
      return BookdetailedviewPageModule;
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


    var _bookdetailedview_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./bookdetailedview-routing.module */
    "./src/app/pages/bookvitals/bookdetailedview/bookdetailedview-routing.module.ts");
    /* harmony import */


    var _bookdetailedview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./bookdetailedview.page */
    "./src/app/pages/bookvitals/bookdetailedview/bookdetailedview.page.ts");

    var BookdetailedviewPageModule = function BookdetailedviewPageModule() {
      _classCallCheck(this, BookdetailedviewPageModule);
    };

    BookdetailedviewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _bookdetailedview_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookdetailedviewPageRoutingModule"]],
      declarations: [_bookdetailedview_page__WEBPACK_IMPORTED_MODULE_6__["BookdetailedviewPage"]]
    })], BookdetailedviewPageModule);
    /***/
  },

  /***/
  "./src/app/pages/bookvitals/bookdetailedview/bookdetailedview.page.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/bookvitals/bookdetailedview/bookdetailedview.page.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesBookvitalsBookdetailedviewBookdetailedviewPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".activitytxt {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 19px;\n  margin: 0;\n  color: #7e7e7e;\n}\n\nion-slide {\n  padding-bottom: 26px;\n}\n\n.activitydiv {\n  padding: 0 0 0 24px;\n  margin: 0 !important;\n}\n\n.activitydescriptiondiv {\n  padding: 0px 24px 0px 24px;\n}\n\n.activitydescription {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  color: #1a1a1a;\n  margin: 0;\n  padding-top: 8px;\n}\n\n.activitynotediv {\n  padding: 0px 24px 0px 24px;\n}\n\n.activitynote {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  color: #1a1a1a;\n  margin: 0;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n.hdingdiv {\n  padding: 0px 24px 0px 24px;\n}\n\n.hdingdiv p {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 19px;\n  color: #7e7e7e;\n  margin: 0;\n  padding-top: 9px;\n}\n\n.reportdiv {\n  padding: 9px 24px 8px 24px;\n}\n\n.reportdiv p {\n  margin: 0;\n  padding: 3px;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 28px;\n  text-transform: capitalize;\n  color: #1a1a1a;\n  padding: 0;\n}\n\n.reportdiv p .spn1 {\n  padding-left: 41px;\n}\n\n.reportdiv p .spn2 {\n  padding-left: 58px;\n}\n\n.reportdiv p .spn3 {\n  padding-left: 72px;\n}\n\n.reportdiv p .spn4 {\n  padding-left: 68px;\n}\n\n.medicindetdiv {\n  padding: 8px 24px 0px 24px;\n}\n\n.medicindetdiv p {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  color: #1a1a1a;\n  margin: 0;\n}\n\nhr {\n  height: 1px;\n  border-width: 0;\n  box-sizing: content-box;\n  /* background: aquamarine; */\n  background: #e0e0e0;\n  margin: 8px 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvYm9va3ZpdGFscy9ib29rZGV0YWlsZWR2aWV3L2Jvb2tkZXRhaWxlZHZpZXcucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ib29rdml0YWxzL2Jvb2tkZXRhaWxlZHZpZXcvYm9va2RldGFpbGVkdmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUVBLGNBQUE7QUNBRjs7QURFQTtFQUNFLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSwwQkFBQTtBQ0VGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNHRjs7QURBQTtFQUNFLDBCQUFBO0FDR0Y7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDR0Y7O0FEREE7RUFDRSwwQkFBQTtBQ0lGOztBREhFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNLSjs7QUREQTtFQUNFLDBCQUFBO0FDSUY7O0FESEU7RUFDRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDS0o7O0FESkk7RUFDRSxrQkFBQTtBQ01OOztBREpJO0VBQ0Usa0JBQUE7QUNNTjs7QURKSTtFQUNFLGtCQUFBO0FDTU47O0FESkk7RUFDRSxrQkFBQTtBQ01OOztBRERBO0VBQ0UsMEJBQUE7QUNJRjs7QURGRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQ0lKOztBRERBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0lGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYm9va3ZpdGFscy9ib29rZGV0YWlsZWR2aWV3L2Jvb2tkZXRhaWxlZHZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2aXR5dHh0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBtYXJnaW46IDA7XG5cbiAgY29sb3I6ICM3ZTdlN2U7XG59XG5pb24tc2xpZGUge1xuICBwYWRkaW5nLWJvdHRvbTogMjZweDtcbn1cblxuLmFjdGl2aXR5ZGl2IHtcbiAgcGFkZGluZzogMCAwIDAgMjRweDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG4uYWN0aXZpdHlkZXNjcmlwdGlvbmRpdiB7XG4gIHBhZGRpbmc6IDBweCAyNHB4IDBweCAyNHB4O1xufVxuLmFjdGl2aXR5ZGVzY3JpcHRpb24ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogIzFhMWExYTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuXG4uYWN0aXZpdHlub3RlZGl2IHtcbiAgcGFkZGluZzogMHB4IDI0cHggMHB4IDI0cHg7XG59XG5cbi5hY3Rpdml0eW5vdGUge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIGNvbG9yOiAjMWExYTFhO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG4uaGRpbmdkaXYge1xuICBwYWRkaW5nOiAwcHggMjRweCAwcHggMjRweDtcbiAgcCB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIGNvbG9yOiAjN2U3ZTdlO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nLXRvcDogOXB4O1xuICB9XG59XG5cbi5yZXBvcnRkaXYge1xuICBwYWRkaW5nOiA5cHggMjRweCA4cHggMjRweDtcbiAgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgY29sb3I6ICMxYTFhMWE7XG4gICAgcGFkZGluZzogMDtcbiAgICAuc3BuMSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDQxcHg7XG4gICAgfVxuICAgIC5zcG4yIHtcbiAgICAgIHBhZGRpbmctbGVmdDogNThweDtcbiAgICB9XG4gICAgLnNwbjMge1xuICAgICAgcGFkZGluZy1sZWZ0OiA3MnB4O1xuICAgIH1cbiAgICAuc3BuNCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDY4cHg7XG4gICAgfVxuICB9XG59XG5cbi5tZWRpY2luZGV0ZGl2IHtcbiAgcGFkZGluZzogOHB4IDI0cHggMHB4IDI0cHg7XG5cbiAgcCB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIGNvbG9yOiAjMWExYTFhO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuaHIge1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgLyogYmFja2dyb3VuZDogYXF1YW1hcmluZTsgKi9cbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgbWFyZ2luOiA4cHggMjRweDtcbn1cbiIsIi5hY3Rpdml0eXR4dCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzdlN2U3ZTtcbn1cblxuaW9uLXNsaWRlIHtcbiAgcGFkZGluZy1ib3R0b206IDI2cHg7XG59XG5cbi5hY3Rpdml0eWRpdiB7XG4gIHBhZGRpbmc6IDAgMCAwIDI0cHg7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG4uYWN0aXZpdHlkZXNjcmlwdGlvbmRpdiB7XG4gIHBhZGRpbmc6IDBweCAyNHB4IDBweCAyNHB4O1xufVxuXG4uYWN0aXZpdHlkZXNjcmlwdGlvbiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiAjMWExYTFhO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5cbi5hY3Rpdml0eW5vdGVkaXYge1xuICBwYWRkaW5nOiAwcHggMjRweCAwcHggMjRweDtcbn1cblxuLmFjdGl2aXR5bm90ZSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgY29sb3I6ICMxYTFhMWE7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cblxuLmhkaW5nZGl2IHtcbiAgcGFkZGluZzogMHB4IDI0cHggMHB4IDI0cHg7XG59XG4uaGRpbmdkaXYgcCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgY29sb3I6ICM3ZTdlN2U7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy10b3A6IDlweDtcbn1cblxuLnJlcG9ydGRpdiB7XG4gIHBhZGRpbmc6IDlweCAyNHB4IDhweCAyNHB4O1xufVxuLnJlcG9ydGRpdiBwIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAzcHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiAjMWExYTFhO1xuICBwYWRkaW5nOiAwO1xufVxuLnJlcG9ydGRpdiBwIC5zcG4xIHtcbiAgcGFkZGluZy1sZWZ0OiA0MXB4O1xufVxuLnJlcG9ydGRpdiBwIC5zcG4yIHtcbiAgcGFkZGluZy1sZWZ0OiA1OHB4O1xufVxuLnJlcG9ydGRpdiBwIC5zcG4zIHtcbiAgcGFkZGluZy1sZWZ0OiA3MnB4O1xufVxuLnJlcG9ydGRpdiBwIC5zcG40IHtcbiAgcGFkZGluZy1sZWZ0OiA2OHB4O1xufVxuXG4ubWVkaWNpbmRldGRpdiB7XG4gIHBhZGRpbmc6IDhweCAyNHB4IDBweCAyNHB4O1xufVxuLm1lZGljaW5kZXRkaXYgcCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgY29sb3I6ICMxYTFhMWE7XG4gIG1hcmdpbjogMDtcbn1cblxuaHIge1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgLyogYmFja2dyb3VuZDogYXF1YW1hcmluZTsgKi9cbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgbWFyZ2luOiA4cHggMjRweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/bookvitals/bookdetailedview/bookdetailedview.page.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/bookvitals/bookdetailedview/bookdetailedview.page.ts ***!
    \****************************************************************************/

  /*! exports provided: BookdetailedviewPage */

  /***/
  function srcAppPagesBookvitalsBookdetailedviewBookdetailedviewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookdetailedviewPage", function () {
      return BookdetailedviewPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BookdetailedviewPage = /*#__PURE__*/function () {
      function BookdetailedviewPage() {
        _classCallCheck(this, BookdetailedviewPage);

        this.slideOpts = {
          initialSlide: 1,
          speed: 400,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            bulletClass: 'custombullet',
            bulletActiveClass: 'customactivebullet'
          }
        };
      }

      _createClass(BookdetailedviewPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BookdetailedviewPage;
    }();

    BookdetailedviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bookdetailedview',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./bookdetailedview.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookvitals/bookdetailedview/bookdetailedview.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./bookdetailedview.page.scss */
      "./src/app/pages/bookvitals/bookdetailedview/bookdetailedview.page.scss"))["default"]]
    })], BookdetailedviewPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-bookvitals-bookdetailedview-bookdetailedview-module-es5.js.map