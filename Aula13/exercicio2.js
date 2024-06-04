let usuario1 = Number(document.querySelector(`tamanho`).value)
let usuario2 = Number(document.querySelector(`peso`).value)
let imc = psedousuario(tamanhodoUsuario * alturadoUsusario)

let primeiro = document.getElementById("primeiro")

if (imc < 16.9) {
    primeiro.innerHTML = "Muito abaixo do peso.";
} else if (imc >= 16.9 && imc < 18.5) {
    primeiro.innerHTML =  "Abaixo do peso.";
} else if (imc >= 18.5 && imc < 24.9) {
    primeiro.innerHTML =  "Peso normal.";
} else if (imc >= 25 && imc < 29.9) {
    primeiro.innerHTML = "Acima do peso.";
} else if (imc >= 30 && imc < 34.9) {
    primeiro.innerHTML = "Obesidade grau I.";
} else if (imc >= 35 && imc < 39.9) {
    primeiro.innerHTML = "Obesidade grau II.";
} else if (imc >= 40) {
    primeiro.innerHTML = "Obesidade grau III.";
}

let calcular = document.querySelector("#botaoEnviar")
calcular.addEventListener('click', calcularIMC)