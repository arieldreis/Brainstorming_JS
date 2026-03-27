const btnValidar = document.querySelector('#validar');
const objTentativas = document.getElementById("tentativa");
const dicas = document.getElementById('dicas');

let tentativas = 0;

// Gerar senha com 4 dígitos, com zeros à esquerda
let senha = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
console.log("Senha gerada:", senha);

function redirecionamento(arquivo){
    window.location.href = arquivo;
}

function validarSenha(arrayDOM) {
    let maiores = 0;
    let menores = 0;
    let iguais = 0;
    let msg = '';

    arrayDOM.forEach((elemento, index) => {
        const valorInput = Number(elemento.value);
        console.log(valorInput);
        const valorSenha = Number(senha[index]);

        if (valorInput > valorSenha) {
            maiores++;
            elemento.style.borderColor = "#ff0000";
        } else if (valorInput < valorSenha) {
            menores++;
            elemento.style.borderColor = "#0000ff";
        } else {
            iguais++;
            elemento.style.borderColor = "#ffb700";
        }
    });

    if (iguais === 4) {
        window.alert(`Você acertou a senha ${senha} em ${tentativas} tentativas!`);
        dicas.innerHTML = '';
        let confirmacao = window.confirm("Você deseja continuar o jogo? ");
        if(confirmacao == true){
            redirecionamento("index.html");
        }
        else{
            btnValidar.disabled = true; // Desativa o botão
        }
        // Opcional: resetar tentativas e gerar nova senha
        tentativas = 0;
        senha = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
        console.log("Nova senha gerada:", senha);
    } else {
        if (maiores > 0) msg += `<h3>${maiores} número(s) que você inseriu são menores!</h3>`;
        if (menores > 0) msg += `<h3>${menores} número(s) que você inseriu são maiores!</h3>`;
        dicas.innerHTML = msg;
    }
}

btnValidar.addEventListener('click', () => {
    tentativas++;
    objTentativas.innerHTML = `<h2>${tentativas}</h2>`;
    const num = document.querySelectorAll(".num");
    validarSenha(num);
});
