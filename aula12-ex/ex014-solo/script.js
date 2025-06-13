function carregar (){
            var txt = document.getElementById('texto')
            var img = document.getElementById('imagem')
            var data = new Date()
            var horas = data.getHours()
            txt.innerHTML = `São exatas ${horas} horas!`
            if( horas < 12){
                img.src = 'bomdia.png'
                document.body.style.background = '#e2cd9f'
            }else if (horas < 19){
                img.src = 'boatarde.png'
                document.body.style.background = '#b9846f'
            }else if (horas <= 23){
                img.src = 'noite.png'
                document.body.style.background = 'rgb(70, 87, 243)'
            }else {
                img.src = ''
                txt.innerHTML = '[ERRO] Horário não encontrado.'
            }
}