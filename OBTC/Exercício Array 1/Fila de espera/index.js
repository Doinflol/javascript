let queue = ["1º Marcos", "2º Leandro", "3º Matheus", "4º Fernando"]
let number = 4
let command
do {
    command = (prompt("Lista de pacientes:\n" +
    queue.join('\n') +
    "\n" +
    "\na-) Adicionar Novo Paciente" +
    "\nb-) Remover Paciente" +
    "\nc-) Sair"
    )).toLowerCase()
    switch (command) {
        case "a": number++ 
        let lastElement = number + "º " + prompt("Qual o nome do novo paciente?")
        queue.push(lastElement)
        break
        case "c": alert("Saindo...")
        break
        case "b": 
        let consultado = queue.pop()
        alert(consultado + " - paciente removido")
        number --
    }
} while (command !== "c")


