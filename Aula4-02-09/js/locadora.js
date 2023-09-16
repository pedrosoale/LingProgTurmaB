function converterDuracao () {
  // criar referência aos elementos da página
  var inTitulo = document.getElementById("inTitulo")
  var inDuracao = document.getElementById("inDuracao")
  var outTitulo = document.getElementById("outTitulo")
  var outDuracao = document.getElementById("outDuracao")

  // obtém os conteúdos dos campos de entrada
  var titulo = inTitulo.value
  var duracao = Number(inDuracao.value) 

  // arredonda hora pra baixo
  var horas = Math.floor(duracao / 60)
  // obter os minutos
  var minutos = duracao % 60

  // altera parágrafos de respostas
  outTitulo.textContent = titulo;
  outDuracao.textContent = horas + " hora(s) e " + minutos + " minuto(s)"
}
// criar referência ao elemento btConverter
var btConverter = document.getElementById("btConverter")
// registar o evento associado ao botão e chamar a função
btConverter.addEventListener("click", converterDuracao)