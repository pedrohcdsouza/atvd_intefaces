const concatenaString = (lista: Array<string>): string => {
    return lista.join(' ');
}

console.log(concatenaString(['Olá', 'Mundo']));

export { concatenaString };