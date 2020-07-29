function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-assessment-assessmentbar-assessmentbar-module~pages-assessment-bathing-bathing-module~~c47622c4"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/addimage/addimage.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/addimage/addimage.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSharedAddimageAddimageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-row style=\"align-items: center;\">\n  <ion-col size=\"1\">\n    <ion-icon\n      class=\"camera\"\n      style=\"width: 16px; height: 14px; float: right;\"\n      src=\"../assets/MariposaIcons/Cameraicon.svg\"\n    ></ion-icon>\n  </ion-col>\n  <ion-col>\n    <ion-text size=\"4\"\n      ><h5\n        style=\"\n          font-weight: 600;\n          font-size: 14px;\n          line-height: 17px;\n          margin-left: 9px;\n        \"\n      >\n        ADD IMAGES\n      </h5></ion-text\n    >\n  </ion-col>\n</ion-row>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/m-backbutton/m-backbutton.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/m-backbutton/m-backbutton.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSharedMBackbuttonMBackbuttonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-button (click)=\"goBack()\">\n  <ion-icon slot=\"icon-only\" src=\"assets/back.svg\"></ion-icon>\n</ion-button>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/m-select/m-select-model.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/m-select/m-select-model.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSharedMSelectMSelectModelHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-list>\n  <ion-radio-group (ionChange)=\"valueChange($event)\">\n    <ion-list-header>\n      <ion-label>Select Value</ion-label>\n    </ion-list-header>\n    <ion-item *ngFor=\"let item of data\">\n      <ion-label>{{item.name}}</ion-label>\n      <ion-radio [value]=\"item.value\" onchange=\"\"></ion-radio>\n    </ion-item>\n  </ion-radio-group>\n</ion-list>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/m-select/m-select.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/m-select/m-select.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSharedMSelectMSelectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-item (click)=\"presentModal()\">\n  <ion-label class=\"placeholder\">{{ placeholder }}</ion-label>\n  <ion-icon slot=\"end\" name=\"chevron-down-outline\"></ion-icon>\n</ion-item>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/m-selectdate/m-selectdate.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/m-selectdate/m-selectdate.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSharedMSelectdateMSelectdateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-row *ngFor=\"let item of timeList; let i = index\">\n  <p class=\"label-text\">Select Time</p>\n\n  <ion-col size=\"12\" (click)=\"changeTime(i)\">\n    <ion-text color=\"primary\" class=\"timetext\">\n      <div class=\"timesec\">\n        <span>{{ getTimeHR(item.getHours()) }}</span\n        >&nbsp;&nbsp;:&nbsp;&nbsp;<span class=\"timemin\">{{\n          getMinFormat(item.getMinutes())\n        }}</span>\n      </div>\n      <div class=\"meridiemsec\">\n        <span [class.activemeridian]=\"item.getHours() < 12\">AM</span>\n        <span [class.activemeridian]=\"item.getHours() >= 12\">PM</span>\n      </div>\n      <div class=\"dltsec\" *ngIf=\"i != 0\">\n        <ion-button\n          fill=\"clear\"\n          shape=\"round\"\n          class=\"dltbtn\"\n          (click)=\"deleteTime(i)\"\n          \n        >\n          <ion-icon slot=\"icon-only\" src=\"assets/trash.svg\"></ion-icon>\n          Delete\n        </ion-button>\n      </div>\n    </ion-text>\n  </ion-col>\n</ion-row>\n<ion-button class=\"addbutton\" fill=\"outline\" shape=\"round\" (click)=\"addDate()\">\n  <ion-icon class=\"plusbutton\" slot=\"start\" name=\"add-circle\"></ion-icon>Add\n</ion-button>\n<ion-datetime\n  style=\"display: none;\"\n  [pickerOptions]=\"customPickerOptions\"\n  #datepicker\n  displayFormat=\"h:mm A\"\n></ion-datetime>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/pushtoggle/pushtoggle.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/pushtoggle/pushtoggle.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSharedPushtogglePushtoggleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-row style=\"align-items: center;\">\n  <ion-col size=\"8\">\n      <ion-text (click)=\"generateClick(toggleItem)\" style=\"font-size: 16px; line-height: 19px; font-weight: normal;\">{{ name }}</ion-text>\n  </ion-col>\n  <ion-col>\n      <ion-text style=\"\n      font-size: 16px;\n      line-height: 19px;\n      font-weight: normal;\n      float: right;\n      margin-right: 12px;\n    \">\n          <span *ngIf=\"toggleItem.checked\">ON</span>\n          <span *ngIf=\"!toggleItem.checked\">OFF</span></ion-text>\n  </ion-col>\n  <ion-col>\n      <ion-toggle mode=\"ios\" [name]=\"name\" checked=\"false\" color=\"primary\" style=\"float: right;\" #toggleItem></ion-toggle>\n  </ion-col>\n</ion-row>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/toggle/toggle.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/toggle/toggle.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSharedToggleToggleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-row style=\"align-items: center;\">\n    <ion-col size=\"8\">\n        <ion-text (click)=\"generateClick(toggleItem)\" style=\"font-size: 16px; line-height: 19px; font-weight: normal;\">{{ name }}</ion-text>\n    </ion-col>\n    <ion-col>\n        <ion-text style=\"\n          font-size: 16px;\n          line-height: 19px;\n          font-weight: normal;\n          float: right;\n          margin-right: 12px;\n        \"><span *ngIf=\"toggleItem.checked\">YES</span\n        ><span *ngIf=\"!toggleItem.checked\">NO</span></ion-text>\n    </ion-col>\n    <ion-col>\n        <ion-toggle mode=\"ios\" [(ngModel)]=\"value\" checked color=\"primary\" style=\"float: right;\" #toggleItem (ionChange)=\"toggleVal()\"></ion-toggle>\n    </ion-col>\n</ion-row>";
    /***/
  },

  /***/
  "./src/app/pages/shared/addimage/addimage.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/shared/addimage/addimage.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSharedAddimageAddimageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NoYXJlZC9hZGRpbWFnZS9hZGRpbWFnZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/shared/addimage/addimage.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/shared/addimage/addimage.component.ts ***!
    \*************************************************************/

  /*! exports provided: AddimageComponent */

  /***/
  function srcAppPagesSharedAddimageAddimageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddimageComponent", function () {
      return AddimageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AddimageComponent = /*#__PURE__*/function () {
      function AddimageComponent() {
        _classCallCheck(this, AddimageComponent);
      }

      _createClass(AddimageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AddimageComponent;
    }();

    AddimageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-addimage',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./addimage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/addimage/addimage.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./addimage.component.scss */
      "./src/app/pages/shared/addimage/addimage.component.scss"))["default"]]
    })], AddimageComponent);
    /***/
  },

  /***/
  "./src/app/pages/shared/m-backbutton/m-backbutton.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/shared/m-backbutton/m-backbutton.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSharedMBackbuttonMBackbuttonComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NoYXJlZC9tLWJhY2tidXR0b24vbS1iYWNrYnV0dG9uLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/shared/m-backbutton/m-backbutton.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/shared/m-backbutton/m-backbutton.component.ts ***!
    \*********************************************************************/

  /*! exports provided: MBackbuttonComponent */

  /***/
  function srcAppPagesSharedMBackbuttonMBackbuttonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MBackbuttonComponent", function () {
      return MBackbuttonComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var MBackbuttonComponent = /*#__PURE__*/function () {
      function MBackbuttonComponent(navCtrl) {
        _classCallCheck(this, MBackbuttonComponent);

        this.navCtrl = navCtrl;
      }

      _createClass(MBackbuttonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        }
      }]);

      return MBackbuttonComponent;
    }();

    MBackbuttonComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    MBackbuttonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "m-backbutton",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./m-backbutton.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/m-backbutton/m-backbutton.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./m-backbutton.component.scss */
      "./src/app/pages/shared/m-backbutton/m-backbutton.component.scss"))["default"]]
    })], MBackbuttonComponent);
    /***/
  },

  /***/
  "./src/app/pages/shared/m-select/m-select.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/shared/m-select/m-select.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSharedMSelectMSelectComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item {\n  border: solid;\n  border-color: #B8B8B8;\n  border-radius: 8px;\n  border-width: thin;\n  font-size: 16px;\n  line-height: 19px;\n  font-weight: normal;\n  font-style: normal;\n  height: 44px;\n}\n\n.placeholder {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  margin-top: 0;\n  color: #7e7e7e;\n}\n\nion-icon {\n  color: #7e7e7e;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvc2hhcmVkL20tc2VsZWN0L20tc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zaGFyZWQvbS1zZWxlY3QvbS1zZWxlY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBRUEsY0FBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NoYXJlZC9tLXNlbGVjdC9tLXNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcbiAgYm9yZGVyOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjQjhCOEI4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlci13aWR0aDogdGhpbjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBoZWlnaHQ6IDQ0cHg7XG59XG4ucGxhY2Vob2xkZXIge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIG1hcmdpbi10b3A6IDA7XG5cbiAgY29sb3I6ICM3ZTdlN2U7XG59XG5pb24taWNvbiB7XG4gIGNvbG9yOiAjN2U3ZTdlO1xuICBmb250LXNpemU6IDI0cHg7XG59XG4iLCJpb24taXRlbSB7XG4gIGJvcmRlcjogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI0I4QjhCODtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXItd2lkdGg6IHRoaW47XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgaGVpZ2h0OiA0NHB4O1xufVxuXG4ucGxhY2Vob2xkZXIge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGNvbG9yOiAjN2U3ZTdlO1xufVxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiAjN2U3ZTdlO1xuICBmb250LXNpemU6IDI0cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/shared/m-select/m-select.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/shared/m-select/m-select.component.ts ***!
    \*************************************************************/

  /*! exports provided: MSelectComponent, selectModelComponent */

  /***/
  function srcAppPagesSharedMSelectMSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MSelectComponent", function () {
      return MSelectComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectModelComponent", function () {
      return selectModelComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var MSelectComponent = /*#__PURE__*/function () {
      function MSelectComponent(modalCtrl) {
        _classCallCheck(this, MSelectComponent);

        this.modalCtrl = modalCtrl;
        this.placeholder = '';
        this.selectOptions = [];
        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(MSelectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.selectOptions);
        }
      }, {
        key: "presentModal",
        value: function presentModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalCtrl.create({
                      component: selectModelComponent,
                      cssClass: 'mselectmodalclass',
                      backdropDismiss: true,
                      componentProps: {
                        data: this.selectOptions
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (x) {
                      console.log(x.data.value);

                      _this.result.emit(x.data.value);
                    });
                    _context.next = 6;
                    return modal.present();

                  case 6:
                    return _context.abrupt("return", _context.sent);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "selectVal",
        value: function selectVal() {
          this.result.emit();
        }
      }]);

      return MSelectComponent;
    }();

    MSelectComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MSelectComponent.prototype, "placeholder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MSelectComponent.prototype, "selectOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MSelectComponent.prototype, "result", void 0);
    MSelectComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-m-select',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./m-select.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/m-select/m-select.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./m-select.component.scss */
      "./src/app/pages/shared/m-select/m-select.component.scss"))["default"]]
    })], MSelectComponent);

    var selectModelComponent = /*#__PURE__*/function () {
      function selectModelComponent(modalCtrl) {
        _classCallCheck(this, selectModelComponent);

        this.modalCtrl = modalCtrl;
      }

      _createClass(selectModelComponent, [{
        key: "valueChange",
        value: function valueChange(ev) {
          console.log(ev);
          this.modalCtrl.dismiss({
            value: ev.detail.value
          });
        }
      }]);

      return selectModelComponent;
    }();

    selectModelComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], selectModelComponent.prototype, "data", void 0);
    selectModelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'm-selectmodel',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./m-select-model.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/m-select/m-select-model.html"))["default"]
    })], selectModelComponent);
    /***/
  },

  /***/
  "./src/app/pages/shared/m-selectdate/m-selectdate.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/shared/m-selectdate/m-selectdate.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSharedMSelectdateMSelectdateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".configurecaregrid {\n  padding: 0px;\n}\n\n.timetext {\n  display: flex;\n}\n\n.timesec {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: 49px;\n}\n\n.timemin {\n  color: #B8B8B8;\n}\n\n.meridiemsec {\n  display: grid;\n  padding-left: 16px;\n}\n\n.meridiemsec span {\n  display: inline-flex;\n  align-items: center;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  text-align: center;\n  text-transform: capitalize;\n  color: #B8B8B8;\n}\n\n.activemeridian {\n  color: #4137ff !important;\n}\n\n.dltbtn {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 14px;\n  text-transform: uppercase;\n  /* Direct Black */\n  color: #1a1a1a;\n}\n\n.dltbtn ion-icon {\n  font-size: 16px;\n  --color: #1a1a1a !important;\n}\n\n.dltbtn::part(native) {\n  padding: 0;\n}\n\nion-icon {\n  zoom: 1;\n}\n\n.dltsec {\n  width: 100%;\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvc2hhcmVkL20tc2VsZWN0ZGF0ZS9tLXNlbGVjdGRhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NoYXJlZC9tLXNlbGVjdGRhdGUvbS1zZWxlY3RkYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtBQ0VGOztBREFBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNHRjs7QUREQTtFQUNFLGNBQUE7QUNJRjs7QURGQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ0tGOztBREpFO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUNNSjs7QURIQTtFQUNFLHlCQUFBO0FDTUY7O0FESkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFFQSxpQkFBQTtFQUVBLGNBQUE7QUNLRjs7QURIRTtFQUNFLGVBQUE7RUFDQSwyQkFBQTtBQ0tKOztBREZBO0VBQ0UsVUFBQTtBQ0tGOztBREhBO0VBQ0UsT0FBQTtBQ01GOztBREpBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNPRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NoYXJlZC9tLXNlbGVjdGRhdGUvbS1zZWxlY3RkYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmZpZ3VyZWNhcmVncmlkIHtcbiAgcGFkZGluZzogMHB4O1xufVxuLnRpbWV0ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi50aW1lc2VjIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQ5cHg7XG59XG4udGltZW1pbiB7XG4gIGNvbG9yOiAjQjhCOEI4O1xufVxuLm1lcmlkaWVtc2VjIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBzcGFuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBjb2xvcjogI0I4QjhCODtcbiAgfVxufVxuLmFjdGl2ZW1lcmlkaWFuIHtcbiAgY29sb3I6ICM0MTM3ZmYgIWltcG9ydGFudDtcbn1cbi5kbHRidG4ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgLyogRGlyZWN0IEJsYWNrICovXG5cbiAgY29sb3I6ICMxYTFhMWE7XG5cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAtLWNvbG9yOiAjMWExYTFhICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5kbHRidG46OnBhcnQobmF0aXZlKSB7XG4gIHBhZGRpbmc6IDA7XG59XG5pb24taWNvbiB7XG4gIHpvb206IDE7XG59XG4uZGx0c2VjIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cbiIsIi5jb25maWd1cmVjYXJlZ3JpZCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnRpbWV0ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnRpbWVzZWMge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDlweDtcbn1cblxuLnRpbWVtaW4ge1xuICBjb2xvcjogI0I4QjhCODtcbn1cblxuLm1lcmlkaWVtc2VjIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuLm1lcmlkaWVtc2VjIHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgY29sb3I6ICNCOEI4Qjg7XG59XG5cbi5hY3RpdmVtZXJpZGlhbiB7XG4gIGNvbG9yOiAjNDEzN2ZmICFpbXBvcnRhbnQ7XG59XG5cbi5kbHRidG4ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIC8qIERpcmVjdCBCbGFjayAqL1xuICBjb2xvcjogIzFhMWExYTtcbn1cbi5kbHRidG4gaW9uLWljb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIC0tY29sb3I6ICMxYTFhMWEgIWltcG9ydGFudDtcbn1cblxuLmRsdGJ0bjo6cGFydChuYXRpdmUpIHtcbiAgcGFkZGluZzogMDtcbn1cblxuaW9uLWljb24ge1xuICB6b29tOiAxO1xufVxuXG4uZGx0c2VjIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGVuZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/shared/m-selectdate/m-selectdate.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/shared/m-selectdate/m-selectdate.component.ts ***!
    \*********************************************************************/

  /*! exports provided: MSelectdateComponent */

  /***/
  function srcAppPagesSharedMSelectdateMSelectdateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MSelectdateComponent", function () {
      return MSelectdateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MSelectdateComponent = /*#__PURE__*/function () {
      function MSelectdateComponent() {
        var _this2 = this;

        _classCallCheck(this, MSelectdateComponent);

        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.timeList = [];
        this.customPickerOptions = {
          buttons: [{
            text: "Submit",
            handler: function handler(x) {
              console.log("Clicked Save!", x);

              if (_this2.timeList[_this2.timeindex]) {
                var dateVar = new Date();
                dateVar.setHours(x.ampm.value == "pm" ? x.hour.value + 12 : x.hour.value);
                dateVar.setMinutes(x.minute.value);
                _this2.timeList[_this2.timeindex] = dateVar;
                console.log(_this2.timeList[_this2.timeindex]);

                _this2.result.emit(_this2.timeList);
              }
            }
          }]
        };
      }

      _createClass(MSelectdateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.addDate();
        }
      }, {
        key: "addDate",
        value: function addDate() {
          this.timeList.push(new Date());
          this.result.emit(this.timeList);
        }
      }, {
        key: "getTimeHR",
        value: function getTimeHR(hr) {
          return ("0" + hr).slice(-2);
        }
      }, {
        key: "getMinFormat",
        value: function getMinFormat(min) {
          return (min < 10 ? "0" : "") + min;
        }
      }, {
        key: "changeTime",
        value: function changeTime(i) {
          var _this3 = this;

          this.datepicker.open().then(function (x) {
            console.log(x);
            _this3.timeindex = i;
          });
        }
      }, {
        key: "deleteTime",
        value: function deleteTime(i) {
          this.timeList.splice(i, 1);
        }
      }]);

      return MSelectdateComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("datepicker")], MSelectdateComponent.prototype, "datepicker", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MSelectdateComponent.prototype, "result", void 0);
    MSelectdateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "m-selectdate",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./m-selectdate.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/m-selectdate/m-selectdate.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./m-selectdate.component.scss */
      "./src/app/pages/shared/m-selectdate/m-selectdate.component.scss"))["default"]]
    })], MSelectdateComponent);
    /***/
  },

  /***/
  "./src/app/pages/shared/pushtoggle/pushtoggle.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/shared/pushtoggle/pushtoggle.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSharedPushtogglePushtoggleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NoYXJlZC9wdXNodG9nZ2xlL3B1c2h0b2dnbGUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/shared/pushtoggle/pushtoggle.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/shared/pushtoggle/pushtoggle.component.ts ***!
    \*****************************************************************/

  /*! exports provided: PushtoggleComponent */

  /***/
  function srcAppPagesSharedPushtogglePushtoggleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PushtoggleComponent", function () {
      return PushtoggleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PushtoggleComponent = /*#__PURE__*/function () {
      function PushtoggleComponent() {
        _classCallCheck(this, PushtoggleComponent);

        this.name = '';
        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(PushtoggleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "generateClick",
        value: function generateClick(ev) {
          if (ev.checked === true) {
            ev.checked = false;
          } else {
            ev.checked = true;
          }
        }
      }]);

      return PushtoggleComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PushtoggleComponent.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], PushtoggleComponent.prototype, "result", void 0);
    PushtoggleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pushtoggle',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pushtoggle.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/pushtoggle/pushtoggle.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pushtoggle.component.scss */
      "./src/app/pages/shared/pushtoggle/pushtoggle.component.scss"))["default"]]
    })], PushtoggleComponent);
    /***/
  },

  /***/
  "./src/app/pages/shared/shared.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/shared/shared.module.ts ***!
    \***********************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppPagesSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
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


    var _addimage_addimage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./addimage/addimage.component */
    "./src/app/pages/shared/addimage/addimage.component.ts");
    /* harmony import */


    var _toggle_toggle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./toggle/toggle.component */
    "./src/app/pages/shared/toggle/toggle.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _m_select_m_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./m-select/m-select.component */
    "./src/app/pages/shared/m-select/m-select.component.ts");
    /* harmony import */


    var _m_selectdate_m_selectdate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./m-selectdate/m-selectdate.component */
    "./src/app/pages/shared/m-selectdate/m-selectdate.component.ts");
    /* harmony import */


    var _m_backbutton_m_backbutton_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./m-backbutton/m-backbutton.component */
    "./src/app/pages/shared/m-backbutton/m-backbutton.component.ts");
    /* harmony import */


    var _pushtoggle_pushtoggle_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pushtoggle/pushtoggle.component */
    "./src/app/pages/shared/pushtoggle/pushtoggle.component.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_addimage_addimage_component__WEBPACK_IMPORTED_MODULE_3__["AddimageComponent"], _toggle_toggle_component__WEBPACK_IMPORTED_MODULE_4__["ToggleComponent"], _m_select_m_select_component__WEBPACK_IMPORTED_MODULE_7__["MSelectComponent"], _m_select_m_select_component__WEBPACK_IMPORTED_MODULE_7__["selectModelComponent"], _m_selectdate_m_selectdate_component__WEBPACK_IMPORTED_MODULE_8__["MSelectdateComponent"], _m_backbutton_m_backbutton_component__WEBPACK_IMPORTED_MODULE_9__["MBackbuttonComponent"], _pushtoggle_pushtoggle_component__WEBPACK_IMPORTED_MODULE_10__["PushtoggleComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
      exports: [_addimage_addimage_component__WEBPACK_IMPORTED_MODULE_3__["AddimageComponent"], _toggle_toggle_component__WEBPACK_IMPORTED_MODULE_4__["ToggleComponent"], _m_select_m_select_component__WEBPACK_IMPORTED_MODULE_7__["MSelectComponent"], _m_select_m_select_component__WEBPACK_IMPORTED_MODULE_7__["selectModelComponent"], _m_selectdate_m_selectdate_component__WEBPACK_IMPORTED_MODULE_8__["MSelectdateComponent"], _m_backbutton_m_backbutton_component__WEBPACK_IMPORTED_MODULE_9__["MBackbuttonComponent"], _pushtoggle_pushtoggle_component__WEBPACK_IMPORTED_MODULE_10__["PushtoggleComponent"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/app/pages/shared/toggle/toggle.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/shared/toggle/toggle.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSharedToggleToggleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NoYXJlZC90b2dnbGUvdG9nZ2xlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/shared/toggle/toggle.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/shared/toggle/toggle.component.ts ***!
    \*********************************************************/

  /*! exports provided: ToggleComponent */

  /***/
  function srcAppPagesSharedToggleToggleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToggleComponent", function () {
      return ToggleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ToggleComponent = /*#__PURE__*/function () {
      function ToggleComponent() {
        _classCallCheck(this, ToggleComponent);

        this.name = "";
        this.value = false;
        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ToggleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleVal",
        value: function toggleVal() {
          this.result.emit(this.value);
        }
      }, {
        key: "generateClick",
        value: function generateClick(ev) {
          // ev.click();
          if (ev.checked == true) {
            ev.checked = false;
          } else {
            ev.checked = true;
          }
        }
      }]);

      return ToggleComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ToggleComponent.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ToggleComponent.prototype, "value", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ToggleComponent.prototype, "result", void 0);
    ToggleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-toggle",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./toggle.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/toggle/toggle.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./toggle.component.scss */
      "./src/app/pages/shared/toggle/toggle.component.scss"))["default"]]
    })], ToggleComponent);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-assessment-assessmentbar-assessmentbar-module~pages-assessment-bathing-bathing-module~~c47622c4-es5.js.map