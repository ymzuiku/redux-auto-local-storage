!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var o in r)("object"==typeof exports?exports:e)[o]=r[o]}}(window,function(){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t,r){"use strict";var o=r(/*! @babel/runtime/helpers/interopRequireDefault */1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){"[object Array]"!==Object.prototype.toString.call(r)&&console.warn("autoStorageSave: params is no a Array");a.localName=t||a.localName;var o={};r.forEach(function(e){o[e]=void 0});var l=a.load(a.localName);"[object Object]"===Object.prototype.toString.call(l)&&e.dispatch({type:"localStorageLoad: IO",reducer:function(e){if(e&&e.toJS){var t=(0,n.default)({},e.toJS(),l);for(var r in t)e=e.set(r,t[r]);return e}return(0,n.default)({},e,l)}});e.subscribe(function(){var t=e.getState();if(t&&t.toJS){var n={},l=!1;r.forEach(function(e){"[object Array]"===Object.prototype.toString.call(e)?n[e]=t.getIn(e):n[e]=t.get(e),o[e]!==n[e]&&(l=!0),o[e]=n[e]}),l&&a.save(n)}else{var c={},i=!0;r.forEach(function(e){c[e]=t[e],o[e]!==c[e]&&(i=!0),o[e]=c[e]}),i&&a.save(c)}})},t.storage=void 0;var n=o(r(/*! @babel/runtime/helpers/objectSpread */2)),a={localName:"defaultIOKey",save:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.localName,r=Object.prototype.toString.call(e);"[object Object]"===r?localStorage.setItem(t,JSON.stringify(e)):"[object String]"===r?localStorage.setItem(t,e):console.warn("Warn: storage.save() param is no a Object")},load:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.localName;try{var t=localStorage.getItem(e);if(t)return"string"==typeof t?JSON.parse(t):t}catch(e){console.warn("load last localSate error")}},clear:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.localName;localStorage.setItem(e,{})}};t.storage=a},
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/interopRequireDefault" ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t){e.exports=require("@babel/runtime/helpers/interopRequireDefault")},
/*!******************************************************!*\
  !*** external "@babel/runtime/helpers/objectSpread" ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t){e.exports=require("@babel/runtime/helpers/objectSpread")}])});
//# sourceMappingURL=index.js.map