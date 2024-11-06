const button = document.getElementById('button');
const resposta = document.getElementById('resposta');
const image = document.querySelector('img');
const numeroAleatorio = Math.floor(Math.random() * 11);
const tempo = document.getElementById('tempo');
let timer = 0;

setInterval(() => {
    tempo.innerText = timer;
    timer++;
}, 1000);


const verifica = (() => {


    resposta.innerText = 'processando...';
    resposta.style.color = 'palegreen'
    image.src = './imagem/BvMu.gif';

    const numerodigitado = document.querySelector('input').value;

    setTimeout(() => {
        if (Number(numerodigitado) === numeroAleatorio){

            resposta.innerText = 'acertu o numero !!!';
            resposta.style.color = 'green';
            image.src = './imagem/e306320f.jpg';

            alert(`seu tempo foi de: ${timer} segundos`);

            setTimeout(() => {
                window.location.reload();
            }, 5000);

        } else {


            if ((numerodigitado < numeroAleatorio) && (numerodigitado >= 0)) {

                resposta.innerText = 'digite o nemuro maior !!!';
                resposta.style.color = 'goldenrod';
                image.src = './imagem/images.jpeg';

            } else if ((numerodigitado > numeroAleatorio) && (numerodigitado < 11)) {

                resposta.innerText = 'digite o nemuro menor !!!';
                resposta.style.color = 'green';
                image.src = './imagem/images (1).jpeg';

            } else {
                resposta.innerText = 'numero de 0 á 10 seu borro !!!';
                resposta.style.color = 'crimson';
                image.src = './imagem/37f24020d9dd8ba1bec78a95aea974da.jpg'
            }
        }
    }, 3000);


}, 1000);


button.addEventListener('click', verifica);