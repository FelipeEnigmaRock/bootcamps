function somaNumeros (array) {
    return array.reduce(function (prev, current,) {
        return prev + current;
    })
}

const meuArray = [2, 4, 6, 8];

console.log(somaNumeros(meuArray));