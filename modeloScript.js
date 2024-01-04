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
    // msg.innerHTML = `Agora são <span class="horaEstilo">${horaFormatada}H</span>:<span class="horaEstilo">${minutoFormatado}M</span>:<span class="horaEstilo">${segundoFormatado}S</span>` /* Sistema Antigo */
    

    if (hora >= 6 && hora < 12) {
        // BOM DIA
        img.src = 'imagens/manha1.jpg'
        document.body.style.backgroundImage = "url('imagens/manha1.jpg')"
        minhaSection.style.backgroundImage = "linear-gradient(to bottom, #a9873e, #558926"
        minhaSection.style.color = "#ffc629"
        hMsg.innerHTML = `Bom dia`

        /* Cor do texto TEMPO - MANHÃ*/
        for (var i = 0; i < elementos.length; i++) {
            elementos[i].style.color = '#ffa218'; 
        } 
    } 
    else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = 'imagens/tarde2.jpg'
        document.body.style.backgroundImage = "url('imagens/tarde2.jpg')"
        minhaSection.style.backgroundImage = "linear-gradient(to bottom, #2d4b0c, #a8ba58)"
        minhaSection.style.color = "#fff3b2"
        hMsg.innerHTML = `Boa tarde`

        /* Cor do texto TEMPO - TARDE*/
        for (var i = 0; i < elementos.length; i++) {
            elementos[i].style.color = '#fdc324'; 
        }
    } 
    else if (hora >= 18 && hora <= 23) {
        // BOA NOITE
        img.src = 'imagens/noite1.jpg'
        document.body.style.backgroundImage = "url('imagens/noite1.jpg')"
        minhaSection.style.backgroundImage = "linear-gradient(to bottom, #2f67a7, #1f170f)"
        hMsg.innerHTML = `Boa noite`
        minhaSection.style.color = "#b4d2ff"

        /* Cor do texto TEMPO - NOITE*/
        for (var i = 0; i < elementos.length; i++) {
            elementos[i].style.color = '#1bb7ff'; 
        }
    }
    else {
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

        // let hEstilo = document.querySelector('span')
        // hEstilo.classList.add('horaEstilo')
    }
    setTimeout('carregar()',1000);
}