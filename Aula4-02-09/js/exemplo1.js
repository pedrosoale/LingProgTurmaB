// Declarar a função mostrarOla
function mostrarOla() {
  // obtém conteúdo do campo com id="nome"
  var nome = document.getElementById("nome").value
  //exibir no parágrafo com id="resposta": "Olá" e o nome informado
  document.getElementById("resposta").innerHTML = "Olá " + nome;
}
//cria uma referência ao botão com id="mostrar"
var mostrar = document.getElementById("mostrar")
//ao clicar no botão a função mostrarOla deve ser chamada
mostrar.addEventListener("click", mostrarOla)