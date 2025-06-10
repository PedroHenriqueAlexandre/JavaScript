var agora = new Date()
var horas = agora.getHours() 

console.log (`Agora são exatamente ${horas} horas!`)

if (horas > 0 && horas < 6){
    console.log('Estamos de madrugada...')
} else if (horas >= 6 && horas < 12 ){
    console.log ('Bom dia! já é dia!')
} else if (horas >= 12 && horas < 18) {
    console.log ('Já chegou a tarde!')
} else if (horas < 24){
    console.log ('Chegou a noite...!')
}else {
    console.log('O horário digitado não existe.')
}