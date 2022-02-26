"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Client = /*#__PURE__*/function () {
  // class contructor para clientes
  function Client(name, tax) {
    var _this = this;

    _classCallCheck(this, Client);

    _defineProperty(this, "calculatorTax", function () {
      // funcion para calcular el pago del impuesto
      var result = (_this.tax.annualGrossAmount - _this.tax.deductions) * 0.21;
      return result;
    });

    this._name = name;
    this.tax = tax;
  }

  _createClass(Client, [{
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(new_client) {
      this._name = new_client;
    }
  }]);

  return Client;
}();

exports["default"] = Client;