document.getElementById("alertButton").addEventListener("click", function() {
    alert("Para a interatividade o foco era apenas sua funcionalidade, pouco importava o design e a experiencia do usúario");
});


document.getElementById('animacaoButton').addEventListener('click', function() {
    const colunaDireita = document.querySelector('#FinalAnos90 .colunaDireita');
    const tabela = document.querySelector('#FinalAnos90 .container');
    const som = document.getElementById('animacaoSom');

    // Verifica se a tabela existe
    if (tabela) {
        colunaDireita.classList.toggle('piscar'); 
        tabela.classList.toggle('tabelaMudouCor');

        if (colunaDireita.classList.contains('piscar')) {
            if (som.paused) {
                som.play().catch(error => console.error("Erro ao tocar o som:", error));
            }
        } else {
            som.pause();
            som.currentTime = 0;
        }
    } else {
        console.error("Elemento tabela não encontrado!");
    }
});

document.getElementById('submitPreferences').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('input[name="preferencias"]:checked');
    const selectedPreferences = Array.from(checkboxes).map(checkbox => checkbox.value);

    const resultadoDiv = document.getElementById('resultado');
    if (selectedPreferences.length > 0) {
        resultadoDiv.innerHTML = `Você selecionou: ${selectedPreferences.join(', ')}`;
    } else {
        resultadoDiv.innerHTML = 'Nenhuma preferência selecionada.';
    }
});

document.querySelector('#anos-2010').addEventListener('mousemove', parallax)
    function parallax(e) {
      this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX * speed) / 100
        const y = (window.innerHeight - e.pageY * speed) / 100

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
      })
    }




