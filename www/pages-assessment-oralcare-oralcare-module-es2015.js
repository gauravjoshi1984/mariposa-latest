(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-assessment-oralcare-oralcare-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/oralcare/oralcare.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/oralcare/oralcare.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n  \n  <ion-toolbar class=\"headtoolbar\">\n    \n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-toolbar>\n            <ion-buttons slot=\"start\">\n              <m-backbutton></m-backbutton>\n            </ion-buttons>\n        </ion-toolbar> \n        </ion-col>\n        <ion-col size=\"8\">\n          <div>\n            <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\">Oral Care</ion-text>\n          </div> \n        </ion-col>\n      </ion-row>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-grid style=\"padding:24px;height:fit-content\">\n\n    <div class=\"nametag\" style=\"padding-top: 0px;\">\n      <ion-text position=\"floating\" id=\"tag\">Preferred tooth Paste</ion-text>\n    </div>\n    <div style=\"margin-bottom:24px;\">\n      <ion-select\n        mode=\"md\"\n        class=\"input\"\n        placeholder=\"Select\"\n      ></ion-select>\n    </div>\n\n    <app-toggle\n      [name]=\"'Senior has Tooth Sensitivity'\"\n\n      (result)=\"changeToggle($event)\"\n    ></app-toggle>\n    <hr class=\"solid\" />\n\n    \n   \n    \n    <!-- INSTRUCTIONS -->\n\n    <div class=\"nametag\" style=\"margin-top: 0px;\">\n      <ion-text position=\"floating\" id=\"tag\">Instructions(optional)</ion-text>\n    </div>\n    <div>\n      <ion-textarea\n        style=\"height: 120px;\"\n        class=\"input\"\n        placeholder=\"Write here\"\n      ></ion-textarea>\n    </div>\n\n    <!-- ADD IMAGE -->\n    <app-addimage (click)=\"addImage()\"></app-addimage>\n    <ion-text>\n      <div class=\"imagelist\" *ngFor=\"let img of imageList; let j=index\">\n        <ion-grid fixed class=\"ion-no-padding\">\n          <ion-row>\n            <ion-col style=\"padding-top: 11px;\" size=\"8\"><span>{{img.substring(img.lastIndexOf(\"/\") + 1) | slice:0:12}}</span></ion-col>\n            <ion-col size=\"4\">\n              <ion-button\n              fill=\"clear\"\n              shape=\"round\"\n              class=\"dltbtn\"\n              (click)=\"removeImg(j)\"        >\n              <ion-icon slot=\"icon-only\" src=\"assets/trash.svg\"></ion-icon>\n              Delete\n            </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid> \n      </div>\n    </ion-text>\n\n\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <div id=\"button\">\n    <ion-button [disabled]=\"false\" class=\"btnblue\" type=\"submit\"  (click) = \"save()\" id=\"signup\">SAVE & PROCEED</ion-button>\n  </div>  \n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/assessment/oralcare/oralcare-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/assessment/oralcare/oralcare-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: OralcarePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OralcarePageRoutingModule", function() { return OralcarePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _oralcare_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oralcare.page */ "./src/app/pages/assessment/oralcare/oralcare.page.ts");




const routes = [
    {
        path: '',
        component: _oralcare_page__WEBPACK_IMPORTED_MODULE_3__["OralcarePage"]
    }
];
let OralcarePageRoutingModule = class OralcarePageRoutingModule {
};
OralcarePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OralcarePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/assessment/oralcare/oralcare.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/assessment/oralcare/oralcare.module.ts ***!
  \**************************************************************/
/*! exports provided: OralcarePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OralcarePageModule", function() { return OralcarePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _oralcare_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./oralcare-routing.module */ "./src/app/pages/assessment/oralcare/oralcare-routing.module.ts");
/* harmony import */ var _oralcare_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oralcare.page */ "./src/app/pages/assessment/oralcare/oralcare.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/pages/shared/shared.module.ts");








let OralcarePageModule = class OralcarePageModule {
};
OralcarePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _oralcare_routing_module__WEBPACK_IMPORTED_MODULE_5__["OralcarePageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        declarations: [_oralcare_page__WEBPACK_IMPORTED_MODULE_6__["OralcarePage"]]
    })
], OralcarePageModule);



/***/ }),

/***/ "./src/app/pages/assessment/oralcare/oralcare.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/assessment/oralcare/oralcare.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2Vzc21lbnQvb3JhbGNhcmUvb3JhbGNhcmUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/assessment/oralcare/oralcare.page.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/assessment/oralcare/oralcare.page.ts ***!
  \************************************************************/
/*! exports provided: OralcarePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OralcarePage", function() { return OralcarePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");




let OralcarePage = class OralcarePage {
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
};
OralcarePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["ImagePicker"] }
];
OralcarePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oralcare',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oralcare.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/oralcare/oralcare.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oralcare.page.scss */ "./src/app/pages/assessment/oralcare/oralcare.page.scss")).default]
    })
], OralcarePage);



/***/ })

}]);
//# sourceMappingURL=pages-assessment-oralcare-oralcare-module-es2015.js.map