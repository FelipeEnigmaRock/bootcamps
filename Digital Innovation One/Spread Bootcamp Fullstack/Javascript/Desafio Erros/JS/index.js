function validaArray (array, numero) {
    try {
    if (!array && !numero) throw new ReferenceError('Envie os parâmetros');

    if (typeof array !== 'object') throw new TypeError('Não é um objeto');
    
    if (typeof numero !== 'number') throw new TypeError('Não é um numero');

    if (array.lenght !== numero) throw new RangeError('Não corresponde ao mesmo tamanho');
    
    return array;

    } catch (e) {
        if (e instanceof RangeError) {
			console.log('RangeError!');

			console.log(e.stack);

		} else if (e instanceof ReferenceError) {
			console.log('ReferenceError!');

			console.log(e.stack);

		} else {
			console.log('Outro tipo de erro!');

			console.log(e.stack);
		}
    }
}

