function Teste(){
    let numero1 = parseInt(prompt("Digite um número :"));
    let numero2 = parseInt(prompt("Digite outro número diferente do primeiro :"));
    if (numero1<numero2) {
        alert("Em ordem crescente os números são : "+numero1+" , "+numero2);
    } else {
        alert("Em ordem crescente os números são : "+numero2+" , "+numero1)
    }
}