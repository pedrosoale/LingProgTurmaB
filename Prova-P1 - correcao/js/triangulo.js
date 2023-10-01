function verificarTriangulo() {
  // obtém elementos da página: Esta etapa vale 2,0 pontos
  var inLadoA = document.getElementById("inLadoA")
  var inLadoB = document.getElementById("inLadoB")
  var inLadoC = document.getElementById("inLadoC")
  var outSimNao = document.getElementById("outSimNao")
  var outTipo = document.getElementById("outTipo")

  // converte dados de entrada: Esta etapa vale 2,0 pontos
  ladoA = Number(inLadoA.value)
  ladoB = Number(inLadoB.value)
  ladoC = Number(inLadoC.value)

  // valida os dados de entrada: Esta etapa vale 2,0 pontos
  if(ladoA == 0 || ladoB == 0 || ladoC == 0 || isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)) {
    alert("Informe dados válidos para o triângulo")
    inLadoA.focus()
    return
  }

  // cria as condições para exibir a resposta: Esta etapa vale 2,0 pontos
  if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
    outSimNao.textContent = "Lados não podem formar um triângulo."
  } else {
    outSimNao.textContent = "Lados podem formar um triângulo."
    if (ladoA == ladoB && ladoA == ladoC) {
      outTipo.textContent = "Triângulo equilátero."
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
      outTipo.textContent = "Triângulo isósceles."
    } else {
      outTipo.textContent = "Triângulo escaleno."
    }
  }

}
// Cria uma referência e o evento click do botão: Esta etapa vale 1,0 ponto
var btVerificar = document.getElementById("btVerificar")
btVerificar.addEventListener("click", verificarTriangulo)