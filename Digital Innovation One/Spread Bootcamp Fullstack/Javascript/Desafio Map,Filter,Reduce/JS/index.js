function mapArray (array) {
    return array.map((valor) => valor * 10);

};

const numbers = [6, 66, 666];

console.log(mapArray(numbers));

const abacaxi = {
    preço: 2
}

const banana = {
    preço: 3
}

function mapThis () {
    const meuArray = [2, 4, 6];

    return meuArray.map(function (valor){
        return valor * this.preço;
    }, banana);
    
}

console.log(mapThis());