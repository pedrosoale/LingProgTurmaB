function listarNumeros() {
  var inNumero = document.getElementById("inNumero")
  var outResposta = document.getElementById("outResposta")

  var numero = Number(inNumero.value)

  // validar número
  if(numero == 0 || isNaN(numero)) {
    alert("Informe um número válido")
    inNumero.focus()
    return
  }

  //inicializar a variável resposta
  var resposta = "Entre " + numero + " e 1: "

  // criar laço 
  for(var i = numero; i > 0; i--) {
    // resposta vai acumelando números (e vírgulas)
    resposta = resposta + i + ", "
  }

  // alterar conteúdo do outResposta
  outResposta.textContent = resposta
}
var btDecrescer = document.getElementById("btDecrescer")
btDecrescer.addEventListener("click", listarNumeros)