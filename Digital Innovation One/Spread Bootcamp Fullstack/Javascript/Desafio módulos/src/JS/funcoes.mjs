function mostraIdade(nome, idade) {
    return `A idade de ${nome} é ${idade}.`;    
}
function mostraCidade(nome, cidade) {
    return `A cidade em que ${nome} mora é ${cidade}.`;    
}
function mostraHobby(nome, hobby) {
    return `E ${nome} gosta de passar seu tempo praticando ${hobby}.`;    
}

export {
    mostraCidade,
    mostraHobby,
    mostraIdade
};