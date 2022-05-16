function compareNumber(num1, num2) {
    const sumNumber = num1 + num2;
    const compare = (num1 === num2) ? 'são' : 'não são';
    const maiorOuMenor10 = (sumNumber >= 10) ? 'maior' : 'menor';
    const maiorOuMenor20 = (sumNumber >= 20) ? 'maior' : 'menor';
    return `Os números ${num1} e ${num2} ${compare} iguais. Sua soma é ${sumNumber}, que é ${maiorOuMenor10} que 10 e ${maiorOuMenor20} que 20`;
}

console.log(compareNumber(5,5));