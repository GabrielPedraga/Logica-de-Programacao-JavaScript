/*Ler  um  valor  e  escrever  a  mensagem  É  MAIOR  QUE  10!  se  o  valor  lido  for  maior  que  10, caso contrário escrever NÃO É MAIOR QUE 10!*/ 

function Valor(){
    let valor = parseInt(prompt("Digite um valor :"));
    if (valor>10) {
        alert("É MAIOR QUE 10");
    } else {
        alert("NÃO É MAIOR QUE 10");
    }
}