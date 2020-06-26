import moment from 'moment';

type evento = {
    nome: string,
    descricao: string,
    dataInicio: moment.Moment,
    dataFim: moment.Moment
}

let listaDeEventos: evento[] = [
    {
        nome: "Estudar TypeScript",
        descricao: "Aprofundar os estudos na linguagem",
        dataInicio: moment("24/06/2020 19:00", "DD/MM/YYYY HH: mm"),
        dataFim: moment("24/06/2020 21:00", "DD/MM/YYYY HH: mm")
    },
    {
        nome: "Descansar",
        descricao: "Descanso depois de um dia estudando TypeScript",
        dataInicio: moment("24/06/2020 22:00", "DD/MM/YYYY HH: mm"),
        dataFim: moment("25/06/2020 7:30", "DD/MM/YYYY HH: mm")
    }
]

const mostraEventos = (): void => {
    listaDeEventos.forEach( evento => {
        const inicio: string = evento.dataInicio.format("DD/MM/YYYY HH:mm");
        const fim: string = evento.dataFim.format("DD/MM/YYYY HH:mm");
        const duracao: number = evento.dataFim.diff(evento.dataInicio, "minutes");
        const diasRestantes: number = evento.dataInicio.diff(moment(), "days");
        
        console.log("Informações do evento:");
        console.log(`Nome: ${evento.nome}\nHorário de início: ${inicio}\nHorário de fim: ${fim}\nDescrição: ${evento.descricao}`);
        console.log(`Duração: ${duracao} minutos`);
        console.log(`Dias até o evento: ${diasRestantes > 0 ? diasRestantes : (diasRestantes < 0 ? "Evento já aconteceu" : "Hoje")}`);
        console.log("\n====================\n");
    })
}

/* Para alterar os horários para a Inglaterra, basta mudar o utcOffset, 
   e também o moment.locale (caso seja preciso).
*/

const criarEvento = (
    diaInicio: string,
    horarioInicio: string,
    diaFim: string,
    horarioFim: string,
    nome: string,
    descricao: string
    ): void => {
        if(diaInicio && horarioInicio && diaFim && horarioFim && nome && descricao) {
            const dataInicio: moment.Moment = moment(`${diaInicio} ${horarioInicio}`, "DD/MM/YYYY HH:mm");
            const dataFim: moment.Moment = moment(`${diaFim} ${horarioFim}`, "DD/MM/YYYY HH:mm");

            if(dataInicio.diff(moment(), "days") < 0) {
                console.log("Data inválida!");
            } else {
                listaDeEventos = [
                    ...listaDeEventos,
                    {
                        nome,
                        descricao,
                        dataInicio,
                        dataFim
                    }
                ]
            }

        } else {
            console.log("Formato de evento inválido!");
        }
}

criarEvento("25/12/2020", "00:00", "25/12/2020", "23:59", "Natal", "Natal deste ano");
criarEvento("02/06/2020", "00:00", "02/06/2020", "23:59", "Meu aniversário", "Já passou :(");
mostraEventos();