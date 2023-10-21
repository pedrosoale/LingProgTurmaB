function verificarPrimo() {
  // criar referência ao elementos da página
  var inNumero = document.getElementById("inNumero")
  var outResposta = document.getElementById("outResposta")

  var num = Number(inNumero.value)

  // verificar se inseriu numero válido
  if (num == 0 || isNaN(num)) {
    alert("Informe um número válido...")
    inNumero.focus()
    return
  }

  var temDivisor = 0 // inicializa o contador

  //percorre os possíveis divisores do numero
  for(var i = 2; i <= num/2; i++){
    if(num % i == 0) {
      temDivisor = 1
      break
    }
  }

  if (num > 1 && !temDivisor) {
    outResposta.textContent = num + " é PRIMO!"
  } else {
    outResposta.textContent = num + " não é PRIMO!"
  }
}
var btVerificarPrimo = document.getElementById("btVerificarPrimo")
btVerificarPrimo.addEventListener("click", verificarPrimo)