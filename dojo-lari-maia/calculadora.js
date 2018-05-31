class Calculadora {
    calcular() {
        let porcentagemBonus = parseFloat(document.getElementById('porcentagemBonus').value)
        let celofane = parseFloat(document.getElementById('celofane').value)
        let crepom = parseFloat(document.getElementById('crepom').value)
        let lacoChannel = parseFloat(document.getElementById('lacoChannel').value)
        let importado = parseFloat(document.getElementById('importado').value)
        let caixa = parseFloat(document.getElementById('caixa').value)

        let precoCelofane = celofane * 2.5
        let precoCrepom = crepom * 3.1
        let precoLacoChannel = lacoChannel * 3.7
        let precoImportado = importado * 3.9
        let precoCaixa = caixa * 4.0

        let bonusEmPorcentagem = porcentagemBonus / 100

        let bonusCelofane = celofane * bonusEmPorcentagem
        let bonusCrepom = crepom * bonusEmPorcentagem
        let bonusLacoChannel = lacoChannel * bonusEmPorcentagem
        let bonusImportado = importado * bonusEmPorcentagem
        let bonusCaixa = caixa * bonusEmPorcentagem

        let somaDasQuantidades = celofane + crepom + lacoChannel + importado + caixa
        let somaDosBonus = bonusCelofane + bonusCrepom + bonusLacoChannel + bonusImportado + bonusCaixa
        let somaDosPrecos = precoCelofane + precoCrepom + precoLacoChannel + precoImportado + precoCaixa

        let totalDasQuantidades = somaDasQuantidades + somaDosBonus

        document.getElementById('precoCelofane').innerText = ": R$" + precoCelofane
        document.getElementById('precoCrepom').innerText = ": R$" + precoCrepom
        document.getElementById('precoLacoChannel').innerText = ": R$" + precoLacoChannel
        document.getElementById('precoImportado').innerText = ": R$" + precoImportado
        document.getElementById('precoCaixa').innerHTML = ":R$ " + precoCaixa

        document.getElementById('bonusCelofane').innerText = ": " + bonusCelofane
        document.getElementById('bonusCrepom').innerText = ": " + bonusCrepom
        document.getElementById('bonusLacoChannel').innerText = ": " + bonusLacoChannel
        document.getElementById('bonusImportado').innerText = ": " + bonusImportado
        document.getElementById('bonusCaixa').innerText = ": " + bonusCaixa

        document.getElementById('somaDasQuantidades').innerText = ": " + somaDasQuantidades
        document.getElementById('somaDosBonus').innerText = ": " + somaDosBonus + "%"
        document.getElementById('somaDosPrecos').innerText = ": R$" + somaDosPrecos

        document.getElementById('info').classList.add('mostrar')
    }
}

var calculadora = new Calculadora()

