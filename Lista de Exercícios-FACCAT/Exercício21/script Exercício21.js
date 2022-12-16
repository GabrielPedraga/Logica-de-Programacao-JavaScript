function Xadrez(){
    let horaInicio = parseFloat(prompt("Digite o horário que o jogo começou :"));
    let horaFim = parseFloat(prompt("Digite o horário que o jogo terminou :"));
    let duracao = horaFim-horaInicio;
    if (duracao<0) {
        duracao = duracao + 24
        alert("A duração da partida foi de : "+ duracao+" horas");
    } else {
        alert("A duração da partida foi de : "+duracao+" horas");
    }
}