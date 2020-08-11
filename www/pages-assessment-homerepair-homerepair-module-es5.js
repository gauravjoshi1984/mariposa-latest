function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-assessment-homerepair-homerepair-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/homerepair/homerepair.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/homerepair/homerepair.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAssessmentHomerepairHomerepairPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  \n  <ion-toolbar class=\"headtoolbar\">\n    \n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-toolbar>\n            <ion-buttons slot=\"start\">\n             <m-backbutton></m-backbutton>\n            </ion-buttons>\n        </ion-toolbar> \n        </ion-col>\n        <ion-col size=\"8\">\n          <div>\n            <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\">Home Repair / Maintanence</ion-text>\n          </div> \n        </ion-col>\n      </ion-row>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-grid style=\"padding:24px;height:fit-content\">\n    <!-- Therapy-->\n\n    <div style=\"padding-top: 0px; margin-bottom: 15px;\">\n      <ion-label style=\"font-size: 16px; line-height: 19px;\"\n        >Appliance/Equipment in use</ion-label\n      >\n    </div>\n\n    <!-- CHECKBOX 1 -->\n\n    <ion-row style=\"align-items: center; margin-top: 5px;\">\n      <ion-col  size=\"1\">\n        <div style=\"padding-left: 3px;\">\n          <ion-checkbox #washer color=\"mwhite\" checked=\"false\"></ion-checkbox>\n        </div>\n      </ion-col>\n      <ion-col\n        (click)=\"generateClick(washer)\"\n        size=\"11\"\n        style=\"padding-top: 0px;\"\n      >\n        <div>\n          <ion-text\n            style=\"\n              font-size: 16px;\n              line-height: 19px;\n              font-weight: 300;\n              margin-left: 12px;\n            \"\n            color=\"mdblack\"\n            >Washer</ion-text\n          >\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <!-- CHECKBOX 2 -->\n\n    <ion-row style=\"align-items: center; margin-top: 5px;\">\n      <ion-col  size=\"1\">\n        <div style=\"padding-left: 3px;\">\n          <ion-checkbox #dryer color=\"mwhite\" checked=\"false\"></ion-checkbox>\n        </div>\n      </ion-col>\n      <ion-col\n        (click)=\"generateClick(dryer)\"\n        size=\"11\"\n        style=\"padding-top: 0px;\"\n      >\n        <div>\n          <ion-text\n            style=\"\n              font-size: 16px;\n              line-height: 19px;\n              font-weight: 300;\n              margin-left: 12px;\n            \"\n            color=\"mdblack\"\n            >Dryer</ion-text\n          >\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <!-- CHECKBOX 3 -->\n\n    <ion-row style=\"align-items: center; margin-top: 5px;\">\n      <ion-col  size=\"1\">\n        <div style=\"padding-left: 3px;\">\n          <ion-checkbox #refigerator color=\"mwhite\" checked=\"false\"></ion-checkbox>\n        </div>\n      </ion-col>\n      <ion-col\n        (click)=\"generateClick(refigerator)\"\n        size=\"11\"\n        style=\"padding-top: 0px;\"\n      >\n        <div>\n          <ion-text\n            style=\"\n              font-size: 16px;\n              line-height: 19px;\n              font-weight: 300;\n              margin-left: 12px;\n            \"\n            color=\"mdblack\"\n            >Refigerator</ion-text\n          >\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <!-- CHECKBOX 4 -->\n\n    <ion-row style=\"align-items: center; margin-top: 5px;\">\n      <ion-col  size=\"1\">\n        <div style=\"padding-left: 3px;\">\n          <ion-checkbox #garbage color=\"mwhite\" checked=\"false\"></ion-checkbox>\n        </div>\n      </ion-col>\n      <ion-col (click)=\"generateClick(garbage)\" size=\"11\" style=\"padding-top: 0px;\">\n        <div>\n          <ion-text style=\"font-size: 16px;line-height: 19px;font-weight: 300;margin-left: 12px;\" color=\"mdblack\">Garbage disposal</ion-text>\n        </div>\n      </ion-col>\n    </ion-row>\n\n     <!-- CHECKBOX 5 -->\n\n     <ion-row style=\"align-items: center; margin-top: 5px;\">\n      <ion-col  size=\"1\">\n        <div style=\"padding-left: 3px;\">\n          <ion-checkbox #air color=\"mwhite\" checked=\"false\"></ion-checkbox>\n        </div>\n      </ion-col>\n      <ion-col (click)=\"generateClick(air)\" size=\"11\" style=\"padding-top: 0px;\">\n        <div>\n          <ion-text style=\"font-size: 16px;line-height: 19px;font-weight: 300;margin-left: 12px;\" color=\"mdblack\">Air Conditioner</ion-text>\n        </div>\n      </ion-col>\n    </ion-row>\n\n     <!-- CHECKBOX 6 -->\n\n     <ion-row style=\"align-items: center; margin-top: 5px;\">\n      <ion-col  size=\"1\">\n        <div style=\"padding-left: 3px;\">\n          <ion-checkbox #solar color=\"mwhite\" checked=\"false\"></ion-checkbox>\n        </div>\n      </ion-col>\n      <ion-col (click)=\"generateClick(solar)\" size=\"11\" style=\"padding-top: 0px;\">\n        <div>\n          <ion-text style=\"font-size: 16px;line-height: 19px;font-weight: 300;margin-left: 12px;\" color=\"mdblack\">Solar Panels</ion-text>\n        </div>\n      </ion-col>\n    </ion-row>\n\n     <!-- CHECKBOX 7 -->\n\n     <ion-row style=\"align-items: center; margin-top: 5px;\">\n      <ion-col  size=\"1\">\n        <div style=\"padding-left: 3px;\">\n          <ion-checkbox #others color=\"mwhite\" checked=\"false\"></ion-checkbox>\n        </div>\n      </ion-col>\n      <ion-col (click)=\"generateClick(others)\" size=\"11\" style=\"padding-top: 0px;\">\n        <div>\n          <ion-text style=\"font-size: 16px;line-height: 19px;font-weight: 300;margin-left: 12px;\" color=\"mdblack\">Others</ion-text>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    \n    <!-- INSTRUCTIONS -->\n\n    <div class=\"nametag\" style=\"margin-top: 15px;\">\n      <ion-text position=\"floating\" id=\"tag\">Instructions(optional)</ion-text>\n    </div>\n    <div>\n      <ion-textarea\n        style=\"height: 120px;\"\n        class=\"input\"\n        placeholder=\"Write here\"\n      ></ion-textarea>\n    </div>\n\n    <!-- ADD IMAGE -->\n    <app-addimage (click)=\"addImage()\"></app-addimage>\n    <ion-text>\n      <div class=\"imagelist\" *ngFor=\"let img of imageList; let j=index\">\n        <ion-grid fixed class=\"ion-no-padding\">\n          <ion-row>\n            <ion-col style=\"padding-top: 11px;\" size=\"8\"><span>{{img.substring(img.lastIndexOf(\"/\") + 1) | slice:0:12}}</span></ion-col>\n            <ion-col size=\"4\">\n              <ion-button\n              fill=\"clear\"\n              shape=\"round\"\n              class=\"dltbtn\"\n              (click)=\"removeImg(j)\"        >\n              <ion-icon slot=\"icon-only\" src=\"assets/trash.svg\"></ion-icon>\n              Delete\n            </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid> \n      </div>\n    </ion-text>\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <div id=\"button\">\n    <ion-button [disabled]=\"false\" class=\"btnblue\" type=\"submit\"  (click)= \"save()\" id=\"signup\">SAVE & PROCEED</ion-button>\n  </div>  \n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/pages/assessment/homerepair/homerepair-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/assessment/homerepair/homerepair-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: HomerepairPageRoutingModule */

  /***/
  function srcAppPagesAssessmentHomerepairHomerepairRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomerepairPageRoutingModule", function () {
      return HomerepairPageRoutingModule;
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


    var _homerepair_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./homerepair.page */
    "./src/app/pages/assessment/homerepair/homerepair.page.ts");

    var routes = [{
      path: '',
      component: _homerepair_page__WEBPACK_IMPORTED_MODULE_3__["HomerepairPage"]
    }];

    var HomerepairPageRoutingModule = function HomerepairPageRoutingModule() {
      _classCallCheck(this, HomerepairPageRoutingModule);
    };

    HomerepairPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomerepairPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/assessment/homerepair/homerepair.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/assessment/homerepair/homerepair.module.ts ***!
    \******************************************************************/

  /*! exports provided: HomerepairPageModule */

  /***/
  function srcAppPagesAssessmentHomerepairHomerepairModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomerepairPageModule", function () {
      return HomerepairPageModule;
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


    var _homerepair_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./homerepair-routing.module */
    "./src/app/pages/assessment/homerepair/homerepair-routing.module.ts");
    /* harmony import */


    var _homerepair_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./homerepair.page */
    "./src/app/pages/assessment/homerepair/homerepair.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/pages/shared/shared.module.ts");

    var HomerepairPageModule = function HomerepairPageModule() {
      _classCallCheck(this, HomerepairPageModule);
    };

    HomerepairPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _homerepair_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomerepairPageRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      declarations: [_homerepair_page__WEBPACK_IMPORTED_MODULE_6__["HomerepairPage"]]
    })], HomerepairPageModule);
    /***/
  },

  /***/
  "./src/app/pages/assessment/homerepair/homerepair.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/pages/assessment/homerepair/homerepair.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAssessmentHomerepairHomerepairPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2Vzc21lbnQvaG9tZXJlcGFpci9ob21lcmVwYWlyLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/assessment/homerepair/homerepair.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/assessment/homerepair/homerepair.page.ts ***!
    \****************************************************************/

  /*! exports provided: HomerepairPage */

  /***/
  function srcAppPagesAssessmentHomerepairHomerepairPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomerepairPage", function () {
      return HomerepairPage;
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


    var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/image-picker/ngx */
    "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");

    var HomerepairPage = /*#__PURE__*/function () {
      function HomerepairPage(navCtrl, imagePicker) {
        _classCallCheck(this, HomerepairPage);

        this.navCtrl = navCtrl;
        this.imagePicker = imagePicker;
        this.imageList = [];
      }

      _createClass(HomerepairPage, [{
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
          this.navCtrl.navigateForward(['/assessment/assessmentbar']);
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

          console.log(ev.checked);
        }
      }]);

      return HomerepairPage;
    }();

    HomerepairPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["ImagePicker"]
      }];
    };

    HomerepairPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-homerepair',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./homerepair.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/homerepair/homerepair.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./homerepair.page.scss */
      "./src/app/pages/assessment/homerepair/homerepair.page.scss"))["default"]]
    })], HomerepairPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-assessment-homerepair-homerepair-module-es5.js.map