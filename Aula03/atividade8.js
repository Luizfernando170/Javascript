let peso = (prompt("insira seu peso"));
let altura = (prompt("insira sua altura"));
let imc = (peso/(altura * altura));
alert ("seu peso está saudável")
if (peso <18.5) {
    alert ("seu peso está saudável");
} else if (peso >24.9){
    alert ("seu peso não está saudável");
} 