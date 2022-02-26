import Client from "./client.js";
import Tax from "./tax.js";

let tax1 = new Tax(100, 10); // para agregar clientes a la class Cliente
let client1 = new Client("juan", tax1); // para agregar monto bruto anual y deducciones
let tax2 = new Tax(1000000, 200000); // para agregar clientes a la class Cliente
let client2 = new Client("Maria", tax2); // para agregar monto bruto anual y deducciones
console.log(
  //se imprime la informacion de cliente1
  `cliente ${client1.name} su impuesto es: ${client1.calculatorTax()}.`
);

console.log(
  //se imprime la informacion de cliente1
  `cliente ${client2.name} su impuesto es: ${client2.calculatorTax()}.`
);

let updateClient = (client, tax) => {
  //funcion para modificar clientes
  client = "pedro";
  tax.annualGrossAmount = 20;
  tax.deductions = 2;
  let newTax = new Tax(tax.annualGrossAmount, tax.deductions);
  let newClient = new Client(client, newTax);
  console.log(
    `modificacion exitosa nuevo nombre de cliente: 
    ${
      newClient.name
    } y su nuevo impuesto a pagar es: ${newClient.calculatorTax()}`
  );
};
updateClient(client1.name, client1.tax);
