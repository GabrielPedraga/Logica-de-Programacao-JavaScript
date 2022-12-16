function Vendas(){
    let salarioFixo = parseFloat(prompt("Digite o valor do seu salário fixo :"));
    let vendas = parseFloat(prompt("Digite o valor total das vendas :"));
    let salarioFinal = 0;
    if (vendas<1500) {
        salarioFinal = salarioFixo + salarioFixo * (3/100);
        alert("Seu salário final será : R$"+salarioFinal);
    } else {
        salarioFinal = salarioFixo + salarioFixo *(5/100);
        alert("Seu salário final será : R$"+salarioFinal);
    }
}