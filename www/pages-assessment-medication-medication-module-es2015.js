(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-assessment-medication-medication-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/medication/medication.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/medication/medication.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n  <ion-toolbar class=\"headtoolbar\">\n    <ion-row>\n      <ion-col size=\"2\">\n        <ion-toolbar>\n          <ion-buttons slot=\"start\">\n           <m-backbutton></m-backbutton>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-col>\n      <ion-col size=\"10\">\n        <div>\n          <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\"\n            >Medication Management</ion-text\n          >\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid style=\"padding: 24px; height: fit-content; margin-bottom: 80px;\">\n    <!-- ASSISTANCES-->\n\n    <div style=\"padding-top: 0px; margin-bottom: 15px;\">\n      <ion-label style=\"font-size: 16px; line-height: 19px;\"\n        >Allergic to these medications</ion-label\n      >\n    </div>\n\n    <!-- CHECKBOX 1 -->\n\n    <ion-row style=\"align-items: center; margin-top: 5px;\">\n      <ion-col  size=\"1\">\n        <div style=\"padding-left: 3px;\">\n          <ion-checkbox #shopping mode=\"md\" color=\"mwhite\" checked=\"false\"></ion-checkbox>\n        </div>\n      </ion-col>\n      <ion-col\n        (click)=\"generateClick(shopping)\"\n        size=\"11\"\n        style=\"padding-top: 0px;\"\n      >\n        <div>\n          <ion-text\n            style=\"\n              font-size: 16px;\n              line-height: 19px;\n              font-weight: 300;\n              margin-left: 12px;\n            \"\n            color=\"mdblack\"\n            >Drug H1</ion-text\n          >\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <!-- CHECKBOX 2 -->\n\n    <ion-row style=\"align-items: center; margin-top: 5px;\">\n      <ion-col  size=\"1\">\n        <div style=\"padding-left: 3px;\">\n          <ion-checkbox #delivery mode=\"md\" color=\"mwhite\" checked=\"false\"></ion-checkbox>\n        </div>\n      </ion-col>\n      <ion-col\n        (click)=\"generateClick(delivery)\"\n        size=\"11\"\n        style=\"padding-top: 0px;\"\n      >\n        <div>\n          <ion-text\n            style=\"\n              font-size: 16px;\n              line-height: 19px;\n              font-weight: 300;\n              margin-left: 12px;\n            \"\n            color=\"mdblack\"\n            >Drug H2</ion-text\n          >\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <!-- CHECKBOX 3 -->\n\n    <ion-row style=\"align-items: center; margin-top: 5px;\">\n      <ion-col  size=\"1\">\n        <div style=\"padding-left: 3px;\">\n          <ion-checkbox #cooking mode=\"md\" color=\"mwhite\" checked=\"false\"></ion-checkbox>\n        </div>\n      </ion-col>\n      <ion-col\n        (click)=\"generateClick(cooking)\"\n        size=\"11\"\n        style=\"padding-top: 0px;\"\n      >\n        <div>\n          <ion-text\n            style=\"\n              font-size: 16px;\n              line-height: 19px;\n              font-weight: 300;\n              margin-left: 12px;\n            \"\n            color=\"mdblack\"\n            >Sample Drug 1</ion-text\n          >\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <!-- CHECKBOX 4 -->\n\n    <ion-row style=\"align-items: center; margin-top: 5px;\">\n      <ion-col  size=\"1\">\n        <div style=\"padding-left: 3px;\">\n          <ion-checkbox\n            mode=\"md\"\n            #preparation\n            color=\"mwhite\"\n            checked=\"false\"\n          ></ion-checkbox>\n        </div>\n      </ion-col>\n      <ion-col\n        (click)=\"generateClick(preparation)\"\n        size=\"11\"\n        style=\"padding-top: 0px;\"\n      >\n        <div>\n          <ion-text\n            style=\"\n              font-size: 16px;\n              line-height: 19px;\n              font-weight: 300;\n              margin-left: 12px;\n            \"\n            color=\"mdblack\"\n            >Sample Drug 2</ion-text\n          >\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <!-- CHECKBOX 5 -->\n\n    <ion-row style=\"align-items: center; margin-top: 5px;\">\n      <ion-col  size=\"1\">\n        <div style=\"padding-left: 3px;\">\n          <ion-checkbox #serving mode=\"md\" color=\"mwhite\" checked=\"false\"></ion-checkbox>\n        </div>\n      </ion-col>\n      <ion-col\n        (click)=\"generateClick(serving)\"\n        size=\"11\"\n        style=\"padding-top: 0px;\"\n      >\n        <div>\n          <ion-text\n            style=\"\n              font-size: 16px;\n              line-height: 19px;\n              font-weight: 300;\n              margin-left: 12px;\n            \"\n            color=\"mdblack\"\n            >Sample Drug 3</ion-text\n          >\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <hr style=\"margin-bottom: 7px;\" class=\"solid\" />\n\n    \n    <app-toggle\n      [name]=\"'Previous Cardiac Arrets'\"\n      \n      (result)=\"changeToggle($event)\"\n    ></app-toggle>\n\n    <hr style=\"margin-bottom: 7px;\" class=\"solid\" />\n\n    \n\n    \n    <app-toggle\n      [name]=\"'Diabetic'\"\n      \n      (result)=\"changeToggle($event)\"\n    ></app-toggle>\n    \n    <hr style=\"margin-bottom: 7px;\" class=\"solid\" />\n\n   \n\n    \n    <app-toggle\n      [name]=\"'Medication Shopping required'\"\n      \n      (result)=\"changeToggle($event)\"\n    ></app-toggle>\n    \n    <hr style=\"margin-bottom: 7px;\" class=\"solid\" />\n\n   \n    <!-- INSTRUCTIONS -->\n\n    <div class=\"nametag\">\n      <ion-text position=\"floating\" id=\"tag\">Instructions(optional)</ion-text>\n    </div>\n    <div>\n      <ion-textarea\n        style=\"height: 120px;\"\n        class=\"input\"\n        placeholder=\"Write here\"\n      ></ion-textarea>\n    </div>\n\n    <!-- ADD IMAGE -->\n\n    <!-- <ion-row style=\"align-items: center;\">\n      <ion-col size=\"1\">\n        <ion-icon\n          class=\"camera\"\n          style=\"width: 24px; height: 21px; float: right;\"\n          src=\"../assets/MariposaIcons/Cameraicon.svg\"\n        ></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-text size=\"4\"\n          ><h5\n            style=\"\n              font-weight: 600;\n              font-size: 14px;\n              line-height: 17px;\n              margin-left: 9px;\n            \"\n          >\n            ADD IMAGES\n          </h5></ion-text\n        >\n      </ion-col>\n    </ion-row> -->\n    <app-addimage (click)=\"addImage()\"></app-addimage>\n    <ion-text>\n      <div class=\"imagelist\" *ngFor=\"let img of imageList; let j=index\">\n        <ion-grid fixed class=\"ion-no-padding\">\n          <ion-row>\n            <ion-col style=\"padding-top: 11px;\" size=\"8\"><span>{{img.substring(img.lastIndexOf(\"/\") + 1) | slice:0:12}}</span></ion-col>\n            <ion-col size=\"4\">\n              <ion-button\n              fill=\"clear\"\n              shape=\"round\"\n              class=\"dltbtn\"\n              (click)=\"removeImg(j)\"        >\n              <ion-icon slot=\"icon-only\" src=\"assets/trash.svg\"></ion-icon>\n              Delete\n            </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid> \n      </div>\n    </ion-text>\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <div id=\"button\">\n    <ion-button [disabled]=\"false\" class=\"btnblue\" type=\"submit\"  (click)= \"save()\" id=\"signup\">SAVE & PROCEED</ion-button>\n  </div>  \n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/assessment/medication/medication-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/assessment/medication/medication-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: MedicationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicationPageRoutingModule", function() { return MedicationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _medication_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medication.page */ "./src/app/pages/assessment/medication/medication.page.ts");




const routes = [
    {
        path: '',
        component: _medication_page__WEBPACK_IMPORTED_MODULE_3__["MedicationPage"]
    }
];
let MedicationPageRoutingModule = class MedicationPageRoutingModule {
};
MedicationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MedicationPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/assessment/medication/medication.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/assessment/medication/medication.module.ts ***!
  \******************************************************************/
/*! exports provided: MedicationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicationPageModule", function() { return MedicationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _medication_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./medication-routing.module */ "./src/app/pages/assessment/medication/medication-routing.module.ts");
/* harmony import */ var _medication_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./medication.page */ "./src/app/pages/assessment/medication/medication.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/pages/shared/shared.module.ts");








let MedicationPageModule = class MedicationPageModule {
};
MedicationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _medication_routing_module__WEBPACK_IMPORTED_MODULE_5__["MedicationPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        declarations: [_medication_page__WEBPACK_IMPORTED_MODULE_6__["MedicationPage"]]
    })
], MedicationPageModule);



/***/ }),

/***/ "./src/app/pages/assessment/medication/medication.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/assessment/medication/medication.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2Vzc21lbnQvbWVkaWNhdGlvbi9tZWRpY2F0aW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/assessment/medication/medication.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/assessment/medication/medication.page.ts ***!
  \****************************************************************/
/*! exports provided: MedicationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicationPage", function() { return MedicationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");




let MedicationPage = class MedicationPage {
    constructor(navCtrl, imagePicker) {
        this.navCtrl = navCtrl;
        this.imagePicker = imagePicker;
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
        this.navCtrl.navigateForward(['/assessment/assessmentbar']);
    }
    changeToggle(ev) {
        console.log(ev);
    }
    generateClick(ev) {
        // ev.click();
        if (ev.checked == true) {
            ev.checked = false;
        }
        else {
            ev.checked = true;
        }
        console.log(ev.checked);
    }
};
MedicationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["ImagePicker"] }
];
MedicationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-medication',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./medication.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/medication/medication.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./medication.page.scss */ "./src/app/pages/assessment/medication/medication.page.scss")).default]
    })
], MedicationPage);



/***/ })

}]);
//# sourceMappingURL=pages-assessment-medication-medication-module-es2015.js.map