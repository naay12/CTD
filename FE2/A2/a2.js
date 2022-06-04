/**método alert */
alert("Hola mundo");

/**método confirm */
confirm("Está seguro?");

/**método prompt */
prompt("¿Cómo te llamas?");

/*Os métodos confirm(), alert() e prompt() são usados para exibir uma caixa de diálogo pop-up para o usuário, com o intuito de exibir ou solicitar informações. Esses três métodos pertencem ao objeto window, e podem ser referenciados como: window.*/

let nome = prompt("Qual seu nome?");

document.querySelector('h1').innerText += ' ' +nome;


let edad = parseInt(prompt("Introduza sua idade")); 
if(edad>18){ 
console.log("É maior de idade"); 
}else{ 
console.log("É menor de idade"); 
} 
 //sem erros

 // ver propriedade math

 // for in: interagi com o objeto já criado

 let barbie = {
        nome: "Barbie",
        idade: "18 anos",
 }
 for(let prop in barbie){
     console.log(barbie[prop]);
 }

 // prop=pripiedade/ pode ser qlqr plv e representa o valor da propriedade(nome, idade)
 // os [] são chaves e representam o valor da propriedade, para buscar apenas seu nome usamos só o prop e não o [].

// for of: interagi com o array

let series = ["Game of Thrones", "Breaking Bad", "The Big Bang Theory"];
for (let serie of series){
    console.log(serie);
}
