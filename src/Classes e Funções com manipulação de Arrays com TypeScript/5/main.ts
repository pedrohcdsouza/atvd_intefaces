const extraiPar = (lista: Array<number>): Array<number> => {
    return lista.filter((num) => num % 2 === 0);
}

console.log(extraiPar([1, 2, 3, 4, 5, 6]));

export { extraiPar };