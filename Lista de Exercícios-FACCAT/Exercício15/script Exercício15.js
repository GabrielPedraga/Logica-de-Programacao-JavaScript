/* Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo).  */

function Valor(){
    let valor = parseInt(prompt("Digite um valor :"));
    if (valor>=0) {
        alert("Este valor é positivo");
    } else {
        alert("Este valor é negativo");
    }
}