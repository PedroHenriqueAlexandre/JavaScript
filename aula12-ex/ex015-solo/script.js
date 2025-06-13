function verificar (){
var AnoN = document.getElementById('anoN')
var data = new Date()
var anoA = data.getFullYear()
var anoNC = Number(AnoN.value)
var idade = anoA - anoNC
var result = document.getElementById('res')
var sexo = document.getElementsByName('txtsexo')
var genero = ''
var img = document.getElementById('imagem')
if (Number(AnoN.value) > anoA || AnoN.value.length == 0 || AnoN.value < 1900){
    window.alert ('Ano de Nascimento inválido! Coloque-o novamente.')
}else{
    if (sexo[0].checked){
        genero = 'Homem'
        
    } else if (sexo[1].checked){
        genero = 'Mulher'
    }
    result.innerHTML = `Detectamos ${genero} com ${idade} anos`
    if(sexo[0].checked){
        if (idade < 13){
        img.src = 'foto-bebe-m.png'
        }else if ( idade < 20){
        img.src = 'foto-jovem-m.png'
        }else if (idade <= 55){
        img.src = 'foto-adulto-m.png'
        }else if (idade > 55){
        img.src = 'foto-idoso-m.png'
    }
    }else if(sexo[1].checked){
     if ( idade < 13){
        img.src = 'foto-bebe-f.png'
        }else if (idade < 20){
        img.src = 'foto-jovem-f.png'
        } else if (idade <= 55){
        img.src = 'foto-adulto-f.png'
        }else if (idade > 55){
        img.src = 'foto-idoso-f.png'
    }
        }
    }
}
