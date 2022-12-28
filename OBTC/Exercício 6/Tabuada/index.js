let texto = ""
let numero1 = prompt("Escolha um número para mostrar sua tabuada até o múltiplo de 20: ")

for(let indice = 0; indice <= 20; indice++) {
    texto += " - " + numero1 * indice + "\n"
    alert(texto)
}