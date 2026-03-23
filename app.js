function comprarTicket() {
    const nombre = document.getElementById("nombre").value;

    if (nombre === "") {
        alert("Ingresa tu nombre");
        return;
    }

    const codigo = "TICKET-" + Math.floor(Math.random() * 10000);

    localStorage.setItem(codigo, nombre);

    alert(`Ticket comprado\nNombre: ${nombre}\nCódigo: ${codigo}`);
}

function validarTicket() {
    const codigo = document.getElementById("codigoTicket").value;

    const existe = localStorage.getItem(codigo);

    if (existe) {
        alert("✅ Ticket válido de: " + existe);
    } else {
        alert("❌ Ticket inválido");
    }
}

window.comprarTicket = comprarTicket;
window.validarTicket = validarTicket;
