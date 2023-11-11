var carros = []     // declara vetor global

function adicionarCarros() {
  // criar referência e obter os dados de entrada
  var inModelo = document.getElementById("inModelo")
  var inPreco = document.getElementById("inPreco")

  var modelo = inModelo.value
  var preco = Number(inPreco.value)

  // validar campos
  if(modelo == "" || preco == 0 || isNaN(preco)){
    alert("Informe corretamente os dados.")
    inModelo.focus()
    return
  }

  // adicionar dados ao vetor de objetos
  carros.push({modelo: modelo, preco: preco})

  // limpar campos e posicinar curso em inModelo
  inModelo.value = ""
  inPreco.value = ""
  inModelo.focus()

  listarCarros()    // chama function que lista os carros
}
var btAdicionar = document.getElementById("btAdicionar")
btAdicionar.addEventListener("click", adicionarCarros)

function listarCarros() {
  // Verifica se vetor está vazio
  if(carros.length == 0){
    alert("Não há carros na lista.")
    return
  }

  var lista = ""    // para concatenar a lista de carros

  // percerre os elementos do vetor
  for (var i = 0; i < carros.length; i++){
    // adicinar à lista de carros, cada objeto do vetor
    lista += carros[i].modelo + " - R$ " + carros[i].preco.toFixed(2) + "\n"
  }

  // referecia o elemento e altera conteúdo exibido
  document.getElementById("outLista").textContent = lista
}
var btListar = document.getElementById("btListar")
btListar.addEventListener("click", listarCarros)

function filtrarCarros() {
  // faz a leitura do valor máximo a partir do método prompt
  var maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"))

  // Verifica se preencheu corretamente
  if(maximo == 0 || isNaN(maximo)){
    return
  }

  // concatenar lista de carros que obedece ao critério de pesquisa / filtro
  var lista = ""

  for(var i = 0; i < carros.length; i++){
    // verifica se o preço é inferior (ou igual) ao máximo
    if(carros[i].preco <= maximo) {
      lista += carros[i].modelo + " - R$ " + carros[i].preco.toFixed(2) + "\n"
    }
  }

  var outLista = document.getElementById("outLista")

  //se a lista está vazia, significa que nenhum veículo foi encontrado (no for)
  if (lista == "") {
    outLista.textContent = "Não há carros com preço até R$ " + maximo.toFixed(2)
  } else {
    outLista.textContent = "Carros até R$ " + maximo.toFixed(2) + 
                            "\n--------------------------\n" + lista
  }
}
var btFiltrar = document.getElementById("btFiltrar")
btFiltrar.addEventListener("click", filtrarCarros)