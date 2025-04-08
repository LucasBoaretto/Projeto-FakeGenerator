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
function contador(inputId, contId, maxId, maxValue) {
    const content = document.getElementById(inputId);
    const total = content.value.length;
    const cont = document.getElementById(contId);
    const max = document.getElementById(maxId);

    cont.textContent = total;

    let color = 'green';
    if (total >= maxValue){
        color = 'red';
    } else if (total >= maxValue - 15) {
        color = 'orange';
    }

    cont.style.color = color;
    max.style.color = color;
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

// Função que envia e valida os dados do formulário de cadastro
function enviarCad() {
    let nome = document.getElementById('nome');
    let email = document.getElementById('email');
    let telefone = document.getElementById('telefone');
    let senha = document.getElementById('senha');
    let verificar = document.getElementById('verificar');
    const nameInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('telefone');
    const passwordInput = document.getElementById('senha');
    const confirmPasswordInput = document.getElementById('verificar');

    // confere se os campos obrigatórios estão preenchidos 
    if (nome.value == '' && email.value == '' && senha.value == '' && verificar.value == '') {
        Swal.fire({
            icon: "error",
            title: "ERRO",
            text: "Preencha todos os campos obrigatórios!"
        });
        return;
    } else { // incia as validações

        // confere se o nome nao possui numeros
        for (let i = 0; i < nome.value.length; i++) {
            if (!isNaN(nome.value[i])) {
                Swal.fire({
                    icon: "error",
                    title: "ERRO",
                    text: "Nome inválido, insira um nome que não seja um número!"
                });
                nameInput.style.borderColor = 'red';
                nome.value = '';
                return;
            }
        }

        //confere se o nome tem mais de 3 letras
        if (nome.value.length < 3) {
            Swal.fire({
                icon: "error",
                title: "ERRO",
                text: "Nome inválido, insira um nome com no mínimo 3 letras!!"
            });
            nameInput.style.borderColor = 'red';
            nome.value = '';
            return;

        }
        // confere se o telefone é uma letra
        else if (isNaN(telefone.value)) {
            Swal.fire({
                icon: "error",
                title: "ERRO",
                text: "Telefone inválido, insira apenas números"
            });
            phoneInput.style.borderColor = 'red';
            telefone.value = '';
            return;
        }
        //confere se o telefone tem mais de 10 digitos
        else if (telefone.value.length > 0 && telefone.value.length < 10) {
            Swal.fire({
                icon: "error",
                title: "ERRO",
                text: "Telefone inválido, insira pelo menos 10 digitos!"
            });
            phoneInput.style.borderColor = 'red';
            telefone.value = '';
            return;
        }

        // confere se a senha tem mais de 6 digitos
        else if (senha.value.length < 6) {
            Swal.fire({
                icon: "error",
                title: "ERRO",
                text: "Insira uma senha de no mínimo 6 digitos!"
            });
            passwordInput.style.borderColor = 'red';
            senha.value = '';
            return;
        }

        // confere se a confirmação da senha é igual a senha
        else if (verificar.value !== senha.value) {
            Swal.fire({
                icon: "error",
                title: "ERRO",
                text: "As senhas não coincidem!"
            });
            confirmPasswordInput.style.borderColor = 'red';
            verificar.value = '';
            return;
        }

        // "envia" o formulário se tudo estiver correto e cria um JSON com os dados do usuário
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