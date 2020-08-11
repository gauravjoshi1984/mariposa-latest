function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-assessment-dressing-dressing-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/dressing/dressing.page.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/dressing/dressing.page.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAssessmentDressingDressingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"md\">\n\n    <ion-toolbar class=\"headtoolbar\">\n\n        <ion-row>\n            <ion-col size=\"2\">\n                <ion-toolbar>\n                    <ion-buttons slot=\"start\">\n                        <m-backbutton></m-backbutton>\n                    </ion-buttons>\n                </ion-toolbar>\n            </ion-col>\n            <ion-col size=\"8\">\n                <div>\n                    <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\">Dressing</ion-text>\n                </div>\n            </ion-col>\n        </ion-row>\n\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n    <ion-grid style=\"padding:24px;height:fit-content\">\n\n        <div class=\"nametag\" style=\"padding-top: 0px;\">\n            <ion-text position=\"floating\" id=\"tag\">Favorite Outfits</ion-text>\n        </div>\n        <div *ngFor=\"let dinner of formData.dressingPreferences;let i = index\">\n            <ion-input mode=\"md\" class=\"input\" placeholder=\"\" [(ngModel)]=\"formData.dressingPreferences[i]\"></ion-input>\n        </div>\n\n        <!-- ADD BUTTON -->\n\n        <ion-button class=\"btn1\" fill=\"outline\" shape=\"round\" (click)=\"addMore('dressingPreferences')\">\n            <ion-icon class=\"plusbutton\" slot=\"start\" name=\"add-circle\"></ion-icon>Add\n        </ion-button>\n\n        <hr class=\"solid\">\n\n\n\n        <!-- INSTRUCTIONS -->\n\n        <div class=\"nametag\" style=\"margin-top: 16px;\">\n            <ion-text position=\"floating\" id=\"tag\">Instructions(optional)</ion-text>\n        </div>\n        <div>\n            <ion-textarea style=\"height: 120px;\" class=\"input\" placeholder=\"Write here\" [(ngModel)]=\"formData.instructions\"></ion-textarea>\n        </div>\n\n        <!-- ADD IMAGE -->\n        <app-addimage (click)=\"addImage()\"></app-addimage>\n    <ion-text>\n      <div class=\"imagelist\" *ngFor=\"let img of imageList; let j=index\">\n        <ion-grid fixed class=\"ion-no-padding\">\n          <ion-row>\n            <ion-col style=\"padding-top: 11px;\" size=\"8\"><span>{{img.substring(img.lastIndexOf(\"/\") + 1) | slice:0:12}}</span></ion-col>\n            <ion-col size=\"4\">\n              <ion-button\n              fill=\"clear\"\n              shape=\"round\"\n              class=\"dltbtn\"\n              (click)=\"removeImg(j)\"        >\n              <ion-icon slot=\"icon-only\" src=\"assets/trash.svg\"></ion-icon>\n              Delete\n            </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid> \n      </div>\n    </ion-text>\n\n\n    </ion-grid>\n</ion-content>\n\n<ion-footer>\n    <div id=\"button\">\n        <ion-button [disabled]=\"false\" class=\"btnblue\" type=\"submit\" (click)=\"save()\" id=\"signup\">SAVE & PROCEED\n        </ion-button>\n    </div>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/assessment/dressing/dressing-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/assessment/dressing/dressing-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: DressingPageRoutingModule */

  /***/
  function srcAppPagesAssessmentDressingDressingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DressingPageRoutingModule", function () {
      return DressingPageRoutingModule;
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


    var _dressing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dressing.page */
    "./src/app/pages/assessment/dressing/dressing.page.ts");

    var routes = [{
      path: '',
      component: _dressing_page__WEBPACK_IMPORTED_MODULE_3__["DressingPage"]
    }];

    var DressingPageRoutingModule = function DressingPageRoutingModule() {
      _classCallCheck(this, DressingPageRoutingModule);
    };

    DressingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DressingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/assessment/dressing/dressing.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/assessment/dressing/dressing.module.ts ***!
    \**************************************************************/

  /*! exports provided: DressingPageModule */

  /***/
  function srcAppPagesAssessmentDressingDressingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DressingPageModule", function () {
      return DressingPageModule;
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


    var _dressing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dressing-routing.module */
    "./src/app/pages/assessment/dressing/dressing-routing.module.ts");
    /* harmony import */


    var _dressing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dressing.page */
    "./src/app/pages/assessment/dressing/dressing.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/pages/shared/shared.module.ts");

    var DressingPageModule = function DressingPageModule() {
      _classCallCheck(this, DressingPageModule);
    };

    DressingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _dressing_routing_module__WEBPACK_IMPORTED_MODULE_5__["DressingPageRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      declarations: [_dressing_page__WEBPACK_IMPORTED_MODULE_6__["DressingPage"]]
    })], DressingPageModule);
    /***/
  },

  /***/
  "./src/app/pages/assessment/dressing/dressing.page.scss":
  /*!**************************************************************!*\
    !*** ./src/app/pages/assessment/dressing/dressing.page.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAssessmentDressingDressingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".add {\n  margin-top: 16px;\n  width: 120px;\n  height: 44px;\n  margin-left: 0px;\n  margin-bottom: 5px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  --color:#4137FF;\n  --background:#ffffff;\n  --border-radius: 8px;\n  --border-color:#4137FF;\n  --box-shadow: none;\n  border-style: solid;\n  border-width: thin;\n}\n\n.btn1 {\n  --border-radius: 8px;\n  margin-top: 16px;\n  padding-top: 0;\n  --border: 1px solid #4137ff;\n  width: 120px;\n  height: 44px;\n  --border-width:thin;\n}\n\n.plusbutton {\n  height: 24px;\n  width: 24px;\n  zoom: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvYXNzZXNzbWVudC9kcmVzc2luZy9kcmVzc2luZy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Fzc2Vzc21lbnQvZHJlc3NpbmcvZHJlc3NpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFHRCxrQkFBQTtFQUVDLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBRUEsbUJBQUE7RUFDQSxrQkFBQTtBQ0pKOztBRE9FO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNKSjs7QURPRTtFQUVFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXNzZXNzbWVudC9kcmVzc2luZy9kcmVzc2luZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRke1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogNDRweDtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDsgICBcbiAgICBcbiAgICBcbiAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTdweDtcblxuICAgIC0tY29sb3I6IzQxMzdGRjtcbiAgICAtLWJhY2tncm91bmQ6I2ZmZmZmZjtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDsgXG4gICAgLS1ib3JkZXItY29sb3I6IzQxMzdGRjtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XG4gIH1cblxuICAuYnRuMSB7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICM0MTM3ZmY7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDo0NHB4O1xuICAgIC0tYm9yZGVyLXdpZHRoOnRoaW47XG4gIH1cblxuICAucGx1c2J1dHRvbntcblxuICAgIGhlaWdodDogMjRweDtcbiAgICB3aWR0aDogMjRweDtcbiAgICB6b29tOiAxO1xuICB9XG5cbiAgIiwiLmFkZCB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgLS1jb2xvcjojNDEzN0ZGO1xuICAtLWJhY2tncm91bmQ6I2ZmZmZmZjtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIC0tYm9yZGVyLWNvbG9yOiM0MTM3RkY7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xufVxuXG4uYnRuMSB7XG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBwYWRkaW5nLXRvcDogMDtcbiAgLS1ib3JkZXI6IDFweCBzb2xpZCAjNDEzN2ZmO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogNDRweDtcbiAgLS1ib3JkZXItd2lkdGg6dGhpbjtcbn1cblxuLnBsdXNidXR0b24ge1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICB6b29tOiAxO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/assessment/dressing/dressing.page.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/assessment/dressing/dressing.page.ts ***!
    \************************************************************/

  /*! exports provided: DressingPage */

  /***/
  function srcAppPagesAssessmentDressingDressingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DressingPage", function () {
      return DressingPage;
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/http.service */
    "./src/app/http.service.ts");
    /* harmony import */


    var _assessment_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../assessment-service.service */
    "./src/app/pages/assessment/assessment-service.service.ts");
    /* harmony import */


    var _dataservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../dataservice.service */
    "./src/app/pages/dataservice.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/image-picker/ngx */
    "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");

    var DressingPage = /*#__PURE__*/function () {
      function DressingPage(router, apiService, location, assessmentService, imagePicker, dataService, navCtrl) {
        _classCallCheck(this, DressingPage);

        this.router = router;
        this.apiService = apiService;
        this.location = location;
        this.assessmentService = assessmentService;
        this.imagePicker = imagePicker;
        this.dataService = dataService;
        this.navCtrl = navCtrl;
        this.formData = {
          dressingPreferences: [''],
          instructions: ''
        };
        this.imageList = [];
      }

      _createClass(DressingPage, [{
        key: "addMore",
        value: function addMore(arrayName) {
          this.formData[arrayName].push('');
          console.log('form', this.formData);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addImage",
        value: function addImage() {
          var _this = this;

          var options = {
            maximumImagesCount: 4
          };
          this.imagePicker.getPictures(options).then(function (results) {
            console.log(results);

            for (var i = 0; i < results.length; i++) {
              _this.imageList.push(results[i]);
            }
          }, function (err) {});
        }
      }, {
        key: "removeImg",
        value: function removeImg(i) {
          console.log("*", i);
          this.imageList.splice(i, 1);
        }
      }, {
        key: "save",
        value: function save() {
          var _this2 = this;

          if (this.stateObject == null) {
            this.stateObject = {};
          }

          this.stateObject.DRESSING = this.formData;
          this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then(function (response) {
            console.log(response);

            _this2.navCtrl.navigateForward(['/assessment/assessmentbar']);
          });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var key;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.readyFlag = false;
                    _context.next = 3;
                    return this.assessmentService.getCareCircleId();

                  case 3:
                    this.careCircleId = _context.sent;
                    _context.next = 6;
                    return this.dataService.getUserInfo();

                  case 6:
                    this.userId = _context.sent;
                    this.userId = this.userId.userId;
                    key = 'DRESSING';
                    this.assessmentService.getAssessmentStateObject().then(function (data) {
                      _this3.stateObject = data.assessmentValues.CARE_NEEDS;

                      if (data.assessmentValues.CARE_NEEDS != null && data.assessmentValues.CARE_NEEDS[key] != null) {
                        _this3.formData = data.assessmentValues.CARE_NEEDS[key];
                      } else {// data is not present
                        // do nothing
                      }

                      _this3.readyFlag = true;
                    });

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return DressingPage;
    }();

    DressingPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_http_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]
      }, {
        type: _assessment_service_service__WEBPACK_IMPORTED_MODULE_5__["AssessmentServiceService"]
      }, {
        type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__["ImagePicker"]
      }, {
        type: _dataservice_service__WEBPACK_IMPORTED_MODULE_6__["DataserviceService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    DressingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dressing',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dressing.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/dressing/dressing.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dressing.page.scss */
      "./src/app/pages/assessment/dressing/dressing.page.scss"))["default"]]
    })], DressingPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-assessment-dressing-dressing-module-es5.js.map