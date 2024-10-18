const asignarEventos = () => {
    let botonEnviar = document.getElementById('btnEnviar');
    botonEnviar.addEventListener('click', enviarCorreo);
};

const enviarCorreo = () => {
    const para = document.getElementById('txtPara').value;
    const de = document.getElementById('txtDe').value;
    const titulo = document.getElementById('txtTitulo').value;
    const mensaje = document.getElementById('txtMensaje').value;
    const ccInput = document.getElementById('txtCc').value;

    // seprar loscorreos ingredos en cc
    const listaCCs = ccInput.split(',');

    for (let i = 0; i < listaCCs.length; i++) { // comienza en 0, mientras i sea menor que el largo de lista cc, luego ++ hace qye avance el bucle
        listaCCs[i] = listaCCs[i].trim(); // sacar espacio en blanco
    }

//parametro con rest
    enviar(para, de, titulo, mensaje, ...listaCCs);
};


const enviar = (para, de, titulo, mensaje, ...ccs) => {
    console.log(`Para: ${para}`);
    console.log(`De: ${de}`);
    console.log(`Título: ${titulo}`);
    console.log(`Mensaje: ${mensaje}`);

    if (ccs.length > 0 && ccs[0] !== "") { // si es mas que cero y no esta vacio
        console.log("CC:");
        for (const unCc of ccs) { //correos extraidos desde ccs
            console.log(unCc);
        }
    } else {
        console.log("No has ingresado emails en CC."); // ptherwise, sale este ensaje
    }
};
