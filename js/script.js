const textoArea1 = document.getElementById("textoArea1");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const mensajeNo = document.getElementById("mensajeNo");
const botonCopiar = document.getElementById("botonCopiar");
const imagen = document.getElementById("imagen");
const mensajeDeseado = document.getElementById("mensajeDeseado");
const area2 = document.getElementById("area2");


let reemplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
]

botonEncriptar.addEventListener("click", ()=>{
    const text = textoArea1.value.toLowerCase();
    if(text!=""){
        function encriptar(nuevoTexto){
            for(let i=0; i<reemplazar.length; i++){
                if(nuevoTexto.includes(reemplazar[i][0])){
                    nuevoTexto = nuevoTexto.replaceAll(reemplazar[i][0], reemplazar[i][1]);
                }
            }
            return nuevoTexto;
        }
    }else{
        alert("Por favor, ingresa un texto")
    }  
//console.log(encriptar(text));

    const textEncriptar = encriptar(text)
    mensajeNo.innerHTML = textEncriptar
    mensajeNo.classList.add("ajustar");
    imagen.style.display = "none";
    mensajeDeseado.style.display = "none";
    botonCopiar.style.display = "block";
    area2.classList.add("ajustar");
    mensajeDeseado.classList.add("ajustar");
    textoArea1.value=""
    
})

botonDesencriptar.addEventListener("click",()=>{
    const text2 = textoArea1.value.toLowerCase();
    function desencriptar(nuevoTexto){
        for(let i = 0; i < reemplazar.length; i++){
            if(nuevoTexto.includes(reemplazar[i][1])){
                nuevoTexto = nuevoTexto.replaceAll(reemplazar[i][1], reemplazar[i][0]);
            }
        }
        return nuevoTexto
    }
    const textoDesencriptado = desencriptar(text2);
    mensajeNo.innerHTML= textoDesencriptado;
    imagen.style.display = "none";
    mensajeDeseado.style.display = "none";
    botonCopiar.style.display = "block";
    area2.classList.add("ajustar");
    mensajeDeseado.classList.add("ajustar");
    
} )

botonCopiar.addEventListener("click",()=>{

    let textCopy = mensajeNo;
    textCopy.select();
    document.execCommand('copy');
    textoArea1.focus();
    imagen.style.display ="block";
   // mensajeDeseado.style.display = "block";
    botonCopiar.style.display = "none";
    area2.classList.remove("ajustar");
    mensajeDeseado.classList.remove("ajustar");
    textoArea1.value="";
    mensajeNo.innerHTML="";

})