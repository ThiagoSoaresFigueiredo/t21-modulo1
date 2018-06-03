class ListaCarros {

    constructor() {
        this.id = 0;
        this.qtd = 0;
        this.somaDosAnos = 0;
        this.carroNovo = 0;
        this.carroVelho = 999999;
    }

    adicionar() {

        this.id++;

        // PEGANDO DADOS DO FORMULÁRIO
        let lista = document.getElementById("lista");
        let marca = document.getElementById("inputMarca").value;
        let modelo = document.getElementById("inputModelo").value;
        let ano = document.getElementById("inputAno").value;
        //

        // PREENCHENDO A LISTA
        let divLista = document.createElement("div");
        divLista.classList.add("item-lista");
        divLista.id = this.id;

        let spanMarca = document.createElement("span");
        spanMarca.innerText = marca;

        let spanModelo = document.createElement("span");
        spanModelo.innerText = modelo;

        let spanAno = document.createElement("span");
        spanAno.innerText = ano;

        let imgExcluir = document.createElement("img");
        imgExcluir.src = "img/delete.svg";
        imgExcluir.title = "Excluir carro";
        imgExcluir.setAttribute("onclick",
            "listaDeCarros.deletar('" + this.id + "')");

        divLista.appendChild(spanMarca);
        divLista.appendChild(spanModelo);
        divLista.appendChild(spanAno);
        divLista.appendChild(imgExcluir);
        lista.appendChild(divLista);
        //

        this.atualizarQtdeDeRegistros();
        
        this.montarTabelaDeComparativos(ano, lista, marca, modelo);
        
        this.mostrarTelaDeComparativos();
    }

    deletar(id) {
        // DELETANDO O REGISTRO
        let registroParaDeletar = document.getElementById(id);
        let list = document.getElementById("lista");
        list.removeChild(registroParaDeletar);
        //

        this.atualizarQtdeDeRegistros();

        if (this.qtd == 0) {
            console.log(this.qtd);
        }
    }

    atualizarQtdeDeRegistros() {
        this.qtd = lista.getElementsByTagName("div").length;
        let qtdeDeRegistros = document.getElementById("qtde");
        qtdeDeRegistros.innerText = "(" + this.qtd + ")";
    }

    montarTabelaDeComparativos(ano, lista, marca, modelo) {
        ano = parseInt(ano);
        this.somaDosAnos += ano;

        if (ano > this.carroNovo) {
            this.carroNovo = ano;
            document.getElementById("carroMaisNovo").innerText =
                "Carro mais novo: " + marca + " " + modelo + " " + ano;
        }
        console.log(this.carroNovo)

        if (ano < this.carroVelho) {
            this.carroVelho = ano;
            document.getElementById("carroMaisVelho").innerText =
                "Carro mais velho: " + marca + " " + modelo + " " + ano;
        }
        console.log(this.carroVelho)

        let mediaDosAnos = parseInt(this.somaDosAnos / lista.getElementsByTagName("div").length);
        document.getElementById("mediaDosAnos").innerText =
            "Média dos anos: " + mediaDosAnos;
    }

    mostrarTelaDeComparativos() {
        document.getElementById("comparativos").classList.remove("tblComparativos");
        document.getElementById("comparativos").classList.add("mostrarComparativos");
    }
}

var listaDeCarros = new ListaCarros();