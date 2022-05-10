const selecionaContador = document.querySelector('span')
let contador = 0


function increment() {
    contador = contador + 1;   
    selecionaContador.innerHTML = contador
}
function decrement() {
    contador = contador - 1;    
    selecionaContador.innerHTML = contador
}

{contador >= 0 ? (document.querySelector('span').style.backgroundColor = 'green') : ((document.querySelector('span').style.backgroundColor = 'black'))} 