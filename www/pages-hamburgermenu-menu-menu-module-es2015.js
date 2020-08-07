(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-hamburgermenu-menu-menu-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hamburgermenu/menu/menu.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hamburgermenu/menu/menu.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header>\n  <ion-toolbar>\n    <div class=\"hdcontent\" style=\"display: flex;\">\n      <img src=\"assets/MariposaIcons/micon.svg\" alt=\"\" />\n      <ion-title mode=\"md\" class=\"title-text vitaltext\">\n        Menu\n      </ion-title>\n    </div>\n    <ion-buttons mode=\"md\" slot=\"end\">\n      <ion-button>\n        <ion-icon\n          mode=\"md\"\n          [src]=\"visible ? 'assets/MariposaIcons/notification.svg' : 'assets/MariposaIcons/Notificationdisabled.svg'\"\n        ></ion-icon>\n      </ion-button>\n      <ion-button>\n        <ion-icon\n          class=\"propic\"\n          mode=\"md\"\n          src=\"assets/MariposaIcons/profile_img.svg\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"pagebckd\">\n  <ion-grid class=\"menugrid\">\n    \n    <ion-row>\n      <ion-col size=\"1.7\">\n        <ion-icon class=\"logos\" src=\"../assets/MariposaIcons/Menu/carecircle.svg\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-text>Care Circles</ion-text>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"medication\">\n      <ion-col size=\"1.7\">\n        <ion-icon class=\"logos\" src=\"../assets/MariposaIcons/Menu/medication.svg\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-text>Medication</ion-text>\n      </ion-col>\n    </ion-row>\n\n    <hr class=\"solid\">\n\n    <ion-row>\n      <ion-col size=\"1.7\">\n        <ion-icon class=\"logos\" src=\"../assets/MariposaIcons/Menu/refer.svg\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-text>Refer</ion-text>\n      </ion-col>\n    </ion-row>\n\n    <hr class=\"solid\">\n\n    <ion-row>\n      <ion-col size=\"1.7\">\n        <ion-icon class=\"logos\" src=\"../assets/MariposaIcons/Menu/faq.svg\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-text>FAQs</ion-text>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"medication\">\n      <ion-col size=\"1.7\">\n        <ion-icon class=\"logos\" src=\"../assets/MariposaIcons/Menu/privacy.svg\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-text>Privacy Policy</ion-text>\n      </ion-col>\n    </ion-row>\n\n    <hr class=\"solid\">\n\n    <ion-row>\n      <ion-col size=\"1.7\">\n        <ion-icon class=\"logos\" src=\"../assets/MariposaIcons/Menu/logout.svg\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-text>Log Out</ion-text>\n      </ion-col>\n    </ion-row>\n\n    <ion-text class=\"copyright\">allcopyrightsreserved@mariposa-2020<br>version 1.0.0</ion-text>\n   \n  \n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/hamburgermenu/menu/menu-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/hamburgermenu/menu/menu-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: MenuPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageRoutingModule", function() { return MenuPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.page */ "./src/app/pages/hamburgermenu/menu/menu.page.ts");




const routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_3__["MenuPage"]
    }
];
let MenuPageRoutingModule = class MenuPageRoutingModule {
};
MenuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenuPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/hamburgermenu/menu/menu.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/hamburgermenu/menu/menu.module.ts ***!
  \*********************************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-routing.module */ "./src/app/pages/hamburgermenu/menu/menu-routing.module.ts");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "./src/app/pages/hamburgermenu/menu/menu.page.ts");







let MenuPageModule = class MenuPageModule {
};
MenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuPageRoutingModule"]
        ],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
    })
], MenuPageModule);



/***/ }),

/***/ "./src/app/pages/hamburgermenu/menu/menu.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/hamburgermenu/menu/menu.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hdcontent {\n  display: flex;\n  margin: 0 0 0 24px;\n  padding-top: 40px;\n}\n\n.propic {\n  font-size: 32px;\n}\n\n.pagebckd {\n  --background: #f8f8f8;\n}\n\n.logos {\n  margin-left: 8px;\n  float: left;\n}\n\n.vitaltext {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 19px;\n  /* identical to box height */\n  /* Mariposa Navy */\n  color: #010465;\n  margin: 0 0 0 8px;\n}\n\nion-text {\n  font-size: 16px;\n  line-height: 19px;\n  display: flex;\n  color: #1A1A1A;\n}\n\n.copyright {\n  font-size: 12px;\n  line-height: 14px;\n  display: flex;\n  color: #B8B8B8;\n  margin-left: 8px;\n  margin-top: 250px;\n}\n\n.solid {\n  margin-top: 26px;\n  margin-bottom: 27px;\n  color: #E0E0E0;\n}\n\n.menugrid {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 24px;\n  padding-bottom: 24px;\n}\n\n.medication {\n  margin-top: 16px;\n}\n\nion-row {\n  padding: 0px;\n  margin: 0px;\n  align-items: center;\n}\n\nion-col {\n  padding: 0px;\n  margin: 0px;\n}\n\nion-toolbar {\n  height: 88px;\n}\n\nion-toolbar ion-buttons {\n  padding-top: 40px;\n  margin-right: 15px;\n}\n\nion-icon {\n  zoom: 1;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvaGFtYnVyZ2VybWVudS9tZW51L21lbnUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9oYW1idXJnZXJtZW51L21lbnUvbWVudS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtBQ0NKOztBREVFO0VBQ0UscUJBQUE7QUNDSjs7QURFRTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQ0NOOztBREVFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBRUEsa0JBQUE7RUFFQSxjQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURNRTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDSE47O0FES0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNGSjs7QURLRTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDRk47O0FES0U7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0ZOOztBREtFO0VBQ0ksZ0JBQUE7QUNGTjs7QURLRTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNGTjs7QURLRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDRko7O0FESUU7RUFDRSxZQUFBO0FDREo7O0FER0k7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDRE47O0FES0U7RUFDRSxPQUFBO0VBQ0EsZUFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGFtYnVyZ2VybWVudS9tZW51L21lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhkY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDAgMCAwIDI0cHg7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG4gIH1cblxuICAucHJvcGljIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gIH1cblxuICAucGFnZWJja2Qge1xuICAgIC0tYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgfVxuXG4gIC5sb2dvc3tcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgfVxuICBcbiAgLnZpdGFsdGV4dCB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBcbiAgICAvKiBNYXJpcG9zYSBOYXZ5ICovXG4gIFxuICAgIGNvbG9yOiAjMDEwNDY1O1xuICAgIG1hcmdpbjogMCAwIDAgOHB4O1xuICB9XG5cblxuXG4gIGlvbi10ZXh0e1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgY29sb3I6ICMxQTFBMUE7XG4gIH1cbiAgLmNvcHlyaWdodHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2xvcjojQjhCOEI4O1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgbWFyZ2luLXRvcDogMjUwcHg7XG4gIH1cblxuICAuc29saWR7XG4gICAgICBtYXJnaW4tdG9wOiAyNnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbToyN3B4O1xuICAgICAgY29sb3I6I0UwRTBFMDtcbiAgfVxuXG4gIC5tZW51Z3JpZHtcbiAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgICBwYWRkaW5nLXRvcDogMjRweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICB9XG5cbiAgLm1lZGljYXRpb257XG4gICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG5cbiAgaW9uLXJvd3tcbiAgICAgIHBhZGRpbmc6MHB4O1xuICAgICAgbWFyZ2luOjBweDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICBpb24tY29se1xuICAgIHBhZGRpbmc6MHB4O1xuICAgIG1hcmdpbjowcHg7XG4gIH1cbiAgaW9uLXRvb2xiYXJ7XG4gICAgaGVpZ2h0OiA4OHB4O1xuICAgIFxuICAgIGlvbi1idXR0b25ze1xuICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgfVxuICB9ICBcbiAgXG4gIGlvbi1pY29uIHtcbiAgICB6b29tOiAxO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfSIsIi5oZGNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAgMCAwIDI0cHg7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuXG4ucHJvcGljIHtcbiAgZm9udC1zaXplOiAzMnB4O1xufVxuXG4ucGFnZWJja2Qge1xuICAtLWJhY2tncm91bmQ6ICNmOGY4Zjg7XG59XG5cbi5sb2dvcyB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4udml0YWx0ZXh0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgLyogTWFyaXBvc2EgTmF2eSAqL1xuICBjb2xvcjogIzAxMDQ2NTtcbiAgbWFyZ2luOiAwIDAgMCA4cHg7XG59XG5cbmlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICMxQTFBMUE7XG59XG5cbi5jb3B5cmlnaHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogI0I4QjhCODtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgbWFyZ2luLXRvcDogMjUwcHg7XG59XG5cbi5zb2xpZCB7XG4gIG1hcmdpbi10b3A6IDI2cHg7XG4gIG1hcmdpbi1ib3R0b206IDI3cHg7XG4gIGNvbG9yOiAjRTBFMEUwO1xufVxuXG4ubWVudWdyaWQge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIHBhZGRpbmctdG9wOiAyNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbn1cblxuLm1lZGljYXRpb24ge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG5pb24tcm93IHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgaGVpZ2h0OiA4OHB4O1xufVxuaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG5pb24taWNvbiB7XG4gIHpvb206IDE7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/hamburgermenu/menu/menu.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/hamburgermenu/menu/menu.page.ts ***!
  \*******************************************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MenuPage = class MenuPage {
    constructor() {
        this.visible = true;
    }
    ngOnInit() {
    }
};
MenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./menu.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hamburgermenu/menu/menu.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./menu.page.scss */ "./src/app/pages/hamburgermenu/menu/menu.page.scss")).default]
    })
], MenuPage);



/***/ })

}]);
//# sourceMappingURL=pages-hamburgermenu-menu-menu-module-es2015.js.map