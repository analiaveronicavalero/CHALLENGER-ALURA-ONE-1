
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let Muñeco = document.getElementById("Muñeco");
    let textoCopiar = document.getElementById("textoCopiar");


function encriptar() {
     let texto = document.getElementById("texto").value;
     let textoCifrado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
   if (texto.length != 0){
       console.log(texto.length);
       document.getElementById("texto").value = textoCifrado;
       tituloMensaje.textContent = " Texto encriptado con exito"; 
       //parrafo.textContent = "";
       Muñeco.src = "./img/personas festejando.png";

   }else{

       Muñeco.src = "./img/Muñeco.png";
       tituloMensaje.textContent  = "Ningun mensaje fue encontrado";
       //parrafo.textContent="Ingresa el texto que quieras encriptar o desencriptar";
       alert ( "Debes ingresar algun texto");
    }
    }


function desencriptar(){
    let texto = document.getElementById("texto").value;
    let textoCifrado = texto
                             .replace(/enter/g, "e")
                             .replace(/imes/g, "i")
                             .replace(/ai/g, "a")
                             .replace(/ober/g, "o")
                             .replace(/ufat/g, "u");

    if (texto.length != 0){
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto desencriptado con exito";
    //parrafo.textContent = "";
    Muñeco.src = "./img/asombro.png";                        
                            
}else{

    Muñeco.src = "./img/Muñeco.png";
    tituloMensaje.textContent =  "Ningun mensaje fue encontrado";
    //parrafo.textContent ="Ingresa el texto que quieras encriptar o desencriptar";

    alert("Debes ingresar algun texto");
} 
}

function copiarTexto() {
  //let texto = document.querySelector();
  console.log(texto);
      if (texto.value!== "" ) {
       texto.select(); 
      document.execCommand("copy");
      navigator.clipboard.writeText(texto.value);
      alert("Texto copiado al portapapeles"); 

    } else {

      alert("No se encontró el texto a copiar");

      
    }
  }

   

//Las "llaves" de encriptación que utilizaremos son las siguientes:
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

