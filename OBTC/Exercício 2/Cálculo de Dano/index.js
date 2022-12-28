let personagem1 = prompt("Qual o nome do personagem:")
let atkPersonagem1 = prompt("Quanto de ataque possui o personagem:")
let lifePersonagem1 = prompt("Quanto de vida possui o personagem:")
let personagem2 = prompt("Qual o nome do outro personagem:")
let defPersonagem2 = prompt("Quanto de defesa esse personagem possui:")
let shieldPersonagem2 = confirm("O personagem possui escudo?")
let truedamage = atkPersonagem1 - defPersonagem2

console.log(shieldPersonagem2)
console.log(atkPersonagem1)
console.log(defPersonagem2)

if (atkPersonagem1 > defPersonagem2 && shieldPersonagem2 === false) {
    alert(personagem1 + " Causou: " + truedamage)
} else if (atkPersonagem1 > defPersonagem2 && shieldPersonagem2) {
    let dano = truedamage/2
    alert(personagem1 + " Causou: " + dano)
} else {
    alert(personagem2 + " Não sofreu dano")
}

alert(
    personagem1 + ":\n" +
    "Vida: 100" +
    "\nAtaque: " + atkPersonagem1 +
    "\nDefesa: 10"
)

alert(
    personagem2 + ":\n" +
    "Vida: " + (100 - truedamage) +
    "\nAtaque: 20" +
    "\nDefesa: " + defPersonagem2
)