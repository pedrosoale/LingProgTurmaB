// vetor global
var erros = []

// gera um número aleatório entre 1 e 100
var sorteado = Math.floor(Math.random() * 100) + 1

// declarar constante com o número de chances
const CHANCES = 6

function apostarNumero() {
  // cria referência ao campo de entrada
  var inNumero = document.getElementById("inNumero")
  var numero = Number(inNumero.value)

  // validar o número
  if(numero <= 0 || numero > 100 || isNaN(numero)) {
    alert("Informe um número válido...")
    inNumero.focus()
    return
  }

  // referência aos espaços das saídas de dados
  var outDica = document.getElementById("outDica")
  var outErros = document.getElementById("outErros")
  var outChances = document.getElementById("outChances")

  // se jogador acertou o número
  if(numero == sorteado) {
    alert("Parabéns! Você acertou!")
    // trocar o status dos botões
    btApostar.disabled = true 
    btJogar.className = "exibe"
    outDica.textContent = "Parabéns! Número sorteado: " + sorteado
  } else {
    
  }


}
var btApostar = document.getElementById("btApostar")
btApostar.addEventListener("click", apostarNumero)
