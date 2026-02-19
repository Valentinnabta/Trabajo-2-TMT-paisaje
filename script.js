console.log("funciona");
const varTitulo = document.getElementById("titulo");
const varTexto = document.getElementById("texto");

const textos = ["uno", "dos", "tres", "cuatro", "cinco"];
console.log(textos[0]);

// variable de tipo booleano: dos valores posibles, true o false
let textoInicial = true; 
let iTxt = 0;

console.log(titulo);

varTitulo.addEventListener("click",()=>{
    if(textoInicial === true){
        varTitulo.innerText = "que estoy editando";
        
    } else {
        varTitulo. innerText = "mi no paisaje"
        
    }
    textoInicial = !textoInicial;
});

varTexto.addEventListener("click",()=>{
    varTexto.innerText = textos [iTxt];
    iTxt += 1; //iTxt = iTxt + 1;
})