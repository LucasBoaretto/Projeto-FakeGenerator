// Função que abre e fecha o menu quando a tela estiver em modo mobile
function clickMenu(element) {
    if (element.style.display == 'block') {
        element.style.display = 'none';
    } else {
        element.style.display = 'block';
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
    if (total >= maxValue) {
        color = 'red';
    } else if (total >= maxValue - 15) {
        color = 'orange';
    }

    cont.style.color = color;
    max.style.color = color;
}

// Função que altera as letras minusculas para maiúsculas e vice-versa
function toggleCase(inputId, outputId) {
    let input = document.getElementById(inputId);
    let output = document.getElementById(outputId);

    let result = '';
    for (let i = 0; i < input.value.length; i++) {
        let letter = input.value[i];
        if (letter === letter.toUpperCase()) {
            result += letter.toLowerCase();
        } else {
            result += letter.toUpperCase();
        }
    }
    output.value = result;
}

// Função que coloca a primeira letra de cada palavra do texto em maiuscula
function properCase(inputId, outputId) {
    let input = document.getElementById(inputId);
    let output = document.getElementById(outputId);

    let lowercase = input.value.toLowerCase();
    let slice = lowercase.split(' ');
    let result = '';

    for (let i = 0; i < slice.length; i++) {
        if (slice[i]) {
            slice[i] = slice[i].charAt(0).toUpperCase() + slice[i].slice(1);
        }
    }
    result = slice.join(' ');
    output.value = result;
}


// Função que coloca a primeira letra de cada frase em maiuscula
function sentenceCase(inputId, outputId) {
    let inserir = document.getElementById(inputId);
    let mostrar = document.getElementById(outputId);

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
function upperCase(inputId, outputId) {
    let inserir = document.getElementById(inputId);
    let mostrar = document.getElementById(outputId);

    let resultado = '';

    for (let i = 0; i < inserir.value.length; i++) {
        let letra = inserir.value[i];
        resultado += letra.toUpperCase();
    }

    mostrar.value = resultado;
}

// Função que coloca o texto em minusculo
function lowerCase(inputId, outputId) {
    let inserir = document.getElementById(inputId);
    let mostrar = document.getElementById(outputId);

    var resultado = '';

    for (var i = 0; i < inserir.value.length; i++) {
        var letra = inserir.value[i];
        resultado += letra.toLowerCase();
    }

    mostrar.value = resultado;
}

// Função que coloca o texto em maiusculo e minusculo alternadamente
function mixedCase(inputId, outputId) {
    let inserir = document.getElementById(inputId);
    let mostrar = document.getElementById(outputId);

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
function reset(outputId) {
    var texto = document.getElementById(outputId);
    texto.value = '';
}

function showErrorMessage(message) {
    Swal.fire({
        icon: "error",
        title: "ERRO",
        text: message
    });
}

function invalidStyle(input) {
    input.style.borderColor = 'red';
}

function validStyle(input) {
    input.style.borderColor = 'lightgreen';
}

function valName(input) {
    // confere se o nome nao possui numeros
    if (/\d/.test(input.value)) {
        showErrorMessage('Nome inválido, insira apenas letras!');
        invalidStyle(input);
        return false;
    }

    //confere se o nome tem mais de 3 letras
    if (input.value.length < 3) {
        showErrorMessage('Nome inválido, insira um nome com no mínimo 3 letras!');
        invalidStyle(input);
        return false;
    }
    validStyle(input);
    return true;
}

function valEmail(input) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(input.value)) {
        showErrorMessage('Insira um e-mail válido!');
        invalidStyle(input);
        return false;
    }
    validStyle(input);
    return true;
}

function valPhone(input) {
    // verifica se o campo está vazio
    if (input.value.trim() === '') {
        input.style.borderColor = 'black';
        return true;
    }

    // confere se o telefone é uma letra
    if (isNaN(input.value)) {
        showErrorMessage('Telefone inválido, insira apenas números');
        invalidStyle(input);
        return false;
    }

    //confere se o telefone tem mais de 10 digitos
    if (input.value.length > 0 && input.value.length < 10) {
        showErrorMessage('Telefone inválido, insira pelo menos 10 digitos!');
        invalidStyle(input);
        return false;
    }
    validStyle(input);
    return true;
}

function valPassword(password, confirm) {
    // confere se a senha tem mais de 6 digitos
    if (password.value.length < 6) {
        showErrorMessage('Insira uma senha de no mínimo 6 digitos!');
        invalidStyle(password);
        return false;
    }

    // confere se a confirmação da senha é igual a senha
    if (confirm.value !== password.value) {
        showErrorMessage('As senhas não coincidem!');
        invalidStyle(confirm);
        return false;
    }
    validStyle(password);
    validStyle(confirm);
    return true;
}

// Função que envia e valida os dados do formulário de cadastro
function enviarCad(name, email, phone, password, confirmPassword) {
    const nameInput = document.getElementById(name);
    const emailInput = document.getElementById(email);
    const phoneInput = document.getElementById(phone);
    const passwordInput = document.getElementById(password);
    const confirmPasswordInput = document.getElementById(confirmPassword);

    // confere se os campos obrigatórios estão preenchidos 
    if (nameInput.value == '' && emailInput.value == '' && passwordInput.value == '' && confirmPasswordInput.value == '') {
        Swal.fire({
            icon: "error",
            title: "ERRO",
            text: "Preencha todos os campos obrigatórios!"
        });
        return;
    }

    if (!valName(nameInput)) return;
    if (!valEmail(emailInput)) return;
    if (!valPhone(phoneInput)) return;
    if (!valPassword(passwordInput, confirmPasswordInput)) return;

    // "envia" o formulário se tudo estiver correto e cria um JSON com os dados do usuário

    Swal.fire({
        icon: "success",
        title: "SUCESSO",
        text: "Cadastro realizado com sucesso!"
    });
    const userData = {
        nome: nameInput.value,
        email: emailInput.value,
        telefone: phoneInput.value,
        senha: passwordInput.value
    };

    nameInput.style.borderColor = 'black';
    emailInput.style.borderColor = 'black';
    phoneInput.style.borderColor = 'black';
    passwordInput.style.borderColor = 'black';
    confirmPasswordInput.style.borderColor = 'black';

    const user = JSON.stringify(userData);
    console.log(user);

    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    passwordInput.value = '';
    confirmPasswordInput.value = '';

}
