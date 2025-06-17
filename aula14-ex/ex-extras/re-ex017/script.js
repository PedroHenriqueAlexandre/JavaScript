function tabuada(){
    var n = document.getElementById('number')
    var nC = Number(n.value)
    var res = document.getElementById('res')
    var c = 1
    res.innerHTML = ''
    if (n.value.length == 0){
        res.innerHTML = 'Digite um valor.'
    }else{
        
        while (c <= 10){
            var s = nC * c
            res.innerHTML += `${nC} x ${c} = ${s} <br>`
            c = c + 1
        }
    }
}