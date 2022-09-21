*** Variables ***

${SITE}  http://www.jouse.com.br
${NAVEGADOR}  Chrome
${BOTAO_COMPREAQUI}   class="jss14"
${BOTAO_SELECIONAR}   class="jss68"
${NOME}   id="component-outlined-Nome"
${SOBRENOME}    id="component-outlined-Sobrenome"
${CPF}    id="component-outlined-CPF"
${EMAIL}    id="component-outlined-E-MAIL"
${TELEFONE}   id="component-outlined-Telefone"
${CEP}    id="component-outlined-CEP"
${CIDADE}    id="component-outlined-Cidade"
${ESTADO}    id="component-outlined-Estado"
${ENDEREÇO}  id="component-outlined-Endereço"
${NUMERO}    id="component-outlined-Número"
${COMPLEMENTO}  id="component-outlined-Complemento"
${TIPO_ENVIO}   class="jss212 jss220"
${PAGAMENTO}   class="jss229 jss230"
${NUMERO_CARTAO}  id="component-outlined-Número do cartão"
${VALIDADE} class="jss231 jss233"
${CVV}    class="jss231 jss234"
${NOME_CARTAO}  class="jss231 jss235"
${PARCELA} class="jss231 jss236"
${COR}   class="jss206"
${ACABAMENTO}  class="jss206"
${MODELO}   class="jss208"



***Keywords***
 Abrir o site da Loja
 Open Browser  ${SITE} ${NAVEGADOR}
 Maximizer Browser Window

 click Element ${BOTAO_COMPREAQUI}
 page should contain Personalize sua Jouse Série 1
 
 Selecionar cor e acabamento 
 Click Element ${COR} 
 Click Element ${ACABAMENTO}
 Click Element ${MODELO}

 Adicionar produto no Carrinho
 Click Element  ${BOTAO_SELECIONAR} 
 Page should contain  Confirme seu pedido

 Confirmar compra
 Click Element   ${BOTAO_SELECIONAR}

 
 Preencher os dados para entrega e clicar em Continuar
page should contain Pedido 
Input Tex ${NOME} ${SOBRENOME} ${CPF} 
Input Tex ${EMAIL} ${TELEFONE} 
Input Tex ${CEP}  ${CIDADE} ${ESTADO} 
Input Tex ${ENDEREÇO} ${NUMERO} ${COMPLEMENTO}  
Click Element   ${BOTAO_SELECIONAR}

Selecionar uma forma de envio e clicar em Continuar
Page should contain Forma de envio 
Click Element ${TIPO_ENVIO} 
Click Element   ${BOTAO_SELECIONAR}

Selecionar a opção de Cartão de Crédito e preencher os dados
Page should contain Pagamento 
Click Element ${PAGAMENTO} 
Click Element   ${BOTAO_SELECIONAR}

Close Browser
