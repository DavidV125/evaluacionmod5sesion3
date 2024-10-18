const asignarEventos = () => {
    let botonEnviar = document.getElementById('btnEnviar');
    botonEnviar.addEventListener('click', enviarCorreo);
};

const enviarCorreo = () => {
    const para = document.getElementById('para').value;
    const de = document.getElementById('de').value;
    const titulo = document.getElementById('titulo').value;
    const mensaje = document.getElementById('mensaje').value;
    const ccInput = document.getElementById('cc').value;

    // seprar loscorreos ingredos en cc
    const listaCC = ccInput.split(',');

    for (let i = 0; i < listaCC.length; i++) { // comienza en 0, mientras i sea menor que el largo de lista cc, luego ++ hace qye avance el bucle
        listaCC[i] = listaCC[i].trim(); 
    }

//parametro con rest
    enviar(para, de, titulo, mensaje, ...listaCC);
};


const enviar = (para, de, titulo, mensaje, ...cc) => {
    console.log(`Para: ${para}`);
    console.log(`De: ${de}`);
    console.log(`Título: ${titulo}`);
    console.log(`Mensaje: ${mensaje}`);

    if (cc.length > 0 && cc[0] !== "") { // si es mas que cero y no esta vacio
        console.log("CC:");
        for (const email of cc) { //correos extraidos desde ccs
            console.log(email);
        }
    } else {
        console.log("No has ingresado emails en CC."); // ptherwise, sale este ensaje
    }
};
