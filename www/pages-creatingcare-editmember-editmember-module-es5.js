function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-creatingcare-editmember-editmember-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/creatingcare/editmember/editmember.page.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/creatingcare/editmember/editmember.page.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCreatingcareEditmemberEditmemberPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  \n  <ion-toolbar class=\"headtoolbar\">\n    \n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-toolbar>\n            <ion-buttons slot=\"start\">\n              <m-backbutton></m-backbutton>\n            </ion-buttons>\n        </ion-toolbar>       \n        </ion-col>\n        <ion-col size=\"8\">\n          <div>\n            <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\">Edit Members</ion-text>\n          </div> \n        </ion-col>\n      </ion-row>\n   \n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-grid style=\"padding-top:14px;padding-left: 6px;padding-right: 6px;\">\n  \n  <ion-card class=\"cardinfo\">\n    \n      <ion-row>\n        <ion-col id=\"infolabel\">\n          <ion-text ><b>David Doe,</b> Father</ion-text>\n          <ion-text id=\"email\"><br>daviddoefather@gmail.com</ion-text>\n        </ion-col>\n        <ion-col class=\"pen\">\n          <ion-buttons>\n            <ion-button>\n              <ion-icon slot=\"icon-only\" src=\"assets/MariposaIcons/pen.svg\"></ion-icon>\n            </ion-button>\n          </ion-buttons>    \n        </ion-col>\n      </ion-row>\n      <ion-row [hidden]=\"true\">\n        <ion-text class=\"assesstime\">Assessment Completed on: 12 May 2020</ion-text>\n      </ion-row>\n      <ion-row>\n        <ion-col style=\"padding-bottom: 0px;\">\n          <ion-button class=\"assessment\" [routerLink]=\"'/assessment/careneeds'\">START ASSESSMENT</ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row >\n        <ion-col [hidden]=\"false\" style=\"padding-bottom: 0px;\">   \n            <ion-button class=\"pending\">\n              <ion-icon \n              slot=\"icon-only\" \n              src=\"assets/MariposaIcons/Error.svg\"></ion-icon>\n              Invitation Pending\n            </ion-button> \n        </ion-col>\n        <ion-col style=\"padding-bottom: 0px;\">\n          <ion-chip color=\"mmgrey\" outline style=\"float:right;border-radius: 8px;\">\n            <ion-label >SENIOR</ion-label>\n          </ion-chip>\n        </ion-col>\n      </ion-row>\n    \n  </ion-card>\n\n  <ion-card class=\"cardinfo\">\n    \n      <ion-row >\n        <ion-col id=\"infolabel\">\n          <ion-text ><b>John Doe</b> Father</ion-text>\n          <ion-text id=\"email\"><br>john.doe@gmail.com</ion-text>\n        </ion-col>\n        <ion-col class=\"pen\">\n          <ion-buttons>\n            <ion-button>\n              <ion-icon slot=\"icon-only\" src=\"assets/MariposaIcons/pen.svg\"></ion-icon>\n            </ion-button>\n          </ion-buttons>    \n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col style=\"padding: 0px;\">\n          <ion-chip color=\"mmgrey\" outline style=\"float:right;border-radius: 8px;\">\n            <ion-label color=\"mdgrey\">ADMIN</ion-label>\n          </ion-chip>\n        </ion-col>\n      </ion-row>\n    \n  </ion-card>\n</ion-grid>\n\n  <ion-grid>\n  <div id=\"button\">\n    <ion-button type=\"submit\" [routerLink]=\"'/carecircle/addmembers'\" class=\"btnwhite\" expand=\"block\" >ADD MEMBERS</ion-button>\n  </div>\n</ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/creatingcare/editmember/editmember-routing.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/creatingcare/editmember/editmember-routing.module.ts ***!
    \****************************************************************************/

  /*! exports provided: EditmemberPageRoutingModule */

  /***/
  function srcAppPagesCreatingcareEditmemberEditmemberRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditmemberPageRoutingModule", function () {
      return EditmemberPageRoutingModule;
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


    var _editmember_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./editmember.page */
    "./src/app/pages/creatingcare/editmember/editmember.page.ts");

    var routes = [{
      path: '',
      component: _editmember_page__WEBPACK_IMPORTED_MODULE_3__["EditmemberPage"]
    }];

    var EditmemberPageRoutingModule = function EditmemberPageRoutingModule() {
      _classCallCheck(this, EditmemberPageRoutingModule);
    };

    EditmemberPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditmemberPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/creatingcare/editmember/editmember.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/creatingcare/editmember/editmember.module.ts ***!
    \********************************************************************/

  /*! exports provided: EditmemberPageModule */

  /***/
  function srcAppPagesCreatingcareEditmemberEditmemberModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditmemberPageModule", function () {
      return EditmemberPageModule;
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


    var _editmember_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./editmember-routing.module */
    "./src/app/pages/creatingcare/editmember/editmember-routing.module.ts");
    /* harmony import */


    var _editmember_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./editmember.page */
    "./src/app/pages/creatingcare/editmember/editmember.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/pages/shared/shared.module.ts");

    var EditmemberPageModule = function EditmemberPageModule() {
      _classCallCheck(this, EditmemberPageModule);
    };

    EditmemberPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _editmember_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditmemberPageRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      declarations: [_editmember_page__WEBPACK_IMPORTED_MODULE_6__["EditmemberPage"]]
    })], EditmemberPageModule);
    /***/
  },

  /***/
  "./src/app/pages/creatingcare/editmember/editmember.page.scss":
  /*!********************************************************************!*\
    !*** ./src/app/pages/creatingcare/editmember/editmember.page.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCreatingcareEditmemberEditmemberPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cardinfo {\n  box-shadow: none;\n  border-style: solid;\n  border-width: thin;\n  border-radius: 8px;\n  border-color: #B8B8B8;\n  height: auto;\n  width: auto;\n  padding-bottom: 20px;\n}\n.cardinfo .assessment {\n  height: 44px;\n  width: auto;\n  margin-left: 16px;\n  margin-bottom: 0px;\n  margin-top: 6px;\n}\n.cardinfo ion-chip {\n  height: 28px;\n  width: auto;\n  text-align: center;\n  margin-right: 12px;\n  margin-bottom: 0px;\n}\n.cardinfo ion-chip ion-label {\n  font-size: 12px;\n  list-style: 14px;\n  color: mdgrey;\n}\n.cardinfo ion-text {\n  color: black;\n  font-size: 16px;\n  line-height: 20px;\n  font-weight: normal;\n  font-style: normal;\n}\n.cardinfo #email {\n  font-size: 14px;\n  line-height: 20px;\n  font-style: normal;\n  font-weight: normal;\n}\n.cardinfo #infolabel {\n  margin-left: 16px;\n  margin-top: 7px;\n}\n.cardinfo .assesstime {\n  color: #7E7E7E;\n  line-height: 14px;\n  font-size: 12px;\n  margin-left: 16px;\n  margin-top: 3px;\n  margin-bottom: 5px;\n}\n.pending {\n  --background:#B8B8B8;\n  --border-radius:48px;\n  height: 24px;\n  width: auto;\n  font-size: 12px;\n  line-height: 14px;\n  margin-left: 16px;\n  margin-bottom: 0px;\n  text-transform: none;\n}\n.pending ion-icon {\n  zoom: 0.8;\n  margin-right: 4px;\n}\n.pen ion-buttons {\n  float: right;\n}\n.pen ion-icon {\n  zoom: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvY3JlYXRpbmdjYXJlL2VkaXRtZW1iZXIvZWRpdG1lbWJlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NyZWF0aW5nY2FyZS9lZGl0bWVtYmVyL2VkaXRtZW1iZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUNBSjtBREVJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0FSO0FESUk7RUFFSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0hSO0FET1E7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDTlo7QURXSTtFQUVJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDVlI7QURhSTtFQUVJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNaUjtBRGVJO0VBRUksaUJBQUE7RUFDQSxlQUFBO0FDZFI7QURrQkk7RUFFSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNqQlI7QURxQkE7RUFDSSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNsQk47QURvQk07RUFDSSxTQUFBO0VBQ0EsaUJBQUE7QUNsQlY7QUR3Qkk7RUFDSSxZQUFBO0FDckJSO0FEdUJJO0VBQ0ksT0FBQTtBQ3JCUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWF0aW5nY2FyZS9lZGl0bWVtYmVyL2VkaXRtZW1iZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRpbmZve1xuXG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogdGhpbjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLWNvbG9yOiAjQjhCOEI4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDphdXRvO1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuXG4gICAgLmFzc2Vzc21lbnR7XG4gICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6NnB4O1xuXG4gICAgfVxuXG4gICAgaW9uLWNoaXB7XG5cbiAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgIFxuICAgICAgICBpb24tbGFiZWx7XG5cbiAgICAgICAgICAgIGZvbnQtc2l6ZToxMnB4O1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogMTRweDtcbiAgICAgICAgICAgIGNvbG9yOiBtZGdyZXk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGlvbi10ZXh0e1xuXG4gICAgICAgIGNvbG9yOmJsYWNrO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgfVxuXG4gICAgI2VtYWlse1xuXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG5cbiAgICAjaW5mb2xhYmVse1xuXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC5hc3Nlc3N0aW1le1xuXG4gICAgICAgIGNvbG9yOiAjN0U3RTdFO1xuICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxufVxuXG4ucGVuZGluZ3tcbiAgICAtLWJhY2tncm91bmQ6I0I4QjhCODtcbiAgICAtLWJvcmRlci1yYWRpdXM6NDhweDtcbiAgICAgIGhlaWdodDogMjRweDtcbiAgICAgIHdpZHRoOmF1dG87XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTowcHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcblxuICAgICAgaW9uLWljb257XG4gICAgICAgICAgem9vbTowLjg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgICB9XG59XG5cbi5wZW57XG5cbiAgICBpb24tYnV0dG9uc3tcbiAgICAgICAgZmxvYXQ6cmlnaHQ7XG4gICAgfVxuICAgIGlvbi1pY29ue1xuICAgICAgICB6b29tOiAxO1xuICAgIH1cbn1cblxuIiwiLmNhcmRpbmZvIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlci1jb2xvcjogI0I4QjhCODtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4uY2FyZGluZm8gLmFzc2Vzc21lbnQge1xuICBoZWlnaHQ6IDQ0cHg7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4uY2FyZGluZm8gaW9uLWNoaXAge1xuICBoZWlnaHQ6IDI4cHg7XG4gIHdpZHRoOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLmNhcmRpbmZvIGlvbi1jaGlwIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGlzdC1zdHlsZTogMTRweDtcbiAgY29sb3I6IG1kZ3JleTtcbn1cbi5jYXJkaW5mbyBpb24tdGV4dCB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLmNhcmRpbmZvICNlbWFpbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5jYXJkaW5mbyAjaW5mb2xhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDdweDtcbn1cbi5jYXJkaW5mbyAuYXNzZXNzdGltZSB7XG4gIGNvbG9yOiAjN0U3RTdFO1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5wZW5kaW5nIHtcbiAgLS1iYWNrZ3JvdW5kOiNCOEI4Qjg7XG4gIC0tYm9yZGVyLXJhZGl1czo0OHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiBhdXRvO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cbi5wZW5kaW5nIGlvbi1pY29uIHtcbiAgem9vbTogMC44O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuLnBlbiBpb24tYnV0dG9ucyB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5wZW4gaW9uLWljb24ge1xuICB6b29tOiAxO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/creatingcare/editmember/editmember.page.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/creatingcare/editmember/editmember.page.ts ***!
    \******************************************************************/

  /*! exports provided: EditmemberPage */

  /***/
  function srcAppPagesCreatingcareEditmemberEditmemberPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditmemberPage", function () {
      return EditmemberPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EditmemberPage = /*#__PURE__*/function () {
      function EditmemberPage() {
        _classCallCheck(this, EditmemberPage);
      }

      _createClass(EditmemberPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EditmemberPage;
    }();

    EditmemberPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-editmember',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./editmember.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/creatingcare/editmember/editmember.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./editmember.page.scss */
      "./src/app/pages/creatingcare/editmember/editmember.page.scss"))["default"]]
    })], EditmemberPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-creatingcare-editmember-editmember-module-es5.js.map