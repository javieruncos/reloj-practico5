
function reloj(){
    // codigo para visualizar la hora
    let hora = document.getElementById("hora");
    let hora2 = new Date();
    let hora3 = hora2.getHours()
    hora.innerHTML= hora3;
    // codigo para visualizar los minutos
    let parrafo = document.getElementById("minutos");
    let numeros = new Date();
    let minutos = numeros.getMinutes();
    parrafo.innerHTML = minutos;
    // codigo para visualizar los segundos
    let segundos = document.getElementById("segundos");
    let segundos2 = new Date();
    let segundos3 = segundos2.getSeconds();
    segundos.innerHTML=segundos3; 
    // codigo para visualizar la fecha 
    let fecha = document.getElementById("fecha");
    let fecha2 = new Date();
    let fecha3 = fecha2.getDate();
    fecha.innerHTML =  fecha3 + "/";
    // dias de la semana
    let diaDesemana = document.getElementById("diaSemana");
    let diaDesemana2 = new Date();
    let diaSemana3 = diaDesemana2.getDay();
    // if(diaSemana3 === 6){
    //    diaDesemana.innerHTML= "viernes";
    // }
    switch(true){
        case diaSemana3 === 1:
            diaDesemana.innerHTML= "lunes";
            break
        case diaSemana3 === 2:
            diaDesemana.innerHTML= "martes";
            break
        case diaSemana3 === 3:
            diaDesemana.innerHTML= "miercoles";
            break
        case diaSemana3 === 4:
            diaDesemana.innerHTML= "jueves";
            break
        case diaSemana3 === 5:
            diaDesemana.innerHTML= "viernes";
            break
        case diaSemana3 === 6:
            diaDesemana.innerHTML= "sabado";
            break
        case diaSemana3 === 7:
            diaDesemana.innerHTML= "domingo";
            break

    }
    // diaDesemana.innerHTML= diaSemana3;

    


     
    console.log(diaSemana3)
    
}


reloj()
setInterval(reloj,1000)