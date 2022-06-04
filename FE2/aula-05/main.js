const bodyElement = document.querySelector('body')

console.log('o script carregou')

function trocarCor() {

    bodyElement.classList.toggle('dark-mode')

    console.log('a cor foi trocada')

}