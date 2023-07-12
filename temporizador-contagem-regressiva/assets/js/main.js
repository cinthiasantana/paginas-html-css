(function () {

    // Função de seletor 

    const seletor = (el, all = false) => {
        el = el.trim()
        if (all) {
          return [...document.querySelectorAll(el)]
        } else {
          return document.querySelector(el)
        }
      }

    // Contagem Regressiva

    let contagemRegressiva = seletor('.contagemRegressiva');
    const resultado = contagemRegressiva.innerHTML;

    const contagemData = function () {
        let tempoRestante = new Date(contagemRegressiva.getAttribute('data-count')).getTime() - new Date().getTime();

        let dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
        let horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        let segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

        contagemRegressiva.innerHTML = resultado.replace('dias', dias).replace('horas', horas).replace('minutos', minutos).replace('segundos', segundos);
    }
    contagemData();
    setInterval(contagemData, 1000);
}
)()