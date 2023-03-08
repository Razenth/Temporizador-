let tiempo=document.getElementById('ingresoTiempo')
let inicio=document.getElementById('botonInicio')
let retorno=document.getElementById('retornoTemp')

cuentaRegresiva(tiempo.value)


function cuentaRegresiva(cuenta){
    if(cuenta==0){
        return cuenta
    }else{
        retorno.innerHTML=cuenta
        return setTimeout(cuentaRegresiva,1000,(cuenta-1))
    }

}

function cuentaRegresiva(cuenta){
    if(cuenta==0){
        return cuenta
    }else{
        console.log(cuenta)
        return cuentaRegresiva(cuenta-1)
        
    }
}
