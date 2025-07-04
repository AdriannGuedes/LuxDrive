window.addEventListener("DOMContentLoaded", () => {
    const suspense = document.querySelector(".carSuspense");
    suspense.classList.add("active");
});

emailjs.init("If2dItrGy7QSP_xlK"); // ← seu public key

const form = document.querySelector("#form")

const feedback = document.getElementById("feedback");

const fields = [
    { input: document.querySelector("#marca"), message: "Preencha a marca do veículo!" },
    { input: document.querySelector("#modelo"), message: "Preencha o modelo do veículo!" },
    { input: document.querySelector("#cor"), message: "Preencha a cor do veículo!" },
    { input: document.querySelector("#ano"), message: "Preencha o ano do veículo!" },
    { input: document.querySelector("#message"), message: "Informe as especificações do veículo!" }
];

form.addEventListener("submit", (event) => {
    event.preventDefault();

    for (const field of fields) {
        const value = field.input.value.trim();
        if (value === "") {
            alert(field.message);
            field.input.focus();
            return;
        }
    }

    emailjs.sendForm("service_h9eq26a", "template_yvnhb5u", form)
        .then(() => {
            // Oculta o formulário
            form.style.display = "none";

            // Mostra a mensagem de feedback
            feedback.style.display = "block";
        }, (error) => {
            alert("Erro ao enviar: " + error.text);
        }
    );

});


