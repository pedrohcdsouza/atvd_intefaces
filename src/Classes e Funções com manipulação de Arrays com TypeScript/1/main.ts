const printaComFor = (lista: Array<number>): void => {
    for(let i = 0; i < lista.length; i++){
        const valor = lista[i];
        if (typeof valor === 'number') {
            console.log(valor ** 2);
        }
    }
};

const printaComForEach = (lista: Array<number>): void => {
    lista.forEach((valor) => {
        if (typeof valor === 'number') {
            console.log(valor ** 2);
        }
    });
};

printaComFor([1, 2, 3]);

export { printaComFor, printaComForEach };