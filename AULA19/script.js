function exibeDados() {
    window.alert("Olá Mundo");
    document.getElementById("teste").innerHTML = "O seu nome é: "+ window.prompt("Qual seu nome?");  
}

function exibeDados2() {
    window.alert("Seu nome é: " + document.getElementById("nome").value);
}

function novaPagina() {
    window.open('index2.html','_blank')
}
