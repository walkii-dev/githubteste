function exibirAlerta(mensagem) {
    alert(mensagem);
}

function perguntarERetornar(mensagem) {
    return prompt(mensagem);
}

function verificarAnoNascimento() {
    let anoNascimento = perguntarERetornar('Em que ano você nasceu?');
    console.log(anoNascimento);
    if (anoNascimento > 2007) {
        exibirAlerta('Você ainda é um adolescente!');
    }
}

function verificarAnimalFavorito() {
    let animal = perguntarERetornar('Qual é o seu animal favorito?');
    if (animal === 'cachorro' || animal === 'gato') {
        exibirAlerta('Você ama animais!');
    } else {
        exibirAlerta('Animais são incríveis!');
    }
}

function verificarNumero() {
    let numero = perguntarERetornar('Insira um número:');
    if (numero > 0) {
        exibirAlerta('Esse número é positivo.');
    } else if (numero < 0) {
        exibirAlerta('Este número é negativo.');
    } else {
        exibirAlerta('Este número é neutro.');
    }
}

function verificarPontuacao() {
    let score = perguntarERetornar('Insert your points:');
    score = score > 50 ? 'Congrats, you win!' : 'Sorry, try again!';
    exibirAlerta(score);
}

function exibirSaldo() {
    let saldoDaConta = 182.61;
    exibirAlerta(`O saldo da sua conta é de R$ ${saldoDaConta}`);
}

function perguntarNomeCompleto() {
    let nome = perguntarERetornar('Insira seu nome:');
    let sobrenome = perguntarERetornar('Insira seu sobrenome:');
    exibirAlerta(`Olá ${nome} ${sobrenome}, tudo certo?`);
}

function contarCrescente(limite) {
    let contador = 1;
    while (contador <= limite) {
        console.log(contador);
        contador++;
    }
}

function contarDecrescente(inicio) {
    while (inicio >= 1) {
        console.log(inicio);
        inicio--;
    }
}

function executar() {
    exibirAlerta('Atenção! Preencha todos os campos corretamente!');
    exibirAlerta('Atenção! Preencha todos os campos direitinho!');
    console.log(perguntarERetornar('Qual sua cor favorita?'));
    verificarAnoNascimento();
    verificarAnimalFavorito();
    verificarNumero();
    verificarPontuacao();
    exibirSaldo();
    perguntarNomeCompleto();
    contarCrescente(15);
    contarDecrescente(20);
    contarDecrescente(perguntarERetornar('Insira um número:'));
    contarCrescente(perguntarERetornar('Insira um número:'));
    console.log('Obrigado pelo seu carinho!');
    console.log(`Interessante saber que você é de ${perguntarERetornar('Qual é sua cidade?')}!`);
}

executar();
