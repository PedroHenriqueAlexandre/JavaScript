txt = document.getElementById('texto')
img = document.getElementById('imagem')
var data = new Date ()
var horas = data.getHours()
txt.innerHTML = `Neste momento, são ${horas} horas.`

function carregar (){
        if(horas < 12){
            img.src = 'bomdia.png'
            document.body.style.background = '#e2cd9f'
        } else if (horas <= 18){
            img.src = 'boatarde.png'
            document.body.style.background = '#b9846f'
        }else if (horas <= 23){
            img.src = 'noite.png'
        }
}