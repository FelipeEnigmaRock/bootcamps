function getAdms (map) {
    let adms = [];

    for ([key, value] of map) {
        if (value === 'Adm') {
            adms.push(key);
        }
    }
    return adms
}

const usuarios = new Map();

usuarios.set('Felipa', 'Adm');
usuarios.set('Felipe', 'Adm');
usuarios.set('Felipi', 'User');
usuarios.set('Felipo', 'User');
usuarios.set('Felipu', 'Adm');

console.log(getAdms(usuarios));

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valoresUnicos(meuArray));

