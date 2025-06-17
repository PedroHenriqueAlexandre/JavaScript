function clicar (){
    var start = document.getElementById('inicio')
    var end = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    var startC = Number(start.value)
    var endC = Number(end.value)
    var passoC = Number(passo.value)
    res.style.padding = '10px'
    if (startC == 0 || endC == 0){
        res.innerHTML = `Impossivel contar!`
    }else{
        res.innerHTML = 'Contando: <br>'
    }
    
     if (passoC == 0){
        window.alert ('O passo 0 é impossivel, o valor considerado será de 1.')
        passoC = 1
        
        if (startC >= endC){
            while (startC >= endC){
            res.innerText += (`${startC}...`) 
            startC = startC - passoC
        } 
    }else if (startC <= endC){
            while (startC <= endC){
            res.innerText += (`${startC}...`) 
            startC = startC + passoC
        } 
    }
    }else{
        
        while (startC <= endC){
        res.innerText += (`${startC}...`) 
        startC = startC + passoC
    }
    while (startC >= endC){
        res.innerText += (`${startC}...`) 
        startC = startC - passoC
    }
    }
}