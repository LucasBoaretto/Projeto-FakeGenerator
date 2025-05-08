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

// Função que envia e valida os dados do formulário de cadastro

document.getElementById("formContact").addEventListener("submit", function (e) {
  e.preventDefault();

  // Atribuindo as variáveis corretamente aos IDs dos campos
  const nameInput = document.getElementById("contactName");
  const emailInput = document.getElementById("contactEmail");
  const subjectInput = document.getElementById("contactSubject");
  const category = document.getElementById("category");
  const message = document.getElementById("contactMessage");

  // Confere se os campos obrigatórios estão preenchidos e são válidos
  if (!valName(nameInput)) return;
  if (!valEmail(emailInput)) return;

  const userData = {
    nome: nameInput.value,
    email: emailInput.value,
    assunto: subjectInput.value,
    categoria: category.value,
    mensagem: message.value,
  };

  fetch("http://localhost:3000/contact", {
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

      nameInput.value = "";
      emailInput.value = "";
    });
});
//npx json-server --watch contact.json --port 3000 