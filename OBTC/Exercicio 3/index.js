let metro = prompt("Quantos metros você quer converter?")

let undMedida = prompt("Qual a unidade de medida? \nmm \ncm \ndm \ndam \nnhm \nkm")

let medidaConvertida

switch(undMedida) {
    case "mm": 
    medidaConvertida = metro * 1000
    alert(metro + " metros são: " + medidaConvertida + " mm")
    break

    case "cm": 
    medidaConvertida = metro * 100
    alert(metro + " metros são: " + medidaConvertida + "cm")
    break

    case "dm": 
    medidaConvertida = metro * 10
    alert(metro + " metros são: " + medidaConvertida + "dm")
    break

    case "dam": 
    medidaConvertida = metro / 10
    alert(metro + " metros são: " + medidaConvertida + "dam")
    break

    case "hm": 
    medidaConvertida = metro / 100
    alert(metro + " metros são: " + medidaConvertida + "hm")
    break

    case "km": 
    medidaConvertida = metro * 1000
    alert(metro + " metros são: " + medidaConvertida + "km")
    break

    default:
        alert("Medida não existente!")
}