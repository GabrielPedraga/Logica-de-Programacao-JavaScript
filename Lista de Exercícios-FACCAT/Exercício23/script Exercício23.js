let nome = prompt("Digite o seu nome :");
let sexo = prompt("Digite o seu sexo, sendo 'M' para masculino e 'F' para feminino :");
let altura = parseFloat(prompt("Digite a sua altura :"));

if (sexo == "M") {
    let pesoIdeal = (72.7 * altura) - 58;
    alert("Seu peso ideal é : "+ pesoIdeal+" Kg");
} else if (sexo == "F") {
    pesoIdeal = (62.1 * altura) - 44.7;
    alert("Seu peso ideal é :"+ pesoIdeal+" Kg");
} else {
    alert("Informe seu sexo corretamente");
}