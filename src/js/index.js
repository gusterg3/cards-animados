// Seleciona todos os itens da lista e os cartões
const gatunos = document.querySelectorAll('.listagem .gatuno'); // Itens da lista
const cartoes = document.querySelectorAll('.cartao-gatuno');    // Cartões

// Adiciona evento de clique a cada item da lista
gatunos.forEach((gatuno) => {
  gatuno.addEventListener('click', () => {
    // Remove a classe 'ativo' de todos os itens da lista
    gatunos.forEach((item) => item.classList.remove('ativo'));
    
    // Adiciona a classe 'ativo' ao item clicado
    gatuno.classList.add('ativo');
    
    // Remove a classe 'aberto' de todos os cartões
    cartoes.forEach((cartao) => cartao.classList.remove('aberto'));
    
    // Obtém o ID do item clicado
    const idGatuno = gatuno.getAttribute('id');
    
    // Seleciona o cartão correspondente e adiciona a classe 'aberto'
    const cartaoCorreto = document.getElementById(`cartao-${idGatuno}`);
    cartaoCorreto.classList.add('aberto');
  });
});