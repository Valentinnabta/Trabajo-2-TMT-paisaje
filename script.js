console.log("funciona");

const varTitulo = document.getElementById("titulo");
const varTexto = document.getElementById("texto");

const textos = [
    "Una niña llamada Rapunzel que fue robada cuando era bebé y criada en una torre alta por una mujer que fingía ser su madre.",
    "La mujer la mantenía encerrada y le ocultaba que, en realidad, era una princesa perdida.",
    "Rapunzel soñaba con salir algún día para ver las luces brillantes que aparecían en el cielo cada año el día de su cumpleaños.",
    "Un día, un joven ladrón llamado Flynn Rider llegó por accidente a la torre y ella hizo un trato con él: la llevaría a ver esas “estrellas mágicas”.",
    "Juntos escaparon, vivieron muchas aventuras y poco a poco se enamoraron.",
    "Cuando la mujer intentó separarlos para no perder el poder que tenía sobre Rapunzel, todo salió a la luz.",
    "Al final, Rapunzel descubrió su verdadero origen, regresó con su familia real y pudo vivir libre junto a quien la ayudó a cumplir su sueño."
];

let textoInicial = true; 
let iTxt = 0;

varTitulo.addEventListener("click", () => {
    if (textoInicial === true) {
        varTitulo.innerText = "que estoy tratando de editar";
    } else {
        varTitulo.innerText = "Mi no paisaje";
    }
    textoInicial = !textoInicial;
});

varTexto.addEventListener("click", () => {
    if (iTxt < textos.length) {
        varTexto.innerText = textos[iTxt];
        iTxt += 1;
    } else {
        varTexto.innerText = "Fin. (o vuelve a hacer click para empezar de nuevo) :) ";
        iTxt = 0;
    }
});
