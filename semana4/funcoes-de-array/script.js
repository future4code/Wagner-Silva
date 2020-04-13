const despesas = [];

function limpaCadastro() {
    const inputs = document.getElementsByClassName("input-cadastro");
    const selects = document.getElementsByTagName("select");

    for(let input of inputs) {
        input.value = "";
    }

    selects[0].selectedIndex = 0;
}

function limpaFiltros() {
    const inputs = document.getElementsByClassName("input-detalhes");
    const selects = document.getElementsByTagName("select");

    for(let input of inputs) {
        input.value = "";
    }

    selects[1].selectedIndex = 0;
}

function atualizaExtrato() {
    let despesasCasa = 0;
    
    despesas.reduce(despesasCasa, despesas.filter(despesa => {
        if(despesa.tipo === "casa") {
            return true;
        }

        return false;
    }));

    const divCasa = document.getElementById("casa");
    divCasa.innerHTML += `<p>R$ ${despesaCasa}</p>`;
}

function cadastraDespesa() {
    const valor = document.getElementById("valor").value;
    const tipo = document.getElementById("tipo-cadastro").value;
    const descricao = document.getElementById("descricao").value;

    despesa = {
        valor,
        tipo,
        descricao
    };

    despesas.push(despesa);
    limpaCadastro();
    atualizaExtrato();
}