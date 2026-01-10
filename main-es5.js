function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
      "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-mx": "./node_modules/moment/locale/es-mx.js",
      "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Shared/SocialLogins/socail-logins/socail-logins.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Shared/SocialLogins/socail-logins/socail-logins.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedSocialLoginsSocailLoginsSocailLoginsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ul class=\"mb-0\">\n  <li>\n    <a routerLink=\".\" (click)=\"signInWithFB()\">\n      <img src=\"./../../../../assets/img/revamp/facebook-logo.png\" alt=\"\">\n    </a>\n  </li>\n  <li>\n    <a routerLink=\".\" (click)=\"signInWithGoogle()\">\n      <img src=\"./../../../../assets/img/revamp/google-logo.png\" alt=\"\">\n    </a>\n  </li>\n  <li>\n    <a routerLink=\".\">\n      <img src=\"./../../../../assets/img/revamp/apple-logo.png\" alt=\"\">\n    </a>\n  </li>\n</ul>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/addpromo/addpromo.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addpromo/addpromo.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddpromoAddpromoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"content\">\n\n    <!-- Default box -->\n    <div class=\"box\">\n        <div class=\"box-header with-border\">\n            <h3 class=\"box-title\">Add Promo</h3>\n\n            <div class=\"box-tools pull-right\">\n                <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\" data-toggle=\"tooltip\"\n                    title=\"Collapse\">\n                    <i class=\"fa fa-minus\"></i>\n                </button>\n                <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"remove\" data-toggle=\"tooltip\"\n                    title=\"Remove\">\n                    <i class=\"fa fa-times\"></i>\n                </button>\n            </div>\n        </div>\n        <div class=\"box-body\">\n\n\n            <section class=\"content\">\n                <div class=\"row\">\n\n                    <form [formGroup]=\"aFormGroup\" >\n\n                        <div class=\"box box-primary\">\n                            <div class=\"col-md-6\">\n\n\n                                <div class=\"box-body\">\n\n                                    <div class=\"form-group\">\n                                        <label for=\"promocode\">Promo</label>\n                                        <input type=\"text\" formControlName=\"PromoCode\" name=\"PromoCode\" class=\"form-control\" id=\"name\" placeholder=\"Promo\" [(ngModel)]=\"promo.PromoCode\" required>\n                                        <span *ngIf=\"aFormGroup.controls['PromoCode'].errors?.required && showFormError\"><i class=\"fas fa-times text-danger\"></i> Promo is required </span>\n                                        <span *ngIf=\"aFormGroup.controls['PromoCode'].errors?.minlength && showFormError\" >\n                                                <i class=\"fas fa-times text-danger\"></i>\n                                                Minimum length must be 4 characters\n                                        </span>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label for=\"discountpercentage\">Discount Percentage</label>\n                                        <input type=\"number\" name=\"Discount\" formControlName=\"DiscountPercentage\" class=\"form-control\" id=\"address\" [(ngModel)]=\"promo.DiscountPercentage\"\n                                            placeholder=\"Discount Percentage\" required>\n                                            <span *ngIf=\"!aFormGroup.controls['DiscountPercentage'].valid && showFormError\"><i class=\"fas fa-times text-danger\"></i> Discount is required </span>\n                                            \n                                    </div>\n\n                                </div>\n                                <!-- /.box-body -->\n\n\n\n\n\n                            </div>\n                            <div class=\"col-md-6\">\n\n\n\n                                <div class=\"box-body\">\n                                    <div class=\"form-group\">\n                                        <label for=\"startdate\">Start Date</label>\n                                        <input (change)=\"startSelected($event)\" onkeydown=\"return false\" type=\"date\" name=\"StartDate\" min=\"{{ minDateStart }}\" formControlName=\"StartDate\" class=\"form-control\" id=\"startdate\" [(ngModel)]=\"promo.StartDate\" placeholder=\"Start Date\"\n                                            required>\n                                            <span *ngIf=\"!aFormGroup.controls['StartDate'].valid && showFormError\"><i class=\"fas fa-times text-danger\"></i> Start Date is required </span>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label for=\"expdate\">Expiry Date</label>\n                                        <input type=\"date\" name=\"EndDate\" onkeydown=\"return false\" [attr.disabled]=\"!isStartDateSelected\" min=\"{{ minDateEnd }}\" formControlName=\"EndDate\" class=\"form-control\" id=\"expdate\" placeholder=\"Expiry Date\" [(ngModel)]=\"promo.EndDate\"\n                                        (blur)=\"compareTwoDates()\"\n                                            required>\n                                            <br/>\n                                            <span *ngIf=\"!aFormGroup.controls['EndDate'].valid && showFormError\"><i class=\"fas fa-times text-danger\"></i> End Date is required </span>\n                                            <span *ngIf=\"aFormGroup.errors && showFormError\">{{ aFormGroup.errors?.dates}}</span> \n                                    </div>\n\n\n                                </div>\n                                <!-- /.box-body -->\n\n\n\n\n\n                            </div>\n                            <div class=\"box-footer\">\n                                <button  id=\"btnsubmit\" (click)=\"AddPromo()\" class=\"btn btn-primary\">Add Promo</button>\n                            </div>\n                        </div>\n                    </form>\n\n                    <!--/.col (right) -->\n                </div>\n                <!-- /.row -->\n                <h3>Tips:</h3>\n                <ul>\n                    <li>\n                        PROMO code will expire automatically on expiry date.\n                    </li>\n                    <li>\n                        You will get a PROMO key once you have created.\n                    </li>\n                    <li>\n                        Use PROMO key during Trip Post to apply PROMO on your trip.\n                    </li>\n                    <li>\n                        You can use a PROMO key on multiple trips.\n                    </li>\n                </ul>\n\n            </section>\n\n\n\n        </div>\n        <!-- /.box-body -->\n        <div class=\"box-footer\">\n            <p>\n            </p>\n\n        </div>\n        <!-- /.box-footer-->\n    </div>\n    <!-- /.box -->\n\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"autth.isLoggedIn\">\n  <div class=\"main-container\">\n    <!-- left side menu -->\n    <nav class=\"main-menu\">\n      <div class=\"d-flex\">\n        <a class=\"navbar-brand sidebar-logo m-3\" routerLink=\"/dashboard\">\n          <i class=\"fa fa-map-marker\"></i>\n        </a>\n        <a class=\"navbar-brand m-3\" routerLink=\"/dashboard\">\n          <img src=\"../assets/img/revamp/logo-header.svg\" alt=\"\">\n        </a>\n      </div>\n      <ul>\n        <li>\n          <a routerLink=\"/dashboard\">\n            <i class=\"fa fa-home fa-custom\" aria-hidden=\"true\"></i>\n            <span class=\"nav-text\">{{ 'HOME' | translate }}</span>\n          </a>\n        </li>\n        <li>\n          <a routerLink=\"/post\">\n            <i class=\"fa fa-custom fa-location-arrow\" aria-hidden=\"true\"></i>\n            <span class=\"nav-text\">{{ 'POST_TRIP' | translate }}</span>\n          </a>\n        </li>\n        <li>\n          <a routerLink=\"/bookings\">\n            <i class=\"fa fa-custom fa-check-circle\" aria-hidden=\"true\"></i>\n            <span class=\"nav-text\">{{ 'MY_BOOKINGS' | translate }}</span>\n          </a>\n        </li>\n        <li>\n          <a routerLink=\"/invoices\">\n            <i class=\"fa fa-custom fa-file-text-o\" aria-hidden=\"true\"></i>\n            <span class=\"nav-text\">My Invoices</span>\n          </a>\n        </li>\n        <li>\n          <a routerLink=\"/mytrips\">\n            <i class=\"fa fa-custom fa-bus\" aria-hidden=\"true\"></i>\n            <span class=\"nav-text\">{{ 'MY_TRIPS' | translate }}</span>\n          </a>\n        </li>\n        <li>\n          <a routerLink=\"/boostpkg\">\n            <i class=\"fa fa-custom fa-plane\" aria-hidden=\"true\"></i>\n            <span class=\"nav-text\">{{ 'BOOST_PACKAGES' | translate }}</span>\n          </a>\n        </li>\n        <li>\n          <a routerLink=\"/promo\">\n            <i class=\"fa fa-custom fa-arrow-right\" aria-hidden=\"true\"></i>\n            <span class=\"nav-text\">{{ 'PROMO' | translate }}</span>\n          </a>\n        </li>\n        <li>\n          <a routerLink=\"/draft\">\n            <i class=\"fa  fa-custom fa-info-circle\" aria-hidden=\"true\"></i>\n            <span class=\"nav-text\">{{ 'DRAFTS' | translate }}</span>\n          </a>\n        </li>\n        <li>\n          <a routerLink=\"/complain\">\n            <i class=\"fa-custom fa fa-minus-square\" aria-hidden=\"true\"></i>\n            <span class=\"nav-text\">{{ 'COMPLAINTS' | translate }}</span>\n          </a>\n        </li>\n        <li>\n          <a routerLink=\"/custom-tour-requests\">\n            <i class=\"fa fa-custom fa-paper-plane\" aria-hidden=\"true\"></i>\n            <span class=\"nav-text\">Custom Tour Requests</span>\n          </a>\n        </li>\n        <li>\n          <a (click)=\"logout()\" style=\"cursor: pointer;\">\n            <i class=\"fa fa-custom text-danger fa-sign-out\" aria-hidden=\"true\"></i>\n            <span class=\"nav-text\">{{ 'LOG_OUT' | translate }}</span>\n          </a>\n        </li>\n      </ul>\n    </nav>\n    <!-- left side menu -->\n    <div class=\"body-for-the-app\">\n      <!-- header  -->\n      <nav class=\"navbar navbar-expand-lg navbar-light bg-light navbar-light-custom justify-content-between\">\n        <a class=\"navbar-brand navbar-brand-custom mr-0\">\n          <li class=\"nav-item dropdown \">\n            <a class=\"nav-link dropdown-toggle pr-0\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\n              aria-haspopup=\"true\" aria-expanded=\"false\">\n              {{ 'TRENDING_DESTINATIONS' | translate }} <i class=\"fa \" aria-hidden=\"true\"></i>\n            </a>\n          </li>\n        </a>\n        <ul class=\"d-flex top-bar-item\">\n          <ng-template ngFor let-item [ngForOf]=\"tripVisitPlaces\" let-i=\"index\">\n            <div *ngIf=\" i < 9\">\n              <li>{{item.PartialVisitPlace}}</li>\n              <div class=\"divider\"></div>\n            </div>\n          </ng-template>\n        </ul>\n        <div class=\"d-flex\" style=\"gap: 10px;\">\n          <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <li class=\"nav-item dropdown btn-group mx-auto top-head-dropdown\">\n              <a class=\"nav-link dropdown-toggle notification\" style=\"margin-right: 5px;\" href=\"#\" id=\"navbarDropdownLang\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"fa fa-globe\" aria-hidden=\"true\"></i>\n              </a>\n              <div class=\"dropdown-menu dropdown-menu-custom dropdown-menu-right\" aria-labelledby=\"navbarDropdownLang\">\n                <a class=\"dropdown-item\" (click)=\"switchLang('en')\">English</a>\n                <a class=\"dropdown-item\" (click)=\"switchLang('ar')\">Arabic</a>\n              </div>\n            </li>\n            <li class=\"nav-item dropdown btn-group  mx-auto top-head-dropdown\">\n              <a class=\"nav-link dropdown-toggle notification \" href=\"#\" id=\"navbarDropdown\" role=\"button\"\n                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"fa fa-bell-o\" aria-hidden=\"true\"></i>\n                <span class=\"badge pulse-button \">{{counter}}</span>\n              </a>\n              <div class=\"dropdown-menu dropdown-menu-custom dropdown-menu-right\" aria-labelledby=\"navbarDropdown\">\n                <div class=\"notification-header-area\">\n                  <span>Notification</span>\n                  <span class=\"count\">\n                    {{counter}} New\n                  </span>\n                </div>\n                <div class=\"notification-list-area\">\n                  <div class=\"notification-item d-flex gap-1\" *ngFor=\"let item of notiList\">\n                    <span>\n                      <i class=\"fa fa-bell-o\" aria-hidden=\"true\"></i>\n                    </span>\n                    <div class=\"notification-item-content\">\n                      <span class=\"title\">\n                        Booking\n                      </span><br>\n                      <span class=\"notification-content-inner\">\n                        {{item.Title}}\n                      </span>\n                      <div class=\"d-flex justify-content-between align-items-center mt-1\">\n                        <span class=\"time\">30 minutes Ago</span>\n                        <span class=\"read-status\">\n                          Mark as Read\n                        </span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"notification-bar-footer\">\n                  <div class=\"d-flex justify-content-end align-items-center\">\n                    <span (click)=\"delallNotification()\" class=\"view-all\">Clear All</span>\n                  </div>\n                </div>\n              </div>\n            </li>\n          </div>\n          <div class=\"media profile dropdown\">\n            <img src=\"{{domainUrl}}/{{user.ProfileImage}}\" onerror=\"src='./assets/img/avatar5.png';\" class=\"mr-3\"\n              alt=\"Sample Image\" style=\"border-radius: 10px;\">\n            <div class=\"media-body\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\">\n              <span class=\"mr-1\">{{user.Name}}\n                <br>\n                <span *ngIf=\"user && user.IsLicenceVarified\" class=\"verified d-block w-100\">Verified</span>\n              </span>\n              <p *ngIf=\"user\" class=\"\">\n                <i class=\"fa fa-chevron-down ml-1\" aria-hidden=\"true\" style=\"padding: 11px 10px;\n          border-radius: 9px;\n          background-color: #e3e9e9;\"></i>\n              </p>\n            </div>\n            <div class=\"dropdown-menu profile-dropdown\" aria-labelledby=\"dropdownMenuButton\">\n              <ul class=\"p-0\">\n                <li><a routerLink=\"profile\"> <i class=\"fa fa-user mr-1\"></i> My Profile</a></li>\n                <li><a routerLink=\"profile\"> <i class=\"fa fa-cog mr-1\"></i> Settings</a></li>\n                <li><a (click)=\"logout()\"> <i class=\"fa fa-sign-out mr-1\"></i> Logout</a></li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </nav>\n      <!-- page content -->\n      <div class=\"maincontant\" style=\"min-height: 380px;\">\n        <router-outlet></router-outlet>\n      </div>\n      <!-- page content -->\n    </div>\n    <script>\n      $(document).ready(function () {\n        $('.sidebar-menu').tree()\n      })\n    </script>\n  </div>\n</ng-container>\n\n<ng-container *ngIf=\"!autth.isLoggedIn\">\n  <router-outlet></router-outlet>\n</ng-container>\n\n<div id=\"spinnerLoaderXhr\"\n  style=\"margin: 0px; padding: 0px; position: fixed; right: 0px; top: 0px; width: 100%; height: 100%; background-color: rgb(102, 102, 102); z-index: 30001; opacity: 0.6;display: none;\">\n\n  <p style=\"position: absolute; color: White; top: 50%; left: 45%;\">\n    <img style=\"\" src=\"./assets/img/load.gif\" />\n    <!-- <span>Please wait....</span>  -->\n\n    <!-- Loading, please wait... -->\n  </p>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/aval-packges/aval-packges.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/aval-packges/aval-packges.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAvalPackgesAvalPackgesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"content\">\n\n    <!-- Default box -->\n    <div class=\"box\">\n\n        <div class=\"box-body\">\n\n\n            <section class=\"content\">\n              <ul class=\"nav nav-tabs\" role=\"tablist\">\n\n    <li role=\"presentation\"><a href=\"#profile\" aria-controls=\"profile\" role=\"tab\" data-toggle=\"tab\">{{ 'PACKAGES' | translate }}</a>  </li>\n  </ul>\n  <div role=\"row tabpanel\" class=\"tab-pane active\" id=\"home\">\n\n\n    <ng-container *ngFor=\"let package of availableOperatorPackage\" id=\"card\">\n        <div class=\"card col-sm-12 col-md-4 col-lg-4\" style=\"height: 320px;\">\n        <h2>{{ 'GOLD_OPERATOR' | translate }}</h2>\n          <div class=\"card__body\">\n         <table class=\"sub card__list\" style=\"margin-top: 20px;\">\n            <tr>\n                <td>{{ 'PACKAGE_NAME' | translate }}</td>\n                <td>{{package.Name}}</td>\n            </tr>\n            <tr>\n                <td>{{ 'POST_TRIP_LIMIT_PER_DAY' | translate }}</td>\n                <td>{{package.LimitaionTrips}}</td>\n            </tr>\n            <tr>\n                <td>{{ 'PRICE' | translate }}</td>\n                <td>{{package.Price | number}}</td>\n            </tr>\n        </table>\n          </div>\n        <div *ngIf=\"package?.Details\" style=\"margin-top: 20px;\">\n            <tr><strong>{{ 'DETAILS' | translate }}</strong></tr>\n            <tr><p style=\"font-size: 14px;\">{{package?.Details}}.</p></tr>\n        </div>\n        <div *ngIf=\"!package?.Details\" style=\"margin-top: 20px;\">\n            <tr><strong>{{ 'DETAILS' | translate }}</strong></tr>\n            <tr><p style=\"font-size: 14px;\">{{ 'DEFAULT_FREE_PACKAGE' | translate }}</p></tr>\n        </div>\n\n        <button class=\"btn btn-primary\" style=\"margin-top: 5px;\"><a routerLink=\"/pkginvoice/{{package.Id}}\" style=\"color: aliceblue;\">{{ 'SUBSCRIBE' | translate }}</a></button>\n\n    </div>\n    </ng-container>\n\n\n\n</div>\n\n\n\n\n\n                <!-- /.row -->\n            </section>\n\n\n\n        </div>\n        <!-- /.box-body -->\n        <div class=\"box-footer\">\n            <p>\n            </p>\n\n        </div>\n        <!-- /.box-footer-->\n    </div>\n    <!-- /.box -->\n\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/bookingdetails/bookingdetails.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookingdetails/bookingdetails.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookingdetailsBookingdetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container d-flex justify-content-center align-items-center\"\n  style=\"min-height: 100vh; background: transparent;\">\n  <div class=\"bookingdetailscard w-100\"\n    style=\"margin: 0 auto; background: transparent; border-radius: 24px; box-shadow: 0 8px 32px rgba(0,169,145,0.10);\">\n    <div class=\"row\">\n      <ng-container *ngIf=\"bookingDetail\">\n        <div class=\"col-md-12 mb-4\" *ngFor=\"let bookingDetails of bookingDetail\">\n          <div class=\"card\"\n            style=\"border: 1.5px solid #00A991; border-radius: 18px; box-shadow: 0 2px 8px rgba(0,169,145,0.06);\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\" style=\"color: #00A991; font-weight: 700;\">{{tripTitle}}</h5>\n              <div class=\"mt-3 d-flex justify-content-between\">\n                <div>\n                  <h6 class=\"bt-text\" style=\"color: #00A991;\">{{ 'BOOKING_NUMBER' | translate }}</h6>\n                </div>\n                <div>\n                  <h6>{{bookingDetails.Id}}</h6>\n                </div>\n              </div>\n              <div class=\"mt-3 d-flex justify-content-between\">\n                <div>\n                  <h6 class=\"bt-text\" style=\"color: #00A991;\">{{ 'NUMBER_OF_ADULTS' | translate }}</h6>\n                </div>\n                <div>\n                  <h6>{{bookingDetails.NoPersons}}</h6>\n                </div>\n              </div>\n              <div class=\"mt-3 d-flex justify-content-between\">\n                <div>\n                  <h6 class=\"bt-text\" style=\"color: #00A991;\">{{ 'NUMBER_OF_CHILDREN' | translate }}</h6>\n                </div>\n                <div>\n                  <h6>{{bookingDetails.Childrens}}</h6>\n                </div>\n              </div>\n              <div class=\"mt-3 d-flex justify-content-between\">\n                <div>\n                  <h6 class=\"bt-text\" style=\"color: #00A991;\">{{ 'TOTAL_AMOUNT' | translate }}</h6>\n                </div>\n                <div>\n                  <h6>{{bookingDetails.TotalPrice | number}}</h6>\n                </div>\n              </div>\n              <div class=\"mt-3 d-flex justify-content-between\">\n                <div>\n                  <h6 class=\"bt-text\" style=\"color: #00A991;\">{{ 'BOOKING_DATE' | translate }}</h6>\n                </div>\n                <div>\n                  <h6>{{bookingDetails.CreatedDate | date:'dd-MMM-yyyy'}}</h6>\n                </div>\n              </div>\n              <div class=\"mt-3 d-flex justify-content-between\">\n                <div>\n                  <h6 class=\"bt-text\" style=\"color: #00A991;\">{{ 'NAME' | translate }}</h6>\n                </div>\n                <div>\n                  <h6>{{bookingDetails.Name}}</h6>\n                </div>\n              </div>\n              <div class=\"mt-3 d-flex justify-content-between\">\n                <div>\n                  <h6 class=\"bt-text\" style=\"color: #00A991;\">{{ 'CONTACT_NUMBER' | translate }}</h6>\n                </div>\n                <div>\n                  <h6>{{bookingDetails.PhoneNumber}}</h6>\n                </div>\n              </div>\n              <div class=\"mt-3 d-flex justify-content-between\">\n                <div>\n                  <h6 class=\"bt-text\" style=\"color: #00A991;\">{{ 'EMAIL' | translate }}</h6>\n                </div>\n                <div>\n                  <h6>{{bookingDetails.Email}}</h6>\n                </div>\n              </div>\n              <div class=\"mt-3 d-flex justify-content-between\">\n                <div>\n                  <h6 class=\"bt-text\" style=\"color: #00A991;\">{{ 'EMERGENCY_CONTACT' | translate }}</h6>\n                </div>\n                <div>\n                  <h6>{{bookingDetails.EmergencyContact}}</h6>\n                </div>\n              </div>\n              <div class=\"mt-3 d-flex justify-content-between\">\n                <div>\n                  <h6 class=\"bt-text\" style=\"color: #00A991;\">{{ 'BOOKING_STATUS' | translate }}</h6>\n                </div>\n                <div>\n                  <h6>{{getBookingStatus(bookingDetails)}}</h6>\n                </div>\n              </div>\n              <div class=\"mt-3 d-flex justify-content-between\">\n                <div>\n                  <h6 class=\"bt-text\" style=\"color: #00A991;\">{{ 'PAYMENT_STATUS' | translate }}</h6>\n                </div>\n                <div>\n                  <h6>{{bookingDetails.PaymentStatus}}</h6>\n                </div>\n              </div>\n              <div class=\"card-title mt-5 text-center\"><button data-toggle=\"modal\" data-target=\"#exampleModal\"\n                  (click)=\"setBooking(bookingDetails.Id)\" class=\"btn payment-btn\"\n                  style=\"background: #00A991; color: #fff; font-weight: 600; border-radius: 8px; min-width: 220px;\">{{ 'UPDATE_PAYMENT_METHOD' | translate }}</button></div>\n            </div>\n          </div>\n        </div>\n      </ng-container>\n      <div class=\"col-12 text-center alert alert-danger\" *ngIf=\"!bookingDetail.length\">\n        {{ 'NO_BOOKINGS_AVAILABLE' | translate }}\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\" style=\"border-radius: 24px; background: #fff; box-shadow: 0 8px 32px rgba(0,0,0,0.12);\">\n      <form [formGroup]=\"postForm\" (ngSubmit)=\"onSubmit(postForm.value)\">\n        <div class=\"modal-header\"\n          style=\"border: none; display: flex; justify-content: center; align-items: center; position: relative;\">\n          <h4 class=\"modal-title w-100 text-center\" style=\"font-weight: bold; color: #222;\">{{ 'PAYMENT_STATUS' |\n            translate }}</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"\n            style=\"position: absolute; right: 24px; top: 16px; background: #F44336; border: none; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;\">\n            <span aria-hidden=\"true\" style=\"color: #fff; font-size: 2rem; line-height: 1;\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body table-responsive-sm\" style=\"padding: 2rem 2rem 1rem 2rem;\">\n          <div\n            style=\"border: 2px solid #00A991; border-radius: 10px; padding: 1.5rem 1rem 1rem 1rem; position: relative;\">\n            <label\n              style=\"position: absolute; top: -18px; left: 18px; background: #fff; color: #00A991; font-weight: 600; padding: 0 8px; font-size: 1.1rem;\">{{ 'UPDATE_PAYMENT_STATUS' |\n              translate }}</label>\n            <select class=\"form-control\" formControlName=\"PaymentStatus\"\n              style=\"border: none; border-bottom: 2px solid #00A991; border-radius: 0; font-size: 1.1rem; margin-top: 16px;\">\n              <option value=\"\" disabled selected>{{ 'SELECT_PAYMENT_STATUS' | translate }}</option>\n              <option value=\"Paid\">{{ 'PAID' | translate }}</option>\n              <option value=\"UnPaid\">{{ 'UNPAID' | translate }}</option>\n              <option value=\"Refund\">{{ 'REFUND' | translate }}</option>\n              <option value=\"Hold\">{{ 'HOLD' | translate }}</option>\n            </select>\n            <div *ngIf=\"postForm.get('PaymentStatus').touched && postForm.get('PaymentStatus').hasError('required')\"\n              class=\"invalid-feedback\">\n              <div *ngIf=\"postForm.get('PaymentStatus').hasError('required')\" style=\"color: red;\">{{ 'PAYMENT_STATUS_REQUIRED'\n                | translate }}</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\"\n          style=\"border: none; display: flex; justify-content: center; background: transparent;\">\n          <button type=\"submit\" [disabled]=\"!postForm.valid\" class=\"btn\"\n            style=\"background: #00A991; color: #fff; font-weight: 600; font-size: 1.2rem; border-radius: 8px; min-width: 280px; padding: 12px 0; box-shadow: 0 2px 8px rgba(0,169,145,0.08);\">{{ 'UPDATE_PAYMENT_STATUS'\n            | translate }}</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<br>\n<br>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/bookings.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/bookings.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookingsBookingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"page-content-wrapper\">\n  <div class=\"row\">\n    <div class=\"col-md-12 d-flex justify-content-between align-items-center\">\n      <h4>{{'MY_BOOKINGS' | translate}}</h4>\n      <ul class=\"nav nav-pills\" role=\"tablist\">\n        <li class=\"nav-item\">\n          <a class=\"jero-btn jero-btn-primary-outlined active\" (click)=\"changeTab('scheduled')\" data-toggle=\"pill\"\n            href=\"#home\">{{'CURRENT_BOOKINGS' | translate}}</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"jero-btn jero-btn-primary-outlined\" (click)=\"changeTab('historical')\" data-toggle=\"pill\"\n            href=\"#menu1\">{{'HISTORICAL_BOOKINGS' | translate}}</a>\n        </li>\n      </ul>\n      <div class=\"tripjero-floating w-25\">\n        <input type=\"text\" class=\"form-control\" id=\"searchInput\" placeholder=\"{{'SEARCH' | translate}}\" (keyup)=\"filterBookings($event)\">\n        <label style=\"background: #F3F5EA;\" for=\"searchInput\" class=\"float-label\">{{'SEARCH' | translate}}</label>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"py-4\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-12\">\n            <div class=\"p-3\" style=\"background: #ffff; border-radius: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);\">\n              <div class=\"tab-content mb-5\">\n                <div id=\"home\" class=\"tab-pane active\"><br>\n                  <div class=\"row mt-3\">\n                    <div *ngFor=\"let item of scheduleBookings\" class=\"col-md-3 mb-3\">\n                      <div class=\"trip-card\">\n                        <a routerLink=\"/details/current/{{item.TripBasicInfo.Id}}\" class=\"\">\n                          <img src=\"{{item.TripBasicInfo.FeaturesImage ? domainUrl + '/' + item.TripBasicInfo.FeaturesImage : default_img}}\">\n                        </a>\n                        <div class=\"card-content\">\n                          <h3 class=\"card-title\">{{item.TripBasicInfo.Title}}</h3>\n                          <div class=\"card-info\">\n                            <span class=\"info-item\">\n                              <i class=\"fa fa-calendar\" style=\"color: rgba(0, 169, 145, 1);\"></i>\n                              <span>{{item.TripBasicInfo.StartDateTime | date:'dd-MMM-yyyy'}}</span>\n                            </span>\n                            <span class=\"info-item\">\n                              <i class=\"fa fa-calendar\" style=\"color: rgba(255, 174, 6, 1)\"></i>\n                              <span>{{item.TripBasicInfo.EndDateTime | date:'dd-MMM-yyyy'}}</span>\n                            </span>\n                            <span class=\"info-item\">\n                                <i class=\"fa fa-map-marker\" style=\"color: rgba(220, 16, 16, 1)\"></i>\n                                <span>{{item.TripBasicInfo.FromPlaceName}}</span>\n                            </span>\n                          </div>\n                          <div class=\"card-price\">\n                              <span class=\"price-text\">\n                                  {{ item.Bookings.length }} Bookings\n                              </span>\n                          </div>\n                          <button class=\"btn btn-primary mt-2\"\n                            routerLink=\"/details/current/{{item.TripBasicInfo.Id}}\">{{'DETAILS' | translate}}</button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div id=\"menu1\" class=\"tab-pane fade\">\n                  <div class=\"row mt-3\">\n                    <div *ngFor=\"let item of historicalBookings\" class=\"col-md-3 mb-3\">\n                        <div class=\"trip-card\">\n                            <a routerLink=\"/details/historical/{{item.TripBasicInfo.Id}}\" class=\"\">\n                                <img src=\"{{item.TripBasicInfo.FeaturesImage ? domainUrl + '/' + item.TripBasicInfo.FeaturesImage : default_img}}\">\n                            </a>\n                            <div class=\"card-content\">\n                                <h3 class=\"card-title\">{{item.TripBasicInfo.Title}}</h3>\n                                <div class=\"card-info\">\n                                    <span class=\"info-item\">\n                                        <i class=\"fa fa-calendar\" style=\"color: rgba(0, 169, 145, 1);\"></i>\n                                        <span>{{item.TripBasicInfo.StartDateTime | date:'dd-MMM-yyyy'}}</span>\n                                    </span>\n                                    <span class=\"info-item\">\n                                        <i class=\"fa fa-calendar\" style=\"color: rgba(255, 174, 6, 1)\"></i>\n                                        <span>{{item.TripBasicInfo.EndDateTime | date:'dd-MMM-yyyy'}}</span>\n                                    </span>\n                                    <span class=\"info-item\">\n                                        <i class=\"fa fa-map-marker\" style=\"color: rgba(220, 16, 16, 1)\"></i>\n                                        <span>{{item.TripBasicInfo.ToPlaceName}}</span>\n                                    </span>\n                                </div>\n                                <div class=\"card-price\">\n                                    <span class=\"price-text\">\n                                        {{ item.Bookings.length }} Bookings\n                                    </span>\n                                </div>\n                                <button class=\"btn btn-primary mt-2\"\n                                  routerLink=\"/details/historical/{{item.TripBasicInfo.Id}}\">{{'DETAILS' | translate}}</button>\n                            </div>\n                        </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/boost-pkg/boost-pkg.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/boost-pkg/boost-pkg.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBoostPkgBoostPkgComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"page-content-wrapper\">\n  <div class=\"row\">\n    <div class=\"col-md-12 d-flex justify-content-between align-items-center\">\n      <h4>{{ 'BOOST_PACKAGES' | translate }}</h4>\n      <ul class=\"nav nav-pills\" role=\"tablist\">\n        <li class=\"nav-item\">\n          <a class=\"jero-btn jero-btn-primary-outlined active\" data-toggle=\"pill\" href=\"#home\">{{ 'MY_BOOST' | translate\n            }}</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"jero-btn jero-btn-primary-outlined\" data-toggle=\"pill\" href=\"#menu1\">{{ 'BUY_BOOST' | translate\n            }}</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"row\" style=\"background: white; border-radius: 10px; padding: 20px; margin-top: 20px;\">\n        <div class=\"col-md-12 tab-content\">\n          <div class=\"row tab-pane active\" id=\"home\">\n            <div class=\"col-md-7\" *ngFor=\"let item of BoostPackagesUser\">\n              <div class=\"package-booster row\"\n                style=\"background: url('../../assets/img/revamp/boost.png'); border-radius: 10px; background-size: cover; background-position: center; background-repeat: no-repeat;\">\n                <div class=\"col-md-5 pr-3\">\n                  <h5>{{item.Title}}</h5>\n                  <ul>\n                    <li>\n                      <span class=\"tara\">{{ 'PAYMENT_STATUS' | translate }}</span>\n                      <span *ngIf=\"item.IS_Payment; else unpaid\">{{ 'PAID' | translate }}</span>\n                      <ng-template #unpaid>\n                        <span>{{ 'UNPAID' | translate }}</span>\n                      </ng-template>\n                    </li>\n                    <li>\n                      <span class=\"tara\">{{ 'TOTAL_BOOST' | translate }}</span>\n                      <span>{{item.TotalBoostTrips}}</span>\n                    </li>\n                    <li>\n                      <span class=\"tara\">{{ 'REMAINING_BOOST' | translate }}</span>\n                      <span> {{item.RemningBoostTrips}}</span>\n                    </li>\n                    <li>\n                      <span class=\"tara\">{{ 'BOOST_ID' | translate }}</span>\n                      <span> {{item.BoostCode}}</span>\n                    </li>\n                  </ul>\n                  <button class=\"jero-btn jero-btn-primary\">\n                    {{ 'BOOST_PACKAGE' | translate }} <i class=\"fa fa-arrow-right\"></i>\n                  </button>\n                </div>\n                <div class=\"col-md-6\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row tab-pane fade\" id=\"menu1\">\n            <div class=\"col-md-7\" *ngFor=\"let item of availableBoostPackage\">\n              <div class=\"package-booster row\"\n                style=\"background: url('../../assets/img/revamp/boost.png'); border-radius: 10px; background-size: cover; background-position: center; background-repeat: no-repeat;\">\n                <div class=\"col-md-5 pr-3\">\n                  <h5>{{item.Title}}</h5>\n                  <ul>\n                    <li>\n                      <span class=\"tara\">{{ 'NUMBER_OF_BOOST' | translate }}</span>\n                      <span>{{item.NoTrips}}</span>\n                    </li>\n                    <li>\n                      <span class=\"tara\">{{ 'PRICE' | translate }}:</span>\n                      <span><img src=\"../../assets/img/revamp/riyal.svg\" style=\"filter: brightness(0) invert(1); width: 11px;\n    margin-top: -2px;\" alt=\"\"> {{item.Price}}</span>\n                    </li>\n                    <li>\n                      <span class=\"tara\">{{ 'DISCOUNT_PERCENT' | translate }}</span>\n                      <span> {{item.Discount}}%</span>\n                    </li>\n                  </ul>\n                  <button class=\"jero-btn jero-btn-primary\" data-toggle=\"modal\" data-target=\"#buyBoostPackage\"\n                    (click)=\"Buy(item)\">\n                    {{ 'BOOST_PACKAGE' | translate }} <i class=\"fa fa-arrow-right\"></i>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div #BuyBoostPackage></div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/buy-boost-package/buy-boost-package.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/buy-boost-package/buy-boost-package.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBuyBoostPackageBuyBoostPackageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal fade boost-package-modal\" id=\"buyBoostPackage\" tabindex=\"-1\" role=\"dialog\"\n  aria-labelledby=\"buyBoostPackage\" aria-hidden=\"true\">\n  <div class=\"modal-dialog boost-modal-dialog\" role=\"document\">\n    <div class=\"modal-content boost-modal-content\">\n      <div class=\"modal-header boost-modal-header\">\n        <h4 class=\"modal-title boost-modal-title\">Update Payment Status</h4>\n        <button type=\"button\" class=\"close boost-modal-close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n      <div class=\"modal-body boost-modal-body\">\n        <div class=\"package-details\">\n          <div class=\"package-info\">\n            <div class=\"info-row\">\n              <span class=\"info-label\">Package Name</span>\n              <span class=\"info-value\">{{subscribedPackage.Title}}</span>\n            </div>\n            <div class=\"info-row\">\n              <span class=\"info-label\">Applicable on</span>\n              <span class=\"info-value\">{{subscribedPackage.RemainingBoostTrips}} trips</span>\n            </div>\n          </div>\n\n          <div class=\"price-details\">\n            <h5 class=\"price-section-title\">Price Details</h5>\n            <div class=\"price-row\">\n              <span class=\"price-label\">Price(<img src=\"../../assets/img/revamp/riyal.svg\" style=\"width: 14px;\n  margin-top: -3px;\" alt=\"\">)</span>\n              <span class=\"price-value\">{{subscribedPackage.Price | number}} </span>\n            </div>\n            <div class=\"price-row discount-row\">\n              <span class=\"price-label\">Discount Percentage</span>\n              <span class=\"price-value discount-value\">{{subscribedPackage.Discount}}%</span>\n            </div>\n            <div class=\"price-row discount-row\">\n              <span class=\"price-label\">Discount Price(<img src=\"../../assets/img/revamp/riyal.svg\" style=\"width: 14px;\n  margin-top: -3px;\" alt=\"\">)</span>\n              <span class=\"price-value discount-amount\"> -{{subscribedPackage.DiscountPrice}} </span>\n            </div>\n            <div class=\"price-row total-row\">\n              <span class=\"price-label total-label\">Offer Price</span>\n              <span class=\"price-value total-value\"><img src=\"../../assets/img/revamp/riyal.svg\" style=\"filter: brightness(0) invert(1); width: 16px;\n    margin-top: -2px;\" alt=\"\"> {{total}}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer boost-modal-footer\">\n        <button type=\"button\" class=\"btn boost-btn-cancel\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn boost-btn-primary\" (click)=\"BuyPackage()\">Buy Package</button>\n      </div>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/calender/calender.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calender/calender.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCalenderCalenderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>calender works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/complaint/complaint.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/complaint/complaint.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComplaintComplaintComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"page-content-wrapper\">\n  <div class=\"row\">\n    <div class=\"col-md-12 d-flex justify-content-between align-items-center mb-2\">\n      <h4>\n        {{ 'COMPLAINT' | translate }}\n      </h4>\n      <div class=\"d-flex align-items-center\" style=\"gap: 20px;\">\n        <div class=\"tripjero-floating m-0\">\n          <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"{{ 'SEARCH' | translate }}\"\n            (keyup)=\"searchTrips($event)\" aria-describedby=\"emailHelp\">\n          <label for=\"searchInput\" class=\"float-label\">{{ 'SEARCH' | translate }}</label>\n        </div>\n        <button class=\"jero-btn jero-btn-primary h-fit\" style=\"white-space: nowrap;\" data-toggle=\"modal\"\n          data-target=\"#modal-complaintAdd\">\n          {{ 'ADD_COMPLAINT' | translate }}\n        </button>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"row\" style=\"border-radius: 16px;\n      border: 1.333px solid  #DBDDDF;\n      background:  #FFF;\n      padding: 15px;\">\n        <div class=\"col-md-12\">\n          <table class=\"table complaint-table\">\n            <thead>\n              <tr class=\"complaint-header\">\n                <th>{{ 'SR_NO' | translate }}</th>\n                <th>{{ 'TICKET_ID' | translate }}</th>\n                <th>{{ 'SUBJECT' | translate }}</th>\n                <th>{{ 'DATE' | translate }}</th>\n                <th>{{ 'STATUS' | translate }}</th>\n                <th>{{ 'ACTION' | translate }}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of ComplainModalList;let i = index\" class=\"complaint-row\"\n                title=\"{{item.ComplaintDetails}}\">\n                <td>{{i+1 | number:'2.0'}}</td>\n                <td>{{item.ComplaintId}}</td>\n                <td>{{item.ComplaintSubject}}</td>\n                <td>{{item.CreatedDate | date:'dd-MMM-yyyy'}}</td>\n                <td>\n                  <span *ngIf=\"item.ResolvedStatus\" class=\"status-badge status-resolved\">{{ 'RESOLVED' | translate }}</span>\n                  <span *ngIf=\"!item.ResolvedStatus\" class=\"status-badge status-received\">{{ 'RECEIVED' | translate }}</span>\n                </td>\n                <td>\n                  <button type=\"button\" class=\"jero-btn jero-btn-primary-outlined\" data-toggle=\"modal\"\n                    (click)=\"loadDetail(i)\" data-target=\"#modal-complaintView\">\n                    <i class=\"fa fa-eye mr-1\"></i> {{ 'VIEW' | translate }}\n                  </button>\n                </td>\n              </tr>\n              <tr *ngIf=\"ComplainModalList.length ==0\">\n                <td align=\"center\" colspan=\"8\" style=\"color: red;\">{{ 'NO_COMPLAINT_FOUND' | translate }}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Complaint View Modal -->\n<div class=\"modal fade\" id=\"modal-complaintView\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content modern-modal\">\n      <div class=\"modal-header modern-header\">\n        <h4 class=\"modal-title\">\n          <i class=\"fas fa-eye text-primary me-2\"></i>\n          {{ 'VIEW_COMPLAINT' | translate }}\n        </h4>\n        <button type=\"button\" class=\"btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <i class=\"fas fa-times\"></i>\n        </button>\n      </div>\n\n      <div class=\"modal-body modern-body\">\n        <div class=\"complaint-details\">\n          <div class=\"detail-row\">\n            <div class=\"detail-label\">\n              <i class=\"fas fa-tag text-primary\"></i>\n              <span>{{ 'SUBJECT' | translate }}</span>\n            </div>\n            <div class=\"detail-value\">{{complainDetail.ComplaintSubject}}</div>\n          </div>\n\n          <div class=\"detail-row\">\n            <div class=\"detail-label\">\n              <i class=\"fas fa-ticket-alt text-primary\"></i>\n              <span>{{ 'TICKET_ID' | translate }}</span>\n            </div>\n            <div class=\"detail-value ticket-id\">{{complainDetail.ComplaintId}}</div>\n          </div>\n\n          <div class=\"detail-row\">\n            <div class=\"detail-label\">\n              <i class=\"fas fa-calendar-alt text-primary\"></i>\n              <span>{{ 'DATE' | translate }}</span>\n            </div>\n            <div class=\"detail-value\">{{complainDetail.CreatedDate | date:'dd-MMM-yyyy'}}</div>\n          </div>\n\n          <div class=\"detail-row full-width\">\n            <div class=\"detail-label\">\n              <i class=\"fas fa-file-alt text-primary\"></i>\n              <span>{{ 'DETAILS' | translate }}</span>\n            </div>\n            <div class=\"detail-content\">\n              <p>{{complainDetail.ComplaintDetails}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"modal-footer modern-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\n          <i class=\"fas fa-times me-2\"></i>{{ 'CLOSE' | translate }}\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Complaint Add Modal -->\n<div class=\"modal fade\" id=\"modal-complaintAdd\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content modern-modal\">\n      <div class=\"modal-header modern-header\">\n        <h4 class=\"modal-title\">\n          <i class=\"fas fa-plus-circle text-primary me-2\"></i>\n          {{ 'NEW_COMPLAINT' | translate }}\n        </h4>\n        <button type=\"button\" class=\"btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <i class=\"fas fa-times\"></i>\n        </button>\n      </div>\n\n      <form [formGroup]=\"postForm\" (ngSubmit)=\"AddComplaint()\">\n        <div class=\"modal-body modern-body\">\n          <div class=\"form-section\">\n            <div class=\"form-group modern-form-group\">\n              <label class=\"form-label\">\n                <i class=\"fas fa-tag text-primary me-2\"></i>\n                {{ 'SUBJECT' | translate }} <span class=\"required\">*</span>\n              </label>\n              <input type=\"text\" formControlName=\"Subject\" class=\"form-control modern-input\"\n                placeholder=\"{{ 'ENTER_COMPLAINT_SUBJECT' | translate }}\">\n              <div *ngIf=\"postForm.get('Subject').touched && f.Subject.errors\" class=\"error-message\">\n                <div *ngIf=\"f.Subject.errors?.required\">\n                  <i class=\"fas fa-exclamation-circle\"></i> {{ 'SUBJECT_REQUIRED' | translate }}\n                </div>\n                <div *ngIf=\"f.Subject.errors?.maxlength\">\n                  <i class=\"fas fa-exclamation-circle\"></i> {{ 'SUBJECT_MAXLENGTH' | translate }}\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group modern-form-group\">\n              <label class=\"form-label\">\n                <i class=\"fas fa-file-alt text-primary me-2\"></i>\n                {{ 'DETAILS' | translate }} <span class=\"required\">*</span>\n              </label>\n              <textarea class=\"form-control modern-textarea\" formControlName=\"ComplaintDetails\" rows=\"5\"\n                placeholder=\"{{ 'DESCRIBE_COMPLAINT' | translate }}\"></textarea>\n              <div *ngIf=\"postForm.get('ComplaintDetails').touched && f.ComplaintDetails.errors?.required\"\n                class=\"error-message\">\n                <div *ngIf=\"f.ComplaintDetails.errors?.required\">\n                  <i class=\"fas fa-exclamation-circle\"></i> {{ 'DETAILS_REQUIRED' | translate }}\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"modal-footer modern-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\n            <i class=\"fas fa-times me-2\"></i>{{ 'CANCEL' | translate }}\n          </button>\n          <button type=\"submit\" [disabled]=\"!postForm.valid\" class=\"btn btn-primary\">\n            <i class=\"fas fa-paper-plane me-2\"></i>{{ 'SUBMIT_COMPLAINT' | translate }}\n          </button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/custom-tour-request-detail/custom-tour-request-detail.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/custom-tour-request-detail/custom-tour-request-detail.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomTourRequestDetailCustomTourRequestDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid custom-detail-container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h4 class=\"detail-header\">\n        Custom Tour Request Details\n        <span\n          class=\"status-badge status-{{\n            customRequestDetail?.TripRequest?.ReqStatus | lowercase\n          }}\"\n          >{{ customRequestDetail?.TripRequest?.ReqStatus }}</span\n        >\n      </h4>\n\n      <div\n        *ngIf=\"customRequestDetail?.TripRequest\"\n        class=\"card custom-detail-card\"\n      >\n        <div class=\"card-body\">\n          <!-- Request Information -->\n          <div class=\"detail-section\">\n            <h6>Request Information</h6>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <p>\n                  <strong>Request ID:</strong>\n                  {{ customRequestDetail.TripRequest.ReferenceId }}\n                </p>\n              </div>\n              <div class=\"col-md-6\">\n                <p>\n                  <strong>Title:</strong>\n                  {{ customRequestDetail.TripRequest.Title }}\n                </p>\n              </div>\n            </div>\n          </div>\n\n          <!-- Contact Information -->\n          <div class=\"detail-section\">\n            <h6>Contact Information</h6>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <p>\n                  <strong>Name:</strong>\n                  {{ customRequestDetail.TripRequest.Name }}\n                </p>\n              </div>\n              <div class=\"col-md-6\">\n                <p>\n                  <strong>Email:</strong>\n                  {{ customRequestDetail.TripRequest.Email }}\n                </p>\n              </div>\n              <div class=\"col-md-6\">\n                <p>\n                  <strong>Phone:</strong>\n                  {{ customRequestDetail.TripRequest.Phone }}\n                </p>\n              </div>\n              <div class=\"col-md-6\">\n                <p>\n                  <strong>Emergency Phone:</strong>\n                  {{ customRequestDetail.TripRequest.EmergencyPhone }}\n                </p>\n              </div>\n            </div>\n          </div>\n\n          <!-- Trip Details -->\n          <div class=\"detail-section\">\n            <h6>Trip Details</h6>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <p>\n                  <strong>From:</strong>\n                  {{ customRequestDetail.TripRequest.FromCountry }} -\n                  {{ customRequestDetail.TripRequest.FromPlace }}\n                </p>\n              </div>\n              <div class=\"col-md-6\">\n                <p>\n                  <strong>To:</strong>\n                  {{ customRequestDetail.TripRequest.ToCountry }} -\n                  {{ customRequestDetail.TripRequest.ToPlace }}\n                </p>\n              </div>\n              <div class=\"col-md-6\">\n                <p>\n                  <strong>Start Date:</strong>\n                  {{ customRequestDetail.TripRequest.StartDate | date }}\n                </p>\n              </div>\n              <div class=\"col-md-6\">\n                <p>\n                  <strong>End Date:</strong>\n                  {{ customRequestDetail.TripRequest.EndDate | date }}\n                </p>\n              </div>\n              <div class=\"col-md-6\">\n                <p>\n                  <strong>Duration:</strong>\n                  {{ customRequestDetail.TripRequest.Duration }} days\n                </p>\n              </div>\n              <div class=\"col-md-6\">\n                <p>\n                  <strong>Number of Guests:</strong>\n                  {{ customRequestDetail.TripRequest.NumberOfGuest }}\n                </p>\n              </div>\n              <div class=\"col-md-6\">\n                <p>\n                  <strong>Preferred Language:</strong>\n                  {{ customRequestDetail.TripRequest.PreferLanguage }}\n                </p>\n              </div>\n              <div class=\"col-md-6\">\n                <p>\n                  <strong>Trip Type:</strong>\n                  {{ customRequestDetail.TripRequest.TripType }}\n                </p>\n              </div>\n              <div class=\"col-md-6\">\n                <p>\n                  <strong>Accommodation Type:</strong>\n                  {{ customRequestDetail.TripRequest.AccomodationType }}\n                </p>\n              </div>\n              <div class=\"col-md-6\">\n                <p>\n                  <strong>Transport Type:</strong>\n                  {{ customRequestDetail.TripRequest.TransportType }}\n                </p>\n              </div>\n              <div class=\"col-md-12\">\n                <p>\n                  <strong>Activities:</strong>\n                  {{ customRequestDetail.TripRequest.Activities }}\n                </p>\n              </div>\n              <div class=\"col-md-12\">\n                <p>\n                  <strong>Note:</strong>\n                  {{ customRequestDetail.TripRequest.Note }}\n                </p>\n              </div>\n            </div>\n          </div>\n\n          <!-- Budget & Other Info -->\n          <div class=\"detail-section\">\n            <h6>Budget & Other Information</h6>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <p>\n                  <strong>Min Budget:</strong>\n                  {{ customRequestDetail.TripRequest.MinBudget }}\n                </p>\n              </div>\n              <div class=\"col-md-6\">\n                <p>\n                  <strong>Max Budget:</strong>\n                  {{ customRequestDetail.TripRequest.MaxBudget }}\n                </p>\n              </div>\n            </div>\n          </div>\n\n          <!-- Attachments -->\n          <div\n            *ngIf=\"attachments && attachments.length > 0\"\n            class=\"detail-section\"\n          >\n            <h6>Attachments</h6>\n            <div class=\"row\">\n              <div *ngFor=\"let attachment of attachments\" class=\"col-md-4 mb-3\">\n                <div *ngIf=\"isImage(attachment.MimeType); else fileAttachment\">\n                  <img\n                    [src]=\"domainToken + attachment.AttachmentPath\"\n                    alt=\"{{ attachment.AttachmentName }}\"\n                    class=\"img-fluid img-thumbnail\"\n                  />\n                </div>\n                <ng-template #fileAttachment>\n                  <a\n                    [href]=\"domainToken + attachment.AttachmentPath\"\n                    target=\"_blank\"\n                    >Open Attachment</a\n                  >\n                </ng-template>\n              </div>\n            </div>\n          </div>\n\n          <!-- Action Buttons -->\n          <div class=\"detail-actions mt-4\">\n            <button\n              class=\"btn jero-btn jero-btn-primary\"\n              (click)=\"acceptRequest()\"\n            >\n              Submit Offer\n            </button>\n            <button\n              *ngIf=\"customRequestDetail?.TripRequest?.IsBroadCast === false\"\n              class=\"btn btn-danger jero-btn ml-2\"\n              (click)=\"rejectCustomTrip()\"\n            >\n              Reject Custom trip\n            </button>\n            <!-- <button\n              *ngIf=\"customRequestDetail?.TripRequest?.ReqStatus === 'Pending'\"\n              class=\"btn btn-danger jero-btn ml-2\"\n              (click)=\"cancelTripRequest()\"\n            >\n              Cancel\n            </button> -->\n            <button\n              class=\"btn jero-btn jero-btn-secondary ml-2\"\n              [routerLink]=\"['/custom-tour-requests']\"\n            >\n              Back to List\n            </button>\n          </div>\n        </div>\n      </div>\n\n      <!-- Offers and Revisions Card -->\n      <div\n        *ngIf=\"\n          customRequestDetail?.Participants &&\n          customRequestDetail.Participants.length > 0\n        \"\n        class=\"card custom-detail-card mt-4\"\n      >\n        <div class=\"card-body\">\n          <div class=\"detail-section\">\n            <h4 class=\"section-title mb-4\">Offers and Revisions</h4>\n            <div\n              *ngFor=\"let participant of filteredParticipants\"\n              class=\"mb-3 mt-5\"\n            >\n              <div *ngIf=\"participant.Offers && participant.Offers.length > 0\">\n                <!-- Latest Offer -->\n                <div class=\"latest-offer\">\n                  <div\n                    class=\"d-flex justify-content-between align-items-center mb-3\"\n                  >\n                    <h5 class=\"offer-subsection-title\">Latest Offer</h5>\n                    <!-- Revise Offer button for the participant -->\n                  </div>\n                  <hr class=\"section-divider\" />\n                  <ng-container\n                    *ngIf=\"\n                      participant.Offers[0] as offer\n                    \"\n                  >\n                    <div class=\"offer-card\">\n                      <p>\n                        <strong>Offer Date:</strong>\n                        {{ offer.CreatedAt | date : \"dd-MMM-yyyy hh:mm a\" }}\n                      </p>\n                      <p>\n                        <strong>Offer Price:</strong> {{ offer.OfferPrice }}\n                      </p>\n                      <p><strong>Operator Note:</strong> {{ offer.Note }}</p>\n                      <p *ngIf=\"offer.TravellerComments\">\n                        <strong>Traveller Comments:</strong>\n                        {{ offer.TravellerComments }}\n                      </p>\n                      <p>\n                        <strong>Offer Status (Traveller):</strong>\n                        {{ offer.TravellerStatus }}\n                      </p>\n                      <p>\n                        <strong>Offer Status (Operator):</strong>\n                        {{ offer.OperatorStatus }}\n                      </p>\n                      <div\n                        *ngIf=\"\n                          offer.OfferAttachments &&\n                          offer.OfferAttachments.length > 0\n                        \"\n                      >\n                        <ul>\n                          <li *ngFor=\"let attachment of offer.OfferAttachments\">\n                            <a\n                              class=\"btn btn-sm jero-btn jero-btn-primary-outlined\"\n                              [href]=\"domainToken + attachment.FilePath\"\n                              target=\"_blank\"\n                              >Open Attachment</a\n                            >\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </ng-container>\n                </div>\n\n                <!-- Older Offers Toggle -->\n                <div class=\"cold-md-12 d-flex mt-3\">\n                    <!-- Revise Offer button for the participant -->\n                    <button\n                      class=\"btn btn-sm jero-btn jero-btn-primary col-md-6\"\n                      (click)=\"reviseOffer(participant.ParticipentId)\"\n                    >\n                      Revise Offer\n                    </button>\n                  <div *ngIf=\"participant.Offers.length > 1\" class=\"col-md-6\">\n                    <button\n                      class=\"btn btn-sm jero-btn jero-btn-secondary long-button\"\n                      (click)=\"toggleShowOlderOffers(participant.ParticipentId)\"\n                    >\n                      {{\n                        showOlderOffers.has(participant.ParticipentId)\n                          ? \"Hide\"\n                          : \"View\"\n                      }}\n                      Previous Offers\n                    </button>\n                  </div>\n                </div>\n                <!-- Older Offers -->\n                <div\n                  *ngIf=\"showOlderOffers.has(participant.ParticipentId)\"\n                  class=\"older-offers mt-3\"\n                >\n                  <h5 class=\"offer-subsection-title\" style=\"margin-top: 5rem\">\n                    Previous Offers\n                  </h5>\n                  <div *ngFor=\"let offer of participant.Offers.slice(1)\">\n                    <hr class=\"section-divider\" />\n                    <div class=\"offer-card\">\n                      <p>\n                        <strong>Offer Date:</strong>\n                        {{ offer.CreatedAt | date : \"dd-MMM-yyyy hh:mm a\" }}\n                      </p>\n                      <p>\n                        <strong>Offer Price:</strong> {{ offer.OfferPrice }}\n                      </p>\n                      <p><strong>Operator Note:</strong> {{ offer.Note }}</p>\n                      <p *ngIf=\"offer.TravellerComments\">\n                        <strong>Traveller Comments:</strong>\n                        {{ offer.TravellerComments }}\n                      </p>\n                      <p>\n                        <strong>Offer Status (Traveller):</strong>\n                        {{ offer.TravellerStatus }}\n                      </p>\n                      <p>\n                        <strong>Offer Status (Operator):</strong>\n                        {{ offer.OperatorStatus }}\n                      </p>\n                      <div\n                        *ngIf=\"\n                          offer.OfferAttachments &&\n                          offer.OfferAttachments.length > 0\n                        \"\n                      >\n                        <ul>\n                          <li *ngFor=\"let attachment of offer.OfferAttachments\">\n                            <a\n                              class=\"btn btn-sm jero-btn jero-btn-primary-outlined\"\n                              [href]=\"domainToken + attachment.FilePath\"\n                              target=\"_blank\"\n                              >Open Attachment</a\n                            >\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div\n                *ngIf=\"!participant.Offers || participant.Offers.length === 0\"\n              >\n                <p>No offers for this participant.</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div *ngIf=\"!customRequestDetail\">\n        <p>Loading custom tour request details...</p>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/custom-tour-requests/custom-tour-requests.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/custom-tour-requests/custom-tour-requests.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomTourRequestsCustomTourRequestsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h4>Custom Tour Requests</h4>\n\n      <div class=\"table-responsive\">\n        <table class=\"table table-striped\">\n          <thead>\n            <tr>\n              <th>ID</th>\n              <th>Title</th>\n              <th>Name</th>\n              <th>Email</th>\n              <th>Phone</th>\n              <th>From (Country - Place)</th>\n              <th>To (Country - Place)</th>\n              <th>Status</th>\n              <th>Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let request of customTourRequests\">\n              <td>{{ request.ReferenceId }}</td>\n              <td>{{ request.Title }}</td>\n              <td>{{ request.Name }}</td>\n              <td>{{ request.Email }}</td>\n              <td>{{ request.Phone }}</td>\n              <td>{{ request.FromCountry }} - {{ request.FromPlace }}</td>\n              <td>{{ request.ToCountry }} - {{ request.ToPlace }}</td>\n              <td>{{ request.ReqStatus }}</td>\n              <td>\n                <button class=\"btn btn-sm jero-btn jero-btn-primary-outlined\" [routerLink]=\"['/custom-tour-requests', request.ReferenceId]\">View</button>\n                <button class=\"btn btn-sm jero-btn jero-btn-primary ml-2\" (click)=\"submitOffer(request.ReferenceId)\">Submit Offer</button>\n              </td>\n            </tr>\n            <tr *ngIf=\"customTourRequests.length === 0\">\n              <td colspan=\"9\" class=\"text-center\">No custom tour requests found.</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\" style=\"background: #F3F5EA;\">\n  <div class=\"row pt-3\">\n    <ng-template ngFor let-item [ngForOf]=\"tripModalList\" let-i=\"index\">\n      <div class=\"col-md-8\" *ngIf=\"i === 0\">\n        <div class=\"upcoming-trip-card\">\n          <span class=\"day-count\">\n            <i class=\"fa fa-clock-o mr-2\" aria-hidden=\"true\"></i>\n            {{item.TripBasicInfo.Duration}} {{'DAYS' | translate}}\n          </span>\n          <span class=\"trip-title-top\">\n            {{'UPCOMING_TRIPS' | translate}}\n          </span>\n          <ul>\n            <li>\n              <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n              {{item.TripBasicInfo.StartDateTime | date:\"dd-MMM-yyyy\"}}\n            </li>\n            <li>\n              <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n              {{item.TripBasicInfo.FromPlaceName}}\n            </li>\n            <li>\n              <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n              {{item.TripBasicInfo.ToPlaceName}}\n            </li>\n          </ul>\n          <p class=\"trip-price\"><img src=\"../../assets/img/revamp/riyal.svg\" style=\"filter: invert(28%) sepia(98%) saturate(747%) hue-rotate(132deg) brightness(97%) contrast(101%);     width: 14px;\n    margin-top: -3px;\" alt=\"\">&nbsp;{{item.tripPrices.ActualAmount | number}}/-<small>{{'PER_PERSON' |\n              translate}}</small></p>\n          <span class=\"discount-tag\">\n            <p class=\"discount-percentage\">{{item.tripPrices.DiscountPercentage}}% {{'OFF' | translate}}</p>\n          </span>\n        </div>\n      </div>\n      <div *ngIf=\"i === 1\" class=\"col-md-4\">\n        <div class=\"upcoming-trip-card gg-upcoming-trip-card\"\n          [style.backgroundImage]=\"'url(http://api2.tripjero.com/' + item.TripBasicInfo.FeaturesImage + ')'\">\n          <div class=\"trip-card-gg-body\">\n            <span class=\"day-count\">\n              <i class=\"fa fa-clock-o mr-2\" aria-hidden=\"true\"></i>\n              {{item.TripBasicInfo.Duration}} Days\n              <p class=\"trip-price\"><img src=\"../../assets/img/revamp/riyal.svg\" style=\"filter: brightness(0) invert(1); width: 16px;\n    margin-top: -2px;\" alt=\"\">&nbsp;{{item.tripPrices.ActualAmount | number}}/-<small>Per Person</small></p>\n            </span>\n            <span class=\"trip-title-top\">\n              {{'RECENT_COMPLETED_TRIPS' | translate}}\n            </span>\n            <ul>\n              <li>\n                <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                {{item.TripBasicInfo.StartDateTime | date:\"dd-MMM-yyyy\"}}\n              </li>\n              <li>\n                <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n                {{item.TripBasicInfo.FromPlaceName}}\n              </li>\n              <li>\n                <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n                {{item.TripBasicInfo.ToPlaceName}}\n              </li>\n            </ul>\n            <span class=\"discount-tag\">\n              <p class=\"discount-percentage\">{{item.tripPrices.DiscountPercentage}}% OFF</p>\n            </span>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n    <div class=\"col-md-12\">\n      <h2 class=\"mt-2 mb-2\">\n        {{'PORTFOLIO_PERFORMANCE' | translate}}\n      </h2>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"wrap-minor-stats\" style=\"background-image: url('../../assets/img/revamp/Graph.png');\">\n        <div class=\"wrap-top-content\">\n          <span>\n            <i class=\"fa fa-calendar-check-o\"></i>\n          </span>\n          <span>\n            {{'TOTAL_BOOKINGS' | translate}}\n          </span>\n        </div>\n        <div class=\"wrap-bottom-content\">\n          {{tripcount.TotalBookings}}\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"wrap-minor-stats\" style=\"background-image: url('../../assets/img/revamp/Graph.png');\">\n        <div class=\"wrap-top-content\">\n          <span>\n            <i class=\"fa fa-eye\"></i>\n          </span>\n          <span>\n            {{'TOTAL_VIEWED_TRIPS' | translate}}\n          </span>\n        </div>\n        <div class=\"wrap-bottom-content\">\n          {{tripcount.TotalTripViews}}\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"wrap-minor-stats\" style=\"background-image: url('../../assets/img/revamp/Graph.png');\">\n        <div class=\"wrap-top-content\">\n          <span>\n            <i class=\"fa fa-bus\"></i>\n          </span>\n          <span>\n            {{'TOTAL_POSTED_TRIPS' | translate}}\n          </span>\n        </div>\n        <div class=\"wrap-bottom-content\">\n          {{tripcount.TotalTrips}}\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"wrap-minor-stats\" style=\"background-image: url('../../assets/img/revamp/Graph.png');\">\n        <div class=\"wrap-top-content\">\n          <span>\n            <i class=\"fa fa-bus\"></i>\n          </span>\n          <span>\n            {{'SCHEDULED_TRIPS' | translate}}\n          </span>\n        </div>\n        <div class=\"wrap-bottom-content\">\n          {{tripcount.TotalScheduledTrips}}\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"wrap-minor-stats\" style=\"background-image: url('../../assets/img/revamp/Graph.png');\">\n        <div class=\"wrap-top-content\">\n          <span>\n            <i class=\"fa fa-bar-chart\"></i>\n          </span>\n          <span>\n            {{'IN_PROGRESS_TRIPS' | translate}}\n          </span>\n        </div>\n        <div class=\"wrap-bottom-content\">\n          {{tripcount.TotalInprogressTrips}}\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"wrap-minor-stats\" style=\"background-image: url('../../assets/img/revamp/Graph.png');\">\n        <div class=\"wrap-top-content\">\n          <span>\n            <i class=\"fa fa-clock-o\"></i>\n          </span>\n          <span>\n            {{'ON_HOLD_TRIPS' | translate}}\n          </span>\n        </div>\n        <div class=\"wrap-bottom-content\">\n          {{tripcount.TotalHoldTrips}}\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-3\">\n      <div class=\"jero-graphy\">\n        <div class=\"wrap-top-content\">\n          <span class=\"scale-progress-top\">{{'HOW_TO_MEASURE_SALE_PROGRESS' | translate}}</span>\n        </div>\n        <div class=\"wrap-bottom-content\">\n          <span class=\"scale-progress-bottom\">\n            70% <span>{{'THIS_YEAR' | translate}}</span>\n          </span>\n        </div>\n        <div>\n          <canvas baseChart [datasets]=\"saleProgressData\" [labels]=\"saleProgressLabels\" [options]=\"saleProgressOptions\"\n            [colors]=\"saleProgressColors\" [legend]=\"false\" [chartType]=\"'line'\">\n          </canvas>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"jero-graphy\">\n        <div class=\"wrap-top-content d-flex flex-column\">\n          <span class=\"how-to-post-trip\">{{'HOW_TO_POST_A_TRIP' | translate}}</span>\n          <span class=\"per-personss\">{{'PER_PERSON' | translate}}</span>\n        </div>\n        <div class=\"wrap-bottom-content\">\n          <span class=\"price-per-person\">3,520/- <i class=\"fa fa-download\"></i></span>\n        </div>\n        <div>\n          <canvas baseChart [datasets]=\"postTripData\" [labels]=\"postTripLabels\" [options]=\"postTripOptions\"\n            [colors]=\"postTripColors\" [legend]=\"false\" [chartType]=\"'bar'\">\n          </canvas>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-6\">\n      <div class=\"jero-graphy\">\n        <div class=\"wrap-top-content d-flex flex-column\">\n          <span class=\"sale-progress\">{{'SALE_PROGRESS' | translate}}</span>\n          <span class=\"total-booking-trips\">{{'TOTAL_BOOKING_TRIPS' | translate}}</span>\n        </div>\n        <div>\n          <canvas baseChart [datasets]=\"bookingTripsData\" [labels]=\"bookingTripsLabels\" [options]=\"bookingTripsOptions\"\n            [colors]=\"bookingTripsColors\" [legend]=\"false\" [chartType]=\"'line'\">\n          </canvas>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- END dashboard cards row -->\n  <div class=\"table-area\">\n    <div class=\"row\">\n\n      <div class=\"col-md-12 col-sm-12 col-xs-12\">\n        <div>\n          <div class=\"inner-table\">\n            <h4 class=\"text-dark p-3\">{{'RECENT_VIEWED_TRIPS_BY_TRAVELERS' | translate}}</h4>\n            <div class=\"table-responsive\">\n              <table class=\"table jero-table\">\n                <thead>\n                  <tr>\n                    <th>{{'STAGE' | translate}}</th>\n                    <th>{{'NAME_OF_CLIENT' | translate}}</th>\n                    <th>{{'TRIP_TITLE' | translate}}</th>\n                    <th>{{'TIME' | translate}}</th>\n                    <th>{{'DATE' | translate}}</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let item of tripViews; let i = index\">\n                    <td>\n                      <span class=\"dot\" [ngClass]=\"getDotColor(i)\"></span>\n                    </td>\n                    <td>{{item.TravName}}</td>\n                    <td>{{item.TripTitle}}</td>\n                    <td>{{item.Dtm | date:\"shortTime\"}}</td>\n                    <td>{{item.Dtm | date:\"dd-MMM-yyyy\"}} </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDetailDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row  text-center\">\n  <div class=\"post-trip-btn \">\nMy  Booking\n  </div>\n  \n</div>\n<div class=\"d-flex justify-content-center mt-3\">\n\n      \n <div class=\"col-md-3 custom-input custom-input-search\">\n     <div class=\"form-group has-search\">\n         <span class=\"fa fa-search form-control-feedback\"></span>\n         <input  placeholder=\"Search\"  type=\"text\" class=\"form-control\" >\n       </div>\n </div>\n\n</div>\n<div class=\"row\">\n <div class=\"col-2  col-md-2 col-lg-1 \"></div>\n <div class=\"col-8  col-md-8  col-lg-10 mb-2\">\n <div class=\"container-fluid-custom\">\n \n\n      <!-- Nav pills -->\n\n\n<!-- Tab panes -->\n<div class=\"tab-content mb-5 mt-4 pb-5\">\n<div class=\"main-card pr-2 mt-4 main-card-border rounded\">\n     \n <div class=\"row\">\n\n      <div class=\"col-md-4 pr-0\">      \n       <img src=\"img/profile-img/D.png\" class=\"img-fluid w-100 h-100 \" alt=\"Sample Image\"> \n      \n     </div>\n     <div class=\"col-md-5 pr-0 pl-0\">\n               \n       <div class=\"media-body content-wrapper\">\n                 \n         <h2 class=\"media-heading mt-4\">Faisal Mosque Tour for 10 Peoples</h2>\n         <div class=\"discount-name mb-2 mt-2\">5%OFF + Promo</div>\n\n       \n       \n               <div class=\"blue-bar\">\n                   <div class=\"d-flex justify-content-around\">\n                 \n                       <div class=\"sub-menu\">\n                         <img src=\"img/dashboard/png-icons/c.png\">\n                         <span class=\"menu-title\">May 22, 2020</span>\n                       </div>\n                       <div class=\"sub-menu\">\n                         <img src=\"img/dashboard/png-icons/d.png\">\n                         <span class=\"menu-title\">1 Day</span>\n                       </div>\n                       <div class=\"sub-menu\">\n                         <img src=\"img/dashboard/png-icons/l.png\">\n                         <span class=\"menu-title\">Starting from Karachi</span>\n                       </div>\n                     \n                     \n                     </div>\n               </div>\n       \n               <div class=\"gray-bar\">\n                   <div class=\"d-flex\">\n                 \n                       <div class=\"ml-5 sub-menu\">\n                         <img src=\"img/dashboard/png-icons/rr.png\">\n                         <span class=\"cash-title\">CASH ON DELIVERY, BANK TRANSFER</span>\n                       </div>\n                       <div class=\"ml-5 pl-5 sub-menu\">\n                         <img src=\"img/dashboard/reports-icons/bus.png\">\n                         <span class=\"cash-title\">TRANSPORT</span>\n                       </div>\n                   \n                     \n                     \n                     </div>\n               </div>\n    \n               <div class=\"gray-bar\">\n                   <div class=\"d-flex\">\n                 \n                       <div class=\"ml-5 mr-5 pr-2 sub-menu\">\n                         <img src=\"img/dashboard/png-icons/food.png\">\n                         <span class=\"cash-title\">STANDARD MEALS</span>\n                       </div>\n                       <div class=\"ml-5 pl-5 sub-menu\">\n                         <img src=\"img/dashboard/reports-icons/guide.png\">\n                         <span class=\"cash-title\">TRANSPORT</span>\n                       </div>\n                   \n                     \n                     \n                     </div>\n               </div>\n               <div class=\"mt-3  \">\n                   <div class=\"d-flex badge-custom-bar justify-content-around\">\n                 \n                   \n                     <a href=\"#\" class=\"badgse pr-2 pl-2 badge-warning1 text-white\">KARACHI</a>\n                     <a href=\"#\" class=\"badgse pr-2 pl-2 badge-warning1 text-white\">DAY TRIPS</a>\n                     <a href=\"#\" class=\"badgse pr-2 pl-2 badge-warning1 text-white\">DAY TRIPS</a>\n                     <a href=\"#\" class=\"badgse pr-2 pl-2 badge-warning1 text-white\">SINDH</a>\n                     <a href=\"#\" class=\"badgse pr-2 pl-2 badge-warning1 text-white\">DEALS</a>\n                     <a href=\"#\" class=\"badgse pr-2 pl-2 badge-warning1 text-white\">OTHERS</a>\n                     \n                     </div>\n               </div>\n    \n\n\n\n   </div>\n     </div>\n        <div class=\"col-md-3 ml-0\">      \n         <div class=\"media-body-rates  parallelogram-blue m-2 \">\n           <div class=\"rates-heading2 text-right mr-3 pt-4\">  \n             <h1 class=\"rate\"><span class=\"rs-text\">Rs.</span> 2,250</h1>\n        \n           <a class=\"btn-per-person\">Per person</a>\n           <!-- <a href=\"\" class=\"btn btn-detail-second mt-1\">Report</a> -->\n           <div class=\"icons-arae-second mt-2\">\n           \n<button class=\"Report-btn\">REPORT <i class=\"fa fa-paper-plane-o ml-3\" aria-hidden=\"true\"></i>\n</button>\n           <p class=\"report-text pl-5 pr-5 pt-5 pb-5\">\n             Reports About Your Trip Will\nbe Sent on your Mai\n           </p>\n           </div>\n          \n     </div>\n       \n </div>\n                   </div>\n\n\n</div>\n</div>\n<div class=\"main-card pr-2 mt-4 main-card-border rounded\">\n     \n <div class=\"row\">\n\n      <div class=\"col-md-4 pr-0\">      \n       <img src=\"img/profile-img/D.png\" class=\"img-fluid w-100 h-100 \" alt=\"Sample Image\"> \n      \n     </div>\n     <div class=\"col-md-5 pr-0 pl-0\">\n               \n       <div class=\"media-body content-wrapper\">\n                 \n         <h2 class=\"media-heading mt-4\">Faisal Mosque Tour for 10 Peoples</h2>\n         <div class=\"discount-name mb-2 mt-2\">5%OFF + Promo</div>\n\n       \n       \n               <div class=\"blue-bar\">\n                   <div class=\"d-flex justify-content-around\">\n                 \n                       <div class=\"sub-menu\">\n                         <img src=\"img/dashboard/png-icons/c.png\">\n                         <span class=\"menu-title\">May 22, 2020</span>\n                       </div>\n                       <div class=\"sub-menu\">\n                         <img src=\"img/dashboard/png-icons/d.png\">\n                         <span class=\"menu-title\">1 Day</span>\n                       </div>\n                       <div class=\"sub-menu\">\n                         <img src=\"img/dashboard/png-icons/l.png\">\n                         <span class=\"menu-title\">Starting from Karachi</span>\n                       </div>\n                     \n                     \n                     </div>\n               </div>\n       \n               <div class=\"gray-bar\">\n                   <div class=\"d-flex\">\n                 \n                       <div class=\"ml-5 sub-menu\">\n                         <img src=\"img/dashboard/png-icons/rr.png\">\n                         <span class=\"cash-title\">CASH ON DELIVERY, BANK TRANSFER</span>\n                       </div>\n                       <div class=\"ml-5 pl-5 sub-menu\">\n                         <img src=\"img/dashboard/reports-icons/bus.png\">\n                         <span class=\"cash-title\">TRANSPORT</span>\n                       </div>\n                   \n                     \n                     \n                     </div>\n               </div>\n    \n               <div class=\"gray-bar\">\n                   <div class=\"d-flex\">\n                 \n                       <div class=\"ml-5 mr-5 pr-2 sub-menu\">\n                         <img src=\"img/dashboard/png-icons/food.png\">\n                         <span class=\"cash-title\">STANDARD MEALS</span>\n                       </div>\n                       <div class=\"ml-5 pl-5 sub-menu\">\n                         <img src=\"img/dashboard/reports-icons/guide.png\">\n                         <span class=\"cash-title\">TRANSPORT</span>\n                       </div>\n                   \n                     \n                     \n                     </div>\n               </div>\n               <div class=\"mt-3  \">\n                   <div class=\"d-flex badge-custom-bar justify-content-around\">\n                 \n                   \n                     <a href=\"#\" class=\"badgse pr-2 pl-2 badge-warning1 text-white\">KARACHI</a>\n                     <a href=\"#\" class=\"badgse pr-2 pl-2 badge-warning1 text-white\">DAY TRIPS</a>\n                     <a href=\"#\" class=\"badgse pr-2 pl-2 badge-warning1 text-white\">DAY TRIPS</a>\n                     <a href=\"#\" class=\"badgse pr-2 pl-2 badge-warning1 text-white\">SINDH</a>\n                     <a href=\"#\" class=\"badgse pr-2 pl-2 badge-warning1 text-white\">DEALS</a>\n                     <a href=\"#\" class=\"badgse pr-2 pl-2 badge-warning1 text-white\">OTHERS</a>\n                     \n                     </div>\n               </div>\n    \n\n\n\n   </div>\n     </div>\n        <div class=\"col-md-3 ml-0\">      \n         <div class=\"media-body-rates  parallelogram-blue m-2 \">\n           <div class=\"rates-heading2 text-right mr-3 pt-4\">  \n             <h1 class=\"rate\"><span class=\"rs-text\">Rs.</span> 2,250</h1>\n        \n           <a class=\"btn-per-person\">Per person</a>\n           <!-- <a href=\"\" class=\"btn btn-detail-second mt-1\">Report</a> -->\n           <div class=\"icons-arae-second mt-2\">\n           \n<button class=\"Report-btn\">REPORT <i class=\"fa fa-paper-plane-o ml-3\" aria-hidden=\"true\"></i>\n</button>\n           <p class=\"report-text pl-5 pr-5 pt-5 pb-5\">\n             Reports About Your Trip Will\nbe Sent on your Mai\n           </p>\n           </div>\n          \n     </div>\n       \n </div>\n                   </div>\n\n\n</div>\n</div>\n<div class=\"main-card pr-2 mt-4 main-card-border rounded\">\n     \n <div class=\"row\">\n\n      <div class=\"col-md-4 pr-0\">      \n       <img src=\"img/profile-img/D.png\" class=\"img-fluid w-100 h-100 \" alt=\"Sample Image\"> \n      \n     </div>\n     <div class=\"col-md-5 pr-0 pl-0\">\n               \n       <div class=\"media-body content-wrapper\">\n                 \n         <h2 class=\"media-heading mt-4\">Faisal Mosque Tour for 10 Peoples</h2>\n         <div class=\"discount-name mb-2 mt-2\">5%OFF + Promo</div>\n\n       \n       \n               <div class=\"blue-bar\">\n                   <div class=\"d-flex justify-content-around\">\n                 \n                       <div class=\"sub-menu\">\n                         <img src=\"img/dashboard/png-icons/c.png\">\n                         <span class=\"menu-title\">May 22, 2020</span>\n                       </div>\n                       <div class=\"sub-menu\">\n                         <img src=\"img/dashboard/png-icons/d.png\">\n                         <span class=\"menu-title\">1 Day</span>\n                       </div>\n                       <div class=\"sub-menu\">\n                         <img src=\"img/dashboard/png-icons/l.png\">\n                         <span class=\"menu-title\">Starting from Karachi</span>\n                       </div>\n                     \n                     \n                     </div>\n               </div>\n       \n               <div class=\"gray-bar\">\n                   <div class=\"d-flex\">\n                 \n                       <div class=\"ml-5 sub-menu\">\n                         <img src=\"img/dashboard/png-icons/rr.png\">\n                         <span class=\"cash-title\">CASH ON DELIVERY, BANK TRANSFER</span>\n                       </div>\n                       <div class=\"ml-5 pl-5 sub-menu\">\n                         <img src=\"img/dashboard/reports-icons/bus.png\">\n                         <span class=\"cash-title\">TRANSPORT</span>\n                       </div>\n                   \n                     \n                     \n                     </div>\n               </div>\n    \n               <div class=\"gray-bar\">\n                   <div class=\"d-flex\">\n                 \n                       <div class=\"ml-5 mr-5 pr-2 sub-menu\">\n                         <img src=\"img/dashboard/png-icons/food.png\">\n                         <span class=\"cash-title\">STANDARD MEALS</span>\n                       </div>\n                       <div class=\"ml-5 pl-5 sub-menu\">\n                         <img src=\"img/dashboard/reports-icons/guide.png\">\n                         <span class=\"cash-title\">TRANSPORT</span>\n                       </div>\n                   \n                     \n                     \n                     </div>\n               </div>\n               <div class=\"mt-3  \">\n                   <div class=\"d-flex badge-custom-bar justify-content-around\">\n                 \n                   \n                     <a href=\"#\" class=\"badgse pr-2 pl-2 badge-warning1 text-white\">KARACHI</a>\n                     <a href=\"#\" class=\"badgse pr-2 pl-2 badge-warning1 text-white\">DAY TRIPS</a>\n                     <a href=\"#\" class=\"badgse pr-2 pl-2 badge-warning1 text-white\">DAY TRIPS</a>\n                     <a href=\"#\" class=\"badgse pr-2 pl-2 badge-warning1 text-white\">SINDH</a>\n                     <a href=\"#\" class=\"badgse pr-2 pl-2 badge-warning1 text-white\">DEALS</a>\n                     <a href=\"#\" class=\"badgse pr-2 pl-2 badge-warning1 text-white\">OTHERS</a>\n                     \n                     </div>\n               </div>\n    \n\n\n\n   </div>\n     </div>\n        <div class=\"col-md-3 ml-0\">      \n         <div class=\"media-body-rates  parallelogram-blue m-2 \">\n           <div class=\"rates-heading2 text-right mr-3 pt-4\">  \n             <h1 class=\"rate\"><span class=\"rs-text\">Rs.</span> 2,250</h1>\n        \n           <a class=\"btn-per-person\">Per person</a>\n           <!-- <a href=\"\" class=\"btn btn-detail-second mt-1\">Report</a> -->\n           <div class=\"icons-arae-second mt-2\">\n           \n<button class=\"Report-btn\">REPORT <i class=\"fa fa-paper-plane-o ml-3\" aria-hidden=\"true\"></i>\n</button>\n           <p class=\"report-text pl-5 pr-5 pt-5 pb-5\">\n             Reports About Your Trip Will\nbe Sent on your Mai\n           </p>\n           </div>\n          \n     </div>\n       \n </div>\n                   </div>\n\n\n</div>\n</div>\n<div class=\"main-card pr-2 mt-4 main-card-border rounded\">\n     \n <div class=\"row\">\n\n      <div class=\"col-md-4 pr-0\">      \n       <img src=\"img/profile-img/D.png\" class=\"img-fluid w-100 h-100 \" alt=\"Sample Image\"> \n      \n     </div>\n     <div class=\"col-md-5 pr-0 pl-0\">\n               \n       <div class=\"media-body content-wrapper\">\n                 \n         <h2 class=\"media-heading mt-4\">Faisal Mosque Tour for 10 Peoples</h2>\n         <div class=\"discount-name mb-2 mt-2\">5%OFF + Promo</div>\n\n       \n       \n               <div class=\"blue-bar\">\n                   <div class=\"d-flex justify-content-around\">\n                 \n                       <div class=\"sub-menu\">\n                         <img src=\"img/dashboard/png-icons/c.png\">\n                         <span class=\"menu-title\">May 22, 2020</span>\n                       </div>\n                       <div class=\"sub-menu\">\n                         <img src=\"img/dashboard/png-icons/d.png\">\n                         <span class=\"menu-title\">1 Day</span>\n                       </div>\n                       <div class=\"sub-menu\">\n                         <img src=\"img/dashboard/png-icons/l.png\">\n                         <span class=\"menu-title\">Starting from Karachi</span>\n                       </div>\n                     \n                     \n                     </div>\n               </div>\n       \n               <div class=\"gray-bar\">\n                   <div class=\"d-flex\">\n                 \n                       <div class=\"ml-5 sub-menu\">\n                         <img src=\"img/dashboard/png-icons/rr.png\">\n                         <span class=\"cash-title\">CASH ON DELIVERY, BANK TRANSFER</span>\n                       </div>\n                       <div class=\"ml-5 pl-5 sub-menu\">\n                         <img src=\"img/dashboard/reports-icons/bus.png\">\n                         <span class=\"cash-title\">TRANSPORT</span>\n                       </div>\n                   \n                     \n                     \n                     </div>\n               </div>\n    \n               <div class=\"gray-bar\">\n                   <div class=\"d-flex\">\n                 \n                       <div class=\"ml-5 mr-5 pr-2 sub-menu\">\n                         <img src=\"img/dashboard/png-icons/food.png\">\n                         <span class=\"cash-title\">STANDARD MEALS</span>\n                       </div>\n                       <div class=\"ml-5 pl-5 sub-menu\">\n                         <img src=\"img/dashboard/reports-icons/guide.png\">\n                         <span class=\"cash-title\">TRANSPORT</span>\n                       </div>\n                   \n                     \n                     \n                     </div>\n               </div>\n               <div class=\"mt-3  \">\n                   <div class=\"d-flex badge-custom-bar justify-content-around\">\n                 \n                   \n                     <a href=\"#\" class=\"badgse pr-2 pl-2 badge-warning1 text-white\">KARACHI</a>\n                     <a href=\"#\" class=\"badgse pr-2 pl-2 badge-warning1 text-white\">DAY TRIPS</a>\n                     <a href=\"#\" class=\"badgse pr-2 pl-2 badge-warning1 text-white\">DAY TRIPS</a>\n                     <a href=\"#\" class=\"badgse pr-2 pl-2 badge-warning1 text-white\">SINDH</a>\n                     <a href=\"#\" class=\"badgse pr-2 pl-2 badge-warning1 text-white\">DEALS</a>\n                     <a href=\"#\" class=\"badgse pr-2 pl-2 badge-warning1 text-white\">OTHERS</a>\n                     \n                     </div>\n               </div>\n    \n\n\n\n   </div>\n     </div>\n        <div class=\"col-md-3 ml-0\">      \n         <div class=\"media-body-rates  parallelogram-blue m-2 \">\n           <div class=\"rates-heading2 text-right mr-3 pt-4\">  \n             <h1 class=\"rate\"><span class=\"rs-text\">Rs.</span> 2,250</h1>\n        \n           <a class=\"btn-per-person\">Per person</a>\n           <!-- <a href=\"\" class=\"btn btn-detail-second mt-1\">Report</a> -->\n           <div class=\"icons-arae-second mt-2\">\n           \n<button class=\"Report-btn\">REPORT <i class=\"fa fa-paper-plane-o ml-3\" aria-hidden=\"true\"></i>\n</button>\n           <p class=\"report-text pl-5 pr-5 pt-5 pb-5\">\n             Reports About Your Trip Will\nbe Sent on your Mai\n           </p>\n           </div>\n          \n     </div>\n       \n </div>\n                   </div>\n\n\n</div>\n</div>\n\n</div>\n</div>\n\n </div>\n <div class=\"col-2  col-md-2 col-lg-1 \"></div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/draft/draft.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/draft/draft.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDraftDraftComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"page-content-wrapper\">\n  <div class=\"row\">\n    <div class=\"col-md-12 d-flex justify-content-between align-items-center\">\n      <h4>{{ 'DRAFT_TRIP' | translate }}</h4>\n      <div class=\"tripjero-floating w-25\">\n        <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"{{ 'SEARCH' | translate }}\"\n          (keyup)=\"searchTrips($event)\" aria-describedby=\"emailHelp\">\n        <label style=\"background: #F3F5EA;\" for=\"searchInput\" class=\"float-label\">{{ 'SEARCH' | translate }}</label>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"row\" style=\"border-radius: 16px;\n      border: 1.333px solid  #DBDDDF;\n      background:  #FFF;\n      padding: 15px;\">\n        <div *ngFor=\"let item of tripModalList; let i = index\" class=\"col-md-6 mb-3\">\n          <div class=\"trip-card draft-trip\">\n            <a routerLink=\"/tripdetail/{{item.TripBasicInfo.Id}}\" class=\"\">\n              <img [src]=\"baseImgURL + item.TripBasicInfo?.FeaturesImage\" onerror=\"src='../../assets/img/photo1.png';\">\n            </a>\n            <div class=\"card-content\">\n              <h3 class=\"card-title\">{{item.TripBasicInfo?.Title}}</h3>\n              <span class=\"off-promo-cc\">\n                {{ item.tripPrices?.DiscountPercentage }}%OFF + Promo\n              </span>\n              <div class=\"card-details\">\n                <span class=\"detail-item\"\n                  *ngIf=\"item.TripBasicInfo.DiscountPercentage\">{{item.TripBasicInfo?.DiscountPercentage}}% OFF\n                  <span *ngIf=\"item.TripBasicInfo.Is_Promo\">+ Promo</span></span>\n              </div>\n              <div class=\"card-features\">\n                <span class=\"feature-item\"><i class=\"fa fa-dollar\"></i><span>{{ 'CASH_ON_DELIVERY' | translate }}, {{\n                    'BANK_TRANSFER' | translate }}</span></span>\n                <span *ngIf=\"item.Faclities.HaveMeals\" class=\"feature-item\"><i class=\"fa fa-cutlery\"></i>\n                  <span>{{ 'MEALS' | translate }}</span></span>\n                <span *ngIf=\"item.Faclities.HaveFirstAid\" class=\"feature-item\"><i class=\"fa fa-hospital-o\"></i>\n                  <span>{{ 'GUIDE' | translate }}</span></span>\n                <span *ngIf=\"item.Faclities.HaveAccomodation\" class=\"feature-item\"><i class=\"fa fa-home\"></i>\n                  <span>{{ 'ACCOMODATION' | translate }}</span></span>\n                <span *ngIf=\"item.Faclities.HaveTransport\" class=\"feature-item\"><i class=\"fa fa-bus\"></i>\n                  <span>{{ 'TRANSPORT' | translate }}</span></span>\n              </div>\n              <div class=\"card-info\">\n                <span class=\"info-item\">\n                  <i class=\"fa fa-calendar\" style=\"color: rgba(0, 169, 145, 1);\"></i>\n                  <span>{{item.TripBasicInfo?.StartDateTime |\n                    date:'dd-MMM-yyyy'}}</span>\n                </span>\n                <span class=\"info-item\">\n                  <i class=\"fa fa-clock-o\" style=\"color: rgba(255, 174, 6, 1)\"></i>\n                  <span>{{item.TripBasicInfo?.Duration}} {{ 'DAY' | translate }}</span>\n                </span>\n                <span class=\"info-item\">\n                  <i class=\"fa fa-map-marker\" style=\"color: rgba(220, 16, 16, 1)\"></i>\n                  <span>{{ 'STARTING_FROM_KARACHI' | translate }}</span>\n                </span>\n              </div>\n              <ul class=\"tags\">\n                <li>{{ 'KARACHI' | translate }}</li>\n                <li>{{ 'DAY_TRIPS' | translate }}</li>\n                <li>{{ 'SINDH' | translate }}</li>\n                <li>{{ 'DEALS' | translate }}</li>\n                <li>{{ 'ADD' | translate }}</li>\n              </ul>\n              <div class=\"d-flex justify-content-between align-items-center mt-2\">\n                <div class=\"d-flex\" style=\"gap: 20px;\">\n                  <button class=\"jero-btn jero-btn-primary\" (click)=\"EditDraftTrip(item.DraftTripId)\">\n                    {{ 'EDIT_TRIP' | translate }}\n                  </button>\n                  <button class=\"jero-btn jero-btn-primary\" style=\"background: #FF0000; border-color: #FF0000;\"\n                    (click)=\"DelDraft(item.DraftTripId)\">\n                    {{ 'DELETE' | translate }}\n                  </button>\n                </div>\n\n                <div class=\"card-price\">\n                  <span class=\"price-text\">\n                    <div class=\"d-flex\">\n                      &nbsp;<img src=\"../../assets/img/revamp/riyal.svg\" style=\"filter: invert(28%) sepia(98%) saturate(747%) hue-rotate(132deg) brightness(97%) contrast(101%);     width: 14px;\n    margin-top: -3px;\" alt=\"\"> {{ item.tripPrices?.ActualAmount | number }}\n                    </div><span class=\"small\">{{ 'PER_PERSON' |\n                      translate }}</span>\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"content\">\n\n    <!-- Default box -->\n    <div class=\"box\">\n        <div class=\"box-header with-border\">\n            <h3 class=\"box-title\">Edit Profile</h3>\n\n            <div class=\"box-tools pull-right\">\n                <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\" data-toggle=\"tooltip\"\n                    title=\"Collapse\">\n                    <i class=\"fa fa-minus\"></i>\n                </button>\n                <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"remove\" data-toggle=\"tooltip\"\n                    title=\"Remove\">\n                    <i class=\"fa fa-times\"></i>\n                </button>\n            </div>\n        </div>\n        <div class=\"box-body\">\n\n\n            <section class=\"content\">\n                <div class=\"row\">\n                    <div class=\"col-md-3\">\n\n                        <!-- Profile Image -->\n                        <div class=\"box box-primary\">\n                            <div class=\"box-body box-profile\">\n                                <img class=\"profile-user-img img-responsive img-circle\" [src]=\"imgURL\" *ngIf=\"imgURL\" />\n                                <!-- <img class=\"profile-user-img img-responsive img-circle\" [src]=\"imgURL\" onerror=\"src='./assets/img/avatar5.png';\"\n                                     alt=\"User profile picture\"> -->\n\n                                     <!-- <img src=\"{{domainUrl}}/{{user.ProfileImage}}\"  onerror=\"src='./assets/img/avatar5.png';\" class=\"rounded-circle mr-3\" alt=\"Sample Image\"> -->\n\n\n                                <h3 class=\"profile-username text-center\">{{user.Name}}</h3>\n\n                                <p class=\"text-muted text-center\">{{user.BuisnessName}}</p>\n                                <form [formGroup]=\"imgForm\" (ngSubmit)=\"updateImage()\">\n                                    <div class=\"form-group\">\n                                        <label>Update Image</label>\n                                        <div class=\"input-group\">\n                                            <span class=\"btn btn-default btn-file\">\n                                                Browse… <input type=\"file\" id=\"image\" accept='image/*' #file\n                                                    formControlName=\"image\" (change)=\"preview(file.files)\"\n                                                    class=\"form-control\" readonly>\n                                                <div *ngIf=\"imgSubmit && i.image.errors\" class=\"invalid-feedback\">\n                                                    <div *ngIf=\"i.image.errors.required\" style=\"color: red;\">Profile\n                                                        image required</div>\n                                                </div>\n                                            </span>\n                                            <button type=\"submit\" class=\"btn btn-primary pull-right\">Upload</button>\n                                        </div>\n\n                                    </div>\n                                </form>\n                            </div>\n                            <!-- /.box-body -->\n                        </div>\n                        <!-- /.box -->\n\n                        <!-- About Me Box -->\n\n                        <!-- /.box -->\n                    </div>\n                    <div class=\"col-md-9\">\n                        <form [formGroup]=\"postForm\" (ngSubmit)=\"updateProfile()\">\n\n\n                            <div class=\"box box-primary\">\n                                <div class=\"col-md-6\">\n\n\n                                    <div class=\"box-body\">\n\n                                        <div class=\"form-group\">\n                                            <label for=\"Name\">Name</label>\n                                            <input type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)]=\"user.Name\"\n                                                formControlName=\"Name\" placeholder=\"Name\" required>\n                                            <div *ngIf=\"submitted && f.Name.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.Name.errors.required\" style=\"color: red;\">Name is required\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <label for=\"BName\">Business Name</label>\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.BuisnessName\"\n                                                formControlName=\"BuisnessName\" id=\"name\" placeholder=\"Business Name\"\n                                                required>\n                                            <div *ngIf=\"submitted && f.BuisnessName.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.BuisnessName.errors.required\" style=\"color: red;\">Buisness\n                                                    Name is required</div>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <label for=\"Address\">Business Address</label>\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.FullAddress\"\n                                                formControlName=\"FullAddress\" id=\"address\"\n                                                placeholder=\"Business Address\" required>\n                                            <div *ngIf=\"submitted && f.FullAddress.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.FullAddress.errors.required\" style=\"color: red;\">\n                                                    FullAddress is required</div>\n                                            </div>\n                                        </div>\n\n                                    </div>\n                                    <!-- /.box-body -->\n\n                                    <div class=\"box-footer\">\n                                        <button type=\"submit\" id=\"btnsubmit\" class=\"btn btn-primary \">Update</button>\n                                    </div>\n\n\n\n                                </div>\n                                <div class=\"col-md-6\">\n\n\n\n                                    <div class=\"box-body\">\n                                        <div class=\"form-group\">\n                                            <label for=\"phonenum\">Phone Number</label>\n                                            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"user.PhoneNumber\"\n                                                formControlName=\"PhoneNumber\" id=\"phoneno\" placeholder=\"Phone Number\"\n                                                required>\n                                            <div *ngIf=\"submitted && f.PhoneNumber.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.PhoneNumber.errors.required\" style=\"color: red;\">Phone\n                                                    number is required</div>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <label for=\"mobilenum\">Country</label>\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.CountryName\"\n                                                formControlName=\"CountryName\" id=\"mobileno\" placeholder=\"Mobile Number\"\n                                                required>\n                                            <div *ngIf=\"submitted && f.CountryName.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.CountryName.errors.required\" style=\"color: red;\">Country\n                                                    is required</div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"form-group\">\n                                            <label for=\"mobilenum\">CityName</label>\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.CityName\"\n                                                formControlName=\"CityName\" id=\"mobileno\" placeholder=\"Mobile Number\"\n                                                required>\n                                            <div *ngIf=\"submitted && f.CityName.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.CityName.errors.required\" style=\"color: red;\">City is\n                                                    required</div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"form-group\">\n                                            <label for=\"mobilenum\">Gender</label>\n                                            <select class=\"form-control\" [(ngModel)]=\"user.Gender\"\n                                                formControlName=\"Gender\" style=\"width: 100%;\">\n                                                <option value=\"Male\">Male</option>\n                                                <option value=\"Female\">Female</option>\n\n                                            </select>\n                                            <div *ngIf=\"submitted && f.Gender.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.Gender.errors.required\" style=\"color: red;\">Gender is\n                                                    required</div>\n                                            </div>\n                                        </div>\n\n\n\n                                    </div>\n                                    <!-- /.box-body -->\n\n\n\n\n\n                                </div>\n\n\n                            </div>\n                        </form>\n                    </div>\n                    <!--/.col (right) -->\n                </div>\n                <!-- /.row -->\n            </section>\n\n\n\n        </div>\n        <!-- /.box-body -->\n        <div class=\"box-footer\">\n            <p>\n            </p>\n\n        </div>\n        <!-- /.box-footer-->\n    </div>\n    <!-- /.box -->\n\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/forgetpassword/forgetpassword.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgetpassword/forgetpassword.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppForgetpasswordForgetpasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"auth\" *ngIf=\"!showResetPassword\">\n  <div class=\"public-layout-wrapper\">\n    <div class=\"public-layout-splash\">\n    </div>\n    <div id=\"form_login\" class=\"public-layout-card\">\n        <div class=\"auth-card-inner\">\n          <img src=\"../../assets/img/revamp/logo-header.svg\" alt=\"logo\" class=\"logo-login\">\n            <h4>{{ 'RESET_PASSWORD' | translate }}</h4>\n            <ng-container>\n              <form [formGroup]=\"forgetPasswordFrom\" (submit)=\"sendResetLink()\" method=\"POST\">\n                <div class=\"tripjero-floating\">\n                    <input \n                    [(ngModel)]=\"email\" \n                    formControlName=\"Email\" \n                    type=\"email\" \n                    class=\"form-control\" \n                    name=\"username\" \n                    placeholder=\"{{ 'ENTER_EMAIL_ADDRESS' | translate }}\"\n                    />\n                    <label for=\"userEmail\" class=\"float-label\">{{ 'EMAIL_ADDRESS' | translate }}</label>\n                    <div style=\"font-size:12px;color: red;\" *ngIf=\"forgetPasswordFrom.get('Email').invalid && (forgetPasswordFrom.get('Email').dirty || forgetPasswordFrom.get('Email').touched)\">\n                      <div *ngIf=\"forgetPasswordFrom.get('Email').errors?.required\">\n                        {{ 'EMAIL_REQUIRED' | translate }}\n                      </div>\n                      <div *ngIf=\"forgetPasswordFrom.get('Email').errors?.email\">\n                        {{ 'EMAIL_NOT_VALID' | translate }}\n                      </div>\n                    </div>\n                </div>\n                <div class=\"d-flex justify-content-between align-items-center mb-3\">\n                  <p>{{ 'ALREADY_REGISTERED' | translate }}</p>\n                  <a  class=\"forget-pass\" (click)=\"goToLogin()\" tabindex=\"-1\">{{ 'LOGIN' | translate }}</a>\n                </div>\n                <div class=\"d-flex\">\n                  <button\n                  id=\"submitbutton\"\n                    type=\"submit\"\n                    class=\"jero-btn jero-btn-primary mx-auto w-50\"\n                    id=\"submitbutton\"\n                  >\n                    {{ 'RESET' | translate }}\n                  </button>\n                </div>\n            </form>\n            </ng-container>\n        </div>\n    </div>\n</div>\n</section>\n\n<ng-container *ngIf=\"showResetPassword\">\n  <app-reset-password (showLoginpageEmitter)=\"goToLogin()\" [email]=\"email\"></app-reset-password>\n</ng-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/invoice-details/invoice-details.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invoice-details/invoice-details.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInvoiceDetailsInvoiceDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"page-content-wrapper\" *ngIf=\"!loading && invoiceData\">\n  <div class=\"row\">\n    <div class=\"col-md-12 d-flex justify-content-between align-items-center mb-3\">\n      <a href=\"javascript:void(0)\" (click)=\"goBack()\" class=\"text-primary\">\n        <i class=\"fa fa-arrow-left\"></i> Back to Invoices\n      </a>\n      <div>\n        <button *ngIf=\"shouldShowRecalculate()\" class=\"jero-btn jero-btn-primary mr-2\" (click)=\"recalculate()\" [disabled]=\"recalculating\">\n          <span *ngIf=\"recalculating\">Calculating...</span>\n          <span *ngIf=\"!recalculating\">Re-Calculate</span>\n        </button>\n        <button *ngIf=\"shouldShowCreateInvoice()\" class=\"jero-btn jero-btn-success\" (click)=\"openCreateInvoiceModal()\">Create Invoice</button>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <h4>Invoice Details #{{invoiceData.Id}}</h4>\n    </div>\n  </div>\n\n  <div class=\"row mt-3\">\n    <!-- Invoice Information Section -->\n    <div class=\"col-md-6\">\n      <div class=\"p-3 mb-3\" style=\"background: #ffff; border-radius: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);\">\n        <h5 class=\"mb-3\">Invoice Information</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 mb-2\">\n            <strong>Invoice ID:</strong> #{{invoiceData.Id}}\n          </div>\n          <div class=\"col-md-6 mb-2\">\n            <strong>Trip ID:</strong> {{invoiceData.TId}}\n          </div>\n          <div class=\"col-md-6 mb-2\">\n            <strong>Operator ID:</strong> {{invoiceData.OptId}}\n          </div>\n          <div class=\"col-md-6 mb-2\">\n            <strong>Annual Bookings:</strong> {{invoiceData.AnnualBookings}}\n          </div>\n          <div class=\"col-md-6 mb-2\">\n            <strong>Trip Bookings:</strong> {{invoiceData.TripBookings}}\n          </div>\n          <div class=\"col-md-6 mb-2\">\n            <strong>Charges Percentage:</strong> {{invoiceData.ChargesPercentage}}%\n          </div>\n          <div class=\"col-md-12 mb-2\">\n            <strong>Status:</strong> \n            <span [ngClass]=\"getPaymentStatusClass(invoiceData.Status)\">\n              {{invoiceData.Status}}\n            </span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Financial Details Section -->\n    <div class=\"col-md-6\">\n      <div class=\"p-3 mb-3\" style=\"background: #ffff; border-radius: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);\">\n        <h5 class=\"mb-3\">Financial Details</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 mb-2\">\n            <strong>Amount Received:</strong> SAR {{invoiceData.AmountRecived | number:'1.2-2'}}\n          </div>\n          <div class=\"col-md-6 mb-2\">\n            <strong>Charge Amount:</strong> \n            <span class=\"text-warning\">SAR {{invoiceData.ChargeAmount | number:'1.2-2'}}</span>\n          </div>\n          <div class=\"col-md-12 mb-2\">\n            <strong>Payable Amount:</strong> \n            <span class=\"text-success font-weight-bold\">SAR {{invoiceData.PayableAmount | number:'1.2-2'}}</span>\n          </div>\n          <div class=\"col-md-6 mb-2\">\n            <strong>Trip Completion Date:</strong> \n            <br>{{formatDate(invoiceData.TripCompletionDate)}}\n          </div>\n          <div class=\"col-md-6 mb-2\">\n            <strong>Maturity Date:</strong> \n            <br>{{formatDate(invoiceData.MaturityDate)}}\n          </div>\n          <div class=\"col-md-12 mb-2\">\n            <strong>Calculation Date:</strong> \n            {{formatDate(invoiceData.CalculationDate)}}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Comments Section -->\n  <div class=\"row mt-3\" *ngIf=\"invoiceData.Comments\">\n    <div class=\"col-md-12\">\n      <div class=\"p-3 mb-3\" style=\"background: #ffff; border-radius: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);\">\n        <h5 class=\"mb-3\">Comments</h5>\n        <p class=\"text-muted\">{{invoiceData.Comments}}</p>\n      </div>\n    </div>\n  </div>\n\n  <!-- Trip Information Section -->\n  <div class=\"row mt-3\" *ngIf=\"invoiceData.Trip && invoiceData.Trip.TripBasicInfo\">\n    <div class=\"col-md-12\">\n      <div class=\"p-3 mb-3\" style=\"background: #ffff; border-radius: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);\">\n        <h5 class=\"mb-3\">Trip Information</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"mb-2\">\n              <strong>Title:</strong> <strong class=\"text-primary\">{{invoiceData.Trip.TripBasicInfo.Title}}</strong>\n            </div>\n            <div class=\"mb-2\">\n              <strong>Start Date:</strong> \n              <strong>{{formatDate(invoiceData.Trip.TripBasicInfo.StartDateTime)}}</strong>\n            </div>\n            <div class=\"mb-2\">\n              <strong>End Date:</strong> \n              <strong>{{formatDate(invoiceData.Trip.TripBasicInfo.EndDateTime)}}</strong>\n            </div>\n            <div class=\"mb-2\">\n              <strong>From Place:</strong> \n              <strong>{{invoiceData.Trip.TripBasicInfo.FromPlaceName || 'N/A'}}</strong>\n            </div>\n            <div class=\"mb-2\">\n              <strong>To Place:</strong> \n              <strong>{{invoiceData.Trip.TripBasicInfo.ToPlaceName || 'N/A'}}</strong>\n            </div>\n            <div class=\"mb-2\">\n              <strong>Details:</strong><br>\n              <span class=\"text-muted\">{{invoiceData.Trip.TripBasicInfo.Details || 'N/A'}}</span>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"mb-2\">\n              <strong>From Country:</strong> \n              <strong>{{invoiceData.Trip.TripBasicInfo.FromCountryName || 'N/A'}}</strong>\n            </div>\n            <div class=\"mb-2\">\n              <strong>To Country:</strong> \n              <strong>{{invoiceData.Trip.TripBasicInfo.ToCountryName || 'N/A'}}</strong>\n            </div>\n            <div class=\"mb-2\">\n              <strong>Amount:</strong> \n              <strong class=\"text-success\">SAR {{invoiceData.Trip.TripBasicInfo.Amount | number:'1.2-2'}}</strong>\n            </div>\n          </div>\n        </div>\n        <!-- Trip Prices Section -->\n        <div class=\"row mt-3\" *ngIf=\"invoiceData.Trip.tripPrices\">\n          <div class=\"col-md-12\">\n            <hr>\n            <h6 class=\"mb-3\">Trip Pricing</h6>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"mb-2\">\n                  <strong>Actual Amount:</strong> \n                  <strong>SAR {{invoiceData.Trip.tripPrices.ActualAmount | number:'1.2-2'}}</strong>\n                </div>\n                <div class=\"mb-2\">\n                  <strong>Current Amount:</strong> \n                  <strong class=\"text-success\">SAR {{invoiceData.Trip.tripPrices.CurrentAmount | number:'1.2-2'}}</strong>\n                </div>\n                <div class=\"mb-2\">\n                  <strong>Discount Percentage:</strong> \n                  <strong>{{invoiceData.Trip.tripPrices.DiscountPercentage | number:'1.2-2'}}%</strong>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"mb-2\">\n                  <strong>Has Promo:</strong> \n                  <span class=\"badge\" [ngClass]=\"{'badge-success': invoiceData.Trip.tripPrices.HavePromo, 'badge-secondary': !invoiceData.Trip.tripPrices.HavePromo}\">\n                    {{invoiceData.Trip.tripPrices.HavePromo ? 'Yes' : 'No'}}\n                  </span>\n                </div>\n                <div class=\"mb-2\" *ngIf=\"invoiceData.Trip.tripPrices.PromoCode\">\n                  <strong>Promo Code:</strong> \n                  <strong class=\"text-primary\">{{invoiceData.Trip.tripPrices.PromoCode}}</strong>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Operator Information Section -->\n  <div class=\"row mt-3\" *ngIf=\"invoiceData.Operator\">\n    <div class=\"col-md-12\">\n      <div class=\"p-3 mb-3\" style=\"background: #ffff; border-radius: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);\">\n        <h5 class=\"mb-3\">Operator Information</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"mb-2\">\n              <strong>Name:</strong> <strong>{{invoiceData.Operator.Name}}</strong>\n            </div>\n            <div class=\"mb-2\">\n              <strong>Role ID:</strong> <strong>{{invoiceData.Operator.RoleId}}</strong>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"mb-2\">\n              <strong>Email:</strong> <strong>{{invoiceData.Operator.Email}}</strong>\n            </div>\n            <div class=\"mb-2\">\n              <strong>Created Date:</strong> \n              <strong>{{formatDate(invoiceData.Operator.CreatedDate)}}</strong>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Bookings Section -->\n  <div class=\"row mt-3\" *ngIf=\"invoiceData.bookings && invoiceData.bookings.length > 0\">\n    <div class=\"col-md-12\">\n      <div class=\"p-3 mb-3\" style=\"background: #ffff; border-radius: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);\">\n        <h5 class=\"mb-3\">Bookings ({{invoiceData.bookings.length}})</h5>\n        <table class=\"table mb-0\" style=\"background: transparent;\">\n          <thead>\n            <tr style=\"background: #d6f2e6; color: #4b5d52;\">\n              <th style=\"border-top-left-radius: 8px;\">Booking ID</th>\n              <th>Traveller ID</th>\n              <th>No. Persons</th>\n              <th>Total Price</th>\n              <th>Payment Status</th>\n              <th>Payment Amount</th>\n              <th>Merchant Transaction ID</th>\n              <th style=\"border-top-right-radius: 8px;\">Payment Date</th>\n            </tr>\n          </thead>\n          <tbody style=\"background: #fff;\">\n            <tr *ngFor=\"let booking of invoiceData.bookings\" style=\"vertical-align: middle;\">\n              <td>\n                <a routerLink=\"/details/current/{{booking.TId}}\" class=\"text-primary\">\n                  #{{booking.Id}}\n                </a>\n              </td>\n              <td>{{booking.UId}}</td>\n              <td>{{booking.NoPersons}}</td>\n              <td>SAR {{booking.TotalPrice | number:'1.2-2'}}</td>\n              <td>\n                <span class=\"badge badge-success\" *ngIf=\"booking.PaymentStatus === 'Paid'\">\n                  {{booking.PaymentStatus}}\n                </span>\n                <span class=\"badge badge-warning\" *ngIf=\"booking.PaymentStatus !== 'Paid'\">\n                  {{booking.PaymentStatus}}\n                </span>\n              </td>\n              <td>\n                <span *ngIf=\"booking.payment\">\n                  SAR {{booking.payment.AmountRecived | number:'1.2-2'}}\n                </span>\n                <span *ngIf=\"!booking.payment\">-</span>\n              </td>\n              <td>\n                <small *ngIf=\"booking.payment\">{{booking.payment.MerchantTransectionId}}</small>\n                <span *ngIf=\"!booking.payment\">-</span>\n              </td>\n              <td>\n                <span *ngIf=\"booking.payment\">\n                  {{formatDate(booking.payment.Created_at)}}\n                </span>\n                <span *ngIf=\"!booking.payment\">-</span>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"loading\" class=\"text-center py-5\">\n  <p>Loading invoice details...</p>\n</div>\n\n<div *ngIf=\"!loading && !invoiceData\" class=\"text-center py-5\">\n  <p>Invoice not found</p>\n</div>\n\n<!-- Create Invoice Modal -->\n<div class=\"modal fade\" id=\"createInvoiceModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"createInvoiceModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"createInvoiceModalLabel\">Create Invoice</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeCreateInvoiceModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <form [formGroup]=\"invoiceForm\" (ngSubmit)=\"createInvoice()\">\n        <div class=\"modal-body\">\n          <div class=\"form-group\">\n            <label for=\"comments\">Comments</label>\n            <textarea \n              class=\"form-control\" \n              id=\"comments\" \n              formControlName=\"Comments\" \n              rows=\"4\" \n              placeholder=\"Enter comments (optional)\">\n            </textarea>\n          </div>\n          \n          <div class=\"form-group\">\n            <label for=\"attachment\">Attachment</label>\n            <div class=\"custom-file\">\n              <input \n                type=\"file\" \n                class=\"custom-file-input\" \n                id=\"attachment\" \n                (change)=\"onFileSelected($event)\"\n                accept=\"image/*,application/pdf,.doc,.docx\">\n              <label class=\"custom-file-label\" for=\"attachment\">\n                {{ selectedFile ? selectedFile.name : 'Choose file (optional)' }}\n              </label>\n            </div>\n            <small class=\"form-text text-muted\">You can upload images, PDF, or documents</small>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"jero-btn jero-btn-secondary\" data-dismiss=\"modal\" (click)=\"closeCreateInvoiceModal()\">Cancel</button>\n          <button type=\"submit\" class=\"jero-btn jero-btn-success\" [disabled]=\"creatingInvoice\">\n            <span *ngIf=\"creatingInvoice\">Creating...</span>\n            <span *ngIf=\"!creatingInvoice\">Create Invoice</span>\n          </button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/invoices/invoices.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invoices/invoices.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInvoicesInvoicesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"page-content-wrapper\">\n  <div class=\"row\">\n    <div class=\"col-md-12 d-flex justify-content-between align-items-center mb-3\">\n      <h4>My Invoices</h4>\n    </div>\n    \n    <!-- Commission Slab Section -->\n    <div class=\"col-md-12 mb-4\" *ngIf=\"!loadingCommission\">\n      <div class=\"row\">\n        <!-- Left Section: Current Commission Status -->\n        <div class=\"col-md-6\">\n          <div class=\"commission-status-card\">\n            <div class=\"commission-note mb-2\">\n              <strong>Trip Completed trip and status paid</strong>\n            </div>\n            <div class=\"commission-info-item\">\n              <span class=\"commission-label\">Number of Bookings</span>\n              <span class=\"commission-value\">{{ totalBookings }}</span>\n            </div>\n            <div class=\"commission-info-item\">\n              <span class=\"commission-label\">Applied % Slab Commission</span>\n              <span class=\"commission-value\">{{ appliedSlab?.Commission || 0 }}%</span>\n            </div>\n            <div class=\"commission-note mt-3\">\n              <small>Count number of paid bookings for Trip status \"In-Progress, Complete\"</small>\n            </div>\n          </div>\n        </div>\n        \n        <!-- Right Section: Commission Slab Table -->\n        <div class=\"col-md-6\">\n          <div class=\"commission-slab-card\">\n            <div class=\"commission-note mb-2\">\n              <strong>Commission slab.</strong>\n            </div>\n            <div class=\"commission-slab-table\">\n              <table class=\"table table-bordered mb-0\">\n                <thead>\n                  <tr class=\"commission-table-header\">\n                    <th>No of Completed Bookings</th>\n                    <th *ngFor=\"let slab of allSlabs; let i = index\" class=\"text-center\">{{ getSlabRange(slab, i) }}</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr class=\"commission-table-row\">\n                    <td class=\"commission-table-label\">Per Annual</td>\n                    <td *ngFor=\"let slab of allSlabs\" class=\"text-center\">Bookings</td>\n                  </tr>\n                  <tr class=\"commission-table-row\">\n                    <td class=\"commission-table-label\">Commission in Percentage %</td>\n                    <td *ngFor=\"let slab of allSlabs\" class=\"text-center\">{{ slab.Commission }}%</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    \n    <!-- Loading State for Commission -->\n    <div class=\"col-md-12 mb-4\" *ngIf=\"loadingCommission\">\n      <div class=\"text-center py-4\">\n        <div class=\"spinner-border text-primary\" role=\"status\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </div>\n    </div>\n    \n    <div class=\"col-md-12\">\n      <div class=\"p-3 mb-3\" style=\"background: #ffff; border-radius: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);\">\n        <div class=\"row\">\n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <label for=\"yearSelect\">Year</label>\n              <select class=\"form-control\" id=\"yearSelect\" [(ngModel)]=\"selectedYear\" (change)=\"onYearChange()\">\n                <option value=\"\">All Years</option>\n                <option *ngFor=\"let year of yearOptions\" [value]=\"year\">{{year}}</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <label for=\"statusSelect\">Status</label>\n              <select class=\"form-control\" id=\"statusSelect\" [(ngModel)]=\"selectedStatus\" (change)=\"onStatusChange()\">\n                <option value=\"\">All Status</option>\n                <option *ngFor=\"let status of statusOptions\" [value]=\"status.value\">{{status.label}}</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <label for=\"paymentStatusSelect\">Payment Status</label>\n              <select class=\"form-control\" id=\"paymentStatusSelect\" [(ngModel)]=\"selectedPaymentStatus\" (change)=\"onPaymentStatusChange()\">\n                <option value=\"\">All Payment Status</option>\n                <option *ngFor=\"let ps of paymentStatusOptions\" [value]=\"ps\">{{ps}}</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <label for=\"searchInput\">Search</label>\n              <input type=\"text\" class=\"form-control\" id=\"searchInput\" placeholder=\"Search...\" \n                     [(ngModel)]=\"searchText\" (keyup.enter)=\"onSearchKeyPress($event)\" (blur)=\"applyFilters()\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12 text-right\">\n            <button class=\"jero-btn jero-btn-secondary\" (click)=\"clearFilters()\">Clear Filters</button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"py-4\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-12\">\n            <div class=\"p-3\" style=\"background: #ffff; border-radius: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);\">\n              <table class=\"table mb-0\" style=\"background: transparent;\">\n                <thead>\n                  <tr style=\"background: #d6f2e6; color: #4b5d52;\">\n                    <th style=\"border-top-left-radius: 8px;\">Trip Name</th>\n                    <th>Start Date</th>\n                    <th>End Date</th>\n                    <th>From</th>\n                    <th>To</th>\n                    <th>Number of Bookings</th>\n                    <th>Status</th>\n                    <th>Amount</th>\n                    <th>Commission</th>\n                    <th>Payment Status</th>\n                    <th style=\"border-top-right-radius: 8px;\">Action</th>\n                  </tr>\n                </thead>\n                <tbody style=\"background: #fff;\">\n                  <tr *ngFor=\"let item of invoices; let i = index\" \n                      style=\"vertical-align: middle;\">\n                    <td>{{ item.trip?.TripBasicInfo?.Title }}</td>\n                    <td>{{ item.trip?.TripBasicInfo?.StartDateTime | date:'dd-MMM-yyyy' }}</td>\n                    <td>{{ item.trip?.TripBasicInfo?.EndDateTime | date:'dd-MMM-yyyy' }}</td>\n                    <td>{{ item.trip?.TripBasicInfo?.FromPlaceName || 'N/A' }}</td>\n                    <td>{{ item.trip?.TripBasicInfo?.ToPlaceName || 'N/A' }}</td>\n                    <td>{{ item.trip?.TripBasicInfo?.NumberOfBookings || 0 }}</td>\n                    <td>\n                      <span class=\"badge\" [ngClass]=\"{\n                        'badge-success': item.trip?.TripBasicInfo?.TripStatusId === 1,\n                        'badge-primary': item.trip?.TripBasicInfo?.TripStatusId === 2,\n                        'badge-info': item.trip?.TripBasicInfo?.TripStatusId === 3,\n                        'badge-warning': item.trip?.TripBasicInfo?.TripStatusId === 4,\n                        'badge-danger': item.trip?.TripBasicInfo?.TripStatusId === 5\n                      }\">\n                        {{ item.trip?.TripBasicInfo?.TripStatus || 'N/A' }}\n                      </span>\n                    </td>\n                    <td>{{ item.trip?.TripBasicInfo?.Amount | currency:'USD':'symbol':'1.2-2' }}</td>\n                    <td>\n                      <span *ngIf=\"item.commission\">\n                        {{ item.commission.ChargeAmount | currency:'USD':'symbol':'1.2-2' }}\n                      </span>\n                      <span *ngIf=\"!item.commission\">-</span>\n                    </td>\n                    <td>\n                      <span *ngIf=\"item.commission\" [ngClass]=\"getPaymentStatusClass(item.commission.Status)\">\n                        {{ item.commission.Status }}\n                      </span>\n                      <span *ngIf=\"!item.commission\">-</span>\n                    </td>\n                    <td>\n                      <button class=\"jero-btn jero-btn-primary\" \n                              [routerLink]=\"item.commission && item.commission.Id ? '/invoice-details/' + item.commission.Id : '#'\"\n                              [disabled]=\"!item.commission || !item.commission.Id\">View</button>\n                    </td>\n                  </tr>\n                  <tr *ngIf=\"invoices.length === 0\">\n                    <td colspan=\"10\" class=\"text-center py-4\">No invoices found</td>\n                  </tr>\n                </tbody>\n              </table>\n              <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalPages > 0\">\n                <pagination-controls \n                  (pageChange)=\"onPageChange($event)\"\n                  [maxSize]=\"5\"\n                  [directionLinks]=\"true\"\n                  [autoHide]=\"false\"\n                  previousLabel=\"Previous\"\n                  nextLabel=\"Next\">\n                </pagination-controls>\n              </div>\n              <div class=\"text-center mt-2\" *ngIf=\"totalPages > 0\">\n                <small class=\"text-muted\">Page {{p}} of {{totalPages}}</small>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"auth\">\n  <div class=\"public-layout-wrapper\">\n    <div class=\"public-layout-splash\">\n    </div>\n    <div id=\"form_login\" class=\"public-layout-card\">\n        <div class=\"auth-card-inner\">\n          <img src=\"../../assets/img/revamp/logo-header.svg\" alt=\"logo\" class=\"logo-login\">\n            <h4>{{'LOGIN' | translate}}</h4>\n            <p>{{'PLEASE_LOGIN_TO_YOUR_ACCOUNT' | translate}}</p>\n            <ng-container>\n              <form id=\"signIn\" method=\"POST\" [formGroup]=\"loginForm\" (ngSubmit)=\"SingIn()\">\n                <div class=\"tripjero-floating\">\n                    <input type=\"email\"\n  formControlName=\"username\"\n  class=\"form-control\"\n  placeholder=\"{{'ENTER_EMAIL_ADDRESS' | translate}}\"\n  id=\"userEmail\"/>\n                    <label for=\"userEmail\" class=\"float-label\">{{'EMAIL_ADDRESS' | translate}}</label>\n                    <div style=\"font-size:12px;color: red;\" *ngIf=\"loginForm.get('username').invalid && (loginForm.get('username').dirty || loginForm.get('username').touched)\">\n                      <div *ngIf=\"loginForm.get('username').errors?.required\">\n                        {{'EMAIL_REQUIRED' | translate}}\n                      </div>\n                      <div *ngIf=\"loginForm.get('username').errors?.email\">\n                        {{'EMAIL_NOT_VALID' | translate}}\n                      </div>\n                    </div>\n                </div>\n                <div class=\"tripjero-floating\">\n                <input \n                  [type]=\"isHidden ? 'password' : 'text'\"\n                  formControlName=\"Password\"\n                  class=\"form-control\" \n                  placeholder=\"{{'ENTER_PASSWORD' | translate}}\"\n                  id=\"userPass\" />\n                  <label for=\"userPass\" class=\"float-label\">{{'PASSWORD' | translate}}</label>\n                  <span *ngIf=\"loginForm.get('Password').value\" for='icon' class=\"p-viewer\" (click)=\"showHidePassword()\">\n                      <i class=\"fa\" [class]=\"isHidden ? 'fa-eye' : 'fa-eye-slash'\" aria-hidden=\"true\"></i>\n                  </span>\n                  <div style=\"font-size:12px;color: red;\" *ngIf=\"loginForm.get('Password').invalid && (loginForm.get('Password').dirty || loginForm.get('Password').touched)\">\n                    <div *ngIf=\"loginForm.get('Password').errors?.required\">\n                      {{'PASSWORD_REQUIRED' | translate}}\n                    </div>\n                  </div>\n                </div>\n                <div class=\"d-flex justify-content-between align-items-center mb-3\">\n                  <label class=\"custom-control custom-checkbox d-flex align-items-center\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" />\n                    <span class=\"custom-control-label\">{{'REMEMBER_ME' | translate}}</span>\n                  </label>\n                  <a class=\"forget-pass\" (click)=\"goToForgotPassword()\" tabindex=\"-1\">{{'FORGET_PASSWORD' | translate}}</a>\n                </div>\n                <div class=\"d-flex\">\n                  <button\n                  id=\"submitbutton\"\n                    type=\"submit\"\n                    class=\"jero-btn jero-btn-primary mx-auto w-50\"\n                    [disabled]=\"loginForm.invalid\"\n                  >\n                    {{'SIGN_IN' | translate}}\n                  </button>\n                </div>      \n                <div class=\"social-login\">\n                  <p>{{'OR_LOGIN_WITH' | translate}}</p>\n                  <app-socail-logins></app-socail-logins>\n                </div>\n                <div class=\"form-footer\">\n                  <p>{{'DONT_HAVE_ACCOUNT' | translate}} <a class=\"forget-pass\" (click)=\"navigateTo()\">{{'REGISTER_NOW' | translate}}</a></p>\n                </div>\n            </form>\n            </ng-container>\n        </div>\n    </div>\n</div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/mytrips/mytrips.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mytrips/mytrips.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMytripsMytripsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"page-content-wrapper\">\n  <div class=\"row\">\n\n    <div class=\"col-md-12 d-flex justify-content-between align-items-center\">\n      <h4>\n        My Trip\n      </h4>\n      <div class=\"tripjero-floating w-25\">\n        <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Search\"\n          (keyup)=\"searchTrips($event)\" aria-describedby=\"emailHelp\">\n        <label for=\"searchInput\" class=\"float-label\">Search</label>\n      </div>\n    </div>\n    <div class=\"w-100\" style=\"border-radius: 16px;\n    border: 1.333px solid  #DBDDDF;\n    background:  #FFF;\n    padding: 15px;\">\n      <div class=\"col-md-12 p-0\">\n        <ul class=\" nav nav-pills tabing-jero\" role=\"tablist\">\n          <li class=\"nav-item\">\n            <a class=\"jero-btn jero-btn-primary-outlined  active\" data-toggle=\"pill\" href=\"#menu1\">Top Rated Trips</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"jero-btn jero-btn-primary-outlined\" (click)=\"getData('comp')\" data-toggle=\"pill\"\n              href=\"#menu1\">Completed Trips</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"jero-btn jero-btn-primary-outlined\" (click)=\"getData('sch')\" data-toggle=\"pill\"\n              href=\"#menu1\">Schedule\n              Trips</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"jero-btn jero-btn-primary-outlined\" (click)=\"getData('in')\" data-toggle=\"pill\"\n              href=\"#menu1\">Inprogress Trips</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"jero-btn jero-btn-primary-outlined\" (click)=\"getData('hold')\" data-toggle=\"pill\"\n              href=\"#menu1\">Hold\n              Trips</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"jero-btn jero-btn-primary-outlined\" (click)=\"getData('hoddddld')\" data-toggle=\"pill\"\n              href=\"#menu1\">Cancelled</a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-md-12 p-0\">\n        <div class=\"tab-content mb-5 pb-5\">\n          <div id=\"home\" class=\"tab-pane active\">\n            <div class=\"row mt-3\">\n              <div *ngFor=\" let item of totalTripsModal.TopReviews\" class=\"col-md-3 mb-3\">\n                <div class=\"trip-card\">\n                  <a routerLink=\"/tripdetail/{{item.TripBasicInfo.Id}}\" class=\"\">\n                    <img src=\"{{domainUrl}}/{{item.TripBasicInfo.FeaturesImage}}\"\n                      onerror=\"src='./assets/img/photo1.png';\">\n                  </a>\n                  <div class=\"card-content\">\n                    <h3 class=\"card-title\">{{item.TripBasicInfo.Title}}</h3>\n                    <div class=\"card-details\">\n                      <span class=\"detail-item\"\n                        *ngIf=\"item.TripBasicInfo.DiscountPercentage\">{{item.TripBasicInfo.DiscountPercentage}}% OFF\n                        <span *ngIf=\"item.TripBasicInfo.Is_Promo\">+ Promo</span></span>\n                    </div>\n                    <div class=\"card-features\">\n                      <span class=\"feature-item\"><i class=\"fa fa-dollar\"></i><span>Cash On Delivery, Bank\n                          Transfer</span></span>\n                      <span class=\"feature-item\"><i class=\"fa fa-cutlery\"></i> <span>Meals</span></span>\n                      <span class=\"feature-item\"><i class=\"fa fa-user\"></i> <span>Guide</span></span>\n                      <span class=\"feature-item\"><i class=\"fa fa-bus\"></i> <span>Transport</span></span>\n                    </div>\n                    <div class=\"card-info\">\n                      <span class=\"info-item\">\n                        <i class=\"fa fa-calendar\" style=\"color: rgba(0, 169, 145, 1);\"></i>\n                        <span>{{item.TripBasicInfo.StartDateTime |\n                          date:'dd-MMM-yyyy'}}</span>\n                      </span>\n                      <span class=\"info-item\">\n                        <i class=\"fa fa-clock-o\" style=\"color: rgba(255, 174, 6, 1)\"></i>\n                        <span>{{item.TripBasicInfo.Duration}}\n                          Day</span>\n                      </span>\n                      <span class=\"info-item\">\n                        <i class=\"fa fa-map-marker\" style=\"color: rgba(220, 16, 16, 1)\"></i>\n                        <span>{{item.TripBasicInfo.FromPlaceName}}</span>\n                      </span>\n                    </div>\n                    <div class=\"card-price\">\n                      <span class=\"price-text\"><img src=\"../../assets/img/revamp/riyal.svg\"\n                          style=\"filter: invert(28%) sepia(98%) saturate(747%) hue-rotate(132deg) brightness(97%) contrast(101%); width: 16px; margin-top: -3px;\"\n                          alt=\"\"> {{item.TripBasicInfo.Amount | number}}<span>/- Per Person</span></span>\n                    </div>\n                  </div>\n                </div>\n                <!-- <div class=\"main-card pr-2  main-card-border rounded\">\n                  <div class=\"card-wrapper  justify-content-between\">\n                    <div class=\"img\">\n                      <a routerLink=\"/tripdetail/{{item.TripBasicInfo.Id}}\" class=\"\">\n                        <img src=\"{{domainUrl}}/{{item.TripBasicInfo.FeaturesImage}}\"\n                          onerror=\"src='./assets/img/photo1.png';\" class=\"media-object media-object-image m-2\">\n                      </a>\n                    </div>\n                    <div class=\"media-body content-wrapper\">\n                      <h6 class=\"media-heading mt-3\">{{item.TripBasicInfo.Title}}</h6>\n                      <div class=\"discount-name \">\n                        <h5 *ngIf=\"item.TripBasicInfo.DiscountPercentage\">{{item.TripBasicInfo.DiscountPercentage}}% OFF\n                        </h5>\n                        <h5 *ngIf=\"item.TripBasicInfo.Is_Promo\">+ Promo</h5>\n                      </div>\n                      <div class=\"blue-bar\">\n                        <div class=\"d-flex justify-content-around\">\n                          <div class=\"sub-menu\">\n                            <img src=\"./assets/img/dashboard/png-icons/c.png\">\n                            <span class=\"menu-title\">Start on {{item.TripBasicInfo.StartDateTime |\n                              date:'longDate'}}</span>\n                          </div>\n                          <div class=\"sub-menu\">\n                            <img src=\"./assets/img/dashboard/png-icons/d.png\">\n                            <span class=\"menu-title\">Duration: {{item.TripBasicInfo.Duration}} days</span>\n                          </div>\n                          <div class=\"sub-menu\">\n                            <img src=\"./assets/img/dashboard/png-icons/l.png\">\n                            <span class=\"menu-title\">{{item.TripBasicInfo.FromPlaceName}}</span>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col-md-4 pl-1  mt-1\">\n                          <div class=\"box-bar p-2 pb-3 w-100\">\n                            <h6 class=\"p-1 price-text\"> <span>Rs.</span> {{item.TripBasicInfo.Amount}}</h6>\n                            <a class=\"per-person-btn ml-3 p-1\"> per person</a>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div> -->\n              </div>\n            </div>\n          </div>\n          <div id=\"menu1\" class=\"tab-pane fade\">\n            <div class=\"row mt-3\">\n              <div *ngFor=\" let item of displayingtrips.slice().reverse()\" class=\"col-md-3 mb-3\">\n                <div class=\"trip-card\">\n                  <a routerLink=\"/tripdetail/{{item.TripBasicInfo.Id}}\" class=\"\">\n                    <img src=\"{{domainUrl}}/{{item.TripBasicInfo.FeaturesImage}}\"\n                      onerror=\"src='./assets/img/photo1.png';\">\n                  </a>\n                  <div class=\"card-content\">\n                    <h3 class=\"card-title\">{{item.TripBasicInfo.Title}}</h3>\n                    <div class=\"card-details\">\n                      <span class=\"detail-item\"\n                        *ngIf=\"item.TripBasicInfo.DiscountPercentage\">{{item.TripBasicInfo.DiscountPercentage}}% OFF\n                        <span *ngIf=\"item.TripBasicInfo.Is_Promo\">+ Promo</span></span>\n                    </div>\n                    <div class=\"card-features\">\n                      <span class=\"feature-item\"><i class=\"fa fa-dollar\"></i><span>Cash On Delivery, Bank\n                          Transfer</span></span>\n                      <span class=\"feature-item\"><i class=\"fa fa-cutlery\"></i> <span>Meals</span></span>\n                      <span class=\"feature-item\"><i class=\"fa fa-user\"></i> <span>Guide</span></span>\n                      <span class=\"feature-item\"><i class=\"fa fa-bus\"></i> <span>Transport</span></span>\n                    </div>\n                    <div class=\"card-info\">\n                      <span class=\"info-item\">\n                        <i class=\"fa fa-calendar\" style=\"color: rgba(0, 169, 145, 1);\"></i>\n                        <span>{{item.TripBasicInfo.StartDateTime |\n                          date:'dd-MMM-yyyy'}}</span>\n                      </span>\n                      <span class=\"info-item\">\n                        <i class=\"fa fa-clock-o\" style=\"color: rgba(255, 174, 6, 1)\"></i>\n                        <span>{{item.TripBasicInfo.Duration}}\n                          Day</span>\n                      </span>\n                      <span class=\"info-item\">\n                        <i class=\"fa fa-map-marker\" style=\"color: rgba(220, 16, 16, 1)\"></i>\n                        <span>{{item.TripBasicInfo.FromPlaceName}}</span>\n                      </span>\n                    </div>\n                    <div class=\"card-price\">\n                      <span class=\"price-text\"><img src=\"../../assets/img/revamp/riyal.svg\"\n                          style=\"filter: invert(28%) sepia(98%) saturate(747%) hue-rotate(132deg) brightness(97%) contrast(101%); width: 16px; margin-top: -3px;\"\n                          alt=\"\"> {{item.TripBasicInfo.Amount | number}}<span>/- Per Person</span></span>\n                    </div>\n                  </div>\n                </div>\n                <!-- <div class=\"main-card pr-2  main-card-border rounded\">\n                  <div class=\"card-wrapper  justify-content-between\">\n                    <div class=\"img\">\n                      <a routerLink=\"/tripdetail/{{item.TripBasicInfo.Id}}\" class=\"\">\n                        <img src=\"{{domainUrl}}/{{item.TripBasicInfo.FeaturesImage}}\"\n                          onerror=\"src='./assets/img/photo1.png';\" class=\"media-object media-object-image m-2\">\n                      </a>\n                    </div>\n                    <div class=\"media-body content-wrapper\">\n                      <h6 class=\"media-heading mt-3\">{{item.TripBasicInfo.Title}}</h6>\n                      <div class=\"discount-name \">\n                        <h5 *ngIf=\"item.TripBasicInfo.DiscountPercentage\">{{item.TripBasicInfo.DiscountPercentage}}% OFF\n                        </h5>\n                        <h5 *ngIf=\"item.TripBasicInfo.Is_Promo\">+ Promo</h5>\n                      </div>\n                      <div class=\"blue-bar\">\n                        <div class=\"d-flex justify-content-around\">\n                          <div class=\"sub-menu\">\n                            <img src=\"./assets/img/dashboard/png-icons/c.png\">\n                            <span class=\"menu-title\">Start on {{item.TripBasicInfo.StartDateTime |\n                              date:'longDate'}}</span>\n                          </div>\n                          <div class=\"sub-menu\">\n                            <img src=\"./assets/img/dashboard/png-icons/d.png\">\n                            <span class=\"menu-title\">Duration: {{item.TripBasicInfo.Duration}} days</span>\n                          </div>\n                          <div class=\"sub-menu\">\n                            <img src=\"./assets/img/dashboard/png-icons/l.png\">\n                            <span class=\"menu-title\">{{item.TripBasicInfo.FromPlaceName}}</span>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col-md-4 pl-1  mt-1\">\n                          <div class=\"box-bar p-2 pb-3 w-100\">\n                            <h6 class=\"p-1 price-text\"> <span>Rs.</span> {{item.TripBasicInfo.Amount}}</h6>\n                            <a class=\"per-person-btn ml-3 p-1\"> per person</a>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div> -->\n              </div>\n            </div>\n            <div id=\"menu1\" class=\"container tab-pane fade\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/offer-management/ItineraryPlane/ItineraryPlane.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/offer-management/ItineraryPlane/ItineraryPlane.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOfferManagementItineraryPlaneItineraryPlaneComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<fieldset>\n  <div class=\"row\">\n    <ng-container *ngFor=\"let item of IternaryPlanList; let i = index\">\n      <div [ngClass]=\"{'col-md-12': IternaryPlanList.length < 2, 'col-md-6': IternaryPlanList.length > 1}\" class=\"form-control-box ml-4 mt-4 mb-3\">\n        <div class=\"form-group custom-input-border\">\n          <label for=\"exampleInputEmail1\" class=\"\">{{ item.DayName }}</label>\n          <div class=\"d-flex justify-content-end\">\n            <div class=\"actions-to-day d-flex align-items-center\">\n              <span class=\"jero-btn jero-btn-primary-outlined\">\n                <i (click)=\"shoEditDayTitle(i)\" class=\"fa fa-pencil\"></i>\n              </span>\n              <a data-toggle=\"modal\" class=\"jero-btn jero-btn-primary-outlined\" [attr.data-target]=\"'#dayItems' + i\">\n                <i class=\"fa fa-plus\"></i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row\" id=\"editDayTitle_{{ i }}\" style=\"display: none;\">\n            <div class=\"col-md-10\">\n              <div class=\"tripjero-floating\">\n                <input type=\"text\" [(ngModel)]=\"item.DayName\" maxlength=\"100\" placeholder=\" \" id=\"editDayTitle_{{ i }}\"\n                  class=\"form-control\">\n                <label for=\"editDayTitle_{{ i }}\" class=\"float-label form-bg-surface\">{{ 'DAY_NAME' | translate }}</label>\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <span class=\"jero-btn jero-btn-primary-outlined\" (click)=\"shoEditDayTitle(i, 'hide')\">\n                <i class=\"fa fa-check-circle\"></i>\n              </span>\n            </div>\n          </div>\n        </div>\n        <ng-container *ngFor=\"let daySupply of item.DayPlan; let j = index\">\n          <div class=\"row\">\n            <div class=\"col col-12\">\n              <div class=\"col-sm-6 col-lg-8\">\n                <a class=\"intititle\"> {{ daySupply.TaskDetaisl }}</a>\n              </div>\n              <div class=\"col-sm-6 col-lg-4\">\n                <a class=\"remove-icon\"><i style=\"cursor: pointer; color: red;\" (click)=\"remoDayItems(i, j)\"\n                    class=\"fa fa-remove\"></i></a>\n              </div>\n            </div>\n          </div>\n        </ng-container>\n        <!-- Model Load ========================================== -->\n        <div class=\"modal fade\" id=\"dayItems{{ i }}\" style=\"display: none; border-radius: 16px;\">\n          <div class=\"modal-dialog modal-dialog-center modal-lg\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header w-100\">\n                <div class=\"d-flex justify-content-between align-items-center w-100\">\n                  <h4 class=\"modal-title\">{{'DAY_ITEMS' | translate}}</h4>\n                  <button type=\"button\" class=\"close\" (click)=\"hideModel(i)\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                  </button>\n                </div>\n              </div>\n              <div class=\"modal-body\">\n                <div class=\"tripjero-floating\">\n                  <textarea (keyup)=\"checkCharacterLength($event)\" class=\"form-control\"\n                    style=\"height: 120px; width: 100%;\" [(ngModel)]=\"dayDetail\" #dayDetails [class.is-invalid]=\"isError\"></textarea>\n                  <label for=\"dayDetail\" class=\"float-label\">{{'DAY_DETAIL' | translate}}</label>\n                </div>\n                <div *ngIf=\"isError\" class=\"invalid-feedback d-block\">{{'FIELD_REQUIRED' | translate}}</div>\n                <span style=\"color: red;\" *ngIf=\"isLengthy\">{{'MAX_1000_CHARACTERS' | translate}}</span>\n                <span class=\"align-right\" style=\"color: #00A991 !important; font-size: 12px;\">{{ charLength\n                  }}/1000</span>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"jero-btn jero-btn-primary pull-left\" (click)=\"hideModel(i)\">\n                  {{'CLOSE' | translate}}\n                </button>\n                <button type=\"button\" class=\"jero-btn jero-btn-primary-outlined\" [disabled]=\"isLengthy || !charLength\"\n                  (click)=\"addDayItems(i, dayDetails)\">\n                  {{'ADD' | translate}}\n                </button>\n              </div>\n            </div>\n            <!-- /.modal-content -->\n          </div>\n          <!-- /.modal-dialog -->\n        </div>\n        <!-- End Model Load ========================================== -->\n      </div>\n    </ng-container>\n  </div>\n</fieldset>\n<div>\n  <button class=\"jero-btn jero-btn-primary mr-2\" mat-button matStepperPrevious>{{'BACK' | translate}}</button>\n  <button class=\"jero-btn jero-btn-primary-outlined\" (click)=\"submistAsDraft()\">{{'NEXT' | translate}}</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/offer-management/offer-management.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/offer-management/offer-management.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOfferManagementOfferManagementComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"tab-container\">\n  <div class=\"tab-header\">\n    <div class=\"tab-buttons\">\n      <button\n        class=\"tab-button\"\n        [class.active]=\"activeTab === 'itineraries'\"\n        (click)=\"setActiveTab('itineraries')\"\n      >\n        {{ 'ITINERARIES' | translate }}\n        <i *ngIf=\"itineraryError\" class=\"fa fa-exclamation-circle fa-lg tab-error-icon\"></i>\n      </button>\n      <button\n        class=\"tab-button\"\n        [class.active]=\"activeTab === 'facilities'\"\n        (click)=\"setActiveTab('facilities')\"\n      >\n        {{ 'FACILITIES' | translate }}\n        <i *ngIf=\"facilitiesError\" class=\"fa fa-exclamation-circle fa-lg tab-error-icon\"></i>\n      </button>\n      <button\n        class=\"tab-button\"\n        [class.active]=\"activeTab === 'offer'\"\n        (click)=\"setActiveTab('offer')\"\n      >\n        {{ 'OFFER' | translate }}\n        <i *ngIf=\"offerError\" class=\"fa fa-exclamation-circle fa-lg tab-error-icon\"></i>\n      </button>\n    </div>\n  </div>\n\n  <div class=\"tab-content\" style=\"background-color: transparent; box-shadow: none;\">\n    <div *ngIf=\"activeTab === 'itineraries'\">\n      <fieldset>\n        <div class=\"row\" *ngIf=\"itineraryForm\">\n          <form [formGroup]=\"itineraryForm\" class=\"w-100\">\n            <div formArrayName=\"days\" class=\"row\">\n              <ng-container *ngFor=\"let day of days.controls; let i = index\">\n                <div class=\"col-md-6\">\n                  <div [formGroupName]=\"i\" class=\"form-control-box\">\n                    <div class=\"form-group custom-input-border\">\n                      <div\n                        class=\"d-flex justify-content-between align-items-center\"\n                      >\n                        <h5 class=\"day-title\">{{ 'DAY' | translate }} {{ i + 1 }}</h5>\n                        <a\n                          (click)=\"openTaskModal(i)\"\n                          class=\"jero-btn jero-btn-primary-outlined ml-2\"\n                        >\n                          <i class=\"fa fa-plus\"></i>\n                        </a>\n                      </div>\n                    </div>\n\n                    <div\n                      class=\"day-plan-container\"\n                      *ngIf=\"getDayPlan(i).controls.length > 0\"\n                    >\n                      <div formArrayName=\"DayPlan\">\n                        <ng-container\n                          *ngFor=\"\n                            let task of getDayPlan(i).controls;\n                            let j = index\n                          \"\n                        >\n                          <div [formGroupName]=\"j\" class=\"task-item\">\n                            <p class=\"intititle\">\n                              {{ task.get(\"TaskDetaisl\").value }}\n                            </p>\n                            <a (click)=\"removeTask(i, j)\" class=\"remove-icon\"\n                              ><i\n                                style=\"cursor: pointer\"\n                                class=\"fa fa-remove\"\n                              ></i\n                            ></a>\n                          </div>\n                        </ng-container>\n                      </div>\n                    </div>\n\n                    <!-- New \"No tasks\" message -->\n                    <div\n                      class=\"no-tasks-message\"\n                      *ngIf=\"getDayPlan(i).controls.length === 0\"\n                    >\n                      <p>{{ 'NO_TASKS_MESSAGE' | translate }}</p>\n                    </div>\n                  </div>\n                </div>\n              </ng-container>\n            </div>\n\n            <!-- Single Modal -->\n            <div class=\"modal fade\" id=\"taskModal\" tabindex=\"-1\" role=\"dialog\">\n              <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                    <h5 class=\"modal-title\">{{ 'ADD_TASK_FOR' | translate:{dayName: days.controls[currentDayIndex]?.get('DayName').value} }}</h5>\n                    <button\n                      type=\"button\"\n                      class=\"close\"\n                      data-dismiss=\"modal\"\n                      aria-label=\"Close\"\n                    >\n                      <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                  </div>\n                  <div class=\"modal-body\">\n                    <div class=\"tripjero-floating w-100\">\n                      <textarea\n                        class=\"form-control\"\n                        #taskDetailsInput\n                        [class.is-invalid]=\"taskModalError && taskDetailsInput.value.trim() === ''\"\n                      ></textarea>\n                      <label class=\"float-label form-bg-surface\"\n                        >{{ 'TASK_DETAILS' | translate }}</label\n                      >\n                    </div>\n                    <div *ngIf=\"taskModalError && taskDetailsInput.value.trim() === ''\" class=\"invalid-feedback d-block\">\n                      {{ 'FIELD_REQUIRED' | translate }}\n                    </div>\n                  </div>\n                  <div class=\"modal-footer\">\n                    <button\n                      type=\"button\"\n                      class=\"jero-btn jero-btn-secondary\"\n                      data-dismiss=\"modal\"\n                    >\n                      {{ 'CLOSE' | translate }}\n                    </button>\n                    <button\n                      type=\"button\"\n                      class=\"jero-btn jero-btn-primary\"\n                      (click)=\"addTaskFromModal(taskDetailsInput)\"\n                    >\n                      {{ 'ADD' | translate }}\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </fieldset>\n    </div>\n\n    <div *ngIf=\"activeTab === 'facilities'\">\n      <fieldset>\n        <div class=\"row my-3\">\n          <ng-container *ngFor=\"let item of facilities; let i = index\">\n            <div class=\"col-md-4 my-4\">\n              <div class=\"custom-row-box custom-input-border\">\n                <h6 class=\"label-icon\">\n                  <img class=\"pt-0 pr-2\" src=\"./assets/img/fac_blue/{{item.icon_string}}.png\" height=\"36\"\n                    alt=\"{{item.title}}\" />\n                  {{ item.title }}\n                </h6>\n                <div class=\"toggle-button-third \">\n                  <div class=\"button-cover\">\n                    <div class=\"button r\" id=\"button-1\">\n                      <input type=\"checkbox\" class=\"checkbox\" id=\"mainTitle_{{ i }}\"\n                        (click)=\"showSubChild(i, $event, item.title)\" [(ngModel)]=\"item.flag\">\n                      <div class=\"knobs\"></div>\n                      <div class=\"layer\"></div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-11 form-service-box \" *ngIf=\"item.havesub\"\n                [ngStyle]=\"{ display: item.flag ? 'block' : 'none' }\" id=\"subItem_{{ i }}\">\n                <ng-container *ngFor=\"let firstChild of item.child; let sI = index\">\n                  <div class=\"row-box mb-2 custom-input-border\">\n                    <h6 class=\"label-icon\">\n                      <img class=\"pt-0 pr-2\" src=\"./assets/img/fac_blue/{{firstChild.icon_string}}.png\" height=\"36\"\n                        alt=\"{{firstChild.title}}\" />\n                      {{ firstChild.title }}\n                    </h6>\n                    <ng-container *ngIf=\"item.title == 'Accommodation'\">\n                      <div class=\"toggle-button-cover mr-4\">\n                        <div class=\"button-inner-cover\">\n                          <div class=\"button r\" id=\"button-1\">\n                            <input id=\"firstChildLableAcco_{{ sI }}\"\n                              (click)=\"showSecendChild(sI + i, $event, sI, item.child.length, 'accomodation')\"\n                              [(ngModel)]=\"firstChild.flag\" type=\"checkbox\" class=\"checkbox\">\n                            <div class=\"knobs\"></div>\n                            <div class=\"layer\"></div>\n                          </div>\n                        </div>\n                      </div>\n                    </ng-container>\n                    <ng-container *ngIf=\"item.title == 'Transportation'\">\n                      <div class=\"toggle-button-cover mr-4\">\n                        <div class=\"button-inner-cover\">\n                          <div class=\"button r\" id=\"button-1\">\n                            <input id=\"firstChildLable_{{ sI }}\"\n                              (click)=\"showSecendChild(sI + i, $event, sI, item.child.length, 'transport')\"\n                              [(ngModel)]=\"firstChild.flag\" type=\"checkbox\" class=\"checkbox\" />\n                            <div class=\"knobs\"></div>\n                            <div class=\"layer\"></div>\n                          </div>\n                        </div>\n                      </div>\n                    </ng-container>\n                    <ng-container *ngIf=\"item.title == 'Meal'\">\n                      <div class=\"toggle-button-cover mr-4\">\n                        <div class=\"button-inner-cover\">\n                          <div class=\"button r\" id=\"button-1\">\n                            <input id=\"firstChildLableMeal_{{ sI }}\"\n                              (click)=\"showSecendChild(sI + i, $event, sI, item.child.length, 'meal')\"\n                              [(ngModel)]=\"firstChild.flag\" type=\"checkbox\" class=\"checkbox\">\n                            <div class=\"knobs\"></div>\n                            <div class=\"layer\"></div>\n                          </div>\n                        </div>\n                      </div>\n                    </ng-container>\n                  </div>\n                  <div class=\"d-flex justify-content-center\">\n                    <div *ngIf=\"firstChild.havesub\" [ngStyle]=\"{ display: firstChild.flag ? 'block' : 'none' }\"\n                      id=\"secendChild_{{ sI + i }}\">\n                      <label *ngFor=\"let secendChild of firstChild.child; let ij = index\" class=\"mr-1 ml-1\">\n                        <input class=\"mr-1\" type=\"radio\" name=\"starts\" id=\"secendChidl_{{ ij }}\"\n                          (click)=\"onHotelStarCLick(secendChild.title)\" /><span>{{ secendChild.title }} {{ 'STAR' | translate}}</span>\n                      </label>\n                    </div>\n                  </div>\n                </ng-container>\n              </div>\n            </div>\n          </ng-container>\n        </div>\n        <div class=\"add-facility-container\">\n          <div class=\"tripjero-floating w-100\">\n            <input placeholder=\"{{ 'ENTER_CUSTOM_SERVICES' | translate }}\" #titleOfFacility type=\"text\"\n              class=\"form-control\" [class.is-invalid]=\"isError && titleOfFacility.value.trim() === ''\" />\n            <label style=\"background: #F3F5EA;\" class=\"float-label\">{{ 'ENTER_CUSTOM_SERVICES_LABEL' | translate }}</label>\n          </div>\n          <a (click)=\"addNewFacility(titleOfFacility)\" class=\"jero-btn jero-btn-primary add-facility-btn\"><i class=\"fa fa-plus\"></i> {{ 'ADD' | translate }}</a>\n        </div>\n        <div *ngIf=\"isError\" class=\"invalid-feedback d-block\">\n          {{ 'FIELD_REQUIRED' | translate }}\n        </div>\n      </fieldset>\n    </div>\n\n    <div *ngIf=\"activeTab === 'offer'\">\n      <div class=\"offer-form-container\">\n        <div class=\"offer-form-card\">\n          <h4 class=\"form-title\">{{ 'SUBMIT_REVISE_OFFER' | translate }}</h4>\n          <form [formGroup]=\"offerForm\" (ngSubmit)=\"submitOffer()\">\n            \n            <!-- Offer Price -->\n            <div class=\"tripjero-floating\">\n              <input type=\"number\" id=\"offerPrice\" formControlName=\"OfferPrice\" class=\"form-control\" placeholder=\"e.g., 3000\" required \n                     [class.is-invalid]=\"offerForm.get('OfferPrice')?.invalid && offerForm.get('OfferPrice')?.touched\">\n              <label for=\"offerPrice\" class=\"float-label\">{{ 'OFFER_PRICE' | translate }}</label>\n              <div *ngIf=\"offerForm.get('OfferPrice')?.invalid && offerForm.get('OfferPrice')?.touched\" class=\"invalid-feedback\">\n                {{ 'OFFER_PRICE_REQUIRED' | translate }}\n              </div>\n            </div>\n      \n            <!-- Note -->\n            <div class=\"tripjero-floating\">\n              <textarea id=\"note\" formControlName=\"Note\" class=\"form-control\" placeholder=\"Add a descriptive note for the offer...\" required\n                        [class.is-invalid]=\"offerForm.get('Note')?.invalid && offerForm.get('Note')?.touched\"></textarea>\n              <label for=\"note\" class=\"float-label\">{{ 'NOTE' | translate }}</label>\n              <div *ngIf=\"offerForm.get('Note')?.invalid && offerForm.get('Note')?.touched\" class=\"invalid-feedback\">\n                <div *ngIf=\"offerForm.get('Note')?.errors?.required\">{{ 'NOTE_REQUIRED' | translate }}</div>\n                <div *ngIf=\"offerForm.get('Note')?.errors?.minlength\">{{ 'NOTE_MIN_LENGTH' | translate }}</div>\n              </div>\n            </div>\n      \n            <!-- Custom File Attachment -->\n            <div class=\"form-group\">\n              <label for=\"file\" class=\"file-input-label\">\n                <i class=\"fa fa-paperclip\"></i>\n                <span>{{ selectedFile ? selectedFile.name : ('CHOOSE_ATTACHMENT' | translate) }} (Optional)</span>\n              </label>\n              <input type=\"file\" id=\"file\" (change)=\"onFileSelected($event)\" class=\"file-input-hidden\">\n              <div *ngIf=\"offerForm.get('File')?.invalid && offerForm.get('File')?.touched\" class=\"invalid-feedback d-block\">\n                {{ 'ATTACHMENT_REQUIRED' | translate }}\n              </div>\n            </div>\n      \n            <!-- Form Actions -->\n            <div class=\"form-actions\">\n              <button type=\"button\" class=\"jero-btn jero-btn-secondary\" (click)=\"cancel()\">{{ 'CANCEL' | translate }}</button>\n              <button type=\"submit\" class=\"jero-btn jero-btn-primary\">{{ (isRevisedOffer ? 'REVISE_OFFER' : 'SUBMIT_OFFER') | translate }}</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pkgdetails/pkgdetails.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pkgdetails/pkgdetails.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPkgdetailsPkgdetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"content\">\n\n    <!-- Default box -->\n    <div class=\"box\">\n        <div class=\"box-header with-border\">\n            <h3 class=\"box-title\">{{ 'SUBSCRIPTION' | translate }}</h3>\n\n            <div class=\"box-tools pull-right\">\n                <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\" data-toggle=\"tooltip\"\n                    title=\"{{ 'COLLAPSE' | translate }}\">\n                    <i class=\"fa fa-minus\"></i>\n                </button>\n                <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"remove\" data-toggle=\"tooltip\"\n                    title=\"{{ 'REMOVE' | translate }}\">\n                    <i class=\"fa fa-times\"></i>\n                </button>\n            </div>\n        </div>\n        <div class=\"box-body\">\n\n\n            <section class=\"content\">\n                <div class=\"row\">\n                    <!-- <div class=\"col-lg-12\" style=\"margin-top: 20px;\">\n                        <div class=\"ibox\">\n                            <div class=\"ibox-body\">\n                                <div class=\"flexbox mb-12\">\n                                    <div>\n                                        <h3 class=\"m-0\"></h3>\n                                    </div>\n                               </div>\n                            </div>\n                        </div>\n                    </div> -->\n                </div>\n                <div role=\"row tabpanel\" class=\"tab-pane active\" id=\"home\">\n\n\n                    <ng-container *ngIf=\"operatorPackage\">\n                        <div id=\"card\" class=\"card col-sm-12 col-md-6 col-lg-6 \">\n                            <h3> <strong>{{ 'YOUR_CURRENT_PACKAGE' | translate }}</strong></h3>\n                            <div class=\"card__body\">\n                                <table class=\"card__list sub\" style=\"margin-top: 30px;\">\n                                    <tr *ngIf=\"operatorPackage?.PackgeName\">\n                                        <td class=\"c-main\"><strong>{{ 'PACKAGE_NAME' | translate }}</strong></td>\n                                        <td>{{operatorPackage.PackgeName}}</td>\n                                    </tr>\n\n                                </table>\n\n\n                            </div>\n                            <div>\n                                <div class=\"c-main\">Details:</div>\n                                <tr *ngFor=\"let item of operatorPackage?.PackageDetaisl\">\n                                  <td *ngIf=\"item.Details\">{{item.Details}}</td>\n                              </tr>\n                              </div>\n                        </div>\n                    </ng-container>\n                </div>\n                <div class=\" row col-md-12 col-lg-12\">\n                    <h4 style=\"margin-left: 30%;\">{{ 'SEE_MORE_PACKAGES' | translate }}\n                        <a routerLink=\"/avalpkg\">{{ 'UPGRADE_YOUR_SUBSCRIPTION' | translate }}</a></h4>\n                </div>\n\n\n\n\n\n                <!-- /.row -->\n            </section>\n\n\n\n        </div>\n        <!-- /.box-body -->\n        <div class=\"box-footer\">\n            <p>\n            </p>\n\n        </div>\n        <!-- /.box-footer-->\n    </div>\n    <!-- /.box -->\n\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pkginvoice/pkginvoice.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pkginvoice/pkginvoice.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPkginvoicePkginvoiceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"content\">\n  <!-- Default box -->\n  <div class=\"box\">\n    <div class=\"box-header with-border\">\n      <h3 class=\"box-title\">Subscription</h3>\n\n      <div class=\"box-tools pull-right\">\n        <button\n          type=\"button\"\n          class=\"btn btn-box-tool\"\n          data-widget=\"collapse\"\n          data-toggle=\"tooltip\"\n          title=\"Collapse\"\n        >\n          <i class=\"fa fa-minus\"></i>\n        </button>\n        <button\n          type=\"button\"\n          class=\"btn btn-box-tool\"\n          data-widget=\"remove\"\n          data-toggle=\"tooltip\"\n          title=\"Remove\"\n        >\n          <i class=\"fa fa-times\"></i>\n        </button>\n      </div>\n    </div>\n    <div class=\"box-body\">\n      <section class=\"content\">\n        <div class=\"container\">\n          <div style=\"text-align: center;\">\n            <img\n              style=\"width: 250px;height: 60px;\"\n              src=\"../assets/img/onlytripjero.png\"\n            />\n          </div>\n\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <div class=\"row mb-4\">\n                <div class=\"col-sm-6\">\n                  <h6 class=\"mb-3\">From:</h6>\n                  <div>\n                    <strong>TripJero</strong>\n                  </div>\n                  <div>Madalinskiego 8</div>\n                  <div>71-101 Szczecin, Poland</div>\n                  <div>Email: info@webz.com.pl</div>\n                  <div>Phone: +48 444 666 3333</div>\n                </div>\n              </div>\n\n              <!-- table section -->\n              <br /><br />\n              <div class=\"table-responsive-sm\">\n                <table class=\"table\">\n                  <thead>\n                    <tr>\n                      <th class=\"center\">#</th>\n                      <th>Package Title</th>\n                      <th>Post Limit /24hrs</th>\n\n                      <th class=\"right\">Unit Cost</th>\n\n                      <th class=\"right\">Total</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td class=\"center\">1</td>\n                      <td class=\"left strong\">\n                        {{ availableOperatorPackage.Name }}\n                      </td>\n                      <td class=\"left\">\n                        {{ availableOperatorPackage.LimitaionTrips }} trip post\n                      </td>\n\n                      <td class=\"right\">\n                        RS {{ availableOperatorPackage.Price | number }}\n                      </td>\n                    </tr>\n\n                    <tr>\n                      <td class=\"center\"></td>\n                      <td class=\"left strong\"></td>\n                      <td class=\"left\"></td>\n                    </tr>\n\n                    <tr>\n                      <td class=\"center\"></td>\n                      <td class=\"left strong\"></td>\n                      <td class=\"left\"></td>\n\n                      <td class=\"right\"><strong>Discount</strong></td>\n\n                      <td class=\"right\">\n                        <div *ngIf=\"!availableOperatorPackage.IS_Discount\">\n                          0\n                        </div>\n                        <div *ngIf=\"availableOperatorPackage.IS_Discount\">\n                          {{ availableOperatorPackage.Discount }}\n                        </div>\n                      </td>\n                    </tr>\n\n                    <tr>\n                      <td class=\"center\"></td>\n                      <td class=\"left strong\"></td>\n                      <td class=\"left\"></td>\n\n                      <td class=\"right\"><strong>PROMO Discount</strong></td>\n\n                      <td class=\"right\">0</td>\n                    </tr>\n\n                    <tr>\n                      <td class=\"center\"></td>\n                      <td class=\"left strong\"></td>\n                      <td class=\"left\"></td>\n\n                      <td class=\"right\"><strong>Total</strong></td>\n\n                      <td class=\"right\">{{ totaCurrentAccount }}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n\n              <!-- total -->\n            </div>\n          </div>\n        </div>\n      </section>\n    </div>\n    <!-- /.box-body -->\n    <div class=\"box-footer\">\n      <div class=\"box box-primary\">\n        <div class=\"col-md-6\"></div>\n\n        <div class=\"box-footer\">\n          <button\n            type=\"submit\"\n            id=\"btnsubmit\"\n            style=\"margin-left: 10px;\"\n            class=\"btn btn-primary\"\n            (click)=\"SubscribePackage()\"\n            >\n            Buy Package\n          </button>\n        </div>\n        <div class=\"box-footer\"></div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"box-body\">\n          <div class=\"form-group\"></div>\n        </div>\n        <!-- /.box-body -->\n      </div>\n    </div>\n  </div>\n  <!-- /.box-footer-->\n  <!-- /.box -->\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/posttrip/TripItinerary/Facilities/facilities-trip/facilities-trip.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posttrip/TripItinerary/Facilities/facilities-trip/facilities-trip.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPosttripTripItineraryFacilitiesFacilitiesTripFacilitiesTripComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<fieldset>\n  <div class=\"row my-3\">\n    <ng-container *ngFor=\"let item of facilities; let i = index\">\n      <div class=\"col-md-4 my-4\">\n        <div class=\"custom-row-box custom-input-border\">\n          <h6 class=\"label-icon\">\n            <img class=\"pt-0 pr-2\" src=\"./assets/img/fac_blue/{{item.icon_string}}.png\" height=\"36\"\n              alt=\"{{item.title}}\" />\n            {{ item.title }}\n          </h6>\n          <div class=\"toggle-button-third \">\n            <div class=\"button-cover\">\n              <div class=\"button r\" id=\"button-1\">\n                <input type=\"checkbox\" class=\"checkbox\" id=\"mainTitle_{{ i }}\"\n                  (click)=\"showSubChild(i, $event, item.title)\" [(ngModel)]=\"item.flag\">\n                <div class=\"knobs\"></div>\n                <div class=\"layer\"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-11 form-service-box \" *ngIf=\"item.havesub\"\n          [ngStyle]=\"{ display: item.flag ? 'block' : 'none' }\" id=\"subItem_{{ i }}\">\n          <ng-container *ngFor=\"let firstChild of item.child; let sI = index\">\n            <div class=\"row-box mb-2 custom-input-border\">\n              <h6 class=\"label-icon\">\n                <img class=\"pt-0 pr-2\" src=\"./assets/img/fac_blue/{{firstChild.icon_string}}.png\" height=\"36\"\n                  alt=\"{{firstChild.title}}\" />\n                {{ firstChild.title }}\n              </h6>\n              <ng-container *ngIf=\"item.title == 'Accommodation'\">\n                <div class=\"toggle-button-cover mr-4\">\n                  <div class=\"button-inner-cover\">\n                    <div class=\"button r\" id=\"button-1\">\n                      <input id=\"firstChildLableAcco_{{ sI }}\"\n                        (click)=\"showSecendChild(sI + i, $event, sI, item.child.length, 'accomodation')\"\n                        [(ngModel)]=\"firstChild.flag\" type=\"checkbox\" class=\"checkbox\">\n                      <div class=\"knobs\"></div>\n                      <div class=\"layer\"></div>\n                    </div>\n                  </div>\n                </div>\n              </ng-container>\n              <ng-container *ngIf=\"item.title == 'Transportation'\">\n                <div class=\"toggle-button-cover mr-4\">\n                  <div class=\"button-inner-cover\">\n                    <div class=\"button r\" id=\"button-1\">\n                      <input id=\"firstChildLable_{{ sI }}\"\n                        (click)=\"showSecendChild(sI + i, $event, sI, item.child.length, 'transport')\"\n                        [(ngModel)]=\"firstChild.flag\" type=\"checkbox\" class=\"checkbox\" />\n                      <div class=\"knobs\"></div>\n                      <div class=\"layer\"></div>\n                    </div>\n                  </div>\n                </div>\n              </ng-container>\n              <ng-container *ngIf=\"item.title == 'Meal'\">\n                <div class=\"toggle-button-cover mr-4\">\n                  <div class=\"button-inner-cover\">\n                    <div class=\"button r\" id=\"button-1\">\n                      <input id=\"firstChildLableMeal_{{ sI }}\"\n                        (click)=\"showSecendChild(sI + i, $event, sI, item.child.length, 'meal')\"\n                        [(ngModel)]=\"firstChild.flag\" type=\"checkbox\" class=\"checkbox\">\n                      <div class=\"knobs\"></div>\n                      <div class=\"layer\"></div>\n                    </div>\n                  </div>\n                </div>\n              </ng-container>\n            </div>\n            <div class=\"d-flex justify-content-center\">\n              <div *ngIf=\"firstChild.havesub\" [ngStyle]=\"{ display: firstChild.flag ? 'block' : 'none' }\"\n                id=\"secendChild_{{ sI + i }}\">\n                <label *ngFor=\"let secendChild of firstChild.child; let ij = index\" class=\"mr-1 ml-1\">\n                  <input class=\"mr-1\" type=\"radio\" name=\"starts\" id=\"secendChidl_{{ ij }}\"\n                    (click)=\"onHotelStarCLick(secendChild.title)\" /><span>{{ secendChild.title }} {{'STAR' |\n                    translate}}</span>\n                </label>\n              </div>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-11\">\n      <div class=\"tripjero-floating\">\n        <input placeholder=\"{{'ENTER_CUSTOM_SERVICES' | translate}}\" #titleOfFacility type=\"text\"\n          class=\"form-control\" />\n        <label style=\"background: #F3F5EA;\" class=\"float-label\">{{'ENTER_CUSTOM_SERVICES_LABEL' | translate}}</label>\n      </div>\n      <span *ngIf=\"isError\" style=\"color: red;\">{{'FIELD_REQUIRED' | translate}}</span>\n    </div>\n    <div class=\"col-md-1 d-flex justify-content-center align-items-baseline\">\n      <a (click)=\"addNewFacility(titleOfFacility)\" class=\"jero-btn jero-btn-primary\"><i class=\"fa fa-plus\"></i> {{'ADD'\n        | translate}}</a>\n    </div>\n  </div>\n</fieldset>\n<div class=\"d-flex\" style=\"gap: 10px;\">\n  <button class=\"jero-btn jero-btn-primary\" mat-button matStepperPrevious>{{'BACK' | translate}}</button>\n  <button class=\"jero-btn jero-btn-primary-outlined\" mat-button (click)=\"addFacilities()\">{{'NEXT' |\n    translate}}</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/posttrip/TripItinerary/ItineraryPlane/ItineraryPlane.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posttrip/TripItinerary/ItineraryPlane/ItineraryPlane.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPosttripTripItineraryItineraryPlaneItineraryPlaneComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<fieldset>\n  <div class=\"row\">\n    <ng-container *ngFor=\"let item of IternaryPlanList; let i = index\">\n      <div class=\"col-md-6 form-control-box ml-4 mt-4 mb-3\">\n        <div class=\"form-group custom-input-border\">\n          <label for=\"exampleInputEmail1\" class=\"\">{{ item.DayName }}</label>\n          <div class=\"d-flex justify-content-end\">\n            <div class=\"actions-to-day d-flex align-items-center\">\n              <span class=\"jero-btn jero-btn-primary-outlined\">\n                <i (click)=\"shoEditDayTitle(i)\" class=\"fa fa-pencil\"></i>\n              </span>\n              <a data-toggle=\"modal\" class=\"jero-btn jero-btn-primary-outlined\" [attr.data-target]=\"'#dayItems' + i\">\n                <i class=\"fa fa-plus\"></i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row\" id=\"editDayTitle_{{ i }}\" style=\"display: none;\">\n            <div class=\"col-md-10\">\n              <div class=\"tripjero-floating\">\n                <input type=\"text\" [(ngModel)]=\"item.DayName\" maxlength=\"100\" placeholder=\" \" id=\"editDayTitle_{{ i }}\"\n                  class=\"form-control\">\n                <label for=\"editDayTitle_{{ i }}\" class=\"float-label form-bg-surface\">{{ 'DAY_NAME' | translate }}</label>\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <span class=\"jero-btn jero-btn-primary-outlined\" (click)=\"shoEditDayTitle(i, 'hide')\">\n                <i class=\"fa fa-check-circle\"></i>\n              </span>\n            </div>\n          </div>\n        </div>\n        <ng-container *ngFor=\"let daySupply of item.DayPlan; let j = index\">\n          <div class=\"row\">\n            <div class=\"col col-12\">\n              <div class=\"col-sm-6 col-lg-8\">\n                <a class=\"intititle\"> {{ daySupply.TaskDetaisl }}</a>\n              </div>\n              <div class=\"col-sm-6 col-lg-4\">\n                <a class=\"remove-icon\"><i style=\"cursor: pointer; color: red;\" (click)=\"remoDayItems(i, j)\"\n                    class=\"fa fa-remove\"></i></a>\n              </div>\n            </div>\n          </div>\n        </ng-container>\n        <!-- Model Load ========================================== -->\n        <div class=\"modal fade\" id=\"dayItems{{ i }}\" style=\"display: none; border-radius: 16px;\">\n          <div class=\"modal-dialog modal-dialog-center modal-lg\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header w-100\">\n                <div class=\"d-flex justify-content-between align-items-center w-100\">\n                  <h4 class=\"modal-title\">{{'DAY_ITEMS' | translate}}</h4>\n                  <button type=\"button\" class=\"close\" (click)=\"hideModel(i)\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                  </button>\n                </div>\n              </div>\n              <div class=\"modal-body\">\n                <div class=\"tripjero-floating\">\n                  <textarea (keyup)=\"checkCharacterLength($event)\" class=\"form-control\"\n                    style=\"height: 120px; width: 100%;\" [(ngModel)]=\"dayDetail\" #dayDetails></textarea>\n                  <label for=\"dayDetail\" class=\"float-label\">{{'DAY_DETAIL' | translate}}</label>\n                </div>\n                <span style=\"color: red;\" *ngIf=\"isError\">{{'FIELD_REQUIRED' | translate}}</span>\n                <span style=\"color: red;\" *ngIf=\"isLengthy\">{{'MAX_1000_CHARACTERS' | translate}}</span>\n                <span class=\"align-right\" style=\"color: #00A991 !important; font-size: 12px;\">{{ charLength\n                  }}/1000</span>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"jero-btn jero-btn-primary pull-left\" (click)=\"hideModel(i)\">\n                  {{'CLOSE' | translate}}\n                </button>\n                <button type=\"button\" class=\"jero-btn jero-btn-primary-outlined\" [disabled]=\"isLengthy || !charLength\"\n                  (click)=\"addDayItems(i, dayDetails)\">\n                  {{'ADD' | translate}}\n                </button>\n              </div>\n            </div>\n            <!-- /.modal-content -->\n          </div>\n          <!-- /.modal-dialog -->\n        </div>\n        <!-- End Model Load ========================================== -->\n      </div>\n    </ng-container>\n  </div>\n</fieldset>\n<div>\n  <button class=\"jero-btn jero-btn-primary mr-2\" mat-button matStepperPrevious>{{'BACK' | translate}}</button>\n  <button class=\"jero-btn jero-btn-primary-outlined\" (click)=\"submistAsDraft()\">{{'NEXT' | translate}}</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/posttrip/TripItinerary/PostFinalTrip/PostFinalTrip.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posttrip/TripItinerary/PostFinalTrip/PostFinalTrip.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPosttripTripItineraryPostFinalTripPostFinalTripComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<fieldset>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-8\">\n      <div class=\"trip-detail-operator-card mb-4\">\n        <p class=\"heading-trip\">{{ \"CANCELLATION_POLICY\" | translate }}</p>\n        <p class=\"sub-heading-trip\">More details on all policy options</p>\n        <ul class=\"cancelation-policy\">\n          <li *ngFor=\"let policy of cancellationPolicies\">\n            <div (click)=\"navigateToPolicy(policy.Title)\" class=\"policy-item\">\n              <div class=\"d-flex justify-content-between align-items-center\">\n                <div>\n                  <strong>{{ policy.Name }}</strong>\n                  <p class=\"policy-description\">\n                    Cancel up to {{ policy.DurationBeforeTripStart }} hours before trip start for a {{policy.PercentageToApply }}% refund.\n                    (Deadline: {{ calculateCancellationDeadline( tripModel.TripBasicInfo.StartDateTime, policy.DurationBeforeTripStart ) | date : \"medium\" }})\n                    <br>\n                    <span class=\"refund-amount\">Refund amount: ﷼{{ (tripModel.tripPrices.CurrentAmount * policy.PercentageToApply) / 100 | number: \"1.2-2\" }}</span>\n                  </p>\n                </div>\n                <div class=\"refund-percentage\">\n                  <p>{{ policy.PercentageToApply }}%<br>Refund</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"divider\"></div>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"trip-detail-operator-card mb-4\">\n        <div class=\"d-flex justify-content-between\">\n          <div class=\"policy-box\" (click)=\"navigateToPolicy('Terms')\">\n            <img src=\"../../../assets/img/revamp/terms.png\" alt=\"Terms & Conditions\" />\n            <p>Terms & Conditions</p>\n          </div>\n          <div class=\"policy-box\" (click)=\"navigateToPolicy('Privacy')\">\n            <img src=\"../../../assets/img/revamp/pp.png\" alt=\"Privacy Policy\" />\n            <p>Privacy Policy</p>\n          </div>\n        </div>\n        <div class=\"policy-box-full\" (click)=\"navigateToPolicy('Cancellation')\">\n          <img src=\"../../../assets/img/revamp/cancellation.png\" alt=\"Cancellation Policy\" />\n          <p>Cancellation Refund Policy</p>\n        </div>\n      </div>\n\n      <div class=\"trip-detail-operator-card\">\n        <div class=\"form-group\">\n          <div class=\"form-check\">\n            <input class=\"form-check-input\" type=\"checkbox\" id=\"isaccept\" (change)=\"onAccept($event)\">\n            <label class=\"form-check-label\" for=\"isaccept\">\n              {{ \"I_ACCEPT\" | translate }} the terms and conditions.\n            </label>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"form-check\">\n            <input class=\"form-check-input\" type=\"checkbox\" id=\"AppyBoost\" (change)=\"onBoost($event)\" [(ngModel)]=\"tripModel.IsBoost\">\n            <label class=\"form-check-label\" for=\"AppyBoost\">\n              {{ \"APPLY_BOOST\" | translate }}\n            </label>\n          </div>\n        </div>\n        <div *ngIf=\"tripModel.IsBoost\" class=\"boost-options mt-3\">\n          <div class=\"tripjero-floating\">\n            <select name=\"PrmoCode\" (change)=\"boostSelected($event)\" [disabled]=\"!isBoostt\" [(ngModel)]=\"tripModel.Boost_Code\" class=\"promo-form-custom form-control\" id=\"promoCodeSelect\">\n              <option [value]=\"\">Select Boost Package</option>\n              <ng-container *ngFor=\"let item of BoostPackagesUser\">\n                <option [value]=\"item.Id\" *ngIf=\"item.IS_Payment\">{{ item.Title }}</option>\n              </ng-container>\n            </select>\n            <label for=\"promoCodeSelect\" class=\"float-label form-bg-surface margin-adjustment\">{{ \"SELECT_BOOST_CODE\" | translate }}</label>\n          </div>\n          <p *ngIf=\"isBoostt && isBoost\" class=\"mt-2\">\n            {{ \"TOTAL_NUMBER_OF_BOOST\" | translate }}: {{ boostDays }} <br />\n            {{ \"REMAINING_NUMBER_OF_BOOST\" | translate }}: {{ boostRem }}\n          </p>\n          <p *ngIf=\"isBoostt && !isBoostAvailable\">\n            <a routerLink=\"/boostpkg\">{{ \"BUY_BOOST_PACKAGE\" | translate }}</a>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</fieldset>\n<div>\n  <button class=\"jero-btn jero-btn-primary mr-2\" mat-button matStepperPrevious>\n    {{ \"BACK\" | translate }}\n  </button>\n  <button\n    class=\"jero-btn jero-btn-primary-outlined\"\n    mat-button\n    (click)=\"postTrip()\"\n    [disabled]=\"!accepted || (!isBoost && isBoostt)\"\n  >\n    {{ \"POST_TRIP\" | translate }}\n  </button>\n</div>\n<ng-template #byuboostTripPoopup></ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/posttrip/TripItinerary/TripImages/tripImages/tripImages.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posttrip/TripItinerary/TripImages/tripImages/tripImages.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPosttripTripItineraryTripImagesTripImagesTripImagesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<fieldset>\n  <div class=\"form-card mt-5\">\n    <div class=\"form-group\">\n      <ngx-dropzone class=\"my-2 boder-class\" (change)=\"onSelect($event)\"\n        accept=\"image/jpeg,image/jpg,image/png,image/gif\" [expandable]=\"true\">\n        <ngx-dropzone-label>\n          <div class=\"d-flex flex-column\">\n            <i class=\"fa fa-cloud-upload\"></i>\n            <span>{{ 'DRAG_DROP' | translate }}</span>\n            <span>{{ 'OR' | translate }}</span>\n            <button class=\"jero-btn jero-btn-primary\">{{ 'SELECT_FILES' | translate }}</button>\n          </div>\n\n        </ngx-dropzone-label>\n        <div class=\"col-3\" *ngFor=\"let f of files\">\n          <ngx-dropzone-image-preview ngProjectAs=\"ngx-dropzone-preview\" [file]=\"f\" [removable]=\"true\"\n            (removed)=\"onRemove(f)\">\n          </ngx-dropzone-image-preview>\n          <ngx-dropzone-label>{{ f.name }}</ngx-dropzone-label>\n        </div>\n      </ngx-dropzone>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-2\" *ngFor=\"let item of tripModel.TripImages; let i = index\">\n        <div id=\"box-image\">\n          <div class=\"image-container-custom\">\n            <img src=\"{{ imageDomainUrl }}/{{ item.ImageUrl }}\" class=\"image\"\n              style=\"width: 100px; height: 100px; object-fit: cover;\">\n            <div class=\"d-flex justify-content-between overlay-icon\">\n              <div class=\"edit\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"cross\"><i class=\"fa fa-times\" (click)=\"deleteImage(i)\" aria-hidden=\"true\"></i>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</fieldset>\n<div class=\"mt-3\">\n  <button class=\"jero-btn jero-btn-primary mr-2\" mat-button matStepperPrevious>{{'BACK' | translate}}</button>\n  <button class=\"jero-btn jero-btn-primary-outlined\" (click)=\"submitImagesAsDraft()\">{{'NEXT' | translate}}</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/posttrip/buy-boost-packages/buy-boost-packages-popup.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posttrip/buy-boost-packages/buy-boost-packages-popup.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPosttripBuyBoostPackagesBuyBoostPackagesPopupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal fade bd-example-modal-xl\" data-backdrop=\"static\" data-keyboard=\"false\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\"\n  aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" [ngClass]=\"!showPayment ? 'modal-xl': ''\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">\n          <span *ngIf=\"!showPayment\">{{ 'AVAILABLE_PACKAGES' | translate }}</span>\n          <span *ngIf=\"showPayment\">{{ 'ORDER_SUMMARY' | translate }}</span>\n        </h5>\n        <button type=\"button\" class=\"close\" (click)=\"closeModel()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p *ngIf=\"!showPayment\" style=\"color: red;text-decoration: underline;\">{{ 'NO_BOOST' | translate }}</p>\n          <div *ngIf=\"!showPayment\" class=\"row mt-5 \">\n            <div *ngFor=\"let item of boostPackgesList\" class=\"col-md-4 mt-3 col-sm-12 col-12\">\n              <div class=\"test-boots  mt-2 p-3\">\n\n                <div class=\"box-bottom1 d-flex justify-content-end \">\n\n                  <div class=\"box-container\">\n                    <img class=\"card-img\" src=\"./assets/img/boost-page-img/arrow-buy.png\" alt=\"\">\n                  </div>\n                </div>\n                <div class=\"box-bottom1 d-flex \">\n                  <div class=\"box-container\">\n                    <img (click)=\"Buy(item)\" class=\"card-img-buy\"\n                      src=\"./assets/img/boost-page-img/buy.png\" alt=\"\">\n                  </div>\n                  <div class=\"box-container\">\n\n                  </div>\n                </div>\n\n                <div class=\"booster-card-body mt-5\">\n\n                  <div class=\"box-bottom1 d-flex justify-content-between\">\n\n                    <div>\n\n                      <h4 class=\"mt-1 boost-text-heading\">{{item.Title}}</h4>\n                    </div>\n                    <div class=\"mt-1 boost-text\">\n\n                    </div>\n\n                  </div>\n\n                  <div class=\"box-bottom1 d-flex justify-content-between\">\n\n                    <div>\n\n                      <h6 class=\"mt-2 boost-text\"> Number of Boost </h6>\n                    </div>\n                    <div class=\"mt-2 boost-text\">\n                      <h6>{{item.NoTrips}}</h6>\n                    </div>\n\n                  </div>\n                  <div class=\"box-bottom1 d-flex justify-content-between\">\n\n                    <div>\n\n                      <p class=\" boost-text\">Price: </p>\n                    </div>\n                    <div class=\" boost-text\">\n                      <p>{{item.Price | number}}</p>\n                    </div>\n                  </div>\n                  <div class=\" d-flex justify-content-between\">\n\n                    <div>\n\n                      <h6 class=\" boost-text\"> Discount % </h6>\n                    </div>\n                    <div class=\" boost-text\">\n                      <h6> {{item.Discount}}%</h6>\n                    </div>\n\n                  </div>\n                  <div class=\"box-bottom1 d-flex justify-content-between\">\n\n                    <div>\n\n                      <h6 class=\" boost-text\">Offer Price </h6>\n                    </div>\n                    <div class=\" boost-text\">\n                      <h6> Rs : {{item.Discount | number}}</h6>\n                    </div>\n\n                  </div>\n                </div>\n              </div>\n\n            </div>\n\n          </div>\n          <div *ngIf=\"showPayment\">\n            <div class=\"row\">\n              <div class=\"col-12\" style=\"color: green;\">\n                Order Status\n              </div>\n              <table class=\"table table-striped\">\n                <tr>\n                  <td>Order Number:</td>\n                  <td>{{orderId}}</td>\n                </tr>\n                <tr>\n                  <td>Status:</td>\n                  <td>Pending for payment</td>\n                </tr>\n                <tr>\n                  <td>Payment Status:</td>\n                  <td>un Paid</td>\n                </tr>\n\n              </table>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12\" style=\"color: green;\">\n                Payment Method\n              </div>\n              <table class=\"table table-striped\">\n                <tr>\n                  <td>Your order is in pending please make a payment via easypasa.</td>\n                </tr>\n                <tr>\n                  <td>Name:</td>\n                  <td>Zohaib Ullah Baig</td>\n                </tr>\n                <tr>\n                  <td>Mobile no:</td>\n                  <td>03405747187</td>\n                </tr>\n              </table>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12\" style=\"color: green;\">\n                Information\n              </div>\n              <table class=\"table table-striped\">\n                <tr>\n                  <td>Please send us screenshot or SMS of Easy Pasa at <a href=\"\">info@triojero.com</a>, Invoice will be send to your registered email upon receiving payment. Please contact us at WhatsApp or call on +923405747187</td>\n                </tr>\n              </table>\n            </div>\n          </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModel()\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/posttrip/postsuccess/postsuccess.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posttrip/postsuccess/postsuccess.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPosttripPostsuccessPostsuccessComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-5 mx-auto d-flex align-items-center justify-content-center\" style=\"margin-top: 20vh;\">\n      <div class=\"post-success-card d-flex justify-content-center align-items-center flex-column\">\n        <img src=\"../../../assets/img/revamp/success.svg\" alt=\"\">\n        <h6>{{ 'SUCCESS' | translate }}</h6>\n        <p>{{ 'TRIP_SUCCESS' | translate }}</p>\n        <p>{{ 'TRIP_REF' | translate:{ tripId: tripId } }}</p>\n        <div class=\"rounded-social-buttons\">\n          <a class=\"social-button facebook\" href=\"{{shareFB}}\" target=\"_blank\"><i class=\"fa fa-facebook-f\"></i></a>\n          <a class=\"social-button twitter\" href=\"{{shareTwitter}}\" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a>\n          <a class=\"social-button linkedin\" href=\"{{shareLinkedIn}}\" target=\"_blank\"><i class=\"fa fa-linkedin\"></i></a>\n          <a class=\"social-button whatsapp\" href=\"{{shareWhatsApp}}\" target=\"_blank\"><i class=\"fa fa-whatsapp\"></i></a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/posttrip/posttrip.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posttrip/posttrip.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPosttripPosttripComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"page-content-wrapper\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h4>{{ 'POST_TRIP' | translate }}</h4>\n    </div>\n    <div class=\"col-md-12\">\n      <mat-horizontal-stepper #stepper>\n        <mat-step class=\"tab-plane row\" label=\"{{'BASIC_INFORMATION' | translate}}\" [stepControl]=\"postForm\">\n          <form [formGroup]=\"postForm\" class=\"col-md-6 mt-3\" (submit)=\"sumbiteTripsBasicInfo()\">\n            <fieldset class=\"border-1\">\n              <div class=\"form-card \">\n                <div class=\"tripjero-floating\">\n                  <input type=\"text\"\n                    class=\"form-control\"\n                    formControlName=\"Title\"\n                    id=\"tripTitle\"\n                    [ngClass]=\"{ 'is-invalid': f.Title.errors && (postForm.get('Title').touched) }\">\n                  <label for=\"tripTitle\" class=\"float-label form-bg-surface\">{{'TITLE' | translate}}</label>\n                  <div *ngIf=\"f.Title.errors\" class=\"invalid-feedback ml-4\" style=\"display: block;\">\n                    <div *ngIf=\"f.Title.errors.required\" style=\"color: #dc3545;\">{{'TITLE_REQUIRED' | translate}}</div>\n                  </div>\n                </div>\n                <div class=\"tripjero-floating\">\n                  <textarea class=\"form-control\"\n                    formControlName=\"Details\"\n                    id=\"tripDetails\"\n                    rows=\"2\"\n                    [ngClass]=\"{ 'is-invalid': f.Details.errors && (postForm.get('Details').touched) }\"></textarea>\n                  <label for=\"tripDetails\" class=\"float-label form-bg-surface\">{{'TRIP_DETAILS' | translate}}</label>\n                  <div *ngIf=\"f.Details.errors\" class=\"invalid-feedback ml-4\" style=\"display: block;\">\n                    <div *ngIf=\"f.Details.errors.required\" style=\"color: #dc3545;\">{{'TRIP_DETAILS_REQUIRED' | translate}}</div>\n                  </div>\n                </div>\n                <div class=\"form-group Upload-Features-Images jabar-floating mb-4 mt-1\">\n                  <label for=\"exampleInputEmail1\">{{'UPLOAD_FEATURES_IMAGES' | translate}}</label>\n                  <div class=\"justify-content-between image-gallery\">\n                    <div class=\"image-box\">\n                      <div class=\"overlay\">\n                        <label for=\"file-upload\" class=\"jugad custom-file-upload\">\n                          <div class=\"plus\">+</div>\n                          <h3 class=\"plus-text mb-0\">{{'BROWSE' | translate}}</h3>\n                        </label>\n                        <input id=\"file-upload\" type=\"file\" #file formControlName=\"FeaturesImage\"\n                          (change)=\"preview(file.files)\" />\n                      </div>\n                    </div>\n                    <div class=\"image-box\">\n                      <div class=\"image-container-custom\" *ngIf=\"imgURL\">\n                        <img [src]=\"imgURL\" class=\"image\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"tripjero-floating col-md-4\">\n                    <select formControlName=\"CategoriesId\" class=\"form-control\" id=\"tripCategory\"\n                      [ngClass]=\"{ 'is-invalid': f.CategoriesId.errors && (postForm.get('CategoriesId').touched) }\">\n                      <option [value]=\"0\" selected>{{'SELECT' | translate}}</option>\n                      <option *ngFor=\"let item of tripCategories\" value=\"{{ item.Id }}\">{{ item.Name }}</option>\n                    </select>\n                    <label for=\"tripCategory\" class=\"float-label form-bg-surface margin-adjustment\">{{'SELECT_CATEGORY' | translate}}</label>\n                    <div *ngIf=\"f.CategoriesId.errors\" class=\"invalid-feedback ml-4\" style=\"display: block;\">\n                      <div *ngIf=\"f.CategoriesId.errors.required\" style=\"color: #dc3545;\">{{'CATEGORY_REQUIRED' | translate}}</div>\n                    </div>\n                  </div>\n                  <div class=\"tripjero-floating col-md-4\">\n                    <input type=\"date\"\n                      formControlName=\"StartDate\"\n                      (change)=\"changEndDate($event)\"\n                      class=\"form-control\"\n                      id=\"tripStartDate\"\n                      min=\"{{ minDateStart }}\"\n                      [ngClass]=\"{ 'is-invalid': f.StartDate.errors && (postForm.get('StartDate').touched) }\">\n                    <label for=\"tripStartDate\" class=\"float-label form-bg-surface margin-adjustment\">{{'TRIP_START_DATE' | translate}}</label>\n                    <div *ngIf=\"f.StartDate.errors\" class=\"invalid-feedback ml-4\" style=\"display: block;\">\n                      <div *ngIf=\"f.StartDate.errors.required\" style=\"color: #dc3545;\">{{'START_DATE_REQUIRED' | translate}}</div>\n                    </div>\n                  </div>\n                  <div class=\"tripjero-floating col-md-4\">\n                    <input type=\"date\"\n                      formControlName=\"EndDateTime\"\n                      class=\"form-control\"\n                      id=\"tripEndDate\"\n                      min=\"{{ minDateEnd }}\"\n                      [ngClass]=\"{ 'is-invalid': f.EndDateTime.errors && (postForm.get('EndDateTime').touched) }\">\n                    <label for=\"tripEndDate\" class=\"float-label form-bg-surface margin-adjustment\">{{'TRIP_END_DATE' | translate}}</label>\n                    <div *ngIf=\"f.EndDateTime.errors\" class=\"invalid-feedback ml-4\" style=\"display: block;\">\n                      <div *ngIf=\"f.EndDateTime.errors.required\" style=\"color: #dc3545;\">{{'END_DATE_REQUIRED' | translate}}</div>\n                    </div>\n                    <div *ngIf=\"error.isError\" class=\"invalid-feedback ml-4\" style=\"display: block;\">\n                      <div style=\"color: #dc3545;\">{{error.errorMessage}}</div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"tripjero-floating col-md-6\">\n                    <select formControlName=\"FromCountry\" class=\"form-control\" (change)=\"onFromCountryChange()\">\n                      <option value=\"\" selected disabled>Select Country</option>\n                      <option *ngFor=\"let country of fromCountries\" [value]=\"country.Name\">{{ country.Name }}</option>\n                    </select>\n                    <label for=\"fromCountry\" class=\"float-label form-bg-surface margin-adjustment\">From Country</label>\n                    <div *ngIf=\"f.FromCountry.errors\" class=\"invalid-feedback ml-4\" style=\"display: block;\">\n                      <div *ngIf=\"f.FromCountry.errors.required\" style=\"color: #dc3545;\">From Country is required</div>\n                    </div>\n                  </div>\n                  <div class=\"tripjero-floating col-md-6\">\n                    <select formControlName=\"FromCity\" class=\"form-control\" (change)=\"onFromCityChange()\">\n                      <option value=\"\" selected disabled>Select City</option>\n                      <option *ngFor=\"let city of fromCities\" [value]=\"city.PartialVisitPlace\">{{ city.PartialVisitPlace }}</option>\n                    </select>\n                    <label for=\"fromCity\" class=\"float-label form-bg-surface margin-adjustment\">From City</label>\n                    <div *ngIf=\"f.FromCity.errors\" class=\"invalid-feedback ml-4\" style=\"display: block;\">\n                      <div *ngIf=\"f.FromCity.errors.required\" style=\"color: #dc3545;\">From City is required</div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"tripjero-floating col-md-6\">\n                    <select formControlName=\"ToCountry\" class=\"form-control\" (change)=\"onToCountryChange()\">\n                      <option value=\"\" selected disabled>Select Country</option>\n                      <option *ngFor=\"let country of toCountries\" [value]=\"country.Name\">{{ country.Name }}</option>\n                    </select>\n                    <label for=\"toCountry\" class=\"float-label form-bg-surface margin-adjustment\">To Country</label>\n                    <div *ngIf=\"f.ToCountry.errors\" class=\"invalid-feedback ml-4\" style=\"display: block;\">\n                      <div *ngIf=\"f.ToCountry.errors.required\" style=\"color: #dc3545;\">To Country is required</div>\n                    </div>\n                  </div>\n                  <div class=\"tripjero-floating col-md-6\">\n                    <select formControlName=\"ToCity\" class=\"form-control\" (change)=\"onToCityChange()\">\n                      <option value=\"\" selected disabled>Select City</option>\n                      <option *ngFor=\"let city of toCities\" [value]=\"city.PartialVisitPlace\">{{ city.PartialVisitPlace }}</option>\n                    </select>\n                    <label for=\"toCity\" class=\"float-label form-bg-surface margin-adjustment\">To City</label>\n                    <div *ngIf=\"f.ToCity.errors\" class=\"invalid-feedback ml-4\" style=\"display: block;\">\n                      <div *ngIf=\"f.ToCity.errors.required\" style=\"color: #dc3545;\">To City is required</div>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"tripjero-floating col-md-4\">\n                    <input type=\"number\"\n                      value=\"1,000\"\n                      min=\"1,000\"\n                      name=\"ActualAmount\"\n                      id=\"ActualAmount\"\n                      (input)=\"applyDiscount()\"\n                      formControlName=\"ActualAmount\"\n                      class=\"form-control\"\n                      aria-describedby=\"emailHelp\"\n                      [ngClass]=\"{ 'is-invalid': f.ActualAmount.errors && (postForm.get('ActualAmount').touched) }\">\n                    <label for=\"ActualAmount\" class=\"float-label form-bg-surface margin-adjustment\">{{'CHARGES_PERSON' | translate}} (﷼)</label>\n                    <div *ngIf=\"f.ActualAmount.errors\" class=\"invalid-feedback ml-4\" style=\"display: block;\">\n                      <div *ngIf=\"f.ActualAmount.errors.required\" style=\"color: #dc3545;\">{{'AMOUNT_REQUIRED' | translate}}</div>\n                    </div>\n                  </div>\n\n                  <div class=\"tripjero-floating col-md-4\">\n                    <input type=\"number\"\n                      min=\"0\"\n                      max=\"100\"\n                      name=\"DiscountPercentage\"\n                      (input)=\"applyDiscount()\"\n                      id=\"DiscountPercentage\"\n                      class=\"form-control\"\n                      formControlName=\"DiscountPercentage\"\n                      [ngClass]=\"{ 'is-invalid': f.DiscountPercentage.errors && (postForm.get('DiscountPercentage').touched) }\" />\n                    <label for=\"DiscountPercentage\" class=\"float-label form-bg-surface margin-adjustment\">{{'PERCENTAGE_DISCOUNT_OPTIONAL' | translate}}</label>\n                    <div *ngIf=\"f.DiscountPercentage.errors\" class=\"invalid-feedback ml-4\" style=\"display: block;\">\n                      <div *ngIf=\"f.DiscountPercentage.errors.required\" style=\"color: #dc3545;\">{{'DISCOUNT_REQUIRED' | translate}}</div>\n                      <div *ngIf=\"f.DiscountPercentage.errors.max\" style=\"color: #dc3545;\">{{'DISCOUNT_MAX_100' | translate}}</div>\n                    </div>\n                  </div>\n\n                  <div class=\"tripjero-floating col-md-4\">\n                    <input type=\"number\"\n                      name=\"CurrentAmount\"\n                      formControlName=\"CurrentAmount\"\n                      id=\"CurrentAmount\"\n                      class=\"form-control\"\n                      [value]=\"f.CurrentAmount.value\"\n                      disabled />\n                    <label for=\"CurrentAmount\" class=\"float-label form-bg-surface margin-adjustment\">{{'CHARGED_AMOUNT' | translate}} (﷼)</label>\n                  </div>\n\n                  <div class=\"col-md-12\">\n                    <small class=\"form-text text-muted\">\n                      Enter the total amount of tour/trip in Saudi Riyals (SAR). Inclusive of all costs, VAT, and any applicable government charges.\n                    </small>\n                  </div>\n                </div>\n                <div class=\"d-flex flex-column\" style=\"gap: 10px;margin-top: 20px;\">\n                  <div class=\"form-group\">\n                    <div class=\"form-check pl-0\">\n                      <label class=\"form-check-label mr-4 small-text\" for=\"defaultCheck1\">\n                        {{'APPLY_PROMO' | translate}}\n                      </label>\n                      <input id=\"promoCodeApply\" type=\"checkbox\" name=\"HavePromo\" (click)=\"onPromoChange($event)\"\n                        formControlName=\"HavePromo\">\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <div class=\"tripjero-floating\" *ngIf=\"tripModel.tripPrices.HavePromo\">\n                      <select name=\"PrmoCode\" formControlName=\"Promo_Key\" (change)=\"onPromoSelect($event)\"\n                        class=\"promo-form-custom form-control\" id=\"promoCodeSelect\">\n                        <option value=\"0\" selected disabled>{{'SELECT_PROMO_CODE' | translate}}</option>\n                        <ng-container *ngFor=\"let item of usersPromoList\">\n                          <option *ngIf=\"item.ISExpire == 0\" value=\"{{ item.Promo_Key }}\">{{ item.Promo_Key }} , {{\n                            item.PromoCode }}</option>\n                        </ng-container>\n                      </select>\n                      <label for=\"promoCodeSelect\" class=\"float-label form-bg-surface margin-adjustment\">{{'PROMO_CODE' | translate}}</label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </fieldset>\n            <div>\n              <button class=\"jero-btn jero-btn-primary\">{{'SAVE_NEXT' | translate}}</button>\n            </div>\n          </form>\n        </mat-step>\n        <mat-step label=\"{{'ITINERARY_PLAN' | translate}}\">\n          <div #ItineraryPlan></div>\n        </mat-step>\n        <mat-step label=\"{{'FACILITIES' | translate}}\">\n          <div #Facilities></div>\n        </mat-step>\n        <mat-step label=\"{{'PHOTOS' | translate}}\" [completed]=\"photosStepCompleted\">\n          <div #Photos></div>\n        </mat-step>\n        <mat-step label=\"{{'FINAL' | translate}}\">\n          <div #TermsAndConditions></div>\n        </mat-step>\n\n        <!-- Icon overrides. -->\n        <ng-template matStepperIcon=\"phone\">\n          <mat-icon>call_end</mat-icon>\n        </ng-template>\n        <ng-template matStepperIcon=\"chat\">\n          <mat-icon>forum</mat-icon>\n        </ng-template>\n      </mat-horizontal-stepper>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"page-content-wrapper\">\n  <div class=\"row\">\n    <div class=\"col-md-12 d-flex justify-content-between align-items-center\">\n      <h4>\n        {{ 'OPERATOR_PROFILE' | translate }}\n      </h4>\n      <ul class=\"nav nav-pills\" role=\"tablist\">\n        <li class=\"nav-item\">\n          <a class=\"jero-btn jero-btn-primary-outlined active\" data-toggle=\"pill\" href=\"#home\">{{ 'VERIFY_PROFILE' | translate }}</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"jero-btn jero-btn-primary-outlined\" data-toggle=\"pill\" href=\"#menu1\">{{ 'PROFILE' | translate }}</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"jero-btn jero-btn-primary-outlined\" data-toggle=\"pill\" href=\"#menu3\">{{ 'BANK' | translate }}</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"jero-btn jero-btn-primary-outlined\" data-toggle=\"pill\" href=\"#menu2\">{{ 'ACCOUNT_SETTING' | translate }}</a>\n        </li>\n      </ul>\n      <button class=\"jero-btn jero-btn-primary\" data-toggle=\"modal\" data-target=\"#expireModal\">\n        {{ 'ADD_NEW_PROMO' | translate }}\n      </button>\n    </div>\n    <div class=\"col-md-12 tab-content\">\n      <div class=\"row tab-pane active\" id=\"home\"\n        style=\"background: white; border-radius: 10px; padding: 20px; margin-top: 20px;\">\n        <div class=\"col-md-6\">\n          <form [formGroup]=\"verifyForm\" (ngSubmit)=\"verifyAccount()\">\n            <div class=\"form-card\">\n              <!-- License Number Floating Field -->\n              <div class=\"tripjero-floating mb-4\">\n                <input type=\"text\" id=\"licenceNumber\" class=\"form-control\" formControlName=\"LicenceNumber\"\n                  [(ngModel)]=\"user.Licence.LicenceNumber\" required />\n                <label class=\"float-label\" for=\"licenceNumber\">{{ 'LICENSE_NUMBER' | translate }}</label>\n                <div *ngIf=\"submitted && f.LicenceNumber.errors\" class=\"invalid-feedback d-block mt-1\">\n                  <div *ngIf=\"f.LicenceNumber.errors.required\" style=\"color: red;\">{{ 'LICENSE_NUMBER_REQUIRED' | translate }}</div>\n                </div>\n              </div>\n\n              <!-- License Document Upload -->\n              <div class=\"tripjero-upload-group mb-4 license-upload-container\">\n                <label class=\"float-label license-label\" for=\"licenceFile\">{{ 'LICENSE_DOCUMENT' | translate }}</label>\n                <div class=\"jero-file-upload-box license-upload-box\" (click)=\"file.click()\">\n                  <i class=\"fas fa-folder-open jero-file-icon\"></i>\n                  <span class=\"jero-file-text\">{{ 'BROWSE_FILE' | translate }}</span>\n                  <input type=\"file\" id=\"licenceFile\" accept=\"image/*,application/pdf,.doc,.docx\"\n                    formControlName=\"LicenceImage\" #file (change)=\"preview(file.files, 'verify')\"\n                    class=\"jero-file-input\" tabindex=\"-1\" multiple />\n                </div>\n              </div>\n              <div class=\"d-flex flex-wrap\">\n                <div *ngFor=\"let attachment of user.Licence.LicenceAttachments\" class=\"m-2\">\n                  <ng-container *ngIf=\"attachment.MimeType && attachment.MimeType.startsWith('image/')\">\n                    <img [src]=\"domainUrl + attachment.AttachmentPath\" height=\"200\" width=\"200\" alt=\"Licence Attachment\">\n                  </ng-container>\n                  <ng-container *ngIf=\"attachment.MimeType && !attachment.MimeType.startsWith('image/')\">\n                    <div class=\"d-flex flex-column align-items-center justify-content-center\" style=\"height: 200px; width: 200px; border: 1px solid #eee; border-radius: 8px;\">\n                      <a [href]=\"domainUrl + attachment.AttachmentPath\" target=\"_blank\" class=\"text-center\">\n                        <i class=\"fas fa-file-alt fa-3x mb-2\"></i>\n                        <p class=\"text-truncate\" style=\"max-width: 180px;\">{{ attachment.AttachmentName }}</p>\n                      </a>\n                    </div>\n                  </ng-container>\n                </div>\n                <div *ngFor=\"let url of verifyImgURLs; let i = index\" class=\"m-2\">\n                  <ng-container *ngIf=\"licenceFiles[i] && licenceFiles[i].type.startsWith('image/')\">\n                    <img [src]=\"url\" height=\"200\" width=\"200\" alt=\"New Licence Attachment\">\n                  </ng-container>\n                  <ng-container *ngIf=\"licenceFiles[i] && !licenceFiles[i].type.startsWith('image/')\">\n                    <div class=\"d-flex flex-column align-items-center justify-content-center\" style=\"height: 200px; width: 200px; border: 1px solid #eee; border-radius: 8px;\">\n                      <a [href]=\"url\" target=\"_blank\" class=\"text-center\">\n                        <i class=\"fas fa-file-alt fa-3x mb-2\"></i>\n                        <p class=\"text-truncate\" style=\"max-width: 180px;\">{{ licenceFiles[i].name }}</p>\n                      </a>\n                    </div>\n                  </ng-container>\n                </div>\n              </div>\n\n              <!-- Note Section -->\n              <div class=\"jero-note mt-4 mb-4\">\n                <div class=\"jero-note-title font-weight-bold mb-2\">{{ 'NOTE' | translate }}</div>\n                <div class=\"jero-note-desc\">\n                  {{ 'PROFILE_NOTE' | translate }}\n                </div>\n              </div>\n\n              <!-- Update Button -->\n              <div class=\"text-left mt-3\">\n                <button type=\"submit\" class=\"jero-btn jero-btn-primary\">\n                  {{ 'UPDATE_INFORMATION' | translate }}\n                </button>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n      <div class=\"row tab-pane fade\" id=\"menu1\"\n        style=\"background: white; border-radius: 10px; padding: 20px; margin-top: 20px;\">\n        <div class=\"col-md-6\">\n          <div class=\"form-card\">\n            <div class=\"row\">\n              <form [formGroup]=\"imgForm\" (ngSubmit)=\"updateImage()\">\n                <div class=\"tripjero-floating\">\n                  <input type=\"file\" accept='image/*' #profile formControlName=\"image\"\n                    (change)=\"preview(profile.files, 'profile')\" class=\"form-control d-none\" readonly>\n                  <div *ngIf=\"imgSubmit && i.image.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"i.image.errors.required\" style=\"color: red;\">\n                      {{ 'PROFILE_IMAGE_REQUIRED' | translate }}\n                    </div>\n                  </div>\n                </div>\n              </form>\n            </div>\n            <div class=\"d-flex justify-content-start profile-image-jugad\">\n              <img class=\"image\" src=\"{{imgURL}}\" alt=\"\" (click)=\"profile.click()\" style=\"height: 150px;\n    width: 150px;\">\n              <div class=\"middle\" (click)=\"profile.click()\">\n                <i class=\"fa fa-camera\"></i>\n              </div>\n            </div>\n            <form [formGroup]=\"postForm\" (ngSubmit)=\"updateProfile()\">\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"tripjero-floating\">\n\n                    <input type=\"text\" placeholder=\"{{ 'USER_FULL_NAME' | translate }}\" class=\"form-control\" aria-describedby=\"emailHelp\"\n                      id=\"name\" [(ngModel)]=\"user.Name\" formControlName=\"Name\" required>\n                    <label for=\"name\" class=\"float-label\">{{ 'NAME' | translate }}</label>\n                    <div *ngIf=\"submitted && f.Name.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.Name.errors.required\" style=\"color: red;\">{{ 'NAME_REQUIRED' | translate }}</div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-12\">\n                  <div class=\"tripjero-floating\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.BuisnessName\"\n                      formControlName=\"BuisnessName\" id=\"business_name\" placeholder=\"{{ 'BUSINESS_NAME' | translate }}\" required>\n                    <label for=\"business_name\" class=\"float-label\">{{ 'BUSINESS_NAME' | translate }}</label>\n\n                  </div>\n                </div>\n                <div class=\"col-md-12\">\n                  <div class=\"tripjero-floating\">\n                    <input type=\"text\" class=\"form-control\" aria-describedby=\"emailHelp\" [(ngModel)]=\"user.FullAddress\"\n                      formControlName=\"FullAddress\" id=\"address\" placeholder=\"{{ 'BUSINESS_ADDRESS' | translate }}\" required>\n                    <label for=\"address\" class=\"float-label\">{{ 'BUSINESS_ADDRESS' | translate }}</label>\n\n                    <div *ngIf=\"submitted && f.FullAddress.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.FullAddress.errors.required\" style=\"color: red;\">{{ 'FULL_ADDRESS_REQUIRED' | translate }}</div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-12\">\n                  <div class=\"tripjero-floating\">\n                    <input type=\"email\" placeholder=\"operator@abc.com\" class=\"form-control\" aria-describedby=\"emailHelp\"\n                      [(ngModel)]=\"user.Email\" formControlName=\"Email\" id=\"email\" placeholder=\"{{ 'EMAIL' | translate }}\" required>\n                    <label for=\"email\" class=\"float-label\">{{ 'EMAIL' | translate }}</label>\n\n                    <div *ngIf=\"submitted && f.Email.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.Email.errors.required\" style=\"color: red;\">{{ 'EMAIL_REQUIRED' | translate }}</div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-12\">\n                  <div class=\"tripjero-floating\">\n                    <div class=\"input-group\">\n                      <select class=\"form-control country-code-picker\" [(ngModel)]=\"selectedPhoneCode\" formControlName=\"PhoneCode\">\n                        <option value=\"\" disabled selected>Code</option>\n                        <option *ngFor=\"let country of countries\" [value]=\"'+' + country.DailingCode\">{{country.Name}} (+{{country.DailingCode}})</option>\n                      </select>\n                    <label for=\"phoneno\" class=\"float-label\">{{ 'PHONE_NUMBER' | translate }}</label>\n\n                      <input type=\"number\" class=\"form-control\" aria-describedby=\"emailHelp\"\n                        [(ngModel)]=\"user.PhoneNumber\" formControlName=\"PhoneNumber\" id=\"phoneno\"\n                        placeholder=\"{{ 'PHONE_NUMBER' | translate }}\" required>\n                    </div>\n\n                    <div *ngIf=\"submitted && f.PhoneNumber.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.PhoneNumber.errors.required\" style=\"color: red;\">{{ 'PHONE_NUMBER_REQUIRED' | translate }}</div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-12\">\n                  <div class=\"tripjero-floating\">\n                    <div class=\"input-group\">\n                      <select class=\"form-control country-code-picker\" [(ngModel)]=\"selectedContactCode\" formControlName=\"ContactCode\">\n                        <option value=\"\" disabled selected>Code</option>\n                        <option *ngFor=\"let country of countries\" [value]=\"'+' + country.DailingCode\">{{country.Name}} (+{{country.DailingCode}})</option>\n                      </select>\n                      <label for=\"contactno\" class=\"float-label\">{{ 'MOBILE_NUMBER' | translate }}</label>\n                      <input type=\"number\" class=\"form-control\" aria-describedby=\"emailHelp\"\n                        [(ngModel)]=\"user.ContactNumber\" formControlName=\"ContactNumber\" id=\"contactno\"\n                        placeholder=\"{{ 'MOBILE_NUMBER' | translate }}\" required>\n                    </div>\n\n                    <div *ngIf=\"submitted && f.ContactNumber.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.ContactNumber.errors.required\" style=\"color: red;\">{{ 'MOBILE_NUMBER_REQUIRED' | translate }}</div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-12\">\n                  <div class=\"tripjero-floating\">\n                    <select class=\"form-control\" aria-describedby=\"emailHelp\"\n                      [(ngModel)]=\"user.Country\" formControlName=\"Country\" id=\"country\" required (change)=\"onCountryChange()\">\n                      <option value=\"\" disabled selected>{{ 'SELECT_COUNTRY' | translate }}</option>\n                      <option *ngFor=\"let country of countries\" [value]=\"country.Name\">{{country.Name}}</option>\n                    </select>\n                    <label for=\"country\" class=\"float-label\">{{ 'COUNTRY' | translate }}</label>\n\n                    <div *ngIf=\"submitted && f.Country.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.Country.errors.required\" style=\"color: red;\">{{ 'COUNTRY_REQUIRED' | translate }}</div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-12\">\n                  <div class=\"tripjero-floating\">\n                    <select class=\"form-control\" aria-describedby=\"emailHelp\"\n                      [(ngModel)]=\"user.City\" formControlName=\"City\" id=\"city\" required>\n                      <option value=\"\" disabled selected>{{ 'SELECT_CITY' | translate }}</option>\n                      <option *ngFor=\"let city of cities\" [value]=\"city.Name\">{{city.Name}}</option>\n                    </select>\n                    <label for=\"city\" class=\"float-label\">{{ 'CITY' | translate }}</label>\n\n                    <div *ngIf=\"submitted && f.City.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.City.errors.required\" style=\"color: red;\">{{ 'CITY_REQUIRED' | translate }}</div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-12 mt-3\">\n                  <button type=\"submit\" class=\"jero-btn jero-btn-primary\" [disabled]=\"!postForm.valid\">{{ 'UPDATE' | translate }}</button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n      <div class=\"row tab-pane fade\" id=\"menu3\"\n        style=\"background: white; border-radius: 10px; padding: 20px; margin-top: 20px;\">\n        <div class=\"col-md-12\">\n          <div class=\"form-card\">\n            <h5 class=\"mb-4\">{{ 'BANK_INFORMATION' | translate }}</h5>\n            <div *ngIf=\"bankDetails\" class=\"bank-info-display\">\n              <div class=\"row mb-3\">\n                <div class=\"col-md-6\">\n                  <strong>{{ 'BANK_NAME' | translate }}:</strong>\n                  <p>{{ bankDetails.bank?.BankName || 'N/A' }}</p>\n                </div>\n                <div class=\"col-md-6\">\n                  <strong>{{ 'IBAN' | translate }}:</strong>\n                  <p>{{ bankDetails.IBAN || 'N/A' }}</p>\n                </div>\n              </div>\n              <div class=\"row mb-3\">\n                <div class=\"col-md-6\">\n                  <strong>{{ 'ACCOUNT_TITLE' | translate }}:</strong>\n                  <p>{{ bankDetails.AccTitle || 'N/A' }}</p>\n                </div>\n                <div class=\"col-md-6\">\n                  <strong>{{ 'DESCRIPTION' | translate }}:</strong>\n                  <p>{{ bankDetails.Description || 'N/A' }}</p>\n                </div>\n              </div>\n              <div class=\"mt-3\">\n                <button type=\"button\" class=\"jero-btn jero-btn-primary\" data-toggle=\"modal\" data-target=\"#bankModal\" (click)=\"openBankModal()\">\n                  {{ 'UPDATE_BANK' | translate }}\n                </button>\n              </div>\n            </div>\n            <div *ngIf=\"!bankDetails\" class=\"no-bank-info\">\n              <p class=\"mb-3\">{{ 'NO_BANK_INFORMATION' | translate }}</p>\n              <button type=\"button\" class=\"jero-btn jero-btn-primary\" data-toggle=\"modal\" data-target=\"#bankModal\" (click)=\"openBankModal()\">\n                {{ 'ADD_BANK' | translate }}\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row tab-pane fade\" id=\"menu2\"\n        style=\"background: white; border-radius: 10px; padding: 20px; margin-top: 20px;\">\n        <div class=\"col-md-6\">\n          <form [formGroup]=\"passwordForm\" (ngSubmit)=\"updatePassword()\">\n            <div>\n              <div class=\"tripjero-floating\">\n                <input type=\"password\" class=\"form-control\" id=\"name\" [(ngModel)]=\"UserPassword.CurrentPassword\"\n                  formControlName=\"CurrentPassword\" placeholder=\"{{ 'CURRENT_PASSWORD' | translate }}\"\n                  [ngClass]=\"{ 'is-invalid': p.CurrentPassword.errors && passwordForm.get('CurrentPassword').touched }\"\n                  required>\n                <label for=\"Name\" class=\"float-label\">{{ 'CURRENT_PASSWORD' | translate }}</label>\n\n                <div *ngIf=\"(passwordForm.get('CurrentPassword').touched) && p.CurrentPassword.errors\"\n                  class=\"invalid-feedback\">\n                  <div *ngIf=\"p.CurrentPassword.errors.required\" style=\"color: red;\">{{ 'CURRENT_PASSWORD_REQUIRED' | translate }}</div>\n                </div>\n              </div>\n              <div class=\"tripjero-floating\">\n                <input type=\"password\" class=\"form-control\" [(ngModel)]=\"UserPassword.NewPassword\"\n                  formControlName=\"NewPassword\" id=\"name\"\n                  [ngClass]=\"{ 'is-invalid': p.NewPassword.errors && passwordForm.get('NewPassword').touched }\"\n                  placeholder=\"{{ 'NEW_PASSWORD' | translate }}\" required>\n                <label for=\"BName\" class=\"float-label\">{{ 'NEW_PASSWORD' | translate }}</label>\n                <div *ngIf=\"(passwordForm.get('NewPassword').touched) && p.NewPassword.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"p.NewPassword.errors.pattern\" style=\"color: red;\">\n                    {{ 'PASSWORD_PATTERN' | translate }}\n                  </div>\n                  <div *ngIf=\"p.NewPassword.errors.required\" style=\"color: red;\">{{ 'NEW_PASSWORD_REQUIRED' | translate }}</div>\n                </div>\n              </div>\n              <div class=\"tripjero-floating\">\n                <input type=\"password\" class=\"form-control\" [(ngModel)]=\"UserPassword.ConfirmPass\"\n                  formControlName=\"ConfirmPass\" id=\"address\"\n                  [ngClass]=\"{ 'is-invalid': p.ConfirmPass.errors && passwordForm.get('ConfirmPass').touched }\"\n                  placeholder=\"{{ 'CONFIRM_PASSWORD' | translate }}\" required>\n                <label for=\"Address\" class=\"float-label\">{{ 'CONFIRM_NEW_PASSWORD' | translate }}</label>\n                <div *ngIf=\"(passwordForm.get('ConfirmPass').touched) && p.ConfirmPass.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"p.ConfirmPass.errors.pattern\" style=\"color: red;\">\n                    {{ 'PASSWORD_PATTERN' | translate }}\n                  </div>\n                  <div *ngIf=\"p.ConfirmPass.errors.required\" style=\"color: red;\">{{ 'CONFIRM_PASSWORD_REQUIRED' | translate }}</div>\n                </div>\n              </div>\n              <div class=\"d-flex justify-content-start mt-4\" style=\"gap: 10px;\">\n                <button type=\"submit\" class=\"jero-btn jero-btn-primary\">{{ 'UPDATE_PASSWORD' | translate }}</button>\n                <button class=\"btn-danger jero-btn\" (click)=\"deactivateAccount()\">\n                  {{ 'DEACTIVATE_ACCOUNT' | translate }}\n                </button>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Bank Modal -->\n<div class=\"modal fade\" id=\"bankModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"bankModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"bankModalLabel\">\n          <span *ngIf=\"bankDetails\">{{ 'UPDATE_BANK' | translate }}</span>\n          <span *ngIf=\"!bankDetails\">{{ 'ADD_BANK' | translate }}</span>\n        </h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"bankForm\" (ngSubmit)=\"saveBank()\">\n          <!-- Bank Dropdown with Search -->\n          <div class=\"form-group mb-4\">\n            <label for=\"bankSearch\" class=\"font-weight-bold\">{{ 'BANK' | translate }}</label>\n            <input \n              type=\"text\" \n              id=\"bankSearch\" \n              class=\"form-control mb-2\" \n              [(ngModel)]=\"bankSearchTerm\" \n              [ngModelOptions]=\"{standalone: true}\"\n              (input)=\"filterBanks()\"\n              placeholder=\"{{ 'SEARCH_BANK' | translate }}\"\n            />\n            <select \n              class=\"form-control\" \n              formControlName=\"BankId\" \n              id=\"bankId\"\n              [ngClass]=\"{ 'is-invalid': bankSubmitted && b.BankId.errors }\"\n            >\n              <option value=\"\" disabled selected>{{ 'SELECT_BANK' | translate }}</option>\n              <option *ngFor=\"let bank of filteredBanks\" [value]=\"bank.Bank_id\">\n                {{ bank.BankName }} <span *ngIf=\"bank.BankNameAR\">({{ bank.BankNameAR }})</span>\n              </option>\n            </select>\n            <div *ngIf=\"bankSubmitted && b.BankId.errors\" class=\"invalid-feedback d-block\">\n              <div *ngIf=\"b.BankId.errors.required\" style=\"color: red;\">{{ 'BANK_REQUIRED' | translate }}</div>\n            </div>\n          </div>\n\n          <!-- IBAN -->\n          <div class=\"tripjero-floating mb-4\">\n            <input \n              type=\"text\" \n              class=\"form-control\" \n              formControlName=\"IBAN\" \n              id=\"iban\"\n              [ngClass]=\"{ 'is-invalid': bankSubmitted && b.IBAN.errors }\"\n              required\n            />\n            <label for=\"iban\" class=\"float-label\">{{ 'IBAN' | translate }}</label>\n            <div *ngIf=\"bankSubmitted && b.IBAN.errors\" class=\"invalid-feedback d-block mt-1\">\n              <div *ngIf=\"b.IBAN.errors.required\" style=\"color: red;\">{{ 'IBAN_REQUIRED' | translate }}</div>\n            </div>\n          </div>\n\n          <!-- Account Title -->\n          <div class=\"tripjero-floating mb-4\">\n            <input \n              type=\"text\" \n              class=\"form-control\" \n              formControlName=\"AccTitle\" \n              id=\"accTitle\"\n              [ngClass]=\"{ 'is-invalid': bankSubmitted && b.AccTitle.errors }\"\n              required\n            />\n            <label for=\"accTitle\" class=\"float-label\">{{ 'ACCOUNT_TITLE' | translate }}</label>\n            <div *ngIf=\"bankSubmitted && b.AccTitle.errors\" class=\"invalid-feedback d-block mt-1\">\n              <div *ngIf=\"b.AccTitle.errors.required\" style=\"color: red;\">{{ 'ACCOUNT_TITLE_REQUIRED' | translate }}</div>\n            </div>\n          </div>\n\n          <!-- Description -->\n          <div class=\"tripjero-floating mb-4\">\n            <textarea \n              class=\"form-control\" \n              formControlName=\"Description\" \n              id=\"description\"\n              rows=\"3\"\n            ></textarea>\n            <label for=\"description\" class=\"float-label\">{{ 'DESCRIPTION' | translate }}</label>\n          </div>\n\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"jero-btn jero-btn-secondary\" data-dismiss=\"modal\">{{ 'CANCEL' | translate }}</button>\n            <button type=\"submit\" class=\"jero-btn jero-btn-primary\">{{ 'SAVE' | translate }}</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/promo/promo.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/promo/promo.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPromoPromoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"page-content-wrapper\">\n  <div class=\"row\">\n    <div class=\"col-md-12 d-flex justify-content-between align-items-center\">\n      <h4>{{ 'PROMO' | translate }}</h4>\n      <ul class=\"nav nav-pills\" role=\"tablist\">\n        <li class=\"nav-item\">\n          <a class=\"jero-btn jero-btn-primary-outlined active\" data-toggle=\"pill\" href=\"#active\">{{ 'ACTIVE' | translate\n            }}</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"jero-btn jero-btn-primary-outlined\" data-toggle=\"pill\" href=\"#expired\">{{ 'EXPIRE' | translate\n            }}</a>\n        </li>\n      </ul>\n      <button class=\"jero-btn jero-btn-primary\" data-toggle=\"modal\" data-target=\"#expireModal\">{{ 'ADD_NEW_PROMO' |\n        translate }}</button>\n    </div>\n    <div class=\"col-md-12 tab-content\">\n      <div class=\"tab-pane active\" id=\"active\"\n        style=\"background: white; border-radius: 10px; padding: 20px; margin-top: 20px;\">\n        <div class=\"row\">\n          <div class=\"col-md-3\" *ngFor=\"let item of UserPromo\">\n            <div class=\"promo-card-jero\">\n              <div class=\"d-flex justify-content-between align-items-center\">\n                <div class=\"title-card\">\n                  {{item.PromoCode}}\n                </div>\n                <i class=\"fa fa-share-alt\"></i>\n              </div>\n              <ul>\n                <li>\n                  <span class=\"tara\">{{ 'NAME_LABEL' | translate }}</span>\n                  <span>{{item.PromoCode}}</span>\n                </li>\n                <li>\n                  <span class=\"tara\">{{ 'START_DATE_LABEL' | translate }}</span>\n                  <span>{{item.StartDate | date:'dd-MMM-yyyy'}}</span>\n                </li>\n                <li>\n                  <span class=\"tara\">{{ 'EXPIRY_DATE_LABEL' | translate }}</span>\n                  <span>{{item.EndDate | date:'dd-MMM-yyyy'}}</span>\n                </li>\n                <li>\n                  <span class=\"tara\">{{ 'DISCOUNT_PERCENT_LABEL' | translate }}</span>\n                  <span>{{item.DiscountPercentage}} %</span>\n                </li>\n                <li>\n                  <span class=\"tara\">{{ 'PROMO_KEY_LABEL' | translate }}</span>\n                  <span>{{item.Promo_Key}}</span>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"tab-pane fade\" id=\"expired\"\n        style=\"background: white; border-radius: 10px; padding: 20px; margin-top: 20px;\">\n        <div class=\"row\">\n          <div class=\"col-md-3\" *ngFor=\"let item of ExpirePromo\">\n            <div class=\"promo-card-jero\">\n              <div class=\"d-flex justify-content-between align-items-center\">\n                <div class=\"title-card\">\n                  {{item.PromoCode}}\n                </div>\n                <i class=\"fa fa-trash-o\" style=\"background-color: red;\"></i>\n              </div>\n              <ul>\n                <li>\n                  <span class=\"tara\">{{ 'NAME_LABEL' | translate }}</span>\n                  <span>{{item.PromoCode}}</span>\n                </li>\n                <li>\n                  <span class=\"tara\">{{ 'START_DATE_LABEL' | translate }}</span>\n                  <span>{{item.StartDate | date:'dd-MMM-yyyy'}}</span>\n                </li>\n                <li>\n                  <span class=\"tara\">{{ 'EXPIRY_DATE_LABEL' | translate }}</span>\n                  <span>{{item.EndDate | date:'dd-MMM-yyyy'}}</span>\n                </li>\n                <li>\n                  <span class=\"tara\">{{ 'DISCOUNT_PERCENT_LABEL' | translate }}</span>\n                  <span>{{item.DiscountPercentage}} %</span>\n                </li>\n                <li>\n                  <span class=\"tara\">{{ 'PROMO_KEY_LABEL' | translate }}</span>\n                  <span>{{item.Promo_Key}}</span>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade promo-modal\" id=\"expireModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"expireModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog promo-modal-dialog\" role=\"document\">\n    <div class=\"modal-content promo-modal-content\">\n      <div class=\"modal-header promo-modal-header\">\n        <h5 class=\"modal-title promo-modal-title\" id=\"exampleModalLabel\">{{ 'ADD_NEW_PROMO' | translate }}</h5>\n        <button type=\"button\" class=\"close promo-modal-close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body promo-modal-body\">\n        <form [formGroup]=\"aFormGroup\" class=\"promo-form\">\n          <div class=\"promo-form-grid\">\n            <div class=\"form-group promo-form-group\">\n              <label for=\"promocode\" class=\"promo-label\">{{ 'PROMO_CODE_LABEL' | translate }}</label>\n              <input formControlName=\"PromoCode\" name=\"PromoCode\" class=\"form-control promo-input\"\n                [ngClass]=\"{ 'promo-input-error': (aFormGroup.get('PromoCode').touched && ( aFormGroup.controls['PromoCode'].errors?.required || aFormGroup.controls['PromoCode'].errors?.minlength )) }\"\n                id=\"name\" placeholder=\"Enter promo code\" [(ngModel)]=\"promo.PromoCode\" required>\n              <div class=\"error-message\"\n                *ngIf=\"aFormGroup.controls['PromoCode'].errors?.required && aFormGroup.get('PromoCode').touched\">\n                <i class=\"fas fa-exclamation-circle\"></i> Promo code is required\n              </div>\n              <div class=\"error-message\"\n                *ngIf=\"aFormGroup.controls['PromoCode'].errors?.minlength && aFormGroup.get('PromoCode').touched\">\n                <i class=\"fas fa-exclamation-circle\"></i> Minimum length must be 4 characters\n              </div>\n            </div>\n            <div class=\"form-group promo-form-group\">\n              <label for=\"discountpercentage\" class=\"promo-label\">{{ 'DISCOUNT_PERCENTAGE_LABEL' | translate }}</label>\n              <input type=\"number\" name=\"Discount\" formControlName=\"DiscountPercentage\" class=\"form-control promo-input\"\n                [ngClass]=\"{ 'promo-input-error': (aFormGroup.get('DiscountPercentage').touched && aFormGroup.controls['DiscountPercentage'].errors?.required) }\"\n                id=\"address\" [(ngModel)]=\"promo.DiscountPercentage\" placeholder=\"Enter discount percentage\" required>\n              <div class=\"error-message\"\n                *ngIf=\"!aFormGroup.controls['DiscountPercentage'].valid && aFormGroup.get('DiscountPercentage').touched\">\n                <i class=\"fas fa-exclamation-circle\"></i> Discount percentage is required\n              </div>\n            </div>\n            <div class=\"form-group promo-form-group\">\n              <label for=\"startdate\" class=\"promo-label\">{{ 'START_DATE_LABEL' | translate }}</label>\n              <input (change)=\"startSelected($event)\" onkeydown=\"return false\" type=\"date\" name=\"StartDate\"\n                min=\"{{ minDateStart }}\" formControlName=\"StartDate\" class=\"form-control promo-input\" id=\"startdate\"\n                [(ngModel)]=\"promo.StartDate\" placeholder=\"Select start date\" required\n                [ngClass]=\"{ 'promo-input-error': (aFormGroup.get('StartDate').touched && aFormGroup.controls['StartDate'].errors?.required) }\">\n              <div class=\"error-message\"\n                *ngIf=\"!aFormGroup.controls['StartDate'].valid && aFormGroup.get('StartDate').touched\">\n                <i class=\"fas fa-exclamation-circle\"></i> Start date is required\n              </div>\n            </div>\n            <div class=\"form-group promo-form-group\">\n              <label for=\"expdate\" class=\"promo-label\">{{ 'EXPIRY_DATE_LABEL' | translate }}</label>\n              <input type=\"date\" name=\"EndDate\" onkeydown=\"return false\" [attr.disabled]=\"!isStartDateSelected\"\n                min=\"{{ minDateEnd }}\" formControlName=\"EndDate\" class=\"form-control promo-input\" id=\"expdate\"\n                placeholder=\"Select expiry date\" [(ngModel)]=\"promo.EndDate\" (blur)=\"compareTwoDates()\"\n                [ngClass]=\"{ 'promo-input-error': (aFormGroup.get('EndDate').touched && aFormGroup.controls['EndDate'].errors?.required) }\"\n                required>\n              <div class=\"error-message\"\n                *ngIf=\"!aFormGroup.controls['EndDate'].valid && aFormGroup.get('EndDate').touched\">\n                <i class=\"fas fa-exclamation-circle\"></i> End date is required\n              </div>\n              <div class=\"error-message\" *ngIf=\"aFormGroup.errors && aFormGroup.get('EndDate').touched\">\n                <i class=\"fas fa-exclamation-circle\"></i> {{ aFormGroup.errors?.dates }}\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer promo-modal-footer\">\n        <button type=\"button\" class=\"btn promo-btn-cancel\" data-dismiss=\"modal\">{{ 'CANCEL' | translate }}</button>\n        <button type=\"button\" id=\"btnsubmit\" (click)=\"AddPromo()\" class=\"btn promo-btn-primary\"\n          [disabled]=\"!aFormGroup.valid\">{{ 'ADD_NEW_PROMO' | translate }}</button>\n      </div>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/reports.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reports/reports.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppReportsReportsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row  text-center\">\n  <div class=\"post-trip-btn \">\n    {{ 'MY_BOOKING' | translate }}\n  </div>\n</div>\n<div class=\"d-flex justify-content-center mt-3\">\n\n      \n <div class=\"col-md-3 custom-input custom-input-search\">\n     <div class=\"form-group has-search\">\n         <span class=\"fa fa-search form-control-feedback\"></span>\n         <input  placeholder=\"{{ 'SEARCH' | translate }}\" type=\"text\" class=\"form-control\" >\n       </div>\n </div>\n\n</div>\n<div class=\"row\">\n <div class=\"col-2  col-md-2 col-lg-1 \"></div>\n <div class=\"col-8  col-md-8  col-lg-10 mb-2\">\n <div class=\"container-fluid-custom\">\n \n\n      <!-- Nav pills -->\n\n\n<!-- Tab panes -->\n<div class=\"tab-content mb-5 mt-4 pb-5\">\n<div *ngFor=\"let item of tripModalList\"  class=\"main-card pr-2 mt-4 main-card-border rounded\">\n     \n <div  class=\"row\">\n\n      <div class=\"col-md-4 pr-0\">      \n       <img src=\"./assets/img/profile-img/D.png\" class=\"img-fluid w-100 h-100 \" alt=\"Sample Image\"> \n      \n     </div>\n     <div class=\"col-md-5 pr-0 pl-0\">\n               \n       <div class=\"media-body content-wrapper\">\n                 \n         <h2 class=\"media-heading mt-4\">{{item.Title}}</h2>\n         <div class=\"discount-name mb-2 mt-2\">5%OFF + Promo</div>\n\n       \n       \n               <div class=\"blue-bar\">\n                   <div class=\"d-flex justify-content-around\">\n                 \n                       <div class=\"sub-menu\">\n                         <img src=\"./assets/img/dashboard/png-icons/c.png\">\n                         <span class=\"menu-title\">May 22, 2020</span>\n                       </div>\n                       <div class=\"sub-menu\">\n                         <img src=\"./assets/img/dashboard/png-icons/d.png\">\n                         <span class=\"menu-title\">1 Day</span>\n                       </div>\n                       <div class=\"sub-menu\">\n                         <img src=\"./assets/img/dashboard/png-icons/l.png\">\n                         <span class=\"menu-title\">Starting from Karachi</span>\n                       </div>\n                     \n                     \n                     </div>\n               </div>\n       \n               <div class=\"gray-bar\">\n                   <div class=\"d-flex\">\n                 \n                       <div class=\"ml-5 sub-menu\">\n                         <img src=\"./assets/img/dashboard/png-icons/rr.png\">\n                         <span class=\"cash-title\">CASH ON DELIVERY, BANK TRANSFER</span>\n                       </div>\n                       <div class=\"ml-5 pl-5 sub-menu\">\n                         <img src=\"./assets/img/dashboard/reports-icons/bus.png\">\n                         <span class=\"cash-title\">TRANSPORT</span>\n                       </div>\n                   \n                     \n                     \n                     </div>\n               </div>\n    \n               <div class=\"gray-bar\">\n                   <div class=\"d-flex\">\n                 \n                       <div class=\"ml-5 mr-5 pr-2 sub-menu\">\n                         <img src=\"./assets/img/dashboard/png-icons/food.png\">\n                         <span class=\"cash-title\">STANDARD MEALS</span>\n                       </div>\n                       <div class=\"ml-5 pl-5 sub-menu\">\n                         <img src=\"./assets/img/dashboard/reports-icons/guide.png\">\n                         <span class=\"cash-title\">TRANSPORT</span>\n                       </div>\n                   \n                     \n                     \n                     </div>\n               </div>\n               <div class=\"mt-3  \">\n                   <div class=\"d-flex badge-custom-bar justify-content-around\">\n                 \n                   \n                     <a href=\"#\" class=\"badgse pr-2 pl-2 badge-warning1 text-white\">KARACHI</a>\n                     <a href=\"#\" class=\"badgse pr-2 pl-2 badge-warning1 text-white\">DAY TRIPS</a>\n                     <a href=\"#\" class=\"badgse pr-2 pl-2 badge-warning1 text-white\">DAY TRIPS</a>\n                     <a href=\"#\" class=\"badgse pr-2 pl-2 badge-warning1 text-white\">SINDH</a>\n                     <a href=\"#\" class=\"badgse pr-2 pl-2 badge-warning1 text-white\">DEALS</a>\n                     <a href=\"#\" class=\"badgse pr-2 pl-2 badge-warning1 text-white\">OTHERS</a>\n                     \n                     </div>\n               </div>\n    \n\n\n\n   </div>\n     </div>\n        <div class=\"col-md-3 ml-0\">      \n         <div class=\"media-body-rates  parallelogram-blue m-2 \">\n           <div class=\"rates-heading2 text-right mr-3 pt-4\">  \n             <h1 class=\"rate\"><span class=\"rs-text\">Rs.</span> 2,250</h1>\n        \n           <a class=\"btn-per-person\">Per person</a>\n           <!-- <a href=\"\" class=\"btn btn-detail-second mt-1\">Report</a> -->\n           <div class=\"icons-arae-second mt-2\">\n           \n<button class=\"Report-btn\">REPORT <i class=\"fa fa-paper-plane-o ml-3\" aria-hidden=\"true\"></i>\n</button>\n           <p class=\"report-text pl-5 pr-5 pt-5 pb-5\">\n             Reports About Your Trip Will\nbe Sent on your Mai\n           </p>\n           </div>\n          \n     </div>\n       \n </div>\n        </div>\n\n\n</div>\n</div>\n\n\n</div>\n</div>\n\n </div>\n <div class=\"col-2  col-md-2 col-lg-1 \"></div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/reset-password/reset-password.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reset-password/reset-password.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppResetPasswordResetPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"auth\" *ngIf=\"resetPasswordModel.Email\">\n  <div class=\"public-layout-wrapper\">\n    <div class=\"public-layout-splash\">\n    </div>\n    <div id=\"form_login\" class=\"public-layout-card\">\n        <div class=\"auth-card-inner\">\n          <img src=\"../../assets/img/revamp/logo-header.svg\" alt=\"logo\" class=\"logo-login\">\n            <h4>Reset Password</h4>\n            <p>Please enter your verification code and new password</p>\n            <ng-container>\n              <form [formGroup]=\"resetPasswordFrom\" (ngSubmit)=\"resetPassword()\" method=\"POST\">\n                <div class=\"tripjero-floating\">\n                    <input \n                    [value]=\"email\"\n                    type=\"email\" \n                    class=\"form-control\" \n                    disabled \n                    placeholder=\"Enter Your Email Address\"\n                    />\n                    <label class=\"float-label\">Email address</label>\n                </div>\n                <div class=\"tripjero-floating\">\n                  <input \n                  formControlName=\"OPT\" \n                  type=\"number\" \n                  class=\"form-control\" \n                  placeholder=\"Enter Your Code\"\n                  />\n                  <label class=\"float-label\">Verification Code</label>\n                  <div style=\"font-size:12px;color: red;\" *ngIf=\"resetPasswordFrom.get('OPT').invalid && (resetPasswordFrom.get('OPT').dirty || resetPasswordFrom.get('OPT').touched)\">\n                    <div *ngIf=\"resetPasswordFrom.get('OPT').errors?.required\">\n                      Verification code is required.\n                    </div>\n                    <div *ngIf=\"resetPasswordFrom.get('OPT').errors?.min\">\n                      Verification code is required.\n                    </div>\n                  </div>\n              </div>\n              <div class=\"tripjero-floating\">\n                <input \n                  [type]=\"isHidden ? 'password' : 'text'\"\n                  formControlName=\"Password\" \n                  class=\"form-control\" \n                  placeholder=\"Enter Your New Password\"\n                  />\n                <label class=\"float-label\">New Password</label>\n                <span *ngIf=\"resetPasswordFrom.get('Password').value\" class=\"p-viewer\" (click)=\"showHidePassword()\">\n                  <i class=\"fa\" [class]=\"isHidden ? 'fa-eye' : 'fa-eye-slash'\" aria-hidden=\"true\"></i>\n                </span>\n                <div style=\"font-size:12px;color: red;\" *ngIf=\"resetPasswordFrom.get('Password').invalid && (resetPasswordFrom.get('Password').dirty || resetPasswordFrom.get('Password').touched)\">\n                  <div *ngIf=\"resetPasswordFrom.get('Password').errors?.required\">\n                    Password is required.\n                  </div>\n                  <div *ngIf=\"resetPasswordFrom.get('Password').errors?.pattern\">\n                    Password must contain at least 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special case character.\n                  </div>\n                </div>\n              </div>\n              <div class=\"tripjero-floating\">\n                <input \n                  [type]=\"isHiddenConfirm ? 'password' : 'text'\"\n                  formControlName=\"ConfirmPassword\" \n                  class=\"form-control\" \n                  placeholder=\"Confirm Your New Password\"\n                  />\n                <label class=\"float-label\">Confirm Password</label>\n                <span *ngIf=\"resetPasswordFrom.get('ConfirmPassword').value\" class=\"p-viewer\" (click)=\"showHideConfirmPassword()\">\n                  <i class=\"fa\" [class]=\"isHiddenConfirm ? 'fa-eye' : 'fa-eye-slash'\" aria-hidden=\"true\"></i>\n                </span>\n                <div style=\"font-size:12px;color: red;\" *ngIf=\"resetPasswordFrom.get('ConfirmPassword').invalid && (resetPasswordFrom.get('ConfirmPassword').dirty || resetPasswordFrom.get('ConfirmPassword').touched)\">\n                  <div *ngIf=\"resetPasswordFrom.get('ConfirmPassword').errors?.required\">\n                    Confirm password is required.\n                  </div>\n                  <div *ngIf=\"resetPasswordFrom.get('ConfirmPassword').errors?.confirmedValidator\">\n                    Password and confirm password do not match.\n                  </div>\n                </div>\n              </div>\n                <div class=\"d-flex justify-content-between align-items-center mb-3\">\n                  <p>Already registered?</p>\n                  <a class=\"forget-pass\" (click)=\"showLoginScreen()\" tabindex=\"-1\">Login</a>\n                </div>\n                <div class=\"d-flex\">\n                  <button\n                  id=\"submitbutton\"\n                    type=\"submit\"\n                    class=\"jero-btn jero-btn-primary mx-auto w-50\"\n                    [disabled]=\"resetPasswordFrom.invalid\"\n                  >\n                    Reset Password\n                  </button>\n                </div>\n            </form>\n            </ng-container>\n        </div>\n    </div>\n</div>\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/self/about-us/about-us.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/self/about-us/about-us.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSelfAboutUsAboutUsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  about-us works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/self/contact-us/contact-us.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/self/contact-us/contact-us.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSelfContactUsContactUsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"bg-image \">\n  <div class=\"container\">\n      <div class=\"login-card pt-5\">\n          <div class=\"row \">\n              <div class=\"col-md-6 order-sm-1  order-md-0 login-form-2\">\n\n                 <div class=\"p-4 pt-1 \">\n                  <h3>Contact Us</h3>\n\n                      <div class=\"row\">\n                      <div class=\"form-group custom-input-login col mr-auto mt-4\">\n                          <input type=\"text\" class=\"form-control \" placeholder=\"Name\" value=\"\" />\n                      </div>\n                      <div class=\"form-group custom-input-login col ml-auto mt-4\">\n                          <input type=\"text\" class=\"form-control \" placeholder=\"Email\" value=\"\" />\n                      </div>\n                      </div>\n                      <div class=\"form-gsroup custom-input-login mt-4 \">\n                          <input type=\"text\" class=\"form-control \" placeholder=\"Phone\" value=\"\" />\n                      </div>\n                      <div class=\"form-group custom-input-login mt-4\" >\n\n                          <textarea class=\"form-control\" name=\"Message\" id=\"\" cols=\"30\" rows=\"5\"></textarea>\n\n                      </div>\n\n\n                    <div class=\"btn btn-block btn-Reguister-form\">Contact Us</div>\n\n\n\n                  </div>\n              </div>\n              <div class=\"col-md-6 order-sm-0 order-md-1  signup-form\">\n\n                 <div class=\"create-text-box\">\n                  <h5 class=\"mb-5  pt-5\"><i class=\"fa fa-envelope p-1 pl-2 pr-2\" aria-hidden=\"true\"></i><a href=\"mailto:info@tripjero.co\">info@tripjero.com</a> </h5>\n                  <h5 class=\"mb-5  \"><i class=\"fa fa-phone p-1 pl-2 pr-2\" aria-hidden=\"true\"></i> <a href=\"mailto:info@tripjero.co\">+92349071338</a> </h5>\n\n                  <h5 class=\"mb-5  \"><i class=\"fa fa-home p-1 pl-2 pr-2\" aria-hidden=\"true\"></i> <a href=\"mailto:info@tripjero.co\">240\n                      Street 47,\n                      G-10/4\n                      Islamabad\n                      , Pakistan</a> </h5>\n                      <div class=\"social-icons mt-4 \">\n                          <a href=\"https://www.facebook.com/tripjeroo\" target=\"_blank\">\n                              <i class=\"fa fa-facebook p-1 pl-2 pr-2\" aria-hidden=\"true\"></i>\n                            </a>\n                          <a href=\"#\">\n                            <i class=\"fa fa-instagram p-1 \" aria-hidden=\"true\"></i>\n                          </a>\n\n\n\n                        </div>\n\n                 </div>\n              </div>\n          </div>\n\n      </div>\n  </div>\n</div> <br><br>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/self/faqs/faqs.component.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/self/faqs/faqs.component.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSelfFaqsFaqsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  faqs works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"auth\">\n  <div class=\"public-layout-wrapper\">\n    <div class=\"public-layout-splash\">\n    </div>\n    <div id=\"form_login\" class=\"public-layout-card\">\n      <div class=\"auth-card-inner\">\n        <img src=\"../../assets/img/revamp/logo-header.svg\" alt=\"logo\" class=\"logo-login\">\n        <h4>Sign Up</h4>\n        <p>Please sign up for your account</p>\n        <form id=\"singUpFrom\" method=\"POST\" [formGroup]=\"singUpFrom\" (submit)=\"submit()\">\n          <div class=\"tripjero-floating\">\n            <input [(ngModel)]=\"user.Name\" type=\"text\" class=\"form-control\" placeholder=\"Name\" autocomplete=\"false\"\n              formControlName=\"Name\">\n            <label for=\"Name\" class=\"float-label\">Name</label>\n            <div style=\"font-size:12px;color: red;\"\n              *ngIf=\"singUpFrom.controls['Name'].invalid && (singUpFrom.controls['Name'].dirty || singUpFrom.controls['Name'].touched)\">\n              <div *ngIf=\"singUpFrom.controls['Name'].errors.required\">\n                Name is required.\n              </div>\n            </div>\n          </div>\n          <div class=\"tripjero-floating\">\n            <input type=\"email\" [(ngModel)]=\"user.Email\" class=\"form-control\" placeholder=\"Email\"\n              formControlName=\"Email\">\n            <label for=\"Email\" class=\"float-label\">Email</label>\n            <div style=\"font-size:12px;color: red;\"\n              *ngIf=\"singUpFrom.controls['Email'].invalid && (singUpFrom.controls['Email'].dirty || singUpFrom.controls['Email'].touched)\">\n              <div *ngIf=\"singUpFrom.controls['Email'].errors.required\">\n                Email is required.\n              </div>\n              <div *ngIf=\"singUpFrom.controls['Email'].errors.pattern\">\n                Email is not valid.\n              </div>\n            </div>\n          </div>\n          <div class=\"tripjero-floating\">\n            <input [type]=\"isHidden ? 'password' : 'text'\" [(ngModel)]=\"user.Password\" class=\"form-control\"\n              name=\"Password\" formControlName=\"Password\" placeholder=\"Password\">\n            <label for=\"Password\" class=\"float-label\">Password</label>\n            <span *ngIf=\"singUpFrom.get('Password').value\" for='icon' class=\"p-viewer\" (click)=\"showHidePassword()\">\n              <i class=\"fa\" [class]=\"isHidden ? 'fa-eye' : 'fa-eye-slash'\" aria-hidden=\"true\"></i>\n            </span>\n            <div style=\"font-size:12px;color: red;\"\n              *ngIf=\"singUpFrom.controls['Password'].invalid && (singUpFrom.controls['Password'].dirty || singUpFrom.controls['Password'].touched)\">\n              <div *ngIf=\"singUpFrom.controls['Password'].errors.required\">\n                Password is required.\n              </div>\n              <div *ngIf=\"singUpFrom.controls['Password'].errors.pattern\">\n                Password must contain at least 8 characters, 1 uppercase,1 lowercase, 1 number and 1 special case\n                character.\n              </div>\n            </div>\n          </div>\n          <div class=\"tripjero-floating\">\n            <input [type]=\"isHidden ? 'password' : 'text'\" class=\"form-control\" name=\"Password\"\n              formControlName=\"ConfirmPassword\" placeholder=\"Confirm Password\">\n            <label for=\"ConfirmPassword\" class=\"float-label\">Confirm Password</label>\n            <span *ngIf=\"singUpFrom.get('ConfirmPassword').value\" for='icon' class=\"p-viewer\"\n              (click)=\"showHidePassword()\">\n              <i class=\"fa\" [class]=\"isHidden ? 'fa-eye' : 'fa-eye-slash'\" aria-hidden=\"true\"></i>\n            </span>\n            <div style=\"font-size:12px;color: red;\"\n              *ngIf=\"singUpFrom.controls['ConfirmPassword'].invalid && (singUpFrom.controls['ConfirmPassword'].dirty || singUpFrom.controls['ConfirmPassword'].touched)\">\n              <div *ngIf=\"singUpFrom.controls['ConfirmPassword'].errors.required\">\n                Confirm Password is required.\n              </div>\n              <div *ngIf=\"singUpFrom.controls['ConfirmPassword'].errors.confirmedValidator\">\n                Password and confirm not match.\n              </div>\n            </div>\n          </div>\n          <div class=\"d-flex\">\n            <button [disabled]=\"singUpFrom.pristine || singUpFrom.invalid\" id=\"submitbutton\" type=\"submit\"\n              class=\"jero-btn jero-btn-primary mx-auto w-50\">\n              Sign Up\n            </button>\n          </div>\n          <div class=\"social-login\">\n            <p>Or Login with</p>\n            <app-socail-logins></app-socail-logins>\n          </div>\n          <div class=\"form-footer\">\n            <p>Already registered? <a class=\"forget-pass\" (click)=\"navigateTo()\">Login</a> Now</p>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tripdetail/tripdetail.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tripdetail/tripdetail.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTripdetailTripdetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"wrap-detail-page row\">\n        <div class=\"col-md-12\">\n          <div class=\"banner-detail-page\">\n            <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n              <ol class=\"carousel-indicators\">\n                <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n                <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n                <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n              </ol>\n              <div class=\"carousel-inner\">\n                <div *ngFor=\"let item of tripDetail.TripImages\" class=\"carousel-item\">\n                  <img class=\"d-block w-100\" src=\"{{ domainUrl }}/{{ item.ImageUrl }}\" alt=\"First slide\"\n                    onerror=\"src='./assets/img/photo1.png';\" />\n                </div>\n                <div class=\"carousel-item active\">\n                  <img src=\"{{ domainUrl }}/{{\n              tripDetail.TripBasicInfo.FeaturesImage\n            }}\" alt=\"Third slide\" onerror=\"src='./assets/img/photo1.png';\" />\n                </div>\n              </div>\n              <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n                <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                <span class=\"sr-only\">Previous</span>\n              </a>\n              <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n                <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                <span class=\"sr-only\">Next</span>\n              </a>\n            </div>\n            <div class=\"price-box\">\n              <div class=\"price-box-inner\">\n                <h3>\n                  <img class=\"currency\" src=\"../../assets/img/revamp/riyal.svg\" width=\"30px\" height=\"30px\">\n                  {{tripDetail.tripPrices.CurrentAmount | number}}\n                </h3>\n                <a class=\"jero-btn jero-btn-primary\">Per Person</a>\n                <div class=\"d-flex justify-content-between user-name\">\n                  <div class=\"stars mt-stars\" *ngIf=\"tripDetail.AvgStars > 0\">\n                    <bar-rating [(rate)]=\"rating\" [max]=\"5\"></bar-rating>\n                    <span *ngFor=\"let item of [].constructor(tripDetail.AvgStars)\" class=\"fa fa-star checked\"></span>\n                    <span *ngFor=\"let item of [].constructor(5 - tripDetail.AvgStars)\" class=\"fa fa-star\"></span>\n                    <span style=\"color: aliceblue;\">({{ tripDetail.TotalRevews }})</span>\n                  </div>\n                  <div class=\"stars mt-stars\" *ngIf=\"tripDetail.AvgStars == 0\">\n                    <bar-rating [(rate)]=\"rating\" [max]=\"5\"></bar-rating>\n                    <span *ngFor=\"let item of [].constructor(5)\" class=\"fa fa-star\"></span>\n                    <span>({{ tripDetail.TotalRevews }})</span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"off-n-promo\">\n                <span class=\"discount-tag\">\n                  <p class=\"discount-percentage\">5%OFF + Promo</p>\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-12 mb-3\" *ngIf=\"tripDetail.TripStatus!='Complete' && tripDetail.TripStatus!='Cancel'\">\n          <ul class=\"tabing-jero\" role=\"tablist\">\n            <li *ngIf=\"tripDetail.TripStatus=='Hold'\">\n              <a class=\"jero-btn jero-btn-primary-outlined active\" (click)=\"UpdateTripStatus(3)\">Resume</a>\n            </li>\n            <li *ngIf=\"tripDetail.TripStatus=='Hold' || tripDetail.TripStatus=='Schedule'\">\n              <a class=\"jero-btn jero-btn-primary-outlined\" (click)=\"UpdateTripStatus(5)\">Cancel</a>\n            </li>\n            <li *ngIf=\"tripDetail.TripStatus=='Schedule'\">\n              <a class=\"jero-btn jero-btn-primary-outlined\" (click)=\"UpdateTripStatus(4)\">Hold</a>\n            </li>\n            <li *ngIf=\"tripDetail.TripStatus=='Schedule' && tripDetail.TripBasicInfo.NO_MORE_BOOKING\">\n              <a class=\"jero-btn jero-btn-primary-outlined\" (click)=\"UpdateTripStatus(0,'ST')\">Start\n                Booking</a>\n            </li>\n            <li *ngIf=\"tripDetail.TripStatus=='Schedule' && !tripDetail.TripBasicInfo.NO_MORE_BOOKING\">\n              <a class=\"jero-btn jero-btn-primary-outlined\" (click)=\"UpdateTripStatus(0,'SP')\">Stop\n                Booking</a>\n            </li>\n            <li class=\"\">\n              <a class=\"jero-btn jero-btn-primary-outlined\" id=\"openModalButton\" data-toggle=\"modal\"\n                data-target=\"#exampleModalCenter\">Share trip</a>\n            </li>\n          </ul>\n        </div>\n        <div *ngIf=\" tripDetail.TripStatus=='Complete'\" class=\" col-md-12\">\n          <ul class=\"tabing-jero\" role=\"tablist\">\n            <li class=\"\">\n              <a class=\"jero-btn jero-btn-primary-outlined\" (click)=\"report(tripDetail.TripBasicInfo.Id)\"\n                *ngIf=\"tripDetail.TripStatus=='Complete'\">Report</a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-12 mt-3 mb-3\">\n          <div class=\"tripjero-floating\">\n            <input type=\"text\" class=\"form-control\" value=\"{{ tripDetail.TripBasicInfo.Title }}\" disabled />\n            <label for=\"title\" class=\"float-label\">Trip Title</label>\n          </div>\n        </div>\n        <div class=\"col-md-6 mb-3\">\n          <div class=\"tripjero-floating\">\n            <input type=\"text\" class=\"form-control\" value=\"{{ tripDetail.TripBasicInfo.FromPlaceName }}\" disabled />\n            <label for=\"fromPlaceName\" class=\"float-label\">From Place</label>\n          </div>\n        </div>\n        <div class=\"col-md-6 mb-3\">\n          <div class=\"tripjero-floating\">\n            <input type=\"text\" class=\"form-control\" value=\"{{ tripDetail.TripBasicInfo.ToPlaceName }}\" disabled />\n            <label for=\"toPlaceName\" class=\"float-label\">To Place</label>\n          </div>\n        </div>\n        <div class=\"col-md-6 mb-3\">\n          <div class=\"tripjero-floating\">\n            <input type=\"text\" class=\"form-control\"\n              value=\"{{ tripDetail.TripBasicInfo.StartDateTime | date: 'longDate' }}\" disabled />\n            <label for=\"startDateTime\" class=\"float-label\">Start Date</label>\n          </div>\n        </div>\n        <div class=\"col-md-6 mb-3\">\n          <div class=\"tripjero-floating\">\n            <input type=\"text\" class=\"form-control\" value=\"{{ tripDetail.TripBasicInfo.Duration }} Days\" disabled />\n            <label for=\"duration\" class=\"float-label\">Duration (Days)</label>\n          </div>\n        </div>\n        <div class=\"col-md-6 mb-3\">\n          <div class=\"tripjero-floating\">\n            <input type=\"text\" class=\"form-control\" value=\"{{ tripDetail.TripBasicInfo.CategoriesName }}\" disabled />\n            <label for=\"categoriesName\" class=\"float-label\">Categories</label>\n          </div>\n        </div>\n        <div class=\"col-md-6 mb-3\">\n          <div class=\"tripjero-floating\">\n            <input type=\"text\" class=\"form-control\" value=\"{{ tripDetail.TripBasicInfo.TotalNumberOfViews }}\"\n              disabled />\n            <label for=\"totalNumberOfViews\" class=\"float-label\">Total Views</label>\n          </div>\n        </div>\n        <div class=\"col-md-6 mb-3\">\n          <div class=\"tripjero-floating\">\n            <input type=\"text\" class=\"form-control\" value=\"{{ tripDetail.TripBasicInfo.TripStatus }}\" disabled />\n            <label for=\"tripStatus\" class=\"float-label\">Trip Status</label>\n          </div>\n        </div>\n        <div class=\"col-md-6 mb-3\">\n          <div class=\"tripjero-floating\">\n            <input type=\"text\" class=\"form-control\"\n              value=\"{{ tripDetail.TripBasicInfo.NO_MORE_BOOKING ? 'Unavailable for Booking' : 'Available for Booking' }}\"\n              [style.color]=\"tripDetail.TripBasicInfo.NO_MORE_BOOKING ? 'red' : 'green'\" disabled />\n            <label for=\"noMoreBooking\" class=\"float-label\">Booking Availability</label>\n          </div>\n        </div>\n        <div class=\"col-md-6 mb-3\">\n          <div class=\"tripjero-floating\">\n            <input type=\"text\" class=\"form-control\" value=\"{{ tripDetail.TripBasicInfo.IsBoost ? 'Yes' : 'No' }}\"\n              [style.color]=\"tripDetail.TripBasicInfo.IsBoost ? 'green' : 'red'\" disabled />\n            <label for=\"isBoost\" class=\"float-label\">Boost Status</label>\n          </div>\n        </div>\n        <div class=\"col-md-6 mb-3\">\n          <div class=\"tripjero-floating\">\n            <input type=\"text\" class=\"form-control\" value=\"{{ tripDetail.tripPrices.HavePromo ? 'Yes' : 'No' }}\"\n              [style.color]=\"tripDetail.tripPrices.HavePromo ? 'green' : 'red'\" disabled />\n            <label for=\"havePromo\" class=\"float-label\">Promo Available</label>\n          </div>\n        </div>\n        <div class=\"col-md-4 mb-3\">\n          <div class=\"tripjero-floating\">\n            <input type=\"text\" class=\"form-control\" value=\"{{ tripDetail.tripPrices.ActualAmount | number}}\" disabled />\n            <label for=\"actualAmount\" class=\"float-label\">Actual Amount</label>\n          </div>\n        </div>\n        <div class=\"col-md-4 mb-3\">\n          <div class=\"tripjero-floating\">\n            <input type=\"text\" class=\"form-control\" value=\"{{ tripDetail.tripPrices.DiscountPercentage }}%\" disabled />\n            <label for=\"discountPercentage\" class=\"float-label\">Discount Percentage</label>\n          </div>\n        </div>\n        <div class=\"col-md-4 mb-3\">\n          <div class=\"tripjero-floating\">\n            <input type=\"text\" class=\"form-control\" value=\"{{ tripDetail.tripPrices.CurrentAmount | number }}\" disabled />\n            <label for=\"currentAmount\" class=\"float-label\">Current Amount</label>\n          </div>\n        </div>\n        <div class=\"col-md-12 mb-3\">\n          <h4>Description</h4>\n          <h5 class=\"mb-4 heading-trip\">Trip Details</h5>\n          <p>{{ tripDetail.TripBasicInfo.Details }}</p>\n        </div>\n        <div class=\"col-md-8\">\n          <h4>Facilities</h4>\n          <div *ngIf=\"tripDetail.Faclities && tripDetail.Faclities.Facalities\">\n            <ul class=\"jero-main-icon-list\">\n              <li *ngFor=\"let item of tripDetail.Faclities.Facalities\">\n                <div class=\"d-flex\">\n                  <img *ngIf=\"item.flag\" class=\"item-enabled\" src=\"./assets/img/fac_blue/{{item.icon_string}}.png\"\n                    alt=\"\">\n                  <img *ngIf=\"!item.flag\" class=\"item-disabled\" src=\"./assets/img/fac_grey/{{item.icon_string}}.png\"\n                    alt=\"\">\n                </div>\n                <span class=\"facilities-no-avail\"> {{ item?.title }}</span>\n                <ng-container *ngIf=\"item.havesub\">\n                  <ul class=\"jero-sub-icon-list\">\n                    <li *ngFor=\"let subItem of item.child\">\n                      <div class=\"d-flex\">\n                        <img *ngIf=\"subItem.flag\" class=\"item-enabled\"\n                          src=\"./assets/img/fac_blue/{{subItem.icon_string}}.png\" alt=\"\">\n                        <img *ngIf=\"!subItem.flag\" class=\"item-disabled\"\n                          src=\"./assets/img/fac_grey/{{subItem.icon_string}}.png\" alt=\"\">\n                      </div>\n                      <span class=\"facilities-no-avail\"> {{ subItem.title }}</span>\n                      <span *ngIf=\"subItem.flag && subItem.havesub\" class=\"facilities-no-avail\">\n                        <span *ngFor=\"let subSubItem of subItem.child\">\n                          <span *ngIf=\"subSubItem.flag\">\n                            ( {{ subSubItem.title }} Star )\n                          </span>\n                        </span>\n                      </span>\n                    </li>\n                  </ul>\n                </ng-container>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <h4>Trip Itinerary</h4>\n          <div class=\"steps\">\n            <div class=\"step\" *ngFor=\"let item of tripDetail.IternaryPlan; index as i\">\n              <div class=\"css-tooltip\">\n                <span class=\"tooltiptext\">\n                  Day: {{ i + 1 }}\n                </span>\n                <i class=\"tp-icon\"> +</i>\n              </div>\n              <div class=\"step-content\">\n                <h5>{{ item.DayName }}</h5>\n                <p *ngFor=\"let child of item.DayPlan; index as j\">\n                  {{ child.TaskDetaisl }}</p>\n              </div>\n            </div>\n          </div>\n          <h4 class=\"my-4\">Comments</h4>\n          <div class=\"direct-chat-messages\">\n            <!-- Message. Default to the left -->\n            <div *ngFor=\"let item of TripComments\">\n              <div class=\"direct-chat-msg\">\n                <div class=\"direct-chat-info clearfix\">\n                  <span class=\"direct-chat-name pull-left\">{{item.TravlerName}}</span>\n                  <span class=\"direct-chat-timestamp pull-right\">{{item.TravlerPostedDate | date:\"longDate\"}}\n                    {{item.TravlerPostedDate | date:\"shortDate\"}}</span>\n                </div>\n                <!-- /.direct-chat-info -->\n                <img class=\"direct-chat-img\" src=\"{{domainUrl}}/{{item.TravlerProfileImageUrl}}\"\n                  onerror=\"src='./assets/img/avatar5.png';\" alt=\"Message\"><!-- /.direct-chat-img -->\n                <div class=\"direct-chat-text\" [style.color]=\"item.IsSpam ? 'red':'black' \"\n                  [attr.title]=\"item.IsSpam ? 'You marked as '+ item.ReviewComments : null\">\n                  {{item.TravlerComment}} <a *ngIf=\"!item.IsSpam\" style=\"cursor: pointer;\"\n                    (click)=\"loadSpamDialog(item.CommentId)\" class=\"pull-right\">Mark</a>\n                  <a class=\"pull-right\" style=\"cursor: pointer;\" *ngIf=\"!item.OperatorComments\"\n                    (click)=\"showReplyInput(item.CommentId)\">\n                    Reply &nbsp;\n                  </a>\n                </div>\n                <!-- /.direct-chat-text -->\n              </div>\n              <!-- /.direct-chat-msg -->\n              <!-- Message to the right -->\n              <div class=\"direct-chat-msg right\" *ngIf=\"item.OperatorComments\">\n                <div class=\"direct-chat-info clearfix\">\n                  <span class=\"direct-chat-name pull-right\">You</span>\n                  <span class=\"direct-chat-timestamp pull-left\">{{item.OperatorReplyDateTime |\n                    date:\"longDate\"}} {{item.OperatorReplyDateTime | date:\"shortTime\"}}</span>\n                </div>\n                <!-- /.direct-chat-info -->\n                <div class=\"direct-chat-text\">\n                  {{item.OperatorComments}}\n                </div>\n                <!-- /.direct-chat-text -->\n              </div>\n            </div>\n            <!-- /.direct-chat-msg -->\n          </div>\n        </div>\n        <div class=\"col-md-12\">\n          <div class=\"overview\">\n            <div class=\"reviews\">\n              <h4 class=\" pt-5\">Reviews and Ratings</h4>\n              <div class=\"review mt-4\" *ngFor=\"let item of tripDetail.TripReviews\" title=\"{{item.Comment}}\">\n                <ng-container *ngIf=\"!item.Comment\">\n                  <div class=\"d-flex  justify-content-between user-name\">\n                    <h6> {{item.UserName}}</h6>\n                    <div class=\"stars mt-stars\" *ngIf=\"item.TripStar > 0\">\n                      <bar-rating [(rate)]=\"rating\" [max]=\"5\"></bar-rating>\n                      <span *ngFor=\"let item of [].constructor(item.TripStar)\" class=\"fa fa-star checked\"></span>\n                      <span *ngFor=\"let item of [].constructor(5 - item.TripStar)\" class=\"fa fa-star\"></span>\n                      <span>({{ item.TripStar }})</span>\n                    </div>\n                    <div class=\"stars mt-stars\" *ngIf=\"item.TripStar == 0\">\n                      <bar-rating [(rate)]=\"rating\" [max]=\"5\"></bar-rating>\n                      <span *ngFor=\"let item of [].constructor(5)\" class=\"fa fa-star\"></span>\n                      <span>({{ item.TripStar }})</span>\n                    </div>\n                    <span class=\"ml-auto post-date\">{{item.ReviewCreatedDateTime | date:'longDate'}}</span>\n                    <span class=\"ml-auto post-date\">{{item.ReviewCreatedDateTime | date:'shortTime'}}</span>\n                  </div>\n                  <div class=\"d-flex  justify-content-between\">\n                    <div class=\"review-text shadow-sm p-3 mb-5 bg-white rounded\">\n                      <p>\n                        {{item.Reviews}}\n                      </p>\n                    </div>\n                    <a *ngIf=\"tripDetail.TripStatus=='Complete'\" (click)=\"getReviewIdForSpam(item.ReviewId)\"\n                      data-toggle=\"modal\" data-target=\"#modal-info-markasspan\" class=\"mark-btn\">Mark</a>\n                  </div>\n                </ng-container>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<!-- <div class=\"container-fluid-custom\">\n  <div class=\"tab-content mb-5 pb-5\">\n    <div id=\"home\" class=\"container tab-pane active\">\n      <div class=\"\">\n        <div class=\"container-fluid\">\n          <div class=\"row\">\n            <div class=\"col-md-8\">\n              <div style=\"text-align: center;margin-top: 10px;\">\n                <ul>\n                  <a href=\"{{shareFB}}\" class=\"font-12\" target=\"_blank\"><i class=\"fa fa-facebook-square\"\n                      aria-hidden=\"true\"></i></a>\n                  <a style=\"margin-left: 5px;width: 50px;height: 50px;\" href=\"{{shareTwitter}}\" target=\"_blank\"><i\n                      class=\"fa fa-twitter-square\" aria-hidden=\"true\"></i></a>\n                  <a style=\"margin-left: 5px;\" href=\"{{shareLinkedIn}}\" target=\"_blank\"><i class=\"fa fa-linkedin-square\"\n                      aria-hidden=\"true\"></i></a>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row mt-5\">\n        <div class=\"col-md-4\">\n          <div class=\"card\" style=\"margin-top: 70px;\">\n            <h5 class=\"card-header\">Comments</h5>\n            <div class=\"card-body\">\n              <div class=\"col-md-12\">\n                <div class=\"box box-success direct-chat direct-chat-success\">\n                  <div class=\"box-header with-border\">\n                    <h3 class=\"box-title\">Comments Chat</h3>\n                    <div class=\"box-tools pull-right\">\n                      <span data-toggle=\"tooltip\" title=\"\" class=\"badge bg-green\"\n                        data-original-title=\"3 New Messages\">{{TripComments.length}}</span>\n                      <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\n                      </button>\n                    </div>\n                  </div>\n                  <div class=\"box-body\">\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div> -->\n\n<!-- mark as spam -->\n<div class=\"modal modal-custom fade\" id=\"modal-info-markasspan\">\n  <div class=\"modal-dialog modal-dialog-custom\">\n    <div class=\"modal-content modal-content-custom\">\n      <div class=\"modal-header modal-header-custom\">\n        <h4 class=\"modal-title modal-title-custom\">Confirmation!</h4>\n        <button type=\"button\" class=\"close modal-close-custom\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n      <div class=\"modal-body modal-body-custom\">\n        <label class=\"modal-label-custom\">Reason for marking as spam:</label>\n        <select class=\"form-control modal-select-custom\" [(ngModel)]=\"reviewSpamComment\">\n          <option value=\"Hate Speech\">Hate Speech</option>\n          <option value=\"Spam\">Spam</option>\n          <option value=\"Abusive Language\">Abusive Language</option>\n          <option value=\"Nudity\">Nudity</option>\n          <option value=\"Harrassment\">Harrassment</option>\n          <option value=\"Violence\">Violence</option>\n          <option value=\"False News\">False News</option>\n        </select>\n      </div>\n      <div class=\"modal-footer modal-footer-custom\">\n        <button type=\"button\" class=\"btn btn-default modal-btn-cancel\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn modal-btn-primary\" (click)=\"UpdateReviewsAsSpam()\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal modal-custom fade\" id=\"modal-info-markasspan-comment\">\n  <div class=\"modal-dialog modal-dialog-custom\">\n    <div class=\"modal-content modal-content-custom\">\n      <div class=\"modal-header modal-header-custom\">\n        <h4 class=\"modal-title modal-title-custom\">Confirmation!</h4>\n        <button type=\"button\" class=\"close modal-close-custom\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n      <div class=\"modal-body modal-body-custom\">\n        <label class=\"modal-label-custom\">Reason for marking as spam:</label>\n        <select class=\"form-control modal-select-custom\" [(ngModel)]=\"ReviewComments\">\n          <option value=\"Hate Speech\">Hate Speech</option>\n          <option value=\"Spam\">Spam</option>\n          <option value=\"Abusive Language\">Abusive Language</option>\n          <option value=\"Nudity\">Nudity</option>\n          <option value=\"Harrassment\">Harrassment</option>\n          <option value=\"Violence\">Violence</option>\n          <option value=\"False News\">False News</option>\n        </select>\n      </div>\n      <div class=\"modal-footer modal-footer-custom\">\n        <button type=\"button\" class=\"btn btn-default modal-btn-cancel\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn modal-btn-primary\" (click)=\"UpdateCommentAsSpam()\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- reply comment -->\n<div class=\"modal modal-custom fade\" id=\"modal-info-replyCommentBox\">\n  <div class=\"modal-dialog modal-dialog-custom\">\n    <div class=\"modal-content modal-content-custom\">\n      <div class=\"modal-header modal-header-custom\">\n        <h4 class=\"modal-title modal-title-custom\">Add Reply</h4>\n        <button type=\"button\" class=\"close modal-close-custom\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n      <div class=\"modal-body modal-body-custom\">\n        <label class=\"modal-label-custom\">Your Reply:</label>\n        <input type=\"text\" class=\"form-control modal-input-custom\" #commentReplyContent>\n      </div>\n      <div class=\"modal-footer modal-footer-custom\">\n        <button type=\"button\" class=\"btn btn-default modal-btn-cancel\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn modal-btn-primary\" (click)=\"AddCommentReply(commentReplyContent)\">Save\n          changes</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- share modal -->\n<div class=\"modal fade modal-custom\" data-keyboard=\"false\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\"\n  aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered modal-dialog-custom\" role=\"document\">\n    <div class=\"modal-content modal-content-custom\">\n      <div class=\"modal-header modal-header-custom\">\n        <h5 class=\"modal-title modal-title-custom\" id=\"exampleModalLongTitle\">Social Share</h5>\n        <button type=\"button\" class=\"close modal-close-custom\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body modal-body-custom\">\n        <div class=\"socialshare-custom\">\n          <ul class=\"socialshare-list-custom\">\n            <li><a href=\"{{shareFB}}\" class=\"font-12 socialshare-link-custom\" target=\"_blank\"><i\n                  class=\"fa fa-facebook-square\" aria-hidden=\"true\"></i></a></li>\n            <li><a href=\"{{shareTwitter}}\" class=\"socialshare-link-custom\" target=\"_blank\"><i\n                  class=\"fa fa-twitter-square\" aria-hidden=\"true\"></i></a></li>\n            <li><a href=\"{{shareLinkedIn}}\" class=\"socialshare-link-custom\" target=\"_blank\"><i\n                  class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i></a></li>\n            <li><a href=\"{{shareWhatsApp}}\" class=\"socialshare-link-custom\" target=\"_blank\"><i\n                  class=\"fa fa-whatsapp\" aria-hidden=\"true\"></i></a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/updatepas/updatepas.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/updatepas/updatepas.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUpdatepasUpdatepasComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"content\">\n\n    <!-- Default box -->\n    <div class=\"box\">\n        <div class=\"box-header with-border\">\n            <h3 class=\"box-title\">Update Password</h3>\n\n            <div class=\"box-tools pull-right\">\n                <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\" data-toggle=\"tooltip\"\n                        title=\"Collapse\">\n                    <i class=\"fa fa-minus\"></i>\n                </button>\n                <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"remove\" data-toggle=\"tooltip\" title=\"Remove\">\n                    <i class=\"fa fa-times\"></i>\n                </button>\n            </div>\n        </div>\n        <div class=\"box-body\">\n\n\n            <section class=\"content\">\n                <div class=\"row\">\n                  \n                    <form [formGroup]=\"postForm\" (ngSubmit)=\"updateProfile()\">\n\n\n                        <div class=\"box box-primary\">\n                            <div class=\"col-md-6\">\n    \n    \n                                <div class=\"box-body\">\n                                 \n                                    <div class=\"form-group\">\n                                        <label for=\"Name\">Current Password</label>\n                                        <input type=\"password\" class=\"form-control\" id=\"name\" [(ngModel)]=\"UserPassword.CurrentPassword\" formControlName=\"CurrentPassword\"  placeholder=\"CurrentPassword\" required>\n                                        <div *ngIf=\"submitted && f.CurrentPassword.errors\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"f.CurrentPassword.errors.required\" style=\"color: red;\">Current password is required</div>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label for=\"BName\">New password</label>\n                                        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"UserPassword.NewPassword\" formControlName=\"NewPassword\"  id=\"name\" placeholder=\"New Password\" required>\n                                        <div *ngIf=\"submitted && f.NewPassword.errors\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"f.NewPassword.errors.required\" style=\"color: red;\">New password is required</div>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label for=\"Address\">Confirm new password</label>\n                                        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"UserPassword.ConfirmPass\" formControlName=\"ConfirmPass\"  id=\"address\" placeholder=\"Confirm Password\" required>\n                                        <div *ngIf=\"submitted && f.ConfirmPass.errors\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"f.ConfirmPass.errors.required\" style=\"color: red;\">Confirm password is required</div>\n                                        </div>\n                                    </div>\n    \n                                </div>\n                                <!-- /.box-body -->\n    \n                                <div class=\"box-footer\">\n                                    <button type=\"submit\"  id=\"btnsubmit\" class=\"btn btn-primary \">Update</button>\n                                </div>\n    \n    \n    \n                            </div>\n                           \n    \n    \n                        </div>\n                     </form>\n\n                    <!--/.col (right) -->\n                </div>\n                <!-- /.row -->\n            </section>\n\n\n\n        </div>\n        <!-- /.box-body -->\n        <div class=\"box-footer\">\n            <p>\n            </p>\n\n        </div>\n        <!-- /.box-footer-->\n    </div>\n    <!-- /.box -->\n\n</section>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/verify/verify.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verify/verify.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVerifyVerifyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"content\">\n\n    <!-- Default box -->\n    <div class=\"box\">\n        <div class=\"box-header with-border\">\n            <h3 class=\"box-title\">Verify Profile</h3>\n\n            <div class=\"box-tools pull-right\">\n                <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\" data-toggle=\"tooltip\"\n                        title=\"Collapse\">\n                    <i class=\"fa fa-minus\"></i>\n                </button>\n                <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"remove\" data-toggle=\"tooltip\" title=\"Remove\">\n                    <i class=\"fa fa-times\"></i>\n                </button>\n            </div>\n        </div>\n        <div class=\"box-body\">\n\n\n            <section class=\"content\">\n                <div class=\"row\">\n                  \n                    <form [formGroup]=\"postForm\" (ngSubmit)=\"updateProfile()\">\n\n                    <div class=\"box box-primary\">\n                        <div class=\"col-md-6\">\n\n\n                            <div class=\"box-body\">\n                             \n                                <div class=\"form-group\">\n                                    <label for=\"Name\">LicenceNumber</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)]=\"user.Licence.LicenceNumber\" formControlName=\"LicenceNumber\" placeholder=\"LicenceNumber\" required>\n                                    <div *ngIf=\"submitted && f.LicenceNumber.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.LicenceNumber.errors.required\" style=\"color: red;\">Licence number is required</div>\n                                    </div>\n                                </div>\n                               \n                              \n                                <div class=\"row\">\n                                    <div class=\"col-xs-6 col-sm-6 col-md-6\">\n                                      <div class=\"form-group\">\n                                        <label>Licence Document</label>\n                                        <div class=\"input-group\">\n                                          <span class=\"btn btn-default btn-file\">\n                                            Browse… <input type=\"file\" id=\"imgInp\" accept='image/*' formControlName=\"LicenceImage\" #file (change)=\"preview(file.files)\" class=\"form-control\" readonly>\n                                            <div *ngIf=\"submitted && f.LicenceImage.errors\" class=\"invalid-feedback\">\n                                              <div *ngIf=\"f.LicenceImage.errors.required\" style=\"color: red;\">Licence document required</div>\n                                          </div>\n                                          </span>\n                                         \n                                        </div>\n          \n                                      </div>\n                                    </div>\n                                    <div class=\"col-xs-6 col-sm-6 col-md-6\">\n                                      <div class=\"form-group\">\n                                        <img [src]=\"imgURL\" height=\"200\" *ngIf=\"imgURL\" />\n                                      </div>\n                                    </div>\n                                  </div>\n                                  \n\n\n                         \n                            <!-- /.box-body -->\n\n                            <div class=\"box-footer\">\n                                <button type=\"submit\" id=\"btnsubmit\" class=\"btn btn-primary\">Verify</button>\n                            </div>\n\n\n\n                        </div>\n                      </div>\n                      </div>\n                      \n\n\n                 </form>\n\n                    <!--/.col (right) -->\n                </div>\n                <h3>Note:</h3>\n                <ul>\n                    <li>\n                        Please upload a copy of Government issued license in image/PDF/word format.\n                    </li>\n                </ul>\n                <!-- /.row -->\n            </section>\n\n\n\n        </div>\n        <!-- /.box-body -->\n        <div class=\"box-footer\">\n            <p>\n            </p>\n\n        </div>\n        <!-- /.box-footer-->\n    </div>\n    <!-- /.box -->\n\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/Services/Bank/bank.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/Services/Bank/bank.service.ts ***!
    \***********************************************/

  /*! exports provided: BankService */

  /***/
  function srcAppServicesBankBankServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BankService", function () {
      return BankService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Utilities/triputilites.service */
    "./src/app/Services/Utilities/triputilites.service.ts");

    var BankService = /*#__PURE__*/function () {
      function BankService(utils) {
        _classCallCheck(this, BankService);

        this.utils = utils;
      }

      _createClass(BankService, [{
        key: "GetOptBankDetails",
        value: function GetOptBankDetails() {
          return this.utils.GenericServiceCallMethod('get', '/Bank/GetOptBankDetails', '', '');
        }
      }, {
        key: "GetBanks",
        value: function GetBanks() {
          return this.utils.GenericServiceCallMethod('get', '/Bank/GetBanks', '', '');
        }
      }, {
        key: "AddUpdateUserBank",
        value: function AddUpdateUserBank(bankData) {
          return this.utils.GenericServiceCallMethod('post', '/Bank/AddUpdateUserBank', '', bankData);
        }
      }]);

      return BankService;
    }();

    BankService.ctorParameters = function () {
      return [{
        type: _Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_2__["TriputilitesService"]
      }];
    };

    BankService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], BankService);
    /***/
  },

  /***/
  "./src/app/Services/Bookings/bookings.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Services/Bookings/bookings.service.ts ***!
    \*******************************************************/

  /*! exports provided: BookingsService */

  /***/
  function srcAppServicesBookingsBookingsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingsService", function () {
      return BookingsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Utilities/triputilites.service */
    "./src/app/Services/Utilities/triputilites.service.ts");

    var BookingsService = /*#__PURE__*/function () {
      function BookingsService(utilities) {
        _classCallCheck(this, BookingsService);

        this.utilities = utilities;
      }

      _createClass(BookingsService, [{
        key: "GetOperatorOldBookingTrips",
        value: function GetOperatorOldBookingTrips() {
          return this.utilities.GenericServiceCallMethod('get', 'TripBooking/GetOperatorOldBookingTrips', '', '');
        }
      }, {
        key: "GetOperatorScheduleBookingTrips",
        value: function GetOperatorScheduleBookingTrips() {
          return this.utilities.GenericServiceCallMethod('get', 'TripBooking/GetOperatorScheduleBookingTrips', '', '');
        }
      }, {
        key: "UpdateBookingStatus",
        value: function UpdateBookingStatus(data) {
          return this.utilities.GenericServiceCallMethod('post', 'TripBooking/UpdateBookingStatus', '', data);
        }
      }]);

      return BookingsService;
    }();

    BookingsService.ctorParameters = function () {
      return [{
        type: _Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_2__["TriputilitesService"]
      }];
    };

    BookingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BookingsService);
    /***/
  },

  /***/
  "./src/app/Services/BoostPackge/boostpackage.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/Services/BoostPackge/boostpackage.service.ts ***!
    \**************************************************************/

  /*! exports provided: BoostpackageService */

  /***/
  function srcAppServicesBoostPackgeBoostpackageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoostpackageService", function () {
      return BoostpackageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Utilities/triputilites.service */
    "./src/app/Services/Utilities/triputilites.service.ts");

    var BoostpackageService = /*#__PURE__*/function () {
      function BoostpackageService(utilities) {
        _classCallCheck(this, BoostpackageService);

        this.utilities = utilities;
      }

      _createClass(BoostpackageService, [{
        key: "GetAllBoostPackages",
        value: function GetAllBoostPackages() {
          return this.utilities.GenericServiceCallMethod('get', 'BoostTrip/GetTripBoostPackages', '', '');
        }
      }]);

      return BoostpackageService;
    }();

    BoostpackageService.ctorParameters = function () {
      return [{
        type: _Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_2__["TriputilitesService"]
      }];
    };

    BoostpackageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BoostpackageService);
    /***/
  },

  /***/
  "./src/app/Services/BoostTrip/boost-trip.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/Services/BoostTrip/boost-trip.service.ts ***!
    \**********************************************************/

  /*! exports provided: BoostTripService */

  /***/
  function srcAppServicesBoostTripBoostTripServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoostTripService", function () {
      return BoostTripService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Utilities/triputilites.service */
    "./src/app/Services/Utilities/triputilites.service.ts");

    var BoostTripService = /*#__PURE__*/function () {
      function BoostTripService(utilities) {
        _classCallCheck(this, BoostTripService);

        this.utilities = utilities;
      }

      _createClass(BoostTripService, [{
        key: "GetBoostTrip",
        value: function GetBoostTrip() {
          return this.utilities.GenericServiceCallMethod('get', 'BoostTrip/BoostTrip', '', '');
        }
      }, {
        key: "GetTripBoostPackages",
        value: function GetTripBoostPackages() {
          return this.utilities.GenericServiceCallMethod('get', 'BoostTrip/GetTripBoostPackages', '', '');
        }
      }, {
        key: "BoostPackageSubscription",
        value: function BoostPackageSubscription(data) {
          return this.utilities.GenericServiceCallMethod('post', 'BoostTrip/BoostPackageSubscription', '', data);
        }
      }, {
        key: "GetBoostPromoDetails",
        value: function GetBoostPromoDetails() {
          return this.utilities.GenericServiceCallMethod('get', 'BoostTrip/GetBoostPromoDetails', '', '');
        }
      }, {
        key: "GetBoostVarificationByUser",
        value: function GetBoostVarificationByUser() {
          return this.utilities.GenericServiceCallMethod('get', 'BoostTrip/GetBoostVarificationByUser', '', '');
        }
      }, {
        key: "BoostTrip",
        value: function BoostTrip() {
          return this.utilities.GenericServiceCallMethod('get', 'BoostTrip', '', '');
        }
      }, {
        key: "AddBoostTrip",
        value: function AddBoostTrip() {
          return this.utilities.GenericServiceCallMethod('post', 'BoostTrip', '', '');
        }
      }, {
        key: "GetUsersBoostPackage",
        value: function GetUsersBoostPackage() {
          return this.utilities.GenericServiceCallMethod('get', 'OperatorPackages/GetUsersBoostPackage', '', '');
        }
      }, {
        key: "VerifyBoostTrip",
        value: function VerifyBoostTrip(boostPcakgeId, promoCode) {
          return this.utilities.GenericServiceCallMethod('get', 'BoostTrip/GetBoostPromoDetails?prmoCode=' + promoCode + '&bid=' + boostPcakgeId, '', '');
        }
      }]);

      return BoostTripService;
    }();

    BoostTripService.ctorParameters = function () {
      return [{
        type: _Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_2__["TriputilitesService"]
      }];
    };

    BoostTripService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BoostTripService);
    /***/
  },

  /***/
  "./src/app/Services/Complaint/complaint.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/Services/Complaint/complaint.service.ts ***!
    \*********************************************************/

  /*! exports provided: ComplaintService */

  /***/
  function srcAppServicesComplaintComplaintServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComplaintService", function () {
      return ComplaintService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Utilities/triputilites.service */
    "./src/app/Services/Utilities/triputilites.service.ts");

    var ComplaintService = /*#__PURE__*/function () {
      function ComplaintService(utilils) {
        _classCallCheck(this, ComplaintService);

        this.utilils = utilils;
      }

      _createClass(ComplaintService, [{
        key: "AddNewComplaint",
        value: function AddNewComplaint(complaintModle) {
          return this.utilils.GenericServiceCallMethod('post', '/Traveler/AddComplaint/', '', complaintModle);
        }
      }, {
        key: "GetComplaintUser",
        value: function GetComplaintUser() {
          return this.utilils.GenericServiceCallMethod('get', '/Users/Get_Users_Complaint_ById/', '', '');
        }
      }]);

      return ComplaintService;
    }();

    ComplaintService.ctorParameters = function () {
      return [{
        type: _Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_2__["TriputilitesService"]
      }];
    };

    ComplaintService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ComplaintService);
    /***/
  },

  /***/
  "./src/app/Services/Operator/operator-api.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/Services/Operator/operator-api.service.ts ***!
    \***********************************************************/

  /*! exports provided: OperatorApiService */

  /***/
  function srcAppServicesOperatorOperatorApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OperatorApiService", function () {
      return OperatorApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Utilities/triputilites.service */
    "./src/app/Services/Utilities/triputilites.service.ts");

    var OperatorApiService = /*#__PURE__*/function () {
      function OperatorApiService(utilities) {
        _classCallCheck(this, OperatorApiService);

        this.utilities = utilities;
      }

      _createClass(OperatorApiService, [{
        key: "GetNewCustomTripRequest",
        value: function GetNewCustomTripRequest() {
          return this.utilities.GenericServiceCallMethod('get', 'CustomTrip/GetNewCustomTripRequest', '', '');
        }
      }, {
        key: "SubmitAnOffer",
        value: function SubmitAnOffer(data) {
          return this.utilities.GenericServiceCallMethod('post', 'CustomTrip/SubmitAnOffer', '', data);
        }
      }, {
        key: "CreateRevisedOffer",
        value: function CreateRevisedOffer(data) {
          return this.utilities.GenericServiceCallMethod('post', 'CustomTrip/CreateRevisedOffer', '', data);
        }
      }, {
        key: "UpdateOptLicence",
        value: function UpdateOptLicence(data) {
          return this.utilities.GenericServiceCallMethod('post', 'Users/UpdateOptLiecence', '', data);
        }
      }, {
        key: "GetOperatorScheduleBookingTrips",
        value: function GetOperatorScheduleBookingTrips() {
          return this.utilities.GenericServiceCallMethod('get', 'TripBooking/GetOperatorScheduleBookingTrips', '', '');
        }
      }, {
        key: "Login",
        value: function Login(data) {
          return this.utilities.GetToken(data.username, data.password);
        }
      }, {
        key: "GetCustomTripDetails",
        value: function GetCustomTripDetails(id) {
          return this.utilities.GenericServiceCallMethod('get', "CustomTrip/GetCustomTripDetails?referenceId=".concat(id), '', '');
        }
      }, {
        key: "RejectCustomTripRequest",
        value: function RejectCustomTripRequest(referenceId) {
          return this.utilities.GenericServiceCallMethod('get', "CustomTrip/RejectCustomTripRequest?refrenceId=".concat(referenceId), '', '');
        }
      }, {
        key: "CancelTripRequest",
        value: function CancelTripRequest(referenceId) {
          return this.utilities.GenericServiceCallMethod('get', "CustomTrip/CancelTripRequest?refrenceId=".concat(referenceId), '', '');
        }
      }, {
        key: "GetOperatorInvoices",
        value: function GetOperatorInvoices(filters) {
          return this.utilities.GenericServiceCallMethod('post', 'Operator/GetOperatorInvoices', '', filters);
        }
      }, {
        key: "GetOperatorInvoiceDetails",
        value: function GetOperatorInvoiceDetails(id) {
          return this.utilities.GenericServiceCallMethod('get', "Operator/GetOperatorInvoiceDetails?id=".concat(id), '', '');
        }
      }, {
        key: "CalculateTripCommision",
        value: function CalculateTripCommision(tripId) {
          return this.utilities.GenericServiceCallMethod('get', "AutoTask/CalculateTripCommision?tripId=".concat(tripId), '', '');
        }
      }, {
        key: "CreateOperatorInvoice",
        value: function CreateOperatorInvoice(formData) {
          return this.utilities.GenericServiceCallMethod('post', 'Operator/CreateOperatorInvoice', '', formData);
        }
      }, {
        key: "GetOperatorOngoingSlabAndBookings",
        value: function GetOperatorOngoingSlabAndBookings() {
          return this.utilities.GenericServiceCallMethod('get', 'Operator/GetOperatorOngoingSlabAndBookings', '', '');
        }
      }]);

      return OperatorApiService;
    }();

    OperatorApiService.ctorParameters = function () {
      return [{
        type: _Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_2__["TriputilitesService"]
      }];
    };

    OperatorApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], OperatorApiService);
    /***/
  },

  /***/
  "./src/app/Services/Operator/operator-package-service.service.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/Services/Operator/operator-package-service.service.ts ***!
    \***********************************************************************/

  /*! exports provided: OperatorPackageServiceService */

  /***/
  function srcAppServicesOperatorOperatorPackageServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OperatorPackageServiceService", function () {
      return OperatorPackageServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Utilities/triputilites.service */
    "./src/app/Services/Utilities/triputilites.service.ts");

    var OperatorPackageServiceService = /*#__PURE__*/function () {
      function OperatorPackageServiceService(utilities) {
        _classCallCheck(this, OperatorPackageServiceService);

        this.utilities = utilities;
      }

      _createClass(OperatorPackageServiceService, [{
        key: "GetAllPackage",
        value: function GetAllPackage() {
          return this.utilities.GenericServiceCallMethod('get', 'OperatorPackages/GetAllPackages', '', '');
        }
      }, {
        key: "GetPackageById",
        value: function GetPackageById(Id) {
          return this.utilities.GenericServiceCallMethod('get', 'OperatorPackages/GetOperatorPackageById/' + Id, '', '');
        }
      }, {
        key: "SubscribePackage",
        value: function SubscribePackage(Id) {
          return this.utilities.GenericServiceCallMethod('post', 'OperatorPackages/SubPackage?pid=' + Id, '', '');
        }
      }]);

      return OperatorPackageServiceService;
    }();

    OperatorPackageServiceService.ctorParameters = function () {
      return [{
        type: _Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_2__["TriputilitesService"]
      }];
    };

    OperatorPackageServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], OperatorPackageServiceService);
    /***/
  },

  /***/
  "./src/app/Services/Operator/operator-service.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/Services/Operator/operator-service.service.ts ***!
    \***************************************************************/

  /*! exports provided: OperatorServiceService */

  /***/
  function srcAppServicesOperatorOperatorServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OperatorServiceService", function () {
      return OperatorServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Utilities/triputilites.service */
    "./src/app/Services/Utilities/triputilites.service.ts");

    var OperatorServiceService = /*#__PURE__*/function () {
      function OperatorServiceService(utilities) {
        _classCallCheck(this, OperatorServiceService);

        this.utilities = utilities;
      }

      _createClass(OperatorServiceService, [{
        key: "GetOperatorPackages",
        value: function GetOperatorPackages() {
          return this.utilities.GenericServiceCallMethod('get', 'Operator/GetOperatorPackages', '', '');
        }
      }]);

      return OperatorServiceService;
    }();

    OperatorServiceService.ctorParameters = function () {
      return [{
        type: _Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_2__["TriputilitesService"]
      }];
    };

    OperatorServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], OperatorServiceService);
    /***/
  },

  /***/
  "./src/app/Services/PromoService/promoservice.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/Services/PromoService/promoservice.service.ts ***!
    \***************************************************************/

  /*! exports provided: PromoserviceService */

  /***/
  function srcAppServicesPromoServicePromoserviceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PromoserviceService", function () {
      return PromoserviceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Utilities/triputilites.service */
    "./src/app/Services/Utilities/triputilites.service.ts");

    var PromoserviceService = /*#__PURE__*/function () {
      function PromoserviceService(utilities) {
        _classCallCheck(this, PromoserviceService);

        this.utilities = utilities;
      }

      _createClass(PromoserviceService, [{
        key: "GetPromosByUser",
        value: function GetPromosByUser() {
          return this.utilities.GenericServiceCallMethod('get', 'Promo/GetPromosByUser', '', '');
        }
      }, {
        key: "AddPromoByUser",
        value: function AddPromoByUser(promo) {
          return this.utilities.GenericServiceCallMethod('post', 'Promo/Add', '', promo);
        }
      }]);

      return PromoserviceService;
    }();

    PromoserviceService.ctorParameters = function () {
      return [{
        type: _Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_2__["TriputilitesService"]
      }];
    };

    PromoserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PromoserviceService);
    /***/
  },

  /***/
  "./src/app/Services/Subscription/subscription.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/Services/Subscription/subscription.service.ts ***!
    \***************************************************************/

  /*! exports provided: SubscriptionService */

  /***/
  function srcAppServicesSubscriptionSubscriptionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubscriptionService", function () {
      return SubscriptionService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Utilities/triputilites.service */
    "./src/app/Services/Utilities/triputilites.service.ts");

    var SubscriptionService = /*#__PURE__*/function () {
      function SubscriptionService(utilities) {
        _classCallCheck(this, SubscriptionService);

        this.utilities = utilities;
      }

      _createClass(SubscriptionService, [{
        key: "PackageSubscription",
        value: function PackageSubscription() {
          return this.utilities.GenericServiceCallMethod('get', 'PackageSubscription', '', '');
        }
      }, {
        key: "GetSubscribedPackagesbyUserId",
        value: function GetSubscribedPackagesbyUserId() {
          return this.utilities.GenericServiceCallMethod('get', 'PackageSubscription/GetSubscribedPackagesbyUserId', '', '');
        }
      }, {
        key: "GetAllPackage",
        value: function GetAllPackage() {
          return this.utilities.GenericServiceCallMethod('get', 'OperatorPackages/GetAllPackage', '', '');
        }
      }]);

      return SubscriptionService;
    }();

    SubscriptionService.ctorParameters = function () {
      return [{
        type: _Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_2__["TriputilitesService"]
      }];
    };

    SubscriptionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SubscriptionService);
    /***/
  },

  /***/
  "./src/app/Services/TripService/trip.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/Services/TripService/trip.service.ts ***!
    \******************************************************/

  /*! exports provided: TripService */

  /***/
  function srcAppServicesTripServiceTripServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TripService", function () {
      return TripService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Utilities/triputilites.service */
    "./src/app/Services/Utilities/triputilites.service.ts");

    var TripService = /*#__PURE__*/function () {
      function TripService(utilities) {
        _classCallCheck(this, TripService);

        this.utilities = utilities;
      }

      _createClass(TripService, [{
        key: "GetTripReport",
        value: function GetTripReport(id) {
          return this.utilities.GenericServiceCallMethod('get', 'Trip/GetReportByTripId?TId=' + id, '', '');
        }
      }, {
        key: "GetTripCount",
        value: function GetTripCount() {
          return this.utilities.GenericServiceCallMethod('get', 'Trip/GetTripCountByUser', '', '');
        }
      }, {
        key: "GetChartData",
        value: function GetChartData() {
          return this.utilities.GenericServiceCallMethod('get', 'Trip/GetOperatorGraphData', '', '');
        }
      }, {
        key: "GetScheduleTrips",
        value: function GetScheduleTrips() {
          return this.utilities.GenericServiceCallMethod('get', 'Trip/GetTripByUser', '', '');
        }
      }, {
        key: "GetTripViews",
        value: function GetTripViews() {
          return this.utilities.GenericServiceCallMethod('get', 'Trip/GetScheduleTripViews', '', '');
        }
      }, {
        key: "GetTripCategories",
        value: function GetTripCategories() {
          return this.utilities.GenericServiceCallMethod('get', 'Utilities/GetCatagories', '', '');
        }
      }, {
        key: "GetTripVisitPlaces",
        value: function GetTripVisitPlaces() {
          return this.utilities.GenericServiceCallMethod('get', 'Utilities/GetVistPlacesWithCount', '', '');
        }
      }, {
        key: "AddTripdefult",
        value: function AddTripdefult(tripDefult) {
          return this.utilities.GenericServiceCallMethod('post', 'Trip/AddTripAsDefult', '', tripDefult);
        }
      }, {
        key: "AddTempTripImages",
        value: function AddTempTripImages(tripImage) {
          return this.utilities.GenericServiceCallMethod('post', 'Trip/AddTempTripImageList', '', tripImage);
        }
      }, {
        key: "AddTrip",
        value: function AddTrip(tripModal) {
          return this.utilities.GenericServiceCallMethod('post', 'Trip/AddNewTrip?callFrom=webiste', '', tripModal);
        }
      }, {
        key: "GetAllCompTripsByUsers",
        value: function GetAllCompTripsByUsers() {
          return this.utilities.GenericServiceCallMethod('get', 'Operator/GetOperatorTripsWithStatus?statusId=1', '', '');
        }
      }, {
        key: "GetAllTripsByUsers",
        value: function GetAllTripsByUsers() {
          return this.utilities.GenericServiceCallMethod('get', 'Trip/GetAllTripByUser', '', '');
        }
      }, {
        key: "GetDraftTrips",
        value: function GetDraftTrips() {
          return this.utilities.GenericServiceCallMethod('get', 'Trip/GetDraftAllTrips', '', '');
        }
      }, {
        key: "GetDraftTripById",
        value: function GetDraftTripById(Id) {
          return this.utilities.GenericServiceCallMethod('get', 'Trip/GetDraftTripById/' + Id, '', '');
        }
      }, {
        key: "DelDraftTripById",
        value: function DelDraftTripById(Id) {
          return this.utilities.GenericServiceCallMethod('post', 'Trip/DeleteDraftTrip/' + Id, '', '');
        }
      }, {
        key: "VerifyBoostCode",
        value: function VerifyBoostCode(boostCode) {
          return this.utilities.GenericServiceCallMethod('get', 'BoostTrip/GetBoostVarificationByUser?prmoCode=' + boostCode, '', '');
        }
      }, {
        key: "GetAllTripDetailById",
        value: function GetAllTripDetailById(id) {
          return this.utilities.GenericServiceCallMethod('get', 'Trip/GetTripByTripId/' + id, '', '');
        }
      }, {
        key: "GetAllTripCommentsById",
        value: function GetAllTripCommentsById(TId) {
          return this.utilities.GenericServiceCallMethod('get', 'TripComments/GetCommentsByTrip?TId=' + TId, '', '');
        }
      }, {
        key: "updateTripAsSpam",
        value: function updateTripAsSpam(tripComments) {
          return this.utilities.GenericServiceCallMethod('post', 'TripComments/TripCommentsSpamStatusUpdate', '', tripComments);
        }
      }, {
        key: "updateTripReviewsAsSpam",
        value: function updateTripReviewsAsSpam(tripReviews) {
          return this.utilities.GenericServiceCallMethod('post', 'Trip/UpdateTripReviewComments', '', tripReviews);
        }
      }, {
        key: "AddTripCommentReply",
        value: function AddTripCommentReply(reply) {
          return this.utilities.GenericServiceCallMethod('post', 'TripComments/AddReplyCommentsByTrip', '', reply);
        }
      }, {
        key: "UpdateTripStatus",
        value: function UpdateTripStatus(status) {
          return this.utilities.GenericServiceCallMethod('post', 'Trip/UpdateTripStatus', '', status);
        }
      }, {
        key: "UpdateTripNoMoreTripStatus",
        value: function UpdateTripNoMoreTripStatus(trip) {
          return this.utilities.GenericServiceCallMethod('post', 'Trip/UpdateNoMoreBookingStatus', '', trip);
        }
      }]);

      return TripService;
    }();

    TripService.ctorParameters = function () {
      return [{
        type: _Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_2__["TriputilitesService"]
      }];
    };

    TripService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TripService);
    /***/
  },

  /***/
  "./src/app/Services/Users/UseraccessService.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/Services/Users/UseraccessService.service.ts ***!
    \*************************************************************/

  /*! exports provided: UseraccessService */

  /***/
  function srcAppServicesUsersUseraccessServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UseraccessService", function () {
      return UseraccessService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UseraccessService = /*#__PURE__*/function () {
      function UseraccessService() {
        _classCallCheck(this, UseraccessService);
      }

      _createClass(UseraccessService, [{
        key: "set_globalUser",
        set: function set(user) {
          this.globalUser = user;
        }
      }, {
        key: "get_globalUser",
        get: function get() {
          return this.globalUser;
        }
      }]);

      return UseraccessService;
    }();

    UseraccessService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UseraccessService);
    /***/
  },

  /***/
  "./src/app/Services/Users/UsersService.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/Services/Users/UsersService.service.ts ***!
    \********************************************************/

  /*! exports provided: UsersService */

  /***/
  function srcAppServicesUsersUsersServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersService", function () {
      return UsersService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Utilities/triputilites.service */
    "./src/app/Services/Utilities/triputilites.service.ts");

    var UsersService = /*#__PURE__*/function () {
      function UsersService(utilils) {
        _classCallCheck(this, UsersService);

        this.utilils = utilils;
      }

      _createClass(UsersService, [{
        key: "GetUser",
        value: function GetUser() {
          return this.utilils.GenericServiceCallMethod('get', '/Users/GetUser/', '', '');
        }
      }, {
        key: "updateuser",
        value: function updateuser(user) {
          return this.utilils.GenericServiceCallMethod('post', '/Users/UpdateUser', '', user);
        }
      }, {
        key: "updateuserLicenece",
        value: function updateuserLicenece(user) {
          return this.utilils.GenericServiceCallMethod('post', '/Users/UpdateOptLiecence', '', user);
        }
      }, {
        key: "updateimage",
        value: function updateimage(user) {
          return this.utilils.GenericServiceCallMethod('post', '/Users/UpdateUserProfileImage', '', user);
        }
      }, {
        key: "changePass",
        value: function changePass(pass) {
          return this.utilils.GenericServiceCallMethod('post', '/Users/ResetPassword', '', pass);
        }
      }, {
        key: "deactive",
        value: function deactive() {
          return this.utilils.GenericServiceCallMethod('post', '/Users/DeactiveAccount', '', '');
        }
      }]);

      return UsersService;
    }();

    UsersService.ctorParameters = function () {
      return [{
        type: _Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_2__["TriputilitesService"]
      }];
    };

    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], UsersService);
    /***/
  },

  /***/
  "./src/app/Services/Utilities/AuthService.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/Services/Utilities/AuthService.service.ts ***!
    \***********************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesUtilitiesAuthServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _Users_UsersService_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Users/UsersService.service */
    "./src/app/Services/Users/UsersService.service.ts");
    /* harmony import */


    var _Users_UseraccessService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../Users/UseraccessService.service */
    "./src/app/Services/Users/UseraccessService.service.ts");
    /* harmony import */


    var _triputilites_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./triputilites.service */
    "./src/app/Services/Utilities/triputilites.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(request, router, ngZone, userService, globalService, toastr) {
        _classCallCheck(this, AuthService);

        this.request = request;
        this.router = router;
        this.ngZone = ngZone;
        this.userService = userService;
        this.globalService = globalService;
        this.toastr = toastr;
        this.loading = false;
      }

      _createClass(AuthService, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.isLoggedIn !== true) {
            this.router.navigate(['/login']);
          }

          return true;
        }
      }, {
        key: "SingIn",
        value: function SingIn(userName, passowrd) {
          var _this = this;

          jquery__WEBPACK_IMPORTED_MODULE_3__('#loginlooding').show();
          this.request.GetToken(userName, passowrd).subscribe(function (data) {
            var reesult = data;

            if (data) {
              var token = JSON.parse(reesult).access_token;
              localStorage.setItem('token', token); // this.ngZone.run(() => {

              _this.request.set_isLogin = false;
              jquery__WEBPACK_IMPORTED_MODULE_3__('#loginlooding').hide();

              _this.userService.GetUser().subscribe(function (data) {
                if (data) {
                  localStorage.setItem('UserProfile', JSON.stringify(data.Data));
                } // console.log(data);


                if (data.Data.RoleId == 3) {
                  _this.toastr.success("Logged in...", "Success!");

                  window.location.href = '/dashboard';
                } else _this.toastr.error("Only Operator is Allowed to Login.", "Error!");
              }); // });

            }
          }, function (err) {
            if (err.status === 400) {
              if (localStorage.getItem('token')) {
                _this.request.set_isLogin = true;
                localStorage.removeItem('token');
              }

              jquery__WEBPACK_IMPORTED_MODULE_3__('#loginlooding').hide();
              alert(err.error.error_description);
            } else {
              alert(err.error.error_description);
            }
          });
        }
      }, {
        key: "isLoggedIn",
        get: function get() {
          var user = localStorage.getItem('token');
          return user !== null ? true : false;
        }
      }, {
        key: "isSignOut",
        value: function isSignOut() {
          // debugger
          if (localStorage.getItem('token')) {
            // debugger
            localStorage.removeItem('token');
          }

          this.router.navigate(['/login']);
        }
      }, {
        key: "SingUp",
        value: function SingUp(obj) {
          return this.request.GenericServiceCallMethod("post", "/Users/UserRegistraion/", "", obj);
        }
      }, {
        key: "SocialLogin",
        value: function SocialLogin(data) {
          return this.request.GenericServiceCallMethod('post', "Account/WebSocialLogin", '', data);
        }
      }, {
        key: "PostSocialLoginCallBack",
        value: function PostSocialLoginCallBack() {
          var _this2 = this;

          this.userService.GetUser().subscribe(function (data) {
            if (data) {
              localStorage.setItem('UserProfile', JSON.stringify(data.Data));
            } // console.log(data);


            if (data.Data.RoleId == 3) {
              _this2.toastr.success("Logged in...", "Success!");

              window.location.href = '/dashboard';
            } else _this2.toastr.error("Only Operator is Allowed to Login.", "Error!");
          });
        }
      }, {
        key: "ForgetPassword",
        value: function ForgetPassword(email) {
          return this.request.GenericServiceCallMethod('get', "Account/ForgetPassword?email=" + email, '', '');
        }
      }, {
        key: "ResetPassword",
        value: function ResetPassword(obj) {
          return this.request.GenericServiceCallMethod('post', "Account/ResetPassword", '', obj);
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _triputilites_service__WEBPACK_IMPORTED_MODULE_6__["TriputilitesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _Users_UsersService_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]
      }, {
        type: _Users_UseraccessService_service__WEBPACK_IMPORTED_MODULE_5__["UseraccessService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/Services/Utilities/UtilitiesMethods.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/Services/Utilities/UtilitiesMethods.service.ts ***!
    \****************************************************************/

  /*! exports provided: UtilitiesMethodsService */

  /***/
  function srcAppServicesUtilitiesUtilitiesMethodsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilitiesMethodsService", function () {
      return UtilitiesMethodsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var notifification = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    var daraftTrip;

    var UtilitiesMethodsService = /*#__PURE__*/function () {
      function UtilitiesMethodsService() {
        _classCallCheck(this, UtilitiesMethodsService);
      }

      _createClass(UtilitiesMethodsService, [{
        key: "setNoficationLoadEmitter",
        set: function set(abc) {
          notifification.next(abc);
        }
      }, {
        key: "getNoficationLoadEmitter",
        get: function get() {
          return notifification;
        }
      }, {
        key: "setDraftTrip",
        set: function set(draftTripParam) {
          daraftTrip = draftTripParam;
        }
      }, {
        key: "getDraftTrip",
        get: function get() {
          return daraftTrip;
        }
      }]);

      return UtilitiesMethodsService;
    }();

    UtilitiesMethodsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UtilitiesMethodsService);
    /***/
  },

  /***/
  "./src/app/Services/Utilities/genaric.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Services/Utilities/genaric.service.ts ***!
    \*******************************************************/

  /*! exports provided: GenaricService, PrintMedia */

  /***/
  function srcAppServicesUtilitiesGenaricServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GenaricService", function () {
      return GenaricService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrintMedia", function () {
      return PrintMedia;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var GenaricService = /*#__PURE__*/function () {
      function GenaricService(toastr) {
        _classCallCheck(this, GenaricService);

        this.toastr = toastr;
      }

      _createClass(GenaricService, [{
        key: "getNumberOfDaysDiff",
        value: function getNumberOfDaysDiff(date1, date2) {
          var Difference_In_Time = new Date(date2).getTime() - new Date(date1).getTime();
          var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24) + 1;
          return Difference_In_Days;
        }
      }, {
        key: "showMessageToast",
        value: function showMessageToast(message, isSuccess, messageType) {
          if (isSuccess) {
            this.toastr.success(message, messageType, {
              timeOut: 9000,
              closeButton: true,
              positionClass: 'toast-top-right'
            });
          } else {
            this.toastr.error(message, messageType, {
              timeOut: 9000,
              closeButton: true,
              positionClass: 'toast-top-right'
            });
          }
        }
      }]);

      return GenaricService;
    }();

    GenaricService.ctorParameters = function () {
      return [{
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
      }];
    };

    GenaricService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], GenaricService);
    var PrintMedia;

    (function (PrintMedia) {
      PrintMedia["Conformation"] = "Confirmation";
      PrintMedia["Alter"] = "Alert!";
      PrintMedia["Error"] = "Error!";
    })(PrintMedia || (PrintMedia = {}));
    /***/

  },

  /***/
  "./src/app/Services/Utilities/triputilites.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/Services/Utilities/triputilites.service.ts ***!
    \************************************************************/

  /*! exports provided: TriputilitesService, ObjectSerilization */

  /***/
  function srcAppServicesUtilitiesTriputilitesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TriputilitesService", function () {
      return TriputilitesService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObjectSerilization", function () {
      return ObjectSerilization;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_classes_User_UsersModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/classes/User/UsersModal */
    "./src/app/classes/User/UsersModal.ts");

    var TriputilitesService = /*#__PURE__*/function () {
      function TriputilitesService(http) {
        _classCallCheck(this, TriputilitesService);

        this.http = http;
        this.headers = this.getHeaders();
        this.ObjectSerilization = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(TriputilitesService, [{
        key: "GenericServiceCallMethod",
        value: function GenericServiceCallMethod(callType, controlerActionName, token, data) {
          var _this3 = this;

          var myUrl = "";
          var myCallType = "";

          if (callType !== "" && controlerActionName !== "") {
            // MAKING COMPLETE URL ,  SETTING CALL TYPE [POST / GET]  AND MAKING HEADERS
            $("#spinnerLoaderXhr").show();
            myUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].DomainUrl + controlerActionName;
            myCallType = callType;

            if (myCallType === "post") {
              if (data != null) {
                var headersToSend = this.headers; // Start with default headers

                if (data instanceof FormData) {
                  // If sending FormData, remove Content-Type header so HttpClient can set it automatically
                  headersToSend = headersToSend["delete"]("Content-Type");
                }

                return this.http.post(myUrl, data, {
                  responseType: "text",
                  headers: headersToSend
                }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
                  $("#spinnerLoaderXhr").hide();
                  _this3.ObjectSerilization = JSON.parse(res);
                  return _this3.ObjectSerilization;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (e) {
                  $("#spinnerLoaderXhr").hide();

                  if (e.status === 401) {
                    localStorage.clear();
                    window.location.href = window.location.origin + "/login";
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e); // new Error('Unauthorized')
                  } else {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
                  }
                }));
              } else {
                return JSON.stringify("Please send data");
              }
            } else if (myCallType === "get") {
              return this.http.get(myUrl, {
                responseType: "text",
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
                $("#spinnerLoaderXhr").hide();
                _this3.ObjectSerilization = JSON.parse(res);
                return _this3.ObjectSerilization;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (e) {
                $("#spinnerLoaderXhr").hide();

                if (e.status === 401) {
                  localStorage.clear();
                  window.location.href = window.location.origin + "login";
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
                } else {
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
                }
              }));
            } else {
              return JSON.stringify("Please enter a valid call type [post get]");
            }
          } else {
            return JSON.stringify("Controler/Action name or type [post get] required");
          }
        }
      }, {
        key: "getHeaders",
        value: function getHeaders() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          headers = headers.append("Access-Control-Allow-Origin", "*");
          headers = headers.append("Access-Control-Allow-Credentials", "true");
          headers = headers.append("Access-Control-Allow-Headers", "*"); // tslint:disable-next-line:max-line-length

          headers = headers.append("Content-Type", "application/json; charset=UTF-8");
          headers = headers.append("Accept", "application/json");
          return headers;
        }
      }, {
        key: "getTokenHeaders",
        value: function getTokenHeaders() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          headers = headers.append("Access-Control-Allow-Origin", "*");
          headers = headers.append("Access-Control-Allow-Headers", "*");
          headers = headers.append("Content-Type", "application/json; charset=UTF-8");
          headers = headers.append("Accept", "application/json");
          return headers;
        } // Get Token Call

      }, {
        key: "GetToken",
        value: function GetToken(email, passwod) {
          var userModle = new src_app_classes_User_UsersModal__WEBPACK_IMPORTED_MODULE_6__["UserModel"]();
          userModle.Password = passwod;
          userModle.username = email;
          var data = "username=" + userModle.username + "&Password=" + passwod + "&grant_type=password";
          var requesHeader = this.getTokenHeaders();
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].domainToken + "token", data, {
            headers: requesHeader
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return JSON.stringify(res);
          }));
        } // Get Token Call End

      }, {
        key: "set_isLogin",
        set: function set(value) {
          this.isLoginPage = value;
        }
      }, {
        key: "get_isLogin",
        get: function get() {
          return this.isLoginPage;
        }
      }, {
        key: "set_isSingupPage",
        set: function set(value) {
          this.isSingupPage = value;
        }
      }, {
        key: "get_IsSingupPage",
        get: function get() {
          return this.isSingupPage;
        }
      }, {
        key: "set_isForgotPasswordPage",
        set: function set(value) {
          this.isForgotPasswordPage = value;
        }
      }, {
        key: "get_IsForgotPasswordPage",
        get: function get() {
          return this.isForgotPasswordPage;
        }
      }, {
        key: "GetCountry",
        value: function GetCountry() {
          return this.GenericServiceCallMethod("get", "Utilities/GetCountry", "", "");
        }
      }, {
        key: "GetCity",
        value: function GetCity(countryId) {
          return this.GenericServiceCallMethod("get", "Utilities/GetCitiesByCountryId/".concat(countryId), "", "");
        }
      }, {
        key: "GetVisitPlace",
        value: function GetVisitPlace(countryId) {
          return this.GenericServiceCallMethod("get", "Utilities/GetVisitPlacesByCountry?countryId=".concat(countryId), "", "");
        }
      }, {
        key: "GetCancellationOptions",
        value: function GetCancellationOptions() {
          return this.GenericServiceCallMethod("get", "Utilities/GetCancellationOptions", "", "");
        }
      }]);

      return TriputilitesService;
    }();

    TriputilitesService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    TriputilitesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], TriputilitesService);

    var ObjectSerilization = function ObjectSerilization() {
      _classCallCheck(this, ObjectSerilization);
    };
    /***/

  },

  /***/
  "./src/app/Shared/Directives/confirmed.validator.ts":
  /*!**********************************************************!*\
    !*** ./src/app/Shared/Directives/confirmed.validator.ts ***!
    \**********************************************************/

  /*! exports provided: ConfirmedValidator */

  /***/
  function srcAppSharedDirectivesConfirmedValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmedValidator", function () {
      return ConfirmedValidator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function ConfirmedValidator(controlName, matchingControlName) {
      debugger;
      return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
          return;
        }

        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({
            confirmedValidator: true
          });
        } else {
          matchingControl.setErrors(null);
        }
      };
    }
    /***/

  },

  /***/
  "./src/app/Shared/Interceptor/token-interceptor.service.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/Shared/Interceptor/token-interceptor.service.ts ***!
    \*****************************************************************/

  /*! exports provided: TokenInterceptorService */

  /***/
  function srcAppSharedInterceptorTokenInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function () {
      return TokenInterceptorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Services/Utilities/AuthService.service */
    "./src/app/Services/Utilities/AuthService.service.ts");

    var TokenInterceptorService = /*#__PURE__*/function () {
      function TokenInterceptorService(auth) {
        _classCallCheck(this, TokenInterceptorService);

        this.auth = auth;
      }

      _createClass(TokenInterceptorService, [{
        key: "intercept",
        value: function intercept(request, next) {
          request = request.clone({
            setHeaders: {
              Authorization: "Bearer ".concat(localStorage.getItem('token'))
            }
          });
          return next.handle(request);
        }
      }]);

      return TokenInterceptorService;
    }();

    TokenInterceptorService.ctorParameters = function () {
      return [{
        type: src_app_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], TokenInterceptorService);
    /***/
  },

  /***/
  "./src/app/Shared/SocialLogins/socail-logins/socail-logins.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/Shared/SocialLogins/socail-logins/socail-logins.component.ts ***!
    \******************************************************************************/

  /*! exports provided: SocailLoginsComponent */

  /***/
  function srcAppSharedSocialLoginsSocailLoginsSocailLoginsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocailLoginsComponent", function () {
      return SocailLoginsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var angularx_social_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angularx-social-login */
    "./node_modules/angularx-social-login/fesm2015/angularx-social-login.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Services/Utilities/AuthService.service */
    "./src/app/Services/Utilities/AuthService.service.ts");

    var SocailLoginsComponent = /*#__PURE__*/function () {
      function SocailLoginsComponent(fbAuth, autth, toast) {
        _classCallCheck(this, SocailLoginsComponent);

        this.fbAuth = fbAuth;
        this.autth = autth;
        this.toast = toast;
      }

      _createClass(SocailLoginsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "signInWithFB",
        value: function signInWithFB() {
          var _this4 = this;

          this.fbAuth.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["FacebookLoginProvider"].PROVIDER_ID).then(function (data) {
            _this4.autth.SocialLogin({
              provider: 'fb',
              role_id: 3,
              token: data.authToken
            }).subscribe(function (data) {
              if (data.Status) {
                localStorage.setItem('token', data.Data.access_token);

                _this4.autth.PostSocialLoginCallBack();
              } else {
                _this4.toast.error("Something went wrong please try again..");
              }
            });
          })["catch"](function (err) {});
        }
      }, {
        key: "signInWithGoogle",
        value: function signInWithGoogle() {
          var _this5 = this;

          this.fbAuth.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginProvider"].PROVIDER_ID).then(function (data) {
            _this5.autth.SocialLogin({
              provider: 'google',
              role_id: 4,
              token: data.idToken
            }).subscribe(function (data) {
              if (data.Status) {
                localStorage.setItem('token', data.Data.access_token);

                _this5.autth.PostSocialLoginCallBack();
              } else {
                _this5.toast.error("Something went wrong please try again..");
              }
            });
          })["catch"](function (err) {});
        }
      }]);

      return SocailLoginsComponent;
    }();

    SocailLoginsComponent.ctorParameters = function () {
      return [{
        type: angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: src_app_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]
      }];
    };

    SocailLoginsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-socail-logins',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./socail-logins.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Shared/SocialLogins/socail-logins/socail-logins.component.html"))["default"]
    })], SocailLoginsComponent);
    /***/
  },

  /***/
  "./src/app/Shared/guards/auth-guard.service.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/Shared/guards/auth-guard.service.service.ts ***!
    \*************************************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppSharedGuardsAuthGuardServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Services/Utilities/AuthService.service */
    "./src/app/Services/Utilities/AuthService.service.ts");

    var AuthGuardService = /*#__PURE__*/function () {
      function AuthGuardService(_authService, router) {
        _classCallCheck(this, AuthGuardService);

        this._authService = _authService;
        this.router = router;
      }

      _createClass(AuthGuardService, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this._authService.isLoggedIn) {
            return true;
          }

          this.router.navigate(['/login']);
          return false;
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ctorParameters = function () {
      return [{
        type: src_app_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuardService);
    /***/
  },

  /***/
  "./src/app/addpromo/addpromo.component.css":
  /*!*************************************************!*\
    !*** ./src/app/addpromo/addpromo.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddpromoAddpromoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./src/app/addpromo/addpromo.component.ts":
  /*!************************************************!*\
    !*** ./src/app/addpromo/addpromo.component.ts ***!
    \************************************************/

  /*! exports provided: AddpromoComponent */

  /***/
  function srcAppAddpromoAddpromoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddpromoComponent", function () {
      return AddpromoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _classes_Promo_Promo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../classes/Promo/Promo */
    "./src/app/classes/Promo/Promo.ts");
    /* harmony import */


    var _Services_PromoService_promoservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Services/PromoService/promoservice.service */
    "./src/app/Services/PromoService/promoservice.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var AddpromoComponent = /*#__PURE__*/function () {
      function AddpromoComponent(promoService, toastr, formBuilder, datepipe) {
        _classCallCheck(this, AddpromoComponent);

        this.promoService = promoService;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.datepipe = datepipe;
        this.error = {
          isError: false,
          errorMessage: ''
        };
        this.showFormError = false;
        this.isStartDateSelected = false;
        this.promo = new _classes_Promo_Promo__WEBPACK_IMPORTED_MODULE_2__["Promo"]();
        this.options = this.toastr.toastrConfig;
        this.options.positionClass = 'toast-top-center';
        this.options.timeOut = 1500;
      }

      _createClass(AddpromoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.today = new Date();
          this.minDateStart = this.datepipe.transform(new Date(this.today.setDate(this.today.getDate() + 1)), 'yyyy-MM-dd');
          this.minDateEnd = this.datepipe.transform(new Date(this.today.setDate(this.today.getDate() + 2)), 'yyyy-MM-dd');
          this.aFormGroup = this.formBuilder.group({
            PromoCode: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(10)]],
            DiscountPercentage: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            StartDate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(this.minDateStart)])],
            EndDate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(this.minDateEnd)])]
          }, {
            validator: this.dateLessThan('StartDate', 'EndDate')
          });
        }
      }, {
        key: "startSelected",
        value: function startSelected(event) {
          this.endDate = new Date(event.target.value); // this.endDate = this.endDate.setDate(this.endDate.getDate() + 1);
          // console.log(new Date(event.target.value));

          this.minDateEnd = this.datepipe.transform(this.endDate.setDate(this.endDate.getDate() + 1), 'yyyy-MM-dd'); // this.minDateEnd = 

          if (event.target.value) document.getElementById("expdate").removeAttribute("disabled");
        }
      }, {
        key: "compareTwoDates",
        value: function compareTwoDates() {
          if (new Date(this.aFormGroup.controls['EndDate'].value) < new Date(this.aFormGroup.controls['StartDate'].value)) {
            this.error = {
              isError: true,
              errorMessage: "Expiry Date can't be before start date"
            };
          } else {
            this.error = null;
          }
        }
      }, {
        key: "dateLessThan",
        value: function dateLessThan(from, to) {
          return function (group) {
            var f = group.controls[from];
            var t = group.controls[to];

            if (t.value < new Date('mm/dd/yyyy')) {
              return {
                dates: 'Start date should be future or current date'
              };
            }

            if (f.value > t.value) {
              return {
                dates: 'Start date should be less than Expiry Date'
              };
            }

            return {};
          };
        }
      }, {
        key: "AddPromo",
        value: function AddPromo() {
          var _this6 = this;

          if (this.aFormGroup.valid) {
            this.showFormError = false;
            this.promoService.AddPromoByUser(this.promo).subscribe(function (data) {
              if (data) {
                _this6.response = data;

                if (_this6.response.Status) {
                  _this6.toastr.success(_this6.response.Message, 'Notification');
                } else {
                  _this6.toastr.error(_this6.response.Message, 'Notification');
                }
              }
            });
          } else {
            this.showFormError = true;
          }
        }
      }]);

      return AddpromoComponent;
    }();

    AddpromoComponent.ctorParameters = function () {
      return [{
        type: _Services_PromoService_promoservice_service__WEBPACK_IMPORTED_MODULE_3__["PromoserviceService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]
      }];
    };

    AddpromoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-addpromo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./addpromo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/addpromo/addpromo.component.html"))["default"],
      providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./addpromo.component.css */
      "./src/app/addpromo/addpromo.component.css"))["default"]]
    })], AddpromoComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _self_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./self/about-us/about-us.component */
    "./src/app/self/about-us/about-us.component.ts");
    /* harmony import */


    var _self_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./self/contact-us/contact-us.component */
    "./src/app/self/contact-us/contact-us.component.ts");
    /* harmony import */


    var _self_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./self/faqs/faqs.component */
    "./src/app/self/faqs/faqs.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _mytrips_mytrips_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./mytrips/mytrips.component */
    "./src/app/mytrips/mytrips.component.ts");
    /* harmony import */


    var _posttrip_posttrip_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./posttrip/posttrip.component */
    "./src/app/posttrip/posttrip.component.ts");
    /* harmony import */


    var _pkgdetails_pkgdetails_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pkgdetails/pkgdetails.component */
    "./src/app/pkgdetails/pkgdetails.component.ts");
    /* harmony import */


    var _aval_packges_aval_packges_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./aval-packges/aval-packges.component */
    "./src/app/aval-packges/aval-packges.component.ts");
    /* harmony import */


    var _boost_pkg_boost_pkg_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./boost-pkg/boost-pkg.component */
    "./src/app/boost-pkg/boost-pkg.component.ts");
    /* harmony import */


    var _tripdetail_tripdetail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./tripdetail/tripdetail.component */
    "./src/app/tripdetail/tripdetail.component.ts");
    /* harmony import */


    var _pkginvoice_pkginvoice_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pkginvoice/pkginvoice.component */
    "./src/app/pkginvoice/pkginvoice.component.ts");
    /* harmony import */


    var _promo_promo_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./promo/promo.component */
    "./src/app/promo/promo.component.ts");
    /* harmony import */


    var _addpromo_addpromo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./addpromo/addpromo.component */
    "./src/app/addpromo/addpromo.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _updatepas_updatepas_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./updatepas/updatepas.component */
    "./src/app/updatepas/updatepas.component.ts");
    /* harmony import */


    var _edit_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./edit/edit.component */
    "./src/app/edit/edit.component.ts");
    /* harmony import */


    var _verify_verify_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./verify/verify.component */
    "./src/app/verify/verify.component.ts");
    /* harmony import */


    var _calender_calender_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./calender/calender.component */
    "./src/app/calender/calender.component.ts");
    /* harmony import */


    var _draft_draft_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./draft/draft.component */
    "./src/app/draft/draft.component.ts");
    /* harmony import */


    var _reports_reports_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./reports/reports.component */
    "./src/app/reports/reports.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./Services/Utilities/AuthService.service */
    "./src/app/Services/Utilities/AuthService.service.ts");
    /* harmony import */


    var _complaint_complaint_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./complaint/complaint.component */
    "./src/app/complaint/complaint.component.ts");
    /* harmony import */


    var _custom_tour_requests_custom_tour_requests_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./custom-tour-requests/custom-tour-requests.component */
    "./src/app/custom-tour-requests/custom-tour-requests.component.ts");
    /* harmony import */


    var _custom_tour_request_detail_custom_tour_request_detail_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./custom-tour-request-detail/custom-tour-request-detail.component */
    "./src/app/custom-tour-request-detail/custom-tour-request-detail.component.ts");
    /* harmony import */


    var _bookings_bookings_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./bookings/bookings.component */
    "./src/app/bookings/bookings.component.ts");
    /* harmony import */


    var _bookingdetails_bookingdetails_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./bookingdetails/bookingdetails.component */
    "./src/app/bookingdetails/bookingdetails.component.ts");
    /* harmony import */


    var _posttrip_postsuccess_postsuccess_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./posttrip/postsuccess/postsuccess.component */
    "./src/app/posttrip/postsuccess/postsuccess.component.ts");
    /* harmony import */


    var _forgetpassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./forgetpassword/forgetpassword.component */
    "./src/app/forgetpassword/forgetpassword.component.ts");
    /* harmony import */


    var _offer_management_offer_management_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./offer-management/offer-management.component */
    "./src/app/offer-management/offer-management.component.ts");
    /* harmony import */


    var _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./invoices/invoices.component */
    "./src/app/invoices/invoices.component.ts");
    /* harmony import */


    var _invoice_details_invoice_details_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./invoice-details/invoice-details.component */
    "./src/app/invoice-details/invoice-details.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"]
    }, {
      path: 'forgetpassword',
      component: _forgetpassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_32__["ForgetpasswordComponent"]
    }, {
      path: 'signup',
      component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
    }, {
      path: 'dashboard',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
      canActivate: [_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"]]
    }, {
      path: "mytrips",
      component: _mytrips_mytrips_component__WEBPACK_IMPORTED_MODULE_8__["MytripsComponent"],
      canActivate: [_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"]]
    }, {
      path: 'post',
      component: _posttrip_posttrip_component__WEBPACK_IMPORTED_MODULE_9__["PosttripComponent"],
      canActivate: [_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"]]
    }, {
      path: 'post_success/:id',
      component: _posttrip_postsuccess_postsuccess_component__WEBPACK_IMPORTED_MODULE_31__["PostsuccessComponent"],
      canActivate: [_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"]]
    }, {
      path: 'bookings',
      component: _bookings_bookings_component__WEBPACK_IMPORTED_MODULE_29__["BookingsComponent"],
      canActivate: [_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"]]
    }, {
      path: 'invoices',
      component: _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_34__["InvoicesComponent"],
      canActivate: [_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"]]
    }, {
      path: 'invoice-details/:id',
      component: _invoice_details_invoice_details_component__WEBPACK_IMPORTED_MODULE_35__["InvoiceDetailsComponent"],
      canActivate: [_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"]]
    }, {
      path: 'details/:type/:id',
      component: _bookingdetails_bookingdetails_component__WEBPACK_IMPORTED_MODULE_30__["BookingdetailsComponent"],
      canActivate: [_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"]]
    }, {
      path: 'post/editdraft/:id',
      component: _posttrip_posttrip_component__WEBPACK_IMPORTED_MODULE_9__["PosttripComponent"],
      canActivate: [_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"]]
    }, {
      path: "pkgdetail",
      component: _pkgdetails_pkgdetails_component__WEBPACK_IMPORTED_MODULE_10__["PkgdetailsComponent"],
      canActivate: [_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"]]
    }, {
      path: "avalpkg",
      component: _aval_packges_aval_packges_component__WEBPACK_IMPORTED_MODULE_11__["AvalPackgesComponent"],
      canActivate: [_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"]]
    }, {
      path: "boostpkg",
      component: _boost_pkg_boost_pkg_component__WEBPACK_IMPORTED_MODULE_12__["BoostPkgComponent"],
      canActivate: [_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"]]
    }, {
      path: 'tripdetail/:id',
      component: _tripdetail_tripdetail_component__WEBPACK_IMPORTED_MODULE_13__["TripdetailComponent"],
      canActivate: [_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"]]
    }, {
      path: 'pkginvoice/:Id',
      component: _pkginvoice_pkginvoice_component__WEBPACK_IMPORTED_MODULE_14__["PkginvoiceComponent"],
      canActivate: [_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"]]
    }, {
      path: "promo",
      component: _promo_promo_component__WEBPACK_IMPORTED_MODULE_15__["PromoComponent"],
      canActivate: [_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"]]
    }, {
      path: "addpromo",
      component: _addpromo_addpromo_component__WEBPACK_IMPORTED_MODULE_16__["AddpromoComponent"],
      canActivate: [_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"]]
    }, {
      path: "profile",
      component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_17__["ProfileComponent"],
      canActivate: [_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"]]
    }, {
      path: "updatepas",
      component: _updatepas_updatepas_component__WEBPACK_IMPORTED_MODULE_18__["UpdatepasComponent"],
      canActivate: [_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"]]
    }, {
      path: "edit",
      component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_19__["EditComponent"],
      canActivate: [_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"]]
    }, {
      path: "verify",
      component: _verify_verify_component__WEBPACK_IMPORTED_MODULE_20__["VerifyComponent"],
      canActivate: [_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"]]
    }, {
      path: "calender",
      component: _calender_calender_component__WEBPACK_IMPORTED_MODULE_21__["CalenderComponent"],
      canActivate: [_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"]]
    }, {
      path: "draft",
      component: _draft_draft_component__WEBPACK_IMPORTED_MODULE_22__["DraftComponent"],
      canActivate: [_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"]]
    }, {
      path: "reports",
      component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_23__["ReportsComponent"],
      canActivate: [_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"]]
    }, {
      path: "complain",
      component: _complaint_complaint_component__WEBPACK_IMPORTED_MODULE_26__["ComplaintComponent"],
      canActivate: [_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"]]
    }, {
      path: "custom-tour-requests",
      component: _custom_tour_requests_custom_tour_requests_component__WEBPACK_IMPORTED_MODULE_27__["CustomTourRequestsComponent"],
      canActivate: [_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"]]
    }, {
      path: "custom-tour-requests/:id",
      component: _custom_tour_request_detail_custom_tour_request_detail_component__WEBPACK_IMPORTED_MODULE_28__["CustomTourRequestDetailComponent"],
      canActivate: [_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"]]
    }, {
      path: "faqs",
      component: _self_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_3__["FaqsComponent"],
      canActivate: [_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"]]
    }, {
      path: "contact-us",
      component: _self_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_2__["ContactUsComponent"],
      canActivate: [_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"]]
    }, {
      path: "about-us",
      component: _self_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_1__["AboutUsComponent"],
      canActivate: [_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"]]
    }, {
      path: 'offer-management',
      component: _offer_management_offer_management_component__WEBPACK_IMPORTED_MODULE_33__["OfferManagementComponent"],
      canActivate: [_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"]]
    }, {
      path: '**',
      redirectTo: '/'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bin {\n  height: 18px;\n  width: 15px;\n  margin-left: 13%;\n}\n\n.del {\n  margin-left: 18%;\n  color: blue;\n}\n\n.dropdown-toggle::after {\n  display: none;\n}\n\n.noti-icon i {\n  color: #11B3E1;\n}\n\n.main-container {\n  display: flex;\n  min-height: 100vh;\n}\n\n.body-for-the-app {\n  flex: 1;\n  transition: all ease-in-out 0.05s linear;\n  min-width: 0;\n  background: #F3F5EA;\n  height: 100vh;\n  overflow: auto;\n}";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Services_Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./Services/Utilities/triputilites.service */
    "./src/app/Services/Utilities/triputilites.service.ts");
    /* harmony import */


    var _Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Services/Utilities/AuthService.service */
    "./src/app/Services/Utilities/AuthService.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _Services_Utilities_UtilitiesMethods_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Services/Utilities/UtilitiesMethods.service */
    "./src/app/Services/Utilities/UtilitiesMethods.service.ts");
    /* harmony import */


    var _Services_TripService_trip_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./Services/TripService/trip.service */
    "./src/app/Services/TripService/trip.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(autth, tripSerivce, utlities, utiltiesmethodsService, translate) {
        _classCallCheck(this, AppComponent);

        this.autth = autth;
        this.tripSerivce = tripSerivce;
        this.utlities = utlities;
        this.utiltiesmethodsService = utiltiesmethodsService;
        this.translate = translate;
        this.title = "Operator TripJero";
        this.isLoginPage = false;
        translate.addLangs(["en", "ar"]);
        translate.setDefaultLang("en");
        var browserLang = translate.getBrowserLang(); // this.switchLang(browserLang.match(/en|ar/) ? browserLang : "en");
      }

      _createClass(AppComponent, [{
        key: "switchLang",
        value: function switchLang(lang) {
          this.translate.use(lang);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.domainUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].domainToken;
          this.notiList = [];
          this.tripVisitPlaces = [];

          if (localStorage.getItem("UserProfile")) {
            this.user = JSON.parse(localStorage.getItem("UserProfile"));
          }

          this.loadVisitPlaces();
          this.utiltiesmethodsService.getNoficationLoadEmitter.subscribe(function (data) {
            _this7.loadNotification();
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.autth.isSignOut(); //this.router.navigate(['/login']);
        }
      }, {
        key: "loadNotification",
        value: function loadNotification() {
          var _this8 = this;

          this.notiList = [];
          this.counter = 0;
          this.utlities.GenericServiceCallMethod("get", "Utilities/GetNotficationListByUser", "", "").subscribe(function (data) {
            if (data) {
              // console.log(data)
              if (data.Status) {
                _this8.notiList = data.Data;
                _this8.counter = _this8.notiList.length;
              }
            }
          });
        }
      }, {
        key: "delallNotification",
        value: function delallNotification() {
          var _this9 = this;

          // debugger
          this.utlities.GenericServiceCallMethod("get", "Utilities/DeleteAllNotificationByUser", "", "").subscribe(function (data) {
            if (data) {
              console.log(data);

              if (data.Status) {
                _this9.loadNotification();
              } else {}
            }
          });
        }
      }, {
        key: "loadVisitPlaces",
        value: function loadVisitPlaces() {
          var _this10 = this;

          this.tripSerivce.GetTripVisitPlaces().subscribe(function (data) {
            if (data) {
              _this10.tripVisitPlaces = data.Data.sort(function (a, b) {
                return a.trips > b.trips ? -1 : 0;
              });
            }
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _Services_TripService_trip_service__WEBPACK_IMPORTED_MODULE_6__["TripService"]
      }, {
        type: _Services_Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_2__["TriputilitesService"]
      }, {
        type: _Services_Utilities_UtilitiesMethods_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesMethodsService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: provideConfig, HttpLoaderFactory, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "provideConfig", function () {
      return provideConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _posttrip_buy_boost_packages_buy_boost_packages_popup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./posttrip/buy-boost-packages/buy-boost-packages-popup.component */
    "./src/app/posttrip/buy-boost-packages/buy-boost-packages-popup.component.ts");
    /* harmony import */


    var _self_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./self/faqs/faqs.component */
    "./src/app/self/faqs/faqs.component.ts");
    /* harmony import */


    var _self_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./self/contact-us/contact-us.component */
    "./src/app/self/contact-us/contact-us.component.ts");
    /* harmony import */


    var _Shared_SocialLogins_socail_logins_socail_logins_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./Shared/SocialLogins/socail-logins/socail-logins.component */
    "./src/app/Shared/SocialLogins/socail-logins/socail-logins.component.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _mytrips_mytrips_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./mytrips/mytrips.component */
    "./src/app/mytrips/mytrips.component.ts");
    /* harmony import */


    var _posttrip_posttrip_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./posttrip/posttrip.component */
    "./src/app/posttrip/posttrip.component.ts");
    /* harmony import */


    var _pkgdetails_pkgdetails_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pkgdetails/pkgdetails.component */
    "./src/app/pkgdetails/pkgdetails.component.ts");
    /* harmony import */


    var _aval_packges_aval_packges_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./aval-packges/aval-packges.component */
    "./src/app/aval-packges/aval-packges.component.ts");
    /* harmony import */


    var _boost_pkg_boost_pkg_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./boost-pkg/boost-pkg.component */
    "./src/app/boost-pkg/boost-pkg.component.ts");
    /* harmony import */


    var _tripdetail_tripdetail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./tripdetail/tripdetail.component */
    "./src/app/tripdetail/tripdetail.component.ts");
    /* harmony import */


    var _pkginvoice_pkginvoice_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pkginvoice/pkginvoice.component */
    "./src/app/pkginvoice/pkginvoice.component.ts");
    /* harmony import */


    var _promo_promo_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./promo/promo.component */
    "./src/app/promo/promo.component.ts");
    /* harmony import */


    var _addpromo_addpromo_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./addpromo/addpromo.component */
    "./src/app/addpromo/addpromo.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _updatepas_updatepas_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./updatepas/updatepas.component */
    "./src/app/updatepas/updatepas.component.ts");
    /* harmony import */


    var _verify_verify_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./verify/verify.component */
    "./src/app/verify/verify.component.ts");
    /* harmony import */


    var _edit_edit_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./edit/edit.component */
    "./src/app/edit/edit.component.ts");
    /* harmony import */


    var _calender_calender_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./calender/calender.component */
    "./src/app/calender/calender.component.ts");
    /* harmony import */


    var _draft_draft_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./draft/draft.component */
    "./src/app/draft/draft.component.ts");
    /* harmony import */


    var _reports_reports_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./reports/reports.component */
    "./src/app/reports/reports.component.ts");
    /* harmony import */


    var angular2_wizard__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! angular2-wizard */
    "./node_modules/angular2-wizard/dist/index.js");
    /* harmony import */


    var angular2_wizard__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(angular2_wizard__WEBPACK_IMPORTED_MODULE_28__);
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _posttrip_TripItinerary_ItineraryPlane_ItineraryPlane_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./posttrip/TripItinerary/ItineraryPlane/ItineraryPlane.component */
    "./src/app/posttrip/TripItinerary/ItineraryPlane/ItineraryPlane.component.ts");
    /* harmony import */


    var _offer_management_ItineraryPlane_ItineraryPlane_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./offer-management/ItineraryPlane/ItineraryPlane.component */
    "./src/app/offer-management/ItineraryPlane/ItineraryPlane.component.ts");
    /* harmony import */


    var _posttrip_TripItinerary_Facilities_facilities_trip_facilities_trip_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./posttrip/TripItinerary/Facilities/facilities-trip/facilities-trip.component */
    "./src/app/posttrip/TripItinerary/Facilities/facilities-trip/facilities-trip.component.ts");
    /* harmony import */


    var _posttrip_TripItinerary_TripImages_tripImages_tripImages_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./posttrip/TripItinerary/TripImages/tripImages/tripImages.component */
    "./src/app/posttrip/TripItinerary/TripImages/tripImages/tripImages.component.ts");
    /* harmony import */


    var _Services_Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./Services/Utilities/triputilites.service */
    "./src/app/Services/Utilities/triputilites.service.ts");
    /* harmony import */


    var _Services_TripService_trip_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./Services/TripService/trip.service */
    "./src/app/Services/TripService/trip.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./Services/Utilities/genaric.service */
    "./src/app/Services/Utilities/genaric.service.ts");
    /* harmony import */


    var _buy_boost_package_buy_boost_package_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./buy-boost-package/buy-boost-package.component */
    "./src/app/buy-boost-package/buy-boost-package.component.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var ngx_bar_rating__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ngx-bar-rating */
    "./node_modules/ngx-bar-rating/index.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _posttrip_TripItinerary_PostFinalTrip_PostFinalTrip_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./posttrip/TripItinerary/PostFinalTrip/PostFinalTrip.component */
    "./src/app/posttrip/TripItinerary/PostFinalTrip/PostFinalTrip.component.ts");
    /* harmony import */


    var _Services_Utilities_UtilitiesMethods_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./Services/Utilities/UtilitiesMethods.service */
    "./src/app/Services/Utilities/UtilitiesMethods.service.ts");
    /* harmony import */


    var _Services_BoostPackge_boostpackage_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./Services/BoostPackge/boostpackage.service */
    "./src/app/Services/BoostPackge/boostpackage.service.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _Shared_Interceptor_token_interceptor_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./Shared/Interceptor/token-interceptor.service */
    "./src/app/Shared/Interceptor/token-interceptor.service.ts");
    /* harmony import */


    var _Services_Users_UsersService_service__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./Services/Users/UsersService.service */
    "./src/app/Services/Users/UsersService.service.ts");
    /* harmony import */


    var _Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./Services/Utilities/AuthService.service */
    "./src/app/Services/Utilities/AuthService.service.ts");
    /* harmony import */


    var _Shared_guards_auth_guard_service_service__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ./Shared/guards/auth-guard.service.service */
    "./src/app/Shared/guards/auth-guard.service.service.ts");
    /* harmony import */


    var _Services_Users_UseraccessService_service__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ./Services/Users/UseraccessService.service */
    "./src/app/Services/Users/UseraccessService.service.ts");
    /* harmony import */


    var _complaint_complaint_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ./complaint/complaint.component */
    "./src/app/complaint/complaint.component.ts");
    /* harmony import */


    var _Services_Operator_operator_api_service__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! ./Services/Operator/operator-api.service */
    "./src/app/Services/Operator/operator-api.service.ts");
    /* harmony import */


    var _Services_Bank_bank_service__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! ./Services/Bank/bank.service */
    "./src/app/Services/Bank/bank.service.ts");
    /* harmony import */


    var ng_wizard__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! ng-wizard */
    "./node_modules/ng-wizard/fesm2015/ng-wizard.js");
    /* harmony import */


    var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! @kolkov/angular-editor */
    "./node_modules/@kolkov/angular-editor/fesm2015/kolkov-angular-editor.js");
    /* harmony import */


    var _bookings_bookings_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
    /*! ./bookings/bookings.component */
    "./src/app/bookings/bookings.component.ts");
    /* harmony import */


    var _bookingdetails_bookingdetails_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
    /*! ./bookingdetails/bookingdetails.component */
    "./src/app/bookingdetails/bookingdetails.component.ts");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/dist/ngx-pagination.js");
    /* harmony import */


    var _detail_detail_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
    /*! ./detail/detail.component */
    "./src/app/detail/detail.component.ts");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/esm2015/stepper.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var ngx_dropzone__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
    /*! ngx-dropzone */
    "./node_modules/ngx-dropzone/fesm2015/ngx-dropzone.js");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var angularx_social_login__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
    /*! angularx-social-login */
    "./node_modules/angularx-social-login/fesm2015/angularx-social-login.js");
    /* harmony import */


    var _forgetpassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
    /*! ./forgetpassword/forgetpassword.component */
    "./src/app/forgetpassword/forgetpassword.component.ts");
    /* harmony import */


    var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(
    /*! ./reset-password/reset-password.component */
    "./src/app/reset-password/reset-password.component.ts");
    /* harmony import */


    var _self_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(
    /*! ./self/about-us/about-us.component */
    "./src/app/self/about-us/about-us.component.ts");
    /* harmony import */


    var _posttrip_postsuccess_postsuccess_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(
    /*! ./posttrip/postsuccess/postsuccess.component */
    "./src/app/posttrip/postsuccess/postsuccess.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _custom_tour_requests_custom_tour_requests_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(
    /*! ./custom-tour-requests/custom-tour-requests.component */
    "./src/app/custom-tour-requests/custom-tour-requests.component.ts");
    /* harmony import */


    var _custom_tour_request_detail_custom_tour_request_detail_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(
    /*! ./custom-tour-request-detail/custom-tour-request-detail.component */
    "./src/app/custom-tour-request-detail/custom-tour-request-detail.component.ts");
    /* harmony import */


    var _offer_management_offer_management_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(
    /*! ./offer-management/offer-management.component */
    "./src/app/offer-management/offer-management.component.ts");
    /* harmony import */


    var _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(
    /*! ./invoices/invoices.component */
    "./src/app/invoices/invoices.component.ts");
    /* harmony import */


    var _invoice_details_invoice_details_component__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(
    /*! ./invoice-details/invoice-details.component */
    "./src/app/invoice-details/invoice-details.component.ts"); // Import your library


    var ngWizardConfig = {
      theme: ng_wizard__WEBPACK_IMPORTED_MODULE_54__["THEME"]["default"]
    };
    var config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_66__["AuthServiceConfig"]([{
      id: angularx_social_login__WEBPACK_IMPORTED_MODULE_66__["FacebookLoginProvider"].PROVIDER_ID,
      provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_66__["FacebookLoginProvider"]('962780807415498')
    }, {
      id: angularx_social_login__WEBPACK_IMPORTED_MODULE_66__["GoogleLoginProvider"].PROVIDER_ID,
      provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_66__["GoogleLoginProvider"]('160071286091-fpb8g5ikukhmk4cuqc53s3rdijqu4g00.apps.googleusercontent.com')
    }]);

    function provideConfig() {
      return config;
    }

    function HttpLoaderFactory(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_72__["TranslateHttpLoader"](http, "./assets/i18n/", ".json");
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"], _mytrips_mytrips_component__WEBPACK_IMPORTED_MODULE_12__["MytripsComponent"], _posttrip_posttrip_component__WEBPACK_IMPORTED_MODULE_13__["PosttripComponent"], _pkgdetails_pkgdetails_component__WEBPACK_IMPORTED_MODULE_14__["PkgdetailsComponent"], _aval_packges_aval_packges_component__WEBPACK_IMPORTED_MODULE_15__["AvalPackgesComponent"], _boost_pkg_boost_pkg_component__WEBPACK_IMPORTED_MODULE_16__["BoostPkgComponent"], _tripdetail_tripdetail_component__WEBPACK_IMPORTED_MODULE_17__["TripdetailComponent"], _pkginvoice_pkginvoice_component__WEBPACK_IMPORTED_MODULE_18__["PkginvoiceComponent"], _promo_promo_component__WEBPACK_IMPORTED_MODULE_19__["PromoComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_59__["DetailComponent"], _addpromo_addpromo_component__WEBPACK_IMPORTED_MODULE_20__["AddpromoComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"], _updatepas_updatepas_component__WEBPACK_IMPORTED_MODULE_22__["UpdatepasComponent"], _verify_verify_component__WEBPACK_IMPORTED_MODULE_23__["VerifyComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_24__["EditComponent"], _calender_calender_component__WEBPACK_IMPORTED_MODULE_25__["CalenderComponent"], _draft_draft_component__WEBPACK_IMPORTED_MODULE_26__["DraftComponent"], _reports_reports_component__WEBPACK_IMPORTED_MODULE_27__["ReportsComponent"], _offer_management_ItineraryPlane_ItineraryPlane_component__WEBPACK_IMPORTED_MODULE_31__["OfferManagementItineraryPlaneComponent"], _posttrip_TripItinerary_ItineraryPlane_ItineraryPlane_component__WEBPACK_IMPORTED_MODULE_30__["ItineraryPlaneComponent"], _posttrip_TripItinerary_Facilities_facilities_trip_facilities_trip_component__WEBPACK_IMPORTED_MODULE_32__["FacilitiesTripComponent"], _posttrip_TripItinerary_TripImages_tripImages_tripImages_component__WEBPACK_IMPORTED_MODULE_33__["TripImagesComponent"], _buy_boost_package_buy_boost_package_component__WEBPACK_IMPORTED_MODULE_38__["BuyBoostPackageComponent"], _posttrip_TripItinerary_PostFinalTrip_PostFinalTrip_component__WEBPACK_IMPORTED_MODULE_42__["PostFinalTripComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_45__["LoginComponent"], _complaint_complaint_component__WEBPACK_IMPORTED_MODULE_51__["ComplaintComponent"], _bookings_bookings_component__WEBPACK_IMPORTED_MODULE_56__["BookingsComponent"], _bookingdetails_bookingdetails_component__WEBPACK_IMPORTED_MODULE_57__["BookingdetailsComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_65__["SignupComponent"], _Shared_SocialLogins_socail_logins_socail_logins_component__WEBPACK_IMPORTED_MODULE_4__["SocailLoginsComponent"], _forgetpassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_67__["ForgetpasswordComponent"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_68__["ResetPasswordComponent"], _self_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_69__["AboutUsComponent"], _self_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"], _self_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_2__["FaqsComponent"], _posttrip_buy_boost_packages_buy_boost_packages_popup_component__WEBPACK_IMPORTED_MODULE_1__["BuyBoostPackagesPopUpComponent"], _posttrip_postsuccess_postsuccess_component__WEBPACK_IMPORTED_MODULE_70__["PostsuccessComponent"], _custom_tour_requests_custom_tour_requests_component__WEBPACK_IMPORTED_MODULE_73__["CustomTourRequestsComponent"], _custom_tour_request_detail_custom_tour_request_detail_component__WEBPACK_IMPORTED_MODULE_74__["CustomTourRequestDetailComponent"], _offer_management_offer_management_component__WEBPACK_IMPORTED_MODULE_75__["OfferManagementComponent"], _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_76__["InvoicesComponent"], _invoice_details_invoice_details_component__WEBPACK_IMPORTED_MODULE_77__["InvoiceDetailsComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], angular2_wizard__WEBPACK_IMPORTED_MODULE_28__["FormWizardModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_36__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_39__["ToastrModule"].forRoot(), ngx_bar_rating__WEBPACK_IMPORTED_MODULE_40__["BarRatingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_41__["BrowserAnimationsModule"], ng_wizard__WEBPACK_IMPORTED_MODULE_54__["NgWizardModule"].forRoot(ngWizardConfig), _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_55__["AngularEditorModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_58__["NgxPaginationModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_60__["ChartsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_61__["MatStepperModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_62__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_63__["MatIconModule"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_64__["NgxDropzoneModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_60__["ChartsModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_66__["SocialLoginModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_71__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_71__["TranslateLoader"],
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_36__["HttpClient"]]
        }
      })],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_36__["HTTP_INTERCEPTORS"],
        useClass: _Shared_Interceptor_token_interceptor_service__WEBPACK_IMPORTED_MODULE_46__["TokenInterceptorService"],
        multi: true
      }, ng2_charts__WEBPACK_IMPORTED_MODULE_60__["ThemeService"], _Shared_guards_auth_guard_service_service__WEBPACK_IMPORTED_MODULE_49__["AuthGuardService"], _Services_Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_34__["TriputilitesService"], _Services_TripService_trip_service__WEBPACK_IMPORTED_MODULE_35__["TripService"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_37__["GenaricService"], _Services_Utilities_UtilitiesMethods_service__WEBPACK_IMPORTED_MODULE_43__["UtilitiesMethodsService"], _Services_BoostPackge_boostpackage_service__WEBPACK_IMPORTED_MODULE_44__["BoostpackageService"], _Services_Users_UsersService_service__WEBPACK_IMPORTED_MODULE_47__["UsersService"], _Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_48__["AuthService"], _Services_Users_UseraccessService_service__WEBPACK_IMPORTED_MODULE_50__["UseraccessService"], _Services_Operator_operator_api_service__WEBPACK_IMPORTED_MODULE_52__["OperatorApiService"], _Services_Bank_bank_service__WEBPACK_IMPORTED_MODULE_53__["BankService"], angular2_wizard__WEBPACK_IMPORTED_MODULE_28__["FormWizardModule"], {
        provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_66__["AuthServiceConfig"],
        useFactory: provideConfig
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
      // exports: [
      //   NgbModalConfig
      // ],
      entryComponents: [_posttrip_TripItinerary_Facilities_facilities_trip_facilities_trip_component__WEBPACK_IMPORTED_MODULE_32__["FacilitiesTripComponent"], _posttrip_TripItinerary_TripImages_tripImages_tripImages_component__WEBPACK_IMPORTED_MODULE_33__["TripImagesComponent"], _buy_boost_package_buy_boost_package_component__WEBPACK_IMPORTED_MODULE_38__["BuyBoostPackageComponent"], _posttrip_TripItinerary_PostFinalTrip_PostFinalTrip_component__WEBPACK_IMPORTED_MODULE_42__["PostFinalTripComponent"], _posttrip_buy_boost_packages_buy_boost_packages_popup_component__WEBPACK_IMPORTED_MODULE_1__["BuyBoostPackagesPopUpComponent"], _posttrip_TripItinerary_ItineraryPlane_ItineraryPlane_component__WEBPACK_IMPORTED_MODULE_30__["ItineraryPlaneComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/aval-packges/aval-packges.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/aval-packges/aval-packges.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAvalPackgesAvalPackgesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".nav-tabs {\n    margin: 30px auto;\n    }\n    \n    .nav-tabs > li {\n    margin-left: -1px;\n    }\n    \n    .nav-tabs > li:first-child > a {\n    border-radius: 0;\n    }\n    \n    .nav-tabs > li:first-child > a:before {\n    display: none;\n    }\n    \n    .nav-tabs > li:last-child > a:after {\n    box-shadow: none;\n    }\n    \n    .nav-tabs > li > a {\n    padding: 15px 30px 15px 50px;\n    background-color: #f5af24;\n    color: black;\n    border: 0;\n    position: relative;\n    }\n    \n    .nav-tabs > li > a:hover, .nav-tabs > li > a:active, .nav-tabs > li > a:focus {\n    background-color: #f5af24;\n    color: black;\n    border: 0;\n    }\n    \n    .nav-tabs > li > a:before {\n    content: \" \";\n    position: absolute;\n    left: -20px;\n    top: 0;\n    height: 100%;\n    width: 40px;\n    background-color: #f5af24;\n    transform: skewX(35deg);\n    }\n    \n    .nav-tabs > li > a:after {\n    content: \" \";\n    position: absolute;\n    right: -20px;\n    background-color: #f5af24;\n    top: 0;\n    height: 100%;\n    width: 40px;\n    transform: skewX(35deg);\n    box-shadow: 3px 0px 0 0 rgba(0, 0, 0, 0.1);\n    z-index: 1;\n    }\n    \n    .nav-tabs > li.active {\n    margin-top: -11px;\n    }\n    \n    .nav-tabs > li.active > a {\n    border: 0;\n    background-color: #15b4e3;\n    color: white;\n    padding: 15px 30px 15px 50px;\n    font-size: 22px;\n    border-radius: 0;\n    }\n    \n    .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:active, .nav-tabs > li.active > a:focus {\n    background-color: #15b4e3;\n    color: white;\n    border: 0;\n    }\n    \n    .nav-tabs > li.active > a:before {\n    display: none;\n    }\n    \n    .nav-tabs > li.active > a:after {\n    right: -25px;\n    width: 50px;\n    background-color: #15b4e3;\n    z-index: 1;\n    }\n    \n    html {\n    font-family: helvetica, sans-serif;\n    font-size: 1rem;\n    color: #777777;\n    background: #d5d5d5;\n    background: linear-gradient(#d5d5d5, #ffffff);\n    height: 100%;\n    }\n    \n    .card {\n    background-color: #3A3A3A;\n    color: #ffffff;\n    box-shadow: 2px 2px 10px #777777;\n    border-top: 8px solid #3A3A3A;\n    border-radius: 4px;\n    padding: 16px 39px 32px 32px;\n    margin: 20px;\n    margin-left: 50px;\n    width: 480px;\n    }\n    \n    .card:hover {\n    border-top: 8px solid #15b4e3;\n    border-radius: 4px;\n    transform: translateY(-1em);\n    transition: all 0.2s ease-out;\n    }\n    \n    .card__title {\n    font-size: 0.875rem;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    padding-bottom: 8px;\n    }\n    \n    .card__body {\n    position: relative;\n    border-top: 2px solid #777777;\n    border-bottom: 2px solid #777777;\n    padding-bottom: 16px;\n    }\n    \n    .price {\n    font-size: 4rem;\n    font-weight: bold;\n    text-shadow: 0 0 1px #000;\n    color: #f5af24;\n    padding-left: 24px;\n    margin: 32px 0;\n    }\n    \n    .price__symbol {\n    position: absolute;\n    left: 0px;\n    top: 42px;\n    font-size: 1.5rem;\n    }\n    \n    .price__tag {\n    text-transform: uppercase;\n    margin-bottom: 8px;\n    }\n    \n    .card__button {\n    width: 100%;\n    background-color: #f5af24;\n    border: 1px solid #f5af24;\n    border-radius: 8px;\n    margin-top: 32px;\n    padding: 16px 0;\n    font-size: 1.25rem;\n    font-weight: bold;\n    letter-spacing: 2.6666666667px;\n    text-transform: uppercase;\n    text-shadow: 1px 1px #3A3A3A;\n    color: #ffffff;\n    }\n    \n    .card__button_sub {\n    width:100%;\n    background-color: #15b4e3;\n    border: 1px solid #15b4e3;\n    border-radius: 8px;\n    margin-top: 32px;\n    padding: 16px 0;\n    font-size: 1.25rem;\n    font-weight: bold;\n    letter-spacing: 2.6666666667px;\n    text-transform: uppercase;\n    text-shadow: 1px 1px #3A3A3A;\n    color: #ffffff;\n    }\n    \n    .card:hover .card__button {\n    background-color: #15b4e3;\n    border-color: #15b4e3;\n    }\n    \n    .card:hover .price {\n    color: #15b4e3;\n    }\n    \n    .sub td\n    {\n    padding-right: 40px;\n    }\n    \n    .c-main\n    {\n    color: gainsboro;\n    margin-top: 20px;\n    }\n    \n    .sub1 td\n    {\n    padding-right: 120px;\n    }";
    /***/
  },

  /***/
  "./src/app/aval-packges/aval-packges.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/aval-packges/aval-packges.component.ts ***!
    \********************************************************/

  /*! exports provided: AvalPackgesComponent */

  /***/
  function srcAppAvalPackgesAvalPackgesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AvalPackgesComponent", function () {
      return AvalPackgesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Services_Operator_operator_package_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Services/Operator/operator-package-service.service */
    "./src/app/Services/Operator/operator-package-service.service.ts");

    var AvalPackgesComponent = /*#__PURE__*/function () {
      function AvalPackgesComponent(operatorPackageServiceService) {
        _classCallCheck(this, AvalPackgesComponent);

        this.operatorPackageServiceService = operatorPackageServiceService;
      }

      _createClass(AvalPackgesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.operatorPackageServiceService.GetAllPackage().subscribe(function (data) {
            // console.log(data);
            if (data.Data) {
              _this11.availableOperatorPackage = data.Data;
            }
          });
        }
      }]);

      return AvalPackgesComponent;
    }();

    AvalPackgesComponent.ctorParameters = function () {
      return [{
        type: _Services_Operator_operator_package_service_service__WEBPACK_IMPORTED_MODULE_2__["OperatorPackageServiceService"]
      }];
    };

    AvalPackgesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-aval-packges',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./aval-packges.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/aval-packges/aval-packges.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./aval-packges.component.css */
      "./src/app/aval-packges/aval-packges.component.css"))["default"]]
    })], AvalPackgesComponent);
    /***/
  },

  /***/
  "./src/app/bookingdetails/bookingdetails.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/bookingdetails/bookingdetails.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookingdetailsBookingdetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bookingdetailscard{\nmargin-top: 20px;\n}\n\n.bookingdetailscard .card{\n    border: 0;\n    background-color: #e4f1ff;\n    color: #333333;\n    border-radius:0px;\n    box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%);\n    }\n\n.bookingdetailscard .card .card-title{\n        color:  #f4af26;\n        text-align: center;\n    }\n\n.bt-text{\n        color: #00ccf2;\n    }\n\n.payment-btn{\n        background-color: #00ccf2;\n        color: white;\n        border-radius: 2rem !important;\n    box-shadow: 2px 7px 12px #d4d4d3;\n    }\n\n.detailsspacehead{\n    height: 100px;\n}\n\n.detailsspacefooter{\n    height: 100px;  \n}\n   ";
    /***/
  },

  /***/
  "./src/app/bookingdetails/bookingdetails.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/bookingdetails/bookingdetails.component.ts ***!
    \************************************************************/

  /*! exports provided: BookingdetailsComponent */

  /***/
  function srcAppBookingdetailsBookingdetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingdetailsComponent", function () {
      return BookingdetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _Services_Bookings_bookings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../Services/Bookings/bookings.service */
    "./src/app/Services/Bookings/bookings.service.ts");
    /* harmony import */


    var _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../Services/Utilities/genaric.service */
    "./src/app/Services/Utilities/genaric.service.ts");

    var BookingdetailsComponent = /*#__PURE__*/function () {
      function BookingdetailsComponent(genricUtlitis, formBuilder, bookingsService, actRoute, modalService) {
        _classCallCheck(this, BookingdetailsComponent);

        this.genricUtlitis = genricUtlitis;
        this.formBuilder = formBuilder;
        this.bookingsService = bookingsService;
        this.actRoute = actRoute;
        this.modalService = modalService;
        this.scheduleBookings = [];
        this.historicalBookings = [];
        this.bookingDetails = [];
        this.tripTitle = '';
        this.bookingStatus = 'Pending';
      }

      _createClass(BookingdetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.postForm = this.formBuilder.group({
            PaymentStatus: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.tripId = this.actRoute.snapshot.params.id;
          this.bookingType = this.actRoute.snapshot.params.type;

          if (this.bookingType == 'current') {
            this.getScheduleBookings();
          } else {
            this.getHistoricBookings();
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this12 = this;

          // console.log(this.id);
          this.bookingsService.UpdateBookingStatus({
            Id: this.id,
            PaymentStatus: form.PaymentStatus
          }).subscribe(function (data) {
            if (data.Status) {
              _this12.genricUtlitis.showMessageToast(data.Message, true, 'Success!');

              $('#exampleModal').modal('hide');

              if (_this12.bookingType == 'current') {
                _this12.getScheduleBookings();
              } else {
                _this12.getHistoricBookings();
              }
            } else {
              _this12.genricUtlitis.showMessageToast(data.Message, false, 'Error!');
            }
          });
        }
      }, {
        key: "getScheduleBookings",
        value: function getScheduleBookings() {
          var _this13 = this;

          this.bookingsService.GetOperatorScheduleBookingTrips().subscribe(function (data) {
            if (data.Status) {
              _this13.scheduleBookings = data.Data;

              var filtterdTrips = _this13.scheduleBookings.find(function (x) {
                return x.TripBasicInfo.Id == _this13.tripId;
              });

              _this13.bookingDetail = filtterdTrips ? filtterdTrips.Bookings : [];
              _this13.tripTitle = filtterdTrips ? filtterdTrips.TripBasicInfo.Title : ''; // console.log(this.bookingDetail)
              // this.getBookingStatus()
            }
          });
        }
      }, {
        key: "getBookingStatus",
        value: function getBookingStatus(details) {
          var status = 'Pending';

          if (details.IsCanclled) {
            status = 'Cancelled';
          }

          if (details.PaymentStatus == 'Paid' && !details.IsCanclled) {
            status = 'Completed';
          }

          return status;
        }
      }, {
        key: "getHistoricBookings",
        value: function getHistoricBookings() {
          var _this14 = this;

          debugger;
          this.bookingsService.GetOperatorOldBookingTrips().subscribe(function (data) {
            if (data.Status) {
              _this14.bookingDetail = [];
              _this14.historicalBookings = data.Data; // console.log(this.historicalBookings);
              // this.tripTitle = data.Data[0].TripBasicInfo.Title

              var filtterdTrips = _this14.historicalBookings.find(function (x) {
                return x.TripBasicInfo.Id == _this14.tripId;
              });

              _this14.bookingDetail = filtterdTrips ? filtterdTrips.Bookings : [];
              _this14.tripTitle = filtterdTrips ? filtterdTrips.TripBasicInfo.Title : ''; // console.log(this.bookingDetail)
              // this.getBookingStatus()
            }
          });
        }
      }, {
        key: "setBooking",
        value: function setBooking(id) {
          this.id = id;
        }
      }]);

      return BookingdetailsComponent;
    }();

    BookingdetailsComponent.ctorParameters = function () {
      return [{
        type: _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_6__["GenaricService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _Services_Bookings_bookings_service__WEBPACK_IMPORTED_MODULE_5__["BookingsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
      }];
    };

    BookingdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bookingdetails',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bookingdetails.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/bookingdetails/bookingdetails.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bookingdetails.component.css */
      "./src/app/bookingdetails/bookingdetails.component.css"))["default"]]
    })], BookingdetailsComponent);
    /***/
  },

  /***/
  "./src/app/bookings/bookings.component.css":
  /*!*************************************************!*\
    !*** ./src/app/bookings/bookings.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookingsBookingsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".nav-pills .nav-link {\r\n    border-radius: 2rem !important;\r\n    width: 250px;\r\n    box-shadow: 2px 7px 12px #d4d4d3;\r\n    margin: 10px;\r\n    font-size: 1.0vw;\r\n    text-align: center;\r\n    font-family: 'Montserrat-Medium';\r\n\r\n}\r\n\r\n.nav {\r\n    flex-wrap: unset;\r\n}\r\n\r\n.nav-pills .active {\r\n    color: white;\r\n    background-color: #00A991;\r\n}\r\n\r\n.nav-pills li:nth-child(1) a {\r\n    border-radius: 10px 0 0 10px;\r\n}\r\n\r\n.nav-pills li:nth-child(2) a {\r\n    border-radius: 0 10px 10px 0;\r\n}\r\n\r\n.trip-card {\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n    background-color: #fff;\r\n    padding: 5px;\r\n  }\r\n\r\n.card-content {\r\n    padding: 15px;\r\n    position: relative;\r\n    z-index: 2;\r\n  }\r\n\r\n.card-title {\r\n    color: #000;\r\n    font-size: 19px;\r\n    font-weight: 500;\r\n    line-height: 22.873px;\r\n    /* 127.778% */\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    max-width: 100%;\r\n  }\r\n\r\n.card-details {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 10px;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n.detail-item {\r\n    color: #000;\r\n    font-size: 15px;\r\n    font-weight: 400;\r\n  }\r\n\r\n.card-info {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin: 10px 0;\r\n  }\r\n\r\n.card-features {\r\n    display: flex;\r\n    gap: 10px;\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n.feature-item {\r\n    color: #000;\r\n    font-size: 10.939px;\r\n    font-weight: 400;\r\n    text-transform: capitalize;\r\n    display: flex;\r\n    gap: 4px;\r\n    align-items: center;\r\n    white-space: nowrap;\r\n  }\r\n\r\n.feature-item span {\r\n    opacity: 0.5;\r\n    font-size: 13px;\r\n  }\r\n\r\n.feature-item i {\r\n    opacity: 1;\r\n  }\r\n\r\n.info-item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 4px;\r\n    flex: 1;\r\n    justify-content: start;\r\n    align-items: center;\r\n    position: relative;\r\n  }\r\n\r\n.info-item:not(:first-child)::after {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: -5px;\r\n    width: 1px;\r\n    height: 100%;\r\n    background-color: rgba(51, 51, 51, 0.5);\r\n  }\r\n\r\n.info-item span {\r\n    color: rgba(51, 51, 51, 0.50);\r\n    font-size: 11.934px;\r\n    font-weight: 400;\r\n    text-align: center;\r\n  }\r\n\r\n.info-item i {\r\n    font-size: 22px;\r\n  }\r\n\r\n.card-price>span {\r\n    color: #00A991 !important;\r\n    font-size: 23px;\r\n    font-weight: 500;\r\n    line-height: 33.966px;\r\n    /* 147.68% */\r\n    margin-top: 10px;\r\n  }\r\n\r\n.card-price span span {\r\n    color: #999;\r\n    font-size: 19px;\r\n    font-weight: 400;\r\n    line-height: 33.966px;\r\n  }\r\n\r\n.price-text {\r\n    white-space: nowrap;\r\n  }\r\n\r\n.trip-card a {\r\n    display: block;\r\n    width: 100%;\r\n    border-radius: 5px;\r\n  }\r\n\r\n.trip-card a img {\r\n    width: 100%;\r\n    height: 192px;\r\n    border-radius: 5px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n  }";
    /***/
  },

  /***/
  "./src/app/bookings/bookings.component.ts":
  /*!************************************************!*\
    !*** ./src/app/bookings/bookings.component.ts ***!
    \************************************************/

  /*! exports provided: BookingsComponent */

  /***/
  function srcAppBookingsBookingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingsComponent", function () {
      return BookingsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _Services_Bookings_bookings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Services/Bookings/bookings.service */
    "./src/app/Services/Bookings/bookings.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var BookingsComponent = /*#__PURE__*/function () {
      function BookingsComponent(bookingsService, router) {
        _classCallCheck(this, BookingsComponent);

        this.bookingsService = bookingsService;
        this.router = router; // tripModalList: TripModel[];

        this.scheduleBookings = [];
        this.historicalBookings = [];
        this.scheduleBookingsConstant = [];
        this.historicalBookingsConstant = [];
        this.page = 1;
        this.booking_type = 'scheduled';
        this.domainUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].domainToken;
        this.default_img = '/assets/img/photo1.png'; // this.tripModalList = [];
        // this.scheduleBookings = new TotalTripsModal();
      }

      _createClass(BookingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.bookingsService.GetOperatorScheduleBookingTrips().subscribe(function (data) {
            if (data.Status) {
              _this15.scheduleBookings = _this15.scheduleBookingsConstant = data.Data;
            }
          });
          this.bookingsService.GetOperatorOldBookingTrips().subscribe(function (data) {
            if (data.Status) {
              _this15.historicalBookings = _this15.historicalBookingsConstant = data.Data;
            }
          });
        }
      }, {
        key: "filterBookings",
        value: function filterBookings(event) {
          if (this.booking_type === 'scheduled') {
            this.scheduleBookings = this.scheduleBookingsConstant;
            this.scheduleBookings = this.scheduleBookings.filter(function (booking) {
              if (booking.TripBasicInfo.Title.toLowerCase().includes(event.target.value)) {
                return true;
              }
            });
          } else {
            this.historicalBookings = this.historicalBookingsConstant;
            this.historicalBookings = this.historicalBookings.filter(function (booking) {
              if (booking.TripBasicInfo.Title.toLowerCase().includes(event.target.value)) {
                return true;
              }
            });
          }
        }
      }, {
        key: "changeTab",
        value: function changeTab(booking_type) {
          this.booking_type = booking_type;
        }
      }]);

      return BookingsComponent;
    }();

    BookingsComponent.ctorParameters = function () {
      return [{
        type: _Services_Bookings_bookings_service__WEBPACK_IMPORTED_MODULE_3__["BookingsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    BookingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bookings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bookings.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/bookings.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bookings.component.css */
      "./src/app/bookings/bookings.component.css"))["default"]]
    })], BookingsComponent);
    /***/
  },

  /***/
  "./src/app/boost-pkg/boost-pkg.component.css":
  /*!***************************************************!*\
    !*** ./src/app/boost-pkg/boost-pkg.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBoostPkgBoostPkgComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\n  background-color: #3A3A3A;\n  color: #ffffff;\n  box-shadow: 2px 2px 10px #777777;\n  border-top: 8px solid #3A3A3A;\n  border-radius: 4px;\n  padding: 16px 39px 32px 32px;\n  margin: 20px;\n  margin-left: 50px;\n  width: 335px;\n  height: 450px;\n}\n\n.card:hover {\n  border-top: 8px solid #15b4e3;\n  border-radius: 4px;\n  transform: translateY(-1em);\n  transition: all 0.2s ease-out;\n}\n\n.card__title {\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  padding-bottom: 8px;\n}\n\n.card__body {\n  position: relative;\n  border-top: 2px solid #777777;\n  border-bottom: 2px solid #777777;\n  padding-bottom: 16px;\n}\n\n.price {\n  font-size: 3.5rem;\n  font-weight: bold;\n  text-shadow: 0 0 1px #000;\n  color: #f5af24;\n  padding-left: 24px;\n  margin: 32px 0;\n}\n\ntd {\n  padding: 4px;\n}\n\n.price__symbol {\n  position: absolute;\n  left: 0px;\n  top: 42px;\n  font-size: 1.5rem;\n}\n\n.price__tag {\n  text-transform: uppercase;\n  margin-bottom: 8px;\n}\n\n.card__button {\n  width: 100%;\n  background-color: #f5af24;\n  border: 1px solid #f5af24;\n  border-radius: 8px;\n  margin-top: 32px;\n  padding: 16px 0;\n  font-size: 1.25rem;\n  font-weight: bold;\n  letter-spacing: 2.6666666667px;\n  text-transform: uppercase;\n  text-shadow: 1px 1px #3A3A3A;\n  color: #ffffff;\n}\n\n.card__button_sub {\n  width: 100%;\n  background-color: #15b4e3;\n  border: 1px solid #15b4e3;\n  border-radius: 8px;\n  margin-top: 32px;\n  padding: 16px 0;\n  font-size: 1.25rem;\n  font-weight: bold;\n  letter-spacing: 2.6666666667px;\n  text-transform: uppercase;\n  text-shadow: 1px 1px #3A3A3A;\n  color: #ffffff;\n}\n\n.card:hover .card__button {\n  background-color: #15b4e3;\n  border-color: #15b4e3;\n}\n\n.card:hover .price {\n  color: #15b4e3;\n}\n\n.sub td {\n  padding-right: 40px;\n}\n\n.c-main {\n  color: gainsboro;\n  margin-top: 20px;\n}\n\n.sub1 td {\n  padding-right: 120px;\n}\n\n.nav-tabs {\n  margin: 30px auto;\n}\n\n.nav-tabs>li {\n  margin-left: -1px;\n}\n\n.nav-tabs>li:first-child>a {\n  border-radius: 0;\n}\n\n.nav-tabs>li:first-child>a:before {\n  display: none;\n}\n\n.nav-tabs>li:last-child>a:after {\n  box-shadow: none;\n}\n\n.nav-tabs>li>a {\n  padding: 15px 30px 15px 50px;\n  background-color: #f5af24;\n  color: black;\n  border: 0;\n  position: relative;\n}\n\n.nav-tabs>li>a:hover,\n.nav-tabs>li>a:active,\n.nav-tabs>li>a:focus {\n  background-color: #f5af24;\n  color: black;\n  border: 0;\n}\n\n.nav-tabs>li>a:before {\n  content: \" \";\n  position: absolute;\n  left: -20px;\n  top: 0;\n  height: 100%;\n  width: 40px;\n  background-color: #f5af24;\n  transform: skewX(35deg);\n}\n\n.nav-tabs>li>a:after {\n  content: \" \";\n  position: absolute;\n  right: -20px;\n  background-color: #f5af24;\n  top: 0;\n  height: 100%;\n  width: 40px;\n  transform: skewX(35deg);\n  box-shadow: 3px 0px 0 0 rgba(0, 0, 0, 0.1);\n  z-index: 1;\n}\n\n.nav-tabs>li.active {\n  margin-top: -11px;\n}\n\n.nav-tabs>li.active>a {\n  border: 0;\n  background-color: #15b4e3;\n  color: white;\n  padding: 15px 30px 15px 50px;\n  font-size: 22px;\n  border-radius: 0;\n}\n\n.nav-tabs>li.active>a:hover,\n.nav-tabs>li.active>a:active,\n.nav-tabs>li.active>a:focus {\n  background-color: #15b4e3;\n  color: white;\n  border: 0;\n}\n\n.nav-tabs>li.active>a:before {\n  display: none;\n}\n\n.nav-tabs>li.active>a:after {\n  right: -25px;\n  width: 50px;\n  background-color: #15b4e3;\n  z-index: 1;\n}\n\n.nav-pills .active {\n  color: white;\n  background-color: #00A991;\n}\n\n.nav-pills li:nth-child(1) a {\n  border-radius: 10px 0 0 10px;\n}\n\n.nav-pills li:nth-child(2) a {\n  border-radius: 0 10px 10px 0;\n}";
    /***/
  },

  /***/
  "./src/app/boost-pkg/boost-pkg.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/boost-pkg/boost-pkg.component.ts ***!
    \**************************************************/

  /*! exports provided: BoostPkgComponent */

  /***/
  function srcAppBoostPkgBoostPkgComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoostPkgComponent", function () {
      return BoostPkgComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Services_BoostTrip_boost_trip_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Services/BoostTrip/boost-trip.service */
    "./src/app/Services/BoostTrip/boost-trip.service.ts");
    /* harmony import */


    var _buy_boost_package_buy_boost_package_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../buy-boost-package/buy-boost-package.component */
    "./src/app/buy-boost-package/buy-boost-package.component.ts");
    /* harmony import */


    var _classes_trip_BoostPackage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../classes/trip/BoostPackage */
    "./src/app/classes/trip/BoostPackage.ts");

    var BoostPkgComponent = /*#__PURE__*/function () {
      function BoostPkgComponent(boostTrip, componentFactoryResolver) {
        _classCallCheck(this, BoostPkgComponent);

        this.boostTrip = boostTrip;
        this.componentFactoryResolver = componentFactoryResolver;
        this.childEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // this.availableBoostPackage= new BoostPackage();

        this.BoostPackagesUser = [];
      }

      _createClass(BoostPkgComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.boostTrip.BoostTrip().subscribe(function (data) {
            if (data.Status) {
              _this16.availableBoostPackage = data.Data; // console.log(this.availableBoostPackage);
            }
          });
          this.boostTrip.GetUsersBoostPackage().subscribe(function (data) {
            if (data.Status) {
              _this16.BoostPackagesUser = data.Data; // console.log(this.BoostPackagesUser);
            }
          });
        }
      }, {
        key: "Buy",
        value: function Buy(value) {
          var subscribeBoostPackage = new _classes_trip_BoostPackage__WEBPACK_IMPORTED_MODULE_4__["SubscribeBoostPackage"]();
          subscribeBoostPackage.Id = 0;
          subscribeBoostPackage.BoostPackageId = value.Id;
          subscribeBoostPackage.UId = 0;
          subscribeBoostPackage.RemainingBoostTrips = value.NoTrips;
          subscribeBoostPackage.IS_Payment = false;
          subscribeBoostPackage.IS_Active = value.IsActive;
          subscribeBoostPackage.IS_Deleted = false;
          subscribeBoostPackage.IS_Promo = value.Is_Promo;
          subscribeBoostPackage.PromoCode = value.PromoCode;
          subscribeBoostPackage.Title = value.Title;
          subscribeBoostPackage.Price = value.Price;
          subscribeBoostPackage.Discount = value.Discount;
          this.BuyBoostPackageInfo.clear();
          var factory = this.componentFactoryResolver.resolveComponentFactory(_buy_boost_package_buy_boost_package_component__WEBPACK_IMPORTED_MODULE_3__["BuyBoostPackageComponent"]);
          this.cmpRef = this.BuyBoostPackageInfo.createComponent(factory);
          this.cmpRef.instance.subscribedPackage = subscribeBoostPackage;

          if (!!this.cmpRef.instance.childEmitter) {
            this.cmpRef.instance.childEmitter.subscribe(this.BuyComplete);
          } // this.boostTrip.BoostPackageSubscription(subscribePackageItem).subscribe(data=>{
          //   console.log(data);
          // })

        }
      }, {
        key: "BuyComplete",
        value: function BuyComplete() {}
      }]);

      return BoostPkgComponent;
    }();

    BoostPkgComponent.ctorParameters = function () {
      return [{
        type: _Services_BoostTrip_boost_trip_service__WEBPACK_IMPORTED_MODULE_2__["BoostTripService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('BuyBoostPackage', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
      "static": false
    })], BoostPkgComponent.prototype, "BuyBoostPackageInfo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], BoostPkgComponent.prototype, "childEmitter", void 0);
    BoostPkgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-boost-pkg',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./boost-pkg.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/boost-pkg/boost-pkg.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./boost-pkg.component.css */
      "./src/app/boost-pkg/boost-pkg.component.css"))["default"]]
    })], BoostPkgComponent);
    /***/
  },

  /***/
  "./src/app/buy-boost-package/buy-boost-package.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/buy-boost-package/buy-boost-package.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBuyBoostPackageBuyBoostPackageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".overlay {\n    display: flex;\n    flex-direction: column;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(0, 0, 0, 0.7);\n    align-items: center;\n    justify-content: center;\n  }\n  \n  .dialog {\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n    background-color: white;\n    width: 50%;\n    height: 50%;\n    display: flex;\n    flex-direction: column;\n    padding: 8px;\n  }\n  \n  .card {\n    background-color: #3A3A3A;\n    color: #ffffff;\n    box-shadow: 2px 2px 10px #777777;\n    border-top: 8px solid #3A3A3A;\n    border-radius: 4px;\n    padding: 16px 39px 32px 32px;\n    margin: 20px;\n    margin-left: 50px;\n    width: 280px;\n  }\n  \n  .card:hover {\n    border-top: 8px solid #15b4e3;\n    border-radius: 4px;\n    transform: translateY(-1em);\n    transition: all 0.2s ease-out;\n  }\n  \n  .card__title {\n    font-size: 0.875rem;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    padding-bottom: 8px;\n  }\n  \n  .card__body {\n    position: relative;\n    border-top: 2px solid #777777;\n    border-bottom: 2px solid #777777;\n    padding-bottom: 16px;\n  }\n  \n  .price {\n    font-size: 4rem;\n    font-weight: bold;\n    text-shadow: 0 0 1px #000;\n    color: #f5af24;\n    padding-left: 24px;\n    margin: 32px 0;\n  }\n  \n  .price__symbol {\n    position: absolute;\n    left: 0px;\n    top: 42px;\n    font-size: 1.5rem;\n  }\n  \n  .price__tag {\n    text-transform: uppercase;\n    margin-bottom: 8px;\n  }\n  \n  .card__button {\n    width: 100%;\n    background-color: #f5af24;\n    border: 1px solid #f5af24;\n    border-radius: 8px;\n    margin-top: 32px;\n    padding: 16px 0;\n    font-size: 1.25rem;\n    font-weight: bold;\n    letter-spacing: 2.6666666667px;\n    text-transform: uppercase;\n    text-shadow: 1px 1px #3A3A3A;\n    color: #ffffff;\n  }\n  \n  .card__button_sub {\n    width:100%;\n    background-color: #15b4e3;\n    border: 1px solid #15b4e3;\n    border-radius: 8px;\n    margin-top: 32px;\n    padding: 16px 0;\n    font-size: 1.25rem;\n    font-weight: bold;\n    letter-spacing: 2.6666666667px;\n    text-transform: uppercase;\n    text-shadow: 1px 1px #3A3A3A;\n    color: #ffffff;\n  }\n  \n  .card:hover .card__button {\n    background-color: #15b4e3;\n    border-color: #15b4e3;\n  }\n  \n  .card:hover .price {\n    color: #15b4e3;\n  }\n  \n  .sub td\n  {\n      padding-right: 40px;\n  }\n  \n  .c-main\n  {\n      color: gainsboro;\n      margin-top: 20px;\n  }\n  \n  .sub1 td\n  {\n      padding-right: 120px;\n  }\n  \n  .nav-tabs {\n    margin: 30px auto;\n  }\n  \n  .nav-tabs > li {\n    margin-left: -1px;\n  }\n  \n  .nav-tabs > li:first-child > a {\n    border-radius: 0;\n  }\n  \n  .nav-tabs > li:first-child > a:before {\n    display: none;\n  }\n  \n  .nav-tabs > li:last-child > a:after {\n    box-shadow: none;\n  }\n  \n  .nav-tabs > li > a {\n    padding: 15px 30px 15px 50px;\n    background-color: #f5af24;\n    color: black;\n    border: 0;\n    position: relative;\n  }\n  \n  .nav-tabs > li > a:hover, .nav-tabs > li > a:active, .nav-tabs > li > a:focus {\n    background-color: #f5af24;\n    color: black;\n    border: 0;\n  }\n  \n  .nav-tabs > li > a:before {\n    content: \" \";\n    position: absolute;\n    left: -20px;\n    top: 0;\n    height: 100%;\n    width: 40px;\n    background-color: #f5af24;\n    transform: skewX(35deg);\n  }\n  \n  .nav-tabs > li > a:after {\n    content: \" \";\n    position: absolute;\n    right: -20px;\n    background-color: #f5af24;\n    top: 0;\n    height: 100%;\n    width: 40px;\n    transform: skewX(35deg);\n    box-shadow: 3px 0px 0 0 rgba(0, 0, 0, 0.1);\n    z-index: 1;\n  }\n  \n  .nav-tabs > li.active {\n    margin-top: -11px;\n  }\n  \n  .nav-tabs > li.active > a {\n    border: 0;\n    background-color: #15b4e3;\n    color: white;\n    padding: 15px 30px 15px 50px;\n    font-size: 22px;\n    border-radius: 0;\n  }\n  \n  .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:active, .nav-tabs > li.active > a:focus {\n    background-color: #15b4e3;\n    color: white;\n    border: 0;\n  }\n  \n  .nav-tabs > li.active > a:before {\n    display: none;\n  }\n  \n  .nav-tabs > li.active > a:after {\n    right: -25px;\n    width: 50px;\n    background-color: #15b4e3;\n    z-index: 1;\n  }";
    /***/
  },

  /***/
  "./src/app/buy-boost-package/buy-boost-package.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/buy-boost-package/buy-boost-package.component.ts ***!
    \******************************************************************/

  /*! exports provided: BuyBoostPackageComponent */

  /***/
  function srcAppBuyBoostPackageBuyBoostPackageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuyBoostPackageComponent", function () {
      return BuyBoostPackageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Services_BoostTrip_boost_trip_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Services/BoostTrip/boost-trip.service */
    "./src/app/Services/BoostTrip/boost-trip.service.ts");
    /* harmony import */


    var _classes_trip_BoostPackage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../classes/trip/BoostPackage */
    "./src/app/classes/trip/BoostPackage.ts");
    /* harmony import */


    var _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Services/Utilities/genaric.service */
    "./src/app/Services/Utilities/genaric.service.ts"); // import { ModalDirective } from 'ngx-bootstrap/modal';


    var BuyBoostPackageComponent = /*#__PURE__*/function () {
      function BuyBoostPackageComponent(boostTrip, genricUtlitis) {
        _classCallCheck(this, BuyBoostPackageComponent);

        this.boostTrip = boostTrip;
        this.genricUtlitis = genricUtlitis; // @ViewChild('BuyBoostPackage') public modal: ModalDirective;

        this.childEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.promoDiscount = 0;
        this.discount = 0;
        this.subscribedPackage = new _classes_trip_BoostPackage__WEBPACK_IMPORTED_MODULE_3__["SubscribeBoostPackage"]();
      }

      _createClass(BuyBoostPackageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.subscribedPackage.DiscountPrice = 0;
          this.subscribedPackage.Discount;
          this.subscribedPackage.DiscountPrice = this.subscribedPackage.Price * (this.subscribedPackage.Discount / 100);
          this.total = this.subscribedPackage.Price - this.subscribedPackage.DiscountPrice; // console.log(this.subscribedPackage.DiscountPrice);
        }
      }, {
        key: "BuyPackage",
        value: function BuyPackage() {
          var _this17 = this;

          if (confirm('Are you sure?')) {
            this.boostTrip.BoostPackageSubscription(this.subscribedPackage).subscribe(function (data) {
              if (data.Status) {
                _this17.genricUtlitis.showMessageToast(data.Message, true, 'Success!');

                setTimeout(function () {
                  _this17.childEmitter.emit('BuyBoostPackage');
                }, 5000);
              } else {
                _this17.childEmitter.emit('BuyBoostPackage');

                _this17.genricUtlitis.showMessageToast(data.Message, false, 'Error!');
              }
            });
          } else {
            return;
          }
        }
      }, {
        key: "VarifyPromo",
        value: function VarifyPromo(bId) {
          var _this18 = this;

          this.boostTrip.VerifyBoostTrip(bId, this.promoCode).subscribe(function (data) {
            if (data.Status) {
              _this18.genricUtlitis.showMessageToast('Your Promo Code is Valid and You have ' + data.Data.Discount + '%' + ' discount', true, _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_4__["PrintMedia"].Alter);

              _this18.promoDiscount = data.Data.Discount;
              _this18.subscribedPackage.DiscountPrice = data.Data.CurrentPrice;
              _this18.subscribedPackage.IS_Promo = true;
              _this18.subscribedPackage.PromoCode = _this18.promoCode;
            } else {
              _this18.genricUtlitis.showMessageToast('Promo Code not valid', false, _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_4__["PrintMedia"].Error);

              _this18.promoDiscount = 0;
              _this18.subscribedPackage.IS_Promo = false;
              _this18.subscribedPackage.PromoCode = null;
              _this18.subscribedPackage.DiscountPrice = 0;
            }
          });
        }
      }, {
        key: "cancel",
        value: function cancel() {}
      }]);

      return BuyBoostPackageComponent;
    }();

    BuyBoostPackageComponent.ctorParameters = function () {
      return [{
        type: _Services_BoostTrip_boost_trip_service__WEBPACK_IMPORTED_MODULE_2__["BoostTripService"]
      }, {
        type: _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_4__["GenaricService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BuyBoostPackageComponent.prototype, "package", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], BuyBoostPackageComponent.prototype, "childEmitter", void 0);
    BuyBoostPackageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-buy-boost-package',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./buy-boost-package.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/buy-boost-package/buy-boost-package.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./buy-boost-package.component.css */
      "./src/app/buy-boost-package/buy-boost-package.component.css"))["default"]]
    })], BuyBoostPackageComponent);
    /***/
  },

  /***/
  "./src/app/calender/calender.component.css":
  /*!*************************************************!*\
    !*** ./src/app/calender/calender.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCalenderCalenderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./src/app/calender/calender.component.ts":
  /*!************************************************!*\
    !*** ./src/app/calender/calender.component.ts ***!
    \************************************************/

  /*! exports provided: CalenderComponent */

  /***/
  function srcAppCalenderCalenderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalenderComponent", function () {
      return CalenderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CalenderComponent = /*#__PURE__*/function () {
      function CalenderComponent() {
        _classCallCheck(this, CalenderComponent);
      }

      _createClass(CalenderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CalenderComponent;
    }();

    CalenderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-calender',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./calender.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/calender/calender.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./calender.component.css */
      "./src/app/calender/calender.component.css"))["default"]]
    })], CalenderComponent);
    /***/
  },

  /***/
  "./src/app/classes/Complaint/ComplainModal.ts":
  /*!****************************************************!*\
    !*** ./src/app/classes/Complaint/ComplainModal.ts ***!
    \****************************************************/

  /*! exports provided: ComplainModal, ComplaintList */

  /***/
  function srcAppClassesComplaintComplainModalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComplainModal", function () {
      return ComplainModal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComplaintList", function () {
      return ComplaintList;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ComplainModal = function ComplainModal() {
      _classCallCheck(this, ComplainModal);
    };

    var ComplaintList = function ComplaintList() {
      _classCallCheck(this, ComplaintList);
    };
    /***/

  },

  /***/
  "./src/app/classes/Promo/Promo.ts":
  /*!****************************************!*\
    !*** ./src/app/classes/Promo/Promo.ts ***!
    \****************************************/

  /*! exports provided: Promo */

  /***/
  function srcAppClassesPromoPromoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Promo", function () {
      return Promo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Promo = function Promo() {
      _classCallCheck(this, Promo);
    };
    /***/

  },

  /***/
  "./src/app/classes/ResetPassword/reset-password.ts":
  /*!*********************************************************!*\
    !*** ./src/app/classes/ResetPassword/reset-password.ts ***!
    \*********************************************************/

  /*! exports provided: ResetPasswordModel */

  /***/
  function srcAppClassesResetPasswordResetPasswordTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPasswordModel", function () {
      return ResetPasswordModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ResetPasswordModel = function ResetPasswordModel() {
      _classCallCheck(this, ResetPasswordModel);
    };
    /***/

  },

  /***/
  "./src/app/classes/Subscription/Operator.ts":
  /*!**************************************************!*\
    !*** ./src/app/classes/Subscription/Operator.ts ***!
    \**************************************************/

  /*! exports provided: OperatorPackage, PackageDetaisl, AvailableOperatorPackage */

  /***/
  function srcAppClassesSubscriptionOperatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OperatorPackage", function () {
      return OperatorPackage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PackageDetaisl", function () {
      return PackageDetaisl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AvailableOperatorPackage", function () {
      return AvailableOperatorPackage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var OperatorPackage = function OperatorPackage() {
      _classCallCheck(this, OperatorPackage);
    };

    var PackageDetaisl = function PackageDetaisl() {
      _classCallCheck(this, PackageDetaisl);
    };

    var AvailableOperatorPackage = function AvailableOperatorPackage() {
      _classCallCheck(this, AvailableOperatorPackage);
    };
    /***/

  },

  /***/
  "./src/app/classes/User/UsersModal.ts":
  /*!********************************************!*\
    !*** ./src/app/classes/User/UsersModal.ts ***!
    \********************************************/

  /*! exports provided: UsersList, Roles, Address, City, Provinces, Country, UserModel, UserSearch, User, LicenceNo, LicenceAttachment, UsersSocialLinksToShow, BookedTrip, UserPassword */

  /***/
  function srcAppClassesUserUsersModalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersList", function () {
      return UsersList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Roles", function () {
      return Roles;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Address", function () {
      return Address;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "City", function () {
      return City;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Provinces", function () {
      return Provinces;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Country", function () {
      return Country;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserModel", function () {
      return UserModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserSearch", function () {
      return UserSearch;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LicenceNo", function () {
      return LicenceNo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LicenceAttachment", function () {
      return LicenceAttachment;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersSocialLinksToShow", function () {
      return UsersSocialLinksToShow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookedTrip", function () {
      return BookedTrip;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPassword", function () {
      return UserPassword;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var UsersList = function UsersList() {
      _classCallCheck(this, UsersList);
    };

    var Roles = function Roles() {
      _classCallCheck(this, Roles);
    };

    var Address = function Address() {
      _classCallCheck(this, Address);

      this.City = new City();
    };

    var City = function City() {
      _classCallCheck(this, City);

      this.Provinces = new Provinces();
    };

    var Provinces = function Provinces() {
      _classCallCheck(this, Provinces);

      this.Country = new Country();
    };

    var Country = function Country() {
      _classCallCheck(this, Country);
    };

    var UserModel = function UserModel() {
      _classCallCheck(this, UserModel);

      // tslint:disable-next-line:variable-name
      this.grant_type = 'password';
    };

    var UserSearch = function UserSearch() {
      _classCallCheck(this, UserSearch);
    };

    var User = function User() {
      _classCallCheck(this, User);

      this.Licence = new LicenceNo();
      this.OperatorSocialLinks = new Array();
    };

    var LicenceNo = function LicenceNo() {
      _classCallCheck(this, LicenceNo);

      this.LicenceAttachments = new Array();
    };

    var LicenceAttachment = function LicenceAttachment() {
      _classCallCheck(this, LicenceAttachment);
    };

    var UsersSocialLinksToShow = function UsersSocialLinksToShow() {
      _classCallCheck(this, UsersSocialLinksToShow);
    };

    var BookedTrip = function BookedTrip() {
      _classCallCheck(this, BookedTrip);
    };

    var UserPassword = function UserPassword() {
      _classCallCheck(this, UserPassword);
    };
    /***/

  },

  /***/
  "./src/app/classes/signup/userRegistraions.ts":
  /*!****************************************************!*\
    !*** ./src/app/classes/signup/userRegistraions.ts ***!
    \****************************************************/

  /*! exports provided: UsersRegistrations */

  /***/
  function srcAppClassesSignupUserRegistraionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersRegistrations", function () {
      return UsersRegistrations;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var UsersRegistrations = function UsersRegistrations() {
      _classCallCheck(this, UsersRegistrations);
    };
    /***/

  },

  /***/
  "./src/app/classes/trip/BoostPackage.ts":
  /*!**********************************************!*\
    !*** ./src/app/classes/trip/BoostPackage.ts ***!
    \**********************************************/

  /*! exports provided: SubscribeBoostPackage */

  /***/
  function srcAppClassesTripBoostPackageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubscribeBoostPackage", function () {
      return SubscribeBoostPackage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var SubscribeBoostPackage = function SubscribeBoostPackage() {
      _classCallCheck(this, SubscribeBoostPackage);
    };
    /***/

  },

  /***/
  "./src/app/classes/trip/TripModel.ts":
  /*!*******************************************!*\
    !*** ./src/app/classes/trip/TripModel.ts ***!
    \*******************************************/

  /*! exports provided: TripModel, TripReview, TripReviewModal, TripPrice, IternaryPlan, DayPlan, TripImages, TripBasicInfo, Faclities, TempTripImagesList, TripDefult, TotalTripsModal, TripComments, FacilitiesForm, FirstChild, SecendChild, ThirdChild, TripReplyComments, TripStatusModal, TripViewsModel, TripCountModel, GrapdataModel, GrapMonthlydataModel, TripReportModel */

  /***/
  function srcAppClassesTripTripModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TripModel", function () {
      return TripModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TripReview", function () {
      return TripReview;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TripReviewModal", function () {
      return TripReviewModal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TripPrice", function () {
      return TripPrice;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IternaryPlan", function () {
      return IternaryPlan;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DayPlan", function () {
      return DayPlan;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TripImages", function () {
      return TripImages;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TripBasicInfo", function () {
      return TripBasicInfo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Faclities", function () {
      return Faclities;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TempTripImagesList", function () {
      return TempTripImagesList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TripDefult", function () {
      return TripDefult;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TotalTripsModal", function () {
      return TotalTripsModal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TripComments", function () {
      return TripComments;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilitiesForm", function () {
      return FacilitiesForm;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirstChild", function () {
      return FirstChild;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecendChild", function () {
      return SecendChild;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThirdChild", function () {
      return ThirdChild;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TripReplyComments", function () {
      return TripReplyComments;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TripStatusModal", function () {
      return TripStatusModal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TripViewsModel", function () {
      return TripViewsModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TripCountModel", function () {
      return TripCountModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GrapdataModel", function () {
      return GrapdataModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GrapMonthlydataModel", function () {
      return GrapMonthlydataModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TripReportModel", function () {
      return TripReportModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var TripModel = function TripModel() {
      _classCallCheck(this, TripModel);

      this.TripReviews = [];
      this.TripImages = [];
      this.IternaryPlan = [];
      this.TripBasicInfo = new TripBasicInfo();
      this.tripPrices = new TripPrice();
      this.TripImages = [];
      this.IternaryPlan = [];
      this.Faclities = new Faclities();
      this.TripReviews = [];
    };

    var TripReview = function TripReview() {
      _classCallCheck(this, TripReview);
    };

    var TripReviewModal = function TripReviewModal() {
      _classCallCheck(this, TripReviewModal);
    };

    var TripPrice = function TripPrice() {
      _classCallCheck(this, TripPrice);
    };

    var IternaryPlan = function IternaryPlan() {
      _classCallCheck(this, IternaryPlan);

      this.DayPlan = [];
    };

    var DayPlan = function DayPlan() {
      _classCallCheck(this, DayPlan);
    };

    var TripImages = function TripImages() {
      _classCallCheck(this, TripImages);
    };

    var TripBasicInfo = function TripBasicInfo() {
      _classCallCheck(this, TripBasicInfo);
    };

    var Faclities = function Faclities() {
      _classCallCheck(this, Faclities);

      this.HaveTransport = false;
      this.HaveAccomodation = false;
      this.HaveMeals = false;
      this.HaveFirstAid = false;
      this.Icon_Accomodation = "fac_accomodation";
      this.Icon_FirstAid = "fac_first_aid";
      this.Icon_Meals = "fac_meals";
      this.Icon_Transport = "fac_transport";
      this.FacalitiesList = [];
    };

    var TempTripImagesList = function TempTripImagesList() {
      _classCallCheck(this, TempTripImagesList);
    };

    var TripDefult = function TripDefult() {
      _classCallCheck(this, TripDefult);
    };

    var TotalTripsModal = function TotalTripsModal() {
      _classCallCheck(this, TotalTripsModal);
    };

    var TripComments = function TripComments() {
      _classCallCheck(this, TripComments);
    };

    var FacilitiesForm = function FacilitiesForm() {
      _classCallCheck(this, FacilitiesForm);

      this.child = [];
    };

    var FirstChild = function FirstChild() {
      _classCallCheck(this, FirstChild);

      this.child = [];
    };

    var SecendChild = function SecendChild() {
      _classCallCheck(this, SecendChild);

      this.child = [];
    };

    var ThirdChild = function ThirdChild() {
      _classCallCheck(this, ThirdChild);
    };

    var TripReplyComments = function TripReplyComments() {
      _classCallCheck(this, TripReplyComments);
    };

    var TripStatusModal = function TripStatusModal() {
      _classCallCheck(this, TripStatusModal);
    };

    var TripViewsModel = function TripViewsModel() {
      _classCallCheck(this, TripViewsModel);
    };

    var TripCountModel = function TripCountModel() {
      _classCallCheck(this, TripCountModel);
    };

    var GrapdataModel = function GrapdataModel() {
      _classCallCheck(this, GrapdataModel);

      this.monthlyTripData = new GrapMonthlydataModel();
    };

    var GrapMonthlydataModel = function GrapMonthlydataModel() {
      _classCallCheck(this, GrapMonthlydataModel);
    };

    var TripReportModel = function TripReportModel() {
      _classCallCheck(this, TripReportModel);
    };
    /***/

  },

  /***/
  "./src/app/complaint/complaint.component.css":
  /*!***************************************************!*\
    !*** ./src/app/complaint/complaint.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComplaintComplaintComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Modern Modal Styles */\n.modern-modal {\n    border: none;\n    border-radius: 12px;\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n    overflow: hidden;\n}\n.modern-header {\n    background: linear-gradient(135deg, #00A991 0%, #008f7a 100%);\n    color: white;\n    border: none;\n    padding: 20px 25px;\n    position: relative;\n}\n.modern-header .modal-title {\n    font-size: 1.25rem;\n    font-weight: 600;\n    margin: 0;\n    display: flex;\n    align-items: center;\n}\n.modern-header .btn-close {\n    background: none;\n    border: none;\n    color: white;\n    font-size: 1.2rem;\n    padding: 0;\n    width: 30px;\n    height: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    transition: all 0.3s ease;\n}\n.modern-header .btn-close:hover {\n    background: rgba(255, 255, 255, 0.2);\n    transform: scale(1.1);\n}\n.modern-body {\n    /* padding: 30px 25px; */\n    background: #fafafa;\n    padding: 0;\n}\n.modern-footer {\n    background: white;\n    border-top: 1px solid #e9ecef;\n    padding: 20px 25px;\n    display: flex;\n    justify-content: flex-end;\n    gap: 12px;\n}\n/* Complaint Details Styles */\n.complaint-details {\n    background: white;\n    border-radius: 8px;\n    padding: 25px;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.detail-row {\n    display: flex;\n    align-items: flex-start;\n    margin-bottom: 20px;\n    padding-bottom: 15px;\n    border-bottom: 1px solid #f0f0f0;\n}\n.detail-row:last-child {\n    border-bottom: none;\n    margin-bottom: 0;\n}\n.detail-row.full-width {\n    flex-direction: column;\n    align-items: flex-start;\n}\n.detail-label {\n    display: flex;\n    align-items: center;\n    min-width: 120px;\n    font-weight: 600;\n    color: #333;\n    margin-bottom: 8px;\n}\n.detail-label i {\n    margin-right: 8px;\n    font-size: 0.9rem;\n}\n.detail-value {\n    flex: 1;\n    color: #555;\n    font-weight: 500;\n    margin-left: 15px;\n}\n.detail-value.ticket-id {\n    font-family: 'Courier New', monospace;\n    background: #f8f9fa;\n    padding: 4px 8px;\n    border-radius: 4px;\n    color: #00A991;\n    font-weight: 600;\n}\n.detail-content {\n    width: 100%;\n    margin-top: 8px;\n}\n.detail-content p {\n    color: #666;\n    line-height: 1.6;\n    margin: 0;\n    text-align: justify;\n}\n/* Form Styles */\n.form-section {\n    background: white;\n    border-radius: 8px;\n    padding: 25px;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n    display: flex;\n    flex-direction: column;\n}\n.modern-form-group {\n    margin-bottom: 25px;\n}\n.form-label {\n    display: flex;\n    align-items: center;\n    font-weight: 600;\n    color: #333;\n    margin-bottom: 8px;\n    font-size: 0.95rem;\n}\n.form-label i {\n    margin-right: 8px;\n    font-size: 0.9rem;\n}\n.required {\n    color: #dc3545;\n    margin-left: 4px;\n}\n.modern-input,\n.modern-textarea {\n    border: 2px solid #e9ecef;\n    border-radius: 8px;\n    padding: 12px 16px;\n    font-size: 0.95rem;\n    transition: all 0.3s ease;\n    background: #fafafa;\n}\n.modern-input:focus,\n.modern-textarea:focus {\n    border-color: #00A991;\n    box-shadow: 0 0 0 3px rgba(0, 169, 145, 0.1);\n    background: white;\n    outline: none;\n}\n.modern-textarea {\n    resize: vertical;\n    min-height: 120px;\n}\n/* Error Message Styles */\n.error-message {\n    margin-top: 8px;\n    font-size: 0.85rem;\n}\n.error-message>div {\n    color: #dc3545;\n    display: flex;\n    align-items: center;\n    margin-bottom: 4px;\n}\n.error-message i {\n    margin-right: 6px;\n    font-size: 0.8rem;\n}\n/* Button Styles */\n.btn {\n    padding: 10px 20px;\n    border-radius: 8px;\n    font-weight: 600;\n    font-size: 0.9rem;\n    border: none;\n    transition: all 0.3s ease;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    cursor: pointer;\n}\n.btn-primary {\n    background: linear-gradient(135deg, #00A991 0%, #008f7a 100%);\n    color: white;\n}\n.btn-primary:hover:not(:disabled) {\n    background: linear-gradient(135deg, #008f7a 0%, #007a68 100%);\n    transform: translateY(-1px);\n    box-shadow: 0 4px 12px rgba(0, 169, 145, 0.3);\n}\n.btn-primary:disabled {\n    background: #ccc;\n    cursor: not-allowed;\n    transform: none;\n    box-shadow: none;\n}\n.btn-secondary {\n    background: #6c757d;\n    color: white;\n}\n.btn-secondary:hover {\n    background: #5a6268;\n    transform: translateY(-1px);\n}\n/* Responsive Design */\n@media (max-width: 768px) {\n    .modal-dialog {\n        margin: 10px;\n    }\n\n    .modern-header,\n    .modern-body,\n    .modern-footer {\n        padding: 15px 20px;\n    }\n\n    .complaint-details,\n    .form-section {\n        padding: 20px;\n    }\n\n    .detail-row {\n        flex-direction: column;\n        align-items: flex-start;\n    }\n\n    .detail-value {\n        margin-left: 0;\n        margin-top: 8px;\n    }\n\n    .modern-footer {\n        flex-direction: column;\n    }\n\n    .btn {\n        width: 100%;\n        margin-bottom: 8px;\n    }\n}\n/* Animation for modal appearance */\n.modal.fade .modal-dialog {\n    transform: scale(0.8);\n    transition: transform 0.3s ease-out;\n}\n.modal.show .modal-dialog {\n    transform: scale(1);\n}\n/* Text Primary Color Override */\n.text-primary {\n    color: #00A991 !important;\n}";
    /***/
  },

  /***/
  "./src/app/complaint/complaint.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/complaint/complaint.component.ts ***!
    \**************************************************/

  /*! exports provided: ComplaintComponent */

  /***/
  function srcAppComplaintComplaintComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComplaintComponent", function () {
      return ComplaintComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _classes_Complaint_ComplainModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../classes/Complaint/ComplainModal */
    "./src/app/classes/Complaint/ComplainModal.ts");
    /* harmony import */


    var _Services_Complaint_complaint_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../Services/Complaint/complaint.service */
    "./src/app/Services/Complaint/complaint.service.ts");

    var ComplaintComponent = /*#__PURE__*/function () {
      function ComplaintComponent(complaintService, formBuilder, toastr) {
        _classCallCheck(this, ComplaintComponent);

        this.complaintService = complaintService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.ComplainModal = new _classes_Complaint_ComplainModal__WEBPACK_IMPORTED_MODULE_4__["ComplainModal"]();
        this.complainDetail = new _classes_Complaint_ComplainModal__WEBPACK_IMPORTED_MODULE_4__["ComplaintList"]();
        this.ComplainModalList = [];
      }

      _createClass(ComplaintComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadComplaintList();
          this.postForm = this.formBuilder.group({
            Subject: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)]],
            ComplaintDetails: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "loadComplaintList",
        value: function loadComplaintList() {
          var _this19 = this;

          this.complaintService.GetComplaintUser().subscribe(function (data) {
            if (data.Status) {
              _this19.ComplainModalList = data.Data;
            }
          });
        }
      }, {
        key: "AddComplaint",
        value: function AddComplaint() {
          var _this20 = this;

          // console.log(this.postForm); return;
          this.complaintService.AddNewComplaint(this.postForm.value).subscribe(function (data) {
            if (data.Status) {
              _this20.loadComplaintList();

              _this20.toastr.success(data.Message, 'Success');

              $('#modal-complaintAdd').modal('hide');
            } else {
              _this20.toastr.error(data.Message, 'Error!');
            }
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.postForm.controls;
        }
      }, {
        key: "loadDetail",
        value: function loadDetail(i) {
          this.complainDetail = this.ComplainModalList[i];
        }
      }]);

      return ComplaintComponent;
    }();

    ComplaintComponent.ctorParameters = function () {
      return [{
        type: _Services_Complaint_complaint_service__WEBPACK_IMPORTED_MODULE_5__["ComplaintService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }];
    };

    ComplaintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-complaint',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./complaint.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/complaint/complaint.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./complaint.component.css */
      "./src/app/complaint/complaint.component.css"))["default"]]
    })], ComplaintComponent);
    /***/
  },

  /***/
  "./src/app/custom-tour-request-detail/custom-tour-request-detail.component.css":
  /*!*************************************************************************************!*\
    !*** ./src/app/custom-tour-request-detail/custom-tour-request-detail.component.css ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomTourRequestDetailCustomTourRequestDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".custom-detail-container {\n  padding: 20px;\n}\n\n.detail-header {\n  margin-bottom: 20px;\n  font-size: 1.8em;\n  color: #333;\n  display: flex;\n  align-items: center;\n}\n\n.status-badge {\n  margin-left: 15px;\n  padding: 5px 10px;\n  border-radius: 5px;\n  font-size: 0.8em;\n  font-weight: bold;\n  color: white;\n}\n\n.status-pending {\n  background-color: #ffc107; /* Yellow */\n}\n\n.status-accepted {\n  background-color: #28a745; /* Green */\n}\n\n.status-rejected {\n  background-color: #dc3545; /* Red */\n}\n\n.custom-detail-card {\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.card-body {\n  padding: 25px;\n}\n\n.detail-section {\n  margin-bottom: 20px;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #eee;\n}\n\n.detail-section:last-of-type {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n\n.detail-section h6 {\n  font-size: 1.2em;\n  color: #555;\n  margin-bottom: 15px;\n}\n\n.detail-section p {\n  margin-bottom: 8px;\n}\n\n.detail-section strong {\n  color: #333;\n}\n\n.detail-actions button {\n  min-width: 100px;\n}\n\n.attachments ul {\n  list-style: none;\n  padding-left: 0;\n}\n\n.attachments li {\n  margin-bottom: 5px;\n}\n\n.attachments a {\n  color: #007bff;\n  text-decoration: none;\n}\n\n.attachments a:hover {\n  text-decoration: underline;\n}\n\n.offer-card {\n  background-color: #f8f9fa; /* Light gray background */\n  border: 1px solid #e9ecef; /* Light border */\n  border-radius: 8px;\n  padding: 20px;\n  margin-bottom: 20px; /* Space between offer cards */\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05); /* Subtle shadow */\n}\n\n.offer-card:last-child {\n  margin-bottom: 0; /* No margin for the last offer card */\n}\n\n/* New styles for headings and dividers */\n\n.section-title {\n  font-size: 1.5em;\n  font-weight: 600;\n  color: #333;\n}\n\n.section-divider {\n  border: 0;\n  border-top: 1px solid #e0e0e0; /* Light gray solid line */\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n\n.offer-subsection-title {\n  font-size: 1.3em;\n  font-weight: 700;\n  color: #00a991; /* A distinct color */\n  margin-bottom: 15px; /* Add some space below */\n}\n\n.long-button {\n  min-width: 100%;\n  height: 3rem;\n}\n";
    /***/
  },

  /***/
  "./src/app/custom-tour-request-detail/custom-tour-request-detail.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/custom-tour-request-detail/custom-tour-request-detail.component.ts ***!
    \************************************************************************************/

  /*! exports provided: CustomTourRequestDetailComponent */

  /***/
  function srcAppCustomTourRequestDetailCustomTourRequestDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomTourRequestDetailComponent", function () {
      return CustomTourRequestDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _Services_Operator_operator_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Services/Operator/operator-api.service */
    "./src/app/Services/Operator/operator-api.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _Services_Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../Services/Utilities/triputilites.service */
    "./src/app/Services/Utilities/triputilites.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js"); // Import TriputilitesService
    // Import forkJoin


    var CustomTourRequestDetailComponent = /*#__PURE__*/function () {
      function CustomTourRequestDetailComponent(route, router, operatorApiService, utilities, // Inject TriputilitesService
      toastr // Inject ToastrService
      ) {
        _classCallCheck(this, CustomTourRequestDetailComponent);

        this.route = route;
        this.router = router;
        this.operatorApiService = operatorApiService;
        this.utilities = utilities;
        this.toastr = toastr;
        this.attachments = [];
        this.domainToken = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].domainToken;
        this.currentOperatorId = null; // Initialize as null

        this.countries = [];
        this.visitPlaces = [];
        this.showOlderOffers = new Set();
      }

      _createClass(CustomTourRequestDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          this.loadCurrentOperatorId(); // Load operator ID first

          console.log('ngOnInit - currentOperatorId:', this.currentOperatorId);
          this.loadCountriesAndVisitPlaces().then(function () {
            _this21.loadRequestDetails();
          });
        }
      }, {
        key: "loadCurrentOperatorId",
        value: function loadCurrentOperatorId() {
          var userProfileString = localStorage.getItem('UserProfile');

          if (userProfileString) {
            var userProfile = JSON.parse(userProfileString);
            this.currentOperatorId = userProfile.OperatorId || userProfile.Id; // Prioritize OperatorId, fallback to Id

            console.log('loadCurrentOperatorId - UserProfile:', userProfile);
            console.log('loadCurrentOperatorId - currentOperatorId:', this.currentOperatorId);
          }
        }
      }, {
        key: "loadCountriesAndVisitPlaces",
        value: function loadCountriesAndVisitPlaces() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this22 = this;

            var countryResponse, visitPlaceObservables, visitPlaceResponses;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.utilities.GetCountry().toPromise();

                  case 2:
                    countryResponse = _context.sent;

                    if (!countryResponse.Status) {
                      _context.next = 10;
                      break;
                    }

                    this.countries = countryResponse.Data;
                    visitPlaceObservables = this.countries.map(function (country) {
                      return _this22.utilities.GetVisitPlace(country.Id);
                    });
                    _context.next = 8;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])(visitPlaceObservables).toPromise();

                  case 8:
                    visitPlaceResponses = _context.sent;
                    visitPlaceResponses.forEach(function (response) {
                      if (response.Status) {
                        var _this22$visitPlaces;

                        (_this22$visitPlaces = _this22.visitPlaces).push.apply(_this22$visitPlaces, _toConsumableArray(response.Data));
                      }
                    });

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "loadRequestDetails",
        value: function loadRequestDetails() {
          var _this23 = this;

          this.referenceId = +this.route.snapshot.paramMap.get('id');
          this.operatorApiService.GetCustomTripDetails(this.referenceId).subscribe(function (response) {
            if (response.Status) {
              _this23.customRequestDetail = response.Data;
              console.log('loadRequestDetails - customRequestDetail:', _this23.customRequestDetail); // Sort offers for each participant in descending order of creation date

              if (_this23.customRequestDetail && _this23.customRequestDetail.Participants) {
                _this23.customRequestDetail.Participants.forEach(function (participant) {
                  if (participant.Offers && participant.Offers.length > 0) {
                    participant.Offers.sort(function (a, b) {
                      return new Date(b.CreatedAt).getTime() - new Date(a.CreatedAt).getTime();
                    });
                  }
                });
              } // Map country and place names


              if (_this23.customRequestDetail.TripRequest) {
                var request = _this23.customRequestDetail.TripRequest;

                var fromCountry = _this23.countries.find(function (c) {
                  return c.Id === request.FromCountry;
                });

                var toCountry = _this23.countries.find(function (c) {
                  return c.Id === request.ToCountry;
                });

                var fromPlace = _this23.visitPlaces.find(function (vp) {
                  return vp.Id === request.FromPlace;
                });

                var toPlace = _this23.visitPlaces.find(function (vp) {
                  return vp.Id === request.ToPlace;
                });

                request.FromCountry = fromCountry ? fromCountry.Name : request.FromCountry;
                request.ToCountry = toCountry ? toCountry.Name : request.ToCountry;
                request.FromPlace = fromPlace ? fromPlace.PartialVisitPlace : request.FromPlace;
                request.ToPlace = toPlace ? toPlace.PartialVisitPlace : request.ToPlace;
              }

              if (_this23.customRequestDetail.TripRequest && _this23.customRequestDetail.TripRequest.CustomTripReqAttachments) {
                _this23.attachments = _this23.customRequestDetail.TripRequest.CustomTripReqAttachments;
              }
            }
          });
        }
      }, {
        key: "filteredParticipants",
        get: function get() {
          var _this24 = this;

          console.log('filteredParticipants getter called.');
          console.log('customRequestDetail:', this.customRequestDetail);
          console.log('currentOperatorId:', this.currentOperatorId);

          if (this.customRequestDetail && this.customRequestDetail.Participants && this.currentOperatorId !== null) {
            var filtered = this.customRequestDetail.Participants.filter(function (participant) {
              console.log('Participant OperatorId:', participant.OperatorId, ' === currentOperatorId:', _this24.currentOperatorId, '?', participant.OperatorId === _this24.currentOperatorId);
              return participant.OperatorId === _this24.currentOperatorId;
            });
            console.log('Filtered Participants:', filtered);
            return filtered;
          }

          console.log('No participants or currentOperatorId is null.');
          return [];
        }
      }, {
        key: "isImage",
        value: function isImage(mimeType) {
          return mimeType && mimeType.startsWith('image');
        }
      }, {
        key: "acceptRequest",
        value: function acceptRequest() {
          var navigationExtras = {
            queryParams: {
              referenceId: this.referenceId
            }
          };
          this.router.navigate(['/offer-management'], navigationExtras);
        }
      }, {
        key: "reviseOffer",
        value: function reviseOffer(participentId) {
          var participant = this.filteredParticipants.find(function (p) {
            return p.ParticipentId === participentId;
          });

          if (participant && participant.Offers && participant.Offers.length > 0) {
            var latestOffer = participant.Offers[0];

            if (latestOffer.TravellerStatus === 'Pending') {
              this.toastr.error('Cannot revise offer while Traveller Status is Pending.', 'Revision Not Allowed');
              return;
            }
          }

          var navigationExtras = {
            queryParams: {
              participentId: participentId,
              referenceId: this.referenceId
            }
          };
          this.router.navigate(['/offer-management'], navigationExtras);
        }
      }, {
        key: "toggleShowOlderOffers",
        value: function toggleShowOlderOffers(participantId) {
          if (this.showOlderOffers.has(participantId)) {
            this.showOlderOffers["delete"](participantId);
          } else {
            this.showOlderOffers.add(participantId);
          }
        }
      }, {
        key: "rejectCustomTrip",
        value: function rejectCustomTrip() {
          var _this25 = this;

          if (confirm('Are you sure you want to reject this custom trip request?')) {
            this.operatorApiService.RejectCustomTripRequest(this.referenceId).subscribe(function (response) {
              if (response.Status) {
                _this25.toastr.success('Custom trip request rejected successfully', 'Success');

                _this25.router.navigate(['/custom-tour-requests']);
              } else {
                _this25.toastr.error(response.Message || 'Failed to reject custom trip request', 'Error');
              }
            }, function (error) {
              _this25.toastr.error('An error occurred while rejecting the custom trip request', 'Error');
            });
          }
        }
      }, {
        key: "cancelTripRequest",
        value: function cancelTripRequest() {
          var _this26 = this;

          if (confirm('Are you sure you want to cancel this custom trip request?')) {
            this.operatorApiService.CancelTripRequest(this.referenceId).subscribe(function (response) {
              if (response.Status) {
                _this26.toastr.success('Custom trip request cancelled successfully', 'Success');

                _this26.router.navigate(['/custom-tour-requests']);
              } else {
                _this26.toastr.error(response.Message || 'Failed to cancel custom trip request', 'Error');
              }
            }, function (error) {
              _this26.toastr.error('An error occurred while cancelling the custom trip request', 'Error');
            });
          }
        }
      }]);

      return CustomTourRequestDetailComponent;
    }();

    CustomTourRequestDetailComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _Services_Operator_operator_api_service__WEBPACK_IMPORTED_MODULE_3__["OperatorApiService"]
      }, {
        type: _Services_Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_5__["TriputilitesService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] // Inject ToastrService

      }];
    };

    CustomTourRequestDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-custom-tour-request-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./custom-tour-request-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/custom-tour-request-detail/custom-tour-request-detail.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./custom-tour-request-detail.component.css */
      "./src/app/custom-tour-request-detail/custom-tour-request-detail.component.css"))["default"]]
    })], CustomTourRequestDetailComponent);
    /***/
  },

  /***/
  "./src/app/custom-tour-requests/custom-tour-requests.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/custom-tour-requests/custom-tour-requests.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomTourRequestsCustomTourRequestsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./src/app/custom-tour-requests/custom-tour-requests.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/custom-tour-requests/custom-tour-requests.component.ts ***!
    \************************************************************************/

  /*! exports provided: CustomTourRequestsComponent */

  /***/
  function srcAppCustomTourRequestsCustomTourRequestsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomTourRequestsComponent", function () {
      return CustomTourRequestsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Services_Operator_operator_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Services/Operator/operator-api.service */
    "./src/app/Services/Operator/operator-api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _Services_Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Services/Utilities/triputilites.service */
    "./src/app/Services/Utilities/triputilites.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js"); // Import forkJoin


    var CustomTourRequestsComponent = /*#__PURE__*/function () {
      function CustomTourRequestsComponent(operatorApiService, router, utilities) {
        _classCallCheck(this, CustomTourRequestsComponent);

        this.operatorApiService = operatorApiService;
        this.router = router;
        this.utilities = utilities;
        this.customTourRequests = []; // This should be the main array

        this.countries = [];
        this.visitPlaces = []; // To store all visit places
      }

      _createClass(CustomTourRequestsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this27 = this;

          this.loadCountriesAndVisitPlaces().then(function () {
            _this27.loadRequests(); // Call the single loadRequests method

          });
        }
      }, {
        key: "loadCountriesAndVisitPlaces",
        value: function loadCountriesAndVisitPlaces() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this28 = this;

            var countryResponse, visitPlaceObservables, visitPlaceResponses;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.utilities.GetCountry().toPromise();

                  case 2:
                    countryResponse = _context2.sent;

                    if (!countryResponse.Status) {
                      _context2.next = 10;
                      break;
                    }

                    this.countries = countryResponse.Data;
                    visitPlaceObservables = this.countries.map(function (country) {
                      return _this28.utilities.GetVisitPlace(country.Id);
                    });
                    _context2.next = 8;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(visitPlaceObservables).toPromise();

                  case 8:
                    visitPlaceResponses = _context2.sent;
                    visitPlaceResponses.forEach(function (response) {
                      if (response.Status) {
                        var _this28$visitPlaces;

                        (_this28$visitPlaces = _this28.visitPlaces).push.apply(_this28$visitPlaces, _toConsumableArray(response.Data));
                      }
                    });

                  case 10:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "mapCountryAndPlaceNames",
        value: function mapCountryAndPlaceNames(requests) {
          var _this29 = this;

          return requests.map(function (request) {
            var fromCountry = _this29.countries.find(function (c) {
              return c.Id === request.FromCountry;
            });

            var toCountry = _this29.countries.find(function (c) {
              return c.Id === request.ToCountry;
            });

            var fromPlace = _this29.visitPlaces.find(function (vp) {
              return vp.Id === request.FromPlace;
            });

            var toPlace = _this29.visitPlaces.find(function (vp) {
              return vp.Id === request.ToPlace;
            });

            return Object.assign({}, request, {
              FromCountry: fromCountry ? fromCountry.Name : request.FromCountry,
              ToCountry: toCountry ? toCountry.Name : request.ToCountry,
              FromPlace: fromPlace ? fromPlace.PartialVisitPlace : request.FromPlace,
              ToPlace: toPlace ? toPlace.PartialVisitPlace : request.ToPlace
            });
          });
        }
      }, {
        key: "loadRequests",
        value: function loadRequests() {
          var _this30 = this;

          this.operatorApiService.GetNewCustomTripRequest().subscribe(function (data) {
            if (data.Status && Array.isArray(data.Data)) {
              _this30.customTourRequests = _this30.mapCountryAndPlaceNames(data.Data);
            } else {
              _this30.customTourRequests = [];
            }
          });
        }
      }, {
        key: "submitOffer",
        value: function submitOffer(requestId) {
          var navigationExtras = {
            queryParams: {
              referenceId: requestId
            }
          };
          this.router.navigate(['/offer-management'], navigationExtras);
        }
      }, {
        key: "createRevisedOffer",
        value: function createRevisedOffer(requestId) {
          var navigationExtras = {
            queryParams: {
              participentId: requestId,
              referenceId: requestId
            }
          };
          this.router.navigate(['/offer-management'], navigationExtras);
        }
      }]);

      return CustomTourRequestsComponent;
    }();

    CustomTourRequestsComponent.ctorParameters = function () {
      return [{
        type: _Services_Operator_operator_api_service__WEBPACK_IMPORTED_MODULE_2__["OperatorApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _Services_Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_4__["TriputilitesService"]
      }];
    };

    CustomTourRequestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-custom-tour-requests',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./custom-tour-requests.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/custom-tour-requests/custom-tour-requests.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./custom-tour-requests.component.css */
      "./src/app/custom-tour-requests/custom-tour-requests.component.css"))["default"]]
    })], CustomTourRequestsComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.css":
  /*!***************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".plus {\r\n    height: 70px;\r\n    width: 70px;\r\n    margin-left: 85%;\r\n}\r\n\r\n.progress {\r\n    width: 150px;\r\n    height: 150px;\r\n\r\n    background: none;\r\n\r\n    box-shadow: none;\r\n    position: relative;\r\n}\r\n\r\n.progress:after {\r\n    content: \"\";\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 50%;\r\n    border: 12px solid #fff;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.progress>span {\r\n    width: 50%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    top: 0;\r\n    z-index: 1;\r\n}\r\n\r\n.progress .progress-left {\r\n    left: 0;\r\n}\r\n\r\n.progress .progress-bar {\r\n    width: 100%;\r\n    height: 100%;\r\n    background: none;\r\n    border-width: 8px;\r\n    border-style: solid;\r\n    position: absolute;\r\n    top: 0;\r\n}\r\n\r\n.progress .progress-left .progress-bar {\r\n    left: 100%;\r\n    border-top-right-radius: 80px;\r\n    border-bottom-right-radius: 80px;\r\n    border-left: 0;\r\n    transform-origin: center left;\r\n}\r\n\r\n.progress .progress-right {\r\n    right: 0;\r\n}\r\n\r\n.progress .progress-right .progress-bar {\r\n    left: -100%;\r\n    border-top-left-radius: 80px;\r\n    border-bottom-left-radius: 80px;\r\n    border-right: 0;\r\n    transform-origin: center right;\r\n    -webkit-animation: loading-1 1.8s linear forwards;\r\n            animation: loading-1 1.8s linear forwards;\r\n}\r\n\r\n.progress .progress-value {\r\n    width: 90%;\r\n    height: 90%;\r\n    border-radius: 50%;\r\n    background: #44484b;\r\n    font-size: 18px;\r\n    color: #fff;\r\n    line-height: 135px;\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 5%;\r\n    left: 5%;\r\n}\r\n\r\n.progress.yellow .progress-bar {\r\n    border-color: #ffbc35;\r\n}\r\n\r\n.progress.yellow .progress-left .progress-bar {\r\n    -webkit-animation: loading-3 1s linear forwards 1.8s;\r\n            animation: loading-3 1s linear forwards 1.8s;\r\n}\r\n\r\n.chart {\r\n    height: 250px;\r\n}\r\n\r\n@-webkit-keyframes loading-1 {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        transform: rotate(180deg);\r\n    }\r\n}\r\n\r\n@keyframes loading-1 {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        transform: rotate(180deg);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes loading-2 {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        transform: rotate(144deg);\r\n    }\r\n}\r\n\r\n@keyframes loading-2 {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        transform: rotate(144deg);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes loading-3 {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        transform: rotate(90deg);\r\n    }\r\n}\r\n\r\n@keyframes loading-3 {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        transform: rotate(90deg);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes loading-4 {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        transform: rotate(36deg);\r\n    }\r\n}\r\n\r\n@keyframes loading-4 {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        transform: rotate(36deg);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes loading-5 {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        transform: rotate(126deg);\r\n    }\r\n}\r\n\r\n@keyframes loading-5 {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        transform: rotate(126deg);\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 990px) {\r\n    .progress {\r\n        margin-bottom: 20px;\r\n    }\r\n}\r\n\r\ncanvas {\r\n    position: relative;\r\n}\r\n\r\n/* Jero Table Styles for Recent Viewed Trips */\r\n\r\n.jero-table {\r\n    border-radius: 12px;\r\n    background: #fff;\r\n    margin: 0;\r\n}\r\n\r\n.jero-table thead tr {\r\n    background: #E6F6F3;\r\n    border-radius: 8px;\r\n}\r\n\r\n.jero-table th,\r\n.jero-table td {\r\n    border: none !important;\r\n    vertical-align: middle;\r\n    font-size: 16px;\r\n    padding: 14px 12px;\r\n}\r\n\r\n.jero-table th {\r\n    font-weight: 600;\r\n    color: #333;\r\n}\r\n\r\n.jero-table td {\r\n    color: #222;\r\n}\r\n\r\n.dot {\r\n    display: inline-block;\r\n    width: 18px;\r\n    height: 18px;\r\n    border-radius: 50%;\r\n    margin-right: 6px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.dot-red {\r\n    background: #E74C3C;\r\n}\r\n\r\n.dot-yellow {\r\n    background: #FFD600;\r\n}\r\n\r\n.dot-green {\r\n    background: #00C853;\r\n}\r\n\r\n.dot-orange {\r\n    background: #FF7043;\r\n}\r\n\r\n.dot-blue {\r\n    background: #2196F3;\r\n}\r\n\r\n.dot-gray {\r\n    background: #BDBDBD;\r\n}";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../classes/trip/TripModel */
    "./src/app/classes/trip/TripModel.ts");
    /* harmony import */


    var _Services_TripService_trip_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Services/TripService/trip.service */
    "./src/app/Services/TripService/trip.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _Services_Utilities_UtilitiesMethods_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../Services/Utilities/UtilitiesMethods.service */
    "./src/app/Services/Utilities/UtilitiesMethods.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js"); // import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
    // import { Color, BaseChartDirective, Label } from 'ng2-charts';
    // import * as pluginAnnotations from 'chartjs-plugin-annotation';
    // import { element } from 'protractor';


    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(datepipe, tripSerivce, router, utiltiesmethodsService) {
        _classCallCheck(this, DashboardComponent);

        this.datepipe = datepipe;
        this.tripSerivce = tripSerivce;
        this.router = router;
        this.utiltiesmethodsService = utiltiesmethodsService;
        this.labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']; // public lineChartData: ChartDataSets[] = [
        //   { data: [], label: 'Series A' },
        // ];

        this.chartData = [{
          label: 'Trip Posted',
          data: []
        }, {
          label: 'Trip Bookings',
          data: []
        }];
        this.chartOptions = {
          responsive: true
        }; // CHART COLOR.

        this.colors = [{
          backgroundColor: 'rgba(77,83,96,0.2)'
        }, {
          backgroundColor: 'rgba(30, 169, 224, 0.8)'
        }]; // public lineChartOptions: (ChartOptions & { annotation: any }) = {
        //   responsive: true,
        //   scales: {
        //     // We use this empty structure as a placeholder for dynamic theming.
        //     xAxes: [{}],
        //     yAxes: [
        //       {
        //         id: 'y-axis-0',
        //         position: 'left',
        //       },
        //       {
        //         id: 'y-axis-1',
        //         position: 'right',
        //         gridLines: {
        //           color: 'rgba(255,0,0,0.3)',
        //         },
        //         ticks: {
        //           fontColor: 'red',
        //         }
        //       }
        //     ]
        //   },
        //   annotation: {
        //     annotations: [
        //       {
        //         type: 'line',
        //         mode: 'vertical',
        //         scaleID: 'x-axis-0',
        //         value: 'March',
        //         borderColor: 'orange',
        //         borderWidth: 2,
        //         label: {
        //           enabled: true,
        //           fontColor: 'orange',
        //           content: 'LineAnno'
        //         }
        //       },
        //     ],
        //   },
        // };
        // public lineChartColors: Color[] = [
        //   { // grey
        //     backgroundColor: 'rgba(148,159,177,0.2)',
        //     borderColor: '#007bff',
        //     pointBorderColor: '#fff',
        //     pointHoverBackgroundColor: '#fff',
        //     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        //   },
        // ];
        // public lineChartLegend = true;
        // public lineChartType: ChartType = 'line';
        // public lineChartPlugins = [pluginAnnotations];
        // @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
        // Dashboard Card Charts
        // Sale Progress (Line Chart)

        this.saleProgressLabels = [];
        this.saleProgressData = [{
          data: [],
          label: 'Progress'
        }];
        this.saleProgressOptions = {
          responsive: true,
          maintainAspectRatio: false,
          elements: {
            line: {
              tension: 0.4
            }
          },
          scales: {
            yAxes: [{
              display: true,
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [{
              display: true,
              gridLines: {
                display: false
              }
            }]
          }
        };
        this.saleProgressColors = [{
          borderColor: '#007bff',
          backgroundColor: 'rgba(0,123,255,0.1)',
          pointBackgroundColor: '#007bff'
        }]; // Post a Trip (Bar Chart) - Two statistics

        this.postTripLabels = [];
        this.postTripData = [{
          data: [],
          label: 'Trip Posted'
        }, {
          data: [],
          label: 'Trip Bookings'
        } // Blue
        ];
        this.postTripOptions = {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              display: true,
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [{
              display: true,
              ticks: {
                autoSkip: false
              },
              gridLines: {
                display: false
              }
            }]
          }
        };
        this.postTripColors = [{
          backgroundColor: '#00C2B1'
        }, {
          backgroundColor: '#1769D2'
        } // Blue
        ]; // Booking Trips (Dual Line Chart)

        this.bookingTripsLabels = [];
        this.bookingTripsData = [{
          data: [],
          label: 'Trip Posted',
          borderColor: '#00A991',
          fill: false
        }, {
          data: [],
          label: 'Trip Bookings',
          borderColor: '#FFD600',
          fill: false
        }];
        this.bookingTripsOptions = {
          responsive: true,
          outerHeight: '1000px',
          maintainAspectRatio: false,
          elements: {
            line: {
              tension: 0.4
            }
          },
          scales: {
            yAxes: [{
              display: true,
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [{
              display: true,
              gridLines: {
                display: false
              }
            }]
          }
        };
        this.bookingTripsColors = [{
          borderColor: '#00A991',
          backgroundColor: 'rgba(0,169,145,0.1)',
          pointBackgroundColor: '#00A991'
        }, {
          borderColor: '#FFD600',
          backgroundColor: 'rgba(255,214,0,0.1)',
          pointBackgroundColor: '#FFD600'
        }];
        this.tripModalList = [];
        this.tripcount = new _classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__["TripCountModel"]();
        this.tripViews = [];
        this.graphData = [];
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadAllTrips();
          this.loadtripscounter();
          this.loadtripViews();
          this.loadchartData();
          this.loadnotification();
        }
      }, {
        key: "loadAllTrips",
        value: function loadAllTrips() {
          var _this31 = this;

          this.tripSerivce.GetScheduleTrips().subscribe(function (data) {
            if (data) {
              if (data.Status) {
                _this31.tripModalList = data.Data;
              }
            }
          });
        }
      }, {
        key: "loadtripViews",
        value: function loadtripViews() {
          var _this32 = this;

          this.tripSerivce.GetTripViews().subscribe(function (data) {
            if (data) {
              if (data.Status) {
                _this32.tripViews = data.Data;
              }
            }
          });
        }
      }, {
        key: "TripDetail",
        value: function TripDetail(id) {
          this.router.navigate(['/tripdetail', id]);
        }
      }, {
        key: "loadnotification",
        value: function loadnotification() {
          this.utiltiesmethodsService.setNoficationLoadEmitter = "loadnoti";
        }
      }, {
        key: "loadtripscounter",
        value: function loadtripscounter() {
          var _this33 = this;

          this.tripSerivce.GetTripCount().subscribe(function (data) {
            if (data) {
              if (data.Status) {
                _this33.tripcount = data.Data;
              }
            }
          });
        }
      }, {
        key: "loadchartData",
        value: function loadchartData() {
          var _this34 = this;

          this.tripSerivce.GetChartData().subscribe(function (data) {
            if (data) {
              if (data.Status) {
                var tempTripBookingdata = [];
                var tempTripPosteddata = [];
                _this34.graphData = data.Data;

                _this34.graphData.forEach(function (element) {
                  if (element.monthlyTripData) {
                    tempTripPosteddata.push(element.monthlyTripData.TotalTripPosted);
                    tempTripBookingdata.push(element.monthlyTripData.TotalBookings);
                  } else {
                    tempTripPosteddata.push(0);
                    tempTripBookingdata.push(0);
                  }
                });

                _this34.bookingTripsData = [{
                  data: tempTripPosteddata,
                  label: 'Trip Posted',
                  fill: false,
                  borderColor: ''
                }, {
                  data: tempTripBookingdata,
                  label: 'Trip Bookings',
                  fill: false,
                  borderColor: ''
                }];
                _this34.bookingTripsLabels = _this34.labels;
                _this34.saleProgressData = [{
                  data: tempTripBookingdata,
                  label: 'Progress'
                }];
                _this34.saleProgressLabels = _this34.labels;
                _this34.postTripData = [{
                  data: tempTripPosteddata,
                  label: 'Trip Posted'
                }, {
                  data: tempTripBookingdata,
                  label: 'Trip Bookings'
                }];
                _this34.postTripLabels = _this34.labels;
              }
            }
          });
        } // events

      }, {
        key: "chartClicked",
        value: function chartClicked(_ref) {
          var event = _ref.event,
              active = _ref.active;
          console.log(event, active);
        }
      }, {
        key: "chartHovered",
        value: function chartHovered(_ref2) {
          var event = _ref2.event,
              active = _ref2.active;
          console.log(event, active);
        } // public hideOne(): void {
        //   const isHidden = this.chart.isDatasetHidden(1);
        //   this.chart.hideDataset(1, !isHidden);
        // }
        // public changeColor(): void {
        //   this.lineChartColors[2].borderColor = 'green';
        //   this.lineChartColors[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;
        // }
        // public changeLabel(): void {
        //   this.lineChartLabels[2] = ['1st Line', '2nd Line'];
        // }
        // CHART CLICK EVENT.

      }, {
        key: "onChartClick",
        value: function onChartClick(event) {
          console.log(event);
        }
      }, {
        key: "getDotColor",
        value: function getDotColor(index) {
          var colors = ['dot-red', 'dot-yellow', 'dot-green', 'dot-orange', 'dot-blue', 'dot-gray'];
          return colors[index % colors.length];
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]
      }, {
        type: _Services_TripService_trip_service__WEBPACK_IMPORTED_MODULE_3__["TripService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _Services_Utilities_UtilitiesMethods_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesMethodsService"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/dashboard/dashboard.component.css"))["default"]]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/detail/detail.component.css":
  /*!*********************************************!*\
    !*** ./src/app/detail/detail.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDetailDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./src/app/detail/detail.component.ts":
  /*!********************************************!*\
    !*** ./src/app/detail/detail.component.ts ***!
    \********************************************/

  /*! exports provided: DetailComponent */

  /***/
  function srcAppDetailDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailComponent", function () {
      return DetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Services_TripService_trip_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Services/TripService/trip.service */
    "./src/app/Services/TripService/trip.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _Services_Utilities_UtilitiesMethods_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Services/Utilities/UtilitiesMethods.service */
    "./src/app/Services/Utilities/UtilitiesMethods.service.ts");
    /* harmony import */


    var _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../Services/Utilities/genaric.service */
    "./src/app/Services/Utilities/genaric.service.ts");

    var DetailComponent = /*#__PURE__*/function () {
      function DetailComponent(tripSerivce, genricUtlitis, settingUtitls) {
        _classCallCheck(this, DetailComponent);

        this.tripSerivce = tripSerivce;
        this.genricUtlitis = genricUtlitis;
        this.settingUtitls = settingUtitls;
        this.domainUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].domainToken;
        this.tripModalList = [];
      }

      _createClass(DetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadAllTrips();
        }
      }, {
        key: "loadAllTrips",
        value: function loadAllTrips() {
          var _this35 = this;

          this.tripSerivce.GetAllCompTripsByUsers().subscribe(function (data) {
            if (data) {
              if (data.Status) {
                _this35.tripModalList = data.Data;
              }
            }
          });
        }
      }, {
        key: "report",
        value: function report(id) {
          var _this36 = this;

          this.tripSerivce.GetTripReport(id).subscribe(function (data) {
            if (data) {
              if (data.Status) {
                _this36.genricUtlitis.showMessageToast(data.Message, true, "Success!"); //  console.log(data);

              } else {
                _this36.genricUtlitis.showMessageToast(data.Message, false, "Error!");
              }
            } else {
              _this36.genricUtlitis.showMessageToast("There was some error.", false, "Error!");
            }
          });
        }
      }]);

      return DetailComponent;
    }();

    DetailComponent.ctorParameters = function () {
      return [{
        type: _Services_TripService_trip_service__WEBPACK_IMPORTED_MODULE_2__["TripService"]
      }, {
        type: _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_5__["GenaricService"]
      }, {
        type: _Services_Utilities_UtilitiesMethods_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesMethodsService"]
      }];
    };

    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reports',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./detail.component.css */
      "./src/app/detail/detail.component.css"))["default"]]
    })], DetailComponent);
    /***/
  },

  /***/
  "./src/app/draft/draft.component.css":
  /*!*******************************************!*\
    !*** ./src/app/draft/draft.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppDraftDraftComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./src/app/draft/draft.component.ts":
  /*!******************************************!*\
    !*** ./src/app/draft/draft.component.ts ***!
    \******************************************/

  /*! exports provided: DraftComponent */

  /***/
  function srcAppDraftDraftComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DraftComponent", function () {
      return DraftComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Services_TripService_trip_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Services/TripService/trip.service */
    "./src/app/Services/TripService/trip.service.ts");
    /* harmony import */


    var src_app_classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/classes/trip/TripModel */
    "./src/app/classes/trip/TripModel.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var DraftComponent = /*#__PURE__*/function () {
      function DraftComponent(tripSerivce, router) {
        _classCallCheck(this, DraftComponent);

        this.tripSerivce = tripSerivce;
        this.router = router;
        this.noRecordFound = false;
        this.baseImgURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].domainToken;
        this.drafList = [];
        this.tripModalList = [];
        this.tripModal = new src_app_classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_3__["TripModel"]();
        this.drafTrip = new src_app_classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_3__["TripDefult"]();
      }

      _createClass(DraftComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadAllDraftTrips();
        }
      }, {
        key: "loadAllDraftTrips",
        value: function loadAllDraftTrips() {
          var _this37 = this;

          this.tripSerivce.GetDraftTrips().subscribe(function (data) {
            if (data) {
              if (data.Status) {
                _this37.drafList = data.Data;

                _this37.mapDraftrip(_this37.drafList);

                _this37.noRecordFound = false;
              } else {
                _this37.noRecordFound = true;
              }
            }
          });
        }
      }, {
        key: "mapDraftrip",
        value: function mapDraftrip(draft) {
          var _this38 = this;

          draft.forEach(function (x) {
            _this38.tripModal = JSON.parse(x.TripString);
            _this38.tripModal.DraftTripId = x.Id;

            _this38.tripModalList.push(_this38.tripModal);

            console.log(_this38.tripModal);
          });
        }
      }, {
        key: "EditDraftTrip",
        value: function EditDraftTrip(Id) {
          this.router.navigate(['/post/editdraft' + '/' + Id]);
        }
      }, {
        key: "DelDraft",
        value: function DelDraft(Id) {
          var _this39 = this;

          this.tripSerivce.DelDraftTripById(Id).subscribe(function (data) {
            if (data) {
              if (data.Status) {
                _this39.drafList = [];
                _this39.tripModalList = [];
                _this39.tripModal = new src_app_classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_3__["TripModel"]();
                _this39.drafTrip = new src_app_classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_3__["TripDefult"]();

                _this39.loadAllDraftTrips();
              } else {
                _this39.loadAllDraftTrips();
              }
            }
          });
        }
      }]);

      return DraftComponent;
    }();

    DraftComponent.ctorParameters = function () {
      return [{
        type: _Services_TripService_trip_service__WEBPACK_IMPORTED_MODULE_2__["TripService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    DraftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-draft',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./draft.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/draft/draft.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./draft.component.css */
      "./src/app/draft/draft.component.css"))["default"]]
    })], DraftComponent);
    /***/
  },

  /***/
  "./src/app/edit/edit.component.css":
  /*!*****************************************!*\
    !*** ./src/app/edit/edit.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditEditComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./src/app/edit/edit.component.ts":
  /*!****************************************!*\
    !*** ./src/app/edit/edit.component.ts ***!
    \****************************************/

  /*! exports provided: EditComponent */

  /***/
  function srcAppEditEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditComponent", function () {
      return EditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _Services_Users_UsersService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Services/Users/UsersService.service */
    "./src/app/Services/Users/UsersService.service.ts");
    /* harmony import */


    var _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Services/Utilities/genaric.service */
    "./src/app/Services/Utilities/genaric.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var EditComponent = /*#__PURE__*/function () {
      function EditComponent(router, formBuilder, userService, genricUtlitis) {
        _classCallCheck(this, EditComponent);

        this.router = router;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.genricUtlitis = genricUtlitis;
        this.submitted = false;
        this.imgSubmit = false;
      }

      _createClass(EditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (localStorage.getItem('UserProfile')) {
            this.user = JSON.parse(localStorage.getItem('UserProfile'));
            this.imgURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].domainToken + this.user.ProfileImage; // console.log(this.imgURL);
          }

          this.loadFormValidation();
        }
      }, {
        key: "loadFormValidation",
        value: function loadFormValidation() {
          this.postForm = this.formBuilder.group({
            Name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            BuisnessName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            FullAddress: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            PhoneNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            CountryName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            CityName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Gender: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.imgForm = this.formBuilder.group({
            image: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.postForm.controls;
        }
      }, {
        key: "i",
        get: function get() {
          return this.imgForm.controls;
        }
      }, {
        key: "updateImage",
        value: function updateImage() {
          var _this40 = this;

          this.imgSubmit = true;

          if (this.imgForm.invalid) {
            return;
          }

          if (this.imgURL && this.imgForm.valid) {
            this.user.ImageProfileString = this.imgURL.replace("data:image/jpeg;base64,", "");
            this.userService.updateimage(this.user).subscribe(function (data) {
              if (data.Status) {
                _this40.imgSubmit = false;

                _this40.genricUtlitis.showMessageToast('Image updated successfully!', true, _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_4__["PrintMedia"].Conformation);

                _this40.userService.GetUser().subscribe(function (data) {
                  if (data) {
                    localStorage.setItem('UserProfile', JSON.stringify(data.Data));
                  }

                  _this40.router.navigate(['/profile']); // window.location.href = '/profile';

                });
              } else {
                _this40.genricUtlitis.showMessageToast('Image could not be updated!', false, _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_4__["PrintMedia"].Conformation);
              }
            });
          }
        }
      }, {
        key: "updateProfile",
        value: function updateProfile() {
          var _this41 = this;

          // debugger;
          this.submitted = true; // stop here if form is invalid

          if (this.postForm.invalid) {
            return;
          }

          if (this.user && this.postForm.valid) {
            this.user.ImageProfileString = null;
            this.user.ProfileImage = null;
            this.user.Licence.LicenceImage = null;
            this.userService.updateuser(this.user).subscribe(function (data) {
              if (data.Status) {
                // debugger
                _this41.submitted = false;

                _this41.genricUtlitis.showMessageToast('Profile updated successfully', true, _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_4__["PrintMedia"].Conformation);

                _this41.userService.GetUser().subscribe(function (data) {
                  if (data) {
                    localStorage.setItem('UserProfile', JSON.stringify(data.Data));
                  }

                  _this41.router.navigate(['/profile']); // window.location.href = '/profile';

                }); // });

              } else {
                _this41.genricUtlitis.showMessageToast(data.Message, true, _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_4__["PrintMedia"].Conformation);
              }
            });
          }
        }
      }, {
        key: "preview",
        value: function preview(files) {
          var _this42 = this;

          if (files.length === 0) {
            return;
          }

          var mimeType = files[0].type;

          if (mimeType.match(/image\/*/) == null) {
            // this.message = 'Only images are supported.';
            return;
          }

          var reader = new FileReader(); // this.imagePath = files;

          reader.readAsDataURL(files[0]);

          reader.onload = function (_event) {
            _this42.imgURL = reader.result;
          };
        }
      }]);

      return EditComponent;
    }();

    EditComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _Services_Users_UsersService_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]
      }, {
        type: _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_4__["GenaricService"]
      }];
    };

    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit.component.css */
      "./src/app/edit/edit.component.css"))["default"]]
    })], EditComponent);
    /***/
  },

  /***/
  "./src/app/forgetpassword/forgetpassword.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/forgetpassword/forgetpassword.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppForgetpasswordForgetpasswordComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* .loginbg{\n  width: 100%;\n  height: 100%;\n position: absolute;\n background-color: #00CCF2;\n}\n\n#form_login {\n    left      : 50%;\n    top       : 50%;\n    position  : absolute;\n    transform : translate(-50%, -50%);\n    width: 380px;\n    height: 350px;\n\n}\n.page-bg{\n  background: linear-gradient(#ffffff 75%, #f2f547);\n\n    box-shadow: rgba(255, 255, 255, 0.25) 0px 50px 100px -20px, rgba(255, 255, 255, 0.3) 0px 30px 60px -30px, rgba(255, 255, 255, 0.35) 0px -2px 6px 0px inset;\n\n    border-radius: 5%;\n\n}\n.page-bg .froms {\n    padding: 75px 45px 15px 45px;\n}\n\n.froms .form-control{\n  border-color: #00CCF2 !important;\n}\n\n\n  .btn{\n      padding: .55rem 2rem !important;\n      font-size: 1rem !important;\n  }\n  .logo-login{\n      padding-top: 10px;\n      height: 30px;\n  }\n  .logo-login img{\n      width: 123px;\n      height: 99px;\n      margin-top: 20px;\n  }\n  .btn-primary{\n   background-color: rgb(0, 130, 127) !important;\n   border-color: rgb(0, 130, 127) !important;\n  }\n  .btnlogin  .button {\n    border-radius: 10px;\n    background-color: #00CCF2 !important;\n    border: none;\n    color: #FFFFFF !important;\n    text-align: center;\n    font-size: 17px;\n    padding: 10px;\n    width: 170px;\n    transition: all 0.5s;\n    cursor: pointer;\n    margin: 5px;\n    height: 45px;\n  }\n  .button span {\n    cursor: pointer;\n    display: inline-block;\n    position: relative;\n    transition: 0.5s;\n  }\n  .button span:after {\n    content: '\\00bb';\n    position: absolute;\n    opacity: 0;\n    top: 0;\n    right: -20px;\n    transition: 0.5s;\n  }\n\n  .button:hover span {\n    padding-right: 25px;\n  }\n\n  .button:hover span:after {\n    opacity: 1;\n    right: 0;\n  }\n  .logintext1{\n    margin-top: 50px;\n  }\n  .logintext1 input[type=email]{\n    height: 40px;\n    border-radius: 25px;\n  }\n\n  .logintext input[type=password]{\n    height: 40px;\n    border-radius: 25px;\n  }\n  .fa-user{\n    margin-top: -30px;\n    position: absolute;\n    margin-left: 10px;\n  }\n\n\n */\n";
    /***/
  },

  /***/
  "./src/app/forgetpassword/forgetpassword.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/forgetpassword/forgetpassword.component.ts ***!
    \************************************************************/

  /*! exports provided: ForgetpasswordComponent */

  /***/
  function srcAppForgetpasswordForgetpasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgetpasswordComponent", function () {
      return ForgetpasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Services/Utilities/AuthService.service */
    "./src/app/Services/Utilities/AuthService.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ForgetpasswordComponent = /*#__PURE__*/function () {
      function ForgetpasswordComponent(fb, _authservice, _toaster, router) {
        _classCallCheck(this, ForgetpasswordComponent);

        this.fb = fb;
        this._authservice = _authservice;
        this._toaster = _toaster;
        this.router = router;
        this.showLoginpageEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
      }

      _createClass(ForgetpasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createForm();
          this.loginForm = this.fb.group({}); // Placeholder to fix template error
        }
      }, {
        key: "showLoginScreen",
        value: function showLoginScreen() {
          this.showLoginpageEmitter.emit(true);
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.forgetPasswordFrom = this.fb.group({
            Email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$"), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
          });
        }
      }, {
        key: "sendResetLink",
        value: function sendResetLink() {
          var _this43 = this;

          if (!this.forgetPasswordFrom.invalid) {
            this._authservice.ForgetPassword(this.email).subscribe(function (data) {
              if (data.Status) {
                _this43._toaster.success(data.Message);

                _this43.showResetPassword = true;
              } else {
                _this43._toaster.error(data.Message);
              }
            });
          }
        }
      }, {
        key: "showResetPasswordPage",
        value: function showResetPasswordPage() {
          this.showResetPassword = !this.showResetPassword;
        }
      }, {
        key: "goToLogin",
        value: function goToLogin() {
          this.router.navigateByUrl('/login');
        }
      }]);

      return ForgetpasswordComponent;
    }();

    ForgetpasswordComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: src_app_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], ForgetpasswordComponent.prototype, "showLoginpageEmitter", void 0);
    ForgetpasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-forgetpassword',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forgetpassword.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/forgetpassword/forgetpassword.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forgetpassword.component.css */
      "./src/app/forgetpassword/forgetpassword.component.css"))["default"]]
    })], ForgetpasswordComponent);
    /***/
  },

  /***/
  "./src/app/invoice-details/invoice-details.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/invoice-details/invoice-details.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInvoiceDetailsInvoiceDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./src/app/invoice-details/invoice-details.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/invoice-details/invoice-details.component.ts ***!
    \**************************************************************/

  /*! exports provided: InvoiceDetailsComponent */

  /***/
  function srcAppInvoiceDetailsInvoiceDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InvoiceDetailsComponent", function () {
      return InvoiceDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _Services_Operator_operator_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Services/Operator/operator-api.service */
    "./src/app/Services/Operator/operator-api.service.ts");
    /* harmony import */


    var _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../Services/Utilities/genaric.service */
    "./src/app/Services/Utilities/genaric.service.ts");

    var InvoiceDetailsComponent = /*#__PURE__*/function () {
      function InvoiceDetailsComponent(route, router, operatorApiService, genaricService, formBuilder) {
        _classCallCheck(this, InvoiceDetailsComponent);

        this.route = route;
        this.router = router;
        this.operatorApiService = operatorApiService;
        this.genaricService = genaricService;
        this.formBuilder = formBuilder;
        this.invoiceData = null;
        this.loading = true;
        this.recalculating = false;
        this.creatingInvoice = false;
        this.selectedFile = null;
      }

      _createClass(InvoiceDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.invoiceId = +this.route.snapshot.params.id;
          this.loadInvoiceDetails();
          this.initializeForm();
        }
      }, {
        key: "initializeForm",
        value: function initializeForm() {
          this.invoiceForm = this.formBuilder.group({
            Comments: [''],
            Attachment: [null]
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.invoiceForm.controls;
        }
      }, {
        key: "onFileSelected",
        value: function onFileSelected(event) {
          if (event.target.files && event.target.files.length > 0) {
            this.selectedFile = event.target.files[0];
          } else {
            this.selectedFile = null;
          }
        }
      }, {
        key: "loadInvoiceDetails",
        value: function loadInvoiceDetails() {
          var _this44 = this;

          this.loading = true;
          this.operatorApiService.GetOperatorInvoiceDetails(this.invoiceId).subscribe(function (data) {
            if (data.Status) {
              _this44.invoiceData = data.Data;
            }

            _this44.loading = false;
          }, function (error) {
            console.error('Error loading invoice details:', error);
            _this44.loading = false;
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.router.navigate(['/invoices']);
        }
      }, {
        key: "getPaymentStatusClass",
        value: function getPaymentStatusClass(status) {
          if (status === 'Pending') {
            return 'badge badge-warning';
          } else if (status === 'Paid') {
            return 'badge badge-success';
          }

          return 'badge badge-secondary';
        }
      }, {
        key: "formatDate",
        value: function formatDate(dateString) {
          if (!dateString || dateString === '0001-01-01T00:00:00' || dateString === null) {
            return 'N/A';
          }

          var date = new Date(dateString);
          return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          });
        }
      }, {
        key: "recalculate",
        value: function recalculate() {
          var _this45 = this;

          if (!this.invoiceData || !this.invoiceData.TId) {
            this.genaricService.showMessageToast('Invalid invoice data', false, 'Error!');
            return;
          }

          this.recalculating = true;
          this.operatorApiService.CalculateTripCommision(this.invoiceData.TId).subscribe(function (data) {
            _this45.recalculating = false;

            if (data.Status) {
              // Reload invoice details after recalculation
              _this45.loadInvoiceDetails();

              _this45.genaricService.showMessageToast(data.Message || 'Commission recalculated successfully!', true, 'Success!');
            } else {
              _this45.genaricService.showMessageToast(data.Message || 'Failed to recalculate commission', false, 'Error!');
            }
          }, function (error) {
            _this45.recalculating = false;
            console.error('Error recalculating commission:', error);

            _this45.genaricService.showMessageToast('Error recalculating commission. Please try again.', false, 'Error!');
          });
        }
      }, {
        key: "openCreateInvoiceModal",
        value: function openCreateInvoiceModal() {
          $('#createInvoiceModal').modal('show');
        }
      }, {
        key: "createInvoice",
        value: function createInvoice() {
          var _this46 = this;

          if (!this.invoiceForm.valid) {
            this.invoiceForm.markAllAsTouched();
            return;
          }

          this.creatingInvoice = true;
          var formData = new FormData(); // Add invoice ID

          formData.append('Id', this.invoiceId.toString()); // Add comment if provided

          var commentControl = this.invoiceForm.get('Comments');
          var comment = commentControl ? commentControl.value : null;

          if (comment) {
            formData.append('Comments', comment);
          } // Add attachment if selected


          if (this.selectedFile) {
            formData.append('Attachment', this.selectedFile, this.selectedFile.name);
          }

          this.operatorApiService.CreateOperatorInvoice(formData).subscribe(function (data) {
            _this46.creatingInvoice = false;

            if (data.Status) {
              $('#createInvoiceModal').modal('hide');

              _this46.genaricService.showMessageToast(data.Message || 'Invoice created successfully!', true, 'Success!'); // Reload invoice details after successful creation


              _this46.loadInvoiceDetails(); // Reset form


              _this46.invoiceForm.reset();

              _this46.selectedFile = null;
            } else {
              _this46.genaricService.showMessageToast(data.Message || 'Failed to create invoice', false, 'Error!');
            }
          }, function (error) {
            _this46.creatingInvoice = false;
            console.error('Error creating invoice:', error);

            _this46.genaricService.showMessageToast('Error creating invoice. Please try again.', false, 'Error!');
          });
        }
      }, {
        key: "closeCreateInvoiceModal",
        value: function closeCreateInvoiceModal() {
          $('#createInvoiceModal').modal('hide');
          this.invoiceForm.reset();
          this.selectedFile = null;
        }
      }, {
        key: "shouldShowRecalculate",
        value: function shouldShowRecalculate() {
          if (!this.invoiceData) {
            return false;
          }

          var tripStatusId = this.invoiceData.Trip && this.invoiceData.Trip.TripBasicInfo ? this.invoiceData.Trip.TripBasicInfo.TripStatusId : null;
          var paymentStatus = this.invoiceData.Status; // Show if trip status is In Progress (2) or Complete (1) AND payment status is Pending

          return (tripStatusId === 1 || tripStatusId === 2) && paymentStatus === 'Pending';
        }
      }, {
        key: "shouldShowCreateInvoice",
        value: function shouldShowCreateInvoice() {
          if (!this.invoiceData) {
            return false;
          }

          var TripStatus = this.invoiceData.Trip && this.invoiceData.Trip.TripBasicInfo ? this.invoiceData.Trip.TripBasicInfo.TripStatus : null;
          var paymentStatus = this.invoiceData.Status; // Show if trip status is Complete (1) AND payment status is Pending

          return TripStatus === "Complete" && paymentStatus === 'Pending';
        }
      }]);

      return InvoiceDetailsComponent;
    }();

    InvoiceDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _Services_Operator_operator_api_service__WEBPACK_IMPORTED_MODULE_4__["OperatorApiService"]
      }, {
        type: _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_5__["GenaricService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    InvoiceDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-invoice-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./invoice-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/invoice-details/invoice-details.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./invoice-details.component.css */
      "./src/app/invoice-details/invoice-details.component.css"))["default"]]
    })], InvoiceDetailsComponent);
    /***/
  },

  /***/
  "./src/app/invoices/invoices.component.css":
  /*!*************************************************!*\
    !*** ./src/app/invoices/invoices.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInvoicesInvoicesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Commission Status Card */\n.commission-status-card {\n  background: #ffffff;\n  border-radius: 16px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.05);\n  padding: 20px;\n  height: 100%;\n}\n.commission-slab-card {\n  background: #ffffff;\n  border-radius: 16px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.05);\n  padding: 20px;\n  height: 100%;\n}\n.commission-note {\n  color: #333;\n  font-size: 13px;\n  line-height: 1.5;\n}\n.commission-note strong {\n  color: #00A991;\n}\n.commission-info-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 15px;\n  margin-bottom: 10px;\n  background: #d6f2e6;\n  border-radius: 8px;\n}\n.commission-label {\n  font-weight: 600;\n  color: #4b5d52;\n  font-size: 14px;\n}\n.commission-value {\n  font-weight: 700;\n  color: #00A991;\n  font-size: 16px;\n}\n/* Commission Slab Table */\n.commission-slab-table {\n  margin-top: 15px;\n}\n.commission-slab-table .table {\n  margin-bottom: 0;\n  border-collapse: separate;\n  border-spacing: 0;\n}\n.commission-slab-table .table th,\n.commission-slab-table .table td {\n  border: 1px solid #d6f2e6;\n  padding: 12px 8px;\n  text-align: left;\n  font-size: 13px;\n}\n.commission-table-header {\n  background: #d6f2e6 !important;\n  color: #4b5d52 !important;\n}\n.commission-table-header th {\n  font-weight: 600;\n  text-align: center;\n  background: #d6f2e6 !important;\n  color: #4b5d52 !important;\n  border: 1px solid #b8e0d0 !important;\n}\n.commission-table-row {\n  background: #ffffff;\n}\n.commission-table-row td {\n  background: #ffffff;\n  color: #333;\n}\n.commission-table-label {\n  background: #d6f2e6 !important;\n  color: #4b5d52 !important;\n  font-weight: 600;\n  border: 1px solid #b8e0d0 !important;\n}\n.commission-slab-table .table tbody tr td.text-center {\n  text-align: center;\n  font-weight: 500;\n  color: #333;\n}\n/* Responsive Design */\n@media (max-width: 768px) {\n  .commission-status-card,\n  .commission-slab-card {\n    margin-bottom: 20px;\n  }\n  \n  .commission-info-item {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 5px;\n  }\n  \n  .commission-slab-table {\n    overflow-x: auto;\n  }\n  \n  .commission-slab-table .table {\n    min-width: 600px;\n  }\n}\n\n";
    /***/
  },

  /***/
  "./src/app/invoices/invoices.component.ts":
  /*!************************************************!*\
    !*** ./src/app/invoices/invoices.component.ts ***!
    \************************************************/

  /*! exports provided: InvoicesComponent */

  /***/
  function srcAppInvoicesInvoicesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InvoicesComponent", function () {
      return InvoicesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Services_Operator_operator_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Services/Operator/operator-api.service */
    "./src/app/Services/Operator/operator-api.service.ts");

    var InvoicesComponent = /*#__PURE__*/function () {
      function InvoicesComponent(operatorApiService) {
        _classCallCheck(this, InvoicesComponent);

        this.operatorApiService = operatorApiService;
        this.invoices = [];
        this.p = 1;
        this.pageSize = 20;
        this.totalPages = 0; // Filter properties with default values

        this.selectedYear = '2025';
        this.selectedStatus = '1';
        this.selectedPaymentStatus = 'Paid';
        this.searchText = ''; // Status options

        this.statusOptions = [{
          value: '1',
          label: 'Complete'
        }, {
          value: '2',
          label: 'In Progress'
        }, {
          value: '3',
          label: 'Schedule'
        }, {
          value: '4',
          label: 'Hold'
        }, {
          value: '5',
          label: 'Cancel'
        }]; // Year options

        this.yearOptions = ['2025', '2026', '2028']; // Payment status options

        this.paymentStatusOptions = ['Paid', 'UnPaid']; // Commission slab properties

        this.totalBookings = 0;
        this.appliedSlab = null;
        this.allSlabs = [];
        this.loadingCommission = false;
      }

      _createClass(InvoicesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadCommissionData();
          this.loadInvoices();
        }
      }, {
        key: "loadCommissionData",
        value: function loadCommissionData() {
          var _this47 = this;

          this.loadingCommission = true;
          this.operatorApiService.GetOperatorOngoingSlabAndBookings().subscribe(function (data) {
            _this47.loadingCommission = false;

            if (data.Status && data.Data) {
              _this47.totalBookings = data.Data.TotalBookings || 0;
              _this47.appliedSlab = data.Data.AppliedSlab || null;
              _this47.allSlabs = data.Data.AllSlabs || []; // Sort slabs by MinBookings ascending (lowest first) to match table display

              _this47.allSlabs.sort(function (a, b) {
                return a.MinBookings - b.MinBookings;
              });
            }
          }, function (error) {
            _this47.loadingCommission = false;
            console.error('Error loading commission data:', error);
          });
        }
      }, {
        key: "getSlabRange",
        value: function getSlabRange(slab, index) {
          // Check if this is the last slab (highest range)
          var isLastSlab = index === this.allSlabs.length - 1;

          if (isLastSlab) {
            return "Above ".concat(slab.MinBookings);
          }

          if (slab.MaxBookings === null || slab.MaxBookings === undefined) {
            return "Above ".concat(slab.MinBookings);
          }

          if (slab.MinBookings === slab.MaxBookings) {
            return "".concat(slab.MinBookings);
          }

          return "".concat(slab.MinBookings, " To ").concat(slab.MaxBookings);
        }
      }, {
        key: "loadInvoices",
        value: function loadInvoices() {
          var _this48 = this;

          var filters = {
            PageNo: this.p,
            PageSize: this.pageSize
          };

          if (this.selectedYear) {
            filters.Year = this.selectedYear;
          }

          if (this.selectedStatus) {
            filters.Status = this.selectedStatus;
          }

          if (this.selectedPaymentStatus) {
            filters.PaymentStatus = this.selectedPaymentStatus;
          }

          if (this.searchText) {
            filters.Search = this.searchText;
          }

          this.operatorApiService.GetOperatorInvoices(filters).subscribe(function (data) {
            if (data.Status) {
              _this48.invoices = data.Data || [];
              _this48.totalPages = data.TotalPages || 0;
            }
          }, function (error) {
            console.error('Error loading invoices:', error);
          });
        }
      }, {
        key: "applyFilters",
        value: function applyFilters() {
          this.p = 1; // Reset to first page when filters change

          this.loadInvoices();
        }
      }, {
        key: "onPageChange",
        value: function onPageChange(page) {
          this.p = page;
          this.loadInvoices();
        }
      }, {
        key: "onSearchChange",
        value: function onSearchChange(event) {
          this.searchText = event.target.value; // Debounce: only search after user stops typing for a bit
          // For now, we'll search on Enter key or when field loses focus
        }
      }, {
        key: "onSearchKeyPress",
        value: function onSearchKeyPress(event) {
          if (event.key === 'Enter') {
            this.applyFilters();
          }
        }
      }, {
        key: "onYearChange",
        value: function onYearChange() {
          this.applyFilters();
        }
      }, {
        key: "onStatusChange",
        value: function onStatusChange() {
          this.applyFilters();
        }
      }, {
        key: "onPaymentStatusChange",
        value: function onPaymentStatusChange() {
          this.applyFilters();
        }
      }, {
        key: "clearFilters",
        value: function clearFilters() {
          this.selectedYear = '';
          this.selectedStatus = '';
          this.selectedPaymentStatus = '';
          this.searchText = '';
          this.p = 1;
          this.applyFilters();
        }
      }, {
        key: "getStatusLabel",
        value: function getStatusLabel(statusId) {
          var status = this.statusOptions.find(function (s) {
            return s.value === statusId.toString();
          });
          return status ? status.label : 'Unknown';
        }
      }, {
        key: "getPaymentStatusClass",
        value: function getPaymentStatusClass(paymentStatus) {
          if (paymentStatus === 'Paid') {
            return 'badge badge-success';
          } else if (paymentStatus === 'UnPaid') {
            return 'badge badge-warning';
          }

          return 'badge badge-secondary';
        }
      }]);

      return InvoicesComponent;
    }();

    InvoicesComponent.ctorParameters = function () {
      return [{
        type: _Services_Operator_operator_api_service__WEBPACK_IMPORTED_MODULE_2__["OperatorApiService"]
      }];
    };

    InvoicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-invoices',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./invoices.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/invoices/invoices.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./invoices.component.css */
      "./src/app/invoices/invoices.component.css"))["default"]]
    })], InvoicesComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* .loginbg{\n    width: 100%;\n    height: 100%;\n   position: absolute;\n   background-color: #00CCF2;\n  }\n\n  #form_login {\n      left      : 50%;\n      top       : 50%;\n      position  : absolute;\n      transform : translate(-50%, -50%);\n      width: 380px;\n      height: 500px;\n\n  }\n  .page-bg{\n    background: linear-gradient(#ffffff 75%, #f2f547);\n\n      box-shadow: rgba(255, 255, 255, 0.25) 0px 50px 100px -20px, rgba(255, 255, 255, 0.3) 0px 30px 60px -30px, rgba(255, 255, 255, 0.35) 0px -2px 6px 0px inset;\n\n      border-radius: 5%;\n\n  }\n  .page-bg .froms {\n      padding: 75px 45px 15px 45px;\n  }\n\n  .froms .form-control{\n    border-color: #00CCF2 !important;\n  }\n\n\n    .btn{\n        padding: .55rem 2rem !important;\n        font-size: 1rem !important;\n    }\n    .logo-login{\n        padding-top: 10px;\n        height: 30px;\n    }\n    .logo-login img{\n        width: 123px;\n        height: 99px;\n        margin-top: 20px;\n    }\n    .btn-primary{\n     background-color: rgb(0, 130, 127) !important;\n     border-color: rgb(0, 130, 127) !important;\n    }\n    .btnlogin  .button {\n      border-radius: 10px;\n      background-color: #00CCF2 !important;\n      border: none;\n      color: #FFFFFF !important;\n      text-align: center;\n      font-size: 17px;\n      padding: 10px;\n      width: 170px;\n      transition: all 0.5s;\n      cursor: pointer;\n      margin: 5px;\n      height: 45px;\n    }\n    .button span {\n      cursor: pointer;\n      display: inline-block;\n      position: relative;\n      transition: 0.5s;\n    }\n    .button span:after {\n      content: '\\00bb';\n      position: absolute;\n      opacity: 0;\n      top: 0;\n      right: -20px;\n      transition: 0.5s;\n    }\n\n    .button:hover span {\n      padding-right: 25px;\n    }\n\n    .button:hover span:after {\n      opacity: 1;\n      right: 0;\n    }\n    .logintext1{\n      margin-top: 60px;\n    }\n    .logintext1 input[type=email]{\n      height: 40px;\n      border-radius: 25px;\n    }\n\n    .logintext input[type=password]{\n      height: 40px;\n      border-radius: 25px;\n    }\n    .fa-user{\n      margin-top: -30px;\n      position: absolute;\n      margin-left: 10px;\n    }\n\n\n */\n";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _classes_User_UsersModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../classes/User/UsersModal */
    "./src/app/classes/User/UsersModal.ts");
    /* harmony import */


    var _Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../Services/Utilities/AuthService.service */
    "./src/app/Services/Utilities/AuthService.service.ts");
    /* harmony import */


    var _Services_Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../Services/Utilities/triputilites.service */
    "./src/app/Services/Utilities/triputilites.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(platform, routers, autth, utlities, fb) {
        _classCallCheck(this, LoginComponent);

        this.platform = platform;
        this.routers = routers;
        this.autth = autth;
        this.utlities = utlities;
        this.fb = fb;
        this.isHidden = true;
        this.userModel = new _classes_User_UsersModal__WEBPACK_IMPORTED_MODULE_4__["UserModel"]();
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.innerWidth = window.innerWidth;
          console.log(innerWidth);
          if (this.innerWidth < 1200) // {
            //   if (this.platform.IOS) {
            //     console.log('this is IOS device!');
            //     window.location.replace("https://apps.apple.com/us/app/super-stamp/id1545819071");
            //   }
            //   else if (this.platform.ANDROID)
            //   {
            //     console.log('this is Android device!');
            //     window.location.replace("https://play.google.com/store/apps");
            //   } 
            // }
            this.utlities.set_isLogin = true;
          this.createForm();
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.loginForm = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].email]],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]]
          });
        }
      }, {
        key: "SingIn",
        value: function SingIn() {
          if (this.loginForm.invalid) {
            this.loginForm.markAllAsTouched();
            return;
          }

          var _this$loginForm$value = this.loginForm.value,
              username = _this$loginForm$value.username,
              Password = _this$loginForm$value.Password;
          this.autth.SingIn(username, Password);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.utlities.set_isLogin = false;
        }
      }, {
        key: "navigateTo",
        value: function navigateTo() {
          this.utlities.set_isLogin = false;
          this.utlities.set_isSingupPage = true;
          this.routers.navigateByUrl("/signup");
        }
      }, {
        key: "showHidePassword",
        value: function showHidePassword() {
          this.isHidden = !this.isHidden;
        }
      }, {
        key: "goToForgotPassword",
        value: function goToForgotPassword() {
          this.utlities.set_isLogin = false;
          this.utlities.set_isSingupPage = false;
          this.utlities.set_isForgotPasswordPage = true;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _Services_Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_6__["TriputilitesService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/mytrips/mytrips.component.css":
  /*!***********************************************!*\
    !*** ./src/app/mytrips/mytrips.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppMytripsMytripsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".menu-title{\n    margin-left: 4px;\n}\n.custom-input .nav{\n    flex-wrap: unset;\n}\n.nav-pills .nav-link {\n    border-radius: 2rem !important;\n    \n    box-shadow: 2px 7px 12px #d4d4d3;\n    font-size: 0.8vw;\n    font-family: 'Montserrat-Medium';\n    \n}\n.sub-menu img {\n    width: 10px;\n}\n.media-object-image {\n    height: 205px;\n    width: 225px;\n}";
    /***/
  },

  /***/
  "./src/app/mytrips/mytrips.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/mytrips/mytrips.component.ts ***!
    \**********************************************/

  /*! exports provided: MytripsComponent */

  /***/
  function srcAppMytripsMytripsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MytripsComponent", function () {
      return MytripsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../classes/trip/TripModel */
    "./src/app/classes/trip/TripModel.ts");
    /* harmony import */


    var _Services_TripService_trip_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Services/TripService/trip.service */
    "./src/app/Services/TripService/trip.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");

    var MytripsComponent = /*#__PURE__*/function () {
      function MytripsComponent(tripSerivce) {
        _classCallCheck(this, MytripsComponent);

        this.tripSerivce = tripSerivce;
        this.domainUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].domainToken;
        this.currentTab = 'comp';
        this.tripModalList = [];
        this.displayingtrips = [];
        this.totalTripsModal = new _classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__["TotalTripsModal"]();
      }

      _createClass(MytripsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadAllTrips();
        }
      }, {
        key: "loadAllTrips",
        value: function loadAllTrips() {
          var _this49 = this;

          this.tripSerivce.GetAllTripsByUsers().subscribe(function (data) {
            if (data) {
              if (data.Status) {
                _this49.totalTripsModal = data.Data; // console.log(this.totalTripsModal);

                _this49.getData('comp');
              }
            }
          });
        }
      }, {
        key: "searchTrips",
        value: function searchTrips(event) {
          switch (this.currentTab) {
            case 'comp':
              this.displayingtrips = this.totalTripsModal.CompleteTrips.slice().reverse();
              break;

            case 'sch':
              this.displayingtrips = this.totalTripsModal.Schedule;
              break;

            case 'in':
              this.displayingtrips = this.totalTripsModal.InProgressTrips;

            case 'hold':
              this.displayingtrips = this.totalTripsModal.Hold;
              break;

            default:
              this.displayingtrips = this.totalTripsModal.Cancel;
              break;
          }

          this.displayingtrips = this.displayingtrips.filter(function (trip) {
            if (trip.TripBasicInfo.Title.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())) {
              return true;
            }
          });
        }
      }, {
        key: "getData",
        value: function getData(str) {
          debugger;
          this.currentTab = str;

          if (str == 'comp') {
            if (this.totalTripsModal.CompleteTrips) {
              this.displayingtrips = this.totalTripsModal.CompleteTrips;
            } else {
              this.displayingtrips = [];
            }
          } else if (str == 'sch') {
            this.displayingtrips = this.totalTripsModal.Schedule == null ? [] : this.totalTripsModal.Schedule;
          } else if (str == 'in') {
            this.displayingtrips = this.totalTripsModal.InProgressTrips == null ? [] : this.totalTripsModal.InProgressTrips;
          } else if (str == 'hold') {
            this.displayingtrips = this.totalTripsModal.Hold == null ? [] : this.totalTripsModal.Hold;
          } else {
            this.displayingtrips = this.totalTripsModal.Cancel == null ? [] : this.totalTripsModal.Cancel;
          }

          console.log(this.displayingtrips);
        }
      }]);

      return MytripsComponent;
    }();

    MytripsComponent.ctorParameters = function () {
      return [{
        type: _Services_TripService_trip_service__WEBPACK_IMPORTED_MODULE_3__["TripService"]
      }];
    };

    MytripsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mytrips',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mytrips.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/mytrips/mytrips.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mytrips.component.css */
      "./src/app/mytrips/mytrips.component.css"))["default"]]
    })], MytripsComponent);
    /***/
  },

  /***/
  "./src/app/offer-management/ItineraryPlane/ItineraryPlane.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/offer-management/ItineraryPlane/ItineraryPlane.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOfferManagementItineraryPlaneItineraryPlaneComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".remove-icon{\n    margin-top: -25px;\n    position: absolute;\n}\n.intititle{\n    margin-left: 20px;\n}\n.input-group-append {\n  \n    position: absolute;\n    margin-top: 25px;\n}\n.pen-input {\n    \n    margin-left: 20px;\n}\n.form-group {\n    margin-bottom: 20px;\n}";
    /***/
  },

  /***/
  "./src/app/offer-management/ItineraryPlane/ItineraryPlane.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/offer-management/ItineraryPlane/ItineraryPlane.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: OfferManagementItineraryPlaneComponent */

  /***/
  function srcAppOfferManagementItineraryPlaneItineraryPlaneComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OfferManagementItineraryPlaneComponent", function () {
      return OfferManagementItineraryPlaneComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../classes/trip/TripModel */
    "./src/app/classes/trip/TripModel.ts");
    /* harmony import */


    var _Services_TripService_trip_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../Services/TripService/trip.service */
    "./src/app/Services/TripService/trip.service.ts");
    /* harmony import */


    var _Services_Utilities_UtilitiesMethods_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../Services/Utilities/UtilitiesMethods.service */
    "./src/app/Services/Utilities/UtilitiesMethods.service.ts");
    /* harmony import */


    var _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../Services/Utilities/genaric.service */
    "./src/app/Services/Utilities/genaric.service.ts");

    var OfferManagementItineraryPlaneComponent = /*#__PURE__*/function () {
      function OfferManagementItineraryPlaneComponent(tripSerivce, settingUtitls, genricUtlitis) {
        _classCallCheck(this, OfferManagementItineraryPlaneComponent);

        this.tripSerivce = tripSerivce;
        this.settingUtitls = settingUtitls;
        this.genricUtlitis = genricUtlitis;
        this.isError = false;
        this.isLengthy = false;
        this.dayDetail = '';
        this.editorConfig = {
          editable: true,
          spellcheck: true,
          height: 'auto',
          minHeight: '150px',
          maxHeight: 'auto',
          width: 'auto',
          minWidth: '0',
          translate: 'yes',
          enableToolbar: true,
          showToolbar: true,
          placeholder: 'Enter text here...',
          defaultParagraphSeparator: '',
          defaultFontName: '',
          defaultFontSize: '',
          fonts: [{
            "class": 'arial',
            name: 'Arial'
          }, {
            "class": 'times-new-roman',
            name: 'Times New Roman'
          }, {
            "class": 'calibri',
            name: 'Calibri'
          }, {
            "class": 'comic-sans-ms',
            name: 'Comic Sans MS'
          }],
          customClasses: [{
            name: 'quote',
            "class": 'quote'
          }, {
            name: 'redText',
            "class": 'redText'
          }, {
            name: 'titleText',
            "class": 'titleText',
            tag: 'h1'
          }],
          uploadUrl: 'v1/image',
          uploadWithCredentials: false,
          sanitize: true,
          toolbarPosition: 'top',
          toolbarHiddenButtons: [['bold', 'italic'], ['fontSize']]
        };
        this.childEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.charLength = 0;
        this.IternaryPlan = new _classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__["IternaryPlan"]();
        this.tripModel = new _classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__["TripModel"]();
        this.DefultTrip = new _classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__["TripDefult"]();
      }

      _createClass(OfferManagementItineraryPlaneComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadDayTrips(); // console.log(this.totalNumberofDays);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.DefultTrip = this.settingUtitls.getDraftTrip;
          this.tripModel = JSON.parse(this.DefultTrip.TripString);
          this.loaddraftItinrayplane();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "loadPopup",
        value: function loadPopup() {}
      }, {
        key: "loadDayTrips",
        value: function loadDayTrips() {
          this.IternaryPlanList = [];

          for (var i = 0; i < this.totalNumberofDays; i++) {
            this.IternaryPlan = new _classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__["IternaryPlan"]();
            this.IternaryPlan.DayName = 'Day ' + (i + 1);
            this.IternaryPlan.Id = i + 1;
            this.IternaryPlanList.push(this.IternaryPlan);
          }
        }
      }, {
        key: "checkCharacterLength",
        value: function checkCharacterLength(event) {
          console.log(event.target.value.length);
          this.isLengthy = false;
          this.charLength = event.target.value.length;
          if (this.charLength > 1000) this.isLengthy = true;
        }
      }, {
        key: "addDayItems",
        value: function addDayItems(i, event) {
          // console.log(this.dayDetail);
          this.isError = false;
          this.isLengthy = false;

          if (this.dayDetail.trim() && this.IternaryPlanList && this.IternaryPlanList.length > 0 && this.dayDetail.length <= 2000) {
            var dayPlaneSingleIteam = new _classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__["DayPlan"]();
            dayPlaneSingleIteam.TaskDetaisl = this.dayDetail;
            this.IternaryPlanList[i].DayPlan.push(dayPlaneSingleIteam);
            this.dayDetail = '';
            this.hideModel(i);
          } else if (this.dayDetail.length > 2000) {
            this.isLengthy = true;
          } else {
            this.isError = true;
          }
        }
      }, {
        key: "remoDayItems",
        value: function remoDayItems(i, j) {
          this.IternaryPlanList[i].DayPlan.splice(j, 1);
        }
      }, {
        key: "shoEditDayTitle",
        value: function shoEditDayTitle(i) {
          var callFrom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          callFrom === 'hide' ? $('#editDayTitle_' + i).hide() : $('#editDayTitle_' + i).show();
        }
      }, {
        key: "hideModel",
        value: function hideModel(i) {
          $('#dayItems' + i).modal('toggle'); // $('#dayItems' + i).removeClass('in');
          // $('#dayItems' + i).css('display', 'none');
        }
      }, {
        key: "submistAsDraft",
        value: function submistAsDraft() {
          var _this50 = this;

          if (this.tripModel && this.IternaryPlanList && this.IternaryPlanList.length > 0) {
            this.tripModel.IternaryPlan = this.IternaryPlanList;
            this.DefultTrip.TripString = JSON.stringify(this.tripModel);
            this.DefultTrip.IS_ItnaryPlaneDone = true;
            this.settingUtitls.setDraftTrip = this.DefultTrip;
            this.tripSerivce.AddTripdefult(this.DefultTrip).subscribe(function (data) {
              if (data.Status) {
                _this50.genricUtlitis.showMessageToast('Trip Basic Info saved as draft', true, _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_5__["PrintMedia"].Conformation);

                _this50.childEmitter.emit('Itr');
              }
            });
          }
        }
      }, {
        key: "loaddraftItinrayplane",
        value: function loaddraftItinrayplane() {
          if (this.tripModel && this.tripModel.IternaryPlan.length > 0) {
            this.IternaryPlanList = [];
            this.IternaryPlanList = this.tripModel.IternaryPlan;
          }
        }
      }]);

      return OfferManagementItineraryPlaneComponent;
    }();

    OfferManagementItineraryPlaneComponent.ctorParameters = function () {
      return [{
        type: _Services_TripService_trip_service__WEBPACK_IMPORTED_MODULE_3__["TripService"]
      }, {
        type: _Services_Utilities_UtilitiesMethods_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesMethodsService"]
      }, {
        type: _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_5__["GenaricService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], OfferManagementItineraryPlaneComponent.prototype, "childEmitter", void 0);
    OfferManagementItineraryPlaneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-offer-management-itinerary-plane',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ItineraryPlane.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/offer-management/ItineraryPlane/ItineraryPlane.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ItineraryPlane.component.css */
      "./src/app/offer-management/ItineraryPlane/ItineraryPlane.component.css"))["default"]]
    })], OfferManagementItineraryPlaneComponent);
    /***/
  },

  /***/
  "./src/app/offer-management/offer-management.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/offer-management/offer-management.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOfferManagementOfferManagementComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* General styles */\n:host {\n  display: block;\n  background-color: #F3F5EA;\n  padding: 30px;\n  font-family: 'Roboto', sans-serif;\n}\n/* Tab styling */\n.tab-header {\n  background-color: #fff;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n  padding: 10px;\n  margin-bottom: 20px;\n}\n.tab-buttons {\n  display: flex;\n  justify-content: center;\n}\n.tab-button {\n  background-color: transparent;\n  border: none;\n  padding: 10px 60px;\n  font-size: 16px;\n  font-weight: 500;\n  color: #555;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border-radius: 8px;\n  margin: 0 5px;\n}\n.tab-button.active {\n  background-color: #00A991;\n  color: #fff;\n  box-shadow: 0 2px 8px rgba(0, 169, 145, 0.4);\n}\n.tab-button:hover:not(.active) {\n  background-color: #f0f0f0;\n}\n.tab-content {\n  background-color: #fff;\n  padding: 20px;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0,0,0,0.08);\n}\n.form-control-box {\n    background-color: #fff;\n    border: 1px solid #d4e9e6;\n    border-radius: 12px;\n    padding: 25px;\n    margin-bottom: 40px;\n    box-shadow: 0 4px 12px rgba(0,0,0,0.08);\n    transition: all 0.3s ease;\n    height: 100%;\n}\n.form-control-box:hover {\n    transform: translateY(-5px);\n    box-shadow: 0 8px 20px rgba(0,0,0,0.12);\n}\n.custom-input-border {\n    padding-bottom: 15px;\n    margin-bottom: 15px;\n    border-bottom: 1px solid #d4e9e6;\n}\n.day-title {\n  color: #333;\n  font-weight: 600;\n  margin: 0;\n}\n.custom-input-border .jero-btn {\n    flex-shrink: 0;\n}\n/* Floating label refinement */\n.tripjero-floating {\n    position: relative;\n    margin-bottom: 1.5rem;\n}\n.tripjero-floating .form-control {\n    border-radius: 8px;\n    border: 1px solid #ced4da;\n    transition: border-color 0.3s ease;\n}\n.tripjero-floating .form-control:focus {\n    border-color: #00A991;\n}\n.tripjero-floating label {\n    position: absolute;\n    top: 1rem;\n    left: 1.5rem;\n    pointer-events: none;\n    transition: all 0.2s ease-in-out;\n    color: #999;\n    padding: 0 5px;\n}\n.tripjero-floating .form-control:focus + label,\n.tripjero-floating .form-control:not(:placeholder-shown) + label {\n    top: -0.7rem;\n    left: 1rem;\n    font-size: 0.75rem;\n    color: #00A991;\n    background: #fff;\n    z-index: 1;\n}\n/* Hide placeholder by default, show on focus */\n.tripjero-floating .form-control::-webkit-input-placeholder {\n  color: #999;\n}\n.tripjero-floating .form-control::-moz-placeholder {\n  color: #999;\n}\n.tripjero-floating .form-control::-ms-input-placeholder {\n  color: #999;\n}\n.tripjero-floating .form-control::placeholder {\n  color: #999;\n}\n.tripjero-floating .form-control:focus::-webkit-input-placeholder {\n  color: #999;\n}\n.tripjero-floating .form-control:focus::-moz-placeholder {\n  color: #999;\n}\n.tripjero-floating .form-control:focus::-ms-input-placeholder {\n  color: #999;\n}\n.tripjero-floating .form-control:focus::placeholder {\n  color: #999;\n}\n.day-plan-container {\n  margin-top: 15px;\n}\n/* Task items */\n.task-item {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 12px 5px;\n    border-bottom: 1px solid #f5f5f5;\n    transition: background-color 0.2s ease;\n}\n.task-item:last-child {\n    border-bottom: none;\n}\n.task-item:hover {\n    background-color: #fafafa;\n}\n.intititle {\n    margin: 0;\n    color: #555;\n    font-weight: 500;\n}\n.remove-icon i {\n    color: #e57373;\n    transition: color 0.2s ease;\n}\n.remove-icon:hover i {\n    color: #ef5350;\n}\n.no-tasks-message {\n  text-align: center;\n  padding: 20px;\n  color: #999;\n  font-style: italic;\n  background-color: #fafafa;\n  border-radius: 8px;\n  margin-top: 15px;\n}\n/* Modal styling */\n.modal-content {\n    border-radius: 12px;\n    border: none;\n}\n.modal-header {\n    background-color: #00A991;\n    color: #fff;\n    border-top-left-radius: 12px;\n    border-top-right-radius: 12px;\n}\n.modal-header .close {\n    color: #fff;\n    opacity: 0.8;\n}\n/* Facilities styles */\n.custom-row-box {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 10px;\n    border: 1px solid #d4e9e6;\n    border-radius: 8px;\n    background-color: #fff;\n}\n.label-icon {\n    display: flex;\n    align-items: center;\n    font-weight: 500;\n    margin: 0;\n}\n.label-icon img {\n    margin-right: 10px;\n}\n.form-service-box {\n    padding-left: 30px;\n    margin-top: 10px;\n    border-left: 2px solid #00A991;\n}\n.add-facility-container {\n    display: flex;\n    align-items: baseline;\n    gap: 15px;\n    margin-top: 20px;\n}\n.add-facility-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  white-space: nowrap;\n}\n.toggle-button-third .button-cover {\n  position: relative;\n  width: 70px;\n  height: 35px;\n  border-radius: 20px;\n}\n.toggle-button-third .button-cover .button {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 60px;\n  height: 30px;\n}\n.toggle-button-third .button.r, .toggle-button-third .button.r .layer {\n  border-radius: 15px;\n}\n.toggle-button-third .checkbox {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  opacity: 0;\n  cursor: pointer;\n  z-index: 3;\n}\n.toggle-button-third .knobs {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n}\n.toggle-button-third .layer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #f0f0f0;\n  transition: 0.3s ease all;\n  z-index: 1;\n}\n.toggle-button-third #button-1 .knobs:before {\n  content: '';\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 26px;\n  height: 26px;\n  color: #fff;\n  font-size: 10px;\n  font-weight: bold;\n  text-align: center;\n  line-height: 1;\n  background-color: #a9a9a9;\n  border-radius: 50%;\n  transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;\n}\n.toggle-button-third #button-1 .checkbox:checked + .knobs:before {\n  content: '';\n  left: 32px;\n  background-color: #00A991;\n}\n.toggle-button-third #button-1 .checkbox:checked ~ .layer {\n  background-color: #d4e9e6;\n}\n/* Offer Form Styles */\n.offer-form-container {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.offer-form-card {\n  background-color: #fff;\n  padding: 30px;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0,0,0,0.08);\n}\n.form-title {\n  color: #333;\n  font-weight: 600;\n  margin-bottom: 25px;\n  text-align: center;\n}\n.form-control.is-invalid {\n  border-color: #dc3545;\n}\n.form-control.is-invalid:focus {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.invalid-feedback {\n  display: block;\n  width: 100%;\n  margin-top: .25rem;\n  font-size: 80%;\n  color: #dc3545;\n}\n.file-input-hidden {\n  display: none;\n}\n.file-input-label {\n  display: inline-block;\n  padding: 12px 20px;\n  border: 1px dashed #ced4da;\n  border-radius: 8px;\n  background-color: #f8f9fa;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  width: 100%;\n  text-align: center;\n  color: #555;\n}\n.file-input-label:hover {\n  background-color: #f1f3f5;\n  border-color: #00A991;\n}\n.file-input-label .fa {\n  margin-right: 8px;\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 30px;\n}\n/* Tab error icon styles */\n.tab-error-icon {\n  margin-left: 0.5rem;\n  color: #dc3545; /* Bootstrap's danger color */\n}\n.tab-button.active .tab-error-icon {\n  color: white;\n}\n";
    /***/
  },

  /***/
  "./src/app/offer-management/offer-management.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/offer-management/offer-management.component.ts ***!
    \****************************************************************/

  /*! exports provided: OfferManagementComponent */

  /***/
  function srcAppOfferManagementOfferManagementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OfferManagementComponent", function () {
      return OfferManagementComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _Services_Operator_operator_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Services/Operator/operator-api.service */
    "./src/app/Services/Operator/operator-api.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var OfferManagementComponent = /*#__PURE__*/function () {
      function OfferManagementComponent(fb, route, router, operatorApiService, toastr) {
        _classCallCheck(this, OfferManagementComponent);

        this.fb = fb;
        this.route = route;
        this.router = router;
        this.operatorApiService = operatorApiService;
        this.toastr = toastr;
        this.numberOfDays = 0;
        this.selectedFile = null;
        this.referenceId = null;
        this.participentId = null;
        this.isRevisedOffer = false;
        this.activeTab = 'itineraries'; // Default active tab

        this.itineraryError = false;
        this.facilitiesError = false;
        this.offerError = false;
        this.currentDayIndex = null; // To store the day index for the modal

        this.taskModalError = false; // Properties for Facilities tab

        this.facilities = [];
        this.isError = false; // tslint:disable-next-line: max-line-length

        this.facilitiesJsonstring = '[' + '{' + '"child": [' + '{' + '"child": [' + '{' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "5"' + '},' + '{' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "4"' + '},' + '{' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "3"' + '},' + '{' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "2"' + '},' + '{' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "1"' + '}' + '],' + '"flag": false,' + '"havesub": true,' + '"id": 0,' + '"title": "Hotel",' + '"icon_string": "fac_hotel",' + '"font_awesome": "fas fa-hotel"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Guest House",' + '"icon_string": "fac_guest_house",' + '"font_awesome": "fas fa-house-user"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Camp",' + '"icon_string": "fac_camp",' + '"font_awesome": "fas fa-campground"' + '}' + '],' + '"flag": false,' + '"havesub": true,' + '"id": 0,' + '"title": "Accommodation",' + '"icon_string": "fac_accomodation",' + '"font_awesome": "far fa-building"' + '},' + '{' + '"child": [' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Bus",' + '"icon_string": "fac_bus",' + '"font_awesome": "far fa-car-bus"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Van",' + '"icon_string": "fac_van",' + '"font_awesome": "fas fa-shuttle-van"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Car",' + '"icon_string": "fac_car",' + '"font_awesome": "far fa-car-bus"' + '}' + '],' + '"flag": false,' + '"havesub": true,' + '"id": 0,' + '"title": "Transportation",' + '"icon_string": "fac_transport",' + '"font_awesome": "far fa-car-bus"' + '},' + '{' + '"child": [' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Breakfast",' + '"icon_string": "fac_breakfast",' + '"font_awesome": "fas fa-coffee"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Lunch",' + '"icon_string": "fac_lunch",' + '"font_awesome": "far fa-utensils-alt"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Dinner",' + '"icon_string": "fac_dinner",' + '"font_awesome": "fas fa-utensils-alt"' + '}' + '],' + '"flag": false,' + '"havesub": true,' + '"id": 0,' + '"title": "Meal",' + '"icon_string": "fac_meals",' + '"font_awesome": "fas fa-utensils"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Transportation Fuel",' + '"icon_string": "fac_transportation_fuel",' + '"font_awesome": "fas fa-gas-pump"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Toll Taxes",' + '"icon_string": "fac_tool_tax",' + '"font_awesome": "fas fa-tram"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Parking Fees",' + '"icon_string": "fac_parking_fee",' + '"font_awesome": "fas fa-parking"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Drivers Food & Accommodation",' + '"icon_string": "fac_driver_food",' + '"font_awesome": "fab fa-accessible-icon"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Basic First Aid",' + '"icon_string": "fac_basic_first_add",' + '"font_awesome": "fas fa-medkit"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Tour Guide or Expedited Driver",' + '"icon_string": "fac_tour_guide",' + '"font_awesome": "fab fa-guilded"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Any Airfare",' + '"icon_string": "fac_air_fare",' + '"font_awesome": "fas fa-plane-departure"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Train Fare",' + '"icon_string": "fac_train_fair",' + '"font_awesome": "fas fa-subway"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Overland Journey Not mentioned in Itinerary",' + '"icon_string": "fac_not_mention",' + '"font_awesome": "fas fa-not-equal"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Any Medical/rescue evacuation due to mishaps",' + '"icon_string": "fac_any_medical",' + '"font_awesome": "fas fa-star-and-crescent"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Laundry, bar bills, table bills, camera fee, tips",' + '"icon_string": "fac_laundary",' + '"font_awesome": "fal fa-dryer"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Entrance fee to Parks, Museums and Historical place",' + '"icon_string": "fac_park_fee",' + '"font_awesome": "fas fa-money-bill-alt"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Horse Riding",' + '"icon_string": "fac_horse_riding",' + '"font_awesome": "fad fa-horse-saddle"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Cargo items",' + '"icon_string": "fac_cargo",' + '"font_awesome": "fas fa-truck-loading"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Potter",' + '"icon_string": "fac_potter",' + '"font_awesome": "fas fa-transporter"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Guns",' + '"icon_string": "fac_gun",' + '"font_awesome": "fas fa-scanner"' + '}' + ']'; // Define allowed extensions

        this.allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'tiff', 'webp', 'pdf', 'doc', 'docx', 'txt'];
      }

      _createClass(OfferManagementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this51 = this;

          this.route.queryParams.subscribe(function (params) {
            if (params['referenceId']) {
              _this51.referenceId = +params['referenceId'];

              _this51.operatorApiService.GetCustomTripDetails(_this51.referenceId).subscribe(function (response) {
                if (response.Status && response.Data && response.Data.TripRequest) {
                  _this51.numberOfDays = response.Data.TripRequest.Duration;

                  _this51.createItinerary();
                }
              });
            }

            if (params['participentId']) {
              _this51.participentId = +params['participentId'];
              _this51.isRevisedOffer = true;
            } else {
              _this51.isRevisedOffer = false;
            }
          });
          this.offerForm = this.fb.group({
            OfferPrice: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]],
            Note: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]],
            File: [null] // For file attachment

          });
          this.itineraryForm = this.fb.group({
            days: this.fb.array([])
          });
          this.facilities = JSON.parse(this.facilitiesJsonstring);
        }
      }, {
        key: "onFileSelected",
        value: function onFileSelected(event) {
          var file = event.target.files[0];

          if (file) {
            var fileName = file.name;
            var parts = fileName.split('.');
            var fileExtension = '';

            if (parts.length > 1) {
              fileExtension = parts.pop().toLowerCase();
            }

            if (fileExtension && this.allowedExtensions.includes(fileExtension)) {
              this.selectedFile = file;
              var fileControl = this.offerForm.get('File');

              if (fileControl) {
                fileControl.setValue(this.selectedFile);
              }
            } else {
              this.toastr.error('Invalid file type. Allowed types are: ' + this.allowedExtensions.join(', '), 'File Type Error'); // Clear the file input

              event.target.value = '';
              this.selectedFile = null;

              var _fileControl = this.offerForm.get('File');

              if (_fileControl) {
                _fileControl.setValue(null); // Clear the form control as well

              }
            }
          } else {
            this.selectedFile = null;

            var _fileControl2 = this.offerForm.get('File');

            if (_fileControl2) {
              _fileControl2.setValue(null);
            }
          }
        }
      }, {
        key: "setActiveTab",
        value: function setActiveTab(tabName) {
          this.activeTab = tabName;
        }
      }, {
        key: "submitOffer",
        value: function submitOffer() {
          var _this52 = this;

          // Reset errors
          this.offerError = false;
          this.itineraryError = false;
          this.facilitiesError = false; // Validate Offer tab

          this.offerForm.markAllAsTouched();

          if (this.offerForm.invalid) {
            this.offerError = true;
          } // Validate Itinerary tab


          var itineraryValue = this.itineraryForm.value.days;
          var isItineraryValid = itineraryValue.length > 0 && itineraryValue.some(function (day) {
            return day.DayPlan && day.DayPlan.length > 0;
          });

          if (!isItineraryValid) {
            this.itineraryError = true;
          } // Validate Facilities tab


          var anyFacilitySelected = this.facilities.some(function (f) {
            return f.flag;
          });

          if (!anyFacilitySelected) {
            this.facilitiesError = true;
          } // Check for any errors


          if (this.itineraryError || this.facilitiesError || this.offerError) {
            this.toastr.error('Please fix the errors in the highlighted tabs.', 'Validation Error');

            if (this.itineraryError) {
              this.activeTab = 'itineraries';
            } else if (this.facilitiesError) {
              this.activeTab = 'facilities';
            } else if (this.offerError) {
              this.activeTab = 'offer';
            }

            return;
          }

          var formData = new FormData();
          formData.append('OfferPrice', this.offerForm.get('OfferPrice') ? this.offerForm.get('OfferPrice').value : '');
          formData.append('Note', this.offerForm.get('Note') ? this.offerForm.get('Note').value : '');

          if (this.selectedFile) {
            formData.append('File', this.selectedFile, this.selectedFile.name);
          }

          var itineraryJson = JSON.stringify(itineraryValue, null, 2);
          formData.append('IternaryPlanJsonString', itineraryJson);
          var facilitiesData = this.processFacilities(this.facilities);
          formData.append('FaclitiesJsonString', JSON.stringify(facilitiesData));

          if (this.isRevisedOffer) {
            if (this.participentId) {
              formData.append('ParticipentId', this.participentId.toString());
              formData.append("ParticipantId", this.participentId.toString());
              this.operatorApiService.CreateRevisedOffer(formData).subscribe(function (response) {
                if (response.Status) {
                  _this52.toastr.success('Your offer has been submitted successfully. The tourist has been notified, and your offer status is now marked as ‘Pending’ for their review', 'Success');

                  _this52.router.navigate(['/custom-tour-requests', _this52.referenceId]); // Navigate after submission

                } else {
                  if (response.Data && Array.isArray(response.Data) && response.Data.length > 0) {
                    response.Data.forEach(function (errorMsg) {
                      _this52.toastr.error(errorMsg, 'Validation Error');
                    });
                  } else {
                    _this52.toastr.error('Failed to submit revised offer: ' + response.Message, 'Error');
                  }
                }
              }, function (error) {
                _this52.toastr.error('An error occurred while submitting the revised offer.', 'Error');
              });
            }
          } else {
            if (this.referenceId) {
              formData.append('ReqId', this.referenceId.toString());
              this.operatorApiService.SubmitAnOffer(formData).subscribe(function (response) {
                if (response.Status) {
                  _this52.toastr.success('Your offer has been submitted successfully. The tourist has been notified, and your offer status is now marked as ‘Pending’ for their review', 'Success');

                  _this52.router.navigate(['/custom-tour-requests', _this52.referenceId]); // Navigate after submission

                } else {
                  if (response.Data && Array.isArray(response.Data) && response.Data.length > 0) {
                    response.Data.forEach(function (errorMsg) {
                      _this52.toastr.error(errorMsg, 'Validation Error');
                    });
                  } else {
                    _this52.toastr.error('Failed to submit offer: ' + response.Message, 'Error');
                  }
                }
              }, function (error) {
                _this52.toastr.error('An error occurred while submitting the offer.', 'Error');
              });
            }
          }
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.router.navigate(['/dashboard']); // Navigate back or to a suitable page
        } // Itinerary methods

      }, {
        key: "createItinerary",
        value: function createItinerary() {
          var days = this.itineraryForm.get('days');
          days.clear();

          for (var i = 0; i < this.numberOfDays; i++) {
            days.push(this.fb.group({
              DayName: ["Day ".concat(i + 1)],
              Id: [i + 1],
              DayPlan: this.fb.array([])
            }));
          }
        }
      }, {
        key: "days",
        get: function get() {
          return this.itineraryForm.get('days');
        }
      }, {
        key: "getDayPlan",
        value: function getDayPlan(i) {
          return this.days.at(i).get('DayPlan');
        }
      }, {
        key: "openTaskModal",
        value: function openTaskModal(dayIndex) {
          this.currentDayIndex = dayIndex;
          this.taskModalError = false;
          $('#taskModal').modal('show');
        }
      }, {
        key: "addTaskFromModal",
        value: function addTaskFromModal(taskDetailsInput) {
          if (this.currentDayIndex !== null) {
            var taskDetails = taskDetailsInput.value;

            if (taskDetails && taskDetails.trim()) {
              this.getDayPlan(this.currentDayIndex).push(this.fb.group({
                TaskDetaisl: [taskDetails]
              }));
              taskDetailsInput.value = ''; // Clear the textarea

              $('#taskModal').modal('hide');
            } else {
              this.taskModalError = true;
            }
          }
        }
      }, {
        key: "removeTask",
        value: function removeTask(i, j) {
          this.getDayPlan(i).removeAt(j);
        } // Facilities methods

      }, {
        key: "showSubChild",
        value: function showSubChild(i, event) {
          var facility = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

          if (event.target.checked) {
            $('#subItem_' + i).show();
          } else {
            $('#subItem_' + i).hide();
          }
        }
      }, {
        key: "showSecendChild",
        value: function showSecendChild(i, event, index, length) {
          var flag = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';

          if (event.target.checked) {
            for (var j = 0; j < length; j++) {
              if (j != index) {
                if (flag == 'accomodation') {
                  $("#firstChildLableAcco_" + j).prop("checked", false);
                } else if (flag == 'transport') {
                  $("#firstChildLable_" + j).prop("checked", false);
                }
              }
            }

            $('#secendChild_' + i).show();
          } else {
            $('#secendChild_' + i).hide();
          }
        }
      }, {
        key: "onHotelStarCLick",
        value: function onHotelStarCLick(title) {
          for (var i = 0; i < this.facilities[0].child[0].child.length; i++) {
            if (title == this.facilities[0].child[0].child[i].title) {
              this.facilities[0].child[0].child[i].flag = true;
            } else {
              this.facilities[0].child[0].child[i].flag = false;
            }
          }
        }
      }, {
        key: "addNewFacility",
        value: function addNewFacility(eventValues) {
          if (eventValues.value.trim()) {
            var newFacility = {
              child: [],
              flag: false,
              havesub: false,
              title: eventValues.value,
              icon_string: 'fac_other'
            };
            this.isError = false;
            this.facilities.push(newFacility);
            eventValues.value = '';
          } else {
            this.isError = true;
          }
        }
      }, {
        key: "processFacilities",
        value: function processFacilities(facilities) {
          var selectedFacilities = {
            Accommodiation: '',
            Transportation: '',
            HaveAccomodation: facilities[0] && facilities[0].flag || false,
            HaveTransport: facilities[1] && facilities[1].flag || false,
            HaveMeals: facilities[2] && facilities[2].flag || false,
            HaveFirstAid: facilities[7] && facilities[7].flag || false,
            Facalities: JSON.stringify(facilities)
          };

          if (selectedFacilities.HaveAccomodation && facilities[0] && facilities[0].child) {
            var accom = facilities[0].child.find(function (c) {
              return c.flag;
            });
            selectedFacilities.Accommodiation = accom ? accom.title : '';
          }

          if (selectedFacilities.HaveTransport && facilities[1] && facilities[1].child) {
            var trans = facilities[1].child.find(function (c) {
              return c.flag;
            });
            selectedFacilities.Transportation = trans ? trans.title : '';
          }

          return selectedFacilities;
        }
      }]);

      return OfferManagementComponent;
    }();

    OfferManagementComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _Services_Operator_operator_api_service__WEBPACK_IMPORTED_MODULE_4__["OperatorApiService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }];
    };

    OfferManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-offer-management',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./offer-management.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/offer-management/offer-management.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./offer-management.component.css */
      "./src/app/offer-management/offer-management.component.css"))["default"]]
    })], OfferManagementComponent);
    /***/
  },

  /***/
  "./src/app/pkgdetails/pkgdetails.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/pkgdetails/pkgdetails.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPkgdetailsPkgdetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n                    .nav-tabs {\n                margin: 30px auto;\n                }\n                \n                .nav-tabs > li {\n                margin-left: -1px;\n                }\n                \n                .nav-tabs > li:first-child > a {\n                border-radius: 0;\n                }\n                \n                .nav-tabs > li:first-child > a:before {\n                display: none;\n                }\n                \n                .nav-tabs > li:last-child > a:after {\n                box-shadow: none;\n                }\n                \n                .nav-tabs > li > a {\n                padding: 15px 30px 15px 50px;\n                background-color: #f5af24;\n                color: black;\n                border: 0;\n                position: relative;\n                }\n                \n                .nav-tabs > li > a:hover, .nav-tabs > li > a:active, .nav-tabs > li > a:focus {\n                background-color: #f5af24;\n                color: black;\n                border: 0;\n                }\n                \n                .nav-tabs > li > a:before {\n                content: \" \";\n                position: absolute;\n                left: -20px;\n                top: 0;\n                height: 100%;\n                width: 40px;\n                background-color: #f5af24;\n                transform: skewX(35deg);\n                }\n                \n                .nav-tabs > li > a:after {\n                content: \" \";\n                position: absolute;\n                right: -20px;\n                background-color: #f5af24;\n                top: 0;\n                height: 100%;\n                width: 40px;\n                transform: skewX(35deg);\n                box-shadow: 3px 0px 0 0 rgba(0, 0, 0, 0.1);\n                z-index: 1;\n                }\n                \n                .nav-tabs > li.active {\n                margin-top: -11px;\n                }\n                \n                .nav-tabs > li.active > a {\n                border: 0;\n                background-color: #15b4e3;\n                color: white;\n                padding: 15px 30px 15px 50px;\n                font-size: 22px;\n                border-radius: 0;\n                }\n                \n                .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:active, .nav-tabs > li.active > a:focus {\n                background-color: #15b4e3;\n                color: white;\n                border: 0;\n                }\n                \n                .nav-tabs > li.active > a:before {\n                display: none;\n                }\n                \n                .nav-tabs > li.active > a:after {\n                right: -25px;\n                width: 50px;\n                background-color: #15b4e3;\n                z-index: 1;\n                }\n                \n                html {\n                font-family: helvetica, sans-serif;\n                font-size: 1rem;\n                color: #777777;\n                background: #d5d5d5;\n                background: linear-gradient(#d5d5d5, #ffffff);\n                height: 100%;\n                }\n                \n                .card {\n                background-color: #3A3A3A;\n                color: #ffffff;\n                box-shadow: 2px 2px 10px #777777;\n                border-top: 8px solid #3A3A3A;\n                border-radius: 4px;\n                padding: 16px 39px 32px 32px;\n                margin: 20px;\n                margin-left: 50px;\n                width: 335px;\n                height: 370px;\n                }\n                \n                .card:hover {\n                border-top: 8px solid #15b4e3;\n                border-radius: 4px;\n                transform: translateY(-1em);\n                transition: all 0.2s ease-out;\n                }\n                \n                .card__title {\n                font-size: 0.875rem;\n                text-transform: uppercase;\n                letter-spacing: 2px;\n                padding-bottom: 8px;\n                }\n                \n                .card__body {\n                position: relative;\n                border-top: 2px solid #777777;\n                border-bottom: 2px solid #777777;\n                padding-bottom: 16px;\n                }\n                \n                .price {\n                font-size: 4rem;\n                font-weight: bold;\n                text-shadow: 0 0 1px #000;\n                color: #f5af24;\n                padding-left: 24px;\n                margin: 32px 0;\n                }\n                \n                .price__symbol {\n                position: absolute;\n                left: 0px;\n                top: 42px;\n                font-size: 1.5rem;\n                }\n                \n                .price__tag {\n                text-transform: uppercase;\n                margin-bottom: 8px;\n                }\n                \n                .card__button {\n                width: 100%;\n                background-color: #f5af24;\n                border: 1px solid #f5af24;\n                border-radius: 8px;\n                margin-top: 32px;\n                padding: 16px 0;\n                font-size: 1.25rem;\n                font-weight: bold;\n                letter-spacing: 2.6666666667px;\n                text-transform: uppercase;\n                text-shadow: 1px 1px #3A3A3A;\n                color: #ffffff;\n                }\n                \n                .card__button_sub {\n                width:100%;\n                background-color: #15b4e3;\n                border: 1px solid #15b4e3;\n                border-radius: 8px;\n                margin-top: 32px;\n                padding: 16px 0;\n                font-size: 1.25rem;\n                font-weight: bold;\n                letter-spacing: 2.6666666667px;\n                text-transform: uppercase;\n                text-shadow: 1px 1px #3A3A3A;\n                color: #ffffff;\n                }\n                \n                .card:hover .card__button {\n                background-color: #15b4e3;\n                border-color: #15b4e3;\n                }\n                \n                .card:hover .price {\n                color: #15b4e3;\n                }\n                \n                .sub td\n                {\n                padding-right: 40px;\n                }\n                \n                .c-main\n                {\n                color: gainsboro;\n                margin-top: 20px;\n                }\n                \n                .sub1 td\n                {\n                padding-right: 120px;\n                }\n              ";
    /***/
  },

  /***/
  "./src/app/pkgdetails/pkgdetails.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pkgdetails/pkgdetails.component.ts ***!
    \****************************************************/

  /*! exports provided: PkgdetailsComponent */

  /***/
  function srcAppPkgdetailsPkgdetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PkgdetailsComponent", function () {
      return PkgdetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Services_Subscription_subscription_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Services/Subscription/subscription.service */
    "./src/app/Services/Subscription/subscription.service.ts");
    /* harmony import */


    var _Services_Operator_operator_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Services/Operator/operator-service.service */
    "./src/app/Services/Operator/operator-service.service.ts");

    var PkgdetailsComponent = /*#__PURE__*/function () {
      function PkgdetailsComponent(subscriptionService, operatorServiceService) {
        _classCallCheck(this, PkgdetailsComponent);

        this.subscriptionService = subscriptionService;
        this.operatorServiceService = operatorServiceService;
      }

      _createClass(PkgdetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this53 = this;

          this.operatorServiceService.GetOperatorPackages().subscribe(function (data) {
            if (data.Status) {
              // console.log(data.Data);
              _this53.operatorPackage = data.Data;
            }
          });
        }
      }]);

      return PkgdetailsComponent;
    }();

    PkgdetailsComponent.ctorParameters = function () {
      return [{
        type: _Services_Subscription_subscription_service__WEBPACK_IMPORTED_MODULE_2__["SubscriptionService"]
      }, {
        type: _Services_Operator_operator_service_service__WEBPACK_IMPORTED_MODULE_3__["OperatorServiceService"]
      }];
    };

    PkgdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pkgdetails',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pkgdetails.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pkgdetails/pkgdetails.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pkgdetails.component.css */
      "./src/app/pkgdetails/pkgdetails.component.css"))["default"]]
    })], PkgdetailsComponent);
    /***/
  },

  /***/
  "./src/app/pkginvoice/pkginvoice.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/pkginvoice/pkginvoice.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPkginvoicePkginvoiceComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./src/app/pkginvoice/pkginvoice.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pkginvoice/pkginvoice.component.ts ***!
    \****************************************************/

  /*! exports provided: PkginvoiceComponent */

  /***/
  function srcAppPkginvoicePkginvoiceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PkginvoiceComponent", function () {
      return PkginvoiceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _Services_Operator_operator_package_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Services/Operator/operator-package-service.service */
    "./src/app/Services/Operator/operator-package-service.service.ts");
    /* harmony import */


    var _classes_Subscription_Operator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../classes/Subscription/Operator */
    "./src/app/classes/Subscription/Operator.ts");
    /* harmony import */


    var _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../Services/Utilities/genaric.service */
    "./src/app/Services/Utilities/genaric.service.ts");

    var PkginvoiceComponent = /*#__PURE__*/function () {
      function PkginvoiceComponent(actRoute, operatorPackageServiceService, genricUtlitis) {
        _classCallCheck(this, PkginvoiceComponent);

        this.actRoute = actRoute;
        this.operatorPackageServiceService = operatorPackageServiceService;
        this.genricUtlitis = genricUtlitis;
        this.availableOperatorPackage = new _classes_Subscription_Operator__WEBPACK_IMPORTED_MODULE_4__["AvailableOperatorPackage"]();
      }

      _createClass(PkginvoiceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.packageId = this.actRoute.snapshot.params.Id;
          this.loadAllPackages();
        }
      }, {
        key: "loadAllPackages",
        value: function loadAllPackages() {
          var _this54 = this;

          this.operatorPackageServiceService.GetPackageById(this.packageId).subscribe(function (data) {
            if (data.Data) {
              _this54.availableOperatorPackage = data.Data;
              _this54.totaCurrentAccount = _this54.availableOperatorPackage.CurrentPrice;
            }
          });
        }
      }, {
        key: "SubscribePackage",
        value: function SubscribePackage() {
          var _this55 = this;

          this.operatorPackageServiceService.SubscribePackage(this.packageId).subscribe(function (data) {
            if (data) {
              if (data.Status) {
                _this55.genricUtlitis.showMessageToast('Your package successfully subscribe', true, _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_5__["PrintMedia"].Conformation);
              } else {
                _this55.genricUtlitis.showMessageToast(data.Mssage, false, _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_5__["PrintMedia"].Error);
              }
            }
          });
        }
      }]);

      return PkginvoiceComponent;
    }();

    PkginvoiceComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _Services_Operator_operator_package_service_service__WEBPACK_IMPORTED_MODULE_3__["OperatorPackageServiceService"]
      }, {
        type: _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_5__["GenaricService"]
      }];
    };

    PkginvoiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pkginvoice',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pkginvoice.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pkginvoice/pkginvoice.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pkginvoice.component.css */
      "./src/app/pkginvoice/pkginvoice.component.css"))["default"]]
    })], PkginvoiceComponent);
    /***/
  },

  /***/
  "./src/app/posttrip/TripItinerary/Facilities/facilities-trip/facilities-trip.component.css":
  /*!*************************************************************************************************!*\
    !*** ./src/app/posttrip/TripItinerary/Facilities/facilities-trip/facilities-trip.component.css ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPosttripTripItineraryFacilitiesFacilitiesTripFacilitiesTripComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./src/app/posttrip/TripItinerary/Facilities/facilities-trip/facilities-trip.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/posttrip/TripItinerary/Facilities/facilities-trip/facilities-trip.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: FacilitiesTripComponent */

  /***/
  function srcAppPosttripTripItineraryFacilitiesFacilitiesTripFacilitiesTripComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilitiesTripComponent", function () {
      return FacilitiesTripComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/classes/trip/TripModel */
    "./src/app/classes/trip/TripModel.ts");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var src_app_Services_TripService_trip_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Services/TripService/trip.service */
    "./src/app/Services/TripService/trip.service.ts");
    /* harmony import */


    var src_app_Services_Utilities_UtilitiesMethods_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/Services/Utilities/UtilitiesMethods.service */
    "./src/app/Services/Utilities/UtilitiesMethods.service.ts");
    /* harmony import */


    var src_app_Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/Services/Utilities/genaric.service */
    "./src/app/Services/Utilities/genaric.service.ts");

    var FacilitiesTripComponent = /*#__PURE__*/function () {
      function FacilitiesTripComponent(tripSerivce, settingUtitls, genricUtlitis) {
        _classCallCheck(this, FacilitiesTripComponent);

        this.tripSerivce = tripSerivce;
        this.settingUtitls = settingUtitls;
        this.genricUtlitis = genricUtlitis; // tslint:disable-next-line: max-line-length

        this.facilitiesJsonstring = '[' + '{' + '"child": [' + '{' + '"child": [' + '{' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "5"' + '},' + '{' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "4"' + '},' + '{' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "3"' + '},' + '{' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "2"' + '},' + '{' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "1"' + '}' + '],' + '"flag": false,' + '"havesub": true,' + '"id": 0,' + '"title": "Hotel",' + '"icon_string": "fac_hotel",' + '"font_awesome": "fas fa-hotel"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Guest House",' + '"icon_string": "fac_guest_house",' + '"font_awesome": "fas fa-house-user"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Camp",' + '"icon_string": "fac_camp",' + '"font_awesome": "fas fa-campground"' + '}' + '],' + '"flag": false,' + '"havesub": true,' + '"id": 0,' + '"title": "Accommodation",' + '"icon_string": "fac_accomodation",' + '"font_awesome": "far fa-building"' + '},' + '{' + '"child": [' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Bus",' + '"icon_string": "fac_bus",' + '"font_awesome": "far fa-car-bus"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Van",' + '"icon_string": "fac_van",' + '"font_awesome": "fas fa-shuttle-van"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Car",' + '"icon_string": "fac_car",' + '"font_awesome": "far fa-car-bus"' + '}' + '],' + '"flag": false,' + '"havesub": true,' + '"id": 0,' + '"title": "Transportation",' + '"icon_string": "fac_transport",' + '"font_awesome": "far fa-car-bus"' + '},' + '{' + '"child": [' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Breakfast",' + '"icon_string": "fac_breakfast",' + '"font_awesome": "fas fa-coffee"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Lunch",' + '"icon_string": "fac_lunch",' + '"font_awesome": "far fa-utensils-alt"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Dinner",' + '"icon_string": "fac_dinner",' + '"font_awesome": "fas fa-utensils-alt"' + '}' + '],' + '"flag": false,' + '"havesub": true,' + '"id": 0,' + '"title": "Meal",' + '"icon_string": "fac_meals",' + '"font_awesome": "fas fa-utensils"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Transportation Fuel",' + '"icon_string": "fac_transportation_fuel",' + '"font_awesome": "fas fa-gas-pump"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Toll Taxes",' + '"icon_string": "fac_tool_tax",' + '"font_awesome": "fas fa-tram"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Parking Fees",' + '"icon_string": "fac_parking_fee",' + '"font_awesome": "fas fa-parking"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Drivers Food & Accommodation",' + '"icon_string": "fac_driver_food",' + '"font_awesome": "fab fa-accessible-icon"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Basic First Aid",' + '"icon_string": "fac_basic_first_add",' + '"font_awesome": "fas fa-medkit"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Tour Guide or Expedited Driver",' + '"icon_string": "fac_tour_guide",' + '"font_awesome": "fab fa-guilded"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Any Airfare",' + '"icon_string": "fac_air_fare",' + '"font_awesome": "fas fa-plane-departure"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Train Fare",' + '"icon_string": "fac_train_fair",' + '"font_awesome": "fas fa-subway"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Overland Journey Not mentioned in Itinerary",' + '"icon_string": "fac_not_mention",' + '"font_awesome": "fas fa-not-equal"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Any Medical/rescue evacuation due to mishaps",' + '"icon_string": "fac_any_medical",' + '"font_awesome": "fas fa-star-and-crescent"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Laundry, bar bills, table bills, camera fee, tips",' + '"icon_string": "fac_laundary",' + '"font_awesome": "fal fa-dryer"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Entrance fee to Parks, Museums and Historical place",' + '"icon_string": "fac_park_fee",' + '"font_awesome": "fas fa-money-bill-alt"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Horse Riding",' + '"icon_string": "fac_horse_riding",' + '"font_awesome": "fad fa-horse-saddle"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Cargo items",' + '"icon_string": "fac_cargo",' + '"font_awesome": "fas fa-truck-loading"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Potter",' + '"icon_string": "fac_potter",' + '"font_awesome": "fas fa-transporter"' + '},' + '{' + '"child": [],' + '"flag": false,' + '"havesub": false,' + '"id": 0,' + '"title": "Guns",' + '"icon_string": "fac_gun",' + '"font_awesome": "fas fa-scanner"' + '}' + ']';
        this.facilities = [];
        this.isError = false;
        this.childEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.tripModel = new src_app_classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__["TripModel"]();
        this.DefultTrip = new src_app_classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__["TripDefult"]();
        this.facilitiesForm = new src_app_classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__["FacilitiesForm"]();
      }

      _createClass(FacilitiesTripComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.facilities = JSON.parse(this.facilitiesJsonstring);
          this.DefultTrip = this.settingUtitls.getDraftTrip;
          this.tripModel = JSON.parse(this.DefultTrip.TripString);
          this.loadFacilites();
        }
      }, {
        key: "showSubChild",
        value: function showSubChild(i, event) {
          var facility = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

          if (event.target.checked) {
            jquery__WEBPACK_IMPORTED_MODULE_3__('#subItem_' + i).show();
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_3__('#subItem_' + i).hide();
          }

          console.log(this.tripModel.Faclities);
        }
      }, {
        key: "showSecendChild",
        value: function showSecendChild(i, event, index, length) {
          var flag = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
          debugger;

          if (event.target.checked) {
            for (var j = 0; j < length; j++) {
              if (j != index) {
                if (flag == 'accomodation') {
                  jquery__WEBPACK_IMPORTED_MODULE_3__("#firstChildLableAcco_" + j).prop("checked", false);
                } else if (flag == 'transport') {
                  jquery__WEBPACK_IMPORTED_MODULE_3__("#firstChildLable_" + j).prop("checked", false);
                }
              }
            }

            jquery__WEBPACK_IMPORTED_MODULE_3__('#secendChild_' + i).show();
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_3__('#secendChild_' + i).hide();
          }
        }
      }, {
        key: "onHotelStarCLick",
        value: function onHotelStarCLick(title) {
          console.log("Hitme " + title);

          for (var i = 0; i < this.facilities[0].child[0].child.length; i++) {
            if (title == this.facilities[0].child[0].child[i].title) {
              this.facilities[0].child[0].child[i].flag = true;
            } else {
              this.facilities[0].child[0].child[i].flag = false;
            }
          }
        }
      }, {
        key: "addFacilities",
        value: function addFacilities() {
          var _this56 = this;

          debugger;
          this.DefultTrip = Object.assign({}, this.settingUtitls.getDraftTrip);

          var _iterator = _createForOfIteratorHelper(this.facilities[0].child[0].child),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _char = _step.value;
              console.log(_char.flag);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          if (this.tripModel && this.facilities && this.facilities.length > 0) {
            this.tripModel = new src_app_classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__["TripModel"]();
            debugger;
            this.tripModel = JSON.parse(this.DefultTrip.TripString);
            var accommdation = this.facilities[0].child.find(function (x) {
              return x.flag === true;
            });
            var transport = this.facilities[1].child.find(function (x) {
              return x.flag === true;
            });
            var meals = this.facilities[2].child.find(function (x) {
              return x.flag === true;
            });
            var first_aid = this.facilities[7].child.find(function (x) {
              return x.flag === true;
            });
            console.log(this.facilities[7]);
            this.tripModel.Faclities.Accommodiation = accommdation ? accommdation.title : '';
            this.tripModel.Faclities.Transportation = transport ? transport.title : '';
            this.tripModel.Faclities.HaveAccomodation = this.facilities[0].flag;
            this.tripModel.Faclities.HaveTransport = this.facilities[1].flag;
            this.tripModel.Faclities.HaveMeals = this.facilities[2].flag;
            this.tripModel.Faclities.HaveFirstAid = this.facilities[7].flag;
            this.tripModel.Faclities.Facalities = JSON.stringify(this.facilities);
            this.DefultTrip.TripString = JSON.stringify(this.tripModel);
            this.DefultTrip.IS_FacilitiesDone = true;
            this.settingUtitls.setDraftTrip = this.DefultTrip;
            this.tripSerivce.AddTripdefult(this.DefultTrip).subscribe(function (data) {
              if (data.Status) {
                _this56.genricUtlitis.showMessageToast('Trip Info saved as draft', true, src_app_Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_6__["PrintMedia"].Conformation);

                _this56.childEmitter.emit('Fac');
              }
            });
          } // console.log(this.facilities);

        }
      }, {
        key: "addNewFacility",
        value: function addNewFacility(eventValues) {
          if (eventValues.value.trim()) {
            this.facilitiesForm = new src_app_classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__["FacilitiesForm"]();
            this.isError = false;
            this.facilitiesForm.title = eventValues.value;
            this.facilitiesForm.flag = false;
            this.facilitiesForm.havesub = false;
            this.facilitiesForm.icon_string = 'fac_other';
            this.facilities.push(this.facilitiesForm);
            eventValues.value = '';
          } else {
            this.isError = true;
          }
        }
      }, {
        key: "loadFacilites",
        value: function loadFacilites() {
          if (this.tripModel.Faclities) {
            if (this.tripModel.Faclities.Facalities) {
              this.facilities = JSON.parse(this.tripModel.Faclities.Facalities);
            }
          }
        }
      }]);

      return FacilitiesTripComponent;
    }();

    FacilitiesTripComponent.ctorParameters = function () {
      return [{
        type: src_app_Services_TripService_trip_service__WEBPACK_IMPORTED_MODULE_4__["TripService"]
      }, {
        type: src_app_Services_Utilities_UtilitiesMethods_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesMethodsService"]
      }, {
        type: src_app_Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_6__["GenaricService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], FacilitiesTripComponent.prototype, "childEmitter", void 0);
    FacilitiesTripComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-facilities-trip',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./facilities-trip.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/posttrip/TripItinerary/Facilities/facilities-trip/facilities-trip.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./facilities-trip.component.css */
      "./src/app/posttrip/TripItinerary/Facilities/facilities-trip/facilities-trip.component.css"))["default"]]
    })], FacilitiesTripComponent);
    /***/
  },

  /***/
  "./src/app/posttrip/TripItinerary/ItineraryPlane/ItineraryPlane.component.css":
  /*!************************************************************************************!*\
    !*** ./src/app/posttrip/TripItinerary/ItineraryPlane/ItineraryPlane.component.css ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPosttripTripItineraryItineraryPlaneItineraryPlaneComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".remove-icon{\n    margin-top: -25px;\n    position: absolute;\n}\n.intititle{\n    margin-left: 20px;\n}\n.input-group-append {\n  \n    position: absolute;\n    margin-top: 25px;\n}\n.pen-input {\n    \n    margin-left: 20px;\n}";
    /***/
  },

  /***/
  "./src/app/posttrip/TripItinerary/ItineraryPlane/ItineraryPlane.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/posttrip/TripItinerary/ItineraryPlane/ItineraryPlane.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: ItineraryPlaneComponent */

  /***/
  function srcAppPosttripTripItineraryItineraryPlaneItineraryPlaneComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItineraryPlaneComponent", function () {
      return ItineraryPlaneComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/classes/trip/TripModel */
    "./src/app/classes/trip/TripModel.ts");
    /* harmony import */


    var src_app_Services_TripService_trip_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Services/TripService/trip.service */
    "./src/app/Services/TripService/trip.service.ts");
    /* harmony import */


    var src_app_Services_Utilities_UtilitiesMethods_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Services/Utilities/UtilitiesMethods.service */
    "./src/app/Services/Utilities/UtilitiesMethods.service.ts");
    /* harmony import */


    var src_app_Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/Services/Utilities/genaric.service */
    "./src/app/Services/Utilities/genaric.service.ts");

    var ItineraryPlaneComponent = /*#__PURE__*/function () {
      function ItineraryPlaneComponent(tripSerivce, settingUtitls, genricUtlitis) {
        _classCallCheck(this, ItineraryPlaneComponent);

        this.tripSerivce = tripSerivce;
        this.settingUtitls = settingUtitls;
        this.genricUtlitis = genricUtlitis;
        this.isError = false;
        this.isLengthy = false;
        this.dayDetail = '';
        this.editorConfig = {
          editable: true,
          spellcheck: true,
          height: 'auto',
          minHeight: '150px',
          maxHeight: 'auto',
          width: 'auto',
          minWidth: '0',
          translate: 'yes',
          enableToolbar: true,
          showToolbar: true,
          placeholder: 'Enter text here...',
          defaultParagraphSeparator: '',
          defaultFontName: '',
          defaultFontSize: '',
          fonts: [{
            "class": 'arial',
            name: 'Arial'
          }, {
            "class": 'times-new-roman',
            name: 'Times New Roman'
          }, {
            "class": 'calibri',
            name: 'Calibri'
          }, {
            "class": 'comic-sans-ms',
            name: 'Comic Sans MS'
          }],
          customClasses: [{
            name: 'quote',
            "class": 'quote'
          }, {
            name: 'redText',
            "class": 'redText'
          }, {
            name: 'titleText',
            "class": 'titleText',
            tag: 'h1'
          }],
          uploadUrl: 'v1/image',
          uploadWithCredentials: false,
          sanitize: true,
          toolbarPosition: 'top',
          toolbarHiddenButtons: [['bold', 'italic'], ['fontSize']]
        };
        this.childEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.charLength = 0;
        this.IternaryPlan = new src_app_classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__["IternaryPlan"]();
        this.IternaryPlanList = [];
        this.tripModel = new src_app_classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__["TripModel"]();
        this.DefultTrip = new src_app_classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__["TripDefult"]();
      }

      _createClass(ItineraryPlaneComponent, [{
        key: "totalNumberofDays",
        get: function get() {
          return this._totalNumberofDays;
        },
        set: function set(value) {
          console.log('totalNumberofDays setter called with value:', value);
          this._totalNumberofDays = value;

          if (value && value > 0 && (!this.IternaryPlanList || this.IternaryPlanList.length === 0)) {
            // Only load if list is empty (to avoid overwriting draft data)
            console.log('Loading day trips with', value, 'days');
            this.loadDayTrips();
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {// loadDayTrips will be called when totalNumberofDays is set by parent component
          // console.log(this.totalNumberofDays);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.DefultTrip = this.settingUtitls.getDraftTrip;

          if (this.DefultTrip && this.DefultTrip.TripString) {
            this.tripModel = JSON.parse(this.DefultTrip.TripString);
            this.loaddraftItinrayplane();
          } // If no draft data and days haven't been loaded yet, ensure they're loaded


          if ((!this.IternaryPlanList || this.IternaryPlanList.length === 0) && this.totalNumberofDays && this.totalNumberofDays > 0) {
            this.loadDayTrips();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "loadPopup",
        value: function loadPopup() {}
      }, {
        key: "loadDayTrips",
        value: function loadDayTrips() {
          console.log('loadDayTrips called, totalNumberofDays:', this.totalNumberofDays);

          if (!this.totalNumberofDays || this.totalNumberofDays <= 0) {
            console.warn('totalNumberofDays is not set or invalid:', this.totalNumberofDays);
            return;
          }

          this.IternaryPlanList = [];

          for (var i = 0; i < this.totalNumberofDays; i++) {
            this.IternaryPlan = new src_app_classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__["IternaryPlan"]();
            this.IternaryPlan.DayName = 'Day ' + (i + 1);
            this.IternaryPlan.Id = i + 1;
            this.IternaryPlan.DayPlan = []; // Initialize DayPlan array

            this.IternaryPlanList.push(this.IternaryPlan);
          }

          console.log('IternaryPlanList loaded with', this.IternaryPlanList.length, 'items');
        }
      }, {
        key: "checkCharacterLength",
        value: function checkCharacterLength(event) {
          console.log(event.target.value.length);
          this.isLengthy = false;
          this.charLength = event.target.value.length;
          if (this.charLength > 1000) this.isLengthy = true;
        }
      }, {
        key: "addDayItems",
        value: function addDayItems(i, event) {
          // console.log(this.dayDetail);
          this.isError = false;
          this.isLengthy = false;

          if (this.dayDetail.trim() && this.IternaryPlanList && this.IternaryPlanList.length > 0 && this.dayDetail.length <= 2000) {
            var dayPlaneSingleIteam = new src_app_classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__["DayPlan"]();
            dayPlaneSingleIteam.TaskDetaisl = this.dayDetail;
            this.IternaryPlanList[i].DayPlan.push(dayPlaneSingleIteam);
            this.dayDetail = '';
            this.hideModel(i);
          } else if (this.dayDetail.length > 2000) {
            this.isLengthy = true;
          } else {
            this.isError = true;
          }
        }
      }, {
        key: "remoDayItems",
        value: function remoDayItems(i, j) {
          this.IternaryPlanList[i].DayPlan.splice(j, 1);
        }
      }, {
        key: "shoEditDayTitle",
        value: function shoEditDayTitle(i) {
          var callFrom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          callFrom === 'hide' ? $('#editDayTitle_' + i).hide() : $('#editDayTitle_' + i).show();
        }
      }, {
        key: "hideModel",
        value: function hideModel(i) {
          $('#dayItems' + i).modal('toggle'); // $('#dayItems' + i).removeClass('in');
          // $('#dayItems' + i).css('display', 'none');
        }
      }, {
        key: "submistAsDraft",
        value: function submistAsDraft() {
          var _this57 = this;

          if (this.tripModel && this.IternaryPlanList && this.IternaryPlanList.length > 0) {
            this.tripModel.IternaryPlan = this.IternaryPlanList;
            this.DefultTrip.TripString = JSON.stringify(this.tripModel);
            this.DefultTrip.IS_ItnaryPlaneDone = true;
            this.settingUtitls.setDraftTrip = this.DefultTrip;
            this.tripSerivce.AddTripdefult(this.DefultTrip).subscribe(function (data) {
              if (data.Status) {
                _this57.genricUtlitis.showMessageToast('Trip Basic Info saved as draft', true, src_app_Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_5__["PrintMedia"].Conformation);

                _this57.childEmitter.emit('Itr');
              }
            });
          }
        }
      }, {
        key: "loaddraftItinrayplane",
        value: function loaddraftItinrayplane() {
          if (this.tripModel && this.tripModel.IternaryPlan && this.tripModel.IternaryPlan.length > 0) {
            this.IternaryPlanList = [];
            this.IternaryPlanList = this.tripModel.IternaryPlan;
          } else if ((!this.IternaryPlanList || this.IternaryPlanList.length === 0) && this.totalNumberofDays && this.totalNumberofDays > 0) {
            // If no draft data exists, load days from totalNumberofDays
            this.loadDayTrips();
          }
        }
      }]);

      return ItineraryPlaneComponent;
    }();

    ItineraryPlaneComponent.ctorParameters = function () {
      return [{
        type: src_app_Services_TripService_trip_service__WEBPACK_IMPORTED_MODULE_3__["TripService"]
      }, {
        type: src_app_Services_Utilities_UtilitiesMethods_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesMethodsService"]
      }, {
        type: src_app_Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_5__["GenaricService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ItineraryPlaneComponent.prototype, "childEmitter", void 0);
    ItineraryPlaneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      // tslint:disable-next-line:component-selector
      selector: 'app-ItineraryPlane',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ItineraryPlane.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/posttrip/TripItinerary/ItineraryPlane/ItineraryPlane.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ItineraryPlane.component.css */
      "./src/app/posttrip/TripItinerary/ItineraryPlane/ItineraryPlane.component.css"))["default"]]
    })], ItineraryPlaneComponent);
    /***/
  },

  /***/
  "./src/app/posttrip/TripItinerary/PostFinalTrip/PostFinalTrip.component.css":
  /*!**********************************************************************************!*\
    !*** ./src/app/posttrip/TripItinerary/PostFinalTrip/PostFinalTrip.component.css ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPosttripTripItineraryPostFinalTripPostFinalTripComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ul.cancelation-policy {\n  list-style-type: none;\n  padding-left: 0;\n}\n\n.heading-trip {\n  font-size: 34px;\n  font-family: roboto, sans-serif;\n  font-weight: 800;\n  color: #00a991;\n  margin-bottom: 0px;\n}\n\n.sub-heading-trip {\n  font-size: 18px;\n  font-family: roboto, sans-serif;\n  font-weight: 400;\n  color: #585858;\n  margin-bottom: 40px;\n}\n\n.trip-detail-operator-card {\n  background-color: #f3f5ea;\n  padding: 20px;\n  border-radius: 10px;\n}\n\n.policy-item {\n  cursor: pointer;\n  display: block;\n  text-decoration: none;\n  color: inherit;\n  margin-top: 10px;\n}\n\n.policy-description {\n  font-size: 14px;\n  color: #585858;\n}\n\n.refund-amount {\n  font-weight: bold;\n}\n\n.refund-percentage {\n  color: #00a991;\n  font-weight: bold;\n  text-align: center;\n}\n\n.divider {\n  border-bottom: 1px solid #ddd;\n  margin-top: 10px;\n}\n\n.policy-box, .policy-box-full {\n  background-color: #fff;\n  border: 1px solid #00a991;\n  border-radius: 10px;\n  padding: 20px;\n  cursor: pointer;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.policy-box {\n  width: 49%;\n}\n\n.policy-box-full {\n  width: 100%;\n  margin-top: 20px;\n}\n\n.policy-box img, .policy-box-full img {\n  margin-bottom: 10px;\n}\n\n.form-check-input {\n  margin-top: 0.3rem;\n  margin-left: -1.25rem;\n}\n\n.boost-options {\n  padding-left: 1.25rem; /* Align with checkbox content */\n}";
    /***/
  },

  /***/
  "./src/app/posttrip/TripItinerary/PostFinalTrip/PostFinalTrip.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/posttrip/TripItinerary/PostFinalTrip/PostFinalTrip.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: PostFinalTripComponent */

  /***/
  function srcAppPosttripTripItineraryPostFinalTripPostFinalTripComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostFinalTripComponent", function () {
      return PostFinalTripComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/classes/trip/TripModel */
    "./src/app/classes/trip/TripModel.ts");
    /* harmony import */


    var src_app_Services_TripService_trip_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Services/TripService/trip.service */
    "./src/app/Services/TripService/trip.service.ts");
    /* harmony import */


    var src_app_Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Services/Utilities/genaric.service */
    "./src/app/Services/Utilities/genaric.service.ts");
    /* harmony import */


    var src_app_Services_Utilities_UtilitiesMethods_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/Services/Utilities/UtilitiesMethods.service */
    "./src/app/Services/Utilities/UtilitiesMethods.service.ts");
    /* harmony import */


    var src_app_Services_BoostTrip_boost_trip_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/Services/BoostTrip/boost-trip.service */
    "./src/app/Services/BoostTrip/boost-trip.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _buy_boost_packages_buy_boost_packages_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../buy-boost-packages/buy-boost-packages-popup.component */
    "./src/app/posttrip/buy-boost-packages/buy-boost-packages-popup.component.ts");
    /* harmony import */


    var src_app_Services_Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/Services/Utilities/triputilites.service */
    "./src/app/Services/Utilities/triputilites.service.ts");

    var PostFinalTripComponent = /*#__PURE__*/function () {
      function PostFinalTripComponent(componentFactoryResolver, router, tripSerivce, genricUtlitis, settingUtitls, boostTrip, tripUtilities) {
        _classCallCheck(this, PostFinalTripComponent);

        this.componentFactoryResolver = componentFactoryResolver;
        this.router = router;
        this.tripSerivce = tripSerivce;
        this.genricUtlitis = genricUtlitis;
        this.settingUtitls = settingUtitls;
        this.boostTrip = boostTrip;
        this.tripUtilities = tripUtilities;
        this.cancellationPolicies = [];
        this.accepted = false;
        this.isBoost = false;
        this.isBoostt = false;
        this.isBoostAvailable = false;
        this.tripModel = new src_app_classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__["TripModel"]();
        this.BoostPackagesUser = [];
      }

      _createClass(PostFinalTripComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.DefultTrip = this.settingUtitls.getDraftTrip;
          this.tripModel = JSON.parse(this.DefultTrip.TripString);
          console.log(this.DefultTrip);
          this.tripModel.Boost_Code = 0;
          this.loadBoostPackages();
          this.loadCancellationPolicies();
        }
      }, {
        key: "onAccept",
        value: function onAccept(event) {
          this.accepted = event.target.checked; // console.log(event.target.checked);
        }
      }, {
        key: "onBoost",
        value: function onBoost(event) {
          if (this.isBoostAvailable) {
            this.isBoostt = event.target.checked;
            if (this.isBoostt == false) this.isBoost = false;
          } else {
            if (event.target.checked) this.loadBuyBoostPackgesPopup();
          } // console.log(event.target.checked);

        }
      }, {
        key: "boostSelected",
        value: function boostSelected(event) {
          if (event.target.value) {
            var selectedPackage = this.BoostPackagesUser.find(function (p) {
              return p.Id == event.target.value;
            });

            if (selectedPackage) {
              this.isBoost = true;
              this.tripModel.Boost_Code = selectedPackage.Id;
              this.boostRem = selectedPackage.RemningBoostTrips;
              this.boostDays = selectedPackage.TotalBoostTrips;
            } else {
              this.isBoost = false;
            }
          } else {
            this.isBoost = false;
            this.tripModel.Boost_Code = 0;
          }
        } // console.log(event);

      }, {
        key: "loadBoostPackages",
        value: function loadBoostPackages() {
          var _this58 = this;

          this.boostTrip.GetUsersBoostPackage().subscribe(function (data) {
            if (data.Status) {
              _this58.BoostPackagesUser = data.Data;

              for (var i = 0; i < _this58.BoostPackagesUser.length; i++) {
                if (_this58.BoostPackagesUser[i].IS_Payment) _this58.isBoostAvailable = true;
              }
            }
          });
        }
      }, {
        key: "postTrip",
        value: function postTrip() {
          var _this59 = this;

          if (this.tripModel) {
            if (this.tripModel) {
              this.tripSerivce.AddTrip(this.tripModel).subscribe(function (data) {
                if (data.Status) {
                  if (_this59.DefultTrip) {
                    _this59.DelDraft(_this59.DefultTrip.Id);
                  }

                  _this59.openShareTripModal(data.RefId); // this.genricUtlitis.showMessageToast("Trip posted successfully.", true, PrintMedia.Conformation);

                } else {
                  _this59.genricUtlitis.showMessageToast(data.Message, false, src_app_Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_4__["PrintMedia"].Conformation);
                }
              });
            }
          }
        }
      }, {
        key: "openShareTripModal",
        value: function openShareTripModal(Id) {
          this.router.navigate(["/post_success" + "/" + Id]);
        }
      }, {
        key: "navigateToPolicy",
        value: function navigateToPolicy(title) {
          console.log(title);

          if (title === "Terms") {
            window.open("https://tripjero.com/terms-of-service", "_blank");
          } else if (title === "Privacy") {
            window.open("https://tripjero.com/privacy-policy", "_blank");
          } else if (title === "Cancellation") {
            window.open("https://tripjero.com/cancellation-policy", "_blank");
          } // const slug = title.toLowerCase().replace(/\s+/g, '-');
          // this.router.navigate([`/${slug}`]);

        }
      }, {
        key: "DelDraft",
        value: function DelDraft(Id) {
          this.tripSerivce.DelDraftTripById(Id).subscribe(function (data) {
            if (data) {
              console.log(data);
            }
          });
        }
      }, {
        key: "loadBuyBoostPackgesPopup",
        value: function loadBuyBoostPackgesPopup() {
          var _this60 = this;

          var factory = this.componentFactoryResolver.resolveComponentFactory(_buy_boost_packages_buy_boost_packages_popup_component__WEBPACK_IMPORTED_MODULE_8__["BuyBoostPackagesPopUpComponent"]);
          this.BuyBoostPackagesRef.clear();
          this.cmpRef = this.BuyBoostPackagesRef.createComponent(factory);
          this.cmpRef.instance.onDistory.subscribe(function () {
            _this60.tripModel.IsBoost = false;

            _this60.loadBoostPackages();

            _this60.cmpRef.destroy();
          });
        }
      }, {
        key: "loadCancellationPolicies",
        value: function loadCancellationPolicies() {
          var _this61 = this;

          this.tripUtilities.GetCancellationOptions().subscribe(function (data) {
            if (data.Status) {
              _this61.cancellationPolicies = data.Data;
            }
          });
        }
      }, {
        key: "calculateCancellationDeadline",
        value: function calculateCancellationDeadline(startDateTime, durationBeforeTripStart) {
          if (!startDateTime || durationBeforeTripStart === undefined || durationBeforeTripStart === null) {
            return null;
          }

          var tripStartDate = new Date(startDateTime);
          tripStartDate.setHours(tripStartDate.getHours() - durationBeforeTripStart);
          return tripStartDate;
        }
      }]);

      return PostFinalTripComponent;
    }();

    PostFinalTripComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: src_app_Services_TripService_trip_service__WEBPACK_IMPORTED_MODULE_3__["TripService"]
      }, {
        type: src_app_Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_4__["GenaricService"]
      }, {
        type: src_app_Services_Utilities_UtilitiesMethods_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesMethodsService"]
      }, {
        type: src_app_Services_BoostTrip_boost_trip_service__WEBPACK_IMPORTED_MODULE_6__["BoostTripService"]
      }, {
        type: src_app_Services_Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_9__["TriputilitesService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("byuboostTripPoopup", {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
      "static": false
    })], PostFinalTripComponent.prototype, "BuyBoostPackagesRef", void 0);
    PostFinalTripComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-PostFinalTrip",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./PostFinalTrip.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/posttrip/TripItinerary/PostFinalTrip/PostFinalTrip.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./PostFinalTrip.component.css */
      "./src/app/posttrip/TripItinerary/PostFinalTrip/PostFinalTrip.component.css"))["default"]]
    })], PostFinalTripComponent);
    /***/
  },

  /***/
  "./src/app/posttrip/TripItinerary/TripImages/tripImages/tripImages.component.css":
  /*!***************************************************************************************!*\
    !*** ./src/app/posttrip/TripItinerary/TripImages/tripImages/tripImages.component.css ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPosttripTripItineraryTripImagesTripImagesTripImagesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./src/app/posttrip/TripItinerary/TripImages/tripImages/tripImages.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/posttrip/TripItinerary/TripImages/tripImages/tripImages.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: TripImagesComponent */

  /***/
  function srcAppPosttripTripItineraryTripImagesTripImagesTripImagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TripImagesComponent", function () {
      return TripImagesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/classes/trip/TripModel */
    "./src/app/classes/trip/TripModel.ts");
    /* harmony import */


    var src_app_Services_TripService_trip_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Services/TripService/trip.service */
    "./src/app/Services/TripService/trip.service.ts");
    /* harmony import */


    var src_app_Services_Utilities_UtilitiesMethods_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Services/Utilities/UtilitiesMethods.service */
    "./src/app/Services/Utilities/UtilitiesMethods.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var TripImagesComponent = /*#__PURE__*/function () {
      function TripImagesComponent(tripSerivce, settingUtitls, toastr) {
        _classCallCheck(this, TripImagesComponent);

        this.tripSerivce = tripSerivce;
        this.settingUtitls = settingUtitls;
        this.toastr = toastr;
        this.imagePrevirewList = [];
        this.tempImageList = [];
        this.files = [];
        this.baseImgURL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].domainToken;
        this.childEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.TripImages = new src_app_classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__["TripImages"]();
        this.TripImagesList = [];
        this.DefultTrip = new src_app_classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__["TripDefult"]();
        this.TempTripImagesList = [];
        this.imageDomainUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].domainToken;
      }

      _createClass(TripImagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // debugger;
          this.DefultTrip = this.settingUtitls.getDraftTrip;
          this.tripModel = this.DefultTrip && JSON.parse(this.DefultTrip.TripString);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.tripModel.TripImages.forEach(function (img, key) {// console.log(img)
            // this.files[key] = this.baseImgURL + img;
          });
        }
      }, {
        key: "hideModel",
        value: function hideModel() {
          $("#tripImagesModal").modal("toggle");
        }
      }, {
        key: "fileBase64",
        value: function fileBase64(files) {
          var _this62 = this;

          this.TripImagesList = [];
          var reader = new FileReader();
          reader.readAsDataURL(files);

          reader.onload = function () {
            _this62.img = reader.result; // console.log(reader.result)

            var tipimageSingle = new src_app_classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__["TripImages"]();
            tipimageSingle.ImageUrl = _this62.img;

            _this62.TripImagesList.push(tipimageSingle);
          };

          reader.onloadend = function () {
            _this62.collectionAllImages(); // this.files = [];

          };

          reader.onerror = function (error) {
            console.log("Error: ", error);
          };
        }
      }, {
        key: "onSelect",
        value: function onSelect(event) {
          var _this63 = this;

          var filesToProcess = event.addedFiles;
          var processedCount = 0;
          var validFilesBatch = [];

          if (filesToProcess.length === 0) {
            return;
          }

          filesToProcess.forEach(function (file) {
            var mimeType = file.type;

            if (mimeType.match(/image\/*/) == null) {
              _this63.toastr.error("File '".concat(file.name, "': Only images are supported."), 'Error');

              processedCount++;

              if (processedCount === filesToProcess.length) {
                var _this63$files;

                (_this63$files = _this63.files).push.apply(_this63$files, validFilesBatch);
              }

              return;
            }

            var reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = function (_event) {
              var img = new Image();
              img.src = reader.result;

              img.onload = function () {
                if (img.width < 1500 || img.height < 500) {
                  _this63.toastr.error("File '".concat(file.name, "': dimensions must be at least 1500px width and 500px height."), 'Error');
                } else {
                  validFilesBatch.push(file);
                }

                processedCount++;

                if (processedCount === filesToProcess.length) {
                  var _this63$files2;

                  (_this63$files2 = _this63.files).push.apply(_this63$files2, validFilesBatch);
                }
              };

              img.onerror = function () {
                _this63.toastr.error("File '".concat(file.name, "': Could not load image to check dimensions."), 'Error');

                processedCount++;

                if (processedCount === filesToProcess.length) {
                  var _this63$files3;

                  (_this63$files3 = _this63.files).push.apply(_this63$files3, validFilesBatch);
                }
              };
            };

            reader.onerror = function (error) {
              _this63.toastr.error("File '".concat(file.name, "': Error reading file: ").concat(error), 'Error');

              processedCount++;

              if (processedCount === filesToProcess.length) {
                var _this63$files4;

                (_this63$files4 = _this63.files).push.apply(_this63$files4, validFilesBatch);
              }
            };
          });
        }
      }, {
        key: "onRemove",
        value: function onRemove(event) {
          // console.log(event);
          this.files.splice(this.files.indexOf(event), 1);
        }
      }, {
        key: "submitImagesAsDraft",
        value: function submitImagesAsDraft() {
          var _this64 = this;

          // console.log(this.files)
          if (this.files.length > 0) {
            this.files.forEach(function (element, key) {
              // console.log(element)
              _this64.fileBase64(element);
            });
          } else if (this.tripModel.TripImages.length > 0) {
            // console.log('------------here---------------')
            this.AddUpdateDraftTrip();
          } else {
            this.toastr.error("Please upload an image to continue", "Notification");
          }
        }
      }, {
        key: "collectionAllImages",
        value: function collectionAllImages() {
          // console.log(this.files.length)
          // console.log(this.TripImagesList.length)
          if (this.files.length === this.TripImagesList.length) {
            this.submitAfterCompleteImageProcess();
          }
        }
      }, {
        key: "submitAfterCompleteImageProcess",
        value: function submitAfterCompleteImageProcess() {
          var _this65 = this;

          if (this.tripModel) {
            // tslint:disable-next-line:prefer-for-of
            this.TempTripImagesList = [];

            for (var index = 0; index < this.TripImagesList.length; index++) {
              this.TempTripImages = new src_app_classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__["TempTripImagesList"]();
              this.TempTripImages.ImageString = this.TripImagesList[index].ImageUrl;
              this.TempTripImagesList.push(this.TempTripImages);
            }

            this.tripSerivce.AddTempTripImages(this.TempTripImagesList).subscribe(function (data) {
              if (data.Status) {
                // tslint:disable-next-line: prefer-for-of
                for (var i = 0; i < data.Data.length; i++) {
                  _this65.TripImages = new src_app_classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__["TripImages"]();
                  _this65.TripImages.ImageUrl = data.Data[i];

                  _this65.tripModel.TripImages.push(_this65.TripImages);
                }

                _this65.AddUpdateDraftTrip();
              }
            });
          }
        }
      }, {
        key: "deleteImage",
        value: function deleteImage(i) {
          // debugger;
          this.tripModel.TripImages.splice(i, 1); // this.AddUpdateDraftTrip('delete');
        }
      }, {
        key: "AddUpdateDraftTrip",
        value: function AddUpdateDraftTrip() {
          var _this66 = this;

          var callFrom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          this.DefultTrip.TripString = JSON.stringify(this.tripModel);
          this.DefultTrip.IS_TripImagesDone = true;
          this.settingUtitls.setDraftTrip = this.DefultTrip;
          this.tripSerivce.AddTripdefult(this.DefultTrip).subscribe(function (r) {
            if (r.Status) {
              _this66.files = [];
              callFrom !== "delete" ? $("#tripImagesModal").modal("hide") : "";
              $("#file-4").fileinput("clear");

              _this66.childEmitter.emit("Img");
            }
          });
        }
      }]);

      return TripImagesComponent;
    }();

    TripImagesComponent.ctorParameters = function () {
      return [{
        type: src_app_Services_TripService_trip_service__WEBPACK_IMPORTED_MODULE_3__["TripService"]
      }, {
        type: src_app_Services_Utilities_UtilitiesMethods_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesMethodsService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], TripImagesComponent.prototype, "childEmitter", void 0);
    TripImagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-tripImages",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tripImages.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/posttrip/TripItinerary/TripImages/tripImages/tripImages.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tripImages.component.css */
      "./src/app/posttrip/TripItinerary/TripImages/tripImages/tripImages.component.css"))["default"]]
    })], TripImagesComponent);
    /***/
  },

  /***/
  "./src/app/posttrip/buy-boost-packages/buy-boost-packages-popup.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/posttrip/buy-boost-packages/buy-boost-packages-popup.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: BuyBoostPackagesPopUpComponent */

  /***/
  function srcAppPosttripBuyBoostPackagesBuyBoostPackagesPopupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuyBoostPackagesPopUpComponent", function () {
      return BuyBoostPackagesPopUpComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_classes_trip_BoostPackage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/classes/trip/BoostPackage */
    "./src/app/classes/trip/BoostPackage.ts");
    /* harmony import */


    var src_app_Services_BoostTrip_boost_trip_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Services/BoostTrip/boost-trip.service */
    "./src/app/Services/BoostTrip/boost-trip.service.ts");
    /* harmony import */


    var src_app_Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Services/Utilities/genaric.service */
    "./src/app/Services/Utilities/genaric.service.ts");

    var BuyBoostPackagesPopUpComponent = /*#__PURE__*/function () {
      function BuyBoostPackagesPopUpComponent(boostTrip, genricUtlitis) {
        _classCallCheck(this, BuyBoostPackagesPopUpComponent);

        this.boostTrip = boostTrip;
        this.genricUtlitis = genricUtlitis;
        this.onDistory = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showPayment = false;
        this.boostPackgesList = [];
      }

      _createClass(BuyBoostPackagesPopUpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          $('#exampleModal').modal({
            backdrop: 'static',
            keyboard: false
          });
          this.getBoostPackges();
        }
      }, {
        key: "closeModel",
        value: function closeModel() {
          $("body").removeClass("modal-open");
          $("#backdrop").remove();
          $(".modal-backdrop").remove();
          this.onDistory.next();
        }
      }, {
        key: "getBoostPackges",
        value: function getBoostPackges() {
          var _this67 = this;

          this.boostTrip.GetTripBoostPackages().subscribe(function (data) {
            if (data.Status) {
              _this67.boostPackgesList = data.Data;
            }
          });
        }
      }, {
        key: "Buy",
        value: function Buy(value) {
          var _this68 = this;

          var subscribeBoostPackage = new src_app_classes_trip_BoostPackage__WEBPACK_IMPORTED_MODULE_2__["SubscribeBoostPackage"]();
          subscribeBoostPackage.Id = 0;
          subscribeBoostPackage.BoostPackageId = value.Id;
          subscribeBoostPackage.UId = 0;
          subscribeBoostPackage.RemainingBoostTrips = value.NoTrips;
          subscribeBoostPackage.IS_Payment = false;
          subscribeBoostPackage.IS_Active = value.IsActive;
          subscribeBoostPackage.IS_Deleted = false;
          subscribeBoostPackage.IS_Promo = value.Is_Promo;
          subscribeBoostPackage.PromoCode = value.PromoCode;
          subscribeBoostPackage.Title = value.Title;
          subscribeBoostPackage.Price = value.Price;
          subscribeBoostPackage.Discount = value.Discount;

          if (confirm('Are you sure?')) {
            this.boostTrip.BoostPackageSubscription(subscribeBoostPackage).subscribe(function (data) {
              if (data.Status) {
                _this68.showPayment = true;
                _this68.orderId = data.Data.Id;

                _this68.genricUtlitis.showMessageToast(data.Message, true, 'Success!');
              } else {
                _this68.genricUtlitis.showMessageToast(data.Message, false, 'Error!');
              }
            });
          } else {
            return;
          }
        }
      }]);

      return BuyBoostPackagesPopUpComponent;
    }();

    BuyBoostPackagesPopUpComponent.ctorParameters = function () {
      return [{
        type: src_app_Services_BoostTrip_boost_trip_service__WEBPACK_IMPORTED_MODULE_3__["BoostTripService"]
      }, {
        type: src_app_Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_4__["GenaricService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], BuyBoostPackagesPopUpComponent.prototype, "onDistory", void 0);
    BuyBoostPackagesPopUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-buy-boost-packages',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./buy-boost-packages-popup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/posttrip/buy-boost-packages/buy-boost-packages-popup.component.html"))["default"]
    })], BuyBoostPackagesPopUpComponent);
    /***/
  },

  /***/
  "./src/app/posttrip/postsuccess/postsuccess.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/posttrip/postsuccess/postsuccess.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPosttripPostsuccessPostsuccessComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\nbody {\n  text-align: center;\n  padding: 40px 0;\n  background: #EBF0F5;\n}\n  h1 {\n    color: #88B04B;\n    font-family: \"Nunito Sans\", \"Helvetica Neue\", sans-serif;\n    font-weight: 900;\n    font-size: 40px;\n    margin-bottom: 10px;\n  }\n  p {\n    color: #404F5E;\n    font-family: \"Nunito Sans\", \"Helvetica Neue\", sans-serif;\n    font-size:20px;\n    margin: 0;\n  }\n  .ii {\n  color: #9ABC66;\n  font-size: 100px;\n  line-height: 200px;\n  margin-left:-15px;\n}\n  .card {\n  background: white;\n  padding: 60px;\n  border-radius: 4px;\n  box-shadow: 0 2px 3px #C8D0D8;\n  display: inline-block;\n  margin: 0 auto;\n}\n  /* .socialbody {\n    background: #D0D8DB;\n    padding-top: 60px;\n    padding-bottom: 40px;\n}\n\ntextarea {\n    resize: none;\n} */\n  .text {\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  white-space: nowrap;\n}\n  /* @charset \"UTF-8\"; */\n  .svg-inline--fa {\n  vertical-align: -0.200em;\n}\n  .rounded-social-buttons {\n  text-align: center;\n}\n  .rounded-social-buttons .social-button {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  width: 3.125rem;\n  height: 3.125rem;\n  border: 0.125rem solid transparent;\n  padding: 0;\n  text-decoration: none;\n  text-align: center;\n  color: #fefefe;\n  font-size: 1.5625rem;\n  font-weight: normal;\n  line-height: 2em;\n  border-radius: 1.6875rem;\n  transition: all 0.5s ease;\n  margin-right: 0.25rem;\n  margin-bottom: 0.25rem;\n}\n  .rounded-social-buttons .social-button:hover, .rounded-social-buttons .social-button:focus {\n  transform: rotate(360deg);\n}\n  .rounded-social-buttons .fa-twitter, .fa-facebook-f, .fa-linkedin, .fa-youtube, .fa-instagram {\n  font-size: 25px;\n}\n  .rounded-social-buttons .social-button.facebook {\n  background: #3b5998;\n}\n  .rounded-social-buttons .social-button.facebook:hover, .rounded-social-buttons .social-button.facebook:focus {\n  color: #3b5998;\n  background: #fefefe;\n  border-color: #3b5998;\n}\n  .rounded-social-buttons .social-button.twitter {\n  background: #55acee;\n}\n  .rounded-social-buttons .social-button.twitter:hover, .rounded-social-buttons .social-button.twitter:focus {\n  color: #55acee;\n  background: #fefefe;\n  border-color: #55acee;\n}\n  .rounded-social-buttons .social-button.linkedin {\n  background: #007bb5;\n}\n  /* .rounded-social-buttons .social-button.linkedin:hover, .rounded-social-buttons .social-button.linkedin:focus {\n  color: #007bb5;\n  background: #fefefe;\n  border-color: #007bb5;\n} */\n  .rounded-social-buttons .social-button.whatsapp {\n  background: #25D366;\n}\n  .rounded-social-buttons .social-button.whatsapp:hover, .rounded-social-buttons .social-button.whatsapp:focus {\n  color: #25D366;\n  background: #fefefe;\n  border-color: #25D366;\n}\n  .rounded-social-buttons .social-button.youtube {\n  background: #bb0000;\n}\n  /* .rounded-social-buttons .social-button.youtube:hover, .rounded-social-buttons .social-button.youtube:focus {\n  color: #bb0000;\n  background: #fefefe;\n  border-color: #bb0000;\n} */\n  .rounded-social-buttons .social-button.instagram {\n  background: #125688;\n}\n  /* .rounded-social-buttons .social-button.instagram:hover, .rounded-social-buttons .social-button.instagram:focus {\n  color: #125688;\n  background: #fefefe;\n  border-color: #125688;\n} */\n";
    /***/
  },

  /***/
  "./src/app/posttrip/postsuccess/postsuccess.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/posttrip/postsuccess/postsuccess.component.ts ***!
    \***************************************************************/

  /*! exports provided: PostsuccessComponent */

  /***/
  function srcAppPosttripPostsuccessPostsuccessComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsuccessComponent", function () {
      return PostsuccessComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var PostsuccessComponent = /*#__PURE__*/function () {
      function PostsuccessComponent(actRoute) {
        _classCallCheck(this, PostsuccessComponent);

        this.actRoute = actRoute;
      }

      _createClass(PostsuccessComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.tripId = this.actRoute.snapshot.params.id; // share
          //  var returnUrl = window.location.href;
          //  console.log(returnUrl)

          var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].shareTripBasePath + this.tripId;
          this.shareFB = "https://www.facebook.com/dialog/feed?app_id=962780807415498&redirect_uri=" + url + "&link=" + url;
          this.shareTwitter = "https://twitter.com/intent/tweet?url=" + url;
          this.shareLinkedIn = "https://www.linkedin.com/sharing/share-offsite/?url=" + url;
          this.shareWhatsApp = "https://api.whatsapp.com/send?text=Check out this trip on TripJero: ".concat(url);
        }
      }]);

      return PostsuccessComponent;
    }();

    PostsuccessComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    PostsuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-postsuccess',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./postsuccess.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/posttrip/postsuccess/postsuccess.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./postsuccess.component.css */
      "./src/app/posttrip/postsuccess/postsuccess.component.css"))["default"]]
    })], PostsuccessComponent);
    /***/
  },

  /***/
  "./src/app/posttrip/posttrip.component.css":
  /*!*************************************************!*\
    !*** ./src/app/posttrip/posttrip.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPosttripPosttripComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::ng-deep .mat-horizontal-stepper-header {\n    pointer-events: none !important;\n}\n\n::ng-deep .mat-horizontal-stepper-header {\n    list-style-type: none;\n    font-size: 1vw;\n    margin-top: 20px;\n    font-family: 'Montserrat-Regular';\n    float: left;\n    position: relative;\n    /* background-color: rgb(255, 255, 255); */\n    /* justify-content: space-between !important; */\n    border-radius: 12px;\n    box-shadow: 2px 2px 8px 2px rgb(0 0 0 / 20%);\n}\n\n/* ::ng-deep .mat-step-header[aria-selected=\"true\"] {\n\n    background-color: #F4AF26 !important;\n\n    color: white;\n\n} */\n\n.btn-primary {\n    margin-left: 20px;\n    width: 80px;\n}\n\n/* ::ng-deep .mat-stepper-horizontal{\n    padding: 50px;\n} */\n\n/* fieldset {\n\n    padding: 50px;\n} */\n\n.remove-icon {\n    margin-top: -25px;\n    position: absolute;\n}\n\n.intititle {\n    margin-left: 12px;\n}\n\ninput[type=\"file\"] {\n    display: none;\n}";
    /***/
  },

  /***/
  "./src/app/posttrip/posttrip.component.ts":
  /*!************************************************!*\
    !*** ./src/app/posttrip/posttrip.component.ts ***!
    \************************************************/

  /*! exports provided: PosttripComponent */

  /***/
  function srcAppPosttripPosttripComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PosttripComponent", function () {
      return PosttripComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _TripItinerary_ItineraryPlane_ItineraryPlane_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./TripItinerary/ItineraryPlane/ItineraryPlane.component */
    "./src/app/posttrip/TripItinerary/ItineraryPlane/ItineraryPlane.component.ts");
    /* harmony import */


    var _TripItinerary_Facilities_facilities_trip_facilities_trip_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./TripItinerary/Facilities/facilities-trip/facilities-trip.component */
    "./src/app/posttrip/TripItinerary/Facilities/facilities-trip/facilities-trip.component.ts");
    /* harmony import */


    var _TripItinerary_TripImages_tripImages_tripImages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./TripItinerary/TripImages/tripImages/tripImages.component */
    "./src/app/posttrip/TripItinerary/TripImages/tripImages/tripImages.component.ts");
    /* harmony import */


    var _classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../classes/trip/TripModel */
    "./src/app/classes/trip/TripModel.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _Services_TripService_trip_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../Services/TripService/trip.service */
    "./src/app/Services/TripService/trip.service.ts");
    /* harmony import */


    var _Services_PromoService_promoservice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../Services/PromoService/promoservice.service */
    "./src/app/Services/PromoService/promoservice.service.ts");
    /* harmony import */


    var _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../Services/Utilities/genaric.service */
    "./src/app/Services/Utilities/genaric.service.ts");
    /* harmony import */


    var _TripItinerary_PostFinalTrip_PostFinalTrip_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./TripItinerary/PostFinalTrip/PostFinalTrip.component */
    "./src/app/posttrip/TripItinerary/PostFinalTrip/PostFinalTrip.component.ts");
    /* harmony import */


    var _Services_Utilities_UtilitiesMethods_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../Services/Utilities/UtilitiesMethods.service */
    "./src/app/Services/Utilities/UtilitiesMethods.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _Services_Users_UseraccessService_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../Services/Users/UseraccessService.service */
    "./src/app/Services/Users/UseraccessService.service.ts");
    /* harmony import */


    var ng_wizard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ng-wizard */
    "./node_modules/ng-wizard/fesm2015/ng-wizard.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/esm2015/stepper.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _Services_Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../Services/Utilities/triputilites.service */
    "./src/app/Services/Utilities/triputilites.service.ts");

    var PosttripComponent = /*#__PURE__*/function () {
      function PosttripComponent(componentFactoryResolver, datepipe, formBuilder, tripSerivce, tripPromoService, genricUtlitis, settingUtitls, router, actRoute, globalService, ngWizardService, _formBuilder, translate, tripUtilites) {
        _classCallCheck(this, PosttripComponent);

        this.componentFactoryResolver = componentFactoryResolver;
        this.datepipe = datepipe;
        this.formBuilder = formBuilder;
        this.tripSerivce = tripSerivce;
        this.tripPromoService = tripPromoService;
        this.genricUtlitis = genricUtlitis;
        this.settingUtitls = settingUtitls;
        this.router = router;
        this.actRoute = actRoute;
        this.globalService = globalService;
        this.ngWizardService = ngWizardService;
        this._formBuilder = _formBuilder;
        this.translate = translate;
        this.tripUtilites = tripUtilites;
        this.baseImgURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].domainToken;
        this.showFormError = false;
        this.submitted = false;
        this.isLinear = true;
        this.selectedValue = 0;
        this.config = {
          keyNavigation: true,
          theme: ng_wizard__WEBPACK_IMPORTED_MODULE_16__["THEME"].arrows,
          toolbarSettings: {
            // toolbarExtraButtons: [
            //   { text: 'Finish', class: 'btn btn-info', event: () => { alert("Finished!!!"); } }
            // ],
            showNextButton: false,
            showPreviousButton: false
          },
          anchorSettings: {
            anchorClickable: true,
            markDoneStep: true,
            markAllPreviousStepsAsDone: true
          }
        };
        this.promoDiscount = 0;
        this.greater = false;
        this.lesser = false;
        this.isPromoSelected = false;
        this.promoExist = false;
        this.error = {
          isError: false,
          errorMessage: ''
        };
        this.photosStepCompleted = false;
        this.fromCountries = [];
        this.fromCities = [];
        this.toCountries = [];
        this.toCities = [];
        this.tripModel = new _classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_5__["TripModel"]();
        this.tripCategories = [];
        this.tripVisitPlaces = [];
        this.usersPromoList = [];
        this.DefultTrip = new _classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_5__["TripDefult"]();
        this.drafList = [];
        console.log('------post trip constructor------');
      }

      _createClass(PosttripComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this69 = this;

          // 2020-05-10
          this.today = new Date();
          this.minDateStart = this.datepipe.transform(new Date(this.today.setDate(this.today.getDate() + 1)), 'yyyy-MM-dd');
          this.minDateEnd = this.datepipe.transform(new Date(this.today.setDate(this.today.getDate() + 2)), 'yyyy-MM-dd'); // console.log(this.globalService.get_globalUser);

          this.draftTripId = this.actRoute.snapshot.params.id;
          this.loadFormValidation();
          this.applyDiscount();
          this.tripModel.TripBasicInfo.CategoriesId = 0;
          this.tripModel.tripPrices.PromoCode = '';
          this.ShowOtherContent = false;
          this.loadCategories();
          this.loadUserPromo();
          this.getCountries(function () {
            if (_this69.draftTripId > 0) {
              _this69.loadAllDraftTrips(_this69.draftTripId);
            }
          });
          console.log('------post trip ng on init------');
        }
      }, {
        key: "getCountries",
        value: function getCountries(callback) {
          var _this70 = this;

          this.tripUtilites.GetCountry().subscribe(function (data) {
            if (data.Status) {
              _this70.fromCountries = data.Data;
              _this70.toCountries = data.Data;
              callback();
            }
          });
        }
      }, {
        key: "onFromCountryChange",
        value: function onFromCountryChange() {
          var _this71 = this;

          this.postForm.controls.FromCity.setValue('');
          this.postForm.controls.FromVistId.setValue('');
          var selectedCountry = this.fromCountries.find(function (c) {
            return c.Name === _this71.postForm.value.FromCountry;
          });

          if (selectedCountry) {
            this.tripUtilites.GetVisitPlace(selectedCountry.Id).subscribe(function (data) {
              if (data.Status) {
                _this71.fromCities = data.Data;
              } else {
                _this71.fromCities = [];
              }
            });
          } else {
            this.fromCities = [];
          }
        }
      }, {
        key: "onToCountryChange",
        value: function onToCountryChange() {
          var _this72 = this;

          this.postForm.controls.ToCity.setValue('');
          this.postForm.controls.ToVistId.setValue('');
          var selectedCountry = this.toCountries.find(function (c) {
            return c.Name === _this72.postForm.value.ToCountry;
          });

          if (selectedCountry) {
            this.tripUtilites.GetVisitPlace(selectedCountry.Id).subscribe(function (data) {
              if (data.Status) {
                _this72.toCities = data.Data;
              } else {
                _this72.toCities = [];
              }
            });
          } else {
            this.toCities = [];
          }
        }
      }, {
        key: "onFromCityChange",
        value: function onFromCityChange() {
          var cityName = this.postForm.value.FromCity;
          var selectedCity = this.fromCities.find(function (c) {
            return c.PartialVisitPlace === cityName;
          });

          if (selectedCity) {
            this.postForm.controls.FromVistId.setValue(selectedCity.Id);
          } else {
            this.postForm.controls.FromVistId.setValue('');
          }
        }
      }, {
        key: "onToCityChange",
        value: function onToCityChange() {
          var cityName = this.postForm.value.ToCity;
          var selectedCity = this.toCities.find(function (c) {
            return c.PartialVisitPlace === cityName;
          });

          if (selectedCity) {
            this.postForm.controls.ToVistId.setValue(selectedCity.Id);
          } else {
            this.postForm.controls.ToVistId.setValue('');
          }
        }
      }, {
        key: "compareTwoDates",
        value: function compareTwoDates() {
          this.error = {
            isError: false,
            errorMessage: ""
          };

          if (new Date(this.postForm.controls['EndDateTime'].value) < new Date(this.postForm.controls['StartDate'].value)) {
            this.error = {
              isError: true,
              errorMessage: "Trip cannot End before Start Date"
            };
          } else {
            this.lesser = false;
          }
        }
      }, {
        key: "loadFormValidation",
        value: function loadFormValidation() {
          if (!this.draftTripId) {
            this.postForm = this.formBuilder.group({
              Title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              Details: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              FeaturesImage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              CategoriesId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              StartDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              EndDateTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              FromCountry: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              FromVistId: [''],
              FromCity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              ToCountry: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              ToVistId: [''],
              ToCity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              ActualAmount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].min(1000)])],
              DiscountPercentage: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].max(100)])],
              CurrentAmount: [null],
              Promo_Key: [null],
              HavePromo: [null]
            });
          } else {
            this.postForm = this.formBuilder.group({
              Title: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              Details: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              FeaturesImage: [null],
              CategoriesId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              StartDate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              EndDateTime: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              FromCountry: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              FromVistId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              FromCity: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              ToCountry: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              ToVistId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              ToCity: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              ActualAmount: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].min(1000)])],
              DiscountPercentage: [0],
              CurrentAmount: [null],
              Promo_Key: [null],
              HavePromo: [null]
            });
            console.log('postForm after initialization (draft):', this.postForm);
          } // this.postForm.get('StartDateTime').valueChanges.subscribe(val => {
          //   if (val) {
          //     const startF = this.postForm.get('StartDateTime');
          //     const endF = this.postForm.get('EndDateTime');
          //     this.minDateStart = startF.value;
          //     this.minDateEnd = startF.value;
          //     if (new Date(startF.value) > new Date(endF.value)) {
          //       endF.setValue(this.minDateStart);
          //     }
          //     console.log(startF.value);
          //   }
          // });
          // this.postForm.get('EndDateTime').valueChanges.subscribe(val => {
          //   if (val) {
          //     const MyField = this.postForm.get('EndDateTime');
          //     console.log(MyField.value);
          //   }
          // });


          this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
          });
          this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.postForm.controls;
        }
      }, {
        key: "preview",
        value: function preview(files) {
          var _this73 = this;

          if (files.length === 0) {
            return;
          }

          var mimeType = files[0].type;

          if (mimeType.match(/image\/*/) == null) {
            this.message = 'Only images are supported.';
            return;
          }

          var reader = new FileReader();
          this.imagePath = files;
          reader.readAsDataURL(files[0]);

          reader.onload = function (_event) {
            var img = new Image();
            img.src = reader.result;

            img.onload = function () {
              if (img.width < 1500 || img.height < 500) {
                _this73.genricUtlitis.showMessageToast('Image dimensions must be at least 1500px width and 500px height.', false, _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_11__["PrintMedia"].Error);

                _this73.imgURL = null; // Clear preview

                _this73.postForm.controls.FeaturesImage.setValue(null); // Clear form control


                return;
              }

              _this73.imgURL = reader.result;
              _this73.TempTripImagesList = [];
              _this73.TempTripImages = new _classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_5__["TempTripImagesList"]();
              _this73.TempTripImages.ImageString = _this73.imgURL;

              _this73.TempTripImagesList.push(_this73.TempTripImages);

              _this73.tripSerivce.AddTempTripImages(_this73.TempTripImagesList).subscribe(function (data) {
                if (data.Status) {
                  _this73.tripModel.TripBasicInfo.FeaturesImage = data.Data[0];
                  _this73.TempTripImages.ImageString = '';
                  _this73.imgURL = _this73.baseImgURL + data.Data[0];
                }
              });
            };
          };
        }
      }, {
        key: "loadItineraryInfo",
        value: function loadItineraryInfo() {
          var _this74 = this;

          this.ItineraryInfo.clear();
          var factory = this.componentFactoryResolver.resolveComponentFactory(_TripItinerary_ItineraryPlane_ItineraryPlane_component__WEBPACK_IMPORTED_MODULE_2__["ItineraryPlaneComponent"]);
          this.cmpRef = this.ItineraryInfo.createComponent(factory);
          this.cmpRef.instance.totalNumberofDays = this.genricUtlitis.getNumberOfDaysDiff(this.tripModel.TripBasicInfo.StartDateTime, this.tripModel.TripBasicInfo.EndDateTime); // tslint:disable-next-line:align

          if (!!this.cmpRef.instance.childEmitter) {
            this.cmpRef.instance.childEmitter.subscribe(function (data) {
              _this74.updateButtonStatus(data);
            });
          }
        }
      }, {
        key: "loadFaclitiesInfo",
        value: function loadFaclitiesInfo() {
          var _this75 = this;

          this.FacilitiesInfo.clear();
          var factory = this.componentFactoryResolver.resolveComponentFactory(_TripItinerary_Facilities_facilities_trip_facilities_trip_component__WEBPACK_IMPORTED_MODULE_3__["FacilitiesTripComponent"]);
          this.cmpRef = this.FacilitiesInfo.createComponent(factory); // tslint:disable-next-line:align

          this.cmpRef.instance.DefultTrip = this.settingUtitls.getDraftTrip; // tslint:disable-next-line:align

          if (!!this.cmpRef.instance.childEmitter) {
            this.cmpRef.instance.childEmitter.subscribe(function (data) {
              _this75.updateButtonStatus(data);
            });
          }
        }
      }, {
        key: "loadTripImages",
        value: function loadTripImages() {
          var _this76 = this;

          this.TripImagesInfo.clear();
          var factory = this.componentFactoryResolver.resolveComponentFactory(_TripItinerary_TripImages_tripImages_tripImages_component__WEBPACK_IMPORTED_MODULE_4__["TripImagesComponent"]);
          this.cmpRef = this.TripImagesInfo.createComponent(factory); // tslint:disable-next-line:align

          if (!!this.cmpRef.instance.childEmitter) {
            this.cmpRef.instance.childEmitter.subscribe(function (data) {
              _this76.updateButtonStatus(data);
            });
          } // Add this subscription


          if (!!this.cmpRef.instance.hasImagesChange) {
            this.cmpRef.instance.hasImagesChange.subscribe(function (status) {
              _this76.photosStepCompleted = status;
            });
          }
        }
      }, {
        key: "loadTripTermForm",
        value: function loadTripTermForm() {
          this.TermnCondition.clear();
          var factory = this.componentFactoryResolver.resolveComponentFactory(_TripItinerary_PostFinalTrip_PostFinalTrip_component__WEBPACK_IMPORTED_MODULE_12__["PostFinalTripComponent"]);
          this.cmpRef = this.TermnCondition.createComponent(factory); // tslint:disable-next-line:align

          if (!!this.cmpRef.instance.childEmitter) {
            this.cmpRef.instance.childEmitter.subscribe(this.updateButtonStatus);
          }
        }
      }, {
        key: "loadCategories",
        value: function loadCategories() {
          var _this77 = this;

          this.tripSerivce.GetTripCategories().subscribe(function (data) {
            if (data.Status) {
              _this77.tripCategories = data.Data; // console.log(data);
            }
          });
        }
      }, {
        key: "loadVisitPlaces",
        value: function loadVisitPlaces() {
          var _this78 = this;

          this.tripSerivce.GetTripVisitPlaces().subscribe(function (data) {
            if (data) {
              _this78.tripVisitPlaces = data.Data;
            }
          });
        }
      }, {
        key: "loadUserPromo",
        value: function loadUserPromo() {
          var _this79 = this;

          this.tripPromoService.GetPromosByUser().subscribe(function (data) {
            if (data && data.Status) {
              _this79.usersPromoList = data.Data;

              for (var i = 0; i < _this79.usersPromoList.length; i++) {
                if (_this79.usersPromoList[i].ISExpire == 0) {
                  _this79.promoExist = true;
                }
              } // console.log(this.promoExist);

            }
          });
        }
      }, {
        key: "onPromoChange",
        value: function onPromoChange(event) {
          console.log(event.target.checked);
          this.isPromoSelected = event.target.checked;
          this.tripModel.tripPrices.HavePromo = !this.tripModel.tripPrices.HavePromo;
          console.log(this.tripModel.tripPrices.HavePromo);
        }
      }, {
        key: "changeLesser",
        value: function changeLesser() {
          this.lesser = false;
        }
      }, {
        key: "changEndDate",
        value: function changEndDate(event) {
          this.endDate = new Date(event.target.value);
          this.greater = false;
          this.minDateEnd = this.datepipe.transform(this.endDate.setDate(this.endDate.getDate()), 'yyyy-MM-dd');
        }
      }, {
        key: "onPromoSelect",
        value: function onPromoSelect(event) {
          // console.log(event.target.value);
          if (event.target.value != "") {
            for (var i = 0; i < this.usersPromoList.length; i++) {
              this.promoDiscount = this.usersPromoList[i].DiscountPercentage;
            }
          } else {
            this.promoDiscount = 0;
          }
        }
      }, {
        key: "sumbiteTripsBasicInfo",
        value: function sumbiteTripsBasicInfo() {
          var _this80 = this;

          console.log('sumbiteTripsBasicInfo called');
          debugger;
          this.submitted = true;

          if (this.postForm.value.HasPromo) {
            if (this.postForm.value.Pro === '') {
              this.ShowOtherContent = true;
              this.genricUtlitis.showMessageToast('Please select Promo', false, _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_11__["PrintMedia"].Error);
              return;
            }
          }

          console.log('postForm.invalid:', this.postForm.invalid);

          if (this.postForm.invalid) {
            var errorMessages = 'Please correct the following errors:\n';
            Object.keys(this.postForm.controls).forEach(function (key) {
              var controlErrors = _this80.postForm.get(key).errors;

              if (controlErrors != null) {
                errorMessages += "- ".concat(key, ": ").concat(JSON.stringify(controlErrors), "\n");
              }
            });
            this.genricUtlitis.showMessageToast(errorMessages, false, _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_11__["PrintMedia"].Error);
            return;
          }

          if (this.error.isError === true) {
            console.log('Date error:', this.error.errorMessage);
            debugger;
            return;
          }

          if (this.lesser || this.greater) {
            console.log('Date range error: lesser=' + this.lesser + ', greater=' + this.greater);
            debugger;
            this.genricUtlitis.showMessageToast('Trip start date should be greater then today', false, _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_11__["PrintMedia"].Error);
            return;
          }

          console.log('Form is valid, proceeding with submission.');

          if (this.settingUtitls.getDraftTrip && this.draftTripId) {
            this.DefultTrip = this.settingUtitls.getDraftTrip;
            this.tripModel = JSON.parse(this.DefultTrip.TripString); // return false;
          }

          this.tripModel.TripBasicInfo.Title = this.postForm.value.Title;
          this.tripModel.TripBasicInfo.Details = this.postForm.value.Details;
          this.tripModel.TripBasicInfo.CategoriesId = this.postForm.value.CategoriesId;
          this.tripModel.TripBasicInfo.StartDateTime = this.postForm.value.StartDate;
          this.tripModel.TripBasicInfo.EndDateTime = this.postForm.value.EndDateTime;
          var fromCountryName = this.postForm.value.FromCountry;
          var fromCityName = this.postForm.value.FromCity;
          var toCountryName = this.postForm.value.ToCountry;
          var toCityName = this.postForm.value.ToCity;
          this.tripModel.TripBasicInfo.FromCountryName = fromCountryName;
          this.tripModel.TripBasicInfo.FromCityName = fromCityName;
          this.tripModel.TripBasicInfo.ToCountryName = toCountryName;
          this.tripModel.TripBasicInfo.ToCityName = toCityName;
          var selectedFromCountry = this.fromCountries.find(function (c) {
            return c.Name === fromCountryName;
          });

          if (selectedFromCountry) {
            this.tripModel.TripBasicInfo.FromCountry = selectedFromCountry.Id;
          }

          var selectedFromCity = this.fromCities.find(function (c) {
            return c.PartialVisitPlace === fromCityName;
          });

          if (selectedFromCity) {
            this.tripModel.TripBasicInfo.FromVistId = selectedFromCity.Id;
          }

          var selectedToCountry = this.toCountries.find(function (c) {
            return c.Name === toCountryName;
          });

          if (selectedToCountry) {
            this.tripModel.TripBasicInfo.ToCountry = selectedToCountry.Id;
          }

          var selectedToCity = this.toCities.find(function (c) {
            return c.PartialVisitPlace === toCityName;
          });

          if (selectedToCity) {
            this.tripModel.TripBasicInfo.ToVistId = selectedToCity.Id;
          }

          this.tripModel.tripPrices.ActualAmount = this.postForm.value.ActualAmount;
          this.tripModel.tripPrices.DiscountPercentage = this.postForm.value.DiscountPercentage;
          this.tripModel.tripPrices.HavePromo = this.postForm.value.HavePromo;
          this.tripModel.tripPrices.PromoCode = this.postForm.value.Promo_Key;
          this.tripModel.TripBasicInfo.Duration = this.genricUtlitis.getNumberOfDaysDiff(this.tripModel.TripBasicInfo.StartDateTime, this.tripModel.TripBasicInfo.EndDateTime).toString();
          this.tripModel.TripBasicInfo.BaseStringFeaturesImages = this.imgURL;
          this.DefultTrip.TripString = JSON.stringify(this.tripModel);
          this.settingUtitls.setDraftTrip = this.DefultTrip;
          this.tripSerivce.AddTripdefult(this.DefultTrip).subscribe(function (data) {
            if (data.Status) {
              _this80.DefultTrip.Id = data.Data.Id;

              _this80.genricUtlitis.showMessageToast('Trip Basic Info saved as draft', true, _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_11__["PrintMedia"].Conformation);

              if (_this80.DefultTrip.Id && _this80.DefultTrip.Id > 0) {
                _this80.showNextStep();

                _this80.loadItineraryInfo();
              }
            }
          });
        }
      }, {
        key: "applyDiscount",
        value: function applyDiscount() {
          var actualAmount = this.postForm.value.ActualAmount;
          var discountPercentage = this.postForm.value.DiscountPercentage; // Use 'let' to allow modification
          // Cap discountPercentage at 100 if it exceeds it

          if (typeof discountPercentage === 'number' && !isNaN(discountPercentage) && discountPercentage > 100) {
            discountPercentage = 100;
            this.postForm.controls.DiscountPercentage.setValue(100, {
              emitEvent: false
            }); // Update form control without triggering another change event
          }

          var validActualAmount = typeof actualAmount === 'number' && !isNaN(actualAmount) ? actualAmount : 0;
          var validDiscountPercentage = typeof discountPercentage === 'number' && !isNaN(discountPercentage) ? Math.max(0, Math.min(100, discountPercentage)) : 0;
          this.tripModel.tripPrices.CurrentAmount = validActualAmount * (100 - validDiscountPercentage) / 100;
          this.postForm.controls.CurrentAmount.setValue(this.tripModel.tripPrices.CurrentAmount);
        }
      }, {
        key: "updateButtonStatus",
        value: function updateButtonStatus(btnName) {
          var _self = this;

          switch (btnName) {
            case 'Fac':
              {
                _self.showNextStep();

                _self.loadTripImages();

                break;
              }

            case 'Itr':
              {
                _self.showNextStep();

                if (!document.getElementById('facilitesdiv')) {
                  _self.loadFaclitiesInfo();
                }

                break;
              }

            case 'Img':
              {
                _self.showNextStep();

                _self.loadTripTermForm();

                break;
              }
          }
        }
      }, {
        key: "loadAllDraftTrips",
        value: function loadAllDraftTrips(Id) {
          var _this81 = this;

          this.tripSerivce.GetDraftTripById(Id).subscribe(function (data) {
            if (data && data.Status) {
              _this81.DefultTrip = data.Data;
              _this81.tripModel = JSON.parse(_this81.DefultTrip.TripString);
              console.log('Loaded draft trip model:', _this81.tripModel);
              _this81.imgURL = _this81.tripModel.TripBasicInfo.BaseStringFeaturesImages && _this81.tripModel.TripBasicInfo.BaseStringFeaturesImages;
              _this81.settingUtitls.setDraftTrip = _this81.DefultTrip;

              _this81.postForm.controls.CurrentAmount.setValue(_this81.tripModel.tripPrices.CurrentAmount);

              _this81.postForm.controls.Title.setValue(_this81.tripModel.TripBasicInfo.Title);

              _this81.postForm.controls.Details.setValue(_this81.tripModel.TripBasicInfo.Details);

              _this81.postForm.controls.CategoriesId.setValue(_this81.tripModel.TripBasicInfo.CategoriesId);

              _this81.postForm.controls.StartDate.setValue(_this81.tripModel.TripBasicInfo.StartDateTime);

              _this81.postForm.controls.EndDateTime.setValue(_this81.tripModel.TripBasicInfo.EndDateTime);

              _this81.postForm.controls.ActualAmount.setValue(_this81.tripModel.tripPrices.ActualAmount);

              _this81.postForm.controls.DiscountPercentage.setValue(_this81.tripModel.tripPrices.DiscountPercentage);

              _this81.postForm.controls.HavePromo.setValue(_this81.tripModel.tripPrices.HavePromo);

              _this81.postForm.controls.Promo_Key.setValue(_this81.tripModel.tripPrices.PromoCode);

              _this81.applyDiscount();

              var cityLoadingObservables = [];
              var fromCountryId;
              var toCountryId;
              console.log('FromCountry:', _this81.tripModel.TripBasicInfo.FromCountry);

              if (_this81.tripModel.TripBasicInfo.FromCountry) {
                var fromCountry = _this81.fromCountries.find(function (c) {
                  return c.Id == _this81.tripModel.TripBasicInfo.FromCountry;
                });

                console.log('Found fromCountry:', fromCountry);

                if (fromCountry) {
                  _this81.postForm.controls.FromCountry.setValue(fromCountry.Name);

                  fromCountryId = fromCountry.Id;
                  cityLoadingObservables.push(_this81.tripUtilites.GetVisitPlace(fromCountry.Id));
                }
              }

              console.log('ToCountry:', _this81.tripModel.TripBasicInfo.ToCountry);

              if (_this81.tripModel.TripBasicInfo.ToCountry) {
                var toCountry = _this81.toCountries.find(function (c) {
                  return c.Id == _this81.tripModel.TripBasicInfo.ToCountry;
                });

                console.log('Found toCountry:', toCountry);

                if (toCountry) {
                  _this81.postForm.controls.ToCountry.setValue(toCountry.Name);

                  toCountryId = toCountry.Id;
                  cityLoadingObservables.push(_this81.tripUtilites.GetVisitPlace(toCountry.Id));
                }
              }

              if (cityLoadingObservables.length > 0) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])(cityLoadingObservables).subscribe(function (cityDataArray) {
                  var fromCityData = [];
                  var toCityData = [];
                  var currentIndex = 0;

                  if (fromCountryId !== undefined) {
                    fromCityData = cityDataArray[currentIndex].Data;
                    currentIndex++;
                  }

                  if (toCountryId !== undefined) {
                    toCityData = cityDataArray[currentIndex].Data;
                  }

                  if (fromCityData.length > 0) {
                    _this81.fromCities = fromCityData;
                    console.log("Loaded fromCities:", _this81.fromCities);
                    console.log("FromVistId:", _this81.tripModel.TripBasicInfo.FromVistId);

                    if (_this81.tripModel.TripBasicInfo.FromVistId) {
                      var fromCity = _this81.fromCities.find(function (c) {
                        return c.Id == _this81.tripModel.TripBasicInfo.FromVistId;
                      });

                      console.log("Found fromCity:", fromCity);

                      if (fromCity) {
                        _this81.postForm.controls.FromVistId.setValue(_this81.tripModel.TripBasicInfo.FromVistId);

                        _this81.postForm.controls.FromCity.setValue(fromCity.PartialVisitPlace);
                      }
                    }
                  }

                  if (toCityData.length > 0) {
                    _this81.toCities = toCityData;
                    console.log("Loaded toCities:", _this81.toCities);
                    console.log("ToVistId:", _this81.tripModel.TripBasicInfo.ToVistId);

                    if (_this81.tripModel.TripBasicInfo.ToVistId) {
                      var toCity = _this81.toCities.find(function (c) {
                        return c.Id == _this81.tripModel.TripBasicInfo.ToVistId;
                      });

                      console.log("Found toCity:", toCity);

                      if (toCity) {
                        _this81.postForm.controls.ToVistId.setValue(_this81.tripModel.TripBasicInfo.ToVistId);

                        _this81.postForm.controls.ToCity.setValue(toCity.PartialVisitPlace);
                      }
                    }
                  }

                  _this81.finalizeDraftLoading();
                });
              } else {
                _this81.finalizeDraftLoading();
              }
            }
          });
        }
      }, {
        key: "finalizeDraftLoading",
        value: function finalizeDraftLoading() {
          if (this.minDateStart > this.tripModel.TripBasicInfo.StartDateTime) {
            this.greater = true;
          }

          if (this.minDateStart > this.tripModel.TripBasicInfo.EndDateTime) {
            this.lesser = true;
          }

          this.postForm.updateValueAndValidity();
        }
      }, {
        key: "showPreviousStep",
        value: function showPreviousStep() {
          this.stepper.previous();
        }
      }, {
        key: "showNextStep",
        value: function showNextStep() {
          this.stepper.next();
        }
      }, {
        key: "resetWizard",
        value: function resetWizard(event) {
          this.ngWizardService.reset();
        }
      }, {
        key: "setTheme",
        value: function setTheme(theme) {
          this.ngWizardService.theme(theme);
        }
      }, {
        key: "stepChanged",
        value: function stepChanged(args) {// console.log(args.step);
        }
      }]);

      return PosttripComponent;
    }();

    PosttripComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _Services_TripService_trip_service__WEBPACK_IMPORTED_MODULE_9__["TripService"]
      }, {
        type: _Services_PromoService_promoservice_service__WEBPACK_IMPORTED_MODULE_10__["PromoserviceService"]
      }, {
        type: _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_11__["GenaricService"]
      }, {
        type: _Services_Utilities_UtilitiesMethods_service__WEBPACK_IMPORTED_MODULE_13__["UtilitiesMethodsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"]
      }, {
        type: _Services_Users_UseraccessService_service__WEBPACK_IMPORTED_MODULE_15__["UseraccessService"]
      }, {
        type: ng_wizard__WEBPACK_IMPORTED_MODULE_16__["NgWizardService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateService"]
      }, {
        type: _Services_Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_20__["TriputilitesService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ItineraryPlan', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
      "static": false
    })], PosttripComponent.prototype, "ItineraryInfo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('Facilities', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
      "static": false
    })], PosttripComponent.prototype, "FacilitiesInfo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('Photos', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
      "static": false
    })], PosttripComponent.prototype, "TripImagesInfo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('TermsAndConditions', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
      "static": false
    })], PosttripComponent.prototype, "TermnCondition", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stepper', {
      "static": false
    })], PosttripComponent.prototype, "stepper", void 0);
    PosttripComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-posttrip',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./posttrip.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/posttrip/posttrip.component.html"))["default"],
      providers: [{
        provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_17__["STEPPER_GLOBAL_OPTIONS"],
        useValue: {
          displayDefaultIndicatorType: false
        }
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./posttrip.component.css */
      "./src/app/posttrip/posttrip.component.css"))["default"]]
    })], PosttripComponent);
    /***/
  },

  /***/
  "./src/app/profile/profile.component.css":
  /*!***********************************************!*\
    !*** ./src/app/profile/profile.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Container for the label and box */\n.license-upload-container {\n    position: relative;\n    margin-top: 32px;\n}\n/* Style the label to overlap the border */\n.license-label {\n    position: absolute;\n    top: -14px;\n    left: 20px;\n    background: #fff;\n    padding: 0 8px;\n    font-size: 15px;\n    color: #222;\n    z-index: 2;\n}\n/* Style the upload box */\n.license-upload-box {\n    border: 1.5px solid #bdbdbd;\n    border-radius: 8px;\n    min-height: 130px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    background: #fff;\n    transition: border-color 0.2s;\n    position: relative;\n    padding: 32px 0;\n}\n/* Folder icon styling */\n.license-upload-box .jero-file-icon {\n    font-size: 48px;\n    color: #fbc02d;\n    margin-bottom: 8px;\n}\n/* Browse File text styling */\n.license-upload-box .jero-file-text {\n    font-size: 16px;\n    color: #444;\n}\n/* Hide the file input */\n.license-upload-box .jero-file-input {\n    display: none;\n}\n.nav-pills li:nth-child(1) a {\n    border-radius: 10px 0 0 10px;\n}\n.nav-pills li:nth-child(2) a {\n    border-radius: 0;\n}\n.nav-pills li:nth-child(3) a {\n    border-radius: 0;\n}\n.nav-pills li:nth-child(4) a {\n    border-radius: 0 10px 10px 0;\n}\n.nav-pills .active {\n    color: white;\n    background-color: #00A991;\n}\n.input-group .country-code-picker {\n  flex: 0 0 150px; /* Increased width */\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-right: 0;\n}\n.input-group input.form-control {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.tripjero-floating .input-group {\n  position: relative;\n  z-index: 1;\n}\n.tripjero-floating .input-group .form-control {\n  padding-left: 10px; /* Adjust padding to prevent text overlap with country code */\n}\n/* Adjust label position to account for country code picker */\n.tripjero-floating .float-label {\n  left: 20px; /* Adjust label position to account for country code picker */\n  z-index: 2; /* Ensure label is above the input group */\n}\n/* When the input inside the input-group is focused or has content, move the float-label */\n.tripjero-floating .input-group input.form-control:focus ~ .float-label,\n.tripjero-floating .input-group input.form-control:not(:placeholder-shown) ~ .float-label {\n  transform: translateY(-1.5rem) scale(0.75); /* Standard floating effect */\n  left: 160px; /* Keep it aligned with the start of the input group */\n  top: -14px; /* Ensure it's above the border */\n  background: #fff; /* Ensure background is white to cover border */\n  padding: 0 8px; /* Ensure padding is correct */\n}\n";
    /***/
  },

  /***/
  "./src/app/profile/profile.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/profile/profile.component.ts ***!
    \**********************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _classes_User_UsersModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../classes/User/UsersModal */
    "./src/app/classes/User/UsersModal.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _Services_Users_UsersService_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../Services/Users/UsersService.service */
    "./src/app/Services/Users/UsersService.service.ts");
    /* harmony import */


    var _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../Services/Utilities/genaric.service */
    "./src/app/Services/Utilities/genaric.service.ts");
    /* harmony import */


    var _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../edit/edit.component */
    "./src/app/edit/edit.component.ts");
    /* harmony import */


    var _Services_Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../Services/Utilities/triputilites.service */
    "./src/app/Services/Utilities/triputilites.service.ts");
    /* harmony import */


    var _Services_Bank_bank_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../Services/Bank/bank.service */
    "./src/app/Services/Bank/bank.service.ts");

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(router, formBuilder, userService, genricUtlitis, tripUtilites, componentFactoryResolver, bankService) {
        _classCallCheck(this, ProfileComponent);

        this.router = router;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.genricUtlitis = genricUtlitis;
        this.tripUtilites = tripUtilites;
        this.componentFactoryResolver = componentFactoryResolver;
        this.bankService = bankService;
        this.submitted = false;
        this.imgSubmit = false;
        this.psubmitted = false;
        this.pwdRegex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
        this.childEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.verifyImgURLs = [];
        this.countries = [];
        this.cities = [];
        this.selectedPhoneCode = "+1";
        this.selectedContactCode = "+1";
        this.bankDetails = null;
        this.banks = [];
        this.bankSubmitted = false;
        this.bankSearchTerm = "";
        this.filteredBanks = [];
        this.licenceFiles = [];
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this82 = this;

          this.domainUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].domainToken;
          this.UserPassword = new _classes_User_UsersModal__WEBPACK_IMPORTED_MODULE_2__["UserPassword"]();
          this.getCountries();
          this.userService.GetUser().subscribe(function (data) {
            if (data && data.Data) {
              _this82.user = data.Data;
              localStorage.setItem("UserProfile", JSON.stringify(data.Data)); // Update local storage with fresh data

              if (_this82.user.ProfileImage) _this82.imgURL = _this82.domainUrl + _this82.user.ProfileImage;
              if (_this82.user.Licence && _this82.user.Licence.LicenceImage) _this82.verifyImgURL = _this82.domainUrl + _this82.user.Licence.LicenceImage;
              console.log(_this82.verifyImgURL); // Extract dial code and local number from PhoneNumber

              if (_this82.user.PhoneNumber) {
                _this82.selectedPhoneCode = "+" + _this82.user.CountryCode; // this.user.PhoneNumber already contains only the local number
              } // Extract dial code and local number from ContactNumber


              if (_this82.user.ContactNumber) {
                _this82.selectedContactCode = "+" + _this82.user.CountryCode; // this.user.ContactNumber already contains only the local number
              } // Call dependent initializations after user data is loaded


              _this82.loadFormValidation();

              _this82.loadBankDetails();

              _this82.loadBanks();

              if (_this82.user.Country) {
                _this82.onCountryChange();
              }
            } else {
              // Handle case where user data is not found or API call fails
              console.error("Failed to fetch user data."); // Potentially redirect to login or show an error message
            }
          });
        }
      }, {
        key: "getCountries",
        value: function getCountries() {
          var _this83 = this;

          this.tripUtilites.GetCountry().subscribe(function (data) {
            if (data.Status) {
              _this83.countries = data.Data;

              if (_this83.user.Country) {
                _this83.onCountryChange();
              }
            }
          });
        }
      }, {
        key: "onCountryChange",
        value: function onCountryChange() {
          var _this84 = this;

          var selectedCountry = this.countries.find(function (c) {
            return c.Name === _this84.user.Country;
          });

          if (selectedCountry) {
            this.tripUtilites.GetCity(selectedCountry.Id).subscribe(function (data) {
              if (data.Status) {
                _this84.cities = data.Data;
              }
            });
          }
        }
      }, {
        key: "changeTab",
        value: function changeTab(type) {
          if (type === "verify") {
            this.VerifyAccountInfo.clear();
            var factory = this.componentFactoryResolver.resolveComponentFactory(_edit_edit_component__WEBPACK_IMPORTED_MODULE_8__["EditComponent"]);
            this.cmpRef = this.VerifyAccountInfo.createComponent(factory); // this.cmpRef.instance.subscribedPackage = subscribeBoostPackage;
            // if (!!this.cmpRef.instance.childEmitter) {
            //   this.cmpRef.instance.childEmitter.subscribe(this.BuyComplete);
            // }
          }
        }
      }, {
        key: "loadFormValidation",
        value: function loadFormValidation() {
          this.postForm = this.formBuilder.group({
            Name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            BuisnessName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            FullAddress: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            PhoneCode: [this.selectedPhoneCode, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            PhoneNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            ContactCode: [this.selectedContactCode, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            ContactNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Country: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            City: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
          this.imgForm = this.formBuilder.group({
            image: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
          this.passwordForm = this.formBuilder.group({
            CurrentPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            NewPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.pwdRegex)]],
            ConfirmPass: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.pwdRegex)]]
          });
          this.verifyForm = this.formBuilder.group({
            LicenceNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            LicenceImage: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
          this.bankForm = this.formBuilder.group({
            BankId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            IBAN: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            AccTitle: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Description: [null]
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.postForm.controls;
        }
      }, {
        key: "i",
        get: function get() {
          return this.imgForm.controls;
        }
      }, {
        key: "p",
        get: function get() {
          return this.passwordForm.controls;
        }
      }, {
        key: "v",
        get: function get() {
          return this.verifyForm.controls;
        }
      }, {
        key: "b",
        get: function get() {
          return this.bankForm.controls;
        }
      }, {
        key: "updateImage",
        value: function updateImage() {
          var _this85 = this;

          this.imgSubmit = true;

          if (this.imgForm.invalid) {
            return;
          }

          if (this.imgURL && this.imgForm.valid) {
            // console.log(this.imgURL)
            this.user.ImageProfileString = this.imgURL.split(",")[1];
            this.userService.updateimage(this.user).subscribe(function (data) {
              if (data.Status) {
                _this85.imgSubmit = false;

                _this85.genricUtlitis.showMessageToast("Image updated successfully!", true, _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_7__["PrintMedia"].Conformation);

                _this85.userService.GetUser().subscribe(function (data) {
                  if (data) {
                    localStorage.setItem("UserProfile", JSON.stringify(data.Data));
                  }

                  _this85.router.navigate(["/profile"]); // window.location.href = '/profile';

                });
              } else {
                _this85.genricUtlitis.showMessageToast("Image could not be updated!", false, _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_7__["PrintMedia"].Conformation);
              }
            });
          }
        }
      }, {
        key: "updateProfile",
        value: function updateProfile() {
          var _this86 = this;

          this.submitted = true;

          if (this.postForm.invalid) {
            return;
          }

          if (this.user && this.postForm.valid) {
            var userToUpdate = JSON.parse(JSON.stringify(this.user));
            userToUpdate.ImageProfileString = null;
            userToUpdate.ProfileImage = null;
            userToUpdate.Licence.LicenceImage = null;
            userToUpdate.PhoneNumber = this.user.PhoneNumber;
            userToUpdate.ContactNumber = this.user.ContactNumber;
            userToUpdate.CountryCode = this.selectedContactCode.replace("+", "");
            console.log(userToUpdate);
            var selectedCountry = this.countries.find(function (c) {
              return c.Name === _this86.user.Country;
            });

            if (selectedCountry) {
              userToUpdate.CountryId = selectedCountry.Id;
            }

            var selectedCity = this.cities.find(function (c) {
              return c.Name === _this86.user.City;
            });

            if (selectedCity) {
              userToUpdate.CityId = selectedCity.Id;
            }

            delete userToUpdate.Country;
            delete userToUpdate.City;
            this.userService.updateuser(userToUpdate).subscribe(function (data) {
              if (data.Status) {
                _this86.submitted = false;

                _this86.genricUtlitis.showMessageToast('Profile updated successfully', true, _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_7__["PrintMedia"].Conformation);

                _this86.userService.GetUser().subscribe(function (data) {
                  if (data) {
                    localStorage.setItem('UserProfile', JSON.stringify(data.Data));
                  }

                  _this86.router.navigate(['/profile']);
                });
              } else {
                _this86.genricUtlitis.showMessageToast(data.Message, true, _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_7__["PrintMedia"].Conformation);
              }
            });
          }
        }
      }, {
        key: "preview",
        value: function preview(files, type) {
          var _this87 = this;

          if (files.length === 0) {
            return;
          }

          if (type === "verify") {
            this.licenceFiles = Array.from(files);
            this.verifyImgURLs = [];

            var _loop = function _loop(i) {
              var file = files[i];
              var mimeType = file.type;

              if (mimeType.match(/image\/*/) == null && !mimeType.match(/application\/pdf/)) {
                // this.message = 'Only images and PDFs are supported.';
                return "continue";
              }

              var reader = new FileReader();
              reader.readAsDataURL(file);

              reader.onload = function (_event) {
                _this87.verifyImgURLs.push(reader.result);
              };
            };

            for (var i = 0; i < files.length; i++) {
              var _ret = _loop(i);

              if (_ret === "continue") continue;
            }
          } else {
            var mimeType = files[0].type;

            if (mimeType.match(/image\/*/) == null) {
              // this.message = 'Only images are supported.';
              return;
            }

            var reader = new FileReader();
            reader.readAsDataURL(files[0]);

            reader.onload = function (_event) {
              _this87.imgURL = reader.result;

              _this87.updateImage();
            };
          }
        }
      }, {
        key: "updatePassword",
        value: function updatePassword() {
          var _this88 = this;

          // debugger;
          this.psubmitted = true;

          if (this.UserPassword.NewPassword != this.UserPassword.ConfirmPass) {
            this.genricUtlitis.showMessageToast("Passwords do not match", false, _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_7__["PrintMedia"].Error);
            return;
          }

          if (this.passwordForm.invalid) {
            return;
          }

          if (this.UserPassword && this.passwordForm.valid) {
            this.userService.changePass(this.UserPassword).subscribe(function (data) {
              if (data.Status) {
                _this88.psubmitted = false;
                localStorage.clear();

                _this88.router.navigate(["/login"]);
              }

              _this88.genricUtlitis.showMessageToast(data.Message, data.Status, _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_7__["PrintMedia"].Conformation);
            });
          }
        }
      }, {
        key: "verifyAccount",
        value: function verifyAccount() {
          var _this89 = this;

          this.vsubmitted = true;

          if (!this.user.Licence.LicenceNumber) {
            this.genricUtlitis.showMessageToast("Licence number is required", true, _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_7__["PrintMedia"].Conformation);
            return;
          }

          if (this.licenceFiles.length === 0) {
            this.genricUtlitis.showMessageToast("Please upload at least one licence document.", true, _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_7__["PrintMedia"].Conformation);
            return;
          }

          if (this.user && this.verifyForm.valid) {
            var formData = new FormData();
            formData.append('LicenceNumber', this.user.Licence.LicenceNumber);

            for (var i = 0; i < this.licenceFiles.length; i++) {
              formData.append('attachments', this.licenceFiles[i]);
            }

            this.userService.updateuserLicenece(formData).subscribe(function (data) {
              if (data.Status) {
                _this89.vsubmitted = false;

                _this89.genricUtlitis.showMessageToast("Licence updated successfully", true, _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_7__["PrintMedia"].Conformation);

                _this89.userService.GetUser().subscribe(function (data) {
                  if (data) {
                    localStorage.setItem("UserProfile", JSON.stringify(data.Data));
                  }

                  _this89.router.navigate(["/profile"]);
                });
              } else {
                _this89.genricUtlitis.showMessageToast(data.Message, false, _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_7__["PrintMedia"].Error);
              }
            });
          }
        }
      }, {
        key: "deactivateAccount",
        value: function deactivateAccount() {
          var _this90 = this;

          this.userService.deactive().subscribe(function (data) {
            if (data.Status) {
              _this90.genricUtlitis.showMessageToast("Account deactivated", true, _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_7__["PrintMedia"].Conformation);

              localStorage.removeItem("UserProfile");
              localStorage.removeItem("token");

              _this90.router.navigate(["/login"]);
            }
          });
        }
      }, {
        key: "loadBankDetails",
        value: function loadBankDetails() {
          var _this91 = this;

          this.bankService.GetOptBankDetails().subscribe(function (data) {
            if (data.Result && data.Result.Status && data.Result.Data) {
              _this91.bankDetails = data.Result.Data;
            } else {
              _this91.bankDetails = null;
            }
          });
        }
      }, {
        key: "loadBanks",
        value: function loadBanks() {
          var _this92 = this;

          this.bankService.GetBanks().subscribe(function (data) {
            if (data.Result && data.Result.Status && data.Result.Data) {
              _this92.banks = data.Result.Data;
              _this92.filteredBanks = _this92.banks;
            }
          });
        }
      }, {
        key: "filterBanks",
        value: function filterBanks() {
          if (!this.bankSearchTerm || this.bankSearchTerm.trim() === '') {
            this.filteredBanks = this.banks;
          } else {
            var searchLower = this.bankSearchTerm.toLowerCase();
            this.filteredBanks = this.banks.filter(function (bank) {
              return bank.BankName.toLowerCase().includes(searchLower) || bank.BankNameAR && bank.BankNameAR.toLowerCase().includes(searchLower);
            });
          }
        }
      }, {
        key: "openBankModal",
        value: function openBankModal() {
          this.bankSearchTerm = '';
          this.filteredBanks = this.banks;
          this.bankSubmitted = false;

          if (this.bankDetails) {
            // Update mode - populate form
            this.bankForm.patchValue({
              BankId: this.bankDetails.BankId,
              IBAN: this.bankDetails.IBAN,
              AccTitle: this.bankDetails.AccTitle,
              Description: this.bankDetails.Description || ''
            });
          } else {
            // Add mode - reset form
            this.bankForm.reset();
          }
        }
      }, {
        key: "saveBank",
        value: function saveBank() {
          var _this93 = this;

          this.bankSubmitted = true;

          if (this.bankForm.invalid) {
            return;
          }

          var bankData = {
            BankId: this.bankForm.value.BankId,
            IBAN: this.bankForm.value.IBAN,
            AccTitle: this.bankForm.value.AccTitle,
            Description: this.bankForm.value.Description || ''
          };
          this.bankService.AddUpdateUserBank(bankData).subscribe(function (data) {
            if (data.Result && data.Result.Status) {
              _this93.bankSubmitted = false;

              _this93.genricUtlitis.showMessageToast(data.Result.Message || "Bank information saved successfully", true, _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_7__["PrintMedia"].Conformation); // Close modal using jQuery/Bootstrap


              $('#bankModal').modal('hide');

              _this93.loadBankDetails();
            } else {
              _this93.genricUtlitis.showMessageToast(data.Result && data.Result.Message || "Failed to save bank information", false, _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_7__["PrintMedia"].Error);
            }
          });
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _Services_Users_UsersService_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"]
      }, {
        type: _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_7__["GenaricService"]
      }, {
        type: _Services_Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_9__["TriputilitesService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
      }, {
        type: _Services_Bank_bank_service__WEBPACK_IMPORTED_MODULE_10__["BankService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("VerifyAccount", {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
      "static": false
    })], ProfileComponent.prototype, "VerifyAccountInfo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ProfileComponent.prototype, "childEmitter", void 0);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-profile",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.css */
      "./src/app/profile/profile.component.css"))["default"]]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/promo/promo.component.css":
  /*!*******************************************!*\
    !*** ./src/app/promo/promo.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPromoPromoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\n  background-color: #ffffff;\n  color: #ffffff;\n  box-shadow: 2px 2px 10px #777777;\n  border-top: 8px solid #ffffff;\n  border-radius: 4px;\n\n  margin: 5px;\n}\n\n.card:hover {\n  border-top: 8px solid #15b4e3;\n  border-radius: 4px;\n  transform: translateY(-1em);\n  transition: all 0.2s ease-out;\n}\n\n.card__title {\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  padding-bottom: 8px;\n}\n\n.card__body {\n  position: relative;\n  border-top: 2px solid #777777;\n  border-bottom: 2px solid #777777;\n  padding-bottom: 16px;\n}\n\n.price {\n  font-size: 4rem;\n  font-weight: bold;\n  text-shadow: 0 0 1px #000;\n  color: #f5af24;\n  padding-left: 24px;\n  margin: 32px 0;\n}\n\n.price__symbol {\n  position: absolute;\n  left: 0px;\n  top: 42px;\n  font-size: 1.5rem;\n}\n\n.price__tag {\n  text-transform: uppercase;\n  margin-bottom: 8px;\n}\n\n.card__button {\n  width: 100%;\n  background-color: #f5af24;\n  border: 1px solid #f5af24;\n  border-radius: 8px;\n  margin-top: 32px;\n  padding: 16px 0;\n  font-size: 1.25rem;\n  font-weight: bold;\n  letter-spacing: 2.6666666667px;\n  text-transform: uppercase;\n  text-shadow: 1px 1px #3A3A3A;\n  color: #ffffff;\n}\n\n.card__button_sub {\n  width: 100%;\n  background-color: #15b4e3;\n  border: 1px solid #15b4e3;\n  border-radius: 8px;\n  margin-top: 32px;\n  padding: 16px 0;\n  font-size: 1.25rem;\n  font-weight: bold;\n  letter-spacing: 2.6666666667px;\n  text-transform: uppercase;\n  text-shadow: 1px 1px #3A3A3A;\n  color: #ffffff;\n}\n\n.card:hover .card__button {\n  background-color: #15b4e3;\n  border-color: #15b4e3;\n}\n\n.card:hover .price {\n  color: #15b4e3;\n}\n\n.sub td {\n  padding-right: 40px;\n}\n\n.c-main {\n  color: gainsboro;\n  margin-top: 20px;\n}\n\n.sub1 td {\n  padding-right: 120px;\n}\n\n.nav-tabs {\n  margin: 30px auto;\n}\n\n.nav-tabs>li {\n  margin-left: -1px;\n}\n\n.nav-tabs>li:first-child>a {\n  border-radius: 0;\n}\n\n.nav-tabs>li:first-child>a:before {\n  display: none;\n}\n\n.nav-tabs>li:last-child>a:after {\n  box-shadow: none;\n}\n\n.nav-tabs>li>a {\n  padding: 15px 30px 15px 50px;\n  background-color: #f5af24;\n  color: black;\n  border: 0;\n  position: relative;\n}\n\n.nav-tabs>li>a:hover,\n.nav-tabs>li>a:active,\n.nav-tabs>li>a:focus {\n  background-color: #f5af24;\n  color: black;\n  border: 0;\n}\n\n.nav-tabs>li>a:before {\n  content: \" \";\n  position: absolute;\n  left: -20px;\n  top: 0;\n  height: 100%;\n  width: 40px;\n  background-color: #f5af24;\n  transform: skewX(35deg);\n}\n\n.nav-tabs>li>a:after {\n  content: \" \";\n  position: absolute;\n  right: -20px;\n  background-color: #f5af24;\n  top: 0;\n  height: 100%;\n  width: 40px;\n  transform: skewX(35deg);\n  box-shadow: 3px 0px 0 0 rgba(0, 0, 0, 0.1);\n  z-index: 1;\n}\n\n.nav-tabs>li.active {\n  margin-top: -11px;\n}\n\n.nav-tabs>li.active>a {\n  border: 0;\n  background-color: #15b4e3;\n  color: white;\n  padding: 15px 30px 15px 50px;\n  font-size: 22px;\n  border-radius: 0;\n}\n\n.nav-tabs>li.active>a:hover,\n.nav-tabs>li.active>a:active,\n.nav-tabs>li.active>a:focus {\n  background-color: #15b4e3;\n  color: white;\n  border: 0;\n}\n\n.nav-tabs>li.active>a:before {\n  display: none;\n}\n\n.nav-tabs>li.active>a:after {\n  right: -25px;\n  width: 50px;\n  background-color: #15b4e3;\n  z-index: 1;\n}\n\n.plus {\n  height: 70px;\n  width: 70px;\n  margin-left: 85%;\n}\n\n.nav {\n  flex-wrap: unset;\n\n}\n\n.promo-text {\n  border-top: 10px solid #00CCF2;\n  height: 18px;\n  font-size: 23px;\n  border-radius: 2px;\n  color: black;\n}\n\n.expire-text {\n  border-top: 10px solid #F4AF26;\n  height: 18px;\n  font-size: 23px;\n  border-radius: 2px;\n  color: black;\n}\n\n.nav-pills .active {\n  color: white;\n  background-color: #00A991;\n}\n\n.nav-pills li:nth-child(1) a {\n  border-radius: 10px 0 0 10px;\n}\n\n.nav-pills li:nth-child(2) a {\n  border-radius: 0 10px 10px 0;\n}";
    /***/
  },

  /***/
  "./src/app/promo/promo.component.ts":
  /*!******************************************!*\
    !*** ./src/app/promo/promo.component.ts ***!
    \******************************************/

  /*! exports provided: PromoComponent */

  /***/
  function srcAppPromoPromoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PromoComponent", function () {
      return PromoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Services_PromoService_promoservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Services/PromoService/promoservice.service */
    "./src/app/Services/PromoService/promoservice.service.ts");
    /* harmony import */


    var _classes_Promo_Promo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../classes/Promo/Promo */
    "./src/app/classes/Promo/Promo.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var PromoComponent = /*#__PURE__*/function () {
      function PromoComponent(promoService, datepipe, toastr, formBuilder) {
        _classCallCheck(this, PromoComponent);

        this.promoService = promoService;
        this.datepipe = datepipe;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.error = {
          isError: false,
          errorMessage: ''
        };
        this.showFormError = false;
        this.isStartDateSelected = false;
        this.currentDate = new Date();
        this.promo = new _classes_Promo_Promo__WEBPACK_IMPORTED_MODULE_3__["Promo"]();
      }

      _createClass(PromoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.UserPromo = [];
          this.ExpirePromo = [];
          this.getPromo();
          this.today = new Date();
          this.minDateStart = this.datepipe.transform(new Date(this.today.setDate(this.today.getDate() + 1)), 'yyyy-MM-dd');
          this.minDateEnd = this.datepipe.transform(new Date(this.today.setDate(this.today.getDate() + 2)), 'yyyy-MM-dd');
          this.aFormGroup = this.formBuilder.group({
            PromoCode: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10)]],
            DiscountPercentage: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            StartDate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(this.minDateStart)])],
            EndDate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(this.minDateEnd)])]
          }, {
            validator: this.dateLessThan('StartDate', 'EndDate')
          });
        }
      }, {
        key: "getPromo",
        value: function getPromo() {
          var _this94 = this;

          this.promoService.GetPromosByUser().subscribe(function (data) {
            if (data && data.Data) {
              _this94.UserPromo = data.Data.filter(function (promo) {
                return !(promo.ISExpire > 0);
              });
              _this94.ExpirePromo = data.Data.filter(function (promo) {
                return promo.ISExpire > 0;
              });
            }
          });
        }
      }, {
        key: "startSelected",
        value: function startSelected(event) {
          this.endDate = new Date(event.target.value); // this.endDate = this.endDate.setDate(this.endDate.getDate() + 1);
          // console.log(new Date(event.target.value));

          this.minDateEnd = this.datepipe.transform(this.endDate.setDate(this.endDate.getDate() + 1), 'yyyy-MM-dd'); // this.minDateEnd = 

          if (event.target.value) document.getElementById("expdate").removeAttribute("disabled");
        }
      }, {
        key: "compareTwoDates",
        value: function compareTwoDates() {
          if (new Date(this.aFormGroup.controls['EndDate'].value) < new Date(this.aFormGroup.controls['StartDate'].value)) {
            this.error = {
              isError: true,
              errorMessage: "Expiry Date can't be before start date"
            };
          } else {
            this.error = null;
          }
        }
      }, {
        key: "dateLessThan",
        value: function dateLessThan(from, to) {
          return function (group) {
            var f = group.controls[from];
            var t = group.controls[to];

            if (t.value < new Date('mm/dd/yyyy')) {
              return {
                dates: 'Start date should be future or current date'
              };
            }

            if (f.value > t.value) {
              return {
                dates: 'Start date should be less than Expiry Date'
              };
            }

            return {};
          };
        }
      }, {
        key: "AddPromo",
        value: function AddPromo() {
          var _this95 = this;

          if (this.aFormGroup.valid) {
            this.showFormError = false;
            this.promoService.AddPromoByUser(this.promo).subscribe(function (data) {
              if (data) {
                _this95.response = data;

                if (_this95.response.Status) {
                  _this95.toastr.success(_this95.response.Message, 'Notification');

                  _this95.getPromo();

                  $('#expireModal').modal('hide');
                } else {
                  _this95.toastr.error(_this95.response.Message, 'Notification');
                }
              }
            });
          } else {
            this.showFormError = true;
          }
        }
      }]);

      return PromoComponent;
    }();

    PromoComponent.ctorParameters = function () {
      return [{
        type: _Services_PromoService_promoservice_service__WEBPACK_IMPORTED_MODULE_2__["PromoserviceService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    PromoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-promo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./promo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/promo/promo.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./promo.component.css */
      "./src/app/promo/promo.component.css"))["default"]]
    })], PromoComponent);
    /***/
  },

  /***/
  "./src/app/reports/reports.component.css":
  /*!***********************************************!*\
    !*** ./src/app/reports/reports.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppReportsReportsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./src/app/reports/reports.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/reports/reports.component.ts ***!
    \**********************************************/

  /*! exports provided: ReportsComponent */

  /***/
  function srcAppReportsReportsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportsComponent", function () {
      return ReportsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Services_TripService_trip_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Services/TripService/trip.service */
    "./src/app/Services/TripService/trip.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _Services_Utilities_UtilitiesMethods_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Services/Utilities/UtilitiesMethods.service */
    "./src/app/Services/Utilities/UtilitiesMethods.service.ts");
    /* harmony import */


    var _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../Services/Utilities/genaric.service */
    "./src/app/Services/Utilities/genaric.service.ts");

    var ReportsComponent = /*#__PURE__*/function () {
      function ReportsComponent(tripSerivce, genricUtlitis, settingUtitls) {
        _classCallCheck(this, ReportsComponent);

        this.tripSerivce = tripSerivce;
        this.genricUtlitis = genricUtlitis;
        this.settingUtitls = settingUtitls;
        this.domainUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].domainToken;
        this.tripModalList = [];
      }

      _createClass(ReportsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadAllTrips();
        }
      }, {
        key: "loadAllTrips",
        value: function loadAllTrips() {
          var _this96 = this;

          this.tripSerivce.GetAllCompTripsByUsers().subscribe(function (data) {
            if (data) {
              if (data.Status) {
                _this96.tripModalList = data.Data;
              }
            }
          });
        }
      }, {
        key: "report",
        value: function report(id) {
          var _this97 = this;

          this.tripSerivce.GetTripReport(id).subscribe(function (data) {
            if (data) {
              if (data.Status) {
                _this97.genricUtlitis.showMessageToast(data.Message, true, "Success!"); //  console.log(data);

              } else {
                _this97.genricUtlitis.showMessageToast(data.Message, false, "Error!");
              }
            } else {
              _this97.genricUtlitis.showMessageToast("There was some error.", false, "Error!");
            }
          });
        }
      }]);

      return ReportsComponent;
    }();

    ReportsComponent.ctorParameters = function () {
      return [{
        type: _Services_TripService_trip_service__WEBPACK_IMPORTED_MODULE_2__["TripService"]
      }, {
        type: _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_5__["GenaricService"]
      }, {
        type: _Services_Utilities_UtilitiesMethods_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesMethodsService"]
      }];
    };

    ReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reports',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reports.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/reports.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reports.component.css */
      "./src/app/reports/reports.component.css"))["default"]]
    })], ReportsComponent);
    /***/
  },

  /***/
  "./src/app/reset-password/reset-password.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/reset-password/reset-password.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppResetPasswordResetPasswordComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./src/app/reset-password/reset-password.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/reset-password/reset-password.component.ts ***!
    \************************************************************/

  /*! exports provided: ResetPasswordComponent */

  /***/
  function srcAppResetPasswordResetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
      return ResetPasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _classes_ResetPassword_reset_password__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../classes/ResetPassword/reset-password */
    "./src/app/classes/ResetPassword/reset-password.ts");
    /* harmony import */


    var _Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../Services/Utilities/AuthService.service */
    "./src/app/Services/Utilities/AuthService.service.ts");
    /* harmony import */


    var _Shared_Directives_confirmed_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../Shared/Directives/confirmed.validator */
    "./src/app/Shared/Directives/confirmed.validator.ts");

    var ResetPasswordComponent = /*#__PURE__*/function () {
      function ResetPasswordComponent(fb, _authservice, _toaster) {
        _classCallCheck(this, ResetPasswordComponent);

        this.fb = fb;
        this._authservice = _authservice;
        this._toaster = _toaster;
        this.showLoginpageEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showResetPasswordEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isHidden = true;
        this.isHiddenConfirm = true;
        this.resetPasswordModel = new _classes_ResetPassword_reset_password__WEBPACK_IMPORTED_MODULE_4__["ResetPasswordModel"]();
      }

      _createClass(ResetPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.resetPasswordModel.Email = this.email;
          this.createForm();
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.resetPasswordFrom = this.fb.group({
            OPT: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$')]],
            ConfirmPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          }, {
            validator: Object(_Shared_Directives_confirmed_validator__WEBPACK_IMPORTED_MODULE_6__["ConfirmedValidator"])('Password', 'ConfirmPassword')
          });
        }
      }, {
        key: "showLoginScreen",
        value: function showLoginScreen() {
          this.showLoginpageEmitter.emit(true);
        }
      }, {
        key: "resetPassword",
        value: function resetPassword() {
          var _this98 = this;

          if (this.resetPasswordFrom.invalid) return;

          this._authservice.ResetPassword(this.resetPasswordModel).subscribe(function (data) {
            if (data.Status) {
              _this98._toaster.success(data.Message);

              setTimeout(function () {
                window.location.href = '/login';
              }, 1000);
            } else {
              _this98._toaster.info(data.Message);
            }
          });
        }
      }, {
        key: "showHidePassword",
        value: function showHidePassword() {
          this.isHidden = !this.isHidden;
        }
      }, {
        key: "showHideConfirmPassword",
        value: function showHideConfirmPassword() {
          this.isHiddenConfirm = !this.isHiddenConfirm;
        }
      }]);

      return ResetPasswordComponent;
    }();

    ResetPasswordComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ResetPasswordComponent.prototype, "showLoginpageEmitter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ResetPasswordComponent.prototype, "showResetPasswordEmitter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ResetPasswordComponent.prototype, "email", void 0);
    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reset-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reset-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/reset-password/reset-password.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reset-password.component.css */
      "./src/app/reset-password/reset-password.component.css"))["default"]]
    })], ResetPasswordComponent);
    /***/
  },

  /***/
  "./src/app/self/about-us/about-us.component.css":
  /*!******************************************************!*\
    !*** ./src/app/self/about-us/about-us.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSelfAboutUsAboutUsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./src/app/self/about-us/about-us.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/self/about-us/about-us.component.ts ***!
    \*****************************************************/

  /*! exports provided: AboutUsComponent */

  /***/
  function srcAppSelfAboutUsAboutUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function () {
      return AboutUsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutUsComponent = /*#__PURE__*/function () {
      function AboutUsComponent() {
        _classCallCheck(this, AboutUsComponent);
      }

      _createClass(AboutUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutUsComponent;
    }();

    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about-us',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about-us.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/self/about-us/about-us.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about-us.component.css */
      "./src/app/self/about-us/about-us.component.css"))["default"]]
    })], AboutUsComponent);
    /***/
  },

  /***/
  "./src/app/self/contact-us/contact-us.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/self/contact-us/contact-us.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSelfContactUsContactUsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".create-text-box {\n\n  text-align: center;\n  color: white;\n}\n.create-text-box a{\n\n\n  color: white;\n}\n.login-card {\n\n  overflow: hidden;\n\n  margin-bottom: 100px;\n}\n";
    /***/
  },

  /***/
  "./src/app/self/contact-us/contact-us.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/self/contact-us/contact-us.component.ts ***!
    \*********************************************************/

  /*! exports provided: ContactUsComponent */

  /***/
  function srcAppSelfContactUsContactUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function () {
      return ContactUsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContactUsComponent = /*#__PURE__*/function () {
      function ContactUsComponent() {
        _classCallCheck(this, ContactUsComponent);
      }

      _createClass(ContactUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactUsComponent;
    }();

    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact-us',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact-us.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/self/contact-us/contact-us.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact-us.component.css */
      "./src/app/self/contact-us/contact-us.component.css"))["default"]]
    })], ContactUsComponent);
    /***/
  },

  /***/
  "./src/app/self/faqs/faqs.component.css":
  /*!**********************************************!*\
    !*** ./src/app/self/faqs/faqs.component.css ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSelfFaqsFaqsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./src/app/self/faqs/faqs.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/self/faqs/faqs.component.ts ***!
    \*********************************************/

  /*! exports provided: FaqsComponent */

  /***/
  function srcAppSelfFaqsFaqsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaqsComponent", function () {
      return FaqsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FaqsComponent = /*#__PURE__*/function () {
      function FaqsComponent() {
        _classCallCheck(this, FaqsComponent);
      }

      _createClass(FaqsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FaqsComponent;
    }();

    FaqsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-faqs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./faqs.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/self/faqs/faqs.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./faqs.component.css */
      "./src/app/self/faqs/faqs.component.css"))["default"]]
    })], FaqsComponent);
    /***/
  },

  /***/
  "./src/app/signup/signup.component.css":
  /*!*********************************************!*\
    !*** ./src/app/signup/signup.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignupSignupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* .loginbg{\n  width: 100%;\n  height: 100%;\n position: absolute;\n background-color: #00CCF2;\n}\n\n#form_login {\n    left      : 50%;\n    top       : 50%;\n    position  : absolute;\n    transform : translate(-50%, -50%);\n    width: 380px;\n    height: 650px;\n\n}\n.page-bg{\n  background: linear-gradient(#ffffff 75%, #f2f547);\n\n    box-shadow: rgba(255, 255, 255, 0.25) 0px 50px 100px -20px, rgba(255, 255, 255, 0.3) 0px 30px 60px -30px, rgba(255, 255, 255, 0.35) 0px -2px 6px 0px inset;\n\n    border-radius: 5%;\n\n}\n.page-bg .froms {\n    padding: 75px 45px 15px 45px;\n}\n\n.froms .form-control{\n  border-color: #00CCF2 !important;\n}\n\n\n  .btn{\n      padding: .55rem 2rem !important;\n      font-size: 1rem !important;\n  }\n  .logo-login{\n      padding-top: 10px;\n      height: 30px;\n  }\n  .logo-login img{\n      width: 123px;\n      height: 99px;\n      margin-top: 20px;\n  }\n  .btn-primary{\n   background-color: rgb(0, 130, 127) !important;\n   border-color: rgb(0, 130, 127) !important;\n  }\n  .btnlogin  .button {\n    border-radius: 10px;\n    background-color: #00CCF2 !important;\n    border: none;\n    color: #FFFFFF !important;\n    text-align: center;\n    font-size: 17px;\n    padding: 10px;\n    width: 170px;\n    transition: all 0.5s;\n    cursor: pointer;\n    margin: 5px;\n    height: 45px;\n  }\n  .button span {\n    cursor: pointer;\n    display: inline-block;\n    position: relative;\n    transition: 0.5s;\n  }\n  .button span:after {\n    content: '\\00bb';\n    position: absolute;\n    opacity: 0;\n    top: 0;\n    right: -20px;\n    transition: 0.5s;\n  }\n\n  .button:hover span {\n    padding-right: 25px;\n  }\n\n  .button:hover span:after {\n    opacity: 1;\n    right: 0;\n  }\n  .logintext1{\n    margin-top: 60px;\n  }\n  .logintext1 input[type=email]{\n    height: 40px;\n    border-radius: 25px;\n  }\n  .logintext1 input[type=text]{\n    height: 40px;\n    border-radius: 25px;\n  }\n  .logintext input[type=password]{\n    height: 40px;\n    border-radius: 25px;\n  }\n  .fa-user{\n    margin-top: -30px;\n    position: absolute;\n    margin-left: 10px;\n  }\n\n\n */";
    /***/
  },

  /***/
  "./src/app/signup/signup.component.ts":
  /*!********************************************!*\
    !*** ./src/app/signup/signup.component.ts ***!
    \********************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/Services/Utilities/AuthService.service */
    "./src/app/Services/Utilities/AuthService.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Services_Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Services/Utilities/triputilites.service */
    "./src/app/Services/Utilities/triputilites.service.ts");
    /* harmony import */


    var _classes_signup_userRegistraions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../classes/signup/userRegistraions */
    "./src/app/classes/signup/userRegistraions.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _Shared_Directives_confirmed_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../Shared/Directives/confirmed.validator */
    "./src/app/Shared/Directives/confirmed.validator.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(routers, utlities, fb, authService, toastr) {
        _classCallCheck(this, SignupComponent);

        this.routers = routers;
        this.utlities = utlities;
        this.fb = fb;
        this.authService = authService;
        this.toastr = toastr;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.isHidden = true;
        this.user = new _classes_signup_userRegistraions__WEBPACK_IMPORTED_MODULE_5__["UsersRegistrations"]();
      }

      _createClass(SignupComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.utlities.set_isSingupPage = false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createForm();
          this.utlities.set_isSingupPage = true;
        }
      }, {
        key: "navigateTo",
        value: function navigateTo() {
          this.utlities.set_isLogin = true;
          this.utlities.set_isSingupPage = false;
          this.routers.navigate(["/login"]);
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.singUpFrom = this.fb.group({
            Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            Email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$"), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            Password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$')]],
            ConfirmPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
          }, {
            validator: Object(_Shared_Directives_confirmed_validator__WEBPACK_IMPORTED_MODULE_7__["ConfirmedValidator"])('Password', 'ConfirmPassword')
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this99 = this;

          if (this.singUpFrom.invalid) return;
          this.user.RoleId = 3;
          this.authService.SingUp(this.user).subscribe(function (data) {
            if (data.Status) {
              _this99.toastr.success("You have seccessfuly registered", 'Notification');

              _this99.routers.navigate(['/login']);
            } else {
              _this99.toastr.error(data.Message, 'Notification');
            }
          });
        }
      }, {
        key: "showHidePassword",
        value: function showHidePassword() {
          this.isHidden = !this.isHidden;
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _Services_Utilities_triputilites_service__WEBPACK_IMPORTED_MODULE_4__["TriputilitesService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: src_app_Services_Utilities_AuthService_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]
      }];
    };

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.css */
      "./src/app/signup/signup.component.css"))["default"]]
    })], SignupComponent);
    /***/
  },

  /***/
  "./src/app/tripdetail/tripdetail.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/tripdetail/tripdetail.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTripdetailTripdetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".box.box-success {\n    border-top-color: #00a65a;\n}\n.box {\n    position: relative;\n    border-radius: 3px;\n    background: #fff;\n    border-top: 3px solid #d2d6de;\n    margin-bottom: 20px;\n    width: 100%;\n    box-shadow: 0 1px 1px rgb(0 0 0 / 10%);\n}\n.box-header.with-border {\n    border-bottom: 1px solid #f4f4f4;\n}\n.box-header {\n    color: #444;\n    display: block;\n    padding: 10px;\n    position: relative;\n}\n.box-header .box-title, .box-header>.fa, .box-header>.glyphicon, .box-header>.ion {\n    display: inline-block;\n    font-size: 18px;\n    margin: 0;\n    line-height: 1;\n}\n.box-header>.box-tools {\n    position: absolute;\n    right: 10px;\n    top: 5px;\n\n}\n.box-header>.box-tools [data-toggle=tooltip] {\n    position: relative;\n}\n.alert-success, .bg-green, .callout.callout-success, .label-success, .modal-success .modal-body {\n    background-color: #00a65a!important;\n}\n.box-tools .btn {\n    border-radius: 3px;\n    box-shadow: none;\n    border: 1px solid transparent;\n}\n.btn-box-tool {\n    padding: 5px;\n    font-size: 12px;\n    background: 0 0;\n    color: #97a0b3;\n}\n.direct-chat .box-body {\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n    position: relative;\n    overflow-x: hidden;\n    padding: 0;\n}\n.box-body {\n    padding: 10px;\n    border-radius: 0 0 3px 3px;\n}\n.direct-chat-messages {\n    transition: transform .5s ease-in-out;\n}\n.direct-chat-messages {\n    transform: translate(0,0);\n    padding: 10px;\n    height: 250px;\n    overflow: auto;\n}\n.direct-chat-msg {\n    margin-bottom: 10px;\n}\n.direct-chat-msg, .direct-chat-text {\n    display: block;\n}\n.direct-chat-info {\n    display: block;\n    margin-bottom: 2px;\n    font-size: 12px;\n}\n.direct-chat-img {\n    border-radius: 50%;\n    float: left;\n    width: 40px;\n    height: 40px;\n}\n.direct-chat-text {\n    border-radius: 5px;\n    position: relative;\n    padding: 5px 10px;\n    background: #d2d6de;\n    border: 1px solid #d2d6de;\n    margin: 5px 0 0 50px;\n    color: #444;\n\n}\n.pull-right {\n    float: right!important;\n    font-size: 12px;\n}\n.pull-right  a {\n    text-decoration: none;\n    color: #3c8dbc;\n}\n.nav-pills .nav-link {\n    border-radius: 2rem !important;\n    width: 230px;\n    box-shadow: 2px 7px 12px #d4d4d3;\n    margin: 10px;\n    font-size: 1.0vw;\n    text-align: center;\n    font-family: 'Montserrat-Medium';\n    flex-wrap: unset;\n\n}\n.form-group {\n    margin-bottom: 5px !important;\n}\n\n";
    /***/
  },

  /***/
  "./src/app/tripdetail/tripdetail.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/tripdetail/tripdetail.component.ts ***!
    \****************************************************/

  /*! exports provided: TripdetailComponent */

  /***/
  function srcAppTripdetailTripdetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TripdetailComponent", function () {
      return TripdetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../classes/trip/TripModel */
    "./src/app/classes/trip/TripModel.ts");
    /* harmony import */


    var _Services_TripService_trip_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Services/TripService/trip.service */
    "./src/app/Services/TripService/trip.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../Services/Utilities/genaric.service */
    "./src/app/Services/Utilities/genaric.service.ts");

    var TripdetailComponent = /*#__PURE__*/function () {
      function TripdetailComponent(tripSerivce, actRoute, genricUtlitis) {
        _classCallCheck(this, TripdetailComponent);

        this.tripSerivce = tripSerivce;
        this.actRoute = actRoute;
        this.genricUtlitis = genricUtlitis;
        this.rating = 4.5;
        this.tripImages = [];
        this.panelOpenState = false;
        this.domainUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].domainToken;
        this.tripDetail = new _classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__["TripModel"]();
        this.TripComments = [];
        this.ReviewComments = 'Hate Speech';
        this.TripReviewModal = new _classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__["TripReviewModal"]();
        this.exstingReviewStatus = new _classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__["TripReview"]();
      }

      _createClass(TripdetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.tripId = this.actRoute.snapshot.params.id;
          this.loadTripDetail();
          this.getTripsComments();
        }
      }, {
        key: "loadTripDetail",
        value: function loadTripDetail() {
          var _this100 = this;

          this.tripSerivce.GetAllTripDetailById(this.tripId).subscribe(function (data) {
            if (data) {
              if (data.Status) {
                _this100.tripDetail = data.Data;
                _this100.tripDetail.Faclities.Facalities = JSON.parse(_this100.tripDetail.Faclities.Facalities); // share
                // var picUrl = environment.DomainUrl + this.tripDetail.TripBasicInfo.FeaturesImage;
                // var triptitle =  this.tripDetail.TripBasicInfo.Title;
                // var dexcription =  this.tripDetail.TripBasicInfo.Details;
                // var from =  this.tripDetail.TripBasicInfo.FromPlaceName;
                // var to =  this.tripDetail.TripBasicInfo.ToPlaceName;
                // var returnUrl = window.location.href;
                // console.log(returnUrl)

                var url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].shareTripBasePath + _this100.tripDetail.TripBasicInfo.Id;
                _this100.shareFB = "https://www.facebook.com/dialog/feed?app_id=962780807415498&redirect_uri=" + url + "&link=" + url + "}"; // this.shareFB = "https://www.facebook.com/dialog/feed?app_id=962780807415498&redirect_uri="+url+"&link="+url+"&picture="+picUrl+"&caption="+triptitle+"&description="+dexcription+"&properties={from:'value1',To:'value2'}";

                _this100.shareTwitter = "https://twitter.com/intent/tweet?url=" + url;
                _this100.shareLinkedIn = "https://www.linkedin.com/sharing/share-offsite/?url=" + url;
                _this100.shareWhatsApp = "https://api.whatsapp.com/send?text=".concat(_this100.tripDetail.TripBasicInfo.Title, " ").concat(url);
              }
            }
          });
        }
      }, {
        key: "getReviewIdForSpam",
        value: function getReviewIdForSpam(id) {
          var _this101 = this;

          this.reViewId = id;
          this.reviewSpamComment = this.tripDetail.TripReviews.find(function (x) {
            return x.ReviewId === _this101.reViewId;
          }).Comment;
        }
      }, {
        key: "showReplyInput",
        value: function showReplyInput(id) {
          this.tripcommentId = id;
          $('#modal-info-replyCommentBox').modal('show');
        }
      }, {
        key: "AddCommentReply",
        value: function AddCommentReply(inputEvent) {
          var _this102 = this;

          if (inputEvent && inputEvent.value) {
            this.tripCommentsReply = new _classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__["TripReplyComments"]();
            this.tripCommentsReply.CommentId = this.tripcommentId;
            this.tripCommentsReply.ReplyComments = inputEvent.value;
            this.tripSerivce.AddTripCommentReply(this.tripCommentsReply).subscribe(function (data) {
              if (data.Status) {
                _this102.getTripsComments();

                $('#modal-info-replyCommentBox').modal('hide');
              }
            });
          } else {
            alert('Please add some reply');
          }
        }
      }, {
        key: "getTripsComments",
        value: function getTripsComments() {
          var _this103 = this;

          this.tripSerivce.GetAllTripCommentsById(this.tripId).subscribe(function (data) {
            if (data.Status) {
              _this103.TripComments = data.Data;
            }
          });
        }
      }, {
        key: "loadSpamDialog",
        value: function loadSpamDialog(id) {
          this.tripcommentId = id;
          $('#modal-info-markasspan-comment').modal('show');
        }
      }, {
        key: "UpdateCommentAsSpam",
        value: function UpdateCommentAsSpam() {
          var _this104 = this;

          var tripCommentsSpam = new _classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__["TripComments"]();
          tripCommentsSpam.CommentId = this.tripcommentId;
          tripCommentsSpam.IsSpam = true;
          tripCommentsSpam.ReviewComments = this.ReviewComments;
          this.tripSerivce.updateTripAsSpam(tripCommentsSpam).subscribe(function (data) {
            if (data.Status) {
              $('#modal-info-markasspan-comment').modal('hide');

              _this104.getTripsComments();
            }
          });
        }
      }, {
        key: "UpdateReviewsAsSpam",
        value: function UpdateReviewsAsSpam() {
          var tripReviewsSpam = new _classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__["TripReviewModal"]();
          tripReviewsSpam.Id = this.reViewId;
          tripReviewsSpam.Status = false;
          tripReviewsSpam.Comment = this.reviewSpamComment;
          this.tripSerivce.updateTripReviewsAsSpam(tripReviewsSpam).subscribe(function (data) {
            if (data.Status) {
              $('#modal-info-markasspan').modal('hide');
            }
          });
        }
      }, {
        key: "UpdateTripStatus",
        value: function UpdateTripStatus(id) {
          var _this105 = this;

          var isStartBooking = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

          if (!isStartBooking) {
            this.tripStatusModal = new _classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__["TripStatusModal"]();
            this.tripStatusModal.TripId = this.tripId;
            this.tripStatusModal.StatusId = id;
            this.tripSerivce.UpdateTripStatus(this.tripStatusModal).subscribe(function (data) {
              if (data.Status) {
                _this105.loadTripDetail();
              } else {
                alert(data.Message);
              }
            });
          } else {
            var trip = new _classes_trip_TripModel__WEBPACK_IMPORTED_MODULE_2__["TripBasicInfo"]();
            trip.Id = this.tripId;
            trip.NO_MORE_BOOKING = isStartBooking === 'ST' ? false : true;
            this.tripSerivce.UpdateTripNoMoreTripStatus(trip).subscribe(function (data) {
              if (data.Status) {
                _this105.loadTripDetail();
              } else {
                alert(data.Message);
              }
            });
          }
        }
      }, {
        key: "openShareTripModal",
        value: function openShareTripModal() {
          debugger;
          document.getElementById("openModalButton").click();
        }
      }, {
        key: "report",
        value: function report(id) {
          var _this106 = this;

          this.tripSerivce.GetTripReport(id).subscribe(function (data) {
            if (data) {
              if (data.Status) {
                _this106.genricUtlitis.showMessageToast(data.Message, true, "Success!"); //  console.log(data);

              } else {
                _this106.genricUtlitis.showMessageToast(data.Message, false, "Error!");
              }
            } else {
              _this106.genricUtlitis.showMessageToast("There was some error.", false, "Error!");
            }
          });
        }
      }]);

      return TripdetailComponent;
    }();

    TripdetailComponent.ctorParameters = function () {
      return [{
        type: _Services_TripService_trip_service__WEBPACK_IMPORTED_MODULE_3__["TripService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_6__["GenaricService"]
      }];
    };

    TripdetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tripdetail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tripdetail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tripdetail/tripdetail.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tripdetail.component.css */
      "./src/app/tripdetail/tripdetail.component.css"))["default"]]
    })], TripdetailComponent);
    /***/
  },

  /***/
  "./src/app/updatepas/updatepas.component.css":
  /*!***************************************************!*\
    !*** ./src/app/updatepas/updatepas.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUpdatepasUpdatepasComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./src/app/updatepas/updatepas.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/updatepas/updatepas.component.ts ***!
    \**************************************************/

  /*! exports provided: UpdatepasComponent */

  /***/
  function srcAppUpdatepasUpdatepasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdatepasComponent", function () {
      return UpdatepasComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _classes_User_UsersModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../classes/User/UsersModal */
    "./src/app/classes/User/UsersModal.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _Services_Users_UsersService_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Services/Users/UsersService.service */
    "./src/app/Services/Users/UsersService.service.ts");
    /* harmony import */


    var _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../Services/Utilities/genaric.service */
    "./src/app/Services/Utilities/genaric.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var UpdatepasComponent = /*#__PURE__*/function () {
      function UpdatepasComponent(router, formBuilder, userService, genricUtlitis) {
        _classCallCheck(this, UpdatepasComponent);

        this.router = router;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.genricUtlitis = genricUtlitis;
        this.submitted = false;
        this.UserPassword = new _classes_User_UsersModal__WEBPACK_IMPORTED_MODULE_2__["UserPassword"]();
      }

      _createClass(UpdatepasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadFormValidation();
        }
      }, {
        key: "loadFormValidation",
        value: function loadFormValidation() {
          this.postForm = this.formBuilder.group({
            CurrentPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            NewPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ConfirmPass: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.postForm.controls;
        }
      }, {
        key: "updateProfile",
        value: function updateProfile() {
          var _this107 = this;

          // debugger;
          this.submitted = true;

          if (this.UserPassword.NewPassword != this.UserPassword.ConfirmPass) {
            this.genricUtlitis.showMessageToast('Passwords do not match', true, _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_5__["PrintMedia"].Conformation);
            return;
          }

          if (this.postForm.invalid) return;

          if (this.UserPassword && this.postForm.valid) {
            this.userService.changePass(this.UserPassword).subscribe(function (data) {
              if (data.Status) {
                // debugger
                _this107.submitted = false; // this.genricUtlitis.showMessageToast('Password changed successfully', true, PrintMedia.Conformation);

                _this107.router.navigate(['/profile']);
              } // } else {
              //   this.genricUtlitis.showMessageToast(data.Message, data.Status, PrintMedia.Conformation);
              // }


              _this107.genricUtlitis.showMessageToast(data.Message, data.Status, _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_5__["PrintMedia"].Conformation);
            });
          }
        }
      }]);

      return UpdatepasComponent;
    }();

    UpdatepasComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _Services_Users_UsersService_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]
      }, {
        type: _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_5__["GenaricService"]
      }];
    };

    UpdatepasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-updatepas',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./updatepas.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/updatepas/updatepas.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./updatepas.component.css */
      "./src/app/updatepas/updatepas.component.css"))["default"]]
    })], UpdatepasComponent);
    /***/
  },

  /***/
  "./src/app/verify/verify.component.css":
  /*!*********************************************!*\
    !*** ./src/app/verify/verify.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppVerifyVerifyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./src/app/verify/verify.component.ts":
  /*!********************************************!*\
    !*** ./src/app/verify/verify.component.ts ***!
    \********************************************/

  /*! exports provided: VerifyComponent */

  /***/
  function srcAppVerifyVerifyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerifyComponent", function () {
      return VerifyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _Services_Users_UsersService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Services/Users/UsersService.service */
    "./src/app/Services/Users/UsersService.service.ts");
    /* harmony import */


    var _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Services/Utilities/genaric.service */
    "./src/app/Services/Utilities/genaric.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var VerifyComponent = /*#__PURE__*/function () {
      function VerifyComponent(router, formBuilder, userService, genricUtlitis) {
        _classCallCheck(this, VerifyComponent);

        this.router = router;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.genricUtlitis = genricUtlitis;
        this.submitted = false;
      }

      _createClass(VerifyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (localStorage.getItem('UserProfile')) {
            this.user = JSON.parse(localStorage.getItem('UserProfile'));
          }

          this.loadFormValidation();
        }
      }, {
        key: "loadFormValidation",
        value: function loadFormValidation() {
          this.postForm = this.formBuilder.group({
            LicenceNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            LicenceImage: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.postForm.controls;
        }
      }, {
        key: "updateProfile",
        value: function updateProfile() {
          var _this108 = this;

          // debugger;
          this.submitted = true;

          if (this.user.Licence.LicenceNumber == "") {
            this.genricUtlitis.showMessageToast("Licence number is required", true, _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_4__["PrintMedia"].Conformation);
            return;
          } // stop here if form is invalid


          if (this.postForm.invalid) {
            return;
          }

          if (this.user && this.postForm.valid) {
            this.user.Licence.LicenceImage = this.imgURL;
            this.user.Licence.LicenceImage = this.user.Licence.LicenceImage.replace("data:image/jpeg;base64,", ""); // console.log(this.user.Licence.LicenceImage);

            this.userService.updateuser(this.user).subscribe(function (data) {
              if (data.Status) {
                // debugger
                _this108.submitted = false;

                _this108.genricUtlitis.showMessageToast('Profile updated successfully', true, _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_4__["PrintMedia"].Conformation);

                _this108.userService.GetUser().subscribe(function (data) {
                  if (data) {
                    localStorage.setItem('UserProfile', JSON.stringify(data.Data));
                  }

                  _this108.router.navigate(['/profile']); // window.location.href = '/profile';

                }); // });

              } else {
                _this108.genricUtlitis.showMessageToast(data.Message, true, _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_4__["PrintMedia"].Conformation);
              }
            });
          }
        }
      }, {
        key: "preview",
        value: function preview(files) {
          var _this109 = this;

          if (files.length === 0) {
            return;
          }

          var mimeType = files[0].type;

          if (mimeType.match(/image\/*/) == null) {
            this.message = 'Only images are supported.';
            return;
          }

          var reader = new FileReader();
          this.imagePath = files;
          reader.readAsDataURL(files[0]);

          reader.onload = function (_event) {
            _this109.imgURL = reader.result;
          };
        }
      }]);

      return VerifyComponent;
    }();

    VerifyComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _Services_Users_UsersService_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]
      }, {
        type: _Services_Utilities_genaric_service__WEBPACK_IMPORTED_MODULE_4__["GenaricService"]
      }];
    };

    VerifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-verify',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./verify.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/verify/verify.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./verify.component.css */
      "./src/app/verify/verify.component.css"))["default"]]
    })], VerifyComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      //DomainUrl: 'http://api2.tripjero.com/api/'
      //  DomainUrl: 'http://localhost:54593/api/',
      //  domainToken: 'http://localhost:54593/',
      DomainUrl: "https://services.tripjero.com/api/",
      domainToken: "https://services.tripjero.com/",
      shareTripBasePath: "https://trip.tripjero.com/callback/share/trip/"
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Volumes/External/TripJero/Web/operator/tj_opt_web/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);