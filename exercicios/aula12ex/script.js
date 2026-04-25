alert("Olá, Bem-vindo ao meu primeiro exercicio de HTML5,CSS3 e JavaScript");

function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() 

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // BOM DIA!!
        img.src = 'img_small_1.png'
        document.body.style.background = '#e2cd9f'
        img.style.border = '5px solid #f4a261' // cor da manhã
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!!
        img.src = 'img_small_2.png'
        document.body.style.background = '#b9846f'
        img.style.border = '5px solid #e76f51' // cor da tarde
    } else {
        // BOA NOITE!!
        img.src = 'noite_small.png'
        document.body.style.background = '#515154'
        img.style.border = '5px solid #264653' // cor da noite
    }
}