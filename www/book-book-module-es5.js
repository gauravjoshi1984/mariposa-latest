function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["book-book-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookvitals/book/book.page.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookvitals/book/book.page.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesBookvitalsBookBookPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <div class=\"hdcontent\" style=\"display: flex;\">\n      <img src=\"assets/MariposaIcons/micon.svg\" alt=\"\" />\n      <ion-title mode=\"md\" class=\"title-text vitaltext\">\n        Books\n      </ion-title>\n    </div>\n    <ion-buttons mode=\"md\" slot=\"end\">\n      <ion-button>\n        <ion-icon\n          mode=\"md\"\n          src=\"assets/MariposaIcons/notification.svg\"\n        ></ion-icon>\n      </ion-button>\n      <ion-button>\n        <ion-icon\n          class=\"propic\"\n          mode=\"md\"\n          src=\"assets/MariposaIcons/profile_img.svg\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-icon slot=\"start\" src=\"assets/search.svg\"></ion-icon>\n          <ion-input\n            type=\"text\"\n            placeholder=\"Update On Today's Schedule\"\n          ></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col class=\"placesec\" size=\"12\">\n        <img src=\"assets/Empty_Book.svg\" />\n        <div style=\"padding-top: 16px;\">\n          Once a Caregiver starts updating schedule,\n        </div>\n        <div>\n          you will start seeing your feed\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/bookvitals/book/book-routing.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/bookvitals/book/book-routing.module.ts ***!
    \**************************************************************/

  /*! exports provided: BookPageRoutingModule */

  /***/
  function srcAppPagesBookvitalsBookBookRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookPageRoutingModule", function () {
      return BookPageRoutingModule;
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


    var _book_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./book.page */
    "./src/app/pages/bookvitals/book/book.page.ts");

    var routes = [{
      path: '',
      component: _book_page__WEBPACK_IMPORTED_MODULE_3__["BookPage"]
    }];

    var BookPageRoutingModule = function BookPageRoutingModule() {
      _classCallCheck(this, BookPageRoutingModule);
    };

    BookPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BookPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/bookvitals/book/book.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/bookvitals/book/book.module.ts ***!
    \******************************************************/

  /*! exports provided: BookPageModule */

  /***/
  function srcAppPagesBookvitalsBookBookModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookPageModule", function () {
      return BookPageModule;
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


    var _book_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./book-routing.module */
    "./src/app/pages/bookvitals/book/book-routing.module.ts");
    /* harmony import */


    var _book_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./book.page */
    "./src/app/pages/bookvitals/book/book.page.ts");

    var BookPageModule = function BookPageModule() {
      _classCallCheck(this, BookPageModule);
    };

    BookPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _book_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookPageRoutingModule"]],
      declarations: [_book_page__WEBPACK_IMPORTED_MODULE_6__["BookPage"]]
    })], BookPageModule);
    /***/
  },

  /***/
  "./src/app/pages/bookvitals/book/book.page.scss":
  /*!******************************************************!*\
    !*** ./src/app/pages/bookvitals/book/book.page.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesBookvitalsBookBookPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-icon {\n  zoom: 1;\n  font-size: 24px;\n}\n\n.propic {\n  font-size: 32px;\n}\n\n.hdcontent {\n  display: flex;\n  margin: 0 0 0 24px;\n  padding-top: 40px;\n}\n\n.vitaltext {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 19px;\n  /* identical to box height */\n  /* Mariposa Navy */\n  color: #010465;\n  margin: 0 0 0 8px;\n}\n\nion-content {\n  --padding-bottom: 18px;\n  --padding-end: 16px;\n  --padding-start: 18px;\n  --padding-top: 18px;\n  --background: #f8f8f8;\n}\n\nion-input {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 17px;\n  /* identical to box height */\n  text-transform: capitalize;\n  /* Dark Grey */\n  color: #7e7e7e;\n  --padding-start: 8px !important;\n  --padding-top: 13px;\n  --padding-bottom: 13px;\n  --placeholder-font-weight: 300;\n  --placeholder-font-style: 14px;\n  --placeholder-color: #7e7e7e;\n}\n\nion-item {\n  height: 46px;\n  --height: 44px;\n  background: #ffffff;\n  border: 0.4px solid #b8b8b8;\n  box-sizing: border-box;\n  border-radius: 74px;\n}\n\nion-item ion-icon {\n  margin: 0;\n}\n\n.placesec {\n  padding-top: 191px;\n  text-align: center;\n}\n\n.placesec img {\n  width: 64px;\n  height: 64px;\n}\n\n.placesec div {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  text-align: center;\n  /* Dark Grey */\n  color: #7e7e7e;\n}\n\nion-toolbar {\n  height: 88px;\n}\n\nion-toolbar ion-buttons {\n  padding-top: 40px;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvYm9va3ZpdGFscy9ib29rL2Jvb2sucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ib29rdml0YWxzL2Jvb2svYm9vay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxPQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtBQ0VGOztBREFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNHRjs7QUREQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUVBLGtCQUFBO0VBRUEsY0FBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQUE7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDR0Y7O0FEREE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFFQSwwQkFBQTtFQUVBLGNBQUE7RUFFQSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDRUY7O0FEREU7RUFDRSxTQUFBO0FDR0o7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDR0Y7O0FERkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0lKOztBREZFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsY0FBQTtFQUVBLGNBQUE7QUNFSjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURDRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jvb2t2aXRhbHMvYm9vay9ib29rLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcbiAgem9vbTogMTtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLnByb3BpYyB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbn1cbi5oZGNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAgMCAwIDI0cHg7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuLnZpdGFsdGV4dCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG5cbiAgLyogTWFyaXBvc2EgTmF2eSAqL1xuXG4gIGNvbG9yOiAjMDEwNDY1O1xuICBtYXJnaW46IDAgMCAwIDhweDtcbn1cbmlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMThweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxOHB4O1xuICAtLXBhZGRpbmctdG9wOiAxOHB4O1xuICAtLWJhY2tncm91bmQ6ICNmOGY4Zjg7XG59XG5pb24taW5wdXQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG5cbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5cbiAgLyogRGFyayBHcmV5ICovXG5cbiAgY29sb3I6ICM3ZTdlN2U7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy10b3A6IDEzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDEzcHg7XG4gIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDMwMDtcbiAgLS1wbGFjZWhvbGRlci1mb250LXN0eWxlOiAxNHB4O1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjN2U3ZTdlO1xufVxuaW9uLWl0ZW0ge1xuICBoZWlnaHQ6IDQ2cHg7XG4gIC0taGVpZ2h0OiA0NHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDAuNHB4IHNvbGlkICNiOGI4Yjg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDc0cHg7XG4gIGlvbi1pY29uIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbi5wbGFjZXNlYyB7XG4gIHBhZGRpbmctdG9wOiAxOTFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBpbWcge1xuICAgIHdpZHRoOiA2NHB4O1xuICAgIGhlaWdodDogNjRweDtcbiAgfVxuICBkaXYge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAvKiBEYXJrIEdyZXkgKi9cblxuICAgIGNvbG9yOiAjN2U3ZTdlO1xuICB9XG59XG5cbmlvbi10b29sYmFye1xuICBoZWlnaHQ6IDg4cHg7XG4gIFxuICBpb24tYnV0dG9uc3tcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIH1cbn1cbiIsImlvbi1pY29uIHtcbiAgem9vbTogMTtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4ucHJvcGljIHtcbiAgZm9udC1zaXplOiAzMnB4O1xufVxuXG4uaGRjb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIDAgMCAyNHB4O1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cblxuLnZpdGFsdGV4dCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIC8qIE1hcmlwb3NhIE5hdnkgKi9cbiAgY29sb3I6ICMwMTA0NjU7XG4gIG1hcmdpbjogMCAwIDAgOHB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDE4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMThweDtcbiAgLS1wYWRkaW5nLXRvcDogMThweDtcbiAgLS1iYWNrZ3JvdW5kOiAjZjhmOGY4O1xufVxuXG5pb24taW5wdXQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAvKiBEYXJrIEdyZXkgKi9cbiAgY29sb3I6ICM3ZTdlN2U7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy10b3A6IDEzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDEzcHg7XG4gIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDMwMDtcbiAgLS1wbGFjZWhvbGRlci1mb250LXN0eWxlOiAxNHB4O1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjN2U3ZTdlO1xufVxuXG5pb24taXRlbSB7XG4gIGhlaWdodDogNDZweDtcbiAgLS1oZWlnaHQ6IDQ0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMC40cHggc29saWQgI2I4YjhiODtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNzRweDtcbn1cbmlvbi1pdGVtIGlvbi1pY29uIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4ucGxhY2VzZWMge1xuICBwYWRkaW5nLXRvcDogMTkxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wbGFjZXNlYyBpbWcge1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xufVxuLnBsYWNlc2VjIGRpdiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvKiBEYXJrIEdyZXkgKi9cbiAgY29sb3I6ICM3ZTdlN2U7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgaGVpZ2h0OiA4OHB4O1xufVxuaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/bookvitals/book/book.page.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/bookvitals/book/book.page.ts ***!
    \****************************************************/

  /*! exports provided: BookPage */

  /***/
  function srcAppPagesBookvitalsBookBookPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookPage", function () {
      return BookPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BookPage = /*#__PURE__*/function () {
      function BookPage() {
        _classCallCheck(this, BookPage);
      }

      _createClass(BookPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BookPage;
    }();

    BookPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-book',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./book.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookvitals/book/book.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./book.page.scss */
      "./src/app/pages/bookvitals/book/book.page.scss"))["default"]]
    })], BookPage);
    /***/
  }
}]);
//# sourceMappingURL=book-book-module-es5.js.map