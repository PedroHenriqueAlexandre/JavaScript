 function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel contar.'
    }else {
        let i = Number (ini.value)
        let f = Number (fim.value)
        let p = Number (passo.value)
        var ultimo = 0
        if (i <= f){
            for (let c = i ; c <= f ; c += p){
            res.innerHTML +=  `${c} \u{1F449}`
            ultimo = c
        }
            }else  if (i >= f){
                for (let c = i ; c >= f ; c -= p){
                res.innerHTML +=  `${c} \u{1F449}`
                ultimo = c
        }    
    }if (ultimo !== 1){
            ultimo = ultimo - ultimo
            ultimo = 1
            res.innerHTML += ultimo
        }else {
        
        }
}
}