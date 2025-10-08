import { PessoaA, PessoaB } from "./main";

describe('Pessoa', () => {
    it('Deve retornar a saudacao', () => {
        for (const pessoa of [PessoaA, PessoaB]) {
            const saudacao = pessoa.saudacao();
            expect(saudacao).toContain(pessoa.nome);
        }
    });
});
