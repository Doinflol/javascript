let nome = window.prompt('Primeiro Nome:')
let sobrenome = prompt('Sobrenome:')
let estudo = prompt('Campo de Estudo:')
let nascimento = prompt('Ano de Nascimento:')




window.alert(
    'Recruta cadastrado com sucesso!\n' +
    '\nNome Completo: ' + nome + ' ' + sobrenome +
    '\nCampo de Estudo: ' + estudo +
    '\nIdade: ' + (2022 - nascimento)
    )