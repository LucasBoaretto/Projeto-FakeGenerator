// função que controla a mensagem de erro
function showErrorMessage(message) {
  Swal.fire({
    icon: "error",
    title: "ERRO",
    text: message,
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

// Função que envia e valida os dados do formulário de cadastro
function enviarCad(name, email) {
  const nameInput = document.getElementById(name);
  const emailInput = document.getElementById(email);

  // confere se os campos obrigatórios estão preenchidos
  if (nameInput.value == "" && emailInput.value) {
    Swal.fire({
      icon: "error",
      title: "ERRO",
      text: "Preencha todos os campos obrigatórios!",
    });
    return;
  }

  if (!valName(nameInput)) return;
  if (!valEmail(emailInput)) return;

  // "envia" o formulário se tudo estiver correto e cria um JSON com os dados do usuário e exibe no console

  Swal.fire({
    icon: "success",
    title: "SUCESSO",
    text: "Cadastro realizado com sucesso!",
  });

  document.getElementById("formUser").addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new formData(this);
    const userData = Object.fromEntries(formData.entries());

    fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: { "Content-Type": "aplication/json" },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) =>
        Swal.fire({
          icon: "success",
          title: "SUCESSO",
          text: "Cadastro realizado com sucesso!",
        })
      );
  });

  const userData = {
    nome: nameInput.value,
    email: emailInput.value,
  };

  nameInput.style.borderColor = "black";
  emailInput.style.borderColor = "black";

  const user = JSON.stringify(userData);
  console.log(user);

  nameInput.value = "";
  emailInput.value = "";
}
