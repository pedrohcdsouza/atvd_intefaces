import { printaComFor } from './main';

describe('printaComFor', () => {
    it('deve printar o quadrado de cada elemento', () => {
        const lista = [1, 2, 3];
        const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
        printaComFor(lista);
        expect(spy).toHaveBeenCalledWith(1);
        expect(spy).toHaveBeenCalledWith(4);
        expect(spy).toHaveBeenCalledWith(9);
        spy.mockRestore();
    });
});
