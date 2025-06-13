function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0){
        res.innerHTML = 'Impossivel contar.'
    }else {
        var i = Number (ini.value)
        var f = Number (fim.value)
        var p = Number (passo.value)
        for (var c = i ; c <= f ; c += p){
            res.innerHTML += `${c}`
        }
    
}
}