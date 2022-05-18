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
        const {nome, nota} = array[i];
         
        if (nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(aprovaAluno(alunos, 6));