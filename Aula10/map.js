let alunos = [
    {
        Nome:'Lucas', 
        RA: 20240101,
        Matriculado: true
    },
    {
        Nome:'Davi',
        RA:46758985,
        Matriculado:true
    },
    {
        Nome:'Gabi',
        RA:40458989,
        Matriculado:false
    },
]
let nomeAlunos = alunos.map((nome)=>{
    return nome.Nome
})

console.log(nomeAlunos);

let raAlunos = alunos.map((RA)=>{
    return RA.RA
})
console.log(raAlunos);

let Matriculado = alunos.map((Matriculado)=>{
    return Matriculado.Matriculado
})

let nomeMaior = nomeAlunos.map((nomes)=>{
    return nomes.toUpperCase()
})

console.log(nomeMaior);