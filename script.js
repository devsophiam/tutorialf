// Exemplo 1: Tabuada
function runForTabuada() {
    const numero = parseInt(document.getElementById('for-tabuada').value);
    let output = '';
    for (let i = 1; i <= 10; i++) {
        output += `${numero} x ${i} = ${numero * i}\n`;
    }
    document.getElementById('forTabuadaOutput').textContent = output;
}

// Exemplo 2: Números Pares
function runForPares() {
    const limite = parseInt(document.getElementById('for-pares-end').value);
    let output = '';
    for (let i = 0; i <= limite; i += 2) {
        output += `${i} `;
    }
    document.getElementById('forParesOutput').textContent = output;
}

// Exemplo 3: Fatorial
function runForFatorial() {
    const numero = parseInt(document.getElementById('for-fatorial').value);
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
    document.getElementById('forFatorialOutput').textContent = `Fatorial de ${numero} = ${resultado}`;
}

// Exemplo 4: Contagem Regressiva
function runForRegressiva() {
    const inicio = parseInt(document.getElementById('for-regressiva').value);
    let output = '';
    for (let i = inicio; i >= 0; i--) {
        output += `${i} `;
    }
    document.getElementById('forRegressivaOutput').textContent = output;
}

// Exemplo 5: Multiplicação em Intervalo
function runForMultiplicacao() {
    const start = parseInt(document.getElementById('for-mult-start').value);
    const end = parseInt(document.getElementById('for-mult-end').value);
    const factor = parseInt(document.getElementById('for-mult-factor').value);
    let output = '';
    for (let i = start; i <= end; i++) {
        output += `${i} x ${factor} = ${i * factor}\n`;
    }
    document.getElementById('forMultiplicacaoOutput').textContent = output;
}

// ======= WHILE EXAMPLES =======

// Exemplo 1: Contagem Crescente
function runWhileCrescente() {
    const limite = parseInt(document.getElementById('while-crescente-end').value);
    let i = 0;
    let output = '';
    while (i <= limite) {
        output += `${i} `;
        i++;
    }
    document.getElementById('whileCrescenteOutput').textContent = output;
}

// Exemplo 2: Soma Acumulada
function runWhileSoma() {
    const limite = parseInt(document.getElementById('while-soma-end').value);
    let soma = 0;
    let i = 1;
    while (i <= limite) {
        soma += i;
        i++;
    }
    document.getElementById('whileSomaOutput').textContent = `Soma: ${soma}`;
}

// Exemplo 3: Sequência de Fibonacci
function runWhileFibonacci() {
    const termos = parseInt(document.getElementById('while-fibo-term').value);
    let output = '';
    let a = 0, b = 1, i = 1;
    while (i <= termos) {
        output += `${a} `;
        const temp = a + b;
        a = b;
        b = temp;
        i++;
    }
    document.getElementById('whileFiboOutput').textContent = output;
}

// Exemplo 4: Números Ímpares
function runWhileOdd() {
    const limite = parseInt(document.getElementById('while-odd-end').value);
    let i = 1;
    let output = '';
    while (i <= limite) {
        output += `${i} `;
        i += 2;
    }
    document.getElementById('whileOddOutput').textContent = output;
}

// Exemplo 5: Divisores
function runWhileDivisores() {
    const numero = parseInt(document.getElementById('while-div-num').value);
    let i = 1;
    let output = '';
    while (i <= numero) {
        if (numero % i === 0) {
            output += `${i} `;
        }
        i++;
    }
    document.getElementById('whileDivisoresOutput').textContent = output;
}

// ======= DO-WHILE EXAMPLES =======

// Exemplo 1: Repetir Nome
function runDoWhileName() {
    const nome = document.getElementById('do-name').value;
    const repeticoes = parseInt(document.getElementById('do-repeats').value);
    let i = 0;
    let output = '';
    do {
        output += `${nome} `;
        i++;
    } while (i < repeticoes);
    document.getElementById('doNameOutput').textContent = output;
}

// Exemplo 2: Soma de Dígitos
function runDoWhileSomaDigitos() {
    let numero = parseInt(document.getElementById('do-soma-digito').value);
    let soma = 0;
    do {
        soma += numero % 10;
        numero = Math.floor(numero / 10);
    } while (numero > 0);
    document.getElementById('doSomaDigitosOutput').textContent = `Soma dos dígitos: ${soma}`;
}

// Exemplo 3: Números Quadrados
function runDoWhileSquares() {
    const limite = parseInt(document.getElementById('do-squares-end').value);
    let i = 1;
    let output = '';
    do {
        output += `${i * i} `;
        i++;
    } while (i * i <= limite);
    document.getElementById('doSquaresOutput').textContent = output;
}

// Exemplo 4: Multiplicação Contínua
function runDoWhileMultiplicacao() {
    const numero = parseInt(document.getElementById('do-mult-num').value);
    const repeticoes = parseInt(document.getElementById('do-mult-count').value);
    let i = 1;
    let output = '';
    do {
        output += `${numero} x ${i} = ${numero * i}\n`;
        i++;
    } while (i <= repeticoes);
    document.getElementById('doMultiplicacaoOutput').textContent = output;
}

// Exemplo 5: Soma de Pares
function runDoWhileSomaPares() {
    const limite = parseInt(document.getElementById('do-sum-pairs-end').value);
    let i = 0;
    let soma = 0;
    do {
        soma += i;
        i += 2;
    } while (i <= limite);
    document.getElementById('doSomaParesOutput').textContent = `Soma: ${soma}`;
}