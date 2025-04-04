document.addEventListener("DOMContentLoaded", function() {
    console.log("✅ Script cargado correctamente");

    // Obtener elementos del formulario
    const tipoProyecto = document.getElementById("tipo-proyecto");
    const docenteField = document.getElementById("docente-field");
    const programaField = document.getElementById("programa-field");
    const form = document.getElementById("papia-form");

    // Ocultar campos al inicio
    docenteField.style.display = "none";
    programaField.style.display = "none";

    // Evento cuando cambia el tipo de proyecto
    tipoProyecto.addEventListener("change", function() {
        if (tipoProyecto.value === "Proyecto Integrador de Aula (PIA)") {
            docenteField.style.display = "block";
            programaField.style.display = "block";
        } else {
            docenteField.style.display = "none";
            programaField.style.display = "none";
        }
    });

    // Validación antes de enviar
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío real del formulario

        let isValid = true;
        const requiredFields = form.querySelectorAll("input[required], textarea[required]");

        requiredFields.forEach(field => {
            if (field.value.trim() === "") {
                field.classList.add("is-invalid");
                isValid = false;
            } else {
                field.classList.remove("is-invalid");
            }
        });

        if (!isValid) {
            alert("⚠️ Por favor, completa todos los campos obligatorios.");
            return;
        }

        // Si la validación pasa, mostrar mensaje y limpiar formulario
        alert("✅ ¡Formulario enviado correctamente!");
        form.reset();
    });

    // Efecto en el título cuando pasa el mouse
    const titulo = document.querySelector("h1");

    titulo.addEventListener("mouseover", function() {
        titulo.style.color = "#ffcc00";
        titulo.style.transform = "scale(1.1)";
    });

    titulo.addEventListener("mouseout", function() {
        titulo.style.color = "#007bff";
        titulo.style.transform = "scale(1)";
    });

    // Validación visual en los campos
    const inputs = form.querySelectorAll(".form-control");

    inputs.forEach(input => {
        input.addEventListener("blur", function() {
            if (input.value.trim() === "") {
                input.style.border = "2px solid red";
                mostrarMensaje(input, "Este campo es obligatorio.");
            } else {
                input.style.border = "2px solid green";
                quitarMensaje(input);
            }
        });
    });

    function mostrarMensaje(input, mensaje) {
        let error = input.nextElementSibling;
        if (!error || !error.classList.contains("error-message")) {
            error = document.createElement("div");
            error.classList.add("error-message");
            error.style.color = "red";
            error.style.fontSize = "0.9rem";
            input.insertAdjacentElement("afterend", error);
        }
        error.textContent = mensaje;
    }

    function quitarMensaje(input) {
        let error = input.nextElementSibling;
        if (error && error.classList.contains("error-message")) {
            error.remove();
        }
    }
});
