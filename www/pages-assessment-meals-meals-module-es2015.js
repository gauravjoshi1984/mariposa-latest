(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-assessment-meals-meals-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/meals/meals.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/meals/meals.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n    <ion-toolbar class=\"headtoolbar\">\n        <ion-row>\n            <ion-col size=\"1.5\">\n                <ion-toolbar>\n                    <ion-buttons slot=\"start\">\n                        <m-backbutton></m-backbutton>\n                    </ion-buttons>\n                </ion-toolbar>\n            </ion-col>\n            <ion-col size=\"10\">\n                <div>\n                    <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\">Cooking/Meals Preperation</ion-text>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid style=\"padding: 24px; height: fit-content; margin-bottom: 48px;\">\n        <!-- ASSISTANCES-->\n\n        <div style=\"padding-top: 0px; margin-bottom: 15px;\">\n            <ion-label style=\"font-size: 16px; line-height: 19px;\">Assistance</ion-label>\n        </div>\n\n        <!-- CHECKBOX 1 -->\n\n        <ion-row style=\"align-items: center; margin-top: 5px;\">\n            <ion-col size=\"1\">\n                <div style=\"padding-left: 3px;\">\n                    <ion-checkbox #shopping mode=\"md\" color=\"mwhite\" checked=\"false\" [(ngModel)]=\"formData.shopping\"></ion-checkbox>\n                </div>\n            </ion-col>\n            <ion-col (click)=\"generateClick(shopping)\" size=\"11\" style=\"padding-top: 0px;\">\n                <div>\n                    <ion-text style=\"\n              font-size: 16px;\n              line-height: 19px;\n              font-weight: 300;\n              margin-left: 12px;\n            \" color=\"mdblack\">Shopping</ion-text>\n                </div>\n            </ion-col>\n        </ion-row>\n\n        <!-- CHECKBOX 2 -->\n\n        <ion-row style=\"align-items: center; margin-top: 5px;\">\n            <ion-col size=\"1\">\n                <div style=\"padding-left: 3px;\">\n                    <ion-checkbox #delivery mode=\"md\" color=\"mwhite\" checked=\"false\" [(ngModel)]=\"formData.delivery\"></ion-checkbox>\n                </div>\n            </ion-col>\n            <ion-col (click)=\"generateClick(delivery)\" size=\"11\" style=\"padding-top: 0px;\">\n                <div>\n                    <ion-text style=\"\n              font-size: 16px;\n              line-height: 19px;\n              font-weight: 300;\n              margin-left: 12px;\n            \" color=\"mdblack\">Delivery</ion-text>\n                </div>\n            </ion-col>\n        </ion-row>\n\n        <!-- CHECKBOX 3 -->\n\n        <ion-row style=\"align-items: center; margin-top: 5px;\">\n            <ion-col size=\"1\">\n                <div style=\"padding-left: 3px;\">\n                    <ion-checkbox #cooking mode=\"md\" color=\"mwhite\" checked=\"false\" [(ngModel)]=\"formData.cooking\"></ion-checkbox>\n                </div>\n            </ion-col>\n            <ion-col (click)=\"generateClick(cooking)\" size=\"11\" style=\"padding-top: 0px;\">\n                <div>\n                    <ion-text style=\"\n              font-size: 16px;\n              line-height: 19px;\n              font-weight: 300;\n              margin-left: 12px;\n            \" color=\"mdblack\">Cooking</ion-text>\n                </div>\n            </ion-col>\n        </ion-row>\n\n        <!-- CHECKBOX 4 -->\n\n        <ion-row style=\"align-items: center; margin-top: 5px;\">\n            <ion-col size=\"1\">\n                <div style=\"padding-left: 3px;\">\n                    <ion-checkbox mode=\"md\" #preparation color=\"mwhite\" checked=\"false\" [(ngModel)]=\"formData.preparation\"></ion-checkbox>\n                </div>\n            </ion-col>\n            <ion-col (click)=\"generateClick(preparation)\" size=\"11\" style=\"padding-top: 0px;\">\n                <div>\n                    <ion-text style=\"\n              font-size: 16px;\n              line-height: 19px;\n              font-weight: 300;\n              margin-left: 12px;\n            \" color=\"mdblack\">Preparation</ion-text>\n                </div>\n            </ion-col>\n        </ion-row>\n\n        <!-- CHECKBOX 5 -->\n\n        <ion-row style=\"align-items: center; margin-top: 5px;\">\n            <ion-col size=\"1\">\n                <div style=\"padding-left: 3px;\">\n                    <ion-checkbox #serving mode=\"md\" color=\"mwhite\" checked=\"false\" [(ngModel)]=\"formData.serving\"></ion-checkbox>\n                </div>\n            </ion-col>\n            <ion-col (click)=\"generateClick(serving)\" size=\"11\" style=\"padding-top: 0px;\">\n                <div>\n                    <ion-text style=\"\n              font-size: 16px;\n              line-height: 19px;\n              font-weight: 300;\n              margin-left: 12px;\n            \" color=\"mdblack\">Serving</ion-text>\n                </div>\n            </ion-col>\n        </ion-row>\n\n        <hr style=\"margin-bottom: 7px;\" class=\"solid\" />\n\n        <!-- Special Diet -->\n\n        <!-- <ion-row style=\"align-items: center;\">\n      <ion-col size=\"8\">\n        <ion-text\n          (click)=\"generateClick(specialdiet)\"\n          style=\"font-size: 16px; line-height: 19px; font-weight: 300;\"\n          >Special Diet</ion-text\n        >\n      </ion-col>\n      <ion-col>\n        <ion-text\n          style=\"\n            font-size: 16px;\n            line-height: 19px;\n            font-weight: normal;\n            float: right;\n            margin-right: 12px;\n          \"\n          ><span *ngIf=\"specialdiet.checked\">YES</span\n          ><span *ngIf=\"!specialdiet.checked\">NO</span></ion-text\n        >\n      </ion-col>\n      <ion-col>\n        <ion-toggle\n          mode=\"ios\"\n          checked\n          color=\"primary\"\n          style=\"float: right;\"\n          #specialdiet\n        ></ion-toggle>\n      </ion-col>\n    </ion-row> -->\n        <app-toggle [name]=\"'Special Diet'\" [value]=\"formData.specialDiet\" (result)=\"changeToggle('specialDiet',$event)\"></app-toggle>\n        <hr class=\"solid\" />\n\n        <!-- FAV BREAKFAST -->\n\n        <div class=\"nametag\" style=\"padding-top: 0px;\">\n            <ion-text position=\"floating\" id=\"tag\">Favorite Breakfast</ion-text>\n        </div>\n        <div *ngFor=\"let breakfast of formData.breakfast;let i = index\">\n            <ion-input mode=\"md\" class=\"input\" placeholder=\"Select Receipe\" [(ngModel)]=\"formData.breakfast[i]\"></ion-input>\n        </div>\n\n        <ion-button class=\"addbutton\" fill=\"outline\" shape=\"round\" (click)=\"addMore('breakfast')\">\n            <ion-icon class=\"plusbutton\" slot=\"start\" name=\"add-circle\"></ion-icon>Add\n        </ion-button>\n\n        <!-- FAV LUNCH-->\n\n        <div class=\"nametag\">\n            <ion-text position=\"floating\" id=\"tag\">Favorite Lunch</ion-text>\n        </div>\n        <div *ngFor=\"let lunch of formData.lunch;let i = index\">\n            <ion-input mode=\"md\" class=\"input\" placeholder=\"Select Receipe\" [(ngModel)]=\"formData.lunch[i]\"></ion-input>\n        </div>\n\n        <ion-button class=\"addbutton\" fill=\"outline\" shape=\"round\" (click)=\"addMore('lunch')\">\n            <ion-icon class=\"plusbutton\" slot=\"start\" name=\"add-circle\"></ion-icon>Add\n        </ion-button>\n\n        <!-- FAV DINNER -->\n\n        <div class=\"nametag\">\n            <ion-text position=\"floating\" id=\"tag\">Favorite Dinner</ion-text>\n        </div>\n        <div *ngFor=\"let dinner of formData.dinner;let i = index\">\n            <ion-input mode=\"md\" class=\"input\" placeholder=\"Select Receipe\" [(ngModel)]=\"formData.dinner[i]\"></ion-input>\n        </div>\n\n        <ion-button class=\"addbutton\" fill=\"outline\" shape=\"round\" (click)=\"addMore('dinner')\">\n            <ion-icon class=\"plusbutton\" slot=\"start\" name=\"add-circle\"></ion-icon>Add\n        </ion-button>\n\n        <!-- FAV SNACK -->\n\n        <div class=\"nametag\">\n            <ion-text position=\"floating\" id=\"tag\">Favorite Snack</ion-text>\n        </div>\n        <div *ngFor=\"let snack of formData.snack;let i = index\">\n            <ion-input mode=\"md\" class=\"input\" placeholder=\"Select receipe\" [(ngModel)]=\"formData.snack[i]\"></ion-input>\n        </div>\n\n        <ion-button class=\"addbutton\" fill=\"outline\" shape=\"round\" (click)=\"addMore('snack')\">\n            <ion-icon class=\"plusbutton\" slot=\"start\" name=\"add-circle\"></ion-icon>Add\n        </ion-button>\n\n        <!-- SHOPPING BY -->\n\n        <div class=\"nametag margin\">\n            <ion-text position=\"floating\" id=\"tag\">Shopping By</ion-text>\n        </div>\n        <div>\n            <ion-select mode=\"md\" class=\"input\" placeholder=\"Select Person\" (ngModel)=\"formData.shopping\"></ion-select>\n        </div>\n\n        <!-- INSTRUCTIONS -->\n\n        <div class=\"nametag margin\">\n            <ion-text position=\"floating\" id=\"tag\">Instructions(optional)</ion-text>\n        </div>\n        <div>\n            <ion-textarea style=\"height: 120px;\" class=\"input\" placeholder=\"Write here\" [(ngModel)]=\"formData.instructions\"></ion-textarea>\n        </div>\n\n        <!-- ADD IMAGE -->\n\n        <!-- <ion-row style=\"align-items: center;\">\n      <ion-col size=\"1\">\n        <ion-icon\n          class=\"camera\"\n          style=\"width: 24px; height: 21px; float: right;\"\n          src=\"../assets/MariposaIcons/Cameraicon.svg\"\n        ></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-text size=\"4\"\n          ><h5\n            style=\"\n              font-weight: 600;\n              font-size: 14px;\n              line-height: 17px;\n              margin-left: 9px;\n            \"\n          >\n            ADD IMAGES\n          </h5></ion-text\n        >\n      </ion-col>\n    </ion-row> -->\n    <app-addimage (click)=\"addImage()\"></app-addimage>\n    <ion-text>\n      <div class=\"imagelist\" *ngFor=\"let img of imageList; let j=index\">\n        <ion-grid fixed class=\"ion-no-padding\">\n          <ion-row>\n            <ion-col style=\"padding-top: 11px;\" size=\"8\"><span>{{img.substring(img.lastIndexOf(\"/\") + 1) | slice:0:12}}</span></ion-col>\n            <ion-col size=\"4\">\n              <ion-button\n              fill=\"clear\"\n              shape=\"round\"\n              class=\"dltbtn\"\n              (click)=\"removeImg(j)\"        >\n              <ion-icon slot=\"icon-only\" src=\"assets/trash.svg\"></ion-icon>\n              Delete\n            </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid> \n      </div>\n    </ion-text>\n    </ion-grid>\n</ion-content>\n\n<ion-footer>\n    <ion-grid style=\"\n      padding-left: 24px;\n      padding-right: 24px;\n      padding-top: 16px;\n      padding-bottom: 16px;\n    \">\n        <!-- BUTTON -->\n        <div id=\"button\">\n            <ion-row style=\"align-items: center;\">\n                <ion-col size=\"4\">\n                    <ion-button class=\"btn1\" [routerLink]=\"'/assessment/previewassessment'\" [disabled]=\"false\" type=\"submit\" id=\"signup\">PREVIEW</ion-button>\n                </ion-col>\n\n                <ion-col size=\"8\">\n                    <ion-button class=\"btn2\" (click)=\"save()\" [disabled]=\"false\" type=\"submit\" id=\"signup\">SAVE AND PROCEED</ion-button>\n                </ion-col>\n            </ion-row>\n        </div>\n    </ion-grid>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/assessment/meals/meals-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/assessment/meals/meals-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: MealsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealsPageRoutingModule", function() { return MealsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _meals_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meals.page */ "./src/app/pages/assessment/meals/meals.page.ts");




const routes = [
    {
        path: '',
        component: _meals_page__WEBPACK_IMPORTED_MODULE_3__["MealsPage"]
    }
];
let MealsPageRoutingModule = class MealsPageRoutingModule {
};
MealsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MealsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/assessment/meals/meals.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/assessment/meals/meals.module.ts ***!
  \********************************************************/
/*! exports provided: MealsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealsPageModule", function() { return MealsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _meals_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./meals-routing.module */ "./src/app/pages/assessment/meals/meals-routing.module.ts");
/* harmony import */ var _meals_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./meals.page */ "./src/app/pages/assessment/meals/meals.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/pages/shared/shared.module.ts");








let MealsPageModule = class MealsPageModule {
};
MealsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _meals_routing_module__WEBPACK_IMPORTED_MODULE_5__["MealsPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        declarations: [_meals_page__WEBPACK_IMPORTED_MODULE_6__["MealsPage"]],
    })
], MealsPageModule);



/***/ }),

/***/ "./src/app/pages/assessment/meals/meals.page.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/assessment/meals/meals.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-checkbox {\n  background: #ffffff;\n  border-width: 1px !important;\n  border-style: solid !important;\n  border-radius: 4px;\n  border-color: black !important;\n  --height: 24px;\n  --width: 24px;\n  --checkmark-color: #000000;\n  --background-checked: #ffffff;\n  --border-color: #ffffff;\n  --border-color-checked: #ffffff;\n}\n\n#button {\n  height: 76px;\n  background-color: white;\n  left: 0px;\n  bottom: 0px;\n  position: fixed;\n  box-shadow: 0px -2px 8px rgba(65, 55, 255, 0.08);\n  z-index: 2;\n  padding: 0px;\n}\n\n.btn1 {\n  --color:#4137FF;\n  --background:#ffffff;\n  --border-radius: 8px;\n  --border-color:#4137FF;\n  border-radius: 8px;\n  border-style: solid;\n  border-width: thin;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 16px;\n  font-weight: 600;\n  --box-shadow: none;\n  height: 44px;\n  width: 77%;\n  margin-top: 11px;\n  margin-left: 24px;\n}\n\n.btn2 {\n  outline: none;\n  border-radius: 8px;\n  color: white;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 16px;\n  font-weight: 600;\n  --box-shadow: none;\n  height: 44px;\n  width: 86%;\n  margin-top: 11px;\n  margin-left: 10px;\n}\n\n.addbutton {\n  --border-radius: 8px;\n  margin-top: 16px;\n  padding-top: 0;\n  padding-bottom: 4px;\n  --border: 1px solid #4137ff;\n  width: 120px;\n  height: 44px;\n  --border-width:thin;\n}\n\n.plusbutton {\n  height: 24px;\n  width: 24px;\n  zoom: 1;\n}\n\n.input {\n  margin-top: 8px;\n}\n\n.margin {\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvYXNzZXNzbWVudC9tZWFscy9tZWFscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Fzc2Vzc21lbnQvbWVhbHMvbWVhbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7QUNDSjs7QURJRTtFQUVFLFlBQUE7RUFFQSx1QkFBQTtFQUNDLFNBQUE7RUFDRCxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdEQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNISjs7QURNQTtFQUVJLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFHQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNOSjs7QURTQTtFQUVJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFHQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFHQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNYSjs7QURjQTtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNYSjs7QURjRTtFQUVFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtBQ1pKOztBRGVFO0VBQ0UsZUFBQTtBQ1pKOztBRGVFO0VBQ0UsZ0JBQUE7QUNaSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2Vzc21lbnQvbWVhbHMvbWVhbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNoZWNrYm94IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlci13aWR0aDogMXB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgLS1oZWlnaHQ6IDI0cHg7XG4gICAgLS13aWR0aDogMjRweDtcbiAgICAtLWNoZWNrbWFyay1jb2xvcjogIzAwMDAwMDtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2ZmZmZmZjtcbiAgICAtLWJvcmRlci1jb2xvcjogI2ZmZmZmZjtcbiAgICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjZmZmZmZmO1xuICB9XG5cbiAgXG5cbiAgI2J1dHRvbntcbiAgICBcbiAgICBoZWlnaHQ6IDc2cHg7XG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgICAgbGVmdCA6IDBweDtcbiAgICBib3R0b206MHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3gtc2hhZG93OiAwcHggLTJweCA4cHggcmdiYSg2NSwgNTUsIDI1NSwgMC4wOCk7XG4gICAgei1pbmRleDogMjtcbiAgICBwYWRkaW5nOjBweDtcbn1cblxuLmJ0bjF7XG5cbiAgICAtLWNvbG9yOiM0MTM3RkY7XG4gICAgLS1iYWNrZ3JvdW5kOiNmZmZmZmY7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7IFxuICAgIC0tYm9yZGVyLWNvbG9yOiM0MTM3RkY7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgXG5cbiAgICBoZWlnaHQ6NDRweDtcbiAgICB3aWR0aDo3NyU7XG4gICAgbWFyZ2luLXRvcDogMTFweDtcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcbn1cblxuLmJ0bjJ7XG5cbiAgICBvdXRsaW5lOm5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBcbiAgICBcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgXG5cbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgd2lkdGg6IDg2JTtcbiAgICBtYXJnaW4tdG9wOiAxMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uYWRkYnV0dG9uIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOjRweDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICM0MTM3ZmY7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDo0NHB4O1xuICAgIC0tYm9yZGVyLXdpZHRoOnRoaW47XG4gIH1cblxuICAucGx1c2J1dHRvbntcblxuICAgIGhlaWdodDogMjRweDtcbiAgICB3aWR0aDogMjRweDtcbiAgICB6b29tOjE7XG4gIH1cblxuICAuaW5wdXR7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICB9XG5cbiAgLm1hcmdpbntcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG5cbiAgXG4gIFxuICAiLCJpb24tY2hlY2tib3gge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItd2lkdGg6IDFweCAhaW1wb3J0YW50O1xuICBib3JkZXItc3R5bGU6IHNvbGlkICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAtLWhlaWdodDogMjRweDtcbiAgLS13aWR0aDogMjRweDtcbiAgLS1jaGVja21hcmstY29sb3I6ICMwMDAwMDA7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjZmZmZmZmO1xuICAtLWJvcmRlci1jb2xvcjogI2ZmZmZmZjtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogI2ZmZmZmZjtcbn1cblxuI2J1dHRvbiB7XG4gIGhlaWdodDogNzZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGxlZnQ6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm94LXNoYWRvdzogMHB4IC0ycHggOHB4IHJnYmEoNjUsIDU1LCAyNTUsIDAuMDgpO1xuICB6LWluZGV4OiAyO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5idG4xIHtcbiAgLS1jb2xvcjojNDEzN0ZGO1xuICAtLWJhY2tncm91bmQ6I2ZmZmZmZjtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIC0tYm9yZGVyLWNvbG9yOiM0MTM3RkY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgaGVpZ2h0OiA0NHB4O1xuICB3aWR0aDogNzclO1xuICBtYXJnaW4tdG9wOiAxMXB4O1xuICBtYXJnaW4tbGVmdDogMjRweDtcbn1cblxuLmJ0bjIge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIGhlaWdodDogNDRweDtcbiAgd2lkdGg6IDg2JTtcbiAgbWFyZ2luLXRvcDogMTFweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5hZGRidXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gIC0tYm9yZGVyOiAxcHggc29saWQgIzQxMzdmZjtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIC0tYm9yZGVyLXdpZHRoOnRoaW47XG59XG5cbi5wbHVzYnV0dG9uIHtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMjRweDtcbiAgem9vbTogMTtcbn1cblxuLmlucHV0IHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4ubWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/assessment/meals/meals.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/assessment/meals/meals.page.ts ***!
  \******************************************************/
/*! exports provided: MealsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealsPage", function() { return MealsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/http.service */ "./src/app/http.service.ts");
/* harmony import */ var _assessment_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assessment-service.service */ "./src/app/pages/assessment/assessment-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../dataservice.service */ "./src/app/pages/dataservice.service.ts");









let MealsPage = class MealsPage {
    constructor(router, apiService, location, assessmentService, dataService, imagePicker, navCtrl) {
        this.router = router;
        this.apiService = apiService;
        this.location = location;
        this.assessmentService = assessmentService;
        this.dataService = dataService;
        this.imagePicker = imagePicker;
        this.navCtrl = navCtrl;
        this.stateObject = {};
        this.imageList = [];
        this.selectData = [
            {
                value: 'yes',
                name: 'Yes',
            },
            {
                value: 'no',
                name: 'NO',
            },
        ];
        this.formData = {
            shopping: null,
            delivery: null,
            cooking: null,
            preparation: null,
            serving: null,
            specialDiet: null,
            breakfast: [''],
            lunch: [''],
            dinner: [''],
            snack: [''],
            instructions: null
        };
        this.formData.shopping = true;
    }
    addMore(arrayName) {
        this.formData[arrayName].push('');
        console.log('form', this.formData);
    }
    ngOnInit() { }
    addDate() { }
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
    changeToggle(formItem, ev) {
        console.log(ev);
        this.formData[formItem] = ev;
    }
    changeModel(ev) {
        console.log(ev);
        // Here you can assign to the variable which is used in ngModal
    }
    save() {
        if (this.stateObject == null) {
            this.stateObject = {};
        }
        this.stateObject.COOKING = this.formData;
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
            const key = 'COOKING';
            this.assessmentService.getAssessmentStateObject().then((data) => {
                console.log('came here 33', data);
                // first time load
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
MealsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_http_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: _assessment_service_service__WEBPACK_IMPORTED_MODULE_6__["AssessmentServiceService"] },
    { type: _dataservice_service__WEBPACK_IMPORTED_MODULE_8__["DataserviceService"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__["ImagePicker"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
MealsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-meals',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./meals.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/meals/meals.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./meals.page.scss */ "./src/app/pages/assessment/meals/meals.page.scss")).default]
    })
], MealsPage);



/***/ })

}]);
//# sourceMappingURL=pages-assessment-meals-meals-module-es2015.js.map