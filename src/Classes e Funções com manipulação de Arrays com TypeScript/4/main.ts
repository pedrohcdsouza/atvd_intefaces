const primeirosElementos = (lista: Array<number>): Array<number> => {
    return lista.slice(0, 2);
}

console.log(primeirosElementos([1, 2, 3, 4, 5]));

export { primeirosElementos };