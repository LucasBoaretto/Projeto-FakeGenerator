const text = document.getElementById('inhome');


function clickMenu() {
    if (menu.style.display == 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

function toggleCase() {
    var resultado = '';
    let inputText = text.value;
    for (let i = 0; i < inputText.length; i++) {
        let letra = inputText[i];
        if (letra === letra.toUpperCase()) {
            resultado += letra.toLowerCase();
        } else {
            resultado += letra.toUpperCase();
        }
    }

    mostrar.value = resultado;
}

function contador() {
    var conteudo = document.getElementById('inhome');
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

function upperCase() {
    let inputText = text.value;
    let resultado = '';

    for (let i = 0; i < inputText.length; i++) {
        let letra = inputText[i];
        resultado += letra.toUpperCase();
    }

    mostrar.value = resultado;
}

function lowerCase() {
    let inputText = text.value;
    var resultado = '';

    for (var i = 0; i < inputText.length; i++) {
        var letra = inputText[i];
        resultado += letra.toLowerCase();
    }

    mostrar.value = resultado;
}

function reset() {
    var texto = document.getElementById('txt2');
    texto.value = '';
}

function sentenceCase() {

}
