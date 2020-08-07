(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-assessment-motivation-motivation-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/motivation/motivation.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/motivation/motivation.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n  \n  <ion-toolbar class=\"headtoolbar\">\n    \n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-toolbar>\n            <ion-buttons slot=\"start\">\n              <m-backbutton></m-backbutton>\n            </ion-buttons>\n        </ion-toolbar> \n        \n        </ion-col>\n        <ion-col size=\"8\">\n          <div>\n            <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\">Motivation</ion-text>\n           \n          </div> \n        </ion-col>\n       \n      </ion-row>\n   \n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n  <ion-grid style=\"padding:24px;height:fit-content;margin-bottom:48px\">\n\n    <!-- MOTIVATION -->\n\n    <div style=\"padding-top:0px;margin-bottom:15px;\">\n      <ion-label style=\"font-size: 16px;line-height: 19px;\">Select David's motivations</ion-label>\n    </div>  \n    \n  <!-- CHECKBOX 1 -->\n\n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col  size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #HealthFitness color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(HealthFitness)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Health & Fitness</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 2 -->\n\n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col  size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #FamilyCommunity color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(FamilyCommunity)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Family & Community</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 3 -->\n\n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col  size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #PersonalCauses color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(PersonalCauses)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Personal Causes</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 4 -->\n\n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col  size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #Spirituality color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(Spirituality)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Spirituality</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n     <!-- CHECKBOX 5 -->\n\n     <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col  size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #Independence color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(Independence)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Independence</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 6 -->\n\n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col  size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #Creativity color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(Creativity)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Creativity</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 7 -->\n\n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col  size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #Fun color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(Fun)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Fun</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n</ion-grid>    \n</ion-content>\n\n\n<ion-footer>\n  <ion-grid style=\"padding-left: 24px;padding-right: 24px;padding-top: 16px;padding-bottom: 16px;\">\n  <!-- BUTTON -->\n  <div id=\"button\">\n    <ion-row style=\"align-items: center;\">\n      <ion-col size=\"4\">\n        \n          <ion-button class=\"btn1\" [disabled]=\"false\"  type=\"submit\"  id=\"signup\">PREVIEW</ion-button>\n          \n      </ion-col>\n       \n      <ion-col size=\"8\">\n        \n          <ion-button class=\"btn2\" [disabled]=\"false\"  type=\"submit\" (click)= \"save()\"  id=\"signup\">SAVE AND PROCEED</ion-button>\n        \n      </ion-col>\n    </ion-row>\n  </div>  \n</ion-grid>\n  \n</ion-footer>\n\n");

/***/ }),

/***/ "./src/app/pages/assessment/motivation/motivation-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/assessment/motivation/motivation-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: MotivationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotivationPageRoutingModule", function() { return MotivationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _motivation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./motivation.page */ "./src/app/pages/assessment/motivation/motivation.page.ts");




const routes = [
    {
        path: '',
        component: _motivation_page__WEBPACK_IMPORTED_MODULE_3__["MotivationPage"]
    }
];
let MotivationPageRoutingModule = class MotivationPageRoutingModule {
};
MotivationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MotivationPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/assessment/motivation/motivation.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/assessment/motivation/motivation.module.ts ***!
  \******************************************************************/
/*! exports provided: MotivationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotivationPageModule", function() { return MotivationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _motivation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./motivation-routing.module */ "./src/app/pages/assessment/motivation/motivation-routing.module.ts");
/* harmony import */ var _motivation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./motivation.page */ "./src/app/pages/assessment/motivation/motivation.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/pages/shared/shared.module.ts");








let MotivationPageModule = class MotivationPageModule {
};
MotivationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _motivation_routing_module__WEBPACK_IMPORTED_MODULE_5__["MotivationPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        declarations: [_motivation_page__WEBPACK_IMPORTED_MODULE_6__["MotivationPage"]]
    })
], MotivationPageModule);



/***/ }),

/***/ "./src/app/pages/assessment/motivation/motivation.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/assessment/motivation/motivation.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#button {\n  height: 76px;\n  background-color: white;\n  left: 0px;\n  bottom: 0px;\n  position: fixed;\n  box-shadow: 0px -2px 8px rgba(65, 55, 255, 0.08);\n  z-index: 2;\n  padding: 0px;\n}\n\n.btn1 {\n  --color:#4137FF;\n  --background:#ffffff;\n  --border-radius: 8px;\n  --border-color:#4137FF;\n  border-radius: 8px;\n  border-style: solid;\n  border-width: thin;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 16px;\n  font-weight: 600;\n  --box-shadow: none;\n  height: 44px;\n  width: 77%;\n  margin-top: 11px;\n  margin-left: 24px;\n}\n\n.btn2 {\n  outline: none;\n  border-radius: 8px;\n  color: white;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 16px;\n  font-weight: 600;\n  --box-shadow: none;\n  height: 44px;\n  width: 86%;\n  margin-top: 11px;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvYXNzZXNzbWVudC9tb3RpdmF0aW9uL21vdGl2YXRpb24ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hc3Nlc3NtZW50L21vdGl2YXRpb24vbW90aXZhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxZQUFBO0VBRUEsdUJBQUE7RUFDQyxTQUFBO0VBQ0QsV0FBQTtFQUNBLGVBQUE7RUFDQSxnREFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDREo7O0FESUE7RUFFSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBR0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDSko7O0FET0E7RUFFSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBR0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBR0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDVEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hc3Nlc3NtZW50L21vdGl2YXRpb24vbW90aXZhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYnV0dG9ue1xuICAgIFxuICAgIGhlaWdodDogNzZweDtcbiAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgICBsZWZ0IDogMHB4O1xuICAgIGJvdHRvbTowcHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJveC1zaGFkb3c6IDBweCAtMnB4IDhweCByZ2JhKDY1LCA1NSwgMjU1LCAwLjA4KTtcbiAgICB6LWluZGV4OiAyO1xuICAgIHBhZGRpbmc6MHB4O1xufVxuXG4uYnRuMXtcblxuICAgIC0tY29sb3I6IzQxMzdGRjtcbiAgICAtLWJhY2tncm91bmQ6I2ZmZmZmZjtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDsgXG4gICAgLS1ib3JkZXItY29sb3I6IzQxMzdGRjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICBcblxuICAgIGhlaWdodDo0NHB4O1xuICAgIHdpZHRoOjc3JTtcbiAgICBtYXJnaW4tdG9wOiAxMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xufVxuXG4uYnRuMntcblxuICAgIG91dGxpbmU6bm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIFxuICAgIFxuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICBcblxuICAgIGhlaWdodDogNDRweDtcbiAgICB3aWR0aDogODYlO1xuICAgIG1hcmdpbi10b3A6IDExcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59IiwiI2J1dHRvbiB7XG4gIGhlaWdodDogNzZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGxlZnQ6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm94LXNoYWRvdzogMHB4IC0ycHggOHB4IHJnYmEoNjUsIDU1LCAyNTUsIDAuMDgpO1xuICB6LWluZGV4OiAyO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5idG4xIHtcbiAgLS1jb2xvcjojNDEzN0ZGO1xuICAtLWJhY2tncm91bmQ6I2ZmZmZmZjtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIC0tYm9yZGVyLWNvbG9yOiM0MTM3RkY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgaGVpZ2h0OiA0NHB4O1xuICB3aWR0aDogNzclO1xuICBtYXJnaW4tdG9wOiAxMXB4O1xuICBtYXJnaW4tbGVmdDogMjRweDtcbn1cblxuLmJ0bjIge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIGhlaWdodDogNDRweDtcbiAgd2lkdGg6IDg2JTtcbiAgbWFyZ2luLXRvcDogMTFweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/assessment/motivation/motivation.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/assessment/motivation/motivation.page.ts ***!
  \****************************************************************/
/*! exports provided: MotivationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotivationPage", function() { return MotivationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let MotivationPage = class MotivationPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    save() {
        this.navCtrl.navigateForward(['/assessment/assessmentbar']);
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
MotivationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
MotivationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-motivation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./motivation.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/motivation/motivation.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./motivation.page.scss */ "./src/app/pages/assessment/motivation/motivation.page.scss")).default]
    })
], MotivationPage);



/***/ })

}]);
//# sourceMappingURL=pages-assessment-motivation-motivation-module-es2015.js.map