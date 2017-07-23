/*! w2b.js by Thuan Le, email: vanthuan296@gmail.com */
var w2b =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var data = {
  scope: {},
  scopeDefault: {},
  element: { set: {}, get: {} }
};
exports.default = data;
module.exports = exports["default"];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var innerHtml = function innerHtml(o, v) {
  var lng = o.length;
  for (var index in o) {
    if (index < lng) {
      o[index].innerHTML = v;
    }
  }
};

exports.innerHtml = innerHtml;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var setDataElement = function setDataElement(o, v) {
  var lng = o.length;
  for (var index in o) {
    if (index < lng) {
      o[index].value = v;
    }
  }
};

exports.setDataElement = setDataElement;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isObject = function isObject(o) {
  return o instanceof Object;
};

var isInObject = function isInObject(obj, attrs) {
  var flag = false;
  for (var key in obj) {
    if (attrs == key) {
      flag = true;
      break;
    }
  }
  return flag;
};

exports.isObject = isObject;
exports.isInObject = isInObject;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _boot = __webpack_require__(5);

var _boot2 = _interopRequireDefault(_boot);

var _setElement = __webpack_require__(6);

var _setElement2 = _interopRequireDefault(_setElement);

var _store = __webpack_require__(0);

var _store2 = _interopRequireDefault(_store);

var _util = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var w2b = function w2b(attrs, default_value) {
  new _boot2.default(attrs, default_value);
};

w2b.prototype.get = function (attrs) {
  if (attrs) {
    return _store2.default.scope[attrs];
  }
  return _store2.default.scope;
};

w2b.prototype.set = function (obj) {
  if (!(0, _util.isObject)(obj)) {
    console.log('%c Must be an object! ', 'background: #d8252c; color: #fff');
    return false;
  }
  new _setElement2.default(obj);
};

exports.default = w2b;
module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _store = __webpack_require__(0);

var _store2 = _interopRequireDefault(_store);

var _innerHtml = __webpack_require__(1);

var _setDataElement = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Boot = function () {
  function Boot(attrs, default_value) {
    _classCallCheck(this, Boot);

    this.defaultValue = default_value;
    this.initial(attrs);
  }

  _createClass(Boot, [{
    key: 'initial',
    value: function initial(attrs) {
      var self = this;
      Object.keys(attrs).map(function (objectKey) {
        _store2.default.element['set'][objectKey] = document.querySelectorAll('[w2b-model~="' + attrs[objectKey] + '"]');
        _store2.default.element['get'][objectKey] = document.querySelectorAll('[w2b-bind~="' + objectKey + '"]');
        if (typeof self.defaultValue[objectKey] != "undefined") {
          _store2.default.scope[objectKey] = self.defaultValue[objectKey];
          _store2.default.scopeDefault[objectKey] = self.defaultValue[objectKey];
          (0, _setDataElement.setDataElement)(_store2.default.element.set[objectKey], self.defaultValue[objectKey]);
          (0, _innerHtml.innerHtml)(_store2.default.element.get[objectKey], self.defaultValue[objectKey]);
        } else {
          _store2.default.scope[objectKey] = null;
          _store2.default.scopeDefault[objectKey] = null;
        }
      });
      this.watcher();
    }
  }, {
    key: 'watcher',
    value: function watcher() {
      var self = this;
      Object.keys(_store2.default.element.set).map(function (objectKey) {
        var lng = _store2.default.element.set[objectKey].length;
        for (var index in _store2.default.element.set[objectKey]) {
          if (index < lng) {
            var type = _store2.default.element.set[objectKey][index].type;
            if (type == 'text' || type == 'textarea') {
              // on input text or text area
              _store2.default.element.set[objectKey][index].oninput = function () {
                self.setDataStore(objectKey, this.value);
              };
            } else if (type == "select-one" || type == 'select-multiple') {
              _store2.default.element.set[objectKey][index].onchange = function () {
                self.setDataStore(objectKey, this.value);
              };
            } else if (type == 'checkbox' || type == "radio") {
              _store2.default.element.set[objectKey][index].onchange = function (e) {
                self.setDataStore(objectKey, e.target.checked);
              };
            }
          }
        }
      });
    }
  }, {
    key: 'setDataStore',
    value: function setDataStore(objectKey, value) {
      (0, _innerHtml.innerHtml)(_store2.default.element.get[objectKey], value);
      _store2.default.scope[objectKey] = value;
    }
  }]);

  return Boot;
}();

exports.default = Boot;
module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _store = __webpack_require__(0);

var _store2 = _interopRequireDefault(_store);

var _util = __webpack_require__(3);

var _innerHtml = __webpack_require__(1);

var _setDataElement = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SetElement = function () {
  function SetElement(obj) {
    _classCallCheck(this, SetElement);

    this.initial(obj);
  }

  _createClass(SetElement, [{
    key: 'initial',
    value: function initial(obj) {
      var validate = this.validate(obj);
      if (!validate.isValid) {
        console.log("%c Key " + validate.keyReturn + " not found!", 'background: #d8252c; color: #fff');
        return false;
      }
      Object.keys(obj).map(function (objectKey) {
        (0, _setDataElement.setDataElement)(_store2.default.element.set[objectKey], obj[objectKey]);
        (0, _innerHtml.innerHtml)(_store2.default.element.get[objectKey], obj[objectKey]);
        _store2.default.scope[objectKey] = obj[objectKey];
      });
    }
  }, {
    key: 'validate',
    value: function validate(obj) {
      var flag = true;
      var keyReturn = void 0;
      for (var key in obj) {
        if (!(0, _util.isInObject)(_store2.default.scope, key)) {
          flag = false;
          keyReturn = key;
          break;
        }
      }
      return { isValid: flag, keyReturn: keyReturn };
    }
  }]);

  return SetElement;
}();

exports.default = SetElement;
module.exports = exports['default'];

/***/ })
/******/ ]);
//# sourceMappingURL=w2b.js.map