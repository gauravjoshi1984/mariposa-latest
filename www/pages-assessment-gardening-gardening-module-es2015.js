(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-assessment-gardening-gardening-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/gardening/gardening.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/gardening/gardening.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n\n    <ion-toolbar class=\"headtoolbar\">\n\n        <ion-row>\n            <ion-col size=\"2\">\n                <ion-toolbar>\n                    <ion-buttons slot=\"start\">\n                        <m-backbutton></m-backbutton>\n                    </ion-buttons>\n                </ion-toolbar>\n            </ion-col>\n            <ion-col size=\"8\">\n                <div>\n                    <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\">Gardening</ion-text>\n                </div>\n            </ion-col>\n        </ion-row>\n\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n    <ion-grid style=\"padding:24px;height:fit-content\">\n\n        <div class=\"nametag\" style=\"padding-top: 0px;\">\n            <ion-text position=\"floating\" id=\"tag\">Frequency</ion-text>\n        </div>\n        <div>\n            <ion-select mode=\"md\" class=\"input\" placeholder=\"Select\" [(ngModel)]=\"formData.selectedGardeningOption\">\n                <ion-select-option *ngFor=\"let gardeningOption of gardeningList\" value=\"{{gardeningOption}}\" selected>{{gardeningOption}}</ion-select-option>\n            </ion-select>\n        </div>\n\n        <!-- INSTRUCTIONS -->\n\n        <div class=\"nametag\" style=\"margin-top: 16px;\">\n            <ion-text position=\"floating\" id=\"tag\">Instructions(optional)</ion-text>\n        </div>\n        <div>\n            <ion-textarea [(ngModel)]=\"formData.instructions\" style=\"height: 120px;\" class=\"input\" placeholder=\"Write here\"></ion-textarea>\n        </div>\n\n        <!-- ADD IMAGE -->\n        <app-addimage (click)=\"addImage()\"></app-addimage>\n    <ion-text>\n      <div class=\"imagelist\" *ngFor=\"let img of imageList; let j=index\">\n        <ion-grid fixed class=\"ion-no-padding\">\n          <ion-row>\n            <ion-col style=\"padding-top: 11px;\" size=\"8\"><span>{{img.substring(img.lastIndexOf(\"/\") + 1) | slice:0:12}}</span></ion-col>\n            <ion-col size=\"4\">\n              <ion-button\n              fill=\"clear\"\n              shape=\"round\"\n              class=\"dltbtn\"\n              (click)=\"removeImg(j)\"        >\n              <ion-icon slot=\"icon-only\" src=\"assets/trash.svg\"></ion-icon>\n              Delete\n            </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid> \n      </div>\n    </ion-text>\n\n    </ion-grid>\n</ion-content>\n\n<ion-footer>\n    <div id=\"button\">\n        <ion-button [disabled]=\"false\" class=\"btnblue\" type=\"submit\" id=\"signup\" (click)=\"save()\">SAVE & PROCEED</ion-button>\n    </div>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/assessment/gardening/gardening-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/assessment/gardening/gardening-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: GardeningPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GardeningPageRoutingModule", function() { return GardeningPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _gardening_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gardening.page */ "./src/app/pages/assessment/gardening/gardening.page.ts");




const routes = [
    {
        path: '',
        component: _gardening_page__WEBPACK_IMPORTED_MODULE_3__["GardeningPage"]
    }
];
let GardeningPageRoutingModule = class GardeningPageRoutingModule {
};
GardeningPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GardeningPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/assessment/gardening/gardening.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/assessment/gardening/gardening.module.ts ***!
  \****************************************************************/
/*! exports provided: GardeningPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GardeningPageModule", function() { return GardeningPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _gardening_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gardening-routing.module */ "./src/app/pages/assessment/gardening/gardening-routing.module.ts");
/* harmony import */ var _gardening_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gardening.page */ "./src/app/pages/assessment/gardening/gardening.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/pages/shared/shared.module.ts");








let GardeningPageModule = class GardeningPageModule {
};
GardeningPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _gardening_routing_module__WEBPACK_IMPORTED_MODULE_5__["GardeningPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        declarations: [_gardening_page__WEBPACK_IMPORTED_MODULE_6__["GardeningPage"]]
    })
], GardeningPageModule);



/***/ }),

/***/ "./src/app/pages/assessment/gardening/gardening.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/assessment/gardening/gardening.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2Vzc21lbnQvZ2FyZGVuaW5nL2dhcmRlbmluZy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/assessment/gardening/gardening.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/assessment/gardening/gardening.page.ts ***!
  \**************************************************************/
/*! exports provided: GardeningPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GardeningPage", function() { return GardeningPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dataservice.service */ "./src/app/pages/dataservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _assessment_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assessment-service.service */ "./src/app/pages/assessment/assessment-service.service.ts");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");









let GardeningPage = class GardeningPage {
    constructor(dataService, router, apiService, location, imagePicker, assessmentService, navCtrl) {
        this.dataService = dataService;
        this.router = router;
        this.apiService = apiService;
        this.location = location;
        this.imagePicker = imagePicker;
        this.assessmentService = assessmentService;
        this.navCtrl = navCtrl;
        this.gardeningList = ['a', 'b'];
        this.formData = {};
        this.imageList = [];
    }
    ngOnInit() {
    }
    addImage() {
        let options = {
            maximumImagesCount: 4,
        };
        this.imagePicker.getPictures(options).then((results) => {
            console.log(results);
            for (var i = 0; i < results.length; i++) {
                this.imageList.push(results[i]);
            }
        }, (err) => { });
    }
    removeImg(i) {
        console.log("*", i);
        this.imageList.splice(i, 1);
    }
    save() {
        if (this.stateObject == null) {
            this.stateObject = {};
        }
        this.stateObject.GARDENING = this.formData;
        this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then((response) => {
            console.log(response);
            this.navCtrl.navigateForward(['/assessment/assessmentbar']);
        });
        console.log('called Save', this.formData);
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.readyFlag = false;
            this.careCircleId = yield this.assessmentService.getCareCircleId();
            this.userId = yield this.dataService.getUserInfo();
            this.userId = this.userId.userId;
            const key = 'GARDENING';
            this.assessmentService.getAssessmentStateObject().then((data) => {
                this.stateObject = data.assessmentValues.CARE_NEEDS;
                if (data.assessmentValues.CARE_NEEDS != null && data.assessmentValues.CARE_NEEDS[key] != null) {
                    this.formData = data.assessmentValues.CARE_NEEDS[key];
                }
                else {
                    // do nothing
                }
                this.gardeningList = data.assessmentConfiguration.CARE_NEEDS[key].frequency;
                this.readyFlag = true;
            });
        });
    }
};
GardeningPage.ctorParameters = () => [
    { type: _dataservice_service__WEBPACK_IMPORTED_MODULE_3__["DataserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_http_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__["ImagePicker"] },
    { type: _assessment_service_service__WEBPACK_IMPORTED_MODULE_7__["AssessmentServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
GardeningPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gardening',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./gardening.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/gardening/gardening.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./gardening.page.scss */ "./src/app/pages/assessment/gardening/gardening.page.scss")).default]
    })
], GardeningPage);



/***/ })

}]);
//# sourceMappingURL=pages-assessment-gardening-gardening-module-es2015.js.map