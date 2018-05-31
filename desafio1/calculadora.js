class Calculadora {
    somar() {
        alert(parseFloat(document.getElementById('n1').value) + parseFloat(document.getElementById('n2').value))
    }

    subtrair() {
        alert(parseFloat(document.getElementById('n1').value) - parseFloat(document.getElementById('n2').value))
    }

    multiplicar() {
        alert(parseFloat(document.getElementById('n1').value) * parseFloat(document.getElementById('n2').value))
    }

    dividir() {
        alert(parseFloat(document.getElementById('n1').value) / parseFloat(document.getElementById('n2').value))
    }

    porcentar() {
        alert(parseFloat(document.getElementById('n1').value) * (parseFloat(document.getElementById('n2').value) / 100))
    }
}

var calculadora = new Calculadora()