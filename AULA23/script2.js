
function calculadora() {
    let valor1 = parseFloat(document.getElementById("numero1").value);
    let valor2 = parseFloat(document.getElementById("numero2").value);
    const operacao = document.getElementById("operacao").value;
    let resultado;
    switch (operacao) {
        case "+":
            resultado = valor1 + valor2;
            break;
        case "-":
            resultado = valor1 - valor2;
            break;
        case "*":
            resultado = valor1 * valor2;
            break;
        case "/":
            resultado = valor1 / valor2;
            break;
    }
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}