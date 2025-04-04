function clickMenu() {
    if (menu.style.display == 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

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

function reset() {
    var texto = document.getElementById('textAreaHome');
    texto.value = '';
}

function enviarCad() {
    let nome = document.getElementById('nome');
    let email = document.getElementById('email');
    let telefone = document.getElementById('telefone');
    let senha = document.getElementById('senha');
    let verificar = document.getElementById('verificar');

    if (nome.value == '' && email.value == '' && telefone.value == '' && senha.value == '' && verificar.value =='') {
        alert('Dados inválidos, preencha todos os campos!');
        return;
    } else {

        if (nome.value.length < 3) {
            alert('Nome inválido, insira um nome com no mínimo 3 letras!');
            nome.value = '';
            return;
        }

        if (isNaN(telefone.value)) {
            alert('Telefone inválido, insira apenas números');
            telefone.value = '';
            return;
        }
        if (telefone.value.length < 10) {
            alert('Telefone inválido, insira pelo menos 10 digitos!');
            telefone.value = '';
            return;
        }

        if (senha.value.length < 6) {
            alert('Insira uma senha de no mínimo 6 digitos!');
            return;
        }

        if (verificar.value !== senha.value) {
            alert('As senhas não coincidem!');
            verificar.value = '';
            return;
        }
    }
}