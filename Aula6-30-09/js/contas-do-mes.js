// declarar e inicializar contadores e acumuladores (variáveis globais)
var numContas = 0
var valTotal = 0

// variável string que acumula as contas
var resposta = ""

function registraConta() {
  // criar referência aos elementos da página
  var inDescricao = document.getElementById("inDescricao")
  var inValor = document.getElementById("inValor")
  var outListaContas = document.getElementById("outListaContas")
  var outTotal = document.getElementById("outTotal")

  // obter conteúdos dos campos
  var descricao = inDescricao.value 
  var valor = Number(inValor.value)

  // validação de daedos de entrada
  if (descricao == "" || valor == 0 || isNaN(valor)) {
    alert("Informe os dados corretamente...")
    inDescricao.focus()
    return
  }

  //adicionar valores ao contador e acumulador
  numContas++
  valTotal = valTotal + valor

  // concatenar as contas
  resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n"

  // alterar conteúdo das tags de resposta
  outListaContas.textContent = resposta + "-------------------------"
  outTotal.textContent = numContas + " Conta(s) - Total R$ " + valTotal.toFixed(2)

  // limpar campos e posicionar o cursos em inDescricao
  inDescricao.value = ""
  inValor.value = ""
  inDescricao.focus()
}
// referência ao botão 
var btRegistrar = document.getElementById("btRegistrar")
btRegistrar.addEventListener("click", registraConta)