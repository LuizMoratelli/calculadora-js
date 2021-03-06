var num1;
var num2;
var op;  

function clean() {
    num1 = null;
    num2 = null;
    op = null;
    atualizarVisor('');
}

function atualizarVisor(valor) {
    if (document.getElementById('visor')) {
        document.getElementById('visor').value = valor;
    }
}

function calcular() {
    let n1 = parseFloat(num1) ? parseFloat(num1) : 0;
    let n2 = parseFloat(num2) ? parseFloat(num2) : 0;

    if (op == '+') {
        num1 = n1 + n2;
    } else if (op == '-') {
        num1 = n1 - n2;
    } else if (op == '/') {
        num1 = n1 / n2;
    } else if (op == '*') {
        num1 = n1 * n2;
    } else {
        num1 = "Operação inválida!";
    }

    num2 = null;
    op = null;

    atualizarVisor(num1);

    return num1;
}

function numero(n) {
    if (op) {
        num2 = num2 ? num2 + '' + n : n;
        atualizarVisor(num2);
    } else {
        num1 = num1 ? num1 + '' + n : n;
        atualizarVisor(num1);
    }

}

function operador(o) {
    if (o == '=') {
        calcular();
    } else if (op != null) {
        n1 = calcular();
        op = o;
        atualizarVisor(o);
    } else {
        op = o;
        atualizarVisor(o);
    }
}

function criarElemento(element, classList = [], funcao, valor) {
    const el = document.createElement(element);

    if (classList) {
        for (let i = 0; i < classList.length; i++) {
            el.classList.add(classList[i]);
        }
    }

    if (funcao) {
        el.addEventListener("click", function() {
            window[funcao.nome](funcao.valor);
        });
    }

    if (valor != null) {
        el.innerHTML = valor;
    }

    return el;
}

function criarVisor() {
    const visor = criarElemento("input", ["form-control", "text-right"]);
    visor.id = "visor";
    visor.setAttribute("readonly", "readonly");

    return visor;
}

function calculadora() {
    const container = criarElemento("div", ["container"]);

    /* Row 1 */

    const row1 = criarElemento("div", ["row"]);
    container.appendChild(row1);

    const divTitulo = criarElemento("div", ["col-7"]);
    row1.appendChild(divTitulo);

    const titulo = criarElemento("p", [], null, "Calculadora");
    divTitulo.appendChild(titulo);

    const divLimpar = criarElemento("div", ["col-5"]);
    row1.appendChild(divLimpar);

    const limpar = criarElemento("button", ["btn", "btn-warning", "text-white", "w-100"], {nome: "clean", valor: null}, "Limpar");
    divLimpar.appendChild(limpar);

    /* Row 2 */

    const row2 = criarElemento("div", ["row", "mt-2"]);
    container.appendChild(row2);

    const divVisor = criarElemento("div", ["col-12"]);
    row2.appendChild(divVisor);

    const visor = criarVisor();
    divVisor.appendChild(visor);

    /* Row 3 */
    const row3 = criarElemento("div", ["row"]);
    container.appendChild(row3);

    const div9 = criarElemento("div", ["col-3"]);
    row3.appendChild(div9);
    const btn9 = criarElemento("button", ["btn", "btn-calc", "btn-default", "w-100"], { nome: "numero", valor: 9 }, 9);
    div9.appendChild(btn9);

    const div8 = criarElemento("div", ["col-3"]);
    row3.appendChild(div8);
    const btn8 = criarElemento("button", ["btn", "btn-calc", "btn-default", "w-100"], { nome: "numero", valor: 8 }, 8);
    div8.appendChild(btn8);

    const div7 = criarElemento("div", ["col-3"]);
    row3.appendChild(div7);
    const btn7 = criarElemento("button", ["btn", "btn-calc", "btn-default", "w-100"], { nome: "numero", valor: 7 }, 7);
    div7.appendChild(btn7);

    const divDividido = criarElemento("div", ["col-3"]);
    row3.appendChild(divDividido);
    const btnDividio = criarElemento("button", ["btn", "btn-calc", "btn-default", "w-100"], { nome: "operador", valor: '/' }, '/');
    divDividido.appendChild(btnDividio);

    /* Row 4 */
    const row4 = criarElemento("div", ["row"]);
    container.appendChild(row4);

    const div6 = criarElemento("div", ["col-3"]);
    row4.appendChild(div6);
    const btn6 = criarElemento("button", ["btn", "btn-calc", "btn-default", "w-100"], { nome: "numero", valor: 6 }, 6);
    div6.appendChild(btn6);

    const div5 = criarElemento("div", ["col-3"]);
    row4.appendChild(div5);
    const btn5 = criarElemento("button", ["btn", "btn-calc", "btn-default", "w-100"], { nome: "numero", valor: 5 }, 5);
    div5.appendChild(btn5);

    const div4 = criarElemento("div", ["col-3"]);
    row4.appendChild(div4);
    const btn4 = criarElemento("button", ["btn", "btn-calc", "btn-default", "w-100"], { nome: "numero", valor: 4 }, 4);
    div4.appendChild(btn4);

    const divMultiplicado = criarElemento("div", ["col-3"]);
    row4.appendChild(divMultiplicado);
    const btMultiplicado = criarElemento("button", ["btn", "btn-calc", "btn-default", "w-100"], { nome: "operador", valor: '*' }, '*');
    divMultiplicado.appendChild(btMultiplicado);

    /* Row 5 */
    const row5 = criarElemento("div", ["row"]);
    container.appendChild(row5);

    const div3 = criarElemento("div", ["col-3"]);
    row5.appendChild(div3);
    const btn3 = criarElemento("button", ["btn", "btn-calc", "btn-default", "w-100"], { nome: "numero", valor: 3 }, 3);
    div3.appendChild(btn3);

    const div2 = criarElemento("div", ["col-3"]);
    row5.appendChild(div2);
    const btn2 = criarElemento("button", ["btn", "btn-calc", "btn-default", "w-100"], { nome: "numero", valor: 2 }, 2);
    div2.appendChild(btn2);

    const div1 = criarElemento("div", ["col-3"]);
    row5.appendChild(div1);
    const btn1 = criarElemento("button", ["btn", "btn-calc", "btn-default", "w-100"], { nome: "numero", valor: 1 }, 1);
    div1.appendChild(btn1);

    const divSomado = criarElemento("div", ["col-3"]);
    row5.appendChild(divSomado);
    const btSomado = criarElemento("button", ["btn", "btn-calc", "btn-default", "w-100"], { nome: "operador", valor: '+' }, '+');
    divSomado.appendChild(btSomado);

    /* Row 6 */
    const row6 = criarElemento("div", ["row"]);
    container.appendChild(row6);

    const div0 = criarElemento("div", ["col-6"]);
    row6.appendChild(div0);
    const btn0 = criarElemento("button", ["btn", "btn-calc", "btn-default", "w-100"], { nome: "numero", valor: 0 }, 0);
    div0.appendChild(btn0);

    const divIgual = criarElemento("div", ["col-3"]);
    row6.appendChild(divIgual);
    const btIgual = criarElemento("button", ["btn", "btn-calc", "btn-default", "w-100"], { nome: "operador", valor: '=' }, '=');
    divIgual.appendChild(btIgual);

    const divSubtraido = criarElemento("div", ["col-3"]);
    row6.appendChild(divSubtraido);
    const btSubtraido = criarElemento("button", ["btn", "btn-calc", "btn-default", "w-100"], { nome: "operador", valor: '-' }, '-');
    divSubtraido.appendChild(btSubtraido);

    document.getElementById("calculator").appendChild(container);
}

calculadora();