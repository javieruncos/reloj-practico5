
function reloj(){
    // codigo para visualizar la hora
    let hora = document.getElementById("hora");
    let hora2 = new Date();
    let hora3 = hora2.getHours()
    hora.innerHTML= hora3;
    if(hora3<10){
        hora.innerHTML= "0" + hora3;
    }
    // codigo para visualizar los minutos
    let parrafo = document.getElementById("minutos");
    let numeros = new Date();
    let minutos = numeros.getMinutes();
    parrafo.innerHTML = minutos;
    if(minutos<10){
        parrafo.innerHTML = "0" + minutos;
    }
    // codigo para visualizar los segundos
    let segundos = document.getElementById("segundos");
    let segundos2 = new Date();
    let segundos3 = segundos2.getSeconds();
    segundos.innerHTML=segundos3; 
    if(segundos3<10){
        segundos.innerHTML= "0"+ segundos3; 
    }
    // codigo para visualizar la fecha 
    let fecha = document.getElementById("fecha");
    let fecha2 = new Date();
    let fecha3 = fecha2.getDate();
    fecha.innerHTML =  fecha3 + "  ";
    // dias de la semana
    let diaDesemana = document.getElementById("diaSemana");
    let diaDesemana2 = new Date();
    let diaSemana3 = diaDesemana2.getDay();
    switch(true){
        case diaSemana3 === 1:
            diaDesemana.innerHTML= "lunes ";
            break
        case diaSemana3 === 2:
            diaDesemana.innerHTML= "martes ";
            break
        case diaSemana3 === 3:
            diaDesemana.innerHTML= "miercoles ";
            break
        case diaSemana3 === 4:
            diaDesemana.innerHTML= "jueves ";
            break
        case diaSemana3 === 5:
            diaDesemana.innerHTML= "viernes ";
            break
        case diaSemana3 === 6:
            diaDesemana.innerHTML= "sabado ";
            break
        case diaSemana3 === 0:
            diaDesemana.innerHTML= "domingo ";
            break

    }

    // codigo para mostrar los meses
     let meses = document.getElementById("meses");
     let meses2 = new Date();
     let meses3 = meses2.getMonth();
    //  meses.innerHTML = meses3;
    switch(true){
        case meses3 === 0 :
            meses.innerHTML = "Enero";
            break
        case meses3 === 1 :
            meses.innerHTML = "Febrero";
            break
        case meses3 === 2 :
            meses.innerHTML = "Marzo";
            break
        case meses3 === 3 :
            meses.innerHTML = "Abril ";
            break
        case meses3 === 4 :
            meses.innerHTML = "Mayo ";
            break
        case meses3 === 5 :
            meses.innerHTML = "Junio ";
            break
        case meses3 === 6 :
            meses.innerHTML = "Julio ";
            break
        case meses3 === 7 :
            meses.innerHTML = "Agosto ";
            break
        case meses3 === 8 :
            meses.innerHTML = "Septiembre ";
            break 
        case meses3 === 9 :
            meses.innerHTML = "Octubre ";
            break
        case meses3 === 10 :
            meses.innerHTML = "Noviembre ";
            break
        case meses3 === 11 :
            meses.innerHTML = "Diciembre ";
            break
    }

    // mostrar el año
    let anios = document.getElementById("años");
    let anios2 = new Date();
    let anios3 = anios2.getFullYear()
    anios.innerHTML= anios3 ;

    


    
    
}


reloj()
setInterval(reloj,1000)


/* decidi no mostrar el reloj en dispositivos celulares por cuestion de estetica*/
