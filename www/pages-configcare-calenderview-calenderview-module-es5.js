function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-configcare-calenderview-calenderview-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configcare/calenderview/calenderview.page.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configcare/calenderview/calenderview.page.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesConfigcareCalenderviewCalenderviewPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"toolbarshadow\">\n    <ion-title mode=\"md\" class=\"title-text\">\n      Calender Week View\n    </ion-title>\n    <ion-buttons mode=\"md\" slot=\"end\">\n      <ion-button>\n        <ion-icon\n          mode=\"md\"\n          slot=\"icon-only\"\n          src=\"assets/MariposaIcons/Close icon.svg\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-grid fixed class=\"ion-no-padding\">\n      <ion-row>\n        <ion-col size=\"12\" class=\"chipcol\">\n          <div\n            color=\"primary\"\n            mode=\"ios\"\n            [ngClass]=\"item.name==selectedDay?'selectedchip':'unselectchip'\"\n            (click)=\"selectChip(item)\"\n            *ngFor=\"let item of daysList\"\n          >\n            <ion-label>{{item.name}}</ion-label>\n        </div>\n          <!-- <ion-chip class=\"unselectchip\" color=\"primary\" mode=\"ios\">\n            <ion-label>Tue</ion-label> </ion-chip\n          ><ion-chip class=\"unselectchip\" color=\"primary\" mode=\"ios\">\n            <ion-label>Wed</ion-label> </ion-chip\n          ><ion-chip class=\"unselectchip\" color=\"primary\" mode=\"ios\">\n            <ion-label>Thu</ion-label> </ion-chip\n          ><ion-chip class=\"unselectchip\" color=\"primary\" mode=\"ios\">\n            <ion-label>Fri</ion-label> </ion-chip\n          ><ion-chip class=\"unselectchip\" color=\"primary\" mode=\"ios\">\n            <ion-label>Sat</ion-label> </ion-chip\n          ><ion-chip class=\"unselectchip\" color=\"primary\" mode=\"ios\">\n            <ion-label>Sun</ion-label>\n          </ion-chip> -->\n        </ion-col>\n        <ion-col size=\"6\"></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid fixed class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col size=\"12\" class=\"timelinecol\" *ngFor=\"let item of timeLine\">\n        <h2 class=\"timePer\">{{item.time}}</h2>\n        <div\n          class=\"detailCard\"\n          [class.hidecard]=\"!item.card\"\n          [class.selectedCard]=\"item.selected\"\n        >\n          <h3 class=\"cardtitle\">{{item.name}}</h3>\n          <h3 class=\"carddesc\">{{item.desc}}</h3>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/configcare/calenderview/calenderview-routing.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/configcare/calenderview/calenderview-routing.module.ts ***!
    \******************************************************************************/

  /*! exports provided: CalenderviewPageRoutingModule */

  /***/
  function srcAppPagesConfigcareCalenderviewCalenderviewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalenderviewPageRoutingModule", function () {
      return CalenderviewPageRoutingModule;
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


    var _calenderview_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./calenderview.page */
    "./src/app/pages/configcare/calenderview/calenderview.page.ts");

    var routes = [{
      path: '',
      component: _calenderview_page__WEBPACK_IMPORTED_MODULE_3__["CalenderviewPage"]
    }];

    var CalenderviewPageRoutingModule = function CalenderviewPageRoutingModule() {
      _classCallCheck(this, CalenderviewPageRoutingModule);
    };

    CalenderviewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CalenderviewPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/configcare/calenderview/calenderview.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/configcare/calenderview/calenderview.module.ts ***!
    \**********************************************************************/

  /*! exports provided: CalenderviewPageModule */

  /***/
  function srcAppPagesConfigcareCalenderviewCalenderviewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalenderviewPageModule", function () {
      return CalenderviewPageModule;
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


    var _calenderview_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./calenderview-routing.module */
    "./src/app/pages/configcare/calenderview/calenderview-routing.module.ts");
    /* harmony import */


    var _calenderview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./calenderview.page */
    "./src/app/pages/configcare/calenderview/calenderview.page.ts");

    var CalenderviewPageModule = function CalenderviewPageModule() {
      _classCallCheck(this, CalenderviewPageModule);
    };

    CalenderviewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _calenderview_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalenderviewPageRoutingModule"]],
      declarations: [_calenderview_page__WEBPACK_IMPORTED_MODULE_6__["CalenderviewPage"]]
    })], CalenderviewPageModule);
    /***/
  },

  /***/
  "./src/app/pages/configcare/calenderview/calenderview.page.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/configcare/calenderview/calenderview.page.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesConfigcareCalenderviewCalenderviewPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-title {\n  padding-left: 24px;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 19px;\n  color: #1a1a1a;\n}\n\nion-icon {\n  font-size: 24px !important;\n  zoom: 1;\n}\n\nion-chip {\n  margin: 0;\n}\n\n.unselectchip {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  /* identical to box height */\n  text-align: center;\n  text-transform: uppercase;\n  display: inline-block;\n  /* Dark Grey */\n  color: #7e7e7e;\n  background: white;\n  width: 14.2857142857%;\n  height: 17px;\n}\n\n.selectedchip {\n  font-style: normal;\n  display: inline-block;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  text-align: center;\n  text-transform: uppercase;\n  /* White */\n  color: #ffffff;\n  background: #4137ff;\n  border-radius: 8px;\n  width: 14.2857142857%;\n  height: 32px;\n  padding-top: 7px;\n}\n\n.chipcol {\n  padding-left: 13px;\n  padding-right: 13px;\n}\n\nion-content {\n  --padding-start: 24px !important;\n  --padding-end: 24px !important;\n  --padding-top: 16px;\n  --background: #f8f8f8;\n}\n\n.timelinecol {\n  display: inline-flex;\n  margin-bottom: 5px;\n}\n\n.hidecard {\n  visibility: hidden;\n}\n\n.timePer {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 14px;\n  /* identical to box height, or 100% */\n  /* Dark Grey */\n  color: #7e7e7e;\n  width: 20%;\n  margin: 0;\n  padding-top: 16px;\n}\n\n.selectedCard {\n  background: #4137ff !important;\n  /* Medium Grey */\n  border: 0.4px solid #b8b8b8 !important;\n  box-sizing: border-box;\n  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.08), 0px 0px 1px rgba(0, 0, 0, 0.25) !important;\n}\n\n.selectedCard .cardtitle {\n  color: #ffffff !important;\n}\n\n.selectedCard .carddesc {\n  color: #ffffff !important;\n}\n\n.detailCard {\n  background: #ffffff;\n  padding: 14px 0 12px 14px;\n  border: 0.4px solid #b8b8b8;\n  box-sizing: border-box;\n  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.08), 0px 0px 1px rgba(0, 0, 0, 0.25);\n  border-radius: 8px;\n  width: 278px;\n  height: 64px;\n}\n\n.detailCard .cardtitle {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  /* identical to box height */\n  /* Direct Black */\n  color: #1a1a1a;\n  margin: 0;\n}\n\n.detailCard .carddesc {\n  font-style: normal;\n  font-weight: normal;\n  padding-top: 5px;\n  font-size: 12px;\n  line-height: 14px;\n  margin: 0;\n  /* Dark Grey */\n  color: #7e7e7e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvY29uZmlnY2FyZS9jYWxlbmRlcnZpZXcvY2FsZW5kZXJ2aWV3LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29uZmlnY2FyZS9jYWxlbmRlcnZpZXcvY2FsZW5kZXJ2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7QUNBRjs7QURFQTtFQUNFLDBCQUFBO0VBQ0EsT0FBQTtBQ0NGOztBRENBO0VBQ0UsU0FBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBRUEsa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBRUEsY0FBQTtFQUVBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQ0RGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUVBLFVBQUE7RUFFQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDRkY7O0FESUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDREY7O0FER0E7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0FGOztBREVBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURBQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUVBLGNBQUE7RUFFQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQ0NGOztBRENBO0VBQ0UsOEJBQUE7RUFDQSxnQkFBQTtFQUVBLHNDQUFBO0VBQ0Esc0JBQUE7RUFDQSx1RkFBQTtBQ0NGOztBREFFO0VBQ0UseUJBQUE7QUNFSjs7QURBRTtFQUNFLHlCQUFBO0FDRUo7O0FEQ0E7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRFQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0VGOztBRERFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBRUEsaUJBQUE7RUFFQSxjQUFBO0VBQ0EsU0FBQTtBQ0NKOztBRENFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUVBLGNBQUE7RUFFQSxjQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb25maWdjYXJlL2NhbGVuZGVydmlldy9jYWxlbmRlcnZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuXG4gIGNvbG9yOiAjMWExYTFhO1xufVxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbiAgem9vbTogMTtcbn1cbmlvbi1jaGlwIHtcbiAgbWFyZ2luOiAwO1xuICAvLyAgIHBhZGRpbmc6IDA7XG59XG4udW5zZWxlY3RjaGlwIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gIC8qIERhcmsgR3JleSAqL1xuXG4gIGNvbG9yOiAjN2U3ZTdlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDE0LjI4NTcxNDI4NTclO1xuICBoZWlnaHQ6IDE3cHg7XG59XG4uc2VsZWN0ZWRjaGlwIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAvKiBXaGl0ZSAqL1xuXG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiAjNDEzN2ZmO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiAxNC4yODU3MTQyODU3JTtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwYWRkaW5nLXRvcDogN3B4O1xufVxuLmNoaXBjb2wge1xuICBwYWRkaW5nLWxlZnQ6IDEzcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEzcHg7XG59XG5pb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogMjRweCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctZW5kOiAyNHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy10b3A6IDE2cHg7XG4gIC0tYmFja2dyb3VuZDogI2Y4ZjhmODtcbn1cbi50aW1lbGluZWNvbCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uaGlkZWNhcmQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4udGltZVBlciB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDEwMCUgKi9cblxuICAvKiBEYXJrIEdyZXkgKi9cblxuICBjb2xvcjogIzdlN2U3ZTtcbiAgd2lkdGg6IDIwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogMTZweDtcbn1cbi5zZWxlY3RlZENhcmQge1xuICBiYWNrZ3JvdW5kOiAjNDEzN2ZmICFpbXBvcnRhbnQ7XG4gIC8qIE1lZGl1bSBHcmV5ICovXG5cbiAgYm9yZGVyOiAwLjRweCBzb2xpZCAjYjhiOGI4ICFpbXBvcnRhbnQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCksIDBweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSkgIWltcG9ydGFudDtcbiAgLmNhcmR0aXRsZSB7XG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgfVxuICAuY2FyZGRlc2Mge1xuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5kZXRhaWxDYXJkIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTRweCAwIDEycHggMTRweDtcbiAgYm9yZGVyOiAwLjRweCBzb2xpZCAjYjhiOGI4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2hhZG93OiAwcHggMXB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDgpLCAwcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiAyNzhweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICAuY2FyZHRpdGxlIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cblxuICAgIC8qIERpcmVjdCBCbGFjayAqL1xuXG4gICAgY29sb3I6ICMxYTFhMWE7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5jYXJkZGVzYyB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgbWFyZ2luOiAwO1xuXG4gICAgLyogRGFyayBHcmV5ICovXG5cbiAgICBjb2xvcjogIzdlN2U3ZTtcbiAgfVxufVxuXG4iLCJpb24tdGl0bGUge1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIGNvbG9yOiAjMWExYTFhO1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xuICB6b29tOiAxO1xufVxuXG5pb24tY2hpcCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnVuc2VsZWN0Y2hpcCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC8qIERhcmsgR3JleSAqL1xuICBjb2xvcjogIzdlN2U3ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHdpZHRoOiAxNC4yODU3MTQyODU3JTtcbiAgaGVpZ2h0OiAxN3B4O1xufVxuXG4uc2VsZWN0ZWRjaGlwIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgLyogV2hpdGUgKi9cbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6ICM0MTM3ZmY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDE0LjI4NTcxNDI4NTclO1xuICBoZWlnaHQ6IDMycHg7XG4gIHBhZGRpbmctdG9wOiA3cHg7XG59XG5cbi5jaGlwY29sIHtcbiAgcGFkZGluZy1sZWZ0OiAxM3B4O1xuICBwYWRkaW5nLXJpZ2h0OiAxM3B4O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogMjRweCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctZW5kOiAyNHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy10b3A6IDE2cHg7XG4gIC0tYmFja2dyb3VuZDogI2Y4ZjhmODtcbn1cblxuLnRpbWVsaW5lY29sIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmhpZGVjYXJkIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4udGltZVBlciB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDEwMCUgKi9cbiAgLyogRGFyayBHcmV5ICovXG4gIGNvbG9yOiAjN2U3ZTdlO1xuICB3aWR0aDogMjAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xufVxuXG4uc2VsZWN0ZWRDYXJkIHtcbiAgYmFja2dyb3VuZDogIzQxMzdmZiAhaW1wb3J0YW50O1xuICAvKiBNZWRpdW0gR3JleSAqL1xuICBib3JkZXI6IDAuNHB4IHNvbGlkICNiOGI4YjggIWltcG9ydGFudDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDFweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA4KSwgMHB4IDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KSAhaW1wb3J0YW50O1xufVxuLnNlbGVjdGVkQ2FyZCAuY2FyZHRpdGxlIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cbi5zZWxlY3RlZENhcmQgLmNhcmRkZXNjIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuLmRldGFpbENhcmQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAxNHB4IDAgMTJweCAxNHB4O1xuICBib3JkZXI6IDAuNHB4IHNvbGlkICNiOGI4Yjg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCksIDBweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDI3OHB4O1xuICBoZWlnaHQ6IDY0cHg7XG59XG4uZGV0YWlsQ2FyZCAuY2FyZHRpdGxlIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICAvKiBEaXJlY3QgQmxhY2sgKi9cbiAgY29sb3I6ICMxYTFhMWE7XG4gIG1hcmdpbjogMDtcbn1cbi5kZXRhaWxDYXJkIC5jYXJkZGVzYyB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgbWFyZ2luOiAwO1xuICAvKiBEYXJrIEdyZXkgKi9cbiAgY29sb3I6ICM3ZTdlN2U7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/configcare/calenderview/calenderview.page.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/configcare/calenderview/calenderview.page.ts ***!
    \********************************************************************/

  /*! exports provided: CalenderviewPage */

  /***/
  function srcAppPagesConfigcareCalenderviewCalenderviewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalenderviewPage", function () {
      return CalenderviewPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CalenderviewPage = /*#__PURE__*/function () {
      function CalenderviewPage() {
        _classCallCheck(this, CalenderviewPage);

        this.timeLine = [{
          name: "Bathing",
          desc: "message or instructions will be shown here",
          card: true,
          selected: false,
          time: "8 AM"
        }, {
          name: "Medication: Ibuprofine MKal",
          desc: "Dosage: 1 with warm water, Daily",
          card: true,
          selected: false,
          time: "9 AM"
        }, {
          name: "",
          desc: "",
          card: false,
          selected: false,
          time: "10 AM"
        }, {
          name: "Grooming",
          desc: "Every wednesday (beard trimming)",
          card: true,
          selected: true,
          time: "11 AM"
        }, {
          name: "",
          desc: "",
          card: false,
          selected: false,
          time: "12 PM"
        }, {
          name: "Lunch",
          desc: "Less sugar food is prescribed by the Dr.",
          card: true,
          selected: false,
          time: "01 PM"
        }, {
          name: "",
          desc: "",
          card: false,
          selected: false,
          time: "02 PM"
        }, {
          name: "",
          desc: "",
          card: false,
          selected: false,
          time: "03 PM"
        }, {
          name: "Exercise",
          desc: "Therapy will be needed for muscle...",
          card: true,
          selected: false,
          time: "04 PM"
        }, {
          name: "",
          desc: "",
          card: false,
          selected: false,
          time: "05 PM"
        }, {
          name: "",
          desc: "",
          card: false,
          selected: false,
          time: "06 PM"
        }];
        this.daysList = [{
          name: "Mon"
        }, {
          name: "Tue"
        }, {
          name: "Wed"
        }, {
          name: "Thu"
        }, {
          name: "Fri"
        }, {
          name: "Sat"
        }, {
          name: "Sun"
        }];
        this.selectedDay = "Mon";
      }

      _createClass(CalenderviewPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectChip",
        value: function selectChip(item) {
          this.selectedDay = item.name;
          this.timeLine.forEach(function (element) {
            if (element.name) {
              element.card = !element.card;
            }
          });
        }
      }]);

      return CalenderviewPage;
    }();

    CalenderviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-calenderview",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./calenderview.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configcare/calenderview/calenderview.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./calenderview.page.scss */
      "./src/app/pages/configcare/calenderview/calenderview.page.scss"))["default"]]
    })], CalenderviewPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-configcare-calenderview-calenderview-module-es5.js.map