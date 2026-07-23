type Genero = "masculino" | "feminino";

interface Pessoa {
    nome: string;
    idade: number;
    genero: Genero;
}

function apresentarPessoa(pesssoa: Pessoa)  {
    return `${pesssoa.nome} tem ${pesssoa.idade} anos e se identifica como ${pesssoa.genero}.`
}

const pessoa: Pessoa = {nome: "João",  idade: 30, genero: "masculino"};

console.log(apresentarPessoa(pessoa));