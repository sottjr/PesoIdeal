function calcularPeso() {
    //criar a relação dos elementos manipulados pela função
    var inName = document.getElementById("inName");
    var inAltura = document.getElementById("inAltura");
    var rbMasculino = document.getElementById("rbMasculino");
    var rbFeminino = document.getElementById("rbFeminino");
    var outResposta = document.getElementById("outResposta");

    //obter conteúdo dos campos
    var nome = inName.value;
    var masculino = rbMasculino.checked;
    var feminino = rbFeminino.checked;
    var altura = Number(inAltura.value);

    //verificar se nome foi preenchcido e sexo selecionado
    if (nome == "" || (masculino == false && feminino == false)) {
        alert("Por favor, informe o seu nome e selecione o sexo...");
        inName.focus();
        return;
    }

    //se altura vazio (0) ou NaN: Not-a-Number (Um texto for informado por exemplo)
    if (altura == 0 || isNaN(altura)) {
        alert("Por favor, informe a altura corretamente...");
        inAltura.focus();
        return;
    }

    //se masculino (significa se masculino == true)
    if (masculino) {
        var peso = 22 * Math.pow(altura, 2); //altura ao quadrado
    } else {
        var peso = 21 * Math.pow(altura, 2);
    }

    //out outResposta
    outResposta.textContent = `${nome} : Seu peso ideal é ${peso.toFixed(3)} kg. `;
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPeso);

function limparCampos() {
    document.getElementById("inName").value = "";
    document.getElementById("rbMasculino").checked = false;
    document.getElementById("rbFeminino").checked = false;
    document.getElementById("inAltura").value = ""; 
    document.getElementById("outResposta").textContent = "";
    document.getElementById("inName").focus(); 
}
var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparCampos);