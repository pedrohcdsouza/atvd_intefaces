import { ordenaArray } from "./main";

describe('ordenaArray', () => {
    it('deve ordenar o array em ordem alfabética', () => {
        const lista = ['Banana', 'Maçã', 'Laranja'];
        const resultado = ordenaArray(lista);
        expect(resultado).toEqual(['Banana', 'Laranja', 'Maçã']);
    });
});