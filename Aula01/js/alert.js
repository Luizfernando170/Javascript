//var nome = "Luiz";
//let sobreNome = "Silva";
//var nome = 'Elias';
//console.log(nome);

//alert("Olá, mundo")
//let nome = prompt('Olá, Qual o seu nome?')
//alert(`Olá, ${nome}!`)

//let nota1, nota2;

//nota1 = prompt("Qual o valor da nota1")
//nota2 = prompt("Qual o valor da nota2")
//soma = nota1 + nota2 

n1 = prompt("O valor da nota1")
n2 = prompt("O valor da nota2")
n3 = prompt("O valor da nota3")
n4 = prompt("O valor da nota4")
let media = (n1 + n2 + n3 + n4)/4;
alert('sua média é: ${media}')

if(media >= 6) {
    console.log ("Aprovado");
} else {
    if (media <= 5) {
        console.log ("reprovado");
    } else {

        console.log ("recuperação");
     }
}
