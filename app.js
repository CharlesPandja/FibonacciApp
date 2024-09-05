// Crée un nouveau Web Worker
const worker = new Worker('worker.js');

// Récupère les éléments de l'interface
const numberInput = document.getElementById('number');
const calculateButton = document.getElementById('calculate');
const outputElement = document.getElementById('output');

// Lorsque l'utilisateur clique sur "Calculer"
calculateButton.addEventListener('click', () => {
    const number = parseInt(numberInput.value, 10);
    
    // Affiche un message pendant le calcul
    outputElement.textContent = 'Calcul en cours...';

    // Envoie le nombre au Web Worker
    worker.postMessage(number);
});

// Lorsque le Web Worker renvoie le résultat
worker.onmessage = function(event) {
    const result = event.data;
    // Affiche le résultat dans l'interface
    outputElement.textContent = result;
};

// Gestion des erreurs éventuelles
worker.onerror = function(error) {
    console.error('Erreur dans le worker:', error.message);
    outputElement.textContent = 'Une erreur est survenue.';
};