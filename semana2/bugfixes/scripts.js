function changeButtonsTextColor() {
    const botoes = document.getElementsByClassName('botaoComprar');

    Array.prototype.map.call(botoes, (botao) => {
        botao.style.color = "white";
    });
}