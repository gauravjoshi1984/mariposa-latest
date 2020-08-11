function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-configcare-schedule-exercise-schedule-exercise-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configcare/schedule-exercise/schedule-exercise.page.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configcare/schedule-exercise/schedule-exercise.page.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesConfigcareScheduleExerciseScheduleExercisePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"title-text\">\n      Medication\n    </ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<ion-header mode=\"md\">\n  <ion-toolbar class=\"headtoolbar\">\n    \n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-toolbar>\n            <ion-buttons slot=\"start\">\n              <ion-button [routerLink]=\"'/../'\" routerDirection=\"backward\">\n              <ion-icon slot=\"icon-only\" src=\"assets/back.svg\"></ion-icon>\n            </ion-button>\n            </ion-buttons>\n          <!-- <ion-buttons slot=\"start\">\n            <ion-back-button color=\"mdblack\" icon=\"chevron-back-outline\" defaultHref=\"admin-sign-in\"></ion-back-button>\n          </ion-buttons> -->\n        </ion-toolbar> \n        \n        </ion-col>\n        <ion-col size=\"8\">\n          <div>\n            <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\">Exercise/Physical Therapy</ion-text>\n           \n          </div> \n        </ion-col>\n        <ion-col>\n          <div>\n          <ion-text \n          [routerLink]=\"'/configcare/deleteexercise'\"\n          style=\"float: right;\n          font-weight: 600;\n          font-size: 12px;\n          line-height: 14px;\n          color: #4137FF;\n          margin-top: 3px;\">EDIT\n          </ion-text>\n          </div>\n        </ion-col>\n        \n      </ion-row>\n   \n  </ion-toolbar>\n</ion-header>\n\n\n\n\n<ion-content>\n  \n\n\n  <div style=\"padding: 0px;\" *ngFor=\"let item of ccexerciseinfo\">\n  <ion-card style=\"width: 105%;right: 8px;margin-top:10px;\">\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row>\n        <ion-col size=\"7\">\n          <p class=\"text1\">{{item.type}}</p>  \n        </ion-col>\n        <ion-col size=\"5\" style=\"text-align: end;\">\n          <p class=\"text1\">{{item.frequency}}</p>     \n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-top:13px ;\">\n        <ion-col size=\"8\">         \n          <p class=\"text2\">{{item.frequencyinaday}}</p>\n        </ion-col>\n        <ion-col size=\"4\" style=\"text-align: end;\">   \n          <p class=\"text2\">Time: <span>{{item.time}}</span></p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n</div>\n\n\n</ion-content>\n\n<ion-footer mode=\"md\">\n  <ion-toolbar>\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-button\n            color=\"primary\"\n            expand=\"block\"\n            fill=\"outline\"\n            class=\"submitbtn lbtn\"\n            shape=\"round\"\n          >\n            ADD MORE\n          </ion-button></ion-col\n        >\n        <ion-col size=\"6\">\n          <ion-button\n            color=\"primary\"\n            expand=\"block\"\n            fill=\"solid\"\n            class=\"submitbtn rbtn\"\n            shape=\"round\"\n          >\n            SUBMIT\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/pages/configcare/schedule-exercise/schedule-exercise-routing.module.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/pages/configcare/schedule-exercise/schedule-exercise-routing.module.ts ***!
    \****************************************************************************************/

  /*! exports provided: ScheduleExercisePageRoutingModule */

  /***/
  function srcAppPagesConfigcareScheduleExerciseScheduleExerciseRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScheduleExercisePageRoutingModule", function () {
      return ScheduleExercisePageRoutingModule;
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


    var _schedule_exercise_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./schedule-exercise.page */
    "./src/app/pages/configcare/schedule-exercise/schedule-exercise.page.ts");

    var routes = [{
      path: '',
      component: _schedule_exercise_page__WEBPACK_IMPORTED_MODULE_3__["ScheduleExercisePage"]
    }];

    var ScheduleExercisePageRoutingModule = function ScheduleExercisePageRoutingModule() {
      _classCallCheck(this, ScheduleExercisePageRoutingModule);
    };

    ScheduleExercisePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ScheduleExercisePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/configcare/schedule-exercise/schedule-exercise.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/configcare/schedule-exercise/schedule-exercise.module.ts ***!
    \********************************************************************************/

  /*! exports provided: ScheduleExercisePageModule */

  /***/
  function srcAppPagesConfigcareScheduleExerciseScheduleExerciseModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScheduleExercisePageModule", function () {
      return ScheduleExercisePageModule;
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


    var _schedule_exercise_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./schedule-exercise-routing.module */
    "./src/app/pages/configcare/schedule-exercise/schedule-exercise-routing.module.ts");
    /* harmony import */


    var _schedule_exercise_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./schedule-exercise.page */
    "./src/app/pages/configcare/schedule-exercise/schedule-exercise.page.ts");

    var ScheduleExercisePageModule = function ScheduleExercisePageModule() {
      _classCallCheck(this, ScheduleExercisePageModule);
    };

    ScheduleExercisePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _schedule_exercise_routing_module__WEBPACK_IMPORTED_MODULE_5__["ScheduleExercisePageRoutingModule"]],
      declarations: [_schedule_exercise_page__WEBPACK_IMPORTED_MODULE_6__["ScheduleExercisePage"]]
    })], ScheduleExercisePageModule);
    /***/
  },

  /***/
  "./src/app/pages/configcare/schedule-exercise/schedule-exercise.page.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/configcare/schedule-exercise/schedule-exercise.page.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesConfigcareScheduleExerciseScheduleExercisePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --padding-bottom: 24px;\n  --padding-end: 24px;\n  --padding-start: 24px;\n  --padding-top: 19px;\n}\n\n.listtitle {\n  margin: 0;\n  padding-bottom: 12px;\n}\n\nion-card {\n  background: #ffffff;\n  /* Medium Grey */\n  border: 0.4px solid #b8b8b8;\n  box-sizing: border-box;\n  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.08), 0px 0px 1px rgba(0, 0, 0, 0.25);\n  border-radius: 8px;\n  padding: 16px;\n  margin: 0;\n}\n\n.text1 {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  /* identical to box height */\n  /* Direct Black */\n  color: #1a1a1a;\n  margin: 0;\n}\n\n.text2 {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  /* identical to box height */\n  /* Dark Grey */\n  color: #7e7e7e;\n  margin: 0;\n}\n\n.text2 span {\n  color: #1a1a1a !important;\n}\n\n.submitbtn {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 16px;\n  text-align: center;\n  color: #ffffff;\n  --border-radius: 8px;\n  width: 82.5%;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  height: 44px;\n}\n\n.lbtn {\n  margin-left: 24px;\n  --border-width: 1px;\n}\n\n.rbtn {\n  margin-right: 24px;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvY29uZmlnY2FyZS9zY2hlZHVsZS1leGVyY2lzZS9zY2hlZHVsZS1leGVyY2lzZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvbmZpZ2NhcmUvc2NoZWR1bGUtZXhlcmNpc2Uvc2NoZWR1bGUtZXhlcmNpc2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDRTtFQUNFLFNBQUE7RUFDQSxvQkFBQTtBQ0VKOztBREFFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUVBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0RUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUNFSjs7QURBRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUVBLGlCQUFBO0VBRUEsY0FBQTtFQUNBLFNBQUE7QUNDSjs7QURDRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUVBLGNBQUE7RUFFQSxjQUFBO0VBQ0EsU0FBQTtBQ0FKOztBRENJO0VBQ0UseUJBQUE7QUNDTjs7QURFRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURDRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURBRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29uZmlnY2FyZS9zY2hlZHVsZS1leGVyY2lzZS9zY2hlZHVsZS1leGVyY2lzZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMjRweDtcbiAgICAtLXBhZGRpbmctZW5kOiAyNHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMjRweDtcbiAgICAtLXBhZGRpbmctdG9wOiAxOXB4O1xuICB9XG4gIC5saXN0dGl0bGUge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgfVxuICBpb24tY2FyZCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAvKiBNZWRpdW0gR3JleSAqL1xuICBcbiAgICBib3JkZXI6IDAuNHB4IHNvbGlkICNiOGI4Yjg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDgpLCAwcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAudGV4dDEge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBcbiAgICAvKiBEaXJlY3QgQmxhY2sgKi9cbiAgXG4gICAgY29sb3I6ICMxYTFhMWE7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC50ZXh0MiB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIFxuICAgIC8qIERhcmsgR3JleSAqL1xuICBcbiAgICBjb2xvcjogIzdlN2U3ZTtcbiAgICBtYXJnaW46IDA7XG4gICAgc3BhbiB7XG4gICAgICBjb2xvcjogIzFhMWExYSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICAuc3VibWl0YnRuIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgd2lkdGg6IDgyLjUlO1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gIH1cbiAgLmxidG4ge1xuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIH1cbiAgLnJidG4ge1xuICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbiAgIiwiaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAtLXBhZGRpbmctZW5kOiAyNHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDI0cHg7XG4gIC0tcGFkZGluZy10b3A6IDE5cHg7XG59XG5cbi5saXN0dGl0bGUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xufVxuXG5pb24tY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIC8qIE1lZGl1bSBHcmV5ICovXG4gIGJvcmRlcjogMC40cHggc29saWQgI2I4YjhiODtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDFweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA4KSwgMHB4IDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBtYXJnaW46IDA7XG59XG5cbi50ZXh0MSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgLyogRGlyZWN0IEJsYWNrICovXG4gIGNvbG9yOiAjMWExYTFhO1xuICBtYXJnaW46IDA7XG59XG5cbi50ZXh0MiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgLyogRGFyayBHcmV5ICovXG4gIGNvbG9yOiAjN2U3ZTdlO1xuICBtYXJnaW46IDA7XG59XG4udGV4dDIgc3BhbiB7XG4gIGNvbG9yOiAjMWExYTFhICFpbXBvcnRhbnQ7XG59XG5cbi5zdWJtaXRidG4ge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDgyLjUlO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBoZWlnaHQ6IDQ0cHg7XG59XG5cbi5sYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG59XG5cbi5yYnRuIHtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICBmbG9hdDogcmlnaHQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/configcare/schedule-exercise/schedule-exercise.page.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/configcare/schedule-exercise/schedule-exercise.page.ts ***!
    \******************************************************************************/

  /*! exports provided: ScheduleExercisePage */

  /***/
  function srcAppPagesConfigcareScheduleExerciseScheduleExercisePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScheduleExercisePage", function () {
      return ScheduleExercisePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ScheduleExercisePage = /*#__PURE__*/function () {
      function ScheduleExercisePage() {
        _classCallCheck(this, ScheduleExercisePage);

        this.ccexerciseinfo = [{
          type: "Physical Therapy",
          frequency: "Daily",
          frequencyinaday: "Once",
          time: "8:30 AM"
        }, {
          type: "Yoga",
          frequency: "Daily",
          frequencyinaday: "Once",
          time: "6:30 AM"
        }];
      }

      _createClass(ScheduleExercisePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ScheduleExercisePage;
    }();

    ScheduleExercisePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-schedule-exercise',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./schedule-exercise.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configcare/schedule-exercise/schedule-exercise.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./schedule-exercise.page.scss */
      "./src/app/pages/configcare/schedule-exercise/schedule-exercise.page.scss"))["default"]]
    })], ScheduleExercisePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-configcare-schedule-exercise-schedule-exercise-module-es5.js.map