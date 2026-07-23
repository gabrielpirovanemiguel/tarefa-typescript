interface RespostaAPI<T> {
    dados: T;
    sucesso: boolean;
}

const objeto1: RespostaAPI<string> = {dados: "Funcionou", sucesso: true};
const objeto2: RespostaAPI<number[]> = {dados: [1, 5, 4], sucesso: false};

