var matriz = [
  [1,3,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
]

function mostrarMatriz(matriz){
  var print = ""
  for(var i = 0; i < matriz.length; i++){
    for(var j = 0; j < matriz[i].length; j++){
      print += String(matriz[i][j]) + " "
    }
    print += "\n"
  }
  console.log("Matriz:\n", print)
}

function somaDaPrimeiraColuna(matriz){
  var contador = 0
  for(var i = 0; i < matriz.length; i++){
    contador += matriz[i][0]
  }
  return contador
}

function produtoDosElementosDaPrimeiraLinha(matriz){
  var contador = 1
  for(var i = 0; i < matriz[0].length; i++){
    contador *= matriz[0][i]
  }
  return contador
}

function somaDeTodosOsElementos(matriz){
  var contador = 0
  for(var i = 0; i < matriz.length; i++){
    for(var j = 0; j < matriz[i].length; j++){
      contador += matriz[i][j]
    }
  }
  return contador
}

function produtoDaDiagonalPrincipal(matriz){
  var contador = 1
  for(var i = 0; i < matriz.length; i++){
    for(var j = 0; j < matriz[i].length; j++){
      if(i === j){
        contador *= matriz[i][j]
      }
    }
  }
  return contador
}

mostrarMatriz(matriz);
console.log("Soma da primeira coluna: ", somaDaPrimeiraColuna(matriz));
console.log("Produto da primeira linha: ", produtoDosElementosDaPrimeiraLinha(matriz));
console.log("Soma de todos os elementos da matriz: ", somaDeTodosOsElementos(matriz));
console.log("Produto da diagonal principal: ", produtoDaDiagonalPrincipal(matriz));

