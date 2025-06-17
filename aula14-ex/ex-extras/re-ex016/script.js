function contar (){
    var start = document.getElementById('ini')
    var end = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var startC = Number (start.value)
    var endC = Number(end.value)
    var passoC = Number(passo.value)
    var res = document.getElementById('res')
    res.style.padding = '10px'
    res.style.paddingLeft = '0px'
    res.innerHTML = ''
    if (start.value.length == 0 || end.value.length == 0){
        res.innerHTML = 'Digite um valor.'
    }else if(passoC == 0){
    window.alert('Valor de passo não digitado, será considerado PASSO 1.')
    passoC = 1
    if(startC <= endC){
        while (startC <= endC){
        res.innerHTML += `${startC} \u{1F449}`
        startC = startC + passoC
        }
    }else if(startC >= endC){
        while (startC >= endC){
        res.innerHTML += `${startC} \u{1F449}`
        startC = startC - passoC
    }
    }
}else{
    if(startC <= endC){
        while (startC <= endC){
        res.innerHTML += `${startC} \u{1F449}`
        startC = startC + passoC
        }
    }else if(startC >= endC){
        while (startC >= endC){
        res.innerHTML += `${startC} \u{1F449}`
        startC = startC - passoC
    }
}
 
}
 res.innerHTML +=` \u{1F3C1}`
}