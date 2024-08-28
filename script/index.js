// Función para encriptar el texto
function encriptarTexto(texto) {
    const textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncriptado;
}

// Función para desencriptar el texto
function desencriptarTexto(textoEncriptado) {
    const textoOriginal = textoEncriptado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoOriginal;
}

// Manejadores de eventos para los botones de encriptar y desencriptar
document.querySelector('.btn-en').addEventListener('click', function() {
    const inputTexto = document.querySelector('#text').value;
    const resultadoTexto = encriptarTexto(inputTexto);
    mostrarResultado(resultadoTexto);
});

document.querySelector('.btn-des').addEventListener('click', function() {
    const inputTexto = document.querySelector('#text').value;
    const resultadoTexto = desencriptarTexto(inputTexto);
    mostrarResultado(resultadoTexto);
});

// Función para mostrar el resultado en la sección derecha
function mostrarResultado(texto) {
    const seccionDerecha = document.querySelector('.right');
    seccionDerecha.innerHTML = `
        <p class="encrypted-text">${texto}</p>
        <button class="btn-copy">Copiar</button>
    `;
    // Añadir funcionalidad al botón de copiar
    document.querySelector('.btn-copy').addEventListener('click', function() {
        navigator.clipboard.writeText(texto).then(() => {
            alert('Texto copiado al portapapeles');
        });
    });
}

// Función para validar el texto ingresado
function validarTexto(texto) {
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

// Manejador de eventos para el campo de texto
document.querySelector('#text').addEventListener('input', function() {
    const texto = this.value;
    if (!validarTexto(texto)) {
        alert('Solo se permiten letras minúsculas sin acentos.');
        this.value = texto.slice(0, -1);  // Remover el último caracter inválido
    }
});
