
let jogosAlugados = 0;

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id) {

    let game = document.getElementById(`game-${id}`);
    let imagem = game.querySelector('.dashboard__item__img');
    let botao = game.querySelector('.dashboard__item__button');
    
    let cont;

    if (imagem.classList.contains('dashboard__item__img--rented')) {

        let confirmacao = confirm("Você tem certeza sobre a devolução ?");
        
        if (confirmacao) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
        }    
    }else { 
            jogosAlugados++;
            imagem.classList.add('dashboard__item__img--rented');
            botao.classList.add('dashboard__item__button--return');
            botao.textContent = 'Devolver';    
        }

     contarEExibirJogosAlugados();   
}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});