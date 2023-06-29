
function carregarFoto() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    var minuto = agora.getMinutes()
    var segundo = agora.getSeconds()
    msg.innerHTML = `Agora é ${hora}H:${minuto}M:${segundo}S`
    if (hora > 0 && hora < 12) {
        // BOM DIA
        img.src = 'imagens/manha1.jpg'
        document.body.style.backgroundImage = "url('imagens/manha1.jpg')"
        msg.innerHTML += `<p>Bom dia</p>`
    } 
    else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = 'imagens/tarde1.jpg'
        document.body.style.backgroundImage = "url('imagens/tarde1.jpg')"
        msg.innerHTML += `<p>Boa tarde</p>`
} 
    else {
        // BOA NOITE
        img.src = 'imagens/noite1.jpg'
        document.body.style.backgroundImage = "url('imagens/noite1.jpg')"
        msg.innerHTML += `<p>Boa noite</p>`
    } 
}
