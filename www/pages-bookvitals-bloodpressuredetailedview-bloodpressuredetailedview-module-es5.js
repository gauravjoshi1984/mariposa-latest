function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bookvitals-bloodpressuredetailedview-bloodpressuredetailedview-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookvitals/bloodpressuredetailedview/bloodpressuredetailedview.page.html":
  /*!**************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookvitals/bloodpressuredetailedview/bloodpressuredetailedview.page.html ***!
    \**************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesBookvitalsBloodpressuredetailedviewBloodpressuredetailedviewPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  <ion-toolbar class=\"headtoolbar\">\n    <ion-row>\n      <ion-col size=\"2\">\n        <ion-toolbar>\n          <ion-buttons slot=\"start\">\n            <ion-button [routerLink]=\"'../'\" routerDirection=\"backward\">\n              <ion-icon slot=\"icon-only\" src=\"assets/back.svg\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n          <!-- <ion-buttons slot=\"start\">\n            <ion-back-button\n              mode=\"md\"\n              color=\"mdblack\"\n              icon=\"chevron-back-outline\"\n              defaultHref=\"admin-sign-in\"\n            ></ion-back-button>\n          </ion-buttons> -->\n        </ion-toolbar>\n      </ion-col>\n      <ion-col size=\"8\">\n        <div>\n          <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\"\n            >Medication Management</ion-text\n          >\n        </div>\n      </ion-col>\n      <ion-col size=\"2\">\n        <div >\n          <ion-icon class=\"shareicon\" src=\"assets/MariposaIcons/Share icon.svg\" slot=\"end\"></ion-icon>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"weekselect\">\n    <ion-item lines=\"none\">\n      <ion-label>17 May - 23 May 2020</ion-label>\n      <ion-select>\n        <!-- <ion-select-option value=\"f\">Female</ion-select-option>\n        <ion-select-option value=\"m\">Male</ion-select-option> -->\n      </ion-select>\n      \n    </ion-item>\n    <p>This week</p>\n  </div>\n\n  <div class=\"bpchart\">\n\n  </div>\n  <div class=\"dtldreport\">\n    <div class=\"dtldreportdate\">\n    <p>Friday, 22 May 2020</p>\n  </div>\n  <ion-row>\n    <ion-col size=\"8\">\n      <p>116/70 mm Hg</p>\n    </ion-col>\n    <ion-col size=\"4\">\n      <p class=\"dtldtime\">9:30 am</p>\n      \n    </ion-col>\n    <p class=\"dtldnote\">Notes details here. Notes about the entry taken at the time of measurement can be seen here</p>\n    </ion-row>\n      \n\n  </div>\n  <div class=\"ion-no-padding\">\n    <hr />\n  </div>\n  <div class=\"dtldreport2\">\n  <ion-row>\n    <ion-col size=\"8\">\n      <p>120/75 mm Hg</p>\n    </ion-col>\n    <ion-col size=\"4\">\n      <p class=\"dtldtime\">6:35 am</p>\n      \n    </ion-col>\n    <p class=\"dtldnote\">Notes details here. Notes about the entry taken at the time of measurement can be seen here</p>\n    </ion-row>\n  </div>\n\n\n  <div class=\"dtldreport\">\n    <div class=\"dtldreportdate\">\n    <p>Friday, 22 May 2020</p>\n  </div>\n  <ion-row>\n    <ion-col size=\"8\">\n      <p>116/70 mm Hg</p>\n    </ion-col>\n    <ion-col size=\"4\">\n      <p class=\"dtldtime\">9:30 am</p>\n      \n    </ion-col>\n    <p class=\"dtldnote\">Notes details here. Notes about the entry taken at the time of measurement can be seen here</p>\n    </ion-row>\n      \n\n  </div>\n  <div class=\"ion-no-padding\">\n    <hr />\n  </div>\n  <div class=\"dtldreport2\">\n  <ion-row>\n    <ion-col size=\"8\">\n      <p>120/75 mm Hg</p>\n    </ion-col>\n    <ion-col size=\"4\">\n      <p class=\"dtldtime\">6:35 am</p>\n      \n    </ion-col>\n    <p class=\"dtldnote\">Notes details here. Notes about the entry taken at the time of measurement can be seen here</p>\n    </ion-row>\n  </div>\n\n  <div class=\"dtldreport\">\n    <div class=\"dtldreportdate\">\n    <p>Friday, 22 May 2020</p>\n  </div>\n  <ion-row>\n    <ion-col size=\"8\">\n      <p>116/70 mm Hg</p>\n    </ion-col>\n    <ion-col size=\"4\">\n      <p class=\"dtldtime\">9:30 am</p>\n      \n    </ion-col>\n    <p class=\"dtldnote\">Notes details here. Notes about the entry taken at the time of measurement can be seen here</p>\n    </ion-row>\n      \n\n  </div>\n  <div class=\"ion-no-padding\">\n    <hr />\n  </div>\n  <div class=\"dtldreport2\">\n  <ion-row>\n    <ion-col size=\"8\">\n      <p>120/75 mm Hg</p>\n    </ion-col>\n    <ion-col size=\"4\">\n      <p class=\"dtldtime\">6:35 am</p>\n      \n    </ion-col>\n    <p class=\"dtldnote\">Notes details here. Notes about the entry taken at the time of measurement can be seen here</p>\n    </ion-row>\n  </div>\n\n  <div class=\"dtldreport\">\n    <div class=\"dtldreportdate\">\n    <p>Friday, 22 May 2020</p>\n  </div>\n  <ion-row>\n    <ion-col size=\"8\">\n      <p>116/70 mm Hg</p>\n    </ion-col>\n    <ion-col size=\"4\">\n      <p class=\"dtldtime\">9:30 am</p>\n      \n    </ion-col>\n    <p class=\"dtldnote\">Notes details here. Notes about the entry taken at the time of measurement can be seen here</p>\n    </ion-row>\n      \n\n  </div>\n  <div class=\"ion-no-padding\">\n    <hr />\n  </div>\n  <div class=\"dtldreport2\">\n  <ion-row>\n    <ion-col size=\"8\">\n      <p>120/75 mm Hg</p>\n    </ion-col>\n    <ion-col size=\"4\">\n      <p class=\"dtldtime\">6:35 am</p>\n      \n    </ion-col>\n    <p class=\"dtldnote\">Notes details here. Notes about the entry taken at the time of measurement can be seen here</p>\n    </ion-row>\n  </div>\n \n \n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/bookvitals/bloodpressuredetailedview/bloodpressuredetailedview-routing.module.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/pages/bookvitals/bloodpressuredetailedview/bloodpressuredetailedview-routing.module.ts ***!
    \********************************************************************************************************/

  /*! exports provided: BloodpressuredetailedviewPageRoutingModule */

  /***/
  function srcAppPagesBookvitalsBloodpressuredetailedviewBloodpressuredetailedviewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BloodpressuredetailedviewPageRoutingModule", function () {
      return BloodpressuredetailedviewPageRoutingModule;
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


    var _bloodpressuredetailedview_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bloodpressuredetailedview.page */
    "./src/app/pages/bookvitals/bloodpressuredetailedview/bloodpressuredetailedview.page.ts");

    var routes = [{
      path: '',
      component: _bloodpressuredetailedview_page__WEBPACK_IMPORTED_MODULE_3__["BloodpressuredetailedviewPage"]
    }];

    var BloodpressuredetailedviewPageRoutingModule = function BloodpressuredetailedviewPageRoutingModule() {
      _classCallCheck(this, BloodpressuredetailedviewPageRoutingModule);
    };

    BloodpressuredetailedviewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BloodpressuredetailedviewPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/bookvitals/bloodpressuredetailedview/bloodpressuredetailedview.module.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/pages/bookvitals/bloodpressuredetailedview/bloodpressuredetailedview.module.ts ***!
    \************************************************************************************************/

  /*! exports provided: BloodpressuredetailedviewPageModule */

  /***/
  function srcAppPagesBookvitalsBloodpressuredetailedviewBloodpressuredetailedviewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BloodpressuredetailedviewPageModule", function () {
      return BloodpressuredetailedviewPageModule;
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


    var _bloodpressuredetailedview_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./bloodpressuredetailedview-routing.module */
    "./src/app/pages/bookvitals/bloodpressuredetailedview/bloodpressuredetailedview-routing.module.ts");
    /* harmony import */


    var _bloodpressuredetailedview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./bloodpressuredetailedview.page */
    "./src/app/pages/bookvitals/bloodpressuredetailedview/bloodpressuredetailedview.page.ts");

    var BloodpressuredetailedviewPageModule = function BloodpressuredetailedviewPageModule() {
      _classCallCheck(this, BloodpressuredetailedviewPageModule);
    };

    BloodpressuredetailedviewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _bloodpressuredetailedview_routing_module__WEBPACK_IMPORTED_MODULE_5__["BloodpressuredetailedviewPageRoutingModule"]],
      declarations: [_bloodpressuredetailedview_page__WEBPACK_IMPORTED_MODULE_6__["BloodpressuredetailedviewPage"]]
    })], BloodpressuredetailedviewPageModule);
    /***/
  },

  /***/
  "./src/app/pages/bookvitals/bloodpressuredetailedview/bloodpressuredetailedview.page.scss":
  /*!************************************************************************************************!*\
    !*** ./src/app/pages/bookvitals/bloodpressuredetailedview/bloodpressuredetailedview.page.scss ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesBookvitalsBloodpressuredetailedviewBloodpressuredetailedviewPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".shareicon {\n  font-size: 28px;\n  padding: 0 0 0 25px;\n}\n\n.weekselect ion-item {\n  padding: 0 0 0 7px;\n}\n\n.weekselect ion-item ion-label {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  /* identical to box height */\n  display: flex;\n  align-items: center;\n  color: #000000;\n}\n\n.weekselect p {\n  margin: 0;\n  padding: 0 0 0 24px;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  /* identical to box height */\n  display: flex;\n  align-items: center;\n  /* Dark Grey */\n  color: #7E7E7E;\n}\n\n.bpchart {\n  width: 326px;\n  height: 158px;\n  background-color: red;\n  margin: 0 0 0 24px;\n}\n\n.dtldreport {\n  padding: 45px 24px 0px 24px;\n}\n\n.dtldreport .dtldreportdate {\n  width: 140px;\n  height: 26px;\n  background: #2AE4F0;\n  opacity: 0.1;\n  border-radius: 4px;\n}\n\n.dtldreport .dtldreportdate p {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  /* identical to box height */\n  display: flex;\n  align-items: center;\n  text-align: center;\n  /* Direct Black */\n  color: #1A1A1A;\n  margin: 0;\n}\n\n.dtldtime {\n  padding: 0 0 0 50px;\n}\n\n.dtldnote {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  display: flex;\n  align-items: center;\n  /* Dark Grey */\n  color: #7E7E7E;\n  margin: 0;\n}\n\nhr {\n  height: 1px;\n  border-width: 0;\n  box-sizing: content-box;\n  /* background: aquamarine; */\n  background: #e0e0e0;\n  margin: 8px 24px;\n}\n\n.dtldreport2 {\n  padding: 0px 24px 0 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvYm9va3ZpdGFscy9ibG9vZHByZXNzdXJlZGV0YWlsZWR2aWV3L2Jsb29kcHJlc3N1cmVkZXRhaWxlZHZpZXcucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ib29rdml0YWxzL2Jsb29kcHJlc3N1cmVkZXRhaWxlZHZpZXcvYmxvb2RwcmVzc3VyZWRldGFpbGVkdmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFSTtFQWNJLGtCQUFBO0FDWlI7O0FEQVE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxjQUFBO0FDQVo7O0FES0k7RUFDSSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNSLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxjQUFBO0VBRUEsY0FBQTtBQ05BOztBRFVBO0VBQ0ksWUFBQTtFQUNKLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDUEE7O0FEU0E7RUFDSSwyQkFBQTtBQ05KOztBRE9JO0VBQ0ksWUFBQTtFQUNSLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0xBOztBRE1BO0VBQ0ksa0JBQUE7RUFDSixnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxpQkFBQTtFQUVBLGNBQUE7RUFDQSxTQUFBO0FDUEE7O0FEWUE7RUFDSSxtQkFBQTtBQ1RKOztBRFdBO0VBQ0ksa0JBQUE7RUFDSixtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxjQUFBO0VBQ0EsU0FBQTtBQ1ZBOztBRFlBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ1RKOztBRFdFO0VBQ0Usd0JBQUE7QUNSSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jvb2t2aXRhbHMvYmxvb2RwcmVzc3VyZWRldGFpbGVkdmlldy9ibG9vZHByZXNzdXJlZGV0YWlsZWR2aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaGFyZWljb257XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIHBhZGRpbmc6IDAgMCAwIDI1cHg7XG59XG4ud2Vla3NlbGVjdHtcbiAgICBpb24taXRlbXtcblxuICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgICAgICAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIH1cbiAgICAgICAgcGFkZGluZzogMCAwIDAgN3B4O1xuICAgICAgICBcbiAgICB9XG4gICAgcHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwIDAgMCAyNHB4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG5mb250LXdlaWdodDogbm9ybWFsO1xuZm9udC1zaXplOiAxNHB4O1xubGluZS1oZWlnaHQ6IDE3cHg7XG4vKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuXG5kaXNwbGF5OiBmbGV4O1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuLyogRGFyayBHcmV5ICovXG5cbmNvbG9yOiAjN0U3RTdFO1xuICAgIH1cbn1cblxuLmJwY2hhcnR7XG4gICAgd2lkdGg6IDMyNnB4O1xuaGVpZ2h0OiAxNThweDtcbmJhY2tncm91bmQtY29sb3I6IHJlZDtcbm1hcmdpbjogMCAwIDAgMjRweDtcbn1cbi5kdGxkcmVwb3J0e1xuICAgIHBhZGRpbmc6IDQ1cHggMjRweCAwcHggMjRweDtcbiAgICAuZHRsZHJlcG9ydGRhdGV7XG4gICAgICAgIHdpZHRoOiAxNDBweDtcbmhlaWdodDogMjZweDtcbmJhY2tncm91bmQ6ICMyQUU0RjA7XG5vcGFjaXR5OiAwLjE7XG5ib3JkZXItcmFkaXVzOiA0cHg7XG5we1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbmZvbnQtd2VpZ2h0OiA1MDA7XG5mb250LXNpemU6IDE0cHg7XG5saW5lLWhlaWdodDogMTdweDtcbi8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG5cbmRpc3BsYXk6IGZsZXg7XG5hbGlnbi1pdGVtczogY2VudGVyO1xudGV4dC1hbGlnbjogY2VudGVyO1xuXG4vKiBEaXJlY3QgQmxhY2sgKi9cblxuY29sb3I6ICMxQTFBMUE7XG5tYXJnaW46IDA7XG4gICAgICAgIFxufVxuICAgIH1cbn1cbi5kdGxkdGltZXtcbiAgICBwYWRkaW5nOiAwIDAgMCA1MHB4XG59XG4uZHRsZG5vdGV7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuZm9udC13ZWlnaHQ6IG5vcm1hbDtcbmZvbnQtc2l6ZTogMTRweDtcbmxpbmUtaGVpZ2h0OiAxN3B4O1xuZGlzcGxheTogZmxleDtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbi8qIERhcmsgR3JleSAqL1xuXG5jb2xvcjogIzdFN0U3RTtcbm1hcmdpbjogMDtcbn1cbmhyIHtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBib3JkZXItd2lkdGg6IDA7XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgLyogYmFja2dyb3VuZDogYXF1YW1hcmluZTsgKi9cbiAgICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xuICAgIG1hcmdpbjogOHB4IDI0cHg7XG4gIH1cbiAgLmR0bGRyZXBvcnQye1xuICAgIHBhZGRpbmc6IDBweCAyNHB4IDAgMjRweDtcbiAgfSIsIi5zaGFyZWljb24ge1xuICBmb250LXNpemU6IDI4cHg7XG4gIHBhZGRpbmc6IDAgMCAwIDI1cHg7XG59XG5cbi53ZWVrc2VsZWN0IGlvbi1pdGVtIHtcbiAgcGFkZGluZzogMCAwIDAgN3B4O1xufVxuLndlZWtzZWxlY3QgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi53ZWVrc2VsZWN0IHAge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMCAwIDI0cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLyogRGFyayBHcmV5ICovXG4gIGNvbG9yOiAjN0U3RTdFO1xufVxuXG4uYnBjaGFydCB7XG4gIHdpZHRoOiAzMjZweDtcbiAgaGVpZ2h0OiAxNThweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBtYXJnaW46IDAgMCAwIDI0cHg7XG59XG5cbi5kdGxkcmVwb3J0IHtcbiAgcGFkZGluZzogNDVweCAyNHB4IDBweCAyNHB4O1xufVxuLmR0bGRyZXBvcnQgLmR0bGRyZXBvcnRkYXRlIHtcbiAgd2lkdGg6IDE0MHB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGJhY2tncm91bmQ6ICMyQUU0RjA7XG4gIG9wYWNpdHk6IDAuMTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmR0bGRyZXBvcnQgLmR0bGRyZXBvcnRkYXRlIHAge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyogRGlyZWN0IEJsYWNrICovXG4gIGNvbG9yOiAjMUExQTFBO1xuICBtYXJnaW46IDA7XG59XG5cbi5kdGxkdGltZSB7XG4gIHBhZGRpbmc6IDAgMCAwIDUwcHg7XG59XG5cbi5kdGxkbm90ZSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLyogRGFyayBHcmV5ICovXG4gIGNvbG9yOiAjN0U3RTdFO1xuICBtYXJnaW46IDA7XG59XG5cbmhyIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlci13aWR0aDogMDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIC8qIGJhY2tncm91bmQ6IGFxdWFtYXJpbmU7ICovXG4gIGJhY2tncm91bmQ6ICNlMGUwZTA7XG4gIG1hcmdpbjogOHB4IDI0cHg7XG59XG5cbi5kdGxkcmVwb3J0MiB7XG4gIHBhZGRpbmc6IDBweCAyNHB4IDAgMjRweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/bookvitals/bloodpressuredetailedview/bloodpressuredetailedview.page.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/pages/bookvitals/bloodpressuredetailedview/bloodpressuredetailedview.page.ts ***!
    \**********************************************************************************************/

  /*! exports provided: BloodpressuredetailedviewPage */

  /***/
  function srcAppPagesBookvitalsBloodpressuredetailedviewBloodpressuredetailedviewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BloodpressuredetailedviewPage", function () {
      return BloodpressuredetailedviewPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BloodpressuredetailedviewPage = /*#__PURE__*/function () {
      function BloodpressuredetailedviewPage() {
        _classCallCheck(this, BloodpressuredetailedviewPage);
      }

      _createClass(BloodpressuredetailedviewPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BloodpressuredetailedviewPage;
    }();

    BloodpressuredetailedviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bloodpressuredetailedview',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./bloodpressuredetailedview.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookvitals/bloodpressuredetailedview/bloodpressuredetailedview.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./bloodpressuredetailedview.page.scss */
      "./src/app/pages/bookvitals/bloodpressuredetailedview/bloodpressuredetailedview.page.scss"))["default"]]
    })], BloodpressuredetailedviewPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-bookvitals-bloodpressuredetailedview-bloodpressuredetailedview-module-es5.js.map