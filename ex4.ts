interface IUsuario {
    nome: string;
    email: string;
    exibirInfo: () => string;
}

class Usuario implements IUsuario {
    public nome: string;
    public email: string;

    constructor(nome: string, email:string) {
        this.nome = nome;
        this.email = email;
    }

    exibirInfo(): string {
        return `Nome: ${this.nome} - Email: ${this.email}`;
    };

}

const usuario = new Usuario("João", "manobro@exemplo.com");
console.log(usuario.exibirInfo());