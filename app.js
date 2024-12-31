let listaNumeros = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirMensagemInicial () {
		exibirTextoTela('h1', 'Jogo do número secreto')
		exibirTextoTela('p', 'Escolha um número entre 1 e 10')
}	


exibirMensagemInicial();


function exibirTextoTela(tag, texto) {
	let campo = document.querySelector(tag);
	campo.innerHTML = texto;
	responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

exibirTextoTela('h1', 'Jogo do número secreto')
exibirTextoTela('p', 'Escolha um número entre 1 e 10')

function verificarChute() {
	let chute = document.querySelector('input').value;

	if(chute == numeroSecreto) {
		exibirTextoTela('h1', 'Acertou');
		let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
		let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa} !`;
		exibirTextoTela('p', mensagemTentativas);
		document.getElementById('reiniciar').removeAttribute('disabled');
	} else {
		if (chute > numeroSecreto) {
			exibirTextoTela('p', 'O número secreto é menor');
		} else {
			exibirTextoTela('p', 'O número secreto é maior');
		}

		tentativas++;
		limparCampo();
	}
}

function limparCampo() {
	chute = document.querySelector('input');
	chute.value = '';
}

function gerarNumeroAleatorio() {
	let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
	let quantidadeDeElementos = listaNumeros.length;

	if (quantidadeDeElementos === numeroLimite) {
		listaNumeros = [];
	}

	if (listaNumeros.includes(numeroEscolhido)) {
		return gerarNumeroAleatorio();

		} else {
			listaNumeros.push(numeroEscolhido);
			console.log(listaNumeros);
			return numeroEscolhido;
		}
	}


function reiniciarJogo() {
	numeroSecreto = gerarNumeroAleatorio();
	limparCampo();
	tentativas = 1;
	exibirMensagemInicial();
	document.getElementById('reiniciar').setAttribute('disabled', true)
}