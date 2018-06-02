class ListaConvidados {

    constructor() {
        this.qtd = 0;
    }

    adicionar() {
        let nome = document.getElementById('inputConvidado').value;
        let lista = document.getElementById('lista');

        lista.innerText += nome + "\n";

        this.qtd++;
        let labelQtde = document.getElementById('qtde');
        labelQtde.innerText = "(" + this.qtd + ")";
    }
}

var listaConvidados = new ListaConvidados();