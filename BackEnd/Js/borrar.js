function eliminarRecurso() {
    // Obtener el valor del ID del recurso a eliminar
    const resourceId = document.getElementById("resourceId").value;

    // URL de la API y el ID del recurso a eliminar
    const apiUrl = `"https://localhost:44353/api/Productos"${resourceId}`;

    // Realizar una solicitud DELETE a la API
    fetch(apiUrl, {
        method: "DELETE"
    })
    .then(response => {
        if (response.status === 204) {
            // Recurso eliminado con éxito (sin contenido)
            document.getElementById("resultado").innerHTML = "Recurso eliminado con éxito.";
        } else {
            // Error al eliminar el recurso
            document.getElementById("resultado").innerHTML = "Error al eliminar el recurso.";
        }
    })
    .then(function (responseData) {
        // Manejar la respuesta de la API aquí
        console.log(responseData);
      })
      .catch(function (error) {
        // Manejar errores aquí
        console.error(error);
    });
}
