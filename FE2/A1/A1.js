/*Desenvolver um script que permita somar um array de números consecutivos, de forma que se some o primeiro número com o segundo e o imprima através do console. 
Depois, temos que pegar este resultado e somar o terceiro número, e assim por diante, até termos terminado de percorrer todo o array.*/

/*exemplo meu*/
let array= [1,2,4,8,16,32];
let result=0;
for(let i=0;i<array.length;i++){
    result+=array[i];
}
console.log(result);

/*exemplo do curso*/
let n=[1,2,4,8];
let soma=n.reduce((i,n)=>i+=n);
console.log(soma);


/** Reduce:pra que ele serve?
Como o nome sugere, o reduce busca reduzir um array. Ele iterará por cada elemento dessa lista com o objetivo de ao final gerar um único valor (de qualquer tipo), como por exemplo a soma de todos os elementos desse array. Lembrando que não ficamos presos apenas a números. */

