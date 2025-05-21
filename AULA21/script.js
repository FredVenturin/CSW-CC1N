function calculadoraIdade() {
    var idadePessoa = document.getElementById("idade").value;

    if (idadePessoa >= 1 && idadePessoa <= 11) {
        window.alert("Você é uma criança!");
    } 
    else if (idadePessoa > 11 && idadePessoa <= 15) {
        window.alert("Você é um adolescente!");
    }
    else if (idadePessoa > 15 && idadePessoa <= 29) {
        window.alert("Você é um jovem adulto!");
    }
    else if (idadePessoa > 29 && idadePessoa <= 60) {
        window.alert("Você é um adulto!");
    }
    else { 
        window.alert("Você é um idoso!");
    }
    
}