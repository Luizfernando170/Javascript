function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function calcularValorEmEuro(valorEmReal) {
    const taxaDeCambio = 5.13;
    return valorEmReal / taxaDeCambio;
}

let peso = 70;
let altura = 1.75;

function verificarFaixaDePeso(imc) {
    if (imc < 16.9) {
        return "Você está na faixa de peso: Muito abaixo do peso.";
    } else if (imc >= 16.9 && imc < 18.5) {
        return "Você está na faixa de peso: Abaixo do peso.";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Você está na faixa de peso: Peso normal.";
    } else if (imc >= 25 && imc < 29.9) {
        return "Você está na faixa de peso: Acima do peso.";
    } else if (imc >= 30 && imc < 34.9) {
        return "Você está na faixa de peso: Obesidade grau I.";
    } else if (imc >= 35 && imc < 39.9) {
        return "Você está na faixa de peso: Obesidade grau II.";
    } else if (imc >= 40) {
        return "Você está na faixa de peso: Obesidade grau III.";
    }
}

const imc = calcularIMC(peso, altura);
console.log("O IMC do usuário é:", imc.toFixed(1));
console.log(verificarFaixaDePeso(imc));

const valorEmReal = 100;
const valorEmEuro = calcularValorEmEuro(valorEmReal);
console.log("O valor em euro é:", valorEmEuro.toFixed(2));

