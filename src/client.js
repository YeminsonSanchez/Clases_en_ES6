export default class Client {
  // class contructor para clientes
  constructor(name, tax) {
    this._name = name;
    this.tax = tax;
  }
  get name() {
    return this._name;
  }
  set name(new_client) {
    this._name = new_client;
  }
  calculatorTax = () => {
    // funcion para calcular el pago del impuesto
    let result = (this.tax.annualGrossAmount - this.tax.deductions) * 0.21;
    return result;
  };
}
