let tiempo=document.getElementById('ingresoTiempo')
let inicio=document.getElementById('botonInicio')
let retorno=document.getElementById('retornoTemp')

function cuentaRegresiva(cuenta){
    if(cuenta==0){
        retorno.innerHTML='Terminado :D'
        tiempo.value=''
        return cuenta
    }else{
        console.log(cuenta)
        retorno.innerText=`${cuenta}`
        return setTimeout(cuentaRegresiva,1000,(cuenta-1))
    }
}