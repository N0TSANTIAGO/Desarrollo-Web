/**
 *  Colocar aquí el equipo y sus integrantes
 */


/**
 *  Manejo de previsualización de imágenes
 */ 
document.getElementById('fotoPaciente').addEventListener('change', function(event) {
    mostrarImagen(event, 'previewPaciente');
});

/**
 * Evento de previsualización de foto del Médico
 */
document.getElementById('fotoDoctor').addEventListener('change', function(event) {
    mostrarImagen(event, 'previewDoctor');
});


/**
 * Carga inicial del Formulario
 */
document.addEventListener("DOMContentLoaded", function () {
    // Ruta de la imagen y el audio dentro de la misma carpeta
    const imagenPaciente   = "teleconsulta-foto-paciente1.jpg";  // Nombre de la imagen en la misma carpeta
    const imagenDoctor     = "teleconsulta-foto-doctor1.jpg"; 
    const audioDiagnostico = "teleconsulta-diagnostico1.mp3";   // Nombre del audio en la misma carpeta

    // Cargar imagen del paciente automáticamente
    const imgPaciente = document.getElementById("previewPaciente");
    imgPaciente.src = imagenPaciente;
    imgPaciente.alt = "Foto del Paciente";
    
// Cargar imagen del Doctor automáticamente
const imDoctor = document.getElementById("previewDoctor");
imDoctor.src = imagenDoctor;
imDoctor.alt = "Foto del Doctor";

    // Cargar y reproducir el audio automáticamente
    const audioPlayer = document.getElementById("audioPlayback");
    audioPlayer.src = audioDiagnostico;
    audioPlayer.controls = true; // Muestra los controles de reproducción
});


/**
 * 
 *  Función para mostrar imagen de paciente o doctor
 */
function mostrarImagen(event, previewId) {
    const archivo = event.target.files[0];
    if (archivo) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById(previewId).src = e.target.result;
        };
        reader.readAsDataURL(archivo);
    }
}


/** Botón de envío del foormulario */
const boton = document.getElementById("miBoton");

/** 
 *  Acción de envio del formulario al Servidor (simulación)
 */
boton.addEventListener("click", function() {
    const datos_ok = false;

    /** 
     * Validar mínimo 2 campos que no estén vacíos. 
    /


    /** Decisión: Utilizar un condicional (lógico)
     *  1.- Si los campos están llenos, simular envío con mensaje exitoso 
     *  2.- Si alguno de los 2 campos no tiene información, enviar aviso de alarma
     */
    const idPaciente = document.getElementById('idPaciente').value;
    const nombrePaciente = document.getElementById('nombrecompletoPaciente').value;
    const edadPaciente = document.getElementById('edadPaciente').value;
    const generoPaciente = document.getElementById('generoPaciente').value;
    const fotoPaciente = document.getElementById('fotoPaciente').files[0];
    const idDoctor = document.getElementById('idDoctor').value;
    const nombreDoctor = document.getElementById('nombreDoctor').value;
    const fotoDoctor = document.getElementById('fotoDoctor').files[0];
if (idPaciente && nombrePaciente && edadPaciente && generoPaciente && fotoPaciente && idDoctor && nombreDoctor && fotoDoctor) {
        // Simular envío exitoso
        alert('Formulario enviado correctamente.');
        // Aquí puedes agregar la lógica para enviar el formulario al servidor
    } else {
        // Mostrar aviso de alarma si falta información
        alert('Por favor, complete todos los campos obligatorios.');
    }
});





