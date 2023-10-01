function mostrarTabuada() {
  // criar referência aos elementos da página
  var inNumero = document.getElementById("inNumero")
  var outTabuada = document.getElementById("outTabuada")

  // converter conteúdo do campo inNumero
  var numero = Number(inNumero.value)

  // validar número
  if(numero == 0 || isNaN(numero)) {
    alert("Informe um número válido")
    inNumero.focus()
    return
  }

  // criar uma variável do tipo string, que irá concatenar a resposta
  var resposta = ""

  // criar um laço de repetição
  for(var i = 1; i <= 10; i++){
    // a variável resposta vai acumulando os novos conteúdos
    resposta = resposta + numero + " x " + i + " = " + numero * i + "\n"
  }

  // alterar o conteúdo da tag pre
  outTabuada.textContent = resposta
}
var btMostrar = document.getElementById("btMostrar")
btMostrar.addEventListener("click", mostrarTabuada)