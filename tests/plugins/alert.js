// class Alerts {
//   static layout(message) {
//     return `
//         <div id="alerts" class=box>
//             <div class="window box">
//                 <div class="box w-100 fill">
//                     <span class="fs-4 text-center">${message}</span>
//                 </div>
//                 <div class="box">
//                     <button class="btn btn-primary" onclick="Alerts.remove();">Ok</button>
//                 </div>
//             </div>
//         </div>
//         `;
//   }
//   static set(message) {
//     if (!message) {
//       return;
//     }

//     const isAlerts = document.querySelector("#alerts");

//     if (isAlerts) {
//       return; // Esse retorno impede que gere várias abas de alerta
//     }

//     document.body.insertAdjacentHTML("beforeend", this.layout(message));

//     setTimeout(() => {
//       const window = document.querySelector("#alerts .window");

//       window.style.transform = "translateY(0vh)";
//     }, 100);
//   }
//   static remove() {
//     const window = document.querySelector("#alerts .window");

//     window.style.transform = "translateY(100vh)";
//     const isAlerts = document.querySelector("#alerts");

//     setTimeout(() => {
//       isAlerts.parentNode.removeChild(isAlerts);
//     }, 500);
//   }
// }

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const alertBox = document.createElement('div');
  alertBox.className = "overlay";
  alertBox.id = 'alertaPersonalizado';
  alertBox.innerHTML = `<div class="custom-alert">
      <p>Botão clicado<br>Pressione OK para sair!</p>
      <button onclick="document.body.removeChild(document.getElementById('alertaPersonalizado'))">OK</button>
    </div>`;

  document.body.appendChild(alertBox)
});



