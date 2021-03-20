console.log("Working!");

const form = document.querySelector("#formContact");

const send = document.querySelector("#btnSend");
const sending = document.querySelector("#btnSending");

const toast = document.querySelector(".toast");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(form);

  console.log("campo email", data.get("emailPerson"));
  console.log("Nombre persona", data.get("namePerson"));
  console.log("Comentarios ", data.get("textComments"));

  send.classList.add("d-none");
  sending.classList.remove("d-none");
  window.setTimeout(() => {
    send.classList.remove("d-none");
    sending.classList.add("d-none");

    const eventToast = new bootstrap.Toast(toast, 1000);

    eventToast.show();
  }, 3000);
  form.reset();
});
