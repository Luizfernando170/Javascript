let valor = 1000;
let cupom = prompt("insira seu cupom");


switch (cupom.toUpperCase()) {
    case "DESC1":
        valorCupom = 0.005
        desconto = valor - ( valorCupom * valor)
        alert(`você conseguiu ${valorCupom * 100}% do desconto da sua compra ${valor}, o valor final ficou ${desconto}`);
        break;

        case "DESC2":
            valorCupom = 0.10
            desconto = valor - (valorCupom * valor)
        alert(`você conseguiu ${valorCupom * 100}% do desconto da sua compra ${valor}, o valor final ficou ${desconto}`);
        break;

        case "DESC3":
            valorCupom = 0.15
            desconto = valor - (valorCupom * valor)
        alert(`você conseguiu ${valorCupom * 100}% do desconto da sua compra ${valor}, o valor final ficou ${desconto}`);
        break;

        case "DESC4":
            valorCupom = 0.20
            desconto = valor - (valorCupom * valor)
        alert(`você conseguiu ${valorCupom * 100}% do desconto da sua compra ${valor}, o valor final ficou ${desconto}`);
        break;

        case "DESC5":
            valorCupom = 0.25
            desconto = valor - (valorCupom * valor)
            alert(`você conseguiu ${valorCupom * 100}% do desconto da sua compra ${valor}, o valor final ficou ${desconto}`);
        break;
        default:  alert("O cupom informado não existe");
        }


