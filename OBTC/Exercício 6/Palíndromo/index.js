let word = prompt("Verificador de palíndromo: " + 
"\nDigite uma palavra para verificar se é um palindromo: ")
let palindromo = ""

for (let indice = word.length - 1; indice >= 0; indice--) {
    palindromo += word[indice]
}

if (palindromo === word) {
    alert("Esta palavra é um palindromo" +
    "\nPalavra: " + word +
    "\nPalindromo: " + palindromo)
} else {
    alert("Essa palavra não é um palíndromo" + 
    "\nPalavra: " + word +
    "\nPalindromo: " + palindromo)
}