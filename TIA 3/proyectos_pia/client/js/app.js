document.addEventListener('DOMContentLoaded', () => {
  const baseUrl = 'http://localhost:3000/api/usuarios';
  const btnListar = document.getElementById('btn-listar');
  const btnCrear = document.getElementById('btn-crear');
  const btnActualizar = document.getElementById('btn-actualizar');
  const btnEliminar = document.getElementById('btn-eliminar');
  const usuarioForm = document.getElementById('usuario-form');
  const statusCodeElement = document.getElementById('status-code');
  const responseMessageElement = document.getElementById('response-message');
  const tipoProyectoSelect = document.getElementById('tipo-proyecto');
  const codigoTitulo = document.getElementById('titulo-proyecto');

  const tituloOriginal = 'Codigo de proyecto';

  tipoProyectoSelect.addEventListener('change', () => {
    const selectedOption = tipoProyectoSelect.options[tipoProyectoSelect.selectedIndex];
    if (selectedOption && selectedOption.value !== '') {
      codigoTitulo.textContent = selectedOption.textContent;
    } else {
      codigoTitulo.textContent = tituloOriginal;
    }
  });

  function showResponse(statusCode, message) {
    statusCodeElement.textContent = statusCode;

    if (statusCode >= 200 && statusCode < 300) {
      statusCodeElement.style.color = 'DarkGreen';
    } else if (statusCode >= 400 && statusCode < 500) {
      statusCodeElement.style.color = 'OrangeRed';
    } else if (statusCode >= 500) {
      statusCodeElement.style.color = 'MediumVioletRed';
    } else {
      statusCodeElement.style.color = 'DarkGoldenrod';
    }

    responseMessageElement.textContent = typeof message === 'object'
      ? JSON.stringify(message, null, 2)
      : message;
  }

  function getFormData() {
    const formData = new FormData(usuarioForm);
    return {
      id: formData.get('id'),
      nombre: formData.get('nombre'),
      documento: formData.get('documento'),
      tipoProyecto: tipoProyectoSelect?.value,
      docente: document.querySelector('#docente-field input')?.value
    };
  }

  btnListar.addEventListener('click', async () => {
    try {
      const response = await fetch(baseUrl);
      const data = await response.json();
      showResponse(response.status, data);
    } catch (error) {
      showResponse(500, { error: error.message });
    }
  });

  btnCrear.addEventListener('click', async () => {
    const { nombre, documento, tipoProyecto, docente } = getFormData();
    const usuario = { nombre, documento, tipoProyecto, docente };

    try {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
      });
      const data = await response.json();
      showResponse(response.status, data);
    } catch (error) {
      showResponse(500, { error: error.message });
    }
  });

  btnActualizar.addEventListener('click', async () => {
    const { id, nombre, documento, tipoProyecto, docente } = getFormData();

    if (!id) {
      showResponse(400, { error: 'Se requiere un ID para actualizar' });
      return;
    }

    const usuario = { nombre, documento, tipoProyecto, docente };

    try {
      const response = await fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
      });
      const data = await response.json();
      showResponse(response.status, data);
    } catch (error) {
      showResponse(500, { error: error.message });
    }
  });

  btnEliminar.addEventListener('click', async () => {
    const { id } = getFormData();

    if (!id) {
      showResponse(400, { error: 'Se requiere un ID para eliminar' });
      return;
    }

    if (!confirm('¿Está seguro de eliminar este usuario?')) return;

    try {
      const response = await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE'
      });
      const data = await response.json();
      showResponse(response.status, data);
    } catch (error) {
      showResponse(500, { error: error.message });
    }
  });
});
