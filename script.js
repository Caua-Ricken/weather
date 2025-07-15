const key = '6aa72dd5ee0fcce0d2eee01e663b4f1a'

function dadosTela(dados){
    document.querySelector('.cidade').innerHTML = 'Tempo em ' + dados.name
    document.querySelector('.temp').innerHTML = Math.floor(dados.main.temp) + ' °C'
    document.querySelector('.texto-previsao').innerHTML = dados.weather[0].description
    document.querySelector('.umidade').innerHTML = 'Umidade: ' + dados.main.humidity + '%'
    
    
    const icone = dados.weather[0].main.toLowerCase();

    let caminhoImagem = './icones/nublado.png';

    switch (icone) {
        case 'clear':
            caminhoImagem = './icones/sol.png';
            break;
        case 'clouds':
            caminhoImagem = './icones/nublado.png';
            break;
        case 'rain':
            caminhoImagem = './icones/chuva.png';
            break;
        case 'mist':
        case 'fog':
            caminhoImagem = './icones/neve.png';
            break;
        case 'wind':
        case 'breeze':
            caminhoImagem = './icones/vento.png';
            break;
    }

    document.querySelector('.img-previsao').src = caminhoImagem;
}



async function buscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    dadosTela(dados)
}

function clickBtn(){
    const cidade = document.querySelector('.input').value

    buscarCidade(cidade)
}


