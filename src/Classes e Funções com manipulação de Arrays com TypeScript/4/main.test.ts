import { primeirosElementos } from "./main";

describe('primeirosElementos', () => {
    it('deve retornar os dois primeiros elementos do array', () => {
        const lista = [1, 2, 3, 4, 5];
        const resultado = primeirosElementos(lista);
        expect(resultado).toEqual([1, 2]);
    });
});
