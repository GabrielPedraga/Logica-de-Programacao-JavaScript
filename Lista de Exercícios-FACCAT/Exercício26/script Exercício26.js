function Estoque(){
    let quantAtual = parseFloat(prompt("Digite a quantidade de estoque atual :"));
    let quantMaxima = parseFloat(prompt("Digite a quantidade máxima do estoque :"));
    let quantMinima = parseFloat(prompt("Digite a quantidade mínima do estoque :"));
    let quantMedia = (quantMaxima + quantMinima)/2;
    if (quantAtual>=quantMedia) {
        alert("Não efetuar compra");
    } else {
        alert("Efetuar compra");
    }
}