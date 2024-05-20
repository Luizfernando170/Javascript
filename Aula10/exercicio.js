let jogos = [
    'Braw Stars',
    'Fortnite',
    'Spanky',
    'Pokemon Go',
    'Free Fire',
]
jogos.forEach((jogos, indice, array) =>{
    console.log(`Jogo selecionado para: ${jogos}`);
    console.log(`O seu numero é ${indice} na lista.`);
    console.log(`Elemento da lista: ${array}`);
});