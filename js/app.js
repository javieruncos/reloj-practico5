
function reloj(){
    let parrafo = document.getElementById("parrafo");
    let numeros = new Date();
    let minutos = numeros.getMinutes();
    parrafo.innerHTML = minutos

     
    
}


reloj()
setInterval(reloj,1000)