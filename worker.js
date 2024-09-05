// Fonction de calcul récursif de Fibonacci
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Lorsque le worker reçoit un message, il commence le calcul
onmessage = function(event) {
    const number = event.data;
    const result = fibonacci(number);
    // Renvoie le résultat au script principal
    postMessage(result);
};