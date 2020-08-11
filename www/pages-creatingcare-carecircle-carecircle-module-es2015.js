(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-creatingcare-carecircle-carecircle-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/creatingcare/carecircle/carecircle.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/creatingcare/carecircle/carecircle.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n    <ion-toolbar class=\"headtoolbar\">\n        <ion-row>\n            <ion-col size=\"1.7\">\n                <ion-toolbar>\n                    <ion-buttons slot=\"start\">\n                        <m-backbutton></m-backbutton>\n                    </ion-buttons>\n                </ion-toolbar>\n            </ion-col>\n            <ion-col size=\"8.3\">\n                <div>\n                    <ion-text class=\"name\" color=\"mdblack\" position=\"floating\" id=\"titletag\">{{careCircleName}}'s Care Circle</ion-text>\n                </div>\n            </ion-col>\n            <ion-col size=\"2\">\n                <div>\n                    <ion-img (click)=\"presentPopover($event)\" src=\"../assets/MariposaIcons/Kebab menu.svg\" style=\"color: black;float:right\"></ion-img>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen = \"true\" >\n    <ion-grid style=\"padding-top:14px;padding-left: 6px;padding-right: 6px;padding-bottom: 60px;\">\n        <ion-card class=\"cardinfo\" *ngFor=\"let member of memberList\">\n            <ion-row>\n                <ion-col id=\"infolabel\">\n                    <ion-text class=\"name\"><b>{{member['userName']}}</b> {{member['relation']}}</ion-text>\n                    <ion-text id=\"email\"><br>{{member['email']}}</ion-text>\n                </ion-col>\n                <ion-col>\n                    <ion-chip color=\"mmgrey\" outline style=\"float:right;border-radius: 8px;\">\n                        <ion-label>{{member['userType']}}</ion-label>\n                    </ion-chip>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <!-- <ion-text class=\"assesstime\">Assessment Completed on: 12 May 2020</ion-text> -->\n            </ion-row>\n            <ion-row [hidden]=\"member['userType'] != 'SENIOR'\">\n                <ion-col style=\"padding-bottom: 0px;\">\n                    <ion-button class=\"assessment\" (click)='navigateToAssessment()'>START ASSESSMENT</ion-button>\n                </ion-col>\n            </ion-row>\n            <ion-row [hidden]=\"false\">\n                <ion-col style=\"padding-bottom: 0px;\">\n                    <ion-button class=\"pending\">\n                        <ion-icon slot=\"icon-only\" src=\"assets/MariposaIcons/Error.svg\"></ion-icon>\n                        Invitation Pending\n                    </ion-button>\n                </ion-col>\n            </ion-row>\n        </ion-card>\n        <!-- <ion-card class=\"cardinfo\">\n    \n      <ion-row >\n        <ion-col id=\"infolabel\" style=\"margin-bottom: 11px;\">\n          <ion-text ><b>John Doe</b> Father</ion-text>\n          <ion-text id=\"email\"><br>john.doe@gmail.com</ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-chip color=\"mmgrey\" outline style=\"float:right;border-radius: 8px;\">\n            <ion-label color=\"mdgrey\">ADMIN</ion-label>\n          </ion-chip>\n        </ion-col>\n      </ion-row>\n    \n  </ion-card> -->\n    </ion-grid>\n    <ion-grid>\n        <div id=\"button\">\n            <ion-button type=\"submit\" class=\"btnwhite\" expand=\"block\" (click)=\"navigateToAddMember()\">ADD MEMBERS</ion-button>\n        </div>\n    </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/creatingcare/carecircle/popover/popover.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/creatingcare/carecircle/popover/popover.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-list lines=\"none\"> -->\n <ion-grid>\n  <ion-item (click)=\"delete()\" detail=\"false\" lines=\"none\" button>Rename Care Circle</ion-item>\n  <hr>\n  <ion-item (click)=\"delete()\" detail=\"false\" lines=\"none\" button>Edit Members</ion-item>\n </ion-grid>\n  \n  \n  <!-- <ion-item lines=\"none\" detail=\"false\" button onClick=\"dismissPopover()\">Close</ion-item> -->\n<!-- </ion-list> -->");

/***/ }),

/***/ "./src/app/pages/creatingcare/carecircle/carecircle-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/creatingcare/carecircle/carecircle-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: CarecirclePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarecirclePageRoutingModule", function() { return CarecirclePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _carecircle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carecircle.page */ "./src/app/pages/creatingcare/carecircle/carecircle.page.ts");




const routes = [
    {
        path: '',
        component: _carecircle_page__WEBPACK_IMPORTED_MODULE_3__["CarecirclePage"]
    }
];
let CarecirclePageRoutingModule = class CarecirclePageRoutingModule {
};
CarecirclePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CarecirclePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/creatingcare/carecircle/carecircle.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/creatingcare/carecircle/carecircle.module.ts ***!
  \********************************************************************/
/*! exports provided: CarecirclePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarecirclePageModule", function() { return CarecirclePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _carecircle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carecircle-routing.module */ "./src/app/pages/creatingcare/carecircle/carecircle-routing.module.ts");
/* harmony import */ var _carecircle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carecircle.page */ "./src/app/pages/creatingcare/carecircle/carecircle.page.ts");
/* harmony import */ var _popover_popover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popover/popover.component */ "./src/app/pages/creatingcare/carecircle/popover/popover.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/pages/shared/shared.module.ts");









let CarecirclePageModule = class CarecirclePageModule {
    constructor() {
        this.name = "John";
    }
};
CarecirclePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _carecircle_routing_module__WEBPACK_IMPORTED_MODULE_5__["CarecirclePageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
        ],
        declarations: [_carecircle_page__WEBPACK_IMPORTED_MODULE_6__["CarecirclePage"], _popover_popover_component__WEBPACK_IMPORTED_MODULE_7__["PopoverComponent"]]
    })
], CarecirclePageModule);



/***/ }),

/***/ "./src/app/pages/creatingcare/carecircle/carecircle.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/creatingcare/carecircle/carecircle.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cardinfo {\n  box-shadow: none;\n  border-style: solid;\n  border-width: thin;\n  border-radius: 8px;\n  border-color: #B8B8B8;\n  height: auto;\n  width: auto;\n  padding-bottom: 20px;\n}\n.cardinfo .assessment {\n  height: 44px;\n  width: auto;\n  margin-left: 16px;\n  margin-bottom: 0px;\n  margin-top: 6px;\n  --box-shadow:none;\n}\n.cardinfo ion-chip {\n  height: 28px;\n  width: auto;\n  text-align: center;\n  margin-right: 12px;\n  margin-top: 7px;\n}\n.cardinfo ion-chip ion-label {\n  font-size: 12px;\n  list-style: 14px;\n  color: mdgrey;\n}\n.cardinfo ion-text {\n  color: black;\n  font-size: 16px;\n  line-height: 20px;\n  font-weight: normal;\n  font-style: normal;\n}\n.cardinfo #email {\n  font-size: 14px;\n  line-height: 20px;\n  font-style: normal;\n  font-weight: normal;\n}\n.cardinfo #infolabel {\n  margin-left: 16px;\n  margin-top: 7px;\n}\n.cardinfo .assesstime {\n  color: #7E7E7E;\n  line-height: 14px;\n  font-size: 12px;\n  margin-left: 16px;\n  margin-top: 3px;\n  margin-bottom: 5px;\n}\n.pending {\n  --background:#B8B8B8;\n  --border-radius:48px;\n  height: 24px;\n  width: auto;\n  font-size: 12px;\n  line-height: 14px;\n  margin-left: 16px;\n  margin-bottom: 0px;\n  text-transform: none;\n  --box-shadow:none;\n}\n.pending ion-icon {\n  zoom: 0.8;\n  margin-right: 4px;\n}\n.name {\n  text-transform: capitalize;\n}\n.headtoolbar {\n  padding-left: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvY3JlYXRpbmdjYXJlL2NhcmVjaXJjbGUvY2FyZWNpcmNsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NyZWF0aW5nY2FyZS9jYXJlY2lyY2xlL2NhcmVjaXJjbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUNBSjtBREVJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQVI7QURJSTtFQUVJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNIUjtBRE1RO0VBRUksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0xaO0FEVUk7RUFFSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1RSO0FEWUk7RUFFSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDWFI7QURjSTtFQUVJLGlCQUFBO0VBQ0EsZUFBQTtBQ2JSO0FEaUJJO0VBRUksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDaEJSO0FEb0JBO0VBQ0ksb0JBQUE7RUFDQSxvQkFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUNqQk47QURtQk07RUFDSSxTQUFBO0VBQ0EsaUJBQUE7QUNqQlY7QURzQkE7RUFDSSwwQkFBQTtBQ25CSjtBRHNCQTtFQUNJLGtCQUFBO0FDbkJKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3JlYXRpbmdjYXJlL2NhcmVjaXJjbGUvY2FyZWNpcmNsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZGluZm97XG5cbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3JkZXItY29sb3I6ICNCOEI4Qjg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOmF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG5cbiAgICAuYXNzZXNzbWVudHtcbiAgICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDo2cHg7XG4gICAgICAgIC0tYm94LXNoYWRvdzpub25lO1xuXG4gICAgfVxuXG4gICAgaW9uLWNoaXB7XG5cbiAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICAgICAgXG4gICAgICAgXG4gICAgICAgIGlvbi1sYWJlbHtcblxuICAgICAgICAgICAgZm9udC1zaXplOjEycHg7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiAxNHB4O1xuICAgICAgICAgICAgY29sb3I6IG1kZ3JleTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgaW9uLXRleHR7XG5cbiAgICAgICAgY29sb3I6YmxhY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICB9XG5cbiAgICAjZW1haWx7XG5cbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cblxuICAgICNpbmZvbGFiZWx7XG5cbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLmFzc2Vzc3RpbWV7XG5cbiAgICAgICAgY29sb3I6ICM3RTdFN0U7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG59XG5cbi5wZW5kaW5ne1xuICAgIC0tYmFja2dyb3VuZDojQjhCOEI4O1xuICAgIC0tYm9yZGVyLXJhZGl1czo0OHB4O1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgd2lkdGg6YXV0bztcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOjBweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgLS1ib3gtc2hhZG93Om5vbmU7XG5cbiAgICAgIGlvbi1pY29ue1xuICAgICAgICAgIHpvb206MC44O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgfVxufVxuXG5cbi5uYW1le1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uaGVhZHRvb2xiYXJ7XG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xufSIsIi5jYXJkaW5mbyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogdGhpbjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXItY29sb3I6ICNCOEI4Qjg7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuLmNhcmRpbmZvIC5hc3Nlc3NtZW50IHtcbiAgaGVpZ2h0OiA0NHB4O1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbn1cbi5jYXJkaW5mbyBpb24tY2hpcCB7XG4gIGhlaWdodDogMjhweDtcbiAgd2lkdGg6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICBtYXJnaW4tdG9wOiA3cHg7XG59XG4uY2FyZGluZm8gaW9uLWNoaXAgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaXN0LXN0eWxlOiAxNHB4O1xuICBjb2xvcjogbWRncmV5O1xufVxuLmNhcmRpbmZvIGlvbi10ZXh0IHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4uY2FyZGluZm8gI2VtYWlsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLmNhcmRpbmZvICNpbmZvbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLXRvcDogN3B4O1xufVxuLmNhcmRpbmZvIC5hc3Nlc3N0aW1lIHtcbiAgY29sb3I6ICM3RTdFN0U7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnBlbmRpbmcge1xuICAtLWJhY2tncm91bmQ6I0I4QjhCODtcbiAgLS1ib3JkZXItcmFkaXVzOjQ4cHg7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbn1cbi5wZW5kaW5nIGlvbi1pY29uIHtcbiAgem9vbTogMC44O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuLm5hbWUge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmhlYWR0b29sYmFyIHtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/creatingcare/carecircle/carecircle.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/creatingcare/carecircle/carecircle.page.ts ***!
  \******************************************************************/
/*! exports provided: CarecirclePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarecirclePage", function() { return CarecirclePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dataservice.service */ "./src/app/pages/dataservice.service.ts");
/* harmony import */ var _creatingcare_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../creatingcare.service */ "./src/app/pages/creatingcare/creatingcare.service.ts");
/* harmony import */ var src_app_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http.service */ "./src/app/http.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _popover_popover_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popover/popover.component */ "./src/app/pages/creatingcare/carecircle/popover/popover.component.ts");







let CarecirclePage = class CarecirclePage {
    constructor(_dataService, _creatingCareService, popoverController, modalController, _apiService, navCtrl) {
        this._dataService = _dataService;
        this._creatingCareService = _creatingCareService;
        this.popoverController = popoverController;
        this.modalController = modalController;
        this._apiService = _apiService;
        this.navCtrl = navCtrl;
    }
    navigateToAddMember() {
        this.navCtrl.navigateBack(['carecircle/addmembers']);
    }
    populateMemberList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const careCircleId = yield this._creatingCareService.getCareCircleID();
            const careCircleDetails = yield this._creatingCareService.getCareCircleDetails();
            if (careCircleDetails == null) {
                const apiData = this._apiService.get('careCircle/' + careCircleId, {}).then((data) => {
                    this.memberList = data.members;
                    this._creatingCareService.setCareCircleDetails(data);
                });
            }
            else {
                this.memberList = careCircleDetails.members;
                this._creatingCareService.setCareCircleDetails(careCircleDetails);
            }
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.careCircleName = yield this._creatingCareService.getCareCircleName();
            this.populateMemberList();
        });
    }
    back() {
        this.navCtrl.back();
    }
    navigateToAssessment() {
        this._dataService.setLastVisitedPage('/assessment');
        this.navCtrl.navigateForward(['/assessment']);
    }
    presentPopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _popover_popover_component__WEBPACK_IMPORTED_MODULE_6__["PopoverComponent"],
                cssClass: 'popoverstyle',
                event: ev,
                translucent: true,
                mode: 'ios',
            });
            popover.onDidDismiss().then((x) => {
                if (x.data === 'delete') {
                }
            });
            return yield popover.present();
        });
    }
    ngOnInit() {
    }
};
CarecirclePage.ctorParameters = () => [
    { type: _dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"] },
    { type: _creatingcare_service__WEBPACK_IMPORTED_MODULE_3__["CreatingcareService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: src_app_http_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
CarecirclePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carecircle',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./carecircle.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/creatingcare/carecircle/carecircle.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./carecircle.page.scss */ "./src/app/pages/creatingcare/carecircle/carecircle.page.scss")).default]
    })
], CarecirclePage);



/***/ }),

/***/ "./src/app/pages/creatingcare/carecircle/popover/popover.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/creatingcare/carecircle/popover/popover.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  color: #000000;\n  --min-height: 64px;\n  background: #FFFFFF;\n  --border-radius: 8px;\n  width: 100%;\n}\n\nhr {\n  border-width: 1px solid #E0E0E0;\n  margin-left: 16px;\n  margin-right: 16px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\nion-grid {\n  background: #FFFFFF;\n  margin: 0px;\n  padding: 0px;\n  padding-left: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvY3JlYXRpbmdjYXJlL2NhcmVjaXJjbGUvcG9wb3Zlci9wb3BvdmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jcmVhdGluZ2NhcmUvY2FyZWNpcmNsZS9wb3BvdmVyL3BvcG92ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNKLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFFQSxvQkFBQTtFQUNBLFdBQUE7QUNBQTs7QURJQTtFQUNJLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jcmVhdGluZ2NhcmUvY2FyZWNpcmNsZS9wb3BvdmVyL3BvcG92ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG5mb250LXdlaWdodDogNTAwO1xuZm9udC1zaXplOiAxNHB4O1xubGluZS1oZWlnaHQ6IDE3cHg7XG5jb2xvcjogIzAwMDAwMDtcbi0tbWluLWhlaWdodDogNjRweDtcbmJhY2tncm91bmQ6ICNGRkZGRkY7XG4vLyBib3gtc2hhZG93OiAwcHggMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuLS1ib3JkZXItcmFkaXVzOiA4cHg7XG53aWR0aDogMTAwJTtcblxufVxuXG5ocntcbiAgICBib3JkZXItd2lkdGg6IDFweCBzb2xpZCAjRTBFMEUwO1xuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICBtYXJnaW4tdG9wOjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbmlvbi1ncmlke1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgbWFyZ2luIDogMHB4O1xuICAgIHBhZGRpbmcgOiAwcHg7XG4gICAgcGFkZGluZy1sZWZ0IDogMTZweDtcbn0iLCJpb24taXRlbSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIC0tbWluLWhlaWdodDogNjRweDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5ociB7XG4gIGJvcmRlci13aWR0aDogMXB4IHNvbGlkICNFMEUwRTA7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG5pb24tZ3JpZCB7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/creatingcare/carecircle/popover/popover.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/creatingcare/carecircle/popover/popover.component.ts ***!
  \****************************************************************************/
/*! exports provided: PopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverComponent", function() { return PopoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let PopoverComponent = class PopoverComponent {
    constructor(popoverCntrl) {
        this.popoverCntrl = popoverCntrl;
    }
    ngOnInit() { }
    delete() {
        this.popoverCntrl.dismiss("delete");
    }
};
PopoverComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
PopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popover',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./popover.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/creatingcare/carecircle/popover/popover.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./popover.component.scss */ "./src/app/pages/creatingcare/carecircle/popover/popover.component.scss")).default]
    })
], PopoverComponent);



/***/ })

}]);
//# sourceMappingURL=pages-creatingcare-carecircle-carecircle-module-es2015.js.map