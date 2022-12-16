function Idade(){
    
total= 0

    var anos = parseInt(prompt("Digite a sua idade em anos :"));
    var meses = parseInt(prompt("Informe quantos meses passaram após o seu aniversário :"));
    var dias = parseInt(prompt("Informe quantos dias se passaram após o seu mêsversário :"));
    var total = total + (anos*365);
    total = total + (meses*30);
    total = total + dias;
    alert("Sua idade é : " + total);
}