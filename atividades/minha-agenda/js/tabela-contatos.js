const tabela = document.querySelector('#tabelaContatos');

export function adicionarContato(nome, telefone) {
    

    const novaLinha = document.createElement('tr'); // se criada fora do else, so salva 1. pq? -pq fora do submit ele cria uma e atualiza, aqui dentro ele cria uma a cada iteração
    let novoNome = nome.value.trim();
    let novoTel = telefone.value.trim();
    novaLinha.innerHTML =
        `
                <td>${novoNome}</td>
                <td>${novoTel}</td>
                <td><button class="btn btn-danger btn-sm">Excluir</button></td>
                `;
    tabela.append(novaLinha);
    

}

tabela.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-danger')) {
        const botaoExcluir = event.target;
        botaoExcluir.closest('tr').remove();
    }
});