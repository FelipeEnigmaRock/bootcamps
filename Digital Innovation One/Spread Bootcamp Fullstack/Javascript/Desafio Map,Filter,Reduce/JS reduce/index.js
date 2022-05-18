/* function somaNumeros (array) {
    return array.reduce(function (prev, current,) {
        return prev + current;
    })
}

const meuArray = [2, 4, 6, 8];

console.log(somaNumeros(meuArray)); */

function somaPrecos (array) {
    return array.reduce(function (prev, current) {
        return prev + current;
    })
}

function calculaSaldo (preco, saldo) {
    preco = somaPrecos();
    return saldo - preco;
}

const listaPrecos = [50, 100, 200, 350];

somaPrecos(listaPrecos);

console.log(calculaSaldo(listaPrecos));