function gerar(){
    var NT = document.getElementById('n')
    var tab = document.getElementById('seltab')
    var NTC = Number(NT.value)
    var c = 1
    var res = document.getElementById('res')
    if (NTC !== 0){
        tab.innerHTML = ''
    while (c <= 10){
        var item = document.createElement('option')
        item.text = `${NTC} x ${c} = ${NTC*c}`
        item.value = `tab ${c}`
        tab.appendChild(item)
        c = c + 1
    }
}else {
    res.innerHTML = 'Por favor digite um valor.'
}
}