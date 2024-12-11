document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const message = document.getElementById("message");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = {};
        let hasEmptyFields = false;

        Array.from(form.elements).forEach((input) => {
            if (input.type !== "submit") {
                const value = input.value.trim();
                if (value === "") {
                    hasEmptyFields = true;
                } else {
                    formData[input.name] = value;
                }
            }
        });

        // Se houver campos vazios, exibir alerta e cancelar ação
        if (hasEmptyFields) {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        // Exibir o objeto no console
        console.log(formData);

        // Ocultar o formulário e exibir mensagem
        form.style.display = "none";
        message.textContent = "Obrigado por seu cadastro!";
        message.style.display = "block";
    });
});
