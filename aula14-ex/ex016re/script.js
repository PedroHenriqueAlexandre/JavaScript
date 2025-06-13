function contar (){
    var start = document.getElementById('ini')
    var end = document.getElementById('fim')
    var pass = document.getElementById('passo')
    var res = document.getElementById('res')
    var startC = Number(start.value)
    var endC = Number(end.value)
    passC = Number(pass.value)
    if (start.value.length == 0 || end.value.length == 0){
        res.innerHTML = 'Impossivel contar!'
    }else if (pass.value.length == 0){
        window.alert('Valor inválido! Considerando PASSO 1.')
        passC = 1
        while (startC < endC){
            res.innerHTML += `${startC}...`
            startC = startC + passC
        }
        while (startC >= endC){
            res.innerHTML += `${startC}...`
            startC = startC - passC
        }
    }else{
       while (startC <= endC){
            res.innerHTML += `${startC}...`
            startC = startC + passC
        }
        while (startC >= endC){
            res.innerHTML += `${startC}...`
            startC = startC - passC
        } 
    }
}