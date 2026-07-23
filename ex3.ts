interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
}

const livro: Livro = {titulo: "Noites Brancas", autor: "Fiódor Dostoiévski", anoPublicacao: 1948}

function resumirLivro(livro: Livro): string {
    return `O livro "${livro.titulo}" foi escrito por ${livro.autor} em ${livro.anoPublicacao}.` 
}

console.log(resumirLivro(livro));