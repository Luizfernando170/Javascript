let clientes = ["Luiz", "Filipe", "Sara", "Luna"]; // array para armazenar os nomes dos clientes

do {
    let nomeCliente = prompt("Insira os nomes dos clientes:");
    clientes.push(nomeCliente);
    continuar = prompt("Deseja inserir mais nomes? (sim/não)").toLowerCase();
} while (continuar == "sim"){};

console.log("Lista de clientes:");
clientes.forEach(cliente => console.log(cliente));