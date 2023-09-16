function mostrarPromocao() {
  // referenciar os elementos da página
  var inVeiculo = document.getElementById("inVeiculo")
  var inPreco = document.getElementById("inPreco")
  var outVeiculo = document.getElementById("outVeiculo")
  var outEntrada = document.getElementById("outEntrada")
  var outParcelas = document.getElementById("outParcelas")

  // obter os dados de entrada
  var veiculo = inVeiculo.value 
  var preco = Number(inPreco.value)

  //calcular entrada e parcelas
  var entrada = preco * 0.50
  var parcelas = (preco * 0.50) / 12

  // alterar conteúdo dos parágrafos
  outVeiculo.textContent = "Promoção: " + veiculo
  outEntrada.textContent = "Entrada de R$ " + entrada.toFixed(2)
  outParcelas.textContent = "+ 12x de R$ " + parcelas.toFixed(2)
}
// criar referência ao botão btVerPromocao
var btVerPromocao = document.getElementById("btVerPromocao")
// registrar entradas e associar o botão para carregar a função
btVerPromocao.addEventListener("click", mostrarPromocao)