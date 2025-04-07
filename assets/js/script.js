// Função que abre e fecha o menu quando a tela estiver em modo mobile
function clickMenu() {
    if (menu.style.display == 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

// Função que abre e fecha algum dos tópicos da FAQ
function faqListOpen(element) {
    const faqItem = element.closest('.faqItem');
    const answer = faqItem.querySelector('.faqAnswer');
    const icon = faqItem.querySelector('.plusIcon');

    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        icon.innerHTML = '<i class="fa-solid fa-plus" style="color: #000000;"></i>';
    } else {
        answer.style.display = 'block';
        icon.innerHTML = '<i class="fa-solid fa-minus" style="color: #000000;"></i>';
    }
}

// Função que conta os caracteres do input da pagina principal e altera a cor de acordo com o número de caracteres
function contador() {
    var conteudo = document.getElementById('insertText');
    var total = conteudo.value.length;
    var contador = document.getElementById('cont');
    contador.textContent = total;

    if (total >= 80) {
        document.getElementById('cont').style.color = 'red';
        document.getElementById('maximo').style.color = 'red';
    } else if (total < 80 && total >= 65) {
        document.getElementById('cont').style.color = 'orange';
        document.getElementById('maximo').style.color = 'orange';
    } else {
        document.getElementById('cont').style.color = 'green';
        document.getElementById('maximo').style.color = 'green';
    }
}

// Função que altera as letras minusculas para maiúsculas e vice-versa
function toggleCase() {
    let inserir = document.getElementById('insertText');
    let mostrar = document.getElementById('textAreaHome');

    let resultado = '';
    for (let i = 0; i < inserir.value.length; i++) {
        let letra = inserir.value[i];
        if (letra === letra.toUpperCase()) {
            resultado += letra.toLowerCase();
        } else {
            resultado += letra.toUpperCase();
        }
    }

    mostrar.value = resultado;
}

// Função que coloca a primeira letra de cada palavra do texto em maiuscula
function properCase() {
    let inserir = document.getElementById('insertText');
    let mostrar = document.getElementById('textAreaHome');

    let minusculo = inserir.value.toLowerCase();
    let separar = minusculo.split(' ');
    let resultado = '';

    for (let i = 0; i < separar.length; i++) {
        if (separar[i]) {
            separar[i] = separar[i].charAt(0).toUpperCase() + separar[i].slice(1);
        }
    }
    resultado = separar.join(' ');
    mostrar.value = resultado;
}


// Função que coloca a primeira letra de cada frase em maiuscula
function sentenceCase() {
    let inserir = document.getElementById('insertText');
    let mostrar = document.getElementById('textAreaHome');

    let minusculo = inserir.value.toLowerCase();
    let separar = minusculo.split(/([.!?])/);
    let resultado = '';

    for (let i = 0; i < separar.length; i += 2) {
        if (separar[i]) {
            separar[i] = separar[i].charAt(0).toUpperCase() + separar[i].slice(1);
        }
    }
    resultado = separar.join('');
    mostrar.value = resultado;
}

// Função que coloca o texto em maiusculo
function upperCase() {
    let inserir = document.getElementById('insertText');
    let mostrar = document.getElementById('textAreaHome');

    let resultado = '';

    for (let i = 0; i < inserir.value.length; i++) {
        let letra = inserir.value[i];
        resultado += letra.toUpperCase();
    }

    mostrar.value = resultado;
}

// Função que coloca o texto em minusculo
function lowerCase() {
    let inserir = document.getElementById('insertText');
    let mostrar = document.getElementById('textAreaHome');

    var resultado = '';

    for (var i = 0; i < inserir.value.length; i++) {
        var letra = inserir.value[i];
        resultado += letra.toLowerCase();
    }

    mostrar.value = resultado;
}

// Função que coloca o texto em maiusculo e minusculo alternadamente
function mixedCase() {
    let inserir = document.getElementById('insertText');
    let mostrar = document.getElementById('textAreaHome');

    let resultado = '';
    let j = 0;
    for (let i = 0; i < inserir.value.length; i++) {
        let letra = inserir.value[i];
        if (letra === '') {
            resultado += letra;
        } else {
            if (i % 2 == 0) {
                resultado += letra.toUpperCase();
            } else {
                resultado += letra.toLowerCase();
            }
        }
        j++;
    }
    mostrar.value = resultado;
}

// Função que apaga o texto da textarea
function reset() {
    var texto = document.getElementById('textAreaHome');
    texto.value = '';
}

// Função que valida os dados do formulário de cadastro
function enviarCad() {
    let nome = document.getElementById('nome');
    let email = document.getElementById('email');
    let telefone = document.getElementById('telefone');
    let senha = document.getElementById('senha');
    let verificar = document.getElementById('verificar');

    if (nome.value == '' && email.value == '' && senha.value == '' && verificar.value == '') {
        Swal.fire({
            icon: "error",
            title: "ERRO",
            text: "Preencha todos os campos obrigatórios!"
        });
        return;
    } else {

        if (nome.value.length < 3) {
            Swal.fire({
                icon: "error",
                title: "ERRO",
                text: "Nome inválido, insira um nome com no mínimo 3 letras!!"
            });
            nome.value = '';
            return;
        }

        else if (isNaN(telefone.value)) {
            Swal.fire({
                icon: "error",
                title: "ERRO",
                text: "Telefone inválido, insira apenas números"
            });
            telefone.value = '';
            return;
        }
        else if (telefone.value.length < 10) {
            Swal.fire({
                icon: "error",
                title: "ERRO",
                text: "Telefone inválido, insira pelo menos 10 digitos!"
            });
            telefone.value = '';
            return;
        }

        else if (senha.value.length < 6) {
            Swal.fire({
                icon: "error",
                title: "ERRO",
                text: "Insira uma senha de no mínimo 6 digitos!"
            });
            return;
        }

        else if (verificar.value !== senha.value) {
            Swal.fire({
                icon: "error",
                title: "ERRO",
                text: "As senhas não coincidem!"
            });
            verificar.value = '';
            return;
        }

        else {
            Swal.fire({
                icon: "success",
                title: "SUCESSO",
                text: "Cadastro realizado com sucesso!"
            });

            const userData = {
                nome: nome.value,
                email: email.value,
                telefone: telefone.value,
                senha: senha.value
            };
    
            const user = JSON.stringify(userData);
            console.log(user);

            nome.value = '';
            email.value = '';
            telefone.value = '';
            senha.value = '';
            verificar.value = '';
        }
    }
}