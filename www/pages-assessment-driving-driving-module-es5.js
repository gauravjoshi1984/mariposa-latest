function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-assessment-driving-driving-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/driving/driving.page.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/driving/driving.page.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAssessmentDrivingDrivingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"md\">\n\n    <ion-toolbar class=\"headtoolbar\">\n\n        <ion-row>\n            <ion-col size=\"2\">\n                <ion-toolbar>\n                    <ion-buttons slot=\"start\">\n                        <m-backbutton></m-backbutton>\n                    </ion-buttons>\n                </ion-toolbar>\n            </ion-col>\n            <ion-col size=\"8\">\n                <div>\n                    <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\">Driving / Transportation</ion-text>\n                </div>\n            </ion-col>\n        </ion-row>\n\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n    <ion-grid style=\"padding:24px;height:fit-content\">\n\n        <app-toggle [name]=\"'Senior able to drive a Car'\" [value]=\"formData.abilityToDrive\" (result)=\"changeToggle('abilityToDrive',$event)\"></app-toggle>\n        <hr class=\"solid\" />\n        <!-- INSTRUCTIONS -->\n\n        <div class=\"nametag\" style=\"margin-top: 0px;\">\n            <ion-text position=\"floating\" id=\"tag\">Instructions(optional)</ion-text>\n        </div>\n        <div>\n            <ion-textarea style=\"height: 120px;\" class=\"input\" placeholder=\"Write here\" [(ngModel)]=\"formData.instructions\"></ion-textarea>\n        </div>\n\n        <!-- ADD IMAGE -->\n        <app-addimage (click)=\"addImage()\"></app-addimage>\n    <ion-text>\n      <div class=\"imagelist\" *ngFor=\"let img of imageList; let j=index\">\n        <ion-grid fixed class=\"ion-no-padding\">\n          <ion-row>\n            <ion-col style=\"padding-top: 11px;\" size=\"8\"><span>{{img.substring(img.lastIndexOf(\"/\") + 1) | slice:0:12}}</span></ion-col>\n            <ion-col size=\"4\">\n              <ion-button\n              fill=\"clear\"\n              shape=\"round\"\n              class=\"dltbtn\"\n              (click)=\"removeImg(j)\"        >\n              <ion-icon slot=\"icon-only\" src=\"assets/trash.svg\"></ion-icon>\n              Delete\n            </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid> \n      </div>\n    </ion-text>\n\n    </ion-grid>\n</ion-content>\n\n<ion-footer>\n    <div id=\"button\">\n        <ion-button [disabled]=\"false\" class=\"btnblue\" type=\"submit\" id=\"signup\" (click)=\"save()\">SAVE & PROCEED</ion-button>\n    </div>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/assessment/driving/driving-routing.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/assessment/driving/driving-routing.module.ts ***!
    \********************************************************************/

  /*! exports provided: DrivingPageRoutingModule */

  /***/
  function srcAppPagesAssessmentDrivingDrivingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DrivingPageRoutingModule", function () {
      return DrivingPageRoutingModule;
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


    var _driving_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./driving.page */
    "./src/app/pages/assessment/driving/driving.page.ts");

    var routes = [{
      path: '',
      component: _driving_page__WEBPACK_IMPORTED_MODULE_3__["DrivingPage"]
    }];

    var DrivingPageRoutingModule = function DrivingPageRoutingModule() {
      _classCallCheck(this, DrivingPageRoutingModule);
    };

    DrivingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DrivingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/assessment/driving/driving.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/assessment/driving/driving.module.ts ***!
    \************************************************************/

  /*! exports provided: DrivingPageModule */

  /***/
  function srcAppPagesAssessmentDrivingDrivingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DrivingPageModule", function () {
      return DrivingPageModule;
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


    var _driving_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./driving-routing.module */
    "./src/app/pages/assessment/driving/driving-routing.module.ts");
    /* harmony import */


    var _driving_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./driving.page */
    "./src/app/pages/assessment/driving/driving.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/pages/shared/shared.module.ts");

    var DrivingPageModule = function DrivingPageModule() {
      _classCallCheck(this, DrivingPageModule);
    };

    DrivingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _driving_routing_module__WEBPACK_IMPORTED_MODULE_5__["DrivingPageRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      declarations: [_driving_page__WEBPACK_IMPORTED_MODULE_6__["DrivingPage"]]
    })], DrivingPageModule);
    /***/
  },

  /***/
  "./src/app/pages/assessment/driving/driving.page.scss":
  /*!************************************************************!*\
    !*** ./src/app/pages/assessment/driving/driving.page.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAssessmentDrivingDrivingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2Vzc21lbnQvZHJpdmluZy9kcml2aW5nLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/assessment/driving/driving.page.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/assessment/driving/driving.page.ts ***!
    \**********************************************************/

  /*! exports provided: DrivingPage */

  /***/
  function srcAppPagesAssessmentDrivingDrivingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DrivingPage", function () {
      return DrivingPage;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _assessment_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../assessment-service.service */
    "./src/app/pages/assessment/assessment-service.service.ts");
    /* harmony import */


    var _dataservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../dataservice.service */
    "./src/app/pages/dataservice.service.ts");
    /* harmony import */


    var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/image-picker/ngx */
    "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");

    var DrivingPage = /*#__PURE__*/function () {
      function DrivingPage(router, apiService, location, imagePicker, assessmentService, dataService, navCtrl) {
        _classCallCheck(this, DrivingPage);

        this.router = router;
        this.apiService = apiService;
        this.location = location;
        this.imagePicker = imagePicker;
        this.assessmentService = assessmentService;
        this.dataService = dataService;
        this.navCtrl = navCtrl;
        this.stateObject = {};
        this.formData = {
          abilityToDrive: null,
          instructions: null
        };
        this.imageList = [];
      }

      _createClass(DrivingPage, [{
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
        key: "changeToggle",
        value: function changeToggle(formItem, ev) {
          console.log(ev);
          this.formData[formItem] = ev;
        }
      }, {
        key: "save",
        value: function save() {
          var _this2 = this;

          if (this.stateObject == null) {
            this.stateObject = {};
          }

          this.stateObject.DRIVING = this.formData;
          this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then(function (response) {
            console.log(response);

            _this2.navCtrl.navigateForward(['/assessment/assessmentbar']);
          });
          console.log('called Save', this.formData);
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
                    key = 'DRIVING';
                    this.assessmentService.getAssessmentStateObject().then(function (data) {
                      // first time load
                      _this3.stateObject = data.assessmentValues.CARE_NEEDS;

                      if (data.assessmentValues.CARE_NEEDS != null && data.assessmentValues.CARE_NEEDS[key] != null) {
                        _this3.formData = data.assessmentValues.CARE_NEEDS[key];
                      } else {// do nothing
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

      return DrivingPage;
    }();

    DrivingPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_http_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
      }, {
        type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__["ImagePicker"]
      }, {
        type: _assessment_service_service__WEBPACK_IMPORTED_MODULE_6__["AssessmentServiceService"]
      }, {
        type: _dataservice_service__WEBPACK_IMPORTED_MODULE_7__["DataserviceService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    DrivingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-driving',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./driving.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/driving/driving.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./driving.page.scss */
      "./src/app/pages/assessment/driving/driving.page.scss"))["default"]]
    })], DrivingPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-assessment-driving-driving-module-es5.js.map