function Voto() {
    let anoNascimento = parseInt(prompt("Digite o ano em que você nasceu :"));
    let anoAtual = parseInt(prompt("Digite o ano atual :"));
    diferença = anoAtual - anoNascimento;
    if (diferença<16) {
        alert("Você não pode votar este ano")
    } else {
        alert("Você pode votar este ano")
    }
}