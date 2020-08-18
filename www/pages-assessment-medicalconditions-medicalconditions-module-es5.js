function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-assessment-medicalconditions-medicalconditions-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/medicalconditions/medicalconditions.page.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/medicalconditions/medicalconditions.page.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAssessmentMedicalconditionsMedicalconditionsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<ion-header mode=\"md\">\n  <ion-toolbar class=\"headtoolbar\">\n    <ion-row>\n      <ion-col size=\"2\">\n        <ion-toolbar>\n          <ion-buttons slot=\"start\">\n            <m-backbutton></m-backbutton>\n          </ion-buttons>\n          <!-- <ion-buttons slot=\"start\">\n            <ion-back-button\n              mode=\"md\"\n              color=\"mdblack\"\n              icon=\"chevron-back-outline\"\n              defaultHref=\"admin-sign-in\"\n            ></ion-back-button>\n          </ion-buttons> -->\n        </ion-toolbar>\n      </ion-col>\n      <ion-col size=\"10\">\n        <div>\n          <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\"\n            >Medical & Psychiatric Conditions</ion-text\n          >\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid style=\"padding:24px;margin-bottom:90px ;height:fit-content\">\n    \n    <div style=\"padding-top:0px;margin-bottom:15px;\">\n      <ion-label style=\"font-size: 16px;line-height: 19px;\">Current Medical Conditions</ion-label>\n    </div>  \n    \n  <!-- CHECKBOX 1 -->\n    \n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col size=\"1\">\n        <div  style=\"padding-left: 3px;\">\n          <ion-checkbox mode=\"md\" #Condition1 color=\"mwhite\" checked=\"true\">\n\n          </ion-checkbox></div>\n      </ion-col>\n      <ion-col  (click)=\"generateClick(Condition1)\"  size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Condition 1</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 2 -->\n    \n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #Condition2  color=\"mwhite\" checked=\"true\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(Condition2)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Condition 2</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 3 -->\n    \n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #Condition3 color=\"mwhite\" checked=\"true\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(Condition3)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Condition 3</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <hr class=\"solid\">\n\n    <!-- CURRENT PSYCHIATRIC CONDITION -->\n\n    <div style=\"padding-top:0px;margin-bottom:15px;\">\n      <ion-label style=\"font-size: 16px;line-height: 19px;\">Current Psychiatric Conditions</ion-label>\n    </div>  \n    \n  <!-- CHECKBOX 1 -->\n\n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #Depression color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(Depression)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Depression</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 2 -->\n    \n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #Anxiety color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(Anxiety)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Anxiety</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 3 -->\n    \n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox  mode=\"md\" #Paranoia color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(Paranoia)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Paranoia</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <hr class=\"solid\">\n\n    <!-- PAST OR CURRENT SUBSTANCE USE -->\n\n    <div style=\"padding-top:0px;margin-bottom:15px;\">\n      <ion-label style=\"font-size: 16px;line-height: 19px;\">Past or Current Substance Use</ion-label>\n    </div>  \n    \n  <!-- CHECKBOX 1 -->\n\n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox  mode=\"md\" #Substancename1 color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(Substancename1)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Substance name 1</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 2 -->\n    \n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #Substancename2 color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(Substancename2)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Substance name 2</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 3 -->\n    \n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox  mode=\"md\" #Substancename3 color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(Substancename3)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Substance name 3</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <hr class=\"solid\">\n\n    <!-- HOME HEALTH PROVIDERS -->\n\n    <div style=\"padding-top:0px;margin-bottom:15px;\">\n      <ion-label style=\"font-size: 16px;line-height: 19px;\">Home Health Providers</ion-label>\n    </div>  \n    \n  <!-- CHECKBOX 1 -->\n\n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #Physicaltherapist color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text  (click)=\"generateClick(Physicaltherapist)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Physical therapist</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 2 -->\n    \n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #Occupationaltherapist color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(Occupationaltherapist)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Occupational therapist</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 3 -->\n    \n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #SpeechTherapist color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(SpeechTherapist)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Speech Therapist</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <hr class=\"solid\">\n\n    <!-- DNR -->\n\n    <ion-row style=\"align-items: center;\">\n      <ion-col size=8>\n        <ion-text  style=\"font-size:16px;line-height:19px;font-weight:300;\">DNR</ion-text>\n      </ion-col>\n      <ion-col>\n        <ion-text  style=\"font-size:16px;line-height:19px;font-weight:normal;float: right;margin-right:12px ;\"><span *ngIf=\"DNR.checked\">YES</span\n          ><span *ngIf=\"!DNR.checked\">NO</span></ion-text>\n      </ion-col>\n      <ion-col>\n        <ion-toggle #DNR mode=\"ios\" checked color=\"primary\" style=\"float: right;\"></ion-toggle>\n      </ion-col>\n    </ion-row>\n\n    <hr class=\"solid\">\n\n    <!-- WEARS BRIEFS -->\n\n    <ion-row style=\"align-items: center;\">\n      <ion-col size=8>\n        <ion-text  style=\"font-size:16px;line-height:19px;font-weight:300;\">Wears Briefs</ion-text>\n      </ion-col>\n      <ion-col>\n        <ion-text style=\"font-size:16px;line-height:19px;font-weight:normal;float: right;margin-right:12px ;\"><span *ngIf=\"WearsBriefs.checked\">YES</span\n          ><span *ngIf=\"!WearsBriefs.checked\">NO</span></ion-text>\n      </ion-col>\n      <ion-col>\n        <ion-toggle #WearsBriefs mode=\"ios\" checked color=\"primary\" style=\"float: right;\"></ion-toggle>\n      </ion-col>\n    </ion-row>\n\n    <hr class=\"solid\">\n\n    <!-- LEFT ALONE -->\n\n    <ion-row style=\"align-items: center;\">\n      <ion-col size=8>\n        <ion-text  \n         style=\"font-size:16px;line-height:19px;font-weight:300;\">Can Senior be left alone</ion-text>\n      </ion-col>\n      <ion-col>\n        <ion-text style=\"font-size:16px;line-height:19px;font-weight:normal;float: right;margin-right:12px ;\"><span *ngIf=\"CanSeniorbeleftalone.checked\">YES</span\n          ><span *ngIf=\"!CanSeniorbeleftalone.checked\">NO</span></ion-text>\n      </ion-col>\n      <ion-col>\n        <ion-toggle #CanSeniorbeleftalone mode=\"ios\" class=\"toggle-small\" checked color=\"primary\" style=\"float: right;\"></ion-toggle>\n      </ion-col>\n    </ion-row>\n\n    <hr class=\"solid\">\n\n    <!-- INCONTINENCE -->\n\n    <div style=\"padding-top:0px;margin-bottom:10px;\">\n      <ion-label style=\"font-size: 16px;line-height: 19px;\">Incontinence</ion-label>\n    </div>  \n\n    <ion-radio-group  #Urination>\n      <ion-row style=\"align-items: center;\">\n        <ion-col size=\"1\">\n          <ion-radio  mode=\"md\" value=\"0\" style=\"float:left;\"></ion-radio>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-text  (click)=\"generateClick2(Urination,'0')\" style=\"font-size:16px;line-height:19px;font-weight:300;float:left\">Urination</ion-text>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-radio  mode=\"md\" value=\"1\" style=\"float:right\"></ion-radio>\n        </ion-col>\n        <ion-col size=\"3\">\n         <ion-text (click)=\"generateClick2(Urination,'1')\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:8px;\">Bowels</ion-text>\n        </ion-col>  \n      </ion-row>\n    </ion-radio-group>\n\n    <hr class=\"solid\">\n\n    <!-- HEARING -->\n\n    <div style=\"padding-top:0px;margin-bottom:10px;\">\n      <ion-label style=\"font-size: 16px;line-height: 19px;\">Hearing</ion-label>\n    </div>  \n\n    <ion-radio-group #Good>\n      <ion-row style=\"align-items: center;\">\n        <ion-col size=\"1\">\n          <ion-radio mode=\"md\" value=\"0\" style=\"float:left;\"></ion-radio>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-text (click)=\"generateClick2(Good,'0')\" style=\"font-size:16px;line-height:19px;font-weight:300;float:left\">Good</ion-text>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-radio mode=\"md\" value=\"1\" style=\"float:right\"></ion-radio>\n        </ion-col>\n        <ion-col size=\"3\">\n         <ion-text (click)=\"generateClick2(Good,'1')\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:8px;\">Fair</ion-text>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-radio mode=\"md\" value=\"2\" style=\"float:right\"></ion-radio>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-text (click)=\"generateClick2(Good,'2')\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:8px;\">Poor</ion-text>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row style=\"align-items: center;\">\n        <ion-col size=\"1\">\n          <ion-radio mode=\"md\" value=\"3\" style=\"float:left;\"></ion-radio>\n        </ion-col>\n        <ion-col size=\"3\">\n          <h5 (click)=\"generateClick2(Good,'3')\" style=\"font-size:16px;line-height:19px;font-weight:300;float:left\">Deaf</h5>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-radio mode=\"md\" value=\"4\" style=\"float:right\"></ion-radio>\n        </ion-col>\n        <ion-col size=\"4\">\n         <ion-text (click)=\"generateClick2(Good,'4')\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:8px;\">Hearing Aid</ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-radio-group>\n\n    <hr style=\"margin-top:5px ;\" class=\"solid\">\n\n    <!-- SPEECH -->\n\n    <div style=\"padding-top:0px;margin-bottom:10px;\">\n      <ion-label style=\"font-size: 16px;line-height: 19px;\">Speech</ion-label>\n    </div>  \n\n    <ion-radio-group #Fair>\n      <ion-row style=\"align-items: center;\">\n        <ion-col size=\"1\">\n          <ion-radio mode=\"md\" value=\"0\" style=\"float:left;\"></ion-radio>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-text (click)=\"generateClick2(Fair,'0')\" style=\"font-size:16px;line-height:19px;font-weight:300;float:left\">Good</ion-text>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-radio mode=\"md\" value=\"1\" style=\"float:right\"></ion-radio>\n        </ion-col>\n        <ion-col size=\"3\">\n         <ion-text (click)=\"generateClick2(Fair,'1')\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:8px;\">Fair</ion-text>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-radio mode=\"md\" value=\"2\" style=\"float:right\"></ion-radio>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-text (click)=\"generateClick2(Fair,'2')\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:8px;\">Poor</ion-text>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row style=\"align-items: center;\">\n        <ion-col size=\"1\">\n          <ion-radio mode=\"md\" value=\"3\" style=\"float:left;\"></ion-radio>\n        </ion-col>\n        <ion-col size=\"3\">\n          <h5 (click)=\"generateClick2(Fair,'3')\" style=\"font-size:16px;line-height:19px;font-weight:300;float:left\">Deaf</h5>\n        </ion-col>\n        \n\n      </ion-row>\n    </ion-radio-group>\n\n    <hr style=\"margin-top:5px ;\" class=\"solid\">\n\n    <!-- VISION -->\n\n    <div style=\"padding-top:0px;margin-bottom:10px;\">\n      <ion-label style=\"font-size: 16px;line-height: 19px;\">Vision</ion-label>\n    </div>  \n\n    <ion-radio-group #Poor>\n      <ion-row style=\"align-items: center;\">\n        <ion-col size=\"1\">\n          <ion-radio mode=\"md\" value=\"0\" style=\"float:left;\"></ion-radio>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-text (click)=\"generateClick2(Poor,'0')\" style=\"font-size:16px;line-height:19px;font-weight:300;float:left\">Good</ion-text>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-radio mode=\"md\" value=\"1\" style=\"float:right\"></ion-radio>\n        </ion-col>\n        <ion-col size=\"3\">\n         <ion-text  (click)=\"generateClick2(Poor,'1')\"  style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:8px;\">Fair</ion-text>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-radio mode=\"md\" value=\"2\" style=\"float:right\"></ion-radio>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-text (click)=\"generateClick2(Poor,'2')\"  style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:8px;\">Poor</ion-text>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row style=\"align-items: center;\">\n        <ion-col size=\"1\">\n          <ion-radio mode=\"md\" value=\"3\" style=\"float:left;\"></ion-radio>\n        </ion-col>\n        <ion-col size=\"3\">\n          <h5  (click)=\"generateClick2(Poor,'3')\" style=\"font-size:16px;line-height:19px;font-weight:300;float:left\">Blind</h5>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-radio mode=\"md\" value=\"4\" style=\"float:right\"></ion-radio>\n        </ion-col>\n        <ion-col size=\"4\">\n         <ion-text (click)=\"generateClick2(Poor,'4')\"  style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:8px;\">Glasses</ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-radio-group>\n\n    <hr style=\"margin-top:5px ;\" class=\"solid\">\n\n    <!-- SMELL -->\n\n    <div style=\"padding-top:0px;margin-bottom:10px;\">\n      <ion-label style=\"font-size: 16px;line-height: 19px;\">Smell </ion-label>\n    </div>  \n\n    <ion-radio-group #None>\n      <ion-row style=\"align-items: center;\">\n        <ion-col size=\"1\">\n          <ion-radio mode=\"md\" value=\"0\" style=\"float:left;\"></ion-radio>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-text (click)=\"generateClick2(None,'0')\" style=\"font-size:16px;line-height:19px;font-weight:300;float:left\">Good</ion-text>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-radio mode=\"md\" value=\"1\" style=\"float:right\"></ion-radio>\n        </ion-col>\n        <ion-col size=\"3\">\n         <ion-text (click)=\"generateClick2(None,'1')\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:8px;\">Fair</ion-text>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-radio mode=\"md\" value=\"2\" style=\"float:right\"></ion-radio>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-text (click)=\"generateClick2(None,'2')\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:8px;\">Poor</ion-text>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row style=\"align-items: center;\">\n        <ion-col size=\"1\">\n          <ion-radio mode=\"md\" value=\"3\" style=\"float:left;\"></ion-radio>\n        </ion-col>\n        <ion-col size=\"3\">\n          <h5 (click)=\"generateClick2(None,'3')\" style=\"font-size:16px;line-height:19px;font-weight:300;float:left\">None</h5>\n        </ion-col>\n        \n\n      </ion-row>\n    </ion-radio-group>\n\n    <hr style=\"margin-top:5px ;\" class=\"solid\">\n\n     <!-- SWALLOWING -->\n\n     <div style=\"padding-top:0px;margin-bottom:10px;\">\n      <ion-label style=\"font-size: 16px;line-height: 19px;\">Swallowing </ion-label>\n    </div>  \n\n    <ion-radio-group #Swallowing>\n      <ion-row style=\"align-items: center;\">\n        <ion-col size=\"1\">\n          <ion-radio mode=\"md\" value=\"0\" style=\"float:left;\"></ion-radio>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-text (click)=\"generateClick2(Swallowing,'0')\" style=\"font-size:16px;line-height:19px;font-weight:300;float:left\">Good</ion-text>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-radio mode=\"md\" value=\"1\" style=\"float:right\"></ion-radio>\n        </ion-col>\n        <ion-col size=\"3\">\n         <ion-text (click)=\"generateClick2(Swallowing,'1')\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:8px;\">Fair</ion-text>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-radio mode=\"md\" value=\"2\" style=\"float:right\"></ion-radio>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-text (click)=\"generateClick2(Swallowing,'2')\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:8px;\">Poor</ion-text>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row style=\"align-items: center;\">\n        <ion-col size=\"1\">\n          <ion-radio mode=\"md\" value=\"3\" style=\"float:left;\"></ion-radio>\n        </ion-col>\n        <ion-col size=\"3\">\n          <h5 (click)=\"generateClick2(Swallowing,'3')\" style=\"font-size:16px;line-height:19px;font-weight:300;float:left\">None</h5>\n        </ion-col>\n        \n\n      </ion-row>\n    </ion-radio-group>\n\n    <hr style=\"margin-top:5px ;\" class=\"solid\">\n\n    <!-- PLEASE SELECT OTHER FACTORS -->\n\n    <div style=\"padding-top:0px;margin-bottom:15px;\">\n      <ion-label style=\"font-size: 16px;line-height: 19px;\">Please Select Other Factors</ion-label>\n    </div>  \n    \n  <!-- CHECKBOX 1 -->\n\n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #Frequentmoodchanges color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(Frequentmoodchanges)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Frequent mood changes</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 2 -->\n    \n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #Shorttermmemoryloss color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(Shorttermmemoryloss)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Short term memory loss</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 3 -->\n    \n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #Spaciavisualrelationships color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(Spaciavisualrelationships)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Spacia/visual relationships</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 4 -->\n    \n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\"  #Speakingconversing color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(Speakingconversing)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Speaking/conversing</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 5 -->\n    \n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #Repetition color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(Repetition)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Repetition</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 6 -->\n    \n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #Comatose color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(Comatose)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Comatose</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 7 -->\n    \n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #Completingtasks color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(Completingtasks)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Completing tasks</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 8 -->\n    \n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #Misplacingitems color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(Misplacingitems)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Misplacing items</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 9 -->\n    \n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #Poorjudgment color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(Poorjudgment)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Poor judgment</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 10 -->\n    \n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #Agitationaggression color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(Agitationaggression)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Agitation/aggression</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 11 -->\n    \n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #Withdrawal color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(Withdrawal)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Withdrawal</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 12 -->\n    \n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #Wandering color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text  (click)=\"generateClick(Wandering)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Wandering</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 13 -->\n    \n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #ProblemSolving color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text  (click)=\"generateClick(ProblemSolving)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Problem Solving</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 14 -->\n    \n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #Sundowning color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text  (click)=\"generateClick(Sundowning)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Sundowning</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 15 -->\n    \n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #Poorappetite color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text  (click)=\"generateClick(Poorappetite)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Poor appetite</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 16 -->\n    \n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #Sleepingproblems color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(Sleepingproblems)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Sleeping problems</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 17 -->\n    \n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #Orientedtopersondattimeandplace color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(Orientedtopersondattimeandplace)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Oriented to person, date, time and place</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n   \n\n\n\n\n\n    \n\n\n\n\n  </ion-grid>\n</ion-content>\n\n\n\n\n<ion-footer>\n  <ion-grid style=\"padding-left: 24px;padding-right: 24px;padding-top: 16px;padding-bottom: 16px;\">\n  <!-- BUTTON -->\n  <div id=\"button\">\n    <ion-row style=\"align-items: center;\">\n      <ion-col size=\"4\">\n        \n          <ion-button class=\"btn1\" [disabled]=\"false\"  type=\"submit\"  id=\"signup\">PREVIEW</ion-button>\n          \n      </ion-col>\n       \n      <ion-col size=\"8\">\n        \n          <ion-button class=\"btn2\" [disabled]=\"false\"  type=\"submit\" (click)= \"save()\"  id=\"signup\">SAVE AND PROCEED</ion-button>\n        \n      </ion-col>\n    </ion-row>\n  </div>  \n</ion-grid>\n  \n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/pages/assessment/medicalconditions/medicalconditions-routing.module.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/pages/assessment/medicalconditions/medicalconditions-routing.module.ts ***!
    \****************************************************************************************/

  /*! exports provided: MedicalconditionsPageRoutingModule */

  /***/
  function srcAppPagesAssessmentMedicalconditionsMedicalconditionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MedicalconditionsPageRoutingModule", function () {
      return MedicalconditionsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _medicalconditions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./medicalconditions.page */
    "./src/app/pages/assessment/medicalconditions/medicalconditions.page.ts");

    var routes = [{
      path: '',
      component: _medicalconditions_page__WEBPACK_IMPORTED_MODULE_3__["MedicalconditionsPage"]
    }];

    var MedicalconditionsPageRoutingModule = function MedicalconditionsPageRoutingModule() {
      _classCallCheck(this, MedicalconditionsPageRoutingModule);
    };

    MedicalconditionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MedicalconditionsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/assessment/medicalconditions/medicalconditions.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/assessment/medicalconditions/medicalconditions.module.ts ***!
    \********************************************************************************/

  /*! exports provided: MedicalconditionsPageModule */

  /***/
  function srcAppPagesAssessmentMedicalconditionsMedicalconditionsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MedicalconditionsPageModule", function () {
      return MedicalconditionsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _medicalconditions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./medicalconditions-routing.module */
    "./src/app/pages/assessment/medicalconditions/medicalconditions-routing.module.ts");
    /* harmony import */


    var _medicalconditions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./medicalconditions.page */
    "./src/app/pages/assessment/medicalconditions/medicalconditions.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/pages/shared/shared.module.ts");

    var MedicalconditionsPageModule = function MedicalconditionsPageModule() {
      _classCallCheck(this, MedicalconditionsPageModule);
    };

    MedicalconditionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _medicalconditions_routing_module__WEBPACK_IMPORTED_MODULE_5__["MedicalconditionsPageRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      declarations: [_medicalconditions_page__WEBPACK_IMPORTED_MODULE_6__["MedicalconditionsPage"]]
    })], MedicalconditionsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/assessment/medicalconditions/medicalconditions.page.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/assessment/medicalconditions/medicalconditions.page.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAssessmentMedicalconditionsMedicalconditionsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-checkbox {\n  background: #ffffff;\n  border-width: 1px !important;\n  border-style: solid !important;\n  border-radius: 4px;\n  border-color: black !important;\n  --height: 24px;\n  --width: 24px;\n  --checkmark-color: #000000;\n  --background-checked: #ffffff;\n  --border-color: #ffffff;\n  --border-color-checked: #ffffff;\n}\n\nhr.solid {\n  border-top: 1px solid #E5E5E5;\n  margin-top: 11px;\n  margin-bottom: 16px;\n}\n\nion-radio {\n  --color:black;\n  --border-width:1px;\n}\n\n.hdtoolbar {\n  --border:none;\n  --box-shadow:none;\n}\n\n#button {\n  height: 76px;\n  background-color: white;\n  left: 0px;\n  bottom: 0px;\n  position: fixed;\n  box-shadow: 0px -2px 8px rgba(65, 55, 255, 0.08);\n  z-index: 2;\n  padding: 0px;\n}\n\n.btn1 {\n  --color:#4137FF;\n  --background:#ffffff;\n  --border-radius: 8px;\n  --border-color:#4137FF;\n  border-radius: 8px;\n  border-style: solid;\n  border-width: thin;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 17px;\n  font-weight: 600;\n  --box-shadow: none;\n  height: 44px;\n  width: 77%;\n  margin-top: 11px;\n  margin-left: 24px;\n}\n\n.btn2 {\n  outline: none;\n  border-radius: 8px;\n  color: white;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 17px;\n  font-weight: 600;\n  --box-shadow: none;\n  height: 44px;\n  width: 86%;\n  margin-top: 11px;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvYXNzZXNzbWVudC9tZWRpY2FsY29uZGl0aW9ucy9tZWRpY2FsY29uZGl0aW9ucy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Fzc2Vzc21lbnQvbWVkaWNhbGNvbmRpdGlvbnMvbWVkaWNhbGNvbmRpdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7QUNDSjs7QURFRTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREdFO0VBRUUsYUFBQTtFQUNBLGtCQUFBO0FDREo7O0FES0U7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUNGSjs7QURLRTtFQUVFLFlBQUE7RUFFQSx1QkFBQTtFQUNDLFNBQUE7RUFDRCxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdEQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNKSjs7QURPQTtFQUVJLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFHQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNQSjs7QURVQTtFQUVJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFHQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFHQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNaSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2Vzc21lbnQvbWVkaWNhbGNvbmRpdGlvbnMvbWVkaWNhbGNvbmRpdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNoZWNrYm94IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlci13aWR0aDogMXB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgLS1oZWlnaHQ6IDI0cHg7XG4gICAgLS13aWR0aDogMjRweDtcbiAgICAtLWNoZWNrbWFyay1jb2xvcjogIzAwMDAwMDtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2ZmZmZmZjtcbiAgICAtLWJvcmRlci1jb2xvcjogI2ZmZmZmZjtcbiAgICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjZmZmZmZmO1xuICB9XG5cbiAgaHIuc29saWQge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTVFNUU1O1xuICAgIG1hcmdpbi10b3A6IDExcHg7XG4gICAgbWFyZ2luLWJvdHRvbToxNnB4O1xuICAgIFxuICB9XG5cbiAgaW9uLXJhZGlve1xuXG4gICAgLS1jb2xvcjpibGFjaztcbiAgICAtLWJvcmRlci13aWR0aDoxcHg7XG4gICAgXG4gIH1cblxuICAuaGR0b29sYmFye1xuICAgIC0tYm9yZGVyOm5vbmU7XG4gICAgLS1ib3gtc2hhZG93Om5vbmU7XG4gIH1cblxuICAjYnV0dG9ue1xuICAgIFxuICAgIGhlaWdodDogNzZweDtcbiAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgICBsZWZ0IDogMHB4O1xuICAgIGJvdHRvbTowcHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJveC1zaGFkb3c6IDBweCAtMnB4IDhweCByZ2JhKDY1LCA1NSwgMjU1LCAwLjA4KTtcbiAgICB6LWluZGV4OiAyO1xuICAgIHBhZGRpbmc6MHB4O1xufVxuXG4uYnRuMXtcblxuICAgIC0tY29sb3I6IzQxMzdGRjtcbiAgICAtLWJhY2tncm91bmQ6I2ZmZmZmZjtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDsgXG4gICAgLS1ib3JkZXItY29sb3I6IzQxMzdGRjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICBcblxuICAgIGhlaWdodDo0NHB4O1xuICAgIHdpZHRoOjc3JTtcbiAgICBtYXJnaW4tdG9wOiAxMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xufVxuXG4uYnRuMntcblxuICAgIG91dGxpbmU6bm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIFxuICAgIFxuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICBcblxuICAgIGhlaWdodDogNDRweDtcbiAgICB3aWR0aDogODYlO1xuICAgIG1hcmdpbi10b3A6IDExcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59IiwiaW9uLWNoZWNrYm94IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXdpZHRoOiAxcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgLS1oZWlnaHQ6IDI0cHg7XG4gIC0td2lkdGg6IDI0cHg7XG4gIC0tY2hlY2ttYXJrLWNvbG9yOiAjMDAwMDAwO1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2ZmZmZmZjtcbiAgLS1ib3JkZXItY29sb3I6ICNmZmZmZmY7XG4gIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICNmZmZmZmY7XG59XG5cbmhyLnNvbGlkIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFNUU1RTU7XG4gIG1hcmdpbi10b3A6IDExcHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbmlvbi1yYWRpbyB7XG4gIC0tY29sb3I6YmxhY2s7XG4gIC0tYm9yZGVyLXdpZHRoOjFweDtcbn1cblxuLmhkdG9vbGJhciB7XG4gIC0tYm9yZGVyOm5vbmU7XG4gIC0tYm94LXNoYWRvdzpub25lO1xufVxuXG4jYnV0dG9uIHtcbiAgaGVpZ2h0OiA3NnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbGVmdDogMHB4O1xuICBib3R0b206IDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3gtc2hhZG93OiAwcHggLTJweCA4cHggcmdiYSg2NSwgNTUsIDI1NSwgMC4wOCk7XG4gIHotaW5kZXg6IDI7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmJ0bjEge1xuICAtLWNvbG9yOiM0MTM3RkY7XG4gIC0tYmFja2dyb3VuZDojZmZmZmZmO1xuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgLS1ib3JkZXItY29sb3I6IzQxMzdGRjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IHRoaW47XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBoZWlnaHQ6IDQ0cHg7XG4gIHdpZHRoOiA3NyU7XG4gIG1hcmdpbi10b3A6IDExcHg7XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xufVxuXG4uYnRuMiB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgaGVpZ2h0OiA0NHB4O1xuICB3aWR0aDogODYlO1xuICBtYXJnaW4tdG9wOiAxMXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/assessment/medicalconditions/medicalconditions.page.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/assessment/medicalconditions/medicalconditions.page.ts ***!
    \******************************************************************************/

  /*! exports provided: MedicalconditionsPage */

  /***/
  function srcAppPagesAssessmentMedicalconditionsMedicalconditionsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MedicalconditionsPage", function () {
      return MedicalconditionsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var MedicalconditionsPage = /*#__PURE__*/function () {
      function MedicalconditionsPage(navCtrl) {
        _classCallCheck(this, MedicalconditionsPage);

        this.navCtrl = navCtrl;
      }

      _createClass(MedicalconditionsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "save",
        value: function save() {
          this.navCtrl.navigateForward(['/assessment/assessmentbar']);
        }
      }, {
        key: "generateClick",
        value: function generateClick(ev) {
          // ev.click();
          if (ev.checked == true) {
            ev.checked = false;
          } else {
            ev.checked = true;
          }

          console.log(ev.checked);
        }
      }, {
        key: "generateClick2",
        value: function generateClick2(ev, value) {
          ev.value = value;
          console.log(ev);
        }
      }]);

      return MedicalconditionsPage;
    }();

    MedicalconditionsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    MedicalconditionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-medicalconditions',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./medicalconditions.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/medicalconditions/medicalconditions.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./medicalconditions.page.scss */
      "./src/app/pages/assessment/medicalconditions/medicalconditions.page.scss"))["default"]]
    })], MedicalconditionsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-assessment-medicalconditions-medicalconditions-module-es5.js.map