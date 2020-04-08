function adicionaTarefa() {
    if(document.getElementById("nome-tarefa").value === "") {
        alert("Tarefa inválida! Digite uma tarefa não vazia.");
    } else {
        const tarefaInput = document.getElementById("nome-tarefa");
        const diaInput = document.getElementById("dia-da-semana");

        const diaDaSemana = diaInput.value;
        
        const planoDia = document.getElementById(diaDaSemana);

        planoDia.children[1].innerHTML += "<li onclick='concluirTarefa(this)'>" + tarefaInput.value + "</li>";

        tarefaInput.value = "";
    }
}

function concluirTarefa(tarefa) {
    const tarefaConcluida = tarefa.innerHTML;
    tarefa.innerHTML = "<strike>" + tarefaConcluida + "</strike>";
}

function limparTarefas() {
    const diasDaSemana = document.getElementsByClassName("dia");

    for(let dia of diasDaSemana) {
        dia.children[1].innerHTML = "";
    }
}
