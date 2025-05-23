// Função que abre e fecha o menu quando a tela estiver em modo mobile
function clickMenu(element) {
  if (element.style.display === "flex" || element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block"; // ou 'block' se preferir no mobile
  }
}

//garante que ao redimensionar a tela os botoes voltem como estavam antes
window.addEventListener("resize", () => {
  const nav = document.getElementById("navBarPages");
  const menu = document.getElementById("menu");
  if (window.innerWidth > 500) {
    nav.style.display = "flex";
    menu.style.display = "flex";
  } else {
    nav.style.display = "none";
    menu.style.display = "none";
  }
});

// Função que abre e fecha algum dos tópicos da FAQ
function faqListToggle(element) {
  const faqItem = element.closest(".faqItem");
  const answer = faqItem.querySelector(".faqAnswer");
  const icon = faqItem.querySelector(".plusIcon");

  if (answer.style.display === "block") {
    answer.style.display = "none";
    icon.innerHTML = '<i class="fa-solid fa-plus" style="color: #000000;"></i>';
  } else {
    answer.style.display = "block";
    icon.innerHTML =
      '<i class="fa-solid fa-minus" style="color: #000000;"></i>';
  }
}

// Função que conta os caracteres do input da pagina principal e altera a cor de acordo com o número de caracteres
function counter(inputId, contId, maxId, maxValue) {
  const content = document.getElementById(inputId);
  const total = content.value.length;
  const cont = document.getElementById(contId);
  const max = document.getElementById(maxId);

  cont.textContent = total;

  let color = "green";
  if (total >= maxValue) {
    color = "red";
  } else if (total >= maxValue - 15) {
    color = "orange";
  }

  cont.style.color = color;
  max.style.color = color;
}

// Função que altera as letras minusculas para maiúsculas e vice-versa
function toggleCase(inputId, outputId) {
  let input = document.getElementById(inputId);
  let output = document.getElementById(outputId);

  let result = "";
  for (let i = 0; i < input.value.length; i++) {
    let character = input.value[i];
    if (character === character.toUpperCase()) {
      result += character.toLowerCase();
    } else {
      result += character.toUpperCase();
    }
  }
  output.value = result;
}

// Função que coloca a primeira letra de cada palavra do texto em maiuscula
function properCase(inputId, outputId) {
  let input = document.getElementById(inputId);
  let output = document.getElementById(outputId);

  let lowercase = input.value.toLowerCase();
  let slice = lowercase.split(" ");
  let result = "";

  for (let i = 0; i < slice.length; i++) {
    if (slice[i]) {
      slice[i] = slice[i].charAt(0).toUpperCase() + slice[i].slice(1);
    }
  }
  result = slice.join(" ");
  output.value = result;
}

// Função que coloca a primeira letra de cada frase em maiuscula
function sentenceCase(inputId, outputId) {
  let input = document.getElementById(inputId);
  let output = document.getElementById(outputId);

  let minusculo = input.value.toLowerCase();
  let slice = minusculo.split(/([.!?])/);
  let result = "";

  for (let i = 0; i < slice.length; i += 2) {
    if (slice[i]) {
      slice[i] = slice[i].charAt(0).toUpperCase() + slice[i].slice(1);
    }
  }
  result = slice.join("");
  output.value = result;
}

// Função que coloca o texto em maiusculo
function upperCase(inputId, outputId) {
  let input = document.getElementById(inputId);
  let output = document.getElementById(outputId);

  let result = "";

  for (let i = 0; i < input.value.length; i++) {
    let character = input.value[i];
    result += character.toUpperCase();
  }

  output.value = result;
}

// Função que coloca o texto em minusculo
function lowerCase(inputId, outputId) {
  let input = document.getElementById(inputId);
  let output = document.getElementById(outputId);

  var result = "";

  for (var i = 0; i < input.value.length; i++) {
    var character = input.value[i];
    result += character.toLowerCase();
  }

  output.value = result;
}

// Função que coloca o texto em maiusculo e minusculo alternadamente
function mixedCase(inputId, outputId) {
  let input = document.getElementById(inputId);
  let output = document.getElementById(outputId);

  let result = "";
  let j = 0;
  for (let i = 0; i < input.value.length; i++) {
    let character = input.value[i];
    if (character === "") {
      result += character;
    } else {
      if (i % 2 == 0) {
        result += character.toUpperCase();
      } else {
        result += character.toLowerCase();
      }
    }
    j++;
  }
  output.value = result;
}

// Função que apaga o texto da textarea
function reset(outputId) {
  var output = document.getElementById(outputId);
  output.value = "";
}

function copy(outputId) {
  const output = document.getElementById(outputId);
  const text = output.value || output.innerText || output.textContent;

  navigator.clipboard
    .writeText(text)
    .then(() => {
      Swal.fire({
        icon: "success",
        title: "Texto copiado!",
        text: "O conteúdo foi copiado para a área de transferência.",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        toast: true,
        position: "top-end",
      });
    })
    .catch((err) => {
      console.error("Erro ao copiar:", err);
      Swal.fire({
        icon: "error",
        title: "Erro ao copiar!",
        text: "Tenta novamente ou confere o texto.",
      });
    });
}

// função que controla a mensagem de erro
function showErrorMessage(message) {
  Swal.fire({
    icon: "error",
    title: "ERRO",
    text: message,
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    toast: true,
    position: "top-end",
  });
}

// função que altera a borda do imput para vermelho
function invalidStyle(input) {
  input.style.borderColor = "red";
}

//função que altera a borda do imput para verde
function validStyle(input) {
  input.style.borderColor = "lightgreen";
}

//função que valida o nome
function valName(input) {
  console.log("Validando nome:", input.value);
  // confere se o nome nao possui numeros
  if (/\d/.test(input.value)) {
    showErrorMessage("Nome inválido, insira apenas letras!");
    invalidStyle(input);
    return false;
  }

  //confere se o nome tem mais de 3 letras
  if (input.value.length < 3) {
    showErrorMessage("Nome inválido, insira um nome com no mínimo 3 letras!");
    invalidStyle(input);
    return false;
  }
  validStyle(input);
  return true;
}

//função que valida o email
function valEmail(input) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(input.value)) {
    showErrorMessage("Insira um e-mail válido!");
    invalidStyle(input);
    return false;
  }
  validStyle(input);
  return true;
}

//função que valida o telefone
function valPhone(input) {
  // verifica se o campo está vazio
  if (input.value.trim() === "") {
    input.style.borderColor = "black";
    return true;
  }

  // confere se o telefone é uma letra
  if (isNaN(input.value)) {
    showErrorMessage("Telefone inválido, insira apenas números");
    invalidStyle(input);
    return false;
  }

  //confere se o telefone tem mais de 10 digitos
  if (input.value.length > 0 && input.value.length < 10) {
    showErrorMessage("Telefone inválido, insira pelo menos 10 digitos!");
    invalidStyle(input);
    return false;
  }
  validStyle(input);
  return true;
}

//função que valida a senha
function valPassword(password, confirm) {
  // confere se a senha tem mais de 6 digitos
  if (password.value.length < 6) {
    showErrorMessage("Insira uma senha de no mínimo 6 digitos!");
    invalidStyle(password);
    return false;
  }

  // confere se a confirmação da senha é igual a senha
  if (confirm.value !== password.value) {
    showErrorMessage("As senhas não coincidem!");
    invalidStyle(confirm);
    return false;
  }
  validStyle(password);
  validStyle(confirm);
  return true;
}

// Função que envia e valida os dados do formulário de cadastro

document
  .getElementById("enviarFormulario")
  .addEventListener("click", function (e) {
    e.preventDefault();

    // Atribuindo as variáveis corretamente aos IDs dos campos
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("verify");

    const results = fetch("http://localhost:3000/users", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    // Confere se os campos obrigatórios estão preenchidos e são válidos
    if (!valName(nameInput)) return;
    if (!valEmail(emailInput)) return;
    if (!valPhone(phoneInput)) return;
    if (!valPassword(passwordInput, confirmPasswordInput)) return;

    const userData = {
      nome: nameInput.value,
      email: emailInput.value,
      telefone: phoneInput.value,
      senha: passwordInput.value,
    };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .catch((err) => {
        console.error("Erro ao salvar:", err);
        Swal.fire({
          icon: "error",
          title: "Erro",
          text: "Não foi possível salvar os dados.",
        });
        nameInput.style.borderColor = "black";
        emailInput.style.borderColor = "black";
        phoneInput.style.borderColor = "black";
        passwordInput.style.borderColor = "black";
        confirmPasswordInput.style.borderColor = "black";

        nameInput.value = "";
        emailInput.value = "";
        phoneInput.value = "";
        passwordInput.value = "";
        confirmPasswordInput.value = "";
      });

    Swal.fire({
      icon: "success",
      title: "Enviado!",
      text: "Usuário cadastrado com sucesso!",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      toast: true,
      position: "top-end",
    }).then(() => {
      setTimeout(() => {
        console.log("Resultados", results);
      }, 3000);
    });
  });
//npx json-server --watch users.json --port 3000
