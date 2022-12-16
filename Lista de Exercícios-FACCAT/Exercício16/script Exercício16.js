/* As  maçãs  custam  R$  1,30  cada  se  forem  compradas  menos  de  uma  dúzia, e  R$  1,00  se  forem compradas  pelo  menos  12.  
Escreva  um  programa  que  leia  o  número  de  maçãs  compradas,  calcule  e escreva o custo total da compra */ 


function Valor() {
    let maca = parseInt(prompt("Digite a quantidade de maças compradas:"));
    if (maca<12){
     let result = prompt(maca*1.30);
    }else{
        var result = prompt(maca*1);
    }
}