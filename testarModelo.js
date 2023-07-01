function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let agora = new Date()
    let hora = agora.getHours()
    let minuto = agora.getMinutes()
    let segundo = agora.getSeconds()
    let horaFormatada = hora.toString().padStart(2, "0")
    let minutoFormatado = minuto.toString().padStart(2, "0")
    let segundoFormatado = segundo.toString().padStart(2, "0")
    document.querySelector('span.hora').innerHTML = horaFormatada + 'H'
    document.querySelector('span.minuto').innerHTML = minutoFormatado + 'M'
    document.querySelector('span.segundo').innerHTML = segundoFormatado + 'S'
    var elementos = document.querySelectorAll('.tempo'); /* Tempo Estilo */
    let hMsg = document.querySelector('p.diaMensagem')
    let minhaSection = document.getElementById('sectionPrincipal')

    // BOA MADRUGADA
        img.src = 'imagens/meianoite2.jpg'
        document.body.style.backgroundImage = "url('imagens/meianoite2.jpg')"
        minhaSection.style.backgroundImage = "linear-gradient(to bottom, #0d245c, #290d07)"
        minhaSection.style.color = " #bbdddc"
        hMsg.innerHTML = 'Boa madrugada!'

        /* Cor do texto TEMPO - MADRUGADA*/
        for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.color = '#32a8a8'; 
        }
}