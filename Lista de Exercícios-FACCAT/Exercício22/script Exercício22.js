

let salarioHora = parseInt(prompt("Qual é o seu salário por hora trabalhada:"));
let horaTrabalhada = parseInt(prompt("Quantas horas você trabalhou por mês:"));

if (horasTrabalhadas > 160) {
    let horaExtra = horasTrabalhadas - 160;
    let salarioExtra = 50/100 * salarioHora * horaExtra;
    alert("Você trabalhou "+horaExtra+" horas a mais, então o seu salário extra é : R$"+salarioExtra);
    let salarioFinal = horasTrabalhadas * salarioHora;
    alert("Seu salário do mês é : R$"+ salarioFinal);

}else{
    salarioFinal = horaTrabalhada * salarioHora;
    alert("Seu slário do mês é : R$"+ salarioFinal);
}