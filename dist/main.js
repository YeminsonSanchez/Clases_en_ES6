"use strict";

var _client = _interopRequireDefault(require("./client.js"));

var _tax = _interopRequireDefault(require("./tax.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var tax1 = new _tax["default"](100, 10); // para agregar clientes a la class Cliente

var client1 = new _client["default"]("juan", tax1); // para agregar monto bruto anual y deducciones

var tax2 = new _tax["default"](1000000, 200000); // para agregar clientes a la class Cliente

var client2 = new _client["default"]("Maria", tax2); // para agregar monto bruto anual y deducciones

console.log( //se imprime la informacion de cliente1
"cliente ".concat(client1.name, " su impuesto es: ").concat(client1.calculatorTax(), "."));
console.log( //se imprime la informacion de cliente1
"cliente ".concat(client2.name, " su impuesto es: ").concat(client2.calculatorTax(), "."));

var updateClient = function updateClient(client, tax) {
  //funcion para modificar clientes
  client = "pedro";
  tax.annualGrossAmount = 20;
  tax.deductions = 2;
  var newTax = new _tax["default"](tax.annualGrossAmount, tax.deductions);
  var newClient = new _client["default"](client, newTax);
  console.log("modificacion exitosa nuevo nombre de cliente: \n    ".concat(newClient.name, " y su nuevo impuesto a pagar es: ").concat(newClient.calculatorTax()));
};

updateClient(client1.name, client1.tax);