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
    // Se número existe no vetor erros
    if(erros.indexOf(numero) >= 0){
      alert("Você já apostou o número " + numero + ". Tente outro...")
    } else {
      erros.push(numero); // adiciona número ao vetor
      var numErros = erros.length // obtém o tamanho do vetor
      var numChances = CHANCES - numErros // Calcula número de chances
      // Exibe número de erros , conteúdo do vetor e número de chances
      outErros.textContent = numErros + " (" + erros.join(", ") + ")"
      outChances.textContent = numChances
      if(numChances == 0) {
        alert("Suas chances terminaram. Tente outra vez!")
        btApostar.disabled = true
        btJogar.className = "exibe"
        outDica.textContent = "Game over! Número sorteado: " + numero
      } else {
        var dica = numero < sorteado ? "maior" : "menor"
        outDica.textContent = "Dica: tente um número " + dica + " que " + numero
      }
    }
  }
  // Limpa campo de entrada e posiciona cursor neste campo
  inNumero.value = ""
  inNumero.focus()
}
var btApostar = document.getElementById("btApostar")
btApostar.addEventListener("click", apostarNumero)

function jogarNovamente() {
  location.reload()   // recarrega a página
}
var btJogar = document.getElementById("btJogar")
btJogar.addEventListener("click", jogarNovamente)