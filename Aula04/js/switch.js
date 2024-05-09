let avaliacao = "a"
// A - ótimo
// B - bom
// C - regular
// D - ruim
// E - péssimo
switch (avaliacao.toUpperCase()) {
    case "A":
        console.log("avaliação ótima!");
        break;
        case "B":
            console.log("avliação bom");
            break;
            case "C":
            console.log("avaliação regular");
            break;
            case "D":
                console.log("Avaliação ruim");
            break;
            case "E":
                console.log("avalição péssimo");
                break;
    default: console.log("Não Avaliado.");
        break;
}
