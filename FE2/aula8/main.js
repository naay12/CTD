var containerElemento = document.querySelector('.container')
var novaPostagemElemento = document.querySelector('#novaPostagem')
// var posts = [
//     {
//         foto: 'https://s3.static.brasilescola.uol.com.br/be/2022/01/tigre.jpg',
//         titulo: 'O tigre',
//         texto: 'O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.'
//     },
//     {
//         foto: 'https://vejasp.abril.com.br/wp-content/uploads/2021/12/20211202-Tigre-de-bengala9-foto-Paulo-Gil-2.jpg-1.jpg',
//         titulo: 'O tigre versão Shine',
//         texto: 'O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.'
//     },
//     {
//         foto: 'https://img.r7.com/images/leao-branco-juba-moya-19012022005116744',
//         titulo: 'O leão',
//         texto: 'O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África subsahariana (com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da Índia.'
//     }
// ]

// for(let post of posts) {

//     containerElemento.innerHTML += `
//         <div class="item">
//             <img src="${post.foto}">
//             <h2>${post.titulo}</h2>
//             <p>${post.texto}</p>
//         </div>
//     `

// }
const adicionarPost = document.getElementById('#novaPostagem');
 novaPostagemElemento.addEventListener('click', (event) => {

  let postagem = {
      foto: prompt('Qual imagem deseja cadastrar?'),
      titulo: prompt('Qual é o titulo?'),
        texto: prompt('Qual é o texto?')
   }


 })
//     function adicionarPostagem(){
//         document.getElementById('#novapostagem').innerHTML += `
//         <div class="container">
//             <img src="${postagem.foto}">
//             <h2>${postagem.titulo}</h2>
//             <p>${postagem.texto}</p>
//         </div>
//     `
//     }



function adicionarPostagem(){
    document.querySelector('.container').innerHTML +=  `
       <div class="container">
         <img src="${postagem.foto}">
         <h2>${postagem.titulo}</h2>
         <p>${postagem.texto}</p>
        </div>
   `
   containerElemento.innerHTML += `
        <div class="item">
            <img src="${post.foto}">
          <h2>${post.titulo}</h2>
             <p>${post.texto}</p>
     </div>
    `
   
}