class CalculoIMC {

    calcular() {
        let peso = parseFloat(document.getElementById("inputPeso").value);
        let altura = parseFloat(document.getElementById("inputAltura").value);

        let imc = peso / (altura * 2);

        document.getElementById("peso").innerText = imc;
    }
}

var calculo = new CalculoIMC();