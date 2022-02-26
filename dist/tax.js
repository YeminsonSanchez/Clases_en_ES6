"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Tax = /*#__PURE__*/function () {
  // class contructor para impuestos
  function Tax(annualGrossAmount, deductions) {
    _classCallCheck(this, Tax);

    this._annualGrossAmount = annualGrossAmount;
    this._deductions = deductions;
  }

  _createClass(Tax, [{
    key: "annualGrossAmount",
    get: function get() {
      return this._annualGrossAmount;
    },
    set: function set(new_annualGrossAmount) {
      this._annualGrossAmount = new_annualGrossAmount;
    }
  }, {
    key: "deductions",
    get: function get() {
      return this._deductions;
    },
    set: function set(new_deductions) {
      this._deductions = new_deductions;
    }
  }]);

  return Tax;
}();

exports["default"] = Tax;