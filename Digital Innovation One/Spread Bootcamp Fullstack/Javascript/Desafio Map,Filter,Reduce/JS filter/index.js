function filtraPar (array) {
    return array.filter(function (valor) {
        return valor % 2 === 0
    })
}

const array = [2, 4, 6, 5, 11];

console.log(filtraPar(array));
