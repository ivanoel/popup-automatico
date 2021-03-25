// mostra popup automaticante despois de 2 segundos
const POPUP = document.querySelector('.popup');
const FECHAR = document.querySelector('.fechar');

window.onload = function() {
    setTimeout(function () {
        POPUP.style.display =  'block';


    }, 2000); //adiconando o tempo
}
// inserindo evento ao clicar fechar o popup
FECHAR.addEventListener('click', () => {
    POPUP.style.display = 'none';
})