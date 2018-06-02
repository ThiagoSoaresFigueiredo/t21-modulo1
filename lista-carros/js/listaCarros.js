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
        imgExcluir.src = "img/delete01.svg";
        imgExcluir.title = "Excluir carro";
        imgExcluir.setAttribute("onclick",
            "listaDeCarros.deletar('" + this.id + "')");

        divLista.appendChild(spanMarca);
        divLista.appendChild(spanModelo);
        divLista.appendChild(spanAno);
        divLista.appendChild(imgExcluir);
        lista.appendChild(divLista);
        //

        this.montarTabelaDeComparativos(ano, lista, marca, modelo);
        this.atualizarQtdeDeRegistros();
        this.mostrarTelaDeComparativos();
    }

    deletar(id, ano, lista, marca, modelo) {
        // DELETANDO O REGISTRO
        let registroParaDeletar = document.getElementById(id);
        let list = document.getElementById("lista");
        list.removeChild(registroParaDeletar);
        //

        this.atualizarQtdeDeRegistros();
        this.montarTabelaDeComparativos(ano, lista, marca, modelo);
    }

    atualizarQtdeDeRegistros() {
        this.qtd = lista.getElementsByTagName("div").length;
        let qtdeDeRegistros = document.getElementById("qtde");
        qtdeDeRegistros.innerText = "(" + this.qtd + ")";
    }

    montarTabelaDeComparativos(ano, lista, marca, modelo) {
        if (lista.getElementsByTagName("div").length == 0) {
            document.getElementById("comparativos").innerText = "Não existem registros para serem comparados."
        } else {

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

            let mediaDosAnos = this.somaDosAnos / lista.getElementsByTagName("div").length;
            document.getElementById("mediaDosAnos").innerText =
                "Média dos anos: " + mediaDosAnos;
        }
    }

    mostrarTelaDeComparativos() {
        document.getElementById("comparativos").classList.remove("tblComparativos");
        document.getElementById("comparativos").classList.add("mostrarComparativos");
    }
}

var listaDeCarros = new ListaCarros();