var a = document.getElementById('area')  // declaração de variável, todas funções pegam o valor atribuido// 
a.addEventListener('mouseenter', entrar)
a.addEventListener('click', clicar) 
a.addEventListener('mouseout', sair)

function entrar(){
    a.innerText = 'Entrou'
}
function clicar(){
    a.innerText = 'Você cliclou'
    a.style.background = 'blue'
}
function sair(){
    a.innerText = 'Saiu'
    a.style.background = 'black'

}