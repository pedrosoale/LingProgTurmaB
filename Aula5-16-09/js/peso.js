function calcularPeso () {
  // cria referência aos elementos da página
  var inNome = document.getElementById("inNome")
  var rbMasculino = document.getElementById("rbMasculino")
  var rbFeminino = document.getElementById("rbFeminino")
  var inAltura = document.getElementById("inAltura")
  var outResposta = document.getElementById("outResposta")

  //obter o conteúdo dos campos
  var nome = inNome.value 
  var masculino = rbMasculino.checked 
  var feminino = rbFeminino.checked 
  var altura = Number(inAltura.value)

  // verificar se nome foi preenchido e sexo selecionado
  if (nome == "" || (masculino == false && feminino == false)) {
    alert("Por favor, informe o nome e selecione o sexo.")
    inNome.focus(); // posiciona (joga o foco) no campo edição inNome
    return;
  }

  // se altura vazio (0) ou NaN (not a number)
  if (altura == 0 || isNaN(altura)) {
    alert("Por favor, informe a altura corretamente.");
    inAltura.focus();
    return;
  }

  // se masculino
  if (masculino) {
    var peso = 22 * Math.pow(altura, 2)
  } else {
    var peso = 21 * Math.pow(altura, 2)
  }

  // alterar o campo outResposta
  outResposta.textContent = nome + " seu peso ideal é " + peso.toFixed(2) + " Kg"
}
// cria referência ao elemento btCalcular
var btcalcular = document.getElementById("btCalcular")
btcalcular.addEventListener("click", calcularPeso)

function limparCampos () {
  // Limpa os conteúdos dos elementos
  document.getElementById("inNome").value = ""
  document.getElementById("rbMasculino").checked = false
  document.getElementById("rbFeminino").checked = false
  document.getElementById("inAltura").value = ""
  document.getElementById("outResposta").textContent = ""

  document.getElementById("inNome").focus()
}
var btLimpar = document.getElementById("btLimpar")
btLimpar.addEventListener("click", limparCampos)