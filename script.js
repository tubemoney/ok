function updateInvestment() {
    const investmentElement = document.getElementById('investment');
    const targetInvestment = 49.27;
    const increment = 0.01;

    let currentInvestment = parseFloat(investmentElement.innerText.replace("$", ""));

    const animationInterval = setInterval(function () {
      currentInvestment += increment;

      if (currentInvestment >= targetInvestment) {
        currentInvestment = targetInvestment;
        clearInterval(animationInterval);
      }

      investmentElement.innerText = "$" + currentInvestment.toFixed(2);
    }, 10); // Intervalo de 10 milissegundos (0,01 segundo)
  }

  // Chame a função para iniciar a animação
  updateInvestment();