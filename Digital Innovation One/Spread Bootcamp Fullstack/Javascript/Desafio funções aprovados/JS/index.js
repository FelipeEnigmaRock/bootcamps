const alunos = [
    {
        nome: 'Felipe',
        nota: 6
    },
    {
        nome: 'Vitória',
        nota: 7
    },
    {
        nome: 'Maya',
        nota: 1
    }

]

const aprovados = [];


function aprovaAluno(array, media) {     
    
    for (let i = 0; i < array.length; i++) {

         
        if (array[i].nota >= media) {
            aprovados.push(array[i].nome);
        }
    }
    return aprovados;
}

console.log(aprovaAluno(alunos, 6));