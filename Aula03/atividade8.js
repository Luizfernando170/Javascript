let pesoUsuario = Number(prompt("insira seu peso"));
let alturaUsuario = Number(prompt("insira sua altura"));
let imc = (peso/(altura * altura));
alert ("seu peso está saudável")
if (imc <=18.5 && imc <=24.9) {
    alert ("seu peso está saudável");
} else {
    alert ("seu peso não está saudável");
}