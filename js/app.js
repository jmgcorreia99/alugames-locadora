let itensAlugados = [];

function alterarStatus(item) {
    let li = document.getElementById(`game-${item}`);
    let imagem = li.querySelector('.dashboard__item__img');
    let botao = li.querySelector('.dashboard__item__button');


    if (imagem.classList.contains('dashboard__item__img--rented')) {

        let confirmar = window.confirm('Tem certeza que deseja devolver este jogo?');

        if (confirmar) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.textContent = 'Alugar';
            botao.classList.remove('dashboard__item__button--return');
            itensAlugados.pop();
        }


    } else {
        let confirmar = window.confirm('Tem certeza que deseja alugar este jogo?');

        if (confirmar) {
            imagem.classList.add('dashboard__item__img--rented');
            botao.textContent = 'Devolver';
            botao.classList.add('dashboard__item__button--return');
            itensAlugados.push(botao.textContent);
        }


    }

    console.log(`Você alugou ${itensAlugados.length} jogos`);



}


