(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-assessment-grooming-grooming-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/grooming/grooming.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/grooming/grooming.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n\n    <ion-toolbar class=\"headtoolbar\">\n\n        <ion-row>\n            <ion-col size=\"2\">\n                <ion-toolbar>\n                    <ion-buttons slot=\"start\">\n                        <m-backbutton></m-backbutton>\n                    </ion-buttons>\n                </ion-toolbar>\n            </ion-col>\n            <ion-col size=\"8\">\n                <div>\n                    <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\">Grooming</ion-text>\n                </div>\n            </ion-col>\n        </ion-row>\n\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n    <ion-grid style=\"padding:24px;height:fit-content\">\n        <!-- INSTRUCTIONS -->\n\n        <div class=\"nametag\" style=\"margin-top: 0px;\">\n            <ion-text position=\"floating\" id=\"tag\">Instructions(optional)</ion-text>\n        </div>\n        <div>\n            <ion-textarea style=\"height: 120px;\" class=\"input\" placeholder=\"Write here\" [(ngModel)]=\"formData.instructions\"></ion-textarea>\n        </div>\n\n        <!-- ADD IMAGE -->\n        <app-addimage (click)=\"addImage()\"></app-addimage>\n    <ion-text>\n      <div class=\"imagelist\" *ngFor=\"let img of imageList; let j=index\">\n        <ion-grid fixed class=\"ion-no-padding\">\n          <ion-row>\n            <ion-col style=\"padding-top: 11px;\" size=\"8\"><span>{{img.substring(img.lastIndexOf(\"/\") + 1) | slice:0:12}}</span></ion-col>\n            <ion-col size=\"4\">\n              <ion-button\n              fill=\"clear\"\n              shape=\"round\"\n              class=\"dltbtn\"\n              (click)=\"removeImg(j)\"        >\n              <ion-icon slot=\"icon-only\" src=\"assets/trash.svg\"></ion-icon>\n              Delete\n            </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid> \n      </div>\n    </ion-text>\n\n\n    </ion-grid>\n</ion-content>\n\n<ion-footer>\n    <div id=\"button\">\n        <ion-button [disabled]=\"false\" class=\"btnblue\" type=\"submit\" id=\"signup\" (click)=\"save()\">SAVE & PROCEED</ion-button>\n    </div>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/assessment/grooming/grooming-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/assessment/grooming/grooming-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: GroomingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroomingPageRoutingModule", function() { return GroomingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _grooming_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grooming.page */ "./src/app/pages/assessment/grooming/grooming.page.ts");




const routes = [
    {
        path: '',
        component: _grooming_page__WEBPACK_IMPORTED_MODULE_3__["GroomingPage"]
    }
];
let GroomingPageRoutingModule = class GroomingPageRoutingModule {
};
GroomingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GroomingPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/assessment/grooming/grooming.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/assessment/grooming/grooming.module.ts ***!
  \**************************************************************/
/*! exports provided: GroomingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroomingPageModule", function() { return GroomingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _grooming_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grooming-routing.module */ "./src/app/pages/assessment/grooming/grooming-routing.module.ts");
/* harmony import */ var _grooming_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grooming.page */ "./src/app/pages/assessment/grooming/grooming.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/pages/shared/shared.module.ts");








let GroomingPageModule = class GroomingPageModule {
};
GroomingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _grooming_routing_module__WEBPACK_IMPORTED_MODULE_5__["GroomingPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        declarations: [_grooming_page__WEBPACK_IMPORTED_MODULE_6__["GroomingPage"]]
    })
], GroomingPageModule);



/***/ }),

/***/ "./src/app/pages/assessment/grooming/grooming.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/assessment/grooming/grooming.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2Vzc21lbnQvZ3Jvb21pbmcvZ3Jvb21pbmcucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/assessment/grooming/grooming.page.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/assessment/grooming/grooming.page.ts ***!
  \************************************************************/
/*! exports provided: GroomingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroomingPage", function() { return GroomingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dataservice.service */ "./src/app/pages/dataservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _assessment_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assessment-service.service */ "./src/app/pages/assessment/assessment-service.service.ts");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");









let GroomingPage = class GroomingPage {
    constructor(dataService, router, apiService, location, imagePicker, navCtrl, assessmentService) {
        this.dataService = dataService;
        this.router = router;
        this.apiService = apiService;
        this.location = location;
        this.imagePicker = imagePicker;
        this.navCtrl = navCtrl;
        this.assessmentService = assessmentService;
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
        this.stateObject.GROOMING = this.formData;
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
            const key = 'GROOMING';
            this.assessmentService.getAssessmentStateObject().then((data) => {
                this.stateObject = data.assessmentValues.CARE_NEEDS;
                if (data.assessmentValues.CARE_NEEDS != null && data.assessmentValues.CARE_NEEDS[key] != null) {
                    this.formData = data.assessmentValues.CARE_NEEDS[key];
                }
                else {
                    // do nothing
                }
                this.readyFlag = true;
            });
        });
    }
};
GroomingPage.ctorParameters = () => [
    { type: _dataservice_service__WEBPACK_IMPORTED_MODULE_3__["DataserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_http_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__["ImagePicker"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _assessment_service_service__WEBPACK_IMPORTED_MODULE_7__["AssessmentServiceService"] }
];
GroomingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grooming',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./grooming.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/grooming/grooming.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./grooming.page.scss */ "./src/app/pages/assessment/grooming/grooming.page.scss")).default]
    })
], GroomingPage);



/***/ })

}]);
//# sourceMappingURL=pages-assessment-grooming-grooming-module-es2015.js.map