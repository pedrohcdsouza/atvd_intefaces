interface Pessoa {
    nome: string;
    idade: number;
    saudacao(): string;
    
};

const PessoaA: Pessoa = {
    nome: 'Alice',
    idade: 30,
    saudacao() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos. E gosto de nadar!`;
    },
};


const PessoaB: Pessoa = {
    nome: 'Bob',
    idade: 25,
    saudacao() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos. E gosto de correr!`;
    },
}

export { PessoaA, PessoaB };