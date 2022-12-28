let option;

do {
  option = prompt(
    "Escolha uma das opções abaixo:" +
      "\nA)" +
      "\nB)" +
      "\nC)" +
      "\nD)" +
      "\nEncerrar"
  )
} while (option.toLowerCase() !== "encerrar");

alert("O Sistema está sendo encerrado.");
