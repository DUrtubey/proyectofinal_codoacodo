const valorTicket = 200;

let dctoEstudiante = 80;
let dctoTrainee = 50;
let dctoJunior = 15;


let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email")
let cantTickets = document.getElementById("catTickets")
let categoria = document.getElementById("categoria")
let btnResumen = document.getElementById("btnResumen");

const totalApagar = () => {

    let totalValorTicket = (cantTickets) * valorTicket;

    switch (categoria.value) {
        case "0":
            totalValorTicket = totalValorTicket;
            break;
        case "1":
            totalValorTicket = valorTotalTicket - (dctoEstudiante / 100 * valorTotalTicket);
            break;
        case "2":
            totalValorTicket = valorTotalTicket - (dctoTrainee / 100 * valorTotalTicket);
            break;
        case "3":
            totalValorTicket = valorTotalTicket - (dctoJunior / 100 * valorTotalTicket);
            break;
    }
    totalPago.innerHTML = totalValorTicket

}

btnResumen.addEventListener("click", totalApagar);