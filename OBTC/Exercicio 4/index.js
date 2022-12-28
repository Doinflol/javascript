let nome = prompt("Qual o seu nome?")
let jaVisitou = confirm("Já visitou alguma cidade?")
let cidade
let cidades = ""
let quantidade = 0

while (jaVisitou) {
    cidade = prompt("Qual o nome da cidade?")
    cidades += " - " + cidade + "\n"
    quantidade ++
    jaVisitou = confirm("Visitou alguma outra cidade?")
}

if (quantidade === 1) {
    alert(nome + " já visitou a cidade: " + cidades)
} else if (quantidade > 1) {
    alert(nome + " já visitou " + quantidade + " cidades." + "\nElas são:\n" + cidades)
} else {
    alert("Não viajou à nenhuma cidade.")
}
