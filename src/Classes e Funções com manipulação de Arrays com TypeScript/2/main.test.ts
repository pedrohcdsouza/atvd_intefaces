import { concatenaString } from "./main";

describe('concatenaString', () => {
    it('deve concatenar as strings com espaço', () => {
        const lista = ['Olá', 'Mundo'];
        const resultado = concatenaString(lista);
        expect(resultado).toBe('Olá Mundo');
    });
});