function Conta(){
    let numeroConta = parseFloat(prompt("Digite o número da sua conta :"));
    let saldo = parseFloat(prompt("Digite o valor do seu saldo :"));
    let debito = parseFloat(prompt("Digite o valo do débito :"));
    let credito = parseFloat(prompt("Digite o valor do crédito :"));
    let saldoAtual = saldo - (debito + credito);
    if (saldoAtual>=0) {
        alert("Saldo Positivo");
    } else {
        alert("Saldo Negativo");
    }
    
}