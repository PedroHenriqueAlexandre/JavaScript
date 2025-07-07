function fatorial(n){
    var s = n
    for (var c = n-1; c >= 1; c--){
        var s = s * c
    }
    return s
}

res = fatorial(5)
console.log (`O fatorial de 5 é ${res}`)