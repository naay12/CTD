    const cepInputElement = document.querySelector('#cep')
    const estadoInputElement = document.querySelector('#estado')
    const cidadeInputElement = document.querySelector('#cidade')
    const ruaInputElement = document.querySelector('#rua')

    cepInputElement.addEventListener('keyup', 

    event => {
        let inputValue = event.target.value

        if(inputValue.length === 8) {

        fetch(`https://viacep.com.br/ws/${inputValue}/json/`).then(

            response => {

                response.json().then(

                    succes => {
                        cidadeInputElement.value = succes.localidade
                        estadoInputElement.value = succes.uf
                        ruaInputElement.value  = succes.logradouro
                    }

                )

            }

         )
        
     }

 }

)