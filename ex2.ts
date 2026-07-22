type StatusRequisicao = "sucesso" | "erro" | "carregando";

function mostrarMensagemStatus(statusRequisicao: StatusRequisicao): string {
    if (statusRequisicao === 'carregando') return "Aguarde... carregando os dados.";
    if (statusRequisicao === 'sucesso') return "Dados carregados com sucesso!";
    return "Ocorreu um erro ao carregar os dados.";
}

console.log(mostrarMensagemStatus("carregando"));
console.log(mostrarMensagemStatus("sucesso"));
console.log(mostrarMensagemStatus("erro"));