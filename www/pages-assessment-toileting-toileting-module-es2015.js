(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-assessment-toileting-toileting-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/toileting/toileting.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/toileting/toileting.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n\n  \n  <ion-toolbar class=\"headtoolbar\">\n    \n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-toolbar>\n            <ion-buttons slot=\"start\">\n             <m-backbutton></m-backbutton>\n            </ion-buttons>\n        </ion-toolbar> \n        </ion-col>\n        <ion-col size=\"8\">\n          <div>\n            <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\">Toileting</ion-text>\n          </div> \n        </ion-col>\n      </ion-row>\n\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content *ngIf=\"formCreated\">\n    <ion-grid style=\"padding:24px;height:fit-content\">\n        <div [formGroup]=\"toiletingForm\">\n            <!-- <div *ngFor=\"let item of electronicList\"> -->\n            <app-toggle [form]=\"toiletingForm\" name=\"Toilet\"></app-toggle>\n            <hr class=\"solid\" />\n            <app-toggle [form]=\"toiletingForm\" name=\"Commode\"></app-toggle>\n            <hr class=\"solid\" />\n            <!-- </div> -->\n            <!-- INSTRUCTIONS -->\n            <div class=\"nametag\" style=\"margin-top: 0px;\">\n                <ion-text position=\"floating\" id=\"tag\">Instructions(optional)</ion-text>\n            </div>\n            <div>\n                <ion-textarea formControlName=\"instructions\" style=\"height: 120px;\" class=\"input\" placeholder=\"Write here\"></ion-textarea>\n            </div>\n            <!-- ADD IMAGE -->\n            <app-addimage (click)=\"addImage()\"></app-addimage>\n    <ion-text>\n      <div class=\"imagelist\" *ngFor=\"let img of imageList; let j=index\">\n        <ion-grid fixed class=\"ion-no-padding\">\n          <ion-row>\n            <ion-col style=\"padding-top: 11px;\" size=\"8\"><span>{{img.substring(img.lastIndexOf(\"/\") + 1) | slice:0:12}}</span></ion-col>\n            <ion-col size=\"4\">\n              <ion-button\n              fill=\"clear\"\n              shape=\"round\"\n              class=\"dltbtn\"\n              (click)=\"removeImg(j)\"        >\n              <ion-icon slot=\"icon-only\" src=\"assets/trash.svg\"></ion-icon>\n              Delete\n            </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid> \n      </div>\n    </ion-text>\n        </div>\n    </ion-grid>\n</ion-content>\n\n<ion-footer>\n    <div id=\"button\">\n        <ion-button [disabled]=\"false\" class=\"btnblue\" type=\"submit\" id=\"signup\" (click)= \"save()\" >SAVE & PROCEED</ion-button>\n    </div>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/assessment/toileting/toileting-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/assessment/toileting/toileting-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ToiletingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToiletingPageRoutingModule", function() { return ToiletingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _toileting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toileting.page */ "./src/app/pages/assessment/toileting/toileting.page.ts");




const routes = [
    {
        path: '',
        component: _toileting_page__WEBPACK_IMPORTED_MODULE_3__["ToiletingPage"]
    }
];
let ToiletingPageRoutingModule = class ToiletingPageRoutingModule {
};
ToiletingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ToiletingPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/assessment/toileting/toileting.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/assessment/toileting/toileting.module.ts ***!
  \****************************************************************/
/*! exports provided: ToiletingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToiletingPageModule", function() { return ToiletingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _toileting_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toileting-routing.module */ "./src/app/pages/assessment/toileting/toileting-routing.module.ts");
/* harmony import */ var _toileting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toileting.page */ "./src/app/pages/assessment/toileting/toileting.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/pages/shared/shared.module.ts");








let ToiletingPageModule = class ToiletingPageModule {
};
ToiletingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _toileting_routing_module__WEBPACK_IMPORTED_MODULE_5__["ToiletingPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_toileting_page__WEBPACK_IMPORTED_MODULE_6__["ToiletingPage"]]
    })
], ToiletingPageModule);



/***/ }),

/***/ "./src/app/pages/assessment/toileting/toileting.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/assessment/toileting/toileting.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2Vzc21lbnQvdG9pbGV0aW5nL3RvaWxldGluZy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/assessment/toileting/toileting.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/assessment/toileting/toileting.page.ts ***!
  \**************************************************************/
/*! exports provided: ToiletingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToiletingPage", function() { return ToiletingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dataservice.service */ "./src/app/pages/dataservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _assessment_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assessment-service.service */ "./src/app/pages/assessment/assessment-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");








let ToiletingPage = class ToiletingPage {
    constructor(dataService, router, navCtrl, imagePicker, assessmentService, formBuilder) {
        this.dataService = dataService;
        this.router = router;
        this.navCtrl = navCtrl;
        this.imagePicker = imagePicker;
        this.assessmentService = assessmentService;
        this.formBuilder = formBuilder;
        this.formCreated = false;
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
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.key = 'TOILETING';
            this.careCircleId = yield this.assessmentService.getCareCircleId();
            this.userId = yield this.dataService.getUserInfo();
            this.userId = this.userId.userId;
            this.toiletingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
            this.assessmentService.getAssessmentStateObject().then((data) => {
                this.stateObject = data.assessmentValues.CARE_NEEDS;
                if (data.assessmentValues.CARE_NEEDS != null && data.assessmentValues.CARE_NEEDS[this.key] != null) {
                    // data is present
                    Object.keys(data.assessmentValues.CARE_NEEDS[this.key]).forEach((element) => {
                        this.toiletingForm.addControl(element, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.stateObject[this.key][element]));
                    });
                }
                else {
                    // data is not present
                    this.toiletingForm.addControl('instructions', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]());
                    this.toiletingForm.addControl('Toilet', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false));
                    this.toiletingForm.addControl('Commode', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false));
                }
                this.formCreated = true;
            });
        });
    }
    changeToggle(ev) {
        console.log(ev);
    }
    save() {
        if (this.stateObject == null) {
            this.stateObject = {};
        }
        this.stateObject[this.key] = this.toiletingForm.value;
        this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then((response) => {
            console.log(response);
            this.navCtrl.navigateForward(['/assessment/assessmentbar']);
        });
    }
};
ToiletingPage.ctorParameters = () => [
    { type: _dataservice_service__WEBPACK_IMPORTED_MODULE_3__["DataserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_7__["ImagePicker"] },
    { type: _assessment_service_service__WEBPACK_IMPORTED_MODULE_5__["AssessmentServiceService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
ToiletingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-toileting',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./toileting.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/toileting/toileting.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./toileting.page.scss */ "./src/app/pages/assessment/toileting/toileting.page.scss")).default]
    })
], ToiletingPage);



/***/ })

}]);
//# sourceMappingURL=pages-assessment-toileting-toileting-module-es2015.js.map