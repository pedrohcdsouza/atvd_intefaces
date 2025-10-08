import { extraiPar } from "./main";

describe('extraiPar', () => {
    it('deve retornar apenas os números pares do array', () => {
        const lista = [1, 2, 3, 4, 5, 6];
        const resultado = extraiPar(lista);
        expect(resultado).toEqual([2, 4, 6]);
    });
});