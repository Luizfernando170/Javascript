const calcularIMC = () => {
  let peso = Number(document.querySelector('#tamanho').value);
  let altura = Number(document.querySelector('#peso').value);
  let imc = (peso / (altura ** 2)).toFixed(2);

 let resultado = document.querySelector('#primeiro');
 resultado.innerHTML = `IMC ${IMC}`

   if (imc < 16.9) {
     resultado.innerHTML = `o seu IMC é: ${IMC}Muito abaixo do peso.`;
     } else if (imc >= 16.9 && imc < 18.5) {
      resultado.innerHTML =  `o seu IMC é: ${IMC}Abaixo do peso.`;
     } else if (imc >= 18.5 && imc < 24.9) {
      resultado.innerHTML =  `o seu IMC é: ${IMC}Peso normal.`;
     } else if (imc >= 25 && imc < 29.9) {
      resultado.innerHTML = `o seu IMC é: ${IMC}Acima do peso.`;
     } else if (imc >= 30 && imc < 34.9) {
      resultado.innerHTML = `o seu IMC é: ${IMC}Obesidade grau I.`;
     } else if (imc >= 35 && imc < 39.9) {
      resultado.innerHTML = `o seu IMC é: ${IMC} Obesidade grau II.`;
     } else if (imc >= 40) {
      resultado.innerHTML = `o seu IMC é: ${IMC} Obesidade grau III.`;
     }

}

let calcular = document.querySelector("#botaoEnviar")
calcular.addEventListener('click', calcularIMC)