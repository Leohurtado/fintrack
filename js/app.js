// =========================
// FINTRACK
// REGISTRAR GASTOS
// =========================


// BOTÓN PARA ABRIR MODAL

const botonGasto = document.querySelector(".btn-primary");


// MODAL

const modal = document.getElementById("expenseModal");


// BOTÓN CERRAR

const closeModal = document.getElementById("closeModal");


// FORMULARIO

const expenseForm = document.getElementById("expenseForm");


// ABRIR MODAL

botonGasto.addEventListener("click", function () {

    modal.classList.add("show");

});


// CERRAR MODAL

closeModal.addEventListener("click", function () {

    modal.classList.remove("show");

});


// CERRAR SI HACEMOS CLICK FUERA

modal.addEventListener("click", function (event) {

    if (event.target === modal) {

        modal.classList.remove("show");

    }

});


// =========================
// GUARDAR GASTO
// =========================

expenseForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // OBTENER DATOS

    const amount = Number(
        document.getElementById("amount").value
    );


    const category =
        document.getElementById("category").value;


    const description =
        document.getElementById("description").value;


    // VALIDAR MONTO

    if (amount <= 0) {

        alert("Ingresa un monto válido.");

        return;

    }


    // MOSTRAR EN CONSOLA

    console.log("Nuevo gasto");

    console.log("Monto:", amount);

    console.log("Categoría:", category);

    console.log("Descripción:", description);


    // CERRAR MODAL

    modal.classList.remove("show");


    // LIMPIAR FORMULARIO

    expenseForm.reset();


    // MENSAJE

    alert("Gasto registrado correctamente 💸");

});
