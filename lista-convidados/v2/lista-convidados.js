class ListaConvidados {

    constructor() {
        this.qtd = 0;
        this.id = 0;
    }

    adicionar() {
        let nome = document.getElementById('inputConvidado').value;
        let lista = document.getElementById('lista');

        // DADOS DA LISTA
        let div = document.createElement('div');
        div.classList.add('item-lista');
        div.id = this.id;

        let span = document.createElement('span');
        span.innerText = nome;

        let img = document.createElement('img');
        img.src = "img/delete01.svg";
        img.title = "Excluir convidado";
        img.setAttribute("onclick",
            "listaConvidados.remover('" + div.id + "')");

        div.appendChild(span);
        div.appendChild(img);

        lista.appendChild(div);

        this.id++;
        
        this.qtd = lista.getElementsByTagName('div').length;
        let labelQtde = document.getElementById('qtde');
        labelQtde.innerText = "(" + this.qtd + ")";
    }

    remover(id) {
        let conv = document.getElementById(id);
        let lista = document.getElementById('lista');
        lista.removeChild(conv);
        this.qtd = lista.getElementsByTagName('div').length;
        let labelQtde = document.getElementById('qtde');
        labelQtde.innerText = "(" + this.qtd + ")";
    }
}

var listaConvidados = new ListaConvidados();