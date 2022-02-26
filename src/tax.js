export default class Tax {
  // class contructor para impuestos
  constructor(annualGrossAmount, deductions) {
    this._annualGrossAmount = annualGrossAmount;
    this._deductions = deductions;
  }

  get annualGrossAmount() {
    return this._annualGrossAmount;
  }
  set annualGrossAmount(new_annualGrossAmount) {
    this._annualGrossAmount = new_annualGrossAmount;
  }
  get deductions() {
    return this._deductions;
  }
  set deductions(new_deductions) {
    this._deductions = new_deductions;
  }
}
