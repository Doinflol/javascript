let carro1 = prompt ('Qual a velocidade do primeiro carro?')
let carro2 = prompt ("Qual a velocidade do segundo carro?")

alert("A velocidade do primeiro carro é: " + carro1 + "Km/h" +
"\nA velocidade do segundo carro é: " + carro2 + "Km/h"
)

if (carro1 === carro2) {
    alert("Ambos os carros possuem a mesma velocidade")
} else if (carro1 > carro2) {
    alert("O primeiro carro é mais rápido")
} else {
    alert("O segundo carro é mais rápido")
}