function calculadoraIdade() {
    var idadePessoa = document.getElementById("idade").value;

    if (idadePessoa >= 1 && idadePessoa <= 11) {
        window.alert("Você é uma criança!");
    } else {
        window.alert("Você não é uma criança.");
    }
}