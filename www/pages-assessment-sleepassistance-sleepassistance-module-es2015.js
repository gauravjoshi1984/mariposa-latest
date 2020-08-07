(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-assessment-sleepassistance-sleepassistance-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/sleepassistance/sleepassistance.page.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/sleepassistance/sleepassistance.page.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n    <ion-toolbar class=\"headtoolbar\">\n        <ion-row>\n            <ion-col size=\"2\">\n                <ion-toolbar>\n                    <ion-buttons slot=\"start\">\n                        <m-backbutton></m-backbutton>\n                    </ion-buttons>\n                </ion-toolbar>\n            </ion-col>\n            <ion-col size=\"8\">\n                <div>\n                    <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\">Sleep Assistance</ion-text>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n    <ion-grid style=\"padding:24px;height:fit-content;margin-bottom:80px\">\n\n        <!-- GOES TO BED -->\n\n        <ion-row style=\"align-items: center;\">\n            <ion-col>\n                <ion-text>Goes to Bed Time</ion-text>\n            </ion-col>\n            <ion-col>\n                <ion-buttons style=\"float: right;\">\n                    <ion-button color=\"mdblack\" class=\"jumbo\">\n                        <ion-datetime mode=\"ios\" slot=\"start\" #datepicker style=\"float:left\" displayFormat=\"HH:mm\" placeholder=\"HH:MM\"></ion-datetime>\n                        <ion-icon (click)=\"changeTime()\" slot=\"end\" style=\"float:right;width:30px;height: 30px;\" src=\"assets/MariposaIcons/Timeicon.svg\"></ion-icon>\n                    </ion-button>\n                </ion-buttons>\n            </ion-col>\n        </ion-row>\n\n        <hr class=\"solid\">\n\n        <!-- WAKE UP TIME -->\n\n        <ion-row style=\"align-items: center;\">\n            <ion-col>\n                <ion-text>Wake Up Time</ion-text>\n            </ion-col>\n            <ion-col>\n                <ion-buttons style=\"float: right;\">\n                    <ion-button color=\"mdblack\" class=\"jumbo\">\n                        <ion-datetime mode=\"ios\" #datepicker1 style=\"float:left\" displayFormat=\"HH:mm\" placeholder=\"HH:MM\"></ion-datetime>\n                        <ion-icon (click)=\"changeTime1()\" style=\"float:right;width:30px;height: 30px;\" src=\"assets/MariposaIcons/Timeicon.svg\"></ion-icon>\n                    </ion-button>\n                </ion-buttons>\n            </ion-col>\n        </ion-row>\n\n        <hr class=\"solid\">\n\n        <!-- SLEEPING TYPE -->\n\n        <div style=\"padding-top:0px;margin-bottom:15px;\">\n            <ion-label style=\"font-size: 16px;line-height: 19px;\">Sleeping Type</ion-label>\n        </div>\n\n        <!-- CHECKBOX 1 -->\n\n        <ion-row style=\"align-items: center;margin-top:5px;\">\n            <ion-col size=\"1\">\n                <div style=\"padding-left: 3px;\">\n                    <ion-checkbox #Sleepthroughnight color=\"mwhite\" checked=\"false\"></ion-checkbox>\n                </div>\n            </ion-col>\n            <ion-col size=\"11\" style=\"padding-top: 0px;\">\n                <div>\n                    <ion-text (click)=\"generateClick(Sleepthroughnight)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Sleep through night</ion-text>\n                </div>\n            </ion-col>\n        </ion-row>\n\n        <!-- CHECKBOX 2 -->\n\n        <ion-row style=\"align-items: center;margin-top:5px;\">\n            <ion-col size=\"1\">\n                <div style=\"padding-left: 3px;\">\n                    <ion-checkbox #Frequentlyawakens color=\"mwhite\" checked=\"false\"></ion-checkbox>\n                </div>\n            </ion-col>\n            <ion-col size=\"11\" style=\"padding-top: 0px;\">\n                <div>\n                    <ion-text (click)=\"generateClick(Frequentlyawakens)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Frequently awakens</ion-text>\n                </div>\n            </ion-col>\n        </ion-row>\n\n        <!-- CHECKBOX 3 -->\n\n        <ion-row style=\"align-items: center;margin-top:5px;\">\n            <ion-col size=\"1\">\n                <div style=\"padding-left: 3px;\">\n                    <ion-checkbox #Getsupfortoileting color=\"mwhite\" checked=\"false\"></ion-checkbox>\n                </div>\n            </ion-col>\n            <ion-col size=\"11\" style=\"padding-top: 0px;\">\n                <div>\n                    <ion-text (click)=\"generateClick(Getsupfortoileting)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Gets up for toileting</ion-text>\n                </div>\n            </ion-col>\n        </ion-row>\n\n        <!-- CHECKBOX 4 -->\n\n        <ion-row style=\"align-items: center;margin-top:5px;\">\n            <ion-col size=\"1\">\n                <div style=\"padding-left: 3px;\">\n                    <ion-checkbox #Difficultyreturningtosleep color=\"mwhite\" checked=\"false\"></ion-checkbox>\n                </div>\n            </ion-col>\n            <ion-col size=\"11\" style=\"padding-top: 0px;\">\n                <div>\n                    <ion-text (click)=\"generateClick(Difficultyreturningtosleep)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Difficulty returning to sleep</ion-text>\n                </div>\n            </ion-col>\n        </ion-row>\n\n        <hr class=\"solid\">\n\n        <!-- ASSISTANCE AT NIGHT -->\n\n        <ion-row style=\"align-items: center;\">\n            <ion-col size=8>\n                <ion-text style=\"font-size:16px;line-height:19px;\">Need assistance at night<br>from care giver</ion-text>\n            </ion-col>\n            <ion-col>\n                <ion-text style=\"font-size:16px;line-height:19px;font-weight:normal;float: right;margin-right:12px ;\"><span *ngIf=\"Needassistanceatnight.checked\">YES</span\n          ><span *ngIf=\"!Needassistanceatnight.checked\">NO</span></ion-text>\n            </ion-col>\n            <ion-col>\n                <ion-toggle #Needassistanceatnight mode=\"ios\" checked color=\"primary\" style=\"float: right;\"></ion-toggle>\n            </ion-col>\n        </ion-row>\n\n        <hr class=\"solid\">\n\n        <!-- NAP DURING DAY -->\n\n        <ion-text style=\"font-size:16px;line-height:19px;\">Nap during the day</ion-text>\n\n        <ion-row style=\"align-items: center;margin-top: 17px;\">\n            <ion-col>\n                <ion-text>Time</ion-text>\n            </ion-col>\n            <ion-col>\n                <ion-buttons style=\"float: right;\">\n                    <ion-button color=\"mdblack\" class=\"jumbo\">\n                        <ion-datetime mode=\"ios\" #datepicker2 style=\"float:left\" displayFormat=\"HH:mm\" placeholder=\"HH:MM\"></ion-datetime>\n                        <ion-icon (click)=\"changeTime2()\" style=\"float:right;width:30px;height: 30px;\" src=\"assets/MariposaIcons/Timeicon.svg\"></ion-icon>\n                    </ion-button>\n                </ion-buttons>\n            </ion-col>\n        </ion-row>\n\n        <ion-row style=\"align-items: center;margin-top: 15px;\">\n            <ion-col>\n                <ion-text>Duration</ion-text>\n            </ion-col>\n            <ion-col>\n                <ion-select class=\"duration\" style=\"float:right;width:140px;height:40px\">\n                    <ion-select-option value=\"30\">30 Minutes</ion-select-option>\n                    <ion-select-option value=\"60\">1 Hour</ion-select-option>\n                    <ion-select-option value=\"90\">1.5 Hours</ion-select-option>\n                    <ion-select-option value=\"120\">2 Hours</ion-select-option>\n                </ion-select>\n            </ion-col>\n        </ion-row>\n\n        <!-- ADD BUTTON -->\n\n        <ion-button class=\"addbutton\" fill=\"outline\" shape=\"round\" (click)=\"addNewNap()\">\n            <ion-icon class=\"plusbutton\" slot=\"start\" name=\"add-circle\"></ion-icon>Add\n        </ion-button>\n\n        <hr class=\"solid\">\n\n        <!-- NOTES -->\n\n        <!-- INSTRUCTIONS -->\n\n        <div class=\"nametag\">\n            <ion-text position=\"floating\" id=\"tag\">Notes(optional)</ion-text>\n        </div>\n        <div>\n            <ion-textarea style=\"height: 120px;\" class=\"input\" placeholder=\"Write here\"></ion-textarea>\n        </div>\n\n        <!--ADD IMAGE-->\n        <app-addimage (click)=\"addImage()\"></app-addimage>\n    <ion-text>\n      <div class=\"imagelist\" *ngFor=\"let img of imageList; let j=index\">\n        <ion-grid fixed class=\"ion-no-padding\">\n          <ion-row>\n            <ion-col style=\"padding-top: 11px;\" size=\"8\"><span>{{img.substring(img.lastIndexOf(\"/\") + 1) | slice:0:12}}</span></ion-col>\n            <ion-col size=\"4\">\n              <ion-button\n              fill=\"clear\"\n              shape=\"round\"\n              class=\"dltbtn\"\n              (click)=\"removeImg(j)\"        >\n              <ion-icon slot=\"icon-only\" src=\"assets/trash.svg\"></ion-icon>\n              Delete\n            </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid> \n      </div>\n    </ion-text>\n\n\n    </ion-grid>\n</ion-content>\n\n<ion-footer>\n    <div id=\"button\">\n        <ion-button [disabled]=\"false\" class=\"btnblue\" (click)=\"save()\" type=\"submit\" id=\"signup\">SAVE & PROCEED</ion-button>\n    </div>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/assessment/sleepassistance/sleepassistance-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/assessment/sleepassistance/sleepassistance-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: SleepassistancePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SleepassistancePageRoutingModule", function() { return SleepassistancePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sleepassistance_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sleepassistance.page */ "./src/app/pages/assessment/sleepassistance/sleepassistance.page.ts");




const routes = [
    {
        path: '',
        component: _sleepassistance_page__WEBPACK_IMPORTED_MODULE_3__["SleepassistancePage"]
    }
];
let SleepassistancePageRoutingModule = class SleepassistancePageRoutingModule {
};
SleepassistancePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SleepassistancePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/assessment/sleepassistance/sleepassistance.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/assessment/sleepassistance/sleepassistance.module.ts ***!
  \****************************************************************************/
/*! exports provided: SleepassistancePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SleepassistancePageModule", function() { return SleepassistancePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _sleepassistance_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sleepassistance-routing.module */ "./src/app/pages/assessment/sleepassistance/sleepassistance-routing.module.ts");
/* harmony import */ var _sleepassistance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sleepassistance.page */ "./src/app/pages/assessment/sleepassistance/sleepassistance.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/pages/shared/shared.module.ts");








let SleepassistancePageModule = class SleepassistancePageModule {
};
SleepassistancePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sleepassistance_routing_module__WEBPACK_IMPORTED_MODULE_5__["SleepassistancePageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_sleepassistance_page__WEBPACK_IMPORTED_MODULE_6__["SleepassistancePage"]]
    })
], SleepassistancePageModule);



/***/ }),

/***/ "./src/app/pages/assessment/sleepassistance/sleepassistance.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/assessment/sleepassistance/sleepassistance.page.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".jumbo {\n  color: #B8B8B8;\n  width: 140px;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 8px;\n  height: 40px;\n}\n\nion-datetime {\n  float: left;\n  width: 70%;\n  padding-left: 0px;\n  padding-top: 13px;\n}\n\n#button {\n  height: 76px;\n  background-color: white;\n  left: 0px;\n  bottom: 0px;\n  position: fixed;\n  box-shadow: 0px -2px 8px rgba(65, 55, 255, 0.08);\n  z-index: 2;\n  padding: 0px;\n}\n\n.btn1 {\n  --color:#4137FF;\n  --background:#ffffff;\n  --border-radius: 8px;\n  --border-color:#4137FF;\n  border-radius: 8px;\n  border-style: solid;\n  border-width: thin;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 16px;\n  font-weight: 600;\n  --box-shadow: none;\n  height: 44px;\n  width: 77%;\n  margin-top: 11px;\n  margin-left: 24px;\n}\n\n.btn2 {\n  outline: none;\n  border-radius: 8px;\n  color: white;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 16px;\n  font-weight: 600;\n  --box-shadow: none;\n  height: 44px;\n  width: 86%;\n  margin-top: 11px;\n  margin-left: 10px;\n}\n\nhr.solid {\n  border-top: 1px solid #E5E5E5;\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n\nion-checkbox {\n  background: #ffffff;\n  border-width: 1px !important;\n  border-style: solid !important;\n  border-radius: 4px;\n  border-color: black !important;\n  --height: 24px;\n  --width: 24px;\n  --checkmark-color: #000000;\n  --background-checked: #ffffff;\n  --border-color: #ffffff;\n  --border-color-checked: #ffffff;\n}\n\n.duration {\n  border: solid;\n  border-color: lightgrey;\n  border-radius: 8px;\n  border-width: thin;\n}\n\n.add {\n  margin-top: 16px;\n  width: 120px;\n  height: 44px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  --color:#4137FF;\n  --background:#ffffff;\n  --border-radius: 8px;\n  --border-color:#4137FF;\n  --box-shadow: none;\n  border-style: solid;\n  border-width: thin;\n}\n\n.addbutton {\n  --border-radius: 8px;\n  margin-top: 16px;\n  padding-top: 0;\n  padding-bottom: 4px;\n  --border: 1px solid #4137ff;\n  width: 120px;\n  height: 44px;\n  --border-width:thin;\n}\n\n.plusbutton {\n  height: 24px;\n  width: 24px;\n  zoom: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvYXNzZXNzbWVudC9zbGVlcGFzc2lzdGFuY2Uvc2xlZXBhc3Npc3RhbmNlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYXNzZXNzbWVudC9zbGVlcGFzc2lzdGFuY2Uvc2xlZXBhc3Npc3RhbmNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdBO0VBRUksV0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDREo7O0FESUE7RUFFSSxZQUFBO0VBRUEsdUJBQUE7RUFDQyxTQUFBO0VBQ0QsV0FBQTtFQUNBLGVBQUE7RUFDQSxnREFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDSEo7O0FETUE7RUFFSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBR0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDTko7O0FEU0E7RUFFSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBR0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBR0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDWEo7O0FEY0E7RUFDSSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNYSjs7QURnQkU7RUFDRSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtBQ2JKOztBRGdCRTtFQUVFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNkSjs7QURrQkU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBR0Qsa0JBQUE7RUFFQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7QUNwQko7O0FEdUJFO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ3BCSjs7QUR1QkU7RUFFRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7QUNyQkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hc3Nlc3NtZW50L3NsZWVwYXNzaXN0YW5jZS9zbGVlcGFzc2lzdGFuY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1bWJve1xuXG4gICAgY29sb3I6ICNCOEI4Qjg7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGhlaWdodDogNDBweDtcbn1cblxuaW9uLWRhdGV0aW1le1xuXG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBwYWRkaW5nLXRvcDogMTNweDtcbn1cblxuI2J1dHRvbntcbiAgICBcbiAgICBoZWlnaHQ6IDc2cHg7XG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgICAgbGVmdCA6IDBweDtcbiAgICBib3R0b206MHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3gtc2hhZG93OiAwcHggLTJweCA4cHggcmdiYSg2NSwgNTUsIDI1NSwgMC4wOCk7XG4gICAgei1pbmRleDogMjtcbiAgICBwYWRkaW5nOjBweDtcbn1cblxuLmJ0bjF7XG5cbiAgICAtLWNvbG9yOiM0MTM3RkY7XG4gICAgLS1iYWNrZ3JvdW5kOiNmZmZmZmY7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7IFxuICAgIC0tYm9yZGVyLWNvbG9yOiM0MTM3RkY7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgXG5cbiAgICBoZWlnaHQ6NDRweDtcbiAgICB3aWR0aDo3NyU7XG4gICAgbWFyZ2luLXRvcDogMTFweDtcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcbn1cblxuLmJ0bjJ7XG5cbiAgICBvdXRsaW5lOm5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBcbiAgICBcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgXG5cbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgd2lkdGg6IDg2JTtcbiAgICBtYXJnaW4tdG9wOiAxMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5oci5zb2xpZCB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFNUU1RTU7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOjE2cHg7XG4gICAgXG5cbiAgfVxuXG4gIGlvbi1jaGVja2JveCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3JkZXItd2lkdGg6IDFweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgIC0taGVpZ2h0OiAyNHB4O1xuICAgIC0td2lkdGg6IDI0cHg7XG4gICAgLS1jaGVja21hcmstY29sb3I6ICMwMDAwMDA7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNmZmZmZmY7XG4gICAgLS1ib3JkZXItY29sb3I6ICNmZmZmZmY7XG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogI2ZmZmZmZjtcbiAgfSBcbiAgXG4gIC5kdXJhdGlvbntcblxuICAgIGJvcmRlcjogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOmxpZ2h0Z3JleSA7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJvcmRlci13aWR0aDogdGhpbjsgXG5cbiAgfVxuXG4gIC5hZGR7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiA0NHB4OyAgIFxuICAgIFxuICAgIFxuICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuXG4gICAgLS1jb2xvcjojNDEzN0ZGO1xuICAgIC0tYmFja2dyb3VuZDojZmZmZmZmO1xuICAgIC0tYm9yZGVyLXJhZGl1czogOHB4OyBcbiAgICAtLWJvcmRlci1jb2xvcjojNDEzN0ZGO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICBcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogdGhpbjtcbiAgfVxuXG4gIC5hZGRidXR0b24ge1xuICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgcGFkZGluZy1ib3R0b206NHB4O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIzQxMzdmZjtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OjQ0cHg7XG4gICAgLS1ib3JkZXItd2lkdGg6dGhpbjtcbiAgfVxuXG4gIC5wbHVzYnV0dG9ue1xuXG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIHpvb206MTtcbiAgfSIsIi5qdW1ibyB7XG4gIGNvbG9yOiAjQjhCOEI4O1xuICB3aWR0aDogMTQwcHg7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuaW9uLWRhdGV0aW1lIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA3MCU7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLXRvcDogMTNweDtcbn1cblxuI2J1dHRvbiB7XG4gIGhlaWdodDogNzZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGxlZnQ6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm94LXNoYWRvdzogMHB4IC0ycHggOHB4IHJnYmEoNjUsIDU1LCAyNTUsIDAuMDgpO1xuICB6LWluZGV4OiAyO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5idG4xIHtcbiAgLS1jb2xvcjojNDEzN0ZGO1xuICAtLWJhY2tncm91bmQ6I2ZmZmZmZjtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIC0tYm9yZGVyLWNvbG9yOiM0MTM3RkY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgaGVpZ2h0OiA0NHB4O1xuICB3aWR0aDogNzclO1xuICBtYXJnaW4tdG9wOiAxMXB4O1xuICBtYXJnaW4tbGVmdDogMjRweDtcbn1cblxuLmJ0bjIge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIGhlaWdodDogNDRweDtcbiAgd2lkdGg6IDg2JTtcbiAgbWFyZ2luLXRvcDogMTFweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbmhyLnNvbGlkIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFNUU1RTU7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbmlvbi1jaGVja2JveCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci13aWR0aDogMXB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1zdHlsZTogc29saWQgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXItY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIC0taGVpZ2h0OiAyNHB4O1xuICAtLXdpZHRoOiAyNHB4O1xuICAtLWNoZWNrbWFyay1jb2xvcjogIzAwMDAwMDtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNmZmZmZmY7XG4gIC0tYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjZmZmZmZmO1xufVxuXG4uZHVyYXRpb24ge1xuICBib3JkZXI6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGxpZ2h0Z3JleTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXItd2lkdGg6IHRoaW47XG59XG5cbi5hZGQge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogNDRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAtLWNvbG9yOiM0MTM3RkY7XG4gIC0tYmFja2dyb3VuZDojZmZmZmZmO1xuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgLS1ib3JkZXItY29sb3I6IzQxMzdGRjtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IHRoaW47XG59XG5cbi5hZGRidXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gIC0tYm9yZGVyOiAxcHggc29saWQgIzQxMzdmZjtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIC0tYm9yZGVyLXdpZHRoOnRoaW47XG59XG5cbi5wbHVzYnV0dG9uIHtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMjRweDtcbiAgem9vbTogMTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/assessment/sleepassistance/sleepassistance.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/assessment/sleepassistance/sleepassistance.page.ts ***!
  \**************************************************************************/
/*! exports provided: SleepassistancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SleepassistancePage", function() { return SleepassistancePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _assessment_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assessment-service.service */ "./src/app/pages/assessment/assessment-service.service.ts");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dataservice.service */ "./src/app/pages/dataservice.service.ts");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");






let SleepassistancePage = class SleepassistancePage {
    constructor(navCtrl, imagePicker, assessmentService, dataService) {
        this.navCtrl = navCtrl;
        this.imagePicker = imagePicker;
        this.assessmentService = assessmentService;
        this.dataService = dataService;
        this.electronicList = [];
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
    generateClick(ev) {
        // ev.click();
        if (ev.checked === true) {
            ev.checked = false;
        }
        else {
            ev.checked = true;
        }
    }
    changeTime() {
        this.datepicker.open().then((x) => {
            console.log(x);
            this.datepick = x;
        });
    }
    changeTime1() {
        this.datepicker1.open().then((x) => {
            console.log(x);
            this.datepick1 = x;
        });
    }
    changeTime2() {
        this.datepicker2.open().then((x) => {
            console.log(x);
            this.datepick2 = x;
        });
    }
    addNewNap() {
        console.log('add new nap');
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.key = 'ELECTRONICS';
            this.careCircleId = yield this.assessmentService.getCareCircleId();
            this.userId = yield this.dataService.getUserInfo();
            this.userId = this.userId.userId;
        });
    }
};
SleepassistancePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_5__["ImagePicker"] },
    { type: _assessment_service_service__WEBPACK_IMPORTED_MODULE_3__["AssessmentServiceService"] },
    { type: _dataservice_service__WEBPACK_IMPORTED_MODULE_4__["DataserviceService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datepicker')
], SleepassistancePage.prototype, "datepicker", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datepicker1')
], SleepassistancePage.prototype, "datepicker1", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datepicker2')
], SleepassistancePage.prototype, "datepicker2", void 0);
SleepassistancePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sleepassistance',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sleepassistance.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/sleepassistance/sleepassistance.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sleepassistance.page.scss */ "./src/app/pages/assessment/sleepassistance/sleepassistance.page.scss")).default]
    })
], SleepassistancePage);



/***/ })

}]);
//# sourceMappingURL=pages-assessment-sleepassistance-sleepassistance-module-es2015.js.map