var pacientes = []  // ceclara vetor global

function adicionarPaciente() {
  // criar referência aos elementos de entrada e saída de dados da página
  var inPaciente = document.getElementById("inPaciente")
  var outLista = document.getElementById("outLista")

  var nome = inPaciente.value   // obtém nome do paciente

  // verificar preenchimento do nome do paciente
  if (nome == "") {
    alert("Informe o nome do paciente")
    inPaciente.focus()
    return
  }

  pacientes.push(nome)  // adicina nome ao final da fila

  var lista = ""        // string para concatenar os pacientes

  // percerre os elementos do vetor
  for (i = 0; i < pacientes.length; i++) {
    lista += (i + 1) + "." + pacientes[i] + "\n"
  }

  // altera o conteúdo outLista
  outLista.textContent = lista

  // limpa campo e posiciona curso em inPaciente
  inPaciente.value = ""
  inPaciente.focus()
}
// criar referência ao btAdicionar e associa function ao evento click
var btAdicionar = document.getElementById("btAdicionar")
btAdicionar.addEventListener("click", adicionarPaciente)

function adicionarUrgencia() {
  // criar referência aos elementos de entrada e saída de dados da página
  var inPaciente = document.getElementById("inPaciente")
  var outLista = document.getElementById("outLista")

  var nome = inPaciente.value   // obtém nome do paciente

  // verificar preenchimento do nome do paciente
  if (nome == "") {
    alert("Informe o nome do paciente")
    inPaciente.focus()
    return
  }

  pacientes.unshift(nome)  // adicina nome no início da fila

  var lista = ""        // string para concatenar os pacientes

  // percerre os elementos do vetor
  for (i = 0; i < pacientes.length; i++) {
    lista += (i + 1) + "." + pacientes[i] + "\n"
  }

  // altera o conteúdo outLista
  outLista.textContent = lista

  // limpa campo e posiciona curso em inPaciente
  inPaciente.value = ""
  inPaciente.focus()
}
// criar referência ao btUrgencia e associa function ao evento click
var btUrgencia = document.getElementById("btUrgencia")
btUrgencia.addEventListener("click", adicionarUrgencia)

function atenderPaciente() {
  // verifica se o vetor pacientes está vazio
  if (pacientes.length == 0) {
    alert("Não há pacientes na lista de espera")
    inPaciente.focus()
    return
  }

  // criar referência aos elementso de saída de dados
  var outAtendimento = document.getElementById("outAtendimento")
  var outLista = document.getElementById("outLista")

  // remove paciente do início da fila e obtém o nome
  var atender = pacientes.shift()

  // exibir o nome do paciente em atendimento
  outAtendimento.textContent = atender

  // string para concatenar pacientes
  var lista = ""

  // percorre os elementos do vetor
  for (i = 0; i < pacientes.length; i++) {
    lista += (i + 1) + ". " + pacientes[i] + "\n"
  }

  // alterar o conteúdo outLista
  outLista.textContent = lista
}
var btAtender = document.getElementById("btAtender")
btAtender.addEventListener("click", atenderPaciente)