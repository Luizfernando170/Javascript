class celular {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    desbloquearCelular(){
        return "Celular desbloqueado"
        // console.log("Celular desbloqueado");
    }
    efetuarLigação(){
        return "efetuando Ligação"
    }
}

let Kimberly = new celular("Samsung", "A32", 2022)

console.log(typeof Kimberly);
console.log(Kimberly.modelo);

let Vitoria = new celular ("Samsung", "G9", 2022)
console.log(typeof Vitoria);
console.log(Vitoria.modelo);

let Pedro = new celular ("Samsung", "s21Fe", 2023)
console.log(typeof Pedro);
console.log(Pedro.modelo);