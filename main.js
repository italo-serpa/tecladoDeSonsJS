function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    //o null pode ser retirado o JS entende mesmo assim
    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;//template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        console.log(evento);//olhar o console gera propriedades ao apertar botao

        if(evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');//adiciona uma classe no HMTL com pressionar da tecla 
        } 
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');//remove a classe criada
    }
}
